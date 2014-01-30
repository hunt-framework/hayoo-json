[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lz4/docs/Codec-Compression-LZ4.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a high level \u003ccode\u003eByteString\u003c/code\u003e interface to the\n lz4 library. More information about lz4 can be found here:\n \u003ca\u003ehttp://code.google.com/p/lz4/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis module prefixes the buffer that is compressed with the\n uncompressed length (as lz4 can't recover this information\n itself.) It also has this property: all functions when\n called with an empty string return \u003ccode\u003eJust Data.ByteString.empty\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Compression.LZ4",
        "fct-package": "lz4",
        "fct-signature": "module",
        "fct-source": "src/Codec-Compression-LZ4.html",
        "fct-type": "module",
        "title": "LZ4"
      },
      "index": {
        "description": "This module provides high level ByteString interface to the lz4 library More information about lz4 can be found here http code.google.com lz4 This module prefixes the buffer that is compressed with the uncompressed length as lz4 can recover this information itself It also has this property all functions when called with an empty string return Just Data.ByteString.empty",
        "hierarchy": "Codec Compression LZ4",
        "module": "Codec.Compression.LZ4",
        "name": "LZ4",
        "normalized": "",
        "package": "lz4",
        "partial": "LZ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lz4/docs/Codec-Compression-LZ4.html#v:c_LZ4_compress",
      "description": {
        "fct-descr": "\u003cp\u003eCompresses a string.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.LZ4",
        "fct-package": "lz4",
        "fct-signature": "Ptr CChar-\u003e Ptr Word8-\u003e CInt-\u003e IO CInt",
        "fct-type": "function",
        "title": "c_LZ4_compress"
      },
      "index": {
        "description": "Compresses string",
        "hierarchy": "Codec Compression LZ4",
        "module": "Codec.Compression.LZ4",
        "name": "c_LZ4_compress",
        "normalized": "Ptr CChar-\u003ePtr Word-\u003eCInt-\u003eIO CInt",
        "package": "lz4",
        "partial": "LZ",
        "signature": "Ptr CChar-\u003ePtr Word-\u003eCInt-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lz4/docs/Codec-Compression-LZ4.html#v:c_LZ4_compressBound",
      "description": {
        "fct-descr": "\u003cp\u003eWorst case compression bounds on an input string.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.LZ4",
        "fct-package": "lz4",
        "fct-signature": "CInt-\u003e CInt",
        "fct-type": "function",
        "title": "c_LZ4_compressBound"
      },
      "index": {
        "description": "Worst case compression bounds on an input string",
        "hierarchy": "Codec Compression LZ4",
        "module": "Codec.Compression.LZ4",
        "name": "c_LZ4_compressBound",
        "normalized": "CInt-\u003eCInt",
        "package": "lz4",
        "partial": "LZ Bound",
        "signature": "CInt-\u003eCInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lz4/docs/Codec-Compression-LZ4.html#v:c_LZ4_compressHC",
      "description": {
        "fct-descr": "\u003cp\u003eCompresses a string with very high compression.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.LZ4",
        "fct-package": "lz4",
        "fct-signature": "Ptr CChar-\u003e Ptr Word8-\u003e CInt-\u003e IO CInt",
        "fct-type": "function",
        "title": "c_LZ4_compressHC"
      },
      "index": {
        "description": "Compresses string with very high compression",
        "hierarchy": "Codec Compression LZ4",
        "module": "Codec.Compression.LZ4",
        "name": "c_LZ4_compressHC",
        "normalized": "Ptr CChar-\u003ePtr Word-\u003eCInt-\u003eIO CInt",
        "package": "lz4",
        "partial": "LZ HC",
        "signature": "Ptr CChar-\u003ePtr Word-\u003eCInt-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lz4/docs/Codec-Compression-LZ4.html#v:c_LZ4_uncompress",
      "description": {
        "fct-descr": "\u003cp\u003eDecompresses a string. Works for both \u003ccode\u003e\u003ca\u003ec_LZ4_compress\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003ec_LZ4_compressHC\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.LZ4",
        "fct-package": "lz4",
        "fct-signature": "Ptr CChar-\u003e Ptr Word8-\u003e CInt-\u003e IO CInt",
        "fct-type": "function",
        "title": "c_LZ4_uncompress"
      },
      "index": {
        "description": "Decompresses string Works for both LZ4 compress and LZ4 compressHC",
        "hierarchy": "Codec Compression LZ4",
        "module": "Codec.Compression.LZ4",
        "name": "c_LZ4_uncompress",
        "normalized": "Ptr CChar-\u003ePtr Word-\u003eCInt-\u003eIO CInt",
        "package": "lz4",
        "partial": "LZ",
        "signature": "Ptr CChar-\u003ePtr Word-\u003eCInt-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lz4/docs/Codec-Compression-LZ4.html#v:compress",
      "description": {
        "fct-descr": "\u003cp\u003eCompresses the input \u003ccode\u003eByteString\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWill return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the compression fails. Otherwise, returns\n \u003ccode\u003eJust xs\u003c/code\u003e with the compressed string (and additionally, if \u003ccode\u003exs ==\n empty\u003c/code\u003e then \u003ccode\u003ecompress empty == Just empty\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.LZ4",
        "fct-package": "lz4",
        "fct-signature": "ByteString -\u003e Maybe ByteString",
        "fct-source": "src/Codec-Compression-LZ4.html#compress",
        "fct-type": "function",
        "title": "compress"
      },
      "index": {
        "description": "Compresses the input ByteString Will return Nothing if the compression fails Otherwise returns Just xs with the compressed string and additionally if xs empty then compress empty Just empty",
        "hierarchy": "Codec Compression LZ4",
        "module": "Codec.Compression.LZ4",
        "name": "compress",
        "normalized": "ByteString-\u003eMaybe ByteString",
        "package": "lz4",
        "partial": "",
        "signature": "ByteString-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lz4/docs/Codec-Compression-LZ4.html#v:compressHC",
      "description": {
        "fct-descr": "\u003cp\u003eCompress the input \u003ccode\u003eByteString\u003c/code\u003e as much as possible, but comes\n with a massive speed drop in compression. Decompression is faster\n however and can be done with \u003ccode\u003e\u003ca\u003edecompress\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWill return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the compression fails. Otherwise, returns\n \u003ccode\u003eJust xs\u003c/code\u003e with the compressed string (and additionally, if \u003ccode\u003exs ==\n empty\u003c/code\u003e then \u003ccode\u003ecompressHC empty == Just empty\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.LZ4",
        "fct-package": "lz4",
        "fct-signature": "ByteString -\u003e Maybe ByteString",
        "fct-source": "src/Codec-Compression-LZ4.html#compressHC",
        "fct-type": "function",
        "title": "compressHC"
      },
      "index": {
        "description": "Compress the input ByteString as much as possible but comes with massive speed drop in compression Decompression is faster however and can be done with decompress Will return Nothing if the compression fails Otherwise returns Just xs with the compressed string and additionally if xs empty then compressHC empty Just empty",
        "hierarchy": "Codec Compression LZ4",
        "module": "Codec.Compression.LZ4",
        "name": "compressHC",
        "normalized": "ByteString-\u003eMaybe ByteString",
        "package": "lz4",
        "partial": "HC",
        "signature": "ByteString-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lz4/docs/Codec-Compression-LZ4.html#v:compressPlusHC",
      "description": {
        "fct-descr": "\u003cp\u003eEssentially defined as:\n\u003c/p\u003e\u003cpre\u003e compressPlusHC xs = compress xs \u003e\u003e= compressHC\n\u003c/pre\u003e\u003cp\u003eThis is an experimental interface. After regular compression, due\n to output encoding, things like relative offsets in the compression\n buffer or artifacts from number encoding can end up the same in the\n output buffer for often repeated data. Therefore, further savings\n are possible in the input buffer by compressing again. lz4 even in\n high compression mode will quickly ignore already-compressed data\n and remain quite fast. Thus, this interface is designed to give a\n better compression/speed tradeoff than \u003ccode\u003e\u003ca\u003ecompressHC\u003c/a\u003e\u003c/code\u003e: it doesn't\n compress as well, but is nowhere near as slow. Some context:\n \u003ca\u003ehttp://www.reddit.com/r/programming/comments/vyu7r/compressing_log_files_twice_improves_ratio/c58svj3?context=3\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eMust be decompressed with \u003ccode\u003e\u003ca\u003edecompressPlusHC\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWill return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the compression fails. Otherwise, returns\n \u003ccode\u003eJust xs\u003c/code\u003e with the compressed string (and additionally, if \u003ccode\u003exs ==\n empty\u003c/code\u003e then \u003ccode\u003ecompressPlusHC empty == Just empty\u003c/code\u003e.)\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.LZ4",
        "fct-package": "lz4",
        "fct-signature": "ByteString -\u003e Maybe ByteString",
        "fct-source": "src/Codec-Compression-LZ4.html#compressPlusHC",
        "fct-type": "function",
        "title": "compressPlusHC"
      },
      "index": {
        "description": "Essentially defined as compressPlusHC xs compress xs compressHC This is an experimental interface After regular compression due to output encoding things like relative offsets in the compression buffer or artifacts from number encoding can end up the same in the output buffer for often repeated data Therefore further savings are possible in the input buffer by compressing again lz4 even in high compression mode will quickly ignore already-compressed data and remain quite fast Thus this interface is designed to give better compression speed tradeoff than compressHC it doesn compress as well but is nowhere near as slow Some context http www.reddit.com programming comments vyu7r compressing log files twice improves ratio c58svj3 context Must be decompressed with decompressPlusHC Will return Nothing if the compression fails Otherwise returns Just xs with the compressed string and additionally if xs empty then compressPlusHC empty Just empty",
        "hierarchy": "Codec Compression LZ4",
        "module": "Codec.Compression.LZ4",
        "name": "compressPlusHC",
        "normalized": "ByteString-\u003eMaybe ByteString",
        "package": "lz4",
        "partial": "Plus HC",
        "signature": "ByteString-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lz4/docs/Codec-Compression-LZ4.html#v:decompress",
      "description": {
        "fct-descr": "\u003cp\u003eDecompress the input \u003ccode\u003eByteString\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Codec.Compression.LZ4",
        "fct-package": "lz4",
        "fct-signature": "ByteString -\u003e Maybe ByteString",
        "fct-source": "src/Codec-Compression-LZ4.html#decompress",
        "fct-type": "function",
        "title": "decompress"
      },
      "index": {
        "description": "Decompress the input ByteString",
        "hierarchy": "Codec Compression LZ4",
        "module": "Codec.Compression.LZ4",
        "name": "decompress",
        "normalized": "ByteString-\u003eMaybe ByteString",
        "package": "lz4",
        "partial": "",
        "signature": "ByteString-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lz4/docs/Codec-Compression-LZ4.html#v:decompressPlusHC",
      "description": {
        "fct-descr": "\u003cp\u003eDecompress a string compressed with \u003ccode\u003e\u003ca\u003ecompressPlusHC\u003c/a\u003e\u003c/code\u003e. Essentially\n defined as:\n\u003c/p\u003e\u003cpre\u003e decompressPlusHC xs = decompress xs \u003e\u003e= decompress\n\u003c/pre\u003e",
        "fct-module": "Codec.Compression.LZ4",
        "fct-package": "lz4",
        "fct-signature": "ByteString -\u003e Maybe ByteString",
        "fct-source": "src/Codec-Compression-LZ4.html#decompressPlusHC",
        "fct-type": "function",
        "title": "decompressPlusHC"
      },
      "index": {
        "description": "Decompress string compressed with compressPlusHC Essentially defined as decompressPlusHC xs decompress xs decompress",
        "hierarchy": "Codec Compression LZ4",
        "module": "Codec.Compression.LZ4",
        "name": "decompressPlusHC",
        "normalized": "ByteString-\u003eMaybe ByteString",
        "package": "lz4",
        "partial": "Plus HC",
        "signature": "ByteString-\u003eMaybe ByteString"
      }
    }
  }
]