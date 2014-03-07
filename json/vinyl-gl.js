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
        "word": "vinyl-gl"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReflection utilities for vinyl records.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vinyl.Reflect",
          "name": "Reflect",
          "package": "vinyl-gl",
          "source": "src/Data-Vinyl-Reflect.html",
          "type": "module"
        },
        "index": {
          "description": "Reflection utilities for vinyl records",
          "hierarchy": "Data Vinyl Reflect",
          "module": "Data.Vinyl.Reflect",
          "name": "Reflect",
          "package": "vinyl-gl",
          "partial": "Reflect",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vinyl-gl/docs/Data-Vinyl-Reflect.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the dimensionality of each field in a record. This is\n primarily useful for things like the small finite vector types\n provided by \u003ca\u003eLinear\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.Vinyl.Reflect",
          "name": "HasFieldDims",
          "package": "vinyl-gl",
          "source": "src/Data-Vinyl-Reflect.html#HasFieldDims",
          "type": "class"
        },
        "index": {
          "description": "Compute the dimensionality of each field in record This is primarily useful for things like the small finite vector types provided by Linear",
          "hierarchy": "Data Vinyl Reflect",
          "module": "Data.Vinyl.Reflect",
          "name": "HasFieldDims",
          "package": "vinyl-gl",
          "partial": "Has Field Dims",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/vinyl-gl/docs/Data-Vinyl-Reflect.html#t:HasFieldDims"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList all field names in a record.\n\u003c/p\u003e",
          "module": "Data.Vinyl.Reflect",
          "name": "HasFieldNames",
          "package": "vinyl-gl",
          "source": "src/Data-Vinyl-Reflect.html#HasFieldNames",
          "type": "class"
        },
        "index": {
          "description": "List all field names in record",
          "hierarchy": "Data Vinyl Reflect",
          "module": "Data.Vinyl.Reflect",
          "name": "HasFieldNames",
          "package": "vinyl-gl",
          "partial": "Has Field Names",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/vinyl-gl/docs/Data-Vinyl-Reflect.html#t:HasFieldNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the size in bytes of of each field in a record.\n\u003c/p\u003e",
          "module": "Data.Vinyl.Reflect",
          "name": "HasFieldSizes",
          "package": "vinyl-gl",
          "source": "src/Data-Vinyl-Reflect.html#HasFieldSizes",
          "type": "class"
        },
        "index": {
          "description": "Compute the size in bytes of of each field in record",
          "hierarchy": "Data Vinyl Reflect",
          "module": "Data.Vinyl.Reflect",
          "name": "HasFieldSizes",
          "package": "vinyl-gl",
          "partial": "Has Field Sizes",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/vinyl-gl/docs/Data-Vinyl-Reflect.html#t:HasFieldSizes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vinyl.Reflect",
          "name": "fieldDims",
          "package": "vinyl-gl",
          "signature": "a -\u003e [Int]",
          "source": "src/Data-Vinyl-Reflect.html#fieldDims",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vinyl Reflect",
          "module": "Data.Vinyl.Reflect",
          "name": "fieldDims",
          "normalized": "a-\u003e[Int]",
          "package": "vinyl-gl",
          "partial": "Dims",
          "signature": "a-\u003e[Int]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/vinyl-gl/docs/Data-Vinyl-Reflect.html#v:fieldDims"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vinyl.Reflect",
          "name": "fieldNames",
          "package": "vinyl-gl",
          "signature": "a -\u003e [String]",
          "source": "src/Data-Vinyl-Reflect.html#fieldNames",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vinyl Reflect",
          "module": "Data.Vinyl.Reflect",
          "name": "fieldNames",
          "normalized": "a-\u003e[String]",
          "package": "vinyl-gl",
          "partial": "Names",
          "signature": "a-\u003e[String]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/vinyl-gl/docs/Data-Vinyl-Reflect.html#v:fieldNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vinyl.Reflect",
          "name": "fieldSizes",
          "package": "vinyl-gl",
          "signature": "a -\u003e [Int]",
          "source": "src/Data-Vinyl-Reflect.html#fieldSizes",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Vinyl Reflect",
          "module": "Data.Vinyl.Reflect",
          "name": "fieldSizes",
          "normalized": "a-\u003e[Int]",
          "package": "vinyl-gl",
          "partial": "Sizes",
          "signature": "a-\u003e[Int]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/vinyl-gl/docs/Data-Vinyl-Reflect.html#v:fieldSizes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTools for binding vinyl records to GLSL program uniform\n parameters. The most common usage is to use the \u003ccode\u003e\u003ca\u003esetUniforms\u003c/a\u003e\u003c/code\u003e\n function to set each field of a \u003ccode\u003e\u003ca\u003ePlainRec\u003c/a\u003e\u003c/code\u003e to the GLSL uniform\n parameter with the same name. This verifies that each field of the\n record corresponds to a uniform parameter of the given shader\n program, and that the types all agree.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.VinylGL.Uniforms",
          "name": "Uniforms",
          "package": "vinyl-gl",
          "source": "src/Graphics-VinylGL-Uniforms.html",
          "type": "module"
        },
        "index": {
          "description": "Tools for binding vinyl records to GLSL program uniform parameters The most common usage is to use the setUniforms function to set each field of PlainRec to the GLSL uniform parameter with the same name This verifies that each field of the record corresponds to uniform parameter of the given shader program and that the types all agree",
          "hierarchy": "Graphics VinylGL Uniforms",
          "module": "Graphics.VinylGL.Uniforms",
          "name": "Uniforms",
          "package": "vinyl-gl",
          "partial": "Uniforms",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vinyl-gl/docs/Graphics-VinylGL-Uniforms.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvide the \u003ccode\u003e\u003ca\u003eVariableType\u003c/a\u003e\u003c/code\u003e of each field in a \u003ccode\u003e\u003ca\u003eRec\u003c/a\u003e\u003c/code\u003e. The list\n of types has the same order as the fields of the \u003ccode\u003e\u003ca\u003eRec\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.VinylGL.Uniforms",
          "name": "HasFieldGLTypes",
          "package": "vinyl-gl",
          "source": "src/Graphics-VinylGL-Uniforms.html#HasFieldGLTypes",
          "type": "class"
        },
        "index": {
          "description": "Provide the VariableType of each field in Rec The list of types has the same order as the fields of the Rec",
          "hierarchy": "Graphics VinylGL Uniforms",
          "module": "Graphics.VinylGL.Uniforms",
          "name": "HasFieldGLTypes",
          "package": "vinyl-gl",
          "partial": "Has Field GLTypes",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/vinyl-gl/docs/Graphics-VinylGL-Uniforms.html#t:HasFieldGLTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.VinylGL.Uniforms",
          "name": "SetUniformFields",
          "package": "vinyl-gl",
          "source": "src/Graphics-VinylGL-Uniforms.html#SetUniformFields",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphics VinylGL Uniforms",
          "module": "Graphics.VinylGL.Uniforms",
          "name": "SetUniformFields",
          "package": "vinyl-gl",
          "partial": "Set Uniform Fields",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/vinyl-gl/docs/Graphics-VinylGL-Uniforms.html#t:SetUniformFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.VinylGL.Uniforms",
          "name": "fieldGLTypes",
          "package": "vinyl-gl",
          "signature": "a -\u003e [VariableType]",
          "source": "src/Graphics-VinylGL-Uniforms.html#fieldGLTypes",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics VinylGL Uniforms",
          "module": "Graphics.VinylGL.Uniforms",
          "name": "fieldGLTypes",
          "normalized": "a-\u003e[VariableType]",
          "package": "vinyl-gl",
          "partial": "GLTypes",
          "signature": "a-\u003e[VariableType]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/vinyl-gl/docs/Graphics-VinylGL-Uniforms.html#v:fieldGLTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet GLSL uniform parameters from a \u003ccode\u003e\u003ca\u003ePlainRec\u003c/a\u003e\u003c/code\u003e. A check is\n performed to verify that \u003cem\u003eall\u003c/em\u003e uniforms used by a program are\n represented by the record type. In other words, the record is a\n superset of the parameters used by the program.\n\u003c/p\u003e",
          "module": "Graphics.VinylGL.Uniforms",
          "name": "setAllUniforms",
          "package": "vinyl-gl",
          "signature": "ShaderProgram -\u003e PlainRec ts -\u003e IO ()",
          "source": "src/Graphics-VinylGL-Uniforms.html#setAllUniforms",
          "type": "function"
        },
        "index": {
          "description": "Set GLSL uniform parameters from PlainRec check is performed to verify that all uniforms used by program are represented by the record type In other words the record is superset of the parameters used by the program",
          "hierarchy": "Graphics VinylGL Uniforms",
          "module": "Graphics.VinylGL.Uniforms",
          "name": "setAllUniforms",
          "normalized": "ShaderProgram-\u003ePlainRec a-\u003eIO()",
          "package": "vinyl-gl",
          "partial": "All Uniforms",
          "signature": "ShaderProgram-\u003ePlainRec ts-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vinyl-gl/docs/Graphics-VinylGL-Uniforms.html#v:setAllUniforms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet GLSL uniform parameters from those fields of a \u003ccode\u003e\u003ca\u003ePlainRec\u003c/a\u003e\u003c/code\u003e\n whose names correspond to uniform parameters used by a program.\n\u003c/p\u003e",
          "module": "Graphics.VinylGL.Uniforms",
          "name": "setSomeUniforms",
          "package": "vinyl-gl",
          "signature": "ShaderProgram -\u003e PlainRec ts -\u003e IO ()",
          "source": "src/Graphics-VinylGL-Uniforms.html#setSomeUniforms",
          "type": "function"
        },
        "index": {
          "description": "Set GLSL uniform parameters from those fields of PlainRec whose names correspond to uniform parameters used by program",
          "hierarchy": "Graphics VinylGL Uniforms",
          "module": "Graphics.VinylGL.Uniforms",
          "name": "setSomeUniforms",
          "normalized": "ShaderProgram-\u003ePlainRec a-\u003eIO()",
          "package": "vinyl-gl",
          "partial": "Some Uniforms",
          "signature": "ShaderProgram-\u003ePlainRec ts-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vinyl-gl/docs/Graphics-VinylGL-Uniforms.html#v:setSomeUniforms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet GLSL uniform parameters from a \u003ccode\u003e\u003ca\u003ePlainRec\u003c/a\u003e\u003c/code\u003e representing a\n subset of all uniform parameters used by a program.\n\u003c/p\u003e",
          "module": "Graphics.VinylGL.Uniforms",
          "name": "setUniforms",
          "package": "vinyl-gl",
          "signature": "ShaderProgram -\u003e PlainRec ts -\u003e IO ()",
          "source": "src/Graphics-VinylGL-Uniforms.html#setUniforms",
          "type": "function"
        },
        "index": {
          "description": "Set GLSL uniform parameters from PlainRec representing subset of all uniform parameters used by program",
          "hierarchy": "Graphics VinylGL Uniforms",
          "module": "Graphics.VinylGL.Uniforms",
          "name": "setUniforms",
          "normalized": "ShaderProgram-\u003ePlainRec a-\u003eIO()",
          "package": "vinyl-gl",
          "partial": "Uniforms",
          "signature": "ShaderProgram-\u003ePlainRec ts-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vinyl-gl/docs/Graphics-VinylGL-Uniforms.html#v:setUniforms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for working with vertex buffer objects (VBOs) filled\n with vertices represented as vinyl records.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.VinylGL.Vertex",
          "name": "Vertex",
          "package": "vinyl-gl",
          "source": "src/Graphics-VinylGL-Vertex.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for working with vertex buffer objects VBOs filled with vertices represented as vinyl records",
          "hierarchy": "Graphics VinylGL Vertex",
          "module": "Graphics.VinylGL.Vertex",
          "name": "Vertex",
          "package": "vinyl-gl",
          "partial": "Vertex",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vinyl-gl/docs/Graphics-VinylGL-Vertex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of a VBO whose type describes the vertices.\n\u003c/p\u003e",
          "module": "Graphics.VinylGL.Vertex",
          "name": "BufferedVertices",
          "package": "vinyl-gl",
          "source": "src/Graphics-VinylGL-Vertex.html#BufferedVertices",
          "type": "newtype"
        },
        "index": {
          "description": "Representation of VBO whose type describes the vertices",
          "hierarchy": "Graphics VinylGL Vertex",
          "module": "Graphics.VinylGL.Vertex",
          "name": "BufferedVertices",
          "package": "vinyl-gl",
          "partial": "Buffered Vertices",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/vinyl-gl/docs/Graphics-VinylGL-Vertex.html#t:BufferedVertices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.VinylGL.Vertex",
          "name": "BufferedVertices",
          "package": "vinyl-gl",
          "signature": "BufferedVertices",
          "source": "src/Graphics-VinylGL-Vertex.html#BufferedVertices",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics VinylGL Vertex",
          "module": "Graphics.VinylGL.Vertex",
          "name": "BufferedVertices",
          "package": "vinyl-gl",
          "partial": "Buffered Vertices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vinyl-gl/docs/Graphics-VinylGL-Vertex.html#v:BufferedVertices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBind previously-buffered vertex data.\n\u003c/p\u003e",
          "module": "Graphics.VinylGL.Vertex",
          "name": "bindVertices",
          "package": "vinyl-gl",
          "signature": "BufferedVertices a -\u003e IO ()",
          "source": "src/Graphics-VinylGL-Vertex.html#bindVertices",
          "type": "function"
        },
        "index": {
          "description": "Bind previously-buffered vertex data",
          "hierarchy": "Graphics VinylGL Vertex",
          "module": "Graphics.VinylGL.Vertex",
          "name": "bindVertices",
          "normalized": "BufferedVertices a-\u003eIO()",
          "package": "vinyl-gl",
          "partial": "Vertices",
          "signature": "BufferedVertices a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vinyl-gl/docs/Graphics-VinylGL-Vertex.html#v:bindVertices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad vertex data into a GPU-accessible buffer.\n\u003c/p\u003e",
          "module": "Graphics.VinylGL.Vertex",
          "name": "bufferVertices",
          "package": "vinyl-gl",
          "signature": "v (PlainRec rs) -\u003e IO (BufferedVertices rs)",
          "source": "src/Graphics-VinylGL-Vertex.html#bufferVertices",
          "type": "function"
        },
        "index": {
          "description": "Load vertex data into GPU-accessible buffer",
          "hierarchy": "Graphics VinylGL Vertex",
          "module": "Graphics.VinylGL.Vertex",
          "name": "bufferVertices",
          "normalized": "a(PlainRec b)-\u003eIO(BufferedVertices b)",
          "package": "vinyl-gl",
          "partial": "Vertices",
          "signature": "v(PlainRec rs)-\u003eIO(BufferedVertices rs)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vinyl-gl/docs/Graphics-VinylGL-Vertex.html#v:bufferVertices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the object name associated with \u003ccode\u003e\u003ca\u003eBufferedVertices\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.VinylGL.Vertex",
          "name": "deleteVertices",
          "package": "vinyl-gl",
          "signature": "BufferedVertices a -\u003e IO ()",
          "source": "src/Graphics-VinylGL-Vertex.html#deleteVertices",
          "type": "function"
        },
        "index": {
          "description": "Delete the object name associated with BufferedVertices",
          "hierarchy": "Graphics VinylGL Vertex",
          "module": "Graphics.VinylGL.Vertex",
          "name": "deleteVertices",
          "normalized": "BufferedVertices a-\u003eIO()",
          "package": "vinyl-gl",
          "partial": "Vertices",
          "signature": "BufferedVertices a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vinyl-gl/docs/Graphics-VinylGL-Vertex.html#v:deleteVertices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBind some of a shader's attribute inputs to a vertex record. This\n is useful when the inputs of a shader are split across multiple\n arrays.\n\u003c/p\u003e",
          "module": "Graphics.VinylGL.Vertex",
          "name": "enableVertexFields",
          "package": "vinyl-gl",
          "signature": "ShaderProgram -\u003e p rs -\u003e IO ()",
          "source": "src/Graphics-VinylGL-Vertex.html#enableVertexFields",
          "type": "function"
        },
        "index": {
          "description": "Bind some of shader attribute inputs to vertex record This is useful when the inputs of shader are split across multiple arrays",
          "hierarchy": "Graphics VinylGL Vertex",
          "module": "Graphics.VinylGL.Vertex",
          "name": "enableVertexFields",
          "normalized": "ShaderProgram-\u003ea b-\u003eIO()",
          "package": "vinyl-gl",
          "partial": "Vertex Fields",
          "signature": "ShaderProgram-\u003ep rs-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vinyl-gl/docs/Graphics-VinylGL-Vertex.html#v:enableVertexFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine up a shader's attribute inputs with a vertex record. This\n maps vertex fields to GLSL attributes on the basis of record field\n names on the Haskell side, and variable names on the GLSL side.\n\u003c/p\u003e",
          "module": "Graphics.VinylGL.Vertex",
          "name": "enableVertices",
          "package": "vinyl-gl",
          "signature": "ShaderProgram -\u003e f rs -\u003e IO (Maybe String)",
          "source": "src/Graphics-VinylGL-Vertex.html#enableVertices",
          "type": "function"
        },
        "index": {
          "description": "Line up shader attribute inputs with vertex record This maps vertex fields to GLSL attributes on the basis of record field names on the Haskell side and variable names on the GLSL side",
          "hierarchy": "Graphics VinylGL Vertex",
          "module": "Graphics.VinylGL.Vertex",
          "name": "enableVertices",
          "normalized": "ShaderProgram-\u003ea b-\u003eIO(Maybe String)",
          "package": "vinyl-gl",
          "partial": "Vertices",
          "signature": "ShaderProgram-\u003ef rs-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vinyl-gl/docs/Graphics-VinylGL-Vertex.html#v:enableVertices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBehaves like \u003ccode\u003e\u003ca\u003eenableVertices\u003c/a\u003e\u003c/code\u003e, but raises an exception if the\n supplied vertex record does not include a field required by the\n shader.\n\u003c/p\u003e",
          "module": "Graphics.VinylGL.Vertex",
          "name": "enableVertices'",
          "package": "vinyl-gl",
          "signature": "ShaderProgram -\u003e f rs -\u003e IO ()",
          "source": "src/Graphics-VinylGL-Vertex.html#enableVertices%27",
          "type": "function"
        },
        "index": {
          "description": "Behaves like enableVertices but raises an exception if the supplied vertex record does not include field required by the shader",
          "hierarchy": "Graphics VinylGL Vertex",
          "module": "Graphics.VinylGL.Vertex",
          "name": "enableVertices'",
          "normalized": "ShaderProgram-\u003ea b-\u003eIO()",
          "package": "vinyl-gl",
          "partial": "Vertices'",
          "signature": "ShaderProgram-\u003ef rs-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vinyl-gl/docs/Graphics-VinylGL-Vertex.html#v:enableVertices-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a \u003ccode\u003e\u003ca\u003eVertexArrayDescriptor\u003c/a\u003e\u003c/code\u003e for a particular field of a\n vertex record.\n\u003c/p\u003e",
          "module": "Graphics.VinylGL.Vertex",
          "name": "fieldToVAD",
          "package": "vinyl-gl",
          "signature": "r -\u003e Proxy (PlainRec rs) -\u003e VertexArrayDescriptor a",
          "source": "src/Graphics-VinylGL-Vertex.html#fieldToVAD",
          "type": "function"
        },
        "index": {
          "description": "Produce VertexArrayDescriptor for particular field of vertex record",
          "hierarchy": "Graphics VinylGL Vertex",
          "module": "Graphics.VinylGL.Vertex",
          "name": "fieldToVAD",
          "normalized": "a-\u003eProxy(PlainRec b)-\u003eVertexArrayDescriptor c",
          "package": "vinyl-gl",
          "partial": "To VAD",
          "signature": "r-\u003eProxy(PlainRec rs)-\u003eVertexArrayDescriptor a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vinyl-gl/docs/Graphics-VinylGL-Vertex.html#v:fieldToVAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.VinylGL.Vertex",
          "name": "getVertexBuffer",
          "package": "vinyl-gl",
          "signature": "BufferObject",
          "source": "src/Graphics-VinylGL-Vertex.html#BufferedVertices",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics VinylGL Vertex",
          "module": "Graphics.VinylGL.Vertex",
          "name": "getVertexBuffer",
          "package": "vinyl-gl",
          "partial": "Vertex Buffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vinyl-gl/docs/Graphics-VinylGL-Vertex.html#v:getVertexBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReload \u003ccode\u003e\u003ca\u003eBufferedVertices\u003c/a\u003e\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e of new vertex data.\n\u003c/p\u003e",
          "module": "Graphics.VinylGL.Vertex",
          "name": "reloadVertices",
          "package": "vinyl-gl",
          "signature": "BufferedVertices rs -\u003e Vector (PlainRec rs) -\u003e IO ()",
          "source": "src/Graphics-VinylGL-Vertex.html#reloadVertices",
          "type": "function"
        },
        "index": {
          "description": "Reload BufferedVertices with Vector of new vertex data",
          "hierarchy": "Graphics VinylGL Vertex",
          "module": "Graphics.VinylGL.Vertex",
          "name": "reloadVertices",
          "normalized": "BufferedVertices a-\u003eVector(PlainRec a)-\u003eIO()",
          "package": "vinyl-gl",
          "partial": "Vertices",
          "signature": "BufferedVertices rs-\u003eVector(PlainRec rs)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vinyl-gl/docs/Graphics-VinylGL-Vertex.html#v:reloadVertices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.VinylGL",
          "name": "VinylGL",
          "package": "vinyl-gl",
          "source": "src/Graphics-VinylGL.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics VinylGL",
          "module": "Graphics.VinylGL",
          "name": "VinylGL",
          "package": "vinyl-gl",
          "partial": "Vinyl GL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vinyl-gl/docs/Graphics-VinylGL.html#"
      }
    }
  ]
]