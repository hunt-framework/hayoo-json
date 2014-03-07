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
        "word": "feldspar-language"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Algorithm.CRC",
          "name": "CRC",
          "package": "feldspar-language",
          "source": "src/Feldspar-Algorithm-CRC.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Algorithm CRC",
          "module": "Feldspar.Algorithm.CRC",
          "name": "CRC",
          "package": "feldspar-language",
          "partial": "CRC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Algorithm-CRC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Algorithm.CRC",
          "name": "CRC",
          "package": "feldspar-language",
          "source": "src/Feldspar-Algorithm-CRC.html#CRC",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Algorithm CRC",
          "module": "Feldspar.Algorithm.CRC",
          "name": "CRC",
          "package": "feldspar-language",
          "partial": "CRC",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Algorithm-CRC.html#t:CRC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Algorithm.CRC",
          "name": "CRC",
          "package": "feldspar-language",
          "signature": "CRC",
          "source": "src/Feldspar-Algorithm-CRC.html#CRC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Algorithm CRC",
          "module": "Feldspar.Algorithm.CRC",
          "name": "CRC",
          "package": "feldspar-language",
          "partial": "CRC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Algorithm-CRC.html#v:CRC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Algorithm.CRC",
          "name": "crc16",
          "package": "feldspar-language",
          "signature": "CRC (Data Word16)",
          "source": "src/Feldspar-Algorithm-CRC.html#crc16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Algorithm CRC",
          "module": "Feldspar.Algorithm.CRC",
          "name": "crc16",
          "package": "feldspar-language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Algorithm-CRC.html#v:crc16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate normal form CRC from a polynominal\n\u003c/p\u003e",
          "module": "Feldspar.Algorithm.CRC",
          "name": "crcNaive",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a -\u003e Vector1 Word8 -\u003e Data a",
          "source": "src/Feldspar-Algorithm-CRC.html#crcNaive",
          "type": "function"
        },
        "index": {
          "description": "Calculate normal form CRC from polynominal",
          "hierarchy": "Feldspar Algorithm CRC",
          "module": "Feldspar.Algorithm.CRC",
          "name": "crcNaive",
          "normalized": "Data a-\u003eData a-\u003eVector Word-\u003eData a",
          "package": "feldspar-language",
          "partial": "Naive",
          "signature": "Data a-\u003eData a-\u003eVector Word-\u003eData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Algorithm-CRC.html#v:crcNaive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the normal form CRC using a table\n\u003c/p\u003e",
          "module": "Feldspar.Algorithm.CRC",
          "name": "crcNormal",
          "package": "feldspar-language",
          "signature": "Vector1 a -\u003e Data a -\u003e Vector1 Word8 -\u003e Data a",
          "source": "src/Feldspar-Algorithm-CRC.html#crcNormal",
          "type": "function"
        },
        "index": {
          "description": "Calculate the normal form CRC using table",
          "hierarchy": "Feldspar Algorithm CRC",
          "module": "Feldspar.Algorithm.CRC",
          "name": "crcNormal",
          "normalized": "Vector a-\u003eData a-\u003eVector Word-\u003eData a",
          "package": "feldspar-language",
          "partial": "Normal",
          "signature": "Vector a-\u003eData a-\u003eVector Word-\u003eData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Algorithm-CRC.html#v:crcNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the reflected form CRC using a table\n needs reflected tables\n\u003c/p\u003e",
          "module": "Feldspar.Algorithm.CRC",
          "name": "crcReflected",
          "package": "feldspar-language",
          "signature": "Vector1 a -\u003e Data a -\u003e Vector1 Word8 -\u003e Data a",
          "source": "src/Feldspar-Algorithm-CRC.html#crcReflected",
          "type": "function"
        },
        "index": {
          "description": "Calculate the reflected form CRC using table needs reflected tables",
          "hierarchy": "Feldspar Algorithm CRC",
          "module": "Feldspar.Algorithm.CRC",
          "name": "crcReflected",
          "normalized": "Vector a-\u003eData a-\u003eVector Word-\u003eData a",
          "package": "feldspar-language",
          "partial": "Reflected",
          "signature": "Vector a-\u003eData a-\u003eVector Word-\u003eData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Algorithm-CRC.html#v:crcReflected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Algorithm.CRC",
          "name": "init",
          "package": "feldspar-language",
          "signature": "a",
          "source": "src/Feldspar-Algorithm-CRC.html#CRC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Algorithm CRC",
          "module": "Feldspar.Algorithm.CRC",
          "name": "init",
          "package": "feldspar-language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Algorithm-CRC.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Algorithm.CRC",
          "name": "makeCrcTable",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Vector1 a",
          "source": "src/Feldspar-Algorithm-CRC.html#makeCrcTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Algorithm CRC",
          "module": "Feldspar.Algorithm.CRC",
          "name": "makeCrcTable",
          "normalized": "Data a-\u003eVector a",
          "package": "feldspar-language",
          "partial": "Crc Table",
          "signature": "Data a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Algorithm-CRC.html#v:makeCrcTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Algorithm.CRC",
          "name": "name",
          "package": "feldspar-language",
          "signature": "String",
          "source": "src/Feldspar-Algorithm-CRC.html#CRC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Algorithm CRC",
          "module": "Feldspar.Algorithm.CRC",
          "name": "name",
          "package": "feldspar-language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Algorithm-CRC.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Algorithm.CRC",
          "name": "poly",
          "package": "feldspar-language",
          "signature": "a",
          "source": "src/Feldspar-Algorithm-CRC.html#CRC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Algorithm CRC",
          "module": "Feldspar.Algorithm.CRC",
          "name": "poly",
          "package": "feldspar-language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Algorithm-CRC.html#v:poly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReflect the bottom b bits of value t\n\u003c/p\u003e",
          "module": "Feldspar.Algorithm.CRC",
          "name": "reflect",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data Length -\u003e Data a",
          "source": "src/Feldspar-Algorithm-CRC.html#reflect",
          "type": "function"
        },
        "index": {
          "description": "Reflect the bottom bits of value",
          "hierarchy": "Feldspar Algorithm CRC",
          "module": "Feldspar.Algorithm.CRC",
          "name": "reflect",
          "normalized": "Data a-\u003eData Length-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData Length-\u003eData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Algorithm-CRC.html#v:reflect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Algorithm.CRC",
          "name": "reflectIn",
          "package": "feldspar-language",
          "signature": "Bool",
          "source": "src/Feldspar-Algorithm-CRC.html#CRC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Algorithm CRC",
          "module": "Feldspar.Algorithm.CRC",
          "name": "reflectIn",
          "package": "feldspar-language",
          "partial": "In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Algorithm-CRC.html#v:reflectIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Algorithm.CRC",
          "name": "reflectOut",
          "package": "feldspar-language",
          "signature": "Bool",
          "source": "src/Feldspar-Algorithm-CRC.html#CRC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Algorithm CRC",
          "module": "Feldspar.Algorithm.CRC",
          "name": "reflectOut",
          "package": "feldspar-language",
          "partial": "Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Algorithm-CRC.html#v:reflectOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Algorithm.CRC",
          "name": "tstBit",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data Index -\u003e Data Bool",
          "source": "src/Feldspar-Algorithm-CRC.html#tstBit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Algorithm CRC",
          "module": "Feldspar.Algorithm.CRC",
          "name": "tstBit",
          "normalized": "Data a-\u003eData Index-\u003eData Bool",
          "package": "feldspar-language",
          "partial": "Bit",
          "signature": "Data a-\u003eData Index-\u003eData Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Algorithm-CRC.html#v:tstBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Algorithm.CRC",
          "name": "width",
          "package": "feldspar-language",
          "signature": "Index",
          "source": "src/Feldspar-Algorithm-CRC.html#CRC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Algorithm CRC",
          "module": "Feldspar.Algorithm.CRC",
          "name": "width",
          "package": "feldspar-language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Algorithm-CRC.html#v:width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Algorithm.CRC",
          "name": "xorOut",
          "package": "feldspar-language",
          "signature": "a",
          "source": "src/Feldspar-Algorithm-CRC.html#CRC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Algorithm CRC",
          "module": "Feldspar.Algorithm.CRC",
          "name": "xorOut",
          "package": "feldspar-language",
          "partial": "Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Algorithm-CRC.html#v:xorOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Algorithm.FFT",
          "name": "FFT",
          "package": "feldspar-language",
          "source": "src/Feldspar-Algorithm-FFT.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Algorithm FFT",
          "module": "Feldspar.Algorithm.FFT",
          "name": "FFT",
          "package": "feldspar-language",
          "partial": "FFT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Algorithm-FFT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRadix-2 Decimation-In-Frequeny Fast Fourier Transformation of the given complex vector\n   The given vector must be power-of-two sized, (for example 2, 4, 8, 16, 32, etc.)\n\u003c/p\u003e",
          "module": "Feldspar.Algorithm.FFT",
          "name": "fft",
          "package": "feldspar-language",
          "signature": "Vector1 (Complex Float) -\u003e Vector1 (Complex Float)",
          "source": "src/Feldspar-Algorithm-FFT.html#fft",
          "type": "function"
        },
        "index": {
          "description": "Radix-2 Decimation-In-Frequeny Fast Fourier Transformation of the given complex vector The given vector must be power-of-two sized for example etc",
          "hierarchy": "Feldspar Algorithm FFT",
          "module": "Feldspar.Algorithm.FFT",
          "name": "fft",
          "normalized": "Vector(Complex Float)-\u003eVector(Complex Float)",
          "package": "feldspar-language",
          "signature": "Vector(Complex Float)-\u003eVector(Complex Float)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Algorithm-FFT.html#v:fft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRadix-2 Decimation-In-Frequeny Inverse Fast Fourier Transformation of the given complex vector\n   The given vector must be power-of-two sized, (for example 2, 4, 8, 16, 32, etc.)\n\u003c/p\u003e",
          "module": "Feldspar.Algorithm.FFT",
          "name": "ifft",
          "package": "feldspar-language",
          "signature": "Vector1 (Complex Float) -\u003e Vector1 (Complex Float)",
          "source": "src/Feldspar-Algorithm-FFT.html#ifft",
          "type": "function"
        },
        "index": {
          "description": "Radix-2 Decimation-In-Frequeny Inverse Fast Fourier Transformation of the given complex vector The given vector must be power-of-two sized for example etc",
          "hierarchy": "Feldspar Algorithm FFT",
          "module": "Feldspar.Algorithm.FFT",
          "name": "ifft",
          "normalized": "Vector(Complex Float)-\u003eVector(Complex Float)",
          "package": "feldspar-language",
          "signature": "Vector(Complex Float)-\u003eVector(Complex Float)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Algorithm-FFT.html#v:ifft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003eVector\u003c/code\u003e interface to packed sequences of bits\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Feldspar.BitVector",
          "name": "BitVector",
          "package": "feldspar-language",
          "source": "src/Feldspar-BitVector.html",
          "type": "module"
        },
        "index": {
          "description": "Vector interface to packed sequences of bits",
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "BitVector",
          "package": "feldspar-language",
          "partial": "Bit Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.BitVector",
          "name": "BitVector",
          "package": "feldspar-language",
          "source": "src/Feldspar-BitVector.html#BitVector",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "BitVector",
          "package": "feldspar-language",
          "partial": "Bit Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#t:BitVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.BitVector",
          "name": "Segment",
          "package": "feldspar-language",
          "source": "src/Feldspar-BitVector.html#Segment",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "Segment",
          "package": "feldspar-language",
          "partial": "Segment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#t:Segment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eUnit\u003c/a\u003e\u003c/code\u003e is the internal representation of a \u003ccode\u003e\u003ca\u003eBitVector\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.BitVector",
          "name": "Unit",
          "package": "feldspar-language",
          "source": "src/Feldspar-BitVector.html#Unit",
          "type": "class"
        },
        "index": {
          "description": "Unit is the internal representation of BitVector",
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "Unit",
          "package": "feldspar-language",
          "partial": "Unit",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#t:Unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.BitVector",
          "name": "(++)",
          "package": "feldspar-language",
          "signature": "BitVector w -\u003e BitVector w -\u003e BitVector w",
          "source": "src/Feldspar-BitVector.html#%2B%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "(++) ++",
          "normalized": "BitVector a-\u003eBitVector a-\u003eBitVector a",
          "package": "feldspar-language",
          "signature": "BitVector w-\u003eBitVector w-\u003eBitVector w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#v:-43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.BitVector",
          "name": "BitVector",
          "package": "feldspar-language",
          "signature": "BitVector",
          "source": "src/Feldspar-BitVector.html#BitVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "BitVector",
          "package": "feldspar-language",
          "partial": "Bit Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#v:BitVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.BitVector",
          "name": "Segment",
          "package": "feldspar-language",
          "signature": "Segment",
          "source": "src/Feldspar-BitVector.html#Segment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "Segment",
          "package": "feldspar-language",
          "partial": "Segment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#v:Segment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.BitVector",
          "name": "boolFun1",
          "package": "feldspar-language",
          "signature": "(Data Bool -\u003e Data Bool) -\u003e ((Data w -\u003e Data w) -\u003e t) -\u003e t",
          "source": "src/Feldspar-BitVector.html#boolFun1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "boolFun1",
          "normalized": "(Data Bool-\u003eData Bool)-\u003e((Data a-\u003eData a)-\u003eb)-\u003eb",
          "package": "feldspar-language",
          "partial": "Fun",
          "signature": "(Data Bool-\u003eData Bool)-\u003e((Data w-\u003eData w)-\u003et)-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#v:boolFun1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.BitVector",
          "name": "boolFun2",
          "package": "feldspar-language",
          "signature": "(Data Bool -\u003e Data Bool -\u003e Data Bool) -\u003e ((Data w -\u003e Data w -\u003e Data w) -\u003e t) -\u003e t",
          "source": "src/Feldspar-BitVector.html#boolFun2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "boolFun2",
          "normalized": "(Data Bool-\u003eData Bool-\u003eData Bool)-\u003e((Data a-\u003eData a-\u003eData a)-\u003eb)-\u003eb",
          "package": "feldspar-language",
          "partial": "Fun",
          "signature": "(Data Bool-\u003eData Bool-\u003eData Bool)-\u003e((Data w-\u003eData w-\u003eData w)-\u003et)-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#v:boolFun2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.BitVector",
          "name": "drop",
          "package": "feldspar-language",
          "signature": "Data Length -\u003e Data w -\u003e BitVector w -\u003e BitVector w",
          "source": "src/Feldspar-BitVector.html#drop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "drop",
          "normalized": "Data Length-\u003eData a-\u003eBitVector a-\u003eBitVector a",
          "package": "feldspar-language",
          "signature": "Data Length-\u003eData w-\u003eBitVector w-\u003eBitVector w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.BitVector",
          "name": "dropUnits",
          "package": "feldspar-language",
          "signature": "Data Length -\u003e BitVector w -\u003e BitVector w",
          "source": "src/Feldspar-BitVector.html#dropUnits",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "dropUnits",
          "normalized": "Data Length-\u003eBitVector a-\u003eBitVector a",
          "package": "feldspar-language",
          "partial": "Units",
          "signature": "Data Length-\u003eBitVector w-\u003eBitVector w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#v:dropUnits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.BitVector",
          "name": "elements",
          "package": "feldspar-language",
          "signature": "Data Index -\u003e Data w",
          "source": "src/Feldspar-BitVector.html#Segment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "elements",
          "normalized": "Data Index-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data Index-\u003eData w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#v:elements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.BitVector",
          "name": "fold",
          "package": "feldspar-language",
          "signature": "(a -\u003e Data Bool -\u003e a) -\u003e a -\u003e BitVector w -\u003e a",
          "source": "src/Feldspar-BitVector.html#fold",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "fold",
          "normalized": "(a-\u003eData Bool-\u003ea)-\u003ea-\u003eBitVector b-\u003ea",
          "package": "feldspar-language",
          "signature": "(a-\u003eData Bool-\u003ea)-\u003ea-\u003eBitVector w-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.BitVector",
          "name": "freezeBitVector",
          "package": "feldspar-language",
          "signature": "BitVector w -\u003e Data [w]",
          "source": "src/Feldspar-BitVector.html#freezeBitVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "freezeBitVector",
          "normalized": "BitVector a-\u003eData[a]",
          "package": "feldspar-language",
          "partial": "Bit Vector",
          "signature": "BitVector w-\u003eData[w]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#v:freezeBitVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.BitVector",
          "name": "fromBits",
          "package": "feldspar-language",
          "signature": "[Bool] -\u003e BitVector w",
          "source": "src/Feldspar-BitVector.html#fromBits",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "fromBits",
          "normalized": "[Bool]-\u003eBitVector a",
          "package": "feldspar-language",
          "partial": "Bits",
          "signature": "[Bool]-\u003eBitVector w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#v:fromBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.BitVector",
          "name": "fromUnits",
          "package": "feldspar-language",
          "signature": "[w] -\u003e BitVector w",
          "source": "src/Feldspar-BitVector.html#fromUnits",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "fromUnits",
          "normalized": "[a]-\u003eBitVector a",
          "package": "feldspar-language",
          "partial": "Units",
          "signature": "[w]-\u003eBitVector w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#v:fromUnits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms a bool vector to a bitvector.\n Length of the vector has to be divisible by the wordlength,\n otherwise booleans at the end will be dropped.\n\u003c/p\u003e",
          "module": "Feldspar.BitVector",
          "name": "fromVector",
          "package": "feldspar-language",
          "signature": "Vector (Data Bool) -\u003e BitVector w",
          "source": "src/Feldspar-BitVector.html#fromVector",
          "type": "function"
        },
        "index": {
          "description": "Transforms bool vector to bitvector Length of the vector has to be divisible by the wordlength otherwise booleans at the end will be dropped",
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "fromVector",
          "normalized": "Vector(Data Bool)-\u003eBitVector a",
          "package": "feldspar-language",
          "partial": "Vector",
          "signature": "Vector(Data Bool)-\u003eBitVector w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#v:fromVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.BitVector",
          "name": "head",
          "package": "feldspar-language",
          "signature": "BitVector w -\u003e Data Bool",
          "source": "src/Feldspar-BitVector.html#head",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "head",
          "normalized": "BitVector a-\u003eData Bool",
          "package": "feldspar-language",
          "signature": "BitVector w-\u003eData Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.BitVector",
          "name": "indexed",
          "package": "feldspar-language",
          "signature": "Data Length -\u003e (Data Index -\u003e Data Bool) -\u003e BitVector w",
          "source": "src/Feldspar-BitVector.html#indexed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "indexed",
          "normalized": "Data Length-\u003e(Data Index-\u003eData Bool)-\u003eBitVector a",
          "package": "feldspar-language",
          "signature": "Data Length-\u003e(Data Index-\u003eData Bool)-\u003eBitVector w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#v:indexed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.BitVector",
          "name": "length",
          "package": "feldspar-language",
          "signature": "BitVector w -\u003e Data Length",
          "source": "src/Feldspar-BitVector.html#length",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "length",
          "normalized": "BitVector a-\u003eData Length",
          "package": "feldspar-language",
          "signature": "BitVector w-\u003eData Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.BitVector",
          "name": "map",
          "package": "feldspar-language",
          "signature": "(Data Bool -\u003e Data Bool) -\u003e BitVector w -\u003e BitVector w",
          "source": "src/Feldspar-BitVector.html#map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "map",
          "normalized": "(Data Bool-\u003eData Bool)-\u003eBitVector a-\u003eBitVector a",
          "package": "feldspar-language",
          "signature": "(Data Bool-\u003eData Bool)-\u003eBitVector w-\u003eBitVector w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.BitVector",
          "name": "numOfUnits",
          "package": "feldspar-language",
          "signature": "BitVector w -\u003e Data Length",
          "source": "src/Feldspar-BitVector.html#numOfUnits",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "numOfUnits",
          "normalized": "BitVector a-\u003eData Length",
          "package": "feldspar-language",
          "partial": "Of Units",
          "signature": "BitVector w-\u003eData Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#v:numOfUnits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.BitVector",
          "name": "numUnits",
          "package": "feldspar-language",
          "signature": "Data Length",
          "source": "src/Feldspar-BitVector.html#Segment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "numUnits",
          "package": "feldspar-language",
          "partial": "Units",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#v:numUnits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.BitVector",
          "name": "replUnit",
          "package": "feldspar-language",
          "signature": "Data Length -\u003e w -\u003e BitVector w",
          "source": "src/Feldspar-BitVector.html#replUnit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "replUnit",
          "normalized": "Data Length-\u003ea-\u003eBitVector a",
          "package": "feldspar-language",
          "partial": "Unit",
          "signature": "Data Length-\u003ew-\u003eBitVector w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#v:replUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.BitVector",
          "name": "segments",
          "package": "feldspar-language",
          "signature": "[Segment w]",
          "source": "src/Feldspar-BitVector.html#BitVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "segments",
          "normalized": "[Segment a]",
          "package": "feldspar-language",
          "signature": "[Segment w]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#v:segments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.BitVector",
          "name": "tBV",
          "package": "feldspar-language",
          "signature": "Patch w w -\u003e Patch (BitVector w) (BitVector w)",
          "source": "src/Feldspar-BitVector.html#tBV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "tBV",
          "normalized": "Patch a a-\u003ePatch(BitVector a)(BitVector a)",
          "package": "feldspar-language",
          "partial": "BV",
          "signature": "Patch w w-\u003ePatch(BitVector w)(BitVector w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#v:tBV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.BitVector",
          "name": "tail",
          "package": "feldspar-language",
          "signature": "Data Bool -\u003e BitVector w -\u003e BitVector w",
          "source": "src/Feldspar-BitVector.html#tail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "tail",
          "normalized": "Data Bool-\u003eBitVector a-\u003eBitVector a",
          "package": "feldspar-language",
          "signature": "Data Bool-\u003eBitVector w-\u003eBitVector w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.BitVector",
          "name": "takeUnits",
          "package": "feldspar-language",
          "signature": "Data Length -\u003e BitVector w -\u003e BitVector w",
          "source": "src/Feldspar-BitVector.html#takeUnits",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "takeUnits",
          "normalized": "Data Length-\u003eBitVector a-\u003eBitVector a",
          "package": "feldspar-language",
          "partial": "Units",
          "signature": "Data Length-\u003eBitVector w-\u003eBitVector w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#v:takeUnits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.BitVector",
          "name": "toVector",
          "package": "feldspar-language",
          "signature": "BitVector w -\u003e Vector (Data Bool)",
          "source": "src/Feldspar-BitVector.html#toVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "toVector",
          "normalized": "BitVector a-\u003eVector(Data Bool)",
          "package": "feldspar-language",
          "partial": "Vector",
          "signature": "BitVector w-\u003eVector(Data Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#v:toVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.BitVector",
          "name": "unfreezeBitVector",
          "package": "feldspar-language",
          "signature": "Data [w] -\u003e BitVector w",
          "source": "src/Feldspar-BitVector.html#unfreezeBitVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "unfreezeBitVector",
          "normalized": "Data[a]-\u003eBitVector a",
          "package": "feldspar-language",
          "partial": "Bit Vector",
          "signature": "Data[w]-\u003eBitVector w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#v:unfreezeBitVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.BitVector",
          "name": "width",
          "package": "feldspar-language",
          "signature": "Proxy w -\u003e Length",
          "source": "src/Feldspar-BitVector.html#width",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "width",
          "normalized": "Proxy a-\u003eLength",
          "package": "feldspar-language",
          "signature": "Proxy w-\u003eLength",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#v:width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.BitVector",
          "name": "zipWith",
          "package": "feldspar-language",
          "signature": "(Data Bool -\u003e Data Bool -\u003e Data Bool) -\u003e BitVector w -\u003e BitVector w -\u003e BitVector w",
          "source": "src/Feldspar-BitVector.html#zipWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar BitVector",
          "module": "Feldspar.BitVector",
          "name": "zipWith",
          "normalized": "(Data Bool-\u003eData Bool-\u003eData Bool)-\u003eBitVector a-\u003eBitVector a-\u003eBitVector a",
          "package": "feldspar-language",
          "partial": "With",
          "signature": "(Data Bool-\u003eData Bool-\u003eData Bool)-\u003eBitVector w-\u003eBitVector w-\u003eBitVector w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-BitVector.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneral interfaces to collections of data\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Feldspar.Core.Collection",
          "name": "Collection",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Collection.html",
          "type": "module"
        },
        "index": {
          "description": "General interfaces to collections of data",
          "hierarchy": "Feldspar Core Collection",
          "module": "Feldspar.Core.Collection",
          "name": "Collection",
          "package": "feldspar-language",
          "partial": "Collection",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Collection.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollection index type\n\u003c/p\u003e",
          "module": "Feldspar.Core.Collection",
          "name": "CollIndex",
          "package": "feldspar-language",
          "signature": "CollIndex",
          "type": "function"
        },
        "index": {
          "description": "Collection index type",
          "hierarchy": "Feldspar Core Collection",
          "module": "Feldspar.Core.Collection",
          "name": "CollIndex",
          "package": "feldspar-language",
          "partial": "Coll Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Collection.html#t:CollIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMapping over collections\n\u003c/p\u003e",
          "module": "Feldspar.Core.Collection",
          "name": "CollMap",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Collection.html#CollMap",
          "type": "class"
        },
        "index": {
          "description": "Mapping over collections",
          "hierarchy": "Feldspar Core Collection",
          "module": "Feldspar.Core.Collection",
          "name": "CollMap",
          "package": "feldspar-language",
          "partial": "Coll Map",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Collection.html#t:CollMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollection size type\n\u003c/p\u003e",
          "module": "Feldspar.Core.Collection",
          "name": "CollSize",
          "package": "feldspar-language",
          "signature": "CollSize",
          "type": "function"
        },
        "index": {
          "description": "Collection size type",
          "hierarchy": "Feldspar Core Collection",
          "module": "Feldspar.Core.Collection",
          "name": "CollSize",
          "package": "feldspar-language",
          "partial": "Coll Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Collection.html#t:CollSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollection element type\n\u003c/p\u003e",
          "module": "Feldspar.Core.Collection",
          "name": "Elem",
          "package": "feldspar-language",
          "signature": "Elem",
          "type": "function"
        },
        "index": {
          "description": "Collection element type",
          "hierarchy": "Feldspar Core Collection",
          "module": "Feldspar.Core.Collection",
          "name": "Elem",
          "package": "feldspar-language",
          "partial": "Elem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Collection.html#t:Elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData structures that support indexing\n\u003c/p\u003e",
          "module": "Feldspar.Core.Collection",
          "name": "Indexed",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Collection.html#Indexed",
          "type": "class"
        },
        "index": {
          "description": "Data structures that support indexing",
          "hierarchy": "Feldspar Core Collection",
          "module": "Feldspar.Core.Collection",
          "name": "Indexed",
          "package": "feldspar-language",
          "partial": "Indexed",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Collection.html#t:Indexed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSized data structures\n\u003c/p\u003e",
          "module": "Feldspar.Core.Collection",
          "name": "Sized",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Collection.html#Sized",
          "type": "class"
        },
        "index": {
          "description": "Sized data structures",
          "hierarchy": "Feldspar Core Collection",
          "module": "Feldspar.Core.Collection",
          "name": "Sized",
          "package": "feldspar-language",
          "partial": "Sized",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Collection.html#t:Sized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Collection",
          "name": "(!)",
          "package": "feldspar-language",
          "signature": "a -\u003e CollIndex a -\u003e Elem a",
          "source": "src/Feldspar-Core-Collection.html#%21",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Collection",
          "module": "Feldspar.Core.Collection",
          "name": "(!) !",
          "normalized": "a-\u003eCollIndex a-\u003eElem a",
          "package": "feldspar-language",
          "signature": "a-\u003eCollIndex a-\u003eElem a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Collection.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Collection",
          "name": "collMap",
          "package": "feldspar-language",
          "signature": "(Elem a -\u003e Elem b) -\u003e a -\u003e b",
          "source": "src/Feldspar-Core-Collection.html#collMap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Collection",
          "module": "Feldspar.Core.Collection",
          "name": "collMap",
          "normalized": "(Elem a-\u003eElem b)-\u003ea-\u003eb",
          "package": "feldspar-language",
          "partial": "Map",
          "signature": "(Elem a-\u003eElem b)-\u003ea-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Collection.html#v:collMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Collection",
          "name": "collSize",
          "package": "feldspar-language",
          "signature": "a -\u003e CollSize a",
          "source": "src/Feldspar-Core-Collection.html#collSize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Collection",
          "module": "Feldspar.Core.Collection",
          "name": "collSize",
          "normalized": "a-\u003eCollSize a",
          "package": "feldspar-language",
          "partial": "Size",
          "signature": "a-\u003eCollSize a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Collection.html#v:collSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Collection",
          "name": "setCollSize",
          "package": "feldspar-language",
          "signature": "CollSize a -\u003e a -\u003e a",
          "source": "src/Feldspar-Core-Collection.html#setCollSize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Collection",
          "module": "Feldspar.Core.Collection",
          "name": "setCollSize",
          "normalized": "CollSize a-\u003ea-\u003ea",
          "package": "feldspar-language",
          "partial": "Coll Size",
          "signature": "CollSize a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Collection.html#v:setCollSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Array",
          "name": "Array",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Array.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Array",
          "module": "Feldspar.Core.Constructs.Array",
          "name": "Array",
          "package": "feldspar-language",
          "partial": "Array",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Array.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Array",
          "name": "Array",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Array.html#Array",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Array",
          "module": "Feldspar.Core.Constructs.Array",
          "name": "Array",
          "package": "feldspar-language",
          "partial": "Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Array.html#t:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Array",
          "name": "Append",
          "package": "feldspar-language",
          "signature": "Array ([a] :-\u003e ([a] :-\u003e Full [a]))",
          "source": "src/Feldspar-Core-Constructs-Array.html#Array",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Array",
          "module": "Feldspar.Core.Constructs.Array",
          "name": "Append",
          "normalized": "Array([a]-\u003e([a]-\u003eFull[a]))",
          "package": "feldspar-language",
          "partial": "Append",
          "signature": "Array([a]-\u003e([a]-\u003eFull[a]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Array.html#v:Append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Array",
          "name": "GetIx",
          "package": "feldspar-language",
          "signature": "Array ([a] :-\u003e (Index :-\u003e Full a))",
          "source": "src/Feldspar-Core-Constructs-Array.html#Array",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Array",
          "module": "Feldspar.Core.Constructs.Array",
          "name": "GetIx",
          "normalized": "Array([a]-\u003e(Index-\u003eFull a))",
          "package": "feldspar-language",
          "partial": "Get Ix",
          "signature": "Array([a]-\u003e(Index-\u003eFull a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Array.html#v:GetIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Array",
          "name": "GetLength",
          "package": "feldspar-language",
          "signature": "Array ([a] :-\u003e Full Length)",
          "source": "src/Feldspar-Core-Constructs-Array.html#Array",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Array",
          "module": "Feldspar.Core.Constructs.Array",
          "name": "GetLength",
          "normalized": "Array([a]-\u003eFull Length)",
          "package": "feldspar-language",
          "partial": "Get Length",
          "signature": "Array([a]-\u003eFull Length)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Array.html#v:GetLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Array",
          "name": "Parallel",
          "package": "feldspar-language",
          "signature": "Array (Length :-\u003e ((Index -\u003e a) :-\u003e Full [a]))",
          "source": "src/Feldspar-Core-Constructs-Array.html#Array",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Array",
          "module": "Feldspar.Core.Constructs.Array",
          "name": "Parallel",
          "normalized": "Array(Length-\u003e((Index-\u003ea)-\u003eFull[a]))",
          "package": "feldspar-language",
          "partial": "Parallel",
          "signature": "Array(Length-\u003e((Index-\u003ea)-\u003eFull[a]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Array.html#v:Parallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Array",
          "name": "Sequential",
          "package": "feldspar-language",
          "signature": "Array (Length :-\u003e (st :-\u003e ((Index -\u003e st -\u003e (a, st)) :-\u003e Full [a])))",
          "source": "src/Feldspar-Core-Constructs-Array.html#Array",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Array",
          "module": "Feldspar.Core.Constructs.Array",
          "name": "Sequential",
          "normalized": "Array(Length-\u003e(a-\u003e((Index-\u003ea-\u003e(b,a))-\u003eFull[b])))",
          "package": "feldspar-language",
          "partial": "Sequential",
          "signature": "Array(Length-\u003e(st-\u003e((Index-\u003est-\u003e(a,st))-\u003eFull[a])))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Array.html#v:Sequential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Array",
          "name": "SetIx",
          "package": "feldspar-language",
          "signature": "Array ([a] :-\u003e (Index :-\u003e (a :-\u003e Full [a])))",
          "source": "src/Feldspar-Core-Constructs-Array.html#Array",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Array",
          "module": "Feldspar.Core.Constructs.Array",
          "name": "SetIx",
          "normalized": "Array([a]-\u003e(Index-\u003e(a-\u003eFull[a])))",
          "package": "feldspar-language",
          "partial": "Set Ix",
          "signature": "Array([a]-\u003e(Index-\u003e(a-\u003eFull[a])))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Array.html#v:SetIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Array",
          "name": "SetLength",
          "package": "feldspar-language",
          "signature": "Array (Length :-\u003e ([a] :-\u003e Full [a]))",
          "source": "src/Feldspar-Core-Constructs-Array.html#Array",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Array",
          "module": "Feldspar.Core.Constructs.Array",
          "name": "SetLength",
          "normalized": "Array(Length-\u003e([a]-\u003eFull[a]))",
          "package": "feldspar-language",
          "partial": "Set Length",
          "signature": "Array(Length-\u003e([a]-\u003eFull[a]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Array.html#v:SetLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterpretation of binding constructs\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Feldspar.Core.Constructs.Binding",
          "name": "Binding",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Binding.html",
          "type": "module"
        },
        "index": {
          "description": "Interpretation of binding constructs",
          "hierarchy": "Feldspar Core Constructs Binding",
          "module": "Feldspar.Core.Constructs.Binding",
          "name": "Binding",
          "package": "feldspar-language",
          "partial": "Binding",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Binding.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Binding",
          "name": "betaReduce",
          "package": "feldspar-language",
          "signature": "ASTF (dom :|| Typeable) a-\u003e ASTF (dom :|| Typeable) (a -\u003e b)-\u003e ASTF (dom :|| Typeable) b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Binding",
          "module": "Feldspar.Core.Constructs.Binding",
          "name": "betaReduce",
          "normalized": "ASTF(a Typeable)b-\u003eASTF(a Typeable)(b-\u003ec)-\u003eASTF(a Typeable)c",
          "package": "feldspar-language",
          "partial": "Reduce",
          "signature": "ASTF(dom Typeable)a-\u003eASTF(dom Typeable)(a-\u003eb)-\u003eASTF(dom Typeable)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Binding.html#v:betaReduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Binding",
          "name": "cLambda",
          "package": "feldspar-language",
          "signature": "VarId -\u003e CLambda Type (b :-\u003e Full (a -\u003e b))",
          "source": "src/Feldspar-Core-Constructs-Binding.html#cLambda",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Binding",
          "module": "Feldspar.Core.Constructs.Binding",
          "name": "cLambda",
          "normalized": "VarId-\u003eCLambda Type(a-\u003eFull(b-\u003ea))",
          "package": "feldspar-language",
          "partial": "Lambda",
          "signature": "VarId-\u003eCLambda Type(b-\u003eFull(a-\u003eb))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Binding.html#v:cLambda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssumes that the expression is a \u003ccode\u003e\u003ca\u003eLambda\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Core.Constructs.Binding",
          "name": "optimizeFunction",
          "package": "feldspar-language",
          "signature": "(ASTF (dom :|| Typeable) b -\u003e Opt (ASTF (Decor Info (dom :|| Typeable)) b))-\u003e Info a-\u003e ASTF (dom :|| Typeable) (a -\u003e b) -\u003e Opt (ASTF (Decor Info (dom :|| Typeable)) (a -\u003e b))",
          "type": "function"
        },
        "index": {
          "description": "Assumes that the expression is Lambda",
          "hierarchy": "Feldspar Core Constructs Binding",
          "module": "Feldspar.Core.Constructs.Binding",
          "name": "optimizeFunction",
          "normalized": "(ASTF(a Typeable)b-\u003eOpt(ASTF(Decor Info(a Typeable))b))-\u003eInfo c-\u003eASTF(a Typeable)(c-\u003eb)-\u003eOpt(ASTF(Decor Info(a Typeable))(c-\u003eb))",
          "package": "feldspar-language",
          "partial": "Function",
          "signature": "(ASTF(dom Typeable)b-\u003eOpt(ASTF(Decor Info(dom Typeable))b))-\u003eInfo a-\u003eASTF(dom Typeable)(a-\u003eb)-\u003eOpt(ASTF(Decor Info(dom Typeable))(a-\u003eb))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Binding.html#v:optimizeFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Binding",
          "name": "optimizeLambda",
          "package": "feldspar-language",
          "signature": "(ASTF (dom :|| Typeable) b -\u003e Opt (ASTF (Decor Info (dom :|| Typeable)) b))-\u003e Info a-\u003e CLambda Type (b :-\u003e Full (a -\u003e b))-\u003e Args (AST (dom :|| Typeable)) (b :-\u003e Full (a -\u003e b))-\u003e Opt (ASTF (Decor Info (dom :|| Typeable)) (a -\u003e b))",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Binding",
          "module": "Feldspar.Core.Constructs.Binding",
          "name": "optimizeLambda",
          "normalized": "(ASTF(a Typeable)b-\u003eOpt(ASTF(Decor Info(a Typeable))b))-\u003eInfo c-\u003eCLambda Type(b-\u003eFull(c-\u003eb))-\u003eArgs(AST(a Typeable))(b-\u003eFull(c-\u003eb))-\u003eOpt(ASTF(Decor Info(a Typeable))(c-\u003eb))",
          "package": "feldspar-language",
          "partial": "Lambda",
          "signature": "(ASTF(dom Typeable)b-\u003eOpt(ASTF(Decor Info(dom Typeable))b))-\u003eInfo a-\u003eCLambda Type(b-\u003eFull(a-\u003eb))-\u003eArgs(AST(dom Typeable))(b-\u003eFull(a-\u003eb))-\u003eOpt(ASTF(Decor Info(dom Typeable))(a-\u003eb))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Binding.html#v:optimizeLambda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Binding",
          "name": "prjLambda",
          "package": "feldspar-language",
          "signature": "dom sig -\u003e Maybe (CLambda Type sig)",
          "source": "src/Feldspar-Core-Constructs-Binding.html#prjLambda",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Binding",
          "module": "Feldspar.Core.Constructs.Binding",
          "name": "prjLambda",
          "normalized": "a b-\u003eMaybe(CLambda Type b)",
          "package": "feldspar-language",
          "partial": "Lambda",
          "signature": "dom sig-\u003eMaybe(CLambda Type sig)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Binding.html#v:prjLambda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of constructs and operations on \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "Bits",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Bits.html",
          "type": "module"
        },
        "index": {
          "description": "Implementation of constructs and operations on Bits",
          "hierarchy": "Feldspar Core Constructs Bits",
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "Bits",
          "package": "feldspar-language",
          "partial": "Bits",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Bits.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBits constructs\n\u003c/p\u003e",
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "BITS",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Bits.html#BITS",
          "type": "data"
        },
        "index": {
          "description": "Bits constructs",
          "hierarchy": "Feldspar Core Constructs Bits",
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "BITS",
          "package": "feldspar-language",
          "partial": "BITS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Bits.html#t:BITS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "BAnd",
          "package": "feldspar-language",
          "signature": "BITS (a :-\u003e (a :-\u003e Full a))",
          "source": "src/Feldspar-Core-Constructs-Bits.html#BITS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Bits",
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "BAnd",
          "normalized": "BITS(a-\u003e(a-\u003eFull a))",
          "package": "feldspar-language",
          "partial": "BAnd",
          "signature": "BITS(a-\u003e(a-\u003eFull a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Bits.html#v:BAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "BOr",
          "package": "feldspar-language",
          "signature": "BITS (a :-\u003e (a :-\u003e Full a))",
          "source": "src/Feldspar-Core-Constructs-Bits.html#BITS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Bits",
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "BOr",
          "normalized": "BITS(a-\u003e(a-\u003eFull a))",
          "package": "feldspar-language",
          "partial": "BOr",
          "signature": "BITS(a-\u003e(a-\u003eFull a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Bits.html#v:BOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "BXor",
          "package": "feldspar-language",
          "signature": "BITS (a :-\u003e (a :-\u003e Full a))",
          "source": "src/Feldspar-Core-Constructs-Bits.html#BITS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Bits",
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "BXor",
          "normalized": "BITS(a-\u003e(a-\u003eFull a))",
          "package": "feldspar-language",
          "partial": "BXor",
          "signature": "BITS(a-\u003e(a-\u003eFull a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Bits.html#v:BXor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "Bit",
          "package": "feldspar-language",
          "signature": "BITS (Index :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Bits.html#BITS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Bits",
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "Bit",
          "normalized": "BITS(Index-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "Bit",
          "signature": "BITS(Index-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Bits.html#v:Bit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "BitCount",
          "package": "feldspar-language",
          "signature": "BITS (a :-\u003e Full Index)",
          "source": "src/Feldspar-Core-Constructs-Bits.html#BITS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Bits",
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "BitCount",
          "normalized": "BITS(a-\u003eFull Index)",
          "package": "feldspar-language",
          "partial": "Bit Count",
          "signature": "BITS(a-\u003eFull Index)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Bits.html#v:BitCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "BitScan",
          "package": "feldspar-language",
          "signature": "BITS (a :-\u003e Full Index)",
          "source": "src/Feldspar-Core-Constructs-Bits.html#BITS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Bits",
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "BitScan",
          "normalized": "BITS(a-\u003eFull Index)",
          "package": "feldspar-language",
          "partial": "Bit Scan",
          "signature": "BITS(a-\u003eFull Index)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Bits.html#v:BitScan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "ClearBit",
          "package": "feldspar-language",
          "signature": "BITS (a :-\u003e (Index :-\u003e Full a))",
          "source": "src/Feldspar-Core-Constructs-Bits.html#BITS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Bits",
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "ClearBit",
          "normalized": "BITS(a-\u003e(Index-\u003eFull a))",
          "package": "feldspar-language",
          "partial": "Clear Bit",
          "signature": "BITS(a-\u003e(Index-\u003eFull a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Bits.html#v:ClearBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "Complement",
          "package": "feldspar-language",
          "signature": "BITS (a :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Bits.html#BITS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Bits",
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "Complement",
          "normalized": "BITS(a-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "Complement",
          "signature": "BITS(a-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Bits.html#v:Complement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "ComplementBit",
          "package": "feldspar-language",
          "signature": "BITS (a :-\u003e (Index :-\u003e Full a))",
          "source": "src/Feldspar-Core-Constructs-Bits.html#BITS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Bits",
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "ComplementBit",
          "normalized": "BITS(a-\u003e(Index-\u003eFull a))",
          "package": "feldspar-language",
          "partial": "Complement Bit",
          "signature": "BITS(a-\u003e(Index-\u003eFull a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Bits.html#v:ComplementBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "IsSigned",
          "package": "feldspar-language",
          "signature": "BITS (a :-\u003e Full Bool)",
          "source": "src/Feldspar-Core-Constructs-Bits.html#BITS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Bits",
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "IsSigned",
          "normalized": "BITS(a-\u003eFull Bool)",
          "package": "feldspar-language",
          "partial": "Is Signed",
          "signature": "BITS(a-\u003eFull Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Bits.html#v:IsSigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "ReverseBits",
          "package": "feldspar-language",
          "signature": "BITS (a :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Bits.html#BITS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Bits",
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "ReverseBits",
          "normalized": "BITS(a-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "Reverse Bits",
          "signature": "BITS(a-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Bits.html#v:ReverseBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "RotateL",
          "package": "feldspar-language",
          "signature": "BITS (a :-\u003e (IntN :-\u003e Full a))",
          "source": "src/Feldspar-Core-Constructs-Bits.html#BITS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Bits",
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "RotateL",
          "normalized": "BITS(a-\u003e(IntN-\u003eFull a))",
          "package": "feldspar-language",
          "partial": "Rotate",
          "signature": "BITS(a-\u003e(IntN-\u003eFull a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Bits.html#v:RotateL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "RotateLU",
          "package": "feldspar-language",
          "signature": "BITS (a :-\u003e (Index :-\u003e Full a))",
          "source": "src/Feldspar-Core-Constructs-Bits.html#BITS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Bits",
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "RotateLU",
          "normalized": "BITS(a-\u003e(Index-\u003eFull a))",
          "package": "feldspar-language",
          "partial": "Rotate LU",
          "signature": "BITS(a-\u003e(Index-\u003eFull a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Bits.html#v:RotateLU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "RotateR",
          "package": "feldspar-language",
          "signature": "BITS (a :-\u003e (IntN :-\u003e Full a))",
          "source": "src/Feldspar-Core-Constructs-Bits.html#BITS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Bits",
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "RotateR",
          "normalized": "BITS(a-\u003e(IntN-\u003eFull a))",
          "package": "feldspar-language",
          "partial": "Rotate",
          "signature": "BITS(a-\u003e(IntN-\u003eFull a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Bits.html#v:RotateR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "RotateRU",
          "package": "feldspar-language",
          "signature": "BITS (a :-\u003e (Index :-\u003e Full a))",
          "source": "src/Feldspar-Core-Constructs-Bits.html#BITS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Bits",
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "RotateRU",
          "normalized": "BITS(a-\u003e(Index-\u003eFull a))",
          "package": "feldspar-language",
          "partial": "Rotate RU",
          "signature": "BITS(a-\u003e(Index-\u003eFull a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Bits.html#v:RotateRU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "SetBit",
          "package": "feldspar-language",
          "signature": "BITS (a :-\u003e (Index :-\u003e Full a))",
          "source": "src/Feldspar-Core-Constructs-Bits.html#BITS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Bits",
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "SetBit",
          "normalized": "BITS(a-\u003e(Index-\u003eFull a))",
          "package": "feldspar-language",
          "partial": "Set Bit",
          "signature": "BITS(a-\u003e(Index-\u003eFull a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Bits.html#v:SetBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "ShiftL",
          "package": "feldspar-language",
          "signature": "BITS (a :-\u003e (IntN :-\u003e Full a))",
          "source": "src/Feldspar-Core-Constructs-Bits.html#BITS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Bits",
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "ShiftL",
          "normalized": "BITS(a-\u003e(IntN-\u003eFull a))",
          "package": "feldspar-language",
          "partial": "Shift",
          "signature": "BITS(a-\u003e(IntN-\u003eFull a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Bits.html#v:ShiftL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "ShiftLU",
          "package": "feldspar-language",
          "signature": "BITS (a :-\u003e (Index :-\u003e Full a))",
          "source": "src/Feldspar-Core-Constructs-Bits.html#BITS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Bits",
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "ShiftLU",
          "normalized": "BITS(a-\u003e(Index-\u003eFull a))",
          "package": "feldspar-language",
          "partial": "Shift LU",
          "signature": "BITS(a-\u003e(Index-\u003eFull a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Bits.html#v:ShiftLU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "ShiftR",
          "package": "feldspar-language",
          "signature": "BITS (a :-\u003e (IntN :-\u003e Full a))",
          "source": "src/Feldspar-Core-Constructs-Bits.html#BITS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Bits",
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "ShiftR",
          "normalized": "BITS(a-\u003e(IntN-\u003eFull a))",
          "package": "feldspar-language",
          "partial": "Shift",
          "signature": "BITS(a-\u003e(IntN-\u003eFull a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Bits.html#v:ShiftR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "ShiftRU",
          "package": "feldspar-language",
          "signature": "BITS (a :-\u003e (Index :-\u003e Full a))",
          "source": "src/Feldspar-Core-Constructs-Bits.html#BITS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Bits",
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "ShiftRU",
          "normalized": "BITS(a-\u003e(Index-\u003eFull a))",
          "package": "feldspar-language",
          "partial": "Shift RU",
          "signature": "BITS(a-\u003e(Index-\u003eFull a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Bits.html#v:ShiftRU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "TestBit",
          "package": "feldspar-language",
          "signature": "BITS (a :-\u003e (Index :-\u003e Full Bool))",
          "source": "src/Feldspar-Core-Constructs-Bits.html#BITS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Bits",
          "module": "Feldspar.Core.Constructs.Bits",
          "name": "TestBit",
          "normalized": "BITS(a-\u003e(Index-\u003eFull Bool))",
          "package": "feldspar-language",
          "partial": "Test Bit",
          "signature": "BITS(a-\u003e(Index-\u003eFull Bool))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Bits.html#v:TestBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Complex",
          "name": "Complex",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Complex.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Complex",
          "module": "Feldspar.Core.Constructs.Complex",
          "name": "Complex",
          "package": "feldspar-language",
          "partial": "Complex",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Complex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Complex",
          "name": "COMPLEX",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Complex.html#COMPLEX",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Complex",
          "module": "Feldspar.Core.Constructs.Complex",
          "name": "COMPLEX",
          "package": "feldspar-language",
          "partial": "COMPLEX",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Complex.html#t:COMPLEX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Complex",
          "name": "Cis",
          "package": "feldspar-language",
          "signature": "COMPLEX (a :-\u003e Full (Complex a))",
          "source": "src/Feldspar-Core-Constructs-Complex.html#COMPLEX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Complex",
          "module": "Feldspar.Core.Constructs.Complex",
          "name": "Cis",
          "normalized": "COMPLEX(a-\u003eFull(Complex a))",
          "package": "feldspar-language",
          "partial": "Cis",
          "signature": "COMPLEX(a-\u003eFull(Complex a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Complex.html#v:Cis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Complex",
          "name": "Conjugate",
          "package": "feldspar-language",
          "signature": "COMPLEX (Complex a :-\u003e Full (Complex a))",
          "source": "src/Feldspar-Core-Constructs-Complex.html#COMPLEX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Complex",
          "module": "Feldspar.Core.Constructs.Complex",
          "name": "Conjugate",
          "normalized": "COMPLEX(Complex a-\u003eFull(Complex a))",
          "package": "feldspar-language",
          "partial": "Conjugate",
          "signature": "COMPLEX(Complex a-\u003eFull(Complex a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Complex.html#v:Conjugate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Complex",
          "name": "ImagPart",
          "package": "feldspar-language",
          "signature": "COMPLEX (Complex a :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Complex.html#COMPLEX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Complex",
          "module": "Feldspar.Core.Constructs.Complex",
          "name": "ImagPart",
          "normalized": "COMPLEX(Complex a-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "Imag Part",
          "signature": "COMPLEX(Complex a-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Complex.html#v:ImagPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Complex",
          "name": "Magnitude",
          "package": "feldspar-language",
          "signature": "COMPLEX (Complex a :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Complex.html#COMPLEX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Complex",
          "module": "Feldspar.Core.Constructs.Complex",
          "name": "Magnitude",
          "normalized": "COMPLEX(Complex a-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "Magnitude",
          "signature": "COMPLEX(Complex a-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Complex.html#v:Magnitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Complex",
          "name": "MkComplex",
          "package": "feldspar-language",
          "signature": "COMPLEX (a :-\u003e (a :-\u003e Full (Complex a)))",
          "source": "src/Feldspar-Core-Constructs-Complex.html#COMPLEX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Complex",
          "module": "Feldspar.Core.Constructs.Complex",
          "name": "MkComplex",
          "normalized": "COMPLEX(a-\u003e(a-\u003eFull(Complex a)))",
          "package": "feldspar-language",
          "partial": "Mk Complex",
          "signature": "COMPLEX(a-\u003e(a-\u003eFull(Complex a)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Complex.html#v:MkComplex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Complex",
          "name": "MkPolar",
          "package": "feldspar-language",
          "signature": "COMPLEX (a :-\u003e (a :-\u003e Full (Complex a)))",
          "source": "src/Feldspar-Core-Constructs-Complex.html#COMPLEX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Complex",
          "module": "Feldspar.Core.Constructs.Complex",
          "name": "MkPolar",
          "normalized": "COMPLEX(a-\u003e(a-\u003eFull(Complex a)))",
          "package": "feldspar-language",
          "partial": "Mk Polar",
          "signature": "COMPLEX(a-\u003e(a-\u003eFull(Complex a)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Complex.html#v:MkPolar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Complex",
          "name": "Phase",
          "package": "feldspar-language",
          "signature": "COMPLEX (Complex a :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Complex.html#COMPLEX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Complex",
          "module": "Feldspar.Core.Constructs.Complex",
          "name": "Phase",
          "normalized": "COMPLEX(Complex a-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "Phase",
          "signature": "COMPLEX(Complex a-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Complex.html#v:Phase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Complex",
          "name": "RealPart",
          "package": "feldspar-language",
          "signature": "COMPLEX (Complex a :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Complex.html#COMPLEX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Complex",
          "module": "Feldspar.Core.Constructs.Complex",
          "name": "RealPart",
          "normalized": "COMPLEX(Complex a-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "Real Part",
          "signature": "COMPLEX(Complex a-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Complex.html#v:RealPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Condition",
          "name": "Condition",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Condition.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Condition",
          "module": "Feldspar.Core.Constructs.Condition",
          "name": "Condition",
          "package": "feldspar-language",
          "partial": "Condition",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Condition.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.ConditionM",
          "name": "ConditionM",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-ConditionM.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs ConditionM",
          "module": "Feldspar.Core.Constructs.ConditionM",
          "name": "ConditionM",
          "package": "feldspar-language",
          "partial": "Condition",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-ConditionM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.ConditionM",
          "name": "ConditionM",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-ConditionM.html#ConditionM",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs ConditionM",
          "module": "Feldspar.Core.Constructs.ConditionM",
          "name": "ConditionM",
          "package": "feldspar-language",
          "partial": "Condition",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-ConditionM.html#t:ConditionM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.ConditionM",
          "name": "ConditionM",
          "package": "feldspar-language",
          "signature": "ConditionM m (Bool :-\u003e (m a :-\u003e (m a :-\u003e Full (m a))))",
          "source": "src/Feldspar-Core-Constructs-ConditionM.html#ConditionM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs ConditionM",
          "module": "Feldspar.Core.Constructs.ConditionM",
          "name": "ConditionM",
          "normalized": "ConditionM a(Bool-\u003e(a b-\u003e(a b-\u003eFull(a b))))",
          "package": "feldspar-language",
          "partial": "Condition",
          "signature": "ConditionM m(Bool-\u003e(m a-\u003e(m a-\u003eFull(m a))))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-ConditionM.html#v:ConditionM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Conversion",
          "name": "Conversion",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Conversion.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Conversion",
          "module": "Feldspar.Core.Constructs.Conversion",
          "name": "Conversion",
          "package": "feldspar-language",
          "partial": "Conversion",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Conversion.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Conversion",
          "name": "Conversion",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Conversion.html#Conversion",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Conversion",
          "module": "Feldspar.Core.Constructs.Conversion",
          "name": "Conversion",
          "package": "feldspar-language",
          "partial": "Conversion",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Conversion.html#t:Conversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Conversion",
          "name": "B2I",
          "package": "feldspar-language",
          "signature": "Conversion (Bool :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Conversion.html#Conversion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Conversion",
          "module": "Feldspar.Core.Constructs.Conversion",
          "name": "B2I",
          "normalized": "Conversion(Bool-\u003eFull a)",
          "package": "feldspar-language",
          "signature": "Conversion(Bool-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Conversion.html#v:B2I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Conversion",
          "name": "Ceiling",
          "package": "feldspar-language",
          "signature": "Conversion (Float :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Conversion.html#Conversion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Conversion",
          "module": "Feldspar.Core.Constructs.Conversion",
          "name": "Ceiling",
          "normalized": "Conversion(Float-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "Ceiling",
          "signature": "Conversion(Float-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Conversion.html#v:Ceiling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Conversion",
          "name": "F2I",
          "package": "feldspar-language",
          "signature": "Conversion (Float :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Conversion.html#Conversion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Conversion",
          "module": "Feldspar.Core.Constructs.Conversion",
          "name": "F2I",
          "normalized": "Conversion(Float-\u003eFull a)",
          "package": "feldspar-language",
          "signature": "Conversion(Float-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Conversion.html#v:F2I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Conversion",
          "name": "Floor",
          "package": "feldspar-language",
          "signature": "Conversion (Float :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Conversion.html#Conversion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Conversion",
          "module": "Feldspar.Core.Constructs.Conversion",
          "name": "Floor",
          "normalized": "Conversion(Float-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "Floor",
          "signature": "Conversion(Float-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Conversion.html#v:Floor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Conversion",
          "name": "I2N",
          "package": "feldspar-language",
          "signature": "Conversion (a :-\u003e Full b)",
          "source": "src/Feldspar-Core-Constructs-Conversion.html#Conversion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Conversion",
          "module": "Feldspar.Core.Constructs.Conversion",
          "name": "I2N",
          "normalized": "Conversion(a-\u003eFull b)",
          "package": "feldspar-language",
          "signature": "Conversion(a-\u003eFull b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Conversion.html#v:I2N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Conversion",
          "name": "Round",
          "package": "feldspar-language",
          "signature": "Conversion (Float :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Conversion.html#Conversion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Conversion",
          "module": "Feldspar.Core.Constructs.Conversion",
          "name": "Round",
          "normalized": "Conversion(Float-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "Round",
          "signature": "Conversion(Float-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Conversion.html#v:Round"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of Equality constructs\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Feldspar.Core.Constructs.Eq",
          "name": "Eq",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Eq.html",
          "type": "module"
        },
        "index": {
          "description": "Implementation of Equality constructs",
          "hierarchy": "Feldspar Core Constructs Eq",
          "module": "Feldspar.Core.Constructs.Eq",
          "name": "Eq",
          "package": "feldspar-language",
          "partial": "Eq",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Eq.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquality constructs\n\u003c/p\u003e",
          "module": "Feldspar.Core.Constructs.Eq",
          "name": "EQ",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Eq.html#EQ",
          "type": "data"
        },
        "index": {
          "description": "Equality constructs",
          "hierarchy": "Feldspar Core Constructs Eq",
          "module": "Feldspar.Core.Constructs.Eq",
          "name": "EQ",
          "package": "feldspar-language",
          "partial": "EQ",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Eq.html#t:EQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Eq",
          "name": "Equal",
          "package": "feldspar-language",
          "signature": "EQ (a :-\u003e (a :-\u003e Full Bool))",
          "source": "src/Feldspar-Core-Constructs-Eq.html#EQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Eq",
          "module": "Feldspar.Core.Constructs.Eq",
          "name": "Equal",
          "normalized": "EQ(a-\u003e(a-\u003eFull Bool))",
          "package": "feldspar-language",
          "partial": "Equal",
          "signature": "EQ(a-\u003e(a-\u003eFull Bool))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Eq.html#v:Equal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Eq",
          "name": "NotEqual",
          "package": "feldspar-language",
          "signature": "EQ (a :-\u003e (a :-\u003e Full Bool))",
          "source": "src/Feldspar-Core-Constructs-Eq.html#EQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Eq",
          "module": "Feldspar.Core.Constructs.Eq",
          "name": "NotEqual",
          "normalized": "EQ(a-\u003e(a-\u003eFull Bool))",
          "package": "feldspar-language",
          "partial": "Not Equal",
          "signature": "EQ(a-\u003e(a-\u003eFull Bool))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Eq.html#v:NotEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Error",
          "name": "Error",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Error.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Error",
          "module": "Feldspar.Core.Constructs.Error",
          "name": "Error",
          "package": "feldspar-language",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Error",
          "name": "Error",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Error.html#Error",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Error",
          "module": "Feldspar.Core.Constructs.Error",
          "name": "Error",
          "package": "feldspar-language",
          "partial": "Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Error.html#t:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Error",
          "name": "Assert",
          "package": "feldspar-language",
          "signature": "String -\u003e Error (Bool :-\u003e (a :-\u003e Full a))",
          "source": "src/Feldspar-Core-Constructs-Error.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Error",
          "module": "Feldspar.Core.Constructs.Error",
          "name": "Assert",
          "normalized": "String-\u003eError(Bool-\u003e(a-\u003eFull a))",
          "package": "feldspar-language",
          "partial": "Assert",
          "signature": "String-\u003eError(Bool-\u003e(a-\u003eFull a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Error.html#v:Assert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Error",
          "name": "Undefined",
          "package": "feldspar-language",
          "signature": "Error (Full a)",
          "source": "src/Feldspar-Core-Constructs-Error.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Error",
          "module": "Feldspar.Core.Constructs.Error",
          "name": "Undefined",
          "package": "feldspar-language",
          "partial": "Undefined",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Error.html#v:Undefined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.FFI",
          "name": "FFI",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-FFI.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs FFI",
          "module": "Feldspar.Core.Constructs.FFI",
          "name": "FFI",
          "package": "feldspar-language",
          "partial": "FFI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-FFI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.FFI",
          "name": "FFI",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-FFI.html#FFI",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs FFI",
          "module": "Feldspar.Core.Constructs.FFI",
          "name": "FFI",
          "package": "feldspar-language",
          "partial": "FFI",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-FFI.html#t:FFI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.FFI",
          "name": "ForeignImport",
          "package": "feldspar-language",
          "signature": "String -\u003e Denotation a -\u003e FFI a",
          "source": "src/Feldspar-Core-Constructs-FFI.html#FFI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs FFI",
          "module": "Feldspar.Core.Constructs.FFI",
          "name": "ForeignImport",
          "normalized": "String-\u003eDenotation a-\u003eFFI a",
          "package": "feldspar-language",
          "partial": "Foreign Import",
          "signature": "String-\u003eDenotation a-\u003eFFI a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-FFI.html#v:ForeignImport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Floating",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Floating.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Floating",
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Floating",
          "package": "feldspar-language",
          "partial": "Floating",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Floating.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "FLOATING",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Floating.html#FLOATING",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Floating",
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "FLOATING",
          "package": "feldspar-language",
          "partial": "FLOATING",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Floating.html#t:FLOATING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Acos",
          "package": "feldspar-language",
          "signature": "FLOATING (a :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Floating.html#FLOATING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Floating",
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Acos",
          "normalized": "FLOATING(a-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "Acos",
          "signature": "FLOATING(a-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Floating.html#v:Acos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Acosh",
          "package": "feldspar-language",
          "signature": "FLOATING (a :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Floating.html#FLOATING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Floating",
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Acosh",
          "normalized": "FLOATING(a-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "Acosh",
          "signature": "FLOATING(a-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Floating.html#v:Acosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Asin",
          "package": "feldspar-language",
          "signature": "FLOATING (a :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Floating.html#FLOATING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Floating",
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Asin",
          "normalized": "FLOATING(a-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "Asin",
          "signature": "FLOATING(a-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Floating.html#v:Asin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Asinh",
          "package": "feldspar-language",
          "signature": "FLOATING (a :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Floating.html#FLOATING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Floating",
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Asinh",
          "normalized": "FLOATING(a-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "Asinh",
          "signature": "FLOATING(a-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Floating.html#v:Asinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Atan",
          "package": "feldspar-language",
          "signature": "FLOATING (a :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Floating.html#FLOATING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Floating",
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Atan",
          "normalized": "FLOATING(a-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "Atan",
          "signature": "FLOATING(a-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Floating.html#v:Atan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Atanh",
          "package": "feldspar-language",
          "signature": "FLOATING (a :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Floating.html#FLOATING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Floating",
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Atanh",
          "normalized": "FLOATING(a-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "Atanh",
          "signature": "FLOATING(a-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Floating.html#v:Atanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Cos",
          "package": "feldspar-language",
          "signature": "FLOATING (a :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Floating.html#FLOATING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Floating",
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Cos",
          "normalized": "FLOATING(a-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "Cos",
          "signature": "FLOATING(a-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Floating.html#v:Cos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Cosh",
          "package": "feldspar-language",
          "signature": "FLOATING (a :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Floating.html#FLOATING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Floating",
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Cosh",
          "normalized": "FLOATING(a-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "Cosh",
          "signature": "FLOATING(a-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Floating.html#v:Cosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Exp",
          "package": "feldspar-language",
          "signature": "FLOATING (a :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Floating.html#FLOATING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Floating",
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Exp",
          "normalized": "FLOATING(a-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "Exp",
          "signature": "FLOATING(a-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Floating.html#v:Exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Log",
          "package": "feldspar-language",
          "signature": "FLOATING (a :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Floating.html#FLOATING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Floating",
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Log",
          "normalized": "FLOATING(a-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "Log",
          "signature": "FLOATING(a-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Floating.html#v:Log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "LogBase",
          "package": "feldspar-language",
          "signature": "FLOATING (a :-\u003e (a :-\u003e Full a))",
          "source": "src/Feldspar-Core-Constructs-Floating.html#FLOATING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Floating",
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "LogBase",
          "normalized": "FLOATING(a-\u003e(a-\u003eFull a))",
          "package": "feldspar-language",
          "partial": "Log Base",
          "signature": "FLOATING(a-\u003e(a-\u003eFull a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Floating.html#v:LogBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Pi",
          "package": "feldspar-language",
          "signature": "FLOATING (Full a)",
          "source": "src/Feldspar-Core-Constructs-Floating.html#FLOATING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Floating",
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Pi",
          "package": "feldspar-language",
          "partial": "Pi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Floating.html#v:Pi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Pow",
          "package": "feldspar-language",
          "signature": "FLOATING (a :-\u003e (a :-\u003e Full a))",
          "source": "src/Feldspar-Core-Constructs-Floating.html#FLOATING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Floating",
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Pow",
          "normalized": "FLOATING(a-\u003e(a-\u003eFull a))",
          "package": "feldspar-language",
          "partial": "Pow",
          "signature": "FLOATING(a-\u003e(a-\u003eFull a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Floating.html#v:Pow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Sin",
          "package": "feldspar-language",
          "signature": "FLOATING (a :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Floating.html#FLOATING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Floating",
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Sin",
          "normalized": "FLOATING(a-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "Sin",
          "signature": "FLOATING(a-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Floating.html#v:Sin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Sinh",
          "package": "feldspar-language",
          "signature": "FLOATING (a :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Floating.html#FLOATING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Floating",
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Sinh",
          "normalized": "FLOATING(a-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "Sinh",
          "signature": "FLOATING(a-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Floating.html#v:Sinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Sqrt",
          "package": "feldspar-language",
          "signature": "FLOATING (a :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Floating.html#FLOATING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Floating",
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Sqrt",
          "normalized": "FLOATING(a-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "Sqrt",
          "signature": "FLOATING(a-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Floating.html#v:Sqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Tan",
          "package": "feldspar-language",
          "signature": "FLOATING (a :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Floating.html#FLOATING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Floating",
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Tan",
          "normalized": "FLOATING(a-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "Tan",
          "signature": "FLOATING(a-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Floating.html#v:Tan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Tanh",
          "package": "feldspar-language",
          "signature": "FLOATING (a :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Floating.html#FLOATING",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Floating",
          "module": "Feldspar.Core.Constructs.Floating",
          "name": "Tanh",
          "normalized": "FLOATING(a-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "Tanh",
          "signature": "FLOATING(a-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Floating.html#v:Tanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Fractional",
          "name": "Fractional",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Fractional.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Fractional",
          "module": "Feldspar.Core.Constructs.Fractional",
          "name": "Fractional",
          "package": "feldspar-language",
          "partial": "Fractional",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Fractional.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Fractional",
          "name": "FRACTIONAL",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Fractional.html#FRACTIONAL",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Fractional",
          "module": "Feldspar.Core.Constructs.Fractional",
          "name": "FRACTIONAL",
          "package": "feldspar-language",
          "partial": "FRACTIONAL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Fractional.html#t:FRACTIONAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Fractional",
          "name": "DivFrac",
          "package": "feldspar-language",
          "signature": "FRACTIONAL (a :-\u003e (a :-\u003e Full a))",
          "source": "src/Feldspar-Core-Constructs-Fractional.html#FRACTIONAL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Fractional",
          "module": "Feldspar.Core.Constructs.Fractional",
          "name": "DivFrac",
          "normalized": "FRACTIONAL(a-\u003e(a-\u003eFull a))",
          "package": "feldspar-language",
          "partial": "Div Frac",
          "signature": "FRACTIONAL(a-\u003e(a-\u003eFull a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Fractional.html#v:DivFrac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Future",
          "name": "Future",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Future.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Future",
          "module": "Feldspar.Core.Constructs.Future",
          "name": "Future",
          "package": "feldspar-language",
          "partial": "Future",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Future.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Future",
          "name": "FUTURE",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Future.html#FUTURE",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Future",
          "module": "Feldspar.Core.Constructs.Future",
          "name": "FUTURE",
          "package": "feldspar-language",
          "partial": "FUTURE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Future.html#t:FUTURE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Future",
          "name": "Await",
          "package": "feldspar-language",
          "signature": "FUTURE (FVal a :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Future.html#FUTURE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Future",
          "module": "Feldspar.Core.Constructs.Future",
          "name": "Await",
          "normalized": "FUTURE(FVal a-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "Await",
          "signature": "FUTURE(FVal a-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Future.html#v:Await"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Future",
          "name": "MkFuture",
          "package": "feldspar-language",
          "signature": "FUTURE (a :-\u003e Full (FVal a))",
          "source": "src/Feldspar-Core-Constructs-Future.html#FUTURE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Future",
          "module": "Feldspar.Core.Constructs.Future",
          "name": "MkFuture",
          "normalized": "FUTURE(a-\u003eFull(FVal a))",
          "package": "feldspar-language",
          "partial": "Mk Future",
          "signature": "FUTURE(a-\u003eFull(FVal a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Future.html#v:MkFuture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Integral",
          "name": "Integral",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Integral.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Integral",
          "module": "Feldspar.Core.Constructs.Integral",
          "name": "Integral",
          "package": "feldspar-language",
          "partial": "Integral",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Integral.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Integral",
          "name": "INTEGRAL",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Integral.html#INTEGRAL",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Integral",
          "module": "Feldspar.Core.Constructs.Integral",
          "name": "INTEGRAL",
          "package": "feldspar-language",
          "partial": "INTEGRAL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Integral.html#t:INTEGRAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Integral",
          "name": "Div",
          "package": "feldspar-language",
          "signature": "INTEGRAL (a :-\u003e (a :-\u003e Full a))",
          "source": "src/Feldspar-Core-Constructs-Integral.html#INTEGRAL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Integral",
          "module": "Feldspar.Core.Constructs.Integral",
          "name": "Div",
          "normalized": "INTEGRAL(a-\u003e(a-\u003eFull a))",
          "package": "feldspar-language",
          "partial": "Div",
          "signature": "INTEGRAL(a-\u003e(a-\u003eFull a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Integral.html#v:Div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Integral",
          "name": "Exp",
          "package": "feldspar-language",
          "signature": "INTEGRAL (a :-\u003e (a :-\u003e Full a))",
          "source": "src/Feldspar-Core-Constructs-Integral.html#INTEGRAL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Integral",
          "module": "Feldspar.Core.Constructs.Integral",
          "name": "Exp",
          "normalized": "INTEGRAL(a-\u003e(a-\u003eFull a))",
          "package": "feldspar-language",
          "partial": "Exp",
          "signature": "INTEGRAL(a-\u003e(a-\u003eFull a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Integral.html#v:Exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Integral",
          "name": "Mod",
          "package": "feldspar-language",
          "signature": "INTEGRAL (a :-\u003e (a :-\u003e Full a))",
          "source": "src/Feldspar-Core-Constructs-Integral.html#INTEGRAL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Integral",
          "module": "Feldspar.Core.Constructs.Integral",
          "name": "Mod",
          "normalized": "INTEGRAL(a-\u003e(a-\u003eFull a))",
          "package": "feldspar-language",
          "partial": "Mod",
          "signature": "INTEGRAL(a-\u003e(a-\u003eFull a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Integral.html#v:Mod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Integral",
          "name": "Quot",
          "package": "feldspar-language",
          "signature": "INTEGRAL (a :-\u003e (a :-\u003e Full a))",
          "source": "src/Feldspar-Core-Constructs-Integral.html#INTEGRAL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Integral",
          "module": "Feldspar.Core.Constructs.Integral",
          "name": "Quot",
          "normalized": "INTEGRAL(a-\u003e(a-\u003eFull a))",
          "package": "feldspar-language",
          "partial": "Quot",
          "signature": "INTEGRAL(a-\u003e(a-\u003eFull a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Integral.html#v:Quot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Integral",
          "name": "Rem",
          "package": "feldspar-language",
          "signature": "INTEGRAL (a :-\u003e (a :-\u003e Full a))",
          "source": "src/Feldspar-Core-Constructs-Integral.html#INTEGRAL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Integral",
          "module": "Feldspar.Core.Constructs.Integral",
          "name": "Rem",
          "normalized": "INTEGRAL(a-\u003e(a-\u003eFull a))",
          "package": "feldspar-language",
          "partial": "Rem",
          "signature": "INTEGRAL(a-\u003e(a-\u003eFull a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Integral.html#v:Rem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterpretation of basic syntactic constructs\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Feldspar.Core.Constructs.Literal",
          "name": "Literal",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Literal.html",
          "type": "module"
        },
        "index": {
          "description": "Interpretation of basic syntactic constructs",
          "hierarchy": "Feldspar Core Constructs Literal",
          "module": "Feldspar.Core.Constructs.Literal",
          "name": "Literal",
          "package": "feldspar-language",
          "partial": "Literal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Literal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of Logic constructs\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Feldspar.Core.Constructs.Logic",
          "name": "Logic",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Logic.html",
          "type": "module"
        },
        "index": {
          "description": "Implementation of Logic constructs",
          "hierarchy": "Feldspar Core Constructs Logic",
          "module": "Feldspar.Core.Constructs.Logic",
          "name": "Logic",
          "package": "feldspar-language",
          "partial": "Logic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Logic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogic constructs\n\u003c/p\u003e",
          "module": "Feldspar.Core.Constructs.Logic",
          "name": "Logic",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Logic.html#Logic",
          "type": "data"
        },
        "index": {
          "description": "Logic constructs",
          "hierarchy": "Feldspar Core Constructs Logic",
          "module": "Feldspar.Core.Constructs.Logic",
          "name": "Logic",
          "package": "feldspar-language",
          "partial": "Logic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Logic.html#t:Logic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Logic",
          "name": "And",
          "package": "feldspar-language",
          "signature": "Logic (Bool :-\u003e (Bool :-\u003e Full Bool))",
          "source": "src/Feldspar-Core-Constructs-Logic.html#Logic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Logic",
          "module": "Feldspar.Core.Constructs.Logic",
          "name": "And",
          "normalized": "Logic(Bool-\u003e(Bool-\u003eFull Bool))",
          "package": "feldspar-language",
          "partial": "And",
          "signature": "Logic(Bool-\u003e(Bool-\u003eFull Bool))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Logic.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Logic",
          "name": "Not",
          "package": "feldspar-language",
          "signature": "Logic (Bool :-\u003e Full Bool)",
          "source": "src/Feldspar-Core-Constructs-Logic.html#Logic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Logic",
          "module": "Feldspar.Core.Constructs.Logic",
          "name": "Not",
          "normalized": "Logic(Bool-\u003eFull Bool)",
          "package": "feldspar-language",
          "partial": "Not",
          "signature": "Logic(Bool-\u003eFull Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Logic.html#v:Not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Logic",
          "name": "Or",
          "package": "feldspar-language",
          "signature": "Logic (Bool :-\u003e (Bool :-\u003e Full Bool))",
          "source": "src/Feldspar-Core-Constructs-Logic.html#Logic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Logic",
          "module": "Feldspar.Core.Constructs.Logic",
          "name": "Or",
          "normalized": "Logic(Bool-\u003e(Bool-\u003eFull Bool))",
          "package": "feldspar-language",
          "partial": "Or",
          "signature": "Logic(Bool-\u003e(Bool-\u003eFull Bool))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Logic.html#v:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Loop",
          "name": "Loop",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Loop.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Loop",
          "module": "Feldspar.Core.Constructs.Loop",
          "name": "Loop",
          "package": "feldspar-language",
          "partial": "Loop",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Loop.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Loop",
          "name": "Loop",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Loop.html#Loop",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Loop",
          "module": "Feldspar.Core.Constructs.Loop",
          "name": "Loop",
          "package": "feldspar-language",
          "partial": "Loop",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Loop.html#t:Loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Loop",
          "name": "LoopM",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Loop.html#LoopM",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Loop",
          "module": "Feldspar.Core.Constructs.Loop",
          "name": "LoopM",
          "package": "feldspar-language",
          "partial": "Loop",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Loop.html#t:LoopM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Loop",
          "name": "For",
          "package": "feldspar-language",
          "signature": "LoopM m (Length :-\u003e ((Index -\u003e m a) :-\u003e Full (m ())))",
          "source": "src/Feldspar-Core-Constructs-Loop.html#LoopM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Loop",
          "module": "Feldspar.Core.Constructs.Loop",
          "name": "For",
          "normalized": "LoopM a(Length-\u003e((Index-\u003ea b)-\u003eFull(a())))",
          "package": "feldspar-language",
          "partial": "For",
          "signature": "LoopM m(Length-\u003e((Index-\u003em a)-\u003eFull(m())))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Loop.html#v:For"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Loop",
          "name": "ForLoop",
          "package": "feldspar-language",
          "signature": "Loop (Length :-\u003e (a :-\u003e ((Index -\u003e a -\u003e a) :-\u003e Full a)))",
          "source": "src/Feldspar-Core-Constructs-Loop.html#Loop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Loop",
          "module": "Feldspar.Core.Constructs.Loop",
          "name": "ForLoop",
          "normalized": "Loop(Length-\u003e(a-\u003e((Index-\u003ea-\u003ea)-\u003eFull a)))",
          "package": "feldspar-language",
          "partial": "For Loop",
          "signature": "Loop(Length-\u003e(a-\u003e((Index-\u003ea-\u003ea)-\u003eFull a)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Loop.html#v:ForLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Loop",
          "name": "While",
          "package": "feldspar-language",
          "signature": "LoopM m (m Bool :-\u003e (m a :-\u003e Full (m ())))",
          "source": "src/Feldspar-Core-Constructs-Loop.html#LoopM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Loop",
          "module": "Feldspar.Core.Constructs.Loop",
          "name": "While",
          "normalized": "LoopM a(a Bool-\u003e(a b-\u003eFull(a())))",
          "package": "feldspar-language",
          "partial": "While",
          "signature": "LoopM m(m Bool-\u003e(m a-\u003eFull(m())))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Loop.html#v:While"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Loop",
          "name": "WhileLoop",
          "package": "feldspar-language",
          "signature": "Loop (a :-\u003e ((a -\u003e Bool) :-\u003e ((a -\u003e a) :-\u003e Full a)))",
          "source": "src/Feldspar-Core-Constructs-Loop.html#Loop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Loop",
          "module": "Feldspar.Core.Constructs.Loop",
          "name": "WhileLoop",
          "normalized": "Loop(a-\u003e((a-\u003eBool)-\u003e((a-\u003ea)-\u003eFull a)))",
          "package": "feldspar-language",
          "partial": "While Loop",
          "signature": "Loop(a-\u003e((a-\u003eBool)-\u003e((a-\u003ea)-\u003eFull a)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Loop.html#v:WhileLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Mutable",
          "name": "Mutable",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Mutable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Mutable",
          "module": "Feldspar.Core.Constructs.Mutable",
          "name": "Mutable",
          "package": "feldspar-language",
          "partial": "Mutable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Mutable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Mutable",
          "name": "Mutable",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Mutable.html#Mutable",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Mutable",
          "module": "Feldspar.Core.Constructs.Mutable",
          "name": "Mutable",
          "package": "feldspar-language",
          "partial": "Mutable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Mutable.html#t:Mutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Mutable",
          "name": "Run",
          "package": "feldspar-language",
          "signature": "Mutable (Mut a :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Mutable.html#Mutable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Mutable",
          "module": "Feldspar.Core.Constructs.Mutable",
          "name": "Run",
          "normalized": "Mutable(Mut a-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "Run",
          "signature": "Mutable(Mut a-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Mutable.html#v:Run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Mutable",
          "name": "monadProxy",
          "package": "feldspar-language",
          "signature": "P Mut",
          "source": "src/Feldspar-Core-Constructs-Mutable.html#monadProxy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Mutable",
          "module": "Feldspar.Core.Constructs.Mutable",
          "name": "monadProxy",
          "package": "feldspar-language",
          "partial": "Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Mutable.html#v:monadProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.MutableArray",
          "name": "MutableArray",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-MutableArray.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs MutableArray",
          "module": "Feldspar.Core.Constructs.MutableArray",
          "name": "MutableArray",
          "package": "feldspar-language",
          "partial": "Mutable Array",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-MutableArray.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.MutableArray",
          "name": "MutableArray",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-MutableArray.html#MutableArray",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs MutableArray",
          "module": "Feldspar.Core.Constructs.MutableArray",
          "name": "MutableArray",
          "package": "feldspar-language",
          "partial": "Mutable Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-MutableArray.html#t:MutableArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.MutableArray",
          "name": "ArrLength",
          "package": "feldspar-language",
          "signature": "MutableArray (MArr a :-\u003e Full (Mut Length))",
          "source": "src/Feldspar-Core-Constructs-MutableArray.html#MutableArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs MutableArray",
          "module": "Feldspar.Core.Constructs.MutableArray",
          "name": "ArrLength",
          "normalized": "MutableArray(MArr a-\u003eFull(Mut Length))",
          "package": "feldspar-language",
          "partial": "Arr Length",
          "signature": "MutableArray(MArr a-\u003eFull(Mut Length))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-MutableArray.html#v:ArrLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.MutableArray",
          "name": "GetArr",
          "package": "feldspar-language",
          "signature": "MutableArray (MArr a :-\u003e (Index :-\u003e Full (Mut a)))",
          "source": "src/Feldspar-Core-Constructs-MutableArray.html#MutableArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs MutableArray",
          "module": "Feldspar.Core.Constructs.MutableArray",
          "name": "GetArr",
          "normalized": "MutableArray(MArr a-\u003e(Index-\u003eFull(Mut a)))",
          "package": "feldspar-language",
          "partial": "Get Arr",
          "signature": "MutableArray(MArr a-\u003e(Index-\u003eFull(Mut a)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-MutableArray.html#v:GetArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.MutableArray",
          "name": "NewArr",
          "package": "feldspar-language",
          "signature": "MutableArray (Length :-\u003e (a :-\u003e Full (Mut (MArr a))))",
          "source": "src/Feldspar-Core-Constructs-MutableArray.html#MutableArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs MutableArray",
          "module": "Feldspar.Core.Constructs.MutableArray",
          "name": "NewArr",
          "normalized": "MutableArray(Length-\u003e(a-\u003eFull(Mut(MArr a))))",
          "package": "feldspar-language",
          "partial": "New Arr",
          "signature": "MutableArray(Length-\u003e(a-\u003eFull(Mut(MArr a))))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-MutableArray.html#v:NewArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.MutableArray",
          "name": "NewArr_",
          "package": "feldspar-language",
          "signature": "MutableArray (Length :-\u003e Full (Mut (MArr a)))",
          "source": "src/Feldspar-Core-Constructs-MutableArray.html#MutableArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs MutableArray",
          "module": "Feldspar.Core.Constructs.MutableArray",
          "name": "NewArr_",
          "normalized": "MutableArray(Length-\u003eFull(Mut(MArr a)))",
          "package": "feldspar-language",
          "partial": "New Arr",
          "signature": "MutableArray(Length-\u003eFull(Mut(MArr a)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-MutableArray.html#v:NewArr_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.MutableArray",
          "name": "SetArr",
          "package": "feldspar-language",
          "signature": "MutableArray (MArr a :-\u003e (Index :-\u003e (a :-\u003e Full (Mut ()))))",
          "source": "src/Feldspar-Core-Constructs-MutableArray.html#MutableArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs MutableArray",
          "module": "Feldspar.Core.Constructs.MutableArray",
          "name": "SetArr",
          "normalized": "MutableArray(MArr a-\u003e(Index-\u003e(a-\u003eFull(Mut()))))",
          "package": "feldspar-language",
          "partial": "Set Arr",
          "signature": "MutableArray(MArr a-\u003e(Index-\u003e(a-\u003eFull(Mut()))))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-MutableArray.html#v:SetArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.MutableReference",
          "name": "MutableReference",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-MutableReference.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs MutableReference",
          "module": "Feldspar.Core.Constructs.MutableReference",
          "name": "MutableReference",
          "package": "feldspar-language",
          "partial": "Mutable Reference",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-MutableReference.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.MutableReference",
          "name": "MutableReference",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-MutableReference.html#MutableReference",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs MutableReference",
          "module": "Feldspar.Core.Constructs.MutableReference",
          "name": "MutableReference",
          "package": "feldspar-language",
          "partial": "Mutable Reference",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-MutableReference.html#t:MutableReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.MutableReference",
          "name": "GetRef",
          "package": "feldspar-language",
          "signature": "MutableReference (IORef a :-\u003e Full (Mut a))",
          "source": "src/Feldspar-Core-Constructs-MutableReference.html#MutableReference",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs MutableReference",
          "module": "Feldspar.Core.Constructs.MutableReference",
          "name": "GetRef",
          "normalized": "MutableReference(IORef a-\u003eFull(Mut a))",
          "package": "feldspar-language",
          "partial": "Get Ref",
          "signature": "MutableReference(IORef a-\u003eFull(Mut a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-MutableReference.html#v:GetRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.MutableReference",
          "name": "NewRef",
          "package": "feldspar-language",
          "signature": "MutableReference (a :-\u003e Full (Mut (IORef a)))",
          "source": "src/Feldspar-Core-Constructs-MutableReference.html#MutableReference",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs MutableReference",
          "module": "Feldspar.Core.Constructs.MutableReference",
          "name": "NewRef",
          "normalized": "MutableReference(a-\u003eFull(Mut(IORef a)))",
          "package": "feldspar-language",
          "partial": "New Ref",
          "signature": "MutableReference(a-\u003eFull(Mut(IORef a)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-MutableReference.html#v:NewRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.MutableReference",
          "name": "SetRef",
          "package": "feldspar-language",
          "signature": "MutableReference (IORef a :-\u003e (a :-\u003e Full (Mut ())))",
          "source": "src/Feldspar-Core-Constructs-MutableReference.html#MutableReference",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs MutableReference",
          "module": "Feldspar.Core.Constructs.MutableReference",
          "name": "SetRef",
          "normalized": "MutableReference(IORef a-\u003e(a-\u003eFull(Mut())))",
          "package": "feldspar-language",
          "partial": "Set Ref",
          "signature": "MutableReference(IORef a-\u003e(a-\u003eFull(Mut())))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-MutableReference.html#v:SetRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.MutableToPure",
          "name": "MutableToPure",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-MutableToPure.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs MutableToPure",
          "module": "Feldspar.Core.Constructs.MutableToPure",
          "name": "MutableToPure",
          "package": "feldspar-language",
          "partial": "Mutable To Pure",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-MutableToPure.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.MutableToPure",
          "name": "MutableToPure",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-MutableToPure.html#MutableToPure",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs MutableToPure",
          "module": "Feldspar.Core.Constructs.MutableToPure",
          "name": "MutableToPure",
          "package": "feldspar-language",
          "partial": "Mutable To Pure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-MutableToPure.html#t:MutableToPure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.MutableToPure",
          "name": "RunMutableArray",
          "package": "feldspar-language",
          "signature": "MutableToPure (Mut (MArr a) :-\u003e Full [a])",
          "source": "src/Feldspar-Core-Constructs-MutableToPure.html#MutableToPure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs MutableToPure",
          "module": "Feldspar.Core.Constructs.MutableToPure",
          "name": "RunMutableArray",
          "normalized": "MutableToPure(Mut(MArr a)-\u003eFull[a])",
          "package": "feldspar-language",
          "partial": "Run Mutable Array",
          "signature": "MutableToPure(Mut(MArr a)-\u003eFull[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-MutableToPure.html#v:RunMutableArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.MutableToPure",
          "name": "WithArray",
          "package": "feldspar-language",
          "signature": "MutableToPure (MArr a :-\u003e (([a] -\u003e Mut b) :-\u003e Full (Mut b)))",
          "source": "src/Feldspar-Core-Constructs-MutableToPure.html#MutableToPure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs MutableToPure",
          "module": "Feldspar.Core.Constructs.MutableToPure",
          "name": "WithArray",
          "normalized": "MutableToPure(MArr a-\u003e(([a]-\u003eMut b)-\u003eFull(Mut b)))",
          "package": "feldspar-language",
          "partial": "With Array",
          "signature": "MutableToPure(MArr a-\u003e(([a]-\u003eMut b)-\u003eFull(Mut b)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-MutableToPure.html#v:WithArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.NoInline",
          "name": "NoInline",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-NoInline.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs NoInline",
          "module": "Feldspar.Core.Constructs.NoInline",
          "name": "NoInline",
          "package": "feldspar-language",
          "partial": "No Inline",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-NoInline.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.NoInline",
          "name": "NoInline",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-NoInline.html#NoInline",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs NoInline",
          "module": "Feldspar.Core.Constructs.NoInline",
          "name": "NoInline",
          "package": "feldspar-language",
          "partial": "No Inline",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-NoInline.html#t:NoInline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.NoInline",
          "name": "NoInline",
          "package": "feldspar-language",
          "signature": "NoInline (a :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-NoInline.html#NoInline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs NoInline",
          "module": "Feldspar.Core.Constructs.NoInline",
          "name": "NoInline",
          "normalized": "NoInline(a-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "No Inline",
          "signature": "NoInline(a-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-NoInline.html#v:NoInline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Num",
          "name": "Num",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Num.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Num",
          "module": "Feldspar.Core.Constructs.Num",
          "name": "Num",
          "package": "feldspar-language",
          "partial": "Num",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Num.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Num",
          "name": "NUM",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Num.html#NUM",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Num",
          "module": "Feldspar.Core.Constructs.Num",
          "name": "NUM",
          "package": "feldspar-language",
          "partial": "NUM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Num.html#t:NUM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Num",
          "name": "Abs",
          "package": "feldspar-language",
          "signature": "NUM (a :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Num.html#NUM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Num",
          "module": "Feldspar.Core.Constructs.Num",
          "name": "Abs",
          "normalized": "NUM(a-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "Abs",
          "signature": "NUM(a-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Num.html#v:Abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Num",
          "name": "Add",
          "package": "feldspar-language",
          "signature": "NUM (a :-\u003e (a :-\u003e Full a))",
          "source": "src/Feldspar-Core-Constructs-Num.html#NUM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Num",
          "module": "Feldspar.Core.Constructs.Num",
          "name": "Add",
          "normalized": "NUM(a-\u003e(a-\u003eFull a))",
          "package": "feldspar-language",
          "partial": "Add",
          "signature": "NUM(a-\u003e(a-\u003eFull a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Num.html#v:Add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Num",
          "name": "Mul",
          "package": "feldspar-language",
          "signature": "NUM (a :-\u003e (a :-\u003e Full a))",
          "source": "src/Feldspar-Core-Constructs-Num.html#NUM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Num",
          "module": "Feldspar.Core.Constructs.Num",
          "name": "Mul",
          "normalized": "NUM(a-\u003e(a-\u003eFull a))",
          "package": "feldspar-language",
          "partial": "Mul",
          "signature": "NUM(a-\u003e(a-\u003eFull a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Num.html#v:Mul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Num",
          "name": "Sign",
          "package": "feldspar-language",
          "signature": "NUM (a :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Num.html#NUM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Num",
          "module": "Feldspar.Core.Constructs.Num",
          "name": "Sign",
          "normalized": "NUM(a-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "Sign",
          "signature": "NUM(a-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Num.html#v:Sign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Num",
          "name": "Sub",
          "package": "feldspar-language",
          "signature": "NUM (a :-\u003e (a :-\u003e Full a))",
          "source": "src/Feldspar-Core-Constructs-Num.html#NUM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Num",
          "module": "Feldspar.Core.Constructs.Num",
          "name": "Sub",
          "normalized": "NUM(a-\u003e(a-\u003eFull a))",
          "package": "feldspar-language",
          "partial": "Sub",
          "signature": "NUM(a-\u003e(a-\u003eFull a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Num.html#v:Sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of ordering constructs\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Feldspar.Core.Constructs.Ord",
          "name": "Ord",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Ord.html",
          "type": "module"
        },
        "index": {
          "description": "Implementation of ordering constructs",
          "hierarchy": "Feldspar Core Constructs Ord",
          "module": "Feldspar.Core.Constructs.Ord",
          "name": "Ord",
          "package": "feldspar-language",
          "partial": "Ord",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Ord.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrdering constructs\n\u003c/p\u003e",
          "module": "Feldspar.Core.Constructs.Ord",
          "name": "ORD",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Ord.html#ORD",
          "type": "data"
        },
        "index": {
          "description": "Ordering constructs",
          "hierarchy": "Feldspar Core Constructs Ord",
          "module": "Feldspar.Core.Constructs.Ord",
          "name": "ORD",
          "package": "feldspar-language",
          "partial": "ORD",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Ord.html#t:ORD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Ord",
          "name": "GTE",
          "package": "feldspar-language",
          "signature": "ORD (a :-\u003e (a :-\u003e Full Bool))",
          "source": "src/Feldspar-Core-Constructs-Ord.html#ORD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Ord",
          "module": "Feldspar.Core.Constructs.Ord",
          "name": "GTE",
          "normalized": "ORD(a-\u003e(a-\u003eFull Bool))",
          "package": "feldspar-language",
          "partial": "GTE",
          "signature": "ORD(a-\u003e(a-\u003eFull Bool))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Ord.html#v:GTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Ord",
          "name": "GTH",
          "package": "feldspar-language",
          "signature": "ORD (a :-\u003e (a :-\u003e Full Bool))",
          "source": "src/Feldspar-Core-Constructs-Ord.html#ORD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Ord",
          "module": "Feldspar.Core.Constructs.Ord",
          "name": "GTH",
          "normalized": "ORD(a-\u003e(a-\u003eFull Bool))",
          "package": "feldspar-language",
          "partial": "GTH",
          "signature": "ORD(a-\u003e(a-\u003eFull Bool))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Ord.html#v:GTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Ord",
          "name": "LTE",
          "package": "feldspar-language",
          "signature": "ORD (a :-\u003e (a :-\u003e Full Bool))",
          "source": "src/Feldspar-Core-Constructs-Ord.html#ORD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Ord",
          "module": "Feldspar.Core.Constructs.Ord",
          "name": "LTE",
          "normalized": "ORD(a-\u003e(a-\u003eFull Bool))",
          "package": "feldspar-language",
          "partial": "LTE",
          "signature": "ORD(a-\u003e(a-\u003eFull Bool))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Ord.html#v:LTE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Ord",
          "name": "LTH",
          "package": "feldspar-language",
          "signature": "ORD (a :-\u003e (a :-\u003e Full Bool))",
          "source": "src/Feldspar-Core-Constructs-Ord.html#ORD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Ord",
          "module": "Feldspar.Core.Constructs.Ord",
          "name": "LTH",
          "normalized": "ORD(a-\u003e(a-\u003eFull Bool))",
          "package": "feldspar-language",
          "partial": "LTH",
          "signature": "ORD(a-\u003e(a-\u003eFull Bool))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Ord.html#v:LTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Ord",
          "name": "Max",
          "package": "feldspar-language",
          "signature": "ORD (a :-\u003e (a :-\u003e Full a))",
          "source": "src/Feldspar-Core-Constructs-Ord.html#ORD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Ord",
          "module": "Feldspar.Core.Constructs.Ord",
          "name": "Max",
          "normalized": "ORD(a-\u003e(a-\u003eFull a))",
          "package": "feldspar-language",
          "partial": "Max",
          "signature": "ORD(a-\u003e(a-\u003eFull a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Ord.html#v:Max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Ord",
          "name": "Min",
          "package": "feldspar-language",
          "signature": "ORD (a :-\u003e (a :-\u003e Full a))",
          "source": "src/Feldspar-Core-Constructs-Ord.html#ORD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Ord",
          "module": "Feldspar.Core.Constructs.Ord",
          "name": "Min",
          "normalized": "ORD(a-\u003e(a-\u003eFull a))",
          "package": "feldspar-language",
          "partial": "Min",
          "signature": "ORD(a-\u003e(a-\u003eFull a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Ord.html#v:Min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Par",
          "name": "Par",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Par.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Par",
          "module": "Feldspar.Core.Constructs.Par",
          "name": "Par",
          "package": "feldspar-language",
          "partial": "Par",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Par.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Par",
          "name": "ParFeature",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Par.html#ParFeature",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Par",
          "module": "Feldspar.Core.Constructs.Par",
          "name": "ParFeature",
          "package": "feldspar-language",
          "partial": "Par Feature",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Par.html#t:ParFeature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Par",
          "name": "ParFork",
          "package": "feldspar-language",
          "signature": "ParFeature (Par () :-\u003e Full (Par ()))",
          "source": "src/Feldspar-Core-Constructs-Par.html#ParFeature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Par",
          "module": "Feldspar.Core.Constructs.Par",
          "name": "ParFork",
          "normalized": "ParFeature(Par()-\u003eFull(Par()))",
          "package": "feldspar-language",
          "partial": "Par Fork",
          "signature": "ParFeature(Par()-\u003eFull(Par()))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Par.html#v:ParFork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Par",
          "name": "ParGet",
          "package": "feldspar-language",
          "signature": "ParFeature (IV a :-\u003e Full (Par a))",
          "source": "src/Feldspar-Core-Constructs-Par.html#ParFeature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Par",
          "module": "Feldspar.Core.Constructs.Par",
          "name": "ParGet",
          "normalized": "ParFeature(IV a-\u003eFull(Par a))",
          "package": "feldspar-language",
          "partial": "Par Get",
          "signature": "ParFeature(IV a-\u003eFull(Par a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Par.html#v:ParGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Par",
          "name": "ParNew",
          "package": "feldspar-language",
          "signature": "ParFeature (Full (Par (IV a)))",
          "source": "src/Feldspar-Core-Constructs-Par.html#ParFeature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Par",
          "module": "Feldspar.Core.Constructs.Par",
          "name": "ParNew",
          "package": "feldspar-language",
          "partial": "Par New",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Par.html#v:ParNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Par",
          "name": "ParPut",
          "package": "feldspar-language",
          "signature": "ParFeature (IV a :-\u003e (a :-\u003e Full (Par ())))",
          "source": "src/Feldspar-Core-Constructs-Par.html#ParFeature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Par",
          "module": "Feldspar.Core.Constructs.Par",
          "name": "ParPut",
          "normalized": "ParFeature(IV a-\u003e(a-\u003eFull(Par())))",
          "package": "feldspar-language",
          "partial": "Par Put",
          "signature": "ParFeature(IV a-\u003e(a-\u003eFull(Par())))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Par.html#v:ParPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Par",
          "name": "ParRun",
          "package": "feldspar-language",
          "signature": "ParFeature (Par a :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Par.html#ParFeature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Par",
          "module": "Feldspar.Core.Constructs.Par",
          "name": "ParRun",
          "normalized": "ParFeature(Par a-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "Par Run",
          "signature": "ParFeature(Par a-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Par.html#v:ParRun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Par",
          "name": "ParYield",
          "package": "feldspar-language",
          "signature": "ParFeature (Full (Par ()))",
          "source": "src/Feldspar-Core-Constructs-Par.html#ParFeature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Par",
          "module": "Feldspar.Core.Constructs.Par",
          "name": "ParYield",
          "normalized": "ParFeature(Full(Par()))",
          "package": "feldspar-language",
          "partial": "Par Yield",
          "signature": "ParFeature(Full(Par()))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Par.html#v:ParYield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Par",
          "name": "monadProxy",
          "package": "feldspar-language",
          "signature": "P Par",
          "source": "src/Feldspar-Core-Constructs-Par.html#monadProxy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Par",
          "module": "Feldspar.Core.Constructs.Par",
          "name": "monadProxy",
          "package": "feldspar-language",
          "partial": "Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Par.html#v:monadProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Save",
          "name": "Save",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Save.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Save",
          "module": "Feldspar.Core.Constructs.Save",
          "name": "Save",
          "package": "feldspar-language",
          "partial": "Save",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Save.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Save",
          "name": "Save",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Save.html#Save",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Save",
          "module": "Feldspar.Core.Constructs.Save",
          "name": "Save",
          "package": "feldspar-language",
          "partial": "Save",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Save.html#t:Save"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Save",
          "name": "Save",
          "package": "feldspar-language",
          "signature": "Save (a :-\u003e Full a)",
          "source": "src/Feldspar-Core-Constructs-Save.html#Save",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Save",
          "module": "Feldspar.Core.Constructs.Save",
          "name": "Save",
          "normalized": "Save(a-\u003eFull a)",
          "package": "feldspar-language",
          "partial": "Save",
          "signature": "Save(a-\u003eFull a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Save.html#v:Save"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.SizeProp",
          "name": "SizeProp",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-SizeProp.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs SizeProp",
          "module": "Feldspar.Core.Constructs.SizeProp",
          "name": "SizeProp",
          "package": "feldspar-language",
          "partial": "Size Prop",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-SizeProp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.SizeProp",
          "name": "PropSize",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-SizeProp.html#PropSize",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs SizeProp",
          "module": "Feldspar.Core.Constructs.SizeProp",
          "name": "PropSize",
          "package": "feldspar-language",
          "partial": "Prop Size",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-SizeProp.html#t:PropSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.SizeProp",
          "name": "PropSize",
          "package": "feldspar-language",
          "signature": "(Size a -\u003e Size b) -\u003e PropSize (a :-\u003e (b :-\u003e Full b))",
          "source": "src/Feldspar-Core-Constructs-SizeProp.html#PropSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs SizeProp",
          "module": "Feldspar.Core.Constructs.SizeProp",
          "name": "PropSize",
          "normalized": "(Size a-\u003eSize b)-\u003ePropSize(a-\u003e(b-\u003eFull b))",
          "package": "feldspar-language",
          "partial": "Prop Size",
          "signature": "(Size a-\u003eSize b)-\u003ePropSize(a-\u003e(b-\u003eFull b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-SizeProp.html#v:PropSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.SourceInfo",
          "name": "SourceInfo",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-SourceInfo.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs SourceInfo",
          "module": "Feldspar.Core.Constructs.SourceInfo",
          "name": "SourceInfo",
          "package": "feldspar-language",
          "partial": "Source Info",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-SourceInfo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKind \u003ccode\u003e* -\u003e *\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003eSourceInfo\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Core.Constructs.SourceInfo",
          "name": "SourceInfo1",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-SourceInfo.html#SourceInfo1",
          "type": "data"
        },
        "index": {
          "description": "Kind version of SourceInfo",
          "hierarchy": "Feldspar Core Constructs SourceInfo",
          "module": "Feldspar.Core.Constructs.SourceInfo",
          "name": "SourceInfo1",
          "package": "feldspar-language",
          "partial": "Source Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-SourceInfo.html#t:SourceInfo1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.SourceInfo",
          "name": "SourceInfo1",
          "package": "feldspar-language",
          "signature": "SourceInfo1 SourceInfo",
          "source": "src/Feldspar-Core-Constructs-SourceInfo.html#SourceInfo1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs SourceInfo",
          "module": "Feldspar.Core.Constructs.SourceInfo",
          "name": "SourceInfo1",
          "package": "feldspar-language",
          "partial": "Source Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-SourceInfo.html#v:SourceInfo1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Trace",
          "name": "Trace",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Trace.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Trace",
          "module": "Feldspar.Core.Constructs.Trace",
          "name": "Trace",
          "package": "feldspar-language",
          "partial": "Trace",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Trace.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Trace",
          "name": "Trace",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Trace.html#Trace",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Trace",
          "module": "Feldspar.Core.Constructs.Trace",
          "name": "Trace",
          "package": "feldspar-language",
          "partial": "Trace",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Trace.html#t:Trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Trace",
          "name": "Trace",
          "package": "feldspar-language",
          "signature": "Trace (IntN :-\u003e (a :-\u003e Full a))",
          "source": "src/Feldspar-Core-Constructs-Trace.html#Trace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Trace",
          "module": "Feldspar.Core.Constructs.Trace",
          "name": "Trace",
          "normalized": "Trace(IntN-\u003e(a-\u003eFull a))",
          "package": "feldspar-language",
          "partial": "Trace",
          "signature": "Trace(IntN-\u003e(a-\u003eFull a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Trace.html#v:Trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs.Tuple",
          "name": "Tuple",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs-Tuple.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs Tuple",
          "module": "Feldspar.Core.Constructs.Tuple",
          "name": "Tuple",
          "package": "feldspar-language",
          "partial": "Tuple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs-Tuple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs",
          "name": "Constructs",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs",
          "module": "Feldspar.Core.Constructs",
          "name": "Constructs",
          "package": "feldspar-language",
          "partial": "Constructs",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs",
          "name": "Data",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs.html#Data",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs",
          "module": "Feldspar.Core.Constructs",
          "name": "Data",
          "package": "feldspar-language",
          "partial": "Data",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs.html#t:Data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs",
          "name": "FeldDomain",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs.html#FeldDomain",
          "type": "type"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs",
          "module": "Feldspar.Core.Constructs",
          "name": "FeldDomain",
          "package": "feldspar-language",
          "partial": "Feld Domain",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs.html#t:FeldDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs",
          "name": "FeldDomainAll",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs.html#FeldDomainAll",
          "type": "type"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs",
          "module": "Feldspar.Core.Constructs",
          "name": "FeldDomainAll",
          "package": "feldspar-language",
          "partial": "Feld Domain All",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs.html#t:FeldDomainAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs",
          "name": "FeldSymbols",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs.html#FeldSymbols",
          "type": "type"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs",
          "module": "Feldspar.Core.Constructs",
          "name": "FeldSymbols",
          "package": "feldspar-language",
          "partial": "Feld Symbols",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs.html#t:FeldSymbols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialization of the \u003ccode\u003e\u003ca\u003eSyntactic\u003c/a\u003e\u003c/code\u003e class for the Feldspar domain\n\u003c/p\u003e",
          "module": "Feldspar.Core.Constructs",
          "name": "Syntax",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs.html#Syntax",
          "type": "class"
        },
        "index": {
          "description": "Specialization of the Syntactic class for the Feldspar domain",
          "hierarchy": "Feldspar Core Constructs",
          "module": "Feldspar.Core.Constructs",
          "name": "Syntax",
          "package": "feldspar-language",
          "partial": "Syntax",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs.html#t:Syntax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs",
          "name": "Data",
          "package": "feldspar-language",
          "signature": "Data",
          "source": "src/Feldspar-Core-Constructs.html#Data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs",
          "module": "Feldspar.Core.Constructs",
          "name": "Data",
          "package": "feldspar-language",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs.html#v:Data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs",
          "name": "sugarSymF",
          "package": "feldspar-language",
          "signature": "feature sig -\u003e c",
          "source": "src/Feldspar-Core-Constructs.html#sugarSymF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs",
          "module": "Feldspar.Core.Constructs",
          "name": "sugarSymF",
          "normalized": "a b-\u003ec",
          "package": "feldspar-language",
          "partial": "Sym",
          "signature": "feature sig-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs.html#v:sugarSymF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Constructs",
          "name": "unData",
          "package": "feldspar-language",
          "signature": "ASTF FeldDomainAll a",
          "source": "src/Feldspar-Core-Constructs.html#Data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Constructs",
          "module": "Feldspar.Core.Constructs",
          "name": "unData",
          "package": "feldspar-language",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Constructs.html#v:unData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Array",
          "name": "Array",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Array.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Array",
          "module": "Feldspar.Core.Frontend.Array",
          "name": "Array",
          "package": "feldspar-language",
          "partial": "Array",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Array.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArray patch\n\u003c/p\u003e",
          "module": "Feldspar.Core.Frontend.Array",
          "name": "(|\u003e)",
          "package": "feldspar-language",
          "signature": "Patch (CollSize a) (CollSize a) -\u003e Patch (Elem a) (Elem a) -\u003e Patch a a",
          "source": "src/Feldspar-Core-Frontend-Array.html#%7C%3E",
          "type": "function"
        },
        "index": {
          "description": "Array patch",
          "hierarchy": "Feldspar Core Frontend Array",
          "module": "Feldspar.Core.Frontend.Array",
          "name": "(|\u003e) |\u003e",
          "normalized": "Patch(CollSize a)(CollSize a)-\u003ePatch(Elem a)(Elem a)-\u003ePatch a a",
          "package": "feldspar-language",
          "signature": "Patch(CollSize a)(CollSize a)-\u003ePatch(Elem a)(Elem a)-\u003ePatch a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Array.html#v:-124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Array",
          "name": "append",
          "package": "feldspar-language",
          "signature": "Data [a] -\u003e Data [a] -\u003e Data [a]",
          "source": "src/Feldspar-Core-Frontend-Array.html#append",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Array",
          "module": "Feldspar.Core.Frontend.Array",
          "name": "append",
          "normalized": "Data[a]-\u003eData[a]-\u003eData[a]",
          "package": "feldspar-language",
          "signature": "Data[a]-\u003eData[a]-\u003eData[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Array.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Array",
          "name": "getIx",
          "package": "feldspar-language",
          "signature": "Data [a] -\u003e Data Index -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Array.html#getIx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Array",
          "module": "Feldspar.Core.Frontend.Array",
          "name": "getIx",
          "normalized": "Data[a]-\u003eData Index-\u003eData a",
          "package": "feldspar-language",
          "partial": "Ix",
          "signature": "Data[a]-\u003eData Index-\u003eData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Array.html#v:getIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Array",
          "name": "getLength",
          "package": "feldspar-language",
          "signature": "Data [a] -\u003e Data Length",
          "source": "src/Feldspar-Core-Frontend-Array.html#getLength",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Array",
          "module": "Feldspar.Core.Frontend.Array",
          "name": "getLength",
          "normalized": "Data[a]-\u003eData Length",
          "package": "feldspar-language",
          "partial": "Length",
          "signature": "Data[a]-\u003eData Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Array.html#v:getLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Array",
          "name": "parallel",
          "package": "feldspar-language",
          "signature": "Data Length -\u003e (Data Index -\u003e Data a) -\u003e Data [a]",
          "source": "src/Feldspar-Core-Frontend-Array.html#parallel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Array",
          "module": "Feldspar.Core.Frontend.Array",
          "name": "parallel",
          "normalized": "Data Length-\u003e(Data Index-\u003eData a)-\u003eData[a]",
          "package": "feldspar-language",
          "signature": "Data Length-\u003e(Data Index-\u003eData a)-\u003eData[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Array.html#v:parallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Array",
          "name": "sequential",
          "package": "feldspar-language",
          "signature": "Data Length -\u003e s -\u003e (Data Index -\u003e s -\u003e (Data a, s)) -\u003e Data [a]",
          "source": "src/Feldspar-Core-Frontend-Array.html#sequential",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Array",
          "module": "Feldspar.Core.Frontend.Array",
          "name": "sequential",
          "normalized": "Data Length-\u003ea-\u003e(Data Index-\u003ea-\u003e(Data b,a))-\u003eData[b]",
          "package": "feldspar-language",
          "signature": "Data Length-\u003es-\u003e(Data Index-\u003es-\u003e(Data a,s))-\u003eData[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Array.html#v:sequential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Array",
          "name": "setIx",
          "package": "feldspar-language",
          "signature": "Data [a] -\u003e Data Index -\u003e Data a -\u003e Data [a]",
          "source": "src/Feldspar-Core-Frontend-Array.html#setIx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Array",
          "module": "Feldspar.Core.Frontend.Array",
          "name": "setIx",
          "normalized": "Data[a]-\u003eData Index-\u003eData a-\u003eData[a]",
          "package": "feldspar-language",
          "partial": "Ix",
          "signature": "Data[a]-\u003eData Index-\u003eData a-\u003eData[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Array.html#v:setIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the length of the vector to the supplied value. If the supplied\n length is greater than the old length, the new elements will have undefined\n value.\n\u003c/p\u003e",
          "module": "Feldspar.Core.Frontend.Array",
          "name": "setLength",
          "package": "feldspar-language",
          "signature": "Data Length -\u003e Data [a] -\u003e Data [a]",
          "source": "src/Feldspar-Core-Frontend-Array.html#setLength",
          "type": "function"
        },
        "index": {
          "description": "Change the length of the vector to the supplied value If the supplied length is greater than the old length the new elements will have undefined value",
          "hierarchy": "Feldspar Core Frontend Array",
          "module": "Feldspar.Core.Frontend.Array",
          "name": "setLength",
          "normalized": "Data Length-\u003eData[a]-\u003eData[a]",
          "package": "feldspar-language",
          "partial": "Length",
          "signature": "Data Length-\u003eData[a]-\u003eData[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Array.html#v:setLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Binding",
          "name": "Binding",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Binding.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Binding",
          "module": "Feldspar.Core.Frontend.Binding",
          "name": "Binding",
          "package": "feldspar-language",
          "partial": "Binding",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Binding.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShare an expression in the scope of a function\n\u003c/p\u003e",
          "module": "Feldspar.Core.Frontend.Binding",
          "name": "($\u003c)",
          "package": "feldspar-language",
          "signature": "(a -\u003e b) -\u003e a -\u003e b",
          "source": "src/Feldspar-Core-Frontend-Binding.html#%24%3C",
          "type": "function"
        },
        "index": {
          "description": "Share an expression in the scope of function",
          "hierarchy": "Feldspar Core Frontend Binding",
          "module": "Feldspar.Core.Frontend.Binding",
          "name": "($\u003c) $\u003c",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "feldspar-language",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Binding.html#v:-36--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShare the intermediate result when composing functions\n\u003c/p\u003e",
          "module": "Feldspar.Core.Frontend.Binding",
          "name": "(.\u003c)",
          "package": "feldspar-language",
          "signature": "(b -\u003e c) -\u003e (a -\u003e b) -\u003e a -\u003e c",
          "source": "src/Feldspar-Core-Frontend-Binding.html#.%3C",
          "type": "function"
        },
        "index": {
          "description": "Share the intermediate result when composing functions",
          "hierarchy": "Feldspar Core Frontend Binding",
          "module": "Feldspar.Core.Frontend.Binding",
          "name": "(.\u003c) .\u003c",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ea)-\u003ec-\u003eb",
          "package": "feldspar-language",
          "signature": "(b-\u003ec)-\u003e(a-\u003eb)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Binding.html#v:.-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShare an expression in the scope of a function\n\u003c/p\u003e",
          "module": "Feldspar.Core.Frontend.Binding",
          "name": "share",
          "package": "feldspar-language",
          "signature": "a -\u003e (a -\u003e b) -\u003e b",
          "source": "src/Feldspar-Core-Frontend-Binding.html#share",
          "type": "function"
        },
        "index": {
          "description": "Share an expression in the scope of function",
          "hierarchy": "Feldspar Core Frontend Binding",
          "module": "Feldspar.Core.Frontend.Binding",
          "name": "share",
          "normalized": "a-\u003e(a-\u003eb)-\u003eb",
          "package": "feldspar-language",
          "signature": "a-\u003e(a-\u003eb)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Binding.html#v:share"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "Bits",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Bits.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Bits",
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "Bits",
          "package": "feldspar-language",
          "partial": "Bits",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Bits.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "Bits",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Bits.html#Bits",
          "type": "class"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Bits",
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "Bits",
          "package": "feldspar-language",
          "partial": "Bits",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Bits.html#t:Bits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "(⊕)",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Bits.html#%2295",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Bits",
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "(⊕) ⊕",
          "normalized": "Data a-\u003eData a-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a-\u003eData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Bits.html#v:-8853-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "(.|.)",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Bits.html#.%7C.",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Bits",
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "(.|.) .|.",
          "normalized": "Data a-\u003eData a-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Bits.html#v:.-124-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "(.&.)",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Bits.html#.%26.",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Bits",
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "(.&.) .&.",
          "normalized": "Data a-\u003eData a-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Bits.html#v:.-38-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "(.\u003c\u003c.)",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data Index -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Bits.html#.%3C%3C.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Bits",
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "(.\u003c\u003c.) .\u003c\u003c.",
          "normalized": "Data a-\u003eData Index-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData Index-\u003eData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Bits.html#v:.-60--60-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "(.\u003e\u003e.)",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data Index -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Bits.html#.%3E%3E.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Bits",
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "(.\u003e\u003e.) .\u003e\u003e.",
          "normalized": "Data a-\u003eData Index-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData Index-\u003eData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Bits.html#v:.-62--62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "bit",
          "package": "feldspar-language",
          "signature": "Data Index -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Bits.html#bit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Bits",
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "bit",
          "normalized": "Data Index-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data Index-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Bits.html#v:bit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "bitCount",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data Index",
          "source": "src/Feldspar-Core-Frontend-Bits.html#bitCount",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Bits",
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "bitCount",
          "normalized": "Data a-\u003eData Index",
          "package": "feldspar-language",
          "partial": "Count",
          "signature": "Data a-\u003eData Index",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Bits.html#v:bitCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "bitScan",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data Index",
          "source": "src/Feldspar-Core-Frontend-Bits.html#bitScan",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Bits",
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "bitScan",
          "normalized": "Data a-\u003eData Index",
          "package": "feldspar-language",
          "partial": "Scan",
          "signature": "Data a-\u003eData Index",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Bits.html#v:bitScan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "bitSize",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data Index",
          "source": "src/Feldspar-Core-Frontend-Bits.html#bitSize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Bits",
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "bitSize",
          "normalized": "Data a-\u003eData Index",
          "package": "feldspar-language",
          "partial": "Size",
          "signature": "Data a-\u003eData Index",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Bits.html#v:bitSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "bitSize'",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Index",
          "source": "src/Feldspar-Core-Frontend-Bits.html#bitSize%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Bits",
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "bitSize'",
          "normalized": "Data a-\u003eIndex",
          "package": "feldspar-language",
          "partial": "Size'",
          "signature": "Data a-\u003eIndex",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Bits.html#v:bitSize-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "clearBit",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data Index -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Bits.html#clearBit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Bits",
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "clearBit",
          "normalized": "Data a-\u003eData Index-\u003eData a",
          "package": "feldspar-language",
          "partial": "Bit",
          "signature": "Data a-\u003eData Index-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Bits.html#v:clearBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "complement",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Bits.html#complement",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Bits",
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "complement",
          "normalized": "Data a-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Bits.html#v:complement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "complementBit",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data Index -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Bits.html#complementBit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Bits",
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "complementBit",
          "normalized": "Data a-\u003eData Index-\u003eData a",
          "package": "feldspar-language",
          "partial": "Bit",
          "signature": "Data a-\u003eData Index-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Bits.html#v:complementBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "isSigned",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data Bool",
          "source": "src/Feldspar-Core-Frontend-Bits.html#isSigned",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Bits",
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "isSigned",
          "normalized": "Data a-\u003eData Bool",
          "package": "feldspar-language",
          "partial": "Signed",
          "signature": "Data a-\u003eData Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Bits.html#v:isSigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "reverseBits",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Bits.html#reverseBits",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Bits",
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "reverseBits",
          "normalized": "Data a-\u003eData a",
          "package": "feldspar-language",
          "partial": "Bits",
          "signature": "Data a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Bits.html#v:reverseBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "rotateL",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data IntN -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Bits.html#rotateL",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Bits",
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "rotateL",
          "normalized": "Data a-\u003eData IntN-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData IntN-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Bits.html#v:rotateL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "rotateLU",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data Index -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Bits.html#rotateLU",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Bits",
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "rotateLU",
          "normalized": "Data a-\u003eData Index-\u003eData a",
          "package": "feldspar-language",
          "partial": "LU",
          "signature": "Data a-\u003eData Index-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Bits.html#v:rotateLU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "rotateR",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data IntN -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Bits.html#rotateR",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Bits",
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "rotateR",
          "normalized": "Data a-\u003eData IntN-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData IntN-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Bits.html#v:rotateR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "rotateRU",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data Index -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Bits.html#rotateRU",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Bits",
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "rotateRU",
          "normalized": "Data a-\u003eData Index-\u003eData a",
          "package": "feldspar-language",
          "partial": "RU",
          "signature": "Data a-\u003eData Index-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Bits.html#v:rotateRU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "setBit",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data Index -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Bits.html#setBit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Bits",
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "setBit",
          "normalized": "Data a-\u003eData Index-\u003eData a",
          "package": "feldspar-language",
          "partial": "Bit",
          "signature": "Data a-\u003eData Index-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Bits.html#v:setBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "shiftL",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data IntN -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Bits.html#shiftL",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Bits",
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "shiftL",
          "normalized": "Data a-\u003eData IntN-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData IntN-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Bits.html#v:shiftL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "shiftLU",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data Index -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Bits.html#shiftLU",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Bits",
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "shiftLU",
          "normalized": "Data a-\u003eData Index-\u003eData a",
          "package": "feldspar-language",
          "partial": "LU",
          "signature": "Data a-\u003eData Index-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Bits.html#v:shiftLU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "shiftR",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data IntN -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Bits.html#shiftR",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Bits",
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "shiftR",
          "normalized": "Data a-\u003eData IntN-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData IntN-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Bits.html#v:shiftR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "shiftRU",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data Index -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Bits.html#shiftRU",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Bits",
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "shiftRU",
          "normalized": "Data a-\u003eData Index-\u003eData a",
          "package": "feldspar-language",
          "partial": "RU",
          "signature": "Data a-\u003eData Index-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Bits.html#v:shiftRU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "testBit",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data Index -\u003e Data Bool",
          "source": "src/Feldspar-Core-Frontend-Bits.html#testBit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Bits",
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "testBit",
          "normalized": "Data a-\u003eData Index-\u003eData Bool",
          "package": "feldspar-language",
          "partial": "Bit",
          "signature": "Data a-\u003eData Index-\u003eData Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Bits.html#v:testBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "xor",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Bits.html#xor",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Bits",
          "module": "Feldspar.Core.Frontend.Bits",
          "name": "xor",
          "normalized": "Data a-\u003eData a-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Bits.html#v:xor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Complex",
          "name": "Complex",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Complex.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Complex",
          "module": "Feldspar.Core.Frontend.Complex",
          "name": "Complex",
          "package": "feldspar-language",
          "partial": "Complex",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Complex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Complex",
          "name": "(+.)",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a -\u003e Data (Complex a)",
          "source": "src/Feldspar-Core-Frontend-Complex.html#%2B.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Complex",
          "module": "Feldspar.Core.Frontend.Complex",
          "name": "(+.) +.",
          "normalized": "Data a-\u003eData a-\u003eData(Complex a)",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a-\u003eData(Complex a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Complex.html#v:-43-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Complex",
          "name": "cis",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data (Complex a)",
          "source": "src/Feldspar-Core-Frontend-Complex.html#cis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Complex",
          "module": "Feldspar.Core.Frontend.Complex",
          "name": "cis",
          "normalized": "Data a-\u003eData(Complex a)",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData(Complex a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Complex.html#v:cis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Complex",
          "name": "complex",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a -\u003e Data (Complex a)",
          "source": "src/Feldspar-Core-Frontend-Complex.html#complex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Complex",
          "module": "Feldspar.Core.Frontend.Complex",
          "name": "complex",
          "normalized": "Data a-\u003eData a-\u003eData(Complex a)",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a-\u003eData(Complex a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Complex.html#v:complex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Complex",
          "name": "conjugate",
          "package": "feldspar-language",
          "signature": "Data (Complex a) -\u003e Data (Complex a)",
          "source": "src/Feldspar-Core-Frontend-Complex.html#conjugate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Complex",
          "module": "Feldspar.Core.Frontend.Complex",
          "name": "conjugate",
          "normalized": "Data(Complex a)-\u003eData(Complex a)",
          "package": "feldspar-language",
          "signature": "Data(Complex a)-\u003eData(Complex a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Complex.html#v:conjugate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Complex",
          "name": "imagPart",
          "package": "feldspar-language",
          "signature": "Data (Complex a) -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Complex.html#imagPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Complex",
          "module": "Feldspar.Core.Frontend.Complex",
          "name": "imagPart",
          "normalized": "Data(Complex a)-\u003eData a",
          "package": "feldspar-language",
          "partial": "Part",
          "signature": "Data(Complex a)-\u003eData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Complex.html#v:imagPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Complex",
          "name": "iunit",
          "package": "feldspar-language",
          "signature": "Data (Complex a)",
          "source": "src/Feldspar-Core-Frontend-Complex.html#iunit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Complex",
          "module": "Feldspar.Core.Frontend.Complex",
          "name": "iunit",
          "package": "feldspar-language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Complex.html#v:iunit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Complex",
          "name": "magnitude",
          "package": "feldspar-language",
          "signature": "Data (Complex a) -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Complex.html#magnitude",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Complex",
          "module": "Feldspar.Core.Frontend.Complex",
          "name": "magnitude",
          "normalized": "Data(Complex a)-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data(Complex a)-\u003eData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Complex.html#v:magnitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Complex",
          "name": "mkPolar",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a -\u003e Data (Complex a)",
          "source": "src/Feldspar-Core-Frontend-Complex.html#mkPolar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Complex",
          "module": "Feldspar.Core.Frontend.Complex",
          "name": "mkPolar",
          "normalized": "Data a-\u003eData a-\u003eData(Complex a)",
          "package": "feldspar-language",
          "partial": "Polar",
          "signature": "Data a-\u003eData a-\u003eData(Complex a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Complex.html#v:mkPolar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Complex",
          "name": "phase",
          "package": "feldspar-language",
          "signature": "Data (Complex a) -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Complex.html#phase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Complex",
          "module": "Feldspar.Core.Frontend.Complex",
          "name": "phase",
          "normalized": "Data(Complex a)-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data(Complex a)-\u003eData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Complex.html#v:phase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Complex",
          "name": "polar",
          "package": "feldspar-language",
          "signature": "Data (Complex a) -\u003e (Data a, Data a)",
          "source": "src/Feldspar-Core-Frontend-Complex.html#polar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Complex",
          "module": "Feldspar.Core.Frontend.Complex",
          "name": "polar",
          "normalized": "Data(Complex a)-\u003e(Data a,Data a)",
          "package": "feldspar-language",
          "signature": "Data(Complex a)-\u003e(Data a,Data a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Complex.html#v:polar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Complex",
          "name": "realPart",
          "package": "feldspar-language",
          "signature": "Data (Complex a) -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Complex.html#realPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Complex",
          "module": "Feldspar.Core.Frontend.Complex",
          "name": "realPart",
          "normalized": "Data(Complex a)-\u003eData a",
          "package": "feldspar-language",
          "partial": "Part",
          "signature": "Data(Complex a)-\u003eData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Complex.html#v:realPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Condition",
          "name": "Condition",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Condition.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Condition",
          "module": "Feldspar.Core.Frontend.Condition",
          "name": "Condition",
          "package": "feldspar-language",
          "partial": "Condition",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Condition.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Condition",
          "name": "(?)",
          "package": "feldspar-language",
          "signature": "Data Bool -\u003e (a, a) -\u003e a",
          "source": "src/Feldspar-Core-Frontend-Condition.html#%3F",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Condition",
          "module": "Feldspar.Core.Frontend.Condition",
          "name": "(?) ?",
          "normalized": "Data Bool-\u003e(a,a)-\u003ea",
          "package": "feldspar-language",
          "signature": "Data Bool-\u003e(a,a)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Condition.html#v:-63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Condition",
          "name": "condition",
          "package": "feldspar-language",
          "signature": "Data Bool -\u003e a -\u003e a -\u003e a",
          "source": "src/Feldspar-Core-Frontend-Condition.html#condition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Condition",
          "module": "Feldspar.Core.Frontend.Condition",
          "name": "condition",
          "normalized": "Data Bool-\u003ea-\u003ea-\u003ea",
          "package": "feldspar-language",
          "signature": "Data Bool-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Condition.html#v:condition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.ConditionM",
          "name": "ConditionM",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-ConditionM.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend ConditionM",
          "module": "Feldspar.Core.Frontend.ConditionM",
          "name": "ConditionM",
          "package": "feldspar-language",
          "partial": "Condition",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-ConditionM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.ConditionM",
          "name": "ifM",
          "package": "feldspar-language",
          "signature": "Data Bool -\u003e M a -\u003e M a -\u003e M a",
          "source": "src/Feldspar-Core-Frontend-ConditionM.html#ifM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend ConditionM",
          "module": "Feldspar.Core.Frontend.ConditionM",
          "name": "ifM",
          "normalized": "Data Bool-\u003eM a-\u003eM a-\u003eM a",
          "package": "feldspar-language",
          "signature": "Data Bool-\u003eM a-\u003eM a-\u003eM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-ConditionM.html#v:ifM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Conversion",
          "name": "Conversion",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Conversion.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Conversion",
          "module": "Feldspar.Core.Frontend.Conversion",
          "name": "Conversion",
          "package": "feldspar-language",
          "partial": "Conversion",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Conversion.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Conversion",
          "name": "b2i",
          "package": "feldspar-language",
          "signature": "Data Bool -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Conversion.html#b2i",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Conversion",
          "module": "Feldspar.Core.Frontend.Conversion",
          "name": "b2i",
          "normalized": "Data Bool-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data Bool-\u003eData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Conversion.html#v:b2i"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Conversion",
          "name": "ceiling",
          "package": "feldspar-language",
          "signature": "Data Float -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Conversion.html#ceiling",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Conversion",
          "module": "Feldspar.Core.Frontend.Conversion",
          "name": "ceiling",
          "normalized": "Data Float-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data Float-\u003eData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Conversion.html#v:ceiling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Conversion",
          "name": "f2i",
          "package": "feldspar-language",
          "signature": "Data Float -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Conversion.html#f2i",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Conversion",
          "module": "Feldspar.Core.Frontend.Conversion",
          "name": "f2i",
          "normalized": "Data Float-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data Float-\u003eData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Conversion.html#v:f2i"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Conversion",
          "name": "floor",
          "package": "feldspar-language",
          "signature": "Data Float -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Conversion.html#floor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Conversion",
          "module": "Feldspar.Core.Frontend.Conversion",
          "name": "floor",
          "normalized": "Data Float-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data Float-\u003eData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Conversion.html#v:floor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Conversion",
          "name": "i2f",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data Float",
          "source": "src/Feldspar-Core-Frontend-Conversion.html#i2f",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Conversion",
          "module": "Feldspar.Core.Frontend.Conversion",
          "name": "i2f",
          "normalized": "Data a-\u003eData Float",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Conversion.html#v:i2f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Conversion",
          "name": "i2n",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data b",
          "source": "src/Feldspar-Core-Frontend-Conversion.html#i2n",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Conversion",
          "module": "Feldspar.Core.Frontend.Conversion",
          "name": "i2n",
          "normalized": "Data a-\u003eData b",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Conversion.html#v:i2n"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Conversion",
          "name": "round",
          "package": "feldspar-language",
          "signature": "Data Float -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Conversion.html#round",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Conversion",
          "module": "Feldspar.Core.Frontend.Conversion",
          "name": "round",
          "normalized": "Data Float-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data Float-\u003eData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Conversion.html#v:round"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Conversion",
          "name": "truncate",
          "package": "feldspar-language",
          "signature": "Data Float -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Conversion.html#truncate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Conversion",
          "module": "Feldspar.Core.Frontend.Conversion",
          "name": "truncate",
          "normalized": "Data Float-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data Float-\u003eData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Conversion.html#v:truncate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Eq",
          "name": "Eq",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Eq.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Eq",
          "module": "Feldspar.Core.Frontend.Eq",
          "name": "Eq",
          "package": "feldspar-language",
          "partial": "Eq",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Eq.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedefinition of the standard \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e class for Feldspar\n\u003c/p\u003e",
          "module": "Feldspar.Core.Frontend.Eq",
          "name": "Eq",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Eq.html#Eq",
          "type": "class"
        },
        "index": {
          "description": "Redefinition of the standard Eq class for Feldspar",
          "hierarchy": "Feldspar Core Frontend Eq",
          "module": "Feldspar.Core.Frontend.Eq",
          "name": "Eq",
          "package": "feldspar-language",
          "partial": "Eq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Eq.html#t:Eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Eq",
          "name": "(/=)",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a -\u003e Data Bool",
          "source": "src/Feldspar-Core-Frontend-Eq.html#%2F%3D",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Eq",
          "module": "Feldspar.Core.Frontend.Eq",
          "name": "(/=) /=",
          "normalized": "Data a-\u003eData a-\u003eData Bool",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a-\u003eData Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Eq.html#v:-47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Eq",
          "name": "(==)",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a -\u003e Data Bool",
          "source": "src/Feldspar-Core-Frontend-Eq.html#%3D%3D",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Eq",
          "module": "Feldspar.Core.Frontend.Eq",
          "name": "(==) ==",
          "normalized": "Data a-\u003eData a-\u003eData Bool",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a-\u003eData Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Eq.html#v:-61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Error",
          "name": "Error",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Error.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Error",
          "module": "Feldspar.Core.Frontend.Error",
          "name": "Error",
          "package": "feldspar-language",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssert that the condition holds, the conditions string representation is used as the message\n\u003c/p\u003e",
          "module": "Feldspar.Core.Frontend.Error",
          "name": "assert",
          "package": "feldspar-language",
          "signature": "Data Bool -\u003e a -\u003e a",
          "source": "src/Feldspar-Core-Frontend-Error.html#assert",
          "type": "function"
        },
        "index": {
          "description": "Assert that the condition holds the conditions string representation is used as the message",
          "hierarchy": "Feldspar Core Frontend Error",
          "module": "Feldspar.Core.Frontend.Error",
          "name": "assert",
          "normalized": "Data Bool-\u003ea-\u003ea",
          "package": "feldspar-language",
          "signature": "Data Bool-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Error.html#v:assert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssert that the condition holds or fail with message\n\u003c/p\u003e",
          "module": "Feldspar.Core.Frontend.Error",
          "name": "assertMsg",
          "package": "feldspar-language",
          "signature": "String -\u003e Data Bool -\u003e a -\u003e a",
          "source": "src/Feldspar-Core-Frontend-Error.html#assertMsg",
          "type": "function"
        },
        "index": {
          "description": "Assert that the condition holds or fail with message",
          "hierarchy": "Feldspar Core Frontend Error",
          "module": "Feldspar.Core.Frontend.Error",
          "name": "assertMsg",
          "normalized": "String-\u003eData Bool-\u003ea-\u003ea",
          "package": "feldspar-language",
          "partial": "Msg",
          "signature": "String-\u003eData Bool-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Error.html#v:assertMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Error",
          "name": "err",
          "package": "feldspar-language",
          "signature": "String -\u003e a",
          "source": "src/Feldspar-Core-Frontend-Error.html#err",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Error",
          "module": "Feldspar.Core.Frontend.Error",
          "name": "err",
          "normalized": "String-\u003ea",
          "package": "feldspar-language",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Error.html#v:err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Error",
          "name": "undef",
          "package": "feldspar-language",
          "signature": "a",
          "source": "src/Feldspar-Core-Frontend-Error.html#undef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Error",
          "module": "Feldspar.Core.Frontend.Error",
          "name": "undef",
          "package": "feldspar-language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Error.html#v:undef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.FFI",
          "name": "FFI",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-FFI.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend FFI",
          "module": "Feldspar.Core.Frontend.FFI",
          "name": "FFI",
          "package": "feldspar-language",
          "partial": "FFI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-FFI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.FFI",
          "name": "foreignImport",
          "package": "feldspar-language",
          "signature": "String -\u003e Denotation a -\u003e c",
          "source": "src/Feldspar-Core-Frontend-FFI.html#foreignImport",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend FFI",
          "module": "Feldspar.Core.Frontend.FFI",
          "name": "foreignImport",
          "normalized": "String-\u003eDenotation a-\u003eb",
          "package": "feldspar-language",
          "partial": "Import",
          "signature": "String-\u003eDenotation a-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-FFI.html#v:foreignImport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "Floating",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Floating.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Floating",
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "Floating",
          "package": "feldspar-language",
          "partial": "Floating",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Floating.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "Floating",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Floating.html#Floating",
          "type": "class"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Floating",
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "Floating",
          "package": "feldspar-language",
          "partial": "Floating",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Floating.html#t:Floating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "(**)",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Floating.html#%2A%2A",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Floating",
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "(**) **",
          "normalized": "Data a-\u003eData a-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Floating.html#v:-42--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "acos",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Floating.html#acos",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Floating",
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "acos",
          "normalized": "Data a-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Floating.html#v:acos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "acosh",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Floating.html#acosh",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Floating",
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "acosh",
          "normalized": "Data a-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Floating.html#v:acosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "asin",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Floating.html#asin",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Floating",
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "asin",
          "normalized": "Data a-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Floating.html#v:asin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "asinh",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Floating.html#asinh",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Floating",
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "asinh",
          "normalized": "Data a-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Floating.html#v:asinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "atan",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Floating.html#atan",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Floating",
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "atan",
          "normalized": "Data a-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Floating.html#v:atan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "atanh",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Floating.html#atanh",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Floating",
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "atanh",
          "normalized": "Data a-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Floating.html#v:atanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "cos",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Floating.html#cos",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Floating",
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "cos",
          "normalized": "Data a-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Floating.html#v:cos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "cosh",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Floating.html#cosh",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Floating",
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "cosh",
          "normalized": "Data a-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Floating.html#v:cosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "exp",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Floating.html#exp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Floating",
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "exp",
          "normalized": "Data a-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Floating.html#v:exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "log",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Floating.html#log",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Floating",
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "log",
          "normalized": "Data a-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Floating.html#v:log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "logBase",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Floating.html#logBase",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Floating",
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "logBase",
          "normalized": "Data a-\u003eData a-\u003eData a",
          "package": "feldspar-language",
          "partial": "Base",
          "signature": "Data a-\u003eData a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Floating.html#v:logBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "pi",
          "package": "feldspar-language",
          "signature": "Data a",
          "source": "src/Feldspar-Core-Frontend-Floating.html#pi",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Floating",
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "pi",
          "package": "feldspar-language",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Floating.html#v:pi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "sin",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Floating.html#sin",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Floating",
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "sin",
          "normalized": "Data a-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Floating.html#v:sin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "sinh",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Floating.html#sinh",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Floating",
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "sinh",
          "normalized": "Data a-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Floating.html#v:sinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "sqrt",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Floating.html#sqrt",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Floating",
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "sqrt",
          "normalized": "Data a-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Floating.html#v:sqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "tan",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Floating.html#tan",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Floating",
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "tan",
          "normalized": "Data a-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Floating.html#v:tan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "tanh",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Floating.html#tanh",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Floating",
          "module": "Feldspar.Core.Frontend.Floating",
          "name": "tanh",
          "normalized": "Data a-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Floating.html#v:tanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Fractional",
          "name": "Fractional",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Fractional.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Fractional",
          "module": "Feldspar.Core.Frontend.Fractional",
          "name": "Fractional",
          "package": "feldspar-language",
          "partial": "Fractional",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Fractional.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFractional types. The relation to the standard \u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e class is\n\u003c/p\u003e\u003cpre\u003einstance \u003ccode\u003e\u003ca\u003eFraction\u003c/a\u003e\u003c/code\u003e a =\u003e \u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e a)\u003c/pre\u003e",
          "module": "Feldspar.Core.Frontend.Fractional",
          "name": "Fraction",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Fractional.html#Fraction",
          "type": "class"
        },
        "index": {
          "description": "Fractional types The relation to the standard Fractional class is instance Fraction Fractional Data",
          "hierarchy": "Feldspar Core Frontend Fractional",
          "module": "Feldspar.Core.Frontend.Fractional",
          "name": "Fraction",
          "package": "feldspar-language",
          "partial": "Fraction",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Fractional.html#t:Fraction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Fractional",
          "name": "divFrac",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Fractional.html#divFrac",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Fractional",
          "module": "Feldspar.Core.Frontend.Fractional",
          "name": "divFrac",
          "normalized": "Data a-\u003eData a-\u003eData a",
          "package": "feldspar-language",
          "partial": "Frac",
          "signature": "Data a-\u003eData a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Fractional.html#v:divFrac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Fractional",
          "name": "fromRationalFrac",
          "package": "feldspar-language",
          "signature": "Rational -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Fractional.html#fromRationalFrac",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Fractional",
          "module": "Feldspar.Core.Frontend.Fractional",
          "name": "fromRationalFrac",
          "normalized": "Rational-\u003eData a",
          "package": "feldspar-language",
          "partial": "Rational Frac",
          "signature": "Rational-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Fractional.html#v:fromRationalFrac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Future",
          "name": "Future",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Future.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Future",
          "module": "Feldspar.Core.Frontend.Future",
          "name": "Future",
          "package": "feldspar-language",
          "partial": "Future",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Future.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Future",
          "name": "Future",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Future.html#Future",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Future",
          "module": "Feldspar.Core.Frontend.Future",
          "name": "Future",
          "package": "feldspar-language",
          "partial": "Future",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Future.html#t:Future"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Future",
          "name": "Future",
          "package": "feldspar-language",
          "signature": "Future",
          "source": "src/Feldspar-Core-Frontend-Future.html#Future",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Future",
          "module": "Feldspar.Core.Frontend.Future",
          "name": "Future",
          "package": "feldspar-language",
          "partial": "Future",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Future.html#v:Future"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Future",
          "name": "await",
          "package": "feldspar-language",
          "signature": "Future a -\u003e a",
          "source": "src/Feldspar-Core-Frontend-Future.html#await",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Future",
          "module": "Feldspar.Core.Frontend.Future",
          "name": "await",
          "normalized": "Future a-\u003ea",
          "package": "feldspar-language",
          "signature": "Future a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Future.html#v:await"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Future",
          "name": "future",
          "package": "feldspar-language",
          "signature": "a -\u003e Future a",
          "source": "src/Feldspar-Core-Frontend-Future.html#future",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Future",
          "module": "Feldspar.Core.Frontend.Future",
          "name": "future",
          "normalized": "a-\u003eFuture a",
          "package": "feldspar-language",
          "signature": "a-\u003eFuture a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Future.html#v:future"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Future",
          "name": "later",
          "package": "feldspar-language",
          "signature": "(a -\u003e b) -\u003e Future a -\u003e Future b",
          "source": "src/Feldspar-Core-Frontend-Future.html#later",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Future",
          "module": "Feldspar.Core.Frontend.Future",
          "name": "later",
          "normalized": "(a-\u003eb)-\u003eFuture a-\u003eFuture b",
          "package": "feldspar-language",
          "signature": "(a-\u003eb)-\u003eFuture a-\u003eFuture b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Future.html#v:later"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Future",
          "name": "pval",
          "package": "feldspar-language",
          "signature": "(a -\u003e b) -\u003e a -\u003e b",
          "source": "src/Feldspar-Core-Frontend-Future.html#pval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Future",
          "module": "Feldspar.Core.Frontend.Future",
          "name": "pval",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "feldspar-language",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Future.html#v:pval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Future",
          "name": "unFuture",
          "package": "feldspar-language",
          "signature": "Data (FVal (Internal a))",
          "source": "src/Feldspar-Core-Frontend-Future.html#Future",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Future",
          "module": "Feldspar.Core.Frontend.Future",
          "name": "unFuture",
          "package": "feldspar-language",
          "partial": "Future",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Future.html#v:unFuture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Integral",
          "name": "Integral",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Integral.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Integral",
          "module": "Feldspar.Core.Frontend.Integral",
          "name": "Integral",
          "package": "feldspar-language",
          "partial": "Integral",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Integral.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Integral",
          "name": "Integral",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Integral.html#Integral",
          "type": "class"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Integral",
          "module": "Feldspar.Core.Frontend.Integral",
          "name": "Integral",
          "package": "feldspar-language",
          "partial": "Integral",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Integral.html#t:Integral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Integral",
          "name": "(^)",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Integral.html#%5E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Integral",
          "module": "Feldspar.Core.Frontend.Integral",
          "name": "(^) ^",
          "normalized": "Data a-\u003eData a-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Integral.html#v:-94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Integral",
          "name": "div",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Integral.html#div",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Integral",
          "module": "Feldspar.Core.Frontend.Integral",
          "name": "div",
          "normalized": "Data a-\u003eData a-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Integral.html#v:div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Integral",
          "name": "divSem",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Integral.html#divSem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Integral",
          "module": "Feldspar.Core.Frontend.Integral",
          "name": "divSem",
          "normalized": "Data a-\u003eData a-\u003eData a",
          "package": "feldspar-language",
          "partial": "Sem",
          "signature": "Data a-\u003eData a-\u003eData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Integral.html#v:divSem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Integral",
          "name": "mod",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Integral.html#mod",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Integral",
          "module": "Feldspar.Core.Frontend.Integral",
          "name": "mod",
          "normalized": "Data a-\u003eData a-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Integral.html#v:mod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Integral",
          "name": "quot",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Integral.html#quot",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Integral",
          "module": "Feldspar.Core.Frontend.Integral",
          "name": "quot",
          "normalized": "Data a-\u003eData a-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Integral.html#v:quot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Integral",
          "name": "rem",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Integral.html#rem",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Integral",
          "module": "Feldspar.Core.Frontend.Integral",
          "name": "rem",
          "normalized": "Data a-\u003eData a-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Integral.html#v:rem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Literal",
          "name": "Literal",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Literal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Literal",
          "module": "Feldspar.Core.Frontend.Literal",
          "name": "Literal",
          "package": "feldspar-language",
          "partial": "Literal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Literal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Literal",
          "name": "false",
          "package": "feldspar-language",
          "signature": "Data Bool",
          "source": "src/Feldspar-Core-Frontend-Literal.html#false",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Literal",
          "module": "Feldspar.Core.Frontend.Literal",
          "name": "false",
          "package": "feldspar-language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Literal.html#v:false"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Literal",
          "name": "true",
          "package": "feldspar-language",
          "signature": "Data Bool",
          "source": "src/Feldspar-Core-Frontend-Literal.html#true",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Literal",
          "module": "Feldspar.Core.Frontend.Literal",
          "name": "true",
          "package": "feldspar-language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Literal.html#v:true"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Literal",
          "name": "value",
          "package": "feldspar-language",
          "signature": "Internal a -\u003e a",
          "source": "src/Feldspar-Core-Frontend-Literal.html#value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Literal",
          "module": "Feldspar.Core.Frontend.Literal",
          "name": "value",
          "normalized": "Internal a-\u003ea",
          "package": "feldspar-language",
          "signature": "Internal a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Literal.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Logic",
          "name": "Logic",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Logic.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Logic",
          "module": "Feldspar.Core.Frontend.Logic",
          "name": "Logic",
          "package": "feldspar-language",
          "partial": "Logic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Logic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Logic",
          "name": "(||)",
          "package": "feldspar-language",
          "signature": "Data Bool -\u003e Data Bool -\u003e Data Bool",
          "source": "src/Feldspar-Core-Frontend-Logic.html#%7C%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Logic",
          "module": "Feldspar.Core.Frontend.Logic",
          "name": "(||) ||",
          "normalized": "Data Bool-\u003eData Bool-\u003eData Bool",
          "package": "feldspar-language",
          "signature": "Data Bool-\u003eData Bool-\u003eData Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Logic.html#v:-124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazy disjunction, second argument only evaluated if necessary\n\u003c/p\u003e",
          "module": "Feldspar.Core.Frontend.Logic",
          "name": "(||*)",
          "package": "feldspar-language",
          "signature": "Data Bool -\u003e Data Bool -\u003e Data Bool",
          "source": "src/Feldspar-Core-Frontend-Logic.html#%7C%7C%2A",
          "type": "function"
        },
        "index": {
          "description": "Lazy disjunction second argument only evaluated if necessary",
          "hierarchy": "Feldspar Core Frontend Logic",
          "module": "Feldspar.Core.Frontend.Logic",
          "name": "(||*) ||*",
          "normalized": "Data Bool-\u003eData Bool-\u003eData Bool",
          "package": "feldspar-language",
          "signature": "Data Bool-\u003eData Bool-\u003eData Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Logic.html#v:-124--124--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Logic",
          "name": "(&&)",
          "package": "feldspar-language",
          "signature": "Data Bool -\u003e Data Bool -\u003e Data Bool",
          "source": "src/Feldspar-Core-Frontend-Logic.html#%26%26",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Logic",
          "module": "Feldspar.Core.Frontend.Logic",
          "name": "(&&) &&",
          "normalized": "Data Bool-\u003eData Bool-\u003eData Bool",
          "package": "feldspar-language",
          "signature": "Data Bool-\u003eData Bool-\u003eData Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Logic.html#v:-38--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazy conjunction, second argument only evaluated if necessary\n\u003c/p\u003e",
          "module": "Feldspar.Core.Frontend.Logic",
          "name": "(&&*)",
          "package": "feldspar-language",
          "signature": "Data Bool -\u003e Data Bool -\u003e Data Bool",
          "source": "src/Feldspar-Core-Frontend-Logic.html#%26%26%2A",
          "type": "function"
        },
        "index": {
          "description": "Lazy conjunction second argument only evaluated if necessary",
          "hierarchy": "Feldspar Core Frontend Logic",
          "module": "Feldspar.Core.Frontend.Logic",
          "name": "(&&*) &&*",
          "normalized": "Data Bool-\u003eData Bool-\u003eData Bool",
          "package": "feldspar-language",
          "signature": "Data Bool-\u003eData Bool-\u003eData Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Logic.html#v:-38--38--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Logic",
          "name": "not",
          "package": "feldspar-language",
          "signature": "Data Bool -\u003e Data Bool",
          "source": "src/Feldspar-Core-Frontend-Logic.html#not",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Logic",
          "module": "Feldspar.Core.Frontend.Logic",
          "name": "not",
          "normalized": "Data Bool-\u003eData Bool",
          "package": "feldspar-language",
          "signature": "Data Bool-\u003eData Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Logic.html#v:not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Loop",
          "name": "Loop",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Loop.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Loop",
          "module": "Feldspar.Core.Frontend.Loop",
          "name": "Loop",
          "package": "feldspar-language",
          "partial": "Loop",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Loop.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Loop",
          "name": "forLoop",
          "package": "feldspar-language",
          "signature": "Data Length -\u003e a -\u003e (Data Index -\u003e a -\u003e a) -\u003e a",
          "source": "src/Feldspar-Core-Frontend-Loop.html#forLoop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Loop",
          "module": "Feldspar.Core.Frontend.Loop",
          "name": "forLoop",
          "normalized": "Data Length-\u003ea-\u003e(Data Index-\u003ea-\u003ea)-\u003ea",
          "package": "feldspar-language",
          "partial": "Loop",
          "signature": "Data Length-\u003ea-\u003e(Data Index-\u003ea-\u003ea)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Loop.html#v:forLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Loop",
          "name": "forM",
          "package": "feldspar-language",
          "signature": "Data Length -\u003e (Data Index -\u003e M a) -\u003e M ()",
          "source": "src/Feldspar-Core-Frontend-Loop.html#forM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Loop",
          "module": "Feldspar.Core.Frontend.Loop",
          "name": "forM",
          "normalized": "Data Length-\u003e(Data Index-\u003eM a)-\u003eM()",
          "package": "feldspar-language",
          "signature": "Data Length-\u003e(Data Index-\u003eM a)-\u003eM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Loop.html#v:forM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Loop",
          "name": "whileLoop",
          "package": "feldspar-language",
          "signature": "a -\u003e (a -\u003e Data Bool) -\u003e (a -\u003e a) -\u003e a",
          "source": "src/Feldspar-Core-Frontend-Loop.html#whileLoop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Loop",
          "module": "Feldspar.Core.Frontend.Loop",
          "name": "whileLoop",
          "normalized": "a-\u003e(a-\u003eData Bool)-\u003e(a-\u003ea)-\u003ea",
          "package": "feldspar-language",
          "partial": "Loop",
          "signature": "a-\u003e(a-\u003eData Bool)-\u003e(a-\u003ea)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Loop.html#v:whileLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Loop",
          "name": "whileM",
          "package": "feldspar-language",
          "signature": "M (Data Bool) -\u003e M a -\u003e M ()",
          "source": "src/Feldspar-Core-Frontend-Loop.html#whileM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Loop",
          "module": "Feldspar.Core.Frontend.Loop",
          "name": "whileM",
          "normalized": "M(Data Bool)-\u003eM a-\u003eM()",
          "package": "feldspar-language",
          "signature": "M(Data Bool)-\u003eM a-\u003eM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Loop.html#v:whileM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Mutable",
          "name": "Mutable",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Mutable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Mutable",
          "module": "Feldspar.Core.Frontend.Mutable",
          "name": "Mutable",
          "package": "feldspar-language",
          "partial": "Mutable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Mutable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Mutable",
          "name": "M",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Mutable.html#M",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Mutable",
          "module": "Feldspar.Core.Frontend.Mutable",
          "name": "M",
          "package": "feldspar-language",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Mutable.html#t:M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Mutable",
          "name": "M",
          "package": "feldspar-language",
          "signature": "M",
          "source": "src/Feldspar-Core-Frontend-Mutable.html#M",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Mutable",
          "module": "Feldspar.Core.Frontend.Mutable",
          "name": "M",
          "package": "feldspar-language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Mutable.html#v:M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Mutable",
          "name": "runMutable",
          "package": "feldspar-language",
          "signature": "M a -\u003e a",
          "source": "src/Feldspar-Core-Frontend-Mutable.html#runMutable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Mutable",
          "module": "Feldspar.Core.Frontend.Mutable",
          "name": "runMutable",
          "normalized": "M a-\u003ea",
          "package": "feldspar-language",
          "partial": "Mutable",
          "signature": "M a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Mutable.html#v:runMutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Mutable",
          "name": "unM",
          "package": "feldspar-language",
          "signature": "Mon FeldSymbols Type Mut a",
          "source": "src/Feldspar-Core-Frontend-Mutable.html#M",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Mutable",
          "module": "Feldspar.Core.Frontend.Mutable",
          "name": "unM",
          "package": "feldspar-language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Mutable.html#v:unM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Mutable",
          "name": "unless",
          "package": "feldspar-language",
          "signature": "Data Bool -\u003e M () -\u003e M ()",
          "source": "src/Feldspar-Core-Frontend-Mutable.html#unless",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Mutable",
          "module": "Feldspar.Core.Frontend.Mutable",
          "name": "unless",
          "normalized": "Data Bool-\u003eM()-\u003eM()",
          "package": "feldspar-language",
          "signature": "Data Bool-\u003eM()-\u003eM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Mutable.html#v:unless"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Mutable",
          "name": "when",
          "package": "feldspar-language",
          "signature": "Data Bool -\u003e M () -\u003e M ()",
          "source": "src/Feldspar-Core-Frontend-Mutable.html#when",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Mutable",
          "module": "Feldspar.Core.Frontend.Mutable",
          "name": "when",
          "normalized": "Data Bool-\u003eM()-\u003eM()",
          "package": "feldspar-language",
          "signature": "Data Bool-\u003eM()-\u003eM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Mutable.html#v:when"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.MutableArray",
          "name": "MutableArray",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-MutableArray.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend MutableArray",
          "module": "Feldspar.Core.Frontend.MutableArray",
          "name": "MutableArray",
          "package": "feldspar-language",
          "partial": "Mutable Array",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-MutableArray.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.MutableArray",
          "name": "arrLength",
          "package": "feldspar-language",
          "signature": "Data (MArr a) -\u003e M (Data Length)",
          "source": "src/Feldspar-Core-Frontend-MutableArray.html#arrLength",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend MutableArray",
          "module": "Feldspar.Core.Frontend.MutableArray",
          "name": "arrLength",
          "normalized": "Data(MArr a)-\u003eM(Data Length)",
          "package": "feldspar-language",
          "partial": "Length",
          "signature": "Data(MArr a)-\u003eM(Data Length)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-MutableArray.html#v:arrLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.MutableArray",
          "name": "forArr",
          "package": "feldspar-language",
          "signature": "Data Length -\u003e (Data Index -\u003e M a) -\u003e M ()",
          "source": "src/Feldspar-Core-Frontend-MutableArray.html#forArr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend MutableArray",
          "module": "Feldspar.Core.Frontend.MutableArray",
          "name": "forArr",
          "normalized": "Data Length-\u003e(Data Index-\u003eM a)-\u003eM()",
          "package": "feldspar-language",
          "partial": "Arr",
          "signature": "Data Length-\u003e(Data Index-\u003eM a)-\u003eM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-MutableArray.html#v:forArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.MutableArray",
          "name": "getArr",
          "package": "feldspar-language",
          "signature": "Data (MArr a) -\u003e Data Index -\u003e M (Data a)",
          "source": "src/Feldspar-Core-Frontend-MutableArray.html#getArr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend MutableArray",
          "module": "Feldspar.Core.Frontend.MutableArray",
          "name": "getArr",
          "normalized": "Data(MArr a)-\u003eData Index-\u003eM(Data a)",
          "package": "feldspar-language",
          "partial": "Arr",
          "signature": "Data(MArr a)-\u003eData Index-\u003eM(Data a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-MutableArray.html#v:getArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.MutableArray",
          "name": "mapArray",
          "package": "feldspar-language",
          "signature": "(Data a -\u003e Data a) -\u003e Data (MArr a) -\u003e M (Data (MArr a))",
          "source": "src/Feldspar-Core-Frontend-MutableArray.html#mapArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend MutableArray",
          "module": "Feldspar.Core.Frontend.MutableArray",
          "name": "mapArray",
          "normalized": "(Data a-\u003eData a)-\u003eData(MArr a)-\u003eM(Data(MArr a))",
          "package": "feldspar-language",
          "partial": "Array",
          "signature": "(Data a-\u003eData a)-\u003eData(MArr a)-\u003eM(Data(MArr a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-MutableArray.html#v:mapArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.MutableArray",
          "name": "modifyArr",
          "package": "feldspar-language",
          "signature": "Data (MArr a) -\u003e Data Index -\u003e (Data a -\u003e Data a) -\u003e M ()",
          "source": "src/Feldspar-Core-Frontend-MutableArray.html#modifyArr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend MutableArray",
          "module": "Feldspar.Core.Frontend.MutableArray",
          "name": "modifyArr",
          "normalized": "Data(MArr a)-\u003eData Index-\u003e(Data a-\u003eData a)-\u003eM()",
          "package": "feldspar-language",
          "partial": "Arr",
          "signature": "Data(MArr a)-\u003eData Index-\u003e(Data a-\u003eData a)-\u003eM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-MutableArray.html#v:modifyArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.MutableArray",
          "name": "newArr",
          "package": "feldspar-language",
          "signature": "Data Length -\u003e Data a -\u003e M (Data (MArr a))",
          "source": "src/Feldspar-Core-Frontend-MutableArray.html#newArr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend MutableArray",
          "module": "Feldspar.Core.Frontend.MutableArray",
          "name": "newArr",
          "normalized": "Data Length-\u003eData a-\u003eM(Data(MArr a))",
          "package": "feldspar-language",
          "partial": "Arr",
          "signature": "Data Length-\u003eData a-\u003eM(Data(MArr a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-MutableArray.html#v:newArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.MutableArray",
          "name": "newArr_",
          "package": "feldspar-language",
          "signature": "Data Length -\u003e M (Data (MArr a))",
          "source": "src/Feldspar-Core-Frontend-MutableArray.html#newArr_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend MutableArray",
          "module": "Feldspar.Core.Frontend.MutableArray",
          "name": "newArr_",
          "normalized": "Data Length-\u003eM(Data(MArr a))",
          "package": "feldspar-language",
          "partial": "Arr",
          "signature": "Data Length-\u003eM(Data(MArr a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-MutableArray.html#v:newArr_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.MutableArray",
          "name": "newListArr",
          "package": "feldspar-language",
          "signature": "[Data a] -\u003e M (Data (MArr a))",
          "source": "src/Feldspar-Core-Frontend-MutableArray.html#newListArr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend MutableArray",
          "module": "Feldspar.Core.Frontend.MutableArray",
          "name": "newListArr",
          "normalized": "[Data a]-\u003eM(Data(MArr a))",
          "package": "feldspar-language",
          "partial": "List Arr",
          "signature": "[Data a]-\u003eM(Data(MArr a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-MutableArray.html#v:newListArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.MutableArray",
          "name": "setArr",
          "package": "feldspar-language",
          "signature": "Data (MArr a) -\u003e Data Index -\u003e Data a -\u003e M ()",
          "source": "src/Feldspar-Core-Frontend-MutableArray.html#setArr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend MutableArray",
          "module": "Feldspar.Core.Frontend.MutableArray",
          "name": "setArr",
          "normalized": "Data(MArr a)-\u003eData Index-\u003eData a-\u003eM()",
          "package": "feldspar-language",
          "partial": "Arr",
          "signature": "Data(MArr a)-\u003eData Index-\u003eData a-\u003eM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-MutableArray.html#v:setArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.MutableArray",
          "name": "swap",
          "package": "feldspar-language",
          "signature": "Data (MArr (Internal a)) -\u003e Data Index -\u003e Data Index -\u003e M ()",
          "source": "src/Feldspar-Core-Frontend-MutableArray.html#swap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend MutableArray",
          "module": "Feldspar.Core.Frontend.MutableArray",
          "name": "swap",
          "normalized": "Data(MArr(Internal a))-\u003eData Index-\u003eData Index-\u003eM()",
          "package": "feldspar-language",
          "signature": "Data(MArr(Internal a))-\u003eData Index-\u003eData Index-\u003eM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-MutableArray.html#v:swap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.MutableReference",
          "name": "MutableReference",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-MutableReference.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend MutableReference",
          "module": "Feldspar.Core.Frontend.MutableReference",
          "name": "MutableReference",
          "package": "feldspar-language",
          "partial": "Mutable Reference",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-MutableReference.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.MutableReference",
          "name": "Ref",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-MutableReference.html#Ref",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend MutableReference",
          "module": "Feldspar.Core.Frontend.MutableReference",
          "name": "Ref",
          "package": "feldspar-language",
          "partial": "Ref",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-MutableReference.html#t:Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.MutableReference",
          "name": "Ref",
          "package": "feldspar-language",
          "signature": "Ref",
          "source": "src/Feldspar-Core-Frontend-MutableReference.html#Ref",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend MutableReference",
          "module": "Feldspar.Core.Frontend.MutableReference",
          "name": "Ref",
          "package": "feldspar-language",
          "partial": "Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-MutableReference.html#v:Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.MutableReference",
          "name": "getRef",
          "package": "feldspar-language",
          "signature": "Ref a -\u003e M a",
          "source": "src/Feldspar-Core-Frontend-MutableReference.html#getRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend MutableReference",
          "module": "Feldspar.Core.Frontend.MutableReference",
          "name": "getRef",
          "normalized": "Ref a-\u003eM a",
          "package": "feldspar-language",
          "partial": "Ref",
          "signature": "Ref a-\u003eM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-MutableReference.html#v:getRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.MutableReference",
          "name": "modifyRef",
          "package": "feldspar-language",
          "signature": "Ref a -\u003e (a -\u003e a) -\u003e M ()",
          "source": "src/Feldspar-Core-Frontend-MutableReference.html#modifyRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend MutableReference",
          "module": "Feldspar.Core.Frontend.MutableReference",
          "name": "modifyRef",
          "normalized": "Ref a-\u003e(a-\u003ea)-\u003eM()",
          "package": "feldspar-language",
          "partial": "Ref",
          "signature": "Ref a-\u003e(a-\u003ea)-\u003eM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-MutableReference.html#v:modifyRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.MutableReference",
          "name": "newRef",
          "package": "feldspar-language",
          "signature": "a -\u003e M (Ref a)",
          "source": "src/Feldspar-Core-Frontend-MutableReference.html#newRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend MutableReference",
          "module": "Feldspar.Core.Frontend.MutableReference",
          "name": "newRef",
          "normalized": "a-\u003eM(Ref a)",
          "package": "feldspar-language",
          "partial": "Ref",
          "signature": "a-\u003eM(Ref a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-MutableReference.html#v:newRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.MutableReference",
          "name": "setRef",
          "package": "feldspar-language",
          "signature": "Ref a -\u003e a -\u003e M ()",
          "source": "src/Feldspar-Core-Frontend-MutableReference.html#setRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend MutableReference",
          "module": "Feldspar.Core.Frontend.MutableReference",
          "name": "setRef",
          "normalized": "Ref a-\u003ea-\u003eM()",
          "package": "feldspar-language",
          "partial": "Ref",
          "signature": "Ref a-\u003ea-\u003eM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-MutableReference.html#v:setRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.MutableReference",
          "name": "unRef",
          "package": "feldspar-language",
          "signature": "Data (IORef (Internal a))",
          "source": "src/Feldspar-Core-Frontend-MutableReference.html#Ref",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend MutableReference",
          "module": "Feldspar.Core.Frontend.MutableReference",
          "name": "unRef",
          "package": "feldspar-language",
          "partial": "Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-MutableReference.html#v:unRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.MutableToPure",
          "name": "MutableToPure",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-MutableToPure.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend MutableToPure",
          "module": "Feldspar.Core.Frontend.MutableToPure",
          "name": "MutableToPure",
          "package": "feldspar-language",
          "partial": "Mutable To Pure",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-MutableToPure.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.MutableToPure",
          "name": "freezeArray",
          "package": "feldspar-language",
          "signature": "Data (MArr a) -\u003e M (Data [a])",
          "source": "src/Feldspar-Core-Frontend-MutableToPure.html#freezeArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend MutableToPure",
          "module": "Feldspar.Core.Frontend.MutableToPure",
          "name": "freezeArray",
          "normalized": "Data(MArr a)-\u003eM(Data[a])",
          "package": "feldspar-language",
          "partial": "Array",
          "signature": "Data(MArr a)-\u003eM(Data[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-MutableToPure.html#v:freezeArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.MutableToPure",
          "name": "runMutableArray",
          "package": "feldspar-language",
          "signature": "M (Data (MArr a)) -\u003e Data [a]",
          "source": "src/Feldspar-Core-Frontend-MutableToPure.html#runMutableArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend MutableToPure",
          "module": "Feldspar.Core.Frontend.MutableToPure",
          "name": "runMutableArray",
          "normalized": "M(Data(MArr a))-\u003eData[a]",
          "package": "feldspar-language",
          "partial": "Mutable Array",
          "signature": "M(Data(MArr a))-\u003eData[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-MutableToPure.html#v:runMutableArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.MutableToPure",
          "name": "thawArray",
          "package": "feldspar-language",
          "signature": "Data [a] -\u003e M (Data (MArr a))",
          "source": "src/Feldspar-Core-Frontend-MutableToPure.html#thawArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend MutableToPure",
          "module": "Feldspar.Core.Frontend.MutableToPure",
          "name": "thawArray",
          "normalized": "Data[a]-\u003eM(Data(MArr a))",
          "package": "feldspar-language",
          "partial": "Array",
          "signature": "Data[a]-\u003eM(Data(MArr a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-MutableToPure.html#v:thawArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.MutableToPure",
          "name": "withArray",
          "package": "feldspar-language",
          "signature": "Data (MArr a) -\u003e (Data [a] -\u003e M b) -\u003e M b",
          "source": "src/Feldspar-Core-Frontend-MutableToPure.html#withArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend MutableToPure",
          "module": "Feldspar.Core.Frontend.MutableToPure",
          "name": "withArray",
          "normalized": "Data(MArr a)-\u003e(Data[a]-\u003eM b)-\u003eM b",
          "package": "feldspar-language",
          "partial": "Array",
          "signature": "Data(MArr a)-\u003e(Data[a]-\u003eM b)-\u003eM b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-MutableToPure.html#v:withArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.NoInline",
          "name": "NoInline",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-NoInline.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend NoInline",
          "module": "Feldspar.Core.Frontend.NoInline",
          "name": "NoInline",
          "package": "feldspar-language",
          "partial": "No Inline",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-NoInline.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.NoInline",
          "name": "noInline",
          "package": "feldspar-language",
          "signature": "a -\u003e a",
          "source": "src/Feldspar-Core-Frontend-NoInline.html#noInline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend NoInline",
          "module": "Feldspar.Core.Frontend.NoInline",
          "name": "noInline",
          "normalized": "a-\u003ea",
          "package": "feldspar-language",
          "partial": "Inline",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-NoInline.html#v:noInline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Num",
          "name": "Num",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Num.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Num",
          "module": "Feldspar.Core.Frontend.Num",
          "name": "Num",
          "package": "feldspar-language",
          "partial": "Num",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Num.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Num",
          "name": "Numeric",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Num.html#Numeric",
          "type": "class"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Num",
          "module": "Feldspar.Core.Frontend.Num",
          "name": "Numeric",
          "package": "feldspar-language",
          "partial": "Numeric",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Num.html#t:Numeric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Num",
          "name": "absNum",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Num.html#absNum",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Num",
          "module": "Feldspar.Core.Frontend.Num",
          "name": "absNum",
          "normalized": "Data a-\u003eData a",
          "package": "feldspar-language",
          "partial": "Num",
          "signature": "Data a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Num.html#v:absNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Num",
          "name": "addNum",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Num.html#addNum",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Num",
          "module": "Feldspar.Core.Frontend.Num",
          "name": "addNum",
          "normalized": "Data a-\u003eData a-\u003eData a",
          "package": "feldspar-language",
          "partial": "Num",
          "signature": "Data a-\u003eData a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Num.html#v:addNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Num",
          "name": "fromIntegerNum",
          "package": "feldspar-language",
          "signature": "Integer -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Num.html#fromIntegerNum",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Num",
          "module": "Feldspar.Core.Frontend.Num",
          "name": "fromIntegerNum",
          "normalized": "Integer-\u003eData a",
          "package": "feldspar-language",
          "partial": "Integer Num",
          "signature": "Integer-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Num.html#v:fromIntegerNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Num",
          "name": "mulNum",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Num.html#mulNum",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Num",
          "module": "Feldspar.Core.Frontend.Num",
          "name": "mulNum",
          "normalized": "Data a-\u003eData a-\u003eData a",
          "package": "feldspar-language",
          "partial": "Num",
          "signature": "Data a-\u003eData a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Num.html#v:mulNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Num",
          "name": "signumNum",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Num.html#signumNum",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Num",
          "module": "Feldspar.Core.Frontend.Num",
          "name": "signumNum",
          "normalized": "Data a-\u003eData a",
          "package": "feldspar-language",
          "partial": "Num",
          "signature": "Data a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Num.html#v:signumNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Num",
          "name": "subNum",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Num.html#subNum",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Num",
          "module": "Feldspar.Core.Frontend.Num",
          "name": "subNum",
          "normalized": "Data a-\u003eData a-\u003eData a",
          "package": "feldspar-language",
          "partial": "Num",
          "signature": "Data a-\u003eData a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Num.html#v:subNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Ord",
          "name": "Ord",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Ord.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Ord",
          "module": "Feldspar.Core.Frontend.Ord",
          "name": "Ord",
          "package": "feldspar-language",
          "partial": "Ord",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Ord.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedefinition of the standard \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class for Feldspar\n\u003c/p\u003e",
          "module": "Feldspar.Core.Frontend.Ord",
          "name": "Ord",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Ord.html#Ord",
          "type": "class"
        },
        "index": {
          "description": "Redefinition of the standard Ord class for Feldspar",
          "hierarchy": "Feldspar Core Frontend Ord",
          "module": "Feldspar.Core.Frontend.Ord",
          "name": "Ord",
          "package": "feldspar-language",
          "partial": "Ord",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Ord.html#t:Ord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Ord",
          "name": "(\u003c)",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a -\u003e Data Bool",
          "source": "src/Feldspar-Core-Frontend-Ord.html#%3C",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Ord",
          "module": "Feldspar.Core.Frontend.Ord",
          "name": "(\u003c) \u003c",
          "normalized": "Data a-\u003eData a-\u003eData Bool",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a-\u003eData Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Ord.html#v:-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Ord",
          "name": "(\u003c=)",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a -\u003e Data Bool",
          "source": "src/Feldspar-Core-Frontend-Ord.html#%3C%3D",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Ord",
          "module": "Feldspar.Core.Frontend.Ord",
          "name": "(\u003c=) \u003c=",
          "normalized": "Data a-\u003eData a-\u003eData Bool",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a-\u003eData Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Ord.html#v:-60--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Ord",
          "name": "(\u003e)",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a -\u003e Data Bool",
          "source": "src/Feldspar-Core-Frontend-Ord.html#%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Ord",
          "module": "Feldspar.Core.Frontend.Ord",
          "name": "(\u003e) \u003e",
          "normalized": "Data a-\u003eData a-\u003eData Bool",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a-\u003eData Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Ord.html#v:-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Ord",
          "name": "(\u003e=)",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a -\u003e Data Bool",
          "source": "src/Feldspar-Core-Frontend-Ord.html#%3E%3D",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Ord",
          "module": "Feldspar.Core.Frontend.Ord",
          "name": "(\u003e=) \u003e=",
          "normalized": "Data a-\u003eData a-\u003eData Bool",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a-\u003eData Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Ord.html#v:-62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Ord",
          "name": "max",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Ord.html#max",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Ord",
          "module": "Feldspar.Core.Frontend.Ord",
          "name": "max",
          "normalized": "Data a-\u003eData a-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Ord.html#v:max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Ord",
          "name": "min",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Ord.html#min",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Ord",
          "module": "Feldspar.Core.Frontend.Ord",
          "name": "min",
          "normalized": "Data a-\u003eData a-\u003eData a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a-\u003eData a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Ord.html#v:min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Par",
          "name": "Par",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Par.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Par",
          "module": "Feldspar.Core.Frontend.Par",
          "name": "Par",
          "package": "feldspar-language",
          "partial": "Par",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Par.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Par",
          "name": "IVar",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Par.html#IVar",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Par",
          "module": "Feldspar.Core.Frontend.Par",
          "name": "IVar",
          "package": "feldspar-language",
          "partial": "IVar",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Par.html#t:IVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Par",
          "name": "P",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Par.html#P",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Par",
          "module": "Feldspar.Core.Frontend.Par",
          "name": "P",
          "package": "feldspar-language",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Par.html#t:P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Par",
          "name": "IVar",
          "package": "feldspar-language",
          "signature": "IVar",
          "source": "src/Feldspar-Core-Frontend-Par.html#IVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Par",
          "module": "Feldspar.Core.Frontend.Par",
          "name": "IVar",
          "package": "feldspar-language",
          "partial": "IVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Par.html#v:IVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Par",
          "name": "P",
          "package": "feldspar-language",
          "signature": "P",
          "source": "src/Feldspar-Core-Frontend-Par.html#P",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Par",
          "module": "Feldspar.Core.Frontend.Par",
          "name": "P",
          "package": "feldspar-language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Par.html#v:P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Par",
          "name": "unIVar",
          "package": "feldspar-language",
          "signature": "Data (IV (Internal a))",
          "source": "src/Feldspar-Core-Frontend-Par.html#IVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Par",
          "module": "Feldspar.Core.Frontend.Par",
          "name": "unIVar",
          "package": "feldspar-language",
          "partial": "IVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Par.html#v:unIVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Par",
          "name": "unP",
          "package": "feldspar-language",
          "signature": "Mon FeldSymbols Type Par a",
          "source": "src/Feldspar-Core-Frontend-Par.html#P",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Par",
          "module": "Feldspar.Core.Frontend.Par",
          "name": "unP",
          "package": "feldspar-language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Par.html#v:unP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTracing execution of Feldspar expressions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Feldspar.Core.Frontend.Save",
          "name": "Save",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Save.html",
          "type": "module"
        },
        "index": {
          "description": "Tracing execution of Feldspar expressions",
          "hierarchy": "Feldspar Core Frontend Save",
          "module": "Feldspar.Core.Frontend.Save",
          "name": "Save",
          "package": "feldspar-language",
          "partial": "Save",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Save.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003esave\u003c/a\u003e\u003c/code\u003e. When applied to a lazy data structure, \u003ccode\u003e\u003ca\u003eforce\u003c/a\u003e\u003c/code\u003e (and\n \u003ccode\u003e\u003ca\u003esave\u003c/a\u003e\u003c/code\u003e) has the effect of forcing evaluation of the whole structure.\n\u003c/p\u003e",
          "module": "Feldspar.Core.Frontend.Save",
          "name": "force",
          "package": "feldspar-language",
          "signature": "a -\u003e a",
          "source": "src/Feldspar-Core-Frontend-Save.html#force",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to save When applied to lazy data structure force and save has the effect of forcing evaluation of the whole structure",
          "hierarchy": "Feldspar Core Frontend Save",
          "module": "Feldspar.Core.Frontend.Save",
          "name": "force",
          "normalized": "a-\u003ea",
          "package": "feldspar-language",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Save.html#v:force"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn identity function that guarantees that the result will be computed as a\n sub-result of the whole program. This is useful to prevent certain\n optimizations.\n\u003c/p\u003e\u003cp\u003eException: Currently constant folding does not respect \u003ccode\u003e\u003ca\u003esave\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Core.Frontend.Save",
          "name": "save",
          "package": "feldspar-language",
          "signature": "a -\u003e a",
          "source": "src/Feldspar-Core-Frontend-Save.html#save",
          "type": "function"
        },
        "index": {
          "description": "An identity function that guarantees that the result will be computed as sub-result of the whole program This is useful to prevent certain optimizations Exception Currently constant folding does not respect save",
          "hierarchy": "Feldspar Core Frontend Save",
          "module": "Feldspar.Core.Frontend.Save",
          "name": "save",
          "normalized": "a-\u003ea",
          "package": "feldspar-language",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Save.html#v:save"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Select",
          "name": "Select",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Select.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Select",
          "module": "Feldspar.Core.Frontend.Select",
          "name": "Select",
          "package": "feldspar-language",
          "partial": "Select",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Select.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect between the cases based on the value of the scrutinee.\n TODO: This implementation should be replaces by a proper construct\n\u003c/p\u003e",
          "module": "Feldspar.Core.Frontend.Select",
          "name": "select",
          "package": "feldspar-language",
          "signature": "Data a -\u003e [(Data a, b)] -\u003e b -\u003e b",
          "source": "src/Feldspar-Core-Frontend-Select.html#select",
          "type": "function"
        },
        "index": {
          "description": "Select between the cases based on the value of the scrutinee TODO This implementation should be replaces by proper construct",
          "hierarchy": "Feldspar Core Frontend Select",
          "module": "Feldspar.Core.Frontend.Select",
          "name": "select",
          "normalized": "Data a-\u003e[(Data a,b)]-\u003eb-\u003eb",
          "package": "feldspar-language",
          "signature": "Data a-\u003e[(Data a,b)]-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Select.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe functions in this module can be used to help size inference (which, in\n turn, helps deriving upper bounds of array sizes and helps optimization).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Feldspar.Core.Frontend.SizeProp",
          "name": "SizeProp",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-SizeProp.html",
          "type": "module"
        },
        "index": {
          "description": "The functions in this module can be used to help size inference which in turn helps deriving upper bounds of array sizes and helps optimization",
          "hierarchy": "Feldspar Core Frontend SizeProp",
          "module": "Feldspar.Core.Frontend.SizeProp",
          "name": "SizeProp",
          "package": "feldspar-language",
          "partial": "Size Prop",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-SizeProp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn identity function affecting the abstract size information used during\n optimization. The application of a \u003ccode\u003e\u003ca\u003eSizeCap\u003c/a\u003e\u003c/code\u003e is a \u003cem\u003eguarantee\u003c/em\u003e (by the caller)\n that the argument is within a certain size (determined by the creator of the\n \u003ccode\u003e\u003ca\u003eSizeCap\u003c/a\u003e\u003c/code\u003e, e.g. \u003ccode\u003e\u003ca\u003esizeProp\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWarning: If the guarantee is not fulfilled, optimizations become unsound!\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eIn general, the size of the resulting value is the intersection of the cap\n size and the size obtained by ordinary size inference. That is, a \u003ccode\u003e\u003ca\u003eSizeCap\u003c/a\u003e\u003c/code\u003e\n can only make the size more precise, not less precise.\n\u003c/p\u003e",
          "module": "Feldspar.Core.Frontend.SizeProp",
          "name": "SizeCap",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-SizeProp.html#SizeCap",
          "type": "type"
        },
        "index": {
          "description": "An identity function affecting the abstract size information used during optimization The application of SizeCap is guarantee by the caller that the argument is within certain size determined by the creator of the SizeCap e.g sizeProp Warning If the guarantee is not fulfilled optimizations become unsound In general the size of the resulting value is the intersection of the cap size and the size obtained by ordinary size inference That is SizeCap can only make the size more precise not less precise",
          "hierarchy": "Feldspar Core Frontend SizeProp",
          "module": "Feldspar.Core.Frontend.SizeProp",
          "name": "SizeCap",
          "package": "feldspar-language",
          "partial": "Size Cap",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-SizeProp.html#t:SizeCap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebetween l u a\u003c/code\u003e: A guarantee that \u003ccode\u003el \u003c= a \u003c= u\u003c/code\u003e holds\n\u003c/p\u003e",
          "module": "Feldspar.Core.Frontend.SizeProp",
          "name": "between",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a -\u003e SizeCap a",
          "source": "src/Feldspar-Core-Frontend-SizeProp.html#between",
          "type": "function"
        },
        "index": {
          "description": "between guarantee that holds",
          "hierarchy": "Feldspar Core Frontend SizeProp",
          "module": "Feldspar.Core.Frontend.SizeProp",
          "name": "between",
          "normalized": "Data a-\u003eData a-\u003eSizeCap a",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a-\u003eSizeCap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-SizeProp.html#v:between"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA guarantee that the argument is within the given size\n\u003c/p\u003e",
          "module": "Feldspar.Core.Frontend.SizeProp",
          "name": "cap",
          "package": "feldspar-language",
          "signature": "Size a -\u003e SizeCap a",
          "source": "src/Feldspar-Core-Frontend-SizeProp.html#cap",
          "type": "function"
        },
        "index": {
          "description": "guarantee that the argument is within the given size",
          "hierarchy": "Feldspar Core Frontend SizeProp",
          "module": "Feldspar.Core.Frontend.SizeProp",
          "name": "cap",
          "normalized": "Size a-\u003eSizeCap a",
          "package": "feldspar-language",
          "signature": "Size a-\u003eSizeCap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-SizeProp.html#v:cap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enotAbove a b\u003c/code\u003e: A guarantee that \u003ccode\u003eb \u003c= a\u003c/code\u003e holds\n\u003c/p\u003e",
          "module": "Feldspar.Core.Frontend.SizeProp",
          "name": "notAbove",
          "package": "feldspar-language",
          "signature": "Data a -\u003e SizeCap a",
          "source": "src/Feldspar-Core-Frontend-SizeProp.html#notAbove",
          "type": "function"
        },
        "index": {
          "description": "notAbove guarantee that holds",
          "hierarchy": "Feldspar Core Frontend SizeProp",
          "module": "Feldspar.Core.Frontend.SizeProp",
          "name": "notAbove",
          "normalized": "Data a-\u003eSizeCap a",
          "package": "feldspar-language",
          "partial": "Above",
          "signature": "Data a-\u003eSizeCap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-SizeProp.html#v:notAbove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enotBelow a b\u003c/code\u003e: A guarantee that \u003ccode\u003eb \u003e= a\u003c/code\u003e holds\n\u003c/p\u003e",
          "module": "Feldspar.Core.Frontend.SizeProp",
          "name": "notBelow",
          "package": "feldspar-language",
          "signature": "Data a -\u003e SizeCap a",
          "source": "src/Feldspar-Core-Frontend-SizeProp.html#notBelow",
          "type": "function"
        },
        "index": {
          "description": "notBelow guarantee that holds",
          "hierarchy": "Feldspar Core Frontend SizeProp",
          "module": "Feldspar.Core.Frontend.SizeProp",
          "name": "notBelow",
          "normalized": "Data a-\u003eSizeCap a",
          "package": "feldspar-language",
          "partial": "Below",
          "signature": "Data a-\u003eSizeCap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-SizeProp.html#v:notBelow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esizeProp prop a b\u003c/code\u003e: A guarantee that \u003ccode\u003eb\u003c/code\u003e is within the size \u003ccode\u003e(prop sa)\u003c/code\u003e,\n where \u003ccode\u003esa\u003c/code\u003e is the size of \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Core.Frontend.SizeProp",
          "name": "sizeProp",
          "package": "feldspar-language",
          "signature": "(Size (Internal a) -\u003e Size b) -\u003e a -\u003e SizeCap b",
          "source": "src/Feldspar-Core-Frontend-SizeProp.html#sizeProp",
          "type": "function"
        },
        "index": {
          "description": "sizeProp prop guarantee that is within the size prop sa where sa is the size of",
          "hierarchy": "Feldspar Core Frontend SizeProp",
          "module": "Feldspar.Core.Frontend.SizeProp",
          "name": "sizeProp",
          "normalized": "(Size(Internal a)-\u003eSize b)-\u003ea-\u003eSizeCap b",
          "package": "feldspar-language",
          "partial": "Prop",
          "signature": "(Size(Internal a)-\u003eSize b)-\u003ea-\u003eSizeCap b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-SizeProp.html#v:sizeProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSource-code annotations\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Feldspar.Core.Frontend.SourceInfo",
          "name": "SourceInfo",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-SourceInfo.html",
          "type": "module"
        },
        "index": {
          "description": "Source-code annotations",
          "hierarchy": "Feldspar Core Frontend SourceInfo",
          "module": "Feldspar.Core.Frontend.SourceInfo",
          "name": "SourceInfo",
          "package": "feldspar-language",
          "partial": "Source Info",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-SourceInfo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnnotate an expression with information about its source code\n\u003c/p\u003e",
          "module": "Feldspar.Core.Frontend.SourceInfo",
          "name": "sourceData",
          "package": "feldspar-language",
          "signature": "SourceInfo1 a -\u003e Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-SourceInfo.html#sourceData",
          "type": "function"
        },
        "index": {
          "description": "Annotate an expression with information about its source code",
          "hierarchy": "Feldspar Core Frontend SourceInfo",
          "module": "Feldspar.Core.Frontend.SourceInfo",
          "name": "sourceData",
          "normalized": "SourceInfo a-\u003eData a-\u003eData a",
          "package": "feldspar-language",
          "partial": "Data",
          "signature": "SourceInfo a-\u003eData a-\u003eData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-SourceInfo.html#v:sourceData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTracing execution of Feldspar expressions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Feldspar.Core.Frontend.Trace",
          "name": "Trace",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Trace.html",
          "type": "module"
        },
        "index": {
          "description": "Tracing execution of Feldspar expressions",
          "hierarchy": "Feldspar Core Frontend Trace",
          "module": "Feldspar.Core.Frontend.Trace",
          "name": "Trace",
          "package": "feldspar-language",
          "partial": "Trace",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Trace.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTracing execution of an expression. Semantically, this is the identity\n function, but a back end may treat this function specially, for example write\n its arguments to a log.\n\u003c/p\u003e",
          "module": "Feldspar.Core.Frontend.Trace",
          "name": "trace",
          "package": "feldspar-language",
          "signature": "Int -\u003e Data a -\u003e Data a",
          "source": "src/Feldspar-Core-Frontend-Trace.html#trace",
          "type": "function"
        },
        "index": {
          "description": "Tracing execution of an expression Semantically this is the identity function but back end may treat this function specially for example write its arguments to log",
          "hierarchy": "Feldspar Core Frontend Trace",
          "module": "Feldspar.Core.Frontend.Trace",
          "name": "trace",
          "normalized": "Int-\u003eData a-\u003eData a",
          "package": "feldspar-language",
          "signature": "Int-\u003eData a-\u003eData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Trace.html#v:trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend.Tuple",
          "name": "Tuple",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Tuple.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend Tuple",
          "module": "Feldspar.Core.Frontend.Tuple",
          "name": "Tuple",
          "package": "feldspar-language",
          "partial": "Tuple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend-Tuple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend",
          "name": "Frontend",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend",
          "module": "Feldspar.Core.Frontend",
          "name": "Frontend",
          "package": "feldspar-language",
          "partial": "Frontend",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend",
          "name": "Data",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs.html#Data",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend",
          "module": "Feldspar.Core.Frontend",
          "name": "Data",
          "package": "feldspar-language",
          "partial": "Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend.html#t:Data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend",
          "name": "FeldDomainAll",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs.html#FeldDomainAll",
          "type": "type"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend",
          "module": "Feldspar.Core.Frontend",
          "name": "FeldDomainAll",
          "package": "feldspar-language",
          "partial": "Feld Domain All",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend.html#t:FeldDomainAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend",
          "name": "Internal",
          "package": "feldspar-language",
          "signature": "Internal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend",
          "module": "Feldspar.Core.Frontend",
          "name": "Internal",
          "package": "feldspar-language",
          "partial": "Internal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend.html#t:Internal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt is usually assumed that \u003ccode\u003e(\u003ccode\u003e\u003ca\u003edesugar\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003esugar\u003c/a\u003e\u003c/code\u003e a))\u003c/code\u003e has the same meaning\n as \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Core.Frontend",
          "name": "Syntactic",
          "package": "feldspar-language",
          "type": "class"
        },
        "index": {
          "description": "It is usually assumed that desugar sugar has the same meaning as",
          "hierarchy": "Feldspar Core Frontend",
          "module": "Feldspar.Core.Frontend",
          "name": "Syntactic",
          "package": "feldspar-language",
          "partial": "Syntactic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend.html#t:Syntactic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend",
          "name": "SyntacticFeld",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend.html#SyntacticFeld",
          "type": "type"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend",
          "module": "Feldspar.Core.Frontend",
          "name": "SyntacticFeld",
          "package": "feldspar-language",
          "partial": "Syntactic Feld",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend.html#t:SyntacticFeld"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialization of the \u003ccode\u003e\u003ca\u003eSyntactic\u003c/a\u003e\u003c/code\u003e class for the Feldspar domain\n\u003c/p\u003e",
          "module": "Feldspar.Core.Frontend",
          "name": "Syntax",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Constructs.html#Syntax",
          "type": "class"
        },
        "index": {
          "description": "Specialization of the Syntactic class for the Feldspar domain",
          "hierarchy": "Feldspar Core Frontend",
          "module": "Feldspar.Core.Frontend",
          "name": "Syntax",
          "package": "feldspar-language",
          "partial": "Syntax",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend.html#t:Syntax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend",
          "name": "(===)",
          "package": "feldspar-language",
          "signature": "a -\u003e a -\u003e Property",
          "source": "src/Feldspar-Core-Frontend.html#%3D%3D%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend",
          "module": "Feldspar.Core.Frontend",
          "name": "(===) ===",
          "normalized": "a-\u003ea-\u003eProperty",
          "package": "feldspar-language",
          "signature": "a-\u003ea-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend.html#v:-61--61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend",
          "name": "(===\u003e)",
          "package": "feldspar-language",
          "signature": "Data Bool -\u003e prop -\u003e Property",
          "source": "src/Feldspar-Core-Frontend.html#%3D%3D%3D%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend",
          "module": "Feldspar.Core.Frontend",
          "name": "(===\u003e) ===\u003e",
          "normalized": "Data Bool-\u003ea-\u003eProperty",
          "package": "feldspar-language",
          "signature": "Data Bool-\u003eprop-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend.html#v:-61--61--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend",
          "name": "desugar",
          "package": "feldspar-language",
          "signature": "a -\u003e Data (Internal a)",
          "source": "src/Feldspar-Core-Frontend.html#desugar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend",
          "module": "Feldspar.Core.Frontend",
          "name": "desugar",
          "normalized": "a-\u003eData(Internal a)",
          "package": "feldspar-language",
          "signature": "a-\u003eData(Internal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend.html#v:desugar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend",
          "name": "drawAST",
          "package": "feldspar-language",
          "signature": "a -\u003e IO ()",
          "source": "src/Feldspar-Core-Frontend.html#drawAST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend",
          "module": "Feldspar.Core.Frontend",
          "name": "drawAST",
          "normalized": "a-\u003eIO()",
          "package": "feldspar-language",
          "partial": "AST",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend.html#v:drawAST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a syntax tree decorated with type and size information\n\u003c/p\u003e",
          "module": "Feldspar.Core.Frontend",
          "name": "drawDecor",
          "package": "feldspar-language",
          "signature": "a -\u003e IO ()",
          "source": "src/Feldspar-Core-Frontend.html#drawDecor",
          "type": "function"
        },
        "index": {
          "description": "Draw syntax tree decorated with type and size information",
          "hierarchy": "Feldspar Core Frontend",
          "module": "Feldspar.Core.Frontend",
          "name": "drawDecor",
          "normalized": "a-\u003eIO()",
          "package": "feldspar-language",
          "partial": "Decor",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend.html#v:drawDecor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend",
          "name": "eval",
          "package": "feldspar-language",
          "signature": "a -\u003e Internal a",
          "source": "src/Feldspar-Core-Frontend.html#eval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend",
          "module": "Feldspar.Core.Frontend",
          "name": "eval",
          "normalized": "a-\u003eInternal a",
          "package": "feldspar-language",
          "signature": "a-\u003eInternal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend",
          "name": "evalTarget",
          "package": "feldspar-language",
          "signature": "BitWidth n -\u003e a -\u003e Internal a",
          "source": "src/Feldspar-Core-Frontend.html#evalTarget",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend",
          "module": "Feldspar.Core.Frontend",
          "name": "evalTarget",
          "normalized": "BitWidth a-\u003eb-\u003eInternal b",
          "package": "feldspar-language",
          "partial": "Target",
          "signature": "BitWidth n-\u003ea-\u003eInternal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend.html#v:evalTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteger logarithm in base 2\n   Based on an algorithm in Hacker's Delight\n\u003c/p\u003e",
          "module": "Feldspar.Core.Frontend",
          "name": "ilog2",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data Index",
          "source": "src/Feldspar-Core-Frontend.html#ilog2",
          "type": "function"
        },
        "index": {
          "description": "Integer logarithm in base Based on an algorithm in Hacker Delight",
          "hierarchy": "Feldspar Core Frontend",
          "module": "Feldspar.Core.Frontend",
          "name": "ilog2",
          "normalized": "Data a-\u003eData Index",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend.html#v:ilog2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount leading zeros\n   Based on an algorithm in Hacker's Delight\n\u003c/p\u003e",
          "module": "Feldspar.Core.Frontend",
          "name": "nlz",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data Index",
          "source": "src/Feldspar-Core-Frontend.html#nlz",
          "type": "function"
        },
        "index": {
          "description": "Count leading zeros Based on an algorithm in Hacker Delight",
          "hierarchy": "Feldspar Core Frontend",
          "module": "Feldspar.Core.Frontend",
          "name": "nlz",
          "normalized": "Data a-\u003eData Index",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend.html#v:nlz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend",
          "name": "printExpr",
          "package": "feldspar-language",
          "signature": "a -\u003e IO ()",
          "source": "src/Feldspar-Core-Frontend.html#printExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend",
          "module": "Feldspar.Core.Frontend",
          "name": "printExpr",
          "normalized": "a-\u003eIO()",
          "package": "feldspar-language",
          "partial": "Expr",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend.html#v:printExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReification and optimization of a Feldspar program\n\u003c/p\u003e",
          "module": "Feldspar.Core.Frontend",
          "name": "reifyFeld",
          "package": "feldspar-language",
          "signature": "BitWidth n -\u003e a -\u003e ASTF (Decor Info FeldDomain) (Internal a)",
          "source": "src/Feldspar-Core-Frontend.html#reifyFeld",
          "type": "function"
        },
        "index": {
          "description": "Reification and optimization of Feldspar program",
          "hierarchy": "Feldspar Core Frontend",
          "module": "Feldspar.Core.Frontend",
          "name": "reifyFeld",
          "normalized": "BitWidth a-\u003eb-\u003eASTF(Decor Info FeldDomain)(Internal b)",
          "package": "feldspar-language",
          "partial": "Feld",
          "signature": "BitWidth n-\u003ea-\u003eASTF(Decor Info FeldDomain)(Internal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend.html#v:reifyFeld"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend",
          "name": "resugar",
          "package": "feldspar-language",
          "signature": "a -\u003e b",
          "source": "src/Feldspar-Core-Frontend.html#resugar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend",
          "module": "Feldspar.Core.Frontend",
          "name": "resugar",
          "normalized": "a-\u003eb",
          "package": "feldspar-language",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend.html#v:resugar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend",
          "name": "showAST",
          "package": "feldspar-language",
          "signature": "a -\u003e String",
          "source": "src/Feldspar-Core-Frontend.html#showAST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend",
          "module": "Feldspar.Core.Frontend",
          "name": "showAST",
          "normalized": "a-\u003eString",
          "package": "feldspar-language",
          "partial": "AST",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend.html#v:showAST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a syntax tree decorated with type and size information\n\u003c/p\u003e",
          "module": "Feldspar.Core.Frontend",
          "name": "showDecor",
          "package": "feldspar-language",
          "signature": "a -\u003e String",
          "source": "src/Feldspar-Core-Frontend.html#showDecor",
          "type": "function"
        },
        "index": {
          "description": "Draw syntax tree decorated with type and size information",
          "hierarchy": "Feldspar Core Frontend",
          "module": "Feldspar.Core.Frontend",
          "name": "showDecor",
          "normalized": "a-\u003eString",
          "package": "feldspar-language",
          "partial": "Decor",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend.html#v:showDecor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend",
          "name": "showExpr",
          "package": "feldspar-language",
          "signature": "a -\u003e String",
          "source": "src/Feldspar-Core-Frontend.html#showExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend",
          "module": "Feldspar.Core.Frontend",
          "name": "showExpr",
          "normalized": "a-\u003eString",
          "package": "feldspar-language",
          "partial": "Expr",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend.html#v:showExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend",
          "name": "sugar",
          "package": "feldspar-language",
          "signature": "Data (Internal a) -\u003e a",
          "source": "src/Feldspar-Core-Frontend.html#sugar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend",
          "module": "Feldspar.Core.Frontend",
          "name": "sugar",
          "normalized": "Data(Internal a)-\u003ea",
          "package": "feldspar-language",
          "signature": "Data(Internal a)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend.html#v:sugar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend",
          "name": "tArr1",
          "package": "feldspar-language",
          "signature": "Patch a a -\u003e Patch (Data [a]) (Data [a])",
          "source": "src/Feldspar-Core-Frontend.html#tArr1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend",
          "module": "Feldspar.Core.Frontend",
          "name": "tArr1",
          "normalized": "Patch a a-\u003ePatch(Data[a])(Data[a])",
          "package": "feldspar-language",
          "partial": "Arr",
          "signature": "Patch a a-\u003ePatch(Data[a])(Data[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend.html#v:tArr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend",
          "name": "tArr2",
          "package": "feldspar-language",
          "signature": "Patch a a -\u003e Patch (Data [[a]]) (Data [[a]])",
          "source": "src/Feldspar-Core-Frontend.html#tArr2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend",
          "module": "Feldspar.Core.Frontend",
          "name": "tArr2",
          "normalized": "Patch a a-\u003ePatch(Data[[a]])(Data[[a]])",
          "package": "feldspar-language",
          "partial": "Arr",
          "signature": "Patch a a-\u003ePatch(Data[[a]])(Data[[a]])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend.html#v:tArr2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend",
          "name": "tData",
          "package": "feldspar-language",
          "signature": "Patch a a -\u003e Patch (Data a) (Data a)",
          "source": "src/Feldspar-Core-Frontend.html#tData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend",
          "module": "Feldspar.Core.Frontend",
          "name": "tData",
          "normalized": "Patch a a-\u003ePatch(Data a)(Data a)",
          "package": "feldspar-language",
          "partial": "Data",
          "signature": "Patch a a-\u003ePatch(Data a)(Data a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend.html#v:tData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Frontend",
          "name": "tM",
          "package": "feldspar-language",
          "signature": "Patch a a -\u003e Patch (M a) (M a)",
          "source": "src/Feldspar-Core-Frontend.html#tM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Frontend",
          "module": "Feldspar.Core.Frontend",
          "name": "tM",
          "normalized": "Patch a a-\u003ePatch(M a)(M a)",
          "package": "feldspar-language",
          "signature": "Patch a a-\u003ePatch(M a)(M a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Frontend.html#v:tM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWitness \u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003e constraints\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Feldspar.Core.Interpretation.Typed",
          "name": "Typed",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Interpretation-Typed.html",
          "type": "module"
        },
        "index": {
          "description": "Witness Type constraints",
          "hierarchy": "Feldspar Core Interpretation Typed",
          "module": "Feldspar.Core.Interpretation.Typed",
          "name": "Typed",
          "package": "feldspar-language",
          "partial": "Typed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation-Typed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass representing a possible dictionary to witness a \u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003e\n constraint.\n\u003c/p\u003e",
          "module": "Feldspar.Core.Interpretation.Typed",
          "name": "Typed",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Interpretation-Typed.html#Typed",
          "type": "class"
        },
        "index": {
          "description": "Class representing possible dictionary to witness Type constraint",
          "hierarchy": "Feldspar Core Interpretation Typed",
          "module": "Feldspar.Core.Interpretation.Typed",
          "name": "Typed",
          "package": "feldspar-language",
          "partial": "Typed",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation-Typed.html#t:Typed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a possible \u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003e constraint witness from an \u003ccode\u003e\u003ca\u003eAST\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Core.Interpretation.Typed",
          "name": "typeDict",
          "package": "feldspar-language",
          "signature": "ASTF dom a -\u003e Maybe (Dict (Type a))",
          "source": "src/Feldspar-Core-Interpretation-Typed.html#typeDict",
          "type": "function"
        },
        "index": {
          "description": "Extract possible Type constraint witness from an AST",
          "hierarchy": "Feldspar Core Interpretation Typed",
          "module": "Feldspar.Core.Interpretation.Typed",
          "name": "typeDict",
          "normalized": "ASTF a b-\u003eMaybe(Dict(Type b))",
          "package": "feldspar-language",
          "partial": "Dict",
          "signature": "ASTF dom a-\u003eMaybe(Dict(Type a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation-Typed.html#v:typeDict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Interpretation.Typed",
          "name": "typeDictSym",
          "package": "feldspar-language",
          "signature": "dom a -\u003e Maybe (Dict (Type (DenResult a)))",
          "source": "src/Feldspar-Core-Interpretation-Typed.html#typeDictSym",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Interpretation Typed",
          "module": "Feldspar.Core.Interpretation.Typed",
          "name": "typeDictSym",
          "normalized": "a b-\u003eMaybe(Dict(Type(DenResult b)))",
          "package": "feldspar-language",
          "partial": "Dict Sym",
          "signature": "dom a-\u003eMaybe(Dict(Type(DenResult a)))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation-Typed.html#v:typeDictSym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines different interpretations of Feldspar programs\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Feldspar.Core.Interpretation",
          "name": "Interpretation",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Interpretation.html",
          "type": "module"
        },
        "index": {
          "description": "Defines different interpretations of Feldspar programs",
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "Interpretation",
          "package": "feldspar-language",
          "partial": "Interpretation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Interpretation",
          "name": "Env",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Interpretation.html#Env",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "Env",
          "package": "feldspar-language",
          "partial": "Env",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#t:Env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType and size information of a Feldspar program\n\u003c/p\u003e",
          "module": "Feldspar.Core.Interpretation",
          "name": "Info",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Interpretation.html#Info",
          "type": "data"
        },
        "index": {
          "description": "Type and size information of Feldspar program",
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "Info",
          "package": "feldspar-language",
          "partial": "Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#t:Info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class is used to allow constructs to be abstract in the monad. Its\n purpose is similar to that of \u003ccode\u003e\u003ca\u003eMonadType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Core.Interpretation",
          "name": "LatticeSize1",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Interpretation.html#LatticeSize1",
          "type": "class"
        },
        "index": {
          "description": "This class is used to allow constructs to be abstract in the monad Its purpose is similar to that of MonadType",
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "LatticeSize1",
          "package": "feldspar-language",
          "partial": "Lattice Size",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#t:LatticeSize1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnvironment for optimization\n\u003c/p\u003e",
          "module": "Feldspar.Core.Interpretation",
          "name": "Opt",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Interpretation.html#Opt",
          "type": "type"
        },
        "index": {
          "description": "Environment for optimization",
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "Opt",
          "package": "feldspar-language",
          "partial": "Opt",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#t:Opt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic optimization of a feature\n\u003c/p\u003e\u003cp\u003eThis optimization is similar to \u003ccode\u003e\u003ca\u003eOptimize\u003c/a\u003e\u003c/code\u003e, but it also performs size\n inference. Size inference has to be done simultaneously with other\n optimizations in order to avoid iterating the phases. (Size information may\n help optimization and optimization may help size inference.)\n\u003c/p\u003e",
          "module": "Feldspar.Core.Interpretation",
          "name": "Optimize",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Interpretation.html#Optimize",
          "type": "class"
        },
        "index": {
          "description": "Basic optimization of feature This optimization is similar to Optimize but it also performs size inference Size inference has to be done simultaneously with other optimizations in order to avoid iterating the phases Size information may help optimization and optimization may help size inference",
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "Optimize",
          "package": "feldspar-language",
          "partial": "Optimize",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#t:Optimize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Interpretation",
          "name": "OptimizeSuper",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Interpretation.html#OptimizeSuper",
          "type": "class"
        },
        "index": {
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "OptimizeSuper",
          "package": "feldspar-language",
          "partial": "Optimize Super",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#t:OptimizeSuper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndication whether a symbol is sharable or not\n\u003c/p\u003e",
          "module": "Feldspar.Core.Interpretation",
          "name": "Sharable",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Interpretation.html#Sharable",
          "type": "class"
        },
        "index": {
          "description": "Indication whether symbol is sharable or not",
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "Sharable",
          "package": "feldspar-language",
          "partial": "Sharable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#t:Sharable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForwards size propagation\n\u003c/p\u003e",
          "module": "Feldspar.Core.Interpretation",
          "name": "SizeProp",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Interpretation.html#SizeProp",
          "type": "class"
        },
        "index": {
          "description": "Forwards size propagation",
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "SizeProp",
          "package": "feldspar-language",
          "partial": "Size Prop",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#t:SizeProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eInfo\u003c/a\u003e\u003c/code\u003e with hidden result type\n\u003c/p\u003e",
          "module": "Feldspar.Core.Interpretation",
          "name": "SomeInfo",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Interpretation.html#SomeInfo",
          "type": "data"
        },
        "index": {
          "description": "Info with hidden result type",
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "SomeInfo",
          "package": "feldspar-language",
          "partial": "Some Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#t:SomeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Interpretation",
          "name": "SomeType",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Interpretation.html#SomeType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "SomeType",
          "package": "feldspar-language",
          "partial": "Some Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#t:SomeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about the source code of an expression\n\u003c/p\u003e",
          "module": "Feldspar.Core.Interpretation",
          "name": "SourceInfo",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Interpretation.html#SourceInfo",
          "type": "type"
        },
        "index": {
          "description": "Information about the source code of an expression",
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "SourceInfo",
          "package": "feldspar-language",
          "partial": "Source Info",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#t:SourceInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Interpretation",
          "name": "Env",
          "package": "feldspar-language",
          "signature": "Env",
          "source": "src/Feldspar-Core-Interpretation.html#Env",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "Env",
          "package": "feldspar-language",
          "partial": "Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:Env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Interpretation",
          "name": "Info",
          "package": "feldspar-language",
          "signature": "TypeRep a -\u003e Size a -\u003e VarInfo -\u003e SourceInfo -\u003e Info a",
          "source": "src/Feldspar-Core-Interpretation.html#Info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "Info",
          "normalized": "TypeRep a-\u003eSize a-\u003eVarInfo-\u003eSourceInfo-\u003eInfo a",
          "package": "feldspar-language",
          "partial": "Info",
          "signature": "TypeRep a-\u003eSize a-\u003eVarInfo-\u003eSourceInfo-\u003eInfo a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:Info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Interpretation",
          "name": "SomeInfo",
          "package": "feldspar-language",
          "signature": "Info a -\u003e SomeInfo",
          "source": "src/Feldspar-Core-Interpretation.html#SomeInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "SomeInfo",
          "normalized": "Info a-\u003eSomeInfo",
          "package": "feldspar-language",
          "partial": "Some Info",
          "signature": "Info a-\u003eSomeInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:SomeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Interpretation",
          "name": "SomeType",
          "package": "feldspar-language",
          "signature": "TypeRep a -\u003e SomeType",
          "source": "src/Feldspar-Core-Interpretation.html#SomeType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "SomeType",
          "normalized": "TypeRep a-\u003eSomeType",
          "package": "feldspar-language",
          "partial": "Some Type",
          "signature": "TypeRep a-\u003eSomeType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:SomeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Interpretation",
          "name": "c'",
          "package": "feldspar-language",
          "signature": "feature sig -\u003e (feature :|| Type) sig",
          "source": "src/Feldspar-Core-Interpretation.html#c%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "c'",
          "normalized": "a b-\u003e(a Type)b",
          "package": "feldspar-language",
          "signature": "feature sig-\u003e(feature Type)sig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:c-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplaces an expression with a literal if the type permits, otherwise\n returns the expression unchanged.\n\u003c/p\u003e",
          "module": "Feldspar.Core.Interpretation",
          "name": "constFold",
          "package": "feldspar-language",
          "signature": "SourceInfo -\u003e ASTF (Decor Info (dom :|| Typeable)) a -\u003e a -\u003e ASTF (Decor Info (dom :|| Typeable)) a",
          "source": "src/Feldspar-Core-Interpretation.html#constFold",
          "type": "function"
        },
        "index": {
          "description": "Replaces an expression with literal if the type permits otherwise returns the expression unchanged",
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "constFold",
          "normalized": "SourceInfo-\u003eASTF(Decor Info(a Typeable))b-\u003eb-\u003eASTF(Decor Info(a Typeable))b",
          "package": "feldspar-language",
          "partial": "Fold",
          "signature": "SourceInfo-\u003eASTF(Decor Info(dom Typeable))a-\u003ea-\u003eASTF(Decor Info(dom Typeable))a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:constFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptimized construction of an expression from a symbol and its optimized\n arguments\n\u003c/p\u003e",
          "module": "Feldspar.Core.Interpretation",
          "name": "constructFeat",
          "package": "feldspar-language",
          "signature": "feature a -\u003e Args (AST (Decor Info (dom :|| Typeable))) a -\u003e Opt (ASTF (Decor Info (dom :|| Typeable)) (DenResult a))",
          "source": "src/Feldspar-Core-Interpretation.html#constructFeat",
          "type": "function"
        },
        "index": {
          "description": "Optimized construction of an expression from symbol and its optimized arguments",
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "constructFeat",
          "normalized": "a b-\u003eArgs(AST(Decor Info(c Typeable)))b-\u003eOpt(ASTF(Decor Info(c Typeable))(DenResult b))",
          "package": "feldspar-language",
          "partial": "Feat",
          "signature": "feature a-\u003eArgs(AST(Decor Info(dom Typeable)))a-\u003eOpt(ASTF(Decor Info(dom Typeable))(DenResult a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:constructFeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptimized construction of an expression from a symbol and its optimized\n arguments\n\u003c/p\u003e\u003cp\u003eNote: This function should normally not be called directly. Instead, use\n \u003ccode\u003e\u003ca\u003econstructFeat\u003c/a\u003e\u003c/code\u003e which has more accurate propagation of \u003ccode\u003e\u003ca\u003eInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Core.Interpretation",
          "name": "constructFeatOpt",
          "package": "feldspar-language",
          "signature": "feature a -\u003e Args (AST (Decor Info (dom :|| Typeable))) a -\u003e Opt (ASTF (Decor Info (dom :|| Typeable)) (DenResult a))",
          "source": "src/Feldspar-Core-Interpretation.html#constructFeatOpt",
          "type": "method"
        },
        "index": {
          "description": "Optimized construction of an expression from symbol and its optimized arguments Note This function should normally not be called directly Instead use constructFeat which has more accurate propagation of Info",
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "constructFeatOpt",
          "normalized": "a b-\u003eArgs(AST(Decor Info(c Typeable)))b-\u003eOpt(ASTF(Decor Info(c Typeable))(DenResult b))",
          "package": "feldspar-language",
          "partial": "Feat Opt",
          "signature": "feature a-\u003eArgs(AST(Decor Info(dom Typeable)))a-\u003eOpt(ASTF(Decor Info(dom Typeable))(DenResult a))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:constructFeatOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnoptimized construction of an expression from a symbol and its\n optimized arguments\n\u003c/p\u003e",
          "module": "Feldspar.Core.Interpretation",
          "name": "constructFeatUnOpt",
          "package": "feldspar-language",
          "signature": "feature a -\u003e Args (AST (Decor Info (dom :|| Typeable))) a -\u003e Opt (ASTF (Decor Info (dom :|| Typeable)) (DenResult a))",
          "source": "src/Feldspar-Core-Interpretation.html#constructFeatUnOpt",
          "type": "method"
        },
        "index": {
          "description": "Unoptimized construction of an expression from symbol and its optimized arguments",
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "constructFeatUnOpt",
          "normalized": "a b-\u003eArgs(AST(Decor Info(c Typeable)))b-\u003eOpt(ASTF(Decor Info(c Typeable))(DenResult b))",
          "package": "feldspar-language",
          "partial": "Feat Un Opt",
          "signature": "feature a-\u003eArgs(AST(Decor Info(dom Typeable)))a-\u003eOpt(ASTF(Decor Info(dom Typeable))(DenResult a))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:constructFeatUnOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003econstructFeatUnOptDefaultTyp\u003c/a\u003e\u003c/code\u003e but without an explicit \u003ccode\u003e\u003ca\u003eTypeRep\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Core.Interpretation",
          "name": "constructFeatUnOptDefault",
          "package": "feldspar-language",
          "signature": "feature a -\u003e Args (AST (Decor Info (dom :|| Typeable))) a -\u003e Opt (ASTF (Decor Info (dom :|| Typeable)) (DenResult a))",
          "source": "src/Feldspar-Core-Interpretation.html#constructFeatUnOptDefault",
          "type": "function"
        },
        "index": {
          "description": "Like constructFeatUnOptDefaultTyp but without an explicit TypeRep",
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "constructFeatUnOptDefault",
          "normalized": "a b-\u003eArgs(AST(Decor Info(c Typeable)))b-\u003eOpt(ASTF(Decor Info(c Typeable))(DenResult b))",
          "package": "feldspar-language",
          "partial": "Feat Un Opt Default",
          "signature": "feature a-\u003eArgs(AST(Decor Info(dom Typeable)))a-\u003eOpt(ASTF(Decor Info(dom Typeable))(DenResult a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:constructFeatUnOptDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient default implementation of \u003ccode\u003e\u003ca\u003econstructFeatUnOpt\u003c/a\u003e\u003c/code\u003e. Uses \u003ccode\u003e\u003ca\u003esizeProp\u003c/a\u003e\u003c/code\u003e\n to propagate size.\n\u003c/p\u003e",
          "module": "Feldspar.Core.Interpretation",
          "name": "constructFeatUnOptDefaultTyp",
          "package": "feldspar-language",
          "signature": "TypeRep (DenResult a) -\u003e feature a -\u003e Args (AST (Decor Info (dom :|| Typeable))) a -\u003e Opt (ASTF (Decor Info (dom :|| Typeable)) (DenResult a))",
          "source": "src/Feldspar-Core-Interpretation.html#constructFeatUnOptDefaultTyp",
          "type": "function"
        },
        "index": {
          "description": "Convenient default implementation of constructFeatUnOpt Uses sizeProp to propagate size",
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "constructFeatUnOptDefaultTyp",
          "normalized": "TypeRep(DenResult a)-\u003eb a-\u003eArgs(AST(Decor Info(c Typeable)))a-\u003eOpt(ASTF(Decor Info(c Typeable))(DenResult a))",
          "package": "feldspar-language",
          "partial": "Feat Un Opt Default Typ",
          "signature": "TypeRep(DenResult a)-\u003efeature a-\u003eArgs(AST(Decor Info(dom Typeable)))a-\u003eOpt(ASTF(Decor Info(dom Typeable))(DenResult a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:constructFeatUnOptDefaultTyp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Interpretation",
          "name": "infoRange",
          "package": "feldspar-language",
          "signature": "Info a -\u003e RangeSet a",
          "source": "src/Feldspar-Core-Interpretation.html#infoRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "infoRange",
          "normalized": "Info a-\u003eRangeSet a",
          "package": "feldspar-language",
          "partial": "Range",
          "signature": "Info a-\u003eRangeSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:infoRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Interpretation",
          "name": "infoSize",
          "package": "feldspar-language",
          "signature": "Size a",
          "source": "src/Feldspar-Core-Interpretation.html#Info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "infoSize",
          "package": "feldspar-language",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:infoSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Interpretation",
          "name": "infoSource",
          "package": "feldspar-language",
          "signature": "SourceInfo",
          "source": "src/Feldspar-Core-Interpretation.html#Info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "infoSource",
          "package": "feldspar-language",
          "partial": "Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:infoSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Interpretation",
          "name": "infoType",
          "package": "feldspar-language",
          "signature": "TypeRep a",
          "source": "src/Feldspar-Core-Interpretation.html#Info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "infoType",
          "package": "feldspar-language",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:infoType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Interpretation",
          "name": "infoVars",
          "package": "feldspar-language",
          "signature": "VarInfo",
          "source": "src/Feldspar-Core-Interpretation.html#Info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "infoVars",
          "package": "feldspar-language",
          "partial": "Vars",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:infoVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eLiteral\u003c/a\u003e\u003c/code\u003e decorated with \u003ccode\u003e\u003ca\u003eInfo\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Core.Interpretation",
          "name": "literalDecor",
          "package": "feldspar-language",
          "signature": "a -\u003e ASTF (Decor Info (dom :|| Typeable)) a",
          "source": "src/Feldspar-Core-Interpretation.html#literalDecor",
          "type": "function"
        },
        "index": {
          "description": "Construct Literal decorated with Info",
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "literalDecor",
          "normalized": "a-\u003eASTF(Decor Info(b Typeable))a",
          "package": "feldspar-language",
          "partial": "Decor",
          "signature": "a-\u003eASTF(Decor Info(dom Typeable))a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:literalDecor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the \u003ccode\u003e\u003ca\u003eSourceInfo\u003c/a\u003e\u003c/code\u003e environment\n\u003c/p\u003e",
          "module": "Feldspar.Core.Interpretation",
          "name": "localSource",
          "package": "feldspar-language",
          "signature": "SourceInfo -\u003e Opt a -\u003e Opt a",
          "source": "src/Feldspar-Core-Interpretation.html#localSource",
          "type": "function"
        },
        "index": {
          "description": "Change the SourceInfo environment",
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "localSource",
          "normalized": "SourceInfo-\u003eOpt a-\u003eOpt a",
          "package": "feldspar-language",
          "partial": "Source",
          "signature": "SourceInfo-\u003eOpt a-\u003eOpt a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:localSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a variable into the environment\n\u003c/p\u003e",
          "module": "Feldspar.Core.Interpretation",
          "name": "localVar",
          "package": "feldspar-language",
          "signature": "VarId -\u003e Info b -\u003e Opt a -\u003e Opt a",
          "source": "src/Feldspar-Core-Interpretation.html#localVar",
          "type": "function"
        },
        "index": {
          "description": "Insert variable into the environment",
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "localVar",
          "normalized": "VarId-\u003eInfo a-\u003eOpt b-\u003eOpt b",
          "package": "feldspar-language",
          "partial": "Var",
          "signature": "VarId-\u003eInfo b-\u003eOpt a-\u003eOpt a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:localVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Interpretation",
          "name": "mergeSize",
          "package": "feldspar-language",
          "signature": "Info (m a) -\u003e Size (m a) -\u003e Size (m a) -\u003e Size (m a)",
          "source": "src/Feldspar-Core-Interpretation.html#mergeSize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "mergeSize",
          "normalized": "Info(a b)-\u003eSize(a b)-\u003eSize(a b)-\u003eSize(a b)",
          "package": "feldspar-language",
          "partial": "Size",
          "signature": "Info(m a)-\u003eSize(m a)-\u003eSize(m a)-\u003eSize(m a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:mergeSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Interpretation",
          "name": "mkInfo",
          "package": "feldspar-language",
          "signature": "Size a -\u003e Info a",
          "source": "src/Feldspar-Core-Interpretation.html#mkInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "mkInfo",
          "normalized": "Size a-\u003eInfo a",
          "package": "feldspar-language",
          "partial": "Info",
          "signature": "Size a-\u003eInfo a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:mkInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Interpretation",
          "name": "mkInfoTy",
          "package": "feldspar-language",
          "signature": "TypeRep a -\u003e Info a",
          "source": "src/Feldspar-Core-Interpretation.html#mkInfoTy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "mkInfoTy",
          "normalized": "TypeRep a-\u003eInfo a",
          "package": "feldspar-language",
          "partial": "Info Ty",
          "signature": "TypeRep a-\u003eInfo a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:mkInfoTy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptimization of an expression. This function runs \u003ccode\u003e\u003ca\u003eoptimizeM\u003c/a\u003e\u003c/code\u003e and extracts\n the result.\n\u003c/p\u003e",
          "module": "Feldspar.Core.Interpretation",
          "name": "optimize",
          "package": "feldspar-language",
          "signature": "ASTF (dom :|| Typeable) a -\u003e ASTF (Decor Info (dom :|| Typeable)) a",
          "source": "src/Feldspar-Core-Interpretation.html#optimize",
          "type": "function"
        },
        "index": {
          "description": "Optimization of an expression This function runs optimizeM and extracts the result",
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "optimize",
          "normalized": "ASTF(a Typeable)b-\u003eASTF(Decor Info(a Typeable))b",
          "package": "feldspar-language",
          "signature": "ASTF(dom Typeable)a-\u003eASTF(Decor Info(dom Typeable))a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:optimize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTop-down and bottom-up optimization of a feature\n\u003c/p\u003e",
          "module": "Feldspar.Core.Interpretation",
          "name": "optimizeFeat",
          "package": "feldspar-language",
          "signature": "feature a -\u003e Args (AST (dom :|| Typeable)) a -\u003e Opt (ASTF (Decor Info (dom :|| Typeable)) (DenResult a))",
          "source": "src/Feldspar-Core-Interpretation.html#optimizeFeat",
          "type": "method"
        },
        "index": {
          "description": "Top-down and bottom-up optimization of feature",
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "optimizeFeat",
          "normalized": "a b-\u003eArgs(AST(c Typeable))b-\u003eOpt(ASTF(Decor Info(c Typeable))(DenResult b))",
          "package": "feldspar-language",
          "partial": "Feat",
          "signature": "feature a-\u003eArgs(AST(dom Typeable))a-\u003eOpt(ASTF(Decor Info(dom Typeable))(DenResult a))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:optimizeFeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient default implementation of \u003ccode\u003e\u003ca\u003eoptimizeFeat\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Core.Interpretation",
          "name": "optimizeFeatDefault",
          "package": "feldspar-language",
          "signature": "feature a -\u003e Args (AST (dom :|| Typeable)) a -\u003e Opt (ASTF (Decor Info (dom :|| Typeable)) (DenResult a))",
          "source": "src/Feldspar-Core-Interpretation.html#optimizeFeatDefault",
          "type": "function"
        },
        "index": {
          "description": "Convenient default implementation of optimizeFeat",
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "optimizeFeatDefault",
          "normalized": "a b-\u003eArgs(AST(c Typeable))b-\u003eOpt(ASTF(Decor Info(c Typeable))(DenResult b))",
          "package": "feldspar-language",
          "partial": "Feat Default",
          "signature": "feature a-\u003eArgs(AST(dom Typeable))a-\u003eOpt(ASTF(Decor Info(dom Typeable))(DenResult a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:optimizeFeatDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptimization of an expression\n\u003c/p\u003e\u003cp\u003eIn addition to running \u003ccode\u003e\u003ca\u003eoptimizeFeat\u003c/a\u003e\u003c/code\u003e, this function performs constant\n folding on all closed expressions, provided that the type permits making a\n literal.\n\u003c/p\u003e",
          "module": "Feldspar.Core.Interpretation",
          "name": "optimizeM",
          "package": "feldspar-language",
          "signature": "ASTF (dom :|| Typeable) a -\u003e Opt (ASTF (Decor Info (dom :|| Typeable)) a)",
          "source": "src/Feldspar-Core-Interpretation.html#optimizeM",
          "type": "function"
        },
        "index": {
          "description": "Optimization of an expression In addition to running optimizeFeat this function performs constant folding on all closed expressions provided that the type permits making literal",
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "optimizeM",
          "normalized": "ASTF(a Typeable)b-\u003eOpt(ASTF(Decor Info(a Typeable))b)",
          "package": "feldspar-language",
          "signature": "ASTF(dom Typeable)a-\u003eOpt(ASTF(Decor Info(dom Typeable))a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:optimizeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Interpretation",
          "name": "prjF",
          "package": "feldspar-language",
          "signature": "sup sig -\u003e Maybe ((sub :|| Type) sig)",
          "source": "src/Feldspar-Core-Interpretation.html#prjF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "prjF",
          "normalized": "a b-\u003eMaybe((c Type)b)",
          "package": "feldspar-language",
          "signature": "sup sig-\u003eMaybe((sub Type)sig)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:prjF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a type representation of a symbol's result type\n\u003c/p\u003e",
          "module": "Feldspar.Core.Interpretation",
          "name": "resultType",
          "package": "feldspar-language",
          "signature": "c a -\u003e TypeRep (DenResult a)",
          "source": "src/Feldspar-Core-Interpretation.html#resultType",
          "type": "function"
        },
        "index": {
          "description": "Compute type representation of symbol result type",
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "resultType",
          "normalized": "a b-\u003eTypeRep(DenResult b)",
          "package": "feldspar-language",
          "partial": "Type",
          "signature": "c a-\u003eTypeRep(DenResult a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:resultType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Interpretation",
          "name": "sharable",
          "package": "feldspar-language",
          "signature": "dom a -\u003e Bool",
          "source": "src/Feldspar-Core-Interpretation.html#sharable",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "sharable",
          "normalized": "a b-\u003eBool",
          "package": "feldspar-language",
          "signature": "dom a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:sharable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize propagation for a symbol given a list of argument sizes\n\u003c/p\u003e",
          "module": "Feldspar.Core.Interpretation",
          "name": "sizeProp",
          "package": "feldspar-language",
          "signature": "feature a -\u003e Args (WrapFull Info) a -\u003e Size (DenResult a)",
          "source": "src/Feldspar-Core-Interpretation.html#sizeProp",
          "type": "method"
        },
        "index": {
          "description": "Size propagation for symbol given list of argument sizes",
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "sizeProp",
          "normalized": "a b-\u003eArgs(WrapFull Info)b-\u003eSize(DenResult b)",
          "package": "feldspar-language",
          "partial": "Prop",
          "signature": "feature a-\u003eArgs(WrapFull Info)a-\u003eSize(DenResult a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:sizeProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient default implementation of \u003ccode\u003e\u003ca\u003esizeProp\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Core.Interpretation",
          "name": "sizePropDefault",
          "package": "feldspar-language",
          "signature": "feature a -\u003e Args (WrapFull Info) a -\u003e Size (DenResult a)",
          "source": "src/Feldspar-Core-Interpretation.html#sizePropDefault",
          "type": "function"
        },
        "index": {
          "description": "Convenient default implementation of sizeProp",
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "sizePropDefault",
          "normalized": "a b-\u003eArgs(WrapFull Info)b-\u003eSize(DenResult b)",
          "package": "feldspar-language",
          "partial": "Prop Default",
          "signature": "feature a-\u003eArgs(WrapFull Info)a-\u003eSize(DenResult a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:sizePropDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Interpretation",
          "name": "sourceEnv",
          "package": "feldspar-language",
          "signature": "SourceInfo",
          "source": "src/Feldspar-Core-Interpretation.html#Env",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "sourceEnv",
          "package": "feldspar-language",
          "partial": "Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:sourceEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialize the program for a target platform with the given native bit\n width\n\u003c/p\u003e",
          "module": "Feldspar.Core.Interpretation",
          "name": "targetSpecialization",
          "package": "feldspar-language",
          "signature": "BitWidth n -\u003e ASTF dom a -\u003e ASTF dom a",
          "source": "src/Feldspar-Core-Interpretation.html#targetSpecialization",
          "type": "function"
        },
        "index": {
          "description": "Specialize the program for target platform with the given native bit width",
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "targetSpecialization",
          "normalized": "BitWidth a-\u003eASTF b c-\u003eASTF b c",
          "package": "feldspar-language",
          "partial": "Specialization",
          "signature": "BitWidth n-\u003eASTF dom a-\u003eASTF dom a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:targetSpecialization"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Interpretation",
          "name": "varEnv",
          "package": "feldspar-language",
          "signature": "[(VarId, SomeInfo)]",
          "source": "src/Feldspar-Core-Interpretation.html#Env",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "varEnv",
          "normalized": "[(VarId,SomeInfo)]",
          "package": "feldspar-language",
          "partial": "Env",
          "signature": "[(VarId,SomeInfo)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:varEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt the expression is a literal, its value is returned, otherwise \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Core.Interpretation",
          "name": "viewLiteral",
          "package": "feldspar-language",
          "signature": "ASTF (Decor info (dom :|| Typeable)) a -\u003e Maybe a",
          "source": "src/Feldspar-Core-Interpretation.html#viewLiteral",
          "type": "function"
        },
        "index": {
          "description": "It the expression is literal its value is returned otherwise Nothing",
          "hierarchy": "Feldspar Core Interpretation",
          "module": "Feldspar.Core.Interpretation",
          "name": "viewLiteral",
          "normalized": "ASTF(Decor a(b Typeable))c-\u003eMaybe c",
          "package": "feldspar-language",
          "partial": "Literal",
          "signature": "ASTF(Decor info(dom Typeable))a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Interpretation.html#v:viewLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "Types",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "Types",
          "package": "feldspar-language",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeterogeneous list\n\u003c/p\u003e",
          "module": "Feldspar.Core.Types",
          "name": ":\u003e",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Types.html#%3A%3E",
          "type": "data"
        },
        "index": {
          "description": "Heterogeneous list",
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": ":\u003e",
          "package": "feldspar-language",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#t::-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "AnySize",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Types.html#AnySize",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "AnySize",
          "package": "feldspar-language",
          "partial": "Any Size",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#t:AnySize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWitness for \u003ccode\u003e\u003ca\u003eN8\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eN16\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eN32\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eN64\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eNNative\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Core.Types",
          "name": "BitWidth",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Types.html#BitWidth",
          "type": "data"
        },
        "index": {
          "description": "Witness for N8 N16 N32 N64 or NNative",
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "BitWidth",
          "package": "feldspar-language",
          "partial": "Bit Width",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#t:BitWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "FVal",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Types.html#FVal",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "FVal",
          "package": "feldspar-language",
          "partial": "FVal",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#t:FVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generalization of unsigned and signed integers. The first parameter\n represents the signedness and the sectond parameter the number of bits.\n\u003c/p\u003e",
          "module": "Feldspar.Core.Types",
          "name": "GenericInt",
          "package": "feldspar-language",
          "signature": "GenericInt",
          "type": "function"
        },
        "index": {
          "description": "generalization of unsigned and signed integers The first parameter represents the signedness and the sectond parameter the number of bits",
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "GenericInt",
          "package": "feldspar-language",
          "partial": "Generic Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#t:GenericInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImmutable references\n\u003c/p\u003e",
          "module": "Feldspar.Core.Types",
          "name": "IV",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Types.html#IV",
          "type": "type"
        },
        "index": {
          "description": "Immutable references",
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "IV",
          "package": "feldspar-language",
          "partial": "IV",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#t:IV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "Index",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Types.html#Index",
          "type": "type"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "Index",
          "package": "feldspar-language",
          "partial": "Index",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#t:Index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTarget-dependent signed integers\n\u003c/p\u003e",
          "module": "Feldspar.Core.Types",
          "name": "IntN",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Types.html#IntN",
          "type": "newtype"
        },
        "index": {
          "description": "Target-dependent signed integers",
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "IntN",
          "package": "feldspar-language",
          "partial": "Int",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#t:IntN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "Length",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Types.html#Length",
          "type": "type"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "Length",
          "package": "feldspar-language",
          "partial": "Length",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#t:Length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutable arrays\n\u003c/p\u003e",
          "module": "Feldspar.Core.Types",
          "name": "MArr",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Types.html#MArr",
          "type": "type"
        },
        "index": {
          "description": "Mutable arrays",
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "MArr",
          "package": "feldspar-language",
          "partial": "MArr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#t:MArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class is used to allow constructs to be abstract in the monad\n\u003c/p\u003e",
          "module": "Feldspar.Core.Types",
          "name": "MonadType",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Types.html#MonadType",
          "type": "class"
        },
        "index": {
          "description": "This class is used to allow constructs to be abstract in the monad",
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "MonadType",
          "package": "feldspar-language",
          "partial": "Monad Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#t:MonadType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonad for manipulation of mutable data\n\u003c/p\u003e",
          "module": "Feldspar.Core.Types",
          "name": "Mut",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Types.html#Mut",
          "type": "type"
        },
        "index": {
          "description": "Monad for manipulation of mutable data",
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "Mut",
          "package": "feldspar-language",
          "partial": "Mut",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#t:Mut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType representation of 16 bits\n\u003c/p\u003e",
          "module": "Feldspar.Core.Types",
          "name": "N16",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Types.html#N16",
          "type": "data"
        },
        "index": {
          "description": "Type representation of bits",
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "N16",
          "package": "feldspar-language",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#t:N16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType representation of 32 bits\n\u003c/p\u003e",
          "module": "Feldspar.Core.Types",
          "name": "N32",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Types.html#N32",
          "type": "data"
        },
        "index": {
          "description": "Type representation of bits",
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "N32",
          "package": "feldspar-language",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#t:N32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType representation of 64 bits\n\u003c/p\u003e",
          "module": "Feldspar.Core.Types",
          "name": "N64",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Types.html#N64",
          "type": "data"
        },
        "index": {
          "description": "Type representation of bits",
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "N64",
          "package": "feldspar-language",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#t:N64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType representation of 8 bits\n\u003c/p\u003e",
          "module": "Feldspar.Core.Types",
          "name": "N8",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Types.html#N8",
          "type": "data"
        },
        "index": {
          "description": "Type representation of bits",
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "N8",
          "package": "feldspar-language",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#t:N8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType representation of the native number of bits on the target\n\u003c/p\u003e",
          "module": "Feldspar.Core.Types",
          "name": "NNative",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Types.html#NNative",
          "type": "data"
        },
        "index": {
          "description": "Type representation of the native number of bits on the target",
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "NNative",
          "package": "feldspar-language",
          "partial": "NNative",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#t:NNative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonad for parallel constructs\n\u003c/p\u003e",
          "module": "Feldspar.Core.Types",
          "name": "Par",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Types.html#Par",
          "type": "type"
        },
        "index": {
          "description": "Monad for parallel constructs",
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "Par",
          "package": "feldspar-language",
          "partial": "Par",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#t:Par"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generalization of \u003ccode\u003e\u003ca\u003eRange\u003c/a\u003e\u003c/code\u003e that serves two purposes: (1) Adding an extra\n \u003ccode\u003e\u003ca\u003eUniversal\u003c/a\u003e\u003c/code\u003e constructor to support unbounded types (\u003ccode\u003e\u003ca\u003eRange\u003c/a\u003e\u003c/code\u003e can only\n represent bounded ranges), and (2) pack a \u003ccode\u003e\u003ca\u003eBoundedInt\u003c/a\u003e\u003c/code\u003e constraint with the\n \u003ccode\u003e\u003ca\u003eRangeSet\u003c/a\u003e\u003c/code\u003e constructor. This is what allows \u003ccode\u003e\u003ca\u003esizeToRange\u003c/a\u003e\u003c/code\u003e to be defined as a\n total function with \u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003e as the only constraint.\n\u003c/p\u003e",
          "module": "Feldspar.Core.Types",
          "name": "RangeSet",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Types.html#RangeSet",
          "type": "data"
        },
        "index": {
          "description": "generalization of Range that serves two purposes Adding an extra Universal constructor to support unbounded types Range can only represent bounded ranges and pack BoundedInt constraint with the RangeSet constructor This is what allows sizeToRange to be defined as total function with Type as the only constraint",
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "RangeSet",
          "package": "feldspar-language",
          "partial": "Range Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#t:RangeSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType representation of \"signed\"\n\u003c/p\u003e",
          "module": "Feldspar.Core.Types",
          "name": "S",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Types.html#S",
          "type": "data"
        },
        "index": {
          "description": "Type representation of signed",
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "S",
          "package": "feldspar-language",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#t:S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "SignOf",
          "package": "feldspar-language",
          "signature": "SignOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "SignOf",
          "package": "feldspar-language",
          "partial": "Sign Of",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#t:SignOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWitness for \u003ccode\u003e\u003ca\u003eU\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eS\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Core.Types",
          "name": "Signedness",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Types.html#Signedness",
          "type": "data"
        },
        "index": {
          "description": "Witness for or",
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "Signedness",
          "package": "feldspar-language",
          "partial": "Signedness",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#t:Signedness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "Size",
          "package": "feldspar-language",
          "signature": "Size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "Size",
          "package": "feldspar-language",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#t:Size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArray whose length is represented by an \u003ccode\u003en\u003c/code\u003e-bit word\n\u003c/p\u003e",
          "module": "Feldspar.Core.Types",
          "name": "TargetArr",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Types.html#TargetArr",
          "type": "data"
        },
        "index": {
          "description": "Array whose length is represented by an bit word",
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "TargetArr",
          "package": "feldspar-language",
          "partial": "Target Arr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#t:TargetArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "TargetType",
          "package": "feldspar-language",
          "signature": "TargetType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "TargetType",
          "package": "feldspar-language",
          "partial": "Target Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#t:TargetType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe set of supported types\n\u003c/p\u003e",
          "module": "Feldspar.Core.Types",
          "name": "Type",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Types.html#Type",
          "type": "class"
        },
        "index": {
          "description": "The set of supported types",
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "Type",
          "package": "feldspar-language",
          "partial": "Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType equality witness\n\u003c/p\u003e",
          "module": "Feldspar.Core.Types",
          "name": "TypeEq",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Types.html#TypeEq",
          "type": "data"
        },
        "index": {
          "description": "Type equality witness",
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "TypeEq",
          "package": "feldspar-language",
          "partial": "Type Eq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#t:TypeEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of supported types\n\u003c/p\u003e",
          "module": "Feldspar.Core.Types",
          "name": "TypeRep",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Types.html#TypeRep",
          "type": "data"
        },
        "index": {
          "description": "Representation of supported types",
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "TypeRep",
          "package": "feldspar-language",
          "partial": "Type Rep",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#t:TypeRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType representation of \"unsigned\"\n\u003c/p\u003e",
          "module": "Feldspar.Core.Types",
          "name": "U",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Types.html#U",
          "type": "data"
        },
        "index": {
          "description": "Type representation of unsigned",
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "U",
          "package": "feldspar-language",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#t:U"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "WidthOf",
          "package": "feldspar-language",
          "signature": "WidthOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "WidthOf",
          "package": "feldspar-language",
          "partial": "Width Of",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#t:WidthOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTarget-dependent unsigned integers\n\u003c/p\u003e",
          "module": "Feldspar.Core.Types",
          "name": "WordN",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Types.html#WordN",
          "type": "newtype"
        },
        "index": {
          "description": "Target-dependent unsigned integers",
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "WordN",
          "package": "feldspar-language",
          "partial": "Word",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#t:WordN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": ":\u003e",
          "package": "feldspar-language",
          "signature": "a :\u003e b",
          "source": "src/Feldspar-Core-Types.html#%3A%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": ":\u003e",
          "package": "feldspar-language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v::-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "AnySize",
          "package": "feldspar-language",
          "signature": "AnySize",
          "source": "src/Feldspar-Core-Types.html#AnySize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "AnySize",
          "package": "feldspar-language",
          "partial": "Any Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:AnySize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "ArrayType",
          "package": "feldspar-language",
          "signature": "TypeRep a -\u003e TypeRep [a]",
          "source": "src/Feldspar-Core-Types.html#TypeRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "ArrayType",
          "normalized": "TypeRep a-\u003eTypeRep[a]",
          "package": "feldspar-language",
          "partial": "Array Type",
          "signature": "TypeRep a-\u003eTypeRep[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:ArrayType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "BoolType",
          "package": "feldspar-language",
          "signature": "TypeRep Bool",
          "source": "src/Feldspar-Core-Types.html#TypeRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "BoolType",
          "package": "feldspar-language",
          "partial": "Bool Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:BoolType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "ComplexType",
          "package": "feldspar-language",
          "signature": "TypeRep a -\u003e TypeRep (Complex a)",
          "source": "src/Feldspar-Core-Types.html#TypeRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "ComplexType",
          "normalized": "TypeRep a-\u003eTypeRep(Complex a)",
          "package": "feldspar-language",
          "partial": "Complex Type",
          "signature": "TypeRep a-\u003eTypeRep(Complex a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:ComplexType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "FVal",
          "package": "feldspar-language",
          "signature": "FVal",
          "source": "src/Feldspar-Core-Types.html#FVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "FVal",
          "package": "feldspar-language",
          "partial": "FVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:FVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "FValType",
          "package": "feldspar-language",
          "signature": "TypeRep a -\u003e TypeRep (FVal a)",
          "source": "src/Feldspar-Core-Types.html#TypeRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "FValType",
          "normalized": "TypeRep a-\u003eTypeRep(FVal a)",
          "package": "feldspar-language",
          "partial": "FVal Type",
          "signature": "TypeRep a-\u003eTypeRep(FVal a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:FValType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "FloatType",
          "package": "feldspar-language",
          "signature": "TypeRep Float",
          "source": "src/Feldspar-Core-Types.html#TypeRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "FloatType",
          "package": "feldspar-language",
          "partial": "Float Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:FloatType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "FunType",
          "package": "feldspar-language",
          "signature": "TypeRep a -\u003e TypeRep b -\u003e TypeRep (a -\u003e b)",
          "source": "src/Feldspar-Core-Types.html#TypeRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "FunType",
          "normalized": "TypeRep a-\u003eTypeRep b-\u003eTypeRep(a-\u003eb)",
          "package": "feldspar-language",
          "partial": "Fun Type",
          "signature": "TypeRep a-\u003eTypeRep b-\u003eTypeRep(a-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:FunType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "IVarType",
          "package": "feldspar-language",
          "signature": "TypeRep a -\u003e TypeRep (IV a)",
          "source": "src/Feldspar-Core-Types.html#TypeRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "IVarType",
          "normalized": "TypeRep a-\u003eTypeRep(IV a)",
          "package": "feldspar-language",
          "partial": "IVar Type",
          "signature": "TypeRep a-\u003eTypeRep(IV a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:IVarType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "IntN",
          "package": "feldspar-language",
          "signature": "IntN Int32",
          "source": "src/Feldspar-Core-Types.html#IntN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "IntN",
          "package": "feldspar-language",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:IntN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "IntType",
          "package": "feldspar-language",
          "signature": "Signedness s -\u003e BitWidth n -\u003e TypeRep (GenericInt s n)",
          "source": "src/Feldspar-Core-Types.html#TypeRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "IntType",
          "normalized": "Signedness a-\u003eBitWidth b-\u003eTypeRep(GenericInt a b)",
          "package": "feldspar-language",
          "partial": "Int Type",
          "signature": "Signedness s-\u003eBitWidth n-\u003eTypeRep(GenericInt s n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:IntType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "MArrType",
          "package": "feldspar-language",
          "signature": "TypeRep a -\u003e TypeRep (MArr a)",
          "source": "src/Feldspar-Core-Types.html#TypeRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "MArrType",
          "normalized": "TypeRep a-\u003eTypeRep(MArr a)",
          "package": "feldspar-language",
          "partial": "MArr Type",
          "signature": "TypeRep a-\u003eTypeRep(MArr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:MArrType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "MutType",
          "package": "feldspar-language",
          "signature": "TypeRep a -\u003e TypeRep (Mut a)",
          "source": "src/Feldspar-Core-Types.html#TypeRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "MutType",
          "normalized": "TypeRep a-\u003eTypeRep(Mut a)",
          "package": "feldspar-language",
          "partial": "Mut Type",
          "signature": "TypeRep a-\u003eTypeRep(Mut a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:MutType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "N16",
          "package": "feldspar-language",
          "signature": "BitWidth N16",
          "source": "src/Feldspar-Core-Types.html#BitWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "N16",
          "package": "feldspar-language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:N16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "N32",
          "package": "feldspar-language",
          "signature": "BitWidth N32",
          "source": "src/Feldspar-Core-Types.html#BitWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "N32",
          "package": "feldspar-language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:N32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "N64",
          "package": "feldspar-language",
          "signature": "BitWidth N64",
          "source": "src/Feldspar-Core-Types.html#BitWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "N64",
          "package": "feldspar-language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:N64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "N8",
          "package": "feldspar-language",
          "signature": "BitWidth N8",
          "source": "src/Feldspar-Core-Types.html#BitWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "N8",
          "package": "feldspar-language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:N8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "NNative",
          "package": "feldspar-language",
          "signature": "BitWidth NNative",
          "source": "src/Feldspar-Core-Types.html#BitWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "NNative",
          "package": "feldspar-language",
          "partial": "NNative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:NNative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "ParType",
          "package": "feldspar-language",
          "signature": "TypeRep a -\u003e TypeRep (Par a)",
          "source": "src/Feldspar-Core-Types.html#TypeRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "ParType",
          "normalized": "TypeRep a-\u003eTypeRep(Par a)",
          "package": "feldspar-language",
          "partial": "Par Type",
          "signature": "TypeRep a-\u003eTypeRep(Par a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:ParType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "RangeSet",
          "package": "feldspar-language",
          "signature": "Range a -\u003e RangeSet a",
          "source": "src/Feldspar-Core-Types.html#RangeSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "RangeSet",
          "normalized": "Range a-\u003eRangeSet a",
          "package": "feldspar-language",
          "partial": "Range Set",
          "signature": "Range a-\u003eRangeSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:RangeSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "RefType",
          "package": "feldspar-language",
          "signature": "TypeRep a -\u003e TypeRep (IORef a)",
          "source": "src/Feldspar-Core-Types.html#TypeRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "RefType",
          "normalized": "TypeRep a-\u003eTypeRep(IORef a)",
          "package": "feldspar-language",
          "partial": "Ref Type",
          "signature": "TypeRep a-\u003eTypeRep(IORef a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:RefType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "S",
          "package": "feldspar-language",
          "signature": "Signedness S",
          "source": "src/Feldspar-Core-Types.html#Signedness",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "S",
          "package": "feldspar-language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "TargetArr",
          "package": "feldspar-language",
          "signature": "TargetArr (GenericInt U n) [a]",
          "source": "src/Feldspar-Core-Types.html#TargetArr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "TargetArr",
          "normalized": "TargetArr(GenericInt U a)[b]",
          "package": "feldspar-language",
          "partial": "Target Arr",
          "signature": "TargetArr(GenericInt U n)[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:TargetArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "TargetArrType",
          "package": "feldspar-language",
          "signature": "BitWidth n -\u003e TypeRep a -\u003e TypeRep (TargetArr n a)",
          "source": "src/Feldspar-Core-Types.html#TypeRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "TargetArrType",
          "normalized": "BitWidth a-\u003eTypeRep b-\u003eTypeRep(TargetArr a b)",
          "package": "feldspar-language",
          "partial": "Target Arr Type",
          "signature": "BitWidth n-\u003eTypeRep a-\u003eTypeRep(TargetArr n a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:TargetArrType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "Tup2Type",
          "package": "feldspar-language",
          "signature": "TypeRep a -\u003e TypeRep b -\u003e TypeRep (a, b)",
          "source": "src/Feldspar-Core-Types.html#TypeRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "Tup2Type",
          "normalized": "TypeRep a-\u003eTypeRep b-\u003eTypeRep(a,b)",
          "package": "feldspar-language",
          "partial": "Tup Type",
          "signature": "TypeRep a-\u003eTypeRep b-\u003eTypeRep(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:Tup2Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "Tup3Type",
          "package": "feldspar-language",
          "signature": "TypeRep a -\u003e TypeRep b -\u003e TypeRep c -\u003e TypeRep (a, b, c)",
          "source": "src/Feldspar-Core-Types.html#TypeRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "Tup3Type",
          "normalized": "TypeRep a-\u003eTypeRep b-\u003eTypeRep c-\u003eTypeRep(a,b,c)",
          "package": "feldspar-language",
          "partial": "Tup Type",
          "signature": "TypeRep a-\u003eTypeRep b-\u003eTypeRep c-\u003eTypeRep(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:Tup3Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "Tup4Type",
          "package": "feldspar-language",
          "signature": "TypeRep a -\u003e TypeRep b -\u003e TypeRep c -\u003e TypeRep d -\u003e TypeRep (a, b, c, d)",
          "source": "src/Feldspar-Core-Types.html#TypeRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "Tup4Type",
          "normalized": "TypeRep a-\u003eTypeRep b-\u003eTypeRep c-\u003eTypeRep d-\u003eTypeRep(a,b,c,d)",
          "package": "feldspar-language",
          "partial": "Tup Type",
          "signature": "TypeRep a-\u003eTypeRep b-\u003eTypeRep c-\u003eTypeRep d-\u003eTypeRep(a,b,c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:Tup4Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "Tup5Type",
          "package": "feldspar-language",
          "signature": "TypeRep a -\u003e TypeRep b -\u003e TypeRep c -\u003e TypeRep d -\u003e TypeRep e -\u003e TypeRep (a, b, c, d, e)",
          "source": "src/Feldspar-Core-Types.html#TypeRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "Tup5Type",
          "normalized": "TypeRep a-\u003eTypeRep b-\u003eTypeRep c-\u003eTypeRep d-\u003eTypeRep e-\u003eTypeRep(a,b,c,d,e)",
          "package": "feldspar-language",
          "partial": "Tup Type",
          "signature": "TypeRep a-\u003eTypeRep b-\u003eTypeRep c-\u003eTypeRep d-\u003eTypeRep e-\u003eTypeRep(a,b,c,d,e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:Tup5Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "Tup6Type",
          "package": "feldspar-language",
          "signature": "TypeRep a -\u003e TypeRep b -\u003e TypeRep c -\u003e TypeRep d -\u003e TypeRep e -\u003e TypeRep f -\u003e TypeRep (a, b, c, d, e, f)",
          "source": "src/Feldspar-Core-Types.html#TypeRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "Tup6Type",
          "normalized": "TypeRep a-\u003eTypeRep b-\u003eTypeRep c-\u003eTypeRep d-\u003eTypeRep e-\u003eTypeRep f-\u003eTypeRep(a,b,c,d,e,f)",
          "package": "feldspar-language",
          "partial": "Tup Type",
          "signature": "TypeRep a-\u003eTypeRep b-\u003eTypeRep c-\u003eTypeRep d-\u003eTypeRep e-\u003eTypeRep f-\u003eTypeRep(a,b,c,d,e,f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:Tup6Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "Tup7Type",
          "package": "feldspar-language",
          "signature": "TypeRep a -\u003e TypeRep b -\u003e TypeRep c -\u003e TypeRep d -\u003e TypeRep e -\u003e TypeRep f -\u003e TypeRep g -\u003e TypeRep (a, b, c, d, e, f, g)",
          "source": "src/Feldspar-Core-Types.html#TypeRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "Tup7Type",
          "normalized": "TypeRep a-\u003eTypeRep b-\u003eTypeRep c-\u003eTypeRep d-\u003eTypeRep e-\u003eTypeRep f-\u003eTypeRep g-\u003eTypeRep(a,b,c,d,e,f,g)",
          "package": "feldspar-language",
          "partial": "Tup Type",
          "signature": "TypeRep a-\u003eTypeRep b-\u003eTypeRep c-\u003eTypeRep d-\u003eTypeRep e-\u003eTypeRep f-\u003eTypeRep g-\u003eTypeRep(a,b,c,d,e,f,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:Tup7Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "TypeEq",
          "package": "feldspar-language",
          "signature": "TypeEq a a",
          "source": "src/Feldspar-Core-Types.html#TypeEq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "TypeEq",
          "package": "feldspar-language",
          "partial": "Type Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:TypeEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "U",
          "package": "feldspar-language",
          "signature": "Signedness U",
          "source": "src/Feldspar-Core-Types.html#Signedness",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "U",
          "package": "feldspar-language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:U"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "UnitType",
          "package": "feldspar-language",
          "signature": "TypeRep ()",
          "source": "src/Feldspar-Core-Types.html#TypeRep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "UnitType",
          "normalized": "TypeRep()",
          "package": "feldspar-language",
          "partial": "Unit Type",
          "signature": "TypeRep()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:UnitType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "Universal",
          "package": "feldspar-language",
          "signature": "RangeSet a",
          "source": "src/Feldspar-Core-Types.html#RangeSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "Universal",
          "package": "feldspar-language",
          "partial": "Universal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:Universal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "WordN",
          "package": "feldspar-language",
          "signature": "WordN Word32",
          "source": "src/Feldspar-Core-Types.html#WordN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "WordN",
          "package": "feldspar-language",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:WordN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "anySizeFun",
          "package": "feldspar-language",
          "signature": "AnySize -\u003e AnySize",
          "source": "src/Feldspar-Core-Types.html#anySizeFun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "anySizeFun",
          "normalized": "AnySize-\u003eAnySize",
          "package": "feldspar-language",
          "partial": "Size Fun",
          "signature": "AnySize-\u003eAnySize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:anySizeFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "anySizeFun2",
          "package": "feldspar-language",
          "signature": "AnySize -\u003e AnySize -\u003e AnySize",
          "source": "src/Feldspar-Core-Types.html#anySizeFun2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "anySizeFun2",
          "normalized": "AnySize-\u003eAnySize-\u003eAnySize",
          "package": "feldspar-language",
          "partial": "Size Fun",
          "signature": "AnySize-\u003eAnySize-\u003eAnySize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:anySizeFun2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "argType",
          "package": "feldspar-language",
          "signature": "TypeRep (a -\u003e b) -\u003e TypeRep a",
          "source": "src/Feldspar-Core-Types.html#argType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "argType",
          "normalized": "TypeRep(a-\u003eb)-\u003eTypeRep a",
          "package": "feldspar-language",
          "partial": "Type",
          "signature": "TypeRep(a-\u003eb)-\u003eTypeRep a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:argType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "bitWidth",
          "package": "feldspar-language",
          "signature": "BitWidth n -\u003e String",
          "source": "src/Feldspar-Core-Types.html#bitWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "bitWidth",
          "normalized": "BitWidth a-\u003eString",
          "package": "feldspar-language",
          "partial": "Width",
          "signature": "BitWidth n-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:bitWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "defaultSize",
          "package": "feldspar-language",
          "signature": "TypeRep a -\u003e Size a",
          "source": "src/Feldspar-Core-Types.html#defaultSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "defaultSize",
          "normalized": "TypeRep a-\u003eSize a",
          "package": "feldspar-language",
          "partial": "Size",
          "signature": "TypeRep a-\u003eSize a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:defaultSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "fromIntN",
          "package": "feldspar-language",
          "signature": "BitWidth n -\u003e IntN -\u003e GenericInt S n",
          "source": "src/Feldspar-Core-Types.html#fromIntN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "fromIntN",
          "normalized": "BitWidth a-\u003eIntN-\u003eGenericInt S a",
          "package": "feldspar-language",
          "partial": "Int",
          "signature": "BitWidth n-\u003eIntN-\u003eGenericInt S n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:fromIntN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "fromWordN",
          "package": "feldspar-language",
          "signature": "BitWidth n -\u003e WordN -\u003e GenericInt U n",
          "source": "src/Feldspar-Core-Types.html#fromWordN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "fromWordN",
          "normalized": "BitWidth a-\u003eWordN-\u003eGenericInt U a",
          "package": "feldspar-language",
          "partial": "Word",
          "signature": "BitWidth n-\u003eWordN-\u003eGenericInt U n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:fromWordN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "genericLen",
          "package": "feldspar-language",
          "signature": "BitWidth n -\u003e [a] -\u003e GenericInt U n",
          "source": "src/Feldspar-Core-Types.html#genericLen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "genericLen",
          "normalized": "BitWidth a-\u003e[b]-\u003eGenericInt U a",
          "package": "feldspar-language",
          "partial": "Len",
          "signature": "BitWidth n-\u003e[a]-\u003eGenericInt U n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:genericLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "resType",
          "package": "feldspar-language",
          "signature": "TypeRep (a -\u003e b) -\u003e TypeRep b",
          "source": "src/Feldspar-Core-Types.html#resType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "resType",
          "normalized": "TypeRep(a-\u003eb)-\u003eTypeRep b",
          "package": "feldspar-language",
          "partial": "Type",
          "signature": "TypeRep(a-\u003eb)-\u003eTypeRep b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:resType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "showTup",
          "package": "feldspar-language",
          "signature": "[String] -\u003e String",
          "source": "src/Feldspar-Core-Types.html#showTup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "showTup",
          "normalized": "[String]-\u003eString",
          "package": "feldspar-language",
          "partial": "Tup",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:showTup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType equality on \u003ccode\u003e\u003ca\u003eSignedness\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Core.Types",
          "name": "signEq",
          "package": "feldspar-language",
          "signature": "Signedness s1 -\u003e Signedness s2 -\u003e Maybe (TypeEq s1 s2)",
          "source": "src/Feldspar-Core-Types.html#signEq",
          "type": "function"
        },
        "index": {
          "description": "Type equality on Signedness",
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "signEq",
          "normalized": "Signedness a-\u003eSignedness a-\u003eMaybe(TypeEq a a)",
          "package": "feldspar-language",
          "partial": "Eq",
          "signature": "Signedness s-\u003eSignedness s-\u003eMaybe(TypeEq s s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:signEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "signedness",
          "package": "feldspar-language",
          "signature": "Signedness s -\u003e String",
          "source": "src/Feldspar-Core-Types.html#signedness",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "signedness",
          "normalized": "Signedness a-\u003eString",
          "package": "feldspar-language",
          "signature": "Signedness s-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:signedness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "sizeOf",
          "package": "feldspar-language",
          "signature": "a -\u003e Size a",
          "source": "src/Feldspar-Core-Types.html#sizeOf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "sizeOf",
          "normalized": "a-\u003eSize a",
          "package": "feldspar-language",
          "partial": "Of",
          "signature": "a-\u003eSize a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:sizeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast a \u003ccode\u003e\u003ca\u003eSize\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eRangeSet\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Core.Types",
          "name": "sizeToRange",
          "package": "feldspar-language",
          "signature": "Size a -\u003e RangeSet a",
          "source": "src/Feldspar-Core-Types.html#sizeToRange",
          "type": "function"
        },
        "index": {
          "description": "Cast Size to RangeSet",
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "sizeToRange",
          "normalized": "Size a-\u003eRangeSet a",
          "package": "feldspar-language",
          "partial": "To Range",
          "signature": "Size a-\u003eRangeSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:sizeToRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "tArr",
          "package": "feldspar-language",
          "signature": "Patch a a -\u003e Patch [a] [a]",
          "source": "src/Feldspar-Core-Types.html#tArr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "tArr",
          "normalized": "Patch a a-\u003ePatch[a][a]",
          "package": "feldspar-language",
          "partial": "Arr",
          "signature": "Patch a a-\u003ePatch[a][a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:tArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "tIndex",
          "package": "feldspar-language",
          "signature": "Patch Index Index",
          "source": "src/Feldspar-Core-Types.html#tIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "tIndex",
          "package": "feldspar-language",
          "partial": "Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:tIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "tIntN",
          "package": "feldspar-language",
          "signature": "Patch IntN IntN",
          "source": "src/Feldspar-Core-Types.html#tIntN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "tIntN",
          "package": "feldspar-language",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:tIntN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "tLength",
          "package": "feldspar-language",
          "signature": "Patch Length Length",
          "source": "src/Feldspar-Core-Types.html#tLength",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "tLength",
          "package": "feldspar-language",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:tLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "tWordN",
          "package": "feldspar-language",
          "signature": "Patch WordN WordN",
          "source": "src/Feldspar-Core-Types.html#tWordN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "tWordN",
          "package": "feldspar-language",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:tWordN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "toTarget",
          "package": "feldspar-language",
          "signature": "BitWidth n -\u003e a -\u003e TargetType n a",
          "source": "src/Feldspar-Core-Types.html#toTarget",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "toTarget",
          "normalized": "BitWidth a-\u003eb-\u003eTargetType a b",
          "package": "feldspar-language",
          "partial": "Target",
          "signature": "BitWidth n-\u003ea-\u003eTargetType n a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:toTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType equality on \u003ccode\u003e\u003ca\u003eTypeRep\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Core.Types",
          "name": "typeEq",
          "package": "feldspar-language",
          "signature": "TypeRep a -\u003e TypeRep b -\u003e Maybe (TypeEq a b)",
          "source": "src/Feldspar-Core-Types.html#typeEq",
          "type": "function"
        },
        "index": {
          "description": "Type equality on TypeRep",
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "typeEq",
          "normalized": "TypeRep a-\u003eTypeRep b-\u003eMaybe(TypeEq a b)",
          "package": "feldspar-language",
          "partial": "Eq",
          "signature": "TypeRep a-\u003eTypeRep b-\u003eMaybe(TypeEq a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:typeEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives the type representation a value.\n\u003c/p\u003e",
          "module": "Feldspar.Core.Types",
          "name": "typeRep",
          "package": "feldspar-language",
          "signature": "TypeRep a",
          "source": "src/Feldspar-Core-Types.html#typeRep",
          "type": "method"
        },
        "index": {
          "description": "Gives the type representation value",
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "typeRep",
          "package": "feldspar-language",
          "partial": "Rep",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:typeRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "typeRepByProxy",
          "package": "feldspar-language",
          "signature": "Proxy a -\u003e TypeRep a",
          "source": "src/Feldspar-Core-Types.html#typeRepByProxy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "typeRepByProxy",
          "normalized": "Proxy a-\u003eTypeRep a",
          "package": "feldspar-language",
          "partial": "Rep By Proxy",
          "signature": "Proxy a-\u003eTypeRep a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:typeRepByProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "unFVal",
          "package": "feldspar-language",
          "signature": "a",
          "source": "src/Feldspar-Core-Types.html#FVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "unFVal",
          "package": "feldspar-language",
          "partial": "FVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:unFVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Core.Types",
          "name": "voidTypeRep",
          "package": "feldspar-language",
          "signature": "TypeRep (m ())",
          "source": "src/Feldspar-Core-Types.html#voidTypeRep",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "voidTypeRep",
          "normalized": "TypeRep(a())",
          "package": "feldspar-language",
          "partial": "Type Rep",
          "signature": "TypeRep(m())",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:voidTypeRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType equality on \u003ccode\u003e\u003ca\u003eBitWidth\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Core.Types",
          "name": "widthEq",
          "package": "feldspar-language",
          "signature": "BitWidth n1 -\u003e BitWidth n2 -\u003e Maybe (TypeEq n1 n2)",
          "source": "src/Feldspar-Core-Types.html#widthEq",
          "type": "function"
        },
        "index": {
          "description": "Type equality on BitWidth",
          "hierarchy": "Feldspar Core Types",
          "module": "Feldspar.Core.Types",
          "name": "widthEq",
          "normalized": "BitWidth a-\u003eBitWidth a-\u003eMaybe(TypeEq a a)",
          "package": "feldspar-language",
          "partial": "Eq",
          "signature": "BitWidth n-\u003eBitWidth n-\u003eMaybe(TypeEq n n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core-Types.html#v:widthEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Feldspar core language\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Feldspar.Core",
          "name": "Core",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core.html",
          "type": "module"
        },
        "index": {
          "description": "The Feldspar core language",
          "hierarchy": "Feldspar Core",
          "module": "Feldspar.Core",
          "name": "Core",
          "package": "feldspar-language",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience alias for bounded integers\n\u003c/p\u003e",
          "module": "Feldspar.Core",
          "name": "BoundedInt",
          "package": "feldspar-language",
          "source": "src/Feldspar-Range.html#BoundedInt",
          "type": "class"
        },
        "index": {
          "description": "Convenience alias for bounded integers",
          "hierarchy": "Feldspar Core",
          "module": "Feldspar.Core",
          "name": "BoundedInt",
          "package": "feldspar-language",
          "partial": "Bounded Int",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core.html#t:BoundedInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplex numbers are an algebraic type.\n\u003c/p\u003e\u003cp\u003eFor a complex number \u003ccode\u003ez\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e z\u003c/code\u003e is a number with the magnitude of \u003ccode\u003ez\u003c/code\u003e,\n but oriented in the positive real direction, whereas \u003ccode\u003e\u003ccode\u003e\u003ca\u003esignum\u003c/a\u003e\u003c/code\u003e z\u003c/code\u003e\n has the phase of \u003ccode\u003ez\u003c/code\u003e, but unit magnitude.\n\u003c/p\u003e",
          "module": "Feldspar.Core",
          "name": "Complex",
          "package": "feldspar-language",
          "type": "data"
        },
        "index": {
          "description": "Complex numbers are an algebraic type For complex number abs is number with the magnitude of but oriented in the positive real direction whereas signum has the phase of but unit magnitude",
          "hierarchy": "Feldspar Core",
          "module": "Feldspar.Core",
          "name": "Complex",
          "package": "feldspar-language",
          "partial": "Complex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core.html#t:Complex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bounded range of values of type \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Core",
          "name": "Range",
          "package": "feldspar-language",
          "source": "src/Feldspar-Range.html#Range",
          "type": "data"
        },
        "index": {
          "description": "bounded range of values of type",
          "hierarchy": "Feldspar Core",
          "module": "Feldspar.Core",
          "name": "Range",
          "package": "feldspar-language",
          "partial": "Range",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core.html#t:Range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eforms a complex number from its real and imaginary\n rectangular components.\n\u003c/p\u003e",
          "module": "Feldspar.Core",
          "name": ":+",
          "package": "feldspar-language",
          "signature": "a :+ !a",
          "type": "function"
        },
        "index": {
          "description": "forms complex number from its real and imaginary rectangular components",
          "hierarchy": "Feldspar Core",
          "module": "Feldspar.Core",
          "name": ":+",
          "package": "feldspar-language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core.html#v::-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Feldspar.Core\",\"Feldspar.Range\"]",
          "name": "Range",
          "package": "feldspar-language",
          "signature": "Range",
          "source": "src/Feldspar-Range.html#Range",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core.html#v:Range\",\"http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:Range\"]"
        },
        "index": {
          "hierarchy": "Feldspar Core",
          "module": "Feldspar.Core",
          "name": "Range",
          "package": "feldspar-language",
          "partial": "Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core.html#v:Range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Feldspar.Core\",\"Feldspar.Range\"]",
          "name": "lowerBound",
          "package": "feldspar-language",
          "signature": "a",
          "source": "src/Feldspar-Range.html#Range",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core.html#v:lowerBound\",\"http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:lowerBound\"]"
        },
        "index": {
          "hierarchy": "Feldspar Core",
          "module": "Feldspar.Core",
          "name": "lowerBound",
          "package": "feldspar-language",
          "partial": "Bound",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core.html#v:lowerBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Feldspar.Core\",\"Feldspar.Range\"]",
          "name": "upperBound",
          "package": "feldspar-language",
          "signature": "a",
          "source": "src/Feldspar-Range.html#Range",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core.html#v:upperBound\",\"http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:upperBound\"]"
        },
        "index": {
          "hierarchy": "Feldspar Core",
          "module": "Feldspar.Core",
          "name": "upperBound",
          "package": "feldspar-language",
          "partial": "Bound",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Core.html#v:upperBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.FixedPoint",
          "name": "FixedPoint",
          "package": "feldspar-language",
          "source": "src/Feldspar-FixedPoint.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar FixedPoint",
          "module": "Feldspar.FixedPoint",
          "name": "FixedPoint",
          "package": "feldspar-language",
          "partial": "Fixed Point",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-FixedPoint.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract real number type with exponent and mantissa\n\u003c/p\u003e",
          "module": "Feldspar.FixedPoint",
          "name": "Fix",
          "package": "feldspar-language",
          "source": "src/Feldspar-FixedPoint.html#Fix",
          "type": "data"
        },
        "index": {
          "description": "Abstract real number type with exponent and mantissa",
          "hierarchy": "Feldspar FixedPoint",
          "module": "Feldspar.FixedPoint",
          "name": "Fix",
          "package": "feldspar-language",
          "partial": "Fix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-FixedPoint.html#t:Fix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperations to get and set exponent\n\u003c/p\u003e",
          "module": "Feldspar.FixedPoint",
          "name": "Fixable",
          "package": "feldspar-language",
          "source": "src/Feldspar-FixedPoint.html#Fixable",
          "type": "class"
        },
        "index": {
          "description": "Operations to get and set exponent",
          "hierarchy": "Feldspar FixedPoint",
          "module": "Feldspar.FixedPoint",
          "name": "Fixable",
          "package": "feldspar-language",
          "partial": "Fixable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-FixedPoint.html#t:Fixable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of branching for fixed point algorithms\n\u003c/p\u003e",
          "module": "Feldspar.FixedPoint",
          "name": "(?!)",
          "package": "feldspar-language",
          "signature": "Data Bool -\u003e (a, a) -\u003e a",
          "source": "src/Feldspar-FixedPoint.html#%3F%21",
          "type": "function"
        },
        "index": {
          "description": "version of branching for fixed point algorithms",
          "hierarchy": "Feldspar FixedPoint",
          "module": "Feldspar.FixedPoint",
          "name": "(?!) ?!",
          "normalized": "Data Bool-\u003e(a,a)-\u003ea",
          "package": "feldspar-language",
          "signature": "Data Bool-\u003e(a,a)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-FixedPoint.html#v:-63--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.FixedPoint",
          "name": "Fix",
          "package": "feldspar-language",
          "signature": "Fix",
          "source": "src/Feldspar-FixedPoint.html#Fix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar FixedPoint",
          "module": "Feldspar.FixedPoint",
          "name": "Fix",
          "package": "feldspar-language",
          "partial": "Fix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-FixedPoint.html#v:Fix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.FixedPoint",
          "name": "exponent",
          "package": "feldspar-language",
          "signature": "Data IntN",
          "source": "src/Feldspar-FixedPoint.html#Fix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar FixedPoint",
          "module": "Feldspar.FixedPoint",
          "name": "exponent",
          "package": "feldspar-language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-FixedPoint.html#v:exponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.FixedPoint",
          "name": "fix",
          "package": "feldspar-language",
          "signature": "Data IntN -\u003e t -\u003e t",
          "source": "src/Feldspar-FixedPoint.html#fix",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar FixedPoint",
          "module": "Feldspar.FixedPoint",
          "name": "fix",
          "normalized": "Data IntN-\u003ea-\u003ea",
          "package": "feldspar-language",
          "signature": "Data IntN-\u003et-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-FixedPoint.html#v:fix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of vector fold for fixed point algorithms\n\u003c/p\u003e",
          "module": "Feldspar.FixedPoint",
          "name": "fixFold",
          "package": "feldspar-language",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Vector b -\u003e a",
          "source": "src/Feldspar-FixedPoint.html#fixFold",
          "type": "function"
        },
        "index": {
          "description": "version of vector fold for fixed point algorithms",
          "hierarchy": "Feldspar FixedPoint",
          "module": "Feldspar.FixedPoint",
          "name": "fixFold",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eVector b-\u003ea",
          "package": "feldspar-language",
          "partial": "Fold",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eVector b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-FixedPoint.html#v:fixFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an abstract real number to a pair of exponent and mantissa\n\u003c/p\u003e",
          "module": "Feldspar.FixedPoint",
          "name": "freezeFix",
          "package": "feldspar-language",
          "signature": "Fix a -\u003e (Data IntN, Data a)",
          "source": "src/Feldspar-FixedPoint.html#freezeFix",
          "type": "function"
        },
        "index": {
          "description": "Converts an abstract real number to pair of exponent and mantissa",
          "hierarchy": "Feldspar FixedPoint",
          "module": "Feldspar.FixedPoint",
          "name": "freezeFix",
          "normalized": "Fix a-\u003e(Data IntN,Data a)",
          "package": "feldspar-language",
          "partial": "Fix",
          "signature": "Fix a-\u003e(Data IntN,Data a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-FixedPoint.html#v:freezeFix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an abstract real number to fixed point integer with given exponent\n\u003c/p\u003e",
          "module": "Feldspar.FixedPoint",
          "name": "freezeFix'",
          "package": "feldspar-language",
          "signature": "IntN -\u003e Fix a -\u003e Data a",
          "source": "src/Feldspar-FixedPoint.html#freezeFix%27",
          "type": "function"
        },
        "index": {
          "description": "Converts an abstract real number to fixed point integer with given exponent",
          "hierarchy": "Feldspar FixedPoint",
          "module": "Feldspar.FixedPoint",
          "name": "freezeFix'",
          "normalized": "IntN-\u003eFix a-\u003eData a",
          "package": "feldspar-language",
          "partial": "Fix'",
          "signature": "IntN-\u003eFix a-\u003eData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-FixedPoint.html#v:freezeFix-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.FixedPoint",
          "name": "getExp",
          "package": "feldspar-language",
          "signature": "t -\u003e Data IntN",
          "source": "src/Feldspar-FixedPoint.html#getExp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar FixedPoint",
          "module": "Feldspar.FixedPoint",
          "name": "getExp",
          "normalized": "a-\u003eData IntN",
          "package": "feldspar-language",
          "partial": "Exp",
          "signature": "t-\u003eData IntN",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-FixedPoint.html#v:getExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.FixedPoint",
          "name": "mantissa",
          "package": "feldspar-language",
          "signature": "Data a",
          "source": "src/Feldspar-FixedPoint.html#Fix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar FixedPoint",
          "module": "Feldspar.FixedPoint",
          "name": "mantissa",
          "package": "feldspar-language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-FixedPoint.html#v:mantissa"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a pair of exponent and mantissa to an abstract real number\n\u003c/p\u003e",
          "module": "Feldspar.FixedPoint",
          "name": "unfreezeFix",
          "package": "feldspar-language",
          "signature": "(Data IntN, Data a) -\u003e Fix a",
          "source": "src/Feldspar-FixedPoint.html#unfreezeFix",
          "type": "function"
        },
        "index": {
          "description": "Converts pair of exponent and mantissa to an abstract real number",
          "hierarchy": "Feldspar FixedPoint",
          "module": "Feldspar.FixedPoint",
          "name": "unfreezeFix",
          "normalized": "(Data IntN,Data a)-\u003eFix a",
          "package": "feldspar-language",
          "partial": "Fix",
          "signature": "(Data IntN,Data a)-\u003eFix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-FixedPoint.html#v:unfreezeFix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a fixed point integer with given exponent to an abstract real number\n\u003c/p\u003e",
          "module": "Feldspar.FixedPoint",
          "name": "unfreezeFix'",
          "package": "feldspar-language",
          "signature": "IntN -\u003e Data a -\u003e Fix a",
          "source": "src/Feldspar-FixedPoint.html#unfreezeFix%27",
          "type": "function"
        },
        "index": {
          "description": "Converts fixed point integer with given exponent to an abstract real number",
          "hierarchy": "Feldspar FixedPoint",
          "module": "Feldspar.FixedPoint",
          "name": "unfreezeFix'",
          "normalized": "IntN-\u003eData a-\u003eFix a",
          "package": "feldspar-language",
          "partial": "Fix'",
          "signature": "IntN-\u003eData a-\u003eFix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-FixedPoint.html#v:unfreezeFix-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Future",
          "name": "Future",
          "package": "feldspar-language",
          "source": "src/Feldspar-Future.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Future",
          "module": "Feldspar.Future",
          "name": "Future",
          "package": "feldspar-language",
          "partial": "Future",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Future.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Future",
          "name": "withFuture",
          "package": "feldspar-language",
          "signature": "a -\u003e (Future a -\u003e b) -\u003e b",
          "source": "src/Feldspar-Future.html#withFuture",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Future",
          "module": "Feldspar.Future",
          "name": "withFuture",
          "normalized": "a-\u003e(Future a-\u003eb)-\u003eb",
          "package": "feldspar-language",
          "partial": "Future",
          "signature": "a-\u003e(Future a-\u003eb)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Future.html#v:withFuture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Future",
          "name": "withFutures",
          "package": "feldspar-language",
          "signature": "Vector a -\u003e (Vector (Future a) -\u003e b) -\u003e b",
          "source": "src/Feldspar-Future.html#withFutures",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Future",
          "module": "Feldspar.Future",
          "name": "withFutures",
          "normalized": "Vector a-\u003e(Vector(Future a)-\u003eb)-\u003eb",
          "package": "feldspar-language",
          "partial": "Futures",
          "signature": "Vector a-\u003e(Vector(Future a)-\u003eb)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Future.html#v:withFutures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneral operations on sets\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Feldspar.Lattice",
          "name": "Lattice",
          "package": "feldspar-language",
          "source": "src/Feldspar-Lattice.html",
          "type": "module"
        },
        "index": {
          "description": "General operations on sets",
          "hierarchy": "Feldspar Lattice",
          "module": "Feldspar.Lattice",
          "name": "Lattice",
          "package": "feldspar-language",
          "partial": "Lattice",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Lattice.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLattice types\n\u003c/p\u003e",
          "module": "Feldspar.Lattice",
          "name": "Lattice",
          "package": "feldspar-language",
          "source": "src/Feldspar-Lattice.html#Lattice",
          "type": "class"
        },
        "index": {
          "description": "Lattice types",
          "hierarchy": "Feldspar Lattice",
          "module": "Feldspar.Lattice",
          "name": "Lattice",
          "package": "feldspar-language",
          "partial": "Lattice",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Lattice.html#t:Lattice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of widening operators. A widening operator modifies a\n   function that is subject to fixed point analysis. A widening\n   operator introduces approximations in order to guarantee (fast)\n   termination of the fixed point analysis.\n\u003c/p\u003e",
          "module": "Feldspar.Lattice",
          "name": "Widening",
          "package": "feldspar-language",
          "source": "src/Feldspar-Lattice.html#Widening",
          "type": "type"
        },
        "index": {
          "description": "The type of widening operators widening operator modifies function that is subject to fixed point analysis widening operator introduces approximations in order to guarantee fast termination of the fixed point analysis",
          "hierarchy": "Feldspar Lattice",
          "module": "Feldspar.Lattice",
          "name": "Widening",
          "package": "feldspar-language",
          "partial": "Widening",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Lattice.html#t:Widening"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntersection\n\u003c/p\u003e",
          "module": "Feldspar.Lattice",
          "name": "(/\\)",
          "package": "feldspar-language",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Feldspar-Lattice.html#%2F%5C",
          "type": "method"
        },
        "index": {
          "description": "Intersection",
          "hierarchy": "Feldspar Lattice",
          "module": "Feldspar.Lattice",
          "name": "(/\\) /\\",
          "normalized": "a-\u003ea-\u003ea",
          "package": "feldspar-language",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Lattice.html#v:-47--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnion\n\u003c/p\u003e",
          "module": "Feldspar.Lattice",
          "name": "(\\/)",
          "package": "feldspar-language",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Feldspar-Lattice.html#%5C%2F",
          "type": "method"
        },
        "index": {
          "description": "Union",
          "hierarchy": "Feldspar Lattice",
          "module": "Feldspar.Lattice",
          "name": "(\\/) \\/",
          "normalized": "a-\u003ea-\u003ea",
          "package": "feldspar-language",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Lattice.html#v:-92--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bounded version of \u003ccode\u003e\u003ca\u003elensedFixedPoint\u003c/a\u003e\u003c/code\u003e. It will always do at least one\n iteration regardless of the provided bound (in order to return something of\n the right type).\n\u003c/p\u003e",
          "module": "Feldspar.Lattice",
          "name": "boundedLensedFixedPoint",
          "package": "feldspar-language",
          "signature": "Int -\u003e Lens a lat -\u003e Lens b lat -\u003e (a -\u003e b) -\u003e a -\u003e (b, Int)",
          "source": "src/Feldspar-Lattice.html#boundedLensedFixedPoint",
          "type": "function"
        },
        "index": {
          "description": "bounded version of lensedFixedPoint It will always do at least one iteration regardless of the provided bound in order to return something of the right type",
          "hierarchy": "Feldspar Lattice",
          "module": "Feldspar.Lattice",
          "name": "boundedLensedFixedPoint",
          "normalized": "Int-\u003eLens a b-\u003eLens c b-\u003e(a-\u003ec)-\u003ea-\u003e(c,Int)",
          "package": "feldspar-language",
          "partial": "Lensed Fixed Point",
          "signature": "Int-\u003eLens a lat-\u003eLens b lat-\u003e(a-\u003eb)-\u003ea-\u003e(b,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Lattice.html#v:boundedLensedFixedPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA widening operator which defaults to \u003ccode\u003e\u003ca\u003euniversal\u003c/a\u003e\u003c/code\u003e when the number of\n   iterations goes over the specified value.\n\u003c/p\u003e",
          "module": "Feldspar.Lattice",
          "name": "cutOffAt",
          "package": "feldspar-language",
          "signature": "Int -\u003e Widening a",
          "source": "src/Feldspar-Lattice.html#cutOffAt",
          "type": "function"
        },
        "index": {
          "description": "widening operator which defaults to universal when the number of iterations goes over the specified value",
          "hierarchy": "Feldspar Lattice",
          "module": "Feldspar.Lattice",
          "name": "cutOffAt",
          "normalized": "Int-\u003eWidening a",
          "package": "feldspar-language",
          "partial": "Off At",
          "signature": "Int-\u003eWidening a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Lattice.html#v:cutOffAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Lattice",
          "name": "empty",
          "package": "feldspar-language",
          "signature": "a",
          "source": "src/Feldspar-Lattice.html#empty",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Lattice",
          "module": "Feldspar.Lattice",
          "name": "empty",
          "package": "feldspar-language",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Lattice.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the fixed point of a function. The second argument is an initial\n  element. A sensible default for the initial element is \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe function is not required to be monotonic. It is made monotonic internally\n by always taking the union of the result and the previous value.\n\u003c/p\u003e",
          "module": "Feldspar.Lattice",
          "name": "fixedPoint",
          "package": "feldspar-language",
          "signature": "(a -\u003e a) -\u003e a -\u003e a",
          "source": "src/Feldspar-Lattice.html#fixedPoint",
          "type": "function"
        },
        "index": {
          "description": "Take the fixed point of function The second argument is an initial element sensible default for the initial element is empty The function is not required to be monotonic It is made monotonic internally by always taking the union of the result and the previous value",
          "hierarchy": "Feldspar Lattice",
          "module": "Feldspar.Lattice",
          "name": "fixedPoint",
          "normalized": "(a-\u003ea)-\u003ea-\u003ea",
          "package": "feldspar-language",
          "partial": "Point",
          "signature": "(a-\u003ea)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Lattice.html#v:fixedPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMuch like \u003ccode\u003e\u003ca\u003efixedPoint\u003c/a\u003e\u003c/code\u003e but keeps track of the number of iterations\n   in the fixed point iteration. Useful for defining widening operators.\n\u003c/p\u003e",
          "module": "Feldspar.Lattice",
          "name": "indexedFixedPoint",
          "package": "feldspar-language",
          "signature": "(Int -\u003e a -\u003e a) -\u003e a -\u003e (a, Int)",
          "source": "src/Feldspar-Lattice.html#indexedFixedPoint",
          "type": "function"
        },
        "index": {
          "description": "Much like fixedPoint but keeps track of the number of iterations in the fixed point iteration Useful for defining widening operators",
          "hierarchy": "Feldspar Lattice",
          "module": "Feldspar.Lattice",
          "name": "indexedFixedPoint",
          "normalized": "(Int-\u003ea-\u003ea)-\u003ea-\u003e(a,Int)",
          "package": "feldspar-language",
          "partial": "Fixed Point",
          "signature": "(Int-\u003ea-\u003ea)-\u003ea-\u003e(a,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Lattice.html#v:indexedFixedPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccumulated intersection\n\u003c/p\u003e",
          "module": "Feldspar.Lattice",
          "name": "intersections",
          "package": "feldspar-language",
          "signature": "[a] -\u003e a",
          "source": "src/Feldspar-Lattice.html#intersections",
          "type": "function"
        },
        "index": {
          "description": "Accumulated intersection",
          "hierarchy": "Feldspar Lattice",
          "module": "Feldspar.Lattice",
          "name": "intersections",
          "normalized": "[a]-\u003ea",
          "package": "feldspar-language",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Lattice.html#v:intersections"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralization of \u003ccode\u003e\u003ca\u003efixedPoint\u003c/a\u003e\u003c/code\u003e to functions whose argument and result\n contain (i.e has a lens to) a common lattice\n\u003c/p\u003e",
          "module": "Feldspar.Lattice",
          "name": "lensedFixedPoint",
          "package": "feldspar-language",
          "signature": "Lens a lat -\u003e Lens b lat -\u003e (a -\u003e b) -\u003e a -\u003e b",
          "source": "src/Feldspar-Lattice.html#lensedFixedPoint",
          "type": "function"
        },
        "index": {
          "description": "Generalization of fixedPoint to functions whose argument and result contain i.e has lens to common lattice",
          "hierarchy": "Feldspar Lattice",
          "module": "Feldspar.Lattice",
          "name": "lensedFixedPoint",
          "normalized": "Lens a b-\u003eLens c b-\u003e(a-\u003ec)-\u003ea-\u003ec",
          "package": "feldspar-language",
          "partial": "Fixed Point",
          "signature": "Lens a lat-\u003eLens b lat-\u003e(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Lattice.html#v:lensedFixedPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralization of \u003ccode\u003e\u003ca\u003eindexedFixedPoint\u003c/a\u003e\u003c/code\u003e to functions whose argument and\n result contain (i.e has a lens to) a common lattice\n\u003c/p\u003e",
          "module": "Feldspar.Lattice",
          "name": "lensedIndexedFixedPoint",
          "package": "feldspar-language",
          "signature": "Lens a lat -\u003e Lens b lat -\u003e (Int -\u003e a -\u003e b) -\u003e a -\u003e (b, Int)",
          "source": "src/Feldspar-Lattice.html#lensedIndexedFixedPoint",
          "type": "function"
        },
        "index": {
          "description": "Generalization of indexedFixedPoint to functions whose argument and result contain i.e has lens to common lattice",
          "hierarchy": "Feldspar Lattice",
          "module": "Feldspar.Lattice",
          "name": "lensedIndexedFixedPoint",
          "normalized": "Lens a b-\u003eLens c b-\u003e(Int-\u003ea-\u003ec)-\u003ea-\u003e(c,Int)",
          "package": "feldspar-language",
          "partial": "Indexed Fixed Point",
          "signature": "Lens a lat-\u003eLens b lat-\u003e(Int-\u003ea-\u003eb)-\u003ea-\u003e(b,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Lattice.html#v:lensedIndexedFixedPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccumulated union\n\u003c/p\u003e",
          "module": "Feldspar.Lattice",
          "name": "unions",
          "package": "feldspar-language",
          "signature": "[a] -\u003e a",
          "source": "src/Feldspar-Lattice.html#unions",
          "type": "function"
        },
        "index": {
          "description": "Accumulated union",
          "hierarchy": "Feldspar Lattice",
          "module": "Feldspar.Lattice",
          "name": "unions",
          "normalized": "[a]-\u003ea",
          "package": "feldspar-language",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Lattice.html#v:unions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Lattice",
          "name": "universal",
          "package": "feldspar-language",
          "signature": "a",
          "source": "src/Feldspar-Lattice.html#universal",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Lattice",
          "module": "Feldspar.Lattice",
          "name": "universal",
          "package": "feldspar-language",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Lattice.html#v:universal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOperations on matrices (doubly-nested parallel vectors). All operations in\n this module assume rectangular matrices.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Feldspar.Matrix",
          "name": "Matrix",
          "package": "feldspar-language",
          "source": "src/Feldspar-Matrix.html",
          "type": "module"
        },
        "index": {
          "description": "Operations on matrices doubly-nested parallel vectors All operations in this module assume rectangular matrices",
          "hierarchy": "Feldspar Matrix",
          "module": "Feldspar.Matrix",
          "name": "Matrix",
          "package": "feldspar-language",
          "partial": "Matrix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Matrix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Matrix",
          "name": "ElemWise",
          "package": "feldspar-language",
          "source": "src/Feldspar-Matrix.html#ElemWise",
          "type": "class"
        },
        "index": {
          "hierarchy": "Feldspar Matrix",
          "module": "Feldspar.Matrix",
          "name": "ElemWise",
          "package": "feldspar-language",
          "partial": "Elem Wise",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Matrix.html#t:ElemWise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Matrix",
          "name": "Matrix",
          "package": "feldspar-language",
          "source": "src/Feldspar-Matrix.html#Matrix",
          "type": "type"
        },
        "index": {
          "hierarchy": "Feldspar Matrix",
          "module": "Feldspar.Matrix",
          "name": "Matrix",
          "package": "feldspar-language",
          "partial": "Matrix",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Matrix.html#t:Matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Matrix",
          "name": "Mul",
          "package": "feldspar-language",
          "source": "src/Feldspar-Matrix.html#Mul",
          "type": "class"
        },
        "index": {
          "hierarchy": "Feldspar Matrix",
          "module": "Feldspar.Matrix",
          "name": "Mul",
          "package": "feldspar-language",
          "partial": "Mul",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Matrix.html#t:Mul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral multiplication operator\n\u003c/p\u003e",
          "module": "Feldspar.Matrix",
          "name": "(***)",
          "package": "feldspar-language",
          "signature": "a -\u003e b -\u003e Prod a b",
          "source": "src/Feldspar-Matrix.html#%2A%2A%2A",
          "type": "method"
        },
        "index": {
          "description": "General multiplication operator",
          "hierarchy": "Feldspar Matrix",
          "module": "Feldspar.Matrix",
          "name": "(***) ***",
          "normalized": "a-\u003eb-\u003eProd a b",
          "package": "feldspar-language",
          "signature": "a-\u003eb-\u003eProd a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Matrix.html#v:-42--42--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Matrix",
          "name": "(.*)",
          "package": "feldspar-language",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Feldspar-Matrix.html#.%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Matrix",
          "module": "Feldspar.Matrix",
          "name": "(.*) .*",
          "normalized": "a-\u003ea-\u003ea",
          "package": "feldspar-language",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Matrix.html#v:.-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Matrix",
          "name": "(.+)",
          "package": "feldspar-language",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Feldspar-Matrix.html#.%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Matrix",
          "module": "Feldspar.Matrix",
          "name": "(.+) .+",
          "normalized": "a-\u003ea-\u003ea",
          "package": "feldspar-language",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Matrix.html#v:.-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Matrix",
          "name": "(.-)",
          "package": "feldspar-language",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Feldspar-Matrix.html#.-",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Matrix",
          "module": "Feldspar.Matrix",
          "name": "(.-) .-",
          "normalized": "a-\u003ea-\u003ea",
          "package": "feldspar-language",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Matrix.html#v:.-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe diagonal vector of a square matrix. It happens to work if the number of\n rows is less than the number of columns, but not the other way around (this\n would require some overhead).\n\u003c/p\u003e",
          "module": "Feldspar.Matrix",
          "name": "diagonal",
          "package": "feldspar-language",
          "signature": "Matrix a -\u003e Vector (Data a)",
          "source": "src/Feldspar-Matrix.html#diagonal",
          "type": "function"
        },
        "index": {
          "description": "The diagonal vector of square matrix It happens to work if the number of rows is less than the number of columns but not the other way around this would require some overhead",
          "hierarchy": "Feldspar Matrix",
          "module": "Feldspar.Matrix",
          "name": "diagonal",
          "normalized": "Matrix a-\u003eVector(Data a)",
          "package": "feldspar-language",
          "signature": "Matrix a-\u003eVector(Data a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Matrix.html#v:diagonal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Matrix",
          "name": "distributeL",
          "package": "feldspar-language",
          "signature": "(a -\u003e b -\u003e c) -\u003e a -\u003e Vector b -\u003e Vector c",
          "source": "src/Feldspar-Matrix.html#distributeL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Matrix",
          "module": "Feldspar.Matrix",
          "name": "distributeL",
          "normalized": "(a-\u003eb-\u003ec)-\u003ea-\u003eVector b-\u003eVector c",
          "package": "feldspar-language",
          "signature": "(a-\u003eb-\u003ec)-\u003ea-\u003eVector b-\u003eVector c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Matrix.html#v:distributeL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Matrix",
          "name": "distributeR",
          "package": "feldspar-language",
          "signature": "(a -\u003e b -\u003e c) -\u003e Vector a -\u003e b -\u003e Vector c",
          "source": "src/Feldspar-Matrix.html#distributeR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Matrix",
          "module": "Feldspar.Matrix",
          "name": "distributeR",
          "normalized": "(a-\u003eb-\u003ec)-\u003eVector a-\u003eb-\u003eVector c",
          "package": "feldspar-language",
          "signature": "(a-\u003eb-\u003ec)-\u003eVector a-\u003eb-\u003eVector c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Matrix.html#v:distributeR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator for general element-wise multiplication\n\u003c/p\u003e",
          "module": "Feldspar.Matrix",
          "name": "elemWise",
          "package": "feldspar-language",
          "signature": "(Scalar a -\u003e Scalar a -\u003e Scalar a) -\u003e a -\u003e a -\u003e a",
          "source": "src/Feldspar-Matrix.html#elemWise",
          "type": "method"
        },
        "index": {
          "description": "Operator for general element-wise multiplication",
          "hierarchy": "Feldspar Matrix",
          "module": "Feldspar.Matrix",
          "name": "elemWise",
          "normalized": "(Scalar a-\u003eScalar a-\u003eScalar a)-\u003ea-\u003ea-\u003ea",
          "package": "feldspar-language",
          "partial": "Wise",
          "signature": "(Scalar a-\u003eScalar a-\u003eScalar a)-\u003ea-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Matrix.html#v:elemWise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenates the rows of a matrix.\n\u003c/p\u003e",
          "module": "Feldspar.Matrix",
          "name": "flatten",
          "package": "feldspar-language",
          "signature": "Matrix a -\u003e Vector (Data a)",
          "source": "src/Feldspar-Matrix.html#flatten",
          "type": "function"
        },
        "index": {
          "description": "Concatenates the rows of matrix",
          "hierarchy": "Feldspar Matrix",
          "module": "Feldspar.Matrix",
          "name": "flatten",
          "normalized": "Matrix a-\u003eVector(Data a)",
          "package": "feldspar-language",
          "signature": "Matrix a-\u003eVector(Data a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Matrix.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a matrix to a core array.\n\u003c/p\u003e",
          "module": "Feldspar.Matrix",
          "name": "freezeMatrix",
          "package": "feldspar-language",
          "signature": "Matrix a -\u003e Data [[a]]",
          "source": "src/Feldspar-Matrix.html#freezeMatrix",
          "type": "function"
        },
        "index": {
          "description": "Converts matrix to core array",
          "hierarchy": "Feldspar Matrix",
          "module": "Feldspar.Matrix",
          "name": "freezeMatrix",
          "normalized": "Matrix a-\u003eData[[a]]",
          "package": "feldspar-language",
          "partial": "Matrix",
          "signature": "Matrix a-\u003eData[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Matrix.html#v:freezeMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructing a matrix from an index function.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eindexedMat m n ixf\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e is the number of rows.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003en\u003c/code\u003e is the number of columns.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eifx\u003c/code\u003e is a function mapping indexes to elements (first argument is row\n     index; second argument is column index).\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Feldspar.Matrix",
          "name": "indexedMat",
          "package": "feldspar-language",
          "signature": "Data Length -\u003e Data Length -\u003e (Data Index -\u003e Data Index -\u003e Data a) -\u003e Matrix a",
          "source": "src/Feldspar-Matrix.html#indexedMat",
          "type": "function"
        },
        "index": {
          "description": "Constructing matrix from an index function indexedMat ixf is the number of rows is the number of columns ifx is function mapping indexes to elements first argument is row index second argument is column index",
          "hierarchy": "Feldspar Matrix",
          "module": "Feldspar.Matrix",
          "name": "indexedMat",
          "normalized": "Data Length-\u003eData Length-\u003e(Data Index-\u003eData Index-\u003eData a)-\u003eMatrix a",
          "package": "feldspar-language",
          "partial": "Mat",
          "signature": "Data Length-\u003eData Length-\u003e(Data Index-\u003eData Index-\u003eData a)-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Matrix.html#v:indexedMat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a matrix. The elements are stored in a core array.\n\u003c/p\u003e",
          "module": "Feldspar.Matrix",
          "name": "matrix",
          "package": "feldspar-language",
          "signature": "[[a]] -\u003e Matrix a",
          "source": "src/Feldspar-Matrix.html#matrix",
          "type": "function"
        },
        "index": {
          "description": "Constructs matrix The elements are stored in core array",
          "hierarchy": "Feldspar Matrix",
          "module": "Feldspar.Matrix",
          "name": "matrix",
          "normalized": "[[a]]-\u003eMatrix a",
          "package": "feldspar-language",
          "signature": "[[a]]-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Matrix.html#v:matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatrix multiplication\n\u003c/p\u003e",
          "module": "Feldspar.Matrix",
          "name": "mulMat",
          "package": "feldspar-language",
          "signature": "Matrix a -\u003e Matrix a -\u003e Matrix a",
          "source": "src/Feldspar-Matrix.html#mulMat",
          "type": "function"
        },
        "index": {
          "description": "Matrix multiplication",
          "hierarchy": "Feldspar Matrix",
          "module": "Feldspar.Matrix",
          "name": "mulMat",
          "normalized": "Matrix a-\u003eMatrix a-\u003eMatrix a",
          "package": "feldspar-language",
          "partial": "Mat",
          "signature": "Matrix a-\u003eMatrix a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Matrix.html#v:mulMat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Matrix",
          "name": "tMat",
          "package": "feldspar-language",
          "signature": "Patch a a -\u003e Patch (Matrix a) (Matrix a)",
          "source": "src/Feldspar-Matrix.html#tMat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Matrix",
          "module": "Feldspar.Matrix",
          "name": "tMat",
          "normalized": "Patch a a-\u003ePatch(Matrix a)(Matrix a)",
          "package": "feldspar-language",
          "partial": "Mat",
          "signature": "Patch a a-\u003ePatch(Matrix a)(Matrix a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Matrix.html#v:tMat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a core array to a matrix.\n\u003c/p\u003e",
          "module": "Feldspar.Matrix",
          "name": "thawMatrix",
          "package": "feldspar-language",
          "signature": "Data [[a]] -\u003e Matrix a",
          "source": "src/Feldspar-Matrix.html#thawMatrix",
          "type": "function"
        },
        "index": {
          "description": "Converts core array to matrix",
          "hierarchy": "Feldspar Matrix",
          "module": "Feldspar.Matrix",
          "name": "thawMatrix",
          "normalized": "Data[[a]]-\u003eMatrix a",
          "package": "feldspar-language",
          "partial": "Matrix",
          "signature": "Data[[a]]-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Matrix.html#v:thawMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a core array to a matrix. The first length argument is the number\n of rows (outer vector), and the second argument is the number of columns\n (inner vector).\n\u003c/p\u003e",
          "module": "Feldspar.Matrix",
          "name": "thawMatrix'",
          "package": "feldspar-language",
          "signature": "Length -\u003e Length -\u003e Data [[a]] -\u003e Matrix a",
          "source": "src/Feldspar-Matrix.html#thawMatrix%27",
          "type": "function"
        },
        "index": {
          "description": "Converts core array to matrix The first length argument is the number of rows outer vector and the second argument is the number of columns inner vector",
          "hierarchy": "Feldspar Matrix",
          "module": "Feldspar.Matrix",
          "name": "thawMatrix'",
          "normalized": "Length-\u003eLength-\u003eData[[a]]-\u003eMatrix a",
          "package": "feldspar-language",
          "partial": "Matrix'",
          "signature": "Length-\u003eLength-\u003eData[[a]]-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Matrix.html#v:thawMatrix-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranspose of a matrix. Assumes that the number of rows is \u003e 0.\n\u003c/p\u003e",
          "module": "Feldspar.Matrix",
          "name": "transpose",
          "package": "feldspar-language",
          "signature": "Matrix a -\u003e Matrix a",
          "source": "src/Feldspar-Matrix.html#transpose",
          "type": "function"
        },
        "index": {
          "description": "Transpose of matrix Assumes that the number of rows is",
          "hierarchy": "Feldspar Matrix",
          "module": "Feldspar.Matrix",
          "name": "transpose",
          "normalized": "Matrix a-\u003eMatrix a",
          "package": "feldspar-language",
          "signature": "Matrix a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Matrix.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Option",
          "name": "Option",
          "package": "feldspar-language",
          "source": "src/Feldspar-Option.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Option",
          "module": "Feldspar.Option",
          "name": "Option",
          "package": "feldspar-language",
          "partial": "Option",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Option.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Option",
          "name": "Option",
          "package": "feldspar-language",
          "source": "src/Feldspar-Option.html#Option",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Option",
          "module": "Feldspar.Option",
          "name": "Option",
          "package": "feldspar-language",
          "partial": "Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Option.html#t:Option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Option",
          "name": "(\u003c?)",
          "package": "feldspar-language",
          "signature": "a -\u003e Option a -\u003e a",
          "source": "src/Feldspar-Option.html#%3C%3F",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Option",
          "module": "Feldspar.Option",
          "name": "(\u003c?) \u003c?",
          "normalized": "a-\u003eOption a-\u003ea",
          "package": "feldspar-language",
          "signature": "a-\u003eOption a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Option.html#v:-60--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditional choice operator. Can be used together with \u003ccode\u003e\u003ca\u003e\u003c?\u003c/a\u003e\u003c/code\u003e to write\n guarded choices as follows:\n\u003c/p\u003e\u003cpre\u003e prog :: Data Index -\u003e Data Index\n prog a\n     =  a+1 \u003c? a==0\n     ?\u003e a+2 \u003c? a==1\n     ?\u003e a+3 \u003c? a==2\n     ?\u003e a+4 \u003c? a==3\n     ?\u003e a+5\n\u003c/pre\u003e",
          "module": "Feldspar.Option",
          "name": "(?\u003e)",
          "package": "feldspar-language",
          "signature": "Data Bool -\u003e a -\u003e Option a",
          "source": "src/Feldspar-Option.html#%3F%3E",
          "type": "function"
        },
        "index": {
          "description": "Conditional choice operator Can be used together with to write guarded choices as follows prog Data Index Data Index prog",
          "hierarchy": "Feldspar Option",
          "module": "Feldspar.Option",
          "name": "(?\u003e) ?\u003e",
          "normalized": "Data Bool-\u003ea-\u003eOption a",
          "package": "feldspar-language",
          "signature": "Data Bool-\u003ea-\u003eOption a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Option.html#v:-63--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Option",
          "name": "Option",
          "package": "feldspar-language",
          "signature": "Option",
          "source": "src/Feldspar-Option.html#Option",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Option",
          "module": "Feldspar.Option",
          "name": "Option",
          "package": "feldspar-language",
          "partial": "Option",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Option.html#v:Option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne-layer desugaring of \u003ccode\u003e\u003ca\u003eOption\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Option",
          "name": "desugarOption",
          "package": "feldspar-language",
          "signature": "Option (Data a) -\u003e Data (Bool, a)",
          "source": "src/Feldspar-Option.html#desugarOption",
          "type": "function"
        },
        "index": {
          "description": "One-layer desugaring of Option",
          "hierarchy": "Feldspar Option",
          "module": "Feldspar.Option",
          "name": "desugarOption",
          "normalized": "Option(Data a)-\u003eData(Bool,a)",
          "package": "feldspar-language",
          "partial": "Option",
          "signature": "Option(Data a)-\u003eData(Bool,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Option.html#v:desugarOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Option",
          "name": "fromSome",
          "package": "feldspar-language",
          "signature": "a",
          "source": "src/Feldspar-Option.html#Option",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Option",
          "module": "Feldspar.Option",
          "name": "fromSome",
          "package": "feldspar-language",
          "partial": "Some",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Option.html#v:fromSome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Option",
          "name": "isSome",
          "package": "feldspar-language",
          "signature": "Data Bool",
          "source": "src/Feldspar-Option.html#Option",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Option",
          "module": "Feldspar.Option",
          "name": "isSome",
          "package": "feldspar-language",
          "partial": "Some",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Option.html#v:isSome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Option",
          "name": "none",
          "package": "feldspar-language",
          "signature": "Option a",
          "source": "src/Feldspar-Option.html#none",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Option",
          "module": "Feldspar.Option",
          "name": "none",
          "package": "feldspar-language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Option.html#v:none"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Option",
          "name": "oplus",
          "package": "feldspar-language",
          "signature": "Option a -\u003e Option a -\u003e Option a",
          "source": "src/Feldspar-Option.html#oplus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Option",
          "module": "Feldspar.Option",
          "name": "oplus",
          "normalized": "Option a-\u003eOption a-\u003eOption a",
          "package": "feldspar-language",
          "signature": "Option a-\u003eOption a-\u003eOption a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Option.html#v:oplus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Option",
          "name": "option",
          "package": "feldspar-language",
          "signature": "b -\u003e (a -\u003e b) -\u003e Option a -\u003e b",
          "source": "src/Feldspar-Option.html#option",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Option",
          "module": "Feldspar.Option",
          "name": "option",
          "normalized": "a-\u003e(b-\u003ea)-\u003eOption b-\u003ea",
          "package": "feldspar-language",
          "signature": "b-\u003e(a-\u003eb)-\u003eOption a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Option.html#v:option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Option",
          "name": "some",
          "package": "feldspar-language",
          "signature": "a -\u003e Option a",
          "source": "src/Feldspar-Option.html#some",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Option",
          "module": "Feldspar.Option",
          "name": "some",
          "normalized": "a-\u003eOption a",
          "package": "feldspar-language",
          "signature": "a-\u003eOption a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Option.html#v:some"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne-layer sugaring of \u003ccode\u003e\u003ca\u003eOption\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Option",
          "name": "sugarOption",
          "package": "feldspar-language",
          "signature": "Data (Bool, a) -\u003e Option (Data a)",
          "source": "src/Feldspar-Option.html#sugarOption",
          "type": "function"
        },
        "index": {
          "description": "One-layer sugaring of Option",
          "hierarchy": "Feldspar Option",
          "module": "Feldspar.Option",
          "name": "sugarOption",
          "normalized": "Data(Bool,a)-\u003eOption(Data a)",
          "package": "feldspar-language",
          "partial": "Option",
          "signature": "Data(Bool,a)-\u003eOption(Data a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Option.html#v:sugarOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Par",
          "name": "Par",
          "package": "feldspar-language",
          "source": "src/Feldspar-Par.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Par",
          "module": "Feldspar.Par",
          "name": "Par",
          "package": "feldspar-language",
          "partial": "Par",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Par.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Par",
          "name": "IVar",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Par.html#IVar",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Par",
          "module": "Feldspar.Par",
          "name": "IVar",
          "package": "feldspar-language",
          "partial": "IVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Par.html#t:IVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Par",
          "name": "P",
          "package": "feldspar-language",
          "source": "src/Feldspar-Core-Frontend-Par.html#P",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Par",
          "module": "Feldspar.Par",
          "name": "P",
          "package": "feldspar-language",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Par.html#t:P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Par",
          "name": "divConq",
          "package": "feldspar-language",
          "signature": "(a -\u003e Bool) -\u003e (a -\u003e [a]) -\u003e ([b] -\u003e b) -\u003e (a -\u003e b) -\u003e a -\u003e P b",
          "source": "src/Feldspar-Par.html#divConq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Par",
          "module": "Feldspar.Par",
          "name": "divConq",
          "normalized": "(a-\u003eBool)-\u003e(a-\u003e[a])-\u003e([b]-\u003eb)-\u003e(a-\u003eb)-\u003ea-\u003eP b",
          "package": "feldspar-language",
          "partial": "Conq",
          "signature": "(a-\u003eBool)-\u003e(a-\u003e[a])-\u003e([b]-\u003eb)-\u003e(a-\u003eb)-\u003ea-\u003eP b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Par.html#v:divConq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Par",
          "name": "fork",
          "package": "feldspar-language",
          "signature": "P () -\u003e P ()",
          "source": "src/Feldspar-Par.html#fork",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Par",
          "module": "Feldspar.Par",
          "name": "fork",
          "normalized": "P()-\u003eP()",
          "package": "feldspar-language",
          "signature": "P()-\u003eP()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Par.html#v:fork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Par",
          "name": "get",
          "package": "feldspar-language",
          "signature": "IVar a -\u003e P a",
          "source": "src/Feldspar-Par.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Par",
          "module": "Feldspar.Par",
          "name": "get",
          "normalized": "IVar a-\u003eP a",
          "package": "feldspar-language",
          "signature": "IVar a-\u003eP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Par.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Par",
          "name": "new",
          "package": "feldspar-language",
          "signature": "P (IVar a)",
          "source": "src/Feldspar-Par.html#new",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Par",
          "module": "Feldspar.Par",
          "name": "new",
          "package": "feldspar-language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Par.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Par",
          "name": "parMap",
          "package": "feldspar-language",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e P [b]",
          "source": "src/Feldspar-Par.html#parMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Par",
          "module": "Feldspar.Par",
          "name": "parMap",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003eP[b]",
          "package": "feldspar-language",
          "partial": "Map",
          "signature": "(a-\u003eb)-\u003e[a]-\u003eP[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Par.html#v:parMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Par",
          "name": "parMapM",
          "package": "feldspar-language",
          "signature": "(a -\u003e P b) -\u003e [a] -\u003e P [b]",
          "source": "src/Feldspar-Par.html#parMapM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Par",
          "module": "Feldspar.Par",
          "name": "parMapM",
          "normalized": "(a-\u003eP b)-\u003e[a]-\u003eP[b]",
          "package": "feldspar-language",
          "partial": "Map",
          "signature": "(a-\u003eP b)-\u003e[a]-\u003eP[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Par.html#v:parMapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Par",
          "name": "put",
          "package": "feldspar-language",
          "signature": "IVar a -\u003e a -\u003e P ()",
          "source": "src/Feldspar-Par.html#put",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Par",
          "module": "Feldspar.Par",
          "name": "put",
          "normalized": "IVar a-\u003ea-\u003eP()",
          "package": "feldspar-language",
          "signature": "IVar a-\u003ea-\u003eP()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Par.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Par",
          "name": "pval",
          "package": "feldspar-language",
          "signature": "a -\u003e P (IVar a)",
          "source": "src/Feldspar-Par.html#pval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Par",
          "module": "Feldspar.Par",
          "name": "pval",
          "normalized": "a-\u003eP(IVar a)",
          "package": "feldspar-language",
          "signature": "a-\u003eP(IVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Par.html#v:pval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Par",
          "name": "runPar",
          "package": "feldspar-language",
          "signature": "P a -\u003e a",
          "source": "src/Feldspar-Par.html#runPar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Par",
          "module": "Feldspar.Par",
          "name": "runPar",
          "normalized": "P a-\u003ea",
          "package": "feldspar-language",
          "partial": "Par",
          "signature": "P a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Par.html#v:runPar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Par",
          "name": "spawn",
          "package": "feldspar-language",
          "signature": "P a -\u003e P (IVar a)",
          "source": "src/Feldspar-Par.html#spawn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Par",
          "module": "Feldspar.Par",
          "name": "spawn",
          "normalized": "P a-\u003eP(IVar a)",
          "package": "feldspar-language",
          "signature": "P a-\u003eP(IVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Par.html#v:spawn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Par",
          "name": "yield",
          "package": "feldspar-language",
          "signature": "P ()",
          "source": "src/Feldspar-Par.html#yield",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Par",
          "module": "Feldspar.Par",
          "name": "yield",
          "normalized": "P()",
          "package": "feldspar-language",
          "signature": "P()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Par.html#v:yield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReexports a minimal subset of the \u003ca\u003ePrelude\u003c/a\u003e to open up for reusing\n \u003ca\u003ePrelude\u003c/a\u003e identifiers in Feldspar\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Feldspar.Prelude",
          "name": "Prelude",
          "package": "feldspar-language",
          "source": "src/Feldspar-Prelude.html",
          "type": "module"
        },
        "index": {
          "description": "Reexports minimal subset of the Prelude to open up for reusing Prelude identifiers in Feldspar",
          "hierarchy": "Feldspar Prelude",
          "module": "Feldspar.Prelude",
          "name": "Prelude",
          "package": "feldspar-language",
          "partial": "Prelude",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Prelude.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBounded integer ranges\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Feldspar.Range",
          "name": "Range",
          "package": "feldspar-language",
          "source": "src/Feldspar-Range.html",
          "type": "module"
        },
        "index": {
          "description": "Bounded integer ranges",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "Range",
          "package": "feldspar-language",
          "partial": "Range",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience alias for bounded integers\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "BoundedInt",
          "package": "feldspar-language",
          "source": "src/Feldspar-Range.html#BoundedInt",
          "type": "class"
        },
        "index": {
          "description": "Convenience alias for bounded integers",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "BoundedInt",
          "package": "feldspar-language",
          "partial": "Bounded Int",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#t:BoundedInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bounded range of values of type \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "Range",
          "package": "feldspar-language",
          "source": "src/Feldspar-Range.html#Range",
          "type": "data"
        },
        "index": {
          "description": "bounded range of values of type",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "Range",
          "package": "feldspar-language",
          "partial": "Range",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#t:Range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003erangeLessAbs\u003c/a\u003e\u003c/code\u003e but replaces the expression\n   \u003ccode\u003eabs d `rangeLess` abs r\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "absRangeLessAbs",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Bool",
          "source": "src/Feldspar-Range.html#absRangeLessAbs",
          "type": "function"
        },
        "index": {
          "description": "Similar to rangeLessAbs but replaces the expression abs rangeLess abs instead",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "absRangeLessAbs",
          "normalized": "Range a-\u003eRange a-\u003eBool",
          "package": "feldspar-language",
          "partial": "Range Less Abs",
          "signature": "Range a-\u003eRange a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:absRangeLessAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Range",
          "name": "approx",
          "package": "feldspar-language",
          "signature": "(Range a, Range b, Range c) -\u003e Range d",
          "source": "src/Feldspar-Range.html#approx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "approx",
          "normalized": "(Range a,Range b,Range c)-\u003eRange d",
          "package": "feldspar-language",
          "signature": "(Range a,Range b,Range c)-\u003eRange d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:approx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Range",
          "name": "binopR",
          "package": "feldspar-language",
          "signature": "Range d -\u003e Range d -\u003e Range d) -\u003e (Range a, Range b, Range c) -\u003e (Range a, Range b, Range c) -\u003e (Range a, Range b, Range c)",
          "source": "src/Feldspar-Range.html#binopR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "binopR",
          "normalized": "Range a-\u003eRange a-\u003eRange a)-\u003e(Range b,Range c,Range d)-\u003e(Range b,Range c,Range d)-\u003e(Range b,Range c,Range d)",
          "package": "feldspar-language",
          "signature": "Range d-\u003eRange d-\u003eRange d)-\u003e(Range a,Range b,Range c)-\u003e(Range a,Range b,Range c)-\u003e(Range a,Range b,Range c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:binopR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the position of the highest bit set to 1. Counting starts at 1.\n Beware! It doesn't terminate for negative numbers.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "bits",
          "package": "feldspar-language",
          "signature": "b -\u003e Int",
          "source": "src/Feldspar-Range.html#bits",
          "type": "function"
        },
        "index": {
          "description": "Returns the position of the highest bit set to Counting starts at Beware It doesn terminate for negative numbers",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "bits",
          "normalized": "a-\u003eInt",
          "package": "feldspar-language",
          "signature": "b-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:bits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a replacement fror Haskell's shiftR. If we carelessly use\n   Haskell's variant then we will get left shifts for very large shift values.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "correctShiftRU",
          "package": "feldspar-language",
          "signature": "a -\u003e b -\u003e a",
          "source": "src/Feldspar-Range.html#correctShiftRU",
          "type": "function"
        },
        "index": {
          "description": "This is replacement fror Haskell shiftR If we carelessly use Haskell variant then we will get left shifts for very large shift values",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "correctShiftRU",
          "normalized": "a-\u003eb-\u003ea",
          "package": "feldspar-language",
          "partial": "Shift RU",
          "signature": "a-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:correctShiftRU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edisjoint r1 r2\u003c/code\u003e returns true when \u003ccode\u003er1\u003c/code\u003e and \u003ccode\u003er2\u003c/code\u003e have no elements in\n   common.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "disjoint",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Bool",
          "source": "src/Feldspar-Range.html#disjoint",
          "type": "function"
        },
        "index": {
          "description": "disjoint r1 r2 returns true when r1 and r2 have no elements in common",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "disjoint",
          "normalized": "Range a-\u003eRange a-\u003eBool",
          "package": "feldspar-language",
          "signature": "Range a-\u003eRange a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:disjoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe range containing no elements\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "emptyRange",
          "package": "feldspar-language",
          "signature": "Range a",
          "source": "src/Feldspar-Range.html#emptyRange",
          "type": "function"
        },
        "index": {
          "description": "The range containing no elements",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "emptyRange",
          "package": "feldspar-language",
          "partial": "Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:emptyRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe range containing all elements of a type\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "fullRange",
          "package": "feldspar-language",
          "signature": "Range a",
          "source": "src/Feldspar-Range.html#fullRange",
          "type": "function"
        },
        "index": {
          "description": "The range containing all elements of type",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "fullRange",
          "package": "feldspar-language",
          "partial": "Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:fullRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience function for defining range propagation.\n   \u003ccode\u003ehandleSign propU propS\u003c/code\u003e chooses \u003ccode\u003epropU\u003c/code\u003e for unsigned types and\n   \u003ccode\u003epropS\u003c/code\u003e for signed types.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "handleSign",
          "package": "feldspar-language",
          "signature": "(Range a -\u003e b) -\u003e (Range a -\u003e b) -\u003e Range a -\u003e b",
          "source": "src/Feldspar-Range.html#handleSign",
          "type": "function"
        },
        "index": {
          "description": "convenience function for defining range propagation handleSign propU propS chooses propU for unsigned types and propS for signed types",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "handleSign",
          "normalized": "(Range a-\u003eb)-\u003e(Range a-\u003eb)-\u003eRange a-\u003eb",
          "package": "feldspar-language",
          "partial": "Sign",
          "signature": "(Range a-\u003eb)-\u003e(Range a-\u003eb)-\u003eRange a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:handleSign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ea `inRange` r\u003c/code\u003e checks is \u003ccode\u003ea\u003c/code\u003e is an element of the range \u003ccode\u003er\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "inRange",
          "package": "feldspar-language",
          "signature": "a -\u003e Range a -\u003e Bool",
          "source": "src/Feldspar-Range.html#inRange",
          "type": "function"
        },
        "index": {
          "description": "inRange checks is is an element of the range",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "inRange",
          "normalized": "a-\u003eRange a-\u003eBool",
          "package": "feldspar-language",
          "partial": "Range",
          "signature": "a-\u003eRange a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:inRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if the range is empty\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "isEmpty",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Bool",
          "source": "src/Feldspar-Range.html#isEmpty",
          "type": "function"
        },
        "index": {
          "description": "Checks if the range is empty",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "isEmpty",
          "normalized": "Range a-\u003eBool",
          "package": "feldspar-language",
          "partial": "Empty",
          "signature": "Range a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if the range contains all values of the type\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "isFull",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Bool",
          "source": "src/Feldspar-Range.html#isFull",
          "type": "function"
        },
        "index": {
          "description": "Checks if the range contains all values of the type",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "isFull",
          "normalized": "Range a-\u003eBool",
          "package": "feldspar-language",
          "partial": "Full",
          "signature": "Range a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:isFull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks whether a range is a sub-range of the natural numbers.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "isNatural",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Bool",
          "source": "src/Feldspar-Range.html#isNatural",
          "type": "function"
        },
        "index": {
          "description": "Checks whether range is sub-range of the natural numbers",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "isNatural",
          "normalized": "Range a-\u003eBool",
          "package": "feldspar-language",
          "partial": "Natural",
          "signature": "Range a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:isNatural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks whether a range is a sub-range of the negative numbers.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "isNegative",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Bool",
          "source": "src/Feldspar-Range.html#isNegative",
          "type": "function"
        },
        "index": {
          "description": "Checks whether range is sub-range of the negative numbers",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "isNegative",
          "normalized": "Range a-\u003eBool",
          "package": "feldspar-language",
          "partial": "Negative",
          "signature": "Range a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:isNegative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks is the range contains exactly one element\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "isSingleton",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Bool",
          "source": "src/Feldspar-Range.html#isSingleton",
          "type": "function"
        },
        "index": {
          "description": "Checks is the range contains exactly one element",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "isSingleton",
          "normalized": "Range a-\u003eBool",
          "package": "feldspar-language",
          "partial": "Singleton",
          "signature": "Range a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:isSingleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003er1 `isSubRangeOf` r2\u003c/code\u003e checks is all the elements in \u003ccode\u003er1\u003c/code\u003e are included\n   in \u003ccode\u003er2\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "isSubRangeOf",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Bool",
          "source": "src/Feldspar-Range.html#isSubRangeOf",
          "type": "function"
        },
        "index": {
          "description": "r1 isSubRangeOf r2 checks is all the elements in r1 are included in r2",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "isSubRangeOf",
          "normalized": "Range a-\u003eRange a-\u003eBool",
          "package": "feldspar-language",
          "partial": "Sub Range Of",
          "signature": "Range a-\u003eRange a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:isSubRangeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Range",
          "name": "liftR",
          "package": "feldspar-language",
          "signature": "Range a) -\u003e (Range b, Range c, Range d)",
          "source": "src/Feldspar-Range.html#liftR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "liftR",
          "normalized": "Range a)-\u003e(Range b,Range c,Range d)",
          "package": "feldspar-language",
          "signature": "Range a)-\u003e(Range b,Range c,Range d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:liftR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequires a monotonic function\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "mapMonotonic",
          "package": "feldspar-language",
          "signature": "(a -\u003e b) -\u003e Range a -\u003e Range b",
          "source": "src/Feldspar-Range.html#mapMonotonic",
          "type": "function"
        },
        "index": {
          "description": "Requires monotonic function",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "mapMonotonic",
          "normalized": "(a-\u003eb)-\u003eRange a-\u003eRange b",
          "package": "feldspar-language",
          "partial": "Monotonic",
          "signature": "(a-\u003eb)-\u003eRange a-\u003eRange b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:mapMonotonic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequires a monotonic function\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "mapMonotonic2",
          "package": "feldspar-language",
          "signature": "(a -\u003e b -\u003e c) -\u003e Range a -\u003e Range b -\u003e Range c",
          "source": "src/Feldspar-Range.html#mapMonotonic2",
          "type": "function"
        },
        "index": {
          "description": "Requires monotonic function",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "mapMonotonic2",
          "normalized": "(a-\u003eb-\u003ec)-\u003eRange a-\u003eRange b-\u003eRange c",
          "package": "feldspar-language",
          "partial": "Monotonic",
          "signature": "(a-\u003eb-\u003ec)-\u003eRange a-\u003eRange b-\u003eRange c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:mapMonotonic2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Range",
          "name": "mapR",
          "package": "feldspar-language",
          "signature": "Range d -\u003e Range d) -\u003e (Range a, Range b, Range c) -\u003e (Range a, Range b, Range c)",
          "source": "src/Feldspar-Range.html#mapR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "mapR",
          "normalized": "Range a-\u003eRange a)-\u003e(Range b,Range c,Range d)-\u003e(Range b,Range c,Range d)",
          "package": "feldspar-language",
          "signature": "Range d-\u003eRange d)-\u003e(Range a,Range b,Range c)-\u003e(Range a,Range b,Range c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:mapR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccurate upper bound for \u003ccode\u003e\u003ca\u003e.|.\u003c/a\u003e\u003c/code\u003e on unsigned numbers.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "maxOrUnsigned",
          "package": "feldspar-language",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e a",
          "source": "src/Feldspar-Range.html#maxOrUnsigned",
          "type": "function"
        },
        "index": {
          "description": "Accurate upper bound for on unsigned numbers",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "maxOrUnsigned",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea",
          "package": "feldspar-language",
          "partial": "Or Unsigned",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:maxOrUnsigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ea `maxPlus` b\u003c/code\u003e adds \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e but if the addition overflows then\n   \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "maxPlus",
          "package": "feldspar-language",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Feldspar-Range.html#maxPlus",
          "type": "function"
        },
        "index": {
          "description": "maxPlus adds and but if the addition overflows then maxBound is returned",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "maxPlus",
          "normalized": "a-\u003ea-\u003ea",
          "package": "feldspar-language",
          "partial": "Plus",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:maxPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccurate lower bound for \u003ccode\u003e\u003ca\u003e.|.\u003c/a\u003e\u003c/code\u003e on unsigned numbers.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "minOrUnsigned",
          "package": "feldspar-language",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e a",
          "source": "src/Feldspar-Range.html#minOrUnsigned",
          "type": "function"
        },
        "index": {
          "description": "Accurate lower bound for on unsigned numbers",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "minOrUnsigned",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea",
          "package": "feldspar-language",
          "partial": "Or Unsigned",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:minOrUnsigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe range from \u003ccode\u003e0\u003c/code\u003e to the maximum element\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "naturalRange",
          "package": "feldspar-language",
          "signature": "Range a",
          "source": "src/Feldspar-Range.html#naturalRange",
          "type": "function"
        },
        "index": {
          "description": "The range from to the maximum element",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "naturalRange",
          "package": "feldspar-language",
          "partial": "Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:naturalRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe range from the smallest negative element to \u003ccode\u003e-1\u003c/code\u003e.\n   Undefined for unsigned types\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "negativeRange",
          "package": "feldspar-language",
          "signature": "Range a",
          "source": "src/Feldspar-Range.html#negativeRange",
          "type": "function"
        },
        "index": {
          "description": "The range from the smallest negative element to Undefined for unsigned types",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "negativeRange",
          "package": "feldspar-language",
          "partial": "Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:negativeRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Range",
          "name": "predAbs",
          "package": "feldspar-language",
          "signature": "a -\u003e a",
          "source": "src/Feldspar-Range.html#predAbs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "predAbs",
          "normalized": "a-\u003ea",
          "package": "feldspar-language",
          "partial": "Abs",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:predAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a range\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "range",
          "package": "feldspar-language",
          "signature": "a -\u003e a -\u003e Range a",
          "source": "src/Feldspar-Range.html#range",
          "type": "function"
        },
        "index": {
          "description": "Construct range",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "range",
          "normalized": "a-\u003ea-\u003eRange a",
          "package": "feldspar-language",
          "signature": "a-\u003ea-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePropagates range information through \u003ccode\u003eabs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeAbs",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeAbs",
          "type": "function"
        },
        "index": {
          "description": "Propagates range information through abs",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeAbs",
          "normalized": "Range a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Abs",
          "signature": "Range a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePropagates range information through addition.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeAdd",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeAdd",
          "type": "function"
        },
        "index": {
          "description": "Propagates range information through addition",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeAdd",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Add",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSigned case for \u003ccode\u003e\u003ca\u003erangeAdd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeAddSigned",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeAddSigned",
          "type": "function"
        },
        "index": {
          "description": "Signed case for rangeAdd",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeAddSigned",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Add Signed",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeAddSigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsigned case for \u003ccode\u003e\u003ca\u003erangeAdd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeAddUnsigned",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeAddUnsigned",
          "type": "function"
        },
        "index": {
          "description": "Unsigned case for rangeAdd",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeAddUnsigned",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Add Unsigned",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeAddUnsigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePropagating range information through \u003ccode\u003e\u003ca\u003e.&.\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeAnd",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeAnd",
          "type": "function"
        },
        "index": {
          "description": "Propagating range information through",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeAnd",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "And",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheap and inaccurate range propagation for \u003ccode\u003e\u003ca\u003e.&.\u003c/a\u003e\u003c/code\u003e on unsigned numbers.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeAndUnsignedCheap",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeAndUnsignedCheap",
          "type": "function"
        },
        "index": {
          "description": "Cheap and inaccurate range propagation for on unsigned numbers",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeAndUnsignedCheap",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "And Unsigned Cheap",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeAndUnsignedCheap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erangeByRange ra rb\u003c/code\u003e: Computes the range of the following set\n\u003c/p\u003e\u003cpre\u003e {x | a \u003c- ra, b \u003c- rb, x \u003c- Range a b}\n\u003c/pre\u003e",
          "module": "Feldspar.Range",
          "name": "rangeByRange",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeByRange",
          "type": "function"
        },
        "index": {
          "description": "rangeByRange ra rb Computes the range of the following set ra rb Range",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeByRange",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "By Range",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeByRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePropagating range information through \u003ccode\u003e\u003ca\u003ecomplement\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeComplement",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeComplement",
          "type": "function"
        },
        "index": {
          "description": "Propagating range information through complement",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeComplement",
          "normalized": "Range a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Complement",
          "signature": "Range a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeComplement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePropagates range information through \u003ccode\u003e\u003ca\u003ediv\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeDiv",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeDiv",
          "type": "function"
        },
        "index": {
          "description": "Propagates range information through div",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeDiv",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Div",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsigned case for \u003ccode\u003e\u003ca\u003erangeDiv\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeDivU",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeDivU",
          "type": "function"
        },
        "index": {
          "description": "Unsigned case for rangeDiv",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeDivU",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Div",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeDivU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePropagates range information through exponentiation.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeExp",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeExp",
          "type": "function"
        },
        "index": {
          "description": "Propagates range information through exponentiation",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeExp",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Exp",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSigend case for \u003ccode\u003e\u003ca\u003erangeExp\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeExpSigned",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeExpSigned",
          "type": "function"
        },
        "index": {
          "description": "Sigend case for rangeExp",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeExpSigned",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Exp Signed",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeExpSigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsigned case for \u003ccode\u003e\u003ca\u003erangeExp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeExpUnsigned",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeExpUnsigned",
          "type": "function"
        },
        "index": {
          "description": "Unsigned case for rangeExp",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeExpUnsigned",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Exp Unsigned",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeExpUnsigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erangeGap r1 r2\u003c/code\u003e returns a range of all the elements between \u003ccode\u003er1\u003c/code\u003e and\n   \u003ccode\u003er2\u003c/code\u003e including the boundary elements. If \u003ccode\u003er1\u003c/code\u003e and \u003ccode\u003er2\u003c/code\u003e have elements in\n   common the result is an empty range.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeGap",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeGap",
          "type": "function"
        },
        "index": {
          "description": "rangeGap r1 r2 returns range of all the elements between r1 and r2 including the boundary elements If r1 and r2 have elements in common the result is an empty range",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeGap",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Gap",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeGap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntersection on ranges.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeIntersection",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeIntersection",
          "type": "function"
        },
        "index": {
          "description": "Intersection on ranges",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeIntersection",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Intersection",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeIntersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003er1 `rangeLess` r2:\u003c/pre\u003e\u003cp\u003eChecks if all elements of \u003ccode\u003er1\u003c/code\u003e are less than all elements of \u003ccode\u003er2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeLess",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Bool",
          "source": "src/Feldspar-Range.html#rangeLess",
          "type": "function"
        },
        "index": {
          "description": "r1 rangeLess r2 Checks if all elements of r1 are less than all elements of r2",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeLess",
          "normalized": "Range a-\u003eRange a-\u003eBool",
          "package": "feldspar-language",
          "partial": "Less",
          "signature": "Range a-\u003eRange a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeLess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWriting \u003ccode\u003ed `rangeLess` abs r\u003c/code\u003e doesn't mean what you think it does because\n \u003ccode\u003er\u003c/code\u003e may contain minBound which doesn't have a positive representation.\n Instead, this function should be used.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeLessAbs",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Bool",
          "source": "src/Feldspar-Range.html#rangeLessAbs",
          "type": "function"
        },
        "index": {
          "description": "Writing rangeLess abs doesn mean what you think it does because may contain minBound which doesn have positive representation Instead this function should be used",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeLessAbs",
          "normalized": "Range a-\u003eRange a-\u003eBool",
          "package": "feldspar-language",
          "partial": "Less Abs",
          "signature": "Range a-\u003eRange a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeLessAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003er1 `rangeLessEq` r2:\u003c/pre\u003e\u003cp\u003eChecks if all elements of \u003ccode\u003er1\u003c/code\u003e are less than or equal to all elements of\n \u003ccode\u003er2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeLessEq",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Bool",
          "source": "src/Feldspar-Range.html#rangeLessEq",
          "type": "function"
        },
        "index": {
          "description": "r1 rangeLessEq r2 Checks if all elements of r1 are less than or equal to all elements of r2",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeLessEq",
          "normalized": "Range a-\u003eRange a-\u003eBool",
          "package": "feldspar-language",
          "partial": "Less Eq",
          "signature": "Range a-\u003eRange a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeLessEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePropagates range information through \u003ccode\u003e\u003ca\u003emax\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeMax",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeMax",
          "type": "function"
        },
        "index": {
          "description": "Propagates range information through max",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeMax",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Max",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003erangeMax\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeMin",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeMin",
          "type": "function"
        },
        "index": {
          "description": "Analogous to rangeMax",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeMin",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Min",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePropagates range information through \u003ccode\u003e\u003ca\u003emod\u003c/a\u003e\u003c/code\u003e.\n Note that we assume Haskell semantics for \u003ccode\u003e\u003ca\u003emod\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeMod",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeMod",
          "type": "function"
        },
        "index": {
          "description": "Propagates range information through mod Note that we assume Haskell semantics for mod",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeMod",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Mod",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePropagates range information through multiplication\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeMul",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeMul",
          "type": "function"
        },
        "index": {
          "description": "Propagates range information through multiplication",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeMul",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Mul",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeMul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSigned case for \u003ccode\u003e\u003ca\u003erangeMul\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeMulSigned",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeMulSigned",
          "type": "function"
        },
        "index": {
          "description": "Signed case for rangeMul",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeMulSigned",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Mul Signed",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeMulSigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsigned case for \u003ccode\u003e\u003ca\u003erangeMul\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeMulUnsigned",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeMulUnsigned",
          "type": "function"
        },
        "index": {
          "description": "Unsigned case for rangeMul",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeMulUnsigned",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Mul Unsigned",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeMulUnsigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePropagates range information through negation.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeNeg",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeNeg",
          "type": "function"
        },
        "index": {
          "description": "Propagates range information through negation",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeNeg",
          "normalized": "Range a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Neg",
          "signature": "Range a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeNeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSigned case for \u003ccode\u003e\u003ca\u003erangeNeg\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeNegSigned",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeNegSigned",
          "type": "function"
        },
        "index": {
          "description": "Signed case for rangeNeg",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeNegSigned",
          "normalized": "Range a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Neg Signed",
          "signature": "Range a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeNegSigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsigned case for \u003ccode\u003e\u003ca\u003erangeNeg\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeNegUnsigned",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeNegUnsigned",
          "type": "function"
        },
        "index": {
          "description": "Unsigned case for rangeNeg",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeNegUnsigned",
          "normalized": "Range a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Neg Unsigned",
          "signature": "Range a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeNegUnsigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience function for defining range propagation. If the input\n   range is empty then the result is also empty.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeOp",
          "package": "feldspar-language",
          "signature": "(Range a -\u003e Range a) -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeOp",
          "type": "function"
        },
        "index": {
          "description": "convenience function for defining range propagation If the input range is empty then the result is also empty",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeOp",
          "normalized": "(Range a-\u003eRange a)-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Op",
          "signature": "(Range a-\u003eRange a)-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003erangeOp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeOp2",
          "package": "feldspar-language",
          "signature": "(Range a -\u003e Range a -\u003e Range a) -\u003e Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeOp2",
          "type": "function"
        },
        "index": {
          "description": "See rangeOp",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeOp2",
          "normalized": "(Range a-\u003eRange a-\u003eRange a)-\u003eRange a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Op",
          "signature": "(Range a-\u003eRange a-\u003eRange a)-\u003eRange a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeOp2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePropagates range information through \u003ccode\u003e\u003ca\u003e.|.\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeOr",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeOr",
          "type": "function"
        },
        "index": {
          "description": "Propagates range information through",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeOr",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Or",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccurate range propagation through \u003ccode\u003e\u003ca\u003e.|.\u003c/a\u003e\u003c/code\u003e for unsigned types.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeOrUnsignedAccurate",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeOrUnsignedAccurate",
          "type": "function"
        },
        "index": {
          "description": "Accurate range propagation through for unsigned types",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeOrUnsignedAccurate",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Or Unsigned Accurate",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeOrUnsignedAccurate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheap and inaccurate range propagation for \u003ccode\u003e\u003ca\u003e.|.\u003c/a\u003e\u003c/code\u003e on unsigned numbers.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeOrUnsignedCheap",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeOrUnsignedCheap",
          "type": "function"
        },
        "index": {
          "description": "Cheap and inaccurate range propagation for on unsigned numbers",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeOrUnsignedCheap",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Or Unsigned Cheap",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeOrUnsignedCheap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePropagates range information through \u003ccode\u003e\u003ca\u003equot\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeQuot",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeQuot",
          "type": "function"
        },
        "index": {
          "description": "Propagates range information through quot",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeQuot",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Quot",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeQuot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsigned case for \u003ccode\u003e\u003ca\u003erangeQuot\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeQuotU",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeQuotU",
          "type": "function"
        },
        "index": {
          "description": "Unsigned case for rangeQuot",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeQuotU",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Quot",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeQuotU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePropagates range information through \u003ccode\u003e\u003ca\u003erem\u003c/a\u003e\u003c/code\u003e.\n Note that we assume Haskell semantics for \u003ccode\u003e\u003ca\u003erem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeRem",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeRem",
          "type": "function"
        },
        "index": {
          "description": "Propagates range information through rem Note that we assume Haskell semantics for rem",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeRem",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Rem",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeRem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePropagating range information through \u003ccode\u003eshiftLU\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeShiftLU",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range b -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeShiftLU",
          "type": "function"
        },
        "index": {
          "description": "Propagating range information through shiftLU",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeShiftLU",
          "normalized": "Range a-\u003eRange b-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Shift LU",
          "signature": "Range a-\u003eRange b-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeShiftLU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsigned case for \u003ccode\u003e\u003ca\u003erangeShiftLU\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeShiftLUUnsigned",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range b -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeShiftLUUnsigned",
          "type": "function"
        },
        "index": {
          "description": "Unsigned case for rangeShiftLU",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeShiftLUUnsigned",
          "normalized": "Range a-\u003eRange b-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Shift LUUnsigned",
          "signature": "Range a-\u003eRange b-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeShiftLUUnsigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePropagating range information through \u003ccode\u003eshiftRU\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeShiftRU",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range b -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeShiftRU",
          "type": "function"
        },
        "index": {
          "description": "Propagating range information through shiftRU",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeShiftRU",
          "normalized": "Range a-\u003eRange b-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Shift RU",
          "signature": "Range a-\u003eRange b-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeShiftRU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsigned case for \u003ccode\u003e\u003ca\u003erangeShiftRU\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeShiftRUUnsigned",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range b -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeShiftRUUnsigned",
          "type": "function"
        },
        "index": {
          "description": "Unsigned case for rangeShiftRU",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeShiftRUUnsigned",
          "normalized": "Range a-\u003eRange b-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Shift RUUnsigned",
          "signature": "Range a-\u003eRange b-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeShiftRUUnsigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePropagates range information through \u003ccode\u003e\u003ca\u003esignum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeSignum",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeSignum",
          "type": "function"
        },
        "index": {
          "description": "Propagates range information through signum",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeSignum",
          "normalized": "Range a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Signum",
          "signature": "Range a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeSignum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSigned case for \u003ccode\u003e\u003ca\u003erangeSignum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeSignumSigned",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeSignumSigned",
          "type": "function"
        },
        "index": {
          "description": "Signed case for rangeSignum",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeSignumSigned",
          "normalized": "Range a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Signum Signed",
          "signature": "Range a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeSignumSigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsigned case for \u003ccode\u003e\u003ca\u003erangeSignum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeSignumUnsigned",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeSignumUnsigned",
          "type": "function"
        },
        "index": {
          "description": "Unsigned case for rangeSignum",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeSignumUnsigned",
          "normalized": "Range a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Signum Unsigned",
          "signature": "Range a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeSignumUnsigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe size of a range. Beware that the size may not always be representable\n   for signed types. For instance\n   \u003ccode\u003erangeSize (range minBound maxBound) :: Int\u003c/code\u003e gives a nonsense answer.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeSize",
          "package": "feldspar-language",
          "signature": "Range a -\u003e a",
          "source": "src/Feldspar-Range.html#rangeSize",
          "type": "function"
        },
        "index": {
          "description": "The size of range Beware that the size may not always be representable for signed types For instance rangeSize range minBound maxBound Int gives nonsense answer",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeSize",
          "normalized": "Range a-\u003ea",
          "package": "feldspar-language",
          "partial": "Size",
          "signature": "Range a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePropagates range information through subtraction.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeSub",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeSub",
          "type": "function"
        },
        "index": {
          "description": "Propagates range information through subtraction",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeSub",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Sub",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRange propagation for \u003ccode\u003e\u003ca\u003esubSat\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeSubSat",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeSubSat",
          "type": "function"
        },
        "index": {
          "description": "Range propagation for subSat",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeSubSat",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Sub Sat",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeSubSat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Range",
          "name": "rangeSubSigned",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeSubSigned",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeSubSigned",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Sub Signed",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeSubSigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsigned case for \u003ccode\u003e\u003ca\u003erangeSub\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeSubUnsigned",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeSubUnsigned",
          "type": "function"
        },
        "index": {
          "description": "Unsigned case for rangeSub",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeSubUnsigned",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Sub Unsigned",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeSubUnsigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnion on ranges.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeUnion",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeUnion",
          "type": "function"
        },
        "index": {
          "description": "Union on ranges",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeUnion",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Union",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeUnion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePropagating range information through \u003ccode\u003e\u003ca\u003exor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeXor",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeXor",
          "type": "function"
        },
        "index": {
          "description": "Propagating range information through xor",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeXor",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Xor",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeXor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsigned case for \u003ccode\u003e\u003ca\u003erangeXor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "rangeXorUnsigned",
          "package": "feldspar-language",
          "signature": "Range a -\u003e Range a -\u003e Range a",
          "source": "src/Feldspar-Range.html#rangeXorUnsigned",
          "type": "function"
        },
        "index": {
          "description": "Unsigned case for rangeXor",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "rangeXorUnsigned",
          "normalized": "Range a-\u003eRange a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Xor Unsigned",
          "signature": "Range a-\u003eRange a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:rangeXorUnsigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShows a bound.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "showBound",
          "package": "feldspar-language",
          "signature": "a -\u003e String",
          "source": "src/Feldspar-Range.html#showBound",
          "type": "function"
        },
        "index": {
          "description": "Shows bound",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "showBound",
          "normalized": "a-\u003eString",
          "package": "feldspar-language",
          "partial": "Bound",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:showBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA textual representation of ranges.\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "showRange",
          "package": "feldspar-language",
          "signature": "Range a -\u003e String",
          "source": "src/Feldspar-Range.html#showRange",
          "type": "function"
        },
        "index": {
          "description": "textual representation of ranges",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "showRange",
          "normalized": "Range a-\u003eString",
          "package": "feldspar-language",
          "partial": "Range",
          "signature": "Range a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:showRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe range containing one element\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "singletonRange",
          "package": "feldspar-language",
          "signature": "a -\u003e Range a",
          "source": "src/Feldspar-Range.html#singletonRange",
          "type": "function"
        },
        "index": {
          "description": "The range containing one element",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "singletonRange",
          "normalized": "a-\u003eRange a",
          "package": "feldspar-language",
          "partial": "Range",
          "signature": "a-\u003eRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:singletonRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSaturating unsigned subtraction\n\u003c/p\u003e",
          "module": "Feldspar.Range",
          "name": "subSat",
          "package": "feldspar-language",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Feldspar-Range.html#subSat",
          "type": "function"
        },
        "index": {
          "description": "Saturating unsigned subtraction",
          "hierarchy": "Feldspar Range",
          "module": "Feldspar.Range",
          "name": "subSat",
          "normalized": "a-\u003ea-\u003ea",
          "package": "feldspar-language",
          "partial": "Sat",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Range.html#v:subSat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "Repa",
          "package": "feldspar-language",
          "source": "src/Feldspar-Repa.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "Repa",
          "package": "feldspar-language",
          "partial": "Repa",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": ":.",
          "package": "feldspar-language",
          "source": "src/Feldspar-Repa.html#%3A.",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": ":.",
          "package": "feldspar-language",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#t::."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Slices\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Feldspar.Repa",
          "name": "All",
          "package": "feldspar-language",
          "source": "src/Feldspar-Repa.html#All",
          "type": "data"
        },
        "index": {
          "description": "Slices",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "All",
          "package": "feldspar-language",
          "partial": "All",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#t:All"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "Any",
          "package": "feldspar-language",
          "source": "src/Feldspar-Repa.html#Any",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "Any",
          "package": "feldspar-language",
          "partial": "Any",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#t:Any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "DIM0",
          "package": "feldspar-language",
          "source": "src/Feldspar-Repa.html#DIM0",
          "type": "type"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "DIM0",
          "package": "feldspar-language",
          "partial": "DIM",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#t:DIM0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "DIM1",
          "package": "feldspar-language",
          "source": "src/Feldspar-Repa.html#DIM1",
          "type": "type"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "DIM1",
          "package": "feldspar-language",
          "partial": "DIM",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#t:DIM1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "DIM2",
          "package": "feldspar-language",
          "source": "src/Feldspar-Repa.html#DIM2",
          "type": "type"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "DIM2",
          "package": "feldspar-language",
          "partial": "DIM",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#t:DIM2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "DIM3",
          "package": "feldspar-language",
          "source": "src/Feldspar-Repa.html#DIM3",
          "type": "type"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "DIM3",
          "package": "feldspar-language",
          "partial": "DIM",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#t:DIM3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "DVector",
          "package": "feldspar-language",
          "source": "src/Feldspar-Repa.html#DVector",
          "type": "type"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "DVector",
          "package": "feldspar-language",
          "partial": "DVector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#t:DVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "FullShape",
          "package": "feldspar-language",
          "signature": "FullShape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "FullShape",
          "package": "feldspar-language",
          "partial": "Full Shape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#t:FullShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "Shape",
          "package": "feldspar-language",
          "source": "src/Feldspar-Repa.html#Shape",
          "type": "class"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "Shape",
          "package": "feldspar-language",
          "partial": "Shape",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#t:Shape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "Slice",
          "package": "feldspar-language",
          "source": "src/Feldspar-Repa.html#Slice",
          "type": "class"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "Slice",
          "package": "feldspar-language",
          "partial": "Slice",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#t:Slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "SliceShape",
          "package": "feldspar-language",
          "signature": "SliceShape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "SliceShape",
          "package": "feldspar-language",
          "partial": "Slice Shape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#t:SliceShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Vectors\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Feldspar.Repa",
          "name": "Vector",
          "package": "feldspar-language",
          "source": "src/Feldspar-Repa.html#Vector",
          "type": "data"
        },
        "index": {
          "description": "Vectors",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "Vector",
          "package": "feldspar-language",
          "partial": "Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Shapes\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Feldspar.Repa",
          "name": "Z",
          "package": "feldspar-language",
          "source": "src/Feldspar-Repa.html#Z",
          "type": "data"
        },
        "index": {
          "description": "Shapes",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "Z",
          "package": "feldspar-language",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#t:Z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndex into a vector\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "(!:)",
          "package": "feldspar-language",
          "signature": "Vector sh a -\u003e sh -\u003e a",
          "source": "src/Feldspar-Repa.html#%21%3A",
          "type": "function"
        },
        "index": {
          "description": "Index into vector",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "(!:) !:",
          "normalized": "Vector a b-\u003ea-\u003eb",
          "package": "feldspar-language",
          "signature": "Vector sh a-\u003esh-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:-33-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "(++)",
          "package": "feldspar-language",
          "signature": "Vector DIM1 a -\u003e Vector DIM1 a -\u003e Vector DIM1 a",
          "source": "src/Feldspar-Repa.html#%2B%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "(++) ++",
          "normalized": "Vector DIM a-\u003eVector DIM a-\u003eVector DIM a",
          "package": "feldspar-language",
          "signature": "Vector DIM a-\u003eVector DIM a-\u003eVector DIM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:-43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerating a vector\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "(...)",
          "package": "feldspar-language",
          "signature": "Data Index -\u003e Data Index -\u003e DVector DIM1 Index",
          "source": "src/Feldspar-Repa.html#...",
          "type": "function"
        },
        "index": {
          "description": "Enumerating vector",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "(...) ...",
          "normalized": "Data Index-\u003eData Index-\u003eDVector DIM Index",
          "package": "feldspar-language",
          "signature": "Data Index-\u003eData Index-\u003eDVector DIM Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:..."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": ":.",
          "package": "feldspar-language",
          "signature": "tail :. head",
          "source": "src/Feldspar-Repa.html#%3A.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": ":.",
          "package": "feldspar-language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v::."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "All",
          "package": "feldspar-language",
          "signature": "All",
          "source": "src/Feldspar-Repa.html#All",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "All",
          "package": "feldspar-language",
          "partial": "All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:All"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "Any",
          "package": "feldspar-language",
          "signature": "Any",
          "source": "src/Feldspar-Repa.html#Any",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "Any",
          "package": "feldspar-language",
          "partial": "Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:Any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "Vector",
          "package": "feldspar-language",
          "signature": "Vector sh (sh -\u003e a)",
          "source": "src/Feldspar-Repa.html#Vector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "Vector",
          "normalized": "Vector a(a-\u003eb)",
          "package": "feldspar-language",
          "partial": "Vector",
          "signature": "Vector sh(sh-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "Z",
          "package": "feldspar-language",
          "signature": "Z",
          "source": "src/Feldspar-Repa.html#Z",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "Z",
          "package": "feldspar-language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:Z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the shape of a vector.\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "backpermute",
          "package": "feldspar-language",
          "signature": "sh' -\u003e (sh' -\u003e sh) -\u003e Vector sh a -\u003e Vector sh' a",
          "source": "src/Feldspar-Repa.html#backpermute",
          "type": "function"
        },
        "index": {
          "description": "Change the shape of vector",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "backpermute",
          "normalized": "a-\u003e(a-\u003eb)-\u003eVector b c-\u003eVector a c",
          "package": "feldspar-language",
          "signature": "sh'-\u003e(sh'-\u003esh)-\u003eVector sh a-\u003eVector sh' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:backpermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the diagonal of a two dimensional vector\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "diagonal",
          "package": "feldspar-language",
          "signature": "Vector DIM2 a -\u003e Vector DIM1 a",
          "source": "src/Feldspar-Repa.html#diagonal",
          "type": "function"
        },
        "index": {
          "description": "Extract the diagonal of two dimensional vector",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "diagonal",
          "normalized": "Vector DIM a-\u003eVector DIM a",
          "package": "feldspar-language",
          "signature": "Vector DIM a-\u003eVector DIM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:diagonal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the number of dimensions in a shape\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "dim",
          "package": "feldspar-language",
          "signature": "sh -\u003e Int",
          "source": "src/Feldspar-Repa.html#dim",
          "type": "method"
        },
        "index": {
          "description": "Get the number of dimensions in shape",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "dim",
          "normalized": "a-\u003eInt",
          "package": "feldspar-language",
          "signature": "sh-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:dim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "drop",
          "package": "feldspar-language",
          "signature": "Data Length -\u003e Vector DIM1 a -\u003e Vector DIM1 a",
          "source": "src/Feldspar-Repa.html#drop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "drop",
          "normalized": "Data Length-\u003eVector DIM a-\u003eVector DIM a",
          "package": "feldspar-language",
          "signature": "Data Length-\u003eVector DIM a-\u003eVector DIM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eenumFrom m\u003c/code\u003e: Enumerate the indexes from \u003ccode\u003em\u003c/code\u003e to \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "enumFrom",
          "package": "feldspar-language",
          "signature": "Data Index -\u003e Vector DIM1 (Data Index)",
          "source": "src/Feldspar-Repa.html#enumFrom",
          "type": "function"
        },
        "index": {
          "description": "enumFrom Enumerate the indexes from to maxBound",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "enumFrom",
          "normalized": "Data Index-\u003eVector DIM(Data Index)",
          "package": "feldspar-language",
          "partial": "From",
          "signature": "Data Index-\u003eVector DIM(Data Index)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:enumFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eenumFromTo m n\u003c/code\u003e: Enumerate the indexes from \u003ccode\u003em\u003c/code\u003e to \u003ccode\u003en\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eIn order to enumerate a different type, use \u003ccode\u003e\u003ca\u003ei2n\u003c/a\u003e\u003c/code\u003e, e.g:\n\u003c/p\u003e\u003cpre\u003e map i2n (10...20) :: Vector1 Word8\n\u003c/pre\u003e",
          "module": "Feldspar.Repa",
          "name": "enumFromTo",
          "package": "feldspar-language",
          "signature": "Data Index -\u003e Data Index -\u003e Vector DIM1 (Data Index)",
          "source": "src/Feldspar-Repa.html#enumFromTo",
          "type": "function"
        },
        "index": {
          "description": "enumFromTo Enumerate the indexes from to In order to enumerate different type use i2n e.g map i2n Vector1 Word8",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "enumFromTo",
          "normalized": "Data Index-\u003eData Index-\u003eVector DIM(Data Index)",
          "package": "feldspar-language",
          "partial": "From To",
          "signature": "Data Index-\u003eData Index-\u003eVector DIM(Data Index)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:enumFromTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe shape and size of the vector\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "extent",
          "package": "feldspar-language",
          "signature": "Vector sh a -\u003e sh",
          "source": "src/Feldspar-Repa.html#extent",
          "type": "function"
        },
        "index": {
          "description": "The shape and size of the vector",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "extent",
          "normalized": "Vector a b-\u003ea",
          "package": "feldspar-language",
          "signature": "Vector sh a-\u003esh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:extent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduce a vector along its last dimension\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "fold",
          "package": "feldspar-language",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e Vector (sh :. Data Length) a -\u003e Vector sh a",
          "source": "src/Feldspar-Repa.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Reduce vector along its last dimension",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "fold",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eVector(b Data Length)a-\u003eVector b a",
          "package": "feldspar-language",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003eVector(sh Data Length)a-\u003eVector sh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generalization of \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e which allows for different initial\n   values when starting to fold.\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "fold'",
          "package": "feldspar-language",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vector sh a -\u003e Vector (sh :. Data Length) a -\u003e Vector sh a",
          "source": "src/Feldspar-Repa.html#fold%27",
          "type": "function"
        },
        "index": {
          "description": "generalization of fold which allows for different initial values when starting to fold",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "fold'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVector b a-\u003eVector(b Data Length)a-\u003eVector b a",
          "package": "feldspar-language",
          "signature": "(a-\u003ea-\u003ea)-\u003eVector sh a-\u003eVector(sh Data Length)a-\u003eVector sh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:fold-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorresponds to the standard \u003ccode\u003efoldl1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "fold1",
          "package": "feldspar-language",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vector DIM1 a -\u003e a",
          "source": "src/Feldspar-Repa.html#fold1",
          "type": "function"
        },
        "index": {
          "description": "Corresponds to the standard foldl1",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "fold1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVector DIM a-\u003ea",
          "package": "feldspar-language",
          "signature": "(a-\u003ea-\u003ea)-\u003eVector DIM a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:fold1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorresponds to the standard \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "foldl",
          "package": "feldspar-language",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Vector DIM1 b -\u003e a",
          "source": "src/Feldspar-Repa.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "Corresponds to the standard foldl",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eVector DIM b-\u003ea",
          "package": "feldspar-language",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eVector DIM b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "freezeVector",
          "package": "feldspar-language",
          "signature": "DVector sh a -\u003e (Data [Length], Data [a])",
          "source": "src/Feldspar-Repa.html#freezeVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "freezeVector",
          "normalized": "DVector a b-\u003e(Data[Length],Data[b])",
          "package": "feldspar-language",
          "partial": "Vector",
          "signature": "DVector sh a-\u003e(Data[Length],Data[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:freezeVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse of \u003ccode\u003e\u003ca\u003etoIndex\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "fromIndex",
          "package": "feldspar-language",
          "signature": "sh -\u003e Data Index -\u003e sh",
          "source": "src/Feldspar-Repa.html#fromIndex",
          "type": "method"
        },
        "index": {
          "description": "Inverse of toIndex",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "fromIndex",
          "normalized": "a-\u003eData Index-\u003ea",
          "package": "feldspar-language",
          "partial": "Index",
          "signature": "sh-\u003eData Index-\u003esh",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:fromIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "fromList",
          "package": "feldspar-language",
          "signature": "[Data a] -\u003e Data [a]",
          "source": "src/Feldspar-Repa.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "fromList",
          "normalized": "[Data a]-\u003eData[a]",
          "package": "feldspar-language",
          "partial": "List",
          "signature": "[Data a]-\u003eData[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Fuctions\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eStore a vector in an array.\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "fromVector",
          "package": "feldspar-language",
          "signature": "DVector sh a -\u003e Data [a]",
          "source": "src/Feldspar-Repa.html#fromVector",
          "type": "function"
        },
        "index": {
          "description": "Fuctions Store vector in an array",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "fromVector",
          "normalized": "DVector a b-\u003eData[b]",
          "package": "feldspar-language",
          "partial": "Vector",
          "signature": "DVector sh a-\u003eData[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:fromVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "fullOfSlice",
          "package": "feldspar-language",
          "signature": "ss -\u003e SliceShape ss -\u003e FullShape ss",
          "source": "src/Feldspar-Repa.html#fullOfSlice",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "fullOfSlice",
          "normalized": "a-\u003eSliceShape a-\u003eFullShape a",
          "package": "feldspar-language",
          "partial": "Of Slice",
          "signature": "ss-\u003eSliceShape ss-\u003eFullShape ss",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:fullOfSlice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "head",
          "package": "feldspar-language",
          "signature": "Vector DIM1 a -\u003e a",
          "source": "src/Feldspar-Repa.html#head",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "head",
          "normalized": "Vector DIM a-\u003ea",
          "package": "feldspar-language",
          "signature": "Vector DIM a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether an index is within a given shape.\n \u003ccode\u003einRange l u i\u003c/code\u003e checks that \u003ccode\u003ei\u003c/code\u003e fits between \u003ccode\u003el\u003c/code\u003e and \u003ccode\u003eu\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "inRange",
          "package": "feldspar-language",
          "signature": "sh -\u003e sh -\u003e sh -\u003e Data Bool",
          "source": "src/Feldspar-Repa.html#inRange",
          "type": "method"
        },
        "index": {
          "description": "Check whether an index is within given shape inRange checks that fits between and",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "inRange",
          "normalized": "a-\u003ea-\u003ea-\u003eData Bool",
          "package": "feldspar-language",
          "partial": "Range",
          "signature": "sh-\u003esh-\u003esh-\u003eData Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:inRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "indexed",
          "package": "feldspar-language",
          "signature": "Data Length -\u003e (Data Index -\u003e a) -\u003e Vector DIM1 a",
          "source": "src/Feldspar-Repa.html#indexed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "indexed",
          "normalized": "Data Length-\u003e(Data Index-\u003ea)-\u003eVector DIM a",
          "package": "feldspar-language",
          "signature": "Data Length-\u003e(Data Index-\u003ea)-\u003eVector DIM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:indexed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "init",
          "package": "feldspar-language",
          "signature": "Vector DIM1 a -\u003e Vector DIM1 a",
          "source": "src/Feldspar-Repa.html#init",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "init",
          "normalized": "Vector DIM a-\u003eVector DIM a",
          "package": "feldspar-language",
          "signature": "Vector DIM a-\u003eVector DIM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "inits",
          "package": "feldspar-language",
          "signature": "Vector DIM1 a -\u003e Vector DIM1 (Vector DIM1 a)",
          "source": "src/Feldspar-Repa.html#inits",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "inits",
          "normalized": "Vector DIM a-\u003eVector DIM(Vector DIM a)",
          "package": "feldspar-language",
          "signature": "Vector DIM a-\u003eVector DIM(Vector DIM a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:inits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "inits1",
          "package": "feldspar-language",
          "signature": "Vector DIM1 a -\u003e Vector DIM1 (Vector DIM1 a)",
          "source": "src/Feldspar-Repa.html#inits1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "inits1",
          "normalized": "Vector DIM a-\u003eVector DIM(Vector DIM a)",
          "package": "feldspar-language",
          "signature": "Vector DIM a-\u003eVector DIM(Vector DIM a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:inits1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe intersection of two dimensions.\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "intersectDim",
          "package": "feldspar-language",
          "signature": "sh -\u003e sh -\u003e sh",
          "source": "src/Feldspar-Repa.html#intersectDim",
          "type": "method"
        },
        "index": {
          "description": "The intersection of two dimensions",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "intersectDim",
          "normalized": "a-\u003ea-\u003ea",
          "package": "feldspar-language",
          "partial": "Dim",
          "signature": "sh-\u003esh-\u003esh",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:intersectDim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "laplace",
          "package": "feldspar-language",
          "signature": "Data Length -\u003e DVector DIM2 Float -\u003e DVector DIM2 Float",
          "source": "src/Feldspar-Repa.html#laplace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "laplace",
          "normalized": "Data Length-\u003eDVector DIM Float-\u003eDVector DIM Float",
          "package": "feldspar-language",
          "signature": "Data Length-\u003eDVector DIM Float-\u003eDVector DIM Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:laplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "last",
          "package": "feldspar-language",
          "signature": "Vector DIM1 a -\u003e a",
          "source": "src/Feldspar-Repa.html#last",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "last",
          "normalized": "Vector DIM a-\u003ea",
          "package": "feldspar-language",
          "signature": "Vector DIM a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "length",
          "package": "feldspar-language",
          "signature": "Vector DIM1 a -\u003e Data Length",
          "source": "src/Feldspar-Repa.html#length",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "length",
          "normalized": "Vector DIM a-\u003eData Length",
          "package": "feldspar-language",
          "signature": "Vector DIM a-\u003eData Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function on all the elements of a vector\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "map",
          "package": "feldspar-language",
          "signature": "(a -\u003e b) -\u003e Vector sh a -\u003e Vector sh b",
          "source": "src/Feldspar-Repa.html#map",
          "type": "function"
        },
        "index": {
          "description": "Map function on all the elements of vector",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eVector c a-\u003eVector c b",
          "package": "feldspar-language",
          "signature": "(a-\u003eb)-\u003eVector sh a-\u003eVector sh b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "mapDIM1",
          "package": "feldspar-language",
          "signature": "(Data Index -\u003e Data Index) -\u003e DIM1 -\u003e DIM1",
          "source": "src/Feldspar-Repa.html#mapDIM1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "mapDIM1",
          "normalized": "(Data Index-\u003eData Index)-\u003eDIM-\u003eDIM",
          "package": "feldspar-language",
          "partial": "DIM",
          "signature": "(Data Index-\u003eData Index)-\u003eDIM-\u003eDIM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:mapDIM1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "maximum",
          "package": "feldspar-language",
          "signature": "Vector DIM1 (Data a) -\u003e Data a",
          "source": "src/Feldspar-Repa.html#maximum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "maximum",
          "normalized": "Vector DIM(Data a)-\u003eData a",
          "package": "feldspar-language",
          "signature": "Vector DIM(Data a)-\u003eData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a vector in memory. Use this function instead of \u003ccode\u003e\u003ca\u003eforce\u003c/a\u003e\u003c/code\u003e if\n   possible as it is both much more safe and faster.\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "memorize",
          "package": "feldspar-language",
          "signature": "DVector sh a -\u003e DVector sh a",
          "source": "src/Feldspar-Repa.html#memorize",
          "type": "function"
        },
        "index": {
          "description": "Store vector in memory Use this function instead of force if possible as it is both much more safe and faster",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "memorize",
          "normalized": "DVector a b-\u003eDVector a b",
          "package": "feldspar-language",
          "signature": "DVector sh a-\u003eDVector sh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:memorize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "minimum",
          "package": "feldspar-language",
          "signature": "Vector DIM1 (Data a) -\u003e Data a",
          "source": "src/Feldspar-Repa.html#minimum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "minimum",
          "normalized": "Vector DIM(Data a)-\u003eData a",
          "package": "feldspar-language",
          "signature": "Vector DIM(Data a)-\u003eData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatrix multiplication\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "mmMult",
          "package": "feldspar-language",
          "signature": "DVector DIM2 e -\u003e DVector DIM2 e -\u003e DVector DIM2 e",
          "source": "src/Feldspar-Repa.html#mmMult",
          "type": "function"
        },
        "index": {
          "description": "Matrix multiplication",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "mmMult",
          "normalized": "DVector DIM a-\u003eDVector DIM a-\u003eDVector DIM a",
          "package": "feldspar-language",
          "partial": "Mult",
          "signature": "DVector DIM e-\u003eDVector DIM e-\u003eDVector DIM e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:mmMult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the extent of the vector to the supplied value. If the supplied\n extent will contain more elements than the old extent, the new elements\n will have undefined value.\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "newExtent",
          "package": "feldspar-language",
          "signature": "sh -\u003e Vector sh a -\u003e Vector sh a",
          "source": "src/Feldspar-Repa.html#newExtent",
          "type": "function"
        },
        "index": {
          "description": "Change the extent of the vector to the supplied value If the supplied extent will contain more elements than the old extent the new elements will have undefined value",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "newExtent",
          "normalized": "a-\u003eVector a b-\u003eVector a b",
          "package": "feldspar-language",
          "partial": "Extent",
          "signature": "sh-\u003eVector sh a-\u003eVector sh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:newExtent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the length of the vector to the supplied value. If the supplied\n length is greater than the old length, the new elements will have undefined\n value. The resulting vector has only one segment.\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "newLen",
          "package": "feldspar-language",
          "signature": "Data Length -\u003e Vector DIM1 a -\u003e Vector DIM1 a",
          "source": "src/Feldspar-Repa.html#newLen",
          "type": "function"
        },
        "index": {
          "description": "Change the length of the vector to the supplied value If the supplied length is greater than the old length the new elements will have undefined value The resulting vector has only one segment",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "newLen",
          "normalized": "Data Length-\u003eVector DIM a-\u003eVector DIM a",
          "package": "feldspar-language",
          "partial": "Len",
          "signature": "Data Length-\u003eVector DIM a-\u003eVector DIM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:newLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePermute a vector\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "permute",
          "package": "feldspar-language",
          "signature": "(Data Length -\u003e Data Index -\u003e Data Index) -\u003e Vector DIM1 a -\u003e Vector DIM1 a",
          "source": "src/Feldspar-Repa.html#permute",
          "type": "function"
        },
        "index": {
          "description": "Permute vector",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "permute",
          "normalized": "(Data Length-\u003eData Index-\u003eData Index)-\u003eVector DIM a-\u003eVector DIM a",
          "package": "feldspar-language",
          "signature": "(Data Length-\u003eData Index-\u003eData Index)-\u003eVector DIM a-\u003eVector DIM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:permute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDuplicates part of a vector along a new dimension.\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "replicate",
          "package": "feldspar-language",
          "signature": "sl -\u003e Vector (SliceShape sl) a -\u003e Vector (FullShape sl) a",
          "source": "src/Feldspar-Repa.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "Duplicates part of vector along new dimension",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "replicate",
          "normalized": "a-\u003eVector(SliceShape a)b-\u003eVector(FullShape a)b",
          "package": "feldspar-language",
          "signature": "sl-\u003eVector(SliceShape sl)a-\u003eVector(FullShape sl)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "replicate1",
          "package": "feldspar-language",
          "signature": "Data Length -\u003e a -\u003e Vector DIM1 a",
          "source": "src/Feldspar-Repa.html#replicate1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "replicate1",
          "normalized": "Data Length-\u003ea-\u003eVector DIM a",
          "package": "feldspar-language",
          "signature": "Data Length-\u003ea-\u003eVector DIM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:replicate1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the shape of a vector. This function is potentially unsafe, the\n   new shape need to have fewer or equal number of elements compared to\n   the old shape.\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "reshape",
          "package": "feldspar-language",
          "signature": "sh -\u003e Vector sh' a -\u003e Vector sh a",
          "source": "src/Feldspar-Repa.html#reshape",
          "type": "function"
        },
        "index": {
          "description": "Change the shape of vector This function is potentially unsafe the new shape need to have fewer or equal number of elements compared to the old shape",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "reshape",
          "normalized": "a-\u003eVector b c-\u003eVector a c",
          "package": "feldspar-language",
          "signature": "sh-\u003eVector sh' a-\u003eVector sh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:reshape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "reverse",
          "package": "feldspar-language",
          "signature": "Vector DIM1 a -\u003e Vector DIM1 a",
          "source": "src/Feldspar-Repa.html#reverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "reverse",
          "normalized": "Vector DIM a-\u003eVector DIM a",
          "package": "feldspar-language",
          "signature": "Vector DIM a-\u003eVector DIM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "rotateVecL",
          "package": "feldspar-language",
          "signature": "Data Index -\u003e Vector DIM1 a -\u003e Vector DIM1 a",
          "source": "src/Feldspar-Repa.html#rotateVecL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "rotateVecL",
          "normalized": "Data Index-\u003eVector DIM a-\u003eVector DIM a",
          "package": "feldspar-language",
          "partial": "Vec",
          "signature": "Data Index-\u003eVector DIM a-\u003eVector DIM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:rotateVecL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "rotateVecR",
          "package": "feldspar-language",
          "signature": "Data Index -\u003e Vector DIM1 a -\u003e Vector DIM1 a",
          "source": "src/Feldspar-Repa.html#rotateVecR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "rotateVecR",
          "normalized": "Data Index-\u003eVector DIM a-\u003eVector DIM a",
          "package": "feldspar-language",
          "partial": "Vec",
          "signature": "Data Index-\u003eVector DIM a-\u003eVector DIM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:rotateVecR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScalar product of two vectors\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "scalarProd",
          "package": "feldspar-language",
          "signature": "Vector DIM1 a -\u003e Vector DIM1 a -\u003e a",
          "source": "src/Feldspar-Repa.html#scalarProd",
          "type": "function"
        },
        "index": {
          "description": "Scalar product of two vectors",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "scalarProd",
          "normalized": "Vector DIM a-\u003eVector DIM a-\u003ea",
          "package": "feldspar-language",
          "partial": "Prod",
          "signature": "Vector DIM a-\u003eVector DIM a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:scalarProd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the total number of elements in an array with this shape.\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "size",
          "package": "feldspar-language",
          "signature": "sh -\u003e Data Length",
          "source": "src/Feldspar-Repa.html#size",
          "type": "method"
        },
        "index": {
          "description": "Get the total number of elements in an array with this shape",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "size",
          "normalized": "a-\u003eData Length",
          "package": "feldspar-language",
          "signature": "sh-\u003eData Length",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts a slice from a vector.\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "slice",
          "package": "feldspar-language",
          "signature": "Vector (FullShape sl) a -\u003e sl -\u003e Vector (SliceShape sl) a",
          "source": "src/Feldspar-Repa.html#slice",
          "type": "function"
        },
        "index": {
          "description": "Extracts slice from vector",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "slice",
          "normalized": "Vector(FullShape a)b-\u003ea-\u003eVector(SliceShape a)b",
          "package": "feldspar-language",
          "signature": "Vector(FullShape sl)a-\u003esl-\u003eVector(SliceShape sl)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:slice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "sliceOfFull",
          "package": "feldspar-language",
          "signature": "ss -\u003e FullShape ss -\u003e SliceShape ss",
          "source": "src/Feldspar-Repa.html#sliceOfFull",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "sliceOfFull",
          "normalized": "a-\u003eFullShape a-\u003eSliceShape a",
          "package": "feldspar-language",
          "partial": "Of Full",
          "signature": "ss-\u003eFullShape ss-\u003eSliceShape ss",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:sliceOfFull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "splitAt",
          "package": "feldspar-language",
          "signature": "Data Index -\u003e Vector DIM1 a -\u003e (Vector DIM1 a, Vector DIM1 a)",
          "source": "src/Feldspar-Repa.html#splitAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "splitAt",
          "normalized": "Data Index-\u003eVector DIM a-\u003e(Vector DIM a,Vector DIM a)",
          "package": "feldspar-language",
          "partial": "At",
          "signature": "Data Index-\u003eVector DIM a-\u003e(Vector DIM a,Vector DIM a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "stencil",
          "package": "feldspar-language",
          "signature": "DVector DIM2 Float -\u003e DVector DIM2 Float",
          "source": "src/Feldspar-Repa.html#stencil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "stencil",
          "normalized": "DVector DIM Float-\u003eDVector DIM Float",
          "package": "feldspar-language",
          "signature": "DVector DIM Float-\u003eDVector DIM Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:stencil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSumming a vector along its last dimension\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "sum",
          "package": "feldspar-language",
          "signature": "DVector (sh :. Data Length) a -\u003e DVector sh a",
          "source": "src/Feldspar-Repa.html#sum",
          "type": "function"
        },
        "index": {
          "description": "Summing vector along its last dimension",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "sum",
          "normalized": "DVector(a Data Length)b-\u003eDVector a b",
          "package": "feldspar-language",
          "signature": "DVector(sh Data Length)a-\u003eDVector sh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "sum1",
          "package": "feldspar-language",
          "signature": "Vector DIM1 a -\u003e a",
          "source": "src/Feldspar-Repa.html#sum1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "sum1",
          "normalized": "Vector DIM a-\u003ea",
          "package": "feldspar-language",
          "signature": "Vector DIM a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:sum1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "tVec",
          "package": "feldspar-language",
          "signature": "Patch a a -\u003e Patch (Vector DIM1 a) (Vector DIM1 a)",
          "source": "src/Feldspar-Repa.html#tVec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "tVec",
          "normalized": "Patch a a-\u003ePatch(Vector DIM a)(Vector DIM a)",
          "package": "feldspar-language",
          "partial": "Vec",
          "signature": "Patch a a-\u003ePatch(Vector DIM a)(Vector DIM a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:tVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "tVec1",
          "package": "feldspar-language",
          "signature": "Patch a a -\u003e Patch (Vector DIM1 (Data a)) (Vector DIM1 (Data a))",
          "source": "src/Feldspar-Repa.html#tVec1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "tVec1",
          "normalized": "Patch a a-\u003ePatch(Vector DIM(Data a))(Vector DIM(Data a))",
          "package": "feldspar-language",
          "partial": "Vec",
          "signature": "Patch a a-\u003ePatch(Vector DIM(Data a))(Vector DIM(Data a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:tVec1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "tVec2",
          "package": "feldspar-language",
          "signature": "Patch a a -\u003e Patch (Vector DIM2 (Data a)) (Vector DIM2 (Data a))",
          "source": "src/Feldspar-Repa.html#tVec2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "tVec2",
          "normalized": "Patch a a-\u003ePatch(Vector DIM(Data a))(Vector DIM(Data a))",
          "package": "feldspar-language",
          "partial": "Vec",
          "signature": "Patch a a-\u003ePatch(Vector DIM(Data a))(Vector DIM(Data a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:tVec2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "tail",
          "package": "feldspar-language",
          "signature": "Vector DIM1 a -\u003e Vector DIM1 a",
          "source": "src/Feldspar-Repa.html#tail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "tail",
          "normalized": "Vector DIM a-\u003eVector DIM a",
          "package": "feldspar-language",
          "signature": "Vector DIM a-\u003eVector DIM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "tails",
          "package": "feldspar-language",
          "signature": "Vector DIM1 a -\u003e Vector DIM1 (Vector DIM1 a)",
          "source": "src/Feldspar-Repa.html#tails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "tails",
          "normalized": "Vector DIM a-\u003eVector DIM(Vector DIM a)",
          "package": "feldspar-language",
          "signature": "Vector DIM a-\u003eVector DIM(Vector DIM a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:tails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "take",
          "package": "feldspar-language",
          "signature": "Data Length -\u003e Vector DIM1 a -\u003e Vector DIM1 a",
          "source": "src/Feldspar-Repa.html#take",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "take",
          "normalized": "Data Length-\u003eVector DIM a-\u003eVector DIM a",
          "package": "feldspar-language",
          "signature": "Data Length-\u003eVector DIM a-\u003eVector DIM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "thawVector",
          "package": "feldspar-language",
          "signature": "(Data [Length], Data [a]) -\u003e DVector sh a",
          "source": "src/Feldspar-Repa.html#thawVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "thawVector",
          "normalized": "(Data[Length],Data[a])-\u003eDVector b a",
          "package": "feldspar-language",
          "partial": "Vector",
          "signature": "(Data[Length],Data[a])-\u003eDVector sh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:thawVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndex into flat, linear, row-major representation\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "toIndex",
          "package": "feldspar-language",
          "signature": "sh -\u003e sh -\u003e Data Index",
          "source": "src/Feldspar-Repa.html#toIndex",
          "type": "method"
        },
        "index": {
          "description": "Index into flat linear row-major representation",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "toIndex",
          "normalized": "a-\u003ea-\u003eData Index",
          "package": "feldspar-language",
          "partial": "Index",
          "signature": "sh-\u003esh-\u003eData Index",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:toIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a shape into a list. Used in the \u003ccode\u003e\u003ca\u003eSyntactic\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "toList",
          "package": "feldspar-language",
          "signature": "sh -\u003e [Data Length]",
          "source": "src/Feldspar-Repa.html#toList",
          "type": "method"
        },
        "index": {
          "description": "Turn shape into list Used in the Syntactic instance",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "toList",
          "normalized": "a-\u003e[Data Length]",
          "package": "feldspar-language",
          "partial": "List",
          "signature": "sh-\u003e[Data Length]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReconstruct a shape. Used in the \u003ccode\u003e\u003ca\u003eSyntactic\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "toShape",
          "package": "feldspar-language",
          "signature": "Int -\u003e Data [Length] -\u003e sh",
          "source": "src/Feldspar-Repa.html#toShape",
          "type": "method"
        },
        "index": {
          "description": "Reconstruct shape Used in the Syntactic instance",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "toShape",
          "normalized": "Int-\u003eData[Length]-\u003ea",
          "package": "feldspar-language",
          "partial": "Shape",
          "signature": "Int-\u003eData[Length]-\u003esh",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:toShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestore a vector from an array\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "toVector",
          "package": "feldspar-language",
          "signature": "sh -\u003e Data [a] -\u003e DVector sh a",
          "source": "src/Feldspar-Repa.html#toVector",
          "type": "function"
        },
        "index": {
          "description": "Restore vector from an array",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "toVector",
          "normalized": "a-\u003eData[b]-\u003eDVector a b",
          "package": "feldspar-language",
          "partial": "Vector",
          "signature": "sh-\u003eData[a]-\u003eDVector sh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:toVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "transpose2D",
          "package": "feldspar-language",
          "signature": "Vector DIM2 e -\u003e Vector DIM2 e",
          "source": "src/Feldspar-Repa.html#transpose2D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "transpose2D",
          "normalized": "Vector DIM a-\u003eVector DIM a",
          "package": "feldspar-language",
          "signature": "Vector DIM e-\u003eVector DIM e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:transpose2D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange shape and transform elements of a vector. This function is the\n   most general way of manipulating a vector.\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "traverse",
          "package": "feldspar-language",
          "signature": "Vector sh a -\u003e (sh -\u003e sh') -\u003e ((sh -\u003e a) -\u003e sh' -\u003e a') -\u003e Vector sh' a'",
          "source": "src/Feldspar-Repa.html#traverse",
          "type": "function"
        },
        "index": {
          "description": "Change shape and transform elements of vector This function is the most general way of manipulating vector",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "traverse",
          "normalized": "Vector a b-\u003e(a-\u003ec)-\u003e((a-\u003eb)-\u003ec-\u003ed)-\u003eVector c d",
          "package": "feldspar-language",
          "signature": "Vector sh a-\u003e(sh-\u003esh')-\u003e((sh-\u003ea)-\u003esh'-\u003ea')-\u003eVector sh' a'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:traverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA scalar (zero dimensional) vector\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "unit",
          "package": "feldspar-language",
          "signature": "a -\u003e Vector Z a",
          "source": "src/Feldspar-Repa.html#unit",
          "type": "function"
        },
        "index": {
          "description": "scalar zero dimensional vector",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "unit",
          "normalized": "a-\u003eVector Z a",
          "package": "feldspar-language",
          "signature": "a-\u003eVector Z a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe shape of an array with size one, with a particular dimension\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "unitDim",
          "package": "feldspar-language",
          "signature": "sh",
          "source": "src/Feldspar-Repa.html#unitDim",
          "type": "method"
        },
        "index": {
          "description": "The shape of an array with size one with particular dimension",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "unitDim",
          "package": "feldspar-language",
          "partial": "Dim",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:unitDim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Repa",
          "name": "unzip",
          "package": "feldspar-language",
          "signature": "Vector DIM1 (a, b) -\u003e (Vector DIM1 a, Vector DIM1 b)",
          "source": "src/Feldspar-Repa.html#unzip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "unzip",
          "normalized": "Vector DIM(a,b)-\u003e(Vector DIM a,Vector DIM b)",
          "package": "feldspar-language",
          "signature": "Vector DIM(a,b)-\u003e(Vector DIM a,Vector DIM b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe shape of an array of size zero, with a particular dimension\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "zeroDim",
          "package": "feldspar-language",
          "signature": "sh",
          "source": "src/Feldspar-Repa.html#zeroDim",
          "type": "method"
        },
        "index": {
          "description": "The shape of an array of size zero with particular dimension",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "zeroDim",
          "package": "feldspar-language",
          "partial": "Dim",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:zeroDim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines the elements of two vectors. The size of the resulting vector\n   will be the intersection of the two argument vectors.\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "zip",
          "package": "feldspar-language",
          "signature": "Vector sh a -\u003e Vector sh b -\u003e Vector sh (a, b)",
          "source": "src/Feldspar-Repa.html#zip",
          "type": "function"
        },
        "index": {
          "description": "Combines the elements of two vectors The size of the resulting vector will be the intersection of the two argument vectors",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "zip",
          "normalized": "Vector a b-\u003eVector a c-\u003eVector a(b,c)",
          "package": "feldspar-language",
          "signature": "Vector sh a-\u003eVector sh b-\u003eVector sh(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines the elements of two vectors pointwise using a function.\n   The size of the resulting vector will be the intersection of the\n   two argument vectors.\n\u003c/p\u003e",
          "module": "Feldspar.Repa",
          "name": "zipWith",
          "package": "feldspar-language",
          "signature": "(a -\u003e b -\u003e c) -\u003e Vector sh a -\u003e Vector sh b -\u003e Vector sh c",
          "source": "src/Feldspar-Repa.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "Combines the elements of two vectors pointwise using function The size of the resulting vector will be the intersection of the two argument vectors",
          "hierarchy": "Feldspar Repa",
          "module": "Feldspar.Repa",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eVector d a-\u003eVector d b-\u003eVector d c",
          "package": "feldspar-language",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eVector sh a-\u003eVector sh b-\u003eVector sh c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Repa.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Stream",
          "name": "Stream",
          "package": "feldspar-language",
          "source": "src/Feldspar-Stream.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "Stream",
          "package": "feldspar-language",
          "partial": "Stream",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfinite streams.\n\u003c/p\u003e",
          "module": "Feldspar.Stream",
          "name": "Stream",
          "package": "feldspar-language",
          "source": "src/Feldspar-Stream.html#Stream",
          "type": "data"
        },
        "index": {
          "description": "Infinite streams",
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "Stream",
          "package": "feldspar-language",
          "partial": "Stream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#t:Stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoops through a vector indefinitely to produce a stream.\n\u003c/p\u003e",
          "module": "Feldspar.Stream",
          "name": "cycle",
          "package": "feldspar-language",
          "signature": "Vector a -\u003e Stream a",
          "source": "src/Feldspar-Stream.html#cycle",
          "type": "function"
        },
        "index": {
          "description": "Loops through vector indefinitely to produce stream",
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "cycle",
          "normalized": "Vector a-\u003eStream a",
          "package": "feldspar-language",
          "signature": "Vector a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#v:cycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'downsample n str' takes every \u003ccode\u003en\u003c/code\u003eth element of the input stream\n\u003c/p\u003e",
          "module": "Feldspar.Stream",
          "name": "downsample",
          "package": "feldspar-language",
          "signature": "Data Index -\u003e Stream a -\u003e Stream a",
          "source": "src/Feldspar-Stream.html#downsample",
          "type": "function"
        },
        "index": {
          "description": "downsample str takes every th element of the input stream",
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "downsample",
          "normalized": "Data Index-\u003eStream a-\u003eStream a",
          "package": "feldspar-language",
          "signature": "Data Index-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#v:downsample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop a number of elements from the front of a stream\n\u003c/p\u003e",
          "module": "Feldspar.Stream",
          "name": "drop",
          "package": "feldspar-language",
          "signature": "Data Length -\u003e Stream a -\u003e Stream a",
          "source": "src/Feldspar-Stream.html#drop",
          "type": "function"
        },
        "index": {
          "description": "Drop number of elements from the front of stream",
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "drop",
          "normalized": "Data Length-\u003eStream a-\u003eStream a",
          "package": "feldspar-language",
          "signature": "Data Length-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'duplicate n str' stretches the stream by duplicating the elements \u003ccode\u003en\u003c/code\u003e times\n\u003c/p\u003e",
          "module": "Feldspar.Stream",
          "name": "duplicate",
          "package": "feldspar-language",
          "signature": "Data Index -\u003e Stream a -\u003e Stream a",
          "source": "src/Feldspar-Stream.html#duplicate",
          "type": "function"
        },
        "index": {
          "description": "duplicate str stretches the stream by duplicating the elements times",
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "duplicate",
          "normalized": "Data Index-\u003eStream a-\u003eStream a",
          "package": "feldspar-language",
          "signature": "Data Index-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#v:duplicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fir filter on streams\n\u003c/p\u003e",
          "module": "Feldspar.Stream",
          "name": "fir",
          "package": "feldspar-language",
          "signature": "Vector1 Float -\u003e Stream (Data Float) -\u003e Stream (Data Float)",
          "source": "src/Feldspar-Stream.html#fir",
          "type": "function"
        },
        "index": {
          "description": "fir filter on streams",
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "fir",
          "normalized": "Vector Float-\u003eStream(Data Float)-\u003eStream(Data Float)",
          "package": "feldspar-language",
          "signature": "Vector Float-\u003eStream(Data Float)-\u003eStream(Data Float)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#v:fir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the first element of a stream\n\u003c/p\u003e",
          "module": "Feldspar.Stream",
          "name": "head",
          "package": "feldspar-language",
          "signature": "Stream a -\u003e a",
          "source": "src/Feldspar-Stream.html#head",
          "type": "function"
        },
        "index": {
          "description": "Take the first element of stream",
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "head",
          "normalized": "Stream a-\u003ea",
          "package": "feldspar-language",
          "signature": "Stream a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn iir filter on streams\n\u003c/p\u003e",
          "module": "Feldspar.Stream",
          "name": "iir",
          "package": "feldspar-language",
          "signature": "Data Float -\u003e Vector1 Float -\u003e Vector1 Float -\u003e Stream (Data Float) -\u003e Stream (Data Float)",
          "source": "src/Feldspar-Stream.html#iir",
          "type": "function"
        },
        "index": {
          "description": "An iir filter on streams",
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "iir",
          "normalized": "Data Float-\u003eVector Float-\u003eVector Float-\u003eStream(Data Float)-\u003eStream(Data Float)",
          "package": "feldspar-language",
          "signature": "Data Float-\u003eVector Float-\u003eVector Float-\u003eStream(Data Float)-\u003eStream(Data Float)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#v:iir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new stream by alternating between the elements from\n   the two input streams\n\u003c/p\u003e",
          "module": "Feldspar.Stream",
          "name": "interleave",
          "package": "feldspar-language",
          "signature": "Stream a -\u003e Stream a -\u003e Stream a",
          "source": "src/Feldspar-Stream.html#interleave",
          "type": "function"
        },
        "index": {
          "description": "Create new stream by alternating between the elements from the two input streams",
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "interleave",
          "normalized": "Stream a-\u003eStream a-\u003eStream a",
          "package": "feldspar-language",
          "signature": "Stream a-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#v:interleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'intersperse a str' inserts an \u003ccode\u003ea\u003c/code\u003e between each element of the stream\n    \u003ccode\u003estr\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Stream",
          "name": "intersperse",
          "package": "feldspar-language",
          "signature": "a -\u003e Stream a -\u003e Stream a",
          "source": "src/Feldspar-Stream.html#intersperse",
          "type": "function"
        },
        "index": {
          "description": "intersperse str inserts an between each element of the stream str",
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "intersperse",
          "normalized": "a-\u003eStream a-\u003eStream a",
          "package": "feldspar-language",
          "signature": "a-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIteratively applies a function to a starting element. All the successive\n   results are used to create a stream.\n\u003c/p\u003e\u003cpre\u003eiterate f a == [a, f a, f (f a), f (f (f a)) ...]\u003c/pre\u003e",
          "module": "Feldspar.Stream",
          "name": "iterate",
          "package": "feldspar-language",
          "signature": "(a -\u003e a) -\u003e a -\u003e Stream a",
          "source": "src/Feldspar-Stream.html#iterate",
          "type": "function"
        },
        "index": {
          "description": "Iteratively applies function to starting element All the successive results are used to create stream iterate",
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "iterate",
          "normalized": "(a-\u003ea)-\u003ea-\u003eStream a",
          "package": "feldspar-language",
          "signature": "(a-\u003ea)-\u003ea-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#v:iterate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'map f str' transforms every element of the stream \u003ccode\u003estr\u003c/code\u003e using the\n   function \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Stream",
          "name": "map",
          "package": "feldspar-language",
          "signature": "(a -\u003e b) -\u003e Stream a -\u003e Stream b",
          "source": "src/Feldspar-Stream.html#map",
          "type": "function"
        },
        "index": {
          "description": "map str transforms every element of the stream str using the function",
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eStream a-\u003eStream b",
          "package": "feldspar-language",
          "signature": "(a-\u003eb)-\u003eStream a-\u003eStream b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaps a function over a stream using an accumulator.\n\u003c/p\u003e",
          "module": "Feldspar.Stream",
          "name": "mapAccum",
          "package": "feldspar-language",
          "signature": "(acc -\u003e a -\u003e (acc, b)) -\u003e acc -\u003e Stream a -\u003e Stream b",
          "source": "src/Feldspar-Stream.html#mapAccum",
          "type": "function"
        },
        "index": {
          "description": "Maps function over stream using an accumulator",
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "mapAccum",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eStream b-\u003eStream c",
          "package": "feldspar-language",
          "partial": "Accum",
          "signature": "(acc-\u003ea-\u003e(acc,b))-\u003eacc-\u003eStream a-\u003eStream b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#v:mapAccum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'mapNth f n k str' transforms every \u003ccode\u003en\u003c/code\u003eth element with offset \u003ccode\u003ek\u003c/code\u003e\n    of the stream \u003ccode\u003estr\u003c/code\u003e using the function \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Stream",
          "name": "mapNth",
          "package": "feldspar-language",
          "signature": "(a -\u003e a) -\u003e Data Index -\u003e Data Index -\u003e Stream a -\u003e Stream a",
          "source": "src/Feldspar-Stream.html#mapNth",
          "type": "function"
        },
        "index": {
          "description": "mapNth str transforms every th element with offset of the stream str using the function",
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "mapNth",
          "normalized": "(a-\u003ea)-\u003eData Index-\u003eData Index-\u003eStream a-\u003eStream a",
          "package": "feldspar-language",
          "partial": "Nth",
          "signature": "(a-\u003ea)-\u003eData Index-\u003eData Index-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#v:mapNth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'maps fs str' uses one of the functions from \u003ccode\u003efs\u003c/code\u003e successively to modify\n   the elements of \u003ccode\u003estr\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Stream",
          "name": "maps",
          "package": "feldspar-language",
          "signature": "[a -\u003e a] -\u003e Stream a -\u003e Stream a",
          "source": "src/Feldspar-Stream.html#maps",
          "type": "function"
        },
        "index": {
          "description": "maps fs str uses one of the functions from fs successively to modify the elements of str",
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "maps",
          "normalized": "[a-\u003ea]-\u003eStream a-\u003eStream a",
          "package": "feldspar-language",
          "signature": "[a-\u003ea]-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#v:maps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA recurrence combinator with input. The function \u003ccode\u003e\u003ca\u003erecurrenceI\u003c/a\u003e\u003c/code\u003e is\n   similar to \u003ccode\u003e\u003ca\u003erecurrenceO\u003c/a\u003e\u003c/code\u003e. The difference is that that it has an input\n   stream, and that the recurrence equation may only refer to previous\n   inputs, it may not refer to previous outputs.\n\u003c/p\u003e\u003cp\u003eThe sliding average of a stream can easily be implemented using\n \u003ccode\u003e\u003ca\u003erecurrenceI\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e slidingAvg :: Data WordN -\u003e Stream (Data WordN) -\u003e Stream (Data WordN)\n slidingAvg n str = recurrenceI (replicate n 0) str\n                    (\\input -\u003e sum input `quot` n)\n\u003c/pre\u003e",
          "module": "Feldspar.Stream",
          "name": "recurrenceI",
          "package": "feldspar-language",
          "signature": "Vector1 a -\u003e Stream (Data a) -\u003e (Vector1 a -\u003e Data b) -\u003e Stream (Data b)",
          "source": "src/Feldspar-Stream.html#recurrenceI",
          "type": "function"
        },
        "index": {
          "description": "recurrence combinator with input The function recurrenceI is similar to recurrenceO The difference is that that it has an input stream and that the recurrence equation may only refer to previous inputs it may not refer to previous outputs The sliding average of stream can easily be implemented using recurrenceI slidingAvg Data WordN Stream Data WordN Stream Data WordN slidingAvg str recurrenceI replicate str input sum input quot",
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "recurrenceI",
          "normalized": "Vector a-\u003eStream(Data a)-\u003e(Vector a-\u003eData b)-\u003eStream(Data b)",
          "package": "feldspar-language",
          "signature": "Vector a-\u003eStream(Data a)-\u003e(Vector a-\u003eData b)-\u003eStream(Data b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#v:recurrenceI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003erecurrenceIO\u003c/a\u003e\u003c/code\u003e but takes two input streams.\n\u003c/p\u003e",
          "module": "Feldspar.Stream",
          "name": "recurrenceIIO",
          "package": "feldspar-language",
          "signature": "Vector1 a -\u003e Stream (Data a) -\u003e Vector1 b -\u003e Stream (Data b) -\u003e Vector1 c -\u003e (Vector1 a -\u003e Vector1 b -\u003e Vector1 c -\u003e Data c) -\u003e Stream (Data c)",
          "source": "src/Feldspar-Stream.html#recurrenceIIO",
          "type": "function"
        },
        "index": {
          "description": "Similar to recurrenceIO but takes two input streams",
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "recurrenceIIO",
          "normalized": "Vector a-\u003eStream(Data a)-\u003eVector b-\u003eStream(Data b)-\u003eVector c-\u003e(Vector a-\u003eVector b-\u003eVector c-\u003eData c)-\u003eStream(Data c)",
          "package": "feldspar-language",
          "partial": "IIO",
          "signature": "Vector a-\u003eStream(Data a)-\u003eVector b-\u003eStream(Data b)-\u003eVector c-\u003e(Vector a-\u003eVector b-\u003eVector c-\u003eData c)-\u003eStream(Data c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#v:recurrenceIIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erecurrenceIO\u003c/a\u003e\u003c/code\u003e is a combination of \u003ccode\u003e\u003ca\u003erecurrenceO\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erecurrenceI\u003c/a\u003e\u003c/code\u003e. It\n   has an input stream and the recurrence equation may refer both to\n   previous inputs and outputs.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003erecurrenceIO\u003c/a\u003e\u003c/code\u003e is used when defining the \u003ccode\u003e\u003ca\u003eiir\u003c/a\u003e\u003c/code\u003e filter.\n\u003c/p\u003e",
          "module": "Feldspar.Stream",
          "name": "recurrenceIO",
          "package": "feldspar-language",
          "signature": "Vector1 a -\u003e Stream (Data a) -\u003e Vector1 b -\u003e (Vector1 a -\u003e Vector1 b -\u003e Data b) -\u003e Stream (Data b)",
          "source": "src/Feldspar-Stream.html#recurrenceIO",
          "type": "function"
        },
        "index": {
          "description": "recurrenceIO is combination of recurrenceO and recurrenceI It has an input stream and the recurrence equation may refer both to previous inputs and outputs recurrenceIO is used when defining the iir filter",
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "recurrenceIO",
          "normalized": "Vector a-\u003eStream(Data a)-\u003eVector b-\u003e(Vector a-\u003eVector b-\u003eData b)-\u003eStream(Data b)",
          "package": "feldspar-language",
          "partial": "IO",
          "signature": "Vector a-\u003eStream(Data a)-\u003eVector b-\u003e(Vector a-\u003eVector b-\u003eData b)-\u003eStream(Data b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#v:recurrenceIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA combinator for descibing recurrence equations, or feedback loops.\n   The recurrence equation may refer to previous outputs of the stream,\n   but only as many as the length of the input stream\n   It uses memory proportional to the input vector.\n\u003c/p\u003e\u003cp\u003eFor exaple one can define the fibonacci sequence as follows:\n\u003c/p\u003e\u003cpre\u003e fib = recurrenceO (vector [0,1]) (\\fib -\u003e fib!0 + fib!1)\n\u003c/pre\u003e\u003cp\u003eThe expressions \u003ccode\u003efib!0\u003c/code\u003e and \u003ccode\u003efib!1\u003c/code\u003e refer to previous elements in the\n stream defined one step back and two steps back respectively.\n\u003c/p\u003e",
          "module": "Feldspar.Stream",
          "name": "recurrenceO",
          "package": "feldspar-language",
          "signature": "Vector1 a -\u003e (Vector1 a -\u003e Data a) -\u003e Stream (Data a)",
          "source": "src/Feldspar-Stream.html#recurrenceO",
          "type": "function"
        },
        "index": {
          "description": "combinator for descibing recurrence equations or feedback loops The recurrence equation may refer to previous outputs of the stream but only as many as the length of the input stream It uses memory proportional to the input vector For exaple one can define the fibonacci sequence as follows fib recurrenceO vector fib fib fib The expressions fib and fib refer to previous elements in the stream defined one step back and two steps back respectively",
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "recurrenceO",
          "normalized": "Vector a-\u003e(Vector a-\u003eData a)-\u003eStream(Data a)",
          "package": "feldspar-language",
          "signature": "Vector a-\u003e(Vector a-\u003eData a)-\u003eStream(Data a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#v:recurrenceO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeat an element indefinitely.\n\u003c/p\u003e\u003cpre\u003erepeat a = [a, a, a, ...]\u003c/pre\u003e",
          "module": "Feldspar.Stream",
          "name": "repeat",
          "package": "feldspar-language",
          "signature": "a -\u003e Stream a",
          "source": "src/Feldspar-Stream.html#repeat",
          "type": "function"
        },
        "index": {
          "description": "Repeat an element indefinitely repeat",
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "repeat",
          "normalized": "a-\u003eStream a",
          "package": "feldspar-language",
          "signature": "a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'scan f a str' produces a stream by successively applying \u003ccode\u003ef\u003c/code\u003e to\n   each element of the input stream \u003ccode\u003estr\u003c/code\u003e and the previous element of\n   the output stream.\n\u003c/p\u003e",
          "module": "Feldspar.Stream",
          "name": "scan",
          "package": "feldspar-language",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Stream b -\u003e Stream a",
          "source": "src/Feldspar-Stream.html#scan",
          "type": "function"
        },
        "index": {
          "description": "scan str produces stream by successively applying to each element of the input stream str and the previous element of the output stream",
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "scan",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eStream b-\u003eStream a",
          "package": "feldspar-language",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eStream b-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#v:scan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA scan but without an initial element.\n\u003c/p\u003e",
          "module": "Feldspar.Stream",
          "name": "scan1",
          "package": "feldspar-language",
          "signature": "(a -\u003e a -\u003e a) -\u003e Stream a -\u003e Stream a",
          "source": "src/Feldspar-Stream.html#scan1",
          "type": "function"
        },
        "index": {
          "description": "scan but without an initial element",
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "scan1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eStream a-\u003eStream a",
          "package": "feldspar-language",
          "signature": "(a-\u003ea-\u003ea)-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#v:scan1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Stream",
          "name": "slidingAvg",
          "package": "feldspar-language",
          "signature": "Data WordN -\u003e Stream (Data WordN) -\u003e Stream (Data WordN)",
          "source": "src/Feldspar-Stream.html#slidingAvg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "slidingAvg",
          "normalized": "Data WordN-\u003eStream(Data WordN)-\u003eStream(Data WordN)",
          "package": "feldspar-language",
          "partial": "Avg",
          "signature": "Data WordN-\u003eStream(Data WordN)-\u003eStream(Data WordN)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#v:slidingAvg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'splitAt n str' allocates \u003ccode\u003en\u003c/code\u003e elements from the stream \u003ccode\u003estr\u003c/code\u003e into a\n   core array and returns the rest of the stream continuing from\n   element 'n+1'.\n\u003c/p\u003e",
          "module": "Feldspar.Stream",
          "name": "splitAt",
          "package": "feldspar-language",
          "signature": "Data Length -\u003e Stream a -\u003e (Data [Internal a], Stream a)",
          "source": "src/Feldspar-Stream.html#splitAt",
          "type": "function"
        },
        "index": {
          "description": "splitAt str allocates elements from the stream str into core array and returns the rest of the stream continuing from element",
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "splitAt",
          "normalized": "Data Length-\u003eStream a-\u003e(Data[Internal a],Stream a)",
          "package": "feldspar-language",
          "partial": "At",
          "signature": "Data Length-\u003eStream a-\u003e(Data[Internal a],Stream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience function for translating an algorithm on streams to an algorithm on vectors.\n   The result vector will have the same length as the input vector.\n   It is important that the stream function doesn't drop any elements of\n   the input stream.\n\u003c/p\u003e\u003cp\u003eThis function allocates memory for the output vector.\n\u003c/p\u003e",
          "module": "Feldspar.Stream",
          "name": "streamAsVector",
          "package": "feldspar-language",
          "signature": "(Stream a -\u003e Stream b) -\u003e Vector a -\u003e Vector b",
          "source": "src/Feldspar-Stream.html#streamAsVector",
          "type": "function"
        },
        "index": {
          "description": "convenience function for translating an algorithm on streams to an algorithm on vectors The result vector will have the same length as the input vector It is important that the stream function doesn drop any elements of the input stream This function allocates memory for the output vector",
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "streamAsVector",
          "normalized": "(Stream a-\u003eStream b)-\u003eVector a-\u003eVector b",
          "package": "feldspar-language",
          "partial": "As Vector",
          "signature": "(Stream a-\u003eStream b)-\u003eVector a-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#v:streamAsVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003estreamAsVector\u003c/a\u003e\u003c/code\u003e except the size of the output array is computed by the second argument\n   which is given the size of the input vector as a result.\n\u003c/p\u003e",
          "module": "Feldspar.Stream",
          "name": "streamAsVectorSize",
          "package": "feldspar-language",
          "signature": "(Stream a -\u003e Stream b) -\u003e (Data Length -\u003e Data Length) -\u003e Vector a -\u003e Vector b",
          "source": "src/Feldspar-Stream.html#streamAsVectorSize",
          "type": "function"
        },
        "index": {
          "description": "Similar to streamAsVector except the size of the output array is computed by the second argument which is given the size of the input vector as result",
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "streamAsVectorSize",
          "normalized": "(Stream a-\u003eStream b)-\u003e(Data Length-\u003eData Length)-\u003eVector a-\u003eVector b",
          "package": "feldspar-language",
          "partial": "As Vector Size",
          "signature": "(Stream a-\u003eStream b)-\u003e(Data Length-\u003eData Length)-\u003eVector a-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#v:streamAsVectorSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop the first element of a stream\n\u003c/p\u003e",
          "module": "Feldspar.Stream",
          "name": "tail",
          "package": "feldspar-language",
          "signature": "Stream a -\u003e Stream a",
          "source": "src/Feldspar-Stream.html#tail",
          "type": "function"
        },
        "index": {
          "description": "Drop the first element of stream",
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "tail",
          "normalized": "Stream a-\u003eStream a",
          "package": "feldspar-language",
          "signature": "Stream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'take n str' allocates \u003ccode\u003en\u003c/code\u003e elements from the stream \u003ccode\u003estr\u003c/code\u003e into a\n   core array.\n\u003c/p\u003e",
          "module": "Feldspar.Stream",
          "name": "take",
          "package": "feldspar-language",
          "signature": "Data Length -\u003e Stream a -\u003e Data [Internal a]",
          "source": "src/Feldspar-Stream.html#take",
          "type": "function"
        },
        "index": {
          "description": "take str allocates elements from the stream str into core array",
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "take",
          "normalized": "Data Length-\u003eStream a-\u003eData[Internal a]",
          "package": "feldspar-language",
          "signature": "Data Length-\u003eStream a-\u003eData[Internal a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eunfold f acc\u003c/code\u003e creates a new stream by successively applying \u003ccode\u003ef\u003c/code\u003e to\n   to the accumulator \u003ccode\u003eacc\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Stream",
          "name": "unfold",
          "package": "feldspar-language",
          "signature": "(c -\u003e (a, c)) -\u003e c -\u003e Stream a",
          "source": "src/Feldspar-Stream.html#unfold",
          "type": "function"
        },
        "index": {
          "description": "unfold acc creates new stream by successively applying to to the accumulator acc",
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "unfold",
          "normalized": "(a-\u003e(b,a))-\u003ea-\u003eStream b",
          "package": "feldspar-language",
          "signature": "(c-\u003e(a,c))-\u003ec-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#v:unfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a stream of pairs, split it into two stream.\n\u003c/p\u003e",
          "module": "Feldspar.Stream",
          "name": "unzip",
          "package": "feldspar-language",
          "signature": "Stream (a, b) -\u003e (Stream a, Stream b)",
          "source": "src/Feldspar-Stream.html#unzip",
          "type": "function"
        },
        "index": {
          "description": "Given stream of pairs split it into two stream",
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "unzip",
          "normalized": "Stream(a,b)-\u003e(Stream a,Stream b)",
          "package": "feldspar-language",
          "signature": "Stream(a,b)-\u003e(Stream a,Stream b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePairs together two streams into one.\n\u003c/p\u003e",
          "module": "Feldspar.Stream",
          "name": "zip",
          "package": "feldspar-language",
          "signature": "Stream a -\u003e Stream b -\u003e Stream (a, b)",
          "source": "src/Feldspar-Stream.html#zip",
          "type": "function"
        },
        "index": {
          "description": "Pairs together two streams into one",
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "zip",
          "normalized": "Stream a-\u003eStream b-\u003eStream(a,b)",
          "package": "feldspar-language",
          "signature": "Stream a-\u003eStream b-\u003eStream(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePairs together two streams using a function to combine the\n   corresponding elements.\n\u003c/p\u003e",
          "module": "Feldspar.Stream",
          "name": "zipWith",
          "package": "feldspar-language",
          "signature": "(a -\u003e b -\u003e c) -\u003e Stream a -\u003e Stream b -\u003e Stream c",
          "source": "src/Feldspar-Stream.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "Pairs together two streams using function to combine the corresponding elements",
          "hierarchy": "Feldspar Stream",
          "module": "Feldspar.Stream",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eStream a-\u003eStream b-\u003eStream c",
          "package": "feldspar-language",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eStream a-\u003eStream b-\u003eStream c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Stream.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Internal",
          "name": "Internal",
          "package": "feldspar-language",
          "source": "src/Feldspar-Vector-Internal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "Internal",
          "package": "feldspar-language",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymbolic vector\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Internal",
          "name": "Vector",
          "package": "feldspar-language",
          "source": "src/Feldspar-Vector-Internal.html#Vector",
          "type": "data"
        },
        "index": {
          "description": "Symbolic vector",
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "Vector",
          "package": "feldspar-language",
          "partial": "Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-nested vector\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Internal",
          "name": "Vector1",
          "package": "feldspar-language",
          "source": "src/Feldspar-Vector-Internal.html#Vector1",
          "type": "type"
        },
        "index": {
          "description": "Non-nested vector",
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "Vector1",
          "package": "feldspar-language",
          "partial": "Vector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#t:Vector1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo-level nested vector\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Internal",
          "name": "Vector2",
          "package": "feldspar-language",
          "source": "src/Feldspar-Vector-Internal.html#Vector2",
          "type": "type"
        },
        "index": {
          "description": "Two-level nested vector",
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "Vector2",
          "package": "feldspar-language",
          "partial": "Vector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#t:Vector2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Internal",
          "name": "(++)",
          "package": "feldspar-language",
          "signature": "Vector a -\u003e Vector a -\u003e Vector a",
          "source": "src/Feldspar-Vector-Internal.html#%2B%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "(++) ++",
          "normalized": "Vector a-\u003eVector a-\u003eVector a",
          "package": "feldspar-language",
          "signature": "Vector a-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:-43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eenumFromTo\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Internal",
          "name": "(...)",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a -\u003e Vector (Data a)",
          "source": "src/Feldspar-Vector-Internal.html#...",
          "type": "function"
        },
        "index": {
          "description": "See enumFromTo",
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "(...) ...",
          "normalized": "Data a-\u003eData a-\u003eVector(Data a)",
          "package": "feldspar-language",
          "signature": "Data a-\u003eData a-\u003eVector(Data a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:..."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Internal",
          "name": "Empty",
          "package": "feldspar-language",
          "signature": "Empty",
          "source": "src/Feldspar-Vector-Internal.html#Vector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "Empty",
          "package": "feldspar-language",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Internal",
          "name": "Indexed",
          "package": "feldspar-language",
          "signature": "Indexed",
          "source": "src/Feldspar-Vector-Internal.html#Vector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "Indexed",
          "package": "feldspar-language",
          "partial": "Indexed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:Indexed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Internal",
          "name": "continuation",
          "package": "feldspar-language",
          "signature": "Vector a",
          "source": "src/Feldspar-Vector-Internal.html#Vector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "continuation",
          "package": "feldspar-language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:continuation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Internal",
          "name": "drop",
          "package": "feldspar-language",
          "signature": "Data Length -\u003e Vector a -\u003e Vector a",
          "source": "src/Feldspar-Vector-Internal.html#drop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "drop",
          "normalized": "Data Length-\u003eVector a-\u003eVector a",
          "package": "feldspar-language",
          "signature": "Data Length-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eenumFrom m\u003c/code\u003e: Enumerate the indexes from \u003ccode\u003em\u003c/code\u003e to \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Internal",
          "name": "enumFrom",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Vector (Data a)",
          "source": "src/Feldspar-Vector-Internal.html#enumFrom",
          "type": "function"
        },
        "index": {
          "description": "enumFrom Enumerate the indexes from to maxBound",
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "enumFrom",
          "normalized": "Data a-\u003eVector(Data a)",
          "package": "feldspar-language",
          "partial": "From",
          "signature": "Data a-\u003eVector(Data a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:enumFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eenumFromTo m n\u003c/code\u003e: Enumerate the integers from \u003ccode\u003em\u003c/code\u003e to \u003ccode\u003en\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Internal",
          "name": "enumFromTo",
          "package": "feldspar-language",
          "signature": "Data a -\u003e Data a -\u003e Vector (Data a)",
          "source": "src/Feldspar-Vector-Internal.html#enumFromTo",
          "type": "function"
        },
        "index": {
          "description": "enumFromTo Enumerate the integers from to",
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "enumFromTo",
          "normalized": "Data a-\u003eData a-\u003eVector(Data a)",
          "package": "feldspar-language",
          "partial": "From To",
          "signature": "Data a-\u003eData a-\u003eVector(Data a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:enumFromTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorresponds to the standard \u003ccode\u003efoldl\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Internal",
          "name": "fold",
          "package": "feldspar-language",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Vector b -\u003e a",
          "source": "src/Feldspar-Vector-Internal.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Corresponds to the standard foldl",
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "fold",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eVector b-\u003ea",
          "package": "feldspar-language",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eVector b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorresponds to the standard \u003ccode\u003efoldl1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Internal",
          "name": "fold1",
          "package": "feldspar-language",
          "signature": "(a -\u003e a -\u003e a) -\u003e Vector a -\u003e a",
          "source": "src/Feldspar-Vector-Internal.html#fold1",
          "type": "function"
        },
        "index": {
          "description": "Corresponds to the standard foldl1",
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "fold1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eVector a-\u003ea",
          "package": "feldspar-language",
          "signature": "(a-\u003ea-\u003ea)-\u003eVector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:fold1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a non-nested vector to a core vector.\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Internal",
          "name": "freezeVector",
          "package": "feldspar-language",
          "signature": "Vector (Data a) -\u003e Data [a]",
          "source": "src/Feldspar-Vector-Internal.html#freezeVector",
          "type": "function"
        },
        "index": {
          "description": "Converts non-nested vector to core vector",
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "freezeVector",
          "normalized": "Vector(Data a)-\u003eData[a]",
          "package": "feldspar-language",
          "partial": "Vector",
          "signature": "Vector(Data a)-\u003eData[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:freezeVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Internal",
          "name": "head",
          "package": "feldspar-language",
          "signature": "Vector a -\u003e a",
          "source": "src/Feldspar-Vector-Internal.html#head",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "head",
          "normalized": "Vector a-\u003ea",
          "package": "feldspar-language",
          "signature": "Vector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Internal",
          "name": "indexed",
          "package": "feldspar-language",
          "signature": "Data Length -\u003e (Data Index -\u003e a) -\u003e Vector a",
          "source": "src/Feldspar-Vector-Internal.html#indexed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "indexed",
          "normalized": "Data Length-\u003e(Data Index-\u003ea)-\u003eVector a",
          "package": "feldspar-language",
          "signature": "Data Length-\u003e(Data Index-\u003ea)-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:indexed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Internal",
          "name": "init",
          "package": "feldspar-language",
          "signature": "Vector a -\u003e Vector a",
          "source": "src/Feldspar-Vector-Internal.html#init",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "init",
          "normalized": "Vector a-\u003eVector a",
          "package": "feldspar-language",
          "signature": "Vector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Internal",
          "name": "inits",
          "package": "feldspar-language",
          "signature": "Vector a -\u003e Vector (Vector a)",
          "source": "src/Feldspar-Vector-Internal.html#inits",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "inits",
          "normalized": "Vector a-\u003eVector(Vector a)",
          "package": "feldspar-language",
          "signature": "Vector a-\u003eVector(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:inits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Internal",
          "name": "inits1",
          "package": "feldspar-language",
          "signature": "Vector a -\u003e Vector (Vector a)",
          "source": "src/Feldspar-Vector-Internal.html#inits1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "inits1",
          "normalized": "Vector a-\u003eVector(Vector a)",
          "package": "feldspar-language",
          "signature": "Vector a-\u003eVector(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:inits1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Internal",
          "name": "last",
          "package": "feldspar-language",
          "signature": "Vector a -\u003e a",
          "source": "src/Feldspar-Vector-Internal.html#last",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "last",
          "normalized": "Vector a-\u003ea",
          "package": "feldspar-language",
          "signature": "Vector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Internal",
          "name": "length",
          "package": "feldspar-language",
          "signature": "Vector a -\u003e Data Length",
          "source": "src/Feldspar-Vector-Internal.html#length",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "length",
          "normalized": "Vector a-\u003eData Length",
          "package": "feldspar-language",
          "signature": "Vector a-\u003eData Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef v\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e obtained by applying f to each element of\n \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Internal",
          "name": "map",
          "package": "feldspar-language",
          "signature": "(a -\u003e b) -\u003e Vector a -\u003e Vector b",
          "source": "src/Feldspar-Vector-Internal.html#map",
          "type": "function"
        },
        "index": {
          "description": "map is the Vector obtained by applying to each element of",
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eVector a-\u003eVector b",
          "package": "feldspar-language",
          "signature": "(a-\u003eb)-\u003eVector a-\u003eVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Internal",
          "name": "maximum",
          "package": "feldspar-language",
          "signature": "Vector (Data a) -\u003e Data a",
          "source": "src/Feldspar-Vector-Internal.html#maximum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "maximum",
          "normalized": "Vector(Data a)-\u003eData a",
          "package": "feldspar-language",
          "signature": "Vector(Data a)-\u003eData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a segmented vector to a vector with a single segment.\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Internal",
          "name": "mergeSegments",
          "package": "feldspar-language",
          "signature": "Vector a -\u003e Vector a",
          "source": "src/Feldspar-Vector-Internal.html#mergeSegments",
          "type": "function"
        },
        "index": {
          "description": "Converts segmented vector to vector with single segment",
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "mergeSegments",
          "normalized": "Vector a-\u003eVector a",
          "package": "feldspar-language",
          "partial": "Segments",
          "signature": "Vector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:mergeSegments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Internal",
          "name": "minimum",
          "package": "feldspar-language",
          "signature": "Vector (Data a) -\u003e Data a",
          "source": "src/Feldspar-Vector-Internal.html#minimum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "minimum",
          "normalized": "Vector(Data a)-\u003eData a",
          "package": "feldspar-language",
          "signature": "Vector(Data a)-\u003eData a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the length of the vector to the supplied value. If the supplied\n length is greater than the old length, the new elements will have undefined\n value. The resulting vector has only one segment.\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Internal",
          "name": "newLen",
          "package": "feldspar-language",
          "signature": "Data Length -\u003e Vector a -\u003e Vector a",
          "source": "src/Feldspar-Vector-Internal.html#newLen",
          "type": "function"
        },
        "index": {
          "description": "Change the length of the vector to the supplied value If the supplied length is greater than the old length the new elements will have undefined value The resulting vector has only one segment",
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "newLen",
          "normalized": "Data Length-\u003eVector a-\u003eVector a",
          "package": "feldspar-language",
          "partial": "Len",
          "signature": "Data Length-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:newLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePermute a vector\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Internal",
          "name": "permute",
          "package": "feldspar-language",
          "signature": "(Data Length -\u003e Data Index -\u003e Data Index) -\u003e Vector a -\u003e Vector a",
          "source": "src/Feldspar-Vector-Internal.html#permute",
          "type": "function"
        },
        "index": {
          "description": "Permute vector",
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "permute",
          "normalized": "(Data Length-\u003eData Index-\u003eData Index)-\u003eVector a-\u003eVector a",
          "package": "feldspar-language",
          "signature": "(Data Length-\u003eData Index-\u003eData Index)-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:permute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePermute a single-segment vector\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Internal",
          "name": "permute'",
          "package": "feldspar-language",
          "signature": "(Data Length -\u003e Data Index -\u003e Data Index) -\u003e Vector a -\u003e Vector a",
          "source": "src/Feldspar-Vector-Internal.html#permute%27",
          "type": "function"
        },
        "index": {
          "description": "Permute single-segment vector",
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "permute'",
          "normalized": "(Data Length-\u003eData Index-\u003eData Index)-\u003eVector a-\u003eVector a",
          "package": "feldspar-language",
          "signature": "(Data Length-\u003eData Index-\u003eData Index)-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:permute-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Internal",
          "name": "replicate",
          "package": "feldspar-language",
          "signature": "Data Length -\u003e a -\u003e Vector a",
          "source": "src/Feldspar-Vector-Internal.html#replicate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "replicate",
          "normalized": "Data Length-\u003ea-\u003eVector a",
          "package": "feldspar-language",
          "signature": "Data Length-\u003ea-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Internal",
          "name": "reverse",
          "package": "feldspar-language",
          "signature": "Vector a -\u003e Vector a",
          "source": "src/Feldspar-Vector-Internal.html#reverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "reverse",
          "normalized": "Vector a-\u003eVector a",
          "package": "feldspar-language",
          "signature": "Vector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Internal",
          "name": "rotateVecL",
          "package": "feldspar-language",
          "signature": "Data Index -\u003e Vector a -\u003e Vector a",
          "source": "src/Feldspar-Vector-Internal.html#rotateVecL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "rotateVecL",
          "normalized": "Data Index-\u003eVector a-\u003eVector a",
          "package": "feldspar-language",
          "partial": "Vec",
          "signature": "Data Index-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:rotateVecL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Internal",
          "name": "rotateVecR",
          "package": "feldspar-language",
          "signature": "Data Index -\u003e Vector a -\u003e Vector a",
          "source": "src/Feldspar-Vector-Internal.html#rotateVecR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "rotateVecR",
          "normalized": "Data Index-\u003eVector a-\u003eVector a",
          "package": "feldspar-language",
          "partial": "Vec",
          "signature": "Data Index-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:rotateVecR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScalar product of two vectors\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Internal",
          "name": "scalarProd",
          "package": "feldspar-language",
          "signature": "Vector a -\u003e Vector a -\u003e a",
          "source": "src/Feldspar-Vector-Internal.html#scalarProd",
          "type": "function"
        },
        "index": {
          "description": "Scalar product of two vectors",
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "scalarProd",
          "normalized": "Vector a-\u003eVector a-\u003ea",
          "package": "feldspar-language",
          "partial": "Prod",
          "signature": "Vector a-\u003eVector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:scalarProd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Internal",
          "name": "segmentIndex",
          "package": "feldspar-language",
          "signature": "Data Index -\u003e a",
          "source": "src/Feldspar-Vector-Internal.html#Vector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "segmentIndex",
          "normalized": "Data Index-\u003ea",
          "package": "feldspar-language",
          "partial": "Index",
          "signature": "Data Index-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:segmentIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Internal",
          "name": "segmentLength",
          "package": "feldspar-language",
          "signature": "Data Length",
          "source": "src/Feldspar-Vector-Internal.html#Vector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "segmentLength",
          "package": "feldspar-language",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:segmentLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreaks up a segmented vector into a list of single-segment vectors.\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Internal",
          "name": "segments",
          "package": "feldspar-language",
          "signature": "Vector a -\u003e [Vector a]",
          "source": "src/Feldspar-Vector-Internal.html#segments",
          "type": "function"
        },
        "index": {
          "description": "Breaks up segmented vector into list of single-segment vectors",
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "segments",
          "normalized": "Vector a-\u003e[Vector a]",
          "package": "feldspar-language",
          "signature": "Vector a-\u003e[Vector a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:segments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Internal",
          "name": "splitAt",
          "package": "feldspar-language",
          "signature": "Data Index -\u003e Vector a -\u003e (Vector a, Vector a)",
          "source": "src/Feldspar-Vector-Internal.html#splitAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "splitAt",
          "normalized": "Data Index-\u003eVector a-\u003e(Vector a,Vector a)",
          "package": "feldspar-language",
          "partial": "At",
          "signature": "Data Index-\u003eVector a-\u003e(Vector a,Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Internal",
          "name": "sum",
          "package": "feldspar-language",
          "signature": "Vector a -\u003e a",
          "source": "src/Feldspar-Vector-Internal.html#sum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "sum",
          "normalized": "Vector a-\u003ea",
          "package": "feldspar-language",
          "signature": "Vector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Internal",
          "name": "tVec",
          "package": "feldspar-language",
          "signature": "Patch a a -\u003e Patch (Vector a) (Vector a)",
          "source": "src/Feldspar-Vector-Internal.html#tVec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "tVec",
          "normalized": "Patch a a-\u003ePatch(Vector a)(Vector a)",
          "package": "feldspar-language",
          "partial": "Vec",
          "signature": "Patch a a-\u003ePatch(Vector a)(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:tVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Internal",
          "name": "tVec1",
          "package": "feldspar-language",
          "signature": "Patch a a -\u003e Patch (Vector (Data a)) (Vector (Data a))",
          "source": "src/Feldspar-Vector-Internal.html#tVec1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "tVec1",
          "normalized": "Patch a a-\u003ePatch(Vector(Data a))(Vector(Data a))",
          "package": "feldspar-language",
          "partial": "Vec",
          "signature": "Patch a a-\u003ePatch(Vector(Data a))(Vector(Data a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:tVec1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Internal",
          "name": "tVec2",
          "package": "feldspar-language",
          "signature": "Patch a a -\u003e Patch (Vector (Vector (Data a))) (Vector (Vector (Data a)))",
          "source": "src/Feldspar-Vector-Internal.html#tVec2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "tVec2",
          "normalized": "Patch a a-\u003ePatch(Vector(Vector(Data a)))(Vector(Vector(Data a)))",
          "package": "feldspar-language",
          "partial": "Vec",
          "signature": "Patch a a-\u003ePatch(Vector(Vector(Data a)))(Vector(Vector(Data a)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:tVec2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Internal",
          "name": "tail",
          "package": "feldspar-language",
          "signature": "Vector a -\u003e Vector a",
          "source": "src/Feldspar-Vector-Internal.html#tail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "tail",
          "normalized": "Vector a-\u003eVector a",
          "package": "feldspar-language",
          "signature": "Vector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Internal",
          "name": "tails",
          "package": "feldspar-language",
          "signature": "Vector a -\u003e Vector (Vector a)",
          "source": "src/Feldspar-Vector-Internal.html#tails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "tails",
          "normalized": "Vector a-\u003eVector(Vector a)",
          "package": "feldspar-language",
          "signature": "Vector a-\u003eVector(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:tails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Internal",
          "name": "take",
          "package": "feldspar-language",
          "signature": "Data Length -\u003e Vector a -\u003e Vector a",
          "source": "src/Feldspar-Vector-Internal.html#take",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "take",
          "normalized": "Data Length-\u003eVector a-\u003eVector a",
          "package": "feldspar-language",
          "signature": "Data Length-\u003eVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a non-nested core array to a vector.\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Internal",
          "name": "thawVector",
          "package": "feldspar-language",
          "signature": "Data [a] -\u003e Vector (Data a)",
          "source": "src/Feldspar-Vector-Internal.html#thawVector",
          "type": "function"
        },
        "index": {
          "description": "Converts non-nested core array to vector",
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "thawVector",
          "normalized": "Data[a]-\u003eVector(Data a)",
          "package": "feldspar-language",
          "partial": "Vector",
          "signature": "Data[a]-\u003eVector(Data a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:thawVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Internal",
          "name": "thawVector'",
          "package": "feldspar-language",
          "signature": "Length -\u003e Data [a] -\u003e Vector (Data a)",
          "source": "src/Feldspar-Vector-Internal.html#thawVector%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "thawVector'",
          "normalized": "Length-\u003eData[a]-\u003eVector(Data a)",
          "package": "feldspar-language",
          "partial": "Vector'",
          "signature": "Length-\u003eData[a]-\u003eVector(Data a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:thawVector-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnzip to two \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Internal",
          "name": "unzip",
          "package": "feldspar-language",
          "signature": "Vector (a, b) -\u003e (Vector a, Vector b)",
          "source": "src/Feldspar-Vector-Internal.html#unzip",
          "type": "function"
        },
        "index": {
          "description": "Unzip to two Vector",
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "unzip",
          "normalized": "Vector(a,b)-\u003e(Vector a,Vector b)",
          "package": "feldspar-language",
          "signature": "Vector(a,b)-\u003e(Vector a,Vector b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnzip to three \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Internal",
          "name": "unzip3",
          "package": "feldspar-language",
          "signature": "Vector (a, b, c) -\u003e (Vector a, Vector b, Vector c)",
          "source": "src/Feldspar-Vector-Internal.html#unzip3",
          "type": "function"
        },
        "index": {
          "description": "Unzip to three Vector",
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "unzip3",
          "normalized": "Vector(a,b,c)-\u003e(Vector a,Vector b,Vector c)",
          "package": "feldspar-language",
          "signature": "Vector(a,b,c)-\u003e(Vector a,Vector b,Vector c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:unzip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnzip to four \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Internal",
          "name": "unzip4",
          "package": "feldspar-language",
          "signature": "Vector (a, b, c, d) -\u003e (Vector a, Vector b, Vector c, Vector d)",
          "source": "src/Feldspar-Vector-Internal.html#unzip4",
          "type": "function"
        },
        "index": {
          "description": "Unzip to four Vector",
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "unzip4",
          "normalized": "Vector(a,b,c,d)-\u003e(Vector a,Vector b,Vector c,Vector d)",
          "package": "feldspar-language",
          "signature": "Vector(a,b,c,d)-\u003e(Vector a,Vector b,Vector c,Vector d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:unzip4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnzip to five \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Internal",
          "name": "unzip5",
          "package": "feldspar-language",
          "signature": "Vector (a, b, c, d, e) -\u003e (Vector a, Vector b, Vector c, Vector d, Vector e)",
          "source": "src/Feldspar-Vector-Internal.html#unzip5",
          "type": "function"
        },
        "index": {
          "description": "Unzip to five Vector",
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "unzip5",
          "normalized": "Vector(a,b,c,d,e)-\u003e(Vector a,Vector b,Vector c,Vector d,Vector e)",
          "package": "feldspar-language",
          "signature": "Vector(a,b,c,d,e)-\u003e(Vector a,Vector b,Vector c,Vector d,Vector e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:unzip5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZipping two \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Internal",
          "name": "zip",
          "package": "feldspar-language",
          "signature": "Vector a -\u003e Vector b -\u003e Vector (a, b)",
          "source": "src/Feldspar-Vector-Internal.html#zip",
          "type": "function"
        },
        "index": {
          "description": "Zipping two Vector",
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "zip",
          "normalized": "Vector a-\u003eVector b-\u003eVector(a,b)",
          "package": "feldspar-language",
          "signature": "Vector a-\u003eVector b-\u003eVector(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZipping three \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Internal",
          "name": "zip3",
          "package": "feldspar-language",
          "signature": "Vector a -\u003e Vector b -\u003e Vector c -\u003e Vector (a, b, c)",
          "source": "src/Feldspar-Vector-Internal.html#zip3",
          "type": "function"
        },
        "index": {
          "description": "Zipping three Vector",
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "zip3",
          "normalized": "Vector a-\u003eVector b-\u003eVector c-\u003eVector(a,b,c)",
          "package": "feldspar-language",
          "signature": "Vector a-\u003eVector b-\u003eVector c-\u003eVector(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:zip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZipping four \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Internal",
          "name": "zip4",
          "package": "feldspar-language",
          "signature": "Vector a -\u003e Vector b -\u003e Vector c -\u003e Vector d -\u003e Vector (a, b, c, d)",
          "source": "src/Feldspar-Vector-Internal.html#zip4",
          "type": "function"
        },
        "index": {
          "description": "Zipping four Vector",
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "zip4",
          "normalized": "Vector a-\u003eVector b-\u003eVector c-\u003eVector d-\u003eVector(a,b,c,d)",
          "package": "feldspar-language",
          "signature": "Vector a-\u003eVector b-\u003eVector c-\u003eVector d-\u003eVector(a,b,c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:zip4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZipping five \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Internal",
          "name": "zip5",
          "package": "feldspar-language",
          "signature": "Vector a -\u003e Vector b -\u003e Vector c -\u003e Vector d -\u003e Vector e -\u003e Vector (a, b, c, d, e)",
          "source": "src/Feldspar-Vector-Internal.html#zip5",
          "type": "function"
        },
        "index": {
          "description": "Zipping five Vector",
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "zip5",
          "normalized": "Vector a-\u003eVector b-\u003eVector c-\u003eVector d-\u003eVector e-\u003eVector(a,b,c,d,e)",
          "package": "feldspar-language",
          "signature": "Vector a-\u003eVector b-\u003eVector c-\u003eVector d-\u003eVector e-\u003eVector(a,b,c,d,e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:zip5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralization of \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e using the supplied function instead of tupling\n to combine the elements\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Internal",
          "name": "zipWith",
          "package": "feldspar-language",
          "signature": "(a -\u003e b -\u003e c) -\u003e Vector a -\u003e Vector b -\u003e Vector c",
          "source": "src/Feldspar-Vector-Internal.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "Generalization of zip using the supplied function instead of tupling to combine the elements",
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eVector a-\u003eVector b-\u003eVector c",
          "package": "feldspar-language",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eVector a-\u003eVector b-\u003eVector c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralization of \u003ccode\u003e\u003ca\u003ezip3\u003c/a\u003e\u003c/code\u003e using the supplied function instead of tupling\n to combine the elements\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Internal",
          "name": "zipWith3",
          "package": "feldspar-language",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e Vector a -\u003e Vector b -\u003e Vector c -\u003e Vector d",
          "source": "src/Feldspar-Vector-Internal.html#zipWith3",
          "type": "function"
        },
        "index": {
          "description": "Generalization of zip3 using the supplied function instead of tupling to combine the elements",
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "zipWith3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003eVector a-\u003eVector b-\u003eVector c-\u003eVector d",
          "package": "feldspar-language",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003eVector a-\u003eVector b-\u003eVector c-\u003eVector d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:zipWith3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralization of \u003ccode\u003e\u003ca\u003ezip4\u003c/a\u003e\u003c/code\u003e using the supplied function instead of tupling\n to combine the elements\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Internal",
          "name": "zipWith4",
          "package": "feldspar-language",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e Vector a -\u003e Vector b -\u003e Vector c -\u003e Vector d -\u003e Vector e",
          "source": "src/Feldspar-Vector-Internal.html#zipWith4",
          "type": "function"
        },
        "index": {
          "description": "Generalization of zip4 using the supplied function instead of tupling to combine the elements",
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "zipWith4",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eVector a-\u003eVector b-\u003eVector c-\u003eVector d-\u003eVector e",
          "package": "feldspar-language",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003eVector a-\u003eVector b-\u003eVector c-\u003eVector d-\u003eVector e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:zipWith4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralization of \u003ccode\u003e\u003ca\u003ezip5\u003c/a\u003e\u003c/code\u003e using the supplied function instead of tupling\n to combine the elements\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Internal",
          "name": "zipWith5",
          "package": "feldspar-language",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f) -\u003e Vector a -\u003e Vector b -\u003e Vector c -\u003e Vector d -\u003e Vector e -\u003e Vector f",
          "source": "src/Feldspar-Vector-Internal.html#zipWith5",
          "type": "function"
        },
        "index": {
          "description": "Generalization of zip5 using the supplied function instead of tupling to combine the elements",
          "hierarchy": "Feldspar Vector Internal",
          "module": "Feldspar.Vector.Internal",
          "name": "zipWith5",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eVector a-\u003eVector b-\u003eVector c-\u003eVector d-\u003eVector e-\u003eVector f",
          "package": "feldspar-language",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef)-\u003eVector a-\u003eVector b-\u003eVector c-\u003eVector d-\u003eVector e-\u003eVector f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Internal.html#v:zipWith5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Push",
          "name": "Push",
          "package": "feldspar-language",
          "source": "src/Feldspar-Vector-Push.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Feldspar Vector Push",
          "module": "Feldspar.Vector.Push",
          "name": "Push",
          "package": "feldspar-language",
          "partial": "Push",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Push.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn overloaded function for reordering elements of a vector.\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Push",
          "name": "Ixmap",
          "package": "feldspar-language",
          "source": "src/Feldspar-Vector-Push.html#Ixmap",
          "type": "class"
        },
        "index": {
          "description": "An overloaded function for reordering elements of vector",
          "hierarchy": "Feldspar Vector Push",
          "module": "Feldspar.Vector.Push",
          "name": "Ixmap",
          "package": "feldspar-language",
          "partial": "Ixmap",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Push.html#t:Ixmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for overloading \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e for both pull and push vectors\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Push",
          "name": "Len",
          "package": "feldspar-language",
          "source": "src/Feldspar-Vector-Push.html#Len",
          "type": "class"
        },
        "index": {
          "description": "class for overloading length for both pull and push vectors",
          "hierarchy": "Feldspar Vector Push",
          "module": "Feldspar.Vector.Push",
          "name": "Len",
          "package": "feldspar-language",
          "partial": "Len",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Push.html#t:Len"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Push",
          "name": "PushVector",
          "package": "feldspar-language",
          "source": "src/Feldspar-Vector-Push.html#PushVector",
          "type": "data"
        },
        "index": {
          "hierarchy": "Feldspar Vector Push",
          "module": "Feldspar.Vector.Push",
          "name": "PushVector",
          "package": "feldspar-language",
          "partial": "Push Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Push.html#t:PushVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny kind of vector, push or pull, can cheaply be converted to a push vector\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Push",
          "name": "Pushy",
          "package": "feldspar-language",
          "source": "src/Feldspar-Vector-Push.html#Pushy",
          "type": "class"
        },
        "index": {
          "description": "Any kind of vector push or pull can cheaply be converted to push vector",
          "hierarchy": "Feldspar Vector Push",
          "module": "Feldspar.Vector.Push",
          "name": "Pushy",
          "package": "feldspar-language",
          "partial": "Pushy",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Push.html#t:Pushy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenating two arrays.\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Push",
          "name": "(++)",
          "package": "feldspar-language",
          "signature": "arr a -\u003e arr a -\u003e PushVector a",
          "source": "src/Feldspar-Vector-Push.html#%2B%2B",
          "type": "function"
        },
        "index": {
          "description": "Concatenating two arrays",
          "hierarchy": "Feldspar Vector Push",
          "module": "Feldspar.Vector.Push",
          "name": "(++) ++",
          "normalized": "a b-\u003ea b-\u003ePushVector b",
          "package": "feldspar-language",
          "signature": "arr a-\u003earr a-\u003ePushVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Push.html#v:-43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Push",
          "name": "Push",
          "package": "feldspar-language",
          "signature": "((Data Index -\u003e a -\u003e M ()) -\u003e M ()) -\u003e Data Length -\u003e PushVector a",
          "source": "src/Feldspar-Vector-Push.html#PushVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Vector Push",
          "module": "Feldspar.Vector.Push",
          "name": "Push",
          "normalized": "((Data Index-\u003ea-\u003eM())-\u003eM())-\u003eData Length-\u003ePushVector a",
          "package": "feldspar-language",
          "partial": "Push",
          "signature": "((Data Index-\u003ea-\u003eM())-\u003eM())-\u003eData Length-\u003ePushVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Push.html#v:Push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function can distribute array computations on chunks of a large\n   pull vector. A call `chunk l f g v` will split the vector \u003ccode\u003ev\u003c/code\u003e into chunks\n   of size \u003ccode\u003el\u003c/code\u003e and apply \u003ccode\u003ef\u003c/code\u003e to these chunks. In case the length of \u003ccode\u003ev\u003c/code\u003e is\n   not a multiple of \u003ccode\u003el\u003c/code\u003e then the rest of \u003ccode\u003ev\u003c/code\u003e will be processed by \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Push",
          "name": "chunk",
          "package": "feldspar-language",
          "signature": "Data Length-\u003e (Vector a -\u003e arr1 b)-\u003e (Vector a -\u003e arr2 b)-\u003e Vector a-\u003e PushVector b",
          "type": "function"
        },
        "index": {
          "description": "This function can distribute array computations on chunks of large pull vector call chunk will split the vector into chunks of size and apply to these chunks In case the length of is not multiple of then the rest of will be processed by",
          "hierarchy": "Feldspar Vector Push",
          "module": "Feldspar.Vector.Push",
          "name": "chunk",
          "normalized": "Data Length-\u003e(Vector a-\u003eb c)-\u003e(Vector a-\u003eb c)-\u003eVector a-\u003ePushVector c",
          "package": "feldspar-language",
          "signature": "Data Length-\u003e(Vector a-\u003earr b)-\u003e(Vector a-\u003earr b)-\u003eVector a-\u003ePushVector b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Push.html#v:chunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty push vector.\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Push",
          "name": "empty",
          "package": "feldspar-language",
          "signature": "PushVector a",
          "source": "src/Feldspar-Vector-Push.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty push vector",
          "hierarchy": "Feldspar Vector Push",
          "module": "Feldspar.Vector.Push",
          "name": "empty",
          "package": "feldspar-language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Push.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Push",
          "name": "everyOther",
          "package": "feldspar-language",
          "signature": "(Data Index -\u003e a -\u003e M b) -\u003e Data Index -\u003e (a, a) -\u003e M b",
          "source": "src/Feldspar-Vector-Push.html#everyOther",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Vector Push",
          "module": "Feldspar.Vector.Push",
          "name": "everyOther",
          "normalized": "(Data Index-\u003ea-\u003eM b)-\u003eData Index-\u003e(a,a)-\u003eM b",
          "package": "feldspar-language",
          "partial": "Other",
          "signature": "(Data Index-\u003ea-\u003eM b)-\u003eData Index-\u003e(a,a)-\u003eM b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Push.html#v:everyOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlattens a pull vector containing push vectors into an unnested push vector\n\u003c/p\u003e\u003cp\u003eNote that there are no restrictions on the lengths of the push vectors\n   inside the pull vector.\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Push",
          "name": "flatten",
          "package": "feldspar-language",
          "signature": "Vector (PushVector a) -\u003e PushVector a",
          "source": "src/Feldspar-Vector-Push.html#flatten",
          "type": "function"
        },
        "index": {
          "description": "Flattens pull vector containing push vectors into an unnested push vector Note that there are no restrictions on the lengths of the push vectors inside the pull vector",
          "hierarchy": "Feldspar Vector Push",
          "module": "Feldspar.Vector.Push",
          "name": "flatten",
          "normalized": "Vector(PushVector a)-\u003ePushVector a",
          "package": "feldspar-language",
          "signature": "Vector(PushVector a)-\u003ePushVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Push.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore push vectors in memory.\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Push",
          "name": "freezePush",
          "package": "feldspar-language",
          "signature": "PushVector a -\u003e Data [Internal a]",
          "source": "src/Feldspar-Vector-Push.html#freezePush",
          "type": "function"
        },
        "index": {
          "description": "Store push vectors in memory",
          "hierarchy": "Feldspar Vector Push",
          "module": "Feldspar.Vector.Push",
          "name": "freezePush",
          "normalized": "PushVector a-\u003eData[Internal a]",
          "package": "feldspar-language",
          "partial": "Push",
          "signature": "PushVector a-\u003eData[Internal a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Push.html#v:freezePush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a push vector to memory and return it as an ordinary vector.\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Push",
          "name": "freezeToVector",
          "package": "feldspar-language",
          "signature": "PushVector a -\u003e Vector a",
          "source": "src/Feldspar-Vector-Push.html#freezeToVector",
          "type": "function"
        },
        "index": {
          "description": "Store push vector to memory and return it as an ordinary vector",
          "hierarchy": "Feldspar Vector Push",
          "module": "Feldspar.Vector.Push",
          "name": "freezeToVector",
          "normalized": "PushVector a-\u003eVector a",
          "package": "feldspar-language",
          "partial": "To Vector",
          "signature": "PushVector a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Push.html#v:freezeToVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a pull vector in half.\n\u003c/p\u003e\u003cp\u003eIf the input vector has an odd length the second result vector\n   will be one element longer than the first.\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Push",
          "name": "halve",
          "package": "feldspar-language",
          "signature": "Vector a -\u003e (Vector a, Vector a)",
          "source": "src/Feldspar-Vector-Push.html#halve",
          "type": "function"
        },
        "index": {
          "description": "Split pull vector in half If the input vector has an odd length the second result vector will be one element longer than the first",
          "hierarchy": "Feldspar Vector Push",
          "module": "Feldspar.Vector.Push",
          "name": "halve",
          "normalized": "Vector a-\u003e(Vector a,Vector a)",
          "package": "feldspar-language",
          "signature": "Vector a-\u003e(Vector a,Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Push.html#v:halve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Push",
          "name": "ixmap",
          "package": "feldspar-language",
          "signature": "(Data Index -\u003e Data Index) -\u003e arr a -\u003e arr a",
          "source": "src/Feldspar-Vector-Push.html#ixmap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Vector Push",
          "module": "Feldspar.Vector.Push",
          "name": "ixmap",
          "normalized": "(Data Index-\u003eData Index)-\u003ea b-\u003ea b",
          "package": "feldspar-language",
          "signature": "(Data Index-\u003eData Index)-\u003earr a-\u003earr a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Push.html#v:ixmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Push",
          "name": "length",
          "package": "feldspar-language",
          "signature": "arr a -\u003e Data Length",
          "source": "src/Feldspar-Vector-Push.html#length",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Vector Push",
          "module": "Feldspar.Vector.Push",
          "name": "length",
          "normalized": "a b-\u003eData Length",
          "package": "feldspar-language",
          "signature": "arr a-\u003eData Length",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Push.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse a vector. Works for both push and pull vectors.\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Push",
          "name": "reverse",
          "package": "feldspar-language",
          "signature": "arr a -\u003e arr a",
          "source": "src/Feldspar-Vector-Push.html#reverse",
          "type": "function"
        },
        "index": {
          "description": "Reverse vector Works for both push and pull vectors",
          "hierarchy": "Feldspar Vector Push",
          "module": "Feldspar.Vector.Push",
          "name": "reverse",
          "normalized": "a b-\u003ea b",
          "package": "feldspar-language",
          "signature": "arr a-\u003earr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Push.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a vector in half and interleave the two two halves.\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Push",
          "name": "riffle",
          "package": "feldspar-language",
          "signature": "Vector a -\u003e PushVector a",
          "source": "src/Feldspar-Vector-Push.html#riffle",
          "type": "function"
        },
        "index": {
          "description": "Split vector in half and interleave the two two halves",
          "hierarchy": "Feldspar Vector Push",
          "module": "Feldspar.Vector.Push",
          "name": "riffle",
          "normalized": "Vector a-\u003ePushVector a",
          "package": "feldspar-language",
          "signature": "Vector a-\u003ePushVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Push.html#v:riffle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a push vector from an array stored in memory.\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Push",
          "name": "thawPush",
          "package": "feldspar-language",
          "signature": "Data [Internal a] -\u003e PushVector a",
          "source": "src/Feldspar-Vector-Push.html#thawPush",
          "type": "function"
        },
        "index": {
          "description": "Create push vector from an array stored in memory",
          "hierarchy": "Feldspar Vector Push",
          "module": "Feldspar.Vector.Push",
          "name": "thawPush",
          "normalized": "Data[Internal a]-\u003ePushVector a",
          "package": "feldspar-language",
          "partial": "Push",
          "signature": "Data[Internal a]-\u003ePushVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Push.html#v:thawPush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Vector.Push",
          "name": "toPush",
          "package": "feldspar-language",
          "signature": "arr a -\u003e PushVector a",
          "source": "src/Feldspar-Vector-Push.html#toPush",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Vector Push",
          "module": "Feldspar.Vector.Push",
          "name": "toPush",
          "normalized": "a b-\u003ePushVector b",
          "package": "feldspar-language",
          "partial": "Push",
          "signature": "arr a-\u003ePushVector a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Push.html#v:toPush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an array of pairs, flatten the array so that the elements of the\n   pairs end up next to each other in the resulting vector.\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Push",
          "name": "unpair",
          "package": "feldspar-language",
          "signature": "arr (a, a) -\u003e PushVector a",
          "source": "src/Feldspar-Vector-Push.html#unpair",
          "type": "function"
        },
        "index": {
          "description": "Given an array of pairs flatten the array so that the elements of the pairs end up next to each other in the resulting vector",
          "hierarchy": "Feldspar Vector Push",
          "module": "Feldspar.Vector.Push",
          "name": "unpair",
          "normalized": "a(b,b)-\u003ePushVector b",
          "package": "feldspar-language",
          "signature": "arr(a,a)-\u003ePushVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Push.html#v:unpair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterleaves the elements of two vectors.\n\u003c/p\u003e",
          "module": "Feldspar.Vector.Push",
          "name": "zipUnpair",
          "package": "feldspar-language",
          "signature": "Vector a -\u003e Vector a -\u003e PushVector a",
          "source": "src/Feldspar-Vector-Push.html#zipUnpair",
          "type": "function"
        },
        "index": {
          "description": "Interleaves the elements of two vectors",
          "hierarchy": "Feldspar Vector Push",
          "module": "Feldspar.Vector.Push",
          "name": "zipUnpair",
          "normalized": "Vector a-\u003eVector a-\u003ePushVector a",
          "package": "feldspar-language",
          "partial": "Unpair",
          "signature": "Vector a-\u003eVector a-\u003ePushVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector-Push.html#v:zipUnpair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for \u003cem\u003evirtual vectors\u003c/em\u003e. Many of the functions defined here are\n imitations of Haskell's list operations, and to a first approximation they\n behave accordingly.\n\u003c/p\u003e\u003cp\u003eA virtual vector is normally guaranteed not to be present in the generated\n code. The only exceptions are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e when it is explicitly forced using the functions \u003ccode\u003eforce\u003c/code\u003e or \u003ccode\u003edesugar\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e when it is the input or output of a program\n\u003c/li\u003e\u003cli\u003e when it is accessed by a function outside the \u003ca\u003eFeldspar.Vector\u003c/a\u003e API, for\n     example, \u003ccode\u003econdition\u003c/code\u003e or \u003ccode\u003eforLoop\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote also that most operations only introduce a small constant overhead on\n the vector. The exceptions are\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003efold1\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Functions that introduce storage (see above)\n\u003c/li\u003e\u003cli\u003e \"Folding\" functions: \u003ccode\u003e\u003ca\u003esum\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e, etc.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThese functions introduce overhead that is linear in the length of the\n vector.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Feldspar.Vector",
          "name": "Vector",
          "package": "feldspar-language",
          "source": "src/Feldspar-Vector.html",
          "type": "module"
        },
        "index": {
          "description": "module for virtual vectors Many of the functions defined here are imitations of Haskell list operations and to first approximation they behave accordingly virtual vector is normally guaranteed not to be present in the generated code The only exceptions are when it is explicitly forced using the functions force or desugar when it is the input or output of program when it is accessed by function outside the Feldspar.Vector API for example condition or forLoop Note also that most operations only introduce small constant overhead on the vector The exceptions are fold fold1 Functions that introduce storage see above Folding functions sum maximum etc These functions introduce overhead that is linear in the length of the vector",
          "hierarchy": "Feldspar Vector",
          "module": "Feldspar.Vector",
          "name": "Vector",
          "package": "feldspar-language",
          "partial": "Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Vector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule \u003ca\u003eData.TypeLevel.Num.Aliases\u003c/a\u003e is re-exported because\n wrappers use type level numbers frequently\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Feldspar.Wrap",
          "name": "Wrap",
          "package": "feldspar-language",
          "source": "src/Feldspar-Wrap.html",
          "type": "module"
        },
        "index": {
          "description": "Module Data.TypeLevel.Num.Aliases is re-exported because wrappers use type level numbers frequently",
          "hierarchy": "Feldspar Wrap",
          "module": "Feldspar.Wrap",
          "name": "Wrap",
          "package": "feldspar-language",
          "partial": "Wrap",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Wrap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal digit zero\n\u003c/p\u003e",
          "module": "Feldspar.Wrap",
          "name": "D0",
          "package": "feldspar-language",
          "type": "data"
        },
        "index": {
          "description": "Decimal digit zero",
          "hierarchy": "Feldspar Wrap",
          "module": "Feldspar.Wrap",
          "name": "D0",
          "package": "feldspar-language",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Wrap.html#t:D0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal digit one\n\u003c/p\u003e",
          "module": "Feldspar.Wrap",
          "name": "D1",
          "package": "feldspar-language",
          "type": "data"
        },
        "index": {
          "description": "Decimal digit one",
          "hierarchy": "Feldspar Wrap",
          "module": "Feldspar.Wrap",
          "name": "D1",
          "package": "feldspar-language",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Wrap.html#t:D1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal digit two\n\u003c/p\u003e",
          "module": "Feldspar.Wrap",
          "name": "D2",
          "package": "feldspar-language",
          "type": "data"
        },
        "index": {
          "description": "Decimal digit two",
          "hierarchy": "Feldspar Wrap",
          "module": "Feldspar.Wrap",
          "name": "D2",
          "package": "feldspar-language",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Wrap.html#t:D2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal digit three \n\u003c/p\u003e",
          "module": "Feldspar.Wrap",
          "name": "D3",
          "package": "feldspar-language",
          "type": "data"
        },
        "index": {
          "description": "Decimal digit three",
          "hierarchy": "Feldspar Wrap",
          "module": "Feldspar.Wrap",
          "name": "D3",
          "package": "feldspar-language",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Wrap.html#t:D3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal digit four \n\u003c/p\u003e",
          "module": "Feldspar.Wrap",
          "name": "D4",
          "package": "feldspar-language",
          "type": "data"
        },
        "index": {
          "description": "Decimal digit four",
          "hierarchy": "Feldspar Wrap",
          "module": "Feldspar.Wrap",
          "name": "D4",
          "package": "feldspar-language",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Wrap.html#t:D4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal digit five\n\u003c/p\u003e",
          "module": "Feldspar.Wrap",
          "name": "D5",
          "package": "feldspar-language",
          "type": "data"
        },
        "index": {
          "description": "Decimal digit five",
          "hierarchy": "Feldspar Wrap",
          "module": "Feldspar.Wrap",
          "name": "D5",
          "package": "feldspar-language",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Wrap.html#t:D5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal digit six\n\u003c/p\u003e",
          "module": "Feldspar.Wrap",
          "name": "D6",
          "package": "feldspar-language",
          "type": "data"
        },
        "index": {
          "description": "Decimal digit six",
          "hierarchy": "Feldspar Wrap",
          "module": "Feldspar.Wrap",
          "name": "D6",
          "package": "feldspar-language",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Wrap.html#t:D6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal digit seven\n\u003c/p\u003e",
          "module": "Feldspar.Wrap",
          "name": "D7",
          "package": "feldspar-language",
          "type": "data"
        },
        "index": {
          "description": "Decimal digit seven",
          "hierarchy": "Feldspar Wrap",
          "module": "Feldspar.Wrap",
          "name": "D7",
          "package": "feldspar-language",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Wrap.html#t:D7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal digit eight\n\u003c/p\u003e",
          "module": "Feldspar.Wrap",
          "name": "D8",
          "package": "feldspar-language",
          "type": "data"
        },
        "index": {
          "description": "Decimal digit eight",
          "hierarchy": "Feldspar Wrap",
          "module": "Feldspar.Wrap",
          "name": "D8",
          "package": "feldspar-language",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Wrap.html#t:D8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal digit nine\n\u003c/p\u003e",
          "module": "Feldspar.Wrap",
          "name": "D9",
          "package": "feldspar-language",
          "type": "data"
        },
        "index": {
          "description": "Decimal digit nine",
          "hierarchy": "Feldspar Wrap",
          "module": "Feldspar.Wrap",
          "name": "D9",
          "package": "feldspar-language",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Wrap.html#t:D9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtended \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e to be used in wrappers\n\u003c/p\u003e",
          "module": "Feldspar.Wrap",
          "name": "Data'",
          "package": "feldspar-language",
          "source": "src/Feldspar-Wrap.html#Data%27",
          "type": "data"
        },
        "index": {
          "description": "Extended Data to be used in wrappers",
          "hierarchy": "Feldspar Wrap",
          "module": "Feldspar.Wrap",
          "name": "Data'",
          "package": "feldspar-language",
          "partial": "Data'",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Wrap.html#t:Data-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapping Feldspar functions\n\u003c/p\u003e",
          "module": "Feldspar.Wrap",
          "name": "Wrap",
          "package": "feldspar-language",
          "source": "src/Feldspar-Wrap.html#Wrap",
          "type": "class"
        },
        "index": {
          "description": "Wrapping Feldspar functions",
          "hierarchy": "Feldspar Wrap",
          "module": "Feldspar.Wrap",
          "name": "Wrap",
          "package": "feldspar-language",
          "partial": "Wrap",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Wrap.html#t:Wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Wrap",
          "name": "Data'",
          "package": "feldspar-language",
          "signature": "Data'",
          "source": "src/Feldspar-Wrap.html#Data%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Wrap",
          "module": "Feldspar.Wrap",
          "name": "Data'",
          "package": "feldspar-language",
          "partial": "Data'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Wrap.html#v:Data-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Wrap",
          "name": "unData'",
          "package": "feldspar-language",
          "signature": "Data a",
          "source": "src/Feldspar-Wrap.html#Data%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Feldspar Wrap",
          "module": "Feldspar.Wrap",
          "name": "unData'",
          "package": "feldspar-language",
          "partial": "Data'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Wrap.html#v:unData-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Feldspar.Wrap",
          "name": "wrap",
          "package": "feldspar-language",
          "signature": "t -\u003e w",
          "source": "src/Feldspar-Wrap.html#wrap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Feldspar Wrap",
          "module": "Feldspar.Wrap",
          "name": "wrap",
          "normalized": "a-\u003eb",
          "package": "feldspar-language",
          "signature": "t-\u003ew",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar-Wrap.html#v:wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface to the essential parts of the Feldspar language. High-level\n libraries have to be imported separately.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Feldspar",
          "name": "Feldspar",
          "package": "feldspar-language",
          "source": "src/Feldspar.html",
          "type": "module"
        },
        "index": {
          "description": "Interface to the essential parts of the Feldspar language High-level libraries have to be imported separately",
          "hierarchy": "Feldspar",
          "module": "Feldspar",
          "name": "Feldspar",
          "package": "feldspar-language",
          "partial": "Feldspar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/feldspar-language/docs/Feldspar.html#"
      }
    }
  ]
]