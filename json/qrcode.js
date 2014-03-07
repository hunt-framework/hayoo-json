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
        "word": "qrcode"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn evolving QR Code encoder (and future decoder) in pure Haskell.\n\u003c/p\u003e\u003cp\u003eCurrently supports encoding \u003ccode\u003e\u003ca\u003eNumeric\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eAlphanumeric\u003c/a\u003e\u003c/code\u003e data.\n\u003c/p\u003e\u003cp\u003eExample\n\u003c/p\u003e\u003cpre\u003e encode (fromJust $ version 1) M Alphanumeric \"hello world\"\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Codec.Binary.QRCode",
          "name": "QRCode",
          "package": "qrcode",
          "source": "src/Codec-Binary-QRCode.html",
          "type": "module"
        },
        "index": {
          "description": "An evolving QR Code encoder and future decoder in pure Haskell Currently supports encoding Numeric and Alphanumeric data Example encode fromJust version Alphanumeric hello world",
          "hierarchy": "Codec Binary QRCode",
          "module": "Codec.Binary.QRCode",
          "name": "QRCode",
          "package": "qrcode",
          "partial": "QRCode",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/qrcode/docs/Codec-Binary-QRCode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Binary.QRCode",
          "name": "ErrorLevel",
          "package": "qrcode",
          "source": "src/Codec-Binary-QRCode-Spec.html#ErrorLevel",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Binary QRCode",
          "module": "Codec.Binary.QRCode",
          "name": "ErrorLevel",
          "package": "qrcode",
          "partial": "Error Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/qrcode/docs/Codec-Binary-QRCode.html#t:ErrorLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a QR Code symbol.\n\u003c/p\u003e",
          "module": "Codec.Binary.QRCode",
          "name": "Matrix",
          "package": "qrcode",
          "source": "src/Codec-Binary-QRCode-Matrix.html#Matrix",
          "type": "data"
        },
        "index": {
          "description": "Represents QR Code symbol",
          "hierarchy": "Codec Binary QRCode",
          "module": "Codec.Binary.QRCode",
          "name": "Matrix",
          "package": "qrcode",
          "partial": "Matrix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/qrcode/docs/Codec-Binary-QRCode.html#t:Matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Binary.QRCode",
          "name": "Mode",
          "package": "qrcode",
          "source": "src/Codec-Binary-QRCode-Spec.html#Mode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Binary QRCode",
          "module": "Codec.Binary.QRCode",
          "name": "Mode",
          "package": "qrcode",
          "partial": "Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/qrcode/docs/Codec-Binary-QRCode.html#t:Mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe smallest unit in a QR Code symbol (i.e. one \u003ca\u003esquare\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Codec.Binary.QRCode",
          "name": "Module",
          "package": "qrcode",
          "source": "src/Codec-Binary-QRCode-Utils.html#Module",
          "type": "data"
        },
        "index": {
          "description": "The smallest unit in QR Code symbol i.e one square",
          "hierarchy": "Codec Binary QRCode",
          "module": "Codec.Binary.QRCode",
          "name": "Module",
          "package": "qrcode",
          "partial": "Module",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/qrcode/docs/Codec-Binary-QRCode.html#t:Module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Binary.QRCode",
          "name": "Version",
          "package": "qrcode",
          "source": "src/Codec-Binary-QRCode-Spec.html#Version",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Binary QRCode",
          "module": "Codec.Binary.QRCode",
          "name": "Version",
          "package": "qrcode",
          "partial": "Version",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/qrcode/docs/Codec-Binary-QRCode.html#t:Version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-.:.\u003c/pre\u003e\u003cp\u003eInput alphabets are automatically converted to upper case.\n\u003c/p\u003e",
          "module": "Codec.Binary.QRCode",
          "name": "Alphanumeric",
          "package": "qrcode",
          "signature": "Alphanumeric",
          "source": "src/Codec-Binary-QRCode-Spec.html#Mode",
          "type": "function"
        },
        "index": {
          "description": "ABCDEFGHIJKLMNOPQRSTUVWXYZ Input alphabets are automatically converted to upper case",
          "hierarchy": "Codec Binary QRCode",
          "module": "Codec.Binary.QRCode",
          "name": "Alphanumeric",
          "package": "qrcode",
          "partial": "Alphanumeric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/qrcode/docs/Codec-Binary-QRCode.html#v:Alphanumeric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Binary.QRCode",
          "name": "Dark",
          "package": "qrcode",
          "signature": "Dark",
          "source": "src/Codec-Binary-QRCode-Utils.html#Module",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Binary QRCode",
          "module": "Codec.Binary.QRCode",
          "name": "Dark",
          "package": "qrcode",
          "partial": "Dark",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/qrcode/docs/Codec-Binary-QRCode.html#v:Dark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError recovery up to 30%.\n\u003c/p\u003e",
          "module": "Codec.Binary.QRCode",
          "name": "H",
          "package": "qrcode",
          "signature": "H",
          "source": "src/Codec-Binary-QRCode-Spec.html#ErrorLevel",
          "type": "function"
        },
        "index": {
          "description": "Error recovery up to",
          "hierarchy": "Codec Binary QRCode",
          "module": "Codec.Binary.QRCode",
          "name": "H",
          "package": "qrcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/qrcode/docs/Codec-Binary-QRCode.html#v:H"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError recovery up to 7%.\n\u003c/p\u003e",
          "module": "Codec.Binary.QRCode",
          "name": "L",
          "package": "qrcode",
          "signature": "L",
          "source": "src/Codec-Binary-QRCode-Spec.html#ErrorLevel",
          "type": "function"
        },
        "index": {
          "description": "Error recovery up to",
          "hierarchy": "Codec Binary QRCode",
          "module": "Codec.Binary.QRCode",
          "name": "L",
          "package": "qrcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/qrcode/docs/Codec-Binary-QRCode.html#v:L"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Binary.QRCode",
          "name": "Light",
          "package": "qrcode",
          "signature": "Light",
          "source": "src/Codec-Binary-QRCode-Utils.html#Module",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Binary QRCode",
          "module": "Codec.Binary.QRCode",
          "name": "Light",
          "package": "qrcode",
          "partial": "Light",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/qrcode/docs/Codec-Binary-QRCode.html#v:Light"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError recovery up to 15%.\n\u003c/p\u003e",
          "module": "Codec.Binary.QRCode",
          "name": "M",
          "package": "qrcode",
          "signature": "M",
          "source": "src/Codec-Binary-QRCode-Spec.html#ErrorLevel",
          "type": "function"
        },
        "index": {
          "description": "Error recovery up to",
          "hierarchy": "Codec Binary QRCode",
          "module": "Codec.Binary.QRCode",
          "name": "M",
          "package": "qrcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/qrcode/docs/Codec-Binary-QRCode.html#v:M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e0123456789\u003c/pre\u003e",
          "module": "Codec.Binary.QRCode",
          "name": "Numeric",
          "package": "qrcode",
          "signature": "Numeric",
          "source": "src/Codec-Binary-QRCode-Spec.html#Mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Binary QRCode",
          "module": "Codec.Binary.QRCode",
          "name": "Numeric",
          "package": "qrcode",
          "partial": "Numeric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/qrcode/docs/Codec-Binary-QRCode.html#v:Numeric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError recovery up to 25%.\n\u003c/p\u003e",
          "module": "Codec.Binary.QRCode",
          "name": "Q",
          "package": "qrcode",
          "signature": "Q",
          "source": "src/Codec-Binary-QRCode-Spec.html#ErrorLevel",
          "type": "function"
        },
        "index": {
          "description": "Error recovery up to",
          "hierarchy": "Codec Binary QRCode",
          "module": "Codec.Binary.QRCode",
          "name": "Q",
          "package": "qrcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/qrcode/docs/Codec-Binary-QRCode.html#v:Q"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the input is invalid for the \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e specified.\n\u003c/p\u003e",
          "module": "Codec.Binary.QRCode",
          "name": "encode",
          "package": "qrcode",
          "signature": "Version -\u003e ErrorLevel -\u003e Mode -\u003e String -\u003e Maybe Matrix",
          "source": "src/Codec-Binary-QRCode.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Returns Nothing if the input is invalid for the Mode specified",
          "hierarchy": "Codec Binary QRCode",
          "module": "Codec.Binary.QRCode",
          "name": "encode",
          "normalized": "Version-\u003eErrorLevel-\u003eMode-\u003eString-\u003eMaybe Matrix",
          "package": "qrcode",
          "signature": "Version-\u003eErrorLevel-\u003eMode-\u003eString-\u003eMaybe Matrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/qrcode/docs/Codec-Binary-QRCode.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eMatrix\u003c/a\u003e\u003c/code\u003e to an array of \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eLight\u003c/a\u003e\u003c/code\u003e modules will have the value \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e;\n \u003ccode\u003e\u003ca\u003eDark\u003c/a\u003e\u003c/code\u003e modules will have the value \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Codec.Binary.QRCode",
          "name": "toArray",
          "package": "qrcode",
          "signature": "Matrix -\u003e Array (Int, Int) a",
          "source": "src/Codec-Binary-QRCode-Matrix.html#toArray",
          "type": "function"
        },
        "index": {
          "description": "Convert Matrix to an array of Bounded Light modules will have the value maxBound Dark modules will have the value minBound",
          "hierarchy": "Codec Binary QRCode",
          "module": "Codec.Binary.QRCode",
          "name": "toArray",
          "normalized": "Matrix-\u003eArray(Int,Int)a",
          "package": "qrcode",
          "partial": "Array",
          "signature": "Matrix-\u003eArray(Int,Int)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/qrcode/docs/Codec-Binary-QRCode.html#v:toArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValid version number is \u003cem\u003e[1, 40]\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Codec.Binary.QRCode",
          "name": "version",
          "package": "qrcode",
          "signature": "Int -\u003e Maybe Version",
          "source": "src/Codec-Binary-QRCode.html#version",
          "type": "function"
        },
        "index": {
          "description": "Valid version number is",
          "hierarchy": "Codec Binary QRCode",
          "module": "Codec.Binary.QRCode",
          "name": "version",
          "normalized": "Int-\u003eMaybe Version",
          "package": "qrcode",
          "signature": "Int-\u003eMaybe Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/qrcode/docs/Codec-Binary-QRCode.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of modules per side.\n\u003c/p\u003e",
          "module": "Codec.Binary.QRCode",
          "name": "width",
          "package": "qrcode",
          "signature": "Matrix -\u003e Int",
          "source": "src/Codec-Binary-QRCode.html#width",
          "type": "function"
        },
        "index": {
          "description": "The number of modules per side",
          "hierarchy": "Codec Binary QRCode",
          "module": "Codec.Binary.QRCode",
          "name": "width",
          "normalized": "Matrix-\u003eInt",
          "package": "qrcode",
          "signature": "Matrix-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/qrcode/docs/Codec-Binary-QRCode.html#v:width"
      }
    }
  ]
]