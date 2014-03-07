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
        "word": "GLUtil"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for filling \u003ccode\u003e\u003ca\u003eBufferObject\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.GLUtil.BufferObjects",
          "name": "BufferObjects",
          "package": "GLUtil",
          "source": "src/Graphics-GLUtil-BufferObjects.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for filling BufferObject",
          "hierarchy": "Graphics GLUtil BufferObjects",
          "module": "Graphics.GLUtil.BufferObjects",
          "name": "BufferObjects",
          "package": "GLUtil",
          "partial": "Buffer Objects",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-BufferObjects.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for things we know how to serialize into an OpenGL\n buffer.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.BufferObjects",
          "name": "BufferSource",
          "package": "GLUtil",
          "source": "src/Graphics-GLUtil-BufferObjects.html#BufferSource",
          "type": "class"
        },
        "index": {
          "description": "class for things we know how to serialize into an OpenGL buffer",
          "hierarchy": "Graphics GLUtil BufferObjects",
          "module": "Graphics.GLUtil.BufferObjects",
          "name": "BufferSource",
          "package": "GLUtil",
          "partial": "Buffer Source",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-BufferObjects.html#t:BufferSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eElementArrayBuffer\u003c/a\u003e\u003c/code\u003e from a source of \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.BufferObjects",
          "name": "bufferIndices",
          "package": "GLUtil",
          "signature": "v Word32 -\u003e IO BufferObject",
          "source": "src/Graphics-GLUtil-BufferObjects.html#bufferIndices",
          "type": "function"
        },
        "index": {
          "description": "Create an ElementArrayBuffer from source of Word32",
          "hierarchy": "Graphics GLUtil BufferObjects",
          "module": "Graphics.GLUtil.BufferObjects",
          "name": "bufferIndices",
          "normalized": "a Word-\u003eIO BufferObject",
          "package": "GLUtil",
          "partial": "Indices",
          "signature": "v Word-\u003eIO BufferObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-BufferObjects.html#v:bufferIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill a buffer with a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.BufferObjects",
          "name": "fromByteString",
          "package": "GLUtil",
          "signature": "BufferTarget -\u003e ByteString -\u003e IO BufferObject",
          "source": "src/Graphics-GLUtil-BufferObjects.html#fromByteString",
          "type": "function"
        },
        "index": {
          "description": "Fill buffer with ByteString",
          "hierarchy": "Graphics GLUtil BufferObjects",
          "module": "Graphics.GLUtil.BufferObjects",
          "name": "fromByteString",
          "normalized": "BufferTarget-\u003eByteString-\u003eIO BufferObject",
          "package": "GLUtil",
          "partial": "Byte String",
          "signature": "BufferTarget-\u003eByteString-\u003eIO BufferObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-BufferObjects.html#v:fromByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill a buffer with data from a \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e. The application\n \u003ccode\u003efromForeignPtr target len fptr\u003c/code\u003e fills a \u003ccode\u003etarget\u003c/code\u003e \u003ccode\u003e\u003ca\u003eBufferTarget\u003c/a\u003e\u003c/code\u003e\n with \u003ccode\u003elen\u003c/code\u003e elements starting from \u003ccode\u003efptr\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.BufferObjects",
          "name": "fromForeignPtr",
          "package": "GLUtil",
          "signature": "BufferTarget -\u003e Int -\u003e ForeignPtr a -\u003e IO BufferObject",
          "source": "src/Graphics-GLUtil-BufferObjects.html#fromForeignPtr",
          "type": "function"
        },
        "index": {
          "description": "Fill buffer with data from ForeignPtr The application fromForeignPtr target len fptr fills target BufferTarget with len elements starting from fptr",
          "hierarchy": "Graphics GLUtil BufferObjects",
          "module": "Graphics.GLUtil.BufferObjects",
          "name": "fromForeignPtr",
          "normalized": "BufferTarget-\u003eInt-\u003eForeignPtr a-\u003eIO BufferObject",
          "package": "GLUtil",
          "partial": "Foreign Ptr",
          "signature": "BufferTarget-\u003eInt-\u003eForeignPtr a-\u003eIO BufferObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-BufferObjects.html#v:fromForeignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate and fill a \u003ccode\u003e\u003ca\u003eBufferObject\u003c/a\u003e\u003c/code\u003e with the given number of bytes\n from the supplied pointer.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.BufferObjects",
          "name": "fromPtr",
          "package": "GLUtil",
          "signature": "BufferTarget -\u003e Int -\u003e Ptr a -\u003e IO BufferObject",
          "source": "src/Graphics-GLUtil-BufferObjects.html#fromPtr",
          "type": "function"
        },
        "index": {
          "description": "Allocate and fill BufferObject with the given number of bytes from the supplied pointer",
          "hierarchy": "Graphics GLUtil BufferObjects",
          "module": "Graphics.GLUtil.BufferObjects",
          "name": "fromPtr",
          "normalized": "BufferTarget-\u003eInt-\u003ePtr a-\u003eIO BufferObject",
          "package": "GLUtil",
          "partial": "Ptr",
          "signature": "BufferTarget-\u003eInt-\u003ePtr a-\u003eIO BufferObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-BufferObjects.html#v:fromPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GLUtil.BufferObjects",
          "name": "fromSource",
          "package": "GLUtil",
          "signature": "BufferTarget -\u003e v -\u003e IO BufferObject",
          "source": "src/Graphics-GLUtil-BufferObjects.html#fromSource",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics GLUtil BufferObjects",
          "module": "Graphics.GLUtil.BufferObjects",
          "name": "fromSource",
          "normalized": "BufferTarget-\u003ea-\u003eIO BufferObject",
          "package": "GLUtil",
          "partial": "Source",
          "signature": "BufferTarget-\u003ev-\u003eIO BufferObject",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-BufferObjects.html#v:fromSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill a buffer with data from a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.BufferObjects",
          "name": "fromVector",
          "package": "GLUtil",
          "signature": "BufferTarget -\u003e Vector a -\u003e IO BufferObject",
          "source": "src/Graphics-GLUtil-BufferObjects.html#fromVector",
          "type": "function"
        },
        "index": {
          "description": "Fill buffer with data from Vector",
          "hierarchy": "Graphics GLUtil BufferObjects",
          "module": "Graphics.GLUtil.BufferObjects",
          "name": "fromVector",
          "normalized": "BufferTarget-\u003eVector a-\u003eIO BufferObject",
          "package": "GLUtil",
          "partial": "Vector",
          "signature": "BufferTarget-\u003eVector a-\u003eIO BufferObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-BufferObjects.html#v:fromVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate and fill a \u003ccode\u003e\u003ca\u003eBufferObject\u003c/a\u003e\u003c/code\u003e from a list of \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.BufferObjects",
          "name": "makeBuffer",
          "package": "GLUtil",
          "signature": "BufferTarget -\u003e [a] -\u003e IO BufferObject",
          "source": "src/Graphics-GLUtil-BufferObjects.html#makeBuffer",
          "type": "function"
        },
        "index": {
          "description": "Allocate and fill BufferObject from list of Storable",
          "hierarchy": "Graphics GLUtil BufferObjects",
          "module": "Graphics.GLUtil.BufferObjects",
          "name": "makeBuffer",
          "normalized": "BufferTarget-\u003e[a]-\u003eIO BufferObject",
          "package": "GLUtil",
          "partial": "Buffer",
          "signature": "BufferTarget-\u003e[a]-\u003eIO BufferObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-BufferObjects.html#v:makeBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate and fill a \u003ccode\u003e\u003ca\u003eBufferObject\u003c/a\u003e\u003c/code\u003e from a list of \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003es\n whose length is explicitly given. This is useful when the list is\n of known length, as it avoids a traversal to find the length.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.BufferObjects",
          "name": "makeBufferLen",
          "package": "GLUtil",
          "signature": "BufferTarget -\u003e Int -\u003e [a] -\u003e IO BufferObject",
          "source": "src/Graphics-GLUtil-BufferObjects.html#makeBufferLen",
          "type": "function"
        },
        "index": {
          "description": "Allocate and fill BufferObject from list of Storable whose length is explicitly given This is useful when the list is of known length as it avoids traversal to find the length",
          "hierarchy": "Graphics GLUtil BufferObjects",
          "module": "Graphics.GLUtil.BufferObjects",
          "name": "makeBufferLen",
          "normalized": "BufferTarget-\u003eInt-\u003e[a]-\u003eIO BufferObject",
          "package": "GLUtil",
          "partial": "Buffer Len",
          "signature": "BufferTarget-\u003eInt-\u003e[a]-\u003eIO BufferObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-BufferObjects.html#v:makeBufferLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA zero-offset \u003ccode\u003e\u003ca\u003ePtr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.BufferObjects",
          "name": "offset0",
          "package": "GLUtil",
          "signature": "Ptr a",
          "source": "src/Graphics-GLUtil-BufferObjects.html#offset0",
          "type": "function"
        },
        "index": {
          "description": "zero-offset Ptr",
          "hierarchy": "Graphics GLUtil BufferObjects",
          "module": "Graphics.GLUtil.BufferObjects",
          "name": "offset0",
          "package": "GLUtil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-BufferObjects.html#v:offset0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a \u003ccode\u003e\u003ca\u003ePtr\u003c/a\u003e\u003c/code\u003e value to be used as an offset of the given number\n of bytes.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.BufferObjects",
          "name": "offsetPtr",
          "package": "GLUtil",
          "signature": "Int -\u003e Ptr a",
          "source": "src/Graphics-GLUtil-BufferObjects.html#offsetPtr",
          "type": "function"
        },
        "index": {
          "description": "Produce Ptr value to be used as an offset of the given number of bytes",
          "hierarchy": "Graphics GLUtil BufferObjects",
          "module": "Graphics.GLUtil.BufferObjects",
          "name": "offsetPtr",
          "normalized": "Int-\u003ePtr a",
          "package": "GLUtil",
          "partial": "Ptr",
          "signature": "Int-\u003ePtr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-BufferObjects.html#v:offsetPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ereplaceBuffer target elements\u003c/code\u003e replaces the buffer data attached\n to the buffer object currently bound to \u003ccode\u003etarget\u003c/code\u003e with the supplied\n list. Any previous data is deleted.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.BufferObjects",
          "name": "replaceBuffer",
          "package": "GLUtil",
          "signature": "BufferTarget -\u003e [a] -\u003e IO ()",
          "source": "src/Graphics-GLUtil-BufferObjects.html#replaceBuffer",
          "type": "function"
        },
        "index": {
          "description": "replaceBuffer target elements replaces the buffer data attached to the buffer object currently bound to target with the supplied list Any previous data is deleted",
          "hierarchy": "Graphics GLUtil BufferObjects",
          "module": "Graphics.GLUtil.BufferObjects",
          "name": "replaceBuffer",
          "normalized": "BufferTarget-\u003e[a]-\u003eIO()",
          "package": "GLUtil",
          "partial": "Buffer",
          "signature": "BufferTarget-\u003e[a]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-BufferObjects.html#v:replaceBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ereplaceVector target v\u003c/code\u003e replaces the buffer data attached to the\n buffer object currently bound to \u003ccode\u003etarget\u003c/code\u003e with the supplied\n \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e. Any previous data is deleted.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.BufferObjects",
          "name": "replaceVector",
          "package": "GLUtil",
          "signature": "BufferTarget -\u003e Vector a -\u003e IO ()",
          "source": "src/Graphics-GLUtil-BufferObjects.html#replaceVector",
          "type": "function"
        },
        "index": {
          "description": "replaceVector target replaces the buffer data attached to the buffer object currently bound to target with the supplied Vector Any previous data is deleted",
          "hierarchy": "Graphics GLUtil BufferObjects",
          "module": "Graphics.GLUtil.BufferObjects",
          "name": "replaceVector",
          "normalized": "BufferTarget-\u003eVector a-\u003eIO()",
          "package": "GLUtil",
          "partial": "Vector",
          "signature": "BufferTarget-\u003eVector a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-BufferObjects.html#v:replaceVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA camera designed for 2D viewing. The camera may be translated\n perpendicular to its view direction, or rolled about its view\n direction.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.GLUtil.Camera2D",
          "name": "Camera2D",
          "package": "GLUtil",
          "source": "src/Graphics-GLUtil-Camera2D.html",
          "type": "module"
        },
        "index": {
          "description": "camera designed for viewing The camera may be translated perpendicular to its view direction or rolled about its view direction",
          "hierarchy": "Graphics GLUtil Camera2D",
          "module": "Graphics.GLUtil.Camera2D",
          "name": "Camera2D",
          "package": "GLUtil",
          "partial": "Camera",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera2D.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eCamera\u003c/a\u003e\u003c/code\u003e may be translated and rotated to provide a coordinate\n frame into which 3D points may be transformed.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Camera2D",
          "name": "Camera",
          "package": "GLUtil",
          "source": "src/Graphics-GLUtil-Camera3D.html#Camera",
          "type": "data"
        },
        "index": {
          "description": "Camera may be translated and rotated to provide coordinate frame into which points may be transformed",
          "hierarchy": "Graphics GLUtil Camera2D",
          "module": "Graphics.GLUtil.Camera2D",
          "name": "Camera",
          "package": "GLUtil",
          "partial": "Camera",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera2D.html#t:Camera"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.GLUtil.Camera2D\",\"Graphics.GLUtil.Camera3D\"]",
          "name": "Camera",
          "package": "GLUtil",
          "signature": "Camera",
          "source": "src/Graphics-GLUtil-Camera3D.html#Camera",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera2D.html#v:Camera\",\"http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera3D.html#v:Camera\"]"
        },
        "index": {
          "hierarchy": "Graphics GLUtil Camera2D",
          "module": "Graphics.GLUtil.Camera2D",
          "name": "Camera",
          "package": "GLUtil",
          "partial": "Camera",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera2D.html#v:Camera"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a matrix that transforms homogenous 2D points into the\n camera's coordinate frame.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Camera2D",
          "name": "camMatrix",
          "package": "GLUtil",
          "signature": "Camera a -\u003e M33 a",
          "source": "src/Graphics-GLUtil-Camera2D.html#camMatrix",
          "type": "function"
        },
        "index": {
          "description": "Produce matrix that transforms homogenous points into the camera coordinate frame",
          "hierarchy": "Graphics GLUtil Camera2D",
          "module": "Graphics.GLUtil.Camera2D",
          "name": "camMatrix",
          "normalized": "Camera a-\u003eM a",
          "package": "GLUtil",
          "partial": "Matrix",
          "signature": "Camera a-\u003eM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera2D.html#v:camMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize a camera for 2D rendering.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Camera2D",
          "name": "camera2D",
          "package": "GLUtil",
          "signature": "Camera a",
          "source": "src/Graphics-GLUtil-Camera2D.html#camera2D",
          "type": "function"
        },
        "index": {
          "description": "Initialize camera for rendering",
          "hierarchy": "Graphics GLUtil Camera2D",
          "module": "Graphics.GLUtil.Camera2D",
          "name": "camera2D",
          "package": "GLUtil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera2D.html#v:camera2D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert degrees to radians.\n\u003c/p\u003e",
          "module": "[\"Graphics.GLUtil.Camera2D\",\"Graphics.GLUtil.Camera3D\"]",
          "name": "deg2rad",
          "package": "GLUtil",
          "signature": "a -\u003e a",
          "source": "src/Graphics-GLUtil-Camera3D.html#deg2rad",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera2D.html#v:deg2rad\",\"http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera3D.html#v:deg2rad\"]"
        },
        "index": {
          "description": "Convert degrees to radians",
          "hierarchy": "Graphics GLUtil Camera2D",
          "module": "Graphics.GLUtil.Camera2D",
          "name": "deg2rad",
          "normalized": "a-\u003ea",
          "package": "GLUtil",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera2D.html#v:deg2rad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.GLUtil.Camera2D\",\"Graphics.GLUtil.Camera3D\"]",
          "name": "forward",
          "package": "GLUtil",
          "signature": "V3 a",
          "source": "src/Graphics-GLUtil-Camera3D.html#Camera",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera2D.html#v:forward\",\"http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera3D.html#v:forward\"]"
        },
        "index": {
          "hierarchy": "Graphics GLUtil Camera2D",
          "module": "Graphics.GLUtil.Camera2D",
          "name": "forward",
          "package": "GLUtil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera2D.html#v:forward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.GLUtil.Camera2D\",\"Graphics.GLUtil.Camera3D\"]",
          "name": "location",
          "package": "GLUtil",
          "signature": "V3 a",
          "source": "src/Graphics-GLUtil-Camera3D.html#Camera",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera2D.html#v:location\",\"http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera3D.html#v:location\"]"
        },
        "index": {
          "hierarchy": "Graphics GLUtil Camera2D",
          "module": "Graphics.GLUtil.Camera2D",
          "name": "location",
          "package": "GLUtil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera2D.html#v:location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.GLUtil.Camera2D\",\"Graphics.GLUtil.Camera3D\"]",
          "name": "orientation",
          "package": "GLUtil",
          "signature": "Quaternion a",
          "source": "src/Graphics-GLUtil-Camera3D.html#Camera",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera2D.html#v:orientation\",\"http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera3D.html#v:orientation\"]"
        },
        "index": {
          "hierarchy": "Graphics GLUtil Camera2D",
          "module": "Graphics.GLUtil.Camera2D",
          "name": "orientation",
          "package": "GLUtil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera2D.html#v:orientation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.GLUtil.Camera2D\",\"Graphics.GLUtil.Camera3D\"]",
          "name": "rightward",
          "package": "GLUtil",
          "signature": "V3 a",
          "source": "src/Graphics-GLUtil-Camera3D.html#Camera",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera2D.html#v:rightward\",\"http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera3D.html#v:rightward\"]"
        },
        "index": {
          "hierarchy": "Graphics GLUtil Camera2D",
          "module": "Graphics.GLUtil.Camera2D",
          "name": "rightward",
          "package": "GLUtil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera2D.html#v:rightward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoll a camera view about its view direction by an angle given in\n degrees.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Camera2D",
          "name": "roll",
          "package": "GLUtil",
          "signature": "a -\u003e Camera a -\u003e Camera a",
          "source": "src/Graphics-GLUtil-Camera2D.html#roll",
          "type": "function"
        },
        "index": {
          "description": "Roll camera view about its view direction by an angle given in degrees",
          "hierarchy": "Graphics GLUtil Camera2D",
          "module": "Graphics.GLUtil.Camera2D",
          "name": "roll",
          "normalized": "a-\u003eCamera a-\u003eCamera a",
          "package": "GLUtil",
          "signature": "a-\u003eCamera a-\u003eCamera a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera2D.html#v:roll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoll a camera view about its view direction by an angle given in\n radians.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Camera2D",
          "name": "rollRad",
          "package": "GLUtil",
          "signature": "a -\u003e Camera a -\u003e Camera a",
          "source": "src/Graphics-GLUtil-Camera2D.html#rollRad",
          "type": "function"
        },
        "index": {
          "description": "Roll camera view about its view direction by an angle given in radians",
          "hierarchy": "Graphics GLUtil Camera2D",
          "module": "Graphics.GLUtil.Camera2D",
          "name": "rollRad",
          "normalized": "a-\u003eCamera a-\u003eCamera a",
          "package": "GLUtil",
          "partial": "Rad",
          "signature": "a-\u003eCamera a-\u003eCamera a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera2D.html#v:rollRad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove the camera side-to-side or up-and-down as in a tracking shot.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Camera2D",
          "name": "track",
          "package": "GLUtil",
          "signature": "V2 a -\u003e Camera a -\u003e Camera a",
          "source": "src/Graphics-GLUtil-Camera2D.html#track",
          "type": "function"
        },
        "index": {
          "description": "Move the camera side-to-side or up-and-down as in tracking shot",
          "hierarchy": "Graphics GLUtil Camera2D",
          "module": "Graphics.GLUtil.Camera2D",
          "name": "track",
          "normalized": "V a-\u003eCamera a-\u003eCamera a",
          "package": "GLUtil",
          "signature": "V a-\u003eCamera a-\u003eCamera a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera2D.html#v:track"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.GLUtil.Camera2D\",\"Graphics.GLUtil.Camera3D\"]",
          "name": "upward",
          "package": "GLUtil",
          "signature": "V3 a",
          "source": "src/Graphics-GLUtil-Camera3D.html#Camera",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera2D.html#v:upward\",\"http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera3D.html#v:upward\"]"
        },
        "index": {
          "hierarchy": "Graphics GLUtil Camera2D",
          "module": "Graphics.GLUtil.Camera2D",
          "name": "upward",
          "package": "GLUtil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera2D.html#v:upward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eCamera\u003c/a\u003e\u003c/code\u003e represents a coordinate frame into which 3D points may\n be transformed. For rendering purposes, it is often helpful to\n combine a transformation matrix computed from a \u003ccode\u003e\u003ca\u003eCamera\u003c/a\u003e\u003c/code\u003e by\n \u003ccode\u003e\u003ca\u003ecamMatrix\u003c/a\u003e\u003c/code\u003e -- that transforms points into the camera's coordinate\n frame -- with a perspective projection matrix, as created by\n \u003ccode\u003e\u003ca\u003eprojectionMatrix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.GLUtil.Camera3D",
          "name": "Camera3D",
          "package": "GLUtil",
          "source": "src/Graphics-GLUtil-Camera3D.html",
          "type": "module"
        },
        "index": {
          "description": "Camera represents coordinate frame into which points may be transformed For rendering purposes it is often helpful to combine transformation matrix computed from Camera by camMatrix that transforms points into the camera coordinate frame with perspective projection matrix as created by projectionMatrix",
          "hierarchy": "Graphics GLUtil Camera3D",
          "module": "Graphics.GLUtil.Camera3D",
          "name": "Camera3D",
          "package": "GLUtil",
          "partial": "Camera",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera3D.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eCamera\u003c/a\u003e\u003c/code\u003e may be translated and rotated to provide a coordinate\n frame into which 3D points may be transformed.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Camera3D",
          "name": "Camera",
          "package": "GLUtil",
          "source": "src/Graphics-GLUtil-Camera3D.html#Camera",
          "type": "data"
        },
        "index": {
          "description": "Camera may be translated and rotated to provide coordinate frame into which points may be transformed",
          "hierarchy": "Graphics GLUtil Camera3D",
          "module": "Graphics.GLUtil.Camera3D",
          "name": "Camera",
          "package": "GLUtil",
          "partial": "Camera",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera3D.html#t:Camera"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a transformation matrix from a \u003ccode\u003e\u003ca\u003eCamera\u003c/a\u003e\u003c/code\u003e. This matrix\n transforms homogenous points into the camera's coordinate frame.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Camera3D",
          "name": "camMatrix",
          "package": "GLUtil",
          "signature": "Camera a -\u003e M44 a",
          "source": "src/Graphics-GLUtil-Camera3D.html#camMatrix",
          "type": "function"
        },
        "index": {
          "description": "Produce transformation matrix from Camera This matrix transforms homogenous points into the camera coordinate frame",
          "hierarchy": "Graphics GLUtil Camera3D",
          "module": "Graphics.GLUtil.Camera3D",
          "name": "camMatrix",
          "normalized": "Camera a-\u003eM a",
          "package": "GLUtil",
          "partial": "Matrix",
          "signature": "Camera a-\u003eM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera3D.html#v:camMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate a camera's position by the given vector.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Camera3D",
          "name": "dolly",
          "package": "GLUtil",
          "signature": "V3 a -\u003e Camera a -\u003e Camera a",
          "source": "src/Graphics-GLUtil-Camera3D.html#dolly",
          "type": "function"
        },
        "index": {
          "description": "Translate camera position by the given vector",
          "hierarchy": "Graphics GLUtil Camera3D",
          "module": "Graphics.GLUtil.Camera3D",
          "name": "dolly",
          "normalized": "V a-\u003eCamera a-\u003eCamera a",
          "package": "GLUtil",
          "signature": "V a-\u003eCamera a-\u003eCamera a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera3D.html#v:dolly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA camera at the origin with its up-axis coincident with the\n positive Y axis. This is the convention used by \u003ca\u003efirst-person\n shooter\u003c/a\u003e (fps) video games.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Camera3D",
          "name": "fpsCamera",
          "package": "GLUtil",
          "signature": "Camera a",
          "source": "src/Graphics-GLUtil-Camera3D.html#fpsCamera",
          "type": "function"
        },
        "index": {
          "description": "camera at the origin with its up-axis coincident with the positive axis This is the convention used by first-person shooter fps video games",
          "hierarchy": "Graphics GLUtil Camera3D",
          "module": "Graphics.GLUtil.Camera3D",
          "name": "fpsCamera",
          "package": "GLUtil",
          "partial": "Camera",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera3D.html#v:fpsCamera"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePan a camera view (turn side-to-side) by an angle given in\n degrees. Panning is about the world's up-axis as captured by the\n initial camera state (e.g. the positive Y axis for \u003ccode\u003e\u003ca\u003efpsCamera\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Camera3D",
          "name": "pan",
          "package": "GLUtil",
          "signature": "a -\u003e Camera a -\u003e Camera a",
          "source": "src/Graphics-GLUtil-Camera3D.html#pan",
          "type": "function"
        },
        "index": {
          "description": "Pan camera view turn side-to-side by an angle given in degrees Panning is about the world up-axis as captured by the initial camera state e.g the positive axis for fpsCamera",
          "hierarchy": "Graphics GLUtil Camera3D",
          "module": "Graphics.GLUtil.Camera3D",
          "name": "pan",
          "normalized": "a-\u003eCamera a-\u003eCamera a",
          "package": "GLUtil",
          "signature": "a-\u003eCamera a-\u003eCamera a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera3D.html#v:pan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePan a camera view (turn side-to-side) by an angle given in\n radians. Panning is about the world's up-axis as captured by the\n initial camera state (e.g. the positive Y axis for \u003ccode\u003e\u003ca\u003efpsCamera\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Camera3D",
          "name": "panRad",
          "package": "GLUtil",
          "signature": "a -\u003e Camera a -\u003e Camera a",
          "source": "src/Graphics-GLUtil-Camera3D.html#panRad",
          "type": "function"
        },
        "index": {
          "description": "Pan camera view turn side-to-side by an angle given in radians Panning is about the world up-axis as captured by the initial camera state e.g the positive axis for fpsCamera",
          "hierarchy": "Graphics GLUtil Camera3D",
          "module": "Graphics.GLUtil.Camera3D",
          "name": "panRad",
          "normalized": "a-\u003eCamera a-\u003eCamera a",
          "package": "GLUtil",
          "partial": "Rad",
          "signature": "a-\u003eCamera a-\u003eCamera a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera3D.html#v:panRad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eprojectionMatrix fov aspect near far\u003c/code\u003e produces a perspective\n projection matrix with the specified vertical field of view (FOV),\n given in radians, aspect ratio, and near and far clipping planes.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Camera3D",
          "name": "projectionMatrix",
          "package": "GLUtil",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e M44 a",
          "source": "src/Graphics-GLUtil-Camera3D.html#projectionMatrix",
          "type": "function"
        },
        "index": {
          "description": "projectionMatrix fov aspect near far produces perspective projection matrix with the specified vertical field of view FOV given in radians aspect ratio and near and far clipping planes",
          "hierarchy": "Graphics GLUtil Camera3D",
          "module": "Graphics.GLUtil.Camera3D",
          "name": "projectionMatrix",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003eM a",
          "package": "GLUtil",
          "partial": "Matrix",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003eM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera3D.html#v:projectionMatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoll a camera view about its view direction by an angle given in\n degrees. Rolling is about the camera's forward axis (e.g. the\n negative Z axis for \u003ccode\u003e\u003ca\u003efpsCamera\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Camera3D",
          "name": "roll",
          "package": "GLUtil",
          "signature": "a -\u003e Camera a -\u003e Camera a",
          "source": "src/Graphics-GLUtil-Camera3D.html#roll",
          "type": "function"
        },
        "index": {
          "description": "Roll camera view about its view direction by an angle given in degrees Rolling is about the camera forward axis e.g the negative axis for fpsCamera",
          "hierarchy": "Graphics GLUtil Camera3D",
          "module": "Graphics.GLUtil.Camera3D",
          "name": "roll",
          "normalized": "a-\u003eCamera a-\u003eCamera a",
          "package": "GLUtil",
          "signature": "a-\u003eCamera a-\u003eCamera a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera3D.html#v:roll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoll a camera view about its view direction by an angle given in\n radians. Rolling is about the camera's forward axis (e.g. the\n negative Z axis for \u003ccode\u003e\u003ca\u003efpsCamera\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Camera3D",
          "name": "rollRad",
          "package": "GLUtil",
          "signature": "a -\u003e Camera a -\u003e Camera a",
          "source": "src/Graphics-GLUtil-Camera3D.html#rollRad",
          "type": "function"
        },
        "index": {
          "description": "Roll camera view about its view direction by an angle given in radians Rolling is about the camera forward axis e.g the negative axis for fpsCamera",
          "hierarchy": "Graphics GLUtil Camera3D",
          "module": "Graphics.GLUtil.Camera3D",
          "name": "rollRad",
          "normalized": "a-\u003eCamera a-\u003eCamera a",
          "package": "GLUtil",
          "partial": "Rad",
          "signature": "a-\u003eCamera a-\u003eCamera a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera3D.html#v:rollRad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA camera at the origin with its up-axis coincident with the\n positive Z axis. This is the convention used by the ROS robotics\n platform.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Camera3D",
          "name": "rosCamera",
          "package": "GLUtil",
          "signature": "Camera a",
          "source": "src/Graphics-GLUtil-Camera3D.html#rosCamera",
          "type": "function"
        },
        "index": {
          "description": "camera at the origin with its up-axis coincident with the positive axis This is the convention used by the ROS robotics platform",
          "hierarchy": "Graphics GLUtil Camera3D",
          "module": "Graphics.GLUtil.Camera3D",
          "name": "rosCamera",
          "package": "GLUtil",
          "partial": "Camera",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera3D.html#v:rosCamera"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTilt a camera view (up-and-down) by an angle given in degrees.\n Tilting is about the camera's horizontal axis (e.g. the positive X\n axis for \u003ccode\u003e\u003ca\u003efpsCamera\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Camera3D",
          "name": "tilt",
          "package": "GLUtil",
          "signature": "a -\u003e Camera a -\u003e Camera a",
          "source": "src/Graphics-GLUtil-Camera3D.html#tilt",
          "type": "function"
        },
        "index": {
          "description": "Tilt camera view up-and-down by an angle given in degrees Tilting is about the camera horizontal axis e.g the positive axis for fpsCamera",
          "hierarchy": "Graphics GLUtil Camera3D",
          "module": "Graphics.GLUtil.Camera3D",
          "name": "tilt",
          "normalized": "a-\u003eCamera a-\u003eCamera a",
          "package": "GLUtil",
          "signature": "a-\u003eCamera a-\u003eCamera a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera3D.html#v:tilt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTilt a camera view (up-and-down) by an angle given in\n radians. Tilting is about the camera's horizontal axis (e.g. the\n positive X axis for \u003ccode\u003e\u003ca\u003efpsCamera\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Camera3D",
          "name": "tiltRad",
          "package": "GLUtil",
          "signature": "a -\u003e Camera a -\u003e Camera a",
          "source": "src/Graphics-GLUtil-Camera3D.html#tiltRad",
          "type": "function"
        },
        "index": {
          "description": "Tilt camera view up-and-down by an angle given in radians Tilting is about the camera horizontal axis e.g the positive axis for fpsCamera",
          "hierarchy": "Graphics GLUtil Camera3D",
          "module": "Graphics.GLUtil.Camera3D",
          "name": "tiltRad",
          "normalized": "a-\u003eCamera a-\u003eCamera a",
          "package": "GLUtil",
          "partial": "Rad",
          "signature": "a-\u003eCamera a-\u003eCamera a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Camera3D.html#v:tiltRad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimplify common drawing commands.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.GLUtil.Drawing",
          "name": "Drawing",
          "package": "GLUtil",
          "source": "src/Graphics-GLUtil-Drawing.html",
          "type": "module"
        },
        "index": {
          "description": "Simplify common drawing commands",
          "hierarchy": "Graphics GLUtil Drawing",
          "module": "Graphics.GLUtil.Drawing",
          "name": "Drawing",
          "package": "GLUtil",
          "partial": "Drawing",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Drawing.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edrawIndexedTris n\u003c/code\u003e draws \u003ccode\u003en\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTriangles\u003c/a\u003e\u003c/code\u003e using vertex data from\n the currently bound \u003ccode\u003e\u003ca\u003eArrayBuffer\u003c/a\u003e\u003c/code\u003e and indices from the beginning of\n the currently bound \u003ccode\u003e\u003ca\u003eElementArrayBuffer\u003c/a\u003e\u003c/code\u003e. Note that there must be\n at least \u003ccode\u003en * 3\u003c/code\u003e indices in the \u003ccode\u003e\u003ca\u003eElementArrayBuffer\u003c/a\u003e\u003c/code\u003e!\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Drawing",
          "name": "drawIndexedTris",
          "package": "GLUtil",
          "signature": "GLsizei -\u003e IO ()",
          "source": "src/Graphics-GLUtil-Drawing.html#drawIndexedTris",
          "type": "function"
        },
        "index": {
          "description": "drawIndexedTris draws Triangles using vertex data from the currently bound ArrayBuffer and indices from the beginning of the currently bound ElementArrayBuffer Note that there must be at least indices in the ElementArrayBuffer",
          "hierarchy": "Graphics GLUtil Drawing",
          "module": "Graphics.GLUtil.Drawing",
          "name": "drawIndexedTris",
          "normalized": "GLsizei-\u003eIO()",
          "package": "GLUtil",
          "partial": "Indexed Tris",
          "signature": "GLsizei-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Drawing.html#v:drawIndexedTris"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMiscellaneous utilities for dealing with OpenGL errors.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.GLUtil.GLError",
          "name": "GLError",
          "package": "GLUtil",
          "source": "src/Graphics-GLUtil-GLError.html",
          "type": "module"
        },
        "index": {
          "description": "Miscellaneous utilities for dealing with OpenGL errors",
          "hierarchy": "Graphics GLUtil GLError",
          "module": "Graphics.GLUtil.GLError",
          "name": "GLError",
          "package": "GLUtil",
          "partial": "GLError",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-GLError.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exception type for OpenGL errors.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.GLError",
          "name": "GLError",
          "package": "GLUtil",
          "source": "src/Graphics-GLUtil-GLError.html#GLError",
          "type": "data"
        },
        "index": {
          "description": "An exception type for OpenGL errors",
          "hierarchy": "Graphics GLUtil GLError",
          "module": "Graphics.GLUtil.GLError",
          "name": "GLError",
          "package": "GLUtil",
          "partial": "GLError",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-GLError.html#t:GLError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck OpenGL error flags and print them on \u003ccode\u003e\u003ca\u003estderr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.GLError",
          "name": "printError",
          "package": "GLUtil",
          "signature": "IO ()",
          "source": "src/Graphics-GLUtil-GLError.html#printError",
          "type": "function"
        },
        "index": {
          "description": "Check OpenGL error flags and print them on stderr",
          "hierarchy": "Graphics GLUtil GLError",
          "module": "Graphics.GLUtil.GLError",
          "name": "printError",
          "normalized": "IO()",
          "package": "GLUtil",
          "partial": "Error",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-GLError.html#v:printError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck OpenGL error flags and print them on \u003ccode\u003e\u003ca\u003estderr\u003c/a\u003e\u003c/code\u003e with the given\n message as a prefix. If there are no errors, nothing is printed.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.GLError",
          "name": "printErrorMsg",
          "package": "GLUtil",
          "signature": "String -\u003e IO ()",
          "source": "src/Graphics-GLUtil-GLError.html#printErrorMsg",
          "type": "function"
        },
        "index": {
          "description": "Check OpenGL error flags and print them on stderr with the given message as prefix If there are no errors nothing is printed",
          "hierarchy": "Graphics GLUtil GLError",
          "module": "Graphics.GLUtil.GLError",
          "name": "printErrorMsg",
          "normalized": "String-\u003eIO()",
          "package": "GLUtil",
          "partial": "Error Msg",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-GLError.html#v:printErrorMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow an exception if there is an OpenGL error.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.GLError",
          "name": "throwError",
          "package": "GLUtil",
          "signature": "IO ()",
          "source": "src/Graphics-GLUtil-GLError.html#throwError",
          "type": "function"
        },
        "index": {
          "description": "Throw an exception if there is an OpenGL error",
          "hierarchy": "Graphics GLUtil GLError",
          "module": "Graphics.GLUtil.GLError",
          "name": "throwError",
          "normalized": "IO()",
          "package": "GLUtil",
          "partial": "Error",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-GLError.html#v:throwError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow an exception if there is an OpenGL error. The exception's\n error message is prefixed with the supplied \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.GLError",
          "name": "throwErrorMsg",
          "package": "GLUtil",
          "signature": "String -\u003e IO ()",
          "source": "src/Graphics-GLUtil-GLError.html#throwErrorMsg",
          "type": "function"
        },
        "index": {
          "description": "Throw an exception if there is an OpenGL error The exception error message is prefixed with the supplied String",
          "hierarchy": "Graphics GLUtil GLError",
          "module": "Graphics.GLUtil.GLError",
          "name": "throwErrorMsg",
          "normalized": "String-\u003eIO()",
          "package": "GLUtil",
          "partial": "Error Msg",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-GLError.html#v:throwErrorMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUses the \u003ccode\u003eJuicyPixels\u003c/code\u003e package to load images that are then used\n to create OpenGL textuers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.GLUtil.JuicyTextures",
          "name": "JuicyTextures",
          "package": "GLUtil",
          "source": "src/Graphics-GLUtil-JuicyTextures.html",
          "type": "module"
        },
        "index": {
          "description": "Uses the JuicyPixels package to load images that are then used to create OpenGL textuers",
          "hierarchy": "Graphics GLUtil JuicyTextures",
          "module": "Graphics.GLUtil.JuicyTextures",
          "name": "JuicyTextures",
          "package": "GLUtil",
          "partial": "Juicy Textures",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-JuicyTextures.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a \u003ccode\u003e\u003ca\u003eTexInfo\u003c/a\u003e\u003c/code\u003e value from an image file, and supply it to a\n user-provided function. Supported image formats include \u003ccode\u003epng\u003c/code\u003e,\n \u003ccode\u003ejpeg\u003c/code\u003e, \u003ccode\u003ebmp\u003c/code\u003e, and \u003ccode\u003egif\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003ereadTexture\u003c/a\u003e\u003c/code\u003e for most uses.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.JuicyTextures",
          "name": "readTexInfo",
          "package": "GLUtil",
          "signature": "TexInfo a -\u003e IO b) -\u003e IO (Either String b)",
          "source": "src/Graphics-GLUtil-JuicyTextures.html#readTexInfo",
          "type": "function"
        },
        "index": {
          "description": "Load TexInfo value from an image file and supply it to user-provided function Supported image formats include png jpeg bmp and gif See readTexture for most uses",
          "hierarchy": "Graphics GLUtil JuicyTextures",
          "module": "Graphics.GLUtil.JuicyTextures",
          "name": "readTexInfo",
          "normalized": "TexInfo a-\u003eIO b)-\u003eIO(Either String b)",
          "package": "GLUtil",
          "partial": "Tex Info",
          "signature": "TexInfo a-\u003eIO b)-\u003eIO(Either String b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-JuicyTextures.html#v:readTexInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a \u003ccode\u003e\u003ca\u003eTextureObject\u003c/a\u003e\u003c/code\u003e from an image file. Supported formats\n include \u003ccode\u003epng\u003c/code\u003e, \u003ccode\u003ejpeg\u003c/code\u003e, \u003ccode\u003ebmp\u003c/code\u003e, and \u003ccode\u003egif\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Graphics.GLUtil.JuicyTextures\",\"Graphics.GLUtil\"]",
          "name": "readTexture",
          "package": "GLUtil",
          "signature": "FilePath -\u003e IO (Either String TextureObject)",
          "source": "src/Graphics-GLUtil-JuicyTextures.html#readTexture",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-JuicyTextures.html#v:readTexture\",\"http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil.html#v:readTexture\"]"
        },
        "index": {
          "description": "Load TextureObject from an image file Supported formats include png jpeg bmp and gif",
          "hierarchy": "Graphics GLUtil JuicyTextures",
          "module": "Graphics.GLUtil.JuicyTextures",
          "name": "readTexture",
          "normalized": "FilePath-\u003eIO(Either String TextureObject)",
          "package": "GLUtil",
          "partial": "Texture",
          "signature": "FilePath-\u003eIO(Either String TextureObject)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-JuicyTextures.html#v:readTexture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for writing \u003ca\u003eLinear\u003c/a\u003e types to uniform locations in\n shader programs.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.GLUtil.Linear",
          "name": "Linear",
          "package": "GLUtil",
          "source": "src/Graphics-GLUtil-Linear.html",
          "type": "module"
        },
        "index": {
          "description": "Support for writing Linear types to uniform locations in shader programs",
          "hierarchy": "Graphics GLUtil Linear",
          "module": "Graphics.GLUtil.Linear",
          "name": "Linear",
          "package": "GLUtil",
          "partial": "Linear",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Linear.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class for things we can write to uniform locations in\n shader programs.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Linear",
          "name": "AsUniform",
          "package": "GLUtil",
          "source": "src/Graphics-GLUtil-Linear.html#AsUniform",
          "type": "class"
        },
        "index": {
          "description": "type class for things we can write to uniform locations in shader programs",
          "hierarchy": "Graphics GLUtil Linear",
          "module": "Graphics.GLUtil.Linear",
          "name": "AsUniform",
          "package": "GLUtil",
          "partial": "As Uniform",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Linear.html#t:AsUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GLUtil.Linear",
          "name": "asUniform",
          "package": "GLUtil",
          "signature": "t -\u003e UniformLocation -\u003e IO ()",
          "source": "src/Graphics-GLUtil-Linear.html#asUniform",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics GLUtil Linear",
          "module": "Graphics.GLUtil.Linear",
          "name": "asUniform",
          "normalized": "a-\u003eUniformLocation-\u003eIO()",
          "package": "GLUtil",
          "partial": "Uniform",
          "signature": "t-\u003eUniformLocation-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Linear.html#v:asUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvenience interface for working with GLSL shader\n programs. Provides an interface for setting attributes and\n uniforms.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "ShaderProgram",
          "package": "GLUtil",
          "source": "src/Graphics-GLUtil-ShaderProgram.html",
          "type": "module"
        },
        "index": {
          "description": "Convenience interface for working with GLSL shader programs Provides an interface for setting attributes and uniforms",
          "hierarchy": "Graphics GLUtil ShaderProgram",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "ShaderProgram",
          "package": "GLUtil",
          "partial": "Shader Program",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-ShaderProgram.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of a GLSL shader program that has been compiled and\n linked.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "ShaderProgram",
          "package": "GLUtil",
          "source": "src/Graphics-GLUtil-ShaderProgram.html#ShaderProgram",
          "type": "data"
        },
        "index": {
          "description": "Representation of GLSL shader program that has been compiled and linked",
          "hierarchy": "Graphics GLUtil ShaderProgram",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "ShaderProgram",
          "package": "GLUtil",
          "partial": "Shader Program",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-ShaderProgram.html#t:ShaderProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "ShaderProgram",
          "package": "GLUtil",
          "signature": "ShaderProgram",
          "source": "src/Graphics-GLUtil-ShaderProgram.html#ShaderProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GLUtil ShaderProgram",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "ShaderProgram",
          "package": "GLUtil",
          "partial": "Shader Program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-ShaderProgram.html#v:ShaderProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "attribs",
          "package": "GLUtil",
          "signature": "Map String (AttribLocation, VariableType)",
          "source": "src/Graphics-GLUtil-ShaderProgram.html#ShaderProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GLUtil ShaderProgram",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "attribs",
          "normalized": "Map String(AttribLocation,VariableType)",
          "package": "GLUtil",
          "signature": "Map String(AttribLocation,VariableType)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-ShaderProgram.html#v:attribs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnable a named vertex attribute.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "enableAttrib",
          "package": "GLUtil",
          "signature": "ShaderProgram -\u003e String -\u003e IO ()",
          "source": "src/Graphics-GLUtil-ShaderProgram.html#enableAttrib",
          "type": "function"
        },
        "index": {
          "description": "Enable named vertex attribute",
          "hierarchy": "Graphics GLUtil ShaderProgram",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "enableAttrib",
          "normalized": "ShaderProgram-\u003eString-\u003eIO()",
          "package": "GLUtil",
          "partial": "Attrib",
          "signature": "ShaderProgram-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-ShaderProgram.html#v:enableAttrib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the \u003ccode\u003e\u003ca\u003eAttribLocation\u003c/a\u003e\u003c/code\u003e associated with a named vertex\n attribute.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "getAttrib",
          "package": "GLUtil",
          "signature": "ShaderProgram -\u003e String -\u003e AttribLocation",
          "source": "src/Graphics-GLUtil-ShaderProgram.html#getAttrib",
          "type": "function"
        },
        "index": {
          "description": "Get the AttribLocation associated with named vertex attribute",
          "hierarchy": "Graphics GLUtil ShaderProgram",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "getAttrib",
          "normalized": "ShaderProgram-\u003eString-\u003eAttribLocation",
          "package": "GLUtil",
          "partial": "Attrib",
          "signature": "ShaderProgram-\u003eString-\u003eAttribLocation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-ShaderProgram.html#v:getAttrib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the \u003ccode\u003e\u003ca\u003eUniformLocation\u003c/a\u003e\u003c/code\u003e associated with a named uniform\n parameter.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "getUniform",
          "package": "GLUtil",
          "signature": "ShaderProgram -\u003e String -\u003e UniformLocation",
          "source": "src/Graphics-GLUtil-ShaderProgram.html#getUniform",
          "type": "function"
        },
        "index": {
          "description": "Get the UniformLocation associated with named uniform parameter",
          "hierarchy": "Graphics GLUtil ShaderProgram",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "getUniform",
          "normalized": "ShaderProgram-\u003eString-\u003eUniformLocation",
          "package": "GLUtil",
          "partial": "Uniform",
          "signature": "ShaderProgram-\u003eString-\u003eUniformLocation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-ShaderProgram.html#v:getUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a \u003ccode\u003e\u003ca\u003eShaderProgram\u003c/a\u003e\u003c/code\u003e from a list of individual shader program\n files. The active attributes and uniforms in the linked program are\n recorded in the \u003ccode\u003e\u003ca\u003eShaderProgram\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "loadShaderProgram",
          "package": "GLUtil",
          "signature": "[(ShaderType, FilePath)] -\u003e IO ShaderProgram",
          "source": "src/Graphics-GLUtil-ShaderProgram.html#loadShaderProgram",
          "type": "function"
        },
        "index": {
          "description": "Load ShaderProgram from list of individual shader program files The active attributes and uniforms in the linked program are recorded in the ShaderProgram",
          "hierarchy": "Graphics GLUtil ShaderProgram",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "loadShaderProgram",
          "normalized": "[(ShaderType,FilePath)]-\u003eIO ShaderProgram",
          "package": "GLUtil",
          "partial": "Shader Program",
          "signature": "[(ShaderType,FilePath)]-\u003eIO ShaderProgram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-ShaderProgram.html#v:loadShaderProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a \u003ccode\u003e\u003ca\u003eShaderProgram\u003c/a\u003e\u003c/code\u003e from a list of individual shader program\n source strings. The active attributes and uniforms in the linked program are\n recorded in the \u003ccode\u003e\u003ca\u003eShaderProgram\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "loadShaderProgramBS",
          "package": "GLUtil",
          "signature": "[(ShaderType, ByteString)] -\u003e IO ShaderProgram",
          "source": "src/Graphics-GLUtil-ShaderProgram.html#loadShaderProgramBS",
          "type": "function"
        },
        "index": {
          "description": "Load ShaderProgram from list of individual shader program source strings The active attributes and uniforms in the linked program are recorded in the ShaderProgram",
          "hierarchy": "Graphics GLUtil ShaderProgram",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "loadShaderProgramBS",
          "normalized": "[(ShaderType,ByteString)]-\u003eIO ShaderProgram",
          "package": "GLUtil",
          "partial": "Shader Program BS",
          "signature": "[(ShaderType,ByteString)]-\u003eIO ShaderProgram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-ShaderProgram.html#v:loadShaderProgramBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "loadShaderProgramWith",
          "package": "GLUtil",
          "signature": "[(ShaderType, FilePath)] -\u003e (Program -\u003e IO ()) -\u003e IO ShaderProgram",
          "source": "src/Graphics-GLUtil-ShaderProgram.html#loadShaderProgramWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GLUtil ShaderProgram",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "loadShaderProgramWith",
          "normalized": "[(ShaderType,FilePath)]-\u003e(Program-\u003eIO())-\u003eIO ShaderProgram",
          "package": "GLUtil",
          "partial": "Shader Program With",
          "signature": "[(ShaderType,FilePath)]-\u003e(Program-\u003eIO())-\u003eIO ShaderProgram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-ShaderProgram.html#v:loadShaderProgramWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "loadShaderProgramWithBS",
          "package": "GLUtil",
          "signature": "[(ShaderType, ByteString)] -\u003e (Program -\u003e IO ()) -\u003e IO ShaderProgram",
          "source": "src/Graphics-GLUtil-ShaderProgram.html#loadShaderProgramWithBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GLUtil ShaderProgram",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "loadShaderProgramWithBS",
          "normalized": "[(ShaderType,ByteString)]-\u003e(Program-\u003eIO())-\u003eIO ShaderProgram",
          "package": "GLUtil",
          "partial": "Shader Program With BS",
          "signature": "[(ShaderType,ByteString)]-\u003e(Program-\u003eIO())-\u003eIO ShaderProgram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-ShaderProgram.html#v:loadShaderProgramWithBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "program",
          "package": "GLUtil",
          "signature": "Program",
          "source": "src/Graphics-GLUtil-ShaderProgram.html#ShaderProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GLUtil ShaderProgram",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "program",
          "package": "GLUtil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-ShaderProgram.html#v:program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a named vertex attribute's \u003ccode\u003e\u003ca\u003eIntegerHandling\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eVertexArrayDescriptor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "setAttrib",
          "package": "GLUtil",
          "signature": "ShaderProgram -\u003e String -\u003e IntegerHandling -\u003e VertexArrayDescriptor a -\u003e IO ()",
          "source": "src/Graphics-GLUtil-ShaderProgram.html#setAttrib",
          "type": "function"
        },
        "index": {
          "description": "Set named vertex attribute IntegerHandling and VertexArrayDescriptor",
          "hierarchy": "Graphics GLUtil ShaderProgram",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "setAttrib",
          "normalized": "ShaderProgram-\u003eString-\u003eIntegerHandling-\u003eVertexArrayDescriptor a-\u003eIO()",
          "package": "GLUtil",
          "partial": "Attrib",
          "signature": "ShaderProgram-\u003eString-\u003eIntegerHandling-\u003eVertexArrayDescriptor a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-ShaderProgram.html#v:setAttrib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a named uniform parameter associated with a particular shader\n program.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "setUniform",
          "package": "GLUtil",
          "signature": "ShaderProgram -\u003e String -\u003e a -\u003e IO ()",
          "source": "src/Graphics-GLUtil-ShaderProgram.html#setUniform",
          "type": "function"
        },
        "index": {
          "description": "Set named uniform parameter associated with particular shader program",
          "hierarchy": "Graphics GLUtil ShaderProgram",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "setUniform",
          "normalized": "ShaderProgram-\u003eString-\u003ea-\u003eIO()",
          "package": "GLUtil",
          "partial": "Uniform",
          "signature": "ShaderProgram-\u003eString-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-ShaderProgram.html#v:setUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a \u003ccode\u003e\u003ca\u003eShaderProgram\u003c/a\u003e\u003c/code\u003e from a vertex and fragment shader source\n files. the third argument is a tuple of the attribute names and\n uniform names that will be set in this program. If all attributes\n and uniforms are desired, consider using \u003ccode\u003e\u003ca\u003eloadShaderProgram\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "simpleShaderExplicit",
          "package": "GLUtil",
          "signature": "FilePath -\u003e FilePath -\u003e ([String], [String]) -\u003e IO ShaderProgram",
          "source": "src/Graphics-GLUtil-ShaderProgram.html#simpleShaderExplicit",
          "type": "function"
        },
        "index": {
          "description": "Load ShaderProgram from vertex and fragment shader source files the third argument is tuple of the attribute names and uniform names that will be set in this program If all attributes and uniforms are desired consider using loadShaderProgram",
          "hierarchy": "Graphics GLUtil ShaderProgram",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "simpleShaderExplicit",
          "normalized": "FilePath-\u003eFilePath-\u003e([String],[String])-\u003eIO ShaderProgram",
          "package": "GLUtil",
          "partial": "Shader Explicit",
          "signature": "FilePath-\u003eFilePath-\u003e([String],[String])-\u003eIO ShaderProgram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-ShaderProgram.html#v:simpleShaderExplicit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "simpleShaderExplicitBS",
          "package": "GLUtil",
          "signature": "ByteString -\u003e ByteString -\u003e ([String], [String]) -\u003e IO ShaderProgram",
          "source": "src/Graphics-GLUtil-ShaderProgram.html#simpleShaderExplicitBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GLUtil ShaderProgram",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "simpleShaderExplicitBS",
          "normalized": "ByteString-\u003eByteString-\u003e([String],[String])-\u003eIO ShaderProgram",
          "package": "GLUtil",
          "partial": "Shader Explicit BS",
          "signature": "ByteString-\u003eByteString-\u003e([String],[String])-\u003eIO ShaderProgram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-ShaderProgram.html#v:simpleShaderExplicitBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a \u003ccode\u003e\u003ca\u003eShaderProgram\u003c/a\u003e\u003c/code\u003e from a vertex shader source file and a\n fragment shader source file. The active attributes and uniforms in\n the linked program are recorded in the \u003ccode\u003e\u003ca\u003eShaderProgram\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "simpleShaderProgram",
          "package": "GLUtil",
          "signature": "FilePath -\u003e FilePath -\u003e IO ShaderProgram",
          "source": "src/Graphics-GLUtil-ShaderProgram.html#simpleShaderProgram",
          "type": "function"
        },
        "index": {
          "description": "Load ShaderProgram from vertex shader source file and fragment shader source file The active attributes and uniforms in the linked program are recorded in the ShaderProgram",
          "hierarchy": "Graphics GLUtil ShaderProgram",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "simpleShaderProgram",
          "normalized": "FilePath-\u003eFilePath-\u003eIO ShaderProgram",
          "package": "GLUtil",
          "partial": "Shader Program",
          "signature": "FilePath-\u003eFilePath-\u003eIO ShaderProgram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-ShaderProgram.html#v:simpleShaderProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a \u003ccode\u003e\u003ca\u003eShaderProgram\u003c/a\u003e\u003c/code\u003e from vertex and fragment shader source\n strings. The active attributes and uniforms in the linked program\n are recorded in the \u003ccode\u003e\u003ca\u003eShaderProgram\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "simpleShaderProgramBS",
          "package": "GLUtil",
          "signature": "ByteString -\u003e ByteString -\u003e IO ShaderProgram",
          "source": "src/Graphics-GLUtil-ShaderProgram.html#simpleShaderProgramBS",
          "type": "function"
        },
        "index": {
          "description": "Load ShaderProgram from vertex and fragment shader source strings The active attributes and uniforms in the linked program are recorded in the ShaderProgram",
          "hierarchy": "Graphics GLUtil ShaderProgram",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "simpleShaderProgramBS",
          "normalized": "ByteString-\u003eByteString-\u003eIO ShaderProgram",
          "package": "GLUtil",
          "partial": "Shader Program BS",
          "signature": "ByteString-\u003eByteString-\u003eIO ShaderProgram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-ShaderProgram.html#v:simpleShaderProgramBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a \u003ccode\u003e\u003ca\u003eShaderProgram\u003c/a\u003e\u003c/code\u003e from a vertex shader source file and a\n fragment shader source file. The active attributes and uniforms in\n the linked program are recorded in the \u003ccode\u003e\u003ca\u003eShaderProgram\u003c/a\u003e\u003c/code\u003e. The\n supplied \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e function is applied to the new program after shader\n objects are attached to the program, but before linking. This\n supports the use of \u003ccode\u003e\u003ca\u003ebindFragDataLocation\u003c/a\u003e\u003c/code\u003e to map fragment shader\n outputs.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "simpleShaderProgramWith",
          "package": "GLUtil",
          "signature": "FilePath -\u003e FilePath -\u003e (Program -\u003e IO ()) -\u003e IO ShaderProgram",
          "source": "src/Graphics-GLUtil-ShaderProgram.html#simpleShaderProgramWith",
          "type": "function"
        },
        "index": {
          "description": "Load ShaderProgram from vertex shader source file and fragment shader source file The active attributes and uniforms in the linked program are recorded in the ShaderProgram The supplied IO function is applied to the new program after shader objects are attached to the program but before linking This supports the use of bindFragDataLocation to map fragment shader outputs",
          "hierarchy": "Graphics GLUtil ShaderProgram",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "simpleShaderProgramWith",
          "normalized": "FilePath-\u003eFilePath-\u003e(Program-\u003eIO())-\u003eIO ShaderProgram",
          "package": "GLUtil",
          "partial": "Shader Program With",
          "signature": "FilePath-\u003eFilePath-\u003e(Program-\u003eIO())-\u003eIO ShaderProgram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-ShaderProgram.html#v:simpleShaderProgramWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a \u003ccode\u003e\u003ca\u003eShaderProgram\u003c/a\u003e\u003c/code\u003e from vertex and fragment shader source\n strings. See \u003ccode\u003e\u003ca\u003esimpleShaderProgramWith\u003c/a\u003e\u003c/code\u003e for more information.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "simpleShaderProgramWithBS",
          "package": "GLUtil",
          "signature": "ByteString -\u003e ByteString -\u003e (Program -\u003e IO ()) -\u003e IO ShaderProgram",
          "source": "src/Graphics-GLUtil-ShaderProgram.html#simpleShaderProgramWithBS",
          "type": "function"
        },
        "index": {
          "description": "Load ShaderProgram from vertex and fragment shader source strings See simpleShaderProgramWith for more information",
          "hierarchy": "Graphics GLUtil ShaderProgram",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "simpleShaderProgramWithBS",
          "normalized": "ByteString-\u003eByteString-\u003e(Program-\u003eIO())-\u003eIO ShaderProgram",
          "package": "GLUtil",
          "partial": "Shader Program With BS",
          "signature": "ByteString-\u003eByteString-\u003e(Program-\u003eIO())-\u003eIO ShaderProgram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-ShaderProgram.html#v:simpleShaderProgramWithBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "uniforms",
          "package": "GLUtil",
          "signature": "Map String (UniformLocation, VariableType)",
          "source": "src/Graphics-GLUtil-ShaderProgram.html#ShaderProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GLUtil ShaderProgram",
          "module": "Graphics.GLUtil.ShaderProgram",
          "name": "uniforms",
          "normalized": "Map String(UniformLocation,VariableType)",
          "package": "GLUtil",
          "signature": "Map String(UniformLocation,VariableType)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-ShaderProgram.html#v:uniforms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for working with fragment and vertex shader programs.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.GLUtil.Shaders",
          "name": "Shaders",
          "package": "GLUtil",
          "source": "src/Graphics-GLUtil-Shaders.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for working with fragment and vertex shader programs",
          "hierarchy": "Graphics GLUtil Shaders",
          "module": "Graphics.GLUtil.Shaders",
          "name": "Shaders",
          "package": "GLUtil",
          "partial": "Shaders",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Shaders.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLink shaders into a \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Shaders",
          "name": "linkShaderProgram",
          "package": "GLUtil",
          "signature": "[Shader] -\u003e IO Program",
          "source": "src/Graphics-GLUtil-Shaders.html#linkShaderProgram",
          "type": "function"
        },
        "index": {
          "description": "Link shaders into Program",
          "hierarchy": "Graphics GLUtil Shaders",
          "module": "Graphics.GLUtil.Shaders",
          "name": "linkShaderProgram",
          "normalized": "[Shader]-\u003eIO Program",
          "package": "GLUtil",
          "partial": "Shader Program",
          "signature": "[Shader]-\u003eIO Program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Shaders.html#v:linkShaderProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLink shaders into a \u003ccode\u003e\u003ca\u003eProgram\u003c/a\u003e\u003c/code\u003e with the given action performed\n after attaching shaders, but before linking the program. This is\n most commonly used to set the \u003ccode\u003e\u003ca\u003ebindFragDataLocation\u003c/a\u003e\u003c/code\u003e state\n variable.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Shaders",
          "name": "linkShaderProgramWith",
          "package": "GLUtil",
          "signature": "[Shader] -\u003e (Program -\u003e IO ()) -\u003e IO Program",
          "source": "src/Graphics-GLUtil-Shaders.html#linkShaderProgramWith",
          "type": "function"
        },
        "index": {
          "description": "Link shaders into Program with the given action performed after attaching shaders but before linking the program This is most commonly used to set the bindFragDataLocation state variable",
          "hierarchy": "Graphics GLUtil Shaders",
          "module": "Graphics.GLUtil.Shaders",
          "name": "linkShaderProgramWith",
          "normalized": "[Shader]-\u003e(Program-\u003eIO())-\u003eIO Program",
          "package": "GLUtil",
          "partial": "Shader Program With",
          "signature": "[Shader]-\u003e(Program-\u003eIO())-\u003eIO Program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Shaders.html#v:linkShaderProgramWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a shader program from a file.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Shaders",
          "name": "loadShader",
          "package": "GLUtil",
          "signature": "ShaderType -\u003e FilePath -\u003e IO Shader",
          "source": "src/Graphics-GLUtil-Shaders.html#loadShader",
          "type": "function"
        },
        "index": {
          "description": "Load shader program from file",
          "hierarchy": "Graphics GLUtil Shaders",
          "module": "Graphics.GLUtil.Shaders",
          "name": "loadShader",
          "normalized": "ShaderType-\u003eFilePath-\u003eIO Shader",
          "package": "GLUtil",
          "partial": "Shader",
          "signature": "ShaderType-\u003eFilePath-\u003eIO Shader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Shaders.html#v:loadShader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eloadShaderBS fileName shaderType src\u003c/code\u003e loads a shader from source\n code, \u003ccode\u003esrc\u003c/code\u003e. The file name is used only for error reporting.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Shaders",
          "name": "loadShaderBS",
          "package": "GLUtil",
          "signature": "FilePath -\u003e ShaderType -\u003e ByteString -\u003e IO Shader",
          "source": "src/Graphics-GLUtil-Shaders.html#loadShaderBS",
          "type": "function"
        },
        "index": {
          "description": "loadShaderBS fileName shaderType src loads shader from source code src The file name is used only for error reporting",
          "hierarchy": "Graphics GLUtil Shaders",
          "module": "Graphics.GLUtil.Shaders",
          "name": "loadShaderBS",
          "normalized": "FilePath-\u003eShaderType-\u003eByteString-\u003eIO Shader",
          "package": "GLUtil",
          "partial": "Shader BS",
          "signature": "FilePath-\u003eShaderType-\u003eByteString-\u003eIO Shader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Shaders.html#v:loadShaderBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWork with a named uniform shader parameter. Note that this looks\n up the variable name on each access, so uniform parameters that\n will be accessed frequently should instead be resolved to a\n \u003ccode\u003e\u003ca\u003eUniformLocation\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Shaders",
          "name": "namedUniform",
          "package": "GLUtil",
          "signature": "String -\u003e StateVar a",
          "source": "src/Graphics-GLUtil-Shaders.html#namedUniform",
          "type": "function"
        },
        "index": {
          "description": "Work with named uniform shader parameter Note that this looks up the variable name on each access so uniform parameters that will be accessed frequently should instead be resolved to UniformLocation",
          "hierarchy": "Graphics GLUtil Shaders",
          "module": "Graphics.GLUtil.Shaders",
          "name": "namedUniform",
          "normalized": "String-\u003eStateVar a",
          "package": "GLUtil",
          "partial": "Uniform",
          "signature": "String-\u003eStateVar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Shaders.html#v:namedUniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a named uniform shader parameter from a nested list matrix\n representation. Only 3x3 and 4x4 matrices are supported.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Shaders",
          "name": "namedUniformMat",
          "package": "GLUtil",
          "signature": "String -\u003e SettableStateVar [[GLfloat]]",
          "source": "src/Graphics-GLUtil-Shaders.html#namedUniformMat",
          "type": "function"
        },
        "index": {
          "description": "Set named uniform shader parameter from nested list matrix representation Only x3 and x4 matrices are supported",
          "hierarchy": "Graphics GLUtil Shaders",
          "module": "Graphics.GLUtil.Shaders",
          "name": "namedUniformMat",
          "normalized": "String-\u003eSettableStateVar[[GLfloat]]",
          "package": "GLUtil",
          "partial": "Uniform Mat",
          "signature": "String-\u003eSettableStateVar[[GLfloat]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Shaders.html#v:namedUniformMat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a uniform shader location with a 4x4 \u003ccode\u003e\u003ca\u003eGLmatrix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Shaders",
          "name": "uniformGLMat4",
          "package": "GLUtil",
          "signature": "UniformLocation -\u003e SettableStateVar (GLmatrix GLfloat)",
          "source": "src/Graphics-GLUtil-Shaders.html#uniformGLMat4",
          "type": "function"
        },
        "index": {
          "description": "Set uniform shader location with x4 GLmatrix",
          "hierarchy": "Graphics GLUtil Shaders",
          "module": "Graphics.GLUtil.Shaders",
          "name": "uniformGLMat4",
          "normalized": "UniformLocation-\u003eSettableStateVar(GLmatrix GLfloat)",
          "package": "GLUtil",
          "partial": "GLMat",
          "signature": "UniformLocation-\u003eSettableStateVar(GLmatrix GLfloat)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Shaders.html#v:uniformGLMat4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a uniform shader location from a nested list matrix\n representation. Only 3x3 and 4x4 matrices are supported.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Shaders",
          "name": "uniformMat",
          "package": "GLUtil",
          "signature": "UniformLocation -\u003e SettableStateVar [[GLfloat]]",
          "source": "src/Graphics-GLUtil-Shaders.html#uniformMat",
          "type": "function"
        },
        "index": {
          "description": "Set uniform shader location from nested list matrix representation Only x3 and x4 matrices are supported",
          "hierarchy": "Graphics GLUtil Shaders",
          "module": "Graphics.GLUtil.Shaders",
          "name": "uniformMat",
          "normalized": "UniformLocation-\u003eSettableStateVar[[GLfloat]]",
          "package": "GLUtil",
          "partial": "Mat",
          "signature": "UniformLocation-\u003eSettableStateVar[[GLfloat]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Shaders.html#v:uniformMat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a \u003ccode\u003e\u003ca\u003eUniformLocation\u003c/a\u003e\u003c/code\u003e to a scalar value.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Shaders",
          "name": "uniformScalar",
          "package": "GLUtil",
          "signature": "UniformLocation -\u003e SettableStateVar a",
          "source": "src/Graphics-GLUtil-Shaders.html#uniformScalar",
          "type": "function"
        },
        "index": {
          "description": "Set UniformLocation to scalar value",
          "hierarchy": "Graphics GLUtil Shaders",
          "module": "Graphics.GLUtil.Shaders",
          "name": "uniformScalar",
          "normalized": "UniformLocation-\u003eSettableStateVar a",
          "package": "GLUtil",
          "partial": "Scalar",
          "signature": "UniformLocation-\u003eSettableStateVar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Shaders.html#v:uniformScalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a \u003ccode\u003e\u003ca\u003eUniformLocation\u003c/a\u003e\u003c/code\u003e from a list representation of a\n low-dimensional vector of \u003ccode\u003e\u003ca\u003eGLfloat\u003c/a\u003e\u003c/code\u003es. Only 2, 3, and 4 dimensional\n vectors are supported.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Shaders",
          "name": "uniformVec",
          "package": "GLUtil",
          "signature": "UniformLocation -\u003e SettableStateVar [GLfloat]",
          "source": "src/Graphics-GLUtil-Shaders.html#uniformVec",
          "type": "function"
        },
        "index": {
          "description": "Set UniformLocation from list representation of low-dimensional vector of GLfloat Only and dimensional vectors are supported",
          "hierarchy": "Graphics GLUtil Shaders",
          "module": "Graphics.GLUtil.Shaders",
          "name": "uniformVec",
          "normalized": "UniformLocation-\u003eSettableStateVar[GLfloat]",
          "package": "GLUtil",
          "partial": "Vec",
          "signature": "UniformLocation-\u003eSettableStateVar[GLfloat]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Shaders.html#v:uniformVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for loading texture data.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.GLUtil.Textures",
          "name": "Textures",
          "package": "GLUtil",
          "source": "src/Graphics-GLUtil-Textures.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for loading texture data",
          "hierarchy": "Graphics GLUtil Textures",
          "module": "Graphics.GLUtil.Textures",
          "name": "Textures",
          "package": "GLUtil",
          "partial": "Textures",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Textures.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for containers of texture data.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Textures",
          "name": "IsPixelData",
          "package": "GLUtil",
          "source": "src/Graphics-GLUtil-Textures.html#IsPixelData",
          "type": "class"
        },
        "index": {
          "description": "Class for containers of texture data",
          "hierarchy": "Graphics GLUtil Textures",
          "module": "Graphics.GLUtil.Textures",
          "name": "IsPixelData",
          "package": "GLUtil",
          "partial": "Is Pixel Data",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Textures.html#t:IsPixelData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GLUtil.Textures",
          "name": "MipMappable",
          "package": "GLUtil",
          "source": "src/Graphics-GLUtil-Textures.html#MipMappable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphics GLUtil Textures",
          "module": "Graphics.GLUtil.Textures",
          "name": "MipMappable",
          "package": "GLUtil",
          "partial": "Mip Mappable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Textures.html#t:MipMappable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper whose \u003ccode\u003e\u003ca\u003eIsPixelData\u003c/a\u003e\u003c/code\u003e instance treats the pointer underlying\n a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e as an array of \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Textures",
          "name": "ShortString",
          "package": "GLUtil",
          "source": "src/Graphics-GLUtil-Textures.html#ShortString",
          "type": "newtype"
        },
        "index": {
          "description": "Wrapper whose IsPixelData instance treats the pointer underlying ByteString as an array of Word16",
          "hierarchy": "Graphics GLUtil Textures",
          "module": "Graphics.GLUtil.Textures",
          "name": "ShortString",
          "package": "GLUtil",
          "partial": "Short String",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Textures.html#t:ShortString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePixel format of image data.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Textures",
          "name": "TexColor",
          "package": "GLUtil",
          "source": "src/Graphics-GLUtil-Textures.html#TexColor",
          "type": "data"
        },
        "index": {
          "description": "Pixel format of image data",
          "hierarchy": "Graphics GLUtil Textures",
          "module": "Graphics.GLUtil.Textures",
          "name": "TexColor",
          "package": "GLUtil",
          "partial": "Tex Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Textures.html#t:TexColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA basic texture information record.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Textures",
          "name": "TexInfo",
          "package": "GLUtil",
          "source": "src/Graphics-GLUtil-Textures.html#TexInfo",
          "type": "data"
        },
        "index": {
          "description": "basic texture information record",
          "hierarchy": "Graphics GLUtil Textures",
          "module": "Graphics.GLUtil.Textures",
          "name": "TexInfo",
          "package": "GLUtil",
          "partial": "Tex Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Textures.html#t:TexInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GLUtil.Textures",
          "name": "ShortString",
          "package": "GLUtil",
          "signature": "ShortString ByteString",
          "source": "src/Graphics-GLUtil-Textures.html#ShortString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GLUtil Textures",
          "module": "Graphics.GLUtil.Textures",
          "name": "ShortString",
          "package": "GLUtil",
          "partial": "Short String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Textures.html#v:ShortString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GLUtil.Textures",
          "name": "TexBGR",
          "package": "GLUtil",
          "signature": "TexBGR",
          "source": "src/Graphics-GLUtil-Textures.html#TexColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GLUtil Textures",
          "module": "Graphics.GLUtil.Textures",
          "name": "TexBGR",
          "package": "GLUtil",
          "partial": "Tex BGR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Textures.html#v:TexBGR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GLUtil.Textures",
          "name": "TexInfo",
          "package": "GLUtil",
          "signature": "TexInfo",
          "source": "src/Graphics-GLUtil-Textures.html#TexInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GLUtil Textures",
          "module": "Graphics.GLUtil.Textures",
          "name": "TexInfo",
          "package": "GLUtil",
          "partial": "Tex Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Textures.html#v:TexInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GLUtil.Textures",
          "name": "TexMono",
          "package": "GLUtil",
          "signature": "TexMono",
          "source": "src/Graphics-GLUtil-Textures.html#TexColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GLUtil Textures",
          "module": "Graphics.GLUtil.Textures",
          "name": "TexMono",
          "package": "GLUtil",
          "partial": "Tex Mono",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Textures.html#v:TexMono"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GLUtil.Textures",
          "name": "TexRG",
          "package": "GLUtil",
          "signature": "TexRG",
          "source": "src/Graphics-GLUtil-Textures.html#TexColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GLUtil Textures",
          "module": "Graphics.GLUtil.Textures",
          "name": "TexRG",
          "package": "GLUtil",
          "partial": "Tex RG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Textures.html#v:TexRG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GLUtil.Textures",
          "name": "TexRGB",
          "package": "GLUtil",
          "signature": "TexRGB",
          "source": "src/Graphics-GLUtil-Textures.html#TexColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GLUtil Textures",
          "module": "Graphics.GLUtil.Textures",
          "name": "TexRGB",
          "package": "GLUtil",
          "partial": "Tex RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Textures.html#v:TexRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GLUtil.Textures",
          "name": "TexRGBA",
          "package": "GLUtil",
          "signature": "TexRGBA",
          "source": "src/Graphics-GLUtil-Textures.html#TexColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GLUtil Textures",
          "module": "Graphics.GLUtil.Textures",
          "name": "TexRGBA",
          "package": "GLUtil",
          "partial": "Tex RGBA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Textures.html#v:TexRGBA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new 2D texture with uninitialized contents.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Textures",
          "name": "freshTexture",
          "package": "GLUtil",
          "signature": "Int -\u003e Int -\u003e TexColor -\u003e proxy a -\u003e IO TextureObject",
          "source": "src/Graphics-GLUtil-Textures.html#freshTexture",
          "type": "function"
        },
        "index": {
          "description": "Create new texture with uninitialized contents",
          "hierarchy": "Graphics GLUtil Textures",
          "module": "Graphics.GLUtil.Textures",
          "name": "freshTexture",
          "normalized": "Int-\u003eInt-\u003eTexColor-\u003ea b-\u003eIO TextureObject",
          "package": "GLUtil",
          "partial": "Texture",
          "signature": "Int-\u003eInt-\u003eTexColor-\u003eproxy a-\u003eIO TextureObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Textures.html#v:freshTexture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new 2D texture with uninitialized \u003ccode\u003e\u003ca\u003eGLfloat\u003c/a\u003e\u003c/code\u003e contents.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Textures",
          "name": "freshTextureFloat",
          "package": "GLUtil",
          "signature": "Int -\u003e Int -\u003e TexColor -\u003e IO TextureObject",
          "source": "src/Graphics-GLUtil-Textures.html#freshTextureFloat",
          "type": "function"
        },
        "index": {
          "description": "Create new texture with uninitialized GLfloat contents",
          "hierarchy": "Graphics GLUtil Textures",
          "module": "Graphics.GLUtil.Textures",
          "name": "freshTextureFloat",
          "normalized": "Int-\u003eInt-\u003eTexColor-\u003eIO TextureObject",
          "package": "GLUtil",
          "partial": "Texture Float",
          "signature": "Int-\u003eInt-\u003eTexColor-\u003eIO TextureObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Textures.html#v:freshTextureFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new 2D texture with uninitialized \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e contents.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Textures",
          "name": "freshTextureWord8",
          "package": "GLUtil",
          "signature": "Int -\u003e Int -\u003e TexColor -\u003e IO TextureObject",
          "source": "src/Graphics-GLUtil-Textures.html#freshTextureWord8",
          "type": "function"
        },
        "index": {
          "description": "Create new texture with uninitialized Word8 contents",
          "hierarchy": "Graphics GLUtil Textures",
          "module": "Graphics.GLUtil.Textures",
          "name": "freshTextureWord8",
          "normalized": "Int-\u003eInt-\u003eTexColor-\u003eIO TextureObject",
          "package": "GLUtil",
          "partial": "Texture Word",
          "signature": "Int-\u003eInt-\u003eTexColor-\u003eIO TextureObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Textures.html#v:freshTextureWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a complete set of mipmaps for the currently bound\n texture object.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Textures",
          "name": "generateMipmap'",
          "package": "GLUtil",
          "signature": "t -\u003e IO ()",
          "source": "src/Graphics-GLUtil-Textures.html#generateMipmap%27",
          "type": "method"
        },
        "index": {
          "description": "Generate complete set of mipmaps for the currently bound texture object",
          "hierarchy": "Graphics GLUtil Textures",
          "module": "Graphics.GLUtil.Textures",
          "name": "generateMipmap'",
          "normalized": "a-\u003eIO()",
          "package": "GLUtil",
          "partial": "Mipmap'",
          "signature": "t-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Textures.html#v:generateMipmap-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new 2D texture with data from a \u003ccode\u003e\u003ca\u003eTexInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Textures",
          "name": "loadTexture",
          "package": "GLUtil",
          "signature": "TexInfo a -\u003e IO TextureObject",
          "source": "src/Graphics-GLUtil-Textures.html#loadTexture",
          "type": "function"
        },
        "index": {
          "description": "Create new texture with data from TexInfo",
          "hierarchy": "Graphics GLUtil Textures",
          "module": "Graphics.GLUtil.Textures",
          "name": "loadTexture",
          "normalized": "TexInfo a-\u003eIO TextureObject",
          "package": "GLUtil",
          "partial": "Texture",
          "signature": "TexInfo a-\u003eIO TextureObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Textures.html#v:loadTexture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace a 2D texture's pixel data with data from a \u003ccode\u003e\u003ca\u003eTexInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Textures",
          "name": "reloadTexture",
          "package": "GLUtil",
          "signature": "TextureObject -\u003e TexInfo a -\u003e IO ()",
          "source": "src/Graphics-GLUtil-Textures.html#reloadTexture",
          "type": "function"
        },
        "index": {
          "description": "Replace texture pixel data with data from TexInfo",
          "hierarchy": "Graphics GLUtil Textures",
          "module": "Graphics.GLUtil.Textures",
          "name": "reloadTexture",
          "normalized": "TextureObject-\u003eTexInfo a-\u003eIO()",
          "package": "GLUtil",
          "partial": "Texture",
          "signature": "TextureObject-\u003eTexInfo a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Textures.html#v:reloadTexture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GLUtil.Textures",
          "name": "texColor",
          "package": "GLUtil",
          "signature": "TexColor",
          "source": "src/Graphics-GLUtil-Textures.html#TexInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GLUtil Textures",
          "module": "Graphics.GLUtil.Textures",
          "name": "texColor",
          "package": "GLUtil",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Textures.html#v:texColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GLUtil.Textures",
          "name": "texData",
          "package": "GLUtil",
          "signature": "a",
          "source": "src/Graphics-GLUtil-Textures.html#TexInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GLUtil Textures",
          "module": "Graphics.GLUtil.Textures",
          "name": "texData",
          "package": "GLUtil",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Textures.html#v:texData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GLUtil.Textures",
          "name": "texHeight",
          "package": "GLUtil",
          "signature": "GLsizei",
          "source": "src/Graphics-GLUtil-Textures.html#TexInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GLUtil Textures",
          "module": "Graphics.GLUtil.Textures",
          "name": "texHeight",
          "package": "GLUtil",
          "partial": "Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Textures.html#v:texHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper for constructing a \u003ccode\u003e\u003ca\u003eTexInfo\u003c/a\u003e\u003c/code\u003e using Haskell \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es for image\n dimensions.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Textures",
          "name": "texInfo",
          "package": "GLUtil",
          "signature": "Int -\u003e Int -\u003e TexColor -\u003e a -\u003e TexInfo a",
          "source": "src/Graphics-GLUtil-Textures.html#texInfo",
          "type": "function"
        },
        "index": {
          "description": "Helper for constructing TexInfo using Haskell Int for image dimensions",
          "hierarchy": "Graphics GLUtil Textures",
          "module": "Graphics.GLUtil.Textures",
          "name": "texInfo",
          "normalized": "Int-\u003eInt-\u003eTexColor-\u003ea-\u003eTexInfo a",
          "package": "GLUtil",
          "partial": "Info",
          "signature": "Int-\u003eInt-\u003eTexColor-\u003ea-\u003eTexInfo a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Textures.html#v:texInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GLUtil.Textures",
          "name": "texWidth",
          "package": "GLUtil",
          "signature": "GLsizei",
          "source": "src/Graphics-GLUtil-Textures.html#TexInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics GLUtil Textures",
          "module": "Graphics.GLUtil.Textures",
          "name": "texWidth",
          "package": "GLUtil",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Textures.html#v:texWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet texture coordinate wrapping options for both the \u003ccode\u003e\u003ca\u003eS\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e\n dimensions of a 2D texture.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Textures",
          "name": "texture2DWrap",
          "package": "GLUtil",
          "signature": "StateVar (Repetition, Clamping)",
          "source": "src/Graphics-GLUtil-Textures.html#texture2DWrap",
          "type": "function"
        },
        "index": {
          "description": "Set texture coordinate wrapping options for both the and dimensions of texture",
          "hierarchy": "Graphics GLUtil Textures",
          "module": "Graphics.GLUtil.Textures",
          "name": "texture2DWrap",
          "normalized": "StateVar(Repetition,Clamping)",
          "package": "GLUtil",
          "partial": "DWrap",
          "signature": "StateVar(Repetition,Clamping)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Textures.html#v:texture2DWrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet texture coordinate wrapping options for the \u003ccode\u003e\u003ca\u003eS\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eR\u003c/a\u003e\u003c/code\u003e\n dimensions of a 3D texture.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Textures",
          "name": "texture3DWrap",
          "package": "GLUtil",
          "signature": "StateVar (Repetition, Clamping)",
          "source": "src/Graphics-GLUtil-Textures.html#texture3DWrap",
          "type": "function"
        },
        "index": {
          "description": "Set texture coordinate wrapping options for the and dimensions of texture",
          "hierarchy": "Graphics GLUtil Textures",
          "module": "Graphics.GLUtil.Textures",
          "name": "texture3DWrap",
          "normalized": "StateVar(Repetition,Clamping)",
          "package": "GLUtil",
          "partial": "DWrap",
          "signature": "StateVar(Repetition,Clamping)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Textures.html#v:texture3DWrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GLUtil.Textures",
          "name": "withPixels",
          "package": "GLUtil",
          "signature": "a -\u003e (Ptr (Elem a) -\u003e IO c) -\u003e IO c",
          "source": "src/Graphics-GLUtil-Textures.html#withPixels",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics GLUtil Textures",
          "module": "Graphics.GLUtil.Textures",
          "name": "withPixels",
          "normalized": "a-\u003e(Ptr(Elem a)-\u003eIO b)-\u003eIO b",
          "package": "GLUtil",
          "partial": "Pixels",
          "signature": "a-\u003e(Ptr(Elem a)-\u003eIO c)-\u003eIO c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Textures.html#v:withPixels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBind each of the given textures to successive texture units at\n the given \u003ccode\u003eTextureTarget\u003c/code\u003e starting with texture unit 0.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Textures",
          "name": "withTextures",
          "package": "GLUtil",
          "signature": "t -\u003e [TextureObject] -\u003e IO a -\u003e IO a",
          "source": "src/Graphics-GLUtil-Textures.html#withTextures",
          "type": "function"
        },
        "index": {
          "description": "Bind each of the given textures to successive texture units at the given TextureTarget starting with texture unit",
          "hierarchy": "Graphics GLUtil Textures",
          "module": "Graphics.GLUtil.Textures",
          "name": "withTextures",
          "normalized": "a-\u003e[TextureObject]-\u003eIO b-\u003eIO b",
          "package": "GLUtil",
          "partial": "Textures",
          "signature": "t-\u003e[TextureObject]-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Textures.html#v:withTextures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBind each of the given 2D textures to successive texture units\n starting with texture unit 0.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Textures",
          "name": "withTextures2D",
          "package": "GLUtil",
          "signature": "[TextureObject] -\u003e IO a -\u003e IO a",
          "source": "src/Graphics-GLUtil-Textures.html#withTextures2D",
          "type": "function"
        },
        "index": {
          "description": "Bind each of the given textures to successive texture units starting with texture unit",
          "hierarchy": "Graphics GLUtil Textures",
          "module": "Graphics.GLUtil.Textures",
          "name": "withTextures2D",
          "normalized": "[TextureObject]-\u003eIO a-\u003eIO a",
          "package": "GLUtil",
          "partial": "Textures",
          "signature": "[TextureObject]-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Textures.html#v:withTextures2D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBind each of the given textures to the texture unit they are\n paired with. The given action is run with these bindings, then the\n texture bindings are reset. If you don't care which texture units\n are used, consider using \u003ccode\u003e\u003ca\u003ewithTextures\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ewithTextures2D\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Textures",
          "name": "withTexturesAt",
          "package": "GLUtil",
          "signature": "t -\u003e [(TextureObject, GLuint)] -\u003e IO a -\u003e IO a",
          "source": "src/Graphics-GLUtil-Textures.html#withTexturesAt",
          "type": "function"
        },
        "index": {
          "description": "Bind each of the given textures to the texture unit they are paired with The given action is run with these bindings then the texture bindings are reset If you don care which texture units are used consider using withTextures or withTextures2D",
          "hierarchy": "Graphics GLUtil Textures",
          "module": "Graphics.GLUtil.Textures",
          "name": "withTexturesAt",
          "normalized": "a-\u003e[(TextureObject,GLuint)]-\u003eIO b-\u003eIO b",
          "package": "GLUtil",
          "partial": "Textures At",
          "signature": "t-\u003e[(TextureObject,GLuint)]-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Textures.html#v:withTexturesAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains classes and functions to relate Haskell types\n with OpenGL DataTypes (typically used to describe the values stored\n in arrays) and VariableTypes (used as attributes and uniforms in\n GLSL programs).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.GLUtil.TypeMapping",
          "name": "TypeMapping",
          "package": "GLUtil",
          "source": "src/Graphics-GLUtil-TypeMapping.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains classes and functions to relate Haskell types with OpenGL DataTypes typically used to describe the values stored in arrays and VariableTypes used as attributes and uniforms in GLSL programs",
          "hierarchy": "Graphics GLUtil TypeMapping",
          "module": "Graphics.GLUtil.TypeMapping",
          "name": "TypeMapping",
          "package": "GLUtil",
          "partial": "Type Mapping",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-TypeMapping.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen mapping from Haskell types to OpenGL types.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.TypeMapping",
          "name": "HasGLType",
          "package": "GLUtil",
          "source": "src/Graphics-GLUtil-TypeMapping.html#HasGLType",
          "type": "class"
        },
        "index": {
          "description": "Open mapping from Haskell types to OpenGL types",
          "hierarchy": "Graphics GLUtil TypeMapping",
          "module": "Graphics.GLUtil.TypeMapping",
          "name": "HasGLType",
          "package": "GLUtil",
          "partial": "Has GLType",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-TypeMapping.html#t:HasGLType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mapping from Haskell types to values of \u003ccode\u003e\u003ca\u003eVariableType\u003c/a\u003e\u003c/code\u003e. This\n defines how Haskell values may be mapped to values that may be\n bound to GLSL variables.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.TypeMapping",
          "name": "HasVariableType",
          "package": "GLUtil",
          "source": "src/Graphics-GLUtil-TypeMapping.html#HasVariableType",
          "type": "class"
        },
        "index": {
          "description": "mapping from Haskell types to values of VariableType This defines how Haskell values may be mapped to values that may be bound to GLSL variables",
          "hierarchy": "Graphics GLUtil TypeMapping",
          "module": "Graphics.GLUtil.TypeMapping",
          "name": "HasVariableType",
          "package": "GLUtil",
          "partial": "Has Variable Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-TypeMapping.html#t:HasVariableType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GLUtil.TypeMapping",
          "name": "glType",
          "package": "GLUtil",
          "signature": "a -\u003e DataType",
          "source": "src/Graphics-GLUtil-TypeMapping.html#glType",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics GLUtil TypeMapping",
          "module": "Graphics.GLUtil.TypeMapping",
          "name": "glType",
          "normalized": "a-\u003eDataType",
          "package": "GLUtil",
          "partial": "Type",
          "signature": "a-\u003eDataType",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-TypeMapping.html#v:glType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaps each \u003ccode\u003e\u003ca\u003eVariableType\u003c/a\u003e\u003c/code\u003e to its corresponding\n \u003ccode\u003e\u003ca\u003eDataType\u003c/a\u003e\u003c/code\u003e. Typically this indicates the element type of composite\n variable types (e.g. \u003ccode\u003evariableDataType FloatVec2 = Float\u003c/code\u003e). Note\n that this is a partial mapping as we are primarily supporting the\n use of these types as inputs to GLSL programs where types such as\n Bool are not supported.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.TypeMapping",
          "name": "variableDataType",
          "package": "GLUtil",
          "signature": "VariableType -\u003e DataType",
          "source": "src/Graphics-GLUtil-TypeMapping.html#variableDataType",
          "type": "function"
        },
        "index": {
          "description": "Maps each VariableType to its corresponding DataType Typically this indicates the element type of composite variable types e.g variableDataType FloatVec2 Float Note that this is partial mapping as we are primarily supporting the use of these types as inputs to GLSL programs where types such as Bool are not supported",
          "hierarchy": "Graphics GLUtil TypeMapping",
          "module": "Graphics.GLUtil.TypeMapping",
          "name": "variableDataType",
          "normalized": "VariableType-\u003eDataType",
          "package": "GLUtil",
          "partial": "Data Type",
          "signature": "VariableType-\u003eDataType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-TypeMapping.html#v:variableDataType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.GLUtil.TypeMapping",
          "name": "variableType",
          "package": "GLUtil",
          "signature": "a -\u003e VariableType",
          "source": "src/Graphics-GLUtil-TypeMapping.html#variableType",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics GLUtil TypeMapping",
          "module": "Graphics.GLUtil.TypeMapping",
          "name": "variableType",
          "normalized": "a-\u003eVariableType",
          "package": "GLUtil",
          "partial": "Type",
          "signature": "a-\u003eVariableType",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-TypeMapping.html#v:variableType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA thin layer over OpenGL 3.1+ vertex array objects.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.GLUtil.VertexArrayObjects",
          "name": "VertexArrayObjects",
          "package": "GLUtil",
          "source": "src/Graphics-GLUtil-VertexArrayObjects.html",
          "type": "module"
        },
        "index": {
          "description": "thin layer over OpenGL vertex array objects",
          "hierarchy": "Graphics GLUtil VertexArrayObjects",
          "module": "Graphics.GLUtil.VertexArrayObjects",
          "name": "VertexArrayObjects",
          "package": "GLUtil",
          "partial": "Vertex Array Objects",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-VertexArrayObjects.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort alias for \u003ccode\u003e\u003ca\u003eVertexArrayObject\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.VertexArrayObjects",
          "name": "VAO",
          "package": "GLUtil",
          "source": "src/Graphics-GLUtil-VertexArrayObjects.html#VAO",
          "type": "type"
        },
        "index": {
          "description": "Short alias for VertexArrayObject",
          "hierarchy": "Graphics GLUtil VertexArrayObjects",
          "module": "Graphics.GLUtil.VertexArrayObjects",
          "name": "VAO",
          "package": "GLUtil",
          "partial": "VAO",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-VertexArrayObjects.html#t:VAO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a \u003ccode\u003e\u003ca\u003eVertexArrayObject\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.VertexArrayObjects",
          "name": "deleteVAO",
          "package": "GLUtil",
          "signature": "VertexArrayObject -\u003e IO ()",
          "source": "src/Graphics-GLUtil-VertexArrayObjects.html#deleteVAO",
          "type": "function"
        },
        "index": {
          "description": "Delete VertexArrayObject",
          "hierarchy": "Graphics GLUtil VertexArrayObjects",
          "module": "Graphics.GLUtil.VertexArrayObjects",
          "name": "deleteVAO",
          "normalized": "VertexArrayObject-\u003eIO()",
          "package": "GLUtil",
          "partial": "VAO",
          "signature": "VertexArrayObject-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-VertexArrayObjects.html#v:deleteVAO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a list of \u003ccode\u003e\u003ca\u003eVertexArrayObject\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.VertexArrayObjects",
          "name": "deleteVAOs",
          "package": "GLUtil",
          "signature": "[VertexArrayObject] -\u003e IO ()",
          "source": "src/Graphics-GLUtil-VertexArrayObjects.html#deleteVAOs",
          "type": "function"
        },
        "index": {
          "description": "Delete list of VertexArrayObject",
          "hierarchy": "Graphics GLUtil VertexArrayObjects",
          "module": "Graphics.GLUtil.VertexArrayObjects",
          "name": "deleteVAOs",
          "normalized": "[VertexArrayObject]-\u003eIO()",
          "package": "GLUtil",
          "partial": "VAOs",
          "signature": "[VertexArrayObject]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-VertexArrayObjects.html#v:deleteVAOs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate a \u003ccode\u003e\u003ca\u003eVertexArrayObject\u003c/a\u003e\u003c/code\u003e, and initialize it with the\n provided action. This action should bind the buffer data, index\n data (if necessary), and setup vertex attributes.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.VertexArrayObjects",
          "name": "makeVAO",
          "package": "GLUtil",
          "signature": "IO () -\u003e IO VertexArrayObject",
          "source": "src/Graphics-GLUtil-VertexArrayObjects.html#makeVAO",
          "type": "function"
        },
        "index": {
          "description": "Allocate VertexArrayObject and initialize it with the provided action This action should bind the buffer data index data if necessary and setup vertex attributes",
          "hierarchy": "Graphics GLUtil VertexArrayObjects",
          "module": "Graphics.GLUtil.VertexArrayObjects",
          "name": "makeVAO",
          "normalized": "IO()-\u003eIO VertexArrayObject",
          "package": "GLUtil",
          "partial": "VAO",
          "signature": "IO()-\u003eIO VertexArrayObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-VertexArrayObjects.html#v:makeVAO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an action with the given \u003ccode\u003e\u003ca\u003eVertexArrayObject\u003c/a\u003e\u003c/code\u003e bound.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.VertexArrayObjects",
          "name": "withVAO",
          "package": "GLUtil",
          "signature": "VertexArrayObject -\u003e IO r -\u003e IO r",
          "source": "src/Graphics-GLUtil-VertexArrayObjects.html#withVAO",
          "type": "function"
        },
        "index": {
          "description": "Run an action with the given VertexArrayObject bound",
          "hierarchy": "Graphics GLUtil VertexArrayObjects",
          "module": "Graphics.GLUtil.VertexArrayObjects",
          "name": "withVAO",
          "normalized": "VertexArrayObject-\u003eIO a-\u003eIO a",
          "package": "GLUtil",
          "partial": "VAO",
          "signature": "VertexArrayObject-\u003eIO r-\u003eIO r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-VertexArrayObjects.html#v:withVAO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHelpers for working with OpenGL viewports.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.GLUtil.Viewport",
          "name": "Viewport",
          "package": "GLUtil",
          "source": "src/Graphics-GLUtil-Viewport.html",
          "type": "module"
        },
        "index": {
          "description": "Helpers for working with OpenGL viewports",
          "hierarchy": "Graphics GLUtil Viewport",
          "module": "Graphics.GLUtil.Viewport",
          "name": "Viewport",
          "package": "GLUtil",
          "partial": "Viewport",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Viewport.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ewithViewport pos sz m\u003c/code\u003e runs the action \u003ccode\u003em\u003c/code\u003e after setting the\n viewport with the given \u003ccode\u003e\u003ca\u003ePosition\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSize\u003c/a\u003e\u003c/code\u003e. The viewport is\n reset to its original state after the action is run, and the result\n of the action is returned.\n\u003c/p\u003e",
          "module": "Graphics.GLUtil.Viewport",
          "name": "withViewport",
          "package": "GLUtil",
          "signature": "Position -\u003e Size -\u003e IO a -\u003e IO a",
          "source": "src/Graphics-GLUtil-Viewport.html#withViewport",
          "type": "function"
        },
        "index": {
          "description": "withViewport pos sz runs the action after setting the viewport with the given Position and Size The viewport is reset to its original state after the action is run and the result of the action is returned",
          "hierarchy": "Graphics GLUtil Viewport",
          "module": "Graphics.GLUtil.Viewport",
          "name": "withViewport",
          "normalized": "Position-\u003eSize-\u003eIO a-\u003eIO a",
          "package": "GLUtil",
          "partial": "Viewport",
          "signature": "Position-\u003eSize-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil-Viewport.html#v:withViewport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe main import that simply re-exports the various modules that\n make up the \u003ccode\u003eGLUtil\u003c/code\u003e library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.GLUtil",
          "name": "GLUtil",
          "package": "GLUtil",
          "source": "src/Graphics-GLUtil.html",
          "type": "module"
        },
        "index": {
          "description": "The main import that simply re-exports the various modules that make up the GLUtil library",
          "hierarchy": "Graphics GLUtil",
          "module": "Graphics.GLUtil",
          "name": "GLUtil",
          "package": "GLUtil",
          "partial": "GLUtil",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e32-bit unsigned integer type\n\u003c/p\u003e",
          "module": "Graphics.GLUtil",
          "name": "Word32",
          "package": "GLUtil",
          "type": "data"
        },
        "index": {
          "description": "bit unsigned integer type",
          "hierarchy": "Graphics GLUtil",
          "module": "Graphics.GLUtil",
          "name": "Word32",
          "package": "GLUtil",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GLUtil/docs/Graphics-GLUtil.html#t:Word32"
      }
    }
  ]
]