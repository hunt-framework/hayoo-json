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
        "word": "diagrams-qrcode"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.QRCode",
          "name": "QRCode",
          "package": "diagrams-qrcode",
          "source": "src/Diagrams-QRCode.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Diagrams QRCode",
          "module": "Diagrams.QRCode",
          "name": "QRCode",
          "package": "diagrams-qrcode",
          "partial": "QRCode",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-qrcode/docs/Diagrams-QRCode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003epathList\u003c/a\u003e\u003c/code\u003e, but from an array.\n\u003c/p\u003e",
          "module": "Diagrams.QRCode",
          "name": "pathArray",
          "package": "diagrams-qrcode",
          "signature": "Array (ix, ix) a -\u003e Path R2",
          "source": "src/Diagrams-QRCode.html#pathArray",
          "type": "function"
        },
        "index": {
          "description": "Same as pathList but from an array",
          "hierarchy": "Diagrams QRCode",
          "module": "Diagrams.QRCode",
          "name": "pathArray",
          "normalized": "Array(a,a)b-\u003ePath R",
          "package": "diagrams-qrcode",
          "partial": "Array",
          "signature": "Array(ix,ix)a-\u003ePath R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-qrcode/docs/Diagrams-QRCode.html#v:pathArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a QR code represented as a list of bounded values\n into a \u003ccode\u003ePath\u003c/code\u003e.  \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e values are considered to be\n \"off\", while every other value is considered to be \"on\".\n\u003c/p\u003e",
          "module": "Diagrams.QRCode",
          "name": "pathList",
          "package": "diagrams-qrcode",
          "signature": "[((ix, ix), a)] -\u003e Path R2",
          "source": "src/Diagrams-QRCode.html#pathList",
          "type": "function"
        },
        "index": {
          "description": "Convert QR code represented as list of bounded values into Path minBound values are considered to be off while every other value is considered to be on",
          "hierarchy": "Diagrams QRCode",
          "module": "Diagrams.QRCode",
          "name": "pathList",
          "normalized": "[((a,a),b)]-\u003ePath R",
          "package": "diagrams-qrcode",
          "partial": "List",
          "signature": "[((ix,ix),a)]-\u003ePath R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-qrcode/docs/Diagrams-QRCode.html#v:pathList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003epathList\u003c/a\u003e\u003c/code\u003e, but from a matrix represented as a list\n of lists.\n\u003c/p\u003e",
          "module": "Diagrams.QRCode",
          "name": "pathMatrix",
          "package": "diagrams-qrcode",
          "signature": "[[a]] -\u003e Path R2",
          "source": "src/Diagrams-QRCode.html#pathMatrix",
          "type": "function"
        },
        "index": {
          "description": "Same as pathList but from matrix represented as list of lists",
          "hierarchy": "Diagrams QRCode",
          "module": "Diagrams.QRCode",
          "name": "pathMatrix",
          "normalized": "[[a]]-\u003ePath R",
          "package": "diagrams-qrcode",
          "partial": "Matrix",
          "signature": "[[a]]-\u003ePath R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-qrcode/docs/Diagrams-QRCode.html#v:pathMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStroke using default QR code colors (black on white) and\n with the \"quiet\" region.\n\u003c/p\u003e",
          "module": "Diagrams.QRCode",
          "name": "stroke",
          "package": "diagrams-qrcode",
          "signature": "Path R2 -\u003e Diagram b R2",
          "source": "src/Diagrams-QRCode.html#stroke",
          "type": "function"
        },
        "index": {
          "description": "Stroke using default QR code colors black on white and with the quiet region",
          "hierarchy": "Diagrams QRCode",
          "module": "Diagrams.QRCode",
          "name": "stroke",
          "normalized": "Path R-\u003eDiagram a R",
          "package": "diagrams-qrcode",
          "signature": "Path R-\u003eDiagram b R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-qrcode/docs/Diagrams-QRCode.html#v:stroke"
      }
    }
  ]
]