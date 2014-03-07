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
        "word": "hbcd"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing packed binary-coded decimal (BCD) serialization functions\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BCD.Packed",
          "name": "Packed",
          "package": "hbcd",
          "source": "src/Data-BCD-Packed.html",
          "type": "module"
        },
        "index": {
          "description": "module containing packed binary-coded decimal BCD serialization functions",
          "hierarchy": "Data BCD Packed",
          "module": "Data.BCD.Packed",
          "name": "Packed",
          "package": "hbcd",
          "partial": "Packed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hbcd/docs/Data-BCD-Packed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the bytes required to store a number of digits\n\u003c/p\u003e",
          "module": "Data.BCD.Packed",
          "name": "bytesRequired",
          "package": "hbcd",
          "signature": "Int-\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "Calculate the bytes required to store number of digits",
          "hierarchy": "Data BCD Packed",
          "module": "Data.BCD.Packed",
          "name": "bytesRequired",
          "normalized": "Int-\u003eInt",
          "package": "hbcd",
          "partial": "Required",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbcd/docs/Data-BCD-Packed.html#v:bytesRequired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePack a Decimal into a ByteString\n\u003c/p\u003e",
          "module": "Data.BCD.Packed",
          "name": "packDecimal",
          "package": "hbcd",
          "signature": "Int-\u003e Word8-\u003e Decimal-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Pack Decimal into ByteString",
          "hierarchy": "Data BCD Packed",
          "module": "Data.BCD.Packed",
          "name": "packDecimal",
          "normalized": "Int-\u003eWord-\u003eDecimal-\u003eByteString",
          "package": "hbcd",
          "partial": "Decimal",
          "signature": "Int-\u003eWord-\u003eDecimal-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbcd/docs/Data-BCD-Packed.html#v:packDecimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePack an Integer into a ByteString\n\u003c/p\u003e",
          "module": "Data.BCD.Packed",
          "name": "packInteger",
          "package": "hbcd",
          "signature": "Int-\u003e Integer-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Pack an Integer into ByteString",
          "hierarchy": "Data BCD Packed",
          "module": "Data.BCD.Packed",
          "name": "packInteger",
          "normalized": "Int-\u003eInteger-\u003eByteString",
          "package": "hbcd",
          "partial": "Integer",
          "signature": "Int-\u003eInteger-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbcd/docs/Data-BCD-Packed.html#v:packInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnpack a Decimal from a ByteString\n\u003c/p\u003e",
          "module": "Data.BCD.Packed",
          "name": "unpackDecimal",
          "package": "hbcd",
          "signature": "Word8-\u003e ByteString-\u003e Decimal",
          "type": "function"
        },
        "index": {
          "description": "Unpack Decimal from ByteString",
          "hierarchy": "Data BCD Packed",
          "module": "Data.BCD.Packed",
          "name": "unpackDecimal",
          "normalized": "Word-\u003eByteString-\u003eDecimal",
          "package": "hbcd",
          "partial": "Decimal",
          "signature": "Word-\u003eByteString-\u003eDecimal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbcd/docs/Data-BCD-Packed.html#v:unpackDecimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnpack an Integer from a ByteString\n\u003c/p\u003e",
          "module": "Data.BCD.Packed",
          "name": "unpackInteger",
          "package": "hbcd",
          "signature": "ByteString-\u003e Integer",
          "type": "function"
        },
        "index": {
          "description": "Unpack an Integer from ByteString",
          "hierarchy": "Data BCD Packed",
          "module": "Data.BCD.Packed",
          "name": "unpackInteger",
          "normalized": "ByteString-\u003eInteger",
          "package": "hbcd",
          "partial": "Integer",
          "signature": "ByteString-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hbcd/docs/Data-BCD-Packed.html#v:unpackInteger"
      }
    }
  ]
]