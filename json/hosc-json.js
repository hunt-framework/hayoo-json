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
        "word": "hosc-json"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEncoding and decoding of OSC types as JSON values.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.OSC.Type.JSON.Aeson",
          "name": "Aeson",
          "package": "hosc-json",
          "source": "src/Sound-OSC-Type-JSON-Aeson.html",
          "type": "module"
        },
        "index": {
          "description": "Encoding and decoding of OSC types as JSON values",
          "hierarchy": "Sound OSC Type JSON Aeson",
          "module": "Sound.OSC.Type.JSON.Aeson",
          "name": "Aeson",
          "package": "hosc-json",
          "partial": "Aeson",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hosc-json/docs/Sound-OSC-Type-JSON-Aeson.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.OSC.Type.JSON.Aeson",
          "name": "decode_assoc",
          "package": "hosc-json",
          "signature": "Value -\u003e Maybe (String, Value)",
          "source": "src/Sound-OSC-Type-JSON-Aeson.html#decode_assoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound OSC Type JSON Aeson",
          "module": "Sound.OSC.Type.JSON.Aeson",
          "name": "decode_assoc",
          "normalized": "Value-\u003eMaybe(String,Value)",
          "package": "hosc-json",
          "signature": "Value-\u003eMaybe(String,Value)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hosc-json/docs/Sound-OSC-Type-JSON-Aeson.html#v:decode_assoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.OSC.Type.JSON.Aeson",
          "name": "decode_datum",
          "package": "hosc-json",
          "signature": "Value -\u003e Maybe Datum",
          "source": "src/Sound-OSC-Type-JSON-Aeson.html#decode_datum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound OSC Type JSON Aeson",
          "module": "Sound.OSC.Type.JSON.Aeson",
          "name": "decode_datum",
          "normalized": "Value-\u003eMaybe Datum",
          "package": "hosc-json",
          "signature": "Value-\u003eMaybe Datum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hosc-json/docs/Sound-OSC-Type-JSON-Aeson.html#v:decode_datum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.OSC.Type.JSON.Aeson",
          "name": "decode_json",
          "package": "hosc-json",
          "signature": "ByteString -\u003e Maybe Value",
          "source": "src/Sound-OSC-Type-JSON-Aeson.html#decode_json",
          "type": "function"
        },
        "index": {
          "description": "Decode Value from ByteString",
          "hierarchy": "Sound OSC Type JSON Aeson",
          "module": "Sound.OSC.Type.JSON.Aeson",
          "name": "decode_json",
          "normalized": "ByteString-\u003eMaybe Value",
          "package": "hosc-json",
          "signature": "ByteString-\u003eMaybe Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hosc-json/docs/Sound-OSC-Type-JSON-Aeson.html#v:decode_json"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.OSC.Type.JSON.Aeson",
          "name": "decode_list",
          "package": "hosc-json",
          "signature": "Value -\u003e Maybe [Value]",
          "source": "src/Sound-OSC-Type-JSON-Aeson.html#decode_list",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound OSC Type JSON Aeson",
          "module": "Sound.OSC.Type.JSON.Aeson",
          "name": "decode_list",
          "normalized": "Value-\u003eMaybe[Value]",
          "package": "hosc-json",
          "signature": "Value-\u003eMaybe[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hosc-json/docs/Sound-OSC-Type-JSON-Aeson.html#v:decode_list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.OSC.Type.JSON.Aeson",
          "name": "decode_number",
          "package": "hosc-json",
          "signature": "Value -\u003e Maybe (Either Integer Double)",
          "source": "src/Sound-OSC-Type-JSON-Aeson.html#decode_number",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound OSC Type JSON Aeson",
          "module": "Sound.OSC.Type.JSON.Aeson",
          "name": "decode_number",
          "normalized": "Value-\u003eMaybe(Either Integer Double)",
          "package": "hosc-json",
          "signature": "Value-\u003eMaybe(Either Integer Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hosc-json/docs/Sound-OSC-Type-JSON-Aeson.html#v:decode_number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.OSC.Type.JSON.Aeson",
          "name": "decode_str",
          "package": "hosc-json",
          "signature": "Value -\u003e Maybe String",
          "source": "src/Sound-OSC-Type-JSON-Aeson.html#decode_str",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound OSC Type JSON Aeson",
          "module": "Sound.OSC.Type.JSON.Aeson",
          "name": "decode_str",
          "normalized": "Value-\u003eMaybe String",
          "package": "hosc-json",
          "signature": "Value-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hosc-json/docs/Sound-OSC-Type-JSON-Aeson.html#v:decode_str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.OSC.Type.JSON.Aeson",
          "name": "decode_word8",
          "package": "hosc-json",
          "signature": "Value -\u003e Maybe Word8",
          "source": "src/Sound-OSC-Type-JSON-Aeson.html#decode_word8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound OSC Type JSON Aeson",
          "module": "Sound.OSC.Type.JSON.Aeson",
          "name": "decode_word8",
          "normalized": "Value-\u003eMaybe Word",
          "package": "hosc-json",
          "signature": "Value-\u003eMaybe Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hosc-json/docs/Sound-OSC-Type-JSON-Aeson.html#v:decode_word8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePack \u003ccode\u003e(key,value)\u003c/code\u003e pair to \u003ccode\u003eJSObject\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e encode_assoc (\"a\",encode_int 0)\n\u003c/pre\u003e",
          "module": "Sound.OSC.Type.JSON.Aeson",
          "name": "encode_assoc",
          "package": "hosc-json",
          "signature": "(String, Value) -\u003e Value",
          "source": "src/Sound-OSC-Type-JSON-Aeson.html#encode_assoc",
          "type": "function"
        },
        "index": {
          "description": "Pack key value pair to JSObject encode assoc encode int",
          "hierarchy": "Sound OSC Type JSON Aeson",
          "module": "Sound.OSC.Type.JSON.Aeson",
          "name": "encode_assoc",
          "normalized": "(String,Value)-\u003eValue",
          "package": "hosc-json",
          "signature": "(String,Value)-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hosc-json/docs/Sound-OSC-Type-JSON-Aeson.html#v:encode_assoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e values are packed to \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.OSC.Type.JSON.Aeson",
          "name": "encode_floating",
          "package": "hosc-json",
          "signature": "n -\u003e Value",
          "source": "src/Sound-OSC-Type-JSON-Aeson.html#encode_floating",
          "type": "function"
        },
        "index": {
          "description": "All Floating values are packed to Double",
          "hierarchy": "Sound OSC Type JSON Aeson",
          "module": "Sound.OSC.Type.JSON.Aeson",
          "name": "encode_floating",
          "normalized": "a-\u003eValue",
          "package": "hosc-json",
          "signature": "n-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hosc-json/docs/Sound-OSC-Type-JSON-Aeson.html#v:encode_floating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e values are packed to \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.OSC.Type.JSON.Aeson",
          "name": "encode_integral",
          "package": "hosc-json",
          "signature": "n -\u003e Value",
          "source": "src/Sound-OSC-Type-JSON-Aeson.html#encode_integral",
          "type": "function"
        },
        "index": {
          "description": "All Integral values are packed to Integer",
          "hierarchy": "Sound OSC Type JSON Aeson",
          "module": "Sound.OSC.Type.JSON.Aeson",
          "name": "encode_integral",
          "normalized": "a-\u003eValue",
          "package": "hosc-json",
          "signature": "n-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hosc-json/docs/Sound-OSC-Type-JSON-Aeson.html#v:encode_integral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.OSC.Type.JSON.Aeson",
          "name": "encode_json",
          "package": "hosc-json",
          "signature": "Value -\u003e ByteString",
          "source": "src/Sound-OSC-Type-JSON-Aeson.html#encode_json",
          "type": "function"
        },
        "index": {
          "description": "Encode Value to ByteString",
          "hierarchy": "Sound OSC Type JSON Aeson",
          "module": "Sound.OSC.Type.JSON.Aeson",
          "name": "encode_json",
          "normalized": "Value-\u003eByteString",
          "package": "hosc-json",
          "signature": "Value-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hosc-json/docs/Sound-OSC-Type-JSON-Aeson.html#v:encode_json"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.OSC.Type.JSON.Aeson",
          "name": "encode_list",
          "package": "hosc-json",
          "signature": "[Value] -\u003e Value",
          "source": "src/Sound-OSC-Type-JSON-Aeson.html#encode_list",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound OSC Type JSON Aeson",
          "module": "Sound.OSC.Type.JSON.Aeson",
          "name": "encode_list",
          "normalized": "[Value]-\u003eValue",
          "package": "hosc-json",
          "signature": "[Value]-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hosc-json/docs/Sound-OSC-Type-JSON-Aeson.html#v:encode_list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePack \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.OSC.Type.JSON.Aeson",
          "name": "encode_string",
          "package": "hosc-json",
          "signature": "String -\u003e Value",
          "source": "src/Sound-OSC-Type-JSON-Aeson.html#encode_string",
          "type": "function"
        },
        "index": {
          "description": "Pack String",
          "hierarchy": "Sound OSC Type JSON Aeson",
          "module": "Sound.OSC.Type.JSON.Aeson",
          "name": "encode_string",
          "normalized": "String-\u003eValue",
          "package": "hosc-json",
          "signature": "String-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hosc-json/docs/Sound-OSC-Type-JSON-Aeson.html#v:encode_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEncoding and decoding of OSC types as JSON values.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.OSC.Type.JSON",
          "name": "JSON",
          "package": "hosc-json",
          "source": "src/Sound-OSC-Type-JSON.html",
          "type": "module"
        },
        "index": {
          "description": "Encoding and decoding of OSC types as JSON values",
          "hierarchy": "Sound OSC Type JSON",
          "module": "Sound.OSC.Type.JSON",
          "name": "JSON",
          "package": "hosc-json",
          "partial": "JSON",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hosc-json/docs/Sound-OSC-Type-JSON.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJSON numbers are \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.OSC.Type.JSON",
          "name": "Number",
          "package": "hosc-json",
          "source": "src/Sound-OSC-Type-JSON.html#Number",
          "type": "type"
        },
        "index": {
          "description": "JSON numbers are Either Integer or Double",
          "hierarchy": "Sound OSC Type JSON",
          "module": "Sound.OSC.Type.JSON",
          "name": "Number",
          "package": "hosc-json",
          "partial": "Number",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hosc-json/docs/Sound-OSC-Type-JSON.html#t:Number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe JSON value type.\n\u003c/p\u003e",
          "module": "Sound.OSC.Type.JSON",
          "name": "Value",
          "package": "hosc-json",
          "source": "src/Sound-OSC-Type-JSON.html#Value",
          "type": "type"
        },
        "index": {
          "description": "The JSON value type",
          "hierarchy": "Sound OSC Type JSON",
          "module": "Sound.OSC.Type.JSON",
          "name": "Value",
          "package": "hosc-json",
          "partial": "Value",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hosc-json/docs/Sound-OSC-Type-JSON.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode \u003ccode\u003e\u003ca\u003eBundle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e let b = bundle 0.0 [message \"/m\" [Int32 1,Float 1]]\n in decode_bundle (encode_bundle b) == Just b\n\u003c/pre\u003e\u003cpre\u003e let {b = bundle 0 [c_set1 3 4,n_free [0]]\n     ;j = encode_bundle b}\n in (b,decode_bundle j)\n\u003c/pre\u003e",
          "module": "Sound.OSC.Type.JSON",
          "name": "decode_bundle",
          "package": "hosc-json",
          "signature": "Value -\u003e Maybe Bundle",
          "source": "src/Sound-OSC-Type-JSON.html#decode_bundle",
          "type": "function"
        },
        "index": {
          "description": "Decode Bundle let bundle message Int32 Float in decode bundle encode bundle Just let bundle set1 free encode bundle in decode bundle",
          "hierarchy": "Sound OSC Type JSON",
          "module": "Sound.OSC.Type.JSON",
          "name": "decode_bundle",
          "normalized": "Value-\u003eMaybe Bundle",
          "package": "hosc-json",
          "signature": "Value-\u003eMaybe Bundle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hosc-json/docs/Sound-OSC-Type-JSON.html#v:decode_bundle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e variant of \u003ccode\u003e\u003ca\u003edecode_json\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.OSC.Type.JSON",
          "name": "decode_json_str",
          "package": "hosc-json",
          "signature": "String -\u003e Maybe Value",
          "source": "src/Sound-OSC-Type-JSON.html#decode_json_str",
          "type": "function"
        },
        "index": {
          "description": "String variant of decode json",
          "hierarchy": "Sound OSC Type JSON",
          "module": "Sound.OSC.Type.JSON",
          "name": "decode_json_str",
          "normalized": "String-\u003eMaybe Value",
          "package": "hosc-json",
          "signature": "String-\u003eMaybe Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hosc-json/docs/Sound-OSC-Type-JSON.html#v:decode_json_str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode \u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e let m = message \"/m\" [Int32 1,Float 1]\n in decode_message (encode_message m) == Just m\n\u003c/pre\u003e",
          "module": "Sound.OSC.Type.JSON",
          "name": "decode_message",
          "package": "hosc-json",
          "signature": "Value -\u003e Maybe Message",
          "source": "src/Sound-OSC-Type-JSON.html#decode_message",
          "type": "function"
        },
        "index": {
          "description": "Decode Message let message Int32 Float in decode message encode message Just",
          "hierarchy": "Sound OSC Type JSON",
          "module": "Sound.OSC.Type.JSON",
          "name": "decode_message",
          "normalized": "Value-\u003eMaybe Message",
          "package": "hosc-json",
          "signature": "Value-\u003eMaybe Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hosc-json/docs/Sound-OSC-Type-JSON.html#v:decode_message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode \u003ccode\u003e\u003ca\u003ePacket\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.OSC.Type.JSON",
          "name": "decode_packet",
          "package": "hosc-json",
          "signature": "Value -\u003e Maybe Packet",
          "source": "src/Sound-OSC-Type-JSON.html#decode_packet",
          "type": "function"
        },
        "index": {
          "description": "Decode Packet",
          "hierarchy": "Sound OSC Type JSON",
          "module": "Sound.OSC.Type.JSON",
          "name": "decode_packet",
          "normalized": "Value-\u003eMaybe Packet",
          "package": "hosc-json",
          "signature": "Value-\u003eMaybe Packet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hosc-json/docs/Sound-OSC-Type-JSON.html#v:decode_packet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode \u003ccode\u003e\u003ca\u003eBlob\u003c/a\u003e\u003c/code\u003e data (\u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Sound.OSC.Type.JSON",
          "name": "encode_blob",
          "package": "hosc-json",
          "signature": "ByteString -\u003e Value",
          "source": "src/Sound-OSC-Type-JSON.html#encode_blob",
          "type": "function"
        },
        "index": {
          "description": "Encode Blob data ByteString",
          "hierarchy": "Sound OSC Type JSON",
          "module": "Sound.OSC.Type.JSON",
          "name": "encode_blob",
          "normalized": "ByteString-\u003eValue",
          "package": "hosc-json",
          "signature": "ByteString-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hosc-json/docs/Sound-OSC-Type-JSON.html#v:encode_blob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eBundle\u003c/a\u003e\u003c/code\u003e encoder, the representation is a flat array of \u003ccode\u003e#bundle\u003c/code\u003e\n tag, \u003ccode\u003e\u003ca\u003eTimeStamp\u003c/a\u003e\u003c/code\u003e and then message arrays.\n\u003c/p\u003e\u003cpre\u003e let b = bundle 0 [message \"/m\" []]\n in encode_json_str (encode_bundle b)\n\u003c/pre\u003e\u003cpre\u003e let {b = bundle 0 [c_set1 3 4,n_free [0]]\n     ;r = \"[\\\"#bundle\\\",{\\\"timestamp\\\":0.0}\" ++\n          \",[\\\"/c_set\\\",3,4.0],[\\\"/n_free\\\",0]]\"}\n in encode_json_str (encode_bundle b) == r\n\u003c/pre\u003e",
          "module": "Sound.OSC.Type.JSON",
          "name": "encode_bundle",
          "package": "hosc-json",
          "signature": "Bundle -\u003e Value",
          "source": "src/Sound-OSC-Type-JSON.html#encode_bundle",
          "type": "function"
        },
        "index": {
          "description": "Bundle encoder the representation is flat array of bundle tag TimeStamp and then message arrays let bundle message in encode json str encode bundle let bundle set1 free bundle timestamp set free in encode json str encode bundle",
          "hierarchy": "Sound OSC Type JSON",
          "module": "Sound.OSC.Type.JSON",
          "name": "encode_bundle",
          "normalized": "Bundle-\u003eValue",
          "package": "hosc-json",
          "signature": "Bundle-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hosc-json/docs/Sound-OSC-Type-JSON.html#v:encode_bundle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eDatum\u003c/a\u003e\u003c/code\u003e encoder.  The encoding is shallow, \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e are all sent to \u003ccode\u003e\u003ca\u003eNumber\u003c/a\u003e\u003c/code\u003e.  \u003ccode\u003e\u003ca\u003eBlob\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTimeStamp\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eMidi\u003c/a\u003e\u003c/code\u003e are tagged.\n\u003c/p\u003e\u003cpre\u003e let {t = [(int32 0,\"0\")\n          ,(int64 0,\"0\")\n          ,(float 0.0,\"0.0\")\n          ,(double 0.1,\"0.1\")\n          ,(string \"s\",\"\\\"s\\\"\")\n          ,(Blob (Data.ByteString.Lazy.pack [0,1]),\"{\\\"blob\\\":[0,1]}\")\n          ,(TimeStamp 0.0,\"{\\\"timestamp\\\":0.0}\")\n          ,(midi (0,1,2,3),\"{\\\"midi\\\":[0,1,2,3]}\")]\n     ;r = map (\\(d,s) -\u003e encode_json_str (encode_datum d) == s) t}\n in all id r == True\n\u003c/pre\u003e",
          "module": "Sound.OSC.Type.JSON",
          "name": "encode_datum",
          "package": "hosc-json",
          "signature": "Datum -\u003e Value",
          "source": "src/Sound-OSC-Type-JSON.html#encode_datum",
          "type": "function"
        },
        "index": {
          "description": "Datum encoder The encoding is shallow Int Float and Double are all sent to Number Blob TimeStamp and Midi are tagged let int32 int64 float double string Blob Data.ByteString.Lazy.pack blob TimeStamp timestamp midi midi map encode json str encode datum in all id True",
          "hierarchy": "Sound OSC Type JSON",
          "module": "Sound.OSC.Type.JSON",
          "name": "encode_datum",
          "normalized": "Datum-\u003eValue",
          "package": "hosc-json",
          "signature": "Datum-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hosc-json/docs/Sound-OSC-Type-JSON.html#v:encode_datum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e variant of \u003ccode\u003e\u003ca\u003eencode_json\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.OSC.Type.JSON",
          "name": "encode_json_str",
          "package": "hosc-json",
          "signature": "Value -\u003e String",
          "source": "src/Sound-OSC-Type-JSON.html#encode_json_str",
          "type": "function"
        },
        "index": {
          "description": "String variant of encode json",
          "hierarchy": "Sound OSC Type JSON",
          "module": "Sound.OSC.Type.JSON",
          "name": "encode_json_str",
          "normalized": "Value-\u003eString",
          "package": "hosc-json",
          "signature": "Value-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hosc-json/docs/Sound-OSC-Type-JSON.html#v:encode_json_str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMessage\u003c/a\u003e\u003c/code\u003e encoder, the representation is a flat array of\n \u003ccode\u003eaddress\u003c/code\u003e and then arguments.\n\u003c/p\u003e\u003cpre\u003e let m = message \"/m\" [Int32 0,Float 1,string \"s\"]\n in encode_json_str (encode_message m)\n\u003c/pre\u003e\u003cpre\u003e import Sound.SC3\n encode_json_str (encode_message (n_free [0])) == \"[\\\"/n_free\\\",0]\"\n\u003c/pre\u003e",
          "module": "Sound.OSC.Type.JSON",
          "name": "encode_message",
          "package": "hosc-json",
          "signature": "Message -\u003e Value",
          "source": "src/Sound-OSC-Type-JSON.html#encode_message",
          "type": "function"
        },
        "index": {
          "description": "Message encoder the representation is flat array of address and then arguments let message Int32 Float string in encode json str encode message import Sound.SC3 encode json str encode message free free",
          "hierarchy": "Sound OSC Type JSON",
          "module": "Sound.OSC.Type.JSON",
          "name": "encode_message",
          "normalized": "Message-\u003eValue",
          "package": "hosc-json",
          "signature": "Message-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hosc-json/docs/Sound-OSC-Type-JSON.html#v:encode_message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode \u003ccode\u003e\u003ca\u003eMidi\u003c/a\u003e\u003c/code\u003e data (\u003ccode\u003eWord8\u003c/code\u003e tuple).\n\u003c/p\u003e",
          "module": "Sound.OSC.Type.JSON",
          "name": "encode_midi",
          "package": "hosc-json",
          "signature": "MIDI -\u003e Value",
          "source": "src/Sound-OSC-Type-JSON.html#encode_midi",
          "type": "function"
        },
        "index": {
          "description": "Encode Midi data Word8 tuple",
          "hierarchy": "Sound OSC Type JSON",
          "module": "Sound.OSC.Type.JSON",
          "name": "encode_midi",
          "normalized": "MIDI-\u003eValue",
          "package": "hosc-json",
          "signature": "MIDI-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hosc-json/docs/Sound-OSC-Type-JSON.html#v:encode_midi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode \u003ccode\u003e\u003ca\u003eNumber\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.OSC.Type.JSON",
          "name": "encode_number",
          "package": "hosc-json",
          "signature": "Number -\u003e Value",
          "source": "src/Sound-OSC-Type-JSON.html#encode_number",
          "type": "function"
        },
        "index": {
          "description": "Encode Number",
          "hierarchy": "Sound OSC Type JSON",
          "module": "Sound.OSC.Type.JSON",
          "name": "encode_number",
          "normalized": "Number-\u003eValue",
          "package": "hosc-json",
          "signature": "Number-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hosc-json/docs/Sound-OSC-Type-JSON.html#v:encode_number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ePacket\u003c/a\u003e\u003c/code\u003e encoder.\n\u003c/p\u003e",
          "module": "Sound.OSC.Type.JSON",
          "name": "encode_packet",
          "package": "hosc-json",
          "signature": "Packet -\u003e Value",
          "source": "src/Sound-OSC-Type-JSON.html#encode_packet",
          "type": "function"
        },
        "index": {
          "description": "Packet encoder",
          "hierarchy": "Sound OSC Type JSON",
          "module": "Sound.OSC.Type.JSON",
          "name": "encode_packet",
          "normalized": "Packet-\u003eValue",
          "package": "hosc-json",
          "signature": "Packet-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hosc-json/docs/Sound-OSC-Type-JSON.html#v:encode_packet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode \u003ccode\u003e\u003ca\u003eTimeStamp\u003c/a\u003e\u003c/code\u003e data (\u003ccode\u003e\u003ca\u003eTime\u003c/a\u003e\u003c/code\u003e), ie. the \u003ccode\u003ehosc\u003c/code\u003e real-valued\n \u003ccode\u003eNRT\u003c/code\u003e representation.\n\u003c/p\u003e",
          "module": "Sound.OSC.Type.JSON",
          "name": "encode_timestamp",
          "package": "hosc-json",
          "signature": "Time -\u003e Value",
          "source": "src/Sound-OSC-Type-JSON.html#encode_timestamp",
          "type": "function"
        },
        "index": {
          "description": "Encode TimeStamp data Time ie the hosc real-valued NRT representation",
          "hierarchy": "Sound OSC Type JSON",
          "module": "Sound.OSC.Type.JSON",
          "name": "encode_timestamp",
          "normalized": "Time-\u003eValue",
          "package": "hosc-json",
          "signature": "Time-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hosc-json/docs/Sound-OSC-Type-JSON.html#v:encode_timestamp"
      }
    }
  ]
]