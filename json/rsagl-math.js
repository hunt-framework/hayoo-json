[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides generic typeclasses for common operations among many types: addition, subtraction, scalar multiplication, magnitude, and zero.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "RSAGL.Math.AbstractVector",
        "fct-package": "rsagl-math",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Math-AbstractVector.html",
        "fct-type": "module",
        "title": "AbstractVector"
      },
      "index": {
        "description": "Provides generic typeclasses for common operations among many types addition subtraction scalar multiplication magnitude and zero",
        "hierarchy": "RSAGL Math AbstractVector",
        "module": "RSAGL.Math.AbstractVector",
        "name": "AbstractVector",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Abstract Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#t:AbstractAdd",
      "description": {
        "fct-descr": "\u003cp\u003eA data type that supports addition.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003ea \u003ccode\u003e\u003ca\u003eadd\u003c/a\u003e\u003c/code\u003e zero = a\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "RSAGL.Math.AbstractVector",
        "fct-package": "rsagl-math",
        "fct-signature": "class",
        "fct-source": "src/RSAGL-Math-AbstractVector.html#AbstractAdd",
        "fct-type": "class",
        "title": "AbstractAdd"
      },
      "index": {
        "description": "data type that supports addition add zero",
        "hierarchy": "RSAGL Math AbstractVector",
        "module": "RSAGL.Math.AbstractVector",
        "name": "AbstractAdd",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Abstract Add",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#t:AbstractMagnitude",
      "description": {
        "fct-descr": "\u003cp\u003eA data type that supports scalar magnitude.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003emagnitude (scalarMultiply (recip $ magnitude a) a) = 1\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "RSAGL.Math.AbstractVector",
        "fct-package": "rsagl-math",
        "fct-signature": "class",
        "fct-source": "src/RSAGL-Math-AbstractVector.html#AbstractMagnitude",
        "fct-type": "class",
        "title": "AbstractMagnitude"
      },
      "index": {
        "description": "data type that supports scalar magnitude magnitude scalarMultiply recip magnitude",
        "hierarchy": "RSAGL Math AbstractVector",
        "module": "RSAGL.Math.AbstractVector",
        "name": "AbstractMagnitude",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Abstract Magnitude",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#t:AbstractScale",
      "description": {
        "fct-descr": "\u003cp\u003eA data type that supports scalar multiplication.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003escalarMultiply 0 a = zero\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "RSAGL.Math.AbstractVector",
        "fct-package": "rsagl-math",
        "fct-signature": "class",
        "fct-source": "src/RSAGL-Math-AbstractVector.html#AbstractScale",
        "fct-type": "class",
        "title": "AbstractScale"
      },
      "index": {
        "description": "data type that supports scalar multiplication scalarMultiply zero",
        "hierarchy": "RSAGL Math AbstractVector",
        "module": "RSAGL.Math.AbstractVector",
        "name": "AbstractScale",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Abstract Scale",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#t:AbstractSubtract",
      "description": {
        "fct-descr": "\u003cp\u003eA data type that supports subtraction.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003ea \u003ccode\u003e\u003ca\u003esub\u003c/a\u003e\u003c/code\u003e a = zero\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "RSAGL.Math.AbstractVector",
        "fct-package": "rsagl-math",
        "fct-signature": "class",
        "fct-source": "src/RSAGL-Math-AbstractVector.html#AbstractSubtract",
        "fct-type": "class",
        "title": "AbstractSubtract"
      },
      "index": {
        "description": "data type that supports subtraction sub zero",
        "hierarchy": "RSAGL Math AbstractVector",
        "module": "RSAGL.Math.AbstractVector",
        "name": "AbstractSubtract",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Abstract Subtract",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#t:AbstractVector",
      "description": {
        "fct-descr": "\u003cp\u003eA convenience class for many vector types.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.AbstractVector",
        "fct-package": "rsagl-math",
        "fct-signature": "class",
        "fct-source": "src/RSAGL-Math-AbstractVector.html#AbstractVector",
        "fct-type": "class",
        "title": "AbstractVector"
      },
      "index": {
        "description": "convenience class for many vector types",
        "hierarchy": "RSAGL Math AbstractVector",
        "module": "RSAGL.Math.AbstractVector",
        "name": "AbstractVector",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Abstract Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#t:AbstractZero",
      "description": {
        "fct-descr": "\u003cp\u003eA data type that has an additive identity.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.AbstractVector",
        "fct-package": "rsagl-math",
        "fct-signature": "class",
        "fct-source": "src/RSAGL-Math-AbstractVector.html#AbstractZero",
        "fct-type": "class",
        "title": "AbstractZero"
      },
      "index": {
        "description": "data type that has an additive identity",
        "hierarchy": "RSAGL Math AbstractVector",
        "module": "RSAGL.Math.AbstractVector",
        "name": "AbstractZero",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Abstract Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#v:abstractAverage",
      "description": {
        "fct-descr": "\u003cp\u003eAverage of a list.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.AbstractVector",
        "fct-package": "rsagl-math",
        "fct-signature": "[p] -\u003e p",
        "fct-source": "src/RSAGL-Math-AbstractVector.html#abstractAverage",
        "fct-type": "function",
        "title": "abstractAverage"
      },
      "index": {
        "description": "Average of list",
        "hierarchy": "RSAGL Math AbstractVector",
        "module": "RSAGL.Math.AbstractVector",
        "name": "abstractAverage",
        "normalized": "[a]-\u003ea",
        "package": "rsagl-math",
        "partial": "Average",
        "signature": "[p]-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#v:abstractDistance",
      "description": {
        "fct-descr": "\u003cp\u003eDistance between two points, based on the \u003ccode\u003e\u003ca\u003emagnitude\u003c/a\u003e\u003c/code\u003e of the difference.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.AbstractVector",
        "fct-package": "rsagl-math",
        "fct-signature": "p -\u003e p -\u003e RSdouble",
        "fct-source": "src/RSAGL-Math-AbstractVector.html#abstractDistance",
        "fct-type": "function",
        "title": "abstractDistance"
      },
      "index": {
        "description": "Distance between two points based on the magnitude of the difference",
        "hierarchy": "RSAGL Math AbstractVector",
        "module": "RSAGL.Math.AbstractVector",
        "name": "abstractDistance",
        "normalized": "a-\u003ea-\u003eRSdouble",
        "package": "rsagl-math",
        "partial": "Distance",
        "signature": "p-\u003ep-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#v:abstractScaleTo",
      "description": {
        "fct-descr": "\u003cp\u003eForce a vector to the specified magnitude.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.AbstractVector",
        "fct-package": "rsagl-math",
        "fct-signature": "RSdouble -\u003e v -\u003e v",
        "fct-source": "src/RSAGL-Math-AbstractVector.html#abstractScaleTo",
        "fct-type": "function",
        "title": "abstractScaleTo"
      },
      "index": {
        "description": "Force vector to the specified magnitude",
        "hierarchy": "RSAGL Math AbstractVector",
        "module": "RSAGL.Math.AbstractVector",
        "name": "abstractScaleTo",
        "normalized": "RSdouble-\u003ea-\u003ea",
        "package": "rsagl-math",
        "partial": "Scale To",
        "signature": "RSdouble-\u003ev-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#v:abstractSum",
      "description": {
        "fct-descr": "\u003cp\u003eSum of a list.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.AbstractVector",
        "fct-package": "rsagl-math",
        "fct-signature": "[v] -\u003e p",
        "fct-source": "src/RSAGL-Math-AbstractVector.html#abstractSum",
        "fct-type": "function",
        "title": "abstractSum"
      },
      "index": {
        "description": "Sum of list",
        "hierarchy": "RSAGL Math AbstractVector",
        "module": "RSAGL.Math.AbstractVector",
        "name": "abstractSum",
        "normalized": "[a]-\u003eb",
        "package": "rsagl-math",
        "partial": "Sum",
        "signature": "[v]-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#v:add",
      "description": {
        "fct-module": "RSAGL.Math.AbstractVector",
        "fct-package": "rsagl-math",
        "fct-signature": "p -\u003e v -\u003e p",
        "fct-source": "src/RSAGL-Math-AbstractVector.html#add",
        "fct-type": "method",
        "title": "add"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math AbstractVector",
        "module": "RSAGL.Math.AbstractVector",
        "name": "add",
        "normalized": "a-\u003eb-\u003ea",
        "package": "rsagl-math",
        "partial": "",
        "signature": "p-\u003ev-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#v:magnitude",
      "description": {
        "fct-module": "RSAGL.Math.AbstractVector",
        "fct-package": "rsagl-math",
        "fct-signature": "v -\u003e RSdouble",
        "fct-source": "src/RSAGL-Math-AbstractVector.html#magnitude",
        "fct-type": "method",
        "title": "magnitude"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math AbstractVector",
        "module": "RSAGL.Math.AbstractVector",
        "name": "magnitude",
        "normalized": "a-\u003eRSdouble",
        "package": "rsagl-math",
        "partial": "",
        "signature": "v-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#v:scalarMultiply",
      "description": {
        "fct-module": "RSAGL.Math.AbstractVector",
        "fct-package": "rsagl-math",
        "fct-signature": "RSdouble -\u003e v -\u003e v",
        "fct-source": "src/RSAGL-Math-AbstractVector.html#scalarMultiply",
        "fct-type": "method",
        "title": "scalarMultiply"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math AbstractVector",
        "module": "RSAGL.Math.AbstractVector",
        "name": "scalarMultiply",
        "normalized": "RSdouble-\u003ea-\u003ea",
        "package": "rsagl-math",
        "partial": "Multiply",
        "signature": "RSdouble-\u003ev-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#v:sub",
      "description": {
        "fct-module": "RSAGL.Math.AbstractVector",
        "fct-package": "rsagl-math",
        "fct-signature": "p -\u003e p -\u003e v",
        "fct-source": "src/RSAGL-Math-AbstractVector.html#sub",
        "fct-type": "method",
        "title": "sub"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math AbstractVector",
        "module": "RSAGL.Math.AbstractVector",
        "name": "sub",
        "normalized": "a-\u003ea-\u003eb",
        "package": "rsagl-math",
        "partial": "",
        "signature": "p-\u003ep-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-AbstractVector.html#v:zero",
      "description": {
        "fct-module": "RSAGL.Math.AbstractVector",
        "fct-package": "rsagl-math",
        "fct-signature": "a",
        "fct-source": "src/RSAGL-Math-AbstractVector.html#zero",
        "fct-type": "method",
        "title": "zero"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math AbstractVector",
        "module": "RSAGL.Math.AbstractVector",
        "name": "zero",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAffine Transformations of Arbitrary Geometric Objects\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "RSAGL.Math.Affine",
        "fct-package": "rsagl-math",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Math-Affine.html",
        "fct-type": "module",
        "title": "Affine"
      },
      "index": {
        "description": "Affine Transformations of Arbitrary Geometric Objects",
        "hierarchy": "RSAGL Math Affine",
        "module": "RSAGL.Math.Affine",
        "name": "Affine",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Affine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#t:AffineTransformable",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAffineTransformable\u003c/a\u003e\u003c/code\u003e objects are subject to affine transformations using matrix multiplication.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Affine",
        "fct-package": "rsagl-math",
        "fct-signature": "class",
        "fct-source": "src/RSAGL-Math-Affine.html#AffineTransformable",
        "fct-type": "class",
        "title": "AffineTransformable"
      },
      "index": {
        "description": "AffineTransformable objects are subject to affine transformations using matrix multiplication",
        "hierarchy": "RSAGL Math Affine",
        "module": "RSAGL.Math.Affine",
        "name": "AffineTransformable",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Affine Transformable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#v:inverseTransform",
      "description": {
        "fct-descr": "\u003cp\u003eApply the inverse of an affine transformation, defined by a 4x4 matrix.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Affine",
        "fct-package": "rsagl-math",
        "fct-signature": "Matrix -\u003e a -\u003e a",
        "fct-source": "src/RSAGL-Math-Affine.html#inverseTransform",
        "fct-type": "function",
        "title": "inverseTransform"
      },
      "index": {
        "description": "Apply the inverse of an affine transformation defined by x4 matrix",
        "hierarchy": "RSAGL Math Affine",
        "module": "RSAGL.Math.Affine",
        "name": "inverseTransform",
        "normalized": "Matrix-\u003ea-\u003ea",
        "package": "rsagl-math",
        "partial": "Transform",
        "signature": "Matrix-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#v:rotate",
      "description": {
        "fct-descr": "\u003cp\u003eRotate an entity about the origin, using the specified vector as the axis of rotation.\n See also \u003ccode\u003e\u003ca\u003etransformAbout\u003c/a\u003e\u003c/code\u003e to rotate around an arbitrary point.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Affine",
        "fct-package": "rsagl-math",
        "fct-signature": "Vector3D -\u003e Angle -\u003e a -\u003e a",
        "fct-source": "src/RSAGL-Math-Affine.html#rotate",
        "fct-type": "method",
        "title": "rotate"
      },
      "index": {
        "description": "Rotate an entity about the origin using the specified vector as the axis of rotation See also transformAbout to rotate around an arbitrary point",
        "hierarchy": "RSAGL Math Affine",
        "module": "RSAGL.Math.Affine",
        "name": "rotate",
        "normalized": "Vector D-\u003eAngle-\u003ea-\u003ea",
        "package": "rsagl-math",
        "partial": "",
        "signature": "Vector D-\u003eAngle-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#v:rotateToFrom",
      "description": {
        "fct-descr": "\u003cp\u003eSpecific rotation along the shortest path that brings the second vector in line with the first.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Affine",
        "fct-package": "rsagl-math",
        "fct-signature": "Vector3D -\u003e Vector3D -\u003e a -\u003e a",
        "fct-source": "src/RSAGL-Math-Affine.html#rotateToFrom",
        "fct-type": "function",
        "title": "rotateToFrom"
      },
      "index": {
        "description": "Specific rotation along the shortest path that brings the second vector in line with the first",
        "hierarchy": "RSAGL Math Affine",
        "module": "RSAGL.Math.Affine",
        "name": "rotateToFrom",
        "normalized": "Vector D-\u003eVector D-\u003ea-\u003ea",
        "package": "rsagl-math",
        "partial": "To From",
        "signature": "Vector D-\u003eVector D-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#v:rotateX",
      "description": {
        "fct-descr": "\u003cp\u003eSpecific rotation around the x-axis.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Affine",
        "fct-package": "rsagl-math",
        "fct-signature": "Angle -\u003e a -\u003e a",
        "fct-source": "src/RSAGL-Math-Affine.html#rotateX",
        "fct-type": "method",
        "title": "rotateX"
      },
      "index": {
        "description": "Specific rotation around the x-axis",
        "hierarchy": "RSAGL Math Affine",
        "module": "RSAGL.Math.Affine",
        "name": "rotateX",
        "normalized": "Angle-\u003ea-\u003ea",
        "package": "rsagl-math",
        "partial": "",
        "signature": "Angle-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#v:rotateY",
      "description": {
        "fct-descr": "\u003cp\u003eSpecific rotation around the y-axis.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Affine",
        "fct-package": "rsagl-math",
        "fct-signature": "Angle -\u003e a -\u003e a",
        "fct-source": "src/RSAGL-Math-Affine.html#rotateY",
        "fct-type": "method",
        "title": "rotateY"
      },
      "index": {
        "description": "Specific rotation around the y-axis",
        "hierarchy": "RSAGL Math Affine",
        "module": "RSAGL.Math.Affine",
        "name": "rotateY",
        "normalized": "Angle-\u003ea-\u003ea",
        "package": "rsagl-math",
        "partial": "",
        "signature": "Angle-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#v:rotateZ",
      "description": {
        "fct-descr": "\u003cp\u003eSpecific rotation around the z-axis.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Affine",
        "fct-package": "rsagl-math",
        "fct-signature": "Angle -\u003e a -\u003e a",
        "fct-source": "src/RSAGL-Math-Affine.html#rotateZ",
        "fct-type": "method",
        "title": "rotateZ"
      },
      "index": {
        "description": "Specific rotation around the z-axis",
        "hierarchy": "RSAGL Math Affine",
        "module": "RSAGL.Math.Affine",
        "name": "rotateZ",
        "normalized": "Angle-\u003ea-\u003ea",
        "package": "rsagl-math",
        "partial": "",
        "signature": "Angle-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#v:scale",
      "description": {
        "fct-descr": "\u003cp\u003eScale an entity along the \u003ccode\u003ex\u003c/code\u003e \u003ccode\u003ey\u003c/code\u003e and \u003ccode\u003ez\u003c/code\u003e axes.  For example, \u003ccode\u003escale (Vector3D 2 3 4)\u003c/code\u003e will make an object twice as wide, three times as tall,\n and four times as deep.  It may be helpful to think of the vector as a control point on the vertex of a unit cube.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Affine",
        "fct-package": "rsagl-math",
        "fct-signature": "Vector3D -\u003e a -\u003e a",
        "fct-source": "src/RSAGL-Math-Affine.html#scale",
        "fct-type": "method",
        "title": "scale"
      },
      "index": {
        "description": "Scale an entity along the and axes For example scale Vector3D will make an object twice as wide three times as tall and four times as deep It may be helpful to think of the vector as control point on the vertex of unit cube",
        "hierarchy": "RSAGL Math Affine",
        "module": "RSAGL.Math.Affine",
        "name": "scale",
        "normalized": "Vector D-\u003ea-\u003ea",
        "package": "rsagl-math",
        "partial": "",
        "signature": "Vector D-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#v:scale-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSpecific scale preserving proportions.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Affine",
        "fct-package": "rsagl-math",
        "fct-signature": "RSdouble -\u003e a -\u003e a",
        "fct-source": "src/RSAGL-Math-Affine.html#scale%27",
        "fct-type": "function",
        "title": "scale'"
      },
      "index": {
        "description": "Specific scale preserving proportions",
        "hierarchy": "RSAGL Math Affine",
        "module": "RSAGL.Math.Affine",
        "name": "scale'",
        "normalized": "RSdouble-\u003ea-\u003ea",
        "package": "rsagl-math",
        "partial": "",
        "signature": "RSdouble-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#v:scaleAlong",
      "description": {
        "fct-descr": "\u003cp\u003eSpecific scale along an arbitary axis.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Affine",
        "fct-package": "rsagl-math",
        "fct-signature": "Vector3D -\u003e RSdouble -\u003e a -\u003e a",
        "fct-source": "src/RSAGL-Math-Affine.html#scaleAlong",
        "fct-type": "function",
        "title": "scaleAlong"
      },
      "index": {
        "description": "Specific scale along an arbitary axis",
        "hierarchy": "RSAGL Math Affine",
        "module": "RSAGL.Math.Affine",
        "name": "scaleAlong",
        "normalized": "Vector D-\u003eRSdouble-\u003ea-\u003ea",
        "package": "rsagl-math",
        "partial": "Along",
        "signature": "Vector D-\u003eRSdouble-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#v:transform",
      "description": {
        "fct-descr": "\u003cp\u003eApply an affine transformation, defined by a 4x4 matrix.  (This is the only required method.)\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Affine",
        "fct-package": "rsagl-math",
        "fct-signature": "Matrix -\u003e a -\u003e a",
        "fct-source": "src/RSAGL-Math-Affine.html#transform",
        "fct-type": "method",
        "title": "transform"
      },
      "index": {
        "description": "Apply an affine transformation defined by x4 matrix This is the only required method",
        "hierarchy": "RSAGL Math Affine",
        "module": "RSAGL.Math.Affine",
        "name": "transform",
        "normalized": "Matrix-\u003ea-\u003ea",
        "package": "rsagl-math",
        "partial": "",
        "signature": "Matrix-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#v:transformAbout",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function treating a particular point as the origin.  For example, combining \u003ccode\u003e\u003ca\u003etransformAbout\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003erotate\u003c/a\u003e\u003c/code\u003e\n performs a rotation about an arbitrary point rather than the origin.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Affine",
        "fct-package": "rsagl-math",
        "fct-signature": "Point3D -\u003e (a -\u003e a) -\u003e a -\u003e a",
        "fct-source": "src/RSAGL-Math-Affine.html#transformAbout",
        "fct-type": "function",
        "title": "transformAbout"
      },
      "index": {
        "description": "Apply function treating particular point as the origin For example combining transformAbout with rotate performs rotation about an arbitrary point rather than the origin",
        "hierarchy": "RSAGL Math Affine",
        "module": "RSAGL.Math.Affine",
        "name": "transformAbout",
        "normalized": "Point D-\u003e(a-\u003ea)-\u003ea-\u003ea",
        "package": "rsagl-math",
        "partial": "About",
        "signature": "Point D-\u003e(a-\u003ea)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#v:translate",
      "description": {
        "fct-descr": "\u003cp\u003eTranslate an entity along the specified vector.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Affine",
        "fct-package": "rsagl-math",
        "fct-signature": "Vector3D -\u003e a -\u003e a",
        "fct-source": "src/RSAGL-Math-Affine.html#translate",
        "fct-type": "method",
        "title": "translate"
      },
      "index": {
        "description": "Translate an entity along the specified vector",
        "hierarchy": "RSAGL Math Affine",
        "module": "RSAGL.Math.Affine",
        "name": "translate",
        "normalized": "Vector D-\u003ea-\u003ea",
        "package": "rsagl-math",
        "partial": "",
        "signature": "Vector D-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#v:translateToFrom",
      "description": {
        "fct-descr": "\u003cp\u003eSpecific translation along the vector between two points.\n This ordinary use is to set the second point as the center of a model (typically origin_point_3d)\n and the first point as the desired position of the model.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Affine",
        "fct-package": "rsagl-math",
        "fct-signature": "Point3D -\u003e Point3D -\u003e a -\u003e a",
        "fct-source": "src/RSAGL-Math-Affine.html#translateToFrom",
        "fct-type": "function",
        "title": "translateToFrom"
      },
      "index": {
        "description": "Specific translation along the vector between two points This ordinary use is to set the second point as the center of model typically origin point and the first point as the desired position of the model",
        "hierarchy": "RSAGL Math Affine",
        "module": "RSAGL.Math.Affine",
        "name": "translateToFrom",
        "normalized": "Point D-\u003ePoint D-\u003ea-\u003ea",
        "package": "rsagl-math",
        "partial": "To From",
        "signature": "Point D-\u003ePoint D-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Affine.html#v:withTransformation",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function under an affine transformation.  \u003ccode\u003ewithTransformation m id\u003c/code\u003e is an identity if \u003ccode\u003em\u003c/code\u003e is invertable.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Affine",
        "fct-package": "rsagl-math",
        "fct-signature": "Matrix -\u003e (a -\u003e a) -\u003e a -\u003e a",
        "fct-source": "src/RSAGL-Math-Affine.html#withTransformation",
        "fct-type": "function",
        "title": "withTransformation"
      },
      "index": {
        "description": "Apply function under an affine transformation withTransformation id is an identity if is invertable",
        "hierarchy": "RSAGL Math Affine",
        "module": "RSAGL.Math.Affine",
        "name": "withTransformation",
        "normalized": "Matrix-\u003e(a-\u003ea)-\u003ea-\u003ea",
        "package": "rsagl-math",
        "partial": "Transformation",
        "signature": "Matrix-\u003e(a-\u003ea)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#",
      "description": {
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Math-Angle.html",
        "fct-type": "module",
        "title": "Angle"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "Angle",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Angle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#t:Angle",
      "description": {
        "fct-descr": "\u003cp\u003eAn angular value.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Math-Angle.html#Angle",
        "fct-type": "data",
        "title": "Angle"
      },
      "index": {
        "description": "An angular value",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "Angle",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Angle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#t:BoundAngle",
      "description": {
        "fct-descr": "\u003cp\u003eAn angular value.  \u003ccode\u003e\u003ca\u003eBoundAngle\u003c/a\u003e\u003c/code\u003es are always in the range between -180 and 180 degrees, inclusive.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "newtype",
        "fct-source": "src/RSAGL-Math-Angle.html#BoundAngle",
        "fct-type": "newtype",
        "title": "BoundAngle"
      },
      "index": {
        "description": "An angular value BoundAngle are always in the range between and degrees inclusive",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "BoundAngle",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Bound Angle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:BoundAngle",
      "description": {
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "BoundAngle Angle",
        "fct-source": "src/RSAGL-Math-Angle.html#BoundAngle",
        "fct-type": "function",
        "title": "BoundAngle"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "BoundAngle",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Bound Angle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:absoluteAngle",
      "description": {
        "fct-descr": "\u003cp\u003eAbsolute value of an angle.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "Angle -\u003e Angle",
        "fct-source": "src/RSAGL-Math-Angle.html#absoluteAngle",
        "fct-type": "function",
        "title": "absoluteAngle"
      },
      "index": {
        "description": "Absolute value of an angle",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "absoluteAngle",
        "normalized": "Angle-\u003eAngle",
        "package": "rsagl-math",
        "partial": "Angle",
        "signature": "Angle-\u003eAngle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:angleAdd",
      "description": {
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "Angle -\u003e Angle -\u003e Angle",
        "fct-source": "src/RSAGL-Math-Angle.html#angleAdd",
        "fct-type": "function",
        "title": "angleAdd"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "angleAdd",
        "normalized": "Angle-\u003eAngle-\u003eAngle",
        "package": "rsagl-math",
        "partial": "Add",
        "signature": "Angle-\u003eAngle-\u003eAngle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:angleNegate",
      "description": {
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "Angle -\u003e Angle",
        "fct-source": "src/RSAGL-Math-Angle.html#angleNegate",
        "fct-type": "function",
        "title": "angleNegate"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "angleNegate",
        "normalized": "Angle-\u003eAngle",
        "package": "rsagl-math",
        "partial": "Negate",
        "signature": "Angle-\u003eAngle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:angleSubtract",
      "description": {
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "Angle -\u003e Angle -\u003e Angle",
        "fct-source": "src/RSAGL-Math-Angle.html#angleSubtract",
        "fct-type": "function",
        "title": "angleSubtract"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "angleSubtract",
        "normalized": "Angle-\u003eAngle-\u003eAngle",
        "package": "rsagl-math",
        "partial": "Subtract",
        "signature": "Angle-\u003eAngle-\u003eAngle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:angularIncrements",
      "description": {
        "fct-descr": "\u003cp\u003eangularIncrements answers n evenly distributed angles from 0 to 2*pi.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "Integer -\u003e [Angle]",
        "fct-source": "src/RSAGL-Math-Angle.html#angularIncrements",
        "fct-type": "function",
        "title": "angularIncrements"
      },
      "index": {
        "description": "angularIncrements answers evenly distributed angles from to pi",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "angularIncrements",
        "normalized": "Integer-\u003e[Angle]",
        "package": "rsagl-math",
        "partial": "Increments",
        "signature": "Integer-\u003e[Angle]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:arcCosine",
      "description": {
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "RSdouble -\u003e Angle",
        "fct-source": "src/RSAGL-Math-Angle.html#arcCosine",
        "fct-type": "function",
        "title": "arcCosine"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "arcCosine",
        "normalized": "RSdouble-\u003eAngle",
        "package": "rsagl-math",
        "partial": "Cosine",
        "signature": "RSdouble-\u003eAngle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:arcSine",
      "description": {
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "RSdouble -\u003e Angle",
        "fct-source": "src/RSAGL-Math-Angle.html#arcSine",
        "fct-type": "function",
        "title": "arcSine"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "arcSine",
        "normalized": "RSdouble-\u003eAngle",
        "package": "rsagl-math",
        "partial": "Sine",
        "signature": "RSdouble-\u003eAngle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:arcTangent",
      "description": {
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "RSdouble -\u003e Angle",
        "fct-source": "src/RSAGL-Math-Angle.html#arcTangent",
        "fct-type": "function",
        "title": "arcTangent"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "arcTangent",
        "normalized": "RSdouble-\u003eAngle",
        "package": "rsagl-math",
        "partial": "Tangent",
        "signature": "RSdouble-\u003eAngle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:cartesianToPolar",
      "description": {
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "(RSdouble, RSdouble) -\u003e (Angle, RSdouble)",
        "fct-source": "src/RSAGL-Math-Angle.html#cartesianToPolar",
        "fct-type": "function",
        "title": "cartesianToPolar"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "cartesianToPolar",
        "normalized": "(RSdouble,RSdouble)-\u003e(Angle,RSdouble)",
        "package": "rsagl-math",
        "partial": "To Polar",
        "signature": "(RSdouble,RSdouble)-\u003e(Angle,RSdouble)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:cosine",
      "description": {
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "Angle -\u003e RSdouble",
        "fct-source": "src/RSAGL-Math-Angle.html#cosine",
        "fct-type": "function",
        "title": "cosine"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "cosine",
        "normalized": "Angle-\u003eRSdouble",
        "package": "rsagl-math",
        "partial": "",
        "signature": "Angle-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:fromArcMinutes",
      "description": {
        "fct-descr": "\u003cp\u003eThere are 21600 arc minutes in a circle, 60 arc minutes in a degree.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "RSdouble -\u003e Angle",
        "fct-source": "src/RSAGL-Math-Angle.html#fromArcMinutes",
        "fct-type": "function",
        "title": "fromArcMinutes"
      },
      "index": {
        "description": "There are arc minutes in circle arc minutes in degree",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "fromArcMinutes",
        "normalized": "RSdouble-\u003eAngle",
        "package": "rsagl-math",
        "partial": "Arc Minutes",
        "signature": "RSdouble-\u003eAngle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:fromArcSeconds",
      "description": {
        "fct-descr": "\u003cp\u003eThere are 1296000 arc seconds in a circle, 60 arc seconds in an arc minutes.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "RSdouble -\u003e Angle",
        "fct-source": "src/RSAGL-Math-Angle.html#fromArcSeconds",
        "fct-type": "function",
        "title": "fromArcSeconds"
      },
      "index": {
        "description": "There are arc seconds in circle arc seconds in an arc minutes",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "fromArcSeconds",
        "normalized": "RSdouble-\u003eAngle",
        "package": "rsagl-math",
        "partial": "Arc Seconds",
        "signature": "RSdouble-\u003eAngle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:fromDegrees",
      "description": {
        "fct-descr": "\u003cp\u003eThere are 260 degrees in a circle.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "RSdouble -\u003e Angle",
        "fct-source": "src/RSAGL-Math-Angle.html#fromDegrees",
        "fct-type": "function",
        "title": "fromDegrees"
      },
      "index": {
        "description": "There are degrees in circle",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "fromDegrees",
        "normalized": "RSdouble-\u003eAngle",
        "package": "rsagl-math",
        "partial": "Degrees",
        "signature": "RSdouble-\u003eAngle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:fromRadians",
      "description": {
        "fct-descr": "\u003cp\u003eThere are 2*pi radians in a circle.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "RSdouble -\u003e Angle",
        "fct-source": "src/RSAGL-Math-Angle.html#fromRadians",
        "fct-type": "function",
        "title": "fromRadians"
      },
      "index": {
        "description": "There are pi radians in circle",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "fromRadians",
        "normalized": "RSdouble-\u003eAngle",
        "package": "rsagl-math",
        "partial": "Radians",
        "signature": "RSdouble-\u003eAngle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:fromRotations",
      "description": {
        "fct-descr": "\u003cp\u003eThere is 1 rotation in a circle.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "RSdouble -\u003e Angle",
        "fct-source": "src/RSAGL-Math-Angle.html#fromRotations",
        "fct-type": "function",
        "title": "fromRotations"
      },
      "index": {
        "description": "There is rotation in circle",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "fromRotations",
        "normalized": "RSdouble-\u003eAngle",
        "package": "rsagl-math",
        "partial": "Rotations",
        "signature": "RSdouble-\u003eAngle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:fromTimeOfDayHMS",
      "description": {
        "fct-descr": "\u003cp\u003eGet an angle based on time of day, hours, minutes, seconds, where noon is considered a zero angle.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "RSdouble -\u003e RSdouble -\u003e RSdouble -\u003e Angle",
        "fct-source": "src/RSAGL-Math-Angle.html#fromTimeOfDayHMS",
        "fct-type": "function",
        "title": "fromTimeOfDayHMS"
      },
      "index": {
        "description": "Get an angle based on time of day hours minutes seconds where noon is considered zero angle",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "fromTimeOfDayHMS",
        "normalized": "RSdouble-\u003eRSdouble-\u003eRSdouble-\u003eAngle",
        "package": "rsagl-math",
        "partial": "Time Of Day HMS",
        "signature": "RSdouble-\u003eRSdouble-\u003eRSdouble-\u003eAngle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:polarToCartesian",
      "description": {
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "(Angle, RSdouble) -\u003e (RSdouble, RSdouble)",
        "fct-source": "src/RSAGL-Math-Angle.html#polarToCartesian",
        "fct-type": "function",
        "title": "polarToCartesian"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "polarToCartesian",
        "normalized": "(Angle,RSdouble)-\u003e(RSdouble,RSdouble)",
        "package": "rsagl-math",
        "partial": "To Cartesian",
        "signature": "(Angle,RSdouble)-\u003e(RSdouble,RSdouble)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:scaleAngle",
      "description": {
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "RSdouble -\u003e Angle -\u003e Angle",
        "fct-source": "src/RSAGL-Math-Angle.html#scaleAngle",
        "fct-type": "function",
        "title": "scaleAngle"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "scaleAngle",
        "normalized": "RSdouble-\u003eAngle-\u003eAngle",
        "package": "rsagl-math",
        "partial": "Angle",
        "signature": "RSdouble-\u003eAngle-\u003eAngle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:sine",
      "description": {
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "Angle -\u003e RSdouble",
        "fct-source": "src/RSAGL-Math-Angle.html#sine",
        "fct-type": "function",
        "title": "sine"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "sine",
        "normalized": "Angle-\u003eRSdouble",
        "package": "rsagl-math",
        "partial": "",
        "signature": "Angle-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:supplementaryAngle",
      "description": {
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "Angle -\u003e Angle",
        "fct-source": "src/RSAGL-Math-Angle.html#supplementaryAngle",
        "fct-type": "function",
        "title": "supplementaryAngle"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "supplementaryAngle",
        "normalized": "Angle-\u003eAngle",
        "package": "rsagl-math",
        "partial": "Angle",
        "signature": "Angle-\u003eAngle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:tangent",
      "description": {
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "Angle -\u003e RSdouble",
        "fct-source": "src/RSAGL-Math-Angle.html#tangent",
        "fct-type": "function",
        "title": "tangent"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "tangent",
        "normalized": "Angle-\u003eRSdouble",
        "package": "rsagl-math",
        "partial": "",
        "signature": "Angle-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:toDegrees",
      "description": {
        "fct-descr": "\u003cp\u003eAnswers the angle in the range of -180 to 180, inclusive.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "Angle -\u003e RSdouble",
        "fct-source": "src/RSAGL-Math-Angle.html#toDegrees",
        "fct-type": "function",
        "title": "toDegrees"
      },
      "index": {
        "description": "Answers the angle in the range of to inclusive",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "toDegrees",
        "normalized": "Angle-\u003eRSdouble",
        "package": "rsagl-math",
        "partial": "Degrees",
        "signature": "Angle-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:toDegrees_",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etoDegrees_\u003c/a\u003e\u003c/code\u003e answers the angle in degrees with no range limitation.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "Angle -\u003e RSdouble",
        "fct-source": "src/RSAGL-Math-Angle.html#toDegrees_",
        "fct-type": "function",
        "title": "toDegrees_"
      },
      "index": {
        "description": "toDegrees answers the angle in degrees with no range limitation",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "toDegrees_",
        "normalized": "Angle-\u003eRSdouble",
        "package": "rsagl-math",
        "partial": "Degrees",
        "signature": "Angle-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:toRadians",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etoRadians\u003c/a\u003e\u003c/code\u003e answers the angle in the range of -pi .. pi, inclusive.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "Angle -\u003e RSdouble",
        "fct-source": "src/RSAGL-Math-Angle.html#toRadians",
        "fct-type": "function",
        "title": "toRadians"
      },
      "index": {
        "description": "toRadians answers the angle in the range of pi pi inclusive",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "toRadians",
        "normalized": "Angle-\u003eRSdouble",
        "package": "rsagl-math",
        "partial": "Radians",
        "signature": "Angle-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:toRadians_",
      "description": {
        "fct-descr": "\u003cp\u003etoRadians answers the angle in radians with no range limitation.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "Angle -\u003e RSdouble",
        "fct-source": "src/RSAGL-Math-Angle.html#toRadians_",
        "fct-type": "function",
        "title": "toRadians_"
      },
      "index": {
        "description": "toRadians answers the angle in radians with no range limitation",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "toRadians_",
        "normalized": "Angle-\u003eRSdouble",
        "package": "rsagl-math",
        "partial": "Radians",
        "signature": "Angle-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:toRotations",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etoRotations\u003c/a\u003e\u003c/code\u003e answers the angle in the range of -0.5 to 0.5, inclusive.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "Angle -\u003e RSdouble",
        "fct-source": "src/RSAGL-Math-Angle.html#toRotations",
        "fct-type": "function",
        "title": "toRotations"
      },
      "index": {
        "description": "toRotations answers the angle in the range of to inclusive",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "toRotations",
        "normalized": "Angle-\u003eRSdouble",
        "package": "rsagl-math",
        "partial": "Rotations",
        "signature": "Angle-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:toRotations_",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etoRotations\u003c/a\u003e\u003c/code\u003e answers the angle in rotations with no range limitation.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "Angle -\u003e RSdouble",
        "fct-source": "src/RSAGL-Math-Angle.html#toRotations_",
        "fct-type": "function",
        "title": "toRotations_"
      },
      "index": {
        "description": "toRotations answers the angle in rotations with no range limitation",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "toRotations_",
        "normalized": "Angle-\u003eRSdouble",
        "package": "rsagl-math",
        "partial": "Rotations",
        "signature": "Angle-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:unboundAngle",
      "description": {
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "BoundAngle -\u003e Angle",
        "fct-source": "src/RSAGL-Math-Angle.html#unboundAngle",
        "fct-type": "function",
        "title": "unboundAngle"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "unboundAngle",
        "normalized": "BoundAngle-\u003eAngle",
        "package": "rsagl-math",
        "partial": "Angle",
        "signature": "BoundAngle-\u003eAngle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Angle.html#v:zero_angle",
      "description": {
        "fct-module": "RSAGL.Math.Angle",
        "fct-package": "rsagl-math",
        "fct-signature": "Angle",
        "fct-source": "src/RSAGL-Math-Angle.html#zero_angle",
        "fct-type": "function",
        "title": "zero_angle"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Angle",
        "module": "RSAGL.Math.Angle",
        "name": "zero_angle",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-BoundingBox.html#",
      "description": {
        "fct-module": "RSAGL.Math.BoundingBox",
        "fct-package": "rsagl-math",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Math-BoundingBox.html",
        "fct-type": "module",
        "title": "BoundingBox"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math BoundingBox",
        "module": "RSAGL.Math.BoundingBox",
        "name": "BoundingBox",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Bounding Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-BoundingBox.html#t:Bound3D",
      "description": {
        "fct-descr": "\u003cp\u003eA convenience class for any finite geometry.\n In particular, it's easy to concatenate the bounding\n box of multiple geometries by placing them in a list\n and taking the bounding box of the entire list.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.BoundingBox",
        "fct-package": "rsagl-math",
        "fct-signature": "class",
        "fct-source": "src/RSAGL-Math-BoundingBox.html#Bound3D",
        "fct-type": "class",
        "title": "Bound3D"
      },
      "index": {
        "description": "convenience class for any finite geometry In particular it easy to concatenate the bounding box of multiple geometries by placing them in list and taking the bounding box of the entire list",
        "hierarchy": "RSAGL Math BoundingBox",
        "module": "RSAGL.Math.BoundingBox",
        "name": "Bound3D",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Bound",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-BoundingBox.html#t:BoundingBox",
      "description": {
        "fct-descr": "\u003cp\u003eA simple bounding box.  Operations on bounding boxes\n are designed to be fast, not accurate.  The only\n guarantee on any bounding box operation is that\n objects reported to be outside a bounding box,\n are.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.BoundingBox",
        "fct-package": "rsagl-math",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Math-BoundingBox.html#BoundingBox",
        "fct-type": "data",
        "title": "BoundingBox"
      },
      "index": {
        "description": "simple bounding box Operations on bounding boxes are designed to be fast not accurate The only guarantee on any bounding box operation is that objects reported to be outside bounding box are",
        "hierarchy": "RSAGL Math BoundingBox",
        "module": "RSAGL.Math.BoundingBox",
        "name": "BoundingBox",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Bounding Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-BoundingBox.html#v:boundingBox",
      "description": {
        "fct-module": "RSAGL.Math.BoundingBox",
        "fct-package": "rsagl-math",
        "fct-signature": "a -\u003e BoundingBox",
        "fct-source": "src/RSAGL-Math-BoundingBox.html#boundingBox",
        "fct-type": "method",
        "title": "boundingBox"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math BoundingBox",
        "module": "RSAGL.Math.BoundingBox",
        "name": "boundingBox",
        "normalized": "a-\u003eBoundingBox",
        "package": "rsagl-math",
        "partial": "Box",
        "signature": "a-\u003eBoundingBox"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-BoundingBox.html#v:boundingCenterRadius",
      "description": {
        "fct-descr": "\u003cp\u003eView of a bounding box in the form of a bounding spehre.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.BoundingBox",
        "fct-package": "rsagl-math",
        "fct-signature": "BoundingBox -\u003e (Point3D, RSdouble)",
        "fct-source": "src/RSAGL-Math-BoundingBox.html#boundingCenterRadius",
        "fct-type": "function",
        "title": "boundingCenterRadius"
      },
      "index": {
        "description": "View of bounding box in the form of bounding spehre",
        "hierarchy": "RSAGL Math BoundingBox",
        "module": "RSAGL.Math.BoundingBox",
        "name": "boundingCenterRadius",
        "normalized": "BoundingBox-\u003e(Point D,RSdouble)",
        "package": "rsagl-math",
        "partial": "Center Radius",
        "signature": "BoundingBox-\u003e(Point D,RSdouble)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-BoundingBox.html#v:minimalDistanceToBoundingBox",
      "description": {
        "fct-descr": "\u003cp\u003eEstimates distance between a point and the outside surface of a bounding\n box.  If the value is negative, then the point lies inside the bound\n region.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.BoundingBox",
        "fct-package": "rsagl-math",
        "fct-signature": "Point3D -\u003e BoundingBox -\u003e RSdouble",
        "fct-source": "src/RSAGL-Math-BoundingBox.html#minimalDistanceToBoundingBox",
        "fct-type": "function",
        "title": "minimalDistanceToBoundingBox"
      },
      "index": {
        "description": "Estimates distance between point and the outside surface of bounding box If the value is negative then the point lies inside the bound region",
        "hierarchy": "RSAGL Math BoundingBox",
        "module": "RSAGL.Math.BoundingBox",
        "name": "minimalDistanceToBoundingBox",
        "normalized": "Point D-\u003eBoundingBox-\u003eRSdouble",
        "package": "rsagl-math",
        "partial": "Distance To Bounding Box",
        "signature": "Point D-\u003eBoundingBox-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#",
      "description": {
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Math-Curve.html",
        "fct-type": "module",
        "title": "Curve"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "Curve",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Curve",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#t:Curve",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eCurve\u003c/a\u003e\u003c/code\u003e is a parametric function from a one-dimensional space into a space of an arbitrary datatype.  The key feature of a \u003ccode\u003e\u003ca\u003eCurve\u003c/a\u003e\u003c/code\u003e is that it is aware of it's own\n sampling interval.  Using this information and appropriate arithmetic and scalar multiplication functions provided by RSAGL.AbstractVector, a \u003ccode\u003e\u003ca\u003eCurve\u003c/a\u003e\u003c/code\u003e can be differentiated or integrated.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Math-Curve.html#Curve",
        "fct-type": "data",
        "title": "Curve"
      },
      "index": {
        "description": "Curve is parametric function from one-dimensional space into space of an arbitrary datatype The key feature of Curve is that it is aware of it own sampling interval Using this information and appropriate arithmetic and scalar multiplication functions provided by RSAGL.AbstractVector Curve can be differentiated or integrated",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "Curve",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Curve",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#t:IntervalSample",
      "description": {
        "fct-descr": "\u003cp\u003eAn interval of a curve, including the curve, lower and upper bounds of the interval, and an instantaneous sample value for that interval.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Math-Curve.html#IntervalSample",
        "fct-type": "data",
        "title": "IntervalSample"
      },
      "index": {
        "description": "An interval of curve including the curve lower and upper bounds of the interval and an instantaneous sample value for that interval",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "IntervalSample",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Interval Sample",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#t:SamplingAlgorithm",
      "description": {
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-Math-Curve.html#SamplingAlgorithm",
        "fct-type": "type",
        "title": "SamplingAlgorithm"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "SamplingAlgorithm",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Sampling Algorithm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#t:Surface",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSurface\u003c/a\u003e\u003c/code\u003e is a based on a \u003ccode\u003e\u003ca\u003eCurve\u003c/a\u003e\u003c/code\u003e with an output of another \u003ccode\u003e\u003ca\u003eCurve\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Math-Curve.html#Surface",
        "fct-type": "data",
        "title": "Surface"
      },
      "index": {
        "description": "Surface is based on Curve with an output of another Curve",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "Surface",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Surface",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:adaptiveMagnitudeSamples",
      "description": {
        "fct-descr": "\u003cp\u003eSampling algorithm that takes increasing numbers of samples over intervals where the magnitude of the sample is large.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "Integer -\u003e SamplingAlgorithm a",
        "fct-source": "src/RSAGL-Math-Curve.html#adaptiveMagnitudeSamples",
        "fct-type": "function",
        "title": "adaptiveMagnitudeSamples"
      },
      "index": {
        "description": "Sampling algorithm that takes increasing numbers of samples over intervals where the magnitude of the sample is large",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "adaptiveMagnitudeSamples",
        "normalized": "Integer-\u003eSamplingAlgorithm a",
        "package": "rsagl-math",
        "partial": "Magnitude Samples",
        "signature": "Integer-\u003eSamplingAlgorithm a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:clampCurve",
      "description": {
        "fct-descr": "\u003cp\u003eClamp lower and upper bounds of a curve along the axis of the input parameter.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "(RSdouble, RSdouble) -\u003e Curve a -\u003e Curve a",
        "fct-source": "src/RSAGL-Math-Curve.html#clampCurve",
        "fct-type": "function",
        "title": "clampCurve"
      },
      "index": {
        "description": "Clamp lower and upper bounds of curve along the axis of the input parameter",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "clampCurve",
        "normalized": "(RSdouble,RSdouble)-\u003eCurve a-\u003eCurve a",
        "package": "rsagl-math",
        "partial": "Curve",
        "signature": "(RSdouble,RSdouble)-\u003eCurve a-\u003eCurve a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:controlCurve",
      "description": {
        "fct-descr": "\u003cp\u003eTransform a curve by manipulating control points.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "(RSdouble, RSdouble) -\u003e (RSdouble, RSdouble) -\u003e Curve a -\u003e Curve a",
        "fct-source": "src/RSAGL-Math-Curve.html#controlCurve",
        "fct-type": "function",
        "title": "controlCurve"
      },
      "index": {
        "description": "Transform curve by manipulating control points",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "controlCurve",
        "normalized": "(RSdouble,RSdouble)-\u003e(RSdouble,RSdouble)-\u003eCurve a-\u003eCurve a",
        "package": "rsagl-math",
        "partial": "Curve",
        "signature": "(RSdouble,RSdouble)-\u003e(RSdouble,RSdouble)-\u003eCurve a-\u003eCurve a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:curve",
      "description": {
        "fct-descr": "\u003cp\u003eDefine a simple curve.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "(RSdouble -\u003e a) -\u003e Curve a",
        "fct-source": "src/RSAGL-Math-Curve.html#curve",
        "fct-type": "function",
        "title": "curve"
      },
      "index": {
        "description": "Define simple curve",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "curve",
        "normalized": "(RSdouble-\u003ea)-\u003eCurve a",
        "package": "rsagl-math",
        "partial": "",
        "signature": "(RSdouble-\u003ea)-\u003eCurve a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:curveDerivative",
      "description": {
        "fct-descr": "\u003cp\u003eTake the derivative of a \u003ccode\u003e\u003ca\u003eCurve\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "Curve p -\u003e Curve v",
        "fct-source": "src/RSAGL-Math-Curve.html#curveDerivative",
        "fct-type": "function",
        "title": "curveDerivative"
      },
      "index": {
        "description": "Take the derivative of Curve",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "curveDerivative",
        "normalized": "Curve a-\u003eCurve b",
        "package": "rsagl-math",
        "partial": "Derivative",
        "signature": "Curve p-\u003eCurve v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:flipTransposeSurface",
      "description": {
        "fct-descr": "\u003cp\u003eTranspose a surface while flipping the inner curve, so that that orientable surfaces retain their original orientation.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "Surface a -\u003e Surface a",
        "fct-source": "src/RSAGL-Math-Curve.html#flipTransposeSurface",
        "fct-type": "function",
        "title": "flipTransposeSurface"
      },
      "index": {
        "description": "Transpose surface while flipping the inner curve so that that orientable surfaces retain their original orientation",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "flipTransposeSurface",
        "normalized": "Surface a-\u003eSurface a",
        "package": "rsagl-math",
        "partial": "Transpose Surface",
        "signature": "Surface a-\u003eSurface a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:halfIterateSurface",
      "description": {
        "fct-descr": "\u003cp\u003eSample the outer \u003ccode\u003e\u003ca\u003eCurve\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eSurface\u003c/a\u003e\u003c/code\u003e at regularly spaced intervals.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "Integer -\u003e Surface a -\u003e [Curve a]",
        "fct-source": "src/RSAGL-Math-Curve.html#halfIterateSurface",
        "fct-type": "function",
        "title": "halfIterateSurface"
      },
      "index": {
        "description": "Sample the outer Curve of Surface at regularly spaced intervals",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "halfIterateSurface",
        "normalized": "Integer-\u003eSurface a-\u003e[Curve a]",
        "package": "rsagl-math",
        "partial": "Iterate Surface",
        "signature": "Integer-\u003eSurface a-\u003e[Curve a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:integrateCurve",
      "description": {
        "fct-descr": "\u003cp\u003eDefinite integral of a curve.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "SamplingAlgorithm v -\u003e Curve v -\u003e p -\u003e p",
        "fct-source": "src/RSAGL-Math-Curve.html#integrateCurve",
        "fct-type": "function",
        "title": "integrateCurve"
      },
      "index": {
        "description": "Definite integral of curve",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "integrateCurve",
        "normalized": "SamplingAlgorithm a-\u003eCurve a-\u003eb-\u003eb",
        "package": "rsagl-math",
        "partial": "Curve",
        "signature": "SamplingAlgorithm v-\u003eCurve v-\u003ep-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:intervalRange",
      "description": {
        "fct-descr": "\u003cp\u003eLower and upper bounds of an \u003ccode\u003e\u003ca\u003eIntervalSample\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "IntervalSample a -\u003e (RSdouble, RSdouble)",
        "fct-source": "src/RSAGL-Math-Curve.html#intervalRange",
        "fct-type": "function",
        "title": "intervalRange"
      },
      "index": {
        "description": "Lower and upper bounds of an IntervalSample",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "intervalRange",
        "normalized": "IntervalSample a-\u003e(RSdouble,RSdouble)",
        "package": "rsagl-math",
        "partial": "Range",
        "signature": "IntervalSample a-\u003e(RSdouble,RSdouble)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:intervalSample",
      "description": {
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "Curve a -\u003e RSdouble -\u003e RSdouble -\u003e IntervalSample a",
        "fct-source": "src/RSAGL-Math-Curve.html#intervalSample",
        "fct-type": "function",
        "title": "intervalSample"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "intervalSample",
        "normalized": "Curve a-\u003eRSdouble-\u003eRSdouble-\u003eIntervalSample a",
        "package": "rsagl-math",
        "partial": "Sample",
        "signature": "Curve a-\u003eRSdouble-\u003eRSdouble-\u003eIntervalSample a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:intervalSingleIntegral",
      "description": {
        "fct-descr": "\u003cp\u003eIntegral of the sample value over the range of the \u003ccode\u003e\u003ca\u003eIntervalSample\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "IntervalSample a -\u003e a",
        "fct-source": "src/RSAGL-Math-Curve.html#intervalSingleIntegral",
        "fct-type": "function",
        "title": "intervalSingleIntegral"
      },
      "index": {
        "description": "Integral of the sample value over the range of the IntervalSample",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "intervalSingleIntegral",
        "normalized": "IntervalSample a-\u003ea",
        "package": "rsagl-math",
        "partial": "Single Integral",
        "signature": "IntervalSample a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:intervalSize",
      "description": {
        "fct-descr": "\u003cp\u003eSize of the range of an \u003ccode\u003e\u003ca\u003eIntervalSample\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "IntervalSample a -\u003e RSdouble",
        "fct-source": "src/RSAGL-Math-Curve.html#intervalSize",
        "fct-type": "function",
        "title": "intervalSize"
      },
      "index": {
        "description": "Size of the range of an IntervalSample",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "intervalSize",
        "normalized": "IntervalSample a-\u003eRSdouble",
        "package": "rsagl-math",
        "partial": "Size",
        "signature": "IntervalSample a-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:iterateCurve",
      "description": {
        "fct-descr": "\u003cp\u003eSample a curve at regular intervals in the range 0..1 inclusive.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "Integer -\u003e Curve x -\u003e [x]",
        "fct-source": "src/RSAGL-Math-Curve.html#iterateCurve",
        "fct-type": "function",
        "title": "iterateCurve"
      },
      "index": {
        "description": "Sample curve at regular intervals in the range inclusive",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "iterateCurve",
        "normalized": "Integer-\u003eCurve a-\u003e[a]",
        "package": "rsagl-math",
        "partial": "Curve",
        "signature": "Integer-\u003eCurve x-\u003e[x]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:iterateSurface",
      "description": {
        "fct-descr": "\u003cp\u003eSample a surface at regularly spaced lattice points in the range 0..1 inclusive.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "(Integer, Integer) -\u003e Surface a -\u003e [[a]]",
        "fct-source": "src/RSAGL-Math-Curve.html#iterateSurface",
        "fct-type": "function",
        "title": "iterateSurface"
      },
      "index": {
        "description": "Sample surface at regularly spaced lattice points in the range inclusive",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "iterateSurface",
        "normalized": "(Integer,Integer)-\u003eSurface a-\u003e[[a]]",
        "package": "rsagl-math",
        "partial": "Surface",
        "signature": "(Integer,Integer)-\u003eSurface a-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:linearSamples",
      "description": {
        "fct-descr": "\u003cp\u003eSampling algorithm that takes a fixed count of samples.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "Integer -\u003e SamplingAlgorithm a",
        "fct-source": "src/RSAGL-Math-Curve.html#linearSamples",
        "fct-type": "function",
        "title": "linearSamples"
      },
      "index": {
        "description": "Sampling algorithm that takes fixed count of samples",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "linearSamples",
        "normalized": "Integer-\u003eSamplingAlgorithm a",
        "package": "rsagl-math",
        "partial": "Samples",
        "signature": "Integer-\u003eSamplingAlgorithm a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:loopCurve",
      "description": {
        "fct-descr": "\u003cp\u003eLoop a curve onto itself at the specified bounds.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "(RSdouble, RSdouble) -\u003e Curve a -\u003e Curve a",
        "fct-source": "src/RSAGL-Math-Curve.html#loopCurve",
        "fct-type": "function",
        "title": "loopCurve"
      },
      "index": {
        "description": "Loop curve onto itself at the specified bounds",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "loopCurve",
        "normalized": "(RSdouble,RSdouble)-\u003eCurve a-\u003eCurve a",
        "package": "rsagl-math",
        "partial": "Curve",
        "signature": "(RSdouble,RSdouble)-\u003eCurve a-\u003eCurve a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:newellCurve",
      "description": {
        "fct-descr": "\u003cp\u003eTry to determine the normal vector to a curve.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "Curve Point3D -\u003e Maybe Vector3D",
        "fct-source": "src/RSAGL-Math-Curve.html#newellCurve",
        "fct-type": "function",
        "title": "newellCurve"
      },
      "index": {
        "description": "Try to determine the normal vector to curve",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "newellCurve",
        "normalized": "Curve Point D-\u003eMaybe Vector D",
        "package": "rsagl-math",
        "partial": "Curve",
        "signature": "Curve Point D-\u003eMaybe Vector D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:orientationLoops",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine the orientation of a \u003ccode\u003e\u003ca\u003eSurface\u003c/a\u003e\u003c/code\u003e by passing very small circles centered on each sampled point as the parametric input.\n\u003c/p\u003e\u003cp\u003eA gotchya with this operation is that as much as 3/4ths of the orientation loop may lie outside of the 0..1 range that is normally\n sampled.  Depending on how the surface is constructed, this may produce unexpected results.  The solution is to clamp the\n the problematic parametric inputs at 0 and 1 using \u003ccode\u003eclampSurface\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAs a rule, do clamp longitudinal axes that come to a singularity at each end.\n Do not clamp latitudinal axes that are connected at each end.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "Surface p -\u003e Surface (Curve p)",
        "fct-source": "src/RSAGL-Math-Curve.html#orientationLoops",
        "fct-type": "function",
        "title": "orientationLoops"
      },
      "index": {
        "description": "Determine the orientation of Surface by passing very small circles centered on each sampled point as the parametric input gotchya with this operation is that as much as ths of the orientation loop may lie outside of the range that is normally sampled Depending on how the surface is constructed this may produce unexpected results The solution is to clamp the the problematic parametric inputs at and using clampSurface As rule do clamp longitudinal axes that come to singularity at each end Do not clamp latitudinal axes that are connected at each end",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "orientationLoops",
        "normalized": "Surface a-\u003eSurface(Curve a)",
        "package": "rsagl-math",
        "partial": "Loops",
        "signature": "Surface p-\u003eSurface(Curve p)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:scaleCurve",
      "description": {
        "fct-descr": "\u003cp\u003eScale a curve along the axis of the input parameter.  Factors greater than one have a \u003ca\u003ezoom in\u003c/a\u003e effect, while\n factors less than one have a \u003ca\u003ezoom out\u003c/a\u003e effect.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "RSdouble -\u003e Curve a -\u003e Curve a",
        "fct-source": "src/RSAGL-Math-Curve.html#scaleCurve",
        "fct-type": "function",
        "title": "scaleCurve"
      },
      "index": {
        "description": "Scale curve along the axis of the input parameter Factors greater than one have zoom in effect while factors less than one have zoom out effect",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "scaleCurve",
        "normalized": "RSdouble-\u003eCurve a-\u003eCurve a",
        "package": "rsagl-math",
        "partial": "Curve",
        "signature": "RSdouble-\u003eCurve a-\u003eCurve a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:scaleSurface",
      "description": {
        "fct-descr": "\u003cp\u003eScale a surface along each of its input parameter axes, as scaleCurve.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "(RSdouble, RSdouble) -\u003e Surface a -\u003e Surface a",
        "fct-source": "src/RSAGL-Math-Curve.html#scaleSurface",
        "fct-type": "function",
        "title": "scaleSurface"
      },
      "index": {
        "description": "Scale surface along each of its input parameter axes as scaleCurve",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "scaleSurface",
        "normalized": "(RSdouble,RSdouble)-\u003eSurface a-\u003eSurface a",
        "package": "rsagl-math",
        "partial": "Surface",
        "signature": "(RSdouble,RSdouble)-\u003eSurface a-\u003eSurface a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:surface",
      "description": {
        "fct-descr": "\u003cp\u003eDefine a simple surface.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "(RSdouble -\u003e RSdouble -\u003e a) -\u003e Surface a",
        "fct-source": "src/RSAGL-Math-Curve.html#surface",
        "fct-type": "function",
        "title": "surface"
      },
      "index": {
        "description": "Define simple surface",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "surface",
        "normalized": "(RSdouble-\u003eRSdouble-\u003ea)-\u003eSurface a",
        "package": "rsagl-math",
        "partial": "",
        "signature": "(RSdouble-\u003eRSdouble-\u003ea)-\u003eSurface a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:surfaceDerivative",
      "description": {
        "fct-descr": "\u003cp\u003eTake the piecewise derivative of a \u003ccode\u003e\u003ca\u003eSurface\u003c/a\u003e\u003c/code\u003e along the inner and outer curves.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "Surface p -\u003e Surface (v, v)",
        "fct-source": "src/RSAGL-Math-Curve.html#surfaceDerivative",
        "fct-type": "function",
        "title": "surfaceDerivative"
      },
      "index": {
        "description": "Take the piecewise derivative of Surface along the inner and outer curves",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "surfaceDerivative",
        "normalized": "Surface a-\u003eSurface(b,b)",
        "package": "rsagl-math",
        "partial": "Derivative",
        "signature": "Surface p-\u003eSurface(v,v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:surfaceNormals3D",
      "description": {
        "fct-descr": "\u003cp\u003eTry to determine the normal vectors of a surface using multiple techniques.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "Surface Point3D -\u003e Surface SurfaceVertex3D",
        "fct-source": "src/RSAGL-Math-Curve.html#surfaceNormals3D",
        "fct-type": "function",
        "title": "surfaceNormals3D"
      },
      "index": {
        "description": "Try to determine the normal vectors of surface using multiple techniques",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "surfaceNormals3D",
        "normalized": "Surface Point D-\u003eSurface SurfaceVertex D",
        "package": "rsagl-math",
        "partial": "Normals",
        "signature": "Surface Point D-\u003eSurface SurfaceVertex D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:transformCurve2",
      "description": {
        "fct-descr": "\u003cp\u003eLift two curve transformations onto each axis of a second order curve.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "(forall u.  Curve u -\u003e Curve u) -\u003e (forall v.  Curve v -\u003e Curve v) -\u003e Curve (Curve a) -\u003e Curve (Curve a)",
        "fct-source": "src/RSAGL-Math-Curve.html#transformCurve2",
        "fct-type": "function",
        "title": "transformCurve2"
      },
      "index": {
        "description": "Lift two curve transformations onto each axis of second order curve",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "transformCurve2",
        "normalized": "(a b Curve c-\u003eCurve c)-\u003e(a d Curve e-\u003eCurve e)-\u003eCurve(Curve f)-\u003eCurve(Curve f)",
        "package": "rsagl-math",
        "partial": "Curve",
        "signature": "(forall u. Curve u-\u003eCurve u)-\u003e(forall v. Curve v-\u003eCurve v)-\u003eCurve(Curve a)-\u003eCurve(Curve a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:transformSurface",
      "description": {
        "fct-descr": "\u003cp\u003eLift a transformation on a second order \u003ccode\u003e\u003ca\u003eCurve\u003c/a\u003e\u003c/code\u003e onto a Surface.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "(Curve (Curve a) -\u003e Curve (Curve a)) -\u003e Surface a -\u003e Surface a",
        "fct-source": "src/RSAGL-Math-Curve.html#transformSurface",
        "fct-type": "function",
        "title": "transformSurface"
      },
      "index": {
        "description": "Lift transformation on second order Curve onto Surface",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "transformSurface",
        "normalized": "(Curve(Curve a)-\u003eCurve(Curve a))-\u003eSurface a-\u003eSurface a",
        "package": "rsagl-math",
        "partial": "Surface",
        "signature": "(Curve(Curve a)-\u003eCurve(Curve a))-\u003eSurface a-\u003eSurface a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:transformSurface2",
      "description": {
        "fct-descr": "\u003cp\u003eLift two curve transformations onto each axis of a Surface.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "(forall u.  Curve u -\u003e Curve u) -\u003e (forall v.  Curve v -\u003e Curve v) -\u003e Surface a -\u003e Surface a",
        "fct-source": "src/RSAGL-Math-Curve.html#transformSurface2",
        "fct-type": "function",
        "title": "transformSurface2"
      },
      "index": {
        "description": "Lift two curve transformations onto each axis of Surface",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "transformSurface2",
        "normalized": "(a b Curve c-\u003eCurve c)-\u003e(a d Curve e-\u003eCurve e)-\u003eSurface f-\u003eSurface f",
        "package": "rsagl-math",
        "partial": "Surface",
        "signature": "(forall u. Curve u-\u003eCurve u)-\u003e(forall v. Curve v-\u003eCurve v)-\u003eSurface a-\u003eSurface a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:translateCurve",
      "description": {
        "fct-descr": "\u003cp\u003eTranslate a curve along the axis of the input parameter.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "RSdouble -\u003e Curve a -\u003e Curve a",
        "fct-source": "src/RSAGL-Math-Curve.html#translateCurve",
        "fct-type": "function",
        "title": "translateCurve"
      },
      "index": {
        "description": "Translate curve along the axis of the input parameter",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "translateCurve",
        "normalized": "RSdouble-\u003eCurve a-\u003eCurve a",
        "package": "rsagl-math",
        "partial": "Curve",
        "signature": "RSdouble-\u003eCurve a-\u003eCurve a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:translateSurface",
      "description": {
        "fct-descr": "\u003cp\u003eTranslate a surface over each of its input parameter axes, as translateCurve.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "(RSdouble, RSdouble) -\u003e Surface a -\u003e Surface a",
        "fct-source": "src/RSAGL-Math-Curve.html#translateSurface",
        "fct-type": "function",
        "title": "translateSurface"
      },
      "index": {
        "description": "Translate surface over each of its input parameter axes as translateCurve",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "translateSurface",
        "normalized": "(RSdouble,RSdouble)-\u003eSurface a-\u003eSurface a",
        "package": "rsagl-math",
        "partial": "Surface",
        "signature": "(RSdouble,RSdouble)-\u003eSurface a-\u003eSurface a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:transposeCurve",
      "description": {
        "fct-descr": "\u003cp\u003eTranspose the inner and outer components of a curve.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "Curve (Curve a) -\u003e Curve (Curve a)",
        "fct-source": "src/RSAGL-Math-Curve.html#transposeCurve",
        "fct-type": "function",
        "title": "transposeCurve"
      },
      "index": {
        "description": "Transpose the inner and outer components of curve",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "transposeCurve",
        "normalized": "Curve(Curve a)-\u003eCurve(Curve a)",
        "package": "rsagl-math",
        "partial": "Curve",
        "signature": "Curve(Curve a)-\u003eCurve(Curve a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:transposeSurface",
      "description": {
        "fct-descr": "\u003cp\u003eTranspose the axes of a \u003ccode\u003e\u003ca\u003eSurface\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "Surface a -\u003e Surface a",
        "fct-source": "src/RSAGL-Math-Curve.html#transposeSurface",
        "fct-type": "function",
        "title": "transposeSurface"
      },
      "index": {
        "description": "Transpose the axes of Surface",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "transposeSurface",
        "normalized": "Surface a-\u003eSurface a",
        "package": "rsagl-math",
        "partial": "Surface",
        "signature": "Surface a-\u003eSurface a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:unwrapSurface",
      "description": {
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "Surface a -\u003e Curve (Curve a)",
        "fct-source": "src/RSAGL-Math-Curve.html#unwrapSurface",
        "fct-type": "function",
        "title": "unwrapSurface"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "unwrapSurface",
        "normalized": "Surface a-\u003eCurve(Curve a)",
        "package": "rsagl-math",
        "partial": "Surface",
        "signature": "Surface a-\u003eCurve(Curve a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:uv_identity",
      "description": {
        "fct-descr": "\u003cp\u003eAn identity \u003ccode\u003e\u003ca\u003eSurface\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "Surface (RSdouble, RSdouble)",
        "fct-source": "src/RSAGL-Math-Curve.html#uv_identity",
        "fct-type": "function",
        "title": "uv_identity"
      },
      "index": {
        "description": "An identity Surface",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "uv_identity",
        "normalized": "Surface(RSdouble,RSdouble)",
        "package": "rsagl-math",
        "partial": "",
        "signature": "Surface(RSdouble,RSdouble)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:wrapSurface",
      "description": {
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "Curve (Curve a) -\u003e Surface a",
        "fct-source": "src/RSAGL-Math-Curve.html#wrapSurface",
        "fct-type": "function",
        "title": "wrapSurface"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "wrapSurface",
        "normalized": "Curve(Curve a)-\u003eSurface a",
        "package": "rsagl-math",
        "partial": "Surface",
        "signature": "Curve(Curve a)-\u003eSurface a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:zipCurve",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two curves using an arbitrary function.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "(x -\u003e y -\u003e z) -\u003e Curve x -\u003e Curve y -\u003e Curve z",
        "fct-source": "src/RSAGL-Math-Curve.html#zipCurve",
        "fct-type": "function",
        "title": "zipCurve"
      },
      "index": {
        "description": "Combine two curves using an arbitrary function",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "zipCurve",
        "normalized": "(a-\u003eb-\u003ec)-\u003eCurve a-\u003eCurve b-\u003eCurve c",
        "package": "rsagl-math",
        "partial": "Curve",
        "signature": "(x-\u003ey-\u003ez)-\u003eCurve x-\u003eCurve y-\u003eCurve z"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Curve.html#v:zipSurface",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two surfaces using an arbitrary function.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Curve",
        "fct-package": "rsagl-math",
        "fct-signature": "(x -\u003e y -\u003e z) -\u003e Surface x -\u003e Surface y -\u003e Surface z",
        "fct-source": "src/RSAGL-Math-Curve.html#zipSurface",
        "fct-type": "function",
        "title": "zipSurface"
      },
      "index": {
        "description": "Combine two surfaces using an arbitrary function",
        "hierarchy": "RSAGL Math Curve",
        "module": "RSAGL.Math.Curve",
        "name": "zipSurface",
        "normalized": "(a-\u003eb-\u003ec)-\u003eSurface a-\u003eSurface b-\u003eSurface c",
        "package": "rsagl-math",
        "partial": "Surface",
        "signature": "(x-\u003ey-\u003ez)-\u003eSurface x-\u003eSurface y-\u003eSurface z"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-CurveExtras.html#",
      "description": {
        "fct-module": "RSAGL.Math.CurveExtras",
        "fct-package": "rsagl-math",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Math-CurveExtras.html",
        "fct-type": "module",
        "title": "CurveExtras"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math CurveExtras",
        "module": "RSAGL.Math.CurveExtras",
        "name": "CurveExtras",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Curve Extras",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-CurveExtras.html#v:circleXY",
      "description": {
        "fct-module": "RSAGL.Math.CurveExtras",
        "fct-package": "rsagl-math",
        "fct-signature": "Curve Point3D",
        "fct-source": "src/RSAGL-Math-CurveExtras.html#circleXY",
        "fct-type": "function",
        "title": "circleXY"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math CurveExtras",
        "module": "RSAGL.Math.CurveExtras",
        "name": "circleXY",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "XY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-CurveExtras.html#v:circularCoordinates",
      "description": {
        "fct-module": "RSAGL.Math.CurveExtras",
        "fct-package": "rsagl-math",
        "fct-signature": "((RSdouble, RSdouble) -\u003e a) -\u003e Surface a",
        "fct-source": "src/RSAGL-Math-CurveExtras.html#circularCoordinates",
        "fct-type": "function",
        "title": "circularCoordinates"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math CurveExtras",
        "module": "RSAGL.Math.CurveExtras",
        "name": "circularCoordinates",
        "normalized": "((RSdouble,RSdouble)-\u003ea)-\u003eSurface a",
        "package": "rsagl-math",
        "partial": "Coordinates",
        "signature": "((RSdouble,RSdouble)-\u003ea)-\u003eSurface a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-CurveExtras.html#v:cylindricalCoordinates",
      "description": {
        "fct-module": "RSAGL.Math.CurveExtras",
        "fct-package": "rsagl-math",
        "fct-signature": "((Angle, RSdouble) -\u003e a) -\u003e Surface a",
        "fct-source": "src/RSAGL-Math-CurveExtras.html#cylindricalCoordinates",
        "fct-type": "function",
        "title": "cylindricalCoordinates"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math CurveExtras",
        "module": "RSAGL.Math.CurveExtras",
        "name": "cylindricalCoordinates",
        "normalized": "((Angle,RSdouble)-\u003ea)-\u003eSurface a",
        "package": "rsagl-math",
        "partial": "Coordinates",
        "signature": "((Angle,RSdouble)-\u003ea)-\u003eSurface a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-CurveExtras.html#v:linearInterpolation",
      "description": {
        "fct-module": "RSAGL.Math.CurveExtras",
        "fct-package": "rsagl-math",
        "fct-signature": "[p] -\u003e Curve p",
        "fct-source": "src/RSAGL-Math-CurveExtras.html#linearInterpolation",
        "fct-type": "function",
        "title": "linearInterpolation"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math CurveExtras",
        "module": "RSAGL.Math.CurveExtras",
        "name": "linearInterpolation",
        "normalized": "[a]-\u003eCurve a",
        "package": "rsagl-math",
        "partial": "Interpolation",
        "signature": "[p]-\u003eCurve p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-CurveExtras.html#v:loopCurve",
      "description": {
        "fct-descr": "\u003cp\u003eLoop a curve onto itself at the specified bounds.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.CurveExtras",
        "fct-package": "rsagl-math",
        "fct-signature": "(RSdouble, RSdouble) -\u003e Curve a -\u003e Curve a",
        "fct-source": "src/RSAGL-Math-Curve.html#loopCurve",
        "fct-type": "function",
        "title": "loopCurve"
      },
      "index": {
        "description": "Loop curve onto itself at the specified bounds",
        "hierarchy": "RSAGL Math CurveExtras",
        "module": "RSAGL.Math.CurveExtras",
        "name": "loopCurve",
        "normalized": "(RSdouble,RSdouble)-\u003eCurve a-\u003eCurve a",
        "package": "rsagl-math",
        "partial": "Curve",
        "signature": "(RSdouble,RSdouble)-\u003eCurve a-\u003eCurve a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-CurveExtras.html#v:loopedLinearInterpolation",
      "description": {
        "fct-module": "RSAGL.Math.CurveExtras",
        "fct-package": "rsagl-math",
        "fct-signature": "[p] -\u003e Curve p",
        "fct-source": "src/RSAGL-Math-CurveExtras.html#loopedLinearInterpolation",
        "fct-type": "function",
        "title": "loopedLinearInterpolation"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math CurveExtras",
        "module": "RSAGL.Math.CurveExtras",
        "name": "loopedLinearInterpolation",
        "normalized": "[a]-\u003eCurve a",
        "package": "rsagl-math",
        "partial": "Linear Interpolation",
        "signature": "[p]-\u003eCurve p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-CurveExtras.html#v:polarCoordinates",
      "description": {
        "fct-module": "RSAGL.Math.CurveExtras",
        "fct-package": "rsagl-math",
        "fct-signature": "((Angle, RSdouble) -\u003e a) -\u003e Surface a",
        "fct-source": "src/RSAGL-Math-CurveExtras.html#polarCoordinates",
        "fct-type": "function",
        "title": "polarCoordinates"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math CurveExtras",
        "module": "RSAGL.Math.CurveExtras",
        "name": "polarCoordinates",
        "normalized": "((Angle,RSdouble)-\u003ea)-\u003eSurface a",
        "package": "rsagl-math",
        "partial": "Coordinates",
        "signature": "((Angle,RSdouble)-\u003ea)-\u003eSurface a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-CurveExtras.html#v:regularPolygon",
      "description": {
        "fct-module": "RSAGL.Math.CurveExtras",
        "fct-package": "rsagl-math",
        "fct-signature": "Integer -\u003e Curve Point3D",
        "fct-source": "src/RSAGL-Math-CurveExtras.html#regularPolygon",
        "fct-type": "function",
        "title": "regularPolygon"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math CurveExtras",
        "module": "RSAGL.Math.CurveExtras",
        "name": "regularPolygon",
        "normalized": "Integer-\u003eCurve Point D",
        "package": "rsagl-math",
        "partial": "Polygon",
        "signature": "Integer-\u003eCurve Point D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-CurveExtras.html#v:smoothCurve",
      "description": {
        "fct-module": "RSAGL.Math.CurveExtras",
        "fct-package": "rsagl-math",
        "fct-signature": "Integer -\u003e RSdouble -\u003e Curve p -\u003e Curve p",
        "fct-source": "src/RSAGL-Math-CurveExtras.html#smoothCurve",
        "fct-type": "function",
        "title": "smoothCurve"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math CurveExtras",
        "module": "RSAGL.Math.CurveExtras",
        "name": "smoothCurve",
        "normalized": "Integer-\u003eRSdouble-\u003eCurve a-\u003eCurve a",
        "package": "rsagl-math",
        "partial": "Curve",
        "signature": "Integer-\u003eRSdouble-\u003eCurve p-\u003eCurve p"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-CurveExtras.html#v:sphericalCoordinates",
      "description": {
        "fct-module": "RSAGL.Math.CurveExtras",
        "fct-package": "rsagl-math",
        "fct-signature": "((Angle, Angle) -\u003e a) -\u003e Surface a",
        "fct-source": "src/RSAGL-Math-CurveExtras.html#sphericalCoordinates",
        "fct-type": "function",
        "title": "sphericalCoordinates"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math CurveExtras",
        "module": "RSAGL.Math.CurveExtras",
        "name": "sphericalCoordinates",
        "normalized": "((Angle,Angle)-\u003ea)-\u003eSurface a",
        "package": "rsagl-math",
        "partial": "Coordinates",
        "signature": "((Angle,Angle)-\u003ea)-\u003eSurface a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-CurveExtras.html#v:toroidalCoordinates",
      "description": {
        "fct-module": "RSAGL.Math.CurveExtras",
        "fct-package": "rsagl-math",
        "fct-signature": "((Angle, Angle) -\u003e a) -\u003e Surface a",
        "fct-source": "src/RSAGL-Math-CurveExtras.html#toroidalCoordinates",
        "fct-type": "function",
        "title": "toroidalCoordinates"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math CurveExtras",
        "module": "RSAGL.Math.CurveExtras",
        "name": "toroidalCoordinates",
        "normalized": "((Angle,Angle)-\u003ea)-\u003eSurface a",
        "package": "rsagl-math",
        "partial": "Coordinates",
        "signature": "((Angle,Angle)-\u003ea)-\u003eSurface a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-CurveExtras.html#v:transformUnitCubeToUnitSphere",
      "description": {
        "fct-module": "RSAGL.Math.CurveExtras",
        "fct-package": "rsagl-math",
        "fct-signature": "Point3D -\u003e Point3D",
        "fct-source": "src/RSAGL-Math-CurveExtras.html#transformUnitCubeToUnitSphere",
        "fct-type": "function",
        "title": "transformUnitCubeToUnitSphere"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math CurveExtras",
        "module": "RSAGL.Math.CurveExtras",
        "name": "transformUnitCubeToUnitSphere",
        "normalized": "Point D-\u003ePoint D",
        "package": "rsagl-math",
        "partial": "Unit Cube To Unit Sphere",
        "signature": "Point D-\u003ePoint D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-CurveExtras.html#v:transformUnitSquareToUnitCircle",
      "description": {
        "fct-module": "RSAGL.Math.CurveExtras",
        "fct-package": "rsagl-math",
        "fct-signature": "(RSdouble, RSdouble) -\u003e (RSdouble, RSdouble)",
        "fct-source": "src/RSAGL-Math-CurveExtras.html#transformUnitSquareToUnitCircle",
        "fct-type": "function",
        "title": "transformUnitSquareToUnitCircle"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math CurveExtras",
        "module": "RSAGL.Math.CurveExtras",
        "name": "transformUnitSquareToUnitCircle",
        "normalized": "(RSdouble,RSdouble)-\u003e(RSdouble,RSdouble)",
        "package": "rsagl-math",
        "partial": "Unit Square To Unit Circle",
        "signature": "(RSdouble,RSdouble)-\u003e(RSdouble,RSdouble)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-FMod.html#",
      "description": {
        "fct-module": "RSAGL.Math.FMod",
        "fct-package": "rsagl-math",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Math-FMod.html",
        "fct-type": "module",
        "title": "FMod"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math FMod",
        "module": "RSAGL.Math.FMod",
        "name": "FMod",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "FMod",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-FMod.html#t:FMod",
      "description": {
        "fct-module": "RSAGL.Math.FMod",
        "fct-package": "rsagl-math",
        "fct-signature": "class",
        "fct-source": "src/RSAGL-Math-FMod.html#FMod",
        "fct-type": "class",
        "title": "FMod"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math FMod",
        "module": "RSAGL.Math.FMod",
        "name": "FMod",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "FMod",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-FMod.html#v:fmod",
      "description": {
        "fct-module": "RSAGL.Math.FMod",
        "fct-package": "rsagl-math",
        "fct-signature": "f -\u003e f -\u003e f",
        "fct-source": "src/RSAGL-Math-FMod.html#fmod",
        "fct-type": "method",
        "title": "fmod"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math FMod",
        "module": "RSAGL.Math.FMod",
        "name": "fmod",
        "normalized": "a-\u003ea-\u003ea",
        "package": "rsagl-math",
        "partial": "",
        "signature": "f-\u003ef-\u003ef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Interpolation.html#",
      "description": {
        "fct-module": "RSAGL.Math.Interpolation",
        "fct-package": "rsagl-math",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Math-Interpolation.html",
        "fct-type": "module",
        "title": "Interpolation"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Interpolation",
        "module": "RSAGL.Math.Interpolation",
        "name": "Interpolation",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Interpolation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Interpolation.html#v:lerp",
      "description": {
        "fct-module": "RSAGL.Math.Interpolation",
        "fct-package": "rsagl-math",
        "fct-signature": "r -\u003e (p, p) -\u003e p",
        "fct-source": "src/RSAGL-Math-Interpolation.html#lerp",
        "fct-type": "function",
        "title": "lerp"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Interpolation",
        "module": "RSAGL.Math.Interpolation",
        "name": "lerp",
        "normalized": "a-\u003e(b,b)-\u003eb",
        "package": "rsagl-math",
        "partial": "",
        "signature": "r-\u003e(p,p)-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Interpolation.html#v:lerpBetween",
      "description": {
        "fct-module": "RSAGL.Math.Interpolation",
        "fct-package": "rsagl-math",
        "fct-signature": "(r, r, r) -\u003e (p, p) -\u003e p",
        "fct-source": "src/RSAGL-Math-Interpolation.html#lerpBetween",
        "fct-type": "function",
        "title": "lerpBetween"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Interpolation",
        "module": "RSAGL.Math.Interpolation",
        "name": "lerpBetween",
        "normalized": "(a,a,a)-\u003e(b,b)-\u003eb",
        "package": "rsagl-math",
        "partial": "Between",
        "signature": "(r,r,r)-\u003e(p,p)-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Interpolation.html#v:lerpBetweenClamped",
      "description": {
        "fct-module": "RSAGL.Math.Interpolation",
        "fct-package": "rsagl-math",
        "fct-signature": "(r, r, r) -\u003e (p, p) -\u003e p",
        "fct-source": "src/RSAGL-Math-Interpolation.html#lerpBetweenClamped",
        "fct-type": "function",
        "title": "lerpBetweenClamped"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Interpolation",
        "module": "RSAGL.Math.Interpolation",
        "name": "lerpBetweenClamped",
        "normalized": "(a,a,a)-\u003e(b,b)-\u003eb",
        "package": "rsagl-math",
        "partial": "Between Clamped",
        "signature": "(r,r,r)-\u003e(p,p)-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Interpolation.html#v:lerpBetweenClampedMutated",
      "description": {
        "fct-module": "RSAGL.Math.Interpolation",
        "fct-package": "rsagl-math",
        "fct-signature": "(r -\u003e r) -\u003e (r, r, r) -\u003e (p, p) -\u003e p",
        "fct-source": "src/RSAGL-Math-Interpolation.html#lerpBetweenClampedMutated",
        "fct-type": "function",
        "title": "lerpBetweenClampedMutated"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Interpolation",
        "module": "RSAGL.Math.Interpolation",
        "name": "lerpBetweenClampedMutated",
        "normalized": "(a-\u003ea)-\u003e(a,a,a)-\u003e(b,b)-\u003eb",
        "package": "rsagl-math",
        "partial": "Between Clamped Mutated",
        "signature": "(r-\u003er)-\u003e(r,r,r)-\u003e(p,p)-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Interpolation.html#v:lerpBetweenMutated",
      "description": {
        "fct-module": "RSAGL.Math.Interpolation",
        "fct-package": "rsagl-math",
        "fct-signature": "(r -\u003e r) -\u003e (r, r, r) -\u003e (p, p) -\u003e p",
        "fct-source": "src/RSAGL-Math-Interpolation.html#lerpBetweenMutated",
        "fct-type": "function",
        "title": "lerpBetweenMutated"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Interpolation",
        "module": "RSAGL.Math.Interpolation",
        "name": "lerpBetweenMutated",
        "normalized": "(a-\u003ea)-\u003e(a,a,a)-\u003e(b,b)-\u003eb",
        "package": "rsagl-math",
        "partial": "Between Mutated",
        "signature": "(r-\u003er)-\u003e(r,r,r)-\u003e(p,p)-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Interpolation.html#v:lerpClamped",
      "description": {
        "fct-module": "RSAGL.Math.Interpolation",
        "fct-package": "rsagl-math",
        "fct-signature": "r -\u003e (p, p) -\u003e p",
        "fct-source": "src/RSAGL-Math-Interpolation.html#lerpClamped",
        "fct-type": "function",
        "title": "lerpClamped"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Interpolation",
        "module": "RSAGL.Math.Interpolation",
        "name": "lerpClamped",
        "normalized": "a-\u003e(b,b)-\u003eb",
        "package": "rsagl-math",
        "partial": "Clamped",
        "signature": "r-\u003e(p,p)-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Interpolation.html#v:lerpMap",
      "description": {
        "fct-module": "RSAGL.Math.Interpolation",
        "fct-package": "rsagl-math",
        "fct-signature": "[(r, p)] -\u003e r -\u003e p",
        "fct-source": "src/RSAGL-Math-Interpolation.html#lerpMap",
        "fct-type": "function",
        "title": "lerpMap"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Interpolation",
        "module": "RSAGL.Math.Interpolation",
        "name": "lerpMap",
        "normalized": "[(a,b)]-\u003ea-\u003eb",
        "package": "rsagl-math",
        "partial": "Map",
        "signature": "[(r,p)]-\u003er-\u003ep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Interpolation.html#v:lerp_mutator_continuous_1st",
      "description": {
        "fct-module": "RSAGL.Math.Interpolation",
        "fct-package": "rsagl-math",
        "fct-signature": "r -\u003e r",
        "fct-source": "src/RSAGL-Math-Interpolation.html#lerp_mutator_continuous_1st",
        "fct-type": "function",
        "title": "lerp_mutator_continuous_1st"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Interpolation",
        "module": "RSAGL.Math.Interpolation",
        "name": "lerp_mutator_continuous_1st",
        "normalized": "a-\u003ea",
        "package": "rsagl-math",
        "partial": "",
        "signature": "r-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-ListUtils.html#",
      "description": {
        "fct-module": "RSAGL.Math.ListUtils",
        "fct-package": "rsagl-math",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Math-ListUtils.html",
        "fct-type": "module",
        "title": "ListUtils"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math ListUtils",
        "module": "RSAGL.Math.ListUtils",
        "name": "ListUtils",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "List Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-ListUtils.html#v:consecutives",
      "description": {
        "fct-descr": "\u003cp\u003eAnswers a list containing every sequence of n consecutive\n elements in the parameter.\n\u003c/p\u003e\u003cpre\u003econsecutives 3 [1,2,3,4] = [[1,2,3],[2,3,4]]\u003c/pre\u003e",
        "fct-module": "RSAGL.Math.ListUtils",
        "fct-package": "rsagl-math",
        "fct-signature": "Int -\u003e [a] -\u003e [[a]]",
        "fct-source": "src/RSAGL-Math-ListUtils.html#consecutives",
        "fct-type": "function",
        "title": "consecutives"
      },
      "index": {
        "description": "Answers list containing every sequence of consecutive elements in the parameter consecutives",
        "hierarchy": "RSAGL Math ListUtils",
        "module": "RSAGL.Math.ListUtils",
        "name": "consecutives",
        "normalized": "Int-\u003e[a]-\u003e[[a]]",
        "package": "rsagl-math",
        "partial": "",
        "signature": "Int-\u003e[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-ListUtils.html#v:doubles",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms a list to a list of adjacent elements.\n\u003c/p\u003e\u003cpre\u003edoubles [1,2,3,4,5] = [(1,2),(2,3),(3,4),(4,5)]\u003c/pre\u003e",
        "fct-module": "RSAGL.Math.ListUtils",
        "fct-package": "rsagl-math",
        "fct-signature": "[a] -\u003e [(a, a)]",
        "fct-source": "src/RSAGL-Math-ListUtils.html#doubles",
        "fct-type": "function",
        "title": "doubles"
      },
      "index": {
        "description": "Transforms list to list of adjacent elements doubles",
        "hierarchy": "RSAGL Math ListUtils",
        "module": "RSAGL.Math.ListUtils",
        "name": "doubles",
        "normalized": "[a]-\u003e[(a,a)]",
        "package": "rsagl-math",
        "partial": "",
        "signature": "[a]-\u003e[(a,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-ListUtils.html#v:loopedConsecutives",
      "description": {
        "fct-descr": "\u003cp\u003eAnswers a list containing every sequence of n consecutive\n elements in the parameter, looping back to the beginning of the list.\n\u003c/p\u003e\u003cpre\u003econsecutives 3 [1,2,3,4] = [[1,2,3],[2,3,4],[3,4,1],[4,1,2]]\u003c/pre\u003e",
        "fct-module": "RSAGL.Math.ListUtils",
        "fct-package": "rsagl-math",
        "fct-signature": "Int -\u003e [a] -\u003e [[a]]",
        "fct-source": "src/RSAGL-Math-ListUtils.html#loopedConsecutives",
        "fct-type": "function",
        "title": "loopedConsecutives"
      },
      "index": {
        "description": "Answers list containing every sequence of consecutive elements in the parameter looping back to the beginning of the list consecutives",
        "hierarchy": "RSAGL Math ListUtils",
        "module": "RSAGL.Math.ListUtils",
        "name": "loopedConsecutives",
        "normalized": "Int-\u003e[a]-\u003e[[a]]",
        "package": "rsagl-math",
        "partial": "Consecutives",
        "signature": "Int-\u003e[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-ListUtils.html#v:loopedDoubles",
      "description": {
        "fct-descr": "\u003cp\u003eloopedDoubles transforms a list to a list of adjacent elements, looping\n back to the beginning of the list.\n\u003c/p\u003e\u003cpre\u003eloopedRSdoubles [1,2,3,4,5] = [(1,2),(2,3),(3,4),(4,5),(5,1)]\u003c/pre\u003e",
        "fct-module": "RSAGL.Math.ListUtils",
        "fct-package": "rsagl-math",
        "fct-signature": "[a] -\u003e [(a, a)]",
        "fct-source": "src/RSAGL-Math-ListUtils.html#loopedDoubles",
        "fct-type": "function",
        "title": "loopedDoubles"
      },
      "index": {
        "description": "loopedDoubles transforms list to list of adjacent elements looping back to the beginning of the list loopedRSdoubles",
        "hierarchy": "RSAGL Math ListUtils",
        "module": "RSAGL.Math.ListUtils",
        "name": "loopedDoubles",
        "normalized": "[a]-\u003e[(a,a)]",
        "package": "rsagl-math",
        "partial": "Doubles",
        "signature": "[a]-\u003e[(a,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-ListUtils.html#v:zeroToOne",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a list of numbers from 0.0 to 1.0, using n steps.\n This can't be done with the enum-from-to method, due to roundoff errors.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.ListUtils",
        "fct-package": "rsagl-math",
        "fct-signature": "Integer -\u003e [RSdouble]",
        "fct-source": "src/RSAGL-Math-ListUtils.html#zeroToOne",
        "fct-type": "function",
        "title": "zeroToOne"
      },
      "index": {
        "description": "Creates list of numbers from to using steps This can be done with the enum-from-to method due to roundoff errors",
        "hierarchy": "RSAGL Math ListUtils",
        "module": "RSAGL.Math.ListUtils",
        "name": "zeroToOne",
        "normalized": "Integer-\u003e[RSdouble]",
        "package": "rsagl-math",
        "partial": "To One",
        "signature": "Integer-\u003e[RSdouble]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#",
      "description": {
        "fct-module": "RSAGL.Math.Matrix",
        "fct-package": "rsagl-math",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Math-Matrix.html",
        "fct-type": "module",
        "title": "Matrix"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Matrix",
        "module": "RSAGL.Math.Matrix",
        "name": "Matrix",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Matrix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#t:Matrix",
      "description": {
        "fct-module": "RSAGL.Math.Matrix",
        "fct-package": "rsagl-math",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Math-Matrix.html#Matrix",
        "fct-type": "data",
        "title": "Matrix"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Matrix",
        "module": "RSAGL.Math.Matrix",
        "name": "Matrix",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Matrix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:colMajorForm",
      "description": {
        "fct-module": "RSAGL.Math.Matrix",
        "fct-package": "rsagl-math",
        "fct-signature": "Matrix -\u003e [[RSdouble]]",
        "fct-source": "src/RSAGL-Math-Matrix.html#colMajorForm",
        "fct-type": "function",
        "title": "colMajorForm"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Matrix",
        "module": "RSAGL.Math.Matrix",
        "name": "colMajorForm",
        "normalized": "Matrix-\u003e[[RSdouble]]",
        "package": "rsagl-math",
        "partial": "Major Form",
        "signature": "Matrix-\u003e[[RSdouble]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:determinant",
      "description": {
        "fct-module": "RSAGL.Math.Matrix",
        "fct-package": "rsagl-math",
        "fct-signature": "Matrix -\u003e RSdouble",
        "fct-source": "src/RSAGL-Math-Matrix.html#determinant",
        "fct-type": "function",
        "title": "determinant"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Matrix",
        "module": "RSAGL.Math.Matrix",
        "name": "determinant",
        "normalized": "Matrix-\u003eRSdouble",
        "package": "rsagl-math",
        "partial": "",
        "signature": "Matrix-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:determinantPrim",
      "description": {
        "fct-module": "RSAGL.Math.Matrix",
        "fct-package": "rsagl-math",
        "fct-signature": "Matrix -\u003e RSdouble",
        "fct-source": "src/RSAGL-Math-Matrix.html#determinantPrim",
        "fct-type": "function",
        "title": "determinantPrim"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Matrix",
        "module": "RSAGL.Math.Matrix",
        "name": "determinantPrim",
        "normalized": "Matrix-\u003eRSdouble",
        "package": "rsagl-math",
        "partial": "Prim",
        "signature": "Matrix-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:identity_matrix",
      "description": {
        "fct-module": "RSAGL.Math.Matrix",
        "fct-package": "rsagl-math",
        "fct-signature": "Matrix",
        "fct-source": "src/RSAGL-Math-Matrix.html#identity_matrix",
        "fct-type": "function",
        "title": "identity_matrix"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Matrix",
        "module": "RSAGL.Math.Matrix",
        "name": "identity_matrix",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:matrix",
      "description": {
        "fct-module": "RSAGL.Math.Matrix",
        "fct-package": "rsagl-math",
        "fct-signature": "[[RSdouble]] -\u003e Matrix",
        "fct-source": "src/RSAGL-Math-Matrix.html#matrix",
        "fct-type": "function",
        "title": "matrix"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Matrix",
        "module": "RSAGL.Math.Matrix",
        "name": "matrix",
        "normalized": "[[RSdouble]]-\u003eMatrix",
        "package": "rsagl-math",
        "partial": "",
        "signature": "[[RSdouble]]-\u003eMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:matrixAdd",
      "description": {
        "fct-module": "RSAGL.Math.Matrix",
        "fct-package": "rsagl-math",
        "fct-signature": "Matrix -\u003e Matrix -\u003e Matrix",
        "fct-source": "src/RSAGL-Math-Matrix.html#matrixAdd",
        "fct-type": "function",
        "title": "matrixAdd"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Matrix",
        "module": "RSAGL.Math.Matrix",
        "name": "matrixAdd",
        "normalized": "Matrix-\u003eMatrix-\u003eMatrix",
        "package": "rsagl-math",
        "partial": "Add",
        "signature": "Matrix-\u003eMatrix-\u003eMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:matrixAt",
      "description": {
        "fct-module": "RSAGL.Math.Matrix",
        "fct-package": "rsagl-math",
        "fct-signature": "Matrix -\u003e (Int, Int) -\u003e RSdouble",
        "fct-source": "src/RSAGL-Math-Matrix.html#matrixAt",
        "fct-type": "function",
        "title": "matrixAt"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Matrix",
        "module": "RSAGL.Math.Matrix",
        "name": "matrixAt",
        "normalized": "Matrix-\u003e(Int,Int)-\u003eRSdouble",
        "package": "rsagl-math",
        "partial": "At",
        "signature": "Matrix-\u003e(Int,Int)-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:matrixInverse",
      "description": {
        "fct-module": "RSAGL.Math.Matrix",
        "fct-package": "rsagl-math",
        "fct-signature": "Matrix -\u003e Matrix",
        "fct-source": "src/RSAGL-Math-Matrix.html#matrixInverse",
        "fct-type": "function",
        "title": "matrixInverse"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Matrix",
        "module": "RSAGL.Math.Matrix",
        "name": "matrixInverse",
        "normalized": "Matrix-\u003eMatrix",
        "package": "rsagl-math",
        "partial": "Inverse",
        "signature": "Matrix-\u003eMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:matrixInversePrim",
      "description": {
        "fct-module": "RSAGL.Math.Matrix",
        "fct-package": "rsagl-math",
        "fct-signature": "Matrix -\u003e Matrix",
        "fct-source": "src/RSAGL-Math-Matrix.html#matrixInversePrim",
        "fct-type": "function",
        "title": "matrixInversePrim"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Matrix",
        "module": "RSAGL.Math.Matrix",
        "name": "matrixInversePrim",
        "normalized": "Matrix-\u003eMatrix",
        "package": "rsagl-math",
        "partial": "Inverse Prim",
        "signature": "Matrix-\u003eMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:matrixInverseTransposePrim",
      "description": {
        "fct-module": "RSAGL.Math.Matrix",
        "fct-package": "rsagl-math",
        "fct-signature": "Matrix -\u003e Matrix",
        "fct-source": "src/RSAGL-Math-Matrix.html#matrixInverseTransposePrim",
        "fct-type": "function",
        "title": "matrixInverseTransposePrim"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Matrix",
        "module": "RSAGL.Math.Matrix",
        "name": "matrixInverseTransposePrim",
        "normalized": "Matrix-\u003eMatrix",
        "package": "rsagl-math",
        "partial": "Inverse Transpose Prim",
        "signature": "Matrix-\u003eMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:matrixMultiply",
      "description": {
        "fct-module": "RSAGL.Math.Matrix",
        "fct-package": "rsagl-math",
        "fct-signature": "Matrix -\u003e Matrix -\u003e Matrix",
        "fct-source": "src/RSAGL-Math-Matrix.html#matrixMultiply",
        "fct-type": "function",
        "title": "matrixMultiply"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Matrix",
        "module": "RSAGL.Math.Matrix",
        "name": "matrixMultiply",
        "normalized": "Matrix-\u003eMatrix-\u003eMatrix",
        "package": "rsagl-math",
        "partial": "Multiply",
        "signature": "Matrix-\u003eMatrix-\u003eMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:matrixTranspose",
      "description": {
        "fct-module": "RSAGL.Math.Matrix",
        "fct-package": "rsagl-math",
        "fct-signature": "Matrix -\u003e Matrix",
        "fct-source": "src/RSAGL-Math-Matrix.html#matrixTranspose",
        "fct-type": "function",
        "title": "matrixTranspose"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Matrix",
        "module": "RSAGL.Math.Matrix",
        "name": "matrixTranspose",
        "normalized": "Matrix-\u003eMatrix",
        "package": "rsagl-math",
        "partial": "Transpose",
        "signature": "Matrix-\u003eMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:matrixTransposePrim",
      "description": {
        "fct-module": "RSAGL.Math.Matrix",
        "fct-package": "rsagl-math",
        "fct-signature": "Matrix -\u003e Matrix",
        "fct-source": "src/RSAGL-Math-Matrix.html#matrixTransposePrim",
        "fct-type": "function",
        "title": "matrixTransposePrim"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Matrix",
        "module": "RSAGL.Math.Matrix",
        "name": "matrixTransposePrim",
        "normalized": "Matrix-\u003eMatrix",
        "package": "rsagl-math",
        "partial": "Transpose Prim",
        "signature": "Matrix-\u003eMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:rotationMatrix",
      "description": {
        "fct-module": "RSAGL.Math.Matrix",
        "fct-package": "rsagl-math",
        "fct-signature": "Vector3D -\u003e Angle -\u003e Matrix",
        "fct-source": "src/RSAGL-Math-Matrix.html#rotationMatrix",
        "fct-type": "function",
        "title": "rotationMatrix"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Matrix",
        "module": "RSAGL.Math.Matrix",
        "name": "rotationMatrix",
        "normalized": "Vector D-\u003eAngle-\u003eMatrix",
        "package": "rsagl-math",
        "partial": "Matrix",
        "signature": "Vector D-\u003eAngle-\u003eMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:rowAt",
      "description": {
        "fct-module": "RSAGL.Math.Matrix",
        "fct-package": "rsagl-math",
        "fct-signature": "Matrix -\u003e Int -\u003e [RSdouble]",
        "fct-source": "src/RSAGL-Math-Matrix.html#rowAt",
        "fct-type": "function",
        "title": "rowAt"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Matrix",
        "module": "RSAGL.Math.Matrix",
        "name": "rowAt",
        "normalized": "Matrix-\u003eInt-\u003e[RSdouble]",
        "package": "rsagl-math",
        "partial": "At",
        "signature": "Matrix-\u003eInt-\u003e[RSdouble]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:rowMajorForm",
      "description": {
        "fct-module": "RSAGL.Math.Matrix",
        "fct-package": "rsagl-math",
        "fct-signature": "Matrix -\u003e [[RSdouble]]",
        "fct-source": "src/RSAGL-Math-Matrix.html#rowMajorForm",
        "fct-type": "function",
        "title": "rowMajorForm"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Matrix",
        "module": "RSAGL.Math.Matrix",
        "name": "rowMajorForm",
        "normalized": "Matrix-\u003e[[RSdouble]]",
        "package": "rsagl-math",
        "partial": "Major Form",
        "signature": "Matrix-\u003e[[RSdouble]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:scaleMatrix",
      "description": {
        "fct-module": "RSAGL.Math.Matrix",
        "fct-package": "rsagl-math",
        "fct-signature": "Vector3D -\u003e Matrix",
        "fct-source": "src/RSAGL-Math-Matrix.html#scaleMatrix",
        "fct-type": "function",
        "title": "scaleMatrix"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Matrix",
        "module": "RSAGL.Math.Matrix",
        "name": "scaleMatrix",
        "normalized": "Vector D-\u003eMatrix",
        "package": "rsagl-math",
        "partial": "Matrix",
        "signature": "Vector D-\u003eMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:transformHomogenous",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a column matrix of length 4, perform an affine transformation on it, and produce the resulting value.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Matrix",
        "fct-package": "rsagl-math",
        "fct-signature": "RSdouble -\u003e RSdouble -\u003e RSdouble -\u003e RSdouble -\u003e (RSdouble -\u003e RSdouble -\u003e RSdouble -\u003e a) -\u003e Matrix -\u003e a",
        "fct-source": "src/RSAGL-Math-Matrix.html#transformHomogenous",
        "fct-type": "function",
        "title": "transformHomogenous"
      },
      "index": {
        "description": "Generate column matrix of length perform an affine transformation on it and produce the resulting value",
        "hierarchy": "RSAGL Math Matrix",
        "module": "RSAGL.Math.Matrix",
        "name": "transformHomogenous",
        "normalized": "RSdouble-\u003eRSdouble-\u003eRSdouble-\u003eRSdouble-\u003e(RSdouble-\u003eRSdouble-\u003eRSdouble-\u003ea)-\u003eMatrix-\u003ea",
        "package": "rsagl-math",
        "partial": "Homogenous",
        "signature": "RSdouble-\u003eRSdouble-\u003eRSdouble-\u003eRSdouble-\u003e(RSdouble-\u003eRSdouble-\u003eRSdouble-\u003ea)-\u003eMatrix-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:translationMatrix",
      "description": {
        "fct-module": "RSAGL.Math.Matrix",
        "fct-package": "rsagl-math",
        "fct-signature": "Vector3D -\u003e Matrix",
        "fct-source": "src/RSAGL-Math-Matrix.html#translationMatrix",
        "fct-type": "function",
        "title": "translationMatrix"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Matrix",
        "module": "RSAGL.Math.Matrix",
        "name": "translationMatrix",
        "normalized": "Vector D-\u003eMatrix",
        "package": "rsagl-math",
        "partial": "Matrix",
        "signature": "Vector D-\u003eMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Matrix.html#v:xyzMatrix",
      "description": {
        "fct-module": "RSAGL.Math.Matrix",
        "fct-package": "rsagl-math",
        "fct-signature": "Vector3D -\u003e Vector3D -\u003e Vector3D -\u003e Matrix",
        "fct-source": "src/RSAGL-Math-Matrix.html#xyzMatrix",
        "fct-type": "function",
        "title": "xyzMatrix"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Matrix",
        "module": "RSAGL.Math.Matrix",
        "name": "xyzMatrix",
        "normalized": "Vector D-\u003eVector D-\u003eVector D-\u003eMatrix",
        "package": "rsagl-math",
        "partial": "Matrix",
        "signature": "Vector D-\u003eVector D-\u003eVector D-\u003eMatrix"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Orthogonal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIt's useful to work with the set of coordinate systems restricted to those\n that use orthogonal unit-scaled axes, that is, that are subject only to\n rotation and translation.  This is because these coordinate systems are the\n describe rigid objects.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "RSAGL.Math.Orthogonal",
        "fct-package": "rsagl-math",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Math-Orthogonal.html",
        "fct-type": "module",
        "title": "Orthogonal"
      },
      "index": {
        "description": "It useful to work with the set of coordinate systems restricted to those that use orthogonal unit-scaled axes that is that are subject only to rotation and translation This is because these coordinate systems are the describe rigid objects",
        "hierarchy": "RSAGL Math Orthogonal",
        "module": "RSAGL.Math.Orthogonal",
        "name": "Orthogonal",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Orthogonal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Orthogonal.html#t:FUR",
      "description": {
        "fct-module": "RSAGL.Math.Orthogonal",
        "fct-package": "rsagl-math",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Math-Orthogonal.html#FUR",
        "fct-type": "data",
        "title": "FUR"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Orthogonal",
        "module": "RSAGL.Math.Orthogonal",
        "name": "FUR",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "FUR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Orthogonal.html#v:backward",
      "description": {
        "fct-descr": "\u003cp\u003eA reference to the -Z axis.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Orthogonal",
        "fct-package": "rsagl-math",
        "fct-signature": "a -\u003e FUR a",
        "fct-source": "src/RSAGL-Math-Orthogonal.html#backward",
        "fct-type": "function",
        "title": "backward"
      },
      "index": {
        "description": "reference to the axis",
        "hierarchy": "RSAGL Math Orthogonal",
        "module": "RSAGL.Math.Orthogonal",
        "name": "backward",
        "normalized": "a-\u003eFUR a",
        "package": "rsagl-math",
        "partial": "",
        "signature": "a-\u003eFUR a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Orthogonal.html#v:down",
      "description": {
        "fct-descr": "\u003cp\u003eA reference to the -Y axis.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Orthogonal",
        "fct-package": "rsagl-math",
        "fct-signature": "a -\u003e FUR a",
        "fct-source": "src/RSAGL-Math-Orthogonal.html#down",
        "fct-type": "function",
        "title": "down"
      },
      "index": {
        "description": "reference to the axis",
        "hierarchy": "RSAGL Math Orthogonal",
        "module": "RSAGL.Math.Orthogonal",
        "name": "down",
        "normalized": "a-\u003eFUR a",
        "package": "rsagl-math",
        "partial": "",
        "signature": "a-\u003eFUR a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Orthogonal.html#v:forward",
      "description": {
        "fct-descr": "\u003cp\u003eA reference to the +Z axis.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Orthogonal",
        "fct-package": "rsagl-math",
        "fct-signature": "a -\u003e FUR a",
        "fct-source": "src/RSAGL-Math-Orthogonal.html#forward",
        "fct-type": "function",
        "title": "forward"
      },
      "index": {
        "description": "reference to the axis",
        "hierarchy": "RSAGL Math Orthogonal",
        "module": "RSAGL.Math.Orthogonal",
        "name": "forward",
        "normalized": "a-\u003eFUR a",
        "package": "rsagl-math",
        "partial": "",
        "signature": "a-\u003eFUR a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Orthogonal.html#v:left",
      "description": {
        "fct-descr": "\u003cp\u003eA reference to the -X axis.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Orthogonal",
        "fct-package": "rsagl-math",
        "fct-signature": "a -\u003e FUR a",
        "fct-source": "src/RSAGL-Math-Orthogonal.html#left",
        "fct-type": "function",
        "title": "left"
      },
      "index": {
        "description": "reference to the axis",
        "hierarchy": "RSAGL Math Orthogonal",
        "module": "RSAGL.Math.Orthogonal",
        "name": "left",
        "normalized": "a-\u003eFUR a",
        "package": "rsagl-math",
        "partial": "",
        "signature": "a-\u003eFUR a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Orthogonal.html#v:modelLookAt",
      "description": {
        "fct-descr": "\u003cp\u003eTranslates and rotates a model to aim at a given position or in a\n given direction from a given vantage point.  This is analogous\n to camera look-at functions, and could be used, for example, to\n cause a model of an eyeball to track a particular target.\n The first parameter is the position of the model.  Typically the second\n parameter will be the position of the target, and the third parameter will\n \u003ccode\u003e(up $ Vector3D 0 1 0)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Orthogonal",
        "fct-package": "rsagl-math",
        "fct-signature": "Point3D -\u003e FUR (Either Point3D Vector3D) -\u003e FUR (Either Point3D Vector3D) -\u003e a -\u003e a",
        "fct-source": "src/RSAGL-Math-Orthogonal.html#modelLookAt",
        "fct-type": "function",
        "title": "modelLookAt"
      },
      "index": {
        "description": "Translates and rotates model to aim at given position or in given direction from given vantage point This is analogous to camera look-at functions and could be used for example to cause model of an eyeball to track particular target The first parameter is the position of the model Typically the second parameter will be the position of the target and the third parameter will up Vector3D",
        "hierarchy": "RSAGL Math Orthogonal",
        "module": "RSAGL.Math.Orthogonal",
        "name": "modelLookAt",
        "normalized": "Point D-\u003eFUR(Either Point D Vector D)-\u003eFUR(Either Point D Vector D)-\u003ea-\u003ea",
        "package": "rsagl-math",
        "partial": "Look At",
        "signature": "Point D-\u003eFUR(Either Point D Vector D)-\u003eFUR(Either Point D Vector D)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Orthogonal.html#v:orthogonalFrame",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two axial references to describe a rigid affine transformation.\n Accepts any combination of non-coaxial references.\n In the affine transformation, the old axes will be mapped onto the specified\n freeform axes.\n\u003c/p\u003e\u003cp\u003eThe first parameter is absolute, meaning that the source axis will always map\n perfectly onto the destination axis.  The second parameter will be obeyed\n on a \u003ca\u003ebest effort\u003c/a\u003e basis.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Orthogonal",
        "fct-package": "rsagl-math",
        "fct-signature": "FUR Vector3D -\u003e FUR Vector3D -\u003e a -\u003e a",
        "fct-source": "src/RSAGL-Math-Orthogonal.html#orthogonalFrame",
        "fct-type": "function",
        "title": "orthogonalFrame"
      },
      "index": {
        "description": "Combine two axial references to describe rigid affine transformation Accepts any combination of non-coaxial references In the affine transformation the old axes will be mapped onto the specified freeform axes The first parameter is absolute meaning that the source axis will always map perfectly onto the destination axis The second parameter will be obeyed on best effort basis",
        "hierarchy": "RSAGL Math Orthogonal",
        "module": "RSAGL.Math.Orthogonal",
        "name": "orthogonalFrame",
        "normalized": "FUR Vector D-\u003eFUR Vector D-\u003ea-\u003ea",
        "package": "rsagl-math",
        "partial": "Frame",
        "signature": "FUR Vector D-\u003eFUR Vector D-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Orthogonal.html#v:right",
      "description": {
        "fct-descr": "\u003cp\u003eA reference to the +X axis.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Orthogonal",
        "fct-package": "rsagl-math",
        "fct-signature": "a -\u003e FUR a",
        "fct-source": "src/RSAGL-Math-Orthogonal.html#right",
        "fct-type": "function",
        "title": "right"
      },
      "index": {
        "description": "reference to the axis",
        "hierarchy": "RSAGL Math Orthogonal",
        "module": "RSAGL.Math.Orthogonal",
        "name": "right",
        "normalized": "a-\u003eFUR a",
        "package": "rsagl-math",
        "partial": "",
        "signature": "a-\u003eFUR a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Orthogonal.html#v:up",
      "description": {
        "fct-descr": "\u003cp\u003eA reference to the +Y axis.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Orthogonal",
        "fct-package": "rsagl-math",
        "fct-signature": "a -\u003e FUR a",
        "fct-source": "src/RSAGL-Math-Orthogonal.html#up",
        "fct-type": "function",
        "title": "up"
      },
      "index": {
        "description": "reference to the axis",
        "hierarchy": "RSAGL Math Orthogonal",
        "module": "RSAGL.Math.Orthogonal",
        "name": "up",
        "normalized": "a-\u003eFUR a",
        "package": "rsagl-math",
        "partial": "",
        "signature": "a-\u003eFUR a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Ray.html#",
      "description": {
        "fct-module": "RSAGL.Math.Ray",
        "fct-package": "rsagl-math",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Math-Ray.html",
        "fct-type": "module",
        "title": "Ray"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Ray",
        "module": "RSAGL.Math.Ray",
        "name": "Ray",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Ray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Ray.html#t:Ray3D",
      "description": {
        "fct-descr": "\u003cp\u003eRays with endpoints and vectors.\n\u003c/p\u003e\u003cp\u003eAlthough a ray is isomorphic to a \u003ccode\u003e\u003ca\u003eSurfaceVertex3D\u003c/a\u003e\u003c/code\u003e, it does not have the\n same behavior.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Ray",
        "fct-package": "rsagl-math",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Math-Ray.html#Ray3D",
        "fct-type": "data",
        "title": "Ray3D"
      },
      "index": {
        "description": "Rays with endpoints and vectors Although ray is isomorphic to SurfaceVertex3D it does not have the same behavior",
        "hierarchy": "RSAGL Math Ray",
        "module": "RSAGL.Math.Ray",
        "name": "Ray3D",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Ray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Ray.html#v:Ray3D",
      "description": {
        "fct-module": "RSAGL.Math.Ray",
        "fct-package": "rsagl-math",
        "fct-signature": "Ray3D",
        "fct-source": "src/RSAGL-Math-Ray.html#Ray3D",
        "fct-type": "function",
        "title": "Ray3D"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Ray",
        "module": "RSAGL.Math.Ray",
        "name": "Ray3D",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Ray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Ray.html#v:angleFrom",
      "description": {
        "fct-descr": "\u003cp\u003eThe angle between vector of the ray and the vector from the\n endpoint of the ray to the specified point.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Ray",
        "fct-package": "rsagl-math",
        "fct-signature": "Ray3D -\u003e Point3D -\u003e Angle",
        "fct-source": "src/RSAGL-Math-Ray.html#angleFrom",
        "fct-type": "function",
        "title": "angleFrom"
      },
      "index": {
        "description": "The angle between vector of the ray and the vector from the endpoint of the ray to the specified point",
        "hierarchy": "RSAGL Math Ray",
        "module": "RSAGL.Math.Ray",
        "name": "angleFrom",
        "normalized": "Ray D-\u003ePoint D-\u003eAngle",
        "package": "rsagl-math",
        "partial": "From",
        "signature": "Ray D-\u003ePoint D-\u003eAngle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Ray.html#v:distanceAlong",
      "description": {
        "fct-descr": "\u003cp\u003eThe inverse operation to \u003ccode\u003e\u003ca\u003eprojectRay\u003c/a\u003e\u003c/code\u003e.  This could also be\n understood as the height of the point above the plane defined\n by the ray.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Ray",
        "fct-package": "rsagl-math",
        "fct-signature": "Ray3D -\u003e Point3D -\u003e RSdouble",
        "fct-source": "src/RSAGL-Math-Ray.html#distanceAlong",
        "fct-type": "function",
        "title": "distanceAlong"
      },
      "index": {
        "description": "The inverse operation to projectRay This could also be understood as the height of the point above the plane defined by the ray",
        "hierarchy": "RSAGL Math Ray",
        "module": "RSAGL.Math.Ray",
        "name": "distanceAlong",
        "normalized": "Ray D-\u003ePoint D-\u003eRSdouble",
        "package": "rsagl-math",
        "partial": "Along",
        "signature": "Ray D-\u003ePoint D-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Ray.html#v:normalizeRay",
      "description": {
        "fct-descr": "\u003cp\u003eA ray normalize to a length of 1.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Ray",
        "fct-package": "rsagl-math",
        "fct-signature": "Ray3D -\u003e Ray3D",
        "fct-source": "src/RSAGL-Math-Ray.html#normalizeRay",
        "fct-type": "function",
        "title": "normalizeRay"
      },
      "index": {
        "description": "ray normalize to length of",
        "hierarchy": "RSAGL Math Ray",
        "module": "RSAGL.Math.Ray",
        "name": "normalizeRay",
        "normalized": "Ray D-\u003eRay D",
        "package": "rsagl-math",
        "partial": "Ray",
        "signature": "Ray D-\u003eRay D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Ray.html#v:projectRay",
      "description": {
        "fct-descr": "\u003cp\u003eThe parametric function of a ray.  The parameter is measured as a\n proportion of the length of the vector.  \u003ccode\u003eprojectRay 0\u003c/code\u003e is the\n endpoint of the ray.  \u003ccode\u003eprojectRay 1\u003c/code\u003e is the endpoint offset\n by the ray's vector.\n\u003c/p\u003e",
        "fct-module": "RSAGL.Math.Ray",
        "fct-package": "rsagl-math",
        "fct-signature": "RSdouble -\u003e Ray3D -\u003e Point3D",
        "fct-source": "src/RSAGL-Math-Ray.html#projectRay",
        "fct-type": "function",
        "title": "projectRay"
      },
      "index": {
        "description": "The parametric function of ray The parameter is measured as proportion of the length of the vector projectRay is the endpoint of the ray projectRay is the endpoint offset by the ray vector",
        "hierarchy": "RSAGL Math Ray",
        "module": "RSAGL.Math.Ray",
        "name": "projectRay",
        "normalized": "RSdouble-\u003eRay D-\u003ePoint D",
        "package": "rsagl-math",
        "partial": "Ray",
        "signature": "RSdouble-\u003eRay D-\u003ePoint D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Ray.html#v:ray_endpoint",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "RSAGL.Math.Ray",
        "fct-package": "rsagl-math",
        "fct-signature": "Point3D",
        "fct-source": "src/RSAGL-Math-Ray.html#Ray3D",
        "fct-type": "function",
        "title": "ray_endpoint"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Ray",
        "module": "RSAGL.Math.Ray",
        "name": "ray_endpoint",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Ray.html#v:ray_vector",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "RSAGL.Math.Ray",
        "fct-package": "rsagl-math",
        "fct-signature": "Vector3D",
        "fct-source": "src/RSAGL-Math-Ray.html#Ray3D",
        "fct-type": "function",
        "title": "ray_vector"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Ray",
        "module": "RSAGL.Math.Ray",
        "name": "ray_vector",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Types.html#",
      "description": {
        "fct-module": "RSAGL.Math.Types",
        "fct-package": "rsagl-math",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Math-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Types",
        "module": "RSAGL.Math.Types",
        "name": "Types",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Types.html#t:RSdouble",
      "description": {
        "fct-module": "RSAGL.Math.Types",
        "fct-package": "rsagl-math",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Math-Types.html#RSdouble",
        "fct-type": "data",
        "title": "RSdouble"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Types",
        "module": "RSAGL.Math.Types",
        "name": "RSdouble",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "RSdouble",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Types.html#t:RSfloat",
      "description": {
        "fct-module": "RSAGL.Math.Types",
        "fct-package": "rsagl-math",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Math-Types.html#RSfloat",
        "fct-type": "data",
        "title": "RSfloat"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Types",
        "module": "RSAGL.Math.Types",
        "name": "RSfloat",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "RSfloat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Types.html#v:f2f",
      "description": {
        "fct-module": "RSAGL.Math.Types",
        "fct-package": "rsagl-math",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/RSAGL-Math-Types.html#f2f",
        "fct-type": "function",
        "title": "f2f"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Types",
        "module": "RSAGL.Math.Types",
        "name": "f2f",
        "normalized": "a-\u003eb",
        "package": "rsagl-math",
        "partial": "",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Types.html#v:fromGLdouble",
      "description": {
        "fct-module": "RSAGL.Math.Types",
        "fct-package": "rsagl-math",
        "fct-signature": "GLdouble -\u003e RSdouble",
        "fct-source": "src/RSAGL-Math-Types.html#fromGLdouble",
        "fct-type": "function",
        "title": "fromGLdouble"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Types",
        "module": "RSAGL.Math.Types",
        "name": "fromGLdouble",
        "normalized": "GLdouble-\u003eRSdouble",
        "package": "rsagl-math",
        "partial": "GLdouble",
        "signature": "GLdouble-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Types.html#v:fromGLfloat",
      "description": {
        "fct-module": "RSAGL.Math.Types",
        "fct-package": "rsagl-math",
        "fct-signature": "GLfloat -\u003e RSfloat",
        "fct-source": "src/RSAGL-Math-Types.html#fromGLfloat",
        "fct-type": "function",
        "title": "fromGLfloat"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Types",
        "module": "RSAGL.Math.Types",
        "name": "fromGLfloat",
        "normalized": "GLfloat-\u003eRSfloat",
        "package": "rsagl-math",
        "partial": "GLfloat",
        "signature": "GLfloat-\u003eRSfloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Types.html#v:toGLdouble",
      "description": {
        "fct-module": "RSAGL.Math.Types",
        "fct-package": "rsagl-math",
        "fct-signature": "RSdouble -\u003e GLdouble",
        "fct-source": "src/RSAGL-Math-Types.html#toGLdouble",
        "fct-type": "function",
        "title": "toGLdouble"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Types",
        "module": "RSAGL.Math.Types",
        "name": "toGLdouble",
        "normalized": "RSdouble-\u003eGLdouble",
        "package": "rsagl-math",
        "partial": "GLdouble",
        "signature": "RSdouble-\u003eGLdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Types.html#v:toGLfloat",
      "description": {
        "fct-module": "RSAGL.Math.Types",
        "fct-package": "rsagl-math",
        "fct-signature": "RSfloat -\u003e GLfloat",
        "fct-source": "src/RSAGL-Math-Types.html#toGLfloat",
        "fct-type": "function",
        "title": "toGLfloat"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Types",
        "module": "RSAGL.Math.Types",
        "name": "toGLfloat",
        "normalized": "RSfloat-\u003eGLfloat",
        "package": "rsagl-math",
        "partial": "GLfloat",
        "signature": "RSfloat-\u003eGLfloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Math-Vector.html",
        "fct-type": "module",
        "title": "Vector"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "Vector",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#t:Point3D",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Math-Vector.html#Point3D",
        "fct-type": "data",
        "title": "Point3D"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "Point3D",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#t:SurfaceVertex3D",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Math-Vector.html#SurfaceVertex3D",
        "fct-type": "data",
        "title": "SurfaceVertex3D"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "SurfaceVertex3D",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Surface Vertex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#t:Vector3D",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "data",
        "fct-source": "src/RSAGL-Math-Vector.html#Vector3D",
        "fct-type": "data",
        "title": "Vector3D"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "Vector3D",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#t:XYZ",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "type",
        "fct-source": "src/RSAGL-Math-Vector.html#XYZ",
        "fct-type": "type",
        "title": "XYZ"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "XYZ",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "XYZ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#t:Xyz",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "class",
        "fct-source": "src/RSAGL-Math-Vector.html#Xyz",
        "fct-type": "class",
        "title": "Xyz"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "Xyz",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Xyz",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:Point3D",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "Point3D !RSdouble !RSdouble !RSdouble",
        "fct-source": "src/RSAGL-Math-Vector.html#Point3D",
        "fct-type": "function",
        "title": "Point3D"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "Point3D",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:SurfaceVertex3D",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "SurfaceVertex3D",
        "fct-source": "src/RSAGL-Math-Vector.html#SurfaceVertex3D",
        "fct-type": "function",
        "title": "SurfaceVertex3D"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "SurfaceVertex3D",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Surface Vertex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:Vector3D",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "Vector3D !RSdouble !RSdouble !RSdouble",
        "fct-source": "src/RSAGL-Math-Vector.html#Vector3D",
        "fct-type": "function",
        "title": "Vector3D"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "Vector3D",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:aLargeVector",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "RSdouble -\u003e Vector3D -\u003e Maybe Vector3D",
        "fct-source": "src/RSAGL-Math-Vector.html#aLargeVector",
        "fct-type": "function",
        "title": "aLargeVector"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "aLargeVector",
        "normalized": "RSdouble-\u003eVector D-\u003eMaybe Vector D",
        "package": "rsagl-math",
        "partial": "Large Vector",
        "signature": "RSdouble-\u003eVector D-\u003eMaybe Vector D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:aNonZeroVector",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "Vector3D -\u003e Maybe Vector3D",
        "fct-source": "src/RSAGL-Math-Vector.html#aNonZeroVector",
        "fct-type": "function",
        "title": "aNonZeroVector"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "aNonZeroVector",
        "normalized": "Vector D-\u003eMaybe Vector D",
        "package": "rsagl-math",
        "partial": "Non Zero Vector",
        "signature": "Vector D-\u003eMaybe Vector D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:angleBetween",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "Vector3D -\u003e Vector3D -\u003e Angle",
        "fct-source": "src/RSAGL-Math-Vector.html#angleBetween",
        "fct-type": "function",
        "title": "angleBetween"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "angleBetween",
        "normalized": "Vector D-\u003eVector D-\u003eAngle",
        "package": "rsagl-math",
        "partial": "Between",
        "signature": "Vector D-\u003eVector D-\u003eAngle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:crossProduct",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "Vector3D -\u003e Vector3D -\u003e Vector3D",
        "fct-source": "src/RSAGL-Math-Vector.html#crossProduct",
        "fct-type": "function",
        "title": "crossProduct"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "crossProduct",
        "normalized": "Vector D-\u003eVector D-\u003eVector D",
        "package": "rsagl-math",
        "partial": "Product",
        "signature": "Vector D-\u003eVector D-\u003eVector D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:distanceBetween",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "xyz -\u003e xyz -\u003e RSdouble",
        "fct-source": "src/RSAGL-Math-Vector.html#distanceBetween",
        "fct-type": "function",
        "title": "distanceBetween"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "distanceBetween",
        "normalized": "a-\u003ea-\u003eRSdouble",
        "package": "rsagl-math",
        "partial": "Between",
        "signature": "xyz-\u003exyz-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:distanceBetweenSquared",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "xyz -\u003e xyz -\u003e RSdouble",
        "fct-source": "src/RSAGL-Math-Vector.html#distanceBetweenSquared",
        "fct-type": "function",
        "title": "distanceBetweenSquared"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "distanceBetweenSquared",
        "normalized": "a-\u003ea-\u003eRSdouble",
        "package": "rsagl-math",
        "partial": "Between Squared",
        "signature": "xyz-\u003exyz-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:dotProduct",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "Vector3D -\u003e Vector3D -\u003e RSdouble",
        "fct-source": "src/RSAGL-Math-Vector.html#dotProduct",
        "fct-type": "function",
        "title": "dotProduct"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "dotProduct",
        "normalized": "Vector D-\u003eVector D-\u003eRSdouble",
        "package": "rsagl-math",
        "partial": "Product",
        "signature": "Vector D-\u003eVector D-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:fixOrtho",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "Vector3D -\u003e Vector3D -\u003e Vector3D",
        "fct-source": "src/RSAGL-Math-Vector.html#fixOrtho",
        "fct-type": "function",
        "title": "fixOrtho"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "fixOrtho",
        "normalized": "Vector D-\u003eVector D-\u003eVector D",
        "package": "rsagl-math",
        "partial": "Ortho",
        "signature": "Vector D-\u003eVector D-\u003eVector D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:fixOrtho2",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "Vector3D -\u003e Vector3D -\u003e (Vector3D, Vector3D)",
        "fct-source": "src/RSAGL-Math-Vector.html#fixOrtho2",
        "fct-type": "function",
        "title": "fixOrtho2"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "fixOrtho2",
        "normalized": "Vector D-\u003eVector D-\u003e(Vector D,Vector D)",
        "package": "rsagl-math",
        "partial": "Ortho",
        "signature": "Vector D-\u003eVector D-\u003e(Vector D,Vector D)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:fixOrtho2Left",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "Vector3D -\u003e Vector3D -\u003e (Vector3D, Vector3D)",
        "fct-source": "src/RSAGL-Math-Vector.html#fixOrtho2Left",
        "fct-type": "function",
        "title": "fixOrtho2Left"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "fixOrtho2Left",
        "normalized": "Vector D-\u003eVector D-\u003e(Vector D,Vector D)",
        "package": "rsagl-math",
        "partial": "Ortho Left",
        "signature": "Vector D-\u003eVector D-\u003e(Vector D,Vector D)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:fromXYZ",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "XYZ -\u003e a",
        "fct-source": "src/RSAGL-Math-Vector.html#fromXYZ",
        "fct-type": "method",
        "title": "fromXYZ"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "fromXYZ",
        "normalized": "XYZ-\u003ea",
        "package": "rsagl-math",
        "partial": "XYZ",
        "signature": "XYZ-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:newell",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "[Point3D] -\u003e Maybe Vector3D",
        "fct-source": "src/RSAGL-Math-Vector.html#newell",
        "fct-type": "function",
        "title": "newell"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "newell",
        "normalized": "[Point D]-\u003eMaybe Vector D",
        "package": "rsagl-math",
        "partial": "",
        "signature": "[Point D]-\u003eMaybe Vector D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:origin_point_3d",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "Point3D",
        "fct-source": "src/RSAGL-Math-Vector.html#origin_point_3d",
        "fct-type": "function",
        "title": "origin_point_3d"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "origin_point_3d",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:orthos",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "Vector3D -\u003e (Vector3D, Vector3D)",
        "fct-source": "src/RSAGL-Math-Vector.html#orthos",
        "fct-type": "function",
        "title": "orthos"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "orthos",
        "normalized": "Vector D-\u003e(Vector D,Vector D)",
        "package": "rsagl-math",
        "partial": "",
        "signature": "Vector D-\u003e(Vector D,Vector D)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:point2d",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "(RSdouble, RSdouble) -\u003e Point3D",
        "fct-source": "src/RSAGL-Math-Vector.html#point2d",
        "fct-type": "function",
        "title": "point2d"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "point2d",
        "normalized": "(RSdouble,RSdouble)-\u003ePoint D",
        "package": "rsagl-math",
        "partial": "",
        "signature": "(RSdouble,RSdouble)-\u003ePoint D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:point3d",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "(RSdouble, RSdouble, RSdouble) -\u003e Point3D",
        "fct-source": "src/RSAGL-Math-Vector.html#point3d",
        "fct-type": "function",
        "title": "point3d"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "point3d",
        "normalized": "(RSdouble,RSdouble,RSdouble)-\u003ePoint D",
        "package": "rsagl-math",
        "partial": "",
        "signature": "(RSdouble,RSdouble,RSdouble)-\u003ePoint D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:points2d",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "[(RSdouble, RSdouble)] -\u003e [Point3D]",
        "fct-source": "src/RSAGL-Math-Vector.html#points2d",
        "fct-type": "function",
        "title": "points2d"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "points2d",
        "normalized": "[(RSdouble,RSdouble)]-\u003e[Point D]",
        "package": "rsagl-math",
        "partial": "",
        "signature": "[(RSdouble,RSdouble)]-\u003e[Point D]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:points3d",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "[(RSdouble, RSdouble, RSdouble)] -\u003e [Point3D]",
        "fct-source": "src/RSAGL-Math-Vector.html#points3d",
        "fct-type": "function",
        "title": "points3d"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "points3d",
        "normalized": "[(RSdouble,RSdouble,RSdouble)]-\u003e[Point D]",
        "package": "rsagl-math",
        "partial": "",
        "signature": "[(RSdouble,RSdouble,RSdouble)]-\u003e[Point D]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:randomXYZ",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "(RSdouble, RSdouble) -\u003e g -\u003e (p, g)",
        "fct-source": "src/RSAGL-Math-Vector.html#randomXYZ",
        "fct-type": "function",
        "title": "randomXYZ"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "randomXYZ",
        "normalized": "(RSdouble,RSdouble)-\u003ea-\u003e(b,a)",
        "package": "rsagl-math",
        "partial": "XYZ",
        "signature": "(RSdouble,RSdouble)-\u003eg-\u003e(p,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:sv3d_normal",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "Vector3D",
        "fct-source": "src/RSAGL-Math-Vector.html#SurfaceVertex3D",
        "fct-type": "function",
        "title": "sv3d_normal"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "sv3d_normal",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:sv3d_position",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "Point3D",
        "fct-source": "src/RSAGL-Math-Vector.html#SurfaceVertex3D",
        "fct-type": "function",
        "title": "sv3d_position"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "sv3d_position",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:toXYZ",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "a -\u003e XYZ",
        "fct-source": "src/RSAGL-Math-Vector.html#toXYZ",
        "fct-type": "method",
        "title": "toXYZ"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "toXYZ",
        "normalized": "a-\u003eXYZ",
        "package": "rsagl-math",
        "partial": "XYZ",
        "signature": "a-\u003eXYZ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:vector3d",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "(RSdouble, RSdouble, RSdouble) -\u003e Vector3D",
        "fct-source": "src/RSAGL-Math-Vector.html#vector3d",
        "fct-type": "function",
        "title": "vector3d"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "vector3d",
        "normalized": "(RSdouble,RSdouble,RSdouble)-\u003eVector D",
        "package": "rsagl-math",
        "partial": "",
        "signature": "(RSdouble,RSdouble,RSdouble)-\u003eVector D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:vectorAdd",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "Vector3D -\u003e Vector3D -\u003e Vector3D",
        "fct-source": "src/RSAGL-Math-Vector.html#vectorAdd",
        "fct-type": "function",
        "title": "vectorAdd"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "vectorAdd",
        "normalized": "Vector D-\u003eVector D-\u003eVector D",
        "package": "rsagl-math",
        "partial": "Add",
        "signature": "Vector D-\u003eVector D-\u003eVector D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:vectorAverage",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "[Vector3D] -\u003e Vector3D",
        "fct-source": "src/RSAGL-Math-Vector.html#vectorAverage",
        "fct-type": "function",
        "title": "vectorAverage"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "vectorAverage",
        "normalized": "[Vector D]-\u003eVector D",
        "package": "rsagl-math",
        "partial": "Average",
        "signature": "[Vector D]-\u003eVector D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:vectorLength",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "Vector3D -\u003e RSdouble",
        "fct-source": "src/RSAGL-Math-Vector.html#vectorLength",
        "fct-type": "function",
        "title": "vectorLength"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "vectorLength",
        "normalized": "Vector D-\u003eRSdouble",
        "package": "rsagl-math",
        "partial": "Length",
        "signature": "Vector D-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:vectorLengthSquared",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "Vector3D -\u003e RSdouble",
        "fct-source": "src/RSAGL-Math-Vector.html#vectorLengthSquared",
        "fct-type": "function",
        "title": "vectorLengthSquared"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "vectorLengthSquared",
        "normalized": "Vector D-\u003eRSdouble",
        "package": "rsagl-math",
        "partial": "Length Squared",
        "signature": "Vector D-\u003eRSdouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:vectorNormalize",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "Vector3D -\u003e Vector3D",
        "fct-source": "src/RSAGL-Math-Vector.html#vectorNormalize",
        "fct-type": "function",
        "title": "vectorNormalize"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "vectorNormalize",
        "normalized": "Vector D-\u003eVector D",
        "package": "rsagl-math",
        "partial": "Normalize",
        "signature": "Vector D-\u003eVector D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:vectorScale",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "RSdouble -\u003e Vector3D -\u003e Vector3D",
        "fct-source": "src/RSAGL-Math-Vector.html#vectorScale",
        "fct-type": "function",
        "title": "vectorScale"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "vectorScale",
        "normalized": "RSdouble-\u003eVector D-\u003eVector D",
        "package": "rsagl-math",
        "partial": "Scale",
        "signature": "RSdouble-\u003eVector D-\u003eVector D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:vectorScaleTo",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "RSdouble -\u003e Vector3D -\u003e Vector3D",
        "fct-source": "src/RSAGL-Math-Vector.html#vectorScaleTo",
        "fct-type": "function",
        "title": "vectorScaleTo"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "vectorScaleTo",
        "normalized": "RSdouble-\u003eVector D-\u003eVector D",
        "package": "rsagl-math",
        "partial": "Scale To",
        "signature": "RSdouble-\u003eVector D-\u003eVector D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:vectorString",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/RSAGL-Math-Vector.html#vectorString",
        "fct-type": "function",
        "title": "vectorString"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "vectorString",
        "normalized": "a-\u003eString",
        "package": "rsagl-math",
        "partial": "String",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:vectorSum",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "[Vector3D] -\u003e Vector3D",
        "fct-source": "src/RSAGL-Math-Vector.html#vectorSum",
        "fct-type": "function",
        "title": "vectorSum"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "vectorSum",
        "normalized": "[Vector D]-\u003eVector D",
        "package": "rsagl-math",
        "partial": "Sum",
        "signature": "[Vector D]-\u003eVector D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:vectorToFrom",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "xyz -\u003e xyz -\u003e Vector3D",
        "fct-source": "src/RSAGL-Math-Vector.html#vectorToFrom",
        "fct-type": "function",
        "title": "vectorToFrom"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "vectorToFrom",
        "normalized": "a-\u003ea-\u003eVector D",
        "package": "rsagl-math",
        "partial": "To From",
        "signature": "xyz-\u003exyz-\u003eVector D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math-Vector.html#v:zero_vector",
      "description": {
        "fct-module": "RSAGL.Math.Vector",
        "fct-package": "rsagl-math",
        "fct-signature": "Vector3D",
        "fct-source": "src/RSAGL-Math-Vector.html#zero_vector",
        "fct-type": "function",
        "title": "zero_vector"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math Vector",
        "module": "RSAGL.Math.Vector",
        "name": "zero_vector",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rsagl-math/docs/RSAGL-Math.html#",
      "description": {
        "fct-module": "RSAGL.Math",
        "fct-package": "rsagl-math",
        "fct-signature": "module",
        "fct-source": "src/RSAGL-Math.html",
        "fct-type": "module",
        "title": "Math"
      },
      "index": {
        "description": "",
        "hierarchy": "RSAGL Math",
        "module": "RSAGL.Math",
        "name": "Math",
        "normalized": "",
        "package": "rsagl-math",
        "partial": "Math",
        "signature": ""
      }
    }
  }
]