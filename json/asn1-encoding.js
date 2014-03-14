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
        "word": "asn1-encoding"
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
          "package": "asn1-encoding",
          "source": "src/Data-ASN1-BinaryEncoding-Raw.html",
          "type": "module"
        },
        "index": {
          "description": "Raw encoding of binary format BER DER CER",
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "Raw",
          "package": "asn1-encoding",
          "partial": "Raw",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-BinaryEncoding-Raw.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElement class\n\u003c/p\u003e",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "ASN1Class",
          "package": "asn1-encoding",
          "type": "data"
        },
        "index": {
          "description": "Element class",
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "ASN1Class",
          "package": "asn1-encoding",
          "partial": "ASN Class",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-BinaryEncoding-Raw.html#t:ASN1Class"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erepresent one event from an asn1 data stream\n\u003c/p\u003e",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "ASN1Event",
          "package": "asn1-encoding",
          "type": "data"
        },
        "index": {
          "description": "represent one event from an asn1 data stream",
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "ASN1Event",
          "package": "asn1-encoding",
          "partial": "ASN Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-BinaryEncoding-Raw.html#t:ASN1Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eASN1 Header with the class, tag, constructed flag and length.\n\u003c/p\u003e",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "ASN1Header",
          "package": "asn1-encoding",
          "type": "data"
        },
        "index": {
          "description": "ASN1 Header with the class tag constructed flag and length",
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "ASN1Header",
          "package": "asn1-encoding",
          "partial": "ASN Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-BinaryEncoding-Raw.html#t:ASN1Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eASN1 Length with all different formats\n\u003c/p\u003e",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "ASN1Length",
          "package": "asn1-encoding",
          "type": "data"
        },
        "index": {
          "description": "ASN1 Length with all different formats",
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "ASN1Length",
          "package": "asn1-encoding",
          "partial": "ASN Length",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-BinaryEncoding-Raw.html#t:ASN1Length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eASN1 Tag\n\u003c/p\u003e",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "ASN1Tag",
          "package": "asn1-encoding",
          "type": "type"
        },
        "index": {
          "description": "ASN1 Tag",
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "ASN1Tag",
          "package": "asn1-encoding",
          "partial": "ASN Tag",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-BinaryEncoding-Raw.html#t:ASN1Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "ASN1Header",
          "package": "asn1-encoding",
          "signature": "ASN1Header !ASN1Class !ASN1Tag !Bool !ASN1Length",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "ASN1Header",
          "package": "asn1-encoding",
          "partial": "ASN Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-BinaryEncoding-Raw.html#v:ASN1Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "Application",
          "package": "asn1-encoding",
          "signature": "Application",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "Application",
          "package": "asn1-encoding",
          "partial": "Application",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-BinaryEncoding-Raw.html#v:Application"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructed value start\n\u003c/p\u003e",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "ConstructionBegin",
          "package": "asn1-encoding",
          "signature": "ConstructionBegin",
          "type": "function"
        },
        "index": {
          "description": "Constructed value start",
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "ConstructionBegin",
          "package": "asn1-encoding",
          "partial": "Construction Begin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-BinaryEncoding-Raw.html#v:ConstructionBegin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructed value end\n\u003c/p\u003e",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "ConstructionEnd",
          "package": "asn1-encoding",
          "signature": "ConstructionEnd",
          "type": "function"
        },
        "index": {
          "description": "Constructed value end",
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "ConstructionEnd",
          "package": "asn1-encoding",
          "partial": "Construction End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-BinaryEncoding-Raw.html#v:ConstructionEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "Context",
          "package": "asn1-encoding",
          "signature": "Context",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "Context",
          "package": "asn1-encoding",
          "partial": "Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-BinaryEncoding-Raw.html#v:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eASN1 Header\n\u003c/p\u003e",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "Header",
          "package": "asn1-encoding",
          "signature": "Header ASN1Header",
          "type": "function"
        },
        "index": {
          "description": "ASN1 Header",
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "Header",
          "package": "asn1-encoding",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-BinaryEncoding-Raw.html#v:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength is indefinite expect an EOC in the stream to finish the type\n\u003c/p\u003e",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "LenIndefinite",
          "package": "asn1-encoding",
          "signature": "LenIndefinite",
          "type": "function"
        },
        "index": {
          "description": "Length is indefinite expect an EOC in the stream to finish the type",
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "LenIndefinite",
          "package": "asn1-encoding",
          "partial": "Len Indefinite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-BinaryEncoding-Raw.html#v:LenIndefinite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLong form of N bytes\n\u003c/p\u003e",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "LenLong",
          "package": "asn1-encoding",
          "signature": "LenLong Int Int",
          "type": "function"
        },
        "index": {
          "description": "Long form of bytes",
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "LenLong",
          "package": "asn1-encoding",
          "partial": "Len Long",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-BinaryEncoding-Raw.html#v:LenLong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort form with only one byte. length has to be \u003c 127.\n\u003c/p\u003e",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "LenShort",
          "package": "asn1-encoding",
          "signature": "LenShort Int",
          "type": "function"
        },
        "index": {
          "description": "Short form with only one byte length has to be",
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "LenShort",
          "package": "asn1-encoding",
          "partial": "Len Short",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-BinaryEncoding-Raw.html#v:LenShort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrimitive\n\u003c/p\u003e",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "Primitive",
          "package": "asn1-encoding",
          "signature": "Primitive !ByteString",
          "type": "function"
        },
        "index": {
          "description": "Primitive",
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "Primitive",
          "package": "asn1-encoding",
          "partial": "Primitive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-BinaryEncoding-Raw.html#v:Primitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "Private",
          "package": "asn1-encoding",
          "signature": "Private",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "Private",
          "package": "asn1-encoding",
          "partial": "Private",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-BinaryEncoding-Raw.html#v:Private"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "Universal",
          "package": "asn1-encoding",
          "signature": "Universal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 BinaryEncoding Raw",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "Universal",
          "package": "asn1-encoding",
          "partial": "Universal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-BinaryEncoding-Raw.html#v:Universal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse one strict bytestring and returns on success all ASN1 events associated.\n\u003c/p\u003e",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "parseBS",
          "package": "asn1-encoding",
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
          "package": "asn1-encoding",
          "partial": "BS",
          "signature": "ByteString-\u003eEither ASN Error[ASN Event]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-BinaryEncoding-Raw.html#v:parseBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse one lazy bytestring and returns on success all ASN1 events associated.\n\u003c/p\u003e",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "parseLBS",
          "package": "asn1-encoding",
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
          "package": "asn1-encoding",
          "partial": "LBS",
          "signature": "ByteString-\u003eEither ASN Error[ASN Event]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-BinaryEncoding-Raw.html#v:parseLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etransform a list of ASN1 Events into a strict bytestring\n\u003c/p\u003e",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "toByteString",
          "package": "asn1-encoding",
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
          "package": "asn1-encoding",
          "partial": "Byte String",
          "signature": "[ASN Event]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-BinaryEncoding-Raw.html#v:toByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etransform a list of ASN1 Events into a lazy bytestring\n\u003c/p\u003e",
          "module": "Data.ASN1.BinaryEncoding.Raw",
          "name": "toLazyByteString",
          "package": "asn1-encoding",
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
          "package": "asn1-encoding",
          "partial": "Lazy Byte String",
          "signature": "[ASN Event]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-BinaryEncoding-Raw.html#v:toLazyByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing ASN1 BER and DER specification encoding/decoding.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ASN1.BinaryEncoding",
          "name": "BinaryEncoding",
          "package": "asn1-encoding",
          "source": "src/Data-ASN1-BinaryEncoding.html",
          "type": "module"
        },
        "index": {
          "description": "module containing ASN1 BER and DER specification encoding decoding",
          "hierarchy": "Data ASN1 BinaryEncoding",
          "module": "Data.ASN1.BinaryEncoding",
          "name": "BinaryEncoding",
          "package": "asn1-encoding",
          "partial": "Binary Encoding",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-BinaryEncoding.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic Encoding Rules (BER)\n\u003c/p\u003e",
          "module": "Data.ASN1.BinaryEncoding",
          "name": "BER",
          "package": "asn1-encoding",
          "source": "src/Data-ASN1-BinaryEncoding.html#BER",
          "type": "data"
        },
        "index": {
          "description": "Basic Encoding Rules BER",
          "hierarchy": "Data ASN1 BinaryEncoding",
          "module": "Data.ASN1.BinaryEncoding",
          "name": "BER",
          "package": "asn1-encoding",
          "partial": "BER",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-BinaryEncoding.html#t:BER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistinguished Encoding Rules (DER)\n\u003c/p\u003e",
          "module": "Data.ASN1.BinaryEncoding",
          "name": "DER",
          "package": "asn1-encoding",
          "source": "src/Data-ASN1-BinaryEncoding.html#DER",
          "type": "data"
        },
        "index": {
          "description": "Distinguished Encoding Rules DER",
          "hierarchy": "Data ASN1 BinaryEncoding",
          "module": "Data.ASN1.BinaryEncoding",
          "name": "DER",
          "package": "asn1-encoding",
          "partial": "DER",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-BinaryEncoding.html#t:DER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.BinaryEncoding",
          "name": "BER",
          "package": "asn1-encoding",
          "signature": "BER",
          "source": "src/Data-ASN1-BinaryEncoding.html#BER",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 BinaryEncoding",
          "module": "Data.ASN1.BinaryEncoding",
          "name": "BER",
          "package": "asn1-encoding",
          "partial": "BER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-BinaryEncoding.html#v:BER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.BinaryEncoding",
          "name": "DER",
          "package": "asn1-encoding",
          "signature": "DER",
          "source": "src/Data-ASN1-BinaryEncoding.html#DER",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 BinaryEncoding",
          "module": "Data.ASN1.BinaryEncoding",
          "name": "DER",
          "package": "asn1-encoding",
          "partial": "DER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-BinaryEncoding.html#v:DER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Encoding",
          "name": "Encoding",
          "package": "asn1-encoding",
          "source": "src/Data-ASN1-Encoding.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data ASN1 Encoding",
          "module": "Data.ASN1.Encoding",
          "name": "Encoding",
          "package": "asn1-encoding",
          "partial": "Encoding",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-Encoding.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribe an ASN1 decoding, that transform a bytestream into an asn1stream\n\u003c/p\u003e",
          "module": "Data.ASN1.Encoding",
          "name": "ASN1Decoding",
          "package": "asn1-encoding",
          "source": "src/Data-ASN1-Encoding.html#ASN1Decoding",
          "type": "class"
        },
        "index": {
          "description": "Describe an ASN1 decoding that transform bytestream into an asn1stream",
          "hierarchy": "Data ASN1 Encoding",
          "module": "Data.ASN1.Encoding",
          "name": "ASN1Decoding",
          "package": "asn1-encoding",
          "partial": "ASN Decoding",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-Encoding.html#t:ASN1Decoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etransition class.\n\u003c/p\u003e",
          "module": "Data.ASN1.Encoding",
          "name": "ASN1DecodingRepr",
          "package": "asn1-encoding",
          "source": "src/Data-ASN1-Encoding.html#ASN1DecodingRepr",
          "type": "class"
        },
        "index": {
          "description": "transition class",
          "hierarchy": "Data ASN1 Encoding",
          "module": "Data.ASN1.Encoding",
          "name": "ASN1DecodingRepr",
          "package": "asn1-encoding",
          "partial": "ASN Decoding Repr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-Encoding.html#t:ASN1DecodingRepr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribe an ASN1 encoding, that transform an asn1stream into a bytestream\n\u003c/p\u003e",
          "module": "Data.ASN1.Encoding",
          "name": "ASN1Encoding",
          "package": "asn1-encoding",
          "source": "src/Data-ASN1-Encoding.html#ASN1Encoding",
          "type": "class"
        },
        "index": {
          "description": "Describe an ASN1 encoding that transform an asn1stream into bytestream",
          "hierarchy": "Data ASN1 Encoding",
          "module": "Data.ASN1.Encoding",
          "name": "ASN1Encoding",
          "package": "asn1-encoding",
          "partial": "ASN Encoding",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-Encoding.html#t:ASN1Encoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edecode a lazy bytestring into an ASN1 stream\n\u003c/p\u003e",
          "module": "Data.ASN1.Encoding",
          "name": "decodeASN1",
          "package": "asn1-encoding",
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
          "package": "asn1-encoding",
          "partial": "ASN",
          "signature": "a-\u003eByteString-\u003eEither ASN Error[ASN]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-Encoding.html#v:decodeASN1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edecode a strict bytestring into an ASN1 stream\n\u003c/p\u003e",
          "module": "Data.ASN1.Encoding",
          "name": "decodeASN1'",
          "package": "asn1-encoding",
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
          "package": "asn1-encoding",
          "partial": "ASN",
          "signature": "a-\u003eByteString-\u003eEither ASN Error[ASN]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-Encoding.html#v:decodeASN1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edecode a lazy bytestring into an ASN1 stream\n\u003c/p\u003e",
          "module": "Data.ASN1.Encoding",
          "name": "decodeASN1Repr",
          "package": "asn1-encoding",
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
          "package": "asn1-encoding",
          "partial": "ASN Repr",
          "signature": "a-\u003eByteString-\u003eEither ASN Error[ASN Repr]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-Encoding.html#v:decodeASN1Repr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edecode a strict bytestring into an ASN1Repr stream\n\u003c/p\u003e",
          "module": "Data.ASN1.Encoding",
          "name": "decodeASN1Repr'",
          "package": "asn1-encoding",
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
          "package": "asn1-encoding",
          "partial": "ASN Repr'",
          "signature": "a-\u003eByteString-\u003eEither ASN Error[ASN Repr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-Encoding.html#v:decodeASN1Repr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eencode a stream into a lazy bytestring\n\u003c/p\u003e",
          "module": "Data.ASN1.Encoding",
          "name": "encodeASN1",
          "package": "asn1-encoding",
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
          "package": "asn1-encoding",
          "partial": "ASN",
          "signature": "a-\u003e[ASN]-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-Encoding.html#v:encodeASN1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eencode a stream into a strict bytestring\n\u003c/p\u003e",
          "module": "Data.ASN1.Encoding",
          "name": "encodeASN1'",
          "package": "asn1-encoding",
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
          "package": "asn1-encoding",
          "partial": "ASN",
          "signature": "a-\u003e[ASN]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-Encoding.html#v:encodeASN1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Error",
          "name": "Error",
          "package": "asn1-encoding",
          "source": "src/Data-ASN1-Error.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data ASN1 Error",
          "module": "Data.ASN1.Error",
          "name": "Error",
          "package": "asn1-encoding",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossible errors during parsing operations\n\u003c/p\u003e",
          "module": "Data.ASN1.Error",
          "name": "ASN1Error",
          "package": "asn1-encoding",
          "source": "src/Data-ASN1-Error.html#ASN1Error",
          "type": "data"
        },
        "index": {
          "description": "Possible errors during parsing operations",
          "hierarchy": "Data ASN1 Error",
          "module": "Data.ASN1.Error",
          "name": "ASN1Error",
          "package": "asn1-encoding",
          "partial": "ASN Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-Error.html#t:ASN1Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing an invalid header.\n\u003c/p\u003e",
          "module": "Data.ASN1.Error",
          "name": "ParsingHeaderFail",
          "package": "asn1-encoding",
          "signature": "ParsingHeaderFail String",
          "source": "src/Data-ASN1-Error.html#ASN1Error",
          "type": "function"
        },
        "index": {
          "description": "Parsing an invalid header",
          "hierarchy": "Data ASN1 Error",
          "module": "Data.ASN1.Error",
          "name": "ParsingHeaderFail",
          "package": "asn1-encoding",
          "partial": "Parsing Header Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-Error.html#v:ParsingHeaderFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing is not finished, there is construction unended.\n\u003c/p\u003e",
          "module": "Data.ASN1.Error",
          "name": "ParsingPartial",
          "package": "asn1-encoding",
          "signature": "ParsingPartial",
          "source": "src/Data-ASN1-Error.html#ASN1Error",
          "type": "function"
        },
        "index": {
          "description": "Parsing is not finished there is construction unended",
          "hierarchy": "Data ASN1 Error",
          "module": "Data.ASN1.Error",
          "name": "ParsingPartial",
          "package": "asn1-encoding",
          "partial": "Parsing Partial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-Error.html#v:ParsingPartial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolicy failed including the name of the policy and the reason.\n\u003c/p\u003e",
          "module": "Data.ASN1.Error",
          "name": "PolicyFailed",
          "package": "asn1-encoding",
          "signature": "PolicyFailed String String",
          "source": "src/Data-ASN1-Error.html#ASN1Error",
          "type": "function"
        },
        "index": {
          "description": "Policy failed including the name of the policy and the reason",
          "hierarchy": "Data ASN1 Error",
          "module": "Data.ASN1.Error",
          "name": "PolicyFailed",
          "package": "asn1-encoding",
          "partial": "Policy Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-Error.html#v:PolicyFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA construction goes over the size specified in the header.\n\u003c/p\u003e",
          "module": "Data.ASN1.Error",
          "name": "StreamConstructionWrongSize",
          "package": "asn1-encoding",
          "signature": "StreamConstructionWrongSize",
          "source": "src/Data-ASN1-Error.html#ASN1Error",
          "type": "function"
        },
        "index": {
          "description": "construction goes over the size specified in the header",
          "hierarchy": "Data ASN1 Error",
          "module": "Data.ASN1.Error",
          "name": "StreamConstructionWrongSize",
          "package": "asn1-encoding",
          "partial": "Stream Construction Wrong Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-Error.html#v:StreamConstructionWrongSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvalid primitive with infinite length in a stream.\n\u003c/p\u003e",
          "module": "Data.ASN1.Error",
          "name": "StreamInfinitePrimitive",
          "package": "asn1-encoding",
          "signature": "StreamInfinitePrimitive",
          "source": "src/Data-ASN1-Error.html#ASN1Error",
          "type": "function"
        },
        "index": {
          "description": "Invalid primitive with infinite length in stream",
          "hierarchy": "Data ASN1 Error",
          "module": "Data.ASN1.Error",
          "name": "StreamInfinitePrimitive",
          "package": "asn1-encoding",
          "partial": "Stream Infinite Primitive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-Error.html#v:StreamInfinitePrimitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnexpected EOC in the stream.\n\u003c/p\u003e",
          "module": "Data.ASN1.Error",
          "name": "StreamUnexpectedEOC",
          "package": "asn1-encoding",
          "signature": "StreamUnexpectedEOC",
          "source": "src/Data-ASN1-Error.html#ASN1Error",
          "type": "function"
        },
        "index": {
          "description": "Unexpected EOC in the stream",
          "hierarchy": "Data ASN1 Error",
          "module": "Data.ASN1.Error",
          "name": "StreamUnexpectedEOC",
          "package": "asn1-encoding",
          "partial": "Stream Unexpected EOC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-Error.html#v:StreamUnexpectedEOC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unexpected situation has come up parsing an ASN1 event stream.\n\u003c/p\u003e",
          "module": "Data.ASN1.Error",
          "name": "StreamUnexpectedSituation",
          "package": "asn1-encoding",
          "signature": "StreamUnexpectedSituation String",
          "source": "src/Data-ASN1-Error.html#ASN1Error",
          "type": "function"
        },
        "index": {
          "description": "An unexpected situation has come up parsing an ASN1 event stream",
          "hierarchy": "Data ASN1 Error",
          "module": "Data.ASN1.Error",
          "name": "StreamUnexpectedSituation",
          "package": "asn1-encoding",
          "partial": "Stream Unexpected Situation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-Error.html#v:StreamUnexpectedSituation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoding of a knowed type failed.\n\u003c/p\u003e",
          "module": "Data.ASN1.Error",
          "name": "TypeDecodingFailed",
          "package": "asn1-encoding",
          "signature": "TypeDecodingFailed String",
          "source": "src/Data-ASN1-Error.html#ASN1Error",
          "type": "function"
        },
        "index": {
          "description": "Decoding of knowed type failed",
          "hierarchy": "Data ASN1 Error",
          "module": "Data.ASN1.Error",
          "name": "TypeDecodingFailed",
          "package": "asn1-encoding",
          "partial": "Type Decoding Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-Error.html#v:TypeDecodingFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoding of a type that is not implemented. Contribution welcome.\n\u003c/p\u003e",
          "module": "Data.ASN1.Error",
          "name": "TypeNotImplemented",
          "package": "asn1-encoding",
          "signature": "TypeNotImplemented String",
          "source": "src/Data-ASN1-Error.html#ASN1Error",
          "type": "function"
        },
        "index": {
          "description": "Decoding of type that is not implemented Contribution welcome",
          "hierarchy": "Data ASN1 Error",
          "module": "Data.ASN1.Error",
          "name": "TypeNotImplemented",
          "package": "asn1-encoding",
          "partial": "Type Not Implemented",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-Error.html#v:TypeNotImplemented"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.ASN1.Types instead\n\u003c/p\u003e\u003c/div\u003e\u003c/div\u003e",
          "module": "Data.ASN1.Object",
          "name": "Object",
          "package": "asn1-encoding",
          "source": "src/Data-ASN1-Object.html",
          "type": "module"
        },
        "index": {
          "description": "Deprecated Use Data.ASN1.Types instead",
          "hierarchy": "Data ASN1 Object",
          "module": "Data.ASN1.Object",
          "name": "Object",
          "package": "asn1-encoding",
          "partial": "Object",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-Object.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine an object that can be converted to and from ASN.1\n\u003c/p\u003e",
          "module": "Data.ASN1.Object",
          "name": "ASN1Object",
          "package": "asn1-encoding",
          "type": "class"
        },
        "index": {
          "description": "Define an object that can be converted to and from ASN.1",
          "hierarchy": "Data ASN1 Object",
          "module": "Data.ASN1.Object",
          "name": "ASN1Object",
          "package": "asn1-encoding",
          "partial": "ASN Object",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-Object.html#t:ASN1Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns either an object along the remaining ASN1 stream,\n or an error.\n\u003c/p\u003e",
          "module": "Data.ASN1.Object",
          "name": "fromASN1",
          "package": "asn1-encoding",
          "signature": "[ASN1] -\u003e Either String (a, [ASN1])",
          "type": "method"
        },
        "index": {
          "description": "returns either an object along the remaining ASN1 stream or an error",
          "hierarchy": "Data ASN1 Object",
          "module": "Data.ASN1.Object",
          "name": "fromASN1",
          "normalized": "[ASN]-\u003eEither String(a,[ASN])",
          "package": "asn1-encoding",
          "partial": "ASN",
          "signature": "[ASN]-\u003eEither String(a,[ASN])",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-Object.html#v:fromASN1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etransform an object into a chunk of ASN1 stream.\n\u003c/p\u003e",
          "module": "Data.ASN1.Object",
          "name": "toASN1",
          "package": "asn1-encoding",
          "signature": "a -\u003e ASN1S",
          "type": "method"
        },
        "index": {
          "description": "transform an object into chunk of ASN1 stream",
          "hierarchy": "Data ASN1 Object",
          "module": "Data.ASN1.Object",
          "name": "toASN1",
          "normalized": "a-\u003eASN S",
          "package": "asn1-encoding",
          "partial": "ASN",
          "signature": "a-\u003eASN S",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-Object.html#v:toASN1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "Stream",
          "package": "asn1-encoding",
          "source": "src/Data-ASN1-Stream.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "Stream",
          "package": "asn1-encoding",
          "partial": "Stream",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-Stream.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "ASN1Repr",
          "package": "asn1-encoding",
          "source": "src/Data-ASN1-Stream.html#ASN1Repr",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "ASN1Repr",
          "package": "asn1-encoding",
          "partial": "ASN Repr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-Stream.html#t:ASN1Repr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "getConstructedEnd",
          "package": "asn1-encoding",
          "signature": "Int -\u003e [ASN1] -\u003e ([ASN1], [ASN1])",
          "source": "src/Data-ASN1-Stream.html#getConstructedEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "getConstructedEnd",
          "normalized": "Int-\u003e[ASN]-\u003e([ASN],[ASN])",
          "package": "asn1-encoding",
          "partial": "Constructed End",
          "signature": "Int-\u003e[ASN]-\u003e([ASN],[ASN])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-Stream.html#v:getConstructedEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ASN1.Stream",
          "name": "getConstructedEndRepr",
          "package": "asn1-encoding",
          "signature": "[ASN1Repr] -\u003e ([ASN1Repr], [ASN1Repr])",
          "source": "src/Data-ASN1-Stream.html#getConstructedEndRepr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ASN1 Stream",
          "module": "Data.ASN1.Stream",
          "name": "getConstructedEndRepr",
          "normalized": "[ASN Repr]-\u003e([ASN Repr],[ASN Repr])",
          "package": "asn1-encoding",
          "partial": "Constructed End Repr",
          "signature": "[ASN Repr]-\u003e([ASN Repr],[ASN Repr])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/asn1-encoding/docs/Data-ASN1-Stream.html#v:getConstructedEndRepr"
      }
    }
  ]
]