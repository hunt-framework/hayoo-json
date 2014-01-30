[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-Binary.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIteratees for parsing binary data.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.MutableIter.Binary",
        "fct-package": "mutable-iter",
        "fct-signature": "module",
        "fct-source": "src/Data-MutableIter-Binary.html",
        "fct-type": "module",
        "title": "Binary"
      },
      "index": {
        "description": "Iteratees for parsing binary data",
        "hierarchy": "Data MutableIter Binary",
        "module": "Data.MutableIter.Binary",
        "name": "Binary",
        "normalized": "",
        "package": "mutable-iter",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-Binary.html#t:Endian",
      "description": {
        "fct-descr": "\u003cp\u003eIndicate endian-ness.\n\u003c/p\u003e",
        "fct-module": "Data.MutableIter.Binary",
        "fct-package": "mutable-iter",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Endian"
      },
      "index": {
        "description": "Indicate endian-ness",
        "hierarchy": "Data MutableIter Binary",
        "module": "Data.MutableIter.Binary",
        "name": "Endian",
        "normalized": "",
        "package": "mutable-iter",
        "partial": "Endian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-Binary.html#v:LSB",
      "description": {
        "fct-descr": "\u003cp\u003eLeast Significan Byte is first (little-endian)\n\u003c/p\u003e",
        "fct-module": "Data.MutableIter.Binary",
        "fct-package": "mutable-iter",
        "fct-signature": "LSB",
        "fct-type": "function",
        "title": "LSB"
      },
      "index": {
        "description": "Least Significan Byte is first little-endian",
        "hierarchy": "Data MutableIter Binary",
        "module": "Data.MutableIter.Binary",
        "name": "LSB",
        "normalized": "",
        "package": "mutable-iter",
        "partial": "LSB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-Binary.html#v:MSB",
      "description": {
        "fct-descr": "\u003cp\u003eMost Significant Byte is first (big-endian)\n\u003c/p\u003e",
        "fct-module": "Data.MutableIter.Binary",
        "fct-package": "mutable-iter",
        "fct-signature": "MSB",
        "fct-type": "function",
        "title": "MSB"
      },
      "index": {
        "description": "Most Significant Byte is first big-endian",
        "hierarchy": "Data MutableIter Binary",
        "module": "Data.MutableIter.Binary",
        "name": "MSB",
        "normalized": "",
        "package": "mutable-iter",
        "partial": "MSB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-Binary.html#v:endianRead2",
      "description": {
        "fct-module": "Data.MutableIter.Binary",
        "fct-package": "mutable-iter",
        "fct-signature": "Endian -\u003e MIteratee (IOBuffer r Word8) m Word16",
        "fct-source": "src/Data-MutableIter-Binary.html#endianRead2",
        "fct-type": "function",
        "title": "endianRead2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter Binary",
        "module": "Data.MutableIter.Binary",
        "name": "endianRead2",
        "normalized": "Endian-\u003eMIteratee(IOBuffer a Word)b Word",
        "package": "mutable-iter",
        "partial": "Read",
        "signature": "Endian-\u003eMIteratee(IOBuffer r Word)m Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-Binary.html#v:endianRead3",
      "description": {
        "fct-descr": "\u003cp\u003eread 3 bytes in an endian manner.  If the first bit is set (negative),\n set the entire first byte so the Word32 can be properly set negative as\n well.\n\u003c/p\u003e",
        "fct-module": "Data.MutableIter.Binary",
        "fct-package": "mutable-iter",
        "fct-signature": "Endian -\u003e MIteratee (IOBuffer r Word8) m Word32",
        "fct-source": "src/Data-MutableIter-Binary.html#endianRead3",
        "fct-type": "function",
        "title": "endianRead3"
      },
      "index": {
        "description": "read bytes in an endian manner If the first bit is set negative set the entire first byte so the Word32 can be properly set negative as well",
        "hierarchy": "Data MutableIter Binary",
        "module": "Data.MutableIter.Binary",
        "name": "endianRead3",
        "normalized": "Endian-\u003eMIteratee(IOBuffer a Word)b Word",
        "package": "mutable-iter",
        "partial": "Read",
        "signature": "Endian-\u003eMIteratee(IOBuffer r Word)m Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-Binary.html#v:endianRead4",
      "description": {
        "fct-module": "Data.MutableIter.Binary",
        "fct-package": "mutable-iter",
        "fct-signature": "Endian -\u003e MIteratee (IOBuffer r Word8) m Word32",
        "fct-source": "src/Data-MutableIter-Binary.html#endianRead4",
        "fct-type": "function",
        "title": "endianRead4"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter Binary",
        "module": "Data.MutableIter.Binary",
        "name": "endianRead4",
        "normalized": "Endian-\u003eMIteratee(IOBuffer a Word)b Word",
        "package": "mutable-iter",
        "partial": "Read",
        "signature": "Endian-\u003eMIteratee(IOBuffer r Word)m Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#",
      "description": {
        "fct-module": "Data.MutableIter.IOBuffer",
        "fct-package": "mutable-iter",
        "fct-signature": "module",
        "fct-source": "src/Data-MutableIter-IOBuffer.html",
        "fct-type": "module",
        "title": "IOBuffer"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter IOBuffer",
        "module": "Data.MutableIter.IOBuffer",
        "name": "IOBuffer",
        "normalized": "",
        "package": "mutable-iter",
        "partial": "IOBuffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#t:IOBuffer",
      "description": {
        "fct-descr": "\u003cp\u003eA mutable buffer to hold storable elements.  This data type supports\n memory recycling.\n\u003c/p\u003e",
        "fct-module": "Data.MutableIter.IOBuffer",
        "fct-package": "mutable-iter",
        "fct-signature": "data",
        "fct-source": "src/Data-MutableIter-IOBuffer.html#IOBuffer",
        "fct-type": "data",
        "title": "IOBuffer"
      },
      "index": {
        "description": "mutable buffer to hold storable elements This data type supports memory recycling",
        "hierarchy": "Data MutableIter IOBuffer",
        "module": "Data.MutableIter.IOBuffer",
        "name": "IOBuffer",
        "normalized": "",
        "package": "mutable-iter",
        "partial": "IOBuffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:append",
      "description": {
        "fct-descr": "\u003cp\u003eAppend two buffers.  Copies data from both into a new buffer.\n\u003c/p\u003e",
        "fct-module": "Data.MutableIter.IOBuffer",
        "fct-package": "mutable-iter",
        "fct-signature": "IOBuffer r el -\u003e IOBuffer r el -\u003e IO (IOBuffer r el)",
        "fct-source": "src/Data-MutableIter-IOBuffer.html#append",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "Append two buffers Copies data from both into new buffer",
        "hierarchy": "Data MutableIter IOBuffer",
        "module": "Data.MutableIter.IOBuffer",
        "name": "append",
        "normalized": "IOBuffer a b-\u003eIOBuffer a b-\u003eIO(IOBuffer a b)",
        "package": "mutable-iter",
        "partial": "",
        "signature": "IOBuffer r el-\u003eIOBuffer r el-\u003eIO(IOBuffer r el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:castBuffer",
      "description": {
        "fct-descr": "\u003cp\u003eCast a buffer to a different type.  Any extra data is truncated.\n This is not safe unless the buffer offset is 0.\n\u003c/p\u003e",
        "fct-module": "Data.MutableIter.IOBuffer",
        "fct-package": "mutable-iter",
        "fct-signature": "IOBuffer r el -\u003e IO (IOBuffer r el')",
        "fct-source": "src/Data-MutableIter-IOBuffer.html#castBuffer",
        "fct-type": "function",
        "title": "castBuffer"
      },
      "index": {
        "description": "Cast buffer to different type Any extra data is truncated This is not safe unless the buffer offset is",
        "hierarchy": "Data MutableIter IOBuffer",
        "module": "Data.MutableIter.IOBuffer",
        "name": "castBuffer",
        "normalized": "IOBuffer a b-\u003eIO(IOBuffer a c)",
        "package": "mutable-iter",
        "partial": "Buffer",
        "signature": "IOBuffer r el-\u003eIO(IOBuffer r el')"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:copyBuffer",
      "description": {
        "fct-descr": "\u003cp\u003eCopy data from one buffer to another.\n\u003c/p\u003e",
        "fct-module": "Data.MutableIter.IOBuffer",
        "fct-package": "mutable-iter",
        "fct-signature": "IOBuffer r el -\u003e IO (IOBuffer r el)",
        "fct-source": "src/Data-MutableIter-IOBuffer.html#copyBuffer",
        "fct-type": "function",
        "title": "copyBuffer"
      },
      "index": {
        "description": "Copy data from one buffer to another",
        "hierarchy": "Data MutableIter IOBuffer",
        "module": "Data.MutableIter.IOBuffer",
        "name": "copyBuffer",
        "normalized": "IOBuffer a b-\u003eIO(IOBuffer a b)",
        "package": "mutable-iter",
        "partial": "Buffer",
        "signature": "IOBuffer r el-\u003eIO(IOBuffer r el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:createIOBuffer",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a buffer from a length and data array.\n\u003c/p\u003e",
        "fct-module": "Data.MutableIter.IOBuffer",
        "fct-package": "mutable-iter",
        "fct-signature": "Int -\u003e ForeignPtr Int -\u003e ForeignPtr el -\u003e IOBuffer r el",
        "fct-source": "src/Data-MutableIter-IOBuffer.html#createIOBuffer",
        "fct-type": "function",
        "title": "createIOBuffer"
      },
      "index": {
        "description": "Create buffer from length and data array",
        "hierarchy": "Data MutableIter IOBuffer",
        "module": "Data.MutableIter.IOBuffer",
        "name": "createIOBuffer",
        "normalized": "Int-\u003eForeignPtr Int-\u003eForeignPtr a-\u003eIOBuffer b a",
        "package": "mutable-iter",
        "partial": "IOBuffer",
        "signature": "Int-\u003eForeignPtr Int-\u003eForeignPtr el-\u003eIOBuffer r el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:decimate",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new buffer of every \u003ccode\u003enth\u003c/code\u003e element.  The original buffer is\n   not altered.\n\u003c/p\u003e",
        "fct-module": "Data.MutableIter.IOBuffer",
        "fct-package": "mutable-iter",
        "fct-signature": "Int -\u003e IOBuffer r b -\u003e IO (IOBuffer r b)",
        "fct-source": "src/Data-MutableIter-IOBuffer.html#decimate",
        "fct-type": "function",
        "title": "decimate"
      },
      "index": {
        "description": "Create new buffer of every nth element The original buffer is not altered",
        "hierarchy": "Data MutableIter IOBuffer",
        "module": "Data.MutableIter.IOBuffer",
        "name": "decimate",
        "normalized": "Int-\u003eIOBuffer a b-\u003eIO(IOBuffer a b)",
        "package": "mutable-iter",
        "partial": "",
        "signature": "Int-\u003eIOBuffer r b-\u003eIO(IOBuffer r b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:drop",
      "description": {
        "fct-descr": "\u003cp\u003eDrop n elements from the front of the buffer.\n if the buffer has fewer elements, all are dropped.\n\u003c/p\u003e",
        "fct-module": "Data.MutableIter.IOBuffer",
        "fct-package": "mutable-iter",
        "fct-signature": "Int -\u003e IOBuffer r el -\u003e IO ()",
        "fct-source": "src/Data-MutableIter-IOBuffer.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "Drop elements from the front of the buffer if the buffer has fewer elements all are dropped",
        "hierarchy": "Data MutableIter IOBuffer",
        "module": "Data.MutableIter.IOBuffer",
        "name": "drop",
        "normalized": "Int-\u003eIOBuffer a b-\u003eIO()",
        "package": "mutable-iter",
        "partial": "",
        "signature": "Int-\u003eIOBuffer r el-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:dropWhile",
      "description": {
        "fct-module": "Data.MutableIter.IOBuffer",
        "fct-package": "mutable-iter",
        "fct-signature": "(el -\u003e Bool) -\u003e IOBuffer r el -\u003e IO ()",
        "fct-source": "src/Data-MutableIter-IOBuffer.html#dropWhile",
        "fct-type": "function",
        "title": "dropWhile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter IOBuffer",
        "module": "Data.MutableIter.IOBuffer",
        "name": "dropWhile",
        "normalized": "(a-\u003eBool)-\u003eIOBuffer b a-\u003eIO()",
        "package": "mutable-iter",
        "partial": "While",
        "signature": "(el-\u003eBool)-\u003eIOBuffer r el-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eEmpty buffer.\n\u003c/p\u003e",
        "fct-module": "Data.MutableIter.IOBuffer",
        "fct-package": "mutable-iter",
        "fct-signature": "IOBuffer r el",
        "fct-source": "src/Data-MutableIter-IOBuffer.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Empty buffer",
        "hierarchy": "Data MutableIter IOBuffer",
        "module": "Data.MutableIter.IOBuffer",
        "name": "empty",
        "normalized": "",
        "package": "mutable-iter",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:foldl-39-",
      "description": {
        "fct-module": "Data.MutableIter.IOBuffer",
        "fct-package": "mutable-iter",
        "fct-signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e IOBuffer r b -\u003e IO a",
        "fct-source": "src/Data-MutableIter-IOBuffer.html#foldl%27",
        "fct-type": "function",
        "title": "foldl'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter IOBuffer",
        "module": "Data.MutableIter.IOBuffer",
        "name": "foldl'",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eIOBuffer c b-\u003eIO a",
        "package": "mutable-iter",
        "partial": "",
        "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eIOBuffer r b-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:freeze",
      "description": {
        "fct-descr": "\u003cp\u003eSafely convert an IOBuffer to a Vector.\n\u003c/p\u003e",
        "fct-module": "Data.MutableIter.IOBuffer",
        "fct-package": "mutable-iter",
        "fct-signature": "IOBuffer r el -\u003e IO (v el)",
        "fct-source": "src/Data-MutableIter-IOBuffer.html#freeze",
        "fct-type": "function",
        "title": "freeze"
      },
      "index": {
        "description": "Safely convert an IOBuffer to Vector",
        "hierarchy": "Data MutableIter IOBuffer",
        "module": "Data.MutableIter.IOBuffer",
        "name": "freeze",
        "normalized": "IOBuffer a b-\u003eIO(c b)",
        "package": "mutable-iter",
        "partial": "",
        "signature": "IOBuffer r el-\u003eIO(v el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:hPut",
      "description": {
        "fct-descr": "\u003cp\u003eWrite out the contents of the IOBuffer to a handle.  This operation\n drains the buffer.\n\u003c/p\u003e",
        "fct-module": "Data.MutableIter.IOBuffer",
        "fct-package": "mutable-iter",
        "fct-signature": "Handle -\u003e IOBuffer r el -\u003e IO ()",
        "fct-source": "src/Data-MutableIter-IOBuffer.html#hPut",
        "fct-type": "function",
        "title": "hPut"
      },
      "index": {
        "description": "Write out the contents of the IOBuffer to handle This operation drains the buffer",
        "hierarchy": "Data MutableIter IOBuffer",
        "module": "Data.MutableIter.IOBuffer",
        "name": "hPut",
        "normalized": "Handle-\u003eIOBuffer a b-\u003eIO()",
        "package": "mutable-iter",
        "partial": "Put",
        "signature": "Handle-\u003eIOBuffer r el-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:hopfoldM",
      "description": {
        "fct-module": "Data.MutableIter.IOBuffer",
        "fct-package": "mutable-iter",
        "fct-signature": "Int -\u003e (a -\u003e b -\u003e IO a) -\u003e a -\u003e IOBuffer r b -\u003e IO a",
        "fct-source": "src/Data-MutableIter-IOBuffer.html#hopfoldM",
        "fct-type": "function",
        "title": "hopfoldM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter IOBuffer",
        "module": "Data.MutableIter.IOBuffer",
        "name": "hopfoldM",
        "normalized": "Int-\u003e(a-\u003eb-\u003eIO a)-\u003ea-\u003eIOBuffer c b-\u003eIO a",
        "package": "mutable-iter",
        "partial": "",
        "signature": "Int-\u003e(a-\u003eb-\u003eIO a)-\u003ea-\u003eIOBuffer r b-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:hopfoldl-39-",
      "description": {
        "fct-module": "Data.MutableIter.IOBuffer",
        "fct-package": "mutable-iter",
        "fct-signature": "Int -\u003e (a -\u003e b -\u003e a) -\u003e a -\u003e IOBuffer r b -\u003e IO a",
        "fct-source": "src/Data-MutableIter-IOBuffer.html#hopfoldl%27",
        "fct-type": "function",
        "title": "hopfoldl'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter IOBuffer",
        "module": "Data.MutableIter.IOBuffer",
        "name": "hopfoldl'",
        "normalized": "Int-\u003e(a-\u003eb-\u003ea)-\u003ea-\u003eIOBuffer c b-\u003eIO a",
        "package": "mutable-iter",
        "partial": "",
        "signature": "Int-\u003e(a-\u003eb-\u003ea)-\u003ea-\u003eIOBuffer r b-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003eIOBuffer length.\n\u003c/p\u003e",
        "fct-module": "Data.MutableIter.IOBuffer",
        "fct-package": "mutable-iter",
        "fct-signature": "IOBuffer r el -\u003e IO Int",
        "fct-source": "src/Data-MutableIter-IOBuffer.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "IOBuffer length",
        "hierarchy": "Data MutableIter IOBuffer",
        "module": "Data.MutableIter.IOBuffer",
        "name": "length",
        "normalized": "IOBuffer a b-\u003eIO Int",
        "package": "mutable-iter",
        "partial": "",
        "signature": "IOBuffer r el-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:lookAtHead",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the first element, if it exists.\n This function does not advance the buffer pointer.\n\u003c/p\u003e",
        "fct-module": "Data.MutableIter.IOBuffer",
        "fct-package": "mutable-iter",
        "fct-signature": "IOBuffer r el -\u003e IO (Maybe el)",
        "fct-source": "src/Data-MutableIter-IOBuffer.html#lookAtHead",
        "fct-type": "function",
        "title": "lookAtHead"
      },
      "index": {
        "description": "Retrieve the first element if it exists This function does not advance the buffer pointer",
        "hierarchy": "Data MutableIter IOBuffer",
        "module": "Data.MutableIter.IOBuffer",
        "name": "lookAtHead",
        "normalized": "IOBuffer a b-\u003eIO(Maybe b)",
        "package": "mutable-iter",
        "partial": "At Head",
        "signature": "IOBuffer r el-\u003eIO(Maybe el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:mapAccumBuffer",
      "description": {
        "fct-module": "Data.MutableIter.IOBuffer",
        "fct-package": "mutable-iter",
        "fct-signature": "(acc -\u003e el -\u003e (acc, el')) -\u003e ForeignPtr Int -\u003e ForeignPtr el' -\u003e acc -\u003e IOBuffer r el -\u003e IO (acc, IOBuffer r el')",
        "fct-source": "src/Data-MutableIter-IOBuffer.html#mapAccumBuffer",
        "fct-type": "function",
        "title": "mapAccumBuffer"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter IOBuffer",
        "module": "Data.MutableIter.IOBuffer",
        "name": "mapAccumBuffer",
        "normalized": "(a-\u003eb-\u003e(a,c))-\u003eForeignPtr Int-\u003eForeignPtr c-\u003ea-\u003eIOBuffer d b-\u003eIO(a,IOBuffer d c)",
        "package": "mutable-iter",
        "partial": "Accum Buffer",
        "signature": "(acc-\u003eel-\u003e(acc,el'))-\u003eForeignPtr Int-\u003eForeignPtr el'-\u003eacc-\u003eIOBuffer r el-\u003eIO(acc,IOBuffer r el')"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:mapBuffer",
      "description": {
        "fct-descr": "\u003cp\u003ecopy data from one buffer to another with the specified map function.\n this operation drains the original buffer.\n\u003c/p\u003e",
        "fct-module": "Data.MutableIter.IOBuffer",
        "fct-package": "mutable-iter",
        "fct-signature": "(el -\u003e el') -\u003e ForeignPtr Int -\u003e ForeignPtr el' -\u003e IOBuffer r el -\u003e IO (IOBuffer r el')",
        "fct-source": "src/Data-MutableIter-IOBuffer.html#mapBuffer",
        "fct-type": "function",
        "title": "mapBuffer"
      },
      "index": {
        "description": "copy data from one buffer to another with the specified map function this operation drains the original buffer",
        "hierarchy": "Data MutableIter IOBuffer",
        "module": "Data.MutableIter.IOBuffer",
        "name": "mapBuffer",
        "normalized": "(a-\u003eb)-\u003eForeignPtr Int-\u003eForeignPtr b-\u003eIOBuffer c a-\u003eIO(IOBuffer c b)",
        "package": "mutable-iter",
        "partial": "Buffer",
        "signature": "(el-\u003eel')-\u003eForeignPtr Int-\u003eForeignPtr el'-\u003eIOBuffer r el-\u003eIO(IOBuffer r el')"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if the buffer is empty.\n\u003c/p\u003e",
        "fct-module": "Data.MutableIter.IOBuffer",
        "fct-package": "mutable-iter",
        "fct-signature": "IOBuffer r el -\u003e IO Bool",
        "fct-source": "src/Data-MutableIter-IOBuffer.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Check if the buffer is empty",
        "hierarchy": "Data MutableIter IOBuffer",
        "module": "Data.MutableIter.IOBuffer",
        "name": "null",
        "normalized": "IOBuffer a b-\u003eIO Bool",
        "package": "mutable-iter",
        "partial": "",
        "signature": "IOBuffer r el-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:pop",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the front element from the buffer and advance the internal pointer.\n It is an error to call this on an empty buffer.\n\u003c/p\u003e",
        "fct-module": "Data.MutableIter.IOBuffer",
        "fct-package": "mutable-iter",
        "fct-signature": "IOBuffer r el -\u003e IO el",
        "fct-source": "src/Data-MutableIter-IOBuffer.html#pop",
        "fct-type": "function",
        "title": "pop"
      },
      "index": {
        "description": "Retrieve the front element from the buffer and advance the internal pointer It is an error to call this on an empty buffer",
        "hierarchy": "Data MutableIter IOBuffer",
        "module": "Data.MutableIter.IOBuffer",
        "name": "pop",
        "normalized": "IOBuffer a b-\u003eIO b",
        "package": "mutable-iter",
        "partial": "",
        "signature": "IOBuffer r el-\u003eIO el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:splitAt",
      "description": {
        "fct-descr": "\u003cp\u003eSplit one buffer to two, sharing storage.\n\u003c/p\u003e",
        "fct-module": "Data.MutableIter.IOBuffer",
        "fct-package": "mutable-iter",
        "fct-signature": "IOBuffer r el -\u003e Int -\u003e IO (IOBuffer r el, IOBuffer r el)",
        "fct-source": "src/Data-MutableIter-IOBuffer.html#splitAt",
        "fct-type": "function",
        "title": "splitAt"
      },
      "index": {
        "description": "Split one buffer to two sharing storage",
        "hierarchy": "Data MutableIter IOBuffer",
        "module": "Data.MutableIter.IOBuffer",
        "name": "splitAt",
        "normalized": "IOBuffer a b-\u003eInt-\u003eIO(IOBuffer a b,IOBuffer a b)",
        "package": "mutable-iter",
        "partial": "At",
        "signature": "IOBuffer r el-\u003eInt-\u003eIO(IOBuffer r el,IOBuffer r el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:take",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new buffer from the first n elements, sharing data.\n This function advances the pointer of the original buffer.\n\u003c/p\u003e",
        "fct-module": "Data.MutableIter.IOBuffer",
        "fct-package": "mutable-iter",
        "fct-signature": "IOBuffer r el -\u003e Int -\u003e IO (IOBuffer r el)",
        "fct-source": "src/Data-MutableIter-IOBuffer.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "Create new buffer from the first elements sharing data This function advances the pointer of the original buffer",
        "hierarchy": "Data MutableIter IOBuffer",
        "module": "Data.MutableIter.IOBuffer",
        "name": "take",
        "normalized": "IOBuffer a b-\u003eInt-\u003eIO(IOBuffer a b)",
        "package": "mutable-iter",
        "partial": "",
        "signature": "IOBuffer r el-\u003eInt-\u003eIO(IOBuffer r el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:thaw",
      "description": {
        "fct-descr": "\u003cp\u003eSafely convert a Vector to an IOBuffer\n\u003c/p\u003e",
        "fct-module": "Data.MutableIter.IOBuffer",
        "fct-package": "mutable-iter",
        "fct-signature": "v el -\u003e IO (IOBuffer r el)",
        "fct-source": "src/Data-MutableIter-IOBuffer.html#thaw",
        "fct-type": "function",
        "title": "thaw"
      },
      "index": {
        "description": "Safely convert Vector to an IOBuffer",
        "hierarchy": "Data MutableIter IOBuffer",
        "module": "Data.MutableIter.IOBuffer",
        "name": "thaw",
        "normalized": "a b-\u003eIO(IOBuffer c b)",
        "package": "mutable-iter",
        "partial": "",
        "signature": "v el-\u003eIO(IOBuffer r el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:unsafeToForeignPtr",
      "description": {
        "fct-module": "Data.MutableIter.IOBuffer",
        "fct-package": "mutable-iter",
        "fct-signature": "IOBuffer r el -\u003e (Int, ForeignPtr Int, ForeignPtr el)",
        "fct-source": "src/Data-MutableIter-IOBuffer.html#unsafeToForeignPtr",
        "fct-type": "function",
        "title": "unsafeToForeignPtr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter IOBuffer",
        "module": "Data.MutableIter.IOBuffer",
        "name": "unsafeToForeignPtr",
        "normalized": "IOBuffer a b-\u003e(Int,ForeignPtr Int,ForeignPtr b)",
        "package": "mutable-iter",
        "partial": "To Foreign Ptr",
        "signature": "IOBuffer r el-\u003e(Int,ForeignPtr Int,ForeignPtr el)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#",
      "description": {
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "module",
        "fct-source": "src/Data-MutableIter.html",
        "fct-type": "module",
        "title": "MutableIter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "MutableIter",
        "normalized": "",
        "package": "mutable-iter",
        "partial": "Mutable Iter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#t:IOBuffer",
      "description": {
        "fct-descr": "\u003cp\u003eA mutable buffer to hold storable elements.  This data type supports\n memory recycling.\n\u003c/p\u003e",
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "data",
        "fct-source": "src/Data-MutableIter-IOBuffer.html#IOBuffer",
        "fct-type": "data",
        "title": "IOBuffer"
      },
      "index": {
        "description": "mutable buffer to hold storable elements This data type supports memory recycling",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "IOBuffer",
        "normalized": "",
        "package": "mutable-iter",
        "partial": "IOBuffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#t:MEnumeratee",
      "description": {
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "type",
        "fct-source": "src/Data-MutableIter.html#MEnumeratee",
        "fct-type": "type",
        "title": "MEnumeratee"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "MEnumeratee",
        "normalized": "",
        "package": "mutable-iter",
        "partial": "MEnumeratee",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#t:MEnumerator",
      "description": {
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "type",
        "fct-source": "src/Data-MutableIter.html#MEnumerator",
        "fct-type": "type",
        "title": "MEnumerator"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "MEnumerator",
        "normalized": "",
        "package": "mutable-iter",
        "partial": "MEnumerator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#t:MIteratee",
      "description": {
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "newtype",
        "fct-source": "src/Data-MutableIter.html#MIteratee",
        "fct-type": "newtype",
        "title": "MIteratee"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "MIteratee",
        "normalized": "",
        "package": "mutable-iter",
        "partial": "MIteratee",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:MIteratee",
      "description": {
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "MIteratee",
        "fct-source": "src/Data-MutableIter.html#MIteratee",
        "fct-type": "function",
        "title": "MIteratee"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "MIteratee",
        "normalized": "",
        "package": "mutable-iter",
        "partial": "MIteratee",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:chunk",
      "description": {
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "MIteratee (IOBuffer r el) m (IOBuffer r el)",
        "fct-source": "src/Data-MutableIter.html#chunk",
        "fct-type": "function",
        "title": "chunk"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "chunk",
        "normalized": "",
        "package": "mutable-iter",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:convStream",
      "description": {
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "MIteratee (IOBuffer r eli) pr (IOBuffer r elo) -\u003e MEnumeratee (IOBuffer r eli) (IOBuffer r elo) pr a",
        "fct-source": "src/Data-MutableIter.html#convStream",
        "fct-type": "function",
        "title": "convStream"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "convStream",
        "normalized": "MIteratee(IOBuffer a b)c(IOBuffer a d)-\u003eMEnumeratee(IOBuffer a b)(IOBuffer a d)c e",
        "package": "mutable-iter",
        "partial": "Stream",
        "signature": "MIteratee(IOBuffer r eli)pr(IOBuffer r elo)-\u003eMEnumeratee(IOBuffer r eli)(IOBuffer r elo)pr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:createIOBuffer",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a buffer from a length and data array.\n\u003c/p\u003e",
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "Int -\u003e ForeignPtr Int -\u003e ForeignPtr el -\u003e IOBuffer r el",
        "fct-source": "src/Data-MutableIter-IOBuffer.html#createIOBuffer",
        "fct-type": "function",
        "title": "createIOBuffer"
      },
      "index": {
        "description": "Create buffer from length and data array",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "createIOBuffer",
        "normalized": "Int-\u003eForeignPtr Int-\u003eForeignPtr a-\u003eIOBuffer b a",
        "package": "mutable-iter",
        "partial": "IOBuffer",
        "signature": "Int-\u003eForeignPtr Int-\u003eForeignPtr el-\u003eIOBuffer r el"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:drop",
      "description": {
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "Int -\u003e MIteratee (IOBuffer r el) m ()",
        "fct-source": "src/Data-MutableIter.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "drop",
        "normalized": "Int-\u003eMIteratee(IOBuffer a b)c()",
        "package": "mutable-iter",
        "partial": "",
        "signature": "Int-\u003eMIteratee(IOBuffer r el)m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:dropWhile",
      "description": {
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "(el -\u003e Bool) -\u003e MIteratee (IOBuffer r el) m ()",
        "fct-source": "src/Data-MutableIter.html#dropWhile",
        "fct-type": "function",
        "title": "dropWhile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "dropWhile",
        "normalized": "(a-\u003eBool)-\u003eMIteratee(IOBuffer b a)c()",
        "package": "mutable-iter",
        "partial": "While",
        "signature": "(el-\u003eBool)-\u003eMIteratee(IOBuffer r el)m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:enumHandleRandom",
      "description": {
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "Int-\u003e Handle-\u003e MIteratee (IOBuffer r el) m a-\u003e m (MIteratee (IOBuffer r el) m a)",
        "fct-type": "function",
        "title": "enumHandleRandom"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "enumHandleRandom",
        "normalized": "Int-\u003eHandle-\u003eMIteratee(IOBuffer a b)c d-\u003ec(MIteratee(IOBuffer a b)c d)",
        "package": "mutable-iter",
        "partial": "Handle Random",
        "signature": "Int-\u003eHandle-\u003eMIteratee(IOBuffer r el)m a-\u003em(MIteratee(IOBuffer r el)m a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:fileDriverRandom",
      "description": {
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "Int -\u003e (forall r.  MIteratee (IOBuffer r el) m a) -\u003e FilePath -\u003e m a",
        "fct-source": "src/Data-MutableIter.html#fileDriverRandom",
        "fct-type": "function",
        "title": "fileDriverRandom"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "fileDriverRandom",
        "normalized": "Int-\u003e(a b MIteratee(IOBuffer c d)e f)-\u003eFilePath-\u003ee f",
        "package": "mutable-iter",
        "partial": "Driver Random",
        "signature": "Int-\u003e(forall r. MIteratee(IOBuffer r el)m a)-\u003eFilePath-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:foldl-39-",
      "description": {
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "(a -\u003e el -\u003e a) -\u003e a -\u003e MIteratee (IOBuffer r el) m a",
        "fct-source": "src/Data-MutableIter.html#foldl%27",
        "fct-type": "function",
        "title": "foldl'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "foldl'",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eMIteratee(IOBuffer c b)d a",
        "package": "mutable-iter",
        "partial": "",
        "signature": "(a-\u003eel-\u003ea)-\u003ea-\u003eMIteratee(IOBuffer r el)m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:fromUVector",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a Vector iteratee to an MIteratee.  Slower but convenient.\n\u003c/p\u003e",
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "Iteratee (Vector el) m a -\u003e MIteratee (IOBuffer r el) m a",
        "fct-source": "src/Data-MutableIter.html#fromUVector",
        "fct-type": "function",
        "title": "fromUVector"
      },
      "index": {
        "description": "Convert Vector iteratee to an MIteratee Slower but convenient",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "fromUVector",
        "normalized": "Iteratee(Vector a)b c-\u003eMIteratee(IOBuffer d a)b c",
        "package": "mutable-iter",
        "partial": "UVector",
        "signature": "Iteratee(Vector el)m a-\u003eMIteratee(IOBuffer r el)m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:getChannel",
      "description": {
        "fct-descr": "\u003cp\u003eDecimate a stream by taking every n'th element, starting at element \u003ca\u003em\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "Int -\u003e Int -\u003e MEnumeratee (IOBuffer r el) (IOBuffer r el) m a",
        "fct-source": "src/Data-MutableIter.html#getChannel",
        "fct-type": "function",
        "title": "getChannel"
      },
      "index": {
        "description": "Decimate stream by taking every th element starting at element",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "getChannel",
        "normalized": "Int-\u003eInt-\u003eMEnumeratee(IOBuffer a b)(IOBuffer a b)c d",
        "package": "mutable-iter",
        "partial": "Channel",
        "signature": "Int-\u003eInt-\u003eMEnumeratee(IOBuffer r el)(IOBuffer r el)m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:guardNull",
      "description": {
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "IOBuffer r el -\u003e MIteratee (IOBuffer r el) m a -\u003e MIteratee (IOBuffer r el) m a -\u003e MIteratee (IOBuffer r el) m a",
        "fct-source": "src/Data-MutableIter.html#guardNull",
        "fct-type": "function",
        "title": "guardNull"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "guardNull",
        "normalized": "IOBuffer a b-\u003eMIteratee(IOBuffer a b)c d-\u003eMIteratee(IOBuffer a b)c d-\u003eMIteratee(IOBuffer a b)c d",
        "package": "mutable-iter",
        "partial": "Null",
        "signature": "IOBuffer r el-\u003eMIteratee(IOBuffer r el)m a-\u003eMIteratee(IOBuffer r el)m a-\u003eMIteratee(IOBuffer r el)m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:head",
      "description": {
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "MIteratee (IOBuffer r el) m el",
        "fct-source": "src/Data-MutableIter.html#head",
        "fct-type": "function",
        "title": "head"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "head",
        "normalized": "",
        "package": "mutable-iter",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:heads",
      "description": {
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "[el] -\u003e MIteratee (IOBuffer r el) m Int",
        "fct-source": "src/Data-MutableIter.html#heads",
        "fct-type": "function",
        "title": "heads"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "heads",
        "normalized": "[a]-\u003eMIteratee(IOBuffer b a)c Int",
        "package": "mutable-iter",
        "partial": "",
        "signature": "[el]-\u003eMIteratee(IOBuffer r el)m Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:hopfoldl-39-",
      "description": {
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "Int -\u003e (a -\u003e el -\u003e a) -\u003e a -\u003e MIteratee (IOBuffer r el) m a",
        "fct-source": "src/Data-MutableIter.html#hopfoldl%27",
        "fct-type": "function",
        "title": "hopfoldl'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "hopfoldl'",
        "normalized": "Int-\u003e(a-\u003eb-\u003ea)-\u003ea-\u003eMIteratee(IOBuffer c b)d a",
        "package": "mutable-iter",
        "partial": "",
        "signature": "Int-\u003e(a-\u003eel-\u003ea)-\u003ea-\u003eMIteratee(IOBuffer r el)m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:icont",
      "description": {
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "(Stream s -\u003e MIteratee s m a) -\u003e Maybe SomeException -\u003e MIteratee s m a",
        "fct-source": "src/Data-MutableIter.html#icont",
        "fct-type": "function",
        "title": "icont"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "icont",
        "normalized": "(Stream a-\u003eMIteratee a b c)-\u003eMaybe SomeException-\u003eMIteratee a b c",
        "package": "mutable-iter",
        "partial": "",
        "signature": "(Stream s-\u003eMIteratee s m a)-\u003eMaybe SomeException-\u003eMIteratee s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:idone",
      "description": {
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "a -\u003e Stream s -\u003e MIteratee s m a",
        "fct-source": "src/Data-MutableIter.html#idone",
        "fct-type": "function",
        "title": "idone"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "idone",
        "normalized": "a-\u003eStream b-\u003eMIteratee b c a",
        "package": "mutable-iter",
        "partial": "",
        "signature": "a-\u003eStream s-\u003eMIteratee s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:isStreamFinished",
      "description": {
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "MIteratee (IOBuffer r el) m (Maybe SomeException)",
        "fct-source": "src/Data-MutableIter.html#isStreamFinished",
        "fct-type": "function",
        "title": "isStreamFinished"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "isStreamFinished",
        "normalized": "",
        "package": "mutable-iter",
        "partial": "Stream Finished",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:joinIM",
      "description": {
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "m (MIteratee (IOBuffer r el) m a) -\u003e MIteratee (IOBuffer r el) m a",
        "fct-source": "src/Data-MutableIter.html#joinIM",
        "fct-type": "function",
        "title": "joinIM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "joinIM",
        "normalized": "a(MIteratee(IOBuffer b c)a d)-\u003eMIteratee(IOBuffer b c)a d",
        "package": "mutable-iter",
        "partial": "IM",
        "signature": "m(MIteratee(IOBuffer r el)m a)-\u003eMIteratee(IOBuffer r el)m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:joinIob",
      "description": {
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "MIteratee (IOBuffer r el) m (MIteratee s m a) -\u003e MIteratee (IOBuffer r el) m a",
        "fct-source": "src/Data-MutableIter.html#joinIob",
        "fct-type": "function",
        "title": "joinIob"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "joinIob",
        "normalized": "MIteratee(IOBuffer a b)c(MIteratee d c e)-\u003eMIteratee(IOBuffer a b)c e",
        "package": "mutable-iter",
        "partial": "Iob",
        "signature": "MIteratee(IOBuffer r el)m(MIteratee s m a)-\u003eMIteratee(IOBuffer r el)m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:liftI",
      "description": {
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "(Stream s -\u003e MIteratee s m a) -\u003e MIteratee s m a",
        "fct-source": "src/Data-MutableIter.html#liftI",
        "fct-type": "function",
        "title": "liftI"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "liftI",
        "normalized": "(Stream a-\u003eMIteratee a b c)-\u003eMIteratee a b c",
        "package": "mutable-iter",
        "partial": "",
        "signature": "(Stream s-\u003eMIteratee s m a)-\u003eMIteratee s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:mapAccum",
      "description": {
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "Int -\u003e (b -\u003e eli -\u003e (b, elo)) -\u003e b -\u003e MEnumeratee (IOBuffer r eli) (IOBuffer r elo) pr a",
        "fct-source": "src/Data-MutableIter.html#mapAccum",
        "fct-type": "function",
        "title": "mapAccum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "mapAccum",
        "normalized": "Int-\u003e(a-\u003eb-\u003e(a,c))-\u003ea-\u003eMEnumeratee(IOBuffer d b)(IOBuffer d c)e f",
        "package": "mutable-iter",
        "partial": "Accum",
        "signature": "Int-\u003e(b-\u003eeli-\u003e(b,elo))-\u003eb-\u003eMEnumeratee(IOBuffer r eli)(IOBuffer r elo)pr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:mapChunk",
      "description": {
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "(IOBuffer r el -\u003e m s2) -\u003e MEnumeratee (IOBuffer r el) s2 m a",
        "fct-source": "src/Data-MutableIter.html#mapChunk",
        "fct-type": "function",
        "title": "mapChunk"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "mapChunk",
        "normalized": "(IOBuffer a b-\u003ec d)-\u003eMEnumeratee(IOBuffer a b)d c e",
        "package": "mutable-iter",
        "partial": "Chunk",
        "signature": "(IOBuffer r el-\u003em s)-\u003eMEnumeratee(IOBuffer r el)s m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:mapStream",
      "description": {
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "Int -\u003e (eli -\u003e elo) -\u003e MEnumeratee (IOBuffer r eli) (IOBuffer r elo) pr a",
        "fct-source": "src/Data-MutableIter.html#mapStream",
        "fct-type": "function",
        "title": "mapStream"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "mapStream",
        "normalized": "Int-\u003e(a-\u003eb)-\u003eMEnumeratee(IOBuffer c a)(IOBuffer c b)d e",
        "package": "mutable-iter",
        "partial": "Stream",
        "signature": "Int-\u003e(eli-\u003eelo)-\u003eMEnumeratee(IOBuffer r eli)(IOBuffer r elo)pr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:newFp",
      "description": {
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "a -\u003e IO (ForeignPtr a)",
        "fct-source": "src/Data-MutableIter.html#newFp",
        "fct-type": "function",
        "title": "newFp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "newFp",
        "normalized": "a-\u003eIO(ForeignPtr a)",
        "package": "mutable-iter",
        "partial": "Fp",
        "signature": "a-\u003eIO(ForeignPtr a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:peek",
      "description": {
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "MIteratee (IOBuffer r el) m (Maybe el)",
        "fct-source": "src/Data-MutableIter.html#peek",
        "fct-type": "function",
        "title": "peek"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "peek",
        "normalized": "",
        "package": "mutable-iter",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:takeUpTo",
      "description": {
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "Int -\u003e MEnumeratee (IOBuffer r el) (IOBuffer r el) pr a",
        "fct-source": "src/Data-MutableIter.html#takeUpTo",
        "fct-type": "function",
        "title": "takeUpTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "takeUpTo",
        "normalized": "Int-\u003eMEnumeratee(IOBuffer a b)(IOBuffer a b)c d",
        "package": "mutable-iter",
        "partial": "Up To",
        "signature": "Int-\u003eMEnumeratee(IOBuffer r el)(IOBuffer r el)pr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:unfoldConvStream",
      "description": {
        "fct-descr": "\u003cp\u003eThe most general stream converter.  Given a function to produce iteratee\n transformers and an initial state, convert the stream using iteratees\n generated by the function while continually updating the internal state.\n\u003c/p\u003e",
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "(acc -\u003e MIteratee (IOBuffer r eli) m (acc, IOBuffer r elo)) -\u003e acc -\u003e MEnumeratee (IOBuffer r eli) (IOBuffer r elo) m a",
        "fct-source": "src/Data-MutableIter.html#unfoldConvStream",
        "fct-type": "function",
        "title": "unfoldConvStream"
      },
      "index": {
        "description": "The most general stream converter Given function to produce iteratee transformers and an initial state convert the stream using iteratees generated by the function while continually updating the internal state",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "unfoldConvStream",
        "normalized": "(a-\u003eMIteratee(IOBuffer b c)d(a,IOBuffer b e))-\u003ea-\u003eMEnumeratee(IOBuffer b c)(IOBuffer b e)d f",
        "package": "mutable-iter",
        "partial": "Conv Stream",
        "signature": "(acc-\u003eMIteratee(IOBuffer r eli)m(acc,IOBuffer r elo))-\u003eacc-\u003eMEnumeratee(IOBuffer r eli)(IOBuffer r elo)m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:unwrap",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "Iteratee s m a",
        "fct-source": "src/Data-MutableIter.html#MIteratee",
        "fct-type": "function",
        "title": "unwrap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "unwrap",
        "normalized": "",
        "package": "mutable-iter",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:wrapEnum",
      "description": {
        "fct-module": "Data.MutableIter",
        "fct-package": "mutable-iter",
        "fct-signature": "Enumerator s m a -\u003e MEnumerator s m a",
        "fct-source": "src/Data-MutableIter.html#wrapEnum",
        "fct-type": "function",
        "title": "wrapEnum"
      },
      "index": {
        "description": "",
        "hierarchy": "Data MutableIter",
        "module": "Data.MutableIter",
        "name": "wrapEnum",
        "normalized": "Enumerator a b c-\u003eMEnumerator a b c",
        "package": "mutable-iter",
        "partial": "Enum",
        "signature": "Enumerator s m a-\u003eMEnumerator s m a"
      }
    }
  }
]