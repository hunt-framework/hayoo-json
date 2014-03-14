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
        "word": "curves"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWrite-only attributes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Curves.Attribute",
          "name": "Attribute",
          "package": "curves",
          "source": "src/Graphics-Curves-Attribute.html",
          "type": "module"
        },
        "index": {
          "description": "Write-only attributes",
          "hierarchy": "Graphics Curves Attribute",
          "module": "Graphics.Curves.Attribute",
          "name": "Attribute",
          "package": "curves",
          "partial": "Attribute",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Attribute.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of an attribute update for an element of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Attribute",
          "name": "Assignment",
          "package": "curves",
          "source": "src/Graphics-Curves-Attribute.html#Assignment",
          "type": "data"
        },
        "index": {
          "description": "Representation of an attribute update for an element of type",
          "hierarchy": "Graphics Curves Attribute",
          "module": "Graphics.Curves.Attribute",
          "name": "Assignment",
          "package": "curves",
          "partial": "Assignment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Attribute.html#t:Assignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type constructor \u003ccode\u003ef\u003c/code\u003e is such that \u003ccode\u003ef b\u003c/code\u003e is the type of names of\n   attributes of \u003ccode\u003ea\u003c/code\u003e of type \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Attribute",
          "name": "HasAttribute",
          "package": "curves",
          "source": "src/Graphics-Curves-Attribute.html#HasAttribute",
          "type": "class"
        },
        "index": {
          "description": "The type constructor is such that is the type of names of attributes of of type",
          "hierarchy": "Graphics Curves Attribute",
          "module": "Graphics.Curves.Attribute",
          "name": "HasAttribute",
          "package": "curves",
          "partial": "Has Attribute",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Attribute.html#t:HasAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify an attribute\n\u003c/p\u003e",
          "module": "Graphics.Curves.Attribute",
          "name": ":~",
          "package": "curves",
          "signature": "(f b) :~ (b -\u003e b)",
          "source": "src/Graphics-Curves-Attribute.html#Assignment",
          "type": "function"
        },
        "index": {
          "description": "Modify an attribute",
          "hierarchy": "Graphics Curves Attribute",
          "module": "Graphics.Curves.Attribute",
          "name": ":~",
          "normalized": "(a b)(b-\u003eb)",
          "package": "curves",
          "signature": "(f b)(b-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Attribute.html#v::-126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet an attribute\n\u003c/p\u003e",
          "module": "Graphics.Curves.Attribute",
          "name": ":=",
          "package": "curves",
          "signature": "(f b) := b",
          "source": "src/Graphics-Curves-Attribute.html#Assignment",
          "type": "function"
        },
        "index": {
          "description": "Set an attribute",
          "hierarchy": "Graphics Curves Attribute",
          "module": "Graphics.Curves.Attribute",
          "name": ":=",
          "package": "curves",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Attribute.html#v::-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Attribute",
          "name": "modifyAttribute",
          "package": "curves",
          "signature": "f b -\u003e (b -\u003e b) -\u003e a -\u003e a",
          "source": "src/Graphics-Curves-Attribute.html#modifyAttribute",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics Curves Attribute",
          "module": "Graphics.Curves.Attribute",
          "name": "modifyAttribute",
          "normalized": "a b-\u003e(b-\u003eb)-\u003ec-\u003ec",
          "package": "curves",
          "partial": "Attribute",
          "signature": "f b-\u003e(b-\u003eb)-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Attribute.html#v:modifyAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Attribute",
          "name": "setAttribute",
          "package": "curves",
          "signature": "f b -\u003e b -\u003e a -\u003e a",
          "source": "src/Graphics-Curves-Attribute.html#setAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Attribute",
          "module": "Graphics.Curves.Attribute",
          "name": "setAttribute",
          "normalized": "a b-\u003eb-\u003ec-\u003ec",
          "package": "curves",
          "partial": "Attribute",
          "signature": "f b-\u003eb-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Attribute.html#v:setAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a sequence of attribute assignments to an object (applied\n   left-to-right).\n\u003c/p\u003e",
          "module": "Graphics.Curves.Attribute",
          "name": "with",
          "package": "curves",
          "signature": "a -\u003e [Assignment a] -\u003e a",
          "source": "src/Graphics-Curves-Attribute.html#with",
          "type": "function"
        },
        "index": {
          "description": "Apply sequence of attribute assignments to an object applied left-to-right",
          "hierarchy": "Graphics Curves Attribute",
          "module": "Graphics.Curves.Attribute",
          "name": "with",
          "normalized": "a-\u003e[Assignment a]-\u003ea",
          "package": "curves",
          "signature": "a-\u003e[Assignment a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Attribute.html#v:with"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRGBA colour values.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Curves.Colour",
          "name": "Colour",
          "package": "curves",
          "source": "src/Graphics-Curves-Colour.html",
          "type": "module"
        },
        "index": {
          "description": "RGBA colour values",
          "hierarchy": "Graphics Curves Colour",
          "module": "Graphics.Curves.Colour",
          "name": "Colour",
          "package": "curves",
          "partial": "Colour",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Colour.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRGBA values in the range 0.0 to 1.0.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Colour",
          "name": "Colour",
          "package": "curves",
          "source": "src/Graphics-Curves-Colour.html#Colour",
          "type": "data"
        },
        "index": {
          "description": "RGBA values in the range to",
          "hierarchy": "Graphics Curves Colour",
          "module": "Graphics.Curves.Colour",
          "name": "Colour",
          "package": "curves",
          "partial": "Colour",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Colour.html#t:Colour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Colour",
          "name": "Colour",
          "package": "curves",
          "signature": "Colour",
          "source": "src/Graphics-Curves-Colour.html#Colour",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Colour",
          "module": "Graphics.Curves.Colour",
          "name": "Colour",
          "package": "curves",
          "partial": "Colour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Colour.html#v:Colour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Colour",
          "name": "black",
          "package": "curves",
          "signature": "Colour",
          "source": "src/Graphics-Curves-Colour.html#black",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Colour",
          "module": "Graphics.Curves.Colour",
          "name": "black",
          "package": "curves",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Colour.html#v:black"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlpha blending two colours.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Colour",
          "name": "blend",
          "package": "curves",
          "signature": "Colour -\u003e Colour -\u003e Colour",
          "source": "src/Graphics-Curves-Colour.html#blend",
          "type": "function"
        },
        "index": {
          "description": "Alpha blending two colours",
          "hierarchy": "Graphics Curves Colour",
          "module": "Graphics.Curves.Colour",
          "name": "blend",
          "normalized": "Colour-\u003eColour-\u003eColour",
          "package": "curves",
          "signature": "Colour-\u003eColour-\u003eColour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Colour.html#v:blend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Colour",
          "name": "blue",
          "package": "curves",
          "signature": "Colour",
          "source": "src/Graphics-Curves-Colour.html#blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Colour",
          "module": "Graphics.Curves.Colour",
          "name": "blue",
          "package": "curves",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Colour.html#v:blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Colour",
          "name": "getAlpha",
          "package": "curves",
          "signature": "Scalar",
          "source": "src/Graphics-Curves-Colour.html#Colour",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Colour",
          "module": "Graphics.Curves.Colour",
          "name": "getAlpha",
          "package": "curves",
          "partial": "Alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Colour.html#v:getAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Colour",
          "name": "getBlue",
          "package": "curves",
          "signature": "Scalar",
          "source": "src/Graphics-Curves-Colour.html#Colour",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Colour",
          "module": "Graphics.Curves.Colour",
          "name": "getBlue",
          "package": "curves",
          "partial": "Blue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Colour.html#v:getBlue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Colour",
          "name": "getGreen",
          "package": "curves",
          "signature": "Scalar",
          "source": "src/Graphics-Curves-Colour.html#Colour",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Colour",
          "module": "Graphics.Curves.Colour",
          "name": "getGreen",
          "package": "curves",
          "partial": "Green",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Colour.html#v:getGreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Colour",
          "name": "getRed",
          "package": "curves",
          "signature": "Scalar",
          "source": "src/Graphics-Curves-Colour.html#Colour",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Colour",
          "module": "Graphics.Curves.Colour",
          "name": "getRed",
          "package": "curves",
          "partial": "Red",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Colour.html#v:getRed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Colour",
          "name": "green",
          "package": "curves",
          "signature": "Colour",
          "source": "src/Graphics-Curves-Colour.html#green",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Colour",
          "module": "Graphics.Curves.Colour",
          "name": "green",
          "package": "curves",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Colour.html#v:green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if a colour is completely transparent.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Colour",
          "name": "isTransparent",
          "package": "curves",
          "signature": "Colour -\u003e Bool",
          "source": "src/Graphics-Curves-Colour.html#isTransparent",
          "type": "function"
        },
        "index": {
          "description": "Check if colour is completely transparent",
          "hierarchy": "Graphics Curves Colour",
          "module": "Graphics.Curves.Colour",
          "name": "isTransparent",
          "normalized": "Colour-\u003eBool",
          "package": "curves",
          "partial": "Transparent",
          "signature": "Colour-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Colour.html#v:isTransparent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e opacity a c = setAlpha (a * getAlpha c) c\n\u003c/pre\u003e",
          "module": "Graphics.Curves.Colour",
          "name": "opacity",
          "package": "curves",
          "signature": "Scalar -\u003e Colour -\u003e Colour",
          "source": "src/Graphics-Curves-Colour.html#opacity",
          "type": "function"
        },
        "index": {
          "description": "opacity setAlpha getAlpha",
          "hierarchy": "Graphics Curves Colour",
          "module": "Graphics.Curves.Colour",
          "name": "opacity",
          "normalized": "Scalar-\u003eColour-\u003eColour",
          "package": "curves",
          "signature": "Scalar-\u003eColour-\u003eColour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Colour.html#v:opacity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e opaque = setAlpha 1\n\u003c/pre\u003e",
          "module": "Graphics.Curves.Colour",
          "name": "opaque",
          "package": "curves",
          "signature": "Colour -\u003e Colour",
          "source": "src/Graphics-Curves-Colour.html#opaque",
          "type": "function"
        },
        "index": {
          "description": "opaque setAlpha",
          "hierarchy": "Graphics Curves Colour",
          "module": "Graphics.Curves.Colour",
          "name": "opaque",
          "normalized": "Colour-\u003eColour",
          "package": "curves",
          "signature": "Colour-\u003eColour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Colour.html#v:opaque"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Colour",
          "name": "red",
          "package": "curves",
          "signature": "Colour",
          "source": "src/Graphics-Curves-Colour.html#red",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Colour",
          "module": "Graphics.Curves.Colour",
          "name": "red",
          "package": "curves",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Colour.html#v:red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the alpha value of a colour.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Colour",
          "name": "setAlpha",
          "package": "curves",
          "signature": "Scalar -\u003e Colour -\u003e Colour",
          "source": "src/Graphics-Curves-Colour.html#setAlpha",
          "type": "function"
        },
        "index": {
          "description": "Set the alpha value of colour",
          "hierarchy": "Graphics Curves Colour",
          "module": "Graphics.Curves.Colour",
          "name": "setAlpha",
          "normalized": "Scalar-\u003eColour-\u003eColour",
          "package": "curves",
          "partial": "Alpha",
          "signature": "Scalar-\u003eColour-\u003eColour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Colour.html#v:setAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompletely transparent (and black) colour.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Colour",
          "name": "transparent",
          "package": "curves",
          "signature": "Colour",
          "source": "src/Graphics-Curves-Colour.html#transparent",
          "type": "function"
        },
        "index": {
          "description": "Completely transparent and black colour",
          "hierarchy": "Graphics Curves Colour",
          "module": "Graphics.Curves.Colour",
          "name": "transparent",
          "package": "curves",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Colour.html#v:transparent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003evisible c == Nothing\u003c/code\u003e iff \u003ccode\u003eisTransparent c\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.Curves.Colour",
          "name": "visible",
          "package": "curves",
          "signature": "Colour -\u003e Maybe Colour",
          "source": "src/Graphics-Curves-Colour.html#visible",
          "type": "function"
        },
        "index": {
          "description": "visible Nothing iff isTransparent",
          "hierarchy": "Graphics Curves Colour",
          "module": "Graphics.Curves.Colour",
          "name": "visible",
          "normalized": "Colour-\u003eMaybe Colour",
          "package": "curves",
          "signature": "Colour-\u003eMaybe Colour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Colour.html#v:visible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Colour",
          "name": "white",
          "package": "curves",
          "signature": "Colour",
          "source": "src/Graphics-Curves-Colour.html#white",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Colour",
          "module": "Graphics.Curves.Colour",
          "name": "white",
          "package": "curves",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Colour.html#v:white"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCombinators for drawing various geometric figures.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Curves.Geometry",
          "name": "Geometry",
          "package": "curves",
          "source": "src/Graphics-Curves-Geometry.html",
          "type": "module"
        },
        "index": {
          "description": "Combinators for drawing various geometric figures",
          "hierarchy": "Graphics Curves Geometry",
          "module": "Graphics.Curves.Geometry",
          "name": "Geometry",
          "package": "curves",
          "partial": "Geometry",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Geometry.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Geometry",
          "name": "Angle",
          "package": "curves",
          "source": "src/Graphics-Curves-Geometry.html#Angle",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Curves Geometry",
          "module": "Graphics.Curves.Geometry",
          "name": "Angle",
          "package": "curves",
          "partial": "Angle",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Geometry.html#t:Angle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Geometry",
          "name": "Length",
          "package": "curves",
          "source": "src/Graphics-Curves-Geometry.html#Length",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Curves Geometry",
          "module": "Graphics.Curves.Geometry",
          "name": "Length",
          "package": "curves",
          "partial": "Length",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Geometry.html#t:Length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw an angle arc for the counter clockwise angle BAC.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Geometry",
          "name": "angleArc",
          "package": "curves",
          "signature": "Scalar-\u003e Point-\u003e Point-\u003e Point-\u003e Image",
          "type": "function"
        },
        "index": {
          "description": "Draw an angle arc for the counter clockwise angle BAC",
          "hierarchy": "Graphics Curves Geometry",
          "module": "Graphics.Curves.Geometry",
          "name": "angleArc",
          "normalized": "Scalar-\u003ePoint-\u003ePoint-\u003ePoint-\u003eImage",
          "package": "curves",
          "partial": "Arc",
          "signature": "Scalar-\u003ePoint-\u003ePoint-\u003ePoint-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Geometry.html#v:angleArc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a line segment with an arrow head.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Geometry",
          "name": "arrow",
          "package": "curves",
          "signature": "Point -\u003e Point -\u003e Image",
          "source": "src/Graphics-Curves-Geometry.html#arrow",
          "type": "function"
        },
        "index": {
          "description": "Draw line segment with an arrow head",
          "hierarchy": "Graphics Curves Geometry",
          "module": "Graphics.Curves.Geometry",
          "name": "arrow",
          "normalized": "Point-\u003ePoint-\u003eImage",
          "package": "curves",
          "signature": "Point-\u003ePoint-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Geometry.html#v:arrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw an angle arc labelled by the given string.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Geometry",
          "name": "labelledAngle",
          "package": "curves",
          "signature": "String-\u003e Vec-\u003e Point-\u003e Point-\u003e Point-\u003e Image",
          "type": "function"
        },
        "index": {
          "description": "Draw an angle arc labelled by the given string",
          "hierarchy": "Graphics Curves Geometry",
          "module": "Graphics.Curves.Geometry",
          "name": "labelledAngle",
          "normalized": "String-\u003eVec-\u003ePoint-\u003ePoint-\u003ePoint-\u003eImage",
          "package": "curves",
          "partial": "Angle",
          "signature": "String-\u003eVec-\u003ePoint-\u003ePoint-\u003ePoint-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Geometry.html#v:labelledAngle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw an axis-aligned rectangle with the given opposite corners.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Geometry",
          "name": "rectangle",
          "package": "curves",
          "signature": "Point -\u003e Point -\u003e Image",
          "source": "src/Graphics-Curves-Geometry.html#rectangle",
          "type": "function"
        },
        "index": {
          "description": "Draw an axis-aligned rectangle with the given opposite corners",
          "hierarchy": "Graphics Curves Geometry",
          "module": "Graphics.Curves.Geometry",
          "name": "rectangle",
          "normalized": "Point-\u003ePoint-\u003eImage",
          "package": "curves",
          "signature": "Point-\u003ePoint-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Geometry.html#v:rectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw an n-sided regular polygon centered at the origin and one corner at\n   (1, 0).\n\u003c/p\u003e",
          "module": "Graphics.Curves.Geometry",
          "name": "regularPoly",
          "package": "curves",
          "signature": "Int -\u003e Image",
          "source": "src/Graphics-Curves-Geometry.html#regularPoly",
          "type": "function"
        },
        "index": {
          "description": "Draw an n-sided regular polygon centered at the origin and one corner at",
          "hierarchy": "Graphics Curves Geometry",
          "module": "Graphics.Curves.Geometry",
          "name": "regularPoly",
          "normalized": "Int-\u003eImage",
          "package": "curves",
          "partial": "Poly",
          "signature": "Int-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Geometry.html#v:regularPoly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a triangle with the given side lengths. The corner opposite the third\n   side is located at the origin and the first side is drawn along the\n   x-axis.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Geometry",
          "name": "triangle",
          "package": "curves",
          "signature": "Length -\u003e Length -\u003e Length -\u003e Image",
          "source": "src/Graphics-Curves-Geometry.html#triangle",
          "type": "function"
        },
        "index": {
          "description": "Draw triangle with the given side lengths The corner opposite the third side is located at the origin and the first side is drawn along the x-axis",
          "hierarchy": "Graphics Curves Geometry",
          "module": "Graphics.Curves.Geometry",
          "name": "triangle",
          "normalized": "Length-\u003eLength-\u003eLength-\u003eImage",
          "package": "curves",
          "signature": "Length-\u003eLength-\u003eLength-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Geometry.html#v:triangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a triangle given by two side lengths and an angle. The corner of the\n   angle is drawn at the origin and the first side along the x-axis.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Geometry",
          "name": "triangleA",
          "package": "curves",
          "signature": "Length -\u003e Length -\u003e Angle -\u003e Image",
          "source": "src/Graphics-Curves-Geometry.html#triangleA",
          "type": "function"
        },
        "index": {
          "description": "Draw triangle given by two side lengths and an angle The corner of the angle is drawn at the origin and the first side along the x-axis",
          "hierarchy": "Graphics Curves Geometry",
          "module": "Graphics.Curves.Geometry",
          "name": "triangleA",
          "normalized": "Length-\u003eLength-\u003eAngle-\u003eImage",
          "package": "curves",
          "signature": "Length-\u003eLength-\u003eAngle-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Geometry.html#v:triangleA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a triangle given by two angles and the length of the side shared by\n   the angles. The first angle is drawn at the origin and the side along the\n   x-axis.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Geometry",
          "name": "triangleAA",
          "package": "curves",
          "signature": "Length -\u003e Angle -\u003e Angle -\u003e Image",
          "source": "src/Graphics-Curves-Geometry.html#triangleAA",
          "type": "function"
        },
        "index": {
          "description": "Draw triangle given by two angles and the length of the side shared by the angles The first angle is drawn at the origin and the side along the x-axis",
          "hierarchy": "Graphics Curves Geometry",
          "module": "Graphics.Curves.Geometry",
          "name": "triangleAA",
          "normalized": "Length-\u003eAngle-\u003eAngle-\u003eImage",
          "package": "curves",
          "partial": "AA",
          "signature": "Length-\u003eAngle-\u003eAngle-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Geometry.html#v:triangleAA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Graph",
          "name": "Graph",
          "package": "curves",
          "source": "src/Graphics-Curves-Graph.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics Curves Graph",
          "module": "Graphics.Curves.Graph",
          "name": "Graph",
          "package": "curves",
          "partial": "Graph",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Graph.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw the graph of a function together with axis and some guides.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Graph",
          "name": "graph",
          "package": "curves",
          "signature": "Scalar -\u003e Scalar -\u003e (Scalar -\u003e Scalar) -\u003e Image",
          "source": "src/Graphics-Curves-Graph.html#graph",
          "type": "function"
        },
        "index": {
          "description": "Draw the graph of function together with axis and some guides",
          "hierarchy": "Graphics Curves Graph",
          "module": "Graphics.Curves.Graph",
          "name": "graph",
          "normalized": "Scalar-\u003eScalar-\u003e(Scalar-\u003eScalar)-\u003eImage",
          "package": "curves",
          "signature": "Scalar-\u003eScalar-\u003e(Scalar-\u003eScalar)-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Graph.html#v:graph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple two-dimensional linear algebra.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Curves.Math",
          "name": "Math",
          "package": "curves",
          "source": "src/Graphics-Curves-Math.html",
          "type": "module"
        },
        "index": {
          "description": "Simple two-dimensional linear algebra",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "Math",
          "package": "curves",
          "partial": "Math",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA basis for a coordinate system.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Math",
          "name": "Basis",
          "package": "curves",
          "source": "src/Graphics-Curves-Math.html#Basis",
          "type": "data"
        },
        "index": {
          "description": "basis for coordinate system",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "Basis",
          "package": "curves",
          "partial": "Basis",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#t:Basis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Math",
          "name": "DistanceToPoint",
          "package": "curves",
          "source": "src/Graphics-Curves-Math.html#DistanceToPoint",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "DistanceToPoint",
          "package": "curves",
          "partial": "Distance To Point",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#t:DistanceToPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Math",
          "name": "Point",
          "package": "curves",
          "source": "src/Graphics-Curves-Math.html#Point",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "Point",
          "package": "curves",
          "partial": "Point",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Math",
          "name": "Scalar",
          "package": "curves",
          "source": "src/Graphics-Curves-Math.html#Scalar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "Scalar",
          "package": "curves",
          "partial": "Scalar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#t:Scalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Math",
          "name": "Segment",
          "package": "curves",
          "source": "src/Graphics-Curves-Math.html#Segment",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "Segment",
          "package": "curves",
          "partial": "Segment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#t:Segment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Math",
          "name": "Transformable",
          "package": "curves",
          "source": "src/Graphics-Curves-Math.html#Transformable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "Transformable",
          "package": "curves",
          "partial": "Transformable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#t:Transformable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo-dimensional vectors.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Math",
          "name": "Vec",
          "package": "curves",
          "source": "src/Graphics-Curves-Math.html#Vec",
          "type": "data"
        },
        "index": {
          "description": "Two-dimensional vectors",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "Vec",
          "package": "curves",
          "partial": "Vec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#t:Vec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Math",
          "name": "Basis",
          "package": "curves",
          "signature": "Basis",
          "source": "src/Graphics-Curves-Math.html#Basis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "Basis",
          "package": "curves",
          "partial": "Basis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:Basis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Math",
          "name": "Seg",
          "package": "curves",
          "signature": "Seg",
          "source": "src/Graphics-Curves-Math.html#Segment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "Seg",
          "package": "curves",
          "partial": "Seg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:Seg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Math",
          "name": "Vec",
          "package": "curves",
          "signature": "Vec",
          "source": "src/Graphics-Curves-Math.html#Vec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "Vec",
          "package": "curves",
          "partial": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:Vec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe counterclockwise angle between two vectors.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Math",
          "name": "angle",
          "package": "curves",
          "signature": "Vec -\u003e Vec -\u003e Scalar",
          "source": "src/Graphics-Curves-Math.html#angle",
          "type": "function"
        },
        "index": {
          "description": "The counterclockwise angle between two vectors",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "angle",
          "normalized": "Vec-\u003eVec-\u003eScalar",
          "package": "curves",
          "signature": "Vec-\u003eVec-\u003eScalar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:angle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e defaultBasis = Basis 0 unitX unitY\n\u003c/pre\u003e",
          "module": "Graphics.Curves.Math",
          "name": "defaultBasis",
          "package": "curves",
          "signature": "Basis",
          "source": "src/Graphics-Curves-Math.html#defaultBasis",
          "type": "function"
        },
        "index": {
          "description": "defaultBasis Basis unitX unitY",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "defaultBasis",
          "package": "curves",
          "partial": "Basis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:defaultBasis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ediag x = Vec x x\u003c/pre\u003e",
          "module": "Graphics.Curves.Math",
          "name": "diag",
          "package": "curves",
          "signature": "Scalar -\u003e Vec",
          "source": "src/Graphics-Curves-Math.html#diag",
          "type": "function"
        },
        "index": {
          "description": "diag Vec",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "diag",
          "normalized": "Scalar-\u003eVec",
          "package": "curves",
          "signature": "Scalar-\u003eVec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:diag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the distance from an \u003ccode\u003ea\u003c/code\u003e to a given point. Default implementation:\n\u003c/p\u003e\u003cpre\u003e distance x p = sqrt (squareDistance x p)\n\u003c/pre\u003e",
          "module": "Graphics.Curves.Math",
          "name": "distance",
          "package": "curves",
          "signature": "a -\u003e Point -\u003e Scalar",
          "source": "src/Graphics-Curves-Math.html#distance",
          "type": "method"
        },
        "index": {
          "description": "Compute the distance from an to given point Default implementation distance sqrt squareDistance",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "distance",
          "normalized": "a-\u003ePoint-\u003eScalar",
          "package": "curves",
          "signature": "a-\u003ePoint-\u003eScalar",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe distance from an \u003ccode\u003ea\u003c/code\u003e to a point if it's less than a given value.\n   \u003ccode\u003edistanceAtMost d x p == Nothing\u003c/code\u003e implies that \u003ccode\u003edistance x p \u003e d\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Math",
          "name": "distanceAtMost",
          "package": "curves",
          "signature": "Scalar -\u003e a -\u003e Point -\u003e Maybe Scalar",
          "source": "src/Graphics-Curves-Math.html#distanceAtMost",
          "type": "method"
        },
        "index": {
          "description": "The distance from an to point if it less than given value distanceAtMost Nothing implies that distance",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "distanceAtMost",
          "normalized": "Scalar-\u003ea-\u003ePoint-\u003eMaybe Scalar",
          "package": "curves",
          "partial": "At Most",
          "signature": "Scalar-\u003ea-\u003ePoint-\u003eMaybe Scalar",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:distanceAtMost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe dot product of two vectors.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Math",
          "name": "dot",
          "package": "curves",
          "signature": "Vec -\u003e Vec -\u003e Scalar",
          "source": "src/Graphics-Curves-Math.html#dot",
          "type": "function"
        },
        "index": {
          "description": "The dot product of two vectors",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "dot",
          "normalized": "Vec-\u003eVec-\u003eScalar",
          "package": "curves",
          "signature": "Vec-\u003eVec-\u003eScalar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the smallest value making a function satisfy a given predicate. Needs\n   the function to be monotone in the predicate to work properly.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Math",
          "name": "findThreshold",
          "package": "curves",
          "signature": "(Scalar -\u003e a)-\u003e (a -\u003e Bool)-\u003e Scalar-\u003e Scalar-\u003e Scalar-\u003e Maybe (Scalar, a)",
          "type": "function"
        },
        "index": {
          "description": "Find the smallest value making function satisfy given predicate Needs the function to be monotone in the predicate to work properly",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "findThreshold",
          "normalized": "(Scalar-\u003ea)-\u003e(a-\u003eBool)-\u003eScalar-\u003eScalar-\u003eScalar-\u003eMaybe(Scalar,a)",
          "package": "curves",
          "partial": "Threshold",
          "signature": "(Scalar-\u003ea)-\u003e(a-\u003eBool)-\u003eScalar-\u003eScalar-\u003eScalar-\u003eMaybe(Scalar,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:findThreshold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Math",
          "name": "getEnd",
          "package": "curves",
          "signature": "Point",
          "source": "src/Graphics-Curves-Math.html#Segment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "getEnd",
          "package": "curves",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:getEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Math",
          "name": "getStart",
          "package": "curves",
          "signature": "Point",
          "source": "src/Graphics-Curves-Math.html#Segment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "getStart",
          "package": "curves",
          "partial": "Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:getStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Math",
          "name": "getX",
          "package": "curves",
          "signature": "Scalar",
          "source": "src/Graphics-Curves-Math.html#Vec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "getX",
          "package": "curves",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:getX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Math",
          "name": "getY",
          "package": "curves",
          "signature": "Scalar",
          "source": "src/Graphics-Curves-Math.html#Vec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "getY",
          "package": "curves",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:getY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe weighted average of two points.\n\u003c/p\u003e\u003cpre\u003e interpolate p q t == (1 - t) * p + t * q\n\u003c/pre\u003e",
          "module": "Graphics.Curves.Math",
          "name": "interpolate",
          "package": "curves",
          "signature": "Point -\u003e Point -\u003e Scalar -\u003e Point",
          "source": "src/Graphics-Curves-Math.html#interpolate",
          "type": "function"
        },
        "index": {
          "description": "The weighted average of two points interpolate",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "interpolate",
          "normalized": "Point-\u003ePoint-\u003eScalar-\u003ePoint",
          "package": "curves",
          "signature": "Point-\u003ePoint-\u003eScalar-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:interpolate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the intersection point of two lines, if any.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Math",
          "name": "intersectLine",
          "package": "curves",
          "signature": "Segment -\u003e Segment -\u003e Maybe Point",
          "source": "src/Graphics-Curves-Math.html#intersectLine",
          "type": "function"
        },
        "index": {
          "description": "Compute the intersection point of two lines if any",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "intersectLine",
          "normalized": "Segment-\u003eSegment-\u003eMaybe Point",
          "package": "curves",
          "partial": "Line",
          "signature": "Segment-\u003eSegment-\u003eMaybe Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:intersectLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the intersection point of a line and a segment, if any.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Math",
          "name": "intersectLineSegment",
          "package": "curves",
          "signature": "Segment -\u003e Segment -\u003e Maybe Point",
          "source": "src/Graphics-Curves-Math.html#intersectLineSegment",
          "type": "function"
        },
        "index": {
          "description": "Compute the intersection point of line and segment if any",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "intersectLineSegment",
          "normalized": "Segment-\u003eSegment-\u003eMaybe Point",
          "package": "curves",
          "partial": "Line Segment",
          "signature": "Segment-\u003eSegment-\u003eMaybe Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:intersectLineSegment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the intersection point of two segments, if any.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Math",
          "name": "intersectSegment",
          "package": "curves",
          "signature": "Segment -\u003e Segment -\u003e Maybe Point",
          "source": "src/Graphics-Curves-Math.html#intersectSegment",
          "type": "function"
        },
        "index": {
          "description": "Compute the intersection point of two segments if any",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "intersectSegment",
          "normalized": "Segment-\u003eSegment-\u003eMaybe Point",
          "package": "curves",
          "partial": "Segment",
          "signature": "Segment-\u003eSegment-\u003eMaybe Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:intersectSegment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs a point to the left of a line segment, as seen from the start of the\n   segment looking a the end?\n\u003c/p\u003e",
          "module": "Graphics.Curves.Math",
          "name": "leftOf",
          "package": "curves",
          "signature": "Point -\u003e Segment -\u003e Bool",
          "source": "src/Graphics-Curves-Math.html#leftOf",
          "type": "function"
        },
        "index": {
          "description": "Is point to the left of line segment as seen from the start of the segment looking the end",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "leftOf",
          "normalized": "Point-\u003eSegment-\u003eBool",
          "package": "curves",
          "partial": "Of",
          "signature": "Point-\u003eSegment-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:leftOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalize a vector.\n\u003c/p\u003e\u003cpre\u003e norm v = v / abs v\n\u003c/pre\u003e",
          "module": "Graphics.Curves.Math",
          "name": "norm",
          "package": "curves",
          "signature": "Vec -\u003e Vec",
          "source": "src/Graphics-Curves-Math.html#norm",
          "type": "function"
        },
        "index": {
          "description": "Normalize vector norm abs",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "norm",
          "normalized": "Vec-\u003eVec",
          "package": "curves",
          "signature": "Vec-\u003eVec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:norm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Math",
          "name": "origin",
          "package": "curves",
          "signature": "Point",
          "source": "src/Graphics-Curves-Math.html#Basis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "origin",
          "package": "curves",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:origin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate a vector 90 degrees counterclockwise.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Math",
          "name": "rot90",
          "package": "curves",
          "signature": "Vec -\u003e Vec",
          "source": "src/Graphics-Curves-Math.html#rot90",
          "type": "function"
        },
        "index": {
          "description": "Rotate vector degrees counterclockwise",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "rot90",
          "normalized": "Vec-\u003eVec",
          "package": "curves",
          "signature": "Vec-\u003eVec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:rot90"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate an object counterclockwise around the origin.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Math",
          "name": "rotate",
          "package": "curves",
          "signature": "Scalar -\u003e a -\u003e a",
          "source": "src/Graphics-Curves-Math.html#rotate",
          "type": "function"
        },
        "index": {
          "description": "Rotate an object counterclockwise around the origin",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "rotate",
          "normalized": "Scalar-\u003ea-\u003ea",
          "package": "curves",
          "signature": "Scalar-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate an object counterclockwise around a given point.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Math",
          "name": "rotateAround",
          "package": "curves",
          "signature": "Point -\u003e Scalar -\u003e a -\u003e a",
          "source": "src/Graphics-Curves-Math.html#rotateAround",
          "type": "function"
        },
        "index": {
          "description": "Rotate an object counterclockwise around given point",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "rotateAround",
          "normalized": "Point-\u003eScalar-\u003ea-\u003ea",
          "package": "curves",
          "partial": "Around",
          "signature": "Point-\u003eScalar-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:rotateAround"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e scale v = transform (* v)\n\u003c/pre\u003e",
          "module": "Graphics.Curves.Math",
          "name": "scale",
          "package": "curves",
          "signature": "Vec -\u003e a -\u003e a",
          "source": "src/Graphics-Curves-Math.html#scale",
          "type": "function"
        },
        "index": {
          "description": "scale transform",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "scale",
          "normalized": "Vec-\u003ea-\u003ea",
          "package": "curves",
          "signature": "Vec-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale using a given point as the center.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Math",
          "name": "scaleFrom",
          "package": "curves",
          "signature": "Point -\u003e Vec -\u003e a -\u003e a",
          "source": "src/Graphics-Curves-Math.html#scaleFrom",
          "type": "function"
        },
        "index": {
          "description": "Scale using given point as the center",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "scaleFrom",
          "normalized": "Point-\u003eVec-\u003ea-\u003ea",
          "package": "curves",
          "partial": "From",
          "signature": "Point-\u003eVec-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:scaleFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe length of a segment.\n\u003c/p\u003e\u003cpre\u003e segmentLength (Seg p q) = distance p q\n\u003c/pre\u003e",
          "module": "Graphics.Curves.Math",
          "name": "segmentLength",
          "package": "curves",
          "signature": "Segment -\u003e Scalar",
          "source": "src/Graphics-Curves-Math.html#segmentLength",
          "type": "function"
        },
        "index": {
          "description": "The length of segment segmentLength Seg distance",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "segmentLength",
          "normalized": "Segment-\u003eScalar",
          "package": "curves",
          "partial": "Length",
          "signature": "Segment-\u003eScalar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:segmentLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe square of the distance from an \u003ccode\u003ea\u003c/code\u003e to a point. Default implementation:\n\u003c/p\u003e\u003cpre\u003e squareDistance x p = distance x p ^ 2\n\u003c/pre\u003e",
          "module": "Graphics.Curves.Math",
          "name": "squareDistance",
          "package": "curves",
          "signature": "a -\u003e Point -\u003e Scalar",
          "source": "src/Graphics-Curves-Math.html#squareDistance",
          "type": "method"
        },
        "index": {
          "description": "The square of the distance from an to point Default implementation squareDistance distance",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "squareDistance",
          "normalized": "a-\u003ePoint-\u003eScalar",
          "package": "curves",
          "partial": "Distance",
          "signature": "a-\u003ePoint-\u003eScalar",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:squareDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe square length of a segment. Avoids computing a square root.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Math",
          "name": "squareSegmentLength",
          "package": "curves",
          "signature": "Segment -\u003e Scalar",
          "source": "src/Graphics-Curves-Math.html#squareSegmentLength",
          "type": "function"
        },
        "index": {
          "description": "The square length of segment Avoids computing square root",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "squareSegmentLength",
          "normalized": "Segment-\u003eScalar",
          "package": "curves",
          "partial": "Segment Length",
          "signature": "Segment-\u003eScalar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:squareSegmentLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a transformation to all points in an object.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Math",
          "name": "transform",
          "package": "curves",
          "signature": "(Point -\u003e Point) -\u003e a -\u003e a",
          "source": "src/Graphics-Curves-Math.html#transform",
          "type": "method"
        },
        "index": {
          "description": "Apply transformation to all points in an object",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "transform",
          "normalized": "(Point-\u003ePoint)-\u003ea-\u003ea",
          "package": "curves",
          "signature": "(Point-\u003ePoint)-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e translate v = transform (+ v)\n\u003c/pre\u003e",
          "module": "Graphics.Curves.Math",
          "name": "translate",
          "package": "curves",
          "signature": "Vec -\u003e a -\u003e a",
          "source": "src/Graphics-Curves-Math.html#translate",
          "type": "function"
        },
        "index": {
          "description": "translate transform",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "translate",
          "normalized": "Vec-\u003ea-\u003ea",
          "package": "curves",
          "signature": "Vec-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:translate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003eunitX = Vec 1 0\u003c/pre\u003e",
          "module": "Graphics.Curves.Math",
          "name": "unitX",
          "package": "curves",
          "signature": "Vec",
          "source": "src/Graphics-Curves-Math.html#unitX",
          "type": "function"
        },
        "index": {
          "description": "unitX Vec",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "unitX",
          "package": "curves",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:unitX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003eunitY = Vec 0 1\u003c/pre\u003e",
          "module": "Graphics.Curves.Math",
          "name": "unitY",
          "package": "curves",
          "signature": "Vec",
          "source": "src/Graphics-Curves-Math.html#unitY",
          "type": "function"
        },
        "index": {
          "description": "unitY Vec",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "unitY",
          "package": "curves",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:unitY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003evcurry f x y = f (Vec x y)\u003c/pre\u003e",
          "module": "Graphics.Curves.Math",
          "name": "vcurry",
          "package": "curves",
          "signature": "(Vec -\u003e a) -\u003e Scalar -\u003e Scalar -\u003e a",
          "source": "src/Graphics-Curves-Math.html#vcurry",
          "type": "function"
        },
        "index": {
          "description": "vcurry Vec",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "vcurry",
          "normalized": "(Vec-\u003ea)-\u003eScalar-\u003eScalar-\u003ea",
          "package": "curves",
          "signature": "(Vec-\u003ea)-\u003eScalar-\u003eScalar-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:vcurry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to the coordinates of a vector.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Math",
          "name": "vmap",
          "package": "curves",
          "signature": "(Scalar -\u003e Scalar) -\u003e Vec -\u003e Vec",
          "source": "src/Graphics-Curves-Math.html#vmap",
          "type": "function"
        },
        "index": {
          "description": "Apply function to the coordinates of vector",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "vmap",
          "normalized": "(Scalar-\u003eScalar)-\u003eVec-\u003eVec",
          "package": "curves",
          "signature": "(Scalar-\u003eScalar)-\u003eVec-\u003eVec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:vmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003evuncurry f (Vec x y) = f x y\u003c/pre\u003e",
          "module": "Graphics.Curves.Math",
          "name": "vuncurry",
          "package": "curves",
          "signature": "(Scalar -\u003e Scalar -\u003e a) -\u003e Vec -\u003e a",
          "source": "src/Graphics-Curves-Math.html#vuncurry",
          "type": "function"
        },
        "index": {
          "description": "vuncurry Vec",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "vuncurry",
          "normalized": "(Scalar-\u003eScalar-\u003ea)-\u003eVec-\u003ea",
          "package": "curves",
          "signature": "(Scalar-\u003eScalar-\u003ea)-\u003eVec-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:vuncurry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePoint-wise lifting of an operator on coordinates.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Math",
          "name": "vzip",
          "package": "curves",
          "signature": "(Scalar -\u003e Scalar -\u003e Scalar) -\u003e Vec -\u003e Vec -\u003e Vec",
          "source": "src/Graphics-Curves-Math.html#vzip",
          "type": "function"
        },
        "index": {
          "description": "Point-wise lifting of an operator on coordinates",
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "vzip",
          "normalized": "(Scalar-\u003eScalar-\u003eScalar)-\u003eVec-\u003eVec-\u003eVec",
          "package": "curves",
          "signature": "(Scalar-\u003eScalar-\u003eScalar)-\u003eVec-\u003eVec-\u003eVec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:vzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Math",
          "name": "xUnit",
          "package": "curves",
          "signature": "Point",
          "source": "src/Graphics-Curves-Math.html#Basis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "xUnit",
          "package": "curves",
          "partial": "Unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:xUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Math",
          "name": "yUnit",
          "package": "curves",
          "signature": "Point",
          "source": "src/Graphics-Curves-Math.html#Basis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Math",
          "module": "Graphics.Curves.Math",
          "name": "yUnit",
          "package": "curves",
          "partial": "Unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Math.html#v:yUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains functions to render text using fonts specified in the\n    \u003ca\u003eSVG format\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Curves.SVG.Font",
          "name": "Font",
          "package": "curves",
          "source": "src/Graphics-Curves-SVG-Font.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains functions to render text using fonts specified in the SVG format",
          "hierarchy": "Graphics Curves SVG Font",
          "module": "Graphics.Curves.SVG.Font",
          "name": "Font",
          "package": "curves",
          "partial": "Font",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-SVG-Font.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContains all the data necessary to render text.\n\u003c/p\u003e",
          "module": "Graphics.Curves.SVG.Font",
          "name": "SVGFont",
          "package": "curves",
          "source": "src/Graphics-Curves-SVG-Font.html#SVGFont",
          "type": "data"
        },
        "index": {
          "description": "Contains all the data necessary to render text",
          "hierarchy": "Graphics Curves SVG Font",
          "module": "Graphics.Curves.SVG.Font",
          "name": "SVGFont",
          "package": "curves",
          "partial": "SVGFont",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-SVG-Font.html#t:SVGFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a string in the given font. The text starts at the origin and is\n   scaled to make upper case letters 1 unit high.\n\u003c/p\u003e",
          "module": "Graphics.Curves.SVG.Font",
          "name": "drawString",
          "package": "curves",
          "signature": "SVGFont -\u003e String -\u003e Image",
          "source": "src/Graphics-Curves-SVG-Font.html#drawString",
          "type": "function"
        },
        "index": {
          "description": "Render string in the given font The text starts at the origin and is scaled to make upper case letters unit high",
          "hierarchy": "Graphics Curves SVG Font",
          "module": "Graphics.Curves.SVG.Font",
          "name": "drawString",
          "normalized": "SVGFont-\u003eString-\u003eImage",
          "package": "curves",
          "partial": "String",
          "signature": "SVGFont-\u003eString-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-SVG-Font.html#v:drawString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a font from an SVG file.\n\u003c/p\u003e",
          "module": "Graphics.Curves.SVG.Font",
          "name": "loadFont",
          "package": "curves",
          "signature": "FilePath -\u003e IO SVGFont",
          "source": "src/Graphics-Curves-SVG-Font.html#loadFont",
          "type": "function"
        },
        "index": {
          "description": "Read font from an SVG file",
          "hierarchy": "Graphics Curves SVG Font",
          "module": "Graphics.Curves.SVG.Font",
          "name": "loadFont",
          "normalized": "FilePath-\u003eIO SVGFont",
          "package": "curves",
          "partial": "Font",
          "signature": "FilePath-\u003eIO SVGFont",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-SVG-Font.html#v:loadFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.SVG.Path",
          "name": "Path",
          "package": "curves",
          "source": "src/Graphics-Curves-SVG-Path.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics Curves SVG Path",
          "module": "Graphics.Curves.SVG.Path",
          "name": "Path",
          "package": "curves",
          "partial": "Path",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-SVG-Path.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePath commands can use absolute or relative coordinates.\n\u003c/p\u003e",
          "module": "Graphics.Curves.SVG.Path",
          "name": "CoordType",
          "package": "curves",
          "source": "src/Graphics-Curves-SVG-Path.html#CoordType",
          "type": "data"
        },
        "index": {
          "description": "Path commands can use absolute or relative coordinates",
          "hierarchy": "Graphics Curves SVG Path",
          "module": "Graphics.Curves.SVG.Path",
          "name": "CoordType",
          "package": "curves",
          "partial": "Coord Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-SVG-Path.html#t:CoordType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA path is a sequence of path commands.\n\u003c/p\u003e",
          "module": "Graphics.Curves.SVG.Path",
          "name": "Path",
          "package": "curves",
          "source": "src/Graphics-Curves-SVG-Path.html#Path",
          "type": "type"
        },
        "index": {
          "description": "path is sequence of path commands",
          "hierarchy": "Graphics Curves SVG Path",
          "module": "Graphics.Curves.SVG.Path",
          "name": "Path",
          "package": "curves",
          "partial": "Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-SVG-Path.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe path commands specified by \u003ca\u003ehttp://www.w3.org/TR/SVG/paths.html#PathData\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Curves.SVG.Path",
          "name": "PathCmd",
          "package": "curves",
          "source": "src/Graphics-Curves-SVG-Path.html#PathCmd",
          "type": "data"
        },
        "index": {
          "description": "The path commands specified by http www.w3.org TR SVG paths.html PathData",
          "hierarchy": "Graphics Curves SVG Path",
          "module": "Graphics.Curves.SVG.Path",
          "name": "PathCmd",
          "package": "curves",
          "partial": "Path Cmd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-SVG-Path.html#t:PathCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.SVG.Path",
          "name": "Absolute",
          "package": "curves",
          "signature": "Absolute",
          "source": "src/Graphics-Curves-SVG-Path.html#CoordType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves SVG Path",
          "module": "Graphics.Curves.SVG.Path",
          "name": "Absolute",
          "package": "curves",
          "partial": "Absolute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-SVG-Path.html#v:Absolute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.SVG.Path",
          "name": "ArcTo",
          "package": "curves",
          "signature": "ArcTo CoordType Vec Scalar Bool Bool Point",
          "source": "src/Graphics-Curves-SVG-Path.html#PathCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves SVG Path",
          "module": "Graphics.Curves.SVG.Path",
          "name": "ArcTo",
          "package": "curves",
          "partial": "Arc To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-SVG-Path.html#v:ArcTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enumber of points = degree of the B&#233;zier curve\n\u003c/p\u003e",
          "module": "Graphics.Curves.SVG.Path",
          "name": "BezierTo",
          "package": "curves",
          "signature": "BezierTo CoordType [Point]",
          "source": "src/Graphics-Curves-SVG-Path.html#PathCmd",
          "type": "function"
        },
        "index": {
          "description": "number of points degree of the zier curve",
          "hierarchy": "Graphics Curves SVG Path",
          "module": "Graphics.Curves.SVG.Path",
          "name": "BezierTo",
          "normalized": "BezierTo CoordType[Point]",
          "package": "curves",
          "partial": "Bezier To",
          "signature": "BezierTo CoordType[Point]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-SVG-Path.html#v:BezierTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.SVG.Path",
          "name": "ClosePath",
          "package": "curves",
          "signature": "ClosePath",
          "source": "src/Graphics-Curves-SVG-Path.html#PathCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves SVG Path",
          "module": "Graphics.Curves.SVG.Path",
          "name": "ClosePath",
          "package": "curves",
          "partial": "Close Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-SVG-Path.html#v:ClosePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.SVG.Path",
          "name": "HorLineTo",
          "package": "curves",
          "signature": "HorLineTo CoordType Scalar",
          "source": "src/Graphics-Curves-SVG-Path.html#PathCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves SVG Path",
          "module": "Graphics.Curves.SVG.Path",
          "name": "HorLineTo",
          "package": "curves",
          "partial": "Hor Line To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-SVG-Path.html#v:HorLineTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.SVG.Path",
          "name": "LineTo",
          "package": "curves",
          "signature": "LineTo CoordType Point",
          "source": "src/Graphics-Curves-SVG-Path.html#PathCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves SVG Path",
          "module": "Graphics.Curves.SVG.Path",
          "name": "LineTo",
          "package": "curves",
          "partial": "Line To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-SVG-Path.html#v:LineTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.SVG.Path",
          "name": "MoveTo",
          "package": "curves",
          "signature": "MoveTo CoordType Point",
          "source": "src/Graphics-Curves-SVG-Path.html#PathCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves SVG Path",
          "module": "Graphics.Curves.SVG.Path",
          "name": "MoveTo",
          "package": "curves",
          "partial": "Move To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-SVG-Path.html#v:MoveTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.SVG.Path",
          "name": "Relative",
          "package": "curves",
          "signature": "Relative",
          "source": "src/Graphics-Curves-SVG-Path.html#CoordType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves SVG Path",
          "module": "Graphics.Curves.SVG.Path",
          "name": "Relative",
          "package": "curves",
          "partial": "Relative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-SVG-Path.html#v:Relative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efirst control point is\n the mirror of the\n previous control point\n\u003c/p\u003e",
          "module": "Graphics.Curves.SVG.Path",
          "name": "SmoothBezierTo",
          "package": "curves",
          "signature": "SmoothBezierTo CoordType [Point]",
          "source": "src/Graphics-Curves-SVG-Path.html#PathCmd",
          "type": "function"
        },
        "index": {
          "description": "first control point is the mirror of the previous control point",
          "hierarchy": "Graphics Curves SVG Path",
          "module": "Graphics.Curves.SVG.Path",
          "name": "SmoothBezierTo",
          "normalized": "SmoothBezierTo CoordType[Point]",
          "package": "curves",
          "partial": "Smooth Bezier To",
          "signature": "SmoothBezierTo CoordType[Point]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-SVG-Path.html#v:SmoothBezierTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.SVG.Path",
          "name": "VerLineTo",
          "package": "curves",
          "signature": "VerLineTo CoordType Scalar",
          "source": "src/Graphics-Curves-SVG-Path.html#PathCmd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves SVG Path",
          "module": "Graphics.Curves.SVG.Path",
          "name": "VerLineTo",
          "package": "curves",
          "partial": "Ver Line To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-SVG-Path.html#v:VerLineTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a path.\n\u003c/p\u003e",
          "module": "Graphics.Curves.SVG.Path",
          "name": "drawPath",
          "package": "curves",
          "signature": "Path -\u003e Image",
          "source": "src/Graphics-Curves-SVG-Path.html#drawPath",
          "type": "function"
        },
        "index": {
          "description": "Render path",
          "hierarchy": "Graphics Curves SVG Path",
          "module": "Graphics.Curves.SVG.Path",
          "name": "drawPath",
          "normalized": "Path-\u003eImage",
          "package": "curves",
          "partial": "Path",
          "signature": "Path-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-SVG-Path.html#v:drawPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a path string.\n\u003c/p\u003e",
          "module": "Graphics.Curves.SVG.Path",
          "name": "parsePath",
          "package": "curves",
          "signature": "String -\u003e Path",
          "source": "src/Graphics-Curves-SVG-Path.html#parsePath",
          "type": "function"
        },
        "index": {
          "description": "Read path string",
          "hierarchy": "Graphics Curves SVG Path",
          "module": "Graphics.Curves.SVG.Path",
          "name": "parsePath",
          "normalized": "String-\u003ePath",
          "package": "curves",
          "partial": "Path",
          "signature": "String-\u003ePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-SVG-Path.html#v:parsePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Style",
          "name": "Style",
          "package": "curves",
          "source": "src/Graphics-Curves-Style.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics Curves Style",
          "module": "Graphics.Curves.Style",
          "name": "Style",
          "package": "curves",
          "partial": "Style",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Style.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStyle attributes of a curve. The line width is with width in pixels of the\n solid part of the curve. Outside the line width the curve fades to\n full transparency in a band whose width is determined by the line blur\n attribute.  All line attributes can be parameterized by the absolute (in\n pixels) and relative distance from the start of the curve.\n\u003c/p\u003e\u003cp\u003eA set of closed curves combined with \u003ccode\u003e\u003ca\u003e+++\u003c/a\u003e\u003c/code\u003e\n can be filled using a fill colour (\u003ccode\u003e\u003ca\u003etransparent\u003c/a\u003e\u003c/code\u003e for no fill). A point is\n deemed inside the curves if a ray starting at the point intersects with the\n curves an odd number of times. The fill blur is the width of the band around\n the curve edge in which the fill colour fades to full transparency.  Setting\n the fill colour of a non-closed curve results in unspecified behaviour.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Style",
          "name": "CurveAttribute",
          "package": "curves",
          "source": "src/Graphics-Curves-Curve.html#CurveAttribute",
          "type": "data"
        },
        "index": {
          "description": "Style attributes of curve The line width is with width in pixels of the solid part of the curve Outside the line width the curve fades to full transparency in band whose width is determined by the line blur attribute All line attributes can be parameterized by the absolute in pixels and relative distance from the start of the curve set of closed curves combined with can be filled using fill colour transparent for no fill point is deemed inside the curves if ray starting at the point intersects with the curves an odd number of times The fill blur is the width of the band around the curve edge in which the fill colour fades to full transparency Setting the fill colour of non-closed curve results in unspecified behaviour",
          "hierarchy": "Graphics Curves Style",
          "module": "Graphics.Curves.Style",
          "name": "CurveAttribute",
          "package": "curves",
          "partial": "Curve Attribute",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Style.html#t:CurveAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA style is a list of attribute assignments.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Style",
          "name": "Style",
          "package": "curves",
          "source": "src/Graphics-Curves-Style.html#Style",
          "type": "type"
        },
        "index": {
          "description": "style is list of attribute assignments",
          "hierarchy": "Graphics Curves Style",
          "module": "Graphics.Curves.Style",
          "name": "Style",
          "package": "curves",
          "partial": "Style",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Style.html#t:Style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Style",
          "name": "FillBlur",
          "package": "curves",
          "signature": "CurveAttribute Scalar",
          "source": "src/Graphics-Curves-Curve.html#CurveAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Style",
          "module": "Graphics.Curves.Style",
          "name": "FillBlur",
          "package": "curves",
          "partial": "Fill Blur",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Style.html#v:FillBlur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Style",
          "name": "FillColour",
          "package": "curves",
          "signature": "CurveAttribute Colour",
          "source": "src/Graphics-Curves-Curve.html#CurveAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Style",
          "module": "Graphics.Curves.Style",
          "name": "FillColour",
          "package": "curves",
          "partial": "Fill Colour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Style.html#v:FillColour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Style",
          "name": "LineBlur",
          "package": "curves",
          "signature": "CurveAttribute Scalar",
          "source": "src/Graphics-Curves-Curve.html#CurveAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Style",
          "module": "Graphics.Curves.Style",
          "name": "LineBlur",
          "package": "curves",
          "partial": "Line Blur",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Style.html#v:LineBlur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Style",
          "name": "LineColour",
          "package": "curves",
          "signature": "CurveAttribute Colour",
          "source": "src/Graphics-Curves-Curve.html#CurveAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Style",
          "module": "Graphics.Curves.Style",
          "name": "LineColour",
          "package": "curves",
          "partial": "Line Colour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Style.html#v:LineColour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Style",
          "name": "LineWidth",
          "package": "curves",
          "signature": "CurveAttribute Scalar",
          "source": "src/Graphics-Curves-Curve.html#CurveAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Style",
          "module": "Graphics.Curves.Style",
          "name": "LineWidth",
          "package": "curves",
          "partial": "Line Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Style.html#v:LineWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Style",
          "name": "VarLineBlur",
          "package": "curves",
          "signature": "CurveAttribute (Scalar -\u003e Scalar -\u003e Scalar)",
          "source": "src/Graphics-Curves-Curve.html#CurveAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Style",
          "module": "Graphics.Curves.Style",
          "name": "VarLineBlur",
          "normalized": "CurveAttribute(Scalar-\u003eScalar-\u003eScalar)",
          "package": "curves",
          "partial": "Var Line Blur",
          "signature": "CurveAttribute(Scalar-\u003eScalar-\u003eScalar)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Style.html#v:VarLineBlur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Style",
          "name": "VarLineColour",
          "package": "curves",
          "signature": "CurveAttribute (Scalar -\u003e Scalar -\u003e Colour)",
          "source": "src/Graphics-Curves-Curve.html#CurveAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Style",
          "module": "Graphics.Curves.Style",
          "name": "VarLineColour",
          "normalized": "CurveAttribute(Scalar-\u003eScalar-\u003eColour)",
          "package": "curves",
          "partial": "Var Line Colour",
          "signature": "CurveAttribute(Scalar-\u003eScalar-\u003eColour)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Style.html#v:VarLineColour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Style",
          "name": "VarLineWidth",
          "package": "curves",
          "signature": "CurveAttribute (Scalar -\u003e Scalar -\u003e Scalar)",
          "source": "src/Graphics-Curves-Curve.html#CurveAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Style",
          "module": "Graphics.Curves.Style",
          "name": "VarLineWidth",
          "normalized": "CurveAttribute(Scalar-\u003eScalar-\u003eScalar)",
          "package": "curves",
          "partial": "Var Line Width",
          "signature": "CurveAttribute(Scalar-\u003eScalar-\u003eScalar)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Style.html#v:VarLineWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDynamic line width style that tapers off at the end points. First argument\n   is maximum width and the second the length of the tapering off part.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Style",
          "name": "brushStyle",
          "package": "curves",
          "signature": "Scalar -\u003e Scalar -\u003e Style",
          "source": "src/Graphics-Curves-Style.html#brushStyle",
          "type": "function"
        },
        "index": {
          "description": "Dynamic line width style that tapers off at the end points First argument is maximum width and the second the length of the tapering off part",
          "hierarchy": "Graphics Curves Style",
          "module": "Graphics.Curves.Style",
          "name": "brushStyle",
          "normalized": "Scalar-\u003eScalar-\u003eStyle",
          "package": "curves",
          "partial": "Style",
          "signature": "Scalar-\u003eScalar-\u003eStyle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Style.html#v:brushStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA dashed line style. The first argument is the lengths (in pixels) of the\n   dashes and the second argument of the gaps.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Style",
          "name": "dashed",
          "package": "curves",
          "signature": "Scalar -\u003e Scalar -\u003e Style",
          "source": "src/Graphics-Curves-Style.html#dashed",
          "type": "function"
        },
        "index": {
          "description": "dashed line style The first argument is the lengths in pixels of the dashes and the second argument of the gaps",
          "hierarchy": "Graphics Curves Style",
          "module": "Graphics.Curves.Style",
          "name": "dashed",
          "normalized": "Scalar-\u003eScalar-\u003eStyle",
          "package": "curves",
          "signature": "Scalar-\u003eScalar-\u003eStyle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Style.html#v:dashed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA dashed line style. The first argument is the approximate length (in\n   pixels) of the dashes and the second argument of the gaps. The lengths are\n   adjusted to make the curve always end in a gap so closed curves have a\n   smooth transition where the end of the curve meets the start.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Style",
          "name": "dashedClosed",
          "package": "curves",
          "signature": "Scalar -\u003e Scalar -\u003e Style",
          "source": "src/Graphics-Curves-Style.html#dashedClosed",
          "type": "function"
        },
        "index": {
          "description": "dashed line style The first argument is the approximate length in pixels of the dashes and the second argument of the gaps The lengths are adjusted to make the curve always end in gap so closed curves have smooth transition where the end of the curve meets the start",
          "hierarchy": "Graphics Curves Style",
          "module": "Graphics.Curves.Style",
          "name": "dashedClosed",
          "normalized": "Scalar-\u003eScalar-\u003eStyle",
          "package": "curves",
          "partial": "Closed",
          "signature": "Scalar-\u003eScalar-\u003eStyle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Style.html#v:dashedClosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA dashed line style. The first argument is the approximate length (in\n   pixels) of the dashes and the second argument of the gaps. The lengths are\n   adjusted to make the curve always end in a dash.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Style",
          "name": "dashedOpen",
          "package": "curves",
          "signature": "Scalar -\u003e Scalar -\u003e Style",
          "source": "src/Graphics-Curves-Style.html#dashedOpen",
          "type": "function"
        },
        "index": {
          "description": "dashed line style The first argument is the approximate length in pixels of the dashes and the second argument of the gaps The lengths are adjusted to make the curve always end in dash",
          "hierarchy": "Graphics Curves Style",
          "module": "Graphics.Curves.Style",
          "name": "dashedOpen",
          "normalized": "Scalar-\u003eScalar-\u003eStyle",
          "package": "curves",
          "partial": "Open",
          "signature": "Scalar-\u003eScalar-\u003eStyle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Style.html#v:dashedOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSetting the fill blur and colour.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Style",
          "name": "fillStyle",
          "package": "curves",
          "signature": "Scalar -\u003e Colour -\u003e Style",
          "source": "src/Graphics-Curves-Style.html#fillStyle",
          "type": "function"
        },
        "index": {
          "description": "Setting the fill blur and colour",
          "hierarchy": "Graphics Curves Style",
          "module": "Graphics.Curves.Style",
          "name": "fillStyle",
          "normalized": "Scalar-\u003eColour-\u003eStyle",
          "package": "curves",
          "partial": "Style",
          "signature": "Scalar-\u003eColour-\u003eStyle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Style.html#v:fillStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFade from the first to the second colour and then back. The third argument\n in the distance in pixels it takes to reach the second colour.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Style",
          "name": "gradient",
          "package": "curves",
          "signature": "Colour -\u003e Colour -\u003e Scalar -\u003e Style",
          "source": "src/Graphics-Curves-Style.html#gradient",
          "type": "function"
        },
        "index": {
          "description": "Fade from the first to the second colour and then back The third argument in the distance in pixels it takes to reach the second colour",
          "hierarchy": "Graphics Curves Style",
          "module": "Graphics.Curves.Style",
          "name": "gradient",
          "normalized": "Colour-\u003eColour-\u003eScalar-\u003eStyle",
          "package": "curves",
          "signature": "Colour-\u003eColour-\u003eScalar-\u003eStyle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Style.html#v:gradient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSetting the line width, blur and colour.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Style",
          "name": "lineStyle",
          "package": "curves",
          "signature": "Scalar -\u003e Scalar -\u003e Colour -\u003e Style",
          "source": "src/Graphics-Curves-Style.html#lineStyle",
          "type": "function"
        },
        "index": {
          "description": "Setting the line width blur and colour",
          "hierarchy": "Graphics Curves Style",
          "module": "Graphics.Curves.Style",
          "name": "lineStyle",
          "normalized": "Scalar-\u003eScalar-\u003eColour-\u003eStyle",
          "package": "curves",
          "partial": "Style",
          "signature": "Scalar-\u003eScalar-\u003eColour-\u003eStyle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Style.html#v:lineStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Liberation font from \u003ca\u003ehttps://fedorahosted.org/liberation-fonts\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Curves.Text.Fonts.Liberation",
          "name": "Liberation",
          "package": "curves",
          "source": "src/Graphics-Curves-Text-Fonts-Liberation.html",
          "type": "module"
        },
        "index": {
          "description": "The Liberation font from https fedorahosted.org liberation-fonts",
          "hierarchy": "Graphics Curves Text Fonts Liberation",
          "module": "Graphics.Curves.Text.Fonts.Liberation",
          "name": "Liberation",
          "package": "curves",
          "partial": "Liberation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Text-Fonts-Liberation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Text.Fonts.Liberation",
          "name": "FontStyle",
          "package": "curves",
          "source": "src/Graphics-Curves-Text-Fonts-Liberation.html#FontStyle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Curves Text Fonts Liberation",
          "module": "Graphics.Curves.Text.Fonts.Liberation",
          "name": "FontStyle",
          "package": "curves",
          "partial": "Font Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Text-Fonts-Liberation.html#t:FontStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Text.Fonts.Liberation",
          "name": "Modifier",
          "package": "curves",
          "source": "src/Graphics-Curves-Text-Fonts-Liberation.html#Modifier",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Curves Text Fonts Liberation",
          "module": "Graphics.Curves.Text.Fonts.Liberation",
          "name": "Modifier",
          "package": "curves",
          "partial": "Modifier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Text-Fonts-Liberation.html#t:Modifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Text.Fonts.Liberation",
          "name": "Bold",
          "package": "curves",
          "signature": "Bold",
          "source": "src/Graphics-Curves-Text-Fonts-Liberation.html#Modifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Text Fonts Liberation",
          "module": "Graphics.Curves.Text.Fonts.Liberation",
          "name": "Bold",
          "package": "curves",
          "partial": "Bold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Text-Fonts-Liberation.html#v:Bold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Text.Fonts.Liberation",
          "name": "Italic",
          "package": "curves",
          "signature": "Italic",
          "source": "src/Graphics-Curves-Text-Fonts-Liberation.html#Modifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Text Fonts Liberation",
          "module": "Graphics.Curves.Text.Fonts.Liberation",
          "name": "Italic",
          "package": "curves",
          "partial": "Italic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Text-Fonts-Liberation.html#v:Italic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Text.Fonts.Liberation",
          "name": "Mono",
          "package": "curves",
          "signature": "Mono",
          "source": "src/Graphics-Curves-Text-Fonts-Liberation.html#FontStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Text Fonts Liberation",
          "module": "Graphics.Curves.Text.Fonts.Liberation",
          "name": "Mono",
          "package": "curves",
          "partial": "Mono",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Text-Fonts-Liberation.html#v:Mono"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Text.Fonts.Liberation",
          "name": "Sans",
          "package": "curves",
          "signature": "Sans",
          "source": "src/Graphics-Curves-Text-Fonts-Liberation.html#FontStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Text Fonts Liberation",
          "module": "Graphics.Curves.Text.Fonts.Liberation",
          "name": "Sans",
          "package": "curves",
          "partial": "Sans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Text-Fonts-Liberation.html#v:Sans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Text.Fonts.Liberation",
          "name": "Serif",
          "package": "curves",
          "signature": "Serif",
          "source": "src/Graphics-Curves-Text-Fonts-Liberation.html#FontStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Text Fonts Liberation",
          "module": "Graphics.Curves.Text.Fonts.Liberation",
          "name": "Serif",
          "package": "curves",
          "partial": "Serif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Text-Fonts-Liberation.html#v:Serif"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Text.Fonts.Liberation",
          "name": "liberation",
          "package": "curves",
          "signature": "FontStyle -\u003e [Modifier] -\u003e SVGFont",
          "source": "src/Graphics-Curves-Text-Fonts-Liberation.html#liberation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Text Fonts Liberation",
          "module": "Graphics.Curves.Text.Fonts.Liberation",
          "name": "liberation",
          "normalized": "FontStyle-\u003e[Modifier]-\u003eSVGFont",
          "package": "curves",
          "signature": "FontStyle-\u003e[Modifier]-\u003eSVGFont",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Text-Fonts-Liberation.html#v:liberation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple (ugly) hand-crafted text. See \u003ca\u003eGraphics.Curves.SVG.Font\u003c/a\u003e for prettier\n    text.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Curves.Text",
          "name": "Text",
          "package": "curves",
          "source": "src/Graphics-Curves-Text.html",
          "type": "module"
        },
        "index": {
          "description": "Simple ugly hand-crafted text See Graphics.Curves.SVG.Font for prettier text",
          "hierarchy": "Graphics Curves Text",
          "module": "Graphics.Curves.Text",
          "name": "Text",
          "package": "curves",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Text",
          "name": "Alignment",
          "package": "curves",
          "source": "src/Graphics-Curves-Text.html#Alignment",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Curves Text",
          "module": "Graphics.Curves.Text",
          "name": "Alignment",
          "package": "curves",
          "partial": "Alignment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Text.html#t:Alignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Text",
          "name": "CenterAlign",
          "package": "curves",
          "signature": "CenterAlign",
          "source": "src/Graphics-Curves-Text.html#Alignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Text",
          "module": "Graphics.Curves.Text",
          "name": "CenterAlign",
          "package": "curves",
          "partial": "Center Align",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Text.html#v:CenterAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Text",
          "name": "LeftAlign",
          "package": "curves",
          "signature": "LeftAlign",
          "source": "src/Graphics-Curves-Text.html#Alignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Text",
          "module": "Graphics.Curves.Text",
          "name": "LeftAlign",
          "package": "curves",
          "partial": "Left Align",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Text.html#v:LeftAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Curves.Text",
          "name": "RightAlign",
          "package": "curves",
          "signature": "RightAlign",
          "source": "src/Graphics-Curves-Text.html#Alignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Curves Text",
          "module": "Graphics.Curves.Text",
          "name": "RightAlign",
          "package": "curves",
          "partial": "Right Align",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Text.html#v:RightAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a string centered at a given point. The second argument specifies the\n   font height in pixels, invariant under scaling.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Text",
          "name": "label",
          "package": "curves",
          "signature": "Point -\u003e Scalar -\u003e String -\u003e Image",
          "source": "src/Graphics-Curves-Text.html#label",
          "type": "function"
        },
        "index": {
          "description": "Draw string centered at given point The second argument specifies the font height in pixels invariant under scaling",
          "hierarchy": "Graphics Curves Text",
          "module": "Graphics.Curves.Text",
          "name": "label",
          "normalized": "Point-\u003eScalar-\u003eString-\u003eImage",
          "package": "curves",
          "signature": "Point-\u003eScalar-\u003eString-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Text.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003estringImage'\u003c/a\u003e\u003c/code\u003e LeftAlign 0.2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Text",
          "name": "stringImage",
          "package": "curves",
          "signature": "String -\u003e Image",
          "source": "src/Graphics-Curves-Text.html#stringImage",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to stringImage LeftAlign",
          "hierarchy": "Graphics Curves Text",
          "module": "Graphics.Curves.Text",
          "name": "stringImage",
          "normalized": "String-\u003eImage",
          "package": "curves",
          "partial": "Image",
          "signature": "String-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Text.html#v:stringImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a string at the origin with the given text alignment. The second\n   argument specifies the spacing between characters. Upper-case letters are\n   2 units high.\n\u003c/p\u003e",
          "module": "Graphics.Curves.Text",
          "name": "stringImage'",
          "package": "curves",
          "signature": "Alignment -\u003e Scalar -\u003e String -\u003e Image",
          "source": "src/Graphics-Curves-Text.html#stringImage%27",
          "type": "function"
        },
        "index": {
          "description": "Draw string at the origin with the given text alignment The second argument specifies the spacing between characters Upper-case letters are units high",
          "hierarchy": "Graphics Curves Text",
          "module": "Graphics.Curves.Text",
          "name": "stringImage'",
          "normalized": "Alignment-\u003eScalar-\u003eString-\u003eImage",
          "package": "curves",
          "partial": "Image'",
          "signature": "Alignment-\u003eScalar-\u003eString-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves-Text.html#v:stringImage-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCurves is an easy to use library for creating images. The basic\n    primitive is a curve, which, in the simplest case, is a continuous function\n    from a \u003ccode\u003e\u003ca\u003eScalar\u003c/a\u003e\u003c/code\u003e parameter to a 2-dimensional \u003ccode\u003e\u003ca\u003ePoint\u003c/a\u003e\u003c/code\u003e on the \u003ccode\u003e\u003ca\u003ecurve\u003c/a\u003e\u003c/code\u003e. Images\n    are rendered (\u003ccode\u003e\u003ca\u003erenderImage\u003c/a\u003e\u003c/code\u003e) as PNG images.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Curves",
          "name": "Curves",
          "package": "curves",
          "source": "src/Graphics-Curves.html",
          "type": "module"
        },
        "index": {
          "description": "Curves is an easy to use library for creating images The basic primitive is curve which in the simplest case is continuous function from Scalar parameter to dimensional Point on the curve Images are rendered renderImage as PNG images",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "Curves",
          "package": "curves",
          "partial": "Curves",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA blend function is used to compute the resulting colour when \u003ccode\u003e\u003ca\u003ecombine\u003c/a\u003e\u003c/code\u003eing\n   two images.\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "BlendFunc",
          "package": "curves",
          "source": "src/Graphics-Curves-Image.html#BlendFunc",
          "type": "type"
        },
        "index": {
          "description": "blend function is used to compute the resulting colour when combine ing two images",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "BlendFunc",
          "package": "curves",
          "partial": "Blend Func",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#t:BlendFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe image type.\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "Image",
          "package": "curves",
          "source": "src/Graphics-Curves-Image.html#Image",
          "type": "data"
        },
        "index": {
          "description": "The image type",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "Image",
          "package": "curves",
          "partial": "Image",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#t:Image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin the right-most curve of the first image to the left-most curve of the\n   second image. The \u003ccode\u003e\u003ca\u003eStyle\u003c/a\u003e\u003c/code\u003e is inherited from the\n   curve of the first image. If the end point of the first curve does not\n   coincide with the starting point of the second curve a straight line is\n   added to connect the two. This combinator is useful when using\n   parameterized line styles (such as \u003ccode\u003e\u003ca\u003edashed\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "(+++)",
          "package": "curves",
          "signature": "Image -\u003e Image -\u003e Image",
          "source": "src/Graphics-Curves-Image.html#%2B%2B%2B",
          "type": "function"
        },
        "index": {
          "description": "Join the right-most curve of the first image to the left-most curve of the second image The Style is inherited from the curve of the first image If the end point of the first curve does not coincide with the starting point of the second curve straight line is added to connect the two This combinator is useful when using parameterized line styles such as dashed",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "(+++) +++",
          "normalized": "Image-\u003eImage-\u003eImage",
          "package": "curves",
          "signature": "Image-\u003eImage-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:-43--43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a point to the right-most curve of an image. \u003ccode\u003ei ++\u003e p\u003c/code\u003e is\n   equivalent to \u003ccode\u003ei \u003ccode\u003e\u003ca\u003e+++\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e q p\u003c/code\u003e if \u003ccode\u003eq\u003c/code\u003e is the end point of the right-most\n   curve of \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "(++\u003e)",
          "package": "curves",
          "signature": "Image -\u003e Point -\u003e Image",
          "source": "src/Graphics-Curves-Image.html#%2B%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "Append point to the right-most curve of an image is equivalent to line if is the end point of the right-most curve of",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "(++\u003e) ++\u003e",
          "normalized": "Image-\u003ePoint-\u003eImage",
          "package": "curves",
          "signature": "Image-\u003ePoint-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:-43--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003e+++\u003c/a\u003e\u003c/code\u003e but doesn't join the end points of the curves.\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "(+.+)",
          "package": "curves",
          "signature": "Image -\u003e Image -\u003e Image",
          "source": "src/Graphics-Curves-Image.html#%2B.%2B",
          "type": "function"
        },
        "index": {
          "description": "Like but doesn join the end points of the curves",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "(+.+) +.+",
          "normalized": "Image-\u003eImage-\u003eImage",
          "package": "curves",
          "signature": "Image-\u003eImage-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:-43-.-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepend a point to the left-most curve of an image. \u003ccode\u003ep \u003c++ i\u003c/code\u003e is equivalent\n   to  \u003ccode\u003e\u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e p q \u003ccode\u003e\u003ca\u003e+++\u003c/a\u003e\u003c/code\u003e i\u003c/code\u003e if \u003ccode\u003eq\u003c/code\u003e is the starting point of the left-most\n   curve of \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "(\u003c++)",
          "package": "curves",
          "signature": "Point -\u003e Image -\u003e Image",
          "source": "src/Graphics-Curves-Image.html#%3C%2B%2B",
          "type": "function"
        },
        "index": {
          "description": "Prepend point to the left-most curve of an image is equivalent to line if is the starting point of the left-most curve of",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "(\u003c++) \u003c++",
          "normalized": "Point-\u003eImage-\u003eImage",
          "package": "curves",
          "signature": "Point-\u003eImage-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:-60--43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtract the second image from the first.\n\u003c/p\u003e\u003cpre\u003e (\u003c-\u003e) = combine diffBlend\n\u003c/pre\u003e",
          "module": "Graphics.Curves",
          "name": "(\u003c-\u003e)",
          "package": "curves",
          "signature": "Image -\u003e Image -\u003e Image",
          "source": "src/Graphics-Curves-Image.html#%3C-%3E",
          "type": "function"
        },
        "index": {
          "description": "Subtract the second image from the first combine diffBlend",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "(\u003c-\u003e) \u003c-\u003e",
          "normalized": "Image-\u003eImage-\u003eImage",
          "package": "curves",
          "signature": "Image-\u003eImage-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:-60--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "(\u003c\u003e)",
          "package": "curves",
          "signature": "m -\u003e m -\u003e m",
          "type": "function"
        },
        "index": {
          "description": "An infix synonym for mappend",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "curves",
          "signature": "m-\u003em-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe intersection of two images.\n\u003c/p\u003e\u003cpre\u003e (\u003e\u003c) = combine intersectBlend\n\u003c/pre\u003e",
          "module": "Graphics.Curves",
          "name": "(\u003e\u003c)",
          "package": "curves",
          "signature": "Image -\u003e Image -\u003e Image",
          "source": "src/Graphics-Curves-Image.html#%3E%3C",
          "type": "function"
        },
        "index": {
          "description": "The intersection of two images combine intersectBlend",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "(\u003e\u003c) \u003e\u003c",
          "normalized": "Image-\u003eImage-\u003eImage",
          "package": "curves",
          "signature": "Image-\u003eImage-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:-62--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale the an image to fit inside the the box given by the two points\n   (bottom-left and top-right corners).\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "autoFit",
          "package": "curves",
          "signature": "Point -\u003e Point -\u003e Image -\u003e Image",
          "source": "src/Graphics-Curves.html#autoFit",
          "type": "function"
        },
        "index": {
          "description": "Scale the an image to fit inside the the box given by the two points bottom-left and top-right corners",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "autoFit",
          "normalized": "Point-\u003ePoint-\u003eImage-\u003eImage",
          "package": "curves",
          "partial": "Fit",
          "signature": "Point-\u003ePoint-\u003eImage-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:autoFit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale the an image to fit inside the the box given by the two points\n   (bottom-left and top-right corners). Does not preserve aspect ratio.\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "autoStretch",
          "package": "curves",
          "signature": "Point -\u003e Point -\u003e Image -\u003e Image",
          "source": "src/Graphics-Curves.html#autoStretch",
          "type": "function"
        },
        "index": {
          "description": "Scale the an image to fit inside the the box given by the two points bottom-left and top-right corners Does not preserve aspect ratio",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "autoStretch",
          "normalized": "Point-\u003ePoint-\u003eImage-\u003eImage",
          "package": "curves",
          "partial": "Stretch",
          "signature": "Point-\u003ePoint-\u003eImage-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:autoStretch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ca\u003euniform cubic B-spline\u003c/a\u003e\n   with the given control points.\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "bSpline",
          "package": "curves",
          "signature": "[Point] -\u003e Image",
          "source": "src/Graphics-Curves-Image.html#bSpline",
          "type": "function"
        },
        "index": {
          "description": "uniform cubic B-spline with the given control points",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "bSpline",
          "normalized": "[Point]-\u003eImage",
          "package": "curves",
          "partial": "Spline",
          "signature": "[Point]-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:bSpline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA B-spline which starts in the first control point and ends in the last\n control point. This is achieved by adding two extra copies of the first and\n last points.\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "bSpline'",
          "package": "curves",
          "signature": "[Point] -\u003e Image",
          "source": "src/Graphics-Curves-Image.html#bSpline%27",
          "type": "function"
        },
        "index": {
          "description": "B-spline which starts in the first control point and ends in the last control point This is achieved by adding two extra copies of the first and last points",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "bSpline'",
          "normalized": "[Point]-\u003eImage",
          "package": "curves",
          "partial": "Spline'",
          "signature": "[Point]-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:bSpline-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strip of cubic B&#233;zier curves.\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "bezier",
          "package": "curves",
          "signature": "[Point] -\u003e Image",
          "source": "src/Graphics-Curves-Image.html#bezier",
          "type": "function"
        },
        "index": {
          "description": "strip of cubic zier curves",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "bezier",
          "normalized": "[Point]-\u003eImage",
          "package": "curves",
          "signature": "[Point]-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:bezier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA B&#233;zier curve of degree n with the given control points \u003ccode\u003e[p0 .. pn]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "bezierSegment",
          "package": "curves",
          "signature": "[Point] -\u003e Image",
          "source": "src/Graphics-Curves-Image.html#bezierSegment",
          "type": "function"
        },
        "index": {
          "description": "zier curve of degree with the given control points p0 pn",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "bezierSegment",
          "normalized": "[Point]-\u003eImage",
          "package": "curves",
          "partial": "Segment",
          "signature": "[Point]-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:bezierSegment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA circle given by its center and radius.\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "circle",
          "package": "curves",
          "signature": "Point -\u003e Scalar -\u003e Image",
          "source": "src/Graphics-Curves-Image.html#circle",
          "type": "function"
        },
        "index": {
          "description": "circle given by its center and radius",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "circle",
          "normalized": "Point-\u003eScalar-\u003eImage",
          "package": "curves",
          "signature": "Point-\u003eScalar-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA circle segment. The third and fourth arguments are the start and end\n   angle of the segment. If the start angle is bigger than the end angle it's\n   the clockwise segment, otherwise the counterclockwise segment. For instance,\n   \u003ccode\u003ecircleSegment 0 1 0 pi\u003c/code\u003e is the top half circle starting in \u003ccode\u003e\u003ca\u003eunitX\u003c/a\u003e\u003c/code\u003e and\n   ending in \u003ccode\u003e-\u003ccode\u003e\u003ca\u003eunitX\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, whereas \u003ccode\u003ecircleSegment 0 1 0 (-pi)\u003c/code\u003e is the bottow\n   half circle with the same start and end points.\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "circleSegment",
          "package": "curves",
          "signature": "Point -\u003e Scalar -\u003e Scalar -\u003e Scalar -\u003e Image",
          "source": "src/Graphics-Curves-Image.html#circleSegment",
          "type": "function"
        },
        "index": {
          "description": "circle segment The third and fourth arguments are the start and end angle of the segment If the start angle is bigger than the end angle it the clockwise segment otherwise the counterclockwise segment For instance circleSegment pi is the top half circle starting in unitX and ending in unitX whereas circleSegment pi is the bottow half circle with the same start and end points",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "circleSegment",
          "normalized": "Point-\u003eScalar-\u003eScalar-\u003eScalar-\u003eImage",
          "package": "curves",
          "partial": "Segment",
          "signature": "Point-\u003eScalar-\u003eScalar-\u003eScalar-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:circleSegment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA closed B-spline.\n\u003c/p\u003e\u003cpre\u003e closedBSpline ps = bSpline (ps ++ take 3 ps)\n\u003c/pre\u003e",
          "module": "Graphics.Curves",
          "name": "closedBSpline",
          "package": "curves",
          "signature": "[Point] -\u003e Image",
          "source": "src/Graphics-Curves-Image.html#closedBSpline",
          "type": "function"
        },
        "index": {
          "description": "closed B-spline closedBSpline ps bSpline ps take ps",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "closedBSpline",
          "normalized": "[Point]-\u003eImage",
          "package": "curves",
          "partial": "BSpline",
          "signature": "[Point]-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:closedBSpline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two images using the specified blend function.\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "combine",
          "package": "curves",
          "signature": "BlendFunc -\u003e Image -\u003e Image -\u003e Image",
          "source": "src/Graphics-Curves-Image.html#combine",
          "type": "function"
        },
        "index": {
          "description": "Combine two images using the specified blend function",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "combine",
          "normalized": "BlendFunc-\u003eImage-\u003eImage-\u003eImage",
          "package": "curves",
          "signature": "BlendFunc-\u003eImage-\u003eImage-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:combine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple curve whose points are given by the function argument. The second\n   and third arguments specify the range of the function. The function must\n   be continuous on this interval.\n\u003c/p\u003e\u003cp\u003eFor example, a straight line between points \u003ccode\u003ep\u003c/code\u003e and \u003ccode\u003eq\u003c/code\u003e can be implemented as\n\u003c/p\u003e\u003cpre\u003ecurve (\u003ccode\u003e\u003ca\u003einterpolate\u003c/a\u003e\u003c/code\u003e p q) 0 1\u003c/pre\u003e",
          "module": "Graphics.Curves",
          "name": "curve",
          "package": "curves",
          "signature": "(Scalar -\u003e Point) -\u003e Scalar -\u003e Scalar -\u003e Image",
          "source": "src/Graphics-Curves-Image.html#curve",
          "type": "function"
        },
        "index": {
          "description": "simple curve whose points are given by the function argument The second and third arguments specify the range of the function The function must be continuous on this interval For example straight line between points and can be implemented as curve interpolate",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "curve",
          "normalized": "(Scalar-\u003ePoint)-\u003eScalar-\u003eScalar-\u003eImage",
          "package": "curves",
          "signature": "(Scalar-\u003ePoint)-\u003eScalar-\u003eScalar-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:curve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most general form of curve. The curve function is split in two, one\n   function from the parameter to an arbitrary \u003ccode\u003e\u003ca\u003eTransformable\u003c/a\u003e\u003c/code\u003e object, and a\n   second function from this object (and the parameter value) to a point on\n   the curve. The power of this combinator comes from the fact that\n   transformations (e.g. \u003ccode\u003e\u003ca\u003etranslate\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003escale\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erotate\u003c/a\u003e\u003c/code\u003e) of the curve apply\n   only to the (result of the) first function. This means that the points\n   computed by the second function are measured in pixels of the final image.\n\u003c/p\u003e\u003cp\u003eFor an example, see the \u003ccode\u003e\u003ca\u003earrow\u003c/a\u003e\u003c/code\u003e combinator,\n   which uses a line \u003ccode\u003e\u003ca\u003eSegment\u003c/a\u003e\u003c/code\u003e as the intermediate type and computes the\n   arrow head in the second function, to ensure that the arrow head has the\n   same dimensions regardless of how the arrow is scaled.\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "curve'",
          "package": "curves",
          "signature": "(Scalar -\u003e a) -\u003e (Scalar -\u003e a -\u003e Point) -\u003e Scalar -\u003e Scalar -\u003e Image",
          "source": "src/Graphics-Curves-Image.html#curve%27",
          "type": "function"
        },
        "index": {
          "description": "The most general form of curve The curve function is split in two one function from the parameter to an arbitrary Transformable object and second function from this object and the parameter value to point on the curve The power of this combinator comes from the fact that transformations e.g translate scale rotate of the curve apply only to the result of the first function This means that the points computed by the second function are measured in pixels of the final image For an example see the arrow combinator which uses line Segment as the intermediate type and computes the arrow head in the second function to ensure that the arrow head has the same dimensions regardless of how the arrow is scaled",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "curve'",
          "normalized": "(Scalar-\u003ea)-\u003e(Scalar-\u003ea-\u003ePoint)-\u003eScalar-\u003eScalar-\u003eImage",
          "package": "curves",
          "signature": "(Scalar-\u003ea)-\u003e(Scalar-\u003ea-\u003ePoint)-\u003eScalar-\u003eScalar-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:curve-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the length of the curves of an image.  The first argument is the\n   precision (small is more precise).\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "curveLength",
          "package": "curves",
          "signature": "Scalar -\u003e Image -\u003e Scalar",
          "source": "src/Graphics-Curves-Image.html#curveLength",
          "type": "function"
        },
        "index": {
          "description": "Compute the length of the curves of an image The first argument is the precision small is more precise",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "curveLength",
          "normalized": "Scalar-\u003eImage-\u003eScalar",
          "package": "curves",
          "partial": "Length",
          "signature": "Scalar-\u003eImage-\u003eScalar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:curveLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiplies the alpha value of the first colour by 1 - the alpha value of\n   the second colour.\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "diffBlend",
          "package": "curves",
          "signature": "BlendFunc",
          "source": "src/Graphics-Curves-Image.html#diffBlend",
          "type": "function"
        },
        "index": {
          "description": "Multiplies the alpha value of the first colour by the alpha value of the second colour",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "diffBlend",
          "package": "curves",
          "partial": "Blend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:diffBlend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifferentiating the curves of an image\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "differentiate",
          "package": "curves",
          "signature": "Image -\u003e Image",
          "source": "src/Graphics-Curves-Image.html#differentiate",
          "type": "function"
        },
        "index": {
          "description": "Differentiating the curves of an image",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "differentiate",
          "normalized": "Image-\u003eImage",
          "package": "curves",
          "signature": "Image-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:differentiate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFreeze both the size and the orientation of an image.\n\u003c/p\u003e\u003cpre\u003efreezeImage p i == \u003ccode\u003e\u003ca\u003efreezeImageSize\u003c/a\u003e\u003c/code\u003e p i (\u003ccode\u003e\u003ca\u003efreezeImageOrientation\u003c/a\u003e\u003c/code\u003e p i)\u003c/pre\u003e",
          "module": "Graphics.Curves",
          "name": "freezeImage",
          "package": "curves",
          "signature": "Point -\u003e Image -\u003e Image",
          "source": "src/Graphics-Curves-Image.html#freezeImage",
          "type": "function"
        },
        "index": {
          "description": "Freeze both the size and the orientation of an image freezeImage freezeImageSize freezeImageOrientation",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "freezeImage",
          "normalized": "Point-\u003eImage-\u003eImage",
          "package": "curves",
          "partial": "Image",
          "signature": "Point-\u003eImage-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:freezeImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFreeze image orientation. Rotations of the image will only affect the\n   position of the image, not its orientation. Translation and scaling\n   affect the image normally.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003erotateAround\u003c/a\u003e\u003c/code\u003e p a (freezeImageOrientation p i) == freezeImageOrientation p i\u003c/pre\u003e",
          "module": "Graphics.Curves",
          "name": "freezeImageOrientation",
          "package": "curves",
          "signature": "Point -\u003e Image -\u003e Image",
          "source": "src/Graphics-Curves-Image.html#freezeImageOrientation",
          "type": "function"
        },
        "index": {
          "description": "Freeze image orientation Rotations of the image will only affect the position of the image not its orientation Translation and scaling affect the image normally rotateAround freezeImageOrientation freezeImageOrientation",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "freezeImageOrientation",
          "normalized": "Point-\u003eImage-\u003eImage",
          "package": "curves",
          "partial": "Image Orientation",
          "signature": "Point-\u003eImage-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:freezeImageOrientation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFreeze the size of an image around the given point. Scaling the image will\n   only affect the position of the image, not the size. Translation and\n   rotation affect the image normally.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003escaleFrom\u003c/a\u003e\u003c/code\u003e p (\u003ccode\u003e\u003ca\u003ediag\u003c/a\u003e\u003c/code\u003e k) (freezeImageSize p i) == freezeImageSize p i\u003c/pre\u003e\u003cp\u003eScaling with non-uniform scale factors will still distort the image,\n   however.\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "freezeImageSize",
          "package": "curves",
          "signature": "Point -\u003e Image -\u003e Image",
          "source": "src/Graphics-Curves-Image.html#freezeImageSize",
          "type": "function"
        },
        "index": {
          "description": "Freeze the size of an image around the given point Scaling the image will only affect the position of the image not the size Translation and rotation affect the image normally scaleFrom diag freezeImageSize freezeImageSize Scaling with non-uniform scale factors will still distort the image however",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "freezeImageSize",
          "normalized": "Point-\u003eImage-\u003eImage",
          "package": "curves",
          "partial": "Image Size",
          "signature": "Point-\u003eImage-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:freezeImageSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the bounds of an image, returning a line segment from the bottom\n   left corner to the top right corner of the bounding box. This function\n   ignores line widths. Note that using pixel based features (for instance,\n   produced by \u003ccode\u003e\u003ca\u003efreezeImageSize\u003c/a\u003e\u003c/code\u003e) means that the bounds may become invalid if\n   the image is scaled.\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "imageBounds",
          "package": "curves",
          "signature": "Image -\u003e Segment",
          "source": "src/Graphics-Curves.html#imageBounds",
          "type": "function"
        },
        "index": {
          "description": "Compute the bounds of an image returning line segment from the bottom left corner to the top right corner of the bounding box This function ignores line widths Note that using pixel based features for instance produced by freezeImageSize means that the bounds may become invalid if the image is scaled",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "imageBounds",
          "normalized": "Image-\u003eSegment",
          "package": "curves",
          "partial": "Bounds",
          "signature": "Image-\u003eSegment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:imageBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe alpha value of the result is the product of the alpha values of the\n   two inputs.\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "intersectBlend",
          "package": "curves",
          "signature": "BlendFunc",
          "source": "src/Graphics-Curves-Image.html#intersectBlend",
          "type": "function"
        },
        "index": {
          "description": "The alpha value of the result is the product of the alpha values of the two inputs",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "intersectBlend",
          "package": "curves",
          "partial": "Blend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:intersectBlend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA straight line between two points.\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "line",
          "package": "curves",
          "signature": "Point -\u003e Point -\u003e Image",
          "source": "src/Graphics-Curves-Image.html#line",
          "type": "function"
        },
        "index": {
          "description": "straight line between two points",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "line",
          "normalized": "Point-\u003ePoint-\u003eImage",
          "package": "curves",
          "signature": "Point-\u003ePoint-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA connected sequence of straight lines. The list must have at least two\n   elements.\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "lineStrip",
          "package": "curves",
          "signature": "[Point] -\u003e Image",
          "source": "src/Graphics-Curves-Image.html#lineStrip",
          "type": "function"
        },
        "index": {
          "description": "connected sequence of straight lines The list must have at least two elements",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "lineStrip",
          "normalized": "[Point]-\u003eImage",
          "package": "curves",
          "partial": "Strip",
          "signature": "[Point]-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:lineStrip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over the colours of an image.\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "mapColour",
          "package": "curves",
          "signature": "(Colour -\u003e Colour) -\u003e Image -\u003e Image",
          "source": "src/Graphics-Curves-Image.html#mapColour",
          "type": "function"
        },
        "index": {
          "description": "Map function over the colours of an image",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "mapColour",
          "normalized": "(Colour-\u003eColour)-\u003eImage-\u003eImage",
          "package": "curves",
          "partial": "Colour",
          "signature": "(Colour-\u003eColour)-\u003eImage-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:mapColour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to all points of an image. The function also gets the\n   curve parameter (between 0 and 1) of the given point. This applies after\n   all transformations so the points are measured in pixels, unless the image\n   is later unfrozen with \u003ccode\u003e\u003ca\u003eunfreezeImage\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "mapImage",
          "package": "curves",
          "signature": "(Scalar -\u003e Point -\u003e Point) -\u003e Image -\u003e Image",
          "source": "src/Graphics-Curves-Image.html#mapImage",
          "type": "function"
        },
        "index": {
          "description": "Apply function to all points of an image The function also gets the curve parameter between and of the given point This applies after all transformations so the points are measured in pixels unless the image is later unfrozen with unfreezeImage",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "mapImage",
          "normalized": "(Scalar-\u003ePoint-\u003ePoint)-\u003eImage-\u003eImage",
          "package": "curves",
          "partial": "Image",
          "signature": "(Scalar-\u003ePoint-\u003ePoint)-\u003eImage-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:mapImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single point.\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "point",
          "package": "curves",
          "signature": "Point -\u003e Image",
          "source": "src/Graphics-Curves-Image.html#point",
          "type": "function"
        },
        "index": {
          "description": "single point",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "point",
          "normalized": "Point-\u003eImage",
          "package": "curves",
          "signature": "Point-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA polygon.\n\u003c/p\u003e\u003cpre\u003e poly ps = lineStrip (ps ++ [head ps])\n\u003c/pre\u003e",
          "module": "Graphics.Curves",
          "name": "poly",
          "package": "curves",
          "signature": "[Point] -\u003e Image",
          "source": "src/Graphics-Curves-Image.html#poly",
          "type": "function"
        },
        "index": {
          "description": "polygon poly ps lineStrip ps head ps",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "poly",
          "normalized": "[Point]-\u003eImage",
          "package": "curves",
          "signature": "[Point]-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:poly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender an image as a PNG file with a 1-bit alpha channel. Semi-transparent\n   pixels in the image are blended with the given background colour to\n   produce opaque pixels.\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "renderImage",
          "package": "curves",
          "signature": "FilePath-\u003e Int-\u003e Int-\u003e Colour-\u003e Image-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Render an image as PNG file with bit alpha channel Semi-transparent pixels in the image are blended with the given background colour to produce opaque pixels",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "renderImage",
          "normalized": "FilePath-\u003eInt-\u003eInt-\u003eColour-\u003eImage-\u003eIO()",
          "package": "curves",
          "partial": "Image",
          "signature": "FilePath-\u003eInt-\u003eInt-\u003eColour-\u003eImage-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:renderImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse the direction of all curves in an image. Useful in conjunction\n   with \u003ccode\u003e\u003ca\u003e+++\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "reverseImage",
          "package": "curves",
          "signature": "Image -\u003e Image",
          "source": "src/Graphics-Curves-Image.html#reverseImage",
          "type": "function"
        },
        "index": {
          "description": "Reverse the direction of all curves in an image Useful in conjunction with",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "reverseImage",
          "normalized": "Image-\u003eImage",
          "package": "curves",
          "partial": "Image",
          "signature": "Image-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:reverseImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnfreeze an image. After unfreezing any frozen features will be affected\n   by transformations again.\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "unfreezeImage",
          "package": "curves",
          "signature": "Image -\u003e Image",
          "source": "src/Graphics-Curves-Image.html#unfreezeImage",
          "type": "function"
        },
        "index": {
          "description": "Unfreeze an image After unfreezing any frozen features will be affected by transformations again",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "unfreezeImage",
          "normalized": "Image-\u003eImage",
          "package": "curves",
          "partial": "Image",
          "signature": "Image-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:unfreezeImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlpha \u003ccode\u003e\u003ca\u003eblend\u003c/a\u003e\u003c/code\u003e the first colour on top of the second colour.\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "unionBlend",
          "package": "curves",
          "signature": "BlendFunc",
          "source": "src/Graphics-Curves-Image.html#unionBlend",
          "type": "function"
        },
        "index": {
          "description": "Alpha blend the first colour on top of the second colour",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "unionBlend",
          "package": "curves",
          "partial": "Blend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:unionBlend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZipping two images. Both images must have the same number of curves\n   \u003ccode\u003e\u003ca\u003ecombine\u003c/a\u003e\u003c/code\u003ed in the same order. As with \u003ccode\u003e\u003ca\u003emapImage\u003c/a\u003e\u003c/code\u003e the zipping takes place\n   after all transformations.\n\u003c/p\u003e",
          "module": "Graphics.Curves",
          "name": "zipImage",
          "package": "curves",
          "signature": "(Scalar -\u003e Point -\u003e Point -\u003e Point) -\u003e Image -\u003e Image -\u003e Image",
          "source": "src/Graphics-Curves-Image.html#zipImage",
          "type": "function"
        },
        "index": {
          "description": "Zipping two images Both images must have the same number of curves combine in the same order As with mapImage the zipping takes place after all transformations",
          "hierarchy": "Graphics Curves",
          "module": "Graphics.Curves",
          "name": "zipImage",
          "normalized": "(Scalar-\u003ePoint-\u003ePoint-\u003ePoint)-\u003eImage-\u003eImage-\u003eImage",
          "package": "curves",
          "partial": "Image",
          "signature": "(Scalar-\u003ePoint-\u003ePoint-\u003ePoint)-\u003eImage-\u003eImage-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/curves/docs/Graphics-Curves.html#v:zipImage"
      }
    }
  ]
]