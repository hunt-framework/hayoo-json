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
        "word": "circle-packing"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Optimisation.CirclePacking",
          "name": "CirclePacking",
          "package": "circle-packing",
          "source": "src/Optimisation-CirclePacking.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Optimisation CirclePacking",
          "module": "Optimisation.CirclePacking",
          "name": "CirclePacking",
          "package": "circle-packing",
          "partial": "Circle Packing",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/circle-packing/docs/Optimisation-CirclePacking.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epackCircles\u003c/a\u003e\u003c/code\u003e takes a list of circles and a function that yields the\n   radius of the circle.\n\u003c/p\u003e\u003cp\u003eIt returns a list of all circles, in unspecified order, together with \n   coordinates such that they do not overlap but sit as tight as possible,\n   filling a large circle.\n\u003c/p\u003e\u003cp\u003eFinding the optimal solution to this is NP hard, so only\n   heuristics are feasible. This particular\n   implementation is neither very good nor very fast,\n   compared to the state of the art in research. Nevertheless\n   it is simple to use and gives visually acceptable results.\n\u003c/p\u003e\u003cp\u003eThe heuristics begins by placing the largest circle first, and the\n   next-to-largest next to it. From then on it adds circles by considering all\n   points where the circle to be added would touch two circles but overlap with\n   none, and picks the one that is closest to the center of mass of the current\n   placements.\n\u003c/p\u003e",
          "module": "Optimisation.CirclePacking",
          "name": "packCircles",
          "package": "circle-packing",
          "signature": "(a -\u003e Double) -\u003e [a] -\u003e [(a, (Double, Double))]",
          "source": "src/Optimisation-CirclePacking.html#packCircles",
          "type": "function"
        },
        "index": {
          "description": "packCircles takes list of circles and function that yields the radius of the circle It returns list of all circles in unspecified order together with coordinates such that they do not overlap but sit as tight as possible filling large circle Finding the optimal solution to this is NP hard so only heuristics are feasible This particular implementation is neither very good nor very fast compared to the state of the art in research Nevertheless it is simple to use and gives visually acceptable results The heuristics begins by placing the largest circle first and the next-to-largest next to it From then on it adds circles by considering all points where the circle to be added would touch two circles but overlap with none and picks the one that is closest to the center of mass of the current placements",
          "hierarchy": "Optimisation CirclePacking",
          "module": "Optimisation.CirclePacking",
          "name": "packCircles",
          "normalized": "(a-\u003eDouble)-\u003e[a]-\u003e[(a,(Double,Double))]",
          "package": "circle-packing",
          "partial": "Circles",
          "signature": "(a-\u003eDouble)-\u003e[a]-\u003e[(a,(Double,Double))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/circle-packing/docs/Optimisation-CirclePacking.html#v:packCircles"
      }
    }
  ]
]