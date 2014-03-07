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
        "word": "cereal-vector"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca\u003eData.Serialize\u003c/a\u003e functions for \u003ca\u003eData.Vector.Generic\u003c/a\u003e\n vectors. Orphan instances are provided for \u003ca\u003eData.Vector\u003c/a\u003e,\n \u003ca\u003eData.Vector.Unboxed\u003c/a\u003e, \u003ca\u003eData.Vector.Storable\u003c/a\u003e, and\n \u003ca\u003eData.Vector.Primitive\u003c/a\u003e vectors.\n\u003c/p\u003e\u003cp\u003eThe serialized format is an \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e representing the length of the\n vector, followed by the \u003ca\u003eData.Serialize\u003c/a\u003ed contents of each element.\n\u003c/p\u003e\u003cp\u003eNote that the functions in \u003ca\u003eData.Vector.Storable.UnsafeSerialize\u003c/a\u003e\n perform much better when serialization does not need to account for\n host endianness and word size.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.Serialize",
          "name": "Serialize",
          "package": "cereal-vector",
          "source": "src/Data-Vector-Serialize.html",
          "type": "module"
        },
        "index": {
          "description": "Data.Serialize functions for Data.Vector.Generic vectors Orphan instances are provided for Data.Vector Data.Vector.Unboxed Data.Vector.Storable and Data.Vector.Primitive vectors The serialized format is an Int64 representing the length of the vector followed by the Data.Serialize contents of each element Note that the functions in Data.Vector.Storable.UnsafeSerialize perform much better when serialization does not need to account for host endianness and word size",
          "hierarchy": "Data Vector Serialize",
          "module": "Data.Vector.Serialize",
          "name": "Serialize",
          "package": "cereal-vector",
          "partial": "Serialize",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cereal-vector/docs/Data-Vector-Serialize.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Serialize",
          "name": "genericGetVector",
          "package": "cereal-vector",
          "signature": "Get (v a)",
          "source": "src/Data-Vector-Serialize.html#genericGetVector",
          "type": "function"
        },
        "index": {
          "description": "Read Vector",
          "hierarchy": "Data Vector Serialize",
          "module": "Data.Vector.Serialize",
          "name": "genericGetVector",
          "package": "cereal-vector",
          "partial": "Get Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-vector/docs/Data-Vector-Serialize.html#v:genericGetVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e using custom \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e for the\n vector's elements.\n\u003c/p\u003e",
          "module": "Data.Vector.Serialize",
          "name": "genericGetVectorWith",
          "package": "cereal-vector",
          "signature": "Get a -\u003e Get (v a)",
          "source": "src/Data-Vector-Serialize.html#genericGetVectorWith",
          "type": "function"
        },
        "index": {
          "description": "Read Vector using custom Get for the vector elements",
          "hierarchy": "Data Vector Serialize",
          "module": "Data.Vector.Serialize",
          "name": "genericGetVectorWith",
          "normalized": "Get a-\u003eGet(b a)",
          "package": "cereal-vector",
          "partial": "Get Vector With",
          "signature": "Get a-\u003eGet(v a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-vector/docs/Data-Vector-Serialize.html#v:genericGetVectorWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Serialize",
          "name": "genericPutVector",
          "package": "cereal-vector",
          "signature": "Putter (v a)",
          "source": "src/Data-Vector-Serialize.html#genericPutVector",
          "type": "function"
        },
        "index": {
          "description": "Write Vector",
          "hierarchy": "Data Vector Serialize",
          "module": "Data.Vector.Serialize",
          "name": "genericPutVector",
          "package": "cereal-vector",
          "partial": "Put Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-vector/docs/Data-Vector-Serialize.html#v:genericPutVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e using custom \u003ccode\u003e\u003ca\u003ePutter\u003c/a\u003e\u003c/code\u003e for\n the vector's elements.\n\u003c/p\u003e",
          "module": "Data.Vector.Serialize",
          "name": "genericPutVectorWith",
          "package": "cereal-vector",
          "signature": "Putter a -\u003e Putter (v a)",
          "source": "src/Data-Vector-Serialize.html#genericPutVectorWith",
          "type": "function"
        },
        "index": {
          "description": "Write Vector using custom Putter for the vector elements",
          "hierarchy": "Data Vector Serialize",
          "module": "Data.Vector.Serialize",
          "name": "genericPutVectorWith",
          "normalized": "Putter a-\u003ePutter(b a)",
          "package": "cereal-vector",
          "partial": "Put Vector With",
          "signature": "Putter a-\u003ePutter(v a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-vector/docs/Data-Vector-Serialize.html#v:genericPutVectorWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficient, but unsafe \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePutter\u003c/a\u003e\u003c/code\u003e for\n \u003ca\u003eData.Vector.Storable\u003c/a\u003e vectors. The serialized format is an \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e\n representing the length of the \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e, followed by the raw\n bytes. Therefore behavior may be unpredictable if serialized data\n is transferred between machines with different word size or\n endianness.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.Storable.UnsafeSerialize",
          "name": "UnsafeSerialize",
          "package": "cereal-vector",
          "source": "src/Data-Vector-Storable-UnsafeSerialize.html",
          "type": "module"
        },
        "index": {
          "description": "Efficient but unsafe Get and Putter for Data.Vector.Storable vectors The serialized format is an Int64 representing the length of the Vector followed by the raw bytes Therefore behavior may be unpredictable if serialized data is transferred between machines with different word size or endianness",
          "hierarchy": "Data Vector Storable UnsafeSerialize",
          "module": "Data.Vector.Storable.UnsafeSerialize",
          "name": "UnsafeSerialize",
          "package": "cereal-vector",
          "partial": "Unsafe Serialize",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cereal-vector/docs/Data-Vector-Storable-UnsafeSerialize.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e in host order, endian form, and word width.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.UnsafeSerialize",
          "name": "unsafeGetVector",
          "package": "cereal-vector",
          "signature": "Get (Vector a)",
          "source": "src/Data-Vector-Storable-UnsafeSerialize.html#unsafeGetVector",
          "type": "function"
        },
        "index": {
          "description": "Get Vector in host order endian form and word width",
          "hierarchy": "Data Vector Storable UnsafeSerialize",
          "module": "Data.Vector.Storable.UnsafeSerialize",
          "name": "unsafeGetVector",
          "package": "cereal-vector",
          "partial": "Get Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-vector/docs/Data-Vector-Storable-UnsafeSerialize.html#v:unsafeGetVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e in host order, endian form, and word width.\n\u003c/p\u003e",
          "module": "Data.Vector.Storable.UnsafeSerialize",
          "name": "unsafePutVector",
          "package": "cereal-vector",
          "signature": "Putter (Vector a)",
          "source": "src/Data-Vector-Storable-UnsafeSerialize.html#unsafePutVector",
          "type": "function"
        },
        "index": {
          "description": "Put Vector in host order endian form and word width",
          "hierarchy": "Data Vector Storable UnsafeSerialize",
          "module": "Data.Vector.Storable.UnsafeSerialize",
          "name": "unsafePutVector",
          "package": "cereal-vector",
          "partial": "Put Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-vector/docs/Data-Vector-Storable-UnsafeSerialize.html#v:unsafePutVector"
      }
    }
  ]
]