[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Extra.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtra functions for creating and executing \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es. They are intended\n for application-specific fine-tuning the performance of \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ByteString.Builder.Extra",
        "fct-package": "bytestring-builder",
        "fct-signature": "module",
        "fct-source": "src/Data-ByteString-Builder-Extra.html",
        "fct-type": "module",
        "title": "Extra"
      },
      "index": {
        "description": "Extra functions for creating and executing Builder They are intended for application-specific fine-tuning the performance of Builder",
        "hierarchy": "Data ByteString Builder Extra",
        "module": "Data.ByteString.Builder.Extra",
        "name": "Extra",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Extra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Extra.html#t:AllocationStrategy",
      "description": {
        "fct-descr": "\u003cp\u003eA buffer allocation strategy for executing \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Extra",
        "fct-package": "bytestring-builder",
        "fct-signature": "data",
        "fct-source": "src/Data-ByteString-Builder-Internal.html#AllocationStrategy",
        "fct-type": "data",
        "title": "AllocationStrategy"
      },
      "index": {
        "description": "buffer allocation strategy for executing Builder",
        "hierarchy": "Data ByteString Builder Extra",
        "module": "Data.ByteString.Builder.Extra",
        "name": "AllocationStrategy",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Allocation Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Extra.html#t:BufferWriter",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBufferWriter\u003c/a\u003e\u003c/code\u003e represents the result of running a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e.\n It unfolds as a sequence of chunks of data. These chunks come in two forms:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e an IO action for writing the Builder's data into a user-supplied memory\n    buffer.\n\u003c/li\u003e\u003cli\u003e a pre-existing chunks of data represented by a strict \u003ccode\u003eByteString\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWhile this is rather low level, it provides you with full flexibility in\n how the data is written out.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBufferWriter\u003c/a\u003e\u003c/code\u003e itself is an IO action: you supply it with a buffer\n (as a pointer and length) and it will write data into the buffer.\n It returns a number indicating how many bytes were actually written\n (which can be \u003ccode\u003e0\u003c/code\u003e). It also returns a \u003ccode\u003e\u003ca\u003eNext\u003c/a\u003e\u003c/code\u003e which describes what\n comes next.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Extra",
        "fct-package": "bytestring-builder",
        "fct-signature": "type",
        "fct-source": "src/Data-ByteString-Builder-Extra.html#BufferWriter",
        "fct-type": "type",
        "title": "BufferWriter"
      },
      "index": {
        "description": "BufferWriter represents the result of running Builder It unfolds as sequence of chunks of data These chunks come in two forms an IO action for writing the Builder data into user-supplied memory buffer pre-existing chunks of data represented by strict ByteString While this is rather low level it provides you with full flexibility in how the data is written out The BufferWriter itself is an IO action you supply it with buffer as pointer and length and it will write data into the buffer It returns number indicating how many bytes were actually written which can be It also returns Next which describes what comes next",
        "hierarchy": "Data ByteString Builder Extra",
        "module": "Data.ByteString.Builder.Extra",
        "name": "BufferWriter",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Buffer Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Extra.html#t:Next",
      "description": {
        "fct-descr": "\u003cp\u003eAfter running a \u003ccode\u003e\u003ca\u003eBufferWriter\u003c/a\u003e\u003c/code\u003e action there are three possibilities for\n what comes next:\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Extra",
        "fct-package": "bytestring-builder",
        "fct-signature": "data",
        "fct-source": "src/Data-ByteString-Builder-Extra.html#Next",
        "fct-type": "data",
        "title": "Next"
      },
      "index": {
        "description": "After running BufferWriter action there are three possibilities for what comes next",
        "hierarchy": "Data ByteString Builder Extra",
        "module": "Data.ByteString.Builder.Extra",
        "name": "Next",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Next",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Extra.html#v:Chunk",
      "description": {
        "fct-descr": "\u003cp\u003eIn addition to the data that has just been written into your buffer\n by the \u003ccode\u003e\u003ca\u003eBufferWriter\u003c/a\u003e\u003c/code\u003e action, it gives you a pre-existing chunk\n of data as a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. It also gives you the following \u003ccode\u003e\u003ca\u003eBufferWriter\u003c/a\u003e\u003c/code\u003e\n action. It is safe to run this following action using a buffer with as\n much free space as was left by the previous run action.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Extra",
        "fct-package": "bytestring-builder",
        "fct-signature": "Chunk !ByteString BufferWriter",
        "fct-source": "src/Data-ByteString-Builder-Extra.html#Next",
        "fct-type": "function",
        "title": "Chunk"
      },
      "index": {
        "description": "In addition to the data that has just been written into your buffer by the BufferWriter action it gives you pre-existing chunk of data as ByteString It also gives you the following BufferWriter action It is safe to run this following action using buffer with as much free space as was left by the previous run action",
        "hierarchy": "Data ByteString Builder Extra",
        "module": "Data.ByteString.Builder.Extra",
        "name": "Chunk",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Chunk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Extra.html#v:Done",
      "description": {
        "fct-descr": "\u003cp\u003eThis means we're all done. All the builder data has now been written.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Extra",
        "fct-package": "bytestring-builder",
        "fct-signature": "Done",
        "fct-source": "src/Data-ByteString-Builder-Extra.html#Next",
        "fct-type": "function",
        "title": "Done"
      },
      "index": {
        "description": "This means we re all done All the builder data has now been written",
        "hierarchy": "Data ByteString Builder Extra",
        "module": "Data.ByteString.Builder.Extra",
        "name": "Done",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Done",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Extra.html#v:More",
      "description": {
        "fct-descr": "\u003cp\u003eThis indicates that there may be more data to write. It\n gives you the next \u003ccode\u003e\u003ca\u003eBufferWriter\u003c/a\u003e\u003c/code\u003e action. You should call that action\n with an appropriate buffer. The int indicates the \u003cem\u003eminimum\u003c/em\u003e buffer size\n required by the next \u003ccode\u003e\u003ca\u003eBufferWriter\u003c/a\u003e\u003c/code\u003e action. That is, if you call the next\n action you \u003cem\u003emust\u003c/em\u003e supply it with a buffer length of at least this size.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Extra",
        "fct-package": "bytestring-builder",
        "fct-signature": "More !Int BufferWriter",
        "fct-source": "src/Data-ByteString-Builder-Extra.html#Next",
        "fct-type": "function",
        "title": "More"
      },
      "index": {
        "description": "This indicates that there may be more data to write It gives you the next BufferWriter action You should call that action with an appropriate buffer The int indicates the minimum buffer size required by the next BufferWriter action That is if you call the next action you must supply it with buffer length of at least this size",
        "hierarchy": "Data ByteString Builder Extra",
        "module": "Data.ByteString.Builder.Extra",
        "name": "More",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "More",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Extra.html#v:byteStringCopy",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e that copies the strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUse this function to create \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es from smallish (\u003ccode\u003e\u003c= 4kb\u003c/code\u003e)\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es or if you need to guarantee that the \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e is not\n shared with the chunks generated by the \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Extra",
        "fct-package": "bytestring-builder",
        "fct-signature": "ByteString -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-Internal.html#byteStringCopy",
        "fct-type": "function",
        "title": "byteStringCopy"
      },
      "index": {
        "description": "Construct Builder that copies the strict ByteString Use this function to create Builder from smallish kb ByteString or if you need to guarantee that the ByteString is not shared with the chunks generated by the Builder",
        "hierarchy": "Data ByteString Builder Extra",
        "module": "Data.ByteString.Builder.Extra",
        "name": "byteStringCopy",
        "normalized": "ByteString-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "String Copy",
        "signature": "ByteString-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Extra.html#v:byteStringInsert",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e that always inserts the strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n directly as a chunk.\n\u003c/p\u003e\u003cp\u003eThis implies flushing the output buffer, even if it contains just\n a single byte. You should therefore use \u003ccode\u003e\u003ca\u003ebyteStringInsert\u003c/a\u003e\u003c/code\u003e only for large\n (\u003ccode\u003e\u003e 8kb\u003c/code\u003e) \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es. Otherwise, the generated chunks are too\n fragmented to be processed efficiently afterwards.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Extra",
        "fct-package": "bytestring-builder",
        "fct-signature": "ByteString -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-Internal.html#byteStringInsert",
        "fct-type": "function",
        "title": "byteStringInsert"
      },
      "index": {
        "description": "Construct Builder that always inserts the strict ByteString directly as chunk This implies flushing the output buffer even if it contains just single byte You should therefore use byteStringInsert only for large kb ByteString Otherwise the generated chunks are too fragmented to be processed efficiently afterwards",
        "hierarchy": "Data ByteString Builder Extra",
        "module": "Data.ByteString.Builder.Extra",
        "name": "byteStringInsert",
        "normalized": "ByteString-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "String Insert",
        "signature": "ByteString-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Extra.html#v:byteStringThreshold",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e that copies the strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es, if it is\n smaller than the treshold, and inserts it directly otherwise.\n\u003c/p\u003e\u003cp\u003eFor example, \u003ccode\u003ebyteStringThreshold 1024\u003c/code\u003e copies strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es whose size\n is less or equal to 1kb, and inserts them directly otherwise. This implies\n that the average chunk-size of the generated lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e may be as\n low as 513 bytes, as there could always be just a single byte between the\n directly inserted 1025 byte, strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Extra",
        "fct-package": "bytestring-builder",
        "fct-signature": "Int -\u003e ByteString -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-Internal.html#byteStringThreshold",
        "fct-type": "function",
        "title": "byteStringThreshold"
      },
      "index": {
        "description": "Construct Builder that copies the strict ByteString if it is smaller than the treshold and inserts it directly otherwise For example byteStringThreshold copies strict ByteString whose size is less or equal to kb and inserts them directly otherwise This implies that the average chunk-size of the generated lazy ByteString may be as low as bytes as there could always be just single byte between the directly inserted byte strict ByteString",
        "hierarchy": "Data ByteString Builder Extra",
        "module": "Data.ByteString.Builder.Extra",
        "name": "byteStringThreshold",
        "normalized": "Int-\u003eByteString-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "String Threshold",
        "signature": "Int-\u003eByteString-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Extra.html#v:defaultChunkSize",
      "description": {
        "fct-descr": "\u003cp\u003eThe chunk size used for I/O. Currently set to 32k, less the memory management overhead\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Extra",
        "fct-package": "bytestring-builder",
        "fct-signature": "Int",
        "fct-type": "function",
        "title": "defaultChunkSize"
      },
      "index": {
        "description": "The chunk size used for Currently set to less the memory management overhead",
        "hierarchy": "Data ByteString Builder Extra",
        "module": "Data.ByteString.Builder.Extra",
        "name": "defaultChunkSize",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Chunk Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Extra.html#v:doubleHost",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e in native host order.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Extra",
        "fct-package": "bytestring-builder",
        "fct-signature": "Double -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-Extra.html#doubleHost",
        "fct-type": "function",
        "title": "doubleHost"
      },
      "index": {
        "description": "Encode Double in native host order",
        "hierarchy": "Data ByteString Builder Extra",
        "module": "Data.ByteString.Builder.Extra",
        "name": "doubleHost",
        "normalized": "Double-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Host",
        "signature": "Double-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Extra.html#v:floatHost",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e in native host order. Values encoded this way are not\n portable to different endian machines, without conversion.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Extra",
        "fct-package": "bytestring-builder",
        "fct-signature": "Float -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-Extra.html#floatHost",
        "fct-type": "function",
        "title": "floatHost"
      },
      "index": {
        "description": "Encode Float in native host order Values encoded this way are not portable to different endian machines without conversion",
        "hierarchy": "Data ByteString Builder Extra",
        "module": "Data.ByteString.Builder.Extra",
        "name": "floatHost",
        "normalized": "Float-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Host",
        "signature": "Float-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Extra.html#v:flush",
      "description": {
        "fct-descr": "\u003cp\u003eFlush the current buffer. This introduces a chunk boundary.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Extra",
        "fct-package": "bytestring-builder",
        "fct-signature": "Builder",
        "fct-source": "src/Data-ByteString-Builder-Internal.html#flush",
        "fct-type": "function",
        "title": "flush"
      },
      "index": {
        "description": "Flush the current buffer This introduces chunk boundary",
        "hierarchy": "Data ByteString Builder Extra",
        "module": "Data.ByteString.Builder.Extra",
        "name": "flush",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Extra.html#v:int16Host",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Extra",
        "fct-package": "bytestring-builder",
        "fct-signature": "Int16 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-Extra.html#int16Host",
        "fct-type": "function",
        "title": "int16Host"
      },
      "index": {
        "description": "Encode Int16 in native host order and host endianness",
        "hierarchy": "Data ByteString Builder Extra",
        "module": "Data.ByteString.Builder.Extra",
        "name": "int16Host",
        "normalized": "Int-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Host",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Extra.html#v:int32Host",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Extra",
        "fct-package": "bytestring-builder",
        "fct-signature": "Int32 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-Extra.html#int32Host",
        "fct-type": "function",
        "title": "int32Host"
      },
      "index": {
        "description": "Encode Int32 in native host order and host endianness",
        "hierarchy": "Data ByteString Builder Extra",
        "module": "Data.ByteString.Builder.Extra",
        "name": "int32Host",
        "normalized": "Int-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Host",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Extra.html#v:int64Host",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Extra",
        "fct-package": "bytestring-builder",
        "fct-signature": "Int64 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-Extra.html#int64Host",
        "fct-type": "function",
        "title": "int64Host"
      },
      "index": {
        "description": "Encode Int64 in native host order and host endianness",
        "hierarchy": "Data ByteString Builder Extra",
        "module": "Data.ByteString.Builder.Extra",
        "name": "int64Host",
        "normalized": "Int-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Host",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Extra.html#v:intHost",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a single native machine \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e is encoded in host order,\n host endian form, for the machine you're on. On a 64 bit machine the \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\n is an 8 byte value, on a 32 bit machine, 4 bytes. Values encoded this way\n are not portable to different endian or int sized machines, without\n conversion.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Extra",
        "fct-package": "bytestring-builder",
        "fct-signature": "Int -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-Extra.html#intHost",
        "fct-type": "function",
        "title": "intHost"
      },
      "index": {
        "description": "Encode single native machine Int The Int is encoded in host order host endian form for the machine you re on On bit machine the Int is an byte value on bit machine bytes Values encoded this way are not portable to different endian or int sized machines without conversion",
        "hierarchy": "Data ByteString Builder Extra",
        "module": "Data.ByteString.Builder.Extra",
        "name": "intHost",
        "normalized": "Int-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Host",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Extra.html#v:lazyByteStringCopy",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e that copies the lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Extra",
        "fct-package": "bytestring-builder",
        "fct-signature": "ByteString -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-Internal.html#lazyByteStringCopy",
        "fct-type": "function",
        "title": "lazyByteStringCopy"
      },
      "index": {
        "description": "Construct Builder that copies the lazy ByteString",
        "hierarchy": "Data ByteString Builder Extra",
        "module": "Data.ByteString.Builder.Extra",
        "name": "lazyByteStringCopy",
        "normalized": "ByteString-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Byte String Copy",
        "signature": "ByteString-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Extra.html#v:lazyByteStringInsert",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e that inserts all chunks of the lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n directly.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Extra",
        "fct-package": "bytestring-builder",
        "fct-signature": "ByteString -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-Internal.html#lazyByteStringInsert",
        "fct-type": "function",
        "title": "lazyByteStringInsert"
      },
      "index": {
        "description": "Construct Builder that inserts all chunks of the lazy ByteString directly",
        "hierarchy": "Data ByteString Builder Extra",
        "module": "Data.ByteString.Builder.Extra",
        "name": "lazyByteStringInsert",
        "normalized": "ByteString-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Byte String Insert",
        "signature": "ByteString-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Extra.html#v:lazyByteStringThreshold",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e that uses the thresholding strategy of \u003ccode\u003e\u003ca\u003ebyteStringThreshold\u003c/a\u003e\u003c/code\u003e\n for each chunk of the lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Extra",
        "fct-package": "bytestring-builder",
        "fct-signature": "Int -\u003e ByteString -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-Internal.html#lazyByteStringThreshold",
        "fct-type": "function",
        "title": "lazyByteStringThreshold"
      },
      "index": {
        "description": "Construct Builder that uses the thresholding strategy of byteStringThreshold for each chunk of the lazy ByteString",
        "hierarchy": "Data ByteString Builder Extra",
        "module": "Data.ByteString.Builder.Extra",
        "name": "lazyByteStringThreshold",
        "normalized": "Int-\u003eByteString-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Byte String Threshold",
        "signature": "Int-\u003eByteString-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Extra.html#v:runBuilder",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e into its initial \u003ccode\u003e\u003ca\u003eBufferWriter\u003c/a\u003e\u003c/code\u003e action.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Extra",
        "fct-package": "bytestring-builder",
        "fct-signature": "Builder -\u003e BufferWriter",
        "fct-source": "src/Data-ByteString-Builder-Extra.html#runBuilder",
        "fct-type": "function",
        "title": "runBuilder"
      },
      "index": {
        "description": "Turn Builder into its initial BufferWriter action",
        "hierarchy": "Data ByteString Builder Extra",
        "module": "Data.ByteString.Builder.Extra",
        "name": "runBuilder",
        "normalized": "Builder-\u003eBufferWriter",
        "package": "bytestring-builder",
        "partial": "Builder",
        "signature": "Builder-\u003eBufferWriter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Extra.html#v:safeStrategy",
      "description": {
        "fct-descr": "\u003cp\u003eUse this strategy for generating lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es whose chunks are\n likely to survive one garbage collection. This strategy trims buffers\n that are filled less than half in order to avoid spilling too much memory.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Extra",
        "fct-package": "bytestring-builder",
        "fct-signature": "Int-\u003e Int-\u003e AllocationStrategy",
        "fct-type": "function",
        "title": "safeStrategy"
      },
      "index": {
        "description": "Use this strategy for generating lazy ByteString whose chunks are likely to survive one garbage collection This strategy trims buffers that are filled less than half in order to avoid spilling too much memory",
        "hierarchy": "Data ByteString Builder Extra",
        "module": "Data.ByteString.Builder.Extra",
        "name": "safeStrategy",
        "normalized": "Int-\u003eInt-\u003eAllocationStrategy",
        "package": "bytestring-builder",
        "partial": "Strategy",
        "signature": "Int-\u003eInt-\u003eAllocationStrategy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Extra.html#v:smallChunkSize",
      "description": {
        "fct-descr": "\u003cp\u003eThe recommended chunk size. Currently set to 4k, less the memory management overhead\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Extra",
        "fct-package": "bytestring-builder",
        "fct-signature": "Int",
        "fct-type": "function",
        "title": "smallChunkSize"
      },
      "index": {
        "description": "The recommended chunk size Currently set to less the memory management overhead",
        "hierarchy": "Data ByteString Builder Extra",
        "module": "Data.ByteString.Builder.Extra",
        "name": "smallChunkSize",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Chunk Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Extra.html#v:toLazyByteStringWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eHeavy inlining.\u003c/em\u003e Execute a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e with custom execution parameters.\n\u003c/p\u003e\u003cp\u003eThis function is inlined despite its heavy code-size to allow fusing with\n the allocation strategy. For example, the default \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e execution\n function \u003ccode\u003etoLazyByteString\u003c/code\u003e is defined as follows.\n\u003c/p\u003e\u003cpre\u003e\n {-# NOINLINE toLazyByteString #-}\n toLazyByteString =\n   toLazyByteStringWith (\u003ccode\u003e\u003ca\u003esafeStrategy\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esmallChunkSize\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultChunkSize\u003c/a\u003e\u003c/code\u003e) L.empty\n\u003c/pre\u003e\u003cp\u003ewhere \u003ccode\u003eL.empty\u003c/code\u003e is the zero-length lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn most cases, the parameters used by \u003ccode\u003etoLazyByteString\u003c/code\u003e give good\n performance. A sub-performing case of \u003ccode\u003etoLazyByteString\u003c/code\u003e is executing short\n (\u003c128 bytes) \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es. In this case, the allocation overhead for the first\n 4kb buffer and the trimming cost dominate the cost of executing the\n \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e. You can avoid this problem using\n\u003c/p\u003e\u003cpre\u003etoLazyByteStringWith (safeStrategy 128 smallChunkSize) L.empty\n\u003c/pre\u003e\u003cp\u003eThis reduces the allocation and trimming overhead, as all generated\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es fit into the first buffer and there is no trimming\n required, if more than 64 bytes and less than 128 bytes are written.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Extra",
        "fct-package": "bytestring-builder",
        "fct-signature": "AllocationStrategy-\u003e ByteString-\u003e Builder-\u003e ByteString",
        "fct-type": "function",
        "title": "toLazyByteStringWith"
      },
      "index": {
        "description": "Heavy inlining Execute Builder with custom execution parameters This function is inlined despite its heavy code-size to allow fusing with the allocation strategy For example the default Builder execution function toLazyByteString is defined as follows NOINLINE toLazyByteString toLazyByteString toLazyByteStringWith safeStrategy smallChunkSize defaultChunkSize L.empty where L.empty is the zero-length lazy ByteString In most cases the parameters used by toLazyByteString give good performance sub-performing case of toLazyByteString is executing short bytes Builder In this case the allocation overhead for the first kb buffer and the trimming cost dominate the cost of executing the Builder You can avoid this problem using toLazyByteStringWith safeStrategy smallChunkSize L.empty This reduces the allocation and trimming overhead as all generated ByteString fit into the first buffer and there is no trimming required if more than bytes and less than bytes are written",
        "hierarchy": "Data ByteString Builder Extra",
        "module": "Data.ByteString.Builder.Extra",
        "name": "toLazyByteStringWith",
        "normalized": "AllocationStrategy-\u003eByteString-\u003eBuilder-\u003eByteString",
        "package": "bytestring-builder",
        "partial": "Lazy Byte String With",
        "signature": "AllocationStrategy-\u003eByteString-\u003eBuilder-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Extra.html#v:untrimmedStrategy",
      "description": {
        "fct-descr": "\u003cp\u003eUse this strategy for generating lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es whose chunks are\n discarded right after they are generated. For example, if you just generate\n them to write them to a network socket.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Extra",
        "fct-package": "bytestring-builder",
        "fct-signature": "Int-\u003e Int-\u003e AllocationStrategy",
        "fct-type": "function",
        "title": "untrimmedStrategy"
      },
      "index": {
        "description": "Use this strategy for generating lazy ByteString whose chunks are discarded right after they are generated For example if you just generate them to write them to network socket",
        "hierarchy": "Data ByteString Builder Extra",
        "module": "Data.ByteString.Builder.Extra",
        "name": "untrimmedStrategy",
        "normalized": "Int-\u003eInt-\u003eAllocationStrategy",
        "package": "bytestring-builder",
        "partial": "Strategy",
        "signature": "Int-\u003eInt-\u003eAllocationStrategy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Extra.html#v:word16Host",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Extra",
        "fct-package": "bytestring-builder",
        "fct-signature": "Word16 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-Extra.html#word16Host",
        "fct-type": "function",
        "title": "word16Host"
      },
      "index": {
        "description": "Encode Word16 in native host order and host endianness",
        "hierarchy": "Data ByteString Builder Extra",
        "module": "Data.ByteString.Builder.Extra",
        "name": "word16Host",
        "normalized": "Word-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Host",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Extra.html#v:word32Host",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Extra",
        "fct-package": "bytestring-builder",
        "fct-signature": "Word32 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-Extra.html#word32Host",
        "fct-type": "function",
        "title": "word32Host"
      },
      "index": {
        "description": "Encode Word32 in native host order and host endianness",
        "hierarchy": "Data ByteString Builder Extra",
        "module": "Data.ByteString.Builder.Extra",
        "name": "word32Host",
        "normalized": "Word-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Host",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Extra.html#v:word64Host",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Extra",
        "fct-package": "bytestring-builder",
        "fct-signature": "Word64 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-Extra.html#word64Host",
        "fct-type": "function",
        "title": "word64Host"
      },
      "index": {
        "description": "Encode Word64 in native host order and host endianness",
        "hierarchy": "Data ByteString Builder Extra",
        "module": "Data.ByteString.Builder.Extra",
        "name": "word64Host",
        "normalized": "Word-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Host",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Extra.html#v:wordHost",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a single native machine \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e is encoded in host order,\n host endian form, for the machine you're on. On a 64 bit machine the \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e\n is an 8 byte value, on a 32 bit machine, 4 bytes. Values encoded this way\n are not portable to different endian or word sized machines, without\n conversion.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Extra",
        "fct-package": "bytestring-builder",
        "fct-signature": "Word -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-Extra.html#wordHost",
        "fct-type": "function",
        "title": "wordHost"
      },
      "index": {
        "description": "Encode single native machine Word The Word is encoded in host order host endian form for the machine you re on On bit machine the Word is an byte value on bit machine bytes Values encoded this way are not portable to different endian or word sized machines without conversion",
        "hierarchy": "Data ByteString Builder Extra",
        "module": "Data.ByteString.Builder.Extra",
        "name": "wordHost",
        "normalized": "Word-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Host",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e \u003cem\u003eprimitives\u003c/em\u003e, which are lower level building\nblocks for constructing \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es. You don't need to go down to this level but\nit can be slightly faster.\n\u003c/p\u003e\u003cp\u003eMorally, builder primitives are like functions \u003ccode\u003ea -\u003e Builder\u003c/code\u003e, that is they\ntake a value and encode it as a sequence of bytes, represented as a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e.\nOf course their implementation is a bit more specialised.\n\u003c/p\u003e\u003cp\u003eBuilder primitives come in two forms: fixed-size and bounded-size.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003eFixed(-size) primitives\u003c/em\u003e are builder primitives that always result in a\n  sequence of bytes of a fixed length. That is, the length is independent of\n  the value that is encoded. An example of a fixed size primitive is the\n  big-endian encoding of a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e, which always results in exactly 8 bytes.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eBounded(-size) primitives\u003c/em\u003e are builder primitives that always result in a\n  sequence of bytes that is no larger than a predetermined bound. That is, the\n  bound is independent of the value that is encoded but the actual length will\n  depend on the value. An example for a bounded primitive is the UTF-8 encoding\n  of a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e, which can be 1,2,3 or 4 bytes long, so the bound is 4 bytes.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that fixed primitives can be considered as a special case of bounded\nprimitives, and we can lift from fixed to bounded.\n\u003c/p\u003e\u003cp\u003eBecause bounded primitives are the more general case, in this documentation we\nonly refer to fixed size primitives where it matters that the resulting\nsequence of bytes is of a fixed length. Otherwise, we just refer to bounded\nsize primitives.\n\u003c/p\u003e\u003cp\u003eThe purpose of using builder primitives is to improve the performance of\n\u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es. These improvements stem from making the two most common steps\nperformed by a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e more efficient. We explain these two steps in turn.\n\u003c/p\u003e\u003cp\u003eThe first most common step is the concatenation of two \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es. Internally,\nconcatenation corresponds to function composition. (Note that \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es can\nbe seen as difference-lists of buffer-filling functions; cf.\n\u003ca\u003ehttp://hackage.haskell.org/cgi-bin/hackage-scripts/package/dlist\u003c/a\u003e. )\nFunction composition is a fast \u003cem\u003eO(1)\u003c/em\u003e operation. However, we can use bounded\nprimitives to remove some of these function compositions altogether, which is\nmore efficient.\n\u003c/p\u003e\u003cp\u003eThe second most common step performed by a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e is to fill a buffer using\na bounded primitives, which works as follows. The \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e checks whether\nthere is enough space left to execute the bounded primitive. If there is, then\nthe \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e executes the bounded primitive and calls the next \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e with\nthe updated buffer. Otherwise, the \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e signals its driver that it\nrequires a new buffer. This buffer must be at least as large as the bound of\nthe primitive. We can use bounded primitives to reduce the number of\nbuffer-free checks by fusing the buffer-free checks of consecutive \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es.\nWe can also use bounded primitives to simplify the control flow for signalling\nthat a buffer is full by ensuring that we check first that there is enough\nspace left and only then decide on how to encode a given value.\n\u003c/p\u003e\u003cp\u003eLet us illustrate these improvements on the CSV-table rendering example from\n\u003ca\u003eData.ByteString.Builder\u003c/a\u003e. Its \"hot code\" is the rendering of a table's\ncells, which we implement as follows using only the functions from the\n\u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e API.\n\u003c/p\u003e\u003cpre\u003e\nimport \u003ca\u003eData.ByteString.Builder\u003c/a\u003e as B\n\nrenderCell :: Cell -\u003e Builder\nrenderCell (StringC cs) = renderString cs\nrenderCell (IntC i)     = B.intDec i\n\nrenderString :: String -\u003e Builder\nrenderString cs = B.charUtf8 '\"' \u003c\u003e foldMap escape cs \u003c\u003e B.charUtf8 '\"'\n  where\n    escape '\\\\' = B.charUtf8 '\\\\' \u003c\u003e B.charUtf8 '\\\\'\n    escape '\\\"' = B.charUtf8 '\\\\' \u003c\u003e B.charUtf8 '\\\"'\n    escape c    = B.charUtf8 c\n\u003c/pre\u003e\u003cp\u003eEfficient encoding of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es as decimal numbers is performed by \u003ccode\u003eintDec\u003c/code\u003e.\nOptimization potential exists for the escaping of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es. The above\nimplementation has two optimization opportunities. First, the buffer-free\nchecks of the \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es for escaping double quotes and backslashes can be\nfused. Second, the concatenations performed by \u003ccode\u003efoldMap\u003c/code\u003e can be eliminated.\nThe following implementation exploits these optimizations.\n\u003c/p\u003e\u003cpre\u003e\nimport qualified Data.ByteString.Builder.Prim  as P\nimport           Data.ByteString.Builder.Prim\n                 ( \u003ccode\u003e\u003ca\u003econdB\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eliftFixedToBounded\u003c/a\u003e\u003c/code\u003e, (\u003ccode\u003e\u003ca\u003e\u003e*\u003c\u003c/a\u003e\u003c/code\u003e), (\u003ccode\u003e\u003ca\u003e\u003e$\u003c\u003c/a\u003e\u003c/code\u003e) )\n\nrenderString :: String -\u003e Builder\nrenderString cs =\n    B.charUtf8 '\"' \u003c\u003e E.\u003ccode\u003eencodeListWithB\u003c/code\u003e escape cs \u003c\u003e B.charUtf8 '\"'\n  where\n    escape :: E.\u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003e Char\n    escape =\n      \u003ccode\u003e\u003ca\u003econdB\u003c/a\u003e\u003c/code\u003e (== '\\\\') (fixed2 ('\\\\', '\\\\')) $\n      \u003ccode\u003e\u003ca\u003econdB\u003c/a\u003e\u003c/code\u003e (== '\\\"') (fixed2 ('\\\\', '\\\"')) $\n      E.\u003ccode\u003e\u003ca\u003echarUtf8\u003c/a\u003e\u003c/code\u003e\n    &#160;\n    {-# INLINE fixed2 #-}\n    fixed2 x = \u003ccode\u003e\u003ca\u003eliftFixedToBounded\u003c/a\u003e\u003c/code\u003e $ const x \u003ccode\u003e\u003ca\u003e\u003e$\u003c\u003c/a\u003e\u003c/code\u003e E.\u003ccode\u003e\u003ca\u003echar7\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e\u003e*\u003c\u003c/a\u003e\u003c/code\u003e E.\u003ccode\u003e\u003ca\u003echar7\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eThe code should be mostly self-explanatory. The slightly awkward syntax is\nbecause the combinators are written such that the size-bound of the resulting\n\u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003e can be computed at compile time. We also explicitly inline the\n\u003ccode\u003efixed2\u003c/code\u003e primitive, which encodes a fixed tuple of characters, to ensure that\nthe bound computation happens at compile time. When encoding the following list\nof \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es, the optimized implementation of \u003ccode\u003erenderString\u003c/code\u003e is two times\nfaster.\n\u003c/p\u003e\u003cpre\u003e\nmaxiStrings :: [String]\nmaxiStrings = take 1000 $ cycle [\"hello\", \"\\\"1\\\"\", \"&#955;-w&#246;rld\"]\n\u003c/pre\u003e\u003cp\u003eMost of the performance gain stems from using \u003ccode\u003e\u003ca\u003eprimMapListBounded\u003c/a\u003e\u003c/code\u003e, which\nencodes a list of values from left-to-right with a \u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003e. It exploits\nthe \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e internals to avoid unnecessary function compositions (i.e.,\nconcatenations). In the future, we might expect the compiler to perform the\noptimizations implemented in \u003ccode\u003e\u003ca\u003eprimMapListBounded\u003c/a\u003e\u003c/code\u003e. However, it seems that the\ncode is currently to complicated for the compiler to see through. Therefore, we\nprovide the \u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003e escape hatch, which allows data structures to provide\nvery efficient encoding traversals, like \u003ccode\u003e\u003ca\u003eprimMapListBounded\u003c/a\u003e\u003c/code\u003e for lists.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003es are a bit verbose, but quite versatile. Here is an\nexample of a \u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003e for combined HTML escaping and UTF-8 encoding. It\nexploits that the escaped character with the maximal Unicode codepoint is '\u003e'.\n\u003c/p\u003e\u003cpre\u003e\n{-# INLINE charUtf8HtmlEscaped #-}\ncharUtf8HtmlEscaped :: E.BoundedPrim Char\ncharUtf8HtmlEscaped =\n    \u003ccode\u003e\u003ca\u003econdB\u003c/a\u003e\u003c/code\u003e (\u003e  '\u003e' ) E.\u003ccode\u003e\u003ca\u003echarUtf8\u003c/a\u003e\u003c/code\u003e $\n    \u003ccode\u003e\u003ca\u003econdB\u003c/a\u003e\u003c/code\u003e (== '\u003c' ) (fixed4 ('&',('l',('t',';')))) $        -- &lt;\n    \u003ccode\u003e\u003ca\u003econdB\u003c/a\u003e\u003c/code\u003e (== '\u003e' ) (fixed4 ('&',('g',('t',';')))) $        -- &gt;\n    \u003ccode\u003e\u003ca\u003econdB\u003c/a\u003e\u003c/code\u003e (== '&' ) (fixed5 ('&',('a',('m',('p',';'))))) $  -- &amp;\n    \u003ccode\u003e\u003ca\u003econdB\u003c/a\u003e\u003c/code\u003e (== '\"' ) (fixed5 ('&',('#',('3',('4',';'))))) $  -- &#34;\n    \u003ccode\u003e\u003ca\u003econdB\u003c/a\u003e\u003c/code\u003e (== '\\'') (fixed5 ('&',('#',('3',('9',';'))))) $  -- &#39;\n    (\u003ccode\u003e\u003ca\u003eliftFixedToBounded\u003c/a\u003e\u003c/code\u003e E.\u003ccode\u003e\u003ca\u003echar7\u003c/a\u003e\u003c/code\u003e)         -- fallback for \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003es smaller than '\u003e'\n  where\n    {-# INLINE fixed4 #-}\n    fixed4 x = \u003ccode\u003e\u003ca\u003eliftFixedToBounded\u003c/a\u003e\u003c/code\u003e $ const x \u003ccode\u003e\u003ca\u003e\u003e$\u003c\u003c/a\u003e\u003c/code\u003e\n      E.char7 \u003ccode\u003e\u003ca\u003e\u003e*\u003c\u003c/a\u003e\u003c/code\u003e E.char7 \u003ccode\u003e\u003ca\u003e\u003e*\u003c\u003c/a\u003e\u003c/code\u003e E.char7 \u003ccode\u003e\u003ca\u003e\u003e*\u003c\u003c/a\u003e\u003c/code\u003e E.char7\n    &#160;\n    {-# INLINE fixed5 #-}\n    fixed5 x = \u003ccode\u003e\u003ca\u003eliftFixedToBounded\u003c/a\u003e\u003c/code\u003e $ const x \u003ccode\u003e\u003ca\u003e\u003e$\u003c\u003c/a\u003e\u003c/code\u003e\n      E.char7 \u003ccode\u003e\u003ca\u003e\u003e*\u003c\u003c/a\u003e\u003c/code\u003e E.char7 \u003ccode\u003e\u003ca\u003e\u003e*\u003c\u003c/a\u003e\u003c/code\u003e E.char7 \u003ccode\u003e\u003ca\u003e\u003e*\u003c\u003c/a\u003e\u003c/code\u003e E.char7 \u003ccode\u003e\u003ca\u003e\u003e*\u003c\u003c/a\u003e\u003c/code\u003e E.char7\n\u003c/pre\u003e\u003cp\u003eThis module currently does not expose functions that require the special\nproperties of fixed-size primitives. They are useful for prefixing \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es\nwith their size or for implementing chunked encodings. We will expose the\ncorresponding functions in future releases of this library.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "module",
        "fct-source": "src/Data-ByteString-Builder-Prim.html",
        "fct-type": "module",
        "title": "Prim"
      },
      "index": {
        "description": "This module provides Builder primitives which are lower level building blocks for constructing Builder You don need to go down to this level but it can be slightly faster Morally builder primitives are like functions Builder that is they take value and encode it as sequence of bytes represented as Builder Of course their implementation is bit more specialised Builder primitives come in two forms fixed-size and bounded-size Fixed size primitives are builder primitives that always result in sequence of bytes of fixed length That is the length is independent of the value that is encoded An example of fixed size primitive is the big-endian encoding of Word64 which always results in exactly bytes Bounded size primitives are builder primitives that always result in sequence of bytes that is no larger than predetermined bound That is the bound is independent of the value that is encoded but the actual length will depend on the value An example for bounded primitive is the UTF-8 encoding of Char which can be or bytes long so the bound is bytes Note that fixed primitives can be considered as special case of bounded primitives and we can lift from fixed to bounded Because bounded primitives are the more general case in this documentation we only refer to fixed size primitives where it matters that the resulting sequence of bytes is of fixed length Otherwise we just refer to bounded size primitives The purpose of using builder primitives is to improve the performance of Builder These improvements stem from making the two most common steps performed by Builder more efficient We explain these two steps in turn The first most common step is the concatenation of two Builder Internally concatenation corresponds to function composition Note that Builder can be seen as difference-lists of buffer-filling functions cf http hackage.haskell.org cgi-bin hackage-scripts package dlist Function composition is fast operation However we can use bounded primitives to remove some of these function compositions altogether which is more efficient The second most common step performed by Builder is to fill buffer using bounded primitives which works as follows The Builder checks whether there is enough space left to execute the bounded primitive If there is then the Builder executes the bounded primitive and calls the next Builder with the updated buffer Otherwise the Builder signals its driver that it requires new buffer This buffer must be at least as large as the bound of the primitive We can use bounded primitives to reduce the number of buffer-free checks by fusing the buffer-free checks of consecutive Builder We can also use bounded primitives to simplify the control flow for signalling that buffer is full by ensuring that we check first that there is enough space left and only then decide on how to encode given value Let us illustrate these improvements on the CSV-table rendering example from Data.ByteString.Builder Its hot code is the rendering of table cells which we implement as follows using only the functions from the Builder API import Data.ByteString.Builder as renderCell Cell Builder renderCell StringC cs renderString cs renderCell IntC B.intDec renderString String Builder renderString cs B.charUtf8 foldMap escape cs B.charUtf8 where escape B.charUtf8 B.charUtf8 escape B.charUtf8 B.charUtf8 escape B.charUtf8 Efficient encoding of Int as decimal numbers is performed by intDec Optimization potential exists for the escaping of String The above implementation has two optimization opportunities First the buffer-free checks of the Builder for escaping double quotes and backslashes can be fused Second the concatenations performed by foldMap can be eliminated The following implementation exploits these optimizations import qualified Data.ByteString.Builder.Prim as import Data.ByteString.Builder.Prim condB liftFixedToBounded renderString String Builder renderString cs B.charUtf8 encodeListWithB escape cs B.charUtf8 where escape BoundedPrim Char escape condB fixed2 condB fixed2 charUtf8 INLINE fixed2 fixed2 liftFixedToBounded const char7 char7 The code should be mostly self-explanatory The slightly awkward syntax is because the combinators are written such that the size-bound of the resulting BoundedPrim can be computed at compile time We also explicitly inline the fixed2 primitive which encodes fixed tuple of characters to ensure that the bound computation happens at compile time When encoding the following list of String the optimized implementation of renderString is two times faster maxiStrings String maxiStrings take cycle hello rld Most of the performance gain stems from using primMapListBounded which encodes list of values from left-to-right with BoundedPrim It exploits the Builder internals to avoid unnecessary function compositions i.e concatenations In the future we might expect the compiler to perform the optimizations implemented in primMapListBounded However it seems that the code is currently to complicated for the compiler to see through Therefore we provide the BoundedPrim escape hatch which allows data structures to provide very efficient encoding traversals like primMapListBounded for lists Note that BoundedPrim are bit verbose but quite versatile Here is an example of BoundedPrim for combined HTML escaping and UTF-8 encoding It exploits that the escaped character with the maximal Unicode codepoint is INLINE charUtf8HtmlEscaped charUtf8HtmlEscaped E.BoundedPrim Char charUtf8HtmlEscaped condB charUtf8 condB fixed4 lt condB fixed4 gt condB fixed5 amp condB fixed5 condB fixed5 liftFixedToBounded char7 fallback for Char smaller than where INLINE fixed4 fixed4 liftFixedToBounded const E.char7 E.char7 E.char7 E.char7 INLINE fixed5 fixed5 liftFixedToBounded const E.char7 E.char7 E.char7 E.char7 E.char7 This module currently does not expose functions that require the special properties of fixed-size primitives They are useful for prefixing Builder with their size or for implementing chunked encodings We will expose the corresponding functions in future releases of this library",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "Prim",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Prim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#t:BoundedPrim",
      "description": {
        "fct-descr": "\u003cp\u003eA builder primitive that always results in sequence of bytes that is no longer\n than a pre-determined bound.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "data",
        "fct-source": "src/Data-ByteString-Builder-Prim-Internal.html#BoundedPrim",
        "fct-type": "data",
        "title": "BoundedPrim"
      },
      "index": {
        "description": "builder primitive that always results in sequence of bytes that is no longer than pre-determined bound",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "BoundedPrim",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Bounded Prim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#t:FixedPrim",
      "description": {
        "fct-descr": "\u003cp\u003eA builder primitive that always results in a sequence of bytes of a\n pre-determined, fixed size.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "data",
        "fct-source": "src/Data-ByteString-Builder-Prim-Internal.html#FixedPrim",
        "fct-type": "data",
        "title": "FixedPrim"
      },
      "index": {
        "description": "builder primitive that always results in sequence of bytes of pre-determined fixed size",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "FixedPrim",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Fixed Prim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:-62--36--60-",
      "description": {
        "fct-descr": "\u003cp\u003eA fmap-like operator for builder primitives, both bounded and fixed size.\n\u003c/p\u003e\u003cp\u003eBuilder primitives are contravariant so it's like the normal fmap, but\n backwards (look at the type). (If it helps to remember, the operator symbol\n is like (\u003ca\u003e$\u003c/a\u003e) but backwards.)\n\u003c/p\u003e\u003cp\u003eWe can use it for example to prepend and/or append fixed values to an\n primitive.\n\u003c/p\u003e\u003cpre\u003eshowEncoding ((\\x -\u003e ('\\'', (x, '\\''))) \u003e$\u003c fixed3) 'x' = \"'x'\"\n  where\n    fixed3 = char7 \u003e*\u003c char7 \u003e*\u003c char7\n\u003c/pre\u003e\u003cp\u003eNote that the rather verbose syntax for composition stems from the\n requirement to be able to compute the size / size bound at compile time.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "(b -\u003e a) -\u003e f a -\u003e f b",
        "fct-source": "src/Data-ByteString-Builder-Prim-Internal.html#%3E%24%3C",
        "fct-type": "function",
        "title": "(\u003e$\u003c)"
      },
      "index": {
        "description": "fmap-like operator for builder primitives both bounded and fixed size Builder primitives are contravariant so it like the normal fmap but backwards look at the type If it helps to remember the operator symbol is like but backwards We can use it for example to prepend and or append fixed values to an primitive showEncoding fixed3 where fixed3 char7 char7 char7 Note that the rather verbose syntax for composition stems from the requirement to be able to compute the size size bound at compile time",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "(\u003e$\u003c) \u003e$\u003c",
        "normalized": "(a-\u003eb)-\u003ec b-\u003ec a",
        "package": "bytestring-builder",
        "partial": "",
        "signature": "(b-\u003ea)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:-62--42--60-",
      "description": {
        "fct-descr": "\u003cp\u003eA pairing/concatenation operator for builder primitives, both bounded and\n fixed size.\n\u003c/p\u003e\u003cp\u003eFor example,\n\u003c/p\u003e\u003cpre\u003e toLazyByteString (primFixed (char7 \u003e*\u003c char7) ('x','y')) = \"xy\"\n\u003c/pre\u003e\u003cp\u003eWe can combine multiple primitives using \u003ccode\u003e\u003ca\u003e\u003e*\u003c\u003c/a\u003e\u003c/code\u003e multiple times.\n\u003c/p\u003e\u003cpre\u003e toLazyByteString (primFixed (char7 \u003e*\u003c char7 \u003e*\u003c char7) ('x',('y','z'))) = \"xyz\"\n\u003c/pre\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "f a -\u003e f b -\u003e f (a, b)",
        "fct-source": "src/Data-ByteString-Builder-Prim-Internal.html#%3E%2A%3C",
        "fct-type": "function",
        "title": "(\u003e*\u003c)"
      },
      "index": {
        "description": "pairing concatenation operator for builder primitives both bounded and fixed size For example toLazyByteString primFixed char7 char7 xy We can combine multiple primitives using multiple times toLazyByteString primFixed char7 char7 char7 xyz",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "(\u003e*\u003c) \u003e*\u003c",
        "normalized": "a b-\u003ea c-\u003ea(b,c)",
        "package": "bytestring-builder",
        "partial": "",
        "signature": "f a-\u003ef b-\u003ef(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:char7",
      "description": {
        "fct-descr": "\u003cp\u003eEncode the least 7-bits of a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e using the ASCII encoding.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Char",
        "fct-source": "src/Data-ByteString-Builder-Prim-ASCII.html#char7",
        "fct-type": "function",
        "title": "char7"
      },
      "index": {
        "description": "Encode the least bits of Char using the ASCII encoding",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "char7",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:char8",
      "description": {
        "fct-descr": "\u003cp\u003eChar8 encode a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Char",
        "fct-source": "src/Data-ByteString-Builder-Prim.html#char8",
        "fct-type": "function",
        "title": "char8"
      },
      "index": {
        "description": "Char8 encode Char",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "char8",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:charUtf8",
      "description": {
        "fct-descr": "\u003cp\u003eUTF-8 encode a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "BoundedPrim Char",
        "fct-source": "src/Data-ByteString-Builder-Prim.html#charUtf8",
        "fct-type": "function",
        "title": "charUtf8"
      },
      "index": {
        "description": "UTF-8 encode Char",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "charUtf8",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Utf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:condB",
      "description": {
        "fct-descr": "\u003cp\u003eConditionally select a \u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003e.\n For example, we can implement the ASCII primitive that drops characters with\n Unicode codepoints above 127 as follows.\n\u003c/p\u003e\u003cpre\u003e\ncharASCIIDrop = \u003ccode\u003e\u003ca\u003econdB\u003c/a\u003e\u003c/code\u003e (\u003c '\\128') (\u003ccode\u003efromF\u003c/code\u003e \u003ccode\u003echar7\u003c/code\u003e) \u003ccode\u003e\u003ca\u003eemptyB\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "(a -\u003e Bool) -\u003e BoundedPrim a -\u003e BoundedPrim a -\u003e BoundedPrim a",
        "fct-source": "src/Data-ByteString-Builder-Prim-Internal.html#condB",
        "fct-type": "function",
        "title": "condB"
      },
      "index": {
        "description": "Conditionally select BoundedPrim For example we can implement the ASCII primitive that drops characters with Unicode codepoints above as follows charASCIIDrop condB fromF char7 emptyB",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "condB",
        "normalized": "(a-\u003eBool)-\u003eBoundedPrim a-\u003eBoundedPrim a-\u003eBoundedPrim a",
        "package": "bytestring-builder",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eBoundedPrim a-\u003eBoundedPrim a-\u003eBoundedPrim a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:doubleBE",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Double",
        "fct-source": "src/Data-ByteString-Builder-Prim-Binary.html#doubleBE",
        "fct-type": "function",
        "title": "doubleBE"
      },
      "index": {
        "description": "Encode Double in big endian format",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "doubleBE",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "BE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:doubleHexFixed",
      "description": {
        "fct-descr": "\u003cp\u003eEncode an IEEE \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e using 16 nibbles.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Double",
        "fct-source": "src/Data-ByteString-Builder-Prim-ASCII.html#doubleHexFixed",
        "fct-type": "function",
        "title": "doubleHexFixed"
      },
      "index": {
        "description": "Encode an IEEE Double using nibbles",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "doubleHexFixed",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Hex Fixed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:doubleHost",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Double",
        "fct-source": "src/Data-ByteString-Builder-Prim-Binary.html#doubleHost",
        "fct-type": "function",
        "title": "doubleHost"
      },
      "index": {
        "description": "Encode Double in native host order and host endianness",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "doubleHost",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:doubleLE",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Double",
        "fct-source": "src/Data-ByteString-Builder-Prim-Binary.html#doubleLE",
        "fct-type": "function",
        "title": "doubleLE"
      },
      "index": {
        "description": "Encode Double in little endian format",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "doubleLE",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "LE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:eitherB",
      "description": {
        "fct-descr": "\u003cp\u003eEncode an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e value using the first \u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e\n values and the second \u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e\u003cp\u003eNote that the functions \u003ccode\u003e\u003ca\u003eeitherB\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003epairB\u003c/code\u003e, and \u003ccode\u003econtramapB\u003c/code\u003e (written below\n using \u003ccode\u003e\u003ca\u003e\u003e$\u003c\u003c/a\u003e\u003c/code\u003e) suffice to construct \u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003es for all non-recursive\n algebraic datatypes. For example,\n\u003c/p\u003e\u003cpre\u003e\nmaybeB :: BoundedPrim () -\u003e BoundedPrim a -\u003e BoundedPrim (Maybe a)\nmaybeB nothing just = \u003ccode\u003e\u003ca\u003emaybe\u003c/a\u003e\u003c/code\u003e (Left ()) Right \u003ccode\u003e\u003ca\u003e\u003e$\u003c\u003c/a\u003e\u003c/code\u003e eitherB nothing just\n\u003c/pre\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "BoundedPrim a -\u003e BoundedPrim b -\u003e BoundedPrim (Either a b)",
        "fct-source": "src/Data-ByteString-Builder-Prim-Internal.html#eitherB",
        "fct-type": "function",
        "title": "eitherB"
      },
      "index": {
        "description": "Encode an Either value using the first BoundedPrim for Left values and the second BoundedPrim for Right values Note that the functions eitherB pairB and contramapB written below using suffice to construct BoundedPrim for all non-recursive algebraic datatypes For example maybeB BoundedPrim BoundedPrim BoundedPrim Maybe maybeB nothing just maybe Left Right eitherB nothing just",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "eitherB",
        "normalized": "BoundedPrim a-\u003eBoundedPrim b-\u003eBoundedPrim(Either a b)",
        "package": "bytestring-builder",
        "partial": "",
        "signature": "BoundedPrim a-\u003eBoundedPrim b-\u003eBoundedPrim(Either a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:emptyB",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003e that always results in the zero-length sequence.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "BoundedPrim a",
        "fct-source": "src/Data-ByteString-Builder-Prim-Internal.html#emptyB",
        "fct-type": "function",
        "title": "emptyB"
      },
      "index": {
        "description": "The BoundedPrim that always results in the zero-length sequence",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "emptyB",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:emptyF",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFixedPrim\u003c/a\u003e\u003c/code\u003e that always results in the zero-length sequence.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim a",
        "fct-source": "src/Data-ByteString-Builder-Prim-Internal.html#emptyF",
        "fct-type": "function",
        "title": "emptyF"
      },
      "index": {
        "description": "The FixedPrim that always results in the zero-length sequence",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "emptyF",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:floatBE",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Float",
        "fct-source": "src/Data-ByteString-Builder-Prim-Binary.html#floatBE",
        "fct-type": "function",
        "title": "floatBE"
      },
      "index": {
        "description": "Encode Float in big endian format",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "floatBE",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "BE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:floatHexFixed",
      "description": {
        "fct-descr": "\u003cp\u003eEncode an IEEE \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e using 8 nibbles.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Float",
        "fct-source": "src/Data-ByteString-Builder-Prim-ASCII.html#floatHexFixed",
        "fct-type": "function",
        "title": "floatHexFixed"
      },
      "index": {
        "description": "Encode an IEEE Float using nibbles",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "floatHexFixed",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Hex Fixed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:floatHost",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e in native host order and host endianness. Values written\n this way are not portable to different endian machines, without conversion.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Float",
        "fct-source": "src/Data-ByteString-Builder-Prim-Binary.html#floatHost",
        "fct-type": "function",
        "title": "floatHost"
      },
      "index": {
        "description": "Encode Float in native host order and host endianness Values written this way are not portable to different endian machines without conversion",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "floatHost",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:floatLE",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Float",
        "fct-source": "src/Data-ByteString-Builder-Prim-Binary.html#floatLE",
        "fct-type": "function",
        "title": "floatLE"
      },
      "index": {
        "description": "Encode Float in little endian format",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "floatLE",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "LE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:int16BE",
      "description": {
        "fct-descr": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003es in big endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Int16",
        "fct-source": "src/Data-ByteString-Builder-Prim-Binary.html#int16BE",
        "fct-type": "function",
        "title": "int16BE"
      },
      "index": {
        "description": "Encoding Int16 in big endian format",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "int16BE",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "BE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:int16Dec",
      "description": {
        "fct-descr": "\u003cp\u003eDecimal encoding of an \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "BoundedPrim Int16",
        "fct-source": "src/Data-ByteString-Builder-Prim-ASCII.html#int16Dec",
        "fct-type": "function",
        "title": "int16Dec"
      },
      "index": {
        "description": "Decimal encoding of an Int16",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "int16Dec",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:int16HexFixed",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e using 4 nibbles.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Int16",
        "fct-source": "src/Data-ByteString-Builder-Prim-ASCII.html#int16HexFixed",
        "fct-type": "function",
        "title": "int16HexFixed"
      },
      "index": {
        "description": "Encode Int16 using nibbles",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "int16HexFixed",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Hex Fixed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:int16Host",
      "description": {
        "fct-descr": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003es in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Int16",
        "fct-source": "src/Data-ByteString-Builder-Prim-Binary.html#int16Host",
        "fct-type": "function",
        "title": "int16Host"
      },
      "index": {
        "description": "Encoding Int16 in native host order and host endianness",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "int16Host",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:int16LE",
      "description": {
        "fct-descr": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003es in little endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Int16",
        "fct-source": "src/Data-ByteString-Builder-Prim-Binary.html#int16LE",
        "fct-type": "function",
        "title": "int16LE"
      },
      "index": {
        "description": "Encoding Int16 in little endian format",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "int16LE",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "LE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:int32BE",
      "description": {
        "fct-descr": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003es in big endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Int32",
        "fct-source": "src/Data-ByteString-Builder-Prim-Binary.html#int32BE",
        "fct-type": "function",
        "title": "int32BE"
      },
      "index": {
        "description": "Encoding Int32 in big endian format",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "int32BE",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "BE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:int32Dec",
      "description": {
        "fct-descr": "\u003cp\u003eDecimal encoding of an \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "BoundedPrim Int32",
        "fct-source": "src/Data-ByteString-Builder-Prim-ASCII.html#int32Dec",
        "fct-type": "function",
        "title": "int32Dec"
      },
      "index": {
        "description": "Decimal encoding of an Int32",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "int32Dec",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:int32HexFixed",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e using 8 nibbles.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Int32",
        "fct-source": "src/Data-ByteString-Builder-Prim-ASCII.html#int32HexFixed",
        "fct-type": "function",
        "title": "int32HexFixed"
      },
      "index": {
        "description": "Encode Int32 using nibbles",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "int32HexFixed",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Hex Fixed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:int32Host",
      "description": {
        "fct-descr": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003es in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Int32",
        "fct-source": "src/Data-ByteString-Builder-Prim-Binary.html#int32Host",
        "fct-type": "function",
        "title": "int32Host"
      },
      "index": {
        "description": "Encoding Int32 in native host order and host endianness",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "int32Host",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:int32LE",
      "description": {
        "fct-descr": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003es in little endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Int32",
        "fct-source": "src/Data-ByteString-Builder-Prim-Binary.html#int32LE",
        "fct-type": "function",
        "title": "int32LE"
      },
      "index": {
        "description": "Encoding Int32 in little endian format",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "int32LE",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "LE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:int64BE",
      "description": {
        "fct-descr": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003es in big endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Int64",
        "fct-source": "src/Data-ByteString-Builder-Prim-Binary.html#int64BE",
        "fct-type": "function",
        "title": "int64BE"
      },
      "index": {
        "description": "Encoding Int64 in big endian format",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "int64BE",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "BE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:int64Dec",
      "description": {
        "fct-descr": "\u003cp\u003eDecimal encoding of an \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "BoundedPrim Int64",
        "fct-source": "src/Data-ByteString-Builder-Prim-ASCII.html#int64Dec",
        "fct-type": "function",
        "title": "int64Dec"
      },
      "index": {
        "description": "Decimal encoding of an Int64",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "int64Dec",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:int64HexFixed",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e using 16 nibbles.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Int64",
        "fct-source": "src/Data-ByteString-Builder-Prim-ASCII.html#int64HexFixed",
        "fct-type": "function",
        "title": "int64HexFixed"
      },
      "index": {
        "description": "Encode Int64 using nibbles",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "int64HexFixed",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Hex Fixed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:int64Host",
      "description": {
        "fct-descr": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003es in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Int64",
        "fct-source": "src/Data-ByteString-Builder-Prim-Binary.html#int64Host",
        "fct-type": "function",
        "title": "int64Host"
      },
      "index": {
        "description": "Encoding Int64 in native host order and host endianness",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "int64Host",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:int64LE",
      "description": {
        "fct-descr": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003es in little endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Int64",
        "fct-source": "src/Data-ByteString-Builder-Prim-Binary.html#int64LE",
        "fct-type": "function",
        "title": "int64LE"
      },
      "index": {
        "description": "Encoding Int64 in little endian format",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "int64LE",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "LE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:int8",
      "description": {
        "fct-descr": "\u003cp\u003eEncoding single signed bytes as-is.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Int8",
        "fct-source": "src/Data-ByteString-Builder-Prim-Binary.html#int8",
        "fct-type": "function",
        "title": "int8"
      },
      "index": {
        "description": "Encoding single signed bytes as-is",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "int8",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:int8Dec",
      "description": {
        "fct-descr": "\u003cp\u003eDecimal encoding of an \u003ccode\u003e\u003ca\u003eInt8\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "BoundedPrim Int8",
        "fct-source": "src/Data-ByteString-Builder-Prim-ASCII.html#int8Dec",
        "fct-type": "function",
        "title": "int8Dec"
      },
      "index": {
        "description": "Decimal encoding of an Int8",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "int8Dec",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:int8HexFixed",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eInt8\u003c/a\u003e\u003c/code\u003e using 2 nibbles (hexadecimal digits).\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Int8",
        "fct-source": "src/Data-ByteString-Builder-Prim-ASCII.html#int8HexFixed",
        "fct-type": "function",
        "title": "int8HexFixed"
      },
      "index": {
        "description": "Encode Int8 using nibbles hexadecimal digits",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "int8HexFixed",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Hex Fixed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:intDec",
      "description": {
        "fct-descr": "\u003cp\u003eDecimal encoding of an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "BoundedPrim Int",
        "fct-source": "src/Data-ByteString-Builder-Prim-ASCII.html#intDec",
        "fct-type": "function",
        "title": "intDec"
      },
      "index": {
        "description": "Decimal encoding of an Int",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "intDec",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:intHost",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a single native machine \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es is encoded in host order,\n host endian form, for the machine you are on. On a 64 bit machine the \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\n is an 8 byte value, on a 32 bit machine, 4 bytes. Values encoded this way\n are not portable to different endian or integer sized machines, without\n conversion.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Int",
        "fct-source": "src/Data-ByteString-Builder-Prim-Binary.html#intHost",
        "fct-type": "function",
        "title": "intHost"
      },
      "index": {
        "description": "Encode single native machine Int The Int is encoded in host order host endian form for the machine you are on On bit machine the Int is an byte value on bit machine bytes Values encoded this way are not portable to different endian or integer sized machines without conversion",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "intHost",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:liftFixedToBounded",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003e\u003ca\u003eFixedPrim\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim a -\u003e BoundedPrim a",
        "fct-source": "src/Data-ByteString-Builder-Prim-Internal.html#liftFixedToBounded",
        "fct-type": "function",
        "title": "liftFixedToBounded"
      },
      "index": {
        "description": "Lift FixedPrim to BoundedPrim",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "liftFixedToBounded",
        "normalized": "FixedPrim a-\u003eBoundedPrim a",
        "package": "bytestring-builder",
        "partial": "Fixed To Bounded",
        "signature": "FixedPrim a-\u003eBoundedPrim a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:primBounded",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e that encodes values with the given \u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWe rewrite consecutive uses of \u003ccode\u003e\u003ca\u003eprimBounded\u003c/a\u003e\u003c/code\u003e such that the bound-checks are\n fused. For example,\n\u003c/p\u003e\u003cpre\u003e primBounded (word32 c1) `mappend` primBounded (word32 c2)\n\u003c/pre\u003e\u003cp\u003eis rewritten such that the resulting \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e checks only once, if ther are\n at 8 free bytes, instead of checking twice, if there are 4 free bytes. This\n optimization is not observationally equivalent in a strict sense, as it\n influences the boundaries of the generated chunks. However, for a user of\n this library it is observationally equivalent, as chunk boundaries of a lazy\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e can only be observed through the internal interface.\n Morevoer, we expect that all primitives write much fewer than 4kb (the\n default short buffer size). Hence, it is safe to ignore the additional\n memory spilled due to the more agressive buffer wrapping introduced by this\n optimization.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "BoundedPrim a -\u003e a -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-Prim.html#primBounded",
        "fct-type": "function",
        "title": "primBounded"
      },
      "index": {
        "description": "Create Builder that encodes values with the given BoundedPrim We rewrite consecutive uses of primBounded such that the bound-checks are fused For example primBounded word32 c1 mappend primBounded word32 c2 is rewritten such that the resulting Builder checks only once if ther are at free bytes instead of checking twice if there are free bytes This optimization is not observationally equivalent in strict sense as it influences the boundaries of the generated chunks However for user of this library it is observationally equivalent as chunk boundaries of lazy ByteString can only be observed through the internal interface Morevoer we expect that all primitives write much fewer than kb the default short buffer size Hence it is safe to ignore the additional memory spilled due to the more agressive buffer wrapping introduced by this optimization",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "primBounded",
        "normalized": "BoundedPrim a-\u003ea-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Bounded",
        "signature": "BoundedPrim a-\u003ea-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:primFixed",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a value with a \u003ccode\u003e\u003ca\u003eFixedPrim\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim a -\u003e a -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-Prim.html#primFixed",
        "fct-type": "function",
        "title": "primFixed"
      },
      "index": {
        "description": "Encode value with FixedPrim",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "primFixed",
        "normalized": "FixedPrim a-\u003ea-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Fixed",
        "signature": "FixedPrim a-\u003ea-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:primMapByteStringBounded",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e that encodes each \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e of a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n using a \u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003e. For example, we can write a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e that filters\n a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e as follows.\n\u003c/p\u003e\u003cpre\u003e import Data.ByteString.Builder.Primas P (word8, condB, emptyB)\n\u003c/pre\u003e\u003cpre\u003e filterBS p = P.condB p P.word8 P.emptyB\n\u003c/pre\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "BoundedPrim Word8 -\u003e ByteString -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-Prim.html#primMapByteStringBounded",
        "fct-type": "function",
        "title": "primMapByteStringBounded"
      },
      "index": {
        "description": "Create Builder that encodes each Word8 of strict ByteString using BoundedPrim For example we can write Builder that filters strict ByteString as follows import Data.ByteString.Builder.Primas word8 condB emptyB filterBS P.condB P.word8 P.emptyB",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "primMapByteStringBounded",
        "normalized": "BoundedPrim Word-\u003eByteString-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Map Byte String Bounded",
        "signature": "BoundedPrim Word-\u003eByteString-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:primMapByteStringFixed",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eHeavy inlining.\u003c/em\u003e Encode all bytes of a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e from\n left-to-right with a \u003ccode\u003e\u003ca\u003eFixedPrim\u003c/a\u003e\u003c/code\u003e. This function is quite versatile. For\n example, we can use it to construct a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e that maps every byte before\n copying it to the buffer to be filled.\n\u003c/p\u003e\u003cpre\u003e mapToBuilder :: (Word8 -\u003e Word8) -\u003e S.ByteString -\u003e Builder\n mapToBuilder f = encodeByteStringWithF (contramapF f word8)\n\u003c/pre\u003e\u003cp\u003eWe can also use it to hex-encode a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e as shown by the\n \u003ccode\u003ebyteStringHex\u003c/code\u003e example above.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Word8 -\u003e ByteString -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-Prim.html#primMapByteStringFixed",
        "fct-type": "function",
        "title": "primMapByteStringFixed"
      },
      "index": {
        "description": "Heavy inlining Encode all bytes of strict ByteString from left-to-right with FixedPrim This function is quite versatile For example we can use it to construct Builder that maps every byte before copying it to the buffer to be filled mapToBuilder Word8 Word8 S.ByteString Builder mapToBuilder encodeByteStringWithF contramapF word8 We can also use it to hex-encode strict ByteString as shown by the byteStringHex example above",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "primMapByteStringFixed",
        "normalized": "FixedPrim Word-\u003eByteString-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Map Byte String Fixed",
        "signature": "FixedPrim Word-\u003eByteString-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:primMapLazyByteStringBounded",
      "description": {
        "fct-descr": "\u003cp\u003eChunk-wise application of \u003ccode\u003e\u003ca\u003eprimMapByteStringBounded\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "BoundedPrim Word8 -\u003e ByteString -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-Prim.html#primMapLazyByteStringBounded",
        "fct-type": "function",
        "title": "primMapLazyByteStringBounded"
      },
      "index": {
        "description": "Chunk-wise application of primMapByteStringBounded",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "primMapLazyByteStringBounded",
        "normalized": "BoundedPrim Word-\u003eByteString-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Map Lazy Byte String Bounded",
        "signature": "BoundedPrim Word-\u003eByteString-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:primMapLazyByteStringFixed",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eHeavy inlining.\u003c/em\u003e Encode all bytes of a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e from\n left-to-right with a \u003ccode\u003e\u003ca\u003eFixedPrim\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Word8 -\u003e ByteString -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-Prim.html#primMapLazyByteStringFixed",
        "fct-type": "function",
        "title": "primMapLazyByteStringFixed"
      },
      "index": {
        "description": "Heavy inlining Encode all bytes of lazy ByteString from left-to-right with FixedPrim",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "primMapLazyByteStringFixed",
        "normalized": "FixedPrim Word-\u003eByteString-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Map Lazy Byte String Fixed",
        "signature": "FixedPrim Word-\u003eByteString-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:primMapListBounded",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e that encodes a list of values consecutively using a\n \u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003e for each element. This function is more efficient than the\n canonical\n\u003c/p\u003e\u003cpre\u003e filter p =\n  B.toLazyByteString .\n  E.encodeLazyByteStringWithF (E.ifF p E.word8) E.emptyF)\n\n\u003c/pre\u003e\u003cpre\u003e mconcat . map (primBounded w)\n\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003e foldMap (primBounded w)\n\u003c/pre\u003e\u003cp\u003ebecause it moves several variables out of the inner loop.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "BoundedPrim a -\u003e [a] -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-Prim.html#primMapListBounded",
        "fct-type": "function",
        "title": "primMapListBounded"
      },
      "index": {
        "description": "Create Builder that encodes list of values consecutively using BoundedPrim for each element This function is more efficient than the canonical filter B.toLazyByteString E.encodeLazyByteStringWithF E.ifF E.word8 E.emptyF mconcat map primBounded or foldMap primBounded because it moves several variables out of the inner loop",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "primMapListBounded",
        "normalized": "BoundedPrim a-\u003e[a]-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Map List Bounded",
        "signature": "BoundedPrim a-\u003e[a]-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:primMapListFixed",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a list of values from left-to-right with a \u003ccode\u003e\u003ca\u003eFixedPrim\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim a -\u003e [a] -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-Prim.html#primMapListFixed",
        "fct-type": "function",
        "title": "primMapListFixed"
      },
      "index": {
        "description": "Encode list of values from left-to-right with FixedPrim",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "primMapListFixed",
        "normalized": "FixedPrim a-\u003e[a]-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Map List Fixed",
        "signature": "FixedPrim a-\u003e[a]-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:primUnfoldrBounded",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e that encodes a sequence generated from a seed value\n using a \u003ccode\u003e\u003ca\u003eBoundedPrim\u003c/a\u003e\u003c/code\u003e for each sequence element.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "BoundedPrim b -\u003e (a -\u003e Maybe (b, a)) -\u003e a -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-Prim.html#primUnfoldrBounded",
        "fct-type": "function",
        "title": "primUnfoldrBounded"
      },
      "index": {
        "description": "Create Builder that encodes sequence generated from seed value using BoundedPrim for each sequence element",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "primUnfoldrBounded",
        "normalized": "BoundedPrim a-\u003e(b-\u003eMaybe(a,b))-\u003eb-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Unfoldr Bounded",
        "signature": "BoundedPrim b-\u003e(a-\u003eMaybe(b,a))-\u003ea-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:primUnfoldrFixed",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a list of values represented as an \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eFixedPrim\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim b -\u003e (a -\u003e Maybe (b, a)) -\u003e a -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-Prim.html#primUnfoldrFixed",
        "fct-type": "function",
        "title": "primUnfoldrFixed"
      },
      "index": {
        "description": "Encode list of values represented as an unfoldr with FixedPrim",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "primUnfoldrFixed",
        "normalized": "FixedPrim a-\u003e(b-\u003eMaybe(a,b))-\u003eb-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Unfoldr Fixed",
        "signature": "FixedPrim b-\u003e(a-\u003eMaybe(b,a))-\u003ea-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:word16BE",
      "description": {
        "fct-descr": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003es in big endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Word16",
        "fct-source": "src/Data-ByteString-Builder-Prim-Binary.html#word16BE",
        "fct-type": "function",
        "title": "word16BE"
      },
      "index": {
        "description": "Encoding Word16 in big endian format",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "word16BE",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "BE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:word16Dec",
      "description": {
        "fct-descr": "\u003cp\u003eDecimal encoding of a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "BoundedPrim Word16",
        "fct-source": "src/Data-ByteString-Builder-Prim-ASCII.html#word16Dec",
        "fct-type": "function",
        "title": "word16Dec"
      },
      "index": {
        "description": "Decimal encoding of Word16",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "word16Dec",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:word16Hex",
      "description": {
        "fct-descr": "\u003cp\u003eHexadecimal encoding of a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "BoundedPrim Word16",
        "fct-source": "src/Data-ByteString-Builder-Prim-ASCII.html#word16Hex",
        "fct-type": "function",
        "title": "word16Hex"
      },
      "index": {
        "description": "Hexadecimal encoding of Word16",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "word16Hex",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Hex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:word16HexFixed",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e using 4 nibbles.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Word16",
        "fct-source": "src/Data-ByteString-Builder-Prim-ASCII.html#word16HexFixed",
        "fct-type": "function",
        "title": "word16HexFixed"
      },
      "index": {
        "description": "Encode Word16 using nibbles",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "word16HexFixed",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Hex Fixed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:word16Host",
      "description": {
        "fct-descr": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003es in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Word16",
        "fct-source": "src/Data-ByteString-Builder-Prim-Binary.html#word16Host",
        "fct-type": "function",
        "title": "word16Host"
      },
      "index": {
        "description": "Encoding Word16 in native host order and host endianness",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "word16Host",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:word16LE",
      "description": {
        "fct-descr": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003es in little endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Word16",
        "fct-source": "src/Data-ByteString-Builder-Prim-Binary.html#word16LE",
        "fct-type": "function",
        "title": "word16LE"
      },
      "index": {
        "description": "Encoding Word16 in little endian format",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "word16LE",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "LE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:word32BE",
      "description": {
        "fct-descr": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003es in big endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Word32",
        "fct-source": "src/Data-ByteString-Builder-Prim-Binary.html#word32BE",
        "fct-type": "function",
        "title": "word32BE"
      },
      "index": {
        "description": "Encoding Word32 in big endian format",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "word32BE",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "BE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:word32Dec",
      "description": {
        "fct-descr": "\u003cp\u003eDecimal encoding of a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "BoundedPrim Word32",
        "fct-source": "src/Data-ByteString-Builder-Prim-ASCII.html#word32Dec",
        "fct-type": "function",
        "title": "word32Dec"
      },
      "index": {
        "description": "Decimal encoding of Word32",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "word32Dec",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:word32Hex",
      "description": {
        "fct-descr": "\u003cp\u003eHexadecimal encoding of a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "BoundedPrim Word32",
        "fct-source": "src/Data-ByteString-Builder-Prim-ASCII.html#word32Hex",
        "fct-type": "function",
        "title": "word32Hex"
      },
      "index": {
        "description": "Hexadecimal encoding of Word32",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "word32Hex",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Hex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:word32HexFixed",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e using 8 nibbles.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Word32",
        "fct-source": "src/Data-ByteString-Builder-Prim-ASCII.html#word32HexFixed",
        "fct-type": "function",
        "title": "word32HexFixed"
      },
      "index": {
        "description": "Encode Word32 using nibbles",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "word32HexFixed",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Hex Fixed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:word32Host",
      "description": {
        "fct-descr": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003es in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Word32",
        "fct-source": "src/Data-ByteString-Builder-Prim-Binary.html#word32Host",
        "fct-type": "function",
        "title": "word32Host"
      },
      "index": {
        "description": "Encoding Word32 in native host order and host endianness",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "word32Host",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:word32LE",
      "description": {
        "fct-descr": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003es in little endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Word32",
        "fct-source": "src/Data-ByteString-Builder-Prim-Binary.html#word32LE",
        "fct-type": "function",
        "title": "word32LE"
      },
      "index": {
        "description": "Encoding Word32 in little endian format",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "word32LE",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "LE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:word64BE",
      "description": {
        "fct-descr": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003es in big endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Word64",
        "fct-source": "src/Data-ByteString-Builder-Prim-Binary.html#word64BE",
        "fct-type": "function",
        "title": "word64BE"
      },
      "index": {
        "description": "Encoding Word64 in big endian format",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "word64BE",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "BE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:word64Dec",
      "description": {
        "fct-descr": "\u003cp\u003eDecimal encoding of a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "BoundedPrim Word64",
        "fct-source": "src/Data-ByteString-Builder-Prim-ASCII.html#word64Dec",
        "fct-type": "function",
        "title": "word64Dec"
      },
      "index": {
        "description": "Decimal encoding of Word64",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "word64Dec",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:word64Hex",
      "description": {
        "fct-descr": "\u003cp\u003eHexadecimal encoding of a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "BoundedPrim Word64",
        "fct-source": "src/Data-ByteString-Builder-Prim-ASCII.html#word64Hex",
        "fct-type": "function",
        "title": "word64Hex"
      },
      "index": {
        "description": "Hexadecimal encoding of Word64",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "word64Hex",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Hex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:word64HexFixed",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e using 16 nibbles.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Word64",
        "fct-source": "src/Data-ByteString-Builder-Prim-ASCII.html#word64HexFixed",
        "fct-type": "function",
        "title": "word64HexFixed"
      },
      "index": {
        "description": "Encode Word64 using nibbles",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "word64HexFixed",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Hex Fixed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:word64Host",
      "description": {
        "fct-descr": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003es in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Word64",
        "fct-source": "src/Data-ByteString-Builder-Prim-Binary.html#word64Host",
        "fct-type": "function",
        "title": "word64Host"
      },
      "index": {
        "description": "Encoding Word64 in native host order and host endianness",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "word64Host",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:word64LE",
      "description": {
        "fct-descr": "\u003cp\u003eEncoding \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003es in little endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Word64",
        "fct-source": "src/Data-ByteString-Builder-Prim-Binary.html#word64LE",
        "fct-type": "function",
        "title": "word64LE"
      },
      "index": {
        "description": "Encoding Word64 in little endian format",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "word64LE",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "LE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:word8",
      "description": {
        "fct-descr": "\u003cp\u003eEncoding single unsigned bytes as-is.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Word8",
        "fct-source": "src/Data-ByteString-Builder-Prim-Binary.html#word8",
        "fct-type": "function",
        "title": "word8"
      },
      "index": {
        "description": "Encoding single unsigned bytes as-is",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "word8",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:word8Dec",
      "description": {
        "fct-descr": "\u003cp\u003eDecimal encoding of a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "BoundedPrim Word8",
        "fct-source": "src/Data-ByteString-Builder-Prim-ASCII.html#word8Dec",
        "fct-type": "function",
        "title": "word8Dec"
      },
      "index": {
        "description": "Decimal encoding of Word8",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "word8Dec",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:word8Hex",
      "description": {
        "fct-descr": "\u003cp\u003eHexadecimal encoding of a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "BoundedPrim Word8",
        "fct-source": "src/Data-ByteString-Builder-Prim-ASCII.html#word8Hex",
        "fct-type": "function",
        "title": "word8Hex"
      },
      "index": {
        "description": "Hexadecimal encoding of Word8",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "word8Hex",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Hex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:word8HexFixed",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e using 2 nibbles (hexadecimal digits).\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Word8",
        "fct-source": "src/Data-ByteString-Builder-Prim-ASCII.html#word8HexFixed",
        "fct-type": "function",
        "title": "word8HexFixed"
      },
      "index": {
        "description": "Encode Word8 using nibbles hexadecimal digits",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "word8HexFixed",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Hex Fixed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:wordDec",
      "description": {
        "fct-descr": "\u003cp\u003eDecimal encoding of a \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "BoundedPrim Word",
        "fct-source": "src/Data-ByteString-Builder-Prim-ASCII.html#wordDec",
        "fct-type": "function",
        "title": "wordDec"
      },
      "index": {
        "description": "Decimal encoding of Word",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "wordDec",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:wordHex",
      "description": {
        "fct-descr": "\u003cp\u003eHexadecimal encoding of a \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "BoundedPrim Word",
        "fct-source": "src/Data-ByteString-Builder-Prim-ASCII.html#wordHex",
        "fct-type": "function",
        "title": "wordHex"
      },
      "index": {
        "description": "Hexadecimal encoding of Word",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "wordHex",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Hex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder-Prim.html#v:wordHost",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a single native machine \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003es is encoded in host order,\n host endian form, for the machine you are on. On a 64 bit machine the \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e\n is an 8 byte value, on a 32 bit machine, 4 bytes. Values encoded this way\n are not portable to different endian or word sized machines, without\n conversion.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder.Prim",
        "fct-package": "bytestring-builder",
        "fct-signature": "FixedPrim Word",
        "fct-source": "src/Data-ByteString-Builder-Prim-Binary.html#wordHost",
        "fct-type": "function",
        "title": "wordHost"
      },
      "index": {
        "description": "Encode single native machine Word The Word is encoded in host order host endian form for the machine you are on On bit machine the Word is an byte value on bit machine bytes Values encoded this way are not portable to different endian or word sized machines without conversion",
        "hierarchy": "Data ByteString Builder Prim",
        "module": "Data.ByteString.Builder.Prim",
        "name": "wordHost",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es are used to efficiently construct sequences of bytes from\n  smaller parts.\nTypically,\n  such a construction is part of the implementation of an \u003cem\u003eencoding\u003c/em\u003e, i.e.,\n  a function for converting Haskell values to sequences of bytes.\nExamples of encodings are the generation of the sequence of bytes\n  representing a HTML document to be sent in a HTTP response by a\n  web application or the serialization of a Haskell value using\n  a fixed binary format.\n\u003c/p\u003e\u003cp\u003eFor an \u003cem\u003eefficient implementation of an encoding\u003c/em\u003e,\n  it is important that (a) little time is spent on converting\n  the Haskell values to the resulting sequence of bytes \u003cem\u003eand\u003c/em\u003e\n  (b) that the representation of the resulting sequence\n  is such that it can be consumed efficiently.\n\u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es support (a) by providing an \u003cem\u003eO(1)\u003c/em\u003e concatentation operation\n  and efficient implementations of basic encodings for \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003es, \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es,\n  and other standard Haskell values.\nThey support (b) by providing their result as a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e,\n  which is internally just a linked list of pointers to \u003cem\u003echunks\u003c/em\u003e\n  of consecutive raw memory.\nLazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es can be efficiently consumed by functions that\n  write them to a file or send them over a network socket.\nNote that each chunk boundary incurs expensive extra work (e.g., a system call)\n  that must be amortized over the work spent on consuming the chunk body.\n\u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es therefore take special care to ensure that the\n  average chunk size is large enough.\nThe precise meaning of large enough is application dependent.\nThe current implementation is tuned\n  for an average chunk size between 4kb and 32kb,\n  which should suit most applications.\n\u003c/p\u003e\u003cp\u003eAs a simple example of an encoding implementation,\n  we show how to efficiently convert the following representation of mixed-data\n  tables to an UTF-8 encoded Comma-Separated-Values (CSV) table.\n\u003c/p\u003e\u003cpre\u003edata Cell = StringC String\n          | IntC Int\n          deriving( Eq, Ord, Show )\n\ntype Row   = [Cell]\ntype Table = [Row]\n\u003c/pre\u003e\u003cp\u003eWe use the following imports and abbreviate \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e to simplify reading.\n\u003c/p\u003e\u003cpre\u003e\nimport qualified \u003ca\u003eData.ByteString.Lazy\u003c/a\u003e               as L\nimport           \u003ca\u003eData.ByteString.Builder\u003c/a\u003e\nimport           Data.Monoid\nimport           Data.Foldable                        (\u003ccode\u003e\u003ca\u003efoldMap\u003c/a\u003e\u003c/code\u003e)\nimport           Data.List                            (\u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e)\n\ninfixr 4 \u003c\u003e\n(\u003c\u003e) :: \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e m =\u003e m -\u003e m -\u003e m\n(\u003c\u003e) = \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eCSV is a character-based representation of tables. For maximal modularity,\nwe could first render \u003ccode\u003eTable\u003c/code\u003es as \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es and then encode this \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\nusing some Unicode character encoding. However, this sacrifices performance\ndue to the intermediate \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e representation being built and thrown away\nright afterwards. We get rid of this intermediate \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e representation by\nfixing the character encoding to UTF-8 and using \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es to convert\n\u003ccode\u003eTable\u003c/code\u003es directly to UTF-8 encoded CSV tables represented as lazy\n\u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cpre\u003e\nencodeUtf8CSV :: Table -\u003e L.ByteString\nencodeUtf8CSV = \u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e . renderTable\n\nrenderTable :: Table -\u003e Builder\nrenderTable rs = \u003ccode\u003e\u003ca\u003emconcat\u003c/a\u003e\u003c/code\u003e [renderRow r \u003c\u003e \u003ccode\u003e\u003ca\u003echarUtf8\u003c/a\u003e\u003c/code\u003e '\\n' | r \u003c- rs]\n\nrenderRow :: Row -\u003e Builder\nrenderRow []     = \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e\nrenderRow (c:cs) =\n    renderCell c \u003c\u003e mconcat [ charUtf8 ',' \u003c\u003e renderCell c' | c' \u003c- cs ]\n\nrenderCell :: Cell -\u003e Builder\nrenderCell (StringC cs) = renderString cs\nrenderCell (IntC i)     = \u003ccode\u003e\u003ca\u003eintDec\u003c/a\u003e\u003c/code\u003e i\n\nrenderString :: String -\u003e Builder\nrenderString cs = charUtf8 '\"' \u003c\u003e foldMap escape cs \u003c\u003e charUtf8 '\"'\n  where\n    escape '\\\\' = charUtf8 '\\\\' \u003c\u003e charUtf8 '\\\\'\n    escape '\\\"' = charUtf8 '\\\\' \u003c\u003e charUtf8 '\\\"'\n    escape c    = charUtf8 c\n\u003c/pre\u003e\u003cp\u003eNote that the ASCII encoding is a subset of the UTF-8 encoding,\n  which is why we can use the optimized function \u003ccode\u003e\u003ca\u003eintDec\u003c/a\u003e\u003c/code\u003e to\n  encode an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e as a decimal number with UTF-8 encoded digits.\nUsing \u003ccode\u003e\u003ca\u003eintDec\u003c/a\u003e\u003c/code\u003e is more efficient than \u003ccode\u003e\u003ccode\u003e\u003ca\u003estringUtf8\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e,\n  as it avoids constructing an intermediate \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\nAvoiding this intermediate data structure significantly improves\n  performance because encoding \u003ccode\u003eCell\u003c/code\u003es is the core operation\n  for rendering CSV-tables.\nSee \u003ca\u003eData.ByteString.Builder.Prim\u003c/a\u003e for further\n  information on how to improve the performance of \u003ccode\u003erenderString\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWe demonstrate our UTF-8 CSV encoding function on the following table.\n\u003c/p\u003e\u003cpre\u003e\nstrings :: [String]\nstrings =  [\"hello\", \"\\\"1\\\"\", \"&#955;-w&#246;rld\"]\n\ntable :: Table\ntable = [map StringC strings, map IntC [-3..3]]\n\u003c/pre\u003e\u003cp\u003eThe expression \u003ccode\u003eencodeUtf8CSV table\u003c/code\u003e results in the following lazy\n\u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003eChunk \"\\\"hello\\\",\\\"\\\\\\\"1\\\\\\\"\\\",\\\"\\206\\187-w\\195\\182rld\\\"\\n-3,-2,-1,0,1,2,3\\n\" Empty\n\u003c/pre\u003e\u003cp\u003eWe can clearly see that we are converting to a \u003cem\u003ebinary\u003c/em\u003e format. The '&#955;'\nand '&#246;' characters, which have a Unicode codepoint above 127, are\nexpanded to their corresponding UTF-8 multi-byte representation.\n\u003c/p\u003e\u003cp\u003eWe use the \u003ccode\u003ecriterion\u003c/code\u003e library (\u003ca\u003ehttp://hackage.haskell.org/package/criterion\u003c/a\u003e)\n  to benchmark the efficiency of our encoding function on the following table.\n\u003c/p\u003e\u003cpre\u003eimport Criterion.Main     -- add this import to the ones above\n\nmaxiTable :: Table\nmaxiTable = take 1000 $ cycle table\n\nmain :: IO ()\nmain = defaultMain\n  [ bench \"encodeUtf8CSV maxiTable (original)\" $\n      whnf (L.length . encodeUtf8CSV) maxiTable\n  ]\n\u003c/pre\u003e\u003cp\u003eOn a Core2 Duo 2.20GHz on a 32-bit Linux,\n  the above code takes 1ms to generate the 22'500 bytes long lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\nLooking again at the definitions above,\n  we see that we took care to avoid intermediate data structures,\n  as otherwise we would sacrifice performance.\nFor example,\n  the following (arguably simpler) definition of \u003ccode\u003erenderRow\u003c/code\u003e is about 20% slower.\n\u003c/p\u003e\u003cpre\u003erenderRow :: Row -\u003e Builder\nrenderRow  = mconcat . intersperse (charUtf8 ',') . map renderCell\n\u003c/pre\u003e\u003cp\u003eSimilarly, using \u003cem\u003eO(n)\u003c/em\u003e concatentations like \u003ccode\u003e\u003ca\u003e++\u003c/a\u003e\u003c/code\u003e or the equivalent \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e\n  operations on strict and lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es should be avoided.\nThe following definition of \u003ccode\u003erenderString\u003c/code\u003e is also about 20% slower.\n\u003c/p\u003e\u003cpre\u003erenderString :: String -\u003e Builder\nrenderString cs = charUtf8 $ \"\\\"\" ++ concatMap escape cs ++ \"\\\"\"\n  where\n    escape '\\\\' = \"\\\\\"\n    escape '\\\"' = \"\\\\\\\"\"\n    escape c    = return c\n\u003c/pre\u003e\u003cp\u003eApart from removing intermediate data-structures,\n  encodings can be optimized further by fine-tuning their execution\n  parameters using the functions in \u003ca\u003eData.ByteString.Builder.Extra\u003c/a\u003e and\n  their \"inner loops\" using the functions in\n  \u003ca\u003eData.ByteString.Builder.Prim\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "module",
        "fct-source": "src/Data-ByteString-Builder.html",
        "fct-type": "module",
        "title": "Builder"
      },
      "index": {
        "description": "Builder are used to efficiently construct sequences of bytes from smaller parts Typically such construction is part of the implementation of an encoding i.e function for converting Haskell values to sequences of bytes Examples of encodings are the generation of the sequence of bytes representing HTML document to be sent in HTTP response by web application or the serialization of Haskell value using fixed binary format For an efficient implementation of an encoding it is important that little time is spent on converting the Haskell values to the resulting sequence of bytes and that the representation of the resulting sequence is such that it can be consumed efficiently Builder support by providing an concatentation operation and efficient implementations of basic encodings for Char Int and other standard Haskell values They support by providing their result as lazy ByteString which is internally just linked list of pointers to chunks of consecutive raw memory Lazy ByteString can be efficiently consumed by functions that write them to file or send them over network socket Note that each chunk boundary incurs expensive extra work e.g system call that must be amortized over the work spent on consuming the chunk body Builder therefore take special care to ensure that the average chunk size is large enough The precise meaning of large enough is application dependent The current implementation is tuned for an average chunk size between kb and kb which should suit most applications As simple example of an encoding implementation we show how to efficiently convert the following representation of mixed-data tables to an UTF-8 encoded Comma-Separated-Values CSV table data Cell StringC String IntC Int deriving Eq Ord Show type Row Cell type Table Row We use the following imports and abbreviate mappend to simplify reading import qualified Data.ByteString.Lazy as import Data.ByteString.Builder import Data.Monoid import Data.Foldable foldMap import Data.List intersperse infixr Monoid mappend CSV is character-based representation of tables For maximal modularity we could first render Table as String and then encode this String using some Unicode character encoding However this sacrifices performance due to the intermediate String representation being built and thrown away right afterwards We get rid of this intermediate String representation by fixing the character encoding to UTF-8 and using Builder to convert Table directly to UTF-8 encoded CSV tables represented as lazy ByteString encodeUtf8CSV Table L.ByteString encodeUtf8CSV toLazyByteString renderTable renderTable Table Builder renderTable rs mconcat renderRow charUtf8 rs renderRow Row Builder renderRow mempty renderRow cs renderCell mconcat charUtf8 renderCell cs renderCell Cell Builder renderCell StringC cs renderString cs renderCell IntC intDec renderString String Builder renderString cs charUtf8 foldMap escape cs charUtf8 where escape charUtf8 charUtf8 escape charUtf8 charUtf8 escape charUtf8 Note that the ASCII encoding is subset of the UTF-8 encoding which is why we can use the optimized function intDec to encode an Int as decimal number with UTF-8 encoded digits Using intDec is more efficient than stringUtf8 show as it avoids constructing an intermediate String Avoiding this intermediate data structure significantly improves performance because encoding Cell is the core operation for rendering CSV-tables See Data.ByteString.Builder.Prim for further information on how to improve the performance of renderString We demonstrate our UTF-8 CSV encoding function on the following table strings String strings hello rld table Table table map StringC strings map IntC The expression encodeUtf8CSV table results in the following lazy ByteString Chunk hello rld n-3 Empty We can clearly see that we are converting to binary format The and characters which have Unicode codepoint above are expanded to their corresponding UTF-8 multi-byte representation We use the criterion library http hackage.haskell.org package criterion to benchmark the efficiency of our encoding function on the following table import Criterion.Main add this import to the ones above maxiTable Table maxiTable take cycle table main IO main defaultMain bench encodeUtf8CSV maxiTable original whnf L.length encodeUtf8CSV maxiTable On Core2 Duo GHz on bit Linux the above code takes ms to generate the bytes long lazy ByteString Looking again at the definitions above we see that we took care to avoid intermediate data structures as otherwise we would sacrifice performance For example the following arguably simpler definition of renderRow is about slower renderRow Row Builder renderRow mconcat intersperse charUtf8 map renderCell Similarly using concatentations like or the equivalent concat operations on strict and lazy ByteString should be avoided The following definition of renderString is also about slower renderString String Builder renderString cs charUtf8 concatMap escape cs where escape escape escape return Apart from removing intermediate data-structures encodings can be optimized further by fine-tuning their execution parameters using the functions in Data.ByteString.Builder.Extra and their inner loops using the functions in Data.ByteString.Builder.Prim",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "Builder",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#t:Builder",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es denote sequences of bytes.\n They are \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003es where\n   \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e is the zero-length sequence and\n   \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e is concatenation, which runs in \u003cem\u003eO(1)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "data",
        "fct-source": "src/Data-ByteString-Builder-Internal.html#Builder",
        "fct-type": "data",
        "title": "Builder"
      },
      "index": {
        "description": "Builder denote sequences of bytes They are Monoid where mempty is the zero-length sequence and mappend is concatenation which runs in",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "Builder",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:byteString",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e denoting the same sequence of bytes as a strict\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n The \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e inserts large \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es directly, but copies small ones\n to ensure that the generated chunks are large on average.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "ByteString -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-Internal.html#byteString",
        "fct-type": "function",
        "title": "byteString"
      },
      "index": {
        "description": "Create Builder denoting the same sequence of bytes as strict ByteString The Builder inserts large ByteString directly but copies small ones to ensure that the generated chunks are large on average",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "byteString",
        "normalized": "ByteString-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "String",
        "signature": "ByteString-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:byteStringHex",
      "description": {
        "fct-descr": "\u003cp\u003eEncode each byte of a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e using its fixed-width hex encoding.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "ByteString -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-ASCII.html#byteStringHex",
        "fct-type": "function",
        "title": "byteStringHex"
      },
      "index": {
        "description": "Encode each byte of ByteString using its fixed-width hex encoding",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "byteStringHex",
        "normalized": "ByteString-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "String Hex",
        "signature": "ByteString-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:char7",
      "description": {
        "fct-descr": "\u003cp\u003eChar7 encode a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Char -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder.html#char7",
        "fct-type": "function",
        "title": "char7"
      },
      "index": {
        "description": "Char7 encode Char",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "char7",
        "normalized": "Char-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "",
        "signature": "Char-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:char8",
      "description": {
        "fct-descr": "\u003cp\u003eChar8 encode a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Char -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder.html#char8",
        "fct-type": "function",
        "title": "char8"
      },
      "index": {
        "description": "Char8 encode Char",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "char8",
        "normalized": "Char-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "",
        "signature": "Char-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:charUtf8",
      "description": {
        "fct-descr": "\u003cp\u003eUTF-8 encode a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Char -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder.html#charUtf8",
        "fct-type": "function",
        "title": "charUtf8"
      },
      "index": {
        "description": "UTF-8 encode Char",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "charUtf8",
        "normalized": "Char-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Utf",
        "signature": "Char-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:doubleBE",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Double -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder.html#doubleBE",
        "fct-type": "function",
        "title": "doubleBE"
      },
      "index": {
        "description": "Encode Double in big endian format",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "doubleBE",
        "normalized": "Double-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "BE",
        "signature": "Double-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:doubleDec",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eCurrently slow.\u003c/em\u003e Decimal encoding of an IEEE \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Double -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-ASCII.html#doubleDec",
        "fct-type": "function",
        "title": "doubleDec"
      },
      "index": {
        "description": "Currently slow Decimal encoding of an IEEE Double",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "doubleDec",
        "normalized": "Double-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Dec",
        "signature": "Double-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:doubleHexFixed",
      "description": {
        "fct-descr": "\u003cp\u003eEncode an IEEE \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e using 16 nibbles.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Double -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-ASCII.html#doubleHexFixed",
        "fct-type": "function",
        "title": "doubleHexFixed"
      },
      "index": {
        "description": "Encode an IEEE Double using nibbles",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "doubleHexFixed",
        "normalized": "Double-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Hex Fixed",
        "signature": "Double-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:doubleLE",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Double -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder.html#doubleLE",
        "fct-type": "function",
        "title": "doubleLE"
      },
      "index": {
        "description": "Encode Double in little endian format",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "doubleLE",
        "normalized": "Double-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "LE",
        "signature": "Double-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:floatBE",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Float -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder.html#floatBE",
        "fct-type": "function",
        "title": "floatBE"
      },
      "index": {
        "description": "Encode Float in big endian format",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "floatBE",
        "normalized": "Float-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "BE",
        "signature": "Float-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:floatDec",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eCurrently slow.\u003c/em\u003e Decimal encoding of an IEEE \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Float -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-ASCII.html#floatDec",
        "fct-type": "function",
        "title": "floatDec"
      },
      "index": {
        "description": "Currently slow Decimal encoding of an IEEE Float",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "floatDec",
        "normalized": "Float-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Dec",
        "signature": "Float-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:floatHexFixed",
      "description": {
        "fct-descr": "\u003cp\u003eEncode an IEEE \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e using 8 nibbles.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Float -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-ASCII.html#floatHexFixed",
        "fct-type": "function",
        "title": "floatHexFixed"
      },
      "index": {
        "description": "Encode an IEEE Float using nibbles",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "floatHexFixed",
        "normalized": "Float-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Hex Fixed",
        "signature": "Float-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:floatLE",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Float -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder.html#floatLE",
        "fct-type": "function",
        "title": "floatLE"
      },
      "index": {
        "description": "Encode Float in little endian format",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "floatLE",
        "normalized": "Float-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "LE",
        "signature": "Float-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:hPutBuilder",
      "description": {
        "fct-descr": "\u003cp\u003eOutput a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n The \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e is executed directly on the buffer of the \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e. If the\n buffer is too small (or not present), then it is replaced with a large\n enough buffer.\n\u003c/p\u003e\u003cp\u003eIt is recommended that the \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e is set to binary and\n \u003ccode\u003eBlockBuffering\u003c/code\u003e mode. See \u003ccode\u003ehSetBinaryMode\u003c/code\u003e and \u003ccode\u003ehSetBuffering\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function is more efficient than \u003ccode\u003ehPut . \u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e because in\n many cases no buffer allocation has to be done. Moreover, the results of\n several executions of short \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es are concatenated in the \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es\n buffer, therefore avoiding unnecessary buffer flushes.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Handle -\u003e Builder -\u003e IO ()",
        "fct-source": "src/Data-ByteString-Builder.html#hPutBuilder",
        "fct-type": "function",
        "title": "hPutBuilder"
      },
      "index": {
        "description": "Output Builder to Handle The Builder is executed directly on the buffer of the Handle If the buffer is too small or not present then it is replaced with large enough buffer It is recommended that the Handle is set to binary and BlockBuffering mode See hSetBinaryMode and hSetBuffering This function is more efficient than hPut toLazyByteString because in many cases no buffer allocation has to be done Moreover the results of several executions of short Builder are concatenated in the Handle buffer therefore avoiding unnecessary buffer flushes",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "hPutBuilder",
        "normalized": "Handle-\u003eBuilder-\u003eIO()",
        "package": "bytestring-builder",
        "partial": "Put Builder",
        "signature": "Handle-\u003eBuilder-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:int16BE",
      "description": {
        "fct-descr": "\u003cp\u003eEncode an \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Int16 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder.html#int16BE",
        "fct-type": "function",
        "title": "int16BE"
      },
      "index": {
        "description": "Encode an Int16 in big endian format",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "int16BE",
        "normalized": "Int-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "BE",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:int16Dec",
      "description": {
        "fct-descr": "\u003cp\u003eDecimal encoding of an \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e using the ASCII digits.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Int16 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-ASCII.html#int16Dec",
        "fct-type": "function",
        "title": "int16Dec"
      },
      "index": {
        "description": "Decimal encoding of an Int16 using the ASCII digits",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "int16Dec",
        "normalized": "Int-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Dec",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:int16HexFixed",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e using 4 nibbles.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Int16 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-ASCII.html#int16HexFixed",
        "fct-type": "function",
        "title": "int16HexFixed"
      },
      "index": {
        "description": "Encode Int16 using nibbles",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "int16HexFixed",
        "normalized": "Int-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Hex Fixed",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:int16LE",
      "description": {
        "fct-descr": "\u003cp\u003eEncode an \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Int16 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder.html#int16LE",
        "fct-type": "function",
        "title": "int16LE"
      },
      "index": {
        "description": "Encode an Int16 in little endian format",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "int16LE",
        "normalized": "Int-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "LE",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:int32BE",
      "description": {
        "fct-descr": "\u003cp\u003eEncode an \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Int32 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder.html#int32BE",
        "fct-type": "function",
        "title": "int32BE"
      },
      "index": {
        "description": "Encode an Int32 in big endian format",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "int32BE",
        "normalized": "Int-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "BE",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:int32Dec",
      "description": {
        "fct-descr": "\u003cp\u003eDecimal encoding of an \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e using the ASCII digits.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Int32 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-ASCII.html#int32Dec",
        "fct-type": "function",
        "title": "int32Dec"
      },
      "index": {
        "description": "Decimal encoding of an Int32 using the ASCII digits",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "int32Dec",
        "normalized": "Int-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Dec",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:int32HexFixed",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e using 8 nibbles.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Int32 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-ASCII.html#int32HexFixed",
        "fct-type": "function",
        "title": "int32HexFixed"
      },
      "index": {
        "description": "Encode Int32 using nibbles",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "int32HexFixed",
        "normalized": "Int-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Hex Fixed",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:int32LE",
      "description": {
        "fct-descr": "\u003cp\u003eEncode an \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Int32 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder.html#int32LE",
        "fct-type": "function",
        "title": "int32LE"
      },
      "index": {
        "description": "Encode an Int32 in little endian format",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "int32LE",
        "normalized": "Int-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "LE",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:int64BE",
      "description": {
        "fct-descr": "\u003cp\u003eEncode an \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Int64 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder.html#int64BE",
        "fct-type": "function",
        "title": "int64BE"
      },
      "index": {
        "description": "Encode an Int64 in big endian format",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "int64BE",
        "normalized": "Int-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "BE",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:int64Dec",
      "description": {
        "fct-descr": "\u003cp\u003eDecimal encoding of an \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e using the ASCII digits.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Int64 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-ASCII.html#int64Dec",
        "fct-type": "function",
        "title": "int64Dec"
      },
      "index": {
        "description": "Decimal encoding of an Int64 using the ASCII digits",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "int64Dec",
        "normalized": "Int-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Dec",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:int64HexFixed",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e using 16 nibbles.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Int64 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-ASCII.html#int64HexFixed",
        "fct-type": "function",
        "title": "int64HexFixed"
      },
      "index": {
        "description": "Encode Int64 using nibbles",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "int64HexFixed",
        "normalized": "Int-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Hex Fixed",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:int64LE",
      "description": {
        "fct-descr": "\u003cp\u003eEncode an \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Int64 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder.html#int64LE",
        "fct-type": "function",
        "title": "int64LE"
      },
      "index": {
        "description": "Encode an Int64 in little endian format",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "int64LE",
        "normalized": "Int-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "LE",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:int8",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a single signed byte as-is.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Int8 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder.html#int8",
        "fct-type": "function",
        "title": "int8"
      },
      "index": {
        "description": "Encode single signed byte as-is",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "int8",
        "normalized": "Int-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:int8Dec",
      "description": {
        "fct-descr": "\u003cp\u003eDecimal encoding of an \u003ccode\u003e\u003ca\u003eInt8\u003c/a\u003e\u003c/code\u003e using the ASCII digits.\n\u003c/p\u003e\u003cp\u003ee.g.\n\u003c/p\u003e\u003cpre\u003e toLazyByteString (int8Dec 42)   = \"42\"\n toLazyByteString (int8Dec (-1)) = \"-1\"\n\u003c/pre\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Int8 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-ASCII.html#int8Dec",
        "fct-type": "function",
        "title": "int8Dec"
      },
      "index": {
        "description": "Decimal encoding of an Int8 using the ASCII digits e.g toLazyByteString int8Dec toLazyByteString int8Dec",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "int8Dec",
        "normalized": "Int-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Dec",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:int8HexFixed",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eInt8\u003c/a\u003e\u003c/code\u003e using 2 nibbles (hexadecimal digits).\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Int8 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-ASCII.html#int8HexFixed",
        "fct-type": "function",
        "title": "int8HexFixed"
      },
      "index": {
        "description": "Encode Int8 using nibbles hexadecimal digits",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "int8HexFixed",
        "normalized": "Int-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Hex Fixed",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:intDec",
      "description": {
        "fct-descr": "\u003cp\u003eDecimal encoding of an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e using the ASCII digits.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Int -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-ASCII.html#intDec",
        "fct-type": "function",
        "title": "intDec"
      },
      "index": {
        "description": "Decimal encoding of an Int using the ASCII digits",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "intDec",
        "normalized": "Int-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Dec",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:integerDec",
      "description": {
        "fct-descr": "\u003cp\u003eDecimal encoding of an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e using the ASCII digits. Implemented\n using via the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance of \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Integer -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-ASCII.html#integerDec",
        "fct-type": "function",
        "title": "integerDec"
      },
      "index": {
        "description": "Decimal encoding of an Integer using the ASCII digits Implemented using via the Show instance of Integer",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "integerDec",
        "normalized": "Integer-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Dec",
        "signature": "Integer-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:lazyByteString",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e denoting the same sequence of bytes as a lazy\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n The \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e inserts large chunks of the lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e directly,\n but copies small ones to ensure that the generated chunks are large on\n average.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "ByteString -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-Internal.html#lazyByteString",
        "fct-type": "function",
        "title": "lazyByteString"
      },
      "index": {
        "description": "Create Builder denoting the same sequence of bytes as lazy ByteString The Builder inserts large chunks of the lazy ByteString directly but copies small ones to ensure that the generated chunks are large on average",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "lazyByteString",
        "normalized": "ByteString-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Byte String",
        "signature": "ByteString-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:lazyByteStringHex",
      "description": {
        "fct-descr": "\u003cp\u003eEncode each byte of a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e using its fixed-width hex encoding.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "ByteString -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-ASCII.html#lazyByteStringHex",
        "fct-type": "function",
        "title": "lazyByteStringHex"
      },
      "index": {
        "description": "Encode each byte of lazy ByteString using its fixed-width hex encoding",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "lazyByteStringHex",
        "normalized": "ByteString-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Byte String Hex",
        "signature": "ByteString-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:shortByteString",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e that copies the \u003ccode\u003e\u003ca\u003eShortByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "ShortByteString -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-Internal.html#shortByteString",
        "fct-type": "function",
        "title": "shortByteString"
      },
      "index": {
        "description": "Construct Builder that copies the ShortByteString",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "shortByteString",
        "normalized": "ShortByteString-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Byte String",
        "signature": "ShortByteString-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:string7",
      "description": {
        "fct-descr": "\u003cp\u003eChar7 encode a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "String -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder.html#string7",
        "fct-type": "function",
        "title": "string7"
      },
      "index": {
        "description": "Char7 encode String",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "string7",
        "normalized": "String-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "",
        "signature": "String-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:string8",
      "description": {
        "fct-descr": "\u003cp\u003eChar8 encode a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "String -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder.html#string8",
        "fct-type": "function",
        "title": "string8"
      },
      "index": {
        "description": "Char8 encode String",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "string8",
        "normalized": "String-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "",
        "signature": "String-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:stringUtf8",
      "description": {
        "fct-descr": "\u003cp\u003eUTF-8 encode a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "String -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder.html#stringUtf8",
        "fct-type": "function",
        "title": "stringUtf8"
      },
      "index": {
        "description": "UTF-8 encode String",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "stringUtf8",
        "normalized": "String-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Utf",
        "signature": "String-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:toLazyByteString",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e and return the generated chunks as a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n The work is performed lazy, i.e., only when a chunk of the lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n is forced.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Builder -\u003e ByteString",
        "fct-source": "src/Data-ByteString-Builder.html#toLazyByteString",
        "fct-type": "function",
        "title": "toLazyByteString"
      },
      "index": {
        "description": "Execute Builder and return the generated chunks as lazy ByteString The work is performed lazy i.e only when chunk of the lazy ByteString is forced",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "toLazyByteString",
        "normalized": "Builder-\u003eByteString",
        "package": "bytestring-builder",
        "partial": "Lazy Byte String",
        "signature": "Builder-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:word16BE",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Word16 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder.html#word16BE",
        "fct-type": "function",
        "title": "word16BE"
      },
      "index": {
        "description": "Encode Word16 in big endian format",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "word16BE",
        "normalized": "Word-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "BE",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:word16Dec",
      "description": {
        "fct-descr": "\u003cp\u003eDecimal encoding of a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e using the ASCII digits.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Word16 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-ASCII.html#word16Dec",
        "fct-type": "function",
        "title": "word16Dec"
      },
      "index": {
        "description": "Decimal encoding of Word16 using the ASCII digits",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "word16Dec",
        "normalized": "Word-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Dec",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:word16Hex",
      "description": {
        "fct-descr": "\u003cp\u003eShortest hexadecimal encoding of a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e using lower-case characters.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Word16 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-ASCII.html#word16Hex",
        "fct-type": "function",
        "title": "word16Hex"
      },
      "index": {
        "description": "Shortest hexadecimal encoding of Word16 using lower-case characters",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "word16Hex",
        "normalized": "Word-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Hex",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:word16HexFixed",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e using 4 nibbles.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Word16 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-ASCII.html#word16HexFixed",
        "fct-type": "function",
        "title": "word16HexFixed"
      },
      "index": {
        "description": "Encode Word16 using nibbles",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "word16HexFixed",
        "normalized": "Word-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Hex Fixed",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:word16LE",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Word16 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder.html#word16LE",
        "fct-type": "function",
        "title": "word16LE"
      },
      "index": {
        "description": "Encode Word16 in little endian format",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "word16LE",
        "normalized": "Word-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "LE",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:word32BE",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Word32 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder.html#word32BE",
        "fct-type": "function",
        "title": "word32BE"
      },
      "index": {
        "description": "Encode Word32 in big endian format",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "word32BE",
        "normalized": "Word-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "BE",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:word32Dec",
      "description": {
        "fct-descr": "\u003cp\u003eDecimal encoding of a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e using the ASCII digits.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Word32 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-ASCII.html#word32Dec",
        "fct-type": "function",
        "title": "word32Dec"
      },
      "index": {
        "description": "Decimal encoding of Word32 using the ASCII digits",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "word32Dec",
        "normalized": "Word-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Dec",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:word32Hex",
      "description": {
        "fct-descr": "\u003cp\u003eShortest hexadecimal encoding of a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e using lower-case characters.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Word32 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-ASCII.html#word32Hex",
        "fct-type": "function",
        "title": "word32Hex"
      },
      "index": {
        "description": "Shortest hexadecimal encoding of Word32 using lower-case characters",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "word32Hex",
        "normalized": "Word-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Hex",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:word32HexFixed",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e using 8 nibbles.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Word32 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-ASCII.html#word32HexFixed",
        "fct-type": "function",
        "title": "word32HexFixed"
      },
      "index": {
        "description": "Encode Word32 using nibbles",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "word32HexFixed",
        "normalized": "Word-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Hex Fixed",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:word32LE",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Word32 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder.html#word32LE",
        "fct-type": "function",
        "title": "word32LE"
      },
      "index": {
        "description": "Encode Word32 in little endian format",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "word32LE",
        "normalized": "Word-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "LE",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:word64BE",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Word64 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder.html#word64BE",
        "fct-type": "function",
        "title": "word64BE"
      },
      "index": {
        "description": "Encode Word64 in big endian format",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "word64BE",
        "normalized": "Word-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "BE",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:word64Dec",
      "description": {
        "fct-descr": "\u003cp\u003eDecimal encoding of a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e using the ASCII digits.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Word64 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-ASCII.html#word64Dec",
        "fct-type": "function",
        "title": "word64Dec"
      },
      "index": {
        "description": "Decimal encoding of Word64 using the ASCII digits",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "word64Dec",
        "normalized": "Word-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Dec",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:word64Hex",
      "description": {
        "fct-descr": "\u003cp\u003eShortest hexadecimal encoding of a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e using lower-case characters.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Word64 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-ASCII.html#word64Hex",
        "fct-type": "function",
        "title": "word64Hex"
      },
      "index": {
        "description": "Shortest hexadecimal encoding of Word64 using lower-case characters",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "word64Hex",
        "normalized": "Word-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Hex",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:word64HexFixed",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e using 16 nibbles.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Word64 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-ASCII.html#word64HexFixed",
        "fct-type": "function",
        "title": "word64HexFixed"
      },
      "index": {
        "description": "Encode Word64 using nibbles",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "word64HexFixed",
        "normalized": "Word-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Hex Fixed",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:word64LE",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Word64 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder.html#word64LE",
        "fct-type": "function",
        "title": "word64LE"
      },
      "index": {
        "description": "Encode Word64 in little endian format",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "word64LE",
        "normalized": "Word-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "LE",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:word8",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a single unsigned byte as-is.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Word8 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder.html#word8",
        "fct-type": "function",
        "title": "word8"
      },
      "index": {
        "description": "Encode single unsigned byte as-is",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "word8",
        "normalized": "Word-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:word8Dec",
      "description": {
        "fct-descr": "\u003cp\u003eDecimal encoding of a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e using the ASCII digits.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Word8 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-ASCII.html#word8Dec",
        "fct-type": "function",
        "title": "word8Dec"
      },
      "index": {
        "description": "Decimal encoding of Word8 using the ASCII digits",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "word8Dec",
        "normalized": "Word-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Dec",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:word8Hex",
      "description": {
        "fct-descr": "\u003cp\u003eShortest hexadecimal encoding of a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e using lower-case characters.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Word8 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-ASCII.html#word8Hex",
        "fct-type": "function",
        "title": "word8Hex"
      },
      "index": {
        "description": "Shortest hexadecimal encoding of Word8 using lower-case characters",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "word8Hex",
        "normalized": "Word-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Hex",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:word8HexFixed",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e using 2 nibbles (hexadecimal digits).\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Word8 -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-ASCII.html#word8HexFixed",
        "fct-type": "function",
        "title": "word8HexFixed"
      },
      "index": {
        "description": "Encode Word8 using nibbles hexadecimal digits",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "word8HexFixed",
        "normalized": "Word-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Hex Fixed",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:wordDec",
      "description": {
        "fct-descr": "\u003cp\u003eDecimal encoding of a \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e using the ASCII digits.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Word -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-ASCII.html#wordDec",
        "fct-type": "function",
        "title": "wordDec"
      },
      "index": {
        "description": "Decimal encoding of Word using the ASCII digits",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "wordDec",
        "normalized": "Word-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Dec",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Builder.html#v:wordHex",
      "description": {
        "fct-descr": "\u003cp\u003eShortest hexadecimal encoding of a \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e using lower-case characters.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Builder",
        "fct-package": "bytestring-builder",
        "fct-signature": "Word -\u003e Builder",
        "fct-source": "src/Data-ByteString-Builder-ASCII.html#wordHex",
        "fct-type": "function",
        "title": "wordHex"
      },
      "index": {
        "description": "Shortest hexadecimal encoding of Word using lower-case characters",
        "hierarchy": "Data ByteString Builder",
        "module": "Data.ByteString.Builder",
        "name": "wordHex",
        "normalized": "Word-\u003eBuilder",
        "package": "bytestring-builder",
        "partial": "Hex",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Short.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA compact representation suitable for storing short byte strings in memory.\n\u003c/p\u003e\u003cp\u003eIn typical use cases it can be imported alongside \u003ca\u003eData.ByteString\u003c/a\u003e, e.g.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.ByteString       as B\n import qualified Data.ByteString.Short as B\n          (ShortByteString, toShort, fromShort)\n\u003c/pre\u003e\u003cp\u003eOther \u003ccode\u003e\u003ca\u003eShortByteString\u003c/a\u003e\u003c/code\u003e operations clash with \u003ca\u003eData.ByteString\u003c/a\u003e or \u003ca\u003ePrelude\u003c/a\u003e\n functions however, so they should be imported \u003ccode\u003equalified\u003c/code\u003e with a different\n alias e.g.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.ByteString.Short as B.Short\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.ByteString.Short",
        "fct-package": "bytestring-builder",
        "fct-signature": "module",
        "fct-source": "src/Data-ByteString-Short.html",
        "fct-type": "module",
        "title": "Short"
      },
      "index": {
        "description": "compact representation suitable for storing short byte strings in memory In typical use cases it can be imported alongside Data.ByteString e.g import qualified Data.ByteString as import qualified Data.ByteString.Short as ShortByteString toShort fromShort Other ShortByteString operations clash with Data.ByteString or Prelude functions however so they should be imported qualified with different alias e.g import qualified Data.ByteString.Short as B.Short",
        "hierarchy": "Data ByteString Short",
        "module": "Data.ByteString.Short",
        "name": "Short",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Short",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Short.html#t:ShortByteString",
      "description": {
        "fct-descr": "\u003cp\u003eA compact representation of a \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e vector.\n\u003c/p\u003e\u003cp\u003eIt has a lower memory overhead than a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and and does not\n contribute to heap fragmentation. It can be converted to or from a\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e (at the cost of copying the string data). It supports very few\n other operations.\n\u003c/p\u003e\u003cp\u003eIt is suitable for use as an internal representation for code that needs\n to keep many short strings in memory, but it \u003cem\u003eshould not\u003c/em\u003e be used as an\n interchange type. That is, it should not generally be used in public APIs.\n The \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e type is usually more suitable for use in interfaces; it is\n more flexible and it supports a wide range of operations.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Short",
        "fct-package": "bytestring-builder",
        "fct-signature": "data",
        "fct-source": "src/Data-ByteString-Short-Internal.html#ShortByteString",
        "fct-type": "data",
        "title": "ShortByteString"
      },
      "index": {
        "description": "compact representation of Word8 vector It has lower memory overhead than ByteString and and does not contribute to heap fragmentation It can be converted to or from ByteString at the cost of copying the string data It supports very few other operations It is suitable for use as an internal representation for code that needs to keep many short strings in memory but it should not be used as an interchange type That is it should not generally be used in public APIs The ByteString type is usually more suitable for use in interfaces it is more flexible and it supports wide range of operations",
        "hierarchy": "Data ByteString Short",
        "module": "Data.ByteString.Short",
        "name": "ShortByteString",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "Short Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Short.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The empty \u003ccode\u003e\u003ca\u003eShortByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Short",
        "fct-package": "bytestring-builder",
        "fct-signature": "ShortByteString",
        "fct-source": "src/Data-ByteString-Short-Internal.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty ShortByteString",
        "hierarchy": "Data ByteString Short",
        "module": "Data.ByteString.Short",
        "name": "empty",
        "normalized": "",
        "package": "bytestring-builder",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Short.html#v:fromShort",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert a \u003ccode\u003e\u003ca\u003eShortByteString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Short",
        "fct-package": "bytestring-builder",
        "fct-signature": "ShortByteString -\u003e ByteString",
        "fct-source": "src/Data-ByteString-Short-Internal.html#fromShort",
        "fct-type": "function",
        "title": "fromShort"
      },
      "index": {
        "description": "Convert ShortByteString into ByteString",
        "hierarchy": "Data ByteString Short",
        "module": "Data.ByteString.Short",
        "name": "fromShort",
        "normalized": "ShortByteString-\u003eByteString",
        "package": "bytestring-builder",
        "partial": "Short",
        "signature": "ShortByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Short.html#v:index",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eShortByteString\u003c/a\u003e\u003c/code\u003e index (subscript) operator, starting from 0. \n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Short",
        "fct-package": "bytestring-builder",
        "fct-signature": "ShortByteString -\u003e Int -\u003e Word8",
        "fct-source": "src/Data-ByteString-Short-Internal.html#index",
        "fct-type": "function",
        "title": "index"
      },
      "index": {
        "description": "ShortByteString index subscript operator starting from",
        "hierarchy": "Data ByteString Short",
        "module": "Data.ByteString.Short",
        "name": "index",
        "normalized": "ShortByteString-\u003eInt-\u003eWord",
        "package": "bytestring-builder",
        "partial": "",
        "signature": "ShortByteString-\u003eInt-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Short.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e The length of a \u003ccode\u003e\u003ca\u003eShortByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Short",
        "fct-package": "bytestring-builder",
        "fct-signature": "ShortByteString -\u003e Int",
        "fct-source": "src/Data-ByteString-Short-Internal.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "The length of ShortByteString",
        "hierarchy": "Data ByteString Short",
        "module": "Data.ByteString.Short",
        "name": "length",
        "normalized": "ShortByteString-\u003eInt",
        "package": "bytestring-builder",
        "partial": "",
        "signature": "ShortByteString-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Short.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Test whether a \u003ccode\u003e\u003ca\u003eShortByteString\u003c/a\u003e\u003c/code\u003e is empty.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Short",
        "fct-package": "bytestring-builder",
        "fct-signature": "ShortByteString -\u003e Bool",
        "fct-source": "src/Data-ByteString-Short-Internal.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Test whether ShortByteString is empty",
        "hierarchy": "Data ByteString Short",
        "module": "Data.ByteString.Short",
        "name": "null",
        "normalized": "ShortByteString-\u003eBool",
        "package": "bytestring-builder",
        "partial": "",
        "signature": "ShortByteString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Short.html#v:pack",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert a list into a \u003ccode\u003e\u003ca\u003eShortByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Short",
        "fct-package": "bytestring-builder",
        "fct-signature": "[Word8] -\u003e ShortByteString",
        "fct-source": "src/Data-ByteString-Short-Internal.html#pack",
        "fct-type": "function",
        "title": "pack"
      },
      "index": {
        "description": "Convert list into ShortByteString",
        "hierarchy": "Data ByteString Short",
        "module": "Data.ByteString.Short",
        "name": "pack",
        "normalized": "[Word]-\u003eShortByteString",
        "package": "bytestring-builder",
        "partial": "",
        "signature": "[Word]-\u003eShortByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Short.html#v:toShort",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eShortByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis makes a copy, so does not retain the input string.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Short",
        "fct-package": "bytestring-builder",
        "fct-signature": "ByteString -\u003e ShortByteString",
        "fct-source": "src/Data-ByteString-Short-Internal.html#toShort",
        "fct-type": "function",
        "title": "toShort"
      },
      "index": {
        "description": "Convert ByteString into ShortByteString This makes copy so does not retain the input string",
        "hierarchy": "Data ByteString Short",
        "module": "Data.ByteString.Short",
        "name": "toShort",
        "normalized": "ByteString-\u003eShortByteString",
        "package": "bytestring-builder",
        "partial": "Short",
        "signature": "ByteString-\u003eShortByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-builder/docs/Data-ByteString-Short.html#v:unpack",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert a \u003ccode\u003e\u003ca\u003eShortByteString\u003c/a\u003e\u003c/code\u003e into a list.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Short",
        "fct-package": "bytestring-builder",
        "fct-signature": "ShortByteString -\u003e [Word8]",
        "fct-source": "src/Data-ByteString-Short-Internal.html#unpack",
        "fct-type": "function",
        "title": "unpack"
      },
      "index": {
        "description": "Convert ShortByteString into list",
        "hierarchy": "Data ByteString Short",
        "module": "Data.ByteString.Short",
        "name": "unpack",
        "normalized": "ShortByteString-\u003e[Word]",
        "package": "bytestring-builder",
        "partial": "",
        "signature": "ShortByteString-\u003e[Word]"
      }
    }
  }
]