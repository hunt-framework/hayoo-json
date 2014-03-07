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
        "word": "vect-opengl"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOpenGL support, including \u003ccode\u003e\u003ca\u003eVertex\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTexCoord\u003c/a\u003e\u003c/code\u003e, etc instances for \u003ccode\u003e\u003ca\u003eVec2\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eVec3\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eVec4\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vect.Double.OpenGL",
          "name": "OpenGL",
          "package": "vect-opengl",
          "source": "src/Data-Vect-Double-OpenGL.html",
          "type": "module"
        },
        "index": {
          "description": "OpenGL support including Vertex TexCoord etc instances for Vec2 Vec3 and Vec4",
          "hierarchy": "Data Vect Double OpenGL",
          "module": "Data.Vect.Double.OpenGL",
          "name": "OpenGL",
          "package": "vect-opengl",
          "partial": "Open GL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Double.OpenGL",
          "name": "FromOpenGLMatrix",
          "package": "vect-opengl",
          "source": "src/Data-Vect-Double-OpenGL.html#FromOpenGLMatrix",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Vect Double OpenGL",
          "module": "Data.Vect.Double.OpenGL",
          "name": "FromOpenGLMatrix",
          "package": "vect-opengl",
          "partial": "From Open GLMatrix",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#t:FromOpenGLMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Double.OpenGL",
          "name": "GLflt",
          "package": "vect-opengl",
          "source": "src/Data-Vect-Double-OpenGL.html#GLflt",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vect Double OpenGL",
          "module": "Data.Vect.Double.OpenGL",
          "name": "GLflt",
          "package": "vect-opengl",
          "partial": "GLflt",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#t:GLflt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere should be a big warning here about the different conventions, \n hidden transpositions, and all the confusion this will inevitably cause...\n\u003c/p\u003e\u003cp\u003eAs it stands, \n\u003c/p\u003e\u003cpre\u003e glRotate t1 axis1 \u003e\u003e glRotate t2 axis2 \u003e\u003e glRotate t3 axis3\n\u003c/pre\u003e\u003cp\u003ehas the same result as\n\u003c/p\u003e\u003cpre\u003e multMatrix (rotMatrixProj4 t3 axis3 .*. rotMatrixProj4 t2 axis2 .*. rotMatrixProj4 t1 axis1)\n\u003c/pre\u003e\u003cp\u003ebecause at the interface of OpenGL and this library there is a transposition\n to compensate for the different conventions. (This transposition is implicit\n in the code, because the way the matrices are stored in the memory is also\n different: OpenGL stores them column-major, and we store them row-major).\n\u003c/p\u003e",
          "module": "Data.Vect.Double.OpenGL",
          "name": "ToOpenGLMatrix",
          "package": "vect-opengl",
          "source": "src/Data-Vect-Double-OpenGL.html#ToOpenGLMatrix",
          "type": "class"
        },
        "index": {
          "description": "There should be big warning here about the different conventions hidden transpositions and all the confusion this will inevitably cause As it stands glRotate t1 axis1 glRotate t2 axis2 glRotate t3 axis3 has the same result as multMatrix rotMatrixProj4 t3 axis3 rotMatrixProj4 t2 axis2 rotMatrixProj4 t1 axis1 because at the interface of OpenGL and this library there is transposition to compensate for the different conventions This transposition is implicit in the code because the way the matrices are stored in the memory is also different OpenGL stores them column-major and we store them row-major",
          "hierarchy": "Data Vect Double OpenGL",
          "module": "Data.Vect.Double.OpenGL",
          "name": "ToOpenGLMatrix",
          "package": "vect-opengl",
          "partial": "To Open GLMatrix",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#t:ToOpenGLMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Double.OpenGL",
          "name": "VertexAttrib'",
          "package": "vect-opengl",
          "source": "src/Data-Vect-Double-OpenGL.html#VertexAttrib%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Vect Double OpenGL",
          "module": "Data.Vect.Double.OpenGL",
          "name": "VertexAttrib'",
          "package": "vect-opengl",
          "partial": "Vertex Attrib'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#t:VertexAttrib-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Double.OpenGL",
          "name": "currentMatrix",
          "package": "vect-opengl",
          "signature": "StateVar m",
          "source": "src/Data-Vect-Double-OpenGL.html#currentMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vect Double OpenGL",
          "module": "Data.Vect.Double.OpenGL",
          "name": "currentMatrix",
          "package": "vect-opengl",
          "partial": "Matrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:currentMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Double.OpenGL",
          "name": "degreesToRadian",
          "package": "vect-opengl",
          "signature": "a -\u003e a",
          "source": "src/Data-Vect-Double-OpenGL.html#degreesToRadian",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vect Double OpenGL",
          "module": "Data.Vect.Double.OpenGL",
          "name": "degreesToRadian",
          "normalized": "a-\u003ea",
          "package": "vect-opengl",
          "partial": "To Radian",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:degreesToRadian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Perspective projecton\" matrix, a la OpenGL \n (the corresponding functionality is removed in OpenGL 3.1).\n\u003c/p\u003e",
          "module": "Data.Vect.Double.OpenGL",
          "name": "frustumMatrix",
          "package": "vect-opengl",
          "signature": "(Double, Double)-\u003e (Double, Double)-\u003e (Double, Double)-\u003e Mat4",
          "type": "function"
        },
        "index": {
          "description": "Perspective projecton matrix la OpenGL the corresponding functionality is removed in OpenGL",
          "hierarchy": "Data Vect Double OpenGL",
          "module": "Data.Vect.Double.OpenGL",
          "name": "frustumMatrix",
          "normalized": "(Double,Double)-\u003e(Double,Double)-\u003e(Double,Double)-\u003eMat",
          "package": "vect-opengl",
          "partial": "Matrix",
          "signature": "(Double,Double)-\u003e(Double,Double)-\u003e(Double,Double)-\u003eMat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:frustumMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ca\u003efrustumMatrix\u003c/a\u003e, but with a different parametrization.\n\u003c/p\u003e",
          "module": "[\"Data.Vect.Double.OpenGL\",\"Data.Vect.Float.OpenGL\"]",
          "name": "frustumMatrix2",
          "package": "vect-opengl",
          "signature": "Vec3-\u003e Vec3-\u003e Mat4",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:frustumMatrix2\",\"http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:frustumMatrix2\"]"
        },
        "index": {
          "description": "The same as frustumMatrix but with different parametrization",
          "hierarchy": "Data Vect Double OpenGL",
          "module": "Data.Vect.Double.OpenGL",
          "name": "frustumMatrix2",
          "normalized": "Vec-\u003eVec-\u003eMat",
          "package": "vect-opengl",
          "partial": "Matrix",
          "signature": "Vec-\u003eVec-\u003eMat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:frustumMatrix2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Double.OpenGL",
          "name": "getMatrix",
          "package": "vect-opengl",
          "signature": "Maybe MatrixMode -\u003e IO m",
          "source": "src/Data-Vect-Double-OpenGL.html#getMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vect Double OpenGL",
          "module": "Data.Vect.Double.OpenGL",
          "name": "getMatrix",
          "normalized": "Maybe MatrixMode-\u003eIO a",
          "package": "vect-opengl",
          "partial": "Matrix",
          "signature": "Maybe MatrixMode-\u003eIO m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:getMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe angle is in radians. (WARNING: OpenGL uses degrees!)\n\u003c/p\u003e",
          "module": "Data.Vect.Double.OpenGL",
          "name": "glRotate",
          "package": "vect-opengl",
          "signature": "Double -\u003e Vec3 -\u003e IO ()",
          "source": "src/Data-Vect-Double-OpenGL.html#glRotate",
          "type": "function"
        },
        "index": {
          "description": "The angle is in radians WARNING OpenGL uses degrees",
          "hierarchy": "Data Vect Double OpenGL",
          "module": "Data.Vect.Double.OpenGL",
          "name": "glRotate",
          "normalized": "Double-\u003eVec-\u003eIO()",
          "package": "vect-opengl",
          "partial": "Rotate",
          "signature": "Double-\u003eVec-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:glRotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Double.OpenGL",
          "name": "glScale",
          "package": "vect-opengl",
          "signature": "Double -\u003e IO ()",
          "source": "src/Data-Vect-Double-OpenGL.html#glScale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vect Double OpenGL",
          "module": "Data.Vect.Double.OpenGL",
          "name": "glScale",
          "normalized": "Double-\u003eIO()",
          "package": "vect-opengl",
          "partial": "Scale",
          "signature": "Double-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:glScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Double.OpenGL",
          "name": "glScale3",
          "package": "vect-opengl",
          "signature": "Vec3 -\u003e IO ()",
          "source": "src/Data-Vect-Double-OpenGL.html#glScale3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vect Double OpenGL",
          "module": "Data.Vect.Double.OpenGL",
          "name": "glScale3",
          "normalized": "Vec-\u003eIO()",
          "package": "vect-opengl",
          "partial": "Scale",
          "signature": "Vec-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:glScale3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Double.OpenGL",
          "name": "glTranslate",
          "package": "vect-opengl",
          "signature": "Vec3 -\u003e IO ()",
          "source": "src/Data-Vect-Double-OpenGL.html#glTranslate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vect Double OpenGL",
          "module": "Data.Vect.Double.OpenGL",
          "name": "glTranslate",
          "normalized": "Vec-\u003eIO()",
          "package": "vect-opengl",
          "partial": "Translate",
          "signature": "Vec-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:glTranslate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Double.OpenGL",
          "name": "glflt",
          "package": "vect-opengl",
          "signature": "Double -\u003e GLflt",
          "source": "src/Data-Vect-Double-OpenGL.html#glflt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vect Double OpenGL",
          "module": "Data.Vect.Double.OpenGL",
          "name": "glflt",
          "normalized": "Double-\u003eGLflt",
          "package": "vect-opengl",
          "signature": "Double-\u003eGLflt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:glflt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse of \u003ca\u003efrustumMatrix\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.Vect.Double.OpenGL",
          "name": "inverseFrustumMatrix",
          "package": "vect-opengl",
          "signature": "(Double, Double)-\u003e (Double, Double)-\u003e (Double, Double)-\u003e Mat4",
          "type": "function"
        },
        "index": {
          "description": "Inverse of frustumMatrix",
          "hierarchy": "Data Vect Double OpenGL",
          "module": "Data.Vect.Double.OpenGL",
          "name": "inverseFrustumMatrix",
          "normalized": "(Double,Double)-\u003e(Double,Double)-\u003e(Double,Double)-\u003eMat",
          "package": "vect-opengl",
          "partial": "Frustum Matrix",
          "signature": "(Double,Double)-\u003e(Double,Double)-\u003e(Double,Double)-\u003eMat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:inverseFrustumMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Double.OpenGL",
          "name": "makeGLMatrix",
          "package": "vect-opengl",
          "signature": "m -\u003e IO (GLmatrix GLflt)",
          "source": "src/Data-Vect-Double-OpenGL.html#makeGLMatrix",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vect Double OpenGL",
          "module": "Data.Vect.Double.OpenGL",
          "name": "makeGLMatrix",
          "normalized": "a-\u003eIO(GLmatrix GLflt)",
          "package": "vect-opengl",
          "partial": "GLMatrix",
          "signature": "m-\u003eIO(GLmatrix GLflt)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:makeGLMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Double.OpenGL",
          "name": "matrix",
          "package": "vect-opengl",
          "signature": "Maybe MatrixMode -\u003e StateVar m",
          "source": "src/Data-Vect-Double-OpenGL.html#matrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vect Double OpenGL",
          "module": "Data.Vect.Double.OpenGL",
          "name": "matrix",
          "normalized": "Maybe MatrixMode-\u003eStateVar a",
          "package": "vect-opengl",
          "signature": "Maybe MatrixMode-\u003eStateVar m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Double.OpenGL",
          "name": "multMatrix",
          "package": "vect-opengl",
          "signature": "m -\u003e IO ()",
          "source": "src/Data-Vect-Double-OpenGL.html#multMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vect Double OpenGL",
          "module": "Data.Vect.Double.OpenGL",
          "name": "multMatrix",
          "normalized": "a-\u003eIO()",
          "package": "vect-opengl",
          "partial": "Matrix",
          "signature": "m-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:multMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Orthogonal projecton\" matrix, a la OpenGL \n (the corresponding functionality is removed in OpenGL 3.1)\n\u003c/p\u003e",
          "module": "Data.Vect.Double.OpenGL",
          "name": "orthoMatrix",
          "package": "vect-opengl",
          "signature": "(Double, Double)-\u003e (Double, Double)-\u003e (Double, Double)-\u003e Mat4",
          "type": "function"
        },
        "index": {
          "description": "Orthogonal projecton matrix la OpenGL the corresponding functionality is removed in OpenGL",
          "hierarchy": "Data Vect Double OpenGL",
          "module": "Data.Vect.Double.OpenGL",
          "name": "orthoMatrix",
          "normalized": "(Double,Double)-\u003e(Double,Double)-\u003e(Double,Double)-\u003eMat",
          "package": "vect-opengl",
          "partial": "Matrix",
          "signature": "(Double,Double)-\u003e(Double,Double)-\u003e(Double,Double)-\u003eMat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:orthoMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ca\u003eorthoMatrix\u003c/a\u003e, but with a different parametrization.\n\u003c/p\u003e",
          "module": "[\"Data.Vect.Double.OpenGL\",\"Data.Vect.Float.OpenGL\"]",
          "name": "orthoMatrix2",
          "package": "vect-opengl",
          "signature": "Vec3-\u003e Vec3-\u003e Mat4",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:orthoMatrix2\",\"http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:orthoMatrix2\"]"
        },
        "index": {
          "description": "The same as orthoMatrix but with different parametrization",
          "hierarchy": "Data Vect Double OpenGL",
          "module": "Data.Vect.Double.OpenGL",
          "name": "orthoMatrix2",
          "normalized": "Vec-\u003eVec-\u003eMat",
          "package": "vect-opengl",
          "partial": "Matrix",
          "signature": "Vec-\u003eVec-\u003eMat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:orthoMatrix2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Double.OpenGL",
          "name": "peekGLMatrix",
          "package": "vect-opengl",
          "signature": "GLmatrix GLflt -\u003e IO m",
          "source": "src/Data-Vect-Double-OpenGL.html#peekGLMatrix",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vect Double OpenGL",
          "module": "Data.Vect.Double.OpenGL",
          "name": "peekGLMatrix",
          "normalized": "GLmatrix GLflt-\u003eIO a",
          "package": "vect-opengl",
          "partial": "GLMatrix",
          "signature": "GLmatrix GLflt-\u003eIO m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:peekGLMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Double.OpenGL",
          "name": "radianToDegrees",
          "package": "vect-opengl",
          "signature": "a -\u003e a",
          "source": "src/Data-Vect-Double-OpenGL.html#radianToDegrees",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vect Double OpenGL",
          "module": "Data.Vect.Double.OpenGL",
          "name": "radianToDegrees",
          "normalized": "a-\u003ea",
          "package": "vect-opengl",
          "partial": "To Degrees",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:radianToDegrees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Double.OpenGL",
          "name": "setMatrix",
          "package": "vect-opengl",
          "signature": "Maybe MatrixMode -\u003e m -\u003e IO ()",
          "source": "src/Data-Vect-Double-OpenGL.html#setMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vect Double OpenGL",
          "module": "Data.Vect.Double.OpenGL",
          "name": "setMatrix",
          "normalized": "Maybe MatrixMode-\u003ea-\u003eIO()",
          "package": "vect-opengl",
          "partial": "Matrix",
          "signature": "Maybe MatrixMode-\u003em-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:setMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Double.OpenGL",
          "name": "unflt",
          "package": "vect-opengl",
          "signature": "GLflt -\u003e Double",
          "source": "src/Data-Vect-Double-OpenGL.html#unflt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vect Double OpenGL",
          "module": "Data.Vect.Double.OpenGL",
          "name": "unflt",
          "normalized": "GLflt-\u003eDouble",
          "package": "vect-opengl",
          "signature": "GLflt-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:unflt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Double.OpenGL",
          "name": "vertexAttrib",
          "package": "vect-opengl",
          "signature": "AttribLocation -\u003e a -\u003e IO ()",
          "source": "src/Data-Vect-Double-OpenGL.html#vertexAttrib",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vect Double OpenGL",
          "module": "Data.Vect.Double.OpenGL",
          "name": "vertexAttrib",
          "normalized": "AttribLocation-\u003ea-\u003eIO()",
          "package": "vect-opengl",
          "partial": "Attrib",
          "signature": "AttribLocation-\u003ea-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Double-OpenGL.html#v:vertexAttrib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOpenGL support, including \u003ccode\u003e\u003ca\u003eVertex\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTexCoord\u003c/a\u003e\u003c/code\u003e, etc instances for \u003ccode\u003e\u003ca\u003eVec2\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eVec3\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eVec4\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vect.Float.OpenGL",
          "name": "OpenGL",
          "package": "vect-opengl",
          "source": "src/Data-Vect-Float-OpenGL.html",
          "type": "module"
        },
        "index": {
          "description": "OpenGL support including Vertex TexCoord etc instances for Vec2 Vec3 and Vec4",
          "hierarchy": "Data Vect Float OpenGL",
          "module": "Data.Vect.Float.OpenGL",
          "name": "OpenGL",
          "package": "vect-opengl",
          "partial": "Open GL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Float.OpenGL",
          "name": "FromOpenGLMatrix",
          "package": "vect-opengl",
          "source": "src/Data-Vect-Float-OpenGL.html#FromOpenGLMatrix",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Vect Float OpenGL",
          "module": "Data.Vect.Float.OpenGL",
          "name": "FromOpenGLMatrix",
          "package": "vect-opengl",
          "partial": "From Open GLMatrix",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#t:FromOpenGLMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Float.OpenGL",
          "name": "GLflt",
          "package": "vect-opengl",
          "source": "src/Data-Vect-Float-OpenGL.html#GLflt",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Vect Float OpenGL",
          "module": "Data.Vect.Float.OpenGL",
          "name": "GLflt",
          "package": "vect-opengl",
          "partial": "GLflt",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#t:GLflt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere should be a big warning here about the different conventions, \n hidden transpositions, and all the confusion this will inevitably cause...\n\u003c/p\u003e\u003cp\u003eAs it stands, \n\u003c/p\u003e\u003cpre\u003e glRotate t1 axis1 \u003e\u003e glRotate t2 axis2 \u003e\u003e glRotate t3 axis3\n\u003c/pre\u003e\u003cp\u003ehas the same result as\n\u003c/p\u003e\u003cpre\u003e multMatrix (rotMatrixProj4 t3 axis3 .*. rotMatrixProj4 t2 axis2 .*. rotMatrixProj4 t1 axis1)\n\u003c/pre\u003e\u003cp\u003ebecause at the interface of OpenGL and this library there is a transposition\n to compensate for the different conventions. (This transposition is implicit\n in the code, because the way the matrices are stored in the memory is also\n different: OpenGL stores them column-major, and we store them row-major).\n\u003c/p\u003e",
          "module": "Data.Vect.Float.OpenGL",
          "name": "ToOpenGLMatrix",
          "package": "vect-opengl",
          "source": "src/Data-Vect-Float-OpenGL.html#ToOpenGLMatrix",
          "type": "class"
        },
        "index": {
          "description": "There should be big warning here about the different conventions hidden transpositions and all the confusion this will inevitably cause As it stands glRotate t1 axis1 glRotate t2 axis2 glRotate t3 axis3 has the same result as multMatrix rotMatrixProj4 t3 axis3 rotMatrixProj4 t2 axis2 rotMatrixProj4 t1 axis1 because at the interface of OpenGL and this library there is transposition to compensate for the different conventions This transposition is implicit in the code because the way the matrices are stored in the memory is also different OpenGL stores them column-major and we store them row-major",
          "hierarchy": "Data Vect Float OpenGL",
          "module": "Data.Vect.Float.OpenGL",
          "name": "ToOpenGLMatrix",
          "package": "vect-opengl",
          "partial": "To Open GLMatrix",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#t:ToOpenGLMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Float.OpenGL",
          "name": "VertexAttrib'",
          "package": "vect-opengl",
          "source": "src/Data-Vect-Float-OpenGL.html#VertexAttrib%27",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Vect Float OpenGL",
          "module": "Data.Vect.Float.OpenGL",
          "name": "VertexAttrib'",
          "package": "vect-opengl",
          "partial": "Vertex Attrib'",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#t:VertexAttrib-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Float.OpenGL",
          "name": "currentMatrix",
          "package": "vect-opengl",
          "signature": "StateVar m",
          "source": "src/Data-Vect-Float-OpenGL.html#currentMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vect Float OpenGL",
          "module": "Data.Vect.Float.OpenGL",
          "name": "currentMatrix",
          "package": "vect-opengl",
          "partial": "Matrix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:currentMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Float.OpenGL",
          "name": "degreesToRadian",
          "package": "vect-opengl",
          "signature": "a -\u003e a",
          "source": "src/Data-Vect-Float-OpenGL.html#degreesToRadian",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vect Float OpenGL",
          "module": "Data.Vect.Float.OpenGL",
          "name": "degreesToRadian",
          "normalized": "a-\u003ea",
          "package": "vect-opengl",
          "partial": "To Radian",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:degreesToRadian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Perspective projecton\" matrix, a la OpenGL \n (the corresponding functionality is removed in OpenGL 3.1).\n\u003c/p\u003e",
          "module": "Data.Vect.Float.OpenGL",
          "name": "frustumMatrix",
          "package": "vect-opengl",
          "signature": "(Float, Float)-\u003e (Float, Float)-\u003e (Float, Float)-\u003e Mat4",
          "type": "function"
        },
        "index": {
          "description": "Perspective projecton matrix la OpenGL the corresponding functionality is removed in OpenGL",
          "hierarchy": "Data Vect Float OpenGL",
          "module": "Data.Vect.Float.OpenGL",
          "name": "frustumMatrix",
          "normalized": "(Float,Float)-\u003e(Float,Float)-\u003e(Float,Float)-\u003eMat",
          "package": "vect-opengl",
          "partial": "Matrix",
          "signature": "(Float,Float)-\u003e(Float,Float)-\u003e(Float,Float)-\u003eMat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:frustumMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Float.OpenGL",
          "name": "getMatrix",
          "package": "vect-opengl",
          "signature": "Maybe MatrixMode -\u003e IO m",
          "source": "src/Data-Vect-Float-OpenGL.html#getMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vect Float OpenGL",
          "module": "Data.Vect.Float.OpenGL",
          "name": "getMatrix",
          "normalized": "Maybe MatrixMode-\u003eIO a",
          "package": "vect-opengl",
          "partial": "Matrix",
          "signature": "Maybe MatrixMode-\u003eIO m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:getMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe angle is in radians. (WARNING: OpenGL uses degrees!)\n\u003c/p\u003e",
          "module": "Data.Vect.Float.OpenGL",
          "name": "glRotate",
          "package": "vect-opengl",
          "signature": "Float -\u003e Vec3 -\u003e IO ()",
          "source": "src/Data-Vect-Float-OpenGL.html#glRotate",
          "type": "function"
        },
        "index": {
          "description": "The angle is in radians WARNING OpenGL uses degrees",
          "hierarchy": "Data Vect Float OpenGL",
          "module": "Data.Vect.Float.OpenGL",
          "name": "glRotate",
          "normalized": "Float-\u003eVec-\u003eIO()",
          "package": "vect-opengl",
          "partial": "Rotate",
          "signature": "Float-\u003eVec-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:glRotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Float.OpenGL",
          "name": "glScale",
          "package": "vect-opengl",
          "signature": "Float -\u003e IO ()",
          "source": "src/Data-Vect-Float-OpenGL.html#glScale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vect Float OpenGL",
          "module": "Data.Vect.Float.OpenGL",
          "name": "glScale",
          "normalized": "Float-\u003eIO()",
          "package": "vect-opengl",
          "partial": "Scale",
          "signature": "Float-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:glScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Float.OpenGL",
          "name": "glScale3",
          "package": "vect-opengl",
          "signature": "Vec3 -\u003e IO ()",
          "source": "src/Data-Vect-Float-OpenGL.html#glScale3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vect Float OpenGL",
          "module": "Data.Vect.Float.OpenGL",
          "name": "glScale3",
          "normalized": "Vec-\u003eIO()",
          "package": "vect-opengl",
          "partial": "Scale",
          "signature": "Vec-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:glScale3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Float.OpenGL",
          "name": "glTranslate",
          "package": "vect-opengl",
          "signature": "Vec3 -\u003e IO ()",
          "source": "src/Data-Vect-Float-OpenGL.html#glTranslate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vect Float OpenGL",
          "module": "Data.Vect.Float.OpenGL",
          "name": "glTranslate",
          "normalized": "Vec-\u003eIO()",
          "package": "vect-opengl",
          "partial": "Translate",
          "signature": "Vec-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:glTranslate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Float.OpenGL",
          "name": "glflt",
          "package": "vect-opengl",
          "signature": "Float -\u003e GLflt",
          "source": "src/Data-Vect-Float-OpenGL.html#glflt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vect Float OpenGL",
          "module": "Data.Vect.Float.OpenGL",
          "name": "glflt",
          "normalized": "Float-\u003eGLflt",
          "package": "vect-opengl",
          "signature": "Float-\u003eGLflt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:glflt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse of \u003ca\u003efrustumMatrix\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.Vect.Float.OpenGL",
          "name": "inverseFrustumMatrix",
          "package": "vect-opengl",
          "signature": "(Float, Float)-\u003e (Float, Float)-\u003e (Float, Float)-\u003e Mat4",
          "type": "function"
        },
        "index": {
          "description": "Inverse of frustumMatrix",
          "hierarchy": "Data Vect Float OpenGL",
          "module": "Data.Vect.Float.OpenGL",
          "name": "inverseFrustumMatrix",
          "normalized": "(Float,Float)-\u003e(Float,Float)-\u003e(Float,Float)-\u003eMat",
          "package": "vect-opengl",
          "partial": "Frustum Matrix",
          "signature": "(Float,Float)-\u003e(Float,Float)-\u003e(Float,Float)-\u003eMat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:inverseFrustumMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Float.OpenGL",
          "name": "makeGLMatrix",
          "package": "vect-opengl",
          "signature": "m -\u003e IO (GLmatrix GLflt)",
          "source": "src/Data-Vect-Float-OpenGL.html#makeGLMatrix",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vect Float OpenGL",
          "module": "Data.Vect.Float.OpenGL",
          "name": "makeGLMatrix",
          "normalized": "a-\u003eIO(GLmatrix GLflt)",
          "package": "vect-opengl",
          "partial": "GLMatrix",
          "signature": "m-\u003eIO(GLmatrix GLflt)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:makeGLMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Float.OpenGL",
          "name": "matrix",
          "package": "vect-opengl",
          "signature": "Maybe MatrixMode -\u003e StateVar m",
          "source": "src/Data-Vect-Float-OpenGL.html#matrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vect Float OpenGL",
          "module": "Data.Vect.Float.OpenGL",
          "name": "matrix",
          "normalized": "Maybe MatrixMode-\u003eStateVar a",
          "package": "vect-opengl",
          "signature": "Maybe MatrixMode-\u003eStateVar m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:matrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Float.OpenGL",
          "name": "multMatrix",
          "package": "vect-opengl",
          "signature": "m -\u003e IO ()",
          "source": "src/Data-Vect-Float-OpenGL.html#multMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vect Float OpenGL",
          "module": "Data.Vect.Float.OpenGL",
          "name": "multMatrix",
          "normalized": "a-\u003eIO()",
          "package": "vect-opengl",
          "partial": "Matrix",
          "signature": "m-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:multMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Orthogonal projecton\" matrix, a la OpenGL \n (the corresponding functionality is removed in OpenGL 3.1)\n\u003c/p\u003e",
          "module": "Data.Vect.Float.OpenGL",
          "name": "orthoMatrix",
          "package": "vect-opengl",
          "signature": "(Float, Float)-\u003e (Float, Float)-\u003e (Float, Float)-\u003e Mat4",
          "type": "function"
        },
        "index": {
          "description": "Orthogonal projecton matrix la OpenGL the corresponding functionality is removed in OpenGL",
          "hierarchy": "Data Vect Float OpenGL",
          "module": "Data.Vect.Float.OpenGL",
          "name": "orthoMatrix",
          "normalized": "(Float,Float)-\u003e(Float,Float)-\u003e(Float,Float)-\u003eMat",
          "package": "vect-opengl",
          "partial": "Matrix",
          "signature": "(Float,Float)-\u003e(Float,Float)-\u003e(Float,Float)-\u003eMat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:orthoMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Float.OpenGL",
          "name": "peekGLMatrix",
          "package": "vect-opengl",
          "signature": "GLmatrix GLflt -\u003e IO m",
          "source": "src/Data-Vect-Float-OpenGL.html#peekGLMatrix",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vect Float OpenGL",
          "module": "Data.Vect.Float.OpenGL",
          "name": "peekGLMatrix",
          "normalized": "GLmatrix GLflt-\u003eIO a",
          "package": "vect-opengl",
          "partial": "GLMatrix",
          "signature": "GLmatrix GLflt-\u003eIO m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:peekGLMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Float.OpenGL",
          "name": "radianToDegrees",
          "package": "vect-opengl",
          "signature": "a -\u003e a",
          "source": "src/Data-Vect-Float-OpenGL.html#radianToDegrees",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vect Float OpenGL",
          "module": "Data.Vect.Float.OpenGL",
          "name": "radianToDegrees",
          "normalized": "a-\u003ea",
          "package": "vect-opengl",
          "partial": "To Degrees",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:radianToDegrees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Float.OpenGL",
          "name": "setMatrix",
          "package": "vect-opengl",
          "signature": "Maybe MatrixMode -\u003e m -\u003e IO ()",
          "source": "src/Data-Vect-Float-OpenGL.html#setMatrix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vect Float OpenGL",
          "module": "Data.Vect.Float.OpenGL",
          "name": "setMatrix",
          "normalized": "Maybe MatrixMode-\u003ea-\u003eIO()",
          "package": "vect-opengl",
          "partial": "Matrix",
          "signature": "Maybe MatrixMode-\u003em-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:setMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Float.OpenGL",
          "name": "unflt",
          "package": "vect-opengl",
          "signature": "GLflt -\u003e Float",
          "source": "src/Data-Vect-Float-OpenGL.html#unflt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vect Float OpenGL",
          "module": "Data.Vect.Float.OpenGL",
          "name": "unflt",
          "normalized": "GLflt-\u003eFloat",
          "package": "vect-opengl",
          "signature": "GLflt-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:unflt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vect.Float.OpenGL",
          "name": "vertexAttrib",
          "package": "vect-opengl",
          "signature": "AttribLocation -\u003e a -\u003e IO ()",
          "source": "src/Data-Vect-Float-OpenGL.html#vertexAttrib",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vect Float OpenGL",
          "module": "Data.Vect.Float.OpenGL",
          "name": "vertexAttrib",
          "normalized": "AttribLocation-\u003ea-\u003eIO()",
          "package": "vect-opengl",
          "partial": "Attrib",
          "signature": "AttribLocation-\u003ea-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/vect-opengl/docs/Data-Vect-Float-OpenGL.html#v:vertexAttrib"
      }
    }
  ]
]