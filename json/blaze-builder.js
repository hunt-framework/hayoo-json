[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-ByteString.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eWrite\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es for strict and lazy bytestrings.\n\u003c/p\u003e\u003cp\u003eWe assume the following qualified imports in order to differentiate between\n strict and lazy bytestrings in the code examples.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.ByteString      as S\n import qualified Data.ByteString.Lazy as L\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Blaze.ByteString.Builder.ByteString",
        "fct-package": "blaze-builder",
        "fct-signature": "module",
        "fct-source": "src/Blaze-ByteString-Builder-ByteString.html",
        "fct-type": "module",
        "title": "ByteString"
      },
      "index": {
        "description": "Write and Builder for strict and lazy bytestrings We assume the following qualified imports in order to differentiate between strict and lazy bytestrings in the code examples import qualified Data.ByteString as import qualified Data.ByteString.Lazy as",
        "hierarchy": "Blaze ByteString Builder ByteString",
        "module": "Blaze.ByteString.Builder.ByteString",
        "name": "ByteString",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-ByteString.html#v:copyByteString",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ecopyByteString bs\u003c/code\u003e serialize the strict bytestring \u003ccode\u003ebs\u003c/code\u003e by copying it to\n the output buffer.\n\u003c/p\u003e\u003cp\u003eUse this function to serialize strict bytestrings that are statically known\n to be smallish (\u003ccode\u003e\u003c= 4kb\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.ByteString",
        "fct-package": "blaze-builder",
        "fct-signature": "ByteString -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-ByteString.html#copyByteString",
        "fct-type": "function",
        "title": "copyByteString"
      },
      "index": {
        "description": "copyByteString bs serialize the strict bytestring bs by copying it to the output buffer Use this function to serialize strict bytestrings that are statically known to be smallish kb",
        "hierarchy": "Blaze ByteString Builder ByteString",
        "module": "Blaze.ByteString.Builder.ByteString",
        "name": "copyByteString",
        "normalized": "ByteString-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Byte String",
        "signature": "ByteString-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-ByteString.html#v:copyLazyByteString",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Serialize a lazy bytestring by copying \u003cem\u003eall\u003c/em\u003e chunks sequentially\n to the output buffer.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003ecopyByteString\u003c/a\u003e\u003c/code\u003e for usage considerations.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.ByteString",
        "fct-package": "blaze-builder",
        "fct-signature": "ByteString -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-ByteString.html#copyLazyByteString",
        "fct-type": "function",
        "title": "copyLazyByteString"
      },
      "index": {
        "description": "Serialize lazy bytestring by copying all chunks sequentially to the output buffer See copyByteString for usage considerations",
        "hierarchy": "Blaze ByteString Builder ByteString",
        "module": "Blaze.ByteString.Builder.ByteString",
        "name": "copyLazyByteString",
        "normalized": "ByteString-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Lazy Byte String",
        "signature": "ByteString-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-ByteString.html#v:fromByteString",
      "description": {
        "fct-descr": "\u003cp\u003eSmart serialization of a strict bytestring.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efromByteString\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003efromByteStringWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultMaximalCopySize\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003cp\u003eUse this function to serialize strict bytestrings. It guarantees an\n average chunk size of 4kb, which has been shown to be a reasonable size in\n benchmarks. Note that the check whether to copy or to insert is (almost)\n free as the builder performance is mostly memory-bound.\n\u003c/p\u003e\u003cp\u003eIf you statically know that copying or inserting the strict bytestring is\n always the best choice, then you can use the \u003ccode\u003e\u003ca\u003ecopyByteString\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003einsertByteString\u003c/a\u003e\u003c/code\u003e functions.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.ByteString",
        "fct-package": "blaze-builder",
        "fct-signature": "ByteString -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-ByteString.html#fromByteString",
        "fct-type": "function",
        "title": "fromByteString"
      },
      "index": {
        "description": "Smart serialization of strict bytestring fromByteString fromByteStringWith defaultMaximalCopySize Use this function to serialize strict bytestrings It guarantees an average chunk size of kb which has been shown to be reasonable size in benchmarks Note that the check whether to copy or to insert is almost free as the builder performance is mostly memory-bound If you statically know that copying or inserting the strict bytestring is always the best choice then you can use the copyByteString or insertByteString functions",
        "hierarchy": "Blaze ByteString Builder ByteString",
        "module": "Blaze.ByteString.Builder.ByteString",
        "name": "fromByteString",
        "normalized": "ByteString-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Byte String",
        "signature": "ByteString-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-ByteString.html#v:fromByteStringWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efromByteStringWith maximalCopySize bs\u003c/code\u003e serializes the strict bytestring\n \u003ccode\u003ebs\u003c/code\u003e according to the following rules.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eS.length bs \u003c= maximalCopySize\u003c/code\u003e:\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003ebs\u003c/code\u003e is copied to the output buffer.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eS.length bs \u003e  maximalCopySize\u003c/code\u003e:\u003c/dt\u003e\u003cdd\u003e \u003ccode\u003ebs\u003c/code\u003e the output buffer is flushed and\n   \u003ccode\u003ebs\u003c/code\u003e is inserted directly as separate chunk in the output stream.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThese rules guarantee that average chunk size in the output stream is at\n least half the \u003ccode\u003emaximalCopySize\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.ByteString",
        "fct-package": "blaze-builder",
        "fct-signature": "Int-\u003e ByteString-\u003e Builder",
        "fct-type": "function",
        "title": "fromByteStringWith"
      },
      "index": {
        "description": "fromByteStringWith maximalCopySize bs serializes the strict bytestring bs according to the following rules S.length bs maximalCopySize bs is copied to the output buffer S.length bs maximalCopySize bs the output buffer is flushed and bs is inserted directly as separate chunk in the output stream These rules guarantee that average chunk size in the output stream is at least half the maximalCopySize",
        "hierarchy": "Blaze ByteString Builder ByteString",
        "module": "Blaze.ByteString.Builder.ByteString",
        "name": "fromByteStringWith",
        "normalized": "Int-\u003eByteString-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Byte String With",
        "signature": "Int-\u003eByteString-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-ByteString.html#v:fromLazyByteString",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Smart serialization of a lazy bytestring.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efromLazyByteString\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003efromLazyByteStringWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultMaximalCopySize\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003cp\u003eUse this function to serialize lazy bytestrings. It guarantees an average\n chunk size of 4kb, which has been shown to be a reasonable size in\n benchmarks. Note that the check whether to copy or to insert is (almost)\n free as the builder performance is mostly memory-bound.\n\u003c/p\u003e\u003cp\u003eIf you statically know that copying or inserting \u003cem\u003eall\u003c/em\u003e chunks of the lazy\n bytestring is always the best choice, then you can use the\n \u003ccode\u003e\u003ca\u003ecopyLazyByteString\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003einsertLazyByteString\u003c/a\u003e\u003c/code\u003e functions.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.ByteString",
        "fct-package": "blaze-builder",
        "fct-signature": "ByteString -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-ByteString.html#fromLazyByteString",
        "fct-type": "function",
        "title": "fromLazyByteString"
      },
      "index": {
        "description": "Smart serialization of lazy bytestring fromLazyByteString fromLazyByteStringWith defaultMaximalCopySize Use this function to serialize lazy bytestrings It guarantees an average chunk size of kb which has been shown to be reasonable size in benchmarks Note that the check whether to copy or to insert is almost free as the builder performance is mostly memory-bound If you statically know that copying or inserting all chunks of the lazy bytestring is always the best choice then you can use the copyLazyByteString or insertLazyByteString functions",
        "hierarchy": "Blaze ByteString Builder ByteString",
        "module": "Blaze.ByteString.Builder.ByteString",
        "name": "fromLazyByteString",
        "normalized": "ByteString-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Lazy Byte String",
        "signature": "ByteString-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-ByteString.html#v:fromLazyByteStringWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Serialize a lazy bytestring chunk-wise according to the same rules\n as in \u003ccode\u003e\u003ca\u003efromByteStringWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSemantically, it holds that\n\u003c/p\u003e\u003cpre\u003e   fromLazyByteStringWith maxCopySize\n = mconcat . map (fromByteStringWith maxCopySize) . L.toChunks\n\u003c/pre\u003e\u003cp\u003eHowever, the left-hand-side is much more efficient, as it moves the\n end-of-buffer pointer out of the inner loop and provides the compiler with\n more strictness information.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.ByteString",
        "fct-package": "blaze-builder",
        "fct-signature": "Int-\u003e ByteString-\u003e Builder",
        "fct-type": "function",
        "title": "fromLazyByteStringWith"
      },
      "index": {
        "description": "Serialize lazy bytestring chunk-wise according to the same rules as in fromByteStringWith Semantically it holds that fromLazyByteStringWith maxCopySize mconcat map fromByteStringWith maxCopySize L.toChunks However the left-hand-side is much more efficient as it moves the end-of-buffer pointer out of the inner loop and provides the compiler with more strictness information",
        "hierarchy": "Blaze ByteString Builder ByteString",
        "module": "Blaze.ByteString.Builder.ByteString",
        "name": "fromLazyByteStringWith",
        "normalized": "Int-\u003eByteString-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Lazy Byte String With",
        "signature": "Int-\u003eByteString-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-ByteString.html#v:insertByteString",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003einsertByteString bs\u003c/code\u003e serializes the strict bytestring \u003ccode\u003ebs\u003c/code\u003e by inserting\n it directly as a chunk of the output stream.\n\u003c/p\u003e\u003cp\u003eNote that this implies flushing the output buffer; even if it contains just\n a single byte. Hence, you should use this operation only for large (\u003ccode\u003e\u003e 8kb\u003c/code\u003e)\n bytestrings, as otherwise the resulting output stream may be too fragmented\n to be processed efficiently.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.ByteString",
        "fct-package": "blaze-builder",
        "fct-signature": "ByteString -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-ByteString.html#insertByteString",
        "fct-type": "function",
        "title": "insertByteString"
      },
      "index": {
        "description": "insertByteString bs serializes the strict bytestring bs by inserting it directly as chunk of the output stream Note that this implies flushing the output buffer even if it contains just single byte Hence you should use this operation only for large kb bytestrings as otherwise the resulting output stream may be too fragmented to be processed efficiently",
        "hierarchy": "Blaze ByteString Builder ByteString",
        "module": "Blaze.ByteString.Builder.ByteString",
        "name": "insertByteString",
        "normalized": "ByteString-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Byte String",
        "signature": "ByteString-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-ByteString.html#v:insertLazyByteString",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Serialize a lazy bytestring by inserting \u003cem\u003eall\u003c/em\u003e its chunks directly\n into the output stream.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003einsertByteString\u003c/a\u003e\u003c/code\u003e for usage considerations.\n\u003c/p\u003e\u003cp\u003eFor library developers, see the \u003ccode\u003eModifyChunks\u003c/code\u003e build signal, if you\n need an \u003cem\u003eO(1)\u003c/em\u003e lazy bytestring insert based on difference lists.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.ByteString",
        "fct-package": "blaze-builder",
        "fct-signature": "ByteString -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-ByteString.html#insertLazyByteString",
        "fct-type": "function",
        "title": "insertLazyByteString"
      },
      "index": {
        "description": "Serialize lazy bytestring by inserting all its chunks directly into the output stream See insertByteString for usage considerations For library developers see the ModifyChunks build signal if you need an lazy bytestring insert based on difference lists",
        "hierarchy": "Blaze ByteString Builder ByteString",
        "module": "Blaze.ByteString.Builder.ByteString",
        "name": "insertLazyByteString",
        "normalized": "ByteString-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Lazy Byte String",
        "signature": "ByteString-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-ByteString.html#v:writeByteString",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a buffer.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.ByteString",
        "fct-package": "blaze-builder",
        "fct-signature": "ByteString -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-ByteString.html#writeByteString",
        "fct-type": "function",
        "title": "writeByteString"
      },
      "index": {
        "description": "Write strict ByteString to buffer",
        "hierarchy": "Blaze ByteString Builder ByteString",
        "module": "Blaze.ByteString.Builder.ByteString",
        "name": "writeByteString",
        "normalized": "ByteString-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Byte String",
        "signature": "ByteString-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Char-Utf8.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eWrite\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es for serializing Unicode characters using the UTF-8\n encoding.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Blaze.ByteString.Builder.Char.Utf8",
        "fct-package": "blaze-builder",
        "fct-signature": "module",
        "fct-source": "src/Blaze-ByteString-Builder-Char-Utf8.html",
        "fct-type": "module",
        "title": "Utf8"
      },
      "index": {
        "description": "Write and Builder for serializing Unicode characters using the UTF-8 encoding",
        "hierarchy": "Blaze ByteString Builder Char Utf8",
        "module": "Blaze.ByteString.Builder.Char.Utf8",
        "name": "Utf8",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Utf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Char-Utf8.html#v:fromChar",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Serialize a Unicode character using the UTF-8 encoding.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Char.Utf8",
        "fct-package": "blaze-builder",
        "fct-signature": "Char -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Char-Utf8.html#fromChar",
        "fct-type": "function",
        "title": "fromChar"
      },
      "index": {
        "description": "Serialize Unicode character using the UTF-8 encoding",
        "hierarchy": "Blaze ByteString Builder Char Utf8",
        "module": "Blaze.ByteString.Builder.Char.Utf8",
        "name": "fromChar",
        "normalized": "Char-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Char",
        "signature": "Char-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Char-Utf8.html#v:fromLazyText",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Serialize a lazy Unicode \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e value using the UTF-8 encoding.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Char.Utf8",
        "fct-package": "blaze-builder",
        "fct-signature": "Text -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Char-Utf8.html#fromLazyText",
        "fct-type": "function",
        "title": "fromLazyText"
      },
      "index": {
        "description": "Serialize lazy Unicode Text value using the UTF-8 encoding",
        "hierarchy": "Blaze ByteString Builder Char Utf8",
        "module": "Blaze.ByteString.Builder.Char.Utf8",
        "name": "fromLazyText",
        "normalized": "Text-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Lazy Text",
        "signature": "Text-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Char-Utf8.html#v:fromShow",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Serialize a value by \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003eing it and UTF-8 encoding the resulting\n \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Char.Utf8",
        "fct-package": "blaze-builder",
        "fct-signature": "a -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Char-Utf8.html#fromShow",
        "fct-type": "function",
        "title": "fromShow"
      },
      "index": {
        "description": "Serialize value by Show ing it and UTF-8 encoding the resulting String",
        "hierarchy": "Blaze ByteString Builder Char Utf8",
        "module": "Blaze.ByteString.Builder.Char.Utf8",
        "name": "fromShow",
        "normalized": "a-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Show",
        "signature": "a-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Char-Utf8.html#v:fromString",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Serialize a Unicode \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e using the UTF-8 encoding.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Char.Utf8",
        "fct-package": "blaze-builder",
        "fct-signature": "String -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Char-Utf8.html#fromString",
        "fct-type": "function",
        "title": "fromString"
      },
      "index": {
        "description": "Serialize Unicode String using the UTF-8 encoding",
        "hierarchy": "Blaze ByteString Builder Char Utf8",
        "module": "Blaze.ByteString.Builder.Char.Utf8",
        "name": "fromString",
        "normalized": "String-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "String",
        "signature": "String-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Char-Utf8.html#v:fromText",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Serialize a strict Unicode \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e value using the UTF-8 encoding.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Char.Utf8",
        "fct-package": "blaze-builder",
        "fct-signature": "Text -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Char-Utf8.html#fromText",
        "fct-type": "function",
        "title": "fromText"
      },
      "index": {
        "description": "Serialize strict Unicode Text value using the UTF-8 encoding",
        "hierarchy": "Blaze ByteString Builder Char Utf8",
        "module": "Blaze.ByteString.Builder.Char.Utf8",
        "name": "fromText",
        "normalized": "Text-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Text",
        "signature": "Text-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Char-Utf8.html#v:writeChar",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a UTF-8 encoded Unicode character to a buffer.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Char.Utf8",
        "fct-package": "blaze-builder",
        "fct-signature": "Char -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Char-Utf8.html#writeChar",
        "fct-type": "function",
        "title": "writeChar"
      },
      "index": {
        "description": "Write UTF-8 encoded Unicode character to buffer",
        "hierarchy": "Blaze ByteString Builder Char Utf8",
        "module": "Blaze.ByteString.Builder.Char.Utf8",
        "name": "writeChar",
        "normalized": "Char-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Char",
        "signature": "Char-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Char8.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem/\u003eNote:\u003cem/\u003e This package is intended for low-level use like implementing\n protocols. If you need to \u003cem/\u003eserialize\u003cem/\u003e Unicode characters use one of the\n UTF encodings (e.g. 'Blaze.ByteString.Builder.Char.UTF-8').\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eWrite\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es for serializing the lower 8-bits of characters.\n\u003c/p\u003e\u003cp\u003eThis corresponds to what the \u003ccode\u003ebytestring\u003c/code\u003e package offer in\n \u003ccode\u003e\u003ca\u003eChar8\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Blaze.ByteString.Builder.Char8",
        "fct-package": "blaze-builder",
        "fct-signature": "module",
        "fct-source": "src/Blaze-ByteString-Builder-Char8.html",
        "fct-type": "module",
        "title": "Char8"
      },
      "index": {
        "description": "Note This package is intended for low-level use like implementing protocols If you need to serialize Unicode characters use one of the UTF encodings e.g Blaze.ByteString.Builder.Char.UTF-8 Write and Builder for serializing the lower bits of characters This corresponds to what the bytestring package offer in Char8",
        "hierarchy": "Blaze ByteString Builder Char8",
        "module": "Blaze.ByteString.Builder.Char8",
        "name": "Char8",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Char8.html#v:fromChar",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Serialize the lower 8-bits of a character.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Char8",
        "fct-package": "blaze-builder",
        "fct-signature": "Char -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Char8.html#fromChar",
        "fct-type": "function",
        "title": "fromChar"
      },
      "index": {
        "description": "Serialize the lower bits of character",
        "hierarchy": "Blaze ByteString Builder Char8",
        "module": "Blaze.ByteString.Builder.Char8",
        "name": "fromChar",
        "normalized": "Char-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Char",
        "signature": "Char-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Char8.html#v:fromLazyText",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Serialize the lower 8-bits of all characters in the lazy text.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Char8",
        "fct-package": "blaze-builder",
        "fct-signature": "Text -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Char8.html#fromLazyText",
        "fct-type": "function",
        "title": "fromLazyText"
      },
      "index": {
        "description": "Serialize the lower bits of all characters in the lazy text",
        "hierarchy": "Blaze ByteString Builder Char8",
        "module": "Blaze.ByteString.Builder.Char8",
        "name": "fromLazyText",
        "normalized": "Text-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Lazy Text",
        "signature": "Text-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Char8.html#v:fromShow",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Serialize a value by \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003eing it and serializing the lower 8-bits\n of the resulting string.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Char8",
        "fct-package": "blaze-builder",
        "fct-signature": "a -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Char8.html#fromShow",
        "fct-type": "function",
        "title": "fromShow"
      },
      "index": {
        "description": "Serialize value by Show ing it and serializing the lower bits of the resulting string",
        "hierarchy": "Blaze ByteString Builder Char8",
        "module": "Blaze.ByteString.Builder.Char8",
        "name": "fromShow",
        "normalized": "a-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Show",
        "signature": "a-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Char8.html#v:fromString",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Serialize the lower 8-bits of all characters of a string\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Char8",
        "fct-package": "blaze-builder",
        "fct-signature": "String -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Char8.html#fromString",
        "fct-type": "function",
        "title": "fromString"
      },
      "index": {
        "description": "Serialize the lower bits of all characters of string",
        "hierarchy": "Blaze ByteString Builder Char8",
        "module": "Blaze.ByteString.Builder.Char8",
        "name": "fromString",
        "normalized": "String-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "String",
        "signature": "String-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Char8.html#v:fromText",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Serialize the lower 8-bits of all characters in the strict text.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Char8",
        "fct-package": "blaze-builder",
        "fct-signature": "Text -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Char8.html#fromText",
        "fct-type": "function",
        "title": "fromText"
      },
      "index": {
        "description": "Serialize the lower bits of all characters in the strict text",
        "hierarchy": "Blaze ByteString Builder Char8",
        "module": "Blaze.ByteString.Builder.Char8",
        "name": "fromText",
        "normalized": "Text-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Text",
        "signature": "Text-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Char8.html#v:writeChar",
      "description": {
        "fct-descr": "\u003cp\u003eWrite the lower 8-bits of a character to a buffer.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Char8",
        "fct-package": "blaze-builder",
        "fct-signature": "Char -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Char8.html#writeChar",
        "fct-type": "function",
        "title": "writeChar"
      },
      "index": {
        "description": "Write the lower bits of character to buffer",
        "hierarchy": "Blaze ByteString Builder Char8",
        "module": "Blaze.ByteString.Builder.Char8",
        "name": "writeChar",
        "normalized": "Char-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Char",
        "signature": "Char-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-HTTP.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for HTTP response encoding.\n\u003c/p\u003e\u003cp\u003eTODO: Improve documentation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Blaze.ByteString.Builder.HTTP",
        "fct-package": "blaze-builder",
        "fct-signature": "module",
        "fct-source": "src/Blaze-ByteString-Builder-HTTP.html",
        "fct-type": "module",
        "title": "HTTP"
      },
      "index": {
        "description": "Support for HTTP response encoding TODO Improve documentation",
        "hierarchy": "Blaze ByteString Builder HTTP",
        "module": "Blaze.ByteString.Builder.HTTP",
        "name": "HTTP",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "HTTP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-HTTP.html#v:chunkedTransferEncoding",
      "description": {
        "fct-descr": "\u003cp\u003eTransform a builder such that it uses chunked HTTP transfer encoding.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.HTTP",
        "fct-package": "blaze-builder",
        "fct-signature": "Builder -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-HTTP.html#chunkedTransferEncoding",
        "fct-type": "function",
        "title": "chunkedTransferEncoding"
      },
      "index": {
        "description": "Transform builder such that it uses chunked HTTP transfer encoding",
        "hierarchy": "Blaze ByteString Builder HTTP",
        "module": "Blaze.ByteString.Builder.HTTP",
        "name": "chunkedTransferEncoding",
        "normalized": "Builder-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Transfer Encoding",
        "signature": "Builder-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-HTTP.html#v:chunkedTransferTerminator",
      "description": {
        "fct-descr": "\u003cp\u003eThe zero-length chunk '0\\r\\n\\r\\n' signaling the termination of the data transfer.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.HTTP",
        "fct-package": "blaze-builder",
        "fct-signature": "Builder",
        "fct-source": "src/Blaze-ByteString-Builder-HTTP.html#chunkedTransferTerminator",
        "fct-type": "function",
        "title": "chunkedTransferTerminator"
      },
      "index": {
        "description": "The zero-length chunk signaling the termination of the data transfer",
        "hierarchy": "Blaze ByteString Builder HTTP",
        "module": "Blaze.ByteString.Builder.HTTP",
        "name": "chunkedTransferTerminator",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Transfer Terminator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Html-Utf8.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eWrite\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es for serializing HTML escaped and UTF-8 encoded\n characters.\n\u003c/p\u003e\u003cp\u003eThis module is used by both the 'blaze-html' and the 'hamlet' HTML\n templating libraries. If the \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e from 'blaze-builder' replaces the\n \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e implementation, this module will most likely keep its\n place, as it provides a set of very specialized functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Blaze.ByteString.Builder.Html.Utf8",
        "fct-package": "blaze-builder",
        "fct-signature": "module",
        "fct-source": "src/Blaze-ByteString-Builder-Html-Utf8.html",
        "fct-type": "module",
        "title": "Utf8"
      },
      "index": {
        "description": "Write and Builder for serializing HTML escaped and UTF-8 encoded characters This module is used by both the blaze-html and the hamlet HTML templating libraries If the Builder from blaze-builder replaces the Builder implementation this module will most likely keep its place as it provides set of very specialized functions",
        "hierarchy": "Blaze ByteString Builder Html Utf8",
        "module": "Blaze.ByteString.Builder.Html.Utf8",
        "name": "Utf8",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Utf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Html-Utf8.html#v:fromHtmlEscapedChar",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Serialize a HTML escaped Unicode character using the UTF-8\n encoding.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Html.Utf8",
        "fct-package": "blaze-builder",
        "fct-signature": "Char -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Html-Utf8.html#fromHtmlEscapedChar",
        "fct-type": "function",
        "title": "fromHtmlEscapedChar"
      },
      "index": {
        "description": "Serialize HTML escaped Unicode character using the UTF-8 encoding",
        "hierarchy": "Blaze ByteString Builder Html Utf8",
        "module": "Blaze.ByteString.Builder.Html.Utf8",
        "name": "fromHtmlEscapedChar",
        "normalized": "Char-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Html Escaped Char",
        "signature": "Char-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Html-Utf8.html#v:fromHtmlEscapedLazyText",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Serialize a HTML escaped Unicode \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e using the UTF-8 encoding.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Html.Utf8",
        "fct-package": "blaze-builder",
        "fct-signature": "Text -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Html-Utf8.html#fromHtmlEscapedLazyText",
        "fct-type": "function",
        "title": "fromHtmlEscapedLazyText"
      },
      "index": {
        "description": "Serialize HTML escaped Unicode Text using the UTF-8 encoding",
        "hierarchy": "Blaze ByteString Builder Html Utf8",
        "module": "Blaze.ByteString.Builder.Html.Utf8",
        "name": "fromHtmlEscapedLazyText",
        "normalized": "Text-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Html Escaped Lazy Text",
        "signature": "Text-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Html-Utf8.html#v:fromHtmlEscapedShow",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Serialize a value by \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003eing it and then, HTML escaping and\n UTF-8 encoding the resulting \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Html.Utf8",
        "fct-package": "blaze-builder",
        "fct-signature": "a -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Html-Utf8.html#fromHtmlEscapedShow",
        "fct-type": "function",
        "title": "fromHtmlEscapedShow"
      },
      "index": {
        "description": "Serialize value by Show ing it and then HTML escaping and UTF-8 encoding the resulting String",
        "hierarchy": "Blaze ByteString Builder Html Utf8",
        "module": "Blaze.ByteString.Builder.Html.Utf8",
        "name": "fromHtmlEscapedShow",
        "normalized": "a-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Html Escaped Show",
        "signature": "a-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Html-Utf8.html#v:fromHtmlEscapedString",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Serialize a HTML escaped Unicode \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e using the UTF-8\n encoding.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Html.Utf8",
        "fct-package": "blaze-builder",
        "fct-signature": "String -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Html-Utf8.html#fromHtmlEscapedString",
        "fct-type": "function",
        "title": "fromHtmlEscapedString"
      },
      "index": {
        "description": "Serialize HTML escaped Unicode String using the UTF-8 encoding",
        "hierarchy": "Blaze ByteString Builder Html Utf8",
        "module": "Blaze.ByteString.Builder.Html.Utf8",
        "name": "fromHtmlEscapedString",
        "normalized": "String-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Html Escaped String",
        "signature": "String-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Html-Utf8.html#v:fromHtmlEscapedText",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Serialize a HTML escaped strict Unicode \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e value using the\n UTF-8 encoding.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Html.Utf8",
        "fct-package": "blaze-builder",
        "fct-signature": "Text -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Html-Utf8.html#fromHtmlEscapedText",
        "fct-type": "function",
        "title": "fromHtmlEscapedText"
      },
      "index": {
        "description": "Serialize HTML escaped strict Unicode Text value using the UTF-8 encoding",
        "hierarchy": "Blaze ByteString Builder Html Utf8",
        "module": "Blaze.ByteString.Builder.Html.Utf8",
        "name": "fromHtmlEscapedText",
        "normalized": "Text-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Html Escaped Text",
        "signature": "Text-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Html-Utf8.html#v:writeHtmlEscapedChar",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a HTML escaped and UTF-8 encoded Unicode character to a bufffer.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Html.Utf8",
        "fct-package": "blaze-builder",
        "fct-signature": "Char -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Html-Utf8.html#writeHtmlEscapedChar",
        "fct-type": "function",
        "title": "writeHtmlEscapedChar"
      },
      "index": {
        "description": "Write HTML escaped and UTF-8 encoded Unicode character to bufffer",
        "hierarchy": "Blaze ByteString Builder Html Utf8",
        "module": "Blaze.ByteString.Builder.Html.Utf8",
        "name": "writeHtmlEscapedChar",
        "normalized": "Char-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Html Escaped Char",
        "signature": "Char-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eWrite\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es for serializing integers.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003eBlaze.ByteString.Builder.Word\u003c/a\u003e for information about how to best write several\n integers at once.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "module",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html",
        "fct-type": "module",
        "title": "Int"
      },
      "index": {
        "description": "Write and Builder for serializing integers See Blaze.ByteString.Builder.Word for information about how to best write several integers at once",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "Int",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:fromInt16be",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize an \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "Int16 -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#fromInt16be",
        "fct-type": "function",
        "title": "fromInt16be"
      },
      "index": {
        "description": "Serialize an Int16 in big endian format",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "fromInt16be",
        "normalized": "Int-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Int",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:fromInt16host",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "Int16 -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#fromInt16host",
        "fct-type": "function",
        "title": "fromInt16host"
      },
      "index": {
        "description": "Write an Int16 in native host order and host endianness",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "fromInt16host",
        "normalized": "Int-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Int",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:fromInt16le",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize an \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "Int16 -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#fromInt16le",
        "fct-type": "function",
        "title": "fromInt16le"
      },
      "index": {
        "description": "Serialize an Int16 in little endian format",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "fromInt16le",
        "normalized": "Int-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Int",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:fromInt16sbe",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a list of \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003es in big endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "[Int16] -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#fromInt16sbe",
        "fct-type": "function",
        "title": "fromInt16sbe"
      },
      "index": {
        "description": "Serialize list of Int16 in big endian format",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "fromInt16sbe",
        "normalized": "[Int]-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Int",
        "signature": "[Int]-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:fromInt16shost",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a list of \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003es in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "[Int16] -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#fromInt16shost",
        "fct-type": "function",
        "title": "fromInt16shost"
      },
      "index": {
        "description": "Write list of Int16 in native host order and host endianness",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "fromInt16shost",
        "normalized": "[Int]-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Int",
        "signature": "[Int]-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:fromInt16sle",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a list of \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003es in little endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "[Int16] -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#fromInt16sle",
        "fct-type": "function",
        "title": "fromInt16sle"
      },
      "index": {
        "description": "Serialize list of Int16 in little endian format",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "fromInt16sle",
        "normalized": "[Int]-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Int",
        "signature": "[Int]-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:fromInt32be",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize an \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "Int32 -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#fromInt32be",
        "fct-type": "function",
        "title": "fromInt32be"
      },
      "index": {
        "description": "Serialize an Int32 in big endian format",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "fromInt32be",
        "normalized": "Int-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Int",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:fromInt32host",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "Int32 -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#fromInt32host",
        "fct-type": "function",
        "title": "fromInt32host"
      },
      "index": {
        "description": "Write an Int32 in native host order and host endianness",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "fromInt32host",
        "normalized": "Int-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Int",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:fromInt32le",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize an \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "Int32 -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#fromInt32le",
        "fct-type": "function",
        "title": "fromInt32le"
      },
      "index": {
        "description": "Serialize an Int32 in little endian format",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "fromInt32le",
        "normalized": "Int-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Int",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:fromInt32sbe",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a list of \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003es in big endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "[Int32] -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#fromInt32sbe",
        "fct-type": "function",
        "title": "fromInt32sbe"
      },
      "index": {
        "description": "Serialize list of Int32 in big endian format",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "fromInt32sbe",
        "normalized": "[Int]-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Int",
        "signature": "[Int]-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:fromInt32shost",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a list of \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003es in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "[Int32] -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#fromInt32shost",
        "fct-type": "function",
        "title": "fromInt32shost"
      },
      "index": {
        "description": "Write list of Int32 in native host order and host endianness",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "fromInt32shost",
        "normalized": "[Int]-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Int",
        "signature": "[Int]-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:fromInt32sle",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a list of \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003es in little endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "[Int32] -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#fromInt32sle",
        "fct-type": "function",
        "title": "fromInt32sle"
      },
      "index": {
        "description": "Serialize list of Int32 in little endian format",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "fromInt32sle",
        "normalized": "[Int]-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Int",
        "signature": "[Int]-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:fromInt64be",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize an \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "Int64 -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#fromInt64be",
        "fct-type": "function",
        "title": "fromInt64be"
      },
      "index": {
        "description": "Serialize an Int64 in big endian format",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "fromInt64be",
        "normalized": "Int-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Int",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:fromInt64host",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "Int64 -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#fromInt64host",
        "fct-type": "function",
        "title": "fromInt64host"
      },
      "index": {
        "description": "Write an Int64 in native host order and host endianness",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "fromInt64host",
        "normalized": "Int-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Int",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:fromInt64le",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize an \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "Int64 -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#fromInt64le",
        "fct-type": "function",
        "title": "fromInt64le"
      },
      "index": {
        "description": "Serialize an Int64 in little endian format",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "fromInt64le",
        "normalized": "Int-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Int",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:fromInt64sbe",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a list of \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003es in big endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "[Int64] -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#fromInt64sbe",
        "fct-type": "function",
        "title": "fromInt64sbe"
      },
      "index": {
        "description": "Serialize list of Int64 in big endian format",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "fromInt64sbe",
        "normalized": "[Int]-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Int",
        "signature": "[Int]-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:fromInt64shost",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a list of \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003es in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "[Int64] -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#fromInt64shost",
        "fct-type": "function",
        "title": "fromInt64shost"
      },
      "index": {
        "description": "Write list of Int64 in native host order and host endianness",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "fromInt64shost",
        "normalized": "[Int]-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Int",
        "signature": "[Int]-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:fromInt64sle",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a list of \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003es in little endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "[Int64] -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#fromInt64sle",
        "fct-type": "function",
        "title": "fromInt64sle"
      },
      "index": {
        "description": "Serialize list of Int64 in little endian format",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "fromInt64sle",
        "normalized": "[Int]-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Int",
        "signature": "[Int]-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:fromInt8",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a single byte.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "Int8 -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#fromInt8",
        "fct-type": "function",
        "title": "fromInt8"
      },
      "index": {
        "description": "Serialize single byte",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "fromInt8",
        "normalized": "Int-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Int",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:fromInt8s",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a list of bytes.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "[Int8] -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#fromInt8s",
        "fct-type": "function",
        "title": "fromInt8s"
      },
      "index": {
        "description": "Serialize list of bytes",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "fromInt8s",
        "normalized": "[Int]-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Int",
        "signature": "[Int]-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:fromInthost",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a single native machine \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e is serialized in host\n order, host endian form, for the machine you're on. On a 64 bit machine the\n \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e is an 8 byte value, on a 32 bit machine, 4 bytes. Values written this\n way are not portable to different endian or integer sized machines, without\n conversion.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "Int -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#fromInthost",
        "fct-type": "function",
        "title": "fromInthost"
      },
      "index": {
        "description": "Serialize single native machine Int The Int is serialized in host order host endian form for the machine you re on On bit machine the Int is an byte value on bit machine bytes Values written this way are not portable to different endian or integer sized machines without conversion",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "fromInthost",
        "normalized": "Int-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Inthost",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:fromIntshost",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a list of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es.\n See \u003ccode\u003e\u003ca\u003efromInthost\u003c/a\u003e\u003c/code\u003e for usage considerations.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "[Int] -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#fromIntshost",
        "fct-type": "function",
        "title": "fromIntshost"
      },
      "index": {
        "description": "Serialize list of Int See fromInthost for usage considerations",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "fromIntshost",
        "normalized": "[Int]-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Intshost",
        "signature": "[Int]-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:writeInt16be",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "Int16 -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#writeInt16be",
        "fct-type": "function",
        "title": "writeInt16be"
      },
      "index": {
        "description": "Write an Int16 in big endian format",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "writeInt16be",
        "normalized": "Int-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Int",
        "signature": "Int-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:writeInt16host",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "Int16 -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#writeInt16host",
        "fct-type": "function",
        "title": "writeInt16host"
      },
      "index": {
        "description": "Write an Int16 in native host order and host endianness",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "writeInt16host",
        "normalized": "Int-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Int",
        "signature": "Int-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:writeInt16le",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an \u003ccode\u003e\u003ca\u003eInt16\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "Int16 -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#writeInt16le",
        "fct-type": "function",
        "title": "writeInt16le"
      },
      "index": {
        "description": "Write an Int16 in little endian format",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "writeInt16le",
        "normalized": "Int-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Int",
        "signature": "Int-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:writeInt32be",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "Int32 -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#writeInt32be",
        "fct-type": "function",
        "title": "writeInt32be"
      },
      "index": {
        "description": "Write an Int32 in big endian format",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "writeInt32be",
        "normalized": "Int-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Int",
        "signature": "Int-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:writeInt32host",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "Int32 -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#writeInt32host",
        "fct-type": "function",
        "title": "writeInt32host"
      },
      "index": {
        "description": "Write an Int32 in native host order and host endianness",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "writeInt32host",
        "normalized": "Int-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Int",
        "signature": "Int-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:writeInt32le",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an \u003ccode\u003e\u003ca\u003eInt32\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "Int32 -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#writeInt32le",
        "fct-type": "function",
        "title": "writeInt32le"
      },
      "index": {
        "description": "Write an Int32 in little endian format",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "writeInt32le",
        "normalized": "Int-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Int",
        "signature": "Int-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:writeInt64be",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "Int64 -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#writeInt64be",
        "fct-type": "function",
        "title": "writeInt64be"
      },
      "index": {
        "description": "Write an Int64 in big endian format",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "writeInt64be",
        "normalized": "Int-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Int",
        "signature": "Int-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:writeInt64host",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "Int64 -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#writeInt64host",
        "fct-type": "function",
        "title": "writeInt64host"
      },
      "index": {
        "description": "Write an Int64 in native host order and host endianness",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "writeInt64host",
        "normalized": "Int-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Int",
        "signature": "Int-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:writeInt64le",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "Int64 -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#writeInt64le",
        "fct-type": "function",
        "title": "writeInt64le"
      },
      "index": {
        "description": "Write an Int64 in little endian format",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "writeInt64le",
        "normalized": "Int-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Int",
        "signature": "Int-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:writeInt8",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a single signed byte.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "Int8 -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#writeInt8",
        "fct-type": "function",
        "title": "writeInt8"
      },
      "index": {
        "description": "Write single signed byte",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "writeInt8",
        "normalized": "Int-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Int",
        "signature": "Int-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Int.html#v:writeInthost",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a single native machine \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e is written in host order,\n host endian form, for the machine you're on. On a 64 bit machine the \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\n is an 8 byte value, on a 32 bit machine, 4 bytes. Values written this way\n are not portable to different endian or integer sized machines, without\n conversion.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Int",
        "fct-package": "blaze-builder",
        "fct-signature": "Int -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Int.html#writeInthost",
        "fct-type": "function",
        "title": "writeInthost"
      },
      "index": {
        "description": "Write single native machine Int The Int is written in host order host endian form for the machine you re on On bit machine the Int is an byte value on bit machine bytes Values written this way are not portable to different endian or integer sized machines without conversion",
        "hierarchy": "Blaze ByteString Builder Int",
        "module": "Blaze.ByteString.Builder.Int",
        "name": "writeInthost",
        "normalized": "Int-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Inthost",
        "signature": "Int-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Buffer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExecution of the \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e monad and hence also \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es with respect to\n buffers.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Buffer",
        "fct-package": "blaze-builder",
        "fct-signature": "module",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Buffer.html",
        "fct-type": "module",
        "title": "Buffer"
      },
      "index": {
        "description": "Execution of the Put monad and hence also Builder with respect to buffers",
        "hierarchy": "Blaze ByteString Builder Internal Buffer",
        "module": "Blaze.ByteString.Builder.Internal.Buffer",
        "name": "Buffer",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Buffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Buffer.html#t:Buffer",
      "description": {
        "fct-descr": "\u003cp\u003eA buffer \u003ccode\u003eBuffer fpbuf p0 op ope\u003c/code\u003e describes a buffer with the underlying\n byte array \u003ccode\u003efpbuf..ope\u003c/code\u003e, the currently written slice \u003ccode\u003ep0..op\u003c/code\u003e and the free\n space \u003ccode\u003eop..ope\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Buffer",
        "fct-package": "blaze-builder",
        "fct-signature": "data",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Buffer.html#Buffer",
        "fct-type": "data",
        "title": "Buffer"
      },
      "index": {
        "description": "buffer Buffer fpbuf p0 op ope describes buffer with the underlying byte array fpbuf..ope the currently written slice p0..op and the free space op..ope",
        "hierarchy": "Blaze ByteString Builder Internal Buffer",
        "module": "Blaze.ByteString.Builder.Internal.Buffer",
        "name": "Buffer",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Buffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Buffer.html#t:BufferAllocStrategy",
      "description": {
        "fct-descr": "\u003cp\u003eA buffer allocation strategy \u003ccode\u003e(buf0, nextBuf)\u003c/code\u003e specifies the initial\n buffer to use and how to compute a new buffer \u003ccode\u003enextBuf minSize buf\u003c/code\u003e with at\n least size \u003ccode\u003eminSize\u003c/code\u003e from a filled buffer \u003ccode\u003ebuf\u003c/code\u003e. The double nesting of the\n \u003ccode\u003eIO\u003c/code\u003e monad helps to ensure that the reference to the filled buffer \u003ccode\u003ebuf\u003c/code\u003e is\n lost as soon as possible, but the new buffer doesn't have to be allocated\n too early.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Buffer",
        "fct-package": "blaze-builder",
        "fct-signature": "type",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Buffer.html#BufferAllocStrategy",
        "fct-type": "type",
        "title": "BufferAllocStrategy"
      },
      "index": {
        "description": "buffer allocation strategy buf0 nextBuf specifies the initial buffer to use and how to compute new buffer nextBuf minSize buf with at least size minSize from filled buffer buf The double nesting of the IO monad helps to ensure that the reference to the filled buffer buf is lost as soon as possible but the new buffer doesn have to be allocated too early",
        "hierarchy": "Blaze ByteString Builder Internal Buffer",
        "module": "Blaze.ByteString.Builder.Internal.Buffer",
        "name": "BufferAllocStrategy",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Buffer Alloc Strategy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Buffer.html#v:Buffer",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal.Buffer",
        "fct-package": "blaze-builder",
        "fct-signature": "Buffer !(ForeignPtr Word8) !(Ptr Word8) !(Ptr Word8) !(Ptr Word8)",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Buffer.html#Buffer",
        "fct-type": "function",
        "title": "Buffer"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal Buffer",
        "module": "Blaze.ByteString.Builder.Internal.Buffer",
        "name": "Buffer",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Buffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Buffer.html#v:allNewBuffersStrategy",
      "description": {
        "fct-descr": "\u003cp\u003eThe simplest buffer allocation strategy: whenever a buffer is requested,\n allocate a new one that is big enough for the next build step to execute.\n\u003c/p\u003e\u003cp\u003eNOTE that this allocation strategy may spill quite some memory upon direct\n insertion of a bytestring by the builder. Thats no problem for garbage\n collection, but it may lead to unreasonably high memory consumption in\n special circumstances.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Buffer",
        "fct-package": "blaze-builder",
        "fct-signature": "Int -\u003e BufferAllocStrategy",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Buffer.html#allNewBuffersStrategy",
        "fct-type": "function",
        "title": "allNewBuffersStrategy"
      },
      "index": {
        "description": "The simplest buffer allocation strategy whenever buffer is requested allocate new one that is big enough for the next build step to execute NOTE that this allocation strategy may spill quite some memory upon direct insertion of bytestring by the builder Thats no problem for garbage collection but it may lead to unreasonably high memory consumption in special circumstances",
        "hierarchy": "Blaze ByteString Builder Internal Buffer",
        "module": "Blaze.ByteString.Builder.Internal.Buffer",
        "name": "allNewBuffersStrategy",
        "normalized": "Int-\u003eBufferAllocStrategy",
        "package": "blaze-builder",
        "partial": "New Buffers Strategy",
        "signature": "Int-\u003eBufferAllocStrategy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Buffer.html#v:allocBuffer",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eallocBuffer size\u003c/code\u003e allocates a new buffer of size \u003ccode\u003esize\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Buffer",
        "fct-package": "blaze-builder",
        "fct-signature": "Int -\u003e IO Buffer",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Buffer.html#allocBuffer",
        "fct-type": "function",
        "title": "allocBuffer"
      },
      "index": {
        "description": "allocBuffer size allocates new buffer of size size",
        "hierarchy": "Blaze ByteString Builder Internal Buffer",
        "module": "Blaze.ByteString.Builder.Internal.Buffer",
        "name": "allocBuffer",
        "normalized": "Int-\u003eIO Buffer",
        "package": "blaze-builder",
        "partial": "Buffer",
        "signature": "Int-\u003eIO Buffer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Buffer.html#v:bufferSize",
      "description": {
        "fct-descr": "\u003cp\u003eThe size of the whole byte array underlying the buffer.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Buffer",
        "fct-package": "blaze-builder",
        "fct-signature": "Buffer -\u003e Int",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Buffer.html#bufferSize",
        "fct-type": "function",
        "title": "bufferSize"
      },
      "index": {
        "description": "The size of the whole byte array underlying the buffer",
        "hierarchy": "Blaze ByteString Builder Internal Buffer",
        "module": "Blaze.ByteString.Builder.Internal.Buffer",
        "name": "bufferSize",
        "normalized": "Buffer-\u003eInt",
        "package": "blaze-builder",
        "partial": "Size",
        "signature": "Buffer-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Buffer.html#v:execBuildStep",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a build step on the given buffer.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Buffer",
        "fct-package": "blaze-builder",
        "fct-signature": "BuildStep a -\u003e Buffer -\u003e IO (BuildSignal a)",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Buffer.html#execBuildStep",
        "fct-type": "function",
        "title": "execBuildStep"
      },
      "index": {
        "description": "Execute build step on the given buffer",
        "hierarchy": "Blaze ByteString Builder Internal Buffer",
        "module": "Blaze.ByteString.Builder.Internal.Buffer",
        "name": "execBuildStep",
        "normalized": "BuildStep a-\u003eBuffer-\u003eIO(BuildSignal a)",
        "package": "blaze-builder",
        "partial": "Build Step",
        "signature": "BuildStep a-\u003eBuffer-\u003eIO(BuildSignal a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Buffer.html#v:freeSize",
      "description": {
        "fct-descr": "\u003cp\u003eThe size of the free space of the buffer.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Buffer",
        "fct-package": "blaze-builder",
        "fct-signature": "Buffer -\u003e Int",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Buffer.html#freeSize",
        "fct-type": "function",
        "title": "freeSize"
      },
      "index": {
        "description": "The size of the free space of the buffer",
        "hierarchy": "Blaze ByteString Builder Internal Buffer",
        "module": "Blaze.ByteString.Builder.Internal.Buffer",
        "name": "freeSize",
        "normalized": "Buffer-\u003eInt",
        "package": "blaze-builder",
        "partial": "Size",
        "signature": "Buffer-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Buffer.html#v:nextSlice",
      "description": {
        "fct-descr": "\u003cp\u003eMove the beginning of the slice to the next free byte such that the\n remaining free space of the buffer can be filled further. This operation\n is safe and can be used to fill the remaining part of the buffer after a\n direct insertion of a bytestring or a flush.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Buffer",
        "fct-package": "blaze-builder",
        "fct-signature": "Int -\u003e Buffer -\u003e Maybe Buffer",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Buffer.html#nextSlice",
        "fct-type": "function",
        "title": "nextSlice"
      },
      "index": {
        "description": "Move the beginning of the slice to the next free byte such that the remaining free space of the buffer can be filled further This operation is safe and can be used to fill the remaining part of the buffer after direct insertion of bytestring or flush",
        "hierarchy": "Blaze ByteString Builder Internal Buffer",
        "module": "Blaze.ByteString.Builder.Internal.Buffer",
        "name": "nextSlice",
        "normalized": "Int-\u003eBuffer-\u003eMaybe Buffer",
        "package": "blaze-builder",
        "partial": "Slice",
        "signature": "Int-\u003eBuffer-\u003eMaybe Buffer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Buffer.html#v:reuseBuffer",
      "description": {
        "fct-descr": "\u003cp\u003eResets the beginning of the next slice and the next free byte such that\n the whole buffer can be filled again.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Buffer",
        "fct-package": "blaze-builder",
        "fct-signature": "Buffer -\u003e Buffer",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Buffer.html#reuseBuffer",
        "fct-type": "function",
        "title": "reuseBuffer"
      },
      "index": {
        "description": "Resets the beginning of the next slice and the next free byte such that the whole buffer can be filled again",
        "hierarchy": "Blaze ByteString Builder Internal Buffer",
        "module": "Blaze.ByteString.Builder.Internal.Buffer",
        "name": "reuseBuffer",
        "normalized": "Buffer-\u003eBuffer",
        "package": "blaze-builder",
        "partial": "Buffer",
        "signature": "Buffer-\u003eBuffer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Buffer.html#v:reuseBufferStrategy",
      "description": {
        "fct-descr": "\u003cp\u003eAn unsafe, but possibly more efficient buffer allocation strategy:\n reuse the buffer, if it is big enough for the next build step to execute.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Buffer",
        "fct-package": "blaze-builder",
        "fct-signature": "IO Buffer -\u003e BufferAllocStrategy",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Buffer.html#reuseBufferStrategy",
        "fct-type": "function",
        "title": "reuseBufferStrategy"
      },
      "index": {
        "description": "An unsafe but possibly more efficient buffer allocation strategy reuse the buffer if it is big enough for the next build step to execute",
        "hierarchy": "Blaze ByteString Builder Internal Buffer",
        "module": "Blaze.ByteString.Builder.Internal.Buffer",
        "name": "reuseBufferStrategy",
        "normalized": "IO Buffer-\u003eBufferAllocStrategy",
        "package": "blaze-builder",
        "partial": "Buffer Strategy",
        "signature": "IO Buffer-\u003eBufferAllocStrategy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Buffer.html#v:runPut",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a put on a buffer.\n\u003c/p\u003e\u003cp\u003eTODO: Generalize over buffer allocation strategy.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Buffer",
        "fct-package": "blaze-builder",
        "fct-signature": "(IO (BuildSignal a) -\u003e m (BuildSignal a)) -\u003e (Int -\u003e Buffer -\u003e m Buffer) -\u003e (ByteString -\u003e m ()) -\u003e Put a -\u003e Buffer -\u003e m (a, Buffer)",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Buffer.html#runPut",
        "fct-type": "function",
        "title": "runPut"
      },
      "index": {
        "description": "Execute put on buffer TODO Generalize over buffer allocation strategy",
        "hierarchy": "Blaze ByteString Builder Internal Buffer",
        "module": "Blaze.ByteString.Builder.Internal.Buffer",
        "name": "runPut",
        "normalized": "(IO(BuildSignal a)-\u003eb(BuildSignal a))-\u003e(Int-\u003eBuffer-\u003eb Buffer)-\u003e(ByteString-\u003eb())-\u003ePut a-\u003eBuffer-\u003eb(a,Buffer)",
        "package": "blaze-builder",
        "partial": "Put",
        "signature": "(IO(BuildSignal a)-\u003em(BuildSignal a))-\u003e(Int-\u003eBuffer-\u003em Buffer)-\u003e(ByteString-\u003em())-\u003ePut a-\u003eBuffer-\u003em(a,Buffer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Buffer.html#v:sliceSize",
      "description": {
        "fct-descr": "\u003cp\u003eThe size of the written slice in the buffer.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Buffer",
        "fct-package": "blaze-builder",
        "fct-signature": "Buffer -\u003e Int",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Buffer.html#sliceSize",
        "fct-type": "function",
        "title": "sliceSize"
      },
      "index": {
        "description": "The size of the written slice in the buffer",
        "hierarchy": "Blaze ByteString Builder Internal Buffer",
        "module": "Blaze.ByteString.Builder.Internal.Buffer",
        "name": "sliceSize",
        "normalized": "Buffer-\u003eInt",
        "package": "blaze-builder",
        "partial": "Size",
        "signature": "Buffer-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Buffer.html#v:unsafeFreezeBuffer",
      "description": {
        "fct-descr": "\u003cp\u003eConvert the buffer to a bytestring. This operation is unsafe in the sense\n that created bytestring shares the underlying byte array with the buffer.\n Hence, depending on the later use of this buffer (e.g., if it gets reset and\n filled again) referential transparency may be lost.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Buffer",
        "fct-package": "blaze-builder",
        "fct-signature": "Buffer -\u003e ByteString",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Buffer.html#unsafeFreezeBuffer",
        "fct-type": "function",
        "title": "unsafeFreezeBuffer"
      },
      "index": {
        "description": "Convert the buffer to bytestring This operation is unsafe in the sense that created bytestring shares the underlying byte array with the buffer Hence depending on the later use of this buffer e.g if it gets reset and filled again referential transparency may be lost",
        "hierarchy": "Blaze ByteString Builder Internal Buffer",
        "module": "Blaze.ByteString.Builder.Internal.Buffer",
        "name": "unsafeFreezeBuffer",
        "normalized": "Buffer-\u003eByteString",
        "package": "blaze-builder",
        "partial": "Freeze Buffer",
        "signature": "Buffer-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Buffer.html#v:unsafeFreezeNonEmptyBuffer",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a buffer to a non-empty bytestring. See \u003ccode\u003e\u003ca\u003eunsafeFreezeBuffer\u003c/a\u003e\u003c/code\u003e for\n the explanation of why this operation may be unsafe.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Buffer",
        "fct-package": "blaze-builder",
        "fct-signature": "Buffer -\u003e Maybe ByteString",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Buffer.html#unsafeFreezeNonEmptyBuffer",
        "fct-type": "function",
        "title": "unsafeFreezeNonEmptyBuffer"
      },
      "index": {
        "description": "Convert buffer to non-empty bytestring See unsafeFreezeBuffer for the explanation of why this operation may be unsafe",
        "hierarchy": "Blaze ByteString Builder Internal Buffer",
        "module": "Blaze.ByteString.Builder.Internal.Buffer",
        "name": "unsafeFreezeNonEmptyBuffer",
        "normalized": "Buffer-\u003eMaybe ByteString",
        "package": "blaze-builder",
        "partial": "Freeze Non Empty Buffer",
        "signature": "Buffer-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Buffer.html#v:updateEndOfSlice",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate the end of slice pointer.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Buffer",
        "fct-package": "blaze-builder",
        "fct-signature": "Buffer -\u003e Ptr Word8 -\u003e Buffer",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Buffer.html#updateEndOfSlice",
        "fct-type": "function",
        "title": "updateEndOfSlice"
      },
      "index": {
        "description": "Update the end of slice pointer",
        "hierarchy": "Blaze ByteString Builder Internal Buffer",
        "module": "Blaze.ByteString.Builder.Internal.Buffer",
        "name": "updateEndOfSlice",
        "normalized": "Buffer-\u003ePtr Word-\u003eBuffer",
        "package": "blaze-builder",
        "partial": "End Of Slice",
        "signature": "Buffer-\u003ePtr Word-\u003eBuffer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCore types and functions for the \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e monoid and the \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e monad based\n based on the 'blaze-builder' library by Jasper van der Jeugt and Simon\n Meier.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Types",
        "fct-package": "blaze-builder",
        "fct-signature": "module",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Core types and functions for the Builder monoid and the Put monad based based on the blaze-builder library by Jasper van der Jeugt and Simon Meier",
        "hierarchy": "Blaze ByteString Builder Internal Types",
        "module": "Blaze.ByteString.Builder.Internal.Types",
        "name": "Types",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Types.html#t:BufRange",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal.Types",
        "fct-package": "blaze-builder",
        "fct-signature": "data",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#BufRange",
        "fct-type": "data",
        "title": "BufRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal Types",
        "module": "Blaze.ByteString.Builder.Internal.Types",
        "name": "BufRange",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Buf Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Types.html#t:BuildSignal",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal.Types",
        "fct-package": "blaze-builder",
        "fct-signature": "data",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#BuildSignal",
        "fct-type": "data",
        "title": "BuildSignal"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal Types",
        "module": "Blaze.ByteString.Builder.Internal.Types",
        "name": "BuildSignal",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Build Signal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Types.html#t:BuildStep",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal.Types",
        "fct-package": "blaze-builder",
        "fct-signature": "newtype",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#BuildStep",
        "fct-type": "newtype",
        "title": "BuildStep"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal Types",
        "module": "Blaze.ByteString.Builder.Internal.Types",
        "name": "BuildStep",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Build Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Types.html#t:Builder",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal.Types",
        "fct-package": "blaze-builder",
        "fct-signature": "newtype",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#Builder",
        "fct-type": "newtype",
        "title": "Builder"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal Types",
        "module": "Blaze.ByteString.Builder.Internal.Types",
        "name": "Builder",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Types.html#t:Put",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal.Types",
        "fct-package": "blaze-builder",
        "fct-signature": "newtype",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#Put",
        "fct-type": "newtype",
        "title": "Put"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal Types",
        "module": "Blaze.ByteString.Builder.Internal.Types",
        "name": "Put",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Put",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Types.html#v:BufRange",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal.Types",
        "fct-package": "blaze-builder",
        "fct-signature": "BufRange !(Ptr Word8) !(Ptr Word8)",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#BufRange",
        "fct-type": "function",
        "title": "BufRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal Types",
        "module": "Blaze.ByteString.Builder.Internal.Types",
        "name": "BufRange",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Buf Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Types.html#v:BufferFull",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal.Types",
        "fct-package": "blaze-builder",
        "fct-signature": "BufferFull !Int !(Ptr Word8) !(BuildStep a)",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#BuildSignal",
        "fct-type": "function",
        "title": "BufferFull"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal Types",
        "module": "Blaze.ByteString.Builder.Internal.Types",
        "name": "BufferFull",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Buffer Full",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Types.html#v:BuildStep",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal.Types",
        "fct-package": "blaze-builder",
        "fct-signature": "BuildStep",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#BuildStep",
        "fct-type": "function",
        "title": "BuildStep"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal Types",
        "module": "Blaze.ByteString.Builder.Internal.Types",
        "name": "BuildStep",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Build Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Types.html#v:Builder",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal.Types",
        "fct-package": "blaze-builder",
        "fct-signature": "Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#Builder",
        "fct-type": "function",
        "title": "Builder"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal Types",
        "module": "Blaze.ByteString.Builder.Internal.Types",
        "name": "Builder",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Types.html#v:Done",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal.Types",
        "fct-package": "blaze-builder",
        "fct-signature": "Done !(Ptr Word8) a",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#BuildSignal",
        "fct-type": "function",
        "title": "Done"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal Types",
        "module": "Blaze.ByteString.Builder.Internal.Types",
        "name": "Done",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Done",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Types.html#v:InsertByteString",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal.Types",
        "fct-package": "blaze-builder",
        "fct-signature": "InsertByteString !(Ptr Word8) !ByteString !(BuildStep a)",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#BuildSignal",
        "fct-type": "function",
        "title": "InsertByteString"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal Types",
        "module": "Blaze.ByteString.Builder.Internal.Types",
        "name": "InsertByteString",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Insert Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Types.html#v:Put",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal.Types",
        "fct-package": "blaze-builder",
        "fct-signature": "Put",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#Put",
        "fct-type": "function",
        "title": "Put"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal Types",
        "module": "Blaze.ByteString.Builder.Internal.Types",
        "name": "Put",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Put",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Types.html#v:bufferFull",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal.Types",
        "fct-package": "blaze-builder",
        "fct-signature": "Int -\u003e Ptr Word8 -\u003e (BufRange -\u003e IO (BuildSignal a)) -\u003e BuildSignal a",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#bufferFull",
        "fct-type": "function",
        "title": "bufferFull"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal Types",
        "module": "Blaze.ByteString.Builder.Internal.Types",
        "name": "bufferFull",
        "normalized": "Int-\u003ePtr Word-\u003e(BufRange-\u003eIO(BuildSignal a))-\u003eBuildSignal a",
        "package": "blaze-builder",
        "partial": "Full",
        "signature": "Int-\u003ePtr Word-\u003e(BufRange-\u003eIO(BuildSignal a))-\u003eBuildSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Types.html#v:buildStep",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal.Types",
        "fct-package": "blaze-builder",
        "fct-signature": "(BufRange -\u003e IO (BuildSignal a)) -\u003e BuildStep a",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#buildStep",
        "fct-type": "function",
        "title": "buildStep"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal Types",
        "module": "Blaze.ByteString.Builder.Internal.Types",
        "name": "buildStep",
        "normalized": "(BufRange-\u003eIO(BuildSignal a))-\u003eBuildStep a",
        "package": "blaze-builder",
        "partial": "Step",
        "signature": "(BufRange-\u003eIO(BuildSignal a))-\u003eBuildStep a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Types.html#v:done",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal.Types",
        "fct-package": "blaze-builder",
        "fct-signature": "Ptr Word8 -\u003e a -\u003e BuildSignal a",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#done",
        "fct-type": "function",
        "title": "done"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal Types",
        "module": "Blaze.ByteString.Builder.Internal.Types",
        "name": "done",
        "normalized": "Ptr Word-\u003ea-\u003eBuildSignal a",
        "package": "blaze-builder",
        "partial": "",
        "signature": "Ptr Word-\u003ea-\u003eBuildSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Types.html#v:fromBuildStepCont",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal.Types",
        "fct-package": "blaze-builder",
        "fct-signature": "(forall r.  (BufRange -\u003e IO (BuildSignal r)) -\u003e BufRange -\u003e IO (BuildSignal r)) -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#fromBuildStepCont",
        "fct-type": "function",
        "title": "fromBuildStepCont"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal Types",
        "module": "Blaze.ByteString.Builder.Internal.Types",
        "name": "fromBuildStepCont",
        "normalized": "(a b(BufRange-\u003eIO(BuildSignal c))-\u003eBufRange-\u003eIO(BuildSignal c))-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Build Step Cont",
        "signature": "(forall r.(BufRange-\u003eIO(BuildSignal r))-\u003eBufRange-\u003eIO(BuildSignal r))-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Types.html#v:fromPut",
      "description": {
        "fct-descr": "\u003cp\u003eIgnore the value of a put and only exploit its output side effect.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Types",
        "fct-package": "blaze-builder",
        "fct-signature": "Put a -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#fromPut",
        "fct-type": "function",
        "title": "fromPut"
      },
      "index": {
        "description": "Ignore the value of put and only exploit its output side effect",
        "hierarchy": "Blaze ByteString Builder Internal Types",
        "module": "Blaze.ByteString.Builder.Internal.Types",
        "name": "fromPut",
        "normalized": "Put a-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Put",
        "signature": "Put a-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Types.html#v:insertByteString",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal.Types",
        "fct-package": "blaze-builder",
        "fct-signature": "Ptr Word8 -\u003e ByteString -\u003e (BufRange -\u003e IO (BuildSignal a)) -\u003e BuildSignal a",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#insertByteString",
        "fct-type": "function",
        "title": "insertByteString"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal Types",
        "module": "Blaze.ByteString.Builder.Internal.Types",
        "name": "insertByteString",
        "normalized": "Ptr Word-\u003eByteString-\u003e(BufRange-\u003eIO(BuildSignal a))-\u003eBuildSignal a",
        "package": "blaze-builder",
        "partial": "Byte String",
        "signature": "Ptr Word-\u003eByteString-\u003e(BufRange-\u003eIO(BuildSignal a))-\u003eBuildSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Types.html#v:putBuildStepCont",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal.Types",
        "fct-package": "blaze-builder",
        "fct-signature": "(forall r.  (a -\u003e BufRange -\u003e IO (BuildSignal r)) -\u003e BufRange -\u003e IO (BuildSignal r)) -\u003e Put a",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#putBuildStepCont",
        "fct-type": "function",
        "title": "putBuildStepCont"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal Types",
        "module": "Blaze.ByteString.Builder.Internal.Types",
        "name": "putBuildStepCont",
        "normalized": "(a b(c-\u003eBufRange-\u003eIO(BuildSignal d))-\u003eBufRange-\u003eIO(BuildSignal d))-\u003ePut c",
        "package": "blaze-builder",
        "partial": "Build Step Cont",
        "signature": "(forall r.(a-\u003eBufRange-\u003eIO(BuildSignal r))-\u003eBufRange-\u003eIO(BuildSignal r))-\u003ePut a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Types.html#v:putBuilder",
      "description": {
        "fct-descr": "\u003cp\u003ePut the given builder.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Types",
        "fct-package": "blaze-builder",
        "fct-signature": "Builder -\u003e Put ()",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#putBuilder",
        "fct-type": "function",
        "title": "putBuilder"
      },
      "index": {
        "description": "Put the given builder",
        "hierarchy": "Blaze ByteString Builder Internal Types",
        "module": "Blaze.ByteString.Builder.Internal.Types",
        "name": "putBuilder",
        "normalized": "Builder-\u003ePut()",
        "package": "blaze-builder",
        "partial": "Builder",
        "signature": "Builder-\u003ePut()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Types.html#v:putLiftIO",
      "description": {
        "fct-descr": "\u003cp\u003eLift the given IO action.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Types",
        "fct-package": "blaze-builder",
        "fct-signature": "IO a -\u003e Put a",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#putLiftIO",
        "fct-type": "function",
        "title": "putLiftIO"
      },
      "index": {
        "description": "Lift the given IO action",
        "hierarchy": "Blaze ByteString Builder Internal Types",
        "module": "Blaze.ByteString.Builder.Internal.Types",
        "name": "putLiftIO",
        "normalized": "IO a-\u003ePut a",
        "package": "blaze-builder",
        "partial": "Lift IO",
        "signature": "IO a-\u003ePut a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Types.html#v:runBuildStep",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Blaze.ByteString.Builder.Internal.Types",
        "fct-package": "blaze-builder",
        "fct-signature": "BufRange -\u003e IO (BuildSignal a)",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#BuildStep",
        "fct-type": "function",
        "title": "runBuildStep"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal Types",
        "module": "Blaze.ByteString.Builder.Internal.Types",
        "name": "runBuildStep",
        "normalized": "BufRange-\u003eIO(BuildSignal a)",
        "package": "blaze-builder",
        "partial": "Build Step",
        "signature": "BufRange-\u003eIO(BuildSignal a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Types.html#v:unBuilder",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Blaze.ByteString.Builder.Internal.Types",
        "fct-package": "blaze-builder",
        "fct-signature": "forall r.  BuildStep r -\u003e BuildStep r",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#Builder",
        "fct-type": "function",
        "title": "unBuilder"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal Types",
        "module": "Blaze.ByteString.Builder.Internal.Types",
        "name": "unBuilder",
        "normalized": "a b BuildStep c-\u003eBuildStep c",
        "package": "blaze-builder",
        "partial": "Builder",
        "signature": "forall r. BuildStep r-\u003eBuildStep r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Types.html#v:unPut",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Blaze.ByteString.Builder.Internal.Types",
        "fct-package": "blaze-builder",
        "fct-signature": "forall r.  (a -\u003e BuildStep r) -\u003e BuildStep r",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#Put",
        "fct-type": "function",
        "title": "unPut"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal Types",
        "module": "Blaze.ByteString.Builder.Internal.Types",
        "name": "unPut",
        "normalized": "a b(c-\u003eBuildStep d)-\u003eBuildStep d",
        "package": "blaze-builder",
        "partial": "Put",
        "signature": "forall r.(a-\u003eBuildStep r)-\u003eBuildStep r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Write.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA general and efficient write type that allows for the easy construction of\n builders for (smallish) bounded size writes to a buffer.\n\u003c/p\u003e\u003cp\u003eFIXME: Improve documentation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Write",
        "fct-package": "blaze-builder",
        "fct-signature": "module",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Write.html",
        "fct-type": "module",
        "title": "Write"
      },
      "index": {
        "description": "general and efficient write type that allows for the easy construction of builders for smallish bounded size writes to buffer FIXME Improve documentation",
        "hierarchy": "Blaze ByteString Builder Internal Write",
        "module": "Blaze.ByteString.Builder.Internal.Write",
        "name": "Write",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Write",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Write.html#t:Poke",
      "description": {
        "fct-descr": "\u003cp\u003eChanging a sequence of bytes starting from the given pointer. \u003ccode\u003e\u003ca\u003ePoke\u003c/a\u003e\u003c/code\u003es are\n the most primitive buffer manipulation. In most cases, you don't use the\n explicitely but as part of a \u003ccode\u003e\u003ca\u003eWrite\u003c/a\u003e\u003c/code\u003e, which also tells how many bytes will\n be changed at most.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Write",
        "fct-package": "blaze-builder",
        "fct-signature": "data",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Write.html#Poke",
        "fct-type": "data",
        "title": "Poke"
      },
      "index": {
        "description": "Changing sequence of bytes starting from the given pointer Poke are the most primitive buffer manipulation In most cases you don use the explicitely but as part of Write which also tells how many bytes will be changed at most",
        "hierarchy": "Blaze ByteString Builder Internal Write",
        "module": "Blaze.ByteString.Builder.Internal.Write",
        "name": "Poke",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Poke",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Write.html#t:Write",
      "description": {
        "fct-descr": "\u003cp\u003eA write of a bounded number of bytes.\n\u003c/p\u003e\u003cp\u003eWhen defining a function \u003ccode\u003ewrite :: a -\u003e Write\u003c/code\u003e for some \u003ccode\u003ea\u003c/code\u003e, then it is\n important to ensure that the bound on the number of bytes written is\n data-independent. Formally,\n\u003c/p\u003e\u003cpre\u003e forall x y. getBound (write x) = getBound (write y)\u003c/pre\u003e\u003cp\u003eThe idea is that this data-independent bound is specified such that the\n compiler can optimize the check, if there are enough free bytes in the buffer,\n to a single subtraction between the pointer to the next free byte and the\n pointer to the end of the buffer with this constant bound of the maximal\n number of bytes to be written.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Write",
        "fct-package": "blaze-builder",
        "fct-signature": "data",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Write.html#Write",
        "fct-type": "data",
        "title": "Write"
      },
      "index": {
        "description": "write of bounded number of bytes When defining function write Write for some then it is important to ensure that the bound on the number of bytes written is data-independent Formally forall getBound write getBound write The idea is that this data-independent bound is specified such that the compiler can optimize the check if there are enough free bytes in the buffer to single subtraction between the pointer to the next free byte and the pointer to the end of the buffer with this constant bound of the maximal number of bytes to be written",
        "hierarchy": "Blaze ByteString Builder Internal Write",
        "module": "Blaze.ByteString.Builder.Internal.Write",
        "name": "Write",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Write",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Write.html#v:boundedWrite",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eboundedWrite size write\u003c/code\u003e creates a bounded write from a \u003ccode\u003ewrite\u003c/code\u003e that does\n not write more than \u003ccode\u003esize\u003c/code\u003e bytes.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Write",
        "fct-package": "blaze-builder",
        "fct-signature": "Int -\u003e Poke -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Write.html#boundedWrite",
        "fct-type": "function",
        "title": "boundedWrite"
      },
      "index": {
        "description": "boundedWrite size write creates bounded write from write that does not write more than size bytes",
        "hierarchy": "Blaze ByteString Builder Internal Write",
        "module": "Blaze.ByteString.Builder.Internal.Write",
        "name": "boundedWrite",
        "normalized": "Int-\u003ePoke-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Write",
        "signature": "Int-\u003ePoke-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Write.html#v:exactWrite",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eexactWrite size io\u003c/code\u003e creates a bounded write that can later be converted to\n a builder that writes exactly \u003ccode\u003esize\u003c/code\u003e bytes. Note that \u003ccode\u003eio\u003c/code\u003e MUST write\n EXACTLY \u003ccode\u003esize\u003c/code\u003e bytes to the buffer!\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Write",
        "fct-package": "blaze-builder",
        "fct-signature": "Int -\u003e (Ptr Word8 -\u003e IO ()) -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Write.html#exactWrite",
        "fct-type": "function",
        "title": "exactWrite"
      },
      "index": {
        "description": "exactWrite size io creates bounded write that can later be converted to builder that writes exactly size bytes Note that io MUST write EXACTLY size bytes to the buffer",
        "hierarchy": "Blaze ByteString Builder Internal Write",
        "module": "Blaze.ByteString.Builder.Internal.Write",
        "name": "exactWrite",
        "normalized": "Int-\u003e(Ptr Word-\u003eIO())-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Write",
        "signature": "Int-\u003e(Ptr Word-\u003eIO())-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Write.html#v:fromStorable",
      "description": {
        "fct-descr": "\u003cp\u003eA builder that serializes a storable value. No alignment is done.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Write",
        "fct-package": "blaze-builder",
        "fct-signature": "a -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Write.html#fromStorable",
        "fct-type": "function",
        "title": "fromStorable"
      },
      "index": {
        "description": "builder that serializes storable value No alignment is done",
        "hierarchy": "Blaze ByteString Builder Internal Write",
        "module": "Blaze.ByteString.Builder.Internal.Write",
        "name": "fromStorable",
        "normalized": "a-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Storable",
        "signature": "a-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Write.html#v:fromStorables",
      "description": {
        "fct-descr": "\u003cp\u003eA builder that serializes a list of storable values by writing them\n consecutively. No alignment is done. Parsing information needs to be\n provided externally.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Write",
        "fct-package": "blaze-builder",
        "fct-signature": "[a] -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Write.html#fromStorables",
        "fct-type": "function",
        "title": "fromStorables"
      },
      "index": {
        "description": "builder that serializes list of storable values by writing them consecutively No alignment is done Parsing information needs to be provided externally",
        "hierarchy": "Blaze ByteString Builder Internal Write",
        "module": "Blaze.ByteString.Builder.Internal.Write",
        "name": "fromStorables",
        "normalized": "[a]-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Storables",
        "signature": "[a]-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Write.html#v:fromWrite",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a builder that execute a single \u003ccode\u003e\u003ca\u003eWrite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Write",
        "fct-package": "blaze-builder",
        "fct-signature": "Write -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Write.html#fromWrite",
        "fct-type": "function",
        "title": "fromWrite"
      },
      "index": {
        "description": "Create builder that execute single Write",
        "hierarchy": "Blaze ByteString Builder Internal Write",
        "module": "Blaze.ByteString.Builder.Internal.Write",
        "name": "fromWrite",
        "normalized": "Write-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Write",
        "signature": "Write-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Write.html#v:fromWriteList",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e writing a list of data one element at a time.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Write",
        "fct-package": "blaze-builder",
        "fct-signature": "(a -\u003e Write) -\u003e [a] -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Write.html#fromWriteList",
        "fct-type": "function",
        "title": "fromWriteList"
      },
      "index": {
        "description": "Construct Builder writing list of data one element at time",
        "hierarchy": "Blaze ByteString Builder Internal Write",
        "module": "Blaze.ByteString.Builder.Internal.Write",
        "name": "fromWriteList",
        "normalized": "(a-\u003eWrite)-\u003e[a]-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Write List",
        "signature": "(a-\u003eWrite)-\u003e[a]-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Write.html#v:fromWriteSingleton",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal.Write",
        "fct-package": "blaze-builder",
        "fct-signature": "(a -\u003e Write) -\u003e a -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Write.html#fromWriteSingleton",
        "fct-type": "function",
        "title": "fromWriteSingleton"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal Write",
        "module": "Blaze.ByteString.Builder.Internal.Write",
        "name": "fromWriteSingleton",
        "normalized": "(a-\u003eWrite)-\u003ea-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Write Singleton",
        "signature": "(a-\u003eWrite)-\u003ea-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Write.html#v:getBound",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the maximal number of bytes that this write could write.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Write",
        "fct-package": "blaze-builder",
        "fct-signature": "Write -\u003e Int",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Write.html#getBound",
        "fct-type": "function",
        "title": "getBound"
      },
      "index": {
        "description": "Extract the maximal number of bytes that this write could write",
        "hierarchy": "Blaze ByteString Builder Internal Write",
        "module": "Blaze.ByteString.Builder.Internal.Write",
        "name": "getBound",
        "normalized": "Write-\u003eInt",
        "package": "blaze-builder",
        "partial": "Bound",
        "signature": "Write-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Write.html#v:getBound-39-",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the maximal number of bytes that this write could write in any\n case. Assumes that the bound of the write is data-independent.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Write",
        "fct-package": "blaze-builder",
        "fct-signature": "String-\u003e (a -\u003e Write)-\u003e Int",
        "fct-type": "function",
        "title": "getBound'"
      },
      "index": {
        "description": "Extract the maximal number of bytes that this write could write in any case Assumes that the bound of the write is data-independent",
        "hierarchy": "Blaze ByteString Builder Internal Write",
        "module": "Blaze.ByteString.Builder.Internal.Write",
        "name": "getBound'",
        "normalized": "String-\u003e(a-\u003eWrite)-\u003eInt",
        "package": "blaze-builder",
        "partial": "Bound'",
        "signature": "String-\u003e(a-\u003eWrite)-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Write.html#v:getPoke",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the \u003ccode\u003e\u003ca\u003ePoke\u003c/a\u003e\u003c/code\u003e action of a write.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Write",
        "fct-package": "blaze-builder",
        "fct-signature": "Write -\u003e Poke",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Write.html#getPoke",
        "fct-type": "function",
        "title": "getPoke"
      },
      "index": {
        "description": "Extract the Poke action of write",
        "hierarchy": "Blaze ByteString Builder Internal Write",
        "module": "Blaze.ByteString.Builder.Internal.Write",
        "name": "getPoke",
        "normalized": "Write-\u003ePoke",
        "package": "blaze-builder",
        "partial": "Poke",
        "signature": "Write-\u003ePoke"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Write.html#v:pokeN",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003epokeN size io\u003c/code\u003e creates a write that denotes the writing of \u003ccode\u003esize\u003c/code\u003e bytes\n to a buffer using the IO action \u003ccode\u003eio\u003c/code\u003e. Note that \u003ccode\u003eio\u003c/code\u003e MUST write EXACTLY \u003ccode\u003esize\u003c/code\u003e\n bytes to the buffer!\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Write",
        "fct-package": "blaze-builder",
        "fct-signature": "Int -\u003e (Ptr Word8 -\u003e IO ()) -\u003e Poke",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Write.html#pokeN",
        "fct-type": "function",
        "title": "pokeN"
      },
      "index": {
        "description": "pokeN size io creates write that denotes the writing of size bytes to buffer using the IO action io Note that io MUST write EXACTLY size bytes to the buffer",
        "hierarchy": "Blaze ByteString Builder Internal Write",
        "module": "Blaze.ByteString.Builder.Internal.Write",
        "name": "pokeN",
        "normalized": "Int-\u003e(Ptr Word-\u003eIO())-\u003ePoke",
        "package": "blaze-builder",
        "partial": "",
        "signature": "Int-\u003e(Ptr Word-\u003eIO())-\u003ePoke"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Write.html#v:runPoke",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal.Write",
        "fct-package": "blaze-builder",
        "fct-signature": "Poke -\u003e Ptr Word8 -\u003e IO (Ptr Word8)",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Write.html#runPoke",
        "fct-type": "function",
        "title": "runPoke"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal Write",
        "module": "Blaze.ByteString.Builder.Internal.Write",
        "name": "runPoke",
        "normalized": "Poke-\u003ePtr Word-\u003eIO(Ptr Word)",
        "package": "blaze-builder",
        "partial": "Poke",
        "signature": "Poke-\u003ePtr Word-\u003eIO(Ptr Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Write.html#v:runWrite",
      "description": {
        "fct-descr": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003ePoke\u003c/a\u003e\u003c/code\u003e action of a write.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Write",
        "fct-package": "blaze-builder",
        "fct-signature": "Write -\u003e Ptr Word8 -\u003e IO (Ptr Word8)",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Write.html#runWrite",
        "fct-type": "function",
        "title": "runWrite"
      },
      "index": {
        "description": "Run the Poke action of write",
        "hierarchy": "Blaze ByteString Builder Internal Write",
        "module": "Blaze.ByteString.Builder.Internal.Write",
        "name": "runWrite",
        "normalized": "Write-\u003ePtr Word-\u003eIO(Ptr Word)",
        "package": "blaze-builder",
        "partial": "Write",
        "signature": "Write-\u003ePtr Word-\u003eIO(Ptr Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Write.html#v:writeEq",
      "description": {
        "fct-descr": "\u003cp\u003eCompare the value to a test value and use the first write action for the\n equal case and the second write action for the non-equal case.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Write",
        "fct-package": "blaze-builder",
        "fct-signature": "a -\u003e (a -\u003e Write) -\u003e (a -\u003e Write) -\u003e a -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Write.html#writeEq",
        "fct-type": "function",
        "title": "writeEq"
      },
      "index": {
        "description": "Compare the value to test value and use the first write action for the equal case and the second write action for the non-equal case",
        "hierarchy": "Blaze ByteString Builder Internal Write",
        "module": "Blaze.ByteString.Builder.Internal.Write",
        "name": "writeEq",
        "normalized": "a-\u003e(a-\u003eWrite)-\u003e(a-\u003eWrite)-\u003ea-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Eq",
        "signature": "a-\u003e(a-\u003eWrite)-\u003e(a-\u003eWrite)-\u003ea-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Write.html#v:writeIf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ewriteIf p wTrue wFalse x\u003c/code\u003e creates a \u003ccode\u003e\u003ca\u003eWrite\u003c/a\u003e\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003ePoke\u003c/a\u003e\u003c/code\u003e equal to \u003ccode\u003ewTrue\n x\u003c/code\u003e, if \u003ccode\u003ep x\u003c/code\u003e and equal to \u003ccode\u003ewFalse x\u003c/code\u003e otherwise. The bound of this new\n \u003ccode\u003e\u003ca\u003eWrite\u003c/a\u003e\u003c/code\u003e is the maximum of the bounds for either \u003ccode\u003e\u003ca\u003eWrite\u003c/a\u003e\u003c/code\u003e. This yields a data\n independent bound, if the bound for \u003ccode\u003ewTrue\u003c/code\u003e and \u003ccode\u003ewFalse\u003c/code\u003e is already data\n independent.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Write",
        "fct-package": "blaze-builder",
        "fct-signature": "(a -\u003e Bool) -\u003e (a -\u003e Write) -\u003e (a -\u003e Write) -\u003e a -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Write.html#writeIf",
        "fct-type": "function",
        "title": "writeIf"
      },
      "index": {
        "description": "writeIf wTrue wFalse creates Write with Poke equal to wTrue if and equal to wFalse otherwise The bound of this new Write is the maximum of the bounds for either Write This yields data independent bound if the bound for wTrue and wFalse is already data independent",
        "hierarchy": "Blaze ByteString Builder Internal Write",
        "module": "Blaze.ByteString.Builder.Internal.Write",
        "name": "writeIf",
        "normalized": "(a-\u003eBool)-\u003e(a-\u003eWrite)-\u003e(a-\u003eWrite)-\u003ea-\u003eWrite",
        "package": "blaze-builder",
        "partial": "If",
        "signature": "(a-\u003eBool)-\u003e(a-\u003eWrite)-\u003e(a-\u003eWrite)-\u003ea-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Write.html#v:writeLiftIO",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ewriteLiftIO io write\u003c/code\u003e creates a write executes the \u003ccode\u003eio\u003c/code\u003e action to compute\n the value that is then written.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Write",
        "fct-package": "blaze-builder",
        "fct-signature": "(a -\u003e Write) -\u003e IO a -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Write.html#writeLiftIO",
        "fct-type": "function",
        "title": "writeLiftIO"
      },
      "index": {
        "description": "writeLiftIO io write creates write executes the io action to compute the value that is then written",
        "hierarchy": "Blaze ByteString Builder Internal Write",
        "module": "Blaze.ByteString.Builder.Internal.Write",
        "name": "writeLiftIO",
        "normalized": "(a-\u003eWrite)-\u003eIO a-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Lift IO",
        "signature": "(a-\u003eWrite)-\u003eIO a-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Write.html#v:writeOrd",
      "description": {
        "fct-descr": "\u003cp\u003eA write combinator useful to build decision trees for deciding what value\n to write with a constant bound on the maximal number of bytes written.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Write",
        "fct-package": "blaze-builder",
        "fct-signature": "a -\u003e (a -\u003e Write) -\u003e (a -\u003e Write) -\u003e (a -\u003e Write) -\u003e a -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Write.html#writeOrd",
        "fct-type": "function",
        "title": "writeOrd"
      },
      "index": {
        "description": "write combinator useful to build decision trees for deciding what value to write with constant bound on the maximal number of bytes written",
        "hierarchy": "Blaze ByteString Builder Internal Write",
        "module": "Blaze.ByteString.Builder.Internal.Write",
        "name": "writeOrd",
        "normalized": "a-\u003e(a-\u003eWrite)-\u003e(a-\u003eWrite)-\u003e(a-\u003eWrite)-\u003ea-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Ord",
        "signature": "a-\u003e(a-\u003eWrite)-\u003e(a-\u003eWrite)-\u003e(a-\u003eWrite)-\u003ea-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Write.html#v:writeOrdering",
      "description": {
        "fct-descr": "\u003cp\u003eTODO: Test this. It might well be too difficult to use.\n   FIXME: Better name required!\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Write",
        "fct-package": "blaze-builder",
        "fct-signature": "(a -\u003e Ordering) -\u003e (a -\u003e Write) -\u003e (a -\u003e Write) -\u003e (a -\u003e Write) -\u003e a -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Write.html#writeOrdering",
        "fct-type": "function",
        "title": "writeOrdering"
      },
      "index": {
        "description": "TODO Test this It might well be too difficult to use FIXME Better name required",
        "hierarchy": "Blaze ByteString Builder Internal Write",
        "module": "Blaze.ByteString.Builder.Internal.Write",
        "name": "writeOrdering",
        "normalized": "(a-\u003eOrdering)-\u003e(a-\u003eWrite)-\u003e(a-\u003eWrite)-\u003e(a-\u003eWrite)-\u003ea-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Ordering",
        "signature": "(a-\u003eOrdering)-\u003e(a-\u003eWrite)-\u003e(a-\u003eWrite)-\u003e(a-\u003eWrite)-\u003ea-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal-Write.html#v:writeStorable",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a storable value.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal.Write",
        "fct-package": "blaze-builder",
        "fct-signature": "a -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Write.html#writeStorable",
        "fct-type": "function",
        "title": "writeStorable"
      },
      "index": {
        "description": "Write storable value",
        "hierarchy": "Blaze ByteString Builder Internal Write",
        "module": "Blaze.ByteString.Builder.Internal.Write",
        "name": "writeStorable",
        "normalized": "a-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Storable",
        "signature": "a-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCore types and functions for the \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e monoid and the \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal",
        "fct-package": "blaze-builder",
        "fct-signature": "module",
        "fct-source": "src/Blaze-ByteString-Builder-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "Core types and functions for the Builder monoid and the Put monad",
        "hierarchy": "Blaze ByteString Builder Internal",
        "module": "Blaze.ByteString.Builder.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal.html#t:BufRange",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal",
        "fct-package": "blaze-builder",
        "fct-signature": "data",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#BufRange",
        "fct-type": "data",
        "title": "BufRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal",
        "module": "Blaze.ByteString.Builder.Internal",
        "name": "BufRange",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Buf Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal.html#t:BuildSignal",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal",
        "fct-package": "blaze-builder",
        "fct-signature": "data",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#BuildSignal",
        "fct-type": "data",
        "title": "BuildSignal"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal",
        "module": "Blaze.ByteString.Builder.Internal",
        "name": "BuildSignal",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Build Signal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal.html#t:BuildStep",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal",
        "fct-package": "blaze-builder",
        "fct-signature": "data",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#BuildStep",
        "fct-type": "data",
        "title": "BuildStep"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal",
        "module": "Blaze.ByteString.Builder.Internal",
        "name": "BuildStep",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Build Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal.html#t:Builder",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal",
        "fct-package": "blaze-builder",
        "fct-signature": "data",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#Builder",
        "fct-type": "data",
        "title": "Builder"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal",
        "module": "Blaze.ByteString.Builder.Internal",
        "name": "Builder",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal.html#t:Put",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal",
        "fct-package": "blaze-builder",
        "fct-signature": "data",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#Put",
        "fct-type": "data",
        "title": "Put"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal",
        "module": "Blaze.ByteString.Builder.Internal",
        "name": "Put",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Put",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal.html#v:BufRange",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal",
        "fct-package": "blaze-builder",
        "fct-signature": "BufRange !(Ptr Word8) !(Ptr Word8)",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#BufRange",
        "fct-type": "function",
        "title": "BufRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal",
        "module": "Blaze.ByteString.Builder.Internal",
        "name": "BufRange",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Buf Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal.html#v:bufferFull",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal",
        "fct-package": "blaze-builder",
        "fct-signature": "Int -\u003e Ptr Word8 -\u003e (BufRange -\u003e IO (BuildSignal a)) -\u003e BuildSignal a",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#bufferFull",
        "fct-type": "function",
        "title": "bufferFull"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal",
        "module": "Blaze.ByteString.Builder.Internal",
        "name": "bufferFull",
        "normalized": "Int-\u003ePtr Word-\u003e(BufRange-\u003eIO(BuildSignal a))-\u003eBuildSignal a",
        "package": "blaze-builder",
        "partial": "Full",
        "signature": "Int-\u003ePtr Word-\u003e(BufRange-\u003eIO(BuildSignal a))-\u003eBuildSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal.html#v:defaultBufferSize",
      "description": {
        "fct-descr": "\u003cp\u003eDefault size (~32kb) for the buffer that becomes a chunk of the output\n stream once it is filled.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal",
        "fct-package": "blaze-builder",
        "fct-signature": "Int",
        "fct-source": "src/Blaze-ByteString-Builder-Internal.html#defaultBufferSize",
        "fct-type": "function",
        "title": "defaultBufferSize"
      },
      "index": {
        "description": "Default size kb for the buffer that becomes chunk of the output stream once it is filled",
        "hierarchy": "Blaze ByteString Builder Internal",
        "module": "Blaze.ByteString.Builder.Internal",
        "name": "defaultBufferSize",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Buffer Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal.html#v:defaultFirstBufferSize",
      "description": {
        "fct-descr": "\u003cp\u003eThe default length (64) for the first buffer to be allocated when\n converting a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e to a lazy bytestring.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003etoLazyByteStringWith\u003c/a\u003e\u003c/code\u003e for further explanation.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal",
        "fct-package": "blaze-builder",
        "fct-signature": "Int",
        "fct-source": "src/Blaze-ByteString-Builder-Internal.html#defaultFirstBufferSize",
        "fct-type": "function",
        "title": "defaultFirstBufferSize"
      },
      "index": {
        "description": "The default length for the first buffer to be allocated when converting Builder to lazy bytestring See toLazyByteStringWith for further explanation",
        "hierarchy": "Blaze ByteString Builder Internal",
        "module": "Blaze.ByteString.Builder.Internal",
        "name": "defaultFirstBufferSize",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "First Buffer Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal.html#v:defaultMaximalCopySize",
      "description": {
        "fct-descr": "\u003cp\u003eThe maximal number of bytes for that copying is cheaper than direct\n insertion into the output stream. This takes into account the fragmentation\n that may occur in the output buffer due to the early \u003ccode\u003e\u003ca\u003eflush\u003c/a\u003e\u003c/code\u003e implied by the\n direct bytestring insertion.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003edefaultMaximalCopySize\u003c/a\u003e\u003c/code\u003e = 2 * \u003ccode\u003e\u003ca\u003edefaultMinimalBufferSize\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal",
        "fct-package": "blaze-builder",
        "fct-signature": "Int",
        "fct-source": "src/Blaze-ByteString-Builder-Internal.html#defaultMaximalCopySize",
        "fct-type": "function",
        "title": "defaultMaximalCopySize"
      },
      "index": {
        "description": "The maximal number of bytes for that copying is cheaper than direct insertion into the output stream This takes into account the fragmentation that may occur in the output buffer due to the early flush implied by the direct bytestring insertion defaultMaximalCopySize defaultMinimalBufferSize",
        "hierarchy": "Blaze ByteString Builder Internal",
        "module": "Blaze.ByteString.Builder.Internal",
        "name": "defaultMaximalCopySize",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Maximal Copy Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal.html#v:defaultMinimalBufferSize",
      "description": {
        "fct-descr": "\u003cp\u003eThe minimal length (~4kb) a buffer must have before filling it and\n outputting it as a chunk of the output stream.\n\u003c/p\u003e\u003cp\u003eThis size determines when a buffer is spilled after a \u003ccode\u003e\u003ca\u003eflush\u003c/a\u003e\u003c/code\u003e or a direct\n bytestring insertion. It is also the size of the first chunk generated by\n \u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal",
        "fct-package": "blaze-builder",
        "fct-signature": "Int",
        "fct-source": "src/Blaze-ByteString-Builder-Internal.html#defaultMinimalBufferSize",
        "fct-type": "function",
        "title": "defaultMinimalBufferSize"
      },
      "index": {
        "description": "The minimal length kb buffer must have before filling it and outputting it as chunk of the output stream This size determines when buffer is spilled after flush or direct bytestring insertion It is also the size of the first chunk generated by toLazyByteString",
        "hierarchy": "Blaze ByteString Builder Internal",
        "module": "Blaze.ByteString.Builder.Internal",
        "name": "defaultMinimalBufferSize",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Minimal Buffer Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal.html#v:done",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal",
        "fct-package": "blaze-builder",
        "fct-signature": "Ptr Word8 -\u003e a -\u003e BuildSignal a",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#done",
        "fct-type": "function",
        "title": "done"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal",
        "module": "Blaze.ByteString.Builder.Internal",
        "name": "done",
        "normalized": "Ptr Word-\u003ea-\u003eBuildSignal a",
        "package": "blaze-builder",
        "partial": "",
        "signature": "Ptr Word-\u003ea-\u003eBuildSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal.html#v:flush",
      "description": {
        "fct-descr": "\u003cp\u003eOutput all data written in the current buffer and start a new chunk.\n\u003c/p\u003e\u003cp\u003eThe use of this function depends on how the resulting bytestrings are\n consumed. \u003ccode\u003e\u003ca\u003eflush\u003c/a\u003e\u003c/code\u003e is possibly not very useful in non-interactive scenarios.\n However, it is kept for compatibility with the builder provided by\n Data.Binary.Builder.\n\u003c/p\u003e\u003cp\u003eWhen using \u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e to extract a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e from a\n \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e, this means that a new chunk will be started in the resulting lazy\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. The remaining part of the buffer is spilled, if the\n reamining free space is smaller than the minimal desired buffer size.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal",
        "fct-package": "blaze-builder",
        "fct-signature": "Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Internal.html#flush",
        "fct-type": "function",
        "title": "flush"
      },
      "index": {
        "description": "Output all data written in the current buffer and start new chunk The use of this function depends on how the resulting bytestrings are consumed flush is possibly not very useful in non-interactive scenarios However it is kept for compatibility with the builder provided by Data.Binary.Builder When using toLazyByteString to extract lazy ByteString from Builder this means that new chunk will be started in the resulting lazy ByteString The remaining part of the buffer is spilled if the reamining free space is smaller than the minimal desired buffer size",
        "hierarchy": "Blaze ByteString Builder Internal",
        "module": "Blaze.ByteString.Builder.Internal",
        "name": "flush",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal.html#v:fromBuildStepCont",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal",
        "fct-package": "blaze-builder",
        "fct-signature": "(forall r.  (BufRange -\u003e IO (BuildSignal r)) -\u003e BufRange -\u003e IO (BuildSignal r)) -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#fromBuildStepCont",
        "fct-type": "function",
        "title": "fromBuildStepCont"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal",
        "module": "Blaze.ByteString.Builder.Internal",
        "name": "fromBuildStepCont",
        "normalized": "(a b(BufRange-\u003eIO(BuildSignal c))-\u003eBufRange-\u003eIO(BuildSignal c))-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Build Step Cont",
        "signature": "(forall r.(BufRange-\u003eIO(BuildSignal r))-\u003eBufRange-\u003eIO(BuildSignal r))-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal.html#v:fromPut",
      "description": {
        "fct-descr": "\u003cp\u003eIgnore the value of a put and only exploit its output side effect.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal",
        "fct-package": "blaze-builder",
        "fct-signature": "Put a -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#fromPut",
        "fct-type": "function",
        "title": "fromPut"
      },
      "index": {
        "description": "Ignore the value of put and only exploit its output side effect",
        "hierarchy": "Blaze ByteString Builder Internal",
        "module": "Blaze.ByteString.Builder.Internal",
        "name": "fromPut",
        "normalized": "Put a-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Put",
        "signature": "Put a-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal.html#v:insertByteString",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal",
        "fct-package": "blaze-builder",
        "fct-signature": "Ptr Word8 -\u003e ByteString -\u003e (BufRange -\u003e IO (BuildSignal a)) -\u003e BuildSignal a",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#insertByteString",
        "fct-type": "function",
        "title": "insertByteString"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal",
        "module": "Blaze.ByteString.Builder.Internal",
        "name": "insertByteString",
        "normalized": "Ptr Word-\u003eByteString-\u003e(BufRange-\u003eIO(BuildSignal a))-\u003eBuildSignal a",
        "package": "blaze-builder",
        "partial": "Byte String",
        "signature": "Ptr Word-\u003eByteString-\u003e(BufRange-\u003eIO(BuildSignal a))-\u003eBuildSignal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal.html#v:putBuildStepCont",
      "description": {
        "fct-module": "Blaze.ByteString.Builder.Internal",
        "fct-package": "blaze-builder",
        "fct-signature": "(forall r.  (a -\u003e BufRange -\u003e IO (BuildSignal r)) -\u003e BufRange -\u003e IO (BuildSignal r)) -\u003e Put a",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#putBuildStepCont",
        "fct-type": "function",
        "title": "putBuildStepCont"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder Internal",
        "module": "Blaze.ByteString.Builder.Internal",
        "name": "putBuildStepCont",
        "normalized": "(a b(c-\u003eBufRange-\u003eIO(BuildSignal d))-\u003eBufRange-\u003eIO(BuildSignal d))-\u003ePut c",
        "package": "blaze-builder",
        "partial": "Build Step Cont",
        "signature": "(forall r.(a-\u003eBufRange-\u003eIO(BuildSignal r))-\u003eBufRange-\u003eIO(BuildSignal r))-\u003ePut a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal.html#v:putBuilder",
      "description": {
        "fct-descr": "\u003cp\u003ePut the given builder.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal",
        "fct-package": "blaze-builder",
        "fct-signature": "Builder -\u003e Put ()",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#putBuilder",
        "fct-type": "function",
        "title": "putBuilder"
      },
      "index": {
        "description": "Put the given builder",
        "hierarchy": "Blaze ByteString Builder Internal",
        "module": "Blaze.ByteString.Builder.Internal",
        "name": "putBuilder",
        "normalized": "Builder-\u003ePut()",
        "package": "blaze-builder",
        "partial": "Builder",
        "signature": "Builder-\u003ePut()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal.html#v:putLiftIO",
      "description": {
        "fct-descr": "\u003cp\u003eLift the given IO action.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal",
        "fct-package": "blaze-builder",
        "fct-signature": "IO a -\u003e Put a",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#putLiftIO",
        "fct-type": "function",
        "title": "putLiftIO"
      },
      "index": {
        "description": "Lift the given IO action",
        "hierarchy": "Blaze ByteString Builder Internal",
        "module": "Blaze.ByteString.Builder.Internal",
        "name": "putLiftIO",
        "normalized": "IO a-\u003ePut a",
        "package": "blaze-builder",
        "partial": "Lift IO",
        "signature": "IO a-\u003ePut a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal.html#v:toByteString",
      "description": {
        "fct-descr": "\u003cp\u003eRun the builder to construct a strict bytestring containing the sequence\n of bytes denoted by the builder. This is done by first serializing to a lazy bytestring and then packing its\n chunks to a appropriately sized strict bytestring.\n\u003c/p\u003e\u003cpre\u003e toByteString = packChunks . toLazyByteString\n\u003c/pre\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ccode\u003e\u003ca\u003etoByteString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is a \u003ccode\u003eMonoid\u003c/code\u003e homomorphism.\n\u003c/p\u003e\u003cpre\u003e toByteString mempty          == mempty\n toByteString (x `mappend` y) == toByteString x `mappend` toByteString y\n\u003c/pre\u003e\u003cp\u003eHowever, in the second equation, the left-hand-side is generally faster to\n execute.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal",
        "fct-package": "blaze-builder",
        "fct-signature": "Builder -\u003e ByteString",
        "fct-source": "src/Blaze-ByteString-Builder-Internal.html#toByteString",
        "fct-type": "function",
        "title": "toByteString"
      },
      "index": {
        "description": "Run the builder to construct strict bytestring containing the sequence of bytes denoted by the builder This is done by first serializing to lazy bytestring and then packing its chunks to appropriately sized strict bytestring toByteString packChunks toLazyByteString Note that toByteString is Monoid homomorphism toByteString mempty mempty toByteString mappend toByteString mappend toByteString However in the second equation the left-hand-side is generally faster to execute",
        "hierarchy": "Blaze ByteString Builder Internal",
        "module": "Blaze.ByteString.Builder.Internal",
        "name": "toByteString",
        "normalized": "Builder-\u003eByteString",
        "package": "blaze-builder",
        "partial": "Byte String",
        "signature": "Builder-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal.html#v:toByteStringIO",
      "description": {
        "fct-descr": "\u003cp\u003eRun the builder with a \u003ccode\u003e\u003ca\u003edefaultBufferSize\u003c/a\u003e\u003c/code\u003ed buffer and execute the given\n \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action whenever the buffer is full or gets flushed.\n\u003c/p\u003e\u003cpre\u003e \u003ccode\u003e\u003ca\u003etoByteStringIO\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003etoByteStringIOWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultBufferSize\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003cp\u003eThis is a \u003ccode\u003eMonoid\u003c/code\u003e homomorphism in the following sense.\n\u003c/p\u003e\u003cpre\u003e toByteStringIO io mempty          == return ()\n toByteStringIO io (x `mappend` y) == toByteStringIO io x \u003e\u003e toByteStringIO io y\n\u003c/pre\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal",
        "fct-package": "blaze-builder",
        "fct-signature": "(ByteString -\u003e IO ()) -\u003e Builder -\u003e IO ()",
        "fct-source": "src/Blaze-ByteString-Builder-Internal.html#toByteStringIO",
        "fct-type": "function",
        "title": "toByteStringIO"
      },
      "index": {
        "description": "Run the builder with defaultBufferSize buffer and execute the given IO action whenever the buffer is full or gets flushed toByteStringIO toByteStringIOWith defaultBufferSize This is Monoid homomorphism in the following sense toByteStringIO io mempty return toByteStringIO io mappend toByteStringIO io toByteStringIO io",
        "hierarchy": "Blaze ByteString Builder Internal",
        "module": "Blaze.ByteString.Builder.Internal",
        "name": "toByteStringIO",
        "normalized": "(ByteString-\u003eIO())-\u003eBuilder-\u003eIO()",
        "package": "blaze-builder",
        "partial": "Byte String IO",
        "signature": "(ByteString-\u003eIO())-\u003eBuilder-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal.html#v:toByteStringIOWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003etoByteStringIOWith bufSize io b\u003c/code\u003e runs the builder \u003ccode\u003eb\u003c/code\u003e with a buffer of\n at least the size \u003ccode\u003ebufSize\u003c/code\u003e and executes the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action \u003ccode\u003eio\u003c/code\u003e whenever the\n buffer is full.\n\u003c/p\u003e\u003cp\u003eCompared to \u003ccode\u003e\u003ca\u003etoLazyByteStringWith\u003c/a\u003e\u003c/code\u003e this function requires less allocation,\n as the output buffer is only allocated once at the start of the\n serialization and whenever something bigger than the current buffer size has\n to be copied into the buffer, which should happen very seldomly for the\n default buffer size of 32kb. Hence, the pressure on the garbage collector is\n reduced, which can be an advantage when building long sequences of bytes.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal",
        "fct-package": "blaze-builder",
        "fct-signature": "Int-\u003e (ByteString -\u003e IO ())-\u003e Builder-\u003e IO ()",
        "fct-type": "function",
        "title": "toByteStringIOWith"
      },
      "index": {
        "description": "toByteStringIOWith bufSize io runs the builder with buffer of at least the size bufSize and executes the IO action io whenever the buffer is full Compared to toLazyByteStringWith this function requires less allocation as the output buffer is only allocated once at the start of the serialization and whenever something bigger than the current buffer size has to be copied into the buffer which should happen very seldomly for the default buffer size of kb Hence the pressure on the garbage collector is reduced which can be an advantage when building long sequences of bytes",
        "hierarchy": "Blaze ByteString Builder Internal",
        "module": "Blaze.ByteString.Builder.Internal",
        "name": "toByteStringIOWith",
        "normalized": "Int-\u003e(ByteString-\u003eIO())-\u003eBuilder-\u003eIO()",
        "package": "blaze-builder",
        "partial": "Byte String IOWith",
        "signature": "Int-\u003e(ByteString-\u003eIO())-\u003eBuilder-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal.html#v:toLazyByteString",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e from the builder by running it with default\n buffer sizes. Use this function, if you do not have any special\n considerations with respect to buffer sizes.\n\u003c/p\u003e\u003cpre\u003e \u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e b = \u003ccode\u003e\u003ca\u003etoLazyByteStringWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultBufferSize\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultMinimalBufferSize\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultFirstBufferSize\u003c/a\u003e\u003c/code\u003e b L.empty\u003c/pre\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is a \u003ccode\u003eMonoid\u003c/code\u003e homomorphism.\n\u003c/p\u003e\u003cpre\u003e toLazyByteString mempty          == mempty\n toLazyByteString (x `mappend` y) == toLazyByteString x `mappend` toLazyByteString y\n\u003c/pre\u003e\u003cp\u003eHowever, in the second equation, the left-hand-side is generally faster to\n execute.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal",
        "fct-package": "blaze-builder",
        "fct-signature": "Builder -\u003e ByteString",
        "fct-source": "src/Blaze-ByteString-Builder-Internal.html#toLazyByteString",
        "fct-type": "function",
        "title": "toLazyByteString"
      },
      "index": {
        "description": "Extract the lazy ByteString from the builder by running it with default buffer sizes Use this function if you do not have any special considerations with respect to buffer sizes toLazyByteString toLazyByteStringWith defaultBufferSize defaultMinimalBufferSize defaultFirstBufferSize L.empty Note that toLazyByteString is Monoid homomorphism toLazyByteString mempty mempty toLazyByteString mappend toLazyByteString mappend toLazyByteString However in the second equation the left-hand-side is generally faster to execute",
        "hierarchy": "Blaze ByteString Builder Internal",
        "module": "Blaze.ByteString.Builder.Internal",
        "name": "toLazyByteString",
        "normalized": "Builder-\u003eByteString",
        "package": "blaze-builder",
        "partial": "Lazy Byte String",
        "signature": "Builder-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal.html#v:toLazyByteStringWith",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e with the given buffer sizes.\n\u003c/p\u003e\u003cp\u003eUse this function for integrating the \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e type with other libraries\n that generate lazy bytestrings.\n\u003c/p\u003e\u003cp\u003eNote that the builders should guarantee that on average the desired chunk\n size is attained. Builders may decide to start a new buffer and not\n completely fill the existing buffer, if this is faster. However, they should\n not spill too much of the buffer, if they cannot compensate for it.\n\u003c/p\u003e\u003cp\u003eA call \u003ccode\u003etoLazyByteStringWith bufSize minBufSize firstBufSize\u003c/code\u003e will generate\n a lazy bytestring according to the following strategy. First, we allocate\n a buffer of size \u003ccode\u003efirstBufSize\u003c/code\u003e and start filling it. If it overflows, we\n allocate a buffer of size \u003ccode\u003eminBufSize\u003c/code\u003e and copy the first buffer to it in\n order to avoid generating a too small chunk. Finally, every next buffer will\n be of size \u003ccode\u003ebufSize\u003c/code\u003e. This, slow startup strategy is required to achieve\n good speed for short (\u003c200 bytes) resulting bytestrings, as for them the\n allocation cost is of a large buffer cannot be compensated. Moreover, this\n strategy also allows us to avoid spilling too much memory for short\n resulting bytestrings.\n\u003c/p\u003e\u003cp\u003eNote that setting \u003ccode\u003efirstBufSize \u003e= minBufSize\u003c/code\u003e implies that the first buffer\n is no longer copied but allocated and filled directly. Hence, setting\n \u003ccode\u003efirstBufSize = bufSize\u003c/code\u003e means that all chunks will use an underlying buffer\n of size \u003ccode\u003ebufSize\u003c/code\u003e. This is recommended, if you know that you always output\n more than \u003ccode\u003eminBufSize\u003c/code\u003e bytes.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal",
        "fct-package": "blaze-builder",
        "fct-signature": "Int-\u003e Int-\u003e Int-\u003e Builder-\u003e ByteString-\u003e ByteString",
        "fct-type": "function",
        "title": "toLazyByteStringWith"
      },
      "index": {
        "description": "Run Builder with the given buffer sizes Use this function for integrating the Builder type with other libraries that generate lazy bytestrings Note that the builders should guarantee that on average the desired chunk size is attained Builders may decide to start new buffer and not completely fill the existing buffer if this is faster However they should not spill too much of the buffer if they cannot compensate for it call toLazyByteStringWith bufSize minBufSize firstBufSize will generate lazy bytestring according to the following strategy First we allocate buffer of size firstBufSize and start filling it If it overflows we allocate buffer of size minBufSize and copy the first buffer to it in order to avoid generating too small chunk Finally every next buffer will be of size bufSize This slow startup strategy is required to achieve good speed for short bytes resulting bytestrings as for them the allocation cost is of large buffer cannot be compensated Moreover this strategy also allows us to avoid spilling too much memory for short resulting bytestrings Note that setting firstBufSize minBufSize implies that the first buffer is no longer copied but allocated and filled directly Hence setting firstBufSize bufSize means that all chunks will use an underlying buffer of size bufSize This is recommended if you know that you always output more than minBufSize bytes",
        "hierarchy": "Blaze ByteString Builder Internal",
        "module": "Blaze.ByteString.Builder.Internal",
        "name": "toLazyByteStringWith",
        "normalized": "Int-\u003eInt-\u003eInt-\u003eBuilder-\u003eByteString-\u003eByteString",
        "package": "blaze-builder",
        "partial": "Lazy Byte String With",
        "signature": "Int-\u003eInt-\u003eInt-\u003eBuilder-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Internal.html#v:writeToByteString",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eWrite\u003c/a\u003e\u003c/code\u003e to produce a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n This is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etoByteString\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003efromWrite\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e, but is more\n efficient because it uses just one appropriately-sized buffer.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Internal",
        "fct-package": "blaze-builder",
        "fct-signature": "Write -\u003e ByteString",
        "fct-source": "src/Blaze-ByteString-Builder-Internal.html#writeToByteString",
        "fct-type": "function",
        "title": "writeToByteString"
      },
      "index": {
        "description": "Run Write to produce strict ByteString This is equivalent to toByteString fromWrite but is more efficient because it uses just one appropriately-sized buffer",
        "hierarchy": "Blaze ByteString Builder Internal",
        "module": "Blaze.ByteString.Builder.Internal",
        "name": "writeToByteString",
        "normalized": "Write-\u003eByteString",
        "package": "blaze-builder",
        "partial": "To Byte String",
        "signature": "Write-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eWrite\u003c/a\u003e\u003c/code\u003es and \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003es for serializing words.\n\u003c/p\u003e\u003cp\u003eNote that for serializing a three tuple \u003ccode\u003e(x,y,z)\u003c/code\u003e of bytes (or other word\n values) you should use the expression\n\u003c/p\u003e\u003cpre\u003e fromWrite $ writeWord8 x `mappend` writeWord8 y `mappend` writeWord z\n\u003c/pre\u003e\u003cp\u003einstead of\n\u003c/p\u003e\u003cpre\u003e fromWord8 x `mappend` fromWord8 y `mappend` fromWord z\n\u003c/pre\u003e\u003cp\u003eThe first expression will result in a single atomic write of three bytes,\n while the second expression will check for each byte, if there is free space\n left in the output buffer. Coalescing these checks can improve performance\n quite a bit, as long as you use it sensibly.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "module",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html",
        "fct-type": "module",
        "title": "Word"
      },
      "index": {
        "description": "Write and Builder for serializing words Note that for serializing three tuple of bytes or other word values you should use the expression fromWrite writeWord8 mappend writeWord8 mappend writeWord instead of fromWord8 mappend fromWord8 mappend fromWord The first expression will result in single atomic write of three bytes while the second expression will check for each byte if there is free space left in the output buffer Coalescing these checks can improve performance quite bit as long as you use it sensibly",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "Word",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:fromWord16be",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "Word16 -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#fromWord16be",
        "fct-type": "function",
        "title": "fromWord16be"
      },
      "index": {
        "description": "Serialize Word16 in big endian format",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "fromWord16be",
        "normalized": "Word-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Word",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:fromWord16host",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "Word16 -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#fromWord16host",
        "fct-type": "function",
        "title": "fromWord16host"
      },
      "index": {
        "description": "Write Word16 in native host order and host endianness",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "fromWord16host",
        "normalized": "Word-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Word",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:fromWord16le",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "Word16 -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#fromWord16le",
        "fct-type": "function",
        "title": "fromWord16le"
      },
      "index": {
        "description": "Serialize Word16 in little endian format",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "fromWord16le",
        "normalized": "Word-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Word",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:fromWord16sbe",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a list of \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003es in big endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "[Word16] -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#fromWord16sbe",
        "fct-type": "function",
        "title": "fromWord16sbe"
      },
      "index": {
        "description": "Serialize list of Word16 in big endian format",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "fromWord16sbe",
        "normalized": "[Word]-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Word",
        "signature": "[Word]-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:fromWord16shost",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a list of \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003es in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "[Word16] -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#fromWord16shost",
        "fct-type": "function",
        "title": "fromWord16shost"
      },
      "index": {
        "description": "Write list of Word16 in native host order and host endianness",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "fromWord16shost",
        "normalized": "[Word]-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Word",
        "signature": "[Word]-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:fromWord16sle",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a list of \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003es in little endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "[Word16] -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#fromWord16sle",
        "fct-type": "function",
        "title": "fromWord16sle"
      },
      "index": {
        "description": "Serialize list of Word16 in little endian format",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "fromWord16sle",
        "normalized": "[Word]-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Word",
        "signature": "[Word]-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:fromWord32be",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "Word32 -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#fromWord32be",
        "fct-type": "function",
        "title": "fromWord32be"
      },
      "index": {
        "description": "Serialize Word32 in big endian format",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "fromWord32be",
        "normalized": "Word-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Word",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:fromWord32host",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "Word32 -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#fromWord32host",
        "fct-type": "function",
        "title": "fromWord32host"
      },
      "index": {
        "description": "Write Word32 in native host order and host endianness",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "fromWord32host",
        "normalized": "Word-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Word",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:fromWord32le",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "Word32 -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#fromWord32le",
        "fct-type": "function",
        "title": "fromWord32le"
      },
      "index": {
        "description": "Serialize Word32 in little endian format",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "fromWord32le",
        "normalized": "Word-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Word",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:fromWord32sbe",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a list of \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003es in big endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "[Word32] -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#fromWord32sbe",
        "fct-type": "function",
        "title": "fromWord32sbe"
      },
      "index": {
        "description": "Serialize list of Word32 in big endian format",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "fromWord32sbe",
        "normalized": "[Word]-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Word",
        "signature": "[Word]-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:fromWord32shost",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a list of \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003es in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "[Word32] -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#fromWord32shost",
        "fct-type": "function",
        "title": "fromWord32shost"
      },
      "index": {
        "description": "Write list of Word32 in native host order and host endianness",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "fromWord32shost",
        "normalized": "[Word]-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Word",
        "signature": "[Word]-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:fromWord32sle",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a list of \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003es in little endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "[Word32] -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#fromWord32sle",
        "fct-type": "function",
        "title": "fromWord32sle"
      },
      "index": {
        "description": "Serialize list of Word32 in little endian format",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "fromWord32sle",
        "normalized": "[Word]-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Word",
        "signature": "[Word]-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:fromWord64be",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "Word64 -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#fromWord64be",
        "fct-type": "function",
        "title": "fromWord64be"
      },
      "index": {
        "description": "Serialize Word64 in big endian format",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "fromWord64be",
        "normalized": "Word-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Word",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:fromWord64host",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "Word64 -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#fromWord64host",
        "fct-type": "function",
        "title": "fromWord64host"
      },
      "index": {
        "description": "Write Word64 in native host order and host endianness",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "fromWord64host",
        "normalized": "Word-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Word",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:fromWord64le",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "Word64 -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#fromWord64le",
        "fct-type": "function",
        "title": "fromWord64le"
      },
      "index": {
        "description": "Serialize Word64 in little endian format",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "fromWord64le",
        "normalized": "Word-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Word",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:fromWord64sbe",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a list of \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003es in big endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "[Word64] -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#fromWord64sbe",
        "fct-type": "function",
        "title": "fromWord64sbe"
      },
      "index": {
        "description": "Serialize list of Word64 in big endian format",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "fromWord64sbe",
        "normalized": "[Word]-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Word",
        "signature": "[Word]-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:fromWord64shost",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a list of \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003es in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "[Word64] -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#fromWord64shost",
        "fct-type": "function",
        "title": "fromWord64shost"
      },
      "index": {
        "description": "Write list of Word64 in native host order and host endianness",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "fromWord64shost",
        "normalized": "[Word]-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Word",
        "signature": "[Word]-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:fromWord64sle",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a list of \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003es in little endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "[Word64] -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#fromWord64sle",
        "fct-type": "function",
        "title": "fromWord64sle"
      },
      "index": {
        "description": "Serialize list of Word64 in little endian format",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "fromWord64sle",
        "normalized": "[Word]-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Word",
        "signature": "[Word]-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:fromWord8",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a single byte.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "Word8 -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#fromWord8",
        "fct-type": "function",
        "title": "fromWord8"
      },
      "index": {
        "description": "Serialize single byte",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "fromWord8",
        "normalized": "Word-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Word",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:fromWord8s",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a list of bytes.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "[Word8] -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#fromWord8s",
        "fct-type": "function",
        "title": "fromWord8s"
      },
      "index": {
        "description": "Serialize list of bytes",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "fromWord8s",
        "normalized": "[Word]-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Word",
        "signature": "[Word]-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:fromWordhost",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a single native machine \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e is serialized in host\n order, host endian form, for the machine you're on. On a 64 bit machine the\n \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e is an 8 byte value, on a 32 bit machine, 4 bytes. Values written this\n way are not portable to different endian or word sized machines, without\n conversion.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "Word -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#fromWordhost",
        "fct-type": "function",
        "title": "fromWordhost"
      },
      "index": {
        "description": "Serialize single native machine Word The Word is serialized in host order host endian form for the machine you re on On bit machine the Word is an byte value on bit machine bytes Values written this way are not portable to different endian or word sized machines without conversion",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "fromWordhost",
        "normalized": "Word-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Wordhost",
        "signature": "Word-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:fromWordshost",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a list of \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003es.\n See \u003ccode\u003e\u003ca\u003efromWordhost\u003c/a\u003e\u003c/code\u003e for usage considerations.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "[Word] -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#fromWordshost",
        "fct-type": "function",
        "title": "fromWordshost"
      },
      "index": {
        "description": "Serialize list of Word See fromWordhost for usage considerations",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "fromWordshost",
        "normalized": "[Word]-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Wordshost",
        "signature": "[Word]-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:writeWord16be",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "Word16 -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#writeWord16be",
        "fct-type": "function",
        "title": "writeWord16be"
      },
      "index": {
        "description": "Write Word16 in big endian format",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "writeWord16be",
        "normalized": "Word-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Word",
        "signature": "Word-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:writeWord16host",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "Word16 -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#writeWord16host",
        "fct-type": "function",
        "title": "writeWord16host"
      },
      "index": {
        "description": "Write Word16 in native host order and host endianness",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "writeWord16host",
        "normalized": "Word-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Word",
        "signature": "Word-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:writeWord16le",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "Word16 -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#writeWord16le",
        "fct-type": "function",
        "title": "writeWord16le"
      },
      "index": {
        "description": "Write Word16 in little endian format",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "writeWord16le",
        "normalized": "Word-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Word",
        "signature": "Word-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:writeWord32be",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "Word32 -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#writeWord32be",
        "fct-type": "function",
        "title": "writeWord32be"
      },
      "index": {
        "description": "Write Word32 in big endian format",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "writeWord32be",
        "normalized": "Word-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Word",
        "signature": "Word-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:writeWord32host",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "Word32 -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#writeWord32host",
        "fct-type": "function",
        "title": "writeWord32host"
      },
      "index": {
        "description": "Write Word32 in native host order and host endianness",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "writeWord32host",
        "normalized": "Word-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Word",
        "signature": "Word-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:writeWord32le",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "Word32 -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#writeWord32le",
        "fct-type": "function",
        "title": "writeWord32le"
      },
      "index": {
        "description": "Write Word32 in little endian format",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "writeWord32le",
        "normalized": "Word-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Word",
        "signature": "Word-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:writeWord64be",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e in big endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "Word64 -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#writeWord64be",
        "fct-type": "function",
        "title": "writeWord64be"
      },
      "index": {
        "description": "Write Word64 in big endian format",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "writeWord64be",
        "normalized": "Word-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Word",
        "signature": "Word-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:writeWord64host",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e in native host order and host endianness.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "Word64 -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#writeWord64host",
        "fct-type": "function",
        "title": "writeWord64host"
      },
      "index": {
        "description": "Write Word64 in native host order and host endianness",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "writeWord64host",
        "normalized": "Word-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Word",
        "signature": "Word-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:writeWord64le",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e in little endian format.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "Word64 -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#writeWord64le",
        "fct-type": "function",
        "title": "writeWord64le"
      },
      "index": {
        "description": "Write Word64 in little endian format",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "writeWord64le",
        "normalized": "Word-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Word",
        "signature": "Word-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:writeWord8",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a single byte.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "Word8 -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#writeWord8",
        "fct-type": "function",
        "title": "writeWord8"
      },
      "index": {
        "description": "Write single byte",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "writeWord8",
        "normalized": "Word-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Word",
        "signature": "Word-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder-Word.html#v:writeWordhost",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a single native machine \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e is written in host order,\n host endian form, for the machine you're on. On a 64 bit machine the \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e\n is an 8 byte value, on a 32 bit machine, 4 bytes. Values written this way\n are not portable to different endian or word sized machines, without\n conversion.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder.Word",
        "fct-package": "blaze-builder",
        "fct-signature": "Word -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Word.html#writeWordhost",
        "fct-type": "function",
        "title": "writeWordhost"
      },
      "index": {
        "description": "Write single native machine Word The Word is written in host order host endian form for the machine you re on On bit machine the Word is an byte value on bit machine bytes Values written this way are not portable to different endian or word sized machines without conversion",
        "hierarchy": "Blaze ByteString Builder Word",
        "module": "Blaze.ByteString.Builder.Word",
        "name": "writeWordhost",
        "normalized": "Word-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Wordhost",
        "signature": "Word-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca\u003eBlaze.ByteString.Builder\u003c/a\u003e is the main module, which you should import as a user\n of the \u003ccode\u003eblaze-builder\u003c/code\u003e library.\n\u003c/p\u003e\u003cpre\u003e import Blaze.ByteString.Builder\n\u003c/pre\u003e\u003cp\u003eIt provides you with a type \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e that allows to efficiently construct\n lazy bytestrings with a large average chunk size.\n\u003c/p\u003e\u003cp\u003eIntuitively, a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e denotes the construction of a part of a lazy\n bytestring. Builders can either be created using one of the primitive\n combinators in \u003ca\u003eBlaze.ByteString.Builder.Write\u003c/a\u003e or by using one of the predefined\n combinators for standard Haskell values (see the exposed modules of this\n package).  Concatenation of builders is done using \u003ccode\u003emappend\u003c/code\u003e from the\n \u003ccode\u003eMonoid\u003c/code\u003e typeclass.\n\u003c/p\u003e\u003cp\u003eHere is a small example that serializes a list of strings using the UTF-8\n encoding.\n\u003c/p\u003e\u003cpre\u003e import \u003ca\u003eBlaze.ByteString.Builder.Char.Utf8\u003c/a\u003e\u003c/pre\u003e\u003cpre\u003e strings :: [String]\n strings = replicate 10000 \"Hello there!\"\n\u003c/pre\u003e\u003cp\u003eThe function \u003ccode\u003e\u003ccode\u003efromString\u003c/code\u003e\u003c/code\u003e creates a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e denoting the UTF-8 encoded\n argument. Hence, UTF-8 encoding and concatenating all \u003ccode\u003estrings\u003c/code\u003e can be done\n follows.\n\u003c/p\u003e\u003cpre\u003e concatenation :: Builder\n concatenation = mconcat $ map fromString strings\n\u003c/pre\u003e\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e  can be used to execute a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e and\n obtain the resulting lazy bytestring.\n\u003c/p\u003e\u003cpre\u003e result :: L.ByteString\n result = toLazyByteString concatenation\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003eresult\u003c/code\u003e is a lazy bytestring containing 10000 repetitions of the string\n \u003ccode\u003e\"Hello there!\"\u003c/code\u003e encoded using UTF-8. The corresponding 120000 bytes are\n distributed among three chunks of 32kb and a last chunk of 6kb.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eA note on history.\u003c/em\u003e This serialization library was inspired by the\n \u003ccode\u003eData.Binary.Builder\u003c/code\u003e module provided by the \u003ccode\u003ebinary\u003c/code\u003e package. It was\n originally developed with the specific needs of the \u003ccode\u003eblaze-html\u003c/code\u003e package in\n mind. Since then it has been restructured to serve as a drop-in replacement\n for \u003ccode\u003eData.Binary.Builder\u003c/code\u003e, which it improves upon both in speed as well as\n expressivity.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Blaze.ByteString.Builder",
        "fct-package": "blaze-builder",
        "fct-signature": "module",
        "fct-source": "src/Blaze-ByteString-Builder.html",
        "fct-type": "module",
        "title": "Builder"
      },
      "index": {
        "description": "Blaze.ByteString.Builder is the main module which you should import as user of the blaze-builder library import Blaze.ByteString.Builder It provides you with type Builder that allows to efficiently construct lazy bytestrings with large average chunk size Intuitively Builder denotes the construction of part of lazy bytestring Builders can either be created using one of the primitive combinators in Blaze.ByteString.Builder.Write or by using one of the predefined combinators for standard Haskell values see the exposed modules of this package Concatenation of builders is done using mappend from the Monoid typeclass Here is small example that serializes list of strings using the UTF-8 encoding import Blaze.ByteString.Builder.Char.Utf8 strings String strings replicate Hello there The function fromString creates Builder denoting the UTF-8 encoded argument Hence UTF-8 encoding and concatenating all strings can be done follows concatenation Builder concatenation mconcat map fromString strings The function toLazyByteString can be used to execute Builder and obtain the resulting lazy bytestring result L.ByteString result toLazyByteString concatenation The result is lazy bytestring containing repetitions of the string Hello there encoded using UTF-8 The corresponding bytes are distributed among three chunks of kb and last chunk of kb note on history This serialization library was inspired by the Data.Binary.Builder module provided by the binary package It was originally developed with the specific needs of the blaze-html package in mind Since then it has been restructured to serve as drop-in replacement for Data.Binary.Builder which it improves upon both in speed as well as expressivity",
        "hierarchy": "Blaze ByteString Builder",
        "module": "Blaze.ByteString.Builder",
        "name": "Builder",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder.html#t:Builder",
      "description": {
        "fct-module": "Blaze.ByteString.Builder",
        "fct-package": "blaze-builder",
        "fct-signature": "data",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Types.html#Builder",
        "fct-type": "data",
        "title": "Builder"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder",
        "module": "Blaze.ByteString.Builder",
        "name": "Builder",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder.html#t:Write",
      "description": {
        "fct-descr": "\u003cp\u003eA write of a bounded number of bytes.\n\u003c/p\u003e\u003cp\u003eWhen defining a function \u003ccode\u003ewrite :: a -\u003e Write\u003c/code\u003e for some \u003ccode\u003ea\u003c/code\u003e, then it is\n important to ensure that the bound on the number of bytes written is\n data-independent. Formally,\n\u003c/p\u003e\u003cpre\u003e forall x y. getBound (write x) = getBound (write y)\u003c/pre\u003e\u003cp\u003eThe idea is that this data-independent bound is specified such that the\n compiler can optimize the check, if there are enough free bytes in the buffer,\n to a single subtraction between the pointer to the next free byte and the\n pointer to the end of the buffer with this constant bound of the maximal\n number of bytes to be written.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder",
        "fct-package": "blaze-builder",
        "fct-signature": "data",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Write.html#Write",
        "fct-type": "data",
        "title": "Write"
      },
      "index": {
        "description": "write of bounded number of bytes When defining function write Write for some then it is important to ensure that the bound on the number of bytes written is data-independent Formally forall getBound write getBound write The idea is that this data-independent bound is specified such that the compiler can optimize the check if there are enough free bytes in the buffer to single subtraction between the pointer to the next free byte and the pointer to the end of the buffer with this constant bound of the maximal number of bytes to be written",
        "hierarchy": "Blaze ByteString Builder",
        "module": "Blaze.ByteString.Builder",
        "name": "Write",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "Write",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder.html#v:flush",
      "description": {
        "fct-descr": "\u003cp\u003eOutput all data written in the current buffer and start a new chunk.\n\u003c/p\u003e\u003cp\u003eThe use of this function depends on how the resulting bytestrings are\n consumed. \u003ccode\u003e\u003ca\u003eflush\u003c/a\u003e\u003c/code\u003e is possibly not very useful in non-interactive scenarios.\n However, it is kept for compatibility with the builder provided by\n Data.Binary.Builder.\n\u003c/p\u003e\u003cp\u003eWhen using \u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e to extract a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e from a\n \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e, this means that a new chunk will be started in the resulting lazy\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. The remaining part of the buffer is spilled, if the\n reamining free space is smaller than the minimal desired buffer size.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder",
        "fct-package": "blaze-builder",
        "fct-signature": "Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Internal.html#flush",
        "fct-type": "function",
        "title": "flush"
      },
      "index": {
        "description": "Output all data written in the current buffer and start new chunk The use of this function depends on how the resulting bytestrings are consumed flush is possibly not very useful in non-interactive scenarios However it is kept for compatibility with the builder provided by Data.Binary.Builder When using toLazyByteString to extract lazy ByteString from Builder this means that new chunk will be started in the resulting lazy ByteString The remaining part of the buffer is spilled if the reamining free space is smaller than the minimal desired buffer size",
        "hierarchy": "Blaze ByteString Builder",
        "module": "Blaze.ByteString.Builder",
        "name": "flush",
        "normalized": "",
        "package": "blaze-builder",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder.html#v:fromStorable",
      "description": {
        "fct-descr": "\u003cp\u003eA builder that serializes a storable value. No alignment is done.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder",
        "fct-package": "blaze-builder",
        "fct-signature": "a -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Write.html#fromStorable",
        "fct-type": "function",
        "title": "fromStorable"
      },
      "index": {
        "description": "builder that serializes storable value No alignment is done",
        "hierarchy": "Blaze ByteString Builder",
        "module": "Blaze.ByteString.Builder",
        "name": "fromStorable",
        "normalized": "a-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Storable",
        "signature": "a-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder.html#v:fromStorables",
      "description": {
        "fct-descr": "\u003cp\u003eA builder that serializes a list of storable values by writing them\n consecutively. No alignment is done. Parsing information needs to be\n provided externally.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder",
        "fct-package": "blaze-builder",
        "fct-signature": "[a] -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Write.html#fromStorables",
        "fct-type": "function",
        "title": "fromStorables"
      },
      "index": {
        "description": "builder that serializes list of storable values by writing them consecutively No alignment is done Parsing information needs to be provided externally",
        "hierarchy": "Blaze ByteString Builder",
        "module": "Blaze.ByteString.Builder",
        "name": "fromStorables",
        "normalized": "[a]-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Storables",
        "signature": "[a]-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder.html#v:fromWrite",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a builder that execute a single \u003ccode\u003e\u003ca\u003eWrite\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder",
        "fct-package": "blaze-builder",
        "fct-signature": "Write -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Write.html#fromWrite",
        "fct-type": "function",
        "title": "fromWrite"
      },
      "index": {
        "description": "Create builder that execute single Write",
        "hierarchy": "Blaze ByteString Builder",
        "module": "Blaze.ByteString.Builder",
        "name": "fromWrite",
        "normalized": "Write-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Write",
        "signature": "Write-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder.html#v:fromWriteList",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e writing a list of data one element at a time.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder",
        "fct-package": "blaze-builder",
        "fct-signature": "(a -\u003e Write) -\u003e [a] -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Write.html#fromWriteList",
        "fct-type": "function",
        "title": "fromWriteList"
      },
      "index": {
        "description": "Construct Builder writing list of data one element at time",
        "hierarchy": "Blaze ByteString Builder",
        "module": "Blaze.ByteString.Builder",
        "name": "fromWriteList",
        "normalized": "(a-\u003eWrite)-\u003e[a]-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Write List",
        "signature": "(a-\u003eWrite)-\u003e[a]-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder.html#v:fromWriteSingleton",
      "description": {
        "fct-module": "Blaze.ByteString.Builder",
        "fct-package": "blaze-builder",
        "fct-signature": "(a -\u003e Write) -\u003e a -\u003e Builder",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Write.html#fromWriteSingleton",
        "fct-type": "function",
        "title": "fromWriteSingleton"
      },
      "index": {
        "description": "",
        "hierarchy": "Blaze ByteString Builder",
        "module": "Blaze.ByteString.Builder",
        "name": "fromWriteSingleton",
        "normalized": "(a-\u003eWrite)-\u003ea-\u003eBuilder",
        "package": "blaze-builder",
        "partial": "Write Singleton",
        "signature": "(a-\u003eWrite)-\u003ea-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder.html#v:toByteString",
      "description": {
        "fct-descr": "\u003cp\u003eRun the builder to construct a strict bytestring containing the sequence\n of bytes denoted by the builder. This is done by first serializing to a lazy bytestring and then packing its\n chunks to a appropriately sized strict bytestring.\n\u003c/p\u003e\u003cpre\u003e toByteString = packChunks . toLazyByteString\n\u003c/pre\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ccode\u003e\u003ca\u003etoByteString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is a \u003ccode\u003eMonoid\u003c/code\u003e homomorphism.\n\u003c/p\u003e\u003cpre\u003e toByteString mempty          == mempty\n toByteString (x `mappend` y) == toByteString x `mappend` toByteString y\n\u003c/pre\u003e\u003cp\u003eHowever, in the second equation, the left-hand-side is generally faster to\n execute.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder",
        "fct-package": "blaze-builder",
        "fct-signature": "Builder -\u003e ByteString",
        "fct-source": "src/Blaze-ByteString-Builder-Internal.html#toByteString",
        "fct-type": "function",
        "title": "toByteString"
      },
      "index": {
        "description": "Run the builder to construct strict bytestring containing the sequence of bytes denoted by the builder This is done by first serializing to lazy bytestring and then packing its chunks to appropriately sized strict bytestring toByteString packChunks toLazyByteString Note that toByteString is Monoid homomorphism toByteString mempty mempty toByteString mappend toByteString mappend toByteString However in the second equation the left-hand-side is generally faster to execute",
        "hierarchy": "Blaze ByteString Builder",
        "module": "Blaze.ByteString.Builder",
        "name": "toByteString",
        "normalized": "Builder-\u003eByteString",
        "package": "blaze-builder",
        "partial": "Byte String",
        "signature": "Builder-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder.html#v:toByteStringIO",
      "description": {
        "fct-descr": "\u003cp\u003eRun the builder with a \u003ccode\u003e\u003ca\u003edefaultBufferSize\u003c/a\u003e\u003c/code\u003ed buffer and execute the given\n \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action whenever the buffer is full or gets flushed.\n\u003c/p\u003e\u003cpre\u003e \u003ccode\u003e\u003ca\u003etoByteStringIO\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003etoByteStringIOWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultBufferSize\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003cp\u003eThis is a \u003ccode\u003eMonoid\u003c/code\u003e homomorphism in the following sense.\n\u003c/p\u003e\u003cpre\u003e toByteStringIO io mempty          == return ()\n toByteStringIO io (x `mappend` y) == toByteStringIO io x \u003e\u003e toByteStringIO io y\n\u003c/pre\u003e",
        "fct-module": "Blaze.ByteString.Builder",
        "fct-package": "blaze-builder",
        "fct-signature": "(ByteString -\u003e IO ()) -\u003e Builder -\u003e IO ()",
        "fct-source": "src/Blaze-ByteString-Builder-Internal.html#toByteStringIO",
        "fct-type": "function",
        "title": "toByteStringIO"
      },
      "index": {
        "description": "Run the builder with defaultBufferSize buffer and execute the given IO action whenever the buffer is full or gets flushed toByteStringIO toByteStringIOWith defaultBufferSize This is Monoid homomorphism in the following sense toByteStringIO io mempty return toByteStringIO io mappend toByteStringIO io toByteStringIO io",
        "hierarchy": "Blaze ByteString Builder",
        "module": "Blaze.ByteString.Builder",
        "name": "toByteStringIO",
        "normalized": "(ByteString-\u003eIO())-\u003eBuilder-\u003eIO()",
        "package": "blaze-builder",
        "partial": "Byte String IO",
        "signature": "(ByteString-\u003eIO())-\u003eBuilder-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder.html#v:toByteStringIOWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003etoByteStringIOWith bufSize io b\u003c/code\u003e runs the builder \u003ccode\u003eb\u003c/code\u003e with a buffer of\n at least the size \u003ccode\u003ebufSize\u003c/code\u003e and executes the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action \u003ccode\u003eio\u003c/code\u003e whenever the\n buffer is full.\n\u003c/p\u003e\u003cp\u003eCompared to \u003ccode\u003e\u003ca\u003etoLazyByteStringWith\u003c/a\u003e\u003c/code\u003e this function requires less allocation,\n as the output buffer is only allocated once at the start of the\n serialization and whenever something bigger than the current buffer size has\n to be copied into the buffer, which should happen very seldomly for the\n default buffer size of 32kb. Hence, the pressure on the garbage collector is\n reduced, which can be an advantage when building long sequences of bytes.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder",
        "fct-package": "blaze-builder",
        "fct-signature": "Int-\u003e (ByteString -\u003e IO ())-\u003e Builder-\u003e IO ()",
        "fct-type": "function",
        "title": "toByteStringIOWith"
      },
      "index": {
        "description": "toByteStringIOWith bufSize io runs the builder with buffer of at least the size bufSize and executes the IO action io whenever the buffer is full Compared to toLazyByteStringWith this function requires less allocation as the output buffer is only allocated once at the start of the serialization and whenever something bigger than the current buffer size has to be copied into the buffer which should happen very seldomly for the default buffer size of kb Hence the pressure on the garbage collector is reduced which can be an advantage when building long sequences of bytes",
        "hierarchy": "Blaze ByteString Builder",
        "module": "Blaze.ByteString.Builder",
        "name": "toByteStringIOWith",
        "normalized": "Int-\u003e(ByteString-\u003eIO())-\u003eBuilder-\u003eIO()",
        "package": "blaze-builder",
        "partial": "Byte String IOWith",
        "signature": "Int-\u003e(ByteString-\u003eIO())-\u003eBuilder-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder.html#v:toLazyByteString",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e from the builder by running it with default\n buffer sizes. Use this function, if you do not have any special\n considerations with respect to buffer sizes.\n\u003c/p\u003e\u003cpre\u003e \u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e b = \u003ccode\u003e\u003ca\u003etoLazyByteStringWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultBufferSize\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultMinimalBufferSize\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultFirstBufferSize\u003c/a\u003e\u003c/code\u003e b L.empty\u003c/pre\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ccode\u003e\u003ca\u003etoLazyByteString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is a \u003ccode\u003eMonoid\u003c/code\u003e homomorphism.\n\u003c/p\u003e\u003cpre\u003e toLazyByteString mempty          == mempty\n toLazyByteString (x `mappend` y) == toLazyByteString x `mappend` toLazyByteString y\n\u003c/pre\u003e\u003cp\u003eHowever, in the second equation, the left-hand-side is generally faster to\n execute.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder",
        "fct-package": "blaze-builder",
        "fct-signature": "Builder -\u003e ByteString",
        "fct-source": "src/Blaze-ByteString-Builder-Internal.html#toLazyByteString",
        "fct-type": "function",
        "title": "toLazyByteString"
      },
      "index": {
        "description": "Extract the lazy ByteString from the builder by running it with default buffer sizes Use this function if you do not have any special considerations with respect to buffer sizes toLazyByteString toLazyByteStringWith defaultBufferSize defaultMinimalBufferSize defaultFirstBufferSize L.empty Note that toLazyByteString is Monoid homomorphism toLazyByteString mempty mempty toLazyByteString mappend toLazyByteString mappend toLazyByteString However in the second equation the left-hand-side is generally faster to execute",
        "hierarchy": "Blaze ByteString Builder",
        "module": "Blaze.ByteString.Builder",
        "name": "toLazyByteString",
        "normalized": "Builder-\u003eByteString",
        "package": "blaze-builder",
        "partial": "Lazy Byte String",
        "signature": "Builder-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder.html#v:toLazyByteStringWith",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e with the given buffer sizes.\n\u003c/p\u003e\u003cp\u003eUse this function for integrating the \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e type with other libraries\n that generate lazy bytestrings.\n\u003c/p\u003e\u003cp\u003eNote that the builders should guarantee that on average the desired chunk\n size is attained. Builders may decide to start a new buffer and not\n completely fill the existing buffer, if this is faster. However, they should\n not spill too much of the buffer, if they cannot compensate for it.\n\u003c/p\u003e\u003cp\u003eA call \u003ccode\u003etoLazyByteStringWith bufSize minBufSize firstBufSize\u003c/code\u003e will generate\n a lazy bytestring according to the following strategy. First, we allocate\n a buffer of size \u003ccode\u003efirstBufSize\u003c/code\u003e and start filling it. If it overflows, we\n allocate a buffer of size \u003ccode\u003eminBufSize\u003c/code\u003e and copy the first buffer to it in\n order to avoid generating a too small chunk. Finally, every next buffer will\n be of size \u003ccode\u003ebufSize\u003c/code\u003e. This, slow startup strategy is required to achieve\n good speed for short (\u003c200 bytes) resulting bytestrings, as for them the\n allocation cost is of a large buffer cannot be compensated. Moreover, this\n strategy also allows us to avoid spilling too much memory for short\n resulting bytestrings.\n\u003c/p\u003e\u003cp\u003eNote that setting \u003ccode\u003efirstBufSize \u003e= minBufSize\u003c/code\u003e implies that the first buffer\n is no longer copied but allocated and filled directly. Hence, setting\n \u003ccode\u003efirstBufSize = bufSize\u003c/code\u003e means that all chunks will use an underlying buffer\n of size \u003ccode\u003ebufSize\u003c/code\u003e. This is recommended, if you know that you always output\n more than \u003ccode\u003eminBufSize\u003c/code\u003e bytes.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder",
        "fct-package": "blaze-builder",
        "fct-signature": "Int-\u003e Int-\u003e Int-\u003e Builder-\u003e ByteString-\u003e ByteString",
        "fct-type": "function",
        "title": "toLazyByteStringWith"
      },
      "index": {
        "description": "Run Builder with the given buffer sizes Use this function for integrating the Builder type with other libraries that generate lazy bytestrings Note that the builders should guarantee that on average the desired chunk size is attained Builders may decide to start new buffer and not completely fill the existing buffer if this is faster However they should not spill too much of the buffer if they cannot compensate for it call toLazyByteStringWith bufSize minBufSize firstBufSize will generate lazy bytestring according to the following strategy First we allocate buffer of size firstBufSize and start filling it If it overflows we allocate buffer of size minBufSize and copy the first buffer to it in order to avoid generating too small chunk Finally every next buffer will be of size bufSize This slow startup strategy is required to achieve good speed for short bytes resulting bytestrings as for them the allocation cost is of large buffer cannot be compensated Moreover this strategy also allows us to avoid spilling too much memory for short resulting bytestrings Note that setting firstBufSize minBufSize implies that the first buffer is no longer copied but allocated and filled directly Hence setting firstBufSize bufSize means that all chunks will use an underlying buffer of size bufSize This is recommended if you know that you always output more than minBufSize bytes",
        "hierarchy": "Blaze ByteString Builder",
        "module": "Blaze.ByteString.Builder",
        "name": "toLazyByteStringWith",
        "normalized": "Int-\u003eInt-\u003eInt-\u003eBuilder-\u003eByteString-\u003eByteString",
        "package": "blaze-builder",
        "partial": "Lazy Byte String With",
        "signature": "Int-\u003eInt-\u003eInt-\u003eBuilder-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder.html#v:writeStorable",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a storable value.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder",
        "fct-package": "blaze-builder",
        "fct-signature": "a -\u003e Write",
        "fct-source": "src/Blaze-ByteString-Builder-Internal-Write.html#writeStorable",
        "fct-type": "function",
        "title": "writeStorable"
      },
      "index": {
        "description": "Write storable value",
        "hierarchy": "Blaze ByteString Builder",
        "module": "Blaze.ByteString.Builder",
        "name": "writeStorable",
        "normalized": "a-\u003eWrite",
        "package": "blaze-builder",
        "partial": "Storable",
        "signature": "a-\u003eWrite"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/blaze-builder/docs/Blaze-ByteString-Builder.html#v:writeToByteString",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eWrite\u003c/a\u003e\u003c/code\u003e to produce a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n This is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etoByteString\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003efromWrite\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e, but is more\n efficient because it uses just one appropriately-sized buffer.\n\u003c/p\u003e",
        "fct-module": "Blaze.ByteString.Builder",
        "fct-package": "blaze-builder",
        "fct-signature": "Write -\u003e ByteString",
        "fct-source": "src/Blaze-ByteString-Builder-Internal.html#writeToByteString",
        "fct-type": "function",
        "title": "writeToByteString"
      },
      "index": {
        "description": "Run Write to produce strict ByteString This is equivalent to toByteString fromWrite but is more efficient because it uses just one appropriately-sized buffer",
        "hierarchy": "Blaze ByteString Builder",
        "module": "Blaze.ByteString.Builder",
        "name": "writeToByteString",
        "normalized": "Write-\u003eByteString",
        "package": "blaze-builder",
        "partial": "To Byte String",
        "signature": "Write-\u003eByteString"
      }
    }
  }
]