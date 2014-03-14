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
        "word": "rsagl-math"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides generic typeclasses for common operations among many types: addition, subtraction, scalar multiplication, magnitude, and zero.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "RSAGL.Math.AbstractVector",
          "name": "AbstractVector",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-AbstractVector.html",
          "type": "module"
        },
        "index": {
          "description": "Provides generic typeclasses for common operations among many types addition subtraction scalar multiplication magnitude and zero",
          "hierarchy": "RSAGL Math AbstractVector",
          "module": "RSAGL.Math.AbstractVector",
          "name": "AbstractVector",
          "package": "rsagl-math",
          "partial": "Abstract Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data type that supports addition.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003ea \u003ccode\u003e\u003ca\u003eadd\u003c/a\u003e\u003c/code\u003e zero = a\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "RSAGL.Math.AbstractVector",
          "name": "AbstractAdd",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-AbstractVector.html#AbstractAdd",
          "type": "class"
        },
        "index": {
          "description": "data type that supports addition add zero",
          "hierarchy": "RSAGL Math AbstractVector",
          "module": "RSAGL.Math.AbstractVector",
          "name": "AbstractAdd",
          "package": "rsagl-math",
          "partial": "Abstract Add",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#t:AbstractAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data type that supports scalar magnitude.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003emagnitude (scalarMultiply (recip $ magnitude a) a) = 1\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "RSAGL.Math.AbstractVector",
          "name": "AbstractMagnitude",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-AbstractVector.html#AbstractMagnitude",
          "type": "class"
        },
        "index": {
          "description": "data type that supports scalar magnitude magnitude scalarMultiply recip magnitude",
          "hierarchy": "RSAGL Math AbstractVector",
          "module": "RSAGL.Math.AbstractVector",
          "name": "AbstractMagnitude",
          "package": "rsagl-math",
          "partial": "Abstract Magnitude",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#t:AbstractMagnitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data type that supports scalar multiplication.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003escalarMultiply 0 a = zero\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "RSAGL.Math.AbstractVector",
          "name": "AbstractScale",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-AbstractVector.html#AbstractScale",
          "type": "class"
        },
        "index": {
          "description": "data type that supports scalar multiplication scalarMultiply zero",
          "hierarchy": "RSAGL Math AbstractVector",
          "module": "RSAGL.Math.AbstractVector",
          "name": "AbstractScale",
          "package": "rsagl-math",
          "partial": "Abstract Scale",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#t:AbstractScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data type that supports subtraction.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003ea \u003ccode\u003e\u003ca\u003esub\u003c/a\u003e\u003c/code\u003e a = zero\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
          "module": "RSAGL.Math.AbstractVector",
          "name": "AbstractSubtract",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-AbstractVector.html#AbstractSubtract",
          "type": "class"
        },
        "index": {
          "description": "data type that supports subtraction sub zero",
          "hierarchy": "RSAGL Math AbstractVector",
          "module": "RSAGL.Math.AbstractVector",
          "name": "AbstractSubtract",
          "package": "rsagl-math",
          "partial": "Abstract Subtract",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#t:AbstractSubtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience class for many vector types.\n\u003c/p\u003e",
          "module": "RSAGL.Math.AbstractVector",
          "name": "AbstractVector",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-AbstractVector.html#AbstractVector",
          "type": "class"
        },
        "index": {
          "description": "convenience class for many vector types",
          "hierarchy": "RSAGL Math AbstractVector",
          "module": "RSAGL.Math.AbstractVector",
          "name": "AbstractVector",
          "package": "rsagl-math",
          "partial": "Abstract Vector",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#t:AbstractVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data type that has an additive identity.\n\u003c/p\u003e",
          "module": "RSAGL.Math.AbstractVector",
          "name": "AbstractZero",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-AbstractVector.html#AbstractZero",
          "type": "class"
        },
        "index": {
          "description": "data type that has an additive identity",
          "hierarchy": "RSAGL Math AbstractVector",
          "module": "RSAGL.Math.AbstractVector",
          "name": "AbstractZero",
          "package": "rsagl-math",
          "partial": "Abstract Zero",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#t:AbstractZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAverage of a list.\n\u003c/p\u003e",
          "module": "RSAGL.Math.AbstractVector",
          "name": "abstractAverage",
          "package": "rsagl-math",
          "signature": "[p] -\u003e p",
          "source": "src/RSAGL-Math-AbstractVector.html#abstractAverage",
          "type": "function"
        },
        "index": {
          "description": "Average of list",
          "hierarchy": "RSAGL Math AbstractVector",
          "module": "RSAGL.Math.AbstractVector",
          "name": "abstractAverage",
          "normalized": "[a]-\u003ea",
          "package": "rsagl-math",
          "partial": "Average",
          "signature": "[p]-\u003ep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#v:abstractAverage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistance between two points, based on the \u003ccode\u003e\u003ca\u003emagnitude\u003c/a\u003e\u003c/code\u003e of the difference.\n\u003c/p\u003e",
          "module": "RSAGL.Math.AbstractVector",
          "name": "abstractDistance",
          "package": "rsagl-math",
          "signature": "p -\u003e p -\u003e RSdouble",
          "source": "src/RSAGL-Math-AbstractVector.html#abstractDistance",
          "type": "function"
        },
        "index": {
          "description": "Distance between two points based on the magnitude of the difference",
          "hierarchy": "RSAGL Math AbstractVector",
          "module": "RSAGL.Math.AbstractVector",
          "name": "abstractDistance",
          "normalized": "a-\u003ea-\u003eRSdouble",
          "package": "rsagl-math",
          "partial": "Distance",
          "signature": "p-\u003ep-\u003eRSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#v:abstractDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForce a vector to the specified magnitude.\n\u003c/p\u003e",
          "module": "RSAGL.Math.AbstractVector",
          "name": "abstractScaleTo",
          "package": "rsagl-math",
          "signature": "RSdouble -\u003e v -\u003e v",
          "source": "src/RSAGL-Math-AbstractVector.html#abstractScaleTo",
          "type": "function"
        },
        "index": {
          "description": "Force vector to the specified magnitude",
          "hierarchy": "RSAGL Math AbstractVector",
          "module": "RSAGL.Math.AbstractVector",
          "name": "abstractScaleTo",
          "normalized": "RSdouble-\u003ea-\u003ea",
          "package": "rsagl-math",
          "partial": "Scale To",
          "signature": "RSdouble-\u003ev-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#v:abstractScaleTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSum of a list.\n\u003c/p\u003e",
          "module": "RSAGL.Math.AbstractVector",
          "name": "abstractSum",
          "package": "rsagl-math",
          "signature": "[v] -\u003e p",
          "source": "src/RSAGL-Math-AbstractVector.html#abstractSum",
          "type": "function"
        },
        "index": {
          "description": "Sum of list",
          "hierarchy": "RSAGL Math AbstractVector",
          "module": "RSAGL.Math.AbstractVector",
          "name": "abstractSum",
          "normalized": "[a]-\u003eb",
          "package": "rsagl-math",
          "partial": "Sum",
          "signature": "[v]-\u003ep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#v:abstractSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.AbstractVector",
          "name": "add",
          "package": "rsagl-math",
          "signature": "p -\u003e v -\u003e p",
          "source": "src/RSAGL-Math-AbstractVector.html#add",
          "type": "method"
        },
        "index": {
          "hierarchy": "RSAGL Math AbstractVector",
          "module": "RSAGL.Math.AbstractVector",
          "name": "add",
          "normalized": "a-\u003eb-\u003ea",
          "package": "rsagl-math",
          "signature": "p-\u003ev-\u003ep",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.AbstractVector",
          "name": "magnitude",
          "package": "rsagl-math",
          "signature": "v -\u003e RSdouble",
          "source": "src/RSAGL-Math-AbstractVector.html#magnitude",
          "type": "method"
        },
        "index": {
          "hierarchy": "RSAGL Math AbstractVector",
          "module": "RSAGL.Math.AbstractVector",
          "name": "magnitude",
          "normalized": "a-\u003eRSdouble",
          "package": "rsagl-math",
          "signature": "v-\u003eRSdouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#v:magnitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.AbstractVector",
          "name": "scalarMultiply",
          "package": "rsagl-math",
          "signature": "RSdouble -\u003e v -\u003e v",
          "source": "src/RSAGL-Math-AbstractVector.html#scalarMultiply",
          "type": "method"
        },
        "index": {
          "hierarchy": "RSAGL Math AbstractVector",
          "module": "RSAGL.Math.AbstractVector",
          "name": "scalarMultiply",
          "normalized": "RSdouble-\u003ea-\u003ea",
          "package": "rsagl-math",
          "partial": "Multiply",
          "signature": "RSdouble-\u003ev-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#v:scalarMultiply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.AbstractVector",
          "name": "sub",
          "package": "rsagl-math",
          "signature": "p -\u003e p -\u003e v",
          "source": "src/RSAGL-Math-AbstractVector.html#sub",
          "type": "method"
        },
        "index": {
          "hierarchy": "RSAGL Math AbstractVector",
          "module": "RSAGL.Math.AbstractVector",
          "name": "sub",
          "normalized": "a-\u003ea-\u003eb",
          "package": "rsagl-math",
          "signature": "p-\u003ep-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#v:sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.AbstractVector",
          "name": "zero",
          "package": "rsagl-math",
          "signature": "a",
          "source": "src/RSAGL-Math-AbstractVector.html#zero",
          "type": "method"
        },
        "index": {
          "hierarchy": "RSAGL Math AbstractVector",
          "module": "RSAGL.Math.AbstractVector",
          "name": "zero",
          "package": "rsagl-math",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAffine Transformations of Arbitrary Geometric Objects\n\u003c/p\u003e\u003c/div\u003e",
          "module": "RSAGL.Math.Affine",
          "name": "Affine",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-Affine.html",
          "type": "module"
        },
        "index": {
          "description": "Affine Transformations of Arbitrary Geometric Objects",
          "hierarchy": "RSAGL Math Affine",
          "module": "RSAGL.Math.Affine",
          "name": "Affine",
          "package": "rsagl-math",
          "partial": "Affine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAffineTransformable\u003c/a\u003e\u003c/code\u003e objects are subject to affine transformations using matrix multiplication.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Affine",
          "name": "AffineTransformable",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-Affine.html#AffineTransformable",
          "type": "class"
        },
        "index": {
          "description": "AffineTransformable objects are subject to affine transformations using matrix multiplication",
          "hierarchy": "RSAGL Math Affine",
          "module": "RSAGL.Math.Affine",
          "name": "AffineTransformable",
          "package": "rsagl-math",
          "partial": "Affine Transformable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#t:AffineTransformable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the inverse of an affine transformation, defined by a 4x4 matrix.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Affine",
          "name": "inverseTransform",
          "package": "rsagl-math",
          "signature": "Matrix -\u003e a -\u003e a",
          "source": "src/RSAGL-Math-Affine.html#inverseTransform",
          "type": "function"
        },
        "index": {
          "description": "Apply the inverse of an affine transformation defined by x4 matrix",
          "hierarchy": "RSAGL Math Affine",
          "module": "RSAGL.Math.Affine",
          "name": "inverseTransform",
          "normalized": "Matrix-\u003ea-\u003ea",
          "package": "rsagl-math",
          "partial": "Transform",
          "signature": "Matrix-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#v:inverseTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate an entity about the origin, using the specified vector as the axis of rotation.\n See also \u003ccode\u003e\u003ca\u003etransformAbout\u003c/a\u003e\u003c/code\u003e to rotate around an arbitrary point.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Affine",
          "name": "rotate",
          "package": "rsagl-math",
          "signature": "Vector3D -\u003e Angle -\u003e a -\u003e a",
          "source": "src/RSAGL-Math-Affine.html#rotate",
          "type": "method"
        },
        "index": {
          "description": "Rotate an entity about the origin using the specified vector as the axis of rotation See also transformAbout to rotate around an arbitrary point",
          "hierarchy": "RSAGL Math Affine",
          "module": "RSAGL.Math.Affine",
          "name": "rotate",
          "normalized": "Vector D-\u003eAngle-\u003ea-\u003ea",
          "package": "rsagl-math",
          "signature": "Vector D-\u003eAngle-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#v:rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecific rotation along the shortest path that brings the second vector in line with the first.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Affine",
          "name": "rotateToFrom",
          "package": "rsagl-math",
          "signature": "Vector3D -\u003e Vector3D -\u003e a -\u003e a",
          "source": "src/RSAGL-Math-Affine.html#rotateToFrom",
          "type": "function"
        },
        "index": {
          "description": "Specific rotation along the shortest path that brings the second vector in line with the first",
          "hierarchy": "RSAGL Math Affine",
          "module": "RSAGL.Math.Affine",
          "name": "rotateToFrom",
          "normalized": "Vector D-\u003eVector D-\u003ea-\u003ea",
          "package": "rsagl-math",
          "partial": "To From",
          "signature": "Vector D-\u003eVector D-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#v:rotateToFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecific rotation around the x-axis.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Affine",
          "name": "rotateX",
          "package": "rsagl-math",
          "signature": "Angle -\u003e a -\u003e a",
          "source": "src/RSAGL-Math-Affine.html#rotateX",
          "type": "method"
        },
        "index": {
          "description": "Specific rotation around the x-axis",
          "hierarchy": "RSAGL Math Affine",
          "module": "RSAGL.Math.Affine",
          "name": "rotateX",
          "normalized": "Angle-\u003ea-\u003ea",
          "package": "rsagl-math",
          "signature": "Angle-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#v:rotateX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecific rotation around the y-axis.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Affine",
          "name": "rotateY",
          "package": "rsagl-math",
          "signature": "Angle -\u003e a -\u003e a",
          "source": "src/RSAGL-Math-Affine.html#rotateY",
          "type": "method"
        },
        "index": {
          "description": "Specific rotation around the y-axis",
          "hierarchy": "RSAGL Math Affine",
          "module": "RSAGL.Math.Affine",
          "name": "rotateY",
          "normalized": "Angle-\u003ea-\u003ea",
          "package": "rsagl-math",
          "signature": "Angle-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#v:rotateY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecific rotation around the z-axis.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Affine",
          "name": "rotateZ",
          "package": "rsagl-math",
          "signature": "Angle -\u003e a -\u003e a",
          "source": "src/RSAGL-Math-Affine.html#rotateZ",
          "type": "method"
        },
        "index": {
          "description": "Specific rotation around the z-axis",
          "hierarchy": "RSAGL Math Affine",
          "module": "RSAGL.Math.Affine",
          "name": "rotateZ",
          "normalized": "Angle-\u003ea-\u003ea",
          "package": "rsagl-math",
          "signature": "Angle-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#v:rotateZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale an entity along the \u003ccode\u003ex\u003c/code\u003e \u003ccode\u003ey\u003c/code\u003e and \u003ccode\u003ez\u003c/code\u003e axes.  For example, \u003ccode\u003escale (Vector3D 2 3 4)\u003c/code\u003e will make an object twice as wide, three times as tall,\n and four times as deep.  It may be helpful to think of the vector as a control point on the vertex of a unit cube.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Affine",
          "name": "scale",
          "package": "rsagl-math",
          "signature": "Vector3D -\u003e a -\u003e a",
          "source": "src/RSAGL-Math-Affine.html#scale",
          "type": "method"
        },
        "index": {
          "description": "Scale an entity along the and axes For example scale Vector3D will make an object twice as wide three times as tall and four times as deep It may be helpful to think of the vector as control point on the vertex of unit cube",
          "hierarchy": "RSAGL Math Affine",
          "module": "RSAGL.Math.Affine",
          "name": "scale",
          "normalized": "Vector D-\u003ea-\u003ea",
          "package": "rsagl-math",
          "signature": "Vector D-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#v:scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecific scale preserving proportions.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Affine",
          "name": "scale'",
          "package": "rsagl-math",
          "signature": "RSdouble -\u003e a -\u003e a",
          "source": "src/RSAGL-Math-Affine.html#scale%27",
          "type": "function"
        },
        "index": {
          "description": "Specific scale preserving proportions",
          "hierarchy": "RSAGL Math Affine",
          "module": "RSAGL.Math.Affine",
          "name": "scale'",
          "normalized": "RSdouble-\u003ea-\u003ea",
          "package": "rsagl-math",
          "signature": "RSdouble-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#v:scale-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecific scale along an arbitary axis.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Affine",
          "name": "scaleAlong",
          "package": "rsagl-math",
          "signature": "Vector3D -\u003e RSdouble -\u003e a -\u003e a",
          "source": "src/RSAGL-Math-Affine.html#scaleAlong",
          "type": "function"
        },
        "index": {
          "description": "Specific scale along an arbitary axis",
          "hierarchy": "RSAGL Math Affine",
          "module": "RSAGL.Math.Affine",
          "name": "scaleAlong",
          "normalized": "Vector D-\u003eRSdouble-\u003ea-\u003ea",
          "package": "rsagl-math",
          "partial": "Along",
          "signature": "Vector D-\u003eRSdouble-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#v:scaleAlong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply an affine transformation, defined by a 4x4 matrix.  (This is the only required method.)\n\u003c/p\u003e",
          "module": "RSAGL.Math.Affine",
          "name": "transform",
          "package": "rsagl-math",
          "signature": "Matrix -\u003e a -\u003e a",
          "source": "src/RSAGL-Math-Affine.html#transform",
          "type": "method"
        },
        "index": {
          "description": "Apply an affine transformation defined by x4 matrix This is the only required method",
          "hierarchy": "RSAGL Math Affine",
          "module": "RSAGL.Math.Affine",
          "name": "transform",
          "normalized": "Matrix-\u003ea-\u003ea",
          "package": "rsagl-math",
          "signature": "Matrix-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#v:transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function treating a particular point as the origin.  For example, combining \u003ccode\u003e\u003ca\u003etransformAbout\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003erotate\u003c/a\u003e\u003c/code\u003e\n performs a rotation about an arbitrary point rather than the origin.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Affine",
          "name": "transformAbout",
          "package": "rsagl-math",
          "signature": "Point3D -\u003e (a -\u003e a) -\u003e a -\u003e a",
          "source": "src/RSAGL-Math-Affine.html#transformAbout",
          "type": "function"
        },
        "index": {
          "description": "Apply function treating particular point as the origin For example combining transformAbout with rotate performs rotation about an arbitrary point rather than the origin",
          "hierarchy": "RSAGL Math Affine",
          "module": "RSAGL.Math.Affine",
          "name": "transformAbout",
          "normalized": "Point D-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "package": "rsagl-math",
          "partial": "About",
          "signature": "Point D-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#v:transformAbout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate an entity along the specified vector.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Affine",
          "name": "translate",
          "package": "rsagl-math",
          "signature": "Vector3D -\u003e a -\u003e a",
          "source": "src/RSAGL-Math-Affine.html#translate",
          "type": "method"
        },
        "index": {
          "description": "Translate an entity along the specified vector",
          "hierarchy": "RSAGL Math Affine",
          "module": "RSAGL.Math.Affine",
          "name": "translate",
          "normalized": "Vector D-\u003ea-\u003ea",
          "package": "rsagl-math",
          "signature": "Vector D-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#v:translate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecific translation along the vector between two points.\n This ordinary use is to set the second point as the center of a model (typically origin_point_3d)\n and the first point as the desired position of the model.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Affine",
          "name": "translateToFrom",
          "package": "rsagl-math",
          "signature": "Point3D -\u003e Point3D -\u003e a -\u003e a",
          "source": "src/RSAGL-Math-Affine.html#translateToFrom",
          "type": "function"
        },
        "index": {
          "description": "Specific translation along the vector between two points This ordinary use is to set the second point as the center of model typically origin point and the first point as the desired position of the model",
          "hierarchy": "RSAGL Math Affine",
          "module": "RSAGL.Math.Affine",
          "name": "translateToFrom",
          "normalized": "Point D-\u003ePoint D-\u003ea-\u003ea",
          "package": "rsagl-math",
          "partial": "To From",
          "signature": "Point D-\u003ePoint D-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#v:translateToFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function under an affine transformation.  \u003ccode\u003ewithTransformation m id\u003c/code\u003e is an identity if \u003ccode\u003em\u003c/code\u003e is invertable.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Affine",
          "name": "withTransformation",
          "package": "rsagl-math",
          "signature": "Matrix -\u003e (a -\u003e a) -\u003e a -\u003e a",
          "source": "src/RSAGL-Math-Affine.html#withTransformation",
          "type": "function"
        },
        "index": {
          "description": "Apply function under an affine transformation withTransformation id is an identity if is invertable",
          "hierarchy": "RSAGL Math Affine",
          "module": "RSAGL.Math.Affine",
          "name": "withTransformation",
          "normalized": "Matrix-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "package": "rsagl-math",
          "partial": "Transformation",
          "signature": "Matrix-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#v:withTransformation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Angle",
          "name": "Angle",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-Angle.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "Angle",
          "package": "rsagl-math",
          "partial": "Angle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn angular value.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Angle",
          "name": "Angle",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-Angle.html#Angle",
          "type": "data"
        },
        "index": {
          "description": "An angular value",
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "Angle",
          "package": "rsagl-math",
          "partial": "Angle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#t:Angle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn angular value.  \u003ccode\u003e\u003ca\u003eBoundAngle\u003c/a\u003e\u003c/code\u003es are always in the range between -180 and 180 degrees, inclusive.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Angle",
          "name": "BoundAngle",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-Angle.html#BoundAngle",
          "type": "newtype"
        },
        "index": {
          "description": "An angular value BoundAngle are always in the range between and degrees inclusive",
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "BoundAngle",
          "package": "rsagl-math",
          "partial": "Bound Angle",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#t:BoundAngle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Angle",
          "name": "BoundAngle",
          "package": "rsagl-math",
          "signature": "BoundAngle Angle",
          "source": "src/RSAGL-Math-Angle.html#BoundAngle",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "BoundAngle",
          "package": "rsagl-math",
          "partial": "Bound Angle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:BoundAngle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbsolute value of an angle.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Angle",
          "name": "absoluteAngle",
          "package": "rsagl-math",
          "signature": "Angle -\u003e Angle",
          "source": "src/RSAGL-Math-Angle.html#absoluteAngle",
          "type": "function"
        },
        "index": {
          "description": "Absolute value of an angle",
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "absoluteAngle",
          "normalized": "Angle-\u003eAngle",
          "package": "rsagl-math",
          "partial": "Angle",
          "signature": "Angle-\u003eAngle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:absoluteAngle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Angle",
          "name": "angleAdd",
          "package": "rsagl-math",
          "signature": "Angle -\u003e Angle -\u003e Angle",
          "source": "src/RSAGL-Math-Angle.html#angleAdd",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "angleAdd",
          "normalized": "Angle-\u003eAngle-\u003eAngle",
          "package": "rsagl-math",
          "partial": "Add",
          "signature": "Angle-\u003eAngle-\u003eAngle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:angleAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Angle",
          "name": "angleNegate",
          "package": "rsagl-math",
          "signature": "Angle -\u003e Angle",
          "source": "src/RSAGL-Math-Angle.html#angleNegate",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "angleNegate",
          "normalized": "Angle-\u003eAngle",
          "package": "rsagl-math",
          "partial": "Negate",
          "signature": "Angle-\u003eAngle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:angleNegate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Angle",
          "name": "angleSubtract",
          "package": "rsagl-math",
          "signature": "Angle -\u003e Angle -\u003e Angle",
          "source": "src/RSAGL-Math-Angle.html#angleSubtract",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "angleSubtract",
          "normalized": "Angle-\u003eAngle-\u003eAngle",
          "package": "rsagl-math",
          "partial": "Subtract",
          "signature": "Angle-\u003eAngle-\u003eAngle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:angleSubtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eangularIncrements answers n evenly distributed angles from 0 to 2*pi.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Angle",
          "name": "angularIncrements",
          "package": "rsagl-math",
          "signature": "Integer -\u003e [Angle]",
          "source": "src/RSAGL-Math-Angle.html#angularIncrements",
          "type": "function"
        },
        "index": {
          "description": "angularIncrements answers evenly distributed angles from to pi",
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "angularIncrements",
          "normalized": "Integer-\u003e[Angle]",
          "package": "rsagl-math",
          "partial": "Increments",
          "signature": "Integer-\u003e[Angle]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:angularIncrements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Angle",
          "name": "arcCosine",
          "package": "rsagl-math",
          "signature": "RSdouble -\u003e Angle",
          "source": "src/RSAGL-Math-Angle.html#arcCosine",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "arcCosine",
          "normalized": "RSdouble-\u003eAngle",
          "package": "rsagl-math",
          "partial": "Cosine",
          "signature": "RSdouble-\u003eAngle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:arcCosine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Angle",
          "name": "arcSine",
          "package": "rsagl-math",
          "signature": "RSdouble -\u003e Angle",
          "source": "src/RSAGL-Math-Angle.html#arcSine",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "arcSine",
          "normalized": "RSdouble-\u003eAngle",
          "package": "rsagl-math",
          "partial": "Sine",
          "signature": "RSdouble-\u003eAngle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:arcSine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Angle",
          "name": "arcTangent",
          "package": "rsagl-math",
          "signature": "RSdouble -\u003e Angle",
          "source": "src/RSAGL-Math-Angle.html#arcTangent",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "arcTangent",
          "normalized": "RSdouble-\u003eAngle",
          "package": "rsagl-math",
          "partial": "Tangent",
          "signature": "RSdouble-\u003eAngle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:arcTangent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Angle",
          "name": "cartesianToPolar",
          "package": "rsagl-math",
          "signature": "(RSdouble, RSdouble) -\u003e (Angle, RSdouble)",
          "source": "src/RSAGL-Math-Angle.html#cartesianToPolar",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "cartesianToPolar",
          "normalized": "(RSdouble,RSdouble)-\u003e(Angle,RSdouble)",
          "package": "rsagl-math",
          "partial": "To Polar",
          "signature": "(RSdouble,RSdouble)-\u003e(Angle,RSdouble)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:cartesianToPolar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Angle",
          "name": "cosine",
          "package": "rsagl-math",
          "signature": "Angle -\u003e RSdouble",
          "source": "src/RSAGL-Math-Angle.html#cosine",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "cosine",
          "normalized": "Angle-\u003eRSdouble",
          "package": "rsagl-math",
          "signature": "Angle-\u003eRSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:cosine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere are 21600 arc minutes in a circle, 60 arc minutes in a degree.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Angle",
          "name": "fromArcMinutes",
          "package": "rsagl-math",
          "signature": "RSdouble -\u003e Angle",
          "source": "src/RSAGL-Math-Angle.html#fromArcMinutes",
          "type": "function"
        },
        "index": {
          "description": "There are arc minutes in circle arc minutes in degree",
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "fromArcMinutes",
          "normalized": "RSdouble-\u003eAngle",
          "package": "rsagl-math",
          "partial": "Arc Minutes",
          "signature": "RSdouble-\u003eAngle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:fromArcMinutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere are 1296000 arc seconds in a circle, 60 arc seconds in an arc minutes.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Angle",
          "name": "fromArcSeconds",
          "package": "rsagl-math",
          "signature": "RSdouble -\u003e Angle",
          "source": "src/RSAGL-Math-Angle.html#fromArcSeconds",
          "type": "function"
        },
        "index": {
          "description": "There are arc seconds in circle arc seconds in an arc minutes",
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "fromArcSeconds",
          "normalized": "RSdouble-\u003eAngle",
          "package": "rsagl-math",
          "partial": "Arc Seconds",
          "signature": "RSdouble-\u003eAngle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:fromArcSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere are 260 degrees in a circle.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Angle",
          "name": "fromDegrees",
          "package": "rsagl-math",
          "signature": "RSdouble -\u003e Angle",
          "source": "src/RSAGL-Math-Angle.html#fromDegrees",
          "type": "function"
        },
        "index": {
          "description": "There are degrees in circle",
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "fromDegrees",
          "normalized": "RSdouble-\u003eAngle",
          "package": "rsagl-math",
          "partial": "Degrees",
          "signature": "RSdouble-\u003eAngle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:fromDegrees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere are 2*pi radians in a circle.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Angle",
          "name": "fromRadians",
          "package": "rsagl-math",
          "signature": "RSdouble -\u003e Angle",
          "source": "src/RSAGL-Math-Angle.html#fromRadians",
          "type": "function"
        },
        "index": {
          "description": "There are pi radians in circle",
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "fromRadians",
          "normalized": "RSdouble-\u003eAngle",
          "package": "rsagl-math",
          "partial": "Radians",
          "signature": "RSdouble-\u003eAngle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:fromRadians"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere is 1 rotation in a circle.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Angle",
          "name": "fromRotations",
          "package": "rsagl-math",
          "signature": "RSdouble -\u003e Angle",
          "source": "src/RSAGL-Math-Angle.html#fromRotations",
          "type": "function"
        },
        "index": {
          "description": "There is rotation in circle",
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "fromRotations",
          "normalized": "RSdouble-\u003eAngle",
          "package": "rsagl-math",
          "partial": "Rotations",
          "signature": "RSdouble-\u003eAngle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:fromRotations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an angle based on time of day, hours, minutes, seconds, where noon is considered a zero angle.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Angle",
          "name": "fromTimeOfDayHMS",
          "package": "rsagl-math",
          "signature": "RSdouble -\u003e RSdouble -\u003e RSdouble -\u003e Angle",
          "source": "src/RSAGL-Math-Angle.html#fromTimeOfDayHMS",
          "type": "function"
        },
        "index": {
          "description": "Get an angle based on time of day hours minutes seconds where noon is considered zero angle",
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "fromTimeOfDayHMS",
          "normalized": "RSdouble-\u003eRSdouble-\u003eRSdouble-\u003eAngle",
          "package": "rsagl-math",
          "partial": "Time Of Day HMS",
          "signature": "RSdouble-\u003eRSdouble-\u003eRSdouble-\u003eAngle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:fromTimeOfDayHMS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Angle",
          "name": "polarToCartesian",
          "package": "rsagl-math",
          "signature": "(Angle, RSdouble) -\u003e (RSdouble, RSdouble)",
          "source": "src/RSAGL-Math-Angle.html#polarToCartesian",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "polarToCartesian",
          "normalized": "(Angle,RSdouble)-\u003e(RSdouble,RSdouble)",
          "package": "rsagl-math",
          "partial": "To Cartesian",
          "signature": "(Angle,RSdouble)-\u003e(RSdouble,RSdouble)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:polarToCartesian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Angle",
          "name": "scaleAngle",
          "package": "rsagl-math",
          "signature": "RSdouble -\u003e Angle -\u003e Angle",
          "source": "src/RSAGL-Math-Angle.html#scaleAngle",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "scaleAngle",
          "normalized": "RSdouble-\u003eAngle-\u003eAngle",
          "package": "rsagl-math",
          "partial": "Angle",
          "signature": "RSdouble-\u003eAngle-\u003eAngle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:scaleAngle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Angle",
          "name": "sine",
          "package": "rsagl-math",
          "signature": "Angle -\u003e RSdouble",
          "source": "src/RSAGL-Math-Angle.html#sine",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "sine",
          "normalized": "Angle-\u003eRSdouble",
          "package": "rsagl-math",
          "signature": "Angle-\u003eRSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:sine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Angle",
          "name": "supplementaryAngle",
          "package": "rsagl-math",
          "signature": "Angle -\u003e Angle",
          "source": "src/RSAGL-Math-Angle.html#supplementaryAngle",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "supplementaryAngle",
          "normalized": "Angle-\u003eAngle",
          "package": "rsagl-math",
          "partial": "Angle",
          "signature": "Angle-\u003eAngle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:supplementaryAngle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Angle",
          "name": "tangent",
          "package": "rsagl-math",
          "signature": "Angle -\u003e RSdouble",
          "source": "src/RSAGL-Math-Angle.html#tangent",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "tangent",
          "normalized": "Angle-\u003eRSdouble",
          "package": "rsagl-math",
          "signature": "Angle-\u003eRSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:tangent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnswers the angle in the range of -180 to 180, inclusive.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Angle",
          "name": "toDegrees",
          "package": "rsagl-math",
          "signature": "Angle -\u003e RSdouble",
          "source": "src/RSAGL-Math-Angle.html#toDegrees",
          "type": "function"
        },
        "index": {
          "description": "Answers the angle in the range of to inclusive",
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "toDegrees",
          "normalized": "Angle-\u003eRSdouble",
          "package": "rsagl-math",
          "partial": "Degrees",
          "signature": "Angle-\u003eRSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:toDegrees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etoDegrees_\u003c/a\u003e\u003c/code\u003e answers the angle in degrees with no range limitation.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Angle",
          "name": "toDegrees_",
          "package": "rsagl-math",
          "signature": "Angle -\u003e RSdouble",
          "source": "src/RSAGL-Math-Angle.html#toDegrees_",
          "type": "function"
        },
        "index": {
          "description": "toDegrees answers the angle in degrees with no range limitation",
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "toDegrees_",
          "normalized": "Angle-\u003eRSdouble",
          "package": "rsagl-math",
          "partial": "Degrees",
          "signature": "Angle-\u003eRSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:toDegrees_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etoRadians\u003c/a\u003e\u003c/code\u003e answers the angle in the range of -pi .. pi, inclusive.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Angle",
          "name": "toRadians",
          "package": "rsagl-math",
          "signature": "Angle -\u003e RSdouble",
          "source": "src/RSAGL-Math-Angle.html#toRadians",
          "type": "function"
        },
        "index": {
          "description": "toRadians answers the angle in the range of pi pi inclusive",
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "toRadians",
          "normalized": "Angle-\u003eRSdouble",
          "package": "rsagl-math",
          "partial": "Radians",
          "signature": "Angle-\u003eRSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:toRadians"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etoRadians answers the angle in radians with no range limitation.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Angle",
          "name": "toRadians_",
          "package": "rsagl-math",
          "signature": "Angle -\u003e RSdouble",
          "source": "src/RSAGL-Math-Angle.html#toRadians_",
          "type": "function"
        },
        "index": {
          "description": "toRadians answers the angle in radians with no range limitation",
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "toRadians_",
          "normalized": "Angle-\u003eRSdouble",
          "package": "rsagl-math",
          "partial": "Radians",
          "signature": "Angle-\u003eRSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:toRadians_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etoRotations\u003c/a\u003e\u003c/code\u003e answers the angle in the range of -0.5 to 0.5, inclusive.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Angle",
          "name": "toRotations",
          "package": "rsagl-math",
          "signature": "Angle -\u003e RSdouble",
          "source": "src/RSAGL-Math-Angle.html#toRotations",
          "type": "function"
        },
        "index": {
          "description": "toRotations answers the angle in the range of to inclusive",
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "toRotations",
          "normalized": "Angle-\u003eRSdouble",
          "package": "rsagl-math",
          "partial": "Rotations",
          "signature": "Angle-\u003eRSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:toRotations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etoRotations\u003c/a\u003e\u003c/code\u003e answers the angle in rotations with no range limitation.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Angle",
          "name": "toRotations_",
          "package": "rsagl-math",
          "signature": "Angle -\u003e RSdouble",
          "source": "src/RSAGL-Math-Angle.html#toRotations_",
          "type": "function"
        },
        "index": {
          "description": "toRotations answers the angle in rotations with no range limitation",
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "toRotations_",
          "normalized": "Angle-\u003eRSdouble",
          "package": "rsagl-math",
          "partial": "Rotations",
          "signature": "Angle-\u003eRSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:toRotations_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Angle",
          "name": "unboundAngle",
          "package": "rsagl-math",
          "signature": "BoundAngle -\u003e Angle",
          "source": "src/RSAGL-Math-Angle.html#unboundAngle",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "unboundAngle",
          "normalized": "BoundAngle-\u003eAngle",
          "package": "rsagl-math",
          "partial": "Angle",
          "signature": "BoundAngle-\u003eAngle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:unboundAngle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Angle",
          "name": "zero_angle",
          "package": "rsagl-math",
          "signature": "Angle",
          "source": "src/RSAGL-Math-Angle.html#zero_angle",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Angle",
          "module": "RSAGL.Math.Angle",
          "name": "zero_angle",
          "package": "rsagl-math",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:zero_angle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.BoundingBox",
          "name": "BoundingBox",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-BoundingBox.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Math BoundingBox",
          "module": "RSAGL.Math.BoundingBox",
          "name": "BoundingBox",
          "package": "rsagl-math",
          "partial": "Bounding Box",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-BoundingBox.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience class for any finite geometry.\n In particular, it's easy to concatenate the bounding\n box of multiple geometries by placing them in a list\n and taking the bounding box of the entire list.\n\u003c/p\u003e",
          "module": "RSAGL.Math.BoundingBox",
          "name": "Bound3D",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-BoundingBox.html#Bound3D",
          "type": "class"
        },
        "index": {
          "description": "convenience class for any finite geometry In particular it easy to concatenate the bounding box of multiple geometries by placing them in list and taking the bounding box of the entire list",
          "hierarchy": "RSAGL Math BoundingBox",
          "module": "RSAGL.Math.BoundingBox",
          "name": "Bound3D",
          "package": "rsagl-math",
          "partial": "Bound",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-BoundingBox.html#t:Bound3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple bounding box.  Operations on bounding boxes\n are designed to be fast, not accurate.  The only\n guarantee on any bounding box operation is that\n objects reported to be outside a bounding box,\n are.\n\u003c/p\u003e",
          "module": "RSAGL.Math.BoundingBox",
          "name": "BoundingBox",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-BoundingBox.html#BoundingBox",
          "type": "data"
        },
        "index": {
          "description": "simple bounding box Operations on bounding boxes are designed to be fast not accurate The only guarantee on any bounding box operation is that objects reported to be outside bounding box are",
          "hierarchy": "RSAGL Math BoundingBox",
          "module": "RSAGL.Math.BoundingBox",
          "name": "BoundingBox",
          "package": "rsagl-math",
          "partial": "Bounding Box",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-BoundingBox.html#t:BoundingBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.BoundingBox",
          "name": "boundingBox",
          "package": "rsagl-math",
          "signature": "a -\u003e BoundingBox",
          "source": "src/RSAGL-Math-BoundingBox.html#boundingBox",
          "type": "method"
        },
        "index": {
          "hierarchy": "RSAGL Math BoundingBox",
          "module": "RSAGL.Math.BoundingBox",
          "name": "boundingBox",
          "normalized": "a-\u003eBoundingBox",
          "package": "rsagl-math",
          "partial": "Box",
          "signature": "a-\u003eBoundingBox",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-BoundingBox.html#v:boundingBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eView of a bounding box in the form of a bounding spehre.\n\u003c/p\u003e",
          "module": "RSAGL.Math.BoundingBox",
          "name": "boundingCenterRadius",
          "package": "rsagl-math",
          "signature": "BoundingBox -\u003e (Point3D, RSdouble)",
          "source": "src/RSAGL-Math-BoundingBox.html#boundingCenterRadius",
          "type": "function"
        },
        "index": {
          "description": "View of bounding box in the form of bounding spehre",
          "hierarchy": "RSAGL Math BoundingBox",
          "module": "RSAGL.Math.BoundingBox",
          "name": "boundingCenterRadius",
          "normalized": "BoundingBox-\u003e(Point D,RSdouble)",
          "package": "rsagl-math",
          "partial": "Center Radius",
          "signature": "BoundingBox-\u003e(Point D,RSdouble)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-BoundingBox.html#v:boundingCenterRadius"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEstimates distance between a point and the outside surface of a bounding\n box.  If the value is negative, then the point lies inside the bound\n region.\n\u003c/p\u003e",
          "module": "RSAGL.Math.BoundingBox",
          "name": "minimalDistanceToBoundingBox",
          "package": "rsagl-math",
          "signature": "Point3D -\u003e BoundingBox -\u003e RSdouble",
          "source": "src/RSAGL-Math-BoundingBox.html#minimalDistanceToBoundingBox",
          "type": "function"
        },
        "index": {
          "description": "Estimates distance between point and the outside surface of bounding box If the value is negative then the point lies inside the bound region",
          "hierarchy": "RSAGL Math BoundingBox",
          "module": "RSAGL.Math.BoundingBox",
          "name": "minimalDistanceToBoundingBox",
          "normalized": "Point D-\u003eBoundingBox-\u003eRSdouble",
          "package": "rsagl-math",
          "partial": "Distance To Bounding Box",
          "signature": "Point D-\u003eBoundingBox-\u003eRSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-BoundingBox.html#v:minimalDistanceToBoundingBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Curve",
          "name": "Curve",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-Curve.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "Curve",
          "package": "rsagl-math",
          "partial": "Curve",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eCurve\u003c/a\u003e\u003c/code\u003e is a parametric function from a one-dimensional space into a space of an arbitrary datatype.  The key feature of a \u003ccode\u003e\u003ca\u003eCurve\u003c/a\u003e\u003c/code\u003e is that it is aware of it's own\n sampling interval.  Using this information and appropriate arithmetic and scalar multiplication functions provided by RSAGL.AbstractVector, a \u003ccode\u003e\u003ca\u003eCurve\u003c/a\u003e\u003c/code\u003e can be differentiated or integrated.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "Curve",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-Curve.html#Curve",
          "type": "data"
        },
        "index": {
          "description": "Curve is parametric function from one-dimensional space into space of an arbitrary datatype The key feature of Curve is that it is aware of it own sampling interval Using this information and appropriate arithmetic and scalar multiplication functions provided by RSAGL.AbstractVector Curve can be differentiated or integrated",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "Curve",
          "package": "rsagl-math",
          "partial": "Curve",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#t:Curve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn interval of a curve, including the curve, lower and upper bounds of the interval, and an instantaneous sample value for that interval.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "IntervalSample",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-Curve.html#IntervalSample",
          "type": "data"
        },
        "index": {
          "description": "An interval of curve including the curve lower and upper bounds of the interval and an instantaneous sample value for that interval",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "IntervalSample",
          "package": "rsagl-math",
          "partial": "Interval Sample",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#t:IntervalSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Curve",
          "name": "SamplingAlgorithm",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-Curve.html#SamplingAlgorithm",
          "type": "type"
        },
        "index": {
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "SamplingAlgorithm",
          "package": "rsagl-math",
          "partial": "Sampling Algorithm",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#t:SamplingAlgorithm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSurface\u003c/a\u003e\u003c/code\u003e is a based on a \u003ccode\u003e\u003ca\u003eCurve\u003c/a\u003e\u003c/code\u003e with an output of another \u003ccode\u003e\u003ca\u003eCurve\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "Surface",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-Curve.html#Surface",
          "type": "data"
        },
        "index": {
          "description": "Surface is based on Curve with an output of another Curve",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "Surface",
          "package": "rsagl-math",
          "partial": "Surface",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#t:Surface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSampling algorithm that takes increasing numbers of samples over intervals where the magnitude of the sample is large.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "adaptiveMagnitudeSamples",
          "package": "rsagl-math",
          "signature": "Integer -\u003e SamplingAlgorithm a",
          "source": "src/RSAGL-Math-Curve.html#adaptiveMagnitudeSamples",
          "type": "function"
        },
        "index": {
          "description": "Sampling algorithm that takes increasing numbers of samples over intervals where the magnitude of the sample is large",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "adaptiveMagnitudeSamples",
          "normalized": "Integer-\u003eSamplingAlgorithm a",
          "package": "rsagl-math",
          "partial": "Magnitude Samples",
          "signature": "Integer-\u003eSamplingAlgorithm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:adaptiveMagnitudeSamples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClamp lower and upper bounds of a curve along the axis of the input parameter.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "clampCurve",
          "package": "rsagl-math",
          "signature": "(RSdouble, RSdouble) -\u003e Curve a -\u003e Curve a",
          "source": "src/RSAGL-Math-Curve.html#clampCurve",
          "type": "function"
        },
        "index": {
          "description": "Clamp lower and upper bounds of curve along the axis of the input parameter",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "clampCurve",
          "normalized": "(RSdouble,RSdouble)-\u003eCurve a-\u003eCurve a",
          "package": "rsagl-math",
          "partial": "Curve",
          "signature": "(RSdouble,RSdouble)-\u003eCurve a-\u003eCurve a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:clampCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a curve by manipulating control points.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "controlCurve",
          "package": "rsagl-math",
          "signature": "(RSdouble, RSdouble) -\u003e (RSdouble, RSdouble) -\u003e Curve a -\u003e Curve a",
          "source": "src/RSAGL-Math-Curve.html#controlCurve",
          "type": "function"
        },
        "index": {
          "description": "Transform curve by manipulating control points",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "controlCurve",
          "normalized": "(RSdouble,RSdouble)-\u003e(RSdouble,RSdouble)-\u003eCurve a-\u003eCurve a",
          "package": "rsagl-math",
          "partial": "Curve",
          "signature": "(RSdouble,RSdouble)-\u003e(RSdouble,RSdouble)-\u003eCurve a-\u003eCurve a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:controlCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a simple curve.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "curve",
          "package": "rsagl-math",
          "signature": "(RSdouble -\u003e a) -\u003e Curve a",
          "source": "src/RSAGL-Math-Curve.html#curve",
          "type": "function"
        },
        "index": {
          "description": "Define simple curve",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "curve",
          "normalized": "(RSdouble-\u003ea)-\u003eCurve a",
          "package": "rsagl-math",
          "signature": "(RSdouble-\u003ea)-\u003eCurve a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:curve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the derivative of a \u003ccode\u003e\u003ca\u003eCurve\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "curveDerivative",
          "package": "rsagl-math",
          "signature": "Curve p -\u003e Curve v",
          "source": "src/RSAGL-Math-Curve.html#curveDerivative",
          "type": "function"
        },
        "index": {
          "description": "Take the derivative of Curve",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "curveDerivative",
          "normalized": "Curve a-\u003eCurve b",
          "package": "rsagl-math",
          "partial": "Derivative",
          "signature": "Curve p-\u003eCurve v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:curveDerivative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranspose a surface while flipping the inner curve, so that that orientable surfaces retain their original orientation.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "flipTransposeSurface",
          "package": "rsagl-math",
          "signature": "Surface a -\u003e Surface a",
          "source": "src/RSAGL-Math-Curve.html#flipTransposeSurface",
          "type": "function"
        },
        "index": {
          "description": "Transpose surface while flipping the inner curve so that that orientable surfaces retain their original orientation",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "flipTransposeSurface",
          "normalized": "Surface a-\u003eSurface a",
          "package": "rsagl-math",
          "partial": "Transpose Surface",
          "signature": "Surface a-\u003eSurface a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:flipTransposeSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample the outer \u003ccode\u003e\u003ca\u003eCurve\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eSurface\u003c/a\u003e\u003c/code\u003e at regularly spaced intervals.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "halfIterateSurface",
          "package": "rsagl-math",
          "signature": "Integer -\u003e Surface a -\u003e [Curve a]",
          "source": "src/RSAGL-Math-Curve.html#halfIterateSurface",
          "type": "function"
        },
        "index": {
          "description": "Sample the outer Curve of Surface at regularly spaced intervals",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "halfIterateSurface",
          "normalized": "Integer-\u003eSurface a-\u003e[Curve a]",
          "package": "rsagl-math",
          "partial": "Iterate Surface",
          "signature": "Integer-\u003eSurface a-\u003e[Curve a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:halfIterateSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinite integral of a curve.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "integrateCurve",
          "package": "rsagl-math",
          "signature": "SamplingAlgorithm v -\u003e Curve v -\u003e p -\u003e p",
          "source": "src/RSAGL-Math-Curve.html#integrateCurve",
          "type": "function"
        },
        "index": {
          "description": "Definite integral of curve",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "integrateCurve",
          "normalized": "SamplingAlgorithm a-\u003eCurve a-\u003eb-\u003eb",
          "package": "rsagl-math",
          "partial": "Curve",
          "signature": "SamplingAlgorithm v-\u003eCurve v-\u003ep-\u003ep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:integrateCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLower and upper bounds of an \u003ccode\u003e\u003ca\u003eIntervalSample\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "intervalRange",
          "package": "rsagl-math",
          "signature": "IntervalSample a -\u003e (RSdouble, RSdouble)",
          "source": "src/RSAGL-Math-Curve.html#intervalRange",
          "type": "function"
        },
        "index": {
          "description": "Lower and upper bounds of an IntervalSample",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "intervalRange",
          "normalized": "IntervalSample a-\u003e(RSdouble,RSdouble)",
          "package": "rsagl-math",
          "partial": "Range",
          "signature": "IntervalSample a-\u003e(RSdouble,RSdouble)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:intervalRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Curve",
          "name": "intervalSample",
          "package": "rsagl-math",
          "signature": "Curve a -\u003e RSdouble -\u003e RSdouble -\u003e IntervalSample a",
          "source": "src/RSAGL-Math-Curve.html#intervalSample",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "intervalSample",
          "normalized": "Curve a-\u003eRSdouble-\u003eRSdouble-\u003eIntervalSample a",
          "package": "rsagl-math",
          "partial": "Sample",
          "signature": "Curve a-\u003eRSdouble-\u003eRSdouble-\u003eIntervalSample a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:intervalSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntegral of the sample value over the range of the \u003ccode\u003e\u003ca\u003eIntervalSample\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "intervalSingleIntegral",
          "package": "rsagl-math",
          "signature": "IntervalSample a -\u003e a",
          "source": "src/RSAGL-Math-Curve.html#intervalSingleIntegral",
          "type": "function"
        },
        "index": {
          "description": "Integral of the sample value over the range of the IntervalSample",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "intervalSingleIntegral",
          "normalized": "IntervalSample a-\u003ea",
          "package": "rsagl-math",
          "partial": "Single Integral",
          "signature": "IntervalSample a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:intervalSingleIntegral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of the range of an \u003ccode\u003e\u003ca\u003eIntervalSample\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "intervalSize",
          "package": "rsagl-math",
          "signature": "IntervalSample a -\u003e RSdouble",
          "source": "src/RSAGL-Math-Curve.html#intervalSize",
          "type": "function"
        },
        "index": {
          "description": "Size of the range of an IntervalSample",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "intervalSize",
          "normalized": "IntervalSample a-\u003eRSdouble",
          "package": "rsagl-math",
          "partial": "Size",
          "signature": "IntervalSample a-\u003eRSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:intervalSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample a curve at regular intervals in the range 0..1 inclusive.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "iterateCurve",
          "package": "rsagl-math",
          "signature": "Integer -\u003e Curve x -\u003e [x]",
          "source": "src/RSAGL-Math-Curve.html#iterateCurve",
          "type": "function"
        },
        "index": {
          "description": "Sample curve at regular intervals in the range inclusive",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "iterateCurve",
          "normalized": "Integer-\u003eCurve a-\u003e[a]",
          "package": "rsagl-math",
          "partial": "Curve",
          "signature": "Integer-\u003eCurve x-\u003e[x]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:iterateCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample a surface at regularly spaced lattice points in the range 0..1 inclusive.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "iterateSurface",
          "package": "rsagl-math",
          "signature": "(Integer, Integer) -\u003e Surface a -\u003e [[a]]",
          "source": "src/RSAGL-Math-Curve.html#iterateSurface",
          "type": "function"
        },
        "index": {
          "description": "Sample surface at regularly spaced lattice points in the range inclusive",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "iterateSurface",
          "normalized": "(Integer,Integer)-\u003eSurface a-\u003e[[a]]",
          "package": "rsagl-math",
          "partial": "Surface",
          "signature": "(Integer,Integer)-\u003eSurface a-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:iterateSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSampling algorithm that takes a fixed count of samples.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "linearSamples",
          "package": "rsagl-math",
          "signature": "Integer -\u003e SamplingAlgorithm a",
          "source": "src/RSAGL-Math-Curve.html#linearSamples",
          "type": "function"
        },
        "index": {
          "description": "Sampling algorithm that takes fixed count of samples",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "linearSamples",
          "normalized": "Integer-\u003eSamplingAlgorithm a",
          "package": "rsagl-math",
          "partial": "Samples",
          "signature": "Integer-\u003eSamplingAlgorithm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:linearSamples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoop a curve onto itself at the specified bounds.\n\u003c/p\u003e",
          "module": "[\"RSAGL.Math.Curve\",\"RSAGL.Math.CurveExtras\"]",
          "name": "loopCurve",
          "package": "rsagl-math",
          "signature": "(RSdouble, RSdouble) -\u003e Curve a -\u003e Curve a",
          "source": "src/RSAGL-Math-Curve.html#loopCurve",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:loopCurve\",\"http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-CurveExtras.html#v:loopCurve\"]"
        },
        "index": {
          "description": "Loop curve onto itself at the specified bounds",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "loopCurve",
          "normalized": "(RSdouble,RSdouble)-\u003eCurve a-\u003eCurve a",
          "package": "rsagl-math",
          "partial": "Curve",
          "signature": "(RSdouble,RSdouble)-\u003eCurve a-\u003eCurve a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:loopCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to determine the normal vector to a curve.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "newellCurve",
          "package": "rsagl-math",
          "signature": "Curve Point3D -\u003e Maybe Vector3D",
          "source": "src/RSAGL-Math-Curve.html#newellCurve",
          "type": "function"
        },
        "index": {
          "description": "Try to determine the normal vector to curve",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "newellCurve",
          "normalized": "Curve Point D-\u003eMaybe Vector D",
          "package": "rsagl-math",
          "partial": "Curve",
          "signature": "Curve Point D-\u003eMaybe Vector D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:newellCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the orientation of a \u003ccode\u003e\u003ca\u003eSurface\u003c/a\u003e\u003c/code\u003e by passing very small circles centered on each sampled point as the parametric input.\n\u003c/p\u003e\u003cp\u003eA gotchya with this operation is that as much as 3/4ths of the orientation loop may lie outside of the 0..1 range that is normally\n sampled.  Depending on how the surface is constructed, this may produce unexpected results.  The solution is to clamp the\n the problematic parametric inputs at 0 and 1 using \u003ccode\u003eclampSurface\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAs a rule, do clamp longitudinal axes that come to a singularity at each end.\n Do not clamp latitudinal axes that are connected at each end.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "orientationLoops",
          "package": "rsagl-math",
          "signature": "Surface p -\u003e Surface (Curve p)",
          "source": "src/RSAGL-Math-Curve.html#orientationLoops",
          "type": "function"
        },
        "index": {
          "description": "Determine the orientation of Surface by passing very small circles centered on each sampled point as the parametric input gotchya with this operation is that as much as ths of the orientation loop may lie outside of the range that is normally sampled Depending on how the surface is constructed this may produce unexpected results The solution is to clamp the the problematic parametric inputs at and using clampSurface As rule do clamp longitudinal axes that come to singularity at each end Do not clamp latitudinal axes that are connected at each end",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "orientationLoops",
          "normalized": "Surface a-\u003eSurface(Curve a)",
          "package": "rsagl-math",
          "partial": "Loops",
          "signature": "Surface p-\u003eSurface(Curve p)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:orientationLoops"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale a curve along the axis of the input parameter.  Factors greater than one have a \u003ca\u003ezoom in\u003c/a\u003e effect, while\n factors less than one have a \u003ca\u003ezoom out\u003c/a\u003e effect.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "scaleCurve",
          "package": "rsagl-math",
          "signature": "RSdouble -\u003e Curve a -\u003e Curve a",
          "source": "src/RSAGL-Math-Curve.html#scaleCurve",
          "type": "function"
        },
        "index": {
          "description": "Scale curve along the axis of the input parameter Factors greater than one have zoom in effect while factors less than one have zoom out effect",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "scaleCurve",
          "normalized": "RSdouble-\u003eCurve a-\u003eCurve a",
          "package": "rsagl-math",
          "partial": "Curve",
          "signature": "RSdouble-\u003eCurve a-\u003eCurve a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:scaleCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale a surface along each of its input parameter axes, as scaleCurve.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "scaleSurface",
          "package": "rsagl-math",
          "signature": "(RSdouble, RSdouble) -\u003e Surface a -\u003e Surface a",
          "source": "src/RSAGL-Math-Curve.html#scaleSurface",
          "type": "function"
        },
        "index": {
          "description": "Scale surface along each of its input parameter axes as scaleCurve",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "scaleSurface",
          "normalized": "(RSdouble,RSdouble)-\u003eSurface a-\u003eSurface a",
          "package": "rsagl-math",
          "partial": "Surface",
          "signature": "(RSdouble,RSdouble)-\u003eSurface a-\u003eSurface a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:scaleSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a simple surface.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "surface",
          "package": "rsagl-math",
          "signature": "(RSdouble -\u003e RSdouble -\u003e a) -\u003e Surface a",
          "source": "src/RSAGL-Math-Curve.html#surface",
          "type": "function"
        },
        "index": {
          "description": "Define simple surface",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "surface",
          "normalized": "(RSdouble-\u003eRSdouble-\u003ea)-\u003eSurface a",
          "package": "rsagl-math",
          "signature": "(RSdouble-\u003eRSdouble-\u003ea)-\u003eSurface a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:surface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the piecewise derivative of a \u003ccode\u003e\u003ca\u003eSurface\u003c/a\u003e\u003c/code\u003e along the inner and outer curves.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "surfaceDerivative",
          "package": "rsagl-math",
          "signature": "Surface p -\u003e Surface (v, v)",
          "source": "src/RSAGL-Math-Curve.html#surfaceDerivative",
          "type": "function"
        },
        "index": {
          "description": "Take the piecewise derivative of Surface along the inner and outer curves",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "surfaceDerivative",
          "normalized": "Surface a-\u003eSurface(b,b)",
          "package": "rsagl-math",
          "partial": "Derivative",
          "signature": "Surface p-\u003eSurface(v,v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:surfaceDerivative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to determine the normal vectors of a surface using multiple techniques.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "surfaceNormals3D",
          "package": "rsagl-math",
          "signature": "Surface Point3D -\u003e Surface SurfaceVertex3D",
          "source": "src/RSAGL-Math-Curve.html#surfaceNormals3D",
          "type": "function"
        },
        "index": {
          "description": "Try to determine the normal vectors of surface using multiple techniques",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "surfaceNormals3D",
          "normalized": "Surface Point D-\u003eSurface SurfaceVertex D",
          "package": "rsagl-math",
          "partial": "Normals",
          "signature": "Surface Point D-\u003eSurface SurfaceVertex D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:surfaceNormals3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift two curve transformations onto each axis of a second order curve.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "transformCurve2",
          "package": "rsagl-math",
          "signature": "(forall u.  Curve u -\u003e Curve u) -\u003e (forall v.  Curve v -\u003e Curve v) -\u003e Curve (Curve a) -\u003e Curve (Curve a)",
          "source": "src/RSAGL-Math-Curve.html#transformCurve2",
          "type": "function"
        },
        "index": {
          "description": "Lift two curve transformations onto each axis of second order curve",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "transformCurve2",
          "normalized": "(a b Curve c-\u003eCurve c)-\u003e(a d Curve e-\u003eCurve e)-\u003eCurve(Curve f)-\u003eCurve(Curve f)",
          "package": "rsagl-math",
          "partial": "Curve",
          "signature": "(forall u. Curve u-\u003eCurve u)-\u003e(forall v. Curve v-\u003eCurve v)-\u003eCurve(Curve a)-\u003eCurve(Curve a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:transformCurve2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a transformation on a second order \u003ccode\u003e\u003ca\u003eCurve\u003c/a\u003e\u003c/code\u003e onto a Surface.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "transformSurface",
          "package": "rsagl-math",
          "signature": "(Curve (Curve a) -\u003e Curve (Curve a)) -\u003e Surface a -\u003e Surface a",
          "source": "src/RSAGL-Math-Curve.html#transformSurface",
          "type": "function"
        },
        "index": {
          "description": "Lift transformation on second order Curve onto Surface",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "transformSurface",
          "normalized": "(Curve(Curve a)-\u003eCurve(Curve a))-\u003eSurface a-\u003eSurface a",
          "package": "rsagl-math",
          "partial": "Surface",
          "signature": "(Curve(Curve a)-\u003eCurve(Curve a))-\u003eSurface a-\u003eSurface a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:transformSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift two curve transformations onto each axis of a Surface.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "transformSurface2",
          "package": "rsagl-math",
          "signature": "(forall u.  Curve u -\u003e Curve u) -\u003e (forall v.  Curve v -\u003e Curve v) -\u003e Surface a -\u003e Surface a",
          "source": "src/RSAGL-Math-Curve.html#transformSurface2",
          "type": "function"
        },
        "index": {
          "description": "Lift two curve transformations onto each axis of Surface",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "transformSurface2",
          "normalized": "(a b Curve c-\u003eCurve c)-\u003e(a d Curve e-\u003eCurve e)-\u003eSurface f-\u003eSurface f",
          "package": "rsagl-math",
          "partial": "Surface",
          "signature": "(forall u. Curve u-\u003eCurve u)-\u003e(forall v. Curve v-\u003eCurve v)-\u003eSurface a-\u003eSurface a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:transformSurface2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate a curve along the axis of the input parameter.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "translateCurve",
          "package": "rsagl-math",
          "signature": "RSdouble -\u003e Curve a -\u003e Curve a",
          "source": "src/RSAGL-Math-Curve.html#translateCurve",
          "type": "function"
        },
        "index": {
          "description": "Translate curve along the axis of the input parameter",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "translateCurve",
          "normalized": "RSdouble-\u003eCurve a-\u003eCurve a",
          "package": "rsagl-math",
          "partial": "Curve",
          "signature": "RSdouble-\u003eCurve a-\u003eCurve a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:translateCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate a surface over each of its input parameter axes, as translateCurve.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "translateSurface",
          "package": "rsagl-math",
          "signature": "(RSdouble, RSdouble) -\u003e Surface a -\u003e Surface a",
          "source": "src/RSAGL-Math-Curve.html#translateSurface",
          "type": "function"
        },
        "index": {
          "description": "Translate surface over each of its input parameter axes as translateCurve",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "translateSurface",
          "normalized": "(RSdouble,RSdouble)-\u003eSurface a-\u003eSurface a",
          "package": "rsagl-math",
          "partial": "Surface",
          "signature": "(RSdouble,RSdouble)-\u003eSurface a-\u003eSurface a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:translateSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranspose the inner and outer components of a curve.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "transposeCurve",
          "package": "rsagl-math",
          "signature": "Curve (Curve a) -\u003e Curve (Curve a)",
          "source": "src/RSAGL-Math-Curve.html#transposeCurve",
          "type": "function"
        },
        "index": {
          "description": "Transpose the inner and outer components of curve",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "transposeCurve",
          "normalized": "Curve(Curve a)-\u003eCurve(Curve a)",
          "package": "rsagl-math",
          "partial": "Curve",
          "signature": "Curve(Curve a)-\u003eCurve(Curve a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:transposeCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranspose the axes of a \u003ccode\u003e\u003ca\u003eSurface\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "transposeSurface",
          "package": "rsagl-math",
          "signature": "Surface a -\u003e Surface a",
          "source": "src/RSAGL-Math-Curve.html#transposeSurface",
          "type": "function"
        },
        "index": {
          "description": "Transpose the axes of Surface",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "transposeSurface",
          "normalized": "Surface a-\u003eSurface a",
          "package": "rsagl-math",
          "partial": "Surface",
          "signature": "Surface a-\u003eSurface a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:transposeSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Curve",
          "name": "unwrapSurface",
          "package": "rsagl-math",
          "signature": "Surface a -\u003e Curve (Curve a)",
          "source": "src/RSAGL-Math-Curve.html#unwrapSurface",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "unwrapSurface",
          "normalized": "Surface a-\u003eCurve(Curve a)",
          "package": "rsagl-math",
          "partial": "Surface",
          "signature": "Surface a-\u003eCurve(Curve a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:unwrapSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn identity \u003ccode\u003e\u003ca\u003eSurface\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "uv_identity",
          "package": "rsagl-math",
          "signature": "Surface (RSdouble, RSdouble)",
          "source": "src/RSAGL-Math-Curve.html#uv_identity",
          "type": "function"
        },
        "index": {
          "description": "An identity Surface",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "uv_identity",
          "normalized": "Surface(RSdouble,RSdouble)",
          "package": "rsagl-math",
          "signature": "Surface(RSdouble,RSdouble)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:uv_identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Curve",
          "name": "wrapSurface",
          "package": "rsagl-math",
          "signature": "Curve (Curve a) -\u003e Surface a",
          "source": "src/RSAGL-Math-Curve.html#wrapSurface",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "wrapSurface",
          "normalized": "Curve(Curve a)-\u003eSurface a",
          "package": "rsagl-math",
          "partial": "Surface",
          "signature": "Curve(Curve a)-\u003eSurface a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:wrapSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two curves using an arbitrary function.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "zipCurve",
          "package": "rsagl-math",
          "signature": "(x -\u003e y -\u003e z) -\u003e Curve x -\u003e Curve y -\u003e Curve z",
          "source": "src/RSAGL-Math-Curve.html#zipCurve",
          "type": "function"
        },
        "index": {
          "description": "Combine two curves using an arbitrary function",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "zipCurve",
          "normalized": "(a-\u003eb-\u003ec)-\u003eCurve a-\u003eCurve b-\u003eCurve c",
          "package": "rsagl-math",
          "partial": "Curve",
          "signature": "(x-\u003ey-\u003ez)-\u003eCurve x-\u003eCurve y-\u003eCurve z",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:zipCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two surfaces using an arbitrary function.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Curve",
          "name": "zipSurface",
          "package": "rsagl-math",
          "signature": "(x -\u003e y -\u003e z) -\u003e Surface x -\u003e Surface y -\u003e Surface z",
          "source": "src/RSAGL-Math-Curve.html#zipSurface",
          "type": "function"
        },
        "index": {
          "description": "Combine two surfaces using an arbitrary function",
          "hierarchy": "RSAGL Math Curve",
          "module": "RSAGL.Math.Curve",
          "name": "zipSurface",
          "normalized": "(a-\u003eb-\u003ec)-\u003eSurface a-\u003eSurface b-\u003eSurface c",
          "package": "rsagl-math",
          "partial": "Surface",
          "signature": "(x-\u003ey-\u003ez)-\u003eSurface x-\u003eSurface y-\u003eSurface z",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:zipSurface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.CurveExtras",
          "name": "CurveExtras",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-CurveExtras.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Math CurveExtras",
          "module": "RSAGL.Math.CurveExtras",
          "name": "CurveExtras",
          "package": "rsagl-math",
          "partial": "Curve Extras",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-CurveExtras.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.CurveExtras",
          "name": "circleXY",
          "package": "rsagl-math",
          "signature": "Curve Point3D",
          "source": "src/RSAGL-Math-CurveExtras.html#circleXY",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math CurveExtras",
          "module": "RSAGL.Math.CurveExtras",
          "name": "circleXY",
          "package": "rsagl-math",
          "partial": "XY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-CurveExtras.html#v:circleXY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.CurveExtras",
          "name": "circularCoordinates",
          "package": "rsagl-math",
          "signature": "((RSdouble, RSdouble) -\u003e a) -\u003e Surface a",
          "source": "src/RSAGL-Math-CurveExtras.html#circularCoordinates",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math CurveExtras",
          "module": "RSAGL.Math.CurveExtras",
          "name": "circularCoordinates",
          "normalized": "((RSdouble,RSdouble)-\u003ea)-\u003eSurface a",
          "package": "rsagl-math",
          "partial": "Coordinates",
          "signature": "((RSdouble,RSdouble)-\u003ea)-\u003eSurface a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-CurveExtras.html#v:circularCoordinates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.CurveExtras",
          "name": "cylindricalCoordinates",
          "package": "rsagl-math",
          "signature": "((Angle, RSdouble) -\u003e a) -\u003e Surface a",
          "source": "src/RSAGL-Math-CurveExtras.html#cylindricalCoordinates",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math CurveExtras",
          "module": "RSAGL.Math.CurveExtras",
          "name": "cylindricalCoordinates",
          "normalized": "((Angle,RSdouble)-\u003ea)-\u003eSurface a",
          "package": "rsagl-math",
          "partial": "Coordinates",
          "signature": "((Angle,RSdouble)-\u003ea)-\u003eSurface a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-CurveExtras.html#v:cylindricalCoordinates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.CurveExtras",
          "name": "linearInterpolation",
          "package": "rsagl-math",
          "signature": "[p] -\u003e Curve p",
          "source": "src/RSAGL-Math-CurveExtras.html#linearInterpolation",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math CurveExtras",
          "module": "RSAGL.Math.CurveExtras",
          "name": "linearInterpolation",
          "normalized": "[a]-\u003eCurve a",
          "package": "rsagl-math",
          "partial": "Interpolation",
          "signature": "[p]-\u003eCurve p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-CurveExtras.html#v:linearInterpolation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.CurveExtras",
          "name": "loopedLinearInterpolation",
          "package": "rsagl-math",
          "signature": "[p] -\u003e Curve p",
          "source": "src/RSAGL-Math-CurveExtras.html#loopedLinearInterpolation",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math CurveExtras",
          "module": "RSAGL.Math.CurveExtras",
          "name": "loopedLinearInterpolation",
          "normalized": "[a]-\u003eCurve a",
          "package": "rsagl-math",
          "partial": "Linear Interpolation",
          "signature": "[p]-\u003eCurve p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-CurveExtras.html#v:loopedLinearInterpolation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.CurveExtras",
          "name": "polarCoordinates",
          "package": "rsagl-math",
          "signature": "((Angle, RSdouble) -\u003e a) -\u003e Surface a",
          "source": "src/RSAGL-Math-CurveExtras.html#polarCoordinates",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math CurveExtras",
          "module": "RSAGL.Math.CurveExtras",
          "name": "polarCoordinates",
          "normalized": "((Angle,RSdouble)-\u003ea)-\u003eSurface a",
          "package": "rsagl-math",
          "partial": "Coordinates",
          "signature": "((Angle,RSdouble)-\u003ea)-\u003eSurface a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-CurveExtras.html#v:polarCoordinates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.CurveExtras",
          "name": "regularPolygon",
          "package": "rsagl-math",
          "signature": "Integer -\u003e Curve Point3D",
          "source": "src/RSAGL-Math-CurveExtras.html#regularPolygon",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math CurveExtras",
          "module": "RSAGL.Math.CurveExtras",
          "name": "regularPolygon",
          "normalized": "Integer-\u003eCurve Point D",
          "package": "rsagl-math",
          "partial": "Polygon",
          "signature": "Integer-\u003eCurve Point D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-CurveExtras.html#v:regularPolygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.CurveExtras",
          "name": "smoothCurve",
          "package": "rsagl-math",
          "signature": "Integer -\u003e RSdouble -\u003e Curve p -\u003e Curve p",
          "source": "src/RSAGL-Math-CurveExtras.html#smoothCurve",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math CurveExtras",
          "module": "RSAGL.Math.CurveExtras",
          "name": "smoothCurve",
          "normalized": "Integer-\u003eRSdouble-\u003eCurve a-\u003eCurve a",
          "package": "rsagl-math",
          "partial": "Curve",
          "signature": "Integer-\u003eRSdouble-\u003eCurve p-\u003eCurve p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-CurveExtras.html#v:smoothCurve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.CurveExtras",
          "name": "sphericalCoordinates",
          "package": "rsagl-math",
          "signature": "((Angle, Angle) -\u003e a) -\u003e Surface a",
          "source": "src/RSAGL-Math-CurveExtras.html#sphericalCoordinates",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math CurveExtras",
          "module": "RSAGL.Math.CurveExtras",
          "name": "sphericalCoordinates",
          "normalized": "((Angle,Angle)-\u003ea)-\u003eSurface a",
          "package": "rsagl-math",
          "partial": "Coordinates",
          "signature": "((Angle,Angle)-\u003ea)-\u003eSurface a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-CurveExtras.html#v:sphericalCoordinates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.CurveExtras",
          "name": "toroidalCoordinates",
          "package": "rsagl-math",
          "signature": "((Angle, Angle) -\u003e a) -\u003e Surface a",
          "source": "src/RSAGL-Math-CurveExtras.html#toroidalCoordinates",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math CurveExtras",
          "module": "RSAGL.Math.CurveExtras",
          "name": "toroidalCoordinates",
          "normalized": "((Angle,Angle)-\u003ea)-\u003eSurface a",
          "package": "rsagl-math",
          "partial": "Coordinates",
          "signature": "((Angle,Angle)-\u003ea)-\u003eSurface a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-CurveExtras.html#v:toroidalCoordinates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.CurveExtras",
          "name": "transformUnitCubeToUnitSphere",
          "package": "rsagl-math",
          "signature": "Point3D -\u003e Point3D",
          "source": "src/RSAGL-Math-CurveExtras.html#transformUnitCubeToUnitSphere",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math CurveExtras",
          "module": "RSAGL.Math.CurveExtras",
          "name": "transformUnitCubeToUnitSphere",
          "normalized": "Point D-\u003ePoint D",
          "package": "rsagl-math",
          "partial": "Unit Cube To Unit Sphere",
          "signature": "Point D-\u003ePoint D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-CurveExtras.html#v:transformUnitCubeToUnitSphere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.CurveExtras",
          "name": "transformUnitSquareToUnitCircle",
          "package": "rsagl-math",
          "signature": "(RSdouble, RSdouble) -\u003e (RSdouble, RSdouble)",
          "source": "src/RSAGL-Math-CurveExtras.html#transformUnitSquareToUnitCircle",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math CurveExtras",
          "module": "RSAGL.Math.CurveExtras",
          "name": "transformUnitSquareToUnitCircle",
          "normalized": "(RSdouble,RSdouble)-\u003e(RSdouble,RSdouble)",
          "package": "rsagl-math",
          "partial": "Unit Square To Unit Circle",
          "signature": "(RSdouble,RSdouble)-\u003e(RSdouble,RSdouble)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-CurveExtras.html#v:transformUnitSquareToUnitCircle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.FMod",
          "name": "FMod",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-FMod.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Math FMod",
          "module": "RSAGL.Math.FMod",
          "name": "FMod",
          "package": "rsagl-math",
          "partial": "FMod",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-FMod.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.FMod",
          "name": "FMod",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-FMod.html#FMod",
          "type": "class"
        },
        "index": {
          "hierarchy": "RSAGL Math FMod",
          "module": "RSAGL.Math.FMod",
          "name": "FMod",
          "package": "rsagl-math",
          "partial": "FMod",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-FMod.html#t:FMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.FMod",
          "name": "fmod",
          "package": "rsagl-math",
          "signature": "f -\u003e f -\u003e f",
          "source": "src/RSAGL-Math-FMod.html#fmod",
          "type": "method"
        },
        "index": {
          "hierarchy": "RSAGL Math FMod",
          "module": "RSAGL.Math.FMod",
          "name": "fmod",
          "normalized": "a-\u003ea-\u003ea",
          "package": "rsagl-math",
          "signature": "f-\u003ef-\u003ef",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-FMod.html#v:fmod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Interpolation",
          "name": "Interpolation",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-Interpolation.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Math Interpolation",
          "module": "RSAGL.Math.Interpolation",
          "name": "Interpolation",
          "package": "rsagl-math",
          "partial": "Interpolation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Interpolation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Interpolation",
          "name": "lerp",
          "package": "rsagl-math",
          "signature": "r -\u003e (p, p) -\u003e p",
          "source": "src/RSAGL-Math-Interpolation.html#lerp",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Interpolation",
          "module": "RSAGL.Math.Interpolation",
          "name": "lerp",
          "normalized": "a-\u003e(b,b)-\u003eb",
          "package": "rsagl-math",
          "signature": "r-\u003e(p,p)-\u003ep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Interpolation.html#v:lerp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Interpolation",
          "name": "lerpBetween",
          "package": "rsagl-math",
          "signature": "(r, r, r) -\u003e (p, p) -\u003e p",
          "source": "src/RSAGL-Math-Interpolation.html#lerpBetween",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Interpolation",
          "module": "RSAGL.Math.Interpolation",
          "name": "lerpBetween",
          "normalized": "(a,a,a)-\u003e(b,b)-\u003eb",
          "package": "rsagl-math",
          "partial": "Between",
          "signature": "(r,r,r)-\u003e(p,p)-\u003ep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Interpolation.html#v:lerpBetween"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Interpolation",
          "name": "lerpBetweenClamped",
          "package": "rsagl-math",
          "signature": "(r, r, r) -\u003e (p, p) -\u003e p",
          "source": "src/RSAGL-Math-Interpolation.html#lerpBetweenClamped",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Interpolation",
          "module": "RSAGL.Math.Interpolation",
          "name": "lerpBetweenClamped",
          "normalized": "(a,a,a)-\u003e(b,b)-\u003eb",
          "package": "rsagl-math",
          "partial": "Between Clamped",
          "signature": "(r,r,r)-\u003e(p,p)-\u003ep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Interpolation.html#v:lerpBetweenClamped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Interpolation",
          "name": "lerpBetweenClampedMutated",
          "package": "rsagl-math",
          "signature": "(r -\u003e r) -\u003e (r, r, r) -\u003e (p, p) -\u003e p",
          "source": "src/RSAGL-Math-Interpolation.html#lerpBetweenClampedMutated",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Interpolation",
          "module": "RSAGL.Math.Interpolation",
          "name": "lerpBetweenClampedMutated",
          "normalized": "(a-\u003ea)-\u003e(a,a,a)-\u003e(b,b)-\u003eb",
          "package": "rsagl-math",
          "partial": "Between Clamped Mutated",
          "signature": "(r-\u003er)-\u003e(r,r,r)-\u003e(p,p)-\u003ep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Interpolation.html#v:lerpBetweenClampedMutated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Interpolation",
          "name": "lerpBetweenMutated",
          "package": "rsagl-math",
          "signature": "(r -\u003e r) -\u003e (r, r, r) -\u003e (p, p) -\u003e p",
          "source": "src/RSAGL-Math-Interpolation.html#lerpBetweenMutated",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Interpolation",
          "module": "RSAGL.Math.Interpolation",
          "name": "lerpBetweenMutated",
          "normalized": "(a-\u003ea)-\u003e(a,a,a)-\u003e(b,b)-\u003eb",
          "package": "rsagl-math",
          "partial": "Between Mutated",
          "signature": "(r-\u003er)-\u003e(r,r,r)-\u003e(p,p)-\u003ep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Interpolation.html#v:lerpBetweenMutated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Interpolation",
          "name": "lerpClamped",
          "package": "rsagl-math",
          "signature": "r -\u003e (p, p) -\u003e p",
          "source": "src/RSAGL-Math-Interpolation.html#lerpClamped",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Interpolation",
          "module": "RSAGL.Math.Interpolation",
          "name": "lerpClamped",
          "normalized": "a-\u003e(b,b)-\u003eb",
          "package": "rsagl-math",
          "partial": "Clamped",
          "signature": "r-\u003e(p,p)-\u003ep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Interpolation.html#v:lerpClamped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Interpolation",
          "name": "lerpMap",
          "package": "rsagl-math",
          "signature": "[(r, p)] -\u003e r -\u003e p",
          "source": "src/RSAGL-Math-Interpolation.html#lerpMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Interpolation",
          "module": "RSAGL.Math.Interpolation",
          "name": "lerpMap",
          "normalized": "[(a,b)]-\u003ea-\u003eb",
          "package": "rsagl-math",
          "partial": "Map",
          "signature": "[(r,p)]-\u003er-\u003ep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Interpolation.html#v:lerpMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Interpolation",
          "name": "lerp_mutator_continuous_1st",
          "package": "rsagl-math",
          "signature": "r -\u003e r",
          "source": "src/RSAGL-Math-Interpolation.html#lerp_mutator_continuous_1st",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Interpolation",
          "module": "RSAGL.Math.Interpolation",
          "name": "lerp_mutator_continuous_1st",
          "normalized": "a-\u003ea",
          "package": "rsagl-math",
          "signature": "r-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Interpolation.html#v:lerp_mutator_continuous_1st"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.ListUtils",
          "name": "ListUtils",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-ListUtils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Math ListUtils",
          "module": "RSAGL.Math.ListUtils",
          "name": "ListUtils",
          "package": "rsagl-math",
          "partial": "List Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-ListUtils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnswers a list containing every sequence of n consecutive\n elements in the parameter.\n\u003c/p\u003e\u003cpre\u003econsecutives 3 [1,2,3,4] = [[1,2,3],[2,3,4]]\u003c/pre\u003e",
          "module": "RSAGL.Math.ListUtils",
          "name": "consecutives",
          "package": "rsagl-math",
          "signature": "Int -\u003e [a] -\u003e [[a]]",
          "source": "src/RSAGL-Math-ListUtils.html#consecutives",
          "type": "function"
        },
        "index": {
          "description": "Answers list containing every sequence of consecutive elements in the parameter consecutives",
          "hierarchy": "RSAGL Math ListUtils",
          "module": "RSAGL.Math.ListUtils",
          "name": "consecutives",
          "normalized": "Int-\u003e[a]-\u003e[[a]]",
          "package": "rsagl-math",
          "signature": "Int-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-ListUtils.html#v:consecutives"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms a list to a list of adjacent elements.\n\u003c/p\u003e\u003cpre\u003edoubles [1,2,3,4,5] = [(1,2),(2,3),(3,4),(4,5)]\u003c/pre\u003e",
          "module": "RSAGL.Math.ListUtils",
          "name": "doubles",
          "package": "rsagl-math",
          "signature": "[a] -\u003e [(a, a)]",
          "source": "src/RSAGL-Math-ListUtils.html#doubles",
          "type": "function"
        },
        "index": {
          "description": "Transforms list to list of adjacent elements doubles",
          "hierarchy": "RSAGL Math ListUtils",
          "module": "RSAGL.Math.ListUtils",
          "name": "doubles",
          "normalized": "[a]-\u003e[(a,a)]",
          "package": "rsagl-math",
          "signature": "[a]-\u003e[(a,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-ListUtils.html#v:doubles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnswers a list containing every sequence of n consecutive\n elements in the parameter, looping back to the beginning of the list.\n\u003c/p\u003e\u003cpre\u003econsecutives 3 [1,2,3,4] = [[1,2,3],[2,3,4],[3,4,1],[4,1,2]]\u003c/pre\u003e",
          "module": "RSAGL.Math.ListUtils",
          "name": "loopedConsecutives",
          "package": "rsagl-math",
          "signature": "Int -\u003e [a] -\u003e [[a]]",
          "source": "src/RSAGL-Math-ListUtils.html#loopedConsecutives",
          "type": "function"
        },
        "index": {
          "description": "Answers list containing every sequence of consecutive elements in the parameter looping back to the beginning of the list consecutives",
          "hierarchy": "RSAGL Math ListUtils",
          "module": "RSAGL.Math.ListUtils",
          "name": "loopedConsecutives",
          "normalized": "Int-\u003e[a]-\u003e[[a]]",
          "package": "rsagl-math",
          "partial": "Consecutives",
          "signature": "Int-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-ListUtils.html#v:loopedConsecutives"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eloopedDoubles transforms a list to a list of adjacent elements, looping\n back to the beginning of the list.\n\u003c/p\u003e\u003cpre\u003eloopedRSdoubles [1,2,3,4,5] = [(1,2),(2,3),(3,4),(4,5),(5,1)]\u003c/pre\u003e",
          "module": "RSAGL.Math.ListUtils",
          "name": "loopedDoubles",
          "package": "rsagl-math",
          "signature": "[a] -\u003e [(a, a)]",
          "source": "src/RSAGL-Math-ListUtils.html#loopedDoubles",
          "type": "function"
        },
        "index": {
          "description": "loopedDoubles transforms list to list of adjacent elements looping back to the beginning of the list loopedRSdoubles",
          "hierarchy": "RSAGL Math ListUtils",
          "module": "RSAGL.Math.ListUtils",
          "name": "loopedDoubles",
          "normalized": "[a]-\u003e[(a,a)]",
          "package": "rsagl-math",
          "partial": "Doubles",
          "signature": "[a]-\u003e[(a,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-ListUtils.html#v:loopedDoubles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a list of numbers from 0.0 to 1.0, using n steps.\n This can't be done with the enum-from-to method, due to roundoff errors.\n\u003c/p\u003e",
          "module": "RSAGL.Math.ListUtils",
          "name": "zeroToOne",
          "package": "rsagl-math",
          "signature": "Integer -\u003e [RSdouble]",
          "source": "src/RSAGL-Math-ListUtils.html#zeroToOne",
          "type": "function"
        },
        "index": {
          "description": "Creates list of numbers from to using steps This can be done with the enum-from-to method due to roundoff errors",
          "hierarchy": "RSAGL Math ListUtils",
          "module": "RSAGL.Math.ListUtils",
          "name": "zeroToOne",
          "normalized": "Integer-\u003e[RSdouble]",
          "package": "rsagl-math",
          "partial": "To One",
          "signature": "Integer-\u003e[RSdouble]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-ListUtils.html#v:zeroToOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Matrix",
          "name": "Matrix",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-Matrix.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Math Matrix",
          "module": "RSAGL.Math.Matrix",
          "name": "Matrix",
          "package": "rsagl-math",
          "partial": "Matrix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Matrix",
          "name": "Matrix",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-Matrix.html#Matrix",
          "type": "data"
        },
        "index": {
          "hierarchy": "RSAGL Math Matrix",
          "module": "RSAGL.Math.Matrix",
          "name": "Matrix",
          "package": "rsagl-math",
          "partial": "Matrix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#t:Matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Matrix",
          "name": "colMajorForm",
          "package": "rsagl-math",
          "signature": "Matrix -\u003e [[RSdouble]]",
          "source": "src/RSAGL-Math-Matrix.html#colMajorForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Matrix",
          "module": "RSAGL.Math.Matrix",
          "name": "colMajorForm",
          "normalized": "Matrix-\u003e[[RSdouble]]",
          "package": "rsagl-math",
          "partial": "Major Form",
          "signature": "Matrix-\u003e[[RSdouble]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:colMajorForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Matrix",
          "name": "determinant",
          "package": "rsagl-math",
          "signature": "Matrix -\u003e RSdouble",
          "source": "src/RSAGL-Math-Matrix.html#determinant",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Matrix",
          "module": "RSAGL.Math.Matrix",
          "name": "determinant",
          "normalized": "Matrix-\u003eRSdouble",
          "package": "rsagl-math",
          "signature": "Matrix-\u003eRSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:determinant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Matrix",
          "name": "determinantPrim",
          "package": "rsagl-math",
          "signature": "Matrix -\u003e RSdouble",
          "source": "src/RSAGL-Math-Matrix.html#determinantPrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Matrix",
          "module": "RSAGL.Math.Matrix",
          "name": "determinantPrim",
          "normalized": "Matrix-\u003eRSdouble",
          "package": "rsagl-math",
          "partial": "Prim",
          "signature": "Matrix-\u003eRSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:determinantPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Matrix",
          "name": "identity_matrix",
          "package": "rsagl-math",
          "signature": "Matrix",
          "source": "src/RSAGL-Math-Matrix.html#identity_matrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Matrix",
          "module": "RSAGL.Math.Matrix",
          "name": "identity_matrix",
          "package": "rsagl-math",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:identity_matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Matrix",
          "name": "matrix",
          "package": "rsagl-math",
          "signature": "[[RSdouble]] -\u003e Matrix",
          "source": "src/RSAGL-Math-Matrix.html#matrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Matrix",
          "module": "RSAGL.Math.Matrix",
          "name": "matrix",
          "normalized": "[[RSdouble]]-\u003eMatrix",
          "package": "rsagl-math",
          "signature": "[[RSdouble]]-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Matrix",
          "name": "matrixAdd",
          "package": "rsagl-math",
          "signature": "Matrix -\u003e Matrix -\u003e Matrix",
          "source": "src/RSAGL-Math-Matrix.html#matrixAdd",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Matrix",
          "module": "RSAGL.Math.Matrix",
          "name": "matrixAdd",
          "normalized": "Matrix-\u003eMatrix-\u003eMatrix",
          "package": "rsagl-math",
          "partial": "Add",
          "signature": "Matrix-\u003eMatrix-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:matrixAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Matrix",
          "name": "matrixAt",
          "package": "rsagl-math",
          "signature": "Matrix -\u003e (Int, Int) -\u003e RSdouble",
          "source": "src/RSAGL-Math-Matrix.html#matrixAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Matrix",
          "module": "RSAGL.Math.Matrix",
          "name": "matrixAt",
          "normalized": "Matrix-\u003e(Int,Int)-\u003eRSdouble",
          "package": "rsagl-math",
          "partial": "At",
          "signature": "Matrix-\u003e(Int,Int)-\u003eRSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:matrixAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Matrix",
          "name": "matrixInverse",
          "package": "rsagl-math",
          "signature": "Matrix -\u003e Matrix",
          "source": "src/RSAGL-Math-Matrix.html#matrixInverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Matrix",
          "module": "RSAGL.Math.Matrix",
          "name": "matrixInverse",
          "normalized": "Matrix-\u003eMatrix",
          "package": "rsagl-math",
          "partial": "Inverse",
          "signature": "Matrix-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:matrixInverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Matrix",
          "name": "matrixInversePrim",
          "package": "rsagl-math",
          "signature": "Matrix -\u003e Matrix",
          "source": "src/RSAGL-Math-Matrix.html#matrixInversePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Matrix",
          "module": "RSAGL.Math.Matrix",
          "name": "matrixInversePrim",
          "normalized": "Matrix-\u003eMatrix",
          "package": "rsagl-math",
          "partial": "Inverse Prim",
          "signature": "Matrix-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:matrixInversePrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Matrix",
          "name": "matrixInverseTransposePrim",
          "package": "rsagl-math",
          "signature": "Matrix -\u003e Matrix",
          "source": "src/RSAGL-Math-Matrix.html#matrixInverseTransposePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Matrix",
          "module": "RSAGL.Math.Matrix",
          "name": "matrixInverseTransposePrim",
          "normalized": "Matrix-\u003eMatrix",
          "package": "rsagl-math",
          "partial": "Inverse Transpose Prim",
          "signature": "Matrix-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:matrixInverseTransposePrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Matrix",
          "name": "matrixMultiply",
          "package": "rsagl-math",
          "signature": "Matrix -\u003e Matrix -\u003e Matrix",
          "source": "src/RSAGL-Math-Matrix.html#matrixMultiply",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Matrix",
          "module": "RSAGL.Math.Matrix",
          "name": "matrixMultiply",
          "normalized": "Matrix-\u003eMatrix-\u003eMatrix",
          "package": "rsagl-math",
          "partial": "Multiply",
          "signature": "Matrix-\u003eMatrix-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:matrixMultiply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Matrix",
          "name": "matrixTranspose",
          "package": "rsagl-math",
          "signature": "Matrix -\u003e Matrix",
          "source": "src/RSAGL-Math-Matrix.html#matrixTranspose",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Matrix",
          "module": "RSAGL.Math.Matrix",
          "name": "matrixTranspose",
          "normalized": "Matrix-\u003eMatrix",
          "package": "rsagl-math",
          "partial": "Transpose",
          "signature": "Matrix-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:matrixTranspose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Matrix",
          "name": "matrixTransposePrim",
          "package": "rsagl-math",
          "signature": "Matrix -\u003e Matrix",
          "source": "src/RSAGL-Math-Matrix.html#matrixTransposePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Matrix",
          "module": "RSAGL.Math.Matrix",
          "name": "matrixTransposePrim",
          "normalized": "Matrix-\u003eMatrix",
          "package": "rsagl-math",
          "partial": "Transpose Prim",
          "signature": "Matrix-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:matrixTransposePrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Matrix",
          "name": "rotationMatrix",
          "package": "rsagl-math",
          "signature": "Vector3D -\u003e Angle -\u003e Matrix",
          "source": "src/RSAGL-Math-Matrix.html#rotationMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Matrix",
          "module": "RSAGL.Math.Matrix",
          "name": "rotationMatrix",
          "normalized": "Vector D-\u003eAngle-\u003eMatrix",
          "package": "rsagl-math",
          "partial": "Matrix",
          "signature": "Vector D-\u003eAngle-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:rotationMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Matrix",
          "name": "rowAt",
          "package": "rsagl-math",
          "signature": "Matrix -\u003e Int -\u003e [RSdouble]",
          "source": "src/RSAGL-Math-Matrix.html#rowAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Matrix",
          "module": "RSAGL.Math.Matrix",
          "name": "rowAt",
          "normalized": "Matrix-\u003eInt-\u003e[RSdouble]",
          "package": "rsagl-math",
          "partial": "At",
          "signature": "Matrix-\u003eInt-\u003e[RSdouble]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:rowAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Matrix",
          "name": "rowMajorForm",
          "package": "rsagl-math",
          "signature": "Matrix -\u003e [[RSdouble]]",
          "source": "src/RSAGL-Math-Matrix.html#rowMajorForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Matrix",
          "module": "RSAGL.Math.Matrix",
          "name": "rowMajorForm",
          "normalized": "Matrix-\u003e[[RSdouble]]",
          "package": "rsagl-math",
          "partial": "Major Form",
          "signature": "Matrix-\u003e[[RSdouble]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:rowMajorForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Matrix",
          "name": "scaleMatrix",
          "package": "rsagl-math",
          "signature": "Vector3D -\u003e Matrix",
          "source": "src/RSAGL-Math-Matrix.html#scaleMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Matrix",
          "module": "RSAGL.Math.Matrix",
          "name": "scaleMatrix",
          "normalized": "Vector D-\u003eMatrix",
          "package": "rsagl-math",
          "partial": "Matrix",
          "signature": "Vector D-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:scaleMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a column matrix of length 4, perform an affine transformation on it, and produce the resulting value.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Matrix",
          "name": "transformHomogenous",
          "package": "rsagl-math",
          "signature": "RSdouble -\u003e RSdouble -\u003e RSdouble -\u003e RSdouble -\u003e (RSdouble -\u003e RSdouble -\u003e RSdouble -\u003e a) -\u003e Matrix -\u003e a",
          "source": "src/RSAGL-Math-Matrix.html#transformHomogenous",
          "type": "function"
        },
        "index": {
          "description": "Generate column matrix of length perform an affine transformation on it and produce the resulting value",
          "hierarchy": "RSAGL Math Matrix",
          "module": "RSAGL.Math.Matrix",
          "name": "transformHomogenous",
          "normalized": "RSdouble-\u003eRSdouble-\u003eRSdouble-\u003eRSdouble-\u003e(RSdouble-\u003eRSdouble-\u003eRSdouble-\u003ea)-\u003eMatrix-\u003ea",
          "package": "rsagl-math",
          "partial": "Homogenous",
          "signature": "RSdouble-\u003eRSdouble-\u003eRSdouble-\u003eRSdouble-\u003e(RSdouble-\u003eRSdouble-\u003eRSdouble-\u003ea)-\u003eMatrix-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:transformHomogenous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Matrix",
          "name": "translationMatrix",
          "package": "rsagl-math",
          "signature": "Vector3D -\u003e Matrix",
          "source": "src/RSAGL-Math-Matrix.html#translationMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Matrix",
          "module": "RSAGL.Math.Matrix",
          "name": "translationMatrix",
          "normalized": "Vector D-\u003eMatrix",
          "package": "rsagl-math",
          "partial": "Matrix",
          "signature": "Vector D-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:translationMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Matrix",
          "name": "xyzMatrix",
          "package": "rsagl-math",
          "signature": "Vector3D -\u003e Vector3D -\u003e Vector3D -\u003e Matrix",
          "source": "src/RSAGL-Math-Matrix.html#xyzMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Matrix",
          "module": "RSAGL.Math.Matrix",
          "name": "xyzMatrix",
          "normalized": "Vector D-\u003eVector D-\u003eVector D-\u003eMatrix",
          "package": "rsagl-math",
          "partial": "Matrix",
          "signature": "Vector D-\u003eVector D-\u003eVector D-\u003eMatrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:xyzMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIt's useful to work with the set of coordinate systems restricted to those\n that use orthogonal unit-scaled axes, that is, that are subject only to\n rotation and translation.  This is because these coordinate systems are the\n describe rigid objects.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "RSAGL.Math.Orthogonal",
          "name": "Orthogonal",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-Orthogonal.html",
          "type": "module"
        },
        "index": {
          "description": "It useful to work with the set of coordinate systems restricted to those that use orthogonal unit-scaled axes that is that are subject only to rotation and translation This is because these coordinate systems are the describe rigid objects",
          "hierarchy": "RSAGL Math Orthogonal",
          "module": "RSAGL.Math.Orthogonal",
          "name": "Orthogonal",
          "package": "rsagl-math",
          "partial": "Orthogonal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Orthogonal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Orthogonal",
          "name": "FUR",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-Orthogonal.html#FUR",
          "type": "data"
        },
        "index": {
          "hierarchy": "RSAGL Math Orthogonal",
          "module": "RSAGL.Math.Orthogonal",
          "name": "FUR",
          "package": "rsagl-math",
          "partial": "FUR",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Orthogonal.html#t:FUR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA reference to the -Z axis.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Orthogonal",
          "name": "backward",
          "package": "rsagl-math",
          "signature": "a -\u003e FUR a",
          "source": "src/RSAGL-Math-Orthogonal.html#backward",
          "type": "function"
        },
        "index": {
          "description": "reference to the axis",
          "hierarchy": "RSAGL Math Orthogonal",
          "module": "RSAGL.Math.Orthogonal",
          "name": "backward",
          "normalized": "a-\u003eFUR a",
          "package": "rsagl-math",
          "signature": "a-\u003eFUR a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Orthogonal.html#v:backward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA reference to the -Y axis.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Orthogonal",
          "name": "down",
          "package": "rsagl-math",
          "signature": "a -\u003e FUR a",
          "source": "src/RSAGL-Math-Orthogonal.html#down",
          "type": "function"
        },
        "index": {
          "description": "reference to the axis",
          "hierarchy": "RSAGL Math Orthogonal",
          "module": "RSAGL.Math.Orthogonal",
          "name": "down",
          "normalized": "a-\u003eFUR a",
          "package": "rsagl-math",
          "signature": "a-\u003eFUR a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Orthogonal.html#v:down"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA reference to the +Z axis.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Orthogonal",
          "name": "forward",
          "package": "rsagl-math",
          "signature": "a -\u003e FUR a",
          "source": "src/RSAGL-Math-Orthogonal.html#forward",
          "type": "function"
        },
        "index": {
          "description": "reference to the axis",
          "hierarchy": "RSAGL Math Orthogonal",
          "module": "RSAGL.Math.Orthogonal",
          "name": "forward",
          "normalized": "a-\u003eFUR a",
          "package": "rsagl-math",
          "signature": "a-\u003eFUR a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Orthogonal.html#v:forward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA reference to the -X axis.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Orthogonal",
          "name": "left",
          "package": "rsagl-math",
          "signature": "a -\u003e FUR a",
          "source": "src/RSAGL-Math-Orthogonal.html#left",
          "type": "function"
        },
        "index": {
          "description": "reference to the axis",
          "hierarchy": "RSAGL Math Orthogonal",
          "module": "RSAGL.Math.Orthogonal",
          "name": "left",
          "normalized": "a-\u003eFUR a",
          "package": "rsagl-math",
          "signature": "a-\u003eFUR a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Orthogonal.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslates and rotates a model to aim at a given position or in a\n given direction from a given vantage point.  This is analogous\n to camera look-at functions, and could be used, for example, to\n cause a model of an eyeball to track a particular target.\n The first parameter is the position of the model.  Typically the second\n parameter will be the position of the target, and the third parameter will\n \u003ccode\u003e(up $ Vector3D 0 1 0)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Orthogonal",
          "name": "modelLookAt",
          "package": "rsagl-math",
          "signature": "Point3D -\u003e FUR (Either Point3D Vector3D) -\u003e FUR (Either Point3D Vector3D) -\u003e a -\u003e a",
          "source": "src/RSAGL-Math-Orthogonal.html#modelLookAt",
          "type": "function"
        },
        "index": {
          "description": "Translates and rotates model to aim at given position or in given direction from given vantage point This is analogous to camera look-at functions and could be used for example to cause model of an eyeball to track particular target The first parameter is the position of the model Typically the second parameter will be the position of the target and the third parameter will up Vector3D",
          "hierarchy": "RSAGL Math Orthogonal",
          "module": "RSAGL.Math.Orthogonal",
          "name": "modelLookAt",
          "normalized": "Point D-\u003eFUR(Either Point D Vector D)-\u003eFUR(Either Point D Vector D)-\u003ea-\u003ea",
          "package": "rsagl-math",
          "partial": "Look At",
          "signature": "Point D-\u003eFUR(Either Point D Vector D)-\u003eFUR(Either Point D Vector D)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Orthogonal.html#v:modelLookAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two axial references to describe a rigid affine transformation.\n Accepts any combination of non-coaxial references.\n In the affine transformation, the old axes will be mapped onto the specified\n freeform axes.\n\u003c/p\u003e\u003cp\u003eThe first parameter is absolute, meaning that the source axis will always map\n perfectly onto the destination axis.  The second parameter will be obeyed\n on a \u003ca\u003ebest effort\u003c/a\u003e basis.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Orthogonal",
          "name": "orthogonalFrame",
          "package": "rsagl-math",
          "signature": "FUR Vector3D -\u003e FUR Vector3D -\u003e a -\u003e a",
          "source": "src/RSAGL-Math-Orthogonal.html#orthogonalFrame",
          "type": "function"
        },
        "index": {
          "description": "Combine two axial references to describe rigid affine transformation Accepts any combination of non-coaxial references In the affine transformation the old axes will be mapped onto the specified freeform axes The first parameter is absolute meaning that the source axis will always map perfectly onto the destination axis The second parameter will be obeyed on best effort basis",
          "hierarchy": "RSAGL Math Orthogonal",
          "module": "RSAGL.Math.Orthogonal",
          "name": "orthogonalFrame",
          "normalized": "FUR Vector D-\u003eFUR Vector D-\u003ea-\u003ea",
          "package": "rsagl-math",
          "partial": "Frame",
          "signature": "FUR Vector D-\u003eFUR Vector D-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Orthogonal.html#v:orthogonalFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA reference to the +X axis.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Orthogonal",
          "name": "right",
          "package": "rsagl-math",
          "signature": "a -\u003e FUR a",
          "source": "src/RSAGL-Math-Orthogonal.html#right",
          "type": "function"
        },
        "index": {
          "description": "reference to the axis",
          "hierarchy": "RSAGL Math Orthogonal",
          "module": "RSAGL.Math.Orthogonal",
          "name": "right",
          "normalized": "a-\u003eFUR a",
          "package": "rsagl-math",
          "signature": "a-\u003eFUR a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Orthogonal.html#v:right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA reference to the +Y axis.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Orthogonal",
          "name": "up",
          "package": "rsagl-math",
          "signature": "a -\u003e FUR a",
          "source": "src/RSAGL-Math-Orthogonal.html#up",
          "type": "function"
        },
        "index": {
          "description": "reference to the axis",
          "hierarchy": "RSAGL Math Orthogonal",
          "module": "RSAGL.Math.Orthogonal",
          "name": "up",
          "normalized": "a-\u003eFUR a",
          "package": "rsagl-math",
          "signature": "a-\u003eFUR a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Orthogonal.html#v:up"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Ray",
          "name": "Ray",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-Ray.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Math Ray",
          "module": "RSAGL.Math.Ray",
          "name": "Ray",
          "package": "rsagl-math",
          "partial": "Ray",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Ray.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRays with endpoints and vectors.\n\u003c/p\u003e\u003cp\u003eAlthough a ray is isomorphic to a \u003ccode\u003e\u003ca\u003eSurfaceVertex3D\u003c/a\u003e\u003c/code\u003e, it does not have the\n same behavior.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Ray",
          "name": "Ray3D",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-Ray.html#Ray3D",
          "type": "data"
        },
        "index": {
          "description": "Rays with endpoints and vectors Although ray is isomorphic to SurfaceVertex3D it does not have the same behavior",
          "hierarchy": "RSAGL Math Ray",
          "module": "RSAGL.Math.Ray",
          "name": "Ray3D",
          "package": "rsagl-math",
          "partial": "Ray",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Ray.html#t:Ray3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Ray",
          "name": "Ray3D",
          "package": "rsagl-math",
          "signature": "Ray3D",
          "source": "src/RSAGL-Math-Ray.html#Ray3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Ray",
          "module": "RSAGL.Math.Ray",
          "name": "Ray3D",
          "package": "rsagl-math",
          "partial": "Ray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Ray.html#v:Ray3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe angle between vector of the ray and the vector from the\n endpoint of the ray to the specified point.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Ray",
          "name": "angleFrom",
          "package": "rsagl-math",
          "signature": "Ray3D -\u003e Point3D -\u003e Angle",
          "source": "src/RSAGL-Math-Ray.html#angleFrom",
          "type": "function"
        },
        "index": {
          "description": "The angle between vector of the ray and the vector from the endpoint of the ray to the specified point",
          "hierarchy": "RSAGL Math Ray",
          "module": "RSAGL.Math.Ray",
          "name": "angleFrom",
          "normalized": "Ray D-\u003ePoint D-\u003eAngle",
          "package": "rsagl-math",
          "partial": "From",
          "signature": "Ray D-\u003ePoint D-\u003eAngle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Ray.html#v:angleFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inverse operation to \u003ccode\u003e\u003ca\u003eprojectRay\u003c/a\u003e\u003c/code\u003e.  This could also be\n understood as the height of the point above the plane defined\n by the ray.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Ray",
          "name": "distanceAlong",
          "package": "rsagl-math",
          "signature": "Ray3D -\u003e Point3D -\u003e RSdouble",
          "source": "src/RSAGL-Math-Ray.html#distanceAlong",
          "type": "function"
        },
        "index": {
          "description": "The inverse operation to projectRay This could also be understood as the height of the point above the plane defined by the ray",
          "hierarchy": "RSAGL Math Ray",
          "module": "RSAGL.Math.Ray",
          "name": "distanceAlong",
          "normalized": "Ray D-\u003ePoint D-\u003eRSdouble",
          "package": "rsagl-math",
          "partial": "Along",
          "signature": "Ray D-\u003ePoint D-\u003eRSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Ray.html#v:distanceAlong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA ray normalize to a length of 1.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Ray",
          "name": "normalizeRay",
          "package": "rsagl-math",
          "signature": "Ray3D -\u003e Ray3D",
          "source": "src/RSAGL-Math-Ray.html#normalizeRay",
          "type": "function"
        },
        "index": {
          "description": "ray normalize to length of",
          "hierarchy": "RSAGL Math Ray",
          "module": "RSAGL.Math.Ray",
          "name": "normalizeRay",
          "normalized": "Ray D-\u003eRay D",
          "package": "rsagl-math",
          "partial": "Ray",
          "signature": "Ray D-\u003eRay D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Ray.html#v:normalizeRay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parametric function of a ray.  The parameter is measured as a\n proportion of the length of the vector.  \u003ccode\u003eprojectRay 0\u003c/code\u003e is the\n endpoint of the ray.  \u003ccode\u003eprojectRay 1\u003c/code\u003e is the endpoint offset\n by the ray's vector.\n\u003c/p\u003e",
          "module": "RSAGL.Math.Ray",
          "name": "projectRay",
          "package": "rsagl-math",
          "signature": "RSdouble -\u003e Ray3D -\u003e Point3D",
          "source": "src/RSAGL-Math-Ray.html#projectRay",
          "type": "function"
        },
        "index": {
          "description": "The parametric function of ray The parameter is measured as proportion of the length of the vector projectRay is the endpoint of the ray projectRay is the endpoint offset by the ray vector",
          "hierarchy": "RSAGL Math Ray",
          "module": "RSAGL.Math.Ray",
          "name": "projectRay",
          "normalized": "RSdouble-\u003eRay D-\u003ePoint D",
          "package": "rsagl-math",
          "partial": "Ray",
          "signature": "RSdouble-\u003eRay D-\u003ePoint D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Ray.html#v:projectRay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Ray",
          "name": "ray_endpoint",
          "package": "rsagl-math",
          "signature": "Point3D",
          "source": "src/RSAGL-Math-Ray.html#Ray3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Ray",
          "module": "RSAGL.Math.Ray",
          "name": "ray_endpoint",
          "package": "rsagl-math",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Ray.html#v:ray_endpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Ray",
          "name": "ray_vector",
          "package": "rsagl-math",
          "signature": "Vector3D",
          "source": "src/RSAGL-Math-Ray.html#Ray3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Ray",
          "module": "RSAGL.Math.Ray",
          "name": "ray_vector",
          "package": "rsagl-math",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Ray.html#v:ray_vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Types",
          "name": "Types",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Math Types",
          "module": "RSAGL.Math.Types",
          "name": "Types",
          "package": "rsagl-math",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Types",
          "name": "RSdouble",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-Types.html#RSdouble",
          "type": "data"
        },
        "index": {
          "hierarchy": "RSAGL Math Types",
          "module": "RSAGL.Math.Types",
          "name": "RSdouble",
          "package": "rsagl-math",
          "partial": "RSdouble",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Types.html#t:RSdouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Types",
          "name": "RSfloat",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-Types.html#RSfloat",
          "type": "data"
        },
        "index": {
          "hierarchy": "RSAGL Math Types",
          "module": "RSAGL.Math.Types",
          "name": "RSfloat",
          "package": "rsagl-math",
          "partial": "RSfloat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Types.html#t:RSfloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Types",
          "name": "f2f",
          "package": "rsagl-math",
          "signature": "a -\u003e b",
          "source": "src/RSAGL-Math-Types.html#f2f",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Types",
          "module": "RSAGL.Math.Types",
          "name": "f2f",
          "normalized": "a-\u003eb",
          "package": "rsagl-math",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Types.html#v:f2f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Types",
          "name": "fromGLdouble",
          "package": "rsagl-math",
          "signature": "GLdouble -\u003e RSdouble",
          "source": "src/RSAGL-Math-Types.html#fromGLdouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Types",
          "module": "RSAGL.Math.Types",
          "name": "fromGLdouble",
          "normalized": "GLdouble-\u003eRSdouble",
          "package": "rsagl-math",
          "partial": "GLdouble",
          "signature": "GLdouble-\u003eRSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Types.html#v:fromGLdouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Types",
          "name": "fromGLfloat",
          "package": "rsagl-math",
          "signature": "GLfloat -\u003e RSfloat",
          "source": "src/RSAGL-Math-Types.html#fromGLfloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Types",
          "module": "RSAGL.Math.Types",
          "name": "fromGLfloat",
          "normalized": "GLfloat-\u003eRSfloat",
          "package": "rsagl-math",
          "partial": "GLfloat",
          "signature": "GLfloat-\u003eRSfloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Types.html#v:fromGLfloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Types",
          "name": "toGLdouble",
          "package": "rsagl-math",
          "signature": "RSdouble -\u003e GLdouble",
          "source": "src/RSAGL-Math-Types.html#toGLdouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Types",
          "module": "RSAGL.Math.Types",
          "name": "toGLdouble",
          "normalized": "RSdouble-\u003eGLdouble",
          "package": "rsagl-math",
          "partial": "GLdouble",
          "signature": "RSdouble-\u003eGLdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Types.html#v:toGLdouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Types",
          "name": "toGLfloat",
          "package": "rsagl-math",
          "signature": "RSfloat -\u003e GLfloat",
          "source": "src/RSAGL-Math-Types.html#toGLfloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Types",
          "module": "RSAGL.Math.Types",
          "name": "toGLfloat",
          "normalized": "RSfloat-\u003eGLfloat",
          "package": "rsagl-math",
          "partial": "GLfloat",
          "signature": "RSfloat-\u003eGLfloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Types.html#v:toGLfloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "Vector",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-Vector.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "Vector",
          "package": "rsagl-math",
          "partial": "Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "Point3D",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-Vector.html#Point3D",
          "type": "data"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "Point3D",
          "package": "rsagl-math",
          "partial": "Point",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#t:Point3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "SurfaceVertex3D",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-Vector.html#SurfaceVertex3D",
          "type": "data"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "SurfaceVertex3D",
          "package": "rsagl-math",
          "partial": "Surface Vertex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#t:SurfaceVertex3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "Vector3D",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-Vector.html#Vector3D",
          "type": "data"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "Vector3D",
          "package": "rsagl-math",
          "partial": "Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#t:Vector3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "XYZ",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-Vector.html#XYZ",
          "type": "type"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "XYZ",
          "package": "rsagl-math",
          "partial": "XYZ",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#t:XYZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "Xyz",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math-Vector.html#Xyz",
          "type": "class"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "Xyz",
          "package": "rsagl-math",
          "partial": "Xyz",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#t:Xyz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "Point3D",
          "package": "rsagl-math",
          "signature": "Point3D !RSdouble !RSdouble !RSdouble",
          "source": "src/RSAGL-Math-Vector.html#Point3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "Point3D",
          "package": "rsagl-math",
          "partial": "Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:Point3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "SurfaceVertex3D",
          "package": "rsagl-math",
          "signature": "SurfaceVertex3D",
          "source": "src/RSAGL-Math-Vector.html#SurfaceVertex3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "SurfaceVertex3D",
          "package": "rsagl-math",
          "partial": "Surface Vertex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:SurfaceVertex3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "Vector3D",
          "package": "rsagl-math",
          "signature": "Vector3D !RSdouble !RSdouble !RSdouble",
          "source": "src/RSAGL-Math-Vector.html#Vector3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "Vector3D",
          "package": "rsagl-math",
          "partial": "Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:Vector3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "aLargeVector",
          "package": "rsagl-math",
          "signature": "RSdouble -\u003e Vector3D -\u003e Maybe Vector3D",
          "source": "src/RSAGL-Math-Vector.html#aLargeVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "aLargeVector",
          "normalized": "RSdouble-\u003eVector D-\u003eMaybe Vector D",
          "package": "rsagl-math",
          "partial": "Large Vector",
          "signature": "RSdouble-\u003eVector D-\u003eMaybe Vector D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:aLargeVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "aNonZeroVector",
          "package": "rsagl-math",
          "signature": "Vector3D -\u003e Maybe Vector3D",
          "source": "src/RSAGL-Math-Vector.html#aNonZeroVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "aNonZeroVector",
          "normalized": "Vector D-\u003eMaybe Vector D",
          "package": "rsagl-math",
          "partial": "Non Zero Vector",
          "signature": "Vector D-\u003eMaybe Vector D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:aNonZeroVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "angleBetween",
          "package": "rsagl-math",
          "signature": "Vector3D -\u003e Vector3D -\u003e Angle",
          "source": "src/RSAGL-Math-Vector.html#angleBetween",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "angleBetween",
          "normalized": "Vector D-\u003eVector D-\u003eAngle",
          "package": "rsagl-math",
          "partial": "Between",
          "signature": "Vector D-\u003eVector D-\u003eAngle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:angleBetween"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "crossProduct",
          "package": "rsagl-math",
          "signature": "Vector3D -\u003e Vector3D -\u003e Vector3D",
          "source": "src/RSAGL-Math-Vector.html#crossProduct",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "crossProduct",
          "normalized": "Vector D-\u003eVector D-\u003eVector D",
          "package": "rsagl-math",
          "partial": "Product",
          "signature": "Vector D-\u003eVector D-\u003eVector D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:crossProduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "distanceBetween",
          "package": "rsagl-math",
          "signature": "xyz -\u003e xyz -\u003e RSdouble",
          "source": "src/RSAGL-Math-Vector.html#distanceBetween",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "distanceBetween",
          "normalized": "a-\u003ea-\u003eRSdouble",
          "package": "rsagl-math",
          "partial": "Between",
          "signature": "xyz-\u003exyz-\u003eRSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:distanceBetween"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "distanceBetweenSquared",
          "package": "rsagl-math",
          "signature": "xyz -\u003e xyz -\u003e RSdouble",
          "source": "src/RSAGL-Math-Vector.html#distanceBetweenSquared",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "distanceBetweenSquared",
          "normalized": "a-\u003ea-\u003eRSdouble",
          "package": "rsagl-math",
          "partial": "Between Squared",
          "signature": "xyz-\u003exyz-\u003eRSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:distanceBetweenSquared"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "dotProduct",
          "package": "rsagl-math",
          "signature": "Vector3D -\u003e Vector3D -\u003e RSdouble",
          "source": "src/RSAGL-Math-Vector.html#dotProduct",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "dotProduct",
          "normalized": "Vector D-\u003eVector D-\u003eRSdouble",
          "package": "rsagl-math",
          "partial": "Product",
          "signature": "Vector D-\u003eVector D-\u003eRSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:dotProduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "fixOrtho",
          "package": "rsagl-math",
          "signature": "Vector3D -\u003e Vector3D -\u003e Vector3D",
          "source": "src/RSAGL-Math-Vector.html#fixOrtho",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "fixOrtho",
          "normalized": "Vector D-\u003eVector D-\u003eVector D",
          "package": "rsagl-math",
          "partial": "Ortho",
          "signature": "Vector D-\u003eVector D-\u003eVector D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:fixOrtho"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "fixOrtho2",
          "package": "rsagl-math",
          "signature": "Vector3D -\u003e Vector3D -\u003e (Vector3D, Vector3D)",
          "source": "src/RSAGL-Math-Vector.html#fixOrtho2",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "fixOrtho2",
          "normalized": "Vector D-\u003eVector D-\u003e(Vector D,Vector D)",
          "package": "rsagl-math",
          "partial": "Ortho",
          "signature": "Vector D-\u003eVector D-\u003e(Vector D,Vector D)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:fixOrtho2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "fixOrtho2Left",
          "package": "rsagl-math",
          "signature": "Vector3D -\u003e Vector3D -\u003e (Vector3D, Vector3D)",
          "source": "src/RSAGL-Math-Vector.html#fixOrtho2Left",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "fixOrtho2Left",
          "normalized": "Vector D-\u003eVector D-\u003e(Vector D,Vector D)",
          "package": "rsagl-math",
          "partial": "Ortho Left",
          "signature": "Vector D-\u003eVector D-\u003e(Vector D,Vector D)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:fixOrtho2Left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "fromXYZ",
          "package": "rsagl-math",
          "signature": "XYZ -\u003e a",
          "source": "src/RSAGL-Math-Vector.html#fromXYZ",
          "type": "method"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "fromXYZ",
          "normalized": "XYZ-\u003ea",
          "package": "rsagl-math",
          "partial": "XYZ",
          "signature": "XYZ-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:fromXYZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "newell",
          "package": "rsagl-math",
          "signature": "[Point3D] -\u003e Maybe Vector3D",
          "source": "src/RSAGL-Math-Vector.html#newell",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "newell",
          "normalized": "[Point D]-\u003eMaybe Vector D",
          "package": "rsagl-math",
          "signature": "[Point D]-\u003eMaybe Vector D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:newell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "origin_point_3d",
          "package": "rsagl-math",
          "signature": "Point3D",
          "source": "src/RSAGL-Math-Vector.html#origin_point_3d",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "origin_point_3d",
          "package": "rsagl-math",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:origin_point_3d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "orthos",
          "package": "rsagl-math",
          "signature": "Vector3D -\u003e (Vector3D, Vector3D)",
          "source": "src/RSAGL-Math-Vector.html#orthos",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "orthos",
          "normalized": "Vector D-\u003e(Vector D,Vector D)",
          "package": "rsagl-math",
          "signature": "Vector D-\u003e(Vector D,Vector D)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:orthos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "point2d",
          "package": "rsagl-math",
          "signature": "(RSdouble, RSdouble) -\u003e Point3D",
          "source": "src/RSAGL-Math-Vector.html#point2d",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "point2d",
          "normalized": "(RSdouble,RSdouble)-\u003ePoint D",
          "package": "rsagl-math",
          "signature": "(RSdouble,RSdouble)-\u003ePoint D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:point2d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "point3d",
          "package": "rsagl-math",
          "signature": "(RSdouble, RSdouble, RSdouble) -\u003e Point3D",
          "source": "src/RSAGL-Math-Vector.html#point3d",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "point3d",
          "normalized": "(RSdouble,RSdouble,RSdouble)-\u003ePoint D",
          "package": "rsagl-math",
          "signature": "(RSdouble,RSdouble,RSdouble)-\u003ePoint D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:point3d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "points2d",
          "package": "rsagl-math",
          "signature": "[(RSdouble, RSdouble)] -\u003e [Point3D]",
          "source": "src/RSAGL-Math-Vector.html#points2d",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "points2d",
          "normalized": "[(RSdouble,RSdouble)]-\u003e[Point D]",
          "package": "rsagl-math",
          "signature": "[(RSdouble,RSdouble)]-\u003e[Point D]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:points2d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "points3d",
          "package": "rsagl-math",
          "signature": "[(RSdouble, RSdouble, RSdouble)] -\u003e [Point3D]",
          "source": "src/RSAGL-Math-Vector.html#points3d",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "points3d",
          "normalized": "[(RSdouble,RSdouble,RSdouble)]-\u003e[Point D]",
          "package": "rsagl-math",
          "signature": "[(RSdouble,RSdouble,RSdouble)]-\u003e[Point D]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:points3d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "randomXYZ",
          "package": "rsagl-math",
          "signature": "(RSdouble, RSdouble) -\u003e g -\u003e (p, g)",
          "source": "src/RSAGL-Math-Vector.html#randomXYZ",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "randomXYZ",
          "normalized": "(RSdouble,RSdouble)-\u003ea-\u003e(b,a)",
          "package": "rsagl-math",
          "partial": "XYZ",
          "signature": "(RSdouble,RSdouble)-\u003eg-\u003e(p,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:randomXYZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "sv3d_normal",
          "package": "rsagl-math",
          "signature": "Vector3D",
          "source": "src/RSAGL-Math-Vector.html#SurfaceVertex3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "sv3d_normal",
          "package": "rsagl-math",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:sv3d_normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "sv3d_position",
          "package": "rsagl-math",
          "signature": "Point3D",
          "source": "src/RSAGL-Math-Vector.html#SurfaceVertex3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "sv3d_position",
          "package": "rsagl-math",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:sv3d_position"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "toXYZ",
          "package": "rsagl-math",
          "signature": "a -\u003e XYZ",
          "source": "src/RSAGL-Math-Vector.html#toXYZ",
          "type": "method"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "toXYZ",
          "normalized": "a-\u003eXYZ",
          "package": "rsagl-math",
          "partial": "XYZ",
          "signature": "a-\u003eXYZ",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:toXYZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "vector3d",
          "package": "rsagl-math",
          "signature": "(RSdouble, RSdouble, RSdouble) -\u003e Vector3D",
          "source": "src/RSAGL-Math-Vector.html#vector3d",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "vector3d",
          "normalized": "(RSdouble,RSdouble,RSdouble)-\u003eVector D",
          "package": "rsagl-math",
          "signature": "(RSdouble,RSdouble,RSdouble)-\u003eVector D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:vector3d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "vectorAdd",
          "package": "rsagl-math",
          "signature": "Vector3D -\u003e Vector3D -\u003e Vector3D",
          "source": "src/RSAGL-Math-Vector.html#vectorAdd",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "vectorAdd",
          "normalized": "Vector D-\u003eVector D-\u003eVector D",
          "package": "rsagl-math",
          "partial": "Add",
          "signature": "Vector D-\u003eVector D-\u003eVector D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:vectorAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "vectorAverage",
          "package": "rsagl-math",
          "signature": "[Vector3D] -\u003e Vector3D",
          "source": "src/RSAGL-Math-Vector.html#vectorAverage",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "vectorAverage",
          "normalized": "[Vector D]-\u003eVector D",
          "package": "rsagl-math",
          "partial": "Average",
          "signature": "[Vector D]-\u003eVector D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:vectorAverage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "vectorLength",
          "package": "rsagl-math",
          "signature": "Vector3D -\u003e RSdouble",
          "source": "src/RSAGL-Math-Vector.html#vectorLength",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "vectorLength",
          "normalized": "Vector D-\u003eRSdouble",
          "package": "rsagl-math",
          "partial": "Length",
          "signature": "Vector D-\u003eRSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:vectorLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "vectorLengthSquared",
          "package": "rsagl-math",
          "signature": "Vector3D -\u003e RSdouble",
          "source": "src/RSAGL-Math-Vector.html#vectorLengthSquared",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "vectorLengthSquared",
          "normalized": "Vector D-\u003eRSdouble",
          "package": "rsagl-math",
          "partial": "Length Squared",
          "signature": "Vector D-\u003eRSdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:vectorLengthSquared"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "vectorNormalize",
          "package": "rsagl-math",
          "signature": "Vector3D -\u003e Vector3D",
          "source": "src/RSAGL-Math-Vector.html#vectorNormalize",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "vectorNormalize",
          "normalized": "Vector D-\u003eVector D",
          "package": "rsagl-math",
          "partial": "Normalize",
          "signature": "Vector D-\u003eVector D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:vectorNormalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "vectorScale",
          "package": "rsagl-math",
          "signature": "RSdouble -\u003e Vector3D -\u003e Vector3D",
          "source": "src/RSAGL-Math-Vector.html#vectorScale",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "vectorScale",
          "normalized": "RSdouble-\u003eVector D-\u003eVector D",
          "package": "rsagl-math",
          "partial": "Scale",
          "signature": "RSdouble-\u003eVector D-\u003eVector D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:vectorScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "vectorScaleTo",
          "package": "rsagl-math",
          "signature": "RSdouble -\u003e Vector3D -\u003e Vector3D",
          "source": "src/RSAGL-Math-Vector.html#vectorScaleTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "vectorScaleTo",
          "normalized": "RSdouble-\u003eVector D-\u003eVector D",
          "package": "rsagl-math",
          "partial": "Scale To",
          "signature": "RSdouble-\u003eVector D-\u003eVector D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:vectorScaleTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "vectorString",
          "package": "rsagl-math",
          "signature": "a -\u003e String",
          "source": "src/RSAGL-Math-Vector.html#vectorString",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "vectorString",
          "normalized": "a-\u003eString",
          "package": "rsagl-math",
          "partial": "String",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:vectorString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "vectorSum",
          "package": "rsagl-math",
          "signature": "[Vector3D] -\u003e Vector3D",
          "source": "src/RSAGL-Math-Vector.html#vectorSum",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "vectorSum",
          "normalized": "[Vector D]-\u003eVector D",
          "package": "rsagl-math",
          "partial": "Sum",
          "signature": "[Vector D]-\u003eVector D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:vectorSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "vectorToFrom",
          "package": "rsagl-math",
          "signature": "xyz -\u003e xyz -\u003e Vector3D",
          "source": "src/RSAGL-Math-Vector.html#vectorToFrom",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "vectorToFrom",
          "normalized": "a-\u003ea-\u003eVector D",
          "package": "rsagl-math",
          "partial": "To From",
          "signature": "xyz-\u003exyz-\u003eVector D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:vectorToFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math.Vector",
          "name": "zero_vector",
          "package": "rsagl-math",
          "signature": "Vector3D",
          "source": "src/RSAGL-Math-Vector.html#zero_vector",
          "type": "function"
        },
        "index": {
          "hierarchy": "RSAGL Math Vector",
          "module": "RSAGL.Math.Vector",
          "name": "zero_vector",
          "package": "rsagl-math",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:zero_vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RSAGL.Math",
          "name": "Math",
          "package": "rsagl-math",
          "source": "src/RSAGL-Math.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "RSAGL Math",
          "module": "RSAGL.Math",
          "name": "Math",
          "package": "rsagl-math",
          "partial": "Math",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math.html#"
      }
    }
  ]
]