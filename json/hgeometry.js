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
        "word": "hgeometry"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.BoundingBox",
          "name": "BoundingBox",
          "package": "hgeometry",
          "source": "src/Data-Geometry-BoundingBox.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Geometry BoundingBox",
          "module": "Data.Geometry.BoundingBox",
          "name": "BoundingBox",
          "package": "hgeometry",
          "partial": "Bounding Box",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-BoundingBox.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBounding boxes\n\u003c/p\u003e\u003cp\u003eNote that a bounding box is always axis parallel, so rotating may have not\n | the expected effect\n\u003c/p\u003e",
          "module": "Data.Geometry.BoundingBox",
          "name": "BoundingBox2'",
          "package": "hgeometry",
          "source": "src/Data-Geometry-BoundingBox.html#BoundingBox2%27",
          "type": "data"
        },
        "index": {
          "description": "Bounding boxes Note that bounding box is always axis parallel so rotating may have not the expected effect",
          "hierarchy": "Data Geometry BoundingBox",
          "module": "Data.Geometry.BoundingBox",
          "name": "BoundingBox2'",
          "package": "hgeometry",
          "partial": "Bounding Box",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-BoundingBox.html#t:BoundingBox2-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class of objects for which we can compute a boundingbox\n\u003c/p\u003e",
          "module": "Data.Geometry.BoundingBox",
          "name": "IsBoxable",
          "package": "hgeometry",
          "source": "src/Data-Geometry-BoundingBox.html#IsBoxable",
          "type": "class"
        },
        "index": {
          "description": "class of objects for which we can compute boundingbox",
          "hierarchy": "Data Geometry BoundingBox",
          "module": "Data.Geometry.BoundingBox",
          "name": "IsBoxable",
          "package": "hgeometry",
          "partial": "Is Boxable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-BoundingBox.html#t:IsBoxable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.BoundingBox",
          "name": "BoundingBox2",
          "package": "hgeometry",
          "signature": "BoundingBox2",
          "source": "src/Data-Geometry-BoundingBox.html#BoundingBox2%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry BoundingBox",
          "module": "Data.Geometry.BoundingBox",
          "name": "BoundingBox2",
          "package": "hgeometry",
          "partial": "Bounding Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-BoundingBox.html#v:BoundingBox2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.BoundingBox",
          "name": "bbBottom",
          "package": "hgeometry",
          "signature": "BoundingBox2' a -\u003e a",
          "source": "src/Data-Geometry-BoundingBox.html#bbBottom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry BoundingBox",
          "module": "Data.Geometry.BoundingBox",
          "name": "bbBottom",
          "normalized": "BoundingBox a-\u003ea",
          "package": "hgeometry",
          "partial": "Bottom",
          "signature": "BoundingBox a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-BoundingBox.html#v:bbBottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.BoundingBox",
          "name": "bbFromList",
          "package": "hgeometry",
          "signature": "[g a] -\u003e BoundingBox2' a",
          "source": "src/Data-Geometry-BoundingBox.html#bbFromList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Geometry BoundingBox",
          "module": "Data.Geometry.BoundingBox",
          "name": "bbFromList",
          "normalized": "[a b]-\u003eBoundingBox b",
          "package": "hgeometry",
          "partial": "From List",
          "signature": "[g a]-\u003eBoundingBox a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-BoundingBox.html#v:bbFromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.BoundingBox",
          "name": "bbFromPoints",
          "package": "hgeometry",
          "signature": "[Point2' a] -\u003e BoundingBox2' a",
          "source": "src/Data-Geometry-BoundingBox.html#bbFromPoints",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry BoundingBox",
          "module": "Data.Geometry.BoundingBox",
          "name": "bbFromPoints",
          "normalized": "[Point a]-\u003eBoundingBox a",
          "package": "hgeometry",
          "partial": "From Points",
          "signature": "[Point a]-\u003eBoundingBox a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-BoundingBox.html#v:bbFromPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.BoundingBox",
          "name": "bbLeft",
          "package": "hgeometry",
          "signature": "BoundingBox2' a -\u003e a",
          "source": "src/Data-Geometry-BoundingBox.html#bbLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry BoundingBox",
          "module": "Data.Geometry.BoundingBox",
          "name": "bbLeft",
          "normalized": "BoundingBox a-\u003ea",
          "package": "hgeometry",
          "partial": "Left",
          "signature": "BoundingBox a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-BoundingBox.html#v:bbLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.BoundingBox",
          "name": "bbRight",
          "package": "hgeometry",
          "signature": "BoundingBox2' a -\u003e a",
          "source": "src/Data-Geometry-BoundingBox.html#bbRight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry BoundingBox",
          "module": "Data.Geometry.BoundingBox",
          "name": "bbRight",
          "normalized": "BoundingBox a-\u003ea",
          "package": "hgeometry",
          "partial": "Right",
          "signature": "BoundingBox a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-BoundingBox.html#v:bbRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.BoundingBox",
          "name": "bbTop",
          "package": "hgeometry",
          "signature": "BoundingBox2' a -\u003e a",
          "source": "src/Data-Geometry-BoundingBox.html#bbTop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry BoundingBox",
          "module": "Data.Geometry.BoundingBox",
          "name": "bbTop",
          "normalized": "BoundingBox a-\u003ea",
          "package": "hgeometry",
          "partial": "Top",
          "signature": "BoundingBox a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-BoundingBox.html#v:bbTop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.BoundingBox",
          "name": "boundingBox",
          "package": "hgeometry",
          "signature": "g a -\u003e BoundingBox2' a",
          "source": "src/Data-Geometry-BoundingBox.html#boundingBox",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Geometry BoundingBox",
          "module": "Data.Geometry.BoundingBox",
          "name": "boundingBox",
          "normalized": "a b-\u003eBoundingBox b",
          "package": "hgeometry",
          "partial": "Box",
          "signature": "g a-\u003eBoundingBox a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-BoundingBox.html#v:boundingBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.BoundingBox",
          "name": "height",
          "package": "hgeometry",
          "signature": "BoundingBox2' a -\u003e a",
          "source": "src/Data-Geometry-BoundingBox.html#height",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry BoundingBox",
          "module": "Data.Geometry.BoundingBox",
          "name": "height",
          "normalized": "BoundingBox a-\u003ea",
          "package": "hgeometry",
          "signature": "BoundingBox a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-BoundingBox.html#v:height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.BoundingBox",
          "name": "lowerLeft",
          "package": "hgeometry",
          "signature": "Point2' a",
          "source": "src/Data-Geometry-BoundingBox.html#BoundingBox2%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry BoundingBox",
          "module": "Data.Geometry.BoundingBox",
          "name": "lowerLeft",
          "package": "hgeometry",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-BoundingBox.html#v:lowerLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the bounding box of a list of things\n\u003c/p\u003e",
          "module": "Data.Geometry.BoundingBox",
          "name": "mergeBoxes",
          "package": "hgeometry",
          "signature": "[BoundingBox2' a] -\u003e BoundingBox2' a",
          "source": "src/Data-Geometry-BoundingBox.html#mergeBoxes",
          "type": "function"
        },
        "index": {
          "description": "get the bounding box of list of things",
          "hierarchy": "Data Geometry BoundingBox",
          "module": "Data.Geometry.BoundingBox",
          "name": "mergeBoxes",
          "normalized": "[BoundingBox a]-\u003eBoundingBox a",
          "package": "hgeometry",
          "partial": "Boxes",
          "signature": "[BoundingBox a]-\u003eBoundingBox a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-BoundingBox.html#v:mergeBoxes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.BoundingBox",
          "name": "upperRight",
          "package": "hgeometry",
          "signature": "Point2' a",
          "source": "src/Data-Geometry-BoundingBox.html#BoundingBox2%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry BoundingBox",
          "module": "Data.Geometry.BoundingBox",
          "name": "upperRight",
          "package": "hgeometry",
          "partial": "Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-BoundingBox.html#v:upperRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.BoundingBox",
          "name": "width",
          "package": "hgeometry",
          "signature": "BoundingBox2' a -\u003e a",
          "source": "src/Data-Geometry-BoundingBox.html#width",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry BoundingBox",
          "module": "Data.Geometry.BoundingBox",
          "name": "width",
          "normalized": "BoundingBox a-\u003ea",
          "package": "hgeometry",
          "signature": "BoundingBox a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-BoundingBox.html#v:width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Circle",
          "name": "Circle",
          "package": "hgeometry",
          "source": "src/Data-Geometry-Circle.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Geometry Circle",
          "module": "Data.Geometry.Circle",
          "name": "Circle",
          "package": "hgeometry",
          "partial": "Circle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Circle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA circle in the plane\n\u003c/p\u003e",
          "module": "Data.Geometry.Circle",
          "name": "Circle2'",
          "package": "hgeometry",
          "source": "src/Data-Geometry-Circle.html#Circle2%27",
          "type": "data"
        },
        "index": {
          "description": "circle in the plane",
          "hierarchy": "Data Geometry Circle",
          "module": "Data.Geometry.Circle",
          "name": "Circle2'",
          "package": "hgeometry",
          "partial": "Circle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Circle.html#t:Circle2-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA disc in the plane (i.e. a circle inclusiding its contents)\n\u003c/p\u003e",
          "module": "Data.Geometry.Circle",
          "name": "Disc2'",
          "package": "hgeometry",
          "source": "src/Data-Geometry-Circle.html#Disc2%27",
          "type": "newtype"
        },
        "index": {
          "description": "disc in the plane i.e circle inclusiding its contents",
          "hierarchy": "Data Geometry Circle",
          "module": "Data.Geometry.Circle",
          "name": "Disc2'",
          "package": "hgeometry",
          "partial": "Disc",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Circle.html#t:Disc2-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efunctions on circles\n\u003c/p\u003e\u003cp\u003eClass expressing functions that circlelike objects all have. Like a center\n and a radius. Minimal implementation is either getCircle or center and radius\n\u003c/p\u003e",
          "module": "Data.Geometry.Circle",
          "name": "IsCircleLike",
          "package": "hgeometry",
          "source": "src/Data-Geometry-Circle.html#IsCircleLike",
          "type": "class"
        },
        "index": {
          "description": "functions on circles Class expressing functions that circlelike objects all have Like center and radius Minimal implementation is either getCircle or center and radius",
          "hierarchy": "Data Geometry Circle",
          "module": "Data.Geometry.Circle",
          "name": "IsCircleLike",
          "package": "hgeometry",
          "partial": "Is Circle Like",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Circle.html#t:IsCircleLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Circle",
          "name": "Circle2",
          "package": "hgeometry",
          "signature": "Circle2 (Point2' a) a",
          "source": "src/Data-Geometry-Circle.html#Circle2%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry Circle",
          "module": "Data.Geometry.Circle",
          "name": "Circle2",
          "package": "hgeometry",
          "partial": "Circle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Circle.html#v:Circle2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Circle",
          "name": "Disc2",
          "package": "hgeometry",
          "signature": "Disc2",
          "source": "src/Data-Geometry-Circle.html#Disc2%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry Circle",
          "module": "Data.Geometry.Circle",
          "name": "Disc2",
          "package": "hgeometry",
          "partial": "Disc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Circle.html#v:Disc2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Circle",
          "name": "border",
          "package": "hgeometry",
          "signature": "Circle2' a",
          "source": "src/Data-Geometry-Circle.html#Disc2%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry Circle",
          "module": "Data.Geometry.Circle",
          "name": "border",
          "package": "hgeometry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Circle.html#v:border"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Circle",
          "name": "center",
          "package": "hgeometry",
          "signature": "t a -\u003e Point2' a",
          "source": "src/Data-Geometry-Circle.html#center",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Geometry Circle",
          "module": "Data.Geometry.Circle",
          "name": "center",
          "normalized": "a b-\u003ePoint b",
          "package": "hgeometry",
          "signature": "t a-\u003ePoint a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Circle.html#v:center"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Circle",
          "name": "distance",
          "package": "hgeometry",
          "signature": "Point2' a -\u003e t a -\u003e a",
          "source": "src/Data-Geometry-Circle.html#distance",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Geometry Circle",
          "module": "Data.Geometry.Circle",
          "name": "distance",
          "normalized": "Point a-\u003eb a-\u003ea",
          "package": "hgeometry",
          "signature": "Point a-\u003et a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Circle.html#v:distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Circle",
          "name": "distanceToCenter",
          "package": "hgeometry",
          "signature": "Point2' a -\u003e t a -\u003e a",
          "source": "src/Data-Geometry-Circle.html#distanceToCenter",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Geometry Circle",
          "module": "Data.Geometry.Circle",
          "name": "distanceToCenter",
          "normalized": "Point a-\u003eb a-\u003ea",
          "package": "hgeometry",
          "partial": "To Center",
          "signature": "Point a-\u003et a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Circle.html#v:distanceToCenter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Circle",
          "name": "getCircle",
          "package": "hgeometry",
          "signature": "t a -\u003e Circle2' a",
          "source": "src/Data-Geometry-Circle.html#getCircle",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Geometry Circle",
          "module": "Data.Geometry.Circle",
          "name": "getCircle",
          "normalized": "a b-\u003eCircle b",
          "package": "hgeometry",
          "partial": "Circle",
          "signature": "t a-\u003eCircle a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Circle.html#v:getCircle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhether or not p lies in OR on the circle c\n\u003c/p\u003e",
          "module": "Data.Geometry.Circle",
          "name": "inCircle",
          "package": "hgeometry",
          "signature": "Point2' a -\u003e Circle2' a -\u003e Bool",
          "source": "src/Data-Geometry-Circle.html#inCircle",
          "type": "function"
        },
        "index": {
          "description": "whether or not lies in OR on the circle",
          "hierarchy": "Data Geometry Circle",
          "module": "Data.Geometry.Circle",
          "name": "inCircle",
          "normalized": "Point a-\u003eCircle a-\u003eBool",
          "package": "hgeometry",
          "partial": "Circle",
          "signature": "Point a-\u003eCircle a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Circle.html#v:inCircle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhether or not a point lies in a disc: this includes its border\n\u003c/p\u003e",
          "module": "Data.Geometry.Circle",
          "name": "inDisc",
          "package": "hgeometry",
          "signature": "Point2' a -\u003e Disc2' a -\u003e Bool",
          "source": "src/Data-Geometry-Circle.html#inDisc",
          "type": "function"
        },
        "index": {
          "description": "whether or not point lies in disc this includes its border",
          "hierarchy": "Data Geometry Circle",
          "module": "Data.Geometry.Circle",
          "name": "inDisc",
          "normalized": "Point a-\u003eDisc a-\u003eBool",
          "package": "hgeometry",
          "partial": "Disc",
          "signature": "Point a-\u003eDisc a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Circle.html#v:inDisc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhether or not p lies strictly inside the circle c\n\u003c/p\u003e",
          "module": "Data.Geometry.Circle",
          "name": "insideCircle",
          "package": "hgeometry",
          "signature": "Point2' a -\u003e Circle2' a -\u003e Bool",
          "source": "src/Data-Geometry-Circle.html#insideCircle",
          "type": "function"
        },
        "index": {
          "description": "whether or not lies strictly inside the circle",
          "hierarchy": "Data Geometry Circle",
          "module": "Data.Geometry.Circle",
          "name": "insideCircle",
          "normalized": "Point a-\u003eCircle a-\u003eBool",
          "package": "hgeometry",
          "partial": "Circle",
          "signature": "Point a-\u003eCircle a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Circle.html#v:insideCircle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhether or not a point lies strictly inside a disc.\n\u003c/p\u003e",
          "module": "Data.Geometry.Circle",
          "name": "insideDisc",
          "package": "hgeometry",
          "signature": "Point2' a -\u003e Disc2' a -\u003e Bool",
          "source": "src/Data-Geometry-Circle.html#insideDisc",
          "type": "function"
        },
        "index": {
          "description": "whether or not point lies strictly inside disc",
          "hierarchy": "Data Geometry Circle",
          "module": "Data.Geometry.Circle",
          "name": "insideDisc",
          "normalized": "Point a-\u003eDisc a-\u003eBool",
          "package": "hgeometry",
          "partial": "Disc",
          "signature": "Point a-\u003eDisc a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Circle.html#v:insideDisc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhether or not p lies on the circle\n\u003c/p\u003e",
          "module": "Data.Geometry.Circle",
          "name": "onCircle",
          "package": "hgeometry",
          "signature": "Point2' a -\u003e Circle2' a -\u003e Bool",
          "source": "src/Data-Geometry-Circle.html#onCircle",
          "type": "function"
        },
        "index": {
          "description": "whether or not lies on the circle",
          "hierarchy": "Data Geometry Circle",
          "module": "Data.Geometry.Circle",
          "name": "onCircle",
          "normalized": "Point a-\u003eCircle a-\u003eBool",
          "package": "hgeometry",
          "partial": "Circle",
          "signature": "Point a-\u003eCircle a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Circle.html#v:onCircle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Circle",
          "name": "radius",
          "package": "hgeometry",
          "signature": "t a -\u003e a",
          "source": "src/Data-Geometry-Circle.html#radius",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Geometry Circle",
          "module": "Data.Geometry.Circle",
          "name": "radius",
          "normalized": "a b-\u003eb",
          "package": "hgeometry",
          "signature": "t a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Circle.html#v:radius"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Geometry",
          "name": "Geometry",
          "package": "hgeometry",
          "source": "src/Data-Geometry-Geometry.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Geometry Geometry",
          "module": "Data.Geometry.Geometry",
          "name": "Geometry",
          "package": "hgeometry",
          "partial": "Geometry",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Geometry.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Geometry",
          "name": "HasPoints",
          "package": "hgeometry",
          "source": "src/Data-Geometry-Geometry.html#HasPoints",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Geometry Geometry",
          "module": "Data.Geometry.Geometry",
          "name": "HasPoints",
          "package": "hgeometry",
          "partial": "Has Points",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Geometry.html#t:HasPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePoint based geometries\n\u003c/p\u003e\u003cp\u003eA class that defines a point2 functor. This defines that every operation that\n we can do on a point we can also do on instances of this class. i.e. by\n applying the operation on the underlying points.\n\u003c/p\u003e",
          "module": "Data.Geometry.Geometry",
          "name": "IsPoint2Functor",
          "package": "hgeometry",
          "source": "src/Data-Geometry-Geometry.html#IsPoint2Functor",
          "type": "class"
        },
        "index": {
          "description": "Point based geometries class that defines point2 functor This defines that every operation that we can do on point we can also do on instances of this class i.e by applying the operation on the underlying points",
          "hierarchy": "Data Geometry Geometry",
          "module": "Data.Geometry.Geometry",
          "name": "IsPoint2Functor",
          "package": "hgeometry",
          "partial": "Is Point Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Geometry.html#t:IsPoint2Functor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass that indicates that something can be transformable using\n an affine transformation\n\u003c/p\u003e",
          "module": "Data.Geometry.Geometry",
          "name": "IsTransformable",
          "package": "hgeometry",
          "source": "src/Data-Geometry-Geometry.html#IsTransformable",
          "type": "class"
        },
        "index": {
          "description": "Class that indicates that something can be transformable using an affine transformation",
          "hierarchy": "Data Geometry Geometry",
          "module": "Data.Geometry.Geometry",
          "name": "IsTransformable",
          "package": "hgeometry",
          "partial": "Is Transformable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Geometry.html#t:IsTransformable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Geometry",
          "name": "Matrix3",
          "package": "hgeometry",
          "source": "src/Data-Geometry-Geometry.html#Matrix3",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Geometry Geometry",
          "module": "Data.Geometry.Geometry",
          "name": "Matrix3",
          "package": "hgeometry",
          "partial": "Matrix",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Geometry.html#t:Matrix3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic linear algebra to support affine transformations in 2D\n\u003c/p\u003e\u003cp\u003eType to represent a matrix, form is:\n [ [ a11, a12, a13 ]\n   [ a21, a22, a23 ]\n   [ a31, a32, a33 ] ]\n\u003c/p\u003e",
          "module": "Data.Geometry.Geometry",
          "name": "Vec3",
          "package": "hgeometry",
          "source": "src/Data-Geometry-Geometry.html#Vec3",
          "type": "newtype"
        },
        "index": {
          "description": "Basic linear algebra to support affine transformations in Type to represent matrix form is a11 a12 a13 a21 a22 a23 a31 a32 a33",
          "hierarchy": "Data Geometry Geometry",
          "module": "Data.Geometry.Geometry",
          "name": "Vec3",
          "package": "hgeometry",
          "partial": "Vec",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Geometry.html#t:Vec3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Geometry",
          "name": "Matrix3",
          "package": "hgeometry",
          "signature": "Matrix3 (Vec3 (Vec3 a))",
          "source": "src/Data-Geometry-Geometry.html#Matrix3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry Geometry",
          "module": "Data.Geometry.Geometry",
          "name": "Matrix3",
          "package": "hgeometry",
          "partial": "Matrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Geometry.html#v:Matrix3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Geometry",
          "name": "Vec3",
          "package": "hgeometry",
          "signature": "Vec3 (a, a, a)",
          "source": "src/Data-Geometry-Geometry.html#Vec3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry Geometry",
          "module": "Data.Geometry.Geometry",
          "name": "Vec3",
          "normalized": "Vec(a,a,a)",
          "package": "hgeometry",
          "partial": "Vec",
          "signature": "Vec(a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Geometry.html#v:Vec3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Geometry",
          "name": "identityMatrix3",
          "package": "hgeometry",
          "signature": "Matrix3 a",
          "source": "src/Data-Geometry-Geometry.html#identityMatrix3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry Geometry",
          "module": "Data.Geometry.Geometry",
          "name": "identityMatrix3",
          "package": "hgeometry",
          "partial": "Matrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Geometry.html#v:identityMatrix3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egiven a single list of 9 elements, construct a Matrix3\n\u003c/p\u003e",
          "module": "Data.Geometry.Geometry",
          "name": "matrix3FromList",
          "package": "hgeometry",
          "signature": "[a] -\u003e Matrix3 a",
          "source": "src/Data-Geometry-Geometry.html#matrix3FromList",
          "type": "function"
        },
        "index": {
          "description": "given single list of elements construct Matrix3",
          "hierarchy": "Data Geometry Geometry",
          "module": "Data.Geometry.Geometry",
          "name": "matrix3FromList",
          "normalized": "[a]-\u003eMatrix a",
          "package": "hgeometry",
          "partial": "From List",
          "signature": "[a]-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Geometry.html#v:matrix3FromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a 3x3 matrix as a list of lists, convert it to a Matrix3\n\u003c/p\u003e",
          "module": "Data.Geometry.Geometry",
          "name": "matrix3FromLists",
          "package": "hgeometry",
          "signature": "[[a]] -\u003e Matrix3 a",
          "source": "src/Data-Geometry-Geometry.html#matrix3FromLists",
          "type": "function"
        },
        "index": {
          "description": "Given x3 matrix as list of lists convert it to Matrix3",
          "hierarchy": "Data Geometry Geometry",
          "module": "Data.Geometry.Geometry",
          "name": "matrix3FromLists",
          "normalized": "[[a]]-\u003eMatrix a",
          "package": "hgeometry",
          "partial": "From Lists",
          "signature": "[[a]]-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Geometry.html#v:matrix3FromLists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGather the elements of the matrix in one long list (in row by row order)\n\u003c/p\u003e",
          "module": "Data.Geometry.Geometry",
          "name": "matrix3ToList",
          "package": "hgeometry",
          "signature": "Matrix3 a -\u003e [a]",
          "source": "src/Data-Geometry-Geometry.html#matrix3ToList",
          "type": "function"
        },
        "index": {
          "description": "Gather the elements of the matrix in one long list in row by row order",
          "hierarchy": "Data Geometry Geometry",
          "module": "Data.Geometry.Geometry",
          "name": "matrix3ToList",
          "normalized": "Matrix a-\u003e[a]",
          "package": "hgeometry",
          "partial": "To List",
          "signature": "Matrix a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Geometry.html#v:matrix3ToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Geometry",
          "name": "matrix3ToLists",
          "package": "hgeometry",
          "signature": "Matrix3 a -\u003e [[a]]",
          "source": "src/Data-Geometry-Geometry.html#matrix3ToLists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry Geometry",
          "module": "Data.Geometry.Geometry",
          "name": "matrix3ToLists",
          "normalized": "Matrix a-\u003e[[a]]",
          "package": "hgeometry",
          "partial": "To Lists",
          "signature": "Matrix a-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Geometry.html#v:matrix3ToLists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Geometry",
          "name": "p2fmap",
          "package": "hgeometry",
          "signature": "(Point2' a -\u003e Point2' b) -\u003e g a -\u003e g b",
          "source": "src/Data-Geometry-Geometry.html#p2fmap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Geometry Geometry",
          "module": "Data.Geometry.Geometry",
          "name": "p2fmap",
          "normalized": "(Point a-\u003ePoint b)-\u003ec a-\u003ec b",
          "package": "hgeometry",
          "signature": "(Point a-\u003ePoint b)-\u003eg a-\u003eg b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Geometry.html#v:p2fmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Geometry",
          "name": "points",
          "package": "hgeometry",
          "signature": "g a -\u003e [Point2' a]",
          "source": "src/Data-Geometry-Geometry.html#points",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Geometry Geometry",
          "module": "Data.Geometry.Geometry",
          "name": "points",
          "normalized": "a b-\u003e[Point b]",
          "package": "hgeometry",
          "signature": "g a-\u003e[Point a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Geometry.html#v:points"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Geometry",
          "name": "transformWith",
          "package": "hgeometry",
          "signature": "Matrix3 a -\u003e g a -\u003e g a",
          "source": "src/Data-Geometry-Geometry.html#transformWith",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Geometry Geometry",
          "module": "Data.Geometry.Geometry",
          "name": "transformWith",
          "normalized": "Matrix a-\u003eb a-\u003eb a",
          "package": "hgeometry",
          "partial": "With",
          "signature": "Matrix a-\u003eg a-\u003eg a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Geometry.html#v:transformWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Line",
          "name": "Line",
          "package": "hgeometry",
          "source": "src/Data-Geometry-Line.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Geometry Line",
          "module": "Data.Geometry.Line",
          "name": "Line",
          "package": "hgeometry",
          "partial": "Line",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Line.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Line",
          "name": "HasLength",
          "package": "hgeometry",
          "source": "src/Data-Geometry-Line.html#HasLength",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Geometry Line",
          "module": "Data.Geometry.Line",
          "name": "HasLength",
          "package": "hgeometry",
          "partial": "Has Length",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Line.html#t:HasLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infinite line\n\u003c/p\u003e",
          "module": "Data.Geometry.Line",
          "name": "Line2'",
          "package": "hgeometry",
          "source": "src/Data-Geometry-Line.html#Line2%27",
          "type": "newtype"
        },
        "index": {
          "description": "An infinite line",
          "hierarchy": "Data Geometry Line",
          "module": "Data.Geometry.Line",
          "name": "Line2'",
          "package": "hgeometry",
          "partial": "Line",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Line.html#t:Line2-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Line",
          "name": "LineLike",
          "package": "hgeometry",
          "source": "src/Data-Geometry-Line.html#LineLike",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Geometry Line",
          "module": "Data.Geometry.Line",
          "name": "LineLike",
          "package": "hgeometry",
          "partial": "Line Like",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Line.html#t:LineLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple line segment in 2D consisint of a start and an end-point\n\u003c/p\u003e",
          "module": "Data.Geometry.Line",
          "name": "LineSegment2'",
          "package": "hgeometry",
          "source": "src/Data-Geometry-Line.html#LineSegment2%27",
          "type": "data"
        },
        "index": {
          "description": "simple line segment in consisint of start and an end-point",
          "hierarchy": "Data Geometry Line",
          "module": "Data.Geometry.Line",
          "name": "LineSegment2'",
          "package": "hgeometry",
          "partial": "Line Segment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Line.html#t:LineSegment2-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolylines\n\u003c/p\u003e",
          "module": "Data.Geometry.Line",
          "name": "Polyline2'",
          "package": "hgeometry",
          "source": "src/Data-Geometry-Line.html#Polyline2%27",
          "type": "newtype"
        },
        "index": {
          "description": "Polylines",
          "hierarchy": "Data Geometry Line",
          "module": "Data.Geometry.Line",
          "name": "Polyline2'",
          "package": "hgeometry",
          "partial": "Polyline",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Line.html#t:Polyline2-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Line",
          "name": "Line2",
          "package": "hgeometry",
          "signature": "Line2 (LineSegment2' a)",
          "source": "src/Data-Geometry-Line.html#Line2%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry Line",
          "module": "Data.Geometry.Line",
          "name": "Line2",
          "package": "hgeometry",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Line.html#v:Line2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Line",
          "name": "LineSegment2",
          "package": "hgeometry",
          "signature": "LineSegment2",
          "source": "src/Data-Geometry-Line.html#LineSegment2%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry Line",
          "module": "Data.Geometry.Line",
          "name": "LineSegment2",
          "package": "hgeometry",
          "partial": "Line Segment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Line.html#v:LineSegment2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Line",
          "name": "Polyline2",
          "package": "hgeometry",
          "signature": "Polyline2 [LineSegment2' a]",
          "source": "src/Data-Geometry-Line.html#Polyline2%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry Line",
          "module": "Data.Geometry.Line",
          "name": "Polyline2",
          "normalized": "Polyline[LineSegment a]",
          "package": "hgeometry",
          "partial": "Polyline",
          "signature": "Polyline[LineSegment a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Line.html#v:Polyline2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Line",
          "name": "endPoint",
          "package": "hgeometry",
          "signature": "Point2' a",
          "source": "src/Data-Geometry-Line.html#LineSegment2%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry Line",
          "module": "Data.Geometry.Line",
          "name": "endPoint",
          "package": "hgeometry",
          "partial": "Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Line.html#v:endPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Line",
          "name": "inRange",
          "package": "hgeometry",
          "signature": "a -\u003e (a, a) -\u003e Bool",
          "source": "src/Data-Geometry-Line.html#inRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry Line",
          "module": "Data.Geometry.Line",
          "name": "inRange",
          "normalized": "a-\u003e(a,a)-\u003eBool",
          "package": "hgeometry",
          "partial": "Range",
          "signature": "a-\u003e(a,a)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Line.html#v:inRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efunctions on Linesegments and Polylines\n\u003c/p\u003e",
          "module": "Data.Geometry.Line",
          "name": "isSimpleLine",
          "package": "hgeometry",
          "signature": "Polyline2' a -\u003e Bool",
          "source": "src/Data-Geometry-Line.html#isSimpleLine",
          "type": "function"
        },
        "index": {
          "description": "functions on Linesegments and Polylines",
          "hierarchy": "Data Geometry Line",
          "module": "Data.Geometry.Line",
          "name": "isSimpleLine",
          "normalized": "Polyline a-\u003eBool",
          "package": "hgeometry",
          "partial": "Simple Line",
          "signature": "Polyline a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Line.html#v:isSimpleLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe length of the line-like segment\n\u003c/p\u003e",
          "module": "Data.Geometry.Line",
          "name": "length",
          "package": "hgeometry",
          "signature": "c -\u003e PM c",
          "source": "src/Data-Geometry-Line.html#length",
          "type": "method"
        },
        "index": {
          "description": "The length of the line-like segment",
          "hierarchy": "Data Geometry Line",
          "module": "Data.Geometry.Line",
          "name": "length",
          "normalized": "a-\u003ePM a",
          "package": "hgeometry",
          "signature": "c-\u003ePM c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Line.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinear interpolation / points on line segments etc.\n\u003c/p\u003e\u003cp\u003esimple linear interpolation, assuming t in [0,1]\n\u003c/p\u003e",
          "module": "Data.Geometry.Line",
          "name": "linear",
          "package": "hgeometry",
          "signature": "a -\u003e a -\u003e a -\u003e a",
          "source": "src/Data-Geometry-Line.html#linear",
          "type": "function"
        },
        "index": {
          "description": "Linear interpolation points on line segments etc simple linear interpolation assuming in",
          "hierarchy": "Data Geometry Line",
          "module": "Data.Geometry.Line",
          "name": "linear",
          "normalized": "a-\u003ea-\u003ea-\u003ea",
          "package": "hgeometry",
          "signature": "a-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Line.html#v:linear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Line",
          "name": "onLineSegment",
          "package": "hgeometry",
          "signature": "Point2' a -\u003e LineSegment2' a -\u003e Bool",
          "source": "src/Data-Geometry-Line.html#onLineSegment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry Line",
          "module": "Data.Geometry.Line",
          "name": "onLineSegment",
          "normalized": "Point a-\u003eLineSegment a-\u003eBool",
          "package": "hgeometry",
          "partial": "Line Segment",
          "signature": "Point a-\u003eLineSegment a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Line.html#v:onLineSegment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the point at \u003ccode\u003etime\u003c/code\u003e t (t in [0,1])\n\u003c/p\u003e",
          "module": "Data.Geometry.Line",
          "name": "pointAt",
          "package": "hgeometry",
          "signature": "a -\u003e c a -\u003e Point2' a",
          "source": "src/Data-Geometry-Line.html#pointAt",
          "type": "method"
        },
        "index": {
          "description": "get the point at time in",
          "hierarchy": "Data Geometry Line",
          "module": "Data.Geometry.Line",
          "name": "pointAt",
          "normalized": "a-\u003eb a-\u003ePoint a",
          "package": "hgeometry",
          "partial": "At",
          "signature": "a-\u003ec a-\u003ePoint a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Line.html#v:pointAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructing polylines\n\u003c/p\u003e",
          "module": "Data.Geometry.Line",
          "name": "polyLine",
          "package": "hgeometry",
          "signature": "[Point2' a] -\u003e Polyline2' a",
          "source": "src/Data-Geometry-Line.html#polyLine",
          "type": "function"
        },
        "index": {
          "description": "Constructing polylines",
          "hierarchy": "Data Geometry Line",
          "module": "Data.Geometry.Line",
          "name": "polyLine",
          "normalized": "[Point a]-\u003ePolyline a",
          "package": "hgeometry",
          "partial": "Line",
          "signature": "[Point a]-\u003ePolyline a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Line.html#v:polyLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Line",
          "name": "startPoint",
          "package": "hgeometry",
          "signature": "Point2' a",
          "source": "src/Data-Geometry-Line.html#LineSegment2%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry Line",
          "module": "Data.Geometry.Line",
          "name": "startPoint",
          "package": "hgeometry",
          "partial": "Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Line.html#v:startPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Line",
          "name": "toSimpleLine",
          "package": "hgeometry",
          "signature": "Polyline2' a -\u003e LineSegment2' a",
          "source": "src/Data-Geometry-Line.html#toSimpleLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry Line",
          "module": "Data.Geometry.Line",
          "name": "toSimpleLine",
          "normalized": "Polyline a-\u003eLineSegment a",
          "package": "hgeometry",
          "partial": "Simple Line",
          "signature": "Polyline a-\u003eLineSegment a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Line.html#v:toSimpleLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Line",
          "name": "toSimpleLineOption",
          "package": "hgeometry",
          "signature": "Polyline2' a -\u003e Maybe (LineSegment2' a)",
          "source": "src/Data-Geometry-Line.html#toSimpleLineOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry Line",
          "module": "Data.Geometry.Line",
          "name": "toSimpleLineOption",
          "normalized": "Polyline a-\u003eMaybe(LineSegment a)",
          "package": "hgeometry",
          "partial": "Simple Line Option",
          "signature": "Polyline a-\u003eMaybe(LineSegment a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Line.html#v:toSimpleLineOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Point",
          "name": "Point",
          "package": "hgeometry",
          "source": "src/Data-Geometry-Point.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Geometry Point",
          "module": "Data.Geometry.Point",
          "name": "Point",
          "package": "hgeometry",
          "partial": "Point",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Point.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Point",
          "name": "Point2'",
          "package": "hgeometry",
          "source": "src/Data-Geometry-Point.html#Point2%27",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Geometry Point",
          "module": "Data.Geometry.Point",
          "name": "Point2'",
          "package": "hgeometry",
          "partial": "Point",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Point.html#t:Point2-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003escalar multiplication\n\u003c/p\u003e",
          "module": "Data.Geometry.Point",
          "name": "(|*|)",
          "package": "hgeometry",
          "signature": "a -\u003e Point2' a -\u003e Point2' a",
          "source": "src/Data-Geometry-Point.html#%7C%2A%7C",
          "type": "function"
        },
        "index": {
          "description": "scalar multiplication",
          "hierarchy": "Data Geometry Point",
          "module": "Data.Geometry.Point",
          "name": "(|*|) |*|",
          "normalized": "a-\u003ePoint a-\u003ePoint a",
          "package": "hgeometry",
          "signature": "a-\u003ePoint a-\u003ePoint a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Point.html#v:-124--42--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Point",
          "name": "(|+|)",
          "package": "hgeometry",
          "signature": "Point2' a -\u003e Point2' a -\u003e Point2' a",
          "source": "src/Data-Geometry-Point.html#%7C%2B%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry Point",
          "module": "Data.Geometry.Point",
          "name": "(|+|) |+|",
          "normalized": "Point a-\u003ePoint a-\u003ePoint a",
          "package": "hgeometry",
          "signature": "Point a-\u003ePoint a-\u003ePoint a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Point.html#v:-124--43--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Point",
          "name": "(|-|)",
          "package": "hgeometry",
          "signature": "Point2' a -\u003e Point2' a -\u003e Point2' a",
          "source": "src/Data-Geometry-Point.html#%7C-%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry Point",
          "module": "Data.Geometry.Point",
          "name": "(|-|) |-|",
          "normalized": "Point a-\u003ePoint a-\u003ePoint a",
          "package": "hgeometry",
          "signature": "Point a-\u003ePoint a-\u003ePoint a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Point.html#v:-124--45--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edot product\n\u003c/p\u003e",
          "module": "Data.Geometry.Point",
          "name": "(|@|)",
          "package": "hgeometry",
          "signature": "Point2' a -\u003e Point2' a -\u003e a",
          "source": "src/Data-Geometry-Point.html#%7C%40%7C",
          "type": "function"
        },
        "index": {
          "description": "dot product",
          "hierarchy": "Data Geometry Point",
          "module": "Data.Geometry.Point",
          "name": "(|@|) |@|",
          "normalized": "Point a-\u003ePoint a-\u003ea",
          "package": "hgeometry",
          "signature": "Point a-\u003ePoint a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Point.html#v:-124--64--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Point",
          "name": "Point2",
          "package": "hgeometry",
          "signature": "Point2 (a, a)",
          "source": "src/Data-Geometry-Point.html#Point2%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry Point",
          "module": "Data.Geometry.Point",
          "name": "Point2",
          "normalized": "Point(a,a)",
          "package": "hgeometry",
          "partial": "Point",
          "signature": "Point(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Point.html#v:Point2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eeuclidean distance between p and q\n\u003c/p\u003e",
          "module": "Data.Geometry.Point",
          "name": "dist",
          "package": "hgeometry",
          "signature": "Point2' a -\u003e Point2' a -\u003e a",
          "source": "src/Data-Geometry-Point.html#dist",
          "type": "function"
        },
        "index": {
          "description": "euclidean distance between and",
          "hierarchy": "Data Geometry Point",
          "module": "Data.Geometry.Point",
          "name": "dist",
          "normalized": "Point a-\u003ePoint a-\u003ea",
          "package": "hgeometry",
          "signature": "Point a-\u003ePoint a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Point.html#v:dist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Point",
          "name": "getX",
          "package": "hgeometry",
          "signature": "Point2' a -\u003e a",
          "source": "src/Data-Geometry-Point.html#getX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry Point",
          "module": "Data.Geometry.Point",
          "name": "getX",
          "normalized": "Point a-\u003ea",
          "package": "hgeometry",
          "signature": "Point a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Point.html#v:getX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Point",
          "name": "getY",
          "package": "hgeometry",
          "signature": "Point2' a -\u003e a",
          "source": "src/Data-Geometry-Point.html#getY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry Point",
          "module": "Data.Geometry.Point",
          "name": "getY",
          "normalized": "Point a-\u003ea",
          "package": "hgeometry",
          "signature": "Point a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Point.html#v:getY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSquared euclidean distance between p and q\n\u003c/p\u003e",
          "module": "Data.Geometry.Point",
          "name": "l22dist",
          "package": "hgeometry",
          "signature": "Point2' a -\u003e Point2' a -\u003e a",
          "source": "src/Data-Geometry-Point.html#l22dist",
          "type": "function"
        },
        "index": {
          "description": "Squared euclidean distance between and",
          "hierarchy": "Data Geometry Point",
          "module": "Data.Geometry.Point",
          "name": "l22dist",
          "normalized": "Point a-\u003ePoint a-\u003ea",
          "package": "hgeometry",
          "signature": "Point a-\u003ePoint a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Point.html#v:l22dist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Polygon",
          "name": "Polygon",
          "package": "hgeometry",
          "source": "src/Data-Geometry-Polygon.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Geometry Polygon",
          "module": "Data.Geometry.Polygon",
          "name": "Polygon",
          "package": "hgeometry",
          "partial": "Polygon",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Polygon.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolygons\n\u003c/p\u003e\u003cp\u003eClass that defines what a polygon is. Note that it is assumed that the\n first and the last point are *NOT* the same point.\n\u003c/p\u003e",
          "module": "Data.Geometry.Polygon",
          "name": "IsPolygon",
          "package": "hgeometry",
          "source": "src/Data-Geometry-Polygon.html#IsPolygon",
          "type": "class"
        },
        "index": {
          "description": "Polygons Class that defines what polygon is Note that it is assumed that the first and the last point are NOT the same point",
          "hierarchy": "Data Geometry Polygon",
          "module": "Data.Geometry.Polygon",
          "name": "IsPolygon",
          "package": "hgeometry",
          "partial": "Is Polygon",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Polygon.html#t:IsPolygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA multipolygon consists of several simple polygons\n\u003c/p\u003e",
          "module": "Data.Geometry.Polygon",
          "name": "MultiPolygon'",
          "package": "hgeometry",
          "source": "src/Data-Geometry-Polygon.html#MultiPolygon%27",
          "type": "data"
        },
        "index": {
          "description": "multipolygon consists of several simple polygons",
          "hierarchy": "Data Geometry Polygon",
          "module": "Data.Geometry.Polygon",
          "name": "MultiPolygon'",
          "package": "hgeometry",
          "partial": "Multi Polygon'",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Polygon.html#t:MultiPolygon-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple polygons, i.e. polygons consisting of a sequence of points (vertices)\n | such that the edges do not intersect. Simple polygons do not contain holes\n\u003c/p\u003e",
          "module": "Data.Geometry.Polygon",
          "name": "SimplePolygon'",
          "package": "hgeometry",
          "source": "src/Data-Geometry-Polygon.html#SimplePolygon%27",
          "type": "data"
        },
        "index": {
          "description": "Simple polygons i.e polygons consisting of sequence of points vertices such that the edges do not intersect Simple polygons do not contain holes",
          "hierarchy": "Data Geometry Polygon",
          "module": "Data.Geometry.Polygon",
          "name": "SimplePolygon'",
          "package": "hgeometry",
          "partial": "Simple Polygon'",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Polygon.html#t:SimplePolygon-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Polygon",
          "name": "MultiPolygon",
          "package": "hgeometry",
          "signature": "MultiPolygon [SimplePolygon' a]",
          "source": "src/Data-Geometry-Polygon.html#MultiPolygon%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry Polygon",
          "module": "Data.Geometry.Polygon",
          "name": "MultiPolygon",
          "normalized": "MultiPolygon[SimplePolygon' a]",
          "package": "hgeometry",
          "partial": "Multi Polygon",
          "signature": "MultiPolygon[SimplePolygon' a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Polygon.html#v:MultiPolygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Polygon",
          "name": "SimplePolygon",
          "package": "hgeometry",
          "signature": "SimplePolygon [Point2' a]",
          "source": "src/Data-Geometry-Polygon.html#SimplePolygon%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Geometry Polygon",
          "module": "Data.Geometry.Polygon",
          "name": "SimplePolygon",
          "normalized": "SimplePolygon[Point a]",
          "package": "hgeometry",
          "partial": "Simple Polygon",
          "signature": "SimplePolygon[Point a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Polygon.html#v:SimplePolygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Polygon",
          "name": "containsHoles",
          "package": "hgeometry",
          "signature": "p a -\u003e Bool",
          "source": "src/Data-Geometry-Polygon.html#containsHoles",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Geometry Polygon",
          "module": "Data.Geometry.Polygon",
          "name": "containsHoles",
          "normalized": "a b-\u003eBool",
          "package": "hgeometry",
          "partial": "Holes",
          "signature": "p a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Polygon.html#v:containsHoles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefault implementation assumes points are in order\n\u003c/p\u003e",
          "module": "Data.Geometry.Polygon",
          "name": "edges",
          "package": "hgeometry",
          "signature": "p a -\u003e [(Point2' a, Point2' a)]",
          "source": "src/Data-Geometry-Polygon.html#edges",
          "type": "method"
        },
        "index": {
          "description": "default implementation assumes points are in order",
          "hierarchy": "Data Geometry Polygon",
          "module": "Data.Geometry.Polygon",
          "name": "edges",
          "normalized": "a b-\u003e[(Point b,Point b)]",
          "package": "hgeometry",
          "signature": "p a-\u003e[(Point a,Point a)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Polygon.html#v:edges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Polygon",
          "name": "isSimple",
          "package": "hgeometry",
          "signature": "p a -\u003e Bool",
          "source": "src/Data-Geometry-Polygon.html#isSimple",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Geometry Polygon",
          "module": "Data.Geometry.Polygon",
          "name": "isSimple",
          "normalized": "a b-\u003eBool",
          "package": "hgeometry",
          "partial": "Simple",
          "signature": "p a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Polygon.html#v:isSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.Polygon",
          "name": "vertices",
          "package": "hgeometry",
          "signature": "p a -\u003e [Point2' a]",
          "source": "src/Data-Geometry-Polygon.html#vertices",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Geometry Polygon",
          "module": "Data.Geometry.Polygon",
          "name": "vertices",
          "normalized": "a b-\u003e[Point b]",
          "package": "hgeometry",
          "signature": "p a-\u003e[Point a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-Polygon.html#v:vertices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.SetOperations",
          "name": "SetOperations",
          "package": "hgeometry",
          "source": "src/Data-Geometry-SetOperations.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Geometry SetOperations",
          "module": "Data.Geometry.SetOperations",
          "name": "SetOperations",
          "package": "hgeometry",
          "partial": "Set Operations",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-SetOperations.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class to represent that a pair of geometry objects (both parameterized\n over a) can be intersected.\n\u003c/p\u003e",
          "module": "Data.Geometry.SetOperations",
          "name": "AreIntersectable",
          "package": "hgeometry",
          "source": "src/Data-Geometry-SetOperations.html#AreIntersectable",
          "type": "class"
        },
        "index": {
          "description": "class to represent that pair of geometry objects both parameterized over can be intersected",
          "hierarchy": "Data Geometry SetOperations",
          "module": "Data.Geometry.SetOperations",
          "name": "AreIntersectable",
          "package": "hgeometry",
          "partial": "Are Intersectable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-SetOperations.html#t:AreIntersectable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Geometry.SetOperations",
          "name": "intersectionPoints",
          "package": "hgeometry",
          "signature": "g a -\u003e h a -\u003e [Point2' a]",
          "source": "src/Data-Geometry-SetOperations.html#intersectionPoints",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Geometry SetOperations",
          "module": "Data.Geometry.SetOperations",
          "name": "intersectionPoints",
          "normalized": "a b-\u003ec b-\u003e[Point b]",
          "package": "hgeometry",
          "partial": "Points",
          "signature": "g a-\u003eh a-\u003e[Point a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hgeometry/docs/Data-Geometry-SetOperations.html#v:intersectionPoints"
      }
    }
  ]
]