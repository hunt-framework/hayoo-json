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
        "word": "prizm"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Color.CIE.LAB",
          "name": "LAB",
          "package": "prizm",
          "source": "src/Data-Prizm-Color-CIE-LAB.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Prizm Color CIE LAB",
          "module": "Data.Prizm.Color.CIE.LAB",
          "name": "LAB",
          "package": "prizm",
          "partial": "LAB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE-LAB.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efromHex\u003c/code\u003e convenience function for converting to LAB from HEX.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color.CIE.LAB",
          "name": "fromHex",
          "package": "prizm",
          "signature": "Hex -\u003e CIELAB Double",
          "source": "src/Data-Prizm-Color-CIE-LAB.html#fromHex",
          "type": "function"
        },
        "index": {
          "description": "fromHex convenience function for converting to LAB from HEX",
          "hierarchy": "Data Prizm Color CIE LAB",
          "module": "Data.Prizm.Color.CIE.LAB",
          "name": "fromHex",
          "normalized": "Hex-\u003eCIELAB Double",
          "package": "prizm",
          "partial": "Hex",
          "signature": "Hex-\u003eCIELAB Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE-LAB.html#v:fromHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efromLCH\u003c/code\u003e convert a LCH color to the LAB representation.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color.CIE.LAB",
          "name": "fromLCH",
          "package": "prizm",
          "signature": "CIELCH Double -\u003e CIELAB Double",
          "source": "src/Data-Prizm-Color-CIE-LAB.html#fromLCH",
          "type": "function"
        },
        "index": {
          "description": "fromLCH convert LCH color to the LAB representation",
          "hierarchy": "Data Prizm Color CIE LAB",
          "module": "Data.Prizm.Color.CIE.LAB",
          "name": "fromLCH",
          "normalized": "CIELCH Double-\u003eCIELAB Double",
          "package": "prizm",
          "partial": "LCH",
          "signature": "CIELCH Double-\u003eCIELAB Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE-LAB.html#v:fromLCH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efromRGB\u003c/code\u003e convenience function for converting to LAB from RGB.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color.CIE.LAB",
          "name": "fromRGB",
          "package": "prizm",
          "signature": "RGB Integer -\u003e CIELAB Double",
          "source": "src/Data-Prizm-Color-CIE-LAB.html#fromRGB",
          "type": "function"
        },
        "index": {
          "description": "fromRGB convenience function for converting to LAB from RGB",
          "hierarchy": "Data Prizm Color CIE LAB",
          "module": "Data.Prizm.Color.CIE.LAB",
          "name": "fromRGB",
          "normalized": "RGB Integer-\u003eCIELAB Double",
          "package": "prizm",
          "partial": "RGB",
          "signature": "RGB Integer-\u003eCIELAB Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE-LAB.html#v:fromRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efromXYZ\u003c/code\u003e convert an XYZ color straight to LAB.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color.CIE.LAB",
          "name": "fromXYZ",
          "package": "prizm",
          "signature": "CIEXYZ Double -\u003e CIELAB Double",
          "source": "src/Data-Prizm-Color-CIE-LAB.html#fromXYZ",
          "type": "function"
        },
        "index": {
          "description": "fromXYZ convert an XYZ color straight to LAB",
          "hierarchy": "Data Prizm Color CIE LAB",
          "module": "Data.Prizm.Color.CIE.LAB",
          "name": "fromXYZ",
          "normalized": "CIEXYZ Double-\u003eCIELAB Double",
          "package": "prizm",
          "partial": "XYZ",
          "signature": "CIEXYZ Double-\u003eCIELAB Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE-LAB.html#v:fromXYZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etoHex\u003c/code\u003e convenience function for converting straight to HEX.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color.CIE.LAB",
          "name": "toHex",
          "package": "prizm",
          "signature": "CIELAB Double -\u003e Hex",
          "source": "src/Data-Prizm-Color-CIE-LAB.html#toHex",
          "type": "function"
        },
        "index": {
          "description": "toHex convenience function for converting straight to HEX",
          "hierarchy": "Data Prizm Color CIE LAB",
          "module": "Data.Prizm.Color.CIE.LAB",
          "name": "toHex",
          "normalized": "CIELAB Double-\u003eHex",
          "package": "prizm",
          "partial": "Hex",
          "signature": "CIELAB Double-\u003eHex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE-LAB.html#v:toHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etoLCH\u003c/code\u003e convert a LAB color to the LCH representation.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color.CIE.LAB",
          "name": "toLCH",
          "package": "prizm",
          "signature": "CIELAB Double -\u003e CIELCH Double",
          "source": "src/Data-Prizm-Color-CIE-LAB.html#toLCH",
          "type": "function"
        },
        "index": {
          "description": "toLCH convert LAB color to the LCH representation",
          "hierarchy": "Data Prizm Color CIE LAB",
          "module": "Data.Prizm.Color.CIE.LAB",
          "name": "toLCH",
          "normalized": "CIELAB Double-\u003eCIELCH Double",
          "package": "prizm",
          "partial": "LCH",
          "signature": "CIELAB Double-\u003eCIELCH Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE-LAB.html#v:toLCH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etoRGB\u003c/code\u003e convenience function for converting straight to RGB.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color.CIE.LAB",
          "name": "toRGB",
          "package": "prizm",
          "signature": "CIELAB Double -\u003e RGB Integer",
          "source": "src/Data-Prizm-Color-CIE-LAB.html#toRGB",
          "type": "function"
        },
        "index": {
          "description": "toRGB convenience function for converting straight to RGB",
          "hierarchy": "Data Prizm Color CIE LAB",
          "module": "Data.Prizm.Color.CIE.LAB",
          "name": "toRGB",
          "normalized": "CIELAB Double-\u003eRGB Integer",
          "package": "prizm",
          "partial": "RGB",
          "signature": "CIELAB Double-\u003eRGB Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE-LAB.html#v:toRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etoXYZ\u003c/code\u003e convert a LAB color to the XYZ representation.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color.CIE.LAB",
          "name": "toXYZ",
          "package": "prizm",
          "signature": "CIELAB Double -\u003e CIEXYZ Double",
          "source": "src/Data-Prizm-Color-CIE-LAB.html#toXYZ",
          "type": "function"
        },
        "index": {
          "description": "toXYZ convert LAB color to the XYZ representation",
          "hierarchy": "Data Prizm Color CIE LAB",
          "module": "Data.Prizm.Color.CIE.LAB",
          "name": "toXYZ",
          "normalized": "CIELAB Double-\u003eCIEXYZ Double",
          "package": "prizm",
          "partial": "XYZ",
          "signature": "CIELAB Double-\u003eCIEXYZ Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE-LAB.html#v:toXYZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Color.CIE.LCH",
          "name": "LCH",
          "package": "prizm",
          "source": "src/Data-Prizm-Color-CIE-LCH.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Prizm Color CIE LCH",
          "module": "Data.Prizm.Color.CIE.LCH",
          "name": "LCH",
          "package": "prizm",
          "partial": "LCH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE-LCH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Color.CIE.LCH",
          "name": "fromHex",
          "package": "prizm",
          "signature": "Hex -\u003e CIELCH Double",
          "source": "src/Data-Prizm-Color-CIE-LCH.html#fromHex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prizm Color CIE LCH",
          "module": "Data.Prizm.Color.CIE.LCH",
          "name": "fromHex",
          "normalized": "Hex-\u003eCIELCH Double",
          "package": "prizm",
          "partial": "Hex",
          "signature": "Hex-\u003eCIELCH Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE-LCH.html#v:fromHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efromLAB\u003c/code\u003e convenience function for converting from LAB to LCH.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color.CIE.LCH",
          "name": "fromLAB",
          "package": "prizm",
          "signature": "CIELAB Double -\u003e CIELCH Double",
          "source": "src/Data-Prizm-Color-CIE-LCH.html#fromLAB",
          "type": "function"
        },
        "index": {
          "description": "fromLAB convenience function for converting from LAB to LCH",
          "hierarchy": "Data Prizm Color CIE LCH",
          "module": "Data.Prizm.Color.CIE.LCH",
          "name": "fromLAB",
          "normalized": "CIELAB Double-\u003eCIELCH Double",
          "package": "prizm",
          "partial": "LAB",
          "signature": "CIELAB Double-\u003eCIELCH Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE-LCH.html#v:fromLAB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efromRGB\u003c/code\u003e convert from RGB to LCH.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color.CIE.LCH",
          "name": "fromRGB",
          "package": "prizm",
          "signature": "RGB Integer -\u003e CIELCH Double",
          "source": "src/Data-Prizm-Color-CIE-LCH.html#fromRGB",
          "type": "function"
        },
        "index": {
          "description": "fromRGB convert from RGB to LCH",
          "hierarchy": "Data Prizm Color CIE LCH",
          "module": "Data.Prizm.Color.CIE.LCH",
          "name": "fromRGB",
          "normalized": "RGB Integer-\u003eCIELCH Double",
          "package": "prizm",
          "partial": "RGB",
          "signature": "RGB Integer-\u003eCIELCH Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE-LCH.html#v:fromRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efromXYZ\u003c/code\u003e convert from XYZ to LCH.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color.CIE.LCH",
          "name": "fromXYZ",
          "package": "prizm",
          "signature": "CIEXYZ Double -\u003e CIELCH Double",
          "source": "src/Data-Prizm-Color-CIE-LCH.html#fromXYZ",
          "type": "function"
        },
        "index": {
          "description": "fromXYZ convert from XYZ to LCH",
          "hierarchy": "Data Prizm Color CIE LCH",
          "module": "Data.Prizm.Color.CIE.LCH",
          "name": "fromXYZ",
          "normalized": "CIEXYZ Double-\u003eCIELCH Double",
          "package": "prizm",
          "partial": "XYZ",
          "signature": "CIEXYZ Double-\u003eCIELCH Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE-LCH.html#v:fromXYZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Color.CIE.LCH",
          "name": "toHex",
          "package": "prizm",
          "signature": "CIELCH Double -\u003e Hex",
          "source": "src/Data-Prizm-Color-CIE-LCH.html#toHex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prizm Color CIE LCH",
          "module": "Data.Prizm.Color.CIE.LCH",
          "name": "toHex",
          "normalized": "CIELCH Double-\u003eHex",
          "package": "prizm",
          "partial": "Hex",
          "signature": "CIELCH Double-\u003eHex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE-LCH.html#v:toHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etoLAB\u003c/code\u003e convert an LCH color to a LAB representation.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color.CIE.LCH",
          "name": "toLAB",
          "package": "prizm",
          "signature": "CIELCH Double -\u003e CIELAB Double",
          "source": "src/Data-Prizm-Color-CIE-LCH.html#toLAB",
          "type": "function"
        },
        "index": {
          "description": "toLAB convert an LCH color to LAB representation",
          "hierarchy": "Data Prizm Color CIE LCH",
          "module": "Data.Prizm.Color.CIE.LCH",
          "name": "toLAB",
          "normalized": "CIELCH Double-\u003eCIELAB Double",
          "package": "prizm",
          "partial": "LAB",
          "signature": "CIELCH Double-\u003eCIELAB Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE-LCH.html#v:toLAB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etoRGB\u003c/code\u003e convert from LCH to RGB.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color.CIE.LCH",
          "name": "toRGB",
          "package": "prizm",
          "signature": "CIELCH Double -\u003e RGB Integer",
          "source": "src/Data-Prizm-Color-CIE-LCH.html#toRGB",
          "type": "function"
        },
        "index": {
          "description": "toRGB convert from LCH to RGB",
          "hierarchy": "Data Prizm Color CIE LCH",
          "module": "Data.Prizm.Color.CIE.LCH",
          "name": "toRGB",
          "normalized": "CIELCH Double-\u003eRGB Integer",
          "package": "prizm",
          "partial": "RGB",
          "signature": "CIELCH Double-\u003eRGB Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE-LCH.html#v:toRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etoXYZ\u003c/code\u003e convert from LCH to XYZ.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color.CIE.LCH",
          "name": "toXYZ",
          "package": "prizm",
          "signature": "CIELCH Double -\u003e CIEXYZ Double",
          "source": "src/Data-Prizm-Color-CIE-LCH.html#toXYZ",
          "type": "function"
        },
        "index": {
          "description": "toXYZ convert from LCH to XYZ",
          "hierarchy": "Data Prizm Color CIE LCH",
          "module": "Data.Prizm.Color.CIE.LCH",
          "name": "toXYZ",
          "normalized": "CIELCH Double-\u003eCIEXYZ Double",
          "package": "prizm",
          "partial": "XYZ",
          "signature": "CIELCH Double-\u003eCIEXYZ Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE-LCH.html#v:toXYZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Color.CIE.XYZ",
          "name": "XYZ",
          "package": "prizm",
          "source": "src/Data-Prizm-Color-CIE-XYZ.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Prizm Color CIE XYZ",
          "module": "Data.Prizm.Color.CIE.XYZ",
          "name": "XYZ",
          "package": "prizm",
          "partial": "XYZ",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE-XYZ.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efromHex\u003c/code\u003e convenience function for converting to XYZ from HEX.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color.CIE.XYZ",
          "name": "fromHex",
          "package": "prizm",
          "signature": "Hex -\u003e CIEXYZ Double",
          "source": "src/Data-Prizm-Color-CIE-XYZ.html#fromHex",
          "type": "function"
        },
        "index": {
          "description": "fromHex convenience function for converting to XYZ from HEX",
          "hierarchy": "Data Prizm Color CIE XYZ",
          "module": "Data.Prizm.Color.CIE.XYZ",
          "name": "fromHex",
          "normalized": "Hex-\u003eCIEXYZ Double",
          "package": "prizm",
          "partial": "Hex",
          "signature": "Hex-\u003eCIEXYZ Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE-XYZ.html#v:fromHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efromLAB\u003c/code\u003e convenience function for converting to XYZ from LAB.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color.CIE.XYZ",
          "name": "fromLAB",
          "package": "prizm",
          "signature": "CIELAB Double -\u003e CIEXYZ Double",
          "source": "src/Data-Prizm-Color-CIE-XYZ.html#fromLAB",
          "type": "function"
        },
        "index": {
          "description": "fromLAB convenience function for converting to XYZ from LAB",
          "hierarchy": "Data Prizm Color CIE XYZ",
          "module": "Data.Prizm.Color.CIE.XYZ",
          "name": "fromLAB",
          "normalized": "CIELAB Double-\u003eCIEXYZ Double",
          "package": "prizm",
          "partial": "LAB",
          "signature": "CIELAB Double-\u003eCIEXYZ Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE-XYZ.html#v:fromLAB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Color.CIE.XYZ",
          "name": "fromLCH",
          "package": "prizm",
          "signature": "CIELCH Double -\u003e CIEXYZ Double",
          "source": "src/Data-Prizm-Color-CIE-XYZ.html#fromLCH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prizm Color CIE XYZ",
          "module": "Data.Prizm.Color.CIE.XYZ",
          "name": "fromLCH",
          "normalized": "CIELCH Double-\u003eCIEXYZ Double",
          "package": "prizm",
          "partial": "LCH",
          "signature": "CIELCH Double-\u003eCIEXYZ Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE-XYZ.html#v:fromLCH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efromRGB\u003c/code\u003e convenience function for converting to XYZ from RGB.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color.CIE.XYZ",
          "name": "fromRGB",
          "package": "prizm",
          "signature": "RGB Integer -\u003e CIEXYZ Double",
          "source": "src/Data-Prizm-Color-CIE-XYZ.html#fromRGB",
          "type": "function"
        },
        "index": {
          "description": "fromRGB convenience function for converting to XYZ from RGB",
          "hierarchy": "Data Prizm Color CIE XYZ",
          "module": "Data.Prizm.Color.CIE.XYZ",
          "name": "fromRGB",
          "normalized": "RGB Integer-\u003eCIEXYZ Double",
          "package": "prizm",
          "partial": "RGB",
          "signature": "RGB Integer-\u003eCIEXYZ Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE-XYZ.html#v:fromRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etoHex\u003c/code\u003e convenience function for converting XYZ straight to HEX.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color.CIE.XYZ",
          "name": "toHex",
          "package": "prizm",
          "signature": "CIEXYZ Double -\u003e Hex",
          "source": "src/Data-Prizm-Color-CIE-XYZ.html#toHex",
          "type": "function"
        },
        "index": {
          "description": "toHex convenience function for converting XYZ straight to HEX",
          "hierarchy": "Data Prizm Color CIE XYZ",
          "module": "Data.Prizm.Color.CIE.XYZ",
          "name": "toHex",
          "normalized": "CIEXYZ Double-\u003eHex",
          "package": "prizm",
          "partial": "Hex",
          "signature": "CIEXYZ Double-\u003eHex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE-XYZ.html#v:toHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etoLAB\u003c/code\u003e convert an XYZ color to a LAB color.\n\u003c/p\u003e\u003cp\u003eThis function uses the default reference white (2deg observer, d65\n illuminant).\n\u003c/p\u003e",
          "module": "Data.Prizm.Color.CIE.XYZ",
          "name": "toLAB",
          "package": "prizm",
          "signature": "CIEXYZ Double -\u003e CIELAB Double",
          "source": "src/Data-Prizm-Color-CIE-XYZ.html#toLAB",
          "type": "function"
        },
        "index": {
          "description": "toLAB convert an XYZ color to LAB color This function uses the default reference white deg observer d65 illuminant",
          "hierarchy": "Data Prizm Color CIE XYZ",
          "module": "Data.Prizm.Color.CIE.XYZ",
          "name": "toLAB",
          "normalized": "CIEXYZ Double-\u003eCIELAB Double",
          "package": "prizm",
          "partial": "LAB",
          "signature": "CIEXYZ Double-\u003eCIELAB Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE-XYZ.html#v:toLAB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etoLCH\u003c/code\u003e convenience function for converting XYZ straight to LAB.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color.CIE.XYZ",
          "name": "toLCH",
          "package": "prizm",
          "signature": "CIEXYZ Double -\u003e CIELCH Double",
          "source": "src/Data-Prizm-Color-CIE-XYZ.html#toLCH",
          "type": "function"
        },
        "index": {
          "description": "toLCH convenience function for converting XYZ straight to LAB",
          "hierarchy": "Data Prizm Color CIE XYZ",
          "module": "Data.Prizm.Color.CIE.XYZ",
          "name": "toLCH",
          "normalized": "CIEXYZ Double-\u003eCIELCH Double",
          "package": "prizm",
          "partial": "LCH",
          "signature": "CIEXYZ Double-\u003eCIELCH Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE-XYZ.html#v:toLCH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etoRGB\u003c/code\u003e convert a CIE color to an SRGB color.\n\u003c/p\u003e\u003cp\u003eThis function uses the default d65 illuminant matrix.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color.CIE.XYZ",
          "name": "toRGB",
          "package": "prizm",
          "signature": "CIEXYZ Double -\u003e RGB Integer",
          "source": "src/Data-Prizm-Color-CIE-XYZ.html#toRGB",
          "type": "function"
        },
        "index": {
          "description": "toRGB convert CIE color to an SRGB color This function uses the default d65 illuminant matrix",
          "hierarchy": "Data Prizm Color CIE XYZ",
          "module": "Data.Prizm.Color.CIE.XYZ",
          "name": "toRGB",
          "normalized": "CIEXYZ Double-\u003eRGB Integer",
          "package": "prizm",
          "partial": "RGB",
          "signature": "CIEXYZ Double-\u003eRGB Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE-XYZ.html#v:toRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etoRGBMatrix\u003c/code\u003e convert an XYZ color to an SRGB color using a\n provided matrix.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color.CIE.XYZ",
          "name": "toRGBMatrix",
          "package": "prizm",
          "signature": "XYZtoRGB -\u003e CIEXYZ Double -\u003e RGB Integer",
          "source": "src/Data-Prizm-Color-CIE-XYZ.html#toRGBMatrix",
          "type": "function"
        },
        "index": {
          "description": "toRGBMatrix convert an XYZ color to an SRGB color using provided matrix",
          "hierarchy": "Data Prizm Color CIE XYZ",
          "module": "Data.Prizm.Color.CIE.XYZ",
          "name": "toRGBMatrix",
          "normalized": "XYZtoRGB-\u003eCIEXYZ Double-\u003eRGB Integer",
          "package": "prizm",
          "partial": "RGBMatrix",
          "signature": "XYZtoRGB-\u003eCIEXYZ Double-\u003eRGB Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE-XYZ.html#v:toRGBMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Color.CIE",
          "name": "CIE",
          "package": "prizm",
          "source": "src/Data-Prizm-Color-CIE.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Prizm Color CIE",
          "module": "Data.Prizm.Color.CIE",
          "name": "CIE",
          "package": "prizm",
          "partial": "CIE",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Color.CIE",
          "name": "refWhite",
          "package": "prizm",
          "signature": "[Double]",
          "source": "src/Data-Prizm-Color-CIE.html#refWhite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prizm Color CIE",
          "module": "Data.Prizm.Color.CIE",
          "name": "refWhite",
          "normalized": "[Double]",
          "package": "prizm",
          "partial": "White",
          "signature": "[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE.html#v:refWhite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Color.CIE",
          "name": "transformXYZ",
          "package": "prizm",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Prizm-Color-CIE.html#transformXYZ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prizm Color CIE",
          "module": "Data.Prizm.Color.CIE",
          "name": "transformXYZ",
          "normalized": "Double-\u003eDouble",
          "package": "prizm",
          "partial": "XYZ",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE.html#v:transformXYZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexact rational of the \u003ca\u003e0.008856\u003c/a\u003e value.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color.CIE",
          "name": "v1",
          "package": "prizm",
          "signature": "Double",
          "source": "src/Data-Prizm-Color-CIE.html#v1",
          "type": "function"
        },
        "index": {
          "description": "exact rational of the value",
          "hierarchy": "Data Prizm Color CIE",
          "module": "Data.Prizm.Color.CIE",
          "name": "v1",
          "package": "prizm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE.html#v:v1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexact rational of the \u003ca\u003e7.787\u003c/a\u003e value.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color.CIE",
          "name": "v2",
          "package": "prizm",
          "signature": "Double",
          "source": "src/Data-Prizm-Color-CIE.html#v2",
          "type": "function"
        },
        "index": {
          "description": "exact rational of the value",
          "hierarchy": "Data Prizm Color CIE",
          "module": "Data.Prizm.Color.CIE",
          "name": "v2",
          "package": "prizm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-CIE.html#v:v2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Color.Matrices.RGB",
          "name": "RGB",
          "package": "prizm",
          "source": "src/Data-Prizm-Color-Matrices-RGB.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Prizm Color Matrices RGB",
          "module": "Data.Prizm.Color.Matrices.RGB",
          "name": "RGB",
          "package": "prizm",
          "partial": "RGB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-Matrices-RGB.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Color.Matrices.RGB",
          "name": "d65Adobe",
          "package": "prizm",
          "signature": "RGBtoXYZ",
          "source": "src/Data-Prizm-Color-Matrices-RGB.html#d65Adobe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prizm Color Matrices RGB",
          "module": "Data.Prizm.Color.Matrices.RGB",
          "name": "d65Adobe",
          "package": "prizm",
          "partial": "Adobe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-Matrices-RGB.html#v:d65Adobe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Color.Matrices.RGB",
          "name": "d65SRGB",
          "package": "prizm",
          "signature": "RGBtoXYZ",
          "source": "src/Data-Prizm-Color-Matrices-RGB.html#d65SRGB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prizm Color Matrices RGB",
          "module": "Data.Prizm.Color.Matrices.RGB",
          "name": "d65SRGB",
          "package": "prizm",
          "partial": "SRGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-Matrices-RGB.html#v:d65SRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Color.Matrices.XYZ",
          "name": "XYZ",
          "package": "prizm",
          "source": "src/Data-Prizm-Color-Matrices-XYZ.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Prizm Color Matrices XYZ",
          "module": "Data.Prizm.Color.Matrices.XYZ",
          "name": "XYZ",
          "package": "prizm",
          "partial": "XYZ",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-Matrices-XYZ.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Color.Matrices.XYZ",
          "name": "d65Adobe",
          "package": "prizm",
          "signature": "XYZtoRGB",
          "source": "src/Data-Prizm-Color-Matrices-XYZ.html#d65Adobe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prizm Color Matrices XYZ",
          "module": "Data.Prizm.Color.Matrices.XYZ",
          "name": "d65Adobe",
          "package": "prizm",
          "partial": "Adobe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-Matrices-XYZ.html#v:d65Adobe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Color.Matrices.XYZ",
          "name": "d65SRGB",
          "package": "prizm",
          "signature": "XYZtoRGB",
          "source": "src/Data-Prizm-Color-Matrices-XYZ.html#d65SRGB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prizm Color Matrices XYZ",
          "module": "Data.Prizm.Color.Matrices.XYZ",
          "name": "d65SRGB",
          "package": "prizm",
          "partial": "SRGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-Matrices-XYZ.html#v:d65SRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Color.SRGB",
          "name": "SRGB",
          "package": "prizm",
          "source": "src/Data-Prizm-Color-SRGB.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Prizm Color SRGB",
          "module": "Data.Prizm.Color.SRGB",
          "name": "SRGB",
          "package": "prizm",
          "partial": "SRGB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-SRGB.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Color.SRGB",
          "name": "clamp",
          "package": "prizm",
          "signature": "Integer -\u003e Integer",
          "source": "src/Data-Prizm-Color-SRGB.html#clamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prizm Color SRGB",
          "module": "Data.Prizm.Color.SRGB",
          "name": "clamp",
          "normalized": "Integer-\u003eInteger",
          "package": "prizm",
          "signature": "Integer-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-SRGB.html#v:clamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Color.SRGB",
          "name": "fromHex",
          "package": "prizm",
          "signature": "Hex -\u003e RGB Integer",
          "source": "src/Data-Prizm-Color-SRGB.html#fromHex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prizm Color SRGB",
          "module": "Data.Prizm.Color.SRGB",
          "name": "fromHex",
          "normalized": "Hex-\u003eRGB Integer",
          "package": "prizm",
          "partial": "Hex",
          "signature": "Hex-\u003eRGB Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-SRGB.html#v:fromHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etoHex\u003c/code\u003e convert an sRGB value to hexadecimal.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color.SRGB",
          "name": "toHex",
          "package": "prizm",
          "signature": "RGB Integer -\u003e Hex",
          "source": "src/Data-Prizm-Color-SRGB.html#toHex",
          "type": "function"
        },
        "index": {
          "description": "toHex convert an sRGB value to hexadecimal",
          "hierarchy": "Data Prizm Color SRGB",
          "module": "Data.Prizm.Color.SRGB",
          "name": "toHex",
          "normalized": "RGB Integer-\u003eHex",
          "package": "prizm",
          "partial": "Hex",
          "signature": "RGB Integer-\u003eHex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-SRGB.html#v:toHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etoXYZ\u003c/code\u003e convert an sRGB value to a CIE XYZ value.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color.SRGB",
          "name": "toXYZ",
          "package": "prizm",
          "signature": "RGB Integer -\u003e CIEXYZ Double",
          "source": "src/Data-Prizm-Color-SRGB.html#toXYZ",
          "type": "function"
        },
        "index": {
          "description": "toXYZ convert an sRGB value to CIE XYZ value",
          "hierarchy": "Data Prizm Color SRGB",
          "module": "Data.Prizm.Color.SRGB",
          "name": "toXYZ",
          "normalized": "RGB Integer-\u003eCIEXYZ Double",
          "package": "prizm",
          "partial": "XYZ",
          "signature": "RGB Integer-\u003eCIEXYZ Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-SRGB.html#v:toXYZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Color.SRGB",
          "name": "toXYZMatrix",
          "package": "prizm",
          "signature": "RGBtoXYZ -\u003e RGB Integer -\u003e CIEXYZ Double",
          "source": "src/Data-Prizm-Color-SRGB.html#toXYZMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prizm Color SRGB",
          "module": "Data.Prizm.Color.SRGB",
          "name": "toXYZMatrix",
          "normalized": "RGBtoXYZ-\u003eRGB Integer-\u003eCIEXYZ Double",
          "package": "prizm",
          "partial": "XYZMatrix",
          "signature": "RGBtoXYZ-\u003eRGB Integer-\u003eCIEXYZ Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-SRGB.html#v:toXYZMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Color.Transform",
          "name": "Transform",
          "package": "prizm",
          "source": "src/Data-Prizm-Color-Transform.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Prizm Color Transform",
          "module": "Data.Prizm.Color.Transform",
          "name": "Transform",
          "package": "prizm",
          "partial": "Transform",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-Transform.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Color.Transform",
          "name": "roundN",
          "package": "prizm",
          "signature": "Integer -\u003e Double -\u003e Double",
          "source": "src/Data-Prizm-Color-Transform.html#roundN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prizm Color Transform",
          "module": "Data.Prizm.Color.Transform",
          "name": "roundN",
          "normalized": "Integer-\u003eDouble-\u003eDouble",
          "package": "prizm",
          "signature": "Integer-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-Transform.html#v:roundN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Color.Transform",
          "name": "truncateN",
          "package": "prizm",
          "signature": "Integer -\u003e Double -\u003e Double",
          "source": "src/Data-Prizm-Color-Transform.html#truncateN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prizm Color Transform",
          "module": "Data.Prizm.Color.Transform",
          "name": "truncateN",
          "normalized": "Integer-\u003eDouble-\u003eDouble",
          "package": "prizm",
          "signature": "Integer-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-Transform.html#v:truncateN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Color.Transform",
          "name": "zipTransform",
          "package": "prizm",
          "signature": "ZipList Double -\u003e [Double] -\u003e Double",
          "source": "src/Data-Prizm-Color-Transform.html#zipTransform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prizm Color Transform",
          "module": "Data.Prizm.Color.Transform",
          "name": "zipTransform",
          "normalized": "ZipList Double-\u003e[Double]-\u003eDouble",
          "package": "prizm",
          "partial": "Transform",
          "signature": "ZipList Double-\u003e[Double]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color-Transform.html#v:zipTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Color",
          "name": "Color",
          "package": "prizm",
          "source": "src/Data-Prizm-Color.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Prizm Color",
          "module": "Data.Prizm.Color",
          "name": "Color",
          "package": "prizm",
          "partial": "Color",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlend two colors using an interpolation value of 50%.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color",
          "name": "(\u003c|\u003e)",
          "package": "prizm",
          "signature": "CIELCH Double -\u003e CIELCH Double -\u003e CIELCH Double",
          "source": "src/Data-Prizm-Color.html#%3C%7C%3E",
          "type": "function"
        },
        "index": {
          "description": "Blend two colors using an interpolation value of",
          "hierarchy": "Data Prizm Color",
          "module": "Data.Prizm.Color",
          "name": "(\u003c|\u003e) \u003c|\u003e",
          "normalized": "CIELCH Double-\u003eCIELCH Double-\u003eCIELCH Double",
          "package": "prizm",
          "signature": "CIELCH Double-\u003eCIELCH Double-\u003eCIELCH Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color.html#v:-60--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the saturation/chroma of a color. A maximum chroma value\n of 120 is assumed here, anything more is generally considered out\n of gamut.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color",
          "name": "chroma",
          "package": "prizm",
          "signature": "CIELCH Double -\u003e Percent -\u003e CIELCH Double",
          "source": "src/Data-Prizm-Color.html#chroma",
          "type": "function"
        },
        "index": {
          "description": "Change the saturation chroma of color maximum chroma value of is assumed here anything more is generally considered out of gamut",
          "hierarchy": "Data Prizm Color",
          "module": "Data.Prizm.Color",
          "name": "chroma",
          "normalized": "CIELCH Double-\u003ePercent-\u003eCIELCH Double",
          "package": "prizm",
          "signature": "CIELCH Double-\u003ePercent-\u003eCIELCH Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color.html#v:chroma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the hue of a color.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color",
          "name": "hue",
          "package": "prizm",
          "signature": "CIELCH Double -\u003e Percent -\u003e CIELCH Double",
          "source": "src/Data-Prizm-Color.html#hue",
          "type": "function"
        },
        "index": {
          "description": "Change the hue of color",
          "hierarchy": "Data Prizm Color",
          "module": "Data.Prizm.Color",
          "name": "hue",
          "normalized": "CIELCH Double-\u003ePercent-\u003eCIELCH Double",
          "package": "prizm",
          "signature": "CIELCH Double-\u003ePercent-\u003eCIELCH Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color.html#v:hue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterpolate two colors\n\u003c/p\u003e\u003cp\u003eWeight is applied left to right, so if a weight of 25% is supplied,\n then the color on the left will be multiplied by 25% and the second\n color will be multiplied by 75%.\n\u003c/p\u003e\u003cp\u003eCIE L*Ch is used because the interpolation between the colors is\n more accurate than L*ab, XYZ, and sRGB color spaces.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color",
          "name": "interpolate",
          "package": "prizm",
          "signature": "Percent -\u003e (CIELCH Double, CIELCH Double) -\u003e CIELCH Double",
          "source": "src/Data-Prizm-Color.html#interpolate",
          "type": "function"
        },
        "index": {
          "description": "Interpolate two colors Weight is applied left to right so if weight of is supplied then the color on the left will be multiplied by and the second color will be multiplied by CIE Ch is used because the interpolation between the colors is more accurate than ab XYZ and sRGB color spaces",
          "hierarchy": "Data Prizm Color",
          "module": "Data.Prizm.Color",
          "name": "interpolate",
          "normalized": "Percent-\u003e(CIELCH Double,CIELCH Double)-\u003eCIELCH Double",
          "package": "prizm",
          "signature": "Percent-\u003e(CIELCH Double,CIELCH Double)-\u003eCIELCH Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color.html#v:interpolate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDarken a color.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color",
          "name": "lightness",
          "package": "prizm",
          "signature": "CIELCH Double -\u003e Percent -\u003e CIELCH Double",
          "source": "src/Data-Prizm-Color.html#lightness",
          "type": "function"
        },
        "index": {
          "description": "Darken color",
          "hierarchy": "Data Prizm Color",
          "module": "Data.Prizm.Color",
          "name": "lightness",
          "normalized": "CIELCH Double-\u003ePercent-\u003eCIELCH Double",
          "package": "prizm",
          "signature": "CIELCH Double-\u003ePercent-\u003eCIELCH Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color.html#v:lightness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShade a color by blending it using a weight and the color black.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color",
          "name": "shade",
          "package": "prizm",
          "signature": "CIELCH Double -\u003e Percent -\u003e CIELCH Double",
          "source": "src/Data-Prizm-Color.html#shade",
          "type": "function"
        },
        "index": {
          "description": "Shade color by blending it using weight and the color black",
          "hierarchy": "Data Prizm Color",
          "module": "Data.Prizm.Color",
          "name": "shade",
          "normalized": "CIELCH Double-\u003ePercent-\u003eCIELCH Double",
          "package": "prizm",
          "signature": "CIELCH Double-\u003ePercent-\u003eCIELCH Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color.html#v:shade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTint a color by blending it using a weight and the color white.\n\u003c/p\u003e",
          "module": "Data.Prizm.Color",
          "name": "tint",
          "package": "prizm",
          "signature": "CIELCH Double -\u003e Percent -\u003e CIELCH Double",
          "source": "src/Data-Prizm-Color.html#tint",
          "type": "function"
        },
        "index": {
          "description": "Tint color by blending it using weight and the color white",
          "hierarchy": "Data Prizm Color",
          "module": "Data.Prizm.Color",
          "name": "tint",
          "normalized": "CIELCH Double-\u003ePercent-\u003eCIELCH Double",
          "package": "prizm",
          "signature": "CIELCH Double-\u003ePercent-\u003eCIELCH Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Color.html#v:tint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Types",
          "name": "Types",
          "package": "prizm",
          "source": "src/Data-Prizm-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Prizm Types",
          "module": "Data.Prizm.Types",
          "name": "Types",
          "package": "prizm",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Types",
          "name": "CIELAB",
          "package": "prizm",
          "source": "src/Data-Prizm-Types.html#CIELAB",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Prizm Types",
          "module": "Data.Prizm.Types",
          "name": "CIELAB",
          "package": "prizm",
          "partial": "CIELAB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Types.html#t:CIELAB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Types",
          "name": "CIELCH",
          "package": "prizm",
          "source": "src/Data-Prizm-Types.html#CIELCH",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Prizm Types",
          "module": "Data.Prizm.Types",
          "name": "CIELCH",
          "package": "prizm",
          "partial": "CIELCH",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Types.html#t:CIELCH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Types",
          "name": "CIEXYZ",
          "package": "prizm",
          "source": "src/Data-Prizm-Types.html#CIEXYZ",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Prizm Types",
          "module": "Data.Prizm.Types",
          "name": "CIEXYZ",
          "package": "prizm",
          "partial": "CIEXYZ",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Types.html#t:CIEXYZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Types",
          "name": "Hex",
          "package": "prizm",
          "source": "src/Data-Prizm-Types.html#Hex",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Prizm Types",
          "module": "Data.Prizm.Types",
          "name": "Hex",
          "package": "prizm",
          "partial": "Hex",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Types.html#t:Hex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Types",
          "name": "Percent",
          "package": "prizm",
          "source": "src/Data-Prizm-Types.html#Percent",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Prizm Types",
          "module": "Data.Prizm.Types",
          "name": "Percent",
          "package": "prizm",
          "partial": "Percent",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Types.html#t:Percent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Types",
          "name": "RGB",
          "package": "prizm",
          "source": "src/Data-Prizm-Types.html#RGB",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Prizm Types",
          "module": "Data.Prizm.Types",
          "name": "RGB",
          "package": "prizm",
          "partial": "RGB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Types.html#t:RGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Types",
          "name": "RGBtoXYZ",
          "package": "prizm",
          "source": "src/Data-Prizm-Types.html#RGBtoXYZ",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Prizm Types",
          "module": "Data.Prizm.Types",
          "name": "RGBtoXYZ",
          "package": "prizm",
          "partial": "RGBto XYZ",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Types.html#t:RGBtoXYZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Types",
          "name": "XYZtoRGB",
          "package": "prizm",
          "source": "src/Data-Prizm-Types.html#XYZtoRGB",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Prizm Types",
          "module": "Data.Prizm.Types",
          "name": "XYZtoRGB",
          "package": "prizm",
          "partial": "XYZto RGB",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Types.html#t:XYZtoRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Types",
          "name": "CIELAB",
          "package": "prizm",
          "signature": "CIELAB !a !a !a",
          "source": "src/Data-Prizm-Types.html#CIELAB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prizm Types",
          "module": "Data.Prizm.Types",
          "name": "CIELAB",
          "package": "prizm",
          "partial": "CIELAB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Types.html#v:CIELAB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Types",
          "name": "CIELCH",
          "package": "prizm",
          "signature": "CIELCH !a !a !a",
          "source": "src/Data-Prizm-Types.html#CIELCH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prizm Types",
          "module": "Data.Prizm.Types",
          "name": "CIELCH",
          "package": "prizm",
          "partial": "CIELCH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Types.html#v:CIELCH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Types",
          "name": "CIEXYZ",
          "package": "prizm",
          "signature": "CIEXYZ !a !a !a",
          "source": "src/Data-Prizm-Types.html#CIEXYZ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prizm Types",
          "module": "Data.Prizm.Types",
          "name": "CIEXYZ",
          "package": "prizm",
          "partial": "CIEXYZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Types.html#v:CIEXYZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Types",
          "name": "RGB",
          "package": "prizm",
          "signature": "RGB !a !a !a",
          "source": "src/Data-Prizm-Types.html#RGB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prizm Types",
          "module": "Data.Prizm.Types",
          "name": "RGB",
          "package": "prizm",
          "partial": "RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Types.html#v:RGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Types",
          "name": "RGBtoXYZ",
          "package": "prizm",
          "signature": "RGBtoXYZ [[Double]]",
          "source": "src/Data-Prizm-Types.html#RGBtoXYZ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prizm Types",
          "module": "Data.Prizm.Types",
          "name": "RGBtoXYZ",
          "normalized": "RGBtoXYZ[[Double]]",
          "package": "prizm",
          "partial": "RGBto XYZ",
          "signature": "RGBtoXYZ[[Double]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Types.html#v:RGBtoXYZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prizm.Types",
          "name": "XYZtoRGB",
          "package": "prizm",
          "signature": "XYZtoRGB [[Double]]",
          "source": "src/Data-Prizm-Types.html#XYZtoRGB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prizm Types",
          "module": "Data.Prizm.Types",
          "name": "XYZtoRGB",
          "normalized": "XYZtoRGB[[Double]]",
          "package": "prizm",
          "partial": "XYZto RGB",
          "signature": "XYZtoRGB[[Double]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prizm/docs/Data-Prizm-Types.html#v:XYZtoRGB"
      }
    }
  ]
]