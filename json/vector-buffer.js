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
        "word": "vector-buffer"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA buffer that can be used as a vector\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.Buffer",
          "name": "Buffer",
          "package": "vector-buffer",
          "source": "src/Data-Vector-Buffer.html",
          "type": "module"
        },
        "index": {
          "description": "buffer that can be used as vector",
          "hierarchy": "Data Vector Buffer",
          "module": "Data.Vector.Buffer",
          "name": "Buffer",
          "package": "vector-buffer",
          "partial": "Buffer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-buffer/docs/Data-Vector-Buffer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Buffer",
          "name": "Buffer",
          "package": "vector-buffer",
          "source": "src/Data-Vector-Buffer.html#Buffer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Vector Buffer",
          "module": "Data.Vector.Buffer",
          "name": "Buffer",
          "package": "vector-buffer",
          "partial": "Buffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vector-buffer/docs/Data-Vector-Buffer.html#t:Buffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emonadic map over a buffer\n\u003c/p\u003e",
          "module": "Data.Vector.Buffer",
          "name": "mapBufferM",
          "package": "vector-buffer",
          "signature": "(a -\u003e IO b) -\u003e Buffer a -\u003e IO (Vector b)",
          "source": "src/Data-Vector-Buffer.html#mapBufferM",
          "type": "function"
        },
        "index": {
          "description": "monadic map over buffer",
          "hierarchy": "Data Vector Buffer",
          "module": "Data.Vector.Buffer",
          "name": "mapBufferM",
          "normalized": "(a-\u003eIO b)-\u003eBuffer a-\u003eIO(Vector b)",
          "package": "vector-buffer",
          "partial": "Buffer",
          "signature": "(a-\u003eIO b)-\u003eBuffer a-\u003eIO(Vector b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-buffer/docs/Data-Vector-Buffer.html#v:mapBufferM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emonadic map over a buffer\n\u003c/p\u003e",
          "module": "Data.Vector.Buffer",
          "name": "mapBufferM_",
          "package": "vector-buffer",
          "signature": "(a -\u003e IO b) -\u003e Buffer a -\u003e IO ()",
          "source": "src/Data-Vector-Buffer.html#mapBufferM_",
          "type": "function"
        },
        "index": {
          "description": "monadic map over buffer",
          "hierarchy": "Data Vector Buffer",
          "module": "Data.Vector.Buffer",
          "name": "mapBufferM_",
          "normalized": "(a-\u003eIO b)-\u003eBuffer a-\u003eIO()",
          "package": "vector-buffer",
          "partial": "Buffer",
          "signature": "(a-\u003eIO b)-\u003eBuffer a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-buffer/docs/Data-Vector-Buffer.html#v:mapBufferM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreate a new buffer\n\u003c/p\u003e",
          "module": "[\"Data.Vector.Buffer\",\"Data.Vector.Primitive.Buffer\",\"Data.Vector.Storable.Buffer\",\"Data.Vector.Unboxed.Buffer\"]",
          "name": "newBuffer",
          "package": "vector-buffer",
          "signature": "Int-\u003e IO (Buffer a)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vector-buffer/docs/Data-Vector-Buffer.html#v:newBuffer\",\"http://hackage.haskell.org/package/vector-buffer/docs/Data-Vector-Primitive-Buffer.html#v:newBuffer\",\"http://hackage.haskell.org/package/vector-buffer/docs/Data-Vector-Storable-Buffer.html#v:newBuffer\",\"http://hackage.haskell.org/package/vector-buffer/docs/Data-Vector-Unboxed-Buffer.html#v:newBuffer\"]"
        },
        "index": {
          "description": "create new buffer",
          "hierarchy": "Data Vector Buffer",
          "module": "Data.Vector.Buffer",
          "name": "newBuffer",
          "normalized": "Int-\u003eIO(Buffer a)",
          "package": "vector-buffer",
          "partial": "Buffer",
          "signature": "Int-\u003eIO(Buffer a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-buffer/docs/Data-Vector-Buffer.html#v:newBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd the next element to the buffer\n\u003c/p\u003e",
          "module": "Data.Vector.Buffer",
          "name": "pushNextElement",
          "package": "vector-buffer",
          "signature": "Buffer a -\u003e a -\u003e IO ()",
          "source": "src/Data-Vector-Buffer.html#pushNextElement",
          "type": "function"
        },
        "index": {
          "description": "add the next element to the buffer",
          "hierarchy": "Data Vector Buffer",
          "module": "Data.Vector.Buffer",
          "name": "pushNextElement",
          "normalized": "Buffer a-\u003ea-\u003eIO()",
          "package": "vector-buffer",
          "partial": "Next Element",
          "signature": "Buffer a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-buffer/docs/Data-Vector-Buffer.html#v:pushNextElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert to a vector\n\u003c/p\u003e",
          "module": "Data.Vector.Buffer",
          "name": "toVector",
          "package": "vector-buffer",
          "signature": "Buffer a -\u003e IO (Vector a)",
          "source": "src/Data-Vector-Buffer.html#toVector",
          "type": "function"
        },
        "index": {
          "description": "convert to vector",
          "hierarchy": "Data Vector Buffer",
          "module": "Data.Vector.Buffer",
          "name": "toVector",
          "normalized": "Buffer a-\u003eIO(Vector a)",
          "package": "vector-buffer",
          "partial": "Vector",
          "signature": "Buffer a-\u003eIO(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-buffer/docs/Data-Vector-Buffer.html#v:toVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA buffer that can be used as a vector\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.Primitive.Buffer",
          "name": "Buffer",
          "package": "vector-buffer",
          "source": "src/Data-Vector-Primitive-Buffer.html",
          "type": "module"
        },
        "index": {
          "description": "buffer that can be used as vector",
          "hierarchy": "Data Vector Primitive Buffer",
          "module": "Data.Vector.Primitive.Buffer",
          "name": "Buffer",
          "package": "vector-buffer",
          "partial": "Buffer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-buffer/docs/Data-Vector-Primitive-Buffer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Primitive.Buffer",
          "name": "Buffer",
          "package": "vector-buffer",
          "source": "src/Data-Vector-Primitive-Buffer.html#Buffer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Vector Primitive Buffer",
          "module": "Data.Vector.Primitive.Buffer",
          "name": "Buffer",
          "package": "vector-buffer",
          "partial": "Buffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vector-buffer/docs/Data-Vector-Primitive-Buffer.html#t:Buffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emonadic map over a buffer\n\u003c/p\u003e",
          "module": "Data.Vector.Primitive.Buffer",
          "name": "mapBufferM",
          "package": "vector-buffer",
          "signature": "(a -\u003e IO b) -\u003e Buffer a -\u003e IO (Vector b)",
          "source": "src/Data-Vector-Primitive-Buffer.html#mapBufferM",
          "type": "function"
        },
        "index": {
          "description": "monadic map over buffer",
          "hierarchy": "Data Vector Primitive Buffer",
          "module": "Data.Vector.Primitive.Buffer",
          "name": "mapBufferM",
          "normalized": "(a-\u003eIO b)-\u003eBuffer a-\u003eIO(Vector b)",
          "package": "vector-buffer",
          "partial": "Buffer",
          "signature": "(a-\u003eIO b)-\u003eBuffer a-\u003eIO(Vector b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-buffer/docs/Data-Vector-Primitive-Buffer.html#v:mapBufferM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emonadic map over a buffer\n\u003c/p\u003e",
          "module": "Data.Vector.Primitive.Buffer",
          "name": "mapBufferM_",
          "package": "vector-buffer",
          "signature": "(a -\u003e IO b) -\u003e Buffer a -\u003e IO ()",
          "source": "src/Data-Vector-Primitive-Buffer.html#mapBufferM_",
          "type": "function"
        },
        "index": {
          "description": "monadic map over buffer",
          "hierarchy": "Data Vector Primitive Buffer",
          "module": "Data.Vector.Primitive.Buffer",
          "name": "mapBufferM_",
          "normalized": "(a-\u003eIO b)-\u003eBuffer a-\u003eIO()",
          "package": "vector-buffer",
          "partial": "Buffer",
          "signature": "(a-\u003eIO b)-\u003eBuffer a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-buffer/docs/Data-Vector-Primitive-Buffer.html#v:mapBufferM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd the next element to the buffer\n\u003c/p\u003e",
          "module": "Data.Vector.Primitive.Buffer",
          "name": "pushNextElement",
          "package": "vector-buffer",
          "signature": "Buffer a -\u003e a -\u003e IO ()",
          "source": "src/Data-Vector-Primitive-Buffer.html#pushNextElement",
          "type": "function"
        },
        "index": {
          "description": "add the next element to the buffer",
          "hierarchy": "Data Vector Primitive Buffer",
          "module": "Data.Vector.Primitive.Buffer",
          "name": "pushNextElement",
          "normalized": "Buffer a-\u003ea-\u003eIO()",
          "package": "vector-buffer",
          "partial": "Next Element",
          "signature": "Buffer a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-buffer/docs/Data-Vector-Primitive-Buffer.html#v:pushNextElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert to a vector\n\u003c/p\u003e",
          "module": "Data.Vector.Primitive.Buffer",
          "name": "toVector",
          "package": "vector-buffer",
          "signature": "Buffer a -\u003e IO (Vector a)",
          "source": "src/Data-Vector-Primitive-Buffer.html#toVector",
          "type": "function"
        },
        "index": {
          "description": "convert to vector",
          "hierarchy": "Data Vector Primitive Buffer",
          "module": "Data.Vector.Primitive.Buffer",
          "name": "toVector",
          "normalized": "Buffer a-\u003eIO(Vector a)",
          "package": "vector-buffer",
          "partial": "Vector",
          "signature": "Buffer a-\u003eIO(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-buffer/docs/Data-Vector-Primitive-Buffer.html#v:toVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA buffer that can be used as a vector\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.Storable.Buffer",
          "name": "Buffer",
          "package": "vector-buffer",
          "source": "src/Data-Vector-Storable-Buffer.html",
          "type": "module"
        },
        "index": {
          "description": "buffer that can be used as vector",
          "hierarchy": "Data Vector Storable Buffer",
          "module": "Data.Vector.Storable.Buffer",
          "name": "Buffer",
          "package": "vector-buffer",
          "partial": "Buffer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-buffer/docs/Data-Vector-Storable-Buffer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Storable.Buffer",
          "name": "Buffer",
          "package": "vector-buffer",
          "source": "src/Data-Vector-Storable-Buffer.html#Buffer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Vector Storable Buffer",
          "module": "Data.Vector.Storable.Buffer",
          "name": "Buffer",
          "package": "vector-buffer",
          "partial": "Buffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vector-buffer/docs/Data-Vector-Storable-Buffer.html#t:Buffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emonadic map over a buffer\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.Buffer",
          "name": "mapBufferM",
          "package": "vector-buffer",
          "signature": "(a -\u003e IO b) -\u003e Buffer a -\u003e IO (Vector b)",
          "source": "src/Data-Vector-Storable-Buffer.html#mapBufferM",
          "type": "function"
        },
        "index": {
          "description": "monadic map over buffer",
          "hierarchy": "Data Vector Storable Buffer",
          "module": "Data.Vector.Storable.Buffer",
          "name": "mapBufferM",
          "normalized": "(a-\u003eIO b)-\u003eBuffer a-\u003eIO(Vector b)",
          "package": "vector-buffer",
          "partial": "Buffer",
          "signature": "(a-\u003eIO b)-\u003eBuffer a-\u003eIO(Vector b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-buffer/docs/Data-Vector-Storable-Buffer.html#v:mapBufferM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emonadic map over a buffer\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.Buffer",
          "name": "mapBufferM_",
          "package": "vector-buffer",
          "signature": "(a -\u003e IO b) -\u003e Buffer a -\u003e IO ()",
          "source": "src/Data-Vector-Storable-Buffer.html#mapBufferM_",
          "type": "function"
        },
        "index": {
          "description": "monadic map over buffer",
          "hierarchy": "Data Vector Storable Buffer",
          "module": "Data.Vector.Storable.Buffer",
          "name": "mapBufferM_",
          "normalized": "(a-\u003eIO b)-\u003eBuffer a-\u003eIO()",
          "package": "vector-buffer",
          "partial": "Buffer",
          "signature": "(a-\u003eIO b)-\u003eBuffer a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-buffer/docs/Data-Vector-Storable-Buffer.html#v:mapBufferM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd the next element to the buffer\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.Buffer",
          "name": "pushNextElement",
          "package": "vector-buffer",
          "signature": "Buffer a -\u003e a -\u003e IO ()",
          "source": "src/Data-Vector-Storable-Buffer.html#pushNextElement",
          "type": "function"
        },
        "index": {
          "description": "add the next element to the buffer",
          "hierarchy": "Data Vector Storable Buffer",
          "module": "Data.Vector.Storable.Buffer",
          "name": "pushNextElement",
          "normalized": "Buffer a-\u003ea-\u003eIO()",
          "package": "vector-buffer",
          "partial": "Next Element",
          "signature": "Buffer a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-buffer/docs/Data-Vector-Storable-Buffer.html#v:pushNextElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert to a vector\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.Buffer",
          "name": "toVector",
          "package": "vector-buffer",
          "signature": "Buffer a -\u003e Vector a",
          "source": "src/Data-Vector-Storable-Buffer.html#toVector",
          "type": "function"
        },
        "index": {
          "description": "convert to vector",
          "hierarchy": "Data Vector Storable Buffer",
          "module": "Data.Vector.Storable.Buffer",
          "name": "toVector",
          "normalized": "Buffer a-\u003eVector a",
          "package": "vector-buffer",
          "partial": "Vector",
          "signature": "Buffer a-\u003eVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-buffer/docs/Data-Vector-Storable-Buffer.html#v:toVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA buffer that can be used as a vector\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.Unboxed.Buffer",
          "name": "Buffer",
          "package": "vector-buffer",
          "source": "src/Data-Vector-Unboxed-Buffer.html",
          "type": "module"
        },
        "index": {
          "description": "buffer that can be used as vector",
          "hierarchy": "Data Vector Unboxed Buffer",
          "module": "Data.Vector.Unboxed.Buffer",
          "name": "Buffer",
          "package": "vector-buffer",
          "partial": "Buffer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-buffer/docs/Data-Vector-Unboxed-Buffer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Unboxed.Buffer",
          "name": "Buffer",
          "package": "vector-buffer",
          "source": "src/Data-Vector-Unboxed-Buffer.html#Buffer",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Vector Unboxed Buffer",
          "module": "Data.Vector.Unboxed.Buffer",
          "name": "Buffer",
          "package": "vector-buffer",
          "partial": "Buffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vector-buffer/docs/Data-Vector-Unboxed-Buffer.html#t:Buffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emonadic map over a buffer\n\u003c/p\u003e",
          "module": "Data.Vector.Unboxed.Buffer",
          "name": "mapBufferM",
          "package": "vector-buffer",
          "signature": "(a -\u003e IO b) -\u003e Buffer a -\u003e IO (Vector b)",
          "source": "src/Data-Vector-Unboxed-Buffer.html#mapBufferM",
          "type": "function"
        },
        "index": {
          "description": "monadic map over buffer",
          "hierarchy": "Data Vector Unboxed Buffer",
          "module": "Data.Vector.Unboxed.Buffer",
          "name": "mapBufferM",
          "normalized": "(a-\u003eIO b)-\u003eBuffer a-\u003eIO(Vector b)",
          "package": "vector-buffer",
          "partial": "Buffer",
          "signature": "(a-\u003eIO b)-\u003eBuffer a-\u003eIO(Vector b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-buffer/docs/Data-Vector-Unboxed-Buffer.html#v:mapBufferM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emonadic map over a buffer\n\u003c/p\u003e",
          "module": "Data.Vector.Unboxed.Buffer",
          "name": "mapBufferM_",
          "package": "vector-buffer",
          "signature": "(a -\u003e IO b) -\u003e Buffer a -\u003e IO ()",
          "source": "src/Data-Vector-Unboxed-Buffer.html#mapBufferM_",
          "type": "function"
        },
        "index": {
          "description": "monadic map over buffer",
          "hierarchy": "Data Vector Unboxed Buffer",
          "module": "Data.Vector.Unboxed.Buffer",
          "name": "mapBufferM_",
          "normalized": "(a-\u003eIO b)-\u003eBuffer a-\u003eIO()",
          "package": "vector-buffer",
          "partial": "Buffer",
          "signature": "(a-\u003eIO b)-\u003eBuffer a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-buffer/docs/Data-Vector-Unboxed-Buffer.html#v:mapBufferM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd the next element to the buffer\n\u003c/p\u003e",
          "module": "Data.Vector.Unboxed.Buffer",
          "name": "pushNextElement",
          "package": "vector-buffer",
          "signature": "Buffer a -\u003e a -\u003e IO ()",
          "source": "src/Data-Vector-Unboxed-Buffer.html#pushNextElement",
          "type": "function"
        },
        "index": {
          "description": "add the next element to the buffer",
          "hierarchy": "Data Vector Unboxed Buffer",
          "module": "Data.Vector.Unboxed.Buffer",
          "name": "pushNextElement",
          "normalized": "Buffer a-\u003ea-\u003eIO()",
          "package": "vector-buffer",
          "partial": "Next Element",
          "signature": "Buffer a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-buffer/docs/Data-Vector-Unboxed-Buffer.html#v:pushNextElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert to a vector\n\u003c/p\u003e",
          "module": "Data.Vector.Unboxed.Buffer",
          "name": "toVector",
          "package": "vector-buffer",
          "signature": "Buffer a -\u003e IO (Vector a)",
          "source": "src/Data-Vector-Unboxed-Buffer.html#toVector",
          "type": "function"
        },
        "index": {
          "description": "convert to vector",
          "hierarchy": "Data Vector Unboxed Buffer",
          "module": "Data.Vector.Unboxed.Buffer",
          "name": "toVector",
          "normalized": "Buffer a-\u003eIO(Vector a)",
          "package": "vector-buffer",
          "partial": "Vector",
          "signature": "Buffer a-\u003eIO(Vector a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-buffer/docs/Data-Vector-Unboxed-Buffer.html#v:toVector"
      }
    }
  ]
]