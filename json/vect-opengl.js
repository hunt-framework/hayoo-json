[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOpenGL support, including \u003ccode\u003e\u003ca\u003eVertex\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTexCoord\u003c/a\u003e\u003c/code\u003e, etc instances for \u003ccode\u003e\u003ca\u003eVec2\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eVec3\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eVec4\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Vect.Double.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "module",
        "fct-source": "src/Data-Vect-Double-OpenGL.html",
        "fct-type": "module",
        "title": "OpenGL"
      },
      "index": {
        "description": "OpenGL support including Vertex TexCoord etc instances for Vec2 Vec3 and Vec4",
        "hierarchy": "Data Vect Double OpenGL",
        "module": "Data.Vect.Double.OpenGL",
        "name": "OpenGL",
        "normalized": "",
        "package": "vect-opengl",
        "partial": "Open GL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#t:FromOpenGLMatrix",
      "description": {
        "fct-module": "Data.Vect.Double.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "class",
        "fct-source": "src/Data-Vect-Double-OpenGL.html#FromOpenGLMatrix",
        "fct-type": "class",
        "title": "FromOpenGLMatrix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Double OpenGL",
        "module": "Data.Vect.Double.OpenGL",
        "name": "FromOpenGLMatrix",
        "normalized": "",
        "package": "vect-opengl",
        "partial": "From Open GLMatrix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#t:GLflt",
      "description": {
        "fct-module": "Data.Vect.Double.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "type",
        "fct-source": "src/Data-Vect-Double-OpenGL.html#GLflt",
        "fct-type": "type",
        "title": "GLflt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Double OpenGL",
        "module": "Data.Vect.Double.OpenGL",
        "name": "GLflt",
        "normalized": "",
        "package": "vect-opengl",
        "partial": "GLflt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#t:ToOpenGLMatrix",
      "description": {
        "fct-descr": "\u003cp\u003eThere should be a big warning here about the different conventions, \n hidden transpositions, and all the confusion this will inevitably cause...\n\u003c/p\u003e\u003cp\u003eAs it stands, \n\u003c/p\u003e\u003cpre\u003e glRotate t1 axis1 \u003e\u003e glRotate t2 axis2 \u003e\u003e glRotate t3 axis3\n\u003c/pre\u003e\u003cp\u003ehas the same result as\n\u003c/p\u003e\u003cpre\u003e multMatrix (rotMatrixProj4 t3 axis3 .*. rotMatrixProj4 t2 axis2 .*. rotMatrixProj4 t1 axis1)\n\u003c/pre\u003e\u003cp\u003ebecause at the interface of OpenGL and this library there is a transposition\n to compensate for the different conventions. (This transposition is implicit\n in the code, because the way the matrices are stored in the memory is also\n different: OpenGL stores them column-major, and we store them row-major).\n\u003c/p\u003e",
        "fct-module": "Data.Vect.Double.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "class",
        "fct-source": "src/Data-Vect-Double-OpenGL.html#ToOpenGLMatrix",
        "fct-type": "class",
        "title": "ToOpenGLMatrix"
      },
      "index": {
        "description": "There should be big warning here about the different conventions hidden transpositions and all the confusion this will inevitably cause As it stands glRotate t1 axis1 glRotate t2 axis2 glRotate t3 axis3 has the same result as multMatrix rotMatrixProj4 t3 axis3 rotMatrixProj4 t2 axis2 rotMatrixProj4 t1 axis1 because at the interface of OpenGL and this library there is transposition to compensate for the different conventions This transposition is implicit in the code because the way the matrices are stored in the memory is also different OpenGL stores them column-major and we store them row-major",
        "hierarchy": "Data Vect Double OpenGL",
        "module": "Data.Vect.Double.OpenGL",
        "name": "ToOpenGLMatrix",
        "normalized": "",
        "package": "vect-opengl",
        "partial": "To Open GLMatrix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#t:VertexAttrib-39-",
      "description": {
        "fct-module": "Data.Vect.Double.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "class",
        "fct-source": "src/Data-Vect-Double-OpenGL.html#VertexAttrib%27",
        "fct-type": "class",
        "title": "VertexAttrib'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Double OpenGL",
        "module": "Data.Vect.Double.OpenGL",
        "name": "VertexAttrib'",
        "normalized": "",
        "package": "vect-opengl",
        "partial": "Vertex Attrib'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:currentMatrix",
      "description": {
        "fct-module": "Data.Vect.Double.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "StateVar m",
        "fct-source": "src/Data-Vect-Double-OpenGL.html#currentMatrix",
        "fct-type": "function",
        "title": "currentMatrix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Double OpenGL",
        "module": "Data.Vect.Double.OpenGL",
        "name": "currentMatrix",
        "normalized": "",
        "package": "vect-opengl",
        "partial": "Matrix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:degreesToRadian",
      "description": {
        "fct-module": "Data.Vect.Double.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-Vect-Double-OpenGL.html#degreesToRadian",
        "fct-type": "function",
        "title": "degreesToRadian"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Double OpenGL",
        "module": "Data.Vect.Double.OpenGL",
        "name": "degreesToRadian",
        "normalized": "a-\u003ea",
        "package": "vect-opengl",
        "partial": "To Radian",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:frustumMatrix",
      "description": {
        "fct-descr": "\u003cp\u003e\"Perspective projecton\" matrix, a la OpenGL \n (the corresponding functionality is removed in OpenGL 3.1).\n\u003c/p\u003e",
        "fct-module": "Data.Vect.Double.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "(Double, Double)-\u003e (Double, Double)-\u003e (Double, Double)-\u003e Mat4",
        "fct-type": "function",
        "title": "frustumMatrix"
      },
      "index": {
        "description": "Perspective projecton matrix la OpenGL the corresponding functionality is removed in OpenGL",
        "hierarchy": "Data Vect Double OpenGL",
        "module": "Data.Vect.Double.OpenGL",
        "name": "frustumMatrix",
        "normalized": "(Double,Double)-\u003e(Double,Double)-\u003e(Double,Double)-\u003eMat",
        "package": "vect-opengl",
        "partial": "Matrix",
        "signature": "(Double,Double)-\u003e(Double,Double)-\u003e(Double,Double)-\u003eMat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:frustumMatrix2",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as \u003ca\u003efrustumMatrix\u003c/a\u003e, but with a different parametrization.\n\u003c/p\u003e",
        "fct-module": "Data.Vect.Double.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "Vec3-\u003e Vec3-\u003e Mat4",
        "fct-type": "function",
        "title": "frustumMatrix2"
      },
      "index": {
        "description": "The same as frustumMatrix but with different parametrization",
        "hierarchy": "Data Vect Double OpenGL",
        "module": "Data.Vect.Double.OpenGL",
        "name": "frustumMatrix2",
        "normalized": "Vec-\u003eVec-\u003eMat",
        "package": "vect-opengl",
        "partial": "Matrix",
        "signature": "Vec-\u003eVec-\u003eMat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:getMatrix",
      "description": {
        "fct-module": "Data.Vect.Double.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "Maybe MatrixMode -\u003e IO m",
        "fct-source": "src/Data-Vect-Double-OpenGL.html#getMatrix",
        "fct-type": "function",
        "title": "getMatrix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Double OpenGL",
        "module": "Data.Vect.Double.OpenGL",
        "name": "getMatrix",
        "normalized": "Maybe MatrixMode-\u003eIO a",
        "package": "vect-opengl",
        "partial": "Matrix",
        "signature": "Maybe MatrixMode-\u003eIO m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:glRotate",
      "description": {
        "fct-descr": "\u003cp\u003eThe angle is in radians. (WARNING: OpenGL uses degrees!)\n\u003c/p\u003e",
        "fct-module": "Data.Vect.Double.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "Double -\u003e Vec3 -\u003e IO ()",
        "fct-source": "src/Data-Vect-Double-OpenGL.html#glRotate",
        "fct-type": "function",
        "title": "glRotate"
      },
      "index": {
        "description": "The angle is in radians WARNING OpenGL uses degrees",
        "hierarchy": "Data Vect Double OpenGL",
        "module": "Data.Vect.Double.OpenGL",
        "name": "glRotate",
        "normalized": "Double-\u003eVec-\u003eIO()",
        "package": "vect-opengl",
        "partial": "Rotate",
        "signature": "Double-\u003eVec-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:glScale",
      "description": {
        "fct-module": "Data.Vect.Double.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "Double -\u003e IO ()",
        "fct-source": "src/Data-Vect-Double-OpenGL.html#glScale",
        "fct-type": "function",
        "title": "glScale"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Double OpenGL",
        "module": "Data.Vect.Double.OpenGL",
        "name": "glScale",
        "normalized": "Double-\u003eIO()",
        "package": "vect-opengl",
        "partial": "Scale",
        "signature": "Double-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:glScale3",
      "description": {
        "fct-module": "Data.Vect.Double.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "Vec3 -\u003e IO ()",
        "fct-source": "src/Data-Vect-Double-OpenGL.html#glScale3",
        "fct-type": "function",
        "title": "glScale3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Double OpenGL",
        "module": "Data.Vect.Double.OpenGL",
        "name": "glScale3",
        "normalized": "Vec-\u003eIO()",
        "package": "vect-opengl",
        "partial": "Scale",
        "signature": "Vec-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:glTranslate",
      "description": {
        "fct-module": "Data.Vect.Double.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "Vec3 -\u003e IO ()",
        "fct-source": "src/Data-Vect-Double-OpenGL.html#glTranslate",
        "fct-type": "function",
        "title": "glTranslate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Double OpenGL",
        "module": "Data.Vect.Double.OpenGL",
        "name": "glTranslate",
        "normalized": "Vec-\u003eIO()",
        "package": "vect-opengl",
        "partial": "Translate",
        "signature": "Vec-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:glflt",
      "description": {
        "fct-module": "Data.Vect.Double.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "Double -\u003e GLflt",
        "fct-source": "src/Data-Vect-Double-OpenGL.html#glflt",
        "fct-type": "function",
        "title": "glflt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Double OpenGL",
        "module": "Data.Vect.Double.OpenGL",
        "name": "glflt",
        "normalized": "Double-\u003eGLflt",
        "package": "vect-opengl",
        "partial": "",
        "signature": "Double-\u003eGLflt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:inverseFrustumMatrix",
      "description": {
        "fct-descr": "\u003cp\u003eInverse of \u003ca\u003efrustumMatrix\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Vect.Double.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "(Double, Double)-\u003e (Double, Double)-\u003e (Double, Double)-\u003e Mat4",
        "fct-type": "function",
        "title": "inverseFrustumMatrix"
      },
      "index": {
        "description": "Inverse of frustumMatrix",
        "hierarchy": "Data Vect Double OpenGL",
        "module": "Data.Vect.Double.OpenGL",
        "name": "inverseFrustumMatrix",
        "normalized": "(Double,Double)-\u003e(Double,Double)-\u003e(Double,Double)-\u003eMat",
        "package": "vect-opengl",
        "partial": "Frustum Matrix",
        "signature": "(Double,Double)-\u003e(Double,Double)-\u003e(Double,Double)-\u003eMat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:makeGLMatrix",
      "description": {
        "fct-module": "Data.Vect.Double.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "m -\u003e IO (GLmatrix GLflt)",
        "fct-source": "src/Data-Vect-Double-OpenGL.html#makeGLMatrix",
        "fct-type": "method",
        "title": "makeGLMatrix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Double OpenGL",
        "module": "Data.Vect.Double.OpenGL",
        "name": "makeGLMatrix",
        "normalized": "a-\u003eIO(GLmatrix GLflt)",
        "package": "vect-opengl",
        "partial": "GLMatrix",
        "signature": "m-\u003eIO(GLmatrix GLflt)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:matrix",
      "description": {
        "fct-module": "Data.Vect.Double.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "Maybe MatrixMode -\u003e StateVar m",
        "fct-source": "src/Data-Vect-Double-OpenGL.html#matrix",
        "fct-type": "function",
        "title": "matrix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Double OpenGL",
        "module": "Data.Vect.Double.OpenGL",
        "name": "matrix",
        "normalized": "Maybe MatrixMode-\u003eStateVar a",
        "package": "vect-opengl",
        "partial": "",
        "signature": "Maybe MatrixMode-\u003eStateVar m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:multMatrix",
      "description": {
        "fct-module": "Data.Vect.Double.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "m -\u003e IO ()",
        "fct-source": "src/Data-Vect-Double-OpenGL.html#multMatrix",
        "fct-type": "function",
        "title": "multMatrix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Double OpenGL",
        "module": "Data.Vect.Double.OpenGL",
        "name": "multMatrix",
        "normalized": "a-\u003eIO()",
        "package": "vect-opengl",
        "partial": "Matrix",
        "signature": "m-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:orthoMatrix",
      "description": {
        "fct-descr": "\u003cp\u003e\"Orthogonal projecton\" matrix, a la OpenGL \n (the corresponding functionality is removed in OpenGL 3.1)\n\u003c/p\u003e",
        "fct-module": "Data.Vect.Double.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "(Double, Double)-\u003e (Double, Double)-\u003e (Double, Double)-\u003e Mat4",
        "fct-type": "function",
        "title": "orthoMatrix"
      },
      "index": {
        "description": "Orthogonal projecton matrix la OpenGL the corresponding functionality is removed in OpenGL",
        "hierarchy": "Data Vect Double OpenGL",
        "module": "Data.Vect.Double.OpenGL",
        "name": "orthoMatrix",
        "normalized": "(Double,Double)-\u003e(Double,Double)-\u003e(Double,Double)-\u003eMat",
        "package": "vect-opengl",
        "partial": "Matrix",
        "signature": "(Double,Double)-\u003e(Double,Double)-\u003e(Double,Double)-\u003eMat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:orthoMatrix2",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as \u003ca\u003eorthoMatrix\u003c/a\u003e, but with a different parametrization.\n\u003c/p\u003e",
        "fct-module": "Data.Vect.Double.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "Vec3-\u003e Vec3-\u003e Mat4",
        "fct-type": "function",
        "title": "orthoMatrix2"
      },
      "index": {
        "description": "The same as orthoMatrix but with different parametrization",
        "hierarchy": "Data Vect Double OpenGL",
        "module": "Data.Vect.Double.OpenGL",
        "name": "orthoMatrix2",
        "normalized": "Vec-\u003eVec-\u003eMat",
        "package": "vect-opengl",
        "partial": "Matrix",
        "signature": "Vec-\u003eVec-\u003eMat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:peekGLMatrix",
      "description": {
        "fct-module": "Data.Vect.Double.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "GLmatrix GLflt -\u003e IO m",
        "fct-source": "src/Data-Vect-Double-OpenGL.html#peekGLMatrix",
        "fct-type": "method",
        "title": "peekGLMatrix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Double OpenGL",
        "module": "Data.Vect.Double.OpenGL",
        "name": "peekGLMatrix",
        "normalized": "GLmatrix GLflt-\u003eIO a",
        "package": "vect-opengl",
        "partial": "GLMatrix",
        "signature": "GLmatrix GLflt-\u003eIO m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:radianToDegrees",
      "description": {
        "fct-module": "Data.Vect.Double.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-Vect-Double-OpenGL.html#radianToDegrees",
        "fct-type": "function",
        "title": "radianToDegrees"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Double OpenGL",
        "module": "Data.Vect.Double.OpenGL",
        "name": "radianToDegrees",
        "normalized": "a-\u003ea",
        "package": "vect-opengl",
        "partial": "To Degrees",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:setMatrix",
      "description": {
        "fct-module": "Data.Vect.Double.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "Maybe MatrixMode -\u003e m -\u003e IO ()",
        "fct-source": "src/Data-Vect-Double-OpenGL.html#setMatrix",
        "fct-type": "function",
        "title": "setMatrix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Double OpenGL",
        "module": "Data.Vect.Double.OpenGL",
        "name": "setMatrix",
        "normalized": "Maybe MatrixMode-\u003ea-\u003eIO()",
        "package": "vect-opengl",
        "partial": "Matrix",
        "signature": "Maybe MatrixMode-\u003em-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:unflt",
      "description": {
        "fct-module": "Data.Vect.Double.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "GLflt -\u003e Double",
        "fct-source": "src/Data-Vect-Double-OpenGL.html#unflt",
        "fct-type": "function",
        "title": "unflt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Double OpenGL",
        "module": "Data.Vect.Double.OpenGL",
        "name": "unflt",
        "normalized": "GLflt-\u003eDouble",
        "package": "vect-opengl",
        "partial": "",
        "signature": "GLflt-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:vertexAttrib",
      "description": {
        "fct-module": "Data.Vect.Double.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "AttribLocation -\u003e a -\u003e IO ()",
        "fct-source": "src/Data-Vect-Double-OpenGL.html#vertexAttrib",
        "fct-type": "method",
        "title": "vertexAttrib"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Double OpenGL",
        "module": "Data.Vect.Double.OpenGL",
        "name": "vertexAttrib",
        "normalized": "AttribLocation-\u003ea-\u003eIO()",
        "package": "vect-opengl",
        "partial": "Attrib",
        "signature": "AttribLocation-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOpenGL support, including \u003ccode\u003e\u003ca\u003eVertex\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTexCoord\u003c/a\u003e\u003c/code\u003e, etc instances for \u003ccode\u003e\u003ca\u003eVec2\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eVec3\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eVec4\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Vect.Float.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "module",
        "fct-source": "src/Data-Vect-Float-OpenGL.html",
        "fct-type": "module",
        "title": "OpenGL"
      },
      "index": {
        "description": "OpenGL support including Vertex TexCoord etc instances for Vec2 Vec3 and Vec4",
        "hierarchy": "Data Vect Float OpenGL",
        "module": "Data.Vect.Float.OpenGL",
        "name": "OpenGL",
        "normalized": "",
        "package": "vect-opengl",
        "partial": "Open GL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#t:FromOpenGLMatrix",
      "description": {
        "fct-module": "Data.Vect.Float.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "class",
        "fct-source": "src/Data-Vect-Float-OpenGL.html#FromOpenGLMatrix",
        "fct-type": "class",
        "title": "FromOpenGLMatrix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Float OpenGL",
        "module": "Data.Vect.Float.OpenGL",
        "name": "FromOpenGLMatrix",
        "normalized": "",
        "package": "vect-opengl",
        "partial": "From Open GLMatrix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#t:GLflt",
      "description": {
        "fct-module": "Data.Vect.Float.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "type",
        "fct-source": "src/Data-Vect-Float-OpenGL.html#GLflt",
        "fct-type": "type",
        "title": "GLflt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Float OpenGL",
        "module": "Data.Vect.Float.OpenGL",
        "name": "GLflt",
        "normalized": "",
        "package": "vect-opengl",
        "partial": "GLflt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#t:ToOpenGLMatrix",
      "description": {
        "fct-descr": "\u003cp\u003eThere should be a big warning here about the different conventions, \n hidden transpositions, and all the confusion this will inevitably cause...\n\u003c/p\u003e\u003cp\u003eAs it stands, \n\u003c/p\u003e\u003cpre\u003e glRotate t1 axis1 \u003e\u003e glRotate t2 axis2 \u003e\u003e glRotate t3 axis3\n\u003c/pre\u003e\u003cp\u003ehas the same result as\n\u003c/p\u003e\u003cpre\u003e multMatrix (rotMatrixProj4 t3 axis3 .*. rotMatrixProj4 t2 axis2 .*. rotMatrixProj4 t1 axis1)\n\u003c/pre\u003e\u003cp\u003ebecause at the interface of OpenGL and this library there is a transposition\n to compensate for the different conventions. (This transposition is implicit\n in the code, because the way the matrices are stored in the memory is also\n different: OpenGL stores them column-major, and we store them row-major).\n\u003c/p\u003e",
        "fct-module": "Data.Vect.Float.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "class",
        "fct-source": "src/Data-Vect-Float-OpenGL.html#ToOpenGLMatrix",
        "fct-type": "class",
        "title": "ToOpenGLMatrix"
      },
      "index": {
        "description": "There should be big warning here about the different conventions hidden transpositions and all the confusion this will inevitably cause As it stands glRotate t1 axis1 glRotate t2 axis2 glRotate t3 axis3 has the same result as multMatrix rotMatrixProj4 t3 axis3 rotMatrixProj4 t2 axis2 rotMatrixProj4 t1 axis1 because at the interface of OpenGL and this library there is transposition to compensate for the different conventions This transposition is implicit in the code because the way the matrices are stored in the memory is also different OpenGL stores them column-major and we store them row-major",
        "hierarchy": "Data Vect Float OpenGL",
        "module": "Data.Vect.Float.OpenGL",
        "name": "ToOpenGLMatrix",
        "normalized": "",
        "package": "vect-opengl",
        "partial": "To Open GLMatrix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#t:VertexAttrib-39-",
      "description": {
        "fct-module": "Data.Vect.Float.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "class",
        "fct-source": "src/Data-Vect-Float-OpenGL.html#VertexAttrib%27",
        "fct-type": "class",
        "title": "VertexAttrib'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Float OpenGL",
        "module": "Data.Vect.Float.OpenGL",
        "name": "VertexAttrib'",
        "normalized": "",
        "package": "vect-opengl",
        "partial": "Vertex Attrib'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:currentMatrix",
      "description": {
        "fct-module": "Data.Vect.Float.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "StateVar m",
        "fct-source": "src/Data-Vect-Float-OpenGL.html#currentMatrix",
        "fct-type": "function",
        "title": "currentMatrix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Float OpenGL",
        "module": "Data.Vect.Float.OpenGL",
        "name": "currentMatrix",
        "normalized": "",
        "package": "vect-opengl",
        "partial": "Matrix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:degreesToRadian",
      "description": {
        "fct-module": "Data.Vect.Float.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-Vect-Float-OpenGL.html#degreesToRadian",
        "fct-type": "function",
        "title": "degreesToRadian"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Float OpenGL",
        "module": "Data.Vect.Float.OpenGL",
        "name": "degreesToRadian",
        "normalized": "a-\u003ea",
        "package": "vect-opengl",
        "partial": "To Radian",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:frustumMatrix",
      "description": {
        "fct-descr": "\u003cp\u003e\"Perspective projecton\" matrix, a la OpenGL \n (the corresponding functionality is removed in OpenGL 3.1).\n\u003c/p\u003e",
        "fct-module": "Data.Vect.Float.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "(Float, Float)-\u003e (Float, Float)-\u003e (Float, Float)-\u003e Mat4",
        "fct-type": "function",
        "title": "frustumMatrix"
      },
      "index": {
        "description": "Perspective projecton matrix la OpenGL the corresponding functionality is removed in OpenGL",
        "hierarchy": "Data Vect Float OpenGL",
        "module": "Data.Vect.Float.OpenGL",
        "name": "frustumMatrix",
        "normalized": "(Float,Float)-\u003e(Float,Float)-\u003e(Float,Float)-\u003eMat",
        "package": "vect-opengl",
        "partial": "Matrix",
        "signature": "(Float,Float)-\u003e(Float,Float)-\u003e(Float,Float)-\u003eMat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:frustumMatrix2",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as \u003ca\u003efrustumMatrix\u003c/a\u003e, but with a different parametrization.\n\u003c/p\u003e",
        "fct-module": "Data.Vect.Float.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "Vec3-\u003e Vec3-\u003e Mat4",
        "fct-type": "function",
        "title": "frustumMatrix2"
      },
      "index": {
        "description": "The same as frustumMatrix but with different parametrization",
        "hierarchy": "Data Vect Float OpenGL",
        "module": "Data.Vect.Float.OpenGL",
        "name": "frustumMatrix2",
        "normalized": "Vec-\u003eVec-\u003eMat",
        "package": "vect-opengl",
        "partial": "Matrix",
        "signature": "Vec-\u003eVec-\u003eMat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:getMatrix",
      "description": {
        "fct-module": "Data.Vect.Float.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "Maybe MatrixMode -\u003e IO m",
        "fct-source": "src/Data-Vect-Float-OpenGL.html#getMatrix",
        "fct-type": "function",
        "title": "getMatrix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Float OpenGL",
        "module": "Data.Vect.Float.OpenGL",
        "name": "getMatrix",
        "normalized": "Maybe MatrixMode-\u003eIO a",
        "package": "vect-opengl",
        "partial": "Matrix",
        "signature": "Maybe MatrixMode-\u003eIO m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:glRotate",
      "description": {
        "fct-descr": "\u003cp\u003eThe angle is in radians. (WARNING: OpenGL uses degrees!)\n\u003c/p\u003e",
        "fct-module": "Data.Vect.Float.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "Float -\u003e Vec3 -\u003e IO ()",
        "fct-source": "src/Data-Vect-Float-OpenGL.html#glRotate",
        "fct-type": "function",
        "title": "glRotate"
      },
      "index": {
        "description": "The angle is in radians WARNING OpenGL uses degrees",
        "hierarchy": "Data Vect Float OpenGL",
        "module": "Data.Vect.Float.OpenGL",
        "name": "glRotate",
        "normalized": "Float-\u003eVec-\u003eIO()",
        "package": "vect-opengl",
        "partial": "Rotate",
        "signature": "Float-\u003eVec-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:glScale",
      "description": {
        "fct-module": "Data.Vect.Float.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "Float -\u003e IO ()",
        "fct-source": "src/Data-Vect-Float-OpenGL.html#glScale",
        "fct-type": "function",
        "title": "glScale"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Float OpenGL",
        "module": "Data.Vect.Float.OpenGL",
        "name": "glScale",
        "normalized": "Float-\u003eIO()",
        "package": "vect-opengl",
        "partial": "Scale",
        "signature": "Float-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:glScale3",
      "description": {
        "fct-module": "Data.Vect.Float.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "Vec3 -\u003e IO ()",
        "fct-source": "src/Data-Vect-Float-OpenGL.html#glScale3",
        "fct-type": "function",
        "title": "glScale3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Float OpenGL",
        "module": "Data.Vect.Float.OpenGL",
        "name": "glScale3",
        "normalized": "Vec-\u003eIO()",
        "package": "vect-opengl",
        "partial": "Scale",
        "signature": "Vec-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:glTranslate",
      "description": {
        "fct-module": "Data.Vect.Float.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "Vec3 -\u003e IO ()",
        "fct-source": "src/Data-Vect-Float-OpenGL.html#glTranslate",
        "fct-type": "function",
        "title": "glTranslate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Float OpenGL",
        "module": "Data.Vect.Float.OpenGL",
        "name": "glTranslate",
        "normalized": "Vec-\u003eIO()",
        "package": "vect-opengl",
        "partial": "Translate",
        "signature": "Vec-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:glflt",
      "description": {
        "fct-module": "Data.Vect.Float.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "Float -\u003e GLflt",
        "fct-source": "src/Data-Vect-Float-OpenGL.html#glflt",
        "fct-type": "function",
        "title": "glflt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Float OpenGL",
        "module": "Data.Vect.Float.OpenGL",
        "name": "glflt",
        "normalized": "Float-\u003eGLflt",
        "package": "vect-opengl",
        "partial": "",
        "signature": "Float-\u003eGLflt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:inverseFrustumMatrix",
      "description": {
        "fct-descr": "\u003cp\u003eInverse of \u003ca\u003efrustumMatrix\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Vect.Float.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "(Float, Float)-\u003e (Float, Float)-\u003e (Float, Float)-\u003e Mat4",
        "fct-type": "function",
        "title": "inverseFrustumMatrix"
      },
      "index": {
        "description": "Inverse of frustumMatrix",
        "hierarchy": "Data Vect Float OpenGL",
        "module": "Data.Vect.Float.OpenGL",
        "name": "inverseFrustumMatrix",
        "normalized": "(Float,Float)-\u003e(Float,Float)-\u003e(Float,Float)-\u003eMat",
        "package": "vect-opengl",
        "partial": "Frustum Matrix",
        "signature": "(Float,Float)-\u003e(Float,Float)-\u003e(Float,Float)-\u003eMat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:makeGLMatrix",
      "description": {
        "fct-module": "Data.Vect.Float.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "m -\u003e IO (GLmatrix GLflt)",
        "fct-source": "src/Data-Vect-Float-OpenGL.html#makeGLMatrix",
        "fct-type": "method",
        "title": "makeGLMatrix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Float OpenGL",
        "module": "Data.Vect.Float.OpenGL",
        "name": "makeGLMatrix",
        "normalized": "a-\u003eIO(GLmatrix GLflt)",
        "package": "vect-opengl",
        "partial": "GLMatrix",
        "signature": "m-\u003eIO(GLmatrix GLflt)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:matrix",
      "description": {
        "fct-module": "Data.Vect.Float.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "Maybe MatrixMode -\u003e StateVar m",
        "fct-source": "src/Data-Vect-Float-OpenGL.html#matrix",
        "fct-type": "function",
        "title": "matrix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Float OpenGL",
        "module": "Data.Vect.Float.OpenGL",
        "name": "matrix",
        "normalized": "Maybe MatrixMode-\u003eStateVar a",
        "package": "vect-opengl",
        "partial": "",
        "signature": "Maybe MatrixMode-\u003eStateVar m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:multMatrix",
      "description": {
        "fct-module": "Data.Vect.Float.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "m -\u003e IO ()",
        "fct-source": "src/Data-Vect-Float-OpenGL.html#multMatrix",
        "fct-type": "function",
        "title": "multMatrix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Float OpenGL",
        "module": "Data.Vect.Float.OpenGL",
        "name": "multMatrix",
        "normalized": "a-\u003eIO()",
        "package": "vect-opengl",
        "partial": "Matrix",
        "signature": "m-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:orthoMatrix",
      "description": {
        "fct-descr": "\u003cp\u003e\"Orthogonal projecton\" matrix, a la OpenGL \n (the corresponding functionality is removed in OpenGL 3.1)\n\u003c/p\u003e",
        "fct-module": "Data.Vect.Float.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "(Float, Float)-\u003e (Float, Float)-\u003e (Float, Float)-\u003e Mat4",
        "fct-type": "function",
        "title": "orthoMatrix"
      },
      "index": {
        "description": "Orthogonal projecton matrix la OpenGL the corresponding functionality is removed in OpenGL",
        "hierarchy": "Data Vect Float OpenGL",
        "module": "Data.Vect.Float.OpenGL",
        "name": "orthoMatrix",
        "normalized": "(Float,Float)-\u003e(Float,Float)-\u003e(Float,Float)-\u003eMat",
        "package": "vect-opengl",
        "partial": "Matrix",
        "signature": "(Float,Float)-\u003e(Float,Float)-\u003e(Float,Float)-\u003eMat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:orthoMatrix2",
      "description": {
        "fct-descr": "\u003cp\u003eThe same as \u003ca\u003eorthoMatrix\u003c/a\u003e, but with a different parametrization.\n\u003c/p\u003e",
        "fct-module": "Data.Vect.Float.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "Vec3-\u003e Vec3-\u003e Mat4",
        "fct-type": "function",
        "title": "orthoMatrix2"
      },
      "index": {
        "description": "The same as orthoMatrix but with different parametrization",
        "hierarchy": "Data Vect Float OpenGL",
        "module": "Data.Vect.Float.OpenGL",
        "name": "orthoMatrix2",
        "normalized": "Vec-\u003eVec-\u003eMat",
        "package": "vect-opengl",
        "partial": "Matrix",
        "signature": "Vec-\u003eVec-\u003eMat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:peekGLMatrix",
      "description": {
        "fct-module": "Data.Vect.Float.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "GLmatrix GLflt -\u003e IO m",
        "fct-source": "src/Data-Vect-Float-OpenGL.html#peekGLMatrix",
        "fct-type": "method",
        "title": "peekGLMatrix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Float OpenGL",
        "module": "Data.Vect.Float.OpenGL",
        "name": "peekGLMatrix",
        "normalized": "GLmatrix GLflt-\u003eIO a",
        "package": "vect-opengl",
        "partial": "GLMatrix",
        "signature": "GLmatrix GLflt-\u003eIO m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:radianToDegrees",
      "description": {
        "fct-module": "Data.Vect.Float.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Data-Vect-Float-OpenGL.html#radianToDegrees",
        "fct-type": "function",
        "title": "radianToDegrees"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Float OpenGL",
        "module": "Data.Vect.Float.OpenGL",
        "name": "radianToDegrees",
        "normalized": "a-\u003ea",
        "package": "vect-opengl",
        "partial": "To Degrees",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:setMatrix",
      "description": {
        "fct-module": "Data.Vect.Float.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "Maybe MatrixMode -\u003e m -\u003e IO ()",
        "fct-source": "src/Data-Vect-Float-OpenGL.html#setMatrix",
        "fct-type": "function",
        "title": "setMatrix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Float OpenGL",
        "module": "Data.Vect.Float.OpenGL",
        "name": "setMatrix",
        "normalized": "Maybe MatrixMode-\u003ea-\u003eIO()",
        "package": "vect-opengl",
        "partial": "Matrix",
        "signature": "Maybe MatrixMode-\u003em-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:unflt",
      "description": {
        "fct-module": "Data.Vect.Float.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "GLflt -\u003e Float",
        "fct-source": "src/Data-Vect-Float-OpenGL.html#unflt",
        "fct-type": "function",
        "title": "unflt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Float OpenGL",
        "module": "Data.Vect.Float.OpenGL",
        "name": "unflt",
        "normalized": "GLflt-\u003eFloat",
        "package": "vect-opengl",
        "partial": "",
        "signature": "GLflt-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:vertexAttrib",
      "description": {
        "fct-module": "Data.Vect.Float.OpenGL",
        "fct-package": "vect-opengl",
        "fct-signature": "AttribLocation -\u003e a -\u003e IO ()",
        "fct-source": "src/Data-Vect-Float-OpenGL.html#vertexAttrib",
        "fct-type": "method",
        "title": "vertexAttrib"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Vect Float OpenGL",
        "module": "Data.Vect.Float.OpenGL",
        "name": "vertexAttrib",
        "normalized": "AttribLocation-\u003ea-\u003eIO()",
        "package": "vect-opengl",
        "partial": "Attrib",
        "signature": "AttribLocation-\u003ea-\u003eIO()"
      }
    }
  }
]