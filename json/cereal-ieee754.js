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
        "word": "cereal-ieee754"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for reading, writing and converting IEEE 754 floating\n point numbers.\n\u003c/p\u003e\u003cp\u003eConversions use \u003ccode\u003e\u003ca\u003eSTUArray\u003c/a\u003e\u003c/code\u003e and the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad to reinterpret bytes\n and get \u003cem\u003ewhat we assume to be\u003c/em\u003e the IEEE 754 binary representation\n of single and double precision floating point numbers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Serialize.IEEE754",
          "name": "IEEE754",
          "package": "cereal-ieee754",
          "source": "src/Data-Serialize-IEEE754.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for reading writing and converting IEEE floating point numbers Conversions use STUArray and the ST monad to reinterpret bytes and get what we assume to be the IEEE binary representation of single and double precision floating point numbers",
          "hierarchy": "Data Serialize IEEE754",
          "module": "Data.Serialize.IEEE754",
          "name": "IEEE754",
          "package": "cereal-ieee754",
          "partial": "IEEE",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cereal-ieee754/docs/Data-Serialize-IEEE754.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterpret a 64-bit float as a 64-bit word.\n\u003c/p\u003e",
          "module": "Data.Serialize.IEEE754",
          "name": "doubleToWord",
          "package": "cereal-ieee754",
          "signature": "Double -\u003e Word64",
          "source": "src/Data-Serialize-IEEE754.html#doubleToWord",
          "type": "function"
        },
        "index": {
          "description": "Interpret bit float as bit word",
          "hierarchy": "Data Serialize IEEE754",
          "module": "Data.Serialize.IEEE754",
          "name": "doubleToWord",
          "normalized": "Double-\u003eWord",
          "package": "cereal-ieee754",
          "partial": "To Word",
          "signature": "Double-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-ieee754/docs/Data-Serialize-IEEE754.html#v:doubleToWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterpret a 32-bit float as a 32-bit word.\n\u003c/p\u003e",
          "module": "Data.Serialize.IEEE754",
          "name": "floatToWord",
          "package": "cereal-ieee754",
          "signature": "Float -\u003e Word32",
          "source": "src/Data-Serialize-IEEE754.html#floatToWord",
          "type": "function"
        },
        "index": {
          "description": "Interpret bit float as bit word",
          "hierarchy": "Data Serialize IEEE754",
          "module": "Data.Serialize.IEEE754",
          "name": "floatToWord",
          "normalized": "Float-\u003eWord",
          "package": "cereal-ieee754",
          "partial": "To Word",
          "signature": "Float-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-ieee754/docs/Data-Serialize-IEEE754.html#v:floatToWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a 32-bit float in big endian format\n\u003c/p\u003e",
          "module": "Data.Serialize.IEEE754",
          "name": "getFloat32be",
          "package": "cereal-ieee754",
          "signature": "Get Float",
          "source": "src/Data-Serialize-IEEE754.html#getFloat32be",
          "type": "function"
        },
        "index": {
          "description": "Read bit float in big endian format",
          "hierarchy": "Data Serialize IEEE754",
          "module": "Data.Serialize.IEEE754",
          "name": "getFloat32be",
          "package": "cereal-ieee754",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-ieee754/docs/Data-Serialize-IEEE754.html#v:getFloat32be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a 32-bit float in native host order and host endianness\n\u003c/p\u003e",
          "module": "Data.Serialize.IEEE754",
          "name": "getFloat32host",
          "package": "cereal-ieee754",
          "signature": "Get Float",
          "source": "src/Data-Serialize-IEEE754.html#getFloat32host",
          "type": "function"
        },
        "index": {
          "description": "Read bit float in native host order and host endianness",
          "hierarchy": "Data Serialize IEEE754",
          "module": "Data.Serialize.IEEE754",
          "name": "getFloat32host",
          "package": "cereal-ieee754",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-ieee754/docs/Data-Serialize-IEEE754.html#v:getFloat32host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a 32-bit float in little endian format\n\u003c/p\u003e",
          "module": "Data.Serialize.IEEE754",
          "name": "getFloat32le",
          "package": "cereal-ieee754",
          "signature": "Get Float",
          "source": "src/Data-Serialize-IEEE754.html#getFloat32le",
          "type": "function"
        },
        "index": {
          "description": "Read bit float in little endian format",
          "hierarchy": "Data Serialize IEEE754",
          "module": "Data.Serialize.IEEE754",
          "name": "getFloat32le",
          "package": "cereal-ieee754",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-ieee754/docs/Data-Serialize-IEEE754.html#v:getFloat32le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a 64-bit float in big endian format\n\u003c/p\u003e",
          "module": "Data.Serialize.IEEE754",
          "name": "getFloat64be",
          "package": "cereal-ieee754",
          "signature": "Get Double",
          "source": "src/Data-Serialize-IEEE754.html#getFloat64be",
          "type": "function"
        },
        "index": {
          "description": "Read bit float in big endian format",
          "hierarchy": "Data Serialize IEEE754",
          "module": "Data.Serialize.IEEE754",
          "name": "getFloat64be",
          "package": "cereal-ieee754",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-ieee754/docs/Data-Serialize-IEEE754.html#v:getFloat64be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a 64-bit float in native host order and host endianness\n\u003c/p\u003e",
          "module": "Data.Serialize.IEEE754",
          "name": "getFloat64host",
          "package": "cereal-ieee754",
          "signature": "Get Double",
          "source": "src/Data-Serialize-IEEE754.html#getFloat64host",
          "type": "function"
        },
        "index": {
          "description": "Read bit float in native host order and host endianness",
          "hierarchy": "Data Serialize IEEE754",
          "module": "Data.Serialize.IEEE754",
          "name": "getFloat64host",
          "package": "cereal-ieee754",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-ieee754/docs/Data-Serialize-IEEE754.html#v:getFloat64host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a 64-bit float in little endian format\n\u003c/p\u003e",
          "module": "Data.Serialize.IEEE754",
          "name": "getFloat64le",
          "package": "cereal-ieee754",
          "signature": "Get Double",
          "source": "src/Data-Serialize-IEEE754.html#getFloat64le",
          "type": "function"
        },
        "index": {
          "description": "Read bit float in little endian format",
          "hierarchy": "Data Serialize IEEE754",
          "module": "Data.Serialize.IEEE754",
          "name": "getFloat64le",
          "package": "cereal-ieee754",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-ieee754/docs/Data-Serialize-IEEE754.html#v:getFloat64le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a 32-bit float in big endian format\n\u003c/p\u003e",
          "module": "Data.Serialize.IEEE754",
          "name": "putFloat32be",
          "package": "cereal-ieee754",
          "signature": "Putter Float",
          "source": "src/Data-Serialize-IEEE754.html#putFloat32be",
          "type": "function"
        },
        "index": {
          "description": "Write bit float in big endian format",
          "hierarchy": "Data Serialize IEEE754",
          "module": "Data.Serialize.IEEE754",
          "name": "putFloat32be",
          "package": "cereal-ieee754",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-ieee754/docs/Data-Serialize-IEEE754.html#v:putFloat32be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a 32-bit float in native host order and host endianness\n\u003c/p\u003e",
          "module": "Data.Serialize.IEEE754",
          "name": "putFloat32host",
          "package": "cereal-ieee754",
          "signature": "Putter Float",
          "source": "src/Data-Serialize-IEEE754.html#putFloat32host",
          "type": "function"
        },
        "index": {
          "description": "Write bit float in native host order and host endianness",
          "hierarchy": "Data Serialize IEEE754",
          "module": "Data.Serialize.IEEE754",
          "name": "putFloat32host",
          "package": "cereal-ieee754",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-ieee754/docs/Data-Serialize-IEEE754.html#v:putFloat32host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a 32-bit float in little endian format\n\u003c/p\u003e",
          "module": "Data.Serialize.IEEE754",
          "name": "putFloat32le",
          "package": "cereal-ieee754",
          "signature": "Putter Float",
          "source": "src/Data-Serialize-IEEE754.html#putFloat32le",
          "type": "function"
        },
        "index": {
          "description": "Write bit float in little endian format",
          "hierarchy": "Data Serialize IEEE754",
          "module": "Data.Serialize.IEEE754",
          "name": "putFloat32le",
          "package": "cereal-ieee754",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-ieee754/docs/Data-Serialize-IEEE754.html#v:putFloat32le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a 64-bit float in big endian format\n\u003c/p\u003e",
          "module": "Data.Serialize.IEEE754",
          "name": "putFloat64be",
          "package": "cereal-ieee754",
          "signature": "Putter Double",
          "source": "src/Data-Serialize-IEEE754.html#putFloat64be",
          "type": "function"
        },
        "index": {
          "description": "Write bit float in big endian format",
          "hierarchy": "Data Serialize IEEE754",
          "module": "Data.Serialize.IEEE754",
          "name": "putFloat64be",
          "package": "cereal-ieee754",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-ieee754/docs/Data-Serialize-IEEE754.html#v:putFloat64be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a 64-bit float in native host order and host endianness\n\u003c/p\u003e",
          "module": "Data.Serialize.IEEE754",
          "name": "putFloat64host",
          "package": "cereal-ieee754",
          "signature": "Putter Double",
          "source": "src/Data-Serialize-IEEE754.html#putFloat64host",
          "type": "function"
        },
        "index": {
          "description": "Write bit float in native host order and host endianness",
          "hierarchy": "Data Serialize IEEE754",
          "module": "Data.Serialize.IEEE754",
          "name": "putFloat64host",
          "package": "cereal-ieee754",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-ieee754/docs/Data-Serialize-IEEE754.html#v:putFloat64host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a 64-bit float in little endian format\n\u003c/p\u003e",
          "module": "Data.Serialize.IEEE754",
          "name": "putFloat64le",
          "package": "cereal-ieee754",
          "signature": "Putter Double",
          "source": "src/Data-Serialize-IEEE754.html#putFloat64le",
          "type": "function"
        },
        "index": {
          "description": "Write bit float in little endian format",
          "hierarchy": "Data Serialize IEEE754",
          "module": "Data.Serialize.IEEE754",
          "name": "putFloat64le",
          "package": "cereal-ieee754",
          "partial": "Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-ieee754/docs/Data-Serialize-IEEE754.html#v:putFloat64le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterpret a 64-bit word as a 64-bit float.\n\u003c/p\u003e",
          "module": "Data.Serialize.IEEE754",
          "name": "wordToDouble",
          "package": "cereal-ieee754",
          "signature": "Word64 -\u003e Double",
          "source": "src/Data-Serialize-IEEE754.html#wordToDouble",
          "type": "function"
        },
        "index": {
          "description": "Interpret bit word as bit float",
          "hierarchy": "Data Serialize IEEE754",
          "module": "Data.Serialize.IEEE754",
          "name": "wordToDouble",
          "normalized": "Word-\u003eDouble",
          "package": "cereal-ieee754",
          "partial": "To Double",
          "signature": "Word-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-ieee754/docs/Data-Serialize-IEEE754.html#v:wordToDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterpret a 32-bit word as a 32-bit float.\n\u003c/p\u003e",
          "module": "Data.Serialize.IEEE754",
          "name": "wordToFloat",
          "package": "cereal-ieee754",
          "signature": "Word32 -\u003e Float",
          "source": "src/Data-Serialize-IEEE754.html#wordToFloat",
          "type": "function"
        },
        "index": {
          "description": "Interpret bit word as bit float",
          "hierarchy": "Data Serialize IEEE754",
          "module": "Data.Serialize.IEEE754",
          "name": "wordToFloat",
          "normalized": "Word-\u003eFloat",
          "package": "cereal-ieee754",
          "partial": "To Float",
          "signature": "Word-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-ieee754/docs/Data-Serialize-IEEE754.html#v:wordToFloat"
      }
    }
  ]
]