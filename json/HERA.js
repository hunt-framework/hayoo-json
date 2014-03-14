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
        "word": "HERA"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Ball",
          "name": "Ball",
          "package": "HERA",
          "source": "src/Data-Number-Ball.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "Ball",
          "package": "HERA",
          "partial": "Ball",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBall represents a closed interval \u003ccode\u003e[center-radius, center+radius] \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Number.Ball",
          "name": "Ball",
          "package": "HERA",
          "source": "src/Data-Number-Ball.html#Ball",
          "type": "data"
        },
        "index": {
          "description": "Ball represents closed interval center-radius center radius",
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "Ball",
          "package": "HERA",
          "partial": "Ball",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#t:Ball"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Ball",
          "name": "Ball",
          "package": "HERA",
          "signature": "Ball",
          "source": "src/Data-Number-Ball.html#Ball",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "Ball",
          "package": "HERA",
          "partial": "Ball",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:Ball"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Ball",
          "name": "absB",
          "package": "HERA",
          "signature": "Precision -\u003e Ball -\u003e Ball",
          "source": "src/Data-Number-Ball.html#absB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "absB",
          "normalized": "Precision-\u003eBall-\u003eBall",
          "package": "HERA",
          "signature": "Precision-\u003eBall-\u003eBall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:absB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAddition of two balls.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e center = center a + center b\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e radius = radius a + radius b\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eRounding errors are added to the radius.\n\u003c/p\u003e",
          "module": "Data.Number.Ball",
          "name": "add",
          "package": "HERA",
          "signature": "Precision -\u003e Ball -\u003e Ball -\u003e Ball",
          "source": "src/Data-Number-Ball.html#add",
          "type": "function"
        },
        "index": {
          "description": "Addition of two balls center center center radius radius radius Rounding errors are added to the radius",
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "add",
          "normalized": "Precision-\u003eBall-\u003eBall-\u003eBall",
          "package": "HERA",
          "signature": "Precision-\u003eBall-\u003eBall-\u003eBall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if second ball is included in the first\n\u003c/p\u003e",
          "module": "Data.Number.Ball",
          "name": "below",
          "package": "HERA",
          "signature": "Ball -\u003e Ball -\u003e Bool",
          "source": "src/Data-Number-Ball.html#below",
          "type": "function"
        },
        "index": {
          "description": "Check if second ball is included in the first",
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "below",
          "normalized": "Ball-\u003eBall-\u003eBool",
          "package": "HERA",
          "signature": "Ball-\u003eBall-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:below"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecenter of the ball\n\u003c/p\u003e",
          "module": "Data.Number.Ball",
          "name": "center",
          "package": "HERA",
          "signature": "Dyadic",
          "source": "src/Data-Number-Ball.html#Ball",
          "type": "function"
        },
        "index": {
          "description": "center of the ball",
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "center",
          "package": "HERA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:center"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare two balls.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e if upper a \u003c lower b then Less\n\u003c/li\u003e\u003cli\u003e if upper b \u003c lower a then Greater \n\u003c/li\u003e\u003cli\u003e otherwise balls are incomparable.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Number.Ball",
          "name": "compareB",
          "package": "HERA",
          "signature": "Ball -\u003e Ball -\u003e POrdering",
          "source": "src/Data-Number-Ball.html#compareB",
          "type": "function"
        },
        "index": {
          "description": "Compare two balls if upper lower then Less if upper lower then Greater otherwise balls are incomparable",
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "compareB",
          "normalized": "Ball-\u003eBall-\u003ePOrdering",
          "package": "HERA",
          "signature": "Ball-\u003eBall-\u003ePOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:compareB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if dyadic is element of the ball.\n\u003c/p\u003e",
          "module": "Data.Number.Ball",
          "name": "contains",
          "package": "HERA",
          "signature": "Ball -\u003e Dyadic -\u003e Bool",
          "source": "src/Data-Number-Ball.html#contains",
          "type": "function"
        },
        "index": {
          "description": "Check if dyadic is element of the ball",
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "contains",
          "normalized": "Ball-\u003eDyadic-\u003eBool",
          "package": "HERA",
          "signature": "Ball-\u003eDyadic-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:contains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivision of two balls\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If radius is \"large\" then divide endpoints and makeA a ball from them.\n\u003c/li\u003e\u003cli\u003e If radius is \"small\" then division can be optimized\n\u003c/li\u003e\u003cli\u003e\u003cpre\u003e center = center a / center b\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e \u003ccode\u003e (radius = radius a * center b + center a * radius b) / (center b * center b) + 2 * 2 ^ (e1 - e2 - p)\u003c/code\u003e \n  where \u003ccode\u003e p \u003c/code\u003e is precision of the result, \u003ccode\u003e e1 = getExp c1, e2 = getExp c2 \u003c/code\u003e. This way the resulting interval is \n  guaranteed to be correct.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eRounding errors are added to the radius.\n\u003c/p\u003e\u003cp\u003eIf divisor ball contains zero compuatation fails with fail.\n\u003c/p\u003e",
          "module": "Data.Number.Ball",
          "name": "div",
          "package": "HERA",
          "signature": "Precision -\u003e Ball -\u003e Ball -\u003e m Ball",
          "source": "src/Data-Number-Ball.html#div",
          "type": "function"
        },
        "index": {
          "description": "Division of two balls If radius is large then divide endpoints and makeA ball from them If radius is small then division can be optimized center center center radius radius center center radius center center e1 e2 where is precision of the result e1 getExp c1 e2 getExp c2 This way the resulting interval is guaranteed to be correct Rounding errors are added to the radius If divisor ball contains zero compuatation fails with fail",
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "div",
          "normalized": "Precision-\u003eBall-\u003eBall-\u003ea Ball",
          "package": "HERA",
          "signature": "Precision-\u003eBall-\u003eBall-\u003em Ball",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e e ^ b\u003c/pre\u003e",
          "module": "Data.Number.Ball",
          "name": "exp",
          "package": "HERA",
          "signature": "Precision -\u003e Ball -\u003e Ball",
          "source": "src/Data-Number-Ball.html#exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "exp",
          "normalized": "Precision-\u003eBall-\u003eBall",
          "package": "HERA",
          "signature": "Precision-\u003eBall-\u003eBall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakeA a ball from dyadic. Radius is 0 if desired precision is not smaller\n than precision of dyadic.\n\u003c/p\u003e",
          "module": "Data.Number.Ball",
          "name": "fromDyadic",
          "package": "HERA",
          "signature": "Precision -\u003e Dyadic -\u003e Ball",
          "source": "src/Data-Number-Ball.html#fromDyadic",
          "type": "function"
        },
        "index": {
          "description": "MakeA ball from dyadic Radius is if desired precision is not smaller than precision of dyadic",
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "fromDyadic",
          "normalized": "Precision-\u003eDyadic-\u003eBall",
          "package": "HERA",
          "partial": "Dyadic",
          "signature": "Precision-\u003eDyadic-\u003eBall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:fromDyadic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to fromDyadic.\n\u003c/p\u003e",
          "module": "Data.Number.Ball",
          "name": "fromInt",
          "package": "HERA",
          "signature": "Precision -\u003e Int -\u003e Ball",
          "source": "src/Data-Number-Ball.html#fromInt",
          "type": "function"
        },
        "index": {
          "description": "Similar to fromDyadic",
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "fromInt",
          "normalized": "Precision-\u003eInt-\u003eBall",
          "package": "HERA",
          "partial": "Int",
          "signature": "Precision-\u003eInt-\u003eBall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:fromInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to fromDyadic.\n\u003c/p\u003e",
          "module": "Data.Number.Ball",
          "name": "fromString",
          "package": "HERA",
          "signature": "Precision -\u003e String -\u003e Ball",
          "source": "src/Data-Number-Ball.html#fromString",
          "type": "function"
        },
        "index": {
          "description": "Similar to fromDyadic",
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "fromString",
          "normalized": "Precision-\u003eString-\u003eBall",
          "package": "HERA",
          "partial": "String",
          "signature": "Precision-\u003eString-\u003eBall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to fromInt.\n\u003c/p\u003e",
          "module": "Data.Number.Ball",
          "name": "fromWord",
          "package": "HERA",
          "signature": "Precision -\u003e Word -\u003e Ball",
          "source": "src/Data-Number-Ball.html#fromWord",
          "type": "function"
        },
        "index": {
          "description": "Similar to fromInt",
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "fromWord",
          "normalized": "Precision-\u003eWord-\u003eBall",
          "package": "HERA",
          "partial": "Word",
          "signature": "Precision-\u003eWord-\u003eBall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:fromWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntersection of two balls exactly (no precision is lost).\n\u003c/p\u003e",
          "module": "Data.Number.Ball",
          "name": "intersect",
          "package": "HERA",
          "signature": "Ball -\u003e Ball -\u003e m Ball",
          "source": "src/Data-Number-Ball.html#intersect",
          "type": "function"
        },
        "index": {
          "description": "Intersection of two balls exactly no precision is lost",
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "intersect",
          "normalized": "Ball-\u003eBall-\u003ea Ball",
          "package": "HERA",
          "signature": "Ball-\u003eBall-\u003em Ball",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:intersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an intersection of two balls. If balls are disjoint then computation fails with fail.\n\u003c/p\u003e",
          "module": "Data.Number.Ball",
          "name": "intersectA",
          "package": "HERA",
          "signature": "Precision-\u003e Ball-\u003e Ball-\u003e m Ball",
          "type": "function"
        },
        "index": {
          "description": "Returns an intersection of two balls If balls are disjoint then computation fails with fail",
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "intersectA",
          "normalized": "Precision-\u003eBall-\u003eBall-\u003ea Ball",
          "package": "HERA",
          "signature": "Precision-\u003eBall-\u003eBall-\u003em Ball",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:intersectA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNatural logarithm of a ball. If interval contains 0 then computation fails.\n\u003c/p\u003e",
          "module": "Data.Number.Ball",
          "name": "log",
          "package": "HERA",
          "signature": "Precision -\u003e Ball -\u003e m Ball",
          "source": "src/Data-Number-Ball.html#log",
          "type": "function"
        },
        "index": {
          "description": "Natural logarithm of ball If interval contains then computation fails",
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "log",
          "normalized": "Precision-\u003eBall-\u003ea Ball",
          "package": "HERA",
          "signature": "Precision-\u003eBall-\u003em Ball",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLower endpoint of the ball rounded down to specified precision.\n\u003c/p\u003e",
          "module": "Data.Number.Ball",
          "name": "lower",
          "package": "HERA",
          "signature": "Precision -\u003e Ball -\u003e Dyadic",
          "source": "src/Data-Number-Ball.html#lower",
          "type": "function"
        },
        "index": {
          "description": "Lower endpoint of the ball rounded down to specified precision",
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "lower",
          "normalized": "Precision-\u003eBall-\u003eDyadic",
          "package": "HERA",
          "signature": "Precision-\u003eBall-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:lower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLower endpoint with precision of the center\n\u003c/p\u003e",
          "module": "Data.Number.Ball",
          "name": "lower_",
          "package": "HERA",
          "signature": "Ball -\u003e Dyadic",
          "source": "src/Data-Number-Ball.html#lower_",
          "type": "function"
        },
        "index": {
          "description": "Lower endpoint with precision of the center",
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "lower_",
          "normalized": "Ball-\u003eDyadic",
          "package": "HERA",
          "signature": "Ball-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:lower_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a ball from endpoints so that no precision is lost. \n\u003c/p\u003e",
          "module": "Data.Number.Ball",
          "name": "make",
          "package": "HERA",
          "signature": "Dyadic-\u003e Dyadic-\u003e Ball",
          "type": "function"
        },
        "index": {
          "description": "Make ball from endpoints so that no precision is lost",
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "make",
          "normalized": "Dyadic-\u003eDyadic-\u003eBall",
          "package": "HERA",
          "signature": "Dyadic-\u003eDyadic-\u003eBall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:make"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a ball from endpoints\n\u003c/p\u003e",
          "module": "Data.Number.Ball",
          "name": "makeA",
          "package": "HERA",
          "signature": "Precision-\u003e Dyadic-\u003e Dyadic-\u003e Ball",
          "type": "function"
        },
        "index": {
          "description": "Make ball from endpoints",
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "makeA",
          "normalized": "Precision-\u003eDyadic-\u003eDyadic-\u003eBall",
          "package": "HERA",
          "signature": "Precision-\u003eDyadic-\u003eDyadic-\u003eBall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:makeA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum of two balls, meaning:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e lower = max (lower a) (lower b) rounded down\n\u003c/li\u003e\u003cli\u003e upper = max (upper a) (upper b) rounded up\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Number.Ball",
          "name": "maxB",
          "package": "HERA",
          "signature": "Precision -\u003e Ball -\u003e Ball -\u003e Ball",
          "source": "src/Data-Number-Ball.html#maxB",
          "type": "function"
        },
        "index": {
          "description": "Maximum of two balls meaning lower max lower lower rounded down upper max upper upper rounded up",
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "maxB",
          "normalized": "Precision-\u003eBall-\u003eBall-\u003eBall",
          "package": "HERA",
          "signature": "Precision-\u003eBall-\u003eBall-\u003eBall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:maxB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogous to maxB.\n\u003c/p\u003e",
          "module": "Data.Number.Ball",
          "name": "minB",
          "package": "HERA",
          "signature": "Precision -\u003e Ball -\u003e Ball -\u003e Ball",
          "source": "src/Data-Number-Ball.html#minB",
          "type": "function"
        },
        "index": {
          "description": "Analogous to maxB",
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "minB",
          "normalized": "Precision-\u003eBall-\u003eBall-\u003eBall",
          "package": "HERA",
          "signature": "Precision-\u003eBall-\u003eBall-\u003eBall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:minB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiplication of two balls. (centers of both balls are assumed positive)\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If none of the balls contains 0 then\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e center = center a * center b + radius a * radius b\u003c/pre\u003e\u003cpre\u003e radius = center a * radius b + radius a * center b\u003c/pre\u003e\u003cul\u003e\u003cli\u003e If one of the operands (left) contains 0\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e center = center a * upper b\u003c/pre\u003e\u003cpre\u003e radius = radius a * upper b\u003c/pre\u003e\u003cul\u003e\u003cli\u003e If both of the balls contain 0\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e lower =  min ((lower a) * (upper b)) ((lower b) * (upper a))\u003c/pre\u003e\u003cpre\u003e upper =  max ((lower a) * (lower b)) ((upper b) * (upper a))\u003c/pre\u003e\u003cp\u003eRounding errors are added to the radius.\n\u003c/p\u003e",
          "module": "Data.Number.Ball",
          "name": "mul",
          "package": "HERA",
          "signature": "Precision -\u003e Ball -\u003e Ball -\u003e Ball",
          "source": "src/Data-Number-Ball.html#mul",
          "type": "function"
        },
        "index": {
          "description": "Multiplication of two balls centers of both balls are assumed positive If none of the balls contains then center center center radius radius radius center radius radius center If one of the operands left contains center center upper radius radius upper If both of the balls contain lower min lower upper lower upper upper max lower lower upper upper Rounding errors are added to the radius",
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "mul",
          "normalized": "Precision-\u003eBall-\u003eBall-\u003eBall",
          "package": "HERA",
          "signature": "Precision-\u003eBall-\u003eBall-\u003eBall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:mul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegation of the ball. \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e center = - center b rounded to specified precision.\n\u003c/li\u003e\u003cli\u003e radius is only modified for the rounding error.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Number.Ball",
          "name": "neg",
          "package": "HERA",
          "signature": "Precision -\u003e Ball -\u003e Ball",
          "source": "src/Data-Number-Ball.html#neg",
          "type": "function"
        },
        "index": {
          "description": "Negation of the ball center center rounded to specified precision radius is only modified for the rounding error",
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "neg",
          "normalized": "Precision-\u003eBall-\u003eBall",
          "package": "HERA",
          "signature": "Precision-\u003eBall-\u003eBall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:neg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalize the given ball's center to the specified precision.\n Resulting ball might be larger.\n\u003c/p\u003e",
          "module": "Data.Number.Ball",
          "name": "normalizeBall",
          "package": "HERA",
          "signature": "Precision -\u003e Ball -\u003e Ball",
          "source": "src/Data-Number-Ball.html#normalizeBall",
          "type": "function"
        },
        "index": {
          "description": "Normalize the given ball center to the specified precision Resulting ball might be larger",
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "normalizeBall",
          "normalized": "Precision-\u003eBall-\u003eBall",
          "package": "HERA",
          "partial": "Ball",
          "signature": "Precision-\u003eBall-\u003eBall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:normalizeBall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eradius of the ball \n\u003c/p\u003e",
          "module": "Data.Number.Ball",
          "name": "radius",
          "package": "HERA",
          "signature": "Dyadic",
          "source": "src/Data-Number-Ball.html#Ball",
          "type": "function"
        },
        "index": {
          "description": "radius of the ball",
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "radius",
          "package": "HERA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:radius"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign of lower endpoint of the ball. This should be faster than using \u003ccode\u003e signum (center b - radius b) \u003c/code\u003e \n\u003c/p\u003e",
          "module": "Data.Number.Ball",
          "name": "sgnLower",
          "package": "HERA",
          "signature": "Ball -\u003e Int",
          "source": "src/Data-Number-Ball.html#sgnLower",
          "type": "function"
        },
        "index": {
          "description": "Sign of lower endpoint of the ball This should be faster than using signum center radius",
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "sgnLower",
          "normalized": "Ball-\u003eInt",
          "package": "HERA",
          "partial": "Lower",
          "signature": "Ball-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:sgnLower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogous to sgnLower.\n\u003c/p\u003e",
          "module": "Data.Number.Ball",
          "name": "sgnUpper",
          "package": "HERA",
          "signature": "Ball -\u003e Int",
          "source": "src/Data-Number-Ball.html#sgnUpper",
          "type": "function"
        },
        "index": {
          "description": "Analogous to sgnLower",
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "sgnUpper",
          "normalized": "Ball-\u003eInt",
          "package": "HERA",
          "partial": "Upper",
          "signature": "Ball-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:sgnUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSquare root of a ball. If interval contains 0 then computation fails.\n\u003c/p\u003e",
          "module": "Data.Number.Ball",
          "name": "sqrt",
          "package": "HERA",
          "signature": "Precision -\u003e Ball -\u003e m Ball",
          "source": "src/Data-Number-Ball.html#sqrt",
          "type": "function"
        },
        "index": {
          "description": "Square root of ball If interval contains then computation fails",
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "sqrt",
          "normalized": "Precision-\u003eBall-\u003ea Ball",
          "package": "HERA",
          "signature": "Precision-\u003eBall-\u003em Ball",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:sqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtraction of two balls.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e center = center a - center b\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e radius = radius a + radius b\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eRounding errors are added to the radius.\n\u003c/p\u003e",
          "module": "Data.Number.Ball",
          "name": "sub",
          "package": "HERA",
          "signature": "Precision -\u003e Ball -\u003e Ball -\u003e Ball",
          "source": "src/Data-Number-Ball.html#sub",
          "type": "function"
        },
        "index": {
          "description": "Subtraction of two balls center center center radius radius radius Rounding errors are added to the radius",
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "sub",
          "normalized": "Precision-\u003eBall-\u003eBall-\u003eBall",
          "package": "HERA",
          "signature": "Precision-\u003eBall-\u003eBall-\u003eBall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpper endpoint of the ball rounded up to specified precision.\n\u003c/p\u003e",
          "module": "Data.Number.Ball",
          "name": "upper",
          "package": "HERA",
          "signature": "Precision -\u003e Ball -\u003e Dyadic",
          "source": "src/Data-Number-Ball.html#upper",
          "type": "function"
        },
        "index": {
          "description": "Upper endpoint of the ball rounded up to specified precision",
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "upper",
          "normalized": "Precision-\u003eBall-\u003eDyadic",
          "package": "HERA",
          "signature": "Precision-\u003eBall-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:upper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpper endpoint with precision of the center\n\u003c/p\u003e",
          "module": "Data.Number.Ball",
          "name": "upper_",
          "package": "HERA",
          "signature": "Ball -\u003e Dyadic",
          "source": "src/Data-Number-Ball.html#upper_",
          "type": "function"
        },
        "index": {
          "description": "Upper endpoint with precision of the center",
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "upper_",
          "normalized": "Ball-\u003eDyadic",
          "package": "HERA",
          "signature": "Ball-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:upper_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpper bound on the width of the ball. \u003ccode\u003e 2 * radius b \u003c/code\u003e rounded up.\n\u003c/p\u003e",
          "module": "Data.Number.Ball",
          "name": "width",
          "package": "HERA",
          "signature": "Ball -\u003e Dyadic",
          "source": "src/Data-Number-Ball.html#width",
          "type": "function"
        },
        "index": {
          "description": "Upper bound on the width of the ball radius rounded up",
          "hierarchy": "Data Number Ball",
          "module": "Data.Number.Ball",
          "name": "width",
          "normalized": "Ball-\u003eDyadic",
          "package": "HERA",
          "signature": "Ball-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Ball.html#v:width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Dyadic",
          "name": "Dyadic",
          "package": "HERA",
          "source": "src/Data-Number-Dyadic.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Number Dyadic",
          "module": "Data.Number.Dyadic",
          "name": "Dyadic",
          "package": "HERA",
          "partial": "Dyadic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Dyadic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Dyadic",
          "name": "pow2",
          "package": "HERA",
          "signature": "Int -\u003e Dyadic",
          "source": "src/Data-Number-Dyadic.html#pow2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number Dyadic",
          "module": "Data.Number.Dyadic",
          "name": "pow2",
          "normalized": "Int-\u003eDyadic",
          "package": "HERA",
          "signature": "Int-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Dyadic.html#v:pow2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.DyadicInterval",
          "name": "DyadicInterval",
          "package": "HERA",
          "source": "src/Data-Number-DyadicInterval.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "DyadicInterval",
          "package": "HERA",
          "partial": "Dyadic Interval",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper around Ball allowing the results of operations like division\n by interval containing zero to be represented and do not cause errors.\n\u003c/p\u003e\u003cp\u003eNothing represents undefined interval.\n\u003c/p\u003e",
          "module": "Data.Number.DyadicInterval",
          "name": "Interval",
          "package": "HERA",
          "source": "src/Data-Number-DyadicInterval.html#Interval",
          "type": "type"
        },
        "index": {
          "description": "wrapper around Ball allowing the results of operations like division by interval containing zero to be represented and do not cause errors Nothing represents undefined interval",
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "Interval",
          "package": "HERA",
          "partial": "Interval",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#t:Interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAddition. If one of the arguments is _|_, so is the result.\n\u003c/p\u003e",
          "module": "Data.Number.DyadicInterval",
          "name": "add",
          "package": "HERA",
          "signature": "Precision -\u003e Interval -\u003e Interval -\u003e Interval",
          "source": "src/Data-Number-DyadicInterval.html#add",
          "type": "function"
        },
        "index": {
          "description": "Addition If one of the arguments is so is the result",
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "add",
          "normalized": "Precision-\u003eInterval-\u003eInterval-\u003eInterval",
          "package": "HERA",
          "signature": "Precision-\u003eInterval-\u003eInterval-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if second interval is inside the first. _|_ is above all.\n\u003c/p\u003e",
          "module": "Data.Number.DyadicInterval",
          "name": "below",
          "package": "HERA",
          "signature": "Interval -\u003e Interval -\u003e Bool",
          "source": "src/Data-Number-DyadicInterval.html#below",
          "type": "function"
        },
        "index": {
          "description": "Checks if second interval is inside the first is above all",
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "below",
          "normalized": "Interval-\u003eInterval-\u003eBool",
          "package": "HERA",
          "signature": "Interval-\u003eInterval-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#v:below"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCenter of interval. Center on _|_ will result in fail.\n\u003c/p\u003e",
          "module": "Data.Number.DyadicInterval",
          "name": "center",
          "package": "HERA",
          "signature": "Interval -\u003e m Dyadic",
          "source": "src/Data-Number-DyadicInterval.html#center",
          "type": "function"
        },
        "index": {
          "description": "Center of interval Center on will result in fail",
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "center",
          "normalized": "Interval-\u003ea Dyadic",
          "package": "HERA",
          "signature": "Interval-\u003em Dyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#v:center"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare two intervals. If one of them is _|_ the result is incomparable, \n otherwise result is comparison of balls.\n\u003c/p\u003e",
          "module": "Data.Number.DyadicInterval",
          "name": "compareI",
          "package": "HERA",
          "signature": "Interval -\u003e Interval -\u003e POrdering",
          "source": "src/Data-Number-DyadicInterval.html#compareI",
          "type": "function"
        },
        "index": {
          "description": "Compare two intervals If one of them is the result is incomparable otherwise result is comparison of balls",
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "compareI",
          "normalized": "Interval-\u003eInterval-\u003ePOrdering",
          "package": "HERA",
          "signature": "Interval-\u003eInterval-\u003ePOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#v:compareI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks if interval contains dyadic. _|_ contains everything.\n\u003c/p\u003e",
          "module": "Data.Number.DyadicInterval",
          "name": "contains",
          "package": "HERA",
          "signature": "Interval -\u003e Dyadic -\u003e Bool",
          "source": "src/Data-Number-DyadicInterval.html#contains",
          "type": "function"
        },
        "index": {
          "description": "Checks if interval contains dyadic contains everything",
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "contains",
          "normalized": "Interval-\u003eDyadic-\u003eBool",
          "package": "HERA",
          "signature": "Interval-\u003eDyadic-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#v:contains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivision. If one of the arguments is _|_ or divisor contains 0 then result is _|_.\n\u003c/p\u003e",
          "module": "Data.Number.DyadicInterval",
          "name": "div",
          "package": "HERA",
          "signature": "Precision -\u003e Interval -\u003e Interval -\u003e Interval",
          "source": "src/Data-Number-DyadicInterval.html#div",
          "type": "function"
        },
        "index": {
          "description": "Division If one of the arguments is or divisor contains then result is",
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "div",
          "normalized": "Precision-\u003eInterval-\u003eInterval-\u003eInterval",
          "package": "HERA",
          "signature": "Precision-\u003eInterval-\u003eInterval-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#v:div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e e ^ i \u003c/code\u003e If argument is _|_ so is the result.\n\u003c/p\u003e",
          "module": "Data.Number.DyadicInterval",
          "name": "exp",
          "package": "HERA",
          "signature": "Precision -\u003e Interval -\u003e Interval",
          "source": "src/Data-Number-DyadicInterval.html#exp",
          "type": "function"
        },
        "index": {
          "description": "If argument is so is the result",
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "exp",
          "normalized": "Precision-\u003eInterval-\u003eInterval",
          "package": "HERA",
          "signature": "Precision-\u003eInterval-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#v:exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust make an interval from a ball.\n\u003c/p\u003e",
          "module": "Data.Number.DyadicInterval",
          "name": "fromBall",
          "package": "HERA",
          "signature": "Ball -\u003e Interval",
          "source": "src/Data-Number-DyadicInterval.html#fromBall",
          "type": "function"
        },
        "index": {
          "description": "Just make an interval from ball",
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "fromBall",
          "normalized": "Ball-\u003eInterval",
          "package": "HERA",
          "partial": "Ball",
          "signature": "Ball-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#v:fromBall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake an interval from a ball and normalize it to specified precision.\n\u003c/p\u003e",
          "module": "Data.Number.DyadicInterval",
          "name": "fromBallA",
          "package": "HERA",
          "signature": "Precision -\u003e Ball -\u003e Interval",
          "source": "src/Data-Number-DyadicInterval.html#fromBallA",
          "type": "function"
        },
        "index": {
          "description": "Make an interval from ball and normalize it to specified precision",
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "fromBallA",
          "normalized": "Precision-\u003eBall-\u003eInterval",
          "package": "HERA",
          "partial": "Ball",
          "signature": "Precision-\u003eBall-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#v:fromBallA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.DyadicInterval",
          "name": "fromDyadic",
          "package": "HERA",
          "signature": "Precision -\u003e Dyadic -\u003e Interval",
          "source": "src/Data-Number-DyadicInterval.html#fromDyadic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "fromDyadic",
          "normalized": "Precision-\u003eDyadic-\u003eInterval",
          "package": "HERA",
          "partial": "Dyadic",
          "signature": "Precision-\u003eDyadic-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#v:fromDyadic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.DyadicInterval",
          "name": "fromInt",
          "package": "HERA",
          "signature": "Precision -\u003e Int -\u003e Interval",
          "source": "src/Data-Number-DyadicInterval.html#fromInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "fromInt",
          "normalized": "Precision-\u003eInt-\u003eInterval",
          "package": "HERA",
          "partial": "Int",
          "signature": "Precision-\u003eInt-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#v:fromInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.DyadicInterval",
          "name": "fromString",
          "package": "HERA",
          "signature": "Precision -\u003e String -\u003e Interval",
          "source": "src/Data-Number-DyadicInterval.html#fromString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "fromString",
          "normalized": "Precision-\u003eString-\u003eInterval",
          "package": "HERA",
          "partial": "String",
          "signature": "Precision-\u003eString-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.DyadicInterval",
          "name": "fromWord",
          "package": "HERA",
          "signature": "Precision -\u003e Word -\u003e Interval",
          "source": "src/Data-Number-DyadicInterval.html#fromWord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "fromWord",
          "normalized": "Precision-\u003eWord-\u003eInterval",
          "package": "HERA",
          "partial": "Word",
          "signature": "Precision-\u003eWord-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#v:fromWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns Below if second interval is inside first, Above if converse, NoInclusion otherwise.\n\u003c/p\u003e",
          "module": "Data.Number.DyadicInterval",
          "name": "includes",
          "package": "HERA",
          "signature": "Interval -\u003e Interval -\u003e Inclusion",
          "source": "src/Data-Number-DyadicInterval.html#includes",
          "type": "function"
        },
        "index": {
          "description": "Returns Below if second interval is inside first Above if converse NoInclusion otherwise",
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "includes",
          "normalized": "Interval-\u003eInterval-\u003eInclusion",
          "package": "HERA",
          "signature": "Interval-\u003eInterval-\u003eInclusion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#v:includes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the intersection of two intervals so that no precision is lost.\n\u003c/p\u003e",
          "module": "Data.Number.DyadicInterval",
          "name": "intersect",
          "package": "HERA",
          "signature": "Interval -\u003e Interval -\u003e Interval",
          "source": "src/Data-Number-DyadicInterval.html#intersect",
          "type": "function"
        },
        "index": {
          "description": "Return the intersection of two intervals so that no precision is lost",
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "intersect",
          "normalized": "Interval-\u003eInterval-\u003eInterval",
          "package": "HERA",
          "signature": "Interval-\u003eInterval-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#v:intersect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the intersection of two intervals. The resulting interval's center has specified precision.\n\u003c/p\u003e\u003cp\u003eIf one of the intervals is _|_ then just return the other (even if it is _|_).\n\u003c/p\u003e",
          "module": "Data.Number.DyadicInterval",
          "name": "intersectA",
          "package": "HERA",
          "signature": "Precision -\u003e Interval -\u003e Interval -\u003e Interval",
          "source": "src/Data-Number-DyadicInterval.html#intersectA",
          "type": "function"
        },
        "index": {
          "description": "Return the intersection of two intervals The resulting interval center has specified precision If one of the intervals is then just return the other even if it is",
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "intersectA",
          "normalized": "Precision-\u003eInterval-\u003eInterval-\u003eInterval",
          "package": "HERA",
          "signature": "Precision-\u003eInterval-\u003eInterval-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#v:intersectA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNatural logarithm. If one argument is _|_ or interval contains 0 then result is _|_.\n\u003c/p\u003e",
          "module": "Data.Number.DyadicInterval",
          "name": "log",
          "package": "HERA",
          "signature": "Precision -\u003e Interval -\u003e Interval",
          "source": "src/Data-Number-DyadicInterval.html#log",
          "type": "function"
        },
        "index": {
          "description": "Natural logarithm If one argument is or interval contains then result is",
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "log",
          "normalized": "Precision-\u003eInterval-\u003eInterval",
          "package": "HERA",
          "signature": "Precision-\u003eInterval-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#v:log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLower endpoint of interval with precision of the center. \n Lower on _|_ will result in fail.\n\u003c/p\u003e",
          "module": "Data.Number.DyadicInterval",
          "name": "lower",
          "package": "HERA",
          "signature": "Interval -\u003e m Dyadic",
          "source": "src/Data-Number-DyadicInterval.html#lower",
          "type": "function"
        },
        "index": {
          "description": "Lower endpoint of interval with precision of the center Lower on will result in fail",
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "lower",
          "normalized": "Interval-\u003ea Dyadic",
          "package": "HERA",
          "signature": "Interval-\u003em Dyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#v:lower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake an interval from two endpoints so that no precision is lost.\n\u003c/p\u003e",
          "module": "Data.Number.DyadicInterval",
          "name": "make",
          "package": "HERA",
          "signature": "Dyadic -\u003e Dyadic -\u003e Interval",
          "source": "src/Data-Number-DyadicInterval.html#make",
          "type": "function"
        },
        "index": {
          "description": "Make an interval from two endpoints so that no precision is lost",
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "make",
          "normalized": "Dyadic-\u003eDyadic-\u003eInterval",
          "package": "HERA",
          "signature": "Dyadic-\u003eDyadic-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#v:make"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake an interval from two endpoints.\n\u003c/p\u003e",
          "module": "Data.Number.DyadicInterval",
          "name": "makeA",
          "package": "HERA",
          "signature": "Precision-\u003e Dyadic-\u003e Dyadic-\u003e Interval",
          "type": "function"
        },
        "index": {
          "description": "Make an interval from two endpoints",
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "makeA",
          "normalized": "Precision-\u003eDyadic-\u003eDyadic-\u003eInterval",
          "package": "HERA",
          "signature": "Precision-\u003eDyadic-\u003eDyadic-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#v:makeA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum of intervals. If one interval is _|_ so is the result.\n\u003c/p\u003e",
          "module": "Data.Number.DyadicInterval",
          "name": "maxI",
          "package": "HERA",
          "signature": "Precision -\u003e Interval -\u003e Interval -\u003e Interval",
          "source": "src/Data-Number-DyadicInterval.html#maxI",
          "type": "function"
        },
        "index": {
          "description": "Maximum of intervals If one interval is so is the result",
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "maxI",
          "normalized": "Precision-\u003eInterval-\u003eInterval-\u003eInterval",
          "package": "HERA",
          "signature": "Precision-\u003eInterval-\u003eInterval-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#v:maxI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to maxI.\n\u003c/p\u003e",
          "module": "Data.Number.DyadicInterval",
          "name": "minI",
          "package": "HERA",
          "signature": "Precision -\u003e Interval -\u003e Interval -\u003e Interval",
          "source": "src/Data-Number-DyadicInterval.html#minI",
          "type": "function"
        },
        "index": {
          "description": "Similar to maxI",
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "minI",
          "normalized": "Precision-\u003eInterval-\u003eInterval-\u003eInterval",
          "package": "HERA",
          "signature": "Precision-\u003eInterval-\u003eInterval-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#v:minI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiplication. If one of the arguments is _|_, so is the result\n\u003c/p\u003e",
          "module": "Data.Number.DyadicInterval",
          "name": "mul",
          "package": "HERA",
          "signature": "Precision -\u003e Interval -\u003e Interval -\u003e Interval",
          "source": "src/Data-Number-DyadicInterval.html#mul",
          "type": "function"
        },
        "index": {
          "description": "Multiplication If one of the arguments is so is the result",
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "mul",
          "normalized": "Precision-\u003eInterval-\u003eInterval-\u003eInterval",
          "package": "HERA",
          "signature": "Precision-\u003eInterval-\u003eInterval-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#v:mul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegate the interval. neg _|_ = _|_.\n\u003c/p\u003e",
          "module": "Data.Number.DyadicInterval",
          "name": "neg",
          "package": "HERA",
          "signature": "Precision -\u003e Interval -\u003e Interval",
          "source": "src/Data-Number-DyadicInterval.html#neg",
          "type": "function"
        },
        "index": {
          "description": "Negate the interval neg",
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "neg",
          "normalized": "Precision-\u003eInterval-\u003eInterval",
          "package": "HERA",
          "signature": "Precision-\u003eInterval-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#v:neg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRadius of interval. Radius on _|_ will result in fail.\n\u003c/p\u003e",
          "module": "Data.Number.DyadicInterval",
          "name": "radius",
          "package": "HERA",
          "signature": "Interval -\u003e m Dyadic",
          "source": "src/Data-Number-DyadicInterval.html#radius",
          "type": "function"
        },
        "index": {
          "description": "Radius of interval Radius on will result in fail",
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "radius",
          "normalized": "Interval-\u003ea Dyadic",
          "package": "HERA",
          "signature": "Interval-\u003em Dyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#v:radius"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSquare root. If one argument is _|_ or interval contains 0 then result is _|_.\n\u003c/p\u003e",
          "module": "Data.Number.DyadicInterval",
          "name": "sqrt",
          "package": "HERA",
          "signature": "Precision -\u003e Interval -\u003e Interval",
          "source": "src/Data-Number-DyadicInterval.html#sqrt",
          "type": "function"
        },
        "index": {
          "description": "Square root If one argument is or interval contains then result is",
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "sqrt",
          "normalized": "Precision-\u003eInterval-\u003eInterval",
          "package": "HERA",
          "signature": "Precision-\u003eInterval-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#v:sqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtraction. If one of the arguments is _|_, so is the result\n\u003c/p\u003e",
          "module": "Data.Number.DyadicInterval",
          "name": "sub",
          "package": "HERA",
          "signature": "Precision -\u003e Interval -\u003e Interval -\u003e Interval",
          "source": "src/Data-Number-DyadicInterval.html#sub",
          "type": "function"
        },
        "index": {
          "description": "Subtraction If one of the arguments is so is the result",
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "sub",
          "normalized": "Precision-\u003eInterval-\u003eInterval-\u003eInterval",
          "package": "HERA",
          "signature": "Precision-\u003eInterval-\u003eInterval-\u003eInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#v:sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.DyadicInterval",
          "name": "toString",
          "package": "HERA",
          "signature": "Interval -\u003e String",
          "source": "src/Data-Number-DyadicInterval.html#toString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "toString",
          "normalized": "Interval-\u003eString",
          "package": "HERA",
          "partial": "String",
          "signature": "Interval-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpper endpoint of interval with precision of the center. \n Upper on _|_ will result in fail.\n\u003c/p\u003e",
          "module": "Data.Number.DyadicInterval",
          "name": "upper",
          "package": "HERA",
          "signature": "Interval -\u003e m Dyadic",
          "source": "src/Data-Number-DyadicInterval.html#upper",
          "type": "function"
        },
        "index": {
          "description": "Upper endpoint of interval with precision of the center Upper on will result in fail",
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "upper",
          "normalized": "Interval-\u003ea Dyadic",
          "package": "HERA",
          "signature": "Interval-\u003em Dyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#v:upper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWidth of the interval. Widht on _|_ will result in fail.\n\u003c/p\u003e",
          "module": "Data.Number.DyadicInterval",
          "name": "width",
          "package": "HERA",
          "signature": "Interval -\u003e m Dyadic",
          "source": "src/Data-Number-DyadicInterval.html#width",
          "type": "function"
        },
        "index": {
          "description": "Width of the interval Widht on will result in fail",
          "hierarchy": "Data Number DyadicInterval",
          "module": "Data.Number.DyadicInterval",
          "name": "width",
          "normalized": "Interval-\u003ea Dyadic",
          "package": "HERA",
          "signature": "Interval-\u003em Dyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-DyadicInterval.html#v:width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "MPFR",
          "package": "HERA",
          "source": "src/Data-Number-MPFR.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "MPFR",
          "package": "HERA",
          "partial": "MPFR",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "Dyadic",
          "package": "HERA",
          "source": "src/Data-Number-MPFR.html#Dyadic",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "Dyadic",
          "package": "HERA",
          "partial": "Dyadic",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#t:Dyadic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "Precision",
          "package": "HERA",
          "source": "src/Data-Number-MPFR.html#Precision",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "Precision",
          "package": "HERA",
          "partial": "Precision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#t:Precision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "RoundMode",
          "package": "HERA",
          "source": "src/Data-Number-FFIhelper.html#RoundMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "RoundMode",
          "package": "HERA",
          "partial": "Round Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#t:RoundMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "Down",
          "package": "HERA",
          "signature": "Down",
          "source": "src/Data-Number-FFIhelper.html#RoundMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "Down",
          "package": "HERA",
          "partial": "Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:Down"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "Near",
          "package": "HERA",
          "signature": "Near",
          "source": "src/Data-Number-FFIhelper.html#RoundMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "Near",
          "package": "HERA",
          "partial": "Near",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:Near"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "Up",
          "package": "HERA",
          "signature": "Up",
          "source": "src/Data-Number-FFIhelper.html#RoundMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "Up",
          "package": "HERA",
          "partial": "Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:Up"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "Zero",
          "package": "HERA",
          "signature": "Zero",
          "source": "src/Data-Number-FFIhelper.html#RoundMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "Zero",
          "package": "HERA",
          "partial": "Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:Zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "absD",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#absD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "absD",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:absD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "absD_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#absD_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "absD_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:absD_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "add",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#add",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "add",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "addPrec",
          "package": "HERA",
          "signature": "Dyadic -\u003e Dyadic -\u003e Precision",
          "source": "src/Data-Number-MPFR.html#addPrec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "addPrec",
          "normalized": "Dyadic-\u003eDyadic-\u003ePrecision",
          "package": "HERA",
          "partial": "Prec",
          "signature": "Dyadic-\u003eDyadic-\u003ePrecision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:addPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "add_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#add_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "add_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:add_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "addi",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Int -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#addi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "addi",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eInt-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eInt-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:addi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "addi_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Int -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#addi_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "addi_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eInt-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eInt-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:addi_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "addw",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Word -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#addw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "addw",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:addw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "addw_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Word -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#addw_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "addw_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:addw_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "catalan",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#catalan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "catalan",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:catalan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "catalan_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#catalan_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "catalan_",
          "normalized": "RoundMode-\u003ePrecision-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:catalan_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "compose",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e (Integer, Int) -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#compose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "compose",
          "normalized": "RoundMode-\u003ePrecision-\u003e(Integer,Int)-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003e(Integer,Int)-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:compose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "cosh",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#cosh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "cosh",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:cosh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "cosh_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#cosh_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "cosh_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:cosh_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "decompose",
          "package": "HERA",
          "signature": "Dyadic -\u003e (Integer, Int)",
          "source": "src/Data-Number-MPFR.html#decompose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "decompose",
          "normalized": "Dyadic-\u003e(Integer,Int)",
          "package": "HERA",
          "signature": "Dyadic-\u003e(Integer,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:decompose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "dim",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#dim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "dim",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:dim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "dim_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#dim_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "dim_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:dim_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "div",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#div",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "div",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "div2i",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Int -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#div2i",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "div2i",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eInt-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eInt-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:div2i"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "div2i_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Int -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#div2i_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "div2i_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eInt-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eInt-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:div2i_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "div2w",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Word -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#div2w",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "div2w",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:div2w"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "div2w_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Word -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#div2w_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "div2w_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:div2w_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "div_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#div_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "div_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:div_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "divi",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Int -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#divi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "divi",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eInt-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eInt-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:divi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "divi_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Int -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#divi_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "divi_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eInt-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eInt-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:divi_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "divw",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Word -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#divw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "divw",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:divw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "divw_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Word -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#divw_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "divw_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:divw_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "dyadicToDouble",
          "package": "HERA",
          "signature": "RoundMode -\u003e Dyadic -\u003e Double",
          "source": "src/Data-Number-MPFR.html#dyadicToDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "dyadicToDouble",
          "normalized": "RoundMode-\u003eDyadic-\u003eDouble",
          "package": "HERA",
          "partial": "To Double",
          "signature": "RoundMode-\u003eDyadic-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:dyadicToDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "dyadicToInt",
          "package": "HERA",
          "signature": "RoundMode -\u003e Dyadic -\u003e Int",
          "source": "src/Data-Number-MPFR.html#dyadicToInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "dyadicToInt",
          "normalized": "RoundMode-\u003eDyadic-\u003eInt",
          "package": "HERA",
          "partial": "To Int",
          "signature": "RoundMode-\u003eDyadic-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:dyadicToInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "dyadicToString",
          "package": "HERA",
          "signature": "RoundMode-\u003e Word-\u003e Word-\u003e Dyadic-\u003e (String, Int)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "dyadicToString",
          "normalized": "RoundMode-\u003eWord-\u003eWord-\u003eDyadic-\u003e(String,Int)",
          "package": "HERA",
          "partial": "To String",
          "signature": "RoundMode-\u003eWord-\u003eWord-\u003eDyadic-\u003e(String,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:dyadicToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "dyadicToWord",
          "package": "HERA",
          "signature": "RoundMode -\u003e Dyadic -\u003e Word",
          "source": "src/Data-Number-MPFR.html#dyadicToWord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "dyadicToWord",
          "normalized": "RoundMode-\u003eDyadic-\u003eWord",
          "package": "HERA",
          "partial": "To Word",
          "signature": "RoundMode-\u003eDyadic-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:dyadicToWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "equal",
          "package": "HERA",
          "signature": "Dyadic -\u003e Dyadic -\u003e Bool",
          "source": "src/Data-Number-MPFR.html#equal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "equal",
          "normalized": "Dyadic-\u003eDyadic-\u003eBool",
          "package": "HERA",
          "signature": "Dyadic-\u003eDyadic-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:equal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "euler",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#euler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "euler",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:euler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "euler_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#euler_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "euler_",
          "normalized": "RoundMode-\u003ePrecision-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:euler_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "exp",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "exp",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "exp10",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#exp10",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "exp10",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:exp10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "exp10_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#exp10_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "exp10_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:exp10_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "exp2",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#exp2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "exp2",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:exp2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "exp2_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#exp2_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "exp2_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:exp2_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "exp_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#exp_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "exp_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:exp_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "fma",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic -\u003e Dyadic -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#fma",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "fma",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003eDyadic-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003eDyadic-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:fma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "fma_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic -\u003e Dyadic -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#fma_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "fma_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003eDyadic-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003eDyadic-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:fma_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "fms",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic -\u003e Dyadic -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#fms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "fms",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003eDyadic-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003eDyadic-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:fms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "fms_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic -\u003e Dyadic -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#fms_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "fms_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003eDyadic-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003eDyadic-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:fms_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "fromDouble",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Double -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#fromDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "fromDouble",
          "normalized": "RoundMode-\u003ePrecision-\u003eDouble-\u003eDyadic",
          "package": "HERA",
          "partial": "Double",
          "signature": "RoundMode-\u003ePrecision-\u003eDouble-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:fromDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "fromDouble_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Double -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#fromDouble_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "fromDouble_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDouble-\u003e(Dyadic,Int)",
          "package": "HERA",
          "partial": "Double",
          "signature": "RoundMode-\u003ePrecision-\u003eDouble-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:fromDouble_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "fromInt",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Int -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#fromInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "fromInt",
          "normalized": "RoundMode-\u003ePrecision-\u003eInt-\u003eDyadic",
          "package": "HERA",
          "partial": "Int",
          "signature": "RoundMode-\u003ePrecision-\u003eInt-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:fromInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "fromInt_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Int -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#fromInt_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "fromInt_",
          "normalized": "RoundMode-\u003ePrecision-\u003eInt-\u003e(Dyadic,Int)",
          "package": "HERA",
          "partial": "Int",
          "signature": "RoundMode-\u003ePrecision-\u003eInt-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:fromInt_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "fromIntegerA",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Integer -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#fromIntegerA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "fromIntegerA",
          "normalized": "RoundMode-\u003ePrecision-\u003eInteger-\u003eDyadic",
          "package": "HERA",
          "partial": "Integer",
          "signature": "RoundMode-\u003ePrecision-\u003eInteger-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:fromIntegerA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "fromString",
          "package": "HERA",
          "signature": "String -\u003e Precision -\u003e Word -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#fromString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "fromString",
          "normalized": "String-\u003ePrecision-\u003eWord-\u003eDyadic",
          "package": "HERA",
          "partial": "String",
          "signature": "String-\u003ePrecision-\u003eWord-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "fromWord",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Word -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#fromWord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "fromWord",
          "normalized": "RoundMode-\u003ePrecision-\u003eWord-\u003eDyadic",
          "package": "HERA",
          "partial": "Word",
          "signature": "RoundMode-\u003ePrecision-\u003eWord-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:fromWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "fromWord_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Word -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#fromWord_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "fromWord_",
          "normalized": "RoundMode-\u003ePrecision-\u003eWord-\u003e(Dyadic,Int)",
          "package": "HERA",
          "partial": "Word",
          "signature": "RoundMode-\u003ePrecision-\u003eWord-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:fromWord_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "getExp",
          "package": "HERA",
          "signature": "Dyadic -\u003e Int",
          "source": "src/Data-Number-MPFR.html#getExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "getExp",
          "normalized": "Dyadic-\u003eInt",
          "package": "HERA",
          "partial": "Exp",
          "signature": "Dyadic-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:getExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egetMantissa and getExp return values such that\n\u003c/p\u003e\u003cpre\u003e d = getMantissa d * 2^(getExp d - ceiling ((getPrec d) / bitsPerMPLimb)* bitsPerMPLimb )\n\u003c/pre\u003e",
          "module": "Data.Number.MPFR",
          "name": "getMantissa",
          "package": "HERA",
          "signature": "Dyadic -\u003e Integer",
          "source": "src/Data-Number-MPFR.html#getMantissa",
          "type": "function"
        },
        "index": {
          "description": "getMantissa and getExp return values such that getMantissa getExp ceiling getPrec bitsPerMPLimb bitsPerMPLimb",
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "getMantissa",
          "normalized": "Dyadic-\u003eInteger",
          "package": "HERA",
          "partial": "Mantissa",
          "signature": "Dyadic-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:getMantissa"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "getPrec",
          "package": "HERA",
          "signature": "Dyadic -\u003e Precision",
          "source": "src/Data-Number-MPFR.html#getPrec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "getPrec",
          "normalized": "Dyadic-\u003ePrecision",
          "package": "HERA",
          "partial": "Prec",
          "signature": "Dyadic-\u003ePrecision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:getPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "greater",
          "package": "HERA",
          "signature": "Dyadic -\u003e Dyadic -\u003e Bool",
          "source": "src/Data-Number-MPFR.html#greater",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "greater",
          "normalized": "Dyadic-\u003eDyadic-\u003eBool",
          "package": "HERA",
          "signature": "Dyadic-\u003eDyadic-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:greater"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "greatereq",
          "package": "HERA",
          "signature": "Dyadic -\u003e Dyadic -\u003e Bool",
          "source": "src/Data-Number-MPFR.html#greatereq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "greatereq",
          "normalized": "Dyadic-\u003eDyadic-\u003eBool",
          "package": "HERA",
          "signature": "Dyadic-\u003eDyadic-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:greatereq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "idiv",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Int -\u003e Dyadic -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#idiv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "idiv",
          "normalized": "RoundMode-\u003ePrecision-\u003eInt-\u003eDyadic-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eInt-\u003eDyadic-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:idiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "idiv_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Int -\u003e Dyadic -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#idiv_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "idiv_",
          "normalized": "RoundMode-\u003ePrecision-\u003eInt-\u003eDyadic-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eInt-\u003eDyadic-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:idiv_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "int2i",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Int -\u003e Int -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#int2i",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "int2i",
          "normalized": "RoundMode-\u003ePrecision-\u003eInt-\u003eInt-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eInt-\u003eInt-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:int2i"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "int2i_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Int -\u003e Int -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#int2i_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "int2i_",
          "normalized": "RoundMode-\u003ePrecision-\u003eInt-\u003eInt-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eInt-\u003eInt-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:int2i_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "int2w",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Word -\u003e Int -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#int2w",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "int2w",
          "normalized": "RoundMode-\u003ePrecision-\u003eWord-\u003eInt-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eWord-\u003eInt-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:int2w"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "int2w_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Word -\u003e Int -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#int2w_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "int2w_",
          "normalized": "RoundMode-\u003ePrecision-\u003eWord-\u003eInt-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eWord-\u003eInt-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:int2w_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "inverse",
          "package": "HERA",
          "signature": "Dyadic -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#inverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "inverse",
          "normalized": "Dyadic-\u003eDyadic",
          "package": "HERA",
          "signature": "Dyadic-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:inverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "isInfinite",
          "package": "HERA",
          "signature": "Dyadic -\u003e Bool",
          "source": "src/Data-Number-MPFR.html#isInfinite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "isInfinite",
          "normalized": "Dyadic-\u003eBool",
          "package": "HERA",
          "partial": "Infinite",
          "signature": "Dyadic-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:isInfinite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "isNaN",
          "package": "HERA",
          "signature": "Dyadic -\u003e Bool",
          "source": "src/Data-Number-MPFR.html#isNaN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "isNaN",
          "normalized": "Dyadic-\u003eBool",
          "package": "HERA",
          "partial": "Na",
          "signature": "Dyadic-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:isNaN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "isNumber",
          "package": "HERA",
          "signature": "Dyadic -\u003e Bool",
          "source": "src/Data-Number-MPFR.html#isNumber",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "isNumber",
          "normalized": "Dyadic-\u003eBool",
          "package": "HERA",
          "partial": "Number",
          "signature": "Dyadic-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:isNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "isZero",
          "package": "HERA",
          "signature": "Dyadic -\u003e Bool",
          "source": "src/Data-Number-MPFR.html#isZero",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "isZero",
          "normalized": "Dyadic-\u003eBool",
          "package": "HERA",
          "partial": "Zero",
          "signature": "Dyadic-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:isZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "isub",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Int -\u003e Dyadic -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#isub",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "isub",
          "normalized": "RoundMode-\u003ePrecision-\u003eInt-\u003eDyadic-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eInt-\u003eDyadic-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:isub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "isub_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Int -\u003e Dyadic -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#isub_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "isub_",
          "normalized": "RoundMode-\u003ePrecision-\u003eInt-\u003eDyadic-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eInt-\u003eDyadic-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:isub_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "less",
          "package": "HERA",
          "signature": "Dyadic -\u003e Dyadic -\u003e Bool",
          "source": "src/Data-Number-MPFR.html#less",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "less",
          "normalized": "Dyadic-\u003eDyadic-\u003eBool",
          "package": "HERA",
          "signature": "Dyadic-\u003eDyadic-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:less"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "lesseq",
          "package": "HERA",
          "signature": "Dyadic -\u003e Dyadic -\u003e Bool",
          "source": "src/Data-Number-MPFR.html#lesseq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "lesseq",
          "normalized": "Dyadic-\u003eDyadic-\u003eBool",
          "package": "HERA",
          "signature": "Dyadic-\u003eDyadic-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:lesseq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "log",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#log",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "log",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "log10",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#log10",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "log10",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:log10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "log10_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#log10_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "log10_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:log10_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "log2",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#log2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "log2",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:log2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "log2_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#log2_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "log2_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:log2_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "log2c",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#log2c",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "log2c",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:log2c"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "log2c_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#log2c_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "log2c_",
          "normalized": "RoundMode-\u003ePrecision-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:log2c_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "log_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#log_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "log_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:log_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "maxD",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#maxD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "maxD",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:maxD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "maxD_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#maxD_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "maxD_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:maxD_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "minD",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#minD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "minD",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:minD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "minD_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#minD_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "minD_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:minD_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "minPrec",
          "package": "HERA",
          "signature": "Precision",
          "source": "src/Data-Number-MPFR.html#minPrec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "minPrec",
          "package": "HERA",
          "partial": "Prec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:minPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "mul",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#mul",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "mul",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:mul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "mul2i",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Int -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#mul2i",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "mul2i",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eInt-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eInt-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:mul2i"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "mul2i_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Int -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#mul2i_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "mul2i_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eInt-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eInt-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:mul2i_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "mul2w",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Word -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#mul2w",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "mul2w",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:mul2w"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "mul2w_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Word -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#mul2w_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "mul2w_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:mul2w_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "mul_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#mul_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "mul_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:mul_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "muli",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Int -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#muli",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "muli",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eInt-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eInt-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:muli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "muli_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Int -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#muli_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "muli_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eInt-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eInt-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:muli_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "mulw",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Word -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#mulw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "mulw",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:mulw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "mulw_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Word -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#mulw_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "mulw_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:mulw_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "neg",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#neg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "neg",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:neg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "neg_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#neg_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "neg_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:neg_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "nextBelow",
          "package": "HERA",
          "signature": "Dyadic -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#nextBelow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "nextBelow",
          "normalized": "Dyadic-\u003eDyadic",
          "package": "HERA",
          "partial": "Below",
          "signature": "Dyadic-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:nextBelow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "one",
          "package": "HERA",
          "signature": "Dyadic",
          "source": "src/Data-Number-MPFR.html#one",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "one",
          "package": "HERA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:one"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "pi",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#pi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "pi",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:pi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "pi_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#pi_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "pi_",
          "normalized": "RoundMode-\u003ePrecision-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:pi_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "pow",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#pow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "pow",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:pow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "pow_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#pow_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "pow_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:pow_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "powi",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Int -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#powi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "powi",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eInt-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eInt-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:powi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "powi_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Int -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#powi_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "powi_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eInt-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eInt-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:powi_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "poww",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Word -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#poww",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "poww",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:poww"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "poww_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Word -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#poww_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "poww_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:poww_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "root",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Word -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#root",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "root",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:root"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "root_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Word -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#root_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "root_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:root_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "set",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#set",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "set",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "set_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#set_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "set_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:set_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "sgn",
          "package": "HERA",
          "signature": "Dyadic -\u003e Int",
          "source": "src/Data-Number-MPFR.html#sgn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "sgn",
          "normalized": "Dyadic-\u003eInt",
          "package": "HERA",
          "signature": "Dyadic-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:sgn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "sinh",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#sinh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "sinh",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:sinh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "sinh_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#sinh_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "sinh_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:sinh_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "sqr",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#sqr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "sqr",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:sqr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "sqr_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#sqr_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "sqr_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:sqr_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "sqrt",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#sqrt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "sqrt",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:sqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "sqrt_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#sqrt_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "sqrt_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:sqrt_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "sub",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#sub",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "sub",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "sub_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#sub_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "sub_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:sub_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "subi",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Int -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#subi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "subi",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eInt-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eInt-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:subi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "subi_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Int -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#subi_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "subi_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eInt-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eInt-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:subi_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "subw",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Word -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#subw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "subw",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:subw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "subw_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Word -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#subw_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "subw_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eWord-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:subw_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "tanh",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#tanh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "tanh",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:tanh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "tanh_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Dyadic -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#tanh_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "tanh_",
          "normalized": "RoundMode-\u003ePrecision-\u003eDyadic-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eDyadic-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:tanh_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "toString",
          "package": "HERA",
          "signature": "Word -\u003e Dyadic -\u003e String",
          "source": "src/Data-Number-MPFR.html#toString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "toString",
          "normalized": "Word-\u003eDyadic-\u003eString",
          "package": "HERA",
          "partial": "String",
          "signature": "Word-\u003eDyadic-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "toStringExp",
          "package": "HERA",
          "signature": "Word -\u003e Dyadic -\u003e String",
          "source": "src/Data-Number-MPFR.html#toStringExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "toStringExp",
          "normalized": "Word-\u003eDyadic-\u003eString",
          "package": "HERA",
          "partial": "String Exp",
          "signature": "Word-\u003eDyadic-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:toStringExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "wdiv",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Word -\u003e Dyadic -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#wdiv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "wdiv",
          "normalized": "RoundMode-\u003ePrecision-\u003eWord-\u003eDyadic-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eWord-\u003eDyadic-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:wdiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "wdiv_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Word -\u003e Dyadic -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#wdiv_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "wdiv_",
          "normalized": "RoundMode-\u003ePrecision-\u003eWord-\u003eDyadic-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eWord-\u003eDyadic-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:wdiv_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "wpow",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Word -\u003e Dyadic -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#wpow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "wpow",
          "normalized": "RoundMode-\u003ePrecision-\u003eWord-\u003eDyadic-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eWord-\u003eDyadic-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:wpow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "wpow_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Word -\u003e Dyadic -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#wpow_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "wpow_",
          "normalized": "RoundMode-\u003ePrecision-\u003eWord-\u003eDyadic-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eWord-\u003eDyadic-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:wpow_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "wpoww",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Word -\u003e Word -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#wpoww",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "wpoww",
          "normalized": "RoundMode-\u003ePrecision-\u003eWord-\u003eWord-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eWord-\u003eWord-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:wpoww"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "wpoww_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Word -\u003e Word -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#wpoww_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "wpoww_",
          "normalized": "RoundMode-\u003ePrecision-\u003eWord-\u003eWord-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eWord-\u003eWord-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:wpoww_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "wsub",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Word -\u003e Dyadic -\u003e Dyadic",
          "source": "src/Data-Number-MPFR.html#wsub",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "wsub",
          "normalized": "RoundMode-\u003ePrecision-\u003eWord-\u003eDyadic-\u003eDyadic",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eWord-\u003eDyadic-\u003eDyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:wsub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "wsub_",
          "package": "HERA",
          "signature": "RoundMode -\u003e Precision -\u003e Word -\u003e Dyadic -\u003e (Dyadic, Int)",
          "source": "src/Data-Number-MPFR.html#wsub_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "wsub_",
          "normalized": "RoundMode-\u003ePrecision-\u003eWord-\u003eDyadic-\u003e(Dyadic,Int)",
          "package": "HERA",
          "signature": "RoundMode-\u003ePrecision-\u003eWord-\u003eDyadic-\u003e(Dyadic,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:wsub_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.MPFR",
          "name": "zero",
          "package": "HERA",
          "signature": "Dyadic",
          "source": "src/Data-Number-MPFR.html#zero",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number MPFR",
          "module": "Data.Number.MPFR",
          "name": "zero",
          "package": "HERA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-MPFR.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Real",
          "name": "Real",
          "package": "HERA",
          "source": "src/Data-Number-Real.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Number Real",
          "module": "Data.Number.Real",
          "name": "Real",
          "package": "HERA",
          "partial": "Real",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Real.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReal number is represented as a chain of dyadic intervals which\n are neither necessarily nested nor bounded away from 0.\n\u003c/p\u003e\u003cp\u003eOn n-th stage computations are performed with precision of n bits.\n\u003c/p\u003e",
          "module": "Data.Number.Real",
          "name": "CReal",
          "package": "HERA",
          "source": "src/Data-Number-Real.html#CReal",
          "type": "data"
        },
        "index": {
          "description": "Real number is represented as chain of dyadic intervals which are neither necessarily nested nor bounded away from On n-th stage computations are performed with precision of bits",
          "hierarchy": "Data Number Real",
          "module": "Data.Number.Real",
          "name": "CReal",
          "package": "HERA",
          "partial": "CReal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Real.html#t:CReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Real",
          "name": "Chain",
          "package": "HERA",
          "source": "src/Data-Number-Real.html#Chain",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Number Real",
          "module": "Data.Number.Real",
          "name": "Chain",
          "package": "HERA",
          "partial": "Chain",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Real.html#t:Chain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Real",
          "name": "Nat",
          "package": "HERA",
          "source": "src/Data-Number-Real.html#Nat",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Number Real",
          "module": "Data.Number.Real",
          "name": "Nat",
          "package": "HERA",
          "partial": "Nat",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Real.html#t:Nat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePartial booleans\n\u003c/p\u003e",
          "module": "Data.Number.Real",
          "name": "PBool",
          "package": "HERA",
          "source": "src/Data-Order.html#PBool",
          "type": "data"
        },
        "index": {
          "description": "Partial booleans",
          "hierarchy": "Data Number Real",
          "module": "Data.Number.Real",
          "name": "PBool",
          "package": "HERA",
          "partial": "PBool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Real.html#t:PBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e x \u003c. y \u003c/code\u003e is a function \u003ccode\u003e Nat -\u003e PBool \u003c/code\u003e which, when\n applied to some \u003ccode\u003e n \u003c/code\u003e, computes the approximation with precision \u003ccode\u003e n \u003c/code\u003e \n and then compares the intervals. If intervals are disjoint then result is \n either PTrue or PFalse, otherwise result is Indeterminate.\n\u003c/p\u003e",
          "module": "Data.Number.Real",
          "name": "(\u003c.)",
          "package": "HERA",
          "signature": "CReal -\u003e CReal -\u003e Nat -\u003e PBool",
          "source": "src/Data-Number-Real.html#%3C.",
          "type": "function"
        },
        "index": {
          "description": "is function Nat PBool which when applied to some computes the approximation with precision and then compares the intervals If intervals are disjoint then result is either PTrue or PFalse otherwise result is Indeterminate",
          "hierarchy": "Data Number Real",
          "module": "Data.Number.Real",
          "name": "(\u003c.) \u003c.",
          "normalized": "CReal-\u003eCReal-\u003eNat-\u003ePBool",
          "package": "HERA",
          "signature": "CReal-\u003eCReal-\u003eNat-\u003ePBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Real.html#v:-60-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to (\u003c.)\n\u003c/p\u003e",
          "module": "Data.Number.Real",
          "name": "(\u003e.)",
          "package": "HERA",
          "signature": "CReal -\u003e CReal -\u003e Nat -\u003e PBool",
          "source": "src/Data-Number-Real.html#%3E.",
          "type": "function"
        },
        "index": {
          "description": "Similar to",
          "hierarchy": "Data Number Real",
          "module": "Data.Number.Real",
          "name": "(\u003e.) \u003e.",
          "normalized": "CReal-\u003eCReal-\u003eNat-\u003ePBool",
          "package": "HERA",
          "signature": "CReal-\u003eCReal-\u003eNat-\u003ePBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Real.html#v:-62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eneither True nor False.\n\u003c/p\u003e",
          "module": "[\"Data.Number.Real\",\"Data.Order\"]",
          "name": "Indeterminate",
          "package": "HERA",
          "signature": "Indeterminate",
          "source": "src/Data-Order.html#PBool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HERA/docs/Data-Number-Real.html#v:Indeterminate\",\"http://hackage.haskell.org/package/HERA/docs/Data-Order.html#v:Indeterminate\"]"
        },
        "index": {
          "description": "neither True nor False",
          "hierarchy": "Data Number Real",
          "module": "Data.Number.Real",
          "name": "Indeterminate",
          "package": "HERA",
          "partial": "Indeterminate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Real.html#v:Indeterminate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eequivalent to False\n\u003c/p\u003e",
          "module": "[\"Data.Number.Real\",\"Data.Order\"]",
          "name": "PFalse",
          "package": "HERA",
          "signature": "PFalse",
          "source": "src/Data-Order.html#PBool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HERA/docs/Data-Number-Real.html#v:PFalse\",\"http://hackage.haskell.org/package/HERA/docs/Data-Order.html#v:PFalse\"]"
        },
        "index": {
          "description": "equivalent to False",
          "hierarchy": "Data Number Real",
          "module": "Data.Number.Real",
          "name": "PFalse",
          "package": "HERA",
          "partial": "PFalse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Real.html#v:PFalse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eequivalent to True\n\u003c/p\u003e",
          "module": "[\"Data.Number.Real\",\"Data.Order\"]",
          "name": "PTrue",
          "package": "HERA",
          "signature": "PTrue",
          "source": "src/Data-Order.html#PBool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HERA/docs/Data-Number-Real.html#v:PTrue\",\"http://hackage.haskell.org/package/HERA/docs/Data-Order.html#v:PTrue\"]"
        },
        "index": {
          "description": "equivalent to True",
          "hierarchy": "Data Number Real",
          "module": "Data.Number.Real",
          "name": "PTrue",
          "package": "HERA",
          "partial": "PTrue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Real.html#v:PTrue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e approx x n \u003c/code\u003e tries to compute a dyadic approximation to x so than \u003ccode\u003e |x - d| \u003c= 10^(-n) \u003c/code\u003e\n If it succeeds it returns \u003ccode\u003e Right d \u003c/code\u003e where d is a dyadic rational, otherwise it returns\n Left (d, n) where d is a dyadic rational and n is the number of accurate decimal places\n\u003c/p\u003e\u003cp\u003eApprox succeeds if result can be computed with precision less than the square of the number\n of required bits of precision.\n\u003c/p\u003e",
          "module": "Data.Number.Real",
          "name": "approx",
          "package": "HERA",
          "signature": "CReal -\u003e Nat -\u003e Either (Dyadic, Word) Dyadic",
          "source": "src/Data-Number-Real.html#approx",
          "type": "function"
        },
        "index": {
          "description": "approx tries to compute dyadic approximation to so than If it succeeds it returns Right where is dyadic rational otherwise it returns Left where is dyadic rational and is the number of accurate decimal places Approx succeeds if result can be computed with precision less than the square of the number of required bits of precision",
          "hierarchy": "Data Number Real",
          "module": "Data.Number.Real",
          "name": "approx",
          "normalized": "CReal-\u003eNat-\u003eEither(Dyadic,Word)Dyadic",
          "package": "HERA",
          "signature": "CReal-\u003eNat-\u003eEither(Dyadic,Word)Dyadic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Real.html#v:approx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Real",
          "name": "exp",
          "package": "HERA",
          "signature": "CReal -\u003e CReal",
          "source": "src/Data-Number-Real.html#exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number Real",
          "module": "Data.Number.Real",
          "name": "exp",
          "normalized": "CReal-\u003eCReal",
          "package": "HERA",
          "signature": "CReal-\u003eCReal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Real.html#v:exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Real",
          "name": "fromDyadic",
          "package": "HERA",
          "signature": "Dyadic -\u003e CReal",
          "source": "src/Data-Number-Real.html#fromDyadic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number Real",
          "module": "Data.Number.Real",
          "name": "fromDyadic",
          "normalized": "Dyadic-\u003eCReal",
          "package": "HERA",
          "partial": "Dyadic",
          "signature": "Dyadic-\u003eCReal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Real.html#v:fromDyadic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efromInt should be preferred over fromIntegral where applicable\n\u003c/p\u003e",
          "module": "Data.Number.Real",
          "name": "fromInt",
          "package": "HERA",
          "signature": "Int -\u003e CReal",
          "source": "src/Data-Number-Real.html#fromInt",
          "type": "function"
        },
        "index": {
          "description": "fromInt should be preferred over fromIntegral where applicable",
          "hierarchy": "Data Number Real",
          "module": "Data.Number.Real",
          "name": "fromInt",
          "normalized": "Int-\u003eCReal",
          "package": "HERA",
          "partial": "Int",
          "signature": "Int-\u003eCReal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Real.html#v:fromInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Real",
          "name": "fromString",
          "package": "HERA",
          "signature": "String -\u003e CReal",
          "source": "src/Data-Number-Real.html#fromString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number Real",
          "module": "Data.Number.Real",
          "name": "fromString",
          "normalized": "String-\u003eCReal",
          "package": "HERA",
          "partial": "String",
          "signature": "String-\u003eCReal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Real.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efromWord should be preferred over fromIntegral where applicable\n\u003c/p\u003e",
          "module": "Data.Number.Real",
          "name": "fromWord",
          "package": "HERA",
          "signature": "Word -\u003e CReal",
          "source": "src/Data-Number-Real.html#fromWord",
          "type": "function"
        },
        "index": {
          "description": "fromWord should be preferred over fromIntegral where applicable",
          "hierarchy": "Data Number Real",
          "module": "Data.Number.Real",
          "name": "fromWord",
          "normalized": "Word-\u003eCReal",
          "package": "HERA",
          "partial": "Word",
          "signature": "Word-\u003eCReal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Real.html#v:fromWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes an infinite sum of a series         \n\u003c/p\u003e",
          "module": "Data.Number.Real",
          "name": "infSum",
          "package": "HERA",
          "signature": "(Nat -\u003e CReal)-\u003e (Nat -\u003e CReal)-\u003e CReal",
          "type": "function"
        },
        "index": {
          "description": "Computes an infinite sum of series",
          "hierarchy": "Data Number Real",
          "module": "Data.Number.Real",
          "name": "infSum",
          "normalized": "(Nat-\u003eCReal)-\u003e(Nat-\u003eCReal)-\u003eCReal",
          "package": "HERA",
          "partial": "Sum",
          "signature": "(Nat-\u003eCReal)-\u003e(Nat-\u003eCReal)-\u003eCReal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Real.html#v:infSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to infSum but can sometimes be more convenient\n Second argument is a_0\n\u003c/p\u003e",
          "module": "Data.Number.Real",
          "name": "infSumRec",
          "package": "HERA",
          "signature": "CReal -\u003e (CReal -\u003e Nat -\u003e (CReal, CReal)) -\u003e CReal",
          "source": "src/Data-Number-Real.html#infSumRec",
          "type": "function"
        },
        "index": {
          "description": "Similar to infSum but can sometimes be more convenient Second argument is",
          "hierarchy": "Data Number Real",
          "module": "Data.Number.Real",
          "name": "infSumRec",
          "normalized": "CReal-\u003e(CReal-\u003eNat-\u003e(CReal,CReal))-\u003eCReal",
          "package": "HERA",
          "partial": "Sum Rec",
          "signature": "CReal-\u003e(CReal-\u003eNat-\u003e(CReal,CReal))-\u003eCReal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Real.html#v:infSumRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA basic general limit which takes as arguments a sequence of reals and a sequence of \n error bounds. \n\u003c/p\u003e",
          "module": "Data.Number.Real",
          "name": "lim",
          "package": "HERA",
          "signature": "(Nat -\u003e CReal)-\u003e (Nat -\u003e CReal)-\u003e CReal",
          "type": "function"
        },
        "index": {
          "description": "basic general limit which takes as arguments sequence of reals and sequence of error bounds",
          "hierarchy": "Data Number Real",
          "module": "Data.Number.Real",
          "name": "lim",
          "normalized": "(Nat-\u003eCReal)-\u003e(Nat-\u003eCReal)-\u003eCReal",
          "package": "HERA",
          "signature": "(Nat-\u003eCReal)-\u003e(Nat-\u003eCReal)-\u003eCReal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Real.html#v:lim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLimit of a sequence of rationals.\n\u003c/p\u003e",
          "module": "Data.Number.Real",
          "name": "limRat",
          "package": "HERA",
          "signature": "(Nat -\u003e Dyadic)-\u003e (Nat -\u003e Dyadic)-\u003e CReal",
          "type": "function"
        },
        "index": {
          "description": "Limit of sequence of rationals",
          "hierarchy": "Data Number Real",
          "module": "Data.Number.Real",
          "name": "limRat",
          "normalized": "(Nat-\u003eDyadic)-\u003e(Nat-\u003eDyadic)-\u003eCReal",
          "package": "HERA",
          "partial": "Rat",
          "signature": "(Nat-\u003eDyadic)-\u003e(Nat-\u003eDyadic)-\u003eCReal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Real.html#v:limRat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to lim, but can sometimes be more convenient for some sequences\n\u003c/p\u003e",
          "module": "Data.Number.Real",
          "name": "limRec",
          "package": "HERA",
          "signature": "CReal-\u003e (CReal -\u003e Nat -\u003e (CReal, CReal))-\u003e CReal",
          "type": "function"
        },
        "index": {
          "description": "Similar to lim but can sometimes be more convenient for some sequences",
          "hierarchy": "Data Number Real",
          "module": "Data.Number.Real",
          "name": "limRec",
          "normalized": "CReal-\u003e(CReal-\u003eNat-\u003e(CReal,CReal))-\u003eCReal",
          "package": "HERA",
          "partial": "Rec",
          "signature": "CReal-\u003e(CReal-\u003eNat-\u003e(CReal,CReal))-\u003eCReal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Real.html#v:limRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Real",
          "name": "log",
          "package": "HERA",
          "signature": "CReal -\u003e CReal",
          "source": "src/Data-Number-Real.html#log",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number Real",
          "module": "Data.Number.Real",
          "name": "log",
          "normalized": "CReal-\u003eCReal",
          "package": "HERA",
          "signature": "CReal-\u003eCReal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Real.html#v:log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Real",
          "name": "max",
          "package": "HERA",
          "signature": "CReal -\u003e CReal -\u003e CReal",
          "source": "src/Data-Number-Real.html#max",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number Real",
          "module": "Data.Number.Real",
          "name": "max",
          "normalized": "CReal-\u003eCReal-\u003eCReal",
          "package": "HERA",
          "signature": "CReal-\u003eCReal-\u003eCReal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Real.html#v:max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Real",
          "name": "min",
          "package": "HERA",
          "signature": "CReal -\u003e CReal -\u003e CReal",
          "source": "src/Data-Number-Real.html#min",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number Real",
          "module": "Data.Number.Real",
          "name": "min",
          "normalized": "CReal-\u003eCReal-\u003eCReal",
          "package": "HERA",
          "signature": "CReal-\u003eCReal-\u003eCReal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Real.html#v:min"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e pCompare x y \u003c/code\u003e returns a function \u003ccode\u003e Nat -\u003e POrdering \u003c/code\u003e which\n when applied to some \u003ccode\u003e n \u003c/code\u003e computes approximates with precision \u003ccode\u003e n \u003c/code\u003e\n and then compares the resulting intervals\n\u003c/p\u003e",
          "module": "Data.Number.Real",
          "name": "pCompare",
          "package": "HERA",
          "signature": "CReal -\u003e CReal -\u003e Nat -\u003e POrdering",
          "source": "src/Data-Number-Real.html#pCompare",
          "type": "function"
        },
        "index": {
          "description": "pCompare returns function Nat POrdering which when applied to some computes approximates with precision and then compares the resulting intervals",
          "hierarchy": "Data Number Real",
          "module": "Data.Number.Real",
          "name": "pCompare",
          "normalized": "CReal-\u003eCReal-\u003eNat-\u003ePOrdering",
          "package": "HERA",
          "partial": "Compare",
          "signature": "CReal-\u003eCReal-\u003eNat-\u003ePOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Real.html#v:pCompare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Real",
          "name": "sqrt",
          "package": "HERA",
          "signature": "CReal -\u003e CReal",
          "source": "src/Data-Number-Real.html#sqrt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Number Real",
          "module": "Data.Number.Real",
          "name": "sqrt",
          "normalized": "CReal-\u003eCReal",
          "package": "HERA",
          "signature": "CReal-\u003eCReal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Real.html#v:sqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etoString computes the result with specified precision.\n\u003c/p\u003e",
          "module": "Data.Number.Real",
          "name": "toString",
          "package": "HERA",
          "signature": "Nat -\u003e CReal -\u003e String",
          "source": "src/Data-Number-Real.html#toString",
          "type": "function"
        },
        "index": {
          "description": "toString computes the result with specified precision",
          "hierarchy": "Data Number Real",
          "module": "Data.Number.Real",
          "name": "toString",
          "normalized": "Nat-\u003eCReal-\u003eString",
          "package": "HERA",
          "partial": "String",
          "signature": "Nat-\u003eCReal-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Real.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etoStringDec tries to compute the result to the number of specified significand digits\n\u003c/p\u003e",
          "module": "Data.Number.Real",
          "name": "toStringDec",
          "package": "HERA",
          "signature": "Nat -\u003e CReal -\u003e String",
          "source": "src/Data-Number-Real.html#toStringDec",
          "type": "function"
        },
        "index": {
          "description": "toStringDec tries to compute the result to the number of specified significand digits",
          "hierarchy": "Data Number Real",
          "module": "Data.Number.Real",
          "name": "toStringDec",
          "normalized": "Nat-\u003eCReal-\u003eString",
          "package": "HERA",
          "partial": "String Dec",
          "signature": "Nat-\u003eCReal-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Number-Real.html#v:toStringDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Order",
          "name": "Order",
          "package": "HERA",
          "source": "src/Data-Order.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Order",
          "module": "Data.Order",
          "name": "Order",
          "package": "HERA",
          "partial": "Order",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Order.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePartial booleans\n\u003c/p\u003e",
          "module": "Data.Order",
          "name": "PBool",
          "package": "HERA",
          "source": "src/Data-Order.html#PBool",
          "type": "data"
        },
        "index": {
          "description": "Partial booleans",
          "hierarchy": "Data Order",
          "module": "Data.Order",
          "name": "PBool",
          "package": "HERA",
          "partial": "PBool",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Order.html#t:PBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePartial ordering.\n\u003c/p\u003e",
          "module": "Data.Order",
          "name": "POrdering",
          "package": "HERA",
          "source": "src/Data-Order.html#POrdering",
          "type": "data"
        },
        "index": {
          "description": "Partial ordering",
          "hierarchy": "Data Order",
          "module": "Data.Order",
          "name": "POrdering",
          "package": "HERA",
          "partial": "POrdering",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Order.html#t:POrdering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Order",
          "name": "Greater",
          "package": "HERA",
          "signature": "Greater",
          "source": "src/Data-Order.html#POrdering",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Order",
          "module": "Data.Order",
          "name": "Greater",
          "package": "HERA",
          "partial": "Greater",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Order.html#v:Greater"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Order",
          "name": "Incomparable",
          "package": "HERA",
          "signature": "Incomparable",
          "source": "src/Data-Order.html#POrdering",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Order",
          "module": "Data.Order",
          "name": "Incomparable",
          "package": "HERA",
          "partial": "Incomparable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Order.html#v:Incomparable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Order",
          "name": "Less",
          "package": "HERA",
          "signature": "Less",
          "source": "src/Data-Order.html#POrdering",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Order",
          "module": "Data.Order",
          "name": "Less",
          "package": "HERA",
          "partial": "Less",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HERA/docs/Data-Order.html#v:Less"
      }
    }
  ]
]