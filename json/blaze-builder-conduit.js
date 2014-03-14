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
        "word": "blaze-builder-conduit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvert a stream of blaze-builder \u003ccode\u003eBuilder\u003c/code\u003es into a stream of \u003ccode\u003eByteString\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eAdapted from blaze-builder-enumerator, written by myself and Simon Meier.\n\u003c/p\u003e\u003cp\u003eNote that the functions here can work in any monad built on top of \u003ccode\u003eIO\u003c/code\u003e or\n \u003ccode\u003eST\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Conduit.Blaze",
          "name": "Blaze",
          "package": "blaze-builder-conduit",
          "source": "src/Data-Conduit-Blaze.html",
          "type": "module"
        },
        "index": {
          "description": "Convert stream of blaze-builder Builder into stream of ByteString Adapted from blaze-builder-enumerator written by myself and Simon Meier Note that the functions here can work in any monad built on top of IO or ST",
          "hierarchy": "Data Conduit Blaze",
          "module": "Data.Conduit.Blaze",
          "name": "Blaze",
          "package": "blaze-builder-conduit",
          "partial": "Blaze",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-conduit/docs/Data-Conduit-Blaze.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA buffer \u003ccode\u003eBuffer fpbuf p0 op ope\u003c/code\u003e describes a buffer with the underlying\n byte array \u003ccode\u003efpbuf..ope\u003c/code\u003e, the currently written slice \u003ccode\u003ep0..op\u003c/code\u003e and the free\n space \u003ccode\u003eop..ope\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Conduit.Blaze",
          "name": "Buffer",
          "package": "blaze-builder-conduit",
          "type": "data"
        },
        "index": {
          "description": "buffer Buffer fpbuf p0 op ope describes buffer with the underlying byte array fpbuf..ope the currently written slice p0..op and the free space op..ope",
          "hierarchy": "Data Conduit Blaze",
          "module": "Data.Conduit.Blaze",
          "name": "Buffer",
          "package": "blaze-builder-conduit",
          "partial": "Buffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-conduit/docs/Data-Conduit-Blaze.html#t:Buffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA buffer allocation strategy \u003ccode\u003e(buf0, nextBuf)\u003c/code\u003e specifies the initial\n buffer to use and how to compute a new buffer \u003ccode\u003enextBuf minSize buf\u003c/code\u003e with at\n least size \u003ccode\u003eminSize\u003c/code\u003e from a filled buffer \u003ccode\u003ebuf\u003c/code\u003e. The double nesting of the\n \u003ccode\u003eIO\u003c/code\u003e monad helps to ensure that the reference to the filled buffer \u003ccode\u003ebuf\u003c/code\u003e is\n lost as soon as possible, but the new buffer doesn't have to be allocated\n too early.\n\u003c/p\u003e",
          "module": "Data.Conduit.Blaze",
          "name": "BufferAllocStrategy",
          "package": "blaze-builder-conduit",
          "type": "type"
        },
        "index": {
          "description": "buffer allocation strategy buf0 nextBuf specifies the initial buffer to use and how to compute new buffer nextBuf minSize buf with at least size minSize from filled buffer buf The double nesting of the IO monad helps to ensure that the reference to the filled buffer buf is lost as soon as possible but the new buffer doesn have to be allocated too early",
          "hierarchy": "Data Conduit Blaze",
          "module": "Data.Conduit.Blaze",
          "name": "BufferAllocStrategy",
          "package": "blaze-builder-conduit",
          "partial": "Buffer Alloc Strategy",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-conduit/docs/Data-Conduit-Blaze.html#t:BufferAllocStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe simplest buffer allocation strategy: whenever a buffer is requested,\n allocate a new one that is big enough for the next build step to execute.\n\u003c/p\u003e\u003cp\u003eNOTE that this allocation strategy may spill quite some memory upon direct\n insertion of a bytestring by the builder. Thats no problem for garbage\n collection, but it may lead to unreasonably high memory consumption in\n special circumstances.\n\u003c/p\u003e",
          "module": "Data.Conduit.Blaze",
          "name": "allNewBuffersStrategy",
          "package": "blaze-builder-conduit",
          "signature": "Int -\u003e BufferAllocStrategy",
          "type": "function"
        },
        "index": {
          "description": "The simplest buffer allocation strategy whenever buffer is requested allocate new one that is big enough for the next build step to execute NOTE that this allocation strategy may spill quite some memory upon direct insertion of bytestring by the builder Thats no problem for garbage collection but it may lead to unreasonably high memory consumption in special circumstances",
          "hierarchy": "Data Conduit Blaze",
          "module": "Data.Conduit.Blaze",
          "name": "allNewBuffersStrategy",
          "normalized": "Int-\u003eBufferAllocStrategy",
          "package": "blaze-builder-conduit",
          "partial": "New Buffers Strategy",
          "signature": "Int-\u003eBufferAllocStrategy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-conduit/docs/Data-Conduit-Blaze.html#v:allNewBuffersStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eallocBuffer size\u003c/code\u003e allocates a new buffer of size \u003ccode\u003esize\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Conduit.Blaze",
          "name": "allocBuffer",
          "package": "blaze-builder-conduit",
          "signature": "Int -\u003e IO Buffer",
          "type": "function"
        },
        "index": {
          "description": "allocBuffer size allocates new buffer of size size",
          "hierarchy": "Data Conduit Blaze",
          "module": "Data.Conduit.Blaze",
          "name": "allocBuffer",
          "normalized": "Int-\u003eIO Buffer",
          "package": "blaze-builder-conduit",
          "partial": "Buffer",
          "signature": "Int-\u003eIO Buffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-conduit/docs/Data-Conduit-Blaze.html#v:allocBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe size of the whole byte array underlying the buffer.\n\u003c/p\u003e",
          "module": "Data.Conduit.Blaze",
          "name": "bufferSize",
          "package": "blaze-builder-conduit",
          "signature": "Buffer -\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "The size of the whole byte array underlying the buffer",
          "hierarchy": "Data Conduit Blaze",
          "module": "Data.Conduit.Blaze",
          "name": "bufferSize",
          "normalized": "Buffer-\u003eInt",
          "package": "blaze-builder-conduit",
          "partial": "Size",
          "signature": "Buffer-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-conduit/docs/Data-Conduit-Blaze.html#v:bufferSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrementally execute builders and pass on the filled chunks as\n bytestrings.\n\u003c/p\u003e",
          "module": "Data.Conduit.Blaze",
          "name": "builderToByteString",
          "package": "blaze-builder-conduit",
          "signature": "Conduit Builder m ByteString",
          "source": "src/Data-Conduit-Blaze.html#builderToByteString",
          "type": "function"
        },
        "index": {
          "description": "Incrementally execute builders and pass on the filled chunks as bytestrings",
          "hierarchy": "Data Conduit Blaze",
          "module": "Data.Conduit.Blaze",
          "name": "builderToByteString",
          "package": "blaze-builder-conduit",
          "partial": "To Byte String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-conduit/docs/Data-Conduit-Blaze.html#v:builderToByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSince 0.0.2\n\u003c/p\u003e",
          "module": "Data.Conduit.Blaze",
          "name": "builderToByteStringFlush",
          "package": "blaze-builder-conduit",
          "signature": "Conduit (Flush Builder) m (Flush ByteString)",
          "source": "src/Data-Conduit-Blaze.html#builderToByteStringFlush",
          "type": "function"
        },
        "index": {
          "description": "Since",
          "hierarchy": "Data Conduit Blaze",
          "module": "Data.Conduit.Blaze",
          "name": "builderToByteStringFlush",
          "package": "blaze-builder-conduit",
          "partial": "To Byte String Flush",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-conduit/docs/Data-Conduit-Blaze.html#v:builderToByteStringFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA conduit that incrementally executes builders and passes on the\n filled chunks as bytestrings to an inner sink.\n\u003c/p\u003e\u003cp\u003eINV: All bytestrings passed to the inner sink are non-empty.\n\u003c/p\u003e",
          "module": "Data.Conduit.Blaze",
          "name": "builderToByteStringWith",
          "package": "blaze-builder-conduit",
          "signature": "BufferAllocStrategy -\u003e Conduit Builder m ByteString",
          "source": "src/Data-Conduit-Blaze.html#builderToByteStringWith",
          "type": "function"
        },
        "index": {
          "description": "conduit that incrementally executes builders and passes on the filled chunks as bytestrings to an inner sink INV All bytestrings passed to the inner sink are non-empty",
          "hierarchy": "Data Conduit Blaze",
          "module": "Data.Conduit.Blaze",
          "name": "builderToByteStringWith",
          "normalized": "BufferAllocStrategy-\u003eConduit Builder a ByteString",
          "package": "blaze-builder-conduit",
          "partial": "To Byte String With",
          "signature": "BufferAllocStrategy-\u003eConduit Builder m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-conduit/docs/Data-Conduit-Blaze.html#v:builderToByteStringWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSince 0.0.2\n\u003c/p\u003e",
          "module": "Data.Conduit.Blaze",
          "name": "builderToByteStringWithFlush",
          "package": "blaze-builder-conduit",
          "signature": "BufferAllocStrategy -\u003e Conduit (Flush Builder) m (Flush ByteString)",
          "source": "src/Data-Conduit-Blaze.html#builderToByteStringWithFlush",
          "type": "function"
        },
        "index": {
          "description": "Since",
          "hierarchy": "Data Conduit Blaze",
          "module": "Data.Conduit.Blaze",
          "name": "builderToByteStringWithFlush",
          "normalized": "BufferAllocStrategy-\u003eConduit(Flush Builder)a(Flush ByteString)",
          "package": "blaze-builder-conduit",
          "partial": "To Byte String With Flush",
          "signature": "BufferAllocStrategy-\u003eConduit(Flush Builder)m(Flush ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-conduit/docs/Data-Conduit-Blaze.html#v:builderToByteStringWithFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe size of the free space of the buffer.\n\u003c/p\u003e",
          "module": "Data.Conduit.Blaze",
          "name": "freeSize",
          "package": "blaze-builder-conduit",
          "signature": "Buffer -\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "The size of the free space of the buffer",
          "hierarchy": "Data Conduit Blaze",
          "module": "Data.Conduit.Blaze",
          "name": "freeSize",
          "normalized": "Buffer-\u003eInt",
          "package": "blaze-builder-conduit",
          "partial": "Size",
          "signature": "Buffer-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-conduit/docs/Data-Conduit-Blaze.html#v:freeSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove the beginning of the slice to the next free byte such that the\n remaining free space of the buffer can be filled further. This operation\n is safe and can be used to fill the remaining part of the buffer after a\n direct insertion of a bytestring or a flush.\n\u003c/p\u003e",
          "module": "Data.Conduit.Blaze",
          "name": "nextSlice",
          "package": "blaze-builder-conduit",
          "signature": "Int -\u003e Buffer -\u003e Maybe Buffer",
          "type": "function"
        },
        "index": {
          "description": "Move the beginning of the slice to the next free byte such that the remaining free space of the buffer can be filled further This operation is safe and can be used to fill the remaining part of the buffer after direct insertion of bytestring or flush",
          "hierarchy": "Data Conduit Blaze",
          "module": "Data.Conduit.Blaze",
          "name": "nextSlice",
          "normalized": "Int-\u003eBuffer-\u003eMaybe Buffer",
          "package": "blaze-builder-conduit",
          "partial": "Slice",
          "signature": "Int-\u003eBuffer-\u003eMaybe Buffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-conduit/docs/Data-Conduit-Blaze.html#v:nextSlice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResets the beginning of the next slice and the next free byte such that\n the whole buffer can be filled again.\n\u003c/p\u003e",
          "module": "Data.Conduit.Blaze",
          "name": "reuseBuffer",
          "package": "blaze-builder-conduit",
          "signature": "Buffer -\u003e Buffer",
          "type": "function"
        },
        "index": {
          "description": "Resets the beginning of the next slice and the next free byte such that the whole buffer can be filled again",
          "hierarchy": "Data Conduit Blaze",
          "module": "Data.Conduit.Blaze",
          "name": "reuseBuffer",
          "normalized": "Buffer-\u003eBuffer",
          "package": "blaze-builder-conduit",
          "partial": "Buffer",
          "signature": "Buffer-\u003eBuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-conduit/docs/Data-Conduit-Blaze.html#v:reuseBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unsafe, but possibly more efficient buffer allocation strategy:\n reuse the buffer, if it is big enough for the next build step to execute.\n\u003c/p\u003e",
          "module": "Data.Conduit.Blaze",
          "name": "reuseBufferStrategy",
          "package": "blaze-builder-conduit",
          "signature": "IO Buffer -\u003e BufferAllocStrategy",
          "type": "function"
        },
        "index": {
          "description": "An unsafe but possibly more efficient buffer allocation strategy reuse the buffer if it is big enough for the next build step to execute",
          "hierarchy": "Data Conduit Blaze",
          "module": "Data.Conduit.Blaze",
          "name": "reuseBufferStrategy",
          "normalized": "IO Buffer-\u003eBufferAllocStrategy",
          "package": "blaze-builder-conduit",
          "partial": "Buffer Strategy",
          "signature": "IO Buffer-\u003eBufferAllocStrategy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-conduit/docs/Data-Conduit-Blaze.html#v:reuseBufferStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe size of the written slice in the buffer.\n\u003c/p\u003e",
          "module": "Data.Conduit.Blaze",
          "name": "sliceSize",
          "package": "blaze-builder-conduit",
          "signature": "Buffer -\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "The size of the written slice in the buffer",
          "hierarchy": "Data Conduit Blaze",
          "module": "Data.Conduit.Blaze",
          "name": "sliceSize",
          "normalized": "Buffer-\u003eInt",
          "package": "blaze-builder-conduit",
          "partial": "Size",
          "signature": "Buffer-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-conduit/docs/Data-Conduit-Blaze.html#v:sliceSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrementally execute builders on the given buffer and pass on the filled\n chunks as bytestrings. Note that, if the given buffer is too small for the\n execution of a build step, a larger one will be allocated.\n\u003c/p\u003e\u003cp\u003eWARNING: This conduit yields bytestrings that are NOT\n referentially transparent. Their content will be overwritten as soon\n as control is returned from the inner sink!\n\u003c/p\u003e",
          "module": "Data.Conduit.Blaze",
          "name": "unsafeBuilderToByteString",
          "package": "blaze-builder-conduit",
          "signature": "IO Buffer -\u003e Conduit Builder m ByteString",
          "source": "src/Data-Conduit-Blaze.html#unsafeBuilderToByteString",
          "type": "function"
        },
        "index": {
          "description": "Incrementally execute builders on the given buffer and pass on the filled chunks as bytestrings Note that if the given buffer is too small for the execution of build step larger one will be allocated WARNING This conduit yields bytestrings that are NOT referentially transparent Their content will be overwritten as soon as control is returned from the inner sink",
          "hierarchy": "Data Conduit Blaze",
          "module": "Data.Conduit.Blaze",
          "name": "unsafeBuilderToByteString",
          "normalized": "IO Buffer-\u003eConduit Builder a ByteString",
          "package": "blaze-builder-conduit",
          "partial": "Builder To Byte String",
          "signature": "IO Buffer-\u003eConduit Builder m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-conduit/docs/Data-Conduit-Blaze.html#v:unsafeBuilderToByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the buffer to a bytestring. This operation is unsafe in the sense\n that created bytestring shares the underlying byte array with the buffer.\n Hence, depending on the later use of this buffer (e.g., if it gets reset and\n filled again) referential transparency may be lost.\n\u003c/p\u003e",
          "module": "Data.Conduit.Blaze",
          "name": "unsafeFreezeBuffer",
          "package": "blaze-builder-conduit",
          "signature": "Buffer -\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Convert the buffer to bytestring This operation is unsafe in the sense that created bytestring shares the underlying byte array with the buffer Hence depending on the later use of this buffer e.g if it gets reset and filled again referential transparency may be lost",
          "hierarchy": "Data Conduit Blaze",
          "module": "Data.Conduit.Blaze",
          "name": "unsafeFreezeBuffer",
          "normalized": "Buffer-\u003eByteString",
          "package": "blaze-builder-conduit",
          "partial": "Freeze Buffer",
          "signature": "Buffer-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-conduit/docs/Data-Conduit-Blaze.html#v:unsafeFreezeBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a buffer to a non-empty bytestring. See \u003ccode\u003e\u003ca\u003eunsafeFreezeBuffer\u003c/a\u003e\u003c/code\u003e for\n the explanation of why this operation may be unsafe.\n\u003c/p\u003e",
          "module": "Data.Conduit.Blaze",
          "name": "unsafeFreezeNonEmptyBuffer",
          "package": "blaze-builder-conduit",
          "signature": "Buffer -\u003e Maybe ByteString",
          "type": "function"
        },
        "index": {
          "description": "Convert buffer to non-empty bytestring See unsafeFreezeBuffer for the explanation of why this operation may be unsafe",
          "hierarchy": "Data Conduit Blaze",
          "module": "Data.Conduit.Blaze",
          "name": "unsafeFreezeNonEmptyBuffer",
          "normalized": "Buffer-\u003eMaybe ByteString",
          "package": "blaze-builder-conduit",
          "partial": "Freeze Non Empty Buffer",
          "signature": "Buffer-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-conduit/docs/Data-Conduit-Blaze.html#v:unsafeFreezeNonEmptyBuffer"
      }
    }
  ]
]