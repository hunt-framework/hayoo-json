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
        "word": "gps"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA basic GPS library with calculations for distance and speed along\n with helper functions for filtering/smoothing trails.  All distances\n are in meters and time is in seconds.  Speed is thus meters/second\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Geo.Computations",
          "name": "Computations",
          "package": "gps",
          "source": "src/Geo-Computations.html",
          "type": "module"
        },
        "index": {
          "description": "basic GPS library with calculations for distance and speed along with helper functions for filtering smoothing trails All distances are in meters and time is in seconds Speed is thus meters second",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "Computations",
          "package": "gps",
          "partial": "Computations",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn arc is represented as a circle, starting heading and ending heading\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "Arc",
          "package": "gps",
          "source": "src/Geo-Computations-Basic.html#Arc",
          "type": "type"
        },
        "index": {
          "description": "An arc is represented as circle starting heading and ending heading",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "Arc",
          "package": "gps",
          "partial": "Arc",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#t:Arc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geo.Computations",
          "name": "AvgMethod",
          "package": "gps",
          "source": "src/Geo-Computations-Trail.html#AvgMethod",
          "type": "data"
        },
        "index": {
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "AvgMethod",
          "package": "gps",
          "partial": "Avg Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#t:AvgMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenearlly a circle indicates a known area in which we are searching\n (so a center point and maximum possible distance from that point)\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "Circle",
          "package": "gps",
          "source": "src/Geo-Computations-Basic.html#Circle",
          "type": "type"
        },
        "index": {
          "description": "Genearlly circle indicates known area in which we are searching so center point and maximum possible distance from that point",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "Circle",
          "package": "gps",
          "partial": "Circle",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#t:Circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistances are expressed in meters\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "Distance",
          "package": "gps",
          "source": "src/Geo-Computations-Basic.html#Distance",
          "type": "type"
        },
        "index": {
          "description": "Distances are expressed in meters",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "Distance",
          "package": "gps",
          "partial": "Distance",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#t:Distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAngles are expressed in radians from North.\n \t0\t== North\n \tpi/2\t== West\n \tpi \t== South\n \t(3\u003cem\u003e2)pi\t== East    == - (pi \u003c/em\u003e 2)\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "Heading",
          "package": "gps",
          "source": "src/Geo-Computations-Basic.html#Heading",
          "type": "type"
        },
        "index": {
          "description": "Angles are expressed in radians from North North pi West pi South pi East pi",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "Heading",
          "package": "gps",
          "partial": "Heading",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#t:Heading"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrack point is a full-fledged representation of all the data\n available in most GPS loggers.  It is possible you don't want\n all this data and can just made do with coordinates (via \u003ccode\u003ePnt\u003c/code\u003e)\n or a custom derivative.\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "Point",
          "package": "gps",
          "type": "data"
        },
        "index": {
          "description": "Track point is full-fledged representation of all the data available in most GPS loggers It is possible you don want all this data and can just made do with coordinates via Pnt or custom derivative",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "Point",
          "package": "gps",
          "partial": "Point",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA PointGrouping is a function that selects segments of a trail.\n\u003c/p\u003e\u003cp\u003eGrouping point _does not_ result in deleted points. It is always true that:\n\u003c/p\u003e\u003cp\u003eforall g :: PointGrouping c --\u003e\n     concatMap unSelect (g ts) == ts\n\u003c/p\u003e\u003cp\u003eThe purpose of grouping is usually for later processing.  Any desire to drop\n points that didn't meet a particular grouping criteria can be filled with\n a composition with \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e (or directly via \u003ccode\u003e\u003ca\u003efilterPoints\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "PointGrouping",
          "package": "gps",
          "source": "src/Geo-Computations-Trail.html#PointGrouping",
          "type": "type"
        },
        "index": {
          "description": "PointGrouping is function that selects segments of trail Grouping point does not result in deleted points It is always true that forall PointGrouping concatMap unSelect ts ts The purpose of grouping is usually for later processing Any desire to drop points that didn meet particular grouping criteria can be filled with composition with filter or directly via filterPoints",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "PointGrouping",
          "package": "gps",
          "partial": "Point Grouping",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#t:PointGrouping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen grouping points, lists of points are either marked as \u003ccode\u003e\u003ca\u003eSelect\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eNotSelect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "Selected",
          "package": "gps",
          "source": "src/Geo-Computations-Trail.html#Selected",
          "type": "data"
        },
        "index": {
          "description": "When grouping points lists of points are either marked as Select or NotSelect",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "Selected",
          "package": "gps",
          "partial": "Selected",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#t:Selected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpeed is hard coded as meters per second\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "Speed",
          "package": "gps",
          "source": "src/Geo-Computations-Basic.html#Speed",
          "type": "type"
        },
        "index": {
          "description": "Speed is hard coded as meters per second",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "Speed",
          "package": "gps",
          "partial": "Speed",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#t:Speed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geo.Computations",
          "name": "Trail",
          "package": "gps",
          "source": "src/Geo-Computations-Basic.html#Trail",
          "type": "type"
        },
        "index": {
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "Trail",
          "package": "gps",
          "partial": "Trail",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#t:Trail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a selection of coordinates, transform the selected\n coordinates in some way (while leaving the non-selected\n coordinates unaffected).\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "TransformGrouping",
          "package": "gps",
          "source": "src/Geo-Computations-Trail.html#TransformGrouping",
          "type": "type"
        },
        "index": {
          "description": "Given selection of coordinates transform the selected coordinates in some way while leaving the non-selected coordinates unaffected",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "TransformGrouping",
          "package": "gps",
          "partial": "Transform Grouping",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#t:TransformGrouping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geo.Computations",
          "name": "Vector",
          "package": "gps",
          "source": "src/Geo-Computations-Basic.html#Vector",
          "type": "type"
        },
        "index": {
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "Vector",
          "package": "gps",
          "partial": "Vector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntersection binary operator\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "(/\\)",
          "package": "gps",
          "signature": "[Selected (Trail a)] -\u003e TransformGrouping a",
          "source": "src/Geo-Computations-Trail.html#%2F%5C",
          "type": "function"
        },
        "index": {
          "description": "Intersection binary operator",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "(/\\) /\\",
          "normalized": "[Selected(Trail a)]-\u003eTransformGrouping a",
          "package": "gps",
          "signature": "[Selected(Trail a)]-\u003eTransformGrouping a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:-47--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnion binary operator\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "(\\/)",
          "package": "gps",
          "signature": "[Selected (Trail a)] -\u003e TransformGrouping a",
          "source": "src/Geo-Computations-Trail.html#%5C%2F",
          "type": "function"
        },
        "index": {
          "description": "Union binary operator",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "(\\/) \\/",
          "normalized": "[Selected(Trail a)]-\u003eTransformGrouping a",
          "package": "gps",
          "signature": "[Selected(Trail a)]-\u003eTransformGrouping a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:-92--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the speed considering only the given endpoints\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "AvgEndPoints",
          "package": "gps",
          "signature": "AvgEndPoints",
          "source": "src/Geo-Computations-Trail.html#AvgMethod",
          "type": "function"
        },
        "index": {
          "description": "Compute the speed considering only the given endpoints",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "AvgEndPoints",
          "package": "gps",
          "partial": "Avg End Points",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:AvgEndPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain the \u003ccode\u003e\u003ca\u003egeometricMean\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "AvgGeometricMean",
          "package": "gps",
          "signature": "AvgGeometricMean",
          "source": "src/Geo-Computations-Trail.html#AvgMethod",
          "type": "function"
        },
        "index": {
          "description": "Obtain the geometricMean",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "AvgGeometricMean",
          "package": "gps",
          "partial": "Avg Geometric Mean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:AvgGeometricMean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain the \u003ccode\u003e\u003ca\u003eharmonicMean\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "AvgHarmonicMean",
          "package": "gps",
          "signature": "AvgHarmonicMean",
          "source": "src/Geo-Computations-Trail.html#AvgMethod",
          "type": "function"
        },
        "index": {
          "description": "Obtain the harmonicMean",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "AvgHarmonicMean",
          "package": "gps",
          "partial": "Avg Harmonic Mean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:AvgHarmonicMean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain the \u003ccode\u003e\u003ca\u003emean\u003c/a\u003e\u003c/code\u003e of the considered points\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "AvgMean",
          "package": "gps",
          "signature": "AvgMean",
          "source": "src/Geo-Computations-Trail.html#AvgMethod",
          "type": "function"
        },
        "index": {
          "description": "Obtain the mean of the considered points",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "AvgMean",
          "package": "gps",
          "partial": "Avg Mean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:AvgMean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain the median of the considered points\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "AvgMedian",
          "package": "gps",
          "signature": "AvgMedian",
          "source": "src/Geo-Computations-Trail.html#AvgMethod",
          "type": "function"
        },
        "index": {
          "description": "Obtain the median of the considered points",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "AvgMedian",
          "package": "gps",
          "partial": "Avg Median",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:AvgMedian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the minimum of the speeds from the given methods\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "AvgMinOf",
          "package": "gps",
          "signature": "AvgMinOf [AvgMethod c]",
          "source": "src/Geo-Computations-Trail.html#AvgMethod",
          "type": "function"
        },
        "index": {
          "description": "Take the minimum of the speeds from the given methods",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "AvgMinOf",
          "normalized": "AvgMinOf[AvgMethod a]",
          "package": "gps",
          "partial": "Avg Min Of",
          "signature": "AvgMinOf[AvgMethod c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:AvgMinOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geo.Computations",
          "name": "AvgWith",
          "package": "gps",
          "signature": "AvgWith ([c] -\u003e Speed)",
          "source": "src/Geo-Computations-Trail.html#AvgMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "AvgWith",
          "normalized": "AvgWith([a]-\u003eSpeed)",
          "package": "gps",
          "partial": "Avg With",
          "signature": "AvgWith([c]-\u003eSpeed)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:AvgWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geo.Computations",
          "name": "NotSelect",
          "package": "gps",
          "signature": "NotSelect",
          "source": "src/Geo-Computations-Trail.html#Selected",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "NotSelect",
          "package": "gps",
          "partial": "Not Select",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:NotSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geo.Computations",
          "name": "Point",
          "package": "gps",
          "signature": "Point",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "Point",
          "package": "gps",
          "partial": "Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geo.Computations",
          "name": "Select",
          "package": "gps",
          "signature": "Select",
          "source": "src/Geo-Computations-Trail.html#Selected",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "Select",
          "package": "gps",
          "partial": "Select",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:Select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a vector and coordinate, computes a new coordinate.\n Within some epsilon it should hold that if\n\u003c/p\u003e\u003cpre\u003edest = addVector (dist,heading) start\u003c/pre\u003e\u003cp\u003ethen\n\u003c/p\u003e\u003cpre\u003eheading == heading start dest\u003c/pre\u003e\u003cpre\u003edist    == distance start dest\u003c/pre\u003e",
          "module": "Geo.Computations",
          "name": "addVector",
          "package": "gps",
          "signature": "Vector -\u003e Point -\u003e Point",
          "source": "src/Geo-Computations-Basic.html#addVector",
          "type": "function"
        },
        "index": {
          "description": "Given vector and coordinate computes new coordinate Within some epsilon it should hold that if dest addVector dist heading start then heading heading start dest dist distance start dest",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "addVector",
          "normalized": "Vector-\u003ePoint-\u003ePoint",
          "package": "gps",
          "partial": "Vector",
          "signature": "Vector-\u003ePoint-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:addVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eavgSpeeds n points\u003c/code\u003e\n Average speed using a window of up to \u003ccode\u003en\u003c/code\u003e seconds and averaging by taking the\n Median (\u003ccode\u003e\u003ca\u003eAvgMedian\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "avgSpeeds",
          "package": "gps",
          "signature": "NominalDiffTime -\u003e Trail Point -\u003e [(UTCTime, Speed)]",
          "source": "src/Geo-Computations-Trail.html#avgSpeeds",
          "type": "function"
        },
        "index": {
          "description": "avgSpeeds points Average speed using window of up to seconds and averaging by taking the Median AvgMedian",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "avgSpeeds",
          "normalized": "NominalDiffTime-\u003eTrail Point-\u003e[(UTCTime,Speed)]",
          "package": "gps",
          "partial": "Speeds",
          "signature": "NominalDiffTime-\u003eTrail Point-\u003e[(UTCTime,Speed)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:avgSpeeds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroups trail segments into contiguous points within the speed\n and all others outside of the speed.  The \u003ca\u003espeed\u003c/a\u003e from point p(i)\n to p(i+1) is associated with p(i) (execpt for the first speed\n value, which is associated with both the first and second point)\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "betweenSpeeds",
          "package": "gps",
          "signature": "Double -\u003e Double -\u003e PointGrouping Point",
          "source": "src/Geo-Computations-Trail.html#betweenSpeeds",
          "type": "function"
        },
        "index": {
          "description": "Groups trail segments into contiguous points within the speed and all others outside of the speed The speed from point to is associated with execpt for the first speed value which is associated with both the first and second point",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "betweenSpeeds",
          "normalized": "Double-\u003eDouble-\u003ePointGrouping Point",
          "package": "gps",
          "partial": "Speeds",
          "signature": "Double-\u003eDouble-\u003ePointGrouping Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:betweenSpeeds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterpolate selected points onto a bezier curve.  Note this gets\n exponentially more expensive with the length of the segement being\n transformed - it is not advisable to perform this operation on\n trail segements with more than ten points!\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "bezierCurve",
          "package": "gps",
          "signature": "[Selected (Trail Point)] -\u003e Trail Point",
          "source": "src/Geo-Computations-Trail.html#bezierCurve",
          "type": "function"
        },
        "index": {
          "description": "Interpolate selected points onto bezier curve Note this gets exponentially more expensive with the length of the segement being transformed it is not advisable to perform this operation on trail segements with more than ten points",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "bezierCurve",
          "normalized": "[Selected(Trail Point)]-\u003eTrail Point",
          "package": "gps",
          "partial": "Curve",
          "signature": "[Selected(Trail Point)]-\u003eTrail Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:bezierCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a bezier curve using the provided trail.  Construct a\n new trail by sampling the given bezier curve at the given times.\n The current implementation assumes the times of the input\n coordinates are available and all equal (Ex: all points are 5\n seconds apart), the results will be poor if this is not the case!\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "bezierCurveAt",
          "package": "gps",
          "signature": "[UTCTime] -\u003e Trail Point -\u003e Trail Point",
          "source": "src/Geo-Computations-Trail.html#bezierCurveAt",
          "type": "function"
        },
        "index": {
          "description": "Construct bezier curve using the provided trail Construct new trail by sampling the given bezier curve at the given times The current implementation assumes the times of the input coordinates are available and all equal Ex all points are seconds apart the results will be poor if this is not the case",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "bezierCurveAt",
          "normalized": "[UTCTime]-\u003eTrail Point-\u003eTrail Point",
          "package": "gps",
          "partial": "Curve At",
          "signature": "[UTCTime]-\u003eTrail Point-\u003eTrail Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:bezierCurveAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geo.Computations",
          "name": "bezierPoint",
          "package": "gps",
          "signature": "[Point] -\u003e Double -\u003e Point",
          "source": "src/Geo-Computations-Trail.html#bezierPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "bezierPoint",
          "normalized": "[Point]-\u003eDouble-\u003ePoint",
          "package": "gps",
          "partial": "Point",
          "signature": "[Point]-\u003eDouble-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:bezierPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the points at which two circles intersect (assumes a flat plain).  If\n the circles do not intersect or are identical then the result is \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "circleIntersectionPoints",
          "package": "gps",
          "signature": "(Point, Distance) -\u003e (Point, Distance) -\u003e Maybe (Point, Point)",
          "source": "src/Geo-Computations-Basic.html#circleIntersectionPoints",
          "type": "function"
        },
        "index": {
          "description": "Compute the points at which two circles intersect assumes flat plain If the circles do not intersect or are identical then the result is Nothing",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "circleIntersectionPoints",
          "normalized": "(Point,Distance)-\u003e(Point,Distance)-\u003eMaybe(Point,Point)",
          "package": "gps",
          "partial": "Intersection Points",
          "signature": "(Point,Distance)-\u003e(Point,Distance)-\u003eMaybe(Point,Point)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:circleIntersectionPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCircumference of earth (meters)\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "circumferenceOfEarth",
          "package": "gps",
          "signature": "Double",
          "source": "src/Geo-Computations-Basic.html#circumferenceOfEarth",
          "type": "function"
        },
        "index": {
          "description": "Circumference of earth meters",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "circumferenceOfEarth",
          "package": "gps",
          "partial": "Of Earth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:circumferenceOfEarth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the closest distance between two trails (or Nothing if a\n trail is empty).  Inefficient implementation:\n O( (n * m) * log (n * m) )\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "closestDistance",
          "package": "gps",
          "signature": "Trail Point -\u003e Trail Point -\u003e Maybe Distance",
          "source": "src/Geo-Computations-Trail.html#closestDistance",
          "type": "function"
        },
        "index": {
          "description": "Returns the closest distance between two trails or Nothing if trail is empty Inefficient implementation log",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "closestDistance",
          "normalized": "Trail Point-\u003eTrail Point-\u003eMaybe Distance",
          "package": "gps",
          "partial": "Distance",
          "signature": "Trail Point-\u003eTrail Point-\u003eMaybe Distance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:closestDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses Grahams scan to compute the convex hull of the given points.\n This operation requires sorting of the points, so don't try it unless\n you have notably more memory than the list of points will consume.\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "convexHull",
          "package": "gps",
          "signature": "[Point] -\u003e [Point]",
          "source": "src/Geo-Computations-Trail.html#convexHull",
          "type": "function"
        },
        "index": {
          "description": "Uses Grahams scan to compute the convex hull of the given points This operation requires sorting of the points so don try it unless you have notably more memory than the list of points will consume",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "convexHull",
          "normalized": "[Point]-\u003e[Point]",
          "package": "gps",
          "partial": "Hull",
          "signature": "[Point]-\u003e[Point]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:convexHull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geo.Computations",
          "name": "distance",
          "package": "gps",
          "signature": "Point -\u003e Point -\u003e Distance",
          "source": "src/Geo-Computations-Basic.html#distance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "distance",
          "normalized": "Point-\u003ePoint-\u003eDistance",
          "package": "gps",
          "signature": "Point-\u003ePoint-\u003eDistance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEast is 270 degrees (3 pi / 2)\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "east",
          "package": "gps",
          "signature": "Heading",
          "source": "src/Geo-Computations-Basic.html#east",
          "type": "function"
        },
        "index": {
          "description": "East is degrees pi",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "east",
          "package": "gps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:east"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echunk the trail into groups of N points\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "everyNPoints",
          "package": "gps",
          "signature": "Int -\u003e PointGrouping a",
          "source": "src/Geo-Computations-Trail.html#everyNPoints",
          "type": "function"
        },
        "index": {
          "description": "chunk the trail into groups of points",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "everyNPoints",
          "normalized": "Int-\u003ePointGrouping a",
          "package": "gps",
          "partial": "NPoints",
          "signature": "Int-\u003ePointGrouping a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:everyNPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove all points that remain \u003ccode\u003e\u003ca\u003eNotSelect\u003c/a\u003e\u003c/code\u003eed by the given grouping algorithm.\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "filterPoints",
          "package": "gps",
          "signature": "PointGrouping a -\u003e Trail a -\u003e Trail a",
          "source": "src/Geo-Computations-Trail.html#filterPoints",
          "type": "function"
        },
        "index": {
          "description": "Remove all points that remain NotSelect ed by the given grouping algorithm",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "filterPoints",
          "normalized": "PointGrouping a-\u003eTrail a-\u003eTrail a",
          "package": "gps",
          "partial": "Points",
          "signature": "PointGrouping a-\u003eTrail a-\u003eTrail a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:filterPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efirstGrouping f ps\u003c/code\u003e only the first segment remains \u003ccode\u003e\u003ca\u003eSelect\u003c/a\u003e\u003c/code\u003eed, and only\n if it was already selected by \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "firstGrouping",
          "package": "gps",
          "signature": "TransformGrouping a",
          "source": "src/Geo-Computations-Trail.html#firstGrouping",
          "type": "function"
        },
        "index": {
          "description": "firstGrouping ps only the first segment remains Select ed and only if it was already selected by",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "firstGrouping",
          "package": "gps",
          "partial": "Grouping",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:firstGrouping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geo.Computations",
          "name": "getVector",
          "package": "gps",
          "signature": "Point -\u003e Point -\u003e Vector",
          "source": "src/Geo-Computations-Basic.html#getVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "getVector",
          "normalized": "Point-\u003ePoint-\u003eVector",
          "package": "gps",
          "partial": "Vector",
          "signature": "Point-\u003ePoint-\u003eVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:getVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirection two points aim toward (0 = North, pi\u003cem\u003e2 = West, pi = South, 3pi\u003c/em\u003e2 = East)\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "heading",
          "package": "gps",
          "signature": "Point -\u003e Point -\u003e Heading",
          "source": "src/Geo-Computations-Basic.html#heading",
          "type": "function"
        },
        "index": {
          "description": "Direction two points aim toward North pi West pi South pi East",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "heading",
          "normalized": "Point-\u003ePoint-\u003eHeading",
          "package": "gps",
          "signature": "Point-\u003ePoint-\u003eHeading",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:heading"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003einterpolate c1 c2 w\u003c/code\u003e where \u003ccode\u003e0 \u003c= w \u003c= 1\u003c/code\u003e Gives a point on the line\n between c1 and c2 equal to c1 when \u003ccode\u003ew == 0\u003c/code\u003e (weighted linearly\n toward c2).\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "interpolate",
          "package": "gps",
          "signature": "Point -\u003e Point -\u003e Double -\u003e Point",
          "source": "src/Geo-Computations-Basic.html#interpolate",
          "type": "function"
        },
        "index": {
          "description": "interpolate c1 c2 where Gives point on the line between c1 and c2 equal to c1 when weighted linearly toward c2",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "interpolate",
          "normalized": "Point-\u003ePoint-\u003eDouble-\u003ePoint",
          "package": "gps",
          "signature": "Point-\u003ePoint-\u003eDouble-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:interpolate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the area in which all given circles intersect.  The resulting\n area is described in terms of the bounding arcs.   All cirlces must\n intersect at two points.\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "intersectionArcsOf",
          "package": "gps",
          "signature": "[Circle Point] -\u003e [Arc Point]",
          "source": "src/Geo-Computations-Basic.html#intersectionArcsOf",
          "type": "function"
        },
        "index": {
          "description": "Find the area in which all given circles intersect The resulting area is described in terms of the bounding arcs All cirlces must intersect at two points",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "intersectionArcsOf",
          "normalized": "[Circle Point]-\u003e[Arc Point]",
          "package": "gps",
          "partial": "Arcs Of",
          "signature": "[Circle Point]-\u003e[Arc Point]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:intersectionArcsOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eintersects the given groupings\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "intersectionOf",
          "package": "gps",
          "signature": "[PointGrouping Point] -\u003e PointGrouping Point",
          "source": "src/Geo-Computations-Trail.html#intersectionOf",
          "type": "function"
        },
        "index": {
          "description": "intersects the given groupings",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "intersectionOf",
          "normalized": "[PointGrouping Point]-\u003ePointGrouping Point",
          "package": "gps",
          "partial": "Of",
          "signature": "[PointGrouping Point]-\u003ePointGrouping Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:intersectionOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverts the selected/nonselected segments\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "invertSelection",
          "package": "gps",
          "signature": "TransformGrouping a",
          "source": "src/Geo-Computations-Trail.html#invertSelection",
          "type": "function"
        },
        "index": {
          "description": "Inverts the selected nonselected segments",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "invertSelection",
          "package": "gps",
          "partial": "Selection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:invertSelection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geo.Computations",
          "name": "isNotSelected",
          "package": "gps",
          "signature": "Selected a -\u003e Bool",
          "source": "src/Geo-Computations-Trail.html#isNotSelected",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "isNotSelected",
          "normalized": "Selected a-\u003eBool",
          "package": "gps",
          "partial": "Not Selected",
          "signature": "Selected a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:isNotSelected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geo.Computations",
          "name": "isSelected",
          "package": "gps",
          "signature": "Selected a -\u003e Bool",
          "source": "src/Geo-Computations-Trail.html#isSelected",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "isSelected",
          "normalized": "Selected a-\u003eBool",
          "package": "gps",
          "partial": "Selected",
          "signature": "Selected a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:isSelected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly the last segment, if any, is selected (note: the current\n implementation is inefficient, using \u003ccode\u003e\u003ca\u003ereverse\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "lastGrouping",
          "package": "gps",
          "signature": "TransformGrouping a",
          "source": "src/Geo-Computations-Trail.html#lastGrouping",
          "type": "function"
        },
        "index": {
          "description": "Only the last segment if any is selected note the current implementation is inefficient using reverse",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "lastGrouping",
          "package": "gps",
          "partial": "Grouping",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:lastGrouping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilters out any points that go backward in time (thus must not be\n valid if this is a trail)\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "linearTime",
          "package": "gps",
          "signature": "[Point] -\u003e [Point]",
          "source": "src/Geo-Computations-Trail.html#linearTime",
          "type": "function"
        },
        "index": {
          "description": "Filters out any points that go backward in time thus must not be valid if this is trail",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "linearTime",
          "normalized": "[Point]-\u003e[Point]",
          "package": "gps",
          "partial": "Time",
          "signature": "[Point]-\u003e[Point]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:linearTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geo.Computations",
          "name": "maximumDistanceOfArc",
          "package": "gps",
          "signature": "Point -\u003e Arc Point -\u003e Distance",
          "source": "src/Geo-Computations-Basic.html#maximumDistanceOfArc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "maximumDistanceOfArc",
          "normalized": "Point-\u003eArc Point-\u003eDistance",
          "package": "gps",
          "partial": "Distance Of Arc",
          "signature": "Point-\u003eArc Point-\u003eDistance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:maximumDistanceOfArc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNorth is 0 radians\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "north",
          "package": "gps",
          "signature": "Heading",
          "source": "src/Geo-Computations-Basic.html#north",
          "type": "function"
        },
        "index": {
          "description": "North is radians",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "north",
          "package": "gps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:north"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geo.Computations",
          "name": "onSelected",
          "package": "gps",
          "signature": "(a -\u003e b) -\u003e (a -\u003e b) -\u003e Selected a -\u003e b",
          "source": "src/Geo-Computations-Trail.html#onSelected",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "onSelected",
          "normalized": "(a-\u003eb)-\u003e(a-\u003eb)-\u003eSelected a-\u003eb",
          "package": "gps",
          "partial": "Selected",
          "signature": "(a-\u003eb)-\u003e(a-\u003eb)-\u003eSelected a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:onSelected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn meters\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "pntEle",
          "package": "gps",
          "signature": "Maybe Double",
          "type": "function"
        },
        "index": {
          "description": "In meters",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "pntEle",
          "package": "gps",
          "partial": "Ele",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:pntEle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geo.Computations",
          "name": "pntLat",
          "package": "gps",
          "signature": "Latitude",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "pntLat",
          "package": "gps",
          "partial": "Lat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:pntLat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geo.Computations",
          "name": "pntLon",
          "package": "gps",
          "signature": "Longitude",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "pntLon",
          "package": "gps",
          "partial": "Lon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:pntLon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geo.Computations",
          "name": "pntTime",
          "package": "gps",
          "signature": "Maybe UTCTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "pntTime",
          "package": "gps",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:pntTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geo.Computations",
          "name": "pt",
          "package": "gps",
          "signature": "Latitude -\u003e Longitude -\u003e Maybe Double -\u003e Maybe UTCTime -\u003e Point",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "pt",
          "normalized": "Latitude-\u003eLongitude-\u003eMaybe Double-\u003eMaybe UTCTime-\u003ePoint",
          "package": "gps",
          "signature": "Latitude-\u003eLongitude-\u003eMaybe Double-\u003eMaybe UTCTime-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:pt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eradius of the earth in meters\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "radiusOfEarth",
          "package": "gps",
          "signature": "Double",
          "source": "src/Geo-Computations-Basic.html#radiusOfEarth",
          "type": "function"
        },
        "index": {
          "description": "radius of the earth in meters",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "radiusOfEarth",
          "package": "gps",
          "partial": "Of Earth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:radiusOfEarth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geo.Computations",
          "name": "readGPXFile",
          "package": "gps",
          "signature": "FilePath -\u003e IO (Maybe GPX)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "readGPXFile",
          "normalized": "FilePath-\u003eIO(Maybe GPX)",
          "package": "gps",
          "partial": "GPXFile",
          "signature": "FilePath-\u003eIO(Maybe GPX)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:readGPXFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor every selected group, refine the selection using the second\n grouping method.  This differs from \u003ccode\u003eIntersectionOf\u003c/code\u003e by restarting\n the second grouping algorithm at the beginning each group selected\n by the first algorithm.\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "refineGrouping",
          "package": "gps",
          "signature": "PointGrouping a -\u003e TransformGrouping a",
          "source": "src/Geo-Computations-Trail.html#refineGrouping",
          "type": "function"
        },
        "index": {
          "description": "For every selected group refine the selection using the second grouping method This differs from IntersectionOf by restarting the second grouping algorithm at the beginning each group selected by the first algorithm",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "refineGrouping",
          "normalized": "PointGrouping a-\u003eTransformGrouping a",
          "package": "gps",
          "partial": "Grouping",
          "signature": "PointGrouping a-\u003eTransformGrouping a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:refineGrouping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ca\u003erest point\u003c/a\u003e means the coordinates remain within a given distance\n for at least a particular amount of time.\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "restLocations",
          "package": "gps",
          "signature": "Distance -\u003e NominalDiffTime -\u003e PointGrouping Point",
          "source": "src/Geo-Computations-Trail.html#restLocations",
          "type": "function"
        },
        "index": {
          "description": "rest point means the coordinates remain within given distance for at least particular amount of time",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "restLocations",
          "normalized": "Distance-\u003eNominalDiffTime-\u003ePointGrouping Point",
          "package": "gps",
          "partial": "Locations",
          "signature": "Distance-\u003eNominalDiffTime-\u003ePointGrouping Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:restLocations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geo.Computations",
          "name": "selLength",
          "package": "gps",
          "signature": "Selected [a] -\u003e Int",
          "source": "src/Geo-Computations-Trail.html#selLength",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "selLength",
          "normalized": "Selected[a]-\u003eInt",
          "package": "gps",
          "partial": "Length",
          "signature": "Selected[a]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:selLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eslidingAverageSpeed m n\u003c/code\u003e Average speed using a moving window of up to \u003ccode\u003en\u003c/code\u003e seconds\n and an \u003ccode\u003e\u003ca\u003eAvgMethod\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003em\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "slidingAverageSpeed",
          "package": "gps",
          "signature": "AvgMethod Point -\u003e NominalDiffTime -\u003e Trail Point -\u003e [(UTCTime, Speed)]",
          "source": "src/Geo-Computations-Trail.html#slidingAverageSpeed",
          "type": "function"
        },
        "index": {
          "description": "slidingAverageSpeed Average speed using moving window of up to seconds and an AvgMethod of",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "slidingAverageSpeed",
          "normalized": "AvgMethod Point-\u003eNominalDiffTime-\u003eTrail Point-\u003e[(UTCTime,Speed)]",
          "package": "gps",
          "partial": "Average Speed",
          "signature": "AvgMethod Point-\u003eNominalDiffTime-\u003eTrail Point-\u003e[(UTCTime,Speed)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:slidingAverageSpeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmooth points with rest areas using a bezierCurve.\n\u003c/p\u003e\u003cp\u003eParameters: rest for 1 minute within 30 meters get smoothed\n in a bezier curve over every 8 points.\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "smoothRests",
          "package": "gps",
          "signature": "Trail Point -\u003e Trail Point",
          "source": "src/Geo-Computations-Trail.html#smoothRests",
          "type": "function"
        },
        "index": {
          "description": "Smooth points with rest areas using bezierCurve Parameters rest for minute within meters get smoothed in bezier curve over every points",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "smoothRests",
          "normalized": "Trail Point-\u003eTrail Point",
          "package": "gps",
          "partial": "Rests",
          "signature": "Trail Point-\u003eTrail Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:smoothRests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmooth every 7 points using a bezier curve\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "smoothTrail",
          "package": "gps",
          "signature": "Trail Point -\u003e Trail Point",
          "source": "src/Geo-Computations-Trail.html#smoothTrail",
          "type": "function"
        },
        "index": {
          "description": "Smooth every points using bezier curve",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "smoothTrail",
          "normalized": "Trail Point-\u003eTrail Point",
          "package": "gps",
          "partial": "Trail",
          "signature": "Trail Point-\u003eTrail Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:smoothTrail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSouth, being 180 degrees from North, is pi.\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "south",
          "package": "gps",
          "signature": "Heading",
          "source": "src/Geo-Computations-Basic.html#south",
          "type": "function"
        },
        "index": {
          "description": "South being degrees from North is pi",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "south",
          "package": "gps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:south"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echunking points into groups spanning at most the given time\n interval.\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "spansTime",
          "package": "gps",
          "signature": "NominalDiffTime -\u003e PointGrouping Point",
          "source": "src/Geo-Computations-Trail.html#spansTime",
          "type": "function"
        },
        "index": {
          "description": "chunking points into groups spanning at most the given time interval",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "spansTime",
          "normalized": "NominalDiffTime-\u003ePointGrouping Point",
          "package": "gps",
          "partial": "Time",
          "signature": "NominalDiffTime-\u003ePointGrouping Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:spansTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpeed in meters per second, only if a \u003ccode\u003eTime\u003c/code\u003e was recorded for each waypoint.\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "speed",
          "package": "gps",
          "signature": "Point -\u003e Point -\u003e Maybe Speed",
          "source": "src/Geo-Computations-Basic.html#speed",
          "type": "function"
        },
        "index": {
          "description": "Speed in meters per second only if Time was recorded for each waypoint",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "speed",
          "normalized": "Point-\u003ePoint-\u003eMaybe Speed",
          "package": "gps",
          "signature": "Point-\u003ePoint-\u003eMaybe Speed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:speed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the total distance traveled\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "totalDistance",
          "package": "gps",
          "signature": "[Point] -\u003e Distance",
          "source": "src/Geo-Computations-Trail.html#totalDistance",
          "type": "function"
        },
        "index": {
          "description": "Find the total distance traveled",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "totalDistance",
          "normalized": "[Point]-\u003eDistance",
          "package": "gps",
          "partial": "Distance",
          "signature": "[Point]-\u003eDistance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:totalDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geo.Computations",
          "name": "totalTime",
          "package": "gps",
          "signature": "Trail Point -\u003e NominalDiffTime",
          "source": "src/Geo-Computations-Trail.html#totalTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "totalTime",
          "normalized": "Trail Point-\u003eNominalDiffTime",
          "package": "gps",
          "partial": "Time",
          "signature": "Trail Point-\u003eNominalDiffTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:totalTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Geo.Computations",
          "name": "unSelect",
          "package": "gps",
          "signature": "a",
          "source": "src/Geo-Computations-Trail.html#Selected",
          "type": "function"
        },
        "index": {
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "unSelect",
          "package": "gps",
          "partial": "Select",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:unSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnion all the groupings\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "unionOf",
          "package": "gps",
          "signature": "[PointGrouping Point] -\u003e PointGrouping Point",
          "source": "src/Geo-Computations-Trail.html#unionOf",
          "type": "function"
        },
        "index": {
          "description": "Union all the groupings",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "unionOf",
          "normalized": "[PointGrouping Point]-\u003ePointGrouping Point",
          "package": "gps",
          "partial": "Of",
          "signature": "[PointGrouping Point]-\u003ePointGrouping Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:unionOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWest is 90 degrees (pi/2)\n\u003c/p\u003e",
          "module": "Geo.Computations",
          "name": "west",
          "package": "gps",
          "signature": "Heading",
          "source": "src/Geo-Computations-Basic.html#west",
          "type": "function"
        },
        "index": {
          "description": "West is degrees pi",
          "hierarchy": "Geo Computations",
          "module": "Geo.Computations",
          "name": "west",
          "package": "gps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gps/docs/Geo-Computations.html#v:west"
      }
    }
  ]
]