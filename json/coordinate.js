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
        "word": "coordinate"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.Coordinate",
          "name": "Coordinate",
          "package": "coordinate",
          "source": "src/Data-Geo-Coordinate-Coordinate.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate Coordinate",
          "module": "Data.Geo.Coordinate.Coordinate",
          "name": "Coordinate",
          "package": "coordinate",
          "partial": "Coordinate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Coordinate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.Coordinate",
          "name": "Coordinate",
          "package": "coordinate",
          "source": "src/Data-Geo-Coordinate-Coordinate.html#Coordinate",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate Coordinate",
          "module": "Data.Geo.Coordinate.Coordinate",
          "name": "Coordinate",
          "package": "coordinate",
          "partial": "Coordinate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Coordinate.html#t:Coordinate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.Coordinate",
          "name": "HasCoordinate",
          "package": "coordinate",
          "source": "src/Data-Geo-Coordinate-Coordinate.html#HasCoordinate",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate Coordinate",
          "module": "Data.Geo.Coordinate.Coordinate",
          "name": "HasCoordinate",
          "package": "coordinate",
          "partial": "Has Coordinate",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Coordinate.html#t:HasCoordinate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a coordinate from a latitude and longitude.\n\u003c/p\u003e",
          "module": "Data.Geo.Coordinate.Coordinate",
          "name": "(.#.)",
          "package": "coordinate",
          "signature": "Latitude -\u003e Longitude -\u003e Coordinate",
          "source": "src/Data-Geo-Coordinate-Coordinate.html#.%23.",
          "type": "function"
        },
        "index": {
          "description": "Build coordinate from latitude and longitude",
          "hierarchy": "Data Geo Coordinate Coordinate",
          "module": "Data.Geo.Coordinate.Coordinate",
          "name": "(.#.) .#.",
          "normalized": "Latitude-\u003eLongitude-\u003eCoordinate",
          "package": "coordinate",
          "signature": "Latitude-\u003eLongitude-\u003eCoordinate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Coordinate.html#v:.-35-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a coordinate from a fractional latitude and fractional longitude. Fails\n if either are out of range.\n\u003c/p\u003e",
          "module": "Data.Geo.Coordinate.Coordinate",
          "name": "(..#..)",
          "package": "coordinate",
          "signature": "Double -\u003e Double -\u003e Maybe Coordinate",
          "source": "src/Data-Geo-Coordinate-Coordinate.html#..%23..",
          "type": "function"
        },
        "index": {
          "description": "Build coordinate from fractional latitude and fractional longitude Fails if either are out of range",
          "hierarchy": "Data Geo Coordinate Coordinate",
          "module": "Data.Geo.Coordinate.Coordinate",
          "name": "(..#..) ..#..",
          "normalized": "Double-\u003eDouble-\u003eMaybe Coordinate",
          "package": "coordinate",
          "signature": "Double-\u003eDouble-\u003eMaybe Coordinate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Coordinate.html#v:..-35-.."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.Coordinate",
          "name": "coordinate",
          "package": "coordinate",
          "signature": "Lens' t Coordinate",
          "source": "src/Data-Geo-Coordinate-Coordinate.html#coordinate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate Coordinate",
          "module": "Data.Geo.Coordinate.Coordinate",
          "name": "coordinate",
          "package": "coordinate",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Coordinate.html#v:coordinate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.Coordinate",
          "name": "coordinateDMSLatDMSLon",
          "package": "coordinate",
          "signature": "Iso' ((DegreesLatitude, Minutes, Seconds), (DegreesLongitude, Minutes, Seconds)) Coordinate",
          "source": "src/Data-Geo-Coordinate-Coordinate.html#coordinateDMSLatDMSLon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate Coordinate",
          "module": "Data.Geo.Coordinate.Coordinate",
          "name": "coordinateDMSLatDMSLon",
          "normalized": "Iso'((DegreesLatitude,Minutes,Seconds),(DegreesLongitude,Minutes,Seconds))Coordinate",
          "package": "coordinate",
          "partial": "DMSLat DMSLon",
          "signature": "Iso'((DegreesLatitude,Minutes,Seconds),(DegreesLongitude,Minutes,Seconds))Coordinate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Coordinate.html#v:coordinateDMSLatDMSLon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.Coordinate",
          "name": "coordinateDMSLatLon",
          "package": "coordinate",
          "signature": "Iso' ((DegreesLatitude, Minutes, Seconds), Longitude) Coordinate",
          "source": "src/Data-Geo-Coordinate-Coordinate.html#coordinateDMSLatLon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate Coordinate",
          "module": "Data.Geo.Coordinate.Coordinate",
          "name": "coordinateDMSLatLon",
          "normalized": "Iso'((DegreesLatitude,Minutes,Seconds),Longitude)Coordinate",
          "package": "coordinate",
          "partial": "DMSLat Lon",
          "signature": "Iso'((DegreesLatitude,Minutes,Seconds),Longitude)Coordinate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Coordinate.html#v:coordinateDMSLatLon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.Coordinate",
          "name": "coordinateLatDMSLon",
          "package": "coordinate",
          "signature": "Iso' (Latitude, (DegreesLongitude, Minutes, Seconds)) Coordinate",
          "source": "src/Data-Geo-Coordinate-Coordinate.html#coordinateLatDMSLon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate Coordinate",
          "module": "Data.Geo.Coordinate.Coordinate",
          "name": "coordinateLatDMSLon",
          "normalized": "Iso'(Latitude,(DegreesLongitude,Minutes,Seconds))Coordinate",
          "package": "coordinate",
          "partial": "Lat DMSLon",
          "signature": "Iso'(Latitude,(DegreesLongitude,Minutes,Seconds))Coordinate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Coordinate.html#v:coordinateLatDMSLon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.Coordinate",
          "name": "coordinateLatLon",
          "package": "coordinate",
          "signature": "Iso' (Latitude, Longitude) Coordinate",
          "source": "src/Data-Geo-Coordinate-Coordinate.html#coordinateLatLon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate Coordinate",
          "module": "Data.Geo.Coordinate.Coordinate",
          "name": "coordinateLatLon",
          "normalized": "Iso'(Latitude,Longitude)Coordinate",
          "package": "coordinate",
          "partial": "Lat Lon",
          "signature": "Iso'(Latitude,Longitude)Coordinate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Coordinate.html#v:coordinateLatLon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.Coordinate",
          "name": "coordinateLonLat",
          "package": "coordinate",
          "signature": "Iso' (Longitude, Latitude) Coordinate",
          "source": "src/Data-Geo-Coordinate-Coordinate.html#coordinateLonLat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate Coordinate",
          "module": "Data.Geo.Coordinate.Coordinate",
          "name": "coordinateLonLat",
          "normalized": "Iso'(Longitude,Latitude)Coordinate",
          "package": "coordinate",
          "partial": "Lon Lat",
          "signature": "Iso'(Longitude,Latitude)Coordinate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Coordinate.html#v:coordinateLonLat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.DegreesLatitude",
          "name": "DegreesLatitude",
          "package": "coordinate",
          "source": "src/Data-Geo-Coordinate-DegreesLatitude.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate DegreesLatitude",
          "module": "Data.Geo.Coordinate.DegreesLatitude",
          "name": "DegreesLatitude",
          "package": "coordinate",
          "partial": "Degrees Latitude",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-DegreesLatitude.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.DegreesLatitude",
          "name": "DegreesLatitude",
          "package": "coordinate",
          "source": "src/Data-Geo-Coordinate-DegreesLatitude.html#DegreesLatitude",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate DegreesLatitude",
          "module": "Data.Geo.Coordinate.DegreesLatitude",
          "name": "DegreesLatitude",
          "package": "coordinate",
          "partial": "Degrees Latitude",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-DegreesLatitude.html#t:DegreesLatitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.DegreesLatitude",
          "name": "HasDegreesLatitude",
          "package": "coordinate",
          "source": "src/Data-Geo-Coordinate-DegreesLatitude.html#HasDegreesLatitude",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate DegreesLatitude",
          "module": "Data.Geo.Coordinate.DegreesLatitude",
          "name": "HasDegreesLatitude",
          "package": "coordinate",
          "partial": "Has Degrees Latitude",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-DegreesLatitude.html#t:HasDegreesLatitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.DegreesLatitude",
          "name": "degreesLatitude",
          "package": "coordinate",
          "signature": "Lens' t DegreesLatitude",
          "source": "src/Data-Geo-Coordinate-DegreesLatitude.html#degreesLatitude",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate DegreesLatitude",
          "module": "Data.Geo.Coordinate.DegreesLatitude",
          "name": "degreesLatitude",
          "package": "coordinate",
          "partial": "Latitude",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-DegreesLatitude.html#v:degreesLatitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA prism on degrees latitude to an integer between -90 and 90 exclusive.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e7 ^? nDegreesLatitude\n\u003c/code\u003e\u003c/strong\u003eJust (DegreesLatitude 7)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e0 ^? nDegreesLatitude\n\u003c/code\u003e\u003c/strong\u003eJust (DegreesLatitude 0)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e89 ^? nDegreesLatitude\n\u003c/code\u003e\u003c/strong\u003eJust (DegreesLatitude 89)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e90 ^? nDegreesLatitude\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(-89) ^? nDegreesLatitude\n\u003c/code\u003e\u003c/strong\u003eJust (DegreesLatitude (-89))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(-90) ^? nDegreesLatitude\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre\u003eall (\\m -\u003e nDegreesLatitude # m == n) (n ^? nDegreesLatitude)\u003c/pre\u003e",
          "module": "Data.Geo.Coordinate.DegreesLatitude",
          "name": "nDegreesLatitude",
          "package": "coordinate",
          "signature": "Prism' Int DegreesLatitude",
          "source": "src/Data-Geo-Coordinate-DegreesLatitude.html#nDegreesLatitude",
          "type": "function"
        },
        "index": {
          "description": "prism on degrees latitude to an integer between and exclusive nDegreesLatitude Just DegreesLatitude nDegreesLatitude Just DegreesLatitude nDegreesLatitude Just DegreesLatitude nDegreesLatitude Nothing nDegreesLatitude Just DegreesLatitude nDegreesLatitude Nothing all nDegreesLatitude nDegreesLatitude",
          "hierarchy": "Data Geo Coordinate DegreesLatitude",
          "module": "Data.Geo.Coordinate.DegreesLatitude",
          "name": "nDegreesLatitude",
          "package": "coordinate",
          "partial": "Degrees Latitude",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-DegreesLatitude.html#v:nDegreesLatitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.DegreesLongitude",
          "name": "DegreesLongitude",
          "package": "coordinate",
          "source": "src/Data-Geo-Coordinate-DegreesLongitude.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate DegreesLongitude",
          "module": "Data.Geo.Coordinate.DegreesLongitude",
          "name": "DegreesLongitude",
          "package": "coordinate",
          "partial": "Degrees Longitude",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-DegreesLongitude.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.DegreesLongitude",
          "name": "DegreesLongitude",
          "package": "coordinate",
          "source": "src/Data-Geo-Coordinate-DegreesLongitude.html#DegreesLongitude",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate DegreesLongitude",
          "module": "Data.Geo.Coordinate.DegreesLongitude",
          "name": "DegreesLongitude",
          "package": "coordinate",
          "partial": "Degrees Longitude",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-DegreesLongitude.html#t:DegreesLongitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.DegreesLongitude",
          "name": "HasDegreesLongitude",
          "package": "coordinate",
          "source": "src/Data-Geo-Coordinate-DegreesLongitude.html#HasDegreesLongitude",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate DegreesLongitude",
          "module": "Data.Geo.Coordinate.DegreesLongitude",
          "name": "HasDegreesLongitude",
          "package": "coordinate",
          "partial": "Has Degrees Longitude",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-DegreesLongitude.html#t:HasDegreesLongitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.DegreesLongitude",
          "name": "degreesLongitude",
          "package": "coordinate",
          "signature": "Lens' t DegreesLongitude",
          "source": "src/Data-Geo-Coordinate-DegreesLongitude.html#degreesLongitude",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate DegreesLongitude",
          "module": "Data.Geo.Coordinate.DegreesLongitude",
          "name": "degreesLongitude",
          "package": "coordinate",
          "partial": "Longitude",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-DegreesLongitude.html#v:degreesLongitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA prism on degrees longitude to an integer between -180 and 180 exclusive.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e7 ^? nDegreesLongitude\n\u003c/code\u003e\u003c/strong\u003eJust (DegreesLongitude 7)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e0 ^? nDegreesLongitude\n\u003c/code\u003e\u003c/strong\u003eJust (DegreesLongitude 0)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e179 ^? nDegreesLongitude\n\u003c/code\u003e\u003c/strong\u003eJust (DegreesLongitude 179)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e180 ^? nDegreesLongitude\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(-179) ^? nDegreesLongitude\n\u003c/code\u003e\u003c/strong\u003eJust (DegreesLongitude (-179))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(-180) ^? nDegreesLongitude\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre\u003eall (\\m -\u003e nDegreesLongitude # m == n) (n ^? nDegreesLongitude)\u003c/pre\u003e",
          "module": "Data.Geo.Coordinate.DegreesLongitude",
          "name": "nDegreesLongitude",
          "package": "coordinate",
          "signature": "Prism' Int DegreesLongitude",
          "source": "src/Data-Geo-Coordinate-DegreesLongitude.html#nDegreesLongitude",
          "type": "function"
        },
        "index": {
          "description": "prism on degrees longitude to an integer between and exclusive nDegreesLongitude Just DegreesLongitude nDegreesLongitude Just DegreesLongitude nDegreesLongitude Just DegreesLongitude nDegreesLongitude Nothing nDegreesLongitude Just DegreesLongitude nDegreesLongitude Nothing all nDegreesLongitude nDegreesLongitude",
          "hierarchy": "Data Geo Coordinate DegreesLongitude",
          "module": "Data.Geo.Coordinate.DegreesLongitude",
          "name": "nDegreesLongitude",
          "package": "coordinate",
          "partial": "Degrees Longitude",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-DegreesLongitude.html#v:nDegreesLongitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.Latitude",
          "name": "Latitude",
          "package": "coordinate",
          "source": "src/Data-Geo-Coordinate-Latitude.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate Latitude",
          "module": "Data.Geo.Coordinate.Latitude",
          "name": "Latitude",
          "package": "coordinate",
          "partial": "Latitude",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Latitude.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.Latitude",
          "name": "HasLatitude",
          "package": "coordinate",
          "source": "src/Data-Geo-Coordinate-Latitude.html#HasLatitude",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate Latitude",
          "module": "Data.Geo.Coordinate.Latitude",
          "name": "HasLatitude",
          "package": "coordinate",
          "partial": "Has Latitude",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Latitude.html#t:HasLatitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.Latitude",
          "name": "Latitude",
          "package": "coordinate",
          "source": "src/Data-Geo-Coordinate-Latitude.html#Latitude",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate Latitude",
          "module": "Data.Geo.Coordinate.Latitude",
          "name": "Latitude",
          "package": "coordinate",
          "partial": "Latitude",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Latitude.html#t:Latitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn isomorphism on the triple of degrees latitude, minutes, seconds to a latitude.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo deg \u003c- 7 ^? nDegreesLatitude; min \u003c- 7 ^? nMinutes; sec \u003c- 7 ^? nSeconds; (deg, min, sec) ^? dmsLatitude\n\u003c/code\u003e\u003c/strong\u003eJust (Latitude (DegreesLatitude 7) (Minutes 7) (Seconds 7.0000))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo deg \u003c- 89 ^? nDegreesLatitude; min \u003c- 59 ^? nMinutes; sec \u003c- 59 ^? nSeconds; (deg, min, sec) ^? dmsLatitude\n\u003c/code\u003e\u003c/strong\u003eJust (Latitude (DegreesLatitude 89) (Minutes 59) (Seconds 59.0000))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo deg \u003c- (-7) ^? nDegreesLatitude; min \u003c- 7 ^? nMinutes; sec \u003c- 7 ^? nSeconds; (deg, min, sec) ^? dmsLatitude\n\u003c/code\u003e\u003c/strong\u003eJust (Latitude (DegreesLatitude (-7)) (Minutes 7) (Seconds 7.0000))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo deg \u003c- (-89) ^? nDegreesLatitude; min \u003c- 59 ^? nMinutes; sec \u003c- 59 ^? nSeconds; (deg, min, sec) ^? dmsLatitude\n\u003c/code\u003e\u003c/strong\u003eJust (Latitude (DegreesLatitude (-89)) (Minutes 59) (Seconds 59.0000))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo deg \u003c- 90 ^? nDegreesLatitude; min \u003c- 59 ^? nMinutes; sec \u003c- 59 ^? nSeconds; (deg, min, sec) ^? dmsLatitude\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo deg \u003c- 89 ^? nDegreesLatitude; min \u003c- 60 ^? nMinutes; sec \u003c- 59 ^? nSeconds; (deg, min, sec) ^? dmsLatitude\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo deg \u003c- 89 ^? nDegreesLatitude; min \u003c- 59 ^? nMinutes; sec \u003c- 60 ^? nSeconds; (deg, min, sec) ^? dmsLatitude\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (dmsLatitude #)  (7 ^? fracLatitude)\n\u003c/code\u003e\u003c/strong\u003eJust (DegreesLatitude 7,Minutes 0,Seconds 0.0000)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (dmsLatitude #)  (7.12 ^? fracLatitude)\n\u003c/code\u003e\u003c/strong\u003eJust (DegreesLatitude 7,Minutes 7,Seconds 12.0000)\n\u003c/pre\u003e",
          "module": "Data.Geo.Coordinate.Latitude",
          "name": "dmsLatitude",
          "package": "coordinate",
          "signature": "Iso' (DegreesLatitude, Minutes, Seconds) Latitude",
          "source": "src/Data-Geo-Coordinate-Latitude.html#dmsLatitude",
          "type": "function"
        },
        "index": {
          "description": "An isomorphism on the triple of degrees latitude minutes seconds to latitude do deg nDegreesLatitude min nMinutes sec nSeconds deg min sec dmsLatitude Just Latitude DegreesLatitude Minutes Seconds do deg nDegreesLatitude min nMinutes sec nSeconds deg min sec dmsLatitude Just Latitude DegreesLatitude Minutes Seconds do deg nDegreesLatitude min nMinutes sec nSeconds deg min sec dmsLatitude Just Latitude DegreesLatitude Minutes Seconds do deg nDegreesLatitude min nMinutes sec nSeconds deg min sec dmsLatitude Just Latitude DegreesLatitude Minutes Seconds do deg nDegreesLatitude min nMinutes sec nSeconds deg min sec dmsLatitude Nothing do deg nDegreesLatitude min nMinutes sec nSeconds deg min sec dmsLatitude Nothing do deg nDegreesLatitude min nMinutes sec nSeconds deg min sec dmsLatitude Nothing fmap dmsLatitude fracLatitude Just DegreesLatitude Minutes Seconds fmap dmsLatitude fracLatitude Just DegreesLatitude Minutes Seconds",
          "hierarchy": "Data Geo Coordinate Latitude",
          "module": "Data.Geo.Coordinate.Latitude",
          "name": "dmsLatitude",
          "normalized": "Iso'(DegreesLatitude,Minutes,Seconds)Latitude",
          "package": "coordinate",
          "partial": "Latitude",
          "signature": "Iso'(DegreesLatitude,Minutes,Seconds)Latitude",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Latitude.html#v:dmsLatitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA prism on latitude to a double between -90 and 90 exclusive.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e7 ^? fracLatitude\n\u003c/code\u003e\u003c/strong\u003eJust (Latitude (DegreesLatitude 7) (Minutes 0) (Seconds 0.0000))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(-7) ^? fracLatitude\n\u003c/code\u003e\u003c/strong\u003eJust (Latitude (DegreesLatitude (-7)) (Minutes 0) (Seconds 0.0000))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e7.12 ^? fracLatitude\n\u003c/code\u003e\u003c/strong\u003eJust (Latitude (DegreesLatitude 7) (Minutes 7) (Seconds 12.0000))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(-7.12) ^? fracLatitude\n\u003c/code\u003e\u003c/strong\u003eJust (Latitude (DegreesLatitude (-7)) (Minutes 7) (Seconds 12.0000))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (fracLatitude #) (7.12 ^? fracLatitude)\n\u003c/code\u003e\u003c/strong\u003eJust 7.12\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (fracLatitude #) ((-7.12) ^? fracLatitude)\n\u003c/code\u003e\u003c/strong\u003eJust (-7.12)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e90 ^? fracLatitude\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(-90) ^? fracLatitude\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e15.63791 ^? fracLatitude\n\u003c/code\u003e\u003c/strong\u003eJust (Latitude (DegreesLatitude 15) (Minutes 38) (Seconds 16.4760))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e89.1 ^? fracLatitude\n\u003c/code\u003e\u003c/strong\u003eJust (Latitude (DegreesLatitude 89) (Minutes 5) (Seconds 60.0000))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e89.2 ^? fracLatitude\n\u003c/code\u003e\u003c/strong\u003eJust (Latitude (DegreesLatitude 89) (Minutes 12) (Seconds 0.0000))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (fracLatitude #) (do deg \u003c- 7 ^? nDegreesLatitude; min \u003c- 7 ^? nMinutes; sec \u003c- 7 ^? nSeconds; (deg, min, sec) ^? dmsLatitude)\n\u003c/code\u003e\u003c/strong\u003eJust 7.118611111111111\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (fracLatitude #) (do deg \u003c- 89 ^? nDegreesLatitude; min \u003c- 15 ^? nMinutes; sec \u003c- 6 ^? nSeconds; (deg, min, sec) ^? dmsLatitude)\n\u003c/code\u003e\u003c/strong\u003eJust 89.25166666666667\n\u003c/pre\u003e",
          "module": "Data.Geo.Coordinate.Latitude",
          "name": "fracLatitude",
          "package": "coordinate",
          "signature": "Prism' Double Latitude",
          "source": "src/Data-Geo-Coordinate-Latitude.html#fracLatitude",
          "type": "function"
        },
        "index": {
          "description": "prism on latitude to double between and exclusive fracLatitude Just Latitude DegreesLatitude Minutes Seconds fracLatitude Just Latitude DegreesLatitude Minutes Seconds fracLatitude Just Latitude DegreesLatitude Minutes Seconds fracLatitude Just Latitude DegreesLatitude Minutes Seconds fmap fracLatitude fracLatitude Just fmap fracLatitude fracLatitude Just fracLatitude Nothing fracLatitude Nothing fracLatitude Just Latitude DegreesLatitude Minutes Seconds fracLatitude Just Latitude DegreesLatitude Minutes Seconds fracLatitude Just Latitude DegreesLatitude Minutes Seconds fmap fracLatitude do deg nDegreesLatitude min nMinutes sec nSeconds deg min sec dmsLatitude Just fmap fracLatitude do deg nDegreesLatitude min nMinutes sec nSeconds deg min sec dmsLatitude Just",
          "hierarchy": "Data Geo Coordinate Latitude",
          "module": "Data.Geo.Coordinate.Latitude",
          "name": "fracLatitude",
          "package": "coordinate",
          "partial": "Latitude",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Latitude.html#v:fracLatitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.Latitude",
          "name": "latitude",
          "package": "coordinate",
          "signature": "Lens' t Latitude",
          "source": "src/Data-Geo-Coordinate-Latitude.html#latitude",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate Latitude",
          "module": "Data.Geo.Coordinate.Latitude",
          "name": "latitude",
          "package": "coordinate",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Latitude.html#v:latitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA prism on latitude to a double between -&#960;\u003cem\u003e2 and &#960;\u003c/em\u003e2 exclusive.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e0.2 ^? radianLatitude\n\u003c/code\u003e\u003c/strong\u003eJust (Latitude (DegreesLatitude 11) (Minutes 27) (Seconds 32.9612))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e1.3 ^? radianLatitude\n\u003c/code\u003e\u003c/strong\u003eJust (Latitude (DegreesLatitude 74) (Minutes 29) (Seconds 4.2481))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(-1.3) ^? radianLatitude\n\u003c/code\u003e\u003c/strong\u003eJust (Latitude (DegreesLatitude (-74)) (Minutes 29) (Seconds 4.2481))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e1.5707963 ^? radianLatitude\n\u003c/code\u003e\u003c/strong\u003eJust (Latitude (DegreesLatitude 89) (Minutes 59) (Seconds 59.9945))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e1.58 ^? radianLatitude\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(-1.58) ^? radianLatitude\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (radianLatitude #) (do deg \u003c- 7 ^? nDegreesLatitude; min \u003c- 7 ^? nMinutes; sec \u003c- 7 ^? nSeconds; (deg, min, sec) ^? dmsLatitude)\n\u003c/code\u003e\u003c/strong\u003eJust 0.12424320205794079\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (radianLatitude #) (do deg \u003c- 89 ^? nDegreesLatitude; min \u003c- 15 ^? nMinutes; sec \u003c- 6 ^? nSeconds; (deg, min, sec) ^? dmsLatitude)\n\u003c/code\u003e\u003c/strong\u003eJust 1.5577354462258057\n\u003c/pre\u003e",
          "module": "Data.Geo.Coordinate.Latitude",
          "name": "radianLatitude",
          "package": "coordinate",
          "signature": "Prism' Double Latitude",
          "source": "src/Data-Geo-Coordinate-Latitude.html#radianLatitude",
          "type": "function"
        },
        "index": {
          "description": "prism on latitude to double between and exclusive radianLatitude Just Latitude DegreesLatitude Minutes Seconds radianLatitude Just Latitude DegreesLatitude Minutes Seconds radianLatitude Just Latitude DegreesLatitude Minutes Seconds radianLatitude Just Latitude DegreesLatitude Minutes Seconds radianLatitude Nothing radianLatitude Nothing fmap radianLatitude do deg nDegreesLatitude min nMinutes sec nSeconds deg min sec dmsLatitude Just fmap radianLatitude do deg nDegreesLatitude min nMinutes sec nSeconds deg min sec dmsLatitude Just",
          "hierarchy": "Data Geo Coordinate Latitude",
          "module": "Data.Geo.Coordinate.Latitude",
          "name": "radianLatitude",
          "package": "coordinate",
          "partial": "Latitude",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Latitude.html#v:radianLatitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.Longitude",
          "name": "Longitude",
          "package": "coordinate",
          "source": "src/Data-Geo-Coordinate-Longitude.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate Longitude",
          "module": "Data.Geo.Coordinate.Longitude",
          "name": "Longitude",
          "package": "coordinate",
          "partial": "Longitude",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Longitude.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.Longitude",
          "name": "HasLongitude",
          "package": "coordinate",
          "source": "src/Data-Geo-Coordinate-Longitude.html#HasLongitude",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate Longitude",
          "module": "Data.Geo.Coordinate.Longitude",
          "name": "HasLongitude",
          "package": "coordinate",
          "partial": "Has Longitude",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Longitude.html#t:HasLongitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.Longitude",
          "name": "Longitude",
          "package": "coordinate",
          "source": "src/Data-Geo-Coordinate-Longitude.html#Longitude",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate Longitude",
          "module": "Data.Geo.Coordinate.Longitude",
          "name": "Longitude",
          "package": "coordinate",
          "partial": "Longitude",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Longitude.html#t:Longitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn isomorphism on the triple of degrees longitude, minutes, seconds to a longitude.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo deg \u003c- 7 ^? nDegreesLongitude; min \u003c- 7 ^? nMinutes; sec \u003c- 7 ^? nSeconds; (deg, min, sec) ^? dmsLongitude\n\u003c/code\u003e\u003c/strong\u003eJust (Longitude (DegreesLongitude 7) (Minutes 7) (Seconds 7.0000))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo deg \u003c- 179 ^? nDegreesLongitude; min \u003c- 59 ^? nMinutes; sec \u003c- 59 ^? nSeconds; (deg, min, sec) ^? dmsLongitude\n\u003c/code\u003e\u003c/strong\u003eJust (Longitude (DegreesLongitude 179) (Minutes 59) (Seconds 59.0000))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo deg \u003c- (-7) ^? nDegreesLongitude; min \u003c- 7 ^? nMinutes; sec \u003c- 7 ^? nSeconds; (deg, min, sec) ^? dmsLongitude\n\u003c/code\u003e\u003c/strong\u003eJust (Longitude (DegreesLongitude (-7)) (Minutes 7) (Seconds 7.0000))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo deg \u003c- (-179) ^? nDegreesLongitude; min \u003c- 59 ^? nMinutes; sec \u003c- 59 ^? nSeconds; (deg, min, sec) ^? dmsLongitude\n\u003c/code\u003e\u003c/strong\u003eJust (Longitude (DegreesLongitude (-179)) (Minutes 59) (Seconds 59.0000))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo deg \u003c- 180 ^? nDegreesLongitude; min \u003c- 59 ^? nMinutes; sec \u003c- 59 ^? nSeconds; (deg, min, sec) ^? dmsLongitude\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo deg \u003c- 179 ^? nDegreesLongitude; min \u003c- 60 ^? nMinutes; sec \u003c- 59 ^? nSeconds; (deg, min, sec) ^? dmsLongitude\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edo deg \u003c- 179 ^? nDegreesLongitude; min \u003c- 59 ^? nMinutes; sec \u003c- 60 ^? nSeconds; (deg, min, sec) ^? dmsLongitude\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (dmsLongitude #)  (7 ^? fracLongitude)\n\u003c/code\u003e\u003c/strong\u003eJust (DegreesLongitude 7,Minutes 0,Seconds 0.0000)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (dmsLongitude #)  (7.12 ^? fracLongitude)\n\u003c/code\u003e\u003c/strong\u003eJust (DegreesLongitude 7,Minutes 7,Seconds 12.0000)\n\u003c/pre\u003e",
          "module": "Data.Geo.Coordinate.Longitude",
          "name": "dmsLongitude",
          "package": "coordinate",
          "signature": "Iso' (DegreesLongitude, Minutes, Seconds) Longitude",
          "source": "src/Data-Geo-Coordinate-Longitude.html#dmsLongitude",
          "type": "function"
        },
        "index": {
          "description": "An isomorphism on the triple of degrees longitude minutes seconds to longitude do deg nDegreesLongitude min nMinutes sec nSeconds deg min sec dmsLongitude Just Longitude DegreesLongitude Minutes Seconds do deg nDegreesLongitude min nMinutes sec nSeconds deg min sec dmsLongitude Just Longitude DegreesLongitude Minutes Seconds do deg nDegreesLongitude min nMinutes sec nSeconds deg min sec dmsLongitude Just Longitude DegreesLongitude Minutes Seconds do deg nDegreesLongitude min nMinutes sec nSeconds deg min sec dmsLongitude Just Longitude DegreesLongitude Minutes Seconds do deg nDegreesLongitude min nMinutes sec nSeconds deg min sec dmsLongitude Nothing do deg nDegreesLongitude min nMinutes sec nSeconds deg min sec dmsLongitude Nothing do deg nDegreesLongitude min nMinutes sec nSeconds deg min sec dmsLongitude Nothing fmap dmsLongitude fracLongitude Just DegreesLongitude Minutes Seconds fmap dmsLongitude fracLongitude Just DegreesLongitude Minutes Seconds",
          "hierarchy": "Data Geo Coordinate Longitude",
          "module": "Data.Geo.Coordinate.Longitude",
          "name": "dmsLongitude",
          "normalized": "Iso'(DegreesLongitude,Minutes,Seconds)Longitude",
          "package": "coordinate",
          "partial": "Longitude",
          "signature": "Iso'(DegreesLongitude,Minutes,Seconds)Longitude",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Longitude.html#v:dmsLongitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA prism on longitude to a double between -180 and 180 exclusive.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e7 ^? fracLongitude\n\u003c/code\u003e\u003c/strong\u003eJust (Longitude (DegreesLongitude 7) (Minutes 0) (Seconds 0.0000))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(-7) ^? fracLongitude\n\u003c/code\u003e\u003c/strong\u003eJust (Longitude (DegreesLongitude (-7)) (Minutes 0) (Seconds 0.0000))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e7.12 ^? fracLongitude\n\u003c/code\u003e\u003c/strong\u003eJust (Longitude (DegreesLongitude 7) (Minutes 7) (Seconds 12.0000))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(-7.12) ^? fracLongitude\n\u003c/code\u003e\u003c/strong\u003eJust (Longitude (DegreesLongitude (-7)) (Minutes 7) (Seconds 12.0000))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (fracLongitude #) (7.12 ^? fracLongitude)\n\u003c/code\u003e\u003c/strong\u003eJust 7.12\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (fracLongitude #) ((-7.12) ^? fracLongitude)\n\u003c/code\u003e\u003c/strong\u003eJust (-7.12)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e180 ^? fracLongitude\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(-180) ^? fracLongitude\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e15.63791 ^? fracLongitude\n\u003c/code\u003e\u003c/strong\u003eJust (Longitude (DegreesLongitude 15) (Minutes 38) (Seconds 16.4760))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e179.1 ^? fracLongitude\n\u003c/code\u003e\u003c/strong\u003eJust (Longitude (DegreesLongitude 179) (Minutes 5) (Seconds 60.0000))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e179.2 ^? fracLongitude\n\u003c/code\u003e\u003c/strong\u003eJust (Longitude (DegreesLongitude 179) (Minutes 11) (Seconds 60.0000))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (fracLongitude #) (do deg \u003c- 7 ^? nDegreesLongitude; min \u003c- 7 ^? nMinutes; sec \u003c- 7 ^? nSeconds; (deg, min, sec) ^? dmsLongitude)\n\u003c/code\u003e\u003c/strong\u003eJust 7.118611111111111\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (fracLongitude #) (do deg \u003c- 179 ^? nDegreesLongitude; min \u003c- 15 ^? nMinutes; sec \u003c- 6 ^? nSeconds; (deg, min, sec) ^? dmsLongitude)\n\u003c/code\u003e\u003c/strong\u003eJust 179.25166666666667\n\u003c/pre\u003e",
          "module": "Data.Geo.Coordinate.Longitude",
          "name": "fracLongitude",
          "package": "coordinate",
          "signature": "Prism' Double Longitude",
          "source": "src/Data-Geo-Coordinate-Longitude.html#fracLongitude",
          "type": "function"
        },
        "index": {
          "description": "prism on longitude to double between and exclusive fracLongitude Just Longitude DegreesLongitude Minutes Seconds fracLongitude Just Longitude DegreesLongitude Minutes Seconds fracLongitude Just Longitude DegreesLongitude Minutes Seconds fracLongitude Just Longitude DegreesLongitude Minutes Seconds fmap fracLongitude fracLongitude Just fmap fracLongitude fracLongitude Just fracLongitude Nothing fracLongitude Nothing fracLongitude Just Longitude DegreesLongitude Minutes Seconds fracLongitude Just Longitude DegreesLongitude Minutes Seconds fracLongitude Just Longitude DegreesLongitude Minutes Seconds fmap fracLongitude do deg nDegreesLongitude min nMinutes sec nSeconds deg min sec dmsLongitude Just fmap fracLongitude do deg nDegreesLongitude min nMinutes sec nSeconds deg min sec dmsLongitude Just",
          "hierarchy": "Data Geo Coordinate Longitude",
          "module": "Data.Geo.Coordinate.Longitude",
          "name": "fracLongitude",
          "package": "coordinate",
          "partial": "Longitude",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Longitude.html#v:fracLongitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.Longitude",
          "name": "longitude",
          "package": "coordinate",
          "signature": "Lens' t Longitude",
          "source": "src/Data-Geo-Coordinate-Longitude.html#longitude",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate Longitude",
          "module": "Data.Geo.Coordinate.Longitude",
          "name": "longitude",
          "package": "coordinate",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Longitude.html#v:longitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA prism on longitude to a double between -&#960; and &#960; exclusive.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e0.2 ^? radianLongitude\n\u003c/code\u003e\u003c/strong\u003eJust (Longitude (DegreesLongitude 11) (Minutes 27) (Seconds 32.9612))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e1.3 ^? radianLongitude\n\u003c/code\u003e\u003c/strong\u003eJust (Longitude (DegreesLongitude 74) (Minutes 29) (Seconds 4.2481))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(-1.3) ^? radianLongitude\n\u003c/code\u003e\u003c/strong\u003eJust (Longitude (DegreesLongitude (-74)) (Minutes 29) (Seconds 4.2481))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e3.14159 ^? radianLongitude\n\u003c/code\u003e\u003c/strong\u003eJust (Longitude (DegreesLongitude 179) (Minutes 59) (Seconds 59.4527))\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e3.15 ^? radianLongitude\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(-3.15) ^? radianLongitude\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (radianLongitude #) (do deg \u003c- 7 ^? nDegreesLongitude; min \u003c- 7 ^? nMinutes; sec \u003c- 7 ^? nSeconds; (deg, min, sec) ^? dmsLongitude)\n\u003c/code\u003e\u003c/strong\u003eJust 0.12424320205794079\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efmap (radianLongitude #) (do deg \u003c- 179 ^? nDegreesLongitude; min \u003c- 15 ^? nMinutes; sec \u003c- 6 ^? nSeconds; (deg, min, sec) ^? dmsLongitude)\n\u003c/code\u003e\u003c/strong\u003eJust 3.1285317730207023\n\u003c/pre\u003e",
          "module": "Data.Geo.Coordinate.Longitude",
          "name": "radianLongitude",
          "package": "coordinate",
          "signature": "Prism' Double Longitude",
          "source": "src/Data-Geo-Coordinate-Longitude.html#radianLongitude",
          "type": "function"
        },
        "index": {
          "description": "prism on longitude to double between and exclusive radianLongitude Just Longitude DegreesLongitude Minutes Seconds radianLongitude Just Longitude DegreesLongitude Minutes Seconds radianLongitude Just Longitude DegreesLongitude Minutes Seconds radianLongitude Just Longitude DegreesLongitude Minutes Seconds radianLongitude Nothing radianLongitude Nothing fmap radianLongitude do deg nDegreesLongitude min nMinutes sec nSeconds deg min sec dmsLongitude Just fmap radianLongitude do deg nDegreesLongitude min nMinutes sec nSeconds deg min sec dmsLongitude Just",
          "hierarchy": "Data Geo Coordinate Longitude",
          "module": "Data.Geo.Coordinate.Longitude",
          "name": "radianLongitude",
          "package": "coordinate",
          "partial": "Longitude",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Longitude.html#v:radianLongitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.Minutes",
          "name": "Minutes",
          "package": "coordinate",
          "source": "src/Data-Geo-Coordinate-Minutes.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate Minutes",
          "module": "Data.Geo.Coordinate.Minutes",
          "name": "Minutes",
          "package": "coordinate",
          "partial": "Minutes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Minutes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.Minutes",
          "name": "HasMinutes",
          "package": "coordinate",
          "source": "src/Data-Geo-Coordinate-Minutes.html#HasMinutes",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate Minutes",
          "module": "Data.Geo.Coordinate.Minutes",
          "name": "HasMinutes",
          "package": "coordinate",
          "partial": "Has Minutes",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Minutes.html#t:HasMinutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.Minutes",
          "name": "Minutes",
          "package": "coordinate",
          "source": "src/Data-Geo-Coordinate-Minutes.html#Minutes",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate Minutes",
          "module": "Data.Geo.Coordinate.Minutes",
          "name": "Minutes",
          "package": "coordinate",
          "partial": "Minutes",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Minutes.html#t:Minutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.Minutes",
          "name": "minutes",
          "package": "coordinate",
          "signature": "Lens' t Minutes",
          "source": "src/Data-Geo-Coordinate-Minutes.html#minutes",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate Minutes",
          "module": "Data.Geo.Coordinate.Minutes",
          "name": "minutes",
          "package": "coordinate",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Minutes.html#v:minutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct minutes such that if the given value is out of bounds,\n a modulus is taken to keep it within 0 inclusive and 59 inclusive.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodMinutes 7\n\u003c/code\u003e\u003c/strong\u003eMinutes 7\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodMinutes 0\n\u003c/code\u003e\u003c/strong\u003eMinutes 0\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodMinutes 60\n\u003c/code\u003e\u003c/strong\u003eMinutes 0\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodMinutes 61\n\u003c/code\u003e\u003c/strong\u003eMinutes 1\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodMinutes 59\n\u003c/code\u003e\u003c/strong\u003eMinutes 59\n\u003c/pre\u003e",
          "module": "Data.Geo.Coordinate.Minutes",
          "name": "modMinutes",
          "package": "coordinate",
          "signature": "Int -\u003e Minutes",
          "source": "src/Data-Geo-Coordinate-Minutes.html#modMinutes",
          "type": "function"
        },
        "index": {
          "description": "Construct minutes such that if the given value is out of bounds modulus is taken to keep it within inclusive and inclusive modMinutes Minutes modMinutes Minutes modMinutes Minutes modMinutes Minutes modMinutes Minutes",
          "hierarchy": "Data Geo Coordinate Minutes",
          "module": "Data.Geo.Coordinate.Minutes",
          "name": "modMinutes",
          "normalized": "Int-\u003eMinutes",
          "package": "coordinate",
          "partial": "Minutes",
          "signature": "Int-\u003eMinutes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Minutes.html#v:modMinutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA prism on minutes to an integer between 0 and 59 inclusive.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e7 ^? nMinutes\n\u003c/code\u003e\u003c/strong\u003eJust (Minutes 7)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e0 ^? nMinutes\n\u003c/code\u003e\u003c/strong\u003eJust (Minutes 0)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e59 ^? nMinutes\n\u003c/code\u003e\u003c/strong\u003eJust (Minutes 59)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e60 ^? nMinutes\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre\u003eall (\\m -\u003e nMinutes # m == n) (n ^? nMinutes)\u003c/pre\u003e",
          "module": "Data.Geo.Coordinate.Minutes",
          "name": "nMinutes",
          "package": "coordinate",
          "signature": "Prism' Int Minutes",
          "source": "src/Data-Geo-Coordinate-Minutes.html#nMinutes",
          "type": "function"
        },
        "index": {
          "description": "prism on minutes to an integer between and inclusive nMinutes Just Minutes nMinutes Just Minutes nMinutes Just Minutes nMinutes Nothing all nMinutes nMinutes",
          "hierarchy": "Data Geo Coordinate Minutes",
          "module": "Data.Geo.Coordinate.Minutes",
          "name": "nMinutes",
          "package": "coordinate",
          "partial": "Minutes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Minutes.html#v:nMinutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.Seconds",
          "name": "Seconds",
          "package": "coordinate",
          "source": "src/Data-Geo-Coordinate-Seconds.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate Seconds",
          "module": "Data.Geo.Coordinate.Seconds",
          "name": "Seconds",
          "package": "coordinate",
          "partial": "Seconds",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Seconds.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.Seconds",
          "name": "HasSeconds",
          "package": "coordinate",
          "source": "src/Data-Geo-Coordinate-Seconds.html#HasSeconds",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate Seconds",
          "module": "Data.Geo.Coordinate.Seconds",
          "name": "HasSeconds",
          "package": "coordinate",
          "partial": "Has Seconds",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Seconds.html#t:HasSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.Seconds",
          "name": "Seconds",
          "package": "coordinate",
          "source": "src/Data-Geo-Coordinate-Seconds.html#Seconds",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate Seconds",
          "module": "Data.Geo.Coordinate.Seconds",
          "name": "Seconds",
          "package": "coordinate",
          "partial": "Seconds",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Seconds.html#t:Seconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct seconds such that if the given value is out of bounds,\n a modulus is taken to keep it within 0 inclusive and 60 exclusive.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodSeconds 7\n\u003c/code\u003e\u003c/strong\u003eSeconds 7.0000\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodSeconds 0\n\u003c/code\u003e\u003c/strong\u003eSeconds 0.0000\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodSeconds (-0.0001)\n\u003c/code\u003e\u003c/strong\u003eSeconds 59.9999\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodSeconds 60\n\u003c/code\u003e\u003c/strong\u003eSeconds 0.0000\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodSeconds 59.99999\n\u003c/code\u003e\u003c/strong\u003eSeconds 60.0000\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emodSeconds 59.999\n\u003c/code\u003e\u003c/strong\u003eSeconds 59.9990\n\u003c/pre\u003e",
          "module": "Data.Geo.Coordinate.Seconds",
          "name": "modSeconds",
          "package": "coordinate",
          "signature": "Double -\u003e Seconds",
          "source": "src/Data-Geo-Coordinate-Seconds.html#modSeconds",
          "type": "function"
        },
        "index": {
          "description": "Construct seconds such that if the given value is out of bounds modulus is taken to keep it within inclusive and exclusive modSeconds Seconds modSeconds Seconds modSeconds Seconds modSeconds Seconds modSeconds Seconds modSeconds Seconds",
          "hierarchy": "Data Geo Coordinate Seconds",
          "module": "Data.Geo.Coordinate.Seconds",
          "name": "modSeconds",
          "normalized": "Double-\u003eSeconds",
          "package": "coordinate",
          "partial": "Seconds",
          "signature": "Double-\u003eSeconds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Seconds.html#v:modSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA prism on seconds to a double between 0 inclusive and 60 exclusive.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e7 ^? nSeconds\n\u003c/code\u003e\u003c/strong\u003eJust (Seconds 7.0000)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e0 ^? nSeconds\n\u003c/code\u003e\u003c/strong\u003eJust (Seconds 0.0000)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e59 ^? nSeconds\n\u003c/code\u003e\u003c/strong\u003eJust (Seconds 59.0000)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e59.99 ^? nSeconds\n\u003c/code\u003e\u003c/strong\u003eJust (Seconds 59.9900)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e60 ^? nSeconds\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre\u003eall (\\m -\u003e nSeconds # m == n) (n ^? nSeconds)\u003c/pre\u003e",
          "module": "Data.Geo.Coordinate.Seconds",
          "name": "nSeconds",
          "package": "coordinate",
          "signature": "Prism' Double Seconds",
          "source": "src/Data-Geo-Coordinate-Seconds.html#nSeconds",
          "type": "function"
        },
        "index": {
          "description": "prism on seconds to double between inclusive and exclusive nSeconds Just Seconds nSeconds Just Seconds nSeconds Just Seconds nSeconds Just Seconds nSeconds Nothing all nSeconds nSeconds",
          "hierarchy": "Data Geo Coordinate Seconds",
          "module": "Data.Geo.Coordinate.Seconds",
          "name": "nSeconds",
          "package": "coordinate",
          "partial": "Seconds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Seconds.html#v:nSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate.Seconds",
          "name": "seconds",
          "package": "coordinate",
          "signature": "Lens' t Seconds",
          "source": "src/Data-Geo-Coordinate-Seconds.html#seconds",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate Seconds",
          "module": "Data.Geo.Coordinate.Seconds",
          "name": "seconds",
          "package": "coordinate",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate-Seconds.html#v:seconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geo.Coordinate",
          "name": "Coordinate",
          "package": "coordinate",
          "source": "src/Data-Geo-Coordinate.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Geo Coordinate",
          "module": "Data.Geo.Coordinate",
          "name": "Coordinate",
          "package": "coordinate",
          "partial": "Coordinate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/coordinate/docs/Data-Geo-Coordinate.html#"
      }
    }
  ]
]