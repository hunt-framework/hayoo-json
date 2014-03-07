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
        "word": "geodetic"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn azimuth in degrees between 0 and 360.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Geo.Geodetic.Azimuth",
          "name": "Azimuth",
          "package": "geodetic",
          "source": "src/Data-Geo-Geodetic-Azimuth.html",
          "type": "module"
        },
        "index": {
          "description": "An azimuth in degrees between and",
          "hierarchy": "Data Geo Geodetic Azimuth",
          "module": "Data.Geo.Geodetic.Azimuth",
          "name": "Azimuth",
          "package": "geodetic",
          "partial": "Azimuth",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Azimuth.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Azimuth",
          "name": "Azimuth",
          "package": "geodetic",
          "source": "src/Data-Geo-Geodetic-Azimuth.html#Azimuth",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Azimuth",
          "module": "Data.Geo.Geodetic.Azimuth",
          "name": "Azimuth",
          "package": "geodetic",
          "partial": "Azimuth",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Azimuth.html#t:Azimuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Azimuth",
          "name": "HasAzimuth",
          "package": "geodetic",
          "source": "src/Data-Geo-Geodetic-Azimuth.html#HasAzimuth",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Azimuth",
          "module": "Data.Geo.Geodetic.Azimuth",
          "name": "HasAzimuth",
          "package": "geodetic",
          "partial": "Has Azimuth",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Azimuth.html#t:HasAzimuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Azimuth",
          "name": "azimuth",
          "package": "geodetic",
          "signature": "Lens' t Azimuth",
          "source": "src/Data-Geo-Geodetic-Azimuth.html#azimuth",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Azimuth",
          "module": "Data.Geo.Geodetic.Azimuth",
          "name": "azimuth",
          "package": "geodetic",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Azimuth.html#v:azimuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an azimuth such that if the given value is out of bounds,\n a modulus is taken to keep it within 0 inclusive and 360 exclusive.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodAzimuth 7\n\u003c/code\u003e\u003c/strong\u003eAzimuth 7.0000\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodAzimuth 0\n\u003c/code\u003e\u003c/strong\u003eAzimuth 0.0000\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodAzimuth 360\n\u003c/code\u003e\u003c/strong\u003eAzimuth 0.0000\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodAzimuth 361\n\u003c/code\u003e\u003c/strong\u003eAzimuth 1.0000\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodAzimuth 359.999\n\u003c/code\u003e\u003c/strong\u003eAzimuth 359.9990\n\u003c/pre\u003e",
          "module": "Data.Geo.Geodetic.Azimuth",
          "name": "modAzimuth",
          "package": "geodetic",
          "signature": "Double -\u003e Azimuth",
          "source": "src/Data-Geo-Geodetic-Azimuth.html#modAzimuth",
          "type": "function"
        },
        "index": {
          "description": "Construct an azimuth such that if the given value is out of bounds modulus is taken to keep it within inclusive and exclusive modAzimuth Azimuth modAzimuth Azimuth modAzimuth Azimuth modAzimuth Azimuth modAzimuth Azimuth",
          "hierarchy": "Data Geo Geodetic Azimuth",
          "module": "Data.Geo.Geodetic.Azimuth",
          "name": "modAzimuth",
          "normalized": "Double-\u003eAzimuth",
          "package": "geodetic",
          "partial": "Azimuth",
          "signature": "Double-\u003eAzimuth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Azimuth.html#v:modAzimuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA prism on azimuth to an integer between 0 and 359 inclusive.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e7 ^? nAzimuth\n\u003c/code\u003e\u003c/strong\u003eJust (Azimuth 7.0000)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e0 ^? nAzimuth\n\u003c/code\u003e\u003c/strong\u003eJust (Azimuth 0.0000)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e359.999 ^? nAzimuth\n\u003c/code\u003e\u003c/strong\u003eJust (Azimuth 359.9990)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e360 ^? nAzimuth\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre\u003eall (\\m -\u003e nAzimuth # m == n) (n ^? nAzimuth)\u003c/pre\u003e",
          "module": "Data.Geo.Geodetic.Azimuth",
          "name": "nAzimuth",
          "package": "geodetic",
          "signature": "Prism' Double Azimuth",
          "source": "src/Data-Geo-Geodetic-Azimuth.html#nAzimuth",
          "type": "function"
        },
        "index": {
          "description": "prism on azimuth to an integer between and inclusive nAzimuth Just Azimuth nAzimuth Just Azimuth nAzimuth Just Azimuth nAzimuth Nothing all nAzimuth nAzimuth",
          "hierarchy": "Data Geo Geodetic Azimuth",
          "module": "Data.Geo.Geodetic.Azimuth",
          "name": "nAzimuth",
          "package": "geodetic",
          "partial": "Azimuth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Azimuth.html#v:nAzimuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA bearing in degrees between 0 and 360.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Geo.Geodetic.Bearing",
          "name": "Bearing",
          "package": "geodetic",
          "source": "src/Data-Geo-Geodetic-Bearing.html",
          "type": "module"
        },
        "index": {
          "description": "bearing in degrees between and",
          "hierarchy": "Data Geo Geodetic Bearing",
          "module": "Data.Geo.Geodetic.Bearing",
          "name": "Bearing",
          "package": "geodetic",
          "partial": "Bearing",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Bearing.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Bearing",
          "name": "Bearing",
          "package": "geodetic",
          "source": "src/Data-Geo-Geodetic-Bearing.html#Bearing",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Bearing",
          "module": "Data.Geo.Geodetic.Bearing",
          "name": "Bearing",
          "package": "geodetic",
          "partial": "Bearing",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Bearing.html#t:Bearing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Bearing",
          "name": "HasBearing",
          "package": "geodetic",
          "source": "src/Data-Geo-Geodetic-Bearing.html#HasBearing",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Bearing",
          "module": "Data.Geo.Geodetic.Bearing",
          "name": "HasBearing",
          "package": "geodetic",
          "partial": "Has Bearing",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Bearing.html#t:HasBearing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Bearing",
          "name": "bearing",
          "package": "geodetic",
          "signature": "Lens' t Bearing",
          "source": "src/Data-Geo-Geodetic-Bearing.html#bearing",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Bearing",
          "module": "Data.Geo.Geodetic.Bearing",
          "name": "bearing",
          "package": "geodetic",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Bearing.html#v:bearing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA prism on bearing to a double between 0 inclusive and 360 exclusive.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e7 ^? degreeBearing\n\u003c/code\u003e\u003c/strong\u003eJust (Bearing 7.0000)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e0 ^? degreeBearing\n\u003c/code\u003e\u003c/strong\u003eJust (Bearing 0.0000)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e359 ^? degreeBearing\n\u003c/code\u003e\u003c/strong\u003eJust (Bearing 359.0000)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e359.997 ^? degreeBearing\n\u003c/code\u003e\u003c/strong\u003eJust (Bearing 359.9970)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e360 ^? degreeBearing\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre\u003eall (\\m -\u003e degreeBearing # m == n) (n ^? degreeBearing)\u003c/pre\u003e",
          "module": "Data.Geo.Geodetic.Bearing",
          "name": "degreeBearing",
          "package": "geodetic",
          "signature": "Prism' Double Bearing",
          "source": "src/Data-Geo-Geodetic-Bearing.html#degreeBearing",
          "type": "function"
        },
        "index": {
          "description": "prism on bearing to double between inclusive and exclusive degreeBearing Just Bearing degreeBearing Just Bearing degreeBearing Just Bearing degreeBearing Just Bearing degreeBearing Nothing all degreeBearing degreeBearing",
          "hierarchy": "Data Geo Geodetic Bearing",
          "module": "Data.Geo.Geodetic.Bearing",
          "name": "degreeBearing",
          "package": "geodetic",
          "partial": "Bearing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Bearing.html#v:degreeBearing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a bearing such that if the given value is out of bounds,\n a modulus is taken to keep it within 0 inclusive and 360 exclusive.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodBearing 7\n\u003c/code\u003e\u003c/strong\u003eBearing 7.0000\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodBearing 0\n\u003c/code\u003e\u003c/strong\u003eBearing 0.0000\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodBearing (-0.0001)\n\u003c/code\u003e\u003c/strong\u003eBearing 359.9999\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodBearing 360\n\u003c/code\u003e\u003c/strong\u003eBearing 0.0000\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodBearing 359.99999\n\u003c/code\u003e\u003c/strong\u003eBearing 360.0000\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodBearing 359.999\n\u003c/code\u003e\u003c/strong\u003eBearing 359.9990\n\u003c/pre\u003e",
          "module": "Data.Geo.Geodetic.Bearing",
          "name": "modBearing",
          "package": "geodetic",
          "signature": "Double -\u003e Bearing",
          "source": "src/Data-Geo-Geodetic-Bearing.html#modBearing",
          "type": "function"
        },
        "index": {
          "description": "Construct bearing such that if the given value is out of bounds modulus is taken to keep it within inclusive and exclusive modBearing Bearing modBearing Bearing modBearing Bearing modBearing Bearing modBearing Bearing modBearing Bearing",
          "hierarchy": "Data Geo Geodetic Bearing",
          "module": "Data.Geo.Geodetic.Bearing",
          "name": "modBearing",
          "normalized": "Double-\u003eBearing",
          "package": "geodetic",
          "partial": "Bearing",
          "signature": "Double-\u003eBearing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Bearing.html#v:modBearing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA prism on bearing to a double between 0 and &#960; exclusive.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(2 * pi - 0.0000000001) ^? radianBearing\n\u003c/code\u003e\u003c/strong\u003eJust (Bearing 360.0000)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e0 ^? radianBearing\n\u003c/code\u003e\u003c/strong\u003eJust (Bearing 0.0000)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e0.001 ^? radianBearing\n\u003c/code\u003e\u003c/strong\u003eJust (Bearing 0.0573)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e1.78391 ^? radianBearing\n\u003c/code\u003e\u003c/strong\u003eJust (Bearing 102.2105)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003epi ^? radianBearing\n\u003c/code\u003e\u003c/strong\u003eJust (Bearing 180.0000)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(2 * pi) ^? radianBearing\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(-0.001) ^? radianBearing\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e",
          "module": "Data.Geo.Geodetic.Bearing",
          "name": "radianBearing",
          "package": "geodetic",
          "signature": "Prism' Double Bearing",
          "source": "src/Data-Geo-Geodetic-Bearing.html#radianBearing",
          "type": "function"
        },
        "index": {
          "description": "prism on bearing to double between and exclusive pi radianBearing Just Bearing radianBearing Just Bearing radianBearing Just Bearing radianBearing Just Bearing pi radianBearing Just Bearing pi radianBearing Nothing radianBearing Nothing",
          "hierarchy": "Data Geo Geodetic Bearing",
          "module": "Data.Geo.Geodetic.Bearing",
          "name": "radianBearing",
          "package": "geodetic",
          "partial": "Bearing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Bearing.html#v:radianBearing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA geodetic curve is made of a distance in metres, an azimuth and a reverse azimuth.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Geo.Geodetic.Curve",
          "name": "Curve",
          "package": "geodetic",
          "source": "src/Data-Geo-Geodetic-Curve.html",
          "type": "module"
        },
        "index": {
          "description": "geodetic curve is made of distance in metres an azimuth and reverse azimuth",
          "hierarchy": "Data Geo Geodetic Curve",
          "module": "Data.Geo.Geodetic.Curve",
          "name": "Curve",
          "package": "geodetic",
          "partial": "Curve",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Curve.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Curve",
          "name": "Curve",
          "package": "geodetic",
          "source": "src/Data-Geo-Geodetic-Curve.html#Curve",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Curve",
          "module": "Data.Geo.Geodetic.Curve",
          "name": "Curve",
          "package": "geodetic",
          "partial": "Curve",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Curve.html#t:Curve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a geodetic curve with the given parameters.\n\u003c/p\u003e",
          "module": "Data.Geo.Geodetic.Curve",
          "name": "curve",
          "package": "geodetic",
          "signature": "Double-\u003e Azimuth-\u003e Azimuth-\u003e Curve",
          "type": "function"
        },
        "index": {
          "description": "Construct geodetic curve with the given parameters",
          "hierarchy": "Data Geo Geodetic Curve",
          "module": "Data.Geo.Geodetic.Curve",
          "name": "curve",
          "normalized": "Double-\u003eAzimuth-\u003eAzimuth-\u003eCurve",
          "package": "geodetic",
          "signature": "Double-\u003eAzimuth-\u003eAzimuth-\u003eCurve",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Curve.html#v:curve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Curve",
          "name": "curveAzimuth",
          "package": "geodetic",
          "signature": "Lens' Curve Azimuth",
          "source": "src/Data-Geo-Geodetic-Curve.html#curveAzimuth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Curve",
          "module": "Data.Geo.Geodetic.Curve",
          "name": "curveAzimuth",
          "package": "geodetic",
          "partial": "Azimuth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Curve.html#v:curveAzimuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Curve",
          "name": "curveDistance",
          "package": "geodetic",
          "signature": "Lens' Curve Double",
          "source": "src/Data-Geo-Geodetic-Curve.html#curveDistance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Curve",
          "module": "Data.Geo.Geodetic.Curve",
          "name": "curveDistance",
          "package": "geodetic",
          "partial": "Distance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Curve.html#v:curveDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Curve",
          "name": "curveReverseAzimuth",
          "package": "geodetic",
          "signature": "Lens' Curve Azimuth",
          "source": "src/Data-Geo-Geodetic-Curve.html#curveReverseAzimuth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Curve",
          "module": "Data.Geo.Geodetic.Curve",
          "name": "curveReverseAzimuth",
          "package": "geodetic",
          "partial": "Reverse Azimuth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Curve.html#v:curveReverseAzimuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "Ellipsoid",
          "package": "geodetic",
          "source": "src/Data-Geo-Geodetic-Ellipsoid.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Ellipsoid",
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "Ellipsoid",
          "package": "geodetic",
          "partial": "Ellipsoid",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "Ellipsoid",
          "package": "geodetic",
          "source": "src/Data-Geo-Geodetic-Ellipsoid.html#Ellipsoid",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Ellipsoid",
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "Ellipsoid",
          "package": "geodetic",
          "partial": "Ellipsoid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#t:Ellipsoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "HasEllipsoid",
          "package": "geodetic",
          "source": "src/Data-Geo-Geodetic-Ellipsoid.html#HasEllipsoid",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Ellipsoid",
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "HasEllipsoid",
          "package": "geodetic",
          "partial": "Has Ellipsoid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#t:HasEllipsoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "HasFlattening",
          "package": "geodetic",
          "source": "src/Data-Geo-Geodetic-Ellipsoid.html#HasFlattening",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Ellipsoid",
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "HasFlattening",
          "package": "geodetic",
          "partial": "Has Flattening",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#t:HasFlattening"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "HasInverseFlattening",
          "package": "geodetic",
          "source": "src/Data-Geo-Geodetic-Ellipsoid.html#HasInverseFlattening",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Ellipsoid",
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "HasInverseFlattening",
          "package": "geodetic",
          "partial": "Has Inverse Flattening",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#t:HasInverseFlattening"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "HasSemiMajor",
          "package": "geodetic",
          "source": "src/Data-Geo-Geodetic-Ellipsoid.html#HasSemiMajor",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Ellipsoid",
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "HasSemiMajor",
          "package": "geodetic",
          "partial": "Has Semi Major",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#t:HasSemiMajor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "HasSemiMinor",
          "package": "geodetic",
          "source": "src/Data-Geo-Geodetic-Ellipsoid.html#HasSemiMinor",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Ellipsoid",
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "HasSemiMinor",
          "package": "geodetic",
          "partial": "Has Semi Minor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#t:HasSemiMinor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "airy1830",
          "package": "geodetic",
          "signature": "Ellipsoid",
          "source": "src/Data-Geo-Geodetic-Ellipsoid.html#airy1830",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Ellipsoid",
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "airy1830",
          "package": "geodetic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:airy1830"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "ans",
          "package": "geodetic",
          "signature": "Ellipsoid",
          "source": "src/Data-Geo-Geodetic-Ellipsoid.html#ans",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Ellipsoid",
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "ans",
          "package": "geodetic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:ans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "au1965",
          "package": "geodetic",
          "signature": "Ellipsoid",
          "source": "src/Data-Geo-Geodetic-Ellipsoid.html#au1965",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Ellipsoid",
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "au1965",
          "package": "geodetic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:au1965"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "bessel1841",
          "package": "geodetic",
          "signature": "Ellipsoid",
          "source": "src/Data-Geo-Geodetic-Ellipsoid.html#bessel1841",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Ellipsoid",
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "bessel1841",
          "package": "geodetic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:bessel1841"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "clarke1858",
          "package": "geodetic",
          "signature": "Ellipsoid",
          "source": "src/Data-Geo-Geodetic-Ellipsoid.html#clarke1858",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Ellipsoid",
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "clarke1858",
          "package": "geodetic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:clarke1858"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "clarke1866",
          "package": "geodetic",
          "signature": "Ellipsoid",
          "source": "src/Data-Geo-Geodetic-Ellipsoid.html#clarke1866",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Ellipsoid",
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "clarke1866",
          "package": "geodetic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:clarke1866"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "clarke1880",
          "package": "geodetic",
          "signature": "Ellipsoid",
          "source": "src/Data-Geo-Geodetic-Ellipsoid.html#clarke1880",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Ellipsoid",
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "clarke1880",
          "package": "geodetic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:clarke1880"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "ellipsoid",
          "package": "geodetic",
          "signature": "Lens' t Ellipsoid",
          "source": "src/Data-Geo-Geodetic-Ellipsoid.html#ellipsoid",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Ellipsoid",
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "ellipsoid",
          "package": "geodetic",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:ellipsoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "everest1830",
          "package": "geodetic",
          "signature": "Ellipsoid",
          "source": "src/Data-Geo-Geodetic-Ellipsoid.html#everest1830",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Ellipsoid",
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "everest1830",
          "package": "geodetic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:everest1830"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "flattening",
          "package": "geodetic",
          "signature": "Lens' t Double",
          "source": "src/Data-Geo-Geodetic-Ellipsoid.html#flattening",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Ellipsoid",
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "flattening",
          "package": "geodetic",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:flattening"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "grs67",
          "package": "geodetic",
          "signature": "Ellipsoid",
          "source": "src/Data-Geo-Geodetic-Ellipsoid.html#grs67",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Ellipsoid",
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "grs67",
          "package": "geodetic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:grs67"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "grs80",
          "package": "geodetic",
          "signature": "Ellipsoid",
          "source": "src/Data-Geo-Geodetic-Ellipsoid.html#grs80",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Ellipsoid",
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "grs80",
          "package": "geodetic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:grs80"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "hayford1909",
          "package": "geodetic",
          "signature": "Ellipsoid",
          "source": "src/Data-Geo-Geodetic-Ellipsoid.html#hayford1909",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Ellipsoid",
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "hayford1909",
          "package": "geodetic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:hayford1909"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "international1924",
          "package": "geodetic",
          "signature": "Ellipsoid",
          "source": "src/Data-Geo-Geodetic-Ellipsoid.html#international1924",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Ellipsoid",
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "international1924",
          "package": "geodetic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:international1924"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "inverseFlattening",
          "package": "geodetic",
          "signature": "Lens' t Double",
          "source": "src/Data-Geo-Geodetic-Ellipsoid.html#inverseFlattening",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Ellipsoid",
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "inverseFlattening",
          "package": "geodetic",
          "partial": "Flattening",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:inverseFlattening"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "krasovsky1940",
          "package": "geodetic",
          "signature": "Ellipsoid",
          "source": "src/Data-Geo-Geodetic-Ellipsoid.html#krasovsky1940",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Ellipsoid",
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "krasovsky1940",
          "package": "geodetic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:krasovsky1940"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "semiMajor",
          "package": "geodetic",
          "signature": "Lens' t Double",
          "source": "src/Data-Geo-Geodetic-Ellipsoid.html#semiMajor",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Ellipsoid",
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "semiMajor",
          "package": "geodetic",
          "partial": "Major",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:semiMajor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "semiMajorFlattening",
          "package": "geodetic",
          "signature": "Double-\u003e Double-\u003e Ellipsoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Ellipsoid",
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "semiMajorFlattening",
          "normalized": "Double-\u003eDouble-\u003eEllipsoid",
          "package": "geodetic",
          "partial": "Major Flattening",
          "signature": "Double-\u003eDouble-\u003eEllipsoid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:semiMajorFlattening"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "semiMajorInverseFlattening",
          "package": "geodetic",
          "signature": "Double-\u003e Double-\u003e Ellipsoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Ellipsoid",
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "semiMajorInverseFlattening",
          "normalized": "Double-\u003eDouble-\u003eEllipsoid",
          "package": "geodetic",
          "partial": "Major Inverse Flattening",
          "signature": "Double-\u003eDouble-\u003eEllipsoid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:semiMajorInverseFlattening"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "semiMinor",
          "package": "geodetic",
          "signature": "Lens' t Double",
          "source": "src/Data-Geo-Geodetic-Ellipsoid.html#semiMinor",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Ellipsoid",
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "semiMinor",
          "package": "geodetic",
          "partial": "Minor",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:semiMinor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "semiMinorFlattening",
          "package": "geodetic",
          "signature": "Double-\u003e Double-\u003e Ellipsoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Ellipsoid",
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "semiMinorFlattening",
          "normalized": "Double-\u003eDouble-\u003eEllipsoid",
          "package": "geodetic",
          "partial": "Minor Flattening",
          "signature": "Double-\u003eDouble-\u003eEllipsoid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:semiMinorFlattening"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "semiMinorInverseFlattening",
          "package": "geodetic",
          "signature": "Double-\u003e Double-\u003e Ellipsoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Ellipsoid",
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "semiMinorInverseFlattening",
          "normalized": "Double-\u003eDouble-\u003eEllipsoid",
          "package": "geodetic",
          "partial": "Minor Inverse Flattening",
          "signature": "Double-\u003eDouble-\u003eEllipsoid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:semiMinorInverseFlattening"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "wgs72",
          "package": "geodetic",
          "signature": "Ellipsoid",
          "source": "src/Data-Geo-Geodetic-Ellipsoid.html#wgs72",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Ellipsoid",
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "wgs72",
          "package": "geodetic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:wgs72"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "wgs84",
          "package": "geodetic",
          "signature": "Ellipsoid",
          "source": "src/Data-Geo-Geodetic-Ellipsoid.html#wgs84",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Ellipsoid",
          "module": "Data.Geo.Geodetic.Ellipsoid",
          "name": "wgs84",
          "package": "geodetic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Ellipsoid.html#v:wgs84"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGreat circle geodetic distance algorithm.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Geo.Geodetic.GreatCircle",
          "name": "GreatCircle",
          "package": "geodetic",
          "source": "src/Data-Geo-Geodetic-GreatCircle.html",
          "type": "module"
        },
        "index": {
          "description": "Great circle geodetic distance algorithm",
          "hierarchy": "Data Geo Geodetic GreatCircle",
          "module": "Data.Geo.Geodetic.GreatCircle",
          "name": "GreatCircle",
          "package": "geodetic",
          "partial": "Great Circle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-GreatCircle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGreat circle spherical law algorithm.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- 27.812 ..#.. 154.295; to \u003c- (-66.093) ..#.. 12.84; return (sphericalLaw earthMean fr to)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"15000950.5589\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- (-16.7889) ..#.. 41.935; to \u003c- 6.933 ..#.. (-162.55); return (sphericalLaw earthMean fr to)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"17128743.0669\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- 27.812 ..#.. 154.295; to \u003c- (-66.093) ..#.. 12.84; return (sphericalLaw (6350000 ^. nSphere) fr to)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"14959840.4461\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- (-16.7889) ..#.. 41.935; to \u003c- 6.933 ..#.. (-162.55); return (sphericalLaw (6350000 ^. nSphere) fr to)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"17081801.7377\"\n\u003c/pre\u003e",
          "module": "Data.Geo.Geodetic.GreatCircle",
          "name": "sphericalLaw",
          "package": "geodetic",
          "signature": "Sphere-\u003e c1-\u003e c2-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "Great circle spherical law algorithm fmap printf do fr to return sphericalLaw earthMean fr to Maybe String Just fmap printf do fr to return sphericalLaw earthMean fr to Maybe String Just fmap printf do fr to return sphericalLaw nSphere fr to Maybe String Just fmap printf do fr to return sphericalLaw nSphere fr to Maybe String Just",
          "hierarchy": "Data Geo Geodetic GreatCircle",
          "module": "Data.Geo.Geodetic.GreatCircle",
          "name": "sphericalLaw",
          "normalized": "Sphere-\u003ea-\u003ea-\u003eDouble",
          "package": "geodetic",
          "partial": "Law",
          "signature": "Sphere-\u003ec-\u003ec-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-GreatCircle.html#v:sphericalLaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGreat circle spherical law algorithm with an optionally applied default sphere of the earth mean.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- 27.812 ..#.. 154.295; to \u003c- (-66.093) ..#.. 12.84; return (sphericalLaw' fr to :: Double)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"15000950.5589\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- (-16.7889) ..#.. 41.935; to \u003c- 6.933 ..#.. (-162.55); return (sphericalLaw' fr to :: Double)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"17128743.0669\"\n\u003c/pre\u003e",
          "module": "Data.Geo.Geodetic.GreatCircle",
          "name": "sphericalLaw'",
          "package": "geodetic",
          "signature": "x",
          "source": "src/Data-Geo-Geodetic-GreatCircle.html#sphericalLaw%27",
          "type": "function"
        },
        "index": {
          "description": "Great circle spherical law algorithm with an optionally applied default sphere of the earth mean fmap printf do fr to return sphericalLaw fr to Double Maybe String Just fmap printf do fr to return sphericalLaw fr to Double Maybe String Just",
          "hierarchy": "Data Geo Geodetic GreatCircle",
          "module": "Data.Geo.Geodetic.GreatCircle",
          "name": "sphericalLaw'",
          "package": "geodetic",
          "partial": "Law'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-GreatCircle.html#v:sphericalLaw-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGreat circle spherical law algorithm with a default sphere of the earth mean.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- 27.812 ..#.. 154.295; to \u003c- (-66.093) ..#.. 12.84; return (sphericalLawD fr to)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"15000950.5589\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- (-16.7889) ..#.. 41.935; to \u003c- 6.933 ..#.. (-162.55); return (sphericalLawD fr to)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"17128743.0669\"\n\u003c/pre\u003e",
          "module": "Data.Geo.Geodetic.GreatCircle",
          "name": "sphericalLawD",
          "package": "geodetic",
          "signature": "c1-\u003e c2-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "Great circle spherical law algorithm with default sphere of the earth mean fmap printf do fr to return sphericalLawD fr to Maybe String Just fmap printf do fr to return sphericalLawD fr to Maybe String Just",
          "hierarchy": "Data Geo Geodetic GreatCircle",
          "module": "Data.Geo.Geodetic.GreatCircle",
          "name": "sphericalLawD",
          "normalized": "a-\u003ea-\u003eDouble",
          "package": "geodetic",
          "partial": "Law",
          "signature": "c-\u003ec-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-GreatCircle.html#v:sphericalLawD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHaversine geodetic distance algorithm.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Geo.Geodetic.Haversine",
          "name": "Haversine",
          "package": "geodetic",
          "source": "src/Data-Geo-Geodetic-Haversine.html",
          "type": "module"
        },
        "index": {
          "description": "Haversine geodetic distance algorithm",
          "hierarchy": "Data Geo Geodetic Haversine",
          "module": "Data.Geo.Geodetic.Haversine",
          "name": "Haversine",
          "package": "geodetic",
          "partial": "Haversine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Haversine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaversine algorithm.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- 27.812 ..#.. 154.295; to \u003c- (-66.093) ..#.. 12.84; return (haversine earthMean fr to)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"15000950.5589\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- (-16.7889) ..#.. 41.935; to \u003c- 6.933 ..#.. (-162.55); return (haversine earthMean fr to)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"17128743.0669\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- 27.812 ..#.. 154.295; to \u003c- (-66.093) ..#.. 12.84; return (haversine (6350000 ^. nSphere) fr to)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"14959840.4461\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- (-16.7889) ..#.. 41.935; to \u003c- 6.933 ..#.. (-162.55); return (haversine (6350000 ^. nSphere) fr to)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"17081801.7377\"\n\u003c/pre\u003e",
          "module": "Data.Geo.Geodetic.Haversine",
          "name": "haversine",
          "package": "geodetic",
          "signature": "Sphere-\u003e c1-\u003e c2-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "Haversine algorithm fmap printf do fr to return haversine earthMean fr to Maybe String Just fmap printf do fr to return haversine earthMean fr to Maybe String Just fmap printf do fr to return haversine nSphere fr to Maybe String Just fmap printf do fr to return haversine nSphere fr to Maybe String Just",
          "hierarchy": "Data Geo Geodetic Haversine",
          "module": "Data.Geo.Geodetic.Haversine",
          "name": "haversine",
          "normalized": "Sphere-\u003ea-\u003ea-\u003eDouble",
          "package": "geodetic",
          "signature": "Sphere-\u003ec-\u003ec-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Haversine.html#v:haversine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaversine algorithm with an optionally applied default sphere of the earth mean.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- 27.812 ..#.. 154.295; to \u003c- (-66.093) ..#.. 12.84; return (haversine' fr to :: Double)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"15000950.5589\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- (-16.7889) ..#.. 41.935; to \u003c- 6.933 ..#.. (-162.55); return (haversine' fr to :: Double)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"17128743.0669\"\n\u003c/pre\u003e",
          "module": "Data.Geo.Geodetic.Haversine",
          "name": "haversine'",
          "package": "geodetic",
          "signature": "x",
          "source": "src/Data-Geo-Geodetic-Haversine.html#haversine%27",
          "type": "function"
        },
        "index": {
          "description": "Haversine algorithm with an optionally applied default sphere of the earth mean fmap printf do fr to return haversine fr to Double Maybe String Just fmap printf do fr to return haversine fr to Double Maybe String Just",
          "hierarchy": "Data Geo Geodetic Haversine",
          "module": "Data.Geo.Geodetic.Haversine",
          "name": "haversine'",
          "package": "geodetic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Haversine.html#v:haversine-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaversine algorithm with a default sphere of the earth mean.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- 27.812 ..#.. 154.295; to \u003c- (-66.093) ..#.. 12.84; return (haversineD fr to)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"15000950.5589\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (printf \"%0.4f\") (do fr \u003c- (-16.7889) ..#.. 41.935; to \u003c- 6.933 ..#.. (-162.55); return (haversineD fr to)) :: Maybe String\n\u003c/code\u003e\u003c/strong\u003eJust \"17128743.0669\"\n\u003c/pre\u003e",
          "module": "Data.Geo.Geodetic.Haversine",
          "name": "haversineD",
          "package": "geodetic",
          "signature": "c1-\u003e c2-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "Haversine algorithm with default sphere of the earth mean fmap printf do fr to return haversineD fr to Maybe String Just fmap printf do fr to return haversineD fr to Maybe String Just",
          "hierarchy": "Data Geo Geodetic Haversine",
          "module": "Data.Geo.Geodetic.Haversine",
          "name": "haversineD",
          "normalized": "a-\u003ea-\u003eDouble",
          "package": "geodetic",
          "signature": "c-\u003ec-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Haversine.html#v:haversineD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA sphere with a radius in metres.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Geo.Geodetic.Sphere",
          "name": "Sphere",
          "package": "geodetic",
          "source": "src/Data-Geo-Geodetic-Sphere.html",
          "type": "module"
        },
        "index": {
          "description": "sphere with radius in metres",
          "hierarchy": "Data Geo Geodetic Sphere",
          "module": "Data.Geo.Geodetic.Sphere",
          "name": "Sphere",
          "package": "geodetic",
          "partial": "Sphere",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Sphere.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Sphere",
          "name": "HasSphere",
          "package": "geodetic",
          "source": "src/Data-Geo-Geodetic-Sphere.html#HasSphere",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Sphere",
          "module": "Data.Geo.Geodetic.Sphere",
          "name": "HasSphere",
          "package": "geodetic",
          "partial": "Has Sphere",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Sphere.html#t:HasSphere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Sphere",
          "name": "Sphere",
          "package": "geodetic",
          "source": "src/Data-Geo-Geodetic-Sphere.html#Sphere",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Sphere",
          "module": "Data.Geo.Geodetic.Sphere",
          "name": "Sphere",
          "package": "geodetic",
          "partial": "Sphere",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Sphere.html#t:Sphere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Sphere",
          "name": "earthMean",
          "package": "geodetic",
          "signature": "Sphere",
          "source": "src/Data-Geo-Geodetic-Sphere.html#earthMean",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Sphere",
          "module": "Data.Geo.Geodetic.Sphere",
          "name": "earthMean",
          "package": "geodetic",
          "partial": "Mean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Sphere.html#v:earthMean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn isomorphism on sphere to a double.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e7 ^. nSphere\n\u003c/code\u003e\u003c/strong\u003eSphere 7.0000\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e0 ^. nSphere\n\u003c/code\u003e\u003c/strong\u003eSphere 0.0000\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(-7) ^. nSphere\n\u003c/code\u003e\u003c/strong\u003eSphere -7.0000\n\u003c/pre\u003e",
          "module": "Data.Geo.Geodetic.Sphere",
          "name": "nSphere",
          "package": "geodetic",
          "signature": "Iso' Double Sphere",
          "source": "src/Data-Geo-Geodetic-Sphere.html#nSphere",
          "type": "function"
        },
        "index": {
          "description": "An isomorphism on sphere to double nSphere Sphere nSphere Sphere nSphere Sphere",
          "hierarchy": "Data Geo Geodetic Sphere",
          "module": "Data.Geo.Geodetic.Sphere",
          "name": "nSphere",
          "package": "geodetic",
          "partial": "Sphere",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Sphere.html#v:nSphere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Sphere",
          "name": "sphere",
          "package": "geodetic",
          "signature": "Lens' t Sphere",
          "source": "src/Data-Geo-Geodetic-Sphere.html#sphere",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Sphere",
          "module": "Data.Geo.Geodetic.Sphere",
          "name": "sphere",
          "package": "geodetic",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Sphere.html#v:sphere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of Thaddeus Vincenty's direct and inverse geodetic algorithms. \u003ca\u003ehttp://www.ngs.noaa.gov/PUBS_LIB/inverse.pdf\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Geo.Geodetic.Vincenty",
          "name": "Vincenty",
          "package": "geodetic",
          "source": "src/Data-Geo-Geodetic-Vincenty.html",
          "type": "module"
        },
        "index": {
          "description": "An implementation of Thaddeus Vincenty direct and inverse geodetic algorithms http www.ngs.noaa.gov PUBS LIB inverse.pdf",
          "hierarchy": "Data Geo Geodetic Vincenty",
          "module": "Data.Geo.Geodetic.Vincenty",
          "name": "Vincenty",
          "package": "geodetic",
          "partial": "Vincenty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Vincenty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Vincenty",
          "name": "Convergence",
          "package": "geodetic",
          "source": "src/Data-Geo-Geodetic-Vincenty.html#Convergence",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Vincenty",
          "module": "Data.Geo.Geodetic.Vincenty",
          "name": "Convergence",
          "package": "geodetic",
          "partial": "Convergence",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Vincenty.html#t:Convergence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic.Vincenty",
          "name": "VincentyDirectResult",
          "package": "geodetic",
          "source": "src/Data-Geo-Geodetic-Vincenty.html#VincentyDirectResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic Vincenty",
          "module": "Data.Geo.Geodetic.Vincenty",
          "name": "VincentyDirectResult",
          "package": "geodetic",
          "partial": "Vincenty Direct Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Vincenty.html#t:VincentyDirectResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA typically acceptable convergence value.\n\u003c/p\u003e",
          "module": "Data.Geo.Geodetic.Vincenty",
          "name": "convergence",
          "package": "geodetic",
          "signature": "Convergence",
          "source": "src/Data-Geo-Geodetic-Vincenty.html#convergence",
          "type": "function"
        },
        "index": {
          "description": "typically acceptable convergence value",
          "hierarchy": "Data Geo Geodetic Vincenty",
          "module": "Data.Geo.Geodetic.Vincenty",
          "name": "convergence",
          "package": "geodetic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Vincenty.html#v:convergence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVincenty direct algorithm.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (\\c' -\u003e direct wgs84 convergence c' (modBearing 165.34) 4235) (27.812 ..#.. 154.295)\n\u003c/code\u003e\u003c/strong\u003eJust (VincentyDirectResult (Coordinate (Latitude (DegreesLatitude 27) (Minutes 46) (Seconds 30.0981)) (Longitude (DegreesLongitude 154) (Minutes 18) (Seconds 21.1466))) (Bearing 165.3451))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (\\c' -\u003e direct wgs84 convergence c' (modBearing 165.34) 4235) ((-66.093) ..#.. 12.84)\n\u003c/code\u003e\u003c/strong\u003eJust (VincentyDirectResult (Coordinate (Latitude (DegreesLatitude (-66)) (Minutes 7) (Seconds 47.0667)) (Longitude (DegreesLongitude 12) (Minutes 51) (Seconds 49.4142))) (Bearing 165.3183))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (\\c' -\u003e direct ans convergence c' (modBearing 165.34) 4235) (27.812 ..#.. 154.295)\n\u003c/code\u003e\u003c/strong\u003eJust (VincentyDirectResult (Coordinate (Latitude (DegreesLatitude 27) (Minutes 46) (Seconds 30.0986)) (Longitude (DegreesLongitude 154) (Minutes 18) (Seconds 21.1464))) (Bearing 165.3451))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (\\c' -\u003e direct ans convergence c' (modBearing 165.34) 4235) ((-66.093) ..#.. 12.84)\n\u003c/code\u003e\u003c/strong\u003eJust (VincentyDirectResult (Coordinate (Latitude (DegreesLatitude (-66)) (Minutes 7) (Seconds 47.0662)) (Longitude (DegreesLongitude 12) (Minutes 51) (Seconds 49.4139))) (Bearing 165.3183))\n\u003c/pre\u003e",
          "module": "Data.Geo.Geodetic.Vincenty",
          "name": "direct",
          "package": "geodetic",
          "signature": "e-\u003e Convergence-\u003e c-\u003e b-\u003e Double-\u003e VincentyDirectResult",
          "type": "function"
        },
        "index": {
          "description": "Vincenty direct algorithm fmap direct wgs84 convergence modBearing Just VincentyDirectResult Coordinate Latitude DegreesLatitude Minutes Seconds Longitude DegreesLongitude Minutes Seconds Bearing fmap direct wgs84 convergence modBearing Just VincentyDirectResult Coordinate Latitude DegreesLatitude Minutes Seconds Longitude DegreesLongitude Minutes Seconds Bearing fmap direct ans convergence modBearing Just VincentyDirectResult Coordinate Latitude DegreesLatitude Minutes Seconds Longitude DegreesLongitude Minutes Seconds Bearing fmap direct ans convergence modBearing Just VincentyDirectResult Coordinate Latitude DegreesLatitude Minutes Seconds Longitude DegreesLongitude Minutes Seconds Bearing",
          "hierarchy": "Data Geo Geodetic Vincenty",
          "module": "Data.Geo.Geodetic.Vincenty",
          "name": "direct",
          "normalized": "a-\u003eConvergence-\u003eb-\u003ec-\u003eDouble-\u003eVincentyDirectResult",
          "package": "geodetic",
          "signature": "e-\u003eConvergence-\u003ec-\u003eb-\u003eDouble-\u003eVincentyDirectResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Vincenty.html#v:direct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVincenty direct algorithm with an optionally applied default ellipsoid of WGS84 and standard convergence.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (\\c' -\u003e direct' c' (modBearing 165.34) (4235 :: Double) :: VincentyDirectResult) (27.812 ..#.. 154.295)\n\u003c/code\u003e\u003c/strong\u003eJust (VincentyDirectResult (Coordinate (Latitude (DegreesLatitude 27) (Minutes 46) (Seconds 30.0981)) (Longitude (DegreesLongitude 154) (Minutes 18) (Seconds 21.1466))) (Bearing 165.3451))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (\\c' -\u003e direct' c' (modBearing 165.34) (4235 :: Double) :: VincentyDirectResult) ((-66.093) ..#.. 12.84)\n\u003c/code\u003e\u003c/strong\u003eJust (VincentyDirectResult (Coordinate (Latitude (DegreesLatitude (-66)) (Minutes 7) (Seconds 47.0667)) (Longitude (DegreesLongitude 12) (Minutes 51) (Seconds 49.4142))) (Bearing 165.3183))\n\u003c/pre\u003e",
          "module": "Data.Geo.Geodetic.Vincenty",
          "name": "direct'",
          "package": "geodetic",
          "signature": "x",
          "source": "src/Data-Geo-Geodetic-Vincenty.html#direct%27",
          "type": "function"
        },
        "index": {
          "description": "Vincenty direct algorithm with an optionally applied default ellipsoid of WGS84 and standard convergence fmap direct modBearing Double VincentyDirectResult Just VincentyDirectResult Coordinate Latitude DegreesLatitude Minutes Seconds Longitude DegreesLongitude Minutes Seconds Bearing fmap direct modBearing Double VincentyDirectResult Just VincentyDirectResult Coordinate Latitude DegreesLatitude Minutes Seconds Longitude DegreesLongitude Minutes Seconds Bearing",
          "hierarchy": "Data Geo Geodetic Vincenty",
          "module": "Data.Geo.Geodetic.Vincenty",
          "name": "direct'",
          "package": "geodetic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Vincenty.html#v:direct-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVincenty direct algorithm with a default ellipsoid of WGS84 and standard convergence.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (\\c' -\u003e directD c' (modBearing 165.34) 4235) (27.812 ..#.. 154.295)\n\u003c/code\u003e\u003c/strong\u003eJust (VincentyDirectResult (Coordinate (Latitude (DegreesLatitude 27) (Minutes 46) (Seconds 30.0981)) (Longitude (DegreesLongitude 154) (Minutes 18) (Seconds 21.1466))) (Bearing 165.3451))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (\\c' -\u003e directD c' (modBearing 165.34) 4235) ((-66.093) ..#.. 12.84)\n\u003c/code\u003e\u003c/strong\u003eJust (VincentyDirectResult (Coordinate (Latitude (DegreesLatitude (-66)) (Minutes 7) (Seconds 47.0667)) (Longitude (DegreesLongitude 12) (Minutes 51) (Seconds 49.4142))) (Bearing 165.3183))\n\u003c/pre\u003e",
          "module": "Data.Geo.Geodetic.Vincenty",
          "name": "directD",
          "package": "geodetic",
          "signature": "c-\u003e b-\u003e Double-\u003e VincentyDirectResult",
          "type": "function"
        },
        "index": {
          "description": "Vincenty direct algorithm with default ellipsoid of WGS84 and standard convergence fmap directD modBearing Just VincentyDirectResult Coordinate Latitude DegreesLatitude Minutes Seconds Longitude DegreesLongitude Minutes Seconds Bearing fmap directD modBearing Just VincentyDirectResult Coordinate Latitude DegreesLatitude Minutes Seconds Longitude DegreesLongitude Minutes Seconds Bearing",
          "hierarchy": "Data Geo Geodetic Vincenty",
          "module": "Data.Geo.Geodetic.Vincenty",
          "name": "directD",
          "normalized": "a-\u003eb-\u003eDouble-\u003eVincentyDirectResult",
          "package": "geodetic",
          "signature": "c-\u003eb-\u003eDouble-\u003eVincentyDirectResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Vincenty.html#v:directD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVincenty inverse algorithm.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo fr \u003c- 27.812 ..#.. 154.295; to \u003c- (-66.093) ..#.. 12.84; return (inverse wgs84 convergence fr to)\n\u003c/code\u003e\u003c/strong\u003eJust (GeodeticCurve 14998576.9860 Azimuth 180.0000 Azimuth 0.0000)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo fr \u003c- 27.812 ..#.. 154.295; to \u003c- 87.7769 ..#.. 19.944; return (inverse wgs84 convergence fr to)\n\u003c/code\u003e\u003c/strong\u003eJust (GeodeticCurve 7099204.2589 Azimuth 0.0000 Azimuth 180.0000)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo fr \u003c- 27.812 ..#.. 154.295; to \u003c- (-66.093) ..#.. 12.84; return (inverse ans convergence fr to)\n\u003c/code\u003e\u003c/strong\u003eJust (GeodeticCurve 14998630.4056 Azimuth 180.0000 Azimuth 0.0000)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo fr \u003c- 27.812 ..#.. 154.295; to \u003c- 87.7769 ..#.. 19.944; return (inverse ans convergence fr to)\n\u003c/code\u003e\u003c/strong\u003eJust (GeodeticCurve 7099229.9126 Azimuth 0.0000 Azimuth 180.0000)\n\u003c/pre\u003e",
          "module": "Data.Geo.Geodetic.Vincenty",
          "name": "inverse",
          "package": "geodetic",
          "signature": "e-\u003e Convergence-\u003e c1-\u003e c2-\u003e Curve",
          "type": "function"
        },
        "index": {
          "description": "Vincenty inverse algorithm do fr to return inverse wgs84 convergence fr to Just GeodeticCurve Azimuth Azimuth do fr to return inverse wgs84 convergence fr to Just GeodeticCurve Azimuth Azimuth do fr to return inverse ans convergence fr to Just GeodeticCurve Azimuth Azimuth do fr to return inverse ans convergence fr to Just GeodeticCurve Azimuth Azimuth",
          "hierarchy": "Data Geo Geodetic Vincenty",
          "module": "Data.Geo.Geodetic.Vincenty",
          "name": "inverse",
          "normalized": "a-\u003eConvergence-\u003eb-\u003eb-\u003eCurve",
          "package": "geodetic",
          "signature": "e-\u003eConvergence-\u003ec-\u003ec-\u003eCurve",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Vincenty.html#v:inverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVincenty inverse algorithm with an optionally applied default ellipsoid of WGS84 and standard convergence.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo fr \u003c- 27.812 ..#.. 154.295; to \u003c- (-66.093) ..#.. 12.84; return (inverse' fr to :: Curve)\n\u003c/code\u003e\u003c/strong\u003eJust (GeodeticCurve 14998576.9860 Azimuth 180.0000 Azimuth 0.0000)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo fr \u003c- 27.812 ..#.. 154.295; to \u003c- 87.7769 ..#.. 19.944; return (inverse' fr to :: Curve)\n\u003c/code\u003e\u003c/strong\u003eJust (GeodeticCurve 7099204.2589 Azimuth 0.0000 Azimuth 180.0000)\n\u003c/pre\u003e",
          "module": "Data.Geo.Geodetic.Vincenty",
          "name": "inverse'",
          "package": "geodetic",
          "signature": "x",
          "source": "src/Data-Geo-Geodetic-Vincenty.html#inverse%27",
          "type": "function"
        },
        "index": {
          "description": "Vincenty inverse algorithm with an optionally applied default ellipsoid of WGS84 and standard convergence do fr to return inverse fr to Curve Just GeodeticCurve Azimuth Azimuth do fr to return inverse fr to Curve Just GeodeticCurve Azimuth Azimuth",
          "hierarchy": "Data Geo Geodetic Vincenty",
          "module": "Data.Geo.Geodetic.Vincenty",
          "name": "inverse'",
          "package": "geodetic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Vincenty.html#v:inverse-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVincenty inverse algorithm with a default ellipsoid of WGS84 and standard convergence.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo fr \u003c- 27.812 ..#.. 154.295; to \u003c- (-66.093) ..#.. 12.84; return (inverseD fr to)\n\u003c/code\u003e\u003c/strong\u003eJust (GeodeticCurve 14998576.9860 Azimuth 180.0000 Azimuth 0.0000)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo fr \u003c- 27.812 ..#.. 154.295; to \u003c- 87.7769 ..#.. 19.944; return (inverseD fr to)\n\u003c/code\u003e\u003c/strong\u003eJust (GeodeticCurve 7099204.2589 Azimuth 0.0000 Azimuth 180.0000)\n\u003c/pre\u003e",
          "module": "Data.Geo.Geodetic.Vincenty",
          "name": "inverseD",
          "package": "geodetic",
          "signature": "c1-\u003e c2-\u003e Curve",
          "type": "function"
        },
        "index": {
          "description": "Vincenty inverse algorithm with default ellipsoid of WGS84 and standard convergence do fr to return inverseD fr to Just GeodeticCurve Azimuth Azimuth do fr to return inverseD fr to Just GeodeticCurve Azimuth Azimuth",
          "hierarchy": "Data Geo Geodetic Vincenty",
          "module": "Data.Geo.Geodetic.Vincenty",
          "name": "inverseD",
          "normalized": "a-\u003ea-\u003eCurve",
          "package": "geodetic",
          "signature": "c-\u003ec-\u003eCurve",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic-Vincenty.html#v:inverseD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Geodetic",
          "name": "Geodetic",
          "package": "geodetic",
          "source": "src/Data-Geo-Geodetic.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Geo Geodetic",
          "module": "Data.Geo.Geodetic",
          "name": "Geodetic",
          "package": "geodetic",
          "partial": "Geodetic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/geodetic/docs/Data-Geo-Geodetic.html#"
      }
    }
  ]
]