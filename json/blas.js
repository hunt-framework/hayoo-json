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
        "word": "blas"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVector operations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Elem.BLAS.Level1",
          "name": "Level1",
          "package": "blas",
          "source": "src/Data-Elem-BLAS-Level1.html",
          "type": "module"
        },
        "index": {
          "description": "Vector operations",
          "hierarchy": "Data Elem BLAS Level1",
          "module": "Data.Elem.BLAS.Level1",
          "name": "Level1",
          "package": "blas",
          "partial": "Level",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level1.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes with vector-vector operations.\n\u003c/p\u003e",
          "module": "Data.Elem.BLAS.Level1",
          "name": "BLAS1",
          "package": "blas",
          "source": "src/Data-Elem-BLAS-Level1.html#BLAS1",
          "type": "class"
        },
        "index": {
          "description": "Types with vector-vector operations",
          "hierarchy": "Data Elem BLAS Level1",
          "module": "Data.Elem.BLAS.Level1",
          "name": "BLAS1",
          "package": "blas",
          "partial": "BLAS",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level1.html#t:BLAS1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplaces \u003ccode\u003ey\u003c/code\u003e with \u003ccode\u003ealpha (conj x) + y\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Elem.BLAS.Level1",
          "name": "acxpy",
          "package": "blas",
          "signature": "Int -\u003e a -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level1.html#acxpy",
          "type": "method"
        },
        "index": {
          "description": "Replaces with alpha conj",
          "hierarchy": "Data Elem BLAS Level1",
          "module": "Data.Elem.BLAS.Level1",
          "name": "acxpy",
          "normalized": "Int-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "signature": "Int-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level1.html#v:acxpy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Elem.BLAS.Level1",
          "name": "asum",
          "package": "blas",
          "signature": "Int -\u003e Ptr a -\u003e Int -\u003e IO Double",
          "source": "src/Data-Elem-BLAS-Level1.html#asum",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Elem BLAS Level1",
          "module": "Data.Elem.BLAS.Level1",
          "name": "asum",
          "normalized": "Int-\u003ePtr a-\u003eInt-\u003eIO Double",
          "package": "blas",
          "signature": "Int-\u003ePtr a-\u003eInt-\u003eIO Double",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level1.html#v:asum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Elem.BLAS.Level1",
          "name": "axpy",
          "package": "blas",
          "signature": "Int -\u003e a -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level1.html#axpy",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Elem BLAS Level1",
          "module": "Data.Elem.BLAS.Level1",
          "name": "axpy",
          "normalized": "Int-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "signature": "Int-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level1.html#v:axpy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Elem.BLAS.Level1",
          "name": "copy",
          "package": "blas",
          "signature": "Int -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level1.html#copy",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Elem BLAS Level1",
          "module": "Data.Elem.BLAS.Level1",
          "name": "copy",
          "normalized": "Int-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "signature": "Int-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level1.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Elem.BLAS.Level1",
          "name": "dot",
          "package": "blas",
          "signature": "ConjEnum -\u003e ConjEnum -\u003e Int -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e IO a",
          "source": "src/Data-Elem-BLAS-Level1.html#dot",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Elem BLAS Level1",
          "module": "Data.Elem.BLAS.Level1",
          "name": "dot",
          "normalized": "ConjEnum-\u003eConjEnum-\u003eInt-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO a",
          "package": "blas",
          "signature": "ConjEnum-\u003eConjEnum-\u003eInt-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level1.html#v:dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Elem.BLAS.Level1",
          "name": "iamax",
          "package": "blas",
          "signature": "Int -\u003e Ptr a -\u003e Int -\u003e IO Int",
          "source": "src/Data-Elem-BLAS-Level1.html#iamax",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Elem BLAS Level1",
          "module": "Data.Elem.BLAS.Level1",
          "name": "iamax",
          "normalized": "Int-\u003ePtr a-\u003eInt-\u003eIO Int",
          "package": "blas",
          "signature": "Int-\u003ePtr a-\u003eInt-\u003eIO Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level1.html#v:iamax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Elem.BLAS.Level1",
          "name": "nrm2",
          "package": "blas",
          "signature": "Int -\u003e Ptr a -\u003e Int -\u003e IO Double",
          "source": "src/Data-Elem-BLAS-Level1.html#nrm2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Elem BLAS Level1",
          "module": "Data.Elem.BLAS.Level1",
          "name": "nrm2",
          "normalized": "Int-\u003ePtr a-\u003eInt-\u003eIO Double",
          "package": "blas",
          "signature": "Int-\u003ePtr a-\u003eInt-\u003eIO Double",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level1.html#v:nrm2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Elem.BLAS.Level1",
          "name": "rot",
          "package": "blas",
          "signature": "Int -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e Double -\u003e Double -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level1.html#rot",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Elem BLAS Level1",
          "module": "Data.Elem.BLAS.Level1",
          "name": "rot",
          "normalized": "Int-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eDouble-\u003eDouble-\u003eIO()",
          "package": "blas",
          "signature": "Int-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eDouble-\u003eDouble-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level1.html#v:rot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Elem.BLAS.Level1",
          "name": "rotg",
          "package": "blas",
          "signature": "Ptr a -\u003e Ptr a -\u003e Ptr a -\u003e Ptr a -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level1.html#rotg",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Elem BLAS Level1",
          "module": "Data.Elem.BLAS.Level1",
          "name": "rotg",
          "normalized": "Ptr a-\u003ePtr a-\u003ePtr a-\u003ePtr a-\u003eIO()",
          "package": "blas",
          "signature": "Ptr a-\u003ePtr a-\u003ePtr a-\u003ePtr a-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level1.html#v:rotg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Elem.BLAS.Level1",
          "name": "scal",
          "package": "blas",
          "signature": "Int -\u003e a -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level1.html#scal",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Elem BLAS Level1",
          "module": "Data.Elem.BLAS.Level1",
          "name": "scal",
          "normalized": "Int-\u003ea-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "signature": "Int-\u003ea-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level1.html#v:scal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Elem.BLAS.Level1",
          "name": "swap",
          "package": "blas",
          "signature": "Int -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level1.html#swap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Elem BLAS Level1",
          "module": "Data.Elem.BLAS.Level1",
          "name": "swap",
          "normalized": "Int-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "signature": "Int-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level1.html#v:swap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplaces \u003ccode\u003ey\u003c/code\u003e with \u003ccode\u003ey/conj(x)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Elem.BLAS.Level1",
          "name": "vcdiv",
          "package": "blas",
          "signature": "Int -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level1.html#vcdiv",
          "type": "method"
        },
        "index": {
          "description": "Replaces with conj",
          "hierarchy": "Data Elem BLAS Level1",
          "module": "Data.Elem.BLAS.Level1",
          "name": "vcdiv",
          "normalized": "Int-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "signature": "Int-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level1.html#v:vcdiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplaces \u003ccode\u003ey\u003c/code\u003e with \u003ccode\u003econj(x)*y\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Elem.BLAS.Level1",
          "name": "vcmul",
          "package": "blas",
          "signature": "Int -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level1.html#vcmul",
          "type": "method"
        },
        "index": {
          "description": "Replaces with conj",
          "hierarchy": "Data Elem BLAS Level1",
          "module": "Data.Elem.BLAS.Level1",
          "name": "vcmul",
          "normalized": "Int-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "signature": "Int-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level1.html#v:vcmul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplaces \u003ccode\u003ey\u003c/code\u003e with \u003ccode\u003econj y\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Elem.BLAS.Level1",
          "name": "vconj",
          "package": "blas",
          "signature": "Int -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level1.html#vconj",
          "type": "method"
        },
        "index": {
          "description": "Replaces with conj",
          "hierarchy": "Data Elem BLAS Level1",
          "module": "Data.Elem.BLAS.Level1",
          "name": "vconj",
          "normalized": "Int-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "signature": "Int-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level1.html#v:vconj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplaces \u003ccode\u003ey\u003c/code\u003e with \u003ccode\u003ey/x\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Elem.BLAS.Level1",
          "name": "vdiv",
          "package": "blas",
          "signature": "Int -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level1.html#vdiv",
          "type": "method"
        },
        "index": {
          "description": "Replaces with",
          "hierarchy": "Data Elem BLAS Level1",
          "module": "Data.Elem.BLAS.Level1",
          "name": "vdiv",
          "normalized": "Int-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "signature": "Int-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level1.html#v:vdiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplaces \u003ccode\u003ey\u003c/code\u003e with \u003ccode\u003ex*y\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Elem.BLAS.Level1",
          "name": "vmul",
          "package": "blas",
          "signature": "Int -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level1.html#vmul",
          "type": "method"
        },
        "index": {
          "description": "Replaces with",
          "hierarchy": "Data Elem BLAS Level1",
          "module": "Data.Elem.BLAS.Level1",
          "name": "vmul",
          "normalized": "Int-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "signature": "Int-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level1.html#v:vmul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMatrix-Vector operations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Elem.BLAS.Level2",
          "name": "Level2",
          "package": "blas",
          "source": "src/Data-Elem-BLAS-Level2.html",
          "type": "module"
        },
        "index": {
          "description": "Matrix-Vector operations",
          "hierarchy": "Data Elem BLAS Level2",
          "module": "Data.Elem.BLAS.Level2",
          "name": "Level2",
          "package": "blas",
          "partial": "Level",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level2.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes with matrix-vector operations.\n\u003c/p\u003e",
          "module": "Data.Elem.BLAS.Level2",
          "name": "BLAS2",
          "package": "blas",
          "source": "src/Data-Elem-BLAS-Level2.html#BLAS2",
          "type": "class"
        },
        "index": {
          "description": "Types with matrix-vector operations",
          "hierarchy": "Data Elem BLAS Level2",
          "module": "Data.Elem.BLAS.Level2",
          "name": "BLAS2",
          "package": "blas",
          "partial": "BLAS",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level2.html#t:BLAS2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Elem.BLAS.Level2",
          "name": "gbmv",
          "package": "blas",
          "signature": "TransEnum -\u003e Int -\u003e Int -\u003e Int -\u003e Int -\u003e a -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e a -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level2.html#gbmv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Elem BLAS Level2",
          "module": "Data.Elem.BLAS.Level2",
          "name": "gbmv",
          "normalized": "TransEnum-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "signature": "TransEnum-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level2.html#v:gbmv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Elem.BLAS.Level2",
          "name": "gemv",
          "package": "blas",
          "signature": "TransEnum -\u003e Int -\u003e Int -\u003e a -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e a -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level2.html#gemv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Elem BLAS Level2",
          "module": "Data.Elem.BLAS.Level2",
          "name": "gemv",
          "normalized": "TransEnum-\u003eInt-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "signature": "TransEnum-\u003eInt-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level2.html#v:gemv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Elem.BLAS.Level2",
          "name": "gerc",
          "package": "blas",
          "signature": "Int -\u003e Int -\u003e a -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level2.html#gerc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Elem BLAS Level2",
          "module": "Data.Elem.BLAS.Level2",
          "name": "gerc",
          "normalized": "Int-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "signature": "Int-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level2.html#v:gerc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Elem.BLAS.Level2",
          "name": "geru",
          "package": "blas",
          "signature": "Int -\u003e Int -\u003e a -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level2.html#geru",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Elem BLAS Level2",
          "module": "Data.Elem.BLAS.Level2",
          "name": "geru",
          "normalized": "Int-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "signature": "Int-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level2.html#v:geru"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Elem.BLAS.Level2",
          "name": "hbmv",
          "package": "blas",
          "signature": "UpLoEnum -\u003e Int -\u003e Int -\u003e a -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e a -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level2.html#hbmv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Elem BLAS Level2",
          "module": "Data.Elem.BLAS.Level2",
          "name": "hbmv",
          "normalized": "UpLoEnum-\u003eInt-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "signature": "UpLoEnum-\u003eInt-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level2.html#v:hbmv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Elem.BLAS.Level2",
          "name": "hemv",
          "package": "blas",
          "signature": "UpLoEnum -\u003e Int -\u003e a -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e a -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level2.html#hemv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Elem BLAS Level2",
          "module": "Data.Elem.BLAS.Level2",
          "name": "hemv",
          "normalized": "UpLoEnum-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "signature": "UpLoEnum-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level2.html#v:hemv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Elem.BLAS.Level2",
          "name": "her",
          "package": "blas",
          "signature": "UpLoEnum -\u003e Int -\u003e a -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level2.html#her",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Elem BLAS Level2",
          "module": "Data.Elem.BLAS.Level2",
          "name": "her",
          "normalized": "UpLoEnum-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "signature": "UpLoEnum-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level2.html#v:her"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Elem.BLAS.Level2",
          "name": "her2",
          "package": "blas",
          "signature": "UpLoEnum -\u003e Int -\u003e a -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level2.html#her2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Elem BLAS Level2",
          "module": "Data.Elem.BLAS.Level2",
          "name": "her2",
          "normalized": "UpLoEnum-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "signature": "UpLoEnum-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level2.html#v:her2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Elem.BLAS.Level2",
          "name": "tbmv",
          "package": "blas",
          "signature": "UpLoEnum -\u003e TransEnum -\u003e DiagEnum -\u003e Int -\u003e Int -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level2.html#tbmv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Elem BLAS Level2",
          "module": "Data.Elem.BLAS.Level2",
          "name": "tbmv",
          "normalized": "UpLoEnum-\u003eTransEnum-\u003eDiagEnum-\u003eInt-\u003eInt-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "signature": "UpLoEnum-\u003eTransEnum-\u003eDiagEnum-\u003eInt-\u003eInt-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level2.html#v:tbmv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Elem.BLAS.Level2",
          "name": "tbsv",
          "package": "blas",
          "signature": "UpLoEnum -\u003e TransEnum -\u003e DiagEnum -\u003e Int -\u003e Int -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level2.html#tbsv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Elem BLAS Level2",
          "module": "Data.Elem.BLAS.Level2",
          "name": "tbsv",
          "normalized": "UpLoEnum-\u003eTransEnum-\u003eDiagEnum-\u003eInt-\u003eInt-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "signature": "UpLoEnum-\u003eTransEnum-\u003eDiagEnum-\u003eInt-\u003eInt-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level2.html#v:tbsv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Elem.BLAS.Level2",
          "name": "trmv",
          "package": "blas",
          "signature": "UpLoEnum -\u003e TransEnum -\u003e DiagEnum -\u003e Int -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level2.html#trmv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Elem BLAS Level2",
          "module": "Data.Elem.BLAS.Level2",
          "name": "trmv",
          "normalized": "UpLoEnum-\u003eTransEnum-\u003eDiagEnum-\u003eInt-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "signature": "UpLoEnum-\u003eTransEnum-\u003eDiagEnum-\u003eInt-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level2.html#v:trmv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Elem.BLAS.Level2",
          "name": "trsv",
          "package": "blas",
          "signature": "UpLoEnum -\u003e TransEnum -\u003e DiagEnum -\u003e Int -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level2.html#trsv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Elem BLAS Level2",
          "module": "Data.Elem.BLAS.Level2",
          "name": "trsv",
          "normalized": "UpLoEnum-\u003eTransEnum-\u003eDiagEnum-\u003eInt-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "signature": "UpLoEnum-\u003eTransEnum-\u003eDiagEnum-\u003eInt-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level2.html#v:trsv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMatrix-Matrix operations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Elem.BLAS.Level3",
          "name": "Level3",
          "package": "blas",
          "source": "src/Data-Elem-BLAS-Level3.html",
          "type": "module"
        },
        "index": {
          "description": "Matrix-Matrix operations",
          "hierarchy": "Data Elem BLAS Level3",
          "module": "Data.Elem.BLAS.Level3",
          "name": "Level3",
          "package": "blas",
          "partial": "Level",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level3.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes with matrix-matrix operations.        \n\u003c/p\u003e",
          "module": "Data.Elem.BLAS.Level3",
          "name": "BLAS3",
          "package": "blas",
          "source": "src/Data-Elem-BLAS-Level3.html#BLAS3",
          "type": "class"
        },
        "index": {
          "description": "Types with matrix-matrix operations",
          "hierarchy": "Data Elem BLAS Level3",
          "module": "Data.Elem.BLAS.Level3",
          "name": "BLAS3",
          "package": "blas",
          "partial": "BLAS",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level3.html#t:BLAS3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Elem.BLAS.Level3",
          "name": "gemm",
          "package": "blas",
          "signature": "TransEnum -\u003e TransEnum -\u003e Int -\u003e Int -\u003e Int -\u003e a -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e a -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level3.html#gemm",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Elem BLAS Level3",
          "module": "Data.Elem.BLAS.Level3",
          "name": "gemm",
          "normalized": "TransEnum-\u003eTransEnum-\u003eInt-\u003eInt-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "signature": "TransEnum-\u003eTransEnum-\u003eInt-\u003eInt-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level3.html#v:gemm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Elem.BLAS.Level3",
          "name": "hemm",
          "package": "blas",
          "signature": "SideEnum -\u003e UpLoEnum -\u003e Int -\u003e Int -\u003e a -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e a -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level3.html#hemm",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Elem BLAS Level3",
          "module": "Data.Elem.BLAS.Level3",
          "name": "hemm",
          "normalized": "SideEnum-\u003eUpLoEnum-\u003eInt-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "signature": "SideEnum-\u003eUpLoEnum-\u003eInt-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level3.html#v:hemm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Elem.BLAS.Level3",
          "name": "her2k",
          "package": "blas",
          "signature": "UpLoEnum -\u003e TransEnum -\u003e Int -\u003e Int -\u003e a -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e a -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level3.html#her2k",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Elem BLAS Level3",
          "module": "Data.Elem.BLAS.Level3",
          "name": "her2k",
          "normalized": "UpLoEnum-\u003eTransEnum-\u003eInt-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "signature": "UpLoEnum-\u003eTransEnum-\u003eInt-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level3.html#v:her2k"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Elem.BLAS.Level3",
          "name": "herk",
          "package": "blas",
          "signature": "UpLoEnum -\u003e TransEnum -\u003e Int -\u003e Int -\u003e a -\u003e Ptr a -\u003e Int -\u003e a -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level3.html#herk",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Elem BLAS Level3",
          "module": "Data.Elem.BLAS.Level3",
          "name": "herk",
          "normalized": "UpLoEnum-\u003eTransEnum-\u003eInt-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "signature": "UpLoEnum-\u003eTransEnum-\u003eInt-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level3.html#v:herk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Elem.BLAS.Level3",
          "name": "symm",
          "package": "blas",
          "signature": "SideEnum -\u003e UpLoEnum -\u003e Int -\u003e Int -\u003e a -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e a -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level3.html#symm",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Elem BLAS Level3",
          "module": "Data.Elem.BLAS.Level3",
          "name": "symm",
          "normalized": "SideEnum-\u003eUpLoEnum-\u003eInt-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "signature": "SideEnum-\u003eUpLoEnum-\u003eInt-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level3.html#v:symm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Elem.BLAS.Level3",
          "name": "syr2k",
          "package": "blas",
          "signature": "UpLoEnum -\u003e TransEnum -\u003e Int -\u003e Int -\u003e a -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e a -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level3.html#syr2k",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Elem BLAS Level3",
          "module": "Data.Elem.BLAS.Level3",
          "name": "syr2k",
          "normalized": "UpLoEnum-\u003eTransEnum-\u003eInt-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "signature": "UpLoEnum-\u003eTransEnum-\u003eInt-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level3.html#v:syr2k"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Elem.BLAS.Level3",
          "name": "syrk",
          "package": "blas",
          "signature": "UpLoEnum -\u003e TransEnum -\u003e Int -\u003e Int -\u003e a -\u003e Ptr a -\u003e Int -\u003e a -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level3.html#syrk",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Elem BLAS Level3",
          "module": "Data.Elem.BLAS.Level3",
          "name": "syrk",
          "normalized": "UpLoEnum-\u003eTransEnum-\u003eInt-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "signature": "UpLoEnum-\u003eTransEnum-\u003eInt-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level3.html#v:syrk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Elem.BLAS.Level3",
          "name": "trmm",
          "package": "blas",
          "signature": "SideEnum -\u003e UpLoEnum -\u003e TransEnum -\u003e DiagEnum -\u003e Int -\u003e Int -\u003e a -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level3.html#trmm",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Elem BLAS Level3",
          "module": "Data.Elem.BLAS.Level3",
          "name": "trmm",
          "normalized": "SideEnum-\u003eUpLoEnum-\u003eTransEnum-\u003eDiagEnum-\u003eInt-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "signature": "SideEnum-\u003eUpLoEnum-\u003eTransEnum-\u003eDiagEnum-\u003eInt-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level3.html#v:trmm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Elem.BLAS.Level3",
          "name": "trsm",
          "package": "blas",
          "signature": "SideEnum -\u003e UpLoEnum -\u003e TransEnum -\u003e DiagEnum -\u003e Int -\u003e Int -\u003e a -\u003e Ptr a -\u003e Int -\u003e Ptr a -\u003e Int -\u003e IO ()",
          "source": "src/Data-Elem-BLAS-Level3.html#trsm",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Elem BLAS Level3",
          "module": "Data.Elem.BLAS.Level3",
          "name": "trsm",
          "normalized": "SideEnum-\u003eUpLoEnum-\u003eTransEnum-\u003eDiagEnum-\u003eInt-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "signature": "SideEnum-\u003eUpLoEnum-\u003eTransEnum-\u003eDiagEnum-\u003eInt-\u003eInt-\u003ea-\u003ePtr a-\u003eInt-\u003ePtr a-\u003eInt-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS-Level3.html#v:trsm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType classes for elements with BLAS support.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Elem.BLAS",
          "name": "BLAS",
          "package": "blas",
          "source": "src/Data-Elem-BLAS.html",
          "type": "module"
        },
        "index": {
          "description": "Type classes for elements with BLAS support",
          "hierarchy": "Data Elem BLAS",
          "module": "Data.Elem.BLAS",
          "name": "BLAS",
          "package": "blas",
          "partial": "BLAS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes with vector-vector operations.\n\u003c/p\u003e",
          "module": "Data.Elem.BLAS",
          "name": "BLAS1",
          "package": "blas",
          "source": "src/Data-Elem-BLAS-Level1.html#BLAS1",
          "type": "class"
        },
        "index": {
          "description": "Types with vector-vector operations",
          "hierarchy": "Data Elem BLAS",
          "module": "Data.Elem.BLAS",
          "name": "BLAS1",
          "package": "blas",
          "partial": "BLAS",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS.html#t:BLAS1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes with matrix-vector operations.\n\u003c/p\u003e",
          "module": "Data.Elem.BLAS",
          "name": "BLAS2",
          "package": "blas",
          "source": "src/Data-Elem-BLAS-Level2.html#BLAS2",
          "type": "class"
        },
        "index": {
          "description": "Types with matrix-vector operations",
          "hierarchy": "Data Elem BLAS",
          "module": "Data.Elem.BLAS",
          "name": "BLAS2",
          "package": "blas",
          "partial": "BLAS",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS.html#t:BLAS2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes with matrix-matrix operations.        \n\u003c/p\u003e",
          "module": "Data.Elem.BLAS",
          "name": "BLAS3",
          "package": "blas",
          "source": "src/Data-Elem-BLAS-Level3.html#BLAS3",
          "type": "class"
        },
        "index": {
          "description": "Types with matrix-matrix operations",
          "hierarchy": "Data Elem BLAS",
          "module": "Data.Elem.BLAS",
          "name": "BLAS3",
          "package": "blas",
          "partial": "BLAS",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS.html#t:BLAS3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe base class for elements.\n\u003c/p\u003e",
          "module": "Data.Elem.BLAS",
          "name": "Elem",
          "package": "blas",
          "source": "src/Data-Elem-BLAS-Base.html#Elem",
          "type": "class"
        },
        "index": {
          "description": "The base class for elements",
          "hierarchy": "Data Elem BLAS",
          "module": "Data.Elem.BLAS",
          "name": "Elem",
          "package": "blas",
          "partial": "Elem",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS.html#t:Elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the complex conjugate of a value.\n\u003c/p\u003e",
          "module": "Data.Elem.BLAS",
          "name": "conjugate",
          "package": "blas",
          "signature": "e -\u003e e",
          "source": "src/Data-Elem-BLAS-Base.html#conjugate",
          "type": "method"
        },
        "index": {
          "description": "Get the complex conjugate of value",
          "hierarchy": "Data Elem BLAS",
          "module": "Data.Elem.BLAS",
          "name": "conjugate",
          "normalized": "a-\u003ea",
          "package": "blas",
          "signature": "e-\u003ee",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS.html#v:conjugate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a double to an element.\n\u003c/p\u003e",
          "module": "Data.Elem.BLAS",
          "name": "fromReal",
          "package": "blas",
          "signature": "Double -\u003e e",
          "source": "src/Data-Elem-BLAS-Base.html#fromReal",
          "type": "method"
        },
        "index": {
          "description": "Convert double to an element",
          "hierarchy": "Data Elem BLAS",
          "module": "Data.Elem.BLAS",
          "name": "fromReal",
          "normalized": "Double-\u003ea",
          "package": "blas",
          "partial": "Real",
          "signature": "Double-\u003ee",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS.html#v:fromReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to coerce a value to a double.  This will fail unless the\n complex part is zero (according to a comparison by \u003ccode\u003e(~==)\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Elem.BLAS",
          "name": "maybeToReal",
          "package": "blas",
          "signature": "e -\u003e Maybe Double",
          "source": "src/Data-Elem-BLAS-Base.html#maybeToReal",
          "type": "method"
        },
        "index": {
          "description": "Try to coerce value to double This will fail unless the complex part is zero according to comparison by",
          "hierarchy": "Data Elem BLAS",
          "module": "Data.Elem.BLAS",
          "name": "maybeToReal",
          "normalized": "a-\u003eMaybe Double",
          "package": "blas",
          "partial": "To Real",
          "signature": "e-\u003eMaybe Double",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS.html#v:maybeToReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the magnitude of a value.\n\u003c/p\u003e",
          "module": "Data.Elem.BLAS",
          "name": "norm",
          "package": "blas",
          "signature": "e -\u003e Double",
          "source": "src/Data-Elem-BLAS-Base.html#norm",
          "type": "method"
        },
        "index": {
          "description": "Get the magnitude of value",
          "hierarchy": "Data Elem BLAS",
          "module": "Data.Elem.BLAS",
          "name": "norm",
          "normalized": "a-\u003eDouble",
          "package": "blas",
          "signature": "e-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS.html#v:norm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the l1 norm of a value.\n\u003c/p\u003e",
          "module": "Data.Elem.BLAS",
          "name": "norm1",
          "package": "blas",
          "signature": "e -\u003e Double",
          "source": "src/Data-Elem-BLAS-Base.html#norm1",
          "type": "method"
        },
        "index": {
          "description": "Get the l1 norm of value",
          "hierarchy": "Data Elem BLAS",
          "module": "Data.Elem.BLAS",
          "name": "norm1",
          "normalized": "a-\u003eDouble",
          "package": "blas",
          "signature": "e-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Elem-BLAS.html#v:norm1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn overloaded interface to mutable banded matrices.  For matrix types\n than can be used with this interface, see \u003ca\u003eData.Matrix.Banded.IO\u003c/a\u003e and\n \u003ca\u003eData.Matrix.Banded.ST\u003c/a\u003e.  Many of these functions can also be used with\n the immutable type defined in \u003ca\u003eData.Matrix.Banded\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "Class",
          "package": "blas",
          "source": "src/Data-Matrix-Banded-Class.html",
          "type": "module"
        },
        "index": {
          "description": "An overloaded interface to mutable banded matrices For matrix types than can be used with this interface see Data.Matrix.Banded.IO and Data.Matrix.Banded.ST Many of these functions can also be used with the immutable type defined in Data.Matrix.Banded",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "Class",
          "package": "blas",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommon functionality for all banded matrix types.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "BaseBanded",
          "package": "blas",
          "source": "src/Data-Matrix-Banded-Base.html#BaseBanded",
          "type": "class"
        },
        "index": {
          "description": "Common functionality for all banded matrix types",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "BaseBanded",
          "package": "blas",
          "partial": "Base Banded",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#t:BaseBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBanded matrices that can be read in a monad.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "ReadBanded",
          "package": "blas",
          "source": "src/Data-Matrix-Banded-Base.html#ReadBanded",
          "type": "class"
        },
        "index": {
          "description": "Banded matrices that can be read in monad",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "ReadBanded",
          "package": "blas",
          "partial": "Read Banded",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#t:ReadBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBanded matrices that can be created or modified in a monad.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "WriteBanded",
          "package": "blas",
          "source": "src/Data-Matrix-Banded-Base.html#WriteBanded",
          "type": "class"
        },
        "index": {
          "description": "Banded matrices that can be created or modified in monad",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "WriteBanded",
          "package": "blas",
          "partial": "Write Banded",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#t:WriteBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the range of valid diagonals in the banded matrix.\n \u003ccode\u003ebandwidthds a\u003c/code\u003e is equal to \u003ccode\u003e(numLower a, numUpper a)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "bandwidths",
          "package": "blas",
          "signature": "a (n, p) e -\u003e (Int, Int)",
          "source": "src/Data-Matrix-Banded-Base.html#bandwidths",
          "type": "method"
        },
        "index": {
          "description": "Get the range of valid diagonals in the banded matrix bandwidthds is equal to numLower numUpper",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "bandwidths",
          "normalized": "a(b,c)d-\u003e(Int,Int)",
          "package": "blas",
          "signature": "a(n,p)e-\u003e(Int,Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:bandwidths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast the shape type of the banded matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "coerceBanded",
          "package": "blas",
          "signature": "a np e -\u003e a np' e",
          "source": "src/Data-Matrix-Banded-Base.html#coerceBanded",
          "type": "method"
        },
        "index": {
          "description": "Cast the shape type of the banded matrix",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "coerceBanded",
          "normalized": "a b c-\u003ea d c",
          "package": "blas",
          "partial": "Banded",
          "signature": "a np e-\u003ea np' e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:coerceBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a view into the partial column of the banded matrix, along with the\n number of zeros to pad before and after the view.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "colViewBanded",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Int -\u003e (Int, VectorView a k e, Int)",
          "source": "src/Data-Matrix-Banded-Base.html#colViewBanded",
          "type": "function"
        },
        "index": {
          "description": "Get view into the partial column of the banded matrix along with the number of zeros to pad before and after the view",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "colViewBanded",
          "normalized": "a(b,c)d-\u003eInt-\u003e(Int,VectorView a e d,Int)",
          "package": "blas",
          "partial": "View Banded",
          "signature": "a(n,p)e-\u003eInt-\u003e(Int,VectorView a k e,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:colViewBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the elements of one banded matrix into another.  The two matrices\n must have the same shape and badwidths.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "copyBanded",
          "package": "blas",
          "signature": "b (n, p) e -\u003e a (n, p) e -\u003e m ()",
          "source": "src/Data-Matrix-Banded-Base.html#copyBanded",
          "type": "function"
        },
        "index": {
          "description": "Copy the elements of one banded matrix into another The two matrices must have the same shape and badwidths",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "copyBanded",
          "normalized": "a(b,c)d-\u003ee(b,c)d-\u003ef()",
          "package": "blas",
          "partial": "Banded",
          "signature": "b(n,p)e-\u003ea(n,p)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:copyBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a view of a diagonal of the banded matrix.  This will fail if\n the index is outside of the bandwidth.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "diagViewBanded",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Int -\u003e VectorView a k e",
          "source": "src/Data-Matrix-Banded-Base.html#diagViewBanded",
          "type": "function"
        },
        "index": {
          "description": "Get view of diagonal of the banded matrix This will fail if the index is outside of the bandwidth",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "diagViewBanded",
          "normalized": "a(b,c)d-\u003eInt-\u003eVectorView a e d",
          "package": "blas",
          "partial": "View Banded",
          "signature": "a(n,p)e-\u003eInt-\u003eVectorView a k e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:diagViewBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a mutable banded matrix to an immutable one by taking a \n complete copy of it.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "freezeBanded",
          "package": "blas",
          "signature": "a (n, p) e -\u003e m (Banded (n, p) e)",
          "source": "src/Data-Matrix-Banded-Base.html#freezeBanded",
          "type": "method"
        },
        "index": {
          "description": "Convert mutable banded matrix to an immutable one by taking complete copy of it",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "freezeBanded",
          "normalized": "a(b,c)d-\u003ee(Banded(b,c)d)",
          "package": "blas",
          "partial": "Banded",
          "signature": "a(n,p)e-\u003em(Banded(n,p)e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:freezeBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a copy of the given diagonal of a banded matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "getDiagBanded",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Int -\u003e m (y k e)",
          "source": "src/Data-Matrix-Banded-Base.html#getDiagBanded",
          "type": "function"
        },
        "index": {
          "description": "Get copy of the given diagonal of banded matrix",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "getDiagBanded",
          "normalized": "a(b,c)d-\u003eInt-\u003ee(f g d)",
          "package": "blas",
          "partial": "Diag Banded",
          "signature": "a(n,p)e-\u003eInt-\u003em(y k e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:getDiagBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicate whether or not the banded matrix storage is \n transposed and conjugated.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "isHermBanded",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Bool",
          "source": "src/Data-Matrix-Banded-Base.html#isHermBanded",
          "type": "method"
        },
        "index": {
          "description": "Indicate whether or not the banded matrix storage is transposed and conjugated",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "isHermBanded",
          "normalized": "a(b,c)d-\u003eBool",
          "package": "blas",
          "partial": "Herm Banded",
          "signature": "a(n,p)e-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:isHermBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the leading dimension of the underlying storage of the\n banded matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "ldaBanded",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Int",
          "source": "src/Data-Matrix-Banded-Base.html#ldaBanded",
          "type": "method"
        },
        "index": {
          "description": "Get the leading dimension of the underlying storage of the banded matrix",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "ldaBanded",
          "normalized": "a(b,c)d-\u003eInt",
          "package": "blas",
          "partial": "Banded",
          "signature": "a(n,p)e-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:ldaBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a shape and bandwidths, possibly view the elements stored\n in a dense matrix as a banded matrix.  This will if the matrix\n storage is hermed.  An error will be called if the number of rows\n in the matrix does not equal the desired number of diagonals or\n if the number of columns in the matrix does not equal the desired\n number of columns.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "maybeBandedFromMatrixStorage",
          "package": "blas",
          "signature": "(Int, Int) -\u003e (Int, Int) -\u003e MatrixStorage a (k, p) e -\u003e Maybe (a (n, p) e)",
          "source": "src/Data-Matrix-Banded-Base.html#maybeBandedFromMatrixStorage",
          "type": "method"
        },
        "index": {
          "description": "Given shape and bandwidths possibly view the elements stored in dense matrix as banded matrix This will if the matrix storage is hermed An error will be called if the number of rows in the matrix does not equal the desired number of diagonals or if the number of columns in the matrix does not equal the desired number of columns",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "maybeBandedFromMatrixStorage",
          "normalized": "(Int,Int)-\u003e(Int,Int)-\u003eMatrixStorage a(b,c)d-\u003eMaybe(a(e,c)d)",
          "package": "blas",
          "partial": "Banded From Matrix Storage",
          "signature": "(Int,Int)-\u003e(Int,Int)-\u003eMatrixStorage a(k,p)e-\u003eMaybe(a(n,p)e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:maybeBandedFromMatrixStorage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a matrix with the underlying storage of the banded matrix.\n This will fail if the banded matrix is hermed.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "maybeMatrixStorageFromBanded",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Maybe (MatrixStorage a (k, p) e)",
          "source": "src/Data-Matrix-Banded-Base.html#maybeMatrixStorageFromBanded",
          "type": "method"
        },
        "index": {
          "description": "Get matrix with the underlying storage of the banded matrix This will fail if the banded matrix is hermed",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "maybeMatrixStorageFromBanded",
          "normalized": "a(b,c)d-\u003eMaybe(MatrixStorage a(e,c)d)",
          "package": "blas",
          "partial": "Matrix Storage From Banded",
          "signature": "a(n,p)e-\u003eMaybe(MatrixStorage a(k,p)e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:maybeMatrixStorageFromBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the banded matrix has only a single diagonal, return a view\n into that diagonal.  Otherwise, return \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "maybeViewBandedAsVector",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Maybe (VectorView a k e)",
          "source": "src/Data-Matrix-Banded-Base.html#maybeViewBandedAsVector",
          "type": "method"
        },
        "index": {
          "description": "If the banded matrix has only single diagonal return view into that diagonal Otherwise return Nothing",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "maybeViewBandedAsVector",
          "normalized": "a(b,c)d-\u003eMaybe(VectorView a e d)",
          "package": "blas",
          "partial": "View Banded As Vector",
          "signature": "a(n,p)e-\u003eMaybe(VectorView a k e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:maybeViewBandedAsVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a banded matrix with the given shape, bandwidths, and \n associations.  The indices in the associations list must all fall\n in the bandwidth of the matrix.  Unspecified elements will be set\n to zero.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "newBanded",
          "package": "blas",
          "signature": "(Int, Int) -\u003e (Int, Int) -\u003e [((Int, Int), e)] -\u003e m (a (n, p) e)",
          "source": "src/Data-Matrix-Banded-Base.html#newBanded",
          "type": "function"
        },
        "index": {
          "description": "Create banded matrix with the given shape bandwidths and associations The indices in the associations list must all fall in the bandwidth of the matrix Unspecified elements will be set to zero",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "newBanded",
          "normalized": "(Int,Int)-\u003e(Int,Int)-\u003e[((Int,Int),a)]-\u003eb(c(d,e)a)",
          "package": "blas",
          "partial": "Banded",
          "signature": "(Int,Int)-\u003e(Int,Int)-\u003e[((Int,Int),e)]-\u003em(a(n,p)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:newBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new banded matrix of the given shape and bandwidths.  \n The elements will be uninitialized.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "newBanded_",
          "package": "blas",
          "signature": "(Int, Int) -\u003e (Int, Int) -\u003e m (a (n, p) e)",
          "source": "src/Data-Matrix-Banded-Base.html#newBanded_",
          "type": "method"
        },
        "index": {
          "description": "Creates new banded matrix of the given shape and bandwidths The elements will be uninitialized",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "newBanded_",
          "normalized": "(Int,Int)-\u003e(Int,Int)-\u003ea(b(c,d)e)",
          "package": "blas",
          "partial": "Banded",
          "signature": "(Int,Int)-\u003e(Int,Int)-\u003em(a(n,p)e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:newBanded_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a constant banded matrix of the specified shape and bandwidths.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "newConstantBanded",
          "package": "blas",
          "signature": "(Int, Int) -\u003e (Int, Int) -\u003e e -\u003e m (a (n, p) e)",
          "source": "src/Data-Matrix-Banded-Base.html#newConstantBanded",
          "type": "function"
        },
        "index": {
          "description": "Create constant banded matrix of the specified shape and bandwidths",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "newConstantBanded",
          "normalized": "(Int,Int)-\u003e(Int,Int)-\u003ea-\u003eb(c(d,e)a)",
          "package": "blas",
          "partial": "Constant Banded",
          "signature": "(Int,Int)-\u003e(Int,Int)-\u003ee-\u003em(a(n,p)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:newConstantBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new banded matrix by taking a copy of another one.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "newCopyBanded",
          "package": "blas",
          "signature": "a (n, p) e -\u003e m (b (n, p) e)",
          "source": "src/Data-Matrix-Banded-Base.html#newCopyBanded",
          "type": "function"
        },
        "index": {
          "description": "Create new banded matrix by taking copy of another one",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "newCopyBanded",
          "normalized": "a(b,c)d-\u003ee(f(b,c)d)",
          "package": "blas",
          "partial": "Copy Banded",
          "signature": "a(n,p)e-\u003em(b(n,p)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:newCopyBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a banded matrix of the given shape and bandwidths by specifying\n its diagonal elements.  The lists must all have the same length, equal\n to the number of elements in the main diagonal of the matrix.  The \n sub-diagonals are specified first, then the super-diagonals.  In \n subdiagonal \u003ccode\u003ei\u003c/code\u003e, the first \u003ccode\u003ei\u003c/code\u003e elements of the list are ignored.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "newListsBanded",
          "package": "blas",
          "signature": "(Int, Int) -\u003e (Int, Int) -\u003e [[e]] -\u003e m (a (n, p) e)",
          "source": "src/Data-Matrix-Banded-Base.html#newListsBanded",
          "type": "function"
        },
        "index": {
          "description": "Create banded matrix of the given shape and bandwidths by specifying its diagonal elements The lists must all have the same length equal to the number of elements in the main diagonal of the matrix The sub-diagonals are specified first then the super-diagonals In subdiagonal the first elements of the list are ignored",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "newListsBanded",
          "normalized": "(Int,Int)-\u003e(Int,Int)-\u003e[[a]]-\u003eb(c(d,e)a)",
          "package": "blas",
          "partial": "Lists Banded",
          "signature": "(Int,Int)-\u003e(Int,Int)-\u003e[[e]]-\u003em(a(n,p)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:newListsBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a zero banded matrix with the specified shape and bandwidths.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "newZeroBanded",
          "package": "blas",
          "signature": "(Int, Int) -\u003e (Int, Int) -\u003e m (a (n, p) e)",
          "source": "src/Data-Matrix-Banded-Base.html#newZeroBanded",
          "type": "function"
        },
        "index": {
          "description": "Create zero banded matrix with the specified shape and bandwidths",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "newZeroBanded",
          "normalized": "(Int,Int)-\u003e(Int,Int)-\u003ea(b(c,d)e)",
          "package": "blas",
          "partial": "Zero Banded",
          "signature": "(Int,Int)-\u003e(Int,Int)-\u003em(a(n,p)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:newZeroBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the number of lower diagonals in the banded matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "numLower",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Int",
          "source": "src/Data-Matrix-Banded-Base.html#numLower",
          "type": "method"
        },
        "index": {
          "description": "Get the number of lower diagonals in the banded matrix",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "numLower",
          "normalized": "a(b,c)d-\u003eInt",
          "package": "blas",
          "partial": "Lower",
          "signature": "a(n,p)e-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:numLower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the number of upper diagonals in the banded matrix\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "numUpper",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Int",
          "source": "src/Data-Matrix-Banded-Base.html#numUpper",
          "type": "method"
        },
        "index": {
          "description": "Get the number of upper diagonals in the banded matrix",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "numUpper",
          "normalized": "a(b,c)d-\u003eInt",
          "package": "blas",
          "partial": "Upper",
          "signature": "a(n,p)e-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:numUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a view into the partial row of the banded matrix, along with the\n number of zeros to pad before and after the view.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "rowViewBanded",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Int -\u003e (Int, VectorView a k e, Int)",
          "source": "src/Data-Matrix-Banded-Base.html#rowViewBanded",
          "type": "function"
        },
        "index": {
          "description": "Get view into the partial row of the banded matrix along with the number of zeros to pad before and after the view",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "rowViewBanded",
          "normalized": "a(b,c)d-\u003eInt-\u003e(Int,VectorView a e d,Int)",
          "package": "blas",
          "partial": "View Banded",
          "signature": "a(n,p)e-\u003eInt-\u003e(Int,VectorView a k e,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:rowViewBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet every element of a banded matrix to a constant.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "setConstantBanded",
          "package": "blas",
          "signature": "e -\u003e a (n, p) e -\u003e m ()",
          "source": "src/Data-Matrix-Banded-Base.html#setConstantBanded",
          "type": "function"
        },
        "index": {
          "description": "Set every element of banded matrix to constant",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "setConstantBanded",
          "normalized": "a-\u003eb(c,d)a-\u003ee()",
          "package": "blas",
          "partial": "Constant Banded",
          "signature": "e-\u003ea(n,p)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:setConstantBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet every element of a banded matrix to zero.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "setZeroBanded",
          "package": "blas",
          "signature": "a (n, p) e -\u003e m ()",
          "source": "src/Data-Matrix-Banded-Base.html#setZeroBanded",
          "type": "function"
        },
        "index": {
          "description": "Set every element of banded matrix to zero",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "setZeroBanded",
          "normalized": "a(b,c)d-\u003ee()",
          "package": "blas",
          "partial": "Zero Banded",
          "signature": "a(n,p)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:setZeroBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an immutable banded matrix to a mutable one by taking a \n complete copy of it.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "thawBanded",
          "package": "blas",
          "signature": "Banded (n, p) e -\u003e m (a (n, p) e)",
          "source": "src/Data-Matrix-Banded-Base.html#thawBanded",
          "type": "method"
        },
        "index": {
          "description": "Convert an immutable banded matrix to mutable one by taking complete copy of it",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "thawBanded",
          "normalized": "Banded(a,b)c-\u003ed(e(a,b)c)",
          "package": "blas",
          "partial": "Banded",
          "signature": "Banded(n,p)e-\u003em(a(n,p)e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:thawBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the storage type of the banded matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "transEnumBanded",
          "package": "blas",
          "signature": "a (n, p) e -\u003e TransEnum",
          "source": "src/Data-Matrix-Banded-Base.html#transEnumBanded",
          "type": "method"
        },
        "index": {
          "description": "Get the storage type of the banded matrix",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "transEnumBanded",
          "normalized": "a(b,c)d-\u003eTransEnum",
          "package": "blas",
          "partial": "Enum Banded",
          "signature": "a(n,p)e-\u003eTransEnum",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:transEnumBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafe cast from a matrix to an \u003ccode\u003e\u003ca\u003eIOBanded\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "unsafeBandedToIOBanded",
          "package": "blas",
          "signature": "a (n, p) e -\u003e IOBanded (n, p) e",
          "source": "src/Data-Matrix-Banded-Base.html#unsafeBandedToIOBanded",
          "type": "method"
        },
        "index": {
          "description": "Unsafe cast from matrix to an IOBanded",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "unsafeBandedToIOBanded",
          "normalized": "a(b,c)d-\u003eIOBanded(b,c)d",
          "package": "blas",
          "partial": "Banded To IOBanded",
          "signature": "a(n,p)e-\u003eIOBanded(n,p)e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:unsafeBandedToIOBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafely convert an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action that creates an \u003ccode\u003e\u003ca\u003eIOBanded\u003c/a\u003e\u003c/code\u003e into\n an action in \u003ccode\u003em\u003c/code\u003e that creates a matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "unsafeConvertIOBanded",
          "package": "blas",
          "signature": "IO (IOBanded (n, p) e) -\u003e m (a (n, p) e)",
          "source": "src/Data-Matrix-Banded-Base.html#unsafeConvertIOBanded",
          "type": "method"
        },
        "index": {
          "description": "Unsafely convert an IO action that creates an IOBanded into an action in that creates matrix",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "unsafeConvertIOBanded",
          "normalized": "IO(IOBanded(a,b)c)-\u003ed(e(a,b)c)",
          "package": "blas",
          "partial": "Convert IOBanded",
          "signature": "IO(IOBanded(n,p)e)-\u003em(a(n,p)e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:unsafeConvertIOBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Matrix.Banded.Class",
          "name": "unsafeFreezeBanded",
          "package": "blas",
          "signature": "a (n, p) e -\u003e m (Banded (n, p) e)",
          "source": "src/Data-Matrix-Banded-Base.html#unsafeFreezeBanded",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "unsafeFreezeBanded",
          "normalized": "a(b,c)d-\u003ee(Banded(b,c)d)",
          "package": "blas",
          "partial": "Freeze Banded",
          "signature": "a(n,p)e-\u003em(Banded(n,p)e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:unsafeFreezeBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast the banded matrix to an \u003ccode\u003e\u003ca\u003eIOBanded\u003c/a\u003e\u003c/code\u003e, perform an \u003ccode\u003eIO\u003c/code\u003e action, and\n convert the \u003ccode\u003eIO\u003c/code\u003e action to an action in the monad \u003ccode\u003em\u003c/code\u003e.  This\n operation is \u003cem\u003every\u003c/em\u003e unsafe.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "unsafePerformIOWithBanded",
          "package": "blas",
          "signature": "a (n, p) e -\u003e (IOBanded (n, p) e -\u003e IO r) -\u003e m r",
          "source": "src/Data-Matrix-Banded-Base.html#unsafePerformIOWithBanded",
          "type": "method"
        },
        "index": {
          "description": "Cast the banded matrix to an IOBanded perform an IO action and convert the IO action to an action in the monad This operation is very unsafe",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "unsafePerformIOWithBanded",
          "normalized": "a(b,c)d-\u003e(IOBanded(b,c)d-\u003eIO e)-\u003ef e",
          "package": "blas",
          "partial": "Perform IOWith Banded",
          "signature": "a(n,p)e-\u003e(IOBanded(n,p)e-\u003eIO r)-\u003em r",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:unsafePerformIOWithBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Matrix.Banded.Class",
          "name": "unsafeThawBanded",
          "package": "blas",
          "signature": "Banded (n, p) e -\u003e m (a (n, p) e)",
          "source": "src/Data-Matrix-Banded-Base.html#unsafeThawBanded",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "unsafeThawBanded",
          "normalized": "Banded(a,b)c-\u003ed(e(a,b)c)",
          "package": "blas",
          "partial": "Thaw Banded",
          "signature": "Banded(n,p)e-\u003em(a(n,p)e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:unsafeThawBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eView a vector as a banded matrix of the given shape.  The vector\n must have length equal to one of the specified dimensions.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "viewVectorAsBanded",
          "package": "blas",
          "signature": "(Int, Int) -\u003e VectorView a k e -\u003e a (n, p) e",
          "source": "src/Data-Matrix-Banded-Base.html#viewVectorAsBanded",
          "type": "method"
        },
        "index": {
          "description": "View vector as banded matrix of the given shape The vector must have length equal to one of the specified dimensions",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "viewVectorAsBanded",
          "normalized": "(Int,Int)-\u003eVectorView a b c-\u003ea(d,e)c",
          "package": "blas",
          "partial": "Vector As Banded",
          "signature": "(Int,Int)-\u003eVectorView a k e-\u003ea(n,p)e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:viewVectorAsBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eView a vector as a diagonal banded matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.Class",
          "name": "viewVectorAsDiagBanded",
          "package": "blas",
          "signature": "VectorView a n e -\u003e a (n, n) e",
          "source": "src/Data-Matrix-Banded-Base.html#viewVectorAsDiagBanded",
          "type": "method"
        },
        "index": {
          "description": "View vector as diagonal banded matrix",
          "hierarchy": "Data Matrix Banded Class",
          "module": "Data.Matrix.Banded.Class",
          "name": "viewVectorAsDiagBanded",
          "normalized": "VectorView a b c-\u003ea(b,b)c",
          "package": "blas",
          "partial": "Vector As Diag Banded",
          "signature": "VectorView a n e-\u003ea(n,n)e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-Class.html#v:viewVectorAsDiagBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable banded matrices in the IO monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Matrix.Banded.IO",
          "name": "IO",
          "package": "blas",
          "source": "src/Data-Matrix-Banded-IO.html",
          "type": "module"
        },
        "index": {
          "description": "Mutable banded matrices in the IO monad",
          "hierarchy": "Data Matrix Banded IO",
          "module": "Data.Matrix.Banded.IO",
          "name": "IO",
          "package": "blas",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBanded matrix in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.  The type arguments are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003enp\u003c/code\u003e: a phantom type for the shape of the matrix.  Most functions\n       will demand that this be specified as a pair.  When writing a function\n       signature, you should always prefer \u003ccode\u003eIOBanded (n,p) e\u003c/code\u003e to\n       \u003ccode\u003eIOBanded np e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ee\u003c/code\u003e: the element type of the matrix.  Only certain element types\n       are supported.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Matrix.Banded.IO",
          "name": "IOBanded",
          "package": "blas",
          "source": "src/Data-Matrix-Banded-IOBase.html#IOBanded",
          "type": "data"
        },
        "index": {
          "description": "Banded matrix in the IO monad The type arguments are as follows np phantom type for the shape of the matrix Most functions will demand that this be specified as pair When writing function signature you should always prefer IOBanded to IOBanded np the element type of the matrix Only certain element types are supported",
          "hierarchy": "Data Matrix Banded IO",
          "module": "Data.Matrix.Banded.IO",
          "name": "IOBanded",
          "package": "blas",
          "partial": "IOBanded",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-IO.html#t:IOBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action with a pointer to the first element in the\n banded matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.IO",
          "name": "withIOBanded",
          "package": "blas",
          "signature": "IOBanded (n, p) e -\u003e (Ptr e -\u003e IO a) -\u003e IO a",
          "source": "src/Data-Matrix-Banded-IOBase.html#withIOBanded",
          "type": "function"
        },
        "index": {
          "description": "Execute an IO action with pointer to the first element in the banded matrix",
          "hierarchy": "Data Matrix Banded IO",
          "module": "Data.Matrix.Banded.IO",
          "name": "withIOBanded",
          "normalized": "IOBanded(a,b)c-\u003e(Ptr c-\u003eIO d)-\u003eIO d",
          "package": "blas",
          "partial": "IOBanded",
          "signature": "IOBanded(n,p)e-\u003e(Ptr e-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-IO.html#v:withIOBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable dense matrices in the ST monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Matrix.Banded.ST",
          "name": "ST",
          "package": "blas",
          "source": "src/Data-Matrix-Banded-ST.html",
          "type": "module"
        },
        "index": {
          "description": "Mutable dense matrices in the ST monad",
          "hierarchy": "Data Matrix Banded ST",
          "module": "Data.Matrix.Banded.ST",
          "name": "ST",
          "package": "blas",
          "partial": "ST",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-ST.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBanded matrix in the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.  The type arguments are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003es\u003c/code\u003e: the state variable argument for the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e type\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003enp\u003c/code\u003e: a phantom type for the shape of the matrix.  Most functions\n       will demand that this be specified as a pair.  When writing a function\n       signature, you should always prefer \u003ccode\u003eSTBanded s (n,p) e\u003c/code\u003e to\n       \u003ccode\u003eSTBanded s np e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ee\u003c/code\u003e: the element type of the matrix.  Only certain element types\n       are supported.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Matrix.Banded.ST",
          "name": "STBanded",
          "package": "blas",
          "source": "src/Data-Matrix-Banded-STBase.html#STBanded",
          "type": "data"
        },
        "index": {
          "description": "Banded matrix in the ST monad The type arguments are as follows the state variable argument for the ST type np phantom type for the shape of the matrix Most functions will demand that this be specified as pair When writing function signature you should always prefer STBanded to STBanded np the element type of the matrix Only certain element types are supported",
          "hierarchy": "Data Matrix Banded ST",
          "module": "Data.Matrix.Banded.ST",
          "name": "STBanded",
          "package": "blas",
          "partial": "STBanded",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-ST.html#t:STBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA safe way to create and work with a mutable banded matrix before returning \n an immutable one for later perusal. This function avoids copying\n the matrix before returning it - it uses unsafeFreezeBanded internally,\n but this wrapper is a safe interface to that function. \n\u003c/p\u003e",
          "module": "Data.Matrix.Banded.ST",
          "name": "runSTBanded",
          "package": "blas",
          "signature": "(forall s.  ST s (STBanded s n e)) -\u003e Banded n e",
          "source": "src/Data-Matrix-Banded-STBase.html#runSTBanded",
          "type": "function"
        },
        "index": {
          "description": "safe way to create and work with mutable banded matrix before returning an immutable one for later perusal This function avoids copying the matrix before returning it it uses unsafeFreezeBanded internally but this wrapper is safe interface to that function",
          "hierarchy": "Data Matrix Banded ST",
          "module": "Data.Matrix.Banded.ST",
          "name": "runSTBanded",
          "normalized": "(a b ST c(STBanded c d e))-\u003eBanded d e",
          "package": "blas",
          "partial": "STBanded",
          "signature": "(forall s. ST s(STBanded s n e))-\u003eBanded n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded-ST.html#v:runSTBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImmutable banded matrices.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Matrix.Banded",
          "name": "Banded",
          "package": "blas",
          "source": "src/Data-Matrix-Banded.html",
          "type": "module"
        },
        "index": {
          "description": "Immutable banded matrices",
          "hierarchy": "Data Matrix Banded",
          "module": "Data.Matrix.Banded",
          "name": "Banded",
          "package": "blas",
          "partial": "Banded",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImmutable banded matrices.  The type arguments are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003enp\u003c/code\u003e: a phantom type for the shape of the matrix.  Most functions\n       will demand that this be specified as a pair.  When writing a function\n       signature, you should always prefer \u003ccode\u003eBanded (n,p) e\u003c/code\u003e to\n       \u003ccode\u003eBanded np e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ee\u003c/code\u003e: the element type of the matrix.  Only certain element types\n       are supported.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Matrix.Banded",
          "name": "Banded",
          "package": "blas",
          "source": "src/Data-Matrix-Banded-Base.html#Banded",
          "type": "data"
        },
        "index": {
          "description": "Immutable banded matrices The type arguments are as follows np phantom type for the shape of the matrix Most functions will demand that this be specified as pair When writing function signature you should always prefer Banded to Banded np the element type of the matrix Only certain element types are supported",
          "hierarchy": "Data Matrix Banded",
          "module": "Data.Matrix.Banded",
          "name": "Banded",
          "package": "blas",
          "partial": "Banded",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded.html#t:Banded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommon functionality for all banded matrix types.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded",
          "name": "BaseBanded",
          "package": "blas",
          "source": "src/Data-Matrix-Banded-Base.html#BaseBanded",
          "type": "class"
        },
        "index": {
          "description": "Common functionality for all banded matrix types",
          "hierarchy": "Data Matrix Banded",
          "module": "Data.Matrix.Banded",
          "name": "BaseBanded",
          "package": "blas",
          "partial": "Base Banded",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded.html#t:BaseBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a banded matrix with the given shape, bandwidths, and \n associations.  The indices in the associations list must all fall\n in the bandwidth of the matrix.  Unspecified elements will be set\n to zero.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded",
          "name": "banded",
          "package": "blas",
          "signature": "(Int, Int) -\u003e (Int, Int) -\u003e [((Int, Int), e)] -\u003e Banded (n, p) e",
          "source": "src/Data-Matrix-Banded-Base.html#banded",
          "type": "function"
        },
        "index": {
          "description": "Create banded matrix with the given shape bandwidths and associations The indices in the associations list must all fall in the bandwidth of the matrix Unspecified elements will be set to zero",
          "hierarchy": "Data Matrix Banded",
          "module": "Data.Matrix.Banded",
          "name": "banded",
          "normalized": "(Int,Int)-\u003e(Int,Int)-\u003e[((Int,Int),a)]-\u003eBanded(b,c)a",
          "package": "blas",
          "signature": "(Int,Int)-\u003e(Int,Int)-\u003e[((Int,Int),e)]-\u003eBanded(n,p)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded.html#v:banded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a banded matrix from a vector.  The vector must have length\n equal to one of the specified dimension sizes.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded",
          "name": "bandedFromVector",
          "package": "blas",
          "signature": "(Int, Int) -\u003e Vector k e -\u003e Banded (n, p) e",
          "source": "src/Data-Matrix-Banded-Base.html#bandedFromVector",
          "type": "function"
        },
        "index": {
          "description": "Create banded matrix from vector The vector must have length equal to one of the specified dimension sizes",
          "hierarchy": "Data Matrix Banded",
          "module": "Data.Matrix.Banded",
          "name": "bandedFromVector",
          "normalized": "(Int,Int)-\u003eVector a b-\u003eBanded(c,d)b",
          "package": "blas",
          "partial": "From Vector",
          "signature": "(Int,Int)-\u003eVector k e-\u003eBanded(n,p)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded.html#v:bandedFromVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the range of valid diagonals in the banded matrix.\n \u003ccode\u003ebandwidthds a\u003c/code\u003e is equal to \u003ccode\u003e(numLower a, numUpper a)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded",
          "name": "bandwidths",
          "package": "blas",
          "signature": "a (n, p) e -\u003e (Int, Int)",
          "source": "src/Data-Matrix-Banded-Base.html#bandwidths",
          "type": "method"
        },
        "index": {
          "description": "Get the range of valid diagonals in the banded matrix bandwidthds is equal to numLower numUpper",
          "hierarchy": "Data Matrix Banded",
          "module": "Data.Matrix.Banded",
          "name": "bandwidths",
          "normalized": "a(b,c)d-\u003e(Int,Int)",
          "package": "blas",
          "signature": "a(n,p)e-\u003e(Int,Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded.html#v:bandwidths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast the shape type of the banded matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded",
          "name": "coerceBanded",
          "package": "blas",
          "signature": "a np e -\u003e a np' e",
          "source": "src/Data-Matrix-Banded-Base.html#coerceBanded",
          "type": "method"
        },
        "index": {
          "description": "Cast the shape type of the banded matrix",
          "hierarchy": "Data Matrix Banded",
          "module": "Data.Matrix.Banded",
          "name": "coerceBanded",
          "normalized": "a b c-\u003ea d c",
          "package": "blas",
          "partial": "Banded",
          "signature": "a np e-\u003ea np' e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded.html#v:coerceBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a constant banded matrix of the specified shape and bandwidths.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded",
          "name": "constantBanded",
          "package": "blas",
          "signature": "(Int, Int) -\u003e (Int, Int) -\u003e e -\u003e Banded (n, p) e",
          "source": "src/Data-Matrix-Banded-Base.html#constantBanded",
          "type": "function"
        },
        "index": {
          "description": "Create constant banded matrix of the specified shape and bandwidths",
          "hierarchy": "Data Matrix Banded",
          "module": "Data.Matrix.Banded",
          "name": "constantBanded",
          "normalized": "(Int,Int)-\u003e(Int,Int)-\u003ea-\u003eBanded(b,c)a",
          "package": "blas",
          "partial": "Banded",
          "signature": "(Int,Int)-\u003e(Int,Int)-\u003ee-\u003eBanded(n,p)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded.html#v:constantBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a the given diagonal in a banded matrix.  Negative indices correspond \n to sub-diagonals.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded",
          "name": "diagBanded",
          "package": "blas",
          "signature": "Banded (n, p) e -\u003e Int -\u003e Vector k e",
          "source": "src/Data-Matrix-Banded-Base.html#diagBanded",
          "type": "function"
        },
        "index": {
          "description": "Get the given diagonal in banded matrix Negative indices correspond to sub-diagonals",
          "hierarchy": "Data Matrix Banded",
          "module": "Data.Matrix.Banded",
          "name": "diagBanded",
          "normalized": "Banded(a,b)c-\u003eInt-\u003eVector d c",
          "package": "blas",
          "partial": "Banded",
          "signature": "Banded(n,p)e-\u003eInt-\u003eVector k e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded.html#v:diagBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a diagonal banded matrix from a vector.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded",
          "name": "diagBandedFromVector",
          "package": "blas",
          "signature": "Vector n e -\u003e Banded (n, n) e",
          "source": "src/Data-Matrix-Banded-Base.html#diagBandedFromVector",
          "type": "function"
        },
        "index": {
          "description": "Create diagonal banded matrix from vector",
          "hierarchy": "Data Matrix Banded",
          "module": "Data.Matrix.Banded",
          "name": "diagBandedFromVector",
          "normalized": "Vector a b-\u003eBanded(a,a)b",
          "package": "blas",
          "partial": "Banded From Vector",
          "signature": "Vector n e-\u003eBanded(n,n)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded.html#v:diagBandedFromVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicate whether or not the banded matrix storage is \n transposed and conjugated.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded",
          "name": "isHermBanded",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Bool",
          "source": "src/Data-Matrix-Banded-Base.html#isHermBanded",
          "type": "method"
        },
        "index": {
          "description": "Indicate whether or not the banded matrix storage is transposed and conjugated",
          "hierarchy": "Data Matrix Banded",
          "module": "Data.Matrix.Banded",
          "name": "isHermBanded",
          "normalized": "a(b,c)d-\u003eBool",
          "package": "blas",
          "partial": "Herm Banded",
          "signature": "a(n,p)e-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded.html#v:isHermBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the leading dimension of the underlying storage of the\n banded matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded",
          "name": "ldaBanded",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Int",
          "source": "src/Data-Matrix-Banded-Base.html#ldaBanded",
          "type": "method"
        },
        "index": {
          "description": "Get the leading dimension of the underlying storage of the banded matrix",
          "hierarchy": "Data Matrix Banded",
          "module": "Data.Matrix.Banded",
          "name": "ldaBanded",
          "normalized": "a(b,c)d-\u003eInt",
          "package": "blas",
          "partial": "Banded",
          "signature": "a(n,p)e-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded.html#v:ldaBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a banded matrix of the given shape and bandwidths by specifying\n its diagonal elements.  The lists must all have the same length, equal\n to the number of elements in the main diagonal of the matrix.  The \n sub-diagonals are specified first, then the super-diagonals.  In \n subdiagonal \u003ccode\u003ei\u003c/code\u003e, the first \u003ccode\u003ei\u003c/code\u003e elements of the list are ignored.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded",
          "name": "listsBanded",
          "package": "blas",
          "signature": "(Int, Int) -\u003e (Int, Int) -\u003e [[e]] -\u003e Banded (n, p) e",
          "source": "src/Data-Matrix-Banded-Base.html#listsBanded",
          "type": "function"
        },
        "index": {
          "description": "Create banded matrix of the given shape and bandwidths by specifying its diagonal elements The lists must all have the same length equal to the number of elements in the main diagonal of the matrix The sub-diagonals are specified first then the super-diagonals In subdiagonal the first elements of the list are ignored",
          "hierarchy": "Data Matrix Banded",
          "module": "Data.Matrix.Banded",
          "name": "listsBanded",
          "normalized": "(Int,Int)-\u003e(Int,Int)-\u003e[[a]]-\u003eBanded(b,c)a",
          "package": "blas",
          "partial": "Banded",
          "signature": "(Int,Int)-\u003e(Int,Int)-\u003e[[e]]-\u003eBanded(n,p)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded.html#v:listsBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a shape and bandwidths, possibly view the elements stored\n in a dense matrix as a banded matrix.  This will if the matrix\n storage is hermed.  An error will be called if the number of rows\n in the matrix does not equal the desired number of diagonals or\n if the number of columns in the matrix does not equal the desired\n number of columns.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded",
          "name": "maybeBandedFromMatrixStorage",
          "package": "blas",
          "signature": "(Int, Int) -\u003e (Int, Int) -\u003e MatrixStorage a (k, p) e -\u003e Maybe (a (n, p) e)",
          "source": "src/Data-Matrix-Banded-Base.html#maybeBandedFromMatrixStorage",
          "type": "method"
        },
        "index": {
          "description": "Given shape and bandwidths possibly view the elements stored in dense matrix as banded matrix This will if the matrix storage is hermed An error will be called if the number of rows in the matrix does not equal the desired number of diagonals or if the number of columns in the matrix does not equal the desired number of columns",
          "hierarchy": "Data Matrix Banded",
          "module": "Data.Matrix.Banded",
          "name": "maybeBandedFromMatrixStorage",
          "normalized": "(Int,Int)-\u003e(Int,Int)-\u003eMatrixStorage a(b,c)d-\u003eMaybe(a(e,c)d)",
          "package": "blas",
          "partial": "Banded From Matrix Storage",
          "signature": "(Int,Int)-\u003e(Int,Int)-\u003eMatrixStorage a(k,p)e-\u003eMaybe(a(n,p)e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded.html#v:maybeBandedFromMatrixStorage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a matrix with the underlying storage of the banded matrix.\n This will fail if the banded matrix is hermed.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded",
          "name": "maybeMatrixStorageFromBanded",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Maybe (MatrixStorage a (k, p) e)",
          "source": "src/Data-Matrix-Banded-Base.html#maybeMatrixStorageFromBanded",
          "type": "method"
        },
        "index": {
          "description": "Get matrix with the underlying storage of the banded matrix This will fail if the banded matrix is hermed",
          "hierarchy": "Data Matrix Banded",
          "module": "Data.Matrix.Banded",
          "name": "maybeMatrixStorageFromBanded",
          "normalized": "a(b,c)d-\u003eMaybe(MatrixStorage a(e,c)d)",
          "package": "blas",
          "partial": "Matrix Storage From Banded",
          "signature": "a(n,p)e-\u003eMaybe(MatrixStorage a(k,p)e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded.html#v:maybeMatrixStorageFromBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a diagonal banded matrix to a vector.  Fail if the banded\n matrix has more than one diagonal\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded",
          "name": "maybeVectorFromBanded",
          "package": "blas",
          "signature": "Banded (n, p) e -\u003e Maybe (Vector k e)",
          "source": "src/Data-Matrix-Banded-Base.html#maybeVectorFromBanded",
          "type": "function"
        },
        "index": {
          "description": "Convert diagonal banded matrix to vector Fail if the banded matrix has more than one diagonal",
          "hierarchy": "Data Matrix Banded",
          "module": "Data.Matrix.Banded",
          "name": "maybeVectorFromBanded",
          "normalized": "Banded(a,b)c-\u003eMaybe(Vector d c)",
          "package": "blas",
          "partial": "Vector From Banded",
          "signature": "Banded(n,p)e-\u003eMaybe(Vector k e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded.html#v:maybeVectorFromBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the number of lower diagonals in the banded matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded",
          "name": "numLower",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Int",
          "source": "src/Data-Matrix-Banded-Base.html#numLower",
          "type": "method"
        },
        "index": {
          "description": "Get the number of lower diagonals in the banded matrix",
          "hierarchy": "Data Matrix Banded",
          "module": "Data.Matrix.Banded",
          "name": "numLower",
          "normalized": "a(b,c)d-\u003eInt",
          "package": "blas",
          "partial": "Lower",
          "signature": "a(n,p)e-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded.html#v:numLower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the number of upper diagonals in the banded matrix\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded",
          "name": "numUpper",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Int",
          "source": "src/Data-Matrix-Banded-Base.html#numUpper",
          "type": "method"
        },
        "index": {
          "description": "Get the number of upper diagonals in the banded matrix",
          "hierarchy": "Data Matrix Banded",
          "module": "Data.Matrix.Banded",
          "name": "numUpper",
          "normalized": "a(b,c)d-\u003eInt",
          "package": "blas",
          "partial": "Upper",
          "signature": "a(n,p)e-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded.html#v:numUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the storage type of the banded matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded",
          "name": "transEnumBanded",
          "package": "blas",
          "signature": "a (n, p) e -\u003e TransEnum",
          "source": "src/Data-Matrix-Banded-Base.html#transEnumBanded",
          "type": "method"
        },
        "index": {
          "description": "Get the storage type of the banded matrix",
          "hierarchy": "Data Matrix Banded",
          "module": "Data.Matrix.Banded",
          "name": "transEnumBanded",
          "normalized": "a(b,c)d-\u003eTransEnum",
          "package": "blas",
          "partial": "Enum Banded",
          "signature": "a(n,p)e-\u003eTransEnum",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded.html#v:transEnumBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a zero banded matrix with the specified shape and bandwidths.\n\u003c/p\u003e",
          "module": "Data.Matrix.Banded",
          "name": "zeroBanded",
          "package": "blas",
          "signature": "(Int, Int) -\u003e (Int, Int) -\u003e Banded (n, p) e",
          "source": "src/Data-Matrix-Banded-Base.html#zeroBanded",
          "type": "function"
        },
        "index": {
          "description": "Create zero banded matrix with the specified shape and bandwidths",
          "hierarchy": "Data Matrix Banded",
          "module": "Data.Matrix.Banded",
          "name": "zeroBanded",
          "normalized": "(Int,Int)-\u003e(Int,Int)-\u003eBanded(a,b)c",
          "package": "blas",
          "partial": "Banded",
          "signature": "(Int,Int)-\u003e(Int,Int)-\u003eBanded(n,p)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Banded.html#v:zeroBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn overloaded interface for immutable matrices.  The matrices provide\n access to rows and columns, and can operate via multiplication on \n immutable dense vectors and matrices.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Matrix.Class.IMatrix",
          "name": "IMatrix",
          "package": "blas",
          "source": "src/Data-Matrix-Class-IMatrix.html",
          "type": "module"
        },
        "index": {
          "description": "An overloaded interface for immutable matrices The matrices provide access to rows and columns and can operate via multiplication on immutable dense vectors and matrices",
          "hierarchy": "Data Matrix Class IMatrix",
          "module": "Data.Matrix.Class.IMatrix",
          "name": "IMatrix",
          "package": "blas",
          "partial": "IMatrix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-IMatrix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class for immutable matrices.  The member functions of the\n type class do not perform any checks on the validity of shapes or\n indices, so in general their safe counterparts should be preferred.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.IMatrix",
          "name": "IMatrix",
          "package": "blas",
          "source": "src/Data-Matrix-Class-IMatrixBase.html#IMatrix",
          "type": "class"
        },
        "index": {
          "description": "type class for immutable matrices The member functions of the type class do not perform any checks on the validity of shapes or indices so in general their safe counterparts should be preferred",
          "hierarchy": "Data Matrix Class IMatrix",
          "module": "Data.Matrix.Class.IMatrix",
          "name": "IMatrix",
          "package": "blas",
          "partial": "IMatrix",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-IMatrix.html#t:IMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatrix multiplication by a matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.IMatrix",
          "name": "(\u003c**\u003e)",
          "package": "blas",
          "signature": "a (m, k) e -\u003e Matrix (k, n) e -\u003e Matrix (m, n) e",
          "source": "src/Data-Matrix-Class-IMatrixBase.html#%3C%2A%2A%3E",
          "type": "function"
        },
        "index": {
          "description": "Matrix multiplication by matrix",
          "hierarchy": "Data Matrix Class IMatrix",
          "module": "Data.Matrix.Class.IMatrix",
          "name": "(\u003c**\u003e) \u003c**\u003e",
          "normalized": "a(b,c)d-\u003eMatrix(c,e)d-\u003eMatrix(b,e)d",
          "package": "blas",
          "signature": "a(m,k)e-\u003eMatrix(k,n)e-\u003eMatrix(m,n)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-IMatrix.html#v:-60--42--42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatrix multiplication by a vector.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.IMatrix",
          "name": "(\u003c*\u003e)",
          "package": "blas",
          "signature": "a (m, n) e -\u003e Vector n e -\u003e Vector m e",
          "source": "src/Data-Matrix-Class-IMatrixBase.html#%3C%2A%3E",
          "type": "function"
        },
        "index": {
          "description": "Matrix multiplication by vector",
          "hierarchy": "Data Matrix Class IMatrix",
          "module": "Data.Matrix.Class.IMatrix",
          "name": "(\u003c*\u003e) \u003c*\u003e",
          "normalized": "a(b,c)d-\u003eVector c d-\u003eVector b d",
          "package": "blas",
          "signature": "a(m,n)e-\u003eVector n e-\u003eVector m e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-IMatrix.html#v:-60--42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the given column in a matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.IMatrix",
          "name": "col",
          "package": "blas",
          "signature": "a (m, n) e -\u003e Int -\u003e Vector m e",
          "source": "src/Data-Matrix-Class-IMatrixBase.html#col",
          "type": "function"
        },
        "index": {
          "description": "Get the given column in matrix",
          "hierarchy": "Data Matrix Class IMatrix",
          "module": "Data.Matrix.Class.IMatrix",
          "name": "col",
          "normalized": "a(b,c)d-\u003eInt-\u003eVector b d",
          "package": "blas",
          "signature": "a(m,n)e-\u003eInt-\u003eVector m e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-IMatrix.html#v:col"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list the column vectors in the matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.IMatrix",
          "name": "cols",
          "package": "blas",
          "signature": "a (m, n) e -\u003e [Vector m e]",
          "source": "src/Data-Matrix-Class-IMatrixBase.html#cols",
          "type": "function"
        },
        "index": {
          "description": "Get list the column vectors in the matrix",
          "hierarchy": "Data Matrix Class IMatrix",
          "module": "Data.Matrix.Class.IMatrix",
          "name": "cols",
          "normalized": "a(b,c)d-\u003e[Vector b d]",
          "package": "blas",
          "signature": "a(m,n)e-\u003e[Vector m e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-IMatrix.html#v:cols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the given row in a matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.IMatrix",
          "name": "row",
          "package": "blas",
          "signature": "a (m, n) e -\u003e Int -\u003e Vector n e",
          "source": "src/Data-Matrix-Class-IMatrixBase.html#row",
          "type": "function"
        },
        "index": {
          "description": "Get the given row in matrix",
          "hierarchy": "Data Matrix Class IMatrix",
          "module": "Data.Matrix.Class.IMatrix",
          "name": "row",
          "normalized": "a(b,c)d-\u003eInt-\u003eVector c d",
          "package": "blas",
          "signature": "a(m,n)e-\u003eInt-\u003eVector n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-IMatrix.html#v:row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list the row vectors in the matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.IMatrix",
          "name": "rows",
          "package": "blas",
          "signature": "a (m, n) e -\u003e [Vector n e]",
          "source": "src/Data-Matrix-Class-IMatrixBase.html#rows",
          "type": "function"
        },
        "index": {
          "description": "Get list the row vectors in the matrix",
          "hierarchy": "Data Matrix Class IMatrix",
          "module": "Data.Matrix.Class.IMatrix",
          "name": "rows",
          "normalized": "a(b,c)d-\u003e[Vector c d]",
          "package": "blas",
          "signature": "a(m,n)e-\u003e[Vector n e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-IMatrix.html#v:rows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale and multiply by a vector.  \n \u003ccode\u003esapply k a x\u003c/code\u003e is equal to \u003ccode\u003ea \u003c*\u003e (k *\u003e x)\u003c/code\u003e, and often it is faster.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.IMatrix",
          "name": "sapply",
          "package": "blas",
          "signature": "e -\u003e a (m, n) e -\u003e Vector n e -\u003e Vector m e",
          "source": "src/Data-Matrix-Class-IMatrixBase.html#sapply",
          "type": "function"
        },
        "index": {
          "description": "Scale and multiply by vector sapply is equal to and often it is faster",
          "hierarchy": "Data Matrix Class IMatrix",
          "module": "Data.Matrix.Class.IMatrix",
          "name": "sapply",
          "normalized": "a-\u003eb(c,d)a-\u003eVector d a-\u003eVector c a",
          "package": "blas",
          "signature": "e-\u003ea(m,n)e-\u003eVector n e-\u003eVector m e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-IMatrix.html#v:sapply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale and multiply by a matrix.\n \u003ccode\u003esapplyMat k a b\u003c/code\u003e is equal to \u003ccode\u003ea \u003c**\u003e (k *\u003e b)\u003c/code\u003e, and often it is faster.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.IMatrix",
          "name": "sapplyMat",
          "package": "blas",
          "signature": "e -\u003e a (m, k) e -\u003e Matrix (k, n) e -\u003e Matrix (m, n) e",
          "source": "src/Data-Matrix-Class-IMatrixBase.html#sapplyMat",
          "type": "function"
        },
        "index": {
          "description": "Scale and multiply by matrix sapplyMat is equal to and often it is faster",
          "hierarchy": "Data Matrix Class IMatrix",
          "module": "Data.Matrix.Class.IMatrix",
          "name": "sapplyMat",
          "normalized": "a-\u003eb(c,d)a-\u003eMatrix(d,e)a-\u003eMatrix(c,e)a",
          "package": "blas",
          "partial": "Mat",
          "signature": "e-\u003ea(m,k)e-\u003eMatrix(k,n)e-\u003eMatrix(m,n)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-IMatrix.html#v:sapplyMat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn overloaded interface for solving immutable matrix systems.  The\n matrices can operate via inverse multiplication on immutable dense\n vectors and matrices.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Matrix.Class.ISolve",
          "name": "ISolve",
          "package": "blas",
          "source": "src/Data-Matrix-Class-ISolve.html",
          "type": "module"
        },
        "index": {
          "description": "An overloaded interface for solving immutable matrix systems The matrices can operate via inverse multiplication on immutable dense vectors and matrices",
          "hierarchy": "Data Matrix Class ISolve",
          "module": "Data.Matrix.Class.ISolve",
          "name": "ISolve",
          "package": "blas",
          "partial": "ISolve",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-ISolve.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class for immutable matrices with inverses.  The member\n functions of the type class do not perform any checks on the validity\n of shapes or indices, so in general their safe counterparts should be\n preferred.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.ISolve",
          "name": "ISolve",
          "package": "blas",
          "source": "src/Data-Matrix-Class-ISolveBase.html#ISolve",
          "type": "class"
        },
        "index": {
          "description": "type class for immutable matrices with inverses The member functions of the type class do not perform any checks on the validity of shapes or indices so in general their safe counterparts should be preferred",
          "hierarchy": "Data Matrix Class ISolve",
          "module": "Data.Matrix.Class.ISolve",
          "name": "ISolve",
          "package": "blas",
          "partial": "ISolve",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-ISolve.html#t:ISolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolve for a vector.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.ISolve",
          "name": "(\u003c\\\u003e)",
          "package": "blas",
          "signature": "a (m, n) e -\u003e Vector m e -\u003e Vector n e",
          "source": "src/Data-Matrix-Class-ISolveBase.html#%3C%5C%3E",
          "type": "function"
        },
        "index": {
          "description": "Solve for vector",
          "hierarchy": "Data Matrix Class ISolve",
          "module": "Data.Matrix.Class.ISolve",
          "name": "(\u003c\\\u003e) \u003c\\\u003e",
          "normalized": "a(b,c)d-\u003eVector b d-\u003eVector c d",
          "package": "blas",
          "signature": "a(m,n)e-\u003eVector m e-\u003eVector n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-ISolve.html#v:-60--92--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolve for a matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.ISolve",
          "name": "(\u003c\\\\\u003e)",
          "package": "blas",
          "signature": "a (m, n) e -\u003e Matrix (m, k) e -\u003e Matrix (n, k) e",
          "source": "src/Data-Matrix-Class-ISolveBase.html#%3C%5C%5C%3E",
          "type": "function"
        },
        "index": {
          "description": "Solve for matrix",
          "hierarchy": "Data Matrix Class ISolve",
          "module": "Data.Matrix.Class.ISolve",
          "name": "(\u003c\\\\\u003e) \u003c\\\\\u003e",
          "normalized": "a(b,c)d-\u003eMatrix(b,e)d-\u003eMatrix(c,e)d",
          "package": "blas",
          "signature": "a(m,n)e-\u003eMatrix(m,k)e-\u003eMatrix(n,k)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-ISolve.html#v:-60--92--92--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolve for a vector and scale.\n \u003ccode\u003essolve k a y\u003c/code\u003e is equal to \u003ccode\u003ea \u003c\\\u003e (k *\u003e y)\u003c/code\u003e but is often faster.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.ISolve",
          "name": "ssolve",
          "package": "blas",
          "signature": "e -\u003e a (m, n) e -\u003e Vector m e -\u003e Vector n e",
          "source": "src/Data-Matrix-Class-ISolveBase.html#ssolve",
          "type": "function"
        },
        "index": {
          "description": "Solve for vector and scale ssolve is equal to but is often faster",
          "hierarchy": "Data Matrix Class ISolve",
          "module": "Data.Matrix.Class.ISolve",
          "name": "ssolve",
          "normalized": "a-\u003eb(c,d)a-\u003eVector c a-\u003eVector d a",
          "package": "blas",
          "signature": "e-\u003ea(m,n)e-\u003eVector m e-\u003eVector n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-ISolve.html#v:ssolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolve for a matrix and scale.\n \u003ccode\u003essolveMat k a c\u003c/code\u003e is equal to \u003ccode\u003ea \u003c\\\\\u003e (k *\u003e c)\u003c/code\u003e but is often faster.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.ISolve",
          "name": "ssolveMat",
          "package": "blas",
          "signature": "e -\u003e a (m, n) e -\u003e Matrix (m, k) e -\u003e Matrix (n, k) e",
          "source": "src/Data-Matrix-Class-ISolveBase.html#ssolveMat",
          "type": "function"
        },
        "index": {
          "description": "Solve for matrix and scale ssolveMat is equal to but is often faster",
          "hierarchy": "Data Matrix Class ISolve",
          "module": "Data.Matrix.Class.ISolve",
          "name": "ssolveMat",
          "normalized": "a-\u003eb(c,d)a-\u003eMatrix(c,e)a-\u003eMatrix(d,e)a",
          "package": "blas",
          "partial": "Mat",
          "signature": "e-\u003ea(m,n)e-\u003eMatrix(m,k)e-\u003eMatrix(n,k)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-ISolve.html#v:ssolveMat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn overloaded interface for mutable matrices. The type class associates a\n matrix with a monad type in which operations can be perfomred.  The\n matrices provide access to rows and columns, and can operate via\n multiplication on dense vectors and matrices.  \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "MMatrix",
          "package": "blas",
          "source": "src/Data-Matrix-Class-MMatrix.html",
          "type": "module"
        },
        "index": {
          "description": "An overloaded interface for mutable matrices The type class associates matrix with monad type in which operations can be perfomred The matrices provide access to rows and columns and can operate via multiplication on dense vectors and matrices",
          "hierarchy": "Data Matrix Class MMatrix",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "MMatrix",
          "package": "blas",
          "partial": "MMatrix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MMatrix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class for mutable matrices associated with a monad.  The member\n functions of the type class do not perform any checks on the validity of\n shapes or indices, so in general their safe counterparts should be\n preferred.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "MMatrix",
          "package": "blas",
          "source": "src/Data-Matrix-Dense-Base.html#MMatrix",
          "type": "class"
        },
        "index": {
          "description": "type class for mutable matrices associated with monad The member functions of the type class do not perform any checks on the validity of shapes or indices so in general their safe counterparts should be preferred",
          "hierarchy": "Data Matrix Class MMatrix",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "MMatrix",
          "package": "blas",
          "partial": "MMatrix",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MMatrix.html#t:MMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply to a vector and store the result in another vector\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "doApply",
          "package": "blas",
          "signature": "a (k, l) e -\u003e x l e -\u003e y k e -\u003e m ()",
          "source": "src/Data-Matrix-Class-MMatrixBase.html#doApply",
          "type": "function"
        },
        "index": {
          "description": "Apply to vector and store the result in another vector",
          "hierarchy": "Data Matrix Class MMatrix",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "doApply",
          "normalized": "a(b,c)d-\u003ee c d-\u003ef b d-\u003eg()",
          "package": "blas",
          "partial": "Apply",
          "signature": "a(k,l)e-\u003ex l e-\u003ey k e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MMatrix.html#v:doApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply to a matrix and store the result in another matrix\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "doApplyMat",
          "package": "blas",
          "signature": "a (r, s) e -\u003e b (s, t) e -\u003e c (r, t) e -\u003e m ()",
          "source": "src/Data-Matrix-Class-MMatrixBase.html#doApplyMat",
          "type": "function"
        },
        "index": {
          "description": "Apply to matrix and store the result in another matrix",
          "hierarchy": "Data Matrix Class MMatrix",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "doApplyMat",
          "normalized": "a(b,c)d-\u003ee(c,f)d-\u003eg(b,f)d-\u003eh()",
          "package": "blas",
          "partial": "Apply Mat",
          "signature": "a(r,s)e-\u003eb(s,t)e-\u003ec(r,t)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MMatrix.html#v:doApplyMat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e b := a b\u003c/pre\u003e",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "doApplyMat_",
          "package": "blas",
          "signature": "a (s, s) e -\u003e b (s, t) e -\u003e m ()",
          "source": "src/Data-Matrix-Class-MMatrixBase.html#doApplyMat_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Matrix Class MMatrix",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "doApplyMat_",
          "normalized": "a(b,b)c-\u003ed(b,e)c-\u003ef()",
          "package": "blas",
          "partial": "Apply Mat",
          "signature": "a(s,s)e-\u003eb(s,t)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MMatrix.html#v:doApplyMat_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ex := a x\u003c/pre\u003e",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "doApply_",
          "package": "blas",
          "signature": "a (n, n) e -\u003e y n e -\u003e m ()",
          "source": "src/Data-Matrix-Class-MMatrixBase.html#doApply_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Matrix Class MMatrix",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "doApply_",
          "normalized": "a(b,b)c-\u003ed b c-\u003ee()",
          "package": "blas",
          "partial": "Apply",
          "signature": "a(n,n)e-\u003ey n e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MMatrix.html#v:doApply_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ey := alpha a x + beta y\u003c/pre\u003e",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "doSApplyAdd",
          "package": "blas",
          "signature": "e -\u003e a (k, l) e -\u003e x l e -\u003e e -\u003e y k e -\u003e m ()",
          "source": "src/Data-Matrix-Class-MMatrixBase.html#doSApplyAdd",
          "type": "function"
        },
        "index": {
          "description": "alpha beta",
          "hierarchy": "Data Matrix Class MMatrix",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "doSApplyAdd",
          "normalized": "a-\u003eb(c,d)a-\u003ee d a-\u003ea-\u003ef c a-\u003eg()",
          "package": "blas",
          "partial": "SApply Add",
          "signature": "e-\u003ea(k,l)e-\u003ex l e-\u003ee-\u003ey k e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MMatrix.html#v:doSApplyAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ec := alpha a b + beta c\u003c/pre\u003e",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "doSApplyAddMat",
          "package": "blas",
          "signature": "e -\u003e a (r, s) e -\u003e b (s, t) e -\u003e e -\u003e c (r, t) e -\u003e m ()",
          "source": "src/Data-Matrix-Class-MMatrixBase.html#doSApplyAddMat",
          "type": "function"
        },
        "index": {
          "description": "alpha beta",
          "hierarchy": "Data Matrix Class MMatrix",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "doSApplyAddMat",
          "normalized": "a-\u003eb(c,d)a-\u003ee(d,f)a-\u003ea-\u003eg(c,f)a-\u003eh()",
          "package": "blas",
          "partial": "SApply Add Mat",
          "signature": "e-\u003ea(r,s)e-\u003eb(s,t)e-\u003ee-\u003ec(r,t)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MMatrix.html#v:doSApplyAddMat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e b := alpha a b\u003c/pre\u003e",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "doSApplyMat_",
          "package": "blas",
          "signature": "e -\u003e a (s, s) e -\u003e b (s, t) e -\u003e m ()",
          "source": "src/Data-Matrix-Class-MMatrixBase.html#doSApplyMat_",
          "type": "function"
        },
        "index": {
          "description": "alpha",
          "hierarchy": "Data Matrix Class MMatrix",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "doSApplyMat_",
          "normalized": "a-\u003eb(c,c)a-\u003ed(c,e)a-\u003ef()",
          "package": "blas",
          "partial": "SApply Mat",
          "signature": "e-\u003ea(s,s)e-\u003eb(s,t)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MMatrix.html#v:doSApplyMat_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e x := alpha a x\u003c/pre\u003e",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "doSApply_",
          "package": "blas",
          "signature": "e -\u003e a (n, n) e -\u003e y n e -\u003e m ()",
          "source": "src/Data-Matrix-Class-MMatrixBase.html#doSApply_",
          "type": "function"
        },
        "index": {
          "description": "alpha",
          "hierarchy": "Data Matrix Class MMatrix",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "doSApply_",
          "normalized": "a-\u003eb(c,c)a-\u003ed c a-\u003ee()",
          "package": "blas",
          "partial": "SApply",
          "signature": "e-\u003ea(n,n)e-\u003ey n e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MMatrix.html#v:doSApply_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply to a vector\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "getApply",
          "package": "blas",
          "signature": "a (k, l) e -\u003e x l e -\u003e m (y k e)",
          "source": "src/Data-Matrix-Class-MMatrixBase.html#getApply",
          "type": "function"
        },
        "index": {
          "description": "Apply to vector",
          "hierarchy": "Data Matrix Class MMatrix",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "getApply",
          "normalized": "a(b,c)d-\u003ee c d-\u003ef(g b d)",
          "package": "blas",
          "partial": "Apply",
          "signature": "a(k,l)e-\u003ex l e-\u003em(y k e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MMatrix.html#v:getApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply to a matrix\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "getApplyMat",
          "package": "blas",
          "signature": "a (r, s) e -\u003e b (s, t) e -\u003e m (c (r, t) e)",
          "source": "src/Data-Matrix-Class-MMatrixBase.html#getApplyMat",
          "type": "function"
        },
        "index": {
          "description": "Apply to matrix",
          "hierarchy": "Data Matrix Class MMatrix",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "getApplyMat",
          "normalized": "a(b,c)d-\u003ee(c,f)d-\u003eg(h(b,f)d)",
          "package": "blas",
          "partial": "Apply Mat",
          "signature": "a(r,s)e-\u003eb(s,t)e-\u003em(c(r,t)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MMatrix.html#v:getApplyMat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the given column in a matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "getCol",
          "package": "blas",
          "signature": "a (k, l) e -\u003e Int -\u003e m (x k e)",
          "source": "src/Data-Matrix-Class-MMatrixBase.html#getCol",
          "type": "function"
        },
        "index": {
          "description": "Get the given column in matrix",
          "hierarchy": "Data Matrix Class MMatrix",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "getCol",
          "normalized": "a(b,c)d-\u003eInt-\u003ee(f b d)",
          "package": "blas",
          "partial": "Col",
          "signature": "a(k,l)e-\u003eInt-\u003em(x k e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MMatrix.html#v:getCol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a lazy list of the column vectors in the matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "getCols",
          "package": "blas",
          "signature": "a (k, l) e -\u003e m [x k e]",
          "source": "src/Data-Matrix-Dense-Base.html#getCols",
          "type": "method"
        },
        "index": {
          "description": "Get lazy list of the column vectors in the matrix",
          "hierarchy": "Data Matrix Class MMatrix",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "getCols",
          "normalized": "a(b,c)d-\u003ee[f b d]",
          "package": "blas",
          "partial": "Cols",
          "signature": "a(k,l)e-\u003em[x k e]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MMatrix.html#v:getCols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a strict list of the column vectors in the matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "getCols'",
          "package": "blas",
          "signature": "a (k, l) e -\u003e m [x k e]",
          "source": "src/Data-Matrix-Class-MMatrixBase.html#getCols%27",
          "type": "function"
        },
        "index": {
          "description": "Get strict list of the column vectors in the matrix",
          "hierarchy": "Data Matrix Class MMatrix",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "getCols'",
          "normalized": "a(b,c)d-\u003ee[f b d]",
          "package": "blas",
          "partial": "Cols'",
          "signature": "a(k,l)e-\u003em[x k e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MMatrix.html#v:getCols-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the given row in a matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "getRow",
          "package": "blas",
          "signature": "a (k, l) e -\u003e Int -\u003e m (x l e)",
          "source": "src/Data-Matrix-Class-MMatrixBase.html#getRow",
          "type": "function"
        },
        "index": {
          "description": "Get the given row in matrix",
          "hierarchy": "Data Matrix Class MMatrix",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "getRow",
          "normalized": "a(b,c)d-\u003eInt-\u003ee(f c d)",
          "package": "blas",
          "partial": "Row",
          "signature": "a(k,l)e-\u003eInt-\u003em(x l e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MMatrix.html#v:getRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a lazy list the row vectors in the matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "getRows",
          "package": "blas",
          "signature": "a (k, l) e -\u003e m [x l e]",
          "source": "src/Data-Matrix-Dense-Base.html#getRows",
          "type": "method"
        },
        "index": {
          "description": "Get lazy list the row vectors in the matrix",
          "hierarchy": "Data Matrix Class MMatrix",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "getRows",
          "normalized": "a(b,c)d-\u003ee[f c d]",
          "package": "blas",
          "partial": "Rows",
          "signature": "a(k,l)e-\u003em[x l e]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MMatrix.html#v:getRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a strict list the row vectors in the matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "getRows'",
          "package": "blas",
          "signature": "a (k, l) e -\u003e m [x l e]",
          "source": "src/Data-Matrix-Class-MMatrixBase.html#getRows%27",
          "type": "function"
        },
        "index": {
          "description": "Get strict list the row vectors in the matrix",
          "hierarchy": "Data Matrix Class MMatrix",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "getRows'",
          "normalized": "a(b,c)d-\u003ee[f c d]",
          "package": "blas",
          "partial": "Rows'",
          "signature": "a(k,l)e-\u003em[x l e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MMatrix.html#v:getRows-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale and apply to a vector\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "getSApply",
          "package": "blas",
          "signature": "e -\u003e a (k, l) e -\u003e x l e -\u003e m (y k e)",
          "source": "src/Data-Matrix-Class-MMatrixBase.html#getSApply",
          "type": "function"
        },
        "index": {
          "description": "Scale and apply to vector",
          "hierarchy": "Data Matrix Class MMatrix",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "getSApply",
          "normalized": "a-\u003eb(c,d)a-\u003ee d a-\u003ef(g c a)",
          "package": "blas",
          "partial": "SApply",
          "signature": "e-\u003ea(k,l)e-\u003ex l e-\u003em(y k e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MMatrix.html#v:getSApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale and apply to a matrix\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "getSApplyMat",
          "package": "blas",
          "signature": "e -\u003e a (r, s) e -\u003e b (s, t) e -\u003e m (c (r, t) e)",
          "source": "src/Data-Matrix-Class-MMatrixBase.html#getSApplyMat",
          "type": "function"
        },
        "index": {
          "description": "Scale and apply to matrix",
          "hierarchy": "Data Matrix Class MMatrix",
          "module": "Data.Matrix.Class.MMatrix",
          "name": "getSApplyMat",
          "normalized": "a-\u003eb(c,d)a-\u003ee(d,f)a-\u003eg(h(c,f)a)",
          "package": "blas",
          "partial": "SApply Mat",
          "signature": "e-\u003ea(r,s)e-\u003eb(s,t)e-\u003em(c(r,t)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MMatrix.html#v:getSApplyMat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn overloaded interface for solving matrix systems in a monad.  The\n matrices can operate via inverse multiplication on immutable dense\n vectors and matrices.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Matrix.Class.MSolve",
          "name": "MSolve",
          "package": "blas",
          "source": "src/Data-Matrix-Class-MSolve.html",
          "type": "module"
        },
        "index": {
          "description": "An overloaded interface for solving matrix systems in monad The matrices can operate via inverse multiplication on immutable dense vectors and matrices",
          "hierarchy": "Data Matrix Class MSolve",
          "module": "Data.Matrix.Class.MSolve",
          "name": "MSolve",
          "package": "blas",
          "partial": "MSolve",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MSolve.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class for mutable matrices with inverses.  The member\n functions of the type class do not perform any checks on the validity\n of shapes or indices, so in general their safe counterparts should be\n preferred.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.MSolve",
          "name": "MSolve",
          "package": "blas",
          "source": "src/Data-Matrix-Dense-Base.html#MSolve",
          "type": "class"
        },
        "index": {
          "description": "type class for mutable matrices with inverses The member functions of the type class do not perform any checks on the validity of shapes or indices so in general their safe counterparts should be preferred",
          "hierarchy": "Data Matrix Class MSolve",
          "module": "Data.Matrix.Class.MSolve",
          "name": "MSolve",
          "package": "blas",
          "partial": "MSolve",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MSolve.html#t:MSolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet \u003ccode\u003ex := a^{-1} (alpha y)\u003c/code\u003e.    \n\u003c/p\u003e",
          "module": "Data.Matrix.Class.MSolve",
          "name": "doSSolve",
          "package": "blas",
          "signature": "e -\u003e a (k, l) e -\u003e y k e -\u003e x l e -\u003e m ()",
          "source": "src/Data-Matrix-Class-MSolveBase.html#doSSolve",
          "type": "function"
        },
        "index": {
          "description": "Set alpha",
          "hierarchy": "Data Matrix Class MSolve",
          "module": "Data.Matrix.Class.MSolve",
          "name": "doSSolve",
          "normalized": "a-\u003eb(c,d)a-\u003ee c a-\u003ef d a-\u003eg()",
          "package": "blas",
          "partial": "SSolve",
          "signature": "e-\u003ea(k,l)e-\u003ey k e-\u003ex l e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MSolve.html#v:doSSolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet \u003ccode\u003eb := a^{-1} (alpha c)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.MSolve",
          "name": "doSSolveMat",
          "package": "blas",
          "signature": "e -\u003e a (r, s) e -\u003e c (r, t) e -\u003e b (s, t) e -\u003e m ()",
          "source": "src/Data-Matrix-Class-MSolveBase.html#doSSolveMat",
          "type": "function"
        },
        "index": {
          "description": "Set alpha",
          "hierarchy": "Data Matrix Class MSolve",
          "module": "Data.Matrix.Class.MSolve",
          "name": "doSSolveMat",
          "normalized": "a-\u003eb(c,d)a-\u003ee(c,f)a-\u003eg(d,f)a-\u003eh()",
          "package": "blas",
          "partial": "SSolve Mat",
          "signature": "e-\u003ea(r,s)e-\u003ec(r,t)e-\u003eb(s,t)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MSolve.html#v:doSSolveMat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet \u003ccode\u003eb := a^{-1} (alpha b)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.MSolve",
          "name": "doSSolveMat_",
          "package": "blas",
          "signature": "e -\u003e a (k, k) e -\u003e b (k, l) e -\u003e m ()",
          "source": "src/Data-Matrix-Class-MSolveBase.html#doSSolveMat_",
          "type": "function"
        },
        "index": {
          "description": "Set alpha",
          "hierarchy": "Data Matrix Class MSolve",
          "module": "Data.Matrix.Class.MSolve",
          "name": "doSSolveMat_",
          "normalized": "a-\u003eb(c,c)a-\u003ed(c,e)a-\u003ef()",
          "package": "blas",
          "partial": "SSolve Mat",
          "signature": "e-\u003ea(k,k)e-\u003eb(k,l)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MSolve.html#v:doSSolveMat_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet \u003ccode\u003ex := a^{-1} (alpha x)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.MSolve",
          "name": "doSSolve_",
          "package": "blas",
          "signature": "e -\u003e a (k, k) e -\u003e x k e -\u003e m ()",
          "source": "src/Data-Matrix-Class-MSolveBase.html#doSSolve_",
          "type": "function"
        },
        "index": {
          "description": "Set alpha",
          "hierarchy": "Data Matrix Class MSolve",
          "module": "Data.Matrix.Class.MSolve",
          "name": "doSSolve_",
          "normalized": "a-\u003eb(c,c)a-\u003ed c a-\u003ee()",
          "package": "blas",
          "partial": "SSolve",
          "signature": "e-\u003ea(k,k)e-\u003ex k e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MSolve.html#v:doSSolve_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet \u003ccode\u003ex := a^{-1} y\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.MSolve",
          "name": "doSolve",
          "package": "blas",
          "signature": "a (r, s) e -\u003e y r e -\u003e x s e -\u003e m ()",
          "source": "src/Data-Matrix-Class-MSolveBase.html#doSolve",
          "type": "function"
        },
        "index": {
          "description": "Set",
          "hierarchy": "Data Matrix Class MSolve",
          "module": "Data.Matrix.Class.MSolve",
          "name": "doSolve",
          "normalized": "a(b,c)d-\u003ee b d-\u003ef c d-\u003eg()",
          "package": "blas",
          "partial": "Solve",
          "signature": "a(r,s)e-\u003ey r e-\u003ex s e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MSolve.html#v:doSolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet \u003ccode\u003eb := a^{-1} c\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.MSolve",
          "name": "doSolveMat",
          "package": "blas",
          "signature": "a (r, s) e -\u003e c (r, t) e -\u003e b (s, t) e -\u003e m ()",
          "source": "src/Data-Matrix-Class-MSolveBase.html#doSolveMat",
          "type": "function"
        },
        "index": {
          "description": "Set",
          "hierarchy": "Data Matrix Class MSolve",
          "module": "Data.Matrix.Class.MSolve",
          "name": "doSolveMat",
          "normalized": "a(b,c)d-\u003ee(b,f)d-\u003eg(c,f)d-\u003eh()",
          "package": "blas",
          "partial": "Solve Mat",
          "signature": "a(r,s)e-\u003ec(r,t)e-\u003eb(s,t)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MSolve.html#v:doSolveMat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet \u003ccode\u003eb := a^{-1} b\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.MSolve",
          "name": "doSolveMat_",
          "package": "blas",
          "signature": "a (k, k) e -\u003e b (k, l) e -\u003e m ()",
          "source": "src/Data-Matrix-Class-MSolveBase.html#doSolveMat_",
          "type": "function"
        },
        "index": {
          "description": "Set",
          "hierarchy": "Data Matrix Class MSolve",
          "module": "Data.Matrix.Class.MSolve",
          "name": "doSolveMat_",
          "normalized": "a(b,b)c-\u003ed(b,e)c-\u003ef()",
          "package": "blas",
          "partial": "Solve Mat",
          "signature": "a(k,k)e-\u003eb(k,l)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MSolve.html#v:doSolveMat_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet \u003ccode\u003ex := a^{-1} x\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.MSolve",
          "name": "doSolve_",
          "package": "blas",
          "signature": "a (k, k) e -\u003e x k e -\u003e m ()",
          "source": "src/Data-Matrix-Class-MSolveBase.html#doSolve_",
          "type": "function"
        },
        "index": {
          "description": "Set",
          "hierarchy": "Data Matrix Class MSolve",
          "module": "Data.Matrix.Class.MSolve",
          "name": "doSolve_",
          "normalized": "a(b,b)c-\u003ed b c-\u003ee()",
          "package": "blas",
          "partial": "Solve",
          "signature": "a(k,k)e-\u003ex k e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MSolve.html#v:doSolve_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn \u003ccode\u003ex\u003c/code\u003e such that \u003ccode\u003ea x = alpha y\u003c/code\u003e.    \n\u003c/p\u003e",
          "module": "Data.Matrix.Class.MSolve",
          "name": "getSSolve",
          "package": "blas",
          "signature": "e -\u003e a (k, l) e -\u003e y k e -\u003e m (x l e)",
          "source": "src/Data-Matrix-Class-MSolveBase.html#getSSolve",
          "type": "function"
        },
        "index": {
          "description": "Return such that alpha",
          "hierarchy": "Data Matrix Class MSolve",
          "module": "Data.Matrix.Class.MSolve",
          "name": "getSSolve",
          "normalized": "a-\u003eb(c,d)a-\u003ee c a-\u003ef(g d a)",
          "package": "blas",
          "partial": "SSolve",
          "signature": "e-\u003ea(k,l)e-\u003ey k e-\u003em(x l e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MSolve.html#v:getSSolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn \u003ccode\u003eb\u003c/code\u003e such that \u003ccode\u003ea b = alpha c\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.MSolve",
          "name": "getSSolveMat",
          "package": "blas",
          "signature": "e -\u003e a (r, s) e -\u003e c (r, t) e -\u003e m (b (s, t) e)",
          "source": "src/Data-Matrix-Class-MSolveBase.html#getSSolveMat",
          "type": "function"
        },
        "index": {
          "description": "Return such that alpha",
          "hierarchy": "Data Matrix Class MSolve",
          "module": "Data.Matrix.Class.MSolve",
          "name": "getSSolveMat",
          "normalized": "a-\u003eb(c,d)a-\u003ee(c,f)a-\u003eg(h(d,f)a)",
          "package": "blas",
          "partial": "SSolve Mat",
          "signature": "e-\u003ea(r,s)e-\u003ec(r,t)e-\u003em(b(s,t)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MSolve.html#v:getSSolveMat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn \u003ccode\u003ex\u003c/code\u003e such that \u003ccode\u003ea x = y\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.MSolve",
          "name": "getSolve",
          "package": "blas",
          "signature": "a (k, l) e -\u003e y k e -\u003e m (x l e)",
          "source": "src/Data-Matrix-Class-MSolveBase.html#getSolve",
          "type": "function"
        },
        "index": {
          "description": "Return such that",
          "hierarchy": "Data Matrix Class MSolve",
          "module": "Data.Matrix.Class.MSolve",
          "name": "getSolve",
          "normalized": "a(b,c)d-\u003ee b d-\u003ef(g c d)",
          "package": "blas",
          "partial": "Solve",
          "signature": "a(k,l)e-\u003ey k e-\u003em(x l e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MSolve.html#v:getSolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn \u003ccode\u003eb\u003c/code\u003e such that \u003ccode\u003ea b = c\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class.MSolve",
          "name": "getSolveMat",
          "package": "blas",
          "signature": "a (r, s) e -\u003e c (r, t) e -\u003e m (b (s, t) e)",
          "source": "src/Data-Matrix-Class-MSolveBase.html#getSolveMat",
          "type": "function"
        },
        "index": {
          "description": "Return such that",
          "hierarchy": "Data Matrix Class MSolve",
          "module": "Data.Matrix.Class.MSolve",
          "name": "getSolveMat",
          "normalized": "a(b,c)d-\u003ee(b,f)d-\u003eg(h(c,f)d)",
          "package": "blas",
          "partial": "Solve Mat",
          "signature": "a(r,s)e-\u003ec(r,t)e-\u003em(b(s,t)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class-MSolve.html#v:getSolveMat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommon functionality for the types defined in\n \u003ca\u003eData.Matrix.Dense.Class\u003c/a\u003e and \u003ca\u003eData.Matrix.Banded.Class\u003c/a\u003e, and \n a base class for the mutable and immutable matrix\n classes defined in the submodules of this one.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Matrix.Class",
          "name": "Class",
          "package": "blas",
          "source": "src/Data-Matrix-Class.html",
          "type": "module"
        },
        "index": {
          "description": "Common functionality for the types defined in Data.Matrix.Dense.Class and Data.Matrix.Banded.Class and base class for the mutable and immutable matrix classes defined in the submodules of this one",
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "Class",
          "package": "blas",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVector conjugacy\n\u003c/p\u003e",
          "module": "Data.Matrix.Class",
          "name": "ConjEnum",
          "package": "blas",
          "source": "src/BLAS-Types.html#ConjEnum",
          "type": "data"
        },
        "index": {
          "description": "Vector conjugacy",
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "ConjEnum",
          "package": "blas",
          "partial": "Conj Enum",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#t:ConjEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiagonal storage.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class",
          "name": "DiagEnum",
          "package": "blas",
          "source": "src/BLAS-Types.html#DiagEnum",
          "type": "data"
        },
        "index": {
          "description": "Diagonal storage",
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "DiagEnum",
          "package": "blas",
          "partial": "Diag Enum",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#t:DiagEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for matrix types that use a matrix internally for storage,\n \u003ca\u003eData.Matrix.Banded.Class\u003c/a\u003e for example.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class",
          "name": "HasMatrixStorage",
          "package": "blas",
          "source": "src/Data-Matrix-Class.html#HasMatrixStorage",
          "type": "class"
        },
        "index": {
          "description": "class for matrix types that use matrix internally for storage Data.Matrix.Banded.Class for example",
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "HasMatrixStorage",
          "package": "blas",
          "partial": "Has Matrix Storage",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#t:HasMatrixStorage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for matrices with an associated type for row, column, and\n diagonal vector views.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class",
          "name": "HasVectorView",
          "package": "blas",
          "source": "src/Data-Matrix-Class.html#HasVectorView",
          "type": "class"
        },
        "index": {
          "description": "class for matrices with an associated type for row column and diagonal vector views",
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "HasVectorView",
          "package": "blas",
          "partial": "Has Vector View",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#t:HasVectorView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA base class for objects shaped like matrices.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class",
          "name": "MatrixShaped",
          "package": "blas",
          "source": "src/Data-Matrix-Class.html#MatrixShaped",
          "type": "class"
        },
        "index": {
          "description": "base class for objects shaped like matrices",
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "MatrixShaped",
          "package": "blas",
          "partial": "Matrix Shaped",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#t:MatrixShaped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatrix element storage order.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class",
          "name": "OrderEnum",
          "package": "blas",
          "source": "src/BLAS-Types.html#OrderEnum",
          "type": "data"
        },
        "index": {
          "description": "Matrix element storage order",
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "OrderEnum",
          "package": "blas",
          "partial": "Order Enum",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#t:OrderEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiplication side.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class",
          "name": "SideEnum",
          "package": "blas",
          "source": "src/BLAS-Types.html#SideEnum",
          "type": "data"
        },
        "index": {
          "description": "Multiplication side",
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "SideEnum",
          "package": "blas",
          "partial": "Side Enum",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#t:SideEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranspose type.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class",
          "name": "TransEnum",
          "package": "blas",
          "source": "src/BLAS-Types.html#TransEnum",
          "type": "data"
        },
        "index": {
          "description": "Transpose type",
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "TransEnum",
          "package": "blas",
          "partial": "Trans Enum",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#t:TransEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLower or upper triangular storage.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class",
          "name": "UpLoEnum",
          "package": "blas",
          "source": "src/BLAS-Types.html#UpLoEnum",
          "type": "data"
        },
        "index": {
          "description": "Lower or upper triangular storage",
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "UpLoEnum",
          "package": "blas",
          "partial": "Up Lo Enum",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#t:UpLoEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Matrix.Class",
          "name": "ColMajor",
          "package": "blas",
          "signature": "ColMajor",
          "source": "src/BLAS-Types.html#OrderEnum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "ColMajor",
          "package": "blas",
          "partial": "Col Major",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#v:ColMajor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Matrix.Class",
          "name": "Conj",
          "package": "blas",
          "signature": "Conj",
          "source": "src/BLAS-Types.html#ConjEnum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "Conj",
          "package": "blas",
          "partial": "Conj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#v:Conj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Matrix.Class",
          "name": "ConjTrans",
          "package": "blas",
          "signature": "ConjTrans",
          "source": "src/BLAS-Types.html#TransEnum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "ConjTrans",
          "package": "blas",
          "partial": "Conj Trans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#v:ConjTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Matrix.Class",
          "name": "LeftSide",
          "package": "blas",
          "signature": "LeftSide",
          "source": "src/BLAS-Types.html#SideEnum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "LeftSide",
          "package": "blas",
          "partial": "Left Side",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#v:LeftSide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Matrix.Class",
          "name": "Lower",
          "package": "blas",
          "signature": "Lower",
          "source": "src/BLAS-Types.html#UpLoEnum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "Lower",
          "package": "blas",
          "partial": "Lower",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#v:Lower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Matrix.Class",
          "name": "NoConj",
          "package": "blas",
          "signature": "NoConj",
          "source": "src/BLAS-Types.html#ConjEnum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "NoConj",
          "package": "blas",
          "partial": "No Conj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#v:NoConj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Matrix.Class",
          "name": "NoTrans",
          "package": "blas",
          "signature": "NoTrans",
          "source": "src/BLAS-Types.html#TransEnum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "NoTrans",
          "package": "blas",
          "partial": "No Trans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#v:NoTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Matrix.Class",
          "name": "NonUnit",
          "package": "blas",
          "signature": "NonUnit",
          "source": "src/BLAS-Types.html#DiagEnum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "NonUnit",
          "package": "blas",
          "partial": "Non Unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#v:NonUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Matrix.Class",
          "name": "RightSide",
          "package": "blas",
          "signature": "RightSide",
          "source": "src/BLAS-Types.html#SideEnum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "RightSide",
          "package": "blas",
          "partial": "Right Side",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#v:RightSide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Matrix.Class",
          "name": "RowMajor",
          "package": "blas",
          "signature": "RowMajor",
          "source": "src/BLAS-Types.html#OrderEnum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "RowMajor",
          "package": "blas",
          "partial": "Row Major",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#v:RowMajor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Matrix.Class",
          "name": "Unit",
          "package": "blas",
          "signature": "Unit",
          "source": "src/BLAS-Types.html#DiagEnum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "Unit",
          "package": "blas",
          "partial": "Unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#v:Unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Matrix.Class",
          "name": "Upper",
          "package": "blas",
          "signature": "Upper",
          "source": "src/BLAS-Types.html#UpLoEnum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "Upper",
          "package": "blas",
          "partial": "Upper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#v:Upper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExchange \u003ccode\u003eNoConj\u003c/code\u003e and \u003ccode\u003eConj\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class",
          "name": "flipConj",
          "package": "blas",
          "signature": "ConjEnum -\u003e ConjEnum",
          "source": "src/BLAS-Types.html#flipConj",
          "type": "function"
        },
        "index": {
          "description": "Exchange NoConj and Conj",
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "flipConj",
          "normalized": "ConjEnum-\u003eConjEnum",
          "package": "blas",
          "partial": "Conj",
          "signature": "ConjEnum-\u003eConjEnum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#v:flipConj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExchange \u003ccode\u003eRowMajor\u003c/code\u003e and \u003ccode\u003eColMajor\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class",
          "name": "flipOrder",
          "package": "blas",
          "signature": "OrderEnum -\u003e OrderEnum",
          "source": "src/BLAS-Types.html#flipOrder",
          "type": "function"
        },
        "index": {
          "description": "Exchange RowMajor and ColMajor",
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "flipOrder",
          "normalized": "OrderEnum-\u003eOrderEnum",
          "package": "blas",
          "partial": "Order",
          "signature": "OrderEnum-\u003eOrderEnum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#v:flipOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplaces \u003ccode\u003e(m,n)\u003c/code\u003e with \u003ccode\u003e(n,m)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Matrix.Class",
          "name": "flipShape",
          "package": "blas",
          "signature": "(Int, Int) -\u003e (Int, Int)",
          "source": "src/Data-Matrix-Class.html#flipShape",
          "type": "function"
        },
        "index": {
          "description": "Replaces with",
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "flipShape",
          "normalized": "(Int,Int)-\u003e(Int,Int)",
          "package": "blas",
          "partial": "Shape",
          "signature": "(Int,Int)-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#v:flipShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExchange \u003ccode\u003eLeftSide\u003c/code\u003e and \u003ccode\u003eRigthSide\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class",
          "name": "flipSide",
          "package": "blas",
          "signature": "SideEnum -\u003e SideEnum",
          "source": "src/BLAS-Types.html#flipSide",
          "type": "function"
        },
        "index": {
          "description": "Exchange LeftSide and RigthSide",
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "flipSide",
          "normalized": "SideEnum-\u003eSideEnum",
          "package": "blas",
          "partial": "Side",
          "signature": "SideEnum-\u003eSideEnum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#v:flipSide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExchange \u003ccode\u003eNoTrans\u003c/code\u003e and \u003ccode\u003eConjTrans\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class",
          "name": "flipTrans",
          "package": "blas",
          "signature": "TransEnum -\u003e TransEnum",
          "source": "src/BLAS-Types.html#flipTrans",
          "type": "function"
        },
        "index": {
          "description": "Exchange NoTrans and ConjTrans",
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "flipTrans",
          "normalized": "TransEnum-\u003eTransEnum",
          "package": "blas",
          "partial": "Trans",
          "signature": "TransEnum-\u003eTransEnum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#v:flipTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExchange \u003ccode\u003eUpper\u003c/code\u003e and \u003ccode\u003eLower\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class",
          "name": "flipUpLo",
          "package": "blas",
          "signature": "UpLoEnum -\u003e UpLoEnum",
          "source": "src/BLAS-Types.html#flipUpLo",
          "type": "function"
        },
        "index": {
          "description": "Exchange Upper and Lower",
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "flipUpLo",
          "normalized": "UpLoEnum-\u003eUpLoEnum",
          "package": "blas",
          "partial": "Up Lo",
          "signature": "UpLoEnum-\u003eUpLoEnum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#v:flipUpLo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new matrix view that conjugates and transposes the \n given matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class",
          "name": "herm",
          "package": "blas",
          "signature": "a (m, n) e -\u003e a (n, m) e",
          "source": "src/Data-Matrix-Class.html#herm",
          "type": "method"
        },
        "index": {
          "description": "Creates new matrix view that conjugates and transposes the given matrix",
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "herm",
          "normalized": "a(b,c)d-\u003ea(c,b)d",
          "package": "blas",
          "signature": "a(m,n)e-\u003ea(n,m)e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#v:herm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicate whether or not the number of rows is less than or equal to \n the number of columns.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class",
          "name": "isFat",
          "package": "blas",
          "signature": "a mn e -\u003e Bool",
          "source": "src/Data-Matrix-Class.html#isFat",
          "type": "function"
        },
        "index": {
          "description": "Indicate whether or not the number of rows is less than or equal to the number of columns",
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "isFat",
          "normalized": "a b c-\u003eBool",
          "package": "blas",
          "partial": "Fat",
          "signature": "a mn e-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#v:isFat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicate whether or not a matrix has the same number of rows and columns.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class",
          "name": "isSquare",
          "package": "blas",
          "signature": "a mn e -\u003e Bool",
          "source": "src/Data-Matrix-Class.html#isSquare",
          "type": "function"
        },
        "index": {
          "description": "Indicate whether or not matrix has the same number of rows and columns",
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "isSquare",
          "normalized": "a b c-\u003eBool",
          "package": "blas",
          "partial": "Square",
          "signature": "a mn e-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#v:isSquare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicate whether or not the number of rows is greater than or equal to \n the number of columns.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class",
          "name": "isTall",
          "package": "blas",
          "signature": "a mn e -\u003e Bool",
          "source": "src/Data-Matrix-Class.html#isTall",
          "type": "function"
        },
        "index": {
          "description": "Indicate whether or not the number of rows is greater than or equal to the number of columns",
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "isTall",
          "normalized": "a b c-\u003eBool",
          "package": "blas",
          "partial": "Tall",
          "signature": "a mn e-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#v:isTall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the number of rows in the matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class",
          "name": "numCols",
          "package": "blas",
          "signature": "a mn e -\u003e Int",
          "source": "src/Data-Matrix-Class.html#numCols",
          "type": "function"
        },
        "index": {
          "description": "Get the number of rows in the matrix",
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "numCols",
          "normalized": "a b c-\u003eInt",
          "package": "blas",
          "partial": "Cols",
          "signature": "a mn e-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#v:numCols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the number of rows in the matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Class",
          "name": "numRows",
          "package": "blas",
          "signature": "a mn e -\u003e Int",
          "source": "src/Data-Matrix-Class.html#numRows",
          "type": "function"
        },
        "index": {
          "description": "Get the number of rows in the matrix",
          "hierarchy": "Data Matrix Class",
          "module": "Data.Matrix.Class",
          "name": "numRows",
          "normalized": "a b c-\u003eInt",
          "package": "blas",
          "partial": "Rows",
          "signature": "a mn e-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Class.html#v:numRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn overloaded interface to mutable dense matrices.  For matrix types\n than can be used with this interface, see \u003ca\u003eData.Matrix.Dense.IO\u003c/a\u003e and\n \u003ca\u003eData.Matrix.Dense.ST\u003c/a\u003e.  Many of these functions can also be used with\n the immutable type defined in \u003ca\u003eData.Matrix.Dense\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "Class",
          "package": "blas",
          "source": "src/Data-Matrix-Dense-Class.html",
          "type": "module"
        },
        "index": {
          "description": "An overloaded interface to mutable dense matrices For matrix types than can be used with this interface see Data.Matrix.Dense.IO and Data.Matrix.Dense.ST Many of these functions can also be used with the immutable type defined in Data.Matrix.Dense",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "Class",
          "package": "blas",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommon functionality for all dense matrix types.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "BaseMatrix",
          "package": "blas",
          "source": "src/Data-Matrix-Dense-Base.html#BaseMatrix",
          "type": "class"
        },
        "index": {
          "description": "Common functionality for all dense matrix types",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "BaseMatrix",
          "package": "blas",
          "partial": "Base Matrix",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#t:BaseMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDense matrices that can be read in a monad.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "ReadMatrix",
          "package": "blas",
          "source": "src/Data-Matrix-Dense-Base.html#ReadMatrix",
          "type": "class"
        },
        "index": {
          "description": "Dense matrices that can be read in monad",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "ReadMatrix",
          "package": "blas",
          "partial": "Read Matrix",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#t:ReadMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDense matrices that can be created or modified in a monad.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "WriteMatrix",
          "package": "blas",
          "source": "src/Data-Matrix-Dense-Base.html#WriteMatrix",
          "type": "class"
        },
        "index": {
          "description": "Dense matrices that can be created or modified in monad",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "WriteMatrix",
          "package": "blas",
          "partial": "Write Matrix",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#t:WriteMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the first argument with the elementwise sum.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "addMatrix",
          "package": "blas",
          "signature": "b (n, p) e -\u003e a (n, p) e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#addMatrix",
          "type": "function"
        },
        "index": {
          "description": "Replace the first argument with the elementwise sum",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "addMatrix",
          "normalized": "a(b,c)d-\u003ee(b,c)d-\u003ef()",
          "package": "blas",
          "partial": "Matrix",
          "signature": "b(n,p)e-\u003ea(n,p)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:addMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eaxpyMatrix a x y\u003c/code\u003e replaces \u003ccode\u003ey := a x + y\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "axpyMatrix",
          "package": "blas",
          "signature": "e -\u003e a (n, p) e -\u003e b (n, p) e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#axpyMatrix",
          "type": "function"
        },
        "index": {
          "description": "axpyMatrix replaces",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "axpyMatrix",
          "normalized": "a-\u003eb(c,d)a-\u003ee(c,d)a-\u003ef()",
          "package": "blas",
          "partial": "Matrix",
          "signature": "e-\u003ea(n,p)e-\u003eb(n,p)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:axpyMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast the shape type of the matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "coerceMatrix",
          "package": "blas",
          "signature": "a np e -\u003e a np' e",
          "source": "src/Data-Matrix-Dense-Base.html#coerceMatrix",
          "type": "method"
        },
        "index": {
          "description": "Cast the shape type of the matrix",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "coerceMatrix",
          "normalized": "a b c-\u003ea d c",
          "package": "blas",
          "partial": "Matrix",
          "signature": "a np e-\u003ea np' e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:coerceMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a vector view of the given column in a matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "colView",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Int -\u003e VectorView a n e",
          "source": "src/Data-Matrix-Dense-Base.html#colView",
          "type": "function"
        },
        "index": {
          "description": "Get vector view of the given column in matrix",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "colView",
          "normalized": "a(b,c)d-\u003eInt-\u003eVectorView a b d",
          "package": "blas",
          "partial": "View",
          "signature": "a(n,p)e-\u003eInt-\u003eVectorView a n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:colView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of vector views of the columns of the matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "colViews",
          "package": "blas",
          "signature": "a (n, p) e -\u003e [VectorView a n e]",
          "source": "src/Data-Matrix-Dense-Base.html#colViews",
          "type": "function"
        },
        "index": {
          "description": "Get list of vector views of the columns of the matrix",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "colViews",
          "normalized": "a(b,c)d-\u003e[VectorView a b d]",
          "package": "blas",
          "partial": "Views",
          "signature": "a(n,p)e-\u003e[VectorView a n e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:colViews"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecopyMatrix dst src\u003c/code\u003e replaces the values in \u003ccode\u003edst\u003c/code\u003e with those in\n source.  The operands must be the same shape.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "copyMatrix",
          "package": "blas",
          "signature": "b (n, p) e -\u003e a (n, p) e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#copyMatrix",
          "type": "function"
        },
        "index": {
          "description": "copyMatrix dst src replaces the values in dst with those in source The operands must be the same shape",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "copyMatrix",
          "normalized": "a(b,c)d-\u003ee(b,c)d-\u003ef()",
          "package": "blas",
          "partial": "Matrix",
          "signature": "b(n,p)e-\u003ea(n,p)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:copyMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a vector view of the given diagonal in a matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "diagView",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Int -\u003e VectorView a k e",
          "source": "src/Data-Matrix-Dense-Base.html#diagView",
          "type": "function"
        },
        "index": {
          "description": "Get vector view of the given diagonal in matrix",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "diagView",
          "normalized": "a(b,c)d-\u003eInt-\u003eVectorView a e d",
          "package": "blas",
          "partial": "View",
          "signature": "a(n,p)e-\u003eInt-\u003eVectorView a k e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:diagView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the first argument with the elementwise quotient.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "divMatrix",
          "package": "blas",
          "signature": "b (n, p) e -\u003e a (n, p) e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#divMatrix",
          "type": "function"
        },
        "index": {
          "description": "Replace the first argument with the elementwise quotient",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "divMatrix",
          "normalized": "a(b,c)d-\u003ee(b,c)d-\u003ef()",
          "package": "blas",
          "partial": "Matrix",
          "signature": "b(n,p)e-\u003ea(n,p)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:divMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConjugate every element of a matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "doConjMatrix",
          "package": "blas",
          "signature": "a (n, p) e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#doConjMatrix",
          "type": "function"
        },
        "index": {
          "description": "Conjugate every element of matrix",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "doConjMatrix",
          "normalized": "a(b,c)d-\u003ee()",
          "package": "blas",
          "partial": "Conj Matrix",
          "signature": "a(n,p)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:doConjMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a mutable matrix to an immutable one by taking a complete\n copy of it.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "freezeMatrix",
          "package": "blas",
          "signature": "a (n, p) e -\u003e m (Matrix (n, p) e)",
          "source": "src/Data-Matrix-Dense-Base.html#freezeMatrix",
          "type": "method"
        },
        "index": {
          "description": "Convert mutable matrix to an immutable one by taking complete copy of it",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "freezeMatrix",
          "normalized": "a(b,c)d-\u003ee(Matrix(b,c)d)",
          "package": "blas",
          "partial": "Matrix",
          "signature": "a(n,p)e-\u003em(Matrix(n,p)e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:freezeMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetAddMatrix a b\u003c/code\u003e creates a new matrix equal to the sum \u003ccode\u003ea+b\u003c/code\u003e.  The \n operands must have the same shape.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "getAddMatrix",
          "package": "blas",
          "signature": "a (n, p) e -\u003e b (n, p) e -\u003e m (c (n, p) e)",
          "source": "src/Data-Matrix-Dense-Base.html#getAddMatrix",
          "type": "function"
        },
        "index": {
          "description": "getAddMatrix creates new matrix equal to the sum The operands must have the same shape",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "getAddMatrix",
          "normalized": "a(b,c)d-\u003ee(b,c)d-\u003ef(g(b,c)d)",
          "package": "blas",
          "partial": "Add Matrix",
          "signature": "a(n,p)e-\u003eb(n,p)e-\u003em(c(n,p)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:getAddMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a new matrix with elements with the conjugates of the elements\n of the given matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "getConjMatrix",
          "package": "blas",
          "signature": "a (n, p) e -\u003e m (b (n, p) e)",
          "source": "src/Data-Matrix-Dense-Base.html#getConjMatrix",
          "type": "function"
        },
        "index": {
          "description": "Get new matrix with elements with the conjugates of the elements of the given matrix",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "getConjMatrix",
          "normalized": "a(b,c)d-\u003ee(f(b,c)d)",
          "package": "blas",
          "partial": "Conj Matrix",
          "signature": "a(n,p)e-\u003em(b(n,p)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:getConjMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the given diagonal in a matrix.  Negative indices correspond\n to sub-diagonals.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "getDiag",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Int -\u003e m (y k e)",
          "source": "src/Data-Matrix-Dense-Base.html#getDiag",
          "type": "function"
        },
        "index": {
          "description": "Get the given diagonal in matrix Negative indices correspond to sub-diagonals",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "getDiag",
          "normalized": "a(b,c)d-\u003eInt-\u003ee(f g d)",
          "package": "blas",
          "partial": "Diag",
          "signature": "a(n,p)e-\u003eInt-\u003em(y k e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:getDiag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetDivMatrix a b\u003c/code\u003e creates a new matrix equal to the elementwise ratio\n \u003ccode\u003ea/b\u003c/code\u003e.  The operands must have the same shape.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "getDivMatrix",
          "package": "blas",
          "signature": "a (n, p) e -\u003e b (n, p) e -\u003e m (c (n, p) e)",
          "source": "src/Data-Matrix-Dense-Base.html#getDivMatrix",
          "type": "function"
        },
        "index": {
          "description": "getDivMatrix creates new matrix equal to the elementwise ratio The operands must have the same shape",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "getDivMatrix",
          "normalized": "a(b,c)d-\u003ee(b,c)d-\u003ef(g(b,c)d)",
          "package": "blas",
          "partial": "Div Matrix",
          "signature": "a(n,p)e-\u003eb(n,p)e-\u003em(c(n,p)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:getDivMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetMulMatrix a b\u003c/code\u003e creates a new matrix equal to the elementwise product \n \u003ccode\u003ea*b\u003c/code\u003e.  The operands must have the same shape.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "getMulMatrix",
          "package": "blas",
          "signature": "a (n, p) e -\u003e b (n, p) e -\u003e m (c (n, p) e)",
          "source": "src/Data-Matrix-Dense-Base.html#getMulMatrix",
          "type": "function"
        },
        "index": {
          "description": "getMulMatrix creates new matrix equal to the elementwise product The operands must have the same shape",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "getMulMatrix",
          "normalized": "a(b,c)d-\u003ee(b,c)d-\u003ef(g(b,c)d)",
          "package": "blas",
          "partial": "Mul Matrix",
          "signature": "a(n,p)e-\u003eb(n,p)e-\u003em(c(n,p)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:getMulMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a new matrix by scaling the elements of another matrix\n by a given value.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "getScaledMatrix",
          "package": "blas",
          "signature": "e -\u003e a (n, p) e -\u003e m (b (n, p) e)",
          "source": "src/Data-Matrix-Dense-Base.html#getScaledMatrix",
          "type": "function"
        },
        "index": {
          "description": "Get new matrix by scaling the elements of another matrix by given value",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "getScaledMatrix",
          "normalized": "a-\u003eb(c,d)a-\u003ee(f(c,d)a)",
          "package": "blas",
          "partial": "Scaled Matrix",
          "signature": "e-\u003ea(n,p)e-\u003em(b(n,p)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:getScaledMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a new matrix by shifting the elements of another matrix\n by a given value.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "getShiftedMatrix",
          "package": "blas",
          "signature": "e -\u003e a (n, p) e -\u003e m (b (n, p) e)",
          "source": "src/Data-Matrix-Dense-Base.html#getShiftedMatrix",
          "type": "function"
        },
        "index": {
          "description": "Get new matrix by shifting the elements of another matrix by given value",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "getShiftedMatrix",
          "normalized": "a-\u003eb(c,d)a-\u003ee(f(c,d)a)",
          "package": "blas",
          "partial": "Shifted Matrix",
          "signature": "e-\u003ea(n,p)e-\u003em(b(n,p)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:getShiftedMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetSubMatrix a b\u003c/code\u003e creates a new matrix equal to the difference \u003ccode\u003ea-b\u003c/code\u003e.  The \n operands must have the same shape.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "getSubMatrix",
          "package": "blas",
          "signature": "a (n, p) e -\u003e b (n, p) e -\u003e m (c (n, p) e)",
          "source": "src/Data-Matrix-Dense-Base.html#getSubMatrix",
          "type": "function"
        },
        "index": {
          "description": "getSubMatrix creates new matrix equal to the difference a-b The operands must have the same shape",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "getSubMatrix",
          "normalized": "a(b,c)d-\u003ee(b,c)d-\u003ef(g(b,c)d)",
          "package": "blas",
          "partial": "Sub Matrix",
          "signature": "a(n,p)e-\u003eb(n,p)e-\u003em(c(n,p)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:getSubMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicate whether or not the underlying matrix storage is\n transposed and conjugated.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "isHermMatrix",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Bool",
          "source": "src/Data-Matrix-Dense-Base.html#isHermMatrix",
          "type": "method"
        },
        "index": {
          "description": "Indicate whether or not the underlying matrix storage is transposed and conjugated",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "isHermMatrix",
          "normalized": "a(b,c)d-\u003eBool",
          "package": "blas",
          "partial": "Herm Matrix",
          "signature": "a(n,p)e-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:isHermMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the leading dimension of the storage of the matrix.    \n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "ldaMatrix",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Int",
          "source": "src/Data-Matrix-Dense-Base.html#ldaMatrix",
          "type": "method"
        },
        "index": {
          "description": "Get the leading dimension of the storage of the matrix",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "ldaMatrix",
          "normalized": "a(b,c)d-\u003eInt",
          "package": "blas",
          "partial": "Matrix",
          "signature": "a(n,p)e-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:ldaMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a unary elementwise vector operation and apply it to the elements\n of a matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "liftMatrix",
          "package": "blas",
          "signature": "(forall k.  VectorView a k e -\u003e m ()) -\u003e a (n, p) e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#liftMatrix",
          "type": "function"
        },
        "index": {
          "description": "Take unary elementwise vector operation and apply it to the elements of matrix",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "liftMatrix",
          "normalized": "(a b VectorView c d e-\u003ef())-\u003ec(g,h)e-\u003ef()",
          "package": "blas",
          "partial": "Matrix",
          "signature": "(forall k. VectorView a k e-\u003em())-\u003ea(n,p)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:liftMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a binary elementwise vector operation and apply it to the elements\n of a pair of matrices.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "liftMatrix2",
          "package": "blas",
          "signature": "(forall k.  VectorView a k e -\u003e VectorView b k f -\u003e m ()) -\u003e a (n, p) e -\u003e b (n, p) f -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#liftMatrix2",
          "type": "function"
        },
        "index": {
          "description": "Take binary elementwise vector operation and apply it to the elements of pair of matrices",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "liftMatrix2",
          "normalized": "(a b VectorView c d e-\u003eVectorView f d g-\u003eh())-\u003ec(i,j)e-\u003ef(i,j)g-\u003eh()",
          "package": "blas",
          "partial": "Matrix",
          "signature": "(forall k. VectorView a k e-\u003eVectorView b k f-\u003em())-\u003ea(n,p)e-\u003eb(n,p)f-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:liftMatrix2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossibly create a vector view of a matrix.  This will fail if the\n matrix is hermed or if the lda of the matrix is not equal to the\n number of rows in the matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "maybeViewMatrixAsVector",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Maybe (VectorView a np e)",
          "source": "src/Data-Matrix-Dense-Base.html#maybeViewMatrixAsVector",
          "type": "method"
        },
        "index": {
          "description": "Possibly create vector view of matrix This will fail if the matrix is hermed or if the lda of the matrix is not equal to the number of rows in the matrix",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "maybeViewMatrixAsVector",
          "normalized": "a(b,c)d-\u003eMaybe(VectorView a e d)",
          "package": "blas",
          "partial": "View Matrix As Vector",
          "signature": "a(n,p)e-\u003eMaybe(VectorView a np e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:maybeViewMatrixAsVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossibly create a matrix view of a column vector.  This will fail\n if the stride of the vector is not \u003ccode\u003e1\u003c/code\u003e or the vector is not conjugated.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "maybeViewVectorAsCol",
          "package": "blas",
          "signature": "VectorView a n e -\u003e Maybe (a (n, one) e)",
          "source": "src/Data-Matrix-Dense-Base.html#maybeViewVectorAsCol",
          "type": "method"
        },
        "index": {
          "description": "Possibly create matrix view of column vector This will fail if the stride of the vector is not or the vector is not conjugated",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "maybeViewVectorAsCol",
          "normalized": "VectorView a b c-\u003eMaybe(a(b,d)c)",
          "package": "blas",
          "partial": "View Vector As Col",
          "signature": "VectorView a n e-\u003eMaybe(a(n,one)e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:maybeViewVectorAsCol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossible create a matrix view of the vector.  This will fail if\n the stride of the vector is not \u003ccode\u003e1\u003c/code\u003e or the vector is conjugated.\n An error will be called if the vector does not have the same number\n of elements as the desired matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "maybeViewVectorAsMatrix",
          "package": "blas",
          "signature": "(Int, Int) -\u003e VectorView a np e -\u003e Maybe (a (n, p) e)",
          "source": "src/Data-Matrix-Dense-Base.html#maybeViewVectorAsMatrix",
          "type": "method"
        },
        "index": {
          "description": "Possible create matrix view of the vector This will fail if the stride of the vector is not or the vector is conjugated An error will be called if the vector does not have the same number of elements as the desired matrix",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "maybeViewVectorAsMatrix",
          "normalized": "(Int,Int)-\u003eVectorView a b c-\u003eMaybe(a(d,e)c)",
          "package": "blas",
          "partial": "View Vector As Matrix",
          "signature": "(Int,Int)-\u003eVectorView a np e-\u003eMaybe(a(n,p)e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:maybeViewVectorAsMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossibly create a matrix view of a row vector.  This will fail if\n the stride of the vector is not \u003ccode\u003e1\u003c/code\u003e or the vector is conjugated.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "maybeViewVectorAsRow",
          "package": "blas",
          "signature": "VectorView a p e -\u003e Maybe (a (one, p) e)",
          "source": "src/Data-Matrix-Dense-Base.html#maybeViewVectorAsRow",
          "type": "method"
        },
        "index": {
          "description": "Possibly create matrix view of row vector This will fail if the stride of the vector is not or the vector is conjugated",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "maybeViewVectorAsRow",
          "normalized": "VectorView a b c-\u003eMaybe(a(d,b)c)",
          "package": "blas",
          "partial": "View Vector As Row",
          "signature": "VectorView a p e-\u003eMaybe(a(one,p)e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:maybeViewVectorAsRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the first argument with the elementwise product.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "mulMatrix",
          "package": "blas",
          "signature": "b (n, p) e -\u003e a (n, p) e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#mulMatrix",
          "type": "function"
        },
        "index": {
          "description": "Replace the first argument with the elementwise product",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "mulMatrix",
          "normalized": "a(b,c)d-\u003ee(b,c)d-\u003ef()",
          "package": "blas",
          "partial": "Matrix",
          "signature": "b(n,p)e-\u003ea(n,p)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:mulMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new matrix from a column vector.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "newColMatrix",
          "package": "blas",
          "signature": "x n e -\u003e m (a (n, one) e)",
          "source": "src/Data-Matrix-Dense-Base.html#newColMatrix",
          "type": "function"
        },
        "index": {
          "description": "Create new matrix from column vector",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "newColMatrix",
          "normalized": "a b c-\u003ed(e(b,f)c)",
          "package": "blas",
          "partial": "Col Matrix",
          "signature": "x n e-\u003em(a(n,one)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:newColMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForm a matrix from a list of column vectors.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "newColsMatrix",
          "package": "blas",
          "signature": "(Int, Int) -\u003e [x n e] -\u003e m (a (n, p) e)",
          "source": "src/Data-Matrix-Dense-Base.html#newColsMatrix",
          "type": "function"
        },
        "index": {
          "description": "Form matrix from list of column vectors",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "newColsMatrix",
          "normalized": "(Int,Int)-\u003e[a b c]-\u003ed(e(b,f)c)",
          "package": "blas",
          "partial": "Cols Matrix",
          "signature": "(Int,Int)-\u003e[x n e]-\u003em(a(n,p)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:newColsMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a constant matrix of the specified shape.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "newConstantMatrix",
          "package": "blas",
          "signature": "(Int, Int) -\u003e e -\u003e m (a (n, p) e)",
          "source": "src/Data-Matrix-Dense-Base.html#newConstantMatrix",
          "type": "function"
        },
        "index": {
          "description": "Create constant matrix of the specified shape",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "newConstantMatrix",
          "normalized": "(Int,Int)-\u003ea-\u003eb(c(d,e)a)",
          "package": "blas",
          "partial": "Constant Matrix",
          "signature": "(Int,Int)-\u003ee-\u003em(a(n,p)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:newConstantMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a copy of a matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "newCopyMatrix",
          "package": "blas",
          "signature": "a (n, p) e -\u003e m (b (n, p) e)",
          "source": "src/Data-Matrix-Dense-Base.html#newCopyMatrix",
          "type": "function"
        },
        "index": {
          "description": "Get copy of matrix",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "newCopyMatrix",
          "normalized": "a(b,c)d-\u003ee(f(b,c)d)",
          "package": "blas",
          "partial": "Copy Matrix",
          "signature": "a(n,p)e-\u003em(b(n,p)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:newCopyMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a copy of a matrix and make sure the returned matrix is not\n a view.  Specififially, the returned matrix will have \u003ccode\u003eisHermMatrix\u003c/code\u003e\n equal to \u003ccode\u003eFalse\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "newCopyMatrix'",
          "package": "blas",
          "signature": "a (n, p) e -\u003e m (b (n, p) e)",
          "source": "src/Data-Matrix-Dense-Base.html#newCopyMatrix%27",
          "type": "function"
        },
        "index": {
          "description": "Get copy of matrix and make sure the returned matrix is not view Specififially the returned matrix will have isHermMatrix equal to False",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "newCopyMatrix'",
          "normalized": "a(b,c)d-\u003ee(f(b,c)d)",
          "package": "blas",
          "partial": "Copy Matrix'",
          "signature": "a(n,p)e-\u003em(b(n,p)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:newCopyMatrix-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new matrix of the given shape with ones along the diagonal, \n and zeros everywhere else.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "newIdentityMatrix",
          "package": "blas",
          "signature": "(Int, Int) -\u003e m (a (n, p) e)",
          "source": "src/Data-Matrix-Dense-Base.html#newIdentityMatrix",
          "type": "function"
        },
        "index": {
          "description": "Create new matrix of the given shape with ones along the diagonal and zeros everywhere else",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "newIdentityMatrix",
          "normalized": "(Int,Int)-\u003ea(b(c,d)e)",
          "package": "blas",
          "partial": "Identity Matrix",
          "signature": "(Int,Int)-\u003em(a(n,p)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:newIdentityMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new matrix with the given elements in column-major order.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "newListMatrix",
          "package": "blas",
          "signature": "(Int, Int) -\u003e [e] -\u003e m (a (n, p) e)",
          "source": "src/Data-Matrix-Dense-Base.html#newListMatrix",
          "type": "function"
        },
        "index": {
          "description": "Create new matrix with the given elements in column-major order",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "newListMatrix",
          "normalized": "(Int,Int)-\u003e[a]-\u003eb(c(d,e)a)",
          "package": "blas",
          "partial": "List Matrix",
          "signature": "(Int,Int)-\u003e[e]-\u003em(a(n,p)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:newListMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new matrix with the given association list.  Unspecified\n indices will get initialized to zero.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "newMatrix",
          "package": "blas",
          "signature": "(Int, Int) -\u003e [((Int, Int), e)] -\u003e m (a (n, p) e)",
          "source": "src/Data-Matrix-Dense-Base.html#newMatrix",
          "type": "function"
        },
        "index": {
          "description": "Creates new matrix with the given association list Unspecified indices will get initialized to zero",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "newMatrix",
          "normalized": "(Int,Int)-\u003e[((Int,Int),a)]-\u003eb(c(d,e)a)",
          "package": "blas",
          "partial": "Matrix",
          "signature": "(Int,Int)-\u003e[((Int,Int),e)]-\u003em(a(n,p)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:newMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new matrix of the given shape.  The elements will be \n uninitialized.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "newMatrix_",
          "package": "blas",
          "signature": "(Int, Int) -\u003e m (a (n, p) e)",
          "source": "src/Data-Matrix-Dense-Base.html#newMatrix_",
          "type": "method"
        },
        "index": {
          "description": "Creates new matrix of the given shape The elements will be uninitialized",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "newMatrix_",
          "normalized": "(Int,Int)-\u003ea(b(c,d)e)",
          "package": "blas",
          "partial": "Matrix",
          "signature": "(Int,Int)-\u003em(a(n,p)e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:newMatrix_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new matrix from a row vector.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "newRowMatrix",
          "package": "blas",
          "signature": "x p e -\u003e m (a (one, p) e)",
          "source": "src/Data-Matrix-Dense-Base.html#newRowMatrix",
          "type": "function"
        },
        "index": {
          "description": "Create new matrix from row vector",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "newRowMatrix",
          "normalized": "a b c-\u003ed(e(f,b)c)",
          "package": "blas",
          "partial": "Row Matrix",
          "signature": "x p e-\u003em(a(one,p)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:newRowMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForm a matrix from a list of row vectors.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "newRowsMatrix",
          "package": "blas",
          "signature": "(Int, Int) -\u003e [x p e] -\u003e m (a (n, p) e)",
          "source": "src/Data-Matrix-Dense-Base.html#newRowsMatrix",
          "type": "function"
        },
        "index": {
          "description": "Form matrix from list of row vectors",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "newRowsMatrix",
          "normalized": "(Int,Int)-\u003e[a b c]-\u003ed(e(f,b)c)",
          "package": "blas",
          "partial": "Rows Matrix",
          "signature": "(Int,Int)-\u003e[x p e]-\u003em(a(n,p)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:newRowsMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a zero matrix of the specified shape.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "newZeroMatrix",
          "package": "blas",
          "signature": "(Int, Int) -\u003e m (a (n, p) e)",
          "source": "src/Data-Matrix-Dense-Base.html#newZeroMatrix",
          "type": "function"
        },
        "index": {
          "description": "Create zero matrix of the specified shape",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "newZeroMatrix",
          "normalized": "(Int,Int)-\u003ea(b(c,d)e)",
          "package": "blas",
          "partial": "Zero Matrix",
          "signature": "(Int,Int)-\u003em(a(n,p)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:newZeroMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a vector view of the given row in a matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "rowView",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Int -\u003e VectorView a p e",
          "source": "src/Data-Matrix-Dense-Base.html#rowView",
          "type": "function"
        },
        "index": {
          "description": "Get vector view of the given row in matrix",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "rowView",
          "normalized": "a(b,c)d-\u003eInt-\u003eVectorView a c d",
          "package": "blas",
          "partial": "View",
          "signature": "a(n,p)e-\u003eInt-\u003eVectorView a p e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:rowView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of vector views of the rows of the matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "rowViews",
          "package": "blas",
          "signature": "a (n, p) e -\u003e [VectorView a p e]",
          "source": "src/Data-Matrix-Dense-Base.html#rowViews",
          "type": "function"
        },
        "index": {
          "description": "Get list of vector views of the rows of the matrix",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "rowViews",
          "normalized": "a(b,c)d-\u003e[VectorView a c d]",
          "package": "blas",
          "partial": "Views",
          "signature": "a(n,p)e-\u003e[VectorView a p e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:rowViews"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale every element of a matrix by the given value.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "scaleByMatrix",
          "package": "blas",
          "signature": "e -\u003e a (n, p) e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#scaleByMatrix",
          "type": "function"
        },
        "index": {
          "description": "Scale every element of matrix by the given value",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "scaleByMatrix",
          "normalized": "a-\u003eb(c,d)a-\u003ee()",
          "package": "blas",
          "partial": "By Matrix",
          "signature": "e-\u003ea(n,p)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:scaleByMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet every element in the matrix to the given constant.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "setConstantMatrix",
          "package": "blas",
          "signature": "e -\u003e a (n, p) e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#setConstantMatrix",
          "type": "function"
        },
        "index": {
          "description": "Set every element in the matrix to the given constant",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "setConstantMatrix",
          "normalized": "a-\u003eb(c,d)a-\u003ee()",
          "package": "blas",
          "partial": "Constant Matrix",
          "signature": "e-\u003ea(n,p)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:setConstantMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet diagonal elements to one and all other elements to zero.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "setIdentityMatrix",
          "package": "blas",
          "signature": "a (n, p) e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#setIdentityMatrix",
          "type": "function"
        },
        "index": {
          "description": "Set diagonal elements to one and all other elements to zero",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "setIdentityMatrix",
          "normalized": "a(b,c)d-\u003ee()",
          "package": "blas",
          "partial": "Identity Matrix",
          "signature": "a(n,p)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:setIdentityMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet every element in the matrix to zero.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "setZeroMatrix",
          "package": "blas",
          "signature": "a (n, p) e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#setZeroMatrix",
          "type": "function"
        },
        "index": {
          "description": "Set every element in the matrix to zero",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "setZeroMatrix",
          "normalized": "a(b,c)d-\u003ee()",
          "package": "blas",
          "partial": "Zero Matrix",
          "signature": "a(n,p)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:setZeroMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a constant to every element in a matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "shiftByMatrix",
          "package": "blas",
          "signature": "e -\u003e a (n, p) e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#shiftByMatrix",
          "type": "function"
        },
        "index": {
          "description": "Add constant to every element in matrix",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "shiftByMatrix",
          "normalized": "a-\u003eb(c,d)a-\u003ee()",
          "package": "blas",
          "partial": "By Matrix",
          "signature": "e-\u003ea(n,p)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:shiftByMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivide the columns of a matrix into two blocks and return views into the\n blocks.  The integer argument indicates how many columns should be in the\n first block.\n\u003c/p\u003e",
          "module": "[\"Data.Matrix.Dense.Class\",\"Data.Matrix.Dense\"]",
          "name": "splitColsAt",
          "package": "blas",
          "signature": "Int -\u003e a (n, p) e -\u003e (a (n, p1) e, a (n, p2) e)",
          "source": "src/Data-Matrix-Dense-Base.html#splitColsAt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:splitColsAt\",\"http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense.html#v:splitColsAt\"]"
        },
        "index": {
          "description": "Divide the columns of matrix into two blocks and return views into the blocks The integer argument indicates how many columns should be in the first block",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "splitColsAt",
          "normalized": "Int-\u003ea(b,c)d-\u003e(a(b,c)d,a(b,c)d)",
          "package": "blas",
          "partial": "Cols At",
          "signature": "Int-\u003ea(n,p)e-\u003e(a(n,p)e,a(n,p)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:splitColsAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivide the rows of a matrix into two blocks and return views into the\n blocks.  The integer argument indicates how many rows should be in the\n first block.\n\u003c/p\u003e",
          "module": "[\"Data.Matrix.Dense.Class\",\"Data.Matrix.Dense\"]",
          "name": "splitRowsAt",
          "package": "blas",
          "signature": "Int -\u003e a (n, p) e -\u003e (a (n1, p) e, a (n2, p) e)",
          "source": "src/Data-Matrix-Dense-Base.html#splitRowsAt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:splitRowsAt\",\"http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense.html#v:splitRowsAt\"]"
        },
        "index": {
          "description": "Divide the rows of matrix into two blocks and return views into the blocks The integer argument indicates how many rows should be in the first block",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "splitRowsAt",
          "normalized": "Int-\u003ea(b,c)d-\u003e(a(b,c)d,a(b,c)d)",
          "package": "blas",
          "partial": "Rows At",
          "signature": "Int-\u003ea(n,p)e-\u003e(a(n,p)e,a(n,p)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:splitRowsAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the first argument with the elementwise sum.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "subMatrix",
          "package": "blas",
          "signature": "b (n, p) e -\u003e a (n, p) e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#subMatrix",
          "type": "function"
        },
        "index": {
          "description": "Replace the first argument with the elementwise sum",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "subMatrix",
          "normalized": "a(b,c)d-\u003ee(b,c)d-\u003ef()",
          "package": "blas",
          "partial": "Matrix",
          "signature": "b(n,p)e-\u003ea(n,p)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:subMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esubmatrixView a ij mn\u003c/code\u003e returns a view of the submatrix of \u003ccode\u003ea\u003c/code\u003e with element \u003ccode\u003e(0,0)\u003c/code\u003e\n being element \u003ccode\u003eij\u003c/code\u003e in \u003ccode\u003ea\u003c/code\u003e, and having shape \u003ccode\u003emn\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "submatrixView",
          "package": "blas",
          "signature": "a (n, p) e -\u003e (Int, Int) -\u003e (Int, Int) -\u003e a (n', p') e",
          "source": "src/Data-Matrix-Dense-Base.html#submatrixView",
          "type": "function"
        },
        "index": {
          "description": "submatrixView ij mn returns view of the submatrix of with element being element ij in and having shape mn",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "submatrixView",
          "normalized": "a(b,c)d-\u003e(Int,Int)-\u003e(Int,Int)-\u003ea(e,f)d",
          "package": "blas",
          "partial": "View",
          "signature": "a(n,p)e-\u003e(Int,Int)-\u003e(Int,Int)-\u003ea(n',p')e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:submatrixView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwap the elements in two columns of a matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "swapCols",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Int -\u003e Int -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#swapCols",
          "type": "function"
        },
        "index": {
          "description": "Swap the elements in two columns of matrix",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "swapCols",
          "normalized": "a(b,c)d-\u003eInt-\u003eInt-\u003ee()",
          "package": "blas",
          "partial": "Cols",
          "signature": "a(n,p)e-\u003eInt-\u003eInt-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:swapCols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eswapMatrix x y\u003c/code\u003e swaps the values stored in two matrices.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "swapMatrix",
          "package": "blas",
          "signature": "a (n, p) e -\u003e b (n, p) e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#swapMatrix",
          "type": "function"
        },
        "index": {
          "description": "swapMatrix swaps the values stored in two matrices",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "swapMatrix",
          "normalized": "a(b,c)d-\u003ee(b,c)d-\u003ef()",
          "package": "blas",
          "partial": "Matrix",
          "signature": "a(n,p)e-\u003eb(n,p)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:swapMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwap the elements in two rows of a matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "swapRows",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Int -\u003e Int -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#swapRows",
          "type": "function"
        },
        "index": {
          "description": "Swap the elements in two rows of matrix",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "swapRows",
          "normalized": "a(b,c)d-\u003eInt-\u003eInt-\u003ee()",
          "package": "blas",
          "partial": "Rows",
          "signature": "a(n,p)e-\u003eInt-\u003eInt-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:swapRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an immutable matrix to a mutable one by taking a complete\n copy of it.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "thawMatrix",
          "package": "blas",
          "signature": "Matrix (n, p) e -\u003e m (a (n, p) e)",
          "source": "src/Data-Matrix-Dense-Base.html#thawMatrix",
          "type": "method"
        },
        "index": {
          "description": "Convert an immutable matrix to mutable one by taking complete copy of it",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "thawMatrix",
          "normalized": "Matrix(a,b)c-\u003ed(e(a,b)c)",
          "package": "blas",
          "partial": "Matrix",
          "signature": "Matrix(n,p)e-\u003em(a(n,p)e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:thawMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the storage type of the matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "transEnumMatrix",
          "package": "blas",
          "signature": "a (n, p) e -\u003e TransEnum",
          "source": "src/Data-Matrix-Dense-Base.html#transEnumMatrix",
          "type": "method"
        },
        "index": {
          "description": "Get the storage type of the matrix",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "transEnumMatrix",
          "normalized": "a(b,c)d-\u003eTransEnum",
          "package": "blas",
          "partial": "Enum Matrix",
          "signature": "a(n,p)e-\u003eTransEnum",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:transEnumMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafely convert an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action that creates an \u003ccode\u003e\u003ca\u003eIOMatrix\u003c/a\u003e\u003c/code\u003e into\n an action in \u003ccode\u003em\u003c/code\u003e that creates a matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "unsafeConvertIOMatrix",
          "package": "blas",
          "signature": "IO (IOMatrix (n, p) e) -\u003e m (a (n, p) e)",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeConvertIOMatrix",
          "type": "method"
        },
        "index": {
          "description": "Unsafely convert an IO action that creates an IOMatrix into an action in that creates matrix",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "unsafeConvertIOMatrix",
          "normalized": "IO(IOMatrix(a,b)c)-\u003ed(e(a,b)c)",
          "package": "blas",
          "partial": "Convert IOMatrix",
          "signature": "IO(IOMatrix(n,p)e)-\u003em(a(n,p)e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:unsafeConvertIOMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Matrix.Dense.Class",
          "name": "unsafeFreezeMatrix",
          "package": "blas",
          "signature": "a (n, p) e -\u003e m (Matrix (n, p) e)",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeFreezeMatrix",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "unsafeFreezeMatrix",
          "normalized": "a(b,c)d-\u003ee(Matrix(b,c)d)",
          "package": "blas",
          "partial": "Freeze Matrix",
          "signature": "a(n,p)e-\u003em(Matrix(n,p)e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:unsafeFreezeMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafe cast from a matrix to an \u003ccode\u003e\u003ca\u003eIOMatrix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "unsafeMatrixToIOMatrix",
          "package": "blas",
          "signature": "a (n, p) e -\u003e IOMatrix (n, p) e",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeMatrixToIOMatrix",
          "type": "method"
        },
        "index": {
          "description": "Unsafe cast from matrix to an IOMatrix",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "unsafeMatrixToIOMatrix",
          "normalized": "a(b,c)d-\u003eIOMatrix(b,c)d",
          "package": "blas",
          "partial": "Matrix To IOMatrix",
          "signature": "a(n,p)e-\u003eIOMatrix(n,p)e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:unsafeMatrixToIOMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast the matrix to an \u003ccode\u003e\u003ca\u003eIOMatrix\u003c/a\u003e\u003c/code\u003e, perform an \u003ccode\u003eIO\u003c/code\u003e action, and\n convert the \u003ccode\u003eIO\u003c/code\u003e action to an action in the monad \u003ccode\u003em\u003c/code\u003e.  This\n operation is \u003cem\u003every\u003c/em\u003e unsafe.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.Class",
          "name": "unsafePerformIOWithMatrix",
          "package": "blas",
          "signature": "a (n, p) e -\u003e (IOMatrix (n, p) e -\u003e IO r) -\u003e m r",
          "source": "src/Data-Matrix-Dense-Base.html#unsafePerformIOWithMatrix",
          "type": "method"
        },
        "index": {
          "description": "Cast the matrix to an IOMatrix perform an IO action and convert the IO action to an action in the monad This operation is very unsafe",
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "unsafePerformIOWithMatrix",
          "normalized": "a(b,c)d-\u003e(IOMatrix(b,c)d-\u003eIO e)-\u003ef e",
          "package": "blas",
          "partial": "Perform IOWith Matrix",
          "signature": "a(n,p)e-\u003e(IOMatrix(n,p)e-\u003eIO r)-\u003em r",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:unsafePerformIOWithMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Matrix.Dense.Class",
          "name": "unsafeThawMatrix",
          "package": "blas",
          "signature": "Matrix (n, p) e -\u003e m (a (n, p) e)",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeThawMatrix",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Matrix Dense Class",
          "module": "Data.Matrix.Dense.Class",
          "name": "unsafeThawMatrix",
          "normalized": "Matrix(a,b)c-\u003ed(e(a,b)c)",
          "package": "blas",
          "partial": "Thaw Matrix",
          "signature": "Matrix(n,p)e-\u003em(a(n,p)e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-Class.html#v:unsafeThawMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable dense matrices in the IO monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Matrix.Dense.IO",
          "name": "IO",
          "package": "blas",
          "source": "src/Data-Matrix-Dense-IO.html",
          "type": "module"
        },
        "index": {
          "description": "Mutable dense matrices in the IO monad",
          "hierarchy": "Data Matrix Dense IO",
          "module": "Data.Matrix.Dense.IO",
          "name": "IO",
          "package": "blas",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDense matrix in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.  The type arguments are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003enp\u003c/code\u003e: a phantom type for the shape of the matrix.  Most functions\n       will demand that this be specified as a pair.  When writing a function\n       signature, you should always prefer \u003ccode\u003eIOMatrix (n,p) e\u003c/code\u003e to\n       \u003ccode\u003eIOMatrix np e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ee\u003c/code\u003e: the element type of the matrix.  Only certain element types\n       are supported.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Matrix.Dense.IO",
          "name": "IOMatrix",
          "package": "blas",
          "source": "src/Data-Matrix-Dense-IOBase.html#IOMatrix",
          "type": "data"
        },
        "index": {
          "description": "Dense matrix in the IO monad The type arguments are as follows np phantom type for the shape of the matrix Most functions will demand that this be specified as pair When writing function signature you should always prefer IOMatrix to IOMatrix np the element type of the matrix Only certain element types are supported",
          "hierarchy": "Data Matrix Dense IO",
          "module": "Data.Matrix.Dense.IO",
          "name": "IOMatrix",
          "package": "blas",
          "partial": "IOMatrix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-IO.html#t:IOMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eView an array in memory as a matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.IO",
          "name": "matrixViewArray",
          "package": "blas",
          "signature": "ForeignPtr e-\u003e Int-\u003e (Int, Int)-\u003e IOMatrix (n, p) e",
          "type": "function"
        },
        "index": {
          "description": "View an array in memory as matrix",
          "hierarchy": "Data Matrix Dense IO",
          "module": "Data.Matrix.Dense.IO",
          "name": "matrixViewArray",
          "normalized": "ForeignPtr a-\u003eInt-\u003e(Int,Int)-\u003eIOMatrix(b,c)a",
          "package": "blas",
          "partial": "View Array",
          "signature": "ForeignPtr e-\u003eInt-\u003e(Int,Int)-\u003eIOMatrix(n,p)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-IO.html#v:matrixViewArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eView an array in memory as a matrix, with the given leading dimension\n size.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.IO",
          "name": "matrixViewArrayWithLda",
          "package": "blas",
          "signature": "Int-\u003e ForeignPtr e-\u003e Int-\u003e (Int, Int)-\u003e IOMatrix (n, p) e",
          "type": "function"
        },
        "index": {
          "description": "View an array in memory as matrix with the given leading dimension size",
          "hierarchy": "Data Matrix Dense IO",
          "module": "Data.Matrix.Dense.IO",
          "name": "matrixViewArrayWithLda",
          "normalized": "Int-\u003eForeignPtr a-\u003eInt-\u003e(Int,Int)-\u003eIOMatrix(b,c)a",
          "package": "blas",
          "partial": "View Array With Lda",
          "signature": "Int-\u003eForeignPtr e-\u003eInt-\u003e(Int,Int)-\u003eIOMatrix(n,p)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-IO.html#v:matrixViewArrayWithLda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action with a pointer to the first element of the\n matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.IO",
          "name": "withIOMatrix",
          "package": "blas",
          "signature": "IOMatrix (n, p) e -\u003e (Ptr e -\u003e IO a) -\u003e IO a",
          "source": "src/Data-Matrix-Dense-IOBase.html#withIOMatrix",
          "type": "function"
        },
        "index": {
          "description": "Perform an IO action with pointer to the first element of the matrix",
          "hierarchy": "Data Matrix Dense IO",
          "module": "Data.Matrix.Dense.IO",
          "name": "withIOMatrix",
          "normalized": "IOMatrix(a,b)c-\u003e(Ptr c-\u003eIO d)-\u003eIO d",
          "package": "blas",
          "partial": "IOMatrix",
          "signature": "IOMatrix(n,p)e-\u003e(Ptr e-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-IO.html#v:withIOMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable dense matrices in the ST monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Matrix.Dense.ST",
          "name": "ST",
          "package": "blas",
          "source": "src/Data-Matrix-Dense-ST.html",
          "type": "module"
        },
        "index": {
          "description": "Mutable dense matrices in the ST monad",
          "hierarchy": "Data Matrix Dense ST",
          "module": "Data.Matrix.Dense.ST",
          "name": "ST",
          "package": "blas",
          "partial": "ST",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-ST.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDense matrix in the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.  The type arguments are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003es\u003c/code\u003e: the state variable argument for the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e type\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003enp\u003c/code\u003e: a phantom type for the shape of the matrix.  Most functions\n       will demand that this be specified as a pair.  When writing a function\n       signature, you should always prefer \u003ccode\u003eSTMatrix s (n,p) e\u003c/code\u003e to\n       \u003ccode\u003eSTMatrix s np e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ee\u003c/code\u003e: the element type of the matrix.  Only certain element types\n       are supported.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Matrix.Dense.ST",
          "name": "STMatrix",
          "package": "blas",
          "source": "src/Data-Matrix-Dense-STBase.html#STMatrix",
          "type": "data"
        },
        "index": {
          "description": "Dense matrix in the ST monad The type arguments are as follows the state variable argument for the ST type np phantom type for the shape of the matrix Most functions will demand that this be specified as pair When writing function signature you should always prefer STMatrix to STMatrix np the element type of the matrix Only certain element types are supported",
          "hierarchy": "Data Matrix Dense ST",
          "module": "Data.Matrix.Dense.ST",
          "name": "STMatrix",
          "package": "blas",
          "partial": "STMatrix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-ST.html#t:STMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA safe way to create and work with a mutable matrix before returning \n an immutable matrix for later perusal. This function avoids copying\n the matrix before returning it - it uses unsafeFreezeMatrix internally,\n but this wrapper is a safe interface to that function. \n\u003c/p\u003e",
          "module": "Data.Matrix.Dense.ST",
          "name": "runSTMatrix",
          "package": "blas",
          "signature": "(forall s.  ST s (STMatrix s n e)) -\u003e Matrix n e",
          "source": "src/Data-Matrix-Dense-STBase.html#runSTMatrix",
          "type": "function"
        },
        "index": {
          "description": "safe way to create and work with mutable matrix before returning an immutable matrix for later perusal This function avoids copying the matrix before returning it it uses unsafeFreezeMatrix internally but this wrapper is safe interface to that function",
          "hierarchy": "Data Matrix Dense ST",
          "module": "Data.Matrix.Dense.ST",
          "name": "runSTMatrix",
          "normalized": "(a b ST c(STMatrix c d e))-\u003eMatrix d e",
          "package": "blas",
          "partial": "STMatrix",
          "signature": "(forall s. ST s(STMatrix s n e))-\u003eMatrix n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense-ST.html#v:runSTMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImmutable dense matrices.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Matrix.Dense",
          "name": "Dense",
          "package": "blas",
          "source": "src/Data-Matrix-Dense.html",
          "type": "module"
        },
        "index": {
          "description": "Immutable dense matrices",
          "hierarchy": "Data Matrix Dense",
          "module": "Data.Matrix.Dense",
          "name": "Dense",
          "package": "blas",
          "partial": "Dense",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommon functionality for all dense matrix types.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense",
          "name": "BaseMatrix",
          "package": "blas",
          "source": "src/Data-Matrix-Dense-Base.html#BaseMatrix",
          "type": "class"
        },
        "index": {
          "description": "Common functionality for all dense matrix types",
          "hierarchy": "Data Matrix Dense",
          "module": "Data.Matrix.Dense",
          "name": "BaseMatrix",
          "package": "blas",
          "partial": "Base Matrix",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense.html#t:BaseMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImmutable dense matrices.  The type arguments are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003enp\u003c/code\u003e: a phantom type for the shape of the matrix.  Most functions\n       will demand that this be specified as a pair.  When writing a function\n       signature, you should always prefer \u003ccode\u003eMatrix (n,p) e\u003c/code\u003e to\n       \u003ccode\u003eMatrix np e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ee\u003c/code\u003e: the element type of the matrix.  Only certain element types\n       are supported.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Matrix.Dense",
          "name": "Matrix",
          "package": "blas",
          "source": "src/Data-Matrix-Dense-Base.html#Matrix",
          "type": "data"
        },
        "index": {
          "description": "Immutable dense matrices The type arguments are as follows np phantom type for the shape of the matrix Most functions will demand that this be specified as pair When writing function signature you should always prefer Matrix to Matrix np the element type of the matrix Only certain element types are supported",
          "hierarchy": "Data Matrix Dense",
          "module": "Data.Matrix.Dense",
          "name": "Matrix",
          "package": "blas",
          "partial": "Matrix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense.html#t:Matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast the shape type of the matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense",
          "name": "coerceMatrix",
          "package": "blas",
          "signature": "a np e -\u003e a np' e",
          "source": "src/Data-Matrix-Dense-Base.html#coerceMatrix",
          "type": "method"
        },
        "index": {
          "description": "Cast the shape type of the matrix",
          "hierarchy": "Data Matrix Dense",
          "module": "Data.Matrix.Dense",
          "name": "coerceMatrix",
          "normalized": "a b c-\u003ea d c",
          "package": "blas",
          "partial": "Matrix",
          "signature": "a np e-\u003ea np' e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense.html#v:coerceMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a matrix of the given shape from a list of columns\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense",
          "name": "colsMatrix",
          "package": "blas",
          "signature": "(Int, Int) -\u003e [Vector n e] -\u003e Matrix (n, p) e",
          "source": "src/Data-Matrix-Dense-Base.html#colsMatrix",
          "type": "function"
        },
        "index": {
          "description": "Create matrix of the given shape from list of columns",
          "hierarchy": "Data Matrix Dense",
          "module": "Data.Matrix.Dense",
          "name": "colsMatrix",
          "normalized": "(Int,Int)-\u003e[Vector a b]-\u003eMatrix(a,c)b",
          "package": "blas",
          "partial": "Matrix",
          "signature": "(Int,Int)-\u003e[Vector n e]-\u003eMatrix(n,p)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense.html#v:colsMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a new constant of the given shape.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense",
          "name": "constantMatrix",
          "package": "blas",
          "signature": "(Int, Int) -\u003e e -\u003e Matrix (n, p) e",
          "source": "src/Data-Matrix-Dense-Base.html#constantMatrix",
          "type": "function"
        },
        "index": {
          "description": "Get new constant of the given shape",
          "hierarchy": "Data Matrix Dense",
          "module": "Data.Matrix.Dense",
          "name": "constantMatrix",
          "normalized": "(Int,Int)-\u003ea-\u003eMatrix(b,c)a",
          "package": "blas",
          "partial": "Matrix",
          "signature": "(Int,Int)-\u003ee-\u003eMatrix(n,p)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense.html#v:constantMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a the given diagonal in a matrix.  Negative indices correspond to\n sub-diagonals.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense",
          "name": "diag",
          "package": "blas",
          "signature": "Matrix (n, p) e -\u003e Int -\u003e Vector k e",
          "source": "src/Data-Matrix-Dense-Base.html#diag",
          "type": "function"
        },
        "index": {
          "description": "Get the given diagonal in matrix Negative indices correspond to sub-diagonals",
          "hierarchy": "Data Matrix Dense",
          "module": "Data.Matrix.Dense",
          "name": "diag",
          "normalized": "Matrix(a,b)c-\u003eInt-\u003eVector d c",
          "package": "blas",
          "signature": "Matrix(n,p)e-\u003eInt-\u003eVector k e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense.html#v:diag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a new matrix of the given shape with ones along the diagonal and\n zeroes everywhere else.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense",
          "name": "identityMatrix",
          "package": "blas",
          "signature": "(Int, Int) -\u003e Matrix (n, p) e",
          "source": "src/Data-Matrix-Dense-Base.html#identityMatrix",
          "type": "function"
        },
        "index": {
          "description": "Get new matrix of the given shape with ones along the diagonal and zeroes everywhere else",
          "hierarchy": "Data Matrix Dense",
          "module": "Data.Matrix.Dense",
          "name": "identityMatrix",
          "normalized": "(Int,Int)-\u003eMatrix(a,b)c",
          "package": "blas",
          "partial": "Matrix",
          "signature": "(Int,Int)-\u003eMatrix(n,p)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense.html#v:identityMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicate whether or not the underlying matrix storage is\n transposed and conjugated.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense",
          "name": "isHermMatrix",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Bool",
          "source": "src/Data-Matrix-Dense-Base.html#isHermMatrix",
          "type": "method"
        },
        "index": {
          "description": "Indicate whether or not the underlying matrix storage is transposed and conjugated",
          "hierarchy": "Data Matrix Dense",
          "module": "Data.Matrix.Dense",
          "name": "isHermMatrix",
          "normalized": "a(b,c)d-\u003eBool",
          "package": "blas",
          "partial": "Herm Matrix",
          "signature": "a(n,p)e-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense.html#v:isHermMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the leading dimension of the storage of the matrix.    \n\u003c/p\u003e",
          "module": "Data.Matrix.Dense",
          "name": "ldaMatrix",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Int",
          "source": "src/Data-Matrix-Dense-Base.html#ldaMatrix",
          "type": "method"
        },
        "index": {
          "description": "Get the leading dimension of the storage of the matrix",
          "hierarchy": "Data Matrix Dense",
          "module": "Data.Matrix.Dense",
          "name": "ldaMatrix",
          "normalized": "a(b,c)d-\u003eInt",
          "package": "blas",
          "partial": "Matrix",
          "signature": "a(n,p)e-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense.html#v:ldaMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new matrix with the given elements in row-major order.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense",
          "name": "listMatrix",
          "package": "blas",
          "signature": "(Int, Int) -\u003e [e] -\u003e Matrix (n, p) e",
          "source": "src/Data-Matrix-Dense-Base.html#listMatrix",
          "type": "function"
        },
        "index": {
          "description": "Create new matrix with the given elements in row-major order",
          "hierarchy": "Data Matrix Dense",
          "module": "Data.Matrix.Dense",
          "name": "listMatrix",
          "normalized": "(Int,Int)-\u003e[a]-\u003eMatrix(b,c)a",
          "package": "blas",
          "partial": "Matrix",
          "signature": "(Int,Int)-\u003e[e]-\u003eMatrix(n,p)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense.html#v:listMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new matrix of the given size and initialize the given elements to\n the given values.  All other elements get set to zero.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense",
          "name": "matrix",
          "package": "blas",
          "signature": "(Int, Int) -\u003e [((Int, Int), e)] -\u003e Matrix (n, p) e",
          "source": "src/Data-Matrix-Dense-Base.html#matrix",
          "type": "function"
        },
        "index": {
          "description": "Create new matrix of the given size and initialize the given elements to the given values All other elements get set to zero",
          "hierarchy": "Data Matrix Dense",
          "module": "Data.Matrix.Dense",
          "name": "matrix",
          "normalized": "(Int,Int)-\u003e[((Int,Int),a)]-\u003eMatrix(b,c)a",
          "package": "blas",
          "signature": "(Int,Int)-\u003e[((Int,Int),e)]-\u003eMatrix(n,p)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense.html#v:matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a matrix from a column vector.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense",
          "name": "matrixFromCol",
          "package": "blas",
          "signature": "Vector n e -\u003e Matrix (n, one) e",
          "source": "src/Data-Matrix-Dense-Base.html#matrixFromCol",
          "type": "function"
        },
        "index": {
          "description": "Get matrix from column vector",
          "hierarchy": "Data Matrix Dense",
          "module": "Data.Matrix.Dense",
          "name": "matrixFromCol",
          "normalized": "Vector a b-\u003eMatrix(a,c)b",
          "package": "blas",
          "partial": "From Col",
          "signature": "Vector n e-\u003eMatrix(n,one)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense.html#v:matrixFromCol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a matrix from a row vector.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense",
          "name": "matrixFromRow",
          "package": "blas",
          "signature": "Vector p e -\u003e Matrix (one, p) e",
          "source": "src/Data-Matrix-Dense-Base.html#matrixFromRow",
          "type": "function"
        },
        "index": {
          "description": "Get matrix from row vector",
          "hierarchy": "Data Matrix Dense",
          "module": "Data.Matrix.Dense",
          "name": "matrixFromRow",
          "normalized": "Vector a b-\u003eMatrix(c,a)b",
          "package": "blas",
          "partial": "From Row",
          "signature": "Vector p e-\u003eMatrix(one,p)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense.html#v:matrixFromRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a matrix from the elements stored in columnwise order in the vector.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense",
          "name": "matrixFromVector",
          "package": "blas",
          "signature": "(Int, Int) -\u003e Vector np e -\u003e Matrix (n, p) e",
          "source": "src/Data-Matrix-Dense-Base.html#matrixFromVector",
          "type": "function"
        },
        "index": {
          "description": "Get matrix from the elements stored in columnwise order in the vector",
          "hierarchy": "Data Matrix Dense",
          "module": "Data.Matrix.Dense",
          "name": "matrixFromVector",
          "normalized": "(Int,Int)-\u003eVector a b-\u003eMatrix(c,d)b",
          "package": "blas",
          "partial": "From Vector",
          "signature": "(Int,Int)-\u003eVector np e-\u003eMatrix(n,p)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense.html#v:matrixFromVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a matrix of the given shape from a list of rows\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense",
          "name": "rowsMatrix",
          "package": "blas",
          "signature": "(Int, Int) -\u003e [Vector p e] -\u003e Matrix (n, p) e",
          "source": "src/Data-Matrix-Dense-Base.html#rowsMatrix",
          "type": "function"
        },
        "index": {
          "description": "Create matrix of the given shape from list of rows",
          "hierarchy": "Data Matrix Dense",
          "module": "Data.Matrix.Dense",
          "name": "rowsMatrix",
          "normalized": "(Int,Int)-\u003e[Vector a b]-\u003eMatrix(c,a)b",
          "package": "blas",
          "partial": "Matrix",
          "signature": "(Int,Int)-\u003e[Vector p e]-\u003eMatrix(n,p)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense.html#v:rowsMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esubmatrix a ij mn\u003c/code\u003e returns the submatrix of \u003ccode\u003ea\u003c/code\u003e with element \u003ccode\u003e(0,0)\u003c/code\u003e\n being element \u003ccode\u003eij\u003c/code\u003e in \u003ccode\u003ea\u003c/code\u003e, and having shape \u003ccode\u003emn\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense",
          "name": "submatrix",
          "package": "blas",
          "signature": "Matrix (n, p) e -\u003e (Int, Int) -\u003e (Int, Int) -\u003e Matrix (n', p') e",
          "source": "src/Data-Matrix-Dense-Base.html#submatrix",
          "type": "function"
        },
        "index": {
          "description": "submatrix ij mn returns the submatrix of with element being element ij in and having shape mn",
          "hierarchy": "Data Matrix Dense",
          "module": "Data.Matrix.Dense",
          "name": "submatrix",
          "normalized": "Matrix(a,b)c-\u003e(Int,Int)-\u003e(Int,Int)-\u003eMatrix(d,e)c",
          "package": "blas",
          "signature": "Matrix(n,p)e-\u003e(Int,Int)-\u003e(Int,Int)-\u003eMatrix(n',p')e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense.html#v:submatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the storage type of the matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense",
          "name": "transEnumMatrix",
          "package": "blas",
          "signature": "a (n, p) e -\u003e TransEnum",
          "source": "src/Data-Matrix-Dense-Base.html#transEnumMatrix",
          "type": "method"
        },
        "index": {
          "description": "Get the storage type of the matrix",
          "hierarchy": "Data Matrix Dense",
          "module": "Data.Matrix.Dense",
          "name": "transEnumMatrix",
          "normalized": "a(b,c)d-\u003eTransEnum",
          "package": "blas",
          "partial": "Enum Matrix",
          "signature": "a(n,p)e-\u003eTransEnum",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense.html#v:transEnumMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a vector by concatenating the columns of the matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense",
          "name": "vectorFromMatrix",
          "package": "blas",
          "signature": "Matrix (n, p) e -\u003e Vector np e",
          "source": "src/Data-Matrix-Dense-Base.html#vectorFromMatrix",
          "type": "function"
        },
        "index": {
          "description": "Get vector by concatenating the columns of the matrix",
          "hierarchy": "Data Matrix Dense",
          "module": "Data.Matrix.Dense",
          "name": "vectorFromMatrix",
          "normalized": "Matrix(a,b)c-\u003eVector d c",
          "package": "blas",
          "partial": "From Matrix",
          "signature": "Matrix(n,p)e-\u003eVector np e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense.html#v:vectorFromMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a new zero of the given shape.\n\u003c/p\u003e",
          "module": "Data.Matrix.Dense",
          "name": "zeroMatrix",
          "package": "blas",
          "signature": "(Int, Int) -\u003e Matrix (n, p) e",
          "source": "src/Data-Matrix-Dense-Base.html#zeroMatrix",
          "type": "function"
        },
        "index": {
          "description": "Get new zero of the given shape",
          "hierarchy": "Data Matrix Dense",
          "module": "Data.Matrix.Dense",
          "name": "zeroMatrix",
          "normalized": "(Int,Int)-\u003eMatrix(a,b)c",
          "package": "blas",
          "partial": "Matrix",
          "signature": "(Int,Int)-\u003eMatrix(n,p)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Dense.html#v:zeroMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHermitian views of matrices.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Matrix.Herm",
          "name": "Herm",
          "package": "blas",
          "source": "src/Data-Matrix-Herm.html",
          "type": "module"
        },
        "index": {
          "description": "Hermitian views of matrices",
          "hierarchy": "Data Matrix Herm",
          "module": "Data.Matrix.Herm",
          "name": "Herm",
          "package": "blas",
          "partial": "Herm",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Herm.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hermitian view of an underlying matrix.  The view can either be\n of the upper or lower triangular part of the matrix.  The type arguments\n are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ea\u003c/code\u003e: the underlyting matrix type.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003enn\u003c/code\u003e: a phantom type for the shape of the matrix.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ee\u003c/code\u003e: the element type of the matrix.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Matrix.Herm",
          "name": "Herm",
          "package": "blas",
          "source": "src/Data-Matrix-HermBase.html#Herm",
          "type": "data"
        },
        "index": {
          "description": "hermitian view of an underlying matrix The view can either be of the upper or lower triangular part of the matrix The type arguments are as follows the underlyting matrix type nn phantom type for the shape of the matrix the element type of the matrix",
          "hierarchy": "Data Matrix Herm",
          "module": "Data.Matrix.Herm",
          "name": "Herm",
          "package": "blas",
          "partial": "Herm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Herm.html#t:Herm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Matrix.Herm",
          "name": "Herm",
          "package": "blas",
          "signature": "Herm UpLoEnum (a nn e)",
          "source": "src/Data-Matrix-HermBase.html#Herm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Matrix Herm",
          "module": "Data.Matrix.Herm",
          "name": "Herm",
          "package": "blas",
          "partial": "Herm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Herm.html#v:Herm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast the phantom shape type.\n\u003c/p\u003e",
          "module": "Data.Matrix.Herm",
          "name": "coerceHerm",
          "package": "blas",
          "signature": "Herm a mn e -\u003e Herm a mn' e",
          "source": "src/Data-Matrix-HermBase.html#coerceHerm",
          "type": "function"
        },
        "index": {
          "description": "Cast the phantom shape type",
          "hierarchy": "Data Matrix Herm",
          "module": "Data.Matrix.Herm",
          "name": "coerceHerm",
          "normalized": "Herm a b c-\u003eHerm a d c",
          "package": "blas",
          "partial": "Herm",
          "signature": "Herm a mn e-\u003eHerm a mn' e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Herm.html#v:coerceHerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from a base matrix type to a Herm matrix type.\n\u003c/p\u003e",
          "module": "Data.Matrix.Herm",
          "name": "hermFromBase",
          "package": "blas",
          "signature": "UpLoEnum -\u003e a (n, n) e -\u003e Herm a (n, n) e",
          "source": "src/Data-Matrix-HermBase.html#hermFromBase",
          "type": "function"
        },
        "index": {
          "description": "Convert from base matrix type to Herm matrix type",
          "hierarchy": "Data Matrix Herm",
          "module": "Data.Matrix.Herm",
          "name": "hermFromBase",
          "normalized": "UpLoEnum-\u003ea(b,b)c-\u003eHerm a(b,b)c",
          "package": "blas",
          "partial": "From Base",
          "signature": "UpLoEnum-\u003ea(n,n)e-\u003eHerm a(n,n)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Herm.html#v:hermFromBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a lower-triangular hermitian view into a matrix.  This also\n checks to see if the base matrix is square.\n\u003c/p\u003e",
          "module": "Data.Matrix.Herm",
          "name": "hermL",
          "package": "blas",
          "signature": "a (n, n) e -\u003e Herm a (n, n) e",
          "source": "src/Data-Matrix-HermBase.html#hermL",
          "type": "function"
        },
        "index": {
          "description": "Construct lower-triangular hermitian view into matrix This also checks to see if the base matrix is square",
          "hierarchy": "Data Matrix Herm",
          "module": "Data.Matrix.Herm",
          "name": "hermL",
          "normalized": "a(b,b)c-\u003eHerm a(b,b)c",
          "package": "blas",
          "signature": "a(n,n)e-\u003eHerm a(n,n)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Herm.html#v:hermL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from a Herm matrix type to a base matrix type.        \n\u003c/p\u003e",
          "module": "Data.Matrix.Herm",
          "name": "hermToBase",
          "package": "blas",
          "signature": "Herm a (n, n) e -\u003e (UpLoEnum, a (n, n) e)",
          "source": "src/Data-Matrix-HermBase.html#hermToBase",
          "type": "function"
        },
        "index": {
          "description": "Convert from Herm matrix type to base matrix type",
          "hierarchy": "Data Matrix Herm",
          "module": "Data.Matrix.Herm",
          "name": "hermToBase",
          "normalized": "Herm a(b,b)c-\u003e(UpLoEnum,a(b,b)c)",
          "package": "blas",
          "partial": "To Base",
          "signature": "Herm a(n,n)e-\u003e(UpLoEnum,a(n,n)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Herm.html#v:hermToBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an upper-triangular hermitian view into a matrix.  This also\n checks to see if the base matrix is square.\n\u003c/p\u003e",
          "module": "Data.Matrix.Herm",
          "name": "hermU",
          "package": "blas",
          "signature": "a (n, n) e -\u003e Herm a (n, n) e",
          "source": "src/Data-Matrix-HermBase.html#hermU",
          "type": "function"
        },
        "index": {
          "description": "Construct an upper-triangular hermitian view into matrix This also checks to see if the base matrix is square",
          "hierarchy": "Data Matrix Herm",
          "module": "Data.Matrix.Herm",
          "name": "hermU",
          "normalized": "a(b,b)c-\u003eHerm a(b,b)c",
          "package": "blas",
          "signature": "a(n,n)e-\u003eHerm a(n,n)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Herm.html#v:hermU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to the unerlying matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Herm",
          "name": "mapHerm",
          "package": "blas",
          "signature": "(a nn e -\u003e b nn' e) -\u003e Herm a nn e -\u003e Herm b nn' e",
          "source": "src/Data-Matrix-HermBase.html#mapHerm",
          "type": "function"
        },
        "index": {
          "description": "Apply function to the unerlying matrix",
          "hierarchy": "Data Matrix Herm",
          "module": "Data.Matrix.Herm",
          "name": "mapHerm",
          "normalized": "(a b c-\u003ed e c)-\u003eHerm a b c-\u003eHerm d e c",
          "package": "blas",
          "partial": "Herm",
          "signature": "(a nn e-\u003eb nn' e)-\u003eHerm a nn e-\u003eHerm b nn' e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Herm.html#v:mapHerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTriangular views of matrices.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Matrix.Tri",
          "name": "Tri",
          "package": "blas",
          "source": "src/Data-Matrix-Tri.html",
          "type": "module"
        },
        "index": {
          "description": "Triangular views of matrices",
          "hierarchy": "Data Matrix Tri",
          "module": "Data.Matrix.Tri",
          "name": "Tri",
          "package": "blas",
          "partial": "Tri",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Tri.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA triangular or trapezoidal view of an underlying matrix.  The view \n can either be of the upper or lower triangular part of the matrix, and\n can optionally include or exclude the diagonal.  If the diagonal enum \n is \u003ccode\u003eUnit\u003c/code\u003e, the diagonal entries of the underlying matrix are not\n referenced, but are assumed to be \u003ccode\u003e1\u003c/code\u003e.  The type arguments are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ea\u003c/code\u003e: the underlyting matrix type.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003enp\u003c/code\u003e: a phantom type for the shape of the view.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ee\u003c/code\u003e: the element type of the matrix.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Matrix.Tri",
          "name": "Tri",
          "package": "blas",
          "source": "src/Data-Matrix-TriBase.html#Tri",
          "type": "data"
        },
        "index": {
          "description": "triangular or trapezoidal view of an underlying matrix The view can either be of the upper or lower triangular part of the matrix and can optionally include or exclude the diagonal If the diagonal enum is Unit the diagonal entries of the underlying matrix are not referenced but are assumed to be The type arguments are as follows the underlyting matrix type np phantom type for the shape of the view the element type of the matrix",
          "hierarchy": "Data Matrix Tri",
          "module": "Data.Matrix.Tri",
          "name": "Tri",
          "package": "blas",
          "partial": "Tri",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Tri.html#t:Tri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Matrix.Tri",
          "name": "Tri",
          "package": "blas",
          "signature": "Tri UpLoEnum DiagEnum (a np e)",
          "source": "src/Data-Matrix-TriBase.html#Tri",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Matrix Tri",
          "module": "Data.Matrix.Tri",
          "name": "Tri",
          "package": "blas",
          "partial": "Tri",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Tri.html#v:Tri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast the phantom shape type.\n\u003c/p\u003e",
          "module": "Data.Matrix.Tri",
          "name": "coerceTri",
          "package": "blas",
          "signature": "Tri a np e -\u003e Tri a np' e",
          "source": "src/Data-Matrix-TriBase.html#coerceTri",
          "type": "function"
        },
        "index": {
          "description": "Cast the phantom shape type",
          "hierarchy": "Data Matrix Tri",
          "module": "Data.Matrix.Tri",
          "name": "coerceTri",
          "normalized": "Tri a b c-\u003eTri a d c",
          "package": "blas",
          "partial": "Tri",
          "signature": "Tri a np e-\u003eTri a np' e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Tri.html#v:coerceTri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a lower triangular view of a matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Tri",
          "name": "lower",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Tri a (n, p) e",
          "source": "src/Data-Matrix-TriBase.html#lower",
          "type": "function"
        },
        "index": {
          "description": "Get lower triangular view of matrix",
          "hierarchy": "Data Matrix Tri",
          "module": "Data.Matrix.Tri",
          "name": "lower",
          "normalized": "a(b,c)d-\u003eTri a(b,c)d",
          "package": "blas",
          "signature": "a(n,p)e-\u003eTri a(n,p)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Tri.html#v:lower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a lower triangular view of a matrix, with unit diagonal.\n\u003c/p\u003e",
          "module": "Data.Matrix.Tri",
          "name": "lowerU",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Tri a (n, p) e",
          "source": "src/Data-Matrix-TriBase.html#lowerU",
          "type": "function"
        },
        "index": {
          "description": "Get lower triangular view of matrix with unit diagonal",
          "hierarchy": "Data Matrix Tri",
          "module": "Data.Matrix.Tri",
          "name": "lowerU",
          "normalized": "a(b,c)d-\u003eTri a(b,c)d",
          "package": "blas",
          "signature": "a(n,p)e-\u003eTri a(n,p)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Tri.html#v:lowerU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to the base matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Tri",
          "name": "mapTri",
          "package": "blas",
          "signature": "(a np e -\u003e b np' e) -\u003e Tri a np e -\u003e Tri b np' e",
          "source": "src/Data-Matrix-TriBase.html#mapTri",
          "type": "function"
        },
        "index": {
          "description": "Apply function to the base matrix",
          "hierarchy": "Data Matrix Tri",
          "module": "Data.Matrix.Tri",
          "name": "mapTri",
          "normalized": "(a b c-\u003ed e c)-\u003eTri a b c-\u003eTri d e c",
          "package": "blas",
          "partial": "Tri",
          "signature": "(a np e-\u003eb np' e)-\u003eTri a np e-\u003eTri b np' e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Tri.html#v:mapTri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from a base matrix type to a triangular view.\n\u003c/p\u003e",
          "module": "Data.Matrix.Tri",
          "name": "triFromBase",
          "package": "blas",
          "signature": "UpLoEnum -\u003e DiagEnum -\u003e a (n, p) e -\u003e Tri a (n, p) e",
          "source": "src/Data-Matrix-TriBase.html#triFromBase",
          "type": "function"
        },
        "index": {
          "description": "Convert from base matrix type to triangular view",
          "hierarchy": "Data Matrix Tri",
          "module": "Data.Matrix.Tri",
          "name": "triFromBase",
          "normalized": "UpLoEnum-\u003eDiagEnum-\u003ea(b,c)d-\u003eTri a(b,c)d",
          "package": "blas",
          "partial": "From Base",
          "signature": "UpLoEnum-\u003eDiagEnum-\u003ea(n,p)e-\u003eTri a(n,p)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Tri.html#v:triFromBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from a triangular view to the base matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Tri",
          "name": "triToBase",
          "package": "blas",
          "signature": "Tri a (n, p) e -\u003e (UpLoEnum, DiagEnum, a (n, p) e)",
          "source": "src/Data-Matrix-TriBase.html#triToBase",
          "type": "function"
        },
        "index": {
          "description": "Convert from triangular view to the base matrix",
          "hierarchy": "Data Matrix Tri",
          "module": "Data.Matrix.Tri",
          "name": "triToBase",
          "normalized": "Tri a(b,c)d-\u003e(UpLoEnum,DiagEnum,a(b,c)d)",
          "package": "blas",
          "partial": "To Base",
          "signature": "Tri a(n,p)e-\u003e(UpLoEnum,DiagEnum,a(n,p)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Tri.html#v:triToBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an upper triangular view of a matrix.\n\u003c/p\u003e",
          "module": "Data.Matrix.Tri",
          "name": "upper",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Tri a (n, p) e",
          "source": "src/Data-Matrix-TriBase.html#upper",
          "type": "function"
        },
        "index": {
          "description": "Get an upper triangular view of matrix",
          "hierarchy": "Data Matrix Tri",
          "module": "Data.Matrix.Tri",
          "name": "upper",
          "normalized": "a(b,c)d-\u003eTri a(b,c)d",
          "package": "blas",
          "signature": "a(n,p)e-\u003eTri a(n,p)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Tri.html#v:upper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an upper triangular view of a matrix, with unit diagonal.\n\u003c/p\u003e",
          "module": "Data.Matrix.Tri",
          "name": "upperU",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Tri a (n, p) e",
          "source": "src/Data-Matrix-TriBase.html#upperU",
          "type": "function"
        },
        "index": {
          "description": "Get an upper triangular view of matrix with unit diagonal",
          "hierarchy": "Data Matrix Tri",
          "module": "Data.Matrix.Tri",
          "name": "upperU",
          "normalized": "a(b,c)d-\u003eTri a(b,c)d",
          "package": "blas",
          "signature": "a(n,p)e-\u003eTri a(n,p)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Matrix-Tri.html#v:upperU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOverloaded interface for immutable tensors.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Tensor.Class.ITensor",
          "name": "ITensor",
          "package": "blas",
          "source": "src/Data-Tensor-Class-ITensor.html",
          "type": "module"
        },
        "index": {
          "description": "Overloaded interface for immutable tensors",
          "hierarchy": "Data Tensor Class ITensor",
          "module": "Data.Tensor.Class.ITensor",
          "name": "ITensor",
          "package": "blas",
          "partial": "ITensor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-ITensor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for immutable tensors.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.ITensor",
          "name": "ITensor",
          "package": "blas",
          "source": "src/Data-Tensor-Class-ITensor.html#ITensor",
          "type": "class"
        },
        "index": {
          "description": "class for immutable tensors",
          "hierarchy": "Data Tensor Class ITensor",
          "module": "Data.Tensor.Class.ITensor",
          "name": "ITensor",
          "package": "blas",
          "partial": "ITensor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-ITensor.html#t:ITensor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value at the given index.  Range-checks the argument.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.ITensor",
          "name": "(!)",
          "package": "blas",
          "signature": "x n e -\u003e i -\u003e e",
          "source": "src/Data-Tensor-Class-ITensor.html#%21",
          "type": "function"
        },
        "index": {
          "description": "Get the value at the given index Range-checks the argument",
          "hierarchy": "Data Tensor Class ITensor",
          "module": "Data.Tensor.Class.ITensor",
          "name": "(!) !",
          "normalized": "a b c-\u003ed-\u003ec",
          "package": "blas",
          "signature": "x n e-\u003ei-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-ITensor.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale every element by the given value.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.ITensor",
          "name": "(*\u003e)",
          "package": "blas",
          "signature": "e -\u003e x n e -\u003e x n e",
          "source": "src/Data-Tensor-Class-ITensor.html#%2A%3E",
          "type": "method"
        },
        "index": {
          "description": "Scale every element by the given value",
          "hierarchy": "Data Tensor Class ITensor",
          "module": "Data.Tensor.Class.ITensor",
          "name": "(*\u003e) *\u003e",
          "normalized": "a-\u003eb c a-\u003eb c a",
          "package": "blas",
          "signature": "e-\u003ex n e-\u003ex n e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-ITensor.html#v:-42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a new tensor by replacing the elements at the given indices.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.ITensor",
          "name": "(//)",
          "package": "blas",
          "signature": "x n e -\u003e [(i, e)] -\u003e x n e",
          "source": "src/Data-Tensor-Class-ITensor.html#%2F%2F",
          "type": "method"
        },
        "index": {
          "description": "Get new tensor by replacing the elements at the given indices",
          "hierarchy": "Data Tensor Class ITensor",
          "module": "Data.Tensor.Class.ITensor",
          "name": "(//) //",
          "normalized": "a b c-\u003e[(d,c)]-\u003ea b c",
          "package": "blas",
          "signature": "x n e-\u003e[(i,e)]-\u003ex n e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-ITensor.html#v:-47--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the list of \u003ccode\u003e(\u003c/code\u003eindex\u003ccode\u003e,\u003c/code\u003e element\u003ccode\u003e)\u003c/code\u003e pairs stored in the tensor.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.ITensor",
          "name": "assocs",
          "package": "blas",
          "signature": "x n e -\u003e [(i, e)]",
          "source": "src/Data-Tensor-Class-ITensor.html#assocs",
          "type": "method"
        },
        "index": {
          "description": "Get the list of index element pairs stored in the tensor",
          "hierarchy": "Data Tensor Class ITensor",
          "module": "Data.Tensor.Class.ITensor",
          "name": "assocs",
          "normalized": "a b c-\u003e[(d,c)]",
          "package": "blas",
          "signature": "x n e-\u003e[(i,e)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-ITensor.html#v:assocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the elements stored in the tensor.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.ITensor",
          "name": "elems",
          "package": "blas",
          "signature": "x n e -\u003e [e]",
          "source": "src/Data-Tensor-Class-ITensor.html#elems",
          "type": "method"
        },
        "index": {
          "description": "Get the elements stored in the tensor",
          "hierarchy": "Data Tensor Class ITensor",
          "module": "Data.Tensor.Class.ITensor",
          "name": "elems",
          "normalized": "a b c-\u003e[c]",
          "package": "blas",
          "signature": "x n e-\u003e[e]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-ITensor.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the indices of the elements stored in the tensor.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.ITensor",
          "name": "indices",
          "package": "blas",
          "signature": "x n e -\u003e [i]",
          "source": "src/Data-Tensor-Class-ITensor.html#indices",
          "type": "method"
        },
        "index": {
          "description": "Get the indices of the elements stored in the tensor",
          "hierarchy": "Data Tensor Class ITensor",
          "module": "Data.Tensor.Class.ITensor",
          "name": "indices",
          "normalized": "a b c-\u003e[d]",
          "package": "blas",
          "signature": "x n e-\u003e[i]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-ITensor.html#v:indices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a constant to every element.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.ITensor",
          "name": "shift",
          "package": "blas",
          "signature": "e -\u003e x n e -\u003e x n e",
          "source": "src/Data-Tensor-Class-ITensor.html#shift",
          "type": "method"
        },
        "index": {
          "description": "Add constant to every element",
          "hierarchy": "Data Tensor Class ITensor",
          "module": "Data.Tensor.Class.ITensor",
          "name": "shift",
          "normalized": "a-\u003eb c a-\u003eb c a",
          "package": "blas",
          "signature": "e-\u003ex n e-\u003ex n e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-ITensor.html#v:shift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the numer of elements stored in the tensor.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.ITensor",
          "name": "size",
          "package": "blas",
          "signature": "x n e -\u003e Int",
          "source": "src/Data-Tensor-Class-ITensor.html#size",
          "type": "method"
        },
        "index": {
          "description": "Get the numer of elements stored in the tensor",
          "hierarchy": "Data Tensor Class ITensor",
          "module": "Data.Tensor.Class.ITensor",
          "name": "size",
          "normalized": "a b c-\u003eInt",
          "package": "blas",
          "signature": "x n e-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-ITensor.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function elementwise to a tensor.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.ITensor",
          "name": "tmap",
          "package": "blas",
          "signature": "(e -\u003e e) -\u003e x n e -\u003e x n e",
          "source": "src/Data-Tensor-Class-ITensor.html#tmap",
          "type": "method"
        },
        "index": {
          "description": "Apply function elementwise to tensor",
          "hierarchy": "Data Tensor Class ITensor",
          "module": "Data.Tensor.Class.ITensor",
          "name": "tmap",
          "normalized": "(a-\u003ea)-\u003eb c a-\u003eb c a",
          "package": "blas",
          "signature": "(e-\u003ee)-\u003ex n e-\u003ex n e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-ITensor.html#v:tmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value at the given index, without doing any bounds-checking.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.ITensor",
          "name": "unsafeAt",
          "package": "blas",
          "signature": "x n e -\u003e i -\u003e e",
          "source": "src/Data-Tensor-Class-ITensor.html#unsafeAt",
          "type": "method"
        },
        "index": {
          "description": "Get the value at the given index without doing any bounds-checking",
          "hierarchy": "Data Tensor Class ITensor",
          "module": "Data.Tensor.Class.ITensor",
          "name": "unsafeAt",
          "normalized": "a b c-\u003ed-\u003ec",
          "package": "blas",
          "partial": "At",
          "signature": "x n e-\u003ei-\u003ee",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-ITensor.html#v:unsafeAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as '(\u003cem/\u003e)' but doesn't do any bounds-checking.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.ITensor",
          "name": "unsafeReplace",
          "package": "blas",
          "signature": "x n e -\u003e [(i, e)] -\u003e x n e",
          "source": "src/Data-Tensor-Class-ITensor.html#unsafeReplace",
          "type": "method"
        },
        "index": {
          "description": "Same as but doesn do any bounds-checking",
          "hierarchy": "Data Tensor Class ITensor",
          "module": "Data.Tensor.Class.ITensor",
          "name": "unsafeReplace",
          "normalized": "a b c-\u003e[(d,c)]-\u003ea b c",
          "package": "blas",
          "partial": "Replace",
          "signature": "x n e-\u003e[(i,e)]-\u003ex n e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-ITensor.html#v:unsafeReplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOverloaded interface for mutable tensors.  This modules includes tensors\n which can be \u003cem\u003eread\u003c/em\u003e in a monad, \u003ccode\u003e\u003ca\u003eReadTensor\u003c/a\u003e\u003c/code\u003e, as well as tensors which\n can be \u003cem\u003emodified\u003c/em\u003e in a monad, \u003ccode\u003e\u003ca\u003eWriteTensor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Tensor.Class.MTensor",
          "name": "MTensor",
          "package": "blas",
          "source": "src/Data-Tensor-Class-MTensor.html",
          "type": "module"
        },
        "index": {
          "description": "Overloaded interface for mutable tensors This modules includes tensors which can be read in monad ReadTensor as well as tensors which can be modified in monad WriteTensor",
          "hierarchy": "Data Tensor Class MTensor",
          "module": "Data.Tensor.Class.MTensor",
          "name": "MTensor",
          "package": "blas",
          "partial": "MTensor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-MTensor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for mutable read-only tensors.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.MTensor",
          "name": "ReadTensor",
          "package": "blas",
          "source": "src/Data-Tensor-Class-MTensor.html#ReadTensor",
          "type": "class"
        },
        "index": {
          "description": "Class for mutable read-only tensors",
          "hierarchy": "Data Tensor Class MTensor",
          "module": "Data.Tensor.Class.MTensor",
          "name": "ReadTensor",
          "package": "blas",
          "partial": "Read Tensor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-MTensor.html#t:ReadTensor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for modifiable mutable tensors.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.MTensor",
          "name": "WriteTensor",
          "package": "blas",
          "source": "src/Data-Tensor-Class-MTensor.html#WriteTensor",
          "type": "class"
        },
        "index": {
          "description": "Class for modifiable mutable tensors",
          "hierarchy": "Data Tensor Class MTensor",
          "module": "Data.Tensor.Class.MTensor",
          "name": "WriteTensor",
          "package": "blas",
          "partial": "Write Tensor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-MTensor.html#t:WriteTensor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the value at a given index can be changed\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.MTensor",
          "name": "canModifyElem",
          "package": "blas",
          "signature": "x n e -\u003e i -\u003e m Bool",
          "source": "src/Data-Tensor-Class-MTensor.html#canModifyElem",
          "type": "method"
        },
        "index": {
          "description": "True if the value at given index can be changed",
          "hierarchy": "Data Tensor Class MTensor",
          "module": "Data.Tensor.Class.MTensor",
          "name": "canModifyElem",
          "normalized": "a b c-\u003ed-\u003ee Bool",
          "package": "blas",
          "partial": "Modify Elem",
          "signature": "x n e-\u003ei-\u003em Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-MTensor.html#v:canModifyElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace every element with its complex conjugate.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.MTensor",
          "name": "doConj",
          "package": "blas",
          "signature": "x n e -\u003e m ()",
          "source": "src/Data-Tensor-Class-MTensor.html#doConj",
          "type": "method"
        },
        "index": {
          "description": "Replace every element with its complex conjugate",
          "hierarchy": "Data Tensor Class MTensor",
          "module": "Data.Tensor.Class.MTensor",
          "name": "doConj",
          "normalized": "a b c-\u003ed()",
          "package": "blas",
          "partial": "Conj",
          "signature": "x n e-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-MTensor.html#v:doConj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a lazy list of the elements-index pairs in the tensor.  \n Because of the laziness, this function should be used with care.\n See also \u003ca\u003egetAssocs'\u003c/a\u003e.        \n\u003c/p\u003e",
          "module": "Data.Tensor.Class.MTensor",
          "name": "getAssocs",
          "package": "blas",
          "signature": "x n e -\u003e m [(i, e)]",
          "source": "src/Data-Tensor-Class-MTensor.html#getAssocs",
          "type": "method"
        },
        "index": {
          "description": "Returns lazy list of the elements-index pairs in the tensor Because of the laziness this function should be used with care See also getAssocs",
          "hierarchy": "Data Tensor Class MTensor",
          "module": "Data.Tensor.Class.MTensor",
          "name": "getAssocs",
          "normalized": "a b c-\u003ed[(e,c)]",
          "package": "blas",
          "partial": "Assocs",
          "signature": "x n e-\u003em[(i,e)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-MTensor.html#v:getAssocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of the index-elements pairs in the tensor.  See also\n \u003ccode\u003e\u003ca\u003egetAssocs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.MTensor",
          "name": "getAssocs'",
          "package": "blas",
          "signature": "x n e -\u003e m [(i, e)]",
          "source": "src/Data-Tensor-Class-MTensor.html#getAssocs%27",
          "type": "method"
        },
        "index": {
          "description": "Returns list of the index-elements pairs in the tensor See also getAssocs",
          "hierarchy": "Data Tensor Class MTensor",
          "module": "Data.Tensor.Class.MTensor",
          "name": "getAssocs'",
          "normalized": "a b c-\u003ed[(e,c)]",
          "package": "blas",
          "partial": "Assocs'",
          "signature": "x n e-\u003em[(i,e)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-MTensor.html#v:getAssocs-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a lazy list of the elements in the tensor.  \n Because of the laziness, this function should be used with care.\n See also \u003ca\u003egetElems'\u003c/a\u003e.    \n\u003c/p\u003e",
          "module": "Data.Tensor.Class.MTensor",
          "name": "getElems",
          "package": "blas",
          "signature": "x n e -\u003e m [e]",
          "source": "src/Data-Tensor-Class-MTensor.html#getElems",
          "type": "method"
        },
        "index": {
          "description": "Returns lazy list of the elements in the tensor Because of the laziness this function should be used with care See also getElems",
          "hierarchy": "Data Tensor Class MTensor",
          "module": "Data.Tensor.Class.MTensor",
          "name": "getElems",
          "normalized": "a b c-\u003ed[c]",
          "package": "blas",
          "partial": "Elems",
          "signature": "x n e-\u003em[e]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-MTensor.html#v:getElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of the elements in the tensor.  See also\n \u003ccode\u003e\u003ca\u003egetElems\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.MTensor",
          "name": "getElems'",
          "package": "blas",
          "signature": "x n e -\u003e m [e]",
          "source": "src/Data-Tensor-Class-MTensor.html#getElems%27",
          "type": "method"
        },
        "index": {
          "description": "Returns list of the elements in the tensor See also getElems",
          "hierarchy": "Data Tensor Class MTensor",
          "module": "Data.Tensor.Class.MTensor",
          "name": "getElems'",
          "normalized": "a b c-\u003ed[c]",
          "package": "blas",
          "partial": "Elems'",
          "signature": "x n e-\u003em[e]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-MTensor.html#v:getElems-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a lazy list of the indices in the tensor.  \n Because of the laziness, this function should be used with care.\n See also \u003ca\u003egetIndices'\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.MTensor",
          "name": "getIndices",
          "package": "blas",
          "signature": "x n e -\u003e m [i]",
          "source": "src/Data-Tensor-Class-MTensor.html#getIndices",
          "type": "method"
        },
        "index": {
          "description": "Returns lazy list of the indices in the tensor Because of the laziness this function should be used with care See also getIndices",
          "hierarchy": "Data Tensor Class MTensor",
          "module": "Data.Tensor.Class.MTensor",
          "name": "getIndices",
          "normalized": "a b c-\u003ed[e]",
          "package": "blas",
          "partial": "Indices",
          "signature": "x n e-\u003em[i]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-MTensor.html#v:getIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of the indices in the tensor.  See also\n \u003ccode\u003e\u003ca\u003egetIndices\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.MTensor",
          "name": "getIndices'",
          "package": "blas",
          "signature": "x n e -\u003e m [i]",
          "source": "src/Data-Tensor-Class-MTensor.html#getIndices%27",
          "type": "method"
        },
        "index": {
          "description": "Returns list of the indices in the tensor See also getIndices",
          "hierarchy": "Data Tensor Class MTensor",
          "module": "Data.Tensor.Class.MTensor",
          "name": "getIndices'",
          "normalized": "a b c-\u003ed[e]",
          "package": "blas",
          "partial": "Indices'",
          "signature": "x n e-\u003em[i]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-MTensor.html#v:getIndices-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the maximum number of elements that can be stored in the tensor.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.MTensor",
          "name": "getMaxSize",
          "package": "blas",
          "signature": "x n e -\u003e m Int",
          "source": "src/Data-Tensor-Class-MTensor.html#getMaxSize",
          "type": "method"
        },
        "index": {
          "description": "Get the maximum number of elements that can be stored in the tensor",
          "hierarchy": "Data Tensor Class MTensor",
          "module": "Data.Tensor.Class.MTensor",
          "name": "getMaxSize",
          "normalized": "a b c-\u003ed Int",
          "package": "blas",
          "partial": "Max Size",
          "signature": "x n e-\u003em Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-MTensor.html#v:getMaxSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the number of elements stored in the tensor.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.MTensor",
          "name": "getSize",
          "package": "blas",
          "signature": "x n e -\u003e m Int",
          "source": "src/Data-Tensor-Class-MTensor.html#getSize",
          "type": "method"
        },
        "index": {
          "description": "Get the number of elements stored in the tensor",
          "hierarchy": "Data Tensor Class MTensor",
          "module": "Data.Tensor.Class.MTensor",
          "name": "getSize",
          "normalized": "a b c-\u003ed Int",
          "package": "blas",
          "partial": "Size",
          "signature": "x n e-\u003em Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-MTensor.html#v:getSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the value of the element at the given index.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.MTensor",
          "name": "modifyElem",
          "package": "blas",
          "signature": "x n e -\u003e i -\u003e (e -\u003e e) -\u003e m ()",
          "source": "src/Data-Tensor-Class-MTensor.html#modifyElem",
          "type": "function"
        },
        "index": {
          "description": "Update the value of the element at the given index",
          "hierarchy": "Data Tensor Class MTensor",
          "module": "Data.Tensor.Class.MTensor",
          "name": "modifyElem",
          "normalized": "a b c-\u003ed-\u003e(c-\u003ec)-\u003ee()",
          "package": "blas",
          "partial": "Elem",
          "signature": "x n e-\u003ei-\u003e(e-\u003ee)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-MTensor.html#v:modifyElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace each element by a function applied to it\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.MTensor",
          "name": "modifyWith",
          "package": "blas",
          "signature": "(e -\u003e e) -\u003e x n e -\u003e m ()",
          "source": "src/Data-Tensor-Class-MTensor.html#modifyWith",
          "type": "method"
        },
        "index": {
          "description": "Replace each element by function applied to it",
          "hierarchy": "Data Tensor Class MTensor",
          "module": "Data.Tensor.Class.MTensor",
          "name": "modifyWith",
          "normalized": "(a-\u003ea)-\u003eb c a-\u003ed()",
          "package": "blas",
          "partial": "With",
          "signature": "(e-\u003ee)-\u003ex n e-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-MTensor.html#v:modifyWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the value at the specified index after checking that the argument\n is in bounds.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.MTensor",
          "name": "readElem",
          "package": "blas",
          "signature": "x n e -\u003e i -\u003e m e",
          "source": "src/Data-Tensor-Class-MTensor.html#readElem",
          "type": "function"
        },
        "index": {
          "description": "Gets the value at the specified index after checking that the argument is in bounds",
          "hierarchy": "Data Tensor Class MTensor",
          "module": "Data.Tensor.Class.MTensor",
          "name": "readElem",
          "normalized": "a b c-\u003ed-\u003ee c",
          "package": "blas",
          "partial": "Elem",
          "signature": "x n e-\u003ei-\u003em e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-MTensor.html#v:readElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale every element in the vector by the given value.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.MTensor",
          "name": "scaleBy",
          "package": "blas",
          "signature": "e -\u003e x n e -\u003e m ()",
          "source": "src/Data-Tensor-Class-MTensor.html#scaleBy",
          "type": "method"
        },
        "index": {
          "description": "Scale every element in the vector by the given value",
          "hierarchy": "Data Tensor Class MTensor",
          "module": "Data.Tensor.Class.MTensor",
          "name": "scaleBy",
          "normalized": "a-\u003eb c a-\u003ed()",
          "package": "blas",
          "partial": "By",
          "signature": "e-\u003ex n e-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-MTensor.html#v:scaleBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets all stored elements to the given value.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.MTensor",
          "name": "setConstant",
          "package": "blas",
          "signature": "e -\u003e x n e -\u003e m ()",
          "source": "src/Data-Tensor-Class-MTensor.html#setConstant",
          "type": "method"
        },
        "index": {
          "description": "Sets all stored elements to the given value",
          "hierarchy": "Data Tensor Class MTensor",
          "module": "Data.Tensor.Class.MTensor",
          "name": "setConstant",
          "normalized": "a-\u003eb c a-\u003ed()",
          "package": "blas",
          "partial": "Constant",
          "signature": "e-\u003ex n e-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-MTensor.html#v:setConstant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets all stored elements to zero.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.MTensor",
          "name": "setZero",
          "package": "blas",
          "signature": "x n e -\u003e m ()",
          "source": "src/Data-Tensor-Class-MTensor.html#setZero",
          "type": "method"
        },
        "index": {
          "description": "Sets all stored elements to zero",
          "hierarchy": "Data Tensor Class MTensor",
          "module": "Data.Tensor.Class.MTensor",
          "name": "setZero",
          "normalized": "a b c-\u003ed()",
          "package": "blas",
          "partial": "Zero",
          "signature": "x n e-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-MTensor.html#v:setZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a value to every element in a vector.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.MTensor",
          "name": "shiftBy",
          "package": "blas",
          "signature": "e -\u003e x n e -\u003e m ()",
          "source": "src/Data-Tensor-Class-MTensor.html#shiftBy",
          "type": "method"
        },
        "index": {
          "description": "Add value to every element in vector",
          "hierarchy": "Data Tensor Class MTensor",
          "module": "Data.Tensor.Class.MTensor",
          "name": "shiftBy",
          "normalized": "a-\u003eb c a-\u003ed()",
          "package": "blas",
          "partial": "By",
          "signature": "e-\u003ex n e-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-MTensor.html#v:shiftBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwap the values stored at two positions in the tensor.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.MTensor",
          "name": "swapElems",
          "package": "blas",
          "signature": "x n e -\u003e i -\u003e i -\u003e m ()",
          "source": "src/Data-Tensor-Class-MTensor.html#swapElems",
          "type": "function"
        },
        "index": {
          "description": "Swap the values stored at two positions in the tensor",
          "hierarchy": "Data Tensor Class MTensor",
          "module": "Data.Tensor.Class.MTensor",
          "name": "swapElems",
          "normalized": "a b c-\u003ed-\u003ed-\u003ee()",
          "package": "blas",
          "partial": "Elems",
          "signature": "x n e-\u003ei-\u003ei-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-MTensor.html#v:swapElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the value of the element at the given index, without doing\n any range checking.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.MTensor",
          "name": "unsafeModifyElem",
          "package": "blas",
          "signature": "x n e -\u003e i -\u003e (e -\u003e e) -\u003e m ()",
          "source": "src/Data-Tensor-Class-MTensor.html#unsafeModifyElem",
          "type": "method"
        },
        "index": {
          "description": "Modify the value of the element at the given index without doing any range checking",
          "hierarchy": "Data Tensor Class MTensor",
          "module": "Data.Tensor.Class.MTensor",
          "name": "unsafeModifyElem",
          "normalized": "a b c-\u003ed-\u003e(c-\u003ec)-\u003ee()",
          "package": "blas",
          "partial": "Modify Elem",
          "signature": "x n e-\u003ei-\u003e(e-\u003ee)-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-MTensor.html#v:unsafeModifyElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value at the specified index, without doing any \n range-checking.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.MTensor",
          "name": "unsafeReadElem",
          "package": "blas",
          "signature": "x n e -\u003e i -\u003e m e",
          "source": "src/Data-Tensor-Class-MTensor.html#unsafeReadElem",
          "type": "method"
        },
        "index": {
          "description": "Get the value at the specified index without doing any range-checking",
          "hierarchy": "Data Tensor Class MTensor",
          "module": "Data.Tensor.Class.MTensor",
          "name": "unsafeReadElem",
          "normalized": "a b c-\u003ed-\u003ee c",
          "package": "blas",
          "partial": "Read Elem",
          "signature": "x n e-\u003ei-\u003em e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-MTensor.html#v:unsafeReadElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003eswapElem\u003c/code\u003e but arguments are not range-checked.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.MTensor",
          "name": "unsafeSwapElems",
          "package": "blas",
          "signature": "x n e -\u003e i -\u003e i -\u003e m ()",
          "source": "src/Data-Tensor-Class-MTensor.html#unsafeSwapElems",
          "type": "method"
        },
        "index": {
          "description": "Same as swapElem but arguments are not range-checked",
          "hierarchy": "Data Tensor Class MTensor",
          "module": "Data.Tensor.Class.MTensor",
          "name": "unsafeSwapElems",
          "normalized": "a b c-\u003ed-\u003ed-\u003ee()",
          "package": "blas",
          "partial": "Swap Elems",
          "signature": "x n e-\u003ei-\u003ei-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-MTensor.html#v:unsafeSwapElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the value of the element at the given index, without doing any\n range checking.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.MTensor",
          "name": "unsafeWriteElem",
          "package": "blas",
          "signature": "x n e -\u003e i -\u003e e -\u003e m ()",
          "source": "src/Data-Tensor-Class-MTensor.html#unsafeWriteElem",
          "type": "method"
        },
        "index": {
          "description": "Set the value of the element at the given index without doing any range checking",
          "hierarchy": "Data Tensor Class MTensor",
          "module": "Data.Tensor.Class.MTensor",
          "name": "unsafeWriteElem",
          "normalized": "a b c-\u003ed-\u003ec-\u003ee()",
          "package": "blas",
          "partial": "Write Elem",
          "signature": "x n e-\u003ei-\u003ee-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-MTensor.html#v:unsafeWriteElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the value of the element at the given index.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class.MTensor",
          "name": "writeElem",
          "package": "blas",
          "signature": "x n e -\u003e i -\u003e e -\u003e m ()",
          "source": "src/Data-Tensor-Class-MTensor.html#writeElem",
          "type": "function"
        },
        "index": {
          "description": "Set the value of the element at the given index",
          "hierarchy": "Data Tensor Class MTensor",
          "module": "Data.Tensor.Class.MTensor",
          "name": "writeElem",
          "normalized": "a b c-\u003ed-\u003ec-\u003ee()",
          "package": "blas",
          "partial": "Elem",
          "signature": "x n e-\u003ei-\u003ee-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class-MTensor.html#v:writeElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOverloaded interface for mutable and immutable tensors.  This module\n contains the common functionality for the classes in \n \u003ca\u003eData.Tensor.Class.ITensor\u003c/a\u003e and \u003ca\u003eData.Tensor.Class.MTensor\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Tensor.Class",
          "name": "Class",
          "package": "blas",
          "source": "src/Data-Tensor-Class.html",
          "type": "module"
        },
        "index": {
          "description": "Overloaded interface for mutable and immutable tensors This module contains the common functionality for the classes in Data.Tensor.Class.ITensor and Data.Tensor.Class.MTensor",
          "hierarchy": "Data Tensor Class",
          "module": "Data.Tensor.Class",
          "name": "Class",
          "package": "blas",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe base class for objects with shapes and indices \n (i.e. Vector, Matrix, etc.).\n\u003c/p\u003e",
          "module": "Data.Tensor.Class",
          "name": "Shaped",
          "package": "blas",
          "source": "src/Data-Tensor-Class.html#Shaped",
          "type": "class"
        },
        "index": {
          "description": "The base class for objects with shapes and indices i.e Vector Matrix etc",
          "hierarchy": "Data Tensor Class",
          "module": "Data.Tensor.Class",
          "name": "Shaped",
          "package": "blas",
          "partial": "Shaped",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class.html#t:Shaped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the range of valid indices in the tensor.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class",
          "name": "bounds",
          "package": "blas",
          "signature": "x n e -\u003e (i, i)",
          "source": "src/Data-Tensor-Class.html#bounds",
          "type": "method"
        },
        "index": {
          "description": "Get the range of valid indices in the tensor",
          "hierarchy": "Data Tensor Class",
          "module": "Data.Tensor.Class",
          "name": "bounds",
          "normalized": "a b c-\u003e(d,d)",
          "package": "blas",
          "signature": "x n e-\u003e(i,i)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the shape of the tensor.  For vectors this is the dimension.\n For matrices, this will be a pair \u003ccode\u003e(m,n)\u003c/code\u003e of the number of rows\n and columns.\n\u003c/p\u003e",
          "module": "Data.Tensor.Class",
          "name": "shape",
          "package": "blas",
          "signature": "x n e -\u003e i",
          "source": "src/Data-Tensor-Class.html#shape",
          "type": "method"
        },
        "index": {
          "description": "Get the shape of the tensor For vectors this is the dimension For matrices this will be pair of the number of rows and columns",
          "hierarchy": "Data Tensor Class",
          "module": "Data.Tensor.Class",
          "name": "shape",
          "normalized": "a b c-\u003ed",
          "package": "blas",
          "signature": "x n e-\u003ei",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Tensor-Class.html#v:shape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn overloaded interface to mutable dense vectors.  For vector types\n than can be used with this interface, see \u003ca\u003eData.Vector.Dense.IO\u003c/a\u003e and\n \u003ca\u003eData.Vector.Dense.ST\u003c/a\u003e.  Many of these functions can also be used with\n the immutable type defined in \u003ca\u003eData.Vector.Dense\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "Class",
          "package": "blas",
          "source": "src/Data-Vector-Dense-Class.html",
          "type": "module"
        },
        "index": {
          "description": "An overloaded interface to mutable dense vectors For vector types than can be used with this interface see Data.Vector.Dense.IO and Data.Vector.Dense.ST Many of these functions can also be used with the immutable type defined in Data.Vector.Dense",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "Class",
          "package": "blas",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommon functionality for all vector types.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "BaseVector",
          "package": "blas",
          "source": "src/Data-Vector-Dense-Base.html#BaseVector",
          "type": "class"
        },
        "index": {
          "description": "Common functionality for all vector types",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "BaseVector",
          "package": "blas",
          "partial": "Base Vector",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#t:BaseVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVectors that can be read in a monad.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "ReadVector",
          "package": "blas",
          "source": "src/Data-Vector-Dense-Base.html#ReadVector",
          "type": "class"
        },
        "index": {
          "description": "Vectors that can be read in monad",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "ReadVector",
          "package": "blas",
          "partial": "Read Vector",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#t:ReadVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVectors that can be created or modified in a monad.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "WriteVector",
          "package": "blas",
          "source": "src/Data-Vector-Dense-Base.html#WriteVector",
          "type": "class"
        },
        "index": {
          "description": "Vectors that can be created or modified in monad",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "WriteVector",
          "package": "blas",
          "partial": "Write Vector",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#t:WriteVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eaddVector y x\u003c/code\u003e replaces \u003ccode\u003ey\u003c/code\u003e with \u003ccode\u003ey+x\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "addVector",
          "package": "blas",
          "signature": "y n e -\u003e x n e -\u003e m ()",
          "source": "src/Data-Vector-Dense-Base.html#addVector",
          "type": "function"
        },
        "index": {
          "description": "addVector replaces with",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "addVector",
          "normalized": "a b c-\u003ed b c-\u003ee()",
          "package": "blas",
          "partial": "Vector",
          "signature": "y n e-\u003ex n e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:addVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eaxpyVector alpha x y\u003c/code\u003e replaces \u003ccode\u003ey\u003c/code\u003e with \u003ccode\u003ealpha * x + y\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "axpyVector",
          "package": "blas",
          "signature": "e -\u003e x n e -\u003e y n e -\u003e m ()",
          "source": "src/Data-Vector-Dense-Base.html#axpyVector",
          "type": "function"
        },
        "index": {
          "description": "axpyVector alpha replaces with alpha",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "axpyVector",
          "normalized": "a-\u003eb c a-\u003ed c a-\u003ee()",
          "package": "blas",
          "partial": "Vector",
          "signature": "e-\u003ex n e-\u003ey n e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:axpyVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast the shape type of the vector.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "coerceVector",
          "package": "blas",
          "signature": "x n e -\u003e x n' e",
          "source": "src/Data-Vector-Dense-Base.html#coerceVector",
          "type": "method"
        },
        "index": {
          "description": "Cast the shape type of the vector",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "coerceVector",
          "normalized": "a b c-\u003ea d c",
          "package": "blas",
          "partial": "Vector",
          "signature": "x n e-\u003ex n' e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:coerceVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a view into the complex conjugate of a vector.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "conj",
          "package": "blas",
          "signature": "x n e -\u003e x n e",
          "source": "src/Data-Vector-Dense-Base.html#conj",
          "type": "method"
        },
        "index": {
          "description": "Get view into the complex conjugate of vector",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "conj",
          "normalized": "a b c-\u003ea b c",
          "package": "blas",
          "signature": "x n e-\u003ex n e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:conj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the storage type.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "conjEnum",
          "package": "blas",
          "signature": "x n e -\u003e ConjEnum",
          "source": "src/Data-Vector-Dense-Base.html#conjEnum",
          "type": "method"
        },
        "index": {
          "description": "Get the storage type",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "conjEnum",
          "normalized": "a b c-\u003eConjEnum",
          "package": "blas",
          "partial": "Enum",
          "signature": "x n e-\u003eConjEnum",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:conjEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecopyVector dst src\u003c/code\u003e replaces the values in \u003ccode\u003edst\u003c/code\u003e with those in\n source.  The operands must be the same shape.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "copyVector",
          "package": "blas",
          "signature": "y n e -\u003e x n e -\u003e m ()",
          "source": "src/Data-Vector-Dense-Base.html#copyVector",
          "type": "function"
        },
        "index": {
          "description": "copyVector dst src replaces the values in dst with those in source The operands must be the same shape",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "copyVector",
          "normalized": "a b c-\u003ed b c-\u003ee()",
          "package": "blas",
          "partial": "Vector",
          "signature": "y n e-\u003ex n e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:copyVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the dimension (length) of the vector.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "dim",
          "package": "blas",
          "signature": "x n e -\u003e Int",
          "source": "src/Data-Vector-Dense-Base.html#dim",
          "type": "method"
        },
        "index": {
          "description": "Get the dimension length of the vector",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "dim",
          "normalized": "a b c-\u003eInt",
          "package": "blas",
          "signature": "x n e-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:dim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edivVector y x\u003c/code\u003e replaces \u003ccode\u003ey\u003c/code\u003e with \u003ccode\u003ey/x\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "divVector",
          "package": "blas",
          "signature": "y n e -\u003e x n e -\u003e m ()",
          "source": "src/Data-Vector-Dense-Base.html#divVector",
          "type": "function"
        },
        "index": {
          "description": "divVector replaces with",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "divVector",
          "normalized": "a b c-\u003ed b c-\u003ee()",
          "package": "blas",
          "partial": "Vector",
          "signature": "y n e-\u003ex n e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:divVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConjugate every element of the vector.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "doConjVector",
          "package": "blas",
          "signature": "y n e -\u003e m ()",
          "source": "src/Data-Vector-Dense-Base.html#doConjVector",
          "type": "function"
        },
        "index": {
          "description": "Conjugate every element of the vector",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "doConjVector",
          "normalized": "a b c-\u003ed()",
          "package": "blas",
          "partial": "Conj Vector",
          "signature": "y n e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:doConjVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a mutable vector to an immutable one by taking a complete\n copy of it.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "freezeVector",
          "package": "blas",
          "signature": "x n e -\u003e m (Vector n e)",
          "source": "src/Data-Vector-Dense-Base.html#freezeVector",
          "type": "method"
        },
        "index": {
          "description": "Convert mutable vector to an immutable one by taking complete copy of it",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "freezeVector",
          "normalized": "a b c-\u003ed(Vector b c)",
          "package": "blas",
          "partial": "Vector",
          "signature": "x n e-\u003em(Vector n e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:freezeVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetAddVector x y\u003c/code\u003e creates a new vector equal to the sum \u003ccode\u003ex+y\u003c/code\u003e.  The \n operands must have the same dimension.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "getAddVector",
          "package": "blas",
          "signature": "x n e -\u003e y n e -\u003e m (z n e)",
          "source": "src/Data-Vector-Dense-Base.html#getAddVector",
          "type": "function"
        },
        "index": {
          "description": "getAddVector creates new vector equal to the sum The operands must have the same dimension",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "getAddVector",
          "normalized": "a b c-\u003ed b c-\u003ee(f b c)",
          "package": "blas",
          "partial": "Add Vector",
          "signature": "x n e-\u003ey n e-\u003em(z n e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:getAddVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a new vector with elements with the conjugates of the elements\n of the given vector\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "getConjVector",
          "package": "blas",
          "signature": "x n e -\u003e m (y n e)",
          "source": "src/Data-Vector-Dense-Base.html#getConjVector",
          "type": "function"
        },
        "index": {
          "description": "Get new vector with elements with the conjugates of the elements of the given vector",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "getConjVector",
          "normalized": "a b c-\u003ed(e b c)",
          "package": "blas",
          "partial": "Conj Vector",
          "signature": "x n e-\u003em(y n e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:getConjVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetDivVector x y\u003c/code\u003e creates a new vector equal to the elementwise \n ratio \u003ccode\u003ex/y\u003c/code\u003e.  The operands must have the same shape.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "getDivVector",
          "package": "blas",
          "signature": "x n e -\u003e y n e -\u003e m (z n e)",
          "source": "src/Data-Vector-Dense-Base.html#getDivVector",
          "type": "function"
        },
        "index": {
          "description": "getDivVector creates new vector equal to the elementwise ratio The operands must have the same shape",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "getDivVector",
          "normalized": "a b c-\u003ed b c-\u003ee(f b c)",
          "package": "blas",
          "partial": "Div Vector",
          "signature": "x n e-\u003ey n e-\u003em(z n e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:getDivVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the dot product of two vectors.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "getDot",
          "package": "blas",
          "signature": "x n e -\u003e y n e -\u003e m e",
          "source": "src/Data-Vector-Dense-Base.html#getDot",
          "type": "function"
        },
        "index": {
          "description": "Computes the dot product of two vectors",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "getDot",
          "normalized": "a b c-\u003ed b c-\u003ee c",
          "package": "blas",
          "partial": "Dot",
          "signature": "x n e-\u003ey n e-\u003em e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:getDot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetMulVector x y\u003c/code\u003e creates a new vector equal to the elementwise product \n \u003ccode\u003ex*y\u003c/code\u003e.  The operands must have the same dimensino\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "getMulVector",
          "package": "blas",
          "signature": "x n e -\u003e y n e -\u003e m (z n e)",
          "source": "src/Data-Vector-Dense-Base.html#getMulVector",
          "type": "function"
        },
        "index": {
          "description": "getMulVector creates new vector equal to the elementwise product The operands must have the same dimensino",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "getMulVector",
          "normalized": "a b c-\u003ed b c-\u003ee(f b c)",
          "package": "blas",
          "partial": "Mul Vector",
          "signature": "x n e-\u003ey n e-\u003em(z n e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:getMulVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the 2-norm of a vector.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "getNorm2",
          "package": "blas",
          "signature": "x n e -\u003e m Double",
          "source": "src/Data-Vector-Dense-Base.html#getNorm2",
          "type": "function"
        },
        "index": {
          "description": "Gets the norm of vector",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "getNorm2",
          "normalized": "a b c-\u003ed Double",
          "package": "blas",
          "partial": "Norm",
          "signature": "x n e-\u003em Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:getNorm2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a new vector by scaling the elements of another vector\n by a given value.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "getScaledVector",
          "package": "blas",
          "signature": "e -\u003e x n e -\u003e m (y n e)",
          "source": "src/Data-Vector-Dense-Base.html#getScaledVector",
          "type": "function"
        },
        "index": {
          "description": "Get new vector by scaling the elements of another vector by given value",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "getScaledVector",
          "normalized": "a-\u003eb c a-\u003ed(e c a)",
          "package": "blas",
          "partial": "Scaled Vector",
          "signature": "e-\u003ex n e-\u003em(y n e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:getScaledVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a new vector by shifting the elements of another vector\n by a given value.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "getShiftedVector",
          "package": "blas",
          "signature": "e -\u003e x n e -\u003e m (y n e)",
          "source": "src/Data-Vector-Dense-Base.html#getShiftedVector",
          "type": "function"
        },
        "index": {
          "description": "Get new vector by shifting the elements of another vector by given value",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "getShiftedVector",
          "normalized": "a-\u003eb c a-\u003ed(e c a)",
          "package": "blas",
          "partial": "Shifted Vector",
          "signature": "e-\u003ex n e-\u003em(y n e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:getShiftedVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetSubVector x y\u003c/code\u003e creates a new tensor equal to the difference \u003ccode\u003ex-y\u003c/code\u003e.  \n The operands must have the same dimension.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "getSubVector",
          "package": "blas",
          "signature": "x n e -\u003e y n e -\u003e m (z n e)",
          "source": "src/Data-Vector-Dense-Base.html#getSubVector",
          "type": "function"
        },
        "index": {
          "description": "getSubVector creates new tensor equal to the difference x-y The operands must have the same dimension",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "getSubVector",
          "normalized": "a b c-\u003ed b c-\u003ee(f b c)",
          "package": "blas",
          "partial": "Sub Vector",
          "signature": "x n e-\u003ey n e-\u003em(z n e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:getSubVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the sum of the absolute values of the vector entries.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "getSumAbs",
          "package": "blas",
          "signature": "x n e -\u003e m Double",
          "source": "src/Data-Vector-Dense-Base.html#getSumAbs",
          "type": "function"
        },
        "index": {
          "description": "Gets the sum of the absolute values of the vector entries",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "getSumAbs",
          "normalized": "a b c-\u003ed Double",
          "package": "blas",
          "partial": "Sum Abs",
          "signature": "x n e-\u003em Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:getSumAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the index and norm of the element with maximum magnitude.  This is \n undefined if any of the elements are \u003ccode\u003eNaN\u003c/code\u003e.  It will throw an exception if \n the dimension of the vector is 0.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "getWhichMaxAbs",
          "package": "blas",
          "signature": "x n e -\u003e m (Int, e)",
          "source": "src/Data-Vector-Dense-Base.html#getWhichMaxAbs",
          "type": "function"
        },
        "index": {
          "description": "Gets the index and norm of the element with maximum magnitude This is undefined if any of the elements are NaN It will throw an exception if the dimension of the vector is",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "getWhichMaxAbs",
          "normalized": "a b c-\u003ed(Int,c)",
          "package": "blas",
          "partial": "Which Max Abs",
          "signature": "x n e-\u003em(Int,e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:getWhichMaxAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicate whether or not internally the vector stores the complex\n conjugates of its elements.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "isConj",
          "package": "blas",
          "signature": "x n e -\u003e Bool",
          "source": "src/Data-Vector-Dense-Base.html#isConj",
          "type": "method"
        },
        "index": {
          "description": "Indicate whether or not internally the vector stores the complex conjugates of its elements",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "isConj",
          "normalized": "a b c-\u003eBool",
          "package": "blas",
          "partial": "Conj",
          "signature": "x n e-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:isConj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emulVector y x\u003c/code\u003e replaces \u003ccode\u003ey\u003c/code\u003e with \u003ccode\u003ey*x\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "mulVector",
          "package": "blas",
          "signature": "y n e -\u003e x n e -\u003e m ()",
          "source": "src/Data-Vector-Dense-Base.html#mulVector",
          "type": "function"
        },
        "index": {
          "description": "mulVector replaces with",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "mulVector",
          "normalized": "a b c-\u003ed b c-\u003ee()",
          "package": "blas",
          "partial": "Vector",
          "signature": "y n e-\u003ex n e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:mulVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enewBasisVector n i\u003c/code\u003e creates a vector of length \u003ccode\u003en\u003c/code\u003e that is all zero \n except for at position \u003ccode\u003ei\u003c/code\u003e, where it equal to one.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "newBasisVector",
          "package": "blas",
          "signature": "Int -\u003e Int -\u003e m (x n e)",
          "source": "src/Data-Vector-Dense-Base.html#newBasisVector",
          "type": "function"
        },
        "index": {
          "description": "newBasisVector creates vector of length that is all zero except for at position where it equal to one",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "newBasisVector",
          "normalized": "Int-\u003eInt-\u003ea(b c d)",
          "package": "blas",
          "partial": "Basis Vector",
          "signature": "Int-\u003eInt-\u003em(x n e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:newBasisVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a vector with every element initialized to the same value.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "newConstantVector",
          "package": "blas",
          "signature": "Int -\u003e e -\u003e m (x n e)",
          "source": "src/Data-Vector-Dense-Base.html#newConstantVector",
          "type": "function"
        },
        "index": {
          "description": "Create vector with every element initialized to the same value",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "newConstantVector",
          "normalized": "Int-\u003ea-\u003eb(c d a)",
          "package": "blas",
          "partial": "Constant Vector",
          "signature": "Int-\u003ee-\u003em(x n e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:newConstantVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new vector by copying another one.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "newCopyVector",
          "package": "blas",
          "signature": "x n e -\u003e m (y n e)",
          "source": "src/Data-Vector-Dense-Base.html#newCopyVector",
          "type": "function"
        },
        "index": {
          "description": "Creates new vector by copying another one",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "newCopyVector",
          "normalized": "a b c-\u003ed(e b c)",
          "package": "blas",
          "partial": "Copy Vector",
          "signature": "x n e-\u003em(y n e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:newCopyVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new vector by copying another one.  The returned vector\n is gauranteed not to be a view into another vector.  That is, the\n returned vector will have \u003ccode\u003eisConj\u003c/code\u003e to be \u003ccode\u003eFalse\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "newCopyVector'",
          "package": "blas",
          "signature": "x n e -\u003e m (y n e)",
          "source": "src/Data-Vector-Dense-Base.html#newCopyVector%27",
          "type": "function"
        },
        "index": {
          "description": "Creates new vector by copying another one The returned vector is gauranteed not to be view into another vector That is the returned vector will have isConj to be False",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "newCopyVector'",
          "normalized": "a b c-\u003ed(e b c)",
          "package": "blas",
          "partial": "Copy Vector'",
          "signature": "x n e-\u003em(y n e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:newCopyVector-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new vector of the given dimension with the given elements.\n If the list has length less than the passed-in dimenson, the tail of\n the vector will be uninitialized.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "newListVector",
          "package": "blas",
          "signature": "Int -\u003e [e] -\u003e m (x n e)",
          "source": "src/Data-Vector-Dense-Base.html#newListVector",
          "type": "function"
        },
        "index": {
          "description": "Creates new vector of the given dimension with the given elements If the list has length less than the passed-in dimenson the tail of the vector will be uninitialized",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "newListVector",
          "normalized": "Int-\u003e[a]-\u003eb(c d a)",
          "package": "blas",
          "partial": "List Vector",
          "signature": "Int-\u003e[e]-\u003em(x n e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:newListVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new vector with the given association list.  Unspecified\n indices will get initialized to zero.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "newVector",
          "package": "blas",
          "signature": "Int -\u003e [(Int, e)] -\u003e m (x n e)",
          "source": "src/Data-Vector-Dense-Base.html#newVector",
          "type": "function"
        },
        "index": {
          "description": "Creates new vector with the given association list Unspecified indices will get initialized to zero",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "newVector",
          "normalized": "Int-\u003e[(Int,a)]-\u003eb(c d a)",
          "package": "blas",
          "partial": "Vector",
          "signature": "Int-\u003e[(Int,e)]-\u003em(x n e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:newVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new vector of the given length.  The elements will be\n uninitialized.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "newVector_",
          "package": "blas",
          "signature": "Int -\u003e m (x n e)",
          "source": "src/Data-Vector-Dense-Base.html#newVector_",
          "type": "method"
        },
        "index": {
          "description": "Creates new vector of the given length The elements will be uninitialized",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "newVector_",
          "normalized": "Int-\u003ea(b c d)",
          "package": "blas",
          "partial": "Vector",
          "signature": "Int-\u003em(x n e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:newVector_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a zero vector of the specified length.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "newZeroVector",
          "package": "blas",
          "signature": "Int -\u003e m (x n e)",
          "source": "src/Data-Vector-Dense-Base.html#newZeroVector",
          "type": "function"
        },
        "index": {
          "description": "Create zero vector of the specified length",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "newZeroVector",
          "normalized": "Int-\u003ea(b c d)",
          "package": "blas",
          "partial": "Zero Vector",
          "signature": "Int-\u003em(x n e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:newZeroVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale every element by the given value.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "scaleByVector",
          "package": "blas",
          "signature": "e -\u003e y n e -\u003e m ()",
          "source": "src/Data-Vector-Dense-Base.html#scaleByVector",
          "type": "function"
        },
        "index": {
          "description": "Scale every element by the given value",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "scaleByVector",
          "normalized": "a-\u003eb c a-\u003ed()",
          "package": "blas",
          "partial": "By Vector",
          "signature": "e-\u003ey n e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:scaleByVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esetBasis x i\u003c/code\u003e sets the \u003ccode\u003ei\u003c/code\u003eth coordinate of \u003ccode\u003ex\u003c/code\u003e to \u003ccode\u003e1\u003c/code\u003e, and all other\n coordinates to \u003ccode\u003e0\u003c/code\u003e.  If the vector has been scaled, it is possible that\n \u003ccode\u003ereadVector x i\u003c/code\u003e will not return exactly \u003ccode\u003e1\u003c/code\u003e.  See \u003ccode\u003esetElem\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "setBasisVector",
          "package": "blas",
          "signature": "Int -\u003e x n e -\u003e m ()",
          "source": "src/Data-Vector-Dense-Base.html#setBasisVector",
          "type": "function"
        },
        "index": {
          "description": "setBasis sets the th coordinate of to and all other coordinates to If the vector has been scaled it is possible that readVector will not return exactly See setElem",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "setBasisVector",
          "normalized": "Int-\u003ea b c-\u003ed()",
          "package": "blas",
          "partial": "Basis Vector",
          "signature": "Int-\u003ex n e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:setBasisVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet every element in the vector to a constant.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "setConstantVector",
          "package": "blas",
          "signature": "e -\u003e x n e -\u003e m ()",
          "source": "src/Data-Vector-Dense-Base.html#setConstantVector",
          "type": "function"
        },
        "index": {
          "description": "Set every element in the vector to constant",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "setConstantVector",
          "normalized": "a-\u003eb c a-\u003ed()",
          "package": "blas",
          "partial": "Constant Vector",
          "signature": "e-\u003ex n e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:setConstantVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet every element in the vector to zero.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "setZeroVector",
          "package": "blas",
          "signature": "x n e -\u003e m ()",
          "source": "src/Data-Vector-Dense-Base.html#setZeroVector",
          "type": "function"
        },
        "index": {
          "description": "Set every element in the vector to zero",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "setZeroVector",
          "normalized": "a b c-\u003ed()",
          "package": "blas",
          "partial": "Zero Vector",
          "signature": "x n e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:setZeroVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd the given value to every element.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "shiftByVector",
          "package": "blas",
          "signature": "e -\u003e y n e -\u003e m ()",
          "source": "src/Data-Vector-Dense-Base.html#shiftByVector",
          "type": "function"
        },
        "index": {
          "description": "Add the given value to every element",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "shiftByVector",
          "normalized": "a-\u003eb c a-\u003ed()",
          "package": "blas",
          "partial": "By Vector",
          "signature": "e-\u003ey n e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:shiftByVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the memory stride (in elements) between consecutive elements.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "stride",
          "package": "blas",
          "signature": "x n e -\u003e Int",
          "source": "src/Data-Vector-Dense-Base.html#stride",
          "type": "method"
        },
        "index": {
          "description": "Get the memory stride in elements between consecutive elements",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "stride",
          "normalized": "a b c-\u003eInt",
          "package": "blas",
          "signature": "x n e-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:stride"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esubVector y x\u003c/code\u003e replaces \u003ccode\u003ey\u003c/code\u003e with \u003ccode\u003ey-x\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "subVector",
          "package": "blas",
          "signature": "y n e -\u003e x n e -\u003e m ()",
          "source": "src/Data-Vector-Dense-Base.html#subVector",
          "type": "function"
        },
        "index": {
          "description": "subVector replaces with y-x",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "subVector",
          "normalized": "a b c-\u003ed b c-\u003ee()",
          "package": "blas",
          "partial": "Vector",
          "signature": "y n e-\u003ex n e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:subVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esubvectorView x o n\u003c/code\u003e creates a subvector view of \u003ccode\u003ex\u003c/code\u003e starting at index \u003ccode\u003eo\u003c/code\u003e \n and having length \u003ccode\u003en\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "subvectorView",
          "package": "blas",
          "signature": "x n e -\u003e Int -\u003e Int -\u003e x n' e",
          "source": "src/Data-Vector-Dense-Base.html#subvectorView",
          "type": "function"
        },
        "index": {
          "description": "subvectorView creates subvector view of starting at index and having length",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "subvectorView",
          "normalized": "a b c-\u003eInt-\u003eInt-\u003ea d c",
          "package": "blas",
          "partial": "View",
          "signature": "x n e-\u003eInt-\u003eInt-\u003ex n' e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:subvectorView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esubvectorViewWithStride s x o n\u003c/code\u003e creates a subvector view of \u003ccode\u003ex\u003c/code\u003e starting \n at index \u003ccode\u003eo\u003c/code\u003e, having length \u003ccode\u003en\u003c/code\u003e and stride \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "subvectorViewWithStride",
          "package": "blas",
          "signature": "Int -\u003e x n e -\u003e Int -\u003e Int -\u003e x n' e",
          "source": "src/Data-Vector-Dense-Base.html#subvectorViewWithStride",
          "type": "function"
        },
        "index": {
          "description": "subvectorViewWithStride creates subvector view of starting at index having length and stride",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "subvectorViewWithStride",
          "normalized": "Int-\u003ea b c-\u003eInt-\u003eInt-\u003ea d c",
          "package": "blas",
          "partial": "View With Stride",
          "signature": "Int-\u003ex n e-\u003eInt-\u003eInt-\u003ex n' e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:subvectorViewWithStride"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwap the values stored in two vectors.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "swapVector",
          "package": "blas",
          "signature": "x n e -\u003e y n e -\u003e m ()",
          "source": "src/Data-Vector-Dense-Base.html#swapVector",
          "type": "function"
        },
        "index": {
          "description": "Swap the values stored in two vectors",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "swapVector",
          "normalized": "a b c-\u003ed b c-\u003ee()",
          "package": "blas",
          "partial": "Vector",
          "signature": "x n e-\u003ey n e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:swapVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an immutable vector to a mutable one by taking a complete\n copy of it.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "thawVector",
          "package": "blas",
          "signature": "Vector n e -\u003e m (x n e)",
          "source": "src/Data-Vector-Dense-Base.html#thawVector",
          "type": "method"
        },
        "index": {
          "description": "Convert an immutable vector to mutable one by taking complete copy of it",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "thawVector",
          "normalized": "Vector a b-\u003ec(d a b)",
          "package": "blas",
          "partial": "Vector",
          "signature": "Vector n e-\u003em(x n e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:thawVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafely convert an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action that creates an \u003ccode\u003e\u003ca\u003eIOVector\u003c/a\u003e\u003c/code\u003e into\n an action in \u003ccode\u003em\u003c/code\u003e that creates a vector.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "unsafeConvertIOVector",
          "package": "blas",
          "signature": "IO (IOVector n e) -\u003e m (x n e)",
          "source": "src/Data-Vector-Dense-Base.html#unsafeConvertIOVector",
          "type": "method"
        },
        "index": {
          "description": "Unsafely convert an IO action that creates an IOVector into an action in that creates vector",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "unsafeConvertIOVector",
          "normalized": "IO(IOVector a b)-\u003ec(d a b)",
          "package": "blas",
          "partial": "Convert IOVector",
          "signature": "IO(IOVector n e)-\u003em(x n e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:unsafeConvertIOVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Dense.Class",
          "name": "unsafeFreezeVector",
          "package": "blas",
          "signature": "x n e -\u003e m (Vector n e)",
          "source": "src/Data-Vector-Dense-Base.html#unsafeFreezeVector",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "unsafeFreezeVector",
          "normalized": "a b c-\u003ed(Vector b c)",
          "package": "blas",
          "partial": "Freeze Vector",
          "signature": "x n e-\u003em(Vector n e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:unsafeFreezeVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast the vector to an \u003ccode\u003e\u003ca\u003eIOVector\u003c/a\u003e\u003c/code\u003e, perform an \u003ccode\u003eIO\u003c/code\u003e action, and\n convert the \u003ccode\u003eIO\u003c/code\u003e action to an action in the monad \u003ccode\u003em\u003c/code\u003e.  This\n operation is \u003cem\u003every\u003c/em\u003e unsafe.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "unsafePerformIOWithVector",
          "package": "blas",
          "signature": "x n e -\u003e (IOVector n e -\u003e IO a) -\u003e m a",
          "source": "src/Data-Vector-Dense-Base.html#unsafePerformIOWithVector",
          "type": "method"
        },
        "index": {
          "description": "Cast the vector to an IOVector perform an IO action and convert the IO action to an action in the monad This operation is very unsafe",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "unsafePerformIOWithVector",
          "normalized": "a b c-\u003e(IOVector b c-\u003eIO d)-\u003ee d",
          "package": "blas",
          "partial": "Perform IOWith Vector",
          "signature": "x n e-\u003e(IOVector n e-\u003eIO a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:unsafePerformIOWithVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Dense.Class",
          "name": "unsafeThawVector",
          "package": "blas",
          "signature": "Vector n e -\u003e m (x n e)",
          "source": "src/Data-Vector-Dense-Base.html#unsafeThawVector",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "unsafeThawVector",
          "normalized": "Vector a b-\u003ec(d a b)",
          "package": "blas",
          "partial": "Thaw Vector",
          "signature": "Vector n e-\u003em(x n e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:unsafeThawVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafe cast from a vector to an \u003ccode\u003e\u003ca\u003eIOVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.Class",
          "name": "unsafeVectorToIOVector",
          "package": "blas",
          "signature": "x n e -\u003e IOVector n e",
          "source": "src/Data-Vector-Dense-Base.html#unsafeVectorToIOVector",
          "type": "method"
        },
        "index": {
          "description": "Unsafe cast from vector to an IOVector",
          "hierarchy": "Data Vector Dense Class",
          "module": "Data.Vector.Dense.Class",
          "name": "unsafeVectorToIOVector",
          "normalized": "a b c-\u003eIOVector b c",
          "package": "blas",
          "partial": "Vector To IOVector",
          "signature": "x n e-\u003eIOVector n e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-Class.html#v:unsafeVectorToIOVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable vectors in the IO monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.Dense.IO",
          "name": "IO",
          "package": "blas",
          "source": "src/Data-Vector-Dense-IO.html",
          "type": "module"
        },
        "index": {
          "description": "Mutable vectors in the IO monad",
          "hierarchy": "Data Vector Dense IO",
          "module": "Data.Vector.Dense.IO",
          "name": "IO",
          "package": "blas",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDense vectors in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.  The type arguments are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003en\u003c/code\u003e: a phantom type for the dimension of the vector\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ee\u003c/code\u003e: the element type of the vector.  Only certain element types\n       are supported.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Vector.Dense.IO",
          "name": "IOVector",
          "package": "blas",
          "source": "src/Data-Vector-Dense-IOBase.html#IOVector",
          "type": "data"
        },
        "index": {
          "description": "Dense vectors in the IO monad The type arguments are as follows phantom type for the dimension of the vector the element type of the vector Only certain element types are supported",
          "hierarchy": "Data Vector Dense IO",
          "module": "Data.Vector.Dense.IO",
          "name": "IOVector",
          "package": "blas",
          "partial": "IOVector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-IO.html#t:IOVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eView an array in memory as a vector.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.IO",
          "name": "vectorViewArray",
          "package": "blas",
          "signature": "ForeignPtr e-\u003e Int-\u003e Int-\u003e IOVector n e",
          "type": "function"
        },
        "index": {
          "description": "View an array in memory as vector",
          "hierarchy": "Data Vector Dense IO",
          "module": "Data.Vector.Dense.IO",
          "name": "vectorViewArray",
          "normalized": "ForeignPtr a-\u003eInt-\u003eInt-\u003eIOVector b a",
          "package": "blas",
          "partial": "View Array",
          "signature": "ForeignPtr e-\u003eInt-\u003eInt-\u003eIOVector n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-IO.html#v:vectorViewArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eView an array in memory as a vector, with the given stride.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.IO",
          "name": "vectorViewArrayWithStride",
          "package": "blas",
          "signature": "Int-\u003e ForeignPtr e-\u003e Int-\u003e Int-\u003e IOVector n e",
          "type": "function"
        },
        "index": {
          "description": "View an array in memory as vector with the given stride",
          "hierarchy": "Data Vector Dense IO",
          "module": "Data.Vector.Dense.IO",
          "name": "vectorViewArrayWithStride",
          "normalized": "Int-\u003eForeignPtr a-\u003eInt-\u003eInt-\u003eIOVector b a",
          "package": "blas",
          "partial": "View Array With Stride",
          "signature": "Int-\u003eForeignPtr e-\u003eInt-\u003eInt-\u003eIOVector n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-IO.html#v:vectorViewArrayWithStride"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action with a pointer to the first element in the\n vector.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense.IO",
          "name": "withIOVector",
          "package": "blas",
          "signature": "IOVector n e -\u003e (Ptr e -\u003e IO a) -\u003e IO a",
          "source": "src/Data-Vector-Dense-IOBase.html#withIOVector",
          "type": "function"
        },
        "index": {
          "description": "Execute an IO action with pointer to the first element in the vector",
          "hierarchy": "Data Vector Dense IO",
          "module": "Data.Vector.Dense.IO",
          "name": "withIOVector",
          "normalized": "IOVector a b-\u003e(Ptr b-\u003eIO c)-\u003eIO c",
          "package": "blas",
          "partial": "IOVector",
          "signature": "IOVector n e-\u003e(Ptr e-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-IO.html#v:withIOVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMutable vectors in the ST monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.Dense.ST",
          "name": "ST",
          "package": "blas",
          "source": "src/Data-Vector-Dense-ST.html",
          "type": "module"
        },
        "index": {
          "description": "Mutable vectors in the ST monad",
          "hierarchy": "Data Vector Dense ST",
          "module": "Data.Vector.Dense.ST",
          "name": "ST",
          "package": "blas",
          "partial": "ST",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-ST.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDense vectors in the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.  The type arguments are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003es\u003c/code\u003e: the state variable argument for the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e type\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003en\u003c/code\u003e: a phantom type for the dimension of the vector\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ee\u003c/code\u003e: the element type of the vector.  Only certain element types\n       are supported.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Vector.Dense.ST",
          "name": "STVector",
          "package": "blas",
          "source": "src/Data-Vector-Dense-STBase.html#STVector",
          "type": "data"
        },
        "index": {
          "description": "Dense vectors in the ST monad The type arguments are as follows the state variable argument for the ST type phantom type for the dimension of the vector the element type of the vector Only certain element types are supported",
          "hierarchy": "Data Vector Dense ST",
          "module": "Data.Vector.Dense.ST",
          "name": "STVector",
          "package": "blas",
          "partial": "STVector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-ST.html#t:STVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA safe way to create and work with a mutable vector before returning \n an immutable vector for later perusal. This function avoids copying\n the vector before returning it - it uses unsafeFreezeVector internally,\n but this wrapper is a safe interface to that function. \n\u003c/p\u003e",
          "module": "Data.Vector.Dense.ST",
          "name": "runSTVector",
          "package": "blas",
          "signature": "(forall s.  ST s (STVector s n e)) -\u003e Vector n e",
          "source": "src/Data-Vector-Dense-STBase.html#runSTVector",
          "type": "function"
        },
        "index": {
          "description": "safe way to create and work with mutable vector before returning an immutable vector for later perusal This function avoids copying the vector before returning it it uses unsafeFreezeVector internally but this wrapper is safe interface to that function",
          "hierarchy": "Data Vector Dense ST",
          "module": "Data.Vector.Dense.ST",
          "name": "runSTVector",
          "normalized": "(a b ST c(STVector c d e))-\u003eVector d e",
          "package": "blas",
          "partial": "STVector",
          "signature": "(forall s. ST s(STVector s n e))-\u003eVector n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense-ST.html#v:runSTVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImmutable dense vectors.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.Dense",
          "name": "Dense",
          "package": "blas",
          "source": "src/Data-Vector-Dense.html",
          "type": "module"
        },
        "index": {
          "description": "Immutable dense vectors",
          "hierarchy": "Data Vector Dense",
          "module": "Data.Vector.Dense",
          "name": "Dense",
          "package": "blas",
          "partial": "Dense",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommon functionality for all vector types.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense",
          "name": "BaseVector",
          "package": "blas",
          "source": "src/Data-Vector-Dense-Base.html#BaseVector",
          "type": "class"
        },
        "index": {
          "description": "Common functionality for all vector types",
          "hierarchy": "Data Vector Dense",
          "module": "Data.Vector.Dense",
          "name": "BaseVector",
          "package": "blas",
          "partial": "Base Vector",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense.html#t:BaseVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImmutable dense vectors. The type arguments are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003en\u003c/code\u003e: a phantom type for the dimension of the vector\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ee\u003c/code\u003e: the element type of the vector.  Only certain element types\n       are supported.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Vector.Dense",
          "name": "Vector",
          "package": "blas",
          "source": "src/Data-Vector-Dense-Base.html#Vector",
          "type": "data"
        },
        "index": {
          "description": "Immutable dense vectors The type arguments are as follows phantom type for the dimension of the vector the element type of the vector Only certain element types are supported",
          "hierarchy": "Data Vector Dense",
          "module": "Data.Vector.Dense",
          "name": "Vector",
          "package": "blas",
          "partial": "Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the dot product of two vectors.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense",
          "name": "(\u003c.\u003e)",
          "package": "blas",
          "signature": "Vector n e -\u003e Vector n e -\u003e e",
          "source": "src/Data-Vector-Dense-Base.html#%3C.%3E",
          "type": "function"
        },
        "index": {
          "description": "Compute the dot product of two vectors",
          "hierarchy": "Data Vector Dense",
          "module": "Data.Vector.Dense",
          "name": "(\u003c.\u003e) \u003c.\u003e",
          "normalized": "Vector a b-\u003eVector a b-\u003eb",
          "package": "blas",
          "signature": "Vector n e-\u003eVector n e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense.html#v:-60-.-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebasisVector n i\u003c/code\u003e creates a vector of dimension \u003ccode\u003en\u003c/code\u003e with zeros \n everywhere but position \u003ccode\u003ei\u003c/code\u003e, where there is a one.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense",
          "name": "basisVector",
          "package": "blas",
          "signature": "Int -\u003e Int -\u003e Vector n e",
          "source": "src/Data-Vector-Dense-Base.html#basisVector",
          "type": "function"
        },
        "index": {
          "description": "basisVector creates vector of dimension with zeros everywhere but position where there is one",
          "hierarchy": "Data Vector Dense",
          "module": "Data.Vector.Dense",
          "name": "basisVector",
          "normalized": "Int-\u003eInt-\u003eVector a b",
          "package": "blas",
          "partial": "Vector",
          "signature": "Int-\u003eInt-\u003eVector n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense.html#v:basisVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast the shape type of the vector.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense",
          "name": "coerceVector",
          "package": "blas",
          "signature": "x n e -\u003e x n' e",
          "source": "src/Data-Vector-Dense-Base.html#coerceVector",
          "type": "method"
        },
        "index": {
          "description": "Cast the shape type of the vector",
          "hierarchy": "Data Vector Dense",
          "module": "Data.Vector.Dense",
          "name": "coerceVector",
          "normalized": "a b c-\u003ea d c",
          "package": "blas",
          "partial": "Vector",
          "signature": "x n e-\u003ex n' e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense.html#v:coerceVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a view into the complex conjugate of a vector.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense",
          "name": "conj",
          "package": "blas",
          "signature": "x n e -\u003e x n e",
          "source": "src/Data-Vector-Dense-Base.html#conj",
          "type": "method"
        },
        "index": {
          "description": "Get view into the complex conjugate of vector",
          "hierarchy": "Data Vector Dense",
          "module": "Data.Vector.Dense",
          "name": "conj",
          "normalized": "a b c-\u003ea b c",
          "package": "blas",
          "signature": "x n e-\u003ex n e",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense.html#v:conj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the storage type.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense",
          "name": "conjEnum",
          "package": "blas",
          "signature": "x n e -\u003e ConjEnum",
          "source": "src/Data-Vector-Dense-Base.html#conjEnum",
          "type": "method"
        },
        "index": {
          "description": "Get the storage type",
          "hierarchy": "Data Vector Dense",
          "module": "Data.Vector.Dense",
          "name": "conjEnum",
          "normalized": "a b c-\u003eConjEnum",
          "package": "blas",
          "partial": "Enum",
          "signature": "x n e-\u003eConjEnum",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense.html#v:conjEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003econstantVector n e\u003c/code\u003e creates a vector of dimension \u003ccode\u003en\u003c/code\u003e with all values\n set to \u003ccode\u003ee\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense",
          "name": "constantVector",
          "package": "blas",
          "signature": "Int -\u003e e -\u003e Vector n e",
          "source": "src/Data-Vector-Dense-Base.html#constantVector",
          "type": "function"
        },
        "index": {
          "description": "constantVector creates vector of dimension with all values set to",
          "hierarchy": "Data Vector Dense",
          "module": "Data.Vector.Dense",
          "name": "constantVector",
          "normalized": "Int-\u003ea-\u003eVector b a",
          "package": "blas",
          "partial": "Vector",
          "signature": "Int-\u003ee-\u003eVector n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense.html#v:constantVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the dimension (length) of the vector.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense",
          "name": "dim",
          "package": "blas",
          "signature": "x n e -\u003e Int",
          "source": "src/Data-Vector-Dense-Base.html#dim",
          "type": "method"
        },
        "index": {
          "description": "Get the dimension length of the vector",
          "hierarchy": "Data Vector Dense",
          "module": "Data.Vector.Dense",
          "name": "dim",
          "normalized": "a b c-\u003eInt",
          "package": "blas",
          "signature": "x n e-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense.html#v:dim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicate whether or not internally the vector stores the complex\n conjugates of its elements.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense",
          "name": "isConj",
          "package": "blas",
          "signature": "x n e -\u003e Bool",
          "source": "src/Data-Vector-Dense-Base.html#isConj",
          "type": "method"
        },
        "index": {
          "description": "Indicate whether or not internally the vector stores the complex conjugates of its elements",
          "hierarchy": "Data Vector Dense",
          "module": "Data.Vector.Dense",
          "name": "isConj",
          "normalized": "a b c-\u003eBool",
          "package": "blas",
          "partial": "Conj",
          "signature": "x n e-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense.html#v:isConj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a vector of the given dimension with elements initialized\n to the values from the list.  \u003ccode\u003elistVector n es\u003c/code\u003e is equivalent to \n \u003ccode\u003evector n (zip [0..(n-1)] es)\u003c/code\u003e, except that the result is undefined \n if \u003ccode\u003elength es\u003c/code\u003e is less than \u003ccode\u003en\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense",
          "name": "listVector",
          "package": "blas",
          "signature": "Int -\u003e [e] -\u003e Vector n e",
          "source": "src/Data-Vector-Dense-Base.html#listVector",
          "type": "function"
        },
        "index": {
          "description": "Create vector of the given dimension with elements initialized to the values from the list listVector es is equivalent to vector zip n-1 es except that the result is undefined if length es is less than",
          "hierarchy": "Data Vector Dense",
          "module": "Data.Vector.Dense",
          "name": "listVector",
          "normalized": "Int-\u003e[a]-\u003eVector b a",
          "package": "blas",
          "partial": "Vector",
          "signature": "Int-\u003e[e]-\u003eVector n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense.html#v:listVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the 2-norm of a vector.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense",
          "name": "norm2",
          "package": "blas",
          "signature": "Vector n e -\u003e Double",
          "source": "src/Data-Vector-Dense-Base.html#norm2",
          "type": "function"
        },
        "index": {
          "description": "Compute the norm of vector",
          "hierarchy": "Data Vector Dense",
          "module": "Data.Vector.Dense",
          "name": "norm2",
          "normalized": "Vector a b-\u003eDouble",
          "package": "blas",
          "signature": "Vector n e-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense.html#v:norm2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esubvector x o n\u003c/code\u003e creates a subvector of \u003ccode\u003ex\u003c/code\u003e starting at index \u003ccode\u003eo\u003c/code\u003e \n and having length \u003ccode\u003en\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense",
          "name": "subvector",
          "package": "blas",
          "signature": "Vector n e -\u003e Int -\u003e Int -\u003e Vector n' e",
          "source": "src/Data-Vector-Dense-Base.html#subvector",
          "type": "function"
        },
        "index": {
          "description": "subvector creates subvector of starting at index and having length",
          "hierarchy": "Data Vector Dense",
          "module": "Data.Vector.Dense",
          "name": "subvector",
          "normalized": "Vector a b-\u003eInt-\u003eInt-\u003eVector c b",
          "package": "blas",
          "signature": "Vector n e-\u003eInt-\u003eInt-\u003eVector n' e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense.html#v:subvector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esubvectorWithStride s x o n\u003c/code\u003e creates a subvector of \u003ccode\u003ex\u003c/code\u003e starting \n at index \u003ccode\u003eo\u003c/code\u003e, having length \u003ccode\u003en\u003c/code\u003e and stride \u003ccode\u003es\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense",
          "name": "subvectorWithStride",
          "package": "blas",
          "signature": "Int -\u003e Vector n e -\u003e Int -\u003e Int -\u003e Vector n' e",
          "source": "src/Data-Vector-Dense-Base.html#subvectorWithStride",
          "type": "function"
        },
        "index": {
          "description": "subvectorWithStride creates subvector of starting at index having length and stride",
          "hierarchy": "Data Vector Dense",
          "module": "Data.Vector.Dense",
          "name": "subvectorWithStride",
          "normalized": "Int-\u003eVector a b-\u003eInt-\u003eInt-\u003eVector c b",
          "package": "blas",
          "partial": "With Stride",
          "signature": "Int-\u003eVector n e-\u003eInt-\u003eInt-\u003eVector n' e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense.html#v:subvectorWithStride"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the sum of absolute values of entries in the vector.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense",
          "name": "sumAbs",
          "package": "blas",
          "signature": "Vector n e -\u003e Double",
          "source": "src/Data-Vector-Dense-Base.html#sumAbs",
          "type": "function"
        },
        "index": {
          "description": "Compute the sum of absolute values of entries in the vector",
          "hierarchy": "Data Vector Dense",
          "module": "Data.Vector.Dense",
          "name": "sumAbs",
          "normalized": "Vector a b-\u003eDouble",
          "package": "blas",
          "partial": "Abs",
          "signature": "Vector n e-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense.html#v:sumAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a vector with the given dimension and elements.  The elements\n given in the association list must all have unique indices, otherwise\n the result is undefined.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense",
          "name": "vector",
          "package": "blas",
          "signature": "Int -\u003e [(Int, e)] -\u003e Vector n e",
          "source": "src/Data-Vector-Dense-Base.html#vector",
          "type": "function"
        },
        "index": {
          "description": "Create vector with the given dimension and elements The elements given in the association list must all have unique indices otherwise the result is undefined",
          "hierarchy": "Data Vector Dense",
          "module": "Data.Vector.Dense",
          "name": "vector",
          "normalized": "Int-\u003e[(Int,a)]-\u003eVector b a",
          "package": "blas",
          "signature": "Int-\u003e[(Int,e)]-\u003eVector n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense.html#v:vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the index and norm of the element with absulte value.  Not valid \n if any of the vector entries are \u003ccode\u003eNaN\u003c/code\u003e.  Raises an exception if the \n vector has length \u003ccode\u003e0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense",
          "name": "whichMaxAbs",
          "package": "blas",
          "signature": "Vector n e -\u003e (Int, e)",
          "source": "src/Data-Vector-Dense-Base.html#whichMaxAbs",
          "type": "function"
        },
        "index": {
          "description": "Get the index and norm of the element with absulte value Not valid if any of the vector entries are NaN Raises an exception if the vector has length",
          "hierarchy": "Data Vector Dense",
          "module": "Data.Vector.Dense",
          "name": "whichMaxAbs",
          "normalized": "Vector a b-\u003e(Int,b)",
          "package": "blas",
          "partial": "Max Abs",
          "signature": "Vector n e-\u003e(Int,e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense.html#v:whichMaxAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ezeroVector n\u003c/code\u003e creates a vector of dimension \u003ccode\u003en\u003c/code\u003e with all values\n set to zero.\n\u003c/p\u003e",
          "module": "Data.Vector.Dense",
          "name": "zeroVector",
          "package": "blas",
          "signature": "Int -\u003e Vector n e",
          "source": "src/Data-Vector-Dense-Base.html#zeroVector",
          "type": "function"
        },
        "index": {
          "description": "zeroVector creates vector of dimension with all values set to zero",
          "hierarchy": "Data Vector Dense",
          "module": "Data.Vector.Dense",
          "name": "zeroVector",
          "normalized": "Int-\u003eVector a b",
          "package": "blas",
          "partial": "Vector",
          "signature": "Int-\u003eVector n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Data-Vector-Dense.html#v:zeroVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTest generators for BLAS types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.QuickCheck.BLAS",
          "name": "BLAS",
          "package": "blas",
          "source": "src/Test-QuickCheck-BLAS.html",
          "type": "module"
        },
        "index": {
          "description": "Test generators for BLAS types",
          "hierarchy": "Test QuickCheck BLAS",
          "module": "Test.QuickCheck.BLAS",
          "name": "BLAS",
          "package": "blas",
          "partial": "BLAS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Test-QuickCheck-BLAS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElement types that can be tested with QuickCheck properties.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.BLAS",
          "name": "TestElem",
          "package": "blas",
          "source": "src/Test-QuickCheck-BLAS.html#TestElem",
          "type": "class"
        },
        "index": {
          "description": "Element types that can be tested with QuickCheck properties",
          "hierarchy": "Test QuickCheck BLAS",
          "module": "Test.QuickCheck.BLAS",
          "name": "TestElem",
          "package": "blas",
          "partial": "Test Elem",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Test-QuickCheck-BLAS.html#t:TestElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a random banded matrix.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.BLAS",
          "name": "banded",
          "package": "blas",
          "signature": "(Int, Int) -\u003e (Int, Int) -\u003e Gen (Banded (m, n) e)",
          "source": "src/Test-QuickCheck-BLAS.html#banded",
          "type": "function"
        },
        "index": {
          "description": "Generate random banded matrix",
          "hierarchy": "Test QuickCheck BLAS",
          "module": "Test.QuickCheck.BLAS",
          "name": "banded",
          "normalized": "(Int,Int)-\u003e(Int,Int)-\u003eGen(Banded(a,b)c)",
          "package": "blas",
          "signature": "(Int,Int)-\u003e(Int,Int)-\u003eGen(Banded(m,n)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Test-QuickCheck-BLAS.html#v:banded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate valid bandwidths for the given matrix shape.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.BLAS",
          "name": "bandwidths",
          "package": "blas",
          "signature": "(Int, Int) -\u003e Gen (Int, Int)",
          "source": "src/Test-QuickCheck-BLAS.html#bandwidths",
          "type": "function"
        },
        "index": {
          "description": "Generate valid bandwidths for the given matrix shape",
          "hierarchy": "Test QuickCheck BLAS",
          "module": "Test.QuickCheck.BLAS",
          "name": "bandwidths",
          "normalized": "(Int,Int)-\u003eGen(Int,Int)",
          "package": "blas",
          "signature": "(Int,Int)-\u003eGen(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Test-QuickCheck-BLAS.html#v:bandwidths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an appropriate dimension for a random vector\n\u003c/p\u003e",
          "module": "Test.QuickCheck.BLAS",
          "name": "dim",
          "package": "blas",
          "signature": "Gen Int",
          "source": "src/Test-QuickCheck-BLAS.html#dim",
          "type": "function"
        },
        "index": {
          "description": "Get an appropriate dimension for random vector",
          "hierarchy": "Test QuickCheck BLAS",
          "module": "Test.QuickCheck.BLAS",
          "name": "dim",
          "package": "blas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Test-QuickCheck-BLAS.html#v:dim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a list of elements suitable for testing with.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.BLAS",
          "name": "elements",
          "package": "blas",
          "signature": "Int -\u003e Gen [e]",
          "source": "src/Test-QuickCheck-BLAS.html#elements",
          "type": "function"
        },
        "index": {
          "description": "Generate list of elements suitable for testing with",
          "hierarchy": "Test QuickCheck BLAS",
          "module": "Test.QuickCheck.BLAS",
          "name": "elements",
          "normalized": "Int-\u003eGen[a]",
          "package": "blas",
          "signature": "Int-\u003eGen[e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Test-QuickCheck-BLAS.html#v:elements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInicates whether or not the value should be used in tests.  For\n \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003es, \u003ccode\u003eisTestElemElem e\u003c/code\u003e is defined as \n \u003ccode\u003enot (isNaN e || isInfinite e || isDenormalized e)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.BLAS",
          "name": "isTestElemElem",
          "package": "blas",
          "signature": "e -\u003e Bool",
          "source": "src/Test-QuickCheck-BLAS.html#isTestElemElem",
          "type": "method"
        },
        "index": {
          "description": "Inicates whether or not the value should be used in tests For Double isTestElemElem is defined as not isNaN isInfinite isDenormalized",
          "hierarchy": "Test QuickCheck BLAS",
          "module": "Test.QuickCheck.BLAS",
          "name": "isTestElemElem",
          "normalized": "a-\u003eBool",
          "package": "blas",
          "partial": "Test Elem Elem",
          "signature": "e-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Test-QuickCheck-BLAS.html#v:isTestElemElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a random matrix of the given shape.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.BLAS",
          "name": "matrix",
          "package": "blas",
          "signature": "(Int, Int) -\u003e Gen (Matrix (m, n) e)",
          "source": "src/Test-QuickCheck-BLAS.html#matrix",
          "type": "function"
        },
        "index": {
          "description": "Generate random matrix of the given shape",
          "hierarchy": "Test QuickCheck BLAS",
          "module": "Test.QuickCheck.BLAS",
          "name": "matrix",
          "normalized": "(Int,Int)-\u003eGen(Matrix(a,b)c)",
          "package": "blas",
          "signature": "(Int,Int)-\u003eGen(Matrix(m,n)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Test-QuickCheck-BLAS.html#v:matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a list of elements for testing that have no imaginary part.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.BLAS",
          "name": "realElements",
          "package": "blas",
          "signature": "Int -\u003e Gen [e]",
          "source": "src/Test-QuickCheck-BLAS.html#realElements",
          "type": "function"
        },
        "index": {
          "description": "Generate list of elements for testing that have no imaginary part",
          "hierarchy": "Test QuickCheck BLAS",
          "module": "Test.QuickCheck.BLAS",
          "name": "realElements",
          "normalized": "Int-\u003eGen[a]",
          "package": "blas",
          "partial": "Elements",
          "signature": "Int-\u003eGen[e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Test-QuickCheck-BLAS.html#v:realElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an appropriate shape for a random matrix.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.BLAS",
          "name": "shape",
          "package": "blas",
          "signature": "Gen (Int, Int)",
          "source": "src/Test-QuickCheck-BLAS.html#shape",
          "type": "function"
        },
        "index": {
          "description": "Generate an appropriate shape for random matrix",
          "hierarchy": "Test QuickCheck BLAS",
          "module": "Test.QuickCheck.BLAS",
          "name": "shape",
          "normalized": "Gen(Int,Int)",
          "package": "blas",
          "signature": "Gen(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Test-QuickCheck-BLAS.html#v:shape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a random vector of the given size.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.BLAS",
          "name": "vector",
          "package": "blas",
          "signature": "Int -\u003e Gen (Vector n e)",
          "source": "src/Test-QuickCheck-BLAS.html#vector",
          "type": "function"
        },
        "index": {
          "description": "Generate random vector of the given size",
          "hierarchy": "Test QuickCheck BLAS",
          "module": "Test.QuickCheck.BLAS",
          "name": "vector",
          "normalized": "Int-\u003eGen(Vector a b)",
          "package": "blas",
          "signature": "Int-\u003eGen(Vector n e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Test-QuickCheck-BLAS.html#v:vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUnsafe BLAS functions.  Most of these functions to not check the\n shapes of their arguments, and should be used with caution.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Unsafe.BLAS",
          "name": "BLAS",
          "package": "blas",
          "source": "src/Unsafe-BLAS.html",
          "type": "module"
        },
        "index": {
          "description": "Unsafe BLAS functions Most of these functions to not check the shapes of their arguments and should be used with caution",
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "BLAS",
          "package": "blas",
          "partial": "BLAS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class for immutable matrices.  The member functions of the\n type class do not perform any checks on the validity of shapes or\n indices, so in general their safe counterparts should be preferred.\n\u003c/p\u003e",
          "module": "Unsafe.BLAS",
          "name": "IMatrix",
          "package": "blas",
          "source": "src/Data-Matrix-Class-IMatrixBase.html#IMatrix",
          "type": "class"
        },
        "index": {
          "description": "type class for immutable matrices The member functions of the type class do not perform any checks on the validity of shapes or indices so in general their safe counterparts should be preferred",
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "IMatrix",
          "package": "blas",
          "partial": "IMatrix",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#t:IMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBanded matrix in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.  The type arguments are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003enp\u003c/code\u003e: a phantom type for the shape of the matrix.  Most functions\n       will demand that this be specified as a pair.  When writing a function\n       signature, you should always prefer \u003ccode\u003eIOBanded (n,p) e\u003c/code\u003e to\n       \u003ccode\u003eIOBanded np e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ee\u003c/code\u003e: the element type of the matrix.  Only certain element types\n       are supported.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Unsafe.BLAS",
          "name": "IOBanded",
          "package": "blas",
          "source": "src/Data-Matrix-Banded-IOBase.html#IOBanded",
          "type": "data"
        },
        "index": {
          "description": "Banded matrix in the IO monad The type arguments are as follows np phantom type for the shape of the matrix Most functions will demand that this be specified as pair When writing function signature you should always prefer IOBanded to IOBanded np the element type of the matrix Only certain element types are supported",
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "IOBanded",
          "package": "blas",
          "partial": "IOBanded",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#t:IOBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDense matrix in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.  The type arguments are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003enp\u003c/code\u003e: a phantom type for the shape of the matrix.  Most functions\n       will demand that this be specified as a pair.  When writing a function\n       signature, you should always prefer \u003ccode\u003eIOMatrix (n,p) e\u003c/code\u003e to\n       \u003ccode\u003eIOMatrix np e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ee\u003c/code\u003e: the element type of the matrix.  Only certain element types\n       are supported.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Unsafe.BLAS",
          "name": "IOMatrix",
          "package": "blas",
          "source": "src/Data-Matrix-Dense-IOBase.html#IOMatrix",
          "type": "data"
        },
        "index": {
          "description": "Dense matrix in the IO monad The type arguments are as follows np phantom type for the shape of the matrix Most functions will demand that this be specified as pair When writing function signature you should always prefer IOMatrix to IOMatrix np the element type of the matrix Only certain element types are supported",
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "IOMatrix",
          "package": "blas",
          "partial": "IOMatrix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#t:IOMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDense vectors in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.  The type arguments are as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003en\u003c/code\u003e: a phantom type for the dimension of the vector\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ee\u003c/code\u003e: the element type of the vector.  Only certain element types\n       are supported.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Unsafe.BLAS",
          "name": "IOVector",
          "package": "blas",
          "source": "src/Data-Vector-Dense-IOBase.html#IOVector",
          "type": "data"
        },
        "index": {
          "description": "Dense vectors in the IO monad The type arguments are as follows phantom type for the dimension of the vector the element type of the vector Only certain element types are supported",
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "IOVector",
          "package": "blas",
          "partial": "IOVector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#t:IOVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class for immutable matrices with inverses.  The member\n functions of the type class do not perform any checks on the validity\n of shapes or indices, so in general their safe counterparts should be\n preferred.\n\u003c/p\u003e",
          "module": "Unsafe.BLAS",
          "name": "ISolve",
          "package": "blas",
          "source": "src/Data-Matrix-Class-ISolveBase.html#ISolve",
          "type": "class"
        },
        "index": {
          "description": "type class for immutable matrices with inverses The member functions of the type class do not perform any checks on the validity of shapes or indices so in general their safe counterparts should be preferred",
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "ISolve",
          "package": "blas",
          "partial": "ISolve",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#t:ISolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class for mutable matrices associated with a monad.  The member\n functions of the type class do not perform any checks on the validity of\n shapes or indices, so in general their safe counterparts should be\n preferred.\n\u003c/p\u003e",
          "module": "Unsafe.BLAS",
          "name": "MMatrix",
          "package": "blas",
          "source": "src/Data-Matrix-Dense-Base.html#MMatrix",
          "type": "class"
        },
        "index": {
          "description": "type class for mutable matrices associated with monad The member functions of the type class do not perform any checks on the validity of shapes or indices so in general their safe counterparts should be preferred",
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "MMatrix",
          "package": "blas",
          "partial": "MMatrix",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#t:MMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class for mutable matrices with inverses.  The member\n functions of the type class do not perform any checks on the validity\n of shapes or indices, so in general their safe counterparts should be\n preferred.\n\u003c/p\u003e",
          "module": "Unsafe.BLAS",
          "name": "MSolve",
          "package": "blas",
          "source": "src/Data-Matrix-Dense-Base.html#MSolve",
          "type": "class"
        },
        "index": {
          "description": "type class for mutable matrices with inverses The member functions of the type class do not perform any checks on the validity of shapes or indices so in general their safe counterparts should be preferred",
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "MSolve",
          "package": "blas",
          "partial": "MSolve",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#t:MSolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "IOBanded",
          "package": "blas",
          "signature": "IOBanded",
          "source": "src/Data-Matrix-Banded-IOBase.html#IOBanded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "IOBanded",
          "package": "blas",
          "partial": "IOBanded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:IOBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "IOMatrix",
          "package": "blas",
          "signature": "IOMatrix !TransEnum !Int !Int !(ForeignPtr e) !(Ptr e) !Int",
          "source": "src/Data-Matrix-Dense-IOBase.html#IOMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "IOMatrix",
          "package": "blas",
          "partial": "IOMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:IOMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "IOVector",
          "package": "blas",
          "signature": "IOVector !ConjEnum !Int !(ForeignPtr e) !(Ptr e) !Int",
          "source": "src/Data-Vector-Dense-IOBase.html#IOVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "IOVector",
          "package": "blas",
          "partial": "IOVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:IOVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "clearArray",
          "package": "blas",
          "signature": "Ptr e -\u003e Int -\u003e IO ()",
          "source": "src/BLAS-Internal.html#clearArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "clearArray",
          "normalized": "Ptr a-\u003eInt-\u003eIO()",
          "package": "blas",
          "partial": "Array",
          "signature": "Ptr e-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:clearArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "fptrIOBanded",
          "package": "blas",
          "signature": "(ForeignPtr e)",
          "source": "src/Data-Matrix-Banded-IOBase.html#IOBanded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "fptrIOBanded",
          "package": "blas",
          "partial": "IOBanded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:fptrIOBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a lazy list of the column vectors in the matrix.\n\u003c/p\u003e",
          "module": "Unsafe.BLAS",
          "name": "getCols",
          "package": "blas",
          "signature": "a (k, l) e -\u003e m [x k e]",
          "source": "src/Data-Matrix-Dense-Base.html#getCols",
          "type": "method"
        },
        "index": {
          "description": "Get lazy list of the column vectors in the matrix",
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "getCols",
          "normalized": "a(b,c)d-\u003ee[f b d]",
          "package": "blas",
          "partial": "Cols",
          "signature": "a(k,l)e-\u003em[x k e]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:getCols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "getColsIO",
          "package": "blas",
          "signature": "a (k, l) e -\u003e IO [x k e]",
          "source": "src/Data-Matrix-Dense-Base.html#getColsIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "getColsIO",
          "normalized": "a(b,c)d-\u003eIO[e b d]",
          "package": "blas",
          "partial": "Cols IO",
          "signature": "a(k,l)e-\u003eIO[x k e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:getColsIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "getColsST",
          "package": "blas",
          "signature": "a (k, l) e -\u003e ST s [x k e]",
          "source": "src/Data-Matrix-Dense-Base.html#getColsST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "getColsST",
          "normalized": "a(b,c)d-\u003eST e[f b d]",
          "package": "blas",
          "partial": "Cols ST",
          "signature": "a(k,l)e-\u003eST s[x k e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:getColsST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a lazy list the row vectors in the matrix.\n\u003c/p\u003e",
          "module": "Unsafe.BLAS",
          "name": "getRows",
          "package": "blas",
          "signature": "a (k, l) e -\u003e m [x l e]",
          "source": "src/Data-Matrix-Dense-Base.html#getRows",
          "type": "method"
        },
        "index": {
          "description": "Get lazy list the row vectors in the matrix",
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "getRows",
          "normalized": "a(b,c)d-\u003ee[f c d]",
          "package": "blas",
          "partial": "Rows",
          "signature": "a(k,l)e-\u003em[x l e]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:getRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "getRowsIO",
          "package": "blas",
          "signature": "a (k, l) e -\u003e IO [x l e]",
          "source": "src/Data-Matrix-Dense-Base.html#getRowsIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "getRowsIO",
          "normalized": "a(b,c)d-\u003eIO[e c d]",
          "package": "blas",
          "partial": "Rows IO",
          "signature": "a(k,l)e-\u003eIO[x l e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:getRowsIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "getRowsST",
          "package": "blas",
          "signature": "a (k, l) e -\u003e ST s [x l e]",
          "source": "src/Data-Matrix-Dense-Base.html#getRowsST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "getRowsST",
          "normalized": "a(b,c)d-\u003eST e[f c d]",
          "package": "blas",
          "partial": "Rows ST",
          "signature": "a(k,l)e-\u003eST s[x l e]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:getRowsST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "inlinePerformIO",
          "package": "blas",
          "signature": "IO a -\u003e a",
          "source": "src/BLAS-Internal.html#inlinePerformIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "inlinePerformIO",
          "normalized": "IO a-\u003ea",
          "package": "blas",
          "partial": "Perform IO",
          "signature": "IO a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:inlinePerformIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "ldaIOBanded",
          "package": "blas",
          "signature": "Int",
          "source": "src/Data-Matrix-Banded-IOBase.html#IOBanded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "ldaIOBanded",
          "package": "blas",
          "partial": "IOBanded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:ldaIOBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "numColsIOBanded",
          "package": "blas",
          "signature": "Int",
          "source": "src/Data-Matrix-Banded-IOBase.html#IOBanded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "numColsIOBanded",
          "package": "blas",
          "partial": "Cols IOBanded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:numColsIOBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "numLowerIOBanded",
          "package": "blas",
          "signature": "Int",
          "source": "src/Data-Matrix-Banded-IOBase.html#IOBanded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "numLowerIOBanded",
          "package": "blas",
          "partial": "Lower IOBanded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:numLowerIOBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "numRowsIOBanded",
          "package": "blas",
          "signature": "Int",
          "source": "src/Data-Matrix-Banded-IOBase.html#IOBanded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "numRowsIOBanded",
          "package": "blas",
          "partial": "Rows IOBanded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:numRowsIOBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "numUpperIOBanded",
          "package": "blas",
          "signature": "Int",
          "source": "src/Data-Matrix-Banded-IOBase.html#IOBanded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "numUpperIOBanded",
          "package": "blas",
          "partial": "Upper IOBanded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:numUpperIOBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "ptrIOBanded",
          "package": "blas",
          "signature": "(Ptr e)",
          "source": "src/Data-Matrix-Banded-IOBase.html#IOBanded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "ptrIOBanded",
          "package": "blas",
          "partial": "IOBanded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:ptrIOBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "transEnumIOBanded",
          "package": "blas",
          "signature": "TransEnum",
          "source": "src/Data-Matrix-Banded-IOBase.html#IOBanded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "transEnumIOBanded",
          "package": "blas",
          "partial": "Enum IOBanded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:transEnumIOBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeAddMatrix",
          "package": "blas",
          "signature": "b (n, p) e -\u003e a (n, p) e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeAddMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeAddMatrix",
          "normalized": "a(b,c)d-\u003ee(b,c)d-\u003ef()",
          "package": "blas",
          "partial": "Add Matrix",
          "signature": "b(n,p)e-\u003ea(n,p)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeAddMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeAddVector",
          "package": "blas",
          "signature": "y n e -\u003e x n e -\u003e m ()",
          "source": "src/Data-Vector-Dense-Base.html#unsafeAddVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeAddVector",
          "normalized": "a b c-\u003ed b c-\u003ee()",
          "package": "blas",
          "partial": "Add Vector",
          "signature": "y n e-\u003ex n e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeAddVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeAxpyMatrix",
          "package": "blas",
          "signature": "e -\u003e a (n, p) e -\u003e b (n, p) e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeAxpyMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeAxpyMatrix",
          "normalized": "a-\u003eb(c,d)a-\u003ee(c,d)a-\u003ef()",
          "package": "blas",
          "partial": "Axpy Matrix",
          "signature": "e-\u003ea(n,p)e-\u003eb(n,p)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeAxpyMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeAxpyVector",
          "package": "blas",
          "signature": "e -\u003e x n e -\u003e y n e -\u003e m ()",
          "source": "src/Data-Vector-Dense-Base.html#unsafeAxpyVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeAxpyVector",
          "normalized": "a-\u003eb c a-\u003ed c a-\u003ee()",
          "package": "blas",
          "partial": "Axpy Vector",
          "signature": "e-\u003ex n e-\u003ey n e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeAxpyVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeBanded",
          "package": "blas",
          "signature": "(Int, Int) -\u003e (Int, Int) -\u003e [((Int, Int), e)] -\u003e Banded (n, p) e",
          "source": "src/Data-Matrix-Banded-Base.html#unsafeBanded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeBanded",
          "normalized": "(Int,Int)-\u003e(Int,Int)-\u003e[((Int,Int),a)]-\u003eBanded(b,c)a",
          "package": "blas",
          "partial": "Banded",
          "signature": "(Int,Int)-\u003e(Int,Int)-\u003e[((Int,Int),e)]-\u003eBanded(n,p)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeColView",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Int -\u003e VectorView a n e",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeColView",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeColView",
          "normalized": "a(b,c)d-\u003eInt-\u003eVectorView a b d",
          "package": "blas",
          "partial": "Col View",
          "signature": "a(n,p)e-\u003eInt-\u003eVectorView a n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeColView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeColViewBanded",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Int -\u003e (Int, VectorView a k e, Int)",
          "source": "src/Data-Matrix-Banded-Base.html#unsafeColViewBanded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeColViewBanded",
          "normalized": "a(b,c)d-\u003eInt-\u003e(Int,VectorView a e d,Int)",
          "package": "blas",
          "partial": "Col View Banded",
          "signature": "a(n,p)e-\u003eInt-\u003e(Int,VectorView a k e,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeColViewBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeCopyMatrix",
          "package": "blas",
          "signature": "b (n, p) e -\u003e a (n, p) e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeCopyMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeCopyMatrix",
          "normalized": "a(b,c)d-\u003ee(b,c)d-\u003ef()",
          "package": "blas",
          "partial": "Copy Matrix",
          "signature": "b(n,p)e-\u003ea(n,p)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeCopyMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeCopyVector",
          "package": "blas",
          "signature": "y n e -\u003e x n e -\u003e m ()",
          "source": "src/Data-Vector-Dense-Base.html#unsafeCopyVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeCopyVector",
          "normalized": "a b c-\u003ed b c-\u003ee()",
          "package": "blas",
          "partial": "Copy Vector",
          "signature": "y n e-\u003ex n e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeCopyVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeDiag",
          "package": "blas",
          "signature": "Matrix (n, p) e -\u003e Int -\u003e Vector k e",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeDiag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeDiag",
          "normalized": "Matrix(a,b)c-\u003eInt-\u003eVector d c",
          "package": "blas",
          "partial": "Diag",
          "signature": "Matrix(n,p)e-\u003eInt-\u003eVector k e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeDiag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeDiagBanded",
          "package": "blas",
          "signature": "Banded (n, p) e -\u003e Int -\u003e Vector k e",
          "source": "src/Data-Matrix-Banded-Base.html#unsafeDiagBanded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeDiagBanded",
          "normalized": "Banded(a,b)c-\u003eInt-\u003eVector d c",
          "package": "blas",
          "partial": "Diag Banded",
          "signature": "Banded(n,p)e-\u003eInt-\u003eVector k e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeDiagBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeDiagView",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Int -\u003e VectorView a k e",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeDiagView",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeDiagView",
          "normalized": "a(b,c)d-\u003eInt-\u003eVectorView a e d",
          "package": "blas",
          "partial": "Diag View",
          "signature": "a(n,p)e-\u003eInt-\u003eVectorView a k e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeDiagView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeDiagViewBanded",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Int -\u003e VectorView a k e",
          "source": "src/Data-Matrix-Banded-Base.html#unsafeDiagViewBanded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeDiagViewBanded",
          "normalized": "a(b,c)d-\u003eInt-\u003eVectorView a e d",
          "package": "blas",
          "partial": "Diag View Banded",
          "signature": "a(n,p)e-\u003eInt-\u003eVectorView a k e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeDiagViewBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeDivMatrix",
          "package": "blas",
          "signature": "b (n, p) e -\u003e a (n, p) e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeDivMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeDivMatrix",
          "normalized": "a(b,c)d-\u003ee(b,c)d-\u003ef()",
          "package": "blas",
          "partial": "Div Matrix",
          "signature": "b(n,p)e-\u003ea(n,p)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeDivMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeDivVector",
          "package": "blas",
          "signature": "y n e -\u003e x n e -\u003e m ()",
          "source": "src/Data-Vector-Dense-Base.html#unsafeDivVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeDivVector",
          "normalized": "a b c-\u003ed b c-\u003ee()",
          "package": "blas",
          "partial": "Div Vector",
          "signature": "y n e-\u003ex n e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeDivVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeDoSApplyAdd",
          "package": "blas",
          "signature": "e -\u003e a (k, l) e -\u003e x l e -\u003e e -\u003e y k e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeDoSApplyAdd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeDoSApplyAdd",
          "normalized": "a-\u003eb(c,d)a-\u003ee d a-\u003ea-\u003ef c a-\u003eg()",
          "package": "blas",
          "partial": "Do SApply Add",
          "signature": "e-\u003ea(k,l)e-\u003ex l e-\u003ee-\u003ey k e-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeDoSApplyAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeDoSApplyAddMat",
          "package": "blas",
          "signature": "e -\u003e a (r, s) e -\u003e b (s, t) e -\u003e e -\u003e c (r, t) e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeDoSApplyAddMat",
          "type": "method"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeDoSApplyAddMat",
          "normalized": "a-\u003eb(c,d)a-\u003ee(d,f)a-\u003ea-\u003eg(c,f)a-\u003eh()",
          "package": "blas",
          "partial": "Do SApply Add Mat",
          "signature": "e-\u003ea(r,s)e-\u003eb(s,t)e-\u003ee-\u003ec(r,t)e-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeDoSApplyAddMat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeDoSApplyMat_",
          "package": "blas",
          "signature": "e -\u003e a (k, k) e -\u003e b (k, l) e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeDoSApplyMat_",
          "type": "method"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeDoSApplyMat_",
          "normalized": "a-\u003eb(c,c)a-\u003ed(c,e)a-\u003ef()",
          "package": "blas",
          "partial": "Do SApply Mat",
          "signature": "e-\u003ea(k,k)e-\u003eb(k,l)e-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeDoSApplyMat_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeDoSApply_",
          "package": "blas",
          "signature": "e -\u003e a (n, n) e -\u003e y n e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeDoSApply_",
          "type": "method"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeDoSApply_",
          "normalized": "a-\u003eb(c,c)a-\u003ed c a-\u003ee()",
          "package": "blas",
          "partial": "Do SApply",
          "signature": "e-\u003ea(n,n)e-\u003ey n e-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeDoSApply_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeDoSSolve",
          "package": "blas",
          "signature": "e -\u003e a (k, l) e -\u003e y k e -\u003e x l e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeDoSSolve",
          "type": "method"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeDoSSolve",
          "normalized": "a-\u003eb(c,d)a-\u003ee c a-\u003ef d a-\u003eg()",
          "package": "blas",
          "partial": "Do SSolve",
          "signature": "e-\u003ea(k,l)e-\u003ey k e-\u003ex l e-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeDoSSolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeDoSSolveMat",
          "package": "blas",
          "signature": "e -\u003e a (r, s) e -\u003e c (r, t) e -\u003e b (s, t) e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeDoSSolveMat",
          "type": "method"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeDoSSolveMat",
          "normalized": "a-\u003eb(c,d)a-\u003ee(c,f)a-\u003eg(d,f)a-\u003eh()",
          "package": "blas",
          "partial": "Do SSolve Mat",
          "signature": "e-\u003ea(r,s)e-\u003ec(r,t)e-\u003eb(s,t)e-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeDoSSolveMat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeDoSSolveMat_",
          "package": "blas",
          "signature": "e -\u003e a (k, k) e -\u003e b (k, l) e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeDoSSolveMat_",
          "type": "method"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeDoSSolveMat_",
          "normalized": "a-\u003eb(c,c)a-\u003ed(c,e)a-\u003ef()",
          "package": "blas",
          "partial": "Do SSolve Mat",
          "signature": "e-\u003ea(k,k)e-\u003eb(k,l)e-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeDoSSolveMat_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeDoSSolve_",
          "package": "blas",
          "signature": "e -\u003e a (k, k) e -\u003e x k e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeDoSSolve_",
          "type": "method"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeDoSSolve_",
          "normalized": "a-\u003eb(c,c)a-\u003ed c a-\u003ee()",
          "package": "blas",
          "partial": "Do SSolve",
          "signature": "e-\u003ea(k,k)e-\u003ex k e-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeDoSSolve_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeDoSolve",
          "package": "blas",
          "signature": "a (k, l) e -\u003e y k e -\u003e x l e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeDoSolve",
          "type": "method"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeDoSolve",
          "normalized": "a(b,c)d-\u003ee b d-\u003ef c d-\u003eg()",
          "package": "blas",
          "partial": "Do Solve",
          "signature": "a(k,l)e-\u003ey k e-\u003ex l e-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeDoSolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeDoSolveMat",
          "package": "blas",
          "signature": "a (r, s) e -\u003e c (r, t) e -\u003e b (s, t) e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeDoSolveMat",
          "type": "method"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeDoSolveMat",
          "normalized": "a(b,c)d-\u003ee(b,f)d-\u003eg(c,f)d-\u003eh()",
          "package": "blas",
          "partial": "Do Solve Mat",
          "signature": "a(r,s)e-\u003ec(r,t)e-\u003eb(s,t)e-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeDoSolveMat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeDoSolveMat_",
          "package": "blas",
          "signature": "a (k, k) e -\u003e b (k, l) e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeDoSolveMat_",
          "type": "method"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeDoSolveMat_",
          "normalized": "a(b,b)c-\u003ed(b,e)c-\u003ef()",
          "package": "blas",
          "partial": "Do Solve Mat",
          "signature": "a(k,k)e-\u003eb(k,l)e-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeDoSolveMat_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeDoSolve_",
          "package": "blas",
          "signature": "a (k, k) e -\u003e x k e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeDoSolve_",
          "type": "method"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeDoSolve_",
          "normalized": "a(b,b)c-\u003ed b c-\u003ee()",
          "package": "blas",
          "partial": "Do Solve",
          "signature": "a(k,k)e-\u003ex k e-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeDoSolve_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeDot",
          "package": "blas",
          "signature": "Vector n e -\u003e Vector n e -\u003e e",
          "source": "src/Data-Vector-Dense-Base.html#unsafeDot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeDot",
          "normalized": "Vector a b-\u003eVector a b-\u003eb",
          "package": "blas",
          "partial": "Dot",
          "signature": "Vector n e-\u003eVector n e-\u003ee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeDot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeGetAddMatrix",
          "package": "blas",
          "signature": "a (n, p) e -\u003e b (n, p) e -\u003e m (c (n, p) e)",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeGetAddMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeGetAddMatrix",
          "normalized": "a(b,c)d-\u003ee(b,c)d-\u003ef(g(b,c)d)",
          "package": "blas",
          "partial": "Get Add Matrix",
          "signature": "a(n,p)e-\u003eb(n,p)e-\u003em(c(n,p)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeGetAddMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeGetAddVector",
          "package": "blas",
          "signature": "x n e -\u003e y n e -\u003e m (z n e)",
          "source": "src/Data-Vector-Dense-Base.html#unsafeGetAddVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeGetAddVector",
          "normalized": "a b c-\u003ed b c-\u003ee(f b c)",
          "package": "blas",
          "partial": "Get Add Vector",
          "signature": "x n e-\u003ey n e-\u003em(z n e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeGetAddVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeGetCol",
          "package": "blas",
          "signature": "a (k, l) e -\u003e Int -\u003e m (x k e)",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeGetCol",
          "type": "method"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeGetCol",
          "normalized": "a(b,c)d-\u003eInt-\u003ee(f b d)",
          "package": "blas",
          "partial": "Get Col",
          "signature": "a(k,l)e-\u003eInt-\u003em(x k e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeGetCol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeGetColBanded",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Int -\u003e m (y n e)",
          "source": "src/Data-Matrix-Banded-Base.html#unsafeGetColBanded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeGetColBanded",
          "normalized": "a(b,c)d-\u003eInt-\u003ee(f b d)",
          "package": "blas",
          "partial": "Get Col Banded",
          "signature": "a(n,p)e-\u003eInt-\u003em(y n e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeGetColBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeGetDiag",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Int -\u003e m (y k e)",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeGetDiag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeGetDiag",
          "normalized": "a(b,c)d-\u003eInt-\u003ee(f g d)",
          "package": "blas",
          "partial": "Get Diag",
          "signature": "a(n,p)e-\u003eInt-\u003em(y k e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeGetDiag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeGetDiagBanded",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Int -\u003e m (y k e)",
          "source": "src/Data-Matrix-Banded-Base.html#unsafeGetDiagBanded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeGetDiagBanded",
          "normalized": "a(b,c)d-\u003eInt-\u003ee(f g d)",
          "package": "blas",
          "partial": "Get Diag Banded",
          "signature": "a(n,p)e-\u003eInt-\u003em(y k e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeGetDiagBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeGetDivMatrix",
          "package": "blas",
          "signature": "a (n, p) e -\u003e b (n, p) e -\u003e m (c (n, p) e)",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeGetDivMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeGetDivMatrix",
          "normalized": "a(b,c)d-\u003ee(b,c)d-\u003ef(g(b,c)d)",
          "package": "blas",
          "partial": "Get Div Matrix",
          "signature": "a(n,p)e-\u003eb(n,p)e-\u003em(c(n,p)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeGetDivMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeGetDivVector",
          "package": "blas",
          "signature": "x n e -\u003e y n e -\u003e m (z n e)",
          "source": "src/Data-Vector-Dense-Base.html#unsafeGetDivVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeGetDivVector",
          "normalized": "a b c-\u003ed b c-\u003ee(f b c)",
          "package": "blas",
          "partial": "Get Div Vector",
          "signature": "x n e-\u003ey n e-\u003em(z n e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeGetDivVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeGetDot",
          "package": "blas",
          "signature": "x n e -\u003e y n e -\u003e m e",
          "source": "src/Data-Vector-Dense-Base.html#unsafeGetDot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeGetDot",
          "normalized": "a b c-\u003ed b c-\u003ee c",
          "package": "blas",
          "partial": "Get Dot",
          "signature": "x n e-\u003ey n e-\u003em e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeGetDot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeGetMulMatrix",
          "package": "blas",
          "signature": "a (n, p) e -\u003e b (n, p) e -\u003e m (c (n, p) e)",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeGetMulMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeGetMulMatrix",
          "normalized": "a(b,c)d-\u003ee(b,c)d-\u003ef(g(b,c)d)",
          "package": "blas",
          "partial": "Get Mul Matrix",
          "signature": "a(n,p)e-\u003eb(n,p)e-\u003em(c(n,p)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeGetMulMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeGetMulVector",
          "package": "blas",
          "signature": "x n e -\u003e y n e -\u003e m (z n e)",
          "source": "src/Data-Vector-Dense-Base.html#unsafeGetMulVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeGetMulVector",
          "normalized": "a b c-\u003ed b c-\u003ee(f b c)",
          "package": "blas",
          "partial": "Get Mul Vector",
          "signature": "x n e-\u003ey n e-\u003em(z n e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeGetMulVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeGetRow",
          "package": "blas",
          "signature": "a (k, l) e -\u003e Int -\u003e m (x l e)",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeGetRow",
          "type": "method"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeGetRow",
          "normalized": "a(b,c)d-\u003eInt-\u003ee(f c d)",
          "package": "blas",
          "partial": "Get Row",
          "signature": "a(k,l)e-\u003eInt-\u003em(x l e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeGetRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeGetRowBanded",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Int -\u003e m (y p e)",
          "source": "src/Data-Matrix-Banded-Base.html#unsafeGetRowBanded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeGetRowBanded",
          "normalized": "a(b,c)d-\u003eInt-\u003ee(f c d)",
          "package": "blas",
          "partial": "Get Row Banded",
          "signature": "a(n,p)e-\u003eInt-\u003em(y p e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeGetRowBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeGetSApply",
          "package": "blas",
          "signature": "e -\u003e a (k, l) e -\u003e x l e -\u003e m (y k e)",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeGetSApply",
          "type": "method"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeGetSApply",
          "normalized": "a-\u003eb(c,d)a-\u003ee d a-\u003ef(g c a)",
          "package": "blas",
          "partial": "Get SApply",
          "signature": "e-\u003ea(k,l)e-\u003ex l e-\u003em(y k e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeGetSApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeGetSApplyMat",
          "package": "blas",
          "signature": "e -\u003e a (r, s) e -\u003e b (s, t) e -\u003e m (c (r, t) e)",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeGetSApplyMat",
          "type": "method"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeGetSApplyMat",
          "normalized": "a-\u003eb(c,d)a-\u003ee(d,f)a-\u003eg(h(c,f)a)",
          "package": "blas",
          "partial": "Get SApply Mat",
          "signature": "e-\u003ea(r,s)e-\u003eb(s,t)e-\u003em(c(r,t)e)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeGetSApplyMat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeGetSubMatrix",
          "package": "blas",
          "signature": "a (n, p) e -\u003e b (n, p) e -\u003e m (c (n, p) e)",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeGetSubMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeGetSubMatrix",
          "normalized": "a(b,c)d-\u003ee(b,c)d-\u003ef(g(b,c)d)",
          "package": "blas",
          "partial": "Get Sub Matrix",
          "signature": "a(n,p)e-\u003eb(n,p)e-\u003em(c(n,p)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeGetSubMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeGetSubVector",
          "package": "blas",
          "signature": "x n e -\u003e y n e -\u003e m (z n e)",
          "source": "src/Data-Vector-Dense-Base.html#unsafeGetSubVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeGetSubVector",
          "normalized": "a b c-\u003ed b c-\u003ee(f b c)",
          "package": "blas",
          "partial": "Get Sub Vector",
          "signature": "x n e-\u003ey n e-\u003em(z n e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeGetSubVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeIOBandedToBanded",
          "package": "blas",
          "signature": "IOBanded (n, p) e -\u003e a (n, p) e",
          "source": "src/Data-Matrix-Banded-Base.html#unsafeIOBandedToBanded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeIOBandedToBanded",
          "normalized": "IOBanded(a,b)c-\u003ed(a,b)c",
          "package": "blas",
          "partial": "IOBanded To Banded",
          "signature": "IOBanded(n,p)e-\u003ea(n,p)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeIOBandedToBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeIOMatrixToMatrix",
          "package": "blas",
          "signature": "IOMatrix (n, p) e -\u003e a (n, p) e",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeIOMatrixToMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeIOMatrixToMatrix",
          "normalized": "IOMatrix(a,b)c-\u003ed(a,b)c",
          "package": "blas",
          "partial": "IOMatrix To Matrix",
          "signature": "IOMatrix(n,p)e-\u003ea(n,p)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeIOMatrixToMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeIOVectorToVector",
          "package": "blas",
          "signature": "IOVector n e -\u003e x n e",
          "source": "src/Data-Vector-Dense-Base.html#unsafeIOVectorToVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeIOVectorToVector",
          "normalized": "IOVector a b-\u003ec a b",
          "package": "blas",
          "partial": "IOVector To Vector",
          "signature": "IOVector n e-\u003ex n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeIOVectorToVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeMatrix",
          "package": "blas",
          "signature": "(Int, Int) -\u003e [((Int, Int), e)] -\u003e Matrix (n, p) e",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeMatrix",
          "normalized": "(Int,Int)-\u003e[((Int,Int),a)]-\u003eMatrix(b,c)a",
          "package": "blas",
          "partial": "Matrix",
          "signature": "(Int,Int)-\u003e[((Int,Int),e)]-\u003eMatrix(n,p)e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeMulMatrix",
          "package": "blas",
          "signature": "b (n, p) e -\u003e a (n, p) e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeMulMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeMulMatrix",
          "normalized": "a(b,c)d-\u003ee(b,c)d-\u003ef()",
          "package": "blas",
          "partial": "Mul Matrix",
          "signature": "b(n,p)e-\u003ea(n,p)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeMulMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeMulVector",
          "package": "blas",
          "signature": "y n e -\u003e x n e -\u003e m ()",
          "source": "src/Data-Vector-Dense-Base.html#unsafeMulVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeMulVector",
          "normalized": "a b c-\u003ed b c-\u003ee()",
          "package": "blas",
          "partial": "Mul Vector",
          "signature": "y n e-\u003ex n e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeMulVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeNewBanded",
          "package": "blas",
          "signature": "(Int, Int) -\u003e (Int, Int) -\u003e [((Int, Int), e)] -\u003e m (a (n, p) e)",
          "source": "src/Data-Matrix-Banded-Base.html#unsafeNewBanded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeNewBanded",
          "normalized": "(Int,Int)-\u003e(Int,Int)-\u003e[((Int,Int),a)]-\u003eb(c(d,e)a)",
          "package": "blas",
          "partial": "New Banded",
          "signature": "(Int,Int)-\u003e(Int,Int)-\u003e[((Int,Int),e)]-\u003em(a(n,p)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeNewBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeNewMatrix",
          "package": "blas",
          "signature": "(Int, Int) -\u003e [((Int, Int), e)] -\u003e m (a (n, p) e)",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeNewMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeNewMatrix",
          "normalized": "(Int,Int)-\u003e[((Int,Int),a)]-\u003eb(c(d,e)a)",
          "package": "blas",
          "partial": "New Matrix",
          "signature": "(Int,Int)-\u003e[((Int,Int),e)]-\u003em(a(n,p)e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeNewMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeNewVector",
          "package": "blas",
          "signature": "Int -\u003e [(Int, e)] -\u003e m (x n e)",
          "source": "src/Data-Vector-Dense-Base.html#unsafeNewVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeNewVector",
          "normalized": "Int-\u003e[(Int,a)]-\u003eb(c d a)",
          "package": "blas",
          "partial": "New Vector",
          "signature": "Int-\u003e[(Int,e)]-\u003em(x n e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeNewVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeRowView",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Int -\u003e VectorView a p e",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeRowView",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeRowView",
          "normalized": "a(b,c)d-\u003eInt-\u003eVectorView a c d",
          "package": "blas",
          "partial": "Row View",
          "signature": "a(n,p)e-\u003eInt-\u003eVectorView a p e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeRowView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeRowViewBanded",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Int -\u003e (Int, VectorView a k e, Int)",
          "source": "src/Data-Matrix-Banded-Base.html#unsafeRowViewBanded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeRowViewBanded",
          "normalized": "a(b,c)d-\u003eInt-\u003e(Int,VectorView a e d,Int)",
          "package": "blas",
          "partial": "Row View Banded",
          "signature": "a(n,p)e-\u003eInt-\u003e(Int,VectorView a k e,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeRowViewBanded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeSubMatrix",
          "package": "blas",
          "signature": "b (n, p) e -\u003e a (n, p) e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeSubMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeSubMatrix",
          "normalized": "a(b,c)d-\u003ee(b,c)d-\u003ef()",
          "package": "blas",
          "partial": "Sub Matrix",
          "signature": "b(n,p)e-\u003ea(n,p)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeSubMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeSubVector",
          "package": "blas",
          "signature": "y n e -\u003e x n e -\u003e m ()",
          "source": "src/Data-Vector-Dense-Base.html#unsafeSubVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeSubVector",
          "normalized": "a b c-\u003ed b c-\u003ee()",
          "package": "blas",
          "partial": "Sub Vector",
          "signature": "y n e-\u003ex n e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeSubVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeSubmatrix",
          "package": "blas",
          "signature": "Matrix (n, p) e -\u003e (Int, Int) -\u003e (Int, Int) -\u003e Matrix (n', p') e",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeSubmatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeSubmatrix",
          "normalized": "Matrix(a,b)c-\u003e(Int,Int)-\u003e(Int,Int)-\u003eMatrix(d,e)c",
          "package": "blas",
          "partial": "Submatrix",
          "signature": "Matrix(n,p)e-\u003e(Int,Int)-\u003e(Int,Int)-\u003eMatrix(n',p')e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeSubmatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeSubmatrixView",
          "package": "blas",
          "signature": "a (n, p) e -\u003e (Int, Int) -\u003e (Int, Int) -\u003e a (n', p') e",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeSubmatrixView",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeSubmatrixView",
          "normalized": "a(b,c)d-\u003e(Int,Int)-\u003e(Int,Int)-\u003ea(e,f)d",
          "package": "blas",
          "partial": "Submatrix View",
          "signature": "a(n,p)e-\u003e(Int,Int)-\u003e(Int,Int)-\u003ea(n',p')e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeSubmatrixView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeSubvector",
          "package": "blas",
          "signature": "Vector n e -\u003e Int -\u003e Int -\u003e Vector n' e",
          "source": "src/Data-Vector-Dense-Base.html#unsafeSubvector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeSubvector",
          "normalized": "Vector a b-\u003eInt-\u003eInt-\u003eVector c b",
          "package": "blas",
          "partial": "Subvector",
          "signature": "Vector n e-\u003eInt-\u003eInt-\u003eVector n' e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeSubvector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeSubvectorView",
          "package": "blas",
          "signature": "x n e -\u003e Int -\u003e Int -\u003e x n' e",
          "source": "src/Data-Vector-Dense-Base.html#unsafeSubvectorView",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeSubvectorView",
          "normalized": "a b c-\u003eInt-\u003eInt-\u003ea d c",
          "package": "blas",
          "partial": "Subvector View",
          "signature": "x n e-\u003eInt-\u003eInt-\u003ex n' e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeSubvectorView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeSubvectorViewWithStride",
          "package": "blas",
          "signature": "Int -\u003e x n e -\u003e Int -\u003e Int -\u003e x n' e",
          "source": "src/Data-Vector-Dense-Base.html#unsafeSubvectorViewWithStride",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeSubvectorViewWithStride",
          "normalized": "Int-\u003ea b c-\u003eInt-\u003eInt-\u003ea d c",
          "package": "blas",
          "partial": "Subvector View With Stride",
          "signature": "Int-\u003ex n e-\u003eInt-\u003eInt-\u003ex n' e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeSubvectorViewWithStride"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeSubvectorWithStride",
          "package": "blas",
          "signature": "Int -\u003e Vector n e -\u003e Int -\u003e Int -\u003e Vector n' e",
          "source": "src/Data-Vector-Dense-Base.html#unsafeSubvectorWithStride",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeSubvectorWithStride",
          "normalized": "Int-\u003eVector a b-\u003eInt-\u003eInt-\u003eVector c b",
          "package": "blas",
          "partial": "Subvector With Stride",
          "signature": "Int-\u003eVector n e-\u003eInt-\u003eInt-\u003eVector n' e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeSubvectorWithStride"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeSwapCols",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Int -\u003e Int -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeSwapCols",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeSwapCols",
          "normalized": "a(b,c)d-\u003eInt-\u003eInt-\u003ee()",
          "package": "blas",
          "partial": "Swap Cols",
          "signature": "a(n,p)e-\u003eInt-\u003eInt-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeSwapCols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeSwapMatrix",
          "package": "blas",
          "signature": "a (n, p) e -\u003e b (n, p) e -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeSwapMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeSwapMatrix",
          "normalized": "a(b,c)d-\u003ee(b,c)d-\u003ef()",
          "package": "blas",
          "partial": "Swap Matrix",
          "signature": "a(n,p)e-\u003eb(n,p)e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeSwapMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeSwapRows",
          "package": "blas",
          "signature": "a (n, p) e -\u003e Int -\u003e Int -\u003e m ()",
          "source": "src/Data-Matrix-Dense-Base.html#unsafeSwapRows",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeSwapRows",
          "normalized": "a(b,c)d-\u003eInt-\u003eInt-\u003ee()",
          "package": "blas",
          "partial": "Swap Rows",
          "signature": "a(n,p)e-\u003eInt-\u003eInt-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeSwapRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeSwapVector",
          "package": "blas",
          "signature": "x n e -\u003e y n e -\u003e m ()",
          "source": "src/Data-Vector-Dense-Base.html#unsafeSwapVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeSwapVector",
          "normalized": "a b c-\u003ed b c-\u003ee()",
          "package": "blas",
          "partial": "Swap Vector",
          "signature": "x n e-\u003ey n e-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeSwapVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Unsafe.BLAS",
          "name": "unsafeVector",
          "package": "blas",
          "signature": "Int -\u003e [(Int, e)] -\u003e Vector n e",
          "source": "src/Data-Vector-Dense-Base.html#unsafeVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Unsafe BLAS",
          "module": "Unsafe.BLAS",
          "name": "unsafeVector",
          "normalized": "Int-\u003e[(Int,a)]-\u003eVector b a",
          "package": "blas",
          "partial": "Vector",
          "signature": "Int-\u003e[(Int,e)]-\u003eVector n e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blas/docs/Unsafe-BLAS.html#v:unsafeVector"
      }
    }
  ]
]