[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal-vector/docs/Data-Vector-Serialize.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca\u003eData.Serialize\u003c/a\u003e functions for \u003ca\u003eData.Vector.Generic\u003c/a\u003e\n vectors. Orphan instances are provided for \u003ca\u003eData.Vector\u003c/a\u003e,\n \u003ca\u003eData.Vector.Unboxed\u003c/a\u003e, \u003ca\u003eData.Vector.Storable\u003c/a\u003e, and\n \u003ca\u003eData.Vector.Primitive\u003c/a\u003e vectors.\n\u003c/p\u003e\u003cp\u003eThe serialized format is an \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e representing the length of the\n vector, followed by the \u003ca\u003eData.Serialize\u003c/a\u003ed contents of each element.\n\u003c/p\u003e\u003cp\u003eNote that the functions in \u003ca\u003eData.Vector.Storable.UnsafeSerialize\u003c/a\u003e\n perform much better when serialization does not need to account for\n host endianness and word size.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Vector.Serialize",
        "fct-package": "cereal-vector",
        "fct-signature": "module",
        "fct-source": "src/Data-Vector-Serialize.html",
        "fct-type": "module",
        "title": "Serialize"
      },
      "index": {
        "description": "Data.Serialize functions for Data.Vector.Generic vectors Orphan instances are provided for Data.Vector Data.Vector.Unboxed Data.Vector.Storable and Data.Vector.Primitive vectors The serialized format is an Int64 representing the length of the vector followed by the Data.Serialize contents of each element Note that the functions in Data.Vector.Storable.UnsafeSerialize perform much better when serialization does not need to account for host endianness and word size",
        "hierarchy": "Data Vector Serialize",
        "module": "Data.Vector.Serialize",
        "name": "Serialize",
        "normalized": "",
        "package": "cereal-vector",
        "partial": "Serialize",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal-vector/docs/Data-Vector-Serialize.html#v:genericGetVector",
      "description": {
        "fct-descr": "\u003cp\u003eRead a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Serialize",
        "fct-package": "cereal-vector",
        "fct-signature": "Get (v a)",
        "fct-source": "src/Data-Vector-Serialize.html#genericGetVector",
        "fct-type": "function",
        "title": "genericGetVector"
      },
      "index": {
        "description": "Read Vector",
        "hierarchy": "Data Vector Serialize",
        "module": "Data.Vector.Serialize",
        "name": "genericGetVector",
        "normalized": "",
        "package": "cereal-vector",
        "partial": "Get Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal-vector/docs/Data-Vector-Serialize.html#v:genericGetVectorWith",
      "description": {
        "fct-descr": "\u003cp\u003eRead a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e using custom \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e for the\n vector's elements.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Serialize",
        "fct-package": "cereal-vector",
        "fct-signature": "Get a -\u003e Get (v a)",
        "fct-source": "src/Data-Vector-Serialize.html#genericGetVectorWith",
        "fct-type": "function",
        "title": "genericGetVectorWith"
      },
      "index": {
        "description": "Read Vector using custom Get for the vector elements",
        "hierarchy": "Data Vector Serialize",
        "module": "Data.Vector.Serialize",
        "name": "genericGetVectorWith",
        "normalized": "Get a-\u003eGet(b a)",
        "package": "cereal-vector",
        "partial": "Get Vector With",
        "signature": "Get a-\u003eGet(v a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal-vector/docs/Data-Vector-Serialize.html#v:genericPutVector",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Serialize",
        "fct-package": "cereal-vector",
        "fct-signature": "Putter (v a)",
        "fct-source": "src/Data-Vector-Serialize.html#genericPutVector",
        "fct-type": "function",
        "title": "genericPutVector"
      },
      "index": {
        "description": "Write Vector",
        "hierarchy": "Data Vector Serialize",
        "module": "Data.Vector.Serialize",
        "name": "genericPutVector",
        "normalized": "",
        "package": "cereal-vector",
        "partial": "Put Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal-vector/docs/Data-Vector-Serialize.html#v:genericPutVectorWith",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e using custom \u003ccode\u003e\u003ca\u003ePutter\u003c/a\u003e\u003c/code\u003e for\n the vector's elements.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Serialize",
        "fct-package": "cereal-vector",
        "fct-signature": "Putter a -\u003e Putter (v a)",
        "fct-source": "src/Data-Vector-Serialize.html#genericPutVectorWith",
        "fct-type": "function",
        "title": "genericPutVectorWith"
      },
      "index": {
        "description": "Write Vector using custom Putter for the vector elements",
        "hierarchy": "Data Vector Serialize",
        "module": "Data.Vector.Serialize",
        "name": "genericPutVectorWith",
        "normalized": "Putter a-\u003ePutter(b a)",
        "package": "cereal-vector",
        "partial": "Put Vector With",
        "signature": "Putter a-\u003ePutter(v a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal-vector/docs/Data-Vector-Storable-UnsafeSerialize.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficient, but unsafe \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePutter\u003c/a\u003e\u003c/code\u003e for\n \u003ca\u003eData.Vector.Storable\u003c/a\u003e vectors. The serialized format is an \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e\n representing the length of the \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e, followed by the raw\n bytes. Therefore behavior may be unpredictable if serialized data\n is transferred between machines with different word size or\n endianness.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Vector.Storable.UnsafeSerialize",
        "fct-package": "cereal-vector",
        "fct-signature": "module",
        "fct-source": "src/Data-Vector-Storable-UnsafeSerialize.html",
        "fct-type": "module",
        "title": "UnsafeSerialize"
      },
      "index": {
        "description": "Efficient but unsafe Get and Putter for Data.Vector.Storable vectors The serialized format is an Int64 representing the length of the Vector followed by the raw bytes Therefore behavior may be unpredictable if serialized data is transferred between machines with different word size or endianness",
        "hierarchy": "Data Vector Storable UnsafeSerialize",
        "module": "Data.Vector.Storable.UnsafeSerialize",
        "name": "UnsafeSerialize",
        "normalized": "",
        "package": "cereal-vector",
        "partial": "Unsafe Serialize",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal-vector/docs/Data-Vector-Storable-UnsafeSerialize.html#v:unsafeGetVector",
      "description": {
        "fct-descr": "\u003cp\u003eGet a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e in host order, endian form, and word width.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Storable.UnsafeSerialize",
        "fct-package": "cereal-vector",
        "fct-signature": "Get (Vector a)",
        "fct-source": "src/Data-Vector-Storable-UnsafeSerialize.html#unsafeGetVector",
        "fct-type": "function",
        "title": "unsafeGetVector"
      },
      "index": {
        "description": "Get Vector in host order endian form and word width",
        "hierarchy": "Data Vector Storable UnsafeSerialize",
        "module": "Data.Vector.Storable.UnsafeSerialize",
        "name": "unsafeGetVector",
        "normalized": "",
        "package": "cereal-vector",
        "partial": "Get Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal-vector/docs/Data-Vector-Storable-UnsafeSerialize.html#v:unsafePutVector",
      "description": {
        "fct-descr": "\u003cp\u003ePut a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e in host order, endian form, and word width.\n\u003c/p\u003e",
        "fct-module": "Data.Vector.Storable.UnsafeSerialize",
        "fct-package": "cereal-vector",
        "fct-signature": "Putter (Vector a)",
        "fct-source": "src/Data-Vector-Storable-UnsafeSerialize.html#unsafePutVector",
        "fct-type": "function",
        "title": "unsafePutVector"
      },
      "index": {
        "description": "Put Vector in host order endian form and word width",
        "hierarchy": "Data Vector Storable UnsafeSerialize",
        "module": "Data.Vector.Storable.UnsafeSerialize",
        "name": "unsafePutVector",
        "normalized": "",
        "package": "cereal-vector",
        "partial": "Put Vector",
        "signature": ""
      }
    }
  }
]