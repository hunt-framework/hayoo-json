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
        "word": "bytestring"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtra functions for creating and executing \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es. They are intended\n for application-specific fine-tuning the performance of \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ByteString.Builder.Extra",
          "name": "Extra",
          "package": "bytestring",
          "source": "src/Data-ByteString-Builder-Extra.html",
          "type": "module"
        },
        "index": {
          "description": "Extra functions for creating and executing Builder They are intended for application-specific fine-tuning the performance of Builder",
          "hierarchy": "Data ByteString Builder Extra",
          "module": "Data.ByteString.Builder.Extra",
          "name": "Extra",
          "package": "bytestring",
          "partial": "Extra",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Extra.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA buffer allocation strategy for executing \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Extra",
          "name": "AllocationStrategy",
          "package": "bytestring",
          "source": "src/Data-ByteString-Builder-Internal.html#AllocationStrategy",
          "type": "data"
        },
        "index": {
          "description": "buffer allocation strategy for executing Builder",
          "hierarchy": "Data ByteString Builder Extra",
          "module": "Data.ByteString.Builder.Extra",
          "name": "AllocationStrategy",
          "package": "bytestring",
          "partial": "Allocation Strategy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Extra.html#t:AllocationStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBufferWriter\u003c/a\u003e\u003c/code\u003e represents the result of running a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e.\n It unfolds as a sequence of chunks of data. These chunks come in two forms:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e an IO action for writing the Builder's data into a user-supplied memory\n    buffer.\n\u003c/li\u003e\u003cli\u003e a pre-existing chunks of data represented by a strict \u003ccode\u003eByteString\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWhile this is rather low level, it provides you with full flexibility in\n how the data is written out.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBufferWriter\u003c/a\u003e\u003c/code\u003e itself is an IO action: you supply it with a buffer\n (as a pointer and length) and it will write data into the buffer.\n It returns a number indicating how many bytes were actually written\n (which can be \u003ccode\u003e0\u003c/code\u003e). It also returns a \u003ccode\u003e\u003ca\u003eNext\u003c/a\u003e\u003c/code\u003e which describes what\n comes next.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Extra",
          "name": "BufferWriter",
          "package": "bytestring",
          "source": "src/Data-ByteString-Builder-Extra.html#BufferWriter",
          "type": "type"
        },
        "index": {
          "description": "BufferWriter represents the result of running Builder It unfolds as sequence of chunks of data These chunks come in two forms an IO action for writing the Builder data into user-supplied memory buffer pre-existing chunks of data represented by strict ByteString While this is rather low level it provides you with full flexibility in how the data is written out The BufferWriter itself is an IO action you supply it with buffer as pointer and length and it will write data into the buffer It returns number indicating how many bytes were actually written which can be It also returns Next which describes what comes next",
          "hierarchy": "Data ByteString Builder Extra",
          "module": "Data.ByteString.Builder.Extra",
          "name": "BufferWriter",
          "package": "bytestring",
          "partial": "Buffer Writer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Extra.html#t:BufferWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAfter running a \u003ccode\u003e\u003ca\u003eBufferWriter\u003c/a\u003e\u003c/code\u003e action there are three possibilities for\n what comes next:\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Extra",
          "name": "Next",
          "package": "bytestring",
          "source": "src/Data-ByteString-Builder-Extra.html#Next",
          "type": "data"
        },
        "index": {
          "description": "After running BufferWriter action there are three possibilities for what comes next",
          "hierarchy": "Data ByteString Builder Extra",
          "module": "Data.ByteString.Builder.Extra",
          "name": "Next",
          "package": "bytestring",
          "partial": "Next",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Extra.html#t:Next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn addition to the data that has just been written into your buffer\n by the \u003ccode\u003e\u003ca\u003eBufferWriter\u003c/a\u003e\u003c/code\u003e action, it gives you a pre-existing chunk\n of data as a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. It also gives you the following \u003ccode\u003e\u003ca\u003eBufferWriter\u003c/a\u003e\u003c/code\u003e\n action. It is safe to run this following action using a buffer with as\n much free space as was left by the previous run action.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Extra",
          "name": "Chunk",
          "package": "bytestring",
          "signature": "Chunk !ByteString BufferWriter",
          "source": "src/Data-ByteString-Builder-Extra.html#Next",
          "type": "function"
        },
        "index": {
          "description": "In addition to the data that has just been written into your buffer by the BufferWriter action it gives you pre-existing chunk of data as ByteString It also gives you the following BufferWriter action It is safe to run this following action using buffer with as much free space as was left by the previous run action",
          "hierarchy": "Data ByteString Builder Extra",
          "module": "Data.ByteString.Builder.Extra",
          "name": "Chunk",
          "package": "bytestring",
          "partial": "Chunk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Extra.html#v:Chunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis means we're all done. All the builder data has now been written.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Extra",
          "name": "Done",
          "package": "bytestring",
          "signature": "Done",
          "source": "src/Data-ByteString-Builder-Extra.html#Next",
          "type": "function"
        },
        "index": {
          "description": "This means we re all done All the builder data has now been written",
          "hierarchy": "Data ByteString Builder Extra",
          "module": "Data.ByteString.Builder.Extra",
          "name": "Done",
          "package": "bytestring",
          "partial": "Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Extra.html#v:Done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis indicates that there may be more data to write. It\n gives you the next \u003ccode\u003e\u003ca\u003eBufferWriter\u003c/a\u003e\u003c/code\u003e action. You should call that action\n with an appropriate buffer. The int indicates the \u003cem\u003eminimum\u003c/em\u003e buffer size\n required by the next \u003ccode\u003e\u003ca\u003eBufferWriter\u003c/a\u003e\u003c/code\u003e action. That is, if you call the next\n action you \u003cem\u003emust\u003c/em\u003e supply it with a buffer length of at least this size.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Extra",
          "name": "More",
          "package": "bytestring",
          "signature": "More !Int BufferWriter",
          "source": "src/Data-ByteString-Builder-Extra.html#Next",
          "type": "function"
        },
        "index": {
          "description": "This indicates that there may be more data to write It gives you the next BufferWriter action You should call that action with an appropriate buffer The int indicates the minimum buffer size required by the next BufferWriter action That is if you call the next action you must supply it with buffer length of at least this size",
          "hierarchy": "Data ByteString Builder Extra",
          "module": "Data.ByteString.Builder.Extra",
          "name": "More",
          "package": "bytestring",
          "partial": "More",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Extra.html#v:More"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e that copies the strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUse this function to create \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es from smallish (\u003ccode\u003e\u003c= 4kb\u003c/code\u003e)\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es or if you need to guarantee that the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e is not\n shared with the chunks generated by the \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Extra",
          "name": "byteStringCopy",
          "package": "bytestring",
          "signature": "ByteString -\u003e Builder",
          "source": "src/Data-ByteString-Builder-Internal.html#byteStringCopy",
          "type": "function"
        },
        "index": {
          "description": "Construct Builder that copies the strict ByteString Use this function to create Builder from smallish kb ByteString or if you need to guarantee that the ByteString is not shared with the chunks generated by the Builder",
          "hierarchy": "Data ByteString Builder Extra",
          "module": "Data.ByteString.Builder.Extra",
          "name": "byteStringCopy",
          "normalized": "ByteString-\u003eBuilder",
          "package": "bytestring",
          "partial": "String Copy",
          "signature": "ByteString-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Extra.html#v:byteStringCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e that always inserts the strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n directly as a chunk.\n\u003c/p\u003e\u003cp\u003eThis implies flushing the output buffer, even if it contains just\n a single byte. You should therefore use \u003ccode\u003e\u003ca\u003ebyteStringInsert\u003c/a\u003e\u003c/code\u003e only for large\n (\u003ccode\u003e\u003e 8kb\u003c/code\u003e) \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es. Otherwise, the generated chunks are too\n fragmented to be processed efficiently afterwards.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Extra",
          "name": "byteStringInsert",
          "package": "bytestring",
          "signature": "ByteString -\u003e Builder",
          "source": "src/Data-ByteString-Builder-Internal.html#byteStringInsert",
          "type": "function"
        },
        "index": {
          "description": "Construct Builder that always inserts the strict ByteString directly as chunk This implies flushing the output buffer even if it contains just single byte You should therefore use byteStringInsert only for large kb ByteString Otherwise the generated chunks are too fragmented to be processed efficiently afterwards",
          "hierarchy": "Data ByteString Builder Extra",
          "module": "Data.ByteString.Builder.Extra",
          "name": "byteStringInsert",
          "normalized": "ByteString-\u003eBuilder",
          "package": "bytestring",
          "partial": "String Insert",
          "signature": "ByteString-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Extra.html#v:byteStringInsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e that copies the strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es, if it is\n smaller than the treshold, and inserts it directly otherwise.\n\u003c/p\u003e\u003cp\u003eFor example, \u003ccode\u003ebyteStringThreshold 1024\u003c/code\u003e copies strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es whose size\n is less or equal to 1kb, and inserts them directly otherwise. This implies\n that the average chunk-size of the generated lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e may be as\n low as 513 bytes, as there could always be just a single byte between the\n directly inserted 1025 byte, strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Extra",
          "name": "byteStringThreshold",
          "package": "bytestring",
          "signature": "Int -\u003e ByteString -\u003e Builder",
          "source": "src/Data-ByteString-Builder-Internal.html#byteStringThreshold",
          "type": "function"
        },
        "index": {
          "description": "Construct Builder that copies the strict ByteString if it is smaller than the treshold and inserts it directly otherwise For example byteStringThreshold copies strict ByteString whose size is less or equal to kb and inserts them directly otherwise This implies that the average chunk-size of the generated lazy ByteString may be as low as bytes as there could always be just single byte between the directly inserted byte strict ByteString",
          "hierarchy": "Data ByteString Builder Extra",
          "module": "Data.ByteString.Builder.Extra",
          "name": "byteStringThreshold",
          "normalized": "Int-\u003eByteString-\u003eBuilder",
          "package": "bytestring",
          "partial": "String Threshold",
          "signature": "Int-\u003eByteString-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Extra.html#v:byteStringThreshold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe chunk size used for I/O. Currently set to 32k, less the memory management overhead\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Extra",
          "name": "defaultChunkSize",
          "package": "bytestring",
          "signature": "Int",
          "source": "src/Data-ByteString-Lazy-Internal.html#defaultChunkSize",
          "type": "function"
        },
        "index": {
          "description": "The chunk size used for Currently set to less the memory management overhead",
          "hierarchy": "Data ByteString Builder Extra",
          "module": "Data.ByteString.Builder.Extra",
          "name": "defaultChunkSize",
          "package": "bytestring",
          "partial": "Chunk Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Extra.html#v:defaultChunkSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e in native host order.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Extra",
          "name": "doubleHost",
          "package": "bytestring",
          "signature": "Double -\u003e Builder",
          "source": "src/Data-ByteString-Builder-Extra.html#doubleHost",
          "type": "function"
        },
        "index": {
          "description": "Encode Double in native host order",
          "hierarchy": "Data ByteString Builder Extra",
          "module": "Data.ByteString.Builder.Extra",
          "name": "doubleHost",
          "normalized": "Double-\u003eBuilder",
          "package": "bytestring",
          "partial": "Host",
          "signature": "Double-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Extra.html#v:doubleHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e in native host order. Values encoded this way are not\n portable to different endian machines, without conversion.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Extra",
          "name": "floatHost",
          "package": "bytestring",
          "signature": "Float -\u003e Builder",
          "source": "src/Data-ByteString-Builder-Extra.html#floatHost",
          "type": "function"
        },
        "index": {
          "description": "Encode Float in native host order Values encoded this way are not portable to different endian machines without conversion",
          "hierarchy": "Data ByteString Builder Extra",
          "module": "Data.ByteString.Builder.Extra",
          "name": "floatHost",
          "normalized": "Float-\u003eBuilder",
          "package": "bytestring",
          "partial": "Host",
          "signature": "Float-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Extra.html#v:floatHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlush the current buffer. This introduces a chunk boundary.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Extra",
          "name": "flush",
          "package": "bytestring",
          "signature": "Builder",
          "source": "src/Data-ByteString-Builder-Internal.html#flush",
          "type": "function"
        },
        "index": {
          "description": "Flush the current buffer This introduces chunk boundary",
          "hierarchy": "Data ByteString Builder Extra",
          "module": "Data.ByteString.Builder.Extra",
          "name": "flush",
          "package": "bytestring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Extra.html#v:flush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Extra",
          "name": "int16Host",
          "package": "bytestring",
          "signature": "Int16 -\u003e Builder",
          "source": "src/Data-ByteString-Builder-Extra.html#int16Host",
          "type": "function"
        },
        "index": {
          "description": "Encode Int16 in native host order and host endianness",
          "hierarchy": "Data ByteString Builder Extra",
          "module": "Data.ByteString.Builder.Extra",
          "name": "int16Host",
          "normalized": "Int-\u003eBuilder",
          "package": "bytestring",
          "partial": "Host",
          "signature": "Int-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Extra.html#v:int16Host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Extra",
          "name": "int32Host",
          "package": "bytestring",
          "signature": "Int32 -\u003e Builder",
          "source": "src/Data-ByteString-Builder-Extra.html#int32Host",
          "type": "function"
        },
        "index": {
          "description": "Encode Int32 in native host order and host endianness",
          "hierarchy": "Data ByteString Builder Extra",
          "module": "Data.ByteString.Builder.Extra",
          "name": "int32Host",
          "normalized": "Int-\u003eBuilder",
          "package": "bytestring",
          "partial": "Host",
          "signature": "Int-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Extra.html#v:int32Host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Extra",
          "name": "int64Host",
          "package": "bytestring",
          "signature": "Int64 -\u003e Builder",
          "source": "src/Data-ByteString-Builder-Extra.html#int64Host",
          "type": "function"
        },
        "index": {
          "description": "Encode Int64 in native host order and host endianness",
          "hierarchy": "Data ByteString Builder Extra",
          "module": "Data.ByteString.Builder.Extra",
          "name": "int64Host",
          "normalized": "Int-\u003eBuilder",
          "package": "bytestring",
          "partial": "Host",
          "signature": "Int-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Extra.html#v:int64Host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a single native machine \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e is encoded in host order,\n host endian form, for the machine you're on. On a 64 bit machine the \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\n is an 8 byte value, on a 32 bit machine, 4 bytes. Values encoded this way\n are not portable to different endian or int sized machines, without\n conversion.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Extra",
          "name": "intHost",
          "package": "bytestring",
          "signature": "Int -\u003e Builder",
          "source": "src/Data-ByteString-Builder-Extra.html#intHost",
          "type": "function"
        },
        "index": {
          "description": "Encode single native machine Int The Int is encoded in host order host endian form for the machine you re on On bit machine the Int is an byte value on bit machine bytes Values encoded this way are not portable to different endian or int sized machines without conversion",
          "hierarchy": "Data ByteString Builder Extra",
          "module": "Data.ByteString.Builder.Extra",
          "name": "intHost",
          "normalized": "Int-\u003eBuilder",
          "package": "bytestring",
          "partial": "Host",
          "signature": "Int-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Extra.html#v:intHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e that copies the lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Extra",
          "name": "lazyByteStringCopy",
          "package": "bytestring",
          "signature": "ByteString -\u003e Builder",
          "source": "src/Data-ByteString-Builder-Internal.html#lazyByteStringCopy",
          "type": "function"
        },
        "index": {
          "description": "Construct Builder that copies the lazy ByteString",
          "hierarchy": "Data ByteString Builder Extra",
          "module": "Data.ByteString.Builder.Extra",
          "name": "lazyByteStringCopy",
          "normalized": "ByteString-\u003eBuilder",
          "package": "bytestring",
          "partial": "Byte String Copy",
          "signature": "ByteString-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Extra.html#v:lazyByteStringCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e that inserts all chunks of the lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n directly.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Extra",
          "name": "lazyByteStringInsert",
          "package": "bytestring",
          "signature": "ByteString -\u003e Builder",
          "source": "src/Data-ByteString-Builder-Internal.html#lazyByteStringInsert",
          "type": "function"
        },
        "index": {
          "description": "Construct Builder that inserts all chunks of the lazy ByteString directly",
          "hierarchy": "Data ByteString Builder Extra",
          "module": "Data.ByteString.Builder.Extra",
          "name": "lazyByteStringInsert",
          "normalized": "ByteString-\u003eBuilder",
          "package": "bytestring",
          "partial": "Byte String Insert",
          "signature": "ByteString-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Extra.html#v:lazyByteStringInsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e that uses the thresholding strategy of \u003ccode\u003e\u003ca\u003ebyteStringThreshold\u003c/a\u003e\u003c/code\u003e\n for each chunk of the lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Extra",
          "name": "lazyByteStringThreshold",
          "package": "bytestring",
          "signature": "Int -\u003e ByteString -\u003e Builder",
          "source": "src/Data-ByteString-Builder-Internal.html#lazyByteStringThreshold",
          "type": "function"
        },
        "index": {
          "description": "Construct Builder that uses the thresholding strategy of byteStringThreshold for each chunk of the lazy ByteString",
          "hierarchy": "Data ByteString Builder Extra",
          "module": "Data.ByteString.Builder.Extra",
          "name": "lazyByteStringThreshold",
          "normalized": "Int-\u003eByteString-\u003eBuilder",
          "package": "bytestring",
          "partial": "Byte String Threshold",
          "signature": "Int-\u003eByteString-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Extra.html#v:lazyByteStringThreshold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e into its initial \u003ccode\u003e\u003ca\u003eBufferWriter\u003c/a\u003e\u003c/code\u003e action.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Extra",
          "name": "runBuilder",
          "package": "bytestring",
          "signature": "Builder -\u003e BufferWriter",
          "source": "src/Data-ByteString-Builder-Extra.html#runBuilder",
          "type": "function"
        },
        "index": {
          "description": "Turn Builder into its initial BufferWriter action",
          "hierarchy": "Data ByteString Builder Extra",
          "module": "Data.ByteString.Builder.Extra",
          "name": "runBuilder",
          "normalized": "Builder-\u003eBufferWriter",
          "package": "bytestring",
          "partial": "Builder",
          "signature": "Builder-\u003eBufferWriter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Extra.html#v:runBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this strategy for generating lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es whose chunks are\n likely to survive one garbage collection. This strategy trims buffers\n that are filled less than half in order to avoid spilling too much memory.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Extra",
          "name": "safeStrategy",
          "package": "bytestring",
          "signature": "Int-\u003e Int-\u003e AllocationStrategy",
          "type": "function"
        },
        "index": {
          "description": "Use this strategy for generating lazy ByteString whose chunks are likely to survive one garbage collection This strategy trims buffers that are filled less than half in order to avoid spilling too much memory",
          "hierarchy": "Data ByteString Builder Extra",
          "module": "Data.ByteString.Builder.Extra",
          "name": "safeStrategy",
          "normalized": "Int-\u003eInt-\u003eAllocationStrategy",
          "package": "bytestring",
          "partial": "Strategy",
          "signature": "Int-\u003eInt-\u003eAllocationStrategy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Extra.html#v:safeStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe recommended chunk size. Currently set to 4k, less the memory management overhead\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Extra",
          "name": "smallChunkSize",
          "package": "bytestring",
          "signature": "Int",
          "source": "src/Data-ByteString-Lazy-Internal.html#smallChunkSize",
          "type": "function"
        },
        "index": {
          "description": "The recommended chunk size Currently set to less the memory management overhead",
          "hierarchy": "Data ByteString Builder Extra",
          "module": "Data.ByteString.Builder.Extra",
          "name": "smallChunkSize",
          "package": "bytestring",
          "partial": "Chunk Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Extra.html#v:smallChunkSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eHeavy inlining.\u003c/em\u003e Execute a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e with custom execution parameters.\n\u003c/p\u003e\u003cp\u003eThis function is inlined despite its heavy code-size to allow fusing with\n the allocation strategy. For example, the default \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e execution\n function \u003ccode\u003etoLazyByteString\u003c/code\u003e is defined as follows.\n\u003c/p\u003e\u003cpre\u003e\n {-# NOINLINE toLazyByteString #-}\n toLazyByteString =\n   toLazyByteStringWith (\u003ccode\u003e\u003ca\u003esafeStrategy\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esmallChunkSize\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultChunkSize\u003c/a\u003e\u003c/code\u003e) L.empty\n\u003c/pre\u003e\u003cp\u003ewhere \u003ccode\u003eL.empty\u003c/code\u003e is the zero-length lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn most cases, the parameters used by \u003ccode\u003etoLazyByteString\u003c/code\u003e give good\n performance. A sub-performing case of \u003ccode\u003etoLazyByteString\u003c/code\u003e is executing short\n (\u003c128 bytes) \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es. In this case, the allocation overhead for the first\n 4kb buffer and the trimming cost dominate the cost of executing the\n \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e. You can avoid this problem using\n\u003c/p\u003e\u003cpre\u003etoLazyByteStringWith (safeStrategy 128 smallChunkSize) L.empty\n\u003c/pre\u003e\u003cp\u003eThis reduces the allocation and trimming overhead, as all generated\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es fit into the first buffer and there is no trimming\n required, if more than 64 bytes and less than 128 bytes are written.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Extra",
          "name": "toLazyByteStringWith",
          "package": "bytestring",
          "signature": "AllocationStrategy-\u003e ByteString-\u003e Builder-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Heavy inlining Execute Builder with custom execution parameters This function is inlined despite its heavy code-size to allow fusing with the allocation strategy For example the default Builder execution function toLazyByteString is defined as follows NOINLINE toLazyByteString toLazyByteString toLazyByteStringWith safeStrategy smallChunkSize defaultChunkSize L.empty where L.empty is the zero-length lazy ByteString In most cases the parameters used by toLazyByteString give good performance sub-performing case of toLazyByteString is executing short bytes Builder In this case the allocation overhead for the first kb buffer and the trimming cost dominate the cost of executing the Builder You can avoid this problem using toLazyByteStringWith safeStrategy smallChunkSize L.empty This reduces the allocation and trimming overhead as all generated ByteString fit into the first buffer and there is no trimming required if more than bytes and less than bytes are written",
          "hierarchy": "Data ByteString Builder Extra",
          "module": "Data.ByteString.Builder.Extra",
          "name": "toLazyByteStringWith",
          "normalized": "AllocationStrategy-\u003eByteString-\u003eBuilder-\u003eByteString",
          "package": "bytestring",
          "partial": "Lazy Byte String With",
          "signature": "AllocationStrategy-\u003eByteString-\u003eBuilder-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Extra.html#v:toLazyByteStringWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this strategy for generating lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es whose chunks are\n discarded right after they are generated. For example, if you just generate\n them to write them to a network socket.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Extra",
          "name": "untrimmedStrategy",
          "package": "bytestring",
          "signature": "Int-\u003e Int-\u003e AllocationStrategy",
          "type": "function"
        },
        "index": {
          "description": "Use this strategy for generating lazy ByteString whose chunks are discarded right after they are generated For example if you just generate them to write them to network socket",
          "hierarchy": "Data ByteString Builder Extra",
          "module": "Data.ByteString.Builder.Extra",
          "name": "untrimmedStrategy",
          "normalized": "Int-\u003eInt-\u003eAllocationStrategy",
          "package": "bytestring",
          "partial": "Strategy",
          "signature": "Int-\u003eInt-\u003eAllocationStrategy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Extra.html#v:untrimmedStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Extra",
          "name": "word16Host",
          "package": "bytestring",
          "signature": "Word16 -\u003e Builder",
          "source": "src/Data-ByteString-Builder-Extra.html#word16Host",
          "type": "function"
        },
        "index": {
          "description": "Encode Word16 in native host order and host endianness",
          "hierarchy": "Data ByteString Builder Extra",
          "module": "Data.ByteString.Builder.Extra",
          "name": "word16Host",
          "normalized": "Word-\u003eBuilder",
          "package": "bytestring",
          "partial": "Host",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Extra.html#v:word16Host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Extra",
          "name": "word32Host",
          "package": "bytestring",
          "signature": "Word32 -\u003e Builder",
          "source": "src/Data-ByteString-Builder-Extra.html#word32Host",
          "type": "function"
        },
        "index": {
          "description": "Encode Word32 in native host order and host endianness",
          "hierarchy": "Data ByteString Builder Extra",
          "module": "Data.ByteString.Builder.Extra",
          "name": "word32Host",
          "normalized": "Word-\u003eBuilder",
          "package": "bytestring",
          "partial": "Host",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Extra.html#v:word32Host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Extra",
          "name": "word64Host",
          "package": "bytestring",
          "signature": "Word64 -\u003e Builder",
          "source": "src/Data-ByteString-Builder-Extra.html#word64Host",
          "type": "function"
        },
        "index": {
          "description": "Encode Word64 in native host order and host endianness",
          "hierarchy": "Data ByteString Builder Extra",
          "module": "Data.ByteString.Builder.Extra",
          "name": "word64Host",
          "normalized": "Word-\u003eBuilder",
          "package": "bytestring",
          "partial": "Host",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Extra.html#v:word64Host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a single native machine \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e is encoded in host order,\n host endian form, for the machine you're on. On a 64 bit machine the \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e\n is an 8 byte value, on a 32 bit machine, 4 bytes. Values encoded this way\n are not portable to different endian or word sized machines, without\n conversion.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Extra",
          "name": "wordHost",
          "package": "bytestring",
          "signature": "Word -\u003e Builder",
          "source": "src/Data-ByteString-Builder-Extra.html#wordHost",
          "type": "function"
        },
        "index": {
          "description": "Encode single native machine Word The Word is encoded in host order host endian form for the machine you re on On bit machine the Word is an byte value on bit machine bytes Values encoded this way are not portable to different endian or word sized machines without conversion",
          "hierarchy": "Data ByteString Builder Extra",
          "module": "Data.ByteString.Builder.Extra",
          "name": "wordHost",
          "normalized": "Word-\u003eBuilder",
          "package": "bytestring",
          "partial": "Host",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Extra.html#v:wordHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e \u003cem\u003eprimitives\u003c/em\u003e, which are lower level building\nblocks for constructing \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es. You don't need to go down to this level but\nit can be slightly faster.\n\u003c/p\u003e\u003cp\u003eMorally, builder primitives are like functions \u003ccode\u003ea -\u003e Builder\u003c/code\u003e, that is they\ntake a value and encode it as a sequence of bytes, represented as a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e.\nOf course their implementation is a bit more specialised.\n\u003c/p\u003e\u003cp\u003eBuilder primitives come in two forms: fixed-size and bounded-size.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003eFixed(-size) primitives\u003c/em\u003e are builder primitives that always result in a\n  sequence of bytes of a fixed length. That is, the length is independent of\n  the value that is encoded. An example of a fixed size primitive is the\n  big-endian encoding of a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e, which always results in exactly 8 bytes.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eBounded(-size) primitives\u003c/em\u003e are builder primitives that always result in a\n  sequence of bytes that is no larger than a predetermined bound. That is, the\n  bound is independent of the value that is encoded but the actual length will\n  depend on the value. An example for a bounded primitive is the UTF-8 encoding\n  of a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e, which can be 1,2,3 or 4 bytes long, so the bound is 4 bytes.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that fixed primitives can be considered as a special case of bounded\nprimitives, and we can lift from fixed to bounded.\n\u003c/p\u003e\u003cp\u003eBecause bounded primitives are the more general case, in this documentation we\nonly refer to fixed size primitives where it matters that the resulting\nsequence of bytes is of a fixed length. Otherwise, we just refer to bounded\nsize primitives.\n\u003c/p\u003e\u003cp\u003eThe purpose of using builder primitives is to improve the performance of\n\u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es. These improvements stem from making the two most common steps\nperformed by a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e more efficient. We explain these two steps in turn.\n\u003c/p\u003e\u003cp\u003eThe first most common step is the concatenation of two \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es. Internally,\nconcatenation corresponds to function composition. (Note that \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es can\nbe seen as difference-lists of buffer-filling functions; cf.\n\u003ca\u003ehttp://hackage.haskell.org/cgi-bin/hackage-scripts/package/dlist\u003c/a\u003e. )\nFunction composition is a fast \u003cem\u003eO(1)\u003c/em\u003e operation. However, we can use bounded\nprimitives to remove some of these function compositions altogether, which is\nmore efficient.\n\u003c/p\u003e\u003cp\u003eThe second most common step performed by a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e is to fill a buffer using\na bounded primitives, which works as follows. The \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e checks whether\nthere is enough space left to execute the bounded primitive. If there is, then\nthe \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e executes the bounded primitive and calls the next \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e with\nthe updated buffer. Otherwise, the \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e signals its driver that it\nrequires a new buffer. This buffer must be at least as large as the bound of\nthe primitive. We can use bounded primitives to reduce the number of\nbuffer-free checks by fusing the buffer-free checks of consecutive \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es.\nWe can also use bounded primitives to simplify the control flow for signalling\nthat a buffer is full by ensuring that we check first that there is enough\nspace left and only then decide on how to encode a given value.\n\u003c/p\u003e\u003cp\u003eLet us illustrate these improvements on the CSV-table rendering example from\n\u003ca\u003eData.ByteString.Builder\u003c/a\u003e. Its \"hot code\" is the rendering of a table's\ncells, which we implement as follows using only the functions from the\n\u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e API.\n\u003c/p\u003e\u003cpre\u003e\nimport \u003ca\u003eData.ByteString.Builder\u003c/a\u003e as B\n\nrenderCell :: Cell -\u003e Builder\nrenderCell (StringC cs) = renderString cs\nrenderCell (IntC i)     = B.intDec i\n\nrenderString :: String -\u003e Builder\nrenderString cs = B.charUtf8 '\"' \u003c\u003e foldMap escape cs \u003c\u003e B.charUtf8 '\"'\n  where\n    escape '\\\\' = B.charUtf8 '\\\\' \u003c\u003e B.charUtf8 '\\\\'\n    escape '\\\"' = B.charUtf8 '\\\\' \u003c\u003e B.charUtf8 '\\\"'\n    escape c    = B.charUtf8 c\n\u003c/pre\u003e\u003cp\u003eEfficient encoding of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es as decimal numbers is performed by \u003ccode\u003eintDec\u003c/code\u003e.\nOptimization potential exists for the escaping of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es. The above\nimplementation has two optimization opportunities. First, the buffer-free\nchecks of the \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es for escaping double quotes and backslashes can be\nfused. Second, the concatenations performed by \u003ccode\u003efoldMap\u003c/code\u003e can be eliminated.\nThe following implementation exploits these optimizations.\n\u003c/p\u003e\u003cpre\u003e\nimport qualified Data.ByteString.Builder.Prim  as P\nimport           Data.ByteString.Builder.Prim\n                 ( \u003ccode\u003e\u003ca\u003econdB\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eliftFixedToBounded\u003c/a\u003e\u003c/code\u003e, (\u003ccode\u003e\u003ca\u003e\u003e*\u003c\u003c/a\u003e\u003c/code\u003e), (\u003ccode\u003e\u003ca\u003e\u003e$\u003c\u003c/a\u003e\u003c/code\u003e) )\n\nrenderString :: String -\u003e Builder\nrenderString cs =\n    B.charUtf8 '\"' \u003c\u003e E.\u003ccode\u003eencodeListWithB\u003c/code\u003e escape cs \u003c\u003e B.charUtf8 '\"'\n  where\n    escape :: E.\u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003e Char\n    escape =\n      \u003ccode\u003e\u003ca\u003econdB\u003c/a\u003e\u003c/code\u003e (== '\\\\') (fixed2 ('\\\\', '\\\\')) $\n      \u003ccode\u003e\u003ca\u003econdB\u003c/a\u003e\u003c/code\u003e (== '\\\"') (fixed2 ('\\\\', '\\\"')) $\n      E.\u003ccode\u003e\u003ca\u003echarUtf8\u003c/a\u003e\u003c/code\u003e\n    &#160;\n    {-# INLINE fixed2 #-}\n    fixed2 x = \u003ccode\u003e\u003ca\u003eliftFixedToBounded\u003c/a\u003e\u003c/code\u003e $ const x \u003ccode\u003e\u003ca\u003e\u003e$\u003c\u003c/a\u003e\u003c/code\u003e E.\u003ccode\u003e\u003ca\u003echar7\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003e*\u003c\u003c/a\u003e\u003c/code\u003e E.\u003ccode\u003e\u003ca\u003echar7\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eThe code should be mostly self-explanatory. The slightly awkward syntax is\nbecause the combinators are written such that the size-bound of the resulting\n\u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003e can be computed at compile time. We also explicitly inline the\n\u003ccode\u003efixed2\u003c/code\u003e primitive, which encodes a fixed tuple of characters, to ensure that\nthe bound computation happens at compile time. When encoding the following list\nof \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es, the optimized implementation of \u003ccode\u003erenderString\u003c/code\u003e is two times\nfaster.\n\u003c/p\u003e\u003cpre\u003e\nmaxiStrings :: [String]\nmaxiStrings = take 1000 $ cycle [\"hello\", \"\\\"1\\\"\", \"&#955;-w&#246;rld\"]\n\u003c/pre\u003e\u003cp\u003eMost of the performance gain stems from using \u003ccode\u003e\u003ca\u003eprimMapListBounded\u003c/a\u003e\u003c/code\u003e, which\nencodes a list of values from left-to-right with a \u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003e. It exploits\nthe \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e internals to avoid unnecessary function compositions (i.e.,\nconcatenations). In the future, we might expect the compiler to perform the\noptimizations implemented in \u003ccode\u003e\u003ca\u003eprimMapListBounded\u003c/a\u003e\u003c/code\u003e. However, it seems that the\ncode is currently to complicated for the compiler to see through. Therefore, we\nprovide the \u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003e escape hatch, which allows data structures to provide\nvery efficient encoding traversals, like \u003ccode\u003e\u003ca\u003eprimMapListBounded\u003c/a\u003e\u003c/code\u003e for lists.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003es are a bit verbose, but quite versatile. Here is an\nexample of a \u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003e for combined HTML escaping and UTF-8 encoding. It\nexploits that the escaped character with the maximal Unicode codepoint is '\u003e'.\n\u003c/p\u003e\u003cpre\u003e\n{-# INLINE charUtf8HtmlEscaped #-}\ncharUtf8HtmlEscaped :: E.BoundedPrim Char\ncharUtf8HtmlEscaped =\n    \u003ccode\u003e\u003ca\u003econdB\u003c/a\u003e\u003c/code\u003e (\u003e  '\u003e' ) E.\u003ccode\u003e\u003ca\u003echarUtf8\u003c/a\u003e\u003c/code\u003e $\n    \u003ccode\u003e\u003ca\u003econdB\u003c/a\u003e\u003c/code\u003e (== '\u003c' ) (fixed4 ('&',('l',('t',';')))) $        -- &lt;\n    \u003ccode\u003e\u003ca\u003econdB\u003c/a\u003e\u003c/code\u003e (== '\u003e' ) (fixed4 ('&',('g',('t',';')))) $        -- &gt;\n    \u003ccode\u003e\u003ca\u003econdB\u003c/a\u003e\u003c/code\u003e (== '&' ) (fixed5 ('&',('a',('m',('p',';'))))) $  -- &amp;\n    \u003ccode\u003e\u003ca\u003econdB\u003c/a\u003e\u003c/code\u003e (== '\"' ) (fixed5 ('&',('#',('3',('4',';'))))) $  -- &#34;\n    \u003ccode\u003e\u003ca\u003econdB\u003c/a\u003e\u003c/code\u003e (== '\\'') (fixed5 ('&',('#',('3',('9',';'))))) $  -- &#39;\n    (\u003ccode\u003e\u003ca\u003eliftFixedToBounded\u003c/a\u003e\u003c/code\u003e E.\u003ccode\u003e\u003ca\u003echar7\u003c/a\u003e\u003c/code\u003e)         -- fallback for \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003es smaller than '\u003e'\n  where\n    {-# INLINE fixed4 #-}\n    fixed4 x = \u003ccode\u003e\u003ca\u003eliftFixedToBounded\u003c/a\u003e\u003c/code\u003e $ const x \u003ccode\u003e\u003ca\u003e\u003e$\u003c\u003c/a\u003e\u003c/code\u003e\n      E.char7 \u003ccode\u003e\u003ca\u003e\u003e*\u003c\u003c/a\u003e\u003c/code\u003e E.char7 \u003ccode\u003e\u003ca\u003e\u003e*\u003c\u003c/a\u003e\u003c/code\u003e E.char7 \u003ccode\u003e\u003ca\u003e\u003e*\u003c\u003c/a\u003e\u003c/code\u003e E.char7\n    &#160;\n    {-# INLINE fixed5 #-}\n    fixed5 x = \u003ccode\u003e\u003ca\u003eliftFixedToBounded\u003c/a\u003e\u003c/code\u003e $ const x \u003ccode\u003e\u003ca\u003e\u003e$\u003c\u003c/a\u003e\u003c/code\u003e\n      E.char7 \u003ccode\u003e\u003ca\u003e\u003e*\u003c\u003c/a\u003e\u003c/code\u003e E.char7 \u003ccode\u003e\u003ca\u003e\u003e*\u003c\u003c/a\u003e\u003c/code\u003e E.char7 \u003ccode\u003e\u003ca\u003e\u003e*\u003c\u003c/a\u003e\u003c/code\u003e E.char7 \u003ccode\u003e\u003ca\u003e\u003e*\u003c\u003c/a\u003e\u003c/code\u003e E.char7\n\u003c/pre\u003e\u003cp\u003eThis module currently does not expose functions that require the special\nproperties of fixed-size primitives. They are useful for prefixing \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es\nwith their size or for implementing chunked encodings. We will expose the\ncorresponding functions in future releases of this library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "Prim",
          "package": "bytestring",
          "source": "src/Data-ByteString-Builder-Prim.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides Builder primitives which are lower level building blocks for constructing Builder You don need to go down to this level but it can be slightly faster Morally builder primitives are like functions Builder that is they take value and encode it as sequence of bytes represented as Builder Of course their implementation is bit more specialised Builder primitives come in two forms fixed-size and bounded-size Fixed size primitives are builder primitives that always result in sequence of bytes of fixed length That is the length is independent of the value that is encoded An example of fixed size primitive is the big-endian encoding of Word64 which always results in exactly bytes Bounded size primitives are builder primitives that always result in sequence of bytes that is no larger than predetermined bound That is the bound is independent of the value that is encoded but the actual length will depend on the value An example for bounded primitive is the UTF-8 encoding of Char which can be or bytes long so the bound is bytes Note that fixed primitives can be considered as special case of bounded primitives and we can lift from fixed to bounded Because bounded primitives are the more general case in this documentation we only refer to fixed size primitives where it matters that the resulting sequence of bytes is of fixed length Otherwise we just refer to bounded size primitives The purpose of using builder primitives is to improve the performance of Builder These improvements stem from making the two most common steps performed by Builder more efficient We explain these two steps in turn The first most common step is the concatenation of two Builder Internally concatenation corresponds to function composition Note that Builder can be seen as difference-lists of buffer-filling functions cf http hackage.haskell.org cgi-bin hackage-scripts package dlist Function composition is fast operation However we can use bounded primitives to remove some of these function compositions altogether which is more efficient The second most common step performed by Builder is to fill buffer using bounded primitives which works as follows The Builder checks whether there is enough space left to execute the bounded primitive If there is then the Builder executes the bounded primitive and calls the next Builder with the updated buffer Otherwise the Builder signals its driver that it requires new buffer This buffer must be at least as large as the bound of the primitive We can use bounded primitives to reduce the number of buffer-free checks by fusing the buffer-free checks of consecutive Builder We can also use bounded primitives to simplify the control flow for signalling that buffer is full by ensuring that we check first that there is enough space left and only then decide on how to encode given value Let us illustrate these improvements on the CSV-table rendering example from Data.ByteString.Builder Its hot code is the rendering of table cells which we implement as follows using only the functions from the Builder API import Data.ByteString.Builder as renderCell Cell Builder renderCell StringC cs renderString cs renderCell IntC B.intDec renderString String Builder renderString cs B.charUtf8 foldMap escape cs B.charUtf8 where escape B.charUtf8 B.charUtf8 escape B.charUtf8 B.charUtf8 escape B.charUtf8 Efficient encoding of Int as decimal numbers is performed by intDec Optimization potential exists for the escaping of String The above implementation has two optimization opportunities First the buffer-free checks of the Builder for escaping double quotes and backslashes can be fused Second the concatenations performed by foldMap can be eliminated The following implementation exploits these optimizations import qualified Data.ByteString.Builder.Prim as import Data.ByteString.Builder.Prim condB liftFixedToBounded renderString String Builder renderString cs B.charUtf8 encodeListWithB escape cs B.charUtf8 where escape BoundedPrim Char escape condB fixed2 condB fixed2 charUtf8 INLINE fixed2 fixed2 liftFixedToBounded const char7 char7 The code should be mostly self-explanatory The slightly awkward syntax is because the combinators are written such that the size-bound of the resulting BoundedPrim can be computed at compile time We also explicitly inline the fixed2 primitive which encodes fixed tuple of characters to ensure that the bound computation happens at compile time When encoding the following list of String the optimized implementation of renderString is two times faster maxiStrings String maxiStrings take cycle hello rld Most of the performance gain stems from using primMapListBounded which encodes list of values from left-to-right with BoundedPrim It exploits the Builder internals to avoid unnecessary function compositions i.e concatenations In the future we might expect the compiler to perform the optimizations implemented in primMapListBounded However it seems that the code is currently to complicated for the compiler to see through Therefore we provide the BoundedPrim escape hatch which allows data structures to provide very efficient encoding traversals like primMapListBounded for lists Note that BoundedPrim are bit verbose but quite versatile Here is an example of BoundedPrim for combined HTML escaping and UTF-8 encoding It exploits that the escaped character with the maximal Unicode codepoint is INLINE charUtf8HtmlEscaped charUtf8HtmlEscaped E.BoundedPrim Char charUtf8HtmlEscaped condB charUtf8 condB fixed4 lt condB fixed4 gt condB fixed5 amp condB fixed5 condB fixed5 liftFixedToBounded char7 fallback for Char smaller than where INLINE fixed4 fixed4 liftFixedToBounded const E.char7 E.char7 E.char7 E.char7 INLINE fixed5 fixed5 liftFixedToBounded const E.char7 E.char7 E.char7 E.char7 E.char7 This module currently does not expose functions that require the special properties of fixed-size primitives They are useful for prefixing Builder with their size or for implementing chunked encodings We will expose the corresponding functions in future releases of this library",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "Prim",
          "package": "bytestring",
          "partial": "Prim",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA builder primitive that always results in sequence of bytes that is no longer\n than a pre-determined bound.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "BoundedPrim",
          "package": "bytestring",
          "source": "src/Data-ByteString-Builder-Prim-Internal.html#BoundedPrim",
          "type": "data"
        },
        "index": {
          "description": "builder primitive that always results in sequence of bytes that is no longer than pre-determined bound",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "BoundedPrim",
          "package": "bytestring",
          "partial": "Bounded Prim",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#t:BoundedPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA builder primitive that always results in a sequence of bytes of a\n pre-determined, fixed size.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "FixedPrim",
          "package": "bytestring",
          "source": "src/Data-ByteString-Builder-Prim-Internal.html#FixedPrim",
          "type": "data"
        },
        "index": {
          "description": "builder primitive that always results in sequence of bytes of pre-determined fixed size",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "FixedPrim",
          "package": "bytestring",
          "partial": "Fixed Prim",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#t:FixedPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fmap-like operator for builder primitives, both bounded and fixed size.\n\u003c/p\u003e\u003cp\u003eBuilder primitives are contravariant so it's like the normal fmap, but\n backwards (look at the type). (If it helps to remember, the operator symbol\n is like (\u003ca\u003e$\u003c/a\u003e) but backwards.)\n\u003c/p\u003e\u003cp\u003eWe can use it for example to prepend and/or append fixed values to an\n primitive.\n\u003c/p\u003e\u003cpre\u003eshowEncoding ((\\x -\u003e ('\\'', (x, '\\''))) \u003e$\u003c fixed3) 'x' = \"'x'\"\n  where\n    fixed3 = char7 \u003e*\u003c char7 \u003e*\u003c char7\n\u003c/pre\u003e\u003cp\u003eNote that the rather verbose syntax for composition stems from the\n requirement to be able to compute the size / size bound at compile time.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "(\u003e$\u003c)",
          "package": "bytestring",
          "signature": "(b -\u003e a) -\u003e f a -\u003e f b",
          "source": "src/Data-ByteString-Builder-Prim-Internal.html#%3E%24%3C",
          "type": "function"
        },
        "index": {
          "description": "fmap-like operator for builder primitives both bounded and fixed size Builder primitives are contravariant so it like the normal fmap but backwards look at the type If it helps to remember the operator symbol is like but backwards We can use it for example to prepend and or append fixed values to an primitive showEncoding fixed3 where fixed3 char7 char7 char7 Note that the rather verbose syntax for composition stems from the requirement to be able to compute the size size bound at compile time",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "(\u003e$\u003c) \u003e$\u003c",
          "normalized": "(a-\u003eb)-\u003ec b-\u003ec a",
          "package": "bytestring",
          "signature": "(b-\u003ea)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:-62--36--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pairing/concatenation operator for builder primitives, both bounded and\n fixed size.\n\u003c/p\u003e\u003cp\u003eFor example,\n\u003c/p\u003e\u003cpre\u003e toLazyByteString (primFixed (char7 \u003e*\u003c char7) ('x','y')) = \"xy\"\n\u003c/pre\u003e\u003cp\u003eWe can combine multiple primitives using \u003ccode\u003e\u003ca\u003e\u003e*\u003c\u003c/a\u003e\u003c/code\u003e multiple times.\n\u003c/p\u003e\u003cpre\u003e toLazyByteString (primFixed (char7 \u003e*\u003c char7 \u003e*\u003c char7) ('x',('y','z'))) = \"xyz\"\n\u003c/pre\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "(\u003e*\u003c)",
          "package": "bytestring",
          "signature": "f a -\u003e f b -\u003e f (a, b)",
          "source": "src/Data-ByteString-Builder-Prim-Internal.html#%3E%2A%3C",
          "type": "function"
        },
        "index": {
          "description": "pairing concatenation operator for builder primitives both bounded and fixed size For example toLazyByteString primFixed char7 char7 xy We can combine multiple primitives using multiple times toLazyByteString primFixed char7 char7 char7 xyz",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "(\u003e*\u003c) \u003e*\u003c",
          "normalized": "a b-\u003ea c-\u003ea(b,c)",
          "package": "bytestring",
          "signature": "f a-\u003ef b-\u003ef(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:-62--42--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the least 7-bits of a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e using the ASCII encoding.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "char7",
          "package": "bytestring",
          "signature": "FixedPrim Char",
          "source": "src/Data-ByteString-Builder-Prim-ASCII.html#char7",
          "type": "function"
        },
        "index": {
          "description": "Encode the least bits of Char using the ASCII encoding",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "char7",
          "package": "bytestring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:char7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChar8 encode a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "char8",
          "package": "bytestring",
          "signature": "FixedPrim Char",
          "source": "src/Data-ByteString-Builder-Prim.html#char8",
          "type": "function"
        },
        "index": {
          "description": "Char8 encode Char",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "char8",
          "package": "bytestring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:char8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUTF-8 encode a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "charUtf8",
          "package": "bytestring",
          "signature": "BoundedPrim Char",
          "source": "src/Data-ByteString-Builder-Prim.html#charUtf8",
          "type": "function"
        },
        "index": {
          "description": "UTF-8 encode Char",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "charUtf8",
          "package": "bytestring",
          "partial": "Utf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:charUtf8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditionally select a \u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003e.\n For example, we can implement the ASCII primitive that drops characters with\n Unicode codepoints above 127 as follows.\n\u003c/p\u003e\u003cpre\u003e\ncharASCIIDrop = \u003ccode\u003e\u003ca\u003econdB\u003c/a\u003e\u003c/code\u003e (\u003c '\\128') (\u003ccode\u003efromF\u003c/code\u003e \u003ccode\u003echar7\u003c/code\u003e) \u003ccode\u003e\u003ca\u003eemptyB\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "condB",
          "package": "bytestring",
          "signature": "(a -\u003e Bool) -\u003e BoundedPrim a -\u003e BoundedPrim a -\u003e BoundedPrim a",
          "source": "src/Data-ByteString-Builder-Prim-Internal.html#condB",
          "type": "function"
        },
        "index": {
          "description": "Conditionally select BoundedPrim For example we can implement the ASCII primitive that drops characters with Unicode codepoints above as follows charASCIIDrop condB fromF char7 emptyB",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "condB",
          "normalized": "(a-\u003eBool)-\u003eBoundedPrim a-\u003eBoundedPrim a-\u003eBoundedPrim a",
          "package": "bytestring",
          "signature": "(a-\u003eBool)-\u003eBoundedPrim a-\u003eBoundedPrim a-\u003eBoundedPrim a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:condB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "doubleBE",
          "package": "bytestring",
          "signature": "FixedPrim Double",
          "source": "src/Data-ByteString-Builder-Prim-Binary.html#doubleBE",
          "type": "function"
        },
        "index": {
          "description": "Encode Double in big endian format",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "doubleBE",
          "package": "bytestring",
          "partial": "BE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:doubleBE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode an IEEE \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e using 16 nibbles.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "doubleHexFixed",
          "package": "bytestring",
          "signature": "FixedPrim Double",
          "source": "src/Data-ByteString-Builder-Prim-ASCII.html#doubleHexFixed",
          "type": "function"
        },
        "index": {
          "description": "Encode an IEEE Double using nibbles",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "doubleHexFixed",
          "package": "bytestring",
          "partial": "Hex Fixed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:doubleHexFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "doubleHost",
          "package": "bytestring",
          "signature": "FixedPrim Double",
          "source": "src/Data-ByteString-Builder-Prim-Binary.html#doubleHost",
          "type": "function"
        },
        "index": {
          "description": "Encode Double in native host order and host endianness",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "doubleHost",
          "package": "bytestring",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:doubleHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "doubleLE",
          "package": "bytestring",
          "signature": "FixedPrim Double",
          "source": "src/Data-ByteString-Builder-Prim-Binary.html#doubleLE",
          "type": "function"
        },
        "index": {
          "description": "Encode Double in little endian format",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "doubleLE",
          "package": "bytestring",
          "partial": "LE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:doubleLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e value using the first \u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e\n values and the second \u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e\u003cp\u003eNote that the functions \u003ccode\u003e\u003ca\u003eeitherB\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003epairB\u003c/code\u003e, and \u003ccode\u003econtramapB\u003c/code\u003e (written below\n using \u003ccode\u003e\u003ca\u003e\u003e$\u003c\u003c/a\u003e\u003c/code\u003e) suffice to construct \u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003es for all non-recursive\n algebraic datatypes. For example,\n\u003c/p\u003e\u003cpre\u003e\nmaybeB :: BoundedPrim () -\u003e BoundedPrim a -\u003e BoundedPrim (Maybe a)\nmaybeB nothing just = \u003ccode\u003e\u003ca\u003emaybe\u003c/a\u003e\u003c/code\u003e (Left ()) Right \u003ccode\u003e\u003ca\u003e\u003e$\u003c\u003c/a\u003e\u003c/code\u003e eitherB nothing just\n\u003c/pre\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "eitherB",
          "package": "bytestring",
          "signature": "BoundedPrim a -\u003e BoundedPrim b -\u003e BoundedPrim (Either a b)",
          "source": "src/Data-ByteString-Builder-Prim-Internal.html#eitherB",
          "type": "function"
        },
        "index": {
          "description": "Encode an Either value using the first BoundedPrim for Left values and the second BoundedPrim for Right values Note that the functions eitherB pairB and contramapB written below using suffice to construct BoundedPrim for all non-recursive algebraic datatypes For example maybeB BoundedPrim BoundedPrim BoundedPrim Maybe maybeB nothing just maybe Left Right eitherB nothing just",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "eitherB",
          "normalized": "BoundedPrim a-\u003eBoundedPrim b-\u003eBoundedPrim(Either a b)",
          "package": "bytestring",
          "signature": "BoundedPrim a-\u003eBoundedPrim b-\u003eBoundedPrim(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:eitherB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003e that always results in the zero-length sequence.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "emptyB",
          "package": "bytestring",
          "signature": "BoundedPrim a",
          "source": "src/Data-ByteString-Builder-Prim-Internal.html#emptyB",
          "type": "function"
        },
        "index": {
          "description": "The BoundedPrim that always results in the zero-length sequence",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "emptyB",
          "package": "bytestring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:emptyB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFixedPrim\u003c/a\u003e\u003c/code\u003e that always results in the zero-length sequence.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "emptyF",
          "package": "bytestring",
          "signature": "FixedPrim a",
          "source": "src/Data-ByteString-Builder-Prim-Internal.html#emptyF",
          "type": "function"
        },
        "index": {
          "description": "The FixedPrim that always results in the zero-length sequence",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "emptyF",
          "package": "bytestring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:emptyF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "floatBE",
          "package": "bytestring",
          "signature": "FixedPrim Float",
          "source": "src/Data-ByteString-Builder-Prim-Binary.html#floatBE",
          "type": "function"
        },
        "index": {
          "description": "Encode Float in big endian format",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "floatBE",
          "package": "bytestring",
          "partial": "BE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:floatBE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode an IEEE \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e using 8 nibbles.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "floatHexFixed",
          "package": "bytestring",
          "signature": "FixedPrim Float",
          "source": "src/Data-ByteString-Builder-Prim-ASCII.html#floatHexFixed",
          "type": "function"
        },
        "index": {
          "description": "Encode an IEEE Float using nibbles",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "floatHexFixed",
          "package": "bytestring",
          "partial": "Hex Fixed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:floatHexFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e in native host order and host endianness. Values written\n this way are not portable to different endian machines, without conversion.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "floatHost",
          "package": "bytestring",
          "signature": "FixedPrim Float",
          "source": "src/Data-ByteString-Builder-Prim-Binary.html#floatHost",
          "type": "function"
        },
        "index": {
          "description": "Encode Float in native host order and host endianness Values written this way are not portable to different endian machines without conversion",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "floatHost",
          "package": "bytestring",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:floatHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "floatLE",
          "package": "bytestring",
          "signature": "FixedPrim Float",
          "source": "src/Data-ByteString-Builder-Prim-Binary.html#floatLE",
          "type": "function"
        },
        "index": {
          "description": "Encode Float in little endian format",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "floatLE",
          "package": "bytestring",
          "partial": "LE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:floatLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003es in big endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int16BE",
          "package": "bytestring",
          "signature": "FixedPrim Int16",
          "source": "src/Data-ByteString-Builder-Prim-Binary.html#int16BE",
          "type": "function"
        },
        "index": {
          "description": "Encoding Int16 in big endian format",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int16BE",
          "package": "bytestring",
          "partial": "BE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:int16BE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal encoding of an \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int16Dec",
          "package": "bytestring",
          "signature": "BoundedPrim Int16",
          "source": "src/Data-ByteString-Builder-Prim-ASCII.html#int16Dec",
          "type": "function"
        },
        "index": {
          "description": "Decimal encoding of an Int16",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int16Dec",
          "package": "bytestring",
          "partial": "Dec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:int16Dec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e using 4 nibbles.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int16HexFixed",
          "package": "bytestring",
          "signature": "FixedPrim Int16",
          "source": "src/Data-ByteString-Builder-Prim-ASCII.html#int16HexFixed",
          "type": "function"
        },
        "index": {
          "description": "Encode Int16 using nibbles",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int16HexFixed",
          "package": "bytestring",
          "partial": "Hex Fixed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:int16HexFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003es in native host order and host endianness.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int16Host",
          "package": "bytestring",
          "signature": "FixedPrim Int16",
          "source": "src/Data-ByteString-Builder-Prim-Binary.html#int16Host",
          "type": "function"
        },
        "index": {
          "description": "Encoding Int16 in native host order and host endianness",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int16Host",
          "package": "bytestring",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:int16Host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003es in little endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int16LE",
          "package": "bytestring",
          "signature": "FixedPrim Int16",
          "source": "src/Data-ByteString-Builder-Prim-Binary.html#int16LE",
          "type": "function"
        },
        "index": {
          "description": "Encoding Int16 in little endian format",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int16LE",
          "package": "bytestring",
          "partial": "LE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:int16LE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003es in big endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int32BE",
          "package": "bytestring",
          "signature": "FixedPrim Int32",
          "source": "src/Data-ByteString-Builder-Prim-Binary.html#int32BE",
          "type": "function"
        },
        "index": {
          "description": "Encoding Int32 in big endian format",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int32BE",
          "package": "bytestring",
          "partial": "BE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:int32BE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal encoding of an \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int32Dec",
          "package": "bytestring",
          "signature": "BoundedPrim Int32",
          "source": "src/Data-ByteString-Builder-Prim-ASCII.html#int32Dec",
          "type": "function"
        },
        "index": {
          "description": "Decimal encoding of an Int32",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int32Dec",
          "package": "bytestring",
          "partial": "Dec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:int32Dec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e using 8 nibbles.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int32HexFixed",
          "package": "bytestring",
          "signature": "FixedPrim Int32",
          "source": "src/Data-ByteString-Builder-Prim-ASCII.html#int32HexFixed",
          "type": "function"
        },
        "index": {
          "description": "Encode Int32 using nibbles",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int32HexFixed",
          "package": "bytestring",
          "partial": "Hex Fixed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:int32HexFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003es in native host order and host endianness.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int32Host",
          "package": "bytestring",
          "signature": "FixedPrim Int32",
          "source": "src/Data-ByteString-Builder-Prim-Binary.html#int32Host",
          "type": "function"
        },
        "index": {
          "description": "Encoding Int32 in native host order and host endianness",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int32Host",
          "package": "bytestring",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:int32Host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003es in little endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int32LE",
          "package": "bytestring",
          "signature": "FixedPrim Int32",
          "source": "src/Data-ByteString-Builder-Prim-Binary.html#int32LE",
          "type": "function"
        },
        "index": {
          "description": "Encoding Int32 in little endian format",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int32LE",
          "package": "bytestring",
          "partial": "LE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:int32LE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003es in big endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int64BE",
          "package": "bytestring",
          "signature": "FixedPrim Int64",
          "source": "src/Data-ByteString-Builder-Prim-Binary.html#int64BE",
          "type": "function"
        },
        "index": {
          "description": "Encoding Int64 in big endian format",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int64BE",
          "package": "bytestring",
          "partial": "BE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:int64BE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal encoding of an \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int64Dec",
          "package": "bytestring",
          "signature": "BoundedPrim Int64",
          "source": "src/Data-ByteString-Builder-Prim-ASCII.html#int64Dec",
          "type": "function"
        },
        "index": {
          "description": "Decimal encoding of an Int64",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int64Dec",
          "package": "bytestring",
          "partial": "Dec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:int64Dec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e using 16 nibbles.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int64HexFixed",
          "package": "bytestring",
          "signature": "FixedPrim Int64",
          "source": "src/Data-ByteString-Builder-Prim-ASCII.html#int64HexFixed",
          "type": "function"
        },
        "index": {
          "description": "Encode Int64 using nibbles",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int64HexFixed",
          "package": "bytestring",
          "partial": "Hex Fixed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:int64HexFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003es in native host order and host endianness.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int64Host",
          "package": "bytestring",
          "signature": "FixedPrim Int64",
          "source": "src/Data-ByteString-Builder-Prim-Binary.html#int64Host",
          "type": "function"
        },
        "index": {
          "description": "Encoding Int64 in native host order and host endianness",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int64Host",
          "package": "bytestring",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:int64Host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003es in little endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int64LE",
          "package": "bytestring",
          "signature": "FixedPrim Int64",
          "source": "src/Data-ByteString-Builder-Prim-Binary.html#int64LE",
          "type": "function"
        },
        "index": {
          "description": "Encoding Int64 in little endian format",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int64LE",
          "package": "bytestring",
          "partial": "LE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:int64LE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding single signed bytes as-is.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int8",
          "package": "bytestring",
          "signature": "FixedPrim Int8",
          "source": "src/Data-ByteString-Builder-Prim-Binary.html#int8",
          "type": "function"
        },
        "index": {
          "description": "Encoding single signed bytes as-is",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int8",
          "package": "bytestring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:int8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal encoding of an \u003ccode\u003e\u003ca\u003eInt8\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int8Dec",
          "package": "bytestring",
          "signature": "BoundedPrim Int8",
          "source": "src/Data-ByteString-Builder-Prim-ASCII.html#int8Dec",
          "type": "function"
        },
        "index": {
          "description": "Decimal encoding of an Int8",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int8Dec",
          "package": "bytestring",
          "partial": "Dec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:int8Dec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eInt8\u003c/a\u003e\u003c/code\u003e using 2 nibbles (hexadecimal digits).\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int8HexFixed",
          "package": "bytestring",
          "signature": "FixedPrim Int8",
          "source": "src/Data-ByteString-Builder-Prim-ASCII.html#int8HexFixed",
          "type": "function"
        },
        "index": {
          "description": "Encode Int8 using nibbles hexadecimal digits",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "int8HexFixed",
          "package": "bytestring",
          "partial": "Hex Fixed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:int8HexFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal encoding of an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "intDec",
          "package": "bytestring",
          "signature": "BoundedPrim Int",
          "source": "src/Data-ByteString-Builder-Prim-ASCII.html#intDec",
          "type": "function"
        },
        "index": {
          "description": "Decimal encoding of an Int",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "intDec",
          "package": "bytestring",
          "partial": "Dec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:intDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a single native machine \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es is encoded in host order,\n host endian form, for the machine you are on. On a 64 bit machine the \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\n is an 8 byte value, on a 32 bit machine, 4 bytes. Values encoded this way\n are not portable to different endian or integer sized machines, without\n conversion.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "intHost",
          "package": "bytestring",
          "signature": "FixedPrim Int",
          "source": "src/Data-ByteString-Builder-Prim-Binary.html#intHost",
          "type": "function"
        },
        "index": {
          "description": "Encode single native machine Int The Int is encoded in host order host endian form for the machine you are on On bit machine the Int is an byte value on bit machine bytes Values encoded this way are not portable to different endian or integer sized machines without conversion",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "intHost",
          "package": "bytestring",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:intHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a \u003ccode\u003e\u003ca\u003eFixedPrim\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "liftFixedToBounded",
          "package": "bytestring",
          "signature": "FixedPrim a -\u003e BoundedPrim a",
          "source": "src/Data-ByteString-Builder-Prim-Internal.html#liftFixedToBounded",
          "type": "function"
        },
        "index": {
          "description": "Lift FixedPrim to BoundedPrim",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "liftFixedToBounded",
          "normalized": "FixedPrim a-\u003eBoundedPrim a",
          "package": "bytestring",
          "partial": "Fixed To Bounded",
          "signature": "FixedPrim a-\u003eBoundedPrim a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:liftFixedToBounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e that encodes values with the given \u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWe rewrite consecutive uses of \u003ccode\u003e\u003ca\u003eprimBounded\u003c/a\u003e\u003c/code\u003e such that the bound-checks are\n fused. For example,\n\u003c/p\u003e\u003cpre\u003e primBounded (word32 c1) `mappend` primBounded (word32 c2)\n\u003c/pre\u003e\u003cp\u003eis rewritten such that the resulting \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e checks only once, if ther are\n at 8 free bytes, instead of checking twice, if there are 4 free bytes. This\n optimization is not observationally equivalent in a strict sense, as it\n influences the boundaries of the generated chunks. However, for a user of\n this library it is observationally equivalent, as chunk boundaries of a lazy\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e can only be observed through the internal interface.\n Morevoer, we expect that all primitives write much fewer than 4kb (the\n default short buffer size). Hence, it is safe to ignore the additional\n memory spilled due to the more agressive buffer wrapping introduced by this\n optimization.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "primBounded",
          "package": "bytestring",
          "signature": "BoundedPrim a -\u003e a -\u003e Builder",
          "source": "src/Data-ByteString-Builder-Prim.html#primBounded",
          "type": "function"
        },
        "index": {
          "description": "Create Builder that encodes values with the given BoundedPrim We rewrite consecutive uses of primBounded such that the bound-checks are fused For example primBounded word32 c1 mappend primBounded word32 c2 is rewritten such that the resulting Builder checks only once if ther are at free bytes instead of checking twice if there are free bytes This optimization is not observationally equivalent in strict sense as it influences the boundaries of the generated chunks However for user of this library it is observationally equivalent as chunk boundaries of lazy ByteString can only be observed through the internal interface Morevoer we expect that all primitives write much fewer than kb the default short buffer size Hence it is safe to ignore the additional memory spilled due to the more agressive buffer wrapping introduced by this optimization",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "primBounded",
          "normalized": "BoundedPrim a-\u003ea-\u003eBuilder",
          "package": "bytestring",
          "partial": "Bounded",
          "signature": "BoundedPrim a-\u003ea-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:primBounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a value with a \u003ccode\u003e\u003ca\u003eFixedPrim\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "primFixed",
          "package": "bytestring",
          "signature": "FixedPrim a -\u003e a -\u003e Builder",
          "source": "src/Data-ByteString-Builder-Prim.html#primFixed",
          "type": "function"
        },
        "index": {
          "description": "Encode value with FixedPrim",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "primFixed",
          "normalized": "FixedPrim a-\u003ea-\u003eBuilder",
          "package": "bytestring",
          "partial": "Fixed",
          "signature": "FixedPrim a-\u003ea-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:primFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e that encodes each \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e of a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n using a \u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003e. For example, we can write a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e that filters\n a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e as follows.\n\u003c/p\u003e\u003cpre\u003e import Data.ByteString.Builder.Primas P (word8, condB, emptyB)\n\u003c/pre\u003e\u003cpre\u003e filterBS p = P.condB p P.word8 P.emptyB\n\u003c/pre\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "primMapByteStringBounded",
          "package": "bytestring",
          "signature": "BoundedPrim Word8 -\u003e ByteString -\u003e Builder",
          "source": "src/Data-ByteString-Builder-Prim.html#primMapByteStringBounded",
          "type": "function"
        },
        "index": {
          "description": "Create Builder that encodes each Word8 of strict ByteString using BoundedPrim For example we can write Builder that filters strict ByteString as follows import Data.ByteString.Builder.Primas word8 condB emptyB filterBS P.condB P.word8 P.emptyB",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "primMapByteStringBounded",
          "normalized": "BoundedPrim Word-\u003eByteString-\u003eBuilder",
          "package": "bytestring",
          "partial": "Map Byte String Bounded",
          "signature": "BoundedPrim Word-\u003eByteString-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:primMapByteStringBounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eHeavy inlining.\u003c/em\u003e Encode all bytes of a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e from\n left-to-right with a \u003ccode\u003e\u003ca\u003eFixedPrim\u003c/a\u003e\u003c/code\u003e. This function is quite versatile. For\n example, we can use it to construct a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e that maps every byte before\n copying it to the buffer to be filled.\n\u003c/p\u003e\u003cpre\u003e mapToBuilder :: (Word8 -\u003e Word8) -\u003e S.ByteString -\u003e Builder\n mapToBuilder f = encodeByteStringWithF (contramapF f word8)\n\u003c/pre\u003e\u003cp\u003eWe can also use it to hex-encode a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e as shown by the\n \u003ccode\u003ebyteStringHex\u003c/code\u003e example above.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "primMapByteStringFixed",
          "package": "bytestring",
          "signature": "FixedPrim Word8 -\u003e ByteString -\u003e Builder",
          "source": "src/Data-ByteString-Builder-Prim.html#primMapByteStringFixed",
          "type": "function"
        },
        "index": {
          "description": "Heavy inlining Encode all bytes of strict ByteString from left-to-right with FixedPrim This function is quite versatile For example we can use it to construct Builder that maps every byte before copying it to the buffer to be filled mapToBuilder Word8 Word8 S.ByteString Builder mapToBuilder encodeByteStringWithF contramapF word8 We can also use it to hex-encode strict ByteString as shown by the byteStringHex example above",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "primMapByteStringFixed",
          "normalized": "FixedPrim Word-\u003eByteString-\u003eBuilder",
          "package": "bytestring",
          "partial": "Map Byte String Fixed",
          "signature": "FixedPrim Word-\u003eByteString-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:primMapByteStringFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChunk-wise application of \u003ccode\u003e\u003ca\u003eprimMapByteStringBounded\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "primMapLazyByteStringBounded",
          "package": "bytestring",
          "signature": "BoundedPrim Word8 -\u003e ByteString -\u003e Builder",
          "source": "src/Data-ByteString-Builder-Prim.html#primMapLazyByteStringBounded",
          "type": "function"
        },
        "index": {
          "description": "Chunk-wise application of primMapByteStringBounded",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "primMapLazyByteStringBounded",
          "normalized": "BoundedPrim Word-\u003eByteString-\u003eBuilder",
          "package": "bytestring",
          "partial": "Map Lazy Byte String Bounded",
          "signature": "BoundedPrim Word-\u003eByteString-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:primMapLazyByteStringBounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eHeavy inlining.\u003c/em\u003e Encode all bytes of a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e from\n left-to-right with a \u003ccode\u003e\u003ca\u003eFixedPrim\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "primMapLazyByteStringFixed",
          "package": "bytestring",
          "signature": "FixedPrim Word8 -\u003e ByteString -\u003e Builder",
          "source": "src/Data-ByteString-Builder-Prim.html#primMapLazyByteStringFixed",
          "type": "function"
        },
        "index": {
          "description": "Heavy inlining Encode all bytes of lazy ByteString from left-to-right with FixedPrim",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "primMapLazyByteStringFixed",
          "normalized": "FixedPrim Word-\u003eByteString-\u003eBuilder",
          "package": "bytestring",
          "partial": "Map Lazy Byte String Fixed",
          "signature": "FixedPrim Word-\u003eByteString-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:primMapLazyByteStringFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e that encodes a list of values consecutively using a\n \u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003e for each element. This function is more efficient than the\n canonical\n\u003c/p\u003e\u003cpre\u003e filter p =\n  B.toLazyByteString .\n  E.encodeLazyByteStringWithF (E.ifF p E.word8) E.emptyF)\n\n\u003c/pre\u003e\u003cpre\u003e mconcat . map (primBounded w)\n\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003e foldMap (primBounded w)\n\u003c/pre\u003e\u003cp\u003ebecause it moves several variables out of the inner loop.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "primMapListBounded",
          "package": "bytestring",
          "signature": "BoundedPrim a -\u003e [a] -\u003e Builder",
          "source": "src/Data-ByteString-Builder-Prim.html#primMapListBounded",
          "type": "function"
        },
        "index": {
          "description": "Create Builder that encodes list of values consecutively using BoundedPrim for each element This function is more efficient than the canonical filter B.toLazyByteString E.encodeLazyByteStringWithF E.ifF E.word8 E.emptyF mconcat map primBounded or foldMap primBounded because it moves several variables out of the inner loop",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "primMapListBounded",
          "normalized": "BoundedPrim a-\u003e[a]-\u003eBuilder",
          "package": "bytestring",
          "partial": "Map List Bounded",
          "signature": "BoundedPrim a-\u003e[a]-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:primMapListBounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a list of values from left-to-right with a \u003ccode\u003e\u003ca\u003eFixedPrim\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "primMapListFixed",
          "package": "bytestring",
          "signature": "FixedPrim a -\u003e [a] -\u003e Builder",
          "source": "src/Data-ByteString-Builder-Prim.html#primMapListFixed",
          "type": "function"
        },
        "index": {
          "description": "Encode list of values from left-to-right with FixedPrim",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "primMapListFixed",
          "normalized": "FixedPrim a-\u003e[a]-\u003eBuilder",
          "package": "bytestring",
          "partial": "Map List Fixed",
          "signature": "FixedPrim a-\u003e[a]-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:primMapListFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e that encodes a sequence generated from a seed value\n using a \u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003e for each sequence element.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "primUnfoldrBounded",
          "package": "bytestring",
          "signature": "BoundedPrim b -\u003e (a -\u003e Maybe (b, a)) -\u003e a -\u003e Builder",
          "source": "src/Data-ByteString-Builder-Prim.html#primUnfoldrBounded",
          "type": "function"
        },
        "index": {
          "description": "Create Builder that encodes sequence generated from seed value using BoundedPrim for each sequence element",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "primUnfoldrBounded",
          "normalized": "BoundedPrim a-\u003e(b-\u003eMaybe(a,b))-\u003eb-\u003eBuilder",
          "package": "bytestring",
          "partial": "Unfoldr Bounded",
          "signature": "BoundedPrim b-\u003e(a-\u003eMaybe(b,a))-\u003ea-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:primUnfoldrBounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a list of values represented as an \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eFixedPrim\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "primUnfoldrFixed",
          "package": "bytestring",
          "signature": "FixedPrim b -\u003e (a -\u003e Maybe (b, a)) -\u003e a -\u003e Builder",
          "source": "src/Data-ByteString-Builder-Prim.html#primUnfoldrFixed",
          "type": "function"
        },
        "index": {
          "description": "Encode list of values represented as an unfoldr with FixedPrim",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "primUnfoldrFixed",
          "normalized": "FixedPrim a-\u003e(b-\u003eMaybe(a,b))-\u003eb-\u003eBuilder",
          "package": "bytestring",
          "partial": "Unfoldr Fixed",
          "signature": "FixedPrim b-\u003e(a-\u003eMaybe(b,a))-\u003ea-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:primUnfoldrFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003es in big endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word16BE",
          "package": "bytestring",
          "signature": "FixedPrim Word16",
          "source": "src/Data-ByteString-Builder-Prim-Binary.html#word16BE",
          "type": "function"
        },
        "index": {
          "description": "Encoding Word16 in big endian format",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word16BE",
          "package": "bytestring",
          "partial": "BE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:word16BE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal encoding of a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word16Dec",
          "package": "bytestring",
          "signature": "BoundedPrim Word16",
          "source": "src/Data-ByteString-Builder-Prim-ASCII.html#word16Dec",
          "type": "function"
        },
        "index": {
          "description": "Decimal encoding of Word16",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word16Dec",
          "package": "bytestring",
          "partial": "Dec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:word16Dec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHexadecimal encoding of a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word16Hex",
          "package": "bytestring",
          "signature": "BoundedPrim Word16",
          "source": "src/Data-ByteString-Builder-Prim-ASCII.html#word16Hex",
          "type": "function"
        },
        "index": {
          "description": "Hexadecimal encoding of Word16",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word16Hex",
          "package": "bytestring",
          "partial": "Hex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:word16Hex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e using 4 nibbles.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word16HexFixed",
          "package": "bytestring",
          "signature": "FixedPrim Word16",
          "source": "src/Data-ByteString-Builder-Prim-ASCII.html#word16HexFixed",
          "type": "function"
        },
        "index": {
          "description": "Encode Word16 using nibbles",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word16HexFixed",
          "package": "bytestring",
          "partial": "Hex Fixed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:word16HexFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003es in native host order and host endianness.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word16Host",
          "package": "bytestring",
          "signature": "FixedPrim Word16",
          "source": "src/Data-ByteString-Builder-Prim-Binary.html#word16Host",
          "type": "function"
        },
        "index": {
          "description": "Encoding Word16 in native host order and host endianness",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word16Host",
          "package": "bytestring",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:word16Host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003es in little endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word16LE",
          "package": "bytestring",
          "signature": "FixedPrim Word16",
          "source": "src/Data-ByteString-Builder-Prim-Binary.html#word16LE",
          "type": "function"
        },
        "index": {
          "description": "Encoding Word16 in little endian format",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word16LE",
          "package": "bytestring",
          "partial": "LE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:word16LE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003es in big endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word32BE",
          "package": "bytestring",
          "signature": "FixedPrim Word32",
          "source": "src/Data-ByteString-Builder-Prim-Binary.html#word32BE",
          "type": "function"
        },
        "index": {
          "description": "Encoding Word32 in big endian format",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word32BE",
          "package": "bytestring",
          "partial": "BE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:word32BE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal encoding of a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word32Dec",
          "package": "bytestring",
          "signature": "BoundedPrim Word32",
          "source": "src/Data-ByteString-Builder-Prim-ASCII.html#word32Dec",
          "type": "function"
        },
        "index": {
          "description": "Decimal encoding of Word32",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word32Dec",
          "package": "bytestring",
          "partial": "Dec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:word32Dec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHexadecimal encoding of a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word32Hex",
          "package": "bytestring",
          "signature": "BoundedPrim Word32",
          "source": "src/Data-ByteString-Builder-Prim-ASCII.html#word32Hex",
          "type": "function"
        },
        "index": {
          "description": "Hexadecimal encoding of Word32",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word32Hex",
          "package": "bytestring",
          "partial": "Hex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:word32Hex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e using 8 nibbles.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word32HexFixed",
          "package": "bytestring",
          "signature": "FixedPrim Word32",
          "source": "src/Data-ByteString-Builder-Prim-ASCII.html#word32HexFixed",
          "type": "function"
        },
        "index": {
          "description": "Encode Word32 using nibbles",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word32HexFixed",
          "package": "bytestring",
          "partial": "Hex Fixed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:word32HexFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003es in native host order and host endianness.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word32Host",
          "package": "bytestring",
          "signature": "FixedPrim Word32",
          "source": "src/Data-ByteString-Builder-Prim-Binary.html#word32Host",
          "type": "function"
        },
        "index": {
          "description": "Encoding Word32 in native host order and host endianness",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word32Host",
          "package": "bytestring",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:word32Host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003es in little endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word32LE",
          "package": "bytestring",
          "signature": "FixedPrim Word32",
          "source": "src/Data-ByteString-Builder-Prim-Binary.html#word32LE",
          "type": "function"
        },
        "index": {
          "description": "Encoding Word32 in little endian format",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word32LE",
          "package": "bytestring",
          "partial": "LE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:word32LE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003es in big endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word64BE",
          "package": "bytestring",
          "signature": "FixedPrim Word64",
          "source": "src/Data-ByteString-Builder-Prim-Binary.html#word64BE",
          "type": "function"
        },
        "index": {
          "description": "Encoding Word64 in big endian format",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word64BE",
          "package": "bytestring",
          "partial": "BE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:word64BE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal encoding of a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word64Dec",
          "package": "bytestring",
          "signature": "BoundedPrim Word64",
          "source": "src/Data-ByteString-Builder-Prim-ASCII.html#word64Dec",
          "type": "function"
        },
        "index": {
          "description": "Decimal encoding of Word64",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word64Dec",
          "package": "bytestring",
          "partial": "Dec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:word64Dec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHexadecimal encoding of a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word64Hex",
          "package": "bytestring",
          "signature": "BoundedPrim Word64",
          "source": "src/Data-ByteString-Builder-Prim-ASCII.html#word64Hex",
          "type": "function"
        },
        "index": {
          "description": "Hexadecimal encoding of Word64",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word64Hex",
          "package": "bytestring",
          "partial": "Hex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:word64Hex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e using 16 nibbles.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word64HexFixed",
          "package": "bytestring",
          "signature": "FixedPrim Word64",
          "source": "src/Data-ByteString-Builder-Prim-ASCII.html#word64HexFixed",
          "type": "function"
        },
        "index": {
          "description": "Encode Word64 using nibbles",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word64HexFixed",
          "package": "bytestring",
          "partial": "Hex Fixed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:word64HexFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003es in native host order and host endianness.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word64Host",
          "package": "bytestring",
          "signature": "FixedPrim Word64",
          "source": "src/Data-ByteString-Builder-Prim-Binary.html#word64Host",
          "type": "function"
        },
        "index": {
          "description": "Encoding Word64 in native host order and host endianness",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word64Host",
          "package": "bytestring",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:word64Host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003es in little endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word64LE",
          "package": "bytestring",
          "signature": "FixedPrim Word64",
          "source": "src/Data-ByteString-Builder-Prim-Binary.html#word64LE",
          "type": "function"
        },
        "index": {
          "description": "Encoding Word64 in little endian format",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word64LE",
          "package": "bytestring",
          "partial": "LE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:word64LE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding single unsigned bytes as-is.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word8",
          "package": "bytestring",
          "signature": "FixedPrim Word8",
          "source": "src/Data-ByteString-Builder-Prim-Binary.html#word8",
          "type": "function"
        },
        "index": {
          "description": "Encoding single unsigned bytes as-is",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word8",
          "package": "bytestring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:word8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal encoding of a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word8Dec",
          "package": "bytestring",
          "signature": "BoundedPrim Word8",
          "source": "src/Data-ByteString-Builder-Prim-ASCII.html#word8Dec",
          "type": "function"
        },
        "index": {
          "description": "Decimal encoding of Word8",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word8Dec",
          "package": "bytestring",
          "partial": "Dec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:word8Dec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHexadecimal encoding of a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word8Hex",
          "package": "bytestring",
          "signature": "BoundedPrim Word8",
          "source": "src/Data-ByteString-Builder-Prim-ASCII.html#word8Hex",
          "type": "function"
        },
        "index": {
          "description": "Hexadecimal encoding of Word8",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word8Hex",
          "package": "bytestring",
          "partial": "Hex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:word8Hex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e using 2 nibbles (hexadecimal digits).\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word8HexFixed",
          "package": "bytestring",
          "signature": "FixedPrim Word8",
          "source": "src/Data-ByteString-Builder-Prim-ASCII.html#word8HexFixed",
          "type": "function"
        },
        "index": {
          "description": "Encode Word8 using nibbles hexadecimal digits",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "word8HexFixed",
          "package": "bytestring",
          "partial": "Hex Fixed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:word8HexFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal encoding of a \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "wordDec",
          "package": "bytestring",
          "signature": "BoundedPrim Word",
          "source": "src/Data-ByteString-Builder-Prim-ASCII.html#wordDec",
          "type": "function"
        },
        "index": {
          "description": "Decimal encoding of Word",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "wordDec",
          "package": "bytestring",
          "partial": "Dec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:wordDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHexadecimal encoding of a \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "wordHex",
          "package": "bytestring",
          "signature": "BoundedPrim Word",
          "source": "src/Data-ByteString-Builder-Prim-ASCII.html#wordHex",
          "type": "function"
        },
        "index": {
          "description": "Hexadecimal encoding of Word",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "wordHex",
          "package": "bytestring",
          "partial": "Hex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:wordHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a single native machine \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003es is encoded in host order,\n host endian form, for the machine you are on. On a 64 bit machine the \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e\n is an 8 byte value, on a 32 bit machine, 4 bytes. Values encoded this way\n are not portable to different endian or word sized machines, without\n conversion.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder.Prim",
          "name": "wordHost",
          "package": "bytestring",
          "signature": "FixedPrim Word",
          "source": "src/Data-ByteString-Builder-Prim-Binary.html#wordHost",
          "type": "function"
        },
        "index": {
          "description": "Encode single native machine Word The Word is encoded in host order host endian form for the machine you are on On bit machine the Word is an byte value on bit machine bytes Values encoded this way are not portable to different endian or word sized machines without conversion",
          "hierarchy": "Data ByteString Builder Prim",
          "module": "Data.ByteString.Builder.Prim",
          "name": "wordHost",
          "package": "bytestring",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder-Prim.html#v:wordHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es are used to efficiently construct sequences of bytes from\n  smaller parts.\nTypically,\n  such a construction is part of the implementation of an \u003cem\u003eencoding\u003c/em\u003e, i.e.,\n  a function for converting Haskell values to sequences of bytes.\nExamples of encodings are the generation of the sequence of bytes\n  representing a HTML document to be sent in a HTTP response by a\n  web application or the serialization of a Haskell value using\n  a fixed binary format.\n\u003c/p\u003e\u003cp\u003eFor an \u003cem\u003eefficient implementation of an encoding\u003c/em\u003e,\n  it is important that (a) little time is spent on converting\n  the Haskell values to the resulting sequence of bytes \u003cem\u003eand\u003c/em\u003e\n  (b) that the representation of the resulting sequence\n  is such that it can be consumed efficiently.\n\u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es support (a) by providing an \u003cem\u003eO(1)\u003c/em\u003e concatentation operation\n  and efficient implementations of basic encodings for \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003es, \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es,\n  and other standard Haskell values.\nThey support (b) by providing their result as a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e,\n  which is internally just a linked list of pointers to \u003cem\u003echunks\u003c/em\u003e\n  of consecutive raw memory.\nLazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es can be efficiently consumed by functions that\n  write them to a file or send them over a network socket.\nNote that each chunk boundary incurs expensive extra work (e.g., a system call)\n  that must be amortized over the work spent on consuming the chunk body.\n\u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es therefore take special care to ensure that the\n  average chunk size is large enough.\nThe precise meaning of large enough is application dependent.\nThe current implementation is tuned\n  for an average chunk size between 4kb and 32kb,\n  which should suit most applications.\n\u003c/p\u003e\u003cp\u003eAs a simple example of an encoding implementation,\n  we show how to efficiently convert the following representation of mixed-data\n  tables to an UTF-8 encoded Comma-Separated-Values (CSV) table.\n\u003c/p\u003e\u003cpre\u003edata Cell = StringC String\n          | IntC Int\n          deriving( Eq, Ord, Show )\n\ntype Row   = [Cell]\ntype Table = [Row]\n\u003c/pre\u003e\u003cp\u003eWe use the following imports and abbreviate \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e to simplify reading.\n\u003c/p\u003e\u003cpre\u003e\nimport qualified \u003ca\u003eData.ByteString.Lazy\u003c/a\u003e               as L\nimport           \u003ca\u003eData.ByteString.Builder\u003c/a\u003e\nimport           Data.Monoid\nimport           Data.Foldable                        (\u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e)\nimport           Data.List                            (\u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e)\n\ninfixr 4 \u003c\u003e\n(\u003c\u003e) :: \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e m =\u003e m -\u003e m -\u003e m\n(\u003c\u003e) = \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eCSV is a character-based representation of tables. For maximal modularity,\nwe could first render \u003ccode\u003eTable\u003c/code\u003es as \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es and then encode this \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\nusing some Unicode character encoding. However, this sacrifices performance\ndue to the intermediate \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e representation being built and thrown away\nright afterwards. We get rid of this intermediate \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e representation by\nfixing the character encoding to UTF-8 and using \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es to convert\n\u003ccode\u003eTable\u003c/code\u003es directly to UTF-8 encoded CSV tables represented as lazy\n\u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cpre\u003e\nencodeUtf8CSV :: Table -\u003e L.ByteString\nencodeUtf8CSV = \u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e . renderTable\n\nrenderTable :: Table -\u003e Builder\nrenderTable rs = \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e [renderRow r \u003c\u003e \u003ccode\u003e\u003ca\u003echarUtf8\u003c/a\u003e\u003c/code\u003e '\\n' | r \u003c- rs]\n\nrenderRow :: Row -\u003e Builder\nrenderRow []     = \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e\nrenderRow (c:cs) =\n    renderCell c \u003c\u003e mconcat [ charUtf8 ',' \u003c\u003e renderCell c' | c' \u003c- cs ]\n\nrenderCell :: Cell -\u003e Builder\nrenderCell (StringC cs) = renderString cs\nrenderCell (IntC i)     = \u003ccode\u003e\u003ca\u003eintDec\u003c/a\u003e\u003c/code\u003e i\n\nrenderString :: String -\u003e Builder\nrenderString cs = charUtf8 '\"' \u003c\u003e foldMap escape cs \u003c\u003e charUtf8 '\"'\n  where\n    escape '\\\\' = charUtf8 '\\\\' \u003c\u003e charUtf8 '\\\\'\n    escape '\\\"' = charUtf8 '\\\\' \u003c\u003e charUtf8 '\\\"'\n    escape c    = charUtf8 c\n\u003c/pre\u003e\u003cp\u003eNote that the ASCII encoding is a subset of the UTF-8 encoding,\n  which is why we can use the optimized function \u003ccode\u003e\u003ca\u003eintDec\u003c/a\u003e\u003c/code\u003e to\n  encode an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e as a decimal number with UTF-8 encoded digits.\nUsing \u003ccode\u003e\u003ca\u003eintDec\u003c/a\u003e\u003c/code\u003e is more efficient than \u003ccode\u003e\u003ccode\u003e\u003ca\u003estringUtf8\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e,\n  as it avoids constructing an intermediate \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\nAvoiding this intermediate data structure significantly improves\n  performance because encoding \u003ccode\u003eCell\u003c/code\u003es is the core operation\n  for rendering CSV-tables.\nSee \u003ca\u003eData.ByteString.Builder.Prim\u003c/a\u003e for further\n  information on how to improve the performance of \u003ccode\u003erenderString\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWe demonstrate our UTF-8 CSV encoding function on the following table.\n\u003c/p\u003e\u003cpre\u003e\nstrings :: [String]\nstrings =  [\"hello\", \"\\\"1\\\"\", \"&#955;-w&#246;rld\"]\n\ntable :: Table\ntable = [map StringC strings, map IntC [-3..3]]\n\u003c/pre\u003e\u003cp\u003eThe expression \u003ccode\u003eencodeUtf8CSV table\u003c/code\u003e results in the following lazy\n\u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003eChunk \"\\\"hello\\\",\\\"\\\\\\\"1\\\\\\\"\\\",\\\"\\206\\187-w\\195\\182rld\\\"\\n-3,-2,-1,0,1,2,3\\n\" Empty\n\u003c/pre\u003e\u003cp\u003eWe can clearly see that we are converting to a \u003cem\u003ebinary\u003c/em\u003e format. The '&#955;'\nand '&#246;' characters, which have a Unicode codepoint above 127, are\nexpanded to their corresponding UTF-8 multi-byte representation.\n\u003c/p\u003e\u003cp\u003eWe use the \u003ccode\u003ecriterion\u003c/code\u003e library (\u003ca\u003ehttp://hackage.haskell.org/package/criterion\u003c/a\u003e)\n  to benchmark the efficiency of our encoding function on the following table.\n\u003c/p\u003e\u003cpre\u003eimport Criterion.Main     -- add this import to the ones above\n\nmaxiTable :: Table\nmaxiTable = take 1000 $ cycle table\n\nmain :: IO ()\nmain = defaultMain\n  [ bench \"encodeUtf8CSV maxiTable (original)\" $\n      whnf (L.length . encodeUtf8CSV) maxiTable\n  ]\n\u003c/pre\u003e\u003cp\u003eOn a Core2 Duo 2.20GHz on a 32-bit Linux,\n  the above code takes 1ms to generate the 22'500 bytes long lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\nLooking again at the definitions above,\n  we see that we took care to avoid intermediate data structures,\n  as otherwise we would sacrifice performance.\nFor example,\n  the following (arguably simpler) definition of \u003ccode\u003erenderRow\u003c/code\u003e is about 20% slower.\n\u003c/p\u003e\u003cpre\u003erenderRow :: Row -\u003e Builder\nrenderRow  = mconcat . intersperse (charUtf8 ',') . map renderCell\n\u003c/pre\u003e\u003cp\u003eSimilarly, using \u003cem\u003eO(n)\u003c/em\u003e concatentations like \u003ccode\u003e\u003ca\u003e++\u003c/a\u003e\u003c/code\u003e or the equivalent \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e\n  operations on strict and lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es should be avoided.\nThe following definition of \u003ccode\u003erenderString\u003c/code\u003e is also about 20% slower.\n\u003c/p\u003e\u003cpre\u003erenderString :: String -\u003e Builder\nrenderString cs = charUtf8 $ \"\\\"\" ++ concatMap escape cs ++ \"\\\"\"\n  where\n    escape '\\\\' = \"\\\\\"\n    escape '\\\"' = \"\\\\\\\"\"\n    escape c    = return c\n\u003c/pre\u003e\u003cp\u003eApart from removing intermediate data-structures,\n  encodings can be optimized further by fine-tuning their execution\n  parameters using the functions in \u003ca\u003eData.ByteString.Builder.Extra\u003c/a\u003e and\n  their \"inner loops\" using the functions in\n  \u003ca\u003eData.ByteString.Builder.Prim\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ByteString.Builder",
          "name": "Builder",
          "package": "bytestring",
          "source": "src/Data-ByteString-Builder.html",
          "type": "module"
        },
        "index": {
          "description": "Builder are used to efficiently construct sequences of bytes from smaller parts Typically such construction is part of the implementation of an encoding i.e function for converting Haskell values to sequences of bytes Examples of encodings are the generation of the sequence of bytes representing HTML document to be sent in HTTP response by web application or the serialization of Haskell value using fixed binary format For an efficient implementation of an encoding it is important that little time is spent on converting the Haskell values to the resulting sequence of bytes and that the representation of the resulting sequence is such that it can be consumed efficiently Builder support by providing an concatentation operation and efficient implementations of basic encodings for Char Int and other standard Haskell values They support by providing their result as lazy ByteString which is internally just linked list of pointers to chunks of consecutive raw memory Lazy ByteString can be efficiently consumed by functions that write them to file or send them over network socket Note that each chunk boundary incurs expensive extra work e.g system call that must be amortized over the work spent on consuming the chunk body Builder therefore take special care to ensure that the average chunk size is large enough The precise meaning of large enough is application dependent The current implementation is tuned for an average chunk size between kb and kb which should suit most applications As simple example of an encoding implementation we show how to efficiently convert the following representation of mixed-data tables to an UTF-8 encoded Comma-Separated-Values CSV table data Cell StringC String IntC Int deriving Eq Ord Show type Row Cell type Table Row We use the following imports and abbreviate mappend to simplify reading import qualified Data.ByteString.Lazy as import Data.ByteString.Builder import Data.Monoid import Data.Foldable foldMap import Data.List intersperse infixr Monoid mappend CSV is character-based representation of tables For maximal modularity we could first render Table as String and then encode this String using some Unicode character encoding However this sacrifices performance due to the intermediate String representation being built and thrown away right afterwards We get rid of this intermediate String representation by fixing the character encoding to UTF-8 and using Builder to convert Table directly to UTF-8 encoded CSV tables represented as lazy ByteString encodeUtf8CSV Table L.ByteString encodeUtf8CSV toLazyByteString renderTable renderTable Table Builder renderTable rs mconcat renderRow charUtf8 rs renderRow Row Builder renderRow mempty renderRow cs renderCell mconcat charUtf8 renderCell cs renderCell Cell Builder renderCell StringC cs renderString cs renderCell IntC intDec renderString String Builder renderString cs charUtf8 foldMap escape cs charUtf8 where escape charUtf8 charUtf8 escape charUtf8 charUtf8 escape charUtf8 Note that the ASCII encoding is subset of the UTF-8 encoding which is why we can use the optimized function intDec to encode an Int as decimal number with UTF-8 encoded digits Using intDec is more efficient than stringUtf8 show as it avoids constructing an intermediate String Avoiding this intermediate data structure significantly improves performance because encoding Cell is the core operation for rendering CSV-tables See Data.ByteString.Builder.Prim for further information on how to improve the performance of renderString We demonstrate our UTF-8 CSV encoding function on the following table strings String strings hello rld table Table table map StringC strings map IntC The expression encodeUtf8CSV table results in the following lazy ByteString Chunk hello rld n-3 Empty We can clearly see that we are converting to binary format The and characters which have Unicode codepoint above are expanded to their corresponding UTF-8 multi-byte representation We use the criterion library http hackage.haskell.org package criterion to benchmark the efficiency of our encoding function on the following table import Criterion.Main add this import to the ones above maxiTable Table maxiTable take cycle table main IO main defaultMain bench encodeUtf8CSV maxiTable original whnf L.length encodeUtf8CSV maxiTable On Core2 Duo GHz on bit Linux the above code takes ms to generate the bytes long lazy ByteString Looking again at the definitions above we see that we took care to avoid intermediate data structures as otherwise we would sacrifice performance For example the following arguably simpler definition of renderRow is about slower renderRow Row Builder renderRow mconcat intersperse charUtf8 map renderCell Similarly using concatentations like or the equivalent concat operations on strict and lazy ByteString should be avoided The following definition of renderString is also about slower renderString String Builder renderString cs charUtf8 concatMap escape cs where escape escape escape return Apart from removing intermediate data-structures encodings can be optimized further by fine-tuning their execution parameters using the functions in Data.ByteString.Builder.Extra and their inner loops using the functions in Data.ByteString.Builder.Prim",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "Builder",
          "package": "bytestring",
          "partial": "Builder",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es denote sequences of bytes.\n They are \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003es where\n   \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e is the zero-length sequence and\n   \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e is concatenation, which runs in \u003cem\u003eO(1)\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "Builder",
          "package": "bytestring",
          "source": "src/Data-ByteString-Builder-Internal.html#Builder",
          "type": "data"
        },
        "index": {
          "description": "Builder denote sequences of bytes They are Monoid where mempty is the zero-length sequence and mappend is concatenation which runs in",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "Builder",
          "package": "bytestring",
          "partial": "Builder",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#t:Builder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e denoting the same sequence of bytes as a strict\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n The \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e inserts large \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es directly, but copies small ones\n to ensure that the generated chunks are large on average.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "byteString",
          "package": "bytestring",
          "signature": "ByteString -\u003e Builder",
          "source": "src/Data-ByteString-Builder-Internal.html#byteString",
          "type": "function"
        },
        "index": {
          "description": "Create Builder denoting the same sequence of bytes as strict ByteString The Builder inserts large ByteString directly but copies small ones to ensure that the generated chunks are large on average",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "byteString",
          "normalized": "ByteString-\u003eBuilder",
          "package": "bytestring",
          "partial": "String",
          "signature": "ByteString-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:byteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode each byte of a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e using its fixed-width hex encoding.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "byteStringHex",
          "package": "bytestring",
          "signature": "ByteString -\u003e Builder",
          "source": "src/Data-ByteString-Builder-ASCII.html#byteStringHex",
          "type": "function"
        },
        "index": {
          "description": "Encode each byte of ByteString using its fixed-width hex encoding",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "byteStringHex",
          "normalized": "ByteString-\u003eBuilder",
          "package": "bytestring",
          "partial": "String Hex",
          "signature": "ByteString-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:byteStringHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChar7 encode a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "char7",
          "package": "bytestring",
          "signature": "Char -\u003e Builder",
          "source": "src/Data-ByteString-Builder.html#char7",
          "type": "function"
        },
        "index": {
          "description": "Char7 encode Char",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "char7",
          "normalized": "Char-\u003eBuilder",
          "package": "bytestring",
          "signature": "Char-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:char7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChar8 encode a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "char8",
          "package": "bytestring",
          "signature": "Char -\u003e Builder",
          "source": "src/Data-ByteString-Builder.html#char8",
          "type": "function"
        },
        "index": {
          "description": "Char8 encode Char",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "char8",
          "normalized": "Char-\u003eBuilder",
          "package": "bytestring",
          "signature": "Char-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:char8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUTF-8 encode a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "charUtf8",
          "package": "bytestring",
          "signature": "Char -\u003e Builder",
          "source": "src/Data-ByteString-Builder.html#charUtf8",
          "type": "function"
        },
        "index": {
          "description": "UTF-8 encode Char",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "charUtf8",
          "normalized": "Char-\u003eBuilder",
          "package": "bytestring",
          "partial": "Utf",
          "signature": "Char-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:charUtf8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "doubleBE",
          "package": "bytestring",
          "signature": "Double -\u003e Builder",
          "source": "src/Data-ByteString-Builder.html#doubleBE",
          "type": "function"
        },
        "index": {
          "description": "Encode Double in big endian format",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "doubleBE",
          "normalized": "Double-\u003eBuilder",
          "package": "bytestring",
          "partial": "BE",
          "signature": "Double-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:doubleBE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eCurrently slow.\u003c/em\u003e Decimal encoding of an IEEE \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "doubleDec",
          "package": "bytestring",
          "signature": "Double -\u003e Builder",
          "source": "src/Data-ByteString-Builder-ASCII.html#doubleDec",
          "type": "function"
        },
        "index": {
          "description": "Currently slow Decimal encoding of an IEEE Double",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "doubleDec",
          "normalized": "Double-\u003eBuilder",
          "package": "bytestring",
          "partial": "Dec",
          "signature": "Double-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:doubleDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode an IEEE \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e using 16 nibbles.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "doubleHexFixed",
          "package": "bytestring",
          "signature": "Double -\u003e Builder",
          "source": "src/Data-ByteString-Builder-ASCII.html#doubleHexFixed",
          "type": "function"
        },
        "index": {
          "description": "Encode an IEEE Double using nibbles",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "doubleHexFixed",
          "normalized": "Double-\u003eBuilder",
          "package": "bytestring",
          "partial": "Hex Fixed",
          "signature": "Double-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:doubleHexFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "doubleLE",
          "package": "bytestring",
          "signature": "Double -\u003e Builder",
          "source": "src/Data-ByteString-Builder.html#doubleLE",
          "type": "function"
        },
        "index": {
          "description": "Encode Double in little endian format",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "doubleLE",
          "normalized": "Double-\u003eBuilder",
          "package": "bytestring",
          "partial": "LE",
          "signature": "Double-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:doubleLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "floatBE",
          "package": "bytestring",
          "signature": "Float -\u003e Builder",
          "source": "src/Data-ByteString-Builder.html#floatBE",
          "type": "function"
        },
        "index": {
          "description": "Encode Float in big endian format",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "floatBE",
          "normalized": "Float-\u003eBuilder",
          "package": "bytestring",
          "partial": "BE",
          "signature": "Float-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:floatBE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eCurrently slow.\u003c/em\u003e Decimal encoding of an IEEE \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "floatDec",
          "package": "bytestring",
          "signature": "Float -\u003e Builder",
          "source": "src/Data-ByteString-Builder-ASCII.html#floatDec",
          "type": "function"
        },
        "index": {
          "description": "Currently slow Decimal encoding of an IEEE Float",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "floatDec",
          "normalized": "Float-\u003eBuilder",
          "package": "bytestring",
          "partial": "Dec",
          "signature": "Float-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:floatDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode an IEEE \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e using 8 nibbles.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "floatHexFixed",
          "package": "bytestring",
          "signature": "Float -\u003e Builder",
          "source": "src/Data-ByteString-Builder-ASCII.html#floatHexFixed",
          "type": "function"
        },
        "index": {
          "description": "Encode an IEEE Float using nibbles",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "floatHexFixed",
          "normalized": "Float-\u003eBuilder",
          "package": "bytestring",
          "partial": "Hex Fixed",
          "signature": "Float-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:floatHexFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "floatLE",
          "package": "bytestring",
          "signature": "Float -\u003e Builder",
          "source": "src/Data-ByteString-Builder.html#floatLE",
          "type": "function"
        },
        "index": {
          "description": "Encode Float in little endian format",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "floatLE",
          "normalized": "Float-\u003eBuilder",
          "package": "bytestring",
          "partial": "LE",
          "signature": "Float-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:floatLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n The \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e is executed directly on the buffer of the \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e. If the\n buffer is too small (or not present), then it is replaced with a large\n enough buffer.\n\u003c/p\u003e\u003cp\u003eIt is recommended that the \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e is set to binary and\n \u003ccode\u003eBlockBuffering\u003c/code\u003e mode. See \u003ccode\u003ehSetBinaryMode\u003c/code\u003e and \u003ccode\u003ehSetBuffering\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function is more efficient than \u003ccode\u003ehPut . \u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e because in\n many cases no buffer allocation has to be done. Moreover, the results of\n several executions of short \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es are concatenated in the \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es\n buffer, therefore avoiding unnecessary buffer flushes.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "hPutBuilder",
          "package": "bytestring",
          "signature": "Handle -\u003e Builder -\u003e IO ()",
          "source": "src/Data-ByteString-Builder.html#hPutBuilder",
          "type": "function"
        },
        "index": {
          "description": "Output Builder to Handle The Builder is executed directly on the buffer of the Handle If the buffer is too small or not present then it is replaced with large enough buffer It is recommended that the Handle is set to binary and BlockBuffering mode See hSetBinaryMode and hSetBuffering This function is more efficient than hPut toLazyByteString because in many cases no buffer allocation has to be done Moreover the results of several executions of short Builder are concatenated in the Handle buffer therefore avoiding unnecessary buffer flushes",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "hPutBuilder",
          "normalized": "Handle-\u003eBuilder-\u003eIO()",
          "package": "bytestring",
          "partial": "Put Builder",
          "signature": "Handle-\u003eBuilder-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:hPutBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode an \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "int16BE",
          "package": "bytestring",
          "signature": "Int16 -\u003e Builder",
          "source": "src/Data-ByteString-Builder.html#int16BE",
          "type": "function"
        },
        "index": {
          "description": "Encode an Int16 in big endian format",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "int16BE",
          "normalized": "Int-\u003eBuilder",
          "package": "bytestring",
          "partial": "BE",
          "signature": "Int-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:int16BE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal encoding of an \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e using the ASCII digits.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "int16Dec",
          "package": "bytestring",
          "signature": "Int16 -\u003e Builder",
          "source": "src/Data-ByteString-Builder-ASCII.html#int16Dec",
          "type": "function"
        },
        "index": {
          "description": "Decimal encoding of an Int16 using the ASCII digits",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "int16Dec",
          "normalized": "Int-\u003eBuilder",
          "package": "bytestring",
          "partial": "Dec",
          "signature": "Int-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:int16Dec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e using 4 nibbles.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "int16HexFixed",
          "package": "bytestring",
          "signature": "Int16 -\u003e Builder",
          "source": "src/Data-ByteString-Builder-ASCII.html#int16HexFixed",
          "type": "function"
        },
        "index": {
          "description": "Encode Int16 using nibbles",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "int16HexFixed",
          "normalized": "Int-\u003eBuilder",
          "package": "bytestring",
          "partial": "Hex Fixed",
          "signature": "Int-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:int16HexFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode an \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "int16LE",
          "package": "bytestring",
          "signature": "Int16 -\u003e Builder",
          "source": "src/Data-ByteString-Builder.html#int16LE",
          "type": "function"
        },
        "index": {
          "description": "Encode an Int16 in little endian format",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "int16LE",
          "normalized": "Int-\u003eBuilder",
          "package": "bytestring",
          "partial": "LE",
          "signature": "Int-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:int16LE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode an \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "int32BE",
          "package": "bytestring",
          "signature": "Int32 -\u003e Builder",
          "source": "src/Data-ByteString-Builder.html#int32BE",
          "type": "function"
        },
        "index": {
          "description": "Encode an Int32 in big endian format",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "int32BE",
          "normalized": "Int-\u003eBuilder",
          "package": "bytestring",
          "partial": "BE",
          "signature": "Int-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:int32BE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal encoding of an \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e using the ASCII digits.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "int32Dec",
          "package": "bytestring",
          "signature": "Int32 -\u003e Builder",
          "source": "src/Data-ByteString-Builder-ASCII.html#int32Dec",
          "type": "function"
        },
        "index": {
          "description": "Decimal encoding of an Int32 using the ASCII digits",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "int32Dec",
          "normalized": "Int-\u003eBuilder",
          "package": "bytestring",
          "partial": "Dec",
          "signature": "Int-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:int32Dec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e using 8 nibbles.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "int32HexFixed",
          "package": "bytestring",
          "signature": "Int32 -\u003e Builder",
          "source": "src/Data-ByteString-Builder-ASCII.html#int32HexFixed",
          "type": "function"
        },
        "index": {
          "description": "Encode Int32 using nibbles",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "int32HexFixed",
          "normalized": "Int-\u003eBuilder",
          "package": "bytestring",
          "partial": "Hex Fixed",
          "signature": "Int-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:int32HexFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode an \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "int32LE",
          "package": "bytestring",
          "signature": "Int32 -\u003e Builder",
          "source": "src/Data-ByteString-Builder.html#int32LE",
          "type": "function"
        },
        "index": {
          "description": "Encode an Int32 in little endian format",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "int32LE",
          "normalized": "Int-\u003eBuilder",
          "package": "bytestring",
          "partial": "LE",
          "signature": "Int-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:int32LE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode an \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "int64BE",
          "package": "bytestring",
          "signature": "Int64 -\u003e Builder",
          "source": "src/Data-ByteString-Builder.html#int64BE",
          "type": "function"
        },
        "index": {
          "description": "Encode an Int64 in big endian format",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "int64BE",
          "normalized": "Int-\u003eBuilder",
          "package": "bytestring",
          "partial": "BE",
          "signature": "Int-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:int64BE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal encoding of an \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e using the ASCII digits.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "int64Dec",
          "package": "bytestring",
          "signature": "Int64 -\u003e Builder",
          "source": "src/Data-ByteString-Builder-ASCII.html#int64Dec",
          "type": "function"
        },
        "index": {
          "description": "Decimal encoding of an Int64 using the ASCII digits",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "int64Dec",
          "normalized": "Int-\u003eBuilder",
          "package": "bytestring",
          "partial": "Dec",
          "signature": "Int-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:int64Dec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e using 16 nibbles.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "int64HexFixed",
          "package": "bytestring",
          "signature": "Int64 -\u003e Builder",
          "source": "src/Data-ByteString-Builder-ASCII.html#int64HexFixed",
          "type": "function"
        },
        "index": {
          "description": "Encode Int64 using nibbles",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "int64HexFixed",
          "normalized": "Int-\u003eBuilder",
          "package": "bytestring",
          "partial": "Hex Fixed",
          "signature": "Int-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:int64HexFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode an \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "int64LE",
          "package": "bytestring",
          "signature": "Int64 -\u003e Builder",
          "source": "src/Data-ByteString-Builder.html#int64LE",
          "type": "function"
        },
        "index": {
          "description": "Encode an Int64 in little endian format",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "int64LE",
          "normalized": "Int-\u003eBuilder",
          "package": "bytestring",
          "partial": "LE",
          "signature": "Int-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:int64LE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a single signed byte as-is.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "int8",
          "package": "bytestring",
          "signature": "Int8 -\u003e Builder",
          "source": "src/Data-ByteString-Builder.html#int8",
          "type": "function"
        },
        "index": {
          "description": "Encode single signed byte as-is",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "int8",
          "normalized": "Int-\u003eBuilder",
          "package": "bytestring",
          "signature": "Int-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:int8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal encoding of an \u003ccode\u003e\u003ca\u003eInt8\u003c/a\u003e\u003c/code\u003e using the ASCII digits.\n\u003c/p\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003cpre\u003e toLazyByteString (int8Dec 42)   = \"42\"\n toLazyByteString (int8Dec (-1)) = \"-1\"\n\u003c/pre\u003e",
          "module": "Data.ByteString.Builder",
          "name": "int8Dec",
          "package": "bytestring",
          "signature": "Int8 -\u003e Builder",
          "source": "src/Data-ByteString-Builder-ASCII.html#int8Dec",
          "type": "function"
        },
        "index": {
          "description": "Decimal encoding of an Int8 using the ASCII digits e.g toLazyByteString int8Dec toLazyByteString int8Dec",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "int8Dec",
          "normalized": "Int-\u003eBuilder",
          "package": "bytestring",
          "partial": "Dec",
          "signature": "Int-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:int8Dec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eInt8\u003c/a\u003e\u003c/code\u003e using 2 nibbles (hexadecimal digits).\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "int8HexFixed",
          "package": "bytestring",
          "signature": "Int8 -\u003e Builder",
          "source": "src/Data-ByteString-Builder-ASCII.html#int8HexFixed",
          "type": "function"
        },
        "index": {
          "description": "Encode Int8 using nibbles hexadecimal digits",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "int8HexFixed",
          "normalized": "Int-\u003eBuilder",
          "package": "bytestring",
          "partial": "Hex Fixed",
          "signature": "Int-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:int8HexFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal encoding of an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e using the ASCII digits.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "intDec",
          "package": "bytestring",
          "signature": "Int -\u003e Builder",
          "source": "src/Data-ByteString-Builder-ASCII.html#intDec",
          "type": "function"
        },
        "index": {
          "description": "Decimal encoding of an Int using the ASCII digits",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "intDec",
          "normalized": "Int-\u003eBuilder",
          "package": "bytestring",
          "partial": "Dec",
          "signature": "Int-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:intDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal encoding of an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e using the ASCII digits.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "integerDec",
          "package": "bytestring",
          "signature": "Integer -\u003e Builder",
          "source": "src/Data-ByteString-Builder-ASCII.html#integerDec",
          "type": "function"
        },
        "index": {
          "description": "Decimal encoding of an Integer using the ASCII digits",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "integerDec",
          "normalized": "Integer-\u003eBuilder",
          "package": "bytestring",
          "partial": "Dec",
          "signature": "Integer-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:integerDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e denoting the same sequence of bytes as a lazy\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n The \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e inserts large chunks of the lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e directly,\n but copies small ones to ensure that the generated chunks are large on\n average.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "lazyByteString",
          "package": "bytestring",
          "signature": "ByteString -\u003e Builder",
          "source": "src/Data-ByteString-Builder-Internal.html#lazyByteString",
          "type": "function"
        },
        "index": {
          "description": "Create Builder denoting the same sequence of bytes as lazy ByteString The Builder inserts large chunks of the lazy ByteString directly but copies small ones to ensure that the generated chunks are large on average",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "lazyByteString",
          "normalized": "ByteString-\u003eBuilder",
          "package": "bytestring",
          "partial": "Byte String",
          "signature": "ByteString-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:lazyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode each byte of a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e using its fixed-width hex encoding.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "lazyByteStringHex",
          "package": "bytestring",
          "signature": "ByteString -\u003e Builder",
          "source": "src/Data-ByteString-Builder-ASCII.html#lazyByteStringHex",
          "type": "function"
        },
        "index": {
          "description": "Encode each byte of lazy ByteString using its fixed-width hex encoding",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "lazyByteStringHex",
          "normalized": "ByteString-\u003eBuilder",
          "package": "bytestring",
          "partial": "Byte String Hex",
          "signature": "ByteString-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:lazyByteStringHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e that copies the \u003ccode\u003e\u003ca\u003eShortByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "shortByteString",
          "package": "bytestring",
          "signature": "ShortByteString -\u003e Builder",
          "source": "src/Data-ByteString-Builder-Internal.html#shortByteString",
          "type": "function"
        },
        "index": {
          "description": "Construct Builder that copies the ShortByteString",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "shortByteString",
          "normalized": "ShortByteString-\u003eBuilder",
          "package": "bytestring",
          "partial": "Byte String",
          "signature": "ShortByteString-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:shortByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChar7 encode a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "string7",
          "package": "bytestring",
          "signature": "String -\u003e Builder",
          "source": "src/Data-ByteString-Builder.html#string7",
          "type": "function"
        },
        "index": {
          "description": "Char7 encode String",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "string7",
          "normalized": "String-\u003eBuilder",
          "package": "bytestring",
          "signature": "String-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:string7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChar8 encode a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "string8",
          "package": "bytestring",
          "signature": "String -\u003e Builder",
          "source": "src/Data-ByteString-Builder.html#string8",
          "type": "function"
        },
        "index": {
          "description": "Char8 encode String",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "string8",
          "normalized": "String-\u003eBuilder",
          "package": "bytestring",
          "signature": "String-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:string8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUTF-8 encode a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "stringUtf8",
          "package": "bytestring",
          "signature": "String -\u003e Builder",
          "source": "src/Data-ByteString-Builder.html#stringUtf8",
          "type": "function"
        },
        "index": {
          "description": "UTF-8 encode String",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "stringUtf8",
          "normalized": "String-\u003eBuilder",
          "package": "bytestring",
          "partial": "Utf",
          "signature": "String-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:stringUtf8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e and return the generated chunks as a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n The work is performed lazy, i.e., only when a chunk of the lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n is forced.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "toLazyByteString",
          "package": "bytestring",
          "signature": "Builder -\u003e ByteString",
          "source": "src/Data-ByteString-Builder.html#toLazyByteString",
          "type": "function"
        },
        "index": {
          "description": "Execute Builder and return the generated chunks as lazy ByteString The work is performed lazy i.e only when chunk of the lazy ByteString is forced",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "toLazyByteString",
          "normalized": "Builder-\u003eByteString",
          "package": "bytestring",
          "partial": "Lazy Byte String",
          "signature": "Builder-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:toLazyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "word16BE",
          "package": "bytestring",
          "signature": "Word16 -\u003e Builder",
          "source": "src/Data-ByteString-Builder.html#word16BE",
          "type": "function"
        },
        "index": {
          "description": "Encode Word16 in big endian format",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "word16BE",
          "normalized": "Word-\u003eBuilder",
          "package": "bytestring",
          "partial": "BE",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:word16BE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal encoding of a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e using the ASCII digits.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "word16Dec",
          "package": "bytestring",
          "signature": "Word16 -\u003e Builder",
          "source": "src/Data-ByteString-Builder-ASCII.html#word16Dec",
          "type": "function"
        },
        "index": {
          "description": "Decimal encoding of Word16 using the ASCII digits",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "word16Dec",
          "normalized": "Word-\u003eBuilder",
          "package": "bytestring",
          "partial": "Dec",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:word16Dec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShortest hexadecimal encoding of a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e using lower-case characters.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "word16Hex",
          "package": "bytestring",
          "signature": "Word16 -\u003e Builder",
          "source": "src/Data-ByteString-Builder-ASCII.html#word16Hex",
          "type": "function"
        },
        "index": {
          "description": "Shortest hexadecimal encoding of Word16 using lower-case characters",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "word16Hex",
          "normalized": "Word-\u003eBuilder",
          "package": "bytestring",
          "partial": "Hex",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:word16Hex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e using 4 nibbles.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "word16HexFixed",
          "package": "bytestring",
          "signature": "Word16 -\u003e Builder",
          "source": "src/Data-ByteString-Builder-ASCII.html#word16HexFixed",
          "type": "function"
        },
        "index": {
          "description": "Encode Word16 using nibbles",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "word16HexFixed",
          "normalized": "Word-\u003eBuilder",
          "package": "bytestring",
          "partial": "Hex Fixed",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:word16HexFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "word16LE",
          "package": "bytestring",
          "signature": "Word16 -\u003e Builder",
          "source": "src/Data-ByteString-Builder.html#word16LE",
          "type": "function"
        },
        "index": {
          "description": "Encode Word16 in little endian format",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "word16LE",
          "normalized": "Word-\u003eBuilder",
          "package": "bytestring",
          "partial": "LE",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:word16LE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "word32BE",
          "package": "bytestring",
          "signature": "Word32 -\u003e Builder",
          "source": "src/Data-ByteString-Builder.html#word32BE",
          "type": "function"
        },
        "index": {
          "description": "Encode Word32 in big endian format",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "word32BE",
          "normalized": "Word-\u003eBuilder",
          "package": "bytestring",
          "partial": "BE",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:word32BE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal encoding of a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e using the ASCII digits.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "word32Dec",
          "package": "bytestring",
          "signature": "Word32 -\u003e Builder",
          "source": "src/Data-ByteString-Builder-ASCII.html#word32Dec",
          "type": "function"
        },
        "index": {
          "description": "Decimal encoding of Word32 using the ASCII digits",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "word32Dec",
          "normalized": "Word-\u003eBuilder",
          "package": "bytestring",
          "partial": "Dec",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:word32Dec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShortest hexadecimal encoding of a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e using lower-case characters.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "word32Hex",
          "package": "bytestring",
          "signature": "Word32 -\u003e Builder",
          "source": "src/Data-ByteString-Builder-ASCII.html#word32Hex",
          "type": "function"
        },
        "index": {
          "description": "Shortest hexadecimal encoding of Word32 using lower-case characters",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "word32Hex",
          "normalized": "Word-\u003eBuilder",
          "package": "bytestring",
          "partial": "Hex",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:word32Hex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e using 8 nibbles.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "word32HexFixed",
          "package": "bytestring",
          "signature": "Word32 -\u003e Builder",
          "source": "src/Data-ByteString-Builder-ASCII.html#word32HexFixed",
          "type": "function"
        },
        "index": {
          "description": "Encode Word32 using nibbles",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "word32HexFixed",
          "normalized": "Word-\u003eBuilder",
          "package": "bytestring",
          "partial": "Hex Fixed",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:word32HexFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "word32LE",
          "package": "bytestring",
          "signature": "Word32 -\u003e Builder",
          "source": "src/Data-ByteString-Builder.html#word32LE",
          "type": "function"
        },
        "index": {
          "description": "Encode Word32 in little endian format",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "word32LE",
          "normalized": "Word-\u003eBuilder",
          "package": "bytestring",
          "partial": "LE",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:word32LE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "word64BE",
          "package": "bytestring",
          "signature": "Word64 -\u003e Builder",
          "source": "src/Data-ByteString-Builder.html#word64BE",
          "type": "function"
        },
        "index": {
          "description": "Encode Word64 in big endian format",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "word64BE",
          "normalized": "Word-\u003eBuilder",
          "package": "bytestring",
          "partial": "BE",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:word64BE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal encoding of a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e using the ASCII digits.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "word64Dec",
          "package": "bytestring",
          "signature": "Word64 -\u003e Builder",
          "source": "src/Data-ByteString-Builder-ASCII.html#word64Dec",
          "type": "function"
        },
        "index": {
          "description": "Decimal encoding of Word64 using the ASCII digits",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "word64Dec",
          "normalized": "Word-\u003eBuilder",
          "package": "bytestring",
          "partial": "Dec",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:word64Dec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShortest hexadecimal encoding of a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e using lower-case characters.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "word64Hex",
          "package": "bytestring",
          "signature": "Word64 -\u003e Builder",
          "source": "src/Data-ByteString-Builder-ASCII.html#word64Hex",
          "type": "function"
        },
        "index": {
          "description": "Shortest hexadecimal encoding of Word64 using lower-case characters",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "word64Hex",
          "normalized": "Word-\u003eBuilder",
          "package": "bytestring",
          "partial": "Hex",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:word64Hex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e using 16 nibbles.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "word64HexFixed",
          "package": "bytestring",
          "signature": "Word64 -\u003e Builder",
          "source": "src/Data-ByteString-Builder-ASCII.html#word64HexFixed",
          "type": "function"
        },
        "index": {
          "description": "Encode Word64 using nibbles",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "word64HexFixed",
          "normalized": "Word-\u003eBuilder",
          "package": "bytestring",
          "partial": "Hex Fixed",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:word64HexFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "word64LE",
          "package": "bytestring",
          "signature": "Word64 -\u003e Builder",
          "source": "src/Data-ByteString-Builder.html#word64LE",
          "type": "function"
        },
        "index": {
          "description": "Encode Word64 in little endian format",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "word64LE",
          "normalized": "Word-\u003eBuilder",
          "package": "bytestring",
          "partial": "LE",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:word64LE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a single unsigned byte as-is.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "word8",
          "package": "bytestring",
          "signature": "Word8 -\u003e Builder",
          "source": "src/Data-ByteString-Builder.html#word8",
          "type": "function"
        },
        "index": {
          "description": "Encode single unsigned byte as-is",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "word8",
          "normalized": "Word-\u003eBuilder",
          "package": "bytestring",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:word8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal encoding of a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e using the ASCII digits.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "word8Dec",
          "package": "bytestring",
          "signature": "Word8 -\u003e Builder",
          "source": "src/Data-ByteString-Builder-ASCII.html#word8Dec",
          "type": "function"
        },
        "index": {
          "description": "Decimal encoding of Word8 using the ASCII digits",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "word8Dec",
          "normalized": "Word-\u003eBuilder",
          "package": "bytestring",
          "partial": "Dec",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:word8Dec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShortest hexadecimal encoding of a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e using lower-case characters.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "word8Hex",
          "package": "bytestring",
          "signature": "Word8 -\u003e Builder",
          "source": "src/Data-ByteString-Builder-ASCII.html#word8Hex",
          "type": "function"
        },
        "index": {
          "description": "Shortest hexadecimal encoding of Word8 using lower-case characters",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "word8Hex",
          "normalized": "Word-\u003eBuilder",
          "package": "bytestring",
          "partial": "Hex",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:word8Hex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e using 2 nibbles (hexadecimal digits).\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "word8HexFixed",
          "package": "bytestring",
          "signature": "Word8 -\u003e Builder",
          "source": "src/Data-ByteString-Builder-ASCII.html#word8HexFixed",
          "type": "function"
        },
        "index": {
          "description": "Encode Word8 using nibbles hexadecimal digits",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "word8HexFixed",
          "normalized": "Word-\u003eBuilder",
          "package": "bytestring",
          "partial": "Hex Fixed",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:word8HexFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimal encoding of a \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e using the ASCII digits.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "wordDec",
          "package": "bytestring",
          "signature": "Word -\u003e Builder",
          "source": "src/Data-ByteString-Builder-ASCII.html#wordDec",
          "type": "function"
        },
        "index": {
          "description": "Decimal encoding of Word using the ASCII digits",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "wordDec",
          "normalized": "Word-\u003eBuilder",
          "package": "bytestring",
          "partial": "Dec",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:wordDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShortest hexadecimal encoding of a \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e using lower-case characters.\n\u003c/p\u003e",
          "module": "Data.ByteString.Builder",
          "name": "wordHex",
          "package": "bytestring",
          "signature": "Word -\u003e Builder",
          "source": "src/Data-ByteString-Builder-ASCII.html#wordHex",
          "type": "function"
        },
        "index": {
          "description": "Shortest hexadecimal encoding of Word using lower-case characters",
          "hierarchy": "Data ByteString Builder",
          "module": "Data.ByteString.Builder",
          "name": "wordHex",
          "normalized": "Word-\u003eBuilder",
          "package": "bytestring",
          "partial": "Hex",
          "signature": "Word-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Builder.html#v:wordHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eManipulate \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e operations. All Chars will be\n truncated to 8 bits. It can be expected that these functions will run\n at identical speeds to their \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e equivalents in \u003ca\u003eData.ByteString\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eMore specifically these byte strings are taken to be in the\n subset of Unicode covered by code points 0-255. This covers\n Unicode Basic Latin, Latin-1 Supplement and C0+C1 Controls.\n\u003c/p\u003e\u003cp\u003eSee: \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://www.unicode.org/charts/\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.unicode.org/charts/PDF/U0000.pdf\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.unicode.org/charts/PDF/U0080.pdf\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis module is intended to be imported \u003ccode\u003equalified\u003c/code\u003e, to avoid name\n clashes with \u003ca\u003ePrelude\u003c/a\u003e functions.  eg.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.ByteString.Char8 as C\n\u003c/pre\u003e\u003cp\u003eThe Char8 interface to bytestrings provides an instance of IsString\n for the ByteString type, enabling you to use string literals, and\n have them implicitly packed to ByteStrings.\n Use \u003ccode\u003e{-# LANGUAGE OverloadedStrings #-}\u003c/code\u003e to enable this.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ByteString.Char8",
          "name": "Char8",
          "package": "bytestring",
          "source": "src/Data-ByteString-Char8.html",
          "type": "module"
        },
        "index": {
          "description": "Manipulate ByteString using Char operations All Chars will be truncated to bits It can be expected that these functions will run at identical speeds to their Word8 equivalents in Data.ByteString More specifically these byte strings are taken to be in the subset of Unicode covered by code points This covers Unicode Basic Latin Latin-1 Supplement and C0 C1 Controls See http www.unicode.org charts http www.unicode.org charts PDF U0000.pdf http www.unicode.org charts PDF U0080.pdf This module is intended to be imported qualified to avoid name clashes with Prelude functions eg import qualified Data.ByteString.Char8 as The Char8 interface to bytestrings provides an instance of IsString for the ByteString type enabling you to use string literals and have them implicitly packed to ByteStrings Use LANGUAGE OverloadedStrings to enable this",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "Char8",
          "package": "bytestring",
          "partial": "Char",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space-efficient representation of a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e vector, supporting many\n efficient operations.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e contains 8-bit bytes, or by using the operations from\n \u003ca\u003eData.ByteString.Char8\u003c/a\u003e it can be interpreted as containing 8-bit\n characters.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "ByteString",
          "package": "bytestring",
          "source": "src/Data-ByteString-Internal.html#ByteString",
          "type": "data"
        },
        "index": {
          "description": "space-efficient representation of Word8 vector supporting many efficient operations ByteString contains bit bytes or by using the operations from Data.ByteString.Char8 it can be interpreted as containing bit characters",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "ByteString",
          "package": "bytestring",
          "partial": "Byte String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#t:ByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplied to a predicate and a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e determines if\n all elements of the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e satisfy the predicate.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "all",
          "package": "bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e Bool",
          "source": "src/Data-ByteString-Char8.html#all",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and ByteString all determines if all elements of the ByteString satisfy the predicate",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "all",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003eBool",
          "package": "bytestring",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplied to a predicate and a ByteString, \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e determines if\n any element of the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e satisfies the predicate.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "any",
          "package": "bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e Bool",
          "source": "src/Data-ByteString-Char8.html#any",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and ByteString any determines if any element of the ByteString satisfies the predicate",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "any",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003eBool",
          "package": "bytestring",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Append two ByteStrings\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "append",
          "package": "bytestring",
          "signature": "ByteString -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString.html#append",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:append\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:append\"]"
        },
        "index": {
          "description": "Append two ByteStrings",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "append",
          "normalized": "ByteString-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "ByteString-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "appendFile",
          "package": "bytestring",
          "signature": "FilePath -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-ByteString-Char8.html#appendFile",
          "type": "function"
        },
        "index": {
          "description": "Append ByteString to file",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "appendFile",
          "normalized": "FilePath-\u003eByteString-\u003eIO()",
          "package": "bytestring",
          "partial": "File",
          "signature": "FilePath-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e . p)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "break",
          "package": "bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-ByteString-Char8.html#break",
          "type": "function"
        },
        "index": {
          "description": "break is equivalent to span not",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "break",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "bytestring",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreakEnd\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e but from the end of the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003ebreakEnd p == spanEnd (not.p)\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "breakEnd",
          "package": "bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-ByteString-Char8.html#breakEnd",
          "type": "function"
        },
        "index": {
          "description": "breakEnd behaves like break but from the end of the ByteString breakEnd spanEnd not.p",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "breakEnd",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "bytestring",
          "partial": "End",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:breakEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreak a string on a substring, returning a pair of the part of the\n string prior to the match, and the rest of the string.\n\u003c/p\u003e\u003cp\u003eThe following relationships hold:\n\u003c/p\u003e\u003cpre\u003e break (== c) l == breakSubstring (singleton c) l\n\u003c/pre\u003e\u003cp\u003eand:\n\u003c/p\u003e\u003cpre\u003e findSubstring s l ==\n    if null s then Just 0\n              else case breakSubstring s l of\n                       (x,y) | null y    -\u003e Nothing\n                             | otherwise -\u003e Just (length x)\n\u003c/pre\u003e\u003cp\u003eFor example, to tokenise a string, dropping delimiters:\n\u003c/p\u003e\u003cpre\u003e tokenise x y = h : if null t then [] else tokenise x (drop (length x) t)\n     where (h,t) = breakSubstring x y\n\u003c/pre\u003e\u003cp\u003eTo skip to the first occurence of a string:\n\u003c/p\u003e\u003cpre\u003e snd (breakSubstring x y) \n\u003c/pre\u003e\u003cp\u003eTo take the parts of a string before a delimiter:\n\u003c/p\u003e\u003cpre\u003e fst (breakSubstring x y) \n\u003c/pre\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "breakSubstring",
          "package": "bytestring",
          "signature": "ByteString-\u003e ByteString-\u003e (ByteString, ByteString)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:breakSubstring\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:breakSubstring\"]"
        },
        "index": {
          "description": "Break string on substring returning pair of the part of the string prior to the match and the rest of the string The following relationships hold break breakSubstring singleton and findSubstring if null then Just else case breakSubstring of null Nothing otherwise Just length For example to tokenise string dropping delimiters tokenise if null then else tokenise drop length where breakSubstring To skip to the first occurence of string snd breakSubstring To take the parts of string before delimiter fst breakSubstring",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "breakSubstring",
          "normalized": "ByteString-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "bytestring",
          "partial": "Substring",
          "signature": "ByteString-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:breakSubstring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Concatenate a list of ByteStrings.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "concat",
          "package": "bytestring",
          "signature": "[ByteString] -\u003e ByteString",
          "source": "src/Data-ByteString.html#concat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:concat\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:concat\"]"
        },
        "index": {
          "description": "Concatenate list of ByteStrings",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "concat",
          "normalized": "[ByteString]-\u003eByteString",
          "package": "bytestring",
          "signature": "[ByteString]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and concatenate the results\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "concatMap",
          "package": "bytestring",
          "signature": "(Char -\u003e ByteString) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Char8.html#concatMap",
          "type": "function"
        },
        "index": {
          "description": "Map function over ByteString and concatenate the results",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "concatMap",
          "normalized": "(Char-\u003eByteString)-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "partial": "Map",
          "signature": "(Char-\u003eByteString)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e is analogous to (:) for lists, but of different\n complexity, as it requires a memcpy.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "cons",
          "package": "bytestring",
          "signature": "Char -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Char8.html#cons",
          "type": "function"
        },
        "index": {
          "description": "cons is analogous to for lists but of different complexity as it requires memcpy",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "cons",
          "normalized": "Char-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "Char-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Make a copy of the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e with its own storage. \n This is mainly useful to allow the rest of the data pointed\n to by the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to be garbage collected, for example\n if a large string has been read in, and only a small part of it \n is needed in the rest of the program.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "copy",
          "package": "bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-ByteString.html#copy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:copy\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:copy\"]"
        },
        "index": {
          "description": "Make copy of the ByteString with its own storage This is mainly useful to allow the rest of the data pointed to by the ByteString to be garbage collected for example if large string has been read in and only small part of it is needed in the rest of the program",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "copy",
          "normalized": "ByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecount returns the number of times its argument appears in the ByteString\n\u003c/p\u003e\u003cpre\u003e count = length . elemIndices\n\u003c/pre\u003e\u003cp\u003eAlso\n\u003c/p\u003e\u003cpre\u003e count '\\n' == length . lines\n\u003c/pre\u003e\u003cp\u003eBut more efficiently than using length on the intermediate list.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "count",
          "package": "bytestring",
          "signature": "Char -\u003e ByteString -\u003e Int",
          "source": "src/Data-ByteString-Char8.html#count",
          "type": "function"
        },
        "index": {
          "description": "count returns the number of times its argument appears in the ByteString count length elemIndices Also count length lines But more efficiently than using length on the intermediate list",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "count",
          "normalized": "Char-\u003eByteString-\u003eInt",
          "package": "bytestring",
          "signature": "Char-\u003eByteString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e returns the suffix of \u003ccode\u003exs\u003c/code\u003e after the first \u003ccode\u003en\u003c/code\u003e\n elements, or \u003ccode\u003e[]\u003c/code\u003e if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "drop",
          "package": "bytestring",
          "signature": "Int -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString.html#drop",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:drop\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:drop\"]"
        },
        "index": {
          "description": "drop xs returns the suffix of xs after the first elements or if length xs",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "drop",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e returns the suffix remaining after \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "dropWhile",
          "package": "bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Char8.html#dropWhile",
          "type": "function"
        },
        "index": {
          "description": "dropWhile xs returns the suffix remaining after takeWhile xs",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "dropWhile",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e membership predicate. This\n implementation uses \u003ccode\u003ememchr(3)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "elem",
          "package": "bytestring",
          "signature": "Char -\u003e ByteString -\u003e Bool",
          "source": "src/Data-ByteString-Char8.html#elem",
          "type": "function"
        },
        "index": {
          "description": "elem is the ByteString membership predicate This implementation uses memchr",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "elem",
          "normalized": "Char-\u003eByteString-\u003eBool",
          "package": "bytestring",
          "signature": "Char-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e function returns the index of the first\n element in the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e which is equal (by memchr) to the\n query element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "elemIndex",
          "package": "bytestring",
          "signature": "Char -\u003e ByteString -\u003e Maybe Int",
          "source": "src/Data-ByteString-Char8.html#elemIndex",
          "type": "function"
        },
        "index": {
          "description": "The elemIndex function returns the index of the first element in the given ByteString which is equal by memchr to the query element or Nothing if there is no such element",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "elemIndex",
          "normalized": "Char-\u003eByteString-\u003eMaybe Int",
          "package": "bytestring",
          "partial": "Index",
          "signature": "Char-\u003eByteString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndexEnd\u003c/a\u003e\u003c/code\u003e function returns the last index of the\n element in the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e which is equal to the query\n element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element. The following\n holds:\n\u003c/p\u003e\u003cpre\u003e elemIndexEnd c xs == \n (-) (length xs - 1) `fmap` elemIndex c (reverse xs)\n\u003c/pre\u003e",
          "module": "Data.ByteString.Char8",
          "name": "elemIndexEnd",
          "package": "bytestring",
          "signature": "Char -\u003e ByteString -\u003e Maybe Int",
          "source": "src/Data-ByteString-Char8.html#elemIndexEnd",
          "type": "function"
        },
        "index": {
          "description": "The elemIndexEnd function returns the last index of the element in the given ByteString which is equal to the query element or Nothing if there is no such element The following holds elemIndexEnd xs length xs fmap elemIndex reverse xs",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "elemIndexEnd",
          "normalized": "Char-\u003eByteString-\u003eMaybe Int",
          "package": "bytestring",
          "partial": "Index End",
          "signature": "Char-\u003eByteString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:elemIndexEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e, by returning\n the indices of all elements equal to the query element, in ascending order.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "elemIndices",
          "package": "bytestring",
          "signature": "Char -\u003e ByteString -\u003e [Int]",
          "source": "src/Data-ByteString-Char8.html#elemIndices",
          "type": "function"
        },
        "index": {
          "description": "The elemIndices function extends elemIndex by returning the indices of all elements equal to the query element in ascending order",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "elemIndices",
          "normalized": "Char-\u003eByteString-\u003e[Int]",
          "package": "bytestring",
          "partial": "Indices",
          "signature": "Char-\u003eByteString-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:elemIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e The empty \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "empty",
          "package": "bytestring",
          "signature": "ByteString",
          "source": "src/Data-ByteString.html#empty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:empty\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:empty\"]"
        },
        "index": {
          "description": "The empty ByteString",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "empty",
          "package": "bytestring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e, applied to a predicate and a ByteString,\n returns a ByteString containing those characters that satisfy the\n predicate.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "filter",
          "package": "bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Char8.html#filter",
          "type": "function"
        },
        "index": {
          "description": "filter applied to predicate and ByteString returns ByteString containing those characters that satisfy the predicate",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "filter",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e function takes a predicate and a ByteString,\n and returns the first element in matching the predicate, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if there is no such element.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "find",
          "package": "bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e Maybe Char",
          "source": "src/Data-ByteString-Char8.html#find",
          "type": "function"
        },
        "index": {
          "description": "The find function takes predicate and ByteString and returns the first element in matching the predicate or Nothing if there is no such element",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "find",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003eMaybe Char",
          "package": "bytestring",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003eMaybe Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e function takes a predicate and a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and\n returns the index of the first element in the ByteString satisfying the predicate.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "findIndex",
          "package": "bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e Maybe Int",
          "source": "src/Data-ByteString-Char8.html#findIndex",
          "type": "function"
        },
        "index": {
          "description": "The findIndex function takes predicate and ByteString and returns the index of the first element in the ByteString satisfying the predicate",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "findIndex",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003eMaybe Int",
          "package": "bytestring",
          "partial": "Index",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e, by returning the\n indices of all elements satisfying the predicate, in ascending order.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "findIndices",
          "package": "bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e [Int]",
          "source": "src/Data-ByteString-Char8.html#findIndices",
          "type": "function"
        },
        "index": {
          "description": "The findIndices function extends findIndex by returning the indices of all elements satisfying the predicate in ascending order",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "findIndices",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003e[Int]",
          "package": "bytestring",
          "partial": "Indices",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:findIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: findSubstring is deprecated in favour of breakSubstring.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eGet the first index of a substring in another string,\n   or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the string is not found.\n   \u003ccode\u003efindSubstring p s\u003c/code\u003e is equivalent to \u003ccode\u003elistToMaybe (findSubstrings p s)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "findSubstring",
          "package": "bytestring",
          "signature": "ByteString-\u003e ByteString-\u003e Maybe Int",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:findSubstring\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:findSubstring\"]"
        },
        "index": {
          "description": "Deprecated findSubstring is deprecated in favour of breakSubstring Get the first index of substring in another string or Nothing if the string is not found findSubstring is equivalent to listToMaybe findSubstrings",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "findSubstring",
          "normalized": "ByteString-\u003eByteString-\u003eMaybe Int",
          "package": "bytestring",
          "partial": "Substring",
          "signature": "ByteString-\u003eByteString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:findSubstring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: findSubstrings is deprecated in favour of breakSubstring.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eFind the indexes of all (possibly overlapping) occurances of a\n substring in a string.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "findSubstrings",
          "package": "bytestring",
          "signature": "ByteString-\u003e ByteString-\u003e [Int]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:findSubstrings\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:findSubstrings\"]"
        },
        "index": {
          "description": "Deprecated findSubstrings is deprecated in favour of breakSubstring Find the indexes of all possibly overlapping occurances of substring in string",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "findSubstrings",
          "normalized": "ByteString-\u003eByteString-\u003e[Int]",
          "package": "bytestring",
          "partial": "Substrings",
          "signature": "ByteString-\u003eByteString-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:findSubstrings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value (typically\n the left-identity of the operator), and a ByteString, reduces the\n ByteString using the binary operator, from left to right.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "foldl",
          "package": "bytestring",
          "signature": "(a -\u003e Char -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-ByteString-Char8.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "foldl applied to binary operator starting value typically the left-identity of the operator and ByteString reduces the ByteString using the binary operator from left to right",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "foldl",
          "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "bytestring",
          "signature": "(a-\u003eChar-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'foldl\\'' is like foldl, but strict in the accumulator.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "foldl'",
          "package": "bytestring",
          "signature": "(a -\u003e Char -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-ByteString-Char8.html#foldl%27",
          "type": "function"
        },
        "index": {
          "description": "foldl is like foldl but strict in the accumulator",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "foldl'",
          "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "bytestring",
          "signature": "(a-\u003eChar-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e that has no starting value\n argument, and thus must be applied to non-empty \u003ccode\u003eByteStrings\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "foldl1",
          "package": "bytestring",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e ByteString -\u003e Char",
          "source": "src/Data-ByteString-Char8.html#foldl1",
          "type": "function"
        },
        "index": {
          "description": "foldl1 is variant of foldl that has no starting value argument and thus must be applied to non-empty ByteStrings",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "foldl1",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eChar",
          "package": "bytestring",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strict version of \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "foldl1'",
          "package": "bytestring",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e ByteString -\u003e Char",
          "source": "src/Data-ByteString-Char8.html#foldl1%27",
          "type": "function"
        },
        "index": {
          "description": "strict version of foldl1",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "foldl1'",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eChar",
          "package": "bytestring",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:foldl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value\n (typically the right-identity of the operator), and a packed string,\n reduces the packed string using the binary operator, from right to left.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "foldr",
          "package": "bytestring",
          "signature": "(Char -\u003e a -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-ByteString-Char8.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "foldr applied to binary operator starting value typically the right-identity of the operator and packed string reduces the packed string using the binary operator from right to left",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "foldr",
          "normalized": "(Char-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "bytestring",
          "signature": "(Char-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'foldr\\'' is a strict variant of foldr\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "foldr'",
          "package": "bytestring",
          "signature": "(Char -\u003e a -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-ByteString-Char8.html#foldr%27",
          "type": "function"
        },
        "index": {
          "description": "foldr is strict variant of foldr",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "foldr'",
          "normalized": "(Char-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "bytestring",
          "signature": "(Char-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:foldr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e that has no starting value argument,\n and thus must be applied to non-empty \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "foldr1",
          "package": "bytestring",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e ByteString -\u003e Char",
          "source": "src/Data-ByteString-Char8.html#foldr1",
          "type": "function"
        },
        "index": {
          "description": "foldr1 is variant of foldr that has no starting value argument and thus must be applied to non-empty ByteString",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "foldr1",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eChar",
          "package": "bytestring",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strict variant of foldr1\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "foldr1'",
          "package": "bytestring",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e ByteString -\u003e Char",
          "source": "src/Data-ByteString-Char8.html#foldr1%27",
          "type": "function"
        },
        "index": {
          "description": "strict variant of foldr1",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "foldr1'",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eChar",
          "package": "bytestring",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:foldr1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egetContents. Read stdin strictly. Equivalent to hGetContents stdin\n The \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e is closed after the contents have been read.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "getContents",
          "package": "bytestring",
          "signature": "IO ByteString",
          "source": "src/Data-ByteString.html#getContents",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:getContents\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:getContents\"]"
        },
        "index": {
          "description": "getContents Read stdin strictly Equivalent to hGetContents stdin The Handle is closed after the contents have been read",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "getContents",
          "package": "bytestring",
          "partial": "Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:getContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a line from stdin.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "getLine",
          "package": "bytestring",
          "signature": "IO ByteString",
          "source": "src/Data-ByteString.html#getLine",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:getLine\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:getLine\"]"
        },
        "index": {
          "description": "Read line from stdin",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "getLine",
          "package": "bytestring",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:getLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e function takes a ByteString and returns a list of\n ByteStrings such that the concatenation of the result is equal to the\n argument.  Moreover, each sublist in the result contains only equal\n elements.  For example,\n\u003c/p\u003e\u003cpre\u003e group \"Mississippi\" = [\"M\",\"i\",\"ss\",\"i\",\"ss\",\"i\",\"pp\",\"i\"]\n\u003c/pre\u003e\u003cp\u003eIt is a special case of \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to\n supply their own equality test. It is about 40% faster than \n \u003cem\u003egroupBy (==)\u003c/em\u003e\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "group",
          "package": "bytestring",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Data-ByteString.html#group",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:group\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:group\"]"
        },
        "index": {
          "description": "The group function takes ByteString and returns list of ByteStrings such that the concatenation of the result is equal to the argument Moreover each sublist in the result contains only equal elements For example group Mississippi ss ss pp It is special case of groupBy which allows the programmer to supply their own equality test It is about faster than groupBy",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "group",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "bytestring",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "groupBy",
          "package": "bytestring",
          "signature": "(Char -\u003e Char -\u003e Bool) -\u003e ByteString -\u003e [ByteString]",
          "source": "src/Data-ByteString-Char8.html#groupBy",
          "type": "function"
        },
        "index": {
          "description": "The groupBy function is the non-overloaded version of group",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "groupBy",
          "normalized": "(Char-\u003eChar-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "package": "bytestring",
          "partial": "By",
          "signature": "(Char-\u003eChar-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:groupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e directly from the specified \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.  This\n is far more efficient than reading the characters into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n and then using \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e. First argument is the Handle to read from, \n and the second is the number of bytes to read. It returns the bytes\n read, up to n, or \u003ccode\u003e\u003ca\u003enull\u003c/a\u003e\u003c/code\u003e if EOF has been reached.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e is implemented in terms of \u003ccode\u003e\u003ca\u003ehGetBuf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the handle is a pipe or socket, and the writing end\n is closed, \u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e will behave as if EOF was reached.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "hGet",
          "package": "bytestring",
          "signature": "Handle -\u003e Int -\u003e IO ByteString",
          "source": "src/Data-ByteString.html#hGet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:hGet\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:hGet\"]"
        },
        "index": {
          "description": "Read ByteString directly from the specified Handle This is far more efficient than reading the characters into String and then using pack First argument is the Handle to read from and the second is the number of bytes to read It returns the bytes read up to or null if EOF has been reached hGet is implemented in terms of hGetBuf If the handle is pipe or socket and the writing end is closed hGet will behave as if EOF was reached",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "hGet",
          "normalized": "Handle-\u003eInt-\u003eIO ByteString",
          "package": "bytestring",
          "partial": "Get",
          "signature": "Handle-\u003eInt-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:hGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead entire handle contents strictly into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function reads chunks at a time, doubling the chunksize on each\n read. The final buffer is then realloced to the appropriate size. For\n files \u003e half of available memory, this may lead to memory exhaustion.\n Consider using \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e in this case.\n\u003c/p\u003e\u003cp\u003eAs with \u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e, the string representation in the file is assumed to\n be ISO-8859-1.\n\u003c/p\u003e\u003cp\u003eThe Handle is closed once the contents have been read,\n or if an exception is thrown.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "hGetContents",
          "package": "bytestring",
          "signature": "Handle -\u003e IO ByteString",
          "source": "src/Data-ByteString.html#hGetContents",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:hGetContents\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:hGetContents\"]"
        },
        "index": {
          "description": "Read entire handle contents strictly into ByteString This function reads chunks at time doubling the chunksize on each read The final buffer is then realloced to the appropriate size For files half of available memory this may lead to memory exhaustion Consider using readFile in this case As with hGet the string representation in the file is assumed to be ISO-8859-1 The Handle is closed once the contents have been read or if an exception is thrown",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "hGetContents",
          "normalized": "Handle-\u003eIO ByteString",
          "package": "bytestring",
          "partial": "Get Contents",
          "signature": "Handle-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:hGetContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a line from a handle\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "hGetLine",
          "package": "bytestring",
          "signature": "Handle -\u003e IO ByteString",
          "source": "src/Data-ByteString.html#hGetLine",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:hGetLine\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:hGetLine\"]"
        },
        "index": {
          "description": "Read line from handle",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "hGetLine",
          "normalized": "Handle-\u003eIO ByteString",
          "package": "bytestring",
          "partial": "Get Line",
          "signature": "Handle-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:hGetLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehGetNonBlocking is similar to \u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e, except that it will never block\n waiting for data to become available, instead it returns only whatever data\n is available.  If there is no data available to be read, \u003ccode\u003e\u003ca\u003ehGetNonBlocking\u003c/a\u003e\u003c/code\u003e\n returns \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: on Windows and with Haskell implementation other than GHC, this\n function does not work correctly; it behaves identically to \u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "hGetNonBlocking",
          "package": "bytestring",
          "signature": "Handle -\u003e Int -\u003e IO ByteString",
          "source": "src/Data-ByteString.html#hGetNonBlocking",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:hGetNonBlocking\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:hGetNonBlocking\"]"
        },
        "index": {
          "description": "hGetNonBlocking is similar to hGet except that it will never block waiting for data to become available instead it returns only whatever data is available If there is no data available to be read hGetNonBlocking returns empty Note on Windows and with Haskell implementation other than GHC this function does not work correctly it behaves identically to hGet",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "hGetNonBlocking",
          "normalized": "Handle-\u003eInt-\u003eIO ByteString",
          "package": "bytestring",
          "partial": "Get Non Blocking",
          "signature": "Handle-\u003eInt-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:hGetNonBlocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e, except that a shorter \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e may be returned\n if there are not enough bytes immediately available to satisfy the\n whole request.  \u003ccode\u003e\u003ca\u003ehGetSome\u003c/a\u003e\u003c/code\u003e only blocks if there is no data\n available, and EOF has not yet been reached.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "hGetSome",
          "package": "bytestring",
          "signature": "Handle -\u003e Int -\u003e IO ByteString",
          "source": "src/Data-ByteString.html#hGetSome",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:hGetSome\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:hGetSome\"]"
        },
        "index": {
          "description": "Like hGet except that shorter ByteString may be returned if there are not enough bytes immediately available to satisfy the whole request hGetSome only blocks if there is no data available and EOF has not yet been reached",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "hGetSome",
          "normalized": "Handle-\u003eInt-\u003eIO ByteString",
          "package": "bytestring",
          "partial": "Get Some",
          "signature": "Handle-\u003eInt-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:hGetSome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutputs a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to the specified \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "hPut",
          "package": "bytestring",
          "signature": "Handle -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-ByteString.html#hPut",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:hPut\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:hPut\"]"
        },
        "index": {
          "description": "Outputs ByteString to the specified Handle",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "hPut",
          "normalized": "Handle-\u003eByteString-\u003eIO()",
          "package": "bytestring",
          "partial": "Put",
          "signature": "Handle-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:hPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003ehPut\u003c/a\u003e\u003c/code\u003e except that it will never block. Instead it returns\n any tail that did not get written. This tail may be \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e in the case that\n the whole string was written, or the whole original string if nothing was\n written. Partial writes are also possible.\n\u003c/p\u003e\u003cp\u003eNote: on Windows and with Haskell implementation other than GHC, this\n function does not work correctly; it behaves identically to \u003ccode\u003e\u003ca\u003ehPut\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "hPutNonBlocking",
          "package": "bytestring",
          "signature": "Handle -\u003e ByteString -\u003e IO ByteString",
          "source": "src/Data-ByteString.html#hPutNonBlocking",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:hPutNonBlocking\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:hPutNonBlocking\"]"
        },
        "index": {
          "description": "Similar to hPut except that it will never block Instead it returns any tail that did not get written This tail may be empty in the case that the whole string was written or the whole original string if nothing was written Partial writes are also possible Note on Windows and with Haskell implementation other than GHC this function does not work correctly it behaves identically to hPut",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "hPutNonBlocking",
          "normalized": "Handle-\u003eByteString-\u003eIO ByteString",
          "package": "bytestring",
          "partial": "Put Non Blocking",
          "signature": "Handle-\u003eByteString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:hPutNonBlocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA synonym for \u003ccode\u003ehPut\u003c/code\u003e, for compatibility \n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "hPutStr",
          "package": "bytestring",
          "signature": "Handle -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-ByteString.html#hPutStr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:hPutStr\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:hPutStr\"]"
        },
        "index": {
          "description": "synonym for hPut for compatibility",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "hPutStr",
          "normalized": "Handle-\u003eByteString-\u003eIO()",
          "package": "bytestring",
          "partial": "Put Str",
          "signature": "Handle-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:hPutStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a ByteString to a handle, appending a newline byte\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "hPutStrLn",
          "package": "bytestring",
          "signature": "Handle -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-ByteString-Char8.html#hPutStrLn",
          "type": "function"
        },
        "index": {
          "description": "Write ByteString to handle appending newline byte",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "hPutStrLn",
          "normalized": "Handle-\u003eByteString-\u003eIO()",
          "package": "bytestring",
          "partial": "Put Str Ln",
          "signature": "Handle-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:hPutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the first element of a ByteString, which must be non-empty.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "head",
          "package": "bytestring",
          "signature": "ByteString -\u003e Char",
          "source": "src/Data-ByteString-Char8.html#head",
          "type": "function"
        },
        "index": {
          "description": "Extract the first element of ByteString which must be non-empty",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "head",
          "normalized": "ByteString-\u003eChar",
          "package": "bytestring",
          "signature": "ByteString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e index (subscript) operator, starting from 0.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "index",
          "package": "bytestring",
          "signature": "ByteString -\u003e Int -\u003e Char",
          "source": "src/Data-ByteString-Char8.html#index",
          "type": "function"
        },
        "index": {
          "description": "ByteString index subscript operator starting from",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "index",
          "normalized": "ByteString-\u003eInt-\u003eChar",
          "package": "bytestring",
          "signature": "ByteString-\u003eInt-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Return all the elements of a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e except the last one.\n An exception will be thrown in the case of an empty ByteString.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "init",
          "package": "bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-ByteString.html#init",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:init\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:init\"]"
        },
        "index": {
          "description": "Return all the elements of ByteString except the last one An exception will be thrown in the case of an empty ByteString",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "init",
          "normalized": "ByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return all initial segments of the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, shortest first.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "inits",
          "package": "bytestring",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Data-ByteString.html#inits",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:inits\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:inits\"]"
        },
        "index": {
          "description": "Return all initial segments of the given ByteString shortest first",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "inits",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "bytestring",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:inits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe interact function takes a function of type \u003ccode\u003eByteString -\u003e ByteString\u003c/code\u003e\n as its argument. The entire input from the standard input device is passed\n to this function as its argument, and the resulting string is output on the\n standard output device.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "interact",
          "package": "bytestring",
          "signature": "(ByteString -\u003e ByteString) -\u003e IO ()",
          "source": "src/Data-ByteString.html#interact",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:interact\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:interact\"]"
        },
        "index": {
          "description": "The interact function takes function of type ByteString ByteString as its argument The entire input from the standard input device is passed to this function as its argument and the resulting string is output on the standard output device",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "interact",
          "normalized": "(ByteString-\u003eByteString)-\u003eIO()",
          "package": "bytestring",
          "signature": "(ByteString-\u003eByteString)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:interact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eintercalate\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and a list of\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es and concatenates the list after interspersing the first\n argument between each element of the list.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "intercalate",
          "package": "bytestring",
          "signature": "ByteString -\u003e [ByteString] -\u003e ByteString",
          "source": "src/Data-ByteString.html#intercalate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:intercalate\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:intercalate\"]"
        },
        "index": {
          "description": "The intercalate function takes ByteString and list of ByteString and concatenates the list after interspersing the first argument between each element of the list",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "intercalate",
          "normalized": "ByteString-\u003e[ByteString]-\u003eByteString",
          "package": "bytestring",
          "signature": "ByteString-\u003e[ByteString]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:intercalate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e function takes a Char and a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n and `intersperses' that Char between the elements of the\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.  It is analogous to the intersperse function on Lists.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "intersperse",
          "package": "bytestring",
          "signature": "Char -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Char8.html#intersperse",
          "type": "function"
        },
        "index": {
          "description": "The intersperse function takes Char and ByteString and intersperses that Char between the elements of the ByteString It is analogous to the intersperse function on Lists",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "intersperse",
          "normalized": "Char-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "Char-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether one string is a substring of another. \u003ccode\u003eisInfixOf\n p s\u003c/code\u003e is equivalent to \u003ccode\u003enot (null (findSubstrings p s))\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "isInfixOf",
          "package": "bytestring",
          "signature": "ByteString -\u003e ByteString -\u003e Bool",
          "source": "src/Data-ByteString.html#isInfixOf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:isInfixOf\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:isInfixOf\"]"
        },
        "index": {
          "description": "Check whether one string is substring of another isInfixOf is equivalent to not null findSubstrings",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "isInfixOf",
          "normalized": "ByteString-\u003eByteString-\u003eBool",
          "package": "bytestring",
          "partial": "Infix Of",
          "signature": "ByteString-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:isInfixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eisPrefixOf\u003c/a\u003e\u003c/code\u003e function takes two ByteStrings and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n iff the first is a prefix of the second.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "isPrefixOf",
          "package": "bytestring",
          "signature": "ByteString -\u003e ByteString -\u003e Bool",
          "source": "src/Data-ByteString.html#isPrefixOf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:isPrefixOf\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:isPrefixOf\"]"
        },
        "index": {
          "description": "The isPrefixOf function takes two ByteStrings and returns True iff the first is prefix of the second",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "isPrefixOf",
          "normalized": "ByteString-\u003eByteString-\u003eBool",
          "package": "bytestring",
          "partial": "Prefix Of",
          "signature": "ByteString-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:isPrefixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eisSuffixOf\u003c/a\u003e\u003c/code\u003e function takes two ByteStrings and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n iff the first is a suffix of the second.\n\u003c/p\u003e\u003cp\u003eThe following holds:\n\u003c/p\u003e\u003cpre\u003e isSuffixOf x y == reverse x `isPrefixOf` reverse y\n\u003c/pre\u003e\u003cp\u003eHowever, the real implemenation uses memcmp to compare the end of the\n string only, with no reverse required..\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "isSuffixOf",
          "package": "bytestring",
          "signature": "ByteString -\u003e ByteString -\u003e Bool",
          "source": "src/Data-ByteString.html#isSuffixOf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:isSuffixOf\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:isSuffixOf\"]"
        },
        "index": {
          "description": "The isSuffixOf function takes two ByteStrings and returns True iff the first is suffix of the second The following holds isSuffixOf reverse isPrefixOf reverse However the real implemenation uses memcmp to compare the end of the string only with no reverse required",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "isSuffixOf",
          "normalized": "ByteString-\u003eByteString-\u003eBool",
          "package": "bytestring",
          "partial": "Suffix Of",
          "signature": "ByteString-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:isSuffixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the last element of a packed string, which must be non-empty.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "last",
          "package": "bytestring",
          "signature": "ByteString -\u003e Char",
          "source": "src/Data-ByteString-Char8.html#last",
          "type": "function"
        },
        "index": {
          "description": "Extract the last element of packed string which must be non-empty",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "last",
          "normalized": "ByteString-\u003eChar",
          "package": "bytestring",
          "signature": "ByteString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e returns the length of a ByteString as an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "length",
          "package": "bytestring",
          "signature": "ByteString -\u003e Int",
          "source": "src/Data-ByteString.html#length",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:length\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:length\"]"
        },
        "index": {
          "description": "length returns the length of ByteString as an Int",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "length",
          "normalized": "ByteString-\u003eInt",
          "package": "bytestring",
          "signature": "ByteString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e breaks a ByteString up into a list of ByteStrings at\n newline Chars. The resulting strings do not contain newlines.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "lines",
          "package": "bytestring",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Data-ByteString-Char8.html#lines",
          "type": "function"
        },
        "index": {
          "description": "lines breaks ByteString up into list of ByteStrings at newline Chars The resulting strings do not contain newlines",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "lines",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "bytestring",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef xs\u003c/code\u003e is the ByteString obtained by applying \u003ccode\u003ef\u003c/code\u003e to each element of \u003ccode\u003exs\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "map",
          "package": "bytestring",
          "signature": "(Char -\u003e Char) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Char8.html#map",
          "type": "function"
        },
        "index": {
          "description": "map xs is the ByteString obtained by applying to each element of xs",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "map",
          "normalized": "(Char-\u003eChar)-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "(Char-\u003eChar)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumL\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a ByteString,\n passing an accumulating parameter from left to right, and returning a\n final value of this accumulator together with the new list.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "mapAccumL",
          "package": "bytestring",
          "signature": "(acc -\u003e Char -\u003e (acc, Char)) -\u003e acc -\u003e ByteString -\u003e (acc, ByteString)",
          "source": "src/Data-ByteString-Char8.html#mapAccumL",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumL function behaves like combination of map and foldl it applies function to each element of ByteString passing an accumulating parameter from left to right and returning final value of this accumulator together with the new list",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "mapAccumL",
          "normalized": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003eByteString-\u003e(a,ByteString)",
          "package": "bytestring",
          "partial": "Accum",
          "signature": "(acc-\u003eChar-\u003e(acc,Char))-\u003eacc-\u003eByteString-\u003e(acc,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:mapAccumL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumR\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a ByteString,\n passing an accumulating parameter from right to left, and returning a\n final value of this accumulator together with the new ByteString.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "mapAccumR",
          "package": "bytestring",
          "signature": "(acc -\u003e Char -\u003e (acc, Char)) -\u003e acc -\u003e ByteString -\u003e (acc, ByteString)",
          "source": "src/Data-ByteString-Char8.html#mapAccumR",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumR function behaves like combination of map and foldr it applies function to each element of ByteString passing an accumulating parameter from right to left and returning final value of this accumulator together with the new ByteString",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "mapAccumR",
          "normalized": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003eByteString-\u003e(a,ByteString)",
          "package": "bytestring",
          "partial": "Accum",
          "signature": "(acc-\u003eChar-\u003e(acc,Char))-\u003eacc-\u003eByteString-\u003e(acc,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:mapAccumR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e returns the maximum value from a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "maximum",
          "package": "bytestring",
          "signature": "ByteString -\u003e Char",
          "source": "src/Data-ByteString-Char8.html#maximum",
          "type": "function"
        },
        "index": {
          "description": "maximum returns the maximum value from ByteString",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "maximum",
          "normalized": "ByteString-\u003eChar",
          "package": "bytestring",
          "signature": "ByteString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e returns the minimum value from a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "minimum",
          "package": "bytestring",
          "signature": "ByteString -\u003e Char",
          "source": "src/Data-ByteString-Char8.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "minimum returns the minimum value from ByteString",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "minimum",
          "normalized": "ByteString-\u003eChar",
          "package": "bytestring",
          "signature": "ByteString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003enotElem\u003c/a\u003e\u003c/code\u003e is the inverse of \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "notElem",
          "package": "bytestring",
          "signature": "Char -\u003e ByteString -\u003e Bool",
          "source": "src/Data-ByteString-Char8.html#notElem",
          "type": "function"
        },
        "index": {
          "description": "notElem is the inverse of elem",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "notElem",
          "normalized": "Char-\u003eByteString-\u003eBool",
          "package": "bytestring",
          "partial": "Elem",
          "signature": "Char-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Test whether a ByteString is empty.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "null",
          "package": "bytestring",
          "signature": "ByteString -\u003e Bool",
          "source": "src/Data-ByteString.html#null",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:null\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:null\"]"
        },
        "index": {
          "description": "Test whether ByteString is empty",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "null",
          "normalized": "ByteString-\u003eBool",
          "package": "bytestring",
          "signature": "ByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eFor applications with large numbers of string literals, pack can be a\n bottleneck.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "pack",
          "package": "bytestring",
          "signature": "String -\u003e ByteString",
          "source": "src/Data-ByteString-Char8.html#pack",
          "type": "function"
        },
        "index": {
          "description": "Convert String into ByteString For applications with large numbers of string literals pack can be bottleneck",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "pack",
          "normalized": "String-\u003eByteString",
          "package": "bytestring",
          "signature": "String-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n).\u003c/em\u003e Construct a new \u003ccode\u003eByteString\u003c/code\u003e from a \u003ccode\u003eCString\u003c/code\u003e. The\n resulting \u003ccode\u003eByteString\u003c/code\u003e is an immutable copy of the original\n \u003ccode\u003eCString\u003c/code\u003e, and is managed on the Haskell heap. The original\n \u003ccode\u003eCString\u003c/code\u003e must be null terminated.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "packCString",
          "package": "bytestring",
          "signature": "CString -\u003e IO ByteString",
          "source": "src/Data-ByteString.html#packCString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:packCString\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:packCString\"]"
        },
        "index": {
          "description": "Construct new ByteString from CString The resulting ByteString is an immutable copy of the original CString and is managed on the Haskell heap The original CString must be null terminated",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "packCString",
          "normalized": "CString-\u003eIO ByteString",
          "package": "bytestring",
          "partial": "CString",
          "signature": "CString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:packCString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n).\u003c/em\u003e Construct a new \u003ccode\u003eByteString\u003c/code\u003e from a \u003ccode\u003eCStringLen\u003c/code\u003e. The\n resulting \u003ccode\u003eByteString\u003c/code\u003e is an immutable copy of the original \u003ccode\u003eCStringLen\u003c/code\u003e.\n The \u003ccode\u003eByteString\u003c/code\u003e is a normal Haskell value and will be managed on the\n Haskell heap.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "packCStringLen",
          "package": "bytestring",
          "signature": "CStringLen -\u003e IO ByteString",
          "source": "src/Data-ByteString.html#packCStringLen",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:packCStringLen\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:packCStringLen\"]"
        },
        "index": {
          "description": "Construct new ByteString from CStringLen The resulting ByteString is an immutable copy of the original CStringLen The ByteString is normal Haskell value and will be managed on the Haskell heap",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "packCStringLen",
          "normalized": "CStringLen-\u003eIO ByteString",
          "package": "bytestring",
          "partial": "CString Len",
          "signature": "CStringLen-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:packCStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a ByteString to stdout\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "putStr",
          "package": "bytestring",
          "signature": "ByteString -\u003e IO ()",
          "source": "src/Data-ByteString.html#putStr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:putStr\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:putStr\"]"
        },
        "index": {
          "description": "Write ByteString to stdout",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "putStr",
          "normalized": "ByteString-\u003eIO()",
          "package": "bytestring",
          "partial": "Str",
          "signature": "ByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:putStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a ByteString to stdout, appending a newline byte\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "putStrLn",
          "package": "bytestring",
          "signature": "ByteString -\u003e IO ()",
          "source": "src/Data-ByteString-Char8.html#putStrLn",
          "type": "function"
        },
        "index": {
          "description": "Write ByteString to stdout appending newline byte",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "putStrLn",
          "normalized": "ByteString-\u003eIO()",
          "package": "bytestring",
          "partial": "Str Ln",
          "signature": "ByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an entire file strictly into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.  This is far more\n efficient than reading the characters into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and then using\n \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e.  It also may be more efficient than opening the file and\n reading it using hGet.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "readFile",
          "package": "bytestring",
          "signature": "FilePath -\u003e IO ByteString",
          "source": "src/Data-ByteString-Char8.html#readFile",
          "type": "function"
        },
        "index": {
          "description": "Read an entire file strictly into ByteString This is far more efficient than reading the characters into String and then using pack It also may be more efficient than opening the file and reading it using hGet",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO ByteString",
          "package": "bytestring",
          "partial": "File",
          "signature": "FilePath-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereadInt reads an Int from the beginning of the ByteString.  If there is no\n integer at the beginning of the string, it returns Nothing, otherwise\n it just returns the int read, and the rest of the string.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "readInt",
          "package": "bytestring",
          "signature": "ByteString -\u003e Maybe (Int, ByteString)",
          "source": "src/Data-ByteString-Char8.html#readInt",
          "type": "function"
        },
        "index": {
          "description": "readInt reads an Int from the beginning of the ByteString If there is no integer at the beginning of the string it returns Nothing otherwise it just returns the int read and the rest of the string",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "readInt",
          "normalized": "ByteString-\u003eMaybe(Int,ByteString)",
          "package": "bytestring",
          "partial": "Int",
          "signature": "ByteString-\u003eMaybe(Int,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:readInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereadInteger reads an Integer from the beginning of the ByteString.  If\n there is no integer at the beginning of the string, it returns Nothing,\n otherwise it just returns the int read, and the rest of the string.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "readInteger",
          "package": "bytestring",
          "signature": "ByteString -\u003e Maybe (Integer, ByteString)",
          "source": "src/Data-ByteString-Char8.html#readInteger",
          "type": "function"
        },
        "index": {
          "description": "readInteger reads an Integer from the beginning of the ByteString If there is no integer at the beginning of the string it returns Nothing otherwise it just returns the int read and the rest of the string",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "readInteger",
          "normalized": "ByteString-\u003eMaybe(Integer,ByteString)",
          "package": "bytestring",
          "partial": "Integer",
          "signature": "ByteString-\u003eMaybe(Integer,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:readInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en x\u003c/code\u003e is a ByteString of length \u003ccode\u003en\u003c/code\u003e with \u003ccode\u003ex\u003c/code\u003e\n the value of every element. The following holds:\n\u003c/p\u003e\u003cpre\u003e replicate w c = unfoldr w (\\u -\u003e Just (u,u)) c\n\u003c/pre\u003e\u003cp\u003eThis implemenation uses \u003ccode\u003ememset(3)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "replicate",
          "package": "bytestring",
          "signature": "Int -\u003e Char -\u003e ByteString",
          "source": "src/Data-ByteString-Char8.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "replicate is ByteString of length with the value of every element The following holds replicate unfoldr Just This implemenation uses memset",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "replicate",
          "normalized": "Int-\u003eChar-\u003eByteString",
          "package": "bytestring",
          "signature": "Int-\u003eChar-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ereverse\u003c/a\u003e\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e efficiently returns the elements of \u003ccode\u003exs\u003c/code\u003e in reverse order.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "reverse",
          "package": "bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-ByteString.html#reverse",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:reverse\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:reverse\"]"
        },
        "index": {
          "description": "reverse xs efficiently returns the elements of xs in reverse order",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "reverse",
          "normalized": "ByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but returns a list of successive\n reduced values from the left:\n\u003c/p\u003e\u003cpre\u003e scanl f z [x1, x2, ...] == [z, z `f` x1, (z `f` x1) `f` x2, ...]\n\u003c/pre\u003e\u003cp\u003eNote that\n\u003c/p\u003e\u003cpre\u003e last (scanl f z xs) == foldl f z xs.\n\u003c/pre\u003e",
          "module": "Data.ByteString.Char8",
          "name": "scanl",
          "package": "bytestring",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e Char -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Char8.html#scanl",
          "type": "function"
        },
        "index": {
          "description": "scanl is similar to foldl but returns list of successive reduced values from the left scanl x1 x2 x1 x1 x2 Note that last scanl xs foldl xs",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "scanl",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:scanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e that has no starting value argument:\n\u003c/p\u003e\u003cpre\u003e scanl1 f [x1, x2, ...] == [x1, x1 `f` x2, ...]\n\u003c/pre\u003e",
          "module": "Data.ByteString.Char8",
          "name": "scanl1",
          "package": "bytestring",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Char8.html#scanl1",
          "type": "function"
        },
        "index": {
          "description": "scanl1 is variant of scanl that has no starting value argument scanl1 x1 x2 x1 x1 x2",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "scanl1",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:scanl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003escanr is the right-to-left dual of scanl.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "scanr",
          "package": "bytestring",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e Char -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Char8.html#scanr",
          "type": "function"
        },
        "index": {
          "description": "scanr is the right-to-left dual of scanl",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "scanr",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:scanr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e that has no starting value argument.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "scanr1",
          "package": "bytestring",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Char8.html#scanr1",
          "type": "function"
        },
        "index": {
          "description": "scanr1 is variant of scanr that has no starting value argument",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "scanr1",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:scanr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "singleton",
          "package": "bytestring",
          "signature": "Char -\u003e ByteString",
          "source": "src/Data-ByteString-Char8.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Convert Char into ByteString",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "singleton",
          "normalized": "Char-\u003eByteString",
          "package": "bytestring",
          "signature": "Char-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Append a Char to the end of a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. Similar to\n \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e, this function performs a memcpy.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "snoc",
          "package": "bytestring",
          "signature": "ByteString -\u003e Char -\u003e ByteString",
          "source": "src/Data-ByteString-Char8.html#snoc",
          "type": "function"
        },
        "index": {
          "description": "Append Char to the end of ByteString Similar to cons this function performs memcpy",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "snoc",
          "normalized": "ByteString-\u003eChar-\u003eByteString",
          "package": "bytestring",
          "signature": "ByteString-\u003eChar-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Sort a ByteString efficiently, using counting sort.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "sort",
          "package": "bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-ByteString.html#sort",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:sort\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:sort\"]"
        },
        "index": {
          "description": "Sort ByteString efficiently using counting sort",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "sort",
          "normalized": "ByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e breaks the ByteString into two segments. It is\n equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p xs, \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p xs)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "span",
          "package": "bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-ByteString-Char8.html#span",
          "type": "function"
        },
        "index": {
          "description": "span xs breaks the ByteString into two segments It is equivalent to takeWhile xs dropWhile xs",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "span",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "bytestring",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espanEnd\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e but from the end of the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n We have\n\u003c/p\u003e\u003cpre\u003e spanEnd (not.isSpace) \"x y z\" == (\"x y \",\"z\")\n\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003e spanEnd (not . isSpace) ps\n    == \n let (x,y) = span (not.isSpace) (reverse ps) in (reverse y, reverse x) \n\u003c/pre\u003e",
          "module": "Data.ByteString.Char8",
          "name": "spanEnd",
          "package": "bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-ByteString-Char8.html#spanEnd",
          "type": "function"
        },
        "index": {
          "description": "spanEnd behaves like span but from the end of the ByteString We have spanEnd not.isSpace and spanEnd not isSpace ps let span not.isSpace reverse ps in reverse reverse",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "spanEnd",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "bytestring",
          "partial": "End",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:spanEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Break a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into pieces separated by the byte\n argument, consuming the delimiter. I.e.\n\u003c/p\u003e\u003cpre\u003e split '\\n' \"a\\nb\\nd\\ne\" == [\"a\",\"b\",\"d\",\"e\"]\n split 'a'  \"aXaXaXa\"    == [\"\",\"X\",\"X\",\"X\",\"\"]\n split 'x'  \"x\"          == [\"\",\"\"]\n\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003e intercalate [c] . split c == id\n split == splitWith . (==)\n\u003c/pre\u003e\u003cp\u003eAs for all splitting functions in this library, this function does\n not copy the substrings, it just constructs new \u003ccode\u003eByteStrings\u003c/code\u003e that\n are slices of the original.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "split",
          "package": "bytestring",
          "signature": "Char -\u003e ByteString -\u003e [ByteString]",
          "source": "src/Data-ByteString-Char8.html#split",
          "type": "function"
        },
        "index": {
          "description": "Break ByteString into pieces separated by the byte argument consuming the delimiter I.e split nb nd ne split aXaXaXa split and intercalate split id split splitWith As for all splitting functions in this library this function does not copy the substrings it just constructs new ByteStrings that are slices of the original",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "split",
          "normalized": "Char-\u003eByteString-\u003e[ByteString]",
          "package": "bytestring",
          "signature": "Char-\u003eByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e n xs, \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e n xs)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "splitAt",
          "package": "bytestring",
          "signature": "Int -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-ByteString.html#splitAt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:splitAt\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:splitAt\"]"
        },
        "index": {
          "description": "splitAt xs is equivalent to take xs drop xs",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "splitAt",
          "normalized": "Int-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "bytestring",
          "partial": "At",
          "signature": "Int-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Splits a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into components delimited by\n separators, where the predicate returns True for a separator element.\n The resulting components do not contain the separators.  Two adjacent\n separators result in an empty component in the output.  eg.\n\u003c/p\u003e\u003cpre\u003e splitWith (=='a') \"aabbaca\" == [\"\",\"\",\"bb\",\"c\",\"\"]\n\u003c/pre\u003e",
          "module": "Data.ByteString.Char8",
          "name": "splitWith",
          "package": "bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e [ByteString]",
          "source": "src/Data-ByteString-Char8.html#splitWith",
          "type": "function"
        },
        "index": {
          "description": "Splits ByteString into components delimited by separators where the predicate returns True for separator element The resulting components do not contain the separators Two adjacent separators result in an empty component in the output eg splitWith aabbaca bb",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "splitWith",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "package": "bytestring",
          "partial": "With",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:splitWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the elements after the head of a ByteString, which must be non-empty.\n An exception will be thrown in the case of an empty ByteString.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "tail",
          "package": "bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-ByteString.html#tail",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:tail\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:tail\"]"
        },
        "index": {
          "description": "Extract the elements after the head of ByteString which must be non-empty An exception will be thrown in the case of an empty ByteString",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "tail",
          "normalized": "ByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return all final segments of the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, longest first.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "tails",
          "package": "bytestring",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Data-ByteString.html#tails",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:tails\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:tails\"]"
        },
        "index": {
          "description": "Return all final segments of the given ByteString longest first",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "tails",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "bytestring",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:tails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e, applied to a ByteString \u003ccode\u003exs\u003c/code\u003e, returns the prefix\n of \u003ccode\u003exs\u003c/code\u003e of length \u003ccode\u003en\u003c/code\u003e, or \u003ccode\u003exs\u003c/code\u003e itself if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "take",
          "package": "bytestring",
          "signature": "Int -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString.html#take",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:take\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:take\"]"
        },
        "index": {
          "description": "take applied to ByteString xs returns the prefix of xs of length or xs itself if length xs",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "take",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a ByteString \u003ccode\u003exs\u003c/code\u003e,\n returns the longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that\n satisfy \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "takeWhile",
          "package": "bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Char8.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "takeWhile applied to predicate and ByteString xs returns the longest prefix possibly empty of xs of elements that satisfy",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "takeWhile",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e function transposes the rows and columns of its\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e argument.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "transpose",
          "package": "bytestring",
          "signature": "[ByteString] -\u003e [ByteString]",
          "source": "src/Data-ByteString.html#transpose",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:transpose\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:transpose\"]"
        },
        "index": {
          "description": "The transpose function transposes the rows and columns of its ByteString argument",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "transpose",
          "normalized": "[ByteString]-\u003e[ByteString]",
          "package": "bytestring",
          "signature": "[ByteString]-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the head and tail of a ByteString, returning Nothing\n if it is empty.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "uncons",
          "package": "bytestring",
          "signature": "ByteString -\u003e Maybe (Char, ByteString)",
          "source": "src/Data-ByteString-Char8.html#uncons",
          "type": "function"
        },
        "index": {
          "description": "Extract the head and tail of ByteString returning Nothing if it is empty",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "uncons",
          "normalized": "ByteString-\u003eMaybe(Char,ByteString)",
          "package": "bytestring",
          "signature": "ByteString-\u003eMaybe(Char,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, where \u003cem\u003en\u003c/em\u003e is the length of the result.  The \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e \n function is analogous to the List 'unfoldr'.  \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e builds a \n ByteString from a seed value.  The function takes the element and \n returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if it is done producing the ByteString or returns \n \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(a,b)\u003c/code\u003e, in which case, \u003ccode\u003ea\u003c/code\u003e is the next character in the string, \n and \u003ccode\u003eb\u003c/code\u003e is the seed value for further production.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e unfoldr (\\x -\u003e if x \u003c= '9' then Just (x, succ x) else Nothing) '0' == \"0123456789\"\n\u003c/pre\u003e",
          "module": "Data.ByteString.Char8",
          "name": "unfoldr",
          "package": "bytestring",
          "signature": "(a -\u003e Maybe (Char, a)) -\u003e a -\u003e ByteString",
          "source": "src/Data-ByteString-Char8.html#unfoldr",
          "type": "function"
        },
        "index": {
          "description": "where is the length of the result The unfoldr function is analogous to the List unfoldr unfoldr builds ByteString from seed value The function takes the element and returns Nothing if it is done producing the ByteString or returns Just in which case is the next character in the string and is the seed value for further production Examples unfoldr if then Just succ else Nothing",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "unfoldr",
          "normalized": "(a-\u003eMaybe(Char,a))-\u003ea-\u003eByteString",
          "package": "bytestring",
          "signature": "(a-\u003eMaybe(Char,a))-\u003ea-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:unfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Like \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e builds a ByteString from a seed\n value.  However, the length of the result is limited by the first\n argument to \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e.  This function is more efficient than \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e\n when the maximum length of the result is known.\n\u003c/p\u003e\u003cp\u003eThe following equation relates \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e unfoldrN n f s == take n (unfoldr f s)\n\u003c/pre\u003e",
          "module": "Data.ByteString.Char8",
          "name": "unfoldrN",
          "package": "bytestring",
          "signature": "Int -\u003e (a -\u003e Maybe (Char, a)) -\u003e a -\u003e (ByteString, Maybe a)",
          "source": "src/Data-ByteString-Char8.html#unfoldrN",
          "type": "function"
        },
        "index": {
          "description": "Like unfoldr unfoldrN builds ByteString from seed value However the length of the result is limited by the first argument to unfoldrN This function is more efficient than unfoldr when the maximum length of the result is known The following equation relates unfoldrN and unfoldr unfoldrN take unfoldr",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "unfoldrN",
          "normalized": "Int-\u003e(a-\u003eMaybe(Char,a))-\u003ea-\u003e(ByteString,Maybe a)",
          "package": "bytestring",
          "signature": "Int-\u003e(a-\u003eMaybe(Char,a))-\u003ea-\u003e(ByteString,Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:unfoldrN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e is an inverse operation to \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e.  It joins lines,\n after appending a terminating newline to each.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "unlines",
          "package": "bytestring",
          "signature": "[ByteString] -\u003e ByteString",
          "source": "src/Data-ByteString-Char8.html#unlines",
          "type": "function"
        },
        "index": {
          "description": "unlines is an inverse operation to lines It joins lines after appending terminating newline to each",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "unlines",
          "normalized": "[ByteString]-\u003eByteString",
          "package": "bytestring",
          "signature": "[ByteString]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:unlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Converts a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "unpack",
          "package": "bytestring",
          "signature": "ByteString -\u003e [Char]",
          "source": "src/Data-ByteString-Char8.html#unpack",
          "type": "function"
        },
        "index": {
          "description": "Converts ByteString to String",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "unpack",
          "normalized": "ByteString-\u003e[Char]",
          "package": "bytestring",
          "signature": "ByteString-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:unpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the \u003ccode\u003e\u003ca\u003einit\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e of a ByteString, returning Nothing\n if it is empty.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "unsnoc",
          "package": "bytestring",
          "signature": "ByteString -\u003e Maybe (ByteString, Char)",
          "source": "src/Data-ByteString-Char8.html#unsnoc",
          "type": "function"
        },
        "index": {
          "description": "Extract the init and last of ByteString returning Nothing if it is empty",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "unsnoc",
          "normalized": "ByteString-\u003eMaybe(ByteString,Char)",
          "package": "bytestring",
          "signature": "ByteString-\u003eMaybe(ByteString,Char)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:unsnoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunwords\u003c/a\u003e\u003c/code\u003e function is analogous to the \u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e function, on words.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "unwords",
          "package": "bytestring",
          "signature": "[ByteString] -\u003e ByteString",
          "source": "src/Data-ByteString-Char8.html#unwords",
          "type": "function"
        },
        "index": {
          "description": "The unwords function is analogous to the unlines function on words",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "unwords",
          "normalized": "[ByteString]-\u003eByteString",
          "package": "bytestring",
          "signature": "[ByteString]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:unwords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e transforms a list of pairs of Chars into a pair of\n ByteStrings. Note that this performs two \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e operations.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "unzip",
          "package": "bytestring",
          "signature": "[(Char, Char)] -\u003e (ByteString, ByteString)",
          "source": "src/Data-ByteString-Char8.html#unzip",
          "type": "function"
        },
        "index": {
          "description": "unzip transforms list of pairs of Chars into pair of ByteStrings Note that this performs two pack operations",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "unzip",
          "normalized": "[(Char,Char)]-\u003e(ByteString,ByteString)",
          "package": "bytestring",
          "signature": "[(Char,Char)]-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n) construction\u003c/em\u003e Use a \u003ccode\u003eByteString\u003c/code\u003e with a function requiring a\n null-terminated \u003ccode\u003eCString\u003c/code\u003e.  The \u003ccode\u003eCString\u003c/code\u003e is a copy and will be freed\n automatically.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "useAsCString",
          "package": "bytestring",
          "signature": "ByteString -\u003e (CString -\u003e IO a) -\u003e IO a",
          "source": "src/Data-ByteString.html#useAsCString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:useAsCString\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:useAsCString\"]"
        },
        "index": {
          "description": "construction Use ByteString with function requiring null-terminated CString The CString is copy and will be freed automatically",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "useAsCString",
          "normalized": "ByteString-\u003e(CString-\u003eIO a)-\u003eIO a",
          "package": "bytestring",
          "partial": "As CString",
          "signature": "ByteString-\u003e(CString-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:useAsCString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n) construction\u003c/em\u003e Use a \u003ccode\u003eByteString\u003c/code\u003e with a function requiring a \u003ccode\u003eCStringLen\u003c/code\u003e.\n As for \u003ccode\u003euseAsCString\u003c/code\u003e this function makes a copy of the original \u003ccode\u003eByteString\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Char8\",\"Data.ByteString\"]",
          "name": "useAsCStringLen",
          "package": "bytestring",
          "signature": "ByteString -\u003e (CStringLen -\u003e IO a) -\u003e IO a",
          "source": "src/Data-ByteString.html#useAsCStringLen",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:useAsCStringLen\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:useAsCStringLen\"]"
        },
        "index": {
          "description": "construction Use ByteString with function requiring CStringLen As for useAsCString this function makes copy of the original ByteString",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "useAsCStringLen",
          "normalized": "ByteString-\u003e(CStringLen-\u003eIO a)-\u003eIO a",
          "package": "bytestring",
          "partial": "As CString Len",
          "signature": "ByteString-\u003e(CStringLen-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:useAsCStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e breaks a ByteString up into a list of words, which\n were delimited by Chars representing white space.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "words",
          "package": "bytestring",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Data-ByteString-Char8.html#words",
          "type": "function"
        },
        "index": {
          "description": "words breaks ByteString up into list of words which were delimited by Chars representing white space",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "words",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "bytestring",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:words"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "writeFile",
          "package": "bytestring",
          "signature": "FilePath -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-ByteString-Char8.html#writeFile",
          "type": "function"
        },
        "index": {
          "description": "Write ByteString to file",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "writeFile",
          "normalized": "FilePath-\u003eByteString-\u003eIO()",
          "package": "bytestring",
          "partial": "File",
          "signature": "FilePath-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:writeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e takes two ByteStrings and returns a list of\n corresponding pairs of Chars. If one input ByteString is short,\n excess elements of the longer ByteString are discarded. This is\n equivalent to a pair of \u003ccode\u003e\u003ca\u003eunpack\u003c/a\u003e\u003c/code\u003e operations, and so space\n usage may be large for multi-megabyte ByteStrings\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "zip",
          "package": "bytestring",
          "signature": "ByteString -\u003e ByteString -\u003e [(Char, Char)]",
          "source": "src/Data-ByteString-Char8.html#zip",
          "type": "function"
        },
        "index": {
          "description": "zip takes two ByteStrings and returns list of corresponding pairs of Chars If one input ByteString is short excess elements of the longer ByteString are discarded This is equivalent to pair of unpack operations and so space usage may be large for multi-megabyte ByteStrings",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "zip",
          "normalized": "ByteString-\u003eByteString-\u003e[(Char,Char)]",
          "package": "bytestring",
          "signature": "ByteString-\u003eByteString-\u003e[(Char,Char)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e generalises \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e by zipping with the function given as\n the first argument, instead of a tupling function.  For example,\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e (+)\u003c/code\u003e is applied to two ByteStrings to produce the list\n of corresponding sums.\n\u003c/p\u003e",
          "module": "Data.ByteString.Char8",
          "name": "zipWith",
          "package": "bytestring",
          "signature": "(Char -\u003e Char -\u003e a) -\u003e ByteString -\u003e ByteString -\u003e [a]",
          "source": "src/Data-ByteString-Char8.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "zipWith generalises zip by zipping with the function given as the first argument instead of tupling function For example zipWith is applied to two ByteStrings to produce the list of corresponding sums",
          "hierarchy": "Data ByteString Char8",
          "module": "Data.ByteString.Char8",
          "name": "zipWith",
          "normalized": "(Char-\u003eChar-\u003ea)-\u003eByteString-\u003eByteString-\u003e[a]",
          "package": "bytestring",
          "partial": "With",
          "signature": "(Char-\u003eChar-\u003ea)-\u003eByteString-\u003eByteString-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Char8.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWe decided to rename the Builder modules. Sorry about that.\n\u003c/p\u003e\u003cp\u003eIn additon, the ASCII module has been merged into the main\n \u003ca\u003eData.ByteString.Builder\u003c/a\u003e module.\n\u003c/p\u003e\u003cp\u003eThe old names will hang about for at least once release cycle before we\n deprecate them and then later remove them.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ByteString.Lazy.Builder.ASCII",
          "name": "ASCII",
          "package": "bytestring",
          "source": "src/Data-ByteString-Lazy-Builder-ASCII.html",
          "type": "module"
        },
        "index": {
          "description": "We decided to rename the Builder modules Sorry about that In additon the ASCII module has been merged into the main Data.ByteString.Builder module The old names will hang about for at least once release cycle before we deprecate them and then later remove them",
          "hierarchy": "Data ByteString Lazy Builder ASCII",
          "module": "Data.ByteString.Lazy.Builder.ASCII",
          "name": "ASCII",
          "package": "bytestring",
          "partial": "ASCII",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Builder-ASCII.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ByteString.Lazy.Builder.ASCII",
          "name": "byteStringHexFixed",
          "package": "bytestring",
          "signature": "ByteString -\u003e Builder",
          "source": "src/Data-ByteString-Lazy-Builder-ASCII.html#byteStringHexFixed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ByteString Lazy Builder ASCII",
          "module": "Data.ByteString.Lazy.Builder.ASCII",
          "name": "byteStringHexFixed",
          "normalized": "ByteString-\u003eBuilder",
          "package": "bytestring",
          "partial": "String Hex Fixed",
          "signature": "ByteString-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Builder-ASCII.html#v:byteStringHexFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ByteString.Lazy.Builder.ASCII",
          "name": "lazyByteStringHexFixed",
          "package": "bytestring",
          "signature": "ByteString -\u003e Builder",
          "source": "src/Data-ByteString-Lazy-Builder-ASCII.html#lazyByteStringHexFixed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ByteString Lazy Builder ASCII",
          "module": "Data.ByteString.Lazy.Builder.ASCII",
          "name": "lazyByteStringHexFixed",
          "normalized": "ByteString-\u003eBuilder",
          "package": "bytestring",
          "partial": "Byte String Hex Fixed",
          "signature": "ByteString-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Builder-ASCII.html#v:lazyByteStringHexFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWe decided to rename the Builder modules. Sorry about that.\n\u003c/p\u003e\u003cp\u003eThe old names will hang about for at least once release cycle before we\n deprecate them and then later remove them.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ByteString.Lazy.Builder.Extras",
          "name": "Extras",
          "package": "bytestring",
          "source": "src/Data-ByteString-Lazy-Builder-Extras.html",
          "type": "module"
        },
        "index": {
          "description": "We decided to rename the Builder modules Sorry about that The old names will hang about for at least once release cycle before we deprecate them and then later remove them",
          "hierarchy": "Data ByteString Lazy Builder Extras",
          "module": "Data.ByteString.Lazy.Builder.Extras",
          "name": "Extras",
          "package": "bytestring",
          "partial": "Extras",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Builder-Extras.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWe decided to rename the Builder modules. Sorry about that.\n\u003c/p\u003e\u003cp\u003eThe old names will hang about for at least once release cycle before we\n deprecate them and then later remove them.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ByteString.Lazy.Builder",
          "name": "Builder",
          "package": "bytestring",
          "source": "src/Data-ByteString-Lazy-Builder.html",
          "type": "module"
        },
        "index": {
          "description": "We decided to rename the Builder modules Sorry about that The old names will hang about for at least once release cycle before we deprecate them and then later remove them",
          "hierarchy": "Data ByteString Lazy Builder",
          "module": "Data.ByteString.Lazy.Builder",
          "name": "Builder",
          "package": "bytestring",
          "partial": "Builder",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Builder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eManipulate \u003cem\u003elazy\u003c/em\u003e \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es using \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e operations. All Chars will\n be truncated to 8 bits. It can be expected that these functions will\n run at identical speeds to their \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e equivalents in\n \u003ca\u003eData.ByteString.Lazy\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported \u003ccode\u003equalified\u003c/code\u003e, to avoid name\n clashes with \u003ca\u003ePrelude\u003c/a\u003e functions.  eg.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.ByteString.Lazy.Char8 as C\n\u003c/pre\u003e\u003cp\u003eThe Char8 interface to bytestrings provides an instance of IsString\n for the ByteString type, enabling you to use string literals, and\n have them implicitly packed to ByteStrings.\n Use \u003ccode\u003e{-# LANGUAGE OverloadedStrings #-}\u003c/code\u003e to enable this.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "Char8",
          "package": "bytestring",
          "source": "src/Data-ByteString-Lazy-Char8.html",
          "type": "module"
        },
        "index": {
          "description": "Manipulate lazy ByteString using Char operations All Chars will be truncated to bits It can be expected that these functions will run at identical speeds to their Word8 equivalents in Data.ByteString.Lazy This module is intended to be imported qualified to avoid name clashes with Prelude functions eg import qualified Data.ByteString.Lazy.Char8 as The Char8 interface to bytestrings provides an instance of IsString for the ByteString type enabling you to use string literals and have them implicitly packed to ByteStrings Use LANGUAGE OverloadedStrings to enable this",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "Char8",
          "package": "bytestring",
          "partial": "Char",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space-efficient representation of a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e vector, supporting many\n efficient operations.\n\u003c/p\u003e\u003cp\u003eA lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e contains 8-bit bytes, or by using the operations\n from \u003ca\u003eData.ByteString.Lazy.Char8\u003c/a\u003e it can be interpreted as containing\n 8-bit characters.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "ByteString",
          "package": "bytestring",
          "source": "src/Data-ByteString-Lazy-Internal.html#ByteString",
          "type": "data"
        },
        "index": {
          "description": "space-efficient representation of Word8 vector supporting many efficient operations lazy ByteString contains bit bytes or by using the operations from Data.ByteString.Lazy.Char8 it can be interpreted as containing bit characters",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "ByteString",
          "package": "bytestring",
          "partial": "Byte String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#t:ByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplied to a predicate and a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e determines if\n all elements of the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e satisfy the predicate.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "all",
          "package": "bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e Bool",
          "source": "src/Data-ByteString-Lazy-Char8.html#all",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and ByteString all determines if all elements of the ByteString satisfy the predicate",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "all",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003eBool",
          "package": "bytestring",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplied to a predicate and a ByteString, \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e determines if\n any element of the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e satisfies the predicate.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "any",
          "package": "bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e Bool",
          "source": "src/Data-ByteString-Lazy-Char8.html#any",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and ByteString any determines if any element of the ByteString satisfies the predicate",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "any",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003eBool",
          "package": "bytestring",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n\\\u003c/em\u003ec)/ Append two ByteStrings\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "append",
          "package": "bytestring",
          "signature": "ByteString -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy.html#append",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:append\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:append\"]"
        },
        "index": {
          "description": "Append two ByteStrings",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "append",
          "normalized": "ByteString-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "ByteString-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "appendFile",
          "package": "bytestring",
          "signature": "FilePath -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-ByteString-Lazy-Char8.html#appendFile",
          "type": "function"
        },
        "index": {
          "description": "Append ByteString to file",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "appendFile",
          "normalized": "FilePath-\u003eByteString-\u003eIO()",
          "package": "bytestring",
          "partial": "File",
          "signature": "FilePath-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e . p)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "break",
          "package": "bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-ByteString-Lazy-Char8.html#break",
          "type": "function"
        },
        "index": {
          "description": "break is equivalent to span not",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "break",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "bytestring",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Concatenate a list of ByteStrings.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "concat",
          "package": "bytestring",
          "signature": "[ByteString] -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy.html#concat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:concat\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:concat\"]"
        },
        "index": {
          "description": "Concatenate list of ByteStrings",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "concat",
          "normalized": "[ByteString]-\u003eByteString",
          "package": "bytestring",
          "signature": "[ByteString]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and concatenate the results\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "concatMap",
          "package": "bytestring",
          "signature": "(Char -\u003e ByteString) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy-Char8.html#concatMap",
          "type": "function"
        },
        "index": {
          "description": "Map function over ByteString and concatenate the results",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "concatMap",
          "normalized": "(Char-\u003eByteString)-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "partial": "Map",
          "signature": "(Char-\u003eByteString)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e is analogous to '(:)' for lists.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "cons",
          "package": "bytestring",
          "signature": "Char -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy-Char8.html#cons",
          "type": "function"
        },
        "index": {
          "description": "cons is analogous to for lists",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "cons",
          "normalized": "Char-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "Char-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Unlike \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e, 'cons\\'' is\n strict in the ByteString that we are consing onto. More precisely, it forces\n the head and the first chunk. It does this because, for space efficiency, it\n may coalesce the new byte onto the first 'chunk' rather than starting a\n new 'chunk'.\n\u003c/p\u003e\u003cp\u003eSo that means you can't use a lazy recursive contruction like this:\n\u003c/p\u003e\u003cpre\u003e let xs = cons\\' c xs in xs\n\u003c/pre\u003e\u003cp\u003eYou can however use \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e, as well as \u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e, to build\n infinite lazy ByteStrings.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "cons'",
          "package": "bytestring",
          "signature": "Char -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy-Char8.html#cons%27",
          "type": "function"
        },
        "index": {
          "description": "Unlike cons cons is strict in the ByteString that we are consing onto More precisely it forces the head and the first chunk It does this because for space efficiency it may coalesce the new byte onto the first chunk rather than starting new chunk So that means you can use lazy recursive contruction like this let xs cons xs in xs You can however use cons as well as repeat and cycle to build infinite lazy ByteStrings",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "cons'",
          "normalized": "Char-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "Char-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:cons-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Make a copy of the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e with its own storage.\n   This is mainly useful to allow the rest of the data pointed\n   to by the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to be garbage collected, for example\n   if a large string has been read in, and only a small part of it\n   is needed in the rest of the program.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "copy",
          "package": "bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy.html#copy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:copy\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:copy\"]"
        },
        "index": {
          "description": "Make copy of the ByteString with its own storage This is mainly useful to allow the rest of the data pointed to by the ByteString to be garbage collected for example if large string has been read in and only small part of it is needed in the rest of the program",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "copy",
          "normalized": "ByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecount returns the number of times its argument appears in the ByteString\n\u003c/p\u003e\u003cpre\u003e count      == length . elemIndices\n count '\\n' == length . lines\n\u003c/pre\u003e\u003cp\u003eBut more efficiently than using length on the intermediate list.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "count",
          "package": "bytestring",
          "signature": "Char -\u003e ByteString -\u003e Int64",
          "source": "src/Data-ByteString-Lazy-Char8.html#count",
          "type": "function"
        },
        "index": {
          "description": "count returns the number of times its argument appears in the ByteString count length elemIndices count length lines But more efficiently than using length on the intermediate list",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "count",
          "normalized": "Char-\u003eByteString-\u003eInt",
          "package": "bytestring",
          "signature": "Char-\u003eByteString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e ties a finite ByteString into a circular one, or equivalently,\n the infinite repetition of the original ByteString.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "cycle",
          "package": "bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy.html#cycle",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:cycle\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:cycle\"]"
        },
        "index": {
          "description": "cycle ties finite ByteString into circular one or equivalently the infinite repetition of the original ByteString",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "cycle",
          "normalized": "ByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:cycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n\\\u003c/em\u003ec)/ \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e returns the suffix of \u003ccode\u003exs\u003c/code\u003e after the first \u003ccode\u003en\u003c/code\u003e\n elements, or \u003ccode\u003e[]\u003c/code\u003e if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "drop",
          "package": "bytestring",
          "signature": "Int64 -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy.html#drop",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:drop\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:drop\"]"
        },
        "index": {
          "description": "drop xs returns the suffix of xs after the first elements or if length xs",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "drop",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e returns the suffix remaining after \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "dropWhile",
          "package": "bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy-Char8.html#dropWhile",
          "type": "function"
        },
        "index": {
          "description": "dropWhile xs returns the suffix remaining after takeWhile xs",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "dropWhile",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e membership predicate. This\n implementation uses \u003ccode\u003ememchr(3)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "elem",
          "package": "bytestring",
          "signature": "Char -\u003e ByteString -\u003e Bool",
          "source": "src/Data-ByteString-Lazy-Char8.html#elem",
          "type": "function"
        },
        "index": {
          "description": "elem is the ByteString membership predicate This implementation uses memchr",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "elem",
          "normalized": "Char-\u003eByteString-\u003eBool",
          "package": "bytestring",
          "signature": "Char-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e function returns the index of the first\n element in the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e which is equal (by memchr) to the\n query element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "elemIndex",
          "package": "bytestring",
          "signature": "Char -\u003e ByteString -\u003e Maybe Int64",
          "source": "src/Data-ByteString-Lazy-Char8.html#elemIndex",
          "type": "function"
        },
        "index": {
          "description": "The elemIndex function returns the index of the first element in the given ByteString which is equal by memchr to the query element or Nothing if there is no such element",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "elemIndex",
          "normalized": "Char-\u003eByteString-\u003eMaybe Int",
          "package": "bytestring",
          "partial": "Index",
          "signature": "Char-\u003eByteString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e, by returning\n the indices of all elements equal to the query element, in ascending order.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "elemIndices",
          "package": "bytestring",
          "signature": "Char -\u003e ByteString -\u003e [Int64]",
          "source": "src/Data-ByteString-Lazy-Char8.html#elemIndices",
          "type": "function"
        },
        "index": {
          "description": "The elemIndices function extends elemIndex by returning the indices of all elements equal to the query element in ascending order",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "elemIndices",
          "normalized": "Char-\u003eByteString-\u003e[Int]",
          "package": "bytestring",
          "partial": "Indices",
          "signature": "Char-\u003eByteString-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:elemIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e The empty \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "empty",
          "package": "bytestring",
          "signature": "ByteString",
          "source": "src/Data-ByteString-Lazy.html#empty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:empty\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:empty\"]"
        },
        "index": {
          "description": "The empty ByteString",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "empty",
          "package": "bytestring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e, applied to a predicate and a ByteString,\n returns a ByteString containing those characters that satisfy the\n predicate.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "filter",
          "package": "bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy-Char8.html#filter",
          "type": "function"
        },
        "index": {
          "description": "filter applied to predicate and ByteString returns ByteString containing those characters that satisfy the predicate",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "filter",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e function takes a predicate and a ByteString,\n and returns the first element in matching the predicate, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if there is no such element.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "find",
          "package": "bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e Maybe Char",
          "source": "src/Data-ByteString-Lazy-Char8.html#find",
          "type": "function"
        },
        "index": {
          "description": "The find function takes predicate and ByteString and returns the first element in matching the predicate or Nothing if there is no such element",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "find",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003eMaybe Char",
          "package": "bytestring",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003eMaybe Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e function takes a predicate and a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and\n returns the index of the first element in the ByteString satisfying the predicate.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "findIndex",
          "package": "bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e Maybe Int64",
          "source": "src/Data-ByteString-Lazy-Char8.html#findIndex",
          "type": "function"
        },
        "index": {
          "description": "The findIndex function takes predicate and ByteString and returns the index of the first element in the ByteString satisfying the predicate",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "findIndex",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003eMaybe Int",
          "package": "bytestring",
          "partial": "Index",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e, by returning the\n indices of all elements satisfying the predicate, in ascending order.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "findIndices",
          "package": "bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e [Int64]",
          "source": "src/Data-ByteString-Lazy-Char8.html#findIndices",
          "type": "function"
        },
        "index": {
          "description": "The findIndices function extends findIndex by returning the indices of all elements satisfying the predicate in ascending order",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "findIndices",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003e[Int]",
          "package": "bytestring",
          "partial": "Indices",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:findIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value (typically\n the left-identity of the operator), and a ByteString, reduces the\n ByteString using the binary operator, from left to right.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "foldl",
          "package": "bytestring",
          "signature": "(a -\u003e Char -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-ByteString-Lazy-Char8.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "foldl applied to binary operator starting value typically the left-identity of the operator and ByteString reduces the ByteString using the binary operator from left to right",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "foldl",
          "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "bytestring",
          "signature": "(a-\u003eChar-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'foldl\\'' is like foldl, but strict in the accumulator.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "foldl'",
          "package": "bytestring",
          "signature": "(a -\u003e Char -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-ByteString-Lazy-Char8.html#foldl%27",
          "type": "function"
        },
        "index": {
          "description": "foldl is like foldl but strict in the accumulator",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "foldl'",
          "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "bytestring",
          "signature": "(a-\u003eChar-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e that has no starting value\n argument, and thus must be applied to non-empty \u003ccode\u003eByteStrings\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "foldl1",
          "package": "bytestring",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e ByteString -\u003e Char",
          "source": "src/Data-ByteString-Lazy-Char8.html#foldl1",
          "type": "function"
        },
        "index": {
          "description": "foldl1 is variant of foldl that has no starting value argument and thus must be applied to non-empty ByteStrings",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "foldl1",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eChar",
          "package": "bytestring",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'foldl1\\'' is like \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e, but strict in the accumulator.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "foldl1'",
          "package": "bytestring",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e ByteString -\u003e Char",
          "source": "src/Data-ByteString-Lazy-Char8.html#foldl1%27",
          "type": "function"
        },
        "index": {
          "description": "foldl1 is like foldl1 but strict in the accumulator",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "foldl1'",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eChar",
          "package": "bytestring",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:foldl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value\n (typically the right-identity of the operator), and a packed string,\n reduces the packed string using the binary operator, from right to left.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "foldr",
          "package": "bytestring",
          "signature": "(Char -\u003e a -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-ByteString-Lazy-Char8.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "foldr applied to binary operator starting value typically the right-identity of the operator and packed string reduces the packed string using the binary operator from right to left",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "foldr",
          "normalized": "(Char-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "bytestring",
          "signature": "(Char-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e that has no starting value argument,\n and thus must be applied to non-empty \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "foldr1",
          "package": "bytestring",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e ByteString -\u003e Char",
          "source": "src/Data-ByteString-Lazy-Char8.html#foldr1",
          "type": "function"
        },
        "index": {
          "description": "foldr1 is variant of foldr that has no starting value argument and thus must be applied to non-empty ByteString",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "foldr1",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eChar",
          "package": "bytestring",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eByteString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(c)\u003c/em\u003e Convert a list of strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "fromChunks",
          "package": "bytestring",
          "signature": "[ByteString] -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy.html#fromChunks",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:fromChunks\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:fromChunks\"]"
        },
        "index": {
          "description": "Convert list of strict ByteString into lazy ByteString",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "fromChunks",
          "normalized": "[ByteString]-\u003eByteString",
          "package": "bytestring",
          "partial": "Chunks",
          "signature": "[ByteString]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:fromChunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Convert a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "fromStrict",
          "package": "bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy.html#fromStrict",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:fromStrict\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:fromStrict\"]"
        },
        "index": {
          "description": "Convert strict ByteString into lazy ByteString",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "fromStrict",
          "normalized": "ByteString-\u003eByteString",
          "package": "bytestring",
          "partial": "Strict",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:fromStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egetContents. Equivalent to hGetContents stdin. Will read \u003cem\u003elazily\u003c/em\u003e\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "getContents",
          "package": "bytestring",
          "signature": "IO ByteString",
          "source": "src/Data-ByteString-Lazy.html#getContents",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:getContents\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:getContents\"]"
        },
        "index": {
          "description": "getContents Equivalent to hGetContents stdin Will read lazily",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "getContents",
          "package": "bytestring",
          "partial": "Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:getContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e function takes a ByteString and returns a list of\n ByteStrings such that the concatenation of the result is equal to the\n argument.  Moreover, each sublist in the result contains only equal\n elements.  For example,\n\u003c/p\u003e\u003cpre\u003e group \"Mississippi\" = [\"M\",\"i\",\"ss\",\"i\",\"ss\",\"i\",\"pp\",\"i\"]\n\u003c/pre\u003e\u003cp\u003eIt is a special case of \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to\n supply their own equality test.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "group",
          "package": "bytestring",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Data-ByteString-Lazy.html#group",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:group\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:group\"]"
        },
        "index": {
          "description": "The group function takes ByteString and returns list of ByteStrings such that the concatenation of the result is equal to the argument Moreover each sublist in the result contains only equal elements For example group Mississippi ss ss pp It is special case of groupBy which allows the programmer to supply their own equality test",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "group",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "bytestring",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "groupBy",
          "package": "bytestring",
          "signature": "(Char -\u003e Char -\u003e Bool) -\u003e ByteString -\u003e [ByteString]",
          "source": "src/Data-ByteString-Lazy-Char8.html#groupBy",
          "type": "function"
        },
        "index": {
          "description": "The groupBy function is the non-overloaded version of group",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "groupBy",
          "normalized": "(Char-\u003eChar-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "package": "bytestring",
          "partial": "By",
          "signature": "(Char-\u003eChar-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:groupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead \u003ccode\u003en\u003c/code\u003e bytes into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, directly from the specified \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "hGet",
          "package": "bytestring",
          "signature": "Handle -\u003e Int -\u003e IO ByteString",
          "source": "src/Data-ByteString-Lazy.html#hGet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:hGet\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:hGet\"]"
        },
        "index": {
          "description": "Read bytes into ByteString directly from the specified Handle",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "hGet",
          "normalized": "Handle-\u003eInt-\u003eIO ByteString",
          "package": "bytestring",
          "partial": "Get",
          "signature": "Handle-\u003eInt-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:hGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead entire handle contents \u003cem\u003elazily\u003c/em\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. Chunks\n are read on demand, using the default chunk size.\n\u003c/p\u003e\u003cp\u003eOnce EOF is encountered, the Handle is closed.\n\u003c/p\u003e\u003cp\u003eNote: the \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e should be placed in binary mode with\n \u003ccode\u003e\u003ca\u003ehSetBinaryMode\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e to\n work correctly.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "hGetContents",
          "package": "bytestring",
          "signature": "Handle -\u003e IO ByteString",
          "source": "src/Data-ByteString-Lazy.html#hGetContents",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:hGetContents\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:hGetContents\"]"
        },
        "index": {
          "description": "Read entire handle contents lazily into ByteString Chunks are read on demand using the default chunk size Once EOF is encountered the Handle is closed Note the Handle should be placed in binary mode with hSetBinaryMode for hGetContents to work correctly",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "hGetContents",
          "normalized": "Handle-\u003eIO ByteString",
          "package": "bytestring",
          "partial": "Get Contents",
          "signature": "Handle-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:hGetContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehGetNonBlocking is similar to \u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e, except that it will never block\n waiting for data to become available, instead it returns only whatever data\n is available.  If there is no data available to be read, \u003ccode\u003e\u003ca\u003ehGetNonBlocking\u003c/a\u003e\u003c/code\u003e\n returns \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: on Windows and with Haskell implementation other than GHC, this\n function does not work correctly; it behaves identically to \u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "hGetNonBlocking",
          "package": "bytestring",
          "signature": "Handle -\u003e Int -\u003e IO ByteString",
          "source": "src/Data-ByteString-Lazy.html#hGetNonBlocking",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:hGetNonBlocking\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:hGetNonBlocking\"]"
        },
        "index": {
          "description": "hGetNonBlocking is similar to hGet except that it will never block waiting for data to become available instead it returns only whatever data is available If there is no data available to be read hGetNonBlocking returns empty Note on Windows and with Haskell implementation other than GHC this function does not work correctly it behaves identically to hGet",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "hGetNonBlocking",
          "normalized": "Handle-\u003eInt-\u003eIO ByteString",
          "package": "bytestring",
          "partial": "Get Non Blocking",
          "signature": "Handle-\u003eInt-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:hGetNonBlocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutputs a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to the specified \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "hPut",
          "package": "bytestring",
          "signature": "Handle -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-ByteString-Lazy.html#hPut",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:hPut\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:hPut\"]"
        },
        "index": {
          "description": "Outputs ByteString to the specified Handle",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "hPut",
          "normalized": "Handle-\u003eByteString-\u003eIO()",
          "package": "bytestring",
          "partial": "Put",
          "signature": "Handle-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:hPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003ehPut\u003c/a\u003e\u003c/code\u003e except that it will never block. Instead it returns\n any tail that did not get written. This tail may be \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e in the case that\n the whole string was written, or the whole original string if nothing was\n written. Partial writes are also possible.\n\u003c/p\u003e\u003cp\u003eNote: on Windows and with Haskell implementation other than GHC, this\n function does not work correctly; it behaves identically to \u003ccode\u003e\u003ca\u003ehPut\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "hPutNonBlocking",
          "package": "bytestring",
          "signature": "Handle -\u003e ByteString -\u003e IO ByteString",
          "source": "src/Data-ByteString-Lazy.html#hPutNonBlocking",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:hPutNonBlocking\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:hPutNonBlocking\"]"
        },
        "index": {
          "description": "Similar to hPut except that it will never block Instead it returns any tail that did not get written This tail may be empty in the case that the whole string was written or the whole original string if nothing was written Partial writes are also possible Note on Windows and with Haskell implementation other than GHC this function does not work correctly it behaves identically to hPut",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "hPutNonBlocking",
          "normalized": "Handle-\u003eByteString-\u003eIO ByteString",
          "package": "bytestring",
          "partial": "Put Non Blocking",
          "signature": "Handle-\u003eByteString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:hPutNonBlocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA synonym for \u003ccode\u003ehPut\u003c/code\u003e, for compatibility\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "hPutStr",
          "package": "bytestring",
          "signature": "Handle -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-ByteString-Lazy.html#hPutStr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:hPutStr\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:hPutStr\"]"
        },
        "index": {
          "description": "synonym for hPut for compatibility",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "hPutStr",
          "normalized": "Handle-\u003eByteString-\u003eIO()",
          "package": "bytestring",
          "partial": "Put Str",
          "signature": "Handle-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:hPutStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a ByteString to a handle, appending a newline byte\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "hPutStrLn",
          "package": "bytestring",
          "signature": "Handle -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-ByteString-Lazy-Char8.html#hPutStrLn",
          "type": "function"
        },
        "index": {
          "description": "Write ByteString to handle appending newline byte",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "hPutStrLn",
          "normalized": "Handle-\u003eByteString-\u003eIO()",
          "package": "bytestring",
          "partial": "Put Str Ln",
          "signature": "Handle-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:hPutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the first element of a ByteString, which must be non-empty.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "head",
          "package": "bytestring",
          "signature": "ByteString -\u003e Char",
          "source": "src/Data-ByteString-Lazy-Char8.html#head",
          "type": "function"
        },
        "index": {
          "description": "Extract the first element of ByteString which must be non-empty",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "head",
          "normalized": "ByteString-\u003eChar",
          "package": "bytestring",
          "signature": "ByteString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e index (subscript) operator, starting from 0.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "index",
          "package": "bytestring",
          "signature": "ByteString -\u003e Int64 -\u003e Char",
          "source": "src/Data-ByteString-Lazy-Char8.html#index",
          "type": "function"
        },
        "index": {
          "description": "ByteString index subscript operator starting from",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "index",
          "normalized": "ByteString-\u003eInt-\u003eChar",
          "package": "bytestring",
          "signature": "ByteString-\u003eInt-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n\\\u003c/em\u003ec)/ Return all the elements of a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e except the last one.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "init",
          "package": "bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy.html#init",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:init\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:init\"]"
        },
        "index": {
          "description": "Return all the elements of ByteString except the last one",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "init",
          "normalized": "ByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return all initial segments of the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, shortest first.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "inits",
          "package": "bytestring",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Data-ByteString-Lazy.html#inits",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:inits\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:inits\"]"
        },
        "index": {
          "description": "Return all initial segments of the given ByteString shortest first",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "inits",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "bytestring",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:inits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe interact function takes a function of type \u003ccode\u003eByteString -\u003e ByteString\u003c/code\u003e\n as its argument. The entire input from the standard input device is passed\n to this function as its argument, and the resulting string is output on the\n standard output device.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "interact",
          "package": "bytestring",
          "signature": "(ByteString -\u003e ByteString) -\u003e IO ()",
          "source": "src/Data-ByteString-Lazy.html#interact",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:interact\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:interact\"]"
        },
        "index": {
          "description": "The interact function takes function of type ByteString ByteString as its argument The entire input from the standard input device is passed to this function as its argument and the resulting string is output on the standard output device",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "interact",
          "normalized": "(ByteString-\u003eByteString)-\u003eIO()",
          "package": "bytestring",
          "signature": "(ByteString-\u003eByteString)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:interact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eintercalate\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and a list of\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es and concatenates the list after interspersing the first\n argument between each element of the list.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "intercalate",
          "package": "bytestring",
          "signature": "ByteString -\u003e [ByteString] -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy.html#intercalate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:intercalate\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:intercalate\"]"
        },
        "index": {
          "description": "The intercalate function takes ByteString and list of ByteString and concatenates the list after interspersing the first argument between each element of the list",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "intercalate",
          "normalized": "ByteString-\u003e[ByteString]-\u003eByteString",
          "package": "bytestring",
          "signature": "ByteString-\u003e[ByteString]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:intercalate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e function takes a Char and a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n and `intersperses' that Char between the elements of the\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.  It is analogous to the intersperse function on Lists.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "intersperse",
          "package": "bytestring",
          "signature": "Char -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy-Char8.html#intersperse",
          "type": "function"
        },
        "index": {
          "description": "The intersperse function takes Char and ByteString and intersperses that Char between the elements of the ByteString It is analogous to the intersperse function on Lists",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "intersperse",
          "normalized": "Char-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "Char-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eisPrefixOf\u003c/a\u003e\u003c/code\u003e function takes two ByteStrings and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n iff the first is a prefix of the second.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "isPrefixOf",
          "package": "bytestring",
          "signature": "ByteString -\u003e ByteString -\u003e Bool",
          "source": "src/Data-ByteString-Lazy.html#isPrefixOf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:isPrefixOf\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:isPrefixOf\"]"
        },
        "index": {
          "description": "The isPrefixOf function takes two ByteStrings and returns True iff the first is prefix of the second",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "isPrefixOf",
          "normalized": "ByteString-\u003eByteString-\u003eBool",
          "package": "bytestring",
          "partial": "Prefix Of",
          "signature": "ByteString-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:isPrefixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e f x\u003c/code\u003e returns an infinite ByteString of repeated applications\n of \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003ex\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e iterate f x == [x, f x, f (f x), ...]\n\u003c/pre\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "iterate",
          "package": "bytestring",
          "signature": "(Char -\u003e Char) -\u003e Char -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy-Char8.html#iterate",
          "type": "function"
        },
        "index": {
          "description": "iterate returns an infinite ByteString of repeated applications of to iterate",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "iterate",
          "normalized": "(Char-\u003eChar)-\u003eChar-\u003eByteString",
          "package": "bytestring",
          "signature": "(Char-\u003eChar)-\u003eChar-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:iterate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the last element of a packed string, which must be non-empty.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "last",
          "package": "bytestring",
          "signature": "ByteString -\u003e Char",
          "source": "src/Data-ByteString-Lazy-Char8.html#last",
          "type": "function"
        },
        "index": {
          "description": "Extract the last element of packed string which must be non-empty",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "last",
          "normalized": "ByteString-\u003eChar",
          "package": "bytestring",
          "signature": "ByteString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n\\\u003c/em\u003ec)/ \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e returns the length of a ByteString as an \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "length",
          "package": "bytestring",
          "signature": "ByteString -\u003e Int64",
          "source": "src/Data-ByteString-Lazy.html#length",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:length\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:length\"]"
        },
        "index": {
          "description": "length returns the length of ByteString as an Int64",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "length",
          "normalized": "ByteString-\u003eInt",
          "package": "bytestring",
          "signature": "ByteString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e breaks a ByteString up into a list of ByteStrings at\n newline Chars. The resulting strings do not contain newlines.\n\u003c/p\u003e\u003cp\u003eAs of bytestring 0.9.0.3, this function is stricter than its \n list cousin.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "lines",
          "package": "bytestring",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Data-ByteString-Lazy-Char8.html#lines",
          "type": "function"
        },
        "index": {
          "description": "lines breaks ByteString up into list of ByteStrings at newline Chars The resulting strings do not contain newlines As of bytestring this function is stricter than its list cousin",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "lines",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "bytestring",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef xs\u003c/code\u003e is the ByteString obtained by applying \u003ccode\u003ef\u003c/code\u003e to each element of \u003ccode\u003exs\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "map",
          "package": "bytestring",
          "signature": "(Char -\u003e Char) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy-Char8.html#map",
          "type": "function"
        },
        "index": {
          "description": "map xs is the ByteString obtained by applying to each element of xs",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "map",
          "normalized": "(Char-\u003eChar)-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "(Char-\u003eChar)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumL\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a ByteString,\n passing an accumulating parameter from left to right, and returning a\n final value of this accumulator together with the new ByteString.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "mapAccumL",
          "package": "bytestring",
          "signature": "(acc -\u003e Char -\u003e (acc, Char)) -\u003e acc -\u003e ByteString -\u003e (acc, ByteString)",
          "source": "src/Data-ByteString-Lazy-Char8.html#mapAccumL",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumL function behaves like combination of map and foldl it applies function to each element of ByteString passing an accumulating parameter from left to right and returning final value of this accumulator together with the new ByteString",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "mapAccumL",
          "normalized": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003eByteString-\u003e(a,ByteString)",
          "package": "bytestring",
          "partial": "Accum",
          "signature": "(acc-\u003eChar-\u003e(acc,Char))-\u003eacc-\u003eByteString-\u003e(acc,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:mapAccumL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumR\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a ByteString,\n passing an accumulating parameter from right to left, and returning a\n final value of this accumulator together with the new ByteString.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "mapAccumR",
          "package": "bytestring",
          "signature": "(acc -\u003e Char -\u003e (acc, Char)) -\u003e acc -\u003e ByteString -\u003e (acc, ByteString)",
          "source": "src/Data-ByteString-Lazy-Char8.html#mapAccumR",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumR function behaves like combination of map and foldr it applies function to each element of ByteString passing an accumulating parameter from right to left and returning final value of this accumulator together with the new ByteString",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "mapAccumR",
          "normalized": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003eByteString-\u003e(a,ByteString)",
          "package": "bytestring",
          "partial": "Accum",
          "signature": "(acc-\u003eChar-\u003e(acc,Char))-\u003eacc-\u003eByteString-\u003e(acc,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:mapAccumR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e returns the maximum value from a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "maximum",
          "package": "bytestring",
          "signature": "ByteString -\u003e Char",
          "source": "src/Data-ByteString-Lazy-Char8.html#maximum",
          "type": "function"
        },
        "index": {
          "description": "maximum returns the maximum value from ByteString",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "maximum",
          "normalized": "ByteString-\u003eChar",
          "package": "bytestring",
          "signature": "ByteString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e returns the minimum value from a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "minimum",
          "package": "bytestring",
          "signature": "ByteString -\u003e Char",
          "source": "src/Data-ByteString-Lazy-Char8.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "minimum returns the minimum value from ByteString",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "minimum",
          "normalized": "ByteString-\u003eChar",
          "package": "bytestring",
          "signature": "ByteString-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003enotElem\u003c/a\u003e\u003c/code\u003e is the inverse of \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "notElem",
          "package": "bytestring",
          "signature": "Char -\u003e ByteString -\u003e Bool",
          "source": "src/Data-ByteString-Lazy-Char8.html#notElem",
          "type": "function"
        },
        "index": {
          "description": "notElem is the inverse of elem",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "notElem",
          "normalized": "Char-\u003eByteString-\u003eBool",
          "package": "bytestring",
          "partial": "Elem",
          "signature": "Char-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Test whether a ByteString is empty.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "null",
          "package": "bytestring",
          "signature": "ByteString -\u003e Bool",
          "source": "src/Data-ByteString-Lazy.html#null",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:null\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:null\"]"
        },
        "index": {
          "description": "Test whether ByteString is empty",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "null",
          "normalized": "ByteString-\u003eBool",
          "package": "bytestring",
          "signature": "ByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "pack",
          "package": "bytestring",
          "signature": "[Char] -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy-Char8.html#pack",
          "type": "function"
        },
        "index": {
          "description": "Convert String into ByteString",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "pack",
          "normalized": "[Char]-\u003eByteString",
          "package": "bytestring",
          "signature": "[Char]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a ByteString to stdout\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "putStr",
          "package": "bytestring",
          "signature": "ByteString -\u003e IO ()",
          "source": "src/Data-ByteString-Lazy.html#putStr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:putStr\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:putStr\"]"
        },
        "index": {
          "description": "Write ByteString to stdout",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "putStr",
          "normalized": "ByteString-\u003eIO()",
          "package": "bytestring",
          "partial": "Str",
          "signature": "ByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:putStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a ByteString to stdout, appending a newline byte\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "putStrLn",
          "package": "bytestring",
          "signature": "ByteString -\u003e IO ()",
          "source": "src/Data-ByteString-Lazy-Char8.html#putStrLn",
          "type": "function"
        },
        "index": {
          "description": "Write ByteString to stdout appending newline byte",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "putStrLn",
          "normalized": "ByteString-\u003eIO()",
          "package": "bytestring",
          "partial": "Str Ln",
          "signature": "ByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an entire file \u003cem\u003elazily\u003c/em\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "readFile",
          "package": "bytestring",
          "signature": "FilePath -\u003e IO ByteString",
          "source": "src/Data-ByteString-Lazy-Char8.html#readFile",
          "type": "function"
        },
        "index": {
          "description": "Read an entire file lazily into ByteString",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO ByteString",
          "package": "bytestring",
          "partial": "File",
          "signature": "FilePath-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereadInt reads an Int from the beginning of the ByteString.  If\n there is no integer at the beginning of the string, it returns\n Nothing, otherwise it just returns the int read, and the rest of the\n string.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "readInt",
          "package": "bytestring",
          "signature": "ByteString -\u003e Maybe (Int, ByteString)",
          "source": "src/Data-ByteString-Lazy-Char8.html#readInt",
          "type": "function"
        },
        "index": {
          "description": "readInt reads an Int from the beginning of the ByteString If there is no integer at the beginning of the string it returns Nothing otherwise it just returns the int read and the rest of the string",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "readInt",
          "normalized": "ByteString-\u003eMaybe(Int,ByteString)",
          "package": "bytestring",
          "partial": "Int",
          "signature": "ByteString-\u003eMaybe(Int,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:readInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereadInteger reads an Integer from the beginning of the ByteString.  If\n there is no integer at the beginning of the string, it returns Nothing,\n otherwise it just returns the int read, and the rest of the string.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "readInteger",
          "package": "bytestring",
          "signature": "ByteString -\u003e Maybe (Integer, ByteString)",
          "source": "src/Data-ByteString-Lazy-Char8.html#readInteger",
          "type": "function"
        },
        "index": {
          "description": "readInteger reads an Integer from the beginning of the ByteString If there is no integer at the beginning of the string it returns Nothing otherwise it just returns the int read and the rest of the string",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "readInteger",
          "normalized": "ByteString-\u003eMaybe(Integer,ByteString)",
          "package": "bytestring",
          "partial": "Integer",
          "signature": "ByteString-\u003eMaybe(Integer,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:readInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e is an infinite ByteString, with \u003ccode\u003ex\u003c/code\u003e the value of every\n element.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "repeat",
          "package": "bytestring",
          "signature": "Char -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy-Char8.html#repeat",
          "type": "function"
        },
        "index": {
          "description": "repeat is an infinite ByteString with the value of every element",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "repeat",
          "normalized": "Char-\u003eByteString",
          "package": "bytestring",
          "signature": "Char-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e n x\u003c/code\u003e is a ByteString of length \u003ccode\u003en\u003c/code\u003e with \u003ccode\u003ex\u003c/code\u003e\n the value of every element.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "replicate",
          "package": "bytestring",
          "signature": "Int64 -\u003e Char -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy-Char8.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "replicate is ByteString of length with the value of every element",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "replicate",
          "normalized": "Int-\u003eChar-\u003eByteString",
          "package": "bytestring",
          "signature": "Int-\u003eChar-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ereverse\u003c/a\u003e\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e returns the elements of \u003ccode\u003exs\u003c/code\u003e in reverse order.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "reverse",
          "package": "bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy.html#reverse",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:reverse\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:reverse\"]"
        },
        "index": {
          "description": "reverse xs returns the elements of xs in reverse order",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "reverse",
          "normalized": "ByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but returns a list of successive\n reduced values from the left. This function will fuse.\n\u003c/p\u003e\u003cpre\u003e scanl f z [x1, x2, ...] == [z, z `f` x1, (z `f` x1) `f` x2, ...]\n\u003c/pre\u003e\u003cp\u003eNote that\n\u003c/p\u003e\u003cpre\u003e last (scanl f z xs) == foldl f z xs.\n\u003c/pre\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "scanl",
          "package": "bytestring",
          "signature": "(Char -\u003e Char -\u003e Char) -\u003e Char -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy-Char8.html#scanl",
          "type": "function"
        },
        "index": {
          "description": "scanl is similar to foldl but returns list of successive reduced values from the left This function will fuse scanl x1 x2 x1 x1 x2 Note that last scanl xs foldl xs",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "scanl",
          "normalized": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:scanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "singleton",
          "package": "bytestring",
          "signature": "Char -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy-Char8.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Convert Char into ByteString",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "singleton",
          "normalized": "Char-\u003eByteString",
          "package": "bytestring",
          "signature": "Char-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Append a Char to the end of a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. Similar to\n \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e, this function performs a memcpy.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "snoc",
          "package": "bytestring",
          "signature": "ByteString -\u003e Char -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy-Char8.html#snoc",
          "type": "function"
        },
        "index": {
          "description": "Append Char to the end of ByteString Similar to cons this function performs memcpy",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "snoc",
          "normalized": "ByteString-\u003eChar-\u003eByteString",
          "package": "bytestring",
          "signature": "ByteString-\u003eChar-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e breaks the ByteString into two segments. It is\n equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p xs, \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p xs)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "span",
          "package": "bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-ByteString-Lazy-Char8.html#span",
          "type": "function"
        },
        "index": {
          "description": "span xs breaks the ByteString into two segments It is equivalent to takeWhile xs dropWhile xs",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "span",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "bytestring",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Break a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into pieces separated by the byte\n argument, consuming the delimiter. I.e.\n\u003c/p\u003e\u003cpre\u003e split '\\n' \"a\\nb\\nd\\ne\" == [\"a\",\"b\",\"d\",\"e\"]\n split 'a'  \"aXaXaXa\"    == [\"\",\"X\",\"X\",\"X\"]\n split 'x'  \"x\"          == [\"\",\"\"]\n\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003e intercalate [c] . split c == id\n split == splitWith . (==)\n\u003c/pre\u003e\u003cp\u003eAs for all splitting functions in this library, this function does\n not copy the substrings, it just constructs new \u003ccode\u003eByteStrings\u003c/code\u003e that\n are slices of the original.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "split",
          "package": "bytestring",
          "signature": "Char -\u003e ByteString -\u003e [ByteString]",
          "source": "src/Data-ByteString-Lazy-Char8.html#split",
          "type": "function"
        },
        "index": {
          "description": "Break ByteString into pieces separated by the byte argument consuming the delimiter I.e split nb nd ne split aXaXaXa split and intercalate split id split splitWith As for all splitting functions in this library this function does not copy the substrings it just constructs new ByteStrings that are slices of the original",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "split",
          "normalized": "Char-\u003eByteString-\u003e[ByteString]",
          "package": "bytestring",
          "signature": "Char-\u003eByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n\\\u003c/em\u003ec)/ \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en xs\u003c/code\u003e is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e n xs, \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e n xs)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "splitAt",
          "package": "bytestring",
          "signature": "Int64 -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-ByteString-Lazy.html#splitAt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:splitAt\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:splitAt\"]"
        },
        "index": {
          "description": "splitAt xs is equivalent to take xs drop xs",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "splitAt",
          "normalized": "Int-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "bytestring",
          "partial": "At",
          "signature": "Int-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Splits a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into components delimited by\n separators, where the predicate returns True for a separator element.\n The resulting components do not contain the separators.  Two adjacent\n separators result in an empty component in the output.  eg.\n\u003c/p\u003e\u003cpre\u003e splitWith (=='a') \"aabbaca\" == [\"\",\"\",\"bb\",\"c\",\"\"]\n\u003c/pre\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "splitWith",
          "package": "bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e [ByteString]",
          "source": "src/Data-ByteString-Lazy-Char8.html#splitWith",
          "type": "function"
        },
        "index": {
          "description": "Splits ByteString into components delimited by separators where the predicate returns True for separator element The resulting components do not contain the separators Two adjacent separators result in an empty component in the output eg splitWith aabbaca bb",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "splitWith",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "package": "bytestring",
          "partial": "With",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:splitWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the elements after the head of a ByteString, which must be\n non-empty.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "tail",
          "package": "bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy.html#tail",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:tail\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:tail\"]"
        },
        "index": {
          "description": "Extract the elements after the head of ByteString which must be non-empty",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "tail",
          "normalized": "ByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return all final segments of the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, longest first.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "tails",
          "package": "bytestring",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Data-ByteString-Lazy.html#tails",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:tails\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:tails\"]"
        },
        "index": {
          "description": "Return all final segments of the given ByteString longest first",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "tails",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "bytestring",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:tails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n\\\u003c/em\u003ec)/ \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e, applied to a ByteString \u003ccode\u003exs\u003c/code\u003e, returns the prefix\n of \u003ccode\u003exs\u003c/code\u003e of length \u003ccode\u003en\u003c/code\u003e, or \u003ccode\u003exs\u003c/code\u003e itself if \u003ccode\u003en \u003e \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "take",
          "package": "bytestring",
          "signature": "Int64 -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy.html#take",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:take\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:take\"]"
        },
        "index": {
          "description": "take applied to ByteString xs returns the prefix of xs of length or xs itself if length xs",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "take",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a ByteString \u003ccode\u003exs\u003c/code\u003e,\n returns the longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that\n satisfy \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "takeWhile",
          "package": "bytestring",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy-Char8.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "takeWhile applied to predicate and ByteString xs returns the longest prefix possibly empty of xs of elements that satisfy",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "takeWhile",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "partial": "While",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(c)\u003c/em\u003e Convert a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a list of strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "toChunks",
          "package": "bytestring",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Data-ByteString-Lazy.html#toChunks",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:toChunks\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:toChunks\"]"
        },
        "index": {
          "description": "Convert lazy ByteString into list of strict ByteString",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "toChunks",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "bytestring",
          "partial": "Chunks",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:toChunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that this is an \u003cem\u003eexpensive\u003c/em\u003e operation that forces the whole lazy\n ByteString into memory and then copies all the data. If possible, try to\n avoid converting back and forth between strict and lazy bytestrings.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "toStrict",
          "package": "bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy.html#toStrict",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:toStrict\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:toStrict\"]"
        },
        "index": {
          "description": "Convert lazy ByteString into strict ByteString Note that this is an expensive operation that forces the whole lazy ByteString into memory and then copies all the data If possible try to avoid converting back and forth between strict and lazy bytestrings",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "toStrict",
          "normalized": "ByteString-\u003eByteString",
          "package": "bytestring",
          "partial": "Strict",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:toStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e function transposes the rows and columns of its\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e argument.\n\u003c/p\u003e",
          "module": "[\"Data.ByteString.Lazy.Char8\",\"Data.ByteString.Lazy\"]",
          "name": "transpose",
          "package": "bytestring",
          "signature": "[ByteString] -\u003e [ByteString]",
          "source": "src/Data-ByteString-Lazy.html#transpose",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:transpose\",\"http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:transpose\"]"
        },
        "index": {
          "description": "The transpose function transposes the rows and columns of its ByteString argument",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "transpose",
          "normalized": "[ByteString]-\u003e[ByteString]",
          "package": "bytestring",
          "signature": "[ByteString]-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the head and tail of a ByteString, returning Nothing\n if it is empty.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "uncons",
          "package": "bytestring",
          "signature": "ByteString -\u003e Maybe (Char, ByteString)",
          "source": "src/Data-ByteString-Lazy-Char8.html#uncons",
          "type": "function"
        },
        "index": {
          "description": "Extract the head and tail of ByteString returning Nothing if it is empty",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "uncons",
          "normalized": "ByteString-\u003eMaybe(Char,ByteString)",
          "package": "bytestring",
          "signature": "ByteString-\u003eMaybe(Char,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e function is analogous to the List 'unfoldr'.\n \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e builds a ByteString from a seed value.  The function takes\n the element and returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if it is done producing the\n ByteString or returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(a,b)\u003c/code\u003e, in which case, \u003ccode\u003ea\u003c/code\u003e is a\n prepending to the ByteString and \u003ccode\u003eb\u003c/code\u003e is used as the next element in a\n recursive call.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "unfoldr",
          "package": "bytestring",
          "signature": "(a -\u003e Maybe (Char, a)) -\u003e a -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy-Char8.html#unfoldr",
          "type": "function"
        },
        "index": {
          "description": "The unfoldr function is analogous to the List unfoldr unfoldr builds ByteString from seed value The function takes the element and returns Nothing if it is done producing the ByteString or returns Just in which case is prepending to the ByteString and is used as the next element in recursive call",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "unfoldr",
          "normalized": "(a-\u003eMaybe(Char,a))-\u003ea-\u003eByteString",
          "package": "bytestring",
          "signature": "(a-\u003eMaybe(Char,a))-\u003ea-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:unfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e is an inverse operation to \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e.  It joins lines,\n after appending a terminating newline to each.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "unlines",
          "package": "bytestring",
          "signature": "[ByteString] -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy-Char8.html#unlines",
          "type": "function"
        },
        "index": {
          "description": "unlines is an inverse operation to lines It joins lines after appending terminating newline to each",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "unlines",
          "normalized": "[ByteString]-\u003eByteString",
          "package": "bytestring",
          "signature": "[ByteString]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:unlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Converts a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "unpack",
          "package": "bytestring",
          "signature": "ByteString -\u003e [Char]",
          "source": "src/Data-ByteString-Lazy-Char8.html#unpack",
          "type": "function"
        },
        "index": {
          "description": "Converts ByteString to String",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "unpack",
          "normalized": "ByteString-\u003e[Char]",
          "package": "bytestring",
          "signature": "ByteString-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:unpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n\\\u003c/em\u003ec)/ Extract the \u003ccode\u003e\u003ca\u003einit\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e of a ByteString, returning Nothing\n if it is empty.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "unsnoc",
          "package": "bytestring",
          "signature": "ByteString -\u003e Maybe (ByteString, Char)",
          "source": "src/Data-ByteString-Lazy-Char8.html#unsnoc",
          "type": "function"
        },
        "index": {
          "description": "Extract the init and last of ByteString returning Nothing if it is empty",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "unsnoc",
          "normalized": "ByteString-\u003eMaybe(ByteString,Char)",
          "package": "bytestring",
          "signature": "ByteString-\u003eMaybe(ByteString,Char)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:unsnoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunwords\u003c/a\u003e\u003c/code\u003e function is analogous to the \u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e function, on words.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "unwords",
          "package": "bytestring",
          "signature": "[ByteString] -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy-Char8.html#unwords",
          "type": "function"
        },
        "index": {
          "description": "The unwords function is analogous to the unlines function on words",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "unwords",
          "normalized": "[ByteString]-\u003eByteString",
          "package": "bytestring",
          "signature": "[ByteString]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:unwords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e breaks a ByteString up into a list of words, which\n were delimited by Chars representing white space. And\n\u003c/p\u003e\u003cpre\u003e tokens isSpace = words\n\u003c/pre\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "words",
          "package": "bytestring",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Data-ByteString-Lazy-Char8.html#words",
          "type": "function"
        },
        "index": {
          "description": "words breaks ByteString up into list of words which were delimited by Chars representing white space And tokens isSpace words",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "words",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "bytestring",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:words"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "writeFile",
          "package": "bytestring",
          "signature": "FilePath -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-ByteString-Lazy-Char8.html#writeFile",
          "type": "function"
        },
        "index": {
          "description": "Write ByteString to file",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "writeFile",
          "normalized": "FilePath-\u003eByteString-\u003eIO()",
          "package": "bytestring",
          "partial": "File",
          "signature": "FilePath-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:writeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e takes two ByteStrings and returns a list of\n corresponding pairs of Chars. If one input ByteString is short,\n excess elements of the longer ByteString are discarded. This is\n equivalent to a pair of \u003ccode\u003e\u003ca\u003eunpack\u003c/a\u003e\u003c/code\u003e operations, and so space\n usage may be large for multi-megabyte ByteStrings\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "zip",
          "package": "bytestring",
          "signature": "ByteString -\u003e ByteString -\u003e [(Char, Char)]",
          "source": "src/Data-ByteString-Lazy-Char8.html#zip",
          "type": "function"
        },
        "index": {
          "description": "zip takes two ByteStrings and returns list of corresponding pairs of Chars If one input ByteString is short excess elements of the longer ByteString are discarded This is equivalent to pair of unpack operations and so space usage may be large for multi-megabyte ByteStrings",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "zip",
          "normalized": "ByteString-\u003eByteString-\u003e[(Char,Char)]",
          "package": "bytestring",
          "signature": "ByteString-\u003eByteString-\u003e[(Char,Char)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e generalises \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e by zipping with the function given as\n the first argument, instead of a tupling function.  For example,\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e (+)\u003c/code\u003e is applied to two ByteStrings to produce the list\n of corresponding sums.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "zipWith",
          "package": "bytestring",
          "signature": "(Char -\u003e Char -\u003e a) -\u003e ByteString -\u003e ByteString -\u003e [a]",
          "source": "src/Data-ByteString-Lazy-Char8.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "zipWith generalises zip by zipping with the function given as the first argument instead of tupling function For example zipWith is applied to two ByteStrings to produce the list of corresponding sums",
          "hierarchy": "Data ByteString Lazy Char8",
          "module": "Data.ByteString.Lazy.Char8",
          "name": "zipWith",
          "normalized": "(Char-\u003eChar-\u003ea)-\u003eByteString-\u003eByteString-\u003e[a]",
          "package": "bytestring",
          "partial": "With",
          "signature": "(Char-\u003eChar-\u003ea)-\u003eByteString-\u003eByteString-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy-Char8.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA time and space-efficient implementation of lazy byte vectors\n using lists of packed \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e arrays, suitable for high performance\n use, both in terms of large data quantities, or high speed\n requirements. Lazy ByteStrings are encoded as lazy lists of strict chunks\n of bytes.\n\u003c/p\u003e\u003cp\u003eA key feature of lazy ByteStrings is the means to manipulate large or\n unbounded streams of data without requiring the entire sequence to be\n resident in memory. To take advantage of this you have to write your\n functions in a lazy streaming style, e.g. classic pipeline composition. The\n default I/O chunk size is 32k, which should be good in most circumstances.\n\u003c/p\u003e\u003cp\u003eSome operations, such as \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ereverse\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e, have\n better complexity than their \u003ca\u003eData.ByteString\u003c/a\u003e equivalents, due to\n optimisations resulting from the list spine structure. For other\n operations lazy ByteStrings are usually within a few percent of\n strict ones.\n\u003c/p\u003e\u003cp\u003eThe recomended way to assemble lazy ByteStrings from smaller parts\n is to use the builder monoid from \u003ca\u003eData.ByteString.Builder\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported \u003ccode\u003equalified\u003c/code\u003e, to avoid name\n clashes with \u003ca\u003ePrelude\u003c/a\u003e functions.  eg.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.ByteString.Lazy as B\n\u003c/pre\u003e\u003cp\u003eOriginal GHC implementation by Bryan O'Sullivan.\n Rewritten to use \u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e by Simon Marlow.\n Rewritten to support slices and use \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e\n by David Roundy.\n Rewritten again and extended by Don Stewart and Duncan Coutts.\n Lazy variant by Duncan Coutts and Don Stewart.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "Lazy",
          "package": "bytestring",
          "source": "src/Data-ByteString-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "time and space-efficient implementation of lazy byte vectors using lists of packed Word8 arrays suitable for high performance use both in terms of large data quantities or high speed requirements Lazy ByteStrings are encoded as lazy lists of strict chunks of bytes key feature of lazy ByteStrings is the means to manipulate large or unbounded streams of data without requiring the entire sequence to be resident in memory To take advantage of this you have to write your functions in lazy streaming style e.g classic pipeline composition The default chunk size is which should be good in most circumstances Some operations such as concat append reverse and cons have better complexity than their Data.ByteString equivalents due to optimisations resulting from the list spine structure For other operations lazy ByteStrings are usually within few percent of strict ones The recomended way to assemble lazy ByteStrings from smaller parts is to use the builder monoid from Data.ByteString.Builder This module is intended to be imported qualified to avoid name clashes with Prelude functions eg import qualified Data.ByteString.Lazy as Original GHC implementation by Bryan Sullivan Rewritten to use UArray by Simon Marlow Rewritten to support slices and use ForeignPtr by David Roundy Rewritten again and extended by Don Stewart and Duncan Coutts Lazy variant by Duncan Coutts and Don Stewart",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "Lazy",
          "package": "bytestring",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space-efficient representation of a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e vector, supporting many\n efficient operations.\n\u003c/p\u003e\u003cp\u003eA lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e contains 8-bit bytes, or by using the operations\n from \u003ca\u003eData.ByteString.Lazy.Char8\u003c/a\u003e it can be interpreted as containing\n 8-bit characters.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "ByteString",
          "package": "bytestring",
          "source": "src/Data-ByteString-Lazy-Internal.html#ByteString",
          "type": "data"
        },
        "index": {
          "description": "space-efficient representation of Word8 vector supporting many efficient operations lazy ByteString contains bit bytes or by using the operations from Data.ByteString.Lazy.Char8 it can be interpreted as containing bit characters",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "ByteString",
          "package": "bytestring",
          "partial": "Byte String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#t:ByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Applied to a predicate and a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e determines\n if all elements of the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e satisfy the predicate.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "all",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e Bool",
          "source": "src/Data-ByteString-Lazy.html#all",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and ByteString all determines if all elements of the ByteString satisfy the predicate",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "all",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003eBool",
          "package": "bytestring",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Applied to a predicate and a ByteString, \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e determines if\n any element of the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e satisfies the predicate.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "any",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e Bool",
          "source": "src/Data-ByteString-Lazy.html#any",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and ByteString any determines if any element of the ByteString satisfies the predicate",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "any",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003eBool",
          "package": "bytestring",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "appendFile",
          "package": "bytestring",
          "signature": "FilePath -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-ByteString-Lazy.html#appendFile",
          "type": "function"
        },
        "index": {
          "description": "Append ByteString to file",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "appendFile",
          "normalized": "FilePath-\u003eByteString-\u003eIO()",
          "package": "bytestring",
          "partial": "File",
          "signature": "FilePath-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e . p)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "break",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-ByteString-Lazy.html#break",
          "type": "function"
        },
        "index": {
          "description": "break is equivalent to span not",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "break",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "bytestring",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and concatenate the results\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "concatMap",
          "package": "bytestring",
          "signature": "(Word8 -\u003e ByteString) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy.html#concatMap",
          "type": "function"
        },
        "index": {
          "description": "Map function over ByteString and concatenate the results",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "concatMap",
          "normalized": "(Word-\u003eByteString)-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "partial": "Map",
          "signature": "(Word-\u003eByteString)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e is analogous to '(:)' for lists.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "cons",
          "package": "bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy.html#cons",
          "type": "function"
        },
        "index": {
          "description": "cons is analogous to for lists",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "cons",
          "normalized": "Word-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "Word-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Unlike \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e, 'cons\\'' is\n strict in the ByteString that we are consing onto. More precisely, it forces\n the head and the first chunk. It does this because, for space efficiency, it\n may coalesce the new byte onto the first 'chunk' rather than starting a\n new 'chunk'.\n\u003c/p\u003e\u003cp\u003eSo that means you can't use a lazy recursive contruction like this:\n\u003c/p\u003e\u003cpre\u003e let xs = cons\\' c xs in xs\n\u003c/pre\u003e\u003cp\u003eYou can however use \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e, as well as \u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e, to build\n infinite lazy ByteStrings.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "cons'",
          "package": "bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy.html#cons%27",
          "type": "function"
        },
        "index": {
          "description": "Unlike cons cons is strict in the ByteString that we are consing onto More precisely it forces the head and the first chunk It does this because for space efficiency it may coalesce the new byte onto the first chunk rather than starting new chunk So that means you can use lazy recursive contruction like this let xs cons xs in xs You can however use cons as well as repeat and cycle to build infinite lazy ByteStrings",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "cons'",
          "normalized": "Word-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "Word-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:cons-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecount returns the number of times its argument appears in the ByteString\n\u003c/p\u003e\u003cpre\u003e count = length . elemIndices\n\u003c/pre\u003e\u003cp\u003eBut more efficiently than using length on the intermediate list.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "count",
          "package": "bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e Int64",
          "source": "src/Data-ByteString-Lazy.html#count",
          "type": "function"
        },
        "index": {
          "description": "count returns the number of times its argument appears in the ByteString count length elemIndices But more efficiently than using length on the intermediate list",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "count",
          "normalized": "Word-\u003eByteString-\u003eInt",
          "package": "bytestring",
          "signature": "Word-\u003eByteString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e returns the suffix remaining after \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "dropWhile",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy.html#dropWhile",
          "type": "function"
        },
        "index": {
          "description": "dropWhile xs returns the suffix remaining after takeWhile xs",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "dropWhile",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "partial": "While",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e membership predicate.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "elem",
          "package": "bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e Bool",
          "source": "src/Data-ByteString-Lazy.html#elem",
          "type": "function"
        },
        "index": {
          "description": "elem is the ByteString membership predicate",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "elem",
          "normalized": "Word-\u003eByteString-\u003eBool",
          "package": "bytestring",
          "signature": "Word-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e function returns the index of the first\n element in the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e which is equal to the query\n element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element. \n This implementation uses memchr(3).\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "elemIndex",
          "package": "bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e Maybe Int64",
          "source": "src/Data-ByteString-Lazy.html#elemIndex",
          "type": "function"
        },
        "index": {
          "description": "The elemIndex function returns the index of the first element in the given ByteString which is equal to the query element or Nothing if there is no such element This implementation uses memchr",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "elemIndex",
          "normalized": "Word-\u003eByteString-\u003eMaybe Int",
          "package": "bytestring",
          "partial": "Index",
          "signature": "Word-\u003eByteString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e, by returning\n the indices of all elements equal to the query element, in ascending order.\n This implementation uses memchr(3).\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "elemIndices",
          "package": "bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e [Int64]",
          "source": "src/Data-ByteString-Lazy.html#elemIndices",
          "type": "function"
        },
        "index": {
          "description": "The elemIndices function extends elemIndex by returning the indices of all elements equal to the query element in ascending order This implementation uses memchr",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "elemIndices",
          "normalized": "Word-\u003eByteString-\u003e[Int]",
          "package": "bytestring",
          "partial": "Indices",
          "signature": "Word-\u003eByteString-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:elemIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e, applied to a predicate and a ByteString,\n returns a ByteString containing those characters that satisfy the\n predicate.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "filter",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy.html#filter",
          "type": "function"
        },
        "index": {
          "description": "filter applied to predicate and ByteString returns ByteString containing those characters that satisfy the predicate",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "filter",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e function takes a predicate and a ByteString,\n and returns the first element in matching the predicate, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if there is no such element.\n\u003c/p\u003e\u003cpre\u003e find f p = case findIndex f p of Just n -\u003e Just (p ! n) ; _ -\u003e Nothing\n\u003c/pre\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "find",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e Maybe Word8",
          "source": "src/Data-ByteString-Lazy.html#find",
          "type": "function"
        },
        "index": {
          "description": "The find function takes predicate and ByteString and returns the first element in matching the predicate or Nothing if there is no such element find case findIndex of Just Just Nothing",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "find",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003eMaybe Word",
          "package": "bytestring",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003eMaybe Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e function takes a predicate and a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and\n returns the index of the first element in the ByteString\n satisfying the predicate.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "findIndex",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e Maybe Int64",
          "source": "src/Data-ByteString-Lazy.html#findIndex",
          "type": "function"
        },
        "index": {
          "description": "The findIndex function takes predicate and ByteString and returns the index of the first element in the ByteString satisfying the predicate",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "findIndex",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003eMaybe Int",
          "package": "bytestring",
          "partial": "Index",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e, by returning the\n indices of all elements satisfying the predicate, in ascending order.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "findIndices",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e [Int64]",
          "source": "src/Data-ByteString-Lazy.html#findIndices",
          "type": "function"
        },
        "index": {
          "description": "The findIndices function extends findIndex by returning the indices of all elements satisfying the predicate in ascending order",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "findIndices",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003e[Int]",
          "package": "bytestring",
          "partial": "Indices",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:findIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value (typically\n the left-identity of the operator), and a ByteString, reduces the\n ByteString using the binary operator, from left to right.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "foldl",
          "package": "bytestring",
          "signature": "(a -\u003e Word8 -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-ByteString-Lazy.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "foldl applied to binary operator starting value typically the left-identity of the operator and ByteString reduces the ByteString using the binary operator from left to right",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "foldl",
          "normalized": "(a-\u003eWord-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "bytestring",
          "signature": "(a-\u003eWord-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'foldl\\'' is like \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but strict in the accumulator.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "foldl'",
          "package": "bytestring",
          "signature": "(a -\u003e Word8 -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-ByteString-Lazy.html#foldl%27",
          "type": "function"
        },
        "index": {
          "description": "foldl is like foldl but strict in the accumulator",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "foldl'",
          "normalized": "(a-\u003eWord-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "bytestring",
          "signature": "(a-\u003eWord-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e that has no starting value\n argument, and thus must be applied to non-empty \u003ccode\u003eByteStrings\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "foldl1",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e Word8) -\u003e ByteString -\u003e Word8",
          "source": "src/Data-ByteString-Lazy.html#foldl1",
          "type": "function"
        },
        "index": {
          "description": "foldl1 is variant of foldl that has no starting value argument and thus must be applied to non-empty ByteStrings",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "foldl1",
          "normalized": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eWord",
          "package": "bytestring",
          "signature": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'foldl1\\'' is like \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e, but strict in the accumulator.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "foldl1'",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e Word8) -\u003e ByteString -\u003e Word8",
          "source": "src/Data-ByteString-Lazy.html#foldl1%27",
          "type": "function"
        },
        "index": {
          "description": "foldl1 is like foldl1 but strict in the accumulator",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "foldl1'",
          "normalized": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eWord",
          "package": "bytestring",
          "signature": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:foldl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume the chunks of a lazy ByteString with a strict, tail-recursive,\n accumulating left fold.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "foldlChunks",
          "package": "bytestring",
          "signature": "(a -\u003e ByteString -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-ByteString-Lazy-Internal.html#foldlChunks",
          "type": "function"
        },
        "index": {
          "description": "Consume the chunks of lazy ByteString with strict tail-recursive accumulating left fold",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "foldlChunks",
          "normalized": "(a-\u003eByteString-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "bytestring",
          "partial": "Chunks",
          "signature": "(a-\u003eByteString-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:foldlChunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value\n (typically the right-identity of the operator), and a ByteString,\n reduces the ByteString using the binary operator, from right to left.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "foldr",
          "package": "bytestring",
          "signature": "(Word8 -\u003e a -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-ByteString-Lazy.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "foldr applied to binary operator starting value typically the right-identity of the operator and ByteString reduces the ByteString using the binary operator from right to left",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "foldr",
          "normalized": "(Word-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "bytestring",
          "signature": "(Word-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e that has no starting value argument,\n and thus must be applied to non-empty \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "foldr1",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e Word8) -\u003e ByteString -\u003e Word8",
          "source": "src/Data-ByteString-Lazy.html#foldr1",
          "type": "function"
        },
        "index": {
          "description": "foldr1 is variant of foldr that has no starting value argument and thus must be applied to non-empty ByteString",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "foldr1",
          "normalized": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eWord",
          "package": "bytestring",
          "signature": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume the chunks of a lazy ByteString with a natural right fold.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "foldrChunks",
          "package": "bytestring",
          "signature": "(ByteString -\u003e a -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-ByteString-Lazy-Internal.html#foldrChunks",
          "type": "function"
        },
        "index": {
          "description": "Consume the chunks of lazy ByteString with natural right fold",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "foldrChunks",
          "normalized": "(ByteString-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "bytestring",
          "partial": "Chunks",
          "signature": "(ByteString-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:foldrChunks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "groupBy",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e Bool) -\u003e ByteString -\u003e [ByteString]",
          "source": "src/Data-ByteString-Lazy.html#groupBy",
          "type": "function"
        },
        "index": {
          "description": "The groupBy function is the non-overloaded version of group",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "groupBy",
          "normalized": "(Word-\u003eWord-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "package": "bytestring",
          "partial": "By",
          "signature": "(Word-\u003eWord-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:groupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the first element of a ByteString, which must be non-empty.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "head",
          "package": "bytestring",
          "signature": "ByteString -\u003e Word8",
          "source": "src/Data-ByteString-Lazy.html#head",
          "type": "function"
        },
        "index": {
          "description": "Extract the first element of ByteString which must be non-empty",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "head",
          "normalized": "ByteString-\u003eWord",
          "package": "bytestring",
          "signature": "ByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(c)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e index (subscript) operator, starting from 0.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "index",
          "package": "bytestring",
          "signature": "ByteString -\u003e Int64 -\u003e Word8",
          "source": "src/Data-ByteString-Lazy.html#index",
          "type": "function"
        },
        "index": {
          "description": "ByteString index subscript operator starting from",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "index",
          "normalized": "ByteString-\u003eInt-\u003eWord",
          "package": "bytestring",
          "signature": "ByteString-\u003eInt-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and\n `intersperses' that byte between the elements of the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n It is analogous to the intersperse function on Lists.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "intersperse",
          "package": "bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy.html#intersperse",
          "type": "function"
        },
        "index": {
          "description": "The intersperse function takes Word8 and ByteString and intersperses that byte between the elements of the ByteString It is analogous to the intersperse function on Lists",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "intersperse",
          "normalized": "Word-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "Word-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eisSuffixOf\u003c/a\u003e\u003c/code\u003e function takes two ByteStrings and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e\n iff the first is a suffix of the second.\n\u003c/p\u003e\u003cp\u003eThe following holds:\n\u003c/p\u003e\u003cpre\u003e isSuffixOf x y == reverse x `isPrefixOf` reverse y\n\u003c/pre\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "isSuffixOf",
          "package": "bytestring",
          "signature": "ByteString -\u003e ByteString -\u003e Bool",
          "source": "src/Data-ByteString-Lazy.html#isSuffixOf",
          "type": "function"
        },
        "index": {
          "description": "The isSuffixOf function takes two ByteStrings and returns True iff the first is suffix of the second The following holds isSuffixOf reverse isPrefixOf reverse",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "isSuffixOf",
          "normalized": "ByteString-\u003eByteString-\u003eBool",
          "package": "bytestring",
          "partial": "Suffix Of",
          "signature": "ByteString-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:isSuffixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e f x\u003c/code\u003e returns an infinite ByteString of repeated applications\n of \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003ex\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e iterate f x == [x, f x, f (f x), ...]\n\u003c/pre\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "iterate",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Word8) -\u003e Word8 -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy.html#iterate",
          "type": "function"
        },
        "index": {
          "description": "iterate returns an infinite ByteString of repeated applications of to iterate",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "iterate",
          "normalized": "(Word-\u003eWord)-\u003eWord-\u003eByteString",
          "package": "bytestring",
          "signature": "(Word-\u003eWord)-\u003eWord-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:iterate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n\\\u003c/em\u003ec)/ Extract the last element of a ByteString, which must be finite\n and non-empty.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "last",
          "package": "bytestring",
          "signature": "ByteString -\u003e Word8",
          "source": "src/Data-ByteString-Lazy.html#last",
          "type": "function"
        },
        "index": {
          "description": "Extract the last element of ByteString which must be finite and non-empty",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "last",
          "normalized": "ByteString-\u003eWord",
          "package": "bytestring",
          "signature": "ByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef xs\u003c/code\u003e is the ByteString obtained by applying \u003ccode\u003ef\u003c/code\u003e to each\n element of \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "map",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Word8) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy.html#map",
          "type": "function"
        },
        "index": {
          "description": "map xs is the ByteString obtained by applying to each element of xs",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "map",
          "normalized": "(Word-\u003eWord)-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "(Word-\u003eWord)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumL\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a ByteString,\n passing an accumulating parameter from left to right, and returning a\n final value of this accumulator together with the new ByteString.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "mapAccumL",
          "package": "bytestring",
          "signature": "(acc -\u003e Word8 -\u003e (acc, Word8)) -\u003e acc -\u003e ByteString -\u003e (acc, ByteString)",
          "source": "src/Data-ByteString-Lazy.html#mapAccumL",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumL function behaves like combination of map and foldl it applies function to each element of ByteString passing an accumulating parameter from left to right and returning final value of this accumulator together with the new ByteString",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "mapAccumL",
          "normalized": "(a-\u003eWord-\u003e(a,Word))-\u003ea-\u003eByteString-\u003e(a,ByteString)",
          "package": "bytestring",
          "partial": "Accum",
          "signature": "(acc-\u003eWord-\u003e(acc,Word))-\u003eacc-\u003eByteString-\u003e(acc,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:mapAccumL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumR\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a ByteString,\n passing an accumulating parameter from right to left, and returning a\n final value of this accumulator together with the new ByteString.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "mapAccumR",
          "package": "bytestring",
          "signature": "(acc -\u003e Word8 -\u003e (acc, Word8)) -\u003e acc -\u003e ByteString -\u003e (acc, ByteString)",
          "source": "src/Data-ByteString-Lazy.html#mapAccumR",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumR function behaves like combination of map and foldr it applies function to each element of ByteString passing an accumulating parameter from right to left and returning final value of this accumulator together with the new ByteString",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "mapAccumR",
          "normalized": "(a-\u003eWord-\u003e(a,Word))-\u003ea-\u003eByteString-\u003e(a,ByteString)",
          "package": "bytestring",
          "partial": "Accum",
          "signature": "(acc-\u003eWord-\u003e(acc,Word))-\u003eacc-\u003eByteString-\u003e(acc,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:mapAccumR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e returns the maximum value from a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "maximum",
          "package": "bytestring",
          "signature": "ByteString -\u003e Word8",
          "source": "src/Data-ByteString-Lazy.html#maximum",
          "type": "function"
        },
        "index": {
          "description": "maximum returns the maximum value from ByteString",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "maximum",
          "normalized": "ByteString-\u003eWord",
          "package": "bytestring",
          "signature": "ByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e returns the minimum value from a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "minimum",
          "package": "bytestring",
          "signature": "ByteString -\u003e Word8",
          "source": "src/Data-ByteString-Lazy.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "minimum returns the minimum value from ByteString",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "minimum",
          "normalized": "ByteString-\u003eWord",
          "package": "bytestring",
          "signature": "ByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003enotElem\u003c/a\u003e\u003c/code\u003e is the inverse of \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "notElem",
          "package": "bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e Bool",
          "source": "src/Data-ByteString-Lazy.html#notElem",
          "type": "function"
        },
        "index": {
          "description": "notElem is the inverse of elem",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "notElem",
          "normalized": "Word-\u003eByteString-\u003eBool",
          "package": "bytestring",
          "partial": "Elem",
          "signature": "Word-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a '[Word8]' into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "pack",
          "package": "bytestring",
          "signature": "[Word8] -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy.html#pack",
          "type": "function"
        },
        "index": {
          "description": "Convert Word8 into ByteString",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "pack",
          "normalized": "[Word]-\u003eByteString",
          "package": "bytestring",
          "signature": "[Word]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003epartition\u003c/a\u003e\u003c/code\u003e function takes a predicate a ByteString and returns\n the pair of ByteStrings with elements which do and do not satisfy the\n predicate, respectively; i.e.,\n\u003c/p\u003e\u003cpre\u003e partition p bs == (filter p xs, filter (not . p) xs)\n\u003c/pre\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "partition",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-ByteString-Lazy.html#partition",
          "type": "function"
        },
        "index": {
          "description": "The partition function takes predicate ByteString and returns the pair of ByteStrings with elements which do and do not satisfy the predicate respectively i.e partition bs filter xs filter not xs",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "partition",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "bytestring",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.ByteString.Lazy.Char8.putStrLn instead. (Functions that rely on ASCII encodings belong in Data.ByteString.Lazy.Char8)\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eWrite a ByteString to stdout, appending a newline byte\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "putStrLn",
          "package": "bytestring",
          "signature": "ByteString -\u003e IO ()",
          "source": "src/Data-ByteString-Lazy.html#putStrLn",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use Data.ByteString.Lazy.Char8.putStrLn instead Functions that rely on ASCII encodings belong in Data.ByteString.Lazy.Char8 Write ByteString to stdout appending newline byte",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "putStrLn",
          "normalized": "ByteString-\u003eIO()",
          "package": "bytestring",
          "partial": "Str Ln",
          "signature": "ByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an entire file \u003cem\u003elazily\u003c/em\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n The Handle will be held open until EOF is encountered.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "readFile",
          "package": "bytestring",
          "signature": "FilePath -\u003e IO ByteString",
          "source": "src/Data-ByteString-Lazy.html#readFile",
          "type": "function"
        },
        "index": {
          "description": "Read an entire file lazily into ByteString The Handle will be held open until EOF is encountered",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO ByteString",
          "package": "bytestring",
          "partial": "File",
          "signature": "FilePath-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e is an infinite ByteString, with \u003ccode\u003ex\u003c/code\u003e the value of every\n element.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "repeat",
          "package": "bytestring",
          "signature": "Word8 -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy.html#repeat",
          "type": "function"
        },
        "index": {
          "description": "repeat is an infinite ByteString with the value of every element",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "repeat",
          "normalized": "Word-\u003eByteString",
          "package": "bytestring",
          "signature": "Word-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e n x\u003c/code\u003e is a ByteString of length \u003ccode\u003en\u003c/code\u003e with \u003ccode\u003ex\u003c/code\u003e\n the value of every element.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "replicate",
          "package": "bytestring",
          "signature": "Int64 -\u003e Word8 -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "replicate is ByteString of length with the value of every element",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "replicate",
          "normalized": "Int-\u003eWord-\u003eByteString",
          "package": "bytestring",
          "signature": "Int-\u003eWord-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but returns a list of successive\n reduced values from the left. This function will fuse.\n\u003c/p\u003e\u003cpre\u003e scanl f z [x1, x2, ...] == [z, z `f` x1, (z `f` x1) `f` x2, ...]\n\u003c/pre\u003e\u003cp\u003eNote that\n\u003c/p\u003e\u003cpre\u003e last (scanl f z xs) == foldl f z xs.\n\u003c/pre\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "scanl",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e Word8) -\u003e Word8 -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy.html#scanl",
          "type": "function"
        },
        "index": {
          "description": "scanl is similar to foldl but returns list of successive reduced values from the left This function will fuse scanl x1 x2 x1 x1 x2 Note that last scanl xs foldl xs",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "scanl",
          "normalized": "(Word-\u003eWord-\u003eWord)-\u003eWord-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "(Word-\u003eWord-\u003eWord)-\u003eWord-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:scanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "singleton",
          "package": "bytestring",
          "signature": "Word8 -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Convert Word8 into ByteString",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "singleton",
          "normalized": "Word-\u003eByteString",
          "package": "bytestring",
          "signature": "Word-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n\\\u003c/em\u003ec)/ Append a byte to the end of a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "snoc",
          "package": "bytestring",
          "signature": "ByteString -\u003e Word8 -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy.html#snoc",
          "type": "function"
        },
        "index": {
          "description": "Append byte to the end of ByteString",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "snoc",
          "normalized": "ByteString-\u003eWord-\u003eByteString",
          "package": "bytestring",
          "signature": "ByteString-\u003eWord-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e breaks the ByteString into two segments. It is\n equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p xs, \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p xs)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "span",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-ByteString-Lazy.html#span",
          "type": "function"
        },
        "index": {
          "description": "span xs breaks the ByteString into two segments It is equivalent to takeWhile xs dropWhile xs",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "span",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "bytestring",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Break a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into pieces separated by the byte\n argument, consuming the delimiter. I.e.\n\u003c/p\u003e\u003cpre\u003e split '\\n' \"a\\nb\\nd\\ne\" == [\"a\",\"b\",\"d\",\"e\"]\n split 'a'  \"aXaXaXa\"    == [\"\",\"X\",\"X\",\"X\",\"\"]\n split 'x'  \"x\"          == [\"\",\"\"]\n\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003e intercalate [c] . split c == id\n split == splitWith . (==)\n\u003c/pre\u003e\u003cp\u003eAs for all splitting functions in this library, this function does\n not copy the substrings, it just constructs new \u003ccode\u003eByteStrings\u003c/code\u003e that\n are slices of the original.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "split",
          "package": "bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e [ByteString]",
          "source": "src/Data-ByteString-Lazy.html#split",
          "type": "function"
        },
        "index": {
          "description": "Break ByteString into pieces separated by the byte argument consuming the delimiter I.e split nb nd ne split aXaXaXa split and intercalate split id split splitWith As for all splitting functions in this library this function does not copy the substrings it just constructs new ByteStrings that are slices of the original",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "split",
          "normalized": "Word-\u003eByteString-\u003e[ByteString]",
          "package": "bytestring",
          "signature": "Word-\u003eByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Splits a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into components delimited by\n separators, where the predicate returns True for a separator element.\n The resulting components do not contain the separators.  Two adjacent\n separators result in an empty component in the output.  eg.\n\u003c/p\u003e\u003cpre\u003e splitWith (=='a') \"aabbaca\" == [\"\",\"\",\"bb\",\"c\",\"\"]\n splitWith (=='a') []        == []\n\u003c/pre\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "splitWith",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e [ByteString]",
          "source": "src/Data-ByteString-Lazy.html#splitWith",
          "type": "function"
        },
        "index": {
          "description": "Splits ByteString into components delimited by separators where the predicate returns True for separator element The resulting components do not contain the separators Two adjacent separators result in an empty component in the output eg splitWith aabbaca bb splitWith",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "splitWith",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "package": "bytestring",
          "partial": "With",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:splitWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a ByteString \u003ccode\u003exs\u003c/code\u003e,\n returns the longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that\n satisfy \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "takeWhile",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "takeWhile applied to predicate and ByteString xs returns the longest prefix possibly empty of xs of elements that satisfy",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "takeWhile",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "partial": "While",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the head and tail of a ByteString, returning Nothing\n if it is empty.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "uncons",
          "package": "bytestring",
          "signature": "ByteString -\u003e Maybe (Word8, ByteString)",
          "source": "src/Data-ByteString-Lazy.html#uncons",
          "type": "function"
        },
        "index": {
          "description": "Extract the head and tail of ByteString returning Nothing if it is empty",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "uncons",
          "normalized": "ByteString-\u003eMaybe(Word,ByteString)",
          "package": "bytestring",
          "signature": "ByteString-\u003eMaybe(Word,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e function is analogous to the List 'unfoldr'.\n \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e builds a ByteString from a seed value.  The function takes\n the element and returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if it is done producing the\n ByteString or returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(a,b)\u003c/code\u003e, in which case, \u003ccode\u003ea\u003c/code\u003e is a\n prepending to the ByteString and \u003ccode\u003eb\u003c/code\u003e is used as the next element in a\n recursive call.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "unfoldr",
          "package": "bytestring",
          "signature": "(a -\u003e Maybe (Word8, a)) -\u003e a -\u003e ByteString",
          "source": "src/Data-ByteString-Lazy.html#unfoldr",
          "type": "function"
        },
        "index": {
          "description": "The unfoldr function is analogous to the List unfoldr unfoldr builds ByteString from seed value The function takes the element and returns Nothing if it is done producing the ByteString or returns Just in which case is prepending to the ByteString and is used as the next element in recursive call",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "unfoldr",
          "normalized": "(a-\u003eMaybe(Word,a))-\u003ea-\u003eByteString",
          "package": "bytestring",
          "signature": "(a-\u003eMaybe(Word,a))-\u003ea-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:unfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Converts a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a '[Word8]'.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "unpack",
          "package": "bytestring",
          "signature": "ByteString -\u003e [Word8]",
          "source": "src/Data-ByteString-Lazy.html#unpack",
          "type": "function"
        },
        "index": {
          "description": "Converts ByteString to Word8",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "unpack",
          "normalized": "ByteString-\u003e[Word]",
          "package": "bytestring",
          "signature": "ByteString-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:unpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n\\\u003c/em\u003ec)/ Extract the \u003ccode\u003e\u003ca\u003einit\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e of a ByteString, returning Nothing\n if it is empty.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e It is no faster than using \u003ccode\u003e\u003ca\u003einit\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "unsnoc",
          "package": "bytestring",
          "signature": "ByteString -\u003e Maybe (ByteString, Word8)",
          "source": "src/Data-ByteString-Lazy.html#unsnoc",
          "type": "function"
        },
        "index": {
          "description": "Extract the init and last of ByteString returning Nothing if it is empty It is no faster than using init and last",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "unsnoc",
          "normalized": "ByteString-\u003eMaybe(ByteString,Word)",
          "package": "bytestring",
          "signature": "ByteString-\u003eMaybe(ByteString,Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:unsnoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e transforms a list of pairs of bytes into a pair of\n ByteStrings. Note that this performs two \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e operations.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "unzip",
          "package": "bytestring",
          "signature": "[(Word8, Word8)] -\u003e (ByteString, ByteString)",
          "source": "src/Data-ByteString-Lazy.html#unzip",
          "type": "function"
        },
        "index": {
          "description": "unzip transforms list of pairs of bytes into pair of ByteStrings Note that this performs two pack operations",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "unzip",
          "normalized": "[(Word,Word)]-\u003e(ByteString,ByteString)",
          "package": "bytestring",
          "signature": "[(Word,Word)]-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "writeFile",
          "package": "bytestring",
          "signature": "FilePath -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-ByteString-Lazy.html#writeFile",
          "type": "function"
        },
        "index": {
          "description": "Write ByteString to file",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "writeFile",
          "normalized": "FilePath-\u003eByteString-\u003eIO()",
          "package": "bytestring",
          "partial": "File",
          "signature": "FilePath-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:writeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e takes two ByteStrings and returns a list of\n corresponding pairs of bytes. If one input ByteString is short,\n excess elements of the longer ByteString are discarded. This is\n equivalent to a pair of \u003ccode\u003e\u003ca\u003eunpack\u003c/a\u003e\u003c/code\u003e operations.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "zip",
          "package": "bytestring",
          "signature": "ByteString -\u003e ByteString -\u003e [(Word8, Word8)]",
          "source": "src/Data-ByteString-Lazy.html#zip",
          "type": "function"
        },
        "index": {
          "description": "zip takes two ByteStrings and returns list of corresponding pairs of bytes If one input ByteString is short excess elements of the longer ByteString are discarded This is equivalent to pair of unpack operations",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "zip",
          "normalized": "ByteString-\u003eByteString-\u003e[(Word,Word)]",
          "package": "bytestring",
          "signature": "ByteString-\u003eByteString-\u003e[(Word,Word)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e generalises \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e by zipping with the function given as\n the first argument, instead of a tupling function.  For example,\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e (+)\u003c/code\u003e is applied to two ByteStrings to produce the list of\n corresponding sums.\n\u003c/p\u003e",
          "module": "Data.ByteString.Lazy",
          "name": "zipWith",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e a) -\u003e ByteString -\u003e ByteString -\u003e [a]",
          "source": "src/Data-ByteString-Lazy.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "zipWith generalises zip by zipping with the function given as the first argument instead of tupling function For example zipWith is applied to two ByteStrings to produce the list of corresponding sums",
          "hierarchy": "Data ByteString Lazy",
          "module": "Data.ByteString.Lazy",
          "name": "zipWith",
          "normalized": "(Word-\u003eWord-\u003ea)-\u003eByteString-\u003eByteString-\u003e[a]",
          "package": "bytestring",
          "partial": "With",
          "signature": "(Word-\u003eWord-\u003ea)-\u003eByteString-\u003eByteString-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Lazy.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA compact representation suitable for storing short byte strings in memory.\n\u003c/p\u003e\u003cp\u003eIn typical use cases it can be imported alongside \u003ca\u003eData.ByteString\u003c/a\u003e, e.g.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.ByteString       as B\n import qualified Data.ByteString.Short as B\n          (ShortByteString, toShort, fromShort)\n\u003c/pre\u003e\u003cp\u003eOther \u003ccode\u003e\u003ca\u003eShortByteString\u003c/a\u003e\u003c/code\u003e operations clash with \u003ca\u003eData.ByteString\u003c/a\u003e or \u003ca\u003ePrelude\u003c/a\u003e\n functions however, so they should be imported \u003ccode\u003equalified\u003c/code\u003e with a different\n alias e.g.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.ByteString.Short as B.Short\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.ByteString.Short",
          "name": "Short",
          "package": "bytestring",
          "source": "src/Data-ByteString-Short.html",
          "type": "module"
        },
        "index": {
          "description": "compact representation suitable for storing short byte strings in memory In typical use cases it can be imported alongside Data.ByteString e.g import qualified Data.ByteString as import qualified Data.ByteString.Short as ShortByteString toShort fromShort Other ShortByteString operations clash with Data.ByteString or Prelude functions however so they should be imported qualified with different alias e.g import qualified Data.ByteString.Short as B.Short",
          "hierarchy": "Data ByteString Short",
          "module": "Data.ByteString.Short",
          "name": "Short",
          "package": "bytestring",
          "partial": "Short",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Short.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA compact representation of a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e vector.\n\u003c/p\u003e\u003cp\u003eIt has a lower memory overhead than a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and and does not\n contribute to heap fragmentation. It can be converted to or from a\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e (at the cost of copying the string data). It supports very few\n other operations.\n\u003c/p\u003e\u003cp\u003eIt is suitable for use as an internal representation for code that needs\n to keep many short strings in memory, but it \u003cem\u003eshould not\u003c/em\u003e be used as an\n interchange type. That is, it should not generally be used in public APIs.\n The \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e type is usually more suitable for use in interfaces; it is\n more flexible and it supports a wide range of operations.\n\u003c/p\u003e",
          "module": "Data.ByteString.Short",
          "name": "ShortByteString",
          "package": "bytestring",
          "source": "src/Data-ByteString-Short-Internal.html#ShortByteString",
          "type": "data"
        },
        "index": {
          "description": "compact representation of Word8 vector It has lower memory overhead than ByteString and and does not contribute to heap fragmentation It can be converted to or from ByteString at the cost of copying the string data It supports very few other operations It is suitable for use as an internal representation for code that needs to keep many short strings in memory but it should not be used as an interchange type That is it should not generally be used in public APIs The ByteString type is usually more suitable for use in interfaces it is more flexible and it supports wide range of operations",
          "hierarchy": "Data ByteString Short",
          "module": "Data.ByteString.Short",
          "name": "ShortByteString",
          "package": "bytestring",
          "partial": "Short Byte String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Short.html#t:ShortByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The empty \u003ccode\u003e\u003ca\u003eShortByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Short",
          "name": "empty",
          "package": "bytestring",
          "signature": "ShortByteString",
          "source": "src/Data-ByteString-Short-Internal.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty ShortByteString",
          "hierarchy": "Data ByteString Short",
          "module": "Data.ByteString.Short",
          "name": "empty",
          "package": "bytestring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Short.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert a \u003ccode\u003e\u003ca\u003eShortByteString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Short",
          "name": "fromShort",
          "package": "bytestring",
          "signature": "ShortByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Short-Internal.html#fromShort",
          "type": "function"
        },
        "index": {
          "description": "Convert ShortByteString into ByteString",
          "hierarchy": "Data ByteString Short",
          "module": "Data.ByteString.Short",
          "name": "fromShort",
          "normalized": "ShortByteString-\u003eByteString",
          "package": "bytestring",
          "partial": "Short",
          "signature": "ShortByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Short.html#v:fromShort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eShortByteString\u003c/a\u003e\u003c/code\u003e index (subscript) operator, starting from 0. \n\u003c/p\u003e",
          "module": "Data.ByteString.Short",
          "name": "index",
          "package": "bytestring",
          "signature": "ShortByteString -\u003e Int -\u003e Word8",
          "source": "src/Data-ByteString-Short-Internal.html#index",
          "type": "function"
        },
        "index": {
          "description": "ShortByteString index subscript operator starting from",
          "hierarchy": "Data ByteString Short",
          "module": "Data.ByteString.Short",
          "name": "index",
          "normalized": "ShortByteString-\u003eInt-\u003eWord",
          "package": "bytestring",
          "signature": "ShortByteString-\u003eInt-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Short.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e The length of a \u003ccode\u003e\u003ca\u003eShortByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Short",
          "name": "length",
          "package": "bytestring",
          "signature": "ShortByteString -\u003e Int",
          "source": "src/Data-ByteString-Short-Internal.html#length",
          "type": "function"
        },
        "index": {
          "description": "The length of ShortByteString",
          "hierarchy": "Data ByteString Short",
          "module": "Data.ByteString.Short",
          "name": "length",
          "normalized": "ShortByteString-\u003eInt",
          "package": "bytestring",
          "signature": "ShortByteString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Short.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Test whether a \u003ccode\u003e\u003ca\u003eShortByteString\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
          "module": "Data.ByteString.Short",
          "name": "null",
          "package": "bytestring",
          "signature": "ShortByteString -\u003e Bool",
          "source": "src/Data-ByteString-Short-Internal.html#null",
          "type": "function"
        },
        "index": {
          "description": "Test whether ShortByteString is empty",
          "hierarchy": "Data ByteString Short",
          "module": "Data.ByteString.Short",
          "name": "null",
          "normalized": "ShortByteString-\u003eBool",
          "package": "bytestring",
          "signature": "ShortByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Short.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert a list into a \u003ccode\u003e\u003ca\u003eShortByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ByteString.Short",
          "name": "pack",
          "package": "bytestring",
          "signature": "[Word8] -\u003e ShortByteString",
          "source": "src/Data-ByteString-Short-Internal.html#pack",
          "type": "function"
        },
        "index": {
          "description": "Convert list into ShortByteString",
          "hierarchy": "Data ByteString Short",
          "module": "Data.ByteString.Short",
          "name": "pack",
          "normalized": "[Word]-\u003eShortByteString",
          "package": "bytestring",
          "signature": "[Word]-\u003eShortByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Short.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eShortByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis makes a copy, so does not retain the input string.\n\u003c/p\u003e",
          "module": "Data.ByteString.Short",
          "name": "toShort",
          "package": "bytestring",
          "signature": "ByteString -\u003e ShortByteString",
          "source": "src/Data-ByteString-Short-Internal.html#toShort",
          "type": "function"
        },
        "index": {
          "description": "Convert ByteString into ShortByteString This makes copy so does not retain the input string",
          "hierarchy": "Data ByteString Short",
          "module": "Data.ByteString.Short",
          "name": "toShort",
          "normalized": "ByteString-\u003eShortByteString",
          "package": "bytestring",
          "partial": "Short",
          "signature": "ByteString-\u003eShortByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Short.html#v:toShort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert a \u003ccode\u003e\u003ca\u003eShortByteString\u003c/a\u003e\u003c/code\u003e into a list.\n\u003c/p\u003e",
          "module": "Data.ByteString.Short",
          "name": "unpack",
          "package": "bytestring",
          "signature": "ShortByteString -\u003e [Word8]",
          "source": "src/Data-ByteString-Short-Internal.html#unpack",
          "type": "function"
        },
        "index": {
          "description": "Convert ShortByteString into list",
          "hierarchy": "Data ByteString Short",
          "module": "Data.ByteString.Short",
          "name": "unpack",
          "normalized": "ShortByteString-\u003e[Word]",
          "package": "bytestring",
          "signature": "ShortByteString-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Short.html#v:unpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing unsafe \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e operations.\n\u003c/p\u003e\u003cp\u003eWhile these functions have a stable API and you may use these functions in\n applications, do carefully consider the documented pre-conditions;\n incorrect use can break referential transparency or worse.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ByteString.Unsafe",
          "name": "Unsafe",
          "package": "bytestring",
          "source": "src/Data-ByteString-Unsafe.html",
          "type": "module"
        },
        "index": {
          "description": "module containing unsafe ByteString operations While these functions have stable API and you may use these functions in applications do carefully consider the documented pre-conditions incorrect use can break referential transparency or worse",
          "hierarchy": "Data ByteString Unsafe",
          "module": "Data.ByteString.Unsafe",
          "name": "Unsafe",
          "package": "bytestring",
          "partial": "Unsafe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Unsafe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variety of \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e which omits the checks on \u003ccode\u003en\u003c/code\u003e so there is an\n obligation on the programmer to provide a proof that \u003ccode\u003e0 \u003c= n \u003c= \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafeDrop",
          "package": "bytestring",
          "signature": "Int -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Unsafe.html#unsafeDrop",
          "type": "function"
        },
        "index": {
          "description": "variety of drop which omits the checks on so there is an obligation on the programmer to provide proof that length xs",
          "hierarchy": "Data ByteString Unsafe",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafeDrop",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "partial": "Drop",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Unsafe.html#v:unsafeDrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplicitly run the finaliser associated with a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n References to this value after finalisation may generate invalid memory\n references.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunsafe\u003c/em\u003e, as there may be other\n \u003ccode\u003eByteStrings\u003c/code\u003e referring to the same underlying pages. If you use\n this, you need to have a proof of some kind that all \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es\n ever generated from the underlying byte array are no longer live.\n\u003c/p\u003e",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafeFinalize",
          "package": "bytestring",
          "signature": "ByteString -\u003e IO ()",
          "source": "src/Data-ByteString-Unsafe.html#unsafeFinalize",
          "type": "function"
        },
        "index": {
          "description": "Explicitly run the finaliser associated with ByteString References to this value after finalisation may generate invalid memory references This function is unsafe as there may be other ByteStrings referring to the same underlying pages If you use this you need to have proof of some kind that all ByteString ever generated from the underlying byte array are no longer live",
          "hierarchy": "Data ByteString Unsafe",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafeFinalize",
          "normalized": "ByteString-\u003eIO()",
          "package": "bytestring",
          "partial": "Finalize",
          "signature": "ByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Unsafe.html#v:unsafeFinalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variety of \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e for non-empty ByteStrings. \u003ccode\u003e\u003ca\u003eunsafeHead\u003c/a\u003e\u003c/code\u003e omits the\n check for the empty case, so there is an obligation on the programmer\n to provide a proof that the ByteString is non-empty.\n\u003c/p\u003e",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafeHead",
          "package": "bytestring",
          "signature": "ByteString -\u003e Word8",
          "source": "src/Data-ByteString-Unsafe.html#unsafeHead",
          "type": "function"
        },
        "index": {
          "description": "variety of head for non-empty ByteStrings unsafeHead omits the check for the empty case so there is an obligation on the programmer to provide proof that the ByteString is non-empty",
          "hierarchy": "Data ByteString Unsafe",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafeHead",
          "normalized": "ByteString-\u003eWord",
          "package": "bytestring",
          "partial": "Head",
          "signature": "ByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Unsafe.html#v:unsafeHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafe \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e index (subscript) operator, starting from 0, returning a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e\n This omits the bounds check, which means there is an accompanying\n obligation on the programmer to ensure the bounds are checked in some\n other way.\n\u003c/p\u003e",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafeIndex",
          "package": "bytestring",
          "signature": "ByteString -\u003e Int -\u003e Word8",
          "source": "src/Data-ByteString-Unsafe.html#unsafeIndex",
          "type": "function"
        },
        "index": {
          "description": "Unsafe ByteString index subscript operator starting from returning Word8 This omits the bounds check which means there is an accompanying obligation on the programmer to ensure the bounds are checked in some other way",
          "hierarchy": "Data ByteString Unsafe",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafeIndex",
          "normalized": "ByteString-\u003eInt-\u003eWord",
          "package": "bytestring",
          "partial": "Index",
          "signature": "ByteString-\u003eInt-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Unsafe.html#v:unsafeIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variety of \u003ccode\u003e\u003ca\u003einit\u003c/a\u003e\u003c/code\u003e for non-empty ByteStrings. \u003ccode\u003e\u003ca\u003eunsafeInit\u003c/a\u003e\u003c/code\u003e omits the\n check for the empty case. As with \u003ccode\u003e\u003ca\u003eunsafeHead\u003c/a\u003e\u003c/code\u003e, the programmer must\n provide a separate proof that the ByteString is non-empty.\n\u003c/p\u003e",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafeInit",
          "package": "bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Unsafe.html#unsafeInit",
          "type": "function"
        },
        "index": {
          "description": "variety of init for non-empty ByteStrings unsafeInit omits the check for the empty case As with unsafeHead the programmer must provide separate proof that the ByteString is non-empty",
          "hierarchy": "Data ByteString Unsafe",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafeInit",
          "normalized": "ByteString-\u003eByteString",
          "package": "bytestring",
          "partial": "Init",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Unsafe.html#v:unsafeInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variety of \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e for non-empty ByteStrings. \u003ccode\u003e\u003ca\u003eunsafeLast\u003c/a\u003e\u003c/code\u003e omits the\n check for the empty case. As with \u003ccode\u003e\u003ca\u003eunsafeHead\u003c/a\u003e\u003c/code\u003e, the programmer must\n provide a separate proof that the ByteString is non-empty.\n\u003c/p\u003e",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafeLast",
          "package": "bytestring",
          "signature": "ByteString -\u003e Word8",
          "source": "src/Data-ByteString-Unsafe.html#unsafeLast",
          "type": "function"
        },
        "index": {
          "description": "variety of last for non-empty ByteStrings unsafeLast omits the check for the empty case As with unsafeHead the programmer must provide separate proof that the ByteString is non-empty",
          "hierarchy": "Data ByteString Unsafe",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafeLast",
          "normalized": "ByteString-\u003eWord",
          "package": "bytestring",
          "partial": "Last",
          "signature": "ByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Unsafe.html#v:unsafeLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Pack a null-terminated sequence of bytes, pointed to by an\n Addr# (an arbitrary machine address assumed to point outside the\n garbage-collected heap) into a \u003ccode\u003eByteString\u003c/code\u003e. A much faster way to\n create an Addr# is with an unboxed string literal, than to pack a\n boxed string. A unboxed string literal is compiled to a static \u003ccode\u003echar\n []\u003c/code\u003e by GHC. Establishing the length of the string requires a call to\n \u003ccode\u003estrlen(3)\u003c/code\u003e, so the Addr# must point to a null-terminated buffer (as\n is the case with \u003ca\u003estring\u003c/a\u003e# literals in GHC). Use \u003ccode\u003eunsafePackAddressLen\u003c/code\u003e\n if you know the length of the string statically.\n\u003c/p\u003e\u003cp\u003eAn example:\n\u003c/p\u003e\u003cpre\u003e literalFS = unsafePackAddress \"literal\"#\n\u003c/pre\u003e\u003cp\u003eThis function is \u003cem\u003eunsafe\u003c/em\u003e. If you modify the buffer pointed to by the\n original Addr# this modification will be reflected in the resulting\n \u003ccode\u003eByteString\u003c/code\u003e, breaking referential transparency.\n\u003c/p\u003e\u003cp\u003eNote this also won't work if your Addr# has embedded '\\0' characters in\n the string, as \u003ccode\u003estrlen\u003c/code\u003e will return too short a length.\n\u003c/p\u003e",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafePackAddress",
          "package": "bytestring",
          "signature": "Addr# -\u003e IO ByteString",
          "source": "src/Data-ByteString-Internal.html#unsafePackAddress",
          "type": "function"
        },
        "index": {
          "description": "Pack null-terminated sequence of bytes pointed to by an Addr an arbitrary machine address assumed to point outside the garbage-collected heap into ByteString much faster way to create an Addr is with an unboxed string literal than to pack boxed string unboxed string literal is compiled to static char by GHC Establishing the length of the string requires call to strlen so the Addr must point to null-terminated buffer as is the case with string literals in GHC Use unsafePackAddressLen if you know the length of the string statically An example literalFS unsafePackAddress literal This function is unsafe If you modify the buffer pointed to by the original Addr this modification will be reflected in the resulting ByteString breaking referential transparency Note this also won work if your Addr has embedded characters in the string as strlen will return too short length",
          "hierarchy": "Data ByteString Unsafe",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafePackAddress",
          "normalized": "Addr #-\u003eIO ByteString",
          "package": "bytestring",
          "partial": "Pack Address",
          "signature": "Addr #-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Unsafe.html#v:unsafePackAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eunsafePackAddressLen\u003c/a\u003e\u003c/code\u003e provides constant-time construction of\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es, which is ideal for string literals. It packs a sequence\n of bytes into a \u003ccode\u003eByteString\u003c/code\u003e, given a raw \u003ccode\u003e\u003ca\u003eAddr#\u003c/a\u003e\u003c/code\u003e to the string, and\n the length of the string.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunsafe\u003c/em\u003e in two ways:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the length argument is assumed to be correct. If the length\n argument is incorrect, it is possible to overstep the end of the\n byte array.\n\u003c/li\u003e\u003cli\u003e if the underying Addr# is later modified, this change will be\n reflected in resulting \u003ccode\u003eByteString\u003c/code\u003e, breaking referential\n transparency.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf in doubt, don't use this function.\n\u003c/p\u003e",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafePackAddressLen",
          "package": "bytestring",
          "signature": "Int -\u003e Addr# -\u003e IO ByteString",
          "source": "src/Data-ByteString-Unsafe.html#unsafePackAddressLen",
          "type": "function"
        },
        "index": {
          "description": "unsafePackAddressLen provides constant-time construction of ByteString which is ideal for string literals It packs sequence of bytes into ByteString given raw Addr to the string and the length of the string This function is unsafe in two ways the length argument is assumed to be correct If the length argument is incorrect it is possible to overstep the end of the byte array if the underying Addr is later modified this change will be reflected in resulting ByteString breaking referential transparency If in doubt don use this function",
          "hierarchy": "Data ByteString Unsafe",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafePackAddressLen",
          "normalized": "Int-\u003eAddr #-\u003eIO ByteString",
          "package": "bytestring",
          "partial": "Pack Address Len",
          "signature": "Int-\u003eAddr #-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Unsafe.html#v:unsafePackAddressLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Build a \u003ccode\u003eByteString\u003c/code\u003e from a \u003ccode\u003eCString\u003c/code\u003e. This value will have \u003cem\u003eno\u003c/em\u003e\n finalizer associated to it, and will not be garbage collected by\n Haskell. The ByteString length is calculated using \u003cem\u003estrlen(3)\u003c/em\u003e,\n and thus the complexity is a \u003cem\u003eO(n)\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunsafe\u003c/em\u003e. If the \u003ccode\u003eCString\u003c/code\u003e is later modified, this\n change will be reflected in the resulting \u003ccode\u003eByteString\u003c/code\u003e, breaking\n referential transparency.\n\u003c/p\u003e",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafePackCString",
          "package": "bytestring",
          "signature": "CString -\u003e IO ByteString",
          "source": "src/Data-ByteString-Unsafe.html#unsafePackCString",
          "type": "function"
        },
        "index": {
          "description": "Build ByteString from CString This value will have no finalizer associated to it and will not be garbage collected by Haskell The ByteString length is calculated using strlen and thus the complexity is This function is unsafe If the CString is later modified this change will be reflected in the resulting ByteString breaking referential transparency",
          "hierarchy": "Data ByteString Unsafe",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafePackCString",
          "normalized": "CString-\u003eIO ByteString",
          "package": "bytestring",
          "partial": "Pack CString",
          "signature": "CString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Unsafe.html#v:unsafePackCString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Construct a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e given a Ptr Word8 to a buffer, a\n length, and an IO action representing a finalizer. This function is\n not available on Hugs.\n\u003c/p\u003e\u003cp\u003eThis function is \u003cem\u003eunsafe\u003c/em\u003e, it is possible to break referential\n transparency by modifying the underlying buffer pointed to by the\n first argument. Any changes to the original buffer will be reflected\n in the resulting \u003ccode\u003eByteString\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafePackCStringFinalizer",
          "package": "bytestring",
          "signature": "Ptr Word8 -\u003e Int -\u003e IO () -\u003e IO ByteString",
          "source": "src/Data-ByteString-Unsafe.html#unsafePackCStringFinalizer",
          "type": "function"
        },
        "index": {
          "description": "Construct ByteString given Ptr Word8 to buffer length and an IO action representing finalizer This function is not available on Hugs This function is unsafe it is possible to break referential transparency by modifying the underlying buffer pointed to by the first argument Any changes to the original buffer will be reflected in the resulting ByteString",
          "hierarchy": "Data ByteString Unsafe",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafePackCStringFinalizer",
          "normalized": "Ptr Word-\u003eInt-\u003eIO()-\u003eIO ByteString",
          "package": "bytestring",
          "partial": "Pack CString Finalizer",
          "signature": "Ptr Word-\u003eInt-\u003eIO()-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Unsafe.html#v:unsafePackCStringFinalizer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Build a \u003ccode\u003eByteString\u003c/code\u003e from a \u003ccode\u003eCStringLen\u003c/code\u003e. This value will\n have \u003cem\u003eno\u003c/em\u003e finalizer associated with it, and will not be garbage\n collected by Haskell. This operation has \u003cem\u003eO(1)\u003c/em\u003e complexity as we\n already know the final size, so no \u003cem\u003estrlen(3)\u003c/em\u003e is required.\n\u003c/p\u003e\u003cp\u003eThis funtion is \u003cem\u003eunsafe\u003c/em\u003e. If the original \u003ccode\u003eCStringLen\u003c/code\u003e is later\n modified, this change will be reflected in the resulting \u003ccode\u003eByteString\u003c/code\u003e,\n breaking referential transparency.\n\u003c/p\u003e",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafePackCStringLen",
          "package": "bytestring",
          "signature": "CStringLen -\u003e IO ByteString",
          "source": "src/Data-ByteString-Unsafe.html#unsafePackCStringLen",
          "type": "function"
        },
        "index": {
          "description": "Build ByteString from CStringLen This value will have no finalizer associated with it and will not be garbage collected by Haskell This operation has complexity as we already know the final size so no strlen is required This funtion is unsafe If the original CStringLen is later modified this change will be reflected in the resulting ByteString breaking referential transparency",
          "hierarchy": "Data ByteString Unsafe",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafePackCStringLen",
          "normalized": "CStringLen-\u003eIO ByteString",
          "package": "bytestring",
          "partial": "Pack CString Len",
          "signature": "CStringLen-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Unsafe.html#v:unsafePackCStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Build a \u003ccode\u003eByteString\u003c/code\u003e from a malloced \u003ccode\u003eCString\u003c/code\u003e. This value will\n have a \u003ccode\u003efree(3)\u003c/code\u003e finalizer associated to it.\n\u003c/p\u003e\u003cp\u003eThis funtion is \u003cem\u003eunsafe\u003c/em\u003e. If the original \u003ccode\u003eCString\u003c/code\u003e is later\n modified, this change will be reflected in the resulting \u003ccode\u003eByteString\u003c/code\u003e,\n breaking referential transparency.\n\u003c/p\u003e\u003cp\u003eThis function is also unsafe if you call its finalizer twice,\n which will result in a \u003cem\u003edouble free\u003c/em\u003e error, or if you pass it\n a CString not allocated with \u003ccode\u003emalloc\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafePackMallocCString",
          "package": "bytestring",
          "signature": "CString -\u003e IO ByteString",
          "source": "src/Data-ByteString-Unsafe.html#unsafePackMallocCString",
          "type": "function"
        },
        "index": {
          "description": "Build ByteString from malloced CString This value will have free finalizer associated to it This funtion is unsafe If the original CString is later modified this change will be reflected in the resulting ByteString breaking referential transparency This function is also unsafe if you call its finalizer twice which will result in double free error or if you pass it CString not allocated with malloc",
          "hierarchy": "Data ByteString Unsafe",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafePackMallocCString",
          "normalized": "CString-\u003eIO ByteString",
          "package": "bytestring",
          "partial": "Pack Malloc CString",
          "signature": "CString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Unsafe.html#v:unsafePackMallocCString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Build a \u003ccode\u003eByteString\u003c/code\u003e from a malloced \u003ccode\u003eCStringLen\u003c/code\u003e. This\n value will have a \u003ccode\u003efree(3)\u003c/code\u003e finalizer associated to it.\n\u003c/p\u003e\u003cp\u003eThis funtion is \u003cem\u003eunsafe\u003c/em\u003e. If the original \u003ccode\u003eCString\u003c/code\u003e is later\n modified, this change will be reflected in the resulting \u003ccode\u003eByteString\u003c/code\u003e,\n breaking referential transparency.\n\u003c/p\u003e\u003cp\u003eThis function is also unsafe if you call its finalizer twice,\n which will result in a \u003cem\u003edouble free\u003c/em\u003e error, or if you pass it\n a CString not allocated with \u003ccode\u003emalloc\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafePackMallocCStringLen",
          "package": "bytestring",
          "signature": "CStringLen -\u003e IO ByteString",
          "source": "src/Data-ByteString-Unsafe.html#unsafePackMallocCStringLen",
          "type": "function"
        },
        "index": {
          "description": "Build ByteString from malloced CStringLen This value will have free finalizer associated to it This funtion is unsafe If the original CString is later modified this change will be reflected in the resulting ByteString breaking referential transparency This function is also unsafe if you call its finalizer twice which will result in double free error or if you pass it CString not allocated with malloc",
          "hierarchy": "Data ByteString Unsafe",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafePackMallocCStringLen",
          "normalized": "CStringLen-\u003eIO ByteString",
          "package": "bytestring",
          "partial": "Pack Malloc CString Len",
          "signature": "CStringLen-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Unsafe.html#v:unsafePackMallocCStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variety of \u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e for non-empty ByteStrings. \u003ccode\u003e\u003ca\u003eunsafeTail\u003c/a\u003e\u003c/code\u003e omits the\n check for the empty case. As with \u003ccode\u003e\u003ca\u003eunsafeHead\u003c/a\u003e\u003c/code\u003e, the programmer must\n provide a separate proof that the ByteString is non-empty.\n\u003c/p\u003e",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafeTail",
          "package": "bytestring",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Unsafe.html#unsafeTail",
          "type": "function"
        },
        "index": {
          "description": "variety of tail for non-empty ByteStrings unsafeTail omits the check for the empty case As with unsafeHead the programmer must provide separate proof that the ByteString is non-empty",
          "hierarchy": "Data ByteString Unsafe",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafeTail",
          "normalized": "ByteString-\u003eByteString",
          "package": "bytestring",
          "partial": "Tail",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Unsafe.html#v:unsafeTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variety of \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e which omits the checks on \u003ccode\u003en\u003c/code\u003e so there is an\n obligation on the programmer to provide a proof that \u003ccode\u003e0 \u003c= n \u003c= \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafeTake",
          "package": "bytestring",
          "signature": "Int -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString-Unsafe.html#unsafeTake",
          "type": "function"
        },
        "index": {
          "description": "variety of take which omits the checks on so there is an obligation on the programmer to provide proof that length xs",
          "hierarchy": "Data ByteString Unsafe",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafeTake",
          "normalized": "Int-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "partial": "Take",
          "signature": "Int-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Unsafe.html#v:unsafeTake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1) construction\u003c/em\u003e Use a \u003ccode\u003eByteString\u003c/code\u003e with a function requiring a\n \u003ccode\u003eCString\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function does zero copying, and merely unwraps a \u003ccode\u003eByteString\u003c/code\u003e to\n appear as a \u003ccode\u003eCString\u003c/code\u003e. It is \u003cem\u003eunsafe\u003c/em\u003e in two ways:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e After calling this function the \u003ccode\u003eCString\u003c/code\u003e shares the underlying\n byte buffer with the original \u003ccode\u003eByteString\u003c/code\u003e. Thus modifying the\n \u003ccode\u003eCString\u003c/code\u003e, either in C, or using poke, will cause the contents of the\n \u003ccode\u003eByteString\u003c/code\u003e to change, breaking referential transparency. Other\n \u003ccode\u003eByteStrings\u003c/code\u003e created by sharing (such as those produced via \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e) will also reflect these changes. Modifying the \u003ccode\u003eCString\u003c/code\u003e\n will break referential transparency. To avoid this, use\n \u003ccode\u003euseAsCString\u003c/code\u003e, which makes a copy of the original \u003ccode\u003eByteString\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eCStrings\u003c/code\u003e are often passed to functions that require them to be\n null-terminated. If the original \u003ccode\u003eByteString\u003c/code\u003e wasn't null terminated,\n neither will the \u003ccode\u003eCString\u003c/code\u003e be. It is the programmers responsibility\n to guarantee that the \u003ccode\u003eByteString\u003c/code\u003e is indeed null terminated. If in\n doubt, use \u003ccode\u003euseAsCString\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafeUseAsCString",
          "package": "bytestring",
          "signature": "ByteString -\u003e (CString -\u003e IO a) -\u003e IO a",
          "source": "src/Data-ByteString-Unsafe.html#unsafeUseAsCString",
          "type": "function"
        },
        "index": {
          "description": "construction Use ByteString with function requiring CString This function does zero copying and merely unwraps ByteString to appear as CString It is unsafe in two ways After calling this function the CString shares the underlying byte buffer with the original ByteString Thus modifying the CString either in or using poke will cause the contents of the ByteString to change breaking referential transparency Other ByteStrings created by sharing such as those produced via take or drop will also reflect these changes Modifying the CString will break referential transparency To avoid this use useAsCString which makes copy of the original ByteString CStrings are often passed to functions that require them to be null-terminated If the original ByteString wasn null terminated neither will the CString be It is the programmers responsibility to guarantee that the ByteString is indeed null terminated If in doubt use useAsCString",
          "hierarchy": "Data ByteString Unsafe",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafeUseAsCString",
          "normalized": "ByteString-\u003e(CString-\u003eIO a)-\u003eIO a",
          "package": "bytestring",
          "partial": "Use As CString",
          "signature": "ByteString-\u003e(CString-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Unsafe.html#v:unsafeUseAsCString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1) construction\u003c/em\u003e Use a \u003ccode\u003eByteString\u003c/code\u003e with a function requiring a\n \u003ccode\u003eCStringLen\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function does zero copying, and merely unwraps a \u003ccode\u003eByteString\u003c/code\u003e to\n appear as a \u003ccode\u003eCStringLen\u003c/code\u003e. It is \u003cem\u003eunsafe\u003c/em\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e After calling this function the \u003ccode\u003eCStringLen\u003c/code\u003e shares the underlying\n byte buffer with the original \u003ccode\u003eByteString\u003c/code\u003e. Thus modifying the\n \u003ccode\u003eCStringLen\u003c/code\u003e, either in C, or using poke, will cause the contents of the\n \u003ccode\u003eByteString\u003c/code\u003e to change, breaking referential transparency. Other\n \u003ccode\u003eByteStrings\u003c/code\u003e created by sharing (such as those produced via \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e) will also reflect these changes. Modifying the \u003ccode\u003eCStringLen\u003c/code\u003e\n will break referential transparency. To avoid this, use\n \u003ccode\u003euseAsCStringLen\u003c/code\u003e, which makes a copy of the original \u003ccode\u003eByteString\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafeUseAsCStringLen",
          "package": "bytestring",
          "signature": "ByteString -\u003e (CStringLen -\u003e IO a) -\u003e IO a",
          "source": "src/Data-ByteString-Unsafe.html#unsafeUseAsCStringLen",
          "type": "function"
        },
        "index": {
          "description": "construction Use ByteString with function requiring CStringLen This function does zero copying and merely unwraps ByteString to appear as CStringLen It is unsafe After calling this function the CStringLen shares the underlying byte buffer with the original ByteString Thus modifying the CStringLen either in or using poke will cause the contents of the ByteString to change breaking referential transparency Other ByteStrings created by sharing such as those produced via take or drop will also reflect these changes Modifying the CStringLen will break referential transparency To avoid this use useAsCStringLen which makes copy of the original ByteString",
          "hierarchy": "Data ByteString Unsafe",
          "module": "Data.ByteString.Unsafe",
          "name": "unsafeUseAsCStringLen",
          "normalized": "ByteString-\u003e(CStringLen-\u003eIO a)-\u003eIO a",
          "package": "bytestring",
          "partial": "Use As CString Len",
          "signature": "ByteString-\u003e(CStringLen-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString-Unsafe.html#v:unsafeUseAsCStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA time and space-efficient implementation of byte vectors using\n packed Word8 arrays, suitable for high performance use, both in terms\n of large data quantities, or high speed requirements. Byte vectors\n are encoded as strict \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e arrays of bytes, held in a \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e,\n and can be passed between C and Haskell with little effort.\n\u003c/p\u003e\u003cp\u003eThe recomended way to assemble ByteStrings from smaller parts\n is to use the builder monoid from \u003ca\u003eData.ByteString.Builder\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported \u003ccode\u003equalified\u003c/code\u003e, to avoid name\n clashes with \u003ca\u003ePrelude\u003c/a\u003e functions.  eg.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.ByteString as B\n\u003c/pre\u003e\u003cp\u003eOriginal GHC implementation by Bryan O'Sullivan.\n Rewritten to use \u003ccode\u003e\u003ca\u003eUArray\u003c/a\u003e\u003c/code\u003e by Simon Marlow.\n Rewritten to support slices and use \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e by David Roundy.\n Rewritten again and extended by Don Stewart and Duncan Coutts.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ByteString",
          "name": "ByteString",
          "package": "bytestring",
          "source": "src/Data-ByteString.html",
          "type": "module"
        },
        "index": {
          "description": "time and space-efficient implementation of byte vectors using packed Word8 arrays suitable for high performance use both in terms of large data quantities or high speed requirements Byte vectors are encoded as strict Word8 arrays of bytes held in ForeignPtr and can be passed between and Haskell with little effort The recomended way to assemble ByteStrings from smaller parts is to use the builder monoid from Data.ByteString.Builder This module is intended to be imported qualified to avoid name clashes with Prelude functions eg import qualified Data.ByteString as Original GHC implementation by Bryan Sullivan Rewritten to use UArray by Simon Marlow Rewritten to support slices and use ForeignPtr by David Roundy Rewritten again and extended by Don Stewart and Duncan Coutts",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "ByteString",
          "package": "bytestring",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space-efficient representation of a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e vector, supporting many\n efficient operations.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e contains 8-bit bytes, or by using the operations from\n \u003ca\u003eData.ByteString.Char8\u003c/a\u003e it can be interpreted as containing 8-bit\n characters.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "ByteString",
          "package": "bytestring",
          "source": "src/Data-ByteString-Internal.html#ByteString",
          "type": "data"
        },
        "index": {
          "description": "space-efficient representation of Word8 vector supporting many efficient operations ByteString contains bit bytes or by using the operations from Data.ByteString.Char8 it can be interpreted as containing bit characters",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "ByteString",
          "package": "bytestring",
          "partial": "Byte String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#t:ByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Applied to a predicate and a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e determines\n if all elements of the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e satisfy the predicate.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "all",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e Bool",
          "source": "src/Data-ByteString.html#all",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and ByteString all determines if all elements of the ByteString satisfy the predicate",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "all",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003eBool",
          "package": "bytestring",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Applied to a predicate and a ByteString, \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e determines if\n any element of the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e satisfies the predicate.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "any",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e Bool",
          "source": "src/Data-ByteString.html#any",
          "type": "function"
        },
        "index": {
          "description": "Applied to predicate and ByteString any determines if any element of the ByteString satisfies the predicate",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "any",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003eBool",
          "package": "bytestring",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "appendFile",
          "package": "bytestring",
          "signature": "FilePath -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-ByteString.html#appendFile",
          "type": "function"
        },
        "index": {
          "description": "Append ByteString to file",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "appendFile",
          "normalized": "FilePath-\u003eByteString-\u003eIO()",
          "package": "bytestring",
          "partial": "File",
          "signature": "FilePath-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:appendFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e is equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003enot\u003c/a\u003e\u003c/code\u003e . p)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUnder GHC, a rewrite rule will transform break (==) into a\n call to the specialised breakByte:\n\u003c/p\u003e\u003cpre\u003e break ((==) x) = breakByte x\n break (==x) = breakByte x\n\u003c/pre\u003e",
          "module": "Data.ByteString",
          "name": "break",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-ByteString.html#break",
          "type": "function"
        },
        "index": {
          "description": "break is equivalent to span not Under GHC rewrite rule will transform break into call to the specialised breakByte break breakByte break breakByte",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "break",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "bytestring",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreakByte\u003c/a\u003e\u003c/code\u003e breaks its ByteString argument at the first occurence\n of the specified byte. It is more efficient than \u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e as it is\n implemented with \u003ccode\u003ememchr(3)\u003c/code\u003e. I.e.\n\u003c/p\u003e\u003cpre\u003e break (=='c') \"abcd\" == breakByte 'c' \"abcd\"\n\u003c/pre\u003e",
          "module": "Data.ByteString",
          "name": "breakByte",
          "package": "bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-ByteString.html#breakByte",
          "type": "function"
        },
        "index": {
          "description": "breakByte breaks its ByteString argument at the first occurence of the specified byte It is more efficient than break as it is implemented with memchr I.e break abcd breakByte abcd",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "breakByte",
          "normalized": "Word-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "bytestring",
          "partial": "Byte",
          "signature": "Word-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:breakByte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebreakEnd\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e but from the end of the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003ebreakEnd p == spanEnd (not.p)\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "breakEnd",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-ByteString.html#breakEnd",
          "type": "function"
        },
        "index": {
          "description": "breakEnd behaves like break but from the end of the ByteString breakEnd spanEnd not.p",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "breakEnd",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "bytestring",
          "partial": "End",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:breakEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and concatenate the results\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "concatMap",
          "package": "bytestring",
          "signature": "(Word8 -\u003e ByteString) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString.html#concatMap",
          "type": "function"
        },
        "index": {
          "description": "Map function over ByteString and concatenate the results",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "concatMap",
          "normalized": "(Word-\u003eByteString)-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "partial": "Map",
          "signature": "(Word-\u003eByteString)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e is analogous to (:) for lists, but of different\n complexity, as it requires making a copy.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "cons",
          "package": "bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString.html#cons",
          "type": "function"
        },
        "index": {
          "description": "cons is analogous to for lists but of different complexity as it requires making copy",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "cons",
          "normalized": "Word-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "Word-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecount returns the number of times its argument appears in the ByteString\n\u003c/p\u003e\u003cpre\u003e count = length . elemIndices\n\u003c/pre\u003e\u003cp\u003eBut more efficiently than using length on the intermediate list.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "count",
          "package": "bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e Int",
          "source": "src/Data-ByteString.html#count",
          "type": "function"
        },
        "index": {
          "description": "count returns the number of times its argument appears in the ByteString count length elemIndices But more efficiently than using length on the intermediate list",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "count",
          "normalized": "Word-\u003eByteString-\u003eInt",
          "package": "bytestring",
          "signature": "Word-\u003eByteString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e returns the suffix remaining after \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "dropWhile",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString.html#dropWhile",
          "type": "function"
        },
        "index": {
          "description": "dropWhile xs returns the suffix remaining after takeWhile xs",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "dropWhile",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "partial": "While",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e membership predicate.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "elem",
          "package": "bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e Bool",
          "source": "src/Data-ByteString.html#elem",
          "type": "function"
        },
        "index": {
          "description": "elem is the ByteString membership predicate",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "elem",
          "normalized": "Word-\u003eByteString-\u003eBool",
          "package": "bytestring",
          "signature": "Word-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e function returns the index of the first\n element in the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e which is equal to the query\n element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element. \n This implementation uses memchr(3).\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "elemIndex",
          "package": "bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e Maybe Int",
          "source": "src/Data-ByteString.html#elemIndex",
          "type": "function"
        },
        "index": {
          "description": "The elemIndex function returns the index of the first element in the given ByteString which is equal to the query element or Nothing if there is no such element This implementation uses memchr",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "elemIndex",
          "normalized": "Word-\u003eByteString-\u003eMaybe Int",
          "package": "bytestring",
          "partial": "Index",
          "signature": "Word-\u003eByteString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndexEnd\u003c/a\u003e\u003c/code\u003e function returns the last index of the\n element in the given \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e which is equal to the query\n element, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no such element. The following\n holds:\n\u003c/p\u003e\u003cpre\u003e elemIndexEnd c xs == \n (-) (length xs - 1) `fmap` elemIndex c (reverse xs)\n\u003c/pre\u003e",
          "module": "Data.ByteString",
          "name": "elemIndexEnd",
          "package": "bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e Maybe Int",
          "source": "src/Data-ByteString.html#elemIndexEnd",
          "type": "function"
        },
        "index": {
          "description": "The elemIndexEnd function returns the last index of the element in the given ByteString which is equal to the query element or Nothing if there is no such element The following holds elemIndexEnd xs length xs fmap elemIndex reverse xs",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "elemIndexEnd",
          "normalized": "Word-\u003eByteString-\u003eMaybe Int",
          "package": "bytestring",
          "partial": "Index End",
          "signature": "Word-\u003eByteString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:elemIndexEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eelemIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e, by returning\n the indices of all elements equal to the query element, in ascending order.\n This implementation uses memchr(3).\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "elemIndices",
          "package": "bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e [Int]",
          "source": "src/Data-ByteString.html#elemIndices",
          "type": "function"
        },
        "index": {
          "description": "The elemIndices function extends elemIndex by returning the indices of all elements equal to the query element in ascending order This implementation uses memchr",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "elemIndices",
          "normalized": "Word-\u003eByteString-\u003e[Int]",
          "package": "bytestring",
          "partial": "Indices",
          "signature": "Word-\u003eByteString-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:elemIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e, applied to a predicate and a ByteString,\n returns a ByteString containing those characters that satisfy the\n predicate.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "filter",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString.html#filter",
          "type": "function"
        },
        "index": {
          "description": "filter applied to predicate and ByteString returns ByteString containing those characters that satisfy the predicate",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "filter",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e function takes a predicate and a ByteString,\n and returns the first element in matching the predicate, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if there is no such element.\n\u003c/p\u003e\u003cpre\u003e find f p = case findIndex f p of Just n -\u003e Just (p ! n) ; _ -\u003e Nothing\n\u003c/pre\u003e",
          "module": "Data.ByteString",
          "name": "find",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e Maybe Word8",
          "source": "src/Data-ByteString.html#find",
          "type": "function"
        },
        "index": {
          "description": "The find function takes predicate and ByteString and returns the first element in matching the predicate or Nothing if there is no such element find case findIndex of Just Just Nothing",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "find",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003eMaybe Word",
          "package": "bytestring",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003eMaybe Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e function takes a predicate and a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and\n returns the index of the first element in the ByteString\n satisfying the predicate.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "findIndex",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e Maybe Int",
          "source": "src/Data-ByteString.html#findIndex",
          "type": "function"
        },
        "index": {
          "description": "The findIndex function takes predicate and ByteString and returns the index of the first element in the ByteString satisfying the predicate",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "findIndex",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003eMaybe Int",
          "package": "bytestring",
          "partial": "Index",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e, by returning the\n indices of all elements satisfying the predicate, in ascending order.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "findIndices",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e [Int]",
          "source": "src/Data-ByteString.html#findIndices",
          "type": "function"
        },
        "index": {
          "description": "The findIndices function extends findIndex by returning the indices of all elements satisfying the predicate in ascending order",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "findIndices",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003e[Int]",
          "package": "bytestring",
          "partial": "Indices",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:findIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value (typically\n the left-identity of the operator), and a ByteString, reduces the\n ByteString using the binary operator, from left to right.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "foldl",
          "package": "bytestring",
          "signature": "(a -\u003e Word8 -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-ByteString.html#foldl",
          "type": "function"
        },
        "index": {
          "description": "foldl applied to binary operator starting value typically the left-identity of the operator and ByteString reduces the ByteString using the binary operator from left to right",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "foldl",
          "normalized": "(a-\u003eWord-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "bytestring",
          "signature": "(a-\u003eWord-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl'\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but strict in the accumulator.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "foldl'",
          "package": "bytestring",
          "signature": "(a -\u003e Word8 -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-ByteString.html#foldl%27",
          "type": "function"
        },
        "index": {
          "description": "foldl is like foldl but strict in the accumulator",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "foldl'",
          "normalized": "(a-\u003eWord-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "bytestring",
          "signature": "(a-\u003eWord-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e that has no starting value\n argument, and thus must be applied to non-empty \u003ccode\u003eByteStrings\u003c/code\u003e.\n An exception will be thrown in the case of an empty ByteString.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "foldl1",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e Word8) -\u003e ByteString -\u003e Word8",
          "source": "src/Data-ByteString.html#foldl1",
          "type": "function"
        },
        "index": {
          "description": "foldl1 is variant of foldl that has no starting value argument and thus must be applied to non-empty ByteStrings An exception will be thrown in the case of an empty ByteString",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "foldl1",
          "normalized": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eWord",
          "package": "bytestring",
          "signature": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:foldl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'foldl1\\'' is like \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e, but strict in the accumulator.\n An exception will be thrown in the case of an empty ByteString.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "foldl1'",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e Word8) -\u003e ByteString -\u003e Word8",
          "source": "src/Data-ByteString.html#foldl1%27",
          "type": "function"
        },
        "index": {
          "description": "foldl1 is like foldl1 but strict in the accumulator An exception will be thrown in the case of an empty ByteString",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "foldl1'",
          "normalized": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eWord",
          "package": "bytestring",
          "signature": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:foldl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value\n (typically the right-identity of the operator), and a ByteString,\n reduces the ByteString using the binary operator, from right to left.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "foldr",
          "package": "bytestring",
          "signature": "(Word8 -\u003e a -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-ByteString.html#foldr",
          "type": "function"
        },
        "index": {
          "description": "foldr applied to binary operator starting value typically the right-identity of the operator and ByteString reduces the ByteString using the binary operator from right to left",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "foldr",
          "normalized": "(Word-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "bytestring",
          "signature": "(Word-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr'\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, but strict in the accumulator.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "foldr'",
          "package": "bytestring",
          "signature": "(Word8 -\u003e a -\u003e a) -\u003e a -\u003e ByteString -\u003e a",
          "source": "src/Data-ByteString.html#foldr%27",
          "type": "function"
        },
        "index": {
          "description": "foldr is like foldr but strict in the accumulator",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "foldr'",
          "normalized": "(Word-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "package": "bytestring",
          "signature": "(Word-\u003ea-\u003ea)-\u003ea-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:foldr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e that has no starting value argument,\n and thus must be applied to non-empty \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es\n An exception will be thrown in the case of an empty ByteString.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "foldr1",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e Word8) -\u003e ByteString -\u003e Word8",
          "source": "src/Data-ByteString.html#foldr1",
          "type": "function"
        },
        "index": {
          "description": "foldr1 is variant of foldr that has no starting value argument and thus must be applied to non-empty ByteString An exception will be thrown in the case of an empty ByteString",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "foldr1",
          "normalized": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eWord",
          "package": "bytestring",
          "signature": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'foldr1\\'' is a variant of \u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e, but is strict in the\n accumulator.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "foldr1'",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e Word8) -\u003e ByteString -\u003e Word8",
          "source": "src/Data-ByteString.html#foldr1%27",
          "type": "function"
        },
        "index": {
          "description": "foldr1 is variant of foldr1 but is strict in the accumulator",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "foldr1'",
          "normalized": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eWord",
          "package": "bytestring",
          "signature": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:foldr1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "groupBy",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e Bool) -\u003e ByteString -\u003e [ByteString]",
          "source": "src/Data-ByteString.html#groupBy",
          "type": "function"
        },
        "index": {
          "description": "The groupBy function is the non-overloaded version of group",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "groupBy",
          "normalized": "(Word-\u003eWord-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "package": "bytestring",
          "partial": "By",
          "signature": "(Word-\u003eWord-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:groupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.ByteString.Char8.hPutStrLn instead. (Functions that rely on ASCII encodings belong in Data.ByteString.Char8)\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eWrite a ByteString to a handle, appending a newline byte\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "hPutStrLn",
          "package": "bytestring",
          "signature": "Handle -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-ByteString.html#hPutStrLn",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use Data.ByteString.Char8.hPutStrLn instead Functions that rely on ASCII encodings belong in Data.ByteString.Char8 Write ByteString to handle appending newline byte",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "hPutStrLn",
          "normalized": "Handle-\u003eByteString-\u003eIO()",
          "package": "bytestring",
          "partial": "Put Str Ln",
          "signature": "Handle-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:hPutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the first element of a ByteString, which must be non-empty.\n An exception will be thrown in the case of an empty ByteString.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "head",
          "package": "bytestring",
          "signature": "ByteString -\u003e Word8",
          "source": "src/Data-ByteString.html#head",
          "type": "function"
        },
        "index": {
          "description": "Extract the first element of ByteString which must be non-empty An exception will be thrown in the case of an empty ByteString",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "head",
          "normalized": "ByteString-\u003eWord",
          "package": "bytestring",
          "signature": "ByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e index (subscript) operator, starting from 0.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "index",
          "package": "bytestring",
          "signature": "ByteString -\u003e Int -\u003e Word8",
          "source": "src/Data-ByteString.html#index",
          "type": "function"
        },
        "index": {
          "description": "ByteString index subscript operator starting from",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "index",
          "normalized": "ByteString-\u003eInt-\u003eWord",
          "package": "bytestring",
          "signature": "ByteString-\u003eInt-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e and a\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and `intersperses' that byte between the elements of\n the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.  It is analogous to the intersperse function on\n Lists.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "intersperse",
          "package": "bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString.html#intersperse",
          "type": "function"
        },
        "index": {
          "description": "The intersperse function takes Word8 and ByteString and intersperses that byte between the elements of the ByteString It is analogous to the intersperse function on Lists",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "intersperse",
          "normalized": "Word-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "Word-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the last element of a ByteString, which must be finite and non-empty.\n An exception will be thrown in the case of an empty ByteString.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "last",
          "package": "bytestring",
          "signature": "ByteString -\u003e Word8",
          "source": "src/Data-ByteString.html#last",
          "type": "function"
        },
        "index": {
          "description": "Extract the last element of ByteString which must be finite and non-empty An exception will be thrown in the case of an empty ByteString",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "last",
          "normalized": "ByteString-\u003eWord",
          "package": "bytestring",
          "signature": "ByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef xs\u003c/code\u003e is the ByteString obtained by applying \u003ccode\u003ef\u003c/code\u003e to each\n element of \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "map",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Word8) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString.html#map",
          "type": "function"
        },
        "index": {
          "description": "map xs is the ByteString obtained by applying to each element of xs",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "map",
          "normalized": "(Word-\u003eWord)-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "(Word-\u003eWord)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumL\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a ByteString,\n passing an accumulating parameter from left to right, and returning a\n final value of this accumulator together with the new list.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "mapAccumL",
          "package": "bytestring",
          "signature": "(acc -\u003e Word8 -\u003e (acc, Word8)) -\u003e acc -\u003e ByteString -\u003e (acc, ByteString)",
          "source": "src/Data-ByteString.html#mapAccumL",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumL function behaves like combination of map and foldl it applies function to each element of ByteString passing an accumulating parameter from left to right and returning final value of this accumulator together with the new list",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "mapAccumL",
          "normalized": "(a-\u003eWord-\u003e(a,Word))-\u003ea-\u003eByteString-\u003e(a,ByteString)",
          "package": "bytestring",
          "partial": "Accum",
          "signature": "(acc-\u003eWord-\u003e(acc,Word))-\u003eacc-\u003eByteString-\u003e(acc,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:mapAccumL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumR\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a ByteString,\n passing an accumulating parameter from right to left, and returning a\n final value of this accumulator together with the new ByteString.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "mapAccumR",
          "package": "bytestring",
          "signature": "(acc -\u003e Word8 -\u003e (acc, Word8)) -\u003e acc -\u003e ByteString -\u003e (acc, ByteString)",
          "source": "src/Data-ByteString.html#mapAccumR",
          "type": "function"
        },
        "index": {
          "description": "The mapAccumR function behaves like combination of map and foldr it applies function to each element of ByteString passing an accumulating parameter from right to left and returning final value of this accumulator together with the new ByteString",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "mapAccumR",
          "normalized": "(a-\u003eWord-\u003e(a,Word))-\u003ea-\u003eByteString-\u003e(a,ByteString)",
          "package": "bytestring",
          "partial": "Accum",
          "signature": "(acc-\u003eWord-\u003e(acc,Word))-\u003eacc-\u003eByteString-\u003e(acc,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:mapAccumR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e returns the maximum value from a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n This function will fuse.\n An exception will be thrown in the case of an empty ByteString.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "maximum",
          "package": "bytestring",
          "signature": "ByteString -\u003e Word8",
          "source": "src/Data-ByteString.html#maximum",
          "type": "function"
        },
        "index": {
          "description": "maximum returns the maximum value from ByteString This function will fuse An exception will be thrown in the case of an empty ByteString",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "maximum",
          "normalized": "ByteString-\u003eWord",
          "package": "bytestring",
          "signature": "ByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e returns the minimum value from a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n This function will fuse.\n An exception will be thrown in the case of an empty ByteString.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "minimum",
          "package": "bytestring",
          "signature": "ByteString -\u003e Word8",
          "source": "src/Data-ByteString.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "minimum returns the minimum value from ByteString This function will fuse An exception will be thrown in the case of an empty ByteString",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "minimum",
          "normalized": "ByteString-\u003eWord",
          "package": "bytestring",
          "signature": "ByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003enotElem\u003c/a\u003e\u003c/code\u003e is the inverse of \u003ccode\u003e\u003ca\u003eelem\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "notElem",
          "package": "bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e Bool",
          "source": "src/Data-ByteString.html#notElem",
          "type": "function"
        },
        "index": {
          "description": "notElem is the inverse of elem",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "notElem",
          "normalized": "Word-\u003eByteString-\u003eBool",
          "package": "bytestring",
          "partial": "Elem",
          "signature": "Word-\u003eByteString-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a '[Word8]' into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eFor applications with large numbers of string literals, pack can be a\n bottleneck. In such cases, consider using packAddress (GHC only).\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "pack",
          "package": "bytestring",
          "signature": "[Word8] -\u003e ByteString",
          "source": "src/Data-ByteString.html#pack",
          "type": "function"
        },
        "index": {
          "description": "Convert Word8 into ByteString For applications with large numbers of string literals pack can be bottleneck In such cases consider using packAddress GHC only",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "pack",
          "normalized": "[Word]-\u003eByteString",
          "package": "bytestring",
          "signature": "[Word]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003epartition\u003c/a\u003e\u003c/code\u003e function takes a predicate a ByteString and returns\n the pair of ByteStrings with elements which do and do not satisfy the\n predicate, respectively; i.e.,\n\u003c/p\u003e\u003cpre\u003e partition p bs == (filter p xs, filter (not . p) xs)\n\u003c/pre\u003e",
          "module": "Data.ByteString",
          "name": "partition",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-ByteString.html#partition",
          "type": "function"
        },
        "index": {
          "description": "The partition function takes predicate ByteString and returns the pair of ByteStrings with elements which do and do not satisfy the predicate respectively i.e partition bs filter xs filter not xs",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "partition",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "bytestring",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.ByteString.Char8.putStrLn instead. (Functions that rely on ASCII encodings belong in Data.ByteString.Char8)\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eWrite a ByteString to stdout, appending a newline byte\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "putStrLn",
          "package": "bytestring",
          "signature": "ByteString -\u003e IO ()",
          "source": "src/Data-ByteString.html#putStrLn",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use Data.ByteString.Char8.putStrLn instead Functions that rely on ASCII encodings belong in Data.ByteString.Char8 Write ByteString to stdout appending newline byte",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "putStrLn",
          "normalized": "ByteString-\u003eIO()",
          "package": "bytestring",
          "partial": "Str Ln",
          "signature": "ByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an entire file strictly into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.  This is far more\n efficient than reading the characters into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and then using\n \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e.  It also may be more efficient than opening the file and\n reading it using \u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "readFile",
          "package": "bytestring",
          "signature": "FilePath -\u003e IO ByteString",
          "source": "src/Data-ByteString.html#readFile",
          "type": "function"
        },
        "index": {
          "description": "Read an entire file strictly into ByteString This is far more efficient than reading the characters into String and then using pack It also may be more efficient than opening the file and reading it using hGet",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO ByteString",
          "package": "bytestring",
          "partial": "File",
          "signature": "FilePath-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en x\u003c/code\u003e is a ByteString of length \u003ccode\u003en\u003c/code\u003e with \u003ccode\u003ex\u003c/code\u003e\n the value of every element. The following holds:\n\u003c/p\u003e\u003cpre\u003e replicate w c = unfoldr w (\\u -\u003e Just (u,u)) c\n\u003c/pre\u003e\u003cp\u003eThis implemenation uses \u003ccode\u003ememset(3)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "replicate",
          "package": "bytestring",
          "signature": "Int -\u003e Word8 -\u003e ByteString",
          "source": "src/Data-ByteString.html#replicate",
          "type": "function"
        },
        "index": {
          "description": "replicate is ByteString of length with the value of every element The following holds replicate unfoldr Just This implemenation uses memset",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "replicate",
          "normalized": "Int-\u003eWord-\u003eByteString",
          "package": "bytestring",
          "signature": "Int-\u003eWord-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but returns a list of successive\n reduced values from the left. This function will fuse.\n\u003c/p\u003e\u003cpre\u003e scanl f z [x1, x2, ...] == [z, z `f` x1, (z `f` x1) `f` x2, ...]\n\u003c/pre\u003e\u003cp\u003eNote that\n\u003c/p\u003e\u003cpre\u003e last (scanl f z xs) == foldl f z xs.\n\u003c/pre\u003e",
          "module": "Data.ByteString",
          "name": "scanl",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e Word8) -\u003e Word8 -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString.html#scanl",
          "type": "function"
        },
        "index": {
          "description": "scanl is similar to foldl but returns list of successive reduced values from the left This function will fuse scanl x1 x2 x1 x1 x2 Note that last scanl xs foldl xs",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "scanl",
          "normalized": "(Word-\u003eWord-\u003eWord)-\u003eWord-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "(Word-\u003eWord-\u003eWord)-\u003eWord-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:scanl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e that has no starting value argument.\n This function will fuse.\n\u003c/p\u003e\u003cpre\u003e scanl1 f [x1, x2, ...] == [x1, x1 `f` x2, ...]\n\u003c/pre\u003e",
          "module": "Data.ByteString",
          "name": "scanl1",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e Word8) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString.html#scanl1",
          "type": "function"
        },
        "index": {
          "description": "scanl1 is variant of scanl that has no starting value argument This function will fuse scanl1 x1 x2 x1 x1 x2",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "scanl1",
          "normalized": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:scanl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003escanr is the right-to-left dual of scanl.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "scanr",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e Word8) -\u003e Word8 -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString.html#scanr",
          "type": "function"
        },
        "index": {
          "description": "scanr is the right-to-left dual of scanl",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "scanr",
          "normalized": "(Word-\u003eWord-\u003eWord)-\u003eWord-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "(Word-\u003eWord-\u003eWord)-\u003eWord-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:scanr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escanr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e that has no starting value argument.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "scanr1",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e Word8) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString.html#scanr1",
          "type": "function"
        },
        "index": {
          "description": "scanr1 is variant of scanr that has no starting value argument",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "scanr1",
          "normalized": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "signature": "(Word-\u003eWord-\u003eWord)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:scanr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "singleton",
          "package": "bytestring",
          "signature": "Word8 -\u003e ByteString",
          "source": "src/Data-ByteString.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Convert Word8 into ByteString",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "singleton",
          "normalized": "Word-\u003eByteString",
          "package": "bytestring",
          "signature": "Word-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Append a byte to the end of a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "snoc",
          "package": "bytestring",
          "signature": "ByteString -\u003e Word8 -\u003e ByteString",
          "source": "src/Data-ByteString.html#snoc",
          "type": "function"
        },
        "index": {
          "description": "Append byte to the end of ByteString",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "snoc",
          "normalized": "ByteString-\u003eWord-\u003eByteString",
          "package": "bytestring",
          "signature": "ByteString-\u003eWord-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep xs\u003c/code\u003e breaks the ByteString into two segments. It is\n equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e p xs, \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e p xs)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "span",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-ByteString.html#span",
          "type": "function"
        },
        "index": {
          "description": "span xs breaks the ByteString into two segments It is equivalent to takeWhile xs dropWhile xs",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "span",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "bytestring",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espanEnd\u003c/a\u003e\u003c/code\u003e behaves like \u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e but from the end of the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n We have\n\u003c/p\u003e\u003cpre\u003e spanEnd (not.isSpace) \"x y z\" == (\"x y \",\"z\")\n\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003e spanEnd (not . isSpace) ps\n    == \n let (x,y) = span (not.isSpace) (reverse ps) in (reverse y, reverse x) \n\u003c/pre\u003e",
          "module": "Data.ByteString",
          "name": "spanEnd",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Data-ByteString.html#spanEnd",
          "type": "function"
        },
        "index": {
          "description": "spanEnd behaves like span but from the end of the ByteString We have spanEnd not.isSpace and spanEnd not isSpace ps let span not.isSpace reverse ps in reverse reverse",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "spanEnd",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "package": "bytestring",
          "partial": "End",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:spanEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Break a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into pieces separated by the byte\n argument, consuming the delimiter. I.e.\n\u003c/p\u003e\u003cpre\u003e split '\\n' \"a\\nb\\nd\\ne\" == [\"a\",\"b\",\"d\",\"e\"]\n split 'a'  \"aXaXaXa\"    == [\"\",\"X\",\"X\",\"X\",\"\"]\n split 'x'  \"x\"          == [\"\",\"\"]\n\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003e intercalate [c] . split c == id\n split == splitWith . (==)\n\u003c/pre\u003e\u003cp\u003eAs for all splitting functions in this library, this function does\n not copy the substrings, it just constructs new \u003ccode\u003eByteStrings\u003c/code\u003e that\n are slices of the original.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "split",
          "package": "bytestring",
          "signature": "Word8 -\u003e ByteString -\u003e [ByteString]",
          "source": "src/Data-ByteString.html#split",
          "type": "function"
        },
        "index": {
          "description": "Break ByteString into pieces separated by the byte argument consuming the delimiter I.e split nb nd ne split aXaXaXa split and intercalate split id split splitWith As for all splitting functions in this library this function does not copy the substrings it just constructs new ByteStrings that are slices of the original",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "split",
          "normalized": "Word-\u003eByteString-\u003e[ByteString]",
          "package": "bytestring",
          "signature": "Word-\u003eByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Splits a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into components delimited by\n separators, where the predicate returns True for a separator element.\n The resulting components do not contain the separators.  Two adjacent\n separators result in an empty component in the output.  eg.\n\u003c/p\u003e\u003cpre\u003e splitWith (=='a') \"aabbaca\" == [\"\",\"\",\"bb\",\"c\",\"\"]\n splitWith (=='a') []        == []\n\u003c/pre\u003e",
          "module": "Data.ByteString",
          "name": "splitWith",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e [ByteString]",
          "source": "src/Data-ByteString.html#splitWith",
          "type": "function"
        },
        "index": {
          "description": "Splits ByteString into components delimited by separators where the predicate returns True for separator element The resulting components do not contain the separators Two adjacent separators result in an empty component in the output eg splitWith aabbaca bb splitWith",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "splitWith",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "package": "bytestring",
          "partial": "With",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:splitWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a ByteString \u003ccode\u003exs\u003c/code\u003e,\n returns the longest prefix (possibly empty) of \u003ccode\u003exs\u003c/code\u003e of elements that\n satisfy \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "takeWhile",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Bool) -\u003e ByteString -\u003e ByteString",
          "source": "src/Data-ByteString.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "takeWhile applied to predicate and ByteString xs returns the longest prefix possibly empty of xs of elements that satisfy",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "takeWhile",
          "normalized": "(Word-\u003eBool)-\u003eByteString-\u003eByteString",
          "package": "bytestring",
          "partial": "While",
          "signature": "(Word-\u003eBool)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the head and tail of a ByteString, returning Nothing\n if it is empty.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "uncons",
          "package": "bytestring",
          "signature": "ByteString -\u003e Maybe (Word8, ByteString)",
          "source": "src/Data-ByteString.html#uncons",
          "type": "function"
        },
        "index": {
          "description": "Extract the head and tail of ByteString returning Nothing if it is empty",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "uncons",
          "normalized": "ByteString-\u003eMaybe(Word,ByteString)",
          "package": "bytestring",
          "signature": "ByteString-\u003eMaybe(Word,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, where \u003cem\u003en\u003c/em\u003e is the length of the result.  The \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e \n function is analogous to the List 'unfoldr'.  \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e builds a \n ByteString from a seed value.  The function takes the element and \n returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if it is done producing the ByteString or returns \n \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(a,b)\u003c/code\u003e, in which case, \u003ccode\u003ea\u003c/code\u003e is the next byte in the string, \n and \u003ccode\u003eb\u003c/code\u003e is the seed value for further production.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e    unfoldr (\\x -\u003e if x \u003c= 5 then Just (x, x + 1) else Nothing) 0\n == pack [0, 1, 2, 3, 4, 5]\n\u003c/pre\u003e",
          "module": "Data.ByteString",
          "name": "unfoldr",
          "package": "bytestring",
          "signature": "(a -\u003e Maybe (Word8, a)) -\u003e a -\u003e ByteString",
          "source": "src/Data-ByteString.html#unfoldr",
          "type": "function"
        },
        "index": {
          "description": "where is the length of the result The unfoldr function is analogous to the List unfoldr unfoldr builds ByteString from seed value The function takes the element and returns Nothing if it is done producing the ByteString or returns Just in which case is the next byte in the string and is the seed value for further production Examples unfoldr if then Just else Nothing pack",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "unfoldr",
          "normalized": "(a-\u003eMaybe(Word,a))-\u003ea-\u003eByteString",
          "package": "bytestring",
          "signature": "(a-\u003eMaybe(Word,a))-\u003ea-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:unfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Like \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e builds a ByteString from a seed\n value.  However, the length of the result is limited by the first\n argument to \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e.  This function is more efficient than \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e\n when the maximum length of the result is known.\n\u003c/p\u003e\u003cp\u003eThe following equation relates \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e fst (unfoldrN n f s) == take n (unfoldr f s)\n\u003c/pre\u003e",
          "module": "Data.ByteString",
          "name": "unfoldrN",
          "package": "bytestring",
          "signature": "Int -\u003e (a -\u003e Maybe (Word8, a)) -\u003e a -\u003e (ByteString, Maybe a)",
          "source": "src/Data-ByteString.html#unfoldrN",
          "type": "function"
        },
        "index": {
          "description": "Like unfoldr unfoldrN builds ByteString from seed value However the length of the result is limited by the first argument to unfoldrN This function is more efficient than unfoldr when the maximum length of the result is known The following equation relates unfoldrN and unfoldr fst unfoldrN take unfoldr",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "unfoldrN",
          "normalized": "Int-\u003e(a-\u003eMaybe(Word,a))-\u003ea-\u003e(ByteString,Maybe a)",
          "package": "bytestring",
          "signature": "Int-\u003e(a-\u003eMaybe(Word,a))-\u003ea-\u003e(ByteString,Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:unfoldrN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Converts a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a '[Word8]'.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "unpack",
          "package": "bytestring",
          "signature": "ByteString -\u003e [Word8]",
          "source": "src/Data-ByteString.html#unpack",
          "type": "function"
        },
        "index": {
          "description": "Converts ByteString to Word8",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "unpack",
          "normalized": "ByteString-\u003e[Word]",
          "package": "bytestring",
          "signature": "ByteString-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:unpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the \u003ccode\u003e\u003ca\u003einit\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e of a ByteString, returning Nothing\n if it is empty.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "unsnoc",
          "package": "bytestring",
          "signature": "ByteString -\u003e Maybe (ByteString, Word8)",
          "source": "src/Data-ByteString.html#unsnoc",
          "type": "function"
        },
        "index": {
          "description": "Extract the init and last of ByteString returning Nothing if it is empty",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "unsnoc",
          "normalized": "ByteString-\u003eMaybe(ByteString,Word)",
          "package": "bytestring",
          "signature": "ByteString-\u003eMaybe(ByteString,Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:unsnoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e transforms a list of pairs of bytes into a pair of\n ByteStrings. Note that this performs two \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e operations.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "unzip",
          "package": "bytestring",
          "signature": "[(Word8, Word8)] -\u003e (ByteString, ByteString)",
          "source": "src/Data-ByteString.html#unzip",
          "type": "function"
        },
        "index": {
          "description": "unzip transforms list of pairs of bytes into pair of ByteStrings Note that this performs two pack operations",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "unzip",
          "normalized": "[(Word,Word)]-\u003e(ByteString,ByteString)",
          "package": "bytestring",
          "signature": "[(Word,Word)]-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "writeFile",
          "package": "bytestring",
          "signature": "FilePath -\u003e ByteString -\u003e IO ()",
          "source": "src/Data-ByteString.html#writeFile",
          "type": "function"
        },
        "index": {
          "description": "Write ByteString to file",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "writeFile",
          "normalized": "FilePath-\u003eByteString-\u003eIO()",
          "package": "bytestring",
          "partial": "File",
          "signature": "FilePath-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:writeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e takes two ByteStrings and returns a list of\n corresponding pairs of bytes. If one input ByteString is short,\n excess elements of the longer ByteString are discarded. This is\n equivalent to a pair of \u003ccode\u003e\u003ca\u003eunpack\u003c/a\u003e\u003c/code\u003e operations.\n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "zip",
          "package": "bytestring",
          "signature": "ByteString -\u003e ByteString -\u003e [(Word8, Word8)]",
          "source": "src/Data-ByteString.html#zip",
          "type": "function"
        },
        "index": {
          "description": "zip takes two ByteStrings and returns list of corresponding pairs of bytes If one input ByteString is short excess elements of the longer ByteString are discarded This is equivalent to pair of unpack operations",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "zip",
          "normalized": "ByteString-\u003eByteString-\u003e[(Word,Word)]",
          "package": "bytestring",
          "signature": "ByteString-\u003eByteString-\u003e[(Word,Word)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e generalises \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e by zipping with the function given as\n the first argument, instead of a tupling function.  For example,\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e (+)\u003c/code\u003e is applied to two ByteStrings to produce the list of\n corresponding sums. \n\u003c/p\u003e",
          "module": "Data.ByteString",
          "name": "zipWith",
          "package": "bytestring",
          "signature": "(Word8 -\u003e Word8 -\u003e a) -\u003e ByteString -\u003e ByteString -\u003e [a]",
          "source": "src/Data-ByteString.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "zipWith generalises zip by zipping with the function given as the first argument instead of tupling function For example zipWith is applied to two ByteStrings to produce the list of corresponding sums",
          "hierarchy": "Data ByteString",
          "module": "Data.ByteString",
          "name": "zipWith",
          "normalized": "(Word-\u003eWord-\u003ea)-\u003eByteString-\u003eByteString-\u003e[a]",
          "package": "bytestring",
          "partial": "With",
          "signature": "(Word-\u003eWord-\u003ea)-\u003eByteString-\u003eByteString-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring/docs/Data-ByteString.html#v:zipWith"
      }
    }
  ]
]