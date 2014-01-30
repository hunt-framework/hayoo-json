[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer-IO.html#",
      "description": {
        "fct-module": "Data.Packer.IO",
        "fct-package": "packer",
        "fct-signature": "module",
        "fct-source": "src/Data-Packer-IO.html",
        "fct-type": "module",
        "title": "IO"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Packer IO",
        "module": "Data.Packer.IO",
        "name": "IO",
        "normalized": "",
        "package": "packer",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer-IO.html#v:runPackingIO",
      "description": {
        "fct-descr": "\u003cp\u003eRun packing with a buffer created internally with a monadic action and return the bytestring\n\u003c/p\u003e",
        "fct-module": "Data.Packer.IO",
        "fct-package": "packer",
        "fct-signature": "Int -\u003e Packing () -\u003e IO ByteString",
        "fct-source": "src/Data-Packer-IO.html#runPackingIO",
        "fct-type": "function",
        "title": "runPackingIO"
      },
      "index": {
        "description": "Run packing with buffer created internally with monadic action and return the bytestring",
        "hierarchy": "Data Packer IO",
        "module": "Data.Packer.IO",
        "name": "runPackingIO",
        "normalized": "Int-\u003ePacking()-\u003eIO ByteString",
        "package": "packer",
        "partial": "Packing IO",
        "signature": "Int-\u003ePacking()-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer-IO.html#v:runUnpackingIO",
      "description": {
        "fct-descr": "\u003cp\u003eUnpack a bytestring using a monadic unpack action in the IO monad.\n\u003c/p\u003e",
        "fct-module": "Data.Packer.IO",
        "fct-package": "packer",
        "fct-signature": "ByteString -\u003e Unpacking a -\u003e IO a",
        "fct-source": "src/Data-Packer-IO.html#runUnpackingIO",
        "fct-type": "function",
        "title": "runUnpackingIO"
      },
      "index": {
        "description": "Unpack bytestring using monadic unpack action in the IO monad",
        "hierarchy": "Data Packer IO",
        "module": "Data.Packer.IO",
        "name": "runUnpackingIO",
        "normalized": "ByteString-\u003eUnpacking a-\u003eIO a",
        "package": "packer",
        "partial": "Unpacking IO",
        "signature": "ByteString-\u003eUnpacking a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer-IO.html#v:tryUnpackingIO",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003erunUnpackingIO\u003c/a\u003e\u003c/code\u003e but catch exception and return an Either type.\n\u003c/p\u003e",
        "fct-module": "Data.Packer.IO",
        "fct-package": "packer",
        "fct-signature": "ByteString -\u003e Unpacking a -\u003e IO (Either SomeException a)",
        "fct-source": "src/Data-Packer-IO.html#tryUnpackingIO",
        "fct-type": "function",
        "title": "tryUnpackingIO"
      },
      "index": {
        "description": "Similar to runUnpackingIO but catch exception and return an Either type",
        "hierarchy": "Data Packer IO",
        "module": "Data.Packer.IO",
        "name": "tryUnpackingIO",
        "normalized": "ByteString-\u003eUnpacking a-\u003eIO(Either SomeException a)",
        "package": "packer",
        "partial": "Unpacking IO",
        "signature": "ByteString-\u003eUnpacking a-\u003eIO(Either SomeException a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer-Unsafe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAccess to lower primitive that allow to use Packing and Unpacking,\n on mmap type of memory. Potentially unsafe, as it can't check if\n any of value passed are valid.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Packer.Unsafe",
        "fct-package": "packer",
        "fct-signature": "module",
        "fct-source": "src/Data-Packer-Unsafe.html",
        "fct-type": "module",
        "title": "Unsafe"
      },
      "index": {
        "description": "Access to lower primitive that allow to use Packing and Unpacking on mmap type of memory Potentially unsafe as it can check if any of value passed are valid",
        "hierarchy": "Data Packer Unsafe",
        "module": "Data.Packer.Unsafe",
        "name": "Unsafe",
        "normalized": "",
        "package": "packer",
        "partial": "Unsafe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer-Unsafe.html#v:runPackingAt",
      "description": {
        "fct-descr": "\u003cp\u003eRun packing on an arbitrary buffer with a size.\n\u003c/p\u003e\u003cp\u003eThis is available, for example to run on mmap typed memory, and this is highly unsafe,\n as the user need to make sure the pointer and size passed to this function are correct.\n\u003c/p\u003e",
        "fct-module": "Data.Packer.Unsafe",
        "fct-package": "packer",
        "fct-signature": "Ptr Word8-\u003e Int-\u003e Packing ()-\u003e IO Int",
        "fct-type": "function",
        "title": "runPackingAt"
      },
      "index": {
        "description": "Run packing on an arbitrary buffer with size This is available for example to run on mmap typed memory and this is highly unsafe as the user need to make sure the pointer and size passed to this function are correct",
        "hierarchy": "Data Packer Unsafe",
        "module": "Data.Packer.Unsafe",
        "name": "runPackingAt",
        "normalized": "Ptr Word-\u003eInt-\u003ePacking()-\u003eIO Int",
        "package": "packer",
        "partial": "Packing At",
        "signature": "Ptr Word-\u003eInt-\u003ePacking()-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer-Unsafe.html#v:runUnpackingAt",
      "description": {
        "fct-descr": "\u003cp\u003eRun unpacking on an arbitrary buffer with a size.\n\u003c/p\u003e\u003cp\u003eThis is available, for example to run on mmap typed memory, and this is highly unsafe,\n as the user need to make sure the pointer and size passed to this function are correct.\n\u003c/p\u003e",
        "fct-module": "Data.Packer.Unsafe",
        "fct-package": "packer",
        "fct-signature": "ForeignPtr Word8-\u003e Int-\u003e Int-\u003e Unpacking a-\u003e IO a",
        "fct-type": "function",
        "title": "runUnpackingAt"
      },
      "index": {
        "description": "Run unpacking on an arbitrary buffer with size This is available for example to run on mmap typed memory and this is highly unsafe as the user need to make sure the pointer and size passed to this function are correct",
        "hierarchy": "Data Packer Unsafe",
        "module": "Data.Packer.Unsafe",
        "name": "runUnpackingAt",
        "normalized": "ForeignPtr Word-\u003eInt-\u003eInt-\u003eUnpacking a-\u003eIO a",
        "package": "packer",
        "partial": "Unpacking At",
        "signature": "ForeignPtr Word-\u003eInt-\u003eInt-\u003eUnpacking a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple packing module.\n\u003c/p\u003e\u003cp\u003eThis is a tradeoff between a more pure / builder (binary, cereal, builder)\n and direct access to Storable or pointer manipulation\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "module",
        "fct-source": "src/Data-Packer.html",
        "fct-type": "module",
        "title": "Packer"
      },
      "index": {
        "description": "Simple packing module This is tradeoff between more pure builder binary cereal builder and direct access to Storable or pointer manipulation",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "Packer",
        "normalized": "",
        "package": "packer",
        "partial": "Packer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#t:Hole",
      "description": {
        "fct-descr": "\u003cp\u003eA Hole represent something that need to be filled\n later, for example a CRC, a prefixed size, etc.\n\u003c/p\u003e\u003cp\u003eThey need to be filled before the end of the package,\n otherwise an exception will be raised.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "data",
        "fct-source": "src/Data-Packer-Internal.html#Hole",
        "fct-type": "data",
        "title": "Hole"
      },
      "index": {
        "description": "Hole represent something that need to be filled later for example CRC prefixed size etc They need to be filled before the end of the package otherwise an exception will be raised",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "Hole",
        "normalized": "",
        "package": "packer",
        "partial": "Hole",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#t:OutOfBoundPacking",
      "description": {
        "fct-descr": "\u003cp\u003eException when trying to put bytes out of the memory bounds.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "data",
        "fct-source": "src/Data-Packer-Internal.html#OutOfBoundPacking",
        "fct-type": "data",
        "title": "OutOfBoundPacking"
      },
      "index": {
        "description": "Exception when trying to put bytes out of the memory bounds",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "OutOfBoundPacking",
        "normalized": "",
        "package": "packer",
        "partial": "Out Of Bound Packing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#t:OutOfBoundUnpacking",
      "description": {
        "fct-descr": "\u003cp\u003eException when trying to get bytes out of the memory bounds.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "data",
        "fct-source": "src/Data-Packer-Internal.html#OutOfBoundUnpacking",
        "fct-type": "data",
        "title": "OutOfBoundUnpacking"
      },
      "index": {
        "description": "Exception when trying to get bytes out of the memory bounds",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "OutOfBoundUnpacking",
        "normalized": "",
        "package": "packer",
        "partial": "Out Of Bound Unpacking",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#t:Packing",
      "description": {
        "fct-descr": "\u003cp\u003ePacking monad\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "data",
        "fct-source": "src/Data-Packer-Internal.html#Packing",
        "fct-type": "data",
        "title": "Packing"
      },
      "index": {
        "description": "Packing monad",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "Packing",
        "normalized": "",
        "package": "packer",
        "partial": "Packing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#t:Unpacking",
      "description": {
        "fct-descr": "\u003cp\u003eUnpacking monad\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "data",
        "fct-source": "src/Data-Packer-Internal.html#Unpacking",
        "fct-type": "data",
        "title": "Unpacking"
      },
      "index": {
        "description": "Unpacking monad",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "Unpacking",
        "normalized": "",
        "package": "packer",
        "partial": "Unpacking",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:OutOfBoundPacking",
      "description": {
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "OutOfBoundPacking Int Int",
        "fct-source": "src/Data-Packer-Internal.html#OutOfBoundPacking",
        "fct-type": "function",
        "title": "OutOfBoundPacking"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "OutOfBoundPacking",
        "normalized": "",
        "package": "packer",
        "partial": "Out Of Bound Packing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:OutOfBoundUnpacking",
      "description": {
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "OutOfBoundUnpacking Int Int",
        "fct-source": "src/Data-Packer-Internal.html#OutOfBoundUnpacking",
        "fct-type": "function",
        "title": "OutOfBoundUnpacking"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "OutOfBoundUnpacking",
        "normalized": "",
        "package": "packer",
        "partial": "Out Of Bound Unpacking",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:fillHole",
      "description": {
        "fct-descr": "\u003cp\u003eFill a hole with a value\n\u003c/p\u003e\u003cp\u003eTODO: user can use one hole many times leading to wrong counting.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Hole a -\u003e a -\u003e Packing ()",
        "fct-source": "src/Data-Packer-Internal.html#fillHole",
        "fct-type": "function",
        "title": "fillHole"
      },
      "index": {
        "description": "Fill hole with value TODO user can use one hole many times leading to wrong counting",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "fillHole",
        "normalized": "Hole a-\u003ea-\u003ePacking()",
        "package": "packer",
        "partial": "Hole",
        "signature": "Hole a-\u003ea-\u003ePacking()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:getBytes",
      "description": {
        "fct-descr": "\u003cp\u003eGet a number of bytes in bytestring format.\n\u003c/p\u003e\u003cp\u003eThe original block of memory is expected to live for the life of this bytestring,\n and this is done so by holding the original ForeignPtr.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Int -\u003e Unpacking ByteString",
        "fct-source": "src/Data-Packer.html#getBytes",
        "fct-type": "function",
        "title": "getBytes"
      },
      "index": {
        "description": "Get number of bytes in bytestring format The original block of memory is expected to live for the life of this bytestring and this is done so by holding the original ForeignPtr",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "getBytes",
        "normalized": "Int-\u003eUnpacking ByteString",
        "package": "packer",
        "partial": "Bytes",
        "signature": "Int-\u003eUnpacking ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:getBytesCopy",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003egetBytes\u003c/a\u003e\u003c/code\u003e but copy the bytes to a new bytestring without making reference\n to the original memory after the copy. this allow the original block of memory to go away.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Int -\u003e Unpacking ByteString",
        "fct-source": "src/Data-Packer.html#getBytesCopy",
        "fct-type": "function",
        "title": "getBytesCopy"
      },
      "index": {
        "description": "Similar to getBytes but copy the bytes to new bytestring without making reference to the original memory after the copy this allow the original block of memory to go away",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "getBytesCopy",
        "normalized": "Int-\u003eUnpacking ByteString",
        "package": "packer",
        "partial": "Bytes Copy",
        "signature": "Int-\u003eUnpacking ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:getBytesWhile",
      "description": {
        "fct-descr": "\u003cp\u003eGet a number of bytes until in bytestring format.\n\u003c/p\u003e\u003cp\u003ethis could be made more efficient\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "(Word8 -\u003e Bool) -\u003e Unpacking (Maybe ByteString)",
        "fct-source": "src/Data-Packer.html#getBytesWhile",
        "fct-type": "function",
        "title": "getBytesWhile"
      },
      "index": {
        "description": "Get number of bytes until in bytestring format this could be made more efficient",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "getBytesWhile",
        "normalized": "(Word-\u003eBool)-\u003eUnpacking(Maybe ByteString)",
        "package": "packer",
        "partial": "Bytes While",
        "signature": "(Word-\u003eBool)-\u003eUnpacking(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:getRemaining",
      "description": {
        "fct-descr": "\u003cp\u003eGet the remaining bytes.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Unpacking ByteString",
        "fct-source": "src/Data-Packer.html#getRemaining",
        "fct-type": "function",
        "title": "getRemaining"
      },
      "index": {
        "description": "Get the remaining bytes",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "getRemaining",
        "normalized": "",
        "package": "packer",
        "partial": "Remaining",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:getRemainingCopy",
      "description": {
        "fct-descr": "\u003cp\u003eGet the remaining bytes but copy the bytestring and drop any\n reference from the original function.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Unpacking ByteString",
        "fct-source": "src/Data-Packer.html#getRemainingCopy",
        "fct-type": "function",
        "title": "getRemainingCopy"
      },
      "index": {
        "description": "Get the remaining bytes but copy the bytestring and drop any reference from the original function",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "getRemainingCopy",
        "normalized": "",
        "package": "packer",
        "partial": "Remaining Copy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:getStorable",
      "description": {
        "fct-descr": "\u003cp\u003eGet an arbitrary type with the Storable class constraint.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Unpacking a",
        "fct-source": "src/Data-Packer.html#getStorable",
        "fct-type": "function",
        "title": "getStorable"
      },
      "index": {
        "description": "Get an arbitrary type with the Storable class constraint",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "getStorable",
        "normalized": "",
        "package": "packer",
        "partial": "Storable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:getWord16",
      "description": {
        "fct-descr": "\u003cp\u003eGet a Word16 in the host endianess.\n\u003c/p\u003e\u003cp\u003eIt's recommended to use an explicit endianness (LE or BE)\n when unserializing format.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Unpacking Word16",
        "fct-source": "src/Data-Packer.html#getWord16",
        "fct-type": "function",
        "title": "getWord16"
      },
      "index": {
        "description": "Get Word16 in the host endianess It recommended to use an explicit endianness LE or BE when unserializing format",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "getWord16",
        "normalized": "",
        "package": "packer",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:getWord16BE",
      "description": {
        "fct-descr": "\u003cp\u003eGet a Word16 serialized in big endian.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Unpacking Word16",
        "fct-source": "src/Data-Packer.html#getWord16BE",
        "fct-type": "function",
        "title": "getWord16BE"
      },
      "index": {
        "description": "Get Word16 serialized in big endian",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "getWord16BE",
        "normalized": "",
        "package": "packer",
        "partial": "Word BE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:getWord16LE",
      "description": {
        "fct-descr": "\u003cp\u003eGet a Word16 serialized in little endian.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Unpacking Word16",
        "fct-source": "src/Data-Packer.html#getWord16LE",
        "fct-type": "function",
        "title": "getWord16LE"
      },
      "index": {
        "description": "Get Word16 serialized in little endian",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "getWord16LE",
        "normalized": "",
        "package": "packer",
        "partial": "Word LE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:getWord32",
      "description": {
        "fct-descr": "\u003cp\u003eGet a Word32 in the host endianess.\n\u003c/p\u003e\u003cp\u003eIt's recommended to use an explicit endianness (LE or BE)\n when unserializing format.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Unpacking Word32",
        "fct-source": "src/Data-Packer.html#getWord32",
        "fct-type": "function",
        "title": "getWord32"
      },
      "index": {
        "description": "Get Word32 in the host endianess It recommended to use an explicit endianness LE or BE when unserializing format",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "getWord32",
        "normalized": "",
        "package": "packer",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:getWord32BE",
      "description": {
        "fct-descr": "\u003cp\u003eGet a Word32 serialized in big endian.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Unpacking Word32",
        "fct-source": "src/Data-Packer.html#getWord32BE",
        "fct-type": "function",
        "title": "getWord32BE"
      },
      "index": {
        "description": "Get Word32 serialized in big endian",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "getWord32BE",
        "normalized": "",
        "package": "packer",
        "partial": "Word BE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:getWord32LE",
      "description": {
        "fct-descr": "\u003cp\u003eGet a Word32 serialized in little endian.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Unpacking Word32",
        "fct-source": "src/Data-Packer.html#getWord32LE",
        "fct-type": "function",
        "title": "getWord32LE"
      },
      "index": {
        "description": "Get Word32 serialized in little endian",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "getWord32LE",
        "normalized": "",
        "package": "packer",
        "partial": "Word LE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:getWord64",
      "description": {
        "fct-descr": "\u003cp\u003eGet a Word64 in the host endianess.\n\u003c/p\u003e\u003cp\u003eIt's recommended to use an explicit endianness (LE or BE)\n when unserializing format.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Unpacking Word64",
        "fct-source": "src/Data-Packer.html#getWord64",
        "fct-type": "function",
        "title": "getWord64"
      },
      "index": {
        "description": "Get Word64 in the host endianess It recommended to use an explicit endianness LE or BE when unserializing format",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "getWord64",
        "normalized": "",
        "package": "packer",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:getWord64BE",
      "description": {
        "fct-descr": "\u003cp\u003eGet a Word64 serialized in big endian.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Unpacking Word64",
        "fct-source": "src/Data-Packer.html#getWord64BE",
        "fct-type": "function",
        "title": "getWord64BE"
      },
      "index": {
        "description": "Get Word64 serialized in big endian",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "getWord64BE",
        "normalized": "",
        "package": "packer",
        "partial": "Word BE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:getWord64LE",
      "description": {
        "fct-descr": "\u003cp\u003eGet a Word64 serialized in little endian.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Unpacking Word64",
        "fct-source": "src/Data-Packer.html#getWord64LE",
        "fct-type": "function",
        "title": "getWord64LE"
      },
      "index": {
        "description": "Get Word64 serialized in little endian",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "getWord64LE",
        "normalized": "",
        "package": "packer",
        "partial": "Word LE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:getWord8",
      "description": {
        "fct-descr": "\u003cp\u003eGet a Word8\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Unpacking Word8",
        "fct-source": "src/Data-Packer.html#getWord8",
        "fct-type": "function",
        "title": "getWord8"
      },
      "index": {
        "description": "Get Word8",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "getWord8",
        "normalized": "",
        "package": "packer",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:packGetPosition",
      "description": {
        "fct-descr": "\u003cp\u003eGet the position in the memory block.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Packing Int",
        "fct-source": "src/Data-Packer-Internal.html#packGetPosition",
        "fct-type": "function",
        "title": "packGetPosition"
      },
      "index": {
        "description": "Get the position in the memory block",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "packGetPosition",
        "normalized": "",
        "package": "packer",
        "partial": "Get Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:putBytes",
      "description": {
        "fct-descr": "\u003cp\u003ePut a Bytestring.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "ByteString -\u003e Packing ()",
        "fct-source": "src/Data-Packer.html#putBytes",
        "fct-type": "function",
        "title": "putBytes"
      },
      "index": {
        "description": "Put Bytestring",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "putBytes",
        "normalized": "ByteString-\u003ePacking()",
        "package": "packer",
        "partial": "Bytes",
        "signature": "ByteString-\u003ePacking()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:putHoleWord32",
      "description": {
        "fct-descr": "\u003cp\u003ePut a Word32 Hole in host endian\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Packing (Hole Word32)",
        "fct-source": "src/Data-Packer.html#putHoleWord32",
        "fct-type": "function",
        "title": "putHoleWord32"
      },
      "index": {
        "description": "Put Word32 Hole in host endian",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "putHoleWord32",
        "normalized": "",
        "package": "packer",
        "partial": "Hole Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:putHoleWord32BE",
      "description": {
        "fct-descr": "\u003cp\u003ePut a Word32 Hole in big endian\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Packing (Hole Word32)",
        "fct-source": "src/Data-Packer.html#putHoleWord32BE",
        "fct-type": "function",
        "title": "putHoleWord32BE"
      },
      "index": {
        "description": "Put Word32 Hole in big endian",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "putHoleWord32BE",
        "normalized": "",
        "package": "packer",
        "partial": "Hole Word BE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:putHoleWord32LE",
      "description": {
        "fct-descr": "\u003cp\u003ePut a Word32 Hole in little endian\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Packing (Hole Word32)",
        "fct-source": "src/Data-Packer.html#putHoleWord32LE",
        "fct-type": "function",
        "title": "putHoleWord32LE"
      },
      "index": {
        "description": "Put Word32 Hole in little endian",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "putHoleWord32LE",
        "normalized": "",
        "package": "packer",
        "partial": "Hole Word LE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:putHoleWord64",
      "description": {
        "fct-descr": "\u003cp\u003ePut a Word64 Hole in host endian\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Packing (Hole Word64)",
        "fct-source": "src/Data-Packer.html#putHoleWord64",
        "fct-type": "function",
        "title": "putHoleWord64"
      },
      "index": {
        "description": "Put Word64 Hole in host endian",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "putHoleWord64",
        "normalized": "",
        "package": "packer",
        "partial": "Hole Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:putHoleWord64BE",
      "description": {
        "fct-descr": "\u003cp\u003ePut a Word64 Hole in big endian\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Packing (Hole Word64)",
        "fct-source": "src/Data-Packer.html#putHoleWord64BE",
        "fct-type": "function",
        "title": "putHoleWord64BE"
      },
      "index": {
        "description": "Put Word64 Hole in big endian",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "putHoleWord64BE",
        "normalized": "",
        "package": "packer",
        "partial": "Hole Word BE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:putHoleWord64LE",
      "description": {
        "fct-descr": "\u003cp\u003ePut a Word64 Hole in little endian\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Packing (Hole Word64)",
        "fct-source": "src/Data-Packer.html#putHoleWord64LE",
        "fct-type": "function",
        "title": "putHoleWord64LE"
      },
      "index": {
        "description": "Put Word64 Hole in little endian",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "putHoleWord64LE",
        "normalized": "",
        "package": "packer",
        "partial": "Hole Word LE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:putStorable",
      "description": {
        "fct-descr": "\u003cp\u003ePut an arbitrary type with the Storable class constraint.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "a -\u003e Packing ()",
        "fct-source": "src/Data-Packer.html#putStorable",
        "fct-type": "function",
        "title": "putStorable"
      },
      "index": {
        "description": "Put an arbitrary type with the Storable class constraint",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "putStorable",
        "normalized": "a-\u003ePacking()",
        "package": "packer",
        "partial": "Storable",
        "signature": "a-\u003ePacking()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:putWord16",
      "description": {
        "fct-descr": "\u003cp\u003ePut a Word16 in the host endianess.\n\u003c/p\u003e\u003cp\u003eIt's recommended to use an explicit endianness (LE or BE)\n when serializing format.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Word16 -\u003e Packing ()",
        "fct-source": "src/Data-Packer.html#putWord16",
        "fct-type": "function",
        "title": "putWord16"
      },
      "index": {
        "description": "Put Word16 in the host endianess It recommended to use an explicit endianness LE or BE when serializing format",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "putWord16",
        "normalized": "Word-\u003ePacking()",
        "package": "packer",
        "partial": "Word",
        "signature": "Word-\u003ePacking()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:putWord16BE",
      "description": {
        "fct-descr": "\u003cp\u003ePut a Word16 serialized in big endian.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Word16 -\u003e Packing ()",
        "fct-source": "src/Data-Packer.html#putWord16BE",
        "fct-type": "function",
        "title": "putWord16BE"
      },
      "index": {
        "description": "Put Word16 serialized in big endian",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "putWord16BE",
        "normalized": "Word-\u003ePacking()",
        "package": "packer",
        "partial": "Word BE",
        "signature": "Word-\u003ePacking()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:putWord16LE",
      "description": {
        "fct-descr": "\u003cp\u003ePut a Word16 serialized in little endian.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Word16 -\u003e Packing ()",
        "fct-source": "src/Data-Packer.html#putWord16LE",
        "fct-type": "function",
        "title": "putWord16LE"
      },
      "index": {
        "description": "Put Word16 serialized in little endian",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "putWord16LE",
        "normalized": "Word-\u003ePacking()",
        "package": "packer",
        "partial": "Word LE",
        "signature": "Word-\u003ePacking()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:putWord32",
      "description": {
        "fct-descr": "\u003cp\u003ePut a Word32 in the host endianess.\n\u003c/p\u003e\u003cp\u003eIt's recommended to use an explicit endianness (LE or BE)\n when serializing format.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Word32 -\u003e Packing ()",
        "fct-source": "src/Data-Packer.html#putWord32",
        "fct-type": "function",
        "title": "putWord32"
      },
      "index": {
        "description": "Put Word32 in the host endianess It recommended to use an explicit endianness LE or BE when serializing format",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "putWord32",
        "normalized": "Word-\u003ePacking()",
        "package": "packer",
        "partial": "Word",
        "signature": "Word-\u003ePacking()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:putWord32BE",
      "description": {
        "fct-descr": "\u003cp\u003ePut a Word32 serialized in big endian.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Word32 -\u003e Packing ()",
        "fct-source": "src/Data-Packer.html#putWord32BE",
        "fct-type": "function",
        "title": "putWord32BE"
      },
      "index": {
        "description": "Put Word32 serialized in big endian",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "putWord32BE",
        "normalized": "Word-\u003ePacking()",
        "package": "packer",
        "partial": "Word BE",
        "signature": "Word-\u003ePacking()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:putWord32LE",
      "description": {
        "fct-descr": "\u003cp\u003ePut a Word32 serialized in little endian.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Word32 -\u003e Packing ()",
        "fct-source": "src/Data-Packer.html#putWord32LE",
        "fct-type": "function",
        "title": "putWord32LE"
      },
      "index": {
        "description": "Put Word32 serialized in little endian",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "putWord32LE",
        "normalized": "Word-\u003ePacking()",
        "package": "packer",
        "partial": "Word LE",
        "signature": "Word-\u003ePacking()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:putWord64",
      "description": {
        "fct-descr": "\u003cp\u003ePut a Word64 in the host endianess.\n\u003c/p\u003e\u003cp\u003eIt's recommended to use an explicit endianness (LE or BE)\n when serializing format.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Word64 -\u003e Packing ()",
        "fct-source": "src/Data-Packer.html#putWord64",
        "fct-type": "function",
        "title": "putWord64"
      },
      "index": {
        "description": "Put Word64 in the host endianess It recommended to use an explicit endianness LE or BE when serializing format",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "putWord64",
        "normalized": "Word-\u003ePacking()",
        "package": "packer",
        "partial": "Word",
        "signature": "Word-\u003ePacking()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:putWord64BE",
      "description": {
        "fct-descr": "\u003cp\u003ePut a Word64 serialized in big endian.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Word64 -\u003e Packing ()",
        "fct-source": "src/Data-Packer.html#putWord64BE",
        "fct-type": "function",
        "title": "putWord64BE"
      },
      "index": {
        "description": "Put Word64 serialized in big endian",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "putWord64BE",
        "normalized": "Word-\u003ePacking()",
        "package": "packer",
        "partial": "Word BE",
        "signature": "Word-\u003ePacking()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:putWord64LE",
      "description": {
        "fct-descr": "\u003cp\u003ePut a Word64 serialized in little endian.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Word64 -\u003e Packing ()",
        "fct-source": "src/Data-Packer.html#putWord64LE",
        "fct-type": "function",
        "title": "putWord64LE"
      },
      "index": {
        "description": "Put Word64 serialized in little endian",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "putWord64LE",
        "normalized": "Word-\u003ePacking()",
        "package": "packer",
        "partial": "Word LE",
        "signature": "Word-\u003ePacking()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:putWord8",
      "description": {
        "fct-descr": "\u003cp\u003ePut a Word8\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Word8 -\u003e Packing ()",
        "fct-source": "src/Data-Packer.html#putWord8",
        "fct-type": "function",
        "title": "putWord8"
      },
      "index": {
        "description": "Put Word8",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "putWord8",
        "normalized": "Word-\u003ePacking()",
        "package": "packer",
        "partial": "Word",
        "signature": "Word-\u003ePacking()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:runPacking",
      "description": {
        "fct-descr": "\u003cp\u003eRun packing with a buffer created internally with a monadic action and return the bytestring\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Int -\u003e Packing () -\u003e ByteString",
        "fct-source": "src/Data-Packer.html#runPacking",
        "fct-type": "function",
        "title": "runPacking"
      },
      "index": {
        "description": "Run packing with buffer created internally with monadic action and return the bytestring",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "runPacking",
        "normalized": "Int-\u003ePacking()-\u003eByteString",
        "package": "packer",
        "partial": "Packing",
        "signature": "Int-\u003ePacking()-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:runUnpacking",
      "description": {
        "fct-descr": "\u003cp\u003eUnpack a bytestring using a monadic unpack action.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Unpacking a -\u003e ByteString -\u003e a",
        "fct-source": "src/Data-Packer.html#runUnpacking",
        "fct-type": "function",
        "title": "runUnpacking"
      },
      "index": {
        "description": "Unpack bytestring using monadic unpack action",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "runUnpacking",
        "normalized": "Unpacking a-\u003eByteString-\u003ea",
        "package": "packer",
        "partial": "Unpacking",
        "signature": "Unpacking a-\u003eByteString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:tryUnpacking",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003erunUnpacking\u003c/a\u003e\u003c/code\u003e but returns an Either type with an exception type in case of failure.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Unpacking a -\u003e ByteString -\u003e Either SomeException a",
        "fct-source": "src/Data-Packer.html#tryUnpacking",
        "fct-type": "function",
        "title": "tryUnpacking"
      },
      "index": {
        "description": "Similar to runUnpacking but returns an Either type with an exception type in case of failure",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "tryUnpacking",
        "normalized": "Unpacking a-\u003eByteString-\u003eEither SomeException a",
        "package": "packer",
        "partial": "Unpacking",
        "signature": "Unpacking a-\u003eByteString-\u003eEither SomeException a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:unpackGetPosition",
      "description": {
        "fct-descr": "\u003cp\u003eGet the position in the memory block.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Unpacking Int",
        "fct-source": "src/Data-Packer-Internal.html#unpackGetPosition",
        "fct-type": "function",
        "title": "unpackGetPosition"
      },
      "index": {
        "description": "Get the position in the memory block",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "unpackGetPosition",
        "normalized": "",
        "package": "packer",
        "partial": "Get Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:unpackSetPosition",
      "description": {
        "fct-descr": "\u003cp\u003eSet the new position from the beginning in the memory block.\n This is useful to skip bytes or when using absolute offsets from a header or some such.\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Int -\u003e Unpacking ()",
        "fct-source": "src/Data-Packer-Internal.html#unpackSetPosition",
        "fct-type": "function",
        "title": "unpackSetPosition"
      },
      "index": {
        "description": "Set the new position from the beginning in the memory block This is useful to skip bytes or when using absolute offsets from header or some such",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "unpackSetPosition",
        "normalized": "Int-\u003eUnpacking()",
        "package": "packer",
        "partial": "Set Position",
        "signature": "Int-\u003eUnpacking()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packer/docs/Data-Packer.html#v:unpackSkip",
      "description": {
        "fct-descr": "\u003cp\u003eSkip bytes\n\u003c/p\u003e",
        "fct-module": "Data.Packer",
        "fct-package": "packer",
        "fct-signature": "Int -\u003e Unpacking ()",
        "fct-source": "src/Data-Packer.html#unpackSkip",
        "fct-type": "function",
        "title": "unpackSkip"
      },
      "index": {
        "description": "Skip bytes",
        "hierarchy": "Data Packer",
        "module": "Data.Packer",
        "name": "unpackSkip",
        "normalized": "Int-\u003eUnpacking()",
        "package": "packer",
        "partial": "Skip",
        "signature": "Int-\u003eUnpacking()"
      }
    }
  }
]