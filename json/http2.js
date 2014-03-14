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
        "word": "http2"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHPACK: encoding and decoding a header set.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.HPACK",
          "name": "HPACK",
          "package": "http2",
          "source": "src/Network-HPACK.html",
          "type": "module"
        },
        "index": {
          "description": "HPACK encoding and decoding header set",
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "HPACK",
          "package": "http2",
          "partial": "HPACK",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eByte stream in HTTP request/response.\n\u003c/p\u003e",
          "module": "Network.HPACK",
          "name": "ByteStream",
          "package": "http2",
          "source": "src/Network-HPACK-Types.html#ByteStream",
          "type": "type"
        },
        "index": {
          "description": "Byte stream in HTTP request response",
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "ByteStream",
          "package": "http2",
          "partial": "Byte Stream",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#t:ByteStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompression algorithms for HPACK encoding.\n\u003c/p\u003e",
          "module": "Network.HPACK",
          "name": "CompressionAlgo",
          "package": "http2",
          "source": "src/Network-HPACK-Types.html#CompressionAlgo",
          "type": "data"
        },
        "index": {
          "description": "Compression algorithms for HPACK encoding",
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "CompressionAlgo",
          "package": "http2",
          "partial": "Compression Algo",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#t:CompressionAlgo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContext for HPACK encoding/decoding.\n   This is destructive!\n\u003c/p\u003e",
          "module": "Network.HPACK",
          "name": "Context",
          "package": "http2",
          "source": "src/Network-HPACK-Context.html#Context",
          "type": "data"
        },
        "index": {
          "description": "Context for HPACK encoding decoding This is destructive",
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "Context",
          "package": "http2",
          "partial": "Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eErrors for decoder.\n\u003c/p\u003e",
          "module": "Network.HPACK",
          "name": "DecodeError",
          "package": "http2",
          "source": "src/Network-HPACK-Types.html#DecodeError",
          "type": "data"
        },
        "index": {
          "description": "Errors for decoder",
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "DecodeError",
          "package": "http2",
          "partial": "Decode Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#t:DecodeError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrategy for HPACK encoding.\n\u003c/p\u003e",
          "module": "Network.HPACK",
          "name": "EncodeStrategy",
          "package": "http2",
          "source": "src/Network-HPACK-Types.html#EncodeStrategy",
          "type": "data"
        },
        "index": {
          "description": "Strategy for HPACK encoding",
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "EncodeStrategy",
          "package": "http2",
          "partial": "Encode Strategy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#t:EncodeStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHPACK decoding, from \u003ccode\u003e\u003ca\u003eByteStream\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eHeaderSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.HPACK",
          "name": "HPACKDecoding",
          "package": "http2",
          "source": "src/Network-HPACK.html#HPACKDecoding",
          "type": "type"
        },
        "index": {
          "description": "HPACK decoding from ByteStream to HeaderSet",
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "HPACKDecoding",
          "package": "http2",
          "partial": "HPACKDecoding",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#t:HPACKDecoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHPACK encoding, from \u003ccode\u003e\u003ca\u003eHeaderSet\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eByteStream\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.HPACK",
          "name": "HPACKEncoding",
          "package": "http2",
          "source": "src/Network-HPACK.html#HPACKEncoding",
          "type": "type"
        },
        "index": {
          "description": "HPACK encoding from HeaderSet to ByteStream",
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "HPACKEncoding",
          "package": "http2",
          "partial": "HPACKEncoding",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#t:HPACKEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeader.\n\u003c/p\u003e",
          "module": "Network.HPACK",
          "name": "Header",
          "package": "http2",
          "source": "src/Network-HPACK-Types.html#Header",
          "type": "type"
        },
        "index": {
          "description": "Header",
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "Header",
          "package": "http2",
          "partial": "Header",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#t:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeader name.\n\u003c/p\u003e",
          "module": "Network.HPACK",
          "name": "HeaderName",
          "package": "http2",
          "source": "src/Network-HPACK-Types.html#HeaderName",
          "type": "type"
        },
        "index": {
          "description": "Header name",
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "HeaderName",
          "package": "http2",
          "partial": "Header Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#t:HeaderName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeader set.\n\u003c/p\u003e",
          "module": "Network.HPACK",
          "name": "HeaderSet",
          "package": "http2",
          "source": "src/Network-HPACK-Context-HeaderSet.html#HeaderSet",
          "type": "type"
        },
        "index": {
          "description": "Header set",
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "HeaderSet",
          "package": "http2",
          "partial": "Header Set",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#t:HeaderSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeader value.\n\u003c/p\u003e",
          "module": "Network.HPACK",
          "name": "HeaderValue",
          "package": "http2",
          "source": "src/Network-HPACK-Types.html#HeaderValue",
          "type": "type"
        },
        "index": {
          "description": "Header value",
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "HeaderValue",
          "package": "http2",
          "partial": "Header Value",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#t:HeaderValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndex for table.\n\u003c/p\u003e",
          "module": "Network.HPACK",
          "name": "Index",
          "package": "http2",
          "source": "src/Network-HPACK-Types.html#Index",
          "type": "type"
        },
        "index": {
          "description": "Index for table",
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "Index",
          "package": "http2",
          "partial": "Index",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#t:Index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize in bytes.\n\u003c/p\u003e",
          "module": "Network.HPACK",
          "name": "Size",
          "package": "http2",
          "source": "src/Network-HPACK-Table-Entry.html#Size",
          "type": "type"
        },
        "index": {
          "description": "Size in bytes",
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "Size",
          "package": "http2",
          "partial": "Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#t:Size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculating difference\n\u003c/p\u003e",
          "module": "Network.HPACK",
          "name": "Diff",
          "package": "http2",
          "signature": "Diff",
          "source": "src/Network-HPACK-Types.html#CompressionAlgo",
          "type": "function"
        },
        "index": {
          "description": "Calculating difference",
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "Diff",
          "package": "http2",
          "partial": "Diff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#v:Diff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeader block is empty\n\u003c/p\u003e",
          "module": "Network.HPACK",
          "name": "EmptyBlock",
          "package": "http2",
          "signature": "EmptyBlock",
          "source": "src/Network-HPACK-Types.html#DecodeError",
          "type": "function"
        },
        "index": {
          "description": "Header block is empty",
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "EmptyBlock",
          "package": "http2",
          "partial": "Empty Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#v:EmptyBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoded string has no length\n\u003c/p\u003e",
          "module": "Network.HPACK",
          "name": "EmptyEncodedString",
          "package": "http2",
          "signature": "EmptyEncodedString",
          "source": "src/Network-HPACK-Types.html#DecodeError",
          "type": "function"
        },
        "index": {
          "description": "Encoded string has no length",
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "EmptyEncodedString",
          "package": "http2",
          "partial": "Empty Encoded String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#v:EmptyEncodedString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HPACK",
          "name": "EncodeStrategy",
          "package": "http2",
          "signature": "EncodeStrategy",
          "source": "src/Network-HPACK-Types.html#EncodeStrategy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "EncodeStrategy",
          "package": "http2",
          "partial": "Encode Strategy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#v:EncodeStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEos appears in the middle of huffman string\n\u003c/p\u003e",
          "module": "Network.HPACK",
          "name": "EosInTheMiddle",
          "package": "http2",
          "signature": "EosInTheMiddle",
          "source": "src/Network-HPACK-Types.html#DecodeError",
          "type": "function"
        },
        "index": {
          "description": "Eos appears in the middle of huffman string",
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "EosInTheMiddle",
          "package": "http2",
          "partial": "Eos In The Middle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#v:EosInTheMiddle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-eos appears in the end of huffman string\n\u003c/p\u003e",
          "module": "Network.HPACK",
          "name": "IllegalEos",
          "package": "http2",
          "signature": "IllegalEos",
          "source": "src/Network-HPACK-Types.html#DecodeError",
          "type": "function"
        },
        "index": {
          "description": "Non-eos appears in the end of huffman string",
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "IllegalEos",
          "package": "http2",
          "partial": "Illegal Eos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#v:IllegalEos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndex is out of range\n\u003c/p\u003e",
          "module": "Network.HPACK",
          "name": "IndexOverrun",
          "package": "http2",
          "signature": "IndexOverrun Index",
          "source": "src/Network-HPACK-Types.html#DecodeError",
          "type": "function"
        },
        "index": {
          "description": "Index is out of range",
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "IndexOverrun",
          "package": "http2",
          "partial": "Index Overrun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#v:IndexOverrun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsing indices only\n\u003c/p\u003e",
          "module": "Network.HPACK",
          "name": "Linear",
          "package": "http2",
          "signature": "Linear",
          "source": "src/Network-HPACK-Types.html#CompressionAlgo",
          "type": "function"
        },
        "index": {
          "description": "Using indices only",
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "Linear",
          "package": "http2",
          "partial": "Linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#v:Linear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo compression\n\u003c/p\u003e",
          "module": "Network.HPACK",
          "name": "Naive",
          "package": "http2",
          "signature": "Naive",
          "source": "src/Network-HPACK-Types.html#CompressionAlgo",
          "type": "function"
        },
        "index": {
          "description": "No compression",
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "Naive",
          "package": "http2",
          "partial": "Naive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#v:Naive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsing the static table only\n\u003c/p\u003e",
          "module": "Network.HPACK",
          "name": "Static",
          "package": "http2",
          "signature": "Static",
          "source": "src/Network-HPACK-Types.html#CompressionAlgo",
          "type": "function"
        },
        "index": {
          "description": "Using the static table only",
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "Static",
          "package": "http2",
          "partial": "Static",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#v:Static"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEos of huffman string is more than 7 bits\n\u003c/p\u003e",
          "module": "Network.HPACK",
          "name": "TooLongEos",
          "package": "http2",
          "signature": "TooLongEos",
          "source": "src/Network-HPACK-Types.html#DecodeError",
          "type": "function"
        },
        "index": {
          "description": "Eos of huffman string is more than bits",
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "TooLongEos",
          "package": "http2",
          "partial": "Too Long Eos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#v:TooLongEos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhich compression algorithm is used.\n\u003c/p\u003e",
          "module": "Network.HPACK",
          "name": "compressionAlgo",
          "package": "http2",
          "signature": "CompressionAlgo",
          "source": "src/Network-HPACK-Types.html#EncodeStrategy",
          "type": "function"
        },
        "index": {
          "description": "Which compression algorithm is used",
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "compressionAlgo",
          "package": "http2",
          "partial": "Algo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#v:compressionAlgo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverting the low level format for HTTP request to \u003ccode\u003e\u003ca\u003eHeaderSet\u003c/a\u003e\u003c/code\u003e.\n   \u003ccode\u003e\u003ca\u003eDecodeError\u003c/a\u003e\u003c/code\u003e would be thrown.\n\u003c/p\u003e",
          "module": "Network.HPACK",
          "name": "decodeHeader",
          "package": "http2",
          "signature": "HPACKDecoding",
          "source": "src/Network-HPACK.html#decodeHeader",
          "type": "function"
        },
        "index": {
          "description": "Converting the low level format for HTTP request to HeaderSet DecodeError would be thrown",
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "decodeHeader",
          "package": "http2",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#v:decodeHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault \u003ccode\u003e\u003ca\u003eEncodeStrategy\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003ecompressionAlgo\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eLinear\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003euseHuffman\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.HPACK",
          "name": "defaultEncodeStrategy",
          "package": "http2",
          "signature": "EncodeStrategy",
          "source": "src/Network-HPACK-Types.html#defaultEncodeStrategy",
          "type": "function"
        },
        "index": {
          "description": "Default EncodeStrategy compressionAlgo is Linear and useHuffman is True",
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "defaultEncodeStrategy",
          "package": "http2",
          "partial": "Encode Strategy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#v:defaultEncodeStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverting \u003ccode\u003e\u003ca\u003eHeaderSet\u003c/a\u003e\u003c/code\u003e for HTTP request to the low level format.\n\u003c/p\u003e",
          "module": "Network.HPACK",
          "name": "encodeHeader",
          "package": "http2",
          "signature": "EncodeStrategy -\u003e HPACKEncoding",
          "source": "src/Network-HPACK.html#encodeHeader",
          "type": "function"
        },
        "index": {
          "description": "Converting HeaderSet for HTTP request to the low level format",
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "encodeHeader",
          "normalized": "EncodeStrategy-\u003eHPACKEncoding",
          "package": "http2",
          "partial": "Header",
          "signature": "EncodeStrategy-\u003eHPACKEncoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#v:encodeHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a new \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e.\n   The first argument is the size of a header table.\n\u003c/p\u003e",
          "module": "Network.HPACK",
          "name": "newContextForDecoding",
          "package": "http2",
          "signature": "Size -\u003e IO Context",
          "source": "src/Network-HPACK-Context.html#newContextForDecoding",
          "type": "function"
        },
        "index": {
          "description": "Creating new Context The first argument is the size of header table",
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "newContextForDecoding",
          "normalized": "Size-\u003eIO Context",
          "package": "http2",
          "partial": "Context For Decoding",
          "signature": "Size-\u003eIO Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#v:newContextForDecoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating a new \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e.\n   The first argument is the size of a header table.\n\u003c/p\u003e",
          "module": "Network.HPACK",
          "name": "newContextForEncoding",
          "package": "http2",
          "signature": "Size -\u003e IO Context",
          "source": "src/Network-HPACK-Context.html#newContextForEncoding",
          "type": "function"
        },
        "index": {
          "description": "Creating new Context The first argument is the size of header table",
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "newContextForEncoding",
          "normalized": "Size-\u003eIO Context",
          "package": "http2",
          "partial": "Context For Encoding",
          "signature": "Size-\u003eIO Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#v:newContextForEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether or not to use Huffman encoding for strings.\n\u003c/p\u003e",
          "module": "Network.HPACK",
          "name": "useHuffman",
          "package": "http2",
          "signature": "Bool",
          "source": "src/Network-HPACK-Types.html#EncodeStrategy",
          "type": "function"
        },
        "index": {
          "description": "Whether or not to use Huffman encoding for strings",
          "hierarchy": "Network HPACK",
          "module": "Network.HPACK",
          "name": "useHuffman",
          "package": "http2",
          "partial": "Huffman",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http2/docs/Network-HPACK.html#v:useHuffman"
      }
    }
  ]
]