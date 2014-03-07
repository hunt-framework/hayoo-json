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
        "word": "sandi"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplemention of base 16 encoding (hex encoding) as specified in RFC 4648\n (\u003ca\u003ehttp://tools.ietf.org/html/rfc4648\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Binary.Base16",
          "name": "Base16",
          "package": "sandi",
          "source": "src/Codec-Binary-Base16.html",
          "type": "module"
        },
        "index": {
          "description": "Implemention of base encoding hex encoding as specified in RFC http tools.ietf.org html rfc4648",
          "hierarchy": "Codec Binary Base16",
          "module": "Codec.Binary.Base16",
          "name": "Base16",
          "package": "sandi",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base16.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoding function.\n\u003c/p\u003e\u003cp\u003eThe returned value on success is \u003ccode\u003eRight (\u003cdecoded part\u003e, \u003cundecoded\n part\u003e)\u003c/code\u003e (the undecoded part is either a empty or a single byte), and on\n failure it's \u003ccode\u003eLeft (\u003cdecoded part\u003e, \u003cundecodable part\u003e)\u003c/code\u003e.  Space equal to\n the length of the input string is allocated, which is more than enough to\n hold the decoded data.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb16_dec $ Data.ByteString.Char8.pack \"00\"\n\u003c/code\u003e\u003c/strong\u003eRight (\"\\NUL\",\"\")\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb16_dec $ Data.ByteString.Char8.pack \"666F6F626172\"\n\u003c/code\u003e\u003c/strong\u003eRight (\"foobar\",\"\")\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb16_dec $ Data.ByteString.Char8.pack \"666F6F62617\"\n\u003c/code\u003e\u003c/strong\u003eRight (\"fooba\",\"7\")\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb16_dec $ Data.ByteString.Char8.pack \"666F6F62617g\"\n\u003c/code\u003e\u003c/strong\u003eLeft (\"fooba\",\"g\")\n\u003c/pre\u003e",
          "module": "Codec.Binary.Base16",
          "name": "b16_dec",
          "package": "sandi",
          "signature": "ByteString -\u003e Either (ByteString, ByteString) (ByteString, ByteString)",
          "source": "src/Codec-Binary-Base16.html#b16_dec",
          "type": "function"
        },
        "index": {
          "description": "Decoding function The returned value on success is Right decoded part undecoded part the undecoded part is either empty or single byte and on failure it Left decoded part undecodable part Space equal to the length of the input string is allocated which is more than enough to hold the decoded data b16 dec Data.ByteString.Char8.pack Right NUL b16 dec Data.ByteString.Char8.pack F6F626172 Right foobar b16 dec Data.ByteString.Char8.pack F6F62617 Right fooba b16 dec Data.ByteString.Char8.pack F6F62617g Left fooba",
          "hierarchy": "Codec Binary Base16",
          "module": "Codec.Binary.Base16",
          "name": "b16_dec",
          "normalized": "ByteString-\u003eEither(ByteString,ByteString)(ByteString,ByteString)",
          "package": "sandi",
          "signature": "ByteString-\u003eEither(ByteString,ByteString)(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base16.html#v:b16_dec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding function.\n\u003c/p\u003e\u003cp\u003eThis function, unlike some other encoding functions in the library, simply\n cannot fail.  Double the length of the input string is allocated for the\n encoded data, which is guaranteed to hold the result.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb16_enc $ Data.ByteString.pack [0x00]\n\u003c/code\u003e\u003c/strong\u003e\"00\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb16_enc $ Data.ByteString.Char8.pack \"foobar\"\n\u003c/code\u003e\u003c/strong\u003e\"666F6F626172\"\n\u003c/pre\u003e",
          "module": "Codec.Binary.Base16",
          "name": "b16_enc",
          "package": "sandi",
          "signature": "ByteString-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Encoding function This function unlike some other encoding functions in the library simply cannot fail Double the length of the input string is allocated for the encoded data which is guaranteed to hold the result b16 enc Data.ByteString.pack x00 b16 enc Data.ByteString.Char8.pack foobar F6F626172",
          "hierarchy": "Codec Binary Base16",
          "module": "Codec.Binary.Base16",
          "name": "b16_enc",
          "normalized": "ByteString-\u003eByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base16.html#v:b16_enc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA synonum for \u003ccode\u003e\u003ca\u003eb16_dec\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Binary.Base16",
          "name": "decode",
          "package": "sandi",
          "signature": "ByteString -\u003e Either (ByteString, ByteString) ByteString",
          "source": "src/Codec-Binary-Base16.html#decode",
          "type": "function"
        },
        "index": {
          "description": "synonum for b16 dec",
          "hierarchy": "Codec Binary Base16",
          "module": "Codec.Binary.Base16",
          "name": "decode",
          "normalized": "ByteString-\u003eEither(ByteString,ByteString)ByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eEither(ByteString,ByteString)ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base16.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA synonym for \u003ccode\u003e\u003ca\u003eb16_enc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Binary.Base16",
          "name": "encode",
          "package": "sandi",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Codec-Binary-Base16.html#encode",
          "type": "function"
        },
        "index": {
          "description": "synonym for b16 enc",
          "hierarchy": "Codec Binary Base16",
          "module": "Codec.Binary.Base16",
          "name": "encode",
          "normalized": "ByteString-\u003eByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base16.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplemented as specified in RFC 4648 (\u003ca\u003ehttp://tools.ietf.org/html/rfc4648\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eBase32 encoding works by expanding blocks of 5 bytes of data into blocks of\n 8 bytes of data.  Finally it also includes a well defined ending of the\n encoded data to make sure the size of the final block of encoded data is 8\n bytes too.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Binary.Base32",
          "name": "Base32",
          "package": "sandi",
          "source": "src/Codec-Binary-Base32.html",
          "type": "module"
        },
        "index": {
          "description": "Implemented as specified in RFC http tools.ietf.org html rfc4648 Base32 encoding works by expanding blocks of bytes of data into blocks of bytes of data Finally it also includes well defined ending of the encoded data to make sure the size of the final block of encoded data is bytes too",
          "hierarchy": "Codec Binary Base32",
          "module": "Codec.Binary.Base32",
          "name": "Base32",
          "package": "sandi",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base32.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoding function for the final block.\n\u003c/p\u003e\u003cp\u003eThe final block has to have a size of 0 or 8:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb32_decode_final $ Data.ByteString.Char8.pack \"MZXW6YQ=\"\n\u003c/code\u003e\u003c/strong\u003eJust \"foob\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb32_decode_final $ Data.ByteString.Char8.pack \"\"\n\u003c/code\u003e\u003c/strong\u003eJust \"\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb32_decode_final $ Data.ByteString.Char8.pack \"MZXW6Y=\"\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cp\u003eBut it must be the encoding of a block that is less than 5 bytes:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb32_decode_final $ encode $ Data.ByteString.Char8.pack \"fooba\"\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e",
          "module": "Codec.Binary.Base32",
          "name": "b32_decode_final",
          "package": "sandi",
          "signature": "ByteString -\u003e Maybe ByteString",
          "source": "src/Codec-Binary-Base32.html#b32_decode_final",
          "type": "function"
        },
        "index": {
          "description": "Decoding function for the final block The final block has to have size of or b32 decode final Data.ByteString.Char8.pack MZXW6YQ Just foob b32 decode final Data.ByteString.Char8.pack Just b32 decode final Data.ByteString.Char8.pack MZXW6Y Nothing But it must be the encoding of block that is less than bytes b32 decode final encode Data.ByteString.Char8.pack fooba Nothing",
          "hierarchy": "Codec Binary Base32",
          "module": "Codec.Binary.Base32",
          "name": "b32_decode_final",
          "normalized": "ByteString-\u003eMaybe ByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base32.html#v:b32_decode_final"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoding function.\n\u003c/p\u003e\u003cp\u003eDecode as large a portion of the input as possible.  Enough data is\n allocated for the output to ensure that the remainder is less than 8 bytes\n in size.  Success result in a \u003ccode\u003eRight\u003c/code\u003e value:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb32_decode_part $ Data.ByteString.Char8.pack \"MZXW6YTB\"\n\u003c/code\u003e\u003c/strong\u003eRight (\"fooba\",\"\")\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb32_decode_part $ Data.ByteString.Char8.pack \"MZXW6YTBOI======\"\n\u003c/code\u003e\u003c/strong\u003eRight (\"fooba\",\"OI======\")\n\u003c/pre\u003e\u003cp\u003eFailures occur on bad input and result in a \u003ccode\u003eLeft\u003c/code\u003e value:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb32_decode_part $ Data.ByteString.Char8.pack \"M=XW6YTB\"\n\u003c/code\u003e\u003c/strong\u003eLeft (\"\",\"M=XW6YTB\")\n\u003c/pre\u003e",
          "module": "Codec.Binary.Base32",
          "name": "b32_decode_part",
          "package": "sandi",
          "signature": "ByteString -\u003e Either (ByteString, ByteString) (ByteString, ByteString)",
          "source": "src/Codec-Binary-Base32.html#b32_decode_part",
          "type": "function"
        },
        "index": {
          "description": "Decoding function Decode as large portion of the input as possible Enough data is allocated for the output to ensure that the remainder is less than bytes in size Success result in Right value b32 decode part Data.ByteString.Char8.pack MZXW6YTB Right fooba b32 decode part Data.ByteString.Char8.pack MZXW6YTBOI Right fooba OI Failures occur on bad input and result in Left value b32 decode part Data.ByteString.Char8.pack XW6YTB Left XW6YTB",
          "hierarchy": "Codec Binary Base32",
          "module": "Codec.Binary.Base32",
          "name": "b32_decode_part",
          "normalized": "ByteString-\u003eEither(ByteString,ByteString)(ByteString,ByteString)",
          "package": "sandi",
          "signature": "ByteString-\u003eEither(ByteString,ByteString)(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base32.html#v:b32_decode_part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding function for the final block.\n\u003c/p\u003e\u003cp\u003eThe final block has to have a size less than 5.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb32_encode_final $ Data.ByteString.Char8.pack \"r\"\n\u003c/code\u003e\u003c/strong\u003eJust \"OI======\"\n\u003c/pre\u003e\u003cp\u003eTrying to pass in too large a block result in failure:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb32_encode_final $ Data.ByteString.Char8.pack \"fooba\"\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e",
          "module": "Codec.Binary.Base32",
          "name": "b32_encode_final",
          "package": "sandi",
          "signature": "ByteString -\u003e Maybe ByteString",
          "source": "src/Codec-Binary-Base32.html#b32_encode_final",
          "type": "function"
        },
        "index": {
          "description": "Encoding function for the final block The final block has to have size less than b32 encode final Data.ByteString.Char8.pack Just OI Trying to pass in too large block result in failure b32 encode final Data.ByteString.Char8.pack fooba Nothing",
          "hierarchy": "Codec Binary Base32",
          "module": "Codec.Binary.Base32",
          "name": "b32_encode_final",
          "normalized": "ByteString-\u003eMaybe ByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base32.html#v:b32_encode_final"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding function.\n\u003c/p\u003e\u003cp\u003eThis function encodes as large a portion of the input as possible and\n returns the encoded part together with the remaining part.  Enough space is\n allocated for the encoding to make sure that the remaining part is less than\n 5 bytes long, which means it can be passed to \u003ccode\u003e\u003ca\u003eb32_encode_final\u003c/a\u003e\u003c/code\u003e as is.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb32_encode_part $ Data.ByteString.Char8.pack \"fooba\"\n\u003c/code\u003e\u003c/strong\u003e(\"MZXW6YTB\",\"\")\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb32_encode_part $ Data.ByteString.Char8.pack \"foobar\"\n\u003c/code\u003e\u003c/strong\u003e(\"MZXW6YTB\",\"r\")\n\u003c/pre\u003e",
          "module": "Codec.Binary.Base32",
          "name": "b32_encode_part",
          "package": "sandi",
          "signature": "ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Codec-Binary-Base32.html#b32_encode_part",
          "type": "function"
        },
        "index": {
          "description": "Encoding function This function encodes as large portion of the input as possible and returns the encoded part together with the remaining part Enough space is allocated for the encoding to make sure that the remaining part is less than bytes long which means it can be passed to b32 encode final as is b32 encode part Data.ByteString.Char8.pack fooba MZXW6YTB b32 encode part Data.ByteString.Char8.pack foobar MZXW6YTB",
          "hierarchy": "Codec Binary Base32",
          "module": "Codec.Binary.Base32",
          "name": "b32_encode_part",
          "normalized": "ByteString-\u003e(ByteString,ByteString)",
          "package": "sandi",
          "signature": "ByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base32.html#v:b32_encode_part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function that combines \u003ccode\u003e\u003ca\u003eb32_decode_part\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eb32_decode_final\u003c/a\u003e\u003c/code\u003e to decode a complete string.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edecode $ Data.ByteString.Char8.pack \"MZXW6YTB\"\n\u003c/code\u003e\u003c/strong\u003eRight \"fooba\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edecode $ Data.ByteString.Char8.pack \"MZXW6YTBOI======\"\n\u003c/code\u003e\u003c/strong\u003eRight \"foobar\"\n\u003c/pre\u003e\u003cp\u003eFailures when decoding returns the decoded part and the remainder:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edecode $ Data.ByteString.Char8.pack \"MZXW6YTBOI=0====\"\n\u003c/code\u003e\u003c/strong\u003eLeft (\"fooba\",\"OI=0====\")\n\u003c/pre\u003e",
          "module": "Codec.Binary.Base32",
          "name": "decode",
          "package": "sandi",
          "signature": "ByteString -\u003e Either (ByteString, ByteString) ByteString",
          "source": "src/Codec-Binary-Base32.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Convenience function that combines b32 decode part and b32 decode final to decode complete string decode Data.ByteString.Char8.pack MZXW6YTB Right fooba decode Data.ByteString.Char8.pack MZXW6YTBOI Right foobar Failures when decoding returns the decoded part and the remainder decode Data.ByteString.Char8.pack MZXW6YTBOI Left fooba OI",
          "hierarchy": "Codec Binary Base32",
          "module": "Codec.Binary.Base32",
          "name": "decode",
          "normalized": "ByteString-\u003eEither(ByteString,ByteString)ByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eEither(ByteString,ByteString)ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base32.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function that combines \u003ccode\u003e\u003ca\u003eb32_encode_part\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eb32_encode_final\u003c/a\u003e\u003c/code\u003e to encode a complete string.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eencode $ Data.ByteString.Char8.pack \"fooba\"\n\u003c/code\u003e\u003c/strong\u003e\"MZXW6YTB\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eencode $ Data.ByteString.Char8.pack \"foobar\"\n\u003c/code\u003e\u003c/strong\u003e\"MZXW6YTBOI======\"\n\u003c/pre\u003e",
          "module": "Codec.Binary.Base32",
          "name": "encode",
          "package": "sandi",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Codec-Binary-Base32.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Convenience function that combines b32 encode part and b32 encode final to encode complete string encode Data.ByteString.Char8.pack fooba MZXW6YTB encode Data.ByteString.Char8.pack foobar MZXW6YTBOI",
          "hierarchy": "Codec Binary Base32",
          "module": "Codec.Binary.Base32",
          "name": "encode",
          "normalized": "ByteString-\u003eByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base32.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplemented as specified in RFC 4648 (\u003ca\u003ehttp://tools.ietf.org/html/rfc4648\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eThis encoding is closely related to base 32 and so is its implementation, so\n please refer to \u003ca\u003eCodec.Binary.Base32\u003c/a\u003e for further details.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Binary.Base32Hex",
          "name": "Base32Hex",
          "package": "sandi",
          "source": "src/Codec-Binary-Base32Hex.html",
          "type": "module"
        },
        "index": {
          "description": "Implemented as specified in RFC http tools.ietf.org html rfc4648 This encoding is closely related to base and so is its implementation so please refer to Codec.Binary.Base32 for further details",
          "hierarchy": "Codec Binary Base32Hex",
          "module": "Codec.Binary.Base32Hex",
          "name": "Base32Hex",
          "package": "sandi",
          "partial": "Base Hex",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base32Hex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoding function for the final block.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eb32_decode_final\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb32h_decode_final $ Data.ByteString.Char8.pack \"CPNMUOG=\"\n\u003c/code\u003e\u003c/strong\u003eJust \"foob\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb32h_decode_final $ Data.ByteString.Char8.pack \"\"\n\u003c/code\u003e\u003c/strong\u003eJust \"\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb32h_decode_final $ Data.ByteString.Char8.pack \"CPNMUO=\"\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb32h_decode_final $ encode $ Data.ByteString.Char8.pack \"fooba\"\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e",
          "module": "Codec.Binary.Base32Hex",
          "name": "b32h_decode_final",
          "package": "sandi",
          "signature": "ByteString -\u003e Maybe ByteString",
          "source": "src/Codec-Binary-Base32Hex.html#b32h_decode_final",
          "type": "function"
        },
        "index": {
          "description": "Decoding function for the final block See b32 decode final b32h decode final Data.ByteString.Char8.pack CPNMUOG Just foob b32h decode final Data.ByteString.Char8.pack Just b32h decode final Data.ByteString.Char8.pack CPNMUO Nothing b32h decode final encode Data.ByteString.Char8.pack fooba Nothing",
          "hierarchy": "Codec Binary Base32Hex",
          "module": "Codec.Binary.Base32Hex",
          "name": "b32h_decode_final",
          "normalized": "ByteString-\u003eMaybe ByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base32Hex.html#v:b32h_decode_final"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoding function.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eb32_decode_part\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb32h_decode_part $ Data.ByteString.Char8.pack \"CPNMUOJ1\"\n\u003c/code\u003e\u003c/strong\u003eRight (\"fooba\",\"\")\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb32h_decode_part $ Data.ByteString.Char8.pack \"CPNMUOJ1E8======\"\n\u003c/code\u003e\u003c/strong\u003eRight (\"fooba\",\"E8======\")\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb32h_decode_part $ Data.ByteString.Char8.pack \"C=NMUOJ1\"\n\u003c/code\u003e\u003c/strong\u003eLeft (\"\",\"C=NMUOJ1\")\n\u003c/pre\u003e",
          "module": "Codec.Binary.Base32Hex",
          "name": "b32h_decode_part",
          "package": "sandi",
          "signature": "ByteString -\u003e Either (ByteString, ByteString) (ByteString, ByteString)",
          "source": "src/Codec-Binary-Base32Hex.html#b32h_decode_part",
          "type": "function"
        },
        "index": {
          "description": "Decoding function See b32 decode part b32h decode part Data.ByteString.Char8.pack CPNMUOJ1 Right fooba b32h decode part Data.ByteString.Char8.pack CPNMUOJ1E8 Right fooba E8 b32h decode part Data.ByteString.Char8.pack NMUOJ1 Left NMUOJ1",
          "hierarchy": "Codec Binary Base32Hex",
          "module": "Codec.Binary.Base32Hex",
          "name": "b32h_decode_part",
          "normalized": "ByteString-\u003eEither(ByteString,ByteString)(ByteString,ByteString)",
          "package": "sandi",
          "signature": "ByteString-\u003eEither(ByteString,ByteString)(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base32Hex.html#v:b32h_decode_part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding function for the final block.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eb32_encode_final\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb32h_encode_final $ Data.ByteString.Char8.pack \"r\"\n\u003c/code\u003e\u003c/strong\u003eJust \"E8======\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb32h_encode_final $ Data.ByteString.Char8.pack \"fooba\"\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e",
          "module": "Codec.Binary.Base32Hex",
          "name": "b32h_encode_final",
          "package": "sandi",
          "signature": "ByteString -\u003e Maybe ByteString",
          "source": "src/Codec-Binary-Base32Hex.html#b32h_encode_final",
          "type": "function"
        },
        "index": {
          "description": "Encoding function for the final block See b32 encode final b32h encode final Data.ByteString.Char8.pack Just E8 b32h encode final Data.ByteString.Char8.pack fooba Nothing",
          "hierarchy": "Codec Binary Base32Hex",
          "module": "Codec.Binary.Base32Hex",
          "name": "b32h_encode_final",
          "normalized": "ByteString-\u003eMaybe ByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base32Hex.html#v:b32h_encode_final"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding function.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eb32_encode_part\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb32h_encode_part $ Data.ByteString.Char8.pack \"fooba\"\n\u003c/code\u003e\u003c/strong\u003e(\"CPNMUOJ1\",\"\")\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb32h_encode_part $ Data.ByteString.Char8.pack \"foobar\"\n\u003c/code\u003e\u003c/strong\u003e(\"CPNMUOJ1\",\"r\")\n\u003c/pre\u003e",
          "module": "Codec.Binary.Base32Hex",
          "name": "b32h_encode_part",
          "package": "sandi",
          "signature": "ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Codec-Binary-Base32Hex.html#b32h_encode_part",
          "type": "function"
        },
        "index": {
          "description": "Encoding function See b32 encode part b32h encode part Data.ByteString.Char8.pack fooba CPNMUOJ1 b32h encode part Data.ByteString.Char8.pack foobar CPNMUOJ1",
          "hierarchy": "Codec Binary Base32Hex",
          "module": "Codec.Binary.Base32Hex",
          "name": "b32h_encode_part",
          "normalized": "ByteString-\u003e(ByteString,ByteString)",
          "package": "sandi",
          "signature": "ByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base32Hex.html#v:b32h_encode_part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function that combines \u003ccode\u003e\u003ca\u003eb32h_decode_part\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eb32h_decode_final\u003c/a\u003e\u003c/code\u003e to decode a complete string.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edecode $ Data.ByteString.Char8.pack \"CPNMUOJ1\"\n\u003c/code\u003e\u003c/strong\u003eRight \"fooba\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edecode $ Data.ByteString.Char8.pack \"CPNMUOJ1E8======\"\n\u003c/code\u003e\u003c/strong\u003eRight \"foobar\"\n\u003c/pre\u003e\u003cp\u003eFailures when decoding returns the decoded part and the remainder:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edecode $ Data.ByteString.Char8.pack \"CPNMUOJ1=8======\"\n\u003c/code\u003e\u003c/strong\u003eLeft (\"fooba\",\"=8======\")\n\u003c/pre\u003e",
          "module": "Codec.Binary.Base32Hex",
          "name": "decode",
          "package": "sandi",
          "signature": "ByteString -\u003e Either (ByteString, ByteString) ByteString",
          "source": "src/Codec-Binary-Base32Hex.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Convenience function that combines b32h decode part and b32h decode final to decode complete string decode Data.ByteString.Char8.pack CPNMUOJ1 Right fooba decode Data.ByteString.Char8.pack CPNMUOJ1E8 Right foobar Failures when decoding returns the decoded part and the remainder decode Data.ByteString.Char8.pack CPNMUOJ1 Left fooba",
          "hierarchy": "Codec Binary Base32Hex",
          "module": "Codec.Binary.Base32Hex",
          "name": "decode",
          "normalized": "ByteString-\u003eEither(ByteString,ByteString)ByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eEither(ByteString,ByteString)ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base32Hex.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function that combines \u003ccode\u003e\u003ca\u003eb32h_encode_part\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eb32h_encode_final\u003c/a\u003e\u003c/code\u003e to encode a complete string.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eencode $ Data.ByteString.Char8.pack \"fooba\"\n\u003c/code\u003e\u003c/strong\u003e\"CPNMUOJ1\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eencode $ Data.ByteString.Char8.pack \"foobar\"\n\u003c/code\u003e\u003c/strong\u003e\"CPNMUOJ1E8======\"\n\u003c/pre\u003e",
          "module": "Codec.Binary.Base32Hex",
          "name": "encode",
          "package": "sandi",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Codec-Binary-Base32Hex.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Convenience function that combines b32h encode part and b32h encode final to encode complete string encode Data.ByteString.Char8.pack fooba CPNMUOJ1 encode Data.ByteString.Char8.pack foobar CPNMUOJ1E8",
          "hierarchy": "Codec Binary Base32Hex",
          "module": "Codec.Binary.Base32Hex",
          "name": "encode",
          "normalized": "ByteString-\u003eByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base32Hex.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplemented as specified in RFC 4648 (\u003ca\u003ehttp://tools.ietf.org/html/rfc4648\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eBase64 encoding works by expanding blocks of 3 bytes of data into blocks of\n 4 bytes of data.  Finally it also includes a well defined ending of the\n encoded data to make sure the size of the final block of encoded data is 4\n bytes too.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Binary.Base64",
          "name": "Base64",
          "package": "sandi",
          "source": "src/Codec-Binary-Base64.html",
          "type": "module"
        },
        "index": {
          "description": "Implemented as specified in RFC http tools.ietf.org html rfc4648 Base64 encoding works by expanding blocks of bytes of data into blocks of bytes of data Finally it also includes well defined ending of the encoded data to make sure the size of the final block of encoded data is bytes too",
          "hierarchy": "Codec Binary Base64",
          "module": "Codec.Binary.Base64",
          "name": "Base64",
          "package": "sandi",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base64.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoding function for the final block.\n\u003c/p\u003e\u003cp\u003eThe final block has to have a size of 0 or 4:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb64_decode_final $ Data.ByteString.Char8.pack \"Zm8=\"\n\u003c/code\u003e\u003c/strong\u003eJust \"fo\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb64_decode_final $ Data.ByteString.Char8.pack \"\"\n\u003c/code\u003e\u003c/strong\u003eJust \"\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb64_decode_final $ Data.ByteString.Char8.pack \"Zm=\"\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cp\u003eBut it must be the encoding of a block that is less than 3 bytes:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb64_decode_final $ encode $ Data.ByteString.Char8.pack \"foo\"\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e",
          "module": "Codec.Binary.Base64",
          "name": "b64_decode_final",
          "package": "sandi",
          "signature": "ByteString -\u003e Maybe ByteString",
          "source": "src/Codec-Binary-Base64.html#b64_decode_final",
          "type": "function"
        },
        "index": {
          "description": "Decoding function for the final block The final block has to have size of or b64 decode final Data.ByteString.Char8.pack Zm8 Just fo b64 decode final Data.ByteString.Char8.pack Just b64 decode final Data.ByteString.Char8.pack Zm Nothing But it must be the encoding of block that is less than bytes b64 decode final encode Data.ByteString.Char8.pack foo Nothing",
          "hierarchy": "Codec Binary Base64",
          "module": "Codec.Binary.Base64",
          "name": "b64_decode_final",
          "normalized": "ByteString-\u003eMaybe ByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base64.html#v:b64_decode_final"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoding function.\n\u003c/p\u003e\u003cp\u003eDecode as large a portion of the input as possible.  Enough data is\n allocated for the output to ensure that the remainder is less than 4 bytes\n in size.  Success result in a \u003ccode\u003eRight\u003c/code\u003e value:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb64_decode_part $ Data.ByteString.Char8.pack \"Zm9v\"\n\u003c/code\u003e\u003c/strong\u003eRight (\"foo\",\"\")\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb64_decode_part $ Data.ByteString.Char8.pack \"Zm9vYmE=\"\n\u003c/code\u003e\u003c/strong\u003eRight (\"foo\",\"YmE=\")\n\u003c/pre\u003e\u003cp\u003eFailures occur on bad input and result in a \u003ccode\u003eLeft\u003c/code\u003e value:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb64_decode_part $ Data.ByteString.Char8.pack \"Z=9v\"\n\u003c/code\u003e\u003c/strong\u003eLeft (\"\",\"Z=9v\")\n\u003c/pre\u003e",
          "module": "Codec.Binary.Base64",
          "name": "b64_decode_part",
          "package": "sandi",
          "signature": "ByteString -\u003e Either (ByteString, ByteString) (ByteString, ByteString)",
          "source": "src/Codec-Binary-Base64.html#b64_decode_part",
          "type": "function"
        },
        "index": {
          "description": "Decoding function Decode as large portion of the input as possible Enough data is allocated for the output to ensure that the remainder is less than bytes in size Success result in Right value b64 decode part Data.ByteString.Char8.pack Zm9v Right foo b64 decode part Data.ByteString.Char8.pack Zm9vYmE Right foo YmE Failures occur on bad input and result in Left value b64 decode part Data.ByteString.Char8.pack Left",
          "hierarchy": "Codec Binary Base64",
          "module": "Codec.Binary.Base64",
          "name": "b64_decode_part",
          "normalized": "ByteString-\u003eEither(ByteString,ByteString)(ByteString,ByteString)",
          "package": "sandi",
          "signature": "ByteString-\u003eEither(ByteString,ByteString)(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base64.html#v:b64_decode_part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding function for the final block.\n\u003c/p\u003e\u003cp\u003eThe final block has to have a size less than 3.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb64_encode_final $ Data.ByteString.Char8.pack \"r\"\n\u003c/code\u003e\u003c/strong\u003eJust \"cg==\"\n\u003c/pre\u003e\u003cp\u003eTrying to pass in too large a block result in failure:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb64_encode_final $ Data.ByteString.Char8.pack \"foo\"\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e",
          "module": "Codec.Binary.Base64",
          "name": "b64_encode_final",
          "package": "sandi",
          "signature": "ByteString -\u003e Maybe ByteString",
          "source": "src/Codec-Binary-Base64.html#b64_encode_final",
          "type": "function"
        },
        "index": {
          "description": "Encoding function for the final block The final block has to have size less than b64 encode final Data.ByteString.Char8.pack Just cg Trying to pass in too large block result in failure b64 encode final Data.ByteString.Char8.pack foo Nothing",
          "hierarchy": "Codec Binary Base64",
          "module": "Codec.Binary.Base64",
          "name": "b64_encode_final",
          "normalized": "ByteString-\u003eMaybe ByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base64.html#v:b64_encode_final"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding function.\n\u003c/p\u003e\u003cp\u003eThis function encodes as large a portion of the input as possible and\n returns the encoded part together with the remaining part.  Enough space is\n allocated for the encoding to make sure that the remaining part is less than\n 3 bytes long, which means it can be passed to \u003ccode\u003e\u003ca\u003eb64_encode_final\u003c/a\u003e\u003c/code\u003e as is.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb64_encode_part $ Data.ByteString.Char8.pack \"foo\"\n\u003c/code\u003e\u003c/strong\u003e(\"Zm9v\",\"\")\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb64_encode_part $ Data.ByteString.Char8.pack \"foob\"\n\u003c/code\u003e\u003c/strong\u003e(\"Zm9v\",\"b\")\n\u003c/pre\u003e",
          "module": "Codec.Binary.Base64",
          "name": "b64_encode_part",
          "package": "sandi",
          "signature": "ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Codec-Binary-Base64.html#b64_encode_part",
          "type": "function"
        },
        "index": {
          "description": "Encoding function This function encodes as large portion of the input as possible and returns the encoded part together with the remaining part Enough space is allocated for the encoding to make sure that the remaining part is less than bytes long which means it can be passed to b64 encode final as is b64 encode part Data.ByteString.Char8.pack foo Zm9v b64 encode part Data.ByteString.Char8.pack foob Zm9v",
          "hierarchy": "Codec Binary Base64",
          "module": "Codec.Binary.Base64",
          "name": "b64_encode_part",
          "normalized": "ByteString-\u003e(ByteString,ByteString)",
          "package": "sandi",
          "signature": "ByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base64.html#v:b64_encode_part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function that combines \u003ccode\u003e\u003ca\u003eb64_decode_part\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eb64_decode_final\u003c/a\u003e\u003c/code\u003e to decode a complete string.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edecode $ Data.ByteString.Char8.pack \"Zm9v\"\n\u003c/code\u003e\u003c/strong\u003eRight \"foo\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edecode $ Data.ByteString.Char8.pack \"Zm9vYmFy\"\n\u003c/code\u003e\u003c/strong\u003eRight \"foobar\"\n\u003c/pre\u003e\u003cp\u003eFailures when decoding returns the decoded part and the remainder:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edecode $ Data.ByteString.Char8.pack \"Zm9vYm=y\"\n\u003c/code\u003e\u003c/strong\u003eLeft (\"foo\",\"Ym=y\")\n\u003c/pre\u003e",
          "module": "Codec.Binary.Base64",
          "name": "decode",
          "package": "sandi",
          "signature": "ByteString -\u003e Either (ByteString, ByteString) ByteString",
          "source": "src/Codec-Binary-Base64.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Convenience function that combines b64 decode part and b64 decode final to decode complete string decode Data.ByteString.Char8.pack Zm9v Right foo decode Data.ByteString.Char8.pack Zm9vYmFy Right foobar Failures when decoding returns the decoded part and the remainder decode Data.ByteString.Char8.pack Zm9vYm Left foo Ym",
          "hierarchy": "Codec Binary Base64",
          "module": "Codec.Binary.Base64",
          "name": "decode",
          "normalized": "ByteString-\u003eEither(ByteString,ByteString)ByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eEither(ByteString,ByteString)ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base64.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function that combines \u003ccode\u003e\u003ca\u003eb64_encode_part\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eb64_encode_final\u003c/a\u003e\u003c/code\u003e to encode a complete string.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eencode $ Data.ByteString.Char8.pack \"foo\"\n\u003c/code\u003e\u003c/strong\u003e\"Zm9v\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eencode $ Data.ByteString.Char8.pack \"foobar\"\n\u003c/code\u003e\u003c/strong\u003e\"Zm9vYmFy\"\n\u003c/pre\u003e",
          "module": "Codec.Binary.Base64",
          "name": "encode",
          "package": "sandi",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Codec-Binary-Base64.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Convenience function that combines b64 encode part and b64 encode final to encode complete string encode Data.ByteString.Char8.pack foo Zm9v encode Data.ByteString.Char8.pack foobar Zm9vYmFy",
          "hierarchy": "Codec Binary Base64",
          "module": "Codec.Binary.Base64",
          "name": "encode",
          "normalized": "ByteString-\u003eByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base64.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplemented as specified in RFC 4648 (\u003ca\u003ehttp://tools.ietf.org/html/rfc4648\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eThe difference compared to vanilla Base64 encoding is just in two\n characters.  In Base64 the characters \u003ccode\u003e/+\u003c/code\u003e are used, and in Base64Url they\n are replaced by \u003ccode\u003e_-\u003c/code\u003e respectively.\n\u003c/p\u003e\u003cp\u003ePlease refer to \u003ca\u003eCodec.Binary.Base64\u003c/a\u003e for the details of all functions in\n this module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Binary.Base64Url",
          "name": "Base64Url",
          "package": "sandi",
          "source": "src/Codec-Binary-Base64Url.html",
          "type": "module"
        },
        "index": {
          "description": "Implemented as specified in RFC http tools.ietf.org html rfc4648 The difference compared to vanilla Base64 encoding is just in two characters In Base64 the characters are used and in Base64Url they are replaced by respectively Please refer to Codec.Binary.Base64 for the details of all functions in this module",
          "hierarchy": "Codec Binary Base64Url",
          "module": "Codec.Binary.Base64Url",
          "name": "Base64Url",
          "package": "sandi",
          "partial": "Base Url",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base64Url.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Binary.Base64Url",
          "name": "b64u_decode_final",
          "package": "sandi",
          "signature": "ByteString -\u003e Maybe ByteString",
          "source": "src/Codec-Binary-Base64Url.html#b64u_decode_final",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Binary Base64Url",
          "module": "Codec.Binary.Base64Url",
          "name": "b64u_decode_final",
          "normalized": "ByteString-\u003eMaybe ByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base64Url.html#v:b64u_decode_final"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Binary.Base64Url",
          "name": "b64u_decode_part",
          "package": "sandi",
          "signature": "ByteString -\u003e Either (ByteString, ByteString) (ByteString, ByteString)",
          "source": "src/Codec-Binary-Base64Url.html#b64u_decode_part",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Binary Base64Url",
          "module": "Codec.Binary.Base64Url",
          "name": "b64u_decode_part",
          "normalized": "ByteString-\u003eEither(ByteString,ByteString)(ByteString,ByteString)",
          "package": "sandi",
          "signature": "ByteString-\u003eEither(ByteString,ByteString)(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base64Url.html#v:b64u_decode_part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Binary.Base64Url",
          "name": "b64u_encode_final",
          "package": "sandi",
          "signature": "ByteString -\u003e Maybe ByteString",
          "source": "src/Codec-Binary-Base64Url.html#b64u_encode_final",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Binary Base64Url",
          "module": "Codec.Binary.Base64Url",
          "name": "b64u_encode_final",
          "normalized": "ByteString-\u003eMaybe ByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base64Url.html#v:b64u_encode_final"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Binary.Base64Url",
          "name": "b64u_encode_part",
          "package": "sandi",
          "signature": "ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Codec-Binary-Base64Url.html#b64u_encode_part",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Binary Base64Url",
          "module": "Codec.Binary.Base64Url",
          "name": "b64u_encode_part",
          "normalized": "ByteString-\u003e(ByteString,ByteString)",
          "package": "sandi",
          "signature": "ByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base64Url.html#v:b64u_encode_part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Binary.Base64Url",
          "name": "decode",
          "package": "sandi",
          "signature": "ByteString -\u003e Either (ByteString, ByteString) ByteString",
          "source": "src/Codec-Binary-Base64Url.html#decode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Binary Base64Url",
          "module": "Codec.Binary.Base64Url",
          "name": "decode",
          "normalized": "ByteString-\u003eEither(ByteString,ByteString)ByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eEither(ByteString,ByteString)ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base64Url.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Binary.Base64Url",
          "name": "encode",
          "package": "sandi",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Codec-Binary-Base64Url.html#encode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Binary Base64Url",
          "module": "Codec.Binary.Base64Url",
          "name": "encode",
          "normalized": "ByteString-\u003eByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base64Url.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplemented as described at \u003ca\u003ehttp://en.wikipedia.org/wiki/Ascii85\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Binary.Base85",
          "name": "Base85",
          "package": "sandi",
          "source": "src/Codec-Binary-Base85.html",
          "type": "module"
        },
        "index": {
          "description": "Implemented as described at http en.wikipedia.org wiki Ascii85",
          "hierarchy": "Codec Binary Base85",
          "module": "Codec.Binary.Base85",
          "name": "Base85",
          "package": "sandi",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base85.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoding function for the final block.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb85_decode_final $ Data.ByteString.Char8.pack \"@\u003c)\"\n\u003c/code\u003e\u003c/strong\u003eJust \"ar\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb85_decode_final $ Data.ByteString.Char8.pack \"\"\n\u003c/code\u003e\u003c/strong\u003eJust \"\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb85_decode_final $ Data.ByteString.Char8.pack \"AoDTs\"\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e",
          "module": "Codec.Binary.Base85",
          "name": "b85_decode_final",
          "package": "sandi",
          "signature": "ByteString -\u003e Maybe ByteString",
          "source": "src/Codec-Binary-Base85.html#b85_decode_final",
          "type": "function"
        },
        "index": {
          "description": "Decoding function for the final block b85 decode final Data.ByteString.Char8.pack Just ar b85 decode final Data.ByteString.Char8.pack Just b85 decode final Data.ByteString.Char8.pack AoDTs Nothing",
          "hierarchy": "Codec Binary Base85",
          "module": "Codec.Binary.Base85",
          "name": "b85_decode_final",
          "normalized": "ByteString-\u003eMaybe ByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base85.html#v:b85_decode_final"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoding function.\n\u003c/p\u003e\u003cp\u003eDecode as large a portion of the input as possible.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb85_decode_part $ Data.ByteString.Char8.pack \"AoDTs\"\n\u003c/code\u003e\u003c/strong\u003eRight (\"foob\",\"\")\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb85_decode_part $ Data.ByteString.Char8.pack \"AoDTs@\u003c)\"\n\u003c/code\u003e\u003c/strong\u003eRight (\"foob\",\"@\u003c)\")\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb85_decode_part $ Data.ByteString.Char8.pack \"@\u003c)\"\n\u003c/code\u003e\u003c/strong\u003eRight (\"\",\"@\u003c)\")\n\u003c/pre\u003e\u003cp\u003eAt least 512 bytes of data is allocated for the output, but because of the\n special handling of all-zero and all-space groups it is possible that the\n space won't be enough.  (To be sure to always fit the output one would have\n to allocate 5 times the length of the input.  It seemed a good trade-off to\n sometimes have to call the function more than once instead.)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eeither snd snd $ b85_decode_part $ Data.ByteString.Char8.pack $ Prelude.take 129 $ repeat 'y'\n\u003c/code\u003e\u003c/strong\u003e\"y\"\n\u003c/pre\u003e",
          "module": "Codec.Binary.Base85",
          "name": "b85_decode_part",
          "package": "sandi",
          "signature": "ByteString -\u003e Either (ByteString, ByteString) (ByteString, ByteString)",
          "source": "src/Codec-Binary-Base85.html#b85_decode_part",
          "type": "function"
        },
        "index": {
          "description": "Decoding function Decode as large portion of the input as possible b85 decode part Data.ByteString.Char8.pack AoDTs Right foob b85 decode part Data.ByteString.Char8.pack AoDTs Right foob b85 decode part Data.ByteString.Char8.pack Right At least bytes of data is allocated for the output but because of the special handling of all-zero and all-space groups it is possible that the space won be enough To be sure to always fit the output one would have to allocate times the length of the input It seemed good trade-off to sometimes have to call the function more than once instead either snd snd b85 decode part Data.ByteString.Char8.pack Prelude.take repeat",
          "hierarchy": "Codec Binary Base85",
          "module": "Codec.Binary.Base85",
          "name": "b85_decode_part",
          "normalized": "ByteString-\u003eEither(ByteString,ByteString)(ByteString,ByteString)",
          "package": "sandi",
          "signature": "ByteString-\u003eEither(ByteString,ByteString)(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base85.html#v:b85_decode_part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding function for the final block.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb85_encode_final $ Data.ByteString.Char8.pack \"ar\"\n\u003c/code\u003e\u003c/strong\u003eJust \"@\u003c)\"\n\u003c/pre\u003e",
          "module": "Codec.Binary.Base85",
          "name": "b85_encode_final",
          "package": "sandi",
          "signature": "ByteString -\u003e Maybe ByteString",
          "source": "src/Codec-Binary-Base85.html#b85_encode_final",
          "type": "function"
        },
        "index": {
          "description": "Encoding function for the final block b85 encode final Data.ByteString.Char8.pack ar Just",
          "hierarchy": "Codec Binary Base85",
          "module": "Codec.Binary.Base85",
          "name": "b85_encode_final",
          "normalized": "ByteString-\u003eMaybe ByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base85.html#v:b85_encode_final"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding function.\n\u003c/p\u003e\u003cp\u003eEncodes as large a part as possible of the indata.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb85_encode_part $ Data.ByteString.Char8.pack \"foobar\"\n\u003c/code\u003e\u003c/strong\u003e(\"AoDTs\",\"ar\")\n\u003c/pre\u003e\u003cp\u003eIt supports special handling of both all-zero groups and all-space groups.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb85_encode_part $ Data.ByteString.Char8.pack \"    \"\n\u003c/code\u003e\u003c/strong\u003e(\"y\", \"\")\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eb85_encode_part $ Data.ByteString.Char8.pack \"\\0\\0\\0\\0\"\n\u003c/code\u003e\u003c/strong\u003e(\"z\", \"\")\n\u003c/pre\u003e",
          "module": "Codec.Binary.Base85",
          "name": "b85_encode_part",
          "package": "sandi",
          "signature": "ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Codec-Binary-Base85.html#b85_encode_part",
          "type": "function"
        },
        "index": {
          "description": "Encoding function Encodes as large part as possible of the indata b85 encode part Data.ByteString.Char8.pack foobar AoDTs ar It supports special handling of both all-zero groups and all-space groups b85 encode part Data.ByteString.Char8.pack b85 encode part Data.ByteString.Char8.pack",
          "hierarchy": "Codec Binary Base85",
          "module": "Codec.Binary.Base85",
          "name": "b85_encode_part",
          "normalized": "ByteString-\u003e(ByteString,ByteString)",
          "package": "sandi",
          "signature": "ByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base85.html#v:b85_encode_part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function that combines \u003ccode\u003e\u003ca\u003eb85_decode_part\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eb85_decode_final\u003c/a\u003e\u003c/code\u003e to decode a complete string.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edecode  $ Data.ByteString.Char8.pack \"AoDTs\"\n\u003c/code\u003e\u003c/strong\u003e\"foob\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eencode  $ Data.ByteString.Char8.pack \"AoDTs@\u003c)\"\n\u003c/code\u003e\u003c/strong\u003e\"foobar\"\n\u003c/pre\u003e",
          "module": "Codec.Binary.Base85",
          "name": "decode",
          "package": "sandi",
          "signature": "ByteString -\u003e Either (ByteString, ByteString) ByteString",
          "source": "src/Codec-Binary-Base85.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Convenience function that combines b85 decode part and b85 decode final to decode complete string decode Data.ByteString.Char8.pack AoDTs foob encode Data.ByteString.Char8.pack AoDTs foobar",
          "hierarchy": "Codec Binary Base85",
          "module": "Codec.Binary.Base85",
          "name": "decode",
          "normalized": "ByteString-\u003eEither(ByteString,ByteString)ByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eEither(ByteString,ByteString)ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base85.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function that combines \u003ccode\u003e\u003ca\u003eb85_encode_part\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eb85_encode_final\u003c/a\u003e\u003c/code\u003e to encode a complete string.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eencode  $ Data.ByteString.Char8.pack \"foob\"\n\u003c/code\u003e\u003c/strong\u003e\"AoDTs\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eencode  $ Data.ByteString.Char8.pack \"foobar\"\n\u003c/code\u003e\u003c/strong\u003e\"AoDTs@\u003c)\"\n\u003c/pre\u003e",
          "module": "Codec.Binary.Base85",
          "name": "encode",
          "package": "sandi",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Codec-Binary-Base85.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Convenience function that combines b85 encode part and b85 encode final to encode complete string encode Data.ByteString.Char8.pack foob AoDTs encode Data.ByteString.Char8.pack foobar AoDTs",
          "hierarchy": "Codec Binary Base85",
          "module": "Codec.Binary.Base85",
          "name": "encode",
          "normalized": "ByteString-\u003eByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Base85.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of Quoted-Printable based on RFC 2045\n (\u003ca\u003ehttp://tools.ietf.org/html/rfc2045\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eThis encoding encodes \u003cem\u003eeverything\u003c/em\u003e that is passed in, it will not try to\n guess the native line ending for your architecture.  In other words, if you\n are using this to encode text you need to split it into separate lines\n before encoding.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Binary.QuotedPrintable",
          "name": "QuotedPrintable",
          "package": "sandi",
          "source": "src/Codec-Binary-QuotedPrintable.html",
          "type": "module"
        },
        "index": {
          "description": "Implementation of Quoted-Printable based on RFC http tools.ietf.org html rfc2045 This encoding encodes everything that is passed in it will not try to guess the native line ending for your architecture In other words if you are using this to encode text you need to split it into separate lines before encoding",
          "hierarchy": "Codec Binary QuotedPrintable",
          "module": "Codec.Binary.QuotedPrintable",
          "name": "QuotedPrintable",
          "package": "sandi",
          "partial": "Quoted Printable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-QuotedPrintable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA synonym for \u003ccode\u003e\u003ca\u003eqp_dec\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Binary.QuotedPrintable",
          "name": "decode",
          "package": "sandi",
          "signature": "ByteString -\u003e Either (ByteString, ByteString) ByteString",
          "source": "src/Codec-Binary-QuotedPrintable.html#decode",
          "type": "function"
        },
        "index": {
          "description": "synonym for qp dec",
          "hierarchy": "Codec Binary QuotedPrintable",
          "module": "Codec.Binary.QuotedPrintable",
          "name": "decode",
          "normalized": "ByteString-\u003eEither(ByteString,ByteString)ByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eEither(ByteString,ByteString)ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-QuotedPrintable.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient function that calls \u003ccode\u003e\u003ca\u003eqp_enc\u003c/a\u003e\u003c/code\u003e repeatedly until the whole input\n data is encoded.\n\u003c/p\u003e",
          "module": "Codec.Binary.QuotedPrintable",
          "name": "encode",
          "package": "sandi",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Codec-Binary-QuotedPrintable.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Convenient function that calls qp enc repeatedly until the whole input data is encoded",
          "hierarchy": "Codec Binary QuotedPrintable",
          "module": "Codec.Binary.QuotedPrintable",
          "name": "encode",
          "normalized": "ByteString-\u003eByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-QuotedPrintable.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoding function.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eqp_dec $ Data.ByteString.Char8.pack \"foobar\"\n\u003c/code\u003e\u003c/strong\u003eRight \"foobar\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eqp_dec $ Data.ByteString.Char8.pack \"1=20+=201=20=3D=202\"\n\u003c/code\u003e\u003c/strong\u003eRight \"1 + 1 = 2\"\n\u003c/pre\u003e\u003cp\u003eThe input data is allowed to use lowercase letters in the hexadecimal\n representation of an octets value, even though the standard says that only\n uppercase letters may be used:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eqp_dec $ Data.ByteString.Char8.pack \"=3D\"\n\u003c/code\u003e\u003c/strong\u003eRight \"=\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eqp_dec $ Data.ByteString.Char8.pack \"=3d\"\n\u003c/code\u003e\u003c/strong\u003eRight \"=\"\n\u003c/pre\u003e\u003cp\u003eIt also allows the input to encode _all_ octets in the hexadecimal\n representation:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eqp_dec $ Data.ByteString.Char8.pack \"=20!\"\n\u003c/code\u003e\u003c/strong\u003eRight (\" !\",\"\")\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eqp_dec $ Data.ByteString.Char8.pack \"=20=21\"\n\u003c/code\u003e\u003c/strong\u003eRight (\" !\",\"\")\n\u003c/pre\u003e\u003cp\u003eA \u003ccode\u003eLeft\u003c/code\u003e value is only ever returned on decoding errors.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eqp_dec $ Data.ByteString.Char8.pack \"=2\"\n\u003c/code\u003e\u003c/strong\u003eRight (\"\",\"=2\")\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eqp_dec $ Data.ByteString.Char8.pack \"=2g\"\n\u003c/code\u003e\u003c/strong\u003eLeft (\"\",\"=2g\")\n\u003c/pre\u003e",
          "module": "Codec.Binary.QuotedPrintable",
          "name": "qp_dec",
          "package": "sandi",
          "signature": "ByteString -\u003e Either (ByteString, ByteString) (ByteString, ByteString)",
          "source": "src/Codec-Binary-QuotedPrintable.html#qp_dec",
          "type": "function"
        },
        "index": {
          "description": "Decoding function qp dec Data.ByteString.Char8.pack foobar Right foobar qp dec Data.ByteString.Char8.pack Right The input data is allowed to use lowercase letters in the hexadecimal representation of an octets value even though the standard says that only uppercase letters may be used qp dec Data.ByteString.Char8.pack Right qp dec Data.ByteString.Char8.pack Right It also allows the input to encode all octets in the hexadecimal representation qp dec Data.ByteString.Char8.pack Right qp dec Data.ByteString.Char8.pack Right Left value is only ever returned on decoding errors qp dec Data.ByteString.Char8.pack Right qp dec Data.ByteString.Char8.pack Left",
          "hierarchy": "Codec Binary QuotedPrintable",
          "module": "Codec.Binary.QuotedPrintable",
          "name": "qp_dec",
          "normalized": "ByteString-\u003eEither(ByteString,ByteString)(ByteString,ByteString)",
          "package": "sandi",
          "signature": "ByteString-\u003eEither(ByteString,ByteString)(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-QuotedPrintable.html#v:qp_dec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding function.\n\u003c/p\u003e\u003cp\u003eThis function allocates enough space to hold twice the size of the indata\n (or at least 512 bytes) and then encodes as much as possible of the indata.\n That means there is a risk that the encoded data won't fit and in that case\n the second part of the pair contains the remainder of the indata.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eqp_enc $ Data.ByteString.Char8.pack \"=\"\n\u003c/code\u003e\u003c/strong\u003e(\"=3D\",\"\")\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esnd $ qp_enc $ Data.ByteString.Char8.pack $ Data.List.take 171 $ repeat '='\n\u003c/code\u003e\u003c/strong\u003e\"=\"\n\u003c/pre\u003e",
          "module": "Codec.Binary.QuotedPrintable",
          "name": "qp_enc",
          "package": "sandi",
          "signature": "ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Codec-Binary-QuotedPrintable.html#qp_enc",
          "type": "function"
        },
        "index": {
          "description": "Encoding function This function allocates enough space to hold twice the size of the indata or at least bytes and then encodes as much as possible of the indata That means there is risk that the encoded data won fit and in that case the second part of the pair contains the remainder of the indata qp enc Data.ByteString.Char8.pack snd qp enc Data.ByteString.Char8.pack Data.List.take repeat",
          "hierarchy": "Codec Binary QuotedPrintable",
          "module": "Codec.Binary.QuotedPrintable",
          "name": "qp_enc",
          "normalized": "ByteString-\u003e(ByteString,ByteString)",
          "package": "sandi",
          "signature": "ByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-QuotedPrintable.html#v:qp_enc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUuencoding is notoriously badly specified.  This implementation aims at\n being compatible with the GNU Sharutils\n (\u003ca\u003ehttp://www.gnu.org/software/sharutils/\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eJust like Base64 encoding uuencoding expands blocks of 3 bytes into blocks\n of 4 bytes.  There is however no well defined ending to a piece of encoded\n data, instead uuencoded data is commonly transferred linewise where each\n line is prepended with the length of the data in the line.\n\u003c/p\u003e\u003cp\u003eThis module currently only deals with the encoding.  Chopping the encoded\n data into lines, and unchopping lines into encoded data is left as an\n exercise to the reader.  (Patches are welcome.)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Binary.Uu",
          "name": "Uu",
          "package": "sandi",
          "source": "src/Codec-Binary-Uu.html",
          "type": "module"
        },
        "index": {
          "description": "Uuencoding is notoriously badly specified This implementation aims at being compatible with the GNU Sharutils http www.gnu.org software sharutils Just like Base64 encoding uuencoding expands blocks of bytes into blocks of bytes There is however no well defined ending to piece of encoded data instead uuencoded data is commonly transferred linewise where each line is prepended with the length of the data in the line This module currently only deals with the encoding Chopping the encoded data into lines and unchopping lines into encoded data is left as an exercise to the reader Patches are welcome",
          "hierarchy": "Codec Binary Uu",
          "module": "Codec.Binary.Uu",
          "name": "Uu",
          "package": "sandi",
          "partial": "Uu",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Uu.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function that combines \u003ccode\u003e\u003ca\u003euu_decode_part\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003euu_decode_final\u003c/a\u003e\u003c/code\u003e to decode a complete string.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edecode $ Data.ByteString.Char8.pack \"9F]O\"\n\u003c/code\u003e\u003c/strong\u003eRight \"foo\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edecode $ Data.ByteString.Char8.pack \"9F]O8F%R\"\n\u003c/code\u003e\u003c/strong\u003eRight \"foobar\"\n\u003c/pre\u003e\u003cp\u003eFailures when decoding returns the decoded part and the remainder:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edecode $ Data.ByteString.Char8.pack \"9F]O8F&#172;R\"\n\u003c/code\u003e\u003c/strong\u003eLeft (\"foo\",\"8F\\172R\")\n\u003c/pre\u003e",
          "module": "Codec.Binary.Uu",
          "name": "decode",
          "package": "sandi",
          "signature": "ByteString -\u003e Either (ByteString, ByteString) ByteString",
          "source": "src/Codec-Binary-Uu.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Convenience function that combines uu decode part and uu decode final to decode complete string decode Data.ByteString.Char8.pack Right foo decode Data.ByteString.Char8.pack O8F Right foobar Failures when decoding returns the decoded part and the remainder decode Data.ByteString.Char8.pack O8F Left foo",
          "hierarchy": "Codec Binary Uu",
          "module": "Codec.Binary.Uu",
          "name": "decode",
          "normalized": "ByteString-\u003eEither(ByteString,ByteString)ByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eEither(ByteString,ByteString)ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Uu.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function that combines \u003ccode\u003e\u003ca\u003euu_encode_part\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003euu_encode_final\u003c/a\u003e\u003c/code\u003e to encode a complete string.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eencode $ Data.ByteString.Char8.pack \"foo\"\n\u003c/code\u003e\u003c/strong\u003e\"9F]O\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eencode $ Data.ByteString.Char8.pack \"foobar\"\n\u003c/code\u003e\u003c/strong\u003e\"9F]O8F%R\"\n\u003c/pre\u003e",
          "module": "Codec.Binary.Uu",
          "name": "encode",
          "package": "sandi",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Codec-Binary-Uu.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Convenience function that combines uu encode part and uu encode final to encode complete string encode Data.ByteString.Char8.pack foo encode Data.ByteString.Char8.pack foobar O8F",
          "hierarchy": "Codec Binary Uu",
          "module": "Codec.Binary.Uu",
          "name": "encode",
          "normalized": "ByteString-\u003eByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Uu.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoding function for the final block.\n\u003c/p\u003e\u003cp\u003eThe final block has to have a size of 0 or 4:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003euu_decode_final $ Data.ByteString.Char8.pack \"9F\\\\\"\n\u003c/code\u003e\u003c/strong\u003eJust \"fo\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003euu_decode_final $ Data.ByteString.Char8.pack \"\"\n\u003c/code\u003e\u003c/strong\u003eJust \"\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003euu_decode_final $ Data.ByteString.Char8.pack \"9F&#172;\"\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cp\u003eBut it must be the encoding of a block that is less than 3 bytes:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003euu_decode_final $ encode $ Data.ByteString.Char8.pack \"foo\"\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e",
          "module": "Codec.Binary.Uu",
          "name": "uu_decode_final",
          "package": "sandi",
          "signature": "ByteString -\u003e Maybe ByteString",
          "source": "src/Codec-Binary-Uu.html#uu_decode_final",
          "type": "function"
        },
        "index": {
          "description": "Decoding function for the final block The final block has to have size of or uu decode final Data.ByteString.Char8.pack Just fo uu decode final Data.ByteString.Char8.pack Just uu decode final Data.ByteString.Char8.pack Nothing But it must be the encoding of block that is less than bytes uu decode final encode Data.ByteString.Char8.pack foo Nothing",
          "hierarchy": "Codec Binary Uu",
          "module": "Codec.Binary.Uu",
          "name": "uu_decode_final",
          "normalized": "ByteString-\u003eMaybe ByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Uu.html#v:uu_decode_final"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoding function.\n\u003c/p\u003e\u003cp\u003eDecode as large a portion of the input as possible.  Enough data is\n allocated for the output to ensure that the remainder is less than 4 bytes\n in size.  Success result in a \u003ccode\u003eRight\u003c/code\u003e value:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003euu_decode_part $ Data.ByteString.Char8.pack \"9F]O\"\n\u003c/code\u003e\u003c/strong\u003eRight (\"foo\",\"\")\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003euu_decode_part $ Data.ByteString.Char8.pack \"9F]O8F$\"\n\u003c/code\u003e\u003c/strong\u003eRight (\"foo\",\"8F$\")\n\u003c/pre\u003e\u003cp\u003eFailures occur on bad input and result in a \u003ccode\u003eLeft\u003c/code\u003e value:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003euu_decode_part $ Data.ByteString.Char8.pack \"9F 0\"\n\u003c/code\u003e\u003c/strong\u003eLeft (\"\",\"9F 0\")\n\u003c/pre\u003e",
          "module": "Codec.Binary.Uu",
          "name": "uu_decode_part",
          "package": "sandi",
          "signature": "ByteString -\u003e Either (ByteString, ByteString) (ByteString, ByteString)",
          "source": "src/Codec-Binary-Uu.html#uu_decode_part",
          "type": "function"
        },
        "index": {
          "description": "Decoding function Decode as large portion of the input as possible Enough data is allocated for the output to ensure that the remainder is less than bytes in size Success result in Right value uu decode part Data.ByteString.Char8.pack Right foo uu decode part Data.ByteString.Char8.pack O8F Right foo Failures occur on bad input and result in Left value uu decode part Data.ByteString.Char8.pack Left",
          "hierarchy": "Codec Binary Uu",
          "module": "Codec.Binary.Uu",
          "name": "uu_decode_part",
          "normalized": "ByteString-\u003eEither(ByteString,ByteString)(ByteString,ByteString)",
          "package": "sandi",
          "signature": "ByteString-\u003eEither(ByteString,ByteString)(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Uu.html#v:uu_decode_part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding function for the final block.\n\u003c/p\u003e\u003cp\u003eThe final block has to have a size less than 3.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003euu_encode_final $ Data.ByteString.Char8.pack \"r\"\n\u003c/code\u003e\u003c/strong\u003eJust \"\u003c@\"\n\u003c/pre\u003e\u003cp\u003eTrying to pass in too large a block result in failure:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003euu_encode_final $ Data.ByteString.Char8.pack \"foo\"\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e",
          "module": "Codec.Binary.Uu",
          "name": "uu_encode_final",
          "package": "sandi",
          "signature": "ByteString -\u003e Maybe ByteString",
          "source": "src/Codec-Binary-Uu.html#uu_encode_final",
          "type": "function"
        },
        "index": {
          "description": "Encoding function for the final block The final block has to have size less than uu encode final Data.ByteString.Char8.pack Just Trying to pass in too large block result in failure uu encode final Data.ByteString.Char8.pack foo Nothing",
          "hierarchy": "Codec Binary Uu",
          "module": "Codec.Binary.Uu",
          "name": "uu_encode_final",
          "normalized": "ByteString-\u003eMaybe ByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Uu.html#v:uu_encode_final"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding function.\n\u003c/p\u003e\u003cp\u003eThis function encodes as large a portion of the input as possible and\n returns the encoded part together with the remaining part.  Enough space is\n allocated for the encoding to make sure that the remaining part is less than\n 3 bytes long, which means it can be passed to \u003ccode\u003e\u003ca\u003euu_encode_final\u003c/a\u003e\u003c/code\u003e as is.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003euu_encode_part $ Data.ByteString.Char8.pack \"foo\"\n\u003c/code\u003e\u003c/strong\u003e(\"9F]O\",\"\")\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003euu_encode_part $ Data.ByteString.Char8.pack \"foob\"\n\u003c/code\u003e\u003c/strong\u003e(\"9F]O\",\"b\")\n\u003c/pre\u003e",
          "module": "Codec.Binary.Uu",
          "name": "uu_encode_part",
          "package": "sandi",
          "signature": "ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Codec-Binary-Uu.html#uu_encode_part",
          "type": "function"
        },
        "index": {
          "description": "Encoding function This function encodes as large portion of the input as possible and returns the encoded part together with the remaining part Enough space is allocated for the encoding to make sure that the remaining part is less than bytes long which means it can be passed to uu encode final as is uu encode part Data.ByteString.Char8.pack foo uu encode part Data.ByteString.Char8.pack foob",
          "hierarchy": "Codec Binary Uu",
          "module": "Codec.Binary.Uu",
          "name": "uu_encode_part",
          "normalized": "ByteString-\u003e(ByteString,ByteString)",
          "package": "sandi",
          "signature": "ByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Uu.html#v:uu_encode_part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eXxencoding is obsolete but still included for completeness.  Further\n information on the encoding can be found at\n \u003ca\u003ehttp://en.wikipedia.org/wiki/Xxencode\u003c/a\u003e.  It should be noted that this\n implementation performs no padding.\n\u003c/p\u003e\u003cp\u003eThis encoding is very similar to uuencoding, therefore further information\n regarding the functions can be found in the documentation of\n \u003ca\u003eCodec.Binary.Uu\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Binary.Xx",
          "name": "Xx",
          "package": "sandi",
          "source": "src/Codec-Binary-Xx.html",
          "type": "module"
        },
        "index": {
          "description": "Xxencoding is obsolete but still included for completeness Further information on the encoding can be found at http en.wikipedia.org wiki Xxencode It should be noted that this implementation performs no padding This encoding is very similar to uuencoding therefore further information regarding the functions can be found in the documentation of Codec.Binary.Uu",
          "hierarchy": "Codec Binary Xx",
          "module": "Codec.Binary.Xx",
          "name": "Xx",
          "package": "sandi",
          "partial": "Xx",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Xx.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Binary.Xx",
          "name": "decode",
          "package": "sandi",
          "signature": "ByteString -\u003e Either (ByteString, ByteString) ByteString",
          "source": "src/Codec-Binary-Xx.html#decode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Binary Xx",
          "module": "Codec.Binary.Xx",
          "name": "decode",
          "normalized": "ByteString-\u003eEither(ByteString,ByteString)ByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eEither(ByteString,ByteString)ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Xx.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Binary.Xx",
          "name": "encode",
          "package": "sandi",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Codec-Binary-Xx.html#encode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Binary Xx",
          "module": "Codec.Binary.Xx",
          "name": "encode",
          "normalized": "ByteString-\u003eByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Xx.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoding function for the final block.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003exx_decode_final $ Data.ByteString.Char8.pack \"Naw\"\n\u003c/code\u003e\u003c/strong\u003eJust \"fo\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003exx_decode_final $ Data.ByteString.Char8.pack \"\"\n\u003c/code\u003e\u003c/strong\u003eJust \"\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003exx_decode_final $ Data.ByteString.Char8.pack \"Na \"\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003exx_decode_final $ encode $ Data.ByteString.Char8.pack \"foo\"\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e",
          "module": "Codec.Binary.Xx",
          "name": "xx_decode_final",
          "package": "sandi",
          "signature": "ByteString -\u003e Maybe ByteString",
          "source": "src/Codec-Binary-Xx.html#xx_decode_final",
          "type": "function"
        },
        "index": {
          "description": "Decoding function for the final block xx decode final Data.ByteString.Char8.pack Naw Just fo xx decode final Data.ByteString.Char8.pack Just xx decode final Data.ByteString.Char8.pack Na Nothing xx decode final encode Data.ByteString.Char8.pack foo Nothing",
          "hierarchy": "Codec Binary Xx",
          "module": "Codec.Binary.Xx",
          "name": "xx_decode_final",
          "normalized": "ByteString-\u003eMaybe ByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Xx.html#v:xx_decode_final"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoding function.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003exx_decode_part $ Data.ByteString.Char8.pack \"Naxj\"\n\u003c/code\u003e\u003c/strong\u003eRight (\"foo\",\"\")\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003exx_decode_part $ Data.ByteString.Char8.pack \"NaxjMa3\"\n\u003c/code\u003e\u003c/strong\u003eRight (\"foo\",\"Ma3\")\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003exx_decode_part $ Data.ByteString.Char8.pack \"Na j\"\n\u003c/code\u003e\u003c/strong\u003eLeft (\"\",\"Na J\")\n\u003c/pre\u003e",
          "module": "Codec.Binary.Xx",
          "name": "xx_decode_part",
          "package": "sandi",
          "signature": "ByteString -\u003e Either (ByteString, ByteString) (ByteString, ByteString)",
          "source": "src/Codec-Binary-Xx.html#xx_decode_part",
          "type": "function"
        },
        "index": {
          "description": "Decoding function xx decode part Data.ByteString.Char8.pack Naxj Right foo xx decode part Data.ByteString.Char8.pack NaxjMa3 Right foo Ma3 xx decode part Data.ByteString.Char8.pack Na Left Na",
          "hierarchy": "Codec Binary Xx",
          "module": "Codec.Binary.Xx",
          "name": "xx_decode_part",
          "normalized": "ByteString-\u003eEither(ByteString,ByteString)(ByteString,ByteString)",
          "package": "sandi",
          "signature": "ByteString-\u003eEither(ByteString,ByteString)(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Xx.html#v:xx_decode_part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding function for the final block.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003exx_encode_final $ Data.ByteString.Char8.pack \"r\"\n\u003c/code\u003e\u003c/strong\u003eJust \"QU\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003exx_encode_final $ Data.ByteString.Char8.pack \"foo\"\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003c/pre\u003e",
          "module": "Codec.Binary.Xx",
          "name": "xx_encode_final",
          "package": "sandi",
          "signature": "ByteString -\u003e Maybe ByteString",
          "source": "src/Codec-Binary-Xx.html#xx_encode_final",
          "type": "function"
        },
        "index": {
          "description": "Encoding function for the final block xx encode final Data.ByteString.Char8.pack Just QU xx encode final Data.ByteString.Char8.pack foo Nothing",
          "hierarchy": "Codec Binary Xx",
          "module": "Codec.Binary.Xx",
          "name": "xx_encode_final",
          "normalized": "ByteString-\u003eMaybe ByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Xx.html#v:xx_encode_final"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding function.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003exx_encode_part $ Data.ByteString.Char8.pack \"foo\"\n\u003c/code\u003e\u003c/strong\u003e(\"Naxj\",\"\")\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003exx_encode_part $ Data.ByteString.Char8.pack \"foob\"\n\u003c/code\u003e\u003c/strong\u003e(\"Naxj\",\"b\")\n\u003c/pre\u003e",
          "module": "Codec.Binary.Xx",
          "name": "xx_encode_part",
          "package": "sandi",
          "signature": "ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Codec-Binary-Xx.html#xx_encode_part",
          "type": "function"
        },
        "index": {
          "description": "Encoding function xx encode part Data.ByteString.Char8.pack foo Naxj xx encode part Data.ByteString.Char8.pack foob Naxj",
          "hierarchy": "Codec Binary Xx",
          "module": "Codec.Binary.Xx",
          "name": "xx_encode_part",
          "normalized": "ByteString-\u003e(ByteString,ByteString)",
          "package": "sandi",
          "signature": "ByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Xx.html#v:xx_encode_part"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation based on the specification found at\n \u003ca\u003ehttp://yence.sourceforge.net/docs/protocol/version1_3_draft.html\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Binary.Yenc",
          "name": "Yenc",
          "package": "sandi",
          "source": "src/Codec-Binary-Yenc.html",
          "type": "module"
        },
        "index": {
          "description": "Implementation based on the specification found at http yence.sourceforge.net docs protocol version1 draft.html",
          "hierarchy": "Codec Binary Yenc",
          "module": "Codec.Binary.Yenc",
          "name": "Yenc",
          "package": "sandi",
          "partial": "Yenc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Yenc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA synonym for \u003ccode\u003e\u003ca\u003ey_dec\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Binary.Yenc",
          "name": "decode",
          "package": "sandi",
          "signature": "ByteString -\u003e Either (ByteString, ByteString) ByteString",
          "source": "src/Codec-Binary-Yenc.html#decode",
          "type": "function"
        },
        "index": {
          "description": "synonym for dec",
          "hierarchy": "Codec Binary Yenc",
          "module": "Codec.Binary.Yenc",
          "name": "decode",
          "normalized": "ByteString-\u003eEither(ByteString,ByteString)ByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eEither(ByteString,ByteString)ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Yenc.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient function that calls \u003ccode\u003e\u003ca\u003ey_enc\u003c/a\u003e\u003c/code\u003e repeatedly until the whole input\n data is encoded.\n\u003c/p\u003e",
          "module": "Codec.Binary.Yenc",
          "name": "encode",
          "package": "sandi",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Codec-Binary-Yenc.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Convenient function that calls enc repeatedly until the whole input data is encoded",
          "hierarchy": "Codec Binary Yenc",
          "module": "Codec.Binary.Yenc",
          "name": "encode",
          "normalized": "ByteString-\u003eByteString",
          "package": "sandi",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Yenc.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecoding function.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ey_dec $ Data.ByteString.pack [144,153,153,140,139,156]\n\u003c/code\u003e\u003c/strong\u003eRight (\"foobar\",\"\")\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ey_dec $ Data.ByteString.Char8.pack \"=}\"\n\u003c/code\u003e\u003c/strong\u003eRight (\"\\DC3\",\"\")\n\u003c/pre\u003e\u003cp\u003eA \u003ccode\u003eLeft\u003c/code\u003e value is only ever returned on decoding errors which, due to\n characteristics of the encoding, can never happen.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ey_dec $ Data.ByteString.Char8.pack \"=\"\n\u003c/code\u003e\u003c/strong\u003eRight (\"\",\"=\")\n\u003c/pre\u003e",
          "module": "Codec.Binary.Yenc",
          "name": "y_dec",
          "package": "sandi",
          "signature": "ByteString -\u003e Either (ByteString, ByteString) (ByteString, ByteString)",
          "source": "src/Codec-Binary-Yenc.html#y_dec",
          "type": "function"
        },
        "index": {
          "description": "Decoding function dec Data.ByteString.pack Right foobar dec Data.ByteString.Char8.pack Right DC3 Left value is only ever returned on decoding errors which due to characteristics of the encoding can never happen dec Data.ByteString.Char8.pack Right",
          "hierarchy": "Codec Binary Yenc",
          "module": "Codec.Binary.Yenc",
          "name": "y_dec",
          "normalized": "ByteString-\u003eEither(ByteString,ByteString)(ByteString,ByteString)",
          "package": "sandi",
          "signature": "ByteString-\u003eEither(ByteString,ByteString)(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Yenc.html#v:y_dec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding function.\n\u003c/p\u003e\u003cp\u003eThis function allocates enough space to hold 20% more than the size of the\n indata (or at least 512 bytes) and then encodes as much as possible of the\n indata.  That means there is a risk that the encoded data won't fit and in\n that case the second part of the pair contains the remainder of the indata.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ey_enc $ Data.ByteString.Char8.pack \"foobar\"\n\u003c/code\u003e\u003c/strong\u003e(\"\\144\\153\\153\\140\\139\\156\",\"\")\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esnd $ y_enc $ Data.ByteString.Char8.pack $ Data.List.take 257 $ repeat '\\x13'\n\u003c/code\u003e\u003c/strong\u003e\"\\DC3\"\n\u003c/pre\u003e",
          "module": "Codec.Binary.Yenc",
          "name": "y_enc",
          "package": "sandi",
          "signature": "ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Codec-Binary-Yenc.html#y_enc",
          "type": "function"
        },
        "index": {
          "description": "Encoding function This function allocates enough space to hold more than the size of the indata or at least bytes and then encodes as much as possible of the indata That means there is risk that the encoded data won fit and in that case the second part of the pair contains the remainder of the indata enc Data.ByteString.Char8.pack foobar snd enc Data.ByteString.Char8.pack Data.List.take repeat x13 DC3",
          "hierarchy": "Codec Binary Yenc",
          "module": "Codec.Binary.Yenc",
          "name": "y_enc",
          "normalized": "ByteString-\u003e(ByteString,ByteString)",
          "package": "sandi",
          "signature": "ByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Codec-Binary-Yenc.html#v:y_enc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Codec.Base16",
          "name": "Base16",
          "package": "sandi",
          "source": "src/Data-Conduit-Codec-Base16.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Conduit Codec Base16",
          "module": "Data.Conduit.Codec.Base16",
          "name": "Base16",
          "package": "sandi",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Data-Conduit-Codec-Base16.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Codec.Base16",
          "name": "decode",
          "package": "sandi",
          "signature": "Conduit ByteString m ByteString",
          "source": "src/Data-Conduit-Codec-Base16.html#decode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Codec Base16",
          "module": "Data.Conduit.Codec.Base16",
          "name": "decode",
          "package": "sandi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Data-Conduit-Codec-Base16.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Codec.Base16",
          "name": "encode",
          "package": "sandi",
          "signature": "Conduit ByteString m ByteString",
          "source": "src/Data-Conduit-Codec-Base16.html#encode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Codec Base16",
          "module": "Data.Conduit.Codec.Base16",
          "name": "encode",
          "package": "sandi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Data-Conduit-Codec-Base16.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Codec.Base32",
          "name": "Base32",
          "package": "sandi",
          "source": "src/Data-Conduit-Codec-Base32.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Conduit Codec Base32",
          "module": "Data.Conduit.Codec.Base32",
          "name": "Base32",
          "package": "sandi",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Data-Conduit-Codec-Base32.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Codec.Base32",
          "name": "decode",
          "package": "sandi",
          "signature": "Conduit ByteString m ByteString",
          "source": "src/Data-Conduit-Codec-Base32.html#decode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Codec Base32",
          "module": "Data.Conduit.Codec.Base32",
          "name": "decode",
          "package": "sandi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Data-Conduit-Codec-Base32.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Codec.Base32",
          "name": "encode",
          "package": "sandi",
          "signature": "Conduit ByteString m ByteString",
          "source": "src/Data-Conduit-Codec-Base32.html#encode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Codec Base32",
          "module": "Data.Conduit.Codec.Base32",
          "name": "encode",
          "package": "sandi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Data-Conduit-Codec-Base32.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Codec.Base32Hex",
          "name": "Base32Hex",
          "package": "sandi",
          "source": "src/Data-Conduit-Codec-Base32Hex.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Conduit Codec Base32Hex",
          "module": "Data.Conduit.Codec.Base32Hex",
          "name": "Base32Hex",
          "package": "sandi",
          "partial": "Base Hex",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Data-Conduit-Codec-Base32Hex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Codec.Base32Hex",
          "name": "decode",
          "package": "sandi",
          "signature": "Conduit ByteString m ByteString",
          "source": "src/Data-Conduit-Codec-Base32Hex.html#decode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Codec Base32Hex",
          "module": "Data.Conduit.Codec.Base32Hex",
          "name": "decode",
          "package": "sandi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Data-Conduit-Codec-Base32Hex.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Codec.Base32Hex",
          "name": "encode",
          "package": "sandi",
          "signature": "Conduit ByteString m ByteString",
          "source": "src/Data-Conduit-Codec-Base32Hex.html#encode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Codec Base32Hex",
          "module": "Data.Conduit.Codec.Base32Hex",
          "name": "encode",
          "package": "sandi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Data-Conduit-Codec-Base32Hex.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Codec.Base64",
          "name": "Base64",
          "package": "sandi",
          "source": "src/Data-Conduit-Codec-Base64.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Conduit Codec Base64",
          "module": "Data.Conduit.Codec.Base64",
          "name": "Base64",
          "package": "sandi",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Data-Conduit-Codec-Base64.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Codec.Base64",
          "name": "decode",
          "package": "sandi",
          "signature": "Conduit ByteString m ByteString",
          "source": "src/Data-Conduit-Codec-Base64.html#decode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Codec Base64",
          "module": "Data.Conduit.Codec.Base64",
          "name": "decode",
          "package": "sandi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Data-Conduit-Codec-Base64.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Codec.Base64",
          "name": "encode",
          "package": "sandi",
          "signature": "Conduit ByteString m ByteString",
          "source": "src/Data-Conduit-Codec-Base64.html#encode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Codec Base64",
          "module": "Data.Conduit.Codec.Base64",
          "name": "encode",
          "package": "sandi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Data-Conduit-Codec-Base64.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Codec.Base64Url",
          "name": "Base64Url",
          "package": "sandi",
          "source": "src/Data-Conduit-Codec-Base64Url.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Conduit Codec Base64Url",
          "module": "Data.Conduit.Codec.Base64Url",
          "name": "Base64Url",
          "package": "sandi",
          "partial": "Base Url",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Data-Conduit-Codec-Base64Url.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Codec.Base64Url",
          "name": "decode",
          "package": "sandi",
          "signature": "Conduit ByteString m ByteString",
          "source": "src/Data-Conduit-Codec-Base64Url.html#decode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Codec Base64Url",
          "module": "Data.Conduit.Codec.Base64Url",
          "name": "decode",
          "package": "sandi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Data-Conduit-Codec-Base64Url.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Codec.Base64Url",
          "name": "encode",
          "package": "sandi",
          "signature": "Conduit ByteString m ByteString",
          "source": "src/Data-Conduit-Codec-Base64Url.html#encode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Codec Base64Url",
          "module": "Data.Conduit.Codec.Base64Url",
          "name": "encode",
          "package": "sandi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Data-Conduit-Codec-Base64Url.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Codec.Base85",
          "name": "Base85",
          "package": "sandi",
          "source": "src/Data-Conduit-Codec-Base85.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Conduit Codec Base85",
          "module": "Data.Conduit.Codec.Base85",
          "name": "Base85",
          "package": "sandi",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Data-Conduit-Codec-Base85.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Codec.Base85",
          "name": "decode",
          "package": "sandi",
          "signature": "Conduit ByteString m ByteString",
          "source": "src/Data-Conduit-Codec-Base85.html#decode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Codec Base85",
          "module": "Data.Conduit.Codec.Base85",
          "name": "decode",
          "package": "sandi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Data-Conduit-Codec-Base85.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Codec.Base85",
          "name": "encode",
          "package": "sandi",
          "signature": "Conduit ByteString m ByteString",
          "source": "src/Data-Conduit-Codec-Base85.html#encode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Codec Base85",
          "module": "Data.Conduit.Codec.Base85",
          "name": "encode",
          "package": "sandi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Data-Conduit-Codec-Base85.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Codec.QuotedPrintable",
          "name": "QuotedPrintable",
          "package": "sandi",
          "source": "src/Data-Conduit-Codec-QuotedPrintable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Conduit Codec QuotedPrintable",
          "module": "Data.Conduit.Codec.QuotedPrintable",
          "name": "QuotedPrintable",
          "package": "sandi",
          "partial": "Quoted Printable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Data-Conduit-Codec-QuotedPrintable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Codec.QuotedPrintable",
          "name": "decode",
          "package": "sandi",
          "signature": "Conduit ByteString m ByteString",
          "source": "src/Data-Conduit-Codec-QuotedPrintable.html#decode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Codec QuotedPrintable",
          "module": "Data.Conduit.Codec.QuotedPrintable",
          "name": "decode",
          "package": "sandi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Data-Conduit-Codec-QuotedPrintable.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Codec.QuotedPrintable",
          "name": "encode",
          "package": "sandi",
          "signature": "Conduit ByteString m ByteString",
          "source": "src/Data-Conduit-Codec-QuotedPrintable.html#encode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Codec QuotedPrintable",
          "module": "Data.Conduit.Codec.QuotedPrintable",
          "name": "encode",
          "package": "sandi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Data-Conduit-Codec-QuotedPrintable.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Codec.Uu",
          "name": "Uu",
          "package": "sandi",
          "source": "src/Data-Conduit-Codec-Uu.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Conduit Codec Uu",
          "module": "Data.Conduit.Codec.Uu",
          "name": "Uu",
          "package": "sandi",
          "partial": "Uu",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Data-Conduit-Codec-Uu.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Codec.Uu",
          "name": "decode",
          "package": "sandi",
          "signature": "Conduit ByteString m ByteString",
          "source": "src/Data-Conduit-Codec-Uu.html#decode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Codec Uu",
          "module": "Data.Conduit.Codec.Uu",
          "name": "decode",
          "package": "sandi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Data-Conduit-Codec-Uu.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Codec.Uu",
          "name": "encode",
          "package": "sandi",
          "signature": "Conduit ByteString m ByteString",
          "source": "src/Data-Conduit-Codec-Uu.html#encode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Codec Uu",
          "module": "Data.Conduit.Codec.Uu",
          "name": "encode",
          "package": "sandi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Data-Conduit-Codec-Uu.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Codec.Xx",
          "name": "Xx",
          "package": "sandi",
          "source": "src/Data-Conduit-Codec-Xx.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Conduit Codec Xx",
          "module": "Data.Conduit.Codec.Xx",
          "name": "Xx",
          "package": "sandi",
          "partial": "Xx",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Data-Conduit-Codec-Xx.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Codec.Xx",
          "name": "decode",
          "package": "sandi",
          "signature": "Conduit ByteString m ByteString",
          "source": "src/Data-Conduit-Codec-Xx.html#decode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Codec Xx",
          "module": "Data.Conduit.Codec.Xx",
          "name": "decode",
          "package": "sandi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Data-Conduit-Codec-Xx.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Codec.Xx",
          "name": "encode",
          "package": "sandi",
          "signature": "Conduit ByteString m ByteString",
          "source": "src/Data-Conduit-Codec-Xx.html#encode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Codec Xx",
          "module": "Data.Conduit.Codec.Xx",
          "name": "encode",
          "package": "sandi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Data-Conduit-Codec-Xx.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Codec.Yenc",
          "name": "Yenc",
          "package": "sandi",
          "source": "src/Data-Conduit-Codec-Yenc.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Conduit Codec Yenc",
          "module": "Data.Conduit.Codec.Yenc",
          "name": "Yenc",
          "package": "sandi",
          "partial": "Yenc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Data-Conduit-Codec-Yenc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Codec.Yenc",
          "name": "decode",
          "package": "sandi",
          "signature": "Conduit ByteString m ByteString",
          "source": "src/Data-Conduit-Codec-Yenc.html#decode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Codec Yenc",
          "module": "Data.Conduit.Codec.Yenc",
          "name": "decode",
          "package": "sandi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Data-Conduit-Codec-Yenc.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Codec.Yenc",
          "name": "encode",
          "package": "sandi",
          "signature": "Conduit ByteString m ByteString",
          "source": "src/Data-Conduit-Codec-Yenc.html#encode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit Codec Yenc",
          "module": "Data.Conduit.Codec.Yenc",
          "name": "encode",
          "package": "sandi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sandi/docs/Data-Conduit-Codec-Yenc.html#v:encode"
      }
    }
  ]
]