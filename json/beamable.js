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
        "word": "beamable"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Beamable.Internal",
          "name": "Internal",
          "package": "beamable",
          "source": "src/Data-Beamable-Internal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Beamable Internal",
          "module": "Data.Beamable.Internal",
          "name": "Internal",
          "package": "beamable",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Beamable.Internal",
          "name": "Beamable",
          "package": "beamable",
          "source": "src/Data-Beamable-Internal.html#Beamable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Beamable Internal",
          "module": "Data.Beamable.Internal",
          "name": "Beamable",
          "package": "beamable",
          "partial": "Beamable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable-Internal.html#t:Beamable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Beamable.Internal",
          "name": "TypeSign",
          "package": "beamable",
          "source": "src/Data-Beamable-Internal.html#TypeSign",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Beamable Internal",
          "module": "Data.Beamable.Internal",
          "name": "TypeSign",
          "package": "beamable",
          "partial": "Type Sign",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable-Internal.html#t:TypeSign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Beamable.Internal",
          "name": "TypeSign",
          "package": "beamable",
          "signature": "TypeSign",
          "source": "src/Data-Beamable-Internal.html#TypeSign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Beamable Internal",
          "module": "Data.Beamable.Internal",
          "name": "TypeSign",
          "package": "beamable",
          "partial": "Type Sign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable-Internal.html#v:TypeSign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize value into \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Beamable.Internal",
          "name": "beam",
          "package": "beamable",
          "signature": "a -\u003e Builder",
          "source": "src/Data-Beamable-Internal.html#beam",
          "type": "method"
        },
        "index": {
          "description": "Serialize value into Builder",
          "hierarchy": "Data Beamable Internal",
          "module": "Data.Beamable.Internal",
          "name": "beam",
          "normalized": "a-\u003eBuilder",
          "package": "beamable",
          "signature": "a-\u003eBuilder",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable-Internal.html#v:beam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet type signature of arbitrary Beamable datatatype encoded as Word64 hash\n with all constructors and datatypes in it. It's preferable to use \u003ccode\u003e\u003ca\u003etypeSign\u003c/a\u003e\u003c/code\u003e\n against typeSignR, because implementation of later might change.\n\u003c/p\u003e",
          "module": "[\"Data.Beamable.Internal\",\"Data.Beamable\"]",
          "name": "typeSign",
          "package": "beamable",
          "signature": "a -\u003e Word64",
          "source": "src/Data-Beamable-Internal.html#typeSign",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/beamable/docs/Data-Beamable-Internal.html#v:typeSign\",\"http://hackage.haskell.org/package/beamable/docs/Data-Beamable.html#v:typeSign\"]"
        },
        "index": {
          "description": "Get type signature of arbitrary Beamable datatatype encoded as Word64 hash with all constructors and datatypes in it It preferable to use typeSign against typeSignR because implementation of later might change",
          "hierarchy": "Data Beamable Internal",
          "module": "Data.Beamable.Internal",
          "name": "typeSign",
          "normalized": "a-\u003eWord",
          "package": "beamable",
          "partial": "Sign",
          "signature": "a-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable-Internal.html#v:typeSign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet value's type signature, should work fine on \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e values\n takes list of strings with datatypes which already been traversed\n workaround to support recursive datatypes. In most cases you should be\n passing empty list in there.\n\u003c/p\u003e",
          "module": "Data.Beamable.Internal",
          "name": "typeSignR",
          "package": "beamable",
          "signature": "[String] -\u003e a -\u003e Word64",
          "source": "src/Data-Beamable-Internal.html#typeSignR",
          "type": "method"
        },
        "index": {
          "description": "Get value type signature should work fine on undefined values takes list of strings with datatypes which already been traversed workaround to support recursive datatypes In most cases you should be passing empty list in there",
          "hierarchy": "Data Beamable Internal",
          "module": "Data.Beamable.Internal",
          "name": "typeSignR",
          "normalized": "[String]-\u003ea-\u003eWord",
          "package": "beamable",
          "partial": "Sign",
          "signature": "[String]-\u003ea-\u003eWord",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable-Internal.html#v:typeSignR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Beamable.Internal",
          "name": "unTypeSign",
          "package": "beamable",
          "signature": "Word64",
          "source": "src/Data-Beamable-Internal.html#TypeSign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Beamable Internal",
          "module": "Data.Beamable.Internal",
          "name": "unTypeSign",
          "package": "beamable",
          "partial": "Type Sign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable-Internal.html#v:unTypeSign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeserialize next value from \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, also returns leftovers\n\u003c/p\u003e",
          "module": "Data.Beamable.Internal",
          "name": "unbeam",
          "package": "beamable",
          "signature": "ByteString -\u003e (a, ByteString)",
          "source": "src/Data-Beamable-Internal.html#unbeam",
          "type": "method"
        },
        "index": {
          "description": "Deserialize next value from ByteString also returns leftovers",
          "hierarchy": "Data Beamable Internal",
          "module": "Data.Beamable.Internal",
          "name": "unbeam",
          "normalized": "ByteString-\u003e(a,ByteString)",
          "package": "beamable",
          "signature": "ByteString-\u003e(a,ByteString)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable-Internal.html#v:unbeam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Beamable.Util",
          "name": "Util",
          "package": "beamable",
          "source": "src/Data-Beamable-Util.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Beamable Util",
          "module": "Data.Beamable.Util",
          "name": "Util",
          "package": "beamable",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Beamable.Util",
          "name": "peekBS",
          "package": "beamable",
          "signature": "ByteString -\u003e a",
          "source": "src/Data-Beamable-Util.html#peekBS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Beamable Util",
          "module": "Data.Beamable.Util",
          "name": "peekBS",
          "normalized": "ByteString-\u003ea",
          "package": "beamable",
          "partial": "BS",
          "signature": "ByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable-Util.html#v:peekBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Beamable.Util",
          "name": "unL",
          "package": "beamable",
          "signature": "(l :+: r) a -\u003e l a",
          "source": "src/Data-Beamable-Util.html#unL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Beamable Util",
          "module": "Data.Beamable.Util",
          "name": "unL",
          "normalized": "(a b)c-\u003ea c",
          "package": "beamable",
          "signature": "(l r)a-\u003el a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable-Util.html#v:unL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Beamable.Util",
          "name": "unR",
          "package": "beamable",
          "signature": "(l :+: r) a -\u003e r a",
          "source": "src/Data-Beamable-Util.html#unR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Beamable Util",
          "module": "Data.Beamable.Util",
          "name": "unR",
          "normalized": "(a b)c-\u003eb c",
          "package": "beamable",
          "signature": "(l r)a-\u003er a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable-Util.html#v:unR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTo serialize your own datatype first you need to add DeriveGeneric pragma to the module\n where your data is declared, derive Generic instance for that datatype and add empty\n instance declaration for Beamable class\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE DeriveGeneric #-}\n\u003c/pre\u003e\u003cpre\u003e data Foo = Foo1 Int | Foo2 String deriving (Generic}\n instance Beamable Foo\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Beamable",
          "name": "Beamable",
          "package": "beamable",
          "source": "src/Data-Beamable.html",
          "type": "module"
        },
        "index": {
          "description": "To serialize your own datatype first you need to add DeriveGeneric pragma to the module where your data is declared derive Generic instance for that datatype and add empty instance declaration for Beamable class LANGUAGE DeriveGeneric data Foo Foo1 Int Foo2 String deriving Generic instance Beamable Foo",
          "hierarchy": "Data Beamable",
          "module": "Data.Beamable",
          "name": "Beamable",
          "package": "beamable",
          "partial": "Beamable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Beamable",
          "name": "Beamable",
          "package": "beamable",
          "source": "src/Data-Beamable-Internal.html#Beamable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Beamable",
          "module": "Data.Beamable",
          "name": "Beamable",
          "package": "beamable",
          "partial": "Beamable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable.html#t:Beamable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Beamable",
          "name": "Builder",
          "package": "beamable",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Beamable",
          "module": "Data.Beamable",
          "name": "Builder",
          "package": "beamable",
          "partial": "Builder",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable.html#t:Builder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Beamable",
          "name": "Decoder",
          "package": "beamable",
          "source": "src/Data-Beamable.html#Decoder",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Beamable",
          "module": "Data.Beamable",
          "name": "Decoder",
          "package": "beamable",
          "partial": "Decoder",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable.html#t:Decoder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize value into \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Beamable",
          "name": "beam",
          "package": "beamable",
          "signature": "a -\u003e Builder",
          "source": "src/Data-Beamable-Internal.html#beam",
          "type": "method"
        },
        "index": {
          "description": "Serialize value into Builder",
          "hierarchy": "Data Beamable",
          "module": "Data.Beamable",
          "name": "beam",
          "normalized": "a-\u003eBuilder",
          "package": "beamable",
          "signature": "a-\u003eBuilder",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable.html#v:beam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode single value from bytestring. ByteString must be exactly correct size\n\u003c/p\u003e",
          "module": "Data.Beamable",
          "name": "decode",
          "package": "beamable",
          "signature": "ByteString -\u003e a",
          "source": "src/Data-Beamable.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Decode single value from bytestring ByteString must be exactly correct size",
          "hierarchy": "Data Beamable",
          "module": "Data.Beamable",
          "name": "decode",
          "normalized": "ByteString-\u003ea",
          "package": "beamable",
          "signature": "ByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Beamable",
          "name": "decodeLive",
          "package": "beamable",
          "signature": "Decoder a",
          "source": "src/Data-Beamable.html#decodeLive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Beamable",
          "module": "Data.Beamable",
          "name": "decodeLive",
          "package": "beamable",
          "partial": "Live",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable.html#v:decodeLive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode single value encoded with encodeSigned\n\u003c/p\u003e",
          "module": "Data.Beamable",
          "name": "decodeSigned",
          "package": "beamable",
          "signature": "ByteString -\u003e a",
          "source": "src/Data-Beamable.html#decodeSigned",
          "type": "function"
        },
        "index": {
          "description": "Decode single value encoded with encodeSigned",
          "hierarchy": "Data Beamable",
          "module": "Data.Beamable",
          "name": "decodeSigned",
          "normalized": "ByteString-\u003ea",
          "package": "beamable",
          "partial": "Signed",
          "signature": "ByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable.html#v:decodeSigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode single value into compact bytestring, for encoding large number of values\n use beam and toByteString from Blaze.ByteString.Builder\n\u003c/p\u003e",
          "module": "Data.Beamable",
          "name": "encode",
          "package": "beamable",
          "signature": "a -\u003e ByteString",
          "source": "src/Data-Beamable.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Encode single value into compact bytestring for encoding large number of values use beam and toByteString from Blaze.ByteString.Builder",
          "hierarchy": "Data Beamable",
          "module": "Data.Beamable",
          "name": "encode",
          "normalized": "a-\u003eByteString",
          "package": "beamable",
          "signature": "a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Beamable",
          "name": "encodeLive",
          "package": "beamable",
          "signature": "a -\u003e ByteString",
          "source": "src/Data-Beamable.html#encodeLive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Beamable",
          "module": "Data.Beamable",
          "name": "encodeLive",
          "normalized": "a-\u003eByteString",
          "package": "beamable",
          "partial": "Live",
          "signature": "a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable.html#v:encodeLive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode single value with extra type singature added, this adds 8 bytes to\n binary representation, but will prevent decoding using invalid data instances\n\u003c/p\u003e",
          "module": "Data.Beamable",
          "name": "encodeSigned",
          "package": "beamable",
          "signature": "a -\u003e ByteString",
          "source": "src/Data-Beamable.html#encodeSigned",
          "type": "function"
        },
        "index": {
          "description": "Encode single value with extra type singature added this adds bytes to binary representation but will prevent decoding using invalid data instances",
          "hierarchy": "Data Beamable",
          "module": "Data.Beamable",
          "name": "encodeSigned",
          "normalized": "a-\u003eByteString",
          "package": "beamable",
          "partial": "Signed",
          "signature": "a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable.html#v:encodeSigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Beamable",
          "name": "feed",
          "package": "beamable",
          "signature": "Decoder a -\u003e ByteString -\u003e Either (Decoder a) (a, ByteString)",
          "source": "src/Data-Beamable.html#feed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Beamable",
          "module": "Data.Beamable",
          "name": "feed",
          "normalized": "Decoder a-\u003eByteString-\u003eEither(Decoder a)(a,ByteString)",
          "package": "beamable",
          "signature": "Decoder a-\u003eByteString-\u003eEither(Decoder a)(a,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable.html#v:feed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the builder to construct a strict bytestring containing the sequence\n of bytes denoted by the builder. This is done by first serializing to a lazy bytestring and then packing its\n chunks to a appropriately sized strict bytestring.\n\u003c/p\u003e\u003cpre\u003e toByteString = packChunks . toLazyByteString\n\u003c/pre\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ccode\u003e\u003ca\u003etoByteString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is a \u003ccode\u003eMonoid\u003c/code\u003e homomorphism.\n\u003c/p\u003e\u003cpre\u003e toByteString mempty          == mempty\n toByteString (x `mappend` y) == toByteString x `mappend` toByteString y\n\u003c/pre\u003e\u003cp\u003eHowever, in the second equation, the left-hand-side is generally faster to\n execute.\n\u003c/p\u003e",
          "module": "Data.Beamable",
          "name": "toByteString",
          "package": "beamable",
          "signature": "Builder -\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Run the builder to construct strict bytestring containing the sequence of bytes denoted by the builder This is done by first serializing to lazy bytestring and then packing its chunks to appropriately sized strict bytestring toByteString packChunks toLazyByteString Note that toByteString is Monoid homomorphism toByteString mempty mempty toByteString mappend toByteString mappend toByteString However in the second equation the left-hand-side is generally faster to execute",
          "hierarchy": "Data Beamable",
          "module": "Data.Beamable",
          "name": "toByteString",
          "normalized": "Builder-\u003eByteString",
          "package": "beamable",
          "partial": "Byte String",
          "signature": "Builder-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable.html#v:toByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeserialize next value from \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, also returns leftovers\n\u003c/p\u003e",
          "module": "Data.Beamable",
          "name": "unbeam",
          "package": "beamable",
          "signature": "ByteString -\u003e (a, ByteString)",
          "source": "src/Data-Beamable-Internal.html#unbeam",
          "type": "method"
        },
        "index": {
          "description": "Deserialize next value from ByteString also returns leftovers",
          "hierarchy": "Data Beamable",
          "module": "Data.Beamable",
          "name": "unbeam",
          "normalized": "ByteString-\u003e(a,ByteString)",
          "package": "beamable",
          "signature": "ByteString-\u003e(a,ByteString)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable.html#v:unbeam"
      }
    }
  ]
]