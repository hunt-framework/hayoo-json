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
        "word": "simple-vec3"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec3.Class",
          "name": "Class",
          "package": "simple-vec3",
          "source": "src/Data-Vec3-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Vec3 Class",
          "module": "Data.Vec3.Class",
          "name": "Class",
          "package": "simple-vec3",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThree-dimensional vector, with an associated matrix type.\n\u003c/p\u003e",
          "module": "Data.Vec3.Class",
          "name": "Vec3",
          "package": "simple-vec3",
          "source": "src/Data-Vec3-Class.html#Vec3",
          "type": "class"
        },
        "index": {
          "description": "Three-dimensional vector with an associated matrix type",
          "hierarchy": "Data Vec3 Class",
          "module": "Data.Vec3.Class",
          "name": "Vec3",
          "package": "simple-vec3",
          "partial": "Vec",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-Class.html#t:Vec3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd two vectors.\n\u003c/p\u003e",
          "module": "Data.Vec3.Class",
          "name": "(\u003c+\u003e)",
          "package": "simple-vec3",
          "signature": "v -\u003e v -\u003e v",
          "source": "src/Data-Vec3-Class.html#%3C%2B%3E",
          "type": "method"
        },
        "index": {
          "description": "Add two vectors",
          "hierarchy": "Data Vec3 Class",
          "module": "Data.Vec3.Class",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "simple-vec3",
          "signature": "v-\u003ev-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-Class.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtract two vectors.\n\u003c/p\u003e",
          "module": "Data.Vec3.Class",
          "name": "(\u003c-\u003e)",
          "package": "simple-vec3",
          "signature": "v -\u003e v -\u003e v",
          "source": "src/Data-Vec3-Class.html#%3C-%3E",
          "type": "method"
        },
        "index": {
          "description": "Subtract two vectors",
          "hierarchy": "Data Vec3 Class",
          "module": "Data.Vec3.Class",
          "name": "(\u003c-\u003e) \u003c-\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "simple-vec3",
          "signature": "v-\u003ev-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-Class.html#v:-60--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCross product.\n\u003c/p\u003e",
          "module": "Data.Vec3.Class",
          "name": "(\u003e\u003c)",
          "package": "simple-vec3",
          "signature": "v -\u003e v -\u003e v",
          "source": "src/Data-Vec3-Class.html#%3E%3C",
          "type": "method"
        },
        "index": {
          "description": "Cross product",
          "hierarchy": "Data Vec3 Class",
          "module": "Data.Vec3.Class",
          "name": "(\u003e\u003c) \u003e\u003c",
          "normalized": "a-\u003ea-\u003ea",
          "package": "simple-vec3",
          "signature": "v-\u003ev-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-Class.html#v:-62--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDot product.\n\u003c/p\u003e",
          "module": "Data.Vec3.Class",
          "name": "(.*)",
          "package": "simple-vec3",
          "signature": "v -\u003e v -\u003e Double",
          "source": "src/Data-Vec3-Class.html#.%2A",
          "type": "method"
        },
        "index": {
          "description": "Dot product",
          "hierarchy": "Data Vec3 Class",
          "module": "Data.Vec3.Class",
          "name": "(.*) .*",
          "normalized": "a-\u003ea-\u003eDouble",
          "package": "simple-vec3",
          "signature": "v-\u003ev-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-Class.html#v:.-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale a vector.\n\u003c/p\u003e",
          "module": "Data.Vec3.Class",
          "name": "(.^)",
          "package": "simple-vec3",
          "signature": "v -\u003e Double -\u003e v",
          "source": "src/Data-Vec3-Class.html#.%5E",
          "type": "method"
        },
        "index": {
          "description": "Scale vector",
          "hierarchy": "Data Vec3 Class",
          "module": "Data.Vec3.Class",
          "name": "(.^) .^",
          "normalized": "a-\u003eDouble-\u003ea",
          "package": "simple-vec3",
          "signature": "v-\u003eDouble-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-Class.html#v:.-94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd two matrices.\n\u003c/p\u003e",
          "module": "Data.Vec3.Class",
          "name": "addM",
          "package": "simple-vec3",
          "signature": "Matrix v -\u003e Matrix v -\u003e Matrix v",
          "source": "src/Data-Vec3-Class.html#addM",
          "type": "method"
        },
        "index": {
          "description": "Add two matrices",
          "hierarchy": "Data Vec3 Class",
          "module": "Data.Vec3.Class",
          "name": "addM",
          "normalized": "Matrix a-\u003eMatrix a-\u003eMatrix a",
          "package": "simple-vec3",
          "signature": "Matrix v-\u003eMatrix v-\u003eMatrix v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-Class.html#v:addM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a diagonal matrix from a number \u003ccode\u003ed\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n [ d  0  0 ]\n [         ]\n [ 0  d  0 ]\n [         ]\n [ 0  0  d ]\n\u003c/pre\u003e",
          "module": "Data.Vec3.Class",
          "name": "diag",
          "package": "simple-vec3",
          "signature": "Double -\u003e Matrix v",
          "source": "src/Data-Vec3-Class.html#diag",
          "type": "method"
        },
        "index": {
          "description": "Build diagonal matrix from number",
          "hierarchy": "Data Vec3 Class",
          "module": "Data.Vec3.Class",
          "name": "diag",
          "normalized": "Double-\u003eMatrix a",
          "package": "simple-vec3",
          "signature": "Double-\u003eMatrix v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-Class.html#v:diag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistance between two points.\n\u003c/p\u003e",
          "module": "Data.Vec3.Class",
          "name": "distance",
          "package": "simple-vec3",
          "signature": "v -\u003e v -\u003e Double",
          "source": "src/Data-Vec3-Class.html#distance",
          "type": "method"
        },
        "index": {
          "description": "Distance between two points",
          "hierarchy": "Data Vec3 Class",
          "module": "Data.Vec3.Class",
          "name": "distance",
          "normalized": "a-\u003ea-\u003eDouble",
          "package": "simple-vec3",
          "signature": "v-\u003ev-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-Class.html#v:distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric vector dot product.\n\u003c/p\u003e\u003cp\u003eMultiply the transpose of the first vector by the given matrix,\n then multiply the result by the second vector.\n\u003c/p\u003e\u003cpre\u003e\n                     [ a11  a12  a13 ]   [ v2x ]\n                     [               ]   [     ]\n [ v1x  v1y  v1z ] . [ a21  a22  a23 ] . [ v2y ] = s\n                     [               ]   [     ]\n                     [ a31  a32  a33 ]   [ v2z ]\n\u003c/pre\u003e",
          "module": "Data.Vec3.Class",
          "name": "dotM",
          "package": "simple-vec3",
          "signature": "v -\u003e v -\u003e Matrix v -\u003e Double",
          "source": "src/Data-Vec3-Class.html#dotM",
          "type": "method"
        },
        "index": {
          "description": "Generic vector dot product Multiply the transpose of the first vector by the given matrix then multiply the result by the second vector a11 a12 a13 v2x v1x v1y v1z a21 a22 a23 v2y a31 a32 a33 v2z",
          "hierarchy": "Data Vec3 Class",
          "module": "Data.Vec3.Class",
          "name": "dotM",
          "normalized": "a-\u003ea-\u003eMatrix a-\u003eDouble",
          "package": "simple-vec3",
          "signature": "v-\u003ev-\u003eMatrix v-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-Class.html#v:dotM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new matrix from rows.\n\u003c/p\u003e",
          "module": "Data.Vec3.Class",
          "name": "fromRows",
          "package": "simple-vec3",
          "signature": "(v, v, v) -\u003e Matrix v",
          "source": "src/Data-Vec3-Class.html#fromRows",
          "type": "method"
        },
        "index": {
          "description": "Construct new matrix from rows",
          "hierarchy": "Data Vec3 Class",
          "module": "Data.Vec3.Class",
          "name": "fromRows",
          "normalized": "(a,a,a)-\u003eMatrix a",
          "package": "simple-vec3",
          "partial": "Rows",
          "signature": "(v,v,v)-\u003eMatrix v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-Class.html#v:fromRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new vector from components.\n\u003c/p\u003e",
          "module": "Data.Vec3.Class",
          "name": "fromXYZ",
          "package": "simple-vec3",
          "signature": "(Double, Double, Double) -\u003e v",
          "source": "src/Data-Vec3-Class.html#fromXYZ",
          "type": "method"
        },
        "index": {
          "description": "Construct new vector from components",
          "hierarchy": "Data Vec3 Class",
          "module": "Data.Vec3.Class",
          "name": "fromXYZ",
          "normalized": "(Double,Double,Double)-\u003ea",
          "package": "simple-vec3",
          "partial": "XYZ",
          "signature": "(Double,Double,Double)-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-Class.html#v:fromXYZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvert the direction of a vector.\n\u003c/p\u003e",
          "module": "Data.Vec3.Class",
          "name": "invert",
          "package": "simple-vec3",
          "signature": "v -\u003e v",
          "source": "src/Data-Vec3-Class.html#invert",
          "type": "method"
        },
        "index": {
          "description": "Invert the direction of vector",
          "hierarchy": "Data Vec3 Class",
          "module": "Data.Vec3.Class",
          "name": "invert",
          "normalized": "a-\u003ea",
          "package": "simple-vec3",
          "signature": "v-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-Class.html#v:invert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply a matrix and a vector.\n\u003c/p\u003e\u003cpre\u003e\n [ a11  a12  a13 ]   [ v2x ]   [ rx ]\n [               ]   [     ]   [    ]\n [ a21  a22  a23 ] . [ v2y ] = [ ry ]\n [               ]   [     ]   [    ]\n [ a31  a32  a33 ]   [ v2z ]   [ rz ]\n\u003c/pre\u003e",
          "module": "Data.Vec3.Class",
          "name": "mxv",
          "package": "simple-vec3",
          "signature": "Matrix v -\u003e v -\u003e v",
          "source": "src/Data-Vec3-Class.html#mxv",
          "type": "method"
        },
        "index": {
          "description": "Multiply matrix and vector a11 a12 a13 v2x rx a21 a22 a23 v2y ry a31 a32 a33 v2z rz",
          "hierarchy": "Data Vec3 Class",
          "module": "Data.Vec3.Class",
          "name": "mxv",
          "normalized": "Matrix a-\u003ea-\u003ea",
          "package": "simple-vec3",
          "signature": "Matrix v-\u003ev-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-Class.html#v:mxv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEuclidean norm of a vector.\n\u003c/p\u003e",
          "module": "Data.Vec3.Class",
          "name": "norm",
          "package": "simple-vec3",
          "signature": "v -\u003e Double",
          "source": "src/Data-Vec3-Class.html#norm",
          "type": "method"
        },
        "index": {
          "description": "Euclidean norm of vector",
          "hierarchy": "Data Vec3 Class",
          "module": "Data.Vec3.Class",
          "name": "norm",
          "normalized": "a-\u003eDouble",
          "package": "simple-vec3",
          "signature": "v-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-Class.html#v:norm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce unit vector with the same direction as the original\n one.\n\u003c/p\u003e",
          "module": "Data.Vec3.Class",
          "name": "normalize",
          "package": "simple-vec3",
          "signature": "v -\u003e v",
          "source": "src/Data-Vec3-Class.html#normalize",
          "type": "method"
        },
        "index": {
          "description": "Produce unit vector with the same direction as the original one",
          "hierarchy": "Data Vec3 Class",
          "module": "Data.Vec3.Class",
          "name": "normalize",
          "normalized": "a-\u003ea",
          "package": "simple-vec3",
          "signature": "v-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-Class.html#v:normalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrigin point \u003ccode\u003e(0, 0, 0)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vec3.Class",
          "name": "origin",
          "package": "simple-vec3",
          "signature": "v",
          "source": "src/Data-Vec3-Class.html#origin",
          "type": "method"
        },
        "index": {
          "description": "Origin point",
          "hierarchy": "Data Vec3 Class",
          "module": "Data.Vec3.Class",
          "name": "origin",
          "package": "simple-vec3",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-Class.html#v:origin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeconstruct a matrix into rows.\n\u003c/p\u003e",
          "module": "Data.Vec3.Class",
          "name": "toRows",
          "package": "simple-vec3",
          "signature": "Matrix v -\u003e (v, v, v)",
          "source": "src/Data-Vec3-Class.html#toRows",
          "type": "method"
        },
        "index": {
          "description": "Deconstruct matrix into rows",
          "hierarchy": "Data Vec3 Class",
          "module": "Data.Vec3.Class",
          "name": "toRows",
          "normalized": "Matrix a-\u003e(a,a,a)",
          "package": "simple-vec3",
          "partial": "Rows",
          "signature": "Matrix v-\u003e(v,v,v)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-Class.html#v:toRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeconstruct a vector into components.\n\u003c/p\u003e",
          "module": "Data.Vec3.Class",
          "name": "toXYZ",
          "package": "simple-vec3",
          "signature": "v -\u003e (Double, Double, Double)",
          "source": "src/Data-Vec3-Class.html#toXYZ",
          "type": "method"
        },
        "index": {
          "description": "Deconstruct vector into components",
          "hierarchy": "Data Vec3 Class",
          "module": "Data.Vec3.Class",
          "name": "toXYZ",
          "normalized": "a-\u003e(Double,Double,Double)",
          "package": "simple-vec3",
          "partial": "XYZ",
          "signature": "v-\u003e(Double,Double,Double)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-Class.html#v:toXYZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranspose a vector and multiply it by another vector,\n producing a matrix.\n\u003c/p\u003e\u003cpre\u003e\n [ v1x ]                       [ r11  r12  r13 ]\n [     ]                       [               ]\n [ v1y ] . [ v2x  v2y  v2z ] = [ r21  r22  r23 ]\n [     ]                       [               ]\n [ v1z ]                       [ r31  r32  r33 ]\n\u003c/pre\u003e",
          "module": "Data.Vec3.Class",
          "name": "vxv",
          "package": "simple-vec3",
          "signature": "v -\u003e v -\u003e Matrix v",
          "source": "src/Data-Vec3-Class.html#vxv",
          "type": "method"
        },
        "index": {
          "description": "Transpose vector and multiply it by another vector producing matrix v1x r11 r12 r13 v1y v2x v2y v2z r21 r22 r23 v1z r31 r32 r33",
          "hierarchy": "Data Vec3 Class",
          "module": "Data.Vec3.Class",
          "name": "vxv",
          "normalized": "a-\u003ea-\u003eMatrix a",
          "package": "simple-vec3",
          "signature": "v-\u003ev-\u003eMatrix v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-Class.html#v:vxv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZip two vectors elementwise.\n\u003c/p\u003e",
          "module": "Data.Vec3.Class",
          "name": "zipWith",
          "package": "simple-vec3",
          "signature": "(Double -\u003e Double -\u003e Double) -\u003e v -\u003e v -\u003e v",
          "source": "src/Data-Vec3-Class.html#zipWith",
          "type": "method"
        },
        "index": {
          "description": "Zip two vectors elementwise",
          "hierarchy": "Data Vec3 Class",
          "module": "Data.Vec3.Class",
          "name": "zipWith",
          "normalized": "(Double-\u003eDouble-\u003eDouble)-\u003ea-\u003ea-\u003ea",
          "package": "simple-vec3",
          "partial": "With",
          "signature": "(Double-\u003eDouble-\u003eDouble)-\u003ev-\u003ev-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-Class.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec3.Storable",
          "name": "Storable",
          "package": "simple-vec3",
          "source": "src/Data-Vec3-Storable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Vec3 Storable",
          "module": "Data.Vec3.Storable",
          "name": "Storable",
          "package": "simple-vec3",
          "partial": "Storable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-Storable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eVec3\u003c/a\u003e\u003c/code\u003e implementation with \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e instance,\n suitable for use with \u003ca\u003eData.Vector.Storable\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.Vec3.Storable",
          "name": "SVec3",
          "package": "simple-vec3",
          "source": "src/Data-Vec3-Storable.html#SVec3",
          "type": "data"
        },
        "index": {
          "description": "Vec3 implementation with Storable instance suitable for use with Data.Vector.Storable",
          "hierarchy": "Data Vec3 Storable",
          "module": "Data.Vec3.Storable",
          "name": "SVec3",
          "package": "simple-vec3",
          "partial": "SVec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-Storable.html#t:SVec3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Vec3.Storable\",\"Data.Vec3\"]",
          "name": "SVec3",
          "package": "simple-vec3",
          "signature": "SVec3 !CDouble !CDouble !CDouble",
          "source": "src/Data-Vec3-Storable.html#SVec3",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-Storable.html#v:SVec3\",\"http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3.html#v:SVec3\"]"
        },
        "index": {
          "hierarchy": "Data Vec3 Storable",
          "module": "Data.Vec3.Storable",
          "name": "SVec3",
          "package": "simple-vec3",
          "partial": "SVec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-Storable.html#v:SVec3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec3.TUnboxed",
          "name": "TUnboxed",
          "package": "simple-vec3",
          "source": "src/Data-Vec3-TUnboxed.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Vec3 TUnboxed",
          "module": "Data.Vec3.TUnboxed",
          "name": "TUnboxed",
          "package": "simple-vec3",
          "partial": "TUnboxed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-TUnboxed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eVec3\u003c/a\u003e\u003c/code\u003e implementation with \u003ccode\u003e\u003ca\u003eUnbox\u003c/a\u003e\u003c/code\u003e instance\n based on tuples, suitable for use with \u003ca\u003eData.Vector.Unboxed\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis represents 3-vector as a triple of doubles, using the default\n Unbox instance for tuples as provided by \u003ca\u003eData.Vector.Unboxed\u003c/a\u003e,\n which wraps a vector of tuples as a tuple of vectors.\n\u003c/p\u003e\u003cpre\u003e\n interface:  [d1 (x, y, z); d2 (x, y, z) ...], length = N\n                  |  |  |       |  |  |\n storage(x): [d1x-+  |  | ; d2x-+  |  |  ...], length = N\n storage(y): [d1y----+  | ; d2y----+  |  ...], length = N\n storage(z): [d1z-------+ ; d2z-------+  ...], length = N\n\u003c/pre\u003e",
          "module": "Data.Vec3.TUnboxed",
          "name": "TUVec3",
          "package": "simple-vec3",
          "source": "src/Data-Vec3-TUnboxed.html#TUVec3",
          "type": "newtype"
        },
        "index": {
          "description": "Vec3 implementation with Unbox instance based on tuples suitable for use with Data.Vector.Unboxed This represents vector as triple of doubles using the default Unbox instance for tuples as provided by Data.Vector.Unboxed which wraps vector of tuples as tuple of vectors interface d1 d2 length storage d1x d2x length storage d1y d2y length storage d1z d2z length",
          "hierarchy": "Data Vec3 TUnboxed",
          "module": "Data.Vec3.TUnboxed",
          "name": "TUVec3",
          "package": "simple-vec3",
          "partial": "TUVec",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-TUnboxed.html#t:TUVec3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Vec3.TUnboxed\",\"Data.Vec3\"]",
          "name": "TUVec3",
          "package": "simple-vec3",
          "signature": "TUVec3 (Double, Double, Double)",
          "source": "src/Data-Vec3-TUnboxed.html#TUVec3",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-TUnboxed.html#v:TUVec3\",\"http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3.html#v:TUVec3\"]"
        },
        "index": {
          "hierarchy": "Data Vec3 TUnboxed",
          "module": "Data.Vec3.TUnboxed",
          "name": "TUVec3",
          "normalized": "TUVec(Double,Double,Double)",
          "package": "simple-vec3",
          "partial": "TUVec",
          "signature": "TUVec(Double,Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-TUnboxed.html#v:TUVec3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec3.Unboxed",
          "name": "Unboxed",
          "package": "simple-vec3",
          "source": "src/Data-Vec3-Unboxed.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Vec3 Unboxed",
          "module": "Data.Vec3.Unboxed",
          "name": "Unboxed",
          "package": "simple-vec3",
          "partial": "Unboxed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-Unboxed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eVec3\u003c/a\u003e\u003c/code\u003e implementation with \u003ccode\u003e\u003ca\u003eUnbox\u003c/a\u003e\u003c/code\u003e instance\n based on a single contiguous array storage scheme, suitable for use\n with \u003ca\u003eData.Vector.Unboxed\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eUnbox\u003c/a\u003e\u003c/code\u003e instance provides the required index transformations.\n\u003c/p\u003e\u003cpre\u003e\n interface: [d1 x   y   z  ; d2 x   y   z  ...], length = N = M / 3\n                |   |   |       |   |   |\n storage:   [  d1x d2y d2z ;   d2x d2y d2z ...], length = M\n\u003c/pre\u003e\u003cp\u003eThanks to dense packing scheme the performance of this\n implementation should generally be on par with \u003ccode\u003eStorable\u003c/code\u003e-based\n \u003ccode\u003e\u003ca\u003eSVec3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vec3.Unboxed",
          "name": "UVec3",
          "package": "simple-vec3",
          "source": "src/Data-Vec3-Unboxed.html#UVec3",
          "type": "data"
        },
        "index": {
          "description": "Vec3 implementation with Unbox instance based on single contiguous array storage scheme suitable for use with Data.Vector.Unboxed Unbox instance provides the required index transformations interface d1 d2 length storage d1x d2y d2z d2x d2y d2z length Thanks to dense packing scheme the performance of this implementation should generally be on par with Storable based SVec3",
          "hierarchy": "Data Vec3 Unboxed",
          "module": "Data.Vec3.Unboxed",
          "name": "UVec3",
          "package": "simple-vec3",
          "partial": "UVec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-Unboxed.html#t:UVec3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Vec3.Unboxed\",\"Data.Vec3\"]",
          "name": "UVec3",
          "package": "simple-vec3",
          "signature": "UVec3 !Double !Double !Double",
          "source": "src/Data-Vec3-Unboxed.html#UVec3",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-Unboxed.html#v:UVec3\",\"http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3.html#v:UVec3\"]"
        },
        "index": {
          "hierarchy": "Data Vec3 Unboxed",
          "module": "Data.Vec3.Unboxed",
          "name": "UVec3",
          "package": "simple-vec3",
          "partial": "UVec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3-Unboxed.html#v:UVec3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vec3",
          "name": "Vec3",
          "package": "simple-vec3",
          "source": "src/Data-Vec3.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Vec3",
          "module": "Data.Vec3",
          "name": "Vec3",
          "package": "simple-vec3",
          "partial": "Vec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eVec3\u003c/a\u003e\u003c/code\u003e implementation with \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e instance,\n suitable for use with \u003ca\u003eData.Vector.Storable\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.Vec3",
          "name": "SVec3",
          "package": "simple-vec3",
          "source": "src/Data-Vec3-Storable.html#SVec3",
          "type": "data"
        },
        "index": {
          "description": "Vec3 implementation with Storable instance suitable for use with Data.Vector.Storable",
          "hierarchy": "Data Vec3",
          "module": "Data.Vec3",
          "name": "SVec3",
          "package": "simple-vec3",
          "partial": "SVec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3.html#t:SVec3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eVec3\u003c/a\u003e\u003c/code\u003e implementation with \u003ccode\u003e\u003ca\u003eUnbox\u003c/a\u003e\u003c/code\u003e instance\n based on tuples, suitable for use with \u003ca\u003eData.Vector.Unboxed\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis represents 3-vector as a triple of doubles, using the default\n Unbox instance for tuples as provided by \u003ca\u003eData.Vector.Unboxed\u003c/a\u003e,\n which wraps a vector of tuples as a tuple of vectors.\n\u003c/p\u003e\u003cpre\u003e\n interface:  [d1 (x, y, z); d2 (x, y, z) ...], length = N\n                  |  |  |       |  |  |\n storage(x): [d1x-+  |  | ; d2x-+  |  |  ...], length = N\n storage(y): [d1y----+  | ; d2y----+  |  ...], length = N\n storage(z): [d1z-------+ ; d2z-------+  ...], length = N\n\u003c/pre\u003e",
          "module": "Data.Vec3",
          "name": "TUVec3",
          "package": "simple-vec3",
          "source": "src/Data-Vec3-TUnboxed.html#TUVec3",
          "type": "newtype"
        },
        "index": {
          "description": "Vec3 implementation with Unbox instance based on tuples suitable for use with Data.Vector.Unboxed This represents vector as triple of doubles using the default Unbox instance for tuples as provided by Data.Vector.Unboxed which wraps vector of tuples as tuple of vectors interface d1 d2 length storage d1x d2x length storage d1y d2y length storage d1z d2z length",
          "hierarchy": "Data Vec3",
          "module": "Data.Vec3",
          "name": "TUVec3",
          "package": "simple-vec3",
          "partial": "TUVec",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3.html#t:TUVec3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eVec3\u003c/a\u003e\u003c/code\u003e implementation with \u003ccode\u003e\u003ca\u003eUnbox\u003c/a\u003e\u003c/code\u003e instance\n based on a single contiguous array storage scheme, suitable for use\n with \u003ca\u003eData.Vector.Unboxed\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eUnbox\u003c/a\u003e\u003c/code\u003e instance provides the required index transformations.\n\u003c/p\u003e\u003cpre\u003e\n interface: [d1 x   y   z  ; d2 x   y   z  ...], length = N = M / 3\n                |   |   |       |   |   |\n storage:   [  d1x d2y d2z ;   d2x d2y d2z ...], length = M\n\u003c/pre\u003e\u003cp\u003eThanks to dense packing scheme the performance of this\n implementation should generally be on par with \u003ccode\u003eStorable\u003c/code\u003e-based\n \u003ccode\u003e\u003ca\u003eSVec3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vec3",
          "name": "UVec3",
          "package": "simple-vec3",
          "source": "src/Data-Vec3-Unboxed.html#UVec3",
          "type": "data"
        },
        "index": {
          "description": "Vec3 implementation with Unbox instance based on single contiguous array storage scheme suitable for use with Data.Vector.Unboxed Unbox instance provides the required index transformations interface d1 d2 length storage d1x d2y d2z d2x d2y d2z length Thanks to dense packing scheme the performance of this implementation should generally be on par with Storable based SVec3",
          "hierarchy": "Data Vec3",
          "module": "Data.Vec3",
          "name": "UVec3",
          "package": "simple-vec3",
          "partial": "UVec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3.html#t:UVec3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThree-dimensional vector, with an associated matrix type.\n\u003c/p\u003e",
          "module": "Data.Vec3",
          "name": "Vec3",
          "package": "simple-vec3",
          "source": "src/Data-Vec3-Class.html#Vec3",
          "type": "class"
        },
        "index": {
          "description": "Three-dimensional vector with an associated matrix type",
          "hierarchy": "Data Vec3",
          "module": "Data.Vec3",
          "name": "Vec3",
          "package": "simple-vec3",
          "partial": "Vec",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3.html#t:Vec3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd two vectors.\n\u003c/p\u003e",
          "module": "Data.Vec3",
          "name": "(\u003c+\u003e)",
          "package": "simple-vec3",
          "signature": "v -\u003e v -\u003e v",
          "source": "src/Data-Vec3-Class.html#%3C%2B%3E",
          "type": "method"
        },
        "index": {
          "description": "Add two vectors",
          "hierarchy": "Data Vec3",
          "module": "Data.Vec3",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "simple-vec3",
          "signature": "v-\u003ev-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtract two vectors.\n\u003c/p\u003e",
          "module": "Data.Vec3",
          "name": "(\u003c-\u003e)",
          "package": "simple-vec3",
          "signature": "v -\u003e v -\u003e v",
          "source": "src/Data-Vec3-Class.html#%3C-%3E",
          "type": "method"
        },
        "index": {
          "description": "Subtract two vectors",
          "hierarchy": "Data Vec3",
          "module": "Data.Vec3",
          "name": "(\u003c-\u003e) \u003c-\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "simple-vec3",
          "signature": "v-\u003ev-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3.html#v:-60--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCross product.\n\u003c/p\u003e",
          "module": "Data.Vec3",
          "name": "(\u003e\u003c)",
          "package": "simple-vec3",
          "signature": "v -\u003e v -\u003e v",
          "source": "src/Data-Vec3-Class.html#%3E%3C",
          "type": "method"
        },
        "index": {
          "description": "Cross product",
          "hierarchy": "Data Vec3",
          "module": "Data.Vec3",
          "name": "(\u003e\u003c) \u003e\u003c",
          "normalized": "a-\u003ea-\u003ea",
          "package": "simple-vec3",
          "signature": "v-\u003ev-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3.html#v:-62--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDot product.\n\u003c/p\u003e",
          "module": "Data.Vec3",
          "name": "(.*)",
          "package": "simple-vec3",
          "signature": "v -\u003e v -\u003e Double",
          "source": "src/Data-Vec3-Class.html#.%2A",
          "type": "method"
        },
        "index": {
          "description": "Dot product",
          "hierarchy": "Data Vec3",
          "module": "Data.Vec3",
          "name": "(.*) .*",
          "normalized": "a-\u003ea-\u003eDouble",
          "package": "simple-vec3",
          "signature": "v-\u003ev-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3.html#v:.-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale a vector.\n\u003c/p\u003e",
          "module": "Data.Vec3",
          "name": "(.^)",
          "package": "simple-vec3",
          "signature": "v -\u003e Double -\u003e v",
          "source": "src/Data-Vec3-Class.html#.%5E",
          "type": "method"
        },
        "index": {
          "description": "Scale vector",
          "hierarchy": "Data Vec3",
          "module": "Data.Vec3",
          "name": "(.^) .^",
          "normalized": "a-\u003eDouble-\u003ea",
          "package": "simple-vec3",
          "signature": "v-\u003eDouble-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3.html#v:.-94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd two matrices.\n\u003c/p\u003e",
          "module": "Data.Vec3",
          "name": "addM",
          "package": "simple-vec3",
          "signature": "Matrix v -\u003e Matrix v -\u003e Matrix v",
          "source": "src/Data-Vec3-Class.html#addM",
          "type": "method"
        },
        "index": {
          "description": "Add two matrices",
          "hierarchy": "Data Vec3",
          "module": "Data.Vec3",
          "name": "addM",
          "normalized": "Matrix a-\u003eMatrix a-\u003eMatrix a",
          "package": "simple-vec3",
          "signature": "Matrix v-\u003eMatrix v-\u003eMatrix v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3.html#v:addM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a diagonal matrix from a number \u003ccode\u003ed\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n [ d  0  0 ]\n [         ]\n [ 0  d  0 ]\n [         ]\n [ 0  0  d ]\n\u003c/pre\u003e",
          "module": "Data.Vec3",
          "name": "diag",
          "package": "simple-vec3",
          "signature": "Double -\u003e Matrix v",
          "source": "src/Data-Vec3-Class.html#diag",
          "type": "method"
        },
        "index": {
          "description": "Build diagonal matrix from number",
          "hierarchy": "Data Vec3",
          "module": "Data.Vec3",
          "name": "diag",
          "normalized": "Double-\u003eMatrix a",
          "package": "simple-vec3",
          "signature": "Double-\u003eMatrix v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3.html#v:diag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistance between two points.\n\u003c/p\u003e",
          "module": "Data.Vec3",
          "name": "distance",
          "package": "simple-vec3",
          "signature": "v -\u003e v -\u003e Double",
          "source": "src/Data-Vec3-Class.html#distance",
          "type": "method"
        },
        "index": {
          "description": "Distance between two points",
          "hierarchy": "Data Vec3",
          "module": "Data.Vec3",
          "name": "distance",
          "normalized": "a-\u003ea-\u003eDouble",
          "package": "simple-vec3",
          "signature": "v-\u003ev-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3.html#v:distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric vector dot product.\n\u003c/p\u003e\u003cp\u003eMultiply the transpose of the first vector by the given matrix,\n then multiply the result by the second vector.\n\u003c/p\u003e\u003cpre\u003e\n                     [ a11  a12  a13 ]   [ v2x ]\n                     [               ]   [     ]\n [ v1x  v1y  v1z ] . [ a21  a22  a23 ] . [ v2y ] = s\n                     [               ]   [     ]\n                     [ a31  a32  a33 ]   [ v2z ]\n\u003c/pre\u003e",
          "module": "Data.Vec3",
          "name": "dotM",
          "package": "simple-vec3",
          "signature": "v -\u003e v -\u003e Matrix v -\u003e Double",
          "source": "src/Data-Vec3-Class.html#dotM",
          "type": "method"
        },
        "index": {
          "description": "Generic vector dot product Multiply the transpose of the first vector by the given matrix then multiply the result by the second vector a11 a12 a13 v2x v1x v1y v1z a21 a22 a23 v2y a31 a32 a33 v2z",
          "hierarchy": "Data Vec3",
          "module": "Data.Vec3",
          "name": "dotM",
          "normalized": "a-\u003ea-\u003eMatrix a-\u003eDouble",
          "package": "simple-vec3",
          "signature": "v-\u003ev-\u003eMatrix v-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3.html#v:dotM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new matrix from rows.\n\u003c/p\u003e",
          "module": "Data.Vec3",
          "name": "fromRows",
          "package": "simple-vec3",
          "signature": "(v, v, v) -\u003e Matrix v",
          "source": "src/Data-Vec3-Class.html#fromRows",
          "type": "method"
        },
        "index": {
          "description": "Construct new matrix from rows",
          "hierarchy": "Data Vec3",
          "module": "Data.Vec3",
          "name": "fromRows",
          "normalized": "(a,a,a)-\u003eMatrix a",
          "package": "simple-vec3",
          "partial": "Rows",
          "signature": "(v,v,v)-\u003eMatrix v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3.html#v:fromRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new vector from components.\n\u003c/p\u003e",
          "module": "Data.Vec3",
          "name": "fromXYZ",
          "package": "simple-vec3",
          "signature": "(Double, Double, Double) -\u003e v",
          "source": "src/Data-Vec3-Class.html#fromXYZ",
          "type": "method"
        },
        "index": {
          "description": "Construct new vector from components",
          "hierarchy": "Data Vec3",
          "module": "Data.Vec3",
          "name": "fromXYZ",
          "normalized": "(Double,Double,Double)-\u003ea",
          "package": "simple-vec3",
          "partial": "XYZ",
          "signature": "(Double,Double,Double)-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3.html#v:fromXYZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvert the direction of a vector.\n\u003c/p\u003e",
          "module": "Data.Vec3",
          "name": "invert",
          "package": "simple-vec3",
          "signature": "v -\u003e v",
          "source": "src/Data-Vec3-Class.html#invert",
          "type": "method"
        },
        "index": {
          "description": "Invert the direction of vector",
          "hierarchy": "Data Vec3",
          "module": "Data.Vec3",
          "name": "invert",
          "normalized": "a-\u003ea",
          "package": "simple-vec3",
          "signature": "v-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3.html#v:invert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply a matrix and a vector.\n\u003c/p\u003e\u003cpre\u003e\n [ a11  a12  a13 ]   [ v2x ]   [ rx ]\n [               ]   [     ]   [    ]\n [ a21  a22  a23 ] . [ v2y ] = [ ry ]\n [               ]   [     ]   [    ]\n [ a31  a32  a33 ]   [ v2z ]   [ rz ]\n\u003c/pre\u003e",
          "module": "Data.Vec3",
          "name": "mxv",
          "package": "simple-vec3",
          "signature": "Matrix v -\u003e v -\u003e v",
          "source": "src/Data-Vec3-Class.html#mxv",
          "type": "method"
        },
        "index": {
          "description": "Multiply matrix and vector a11 a12 a13 v2x rx a21 a22 a23 v2y ry a31 a32 a33 v2z rz",
          "hierarchy": "Data Vec3",
          "module": "Data.Vec3",
          "name": "mxv",
          "normalized": "Matrix a-\u003ea-\u003ea",
          "package": "simple-vec3",
          "signature": "Matrix v-\u003ev-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3.html#v:mxv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEuclidean norm of a vector.\n\u003c/p\u003e",
          "module": "Data.Vec3",
          "name": "norm",
          "package": "simple-vec3",
          "signature": "v -\u003e Double",
          "source": "src/Data-Vec3-Class.html#norm",
          "type": "method"
        },
        "index": {
          "description": "Euclidean norm of vector",
          "hierarchy": "Data Vec3",
          "module": "Data.Vec3",
          "name": "norm",
          "normalized": "a-\u003eDouble",
          "package": "simple-vec3",
          "signature": "v-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3.html#v:norm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce unit vector with the same direction as the original\n one.\n\u003c/p\u003e",
          "module": "Data.Vec3",
          "name": "normalize",
          "package": "simple-vec3",
          "signature": "v -\u003e v",
          "source": "src/Data-Vec3-Class.html#normalize",
          "type": "method"
        },
        "index": {
          "description": "Produce unit vector with the same direction as the original one",
          "hierarchy": "Data Vec3",
          "module": "Data.Vec3",
          "name": "normalize",
          "normalized": "a-\u003ea",
          "package": "simple-vec3",
          "signature": "v-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3.html#v:normalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrigin point \u003ccode\u003e(0, 0, 0)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vec3",
          "name": "origin",
          "package": "simple-vec3",
          "signature": "v",
          "source": "src/Data-Vec3-Class.html#origin",
          "type": "method"
        },
        "index": {
          "description": "Origin point",
          "hierarchy": "Data Vec3",
          "module": "Data.Vec3",
          "name": "origin",
          "package": "simple-vec3",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3.html#v:origin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeconstruct a matrix into rows.\n\u003c/p\u003e",
          "module": "Data.Vec3",
          "name": "toRows",
          "package": "simple-vec3",
          "signature": "Matrix v -\u003e (v, v, v)",
          "source": "src/Data-Vec3-Class.html#toRows",
          "type": "method"
        },
        "index": {
          "description": "Deconstruct matrix into rows",
          "hierarchy": "Data Vec3",
          "module": "Data.Vec3",
          "name": "toRows",
          "normalized": "Matrix a-\u003e(a,a,a)",
          "package": "simple-vec3",
          "partial": "Rows",
          "signature": "Matrix v-\u003e(v,v,v)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3.html#v:toRows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeconstruct a vector into components.\n\u003c/p\u003e",
          "module": "Data.Vec3",
          "name": "toXYZ",
          "package": "simple-vec3",
          "signature": "v -\u003e (Double, Double, Double)",
          "source": "src/Data-Vec3-Class.html#toXYZ",
          "type": "method"
        },
        "index": {
          "description": "Deconstruct vector into components",
          "hierarchy": "Data Vec3",
          "module": "Data.Vec3",
          "name": "toXYZ",
          "normalized": "a-\u003e(Double,Double,Double)",
          "package": "simple-vec3",
          "partial": "XYZ",
          "signature": "v-\u003e(Double,Double,Double)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3.html#v:toXYZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranspose a vector and multiply it by another vector,\n producing a matrix.\n\u003c/p\u003e\u003cpre\u003e\n [ v1x ]                       [ r11  r12  r13 ]\n [     ]                       [               ]\n [ v1y ] . [ v2x  v2y  v2z ] = [ r21  r22  r23 ]\n [     ]                       [               ]\n [ v1z ]                       [ r31  r32  r33 ]\n\u003c/pre\u003e",
          "module": "Data.Vec3",
          "name": "vxv",
          "package": "simple-vec3",
          "signature": "v -\u003e v -\u003e Matrix v",
          "source": "src/Data-Vec3-Class.html#vxv",
          "type": "method"
        },
        "index": {
          "description": "Transpose vector and multiply it by another vector producing matrix v1x r11 r12 r13 v1y v2x v2y v2z r21 r22 r23 v1z r31 r32 r33",
          "hierarchy": "Data Vec3",
          "module": "Data.Vec3",
          "name": "vxv",
          "normalized": "a-\u003ea-\u003eMatrix a",
          "package": "simple-vec3",
          "signature": "v-\u003ev-\u003eMatrix v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3.html#v:vxv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZip two vectors elementwise.\n\u003c/p\u003e",
          "module": "Data.Vec3",
          "name": "zipWith",
          "package": "simple-vec3",
          "signature": "(Double -\u003e Double -\u003e Double) -\u003e v -\u003e v -\u003e v",
          "source": "src/Data-Vec3-Class.html#zipWith",
          "type": "method"
        },
        "index": {
          "description": "Zip two vectors elementwise",
          "hierarchy": "Data Vec3",
          "module": "Data.Vec3",
          "name": "zipWith",
          "normalized": "(Double-\u003eDouble-\u003eDouble)-\u003ea-\u003ea-\u003ea",
          "package": "simple-vec3",
          "partial": "With",
          "signature": "(Double-\u003eDouble-\u003eDouble)-\u003ev-\u003ev-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-vec3/docs/Data-Vec3.html#v:zipWith"
      }
    }
  ]
]