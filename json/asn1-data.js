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
        "word": "asn1-data"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRaw encoding of binary format (BER\u003cem\u003eDER\u003c/em\u003eCER)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "Raw",
          "package": "asn1-data",
          "source": "src/Data-ASN1-BinaryEncoding-Raw.html",
          "type": "module"
        },
        "index": {
          "description": "Raw encoding of binary format BER DER CER",
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "Raw",
          "package": "asn1-data",
          "partial": "Raw",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElement class\n\u003c/p\u003e",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "ASN1Class",
          "package": "asn1-data",
          "source": "src/Data-ASN1-Types.html#ASN1Class",
          "type": "data"
        },
        "index": {
          "description": "Element class",
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "ASN1Class",
          "package": "asn1-data",
          "partial": "ASN Class",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#t:ASN1Class"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erepresent one event from an asn1 data stream\n\u003c/p\u003e",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "ASN1Event",
          "package": "asn1-data",
          "source": "src/Data-ASN1-Types.html#ASN1Event",
          "type": "data"
        },
        "index": {
          "description": "represent one event from an asn1 data stream",
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "ASN1Event",
          "package": "asn1-data",
          "partial": "ASN Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#t:ASN1Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eASN1 Header with the class, tag, constructed flag and length.\n\u003c/p\u003e",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "ASN1Header",
          "package": "asn1-data",
          "source": "src/Data-ASN1-Types.html#ASN1Header",
          "type": "data"
        },
        "index": {
          "description": "ASN1 Header with the class tag constructed flag and length",
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "ASN1Header",
          "package": "asn1-data",
          "partial": "ASN Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#t:ASN1Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eASN1 Length with all different formats\n\u003c/p\u003e",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "ASN1Length",
          "package": "asn1-data",
          "source": "src/Data-ASN1-Types.html#ASN1Length",
          "type": "data"
        },
        "index": {
          "description": "ASN1 Length with all different formats",
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "ASN1Length",
          "package": "asn1-data",
          "partial": "ASN Length",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#t:ASN1Length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eASN1 Tag\n\u003c/p\u003e",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "ASN1Tag",
          "package": "asn1-data",
          "source": "src/Data-ASN1-Types.html#ASN1Tag",
          "type": "type"
        },
        "index": {
          "description": "ASN1 Tag",
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "ASN1Tag",
          "package": "asn1-data",
          "partial": "ASN Tag",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#t:ASN1Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ASN1.BinaryEncoding.Raw\",\"Data.ASN1.Types\"]",
          "name": "ASN1Header",
          "package": "asn1-data",
          "signature": "ASN1Header !ASN1Class !ASN1Tag !Bool !ASN1Length",
          "source": "src/Data-ASN1-Types.html#ASN1Header",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#v:ASN1Header\",\"http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Types.html#v:ASN1Header\"]"
        },
        "index": {
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "ASN1Header",
          "package": "asn1-data",
          "partial": "ASN Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#v:ASN1Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ASN1.BinaryEncoding.Raw\",\"Data.ASN1.Stream\",\"Data.ASN1.Types\"]",
          "name": "Application",
          "package": "asn1-data",
          "signature": "Application",
          "source": "src/Data-ASN1-Types.html#ASN1Class",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#v:Application\",\"http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:Application\",\"http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Types.html#v:Application\"]"
        },
        "index": {
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "Application",
          "package": "asn1-data",
          "partial": "Application",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#v:Application"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructed value start\n\u003c/p\u003e",
          "module": "[\"Data.ASN1.BinaryEncoding.Raw\",\"Data.ASN1.Types\"]",
          "name": "ConstructionBegin",
          "package": "asn1-data",
          "signature": "ConstructionBegin",
          "source": "src/Data-ASN1-Types.html#ASN1Event",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#v:ConstructionBegin\",\"http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Types.html#v:ConstructionBegin\"]"
        },
        "index": {
          "description": "Constructed value start",
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "ConstructionBegin",
          "package": "asn1-data",
          "partial": "Construction Begin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#v:ConstructionBegin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructed value end\n\u003c/p\u003e",
          "module": "[\"Data.ASN1.BinaryEncoding.Raw\",\"Data.ASN1.Types\"]",
          "name": "ConstructionEnd",
          "package": "asn1-data",
          "signature": "ConstructionEnd",
          "source": "src/Data-ASN1-Types.html#ASN1Event",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#v:ConstructionEnd\",\"http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Types.html#v:ConstructionEnd\"]"
        },
        "index": {
          "description": "Constructed value end",
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "ConstructionEnd",
          "package": "asn1-data",
          "partial": "Construction End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#v:ConstructionEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ASN1.BinaryEncoding.Raw\",\"Data.ASN1.Stream\",\"Data.ASN1.Types\"]",
          "name": "Context",
          "package": "asn1-data",
          "signature": "Context",
          "source": "src/Data-ASN1-Types.html#ASN1Class",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#v:Context\",\"http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:Context\",\"http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Types.html#v:Context\"]"
        },
        "index": {
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "Context",
          "package": "asn1-data",
          "partial": "Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#v:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eASN1 Header\n\u003c/p\u003e",
          "module": "[\"Data.ASN1.BinaryEncoding.Raw\",\"Data.ASN1.Types\"]",
          "name": "Header",
          "package": "asn1-data",
          "signature": "Header ASN1Header",
          "source": "src/Data-ASN1-Types.html#ASN1Event",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#v:Header\",\"http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Types.html#v:Header\"]"
        },
        "index": {
          "description": "ASN1 Header",
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "Header",
          "package": "asn1-data",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#v:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength is indefinite expect an EOC in the stream to finish the type\n\u003c/p\u003e",
          "module": "[\"Data.ASN1.BinaryEncoding.Raw\",\"Data.ASN1.Types\"]",
          "name": "LenIndefinite",
          "package": "asn1-data",
          "signature": "LenIndefinite",
          "source": "src/Data-ASN1-Types.html#ASN1Length",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#v:LenIndefinite\",\"http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Types.html#v:LenIndefinite\"]"
        },
        "index": {
          "description": "Length is indefinite expect an EOC in the stream to finish the type",
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "LenIndefinite",
          "package": "asn1-data",
          "partial": "Len Indefinite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#v:LenIndefinite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLong form of N bytes\n\u003c/p\u003e",
          "module": "[\"Data.ASN1.BinaryEncoding.Raw\",\"Data.ASN1.Types\"]",
          "name": "LenLong",
          "package": "asn1-data",
          "signature": "LenLong Int Int",
          "source": "src/Data-ASN1-Types.html#ASN1Length",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#v:LenLong\",\"http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Types.html#v:LenLong\"]"
        },
        "index": {
          "description": "Long form of bytes",
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "LenLong",
          "package": "asn1-data",
          "partial": "Len Long",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#v:LenLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort form with only one byte. length has to be \u003c 127.\n\u003c/p\u003e",
          "module": "[\"Data.ASN1.BinaryEncoding.Raw\",\"Data.ASN1.Types\"]",
          "name": "LenShort",
          "package": "asn1-data",
          "signature": "LenShort Int",
          "source": "src/Data-ASN1-Types.html#ASN1Length",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#v:LenShort\",\"http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Types.html#v:LenShort\"]"
        },
        "index": {
          "description": "Short form with only one byte length has to be",
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "LenShort",
          "package": "asn1-data",
          "partial": "Len Short",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#v:LenShort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrimitive\n\u003c/p\u003e",
          "module": "[\"Data.ASN1.BinaryEncoding.Raw\",\"Data.ASN1.Types\"]",
          "name": "Primitive",
          "package": "asn1-data",
          "signature": "Primitive !ByteString",
          "source": "src/Data-ASN1-Types.html#ASN1Event",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#v:Primitive\",\"http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Types.html#v:Primitive\"]"
        },
        "index": {
          "description": "Primitive",
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "Primitive",
          "package": "asn1-data",
          "partial": "Primitive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#v:Primitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ASN1.BinaryEncoding.Raw\",\"Data.ASN1.Stream\",\"Data.ASN1.Types\"]",
          "name": "Private",
          "package": "asn1-data",
          "signature": "Private",
          "source": "src/Data-ASN1-Types.html#ASN1Class",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#v:Private\",\"http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:Private\",\"http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Types.html#v:Private\"]"
        },
        "index": {
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "Private",
          "package": "asn1-data",
          "partial": "Private",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#v:Private"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.ASN1.BinaryEncoding.Raw\",\"Data.ASN1.Stream\",\"Data.ASN1.Types\"]",
          "name": "Universal",
          "package": "asn1-data",
          "signature": "Universal",
          "source": "src/Data-ASN1-Types.html#ASN1Class",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#v:Universal\",\"http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:Universal\",\"http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Types.html#v:Universal\"]"
        },
        "index": {
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "Universal",
          "package": "asn1-data",
          "partial": "Universal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#v:Universal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse one strict bytestring and returns on success all ASN1 events associated.\n\u003c/p\u003e",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "parseBS",
          "package": "asn1-data",
          "signature": "ByteString -\u003e Either ASN1Error [ASN1Event]",
          "source": "src/Data-ASN1-BinaryEncoding-Parse.html#parseBS",
          "type": "function"
        },
        "index": {
          "description": "Parse one strict bytestring and returns on success all ASN1 events associated",
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "parseBS",
          "normalized": "ByteString-\u003eEither ASN Error[ASN Event]",
          "package": "asn1-data",
          "partial": "BS",
          "signature": "ByteString-\u003eEither ASN Error[ASN Event]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#v:parseBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse one lazy bytestring and returns on success all ASN1 events associated.\n\u003c/p\u003e",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "parseLBS",
          "package": "asn1-data",
          "signature": "ByteString -\u003e Either ASN1Error [ASN1Event]",
          "source": "src/Data-ASN1-BinaryEncoding-Parse.html#parseLBS",
          "type": "function"
        },
        "index": {
          "description": "Parse one lazy bytestring and returns on success all ASN1 events associated",
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "parseLBS",
          "normalized": "ByteString-\u003eEither ASN Error[ASN Event]",
          "package": "asn1-data",
          "partial": "LBS",
          "signature": "ByteString-\u003eEither ASN Error[ASN Event]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#v:parseLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etransform a list of ASN1 Events into a strict bytestring\n\u003c/p\u003e",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "toByteString",
          "package": "asn1-data",
          "signature": "[ASN1Event] -\u003e ByteString",
          "source": "src/Data-ASN1-BinaryEncoding-Writer.html#toByteString",
          "type": "function"
        },
        "index": {
          "description": "transform list of ASN1 Events into strict bytestring",
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "toByteString",
          "normalized": "[ASN Event]-\u003eByteString",
          "package": "asn1-data",
          "partial": "Byte String",
          "signature": "[ASN Event]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#v:toByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etransform a list of ASN1 Events into a lazy bytestring\n\u003c/p\u003e",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "toLazyByteString",
          "package": "asn1-data",
          "signature": "[ASN1Event] -\u003e ByteString",
          "source": "src/Data-ASN1-BinaryEncoding-Writer.html#toLazyByteString",
          "type": "function"
        },
        "index": {
          "description": "transform list of ASN1 Events into lazy bytestring",
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "toLazyByteString",
          "normalized": "[ASN Event]-\u003eByteString",
          "package": "asn1-data",
          "partial": "Lazy Byte String",
          "signature": "[ASN Event]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding-Raw.html#v:toLazyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing ASN1 BER and DER specification encoding/decoding.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ASN1.BinaryEncoding",
          "name": "BinaryEncoding",
          "package": "asn1-data",
          "source": "src/Data-ASN1-BinaryEncoding.html",
          "type": "module"
        },
        "index": {
          "description": "module containing ASN1 BER and DER specification encoding decoding",
          "hierarchy": "Data ASN1 BinaryEncoding",
          "module": "Data.ASN1.BinaryEncoding",
          "name": "BinaryEncoding",
          "package": "asn1-data",
          "partial": "Binary Encoding",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic Encoding Rules (BER)\n\u003c/p\u003e",
          "module": "Data.ASN1.BinaryEncoding",
          "name": "BER",
          "package": "asn1-data",
          "source": "src/Data-ASN1-BinaryEncoding.html#BER",
          "type": "data"
        },
        "index": {
          "description": "Basic Encoding Rules BER",
          "hierarchy": "Data ASN1 BinaryEncoding",
          "module": "Data.ASN1.BinaryEncoding",
          "name": "BER",
          "package": "asn1-data",
          "partial": "BER",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding.html#t:BER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistinguished Encoding Rules (DER)\n\u003c/p\u003e",
          "module": "Data.ASN1.BinaryEncoding",
          "name": "DER",
          "package": "asn1-data",
          "source": "src/Data-ASN1-BinaryEncoding.html#DER",
          "type": "data"
        },
        "index": {
          "description": "Distinguished Encoding Rules DER",
          "hierarchy": "Data ASN1 BinaryEncoding",
          "module": "Data.ASN1.BinaryEncoding",
          "name": "DER",
          "package": "asn1-data",
          "partial": "DER",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding.html#t:DER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.BinaryEncoding",
          "name": "BER",
          "package": "asn1-data",
          "signature": "BER",
          "source": "src/Data-ASN1-BinaryEncoding.html#BER",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 BinaryEncoding",
          "module": "Data.ASN1.BinaryEncoding",
          "name": "BER",
          "package": "asn1-data",
          "partial": "BER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding.html#v:BER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.BinaryEncoding",
          "name": "DER",
          "package": "asn1-data",
          "signature": "DER",
          "source": "src/Data-ASN1-BinaryEncoding.html#DER",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 BinaryEncoding",
          "module": "Data.ASN1.BinaryEncoding",
          "name": "DER",
          "package": "asn1-data",
          "partial": "DER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BinaryEncoding.html#v:DER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.BitArray",
          "name": "BitArray",
          "package": "asn1-data",
          "source": "src/Data-ASN1-BitArray.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data ASN1 BitArray",
          "module": "Data.ASN1.BitArray",
          "name": "BitArray",
          "package": "asn1-data",
          "partial": "Bit Array",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BitArray.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erepresent a bitarray / bitmap\n\u003c/p\u003e",
          "module": "Data.ASN1.BitArray",
          "name": "BitArray",
          "package": "asn1-data",
          "source": "src/Data-ASN1-BitArray.html#BitArray",
          "type": "data"
        },
        "index": {
          "description": "represent bitarray bitmap",
          "hierarchy": "Data ASN1 BitArray",
          "module": "Data.ASN1.BitArray",
          "name": "BitArray",
          "package": "asn1-data",
          "partial": "Bit Array",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BitArray.html#t:BitArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethrowed in case of out of bounds in the bitarray.\n\u003c/p\u003e",
          "module": "Data.ASN1.BitArray",
          "name": "BitArrayOutOfBound",
          "package": "asn1-data",
          "source": "src/Data-ASN1-BitArray.html#BitArrayOutOfBound",
          "type": "data"
        },
        "index": {
          "description": "throwed in case of out of bounds in the bitarray",
          "hierarchy": "Data ASN1 BitArray",
          "module": "Data.ASN1.BitArray",
          "name": "BitArrayOutOfBound",
          "package": "asn1-data",
          "partial": "Bit Array Out Of Bound",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BitArray.html#t:BitArrayOutOfBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.BitArray",
          "name": "BitArray",
          "package": "asn1-data",
          "signature": "BitArray Word64 ByteString",
          "source": "src/Data-ASN1-BitArray.html#BitArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 BitArray",
          "module": "Data.ASN1.BitArray",
          "name": "BitArray",
          "package": "asn1-data",
          "partial": "Bit Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BitArray.html#v:BitArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.BitArray",
          "name": "BitArrayOutOfBound",
          "package": "asn1-data",
          "signature": "BitArrayOutOfBound Word64",
          "source": "src/Data-ASN1-BitArray.html#BitArrayOutOfBound",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 BitArray",
          "module": "Data.ASN1.BitArray",
          "name": "BitArrayOutOfBound",
          "package": "asn1-data",
          "partial": "Bit Array Out Of Bound",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BitArray.html#v:BitArrayOutOfBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eclear the nth bits\n\u003c/p\u003e",
          "module": "Data.ASN1.BitArray",
          "name": "bitArrayClearBit",
          "package": "asn1-data",
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
          "package": "asn1-data",
          "partial": "Array Clear Bit",
          "signature": "BitArray-\u003eWord-\u003eBitArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BitArray.html#v:bitArrayClearBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the nth bits\n\u003c/p\u003e",
          "module": "Data.ASN1.BitArray",
          "name": "bitArrayGetBit",
          "package": "asn1-data",
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
          "package": "asn1-data",
          "partial": "Array Get Bit",
          "signature": "BitArray-\u003eWord-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BitArray.html#v:bitArrayGetBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget padded bytestring of the bitarray\n\u003c/p\u003e",
          "module": "Data.ASN1.BitArray",
          "name": "bitArrayGetData",
          "package": "asn1-data",
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
          "package": "asn1-data",
          "partial": "Array Get Data",
          "signature": "BitArray-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BitArray.html#v:bitArrayGetData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns the length of bits in this bitarray\n\u003c/p\u003e",
          "module": "Data.ASN1.BitArray",
          "name": "bitArrayLength",
          "package": "asn1-data",
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
          "package": "asn1-data",
          "partial": "Array Length",
          "signature": "BitArray-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BitArray.html#v:bitArrayLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the nth bits\n\u003c/p\u003e",
          "module": "Data.ASN1.BitArray",
          "name": "bitArraySetBit",
          "package": "asn1-data",
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
          "package": "asn1-data",
          "partial": "Array Set Bit",
          "signature": "BitArray-\u003eWord-\u003eBitArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BitArray.html#v:bitArraySetBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the nth bit to the value specified\n\u003c/p\u003e",
          "module": "Data.ASN1.BitArray",
          "name": "bitArraySetBitValue",
          "package": "asn1-data",
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
          "package": "asn1-data",
          "partial": "Array Set Bit Value",
          "signature": "BitArray-\u003eWord-\u003eBool-\u003eBitArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BitArray.html#v:bitArraySetBitValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enumber of bit to skip at the end (padding)\n\u003c/p\u003e",
          "module": "Data.ASN1.BitArray",
          "name": "toBitArray",
          "package": "asn1-data",
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
          "package": "asn1-data",
          "partial": "Bit Array",
          "signature": "ByteString-\u003eInt-\u003eBitArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-BitArray.html#v:toBitArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Encoding",
          "name": "Encoding",
          "package": "asn1-data",
          "source": "src/Data-ASN1-Encoding.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data ASN1 Encoding",
          "module": "Data.ASN1.Encoding",
          "name": "Encoding",
          "package": "asn1-data",
          "partial": "Encoding",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Encoding.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribe an ASN1 decoding, that transform a bytestream into an asn1stream\n\u003c/p\u003e",
          "module": "Data.ASN1.Encoding",
          "name": "ASN1Decoding",
          "package": "asn1-data",
          "source": "src/Data-ASN1-Encoding.html#ASN1Decoding",
          "type": "class"
        },
        "index": {
          "description": "Describe an ASN1 decoding that transform bytestream into an asn1stream",
          "hierarchy": "Data ASN1 Encoding",
          "module": "Data.ASN1.Encoding",
          "name": "ASN1Decoding",
          "package": "asn1-data",
          "partial": "ASN Decoding",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Encoding.html#t:ASN1Decoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etransition class.\n\u003c/p\u003e",
          "module": "Data.ASN1.Encoding",
          "name": "ASN1DecodingRepr",
          "package": "asn1-data",
          "source": "src/Data-ASN1-Encoding.html#ASN1DecodingRepr",
          "type": "class"
        },
        "index": {
          "description": "transition class",
          "hierarchy": "Data ASN1 Encoding",
          "module": "Data.ASN1.Encoding",
          "name": "ASN1DecodingRepr",
          "package": "asn1-data",
          "partial": "ASN Decoding Repr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Encoding.html#t:ASN1DecodingRepr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribe an ASN1 encoding, that transform an asn1stream into a bytestream\n\u003c/p\u003e",
          "module": "Data.ASN1.Encoding",
          "name": "ASN1Encoding",
          "package": "asn1-data",
          "source": "src/Data-ASN1-Encoding.html#ASN1Encoding",
          "type": "class"
        },
        "index": {
          "description": "Describe an ASN1 encoding that transform an asn1stream into bytestream",
          "hierarchy": "Data ASN1 Encoding",
          "module": "Data.ASN1.Encoding",
          "name": "ASN1Encoding",
          "package": "asn1-data",
          "partial": "ASN Encoding",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Encoding.html#t:ASN1Encoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edecode a lazy bytestring into an ASN1 stream\n\u003c/p\u003e",
          "module": "Data.ASN1.Encoding",
          "name": "decodeASN1",
          "package": "asn1-data",
          "signature": "a -\u003e ByteString -\u003e Either ASN1Error [ASN1]",
          "source": "src/Data-ASN1-Encoding.html#decodeASN1",
          "type": "method"
        },
        "index": {
          "description": "decode lazy bytestring into an ASN1 stream",
          "hierarchy": "Data ASN1 Encoding",
          "module": "Data.ASN1.Encoding",
          "name": "decodeASN1",
          "normalized": "a-\u003eByteString-\u003eEither ASN Error[ASN]",
          "package": "asn1-data",
          "partial": "ASN",
          "signature": "a-\u003eByteString-\u003eEither ASN Error[ASN]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Encoding.html#v:decodeASN1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edecode a strict bytestring into an ASN1 stream\n\u003c/p\u003e",
          "module": "Data.ASN1.Encoding",
          "name": "decodeASN1'",
          "package": "asn1-data",
          "signature": "a -\u003e ByteString -\u003e Either ASN1Error [ASN1]",
          "source": "src/Data-ASN1-Encoding.html#decodeASN1%27",
          "type": "function"
        },
        "index": {
          "description": "decode strict bytestring into an ASN1 stream",
          "hierarchy": "Data ASN1 Encoding",
          "module": "Data.ASN1.Encoding",
          "name": "decodeASN1'",
          "normalized": "a-\u003eByteString-\u003eEither ASN Error[ASN]",
          "package": "asn1-data",
          "partial": "ASN",
          "signature": "a-\u003eByteString-\u003eEither ASN Error[ASN]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Encoding.html#v:decodeASN1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edecode a lazy bytestring into an ASN1 stream\n\u003c/p\u003e",
          "module": "Data.ASN1.Encoding",
          "name": "decodeASN1Repr",
          "package": "asn1-data",
          "signature": "a -\u003e ByteString -\u003e Either ASN1Error [ASN1Repr]",
          "source": "src/Data-ASN1-Encoding.html#decodeASN1Repr",
          "type": "method"
        },
        "index": {
          "description": "decode lazy bytestring into an ASN1 stream",
          "hierarchy": "Data ASN1 Encoding",
          "module": "Data.ASN1.Encoding",
          "name": "decodeASN1Repr",
          "normalized": "a-\u003eByteString-\u003eEither ASN Error[ASN Repr]",
          "package": "asn1-data",
          "partial": "ASN Repr",
          "signature": "a-\u003eByteString-\u003eEither ASN Error[ASN Repr]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Encoding.html#v:decodeASN1Repr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edecode a strict bytestring into an ASN1Repr stream\n\u003c/p\u003e",
          "module": "Data.ASN1.Encoding",
          "name": "decodeASN1Repr'",
          "package": "asn1-data",
          "signature": "a -\u003e ByteString -\u003e Either ASN1Error [ASN1Repr]",
          "source": "src/Data-ASN1-Encoding.html#decodeASN1Repr%27",
          "type": "function"
        },
        "index": {
          "description": "decode strict bytestring into an ASN1Repr stream",
          "hierarchy": "Data ASN1 Encoding",
          "module": "Data.ASN1.Encoding",
          "name": "decodeASN1Repr'",
          "normalized": "a-\u003eByteString-\u003eEither ASN Error[ASN Repr]",
          "package": "asn1-data",
          "partial": "ASN Repr'",
          "signature": "a-\u003eByteString-\u003eEither ASN Error[ASN Repr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Encoding.html#v:decodeASN1Repr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eencode a stream into a lazy bytestring\n\u003c/p\u003e",
          "module": "Data.ASN1.Encoding",
          "name": "encodeASN1",
          "package": "asn1-data",
          "signature": "a -\u003e [ASN1] -\u003e ByteString",
          "source": "src/Data-ASN1-Encoding.html#encodeASN1",
          "type": "method"
        },
        "index": {
          "description": "encode stream into lazy bytestring",
          "hierarchy": "Data ASN1 Encoding",
          "module": "Data.ASN1.Encoding",
          "name": "encodeASN1",
          "normalized": "a-\u003e[ASN]-\u003eByteString",
          "package": "asn1-data",
          "partial": "ASN",
          "signature": "a-\u003e[ASN]-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Encoding.html#v:encodeASN1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eencode a stream into a strict bytestring\n\u003c/p\u003e",
          "module": "Data.ASN1.Encoding",
          "name": "encodeASN1'",
          "package": "asn1-data",
          "signature": "a -\u003e [ASN1] -\u003e ByteString",
          "source": "src/Data-ASN1-Encoding.html#encodeASN1%27",
          "type": "function"
        },
        "index": {
          "description": "encode stream into strict bytestring",
          "hierarchy": "Data ASN1 Encoding",
          "module": "Data.ASN1.Encoding",
          "name": "encodeASN1'",
          "normalized": "a-\u003e[ASN]-\u003eByteString",
          "package": "asn1-data",
          "partial": "ASN",
          "signature": "a-\u003e[ASN]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Encoding.html#v:encodeASN1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Object",
          "name": "Object",
          "package": "asn1-data",
          "source": "src/Data-ASN1-Object.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data ASN1 Object",
          "module": "Data.ASN1.Object",
          "name": "Object",
          "package": "asn1-data",
          "partial": "Object",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Object.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean object that can be marshalled from and to ASN1\n\u003c/p\u003e",
          "module": "Data.ASN1.Object",
          "name": "ASN1Object",
          "package": "asn1-data",
          "source": "src/Data-ASN1-Object.html#ASN1Object",
          "type": "class"
        },
        "index": {
          "description": "an object that can be marshalled from and to ASN1",
          "hierarchy": "Data ASN1 Object",
          "module": "Data.ASN1.Object",
          "name": "ASN1Object",
          "package": "asn1-data",
          "partial": "ASN Object",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Object.html#t:ASN1Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns either an object along the remaining ASN1 stream,\n or an error.\n\u003c/p\u003e",
          "module": "Data.ASN1.Object",
          "name": "fromASN1",
          "package": "asn1-data",
          "signature": "[ASN1] -\u003e Either String (a, [ASN1])",
          "source": "src/Data-ASN1-Object.html#fromASN1",
          "type": "method"
        },
        "index": {
          "description": "returns either an object along the remaining ASN1 stream or an error",
          "hierarchy": "Data ASN1 Object",
          "module": "Data.ASN1.Object",
          "name": "fromASN1",
          "normalized": "[ASN]-\u003eEither String(a,[ASN])",
          "package": "asn1-data",
          "partial": "ASN",
          "signature": "[ASN]-\u003eEither String(a,[ASN])",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Object.html#v:fromASN1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etransform an object into an ASN1 stream.\n\u003c/p\u003e",
          "module": "Data.ASN1.Object",
          "name": "toASN1",
          "package": "asn1-data",
          "signature": "a -\u003e [ASN1]",
          "source": "src/Data-ASN1-Object.html#toASN1",
          "type": "method"
        },
        "index": {
          "description": "transform an object into an ASN1 stream",
          "hierarchy": "Data ASN1 Object",
          "module": "Data.ASN1.Object",
          "name": "toASN1",
          "normalized": "a-\u003e[ASN]",
          "package": "asn1-data",
          "partial": "ASN",
          "signature": "a-\u003e[ASN]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Object.html#v:toASN1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Parse",
          "name": "Parse",
          "package": "asn1-data",
          "source": "src/Data-ASN1-Parse.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data ASN1 Parse",
          "module": "Data.ASN1.Parse",
          "name": "Parse",
          "package": "asn1-data",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse ASN1 Monad\n\u003c/p\u003e",
          "module": "Data.ASN1.Parse",
          "name": "ParseASN1",
          "package": "asn1-data",
          "source": "src/Data-ASN1-Parse.html#ParseASN1",
          "type": "data"
        },
        "index": {
          "description": "Parse ASN1 Monad",
          "hierarchy": "Data ASN1 Parse",
          "module": "Data.ASN1.Parse",
          "name": "ParseASN1",
          "package": "asn1-data",
          "partial": "Parse ASN",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Parse.html#t:ParseASN1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget next element from the stream\n\u003c/p\u003e",
          "module": "Data.ASN1.Parse",
          "name": "getNext",
          "package": "asn1-data",
          "signature": "ParseASN1 ASN1",
          "source": "src/Data-ASN1-Parse.html#getNext",
          "type": "function"
        },
        "index": {
          "description": "get next element from the stream",
          "hierarchy": "Data ASN1 Parse",
          "module": "Data.ASN1.Parse",
          "name": "getNext",
          "package": "asn1-data",
          "partial": "Next",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Parse.html#v:getNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget next container of specified type and return all its elements\n\u003c/p\u003e",
          "module": "Data.ASN1.Parse",
          "name": "getNextContainer",
          "package": "asn1-data",
          "signature": "ASN1ConstructionType -\u003e ParseASN1 [ASN1]",
          "source": "src/Data-ASN1-Parse.html#getNextContainer",
          "type": "function"
        },
        "index": {
          "description": "get next container of specified type and return all its elements",
          "hierarchy": "Data ASN1 Parse",
          "module": "Data.ASN1.Parse",
          "name": "getNextContainer",
          "normalized": "ASN ConstructionType-\u003eParseASN[ASN]",
          "package": "asn1-data",
          "partial": "Next Container",
          "signature": "ASN ConstructionType-\u003eParseASN[ASN]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Parse.html#v:getNextContainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ejust like getNextContainer, except it doesn't throw an error if the container doesn't exists.\n\u003c/p\u003e",
          "module": "Data.ASN1.Parse",
          "name": "getNextContainerMaybe",
          "package": "asn1-data",
          "signature": "ASN1ConstructionType -\u003e ParseASN1 (Maybe [ASN1])",
          "source": "src/Data-ASN1-Parse.html#getNextContainerMaybe",
          "type": "function"
        },
        "index": {
          "description": "just like getNextContainer except it doesn throw an error if the container doesn exists",
          "hierarchy": "Data ASN1 Parse",
          "module": "Data.ASN1.Parse",
          "name": "getNextContainerMaybe",
          "normalized": "ASN ConstructionType-\u003eParseASN(Maybe[ASN])",
          "package": "asn1-data",
          "partial": "Next Container Maybe",
          "signature": "ASN ConstructionType-\u003eParseASN(Maybe[ASN])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Parse.html#v:getNextContainerMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns if there's more elements in the stream.\n\u003c/p\u003e",
          "module": "Data.ASN1.Parse",
          "name": "hasNext",
          "package": "asn1-data",
          "signature": "ParseASN1 Bool",
          "source": "src/Data-ASN1-Parse.html#hasNext",
          "type": "function"
        },
        "index": {
          "description": "returns if there more elements in the stream",
          "hierarchy": "Data ASN1 Parse",
          "module": "Data.ASN1.Parse",
          "name": "hasNext",
          "package": "asn1-data",
          "partial": "Next",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Parse.html#v:hasNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun a function of the next elements of a container of specified type\n\u003c/p\u003e",
          "module": "Data.ASN1.Parse",
          "name": "onNextContainer",
          "package": "asn1-data",
          "signature": "ASN1ConstructionType -\u003e ParseASN1 a -\u003e ParseASN1 a",
          "source": "src/Data-ASN1-Parse.html#onNextContainer",
          "type": "function"
        },
        "index": {
          "description": "run function of the next elements of container of specified type",
          "hierarchy": "Data ASN1 Parse",
          "module": "Data.ASN1.Parse",
          "name": "onNextContainer",
          "normalized": "ASN ConstructionType-\u003eParseASN a-\u003eParseASN a",
          "package": "asn1-data",
          "partial": "Next Container",
          "signature": "ASN ConstructionType-\u003eParseASN a-\u003eParseASN a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Parse.html#v:onNextContainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ejust like onNextContainer, except it doens't throw an error if the container doesn't exists.\n\u003c/p\u003e",
          "module": "Data.ASN1.Parse",
          "name": "onNextContainerMaybe",
          "package": "asn1-data",
          "signature": "ASN1ConstructionType -\u003e ParseASN1 a -\u003e ParseASN1 (Maybe a)",
          "source": "src/Data-ASN1-Parse.html#onNextContainerMaybe",
          "type": "function"
        },
        "index": {
          "description": "just like onNextContainer except it doens throw an error if the container doesn exists",
          "hierarchy": "Data ASN1 Parse",
          "module": "Data.ASN1.Parse",
          "name": "onNextContainerMaybe",
          "normalized": "ASN ConstructionType-\u003eParseASN a-\u003eParseASN(Maybe a)",
          "package": "asn1-data",
          "partial": "Next Container Maybe",
          "signature": "ASN ConstructionType-\u003eParseASN a-\u003eParseASN(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Parse.html#v:onNextContainerMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun the parse monad over a stream and returns the result.\n\u003c/p\u003e",
          "module": "Data.ASN1.Parse",
          "name": "runParseASN1",
          "package": "asn1-data",
          "signature": "ParseASN1 a -\u003e [ASN1] -\u003e Either String a",
          "source": "src/Data-ASN1-Parse.html#runParseASN1",
          "type": "function"
        },
        "index": {
          "description": "run the parse monad over stream and returns the result",
          "hierarchy": "Data ASN1 Parse",
          "module": "Data.ASN1.Parse",
          "name": "runParseASN1",
          "normalized": "ParseASN a-\u003e[ASN]-\u003eEither String a",
          "package": "asn1-data",
          "partial": "Parse ASN",
          "signature": "ParseASN a-\u003e[ASN]-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Parse.html#v:runParseASN1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erun the parse monad over a stream and returns the result and the remaining ASN1 Stream.\n\u003c/p\u003e",
          "module": "Data.ASN1.Parse",
          "name": "runParseASN1State",
          "package": "asn1-data",
          "signature": "ParseASN1 a -\u003e [ASN1] -\u003e Either String (a, [ASN1])",
          "source": "src/Data-ASN1-Parse.html#runParseASN1State",
          "type": "function"
        },
        "index": {
          "description": "run the parse monad over stream and returns the result and the remaining ASN1 Stream",
          "hierarchy": "Data ASN1 Parse",
          "module": "Data.ASN1.Parse",
          "name": "runParseASN1State",
          "normalized": "ParseASN a-\u003e[ASN]-\u003eEither String(a,[ASN])",
          "package": "asn1-data",
          "partial": "Parse ASN State",
          "signature": "ParseASN a-\u003e[ASN]-\u003eEither String(a,[ASN])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Parse.html#v:runParseASN1State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "Stream",
          "package": "asn1-data",
          "source": "src/Data-ASN1-Stream.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "Stream",
          "package": "asn1-data",
          "partial": "Stream",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine high level ASN1 object.\n\u003c/p\u003e",
          "module": "Data.ASN1.Stream",
          "name": "ASN1",
          "package": "asn1-data",
          "source": "src/Data-ASN1-Stream.html#ASN1",
          "type": "data"
        },
        "index": {
          "description": "Define high level ASN1 object",
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "ASN1",
          "package": "asn1-data",
          "partial": "ASN",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#t:ASN1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElement class\n\u003c/p\u003e",
          "module": "Data.ASN1.Stream",
          "name": "ASN1Class",
          "package": "asn1-data",
          "source": "src/Data-ASN1-Types.html#ASN1Class",
          "type": "data"
        },
        "index": {
          "description": "Element class",
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "ASN1Class",
          "package": "asn1-data",
          "partial": "ASN Class",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#t:ASN1Class"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine the type of container\n\u003c/p\u003e",
          "module": "Data.ASN1.Stream",
          "name": "ASN1ConstructionType",
          "package": "asn1-data",
          "source": "src/Data-ASN1-Stream.html#ASN1ConstructionType",
          "type": "data"
        },
        "index": {
          "description": "Define the type of container",
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "ASN1ConstructionType",
          "package": "asn1-data",
          "partial": "ASN Construction Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#t:ASN1ConstructionType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "ASN1Repr",
          "package": "asn1-data",
          "source": "src/Data-ASN1-Stream.html#ASN1Repr",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "ASN1Repr",
          "package": "asn1-data",
          "partial": "ASN Repr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#t:ASN1Repr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eASN1 Tag\n\u003c/p\u003e",
          "module": "Data.ASN1.Stream",
          "name": "ASN1Tag",
          "package": "asn1-data",
          "source": "src/Data-ASN1-Types.html#ASN1Tag",
          "type": "type"
        },
        "index": {
          "description": "ASN1 Tag",
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "ASN1Tag",
          "package": "asn1-data",
          "partial": "ASN Tag",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#t:ASN1Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "BMPString",
          "package": "asn1-data",
          "signature": "BMPString String",
          "source": "src/Data-ASN1-Stream.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "BMPString",
          "package": "asn1-data",
          "partial": "BMPString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:BMPString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "BitString",
          "package": "asn1-data",
          "signature": "BitString BitArray",
          "source": "src/Data-ASN1-Stream.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "BitString",
          "package": "asn1-data",
          "partial": "Bit String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:BitString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "Boolean",
          "package": "asn1-data",
          "signature": "Boolean Bool",
          "source": "src/Data-ASN1-Stream.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "Boolean",
          "package": "asn1-data",
          "partial": "Boolean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:Boolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "CharacterString",
          "package": "asn1-data",
          "signature": "CharacterString ByteString",
          "source": "src/Data-ASN1-Stream.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "CharacterString",
          "package": "asn1-data",
          "partial": "Character String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:CharacterString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "Container",
          "package": "asn1-data",
          "signature": "Container ASN1Class ASN1Tag",
          "source": "src/Data-ASN1-Stream.html#ASN1ConstructionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "Container",
          "package": "asn1-data",
          "partial": "Container",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:Container"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "End",
          "package": "asn1-data",
          "signature": "End ASN1ConstructionType",
          "source": "src/Data-ASN1-Stream.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "End",
          "package": "asn1-data",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:End"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "Enumerated",
          "package": "asn1-data",
          "signature": "Enumerated",
          "source": "src/Data-ASN1-Stream.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "Enumerated",
          "package": "asn1-data",
          "partial": "Enumerated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:Enumerated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "GeneralString",
          "package": "asn1-data",
          "signature": "GeneralString ByteString",
          "source": "src/Data-ASN1-Stream.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "GeneralString",
          "package": "asn1-data",
          "partial": "General String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:GeneralString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "GeneralizedTime",
          "package": "asn1-data",
          "signature": "GeneralizedTime (Int, Int, Int, Int, Int, Int, Bool)",
          "source": "src/Data-ASN1-Stream.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "GeneralizedTime",
          "normalized": "GeneralizedTime(Int,Int,Int,Int,Int,Int,Bool)",
          "package": "asn1-data",
          "partial": "Generalized Time",
          "signature": "GeneralizedTime(Int,Int,Int,Int,Int,Int,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:GeneralizedTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "GraphicString",
          "package": "asn1-data",
          "signature": "GraphicString ByteString",
          "source": "src/Data-ASN1-Stream.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "GraphicString",
          "package": "asn1-data",
          "partial": "Graphic String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:GraphicString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "IA5String",
          "package": "asn1-data",
          "signature": "IA5String String",
          "source": "src/Data-ASN1-Stream.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "IA5String",
          "package": "asn1-data",
          "partial": "IA String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:IA5String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "IntVal",
          "package": "asn1-data",
          "signature": "IntVal Integer",
          "source": "src/Data-ASN1-Stream.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "IntVal",
          "package": "asn1-data",
          "partial": "Int Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:IntVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "Null",
          "package": "asn1-data",
          "signature": "Null",
          "source": "src/Data-ASN1-Stream.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "Null",
          "package": "asn1-data",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:Null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "NumericString",
          "package": "asn1-data",
          "signature": "NumericString ByteString",
          "source": "src/Data-ASN1-Stream.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "NumericString",
          "package": "asn1-data",
          "partial": "Numeric String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:NumericString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "OID",
          "package": "asn1-data",
          "signature": "OID [Integer]",
          "source": "src/Data-ASN1-Stream.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "OID",
          "normalized": "OID[Integer]",
          "package": "asn1-data",
          "partial": "OID",
          "signature": "OID[Integer]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:OID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "OctetString",
          "package": "asn1-data",
          "signature": "OctetString ByteString",
          "source": "src/Data-ASN1-Stream.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "OctetString",
          "package": "asn1-data",
          "partial": "Octet String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:OctetString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "Other",
          "package": "asn1-data",
          "signature": "Other ASN1Class ASN1Tag ByteString",
          "source": "src/Data-ASN1-Stream.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "Other",
          "package": "asn1-data",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:Other"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "PrintableString",
          "package": "asn1-data",
          "signature": "PrintableString String",
          "source": "src/Data-ASN1-Stream.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "PrintableString",
          "package": "asn1-data",
          "partial": "Printable String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:PrintableString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "Real",
          "package": "asn1-data",
          "signature": "Real Double",
          "source": "src/Data-ASN1-Stream.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "Real",
          "package": "asn1-data",
          "partial": "Real",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:Real"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "Sequence",
          "package": "asn1-data",
          "signature": "Sequence",
          "source": "src/Data-ASN1-Stream.html#ASN1ConstructionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "Sequence",
          "package": "asn1-data",
          "partial": "Sequence",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:Sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "Set",
          "package": "asn1-data",
          "signature": "Set",
          "source": "src/Data-ASN1-Stream.html#ASN1ConstructionType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "Set",
          "package": "asn1-data",
          "partial": "Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:Set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "Start",
          "package": "asn1-data",
          "signature": "Start ASN1ConstructionType",
          "source": "src/Data-ASN1-Stream.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "Start",
          "package": "asn1-data",
          "partial": "Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:Start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "T61String",
          "package": "asn1-data",
          "signature": "T61String String",
          "source": "src/Data-ASN1-Stream.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "T61String",
          "package": "asn1-data",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:T61String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "UTCTime",
          "package": "asn1-data",
          "signature": "UTCTime (Int, Int, Int, Int, Int, Int, Bool)",
          "source": "src/Data-ASN1-Stream.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "UTCTime",
          "normalized": "UTCTime(Int,Int,Int,Int,Int,Int,Bool)",
          "package": "asn1-data",
          "partial": "UTCTime",
          "signature": "UTCTime(Int,Int,Int,Int,Int,Int,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:UTCTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "UTF8String",
          "package": "asn1-data",
          "signature": "UTF8String String",
          "source": "src/Data-ASN1-Stream.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "UTF8String",
          "package": "asn1-data",
          "partial": "UTF String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:UTF8String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "UniversalString",
          "package": "asn1-data",
          "signature": "UniversalString String",
          "source": "src/Data-ASN1-Stream.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "UniversalString",
          "package": "asn1-data",
          "partial": "Universal String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:UniversalString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "VideoTexString",
          "package": "asn1-data",
          "signature": "VideoTexString ByteString",
          "source": "src/Data-ASN1-Stream.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "VideoTexString",
          "package": "asn1-data",
          "partial": "Video Tex String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:VideoTexString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "VisibleString",
          "package": "asn1-data",
          "signature": "VisibleString ByteString",
          "source": "src/Data-ASN1-Stream.html#ASN1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "VisibleString",
          "package": "asn1-data",
          "partial": "Visible String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:VisibleString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "getConstructedEnd",
          "package": "asn1-data",
          "signature": "Int -\u003e [ASN1] -\u003e ([ASN1], [ASN1])",
          "source": "src/Data-ASN1-Stream.html#getConstructedEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "getConstructedEnd",
          "normalized": "Int-\u003e[ASN]-\u003e([ASN],[ASN])",
          "package": "asn1-data",
          "partial": "Constructed End",
          "signature": "Int-\u003e[ASN]-\u003e([ASN],[ASN])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:getConstructedEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "getConstructedEndRepr",
          "package": "asn1-data",
          "signature": "[ASN1Repr] -\u003e ([ASN1Repr], [ASN1Repr])",
          "source": "src/Data-ASN1-Stream.html#getConstructedEndRepr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "getConstructedEndRepr",
          "normalized": "[ASN Repr]-\u003e([ASN Repr],[ASN Repr])",
          "package": "asn1-data",
          "partial": "Constructed End Repr",
          "signature": "[ASN Repr]-\u003e([ASN Repr],[ASN Repr])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Stream.html#v:getConstructedEndRepr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Types",
          "name": "Types",
          "package": "asn1-data",
          "source": "src/Data-ASN1-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "Types",
          "package": "asn1-data",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElement class\n\u003c/p\u003e",
          "module": "Data.ASN1.Types",
          "name": "ASN1Class",
          "package": "asn1-data",
          "source": "src/Data-ASN1-Types.html#ASN1Class",
          "type": "data"
        },
        "index": {
          "description": "Element class",
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "ASN1Class",
          "package": "asn1-data",
          "partial": "ASN Class",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Types.html#t:ASN1Class"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossible errors during parsing operations\n\u003c/p\u003e",
          "module": "Data.ASN1.Types",
          "name": "ASN1Error",
          "package": "asn1-data",
          "source": "src/Data-ASN1-Types.html#ASN1Error",
          "type": "data"
        },
        "index": {
          "description": "Possible errors during parsing operations",
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "ASN1Error",
          "package": "asn1-data",
          "partial": "ASN Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Types.html#t:ASN1Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erepresent one event from an asn1 data stream\n\u003c/p\u003e",
          "module": "Data.ASN1.Types",
          "name": "ASN1Event",
          "package": "asn1-data",
          "source": "src/Data-ASN1-Types.html#ASN1Event",
          "type": "data"
        },
        "index": {
          "description": "represent one event from an asn1 data stream",
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "ASN1Event",
          "package": "asn1-data",
          "partial": "ASN Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Types.html#t:ASN1Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eASN1 Header with the class, tag, constructed flag and length.\n\u003c/p\u003e",
          "module": "Data.ASN1.Types",
          "name": "ASN1Header",
          "package": "asn1-data",
          "source": "src/Data-ASN1-Types.html#ASN1Header",
          "type": "data"
        },
        "index": {
          "description": "ASN1 Header with the class tag constructed flag and length",
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "ASN1Header",
          "package": "asn1-data",
          "partial": "ASN Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Types.html#t:ASN1Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eASN1 Length with all different formats\n\u003c/p\u003e",
          "module": "Data.ASN1.Types",
          "name": "ASN1Length",
          "package": "asn1-data",
          "source": "src/Data-ASN1-Types.html#ASN1Length",
          "type": "data"
        },
        "index": {
          "description": "ASN1 Length with all different formats",
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "ASN1Length",
          "package": "asn1-data",
          "partial": "ASN Length",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Types.html#t:ASN1Length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eASN1 Tag\n\u003c/p\u003e",
          "module": "Data.ASN1.Types",
          "name": "ASN1Tag",
          "package": "asn1-data",
          "source": "src/Data-ASN1-Types.html#ASN1Tag",
          "type": "type"
        },
        "index": {
          "description": "ASN1 Tag",
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "ASN1Tag",
          "package": "asn1-data",
          "partial": "ASN Tag",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Types.html#t:ASN1Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing an invalid header.\n\u003c/p\u003e",
          "module": "Data.ASN1.Types",
          "name": "ParsingHeaderFail",
          "package": "asn1-data",
          "signature": "ParsingHeaderFail String",
          "source": "src/Data-ASN1-Types.html#ASN1Error",
          "type": "function"
        },
        "index": {
          "description": "Parsing an invalid header",
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "ParsingHeaderFail",
          "package": "asn1-data",
          "partial": "Parsing Header Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Types.html#v:ParsingHeaderFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing is not finished, there is construction unended.\n\u003c/p\u003e",
          "module": "Data.ASN1.Types",
          "name": "ParsingPartial",
          "package": "asn1-data",
          "signature": "ParsingPartial",
          "source": "src/Data-ASN1-Types.html#ASN1Error",
          "type": "function"
        },
        "index": {
          "description": "Parsing is not finished there is construction unended",
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "ParsingPartial",
          "package": "asn1-data",
          "partial": "Parsing Partial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Types.html#v:ParsingPartial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolicy failed including the name of the policy and the reason.\n\u003c/p\u003e",
          "module": "Data.ASN1.Types",
          "name": "PolicyFailed",
          "package": "asn1-data",
          "signature": "PolicyFailed String String",
          "source": "src/Data-ASN1-Types.html#ASN1Error",
          "type": "function"
        },
        "index": {
          "description": "Policy failed including the name of the policy and the reason",
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "PolicyFailed",
          "package": "asn1-data",
          "partial": "Policy Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Types.html#v:PolicyFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA construction goes over the size specified in the header.\n\u003c/p\u003e",
          "module": "Data.ASN1.Types",
          "name": "StreamConstructionWrongSize",
          "package": "asn1-data",
          "signature": "StreamConstructionWrongSize",
          "source": "src/Data-ASN1-Types.html#ASN1Error",
          "type": "function"
        },
        "index": {
          "description": "construction goes over the size specified in the header",
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "StreamConstructionWrongSize",
          "package": "asn1-data",
          "partial": "Stream Construction Wrong Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Types.html#v:StreamConstructionWrongSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvalid primitive with infinite length in a stream.\n\u003c/p\u003e",
          "module": "Data.ASN1.Types",
          "name": "StreamInfinitePrimitive",
          "package": "asn1-data",
          "signature": "StreamInfinitePrimitive",
          "source": "src/Data-ASN1-Types.html#ASN1Error",
          "type": "function"
        },
        "index": {
          "description": "Invalid primitive with infinite length in stream",
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "StreamInfinitePrimitive",
          "package": "asn1-data",
          "partial": "Stream Infinite Primitive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Types.html#v:StreamInfinitePrimitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnexpected EOC in the stream.\n\u003c/p\u003e",
          "module": "Data.ASN1.Types",
          "name": "StreamUnexpectedEOC",
          "package": "asn1-data",
          "signature": "StreamUnexpectedEOC",
          "source": "src/Data-ASN1-Types.html#ASN1Error",
          "type": "function"
        },
        "index": {
          "description": "Unexpected EOC in the stream",
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "StreamUnexpectedEOC",
          "package": "asn1-data",
          "partial": "Stream Unexpected EOC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Types.html#v:StreamUnexpectedEOC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unexpected situation has come up parsing an ASN1 event stream.\n\u003c/p\u003e",
          "module": "Data.ASN1.Types",
          "name": "StreamUnexpectedSituation",
          "package": "asn1-data",
          "signature": "StreamUnexpectedSituation String",
          "source": "src/Data-ASN1-Types.html#ASN1Error",
          "type": "function"
        },
        "index": {
          "description": "An unexpected situation has come up parsing an ASN1 event stream",
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "StreamUnexpectedSituation",
          "package": "asn1-data",
          "partial": "Stream Unexpected Situation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Types.html#v:StreamUnexpectedSituation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoding of a knowed type failed.\n\u003c/p\u003e",
          "module": "Data.ASN1.Types",
          "name": "TypeDecodingFailed",
          "package": "asn1-data",
          "signature": "TypeDecodingFailed String",
          "source": "src/Data-ASN1-Types.html#ASN1Error",
          "type": "function"
        },
        "index": {
          "description": "Decoding of knowed type failed",
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "TypeDecodingFailed",
          "package": "asn1-data",
          "partial": "Type Decoding Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Types.html#v:TypeDecodingFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoding of a type that is not implemented. Contribution welcome.\n\u003c/p\u003e",
          "module": "Data.ASN1.Types",
          "name": "TypeNotImplemented",
          "package": "asn1-data",
          "signature": "TypeNotImplemented String",
          "source": "src/Data-ASN1-Types.html#ASN1Error",
          "type": "function"
        },
        "index": {
          "description": "Decoding of type that is not implemented Contribution welcome",
          "hierarchy": "Data ASN1 Types",
          "module": "Data.ASN1.Types",
          "name": "TypeNotImplemented",
          "package": "asn1-data",
          "partial": "Type Not Implemented",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-data/docs/Data-ASN1-Types.html#v:TypeNotImplemented"
      }
    }
  ]
]