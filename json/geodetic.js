[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Azimuth.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn azimuth in degrees between 0 and 360.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Geo.Geodetic.Azimuth",
        "fct-package": "geodetic",
        "fct-signature": "module",
        "fct-source": "src/Data-Geo-Geodetic-Azimuth.html",
        "fct-type": "module",
        "title": "Azimuth"
      },
      "index": {
        "description": "An azimuth in degrees between and",
        "hierarchy": "Data Geo Geodetic Azimuth",
        "module": "Data.Geo.Geodetic.Azimuth",
        "name": "Azimuth",
        "normalized": "",
        "package": "geodetic",
        "partial": "Azimuth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Azimuth.html#t:Azimuth",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Azimuth",
        "fct-package": "geodetic",
        "fct-signature": "data",
        "fct-source": "src/Data-Geo-Geodetic-Azimuth.html#Azimuth",
        "fct-type": "data",
        "title": "Azimuth"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Azimuth",
        "module": "Data.Geo.Geodetic.Azimuth",
        "name": "Azimuth",
        "normalized": "",
        "package": "geodetic",
        "partial": "Azimuth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Azimuth.html#t:HasAzimuth",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Azimuth",
        "fct-package": "geodetic",
        "fct-signature": "class",
        "fct-source": "src/Data-Geo-Geodetic-Azimuth.html#HasAzimuth",
        "fct-type": "class",
        "title": "HasAzimuth"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Azimuth",
        "module": "Data.Geo.Geodetic.Azimuth",
        "name": "HasAzimuth",
        "normalized": "",
        "package": "geodetic",
        "partial": "Has Azimuth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Azimuth.html#v:azimuth",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Azimuth",
        "fct-package": "geodetic",
        "fct-signature": "Lens' t Azimuth",
        "fct-source": "src/Data-Geo-Geodetic-Azimuth.html#azimuth",
        "fct-type": "method",
        "title": "azimuth"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Azimuth",
        "module": "Data.Geo.Geodetic.Azimuth",
        "name": "azimuth",
        "normalized": "",
        "package": "geodetic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Azimuth.html#v:modAzimuth",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an azimuth such that if the given value is out of bounds,\n a modulus is taken to keep it within 0 inclusive and 360 exclusive.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodAzimuth 7\n\u003c/code\u003e\u003c/strong\u003eAzimuth 7.0000\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodAzimuth 0\n\u003c/code\u003e\u003c/strong\u003eAzimuth 0.0000\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodAzimuth 360\n\u003c/code\u003e\u003c/strong\u003eAzimuth 0.0000\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodAzimuth 361\n\u003c/code\u003e\u003c/strong\u003eAzimuth 1.0000\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodAzimuth 359.999\n\u003c/code\u003e\u003c/strong\u003eAzimuth 359.9990\n\u003c/pre\u003e",
        "fct-module": "Data.Geo.Geodetic.Azimuth",
        "fct-package": "geodetic",
        "fct-signature": "Double -\u003e Azimuth",
        "fct-source": "src/Data-Geo-Geodetic-Azimuth.html#modAzimuth",
        "fct-type": "function",
        "title": "modAzimuth"
      },
      "index": {
        "description": "Construct an azimuth such that if the given value is out of bounds modulus is taken to keep it within inclusive and exclusive modAzimuth Azimuth modAzimuth Azimuth modAzimuth Azimuth modAzimuth Azimuth modAzimuth Azimuth",
        "hierarchy": "Data Geo Geodetic Azimuth",
        "module": "Data.Geo.Geodetic.Azimuth",
        "name": "modAzimuth",
        "normalized": "Double-\u003eAzimuth",
        "package": "geodetic",
        "partial": "Azimuth",
        "signature": "Double-\u003eAzimuth"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Azimuth.html#v:nAzimuth",
      "description": {
        "fct-descr": "\u003cp\u003eA prism on azimuth to an integer between 0 and 359 inclusive.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e7 ^? nAzimuth\n\u003c/code\u003e\u003c/strong\u003eJust (Azimuth 7.0000)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e0 ^? nAzimuth\n\u003c/code\u003e\u003c/strong\u003eJust (Azimuth 0.0000)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e359.999 ^? nAzimuth\n\u003c/code\u003e\u003c/strong\u003eJust (Azimuth 359.9990)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e360 ^? nAzimuth\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre\u003eall (\\m -\u003e nAzimuth # m == n) (n ^? nAzimuth)\u003c/pre\u003e",
        "fct-module": "Data.Geo.Geodetic.Azimuth",
        "fct-package": "geodetic",
        "fct-signature": "Prism' Double Azimuth",
        "fct-source": "src/Data-Geo-Geodetic-Azimuth.html#nAzimuth",
        "fct-type": "function",
        "title": "nAzimuth"
      },
      "index": {
        "description": "prism on azimuth to an integer between and inclusive nAzimuth Just Azimuth nAzimuth Just Azimuth nAzimuth Just Azimuth nAzimuth Nothing all nAzimuth nAzimuth",
        "hierarchy": "Data Geo Geodetic Azimuth",
        "module": "Data.Geo.Geodetic.Azimuth",
        "name": "nAzimuth",
        "normalized": "",
        "package": "geodetic",
        "partial": "Azimuth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Bearing.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA bearing in degrees between 0 and 360.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Geo.Geodetic.Bearing",
        "fct-package": "geodetic",
        "fct-signature": "module",
        "fct-source": "src/Data-Geo-Geodetic-Bearing.html",
        "fct-type": "module",
        "title": "Bearing"
      },
      "index": {
        "description": "bearing in degrees between and",
        "hierarchy": "Data Geo Geodetic Bearing",
        "module": "Data.Geo.Geodetic.Bearing",
        "name": "Bearing",
        "normalized": "",
        "package": "geodetic",
        "partial": "Bearing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Bearing.html#t:Bearing",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Bearing",
        "fct-package": "geodetic",
        "fct-signature": "data",
        "fct-source": "src/Data-Geo-Geodetic-Bearing.html#Bearing",
        "fct-type": "data",
        "title": "Bearing"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Bearing",
        "module": "Data.Geo.Geodetic.Bearing",
        "name": "Bearing",
        "normalized": "",
        "package": "geodetic",
        "partial": "Bearing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Bearing.html#t:HasBearing",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Bearing",
        "fct-package": "geodetic",
        "fct-signature": "class",
        "fct-source": "src/Data-Geo-Geodetic-Bearing.html#HasBearing",
        "fct-type": "class",
        "title": "HasBearing"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Bearing",
        "module": "Data.Geo.Geodetic.Bearing",
        "name": "HasBearing",
        "normalized": "",
        "package": "geodetic",
        "partial": "Has Bearing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Bearing.html#v:bearing",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Bearing",
        "fct-package": "geodetic",
        "fct-signature": "Lens' t Bearing",
        "fct-source": "src/Data-Geo-Geodetic-Bearing.html#bearing",
        "fct-type": "method",
        "title": "bearing"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Bearing",
        "module": "Data.Geo.Geodetic.Bearing",
        "name": "bearing",
        "normalized": "",
        "package": "geodetic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Bearing.html#v:degreeBearing",
      "description": {
        "fct-descr": "\u003cp\u003eA prism on bearing to a double between 0 inclusive and 360 exclusive.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e7 ^? degreeBearing\n\u003c/code\u003e\u003c/strong\u003eJust (Bearing 7.0000)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e0 ^? degreeBearing\n\u003c/code\u003e\u003c/strong\u003eJust (Bearing 0.0000)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e359 ^? degreeBearing\n\u003c/code\u003e\u003c/strong\u003eJust (Bearing 359.0000)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e359.997 ^? degreeBearing\n\u003c/code\u003e\u003c/strong\u003eJust (Bearing 359.9970)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e360 ^? degreeBearing\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre\u003eall (\\m -\u003e degreeBearing # m == n) (n ^? degreeBearing)\u003c/pre\u003e",
        "fct-module": "Data.Geo.Geodetic.Bearing",
        "fct-package": "geodetic",
        "fct-signature": "Prism' Double Bearing",
        "fct-source": "src/Data-Geo-Geodetic-Bearing.html#degreeBearing",
        "fct-type": "function",
        "title": "degreeBearing"
      },
      "index": {
        "description": "prism on bearing to double between inclusive and exclusive degreeBearing Just Bearing degreeBearing Just Bearing degreeBearing Just Bearing degreeBearing Just Bearing degreeBearing Nothing all degreeBearing degreeBearing",
        "hierarchy": "Data Geo Geodetic Bearing",
        "module": "Data.Geo.Geodetic.Bearing",
        "name": "degreeBearing",
        "normalized": "",
        "package": "geodetic",
        "partial": "Bearing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Bearing.html#v:modBearing",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a bearing such that if the given value is out of bounds,\n a modulus is taken to keep it within 0 inclusive and 360 exclusive.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodBearing 7\n\u003c/code\u003e\u003c/strong\u003eBearing 7.0000\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodBearing 0\n\u003c/code\u003e\u003c/strong\u003eBearing 0.0000\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodBearing (-0.0001)\n\u003c/code\u003e\u003c/strong\u003eBearing 359.9999\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodBearing 360\n\u003c/code\u003e\u003c/strong\u003eBearing 0.0000\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodBearing 359.99999\n\u003c/code\u003e\u003c/strong\u003eBearing 360.0000\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodBearing 359.999\n\u003c/code\u003e\u003c/strong\u003eBearing 359.9990\n\u003c/pre\u003e",
        "fct-module": "Data.Geo.Geodetic.Bearing",
        "fct-package": "geodetic",
        "fct-signature": "Double -\u003e Bearing",
        "fct-source": "src/Data-Geo-Geodetic-Bearing.html#modBearing",
        "fct-type": "function",
        "title": "modBearing"
      },
      "index": {
        "description": "Construct bearing such that if the given value is out of bounds modulus is taken to keep it within inclusive and exclusive modBearing Bearing modBearing Bearing modBearing Bearing modBearing Bearing modBearing Bearing modBearing Bearing",
        "hierarchy": "Data Geo Geodetic Bearing",
        "module": "Data.Geo.Geodetic.Bearing",
        "name": "modBearing",
        "normalized": "Double-\u003eBearing",
        "package": "geodetic",
        "partial": "Bearing",
        "signature": "Double-\u003eBearing"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Bearing.html#v:radianBearing",
      "description": {
        "fct-descr": "\u003cp\u003eA prism on bearing to a double between 0 and &#960; exclusive.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(2 * pi - 0.0000000001) ^? radianBearing\n\u003c/code\u003e\u003c/strong\u003eJust (Bearing 360.0000)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e0 ^? radianBearing\n\u003c/code\u003e\u003c/strong\u003eJust (Bearing 0.0000)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e0.001 ^? radianBearing\n\u003c/code\u003e\u003c/strong\u003eJust (Bearing 0.0573)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e1.78391 ^? radianBearing\n\u003c/code\u003e\u003c/strong\u003eJust (Bearing 102.2105)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003epi ^? radianBearing\n\u003c/code\u003e\u003c/strong\u003eJust (Bearing 180.0000)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(2 * pi) ^? radianBearing\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(-0.001) ^? radianBearing\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e",
        "fct-module": "Data.Geo.Geodetic.Bearing",
        "fct-package": "geodetic",
        "fct-signature": "Prism' Double Bearing",
        "fct-source": "src/Data-Geo-Geodetic-Bearing.html#radianBearing",
        "fct-type": "function",
        "title": "radianBearing"
      },
      "index": {
        "description": "prism on bearing to double between and exclusive pi radianBearing Just Bearing radianBearing Just Bearing radianBearing Just Bearing radianBearing Just Bearing pi radianBearing Just Bearing pi radianBearing Nothing radianBearing Nothing",
        "hierarchy": "Data Geo Geodetic Bearing",
        "module": "Data.Geo.Geodetic.Bearing",
        "name": "radianBearing",
        "normalized": "",
        "package": "geodetic",
        "partial": "Bearing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Curve.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA geodetic curve is made of a distance in metres, an azimuth and a reverse azimuth.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Geo.Geodetic.Curve",
        "fct-package": "geodetic",
        "fct-signature": "module",
        "fct-source": "src/Data-Geo-Geodetic-Curve.html",
        "fct-type": "module",
        "title": "Curve"
      },
      "index": {
        "description": "geodetic curve is made of distance in metres an azimuth and reverse azimuth",
        "hierarchy": "Data Geo Geodetic Curve",
        "module": "Data.Geo.Geodetic.Curve",
        "name": "Curve",
        "normalized": "",
        "package": "geodetic",
        "partial": "Curve",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Curve.html#t:Curve",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Curve",
        "fct-package": "geodetic",
        "fct-signature": "data",
        "fct-source": "src/Data-Geo-Geodetic-Curve.html#Curve",
        "fct-type": "data",
        "title": "Curve"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Curve",
        "module": "Data.Geo.Geodetic.Curve",
        "name": "Curve",
        "normalized": "",
        "package": "geodetic",
        "partial": "Curve",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Curve.html#v:curve",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a geodetic curve with the given parameters.\n\u003c/p\u003e",
        "fct-module": "Data.Geo.Geodetic.Curve",
        "fct-package": "geodetic",
        "fct-signature": "Double-\u003e Azimuth-\u003e Azimuth-\u003e Curve",
        "fct-type": "function",
        "title": "curve"
      },
      "index": {
        "description": "Construct geodetic curve with the given parameters",
        "hierarchy": "Data Geo Geodetic Curve",
        "module": "Data.Geo.Geodetic.Curve",
        "name": "curve",
        "normalized": "Double-\u003eAzimuth-\u003eAzimuth-\u003eCurve",
        "package": "geodetic",
        "partial": "",
        "signature": "Double-\u003eAzimuth-\u003eAzimuth-\u003eCurve"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Curve.html#v:curveAzimuth",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Curve",
        "fct-package": "geodetic",
        "fct-signature": "Lens' Curve Azimuth",
        "fct-source": "src/Data-Geo-Geodetic-Curve.html#curveAzimuth",
        "fct-type": "function",
        "title": "curveAzimuth"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Curve",
        "module": "Data.Geo.Geodetic.Curve",
        "name": "curveAzimuth",
        "normalized": "",
        "package": "geodetic",
        "partial": "Azimuth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Curve.html#v:curveDistance",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Curve",
        "fct-package": "geodetic",
        "fct-signature": "Lens' Curve Double",
        "fct-source": "src/Data-Geo-Geodetic-Curve.html#curveDistance",
        "fct-type": "function",
        "title": "curveDistance"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Curve",
        "module": "Data.Geo.Geodetic.Curve",
        "name": "curveDistance",
        "normalized": "",
        "package": "geodetic",
        "partial": "Distance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Curve.html#v:curveReverseAzimuth",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Curve",
        "fct-package": "geodetic",
        "fct-signature": "Lens' Curve Azimuth",
        "fct-source": "src/Data-Geo-Geodetic-Curve.html#curveReverseAzimuth",
        "fct-type": "function",
        "title": "curveReverseAzimuth"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Curve",
        "module": "Data.Geo.Geodetic.Curve",
        "name": "curveReverseAzimuth",
        "normalized": "",
        "package": "geodetic",
        "partial": "Reverse Azimuth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Ellipsoid",
        "fct-package": "geodetic",
        "fct-signature": "module",
        "fct-source": "src/Data-Geo-Geodetic-Ellipsoid.html",
        "fct-type": "module",
        "title": "Ellipsoid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Ellipsoid",
        "module": "Data.Geo.Geodetic.Ellipsoid",
        "name": "Ellipsoid",
        "normalized": "",
        "package": "geodetic",
        "partial": "Ellipsoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#t:Ellipsoid",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Ellipsoid",
        "fct-package": "geodetic",
        "fct-signature": "data",
        "fct-source": "src/Data-Geo-Geodetic-Ellipsoid.html#Ellipsoid",
        "fct-type": "data",
        "title": "Ellipsoid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Ellipsoid",
        "module": "Data.Geo.Geodetic.Ellipsoid",
        "name": "Ellipsoid",
        "normalized": "",
        "package": "geodetic",
        "partial": "Ellipsoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#t:HasEllipsoid",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Ellipsoid",
        "fct-package": "geodetic",
        "fct-signature": "class",
        "fct-source": "src/Data-Geo-Geodetic-Ellipsoid.html#HasEllipsoid",
        "fct-type": "class",
        "title": "HasEllipsoid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Ellipsoid",
        "module": "Data.Geo.Geodetic.Ellipsoid",
        "name": "HasEllipsoid",
        "normalized": "",
        "package": "geodetic",
        "partial": "Has Ellipsoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#t:HasFlattening",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Ellipsoid",
        "fct-package": "geodetic",
        "fct-signature": "class",
        "fct-source": "src/Data-Geo-Geodetic-Ellipsoid.html#HasFlattening",
        "fct-type": "class",
        "title": "HasFlattening"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Ellipsoid",
        "module": "Data.Geo.Geodetic.Ellipsoid",
        "name": "HasFlattening",
        "normalized": "",
        "package": "geodetic",
        "partial": "Has Flattening",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#t:HasInverseFlattening",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Ellipsoid",
        "fct-package": "geodetic",
        "fct-signature": "class",
        "fct-source": "src/Data-Geo-Geodetic-Ellipsoid.html#HasInverseFlattening",
        "fct-type": "class",
        "title": "HasInverseFlattening"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Ellipsoid",
        "module": "Data.Geo.Geodetic.Ellipsoid",
        "name": "HasInverseFlattening",
        "normalized": "",
        "package": "geodetic",
        "partial": "Has Inverse Flattening",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#t:HasSemiMajor",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Ellipsoid",
        "fct-package": "geodetic",
        "fct-signature": "class",
        "fct-source": "src/Data-Geo-Geodetic-Ellipsoid.html#HasSemiMajor",
        "fct-type": "class",
        "title": "HasSemiMajor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Ellipsoid",
        "module": "Data.Geo.Geodetic.Ellipsoid",
        "name": "HasSemiMajor",
        "normalized": "",
        "package": "geodetic",
        "partial": "Has Semi Major",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#t:HasSemiMinor",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Ellipsoid",
        "fct-package": "geodetic",
        "fct-signature": "class",
        "fct-source": "src/Data-Geo-Geodetic-Ellipsoid.html#HasSemiMinor",
        "fct-type": "class",
        "title": "HasSemiMinor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Ellipsoid",
        "module": "Data.Geo.Geodetic.Ellipsoid",
        "name": "HasSemiMinor",
        "normalized": "",
        "package": "geodetic",
        "partial": "Has Semi Minor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:airy1830",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Ellipsoid",
        "fct-package": "geodetic",
        "fct-signature": "Ellipsoid",
        "fct-source": "src/Data-Geo-Geodetic-Ellipsoid.html#airy1830",
        "fct-type": "function",
        "title": "airy1830"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Ellipsoid",
        "module": "Data.Geo.Geodetic.Ellipsoid",
        "name": "airy1830",
        "normalized": "",
        "package": "geodetic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:ans",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Ellipsoid",
        "fct-package": "geodetic",
        "fct-signature": "Ellipsoid",
        "fct-source": "src/Data-Geo-Geodetic-Ellipsoid.html#ans",
        "fct-type": "function",
        "title": "ans"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Ellipsoid",
        "module": "Data.Geo.Geodetic.Ellipsoid",
        "name": "ans",
        "normalized": "",
        "package": "geodetic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:au1965",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Ellipsoid",
        "fct-package": "geodetic",
        "fct-signature": "Ellipsoid",
        "fct-source": "src/Data-Geo-Geodetic-Ellipsoid.html#au1965",
        "fct-type": "function",
        "title": "au1965"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Ellipsoid",
        "module": "Data.Geo.Geodetic.Ellipsoid",
        "name": "au1965",
        "normalized": "",
        "package": "geodetic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:bessel1841",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Ellipsoid",
        "fct-package": "geodetic",
        "fct-signature": "Ellipsoid",
        "fct-source": "src/Data-Geo-Geodetic-Ellipsoid.html#bessel1841",
        "fct-type": "function",
        "title": "bessel1841"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Ellipsoid",
        "module": "Data.Geo.Geodetic.Ellipsoid",
        "name": "bessel1841",
        "normalized": "",
        "package": "geodetic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:clarke1858",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Ellipsoid",
        "fct-package": "geodetic",
        "fct-signature": "Ellipsoid",
        "fct-source": "src/Data-Geo-Geodetic-Ellipsoid.html#clarke1858",
        "fct-type": "function",
        "title": "clarke1858"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Ellipsoid",
        "module": "Data.Geo.Geodetic.Ellipsoid",
        "name": "clarke1858",
        "normalized": "",
        "package": "geodetic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:clarke1866",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Ellipsoid",
        "fct-package": "geodetic",
        "fct-signature": "Ellipsoid",
        "fct-source": "src/Data-Geo-Geodetic-Ellipsoid.html#clarke1866",
        "fct-type": "function",
        "title": "clarke1866"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Ellipsoid",
        "module": "Data.Geo.Geodetic.Ellipsoid",
        "name": "clarke1866",
        "normalized": "",
        "package": "geodetic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:clarke1880",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Ellipsoid",
        "fct-package": "geodetic",
        "fct-signature": "Ellipsoid",
        "fct-source": "src/Data-Geo-Geodetic-Ellipsoid.html#clarke1880",
        "fct-type": "function",
        "title": "clarke1880"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Ellipsoid",
        "module": "Data.Geo.Geodetic.Ellipsoid",
        "name": "clarke1880",
        "normalized": "",
        "package": "geodetic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:ellipsoid",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Ellipsoid",
        "fct-package": "geodetic",
        "fct-signature": "Lens' t Ellipsoid",
        "fct-source": "src/Data-Geo-Geodetic-Ellipsoid.html#ellipsoid",
        "fct-type": "method",
        "title": "ellipsoid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Ellipsoid",
        "module": "Data.Geo.Geodetic.Ellipsoid",
        "name": "ellipsoid",
        "normalized": "",
        "package": "geodetic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:everest1830",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Ellipsoid",
        "fct-package": "geodetic",
        "fct-signature": "Ellipsoid",
        "fct-source": "src/Data-Geo-Geodetic-Ellipsoid.html#everest1830",
        "fct-type": "function",
        "title": "everest1830"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Ellipsoid",
        "module": "Data.Geo.Geodetic.Ellipsoid",
        "name": "everest1830",
        "normalized": "",
        "package": "geodetic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:flattening",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Ellipsoid",
        "fct-package": "geodetic",
        "fct-signature": "Lens' t Double",
        "fct-source": "src/Data-Geo-Geodetic-Ellipsoid.html#flattening",
        "fct-type": "method",
        "title": "flattening"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Ellipsoid",
        "module": "Data.Geo.Geodetic.Ellipsoid",
        "name": "flattening",
        "normalized": "",
        "package": "geodetic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:grs67",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Ellipsoid",
        "fct-package": "geodetic",
        "fct-signature": "Ellipsoid",
        "fct-source": "src/Data-Geo-Geodetic-Ellipsoid.html#grs67",
        "fct-type": "function",
        "title": "grs67"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Ellipsoid",
        "module": "Data.Geo.Geodetic.Ellipsoid",
        "name": "grs67",
        "normalized": "",
        "package": "geodetic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:grs80",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Ellipsoid",
        "fct-package": "geodetic",
        "fct-signature": "Ellipsoid",
        "fct-source": "src/Data-Geo-Geodetic-Ellipsoid.html#grs80",
        "fct-type": "function",
        "title": "grs80"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Ellipsoid",
        "module": "Data.Geo.Geodetic.Ellipsoid",
        "name": "grs80",
        "normalized": "",
        "package": "geodetic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:hayford1909",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Ellipsoid",
        "fct-package": "geodetic",
        "fct-signature": "Ellipsoid",
        "fct-source": "src/Data-Geo-Geodetic-Ellipsoid.html#hayford1909",
        "fct-type": "function",
        "title": "hayford1909"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Ellipsoid",
        "module": "Data.Geo.Geodetic.Ellipsoid",
        "name": "hayford1909",
        "normalized": "",
        "package": "geodetic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:international1924",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Ellipsoid",
        "fct-package": "geodetic",
        "fct-signature": "Ellipsoid",
        "fct-source": "src/Data-Geo-Geodetic-Ellipsoid.html#international1924",
        "fct-type": "function",
        "title": "international1924"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Ellipsoid",
        "module": "Data.Geo.Geodetic.Ellipsoid",
        "name": "international1924",
        "normalized": "",
        "package": "geodetic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:inverseFlattening",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Ellipsoid",
        "fct-package": "geodetic",
        "fct-signature": "Lens' t Double",
        "fct-source": "src/Data-Geo-Geodetic-Ellipsoid.html#inverseFlattening",
        "fct-type": "method",
        "title": "inverseFlattening"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Ellipsoid",
        "module": "Data.Geo.Geodetic.Ellipsoid",
        "name": "inverseFlattening",
        "normalized": "",
        "package": "geodetic",
        "partial": "Flattening",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:krasovsky1940",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Ellipsoid",
        "fct-package": "geodetic",
        "fct-signature": "Ellipsoid",
        "fct-source": "src/Data-Geo-Geodetic-Ellipsoid.html#krasovsky1940",
        "fct-type": "function",
        "title": "krasovsky1940"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Ellipsoid",
        "module": "Data.Geo.Geodetic.Ellipsoid",
        "name": "krasovsky1940",
        "normalized": "",
        "package": "geodetic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:semiMajor",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Ellipsoid",
        "fct-package": "geodetic",
        "fct-signature": "Lens' t Double",
        "fct-source": "src/Data-Geo-Geodetic-Ellipsoid.html#semiMajor",
        "fct-type": "method",
        "title": "semiMajor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Ellipsoid",
        "module": "Data.Geo.Geodetic.Ellipsoid",
        "name": "semiMajor",
        "normalized": "",
        "package": "geodetic",
        "partial": "Major",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:semiMajorFlattening",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Ellipsoid",
        "fct-package": "geodetic",
        "fct-signature": "Double-\u003e Double-\u003e Ellipsoid",
        "fct-type": "function",
        "title": "semiMajorFlattening"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Ellipsoid",
        "module": "Data.Geo.Geodetic.Ellipsoid",
        "name": "semiMajorFlattening",
        "normalized": "Double-\u003eDouble-\u003eEllipsoid",
        "package": "geodetic",
        "partial": "Major Flattening",
        "signature": "Double-\u003eDouble-\u003eEllipsoid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:semiMajorInverseFlattening",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Ellipsoid",
        "fct-package": "geodetic",
        "fct-signature": "Double-\u003e Double-\u003e Ellipsoid",
        "fct-type": "function",
        "title": "semiMajorInverseFlattening"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Ellipsoid",
        "module": "Data.Geo.Geodetic.Ellipsoid",
        "name": "semiMajorInverseFlattening",
        "normalized": "Double-\u003eDouble-\u003eEllipsoid",
        "package": "geodetic",
        "partial": "Major Inverse Flattening",
        "signature": "Double-\u003eDouble-\u003eEllipsoid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:semiMinor",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Ellipsoid",
        "fct-package": "geodetic",
        "fct-signature": "Lens' t Double",
        "fct-source": "src/Data-Geo-Geodetic-Ellipsoid.html#semiMinor",
        "fct-type": "method",
        "title": "semiMinor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Ellipsoid",
        "module": "Data.Geo.Geodetic.Ellipsoid",
        "name": "semiMinor",
        "normalized": "",
        "package": "geodetic",
        "partial": "Minor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:semiMinorFlattening",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Ellipsoid",
        "fct-package": "geodetic",
        "fct-signature": "Double-\u003e Double-\u003e Ellipsoid",
        "fct-type": "function",
        "title": "semiMinorFlattening"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Ellipsoid",
        "module": "Data.Geo.Geodetic.Ellipsoid",
        "name": "semiMinorFlattening",
        "normalized": "Double-\u003eDouble-\u003eEllipsoid",
        "package": "geodetic",
        "partial": "Minor Flattening",
        "signature": "Double-\u003eDouble-\u003eEllipsoid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:semiMinorInverseFlattening",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Ellipsoid",
        "fct-package": "geodetic",
        "fct-signature": "Double-\u003e Double-\u003e Ellipsoid",
        "fct-type": "function",
        "title": "semiMinorInverseFlattening"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Ellipsoid",
        "module": "Data.Geo.Geodetic.Ellipsoid",
        "name": "semiMinorInverseFlattening",
        "normalized": "Double-\u003eDouble-\u003eEllipsoid",
        "package": "geodetic",
        "partial": "Minor Inverse Flattening",
        "signature": "Double-\u003eDouble-\u003eEllipsoid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:wgs72",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Ellipsoid",
        "fct-package": "geodetic",
        "fct-signature": "Ellipsoid",
        "fct-source": "src/Data-Geo-Geodetic-Ellipsoid.html#wgs72",
        "fct-type": "function",
        "title": "wgs72"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Ellipsoid",
        "module": "Data.Geo.Geodetic.Ellipsoid",
        "name": "wgs72",
        "normalized": "",
        "package": "geodetic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:wgs84",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Ellipsoid",
        "fct-package": "geodetic",
        "fct-signature": "Ellipsoid",
        "fct-source": "src/Data-Geo-Geodetic-Ellipsoid.html#wgs84",
        "fct-type": "function",
        "title": "wgs84"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Ellipsoid",
        "module": "Data.Geo.Geodetic.Ellipsoid",
        "name": "wgs84",
        "normalized": "",
        "package": "geodetic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-GreatCircle.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGreat circle geodetic distance algorithm.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Geo.Geodetic.GreatCircle",
        "fct-package": "geodetic",
        "fct-signature": "module",
        "fct-source": "src/Data-Geo-Geodetic-GreatCircle.html",
        "fct-type": "module",
        "title": "GreatCircle"
      },
      "index": {
        "description": "Great circle geodetic distance algorithm",
        "hierarchy": "Data Geo Geodetic GreatCircle",
        "module": "Data.Geo.Geodetic.GreatCircle",
        "name": "GreatCircle",
        "normalized": "",
        "package": "geodetic",
        "partial": "Great Circle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-GreatCircle.html#v:sphericalLaw",
      "description": {
        "fct-descr": "\u003cp\u003eGreat circle spherical law algorithm.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- 27.812 ..#.. 154.295; to \u003c- (-66.093) ..#.. 12.84; return (sphericalLaw earthMean fr to)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"15000950.5589\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- (-16.7889) ..#.. 41.935; to \u003c- 6.933 ..#.. (-162.55); return (sphericalLaw earthMean fr to)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"17128743.0669\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- 27.812 ..#.. 154.295; to \u003c- (-66.093) ..#.. 12.84; return (sphericalLaw (6350000 ^. nSphere) fr to)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"14959840.4461\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- (-16.7889) ..#.. 41.935; to \u003c- 6.933 ..#.. (-162.55); return (sphericalLaw (6350000 ^. nSphere) fr to)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"17081801.7377\"\n\u003c/pre\u003e",
        "fct-module": "Data.Geo.Geodetic.GreatCircle",
        "fct-package": "geodetic",
        "fct-signature": "Sphere-\u003e c1-\u003e c2-\u003e Double",
        "fct-type": "function",
        "title": "sphericalLaw"
      },
      "index": {
        "description": "Great circle spherical law algorithm fmap printf do fr to return sphericalLaw earthMean fr to Maybe String Just fmap printf do fr to return sphericalLaw earthMean fr to Maybe String Just fmap printf do fr to return sphericalLaw nSphere fr to Maybe String Just fmap printf do fr to return sphericalLaw nSphere fr to Maybe String Just",
        "hierarchy": "Data Geo Geodetic GreatCircle",
        "module": "Data.Geo.Geodetic.GreatCircle",
        "name": "sphericalLaw",
        "normalized": "Sphere-\u003ea-\u003ea-\u003eDouble",
        "package": "geodetic",
        "partial": "Law",
        "signature": "Sphere-\u003ec-\u003ec-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-GreatCircle.html#v:sphericalLaw-39-",
      "description": {
        "fct-descr": "\u003cp\u003eGreat circle spherical law algorithm with an optionally applied default sphere of the earth mean.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- 27.812 ..#.. 154.295; to \u003c- (-66.093) ..#.. 12.84; return (sphericalLaw' fr to :: Double)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"15000950.5589\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- (-16.7889) ..#.. 41.935; to \u003c- 6.933 ..#.. (-162.55); return (sphericalLaw' fr to :: Double)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"17128743.0669\"\n\u003c/pre\u003e",
        "fct-module": "Data.Geo.Geodetic.GreatCircle",
        "fct-package": "geodetic",
        "fct-signature": "x",
        "fct-source": "src/Data-Geo-Geodetic-GreatCircle.html#sphericalLaw%27",
        "fct-type": "function",
        "title": "sphericalLaw'"
      },
      "index": {
        "description": "Great circle spherical law algorithm with an optionally applied default sphere of the earth mean fmap printf do fr to return sphericalLaw fr to Double Maybe String Just fmap printf do fr to return sphericalLaw fr to Double Maybe String Just",
        "hierarchy": "Data Geo Geodetic GreatCircle",
        "module": "Data.Geo.Geodetic.GreatCircle",
        "name": "sphericalLaw'",
        "normalized": "",
        "package": "geodetic",
        "partial": "Law'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-GreatCircle.html#v:sphericalLawD",
      "description": {
        "fct-descr": "\u003cp\u003eGreat circle spherical law algorithm with a default sphere of the earth mean.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- 27.812 ..#.. 154.295; to \u003c- (-66.093) ..#.. 12.84; return (sphericalLawD fr to)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"15000950.5589\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- (-16.7889) ..#.. 41.935; to \u003c- 6.933 ..#.. (-162.55); return (sphericalLawD fr to)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"17128743.0669\"\n\u003c/pre\u003e",
        "fct-module": "Data.Geo.Geodetic.GreatCircle",
        "fct-package": "geodetic",
        "fct-signature": "c1-\u003e c2-\u003e Double",
        "fct-type": "function",
        "title": "sphericalLawD"
      },
      "index": {
        "description": "Great circle spherical law algorithm with default sphere of the earth mean fmap printf do fr to return sphericalLawD fr to Maybe String Just fmap printf do fr to return sphericalLawD fr to Maybe String Just",
        "hierarchy": "Data Geo Geodetic GreatCircle",
        "module": "Data.Geo.Geodetic.GreatCircle",
        "name": "sphericalLawD",
        "normalized": "a-\u003ea-\u003eDouble",
        "package": "geodetic",
        "partial": "Law",
        "signature": "c-\u003ec-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Haversine.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHaversine geodetic distance algorithm.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Geo.Geodetic.Haversine",
        "fct-package": "geodetic",
        "fct-signature": "module",
        "fct-source": "src/Data-Geo-Geodetic-Haversine.html",
        "fct-type": "module",
        "title": "Haversine"
      },
      "index": {
        "description": "Haversine geodetic distance algorithm",
        "hierarchy": "Data Geo Geodetic Haversine",
        "module": "Data.Geo.Geodetic.Haversine",
        "name": "Haversine",
        "normalized": "",
        "package": "geodetic",
        "partial": "Haversine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Haversine.html#v:haversine",
      "description": {
        "fct-descr": "\u003cp\u003eHaversine algorithm.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- 27.812 ..#.. 154.295; to \u003c- (-66.093) ..#.. 12.84; return (haversine earthMean fr to)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"15000950.5589\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- (-16.7889) ..#.. 41.935; to \u003c- 6.933 ..#.. (-162.55); return (haversine earthMean fr to)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"17128743.0669\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- 27.812 ..#.. 154.295; to \u003c- (-66.093) ..#.. 12.84; return (haversine (6350000 ^. nSphere) fr to)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"14959840.4461\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- (-16.7889) ..#.. 41.935; to \u003c- 6.933 ..#.. (-162.55); return (haversine (6350000 ^. nSphere) fr to)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"17081801.7377\"\n\u003c/pre\u003e",
        "fct-module": "Data.Geo.Geodetic.Haversine",
        "fct-package": "geodetic",
        "fct-signature": "Sphere-\u003e c1-\u003e c2-\u003e Double",
        "fct-type": "function",
        "title": "haversine"
      },
      "index": {
        "description": "Haversine algorithm fmap printf do fr to return haversine earthMean fr to Maybe String Just fmap printf do fr to return haversine earthMean fr to Maybe String Just fmap printf do fr to return haversine nSphere fr to Maybe String Just fmap printf do fr to return haversine nSphere fr to Maybe String Just",
        "hierarchy": "Data Geo Geodetic Haversine",
        "module": "Data.Geo.Geodetic.Haversine",
        "name": "haversine",
        "normalized": "Sphere-\u003ea-\u003ea-\u003eDouble",
        "package": "geodetic",
        "partial": "",
        "signature": "Sphere-\u003ec-\u003ec-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Haversine.html#v:haversine-39-",
      "description": {
        "fct-descr": "\u003cp\u003eHaversine algorithm with an optionally applied default sphere of the earth mean.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- 27.812 ..#.. 154.295; to \u003c- (-66.093) ..#.. 12.84; return (haversine' fr to :: Double)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"15000950.5589\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- (-16.7889) ..#.. 41.935; to \u003c- 6.933 ..#.. (-162.55); return (haversine' fr to :: Double)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"17128743.0669\"\n\u003c/pre\u003e",
        "fct-module": "Data.Geo.Geodetic.Haversine",
        "fct-package": "geodetic",
        "fct-signature": "x",
        "fct-source": "src/Data-Geo-Geodetic-Haversine.html#haversine%27",
        "fct-type": "function",
        "title": "haversine'"
      },
      "index": {
        "description": "Haversine algorithm with an optionally applied default sphere of the earth mean fmap printf do fr to return haversine fr to Double Maybe String Just fmap printf do fr to return haversine fr to Double Maybe String Just",
        "hierarchy": "Data Geo Geodetic Haversine",
        "module": "Data.Geo.Geodetic.Haversine",
        "name": "haversine'",
        "normalized": "",
        "package": "geodetic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Haversine.html#v:haversineD",
      "description": {
        "fct-descr": "\u003cp\u003eHaversine algorithm with a default sphere of the earth mean.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- 27.812 ..#.. 154.295; to \u003c- (-66.093) ..#.. 12.84; return (haversineD fr to)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"15000950.5589\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- (-16.7889) ..#.. 41.935; to \u003c- 6.933 ..#.. (-162.55); return (haversineD fr to)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"17128743.0669\"\n\u003c/pre\u003e",
        "fct-module": "Data.Geo.Geodetic.Haversine",
        "fct-package": "geodetic",
        "fct-signature": "c1-\u003e c2-\u003e Double",
        "fct-type": "function",
        "title": "haversineD"
      },
      "index": {
        "description": "Haversine algorithm with default sphere of the earth mean fmap printf do fr to return haversineD fr to Maybe String Just fmap printf do fr to return haversineD fr to Maybe String Just",
        "hierarchy": "Data Geo Geodetic Haversine",
        "module": "Data.Geo.Geodetic.Haversine",
        "name": "haversineD",
        "normalized": "a-\u003ea-\u003eDouble",
        "package": "geodetic",
        "partial": "",
        "signature": "c-\u003ec-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Sphere.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA sphere with a radius in metres.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Geo.Geodetic.Sphere",
        "fct-package": "geodetic",
        "fct-signature": "module",
        "fct-source": "src/Data-Geo-Geodetic-Sphere.html",
        "fct-type": "module",
        "title": "Sphere"
      },
      "index": {
        "description": "sphere with radius in metres",
        "hierarchy": "Data Geo Geodetic Sphere",
        "module": "Data.Geo.Geodetic.Sphere",
        "name": "Sphere",
        "normalized": "",
        "package": "geodetic",
        "partial": "Sphere",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Sphere.html#t:HasSphere",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Sphere",
        "fct-package": "geodetic",
        "fct-signature": "class",
        "fct-source": "src/Data-Geo-Geodetic-Sphere.html#HasSphere",
        "fct-type": "class",
        "title": "HasSphere"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Sphere",
        "module": "Data.Geo.Geodetic.Sphere",
        "name": "HasSphere",
        "normalized": "",
        "package": "geodetic",
        "partial": "Has Sphere",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Sphere.html#t:Sphere",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Sphere",
        "fct-package": "geodetic",
        "fct-signature": "data",
        "fct-source": "src/Data-Geo-Geodetic-Sphere.html#Sphere",
        "fct-type": "data",
        "title": "Sphere"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Sphere",
        "module": "Data.Geo.Geodetic.Sphere",
        "name": "Sphere",
        "normalized": "",
        "package": "geodetic",
        "partial": "Sphere",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Sphere.html#v:earthMean",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Sphere",
        "fct-package": "geodetic",
        "fct-signature": "Sphere",
        "fct-source": "src/Data-Geo-Geodetic-Sphere.html#earthMean",
        "fct-type": "function",
        "title": "earthMean"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Sphere",
        "module": "Data.Geo.Geodetic.Sphere",
        "name": "earthMean",
        "normalized": "",
        "package": "geodetic",
        "partial": "Mean",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Sphere.html#v:nSphere",
      "description": {
        "fct-descr": "\u003cp\u003eAn isomorphism on sphere to a double.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e7 ^. nSphere\n\u003c/code\u003e\u003c/strong\u003eSphere 7.0000\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e0 ^. nSphere\n\u003c/code\u003e\u003c/strong\u003eSphere 0.0000\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(-7) ^. nSphere\n\u003c/code\u003e\u003c/strong\u003eSphere -7.0000\n\u003c/pre\u003e",
        "fct-module": "Data.Geo.Geodetic.Sphere",
        "fct-package": "geodetic",
        "fct-signature": "Iso' Double Sphere",
        "fct-source": "src/Data-Geo-Geodetic-Sphere.html#nSphere",
        "fct-type": "function",
        "title": "nSphere"
      },
      "index": {
        "description": "An isomorphism on sphere to double nSphere Sphere nSphere Sphere nSphere Sphere",
        "hierarchy": "Data Geo Geodetic Sphere",
        "module": "Data.Geo.Geodetic.Sphere",
        "name": "nSphere",
        "normalized": "",
        "package": "geodetic",
        "partial": "Sphere",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Sphere.html#v:sphere",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Sphere",
        "fct-package": "geodetic",
        "fct-signature": "Lens' t Sphere",
        "fct-source": "src/Data-Geo-Geodetic-Sphere.html#sphere",
        "fct-type": "method",
        "title": "sphere"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Sphere",
        "module": "Data.Geo.Geodetic.Sphere",
        "name": "sphere",
        "normalized": "",
        "package": "geodetic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Vincenty.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of Thaddeus Vincenty's direct and inverse geodetic algorithms. \u003ca\u003ehttp://www.ngs.noaa.gov/PUBS_LIB/inverse.pdf\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Geo.Geodetic.Vincenty",
        "fct-package": "geodetic",
        "fct-signature": "module",
        "fct-source": "src/Data-Geo-Geodetic-Vincenty.html",
        "fct-type": "module",
        "title": "Vincenty"
      },
      "index": {
        "description": "An implementation of Thaddeus Vincenty direct and inverse geodetic algorithms http www.ngs.noaa.gov PUBS LIB inverse.pdf",
        "hierarchy": "Data Geo Geodetic Vincenty",
        "module": "Data.Geo.Geodetic.Vincenty",
        "name": "Vincenty",
        "normalized": "",
        "package": "geodetic",
        "partial": "Vincenty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Vincenty.html#t:Convergence",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Vincenty",
        "fct-package": "geodetic",
        "fct-signature": "type",
        "fct-source": "src/Data-Geo-Geodetic-Vincenty.html#Convergence",
        "fct-type": "type",
        "title": "Convergence"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Vincenty",
        "module": "Data.Geo.Geodetic.Vincenty",
        "name": "Convergence",
        "normalized": "",
        "package": "geodetic",
        "partial": "Convergence",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Vincenty.html#t:VincentyDirectResult",
      "description": {
        "fct-module": "Data.Geo.Geodetic.Vincenty",
        "fct-package": "geodetic",
        "fct-signature": "data",
        "fct-source": "src/Data-Geo-Geodetic-Vincenty.html#VincentyDirectResult",
        "fct-type": "data",
        "title": "VincentyDirectResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic Vincenty",
        "module": "Data.Geo.Geodetic.Vincenty",
        "name": "VincentyDirectResult",
        "normalized": "",
        "package": "geodetic",
        "partial": "Vincenty Direct Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Vincenty.html#v:convergence",
      "description": {
        "fct-descr": "\u003cp\u003eA typically acceptable convergence value.\n\u003c/p\u003e",
        "fct-module": "Data.Geo.Geodetic.Vincenty",
        "fct-package": "geodetic",
        "fct-signature": "Convergence",
        "fct-source": "src/Data-Geo-Geodetic-Vincenty.html#convergence",
        "fct-type": "function",
        "title": "convergence"
      },
      "index": {
        "description": "typically acceptable convergence value",
        "hierarchy": "Data Geo Geodetic Vincenty",
        "module": "Data.Geo.Geodetic.Vincenty",
        "name": "convergence",
        "normalized": "",
        "package": "geodetic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Vincenty.html#v:direct",
      "description": {
        "fct-descr": "\u003cp\u003eVincenty direct algorithm.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (\\c' -\u003e direct wgs84 convergence c' (modBearing 165.34) 4235) (27.812 ..#.. 154.295)\n\u003c/code\u003e\u003c/strong\u003eJust (VincentyDirectResult (Coordinate (Latitude (DegreesLatitude 27) (Minutes 46) (Seconds 30.0981)) (Longitude (DegreesLongitude 154) (Minutes 18) (Seconds 21.1466))) (Bearing 165.3451))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (\\c' -\u003e direct wgs84 convergence c' (modBearing 165.34) 4235) ((-66.093) ..#.. 12.84)\n\u003c/code\u003e\u003c/strong\u003eJust (VincentyDirectResult (Coordinate (Latitude (DegreesLatitude (-66)) (Minutes 7) (Seconds 47.0667)) (Longitude (DegreesLongitude 12) (Minutes 51) (Seconds 49.4142))) (Bearing 165.3183))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (\\c' -\u003e direct ans convergence c' (modBearing 165.34) 4235) (27.812 ..#.. 154.295)\n\u003c/code\u003e\u003c/strong\u003eJust (VincentyDirectResult (Coordinate (Latitude (DegreesLatitude 27) (Minutes 46) (Seconds 30.0986)) (Longitude (DegreesLongitude 154) (Minutes 18) (Seconds 21.1464))) (Bearing 165.3451))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (\\c' -\u003e direct ans convergence c' (modBearing 165.34) 4235) ((-66.093) ..#.. 12.84)\n\u003c/code\u003e\u003c/strong\u003eJust (VincentyDirectResult (Coordinate (Latitude (DegreesLatitude (-66)) (Minutes 7) (Seconds 47.0662)) (Longitude (DegreesLongitude 12) (Minutes 51) (Seconds 49.4139))) (Bearing 165.3183))\n\u003c/pre\u003e",
        "fct-module": "Data.Geo.Geodetic.Vincenty",
        "fct-package": "geodetic",
        "fct-signature": "e-\u003e Convergence-\u003e c-\u003e b-\u003e Double-\u003e VincentyDirectResult",
        "fct-type": "function",
        "title": "direct"
      },
      "index": {
        "description": "Vincenty direct algorithm fmap direct wgs84 convergence modBearing Just VincentyDirectResult Coordinate Latitude DegreesLatitude Minutes Seconds Longitude DegreesLongitude Minutes Seconds Bearing fmap direct wgs84 convergence modBearing Just VincentyDirectResult Coordinate Latitude DegreesLatitude Minutes Seconds Longitude DegreesLongitude Minutes Seconds Bearing fmap direct ans convergence modBearing Just VincentyDirectResult Coordinate Latitude DegreesLatitude Minutes Seconds Longitude DegreesLongitude Minutes Seconds Bearing fmap direct ans convergence modBearing Just VincentyDirectResult Coordinate Latitude DegreesLatitude Minutes Seconds Longitude DegreesLongitude Minutes Seconds Bearing",
        "hierarchy": "Data Geo Geodetic Vincenty",
        "module": "Data.Geo.Geodetic.Vincenty",
        "name": "direct",
        "normalized": "a-\u003eConvergence-\u003eb-\u003ec-\u003eDouble-\u003eVincentyDirectResult",
        "package": "geodetic",
        "partial": "",
        "signature": "e-\u003eConvergence-\u003ec-\u003eb-\u003eDouble-\u003eVincentyDirectResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Vincenty.html#v:direct-39-",
      "description": {
        "fct-descr": "\u003cp\u003eVincenty direct algorithm with an optionally applied default ellipsoid of WGS84 and standard convergence.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (\\c' -\u003e direct' c' (modBearing 165.34) (4235 :: Double) :: VincentyDirectResult) (27.812 ..#.. 154.295)\n\u003c/code\u003e\u003c/strong\u003eJust (VincentyDirectResult (Coordinate (Latitude (DegreesLatitude 27) (Minutes 46) (Seconds 30.0981)) (Longitude (DegreesLongitude 154) (Minutes 18) (Seconds 21.1466))) (Bearing 165.3451))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (\\c' -\u003e direct' c' (modBearing 165.34) (4235 :: Double) :: VincentyDirectResult) ((-66.093) ..#.. 12.84)\n\u003c/code\u003e\u003c/strong\u003eJust (VincentyDirectResult (Coordinate (Latitude (DegreesLatitude (-66)) (Minutes 7) (Seconds 47.0667)) (Longitude (DegreesLongitude 12) (Minutes 51) (Seconds 49.4142))) (Bearing 165.3183))\n\u003c/pre\u003e",
        "fct-module": "Data.Geo.Geodetic.Vincenty",
        "fct-package": "geodetic",
        "fct-signature": "x",
        "fct-source": "src/Data-Geo-Geodetic-Vincenty.html#direct%27",
        "fct-type": "function",
        "title": "direct'"
      },
      "index": {
        "description": "Vincenty direct algorithm with an optionally applied default ellipsoid of WGS84 and standard convergence fmap direct modBearing Double VincentyDirectResult Just VincentyDirectResult Coordinate Latitude DegreesLatitude Minutes Seconds Longitude DegreesLongitude Minutes Seconds Bearing fmap direct modBearing Double VincentyDirectResult Just VincentyDirectResult Coordinate Latitude DegreesLatitude Minutes Seconds Longitude DegreesLongitude Minutes Seconds Bearing",
        "hierarchy": "Data Geo Geodetic Vincenty",
        "module": "Data.Geo.Geodetic.Vincenty",
        "name": "direct'",
        "normalized": "",
        "package": "geodetic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Vincenty.html#v:directD",
      "description": {
        "fct-descr": "\u003cp\u003eVincenty direct algorithm with a default ellipsoid of WGS84 and standard convergence.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (\\c' -\u003e directD c' (modBearing 165.34) 4235) (27.812 ..#.. 154.295)\n\u003c/code\u003e\u003c/strong\u003eJust (VincentyDirectResult (Coordinate (Latitude (DegreesLatitude 27) (Minutes 46) (Seconds 30.0981)) (Longitude (DegreesLongitude 154) (Minutes 18) (Seconds 21.1466))) (Bearing 165.3451))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (\\c' -\u003e directD c' (modBearing 165.34) 4235) ((-66.093) ..#.. 12.84)\n\u003c/code\u003e\u003c/strong\u003eJust (VincentyDirectResult (Coordinate (Latitude (DegreesLatitude (-66)) (Minutes 7) (Seconds 47.0667)) (Longitude (DegreesLongitude 12) (Minutes 51) (Seconds 49.4142))) (Bearing 165.3183))\n\u003c/pre\u003e",
        "fct-module": "Data.Geo.Geodetic.Vincenty",
        "fct-package": "geodetic",
        "fct-signature": "c-\u003e b-\u003e Double-\u003e VincentyDirectResult",
        "fct-type": "function",
        "title": "directD"
      },
      "index": {
        "description": "Vincenty direct algorithm with default ellipsoid of WGS84 and standard convergence fmap directD modBearing Just VincentyDirectResult Coordinate Latitude DegreesLatitude Minutes Seconds Longitude DegreesLongitude Minutes Seconds Bearing fmap directD modBearing Just VincentyDirectResult Coordinate Latitude DegreesLatitude Minutes Seconds Longitude DegreesLongitude Minutes Seconds Bearing",
        "hierarchy": "Data Geo Geodetic Vincenty",
        "module": "Data.Geo.Geodetic.Vincenty",
        "name": "directD",
        "normalized": "a-\u003eb-\u003eDouble-\u003eVincentyDirectResult",
        "package": "geodetic",
        "partial": "",
        "signature": "c-\u003eb-\u003eDouble-\u003eVincentyDirectResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Vincenty.html#v:inverse",
      "description": {
        "fct-descr": "\u003cp\u003eVincenty inverse algorithm.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo fr \u003c- 27.812 ..#.. 154.295; to \u003c- (-66.093) ..#.. 12.84; return (inverse wgs84 convergence fr to)\n\u003c/code\u003e\u003c/strong\u003eJust (GeodeticCurve 14998576.9860 Azimuth 180.0000 Azimuth 0.0000)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo fr \u003c- 27.812 ..#.. 154.295; to \u003c- 87.7769 ..#.. 19.944; return (inverse wgs84 convergence fr to)\n\u003c/code\u003e\u003c/strong\u003eJust (GeodeticCurve 7099204.2589 Azimuth 0.0000 Azimuth 180.0000)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo fr \u003c- 27.812 ..#.. 154.295; to \u003c- (-66.093) ..#.. 12.84; return (inverse ans convergence fr to)\n\u003c/code\u003e\u003c/strong\u003eJust (GeodeticCurve 14998630.4056 Azimuth 180.0000 Azimuth 0.0000)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo fr \u003c- 27.812 ..#.. 154.295; to \u003c- 87.7769 ..#.. 19.944; return (inverse ans convergence fr to)\n\u003c/code\u003e\u003c/strong\u003eJust (GeodeticCurve 7099229.9126 Azimuth 0.0000 Azimuth 180.0000)\n\u003c/pre\u003e",
        "fct-module": "Data.Geo.Geodetic.Vincenty",
        "fct-package": "geodetic",
        "fct-signature": "e-\u003e Convergence-\u003e c1-\u003e c2-\u003e Curve",
        "fct-type": "function",
        "title": "inverse"
      },
      "index": {
        "description": "Vincenty inverse algorithm do fr to return inverse wgs84 convergence fr to Just GeodeticCurve Azimuth Azimuth do fr to return inverse wgs84 convergence fr to Just GeodeticCurve Azimuth Azimuth do fr to return inverse ans convergence fr to Just GeodeticCurve Azimuth Azimuth do fr to return inverse ans convergence fr to Just GeodeticCurve Azimuth Azimuth",
        "hierarchy": "Data Geo Geodetic Vincenty",
        "module": "Data.Geo.Geodetic.Vincenty",
        "name": "inverse",
        "normalized": "a-\u003eConvergence-\u003eb-\u003eb-\u003eCurve",
        "package": "geodetic",
        "partial": "",
        "signature": "e-\u003eConvergence-\u003ec-\u003ec-\u003eCurve"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Vincenty.html#v:inverse-39-",
      "description": {
        "fct-descr": "\u003cp\u003eVincenty inverse algorithm with an optionally applied default ellipsoid of WGS84 and standard convergence.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo fr \u003c- 27.812 ..#.. 154.295; to \u003c- (-66.093) ..#.. 12.84; return (inverse' fr to :: Curve)\n\u003c/code\u003e\u003c/strong\u003eJust (GeodeticCurve 14998576.9860 Azimuth 180.0000 Azimuth 0.0000)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo fr \u003c- 27.812 ..#.. 154.295; to \u003c- 87.7769 ..#.. 19.944; return (inverse' fr to :: Curve)\n\u003c/code\u003e\u003c/strong\u003eJust (GeodeticCurve 7099204.2589 Azimuth 0.0000 Azimuth 180.0000)\n\u003c/pre\u003e",
        "fct-module": "Data.Geo.Geodetic.Vincenty",
        "fct-package": "geodetic",
        "fct-signature": "x",
        "fct-source": "src/Data-Geo-Geodetic-Vincenty.html#inverse%27",
        "fct-type": "function",
        "title": "inverse'"
      },
      "index": {
        "description": "Vincenty inverse algorithm with an optionally applied default ellipsoid of WGS84 and standard convergence do fr to return inverse fr to Curve Just GeodeticCurve Azimuth Azimuth do fr to return inverse fr to Curve Just GeodeticCurve Azimuth Azimuth",
        "hierarchy": "Data Geo Geodetic Vincenty",
        "module": "Data.Geo.Geodetic.Vincenty",
        "name": "inverse'",
        "normalized": "",
        "package": "geodetic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Vincenty.html#v:inverseD",
      "description": {
        "fct-descr": "\u003cp\u003eVincenty inverse algorithm with a default ellipsoid of WGS84 and standard convergence.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo fr \u003c- 27.812 ..#.. 154.295; to \u003c- (-66.093) ..#.. 12.84; return (inverseD fr to)\n\u003c/code\u003e\u003c/strong\u003eJust (GeodeticCurve 14998576.9860 Azimuth 180.0000 Azimuth 0.0000)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo fr \u003c- 27.812 ..#.. 154.295; to \u003c- 87.7769 ..#.. 19.944; return (inverseD fr to)\n\u003c/code\u003e\u003c/strong\u003eJust (GeodeticCurve 7099204.2589 Azimuth 0.0000 Azimuth 180.0000)\n\u003c/pre\u003e",
        "fct-module": "Data.Geo.Geodetic.Vincenty",
        "fct-package": "geodetic",
        "fct-signature": "c1-\u003e c2-\u003e Curve",
        "fct-type": "function",
        "title": "inverseD"
      },
      "index": {
        "description": "Vincenty inverse algorithm with default ellipsoid of WGS84 and standard convergence do fr to return inverseD fr to Just GeodeticCurve Azimuth Azimuth do fr to return inverseD fr to Just GeodeticCurve Azimuth Azimuth",
        "hierarchy": "Data Geo Geodetic Vincenty",
        "module": "Data.Geo.Geodetic.Vincenty",
        "name": "inverseD",
        "normalized": "a-\u003ea-\u003eCurve",
        "package": "geodetic",
        "partial": "",
        "signature": "c-\u003ec-\u003eCurve"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic.html#",
      "description": {
        "fct-module": "Data.Geo.Geodetic",
        "fct-package": "geodetic",
        "fct-signature": "module",
        "fct-source": "src/Data-Geo-Geodetic.html",
        "fct-type": "module",
        "title": "Geodetic"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geo Geodetic",
        "module": "Data.Geo.Geodetic",
        "name": "Geodetic",
        "normalized": "",
        "package": "geodetic",
        "partial": "Geodetic",
        "signature": ""
      }
    }
  }
]