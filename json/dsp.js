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
        "word": "dsp"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic functions for manipulating signals\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Basic",
          "name": "Basic",
          "package": "dsp",
          "source": "src/DSP-Basic.html",
          "type": "module"
        },
        "index": {
          "description": "Basic functions for manipulating signals",
          "hierarchy": "DSP Basic",
          "module": "DSP.Basic",
          "name": "Basic",
          "package": "dsp",
          "partial": "Basic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Basic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePower with fixed exponent type.\n This eliminates warnings about using default types.\n\u003c/p\u003e",
          "module": "DSP.Basic",
          "name": "(^!)",
          "package": "dsp",
          "signature": "a -\u003e Int -\u003e a",
          "source": "src/DSP-Basic.html#%5E%21",
          "type": "function"
        },
        "index": {
          "description": "Power with fixed exponent type This eliminates warnings about using default types",
          "hierarchy": "DSP Basic",
          "module": "DSP.Basic",
          "name": "(^!) ^!",
          "normalized": "a-\u003eInt-\u003ea",
          "package": "dsp",
          "signature": "a-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Basic.html#v:-94--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edelay\u003c/a\u003e\u003c/code\u003e is the n sample delay function, eg,\n\u003c/p\u003e\u003cpre\u003edelay 3 [ 1, 2, 3 ] == [ 0, 0, 0, 1, 2, 3 ]\u003c/pre\u003e",
          "module": "DSP.Basic",
          "name": "delay",
          "package": "dsp",
          "signature": "Int -\u003e [a] -\u003e [a]",
          "source": "src/DSP-Basic.html#delay",
          "type": "function"
        },
        "index": {
          "description": "delay is the sample delay function eg delay",
          "hierarchy": "DSP Basic",
          "module": "DSP.Basic",
          "name": "delay",
          "normalized": "Int-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "Int-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Basic.html#v:delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edelay\u003c/a\u003e\u003c/code\u003e is the unit delay function, eg,\n\u003c/p\u003e\u003cpre\u003edelay1 [ 1, 2, 3 ] == [ 0, 1, 2, 3 ]\u003c/pre\u003e",
          "module": "DSP.Basic",
          "name": "delay1",
          "package": "dsp",
          "signature": "[a] -\u003e [a]",
          "source": "src/DSP-Basic.html#delay1",
          "type": "function"
        },
        "index": {
          "description": "delay is the unit delay function eg delay1",
          "hierarchy": "DSP Basic",
          "module": "DSP.Basic",
          "name": "delay1",
          "normalized": "[a]-\u003e[a]",
          "package": "dsp",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Basic.html#v:delay1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edownsample\u003c/code\u003e throws away every n'th sample, eg,\n\u003c/p\u003e\u003cpre\u003edownsample 2 [ 1, 2, 3, 4, 5, 6 ] == [ 1, 3, 5 ]\u003c/pre\u003e",
          "module": "DSP.Basic",
          "name": "downsample",
          "package": "dsp",
          "signature": "Int -\u003e [a] -\u003e [a]",
          "source": "src/DSP-Basic.html#downsample",
          "type": "function"
        },
        "index": {
          "description": "downsample throws away every th sample eg downsample",
          "hierarchy": "DSP Basic",
          "module": "DSP.Basic",
          "name": "downsample",
          "normalized": "Int-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "Int-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Basic.html#v:downsample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Basic",
          "name": "downsampleRec",
          "package": "dsp",
          "signature": "Int -\u003e [a] -\u003e [a]",
          "source": "src/DSP-Basic.html#downsampleRec",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Basic",
          "module": "DSP.Basic",
          "name": "downsampleRec",
          "normalized": "Int-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "partial": "Rec",
          "signature": "Int-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Basic.html#v:downsampleRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emerges elements from two lists into one list in an alternating way\n\u003c/p\u003e\u003cpre\u003einterleave [0,1,2,3] [10,11,12,13] == [0,10,1,11,2,12,3,13]\u003c/pre\u003e",
          "module": "DSP.Basic",
          "name": "interleave",
          "package": "dsp",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/DSP-Basic.html#interleave",
          "type": "function"
        },
        "index": {
          "description": "merges elements from two lists into one list in an alternating way interleave",
          "hierarchy": "DSP Basic",
          "module": "DSP.Basic",
          "name": "interleave",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Basic.html#v:interleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elinspace\u003c/a\u003e\u003c/code\u003e generates a list of values linearly spaced between specified\n start and end values (array will include both start and end values).\n\u003c/p\u003e\u003cpre\u003elinspace 0.0 1.0 5 == [ 0.0, 0.25, 0.5, 0.75 1.0 ]\u003c/pre\u003e",
          "module": "DSP.Basic",
          "name": "linspace",
          "package": "dsp",
          "signature": "Double -\u003e Double -\u003e Int -\u003e [Double]",
          "source": "src/DSP-Basic.html#linspace",
          "type": "function"
        },
        "index": {
          "description": "linspace generates list of values linearly spaced between specified start and end values array will include both start and end values linspace",
          "hierarchy": "DSP Basic",
          "module": "DSP.Basic",
          "name": "linspace",
          "normalized": "Double-\u003eDouble-\u003eInt-\u003e[Double]",
          "package": "dsp",
          "signature": "Double-\u003eDouble-\u003eInt-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Basic.html#v:linspace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elogspace\u003c/a\u003e\u003c/code\u003e generates a list of values logarithmically spaced between the\n values 10 ** start and 10 ** end (array will include both start and end values).\n\u003c/p\u003e\u003cpre\u003elogspace 0.0 1.0 4 == [ 1.0, 2.1544, 4.6416, 10.0 ]\u003c/pre\u003e",
          "module": "DSP.Basic",
          "name": "logspace",
          "package": "dsp",
          "signature": "Double -\u003e Double -\u003e Int -\u003e [Double]",
          "source": "src/DSP-Basic.html#logspace",
          "type": "function"
        },
        "index": {
          "description": "logspace generates list of values logarithmically spaced between the values start and end array will include both start and end values logspace",
          "hierarchy": "DSP Basic",
          "module": "DSP.Basic",
          "name": "logspace",
          "normalized": "Double-\u003eDouble-\u003eInt-\u003e[Double]",
          "package": "dsp",
          "signature": "Double-\u003eDouble-\u003eInt-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Basic.html#v:logspace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the square of the Euclidean norm of a 2D point\n\u003c/p\u003e",
          "module": "DSP.Basic",
          "name": "norm2sqr",
          "package": "dsp",
          "signature": "(a, a) -\u003e a",
          "source": "src/DSP-Basic.html#norm2sqr",
          "type": "function"
        },
        "index": {
          "description": "Computes the square of the Euclidean norm of point",
          "hierarchy": "DSP Basic",
          "module": "DSP.Basic",
          "name": "norm2sqr",
          "normalized": "(a,a)-\u003ea",
          "package": "dsp",
          "signature": "(a,a)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Basic.html#v:norm2sqr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epad a sequence with zeros to length n\n\u003c/p\u003e\u003cpre\u003epad [ 1, 2, 3 ] 6 == [ 1, 2, 3, 0, 0, 0 ]\u003c/pre\u003e",
          "module": "DSP.Basic",
          "name": "pad",
          "package": "dsp",
          "signature": "Array a b -\u003e a -\u003e Array a b",
          "source": "src/DSP-Basic.html#pad",
          "type": "function"
        },
        "index": {
          "description": "pad sequence with zeros to length pad",
          "hierarchy": "DSP Basic",
          "module": "DSP.Basic",
          "name": "pad",
          "normalized": "Array a b-\u003ea-\u003eArray a b",
          "package": "dsp",
          "signature": "Array a b-\u003ea-\u003eArray a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Basic.html#v:pad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerates a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e if the given condition holds\n\u003c/p\u003e",
          "module": "DSP.Basic",
          "name": "toMaybe",
          "package": "dsp",
          "signature": "Bool -\u003e a -\u003e Maybe a",
          "source": "src/DSP-Basic.html#toMaybe",
          "type": "function"
        },
        "index": {
          "description": "generates Just if the given condition holds",
          "hierarchy": "DSP Basic",
          "module": "DSP.Basic",
          "name": "toMaybe",
          "normalized": "Bool-\u003ea-\u003eMaybe a",
          "package": "dsp",
          "partial": "Maybe",
          "signature": "Bool-\u003ea-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Basic.html#v:toMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esplit a list into two lists in an alternating way\n\u003c/p\u003e\u003cpre\u003euninterleave [1,2,3,4,5,6] == ([1,3,5],[2,4,6])\u003c/pre\u003e\u003cp\u003eIt's a special case of \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DSP.Basic",
          "name": "uninterleave",
          "package": "dsp",
          "signature": "[a] -\u003e ([a], [a])",
          "source": "src/DSP-Basic.html#uninterleave",
          "type": "function"
        },
        "index": {
          "description": "split list into two lists in an alternating way uninterleave It special case of split",
          "hierarchy": "DSP Basic",
          "module": "DSP.Basic",
          "name": "uninterleave",
          "normalized": "[a]-\u003e([a],[a])",
          "package": "dsp",
          "signature": "[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Basic.html#v:uninterleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eupsample\u003c/code\u003e inserts n-1 zeros between each sample, eg,\n\u003c/p\u003e\u003cpre\u003eupsample 2 [ 1, 2, 3 ] == [ 1, 0, 2, 0, 3, 0 ]\u003c/pre\u003e",
          "module": "DSP.Basic",
          "name": "upsample",
          "package": "dsp",
          "signature": "Int -\u003e [a] -\u003e [a]",
          "source": "src/DSP-Basic.html#upsample",
          "type": "function"
        },
        "index": {
          "description": "upsample inserts n-1 zeros between each sample eg upsample",
          "hierarchy": "DSP Basic",
          "module": "DSP.Basic",
          "name": "upsample",
          "normalized": "Int-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "Int-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Basic.html#v:upsample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eupsampleAndHold\u003c/code\u003e replicates each sample n times, eg,\n\u003c/p\u003e\u003cpre\u003eupsampleAndHold 3 [ 1, 2, 3 ] == [ 1, 1, 1, 2, 2, 2, 3, 3, 3 ]\u003c/pre\u003e",
          "module": "DSP.Basic",
          "name": "upsampleAndHold",
          "package": "dsp",
          "signature": "Int -\u003e [a] -\u003e [a]",
          "source": "src/DSP-Basic.html#upsampleAndHold",
          "type": "function"
        },
        "index": {
          "description": "upsampleAndHold replicates each sample times eg upsampleAndHold",
          "hierarchy": "DSP Basic",
          "module": "DSP.Basic",
          "name": "upsampleAndHold",
          "normalized": "Int-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "partial": "And Hold",
          "signature": "Int-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Basic.html#v:upsampleAndHold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Basic",
          "name": "upsampleRec",
          "package": "dsp",
          "signature": "Int -\u003e [a] -\u003e [a]",
          "source": "src/DSP-Basic.html#upsampleRec",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Basic",
          "module": "DSP.Basic",
          "name": "upsampleRec",
          "normalized": "Int-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "partial": "Rec",
          "signature": "Int-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Basic.html#v:upsampleRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule to perform the linear convolution of two sequences\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Convolution",
          "name": "Convolution",
          "package": "dsp",
          "source": "src/DSP-Convolution.html",
          "type": "module"
        },
        "index": {
          "description": "Module to perform the linear convolution of two sequences",
          "hierarchy": "DSP Convolution",
          "module": "DSP.Convolution",
          "name": "Convolution",
          "package": "dsp",
          "partial": "Convolution",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Convolution.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003econv\u003c/code\u003e convolves two finite sequences\n\u003c/p\u003e",
          "module": "DSP.Convolution",
          "name": "conv",
          "package": "dsp",
          "signature": "Array a b -\u003e Array a b -\u003e Array a b",
          "source": "src/DSP-Convolution.html#conv",
          "type": "function"
        },
        "index": {
          "description": "conv convolves two finite sequences",
          "hierarchy": "DSP Convolution",
          "module": "DSP.Convolution",
          "name": "conv",
          "normalized": "Array a b-\u003eArray a b-\u003eArray a b",
          "package": "dsp",
          "signature": "Array a b-\u003eArray a b-\u003eArray a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Convolution.html#v:conv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Convolution",
          "name": "test",
          "package": "dsp",
          "signature": "Bool",
          "source": "src/DSP-Convolution.html#test",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Convolution",
          "module": "DSP.Convolution",
          "name": "test",
          "package": "dsp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Convolution.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains routines to perform cross- and auto-correlation.\n These formulas can be found in most DSP textbooks.\n\u003c/p\u003e\u003cp\u003eIn the following routines, x and y are assumed to be of the same\n length.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Correlation",
          "name": "Correlation",
          "package": "dsp",
          "source": "src/DSP-Correlation.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains routines to perform cross and auto-correlation These formulas can be found in most DSP textbooks In the following routines and are assumed to be of the same length",
          "hierarchy": "DSP Correlation",
          "module": "DSP.Correlation",
          "name": "Correlation",
          "package": "dsp",
          "partial": "Correlation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Correlation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eraw auto-correllation\n\u003c/p\u003e",
          "module": "DSP.Correlation",
          "name": "rxx",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e a-\u003e Complex b",
          "type": "function"
        },
        "index": {
          "description": "raw auto-correllation",
          "hierarchy": "DSP Correlation",
          "module": "DSP.Correlation",
          "name": "rxx",
          "normalized": "Array a(Complex b)-\u003ea-\u003eComplex b",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003ea-\u003eComplex b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Correlation.html#v:rxx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebiased auto-correllation\n\u003c/p\u003e",
          "module": "DSP.Correlation",
          "name": "rxx_b",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e a-\u003e Complex b",
          "type": "function"
        },
        "index": {
          "description": "biased auto-correllation",
          "hierarchy": "DSP Correlation",
          "module": "DSP.Correlation",
          "name": "rxx_b",
          "normalized": "Array a(Complex b)-\u003ea-\u003eComplex b",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003ea-\u003eComplex b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Correlation.html#v:rxx_b"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunbiased auto-correllation\n\u003c/p\u003e",
          "module": "DSP.Correlation",
          "name": "rxx_u",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e a-\u003e Complex b",
          "type": "function"
        },
        "index": {
          "description": "unbiased auto-correllation",
          "hierarchy": "DSP Correlation",
          "module": "DSP.Correlation",
          "name": "rxx_u",
          "normalized": "Array a(Complex b)-\u003ea-\u003eComplex b",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003ea-\u003eComplex b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Correlation.html#v:rxx_u"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eraw cross-correllation\n\u003c/p\u003e",
          "module": "DSP.Correlation",
          "name": "rxy",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e Array a (Complex b)-\u003e a-\u003e Complex b",
          "type": "function"
        },
        "index": {
          "description": "raw cross-correllation",
          "hierarchy": "DSP Correlation",
          "module": "DSP.Correlation",
          "name": "rxy",
          "normalized": "Array a(Complex b)-\u003eArray a(Complex b)-\u003ea-\u003eComplex b",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003eArray a(Complex b)-\u003ea-\u003eComplex b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Correlation.html#v:rxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebiased cross-correllation\n\u003c/p\u003e",
          "module": "DSP.Correlation",
          "name": "rxy_b",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e Array a (Complex b)-\u003e a-\u003e Complex b",
          "type": "function"
        },
        "index": {
          "description": "biased cross-correllation",
          "hierarchy": "DSP Correlation",
          "module": "DSP.Correlation",
          "name": "rxy_b",
          "normalized": "Array a(Complex b)-\u003eArray a(Complex b)-\u003ea-\u003eComplex b",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003eArray a(Complex b)-\u003ea-\u003eComplex b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Correlation.html#v:rxy_b"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunbiased cross-correllation\n\u003c/p\u003e",
          "module": "DSP.Correlation",
          "name": "rxy_u",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e Array a (Complex b)-\u003e a-\u003e Complex b",
          "type": "function"
        },
        "index": {
          "description": "unbiased cross-correllation",
          "hierarchy": "DSP Correlation",
          "module": "DSP.Correlation",
          "name": "rxy_u",
          "normalized": "Array a(Complex b)-\u003eArray a(Complex b)-\u003ea-\u003eComplex b",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003eArray a(Complex b)-\u003ea-\u003eComplex b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Correlation.html#v:rxy_u"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Correlation",
          "name": "test",
          "package": "dsp",
          "signature": "Bool",
          "source": "src/DSP-Correlation.html#test",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Correlation",
          "module": "DSP.Correlation",
          "name": "test",
          "package": "dsp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Correlation.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains routines to perform cross- and auto-covariance\n These formulas can be found in most DSP textbooks.\n\u003c/p\u003e\u003cp\u003eIn the following routines, x and y are assumed to be of the same\n length.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Covariance",
          "name": "Covariance",
          "package": "dsp",
          "source": "src/DSP-Covariance.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains routines to perform cross and auto-covariance These formulas can be found in most DSP textbooks In the following routines and are assumed to be of the same length",
          "hierarchy": "DSP Covariance",
          "module": "DSP.Covariance",
          "name": "Covariance",
          "package": "dsp",
          "partial": "Covariance",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Covariance.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eraw auto-covariance\n\u003c/p\u003e\u003cp\u003eCxx(X,X) = E[(X - E[X])(X - E[X])]\n          = E[XX] - E[X]E[X]\n          = Rxy(X,X) - E[X]^2\n\u003c/p\u003e",
          "module": "DSP.Covariance",
          "name": "cxx",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e a-\u003e Complex b",
          "type": "function"
        },
        "index": {
          "description": "raw auto-covariance Cxx XX Rxy",
          "hierarchy": "DSP Covariance",
          "module": "DSP.Covariance",
          "name": "cxx",
          "normalized": "Array a(Complex b)-\u003ea-\u003eComplex b",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003ea-\u003eComplex b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Covariance.html#v:cxx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebiased auto-covariance\n\u003c/p\u003e",
          "module": "DSP.Covariance",
          "name": "cxx_b",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e a-\u003e Complex b",
          "type": "function"
        },
        "index": {
          "description": "biased auto-covariance",
          "hierarchy": "DSP Covariance",
          "module": "DSP.Covariance",
          "name": "cxx_b",
          "normalized": "Array a(Complex b)-\u003ea-\u003eComplex b",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003ea-\u003eComplex b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Covariance.html#v:cxx_b"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunbiased auto-covariance\n\u003c/p\u003e",
          "module": "DSP.Covariance",
          "name": "cxx_u",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e a-\u003e Complex b",
          "type": "function"
        },
        "index": {
          "description": "unbiased auto-covariance",
          "hierarchy": "DSP Covariance",
          "module": "DSP.Covariance",
          "name": "cxx_u",
          "normalized": "Array a(Complex b)-\u003ea-\u003eComplex b",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003ea-\u003eComplex b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Covariance.html#v:cxx_u"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eraw cross-covariance\n\u003c/p\u003e\u003cp\u003eWe define covariance in terms of correlation.\n\u003c/p\u003e\u003cp\u003eCxy(X,Y) = E[(X - E[X])(Y - E[Y])]\n          = E[XY] - E[X]E[Y]\n          = Rxy(X,Y) - E[X]E[Y]\n\u003c/p\u003e",
          "module": "DSP.Covariance",
          "name": "cxy",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e Array a (Complex b)-\u003e a-\u003e Complex b",
          "type": "function"
        },
        "index": {
          "description": "raw cross-covariance We define covariance in terms of correlation Cxy XY Rxy",
          "hierarchy": "DSP Covariance",
          "module": "DSP.Covariance",
          "name": "cxy",
          "normalized": "Array a(Complex b)-\u003eArray a(Complex b)-\u003ea-\u003eComplex b",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003eArray a(Complex b)-\u003ea-\u003eComplex b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Covariance.html#v:cxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebiased cross-covariance\n\u003c/p\u003e",
          "module": "DSP.Covariance",
          "name": "cxy_b",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e Array a (Complex b)-\u003e a-\u003e Complex b",
          "type": "function"
        },
        "index": {
          "description": "biased cross-covariance",
          "hierarchy": "DSP Covariance",
          "module": "DSP.Covariance",
          "name": "cxy_b",
          "normalized": "Array a(Complex b)-\u003eArray a(Complex b)-\u003ea-\u003eComplex b",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003eArray a(Complex b)-\u003ea-\u003eComplex b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Covariance.html#v:cxy_b"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunbiased cross-covariance\n\u003c/p\u003e",
          "module": "DSP.Covariance",
          "name": "cxy_u",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e Array a (Complex b)-\u003e a-\u003e Complex b",
          "type": "function"
        },
        "index": {
          "description": "unbiased cross-covariance",
          "hierarchy": "DSP Covariance",
          "module": "DSP.Covariance",
          "name": "cxy_u",
          "normalized": "Array a(Complex b)-\u003eArray a(Complex b)-\u003ea-\u003eComplex b",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003eArray a(Complex b)-\u003ea-\u003eComplex b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Covariance.html#v:cxy_u"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a few simple algorithms for interpolating the\n peak location of a DFT/FFT.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Estimation.Frequency.FCI",
          "name": "FCI",
          "package": "dsp",
          "source": "src/DSP-Estimation-Frequency-FCI.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains few simple algorithms for interpolating the peak location of DFT FFT",
          "hierarchy": "DSP Estimation Frequency FCI",
          "module": "DSP.Estimation.Frequency.FCI",
          "name": "FCI",
          "package": "dsp",
          "partial": "FCI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Frequency-FCI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEric Jacobsen's Estimator\n\u003c/p\u003e",
          "module": "DSP.Estimation.Frequency.FCI",
          "name": "jacobsen",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e a-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Eric Jacobsen Estimator",
          "hierarchy": "DSP Estimation Frequency FCI",
          "module": "DSP.Estimation.Frequency.FCI",
          "name": "jacobsen",
          "normalized": "Array a(Complex b)-\u003ea-\u003eb",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Frequency-FCI.html#v:jacobsen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMacLeod's Three Point Estimator\n\u003c/p\u003e",
          "module": "DSP.Estimation.Frequency.FCI",
          "name": "macleod3",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e a-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "MacLeod Three Point Estimator",
          "hierarchy": "DSP Estimation Frequency FCI",
          "module": "DSP.Estimation.Frequency.FCI",
          "name": "macleod3",
          "normalized": "Array a(Complex b)-\u003ea-\u003eb",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Frequency-FCI.html#v:macleod3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMacLeod's Three Point Estimator\n\u003c/p\u003e",
          "module": "DSP.Estimation.Frequency.FCI",
          "name": "macleod5",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e a-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "MacLeod Three Point Estimator",
          "hierarchy": "DSP Estimation Frequency FCI",
          "module": "DSP.Estimation.Frequency.FCI",
          "name": "macleod5",
          "normalized": "Array a(Complex b)-\u003ea-\u003eb",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Frequency-FCI.html#v:macleod5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuinn's First Estimator (FCI1)\n\u003c/p\u003e",
          "module": "DSP.Estimation.Frequency.FCI",
          "name": "quinn1",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e a-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Quinn First Estimator FCI1",
          "hierarchy": "DSP Estimation Frequency FCI",
          "module": "DSP.Estimation.Frequency.FCI",
          "name": "quinn1",
          "normalized": "Array a(Complex b)-\u003ea-\u003eb",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Frequency-FCI.html#v:quinn1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuinn's Second Estimator (FCI2)\n\u003c/p\u003e",
          "module": "DSP.Estimation.Frequency.FCI",
          "name": "quinn2",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e a-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Quinn Second Estimator FCI2",
          "hierarchy": "DSP Estimation Frequency FCI",
          "module": "DSP.Estimation.Frequency.FCI",
          "name": "quinn2",
          "normalized": "Array a(Complex b)-\u003ea-\u003eb",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Frequency-FCI.html#v:quinn2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuinn's Third Estimator (FCI3)\n\u003c/p\u003e",
          "module": "DSP.Estimation.Frequency.FCI",
          "name": "quinn3",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e a-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Quinn Third Estimator FCI3",
          "hierarchy": "DSP Estimation Frequency FCI",
          "module": "DSP.Estimation.Frequency.FCI",
          "name": "quinn3",
          "normalized": "Array a(Complex b)-\u003ea-\u003eb",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Frequency-FCI.html#v:quinn3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRife and Vincent's Estimator\n\u003c/p\u003e",
          "module": "DSP.Estimation.Frequency.FCI",
          "name": "rv",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e a-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Rife and Vincent Estimator",
          "hierarchy": "DSP Estimation Frequency FCI",
          "module": "DSP.Estimation.Frequency.FCI",
          "name": "rv",
          "normalized": "Array a(Complex b)-\u003ea-\u003eb",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Frequency-FCI.html#v:rv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements an algorithm to maximize the peak value of a\n DFT/FFT.  It is based off an aticle by Mark Sullivan from Personal\n Engineering Magazine.\n\u003c/p\u003e\u003cp\u003eMaximizes\n\u003c/p\u003e\u003cpre\u003eS(w) = 1/N * sum(k=0,N-1) |x[k] * e^(-jwk)|^2\u003c/pre\u003e\u003cp\u003ewhich is equivalent to solving\n\u003c/p\u003e\u003cpre\u003eS'(w) = Im{X(w) * ~Y(w)} = 0\u003c/pre\u003e\u003cp\u003ewhere\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eX(w) =         sum(k=0,N-1) (x[k] * e^(-jwk))\u003c/code\u003e\n \u003ccode\u003eY(w) = X'(w) = sum(k=0,N-1) (k * x[k] * e^(-jwk))\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThis algorithm used the bisection method for finding the zero of a\n function.  The search area is +- half a bin width.\n\u003c/p\u003e\u003cp\u003eRegula falsi requires an additional (x,f(x)) pair which is expensive\n in this case.  Newton's method could be used but requires S''(w),\n which takes twice as long to caculate as S'(w).  Brent's method may be\n best here, but it also requires three (x,f(x)) pairs\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Estimation.Frequency.PerMax",
          "name": "PerMax",
          "package": "dsp",
          "source": "src/DSP-Estimation-Frequency-PerMax.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements an algorithm to maximize the peak value of DFT FFT It is based off an aticle by Mark Sullivan from Personal Engineering Magazine Maximizes sum N-1 jwk which is equivalent to solving Im where sum N-1 jwk sum N-1 jwk This algorithm used the bisection method for finding the zero of function The search area is half bin width Regula falsi requires an additional pair which is expensive in this case Newton method could be used but requires which takes twice as long to caculate as Brent method may be best here but it also requires three pairs",
          "hierarchy": "DSP Estimation Frequency PerMax",
          "module": "DSP.Estimation.Frequency.PerMax",
          "name": "PerMax",
          "package": "dsp",
          "partial": "Per Max",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Frequency-PerMax.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiscrete frequency periodigram maximizer\n\u003c/p\u003e",
          "module": "DSP.Estimation.Frequency.PerMax",
          "name": "permax",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e a-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Discrete frequency periodigram maximizer",
          "hierarchy": "DSP Estimation Frequency PerMax",
          "module": "DSP.Estimation.Frequency.PerMax",
          "name": "permax",
          "normalized": "Array a(Complex b)-\u003ea-\u003eb",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Frequency-PerMax.html#v:permax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains an implementation of Pisarenko Harmonic\n Decomposition for a single real sinusoid.  For this case, eigenvalues\n do not need to be computed.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Estimation.Frequency.Pisarenko",
          "name": "Pisarenko",
          "package": "dsp",
          "source": "src/DSP-Estimation-Frequency-Pisarenko.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains an implementation of Pisarenko Harmonic Decomposition for single real sinusoid For this case eigenvalues do not need to be computed",
          "hierarchy": "DSP Estimation Frequency Pisarenko",
          "module": "DSP.Estimation.Frequency.Pisarenko",
          "name": "Pisarenko",
          "package": "dsp",
          "partial": "Pisarenko",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Frequency-Pisarenko.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePisarenko's method for a single sinusoid\n\u003c/p\u003e",
          "module": "DSP.Estimation.Frequency.Pisarenko",
          "name": "pisarenko",
          "package": "dsp",
          "signature": "Array a b-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Pisarenko method for single sinusoid",
          "hierarchy": "DSP Estimation Frequency Pisarenko",
          "module": "DSP.Estimation.Frequency.Pisarenko",
          "name": "pisarenko",
          "normalized": "Array a b-\u003eb",
          "package": "dsp",
          "signature": "Array a b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Frequency-Pisarenko.html#v:pisarenko"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is an implementation of the Quinn-Fernandes algorithm for\n estimating the frequency of a real sinusoid in noise.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Estimation.Frequency.QuinnFernandes",
          "name": "QuinnFernandes",
          "package": "dsp",
          "source": "src/DSP-Estimation-Frequency-QuinnFernandes.html",
          "type": "module"
        },
        "index": {
          "description": "This is an implementation of the Quinn-Fernandes algorithm for estimating the frequency of real sinusoid in noise",
          "hierarchy": "DSP Estimation Frequency QuinnFernandes",
          "module": "DSP.Estimation.Frequency.QuinnFernandes",
          "name": "QuinnFernandes",
          "package": "dsp",
          "partial": "Quinn Fernandes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Frequency-QuinnFernandes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Quinn-Fernandes algorithm\n\u003c/p\u003e",
          "module": "DSP.Estimation.Frequency.QuinnFernandes",
          "name": "qf",
          "package": "dsp",
          "signature": "Array a b-\u003e b-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "The Quinn-Fernandes algorithm",
          "hierarchy": "DSP Estimation Frequency QuinnFernandes",
          "module": "DSP.Estimation.Frequency.QuinnFernandes",
          "name": "qf",
          "normalized": "Array a b-\u003eb-\u003eb",
          "package": "dsp",
          "signature": "Array a b-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Frequency-QuinnFernandes.html#v:qf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a few algorithms for weighted linear predictors\n for estimating the frequency of a complex sinusoid in noise.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Estimation.Frequency.WLP",
          "name": "WLP",
          "package": "dsp",
          "source": "src/DSP-Estimation-Frequency-WLP.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains few algorithms for weighted linear predictors for estimating the frequency of complex sinusoid in noise",
          "hierarchy": "DSP Estimation Frequency WLP",
          "module": "DSP.Estimation.Frequency.WLP",
          "name": "WLP",
          "package": "dsp",
          "partial": "WLP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Frequency-WLP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWLP using Clarkson, Kootsookos, and Quinn's window\n\u003c/p\u003e",
          "module": "DSP.Estimation.Frequency.WLP",
          "name": "ckq",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e b-\u003e b-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "WLP using Clarkson Kootsookos and Quinn window",
          "hierarchy": "DSP Estimation Frequency WLP",
          "module": "DSP.Estimation.Frequency.WLP",
          "name": "ckq",
          "normalized": "Array a(Complex b)-\u003eb-\u003eb-\u003eb",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003eb-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Frequency-WLP.html#v:ckq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWLP using kay's window\n\u003c/p\u003e",
          "module": "DSP.Estimation.Frequency.WLP",
          "name": "kay",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "WLP using kay window",
          "hierarchy": "DSP Estimation Frequency WLP",
          "module": "DSP.Estimation.Frequency.WLP",
          "name": "kay",
          "normalized": "Array a(Complex b)-\u003eb",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Frequency-WLP.html#v:kay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWLP using Lank, Reed, and Pollon's window\n\u003c/p\u003e",
          "module": "DSP.Estimation.Frequency.WLP",
          "name": "lrp",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "WLP using Lank Reed and Pollon window",
          "hierarchy": "DSP Estimation Frequency WLP",
          "module": "DSP.Estimation.Frequency.WLP",
          "name": "lrp",
          "normalized": "Array a(Complex b)-\u003eb",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Frequency-WLP.html#v:lrp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWLP using Lovell and Williamson's window\n\u003c/p\u003e",
          "module": "DSP.Estimation.Frequency.WLP",
          "name": "lw",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "WLP using Lovell and Williamson window",
          "hierarchy": "DSP Estimation Frequency WLP",
          "module": "DSP.Estimation.Frequency.WLP",
          "name": "lw",
          "normalized": "Array a(Complex b)-\u003eb",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Frequency-WLP.html#v:lw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe weighted linear predictor form of the frequency estimator\n\u003c/p\u003e",
          "module": "DSP.Estimation.Frequency.WLP",
          "name": "wlp",
          "package": "dsp",
          "signature": "Array a b-\u003e Array a (Complex b)-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "The weighted linear predictor form of the frequency estimator",
          "hierarchy": "DSP Estimation Frequency WLP",
          "module": "DSP.Estimation.Frequency.WLP",
          "name": "wlp",
          "normalized": "Array a b-\u003eArray a(Complex b)-\u003eb",
          "package": "dsp",
          "signature": "Array a b-\u003eArray a(Complex b)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Frequency-WLP.html#v:wlp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a few algorithms for AR parameter estimation.\n Algorithms are taken from Steven M. Kay, /Modern Spectral Estimation:\n Theory and Application/, which is one of the standard texts on the\n subject.  When possible, variable conventions are the same in the code\n as they are found in the text.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Estimation.Spectral.AR",
          "name": "AR",
          "package": "dsp",
          "source": "src/DSP-Estimation-Spectral-AR.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains few algorithms for AR parameter estimation Algorithms are taken from Steven Kay Modern Spectral Estimation Theory and Application which is one of the standard texts on the subject When possible variable conventions are the same in the code as they are found in the text",
          "hierarchy": "DSP Estimation Spectral AR",
          "module": "DSP.Estimation.Spectral.AR",
          "name": "AR",
          "package": "dsp",
          "partial": "AR",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Spectral-AR.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes an AR(p) model estimate from x using the Burg' method\n\u003c/p\u003e",
          "module": "DSP.Estimation.Spectral.AR",
          "name": "ar_burg",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e a-\u003e (Array a (Complex b), b)",
          "type": "function"
        },
        "index": {
          "description": "Computes an AR model estimate from using the Burg method",
          "hierarchy": "DSP Estimation Spectral AR",
          "module": "DSP.Estimation.Spectral.AR",
          "name": "ar_burg",
          "normalized": "Array a(Complex b)-\u003ea-\u003e(Array a(Complex b),b)",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003ea-\u003e(Array a(Complex b),b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Spectral-AR.html#v:ar_burg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes an AR(p) model estimate from x using the covariance method\n\u003c/p\u003e",
          "module": "DSP.Estimation.Spectral.AR",
          "name": "ar_cov",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e a-\u003e (Array a (Complex b), b)",
          "type": "function"
        },
        "index": {
          "description": "Computes an AR model estimate from using the covariance method",
          "hierarchy": "DSP Estimation Spectral AR",
          "module": "DSP.Estimation.Spectral.AR",
          "name": "ar_cov",
          "normalized": "Array a(Complex b)-\u003ea-\u003e(Array a(Complex b),b)",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003ea-\u003e(Array a(Complex b),b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Spectral-AR.html#v:ar_cov"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes an AR(p) model estimate from x using the modified covariance method\n\u003c/p\u003e",
          "module": "DSP.Estimation.Spectral.AR",
          "name": "ar_mcov",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e a-\u003e (Array a (Complex b), b)",
          "type": "function"
        },
        "index": {
          "description": "Computes an AR model estimate from using the modified covariance method",
          "hierarchy": "DSP Estimation Spectral AR",
          "module": "DSP.Estimation.Spectral.AR",
          "name": "ar_mcov",
          "normalized": "Array a(Complex b)-\u003ea-\u003e(Array a(Complex b),b)",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003ea-\u003e(Array a(Complex b),b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Spectral-AR.html#v:ar_mcov"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes an AR(p) model estimate from x using the Yule-Walker method\n\u003c/p\u003e",
          "module": "DSP.Estimation.Spectral.AR",
          "name": "ar_yw",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e a-\u003e (Array a (Complex b), b)",
          "type": "function"
        },
        "index": {
          "description": "Computes an AR model estimate from using the Yule-Walker method",
          "hierarchy": "DSP Estimation Spectral AR",
          "module": "DSP.Estimation.Spectral.AR",
          "name": "ar_yw",
          "normalized": "Array a(Complex b)-\u003ea-\u003e(Array a(Complex b),b)",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003ea-\u003e(Array a(Complex b),b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Spectral-AR.html#v:ar_yw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a few algorithms for ARMA parameter estimation.\n Algorithms are taken from Steven M. Kay, _Modern Spectral Estimation:\n Theory and Application_, which is one of the standard texts on the\n subject.  When possible, variable conventions are the same in the code\n as they are found in the text.\n\u003c/p\u003e\u003cp\u003eBROKEN: DO NOT USE\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Estimation.Spectral.ARMA",
          "name": "ARMA",
          "package": "dsp",
          "source": "src/DSP-Estimation-Spectral-ARMA.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains few algorithms for ARMA parameter estimation Algorithms are taken from Steven Kay Modern Spectral Estimation Theory and Application which is one of the standard texts on the subject When possible variable conventions are the same in the code as they are found in the text BROKEN DO NOT USE",
          "hierarchy": "DSP Estimation Spectral ARMA",
          "module": "DSP.Estimation.Spectral.ARMA",
          "name": "ARMA",
          "package": "dsp",
          "partial": "ARMA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Spectral-ARMA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTHIS DOES NOT WORK\n\u003c/p\u003e",
          "module": "DSP.Estimation.Spectral.ARMA",
          "name": "arma_mywe",
          "package": "dsp",
          "signature": "Array i (Complex b) -\u003e i -\u003e i -\u003e Array i (Complex b)",
          "source": "src/DSP-Estimation-Spectral-ARMA.html#arma_mywe",
          "type": "function"
        },
        "index": {
          "description": "THIS DOES NOT WORK",
          "hierarchy": "DSP Estimation Spectral ARMA",
          "module": "DSP.Estimation.Spectral.ARMA",
          "name": "arma_mywe",
          "normalized": "Array a(Complex b)-\u003ea-\u003ea-\u003eArray a(Complex b)",
          "package": "dsp",
          "signature": "Array i(Complex b)-\u003ei-\u003ei-\u003eArray i(Complex b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Spectral-ARMA.html#v:arma_mywe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTest vectors from Kay, \u003cem\u003eModern Spectral Estimation\u003c/em\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Estimation.Spectral.KayData",
          "name": "KayData",
          "package": "dsp",
          "source": "src/DSP-Estimation-Spectral-KayData.html",
          "type": "module"
        },
        "index": {
          "description": "Test vectors from Kay Modern Spectral Estimation",
          "hierarchy": "DSP Estimation Spectral KayData",
          "module": "DSP.Estimation.Spectral.KayData",
          "name": "KayData",
          "package": "dsp",
          "partial": "Kay Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Spectral-KayData.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplex test data\n\u003c/p\u003e",
          "module": "DSP.Estimation.Spectral.KayData",
          "name": "xc",
          "package": "dsp",
          "signature": "Array Int (Complex Double)",
          "source": "src/DSP-Estimation-Spectral-KayData.html#xc",
          "type": "function"
        },
        "index": {
          "description": "Complex test data",
          "hierarchy": "DSP Estimation Spectral KayData",
          "module": "DSP.Estimation.Spectral.KayData",
          "name": "xc",
          "package": "dsp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Spectral-KayData.html#v:xc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReal test data\n\u003c/p\u003e",
          "module": "DSP.Estimation.Spectral.KayData",
          "name": "xr",
          "package": "dsp",
          "signature": "Array Int Double",
          "source": "src/DSP-Estimation-Spectral-KayData.html#xr",
          "type": "function"
        },
        "index": {
          "description": "Real test data",
          "hierarchy": "DSP Estimation Spectral KayData",
          "module": "DSP.Estimation.Spectral.KayData",
          "name": "xr",
          "package": "dsp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Spectral-KayData.html#v:xr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains one algorithm for MA parameter estimation.  It\n is taken from Steven M. Kay, _Modern Spectral Estimation: Theory and\n Application_, which is one of the standard texts on the subject.  When\n possible, variable conventions are the same in the code as they are\n found in the text.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Estimation.Spectral.MA",
          "name": "MA",
          "package": "dsp",
          "source": "src/DSP-Estimation-Spectral-MA.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains one algorithm for MA parameter estimation It is taken from Steven Kay Modern Spectral Estimation Theory and Application which is one of the standard texts on the subject When possible variable conventions are the same in the code as they are found in the text",
          "hierarchy": "DSP Estimation Spectral MA",
          "module": "DSP.Estimation.Spectral.MA",
          "name": "MA",
          "package": "dsp",
          "partial": "MA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Spectral-MA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes an MA(q) model estimate from x using the Durbin's method\n where l is the order of the AR process used in the algorithm\n\u003c/p\u003e",
          "module": "DSP.Estimation.Spectral.MA",
          "name": "ma_durbin",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e a-\u003e a-\u003e (Array a (Complex b), b)",
          "type": "function"
        },
        "index": {
          "description": "Computes an MA model estimate from using the Durbin method where is the order of the AR process used in the algorithm",
          "hierarchy": "DSP Estimation Spectral MA",
          "module": "DSP.Estimation.Spectral.MA",
          "name": "ma_durbin",
          "normalized": "Array a(Complex b)-\u003ea-\u003ea-\u003e(Array a(Complex b),b)",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003ea-\u003ea-\u003e(Array a(Complex b),b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Estimation-Spectral-MA.html#v:ma_durbin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule to perform fast linear convolution of two sequences\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.FastConvolution",
          "name": "FastConvolution",
          "package": "dsp",
          "source": "src/DSP-FastConvolution.html",
          "type": "module"
        },
        "index": {
          "description": "Module to perform fast linear convolution of two sequences",
          "hierarchy": "DSP FastConvolution",
          "module": "DSP.FastConvolution",
          "name": "FastConvolution",
          "package": "dsp",
          "partial": "Fast Convolution",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-FastConvolution.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efast_conv\u003c/code\u003e convolves two finite sequences using DFT relationships\n\u003c/p\u003e",
          "module": "DSP.FastConvolution",
          "name": "fast_conv",
          "package": "dsp",
          "signature": "Array Int (Complex b) -\u003e Array Int (Complex b) -\u003e Array Int (Complex b)",
          "source": "src/DSP-FastConvolution.html#fast_conv",
          "type": "function"
        },
        "index": {
          "description": "fast conv convolves two finite sequences using DFT relationships",
          "hierarchy": "DSP FastConvolution",
          "module": "DSP.FastConvolution",
          "name": "fast_conv",
          "normalized": "Array Int(Complex a)-\u003eArray Int(Complex a)-\u003eArray Int(Complex a)",
          "package": "dsp",
          "signature": "Array Int(Complex b)-\u003eArray Int(Complex b)-\u003eArray Int(Complex b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-FastConvolution.html#v:fast_conv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for generating analog filter prototypes\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Filter.Analog.Prototype",
          "name": "Prototype",
          "package": "dsp",
          "source": "src/DSP-Filter-Analog-Prototype.html",
          "type": "module"
        },
        "index": {
          "description": "Module for generating analog filter prototypes",
          "hierarchy": "DSP Filter Analog Prototype",
          "module": "DSP.Filter.Analog.Prototype",
          "name": "Prototype",
          "package": "dsp",
          "partial": "Prototype",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-Analog-Prototype.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates Butterworth filter prototype\n\u003c/p\u003e",
          "module": "DSP.Filter.Analog.Prototype",
          "name": "butterworth",
          "package": "dsp",
          "signature": "Int-\u003e ([Double], [Double])",
          "type": "function"
        },
        "index": {
          "description": "Generates Butterworth filter prototype",
          "hierarchy": "DSP Filter Analog Prototype",
          "module": "DSP.Filter.Analog.Prototype",
          "name": "butterworth",
          "normalized": "Int-\u003e([Double],[Double])",
          "package": "dsp",
          "signature": "Int-\u003e([Double],[Double])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-Analog-Prototype.html#v:butterworth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates Chebyshev filter prototype\n\u003c/p\u003e",
          "module": "DSP.Filter.Analog.Prototype",
          "name": "chebyshev1",
          "package": "dsp",
          "signature": "Double-\u003e Int-\u003e ([Double], [Double])",
          "type": "function"
        },
        "index": {
          "description": "Generates Chebyshev filter prototype",
          "hierarchy": "DSP Filter Analog Prototype",
          "module": "DSP.Filter.Analog.Prototype",
          "name": "chebyshev1",
          "normalized": "Double-\u003eInt-\u003e([Double],[Double])",
          "package": "dsp",
          "signature": "Double-\u003eInt-\u003e([Double],[Double])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-Analog-Prototype.html#v:chebyshev1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates Inverse Chebyshev filter prototype\n\u003c/p\u003e",
          "module": "DSP.Filter.Analog.Prototype",
          "name": "chebyshev2",
          "package": "dsp",
          "signature": "Double-\u003e Int-\u003e ([Double], [Double])",
          "type": "function"
        },
        "index": {
          "description": "Generates Inverse Chebyshev filter prototype",
          "hierarchy": "DSP Filter Analog Prototype",
          "module": "DSP.Filter.Analog.Prototype",
          "name": "chebyshev2",
          "normalized": "Double-\u003eInt-\u003e([Double],[Double])",
          "package": "dsp",
          "signature": "Double-\u003eInt-\u003e([Double],[Double])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-Analog-Prototype.html#v:chebyshev2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for generating analog filter responses\n\u003c/p\u003e\u003cp\u003eFormulas are from Oppenheim and Schafer, Appendix B\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Filter.Analog.Response",
          "name": "Response",
          "package": "dsp",
          "source": "src/DSP-Filter-Analog-Response.html",
          "type": "module"
        },
        "index": {
          "description": "Module for generating analog filter responses Formulas are from Oppenheim and Schafer Appendix",
          "hierarchy": "DSP Filter Analog Response",
          "module": "DSP.Filter.Analog.Response",
          "name": "Response",
          "package": "dsp",
          "partial": "Response",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-Analog-Response.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eButterworth filter response function\n\u003c/p\u003e",
          "module": "DSP.Filter.Analog.Response",
          "name": "butterworth_H",
          "package": "dsp",
          "signature": "Int-\u003e Double-\u003e Double-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "Butterworth filter response function",
          "hierarchy": "DSP Filter Analog Response",
          "module": "DSP.Filter.Analog.Response",
          "name": "butterworth_H",
          "normalized": "Int-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "dsp",
          "signature": "Int-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-Analog-Response.html#v:butterworth_H"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChebyshev filter response function\n\u003c/p\u003e",
          "module": "DSP.Filter.Analog.Response",
          "name": "chebyshev1_H",
          "package": "dsp",
          "signature": "Int-\u003e Double-\u003e Double-\u003e Double-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "Chebyshev filter response function",
          "hierarchy": "DSP Filter Analog Response",
          "module": "DSP.Filter.Analog.Response",
          "name": "chebyshev1_H",
          "normalized": "Int-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "dsp",
          "signature": "Int-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-Analog-Response.html#v:chebyshev1_H"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse Chebyshev filter response function\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003ew_c\u003c/code\u003e is a property of the stopband for this filter\n\u003c/p\u003e",
          "module": "DSP.Filter.Analog.Response",
          "name": "chebyshev2_H",
          "package": "dsp",
          "signature": "Int-\u003e Double-\u003e Double-\u003e Double-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "Inverse Chebyshev filter response function Note that is property of the stopband for this filter",
          "hierarchy": "DSP Filter Analog Response",
          "module": "DSP.Filter.Analog.Response",
          "name": "chebyshev2_H",
          "normalized": "Int-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "dsp",
          "signature": "Int-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-Analog-Response.html#v:chebyshev2_H"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAnalog prototype filter transforms\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Filter.Analog.Transform",
          "name": "Transform",
          "package": "dsp",
          "source": "src/DSP-Filter-Analog-Transform.html",
          "type": "module"
        },
        "index": {
          "description": "Analog prototype filter transforms",
          "hierarchy": "DSP Filter Analog Transform",
          "module": "DSP.Filter.Analog.Transform",
          "name": "Transform",
          "package": "dsp",
          "partial": "Transform",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-Analog-Transform.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLowpass to bandpass: \u003ccode\u003es --\u003e (s^2 + wl*wu) / (s(wu-wl))\u003c/code\u003e\n\u003c/p\u003e",
          "module": "DSP.Filter.Analog.Transform",
          "name": "a_lp2bp",
          "package": "dsp",
          "signature": "Double-\u003e Double-\u003e ([Double], [Double])-\u003e ([Double], [Double])",
          "type": "function"
        },
        "index": {
          "description": "Lowpass to bandpass wl wu wu-wl",
          "hierarchy": "DSP Filter Analog Transform",
          "module": "DSP.Filter.Analog.Transform",
          "name": "a_lp2bp",
          "normalized": "Double-\u003eDouble-\u003e([Double],[Double])-\u003e([Double],[Double])",
          "package": "dsp",
          "signature": "Double-\u003eDouble-\u003e([Double],[Double])-\u003e([Double],[Double])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-Analog-Transform.html#v:a_lp2bp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLowpass to bandstop: \u003ccode\u003es --\u003e (s(wu-wl)) / (s^2 + wl*wu)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "DSP.Filter.Analog.Transform",
          "name": "a_lp2bs",
          "package": "dsp",
          "signature": "Double-\u003e Double-\u003e ([Double], [Double])-\u003e ([Double], [Double])",
          "type": "function"
        },
        "index": {
          "description": "Lowpass to bandstop wu-wl wl wu",
          "hierarchy": "DSP Filter Analog Transform",
          "module": "DSP.Filter.Analog.Transform",
          "name": "a_lp2bs",
          "normalized": "Double-\u003eDouble-\u003e([Double],[Double])-\u003e([Double],[Double])",
          "package": "dsp",
          "signature": "Double-\u003eDouble-\u003e([Double],[Double])-\u003e([Double],[Double])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-Analog-Transform.html#v:a_lp2bs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLowpass to highpass: \u003ccode\u003es --\u003e wc/s\u003c/code\u003e\n\u003c/p\u003e",
          "module": "DSP.Filter.Analog.Transform",
          "name": "a_lp2hp",
          "package": "dsp",
          "signature": "Double-\u003e ([Double], [Double])-\u003e ([Double], [Double])",
          "type": "function"
        },
        "index": {
          "description": "Lowpass to highpass wc",
          "hierarchy": "DSP Filter Analog Transform",
          "module": "DSP.Filter.Analog.Transform",
          "name": "a_lp2hp",
          "normalized": "Double-\u003e([Double],[Double])-\u003e([Double],[Double])",
          "package": "dsp",
          "signature": "Double-\u003e([Double],[Double])-\u003e([Double],[Double])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-Analog-Transform.html#v:a_lp2hp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLowpass to lowpass: \u003ccode\u003es --\u003e s/wc\u003c/code\u003e\n\u003c/p\u003e",
          "module": "DSP.Filter.Analog.Transform",
          "name": "a_lp2lp",
          "package": "dsp",
          "signature": "Double-\u003e ([Double], [Double])-\u003e ([Double], [Double])",
          "type": "function"
        },
        "index": {
          "description": "Lowpass to lowpass wc",
          "hierarchy": "DSP Filter Analog Transform",
          "module": "DSP.Filter.Analog.Transform",
          "name": "a_lp2lp",
          "normalized": "Double-\u003e([Double],[Double])-\u003e([Double],[Double])",
          "package": "dsp",
          "signature": "Double-\u003e([Double],[Double])-\u003e([Double],[Double])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-Analog-Transform.html#v:a_lp2lp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.Analog.Transform",
          "name": "propSubstituteAlt",
          "package": "dsp",
          "signature": "([Double], [Double]) -\u003e ([Double], [Double]) -\u003e Bool",
          "source": "src/DSP-Filter-Analog-Transform.html#propSubstituteAlt",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter Analog Transform",
          "module": "DSP.Filter.Analog.Transform",
          "name": "propSubstituteAlt",
          "normalized": "([Double],[Double])-\u003e([Double],[Double])-\u003eBool",
          "package": "dsp",
          "partial": "Substitute Alt",
          "signature": "([Double],[Double])-\u003e([Double],[Double])-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-Analog-Transform.html#v:propSubstituteAlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.Analog.Transform",
          "name": "propSubstituteRecip",
          "package": "dsp",
          "signature": "([Double], [Double]) -\u003e ([Double], [Double]) -\u003e Bool",
          "source": "src/DSP-Filter-Analog-Transform.html#propSubstituteRecip",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter Analog Transform",
          "module": "DSP.Filter.Analog.Transform",
          "name": "propSubstituteRecip",
          "normalized": "([Double],[Double])-\u003e([Double],[Double])-\u003eBool",
          "package": "dsp",
          "partial": "Substitute Recip",
          "signature": "([Double],[Double])-\u003e([Double],[Double])-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-Analog-Transform.html#v:propSubstituteRecip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.Analog.Transform",
          "name": "substitute",
          "package": "dsp",
          "signature": "([Double], [Double]) -\u003e ([Double], [Double]) -\u003e ([Double], [Double])",
          "source": "src/DSP-Filter-Analog-Transform.html#substitute",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter Analog Transform",
          "module": "DSP.Filter.Analog.Transform",
          "name": "substitute",
          "normalized": "([Double],[Double])-\u003e([Double],[Double])-\u003e([Double],[Double])",
          "package": "dsp",
          "signature": "([Double],[Double])-\u003e([Double],[Double])-\u003e([Double],[Double])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-Analog-Transform.html#v:substitute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFinite Impuse Response filtering functions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Filter.FIR.FIR",
          "name": "FIR",
          "package": "dsp",
          "source": "src/DSP-Filter-FIR-FIR.html",
          "type": "module"
        },
        "index": {
          "description": "Finite Impuse Response filtering functions",
          "hierarchy": "DSP Filter FIR FIR",
          "module": "DSP.Filter.FIR.FIR",
          "name": "FIR",
          "package": "dsp",
          "partial": "FIR",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-FIR.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements the following function, which is a FIR filter\n\u003c/p\u003e\u003cpre\u003ey[n] = sum(k=0,M) h[k]*x[n-k]\u003c/pre\u003e\u003cp\u003eWe implement the fir function with five helper functions, depending on\n the type of the filter.  In the following functions, we use the O&S\n convention that m is the order of the filter, which is equal to the\n number of taps minus one.\n\u003c/p\u003e",
          "module": "DSP.Filter.FIR.FIR",
          "name": "fir",
          "package": "dsp",
          "signature": "Array Int a-\u003e [a]-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Implements the following function which is FIR filter sum n-k We implement the fir function with five helper functions depending on the type of the filter In the following functions we use the convention that is the order of the filter which is equal to the number of taps minus one",
          "hierarchy": "DSP Filter FIR FIR",
          "module": "DSP.Filter.FIR.FIR",
          "name": "fir",
          "normalized": "Array Int a-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "Array Int a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-FIR.html#v:fir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.FIR",
          "name": "test",
          "package": "dsp",
          "signature": "Bool",
          "source": "src/DSP-Filter-FIR-FIR.html#test",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR FIR",
          "module": "DSP.Filter.FIR.FIR",
          "name": "test",
          "package": "dsp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-FIR.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements the Kaiser Window Method for designing FIR\n filters.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Filter.FIR.Kaiser",
          "name": "Kaiser",
          "package": "dsp",
          "source": "src/DSP-Filter-FIR-Kaiser.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements the Kaiser Window Method for designing FIR filters",
          "hierarchy": "DSP Filter FIR Kaiser",
          "module": "DSP.Filter.FIR.Kaiser",
          "name": "Kaiser",
          "package": "dsp",
          "partial": "Kaiser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-Kaiser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDesigns a highpass Kaiser filter\n\u003c/p\u003e",
          "module": "DSP.Filter.FIR.Kaiser",
          "name": "kaiser_hpf",
          "package": "dsp",
          "signature": "Double-\u003e Double-\u003e Double-\u003e Double-\u003e Array Int Double",
          "type": "function"
        },
        "index": {
          "description": "Designs highpass Kaiser filter",
          "hierarchy": "DSP Filter FIR Kaiser",
          "module": "DSP.Filter.FIR.Kaiser",
          "name": "kaiser_hpf",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eArray Int Double",
          "package": "dsp",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eArray Int Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-Kaiser.html#v:kaiser_hpf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDesigns a lowpass Kaiser filter\n\u003c/p\u003e",
          "module": "DSP.Filter.FIR.Kaiser",
          "name": "kaiser_lpf",
          "package": "dsp",
          "signature": "Double-\u003e Double-\u003e Double-\u003e Double-\u003e Array Int Double",
          "type": "function"
        },
        "index": {
          "description": "Designs lowpass Kaiser filter",
          "hierarchy": "DSP Filter FIR Kaiser",
          "module": "DSP.Filter.FIR.Kaiser",
          "name": "kaiser_lpf",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eArray Int Double",
          "package": "dsp",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003eDouble-\u003eArray Int Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-Kaiser.html#v:kaiser_lpf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePolynomial interpolators.  Taken from:\n\u003c/p\u003e\u003cp\u003eOlli Niemitalo (ollinie@freenet.hut.fi), \u003ca\u003ePolynomial Interpolators for\n High-Quality Resampling of Oversampled Audio\u003c/a\u003e Search for \u003ca\u003edeip.pdf\u003c/a\u003e with\n Google and you will find it.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "PolyInterp",
          "package": "dsp",
          "source": "src/DSP-Filter-FIR-PolyInterp.html",
          "type": "module"
        },
        "index": {
          "description": "Polynomial interpolators Taken from Olli Niemitalo ollinie@freenet.hut.fi Polynomial Interpolators for High-Quality Resampling of Oversampled Audio Search for deip.pdf with Google and you will find it",
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "PolyInterp",
          "package": "dsp",
          "partial": "Poly Interp",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "bspline_1p0o",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#bspline_1p0o",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "bspline_1p0o",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:bspline_1p0o"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "bspline_2p1o",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#bspline_2p1o",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "bspline_2p1o",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:bspline_2p1o"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "bspline_4p3o",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#bspline_4p3o",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "bspline_4p3o",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:bspline_4p3o"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "bspline_6p5o",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#bspline_6p5o",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "bspline_6p5o",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:bspline_6p5o"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "hermite_4p3o",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#hermite_4p3o",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "hermite_4p3o",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:hermite_4p3o"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "hermite_6p3o",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#hermite_6p3o",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "hermite_6p3o",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:hermite_6p3o"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "hermite_6p5o",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#hermite_6p5o",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "hermite_6p5o",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:hermite_6p5o"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "lagrange_4p3o",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#lagrange_4p3o",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "lagrange_4p3o",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:lagrange_4p3o"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "lagrange_6p5o",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#lagrange_6p5o",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "lagrange_6p5o",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:lagrange_6p5o"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emkcoef\u003c/a\u003e\u003c/code\u003e takes the continuous impluse response function (one of the\n functions below, \u003ccode\u003ef\u003c/code\u003e) and number of points in the interpolation, \u003ccode\u003ep\u003c/code\u003e, time\n shifts it by \u003ccode\u003ex\u003c/code\u003e, samples it, and creates an array with the interpolation\n coeficients that can be used as a FIR filter.\n\u003c/p\u003e",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "mkcoef",
          "package": "dsp",
          "signature": "(a -\u003e a)-\u003e b-\u003e a-\u003e Array b a",
          "type": "function"
        },
        "index": {
          "description": "mkcoef takes the continuous impluse response function one of the functions below and number of points in the interpolation time shifts it by samples it and creates an array with the interpolation coeficients that can be used as FIR filter",
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "mkcoef",
          "normalized": "(a-\u003ea)-\u003eb-\u003ea-\u003eArray b a",
          "package": "dsp",
          "signature": "(a-\u003ea)-\u003eb-\u003ea-\u003eArray b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:mkcoef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_2p3o16x",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#optimal_2p3o16x",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_2p3o16x",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:optimal_2p3o16x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_2p3o2x",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#optimal_2p3o2x",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_2p3o2x",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:optimal_2p3o2x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_2p3o32x",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#optimal_2p3o32x",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_2p3o32x",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:optimal_2p3o32x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_2p3o4x",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#optimal_2p3o4x",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_2p3o4x",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:optimal_2p3o4x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_2p3o8x",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#optimal_2p3o8x",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_2p3o8x",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:optimal_2p3o8x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_4p2o16x",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#optimal_4p2o16x",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_4p2o16x",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:optimal_4p2o16x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_4p2o2x",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#optimal_4p2o2x",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_4p2o2x",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:optimal_4p2o2x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_4p2o32x",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#optimal_4p2o32x",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_4p2o32x",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:optimal_4p2o32x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_4p2o4x",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#optimal_4p2o4x",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_4p2o4x",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:optimal_4p2o4x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_4p2o8x",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#optimal_4p2o8x",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_4p2o8x",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:optimal_4p2o8x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_4p3o16x",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#optimal_4p3o16x",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_4p3o16x",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:optimal_4p3o16x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_4p3o2x",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#optimal_4p3o2x",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_4p3o2x",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:optimal_4p3o2x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_4p3o32x",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#optimal_4p3o32x",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_4p3o32x",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:optimal_4p3o32x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_4p3o4x",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#optimal_4p3o4x",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_4p3o4x",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:optimal_4p3o4x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_4p3o8x",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#optimal_4p3o8x",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_4p3o8x",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:optimal_4p3o8x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_4p4o16x",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#optimal_4p4o16x",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_4p4o16x",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:optimal_4p4o16x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_4p4o2x",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#optimal_4p4o2x",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_4p4o2x",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:optimal_4p4o2x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_4p4o32x",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#optimal_4p4o32x",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_4p4o32x",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:optimal_4p4o32x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_4p4o4x",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#optimal_4p4o4x",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_4p4o4x",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:optimal_4p4o4x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_4p4o8x",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#optimal_4p4o8x",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_4p4o8x",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:optimal_4p4o8x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_6p4o16x",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#optimal_6p4o16x",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_6p4o16x",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:optimal_6p4o16x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_6p4o2x",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#optimal_6p4o2x",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_6p4o2x",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:optimal_6p4o2x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_6p4o32x",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#optimal_6p4o32x",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_6p4o32x",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:optimal_6p4o32x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_6p4o4x",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#optimal_6p4o4x",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_6p4o4x",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:optimal_6p4o4x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_6p4o8x",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#optimal_6p4o8x",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_6p4o8x",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:optimal_6p4o8x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_6p5o16x",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#optimal_6p5o16x",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_6p5o16x",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:optimal_6p5o16x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_6p5o2x",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#optimal_6p5o2x",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_6p5o2x",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:optimal_6p5o2x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_6p5o32x",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#optimal_6p5o32x",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_6p5o32x",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:optimal_6p5o32x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_6p5o4x",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#optimal_6p5o4x",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_6p5o4x",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:optimal_6p5o4x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_6p5o8x",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#optimal_6p5o8x",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "optimal_6p5o8x",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:optimal_6p5o8x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "parabolic2x_4p2o",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#parabolic2x_4p2o",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "parabolic2x_4p2o",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:parabolic2x_4p2o"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "sndosc_4p5o",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#sndosc_4p5o",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "sndosc_4p5o",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:sndosc_4p5o"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "sndosc_6p5o",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#sndosc_6p5o",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "sndosc_6p5o",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:sndosc_6p5o"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "watte_4p2o",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/DSP-Filter-FIR-PolyInterp.html#watte_4p2o",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter FIR PolyInterp",
          "module": "DSP.Filter.FIR.PolyInterp",
          "name": "watte_4p2o",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-PolyInterp.html#v:watte_4p2o"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule to sharpen FIR filters\n\u003c/p\u003e\u003cp\u003eReference: Hamming, Sect 6.6\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eH'(z) = 3 * H(z)^2 - s * H(z)^3\u003c/code\u003e\n \u003ccode\u003e      = H(z)^2 * (3 - 2 * H(z))\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eProcedure:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e  Filter the signal once with H(z)\n\u003c/li\u003e\u003cli\u003e  Double this\n\u003c/li\u003e\u003cli\u003e  Subtract this from 3x\n\u003c/li\u003e\u003cli\u003e  Filter this twice by H(z) or once by H(z)^2\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
          "module": "DSP.Filter.FIR.Sharpen",
          "name": "Sharpen",
          "package": "dsp",
          "source": "src/DSP-Filter-FIR-Sharpen.html",
          "type": "module"
        },
        "index": {
          "description": "Module to sharpen FIR filters Reference Hamming Sect Procedure Filter the signal once with Double this Subtract this from Filter this twice by or once by",
          "hierarchy": "DSP Filter FIR Sharpen",
          "module": "DSP.Filter.FIR.Sharpen",
          "name": "Sharpen",
          "package": "dsp",
          "partial": "Sharpen",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-Sharpen.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter shaprening routine\n\u003c/p\u003e",
          "module": "DSP.Filter.FIR.Sharpen",
          "name": "sharpen",
          "package": "dsp",
          "signature": "Array Int a-\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Filter shaprening routine",
          "hierarchy": "DSP Filter FIR Sharpen",
          "module": "DSP.Filter.FIR.Sharpen",
          "name": "sharpen",
          "normalized": "Array Int a-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "Array Int a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-Sharpen.html#v:sharpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHerrmann type smooth FIR filters, from Hamming, Chapter 7, also\n known as maximally flat FIR filters\n\u003c/p\u003e\u003cp\u003eIf x is the -3 dB point, then p/q = -(x+1)/(x-1)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Filter.FIR.Smooth",
          "name": "Smooth",
          "package": "dsp",
          "source": "src/DSP-Filter-FIR-Smooth.html",
          "type": "module"
        },
        "index": {
          "description": "Herrmann type smooth FIR filters from Hamming Chapter also known as maximally flat FIR filters If is the dB point then x-1",
          "hierarchy": "DSP Filter FIR Smooth",
          "module": "DSP.Filter.FIR.Smooth",
          "name": "Smooth",
          "package": "dsp",
          "partial": "Smooth",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-Smooth.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edesigns smooth FIR filters\n\u003c/p\u003e",
          "module": "DSP.Filter.FIR.Smooth",
          "name": "smoothfir",
          "package": "dsp",
          "signature": "a-\u003e a-\u003e Array a b",
          "type": "function"
        },
        "index": {
          "description": "designs smooth FIR filters",
          "hierarchy": "DSP Filter FIR Smooth",
          "module": "DSP.Filter.FIR.Smooth",
          "name": "smoothfir",
          "normalized": "a-\u003ea-\u003eArray a b",
          "package": "dsp",
          "signature": "a-\u003ea-\u003eArray a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-Smooth.html#v:smoothfir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for creating rectangular windowed FIR filters\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Filter.FIR.Taps",
          "name": "Taps",
          "package": "dsp",
          "source": "src/DSP-Filter-FIR-Taps.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for creating rectangular windowed FIR filters",
          "hierarchy": "DSP Filter FIR Taps",
          "module": "DSP.Filter.FIR.Taps",
          "name": "Taps",
          "package": "dsp",
          "partial": "Taps",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-Taps.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBandpass filter\n\u003c/p\u003e",
          "module": "DSP.Filter.FIR.Taps",
          "name": "bpf",
          "package": "dsp",
          "signature": "b-\u003e b-\u003e a-\u003e Array a b",
          "type": "function"
        },
        "index": {
          "description": "Bandpass filter",
          "hierarchy": "DSP Filter FIR Taps",
          "module": "DSP.Filter.FIR.Taps",
          "name": "bpf",
          "normalized": "a-\u003ea-\u003eb-\u003eArray b a",
          "package": "dsp",
          "signature": "b-\u003eb-\u003ea-\u003eArray a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-Taps.html#v:bpf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBandstop filter\n\u003c/p\u003e",
          "module": "DSP.Filter.FIR.Taps",
          "name": "bsf",
          "package": "dsp",
          "signature": "b-\u003e b-\u003e a-\u003e Array a b",
          "type": "function"
        },
        "index": {
          "description": "Bandstop filter",
          "hierarchy": "DSP Filter FIR Taps",
          "module": "DSP.Filter.FIR.Taps",
          "name": "bsf",
          "normalized": "a-\u003ea-\u003eb-\u003eArray b a",
          "package": "dsp",
          "signature": "b-\u003eb-\u003ea-\u003eArray a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-Taps.html#v:bsf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHighpass filter\n\u003c/p\u003e",
          "module": "DSP.Filter.FIR.Taps",
          "name": "hpf",
          "package": "dsp",
          "signature": "b-\u003e a-\u003e Array a b",
          "type": "function"
        },
        "index": {
          "description": "Highpass filter",
          "hierarchy": "DSP Filter FIR Taps",
          "module": "DSP.Filter.FIR.Taps",
          "name": "hpf",
          "normalized": "a-\u003eb-\u003eArray b a",
          "package": "dsp",
          "signature": "b-\u003ea-\u003eArray a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-Taps.html#v:hpf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLowpass filter\n\u003c/p\u003e",
          "module": "DSP.Filter.FIR.Taps",
          "name": "lpf",
          "package": "dsp",
          "signature": "b-\u003e a-\u003e Array a b",
          "type": "function"
        },
        "index": {
          "description": "Lowpass filter",
          "hierarchy": "DSP Filter FIR Taps",
          "module": "DSP.Filter.FIR.Taps",
          "name": "lpf",
          "normalized": "a-\u003eb-\u003eArray b a",
          "package": "dsp",
          "signature": "b-\u003ea-\u003eArray a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-Taps.html#v:lpf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiband filter\n\u003c/p\u003e",
          "module": "DSP.Filter.FIR.Taps",
          "name": "mbf",
          "package": "dsp",
          "signature": "[b]-\u003e [b]-\u003e a-\u003e Array a b",
          "type": "function"
        },
        "index": {
          "description": "Multiband filter",
          "hierarchy": "DSP Filter FIR Taps",
          "module": "DSP.Filter.FIR.Taps",
          "name": "mbf",
          "normalized": "[a]-\u003e[a]-\u003eb-\u003eArray b a",
          "package": "dsp",
          "signature": "[b]-\u003e[b]-\u003ea-\u003eArray a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-Taps.html#v:mbf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaised-cosine filter\n\u003c/p\u003e",
          "module": "DSP.Filter.FIR.Taps",
          "name": "rc",
          "package": "dsp",
          "signature": "b-\u003e b-\u003e a-\u003e Array a b",
          "type": "function"
        },
        "index": {
          "description": "Raised-cosine filter",
          "hierarchy": "DSP Filter FIR Taps",
          "module": "DSP.Filter.FIR.Taps",
          "name": "rc",
          "normalized": "a-\u003ea-\u003eb-\u003eArray b a",
          "package": "dsp",
          "signature": "b-\u003eb-\u003ea-\u003eArray a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-Taps.html#v:rc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use DSP.Window instead\n\u003c/p\u003e\u003c/div\u003e\u003c/div\u003e",
          "module": "DSP.Filter.FIR.Window",
          "name": "Window",
          "package": "dsp",
          "source": "src/DSP-Filter-FIR-Window.html",
          "type": "module"
        },
        "index": {
          "description": "Deprecated Use DSP.Window instead",
          "hierarchy": "DSP Filter FIR Window",
          "module": "DSP.Filter.FIR.Window",
          "name": "Window",
          "package": "dsp",
          "partial": "Window",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-FIR-Window.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module contains a function for performing the bilinear transform.\n\u003c/p\u003e\u003cp\u003eThe input is a rational polynomial representation of the s-domain\n function to be transformed.\n\u003c/p\u003e\u003cp\u003eIn the bilinear transform, we substitute\n\u003c/p\u003e\u003cpre\u003e       2    1 - z^-1\u003c/pre\u003e\u003cpre\u003es \u003c--  -- * --------\u003c/pre\u003e\u003cpre\u003e       ts   1 + z^-1\u003c/pre\u003e\u003cp\u003einto the rational polynomial, where ts is the sampling period.  To get\n a rational polynomial back, we use the following method:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Substitute s^n with (2/ts * (1-z^-1))^n == [ -2/ts, 2/ts ]^n\n\u003c/li\u003e\u003cli\u003e  Multiply the results by (1+z^-1)^n == [ 1, 1 ]^n\n\u003c/li\u003e\u003cli\u003e  Add up all of the common terms\n\u003c/li\u003e\u003cli\u003e  Normalize all of the coeficients by a0\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003ewhere n is the maximum order of the numerator and denominator\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Filter.IIR.Bilinear",
          "name": "Bilinear",
          "package": "dsp",
          "source": "src/DSP-Filter-IIR-Bilinear.html",
          "type": "module"
        },
        "index": {
          "description": "The module contains function for performing the bilinear transform The input is rational polynomial representation of the s-domain function to be transformed In the bilinear transform we substitute ts into the rational polynomial where ts is the sampling period To get rational polynomial back we use the following method Substitute with ts ts ts Multiply the results by Add up all of the common terms Normalize all of the coeficients by a0 where is the maximum order of the numerator and denominator",
          "hierarchy": "DSP Filter IIR Bilinear",
          "module": "DSP.Filter.IIR.Bilinear",
          "name": "Bilinear",
          "package": "dsp",
          "partial": "Bilinear",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Bilinear.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms the bilinear transform\n\u003c/p\u003e",
          "module": "DSP.Filter.IIR.Bilinear",
          "name": "bilinear",
          "package": "dsp",
          "signature": "Double-\u003e ([Double], [Double])-\u003e ([Double], [Double])",
          "type": "function"
        },
        "index": {
          "description": "Performs the bilinear transform",
          "hierarchy": "DSP Filter IIR Bilinear",
          "module": "DSP.Filter.IIR.Bilinear",
          "name": "bilinear",
          "normalized": "Double-\u003e([Double],[Double])-\u003e([Double],[Double])",
          "package": "dsp",
          "signature": "Double-\u003e([Double],[Double])-\u003e([Double],[Double])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Bilinear.html#v:bilinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction for frequency prewarping\n\u003c/p\u003e",
          "module": "DSP.Filter.IIR.Bilinear",
          "name": "prewarp",
          "package": "dsp",
          "signature": "Double-\u003e Double-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "Function for frequency prewarping",
          "hierarchy": "DSP Filter IIR Bilinear",
          "module": "DSP.Filter.IIR.Bilinear",
          "name": "prewarp",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "dsp",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Bilinear.html#v:prewarp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.IIR.Bilinear",
          "name": "step1",
          "package": "dsp",
          "signature": "a -\u003e [a] -\u003e [[a]]",
          "source": "src/DSP-Filter-IIR-Bilinear.html#step1",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter IIR Bilinear",
          "module": "DSP.Filter.IIR.Bilinear",
          "name": "step1",
          "normalized": "a-\u003e[a]-\u003e[[a]]",
          "package": "dsp",
          "signature": "a-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Bilinear.html#v:step1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.IIR.Bilinear",
          "name": "step2",
          "package": "dsp",
          "signature": "b -\u003e [[a]] -\u003e [[a]]",
          "source": "src/DSP-Filter-IIR-Bilinear.html#step2",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter IIR Bilinear",
          "module": "DSP.Filter.IIR.Bilinear",
          "name": "step2",
          "normalized": "a-\u003e[[b]]-\u003e[[b]]",
          "package": "dsp",
          "signature": "b-\u003e[[a]]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Bilinear.html#v:step2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.IIR.Bilinear",
          "name": "step3",
          "package": "dsp",
          "signature": "[[a]] -\u003e [a]",
          "source": "src/DSP-Filter-IIR-Bilinear.html#step3",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter IIR Bilinear",
          "module": "DSP.Filter.IIR.Bilinear",
          "name": "step3",
          "normalized": "[[a]]-\u003e[a]",
          "package": "dsp",
          "signature": "[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Bilinear.html#v:step3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.IIR.Bilinear",
          "name": "step4",
          "package": "dsp",
          "signature": "a -\u003e [a] -\u003e [a]",
          "source": "src/DSP-Filter-IIR-Bilinear.html#step4",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter IIR Bilinear",
          "module": "DSP.Filter.IIR.Bilinear",
          "name": "step4",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Bilinear.html#v:step4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.IIR.Bilinear",
          "name": "zm",
          "package": "dsp",
          "signature": "a -\u003e b -\u003e [a]",
          "source": "src/DSP-Filter-IIR-Bilinear.html#zm",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter IIR Bilinear",
          "module": "DSP.Filter.IIR.Bilinear",
          "name": "zm",
          "normalized": "a-\u003eb-\u003e[a]",
          "package": "dsp",
          "signature": "a-\u003eb-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Bilinear.html#v:zm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.IIR.Bilinear",
          "name": "zp",
          "package": "dsp",
          "signature": "b -\u003e [a]",
          "source": "src/DSP-Filter-IIR-Bilinear.html#zp",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter IIR Bilinear",
          "module": "DSP.Filter.IIR.Bilinear",
          "name": "zp",
          "normalized": "a-\u003e[b]",
          "package": "dsp",
          "signature": "b-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Bilinear.html#v:zp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCookbook formulae for audio EQ biquad filter coefficients\n by Robert Bristow-Johnson  \u003ca\u003erobert@wavemechanics.com\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.harmony-central.com/Computer/Programming/Audio-EQ-Cookbook.txt\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Filter.IIR.Cookbook",
          "name": "Cookbook",
          "package": "dsp",
          "source": "src/DSP-Filter-IIR-Cookbook.html",
          "type": "module"
        },
        "index": {
          "description": "Cookbook formulae for audio EQ biquad filter coefficients by Robert Bristow-Johnson robert@wavemechanics.com http www.harmony-central.com Computer Programming Audio-EQ-Cookbook.txt",
          "hierarchy": "DSP Filter IIR Cookbook",
          "module": "DSP.Filter.IIR.Cookbook",
          "name": "Cookbook",
          "package": "dsp",
          "partial": "Cookbook",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Cookbook.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.IIR.Cookbook",
          "name": "apf",
          "package": "dsp",
          "signature": "a -\u003e a -\u003e [a] -\u003e [a]",
          "source": "src/DSP-Filter-IIR-Cookbook.html#apf",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter IIR Cookbook",
          "module": "DSP.Filter.IIR.Cookbook",
          "name": "apf",
          "normalized": "a-\u003ea-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "a-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Cookbook.html#v:apf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.IIR.Cookbook",
          "name": "bpf_cpg",
          "package": "dsp",
          "signature": "a -\u003e a -\u003e [a] -\u003e [a]",
          "source": "src/DSP-Filter-IIR-Cookbook.html#bpf_cpg",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter IIR Cookbook",
          "module": "DSP.Filter.IIR.Cookbook",
          "name": "bpf_cpg",
          "normalized": "a-\u003ea-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "a-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Cookbook.html#v:bpf_cpg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.IIR.Cookbook",
          "name": "bpf_csg",
          "package": "dsp",
          "signature": "a -\u003e a -\u003e [a] -\u003e [a]",
          "source": "src/DSP-Filter-IIR-Cookbook.html#bpf_csg",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter IIR Cookbook",
          "module": "DSP.Filter.IIR.Cookbook",
          "name": "bpf_csg",
          "normalized": "a-\u003ea-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "a-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Cookbook.html#v:bpf_csg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.IIR.Cookbook",
          "name": "highShelf",
          "package": "dsp",
          "signature": "a -\u003e a -\u003e a -\u003e [a] -\u003e [a]",
          "source": "src/DSP-Filter-IIR-Cookbook.html#highShelf",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter IIR Cookbook",
          "module": "DSP.Filter.IIR.Cookbook",
          "name": "highShelf",
          "normalized": "a-\u003ea-\u003ea-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "partial": "Shelf",
          "signature": "a-\u003ea-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Cookbook.html#v:highShelf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.IIR.Cookbook",
          "name": "hpf",
          "package": "dsp",
          "signature": "a -\u003e a -\u003e [a] -\u003e [a]",
          "source": "src/DSP-Filter-IIR-Cookbook.html#hpf",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter IIR Cookbook",
          "module": "DSP.Filter.IIR.Cookbook",
          "name": "hpf",
          "normalized": "a-\u003ea-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "a-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Cookbook.html#v:hpf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.IIR.Cookbook",
          "name": "lowShelf",
          "package": "dsp",
          "signature": "a -\u003e a -\u003e a -\u003e [a] -\u003e [a]",
          "source": "src/DSP-Filter-IIR-Cookbook.html#lowShelf",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter IIR Cookbook",
          "module": "DSP.Filter.IIR.Cookbook",
          "name": "lowShelf",
          "normalized": "a-\u003ea-\u003ea-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "partial": "Shelf",
          "signature": "a-\u003ea-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Cookbook.html#v:lowShelf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.IIR.Cookbook",
          "name": "lpf",
          "package": "dsp",
          "signature": "a -\u003e a -\u003e [a] -\u003e [a]",
          "source": "src/DSP-Filter-IIR-Cookbook.html#lpf",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter IIR Cookbook",
          "module": "DSP.Filter.IIR.Cookbook",
          "name": "lpf",
          "normalized": "a-\u003ea-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "a-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Cookbook.html#v:lpf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.IIR.Cookbook",
          "name": "notch",
          "package": "dsp",
          "signature": "a -\u003e a -\u003e [a] -\u003e [a]",
          "source": "src/DSP-Filter-IIR-Cookbook.html#notch",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter IIR Cookbook",
          "module": "DSP.Filter.IIR.Cookbook",
          "name": "notch",
          "normalized": "a-\u003ea-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "a-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Cookbook.html#v:notch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.IIR.Cookbook",
          "name": "peakingEQ",
          "package": "dsp",
          "signature": "a -\u003e a -\u003e a -\u003e [a] -\u003e [a]",
          "source": "src/DSP-Filter-IIR-Cookbook.html#peakingEQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter IIR Cookbook",
          "module": "DSP.Filter.IIR.Cookbook",
          "name": "peakingEQ",
          "normalized": "a-\u003ea-\u003ea-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "partial": "EQ",
          "signature": "a-\u003ea-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Cookbook.html#v:peakingEQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLowpass IIR design functions\n\u003c/p\u003e\u003cp\u003eMethod:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Design analog prototype\n\u003c/li\u003e\u003cli\u003e  Perform analog-to-analog frequency transformation\n\u003c/li\u003e\u003cli\u003e  Perform bilinear transform\n\u003c/li\u003e\u003c/ol\u003e\u003c/div\u003e",
          "module": "DSP.Filter.IIR.Design",
          "name": "Design",
          "package": "dsp",
          "source": "src/DSP-Filter-IIR-Design.html",
          "type": "module"
        },
        "index": {
          "description": "Lowpass IIR design functions Method Design analog prototype Perform analog-to-analog frequency transformation Perform bilinear transform",
          "hierarchy": "DSP Filter IIR Design",
          "module": "DSP.Filter.IIR.Design",
          "name": "Design",
          "package": "dsp",
          "partial": "Design",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Design.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates lowpass Butterworth IIR filters\n\u003c/p\u003e",
          "module": "DSP.Filter.IIR.Design",
          "name": "mkButterworth",
          "package": "dsp",
          "signature": "(Double, Double)-\u003e (Double, Double)-\u003e (Array Int Double, Array Int Double)",
          "type": "function"
        },
        "index": {
          "description": "Generates lowpass Butterworth IIR filters",
          "hierarchy": "DSP Filter IIR Design",
          "module": "DSP.Filter.IIR.Design",
          "name": "mkButterworth",
          "normalized": "(Double,Double)-\u003e(Double,Double)-\u003e(Array Int Double,Array Int Double)",
          "package": "dsp",
          "partial": "Butterworth",
          "signature": "(Double,Double)-\u003e(Double,Double)-\u003e(Array Int Double,Array Int Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Design.html#v:mkButterworth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates lowpass Chebyshev IIR filters\n\u003c/p\u003e",
          "module": "DSP.Filter.IIR.Design",
          "name": "mkChebyshev1",
          "package": "dsp",
          "signature": "(Double, Double)-\u003e (Double, Double)-\u003e (Array Int Double, Array Int Double)",
          "type": "function"
        },
        "index": {
          "description": "Generates lowpass Chebyshev IIR filters",
          "hierarchy": "DSP Filter IIR Design",
          "module": "DSP.Filter.IIR.Design",
          "name": "mkChebyshev1",
          "normalized": "(Double,Double)-\u003e(Double,Double)-\u003e(Array Int Double,Array Int Double)",
          "package": "dsp",
          "partial": "Chebyshev",
          "signature": "(Double,Double)-\u003e(Double,Double)-\u003e(Array Int Double,Array Int Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Design.html#v:mkChebyshev1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates lowpass Inverse Chebyshev IIR filters\n\u003c/p\u003e",
          "module": "DSP.Filter.IIR.Design",
          "name": "mkChebyshev2",
          "package": "dsp",
          "signature": "(Double, Double)-\u003e (Double, Double)-\u003e (Array Int Double, Array Int Double)",
          "type": "function"
        },
        "index": {
          "description": "Generates lowpass Inverse Chebyshev IIR filters",
          "hierarchy": "DSP Filter IIR Design",
          "module": "DSP.Filter.IIR.Design",
          "name": "mkChebyshev2",
          "normalized": "(Double,Double)-\u003e(Double,Double)-\u003e(Array Int Double,Array Int Double)",
          "package": "dsp",
          "partial": "Chebyshev",
          "signature": "(Double,Double)-\u003e(Double,Double)-\u003e(Array Int Double,Array Int Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Design.html#v:mkChebyshev2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.IIR.Design",
          "name": "poly2iir",
          "package": "dsp",
          "signature": "([a], [b]) -\u003e (Array Int a, Array Int b)",
          "source": "src/DSP-Filter-IIR-Design.html#poly2iir",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter IIR Design",
          "module": "DSP.Filter.IIR.Design",
          "name": "poly2iir",
          "normalized": "([a],[b])-\u003e(Array Int a,Array Int b)",
          "package": "dsp",
          "signature": "([a],[b])-\u003e(Array Int a,Array Int b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Design.html#v:poly2iir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIIR functions\n\u003c/p\u003e\u003cp\u003eIMPORTANT NOTE:\n\u003c/p\u003e\u003cp\u003eExcept in integrator, we use the convention that\n\u003c/p\u003e\u003cpre\u003ey[n] = sum(k=0..M) b_k*x[n-k] - sum(k=1..N) a_k*y[n-k]\u003c/pre\u003e\u003cpre\u003e         sum(k=0..M) b_k*z^-1\u003c/pre\u003e\u003cpre\u003eH(z) = ------------------------\u003c/pre\u003e\u003cpre\u003e       1 + sum(k=1..N) a_k*z^-1\u003c/pre\u003e\u003c/div\u003e",
          "module": "DSP.Filter.IIR.IIR",
          "name": "IIR",
          "package": "dsp",
          "source": "src/DSP-Filter-IIR-IIR.html",
          "type": "module"
        },
        "index": {
          "description": "IIR functions IMPORTANT NOTE Except in integrator we use the convention that sum n-k sum n-k sum sum",
          "hierarchy": "DSP Filter IIR IIR",
          "module": "DSP.Filter.IIR.IIR",
          "name": "IIR",
          "package": "dsp",
          "partial": "IIR",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-IIR.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirect Form I for a second order section\n\u003c/p\u003e\u003cpre\u003ev[n] = b0 * x[n] + b1 * x[n-1] + b2 * x[n-2]\u003c/pre\u003e\u003cpre\u003ey[n] = v[n] - a1 * y[n-1] - a2 * y[n-2]\u003c/pre\u003e",
          "module": "DSP.Filter.IIR.IIR",
          "name": "biquad_df1",
          "package": "dsp",
          "signature": "a-\u003e a-\u003e a-\u003e a-\u003e a-\u003e [a]-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Direct Form for second order section b0 b1 n-1 b2 n-2 a1 n-1 a2 n-2",
          "hierarchy": "DSP Filter IIR IIR",
          "module": "DSP.Filter.IIR.IIR",
          "name": "biquad_df1",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-IIR.html#v:biquad_df1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirect Form II for a second order section (biquad)\n\u003c/p\u003e\u003cpre\u003ew[n] = -a1 * w[n-1] - a2 * w[n-2] + x[n]\u003c/pre\u003e\u003cpre\u003ey[n] = b0 * w[n] + b1 * w[n-1] + b2 * w[n-2]\u003c/pre\u003e",
          "module": "DSP.Filter.IIR.IIR",
          "name": "biquad_df2",
          "package": "dsp",
          "signature": "a-\u003e a-\u003e a-\u003e a-\u003e a-\u003e [a]-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Direct Form II for second order section biquad a1 n-1 a2 n-2 b0 b1 n-1 b2 n-2",
          "hierarchy": "DSP Filter IIR IIR",
          "module": "DSP.Filter.IIR.IIR",
          "name": "biquad_df2",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-IIR.html#v:biquad_df2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransposed Direct Form II for a second order section\n\u003c/p\u003e\u003cpre\u003ev0[n] = b0 * x[n] + v1[n-1]\u003c/pre\u003e\u003cpre\u003ey[n] = v0[n]\u003c/pre\u003e\u003cpre\u003ev1[n] = -a1 * y[n] + b1 * x[n] + v2[n-1]\u003c/pre\u003e\u003cpre\u003ev2[n] = -a2 * y[n] + b2 * x[n]\u003c/pre\u003e",
          "module": "DSP.Filter.IIR.IIR",
          "name": "biquad_df2t",
          "package": "dsp",
          "signature": "a-\u003e a-\u003e a-\u003e a-\u003e a-\u003e [a]-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Transposed Direct Form II for second order section v0 b0 v1 n-1 v0 v1 a1 b1 v2 n-1 v2 a2 b2",
          "hierarchy": "DSP Filter IIR IIR",
          "module": "DSP.Filter.IIR.IIR",
          "name": "biquad_df2t",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-IIR.html#v:biquad_df2t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.IIR.IIR",
          "name": "f1",
          "package": "dsp",
          "signature": "[a] -\u003e [a]",
          "source": "src/DSP-Filter-IIR-IIR.html#f1",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter IIR IIR",
          "module": "DSP.Filter.IIR.IIR",
          "name": "f1",
          "normalized": "[a]-\u003e[a]",
          "package": "dsp",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-IIR.html#v:f1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.IIR.IIR",
          "name": "f2",
          "package": "dsp",
          "signature": "[a] -\u003e [a]",
          "source": "src/DSP-Filter-IIR-IIR.html#f2",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter IIR IIR",
          "module": "DSP.Filter.IIR.IIR",
          "name": "f2",
          "normalized": "[a]-\u003e[a]",
          "package": "dsp",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-IIR.html#v:f2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.IIR.IIR",
          "name": "f3",
          "package": "dsp",
          "signature": "[a] -\u003e [a]",
          "source": "src/DSP-Filter-IIR-IIR.html#f3",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter IIR IIR",
          "module": "DSP.Filter.IIR.IIR",
          "name": "f3",
          "normalized": "[a]-\u003e[a]",
          "package": "dsp",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-IIR.html#v:f3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.IIR.IIR",
          "name": "f4",
          "package": "dsp",
          "signature": "[Double] -\u003e [Double]",
          "source": "src/DSP-Filter-IIR-IIR.html#f4",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter IIR IIR",
          "module": "DSP.Filter.IIR.IIR",
          "name": "f4",
          "normalized": "[Double]-\u003e[Double]",
          "package": "dsp",
          "signature": "[Double]-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-IIR.html#v:f4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.IIR.IIR",
          "name": "f5",
          "package": "dsp",
          "signature": "[Double] -\u003e [Double]",
          "source": "src/DSP-Filter-IIR-IIR.html#f5",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter IIR IIR",
          "module": "DSP.Filter.IIR.IIR",
          "name": "f5",
          "normalized": "[Double]-\u003e[Double]",
          "package": "dsp",
          "signature": "[Double]-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-IIR.html#v:f5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFirst order section, DF1\n\u003c/p\u003e\u003cpre\u003ev[n] = b0 * x[n] + b1 * x[n-1]\u003c/pre\u003e\u003cpre\u003ey[n] = v[n] - a1 * y[n-1]\u003c/pre\u003e",
          "module": "DSP.Filter.IIR.IIR",
          "name": "fos_df1",
          "package": "dsp",
          "signature": "a-\u003e a-\u003e a-\u003e [a]-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "First order section DF1 b0 b1 n-1 a1 n-1",
          "hierarchy": "DSP Filter IIR IIR",
          "module": "DSP.Filter.IIR.IIR",
          "name": "fos_df1",
          "normalized": "a-\u003ea-\u003ea-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "a-\u003ea-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-IIR.html#v:fos_df1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFirst order section, DF2\n\u003c/p\u003e\u003cpre\u003ew[n] = -a1 * w[n-1] + x[n]\u003c/pre\u003e\u003cpre\u003ey[n] = b0 * w[n] + b1 * w[n-1]\u003c/pre\u003e",
          "module": "DSP.Filter.IIR.IIR",
          "name": "fos_df2",
          "package": "dsp",
          "signature": "a-\u003e a-\u003e a-\u003e [a]-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "First order section DF2 a1 n-1 b0 b1 n-1",
          "hierarchy": "DSP Filter IIR IIR",
          "module": "DSP.Filter.IIR.IIR",
          "name": "fos_df2",
          "normalized": "a-\u003ea-\u003ea-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "a-\u003ea-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-IIR.html#v:fos_df2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFirst order section, DF2T\n\u003c/p\u003e\u003cpre\u003ev0[n] = b0 * x[n] + v1[n-1]\u003c/pre\u003e\u003cpre\u003ey[n] = v0[n]\u003c/pre\u003e\u003cpre\u003ev1[n] = -a1 * y[n] + b1 * x[n]\u003c/pre\u003e",
          "module": "DSP.Filter.IIR.IIR",
          "name": "fos_df2t",
          "package": "dsp",
          "signature": "a-\u003e a-\u003e a-\u003e [a]-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "First order section DF2T v0 b0 v1 n-1 v0 v1 a1 b1",
          "hierarchy": "DSP Filter IIR IIR",
          "module": "DSP.Filter.IIR.IIR",
          "name": "fos_df2t",
          "normalized": "a-\u003ea-\u003ea-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "a-\u003ea-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-IIR.html#v:fos_df2t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirect Form I IIR\n\u003c/p\u003e\u003cpre\u003ev[n] = sum(k=0..M) b_k*x[n-k]\u003c/pre\u003e\u003cpre\u003ey[n] = v[n] - sum(k=1..N) a_k*y[n-k]\u003c/pre\u003e\u003cp\u003e\u003ccode\u003ev[n]\u003c/code\u003e is calculated with \u003ccode\u003e\u003ca\u003efir\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "DSP.Filter.IIR.IIR",
          "name": "iir_df1",
          "package": "dsp",
          "signature": "(Array Int a, Array Int a)-\u003e [a]-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Direct Form IIR sum n-k sum n-k is calculated with fir",
          "hierarchy": "DSP Filter IIR IIR",
          "module": "DSP.Filter.IIR.IIR",
          "name": "iir_df1",
          "normalized": "(Array Int a,Array Int a)-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "(Array Int a,Array Int a)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-IIR.html#v:iir_df1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirect Form II IIR\n\u003c/p\u003e\u003cpre\u003ew[n] = x[n] - sum(k=1..N) a_k*w[n-k]\u003c/pre\u003e\u003cpre\u003ey[n] = sum(k=0..M) b_k*w[n-k]\u003c/pre\u003e",
          "module": "DSP.Filter.IIR.IIR",
          "name": "iir_df2",
          "package": "dsp",
          "signature": "(Array Int a, Array Int a)-\u003e [a]-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Direct Form II IIR sum n-k sum n-k",
          "hierarchy": "DSP Filter IIR IIR",
          "module": "DSP.Filter.IIR.IIR",
          "name": "iir_df2",
          "normalized": "(Array Int a,Array Int a)-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "(Array Int a,Array Int a)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-IIR.html#v:iir_df2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is an integrator when a==1, and a leaky integrator when \u003ccode\u003e0 \u003c a \u003c 1\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003ey[n] = a * y[n-1] + x[n]\u003c/pre\u003e",
          "module": "DSP.Filter.IIR.IIR",
          "name": "integrator",
          "package": "dsp",
          "signature": "a-\u003e [a]-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "This is an integrator when and leaky integrator when n-1",
          "hierarchy": "DSP Filter IIR IIR",
          "module": "DSP.Filter.IIR.IIR",
          "name": "integrator",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-IIR.html#v:integrator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.IIR.IIR",
          "name": "xt",
          "package": "dsp",
          "signature": "[Double]",
          "source": "src/DSP-Filter-IIR-IIR.html#xt",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter IIR IIR",
          "module": "DSP.Filter.IIR.IIR",
          "name": "xt",
          "normalized": "[Double]",
          "package": "dsp",
          "signature": "[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-IIR.html#v:xt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Filter.IIR.IIR",
          "name": "yt",
          "package": "dsp",
          "signature": "[Double]",
          "source": "src/DSP-Filter-IIR-IIR.html#yt",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Filter IIR IIR",
          "module": "DSP.Filter.IIR.IIR",
          "name": "yt",
          "normalized": "[Double]",
          "package": "dsp",
          "signature": "[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-IIR.html#v:yt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMatched-z transform\n\u003c/p\u003e\u003cp\u003eReferences: Proakis and Manolakis, Rabiner and Gold\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Filter.IIR.Matchedz",
          "name": "Matchedz",
          "package": "dsp",
          "source": "src/DSP-Filter-IIR-Matchedz.html",
          "type": "module"
        },
        "index": {
          "description": "Matched-z transform References Proakis and Manolakis Rabiner and Gold",
          "hierarchy": "DSP Filter IIR Matchedz",
          "module": "DSP.Filter.IIR.Matchedz",
          "name": "Matchedz",
          "package": "dsp",
          "partial": "Matchedz",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Matchedz.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms the matched-z transform\n\u003c/p\u003e",
          "module": "DSP.Filter.IIR.Matchedz",
          "name": "matchedz",
          "package": "dsp",
          "signature": "Double-\u003e ([Double], [Double])-\u003e ([Double], [Double])",
          "type": "function"
        },
        "index": {
          "description": "Performs the matched-z transform",
          "hierarchy": "DSP Filter IIR Matchedz",
          "module": "DSP.Filter.IIR.Matchedz",
          "name": "matchedz",
          "normalized": "Double-\u003e([Double],[Double])-\u003e([Double],[Double])",
          "package": "dsp",
          "signature": "Double-\u003e([Double],[Double])-\u003e([Double],[Double])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Matchedz.html#v:matchedz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneral case of Prony's Method where K \u003e p+q\n\u003c/p\u003e\u003cp\u003eReferences: L&I, Sect 8.1; P&B, Sect 7.5; P&M, Sect 8.5.2\n\u003c/p\u003e\u003cp\u003eNotation follows L&I\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Filter.IIR.Prony",
          "name": "Prony",
          "package": "dsp",
          "source": "src/DSP-Filter-IIR-Prony.html",
          "type": "module"
        },
        "index": {
          "description": "General case of Prony Method where References Sect Sect Sect Notation follows",
          "hierarchy": "DSP Filter IIR Prony",
          "module": "DSP.Filter.IIR.Prony",
          "name": "Prony",
          "package": "dsp",
          "partial": "Prony",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Prony.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplementation of Prony's method\n\u003c/p\u003e",
          "module": "DSP.Filter.IIR.Prony",
          "name": "prony",
          "package": "dsp",
          "signature": "Int-\u003e Int-\u003e Array Int Double-\u003e (Array Int Double, Array Int Double)",
          "type": "function"
        },
        "index": {
          "description": "Implementation of Prony method",
          "hierarchy": "DSP Filter IIR Prony",
          "module": "DSP.Filter.IIR.Prony",
          "name": "prony",
          "normalized": "Int-\u003eInt-\u003eArray Int Double-\u003e(Array Int Double,Array Int Double)",
          "package": "dsp",
          "signature": "Int-\u003eInt-\u003eArray Int Double-\u003e(Array Int Double,Array Int Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Prony.html#v:prony"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDigital IIR filter transforms\n\u003c/p\u003e\u003cp\u003eReference: R&G, pg 260; O&S, pg 434; P&M, pg 699\n\u003c/p\u003e\u003cp\u003eNotation follows O&S\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Filter.IIR.Transform",
          "name": "Transform",
          "package": "dsp",
          "source": "src/DSP-Filter-IIR-Transform.html",
          "type": "module"
        },
        "index": {
          "description": "Digital IIR filter transforms Reference pg pg pg Notation follows",
          "hierarchy": "DSP Filter IIR Transform",
          "module": "DSP.Filter.IIR.Transform",
          "name": "Transform",
          "package": "dsp",
          "partial": "Transform",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Transform.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLowpass to Bandpass: z^-1 --\u003e\n\u003c/p\u003e",
          "module": "DSP.Filter.IIR.Transform",
          "name": "d_lp2bp",
          "package": "dsp",
          "signature": "Double-\u003e Double-\u003e Double-\u003e ([Double], [Double])-\u003e ([Double], [Double])",
          "type": "function"
        },
        "index": {
          "description": "Lowpass to Bandpass",
          "hierarchy": "DSP Filter IIR Transform",
          "module": "DSP.Filter.IIR.Transform",
          "name": "d_lp2bp",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003e([Double],[Double])-\u003e([Double],[Double])",
          "package": "dsp",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003e([Double],[Double])-\u003e([Double],[Double])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Transform.html#v:d_lp2bp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLowpass to Bandstop: z^-1 --\u003e\n\u003c/p\u003e",
          "module": "DSP.Filter.IIR.Transform",
          "name": "d_lp2bs",
          "package": "dsp",
          "signature": "Double-\u003e Double-\u003e Double-\u003e ([Double], [Double])-\u003e ([Double], [Double])",
          "type": "function"
        },
        "index": {
          "description": "Lowpass to Bandstop",
          "hierarchy": "DSP Filter IIR Transform",
          "module": "DSP.Filter.IIR.Transform",
          "name": "d_lp2bs",
          "normalized": "Double-\u003eDouble-\u003eDouble-\u003e([Double],[Double])-\u003e([Double],[Double])",
          "package": "dsp",
          "signature": "Double-\u003eDouble-\u003eDouble-\u003e([Double],[Double])-\u003e([Double],[Double])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Transform.html#v:d_lp2bs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLowpass to Highpass: \u003ccode\u003ez^-1 --\u003e -(z^-1 + a)/(1 + a*z^-1)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "DSP.Filter.IIR.Transform",
          "name": "d_lp2hp",
          "package": "dsp",
          "signature": "Double-\u003e Double-\u003e ([Double], [Double])-\u003e ([Double], [Double])",
          "type": "function"
        },
        "index": {
          "description": "Lowpass to Highpass",
          "hierarchy": "DSP Filter IIR Transform",
          "module": "DSP.Filter.IIR.Transform",
          "name": "d_lp2hp",
          "normalized": "Double-\u003eDouble-\u003e([Double],[Double])-\u003e([Double],[Double])",
          "package": "dsp",
          "signature": "Double-\u003eDouble-\u003e([Double],[Double])-\u003e([Double],[Double])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Transform.html#v:d_lp2hp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLowpass to lowpass: \u003ccode\u003ez^-1 --\u003e (z^-1 - a)/(1 - a*z^-1)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "DSP.Filter.IIR.Transform",
          "name": "d_lp2lp",
          "package": "dsp",
          "signature": "Double-\u003e Double-\u003e ([Double], [Double])-\u003e ([Double], [Double])",
          "type": "function"
        },
        "index": {
          "description": "Lowpass to lowpass",
          "hierarchy": "DSP Filter IIR Transform",
          "module": "DSP.Filter.IIR.Transform",
          "name": "d_lp2lp",
          "normalized": "Double-\u003eDouble-\u003e([Double],[Double])-\u003e([Double],[Double])",
          "package": "dsp",
          "signature": "Double-\u003eDouble-\u003e([Double],[Double])-\u003e([Double],[Double])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Filter-IIR-Transform.html#v:d_lp2lp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFlowgraph functions\n\u003c/p\u003e\u003cp\u003eDO NOT USE YET\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Flowgraph",
          "name": "Flowgraph",
          "package": "dsp",
          "source": "src/DSP-Flowgraph.html",
          "type": "module"
        },
        "index": {
          "description": "Flowgraph functions DO NOT USE YET",
          "hierarchy": "DSP Flowgraph",
          "module": "DSP.Flowgraph",
          "name": "Flowgraph",
          "package": "dsp",
          "partial": "Flowgraph",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Flowgraph.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdder node\n\u003c/p\u003e\u003cpre\u003ez[n] = x[n] + y[n]\u003c/pre\u003e",
          "module": "DSP.Flowgraph",
          "name": "adder",
          "package": "dsp",
          "signature": "[a]-\u003e [a]-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Adder node",
          "hierarchy": "DSP Flowgraph",
          "module": "DSP.Flowgraph",
          "name": "adder",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Flowgraph.html#v:adder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBias node\n\u003c/p\u003e\u003cpre\u003ey[n] = x[n] + a\u003c/pre\u003e",
          "module": "DSP.Flowgraph",
          "name": "bias",
          "package": "dsp",
          "signature": "a-\u003e [a]-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Bias node",
          "hierarchy": "DSP Flowgraph",
          "module": "DSP.Flowgraph",
          "name": "bias",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Flowgraph.html#v:bias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCascade of functions, eg\n\u003c/p\u003e\u003cpre\u003ecascade [ f1, f2, f3 ] x == (f3 . f2 . f1) x\u003c/pre\u003e",
          "module": "DSP.Flowgraph",
          "name": "cascade",
          "package": "dsp",
          "signature": "[[a] -\u003e [a]]-\u003e [a]-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Cascade of functions eg cascade f1 f2 f3 f3 f2 f1",
          "hierarchy": "DSP Flowgraph",
          "module": "DSP.Flowgraph",
          "name": "cascade",
          "normalized": "[[a]-\u003e[a]]-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "[[a]-\u003e[a]]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Flowgraph.html#v:cascade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGain node\n\u003c/p\u003e\u003cpre\u003ey[n] = a * x[n]\u003c/pre\u003e",
          "module": "DSP.Flowgraph",
          "name": "gain",
          "package": "dsp",
          "signature": "a-\u003e [a]-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Gain node",
          "hierarchy": "DSP Flowgraph",
          "module": "DSP.Flowgraph",
          "name": "gain",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Flowgraph.html#v:gain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCIC filters\n\u003c/p\u003e\u003cp\u003eR = rate change\n\u003c/p\u003e\u003cp\u003eM = differential delay in combs\n\u003c/p\u003e\u003cp\u003eN = number of stages\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Multirate.CIC",
          "name": "CIC",
          "package": "dsp",
          "source": "src/DSP-Multirate-CIC.html",
          "type": "module"
        },
        "index": {
          "description": "CIC filters rate change differential delay in combs number of stages",
          "hierarchy": "DSP Multirate CIC",
          "module": "DSP.Multirate.CIC",
          "name": "CIC",
          "package": "dsp",
          "partial": "CIC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Multirate-CIC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCIC interpolator\n\u003c/p\u003e",
          "module": "DSP.Multirate.CIC",
          "name": "cic_decimate",
          "package": "dsp",
          "signature": "Int-\u003e Int-\u003e Int-\u003e [a]-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "CIC interpolator",
          "hierarchy": "DSP Multirate CIC",
          "module": "DSP.Multirate.CIC",
          "name": "cic_decimate",
          "normalized": "Int-\u003eInt-\u003eInt-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "Int-\u003eInt-\u003eInt-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Multirate-CIC.html#v:cic_decimate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCIC interpolator\n\u003c/p\u003e",
          "module": "DSP.Multirate.CIC",
          "name": "cic_interpolate",
          "package": "dsp",
          "signature": "Int-\u003e Int-\u003e Int-\u003e [a]-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "CIC interpolator",
          "hierarchy": "DSP Multirate CIC",
          "module": "DSP.Multirate.CIC",
          "name": "cic_interpolate",
          "normalized": "Int-\u003eInt-\u003eInt-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "Int-\u003eInt-\u003eInt-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Multirate-CIC.html#v:cic_interpolate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHalfband interpolators and decimators\n\u003c/p\u003e\u003cp\u003eReference: C&R\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Multirate.Halfband",
          "name": "Halfband",
          "package": "dsp",
          "source": "src/DSP-Multirate-Halfband.html",
          "type": "module"
        },
        "index": {
          "description": "Halfband interpolators and decimators Reference",
          "hierarchy": "DSP Multirate Halfband",
          "module": "DSP.Multirate.Halfband",
          "name": "Halfband",
          "package": "dsp",
          "partial": "Halfband",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Multirate-Halfband.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHalfband decimator\n\u003c/p\u003e",
          "module": "DSP.Multirate.Halfband",
          "name": "hb_decim",
          "package": "dsp",
          "signature": "Array Int a-\u003e [a]-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Halfband decimator",
          "hierarchy": "DSP Multirate Halfband",
          "module": "DSP.Multirate.Halfband",
          "name": "hb_decim",
          "normalized": "Array Int a-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "Array Int a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Multirate-Halfband.html#v:hb_decim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHalfband interpolator\n\u003c/p\u003e",
          "module": "DSP.Multirate.Halfband",
          "name": "hb_interp",
          "package": "dsp",
          "signature": "Array Int a-\u003e [a]-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Halfband interpolator",
          "hierarchy": "DSP Multirate Halfband",
          "module": "DSP.Multirate.Halfband",
          "name": "hb_interp",
          "normalized": "Array Int a-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "Array Int a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Multirate-Halfband.html#v:hb_interp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePolyphase interpolators and decimators\n\u003c/p\u003e\u003cp\u003eReference: C&R\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Multirate.Polyphase",
          "name": "Polyphase",
          "package": "dsp",
          "source": "src/DSP-Multirate-Polyphase.html",
          "type": "module"
        },
        "index": {
          "description": "Polyphase interpolators and decimators Reference",
          "hierarchy": "DSP Multirate Polyphase",
          "module": "DSP.Multirate.Polyphase",
          "name": "Polyphase",
          "package": "dsp",
          "partial": "Polyphase",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Multirate-Polyphase.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolyphase interpolator\n\u003c/p\u003e",
          "module": "DSP.Multirate.Polyphase",
          "name": "poly_interp",
          "package": "dsp",
          "signature": "Int-\u003e Array Int a-\u003e [a]-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Polyphase interpolator",
          "hierarchy": "DSP Multirate Polyphase",
          "module": "DSP.Multirate.Polyphase",
          "name": "poly_interp",
          "normalized": "Int-\u003eArray Int a-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "Int-\u003eArray Int a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Multirate-Polyphase.html#v:poly_interp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic signals\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Source.Basic",
          "name": "Basic",
          "package": "dsp",
          "source": "src/DSP-Source-Basic.html",
          "type": "module"
        },
        "index": {
          "description": "Basic signals",
          "hierarchy": "DSP Source Basic",
          "module": "DSP.Source.Basic",
          "name": "Basic",
          "package": "dsp",
          "partial": "Basic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Source-Basic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esingle impulse\n\u003c/p\u003e",
          "module": "DSP.Source.Basic",
          "name": "impulse",
          "package": "dsp",
          "signature": "[a]",
          "source": "src/DSP-Source-Basic.html#impulse",
          "type": "function"
        },
        "index": {
          "description": "single impulse",
          "hierarchy": "DSP Source Basic",
          "module": "DSP.Source.Basic",
          "name": "impulse",
          "normalized": "[a]",
          "package": "dsp",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Source-Basic.html#v:impulse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eramp\n\u003c/p\u003e",
          "module": "DSP.Source.Basic",
          "name": "ramp",
          "package": "dsp",
          "signature": "[a]",
          "source": "src/DSP-Source-Basic.html#ramp",
          "type": "function"
        },
        "index": {
          "description": "ramp",
          "hierarchy": "DSP Source Basic",
          "module": "DSP.Source.Basic",
          "name": "ramp",
          "normalized": "[a]",
          "package": "dsp",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Source-Basic.html#v:ramp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunit step\n\u003c/p\u003e",
          "module": "DSP.Source.Basic",
          "name": "step",
          "package": "dsp",
          "signature": "[a]",
          "source": "src/DSP-Source-Basic.html#step",
          "type": "function"
        },
        "index": {
          "description": "unit step",
          "hierarchy": "DSP Source Basic",
          "module": "DSP.Source.Basic",
          "name": "step",
          "normalized": "[a]",
          "package": "dsp",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Source-Basic.html#v:step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eall zeros\n\u003c/p\u003e",
          "module": "DSP.Source.Basic",
          "name": "zeros",
          "package": "dsp",
          "signature": "[a]",
          "source": "src/DSP-Source-Basic.html#zeros",
          "type": "function"
        },
        "index": {
          "description": "all zeros",
          "hierarchy": "DSP Source Basic",
          "module": "DSP.Source.Basic",
          "name": "zeros",
          "normalized": "[a]",
          "package": "dsp",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Source-Basic.html#v:zeros"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNCO and NCOM functions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Source.Oscillator",
          "name": "Oscillator",
          "package": "dsp",
          "source": "src/DSP-Source-Oscillator.html",
          "type": "module"
        },
        "index": {
          "description": "NCO and NCOM functions",
          "hierarchy": "DSP Source Oscillator",
          "module": "DSP.Source.Oscillator",
          "name": "Oscillator",
          "package": "dsp",
          "partial": "Oscillator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Source-Oscillator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DSP.Source.Oscillator",
          "name": "agc",
          "package": "dsp",
          "signature": "Complex a -\u003e Complex a",
          "source": "src/DSP-Source-Oscillator.html#agc",
          "type": "function"
        },
        "index": {
          "hierarchy": "DSP Source Oscillator",
          "module": "DSP.Source.Oscillator",
          "name": "agc",
          "normalized": "Complex a-\u003eComplex a",
          "package": "dsp",
          "signature": "Complex a-\u003eComplex a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Source-Oscillator.html#v:agc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecomplex_ncom\u003c/a\u003e\u003c/code\u003e mixes the complex input x with a quardatue nco with\n normalized frequency wn radians/sample using complex multiplies\n (perform a complex spectral shift)\n\u003c/p\u003e",
          "module": "DSP.Source.Oscillator",
          "name": "complex_ncom",
          "package": "dsp",
          "signature": "a-\u003e a-\u003e [Complex a]-\u003e [Complex a]",
          "type": "function"
        },
        "index": {
          "description": "complex ncom mixes the complex input with quardatue nco with normalized frequency wn radians sample using complex multiplies perform complex spectral shift",
          "hierarchy": "DSP Source Oscillator",
          "module": "DSP.Source.Oscillator",
          "name": "complex_ncom",
          "normalized": "a-\u003ea-\u003e[Complex a]-\u003e[Complex a]",
          "package": "dsp",
          "signature": "a-\u003ea-\u003e[Complex a]-\u003e[Complex a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Source-Oscillator.html#v:complex_ncom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003enco\u003c/a\u003e\u003c/code\u003e creates a sine wave with normalized frequency wn (numerically\n controlled oscillator, or NCO) using the recurrence relation y[n] =\n 2cos(wn)*y[n-1] - y[n-2].  Eventually, cumulative errors will creep\n into the data.  This is unavoidable since performing AGC on this type\n of real data is hard.  The good news is that the error is small with\n floating point data.\n\u003c/p\u003e",
          "module": "DSP.Source.Oscillator",
          "name": "nco",
          "package": "dsp",
          "signature": "a-\u003e a-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "nco creates sine wave with normalized frequency wn numerically controlled oscillator or NCO using the recurrence relation cos wn n-1 n-2 Eventually cumulative errors will creep into the data This is unavoidable since performing AGC on this type of real data is hard The good news is that the error is small with floating point data",
          "hierarchy": "DSP Source Oscillator",
          "module": "DSP.Source.Oscillator",
          "name": "nco",
          "normalized": "a-\u003ea-\u003e[a]",
          "package": "dsp",
          "signature": "a-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Source-Oscillator.html#v:nco"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003encom\u003c/a\u003e\u003c/code\u003e mixes (multiplies) x by a real sine wave with normalized\n frequency wn.  This is usually called an NCOM: Numerically Controlled\n Oscillator and Modulator.\n\u003c/p\u003e",
          "module": "DSP.Source.Oscillator",
          "name": "ncom",
          "package": "dsp",
          "signature": "a-\u003e a-\u003e [a]-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "ncom mixes multiplies by real sine wave with normalized frequency wn This is usually called an NCOM Numerically Controlled Oscillator and Modulator",
          "hierarchy": "DSP Source Oscillator",
          "module": "DSP.Source.Oscillator",
          "name": "ncom",
          "normalized": "a-\u003ea-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "a-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Source-Oscillator.html#v:ncom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003equadrature_nco\u003c/a\u003e\u003c/code\u003e returns an infinite list representing a complex phasor\n with a phase step of wn radians, ie a quadrature nco with normalized\n frequency wn radians/sample.  Since Haskell uses lazy evaluation,\n rotate will only be computed once, so this NCO uses only one sin and\n one cos for the entire list, at the expense of 4 mults, 1 add, and 1\n subtract per point.\n\u003c/p\u003e",
          "module": "DSP.Source.Oscillator",
          "name": "quadrature_nco",
          "package": "dsp",
          "signature": "a-\u003e a-\u003e [Complex a]",
          "type": "function"
        },
        "index": {
          "description": "quadrature nco returns an infinite list representing complex phasor with phase step of wn radians ie quadrature nco with normalized frequency wn radians sample Since Haskell uses lazy evaluation rotate will only be computed once so this NCO uses only one sin and one cos for the entire list at the expense of mults add and subtract per point",
          "hierarchy": "DSP Source Oscillator",
          "module": "DSP.Source.Oscillator",
          "name": "quadrature_nco",
          "normalized": "a-\u003ea-\u003e[Complex a]",
          "package": "dsp",
          "signature": "a-\u003ea-\u003e[Complex a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Source-Oscillator.html#v:quadrature_nco"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003equadrature_ncom\u003c/a\u003e\u003c/code\u003e mixes the complex input x with a quadrature nco with\n normalized frequency wn radians/sample in quadrature (I/Q modulation)\n\u003c/p\u003e",
          "module": "DSP.Source.Oscillator",
          "name": "quadrature_ncom",
          "package": "dsp",
          "signature": "a-\u003e a-\u003e [Complex a]-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "quadrature ncom mixes the complex input with quadrature nco with normalized frequency wn radians sample in quadrature modulation",
          "hierarchy": "DSP Source Oscillator",
          "module": "DSP.Source.Oscillator",
          "name": "quadrature_ncom",
          "normalized": "a-\u003ea-\u003e[Complex a]-\u003e[a]",
          "package": "dsp",
          "signature": "a-\u003ea-\u003e[Complex a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Source-Oscillator.html#v:quadrature_ncom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple phase unwrapping algorithm\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Unwrap",
          "name": "Unwrap",
          "package": "dsp",
          "source": "src/DSP-Unwrap.html",
          "type": "module"
        },
        "index": {
          "description": "Simple phase unwrapping algorithm",
          "hierarchy": "DSP Unwrap",
          "module": "DSP.Unwrap",
          "name": "Unwrap",
          "package": "dsp",
          "partial": "Unwrap",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Unwrap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the simple phase unwrapping algorithm from Oppenheim and\n Schafer.\n\u003c/p\u003e",
          "module": "DSP.Unwrap",
          "name": "unwrap",
          "package": "dsp",
          "signature": "b-\u003e Array a b-\u003e Array a b",
          "type": "function"
        },
        "index": {
          "description": "This is the simple phase unwrapping algorithm from Oppenheim and Schafer",
          "hierarchy": "DSP Unwrap",
          "module": "DSP.Unwrap",
          "name": "unwrap",
          "normalized": "a-\u003eArray b a-\u003eArray b a",
          "package": "dsp",
          "signature": "b-\u003eArray a b-\u003eArray a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Unwrap.html#v:unwrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommonly used window functions.  Except for the Parzen window, the\n results of all of these \u003cem\u003elook\u003c/em\u003e right, but I have to check them against\n either Matlab or my C code.\n\u003c/p\u003e\u003cp\u003eMore windowing functions exist, but I have to dig through my papers to\n find the equations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DSP.Window",
          "name": "Window",
          "package": "dsp",
          "source": "src/DSP-Window.html",
          "type": "module"
        },
        "index": {
          "description": "Commonly used window functions Except for the Parzen window the results of all of these look right but have to check them against either Matlab or my code More windowing functions exist but have to dig through my papers to find the equations",
          "hierarchy": "DSP Window",
          "module": "DSP.Window",
          "name": "Window",
          "package": "dsp",
          "partial": "Window",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Window.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBartlett  window\n\u003c/p\u003e",
          "module": "DSP.Window",
          "name": "bartlett",
          "package": "dsp",
          "signature": "Int-\u003e Array Int Double",
          "type": "function"
        },
        "index": {
          "description": "Bartlett window",
          "hierarchy": "DSP Window",
          "module": "DSP.Window",
          "name": "bartlett",
          "normalized": "Int-\u003eArray Int Double",
          "package": "dsp",
          "signature": "Int-\u003eArray Int Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Window.html#v:bartlett"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlackman window\n\u003c/p\u003e",
          "module": "DSP.Window",
          "name": "blackman",
          "package": "dsp",
          "signature": "Int-\u003e Array Int Double",
          "type": "function"
        },
        "index": {
          "description": "Blackman window",
          "hierarchy": "DSP Window",
          "module": "DSP.Window",
          "name": "blackman",
          "normalized": "Int-\u003eArray Int Double",
          "package": "dsp",
          "signature": "Int-\u003eArray Int Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Window.html#v:blackman"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized Hamming window\n\u003c/p\u003e",
          "module": "DSP.Window",
          "name": "gen_hamming",
          "package": "dsp",
          "signature": "Double-\u003e Int-\u003e Array Int Double",
          "type": "function"
        },
        "index": {
          "description": "Generalized Hamming window",
          "hierarchy": "DSP Window",
          "module": "DSP.Window",
          "name": "gen_hamming",
          "normalized": "Double-\u003eInt-\u003eArray Int Double",
          "package": "dsp",
          "signature": "Double-\u003eInt-\u003eArray Int Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Window.html#v:gen_hamming"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHamming window\n\u003c/p\u003e",
          "module": "DSP.Window",
          "name": "hamming",
          "package": "dsp",
          "signature": "Int-\u003e Array Int Double",
          "type": "function"
        },
        "index": {
          "description": "Hamming window",
          "hierarchy": "DSP Window",
          "module": "DSP.Window",
          "name": "hamming",
          "normalized": "Int-\u003eArray Int Double",
          "package": "dsp",
          "signature": "Int-\u003eArray Int Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Window.html#v:hamming"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHanning window\n\u003c/p\u003e",
          "module": "DSP.Window",
          "name": "hanning",
          "package": "dsp",
          "signature": "Int-\u003e Array Int Double",
          "type": "function"
        },
        "index": {
          "description": "Hanning window",
          "hierarchy": "DSP Window",
          "module": "DSP.Window",
          "name": "hanning",
          "normalized": "Int-\u003eArray Int Double",
          "package": "dsp",
          "signature": "Int-\u003eArray Int Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Window.html#v:hanning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erectangular window\n\u003c/p\u003e",
          "module": "DSP.Window",
          "name": "kaiser",
          "package": "dsp",
          "signature": "Double-\u003e Int-\u003e Array Int Double",
          "type": "function"
        },
        "index": {
          "description": "rectangular window",
          "hierarchy": "DSP Window",
          "module": "DSP.Window",
          "name": "kaiser",
          "normalized": "Double-\u003eInt-\u003eArray Int Double",
          "package": "dsp",
          "signature": "Double-\u003eInt-\u003eArray Int Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Window.html#v:kaiser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erectangular window\n\u003c/p\u003e",
          "module": "DSP.Window",
          "name": "parzen",
          "package": "dsp",
          "signature": "Int-\u003e Array Int Double",
          "type": "function"
        },
        "index": {
          "description": "rectangular window",
          "hierarchy": "DSP Window",
          "module": "DSP.Window",
          "name": "parzen",
          "normalized": "Int-\u003eArray Int Double",
          "package": "dsp",
          "signature": "Int-\u003eArray Int Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Window.html#v:parzen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erectangular window\n\u003c/p\u003e",
          "module": "DSP.Window",
          "name": "rectangular",
          "package": "dsp",
          "signature": "Int-\u003e Array Int Double",
          "type": "function"
        },
        "index": {
          "description": "rectangular window",
          "hierarchy": "DSP Window",
          "module": "DSP.Window",
          "name": "rectangular",
          "normalized": "Int-\u003eArray Int Double",
          "package": "dsp",
          "signature": "Int-\u003eArray Int Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Window.html#v:rectangular"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplys a window, \u003ccode\u003ew\u003c/code\u003e, to a sequence \u003ccode\u003ex\u003c/code\u003e\n\u003c/p\u003e",
          "module": "DSP.Window",
          "name": "window",
          "package": "dsp",
          "signature": "Array Int Double-\u003e Array Int Double-\u003e Array Int Double",
          "type": "function"
        },
        "index": {
          "description": "Applys window to sequence",
          "hierarchy": "DSP Window",
          "module": "DSP.Window",
          "name": "window",
          "normalized": "Array Int Double-\u003eArray Int Double-\u003eArray Int Double",
          "package": "dsp",
          "signature": "Array Int Double-\u003eArray Int Double-\u003eArray Int Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/DSP-Window.html#v:window"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a routine that solves the system Ax=b, where A\n is positive definite, using Cholesky decomposition.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Matrix.Cholesky",
          "name": "Cholesky",
          "package": "dsp",
          "source": "src/Matrix-Cholesky.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains routine that solves the system Ax where is positive definite using Cholesky decomposition",
          "hierarchy": "Matrix Cholesky",
          "module": "Matrix.Cholesky",
          "name": "Cholesky",
          "package": "dsp",
          "partial": "Cholesky",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Matrix-Cholesky.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Matrix.Cholesky",
          "name": "cholesky",
          "package": "dsp",
          "signature": "Array (a, a) (Complex b)-\u003e Array a (Complex b)-\u003e Array a (Complex b)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Matrix Cholesky",
          "module": "Matrix.Cholesky",
          "name": "cholesky",
          "normalized": "Array(a,a)(Complex b)-\u003eArray a(Complex b)-\u003eArray a(Complex b)",
          "package": "dsp",
          "signature": "Array(a,a)(Complex b)-\u003eArray a(Complex b)-\u003eArray a(Complex b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Matrix-Cholesky.html#v:cholesky"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule implementing LU decomposition and related functions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Matrix.LU",
          "name": "LU",
          "package": "dsp",
          "source": "src/Matrix-LU.html",
          "type": "module"
        },
        "index": {
          "description": "Module implementing LU decomposition and related functions",
          "hierarchy": "Matrix LU",
          "module": "Matrix.LU",
          "name": "LU",
          "package": "dsp",
          "partial": "LU",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Matrix-LU.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edeterminant using original matrix\n\u003c/p\u003e",
          "module": "Matrix.LU",
          "name": "det",
          "package": "dsp",
          "signature": "Array (Int, Int) Double-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "determinant using original matrix",
          "hierarchy": "Matrix LU",
          "module": "Matrix.LU",
          "name": "det",
          "normalized": "Array(Int,Int)Double-\u003eDouble",
          "package": "dsp",
          "signature": "Array(Int,Int)Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Matrix-LU.html#v:det"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImprove a solution to Ax=b via LU decomposition\n\u003c/p\u003e",
          "module": "Matrix.LU",
          "name": "improve",
          "package": "dsp",
          "signature": "Array (Int, Int) Double-\u003e Array (Int, Int) Double-\u003e Array Int Double-\u003e Array Int Double-\u003e Array Int Double",
          "type": "function"
        },
        "index": {
          "description": "Improve solution to Ax via LU decomposition",
          "hierarchy": "Matrix LU",
          "module": "Matrix.LU",
          "name": "improve",
          "normalized": "Array(Int,Int)Double-\u003eArray(Int,Int)Double-\u003eArray Int Double-\u003eArray Int Double-\u003eArray Int Double",
          "package": "dsp",
          "signature": "Array(Int,Int)Double-\u003eArray(Int,Int)Double-\u003eArray Int Double-\u003eArray Int Double-\u003eArray Int Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Matrix-LU.html#v:improve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatrix inversion via LU decomposition\n\u003c/p\u003e",
          "module": "Matrix.LU",
          "name": "inverse",
          "package": "dsp",
          "signature": "Array (Int, Int) Double-\u003e Array (Int, Int) Double",
          "type": "function"
        },
        "index": {
          "description": "Matrix inversion via LU decomposition",
          "hierarchy": "Matrix LU",
          "module": "Matrix.LU",
          "name": "inverse",
          "normalized": "Array(Int,Int)Double-\u003eArray(Int,Int)Double",
          "package": "dsp",
          "signature": "Array(Int,Int)Double-\u003eArray(Int,Int)Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Matrix-LU.html#v:inverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLU decomposition via Crout's Algorithm\n\u003c/p\u003e",
          "module": "Matrix.LU",
          "name": "lu",
          "package": "dsp",
          "signature": "Array (Int, Int) Double-\u003e Array (Int, Int) Double",
          "type": "function"
        },
        "index": {
          "description": "LU decomposition via Crout Algorithm",
          "hierarchy": "Matrix LU",
          "module": "Matrix.LU",
          "name": "lu",
          "normalized": "Array(Int,Int)Double-\u003eArray(Int,Int)Double",
          "package": "dsp",
          "signature": "Array(Int,Int)Double-\u003eArray(Int,Int)Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Matrix-LU.html#v:lu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeterminant of a matrix via LU decomposition\n\u003c/p\u003e",
          "module": "Matrix.LU",
          "name": "lu_det",
          "package": "dsp",
          "signature": "Array (Int, Int) Double-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "Determinant of matrix via LU decomposition",
          "hierarchy": "Matrix LU",
          "module": "Matrix.LU",
          "name": "lu_det",
          "normalized": "Array(Int,Int)Double-\u003eDouble",
          "package": "dsp",
          "signature": "Array(Int,Int)Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Matrix-LU.html#v:lu_det"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolution to Ax=b via LU decomposition\n\u003c/p\u003e",
          "module": "Matrix.LU",
          "name": "lu_solve",
          "package": "dsp",
          "signature": "Array (Int, Int) Double-\u003e Array Int Double-\u003e Array Int Double",
          "type": "function"
        },
        "index": {
          "description": "Solution to Ax via LU decomposition",
          "hierarchy": "Matrix LU",
          "module": "Matrix.LU",
          "name": "lu_solve",
          "normalized": "Array(Int,Int)Double-\u003eArray Int Double-\u003eArray Int Double",
          "package": "dsp",
          "signature": "Array(Int,Int)Double-\u003eArray Int Double-\u003eArray Int Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Matrix-LU.html#v:lu_solve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLU solver using original matrix\n\u003c/p\u003e",
          "module": "Matrix.LU",
          "name": "solve",
          "package": "dsp",
          "signature": "Array (Int, Int) Double-\u003e Array Int Double-\u003e Array Int Double",
          "type": "function"
        },
        "index": {
          "description": "LU solver using original matrix",
          "hierarchy": "Matrix LU",
          "module": "Matrix.LU",
          "name": "solve",
          "normalized": "Array(Int,Int)Double-\u003eArray Int Double-\u003eArray Int Double",
          "package": "dsp",
          "signature": "Array(Int,Int)Double-\u003eArray Int Double-\u003eArray Int Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Matrix-LU.html#v:solve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains an implementation of Levinson-Durbin recursion.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Matrix.Levinson",
          "name": "Levinson",
          "package": "dsp",
          "source": "src/Matrix-Levinson.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains an implementation of Levinson-Durbin recursion",
          "hierarchy": "Matrix Levinson",
          "module": "Matrix.Levinson",
          "name": "Levinson",
          "package": "dsp",
          "partial": "Levinson",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Matrix-Levinson.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elevinson takes an array, r, of autocorrelation values, and a\n model order, p, and returns an array, a, of the model estimate and\n rho, the noise power.\n\u003c/p\u003e",
          "module": "Matrix.Levinson",
          "name": "levinson",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e a-\u003e (Array a (Complex b), b)",
          "type": "function"
        },
        "index": {
          "description": "levinson takes an array of autocorrelation values and model order and returns an array of the model estimate and rho the noise power",
          "hierarchy": "Matrix Levinson",
          "module": "Matrix.Levinson",
          "name": "levinson",
          "normalized": "Array a(Complex b)-\u003ea-\u003e(Array a(Complex b),b)",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003ea-\u003e(Array a(Complex b),b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Matrix-Levinson.html#v:levinson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic matrix routines\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Matrix.Matrix",
          "name": "Matrix",
          "package": "dsp",
          "source": "src/Matrix-Matrix.html",
          "type": "module"
        },
        "index": {
          "description": "Basic matrix routines",
          "hierarchy": "Matrix Matrix",
          "module": "Matrix.Matrix",
          "name": "Matrix",
          "package": "dsp",
          "partial": "Matrix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Matrix-Matrix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHermitian transpose (conjugate transpose) of a matrix\n\u003c/p\u003e",
          "module": "Matrix.Matrix",
          "name": "m_hermit",
          "package": "dsp",
          "signature": "Array (a, a) (Complex b)-\u003e Array (a, a) (Complex b)",
          "type": "function"
        },
        "index": {
          "description": "Hermitian transpose conjugate transpose of matrix",
          "hierarchy": "Matrix Matrix",
          "module": "Matrix.Matrix",
          "name": "m_hermit",
          "normalized": "Array(a,a)(Complex b)-\u003eArray(a,a)(Complex b)",
          "package": "dsp",
          "signature": "Array(a,a)(Complex b)-\u003eArray(a,a)(Complex b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Matrix-Matrix.html#v:m_hermit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranspose of a matrix\n\u003c/p\u003e",
          "module": "Matrix.Matrix",
          "name": "m_trans",
          "package": "dsp",
          "signature": "Array (a, a) b-\u003e Array (a, a) b",
          "type": "function"
        },
        "index": {
          "description": "Transpose of matrix",
          "hierarchy": "Matrix Matrix",
          "module": "Matrix.Matrix",
          "name": "m_trans",
          "normalized": "Array(a,a)b-\u003eArray(a,a)b",
          "package": "dsp",
          "signature": "Array(a,a)b-\u003eArray(a,a)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Matrix-Matrix.html#v:m_trans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatrix-matrix multiplication: A x B = C\n\u003c/p\u003e",
          "module": "Matrix.Matrix",
          "name": "mm_mult",
          "package": "dsp",
          "signature": "Array (a, a) b-\u003e Array (a, a) b-\u003e Array (a, a) b",
          "type": "function"
        },
        "index": {
          "description": "Matrix-matrix multiplication",
          "hierarchy": "Matrix Matrix",
          "module": "Matrix.Matrix",
          "name": "mm_mult",
          "normalized": "Array(a,a)b-\u003eArray(a,a)b-\u003eArray(a,a)b",
          "package": "dsp",
          "signature": "Array(a,a)b-\u003eArray(a,a)b-\u003eArray(a,a)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Matrix-Matrix.html#v:mm_mult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatrix-vector multiplication: A x b = c\n\u003c/p\u003e",
          "module": "Matrix.Matrix",
          "name": "mv_mult",
          "package": "dsp",
          "signature": "Array (a, a) b-\u003e Array a b-\u003e Array a b",
          "type": "function"
        },
        "index": {
          "description": "Matrix-vector multiplication",
          "hierarchy": "Matrix Matrix",
          "module": "Matrix.Matrix",
          "name": "mv_mult",
          "normalized": "Array(a,a)b-\u003eArray a b-\u003eArray a b",
          "package": "dsp",
          "signature": "Array(a,a)b-\u003eArray a b-\u003eArray a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Matrix-Matrix.html#v:mv_mult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTwo-step simplex algorithm\n\u003c/p\u003e\u003cp\u003eI only guarantee that this module wastes inodes\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Matrix.Simplex",
          "name": "Simplex",
          "package": "dsp",
          "source": "src/Matrix-Simplex.html",
          "type": "module"
        },
        "index": {
          "description": "Two-step simplex algorithm only guarantee that this module wastes inodes",
          "hierarchy": "Matrix Simplex",
          "module": "Matrix.Simplex",
          "name": "Simplex",
          "package": "dsp",
          "partial": "Simplex",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Matrix-Simplex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for results of the simplex algorithm\n\u003c/p\u003e",
          "module": "Matrix.Simplex",
          "name": "Simplex",
          "package": "dsp",
          "source": "src/Matrix-Simplex.html#Simplex",
          "type": "data"
        },
        "index": {
          "description": "Type for results of the simplex algorithm",
          "hierarchy": "Matrix Simplex",
          "module": "Matrix.Simplex",
          "name": "Simplex",
          "package": "dsp",
          "partial": "Simplex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Matrix-Simplex.html#t:Simplex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Matrix.Simplex",
          "name": "Infeasible",
          "package": "dsp",
          "signature": "Infeasible",
          "source": "src/Matrix-Simplex.html#Simplex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Matrix Simplex",
          "module": "Matrix.Simplex",
          "name": "Infeasible",
          "package": "dsp",
          "partial": "Infeasible",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Matrix-Simplex.html#v:Infeasible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Matrix.Simplex",
          "name": "Optimal",
          "package": "dsp",
          "signature": "Optimal a",
          "source": "src/Matrix-Simplex.html#Simplex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Matrix Simplex",
          "module": "Matrix.Simplex",
          "name": "Optimal",
          "package": "dsp",
          "partial": "Optimal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Matrix-Simplex.html#v:Optimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Matrix.Simplex",
          "name": "Unbounded",
          "package": "dsp",
          "signature": "Unbounded",
          "source": "src/Matrix-Simplex.html#Simplex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Matrix Simplex",
          "module": "Matrix.Simplex",
          "name": "Unbounded",
          "package": "dsp",
          "partial": "Unbounded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Matrix-Simplex.html#v:Unbounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe simplex algorithm for standard form:\n\u003c/p\u003e\u003cp\u003emin   c'x\n\u003c/p\u003e\u003cp\u003ewhere Ax = b, x \u003e= 0\n\u003c/p\u003e\u003cp\u003ea!(0,0) = -z\n\u003c/p\u003e\u003cp\u003ea!(0,j) = c'\n\u003c/p\u003e\u003cp\u003ea!(i,0) = b\n\u003c/p\u003e\u003cp\u003ea!(i,j) = A_ij\n\u003c/p\u003e",
          "module": "Matrix.Simplex",
          "name": "simplex",
          "package": "dsp",
          "signature": "Array (Int, Int) Double-\u003e Simplex (Array (Int, Int) Double)",
          "type": "function"
        },
        "index": {
          "description": "The simplex algorithm for standard form min where Ax ij",
          "hierarchy": "Matrix Simplex",
          "module": "Matrix.Simplex",
          "name": "simplex",
          "normalized": "Array(Int,Int)Double-\u003eSimplex(Array(Int,Int)Double)",
          "package": "dsp",
          "signature": "Array(Int,Int)Double-\u003eSimplex(Array(Int,Int)Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Matrix-Simplex.html#v:simplex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe two-phase simplex algorithm\n\u003c/p\u003e",
          "module": "Matrix.Simplex",
          "name": "twophase",
          "package": "dsp",
          "signature": "Array (Int, Int) Double-\u003e Simplex (Array (Int, Int) Double)",
          "type": "function"
        },
        "index": {
          "description": "The two-phase simplex algorithm",
          "hierarchy": "Matrix Simplex",
          "module": "Matrix.Simplex",
          "name": "twophase",
          "normalized": "Array(Int,Int)Double-\u003eSimplex(Array(Int,Int)Double)",
          "package": "dsp",
          "signature": "Array(Int,Int)Double-\u003eSimplex(Array(Int,Int)Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Matrix-Simplex.html#v:twophase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunction approximation using Chebyshev polynomials\n\u003c/p\u003e\u003cpre\u003e f(x) = ( sum (k=0..N-1) c_k * T_k(x) ) - 0.5 * c_0\u003c/pre\u003e\u003cp\u003eover the interval \u003ccode\u003e [a,b] \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eReference: NRiC\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Approximation.Chebyshev",
          "name": "Chebyshev",
          "package": "dsp",
          "source": "src/Numeric-Approximation-Chebyshev.html",
          "type": "module"
        },
        "index": {
          "description": "Function approximation using Chebyshev polynomials sum N-1 over the interval Reference NRiC",
          "hierarchy": "Numeric Approximation Chebyshev",
          "module": "Numeric.Approximation.Chebyshev",
          "name": "Chebyshev",
          "package": "dsp",
          "partial": "Chebyshev",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Approximation-Chebyshev.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the Chebyshev approximation to \u003ccode\u003ef(x)\u003c/code\u003e over \u003ccode\u003e[a,b]\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Numeric.Approximation.Chebyshev",
          "name": "cheby_approx",
          "package": "dsp",
          "signature": "(Double -\u003e Double)-\u003e Double-\u003e Double-\u003e Int-\u003e [Double]",
          "type": "function"
        },
        "index": {
          "description": "Calculates the Chebyshev approximation to over",
          "hierarchy": "Numeric Approximation Chebyshev",
          "module": "Numeric.Approximation.Chebyshev",
          "name": "cheby_approx",
          "normalized": "(Double-\u003eDouble)-\u003eDouble-\u003eDouble-\u003eInt-\u003e[Double]",
          "package": "dsp",
          "signature": "(Double-\u003eDouble)-\u003eDouble-\u003eDouble-\u003eInt-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Approximation-Chebyshev.html#v:cheby_approx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates the Chebyshev approximation to \u003ccode\u003ef(x)\u003c/code\u003e over \u003ccode\u003e[a,b]\u003c/code\u003e at \u003ccode\u003ex\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Numeric.Approximation.Chebyshev",
          "name": "cheby_eval",
          "package": "dsp",
          "signature": "[Double]-\u003e Double-\u003e Double-\u003e Double-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "Evaluates the Chebyshev approximation to over at",
          "hierarchy": "Numeric Approximation Chebyshev",
          "module": "Numeric.Approximation.Chebyshev",
          "name": "cheby_eval",
          "normalized": "[Double]-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "dsp",
          "signature": "[Double]-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Approximation-Chebyshev.html#v:cheby_eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUNTESTED\n\u003c/p\u003e\u003cp\u003eModule for transforming a list of uniform random variables into a\n list of binomial random variables.\n\u003c/p\u003e\u003cp\u003eReference: Ross\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Random.Distribution.Binomial",
          "name": "Binomial",
          "package": "dsp",
          "source": "src/Numeric-Random-Distribution-Binomial.html",
          "type": "module"
        },
        "index": {
          "description": "UNTESTED Module for transforming list of uniform random variables into list of binomial random variables Reference Ross",
          "hierarchy": "Numeric Random Distribution Binomial",
          "module": "Numeric.Random.Distribution.Binomial",
          "name": "Binomial",
          "package": "dsp",
          "partial": "Binomial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Distribution-Binomial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a list of binomial random variables from a list\n of uniforms\n\u003c/p\u003e",
          "module": "Numeric.Random.Distribution.Binomial",
          "name": "binomial",
          "package": "dsp",
          "signature": "Int-\u003e Double-\u003e [Double]-\u003e [Double]",
          "type": "function"
        },
        "index": {
          "description": "Generates list of binomial random variables from list of uniforms",
          "hierarchy": "Numeric Random Distribution Binomial",
          "module": "Numeric.Random.Distribution.Binomial",
          "name": "binomial",
          "normalized": "Int-\u003eDouble-\u003e[Double]-\u003e[Double]",
          "package": "dsp",
          "signature": "Int-\u003eDouble-\u003e[Double]-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Distribution-Binomial.html#v:binomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUNTESTED\n\u003c/p\u003e\u003cp\u003eModule for transforming a list of uniform random variables into a\n list of exponential random variables.\n\u003c/p\u003e\u003cpre\u003e f(x) = lambda * exp(-lambda*x)\u003c/pre\u003e\u003cpre\u003e F(x) = 1 - exp(-lambda*x)\u003c/pre\u003e\u003cpre\u003e lambda = 1 / mu\u003c/pre\u003e\u003cp\u003eReference: Ross\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Random.Distribution.Exponential",
          "name": "Exponential",
          "package": "dsp",
          "source": "src/Numeric-Random-Distribution-Exponential.html",
          "type": "module"
        },
        "index": {
          "description": "UNTESTED Module for transforming list of uniform random variables into list of exponential random variables lambda exp lambda exp lambda lambda mu Reference Ross",
          "hierarchy": "Numeric Random Distribution Exponential",
          "module": "Numeric.Random.Distribution.Exponential",
          "name": "Exponential",
          "package": "dsp",
          "partial": "Exponential",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Distribution-Exponential.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a list of exponential random variables from a list\n of uniforms via the inverse transformation method\n\u003c/p\u003e\u003cpre\u003e F(x) = 1 - exp(-lambda*x)\u003c/pre\u003e\u003cpre\u003e F^-1(x) = -log(1 - x) / lambda\u003c/pre\u003e",
          "module": "Numeric.Random.Distribution.Exponential",
          "name": "exponential_inv",
          "package": "dsp",
          "signature": "Double-\u003e [Double]-\u003e [Double]",
          "type": "function"
        },
        "index": {
          "description": "Generates list of exponential random variables from list of uniforms via the inverse transformation method exp lambda log lambda",
          "hierarchy": "Numeric Random Distribution Exponential",
          "module": "Numeric.Random.Distribution.Exponential",
          "name": "exponential_inv",
          "normalized": "Double-\u003e[Double]-\u003e[Double]",
          "package": "dsp",
          "signature": "Double-\u003e[Double]-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Distribution-Exponential.html#v:exponential_inv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUNTESTED\n\u003c/p\u003e\u003cp\u003eModule for transforming a list of uniform random variables into a\n list of gamma random variables.\n\u003c/p\u003e\u003cpre\u003e f(x) = lambda * exp(-lambda*x) * (lambda * x)^(t-1) / Gamma(t)\u003c/pre\u003e\u003cp\u003eReference: Ross\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Random.Distribution.Gamma",
          "name": "Gamma",
          "package": "dsp",
          "source": "src/Numeric-Random-Distribution-Gamma.html",
          "type": "module"
        },
        "index": {
          "description": "UNTESTED Module for transforming list of uniform random variables into list of gamma random variables lambda exp lambda lambda t-1 Gamma Reference Ross",
          "hierarchy": "Numeric Random Distribution Gamma",
          "module": "Numeric.Random.Distribution.Gamma",
          "name": "Gamma",
          "package": "dsp",
          "partial": "Gamma",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Distribution-Gamma.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a list of gamma random variables from a list\n of uniforms via the inverse transformation method\n\u003c/p\u003e",
          "module": "Numeric.Random.Distribution.Gamma",
          "name": "gamma",
          "package": "dsp",
          "signature": "Int-\u003e Double-\u003e [Double]-\u003e [Double]",
          "type": "function"
        },
        "index": {
          "description": "Generates list of gamma random variables from list of uniforms via the inverse transformation method",
          "hierarchy": "Numeric Random Distribution Gamma",
          "module": "Numeric.Random.Distribution.Gamma",
          "name": "gamma",
          "normalized": "Int-\u003eDouble-\u003e[Double]-\u003e[Double]",
          "package": "dsp",
          "signature": "Int-\u003eDouble-\u003e[Double]-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Distribution-Gamma.html#v:gamma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUNTESTED\n\u003c/p\u003e\u003cp\u003eModule for transforming a list of uniform random variables into a\n list of geometric random variables.\n\u003c/p\u003e\u003cpre\u003e P{X=n} = (1-p)^(n-1)*p\u003c/pre\u003e\u003cp\u003eReference: Ross\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Random.Distribution.Geometric",
          "name": "Geometric",
          "package": "dsp",
          "source": "src/Numeric-Random-Distribution-Geometric.html",
          "type": "module"
        },
        "index": {
          "description": "UNTESTED Module for transforming list of uniform random variables into list of geometric random variables n-1 Reference Ross",
          "hierarchy": "Numeric Random Distribution Geometric",
          "module": "Numeric.Random.Distribution.Geometric",
          "name": "Geometric",
          "package": "dsp",
          "partial": "Geometric",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Distribution-Geometric.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a list of geometric random variables from a list\n of uniforms\n\u003c/p\u003e",
          "module": "Numeric.Random.Distribution.Geometric",
          "name": "geometric",
          "package": "dsp",
          "signature": "Double-\u003e [Double]-\u003e [Double]",
          "type": "function"
        },
        "index": {
          "description": "Generates list of geometric random variables from list of uniforms",
          "hierarchy": "Numeric Random Distribution Geometric",
          "module": "Numeric.Random.Distribution.Geometric",
          "name": "geometric",
          "normalized": "Double-\u003e[Double]-\u003e[Double]",
          "package": "dsp",
          "signature": "Double-\u003e[Double]-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Distribution-Geometric.html#v:geometric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for transforming a list of uniform random variables into a\n list of normal random variables.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Random.Distribution.Normal",
          "name": "Normal",
          "package": "dsp",
          "source": "src/Numeric-Random-Distribution-Normal.html",
          "type": "module"
        },
        "index": {
          "description": "Module for transforming list of uniform random variables into list of normal random variables",
          "hierarchy": "Numeric Random Distribution Normal",
          "module": "Numeric.Random.Distribution.Normal",
          "name": "Normal",
          "package": "dsp",
          "partial": "Normal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Distribution-Normal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAcceptance-Rejection Method (Ross, pp 448--450)\n\u003c/p\u003e\u003cp\u003eIf mu=0 and sigma=1, then this will generate numbers in the range\n [-36.74,36.74] assuming that the uniform RNG is really giving full\n precision for doubles.\n\u003c/p\u003e",
          "module": "Numeric.Random.Distribution.Normal",
          "name": "normal_ar",
          "package": "dsp",
          "signature": "(Double, Double)-\u003e [Double]-\u003e [Double]",
          "type": "function"
        },
        "index": {
          "description": "Acceptance-Rejection Method Ross pp If mu and sigma then this will generate numbers in the range assuming that the uniform RNG is really giving full precision for doubles",
          "hierarchy": "Numeric Random Distribution Normal",
          "module": "Numeric.Random.Distribution.Normal",
          "name": "normal_ar",
          "normalized": "(Double,Double)-\u003e[Double]-\u003e[Double]",
          "package": "dsp",
          "signature": "(Double,Double)-\u003e[Double]-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Distribution-Normal.html#v:normal_ar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormal random variables via the Box-Mueller Polar Method (Ross, pp\n 450--452)\n\u003c/p\u003e\u003cp\u003eIf mu=0 and sigma=1, then this will generate numbers in the range\n [-8.57,8.57] assuing that the uniform RNG is really giving full\n precision for doubles.\n\u003c/p\u003e",
          "module": "Numeric.Random.Distribution.Normal",
          "name": "normal_bm",
          "package": "dsp",
          "signature": "(Double, Double)-\u003e [Double]-\u003e [Double]",
          "type": "function"
        },
        "index": {
          "description": "Normal random variables via the Box-Mueller Polar Method Ross pp If mu and sigma then this will generate numbers in the range assuing that the uniform RNG is really giving full precision for doubles",
          "hierarchy": "Numeric Random Distribution Normal",
          "module": "Numeric.Random.Distribution.Normal",
          "name": "normal_bm",
          "normalized": "(Double,Double)-\u003e[Double]-\u003e[Double]",
          "package": "dsp",
          "signature": "(Double,Double)-\u003e[Double]-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Distribution-Normal.html#v:normal_bm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormal random variables via the Central Limit Theorm (not explicity\n given, but see Ross)\n\u003c/p\u003e\u003cp\u003eIf mu=0 and sigma=1, then this will generate numbers in the range\n [-n\u003cem\u003e2,n\u003c/em\u003e2]\n\u003c/p\u003e",
          "module": "Numeric.Random.Distribution.Normal",
          "name": "normal_clt",
          "package": "dsp",
          "signature": "Int-\u003e (Double, Double)-\u003e [Double]-\u003e [Double]",
          "type": "function"
        },
        "index": {
          "description": "Normal random variables via the Central Limit Theorm not explicity given but see Ross If mu and sigma then this will generate numbers in the range",
          "hierarchy": "Numeric Random Distribution Normal",
          "module": "Numeric.Random.Distribution.Normal",
          "name": "normal_clt",
          "normalized": "Int-\u003e(Double,Double)-\u003e[Double]-\u003e[Double]",
          "package": "dsp",
          "signature": "Int-\u003e(Double,Double)-\u003e[Double]-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Distribution-Normal.html#v:normal_clt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRatio Method (Kinderman-Monahan) (Knuth, v2, 2ed, pp 125--127)\n\u003c/p\u003e\u003cp\u003eIf mu=0 and sigma=1, then this will generate numbers in the range\n [-1e15,1e15] (?) assuming that the uniform RNG is really giving full\n precision for doubles.\n\u003c/p\u003e",
          "module": "Numeric.Random.Distribution.Normal",
          "name": "normal_r",
          "package": "dsp",
          "signature": "(Double, Double)-\u003e [Double]-\u003e [Double]",
          "type": "function"
        },
        "index": {
          "description": "Ratio Method Kinderman-Monahan Knuth v2 ed pp If mu and sigma then this will generate numbers in the range e15 e15 assuming that the uniform RNG is really giving full precision for doubles",
          "hierarchy": "Numeric Random Distribution Normal",
          "module": "Numeric.Random.Distribution.Normal",
          "name": "normal_r",
          "normalized": "(Double,Double)-\u003e[Double]-\u003e[Double]",
          "package": "dsp",
          "signature": "(Double,Double)-\u003e[Double]-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Distribution-Normal.html#v:normal_r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUNTESTED\n\u003c/p\u003e\u003cp\u003eModule for transforming a list of uniform random variables\n into a list of Poisson random variables.\n\u003c/p\u003e\u003cp\u003eReference: Ross\n     Donald E. Knuth (1969). Seminumerical Algorithms, The Art of Computer Programming, Volume 2\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Random.Distribution.Poisson",
          "name": "Poisson",
          "package": "dsp",
          "source": "src/Numeric-Random-Distribution-Poisson.html",
          "type": "module"
        },
        "index": {
          "description": "UNTESTED Module for transforming list of uniform random variables into list of Poisson random variables Reference Ross Donald Knuth Seminumerical Algorithms The Art of Computer Programming Volume",
          "hierarchy": "Numeric Random Distribution Poisson",
          "module": "Numeric.Random.Distribution.Poisson",
          "name": "Poisson",
          "package": "dsp",
          "partial": "Poisson",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Distribution-Poisson.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a list of poisson random variables from a list of uniforms.\n\u003c/p\u003e",
          "module": "Numeric.Random.Distribution.Poisson",
          "name": "poisson",
          "package": "dsp",
          "signature": "Double-\u003e [Double]-\u003e [Int]",
          "type": "function"
        },
        "index": {
          "description": "Generates list of poisson random variables from list of uniforms",
          "hierarchy": "Numeric Random Distribution Poisson",
          "module": "Numeric.Random.Distribution.Poisson",
          "name": "poisson",
          "normalized": "Double-\u003e[Double]-\u003e[Int]",
          "package": "dsp",
          "signature": "Double-\u003e[Double]-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Distribution-Poisson.html#v:poisson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Random.Distribution.Poisson",
          "name": "test",
          "package": "dsp",
          "signature": "Int -\u003e Double -\u003e Double",
          "source": "src/Numeric-Random-Distribution-Poisson.html#test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Random Distribution Poisson",
          "module": "Numeric.Random.Distribution.Poisson",
          "name": "test",
          "normalized": "Int-\u003eDouble-\u003eDouble",
          "package": "dsp",
          "signature": "Int-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Distribution-Poisson.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Random.Distribution.Poisson",
          "name": "testHead",
          "package": "dsp",
          "signature": "Int -\u003e Double -\u003e Double",
          "source": "src/Numeric-Random-Distribution-Poisson.html#testHead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Random Distribution Poisson",
          "module": "Numeric.Random.Distribution.Poisson",
          "name": "testHead",
          "normalized": "Int-\u003eDouble-\u003eDouble",
          "package": "dsp",
          "partial": "Head",
          "signature": "Int-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Distribution-Poisson.html#v:testHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for turning a list of random integers (as \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e) in a list\n of Uniform RV's\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Random.Distribution.Uniform",
          "name": "Uniform",
          "package": "dsp",
          "source": "src/Numeric-Random-Distribution-Uniform.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for turning list of random integers as Word32 in list of Uniform RV",
          "hierarchy": "Numeric Random Distribution Uniform",
          "module": "Numeric.Random.Distribution.Uniform",
          "name": "Uniform",
          "package": "dsp",
          "partial": "Uniform",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Distribution-Uniform.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etransforms uniform [0,1] to [a,b]\n\u003c/p\u003e",
          "module": "Numeric.Random.Distribution.Uniform",
          "name": "uniform",
          "package": "dsp",
          "signature": "Double-\u003e Double-\u003e [Double]-\u003e [Double]",
          "type": "function"
        },
        "index": {
          "description": "transforms uniform to",
          "hierarchy": "Numeric Random Distribution Uniform",
          "module": "Numeric.Random.Distribution.Uniform",
          "name": "uniform",
          "normalized": "Double-\u003eDouble-\u003e[Double]-\u003e[Double]",
          "package": "dsp",
          "signature": "Double-\u003eDouble-\u003e[Double]-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Distribution-Uniform.html#v:uniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e32 bits in [0,1]\n\u003c/p\u003e",
          "module": "Numeric.Random.Distribution.Uniform",
          "name": "uniform32cc",
          "package": "dsp",
          "signature": "[Word32]-\u003e [Double]",
          "type": "function"
        },
        "index": {
          "description": "bits in",
          "hierarchy": "Numeric Random Distribution Uniform",
          "module": "Numeric.Random.Distribution.Uniform",
          "name": "uniform32cc",
          "normalized": "[Word]-\u003e[Double]",
          "package": "dsp",
          "signature": "[Word]-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Distribution-Uniform.html#v:uniform32cc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e32 bits in [0,1)\n\u003c/p\u003e",
          "module": "Numeric.Random.Distribution.Uniform",
          "name": "uniform32co",
          "package": "dsp",
          "signature": "[Word32]-\u003e [Double]",
          "type": "function"
        },
        "index": {
          "description": "bits in",
          "hierarchy": "Numeric Random Distribution Uniform",
          "module": "Numeric.Random.Distribution.Uniform",
          "name": "uniform32co",
          "normalized": "[Word]-\u003e[Double]",
          "package": "dsp",
          "signature": "[Word]-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Distribution-Uniform.html#v:uniform32co"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e32 bits in (0,1]\n\u003c/p\u003e",
          "module": "Numeric.Random.Distribution.Uniform",
          "name": "uniform32oc",
          "package": "dsp",
          "signature": "[Word32]-\u003e [Double]",
          "type": "function"
        },
        "index": {
          "description": "bits in",
          "hierarchy": "Numeric Random Distribution Uniform",
          "module": "Numeric.Random.Distribution.Uniform",
          "name": "uniform32oc",
          "normalized": "[Word]-\u003e[Double]",
          "package": "dsp",
          "signature": "[Word]-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Distribution-Uniform.html#v:uniform32oc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e32 bits in (0,1)\n\u003c/p\u003e",
          "module": "Numeric.Random.Distribution.Uniform",
          "name": "uniform32oo",
          "package": "dsp",
          "signature": "[Word32]-\u003e [Double]",
          "type": "function"
        },
        "index": {
          "description": "bits in",
          "hierarchy": "Numeric Random Distribution Uniform",
          "module": "Numeric.Random.Distribution.Uniform",
          "name": "uniform32oo",
          "normalized": "[Word]-\u003e[Double]",
          "package": "dsp",
          "signature": "[Word]-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Distribution-Uniform.html#v:uniform32oo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e53 bits in [0,1], ie 64-bit IEEE 754 in [0,1]\n\u003c/p\u003e",
          "module": "Numeric.Random.Distribution.Uniform",
          "name": "uniform53cc",
          "package": "dsp",
          "signature": "[Word32]-\u003e [Double]",
          "type": "function"
        },
        "index": {
          "description": "bits in ie bit IEEE in",
          "hierarchy": "Numeric Random Distribution Uniform",
          "module": "Numeric.Random.Distribution.Uniform",
          "name": "uniform53cc",
          "normalized": "[Word]-\u003e[Double]",
          "package": "dsp",
          "signature": "[Word]-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Distribution-Uniform.html#v:uniform53cc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e53 bits in [0,1), ie 64-bit IEEE 754 in [0,1)\n\u003c/p\u003e",
          "module": "Numeric.Random.Distribution.Uniform",
          "name": "uniform53co",
          "package": "dsp",
          "signature": "[Word32]-\u003e [Double]",
          "type": "function"
        },
        "index": {
          "description": "bits in ie bit IEEE in",
          "hierarchy": "Numeric Random Distribution Uniform",
          "module": "Numeric.Random.Distribution.Uniform",
          "name": "uniform53co",
          "normalized": "[Word]-\u003e[Double]",
          "package": "dsp",
          "signature": "[Word]-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Distribution-Uniform.html#v:uniform53co"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e53 bits in (0,1]\n\u003c/p\u003e",
          "module": "Numeric.Random.Distribution.Uniform",
          "name": "uniform53oc",
          "package": "dsp",
          "signature": "[Word32]-\u003e [Double]",
          "type": "function"
        },
        "index": {
          "description": "bits in",
          "hierarchy": "Numeric Random Distribution Uniform",
          "module": "Numeric.Random.Distribution.Uniform",
          "name": "uniform53oc",
          "normalized": "[Word]-\u003e[Double]",
          "package": "dsp",
          "signature": "[Word]-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Distribution-Uniform.html#v:uniform53oc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e53 bits in (0,1)\n\u003c/p\u003e",
          "module": "Numeric.Random.Distribution.Uniform",
          "name": "uniform53oo",
          "package": "dsp",
          "signature": "[Word32]-\u003e [Double]",
          "type": "function"
        },
        "index": {
          "description": "bits in",
          "hierarchy": "Numeric Random Distribution Uniform",
          "module": "Numeric.Random.Distribution.Uniform",
          "name": "uniform53oo",
          "normalized": "[Word]-\u003e[Double]",
          "package": "dsp",
          "signature": "[Word]-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Distribution-Uniform.html#v:uniform53oo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Haskell program for MT19937 pseudorandom number generator\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Random.Generator.MT19937",
          "name": "MT19937",
          "package": "dsp",
          "source": "src/Numeric-Random-Generator-MT19937.html",
          "type": "module"
        },
        "index": {
          "description": "Haskell program for MT19937 pseudorandom number generator",
          "hierarchy": "Numeric Random Generator MT19937",
          "module": "Numeric.Random.Generator.MT19937",
          "name": "MT19937",
          "package": "dsp",
          "partial": "MT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Generator-MT19937.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Random.Generator.MT19937",
          "name": "W",
          "package": "dsp",
          "source": "src/Numeric-Random-Generator-MT19937.html#W",
          "type": "type"
        },
        "index": {
          "hierarchy": "Numeric Random Generator MT19937",
          "module": "Numeric.Random.Generator.MT19937",
          "name": "W",
          "package": "dsp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Generator-MT19937.html#t:W"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Random.Generator.MT19937",
          "name": "genrand",
          "package": "dsp",
          "signature": "W -\u003e [W]",
          "source": "src/Numeric-Random-Generator-MT19937.html#genrand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Random Generator MT19937",
          "module": "Numeric.Random.Generator.MT19937",
          "name": "genrand",
          "normalized": "W-\u003e[W]",
          "package": "dsp",
          "signature": "W-\u003e[W]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Generator-MT19937.html#v:genrand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Random.Generator.MT19937",
          "name": "test",
          "package": "dsp",
          "signature": "IO ()",
          "source": "src/Numeric-Random-Generator-MT19937.html#test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Random Generator MT19937",
          "module": "Numeric.Random.Generator.MT19937",
          "name": "test",
          "normalized": "IO()",
          "package": "dsp",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Generator-MT19937.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunction for brown noise, which is integrated white noise\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Random.Spectrum.Brown",
          "name": "Brown",
          "package": "dsp",
          "source": "src/Numeric-Random-Spectrum-Brown.html",
          "type": "module"
        },
        "index": {
          "description": "Function for brown noise which is integrated white noise",
          "hierarchy": "Numeric Random Spectrum Brown",
          "module": "Numeric.Random.Spectrum.Brown",
          "name": "Brown",
          "package": "dsp",
          "partial": "Brown",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Spectrum-Brown.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Random.Spectrum.Brown",
          "name": "brown",
          "package": "dsp",
          "signature": "[Double]-\u003e [Double]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Random Spectrum Brown",
          "module": "Numeric.Random.Spectrum.Brown",
          "name": "brown",
          "normalized": "[Double]-\u003e[Double]",
          "package": "dsp",
          "signature": "[Double]-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Spectrum-Brown.html#v:brown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for pinking noise\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.firstpr.com.au/dsp/pink-noise/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Random.Spectrum.Pink",
          "name": "Pink",
          "package": "dsp",
          "source": "src/Numeric-Random-Spectrum-Pink.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for pinking noise http www.firstpr.com.au dsp pink-noise",
          "hierarchy": "Numeric Random Spectrum Pink",
          "module": "Numeric.Random.Spectrum.Pink",
          "name": "Pink",
          "package": "dsp",
          "partial": "Pink",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Spectrum-Pink.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKellet's filter\n\u003c/p\u003e",
          "module": "Numeric.Random.Spectrum.Pink",
          "name": "kellet",
          "package": "dsp",
          "signature": "[Double]-\u003e [Double]",
          "type": "function"
        },
        "index": {
          "description": "Kellet filter",
          "hierarchy": "Numeric Random Spectrum Pink",
          "module": "Numeric.Random.Spectrum.Pink",
          "name": "kellet",
          "normalized": "[Double]-\u003e[Double]",
          "package": "dsp",
          "signature": "[Double]-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Spectrum-Pink.html#v:kellet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVoss's algorithm\n\u003c/p\u003e\u003cp\u003eUNTESTED, but the algorithm looks like it is working based on my hand\n tests.\n\u003c/p\u003e",
          "module": "Numeric.Random.Spectrum.Pink",
          "name": "voss",
          "package": "dsp",
          "signature": "Int-\u003e [Double]-\u003e [Double]",
          "type": "function"
        },
        "index": {
          "description": "Voss algorithm UNTESTED but the algorithm looks like it is working based on my hand tests",
          "hierarchy": "Numeric Random Spectrum Pink",
          "module": "Numeric.Random.Spectrum.Pink",
          "name": "voss",
          "normalized": "Int-\u003e[Double]-\u003e[Double]",
          "package": "dsp",
          "signature": "Int-\u003e[Double]-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Spectrum-Pink.html#v:voss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunction for purple noise, which is differentiated white noise\n\u003c/p\u003e\u003cp\u003eThis currently just does a simple first-order difference.  This is\n equivalent to filtering the white noise with \u003ccode\u003e h[n] = [1,-1] \u003c/code\u003e\n A better solution would be to use a proper FIR differentiator.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Random.Spectrum.Purple",
          "name": "Purple",
          "package": "dsp",
          "source": "src/Numeric-Random-Spectrum-Purple.html",
          "type": "module"
        },
        "index": {
          "description": "Function for purple noise which is differentiated white noise This currently just does simple first-order difference This is equivalent to filtering the white noise with better solution would be to use proper FIR differentiator",
          "hierarchy": "Numeric Random Spectrum Purple",
          "module": "Numeric.Random.Spectrum.Purple",
          "name": "Purple",
          "package": "dsp",
          "partial": "Purple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Spectrum-Purple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Random.Spectrum.Purple",
          "name": "purple",
          "package": "dsp",
          "signature": "[Double]-\u003e [Double]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Random Spectrum Purple",
          "module": "Numeric.Random.Spectrum.Purple",
          "name": "purple",
          "normalized": "[Double]-\u003e[Double]",
          "package": "dsp",
          "signature": "[Double]-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Spectrum-Purple.html#v:purple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunction for white noise\n\u003c/p\u003e\u003cp\u003eThis is pretty useless, but it is here to be comprehensive\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Random.Spectrum.White",
          "name": "White",
          "package": "dsp",
          "source": "src/Numeric-Random-Spectrum-White.html",
          "type": "module"
        },
        "index": {
          "description": "Function for white noise This is pretty useless but it is here to be comprehensive",
          "hierarchy": "Numeric Random Spectrum White",
          "module": "Numeric.Random.Spectrum.White",
          "name": "White",
          "package": "dsp",
          "partial": "White",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Spectrum-White.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Random.Spectrum.White",
          "name": "white",
          "package": "dsp",
          "signature": "[Double]-\u003e [Double]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Random Spectrum White",
          "module": "Numeric.Random.Spectrum.White",
          "name": "white",
          "normalized": "[Double]-\u003e[Double]",
          "package": "dsp",
          "signature": "[Double]-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Random-Spectrum-White.html#v:white"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Special.Trigonometric",
          "name": "Trigonometric",
          "package": "dsp",
          "source": "src/Numeric-Special-Trigonometric.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Special Trigonometric",
          "module": "Numeric.Special.Trigonometric",
          "name": "Trigonometric",
          "package": "dsp",
          "partial": "Trigonometric",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Special-Trigonometric.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Special.Trigonometric",
          "name": "acot",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/Numeric-Special-Trigonometric.html#acot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Special Trigonometric",
          "module": "Numeric.Special.Trigonometric",
          "name": "acot",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Special-Trigonometric.html#v:acot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Special.Trigonometric",
          "name": "acoth",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/Numeric-Special-Trigonometric.html#acoth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Special Trigonometric",
          "module": "Numeric.Special.Trigonometric",
          "name": "acoth",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Special-Trigonometric.html#v:acoth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Special.Trigonometric",
          "name": "acsc",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/Numeric-Special-Trigonometric.html#acsc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Special Trigonometric",
          "module": "Numeric.Special.Trigonometric",
          "name": "acsc",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Special-Trigonometric.html#v:acsc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Special.Trigonometric",
          "name": "acsch",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/Numeric-Special-Trigonometric.html#acsch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Special Trigonometric",
          "module": "Numeric.Special.Trigonometric",
          "name": "acsch",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Special-Trigonometric.html#v:acsch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Special.Trigonometric",
          "name": "asec",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/Numeric-Special-Trigonometric.html#asec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Special Trigonometric",
          "module": "Numeric.Special.Trigonometric",
          "name": "asec",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Special-Trigonometric.html#v:asec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Special.Trigonometric",
          "name": "asech",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/Numeric-Special-Trigonometric.html#asech",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Special Trigonometric",
          "module": "Numeric.Special.Trigonometric",
          "name": "asech",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Special-Trigonometric.html#v:asech"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Special.Trigonometric",
          "name": "cot",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/Numeric-Special-Trigonometric.html#cot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Special Trigonometric",
          "module": "Numeric.Special.Trigonometric",
          "name": "cot",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Special-Trigonometric.html#v:cot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Special.Trigonometric",
          "name": "coth",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/Numeric-Special-Trigonometric.html#coth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Special Trigonometric",
          "module": "Numeric.Special.Trigonometric",
          "name": "coth",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Special-Trigonometric.html#v:coth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Special.Trigonometric",
          "name": "csc",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/Numeric-Special-Trigonometric.html#csc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Special Trigonometric",
          "module": "Numeric.Special.Trigonometric",
          "name": "csc",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Special-Trigonometric.html#v:csc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Special.Trigonometric",
          "name": "csch",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/Numeric-Special-Trigonometric.html#csch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Special Trigonometric",
          "module": "Numeric.Special.Trigonometric",
          "name": "csch",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Special-Trigonometric.html#v:csch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Special.Trigonometric",
          "name": "sec",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/Numeric-Special-Trigonometric.html#sec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Special Trigonometric",
          "module": "Numeric.Special.Trigonometric",
          "name": "sec",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Special-Trigonometric.html#v:sec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Special.Trigonometric",
          "name": "sech",
          "package": "dsp",
          "signature": "a -\u003e a",
          "source": "src/Numeric-Special-Trigonometric.html#sech",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Special Trigonometric",
          "module": "Numeric.Special.Trigonometric",
          "name": "sech",
          "normalized": "a-\u003ea",
          "package": "dsp",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Special-Trigonometric.html#v:sech"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUNTESTED\n\u003c/p\u003e\u003cp\u003eSimple module for computing the covariance of two lists\n\u003c/p\u003e\u003cpre\u003e Cov(X1,X2) = 1/(N-1) * sum (i=1..N) ((x1_i - mu1)(x2_i - mu2))\u003c/pre\u003e\u003cp\u003eReference: Ross, NRiC\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Statistics.Covariance",
          "name": "Covariance",
          "package": "dsp",
          "source": "src/Numeric-Statistics-Covariance.html",
          "type": "module"
        },
        "index": {
          "description": "UNTESTED Simple module for computing the covariance of two lists Cov X1 X2 N-1 sum x1 mu1 x2 mu2 Reference Ross NRiC",
          "hierarchy": "Numeric Statistics Covariance",
          "module": "Numeric.Statistics.Covariance",
          "name": "Covariance",
          "package": "dsp",
          "partial": "Covariance",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Statistics-Covariance.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Statistics.Covariance",
          "name": "cov",
          "package": "dsp",
          "signature": "[a] -\u003e [a] -\u003e a",
          "source": "src/Numeric-Statistics-Covariance.html#cov",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Statistics Covariance",
          "module": "Numeric.Statistics.Covariance",
          "name": "cov",
          "normalized": "[a]-\u003e[a]-\u003ea",
          "package": "dsp",
          "signature": "[a]-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Statistics-Covariance.html#v:cov"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple module for computing the median on a list\n\u003c/p\u003e\u003cp\u003eReference: Ross, NRiC\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Statistics.Median",
          "name": "Median",
          "package": "dsp",
          "source": "src/Numeric-Statistics-Median.html",
          "type": "module"
        },
        "index": {
          "description": "Simple module for computing the median on list Reference Ross NRiC",
          "hierarchy": "Numeric Statistics Median",
          "module": "Numeric.Statistics.Median",
          "name": "Median",
          "package": "dsp",
          "partial": "Median",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Statistics-Median.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the median of a list\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Median",
          "name": "median",
          "package": "dsp",
          "signature": "[a] -\u003e a",
          "source": "src/Numeric-Statistics-Median.html#median",
          "type": "function"
        },
        "index": {
          "description": "Compute the median of list",
          "hierarchy": "Numeric Statistics Median",
          "module": "Numeric.Statistics.Median",
          "name": "median",
          "normalized": "[a]-\u003ea",
          "package": "dsp",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Statistics-Median.html#v:median"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the center of the list in a more lazy manner\nand thus halves memory requirement.\n\u003c/p\u003e",
          "module": "Numeric.Statistics.Median",
          "name": "medianFast",
          "package": "dsp",
          "signature": "[a] -\u003e a",
          "source": "src/Numeric-Statistics-Median.html#medianFast",
          "type": "function"
        },
        "index": {
          "description": "Compute the center of the list in more lazy manner and thus halves memory requirement",
          "hierarchy": "Numeric Statistics Median",
          "module": "Numeric.Statistics.Median",
          "name": "medianFast",
          "normalized": "[a]-\u003ea",
          "package": "dsp",
          "partial": "Fast",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Statistics-Median.html#v:medianFast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple module for computing the various moments of a list\n\u003c/p\u003e\u003cp\u003eReference: Ross, NRiC\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Statistics.Moment",
          "name": "Moment",
          "package": "dsp",
          "source": "src/Numeric-Statistics-Moment.html",
          "type": "module"
        },
        "index": {
          "description": "Simple module for computing the various moments of list Reference Ross NRiC",
          "hierarchy": "Numeric Statistics Moment",
          "module": "Numeric.Statistics.Moment",
          "name": "Moment",
          "package": "dsp",
          "partial": "Moment",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Statistics-Moment.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the average deviation of a list\n\u003c/p\u003e\u003cpre\u003e AvgDev(X) = 1/N sum(i=1..N) |x_i-mu|\u003c/pre\u003e",
          "module": "Numeric.Statistics.Moment",
          "name": "avgdev",
          "package": "dsp",
          "signature": "[a] -\u003e a",
          "source": "src/Numeric-Statistics-Moment.html#avgdev",
          "type": "function"
        },
        "index": {
          "description": "Compute the average deviation of list AvgDev sum i-mu",
          "hierarchy": "Numeric Statistics Moment",
          "module": "Numeric.Statistics.Moment",
          "name": "avgdev",
          "normalized": "[a]-\u003ea",
          "package": "dsp",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Statistics-Moment.html#v:avgdev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the kurtosis of a list\n\u003c/p\u003e\u003cpre\u003e Kurt(X) = ( 1/N sum(i=1..N) ((x_i-mu)/sigma)^4 ) - 3\u003c/pre\u003e",
          "module": "Numeric.Statistics.Moment",
          "name": "kurtosis",
          "package": "dsp",
          "signature": "[a] -\u003e a",
          "source": "src/Numeric-Statistics-Moment.html#kurtosis",
          "type": "function"
        },
        "index": {
          "description": "Compute the kurtosis of list Kurt sum i-mu sigma",
          "hierarchy": "Numeric Statistics Moment",
          "module": "Numeric.Statistics.Moment",
          "name": "kurtosis",
          "normalized": "[a]-\u003ea",
          "package": "dsp",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Statistics-Moment.html#v:kurtosis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the mean of a list\n\u003c/p\u003e\u003cpre\u003eMean(X) = 1/N sum(i=1..N) x_i\u003c/pre\u003e",
          "module": "Numeric.Statistics.Moment",
          "name": "mean",
          "package": "dsp",
          "signature": "[a] -\u003e a",
          "source": "src/Numeric-Statistics-Moment.html#mean",
          "type": "function"
        },
        "index": {
          "description": "Compute the mean of list Mean sum",
          "hierarchy": "Numeric Statistics Moment",
          "module": "Numeric.Statistics.Moment",
          "name": "mean",
          "normalized": "[a]-\u003ea",
          "package": "dsp",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Statistics-Moment.html#v:mean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the skew of a list\n\u003c/p\u003e\u003cpre\u003e Skew(X) = 1/N sum(i=1..N) ((x_i-mu)/sigma)^3\u003c/pre\u003e",
          "module": "Numeric.Statistics.Moment",
          "name": "skew",
          "package": "dsp",
          "signature": "[a] -\u003e a",
          "source": "src/Numeric-Statistics-Moment.html#skew",
          "type": "function"
        },
        "index": {
          "description": "Compute the skew of list Skew sum i-mu sigma",
          "hierarchy": "Numeric Statistics Moment",
          "module": "Numeric.Statistics.Moment",
          "name": "skew",
          "normalized": "[a]-\u003ea",
          "package": "dsp",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Statistics-Moment.html#v:skew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the standard deviation of a list\n\u003c/p\u003e\u003cpre\u003e StdDev(X) = sigma = sqrt (Var(X))\u003c/pre\u003e",
          "module": "Numeric.Statistics.Moment",
          "name": "stddev",
          "package": "dsp",
          "signature": "[a] -\u003e a",
          "source": "src/Numeric-Statistics-Moment.html#stddev",
          "type": "function"
        },
        "index": {
          "description": "Compute the standard deviation of list StdDev sigma sqrt Var",
          "hierarchy": "Numeric Statistics Moment",
          "module": "Numeric.Statistics.Moment",
          "name": "stddev",
          "normalized": "[a]-\u003ea",
          "package": "dsp",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Statistics-Moment.html#v:stddev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the variance of a list\n\u003c/p\u003e\u003cpre\u003eVar(X) = sigma^2\u003c/pre\u003e\u003cpre\u003e       = 1/N-1 sum(i=1..N) (x_i-mu)^2\u003c/pre\u003e",
          "module": "Numeric.Statistics.Moment",
          "name": "var",
          "package": "dsp",
          "signature": "[a] -\u003e a",
          "source": "src/Numeric-Statistics-Moment.html#var",
          "type": "function"
        },
        "index": {
          "description": "Compute the variance of list Var sigma N-1 sum i-mu",
          "hierarchy": "Numeric Statistics Moment",
          "module": "Numeric.Statistics.Moment",
          "name": "var",
          "normalized": "[a]-\u003ea",
          "package": "dsp",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Statistics-Moment.html#v:var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUNTESTED: DO NOT USE\n\u003c/p\u003e\u003cp\u003eStudent's t-test functions\n\u003c/p\u003e\u003cp\u003eReference: NRiC\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Statistics.TTest",
          "name": "TTest",
          "package": "dsp",
          "source": "src/Numeric-Statistics-TTest.html",
          "type": "module"
        },
        "index": {
          "description": "UNTESTED DO NOT USE Student t-test functions Reference NRiC",
          "hierarchy": "Numeric Statistics TTest",
          "module": "Numeric.Statistics.TTest",
          "name": "TTest",
          "package": "dsp",
          "partial": "TTest",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Statistics-TTest.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Statistics.TTest",
          "name": "tptest",
          "package": "dsp",
          "signature": "[Double]-\u003e [Double]-\u003e Double",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Statistics TTest",
          "module": "Numeric.Statistics.TTest",
          "name": "tptest",
          "normalized": "[Double]-\u003e[Double]-\u003eDouble",
          "package": "dsp",
          "signature": "[Double]-\u003e[Double]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Statistics-TTest.html#v:tptest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Statistics.TTest",
          "name": "ttest",
          "package": "dsp",
          "signature": "[Double]-\u003e [Double]-\u003e Double",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Statistics TTest",
          "module": "Numeric.Statistics.TTest",
          "name": "ttest",
          "normalized": "[Double]-\u003e[Double]-\u003eDouble",
          "package": "dsp",
          "signature": "[Double]-\u003e[Double]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Statistics-TTest.html#v:ttest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Statistics.TTest",
          "name": "tutest",
          "package": "dsp",
          "signature": "[Double]-\u003e [Double]-\u003e Double",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Statistics TTest",
          "module": "Numeric.Statistics.TTest",
          "name": "tutest",
          "normalized": "[Double]-\u003e[Double]-\u003eDouble",
          "package": "dsp",
          "signature": "[Double]-\u003e[Double]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Statistics-TTest.html#v:tutest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCooley-Tukey algorithm for computing the FFT\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Transform.Fourier.CT",
          "name": "CT",
          "package": "dsp",
          "source": "src/Numeric-Transform-Fourier-CT.html",
          "type": "module"
        },
        "index": {
          "description": "Cooley-Tukey algorithm for computing the FFT",
          "hierarchy": "Numeric Transform Fourier CT",
          "module": "Numeric.Transform.Fourier.CT",
          "name": "CT",
          "package": "dsp",
          "partial": "CT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-CT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCooley-Tukey algorithm doing row FFT's then column FFT's\n\u003c/p\u003e",
          "module": "Numeric.Transform.Fourier.CT",
          "name": "fft_ct1",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e a-\u003e a-\u003e (Array a (Complex b) -\u003e Array a (Complex b))-\u003e Array a (Complex b)",
          "type": "function"
        },
        "index": {
          "description": "Cooley-Tukey algorithm doing row FFT then column FFT",
          "hierarchy": "Numeric Transform Fourier CT",
          "module": "Numeric.Transform.Fourier.CT",
          "name": "fft_ct1",
          "normalized": "Array a(Complex b)-\u003ea-\u003ea-\u003e(Array a(Complex b)-\u003eArray a(Complex b))-\u003eArray a(Complex b)",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003ea-\u003ea-\u003e(Array a(Complex b)-\u003eArray a(Complex b))-\u003eArray a(Complex b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-CT.html#v:fft_ct1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCooley-Tukey algorithm doing column FFT's then row FFT's\n\u003c/p\u003e",
          "module": "Numeric.Transform.Fourier.CT",
          "name": "fft_ct2",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e a-\u003e a-\u003e (Array a (Complex b) -\u003e Array a (Complex b))-\u003e Array a (Complex b)",
          "type": "function"
        },
        "index": {
          "description": "Cooley-Tukey algorithm doing column FFT then row FFT",
          "hierarchy": "Numeric Transform Fourier CT",
          "module": "Numeric.Transform.Fourier.CT",
          "name": "fft_ct2",
          "normalized": "Array a(Complex b)-\u003ea-\u003ea-\u003e(Array a(Complex b)-\u003eArray a(Complex b))-\u003eArray a(Complex b)",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003ea-\u003ea-\u003e(Array a(Complex b)-\u003eArray a(Complex b))-\u003eArray a(Complex b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-CT.html#v:fft_ct2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNot so naive implementation of a Discrete Fourier Transform.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Transform.Fourier.DFT",
          "name": "DFT",
          "package": "dsp",
          "source": "src/Numeric-Transform-Fourier-DFT.html",
          "type": "module"
        },
        "index": {
          "description": "Not so naive implementation of Discrete Fourier Transform",
          "hierarchy": "Numeric Transform Fourier DFT",
          "module": "Numeric.Transform.Fourier.DFT",
          "name": "DFT",
          "package": "dsp",
          "partial": "DFT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-DFT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Transform.Fourier.DFT",
          "name": "dft",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e Array a (Complex b)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Transform Fourier DFT",
          "module": "Numeric.Transform.Fourier.DFT",
          "name": "dft",
          "normalized": "Array a(Complex b)-\u003eArray a(Complex b)",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003eArray a(Complex b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-DFT.html#v:dft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFFT driver functions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Transform.Fourier.FFT",
          "name": "FFT",
          "package": "dsp",
          "source": "src/Numeric-Transform-Fourier-FFT.html",
          "type": "module"
        },
        "index": {
          "description": "FFT driver functions",
          "hierarchy": "Numeric Transform Fourier FFT",
          "module": "Numeric.Transform.Fourier.FFT",
          "name": "FFT",
          "package": "dsp",
          "partial": "FFT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-FFT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the driver routine for calculating FFT's.  All of the\n recursion in the various algorithms are defined in terms of \u003ccode\u003e\u003ca\u003efft\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.Transform.Fourier.FFT",
          "name": "fft",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e Array a (Complex b)",
          "type": "function"
        },
        "index": {
          "description": "This is the driver routine for calculating FFT All of the recursion in the various algorithms are defined in terms of fft",
          "hierarchy": "Numeric Transform Fourier FFT",
          "module": "Numeric.Transform.Fourier.FFT",
          "name": "fft",
          "normalized": "Array a(Complex b)-\u003eArray a(Complex b)",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003eArray a(Complex b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-FFT.html#v:fft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse FFT, including scaling factor, defined in terms of \u003ccode\u003e\u003ca\u003efft\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Numeric.Transform.Fourier.FFT",
          "name": "ifft",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e Array a (Complex b)",
          "type": "function"
        },
        "index": {
          "description": "Inverse FFT including scaling factor defined in terms of fft",
          "hierarchy": "Numeric Transform Fourier FFT",
          "module": "Numeric.Transform.Fourier.FFT",
          "name": "ifft",
          "normalized": "Array a(Complex b)-\u003eArray a(Complex b)",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003eArray a(Complex b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-FFT.html#v:ifft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the algorithm for computing a 2N-point real inverse FFT with an\n N-point complex FFT, defined in terms of \u003ccode\u003e\u003ca\u003eifft\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Numeric.Transform.Fourier.FFT",
          "name": "irfft",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e Array a b",
          "type": "function"
        },
        "index": {
          "description": "This is the algorithm for computing N-point real inverse FFT with an N-point complex FFT defined in terms of ifft",
          "hierarchy": "Numeric Transform Fourier FFT",
          "module": "Numeric.Transform.Fourier.FFT",
          "name": "irfft",
          "normalized": "Array a(Complex b)-\u003eArray a b",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003eArray a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-FFT.html#v:irfft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlgorithm for 2 N-point real FFT's computed with N-point complex\n FFT, defined in terms of \u003ccode\u003e\u003ca\u003efft\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Numeric.Transform.Fourier.FFT",
          "name": "r2fft",
          "package": "dsp",
          "signature": "Array a b-\u003e Array a b-\u003e (Array a (Complex b), Array a (Complex b))",
          "type": "function"
        },
        "index": {
          "description": "Algorithm for N-point real FFT computed with N-point complex FFT defined in terms of fft",
          "hierarchy": "Numeric Transform Fourier FFT",
          "module": "Numeric.Transform.Fourier.FFT",
          "name": "r2fft",
          "normalized": "Array a b-\u003eArray a b-\u003e(Array a(Complex b),Array a(Complex b))",
          "package": "dsp",
          "signature": "Array a b-\u003eArray a b-\u003e(Array a(Complex b),Array a(Complex b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-FFT.html#v:r2fft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the algorithm for computing 2N-point real FFT with an N-point\n complex FFT, defined in terms of \u003ccode\u003e\u003ca\u003efft\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Numeric.Transform.Fourier.FFT",
          "name": "rfft",
          "package": "dsp",
          "signature": "Array a b-\u003e Array a (Complex b)",
          "type": "function"
        },
        "index": {
          "description": "This is the algorithm for computing N-point real FFT with an N-point complex FFT defined in terms of fft",
          "hierarchy": "Numeric Transform Fourier FFT",
          "module": "Numeric.Transform.Fourier.FFT",
          "name": "rfft",
          "normalized": "Array a b-\u003eArray a(Complex b)",
          "package": "dsp",
          "signature": "Array a b-\u003eArray a(Complex b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-FFT.html#v:rfft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHard-coded FFT transforms\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Transform.Fourier.FFTHard",
          "name": "FFTHard",
          "package": "dsp",
          "source": "src/Numeric-Transform-Fourier-FFTHard.html",
          "type": "module"
        },
        "index": {
          "description": "Hard-coded FFT transforms",
          "hierarchy": "Numeric Transform Fourier FFTHard",
          "module": "Numeric.Transform.Fourier.FFTHard",
          "name": "FFTHard",
          "package": "dsp",
          "partial": "FFTHard",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-FFTHard.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength 2 FFT\n\u003c/p\u003e",
          "module": "Numeric.Transform.Fourier.FFTHard",
          "name": "fft'2",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e Array a (Complex b)",
          "type": "function"
        },
        "index": {
          "description": "Length FFT",
          "hierarchy": "Numeric Transform Fourier FFTHard",
          "module": "Numeric.Transform.Fourier.FFTHard",
          "name": "fft'2",
          "normalized": "Array a(Complex b)-\u003eArray a(Complex b)",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003eArray a(Complex b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-FFTHard.html#v:fft-39-2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength 3 FFT\n\u003c/p\u003e",
          "module": "Numeric.Transform.Fourier.FFTHard",
          "name": "fft'3",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e Array a (Complex b)",
          "type": "function"
        },
        "index": {
          "description": "Length FFT",
          "hierarchy": "Numeric Transform Fourier FFTHard",
          "module": "Numeric.Transform.Fourier.FFTHard",
          "name": "fft'3",
          "normalized": "Array a(Complex b)-\u003eArray a(Complex b)",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003eArray a(Complex b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-FFTHard.html#v:fft-39-3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength 4 FFT\n\u003c/p\u003e",
          "module": "Numeric.Transform.Fourier.FFTHard",
          "name": "fft'4",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e Array a (Complex b)",
          "type": "function"
        },
        "index": {
          "description": "Length FFT",
          "hierarchy": "Numeric Transform Fourier FFTHard",
          "module": "Numeric.Transform.Fourier.FFTHard",
          "name": "fft'4",
          "normalized": "Array a(Complex b)-\u003eArray a(Complex b)",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003eArray a(Complex b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-FFTHard.html#v:fft-39-4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtility functions based on the FFT\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Transform.Fourier.FFTUtils",
          "name": "FFTUtils",
          "package": "dsp",
          "source": "src/Numeric-Transform-Fourier-FFTUtils.html",
          "type": "module"
        },
        "index": {
          "description": "Utility functions based on the FFT",
          "hierarchy": "Numeric Transform Fourier FFTUtils",
          "module": "Numeric.Transform.Fourier.FFTUtils",
          "name": "FFTUtils",
          "package": "dsp",
          "partial": "FFTUtils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-FFTUtils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Transform.Fourier.FFTUtils",
          "name": "fft_db",
          "package": "dsp",
          "signature": "Array a (Complex b) -\u003e Array a b",
          "source": "src/Numeric-Transform-Fourier-FFTUtils.html#fft_db",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Transform Fourier FFTUtils",
          "module": "Numeric.Transform.Fourier.FFTUtils",
          "name": "fft_db",
          "normalized": "Array a(Complex b)-\u003eArray a b",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003eArray a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-FFTUtils.html#v:fft_db"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Transform.Fourier.FFTUtils",
          "name": "fft_grd",
          "package": "dsp",
          "signature": "Array i (Complex a) -\u003e Array i a",
          "source": "src/Numeric-Transform-Fourier-FFTUtils.html#fft_grd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Transform Fourier FFTUtils",
          "module": "Numeric.Transform.Fourier.FFTUtils",
          "name": "fft_grd",
          "normalized": "Array a(Complex b)-\u003eArray a b",
          "package": "dsp",
          "signature": "Array i(Complex a)-\u003eArray i a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-FFTUtils.html#v:fft_grd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Transform.Fourier.FFTUtils",
          "name": "fft_info",
          "package": "dsp",
          "signature": "Array i (Complex Double) -\u003e (Array i Double, Array i Double, Array i Double, Array i Double)",
          "source": "src/Numeric-Transform-Fourier-FFTUtils.html#fft_info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Transform Fourier FFTUtils",
          "module": "Numeric.Transform.Fourier.FFTUtils",
          "name": "fft_info",
          "normalized": "Array a(Complex Double)-\u003e(Array a Double,Array a Double,Array a Double,Array a Double)",
          "package": "dsp",
          "signature": "Array i(Complex Double)-\u003e(Array i Double,Array i Double,Array i Double,Array i Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-FFTUtils.html#v:fft_info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Transform.Fourier.FFTUtils",
          "name": "fft_mag",
          "package": "dsp",
          "signature": "Array a (Complex b) -\u003e Array a b",
          "source": "src/Numeric-Transform-Fourier-FFTUtils.html#fft_mag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Transform Fourier FFTUtils",
          "module": "Numeric.Transform.Fourier.FFTUtils",
          "name": "fft_mag",
          "normalized": "Array a(Complex b)-\u003eArray a b",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003eArray a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-FFTUtils.html#v:fft_mag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Transform.Fourier.FFTUtils",
          "name": "fft_phase",
          "package": "dsp",
          "signature": "Array a (Complex Double) -\u003e Array a Double",
          "source": "src/Numeric-Transform-Fourier-FFTUtils.html#fft_phase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Transform Fourier FFTUtils",
          "module": "Numeric.Transform.Fourier.FFTUtils",
          "name": "fft_phase",
          "normalized": "Array a(Complex Double)-\u003eArray a Double",
          "package": "dsp",
          "signature": "Array a(Complex Double)-\u003eArray a Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-FFTUtils.html#v:fft_phase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Transform.Fourier.FFTUtils",
          "name": "rfft_db",
          "package": "dsp",
          "signature": "Array a b -\u003e Array a b",
          "source": "src/Numeric-Transform-Fourier-FFTUtils.html#rfft_db",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Transform Fourier FFTUtils",
          "module": "Numeric.Transform.Fourier.FFTUtils",
          "name": "rfft_db",
          "normalized": "Array a b-\u003eArray a b",
          "package": "dsp",
          "signature": "Array a b-\u003eArray a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-FFTUtils.html#v:rfft_db"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Transform.Fourier.FFTUtils",
          "name": "rfft_grd",
          "package": "dsp",
          "signature": "Array i a -\u003e Array i a",
          "source": "src/Numeric-Transform-Fourier-FFTUtils.html#rfft_grd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Transform Fourier FFTUtils",
          "module": "Numeric.Transform.Fourier.FFTUtils",
          "name": "rfft_grd",
          "normalized": "Array a b-\u003eArray a b",
          "package": "dsp",
          "signature": "Array i a-\u003eArray i a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-FFTUtils.html#v:rfft_grd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Transform.Fourier.FFTUtils",
          "name": "rfft_info",
          "package": "dsp",
          "signature": "Array i Double -\u003e (Array i Double, Array i Double, Array i Double, Array i Double)",
          "source": "src/Numeric-Transform-Fourier-FFTUtils.html#rfft_info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Transform Fourier FFTUtils",
          "module": "Numeric.Transform.Fourier.FFTUtils",
          "name": "rfft_info",
          "normalized": "Array a Double-\u003e(Array a Double,Array a Double,Array a Double,Array a Double)",
          "package": "dsp",
          "signature": "Array i Double-\u003e(Array i Double,Array i Double,Array i Double,Array i Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-FFTUtils.html#v:rfft_info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Transform.Fourier.FFTUtils",
          "name": "rfft_mag",
          "package": "dsp",
          "signature": "Array a b -\u003e Array a b",
          "source": "src/Numeric-Transform-Fourier-FFTUtils.html#rfft_mag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Transform Fourier FFTUtils",
          "module": "Numeric.Transform.Fourier.FFTUtils",
          "name": "rfft_mag",
          "normalized": "Array a b-\u003eArray a b",
          "package": "dsp",
          "signature": "Array a b-\u003eArray a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-FFTUtils.html#v:rfft_mag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Transform.Fourier.FFTUtils",
          "name": "rfft_phase",
          "package": "dsp",
          "signature": "Array a Double -\u003e Array a Double",
          "source": "src/Numeric-Transform-Fourier-FFTUtils.html#rfft_phase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Transform Fourier FFTUtils",
          "module": "Numeric.Transform.Fourier.FFTUtils",
          "name": "rfft_phase",
          "normalized": "Array a Double-\u003eArray a Double",
          "package": "dsp",
          "signature": "Array a Double-\u003eArray a Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-FFTUtils.html#v:rfft_phase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Transform.Fourier.FFTUtils",
          "name": "write_fft_info",
          "package": "dsp",
          "signature": "String -\u003e Array i (Complex Double) -\u003e IO ()",
          "source": "src/Numeric-Transform-Fourier-FFTUtils.html#write_fft_info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Transform Fourier FFTUtils",
          "module": "Numeric.Transform.Fourier.FFTUtils",
          "name": "write_fft_info",
          "normalized": "String-\u003eArray a(Complex Double)-\u003eIO()",
          "package": "dsp",
          "signature": "String-\u003eArray i(Complex Double)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-FFTUtils.html#v:write_fft_info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Transform.Fourier.FFTUtils",
          "name": "write_rfft_info",
          "package": "dsp",
          "signature": "String -\u003e Array Int Double -\u003e IO ()",
          "source": "src/Numeric-Transform-Fourier-FFTUtils.html#write_rfft_info",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Transform Fourier FFTUtils",
          "module": "Numeric.Transform.Fourier.FFTUtils",
          "name": "write_rfft_info",
          "normalized": "String-\u003eArray Int Double-\u003eIO()",
          "package": "dsp",
          "signature": "String-\u003eArray Int Double-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-FFTUtils.html#v:write_rfft_info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is an implementation of Goertzel's algorithm, which computes one\n bin of a DFT.  A description can be found in Oppenheim and Schafer's\n \u003cem\u003eDiscrete Time Signal Processing\u003c/em\u003e, pp 585-587.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Transform.Fourier.Goertzel",
          "name": "Goertzel",
          "package": "dsp",
          "source": "src/Numeric-Transform-Fourier-Goertzel.html",
          "type": "module"
        },
        "index": {
          "description": "This is an implementation of Goertzel algorithm which computes one bin of DFT description can be found in Oppenheim and Schafer Discrete Time Signal Processing pp",
          "hierarchy": "Numeric Transform Fourier Goertzel",
          "module": "Numeric.Transform.Fourier.Goertzel",
          "name": "Goertzel",
          "package": "dsp",
          "partial": "Goertzel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-Goertzel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGoertzel's algorithm for complex inputs\n\u003c/p\u003e",
          "module": "Numeric.Transform.Fourier.Goertzel",
          "name": "cgoertzel",
          "package": "dsp",
          "signature": "Array b (Complex a)-\u003e b-\u003e Complex a",
          "type": "function"
        },
        "index": {
          "description": "Goertzel algorithm for complex inputs",
          "hierarchy": "Numeric Transform Fourier Goertzel",
          "module": "Numeric.Transform.Fourier.Goertzel",
          "name": "cgoertzel",
          "normalized": "Array a(Complex b)-\u003ea-\u003eComplex b",
          "package": "dsp",
          "signature": "Array b(Complex a)-\u003eb-\u003eComplex a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-Goertzel.html#v:cgoertzel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePower via Goertzel's algorithm for complex inputs\n\u003c/p\u003e",
          "module": "Numeric.Transform.Fourier.Goertzel",
          "name": "cgoertzel_power",
          "package": "dsp",
          "signature": "Array b (Complex a)-\u003e b-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Power via Goertzel algorithm for complex inputs",
          "hierarchy": "Numeric Transform Fourier Goertzel",
          "module": "Numeric.Transform.Fourier.Goertzel",
          "name": "cgoertzel_power",
          "normalized": "Array a(Complex b)-\u003ea-\u003eb",
          "package": "dsp",
          "signature": "Array b(Complex a)-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-Goertzel.html#v:cgoertzel_power"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGoertzel's algorithm for real inputs\n\u003c/p\u003e",
          "module": "Numeric.Transform.Fourier.Goertzel",
          "name": "rgoertzel",
          "package": "dsp",
          "signature": "Array b a-\u003e b-\u003e Complex a",
          "type": "function"
        },
        "index": {
          "description": "Goertzel algorithm for real inputs",
          "hierarchy": "Numeric Transform Fourier Goertzel",
          "module": "Numeric.Transform.Fourier.Goertzel",
          "name": "rgoertzel",
          "normalized": "Array a b-\u003ea-\u003eComplex b",
          "package": "dsp",
          "signature": "Array b a-\u003eb-\u003eComplex a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-Goertzel.html#v:rgoertzel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePower via Goertzel's algorithm for real inputs\n\u003c/p\u003e",
          "module": "Numeric.Transform.Fourier.Goertzel",
          "name": "rgoertzel_power",
          "package": "dsp",
          "signature": "Array b a-\u003e b-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Power via Goertzel algorithm for real inputs",
          "hierarchy": "Numeric Transform Fourier Goertzel",
          "module": "Numeric.Transform.Fourier.Goertzel",
          "name": "rgoertzel_power",
          "normalized": "Array a b-\u003ea-\u003eb",
          "package": "dsp",
          "signature": "Array b a-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-Goertzel.html#v:rgoertzel_power"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrime Factor Algorithm\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Transform.Fourier.PFA",
          "name": "PFA",
          "package": "dsp",
          "source": "src/Numeric-Transform-Fourier-PFA.html",
          "type": "module"
        },
        "index": {
          "description": "Prime Factor Algorithm",
          "hierarchy": "Numeric Transform Fourier PFA",
          "module": "Numeric.Transform.Fourier.PFA",
          "name": "PFA",
          "package": "dsp",
          "partial": "PFA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-PFA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrime Factor Algorithm doing row FFT's then column FFT's\n\u003c/p\u003e",
          "module": "Numeric.Transform.Fourier.PFA",
          "name": "fft_pfa",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e a-\u003e a-\u003e (Array a (Complex b) -\u003e Array a (Complex b))-\u003e Array a (Complex b)",
          "type": "function"
        },
        "index": {
          "description": "Prime Factor Algorithm doing row FFT then column FFT",
          "hierarchy": "Numeric Transform Fourier PFA",
          "module": "Numeric.Transform.Fourier.PFA",
          "name": "fft_pfa",
          "normalized": "Array a(Complex b)-\u003ea-\u003ea-\u003e(Array a(Complex b)-\u003eArray a(Complex b))-\u003eArray a(Complex b)",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003ea-\u003ea-\u003e(Array a(Complex b)-\u003eArray a(Complex b))-\u003eArray a(Complex b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-PFA.html#v:fft_pfa"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRadix-2 Decimation in Frequency FFT\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Transform.Fourier.R2DIF",
          "name": "R2DIF",
          "package": "dsp",
          "source": "src/Numeric-Transform-Fourier-R2DIF.html",
          "type": "module"
        },
        "index": {
          "description": "Radix-2 Decimation in Frequency FFT",
          "hierarchy": "Numeric Transform Fourier R2DIF",
          "module": "Numeric.Transform.Fourier.R2DIF",
          "name": "R2DIF",
          "package": "dsp",
          "partial": "DIF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-R2DIF.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRadix-2 Decimation in Frequency FFT\n\u003c/p\u003e",
          "module": "Numeric.Transform.Fourier.R2DIF",
          "name": "fft_r2dif",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e a-\u003e (Array a (Complex b) -\u003e Array a (Complex b))-\u003e Array a (Complex b)",
          "type": "function"
        },
        "index": {
          "description": "Radix-2 Decimation in Frequency FFT",
          "hierarchy": "Numeric Transform Fourier R2DIF",
          "module": "Numeric.Transform.Fourier.R2DIF",
          "name": "fft_r2dif",
          "normalized": "Array a(Complex b)-\u003ea-\u003e(Array a(Complex b)-\u003eArray a(Complex b))-\u003eArray a(Complex b)",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003ea-\u003e(Array a(Complex b)-\u003eArray a(Complex b))-\u003eArray a(Complex b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-R2DIF.html#v:fft_r2dif"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRadix-2 Decimation in Time FFT\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Transform.Fourier.R2DIT",
          "name": "R2DIT",
          "package": "dsp",
          "source": "src/Numeric-Transform-Fourier-R2DIT.html",
          "type": "module"
        },
        "index": {
          "description": "Radix-2 Decimation in Time FFT",
          "hierarchy": "Numeric Transform Fourier R2DIT",
          "module": "Numeric.Transform.Fourier.R2DIT",
          "name": "R2DIT",
          "package": "dsp",
          "partial": "DIT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-R2DIT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRadix-2 Decimation in Time FFT\n\u003c/p\u003e",
          "module": "Numeric.Transform.Fourier.R2DIT",
          "name": "fft_r2dit",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e a-\u003e (Array a (Complex b) -\u003e Array a (Complex b))-\u003e Array a (Complex b)",
          "type": "function"
        },
        "index": {
          "description": "Radix-2 Decimation in Time FFT",
          "hierarchy": "Numeric Transform Fourier R2DIT",
          "module": "Numeric.Transform.Fourier.R2DIT",
          "name": "fft_r2dit",
          "normalized": "Array a(Complex b)-\u003ea-\u003e(Array a(Complex b)-\u003eArray a(Complex b))-\u003eArray a(Complex b)",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003ea-\u003e(Array a(Complex b)-\u003eArray a(Complex b))-\u003eArray a(Complex b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-R2DIT.html#v:fft_r2dit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRadix-4 Decimation in Frequency FFT\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Transform.Fourier.R4DIF",
          "name": "R4DIF",
          "package": "dsp",
          "source": "src/Numeric-Transform-Fourier-R4DIF.html",
          "type": "module"
        },
        "index": {
          "description": "Radix-4 Decimation in Frequency FFT",
          "hierarchy": "Numeric Transform Fourier R4DIF",
          "module": "Numeric.Transform.Fourier.R4DIF",
          "name": "R4DIF",
          "package": "dsp",
          "partial": "DIF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-R4DIF.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRadix-4 Decimation in Frequency FFT\n\u003c/p\u003e",
          "module": "Numeric.Transform.Fourier.R4DIF",
          "name": "fft_r4dif",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e a-\u003e (Array a (Complex b) -\u003e Array a (Complex b))-\u003e Array a (Complex b)",
          "type": "function"
        },
        "index": {
          "description": "Radix-4 Decimation in Frequency FFT",
          "hierarchy": "Numeric Transform Fourier R4DIF",
          "module": "Numeric.Transform.Fourier.R4DIF",
          "name": "fft_r4dif",
          "normalized": "Array a(Complex b)-\u003ea-\u003e(Array a(Complex b)-\u003eArray a(Complex b))-\u003eArray a(Complex b)",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003ea-\u003e(Array a(Complex b)-\u003eArray a(Complex b))-\u003eArray a(Complex b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-R4DIF.html#v:fft_r4dif"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRader's Algorithm for computing prime length FFT's\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Transform.Fourier.Rader",
          "name": "Rader",
          "package": "dsp",
          "source": "src/Numeric-Transform-Fourier-Rader.html",
          "type": "module"
        },
        "index": {
          "description": "Rader Algorithm for computing prime length FFT",
          "hierarchy": "Numeric Transform Fourier Rader",
          "module": "Numeric.Transform.Fourier.Rader",
          "name": "Rader",
          "package": "dsp",
          "partial": "Rader",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-Rader.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRader's Algorithm using direct convolution\n\u003c/p\u003e",
          "module": "Numeric.Transform.Fourier.Rader",
          "name": "fft_rader1",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e a-\u003e Array a (Complex b)",
          "type": "function"
        },
        "index": {
          "description": "Rader Algorithm using direct convolution",
          "hierarchy": "Numeric Transform Fourier Rader",
          "module": "Numeric.Transform.Fourier.Rader",
          "name": "fft_rader1",
          "normalized": "Array a(Complex b)-\u003ea-\u003eArray a(Complex b)",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003ea-\u003eArray a(Complex b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-Rader.html#v:fft_rader1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRader's Algorithm using FFT convolution\n\u003c/p\u003e",
          "module": "Numeric.Transform.Fourier.Rader",
          "name": "fft_rader2",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e a-\u003e (Array a (Complex b) -\u003e Array a (Complex b))-\u003e Array a (Complex b)",
          "type": "function"
        },
        "index": {
          "description": "Rader Algorithm using FFT convolution",
          "hierarchy": "Numeric Transform Fourier Rader",
          "module": "Numeric.Transform.Fourier.Rader",
          "name": "fft_rader2",
          "normalized": "Array a(Complex b)-\u003ea-\u003e(Array a(Complex b)-\u003eArray a(Complex b))-\u003eArray a(Complex b)",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003ea-\u003e(Array a(Complex b)-\u003eArray a(Complex b))-\u003eArray a(Complex b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-Rader.html#v:fft_rader2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSplit-Radix Decimation in Frequency FFT\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Transform.Fourier.SRDIF",
          "name": "SRDIF",
          "package": "dsp",
          "source": "src/Numeric-Transform-Fourier-SRDIF.html",
          "type": "module"
        },
        "index": {
          "description": "Split-Radix Decimation in Frequency FFT",
          "hierarchy": "Numeric Transform Fourier SRDIF",
          "module": "Numeric.Transform.Fourier.SRDIF",
          "name": "SRDIF",
          "package": "dsp",
          "partial": "SRDIF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-SRDIF.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit-Radix Decimation in Frequency FFT\n\u003c/p\u003e",
          "module": "Numeric.Transform.Fourier.SRDIF",
          "name": "fft_srdif",
          "package": "dsp",
          "signature": "Array a (Complex b)-\u003e a-\u003e (Array a (Complex b) -\u003e Array a (Complex b))-\u003e Array a (Complex b)",
          "type": "function"
        },
        "index": {
          "description": "Split-Radix Decimation in Frequency FFT",
          "hierarchy": "Numeric Transform Fourier SRDIF",
          "module": "Numeric.Transform.Fourier.SRDIF",
          "name": "fft_srdif",
          "normalized": "Array a(Complex b)-\u003ea-\u003e(Array a(Complex b)-\u003eArray a(Complex b))-\u003eArray a(Complex b)",
          "package": "dsp",
          "signature": "Array a(Complex b)-\u003ea-\u003e(Array a(Complex b)-\u003eArray a(Complex b))-\u003eArray a(Complex b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-SRDIF.html#v:fft_srdif"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSliding FFT Algorithm\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Transform.Fourier.SlidingFFT",
          "name": "SlidingFFT",
          "package": "dsp",
          "source": "src/Numeric-Transform-Fourier-SlidingFFT.html",
          "type": "module"
        },
        "index": {
          "description": "Sliding FFT Algorithm",
          "hierarchy": "Numeric Transform Fourier SlidingFFT",
          "module": "Numeric.Transform.Fourier.SlidingFFT",
          "name": "SlidingFFT",
          "package": "dsp",
          "partial": "Sliding FFT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-SlidingFFT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSliding FFT\n\u003c/p\u003e",
          "module": "Numeric.Transform.Fourier.SlidingFFT",
          "name": "sfft",
          "package": "dsp",
          "signature": "Int-\u003e [Complex a]-\u003e [Array Int (Complex a)]",
          "type": "function"
        },
        "index": {
          "description": "Sliding FFT",
          "hierarchy": "Numeric Transform Fourier SlidingFFT",
          "module": "Numeric.Transform.Fourier.SlidingFFT",
          "name": "sfft",
          "normalized": "Int-\u003e[Complex a]-\u003e[Array Int(Complex a)]",
          "package": "dsp",
          "signature": "Int-\u003e[Complex a]-\u003e[Array Int(Complex a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Numeric-Transform-Fourier-SlidingFFT.html#v:sfft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple module for handling polynomials.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Polynomial.Basic",
          "name": "Basic",
          "package": "dsp",
          "source": "src/Polynomial-Basic.html",
          "type": "module"
        },
        "index": {
          "description": "Simple module for handling polynomials",
          "hierarchy": "Polynomial Basic",
          "module": "Polynomial.Basic",
          "name": "Basic",
          "package": "dsp",
          "partial": "Basic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Polynomial-Basic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Polynomial.Basic",
          "name": "polyAddScalar",
          "package": "dsp",
          "signature": "a -\u003e [a] -\u003e [a]",
          "source": "src/Polynomial-Basic.html#polyAddScalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Polynomial Basic",
          "module": "Polynomial.Basic",
          "name": "polyAddScalar",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "partial": "Add Scalar",
          "signature": "a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Polynomial-Basic.html#v:polyAddScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolynomial substitution \u003ccode\u003ey(n) = x(w(n))\u003c/code\u003e\nwhere the coefficients of \u003ccode\u003ex\u003c/code\u003e are also polynomials.\n\u003c/p\u003e",
          "module": "Polynomial.Basic",
          "name": "polyPolySubst",
          "package": "dsp",
          "signature": "[a] -\u003e [[a]] -\u003e [a]",
          "source": "src/Polynomial-Basic.html#polyPolySubst",
          "type": "function"
        },
        "index": {
          "description": "Polynomial substitution where the coefficients of are also polynomials",
          "hierarchy": "Polynomial Basic",
          "module": "Polynomial.Basic",
          "name": "polyPolySubst",
          "normalized": "[a]-\u003e[[a]]-\u003e[a]",
          "package": "dsp",
          "partial": "Poly Subst",
          "signature": "[a]-\u003e[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Polynomial-Basic.html#v:polyPolySubst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd two polynomials\n\u003c/p\u003e",
          "module": "Polynomial.Basic",
          "name": "polyadd",
          "package": "dsp",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Polynomial-Basic.html#polyadd",
          "type": "function"
        },
        "index": {
          "description": "Add two polynomials",
          "hierarchy": "Polynomial Basic",
          "module": "Polynomial.Basic",
          "name": "polyadd",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Polynomial-Basic.html#v:polyadd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolynomial derivative\n\u003c/p\u003e",
          "module": "Polynomial.Basic",
          "name": "polyderiv",
          "package": "dsp",
          "signature": "[a] -\u003e [a]",
          "source": "src/Polynomial-Basic.html#polyderiv",
          "type": "function"
        },
        "index": {
          "description": "Polynomial derivative",
          "hierarchy": "Polynomial Basic",
          "module": "Polynomial.Basic",
          "name": "polyderiv",
          "normalized": "[a]-\u003e[a]",
          "package": "dsp",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Polynomial-Basic.html#v:polyderiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivide two polynomials\n\u003c/p\u003e",
          "module": "Polynomial.Basic",
          "name": "polydiv",
          "package": "dsp",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Polynomial-Basic.html#polydiv",
          "type": "function"
        },
        "index": {
          "description": "Divide two polynomials",
          "hierarchy": "Polynomial Basic",
          "module": "Polynomial.Basic",
          "name": "polydiv",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Polynomial-Basic.html#v:polydiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a polynomial using Horner's method.\n\u003c/p\u003e",
          "module": "Polynomial.Basic",
          "name": "polyeval",
          "package": "dsp",
          "signature": "[a] -\u003e a -\u003e a",
          "source": "src/Polynomial-Basic.html#polyeval",
          "type": "function"
        },
        "index": {
          "description": "Evaluate polynomial using Horner method",
          "hierarchy": "Polynomial Basic",
          "module": "Polynomial.Basic",
          "name": "polyeval",
          "normalized": "[a]-\u003ea-\u003ea",
          "package": "dsp",
          "signature": "[a]-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Polynomial-Basic.html#v:polyeval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolynomial integration\n\u003c/p\u003e",
          "module": "Polynomial.Basic",
          "name": "polyinteg",
          "package": "dsp",
          "signature": "[a] -\u003e a -\u003e [a]",
          "source": "src/Polynomial-Basic.html#polyinteg",
          "type": "function"
        },
        "index": {
          "description": "Polynomial integration",
          "hierarchy": "Polynomial Basic",
          "module": "Polynomial.Basic",
          "name": "polyinteg",
          "normalized": "[a]-\u003ea-\u003e[a]",
          "package": "dsp",
          "signature": "[a]-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Polynomial-Basic.html#v:polyinteg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModulus of two polynomials (remainder of division)\n\u003c/p\u003e",
          "module": "Polynomial.Basic",
          "name": "polymod",
          "package": "dsp",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Polynomial-Basic.html#polymod",
          "type": "function"
        },
        "index": {
          "description": "Modulus of two polynomials remainder of division",
          "hierarchy": "Polynomial Basic",
          "module": "Polynomial.Basic",
          "name": "polymod",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Polynomial-Basic.html#v:polymod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply two polynomials\n\u003c/p\u003e",
          "module": "Polynomial.Basic",
          "name": "polymult",
          "package": "dsp",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Polynomial-Basic.html#polymult",
          "type": "function"
        },
        "index": {
          "description": "Multiply two polynomials",
          "hierarchy": "Polynomial Basic",
          "module": "Polynomial.Basic",
          "name": "polymult",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Polynomial-Basic.html#v:polymult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Polynomial.Basic",
          "name": "polymultAlt",
          "package": "dsp",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Polynomial-Basic.html#polymultAlt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Polynomial Basic",
          "module": "Polynomial.Basic",
          "name": "polymultAlt",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "partial": "Alt",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Polynomial-Basic.html#v:polymultAlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaise a polynomial to a non-negative integer power\n\u003c/p\u003e",
          "module": "Polynomial.Basic",
          "name": "polypow",
          "package": "dsp",
          "signature": "[a] -\u003e b -\u003e [a]",
          "source": "src/Polynomial-Basic.html#polypow",
          "type": "function"
        },
        "index": {
          "description": "Raise polynomial to non-negative integer power",
          "hierarchy": "Polynomial Basic",
          "module": "Polynomial.Basic",
          "name": "polypow",
          "normalized": "[a]-\u003eb-\u003e[a]",
          "package": "dsp",
          "signature": "[a]-\u003eb-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Polynomial-Basic.html#v:polypow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale a polynomial\n\u003c/p\u003e",
          "module": "Polynomial.Basic",
          "name": "polyscale",
          "package": "dsp",
          "signature": "a -\u003e [a] -\u003e [a]",
          "source": "src/Polynomial-Basic.html#polyscale",
          "type": "function"
        },
        "index": {
          "description": "Scale polynomial",
          "hierarchy": "Polynomial Basic",
          "module": "Polynomial.Basic",
          "name": "polyscale",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Polynomial-Basic.html#v:polyscale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtract two polynomials\n\u003c/p\u003e",
          "module": "Polynomial.Basic",
          "name": "polysub",
          "package": "dsp",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Polynomial-Basic.html#polysub",
          "type": "function"
        },
        "index": {
          "description": "Subtract two polynomials",
          "hierarchy": "Polynomial Basic",
          "module": "Polynomial.Basic",
          "name": "polysub",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Polynomial-Basic.html#v:polysub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolynomial substitution y(n) = x(w(n))\n\u003c/p\u003e",
          "module": "Polynomial.Basic",
          "name": "polysubst",
          "package": "dsp",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Polynomial-Basic.html#polysubst",
          "type": "function"
        },
        "index": {
          "description": "Polynomial substitution",
          "hierarchy": "Polynomial Basic",
          "module": "Polynomial.Basic",
          "name": "polysubst",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Polynomial-Basic.html#v:polysubst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Polynomial.Basic",
          "name": "polysubstAlt",
          "package": "dsp",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Polynomial-Basic.html#polysubstAlt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Polynomial Basic",
          "module": "Polynomial.Basic",
          "name": "polysubstAlt",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "dsp",
          "partial": "Alt",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Polynomial-Basic.html#v:polysubstAlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert roots to a polynomial\n\u003c/p\u003e",
          "module": "Polynomial.Basic",
          "name": "roots2poly",
          "package": "dsp",
          "signature": "[a] -\u003e [a]",
          "source": "src/Polynomial-Basic.html#roots2poly",
          "type": "function"
        },
        "index": {
          "description": "Convert roots to polynomial",
          "hierarchy": "Polynomial Basic",
          "module": "Polynomial.Basic",
          "name": "roots2poly",
          "normalized": "[a]-\u003e[a]",
          "package": "dsp",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Polynomial-Basic.html#v:roots2poly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple module for generating Chebyshev polynomials\n\u003c/p\u003e\u003cpre\u003eT_0(x) = 1\u003c/pre\u003e\u003cpre\u003eT_1(x) = x\u003c/pre\u003e\u003cpre\u003eT_N+1(x) = 2x T_N(x) - T_N-1(x)\u003c/pre\u003e\u003c/div\u003e",
          "module": "Polynomial.Chebyshev",
          "name": "Chebyshev",
          "package": "dsp",
          "source": "src/Polynomial-Chebyshev.html",
          "type": "module"
        },
        "index": {
          "description": "Simple module for generating Chebyshev polynomials N-1",
          "hierarchy": "Polynomial Chebyshev",
          "module": "Polynomial.Chebyshev",
          "name": "Chebyshev",
          "package": "dsp",
          "partial": "Chebyshev",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Polynomial-Chebyshev.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egenerates Chebyshev polynomials\n\u003c/p\u003e",
          "module": "Polynomial.Chebyshev",
          "name": "cheby",
          "package": "dsp",
          "signature": "a-\u003e [b]",
          "type": "function"
        },
        "index": {
          "description": "generates Chebyshev polynomials",
          "hierarchy": "Polynomial Chebyshev",
          "module": "Polynomial.Chebyshev",
          "name": "cheby",
          "normalized": "a-\u003e[b]",
          "package": "dsp",
          "signature": "a-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Polynomial-Chebyshev.html#v:cheby"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple module for generating Maclaurin series representation of a few\n functions:\n\u003c/p\u003e\u003cpre\u003ef(x) = sum [ a_i * x^i | i \u003c- [0..] ]\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003eInt\u003c/code\u003e parameter for all functions is the \u003cem\u003eorder\u003c/em\u003e of the polynomial,\n eg:\n\u003c/p\u003e\u003cpre\u003e[ a_i | i \u003c- [0..N] ]\u003c/pre\u003e\u003cp\u003eand not the number of non-zero terms\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Polynomial.Maclaurin",
          "name": "Maclaurin",
          "package": "dsp",
          "source": "src/Polynomial-Maclaurin.html",
          "type": "module"
        },
        "index": {
          "description": "Simple module for generating Maclaurin series representation of few functions sum The Int parameter for all functions is the order of the polynomial eg and not the number of non-zero terms",
          "hierarchy": "Polynomial Maclaurin",
          "module": "Polynomial.Maclaurin",
          "name": "Maclaurin",
          "package": "dsp",
          "partial": "Maclaurin",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Polynomial-Maclaurin.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eatan x, -1 \u003c x \u003c 1\n\u003c/p\u003e",
          "module": "Polynomial.Maclaurin",
          "name": "polyatan",
          "package": "dsp",
          "signature": "Int -\u003e [Double]",
          "source": "src/Polynomial-Maclaurin.html#polyatan",
          "type": "function"
        },
        "index": {
          "description": "atan",
          "hierarchy": "Polynomial Maclaurin",
          "module": "Polynomial.Maclaurin",
          "name": "polyatan",
          "normalized": "Int-\u003e[Double]",
          "package": "dsp",
          "signature": "Int-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Polynomial-Maclaurin.html#v:polyatan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eatanh x\n\u003c/p\u003e",
          "module": "Polynomial.Maclaurin",
          "name": "polyatanh",
          "package": "dsp",
          "signature": "Int -\u003e [Double]",
          "source": "src/Polynomial-Maclaurin.html#polyatanh",
          "type": "function"
        },
        "index": {
          "description": "atanh",
          "hierarchy": "Polynomial Maclaurin",
          "module": "Polynomial.Maclaurin",
          "name": "polyatanh",
          "normalized": "Int-\u003e[Double]",
          "package": "dsp",
          "signature": "Int-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Polynomial-Maclaurin.html#v:polyatanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecos x\n\u003c/p\u003e",
          "module": "Polynomial.Maclaurin",
          "name": "polycos",
          "package": "dsp",
          "signature": "Int -\u003e [Double]",
          "source": "src/Polynomial-Maclaurin.html#polycos",
          "type": "function"
        },
        "index": {
          "description": "cos",
          "hierarchy": "Polynomial Maclaurin",
          "module": "Polynomial.Maclaurin",
          "name": "polycos",
          "normalized": "Int-\u003e[Double]",
          "package": "dsp",
          "signature": "Int-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Polynomial-Maclaurin.html#v:polycos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecosh x\n\u003c/p\u003e",
          "module": "Polynomial.Maclaurin",
          "name": "polycosh",
          "package": "dsp",
          "signature": "Int -\u003e [Double]",
          "source": "src/Polynomial-Maclaurin.html#polycosh",
          "type": "function"
        },
        "index": {
          "description": "cosh",
          "hierarchy": "Polynomial Maclaurin",
          "module": "Polynomial.Maclaurin",
          "name": "polycosh",
          "normalized": "Int-\u003e[Double]",
          "package": "dsp",
          "signature": "Int-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Polynomial-Maclaurin.html#v:polycosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ee^x\n\u003c/p\u003e",
          "module": "Polynomial.Maclaurin",
          "name": "polyexp",
          "package": "dsp",
          "signature": "Int -\u003e [Double]",
          "source": "src/Polynomial-Maclaurin.html#polyexp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Polynomial Maclaurin",
          "module": "Polynomial.Maclaurin",
          "name": "polyexp",
          "normalized": "Int-\u003e[Double]",
          "package": "dsp",
          "signature": "Int-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Polynomial-Maclaurin.html#v:polyexp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eln (1+x), 0 \u003c= x \u003c= 1\n\u003c/p\u003e",
          "module": "Polynomial.Maclaurin",
          "name": "polyln1",
          "package": "dsp",
          "signature": "Int -\u003e [Double]",
          "source": "src/Polynomial-Maclaurin.html#polyln1",
          "type": "function"
        },
        "index": {
          "description": "ln",
          "hierarchy": "Polynomial Maclaurin",
          "module": "Polynomial.Maclaurin",
          "name": "polyln1",
          "normalized": "Int-\u003e[Double]",
          "package": "dsp",
          "signature": "Int-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Polynomial-Maclaurin.html#v:polyln1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esin x\n\u003c/p\u003e",
          "module": "Polynomial.Maclaurin",
          "name": "polysin",
          "package": "dsp",
          "signature": "Int -\u003e [Double]",
          "source": "src/Polynomial-Maclaurin.html#polysin",
          "type": "function"
        },
        "index": {
          "description": "sin",
          "hierarchy": "Polynomial Maclaurin",
          "module": "Polynomial.Maclaurin",
          "name": "polysin",
          "normalized": "Int-\u003e[Double]",
          "package": "dsp",
          "signature": "Int-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Polynomial-Maclaurin.html#v:polysin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esinh x\n\u003c/p\u003e",
          "module": "Polynomial.Maclaurin",
          "name": "polysinh",
          "package": "dsp",
          "signature": "Int -\u003e [Double]",
          "source": "src/Polynomial-Maclaurin.html#polysinh",
          "type": "function"
        },
        "index": {
          "description": "sinh",
          "hierarchy": "Polynomial Maclaurin",
          "module": "Polynomial.Maclaurin",
          "name": "polysinh",
          "normalized": "Int-\u003e[Double]",
          "package": "dsp",
          "signature": "Int-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Polynomial-Maclaurin.html#v:polysinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRoot finder using Laguerre's method\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Polynomial.Roots",
          "name": "Roots",
          "package": "dsp",
          "source": "src/Polynomial-Roots.html",
          "type": "module"
        },
        "index": {
          "description": "Root finder using Laguerre method",
          "hierarchy": "Polynomial Roots",
          "module": "Polynomial.Roots",
          "name": "Roots",
          "package": "dsp",
          "partial": "Roots",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Polynomial-Roots.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoot finder using Laguerre's method\n\u003c/p\u003e",
          "module": "Polynomial.Roots",
          "name": "roots",
          "package": "dsp",
          "signature": "a-\u003e Int-\u003e [Complex a]-\u003e [Complex a]",
          "type": "function"
        },
        "index": {
          "description": "Root finder using Laguerre method",
          "hierarchy": "Polynomial Roots",
          "module": "Polynomial.Roots",
          "name": "roots",
          "normalized": "a-\u003eInt-\u003e[Complex a]-\u003e[Complex a]",
          "package": "dsp",
          "signature": "a-\u003eInt-\u003e[Complex a]-\u003e[Complex a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dsp/docs/Polynomial-Roots.html#v:roots"
      }
    }
  ]
]