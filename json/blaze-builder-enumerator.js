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
        "word": "blaze-builder-enumerator"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInfrastructure and enumeratees for the incremental execution of builders and\n passing on of the filled chunks as bytestrings to an inner iteratee.\n\u003c/p\u003e\u003cp\u003eNote that the \u003ccode\u003eBuffer\u003c/code\u003e code is likely to move/change in order to\n reconciliate it with the rest of the blaze-builder library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "Enumerator",
          "package": "blaze-builder-enumerator",
          "source": "src/Blaze-ByteString-Builder-Enumerator.html",
          "type": "module"
        },
        "index": {
          "description": "Infrastructure and enumeratees for the incremental execution of builders and passing on of the filled chunks as bytestrings to an inner iteratee Note that the Buffer code is likely to move change in order to reconciliate it with the rest of the blaze-builder library",
          "hierarchy": "Blaze ByteString Builder Enumerator",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "Enumerator",
          "package": "blaze-builder-enumerator",
          "partial": "Enumerator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-enumerator/docs/Blaze-ByteString-Builder-Enumerator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA buffer \u003ccode\u003eBuffer fpbuf p0 op ope\u003c/code\u003e describes a buffer with the underlying\n byte array \u003ccode\u003efpbuf..ope\u003c/code\u003e, the currently written slice \u003ccode\u003ep0..op\u003c/code\u003e and the free\n space \u003ccode\u003eop..ope\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "Buffer",
          "package": "blaze-builder-enumerator",
          "type": "data"
        },
        "index": {
          "description": "buffer Buffer fpbuf p0 op ope describes buffer with the underlying byte array fpbuf..ope the currently written slice p0..op and the free space op..ope",
          "hierarchy": "Blaze ByteString Builder Enumerator",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "Buffer",
          "package": "blaze-builder-enumerator",
          "partial": "Buffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-enumerator/docs/Blaze-ByteString-Builder-Enumerator.html#t:Buffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA buffer allocation strategy \u003ccode\u003e(buf0, nextBuf)\u003c/code\u003e specifies the initial\n buffer to use and how to compute a new buffer \u003ccode\u003enextBuf minSize buf\u003c/code\u003e with at\n least size \u003ccode\u003eminSize\u003c/code\u003e from a filled buffer \u003ccode\u003ebuf\u003c/code\u003e. The double nesting of the\n \u003ccode\u003eIO\u003c/code\u003e monad helps to ensure that the reference to the filled buffer \u003ccode\u003ebuf\u003c/code\u003e is\n lost as soon as possible, but the new buffer doesn't have to be allocated \n too early.\n\u003c/p\u003e",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "BufferAllocStrategy",
          "package": "blaze-builder-enumerator",
          "type": "type"
        },
        "index": {
          "description": "buffer allocation strategy buf0 nextBuf specifies the initial buffer to use and how to compute new buffer nextBuf minSize buf with at least size minSize from filled buffer buf The double nesting of the IO monad helps to ensure that the reference to the filled buffer buf is lost as soon as possible but the new buffer doesn have to be allocated too early",
          "hierarchy": "Blaze ByteString Builder Enumerator",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "BufferAllocStrategy",
          "package": "blaze-builder-enumerator",
          "partial": "Buffer Alloc Strategy",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-enumerator/docs/Blaze-ByteString-Builder-Enumerator.html#t:BufferAllocStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe simplest buffer allocation strategy: whenever a buffer is requested,\n allocate a new one that is big enough for the next build step to execute.\n\u003c/p\u003e\u003cp\u003eNOTE that this allocation strategy may spill quite some memory upon direct\n insertion of a bytestring by the builder. Thats no problem for garbage\n collection, but it may lead to unreasonably high memory consumption in\n special circumstances.\n\u003c/p\u003e",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "allNewBuffersStrategy",
          "package": "blaze-builder-enumerator",
          "signature": "Int -\u003e BufferAllocStrategy",
          "type": "function"
        },
        "index": {
          "description": "The simplest buffer allocation strategy whenever buffer is requested allocate new one that is big enough for the next build step to execute NOTE that this allocation strategy may spill quite some memory upon direct insertion of bytestring by the builder Thats no problem for garbage collection but it may lead to unreasonably high memory consumption in special circumstances",
          "hierarchy": "Blaze ByteString Builder Enumerator",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "allNewBuffersStrategy",
          "normalized": "Int-\u003eBufferAllocStrategy",
          "package": "blaze-builder-enumerator",
          "partial": "New Buffers Strategy",
          "signature": "Int-\u003eBufferAllocStrategy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-enumerator/docs/Blaze-ByteString-Builder-Enumerator.html#v:allNewBuffersStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eallocBuffer size\u003c/code\u003e allocates a new buffer of size \u003ccode\u003esize\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "allocBuffer",
          "package": "blaze-builder-enumerator",
          "signature": "Int -\u003e IO Buffer",
          "type": "function"
        },
        "index": {
          "description": "allocBuffer size allocates new buffer of size size",
          "hierarchy": "Blaze ByteString Builder Enumerator",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "allocBuffer",
          "normalized": "Int-\u003eIO Buffer",
          "package": "blaze-builder-enumerator",
          "partial": "Buffer",
          "signature": "Int-\u003eIO Buffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-enumerator/docs/Blaze-ByteString-Builder-Enumerator.html#v:allocBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe size of the whole byte array underlying the buffer.\n\u003c/p\u003e",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "bufferSize",
          "package": "blaze-builder-enumerator",
          "signature": "Buffer -\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "The size of the whole byte array underlying the buffer",
          "hierarchy": "Blaze ByteString Builder Enumerator",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "bufferSize",
          "normalized": "Buffer-\u003eInt",
          "package": "blaze-builder-enumerator",
          "partial": "Size",
          "signature": "Buffer-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-enumerator/docs/Blaze-ByteString-Builder-Enumerator.html#v:bufferSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrementally execute builders and pass on the filled chunks as\n bytestrings.\n\u003c/p\u003e",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "builderToByteString",
          "package": "blaze-builder-enumerator",
          "signature": "Enumeratee Builder ByteString m a",
          "source": "src/Blaze-ByteString-Builder-Enumerator.html#builderToByteString",
          "type": "function"
        },
        "index": {
          "description": "Incrementally execute builders and pass on the filled chunks as bytestrings",
          "hierarchy": "Blaze ByteString Builder Enumerator",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "builderToByteString",
          "package": "blaze-builder-enumerator",
          "partial": "To Byte String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-enumerator/docs/Blaze-ByteString-Builder-Enumerator.html#v:builderToByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn enumeratee that incrementally executes builders and passes on the\n filled chunks as bytestrings to an inner iteratee.\n\u003c/p\u003e\u003cp\u003eINV: All bytestrings passed to the inner iteratee are non-empty.\n\u003c/p\u003e",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "builderToByteStringWith",
          "package": "blaze-builder-enumerator",
          "signature": "BufferAllocStrategy -\u003e Enumeratee Builder ByteString m a",
          "source": "src/Blaze-ByteString-Builder-Enumerator.html#builderToByteStringWith",
          "type": "function"
        },
        "index": {
          "description": "An enumeratee that incrementally executes builders and passes on the filled chunks as bytestrings to an inner iteratee INV All bytestrings passed to the inner iteratee are non-empty",
          "hierarchy": "Blaze ByteString Builder Enumerator",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "builderToByteStringWith",
          "normalized": "BufferAllocStrategy-\u003eEnumeratee Builder ByteString a b",
          "package": "blaze-builder-enumerator",
          "partial": "To Byte String With",
          "signature": "BufferAllocStrategy-\u003eEnumeratee Builder ByteString m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-enumerator/docs/Blaze-ByteString-Builder-Enumerator.html#v:builderToByteStringWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe size of the free space of the buffer.\n\u003c/p\u003e",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "freeSize",
          "package": "blaze-builder-enumerator",
          "signature": "Buffer -\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "The size of the free space of the buffer",
          "hierarchy": "Blaze ByteString Builder Enumerator",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "freeSize",
          "normalized": "Buffer-\u003eInt",
          "package": "blaze-builder-enumerator",
          "partial": "Size",
          "signature": "Buffer-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-enumerator/docs/Blaze-ByteString-Builder-Enumerator.html#v:freeSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove the beginning of the slice to the next free byte such that the\n remaining free space of the buffer can be filled further. This operation\n is safe and can be used to fill the remaining part of the buffer after a\n direct insertion of a bytestring or a flush.\n\u003c/p\u003e",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "nextSlice",
          "package": "blaze-builder-enumerator",
          "signature": "Int -\u003e Buffer -\u003e Maybe Buffer",
          "type": "function"
        },
        "index": {
          "description": "Move the beginning of the slice to the next free byte such that the remaining free space of the buffer can be filled further This operation is safe and can be used to fill the remaining part of the buffer after direct insertion of bytestring or flush",
          "hierarchy": "Blaze ByteString Builder Enumerator",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "nextSlice",
          "normalized": "Int-\u003eBuffer-\u003eMaybe Buffer",
          "package": "blaze-builder-enumerator",
          "partial": "Slice",
          "signature": "Int-\u003eBuffer-\u003eMaybe Buffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-enumerator/docs/Blaze-ByteString-Builder-Enumerator.html#v:nextSlice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResets the beginning of the next slice and the next free byte such that\n the whole buffer can be filled again.\n\u003c/p\u003e",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "reuseBuffer",
          "package": "blaze-builder-enumerator",
          "signature": "Buffer -\u003e Buffer",
          "type": "function"
        },
        "index": {
          "description": "Resets the beginning of the next slice and the next free byte such that the whole buffer can be filled again",
          "hierarchy": "Blaze ByteString Builder Enumerator",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "reuseBuffer",
          "normalized": "Buffer-\u003eBuffer",
          "package": "blaze-builder-enumerator",
          "partial": "Buffer",
          "signature": "Buffer-\u003eBuffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-enumerator/docs/Blaze-ByteString-Builder-Enumerator.html#v:reuseBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unsafe, but possibly more efficient buffer allocation strategy:\n reuse the buffer, if it is big enough for the next build step to execute.\n\u003c/p\u003e",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "reuseBufferStrategy",
          "package": "blaze-builder-enumerator",
          "signature": "IO Buffer -\u003e BufferAllocStrategy",
          "type": "function"
        },
        "index": {
          "description": "An unsafe but possibly more efficient buffer allocation strategy reuse the buffer if it is big enough for the next build step to execute",
          "hierarchy": "Blaze ByteString Builder Enumerator",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "reuseBufferStrategy",
          "normalized": "IO Buffer-\u003eBufferAllocStrategy",
          "package": "blaze-builder-enumerator",
          "partial": "Buffer Strategy",
          "signature": "IO Buffer-\u003eBufferAllocStrategy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-enumerator/docs/Blaze-ByteString-Builder-Enumerator.html#v:reuseBufferStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe size of the written slice in the buffer.\n\u003c/p\u003e",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "sliceSize",
          "package": "blaze-builder-enumerator",
          "signature": "Buffer -\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "The size of the written slice in the buffer",
          "hierarchy": "Blaze ByteString Builder Enumerator",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "sliceSize",
          "normalized": "Buffer-\u003eInt",
          "package": "blaze-builder-enumerator",
          "partial": "Size",
          "signature": "Buffer-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-enumerator/docs/Blaze-ByteString-Builder-Enumerator.html#v:sliceSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrementally execute builders on the given buffer and pass on the filled\n chunks as bytestrings. Note that, if the given buffer is too small for the\n execution of a build step, a larger one will be allocated.\n\u003c/p\u003e\u003cp\u003eWARNING: This enumeratee yields bytestrings that are NOT\n referentially transparent. Their content will be overwritten as soon\n as control is returned from the inner iteratee!\n\u003c/p\u003e",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "unsafeBuilderToByteString",
          "package": "blaze-builder-enumerator",
          "signature": "IO Buffer -\u003e Enumeratee Builder ByteString m a",
          "source": "src/Blaze-ByteString-Builder-Enumerator.html#unsafeBuilderToByteString",
          "type": "function"
        },
        "index": {
          "description": "Incrementally execute builders on the given buffer and pass on the filled chunks as bytestrings Note that if the given buffer is too small for the execution of build step larger one will be allocated WARNING This enumeratee yields bytestrings that are NOT referentially transparent Their content will be overwritten as soon as control is returned from the inner iteratee",
          "hierarchy": "Blaze ByteString Builder Enumerator",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "unsafeBuilderToByteString",
          "normalized": "IO Buffer-\u003eEnumeratee Builder ByteString a b",
          "package": "blaze-builder-enumerator",
          "partial": "Builder To Byte String",
          "signature": "IO Buffer-\u003eEnumeratee Builder ByteString m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-enumerator/docs/Blaze-ByteString-Builder-Enumerator.html#v:unsafeBuilderToByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the buffer to a bytestring. This operation is unsafe in the sense\n that created bytestring shares the underlying byte array with the buffer.\n Hence, depending on the later use of this buffer (e.g., if it gets reset and\n filled again) referential transparency may be lost.\n\u003c/p\u003e",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "unsafeFreezeBuffer",
          "package": "blaze-builder-enumerator",
          "signature": "Buffer -\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Convert the buffer to bytestring This operation is unsafe in the sense that created bytestring shares the underlying byte array with the buffer Hence depending on the later use of this buffer e.g if it gets reset and filled again referential transparency may be lost",
          "hierarchy": "Blaze ByteString Builder Enumerator",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "unsafeFreezeBuffer",
          "normalized": "Buffer-\u003eByteString",
          "package": "blaze-builder-enumerator",
          "partial": "Freeze Buffer",
          "signature": "Buffer-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-enumerator/docs/Blaze-ByteString-Builder-Enumerator.html#v:unsafeFreezeBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a buffer to a non-empty bytestring. See \u003ccode\u003e\u003ca\u003eunsafeFreezeBuffer\u003c/a\u003e\u003c/code\u003e for\n the explanation of why this operation may be unsafe.\n\u003c/p\u003e",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "unsafeFreezeNonEmptyBuffer",
          "package": "blaze-builder-enumerator",
          "signature": "Buffer -\u003e Maybe ByteString",
          "type": "function"
        },
        "index": {
          "description": "Convert buffer to non-empty bytestring See unsafeFreezeBuffer for the explanation of why this operation may be unsafe",
          "hierarchy": "Blaze ByteString Builder Enumerator",
          "module": "Blaze.ByteString.Builder.Enumerator",
          "name": "unsafeFreezeNonEmptyBuffer",
          "normalized": "Buffer-\u003eMaybe ByteString",
          "package": "blaze-builder-enumerator",
          "partial": "Freeze Non Empty Buffer",
          "signature": "Buffer-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/blaze-builder-enumerator/docs/Blaze-ByteString-Builder-Enumerator.html#v:unsafeFreezeNonEmptyBuffer"
      }
    }
  ]
]