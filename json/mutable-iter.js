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
        "word": "mutable-iter"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIteratees for parsing binary data.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.MutableIter.Binary",
          "name": "Binary",
          "package": "mutable-iter",
          "source": "src/Data-MutableIter-Binary.html",
          "type": "module"
        },
        "index": {
          "description": "Iteratees for parsing binary data",
          "hierarchy": "Data MutableIter Binary",
          "module": "Data.MutableIter.Binary",
          "name": "Binary",
          "package": "mutable-iter",
          "partial": "Binary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-Binary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicate endian-ness.\n\u003c/p\u003e",
          "module": "Data.MutableIter.Binary",
          "name": "Endian",
          "package": "mutable-iter",
          "type": "data"
        },
        "index": {
          "description": "Indicate endian-ness",
          "hierarchy": "Data MutableIter Binary",
          "module": "Data.MutableIter.Binary",
          "name": "Endian",
          "package": "mutable-iter",
          "partial": "Endian",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-Binary.html#t:Endian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeast Significan Byte is first (little-endian)\n\u003c/p\u003e",
          "module": "Data.MutableIter.Binary",
          "name": "LSB",
          "package": "mutable-iter",
          "signature": "LSB",
          "type": "function"
        },
        "index": {
          "description": "Least Significan Byte is first little-endian",
          "hierarchy": "Data MutableIter Binary",
          "module": "Data.MutableIter.Binary",
          "name": "LSB",
          "package": "mutable-iter",
          "partial": "LSB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-Binary.html#v:LSB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMost Significant Byte is first (big-endian)\n\u003c/p\u003e",
          "module": "Data.MutableIter.Binary",
          "name": "MSB",
          "package": "mutable-iter",
          "signature": "MSB",
          "type": "function"
        },
        "index": {
          "description": "Most Significant Byte is first big-endian",
          "hierarchy": "Data MutableIter Binary",
          "module": "Data.MutableIter.Binary",
          "name": "MSB",
          "package": "mutable-iter",
          "partial": "MSB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-Binary.html#v:MSB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter.Binary",
          "name": "endianRead2",
          "package": "mutable-iter",
          "signature": "Endian -\u003e MIteratee (IOBuffer r Word8) m Word16",
          "source": "src/Data-MutableIter-Binary.html#endianRead2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter Binary",
          "module": "Data.MutableIter.Binary",
          "name": "endianRead2",
          "normalized": "Endian-\u003eMIteratee(IOBuffer a Word)b Word",
          "package": "mutable-iter",
          "partial": "Read",
          "signature": "Endian-\u003eMIteratee(IOBuffer r Word)m Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-Binary.html#v:endianRead2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread 3 bytes in an endian manner.  If the first bit is set (negative),\n set the entire first byte so the Word32 can be properly set negative as\n well.\n\u003c/p\u003e",
          "module": "Data.MutableIter.Binary",
          "name": "endianRead3",
          "package": "mutable-iter",
          "signature": "Endian -\u003e MIteratee (IOBuffer r Word8) m Word32",
          "source": "src/Data-MutableIter-Binary.html#endianRead3",
          "type": "function"
        },
        "index": {
          "description": "read bytes in an endian manner If the first bit is set negative set the entire first byte so the Word32 can be properly set negative as well",
          "hierarchy": "Data MutableIter Binary",
          "module": "Data.MutableIter.Binary",
          "name": "endianRead3",
          "normalized": "Endian-\u003eMIteratee(IOBuffer a Word)b Word",
          "package": "mutable-iter",
          "partial": "Read",
          "signature": "Endian-\u003eMIteratee(IOBuffer r Word)m Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-Binary.html#v:endianRead3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter.Binary",
          "name": "endianRead4",
          "package": "mutable-iter",
          "signature": "Endian -\u003e MIteratee (IOBuffer r Word8) m Word32",
          "source": "src/Data-MutableIter-Binary.html#endianRead4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter Binary",
          "module": "Data.MutableIter.Binary",
          "name": "endianRead4",
          "normalized": "Endian-\u003eMIteratee(IOBuffer a Word)b Word",
          "package": "mutable-iter",
          "partial": "Read",
          "signature": "Endian-\u003eMIteratee(IOBuffer r Word)m Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-Binary.html#v:endianRead4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter.IOBuffer",
          "name": "IOBuffer",
          "package": "mutable-iter",
          "source": "src/Data-MutableIter-IOBuffer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data MutableIter IOBuffer",
          "module": "Data.MutableIter.IOBuffer",
          "name": "IOBuffer",
          "package": "mutable-iter",
          "partial": "IOBuffer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mutable buffer to hold storable elements.  This data type supports\n memory recycling.\n\u003c/p\u003e",
          "module": "Data.MutableIter.IOBuffer",
          "name": "IOBuffer",
          "package": "mutable-iter",
          "source": "src/Data-MutableIter-IOBuffer.html#IOBuffer",
          "type": "data"
        },
        "index": {
          "description": "mutable buffer to hold storable elements This data type supports memory recycling",
          "hierarchy": "Data MutableIter IOBuffer",
          "module": "Data.MutableIter.IOBuffer",
          "name": "IOBuffer",
          "package": "mutable-iter",
          "partial": "IOBuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#t:IOBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend two buffers.  Copies data from both into a new buffer.\n\u003c/p\u003e",
          "module": "Data.MutableIter.IOBuffer",
          "name": "append",
          "package": "mutable-iter",
          "signature": "IOBuffer r el -\u003e IOBuffer r el -\u003e IO (IOBuffer r el)",
          "source": "src/Data-MutableIter-IOBuffer.html#append",
          "type": "function"
        },
        "index": {
          "description": "Append two buffers Copies data from both into new buffer",
          "hierarchy": "Data MutableIter IOBuffer",
          "module": "Data.MutableIter.IOBuffer",
          "name": "append",
          "normalized": "IOBuffer a b-\u003eIOBuffer a b-\u003eIO(IOBuffer a b)",
          "package": "mutable-iter",
          "signature": "IOBuffer r el-\u003eIOBuffer r el-\u003eIO(IOBuffer r el)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast a buffer to a different type.  Any extra data is truncated.\n This is not safe unless the buffer offset is 0.\n\u003c/p\u003e",
          "module": "Data.MutableIter.IOBuffer",
          "name": "castBuffer",
          "package": "mutable-iter",
          "signature": "IOBuffer r el -\u003e IO (IOBuffer r el')",
          "source": "src/Data-MutableIter-IOBuffer.html#castBuffer",
          "type": "function"
        },
        "index": {
          "description": "Cast buffer to different type Any extra data is truncated This is not safe unless the buffer offset is",
          "hierarchy": "Data MutableIter IOBuffer",
          "module": "Data.MutableIter.IOBuffer",
          "name": "castBuffer",
          "normalized": "IOBuffer a b-\u003eIO(IOBuffer a c)",
          "package": "mutable-iter",
          "partial": "Buffer",
          "signature": "IOBuffer r el-\u003eIO(IOBuffer r el')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:castBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy data from one buffer to another.\n\u003c/p\u003e",
          "module": "Data.MutableIter.IOBuffer",
          "name": "copyBuffer",
          "package": "mutable-iter",
          "signature": "IOBuffer r el -\u003e IO (IOBuffer r el)",
          "source": "src/Data-MutableIter-IOBuffer.html#copyBuffer",
          "type": "function"
        },
        "index": {
          "description": "Copy data from one buffer to another",
          "hierarchy": "Data MutableIter IOBuffer",
          "module": "Data.MutableIter.IOBuffer",
          "name": "copyBuffer",
          "normalized": "IOBuffer a b-\u003eIO(IOBuffer a b)",
          "package": "mutable-iter",
          "partial": "Buffer",
          "signature": "IOBuffer r el-\u003eIO(IOBuffer r el)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:copyBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a buffer from a length and data array.\n\u003c/p\u003e",
          "module": "[\"Data.MutableIter.IOBuffer\",\"Data.MutableIter\"]",
          "name": "createIOBuffer",
          "package": "mutable-iter",
          "signature": "Int -\u003e ForeignPtr Int -\u003e ForeignPtr el -\u003e IOBuffer r el",
          "source": "src/Data-MutableIter-IOBuffer.html#createIOBuffer",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:createIOBuffer\",\"http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:createIOBuffer\"]"
        },
        "index": {
          "description": "Create buffer from length and data array",
          "hierarchy": "Data MutableIter IOBuffer",
          "module": "Data.MutableIter.IOBuffer",
          "name": "createIOBuffer",
          "normalized": "Int-\u003eForeignPtr Int-\u003eForeignPtr a-\u003eIOBuffer b a",
          "package": "mutable-iter",
          "partial": "IOBuffer",
          "signature": "Int-\u003eForeignPtr Int-\u003eForeignPtr el-\u003eIOBuffer r el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:createIOBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new buffer of every \u003ccode\u003enth\u003c/code\u003e element.  The original buffer is\n   not altered.\n\u003c/p\u003e",
          "module": "Data.MutableIter.IOBuffer",
          "name": "decimate",
          "package": "mutable-iter",
          "signature": "Int -\u003e IOBuffer r b -\u003e IO (IOBuffer r b)",
          "source": "src/Data-MutableIter-IOBuffer.html#decimate",
          "type": "function"
        },
        "index": {
          "description": "Create new buffer of every nth element The original buffer is not altered",
          "hierarchy": "Data MutableIter IOBuffer",
          "module": "Data.MutableIter.IOBuffer",
          "name": "decimate",
          "normalized": "Int-\u003eIOBuffer a b-\u003eIO(IOBuffer a b)",
          "package": "mutable-iter",
          "signature": "Int-\u003eIOBuffer r b-\u003eIO(IOBuffer r b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:decimate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop n elements from the front of the buffer.\n if the buffer has fewer elements, all are dropped.\n\u003c/p\u003e",
          "module": "Data.MutableIter.IOBuffer",
          "name": "drop",
          "package": "mutable-iter",
          "signature": "Int -\u003e IOBuffer r el -\u003e IO ()",
          "source": "src/Data-MutableIter-IOBuffer.html#drop",
          "type": "function"
        },
        "index": {
          "description": "Drop elements from the front of the buffer if the buffer has fewer elements all are dropped",
          "hierarchy": "Data MutableIter IOBuffer",
          "module": "Data.MutableIter.IOBuffer",
          "name": "drop",
          "normalized": "Int-\u003eIOBuffer a b-\u003eIO()",
          "package": "mutable-iter",
          "signature": "Int-\u003eIOBuffer r el-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter.IOBuffer",
          "name": "dropWhile",
          "package": "mutable-iter",
          "signature": "(el -\u003e Bool) -\u003e IOBuffer r el -\u003e IO ()",
          "source": "src/Data-MutableIter-IOBuffer.html#dropWhile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter IOBuffer",
          "module": "Data.MutableIter.IOBuffer",
          "name": "dropWhile",
          "normalized": "(a-\u003eBool)-\u003eIOBuffer b a-\u003eIO()",
          "package": "mutable-iter",
          "partial": "While",
          "signature": "(el-\u003eBool)-\u003eIOBuffer r el-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty buffer.\n\u003c/p\u003e",
          "module": "Data.MutableIter.IOBuffer",
          "name": "empty",
          "package": "mutable-iter",
          "signature": "IOBuffer r el",
          "source": "src/Data-MutableIter-IOBuffer.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Empty buffer",
          "hierarchy": "Data MutableIter IOBuffer",
          "module": "Data.MutableIter.IOBuffer",
          "name": "empty",
          "package": "mutable-iter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter.IOBuffer",
          "name": "foldl'",
          "package": "mutable-iter",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e IOBuffer r b -\u003e IO a",
          "source": "src/Data-MutableIter-IOBuffer.html#foldl%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter IOBuffer",
          "module": "Data.MutableIter.IOBuffer",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eIOBuffer c b-\u003eIO a",
          "package": "mutable-iter",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eIOBuffer r b-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely convert an IOBuffer to a Vector.\n\u003c/p\u003e",
          "module": "Data.MutableIter.IOBuffer",
          "name": "freeze",
          "package": "mutable-iter",
          "signature": "IOBuffer r el -\u003e IO (v el)",
          "source": "src/Data-MutableIter-IOBuffer.html#freeze",
          "type": "function"
        },
        "index": {
          "description": "Safely convert an IOBuffer to Vector",
          "hierarchy": "Data MutableIter IOBuffer",
          "module": "Data.MutableIter.IOBuffer",
          "name": "freeze",
          "normalized": "IOBuffer a b-\u003eIO(c b)",
          "package": "mutable-iter",
          "signature": "IOBuffer r el-\u003eIO(v el)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:freeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite out the contents of the IOBuffer to a handle.  This operation\n drains the buffer.\n\u003c/p\u003e",
          "module": "Data.MutableIter.IOBuffer",
          "name": "hPut",
          "package": "mutable-iter",
          "signature": "Handle -\u003e IOBuffer r el -\u003e IO ()",
          "source": "src/Data-MutableIter-IOBuffer.html#hPut",
          "type": "function"
        },
        "index": {
          "description": "Write out the contents of the IOBuffer to handle This operation drains the buffer",
          "hierarchy": "Data MutableIter IOBuffer",
          "module": "Data.MutableIter.IOBuffer",
          "name": "hPut",
          "normalized": "Handle-\u003eIOBuffer a b-\u003eIO()",
          "package": "mutable-iter",
          "partial": "Put",
          "signature": "Handle-\u003eIOBuffer r el-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:hPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter.IOBuffer",
          "name": "hopfoldM",
          "package": "mutable-iter",
          "signature": "Int -\u003e (a -\u003e b -\u003e IO a) -\u003e a -\u003e IOBuffer r b -\u003e IO a",
          "source": "src/Data-MutableIter-IOBuffer.html#hopfoldM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter IOBuffer",
          "module": "Data.MutableIter.IOBuffer",
          "name": "hopfoldM",
          "normalized": "Int-\u003e(a-\u003eb-\u003eIO a)-\u003ea-\u003eIOBuffer c b-\u003eIO a",
          "package": "mutable-iter",
          "signature": "Int-\u003e(a-\u003eb-\u003eIO a)-\u003ea-\u003eIOBuffer r b-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:hopfoldM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter.IOBuffer",
          "name": "hopfoldl'",
          "package": "mutable-iter",
          "signature": "Int -\u003e (a -\u003e b -\u003e a) -\u003e a -\u003e IOBuffer r b -\u003e IO a",
          "source": "src/Data-MutableIter-IOBuffer.html#hopfoldl%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter IOBuffer",
          "module": "Data.MutableIter.IOBuffer",
          "name": "hopfoldl'",
          "normalized": "Int-\u003e(a-\u003eb-\u003ea)-\u003ea-\u003eIOBuffer c b-\u003eIO a",
          "package": "mutable-iter",
          "signature": "Int-\u003e(a-\u003eb-\u003ea)-\u003ea-\u003eIOBuffer r b-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:hopfoldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIOBuffer length.\n\u003c/p\u003e",
          "module": "Data.MutableIter.IOBuffer",
          "name": "length",
          "package": "mutable-iter",
          "signature": "IOBuffer r el -\u003e IO Int",
          "source": "src/Data-MutableIter-IOBuffer.html#length",
          "type": "function"
        },
        "index": {
          "description": "IOBuffer length",
          "hierarchy": "Data MutableIter IOBuffer",
          "module": "Data.MutableIter.IOBuffer",
          "name": "length",
          "normalized": "IOBuffer a b-\u003eIO Int",
          "package": "mutable-iter",
          "signature": "IOBuffer r el-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the first element, if it exists.\n This function does not advance the buffer pointer.\n\u003c/p\u003e",
          "module": "Data.MutableIter.IOBuffer",
          "name": "lookAtHead",
          "package": "mutable-iter",
          "signature": "IOBuffer r el -\u003e IO (Maybe el)",
          "source": "src/Data-MutableIter-IOBuffer.html#lookAtHead",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the first element if it exists This function does not advance the buffer pointer",
          "hierarchy": "Data MutableIter IOBuffer",
          "module": "Data.MutableIter.IOBuffer",
          "name": "lookAtHead",
          "normalized": "IOBuffer a b-\u003eIO(Maybe b)",
          "package": "mutable-iter",
          "partial": "At Head",
          "signature": "IOBuffer r el-\u003eIO(Maybe el)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:lookAtHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter.IOBuffer",
          "name": "mapAccumBuffer",
          "package": "mutable-iter",
          "signature": "(acc -\u003e el -\u003e (acc, el')) -\u003e ForeignPtr Int -\u003e ForeignPtr el' -\u003e acc -\u003e IOBuffer r el -\u003e IO (acc, IOBuffer r el')",
          "source": "src/Data-MutableIter-IOBuffer.html#mapAccumBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter IOBuffer",
          "module": "Data.MutableIter.IOBuffer",
          "name": "mapAccumBuffer",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003eForeignPtr Int-\u003eForeignPtr c-\u003ea-\u003eIOBuffer d b-\u003eIO(a,IOBuffer d c)",
          "package": "mutable-iter",
          "partial": "Accum Buffer",
          "signature": "(acc-\u003eel-\u003e(acc,el'))-\u003eForeignPtr Int-\u003eForeignPtr el'-\u003eacc-\u003eIOBuffer r el-\u003eIO(acc,IOBuffer r el')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:mapAccumBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecopy data from one buffer to another with the specified map function.\n this operation drains the original buffer.\n\u003c/p\u003e",
          "module": "Data.MutableIter.IOBuffer",
          "name": "mapBuffer",
          "package": "mutable-iter",
          "signature": "(el -\u003e el') -\u003e ForeignPtr Int -\u003e ForeignPtr el' -\u003e IOBuffer r el -\u003e IO (IOBuffer r el')",
          "source": "src/Data-MutableIter-IOBuffer.html#mapBuffer",
          "type": "function"
        },
        "index": {
          "description": "copy data from one buffer to another with the specified map function this operation drains the original buffer",
          "hierarchy": "Data MutableIter IOBuffer",
          "module": "Data.MutableIter.IOBuffer",
          "name": "mapBuffer",
          "normalized": "(a-\u003eb)-\u003eForeignPtr Int-\u003eForeignPtr b-\u003eIOBuffer c a-\u003eIO(IOBuffer c b)",
          "package": "mutable-iter",
          "partial": "Buffer",
          "signature": "(el-\u003eel')-\u003eForeignPtr Int-\u003eForeignPtr el'-\u003eIOBuffer r el-\u003eIO(IOBuffer r el')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:mapBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the buffer is empty.\n\u003c/p\u003e",
          "module": "Data.MutableIter.IOBuffer",
          "name": "null",
          "package": "mutable-iter",
          "signature": "IOBuffer r el -\u003e IO Bool",
          "source": "src/Data-MutableIter-IOBuffer.html#null",
          "type": "function"
        },
        "index": {
          "description": "Check if the buffer is empty",
          "hierarchy": "Data MutableIter IOBuffer",
          "module": "Data.MutableIter.IOBuffer",
          "name": "null",
          "normalized": "IOBuffer a b-\u003eIO Bool",
          "package": "mutable-iter",
          "signature": "IOBuffer r el-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the front element from the buffer and advance the internal pointer.\n It is an error to call this on an empty buffer.\n\u003c/p\u003e",
          "module": "Data.MutableIter.IOBuffer",
          "name": "pop",
          "package": "mutable-iter",
          "signature": "IOBuffer r el -\u003e IO el",
          "source": "src/Data-MutableIter-IOBuffer.html#pop",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the front element from the buffer and advance the internal pointer It is an error to call this on an empty buffer",
          "hierarchy": "Data MutableIter IOBuffer",
          "module": "Data.MutableIter.IOBuffer",
          "name": "pop",
          "normalized": "IOBuffer a b-\u003eIO b",
          "package": "mutable-iter",
          "signature": "IOBuffer r el-\u003eIO el",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:pop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit one buffer to two, sharing storage.\n\u003c/p\u003e",
          "module": "Data.MutableIter.IOBuffer",
          "name": "splitAt",
          "package": "mutable-iter",
          "signature": "IOBuffer r el -\u003e Int -\u003e IO (IOBuffer r el, IOBuffer r el)",
          "source": "src/Data-MutableIter-IOBuffer.html#splitAt",
          "type": "function"
        },
        "index": {
          "description": "Split one buffer to two sharing storage",
          "hierarchy": "Data MutableIter IOBuffer",
          "module": "Data.MutableIter.IOBuffer",
          "name": "splitAt",
          "normalized": "IOBuffer a b-\u003eInt-\u003eIO(IOBuffer a b,IOBuffer a b)",
          "package": "mutable-iter",
          "partial": "At",
          "signature": "IOBuffer r el-\u003eInt-\u003eIO(IOBuffer r el,IOBuffer r el)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new buffer from the first n elements, sharing data.\n This function advances the pointer of the original buffer.\n\u003c/p\u003e",
          "module": "Data.MutableIter.IOBuffer",
          "name": "take",
          "package": "mutable-iter",
          "signature": "IOBuffer r el -\u003e Int -\u003e IO (IOBuffer r el)",
          "source": "src/Data-MutableIter-IOBuffer.html#take",
          "type": "function"
        },
        "index": {
          "description": "Create new buffer from the first elements sharing data This function advances the pointer of the original buffer",
          "hierarchy": "Data MutableIter IOBuffer",
          "module": "Data.MutableIter.IOBuffer",
          "name": "take",
          "normalized": "IOBuffer a b-\u003eInt-\u003eIO(IOBuffer a b)",
          "package": "mutable-iter",
          "signature": "IOBuffer r el-\u003eInt-\u003eIO(IOBuffer r el)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely convert a Vector to an IOBuffer\n\u003c/p\u003e",
          "module": "Data.MutableIter.IOBuffer",
          "name": "thaw",
          "package": "mutable-iter",
          "signature": "v el -\u003e IO (IOBuffer r el)",
          "source": "src/Data-MutableIter-IOBuffer.html#thaw",
          "type": "function"
        },
        "index": {
          "description": "Safely convert Vector to an IOBuffer",
          "hierarchy": "Data MutableIter IOBuffer",
          "module": "Data.MutableIter.IOBuffer",
          "name": "thaw",
          "normalized": "a b-\u003eIO(IOBuffer c b)",
          "package": "mutable-iter",
          "signature": "v el-\u003eIO(IOBuffer r el)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:thaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter.IOBuffer",
          "name": "unsafeToForeignPtr",
          "package": "mutable-iter",
          "signature": "IOBuffer r el -\u003e (Int, ForeignPtr Int, ForeignPtr el)",
          "source": "src/Data-MutableIter-IOBuffer.html#unsafeToForeignPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter IOBuffer",
          "module": "Data.MutableIter.IOBuffer",
          "name": "unsafeToForeignPtr",
          "normalized": "IOBuffer a b-\u003e(Int,ForeignPtr Int,ForeignPtr b)",
          "package": "mutable-iter",
          "partial": "To Foreign Ptr",
          "signature": "IOBuffer r el-\u003e(Int,ForeignPtr Int,ForeignPtr el)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter-IOBuffer.html#v:unsafeToForeignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter",
          "name": "MutableIter",
          "package": "mutable-iter",
          "source": "src/Data-MutableIter.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "MutableIter",
          "package": "mutable-iter",
          "partial": "Mutable Iter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mutable buffer to hold storable elements.  This data type supports\n memory recycling.\n\u003c/p\u003e",
          "module": "Data.MutableIter",
          "name": "IOBuffer",
          "package": "mutable-iter",
          "source": "src/Data-MutableIter-IOBuffer.html#IOBuffer",
          "type": "data"
        },
        "index": {
          "description": "mutable buffer to hold storable elements This data type supports memory recycling",
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "IOBuffer",
          "package": "mutable-iter",
          "partial": "IOBuffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#t:IOBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter",
          "name": "MEnumeratee",
          "package": "mutable-iter",
          "source": "src/Data-MutableIter.html#MEnumeratee",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "MEnumeratee",
          "package": "mutable-iter",
          "partial": "MEnumeratee",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#t:MEnumeratee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter",
          "name": "MEnumerator",
          "package": "mutable-iter",
          "source": "src/Data-MutableIter.html#MEnumerator",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "MEnumerator",
          "package": "mutable-iter",
          "partial": "MEnumerator",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#t:MEnumerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter",
          "name": "MIteratee",
          "package": "mutable-iter",
          "source": "src/Data-MutableIter.html#MIteratee",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "MIteratee",
          "package": "mutable-iter",
          "partial": "MIteratee",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#t:MIteratee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter",
          "name": "MIteratee",
          "package": "mutable-iter",
          "signature": "MIteratee",
          "source": "src/Data-MutableIter.html#MIteratee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "MIteratee",
          "package": "mutable-iter",
          "partial": "MIteratee",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:MIteratee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter",
          "name": "chunk",
          "package": "mutable-iter",
          "signature": "MIteratee (IOBuffer r el) m (IOBuffer r el)",
          "source": "src/Data-MutableIter.html#chunk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "chunk",
          "package": "mutable-iter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:chunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter",
          "name": "convStream",
          "package": "mutable-iter",
          "signature": "MIteratee (IOBuffer r eli) pr (IOBuffer r elo) -\u003e MEnumeratee (IOBuffer r eli) (IOBuffer r elo) pr a",
          "source": "src/Data-MutableIter.html#convStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "convStream",
          "normalized": "MIteratee(IOBuffer a b)c(IOBuffer a d)-\u003eMEnumeratee(IOBuffer a b)(IOBuffer a d)c e",
          "package": "mutable-iter",
          "partial": "Stream",
          "signature": "MIteratee(IOBuffer r eli)pr(IOBuffer r elo)-\u003eMEnumeratee(IOBuffer r eli)(IOBuffer r elo)pr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:convStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter",
          "name": "drop",
          "package": "mutable-iter",
          "signature": "Int -\u003e MIteratee (IOBuffer r el) m ()",
          "source": "src/Data-MutableIter.html#drop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "drop",
          "normalized": "Int-\u003eMIteratee(IOBuffer a b)c()",
          "package": "mutable-iter",
          "signature": "Int-\u003eMIteratee(IOBuffer r el)m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter",
          "name": "dropWhile",
          "package": "mutable-iter",
          "signature": "(el -\u003e Bool) -\u003e MIteratee (IOBuffer r el) m ()",
          "source": "src/Data-MutableIter.html#dropWhile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "dropWhile",
          "normalized": "(a-\u003eBool)-\u003eMIteratee(IOBuffer b a)c()",
          "package": "mutable-iter",
          "partial": "While",
          "signature": "(el-\u003eBool)-\u003eMIteratee(IOBuffer r el)m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter",
          "name": "enumHandleRandom",
          "package": "mutable-iter",
          "signature": "Int-\u003e Handle-\u003e MIteratee (IOBuffer r el) m a-\u003e m (MIteratee (IOBuffer r el) m a)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "enumHandleRandom",
          "normalized": "Int-\u003eHandle-\u003eMIteratee(IOBuffer a b)c d-\u003ec(MIteratee(IOBuffer a b)c d)",
          "package": "mutable-iter",
          "partial": "Handle Random",
          "signature": "Int-\u003eHandle-\u003eMIteratee(IOBuffer r el)m a-\u003em(MIteratee(IOBuffer r el)m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:enumHandleRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter",
          "name": "fileDriverRandom",
          "package": "mutable-iter",
          "signature": "Int -\u003e (forall r.  MIteratee (IOBuffer r el) m a) -\u003e FilePath -\u003e m a",
          "source": "src/Data-MutableIter.html#fileDriverRandom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "fileDriverRandom",
          "normalized": "Int-\u003e(a b MIteratee(IOBuffer c d)e f)-\u003eFilePath-\u003ee f",
          "package": "mutable-iter",
          "partial": "Driver Random",
          "signature": "Int-\u003e(forall r. MIteratee(IOBuffer r el)m a)-\u003eFilePath-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:fileDriverRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter",
          "name": "foldl'",
          "package": "mutable-iter",
          "signature": "(a -\u003e el -\u003e a) -\u003e a -\u003e MIteratee (IOBuffer r el) m a",
          "source": "src/Data-MutableIter.html#foldl%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eMIteratee(IOBuffer c b)d a",
          "package": "mutable-iter",
          "signature": "(a-\u003eel-\u003ea)-\u003ea-\u003eMIteratee(IOBuffer r el)m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Vector iteratee to an MIteratee.  Slower but convenient.\n\u003c/p\u003e",
          "module": "Data.MutableIter",
          "name": "fromUVector",
          "package": "mutable-iter",
          "signature": "Iteratee (Vector el) m a -\u003e MIteratee (IOBuffer r el) m a",
          "source": "src/Data-MutableIter.html#fromUVector",
          "type": "function"
        },
        "index": {
          "description": "Convert Vector iteratee to an MIteratee Slower but convenient",
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "fromUVector",
          "normalized": "Iteratee(Vector a)b c-\u003eMIteratee(IOBuffer d a)b c",
          "package": "mutable-iter",
          "partial": "UVector",
          "signature": "Iteratee(Vector el)m a-\u003eMIteratee(IOBuffer r el)m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:fromUVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecimate a stream by taking every n'th element, starting at element \u003ca\u003em\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.MutableIter",
          "name": "getChannel",
          "package": "mutable-iter",
          "signature": "Int -\u003e Int -\u003e MEnumeratee (IOBuffer r el) (IOBuffer r el) m a",
          "source": "src/Data-MutableIter.html#getChannel",
          "type": "function"
        },
        "index": {
          "description": "Decimate stream by taking every th element starting at element",
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "getChannel",
          "normalized": "Int-\u003eInt-\u003eMEnumeratee(IOBuffer a b)(IOBuffer a b)c d",
          "package": "mutable-iter",
          "partial": "Channel",
          "signature": "Int-\u003eInt-\u003eMEnumeratee(IOBuffer r el)(IOBuffer r el)m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:getChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter",
          "name": "guardNull",
          "package": "mutable-iter",
          "signature": "IOBuffer r el -\u003e MIteratee (IOBuffer r el) m a -\u003e MIteratee (IOBuffer r el) m a -\u003e MIteratee (IOBuffer r el) m a",
          "source": "src/Data-MutableIter.html#guardNull",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "guardNull",
          "normalized": "IOBuffer a b-\u003eMIteratee(IOBuffer a b)c d-\u003eMIteratee(IOBuffer a b)c d-\u003eMIteratee(IOBuffer a b)c d",
          "package": "mutable-iter",
          "partial": "Null",
          "signature": "IOBuffer r el-\u003eMIteratee(IOBuffer r el)m a-\u003eMIteratee(IOBuffer r el)m a-\u003eMIteratee(IOBuffer r el)m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:guardNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter",
          "name": "head",
          "package": "mutable-iter",
          "signature": "MIteratee (IOBuffer r el) m el",
          "source": "src/Data-MutableIter.html#head",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "head",
          "package": "mutable-iter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter",
          "name": "heads",
          "package": "mutable-iter",
          "signature": "[el] -\u003e MIteratee (IOBuffer r el) m Int",
          "source": "src/Data-MutableIter.html#heads",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "heads",
          "normalized": "[a]-\u003eMIteratee(IOBuffer b a)c Int",
          "package": "mutable-iter",
          "signature": "[el]-\u003eMIteratee(IOBuffer r el)m Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:heads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter",
          "name": "hopfoldl'",
          "package": "mutable-iter",
          "signature": "Int -\u003e (a -\u003e el -\u003e a) -\u003e a -\u003e MIteratee (IOBuffer r el) m a",
          "source": "src/Data-MutableIter.html#hopfoldl%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "hopfoldl'",
          "normalized": "Int-\u003e(a-\u003eb-\u003ea)-\u003ea-\u003eMIteratee(IOBuffer c b)d a",
          "package": "mutable-iter",
          "signature": "Int-\u003e(a-\u003eel-\u003ea)-\u003ea-\u003eMIteratee(IOBuffer r el)m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:hopfoldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter",
          "name": "icont",
          "package": "mutable-iter",
          "signature": "(Stream s -\u003e MIteratee s m a) -\u003e Maybe SomeException -\u003e MIteratee s m a",
          "source": "src/Data-MutableIter.html#icont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "icont",
          "normalized": "(Stream a-\u003eMIteratee a b c)-\u003eMaybe SomeException-\u003eMIteratee a b c",
          "package": "mutable-iter",
          "signature": "(Stream s-\u003eMIteratee s m a)-\u003eMaybe SomeException-\u003eMIteratee s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:icont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter",
          "name": "idone",
          "package": "mutable-iter",
          "signature": "a -\u003e Stream s -\u003e MIteratee s m a",
          "source": "src/Data-MutableIter.html#idone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "idone",
          "normalized": "a-\u003eStream b-\u003eMIteratee b c a",
          "package": "mutable-iter",
          "signature": "a-\u003eStream s-\u003eMIteratee s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:idone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter",
          "name": "isStreamFinished",
          "package": "mutable-iter",
          "signature": "MIteratee (IOBuffer r el) m (Maybe SomeException)",
          "source": "src/Data-MutableIter.html#isStreamFinished",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "isStreamFinished",
          "package": "mutable-iter",
          "partial": "Stream Finished",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:isStreamFinished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter",
          "name": "joinIM",
          "package": "mutable-iter",
          "signature": "m (MIteratee (IOBuffer r el) m a) -\u003e MIteratee (IOBuffer r el) m a",
          "source": "src/Data-MutableIter.html#joinIM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "joinIM",
          "normalized": "a(MIteratee(IOBuffer b c)a d)-\u003eMIteratee(IOBuffer b c)a d",
          "package": "mutable-iter",
          "partial": "IM",
          "signature": "m(MIteratee(IOBuffer r el)m a)-\u003eMIteratee(IOBuffer r el)m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:joinIM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter",
          "name": "joinIob",
          "package": "mutable-iter",
          "signature": "MIteratee (IOBuffer r el) m (MIteratee s m a) -\u003e MIteratee (IOBuffer r el) m a",
          "source": "src/Data-MutableIter.html#joinIob",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "joinIob",
          "normalized": "MIteratee(IOBuffer a b)c(MIteratee d c e)-\u003eMIteratee(IOBuffer a b)c e",
          "package": "mutable-iter",
          "partial": "Iob",
          "signature": "MIteratee(IOBuffer r el)m(MIteratee s m a)-\u003eMIteratee(IOBuffer r el)m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:joinIob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter",
          "name": "liftI",
          "package": "mutable-iter",
          "signature": "(Stream s -\u003e MIteratee s m a) -\u003e MIteratee s m a",
          "source": "src/Data-MutableIter.html#liftI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "liftI",
          "normalized": "(Stream a-\u003eMIteratee a b c)-\u003eMIteratee a b c",
          "package": "mutable-iter",
          "signature": "(Stream s-\u003eMIteratee s m a)-\u003eMIteratee s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:liftI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter",
          "name": "mapAccum",
          "package": "mutable-iter",
          "signature": "Int -\u003e (b -\u003e eli -\u003e (b, elo)) -\u003e b -\u003e MEnumeratee (IOBuffer r eli) (IOBuffer r elo) pr a",
          "source": "src/Data-MutableIter.html#mapAccum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "mapAccum",
          "normalized": "Int-\u003e(a-\u003eb-\u003e(a,c))-\u003ea-\u003eMEnumeratee(IOBuffer d b)(IOBuffer d c)e f",
          "package": "mutable-iter",
          "partial": "Accum",
          "signature": "Int-\u003e(b-\u003eeli-\u003e(b,elo))-\u003eb-\u003eMEnumeratee(IOBuffer r eli)(IOBuffer r elo)pr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:mapAccum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter",
          "name": "mapChunk",
          "package": "mutable-iter",
          "signature": "(IOBuffer r el -\u003e m s2) -\u003e MEnumeratee (IOBuffer r el) s2 m a",
          "source": "src/Data-MutableIter.html#mapChunk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "mapChunk",
          "normalized": "(IOBuffer a b-\u003ec d)-\u003eMEnumeratee(IOBuffer a b)d c e",
          "package": "mutable-iter",
          "partial": "Chunk",
          "signature": "(IOBuffer r el-\u003em s)-\u003eMEnumeratee(IOBuffer r el)s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:mapChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter",
          "name": "mapStream",
          "package": "mutable-iter",
          "signature": "Int -\u003e (eli -\u003e elo) -\u003e MEnumeratee (IOBuffer r eli) (IOBuffer r elo) pr a",
          "source": "src/Data-MutableIter.html#mapStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "mapStream",
          "normalized": "Int-\u003e(a-\u003eb)-\u003eMEnumeratee(IOBuffer c a)(IOBuffer c b)d e",
          "package": "mutable-iter",
          "partial": "Stream",
          "signature": "Int-\u003e(eli-\u003eelo)-\u003eMEnumeratee(IOBuffer r eli)(IOBuffer r elo)pr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:mapStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter",
          "name": "newFp",
          "package": "mutable-iter",
          "signature": "a -\u003e IO (ForeignPtr a)",
          "source": "src/Data-MutableIter.html#newFp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "newFp",
          "normalized": "a-\u003eIO(ForeignPtr a)",
          "package": "mutable-iter",
          "partial": "Fp",
          "signature": "a-\u003eIO(ForeignPtr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:newFp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter",
          "name": "peek",
          "package": "mutable-iter",
          "signature": "MIteratee (IOBuffer r el) m (Maybe el)",
          "source": "src/Data-MutableIter.html#peek",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "peek",
          "package": "mutable-iter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:peek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter",
          "name": "takeUpTo",
          "package": "mutable-iter",
          "signature": "Int -\u003e MEnumeratee (IOBuffer r el) (IOBuffer r el) pr a",
          "source": "src/Data-MutableIter.html#takeUpTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "takeUpTo",
          "normalized": "Int-\u003eMEnumeratee(IOBuffer a b)(IOBuffer a b)c d",
          "package": "mutable-iter",
          "partial": "Up To",
          "signature": "Int-\u003eMEnumeratee(IOBuffer r el)(IOBuffer r el)pr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:takeUpTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most general stream converter.  Given a function to produce iteratee\n transformers and an initial state, convert the stream using iteratees\n generated by the function while continually updating the internal state.\n\u003c/p\u003e",
          "module": "Data.MutableIter",
          "name": "unfoldConvStream",
          "package": "mutable-iter",
          "signature": "(acc -\u003e MIteratee (IOBuffer r eli) m (acc, IOBuffer r elo)) -\u003e acc -\u003e MEnumeratee (IOBuffer r eli) (IOBuffer r elo) m a",
          "source": "src/Data-MutableIter.html#unfoldConvStream",
          "type": "function"
        },
        "index": {
          "description": "The most general stream converter Given function to produce iteratee transformers and an initial state convert the stream using iteratees generated by the function while continually updating the internal state",
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "unfoldConvStream",
          "normalized": "(a-\u003eMIteratee(IOBuffer b c)d(a,IOBuffer b e))-\u003ea-\u003eMEnumeratee(IOBuffer b c)(IOBuffer b e)d f",
          "package": "mutable-iter",
          "partial": "Conv Stream",
          "signature": "(acc-\u003eMIteratee(IOBuffer r eli)m(acc,IOBuffer r elo))-\u003eacc-\u003eMEnumeratee(IOBuffer r eli)(IOBuffer r elo)m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:unfoldConvStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter",
          "name": "unwrap",
          "package": "mutable-iter",
          "signature": "Iteratee s m a",
          "source": "src/Data-MutableIter.html#MIteratee",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "unwrap",
          "package": "mutable-iter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:unwrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MutableIter",
          "name": "wrapEnum",
          "package": "mutable-iter",
          "signature": "Enumerator s m a -\u003e MEnumerator s m a",
          "source": "src/Data-MutableIter.html#wrapEnum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MutableIter",
          "module": "Data.MutableIter",
          "name": "wrapEnum",
          "normalized": "Enumerator a b c-\u003eMEnumerator a b c",
          "package": "mutable-iter",
          "partial": "Enum",
          "signature": "Enumerator s m a-\u003eMEnumerator s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mutable-iter/docs/Data-MutableIter.html#v:wrapEnum"
      }
    }
  ]
]