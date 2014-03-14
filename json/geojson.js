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
        "word": "geojson"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "Geospatial",
          "package": "geojson",
          "source": "src/Data-Geospatial.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "Geospatial",
          "package": "geojson",
          "partial": "Geospatial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "Altitude",
          "package": "geojson",
          "source": "src/Data-Geospatial.html#Altitude",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "Altitude",
          "package": "geojson",
          "partial": "Altitude",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:Altitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee Section 4 \u003ca\u003eBounding Boxes\u003c/a\u003e of the GeoJSON spec,\n The length of the list/array must be 2*n where n is the dimensionality of the position type for the CRS\n with min values first followed by the max values, wich both the min/max sets following the same axis order as the CRS,\n e.g for WGS84: minLongitude, minLatitude, maxLongitude, maxLatitude\n The spec mentions that it can be part of a geometry object too but doesnt give an example,\n This implementation will ignore bboxes on Geometry objects, they can be added if required.\n\u003c/p\u003e",
          "module": "Data.Geospatial",
          "name": "BoundingBoxWithoutCRS",
          "package": "geojson",
          "source": "src/Data-Geospatial.html#BoundingBoxWithoutCRS",
          "type": "type"
        },
        "index": {
          "description": "See Section Bounding Boxes of the GeoJSON spec The length of the list array must be where is the dimensionality of the position type for the CRS with min values first followed by the max values wich both the min max sets following the same axis order as the CRS e.g for WGS84 minLongitude minLatitude maxLongitude maxLatitude The spec mentions that it can be part of geometry object too but doesnt give an example This implementation will ignore bboxes on Geometry objects they can be added if required",
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "BoundingBoxWithoutCRS",
          "package": "geojson",
          "partial": "Bounding Box Without CRS",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:BoundingBoxWithoutCRS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee Section 3 \u003ca\u003eCoordinate Reference System Objects\u003c/a\u003e in the GeoJSON Spec\n \u003ca\u003eNoCRS\u003c/a\u003e is required because no \u003ccode\u003ecrs\u003c/code\u003e attribute in a GeoJSON feature is NOT the same thing as\n a null \u003ccode\u003ecrs\u003c/code\u003e attribute. no \u003ccode\u003ecrs\u003c/code\u003e value implies the default CRS, while a null CRS means\n you cannot assume a CRS, null will mapped to NoCRS while a non-existent attribute will\n be mapped to a Nothing Maybe value\n\u003c/p\u003e",
          "module": "Data.Geospatial",
          "name": "CRSObject",
          "package": "geojson",
          "source": "src/Data-Geospatial.html#CRSObject",
          "type": "data"
        },
        "index": {
          "description": "See Section Coordinate Reference System Objects in the GeoJSON Spec NoCRS is required because no crs attribute in GeoJSON feature is NOT the same thing as null crs attribute no crs value implies the default CRS while null CRS means you cannot assume CRS null will mapped to NoCRS while non-existent attribute will be mapped to Nothing Maybe value",
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "CRSObject",
          "package": "geojson",
          "partial": "CRSObject",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:CRSObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "Code",
          "package": "geojson",
          "source": "src/Data-Geospatial.html#Code",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "Code",
          "package": "geojson",
          "partial": "Code",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:Code"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "Easting",
          "package": "geojson",
          "source": "src/Data-Geospatial.html#Easting",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "Easting",
          "package": "geojson",
          "partial": "Easting",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:Easting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "FeatureID",
          "package": "geojson",
          "source": "src/Data-Geospatial.html#FeatureID",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "FeatureID",
          "package": "geojson",
          "partial": "Feature ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:FeatureID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "FormatString",
          "package": "geojson",
          "source": "src/Data-Geospatial.html#FormatString",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "FormatString",
          "package": "geojson",
          "partial": "Format String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:FormatString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee Section 2.2 \u003ca\u003eFeature Objects\u003c/a\u003e of the GeoJSON spec.\n\u003c/p\u003e",
          "module": "Data.Geospatial",
          "name": "GeoFeature",
          "package": "geojson",
          "source": "src/Data-Geospatial.html#GeoFeature",
          "type": "data"
        },
        "index": {
          "description": "See Section Feature Objects of the GeoJSON spec",
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "GeoFeature",
          "package": "geojson",
          "partial": "Geo Feature",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:GeoFeature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee Section 2.3 \u003ca\u003eFeature Collection Objects\u003c/a\u003e of the GeoJSON spec\n\u003c/p\u003e",
          "module": "Data.Geospatial",
          "name": "GeoFeatureCollection",
          "package": "geojson",
          "source": "src/Data-Geospatial.html#GeoFeatureCollection",
          "type": "data"
        },
        "index": {
          "description": "See Section Feature Collection Objects of the GeoJSON spec",
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "GeoFeatureCollection",
          "package": "geojson",
          "partial": "Geo Feature Collection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:GeoFeatureCollection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "GeoLine",
          "package": "geojson",
          "source": "src/Data-Geospatial.html#GeoLine",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "GeoLine",
          "package": "geojson",
          "partial": "Geo Line",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:GeoLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "GeoMultiLine",
          "package": "geojson",
          "source": "src/Data-Geospatial.html#GeoMultiLine",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "GeoMultiLine",
          "package": "geojson",
          "partial": "Geo Multi Line",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:GeoMultiLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "GeoMultiPoint",
          "package": "geojson",
          "source": "src/Data-Geospatial.html#GeoMultiPoint",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "GeoMultiPoint",
          "package": "geojson",
          "partial": "Geo Multi Point",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:GeoMultiPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "GeoMultiPolygon",
          "package": "geojson",
          "source": "src/Data-Geospatial.html#GeoMultiPolygon",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "GeoMultiPolygon",
          "package": "geojson",
          "partial": "Geo Multi Polygon",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:GeoMultiPolygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "GeoPoint",
          "package": "geojson",
          "source": "src/Data-Geospatial.html#GeoPoint",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "GeoPoint",
          "package": "geojson",
          "partial": "Geo Point",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:GeoPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "GeoPolyLine",
          "package": "geojson",
          "source": "src/Data-Geospatial.html#GeoPolyLine",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "GeoPolyLine",
          "package": "geojson",
          "partial": "Geo Poly Line",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:GeoPolyLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "GeoPolygon",
          "package": "geojson",
          "source": "src/Data-Geospatial.html#GeoPolygon",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "GeoPolygon",
          "package": "geojson",
          "partial": "Geo Polygon",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:GeoPolygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esee Section 2.1.1 \u003ca\u003ePosition\u003c/a\u003e in the GeoJSON Spec,\n I make the assumption here that the only position types we will use will\n involve easting\u003cem\u003enorthing (+\u003c/em\u003e- Altitude) or lon\u003cem\u003elat (+\u003c/em\u003e- Altitude)\n\u003c/p\u003e",
          "module": "Data.Geospatial",
          "name": "GeoPosition",
          "package": "geojson",
          "source": "src/Data-Geospatial.html#GeoPosition",
          "type": "data"
        },
        "index": {
          "description": "see Section Position in the GeoJSON Spec make the assumption here that the only position types we will use will involve easting northing Altitude or lon lat Altitude",
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "GeoPosition",
          "package": "geojson",
          "partial": "Geo Position",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:GeoPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(\u003ca\u003eWithoutCRS\u003c/a\u003e is a catch all for indeterminate CRSs and for expression of positions\n before a CRS has been determined\n\u003c/p\u003e",
          "module": "Data.Geospatial",
          "name": "GeoPositionWithoutCRS",
          "package": "geojson",
          "source": "src/Data-Geospatial.html#GeoPositionWithoutCRS",
          "type": "type"
        },
        "index": {
          "description": "WithoutCRS is catch all for indeterminate CRSs and for expression of positions before CRS has been determined",
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "GeoPositionWithoutCRS",
          "package": "geojson",
          "partial": "Geo Position Without CRS",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:GeoPositionWithoutCRS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "GeoProperty",
          "package": "geojson",
          "source": "src/Data-Geospatial.html#GeoProperty",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "GeoProperty",
          "package": "geojson",
          "partial": "Geo Property",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:GeoProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccording to section 2.2 \u003ca\u003eFeature Objects\u003c/a\u003e of the GeoJSON spec, the \u003ca\u003eproperties\u003c/a\u003e object\n can be any JSON object, or a null value, we may as well just make it a Type Alias\n for JSValue, even though it has a wider scope (Integer, Rational, String etc...)\n to take advantage of the solid JSON code out there to handle generic objects and the null value\n\u003c/p\u003e",
          "module": "Data.Geospatial",
          "name": "GeoPropertyObject",
          "package": "geojson",
          "source": "src/Data-Geospatial.html#GeoPropertyObject",
          "type": "type"
        },
        "index": {
          "description": "According to section Feature Objects of the GeoJSON spec the properties object can be any JSON object or null value we may as well just make it Type Alias for JSValue even though it has wider scope Integer Rational String etc to take advantage of the solid JSON code out there to handle generic objects and the null value",
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "GeoPropertyObject",
          "package": "geojson",
          "partial": "Geo Property Object",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:GeoPropertyObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee section 2.1 \u003ca\u003eGeometry Objects\u003c/a\u003e in the GeoJSON Spec.\n\u003c/p\u003e",
          "module": "Data.Geospatial",
          "name": "GeospatialGeometry",
          "package": "geojson",
          "source": "src/Data-Geospatial.html#GeospatialGeometry",
          "type": "data"
        },
        "index": {
          "description": "See section Geometry Objects in the GeoJSON Spec",
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "GeospatialGeometry",
          "package": "geojson",
          "partial": "Geospatial Geometry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:GeospatialGeometry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "Href",
          "package": "geojson",
          "source": "src/Data-Geospatial.html#Href",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "Href",
          "package": "geojson",
          "partial": "Href",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:Href"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "Latitude",
          "package": "geojson",
          "source": "src/Data-Geospatial.html#Latitude",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "Latitude",
          "package": "geojson",
          "partial": "Latitude",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:Latitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "Longitude",
          "package": "geojson",
          "source": "src/Data-Geospatial.html#Longitude",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "Longitude",
          "package": "geojson",
          "partial": "Longitude",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:Longitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "Name",
          "package": "geojson",
          "source": "src/Data-Geospatial.html#Name",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "Name",
          "package": "geojson",
          "partial": "Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "Northing",
          "package": "geojson",
          "source": "src/Data-Geospatial.html#Northing",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "Northing",
          "package": "geojson",
          "partial": "Northing",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:Northing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "ProjectionType",
          "package": "geojson",
          "source": "src/Data-Geospatial.html#ProjectionType",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "ProjectionType",
          "package": "geojson",
          "partial": "Projection Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#t:ProjectionType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "Collection",
          "package": "geojson",
          "signature": "Collection [GeospatialGeometry]",
          "source": "src/Data-Geospatial.html#GeospatialGeometry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "Collection",
          "normalized": "Collection[GeospatialGeometry]",
          "package": "geojson",
          "partial": "Collection",
          "signature": "Collection[GeospatialGeometry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:Collection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "DoubleProperty",
          "package": "geojson",
          "signature": "DoubleProperty Double",
          "source": "src/Data-Geospatial.html#GeoProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "DoubleProperty",
          "package": "geojson",
          "partial": "Double Property",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:DoubleProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "EPSG",
          "package": "geojson",
          "signature": "EPSG Code",
          "source": "src/Data-Geospatial.html#CRSObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "EPSG",
          "package": "geojson",
          "partial": "EPSG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:EPSG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "EastingNorthing",
          "package": "geojson",
          "signature": "EastingNorthing Easting Northing",
          "source": "src/Data-Geospatial.html#GeoPosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "EastingNorthing",
          "package": "geojson",
          "partial": "Easting Northing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:EastingNorthing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "EastingNorthingAlt",
          "package": "geojson",
          "signature": "EastingNorthingAlt Easting Northing Altitude",
          "source": "src/Data-Geospatial.html#GeoPosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "EastingNorthingAlt",
          "package": "geojson",
          "partial": "Easting Northing Alt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:EastingNorthingAlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "FloatProperty",
          "package": "geojson",
          "signature": "FloatProperty Float",
          "source": "src/Data-Geospatial.html#GeoProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "FloatProperty",
          "package": "geojson",
          "partial": "Float Property",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:FloatProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "GeoFeature",
          "package": "geojson",
          "signature": "GeoFeature",
          "source": "src/Data-Geospatial.html#GeoFeature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "GeoFeature",
          "package": "geojson",
          "partial": "Geo Feature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:GeoFeature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "GeoFeatureCollection",
          "package": "geojson",
          "signature": "GeoFeatureCollection (Maybe BoundingBoxWithoutCRS) [GeoFeature]",
          "source": "src/Data-Geospatial.html#GeoFeatureCollection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "GeoFeatureCollection",
          "normalized": "GeoFeatureCollection(Maybe BoundingBoxWithoutCRS)[GeoFeature]",
          "package": "geojson",
          "partial": "Geo Feature Collection",
          "signature": "GeoFeatureCollection(Maybe BoundingBoxWithoutCRS)[GeoFeature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:GeoFeatureCollection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "GeoLine",
          "package": "geojson",
          "signature": "GeoLine [GeoPositionWithoutCRS]",
          "source": "src/Data-Geospatial.html#GeoLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "GeoLine",
          "normalized": "GeoLine[GeoPositionWithoutCRS]",
          "package": "geojson",
          "partial": "Geo Line",
          "signature": "GeoLine[GeoPositionWithoutCRS]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:GeoLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "GeoMultiLine",
          "package": "geojson",
          "signature": "GeoMultiLine [GeoLine]",
          "source": "src/Data-Geospatial.html#GeoMultiLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "GeoMultiLine",
          "normalized": "GeoMultiLine[GeoLine]",
          "package": "geojson",
          "partial": "Geo Multi Line",
          "signature": "GeoMultiLine[GeoLine]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:GeoMultiLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "GeoMultiPoint",
          "package": "geojson",
          "signature": "GeoMultiPoint [GeoPoint]",
          "source": "src/Data-Geospatial.html#GeoMultiPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "GeoMultiPoint",
          "normalized": "GeoMultiPoint[GeoPoint]",
          "package": "geojson",
          "partial": "Geo Multi Point",
          "signature": "GeoMultiPoint[GeoPoint]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:GeoMultiPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "GeoMultiPolygon",
          "package": "geojson",
          "signature": "GeoMultiPolygon [GeoPolygon]",
          "source": "src/Data-Geospatial.html#GeoMultiPolygon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "GeoMultiPolygon",
          "normalized": "GeoMultiPolygon[GeoPolygon]",
          "package": "geojson",
          "partial": "Geo Multi Polygon",
          "signature": "GeoMultiPolygon[GeoPolygon]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:GeoMultiPolygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "GeoPoint",
          "package": "geojson",
          "signature": "GeoPoint GeoPositionWithoutCRS",
          "source": "src/Data-Geospatial.html#GeoPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "GeoPoint",
          "package": "geojson",
          "partial": "Geo Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:GeoPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "GeoPolygon",
          "package": "geojson",
          "signature": "GeoPolygon [GeoPositionWithoutCRS]",
          "source": "src/Data-Geospatial.html#GeoPolygon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "GeoPolygon",
          "normalized": "GeoPolygon[GeoPositionWithoutCRS]",
          "package": "geojson",
          "partial": "Geo Polygon",
          "signature": "GeoPolygon[GeoPositionWithoutCRS]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:GeoPolygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "IntProperty",
          "package": "geojson",
          "signature": "IntProperty Int",
          "source": "src/Data-Geospatial.html#GeoProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "IntProperty",
          "package": "geojson",
          "partial": "Int Property",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:IntProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "Line",
          "package": "geojson",
          "signature": "Line GeoLine",
          "source": "src/Data-Geospatial.html#GeospatialGeometry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "Line",
          "package": "geojson",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "LineString",
          "package": "geojson",
          "signature": "LineString GeoLine",
          "source": "src/Data-Geospatial.html#GeoPolyLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "LineString",
          "package": "geojson",
          "partial": "Line String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:LineString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "LinkedCRS",
          "package": "geojson",
          "signature": "LinkedCRS Href FormatString",
          "source": "src/Data-Geospatial.html#CRSObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "LinkedCRS",
          "package": "geojson",
          "partial": "Linked CRS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:LinkedCRS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "LonLat",
          "package": "geojson",
          "signature": "LonLat Longitude Latitude",
          "source": "src/Data-Geospatial.html#GeoPosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "LonLat",
          "package": "geojson",
          "partial": "Lon Lat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:LonLat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "LonLatAlt",
          "package": "geojson",
          "signature": "LonLatAlt Longitude Latitude Altitude",
          "source": "src/Data-Geospatial.html#GeoPosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "LonLatAlt",
          "package": "geojson",
          "partial": "Lon Lat Alt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:LonLatAlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "MultiLine",
          "package": "geojson",
          "signature": "MultiLine GeoMultiLine",
          "source": "src/Data-Geospatial.html#GeospatialGeometry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "MultiLine",
          "package": "geojson",
          "partial": "Multi Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:MultiLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "MultiPoint",
          "package": "geojson",
          "signature": "MultiPoint GeoMultiPoint",
          "source": "src/Data-Geospatial.html#GeospatialGeometry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "MultiPoint",
          "package": "geojson",
          "partial": "Multi Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:MultiPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "MultiPolygon",
          "package": "geojson",
          "signature": "MultiPolygon GeoMultiPolygon",
          "source": "src/Data-Geospatial.html#GeospatialGeometry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "MultiPolygon",
          "package": "geojson",
          "partial": "Multi Polygon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:MultiPolygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "NamedCRS",
          "package": "geojson",
          "signature": "NamedCRS Name",
          "source": "src/Data-Geospatial.html#CRSObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "NamedCRS",
          "package": "geojson",
          "partial": "Named CRS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:NamedCRS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "NoCRS",
          "package": "geojson",
          "signature": "NoCRS",
          "source": "src/Data-Geospatial.html#CRSObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "NoCRS",
          "package": "geojson",
          "partial": "No CRS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:NoCRS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "NoGeometry",
          "package": "geojson",
          "signature": "NoGeometry",
          "source": "src/Data-Geospatial.html#GeospatialGeometry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "NoGeometry",
          "package": "geojson",
          "partial": "No Geometry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:NoGeometry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "Point",
          "package": "geojson",
          "signature": "Point GeoPoint",
          "source": "src/Data-Geospatial.html#GeospatialGeometry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "Point",
          "package": "geojson",
          "partial": "Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "Poly",
          "package": "geojson",
          "signature": "Poly GeoPolygon",
          "source": "src/Data-Geospatial.html#GeoPolyLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "Poly",
          "package": "geojson",
          "partial": "Poly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:Poly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "Polygon",
          "package": "geojson",
          "signature": "Polygon GeoPolygon",
          "source": "src/Data-Geospatial.html#GeospatialGeometry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "Polygon",
          "package": "geojson",
          "partial": "Polygon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:Polygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "PropertyObject",
          "package": "geojson",
          "signature": "PropertyObject GeoPropertyObject",
          "source": "src/Data-Geospatial.html#GeoProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "PropertyObject",
          "package": "geojson",
          "partial": "Property Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:PropertyObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "StringProperty",
          "package": "geojson",
          "signature": "StringProperty String",
          "source": "src/Data-Geospatial.html#GeoProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "StringProperty",
          "package": "geojson",
          "partial": "String Property",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:StringProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "bbox",
          "package": "geojson",
          "signature": "Maybe BoundingBoxWithoutCRS",
          "source": "src/Data-Geospatial.html#GeoFeature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "bbox",
          "package": "geojson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:bbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default CRS according to Section 3 \u003ca\u003eCoordinate Reference System Objects\u003c/a\u003e is WGS84 which I believe,\n from http:\u003cem/\u003espatialreference.org\u003cem\u003eref\u003c/em\u003eepsg\u003cem\u003e4326\u003c/em\u003e -\u003e [JSON](http:\u003cem/\u003espatialreference.org\u003cem\u003eref\u003c/em\u003eepsg\u003cem\u003e4326\u003c/em\u003ejson/ \u003ca\u003eWGS84 in JSON\u003c/a\u003e)\n is represented thus:\n\u003c/p\u003e",
          "module": "Data.Geospatial",
          "name": "defaultCRS",
          "package": "geojson",
          "signature": "CRSObject",
          "source": "src/Data-Geospatial.html#defaultCRS",
          "type": "function"
        },
        "index": {
          "description": "The default CRS according to Section Coordinate Reference System Objects is WGS84 which believe from http spatialreference.org ref epsg JSON http spatialreference.org ref epsg json WGS84 in JSON is represented thus",
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "defaultCRS",
          "package": "geojson",
          "partial": "CRS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:defaultCRS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "featureId",
          "package": "geojson",
          "signature": "Maybe FeatureID",
          "source": "src/Data-Geospatial.html#GeoFeature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "featureId",
          "package": "geojson",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:featureId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "geometry",
          "package": "geojson",
          "signature": "GeospatialGeometry",
          "source": "src/Data-Geospatial.html#GeoFeature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "geometry",
          "package": "geojson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:geometry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geospatial",
          "name": "properties",
          "package": "geojson",
          "signature": "GeoPropertyObject",
          "source": "src/Data-Geospatial.html#GeoFeature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "properties",
          "package": "geojson",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:properties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe GeoPosition is a bit special in that when you convert it to GeoJSON,\n it will lose the CRS info attached to it and cannot be read back in\n from the GeoJSON.  Hence it is ineligible for the JSON type class,\n so this function will strip it down to a GeoPositionWithoutCRS, which is eligible\n\u003c/p\u003e",
          "module": "Data.Geospatial",
          "name": "stripCRSFromPosition",
          "package": "geojson",
          "signature": "GeoPosition -\u003e GeoPositionWithoutCRS",
          "source": "src/Data-Geospatial.html#stripCRSFromPosition",
          "type": "function"
        },
        "index": {
          "description": "the GeoPosition is bit special in that when you convert it to GeoJSON it will lose the CRS info attached to it and cannot be read back in from the GeoJSON Hence it is ineligible for the JSON type class so this function will strip it down to GeoPositionWithoutCRS which is eligible",
          "hierarchy": "Data Geospatial",
          "module": "Data.Geospatial",
          "name": "stripCRSFromPosition",
          "normalized": "GeoPosition-\u003eGeoPositionWithoutCRS",
          "package": "geojson",
          "partial": "CRSFrom Position",
          "signature": "GeoPosition-\u003eGeoPositionWithoutCRS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Data-Geospatial.html#v:stripCRSFromPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.GeoJSON",
          "name": "GeoJSON",
          "package": "geojson",
          "source": "src/Text-GeoJSON.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text GeoJSON",
          "module": "Text.GeoJSON",
          "name": "GeoJSON",
          "package": "geojson",
          "partial": "Geo JSON",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/geojson/docs/Text-GeoJSON.html#"
      }
    }
  ]
]