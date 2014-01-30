[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "module",
        "fct-source": "src/Data-Geospatial.html",
        "fct-type": "module",
        "title": "Geospatial"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "Geospatial",
        "normalized": "",
        "package": "geojson",
        "partial": "Geospatial",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:Altitude",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "type",
        "fct-source": "src/Data-Geospatial.html#Altitude",
        "fct-type": "type",
        "title": "Altitude"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "Altitude",
        "normalized": "",
        "package": "geojson",
        "partial": "Altitude",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:BoundingBoxWithoutCRS",
      "description": {
        "fct-descr": "\u003cp\u003eSee Section 4 \u003ca\u003eBounding Boxes\u003c/a\u003e of the GeoJSON spec,\n The length of the list/array must be 2*n where n is the dimensionality of the position type for the CRS\n with min values first followed by the max values, wich both the min/max sets following the same axis order as the CRS,\n e.g for WGS84: minLongitude, minLatitude, maxLongitude, maxLatitude\n The spec mentions that it can be part of a geometry object too but doesnt give an example,\n This implementation will ignore bboxes on Geometry objects, they can be added if required.\n\u003c/p\u003e",
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "type",
        "fct-source": "src/Data-Geospatial.html#BoundingBoxWithoutCRS",
        "fct-type": "type",
        "title": "BoundingBoxWithoutCRS"
      },
      "index": {
        "description": "See Section Bounding Boxes of the GeoJSON spec The length of the list array must be where is the dimensionality of the position type for the CRS with min values first followed by the max values wich both the min max sets following the same axis order as the CRS e.g for WGS84 minLongitude minLatitude maxLongitude maxLatitude The spec mentions that it can be part of geometry object too but doesnt give an example This implementation will ignore bboxes on Geometry objects they can be added if required",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "BoundingBoxWithoutCRS",
        "normalized": "",
        "package": "geojson",
        "partial": "Bounding Box Without CRS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:CRSObject",
      "description": {
        "fct-descr": "\u003cp\u003eSee Section 3 \u003ca\u003eCoordinate Reference System Objects\u003c/a\u003e in the GeoJSON Spec\n \u003ca\u003eNoCRS\u003c/a\u003e is required because no \u003ccode\u003ecrs\u003c/code\u003e attribute in a GeoJSON feature is NOT the same thing as\n a null \u003ccode\u003ecrs\u003c/code\u003e attribute. no \u003ccode\u003ecrs\u003c/code\u003e value implies the default CRS, while a null CRS means\n you cannot assume a CRS, null will mapped to NoCRS while a non-existent attribute will\n be mapped to a Nothing Maybe value\n\u003c/p\u003e",
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "data",
        "fct-source": "src/Data-Geospatial.html#CRSObject",
        "fct-type": "data",
        "title": "CRSObject"
      },
      "index": {
        "description": "See Section Coordinate Reference System Objects in the GeoJSON Spec NoCRS is required because no crs attribute in GeoJSON feature is NOT the same thing as null crs attribute no crs value implies the default CRS while null CRS means you cannot assume CRS null will mapped to NoCRS while non-existent attribute will be mapped to Nothing Maybe value",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "CRSObject",
        "normalized": "",
        "package": "geojson",
        "partial": "CRSObject",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:Code",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "type",
        "fct-source": "src/Data-Geospatial.html#Code",
        "fct-type": "type",
        "title": "Code"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "Code",
        "normalized": "",
        "package": "geojson",
        "partial": "Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:Easting",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "type",
        "fct-source": "src/Data-Geospatial.html#Easting",
        "fct-type": "type",
        "title": "Easting"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "Easting",
        "normalized": "",
        "package": "geojson",
        "partial": "Easting",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:FeatureID",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "type",
        "fct-source": "src/Data-Geospatial.html#FeatureID",
        "fct-type": "type",
        "title": "FeatureID"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "FeatureID",
        "normalized": "",
        "package": "geojson",
        "partial": "Feature ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:FormatString",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "type",
        "fct-source": "src/Data-Geospatial.html#FormatString",
        "fct-type": "type",
        "title": "FormatString"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "FormatString",
        "normalized": "",
        "package": "geojson",
        "partial": "Format String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:GeoFeature",
      "description": {
        "fct-descr": "\u003cp\u003eSee Section 2.2 \u003ca\u003eFeature Objects\u003c/a\u003e of the GeoJSON spec.\n\u003c/p\u003e",
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "data",
        "fct-source": "src/Data-Geospatial.html#GeoFeature",
        "fct-type": "data",
        "title": "GeoFeature"
      },
      "index": {
        "description": "See Section Feature Objects of the GeoJSON spec",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "GeoFeature",
        "normalized": "",
        "package": "geojson",
        "partial": "Geo Feature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:GeoFeatureCollection",
      "description": {
        "fct-descr": "\u003cp\u003eSee Section 2.3 \u003ca\u003eFeature Collection Objects\u003c/a\u003e of the GeoJSON spec\n\u003c/p\u003e",
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "data",
        "fct-source": "src/Data-Geospatial.html#GeoFeatureCollection",
        "fct-type": "data",
        "title": "GeoFeatureCollection"
      },
      "index": {
        "description": "See Section Feature Collection Objects of the GeoJSON spec",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "GeoFeatureCollection",
        "normalized": "",
        "package": "geojson",
        "partial": "Geo Feature Collection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:GeoLine",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Geospatial.html#GeoLine",
        "fct-type": "newtype",
        "title": "GeoLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "GeoLine",
        "normalized": "",
        "package": "geojson",
        "partial": "Geo Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:GeoMultiLine",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Geospatial.html#GeoMultiLine",
        "fct-type": "newtype",
        "title": "GeoMultiLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "GeoMultiLine",
        "normalized": "",
        "package": "geojson",
        "partial": "Geo Multi Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:GeoMultiPoint",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Geospatial.html#GeoMultiPoint",
        "fct-type": "newtype",
        "title": "GeoMultiPoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "GeoMultiPoint",
        "normalized": "",
        "package": "geojson",
        "partial": "Geo Multi Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:GeoMultiPolygon",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Geospatial.html#GeoMultiPolygon",
        "fct-type": "newtype",
        "title": "GeoMultiPolygon"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "GeoMultiPolygon",
        "normalized": "",
        "package": "geojson",
        "partial": "Geo Multi Polygon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:GeoPoint",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Geospatial.html#GeoPoint",
        "fct-type": "newtype",
        "title": "GeoPoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "GeoPoint",
        "normalized": "",
        "package": "geojson",
        "partial": "Geo Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:GeoPolyLine",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "data",
        "fct-source": "src/Data-Geospatial.html#GeoPolyLine",
        "fct-type": "data",
        "title": "GeoPolyLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "GeoPolyLine",
        "normalized": "",
        "package": "geojson",
        "partial": "Geo Poly Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:GeoPolygon",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Geospatial.html#GeoPolygon",
        "fct-type": "newtype",
        "title": "GeoPolygon"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "GeoPolygon",
        "normalized": "",
        "package": "geojson",
        "partial": "Geo Polygon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:GeoPosition",
      "description": {
        "fct-descr": "\u003cp\u003esee Section 2.1.1 \u003ca\u003ePosition\u003c/a\u003e in the GeoJSON Spec,\n I make the assumption here that the only position types we will use will\n involve easting\u003cem\u003enorthing (+\u003c/em\u003e- Altitude) or lon\u003cem\u003elat (+\u003c/em\u003e- Altitude)\n\u003c/p\u003e",
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "data",
        "fct-source": "src/Data-Geospatial.html#GeoPosition",
        "fct-type": "data",
        "title": "GeoPosition"
      },
      "index": {
        "description": "see Section Position in the GeoJSON Spec make the assumption here that the only position types we will use will involve easting northing Altitude or lon lat Altitude",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "GeoPosition",
        "normalized": "",
        "package": "geojson",
        "partial": "Geo Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:GeoPositionWithoutCRS",
      "description": {
        "fct-descr": "\u003cp\u003e(\u003ca\u003eWithoutCRS\u003c/a\u003e is a catch all for indeterminate CRSs and for expression of positions\n before a CRS has been determined\n\u003c/p\u003e",
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "type",
        "fct-source": "src/Data-Geospatial.html#GeoPositionWithoutCRS",
        "fct-type": "type",
        "title": "GeoPositionWithoutCRS"
      },
      "index": {
        "description": "WithoutCRS is catch all for indeterminate CRSs and for expression of positions before CRS has been determined",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "GeoPositionWithoutCRS",
        "normalized": "",
        "package": "geojson",
        "partial": "Geo Position Without CRS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:GeoProperty",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "data",
        "fct-source": "src/Data-Geospatial.html#GeoProperty",
        "fct-type": "data",
        "title": "GeoProperty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "GeoProperty",
        "normalized": "",
        "package": "geojson",
        "partial": "Geo Property",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:GeoPropertyObject",
      "description": {
        "fct-descr": "\u003cp\u003eAccording to section 2.2 \u003ca\u003eFeature Objects\u003c/a\u003e of the GeoJSON spec, the \u003ca\u003eproperties\u003c/a\u003e object\n can be any JSON object, or a null value, we may as well just make it a Type Alias\n for JSValue, even though it has a wider scope (Integer, Rational, String etc...)\n to take advantage of the solid JSON code out there to handle generic objects and the null value\n\u003c/p\u003e",
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "type",
        "fct-source": "src/Data-Geospatial.html#GeoPropertyObject",
        "fct-type": "type",
        "title": "GeoPropertyObject"
      },
      "index": {
        "description": "According to section Feature Objects of the GeoJSON spec the properties object can be any JSON object or null value we may as well just make it Type Alias for JSValue even though it has wider scope Integer Rational String etc to take advantage of the solid JSON code out there to handle generic objects and the null value",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "GeoPropertyObject",
        "normalized": "",
        "package": "geojson",
        "partial": "Geo Property Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:GeospatialGeometry",
      "description": {
        "fct-descr": "\u003cp\u003eSee section 2.1 \u003ca\u003eGeometry Objects\u003c/a\u003e in the GeoJSON Spec.\n\u003c/p\u003e",
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "data",
        "fct-source": "src/Data-Geospatial.html#GeospatialGeometry",
        "fct-type": "data",
        "title": "GeospatialGeometry"
      },
      "index": {
        "description": "See section Geometry Objects in the GeoJSON Spec",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "GeospatialGeometry",
        "normalized": "",
        "package": "geojson",
        "partial": "Geospatial Geometry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:Href",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "type",
        "fct-source": "src/Data-Geospatial.html#Href",
        "fct-type": "type",
        "title": "Href"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "Href",
        "normalized": "",
        "package": "geojson",
        "partial": "Href",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:Latitude",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "type",
        "fct-source": "src/Data-Geospatial.html#Latitude",
        "fct-type": "type",
        "title": "Latitude"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "Latitude",
        "normalized": "",
        "package": "geojson",
        "partial": "Latitude",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:Longitude",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "type",
        "fct-source": "src/Data-Geospatial.html#Longitude",
        "fct-type": "type",
        "title": "Longitude"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "Longitude",
        "normalized": "",
        "package": "geojson",
        "partial": "Longitude",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:Name",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "type",
        "fct-source": "src/Data-Geospatial.html#Name",
        "fct-type": "type",
        "title": "Name"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "Name",
        "normalized": "",
        "package": "geojson",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:Northing",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "type",
        "fct-source": "src/Data-Geospatial.html#Northing",
        "fct-type": "type",
        "title": "Northing"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "Northing",
        "normalized": "",
        "package": "geojson",
        "partial": "Northing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:ProjectionType",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "type",
        "fct-source": "src/Data-Geospatial.html#ProjectionType",
        "fct-type": "type",
        "title": "ProjectionType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "ProjectionType",
        "normalized": "",
        "package": "geojson",
        "partial": "Projection Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:Collection",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "Collection [GeospatialGeometry]",
        "fct-source": "src/Data-Geospatial.html#GeospatialGeometry",
        "fct-type": "function",
        "title": "Collection"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "Collection",
        "normalized": "Collection[GeospatialGeometry]",
        "package": "geojson",
        "partial": "Collection",
        "signature": "Collection[GeospatialGeometry]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:DoubleProperty",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "DoubleProperty Double",
        "fct-source": "src/Data-Geospatial.html#GeoProperty",
        "fct-type": "function",
        "title": "DoubleProperty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "DoubleProperty",
        "normalized": "",
        "package": "geojson",
        "partial": "Double Property",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:EPSG",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "EPSG Code",
        "fct-source": "src/Data-Geospatial.html#CRSObject",
        "fct-type": "function",
        "title": "EPSG"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "EPSG",
        "normalized": "",
        "package": "geojson",
        "partial": "EPSG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:EastingNorthing",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "EastingNorthing Easting Northing",
        "fct-source": "src/Data-Geospatial.html#GeoPosition",
        "fct-type": "function",
        "title": "EastingNorthing"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "EastingNorthing",
        "normalized": "",
        "package": "geojson",
        "partial": "Easting Northing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:EastingNorthingAlt",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "EastingNorthingAlt Easting Northing Altitude",
        "fct-source": "src/Data-Geospatial.html#GeoPosition",
        "fct-type": "function",
        "title": "EastingNorthingAlt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "EastingNorthingAlt",
        "normalized": "",
        "package": "geojson",
        "partial": "Easting Northing Alt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:FloatProperty",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "FloatProperty Float",
        "fct-source": "src/Data-Geospatial.html#GeoProperty",
        "fct-type": "function",
        "title": "FloatProperty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "FloatProperty",
        "normalized": "",
        "package": "geojson",
        "partial": "Float Property",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:GeoFeature",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "GeoFeature",
        "fct-source": "src/Data-Geospatial.html#GeoFeature",
        "fct-type": "function",
        "title": "GeoFeature"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "GeoFeature",
        "normalized": "",
        "package": "geojson",
        "partial": "Geo Feature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:GeoFeatureCollection",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "GeoFeatureCollection (Maybe BoundingBoxWithoutCRS) [GeoFeature]",
        "fct-source": "src/Data-Geospatial.html#GeoFeatureCollection",
        "fct-type": "function",
        "title": "GeoFeatureCollection"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "GeoFeatureCollection",
        "normalized": "GeoFeatureCollection(Maybe BoundingBoxWithoutCRS)[GeoFeature]",
        "package": "geojson",
        "partial": "Geo Feature Collection",
        "signature": "GeoFeatureCollection(Maybe BoundingBoxWithoutCRS)[GeoFeature]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:GeoLine",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "GeoLine [GeoPositionWithoutCRS]",
        "fct-source": "src/Data-Geospatial.html#GeoLine",
        "fct-type": "function",
        "title": "GeoLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "GeoLine",
        "normalized": "GeoLine[GeoPositionWithoutCRS]",
        "package": "geojson",
        "partial": "Geo Line",
        "signature": "GeoLine[GeoPositionWithoutCRS]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:GeoMultiLine",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "GeoMultiLine [GeoLine]",
        "fct-source": "src/Data-Geospatial.html#GeoMultiLine",
        "fct-type": "function",
        "title": "GeoMultiLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "GeoMultiLine",
        "normalized": "GeoMultiLine[GeoLine]",
        "package": "geojson",
        "partial": "Geo Multi Line",
        "signature": "GeoMultiLine[GeoLine]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:GeoMultiPoint",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "GeoMultiPoint [GeoPoint]",
        "fct-source": "src/Data-Geospatial.html#GeoMultiPoint",
        "fct-type": "function",
        "title": "GeoMultiPoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "GeoMultiPoint",
        "normalized": "GeoMultiPoint[GeoPoint]",
        "package": "geojson",
        "partial": "Geo Multi Point",
        "signature": "GeoMultiPoint[GeoPoint]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:GeoMultiPolygon",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "GeoMultiPolygon [GeoPolygon]",
        "fct-source": "src/Data-Geospatial.html#GeoMultiPolygon",
        "fct-type": "function",
        "title": "GeoMultiPolygon"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "GeoMultiPolygon",
        "normalized": "GeoMultiPolygon[GeoPolygon]",
        "package": "geojson",
        "partial": "Geo Multi Polygon",
        "signature": "GeoMultiPolygon[GeoPolygon]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:GeoPoint",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "GeoPoint GeoPositionWithoutCRS",
        "fct-source": "src/Data-Geospatial.html#GeoPoint",
        "fct-type": "function",
        "title": "GeoPoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "GeoPoint",
        "normalized": "",
        "package": "geojson",
        "partial": "Geo Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:GeoPolygon",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "GeoPolygon [GeoPositionWithoutCRS]",
        "fct-source": "src/Data-Geospatial.html#GeoPolygon",
        "fct-type": "function",
        "title": "GeoPolygon"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "GeoPolygon",
        "normalized": "GeoPolygon[GeoPositionWithoutCRS]",
        "package": "geojson",
        "partial": "Geo Polygon",
        "signature": "GeoPolygon[GeoPositionWithoutCRS]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:IntProperty",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "IntProperty Int",
        "fct-source": "src/Data-Geospatial.html#GeoProperty",
        "fct-type": "function",
        "title": "IntProperty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "IntProperty",
        "normalized": "",
        "package": "geojson",
        "partial": "Int Property",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:Line",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "Line GeoLine",
        "fct-source": "src/Data-Geospatial.html#GeospatialGeometry",
        "fct-type": "function",
        "title": "Line"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "Line",
        "normalized": "",
        "package": "geojson",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:LineString",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "LineString GeoLine",
        "fct-source": "src/Data-Geospatial.html#GeoPolyLine",
        "fct-type": "function",
        "title": "LineString"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "LineString",
        "normalized": "",
        "package": "geojson",
        "partial": "Line String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:LinkedCRS",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "LinkedCRS Href FormatString",
        "fct-source": "src/Data-Geospatial.html#CRSObject",
        "fct-type": "function",
        "title": "LinkedCRS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "LinkedCRS",
        "normalized": "",
        "package": "geojson",
        "partial": "Linked CRS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:LonLat",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "LonLat Longitude Latitude",
        "fct-source": "src/Data-Geospatial.html#GeoPosition",
        "fct-type": "function",
        "title": "LonLat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "LonLat",
        "normalized": "",
        "package": "geojson",
        "partial": "Lon Lat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:LonLatAlt",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "LonLatAlt Longitude Latitude Altitude",
        "fct-source": "src/Data-Geospatial.html#GeoPosition",
        "fct-type": "function",
        "title": "LonLatAlt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "LonLatAlt",
        "normalized": "",
        "package": "geojson",
        "partial": "Lon Lat Alt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:MultiLine",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "MultiLine GeoMultiLine",
        "fct-source": "src/Data-Geospatial.html#GeospatialGeometry",
        "fct-type": "function",
        "title": "MultiLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "MultiLine",
        "normalized": "",
        "package": "geojson",
        "partial": "Multi Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:MultiPoint",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "MultiPoint GeoMultiPoint",
        "fct-source": "src/Data-Geospatial.html#GeospatialGeometry",
        "fct-type": "function",
        "title": "MultiPoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "MultiPoint",
        "normalized": "",
        "package": "geojson",
        "partial": "Multi Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:MultiPolygon",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "MultiPolygon GeoMultiPolygon",
        "fct-source": "src/Data-Geospatial.html#GeospatialGeometry",
        "fct-type": "function",
        "title": "MultiPolygon"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "MultiPolygon",
        "normalized": "",
        "package": "geojson",
        "partial": "Multi Polygon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:NamedCRS",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "NamedCRS Name",
        "fct-source": "src/Data-Geospatial.html#CRSObject",
        "fct-type": "function",
        "title": "NamedCRS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "NamedCRS",
        "normalized": "",
        "package": "geojson",
        "partial": "Named CRS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:NoCRS",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "NoCRS",
        "fct-source": "src/Data-Geospatial.html#CRSObject",
        "fct-type": "function",
        "title": "NoCRS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "NoCRS",
        "normalized": "",
        "package": "geojson",
        "partial": "No CRS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:NoGeometry",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "NoGeometry",
        "fct-source": "src/Data-Geospatial.html#GeospatialGeometry",
        "fct-type": "function",
        "title": "NoGeometry"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "NoGeometry",
        "normalized": "",
        "package": "geojson",
        "partial": "No Geometry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:Point",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "Point GeoPoint",
        "fct-source": "src/Data-Geospatial.html#GeospatialGeometry",
        "fct-type": "function",
        "title": "Point"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "Point",
        "normalized": "",
        "package": "geojson",
        "partial": "Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:Poly",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "Poly GeoPolygon",
        "fct-source": "src/Data-Geospatial.html#GeoPolyLine",
        "fct-type": "function",
        "title": "Poly"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "Poly",
        "normalized": "",
        "package": "geojson",
        "partial": "Poly",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:Polygon",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "Polygon GeoPolygon",
        "fct-source": "src/Data-Geospatial.html#GeospatialGeometry",
        "fct-type": "function",
        "title": "Polygon"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "Polygon",
        "normalized": "",
        "package": "geojson",
        "partial": "Polygon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:PropertyObject",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "PropertyObject GeoPropertyObject",
        "fct-source": "src/Data-Geospatial.html#GeoProperty",
        "fct-type": "function",
        "title": "PropertyObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "PropertyObject",
        "normalized": "",
        "package": "geojson",
        "partial": "Property Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:StringProperty",
      "description": {
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "StringProperty String",
        "fct-source": "src/Data-Geospatial.html#GeoProperty",
        "fct-type": "function",
        "title": "StringProperty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "StringProperty",
        "normalized": "",
        "package": "geojson",
        "partial": "String Property",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:bbox",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "Maybe BoundingBoxWithoutCRS",
        "fct-source": "src/Data-Geospatial.html#GeoFeature",
        "fct-type": "function",
        "title": "bbox"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "bbox",
        "normalized": "",
        "package": "geojson",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:defaultCRS",
      "description": {
        "fct-descr": "\u003cp\u003eThe default CRS according to Section 3 \u003ca\u003eCoordinate Reference System Objects\u003c/a\u003e is WGS84 which I believe,\n from http:\u003cem/\u003espatialreference.org\u003cem\u003eref\u003c/em\u003eepsg\u003cem\u003e4326\u003c/em\u003e -\u003e [JSON](http:\u003cem/\u003espatialreference.org\u003cem\u003eref\u003c/em\u003eepsg\u003cem\u003e4326\u003c/em\u003ejson/ \u003ca\u003eWGS84 in JSON\u003c/a\u003e)\n is represented thus:\n\u003c/p\u003e",
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "CRSObject",
        "fct-source": "src/Data-Geospatial.html#defaultCRS",
        "fct-type": "function",
        "title": "defaultCRS"
      },
      "index": {
        "description": "The default CRS according to Section Coordinate Reference System Objects is WGS84 which believe from http spatialreference.org ref epsg JSON http spatialreference.org ref epsg json WGS84 in JSON is represented thus",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "defaultCRS",
        "normalized": "",
        "package": "geojson",
        "partial": "CRS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:featureId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "Maybe FeatureID",
        "fct-source": "src/Data-Geospatial.html#GeoFeature",
        "fct-type": "function",
        "title": "featureId"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "featureId",
        "normalized": "",
        "package": "geojson",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:geometry",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "GeospatialGeometry",
        "fct-source": "src/Data-Geospatial.html#GeoFeature",
        "fct-type": "function",
        "title": "geometry"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "geometry",
        "normalized": "",
        "package": "geojson",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:properties",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "GeoPropertyObject",
        "fct-source": "src/Data-Geospatial.html#GeoFeature",
        "fct-type": "function",
        "title": "properties"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "properties",
        "normalized": "",
        "package": "geojson",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:stripCRSFromPosition",
      "description": {
        "fct-descr": "\u003cp\u003ethe GeoPosition is a bit special in that when you convert it to GeoJSON,\n it will lose the CRS info attached to it and cannot be read back in\n from the GeoJSON.  Hence it is ineligible for the JSON type class,\n so this function will strip it down to a GeoPositionWithoutCRS, which is eligible\n\u003c/p\u003e",
        "fct-module": "Data.Geospatial",
        "fct-package": "geojson",
        "fct-signature": "GeoPosition -\u003e GeoPositionWithoutCRS",
        "fct-source": "src/Data-Geospatial.html#stripCRSFromPosition",
        "fct-type": "function",
        "title": "stripCRSFromPosition"
      },
      "index": {
        "description": "the GeoPosition is bit special in that when you convert it to GeoJSON it will lose the CRS info attached to it and cannot be read back in from the GeoJSON Hence it is ineligible for the JSON type class so this function will strip it down to GeoPositionWithoutCRS which is eligible",
        "hierarchy": "Data Geospatial",
        "module": "Data.Geospatial",
        "name": "stripCRSFromPosition",
        "normalized": "GeoPosition-\u003eGeoPositionWithoutCRS",
        "package": "geojson",
        "partial": "CRSFrom Position",
        "signature": "GeoPosition-\u003eGeoPositionWithoutCRS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/geojson/docs/Text-GeoJSON.html#",
      "description": {
        "fct-module": "Text.GeoJSON",
        "fct-package": "geojson",
        "fct-signature": "module",
        "fct-source": "src/Text-GeoJSON.html",
        "fct-type": "module",
        "title": "GeoJSON"
      },
      "index": {
        "description": "",
        "hierarchy": "Text GeoJSON",
        "module": "Text.GeoJSON",
        "name": "GeoJSON",
        "normalized": "",
        "package": "geojson",
        "partial": "Geo JSON",
        "signature": ""
      }
    }
  }
]