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
        "word": "asn1-types"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.BitArray",
          "name": "BitArray",
          "package": "asn1-types",
          "source": "src/Data-ASN1-BitArray.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data ASN1 BitArray",
          "module": "Data.ASN1.BitArray",
          "name": "BitArray",
          "package": "asn1-types",
          "partial": "Bit Array",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-BitArray.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erepresent a bitarray / bitmap\n\u003c/p\u003e\u003cp\u003ethe memory representation start at bit 0\n\u003c/p\u003e",
          "module": "Data.ASN1.BitArray",
          "name": "BitArray",
          "package": "asn1-types",
          "source": "src/Data-ASN1-BitArray.html#BitArray",
          "type": "data"
        },
        "index": {
          "description": "represent bitarray bitmap the memory representation start at bit",
          "hierarchy": "Data ASN1 BitArray",
          "module": "Data.ASN1.BitArray",
          "name": "BitArray",
          "package": "asn1-types",
          "partial": "Bit Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-BitArray.html#t:BitArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethrowed in case of out of bounds in the bitarray.\n\u003c/p\u003e",
          "module": "Data.ASN1.BitArray",
          "name": "BitArrayOutOfBound",
          "package": "asn1-types",
          "source": "src/Data-ASN1-BitArray.html#BitArrayOutOfBound",
          "type": "data"
        },
        "index": {
          "description": "throwed in case of out of bounds in the bitarray",
          "hierarchy": "Data ASN1 BitArray",
          "module": "Data.ASN1.BitArray",
          "name": "BitArrayOutOfBound",
          "package": "asn1-types",
          "partial": "Bit Array Out Of Bound",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-BitArray.html#t:BitArrayOutOfBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.BitArray",
          "name": "BitArray",
          "package": "asn1-types",
          "signature": "BitArray Word64 ByteString",
          "source": "src/Data-ASN1-BitArray.html#BitArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 BitArray",
          "module": "Data.ASN1.BitArray",
          "name": "BitArray",
          "package": "asn1-types",
          "partial": "Bit Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-BitArray.html#v:BitArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.BitArray",
          "name": "BitArrayOutOfBound",
          "package": "asn1-types",
          "signature": "BitArrayOutOfBound Word64",
          "source": "src/Data-ASN1-BitArray.html#BitArrayOutOfBound",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 BitArray",
          "module": "Data.ASN1.BitArray",
          "name": "BitArrayOutOfBound",
          "package": "asn1-types",
          "partial": "Bit Array Out Of Bound",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-BitArray.html#v:BitArrayOutOfBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eclear the nth bits\n\u003c/p\u003e",
          "module": "Data.ASN1.BitArray",
          "name": "bitArrayClearBit",
          "package": "asn1-types",
          "signature": "BitArray -\u003e Word64 -\u003e BitArray",
          "source": "src/Data-ASN1-BitArray.html#bitArrayClearBit",
          "type": "function"
        },
        "index": {
          "description": "clear the nth bits",
          "hierarchy": "Data ASN1 BitArray",
          "module": "Data.ASN1.BitArray",
          "name": "bitArrayClearBit",
          "normalized": "BitArray-\u003eWord-\u003eBitArray",
          "package": "asn1-types",
          "partial": "Array Clear Bit",
          "signature": "BitArray-\u003eWord-\u003eBitArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-BitArray.html#v:bitArrayClearBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the nth bits\n\u003c/p\u003e",
          "module": "Data.ASN1.BitArray",
          "name": "bitArrayGetBit",
          "package": "asn1-types",
          "signature": "BitArray -\u003e Word64 -\u003e Bool",
          "source": "src/Data-ASN1-BitArray.html#bitArrayGetBit",
          "type": "function"
        },
        "index": {
          "description": "get the nth bits",
          "hierarchy": "Data ASN1 BitArray",
          "module": "Data.ASN1.BitArray",
          "name": "bitArrayGetBit",
          "normalized": "BitArray-\u003eWord-\u003eBool",
          "package": "asn1-types",
          "partial": "Array Get Bit",
          "signature": "BitArray-\u003eWord-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-BitArray.html#v:bitArrayGetBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget padded bytestring of the bitarray\n\u003c/p\u003e",
          "module": "Data.ASN1.BitArray",
          "name": "bitArrayGetData",
          "package": "asn1-types",
          "signature": "BitArray -\u003e ByteString",
          "source": "src/Data-ASN1-BitArray.html#bitArrayGetData",
          "type": "function"
        },
        "index": {
          "description": "get padded bytestring of the bitarray",
          "hierarchy": "Data ASN1 BitArray",
          "module": "Data.ASN1.BitArray",
          "name": "bitArrayGetData",
          "normalized": "BitArray-\u003eByteString",
          "package": "asn1-types",
          "partial": "Array Get Data",
          "signature": "BitArray-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-BitArray.html#v:bitArrayGetData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns the length of bits in this bitarray\n\u003c/p\u003e",
          "module": "Data.ASN1.BitArray",
          "name": "bitArrayLength",
          "package": "asn1-types",
          "signature": "BitArray -\u003e Word64",
          "source": "src/Data-ASN1-BitArray.html#bitArrayLength",
          "type": "function"
        },
        "index": {
          "description": "returns the length of bits in this bitarray",
          "hierarchy": "Data ASN1 BitArray",
          "module": "Data.ASN1.BitArray",
          "name": "bitArrayLength",
          "normalized": "BitArray-\u003eWord",
          "package": "asn1-types",
          "partial": "Array Length",
          "signature": "BitArray-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-BitArray.html#v:bitArrayLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the nth bits\n\u003c/p\u003e",
          "module": "Data.ASN1.BitArray",
          "name": "bitArraySetBit",
          "package": "asn1-types",
          "signature": "BitArray -\u003e Word64 -\u003e BitArray",
          "source": "src/Data-ASN1-BitArray.html#bitArraySetBit",
          "type": "function"
        },
        "index": {
          "description": "set the nth bits",
          "hierarchy": "Data ASN1 BitArray",
          "module": "Data.ASN1.BitArray",
          "name": "bitArraySetBit",
          "normalized": "BitArray-\u003eWord-\u003eBitArray",
          "package": "asn1-types",
          "partial": "Array Set Bit",
          "signature": "BitArray-\u003eWord-\u003eBitArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-BitArray.html#v:bitArraySetBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the nth bit to the value specified\n\u003c/p\u003e",
          "module": "Data.ASN1.BitArray",
          "name": "bitArraySetBitValue",
          "package": "asn1-types",
          "signature": "BitArray -\u003e Word64 -\u003e Bool -\u003e BitArray",
          "source": "src/Data-ASN1-BitArray.html#bitArraySetBitValue",
          "type": "function"
        },
        "index": {
          "description": "set the nth bit to the value specified",
          "hierarchy": "Data ASN1 BitArray",
          "module": "Data.ASN1.BitArray",
          "name": "bitArraySetBitValue",
          "normalized": "BitArray-\u003eWord-\u003eBool-\u003eBitArray",
          "package": "asn1-types",
          "partial": "Array Set Bit Value",
          "signature": "BitArray-\u003eWord-\u003eBool-\u003eBitArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-BitArray.html#v:bitArraySetBitValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enumber of bit to skip at the end (padding)\n\u003c/p\u003e",
          "module": "Data.ASN1.BitArray",
          "name": "toBitArray",
          "package": "asn1-types",
          "signature": "ByteString -\u003e Int -\u003e BitArray",
          "source": "src/Data-ASN1-BitArray.html#toBitArray",
          "type": "function"
        },
        "index": {
          "description": "number of bit to skip at the end padding",
          "hierarchy": "Data ASN1 BitArray",
          "module": "Data.ASN1.BitArray",
          "name": "toBitArray",
          "normalized": "ByteString-\u003eInt-\u003eBitArray",
          "package": "asn1-types",
          "partial": "Bit Array",
          "signature": "ByteString-\u003eInt-\u003eBitArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-BitArray.html#v:toBitArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.OID",
          "name": "OID",
          "package": "asn1-types",
          "source": "src/Data-ASN1-OID.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data ASN1 OID",
          "module": "Data.ASN1.OID",
          "name": "OID",
          "package": "asn1-types",
          "partial": "OID",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-OID.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard ASN.1 Object ID (OID)\n\u003c/p\u003e",
          "module": "Data.ASN1.OID",
          "name": "OID",
          "package": "asn1-types",
          "source": "src/Data-ASN1-OID.html#OID",
          "type": "type"
        },
        "index": {
          "description": "Standard ASN.1 Object ID OID",
          "hierarchy": "Data ASN1 OID",
          "module": "Data.ASN1.OID",
          "name": "OID",
          "package": "asn1-types",
          "partial": "OID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-OID.html#t:OID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of things that can be named by Object ID\n\u003c/p\u003e",
          "module": "Data.ASN1.OID",
          "name": "OIDNameable",
          "package": "asn1-types",
          "source": "src/Data-ASN1-OID.html#OIDNameable",
          "type": "class"
        },
        "index": {
          "description": "Class of things that can be named by Object ID",
          "hierarchy": "Data ASN1 OID",
          "module": "Data.ASN1.OID",
          "name": "OIDNameable",
          "package": "asn1-types",
          "partial": "OIDNameable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-OID.html#t:OIDNameable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of things that have an Object ID\n\u003c/p\u003e",
          "module": "Data.ASN1.OID",
          "name": "OIDable",
          "package": "asn1-types",
          "source": "src/Data-ASN1-OID.html#OIDable",
          "type": "class"
        },
        "index": {
          "description": "Class of things that have an Object ID",
          "hierarchy": "Data ASN1 OID",
          "module": "Data.ASN1.OID",
          "name": "OIDable",
          "package": "asn1-types",
          "partial": "OIDable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-OID.html#t:OIDable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to convert an OID into an Object\n\u003c/p\u003e",
          "module": "Data.ASN1.OID",
          "name": "fromObjectID",
          "package": "asn1-types",
          "signature": "OID -\u003e Maybe a",
          "source": "src/Data-ASN1-OID.html#fromObjectID",
          "type": "method"
        },
        "index": {
          "description": "Try to convert an OID into an Object",
          "hierarchy": "Data ASN1 OID",
          "module": "Data.ASN1.OID",
          "name": "fromObjectID",
          "normalized": "OID-\u003eMaybe a",
          "package": "asn1-types",
          "partial": "Object ID",
          "signature": "OID-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-OID.html#v:fromObjectID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn the object ID of an Object from the ObjectIdentifiable class.\n\u003c/p\u003e",
          "module": "Data.ASN1.OID",
          "name": "getObjectID",
          "package": "asn1-types",
          "signature": "a -\u003e OID",
          "source": "src/Data-ASN1-OID.html#getObjectID",
          "type": "method"
        },
        "index": {
          "description": "return the object ID of an Object from the ObjectIdentifiable class",
          "hierarchy": "Data ASN1 OID",
          "module": "Data.ASN1.OID",
          "name": "getObjectID",
          "normalized": "a-\u003eOID",
          "package": "asn1-types",
          "partial": "Object ID",
          "signature": "a-\u003eOID",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-OID.html#v:getObjectID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "Lowlevel",
          "package": "asn1-types",
          "source": "src/Data-ASN1-Types-Lowlevel.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data ASN1 Types Lowlevel",
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "Lowlevel",
          "package": "asn1-types",
          "partial": "Lowlevel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-Lowlevel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElement class\n\u003c/p\u003e",
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "ASN1Class",
          "package": "asn1-types",
          "source": "src/Data-ASN1-Types-Lowlevel.html#ASN1Class",
          "type": "data"
        },
        "index": {
          "description": "Element class",
          "hierarchy": "Data ASN1 Types Lowlevel",
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "ASN1Class",
          "package": "asn1-types",
          "partial": "ASN Class",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-Lowlevel.html#t:ASN1Class"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erepresent one event from an asn1 data stream\n\u003c/p\u003e",
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "ASN1Event",
          "package": "asn1-types",
          "source": "src/Data-ASN1-Types-Lowlevel.html#ASN1Event",
          "type": "data"
        },
        "index": {
          "description": "represent one event from an asn1 data stream",
          "hierarchy": "Data ASN1 Types Lowlevel",
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "ASN1Event",
          "package": "asn1-types",
          "partial": "ASN Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-Lowlevel.html#t:ASN1Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eASN1 Header with the class, tag, constructed flag and length.\n\u003c/p\u003e",
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "ASN1Header",
          "package": "asn1-types",
          "source": "src/Data-ASN1-Types-Lowlevel.html#ASN1Header",
          "type": "data"
        },
        "index": {
          "description": "ASN1 Header with the class tag constructed flag and length",
          "hierarchy": "Data ASN1 Types Lowlevel",
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "ASN1Header",
          "package": "asn1-types",
          "partial": "ASN Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-Lowlevel.html#t:ASN1Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eASN1 Length with all different formats\n\u003c/p\u003e",
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "ASN1Length",
          "package": "asn1-types",
          "source": "src/Data-ASN1-Types-Lowlevel.html#ASN1Length",
          "type": "data"
        },
        "index": {
          "description": "ASN1 Length with all different formats",
          "hierarchy": "Data ASN1 Types Lowlevel",
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "ASN1Length",
          "package": "asn1-types",
          "partial": "ASN Length",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-Lowlevel.html#t:ASN1Length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eASN1 Tag\n\u003c/p\u003e",
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "ASN1Tag",
          "package": "asn1-types",
          "source": "src/Data-ASN1-Types-Lowlevel.html#ASN1Tag",
          "type": "type"
        },
        "index": {
          "description": "ASN1 Tag",
          "hierarchy": "Data ASN1 Types Lowlevel",
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "ASN1Tag",
          "package": "asn1-types",
          "partial": "ASN Tag",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-Lowlevel.html#t:ASN1Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "ASN1Header",
          "package": "asn1-types",
          "signature": "ASN1Header !ASN1Class !ASN1Tag !Bool !ASN1Length",
          "source": "src/Data-ASN1-Types-Lowlevel.html#ASN1Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Types Lowlevel",
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "ASN1Header",
          "package": "asn1-types",
          "partial": "ASN Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-Lowlevel.html#v:ASN1Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ASN1.Types.Lowlevel\",\"Data.ASN1.Types\"]",
          "name": "Application",
          "package": "asn1-types",
          "signature": "Application",
          "source": "src/Data-ASN1-Types-Lowlevel.html#ASN1Class",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-Lowlevel.html#v:Application\",\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:Application\"]"
        },
        "index": {
          "hierarchy": "Data ASN1 Types Lowlevel",
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "Application",
          "package": "asn1-types",
          "partial": "Application",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-Lowlevel.html#v:Application"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructed value start\n\u003c/p\u003e",
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "ConstructionBegin",
          "package": "asn1-types",
          "signature": "ConstructionBegin",
          "source": "src/Data-ASN1-Types-Lowlevel.html#ASN1Event",
          "type": "function"
        },
        "index": {
          "description": "Constructed value start",
          "hierarchy": "Data ASN1 Types Lowlevel",
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "ConstructionBegin",
          "package": "asn1-types",
          "partial": "Construction Begin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-Lowlevel.html#v:ConstructionBegin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructed value end\n\u003c/p\u003e",
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "ConstructionEnd",
          "package": "asn1-types",
          "signature": "ConstructionEnd",
          "source": "src/Data-ASN1-Types-Lowlevel.html#ASN1Event",
          "type": "function"
        },
        "index": {
          "description": "Constructed value end",
          "hierarchy": "Data ASN1 Types Lowlevel",
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "ConstructionEnd",
          "package": "asn1-types",
          "partial": "Construction End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-Lowlevel.html#v:ConstructionEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ASN1.Types.Lowlevel\",\"Data.ASN1.Types\"]",
          "name": "Context",
          "package": "asn1-types",
          "signature": "Context",
          "source": "src/Data-ASN1-Types-Lowlevel.html#ASN1Class",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-Lowlevel.html#v:Context\",\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:Context\"]"
        },
        "index": {
          "hierarchy": "Data ASN1 Types Lowlevel",
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "Context",
          "package": "asn1-types",
          "partial": "Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-Lowlevel.html#v:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eASN1 Header\n\u003c/p\u003e",
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "Header",
          "package": "asn1-types",
          "signature": "Header ASN1Header",
          "source": "src/Data-ASN1-Types-Lowlevel.html#ASN1Event",
          "type": "function"
        },
        "index": {
          "description": "ASN1 Header",
          "hierarchy": "Data ASN1 Types Lowlevel",
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "Header",
          "package": "asn1-types",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-Lowlevel.html#v:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength is indefinite expect an EOC in the stream to finish the type\n\u003c/p\u003e",
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "LenIndefinite",
          "package": "asn1-types",
          "signature": "LenIndefinite",
          "source": "src/Data-ASN1-Types-Lowlevel.html#ASN1Length",
          "type": "function"
        },
        "index": {
          "description": "Length is indefinite expect an EOC in the stream to finish the type",
          "hierarchy": "Data ASN1 Types Lowlevel",
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "LenIndefinite",
          "package": "asn1-types",
          "partial": "Len Indefinite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-Lowlevel.html#v:LenIndefinite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLong form of N bytes\n\u003c/p\u003e",
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "LenLong",
          "package": "asn1-types",
          "signature": "LenLong Int Int",
          "source": "src/Data-ASN1-Types-Lowlevel.html#ASN1Length",
          "type": "function"
        },
        "index": {
          "description": "Long form of bytes",
          "hierarchy": "Data ASN1 Types Lowlevel",
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "LenLong",
          "package": "asn1-types",
          "partial": "Len Long",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-Lowlevel.html#v:LenLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort form with only one byte. length has to be \u003c 127.\n\u003c/p\u003e",
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "LenShort",
          "package": "asn1-types",
          "signature": "LenShort Int",
          "source": "src/Data-ASN1-Types-Lowlevel.html#ASN1Length",
          "type": "function"
        },
        "index": {
          "description": "Short form with only one byte length has to be",
          "hierarchy": "Data ASN1 Types Lowlevel",
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "LenShort",
          "package": "asn1-types",
          "partial": "Len Short",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-Lowlevel.html#v:LenShort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrimitive\n\u003c/p\u003e",
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "Primitive",
          "package": "asn1-types",
          "signature": "Primitive !ByteString",
          "source": "src/Data-ASN1-Types-Lowlevel.html#ASN1Event",
          "type": "function"
        },
        "index": {
          "description": "Primitive",
          "hierarchy": "Data ASN1 Types Lowlevel",
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "Primitive",
          "package": "asn1-types",
          "partial": "Primitive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-Lowlevel.html#v:Primitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ASN1.Types.Lowlevel\",\"Data.ASN1.Types\"]",
          "name": "Private",
          "package": "asn1-types",
          "signature": "Private",
          "source": "src/Data-ASN1-Types-Lowlevel.html#ASN1Class",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-Lowlevel.html#v:Private\",\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:Private\"]"
        },
        "index": {
          "hierarchy": "Data ASN1 Types Lowlevel",
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "Private",
          "package": "asn1-types",
          "partial": "Private",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-Lowlevel.html#v:Private"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ASN1.Types.Lowlevel\",\"Data.ASN1.Types\"]",
          "name": "Universal",
          "package": "asn1-types",
          "signature": "Universal",
          "source": "src/Data-ASN1-Types-Lowlevel.html#ASN1Class",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-Lowlevel.html#v:Universal\",\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:Universal\"]"
        },
        "index": {
          "hierarchy": "Data ASN1 Types Lowlevel",
          "module": "Data.ASN1.Types.Lowlevel",
          "name": "Universal",
          "package": "asn1-types",
          "partial": "Universal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-Lowlevel.html#v:Universal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDifferent String types available in ASN1\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ASN1.Types.String",
          "name": "String",
          "package": "asn1-types",
          "source": "src/Data-ASN1-Types-String.html",
          "type": "module"
        },
        "index": {
          "description": "Different String types available in ASN1",
          "hierarchy": "Data ASN1 Types String",
          "module": "Data.ASN1.Types.String",
          "name": "String",
          "package": "asn1-types",
          "partial": "String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eASN1 Character String with encoding\n\u003c/p\u003e",
          "module": "Data.ASN1.Types.String",
          "name": "ASN1CharacterString",
          "package": "asn1-types",
          "source": "src/Data-ASN1-Types-String.html#ASN1CharacterString",
          "type": "data"
        },
        "index": {
          "description": "ASN1 Character String with encoding",
          "hierarchy": "Data ASN1 Types String",
          "module": "Data.ASN1.Types.String",
          "name": "ASN1CharacterString",
          "package": "asn1-types",
          "partial": "ASN Character String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#t:ASN1CharacterString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine all possible ASN1 String encoding.\n\u003c/p\u003e",
          "module": "Data.ASN1.Types.String",
          "name": "ASN1StringEncoding",
          "package": "asn1-types",
          "source": "src/Data-ASN1-Types-String.html#ASN1StringEncoding",
          "type": "data"
        },
        "index": {
          "description": "Define all possible ASN1 String encoding",
          "hierarchy": "Data ASN1 Types String",
          "module": "Data.ASN1.Types.String",
          "name": "ASN1StringEncoding",
          "package": "asn1-types",
          "partial": "ASN String Encoding",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#t:ASN1StringEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ASN1.Types.String\",\"Data.ASN1.Types\"]",
          "name": "ASN1CharacterString",
          "package": "asn1-types",
          "signature": "ASN1CharacterString",
          "source": "src/Data-ASN1-Types-String.html#ASN1CharacterString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:ASN1CharacterString\",\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:ASN1CharacterString\"]"
        },
        "index": {
          "hierarchy": "Data ASN1 Types String",
          "module": "Data.ASN1.Types.String",
          "name": "ASN1CharacterString",
          "package": "asn1-types",
          "partial": "ASN Character String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:ASN1CharacterString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUCS2\n\u003c/p\u003e",
          "module": "[\"Data.ASN1.Types.String\",\"Data.ASN1.Types\"]",
          "name": "BMP",
          "package": "asn1-types",
          "signature": "BMP",
          "source": "src/Data-ASN1-Types-String.html#ASN1StringEncoding",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:BMP\",\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:BMP\"]"
        },
        "index": {
          "description": "UCS2",
          "hierarchy": "Data ASN1 Types String",
          "module": "Data.ASN1.Types.String",
          "name": "BMP",
          "package": "asn1-types",
          "partial": "BMP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:BMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacter\n\u003c/p\u003e",
          "module": "[\"Data.ASN1.Types.String\",\"Data.ASN1.Types\"]",
          "name": "Character",
          "package": "asn1-types",
          "signature": "Character",
          "source": "src/Data-ASN1-Types-String.html#ASN1StringEncoding",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:Character\",\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:Character\"]"
        },
        "index": {
          "description": "Character",
          "hierarchy": "Data ASN1 Types String",
          "module": "Data.ASN1.Types.String",
          "name": "Character",
          "package": "asn1-types",
          "partial": "Character",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:Character"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eall registered graphic and character sets (see ISO 2375) plus SPACE and DELETE.\n\u003c/p\u003e",
          "module": "[\"Data.ASN1.Types.String\",\"Data.ASN1.Types\"]",
          "name": "General",
          "package": "asn1-types",
          "signature": "General",
          "source": "src/Data-ASN1-Types-String.html#ASN1StringEncoding",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:General\",\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:General\"]"
        },
        "index": {
          "description": "all registered graphic and character sets see ISO plus SPACE and DELETE",
          "hierarchy": "Data ASN1 Types String",
          "module": "Data.ASN1.Types.String",
          "name": "General",
          "package": "asn1-types",
          "partial": "General",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:General"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eall registered G sets and SPACE\n\u003c/p\u003e",
          "module": "[\"Data.ASN1.Types.String\",\"Data.ASN1.Types\"]",
          "name": "Graphic",
          "package": "asn1-types",
          "signature": "Graphic",
          "source": "src/Data-ASN1-Types-String.html#ASN1StringEncoding",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:Graphic\",\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:Graphic\"]"
        },
        "index": {
          "description": "all registered sets and SPACE",
          "hierarchy": "Data ASN1 Types String",
          "module": "Data.ASN1.Types.String",
          "name": "Graphic",
          "package": "asn1-types",
          "partial": "Graphic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:Graphic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e128 characters equivalent to the ASCII alphabet\n\u003c/p\u003e",
          "module": "[\"Data.ASN1.Types.String\",\"Data.ASN1.Types\"]",
          "name": "IA5",
          "package": "asn1-types",
          "signature": "IA5",
          "source": "src/Data-ASN1-Types-String.html#ASN1StringEncoding",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:IA5\",\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:IA5\"]"
        },
        "index": {
          "description": "characters equivalent to the ASCII alphabet",
          "hierarchy": "Data ASN1 Types String",
          "module": "Data.ASN1.Types.String",
          "name": "IA5",
          "package": "asn1-types",
          "partial": "IA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:IA5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eencoding containing numeric [0-9] and space\n\u003c/p\u003e",
          "module": "[\"Data.ASN1.Types.String\",\"Data.ASN1.Types\"]",
          "name": "Numeric",
          "package": "asn1-types",
          "signature": "Numeric",
          "source": "src/Data-ASN1-Types-String.html#ASN1StringEncoding",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:Numeric\",\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:Numeric\"]"
        },
        "index": {
          "description": "encoding containing numeric and space",
          "hierarchy": "Data ASN1 Types String",
          "module": "Data.ASN1.Types.String",
          "name": "Numeric",
          "package": "asn1-types",
          "partial": "Numeric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:Numeric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprintable [a-z] [A-Z] [()+,-.?:/=] and space.\n\u003c/p\u003e",
          "module": "[\"Data.ASN1.Types.String\",\"Data.ASN1.Types\"]",
          "name": "Printable",
          "package": "asn1-types",
          "signature": "Printable",
          "source": "src/Data-ASN1-Types-String.html#ASN1StringEncoding",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:Printable\",\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:Printable\"]"
        },
        "index": {
          "description": "printable a-z A-Z and space",
          "hierarchy": "Data ASN1 Types String",
          "module": "Data.ASN1.Types.String",
          "name": "Printable",
          "package": "asn1-types",
          "partial": "Printable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:Printable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eteletext\n\u003c/p\u003e",
          "module": "[\"Data.ASN1.Types.String\",\"Data.ASN1.Types\"]",
          "name": "T61",
          "package": "asn1-types",
          "signature": "T61",
          "source": "src/Data-ASN1-Types-String.html#ASN1StringEncoding",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:T61\",\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:T61\"]"
        },
        "index": {
          "description": "teletext",
          "hierarchy": "Data ASN1 Types String",
          "module": "Data.ASN1.Types.String",
          "name": "T61",
          "package": "asn1-types",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:T61"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUTF32\n\u003c/p\u003e",
          "module": "[\"Data.ASN1.Types.String\",\"Data.ASN1.Types\"]",
          "name": "UTF32",
          "package": "asn1-types",
          "signature": "UTF32",
          "source": "src/Data-ASN1-Types-String.html#ASN1StringEncoding",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:UTF32\",\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:UTF32\"]"
        },
        "index": {
          "description": "UTF32",
          "hierarchy": "Data ASN1 Types String",
          "module": "Data.ASN1.Types.String",
          "name": "UTF32",
          "package": "asn1-types",
          "partial": "UTF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:UTF32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUTF8\n\u003c/p\u003e",
          "module": "[\"Data.ASN1.Types.String\",\"Data.ASN1.Types\"]",
          "name": "UTF8",
          "package": "asn1-types",
          "signature": "UTF8",
          "source": "src/Data-ASN1-Types-String.html#ASN1StringEncoding",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:UTF8\",\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:UTF8\"]"
        },
        "index": {
          "description": "UTF8",
          "hierarchy": "Data ASN1 Types String",
          "module": "Data.ASN1.Types.String",
          "name": "UTF8",
          "package": "asn1-types",
          "partial": "UTF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:UTF8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCCITT's T.100 and T.101 character sets\n\u003c/p\u003e",
          "module": "[\"Data.ASN1.Types.String\",\"Data.ASN1.Types\"]",
          "name": "VideoTex",
          "package": "asn1-types",
          "signature": "VideoTex",
          "source": "src/Data-ASN1-Types-String.html#ASN1StringEncoding",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:VideoTex\",\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:VideoTex\"]"
        },
        "index": {
          "description": "CCITT T.100 and T.101 character sets",
          "hierarchy": "Data ASN1 Types String",
          "module": "Data.ASN1.Types.String",
          "name": "VideoTex",
          "package": "asn1-types",
          "partial": "Video Tex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:VideoTex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternational ASCII printing character sets\n\u003c/p\u003e",
          "module": "[\"Data.ASN1.Types.String\",\"Data.ASN1.Types\"]",
          "name": "Visible",
          "package": "asn1-types",
          "signature": "Visible",
          "source": "src/Data-ASN1-Types-String.html#ASN1StringEncoding",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:Visible\",\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:Visible\"]"
        },
        "index": {
          "description": "International ASCII printing character sets",
          "hierarchy": "Data ASN1 Types String",
          "module": "Data.ASN1.Types.String",
          "name": "Visible",
          "package": "asn1-types",
          "partial": "Visible",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:Visible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eencode a string into a character string\n\u003c/p\u003e",
          "module": "[\"Data.ASN1.Types.String\",\"Data.ASN1.Types\"]",
          "name": "asn1CharacterString",
          "package": "asn1-types",
          "signature": "ASN1StringEncoding -\u003e String -\u003e ASN1CharacterString",
          "source": "src/Data-ASN1-Types-String.html#asn1CharacterString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:asn1CharacterString\",\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:asn1CharacterString\"]"
        },
        "index": {
          "description": "encode string into character string",
          "hierarchy": "Data ASN1 Types String",
          "module": "Data.ASN1.Types.String",
          "name": "asn1CharacterString",
          "normalized": "ASN StringEncoding-\u003eString-\u003eASN CharacterString",
          "package": "asn1-types",
          "partial": "Character String",
          "signature": "ASN StringEncoding-\u003eString-\u003eASN CharacterString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:asn1CharacterString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etry to decode an \u003ccode\u003e\u003ca\u003eASN1CharacterString\u003c/a\u003e\u003c/code\u003e to a String\n\u003c/p\u003e",
          "module": "[\"Data.ASN1.Types.String\",\"Data.ASN1.Types\"]",
          "name": "asn1CharacterToString",
          "package": "asn1-types",
          "signature": "ASN1CharacterString -\u003e Maybe String",
          "source": "src/Data-ASN1-Types-String.html#asn1CharacterToString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:asn1CharacterToString\",\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:asn1CharacterToString\"]"
        },
        "index": {
          "description": "try to decode an ASN1CharacterString to String",
          "hierarchy": "Data ASN1 Types String",
          "module": "Data.ASN1.Types.String",
          "name": "asn1CharacterToString",
          "normalized": "ASN CharacterString-\u003eMaybe String",
          "package": "asn1-types",
          "partial": "Character To String",
          "signature": "ASN CharacterString-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:asn1CharacterToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ASN1.Types.String\",\"Data.ASN1.Types\"]",
          "name": "characterEncoding",
          "package": "asn1-types",
          "signature": "ASN1StringEncoding",
          "source": "src/Data-ASN1-Types-String.html#ASN1CharacterString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:characterEncoding\",\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:characterEncoding\"]"
        },
        "index": {
          "hierarchy": "Data ASN1 Types String",
          "module": "Data.ASN1.Types.String",
          "name": "characterEncoding",
          "package": "asn1-types",
          "partial": "Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:characterEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ASN1.Types.String\",\"Data.ASN1.Types\"]",
          "name": "getCharacterStringRawData",
          "package": "asn1-types",
          "signature": "ByteString",
          "source": "src/Data-ASN1-Types-String.html#ASN1CharacterString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:getCharacterStringRawData\",\"http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:getCharacterStringRawData\"]"
        },
        "index": {
          "hierarchy": "Data ASN1 Types String",
          "module": "Data.ASN1.Types.String",
          "name": "getCharacterStringRawData",
          "package": "asn1-types",
          "partial": "Character String Raw Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types-String.html#v:getCharacterStringRawData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Types",
          "name": "Types",
          "package": "asn1-types",
          "source": "src/Data-ASN1-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "Types",
          "package": "asn1-types",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine high level ASN1 object.\n\u003c/p\u003e",
          "module": "Data.ASN1.Types",
          "name": "ASN1",
          "package": "asn1-types",
          "source": "src/Data-ASN1-Types.html#ASN1",
          "type": "data"
        },
        "index": {
          "description": "Define high level ASN1 object",
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "ASN1",
          "package": "asn1-types",
          "partial": "ASN",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#t:ASN1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eASN1 Character String with encoding\n\u003c/p\u003e",
          "module": "Data.ASN1.Types",
          "name": "ASN1CharacterString",
          "package": "asn1-types",
          "source": "src/Data-ASN1-Types-String.html#ASN1CharacterString",
          "type": "data"
        },
        "index": {
          "description": "ASN1 Character String with encoding",
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "ASN1CharacterString",
          "package": "asn1-types",
          "partial": "ASN Character String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#t:ASN1CharacterString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElement class\n\u003c/p\u003e",
          "module": "Data.ASN1.Types",
          "name": "ASN1Class",
          "package": "asn1-types",
          "source": "src/Data-ASN1-Types-Lowlevel.html#ASN1Class",
          "type": "data"
        },
        "index": {
          "description": "Element class",
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "ASN1Class",
          "package": "asn1-types",
          "partial": "ASN Class",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#t:ASN1Class"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine the type of container\n\u003c/p\u003e",
          "module": "Data.ASN1.Types",
          "name": "ASN1ConstructionType",
          "package": "asn1-types",
          "source": "src/Data-ASN1-Types.html#ASN1ConstructionType",
          "type": "data"
        },
        "index": {
          "description": "Define the type of container",
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "ASN1ConstructionType",
          "package": "asn1-types",
          "partial": "ASN Construction Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#t:ASN1ConstructionType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine an object that can be converted to and from ASN.1\n\u003c/p\u003e",
          "module": "Data.ASN1.Types",
          "name": "ASN1Object",
          "package": "asn1-types",
          "source": "src/Data-ASN1-Types.html#ASN1Object",
          "type": "class"
        },
        "index": {
          "description": "Define an object that can be converted to and from ASN.1",
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "ASN1Object",
          "package": "asn1-types",
          "partial": "ASN Object",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#t:ASN1Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erepresent a chunk of ASN1 Stream.\n this is equivalent to ShowS but for an ASN1 Stream.\n\u003c/p\u003e",
          "module": "Data.ASN1.Types",
          "name": "ASN1S",
          "package": "asn1-types",
          "source": "src/Data-ASN1-Types.html#ASN1S",
          "type": "type"
        },
        "index": {
          "description": "represent chunk of ASN1 Stream this is equivalent to ShowS but for an ASN1 Stream",
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "ASN1S",
          "package": "asn1-types",
          "partial": "ASN",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#t:ASN1S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine all possible ASN1 String encoding.\n\u003c/p\u003e",
          "module": "Data.ASN1.Types",
          "name": "ASN1StringEncoding",
          "package": "asn1-types",
          "source": "src/Data-ASN1-Types-String.html#ASN1StringEncoding",
          "type": "data"
        },
        "index": {
          "description": "Define all possible ASN1 String encoding",
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "ASN1StringEncoding",
          "package": "asn1-types",
          "partial": "ASN String Encoding",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#t:ASN1StringEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eASN1 Tag\n\u003c/p\u003e",
          "module": "Data.ASN1.Types",
          "name": "ASN1Tag",
          "package": "asn1-types",
          "source": "src/Data-ASN1-Types-Lowlevel.html#ASN1Tag",
          "type": "type"
        },
        "index": {
          "description": "ASN1 Tag",
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "ASN1Tag",
          "package": "asn1-types",
          "partial": "ASN Tag",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#t:ASN1Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifferent ASN1 time representation\n\u003c/p\u003e",
          "module": "Data.ASN1.Types",
          "name": "ASN1TimeType",
          "package": "asn1-types",
          "source": "src/Data-ASN1-Types.html#ASN1TimeType",
          "type": "data"
        },
        "index": {
          "description": "Different ASN1 time representation",
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "ASN1TimeType",
          "package": "asn1-types",
          "partial": "ASN Time Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#t:ASN1TimeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Types",
          "name": "ASN1String",
          "package": "asn1-types",
          "signature": "ASN1String ASN1CharacterString",
          "source": "src/Data-ASN1-Types.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "ASN1String",
          "package": "asn1-types",
          "partial": "ASN String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:ASN1String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Types",
          "name": "ASN1Time",
          "package": "asn1-types",
          "signature": "ASN1Time ASN1TimeType UTCTime (Maybe TimeZone)",
          "source": "src/Data-ASN1-Types.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "ASN1Time",
          "package": "asn1-types",
          "partial": "ASN Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:ASN1Time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Types",
          "name": "BitString",
          "package": "asn1-types",
          "signature": "BitString BitArray",
          "source": "src/Data-ASN1-Types.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "BitString",
          "package": "asn1-types",
          "partial": "Bit String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:BitString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Types",
          "name": "Boolean",
          "package": "asn1-types",
          "signature": "Boolean Bool",
          "source": "src/Data-ASN1-Types.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "Boolean",
          "package": "asn1-types",
          "partial": "Boolean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:Boolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Types",
          "name": "Container",
          "package": "asn1-types",
          "signature": "Container ASN1Class ASN1Tag",
          "source": "src/Data-ASN1-Types.html#ASN1ConstructionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "Container",
          "package": "asn1-types",
          "partial": "Container",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:Container"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Types",
          "name": "End",
          "package": "asn1-types",
          "signature": "End ASN1ConstructionType",
          "source": "src/Data-ASN1-Types.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "End",
          "package": "asn1-types",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:End"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Types",
          "name": "Enumerated",
          "package": "asn1-types",
          "signature": "Enumerated Integer",
          "source": "src/Data-ASN1-Types.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "Enumerated",
          "package": "asn1-types",
          "partial": "Enumerated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:Enumerated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Types",
          "name": "IntVal",
          "package": "asn1-types",
          "signature": "IntVal Integer",
          "source": "src/Data-ASN1-Types.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "IntVal",
          "package": "asn1-types",
          "partial": "Int Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:IntVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Types",
          "name": "Null",
          "package": "asn1-types",
          "signature": "Null",
          "source": "src/Data-ASN1-Types.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "Null",
          "package": "asn1-types",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:Null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Types",
          "name": "OID",
          "package": "asn1-types",
          "signature": "OID OID",
          "source": "src/Data-ASN1-Types.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "OID",
          "package": "asn1-types",
          "partial": "OID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:OID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Types",
          "name": "OctetString",
          "package": "asn1-types",
          "signature": "OctetString ByteString",
          "source": "src/Data-ASN1-Types.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "OctetString",
          "package": "asn1-types",
          "partial": "Octet String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:OctetString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Types",
          "name": "Other",
          "package": "asn1-types",
          "signature": "Other ASN1Class ASN1Tag ByteString",
          "source": "src/Data-ASN1-Types.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "Other",
          "package": "asn1-types",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:Other"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Types",
          "name": "Real",
          "package": "asn1-types",
          "signature": "Real Double",
          "source": "src/Data-ASN1-Types.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "Real",
          "package": "asn1-types",
          "partial": "Real",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:Real"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Types",
          "name": "Sequence",
          "package": "asn1-types",
          "signature": "Sequence",
          "source": "src/Data-ASN1-Types.html#ASN1ConstructionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "Sequence",
          "package": "asn1-types",
          "partial": "Sequence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:Sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Types",
          "name": "Set",
          "package": "asn1-types",
          "signature": "Set",
          "source": "src/Data-ASN1-Types.html#ASN1ConstructionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "Set",
          "package": "asn1-types",
          "partial": "Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:Set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Types",
          "name": "Start",
          "package": "asn1-types",
          "signature": "Start ASN1ConstructionType",
          "source": "src/Data-ASN1-Types.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "Start",
          "package": "asn1-types",
          "partial": "Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:Start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eASN1 GeneralizedTime Type\n\u003c/p\u003e",
          "module": "Data.ASN1.Types",
          "name": "TimeGeneralized",
          "package": "asn1-types",
          "signature": "TimeGeneralized",
          "source": "src/Data-ASN1-Types.html#ASN1TimeType",
          "type": "function"
        },
        "index": {
          "description": "ASN1 GeneralizedTime Type",
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "TimeGeneralized",
          "package": "asn1-types",
          "partial": "Time Generalized",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:TimeGeneralized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eASN1 UTCTime Type: limited between 1950-2050\n\u003c/p\u003e",
          "module": "Data.ASN1.Types",
          "name": "TimeUTC",
          "package": "asn1-types",
          "signature": "TimeUTC",
          "source": "src/Data-ASN1-Types.html#ASN1TimeType",
          "type": "function"
        },
        "index": {
          "description": "ASN1 UTCTime Type limited between",
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "TimeUTC",
          "package": "asn1-types",
          "partial": "Time UTC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:TimeUTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns either an object along the remaining ASN1 stream,\n or an error.\n\u003c/p\u003e",
          "module": "Data.ASN1.Types",
          "name": "fromASN1",
          "package": "asn1-types",
          "signature": "[ASN1] -\u003e Either String (a, [ASN1])",
          "source": "src/Data-ASN1-Types.html#fromASN1",
          "type": "method"
        },
        "index": {
          "description": "returns either an object along the remaining ASN1 stream or an error",
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "fromASN1",
          "normalized": "[ASN]-\u003eEither String(a,[ASN])",
          "package": "asn1-types",
          "partial": "ASN",
          "signature": "[ASN]-\u003eEither String(a,[ASN])",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:fromASN1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etransform an object into a chunk of ASN1 stream.\n\u003c/p\u003e",
          "module": "Data.ASN1.Types",
          "name": "toASN1",
          "package": "asn1-types",
          "signature": "a -\u003e ASN1S",
          "source": "src/Data-ASN1-Types.html#toASN1",
          "type": "method"
        },
        "index": {
          "description": "transform an object into chunk of ASN1 stream",
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "toASN1",
          "normalized": "a-\u003eASN S",
          "package": "asn1-types",
          "partial": "ASN",
          "signature": "a-\u003eASN S",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/asn1-types/docs/Data-ASN1-Types.html#v:toASN1"
      }
    }
  ]
]