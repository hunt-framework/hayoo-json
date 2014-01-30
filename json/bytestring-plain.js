[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-plain/docs/Data-ByteString-Plain.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is intended to be imported \u003ccode\u003equalified\u003c/code\u003e in order to\n avoid name clashes with the \u003ca\u003ePrelude\u003c/a\u003e, \u003ca\u003eData.ByteString\u003c/a\u003e, and\n \u003ca\u003eData.ByteString.Lazy\u003c/a\u003e modules. E.g.:\n\u003c/p\u003e\u003cpre\u003e import qualified Data.ByteString.Plain as PB\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.ByteString.Plain",
        "fct-package": "bytestring-plain",
        "fct-signature": "module",
        "fct-source": "src/Data-ByteString-Plain.html",
        "fct-type": "module",
        "title": "Plain"
      },
      "index": {
        "description": "This module is intended to be imported qualified in order to avoid name clashes with the Prelude Data.ByteString and Data.ByteString.Lazy modules E.g import qualified Data.ByteString.Plain as PB",
        "hierarchy": "Data ByteString Plain",
        "module": "Data.ByteString.Plain",
        "name": "Plain",
        "normalized": "",
        "package": "bytestring-plain",
        "partial": "Plain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-plain/docs/Data-ByteString-Plain.html#t:ByteString",
      "description": {
        "fct-descr": "\u003cp\u003eCompact heap representation a (strict) \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e can be (un)wrapped to/from.\n\u003c/p\u003e\u003cp\u003eThis data type depends on the ordinary \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e type to be\n useful but comes with a different cost-model.\n\u003c/p\u003e\u003cp\u003eThis representation avoids the \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e indirection, and the\n offset/length slice representation for shared \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es, and\n is therefore suitable if you need to store many small strings in a\n data records or for use as keys in container types. On the other\n hand, string operations on \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e would require\n re-allocations, and thus are not supported. If you need to perform\n such operations convert and operate on conventional \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es\n instead.\n\u003c/p\u003e\u003cp\u003eThis structure supports \u003ccode\u003eUNPACK\u003c/code\u003e, and then has an overhead\n of only 3 words (beyond the word-padded storage of the byte-string\n payload), as it's basically just a pointer to a\n \u003ccode\u003e\u003ca\u003eMutableByteArray#\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e data ByteString = PBS !(MutableByteArray# RealWorld)\n\u003c/pre\u003e\u003cp\u003eIn contrast, a single non-shared unpacked (\u003ccode\u003ePlainPtr\u003c/code\u003e-backed)\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e field exhibits an overhead of 8 words:\n\u003c/p\u003e\u003cpre\u003e data ByteString = PS {-# UNPACK #-} !(ForeignPtr Word8) -- payload (2 words)\n                      {-# UNPACK #-} !Int                -- offset (1 word)\n                      {-# UNPACK #-} !Int                -- length (1 word)\n\n data ForeignPtr a = ForeignPtr Addr# ForeignPtrContents -- 2 words w/o info-ptr\n\n data ForeignPtrContents -- 1 word needed for info-ptr\n     = PlainForeignPtr {...}\n     | MallocPtr {...}\n     | PlainPtr (MutableByteArray# RealWorld)  -- common case (1 word)\n\n data MutableByteArray# s -- 2 words + payload\n\u003c/pre\u003e\u003cp\u003eAs an optimization, all zero-length strings are mapped to the\n singleton \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Plain",
        "fct-package": "bytestring-plain",
        "fct-signature": "data",
        "fct-source": "src/Data-ByteString-Plain.html#ByteString",
        "fct-type": "data",
        "title": "ByteString"
      },
      "index": {
        "description": "Compact heap representation strict ByteString can be un wrapped to from This data type depends on the ordinary ByteString type to be useful but comes with different cost-model This representation avoids the ForeignPtr indirection and the offset length slice representation for shared ByteString and is therefore suitable if you need to store many small strings in data records or for use as keys in container types On the other hand string operations on ByteString would require re-allocations and thus are not supported If you need to perform such operations convert and operate on conventional ByteString instead This structure supports UNPACK and then has an overhead of only words beyond the word-padded storage of the byte-string payload as it basically just pointer to MutableByteArray data ByteString PBS MutableByteArray RealWorld In contrast single non-shared unpacked PlainPtr backed ByteString field exhibits an overhead of words data ByteString PS UNPACK ForeignPtr Word8 payload words UNPACK Int offset word UNPACK Int length word data ForeignPtr ForeignPtr Addr ForeignPtrContents words info-ptr data ForeignPtrContents word needed for info-ptr PlainForeignPtr MallocPtr PlainPtr MutableByteArray RealWorld common case word data MutableByteArray words payload As an optimization all zero-length strings are mapped to the singleton empty value",
        "hierarchy": "Data ByteString Plain",
        "module": "Data.ByteString.Plain",
        "name": "ByteString",
        "normalized": "",
        "package": "bytestring-plain",
        "partial": "Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-plain/docs/Data-ByteString-Plain.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eSingleton value the \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e is mapped to/from.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Plain",
        "fct-package": "bytestring-plain",
        "fct-signature": "ByteString",
        "fct-source": "src/Data-ByteString-Plain.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Singleton value the empty ByteString is mapped to from",
        "hierarchy": "Data ByteString Plain",
        "module": "Data.ByteString.Plain",
        "name": "empty",
        "normalized": "",
        "package": "bytestring-plain",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-plain/docs/Data-ByteString-Plain.html#v:fromStrict",
      "description": {
        "fct-descr": "\u003cp\u003eExtract \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eIf possible, the internally used \u003ccode\u003e\u003ca\u003eMutableByteArray#\u003c/a\u003e\u003c/code\u003e is shared with\n the original \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e in which case the conversion is cheap.\n\u003c/p\u003e\u003cp\u003eHowever, if necessary, a trimmed copy of the original \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n will be created via \u003ccode\u003e\u003ca\u003ecopy\u003c/a\u003e\u003c/code\u003e resulting in a newly allocated\n \u003ccode\u003e\u003ca\u003eMutableByteArray#\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eN.B.: Because strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es use pinned memory internally\n also plain \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es use pinned memory and thereby increase the\n potential for memory fragmentation as the garbage collector is not\n allowed to move pinned memory areas.\n\u003c/p\u003e\u003cp\u003eDepending on the use case, it might be beneficial to apply some\n form of memoizing to the \u003ccode\u003e\u003ca\u003efromStrict\u003c/a\u003e\u003c/code\u003e conversion (also known as\n \u003ca\u003eHash consing\u003c/a\u003e or\n \u003ca\u003eString interning\u003c/a\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Plain",
        "fct-package": "bytestring-plain",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Data-ByteString-Plain.html#fromStrict",
        "fct-type": "function",
        "title": "fromStrict"
      },
      "index": {
        "description": "Extract ByteString from ByteString If possible the internally used MutableByteArray is shared with the original ByteString in which case the conversion is cheap However if necessary trimmed copy of the original ByteString will be created via copy resulting in newly allocated MutableByteArray N.B Because strict ByteString use pinned memory internally also plain ByteString use pinned memory and thereby increase the potential for memory fragmentation as the garbage collector is not allowed to move pinned memory areas Depending on the use case it might be beneficial to apply some form of memoizing to the fromStrict conversion also known as Hash consing or String interning",
        "hierarchy": "Data ByteString Plain",
        "module": "Data.ByteString.Plain",
        "name": "fromStrict",
        "normalized": "ByteString-\u003eByteString",
        "package": "bytestring-plain",
        "partial": "Strict",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-plain/docs/Data-ByteString-Plain.html#v:length",
      "description": {
        "fct-module": "Data.ByteString.Plain",
        "fct-package": "bytestring-plain",
        "fct-signature": "ByteString -\u003e Int",
        "fct-source": "src/Data-ByteString-Plain.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ByteString Plain",
        "module": "Data.ByteString.Plain",
        "name": "length",
        "normalized": "ByteString-\u003eInt",
        "package": "bytestring-plain",
        "partial": "",
        "signature": "ByteString-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-plain/docs/Data-ByteString-Plain.html#v:null",
      "description": {
        "fct-module": "Data.ByteString.Plain",
        "fct-package": "bytestring-plain",
        "fct-signature": "ByteString -\u003e Bool",
        "fct-source": "src/Data-ByteString-Plain.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "",
        "hierarchy": "Data ByteString Plain",
        "module": "Data.ByteString.Plain",
        "name": "null",
        "normalized": "ByteString-\u003eBool",
        "package": "bytestring-plain",
        "partial": "",
        "signature": "ByteString-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-plain/docs/Data-ByteString-Plain.html#v:toStrict",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a plain \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e back into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis effectively wraps the plain \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e\n and a plain \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Plain",
        "fct-package": "bytestring-plain",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Data-ByteString-Plain.html#toStrict",
        "fct-type": "function",
        "title": "toStrict"
      },
      "index": {
        "description": "Convert plain ByteString back into ByteString This effectively wraps the plain ByteString into ForeignPtr and plain ByteString type",
        "hierarchy": "Data ByteString Plain",
        "module": "Data.ByteString.Plain",
        "name": "toStrict",
        "normalized": "ByteString-\u003eByteString",
        "package": "bytestring-plain",
        "partial": "Strict",
        "signature": "ByteString-\u003eByteString"
      }
    }
  }
]