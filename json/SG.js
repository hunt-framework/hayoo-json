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
        "word": "SG"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module with types to use in a 3D system, and various helper functions.\n Several more functions are available for use in the \u003ca\u003eData.SG.Geometry\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SG.Geometry.ThreeDim",
          "name": "ThreeDim",
          "package": "SG",
          "source": "src/Data-SG-Geometry-ThreeDim.html",
          "type": "module"
        },
        "index": {
          "description": "module with types to use in system and various helper functions Several more functions are available for use in the Data.SG.Geometry module",
          "hierarchy": "Data SG Geometry ThreeDim",
          "module": "Data.SG.Geometry.ThreeDim",
          "name": "ThreeDim",
          "package": "SG",
          "partial": "Three Dim",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry-ThreeDim.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA line in 3D space.  A line is a point and a free vector indicating\n  direction.  A line may be treated by a function as either finite (taking\n  the magnitude of the free vector as the length) or infinite (ignoring the\n  magnitude of the direction vector).\n\u003c/p\u003e",
          "module": "Data.SG.Geometry.ThreeDim",
          "name": "Line3'",
          "package": "SG",
          "source": "src/Data-SG-Geometry-ThreeDim.html#Line3%27",
          "type": "data"
        },
        "index": {
          "description": "line in space line is point and free vector indicating direction line may be treated by function as either finite taking the magnitude of the free vector as the length or infinite ignoring the magnitude of the direction vector",
          "hierarchy": "Data SG Geometry ThreeDim",
          "module": "Data.SG.Geometry.ThreeDim",
          "name": "Line3'",
          "package": "SG",
          "partial": "Line",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry-ThreeDim.html#t:Line3-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA point in 3D space.\n\u003c/p\u003e",
          "module": "Data.SG.Geometry.ThreeDim",
          "name": "Point3'",
          "package": "SG",
          "source": "src/Data-SG-Geometry-ThreeDim.html#Point3%27",
          "type": "newtype"
        },
        "index": {
          "description": "point in space",
          "hierarchy": "Data SG Geometry ThreeDim",
          "module": "Data.SG.Geometry.ThreeDim",
          "name": "Point3'",
          "package": "SG",
          "partial": "Point",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry-ThreeDim.html#t:Point3-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA relative vector (free vector) in 3D space.  The triple is the x, y, z components,\n and the last item is the \u003cem\u003esquared magnitude\u003c/em\u003e of the vector, which is stored\n with it to speed up various operations.  It is suggested you use \u003ccode\u003e\u003ca\u003emakeRel3\u003c/a\u003e\u003c/code\u003e\n to create one of these, unless the magnitude is easily apparent, e.g. \u003ccode\u003eRel3\n (0, 1, 1) 2\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SG.Geometry.ThreeDim",
          "name": "Rel3'",
          "package": "SG",
          "source": "src/Data-SG-Geometry-ThreeDim.html#Rel3%27",
          "type": "data"
        },
        "index": {
          "description": "relative vector free vector in space The triple is the components and the last item is the squared magnitude of the vector which is stored with it to speed up various operations It is suggested you use makeRel3 to create one of these unless the magnitude is easily apparent e.g Rel3",
          "hierarchy": "Data SG Geometry ThreeDim",
          "module": "Data.SG.Geometry.ThreeDim",
          "name": "Rel3'",
          "package": "SG",
          "partial": "Rel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry-ThreeDim.html#t:Rel3-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SG.Geometry.ThreeDim",
          "name": "Line3",
          "package": "SG",
          "signature": "Line3",
          "source": "src/Data-SG-Geometry-ThreeDim.html#Line3%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SG Geometry ThreeDim",
          "module": "Data.SG.Geometry.ThreeDim",
          "name": "Line3",
          "package": "SG",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry-ThreeDim.html#v:Line3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SG.Geometry.ThreeDim",
          "name": "Point3",
          "package": "SG",
          "signature": "Point3 (a, a, a)",
          "source": "src/Data-SG-Geometry-ThreeDim.html#Point3%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SG Geometry ThreeDim",
          "module": "Data.SG.Geometry.ThreeDim",
          "name": "Point3",
          "normalized": "Point(a,a,a)",
          "package": "SG",
          "partial": "Point",
          "signature": "Point(a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry-ThreeDim.html#v:Point3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SG.Geometry.ThreeDim",
          "name": "Rel3",
          "package": "SG",
          "signature": "Rel3 (a, a, a) a",
          "source": "src/Data-SG-Geometry-ThreeDim.html#Rel3%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SG Geometry ThreeDim",
          "module": "Data.SG.Geometry.ThreeDim",
          "name": "Rel3",
          "normalized": "Rel(a,a,a)a",
          "package": "SG",
          "partial": "Rel",
          "signature": "Rel(a,a,a)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry-ThreeDim.html#v:Rel3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SG.Geometry.ThreeDim",
          "name": "getLineDir3",
          "package": "SG",
          "signature": "Rel3' a",
          "source": "src/Data-SG-Geometry-ThreeDim.html#Line3%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SG Geometry ThreeDim",
          "module": "Data.SG.Geometry.ThreeDim",
          "name": "getLineDir3",
          "package": "SG",
          "partial": "Line Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry-ThreeDim.html#v:getLineDir3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SG.Geometry.ThreeDim",
          "name": "getLineStart3",
          "package": "SG",
          "signature": "Point3' a",
          "source": "src/Data-SG-Geometry-ThreeDim.html#Line3%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SG Geometry ThreeDim",
          "module": "Data.SG.Geometry.ThreeDim",
          "name": "getLineStart3",
          "package": "SG",
          "partial": "Line Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry-ThreeDim.html#v:getLineStart3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a Rel3' vector\n\u003c/p\u003e",
          "module": "Data.SG.Geometry.ThreeDim",
          "name": "makeRel3",
          "package": "SG",
          "signature": "(a, a, a) -\u003e Rel3' a",
          "source": "src/Data-SG-Geometry-ThreeDim.html#makeRel3",
          "type": "function"
        },
        "index": {
          "description": "Constructs Rel3 vector",
          "hierarchy": "Data SG Geometry ThreeDim",
          "module": "Data.SG.Geometry.ThreeDim",
          "name": "makeRel3",
          "normalized": "(a,a,a)-\u003eRel a",
          "package": "SG",
          "partial": "Rel",
          "signature": "(a,a,a)-\u003eRel a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry-ThreeDim.html#v:makeRel3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module with types to use in a 2D system, and various helper functions.\n Several more functions are available for use in the \u003ca\u003eData.SG.Geometry\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SG.Geometry.TwoDim",
          "name": "TwoDim",
          "package": "SG",
          "source": "src/Data-SG-Geometry-TwoDim.html",
          "type": "module"
        },
        "index": {
          "description": "module with types to use in system and various helper functions Several more functions are available for use in the Data.SG.Geometry module",
          "hierarchy": "Data SG Geometry TwoDim",
          "module": "Data.SG.Geometry.TwoDim",
          "name": "TwoDim",
          "package": "SG",
          "partial": "Two Dim",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry-TwoDim.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA line in 2D space.  A line is a point, and a free vector indicating\n  direction.  A line may be treated by a function as either finite (taking\n  the magnitude of the free vector as the length) or infinite (ignoring the\n  magnitude of the direction vector).\n\u003c/p\u003e",
          "module": "Data.SG.Geometry.TwoDim",
          "name": "Line2'",
          "package": "SG",
          "source": "src/Data-SG-Geometry-TwoDim.html#Line2%27",
          "type": "data"
        },
        "index": {
          "description": "line in space line is point and free vector indicating direction line may be treated by function as either finite taking the magnitude of the free vector as the length or infinite ignoring the magnitude of the direction vector",
          "hierarchy": "Data SG Geometry TwoDim",
          "module": "Data.SG.Geometry.TwoDim",
          "name": "Line2'",
          "package": "SG",
          "partial": "Line",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry-TwoDim.html#t:Line2-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA point in 2D space.\n\u003c/p\u003e",
          "module": "Data.SG.Geometry.TwoDim",
          "name": "Point2'",
          "package": "SG",
          "source": "src/Data-SG-Geometry-TwoDim.html#Point2%27",
          "type": "newtype"
        },
        "index": {
          "description": "point in space",
          "hierarchy": "Data SG Geometry TwoDim",
          "module": "Data.SG.Geometry.TwoDim",
          "name": "Point2'",
          "package": "SG",
          "partial": "Point",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry-TwoDim.html#t:Point2-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA relative vector (free vector) in 2D space.  The pair are the x and y components,\n and the last item is the \u003cem\u003esquared magnitude\u003c/em\u003e of the vector, which is stored\n with it to speed up various operations.  It is suggested you use \u003ccode\u003e\u003ca\u003emakeRel2\u003c/a\u003e\u003c/code\u003e\n to create one of these, unless the square magnitude is easily apparent, e.g. \u003ccode\u003eRel2\n (0, 2) 4\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SG.Geometry.TwoDim",
          "name": "Rel2'",
          "package": "SG",
          "source": "src/Data-SG-Geometry-TwoDim.html#Rel2%27",
          "type": "data"
        },
        "index": {
          "description": "relative vector free vector in space The pair are the and components and the last item is the squared magnitude of the vector which is stored with it to speed up various operations It is suggested you use makeRel2 to create one of these unless the square magnitude is easily apparent e.g Rel2",
          "hierarchy": "Data SG Geometry TwoDim",
          "module": "Data.SG.Geometry.TwoDim",
          "name": "Rel2'",
          "package": "SG",
          "partial": "Rel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry-TwoDim.html#t:Rel2-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SG.Geometry.TwoDim",
          "name": "Line2",
          "package": "SG",
          "signature": "Line2",
          "source": "src/Data-SG-Geometry-TwoDim.html#Line2%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SG Geometry TwoDim",
          "module": "Data.SG.Geometry.TwoDim",
          "name": "Line2",
          "package": "SG",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry-TwoDim.html#v:Line2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SG.Geometry.TwoDim",
          "name": "Point2",
          "package": "SG",
          "signature": "Point2 (a, a)",
          "source": "src/Data-SG-Geometry-TwoDim.html#Point2%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SG Geometry TwoDim",
          "module": "Data.SG.Geometry.TwoDim",
          "name": "Point2",
          "normalized": "Point(a,a)",
          "package": "SG",
          "partial": "Point",
          "signature": "Point(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry-TwoDim.html#v:Point2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SG.Geometry.TwoDim",
          "name": "Rel2",
          "package": "SG",
          "signature": "Rel2 (a, a) a",
          "source": "src/Data-SG-Geometry-TwoDim.html#Rel2%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SG Geometry TwoDim",
          "module": "Data.SG.Geometry.TwoDim",
          "name": "Rel2",
          "normalized": "Rel(a,a)a",
          "package": "SG",
          "partial": "Rel",
          "signature": "Rel(a,a)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry-TwoDim.html#v:Rel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds all the intersections between a line from the first list and a line from\n the second list, and how far along that is each line.  That is, this is a bit\n like mapMaybe composed with intersectLines2 on all pairings of a line from the\n first list and a line from the second list.\n\u003c/p\u003e",
          "module": "Data.SG.Geometry.TwoDim",
          "name": "findAllIntersections2",
          "package": "SG",
          "signature": "([Line2' a], [Line2' a]) -\u003e [((Line2' a, a), (Line2' a, a))]",
          "source": "src/Data-SG-Geometry-TwoDim.html#findAllIntersections2",
          "type": "function"
        },
        "index": {
          "description": "Finds all the intersections between line from the first list and line from the second list and how far along that is each line That is this is bit like mapMaybe composed with intersectLines2 on all pairings of line from the first list and line from the second list",
          "hierarchy": "Data SG Geometry TwoDim",
          "module": "Data.SG.Geometry.TwoDim",
          "name": "findAllIntersections2",
          "normalized": "([Line a],[Line a])-\u003e[((Line a,a),(Line a,a))]",
          "package": "SG",
          "partial": "All Intersections",
          "signature": "([Line a],[Line a])-\u003e[((Line a,a),(Line a,a))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry-TwoDim.html#v:findAllIntersections2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SG.Geometry.TwoDim",
          "name": "getLineDir2",
          "package": "SG",
          "signature": "Rel2' a",
          "source": "src/Data-SG-Geometry-TwoDim.html#Line2%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SG Geometry TwoDim",
          "module": "Data.SG.Geometry.TwoDim",
          "name": "getLineDir2",
          "package": "SG",
          "partial": "Line Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry-TwoDim.html#v:getLineDir2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SG.Geometry.TwoDim",
          "name": "getLineStart2",
          "package": "SG",
          "signature": "Point2' a",
          "source": "src/Data-SG-Geometry-TwoDim.html#Line2%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SG Geometry TwoDim",
          "module": "Data.SG.Geometry.TwoDim",
          "name": "getLineStart2",
          "package": "SG",
          "partial": "Line Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry-TwoDim.html#v:getLineStart2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a line, and a circle (defined by a point and a radius), finds the points\n of intersection.\n\u003c/p\u003e\u003cp\u003eIf the line does not intersect the circle, Nothing is returned.  If they do\n intersect, two values are returned that are distances along the line.  That\n is, given \u003ccode\u003eJust (a, b) = intersectLineCircle l c\u003c/code\u003e, the two points of intersection\n are \u003ccode\u003e(alongLine l a, alongLine l b)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe ordering of the two items in the pair is arbitrary, and if the line is a\n tangent to the circle, the values will be the same.\n\u003c/p\u003e",
          "module": "Data.SG.Geometry.TwoDim",
          "name": "intersectLineCircle",
          "package": "SG",
          "signature": "Line2' a -\u003e (Point2' a, a) -\u003e Maybe (a, a)",
          "source": "src/Data-SG-Geometry-TwoDim.html#intersectLineCircle",
          "type": "function"
        },
        "index": {
          "description": "Given line and circle defined by point and radius finds the points of intersection If the line does not intersect the circle Nothing is returned If they do intersect two values are returned that are distances along the line That is given Just intersectLineCircle the two points of intersection are alongLine alongLine The ordering of the two items in the pair is arbitrary and if the line is tangent to the circle the values will be the same",
          "hierarchy": "Data SG Geometry TwoDim",
          "module": "Data.SG.Geometry.TwoDim",
          "name": "intersectLineCircle",
          "normalized": "Line a-\u003e(Point a,a)-\u003eMaybe(a,a)",
          "package": "SG",
          "partial": "Line Circle",
          "signature": "Line a-\u003e(Point a,a)-\u003eMaybe(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry-TwoDim.html#v:intersectLineCircle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven two 2D lines, finds out their intersection.  The first part of the\n result pair is how much to multiply the direction vector of the first line\n by (and add it to the start point of the first line) to reach the\n intersection, and the second part is the corresponding item for the second line.\n  So given \u003ccode\u003eJust (a, b) = intersectLines2 la lb\u003c/code\u003e, it should be the case (minus\n some possible precision loss) that \u003ccode\u003ealongLine a la == alongLine b lb\u003c/code\u003e.  If the\n lines are parallel, Nothing is returned.\n\u003c/p\u003e\u003cp\u003eNote that this function assumes the lines are infinite.  If you want to check\n for the intersection of two finite lines, check if the two parts of the result\n pair are both in the range 0 to 1 inclusive.\n\u003c/p\u003e",
          "module": "Data.SG.Geometry.TwoDim",
          "name": "intersectLines2",
          "package": "SG",
          "signature": "Line2' a -\u003e Line2' a -\u003e Maybe (a, a)",
          "source": "src/Data-SG-Geometry-TwoDim.html#intersectLines2",
          "type": "function"
        },
        "index": {
          "description": "Given two lines finds out their intersection The first part of the result pair is how much to multiply the direction vector of the first line by and add it to the start point of the first line to reach the intersection and the second part is the corresponding item for the second line So given Just intersectLines2 la lb it should be the case minus some possible precision loss that alongLine la alongLine lb If the lines are parallel Nothing is returned Note that this function assumes the lines are infinite If you want to check for the intersection of two finite lines check if the two parts of the result pair are both in the range to inclusive",
          "hierarchy": "Data SG Geometry TwoDim",
          "module": "Data.SG.Geometry.TwoDim",
          "name": "intersectLines2",
          "normalized": "Line a-\u003eLine a-\u003eMaybe(a,a)",
          "package": "SG",
          "partial": "Lines",
          "signature": "Line a-\u003eLine a-\u003eMaybe(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry-TwoDim.html#v:intersectLines2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a Rel2' vector.\n\u003c/p\u003e",
          "module": "Data.SG.Geometry.TwoDim",
          "name": "makeRel2",
          "package": "SG",
          "signature": "(a, a) -\u003e Rel2' a",
          "source": "src/Data-SG-Geometry-TwoDim.html#makeRel2",
          "type": "function"
        },
        "index": {
          "description": "Constructs Rel2 vector",
          "hierarchy": "Data SG Geometry TwoDim",
          "module": "Data.SG.Geometry.TwoDim",
          "name": "makeRel2",
          "normalized": "(a,a)-\u003eRel a",
          "package": "SG",
          "partial": "Rel",
          "signature": "(a,a)-\u003eRel a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry-TwoDim.html#v:makeRel2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the vector perpendicular to the given 2D vector.  If you pass it a vector\n that is in a clockwise direction around a polygon, the result will always face\n away from the polygon.\n\u003c/p\u003e",
          "module": "Data.SG.Geometry.TwoDim",
          "name": "perpendicular2",
          "package": "SG",
          "signature": "Rel2' a -\u003e Rel2' a",
          "source": "src/Data-SG-Geometry-TwoDim.html#perpendicular2",
          "type": "function"
        },
        "index": {
          "description": "Gets the vector perpendicular to the given vector If you pass it vector that is in clockwise direction around polygon the result will always face away from the polygon",
          "hierarchy": "Data SG Geometry TwoDim",
          "module": "Data.SG.Geometry.TwoDim",
          "name": "perpendicular2",
          "normalized": "Rel a-\u003eRel a",
          "package": "SG",
          "signature": "Rel a-\u003eRel a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry-TwoDim.html#v:perpendicular2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003epointAtZ\u003c/a\u003e\u003c/code\u003e, but returns a 2D vector instead of a 3D vector\n\u003c/p\u003e",
          "module": "Data.SG.Geometry.TwoDim",
          "name": "point2AtZ",
          "package": "SG",
          "signature": "ln a -\u003e a -\u003e Maybe (Point2' a)",
          "source": "src/Data-SG-Geometry-TwoDim.html#point2AtZ",
          "type": "function"
        },
        "index": {
          "description": "Like pointAtZ but returns vector instead of vector",
          "hierarchy": "Data SG Geometry TwoDim",
          "module": "Data.SG.Geometry.TwoDim",
          "name": "point2AtZ",
          "normalized": "a b-\u003eb-\u003eMaybe(Point b)",
          "package": "SG",
          "partial": "At",
          "signature": "ln a-\u003ea-\u003eMaybe(Point a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry-TwoDim.html#v:point2AtZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReflects the first direction vector against the given surface normal. The\n resulting direction vector should have the same magnitude as the original\n first parameter.  An example:\n\u003c/p\u003e\u003cpre\u003e makeRel2 (-3, -4) `reflectAgainst2` makeRel2 (0,1) == makeRel2 (-3, 4)\n\u003c/pre\u003e",
          "module": "Data.SG.Geometry.TwoDim",
          "name": "reflectAgainst2",
          "package": "SG",
          "signature": "Rel2' a -\u003e Rel2' a -\u003e Rel2' a",
          "source": "src/Data-SG-Geometry-TwoDim.html#reflectAgainst2",
          "type": "function"
        },
        "index": {
          "description": "Reflects the first direction vector against the given surface normal The resulting direction vector should have the same magnitude as the original first parameter An example makeRel2 reflectAgainst2 makeRel2 makeRel2",
          "hierarchy": "Data SG Geometry TwoDim",
          "module": "Data.SG.Geometry.TwoDim",
          "name": "reflectAgainst2",
          "normalized": "Rel a-\u003eRel a-\u003eRel a",
          "package": "SG",
          "partial": "Against",
          "signature": "Rel a-\u003eRel a-\u003eRel a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry-TwoDim.html#v:reflectAgainst2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReflects the first direction vector against the given surface normal.  The\n resulting direction vector should have the same magnitude as the original first\n parameter.\n\u003c/p\u003e\u003cp\u003eThe reflection is not performed if the given vector points along the same\n direction as the normal, that is: if once projected onto the normal vector,\n the component is positive, the original first parameter is returned\n unmodified.  Examples:\n\u003c/p\u003e\u003cpre\u003e makeRel2 (-3, -4) `reflectAgainstIfNeeded2` makeRel2 (0,1) == makeRel2 (-3, 4)\n makeRel2 (-3, 4) `reflectAgainstIfNeeded2` makeRel2 (0,1) == makeRel2 (-3, 4)\n\u003c/pre\u003e",
          "module": "Data.SG.Geometry.TwoDim",
          "name": "reflectAgainstIfNeeded2",
          "package": "SG",
          "signature": "Rel2' a -\u003e Rel2' a -\u003e Rel2' a",
          "source": "src/Data-SG-Geometry-TwoDim.html#reflectAgainstIfNeeded2",
          "type": "function"
        },
        "index": {
          "description": "Reflects the first direction vector against the given surface normal The resulting direction vector should have the same magnitude as the original first parameter The reflection is not performed if the given vector points along the same direction as the normal that is if once projected onto the normal vector the component is positive the original first parameter is returned unmodified Examples makeRel2 reflectAgainstIfNeeded2 makeRel2 makeRel2 makeRel2 reflectAgainstIfNeeded2 makeRel2 makeRel2",
          "hierarchy": "Data SG Geometry TwoDim",
          "module": "Data.SG.Geometry.TwoDim",
          "name": "reflectAgainstIfNeeded2",
          "normalized": "Rel a-\u003eRel a-\u003eRel a",
          "package": "SG",
          "partial": "Against If Needed",
          "signature": "Rel a-\u003eRel a-\u003eRel a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry-TwoDim.html#v:reflectAgainstIfNeeded2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the angle, in \u003cem\u003eradians\u003c/em\u003e, anti-clockwise from the x-axis.  If you pass\n the all-zero vector, the return value will be zero.\n\u003c/p\u003e",
          "module": "Data.SG.Geometry.TwoDim",
          "name": "toAngle",
          "package": "SG",
          "signature": "Rel2' a -\u003e a",
          "source": "src/Data-SG-Geometry-TwoDim.html#toAngle",
          "type": "function"
        },
        "index": {
          "description": "Gets the angle in radians anti-clockwise from the x-axis If you pass the all-zero vector the return value will be zero",
          "hierarchy": "Data SG Geometry TwoDim",
          "module": "Data.SG.Geometry.TwoDim",
          "name": "toAngle",
          "normalized": "Rel a-\u003ea",
          "package": "SG",
          "partial": "Angle",
          "signature": "Rel a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry-TwoDim.html#v:toAngle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module has the type-class (and associated functions) for dealing with\n geometric systems of 2 or 3 dimensions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SG.Geometry",
          "name": "Geometry",
          "package": "SG",
          "source": "src/Data-SG-Geometry.html",
          "type": "module"
        },
        "index": {
          "description": "This module has the type-class and associated functions for dealing with geometric systems of or dimensions",
          "hierarchy": "Data SG Geometry",
          "module": "Data.SG.Geometry",
          "name": "Geometry",
          "package": "SG",
          "partial": "Geometry",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA geometry system, parameterised over points, relative (free) vectors, and\n lines.  There are separate instances for two dimensions and for three dimensions.\n Each pair of type-class parameters is uniquely determined by the other parameter\n (i.e. by the dimensionality, and which vector type you are using).\n\u003c/p\u003e\u003cp\u003eMinimal implementation: everything but scaleRel.\n\u003c/p\u003e",
          "module": "Data.SG.Geometry",
          "name": "Geometry",
          "package": "SG",
          "source": "src/Data-SG-Geometry.html#Geometry",
          "type": "class"
        },
        "index": {
          "description": "geometry system parameterised over points relative free vectors and lines There are separate instances for two dimensions and for three dimensions Each pair of type-class parameters is uniquely determined by the other parameter i.e by the dimensionality and which vector type you are using Minimal implementation everything but scaleRel",
          "hierarchy": "Data SG Geometry",
          "module": "Data.SG.Geometry",
          "name": "Geometry",
          "package": "SG",
          "partial": "Geometry",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry.html#t:Geometry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a multiple of the \u003cem\u003edirection vector\u003c/em\u003e (this is \u003cem\u003enot\u003c/em\u003e distance unless\n the direction vector is a unit vector), calculates that point.\n\u003c/p\u003e",
          "module": "Data.SG.Geometry",
          "name": "alongLine",
          "package": "SG",
          "signature": "a -\u003e ln a -\u003e pt a",
          "source": "src/Data-SG-Geometry.html#alongLine",
          "type": "function"
        },
        "index": {
          "description": "Given multiple of the direction vector this is not distance unless the direction vector is unit vector calculates that point",
          "hierarchy": "Data SG Geometry",
          "module": "Data.SG.Geometry",
          "name": "alongLine",
          "normalized": "a-\u003eb a-\u003ec a",
          "package": "SG",
          "partial": "Line",
          "signature": "a-\u003eln a-\u003ept a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry.html#v:alongLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if the given point is on the given line (to within a small epsilon-tolerance).\n  If it is, gives back the distance along the line (as a multiple of its direction\n vector) to the point in a Just wrapper.  If the point is not on the line, Nothing\n is returned.\n\u003c/p\u003e",
          "module": "Data.SG.Geometry",
          "name": "distAlongLine",
          "package": "SG",
          "signature": "pt a -\u003e ln a -\u003e Maybe a",
          "source": "src/Data-SG-Geometry.html#distAlongLine",
          "type": "function"
        },
        "index": {
          "description": "Checks if the given point is on the given line to within small epsilon-tolerance If it is gives back the distance along the line as multiple of its direction vector to the point in Just wrapper If the point is not on the line Nothing is returned",
          "hierarchy": "Data SG Geometry",
          "module": "Data.SG.Geometry",
          "name": "distAlongLine",
          "normalized": "a b-\u003ec b-\u003eMaybe b",
          "package": "SG",
          "partial": "Along Line",
          "signature": "pt a-\u003eln a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry.html#v:distAlongLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines the relative (free) vector \u003cem\u003eto\u003c/em\u003e the first parameter \u003cem\u003efrom\u003c/em\u003e the\n second parameter.  So:\n\u003c/p\u003e\u003cpre\u003e Point2 (1,8) `fromPt` Point2 (3,4) == Point2 (-2,3)\n\u003c/pre\u003e",
          "module": "Data.SG.Geometry",
          "name": "fromPt",
          "package": "SG",
          "signature": "pt a -\u003e pt a -\u003e rel a",
          "source": "src/Data-SG-Geometry.html#fromPt",
          "type": "method"
        },
        "index": {
          "description": "Determines the relative free vector to the first parameter from the second parameter So Point2 fromPt Point2 Point2",
          "hierarchy": "Data SG Geometry",
          "module": "Data.SG.Geometry",
          "name": "fromPt",
          "normalized": "a b-\u003ea b-\u003ec b",
          "package": "SG",
          "partial": "Pt",
          "signature": "pt a-\u003ept a-\u003erel a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry.html#v:fromPt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the direction vector of the line.\n\u003c/p\u003e",
          "module": "Data.SG.Geometry",
          "name": "getLineDir",
          "package": "SG",
          "signature": "ln a -\u003e rel a",
          "source": "src/Data-SG-Geometry.html#getLineDir",
          "type": "function"
        },
        "index": {
          "description": "Gets the direction vector of the line",
          "hierarchy": "Data SG Geometry",
          "module": "Data.SG.Geometry",
          "name": "getLineDir",
          "normalized": "a b-\u003ec b",
          "package": "SG",
          "partial": "Line Dir",
          "signature": "ln a-\u003erel a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry.html#v:getLineDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the point at the end of the line.\n\u003c/p\u003e",
          "module": "Data.SG.Geometry",
          "name": "getLineEnd",
          "package": "SG",
          "signature": "ln a -\u003e pt a",
          "source": "src/Data-SG-Geometry.html#getLineEnd",
          "type": "function"
        },
        "index": {
          "description": "Gets the point at the end of the line",
          "hierarchy": "Data SG Geometry",
          "module": "Data.SG.Geometry",
          "name": "getLineEnd",
          "normalized": "a b-\u003ec b",
          "package": "SG",
          "partial": "Line End",
          "signature": "ln a-\u003ept a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry.html#v:getLineEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the point at the start of the line.\n\u003c/p\u003e",
          "module": "Data.SG.Geometry",
          "name": "getLineStart",
          "package": "SG",
          "signature": "ln a -\u003e pt a",
          "source": "src/Data-SG-Geometry.html#getLineStart",
          "type": "function"
        },
        "index": {
          "description": "Gets the point at the start of the line",
          "hierarchy": "Data SG Geometry",
          "module": "Data.SG.Geometry",
          "name": "getLineStart",
          "normalized": "a b-\u003ec b",
          "package": "SG",
          "partial": "Line Start",
          "signature": "ln a-\u003ept a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry.html#v:getLineStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a line, converts it back into its point and relative vector.  It should\n always be the case that \u003ccode\u003euncurry makeLine . getLineVecs\u003c/code\u003e is the identity function.\n\u003c/p\u003e",
          "module": "Data.SG.Geometry",
          "name": "getLineVecs",
          "package": "SG",
          "signature": "ln a -\u003e (pt a, rel a)",
          "source": "src/Data-SG-Geometry.html#getLineVecs",
          "type": "method"
        },
        "index": {
          "description": "Given line converts it back into its point and relative vector It should always be the case that uncurry makeLine getLineVecs is the identity function",
          "hierarchy": "Data SG Geometry",
          "module": "Data.SG.Geometry",
          "name": "getLineVecs",
          "normalized": "a b-\u003e(c b,d b)",
          "package": "SG",
          "partial": "Line Vecs",
          "signature": "ln a-\u003e(pt a,rel a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry.html#v:getLineVecs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if the given point is on the given line (to within a small epsilon-tolerance).\n\u003c/p\u003e",
          "module": "Data.SG.Geometry",
          "name": "isOnLine",
          "package": "SG",
          "signature": "pt a -\u003e ln a -\u003e Bool",
          "source": "src/Data-SG-Geometry.html#isOnLine",
          "type": "function"
        },
        "index": {
          "description": "Checks if the given point is on the given line to within small epsilon-tolerance",
          "hierarchy": "Data SG Geometry",
          "module": "Data.SG.Geometry",
          "name": "isOnLine",
          "normalized": "a b-\u003ec b-\u003eBool",
          "package": "SG",
          "partial": "On Line",
          "signature": "pt a-\u003eln a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry.html#v:isOnLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe flipped version of \u003ccode\u003e\u003ca\u003elineTo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SG.Geometry",
          "name": "lineFrom",
          "package": "SG",
          "signature": "pt a -\u003e pt a -\u003e ln a",
          "source": "src/Data-SG-Geometry.html#lineFrom",
          "type": "function"
        },
        "index": {
          "description": "The flipped version of lineTo",
          "hierarchy": "Data SG Geometry",
          "module": "Data.SG.Geometry",
          "name": "lineFrom",
          "normalized": "a b-\u003ea b-\u003ec b",
          "package": "SG",
          "partial": "From",
          "signature": "pt a-\u003ept a-\u003eln a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry.html#v:lineFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the line \u003cem\u003efrom\u003c/em\u003e the first point, \u003cem\u003eto\u003c/em\u003e the second point.\n\u003c/p\u003e",
          "module": "Data.SG.Geometry",
          "name": "lineTo",
          "package": "SG",
          "signature": "pt a -\u003e pt a -\u003e ln a",
          "source": "src/Data-SG-Geometry.html#lineTo",
          "type": "function"
        },
        "index": {
          "description": "Gets the line from the first point to the second point",
          "hierarchy": "Data SG Geometry",
          "module": "Data.SG.Geometry",
          "name": "lineTo",
          "normalized": "a b-\u003ea b-\u003ec b",
          "package": "SG",
          "partial": "To",
          "signature": "pt a-\u003ept a-\u003eln a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry.html#v:lineTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlters the line to the given length, but with the same start point and direction.\n\u003c/p\u003e",
          "module": "Data.SG.Geometry",
          "name": "makeLength",
          "package": "SG",
          "signature": "a -\u003e ln a -\u003e ln a",
          "source": "src/Data-SG-Geometry.html#makeLength",
          "type": "function"
        },
        "index": {
          "description": "Alters the line to the given length but with the same start point and direction",
          "hierarchy": "Data SG Geometry",
          "module": "Data.SG.Geometry",
          "name": "makeLength",
          "normalized": "a-\u003eb a-\u003eb a",
          "package": "SG",
          "partial": "Length",
          "signature": "a-\u003eln a-\u003eln a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry.html#v:makeLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a point and relative vector, creates a line.  It should always be\n the case that \u003ccode\u003euncurry makeLine . getLineVecs\u003c/code\u003e is the identity function.\n\u003c/p\u003e",
          "module": "Data.SG.Geometry",
          "name": "makeLine",
          "package": "SG",
          "signature": "pt a -\u003e rel a -\u003e ln a",
          "source": "src/Data-SG-Geometry.html#makeLine",
          "type": "method"
        },
        "index": {
          "description": "Given point and relative vector creates line It should always be the case that uncurry makeLine getLineVecs is the identity function",
          "hierarchy": "Data SG Geometry",
          "module": "Data.SG.Geometry",
          "name": "makeLine",
          "normalized": "a b-\u003ec b-\u003ed b",
          "package": "SG",
          "partial": "Line",
          "signature": "pt a-\u003erel a-\u003eln a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry.html#v:makeLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds the negation of the relative (free) vector to the point.\n\u003c/p\u003e",
          "module": "Data.SG.Geometry",
          "name": "minusDir",
          "package": "SG",
          "signature": "pt a -\u003e rel a -\u003e pt a",
          "source": "src/Data-SG-Geometry.html#minusDir",
          "type": "function"
        },
        "index": {
          "description": "Adds the negation of the relative free vector to the point",
          "hierarchy": "Data SG Geometry",
          "module": "Data.SG.Geometry",
          "name": "minusDir",
          "normalized": "a b-\u003ec b-\u003ea b",
          "package": "SG",
          "partial": "Dir",
          "signature": "pt a-\u003erel a-\u003ept a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry.html#v:minusDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds the nearest point on the line to the given point, and gives back its\n distance along the line (as a multiple of the direction vector).  Since the\n nearest distance will be at a right-angle to the point, this is the same as\n projecting the point onto the line.\n\u003c/p\u003e",
          "module": "Data.SG.Geometry",
          "name": "nearestDistOnLine",
          "package": "SG",
          "signature": "pt a -\u003e ln a -\u003e a",
          "source": "src/Data-SG-Geometry.html#nearestDistOnLine",
          "type": "function"
        },
        "index": {
          "description": "Finds the nearest point on the line to the given point and gives back its distance along the line as multiple of the direction vector Since the nearest distance will be at right-angle to the point this is the same as projecting the point onto the line",
          "hierarchy": "Data SG Geometry",
          "module": "Data.SG.Geometry",
          "name": "nearestDistOnLine",
          "normalized": "a b-\u003ec b-\u003eb",
          "package": "SG",
          "partial": "Dist On Line",
          "signature": "pt a-\u003eln a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry.html#v:nearestDistOnLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds the nearest point on the line to the given point, and gives back the\n point.\n\u003c/p\u003e",
          "module": "Data.SG.Geometry",
          "name": "nearestPointOnLine",
          "package": "SG",
          "signature": "pt a -\u003e ln a -\u003e pt a",
          "source": "src/Data-SG-Geometry.html#nearestPointOnLine",
          "type": "function"
        },
        "index": {
          "description": "Finds the nearest point on the line to the given point and gives back the point",
          "hierarchy": "Data SG Geometry",
          "module": "Data.SG.Geometry",
          "name": "nearestPointOnLine",
          "normalized": "a b-\u003ec b-\u003ea b",
          "package": "SG",
          "partial": "Point On Line",
          "signature": "pt a-\u003eln a-\u003ept a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry.html#v:nearestPointOnLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a relative (free) vector to a given point.\n\u003c/p\u003e",
          "module": "Data.SG.Geometry",
          "name": "plusDir",
          "package": "SG",
          "signature": "pt a -\u003e rel a -\u003e pt a",
          "source": "src/Data-SG-Geometry.html#plusDir",
          "type": "method"
        },
        "index": {
          "description": "Adds relative free vector to given point",
          "hierarchy": "Data SG Geometry",
          "module": "Data.SG.Geometry",
          "name": "plusDir",
          "normalized": "a b-\u003ec b-\u003ea b",
          "package": "SG",
          "partial": "Dir",
          "signature": "pt a-\u003erel a-\u003ept a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry.html#v:plusDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epointAtX (and the Y and Z equivalents) are wrappers around \u003ccode\u003e\u003ca\u003evalueAtX\u003c/a\u003e\u003c/code\u003e (and\n similar) that give back the point rather than distance along the line.\n\u003c/p\u003e",
          "module": "Data.SG.Geometry",
          "name": "pointAtX",
          "package": "SG",
          "signature": "ln a -\u003e a -\u003e Maybe (pt a)",
          "source": "src/Data-SG-Geometry.html#pointAtX",
          "type": "function"
        },
        "index": {
          "description": "pointAtX and the and equivalents are wrappers around valueAtX and similar that give back the point rather than distance along the line",
          "hierarchy": "Data SG Geometry",
          "module": "Data.SG.Geometry",
          "name": "pointAtX",
          "normalized": "a b-\u003eb-\u003eMaybe(c b)",
          "package": "SG",
          "partial": "At",
          "signature": "ln a-\u003ea-\u003eMaybe(pt a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry.html#v:pointAtX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epointAtX (and the Y and Z equivalents) are wrappers around \u003ccode\u003e\u003ca\u003evalueAtX\u003c/a\u003e\u003c/code\u003e (and\n similar) that give back the point rather than distance along the line.\n\u003c/p\u003e",
          "module": "Data.SG.Geometry",
          "name": "pointAtY",
          "package": "SG",
          "signature": "ln a -\u003e a -\u003e Maybe (pt a)",
          "source": "src/Data-SG-Geometry.html#pointAtX",
          "type": "function"
        },
        "index": {
          "description": "pointAtX and the and equivalents are wrappers around valueAtX and similar that give back the point rather than distance along the line",
          "hierarchy": "Data SG Geometry",
          "module": "Data.SG.Geometry",
          "name": "pointAtY",
          "normalized": "a b-\u003eb-\u003eMaybe(c b)",
          "package": "SG",
          "partial": "At",
          "signature": "ln a-\u003ea-\u003eMaybe(pt a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry.html#v:pointAtY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SG.Geometry",
          "name": "pointAtZ",
          "package": "SG",
          "signature": "ln a -\u003e a -\u003e Maybe (pt a)",
          "source": "src/Data-SG-Geometry.html#pointAtZ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SG Geometry",
          "module": "Data.SG.Geometry",
          "name": "pointAtZ",
          "normalized": "a b-\u003eb-\u003eMaybe(c b)",
          "package": "SG",
          "partial": "At",
          "signature": "ln a-\u003ea-\u003eMaybe(pt a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry.html#v:pointAtZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScales a relative (free) vector by the given amount.\n\u003c/p\u003e",
          "module": "Data.SG.Geometry",
          "name": "scaleRel",
          "package": "SG",
          "signature": "a -\u003e rel a -\u003e rel a",
          "source": "src/Data-SG-Geometry.html#scaleRel",
          "type": "method"
        },
        "index": {
          "description": "Scales relative free vector by the given amount",
          "hierarchy": "Data SG Geometry",
          "module": "Data.SG.Geometry",
          "name": "scaleRel",
          "normalized": "a-\u003eb a-\u003eb a",
          "package": "SG",
          "partial": "Rel",
          "signature": "a-\u003erel a-\u003erel a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry.html#v:scaleRel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe flipped version of \u003ccode\u003e\u003ca\u003efromPt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SG.Geometry",
          "name": "toPt",
          "package": "SG",
          "signature": "pt a -\u003e pt a -\u003e rel a",
          "source": "src/Data-SG-Geometry.html#toPt",
          "type": "function"
        },
        "index": {
          "description": "The flipped version of fromPt",
          "hierarchy": "Data SG Geometry",
          "module": "Data.SG.Geometry",
          "name": "toPt",
          "normalized": "a b-\u003ea b-\u003ec b",
          "package": "SG",
          "partial": "Pt",
          "signature": "pt a-\u003ept a-\u003erel a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry.html#v:toPt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives the distance along the line (2D or 3D) at a given X value.  Returns Nothing\n if the line is parallel to the YZ plane (in 2D, if the X component of the line\n is zero).  The value returned is a multiple of the direction vector of the line,\n which will only be the same as distance if the direction vector is a unit vector.\n\u003c/p\u003e",
          "module": "Data.SG.Geometry",
          "name": "valueAtX",
          "package": "SG",
          "signature": "ln a -\u003e a -\u003e Maybe a",
          "source": "src/Data-SG-Geometry.html#valueAtX",
          "type": "function"
        },
        "index": {
          "description": "Gives the distance along the line or at given value Returns Nothing if the line is parallel to the YZ plane in if the component of the line is zero The value returned is multiple of the direction vector of the line which will only be the same as distance if the direction vector is unit vector",
          "hierarchy": "Data SG Geometry",
          "module": "Data.SG.Geometry",
          "name": "valueAtX",
          "normalized": "a b-\u003eb-\u003eMaybe b",
          "package": "SG",
          "partial": "At",
          "signature": "ln a-\u003ea-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry.html#v:valueAtX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives the distance along the line (2D or 3D) at a given Y value.  Returns Nothing\n if the line is parallel to the XZ plane (in 2D, if the Y component of the line\n is zero).  The value returned is a multiple of the direction vector of the line,\n which will only be the same as distance if the direction vector is a unit vector.\n\u003c/p\u003e",
          "module": "Data.SG.Geometry",
          "name": "valueAtY",
          "package": "SG",
          "signature": "ln a -\u003e a -\u003e Maybe a",
          "source": "src/Data-SG-Geometry.html#valueAtY",
          "type": "function"
        },
        "index": {
          "description": "Gives the distance along the line or at given value Returns Nothing if the line is parallel to the XZ plane in if the component of the line is zero The value returned is multiple of the direction vector of the line which will only be the same as distance if the direction vector is unit vector",
          "hierarchy": "Data SG Geometry",
          "module": "Data.SG.Geometry",
          "name": "valueAtY",
          "normalized": "a b-\u003eb-\u003eMaybe b",
          "package": "SG",
          "partial": "At",
          "signature": "ln a-\u003ea-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry.html#v:valueAtY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives the distance along the 3D line at a given Z value.  Returns Nothing\n if the line is parallel to the XY plane. The value returned is a multiple\n of the direction vector of the line, which will only be the same as\n distance if the direction vector is a unit vector.\n\u003c/p\u003e",
          "module": "Data.SG.Geometry",
          "name": "valueAtZ",
          "package": "SG",
          "signature": "ln a -\u003e a -\u003e Maybe a",
          "source": "src/Data-SG-Geometry.html#valueAtZ",
          "type": "function"
        },
        "index": {
          "description": "Gives the distance along the line at given value Returns Nothing if the line is parallel to the XY plane The value returned is multiple of the direction vector of the line which will only be the same as distance if the direction vector is unit vector",
          "hierarchy": "Data SG Geometry",
          "module": "Data.SG.Geometry",
          "name": "valueAtZ",
          "normalized": "a b-\u003eb-\u003eMaybe b",
          "package": "SG",
          "partial": "At",
          "signature": "ln a-\u003ea-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Geometry.html#v:valueAtZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module with various simple matrix operations to augment the vector stuff.\n\u003c/p\u003e\u003cp\u003eThe Num instances implement proper matrix multiplication as you would expect\n (not element-wise multiplication).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SG.Matrix",
          "name": "Matrix",
          "package": "SG",
          "source": "src/Data-SG-Matrix.html",
          "type": "module"
        },
        "index": {
          "description": "module with various simple matrix operations to augment the vector stuff The Num instances implement proper matrix multiplication as you would expect not element-wise multiplication",
          "hierarchy": "Data SG Matrix",
          "module": "Data.SG.Matrix",
          "name": "Matrix",
          "package": "SG",
          "partial": "Matrix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Matrix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class that all matrices belong to.\n\u003c/p\u003e",
          "module": "Data.SG.Matrix",
          "name": "Matrix",
          "package": "SG",
          "source": "src/Data-SG-Matrix.html#Matrix",
          "type": "class"
        },
        "index": {
          "description": "The class that all matrices belong to",
          "hierarchy": "Data SG Matrix",
          "module": "Data.SG.Matrix",
          "name": "Matrix",
          "package": "SG",
          "partial": "Matrix",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Matrix.html#t:Matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 2x2 matrix.  Primarily useful via its instances, such as \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003e\u003ca\u003eMatrix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SG.Matrix",
          "name": "Matrix22'",
          "package": "SG",
          "source": "src/Data-SG-Matrix.html#Matrix22%27",
          "type": "type"
        },
        "index": {
          "description": "x2 matrix Primarily useful via its instances such as Functor Num and Matrix",
          "hierarchy": "Data SG Matrix",
          "module": "Data.SG.Matrix",
          "name": "Matrix22'",
          "package": "SG",
          "partial": "Matrix",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Matrix.html#t:Matrix22-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 3x3 matrix.  Primarily useful via its instances, such as \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003e\u003ca\u003eMatrix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SG.Matrix",
          "name": "Matrix33'",
          "package": "SG",
          "source": "src/Data-SG-Matrix.html#Matrix33%27",
          "type": "type"
        },
        "index": {
          "description": "x3 matrix Primarily useful via its instances such as Functor Num and Matrix",
          "hierarchy": "Data SG Matrix",
          "module": "Data.SG.Matrix",
          "name": "Matrix33'",
          "package": "SG",
          "partial": "Matrix",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Matrix.html#t:Matrix33-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 4x4 matrix.  Primarily useful via its instances, such as \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e,\n and \u003ccode\u003e\u003ca\u003eMatrix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SG.Matrix",
          "name": "Matrix44'",
          "package": "SG",
          "source": "src/Data-SG-Matrix.html#Matrix44%27",
          "type": "type"
        },
        "index": {
          "description": "x4 matrix Primarily useful via its instances such as Functor Num and Matrix",
          "hierarchy": "Data SG Matrix",
          "module": "Data.SG.Matrix",
          "name": "Matrix44'",
          "package": "SG",
          "partial": "Matrix",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Matrix.html#t:Matrix44-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA square matrix.  You will almost certainly want to use \u003ccode\u003e\u003ca\u003eMatrix22'\u003c/a\u003e\u003c/code\u003e and similar\n instead of this directly.  It does have a variety of useful instances though,\n especially \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMatrix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIts definition is based on a square matrix being, for example, a pair of pairs\n or a triple of triples.\n\u003c/p\u003e",
          "module": "Data.SG.Matrix",
          "name": "SquareMatrix",
          "package": "SG",
          "source": "src/Data-SG-Matrix.html#SquareMatrix",
          "type": "newtype"
        },
        "index": {
          "description": "square matrix You will almost certainly want to use Matrix22 and similar instead of this directly It does have variety of useful instances though especially Functor Num and Matrix Its definition is based on square matrix being for example pair of pairs or triple of triples",
          "hierarchy": "Data SG Matrix",
          "module": "Data.SG.Matrix",
          "name": "SquareMatrix",
          "package": "SG",
          "partial": "Square Matrix",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Matrix.html#t:SquareMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SG.Matrix",
          "name": "SquareMatrix",
          "package": "SG",
          "signature": "SquareMatrix (c (c a))",
          "source": "src/Data-SG-Matrix.html#SquareMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SG Matrix",
          "module": "Data.SG.Matrix",
          "name": "SquareMatrix",
          "package": "SG",
          "partial": "Square Matrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Matrix.html#v:SquareMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a matrix from a list of rows.  Any missing entries are filled\n in with the relevant entries from the identity matrix, hence the identity\n matrix is equivalent to \u003ccode\u003efromMatrixComponents []\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SG.Matrix",
          "name": "fromMatrixComponents",
          "package": "SG",
          "signature": "[[a]] -\u003e m a",
          "source": "src/Data-SG-Matrix.html#fromMatrixComponents",
          "type": "method"
        },
        "index": {
          "description": "Creates matrix from list of rows Any missing entries are filled in with the relevant entries from the identity matrix hence the identity matrix is equivalent to fromMatrixComponents",
          "hierarchy": "Data SG Matrix",
          "module": "Data.SG.Matrix",
          "name": "fromMatrixComponents",
          "normalized": "[[a]]-\u003eb a",
          "package": "SG",
          "partial": "Matrix Components",
          "signature": "[[a]]-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Matrix.html#v:fromMatrixComponents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identity matrix.\n\u003c/p\u003e",
          "module": "Data.SG.Matrix",
          "name": "identityMatrix",
          "package": "SG",
          "signature": "m a",
          "source": "src/Data-SG-Matrix.html#identityMatrix",
          "type": "function"
        },
        "index": {
          "description": "The identity matrix",
          "hierarchy": "Data SG Matrix",
          "module": "Data.SG.Matrix",
          "name": "identityMatrix",
          "package": "SG",
          "partial": "Matrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Matrix.html#v:identityMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives back the matrix as a list of rows.\n\u003c/p\u003e",
          "module": "Data.SG.Matrix",
          "name": "matrixComponents",
          "package": "SG",
          "signature": "m a -\u003e [[a]]",
          "source": "src/Data-SG-Matrix.html#matrixComponents",
          "type": "method"
        },
        "index": {
          "description": "Gives back the matrix as list of rows",
          "hierarchy": "Data SG Matrix",
          "module": "Data.SG.Matrix",
          "name": "matrixComponents",
          "normalized": "a b-\u003e[[b]]",
          "package": "SG",
          "partial": "Components",
          "signature": "m a-\u003e[[a]]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Matrix.html#v:matrixComponents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatrix multiplication where the size of the vector matches the dimensions\n of the matrix.  The complicated type just means that this function will\n work for any combination of matrix types and vectors where the width of the\n square matrix is the same as the number of dimensions in the vector.\n\u003c/p\u003e",
          "module": "Data.SG.Matrix",
          "name": "multMatrix",
          "package": "SG",
          "signature": "SquareMatrix c a -\u003e p a -\u003e p a",
          "source": "src/Data-SG-Matrix.html#multMatrix",
          "type": "function"
        },
        "index": {
          "description": "Matrix multiplication where the size of the vector matches the dimensions of the matrix The complicated type just means that this function will work for any combination of matrix types and vectors where the width of the square matrix is the same as the number of dimensions in the vector",
          "hierarchy": "Data SG Matrix",
          "module": "Data.SG.Matrix",
          "name": "multMatrix",
          "normalized": "SquareMatrix a b-\u003ec b-\u003ec b",
          "package": "SG",
          "partial": "Matrix",
          "signature": "SquareMatrix c a-\u003ep a-\u003ep a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Matrix.html#v:multMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatrix multiplication.  There is no requirement that the size of\n the matrix matches the size of the vector:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the vector is too small for the matrix (e.g. multiplying a 4x4 matrix by\n a 3x3 vector), 1 will be used for the missing vector entries.\n\u003c/li\u003e\u003cli\u003e If the matrix is too small for the vector (e.g. multiplying a 2x2 matrix by\n a 3x3 vector), the other components of the vector will be left untouched.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis allows you to do tricks such as multiplying a 4x4 matrix by a 3D vector,\n and doing translation (a standard 3D graphics trick).\n\u003c/p\u003e",
          "module": "Data.SG.Matrix",
          "name": "multMatrixGen",
          "package": "SG",
          "signature": "m a -\u003e p a -\u003e p a",
          "source": "src/Data-SG-Matrix.html#multMatrixGen",
          "type": "function"
        },
        "index": {
          "description": "Matrix multiplication There is no requirement that the size of the matrix matches the size of the vector If the vector is too small for the matrix e.g multiplying x4 matrix by x3 vector will be used for the missing vector entries If the matrix is too small for the vector e.g multiplying x2 matrix by x3 vector the other components of the vector will be left untouched This allows you to do tricks such as multiplying x4 matrix by vector and doing translation standard graphics trick",
          "hierarchy": "Data SG Matrix",
          "module": "Data.SG.Matrix",
          "name": "multMatrixGen",
          "normalized": "a b-\u003ec b-\u003ec b",
          "package": "SG",
          "partial": "Matrix Gen",
          "signature": "m a-\u003ep a-\u003ep a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Matrix.html#v:multMatrixGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an angle in \u003cem\u003eradians\u003c/em\u003e, produces a matrix that rotates anti-clockwise\n by that angle around the X axis.  Note that this can be used to produce a 2x2,\n 3x3 or 4x4 matrix, but if you produce a 2x2 matrix, odd things will happen!\n\u003c/p\u003e",
          "module": "Data.SG.Matrix",
          "name": "rotateXaxis",
          "package": "SG",
          "signature": "a -\u003e m a",
          "source": "src/Data-SG-Matrix.html#rotateXaxis",
          "type": "function"
        },
        "index": {
          "description": "Given an angle in radians produces matrix that rotates anti-clockwise by that angle around the axis Note that this can be used to produce x2 x3 or x4 matrix but if you produce x2 matrix odd things will happen",
          "hierarchy": "Data SG Matrix",
          "module": "Data.SG.Matrix",
          "name": "rotateXaxis",
          "normalized": "a-\u003eb a",
          "package": "SG",
          "partial": "Xaxis",
          "signature": "a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Matrix.html#v:rotateXaxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an angle in \u003cem\u003eradians\u003c/em\u003e, produces a matrix that rotates anti-clockwise\n by that angle around the Y axis.  Note that this can be used to produce a 2x2,\n 3x3 or 4x4 matrix, but if you produce a 2x2 matrix, odd things will happen!\n\u003c/p\u003e",
          "module": "Data.SG.Matrix",
          "name": "rotateYaxis",
          "package": "SG",
          "signature": "a -\u003e m a",
          "source": "src/Data-SG-Matrix.html#rotateYaxis",
          "type": "function"
        },
        "index": {
          "description": "Given an angle in radians produces matrix that rotates anti-clockwise by that angle around the axis Note that this can be used to produce x2 x3 or x4 matrix but if you produce x2 matrix odd things will happen",
          "hierarchy": "Data SG Matrix",
          "module": "Data.SG.Matrix",
          "name": "rotateYaxis",
          "normalized": "a-\u003eb a",
          "package": "SG",
          "partial": "Yaxis",
          "signature": "a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Matrix.html#v:rotateYaxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an angle in \u003cem\u003eradians\u003c/em\u003e, produces a matrix that rotates anti-clockwise\n by that angle around the Z axis.  Note that this can be used to produce a 2x2\n (in which case it is a rotation around the origin), 3x3 or 4x4 matrix.\n\u003c/p\u003e",
          "module": "Data.SG.Matrix",
          "name": "rotateZaxis",
          "package": "SG",
          "signature": "a -\u003e m a",
          "source": "src/Data-SG-Matrix.html#rotateZaxis",
          "type": "function"
        },
        "index": {
          "description": "Given an angle in radians produces matrix that rotates anti-clockwise by that angle around the axis Note that this can be used to produce x2 in which case it is rotation around the origin x3 or x4 matrix",
          "hierarchy": "Data SG Matrix",
          "module": "Data.SG.Matrix",
          "name": "rotateZaxis",
          "normalized": "a-\u003eb a",
          "package": "SG",
          "partial": "Zaxis",
          "signature": "a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Matrix.html#v:rotateZaxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a 2D relative vector, produces a matrix that will translate by that\n much (when you multiply a 2D point with it using multMatrixGen)\n\u003c/p\u003e",
          "module": "Data.SG.Matrix",
          "name": "translate2D",
          "package": "SG",
          "signature": "p a -\u003e Matrix33' a",
          "source": "src/Data-SG-Matrix.html#translate2D",
          "type": "function"
        },
        "index": {
          "description": "Given relative vector produces matrix that will translate by that much when you multiply point with it using multMatrixGen",
          "hierarchy": "Data SG Matrix",
          "module": "Data.SG.Matrix",
          "name": "translate2D",
          "normalized": "a b-\u003eMatrix b",
          "package": "SG",
          "signature": "p a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Matrix.html#v:translate2D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a 3D relative vector, produces a matrix that will translate by that\n much (when you multiply a 3D point with it using multMatrixGen)\n\u003c/p\u003e",
          "module": "Data.SG.Matrix",
          "name": "translate3D",
          "package": "SG",
          "signature": "p a -\u003e Matrix44' a",
          "source": "src/Data-SG-Matrix.html#translate3D",
          "type": "function"
        },
        "index": {
          "description": "Given relative vector produces matrix that will translate by that much when you multiply point with it using multMatrixGen",
          "hierarchy": "Data SG Matrix",
          "module": "Data.SG.Matrix",
          "name": "translate3D",
          "normalized": "a b-\u003eMatrix b",
          "package": "SG",
          "signature": "p a-\u003eMatrix a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Matrix.html#v:translate3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransposes a matrix\n\u003c/p\u003e",
          "module": "Data.SG.Matrix",
          "name": "transpose",
          "package": "SG",
          "signature": "m a -\u003e m a",
          "source": "src/Data-SG-Matrix.html#transpose",
          "type": "method"
        },
        "index": {
          "description": "Transposes matrix",
          "hierarchy": "Data SG Matrix",
          "module": "Data.SG.Matrix",
          "name": "transpose",
          "normalized": "a b-\u003ea b",
          "package": "SG",
          "signature": "m a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Matrix.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module has types and functions for dealing with collision detection on\n simple 2D shapes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SG.Shape",
          "name": "Shape",
          "package": "SG",
          "source": "src/Data-SG-Shape.html",
          "type": "module"
        },
        "index": {
          "description": "This module has types and functions for dealing with collision detection on simple shapes",
          "hierarchy": "Data SG Shape",
          "module": "Data.SG.Shape",
          "name": "Shape",
          "package": "SG",
          "partial": "Shape",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Shape.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type for simple 2D convex shapes.  It is expected that you will define a\n synonym in your own application such as \u003ccode\u003etype Shape = Shape' Double\u003c/code\u003e, hence\n the funny name.\n\u003c/p\u003e",
          "module": "Data.SG.Shape",
          "name": "Shape'",
          "package": "SG",
          "source": "src/Data-SG-Shape.html#Shape%27",
          "type": "data"
        },
        "index": {
          "description": "type for simple convex shapes It is expected that you will define synonym in your own application such as type Shape Shape Double hence the funny name",
          "hierarchy": "Data SG Shape",
          "module": "Data.SG.Shape",
          "name": "Shape'",
          "package": "SG",
          "partial": "Shape'",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Shape.html#t:Shape-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA circle with a centre and a radius.\n\u003c/p\u003e",
          "module": "Data.SG.Shape",
          "name": "Circle",
          "package": "SG",
          "signature": "Circle",
          "source": "src/Data-SG-Shape.html#Shape%27",
          "type": "function"
        },
        "index": {
          "description": "circle with centre and radius",
          "hierarchy": "Data SG Shape",
          "module": "Data.SG.Shape",
          "name": "Circle",
          "package": "SG",
          "partial": "Circle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Shape.html#v:Circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA polygon with a centre, and a list of points.  The points are relative\n vectors from the centre of the polygon, and are expected to be in clockwise\n order.  For example, the triangle with corners (1,1) (3,3) and (3,1)\n could be \u003ccode\u003ePolygon (Point2 (2.5, 1.5)) [Rel2 (-1.5,-0.5), Rel2 (0.5,1.5),\n Rel2 (-1.5, 1.5)]\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that whereabouts the centre is inside the polygon is up to you\n (it does not \u003cem\u003ehave to be\u003c/em\u003e the geometric average of the points), but\n it should at least be inside the polygon, or else some algorithms will\n behave strangely with it.\n\u003c/p\u003e\u003cp\u003eThe list of points should have at least 3 points in it, or else some\n algorithms will behave strangely.\n\u003c/p\u003e\u003cp\u003eIf your points are not in clockwise order (with the X-Y axes being\n how they are in graphs, not on screens), funny things will happen with\n the collision detection.\n\u003c/p\u003e",
          "module": "Data.SG.Shape",
          "name": "Polygon",
          "package": "SG",
          "signature": "Polygon",
          "source": "src/Data-SG-Shape.html#Shape%27",
          "type": "function"
        },
        "index": {
          "description": "polygon with centre and list of points The points are relative vectors from the centre of the polygon and are expected to be in clockwise order For example the triangle with corners and could be Polygon Point2 Rel2 Rel2 Rel2 Note that whereabouts the centre is inside the polygon is up to you it does not have to be the geometric average of the points but it should at least be inside the polygon or else some algorithms will behave strangely with it The list of points should have at least points in it or else some algorithms will behave strangely If your points are not in clockwise order with the X-Y axes being how they are in graphs not on screens funny things will happen with the collision detection",
          "hierarchy": "Data SG Shape",
          "module": "Data.SG.Shape",
          "name": "Polygon",
          "package": "SG",
          "partial": "Polygon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Shape.html#v:Polygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rectangle with a centre, and a width (distance from the centre\n to the left or right side of the rectangle) and a height (distance\n from the centre to the top or bottom side of the rectangle.  So the\n rectangle with corners (1,1) and (3,2) is \u003ccode\u003eRectangle (Point2 (2,1.5))\n (1, 0.5)\u003c/code\u003e.  Technically a rectangle is a polygon, of course, but a\n rectangle (which is axis-aligned) can be processed faster by most algorithms.\n\u003c/p\u003e",
          "module": "Data.SG.Shape",
          "name": "Rectangle",
          "package": "SG",
          "signature": "Rectangle",
          "source": "src/Data-SG-Shape.html#Shape%27",
          "type": "function"
        },
        "index": {
          "description": "rectangle with centre and width distance from the centre to the left or right side of the rectangle and height distance from the centre to the top or bottom side of the rectangle So the rectangle with corners and is Rectangle Point2 Technically rectangle is polygon of course but rectangle which is axis-aligned can be processed faster by most algorithms",
          "hierarchy": "Data SG Shape",
          "module": "Data.SG.Shape",
          "name": "Rectangle",
          "package": "SG",
          "partial": "Rectangle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Shape.html#v:Rectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives back the bounding box of a shape in terms of the minimum X-Y and\n the maximum X-Y corners of the bounding box.\n\u003c/p\u003e",
          "module": "Data.SG.Shape",
          "name": "boundingBox",
          "package": "SG",
          "signature": "Shape' a -\u003e (Point2' a, Point2' a)",
          "source": "src/Data-SG-Shape.html#boundingBox",
          "type": "function"
        },
        "index": {
          "description": "Gives back the bounding box of shape in terms of the minimum X-Y and the maximum X-Y corners of the bounding box",
          "hierarchy": "Data SG Shape",
          "module": "Data.SG.Shape",
          "name": "boundingBox",
          "normalized": "Shape' a-\u003e(Point a,Point a)",
          "package": "SG",
          "partial": "Box",
          "signature": "Shape' a-\u003e(Point a,Point a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Shape.html#v:boundingBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SG.Shape",
          "name": "circSize",
          "package": "SG",
          "signature": "a",
          "source": "src/Data-SG-Shape.html#Shape%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SG Shape",
          "module": "Data.SG.Shape",
          "name": "circSize",
          "package": "SG",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Shape.html#v:circSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a line and a shape, finds all possible intersections of the line\n with the shape.  Since the shapes are convex, continuous 2D shapes, there\n will either be no intersections or two (which could be the same point).\n The returned value is distance along the line in multiples of the direction\n vector (the return value is the same idea as \u003ccode\u003e\u003ca\u003eintersectLineCircle\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.SG.Shape",
          "name": "intersectLineShape",
          "package": "SG",
          "signature": "Line2' a -\u003e Shape' a -\u003e Maybe (a, a)",
          "source": "src/Data-SG-Shape.html#intersectLineShape",
          "type": "function"
        },
        "index": {
          "description": "Given line and shape finds all possible intersections of the line with the shape Since the shapes are convex continuous shapes there will either be no intersections or two which could be the same point The returned value is distance along the line in multiples of the direction vector the return value is the same idea as intersectLineCircle",
          "hierarchy": "Data SG Shape",
          "module": "Data.SG.Shape",
          "name": "intersectLineShape",
          "normalized": "Line a-\u003eShape' a-\u003eMaybe(a,a)",
          "package": "SG",
          "partial": "Line Shape",
          "signature": "Line a-\u003eShape' a-\u003eMaybe(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Shape.html#v:intersectLineShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMoves a shape by a given vector (by moving the centre).\n\u003c/p\u003e",
          "module": "Data.SG.Shape",
          "name": "moveShape",
          "package": "SG",
          "signature": "Rel2' a -\u003e Shape' a -\u003e Shape' a",
          "source": "src/Data-SG-Shape.html#moveShape",
          "type": "function"
        },
        "index": {
          "description": "Moves shape by given vector by moving the centre",
          "hierarchy": "Data SG Shape",
          "module": "Data.SG.Shape",
          "name": "moveShape",
          "normalized": "Rel a-\u003eShape' a-\u003eShape' a",
          "package": "SG",
          "partial": "Shape",
          "signature": "Rel a-\u003eShape' a-\u003eShape' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Shape.html#v:moveShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks for overlap between the two shapes.  If they do not collide,\n returns Nothing.  If they do collide, gives back suggested angles away from\n each other.  These are not necessarily the shortest direction to separate\n the two shapes, but should be decent for doing collision resolution (by using\n them as surface normals, or push-away vectors)\n\u003c/p\u003e\u003cp\u003eThe first vector returned is the direction in which the first shape should\n head (or the surface normal to bounce the first shape off), whereas the\n second vector returned is the direction in which the second shape should\n head (or the surface normal to bounce the second shape off).\n\u003c/p\u003e\u003cp\u003eThis function includes an initial quick test, followed by a more detailed test\n if necessary.\n\u003c/p\u003e",
          "module": "Data.SG.Shape",
          "name": "overlap",
          "package": "SG",
          "signature": "Shape' a -\u003e Shape' a -\u003e Maybe (Rel2' a, Rel2' a)",
          "source": "src/Data-SG-Shape.html#overlap",
          "type": "function"
        },
        "index": {
          "description": "Checks for overlap between the two shapes If they do not collide returns Nothing If they do collide gives back suggested angles away from each other These are not necessarily the shortest direction to separate the two shapes but should be decent for doing collision resolution by using them as surface normals or push-away vectors The first vector returned is the direction in which the first shape should head or the surface normal to bounce the first shape off whereas the second vector returned is the direction in which the second shape should head or the surface normal to bounce the second shape off This function includes an initial quick test followed by more detailed test if necessary",
          "hierarchy": "Data SG Shape",
          "module": "Data.SG.Shape",
          "name": "overlap",
          "normalized": "Shape' a-\u003eShape' a-\u003eMaybe(Rel a,Rel a)",
          "package": "SG",
          "signature": "Shape' a-\u003eShape' a-\u003eMaybe(Rel a,Rel a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Shape.html#v:overlap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SG.Shape",
          "name": "polyPoints",
          "package": "SG",
          "signature": "[Rel2' a]",
          "source": "src/Data-SG-Shape.html#Shape%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SG Shape",
          "module": "Data.SG.Shape",
          "name": "polyPoints",
          "normalized": "[Rel a]",
          "package": "SG",
          "partial": "Points",
          "signature": "[Rel a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Shape.html#v:polyPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SG.Shape",
          "name": "rectSize",
          "package": "SG",
          "signature": "(a, a)",
          "source": "src/Data-SG-Shape.html#Shape%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SG Shape",
          "module": "Data.SG.Shape",
          "name": "rectSize",
          "normalized": "(a,a)",
          "package": "SG",
          "partial": "Size",
          "signature": "(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Shape.html#v:rectSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an angle in \u003cem\u003eradians\u003c/em\u003e, rotates the shape by that angle in an anti-clockwise\n direction.  A circle will remain untouched, a polygon will have its points rotated,\n and a rectangle will become a polygon and get rotated (even if you pass 0 as the angle).\n\u003c/p\u003e",
          "module": "Data.SG.Shape",
          "name": "rotateShape",
          "package": "SG",
          "signature": "a -\u003e Shape' a -\u003e Shape' a",
          "source": "src/Data-SG-Shape.html#rotateShape",
          "type": "function"
        },
        "index": {
          "description": "Given an angle in radians rotates the shape by that angle in an anti-clockwise direction circle will remain untouched polygon will have its points rotated and rectangle will become polygon and get rotated even if you pass as the angle",
          "hierarchy": "Data SG Shape",
          "module": "Data.SG.Shape",
          "name": "rotateShape",
          "normalized": "a-\u003eShape' a-\u003eShape' a",
          "package": "SG",
          "partial": "Shape",
          "signature": "a-\u003eShape' a-\u003eShape' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Shape.html#v:rotateShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScales the size of the shape (for all edges, from the centre) by the given\n factor.\n\u003c/p\u003e",
          "module": "Data.SG.Shape",
          "name": "scaleShape",
          "package": "SG",
          "signature": "a -\u003e Shape' a -\u003e Shape' a",
          "source": "src/Data-SG-Shape.html#scaleShape",
          "type": "function"
        },
        "index": {
          "description": "Scales the size of the shape for all edges from the centre by the given factor",
          "hierarchy": "Data SG Shape",
          "module": "Data.SG.Shape",
          "name": "scaleShape",
          "normalized": "a-\u003eShape' a-\u003eShape' a",
          "package": "SG",
          "partial": "Shape",
          "signature": "a-\u003eShape' a-\u003eShape' a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Shape.html#v:scaleShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SG.Shape",
          "name": "shapeCentre",
          "package": "SG",
          "signature": "Point2' a",
          "source": "src/Data-SG-Shape.html#Shape%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SG Shape",
          "module": "Data.SG.Shape",
          "name": "shapeCentre",
          "package": "SG",
          "partial": "Centre",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Shape.html#v:shapeCentre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a shape, gets a list of points that make up the vertices of the\n shape.  For circles, this list will be empty.\n\u003c/p\u003e",
          "module": "Data.SG.Shape",
          "name": "shapePoints",
          "package": "SG",
          "signature": "Shape' a -\u003e [Point2' a]",
          "source": "src/Data-SG-Shape.html#shapePoints",
          "type": "function"
        },
        "index": {
          "description": "Given shape gets list of points that make up the vertices of the shape For circles this list will be empty",
          "hierarchy": "Data SG Shape",
          "module": "Data.SG.Shape",
          "name": "shapePoints",
          "normalized": "Shape' a-\u003e[Point a]",
          "package": "SG",
          "partial": "Points",
          "signature": "Shape' a-\u003e[Point a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Shape.html#v:shapePoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome types that are very basic vectors.  Most of the use that can be made\n of the vectors is in their type-class instances, which support a powerful set\n of operations.  For example:\n\u003c/p\u003e\u003cpre\u003e fmap (*3) v -- Scales vector v by 3\n pure 0 -- Creates a vector filled with zeroes\n v + w -- Adds two vectors (there is a 'Num' instance, basically)\n\u003c/pre\u003e\u003cp\u003ePlus all the instances for the classes in \u003ca\u003eData.SG.Vector\u003c/a\u003e, which allows you\n to use \u003ccode\u003e\u003ca\u003egetX\u003c/a\u003e\u003c/code\u003e and so on.\n\u003c/p\u003e\u003cp\u003eYou will probably want to create more friendly type synonyms, such as:\n\u003c/p\u003e\u003cpre\u003e type Vector2 = Pair Double\n type Vector3 = Triple Double\n type Line2 = LinePair Double\n type Line3 = LineTriple Double\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.SG.Vector.Basic",
          "name": "Basic",
          "package": "SG",
          "source": "src/Data-SG-Vector-Basic.html",
          "type": "module"
        },
        "index": {
          "description": "Some types that are very basic vectors Most of the use that can be made of the vectors is in their type-class instances which support powerful set of operations For example fmap Scales vector by pure Creates vector filled with zeroes Adds two vectors there is Num instance basically Plus all the instances for the classes in Data.SG.Vector which allows you to use getX and so on You will probably want to create more friendly type synonyms such as type Vector2 Pair Double type Vector3 Triple Double type Line2 LinePair Double type Line3 LineTriple Double",
          "hierarchy": "Data SG Vector Basic",
          "module": "Data.SG.Vector.Basic",
          "name": "Basic",
          "package": "SG",
          "partial": "Basic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector-Basic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pair of (position vector, direction vector) to be used as a 2D line.\n\u003c/p\u003e",
          "module": "Data.SG.Vector.Basic",
          "name": "LinePair",
          "package": "SG",
          "source": "src/Data-SG-Vector-Basic.html#LinePair",
          "type": "newtype"
        },
        "index": {
          "description": "pair of position vector direction vector to be used as line",
          "hierarchy": "Data SG Vector Basic",
          "module": "Data.SG.Vector.Basic",
          "name": "LinePair",
          "package": "SG",
          "partial": "Line Pair",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector-Basic.html#t:LinePair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pair of (position vector, direction vector) to be used as a 3D line.\n\u003c/p\u003e",
          "module": "Data.SG.Vector.Basic",
          "name": "LineTriple",
          "package": "SG",
          "source": "src/Data-SG-Vector-Basic.html#LineTriple",
          "type": "newtype"
        },
        "index": {
          "description": "pair of position vector direction vector to be used as line",
          "hierarchy": "Data SG Vector Basic",
          "module": "Data.SG.Vector.Basic",
          "name": "LineTriple",
          "package": "SG",
          "partial": "Line Triple",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector-Basic.html#t:LineTriple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pair, which acts as a 2D vector.\n\u003c/p\u003e",
          "module": "Data.SG.Vector.Basic",
          "name": "Pair",
          "package": "SG",
          "source": "src/Data-SG-Vector-Basic.html#Pair",
          "type": "newtype"
        },
        "index": {
          "description": "pair which acts as vector",
          "hierarchy": "Data SG Vector Basic",
          "module": "Data.SG.Vector.Basic",
          "name": "Pair",
          "package": "SG",
          "partial": "Pair",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector-Basic.html#t:Pair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA quad, which acts as a 4D vector.\n\u003c/p\u003e",
          "module": "Data.SG.Vector.Basic",
          "name": "Quad",
          "package": "SG",
          "source": "src/Data-SG-Vector-Basic.html#Quad",
          "type": "newtype"
        },
        "index": {
          "description": "quad which acts as vector",
          "hierarchy": "Data SG Vector Basic",
          "module": "Data.SG.Vector.Basic",
          "name": "Quad",
          "package": "SG",
          "partial": "Quad",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector-Basic.html#t:Quad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA triple, which acts as a 3D vector.\n\u003c/p\u003e",
          "module": "Data.SG.Vector.Basic",
          "name": "Triple",
          "package": "SG",
          "source": "src/Data-SG-Vector-Basic.html#Triple",
          "type": "newtype"
        },
        "index": {
          "description": "triple which acts as vector",
          "hierarchy": "Data SG Vector Basic",
          "module": "Data.SG.Vector.Basic",
          "name": "Triple",
          "package": "SG",
          "partial": "Triple",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector-Basic.html#t:Triple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SG.Vector.Basic",
          "name": "LinePair",
          "package": "SG",
          "signature": "LinePair (Pair a, Pair a)",
          "source": "src/Data-SG-Vector-Basic.html#LinePair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SG Vector Basic",
          "module": "Data.SG.Vector.Basic",
          "name": "LinePair",
          "normalized": "LinePair(Pair a,Pair a)",
          "package": "SG",
          "partial": "Line Pair",
          "signature": "LinePair(Pair a,Pair a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector-Basic.html#v:LinePair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SG.Vector.Basic",
          "name": "LineTriple",
          "package": "SG",
          "signature": "LineTriple (Triple a, Triple a)",
          "source": "src/Data-SG-Vector-Basic.html#LineTriple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SG Vector Basic",
          "module": "Data.SG.Vector.Basic",
          "name": "LineTriple",
          "normalized": "LineTriple(Triple a,Triple a)",
          "package": "SG",
          "partial": "Line Triple",
          "signature": "LineTriple(Triple a,Triple a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector-Basic.html#v:LineTriple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SG.Vector.Basic",
          "name": "Pair",
          "package": "SG",
          "signature": "Pair (a, a)",
          "source": "src/Data-SG-Vector-Basic.html#Pair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SG Vector Basic",
          "module": "Data.SG.Vector.Basic",
          "name": "Pair",
          "normalized": "Pair(a,a)",
          "package": "SG",
          "partial": "Pair",
          "signature": "Pair(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector-Basic.html#v:Pair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SG.Vector.Basic",
          "name": "Quad",
          "package": "SG",
          "signature": "Quad (a, a, a, a)",
          "source": "src/Data-SG-Vector-Basic.html#Quad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SG Vector Basic",
          "module": "Data.SG.Vector.Basic",
          "name": "Quad",
          "normalized": "Quad(a,a,a,a)",
          "package": "SG",
          "partial": "Quad",
          "signature": "Quad(a,a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector-Basic.html#v:Quad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SG.Vector.Basic",
          "name": "Triple",
          "package": "SG",
          "signature": "Triple (a, a, a)",
          "source": "src/Data-SG-Vector-Basic.html#Triple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SG Vector Basic",
          "module": "Data.SG.Vector.Basic",
          "name": "Triple",
          "normalized": "Triple(a,a,a)",
          "package": "SG",
          "partial": "Triple",
          "signature": "Triple(a,a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector-Basic.html#v:Triple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module with all the different type-classes for vectors.  Generally, the\n main functions you might need from this function are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003emagSq\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emag\u003c/a\u003e\u003c/code\u003e (defined for all vectors).\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003egetX\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003egetY\u003c/a\u003e\u003c/code\u003e (defined for all vectors) as well as \u003ccode\u003e\u003ca\u003egetZ\u003c/a\u003e\u003c/code\u003e (defined for\n all vectors with 3 or more dimensions).\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003edotProduct\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eunitVector\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eaverageVec\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eaverageUnitVec\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esameDirection\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eprojectOnto\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eprojectPointOnto\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edistFrom\u003c/a\u003e\u003c/code\u003e (defined for all vectors).\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eiso\u003c/a\u003e\u003c/code\u003e, which is defined for all combinations of vectors with the same number\n of dimensions.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe rest of the functions are mainly just wiring necessary for other functions,\n but must be exported.\n\u003c/p\u003e\u003cp\u003eAs to the vector types, there are two methods to use this library.  One is to\n use the types from the \u003ca\u003eData.SG.Vector.Basic\u003c/a\u003e library, which support basic vector\n operations.  The other is to use the types from the \u003ca\u003eData.SG.Geometry.TwoDim\u003c/a\u003e\n and \u003ca\u003eData.SG.Geometry.ThreeDim\u003c/a\u003e modules, where a position vector is differentiated\n from a relative vector (to increase clarity of code, and help prevent errors\n such as adding two points together).  Both systems can be used with various\n useful functions (involving lines too) from \u003ca\u003eData.SG.Geometry\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SG.Vector",
          "name": "Vector",
          "package": "SG",
          "source": "src/Data-SG-Vector.html",
          "type": "module"
        },
        "index": {
          "description": "The module with all the different type-classes for vectors Generally the main functions you might need from this function are magSq and mag defined for all vectors getX and getY defined for all vectors as well as getZ defined for all vectors with or more dimensions dotProduct unitVector averageVec averageUnitVec sameDirection projectOnto projectPointOnto distFrom defined for all vectors iso which is defined for all combinations of vectors with the same number of dimensions The rest of the functions are mainly just wiring necessary for other functions but must be exported As to the vector types there are two methods to use this library One is to use the types from the Data.SG.Vector.Basic library which support basic vector operations The other is to use the types from the Data.SG.Geometry.TwoDim and Data.SG.Geometry.ThreeDim modules where position vector is differentiated from relative vector to increase clarity of code and help prevent errors such as adding two points together Both systems can be used with various useful functions involving lines too from Data.SG.Geometry",
          "hierarchy": "Data SG Vector",
          "module": "Data.SG.Vector",
          "name": "Vector",
          "package": "SG",
          "partial": "Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class that is implemented by all vectors.\n\u003c/p\u003e\u003cp\u003eMinimal implementation: fromComponents\n\u003c/p\u003e",
          "module": "Data.SG.Vector",
          "name": "Coord",
          "package": "SG",
          "source": "src/Data-SG-Vector.html#Coord",
          "type": "class"
        },
        "index": {
          "description": "The class that is implemented by all vectors Minimal implementation fromComponents",
          "hierarchy": "Data SG Vector",
          "module": "Data.SG.Vector",
          "name": "Coord",
          "package": "SG",
          "partial": "Coord",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector.html#t:Coord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class is implemented by all 2D and 3D vectors, so \u003ccode\u003e\u003ca\u003egetX\u003c/a\u003e\u003c/code\u003e gets the X co-ordinate\n of both 2D and 3D vectors.\n\u003c/p\u003e",
          "module": "Data.SG.Vector",
          "name": "Coord2",
          "package": "SG",
          "source": "src/Data-SG-Vector.html#Coord2",
          "type": "class"
        },
        "index": {
          "description": "This class is implemented by all and vectors so getX gets the co-ordinate of both and vectors",
          "hierarchy": "Data SG Vector",
          "module": "Data.SG.Vector",
          "name": "Coord2",
          "package": "SG",
          "partial": "Coord",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector.html#t:Coord2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class is implemented by all 3D vectors.  To get the X and Y components,\n use \u003ccode\u003e\u003ca\u003egetX\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003egetY\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eCoord2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SG.Vector",
          "name": "Coord3",
          "package": "SG",
          "source": "src/Data-SG-Vector.html#Coord3",
          "type": "class"
        },
        "index": {
          "description": "This class is implemented by all vectors To get the and components use getX and getY from Coord2",
          "hierarchy": "Data SG Vector",
          "module": "Data.SG.Vector",
          "name": "Coord3",
          "package": "SG",
          "partial": "Coord",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector.html#t:Coord3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn isomorphism amongst vectors.  Allows you to convert between two vectors\n that have the same dimensions.  You will notice that all the instances reflect\n this.\n\u003c/p\u003e",
          "module": "Data.SG.Vector",
          "name": "IsomorphicVectors",
          "package": "SG",
          "source": "src/Data-SG-Vector.html#IsomorphicVectors",
          "type": "class"
        },
        "index": {
          "description": "An isomorphism amongst vectors Allows you to convert between two vectors that have the same dimensions You will notice that all the instances reflect this",
          "hierarchy": "Data SG Vector",
          "module": "Data.SG.Vector",
          "name": "IsomorphicVectors",
          "package": "SG",
          "partial": "Isomorphic Vectors",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector.html#t:IsomorphicVectors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA modified version of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003eControl.Applicative.Applicative\u003c/code\u003e that adds the \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e\n constraint on the result.  You are unlikely to need to use this class much\n directly.  Some vectors have \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003eControl.Applicative.Applicative\u003c/code\u003e instances anyway.\n\u003c/p\u003e",
          "module": "Data.SG.Vector",
          "name": "VectorNum",
          "package": "SG",
          "source": "src/Data-SG-Vector.html#VectorNum",
          "type": "class"
        },
        "index": {
          "description": "modified version of Functor and Control.Applicative.Applicative that adds the Num constraint on the result You are unlikely to need to use this class much directly Some vectors have Functor and Control.Applicative.Applicative instances anyway",
          "hierarchy": "Data SG Vector",
          "module": "Data.SG.Vector",
          "name": "VectorNum",
          "package": "SG",
          "partial": "Vector Num",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector.html#t:VectorNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike averageVec composed with unitVector -- gets the average of the\n vectors in the list, and normalises the length.  If the list is empty, the all-zero\n vector is returned (which is therefore not a unit vector).  Similarly,\n if the average of all the vectors is all-zero, the all-zero vector will be returned.\n\u003c/p\u003e",
          "module": "Data.SG.Vector",
          "name": "averageUnitVec",
          "package": "SG",
          "signature": "[p a] -\u003e p a",
          "source": "src/Data-SG-Vector.html#averageUnitVec",
          "type": "function"
        },
        "index": {
          "description": "Like averageVec composed with unitVector gets the average of the vectors in the list and normalises the length If the list is empty the all-zero vector is returned which is therefore not unit vector Similarly if the average of all the vectors is all-zero the all-zero vector will be returned",
          "hierarchy": "Data SG Vector",
          "module": "Data.SG.Vector",
          "name": "averageUnitVec",
          "normalized": "[a b]-\u003ea b",
          "package": "SG",
          "partial": "Unit Vec",
          "signature": "[p a]-\u003ep a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector.html#v:averageUnitVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the average vector of all the given vectors.  Essentially it is the\n sum of the vectors, divided by the length, so \u003ccode\u003eaverageVec [Point2 (-3, 0), Point2\n (5,0)]\u003c/code\u003e will give \u003ccode\u003ePoint2 (1,0)\u003c/code\u003e.  If the list is empty, the\n all-zero vector is returned.\n\u003c/p\u003e",
          "module": "Data.SG.Vector",
          "name": "averageVec",
          "package": "SG",
          "signature": "[p a] -\u003e p a",
          "source": "src/Data-SG-Vector.html#averageVec",
          "type": "function"
        },
        "index": {
          "description": "Gets the average vector of all the given vectors Essentially it is the sum of the vectors divided by the length so averageVec Point2 Point2 will give Point2 If the list is empty the all-zero vector is returned",
          "hierarchy": "Data SG Vector",
          "module": "Data.SG.Vector",
          "name": "averageVec",
          "normalized": "[a b]-\u003ea b",
          "package": "SG",
          "partial": "Vec",
          "signature": "[p a]-\u003ep a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector.html#v:averageVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWorks out the distance between two points.\n\u003c/p\u003e",
          "module": "Data.SG.Vector",
          "name": "distFrom",
          "package": "SG",
          "signature": "pt a -\u003e pt a -\u003e a",
          "source": "src/Data-SG-Vector.html#distFrom",
          "type": "function"
        },
        "index": {
          "description": "Works out the distance between two points",
          "hierarchy": "Data SG Vector",
          "module": "Data.SG.Vector",
          "name": "distFrom",
          "normalized": "a b-\u003ea b-\u003eb",
          "package": "SG",
          "partial": "From",
          "signature": "pt a-\u003ept a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector.html#v:distFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the dot product of the two vectors.\n\u003c/p\u003e",
          "module": "Data.SG.Vector",
          "name": "dotProduct",
          "package": "SG",
          "signature": "p a -\u003e p a -\u003e a",
          "source": "src/Data-SG-Vector.html#dotProduct",
          "type": "method"
        },
        "index": {
          "description": "Computes the dot product of the two vectors",
          "hierarchy": "Data SG Vector",
          "module": "Data.SG.Vector",
          "name": "dotProduct",
          "normalized": "a b-\u003ea b-\u003eb",
          "package": "SG",
          "partial": "Product",
          "signature": "p a-\u003ep a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector.html#v:dotProduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e, but with a \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e constraint.\n\u003c/p\u003e",
          "module": "Data.SG.Vector",
          "name": "fmapNum1",
          "package": "SG",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Data-SG-Vector.html#fmapNum1",
          "type": "method"
        },
        "index": {
          "description": "Like fmap but with Num constraint",
          "hierarchy": "Data SG Vector",
          "module": "Data.SG.Vector",
          "name": "fmapNum1",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "SG",
          "partial": "Num",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector.html#v:fmapNum1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efmapNum1\u003c/a\u003e\u003c/code\u003e, but can only be used if you won't change the magnitude:\n\u003c/p\u003e",
          "module": "Data.SG.Vector",
          "name": "fmapNum1inv",
          "package": "SG",
          "signature": "(a -\u003e a) -\u003e f a -\u003e f a",
          "source": "src/Data-SG-Vector.html#fmapNum1inv",
          "type": "method"
        },
        "index": {
          "description": "Like fmapNum1 but can only be used if you won change the magnitude",
          "hierarchy": "Data SG Vector",
          "module": "Data.SG.Vector",
          "name": "fmapNum1inv",
          "normalized": "(a-\u003ea)-\u003eb a-\u003eb a",
          "package": "SG",
          "partial": "Num",
          "signature": "(a-\u003ea)-\u003ef a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector.html#v:fmapNum1inv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003eControl.Applicative.liftA2\u003c/code\u003e, but with a \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e constraint.\n\u003c/p\u003e",
          "module": "Data.SG.Vector",
          "name": "fmapNum2",
          "package": "SG",
          "signature": "(a -\u003e b -\u003e c) -\u003e f a -\u003e f b -\u003e f c",
          "source": "src/Data-SG-Vector.html#fmapNum2",
          "type": "method"
        },
        "index": {
          "description": "Like Control.Applicative.liftA2 but with Num constraint",
          "hierarchy": "Data SG Vector",
          "module": "Data.SG.Vector",
          "name": "fmapNum2",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
          "package": "SG",
          "partial": "Num",
          "signature": "(a-\u003eb-\u003ec)-\u003ef a-\u003ef b-\u003ef c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector.html#v:fmapNum2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRe-constructs a vector from the list of coordinates.  If there are too few,\n the rest will be filled with zeroes.  If there are too many, the latter ones are\n ignored.\n\u003c/p\u003e",
          "module": "Data.SG.Vector",
          "name": "fromComponents",
          "package": "SG",
          "signature": "[a] -\u003e p a",
          "source": "src/Data-SG-Vector.html#fromComponents",
          "type": "method"
        },
        "index": {
          "description": "Re-constructs vector from the list of coordinates If there are too few the rest will be filled with zeroes If there are too many the latter ones are ignored",
          "hierarchy": "Data SG Vector",
          "module": "Data.SG.Vector",
          "name": "fromComponents",
          "normalized": "[a]-\u003eb a",
          "package": "SG",
          "partial": "Components",
          "signature": "[a]-\u003ep a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector.html#v:fromComponents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the components of the vector, in the order x, y (, z).\n\u003c/p\u003e",
          "module": "Data.SG.Vector",
          "name": "getComponents",
          "package": "SG",
          "signature": "p a -\u003e [a]",
          "source": "src/Data-SG-Vector.html#getComponents",
          "type": "method"
        },
        "index": {
          "description": "Gets the components of the vector in the order",
          "hierarchy": "Data SG Vector",
          "module": "Data.SG.Vector",
          "name": "getComponents",
          "normalized": "a b-\u003e[b]",
          "package": "SG",
          "partial": "Components",
          "signature": "p a-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector.html#v:getComponents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SG.Vector",
          "name": "getX",
          "package": "SG",
          "signature": "p a -\u003e a",
          "source": "src/Data-SG-Vector.html#getX",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SG Vector",
          "module": "Data.SG.Vector",
          "name": "getX",
          "normalized": "a b-\u003eb",
          "package": "SG",
          "signature": "p a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector.html#v:getX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SG.Vector",
          "name": "getY",
          "package": "SG",
          "signature": "p a -\u003e a",
          "source": "src/Data-SG-Vector.html#getY",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SG Vector",
          "module": "Data.SG.Vector",
          "name": "getY",
          "normalized": "a b-\u003eb",
          "package": "SG",
          "signature": "p a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector.html#v:getY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SG.Vector",
          "name": "getZ",
          "package": "SG",
          "signature": "p a -\u003e a",
          "source": "src/Data-SG-Vector.html#getZ",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SG Vector",
          "module": "Data.SG.Vector",
          "name": "getZ",
          "normalized": "a b-\u003eb",
          "package": "SG",
          "signature": "p a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector.html#v:getZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SG.Vector",
          "name": "iso",
          "package": "SG",
          "signature": "from a -\u003e to a",
          "source": "src/Data-SG-Vector.html#iso",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data SG Vector",
          "module": "Data.SG.Vector",
          "name": "iso",
          "normalized": "a b-\u003ec b",
          "package": "SG",
          "signature": "from a-\u003eto a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector.html#v:iso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the magnitude of the given vector.\n\u003c/p\u003e",
          "module": "Data.SG.Vector",
          "name": "mag",
          "package": "SG",
          "signature": "p a -\u003e a",
          "source": "src/Data-SG-Vector.html#mag",
          "type": "function"
        },
        "index": {
          "description": "Gets the magnitude of the given vector",
          "hierarchy": "Data SG Vector",
          "module": "Data.SG.Vector",
          "name": "mag",
          "normalized": "a b-\u003eb",
          "package": "SG",
          "signature": "p a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector.html#v:mag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the magnitude squared of the vector.  This should be fast for\n repeated calls on \u003ccode\u003eData.SG.Geometry.TwoDim.Rel2'\u003c/code\u003e and\n \u003ccode\u003eData.SG.Geometry.ThreeDim.Rel3'\u003c/code\u003e, which cache this value.\n\u003c/p\u003e",
          "module": "Data.SG.Vector",
          "name": "magSq",
          "package": "SG",
          "signature": "p a -\u003e a",
          "source": "src/Data-SG-Vector.html#magSq",
          "type": "method"
        },
        "index": {
          "description": "Gets the magnitude squared of the vector This should be fast for repeated calls on Data.SG.Geometry.TwoDim.Rel2 and Data.SG.Geometry.ThreeDim.Rel3 which cache this value",
          "hierarchy": "Data SG Vector",
          "module": "Data.SG.Vector",
          "name": "magSq",
          "normalized": "a b-\u003eb",
          "package": "SG",
          "partial": "Sq",
          "signature": "p a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector.html#v:magSq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe origin/all-zero vector (can be used with any vector type you like)\n\u003c/p\u003e",
          "module": "Data.SG.Vector",
          "name": "origin",
          "package": "SG",
          "signature": "p a",
          "source": "src/Data-SG-Vector.html#origin",
          "type": "function"
        },
        "index": {
          "description": "The origin all-zero vector can be used with any vector type you like",
          "hierarchy": "Data SG Vector",
          "module": "Data.SG.Vector",
          "name": "origin",
          "package": "SG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector.html#v:origin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives back the vector (first parameter), translated onto given axis (second\n parameter).  Note that the scale is always distance, \u003cem\u003enot\u003c/em\u003e related to the size\n of the axis vector.\n\u003c/p\u003e",
          "module": "Data.SG.Vector",
          "name": "projectOnto",
          "package": "SG",
          "signature": "rel a -\u003e rel a -\u003e a",
          "source": "src/Data-SG-Vector.html#projectOnto",
          "type": "function"
        },
        "index": {
          "description": "Gives back the vector first parameter translated onto given axis second parameter Note that the scale is always distance not related to the size of the axis vector",
          "hierarchy": "Data SG Vector",
          "module": "Data.SG.Vector",
          "name": "projectOnto",
          "normalized": "a b-\u003ea b-\u003eb",
          "package": "SG",
          "partial": "Onto",
          "signature": "rel a-\u003erel a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector.html#v:projectOnto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProjects the first parameter onto the given axes (X, Y), returning a point\n in terms of the new axes.\n\u003c/p\u003e",
          "module": "Data.SG.Vector",
          "name": "projectOnto2",
          "package": "SG",
          "signature": "rel a -\u003e (rel a, rel a) -\u003e rel a",
          "source": "src/Data-SG-Vector.html#projectOnto2",
          "type": "function"
        },
        "index": {
          "description": "Projects the first parameter onto the given axes returning point in terms of the new axes",
          "hierarchy": "Data SG Vector",
          "module": "Data.SG.Vector",
          "name": "projectOnto2",
          "normalized": "a b-\u003e(a b,a b)-\u003ea b",
          "package": "SG",
          "partial": "Onto",
          "signature": "rel a-\u003e(rel a,rel a)-\u003erel a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector.html#v:projectOnto2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives back the point (first parameter), translated onto given axis (second\n parameter).  Note that the scale is always distance, \u003cem\u003enot\u003c/em\u003e related to the size\n of the axis vector.\n\u003c/p\u003e",
          "module": "Data.SG.Vector",
          "name": "projectPointOnto",
          "package": "SG",
          "signature": "pt a -\u003e rel a -\u003e a",
          "source": "src/Data-SG-Vector.html#projectPointOnto",
          "type": "function"
        },
        "index": {
          "description": "Gives back the point first parameter translated onto given axis second parameter Note that the scale is always distance not related to the size of the axis vector",
          "hierarchy": "Data SG Vector",
          "module": "Data.SG.Vector",
          "name": "projectPointOnto",
          "normalized": "a b-\u003ec b-\u003eb",
          "package": "SG",
          "partial": "Point Onto",
          "signature": "pt a-\u003erel a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector.html#v:projectPointOnto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProjects the point (first parameter) onto the given axes (X, Y), returning a point\n in terms of the new axes.\n\u003c/p\u003e",
          "module": "Data.SG.Vector",
          "name": "projectPointOnto2",
          "package": "SG",
          "signature": "pt a -\u003e (rel a, rel a) -\u003e pt a",
          "source": "src/Data-SG-Vector.html#projectPointOnto2",
          "type": "function"
        },
        "index": {
          "description": "Projects the point first parameter onto the given axes returning point in terms of the new axes",
          "hierarchy": "Data SG Vector",
          "module": "Data.SG.Vector",
          "name": "projectPointOnto2",
          "normalized": "a b-\u003e(c b,c b)-\u003ea b",
          "package": "SG",
          "partial": "Point Onto",
          "signature": "pt a-\u003e(rel a,rel a)-\u003ept a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector.html#v:projectPointOnto2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWorks out if the two vectors are in the same direction (to within a small\n tolerance).\n\u003c/p\u003e",
          "module": "Data.SG.Vector",
          "name": "sameDirection",
          "package": "SG",
          "signature": "rel a -\u003e rel a -\u003e Bool",
          "source": "src/Data-SG-Vector.html#sameDirection",
          "type": "function"
        },
        "index": {
          "description": "Works out if the two vectors are in the same direction to within small tolerance",
          "hierarchy": "Data SG Vector",
          "module": "Data.SG.Vector",
          "name": "sameDirection",
          "normalized": "a b-\u003ea b-\u003eBool",
          "package": "SG",
          "partial": "Direction",
          "signature": "rel a-\u003erel a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector.html#v:sameDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003eControl.Applicative.pure\u003c/code\u003e (or \u003ccode\u003e\u003ca\u003efromInteger\u003c/a\u003e\u003c/code\u003e) but with a \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e constraint.\n\u003c/p\u003e",
          "module": "Data.SG.Vector",
          "name": "simpleVec",
          "package": "SG",
          "signature": "a -\u003e f a",
          "source": "src/Data-SG-Vector.html#simpleVec",
          "type": "method"
        },
        "index": {
          "description": "Like Control.Applicative.pure or fromInteger but with Num constraint",
          "hierarchy": "Data SG Vector",
          "module": "Data.SG.Vector",
          "name": "simpleVec",
          "normalized": "a-\u003eb a",
          "package": "SG",
          "partial": "Vec",
          "signature": "a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector.html#v:simpleVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScales the vector so that it has length 1.  Note that due to floating-point\n inaccuracies and so on, mag (unitVector v) will not necessarily equal 1, but\n it should be very close.  If an all-zero vector is passed, the same will be\n returned.\n\u003c/p\u003e\u003cp\u003eThis function should be very fast when called on\n \u003ccode\u003eData.SG.Geometry.TwoDim.Rel2'\u003c/code\u003e and \u003ccode\u003eData.SG.Geometry.ThreeDim.Rel3'\u003c/code\u003e;\n vectors that are already unit vectors (no processing is done).\n\u003c/p\u003e",
          "module": "Data.SG.Vector",
          "name": "unitVector",
          "package": "SG",
          "signature": "p a -\u003e p a",
          "source": "src/Data-SG-Vector.html#unitVector",
          "type": "function"
        },
        "index": {
          "description": "Scales the vector so that it has length Note that due to floating-point inaccuracies and so on mag unitVector will not necessarily equal but it should be very close If an all-zero vector is passed the same will be returned This function should be very fast when called on Data.SG.Geometry.TwoDim.Rel2 and Data.SG.Geometry.ThreeDim.Rel3 vectors that are already unit vectors no processing is done",
          "hierarchy": "Data SG Vector",
          "module": "Data.SG.Vector",
          "name": "unitVector",
          "normalized": "a b-\u003ea b",
          "package": "SG",
          "partial": "Vector",
          "signature": "p a-\u003ep a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG-Vector.html#v:unitVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA small geometry library, with vectors, matrices and simple shape\n collision detection that is intended to be straightforward in two and three\n dimensions.\n\u003c/p\u003e\u003cp\u003eThe basics of vectors are in the \u003ca\u003eData.SG.Vector\u003c/a\u003e module, the basics of lines\n and geometry tests (e.g. testing whether a point is on a line) are in \u003ca\u003eData.SG.Geometry\u003c/a\u003e,\n with further specialised tests in \u003ca\u003eData.SG.Geometry.TwoDim\u003c/a\u003e and \u003ca\u003eData.SG.Geometry.ThreeDim\u003c/a\u003e.\n  Matrix transformations are in \u003ca\u003eData.SG.Matrix\u003c/a\u003e and shapes (with collision detection)\n are in \u003ca\u003eData.SG.Shape\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe names for most of the types in this library end with a prime.  This is because\n it is intended that you specialise these types (usually to Float or Double)\n in your application as follows:\n\u003c/p\u003e\u003cpre\u003e type Point2 = Point2' Double\n type Rel2 = Rel2' Double\n type Line2 = Line2' Double\n type Matrix22 = Matrix22' Double\n\u003c/pre\u003e\u003cp\u003eMuch of the use of the types (especially vectors) in this library is made\n using type-classes such as Num, Functor, Applicative and so on.  For more\n explanation on some of the less well-known type-classes, see either the\n article Typeclassopedia in The Monad Reader\n (\u003ca\u003ehttp://www.haskell.org/haskellwiki/The_Monad.Reader\u003c/a\u003e) issue 13\n (\u003ca\u003ehttp://www.haskell.org/sitewiki/images/8/85/TMR-Issue13.pdf\u003c/a\u003e), or my own notes\n at \u003ca\u003ehttp://www.twistedsquare.com/haskell.html\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eTo understand what various functions will actually do, look at the SGdemo project\n (\u003ca\u003ehttp://hackage.haskell.org/cgi-bin/hackage-scripts/package/SGdemo\u003c/a\u003e)\n on Hackage (and its code) which provides a visual demonstration of several of\n the functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SG",
          "name": "SG",
          "package": "SG",
          "source": "src/Data-SG.html",
          "type": "module"
        },
        "index": {
          "description": "small geometry library with vectors matrices and simple shape collision detection that is intended to be straightforward in two and three dimensions The basics of vectors are in the Data.SG.Vector module the basics of lines and geometry tests e.g testing whether point is on line are in Data.SG.Geometry with further specialised tests in Data.SG.Geometry.TwoDim and Data.SG.Geometry.ThreeDim Matrix transformations are in Data.SG.Matrix and shapes with collision detection are in Data.SG.Shape The names for most of the types in this library end with prime This is because it is intended that you specialise these types usually to Float or Double in your application as follows type Point2 Point2 Double type Rel2 Rel2 Double type Line2 Line2 Double type Matrix22 Matrix22 Double Much of the use of the types especially vectors in this library is made using type-classes such as Num Functor Applicative and so on For more explanation on some of the less well-known type-classes see either the article Typeclassopedia in The Monad Reader http www.haskell.org haskellwiki The Monad.Reader issue http www.haskell.org sitewiki images TMR-Issue13.pdf or my own notes at http www.twistedsquare.com haskell.html To understand what various functions will actually do look at the SGdemo project http hackage.haskell.org cgi-bin hackage-scripts package SGdemo on Hackage and its code which provides visual demonstration of several of the functions",
          "hierarchy": "Data SG",
          "module": "Data.SG",
          "name": "SG",
          "package": "SG",
          "partial": "SG",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SG/docs/Data-SG.html#"
      }
    }
  ]
]