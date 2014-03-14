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
        "word": "ppm"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExample: \n      main = \n        writeFile \u003ca\u003etest.ppm\u003c/a\u003e $\n          ppm [ [ (255, 0, 0)\n                , (0, 255, 0)\n                , (0, 0, 255)\n                ]\n              , [ (255, 255, 0)\n                , (255, 255, 255)\n                , (0, 0, 0)\n                ]\n              ]\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Image.PPM",
          "name": "PPM",
          "package": "ppm",
          "source": "src/Codec-Image-PPM.html",
          "type": "module"
        },
        "index": {
          "description": "Example main writeFile test.ppm ppm",
          "hierarchy": "Codec Image PPM",
          "module": "Codec.Image.PPM",
          "name": "PPM",
          "package": "ppm",
          "partial": "PPM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ppm/docs/Codec-Image-PPM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Image.PPM",
          "name": "Color",
          "package": "ppm",
          "source": "src/Codec-Image-PPM.html#Color",
          "type": "type"
        },
        "index": {
          "hierarchy": "Codec Image PPM",
          "module": "Codec.Image.PPM",
          "name": "Color",
          "package": "ppm",
          "partial": "Color",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ppm/docs/Codec-Image-PPM.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Image.PPM",
          "name": "ColorArray",
          "package": "ppm",
          "source": "src/Codec-Image-PPM.html#ColorArray",
          "type": "type"
        },
        "index": {
          "hierarchy": "Codec Image PPM",
          "module": "Codec.Image.PPM",
          "name": "ColorArray",
          "package": "ppm",
          "partial": "Color Array",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ppm/docs/Codec-Image-PPM.html#t:ColorArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoutput a human readable ppm string, i.e. in p3 format\n\u003c/p\u003e",
          "module": "Codec.Image.PPM",
          "name": "ppm",
          "package": "ppm",
          "signature": "[ColorArray] -\u003e String",
          "source": "src/Codec-Image-PPM.html#ppm",
          "type": "function"
        },
        "index": {
          "description": "output human readable ppm string i.e in p3 format",
          "hierarchy": "Codec Image PPM",
          "module": "Codec.Image.PPM",
          "name": "ppm",
          "normalized": "[ColorArray]-\u003eString",
          "package": "ppm",
          "signature": "[ColorArray]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ppm/docs/Codec-Image-PPM.html#v:ppm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoutput a compact ppm string, i.e. in p6 format\n\u003c/p\u003e",
          "module": "Codec.Image.PPM",
          "name": "ppm_p6",
          "package": "ppm",
          "signature": "[ColorArray] -\u003e String",
          "source": "src/Codec-Image-PPM.html#ppm_p6",
          "type": "function"
        },
        "index": {
          "description": "output compact ppm string i.e in p6 format",
          "hierarchy": "Codec Image PPM",
          "module": "Codec.Image.PPM",
          "name": "ppm_p6",
          "normalized": "[ColorArray]-\u003eString",
          "package": "ppm",
          "signature": "[ColorArray]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ppm/docs/Codec-Image-PPM.html#v:ppm_p6"
      }
    }
  ]
]