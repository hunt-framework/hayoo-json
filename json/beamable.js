[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable-Internal.html#",
      "description": {
        "fct-module": "Data.Beamable.Internal",
        "fct-package": "beamable",
        "fct-signature": "module",
        "fct-source": "src/Data-Beamable-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Beamable Internal",
        "module": "Data.Beamable.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "beamable",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable-Internal.html#t:Beamable",
      "description": {
        "fct-module": "Data.Beamable.Internal",
        "fct-package": "beamable",
        "fct-signature": "class",
        "fct-source": "src/Data-Beamable-Internal.html#Beamable",
        "fct-type": "class",
        "title": "Beamable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Beamable Internal",
        "module": "Data.Beamable.Internal",
        "name": "Beamable",
        "normalized": "",
        "package": "beamable",
        "partial": "Beamable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable-Internal.html#t:TypeSign",
      "description": {
        "fct-module": "Data.Beamable.Internal",
        "fct-package": "beamable",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Beamable-Internal.html#TypeSign",
        "fct-type": "newtype",
        "title": "TypeSign"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Beamable Internal",
        "module": "Data.Beamable.Internal",
        "name": "TypeSign",
        "normalized": "",
        "package": "beamable",
        "partial": "Type Sign",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable-Internal.html#v:TypeSign",
      "description": {
        "fct-module": "Data.Beamable.Internal",
        "fct-package": "beamable",
        "fct-signature": "TypeSign",
        "fct-source": "src/Data-Beamable-Internal.html#TypeSign",
        "fct-type": "function",
        "title": "TypeSign"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Beamable Internal",
        "module": "Data.Beamable.Internal",
        "name": "TypeSign",
        "normalized": "",
        "package": "beamable",
        "partial": "Type Sign",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable-Internal.html#v:beam",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize value into \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Beamable.Internal",
        "fct-package": "beamable",
        "fct-signature": "a -\u003e Builder",
        "fct-source": "src/Data-Beamable-Internal.html#beam",
        "fct-type": "method",
        "title": "beam"
      },
      "index": {
        "description": "Serialize value into Builder",
        "hierarchy": "Data Beamable Internal",
        "module": "Data.Beamable.Internal",
        "name": "beam",
        "normalized": "a-\u003eBuilder",
        "package": "beamable",
        "partial": "",
        "signature": "a-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable-Internal.html#v:typeSign",
      "description": {
        "fct-descr": "\u003cp\u003eGet type signature of arbitrary Beamable datatatype encoded as Word64 hash\n with all constructors and datatypes in it. It's preferable to use \u003ccode\u003e\u003ca\u003etypeSign\u003c/a\u003e\u003c/code\u003e\n against typeSignR, because implementation of later might change.\n\u003c/p\u003e",
        "fct-module": "Data.Beamable.Internal",
        "fct-package": "beamable",
        "fct-signature": "a -\u003e Word64",
        "fct-source": "src/Data-Beamable-Internal.html#typeSign",
        "fct-type": "function",
        "title": "typeSign"
      },
      "index": {
        "description": "Get type signature of arbitrary Beamable datatatype encoded as Word64 hash with all constructors and datatypes in it It preferable to use typeSign against typeSignR because implementation of later might change",
        "hierarchy": "Data Beamable Internal",
        "module": "Data.Beamable.Internal",
        "name": "typeSign",
        "normalized": "a-\u003eWord",
        "package": "beamable",
        "partial": "Sign",
        "signature": "a-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable-Internal.html#v:typeSignR",
      "description": {
        "fct-descr": "\u003cp\u003eGet value's type signature, should work fine on \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e values\n takes list of strings with datatypes which already been traversed\n workaround to support recursive datatypes. In most cases you should be\n passing empty list in there.\n\u003c/p\u003e",
        "fct-module": "Data.Beamable.Internal",
        "fct-package": "beamable",
        "fct-signature": "[String] -\u003e a -\u003e Word64",
        "fct-source": "src/Data-Beamable-Internal.html#typeSignR",
        "fct-type": "method",
        "title": "typeSignR"
      },
      "index": {
        "description": "Get value type signature should work fine on undefined values takes list of strings with datatypes which already been traversed workaround to support recursive datatypes In most cases you should be passing empty list in there",
        "hierarchy": "Data Beamable Internal",
        "module": "Data.Beamable.Internal",
        "name": "typeSignR",
        "normalized": "[String]-\u003ea-\u003eWord",
        "package": "beamable",
        "partial": "Sign",
        "signature": "[String]-\u003ea-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable-Internal.html#v:unTypeSign",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Beamable.Internal",
        "fct-package": "beamable",
        "fct-signature": "Word64",
        "fct-source": "src/Data-Beamable-Internal.html#TypeSign",
        "fct-type": "function",
        "title": "unTypeSign"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Beamable Internal",
        "module": "Data.Beamable.Internal",
        "name": "unTypeSign",
        "normalized": "",
        "package": "beamable",
        "partial": "Type Sign",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable-Internal.html#v:unbeam",
      "description": {
        "fct-descr": "\u003cp\u003eDeserialize next value from \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, also returns leftovers\n\u003c/p\u003e",
        "fct-module": "Data.Beamable.Internal",
        "fct-package": "beamable",
        "fct-signature": "ByteString -\u003e (a, ByteString)",
        "fct-source": "src/Data-Beamable-Internal.html#unbeam",
        "fct-type": "method",
        "title": "unbeam"
      },
      "index": {
        "description": "Deserialize next value from ByteString also returns leftovers",
        "hierarchy": "Data Beamable Internal",
        "module": "Data.Beamable.Internal",
        "name": "unbeam",
        "normalized": "ByteString-\u003e(a,ByteString)",
        "package": "beamable",
        "partial": "",
        "signature": "ByteString-\u003e(a,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable-Util.html#",
      "description": {
        "fct-module": "Data.Beamable.Util",
        "fct-package": "beamable",
        "fct-signature": "module",
        "fct-source": "src/Data-Beamable-Util.html",
        "fct-type": "module",
        "title": "Util"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Beamable Util",
        "module": "Data.Beamable.Util",
        "name": "Util",
        "normalized": "",
        "package": "beamable",
        "partial": "Util",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable-Util.html#v:peekBS",
      "description": {
        "fct-module": "Data.Beamable.Util",
        "fct-package": "beamable",
        "fct-signature": "ByteString -\u003e a",
        "fct-source": "src/Data-Beamable-Util.html#peekBS",
        "fct-type": "function",
        "title": "peekBS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Beamable Util",
        "module": "Data.Beamable.Util",
        "name": "peekBS",
        "normalized": "ByteString-\u003ea",
        "package": "beamable",
        "partial": "BS",
        "signature": "ByteString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable-Util.html#v:unL",
      "description": {
        "fct-module": "Data.Beamable.Util",
        "fct-package": "beamable",
        "fct-signature": "(l :+: r) a -\u003e l a",
        "fct-source": "src/Data-Beamable-Util.html#unL",
        "fct-type": "function",
        "title": "unL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Beamable Util",
        "module": "Data.Beamable.Util",
        "name": "unL",
        "normalized": "(a b)c-\u003ea c",
        "package": "beamable",
        "partial": "",
        "signature": "(l r)a-\u003el a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable-Util.html#v:unR",
      "description": {
        "fct-module": "Data.Beamable.Util",
        "fct-package": "beamable",
        "fct-signature": "(l :+: r) a -\u003e r a",
        "fct-source": "src/Data-Beamable-Util.html#unR",
        "fct-type": "function",
        "title": "unR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Beamable Util",
        "module": "Data.Beamable.Util",
        "name": "unR",
        "normalized": "(a b)c-\u003eb c",
        "package": "beamable",
        "partial": "",
        "signature": "(l r)a-\u003er a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTo serialize your own datatype first you need to add DeriveGeneric pragma to the module\n where your data is declared, derive Generic instance for that datatype and add empty\n instance declaration for Beamable class\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE DeriveGeneric #-}\n\u003c/pre\u003e\u003cpre\u003e data Foo = Foo1 Int | Foo2 String deriving (Generic}\n instance Beamable Foo\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Beamable",
        "fct-package": "beamable",
        "fct-signature": "module",
        "fct-source": "src/Data-Beamable.html",
        "fct-type": "module",
        "title": "Beamable"
      },
      "index": {
        "description": "To serialize your own datatype first you need to add DeriveGeneric pragma to the module where your data is declared derive Generic instance for that datatype and add empty instance declaration for Beamable class LANGUAGE DeriveGeneric data Foo Foo1 Int Foo2 String deriving Generic instance Beamable Foo",
        "hierarchy": "Data Beamable",
        "module": "Data.Beamable",
        "name": "Beamable",
        "normalized": "",
        "package": "beamable",
        "partial": "Beamable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable.html#t:Beamable",
      "description": {
        "fct-module": "Data.Beamable",
        "fct-package": "beamable",
        "fct-signature": "class",
        "fct-source": "src/Data-Beamable-Internal.html#Beamable",
        "fct-type": "class",
        "title": "Beamable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Beamable",
        "module": "Data.Beamable",
        "name": "Beamable",
        "normalized": "",
        "package": "beamable",
        "partial": "Beamable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable.html#t:Builder",
      "description": {
        "fct-module": "Data.Beamable",
        "fct-package": "beamable",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Builder"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Beamable",
        "module": "Data.Beamable",
        "name": "Builder",
        "normalized": "",
        "package": "beamable",
        "partial": "Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable.html#t:Decoder",
      "description": {
        "fct-module": "Data.Beamable",
        "fct-package": "beamable",
        "fct-signature": "data",
        "fct-source": "src/Data-Beamable.html#Decoder",
        "fct-type": "data",
        "title": "Decoder"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Beamable",
        "module": "Data.Beamable",
        "name": "Decoder",
        "normalized": "",
        "package": "beamable",
        "partial": "Decoder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable.html#v:beam",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize value into \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Beamable",
        "fct-package": "beamable",
        "fct-signature": "a -\u003e Builder",
        "fct-source": "src/Data-Beamable-Internal.html#beam",
        "fct-type": "method",
        "title": "beam"
      },
      "index": {
        "description": "Serialize value into Builder",
        "hierarchy": "Data Beamable",
        "module": "Data.Beamable",
        "name": "beam",
        "normalized": "a-\u003eBuilder",
        "package": "beamable",
        "partial": "",
        "signature": "a-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eDecode single value from bytestring. ByteString must be exactly correct size\n\u003c/p\u003e",
        "fct-module": "Data.Beamable",
        "fct-package": "beamable",
        "fct-signature": "ByteString -\u003e a",
        "fct-source": "src/Data-Beamable.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Decode single value from bytestring ByteString must be exactly correct size",
        "hierarchy": "Data Beamable",
        "module": "Data.Beamable",
        "name": "decode",
        "normalized": "ByteString-\u003ea",
        "package": "beamable",
        "partial": "",
        "signature": "ByteString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable.html#v:decodeLive",
      "description": {
        "fct-module": "Data.Beamable",
        "fct-package": "beamable",
        "fct-signature": "Decoder a",
        "fct-source": "src/Data-Beamable.html#decodeLive",
        "fct-type": "function",
        "title": "decodeLive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Beamable",
        "module": "Data.Beamable",
        "name": "decodeLive",
        "normalized": "",
        "package": "beamable",
        "partial": "Live",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable.html#v:decodeSigned",
      "description": {
        "fct-descr": "\u003cp\u003eDecode single value encoded with encodeSigned\n\u003c/p\u003e",
        "fct-module": "Data.Beamable",
        "fct-package": "beamable",
        "fct-signature": "ByteString -\u003e a",
        "fct-source": "src/Data-Beamable.html#decodeSigned",
        "fct-type": "function",
        "title": "decodeSigned"
      },
      "index": {
        "description": "Decode single value encoded with encodeSigned",
        "hierarchy": "Data Beamable",
        "module": "Data.Beamable",
        "name": "decodeSigned",
        "normalized": "ByteString-\u003ea",
        "package": "beamable",
        "partial": "Signed",
        "signature": "ByteString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eEncode single value into compact bytestring, for encoding large number of values\n use beam and toByteString from Blaze.ByteString.Builder\n\u003c/p\u003e",
        "fct-module": "Data.Beamable",
        "fct-package": "beamable",
        "fct-signature": "a -\u003e ByteString",
        "fct-source": "src/Data-Beamable.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Encode single value into compact bytestring for encoding large number of values use beam and toByteString from Blaze.ByteString.Builder",
        "hierarchy": "Data Beamable",
        "module": "Data.Beamable",
        "name": "encode",
        "normalized": "a-\u003eByteString",
        "package": "beamable",
        "partial": "",
        "signature": "a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable.html#v:encodeLive",
      "description": {
        "fct-module": "Data.Beamable",
        "fct-package": "beamable",
        "fct-signature": "a -\u003e ByteString",
        "fct-source": "src/Data-Beamable.html#encodeLive",
        "fct-type": "function",
        "title": "encodeLive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Beamable",
        "module": "Data.Beamable",
        "name": "encodeLive",
        "normalized": "a-\u003eByteString",
        "package": "beamable",
        "partial": "Live",
        "signature": "a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable.html#v:encodeSigned",
      "description": {
        "fct-descr": "\u003cp\u003eEncode single value with extra type singature added, this adds 8 bytes to\n binary representation, but will prevent decoding using invalid data instances\n\u003c/p\u003e",
        "fct-module": "Data.Beamable",
        "fct-package": "beamable",
        "fct-signature": "a -\u003e ByteString",
        "fct-source": "src/Data-Beamable.html#encodeSigned",
        "fct-type": "function",
        "title": "encodeSigned"
      },
      "index": {
        "description": "Encode single value with extra type singature added this adds bytes to binary representation but will prevent decoding using invalid data instances",
        "hierarchy": "Data Beamable",
        "module": "Data.Beamable",
        "name": "encodeSigned",
        "normalized": "a-\u003eByteString",
        "package": "beamable",
        "partial": "Signed",
        "signature": "a-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable.html#v:feed",
      "description": {
        "fct-module": "Data.Beamable",
        "fct-package": "beamable",
        "fct-signature": "Decoder a -\u003e ByteString -\u003e Either (Decoder a) (a, ByteString)",
        "fct-source": "src/Data-Beamable.html#feed",
        "fct-type": "function",
        "title": "feed"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Beamable",
        "module": "Data.Beamable",
        "name": "feed",
        "normalized": "Decoder a-\u003eByteString-\u003eEither(Decoder a)(a,ByteString)",
        "package": "beamable",
        "partial": "",
        "signature": "Decoder a-\u003eByteString-\u003eEither(Decoder a)(a,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable.html#v:toByteString",
      "description": {
        "fct-descr": "\u003cp\u003eRun the builder to construct a strict bytestring containing the sequence\n of bytes denoted by the builder. This is done by first serializing to a lazy bytestring and then packing its\n chunks to a appropriately sized strict bytestring.\n\u003c/p\u003e\u003cpre\u003e toByteString = packChunks . toLazyByteString\n\u003c/pre\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ccode\u003e\u003ca\u003etoByteString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is a \u003ccode\u003eMonoid\u003c/code\u003e homomorphism.\n\u003c/p\u003e\u003cpre\u003e toByteString mempty          == mempty\n toByteString (x `mappend` y) == toByteString x `mappend` toByteString y\n\u003c/pre\u003e\u003cp\u003eHowever, in the second equation, the left-hand-side is generally faster to\n execute.\n\u003c/p\u003e",
        "fct-module": "Data.Beamable",
        "fct-package": "beamable",
        "fct-signature": "Builder -\u003e ByteString",
        "fct-type": "function",
        "title": "toByteString"
      },
      "index": {
        "description": "Run the builder to construct strict bytestring containing the sequence of bytes denoted by the builder This is done by first serializing to lazy bytestring and then packing its chunks to appropriately sized strict bytestring toByteString packChunks toLazyByteString Note that toByteString is Monoid homomorphism toByteString mempty mempty toByteString mappend toByteString mappend toByteString However in the second equation the left-hand-side is generally faster to execute",
        "hierarchy": "Data Beamable",
        "module": "Data.Beamable",
        "name": "toByteString",
        "normalized": "Builder-\u003eByteString",
        "package": "beamable",
        "partial": "Byte String",
        "signature": "Builder-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable.html#v:typeSign",
      "description": {
        "fct-descr": "\u003cp\u003eGet type signature of arbitrary Beamable datatatype encoded as Word64 hash\n with all constructors and datatypes in it. It's preferable to use \u003ccode\u003e\u003ca\u003etypeSign\u003c/a\u003e\u003c/code\u003e\n against typeSignR, because implementation of later might change.\n\u003c/p\u003e",
        "fct-module": "Data.Beamable",
        "fct-package": "beamable",
        "fct-signature": "a -\u003e Word64",
        "fct-source": "src/Data-Beamable-Internal.html#typeSign",
        "fct-type": "function",
        "title": "typeSign"
      },
      "index": {
        "description": "Get type signature of arbitrary Beamable datatatype encoded as Word64 hash with all constructors and datatypes in it It preferable to use typeSign against typeSignR because implementation of later might change",
        "hierarchy": "Data Beamable",
        "module": "Data.Beamable",
        "name": "typeSign",
        "normalized": "a-\u003eWord",
        "package": "beamable",
        "partial": "Sign",
        "signature": "a-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/beamable/docs/Data-Beamable.html#v:unbeam",
      "description": {
        "fct-descr": "\u003cp\u003eDeserialize next value from \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, also returns leftovers\n\u003c/p\u003e",
        "fct-module": "Data.Beamable",
        "fct-package": "beamable",
        "fct-signature": "ByteString -\u003e (a, ByteString)",
        "fct-source": "src/Data-Beamable-Internal.html#unbeam",
        "fct-type": "method",
        "title": "unbeam"
      },
      "index": {
        "description": "Deserialize next value from ByteString also returns leftovers",
        "hierarchy": "Data Beamable",
        "module": "Data.Beamable",
        "name": "unbeam",
        "normalized": "ByteString-\u003e(a,ByteString)",
        "package": "beamable",
        "partial": "",
        "signature": "ByteString-\u003e(a,ByteString)"
      }
    }
  }
]