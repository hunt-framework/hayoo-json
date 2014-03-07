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
        "word": "mime"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBase64 decoding and encoding routines, multiple entry\n points for either depending on use and level of control\n wanted over the encoded output (and its input form on the\n decoding side.)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.MIME.Base64",
          "name": "Base64",
          "package": "mime",
          "source": "src/Codec-MIME-Base64.html",
          "type": "module"
        },
        "index": {
          "description": "Base64 decoding and encoding routines multiple entry points for either depending on use and level of control wanted over the encoded output and its input form on the decoding side",
          "hierarchy": "Codec MIME Base64",
          "module": "Codec.MIME.Base64",
          "name": "Base64",
          "package": "mime",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Base64.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Base64",
          "name": "decode",
          "package": "mime",
          "signature": "String -\u003e [Word8]",
          "source": "src/Codec-MIME-Base64.html#decode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Base64",
          "module": "Codec.MIME.Base64",
          "name": "decode",
          "normalized": "String-\u003e[Word]",
          "package": "mime",
          "signature": "String-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Base64.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Base64",
          "name": "decodePrim",
          "package": "mime",
          "signature": "Char -\u003e Char -\u003e String -\u003e [Word8]",
          "source": "src/Codec-MIME-Base64.html#decodePrim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Base64",
          "module": "Codec.MIME.Base64",
          "name": "decodePrim",
          "normalized": "Char-\u003eChar-\u003eString-\u003e[Word]",
          "package": "mime",
          "partial": "Prim",
          "signature": "Char-\u003eChar-\u003eString-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Base64.html#v:decodePrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Base64",
          "name": "decodeToString",
          "package": "mime",
          "signature": "String -\u003e String",
          "source": "src/Codec-MIME-Base64.html#decodeToString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Base64",
          "module": "Codec.MIME.Base64",
          "name": "decodeToString",
          "normalized": "String-\u003eString",
          "package": "mime",
          "partial": "To String",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Base64.html#v:decodeToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Base64",
          "name": "encodeRaw",
          "package": "mime",
          "signature": "Bool -\u003e [Word8] -\u003e String",
          "source": "src/Codec-MIME-Base64.html#encodeRaw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Base64",
          "module": "Codec.MIME.Base64",
          "name": "encodeRaw",
          "normalized": "Bool-\u003e[Word]-\u003eString",
          "package": "mime",
          "partial": "Raw",
          "signature": "Bool-\u003e[Word]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Base64.html#v:encodeRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eencodeRawPrim\u003c/code\u003e lets you control what non-alphanum characters to use\n (The base64url variation uses \u003ccode\u003e*\u003c/code\u003e and \u003ccode\u003e-\u003c/code\u003e, for instance.)\n No support for mapping these to multiple characters in the output though.\n\u003c/p\u003e",
          "module": "Codec.MIME.Base64",
          "name": "encodeRawPrim",
          "package": "mime",
          "signature": "Bool -\u003e Char -\u003e Char -\u003e [Word8] -\u003e String",
          "source": "src/Codec-MIME-Base64.html#encodeRawPrim",
          "type": "function"
        },
        "index": {
          "description": "encodeRawPrim lets you control what non-alphanum characters to use The base64url variation uses and for instance No support for mapping these to multiple characters in the output though",
          "hierarchy": "Codec MIME Base64",
          "module": "Codec.MIME.Base64",
          "name": "encodeRawPrim",
          "normalized": "Bool-\u003eChar-\u003eChar-\u003e[Word]-\u003eString",
          "package": "mime",
          "partial": "Raw Prim",
          "signature": "Bool-\u003eChar-\u003eChar-\u003e[Word]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Base64.html#v:encodeRawPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Base64",
          "name": "encodeRawString",
          "package": "mime",
          "signature": "Bool -\u003e String -\u003e String",
          "source": "src/Codec-MIME-Base64.html#encodeRawString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Base64",
          "module": "Codec.MIME.Base64",
          "name": "encodeRawString",
          "normalized": "Bool-\u003eString-\u003eString",
          "package": "mime",
          "partial": "Raw String",
          "signature": "Bool-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Base64.html#v:encodeRawString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eformatOutput n mbLT str\u003c/code\u003e formats \u003ccode\u003estr\u003c/code\u003e, splitting it\n into lines of length \u003ccode\u003en\u003c/code\u003e. The optional value lets you control what\n line terminator sequence to use; the default is CRLF (as per MIME.)\n\u003c/p\u003e",
          "module": "Codec.MIME.Base64",
          "name": "formatOutput",
          "package": "mime",
          "signature": "Int -\u003e Maybe String -\u003e String -\u003e String",
          "source": "src/Codec-MIME-Base64.html#formatOutput",
          "type": "function"
        },
        "index": {
          "description": "formatOutput mbLT str formats str splitting it into lines of length The optional value lets you control what line terminator sequence to use the default is CRLF as per MIME",
          "hierarchy": "Codec MIME Base64",
          "module": "Codec.MIME.Base64",
          "name": "formatOutput",
          "normalized": "Int-\u003eMaybe String-\u003eString-\u003eString",
          "package": "mime",
          "partial": "Output",
          "signature": "Int-\u003eMaybe String-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Base64.html#v:formatOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Decode",
          "name": "Decode",
          "package": "mime",
          "source": "src/Codec-MIME-Decode.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec MIME Decode",
          "module": "Codec.MIME.Decode",
          "name": "Decode",
          "package": "mime",
          "partial": "Decode",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Decode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edecodeBody enc str\u003c/code\u003e decodes \u003ccode\u003estr\u003c/code\u003e according to the scheme\n specified by \u003ccode\u003eenc\u003c/code\u003e. Currently, \u003ccode\u003ebase64\u003c/code\u003e and \u003ccode\u003equoted-printable\u003c/code\u003e are\n the only two encodings supported. If you supply anything else\n for \u003ccode\u003eenc\u003c/code\u003e, \u003ccode\u003edecodeBody\u003c/code\u003e returns \u003ccode\u003estr\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.MIME.Decode",
          "name": "decodeBody",
          "package": "mime",
          "signature": "String -\u003e String -\u003e String",
          "source": "src/Codec-MIME-Decode.html#decodeBody",
          "type": "function"
        },
        "index": {
          "description": "decodeBody enc str decodes str according to the scheme specified by enc Currently base64 and quoted-printable are the only two encodings supported If you supply anything else for enc decodeBody returns str",
          "hierarchy": "Codec MIME Decode",
          "module": "Codec.MIME.Decode",
          "name": "decodeBody",
          "normalized": "String-\u003eString-\u003eString",
          "package": "mime",
          "partial": "Body",
          "signature": "String-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Decode.html#v:decodeBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Decode",
          "name": "decodeWord",
          "package": "mime",
          "signature": "String -\u003e Maybe (String, String)",
          "source": "src/Codec-MIME-Decode.html#decodeWord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Decode",
          "module": "Codec.MIME.Decode",
          "name": "decodeWord",
          "normalized": "String-\u003eMaybe(String,String)",
          "package": "mime",
          "partial": "Word",
          "signature": "String-\u003eMaybe(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Decode.html#v:decodeWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Decode",
          "name": "decodeWords",
          "package": "mime",
          "signature": "String -\u003e String",
          "source": "src/Codec-MIME-Decode.html#decodeWords",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Decode",
          "module": "Codec.MIME.Decode",
          "name": "decodeWords",
          "normalized": "String-\u003eString",
          "package": "mime",
          "partial": "Words",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Decode.html#v:decodeWords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsing MIME content.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.MIME.Parse",
          "name": "Parse",
          "package": "mime",
          "source": "src/Codec-MIME-Parse.html",
          "type": "module"
        },
        "index": {
          "description": "Parsing MIME content",
          "hierarchy": "Codec MIME Parse",
          "module": "Codec.MIME.Parse",
          "name": "Parse",
          "package": "mime",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Parse",
          "name": "normalizeCRLF",
          "package": "mime",
          "signature": "Text -\u003e Text",
          "source": "src/Codec-MIME-Parse.html#normalizeCRLF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Parse",
          "module": "Codec.MIME.Parse",
          "name": "normalizeCRLF",
          "normalized": "Text-\u003eText",
          "package": "mime",
          "partial": "CRLF",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Parse.html#v:normalizeCRLF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Parse",
          "name": "parseContentType",
          "package": "mime",
          "signature": "Text -\u003e Maybe Type",
          "source": "src/Codec-MIME-Parse.html#parseContentType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Parse",
          "module": "Codec.MIME.Parse",
          "name": "parseContentType",
          "normalized": "Text-\u003eMaybe Type",
          "package": "mime",
          "partial": "Content Type",
          "signature": "Text-\u003eMaybe Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Parse.html#v:parseContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Parse",
          "name": "parseHeaders",
          "package": "mime",
          "signature": "Text -\u003e ([MIMEParam], Text)",
          "source": "src/Codec-MIME-Parse.html#parseHeaders",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Parse",
          "module": "Codec.MIME.Parse",
          "name": "parseHeaders",
          "normalized": "Text-\u003e([MIMEParam],Text)",
          "package": "mime",
          "partial": "Headers",
          "signature": "Text-\u003e([MIMEParam],Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Parse.html#v:parseHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Parse",
          "name": "parseMIMEBody",
          "package": "mime",
          "signature": "[MIMEParam] -\u003e Text -\u003e MIMEValue",
          "source": "src/Codec-MIME-Parse.html#parseMIMEBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Parse",
          "module": "Codec.MIME.Parse",
          "name": "parseMIMEBody",
          "normalized": "[MIMEParam]-\u003eText-\u003eMIMEValue",
          "package": "mime",
          "partial": "MIMEBody",
          "signature": "[MIMEParam]-\u003eText-\u003eMIMEValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Parse.html#v:parseMIMEBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Parse",
          "name": "parseMIMEMessage",
          "package": "mime",
          "signature": "Text -\u003e MIMEValue",
          "source": "src/Codec-MIME-Parse.html#parseMIMEMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Parse",
          "module": "Codec.MIME.Parse",
          "name": "parseMIMEMessage",
          "normalized": "Text-\u003eMIMEValue",
          "package": "mime",
          "partial": "MIMEMessage",
          "signature": "Text-\u003eMIMEValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Parse.html#v:parseMIMEMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Parse",
          "name": "parseMIMEType",
          "package": "mime",
          "signature": "Text -\u003e Maybe Type",
          "source": "src/Codec-MIME-Parse.html#parseMIMEType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Parse",
          "module": "Codec.MIME.Parse",
          "name": "parseMIMEType",
          "normalized": "Text-\u003eMaybe Type",
          "package": "mime",
          "partial": "MIMEType",
          "signature": "Text-\u003eMaybe Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Parse.html#v:parseMIMEType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Parse",
          "name": "parseMultipart",
          "package": "mime",
          "signature": "Type -\u003e Text -\u003e (MIMEValue, Text)",
          "source": "src/Codec-MIME-Parse.html#parseMultipart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Parse",
          "module": "Codec.MIME.Parse",
          "name": "parseMultipart",
          "normalized": "Type-\u003eText-\u003e(MIMEValue,Text)",
          "package": "mime",
          "partial": "Multipart",
          "signature": "Type-\u003eText-\u003e(MIMEValue,Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Parse.html#v:parseMultipart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Parse",
          "name": "splitMulti",
          "package": "mime",
          "signature": "Text -\u003e Text -\u003e ([MIMEValue], Text)",
          "source": "src/Codec-MIME-Parse.html#splitMulti",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Parse",
          "module": "Codec.MIME.Parse",
          "name": "splitMulti",
          "normalized": "Text-\u003eText-\u003e([MIMEValue],Text)",
          "package": "mime",
          "partial": "Multi",
          "signature": "Text-\u003eText-\u003e([MIMEValue],Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Parse.html#v:splitMulti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.QuotedPrintable",
          "name": "QuotedPrintable",
          "package": "mime",
          "source": "src/Codec-MIME-QuotedPrintable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec MIME QuotedPrintable",
          "module": "Codec.MIME.QuotedPrintable",
          "name": "QuotedPrintable",
          "package": "mime",
          "partial": "Quoted Printable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-QuotedPrintable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e incoming quoted-printable content, stripping\n out soft line breaks and translating \u003ccode\u003e=XY\u003c/code\u003e sequences\n into their decoded byte/octet. The output encoding/representation \n is still a String, not a sequence of bytes.\n\u003c/p\u003e",
          "module": "Codec.MIME.QuotedPrintable",
          "name": "decode",
          "package": "mime",
          "signature": "String -\u003e String",
          "source": "src/Codec-MIME-QuotedPrintable.html#decode",
          "type": "function"
        },
        "index": {
          "description": "decode incoming quoted-printable content stripping out soft line breaks and translating XY sequences into their decoded byte octet The output encoding representation is still String not sequence of bytes",
          "hierarchy": "Codec MIME QuotedPrintable",
          "module": "Codec.MIME.QuotedPrintable",
          "name": "decode",
          "normalized": "String-\u003eString",
          "package": "mime",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-QuotedPrintable.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e converts a sequence of characeter _octets_ into\n quoted-printable form; suitable for transmission in MIME\n payloads. Note the stress on _octets_; it is assumed that\n you have already converted Unicode into a \u003c=8-bit encoding\n (UTF-8, most likely.)\n\u003c/p\u003e",
          "module": "Codec.MIME.QuotedPrintable",
          "name": "encode",
          "package": "mime",
          "signature": "String -\u003e String",
          "source": "src/Codec-MIME-QuotedPrintable.html#encode",
          "type": "function"
        },
        "index": {
          "description": "encode converts sequence of characeter octets into quoted-printable form suitable for transmission in MIME payloads Note the stress on octets it is assumed that you have already converted Unicode into bit encoding UTF-8 most likely",
          "hierarchy": "Codec MIME QuotedPrintable",
          "module": "Codec.MIME.QuotedPrintable",
          "name": "encode",
          "normalized": "String-\u003eString",
          "package": "mime",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-QuotedPrintable.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRepresenting MIME types and values.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.MIME.Type",
          "name": "Type",
          "package": "mime",
          "source": "src/Codec-MIME-Type.html",
          "type": "module"
        },
        "index": {
          "description": "Representing MIME types and values",
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "Type",
          "package": "mime",
          "partial": "Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "Content",
          "package": "mime",
          "source": "src/Codec-MIME-Type.html#Content",
          "type": "type"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "Content",
          "package": "mime",
          "partial": "Content",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#t:Content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "DispParam",
          "package": "mime",
          "source": "src/Codec-MIME-Type.html#DispParam",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "DispParam",
          "package": "mime",
          "partial": "Disp Param",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#t:DispParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "DispType",
          "package": "mime",
          "source": "src/Codec-MIME-Type.html#DispType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "DispType",
          "package": "mime",
          "partial": "Disp Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#t:DispType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "Disposition",
          "package": "mime",
          "source": "src/Codec-MIME-Type.html#Disposition",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "Disposition",
          "package": "mime",
          "partial": "Disposition",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#t:Disposition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "MIMEContent",
          "package": "mime",
          "source": "src/Codec-MIME-Type.html#MIMEContent",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "MIMEContent",
          "package": "mime",
          "partial": "MIMEContent",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#t:MIMEContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea (type, subtype) MIME pair.\n\u003c/p\u003e",
          "module": "Codec.MIME.Type",
          "name": "MIMEPair",
          "package": "mime",
          "source": "src/Codec-MIME-Type.html#MIMEPair",
          "type": "data"
        },
        "index": {
          "description": "type subtype MIME pair",
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "MIMEPair",
          "package": "mime",
          "partial": "MIMEPair",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#t:MIMEPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "MIMEParam",
          "package": "mime",
          "source": "src/Codec-MIME-Type.html#MIMEParam",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "MIMEParam",
          "package": "mime",
          "partial": "MIMEParam",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#t:MIMEParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "MIMEType",
          "package": "mime",
          "source": "src/Codec-MIME-Type.html#MIMEType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "MIMEType",
          "package": "mime",
          "partial": "MIMEType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#t:MIMEType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "MIMEValue",
          "package": "mime",
          "source": "src/Codec-MIME-Type.html#MIMEValue",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "MIMEValue",
          "package": "mime",
          "partial": "MIMEValue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#t:MIMEValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "Multipart",
          "package": "mime",
          "source": "src/Codec-MIME-Type.html#Multipart",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "Multipart",
          "package": "mime",
          "partial": "Multipart",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#t:Multipart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefault subtype representation.\n\u003c/p\u003e",
          "module": "Codec.MIME.Type",
          "name": "SubType",
          "package": "mime",
          "source": "src/Codec-MIME-Type.html#SubType",
          "type": "type"
        },
        "index": {
          "description": "default subtype representation",
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "SubType",
          "package": "mime",
          "partial": "Sub Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#t:SubType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esubtype for text content; currently just a string.\n\u003c/p\u003e",
          "module": "Codec.MIME.Type",
          "name": "TextType",
          "package": "mime",
          "source": "src/Codec-MIME-Type.html#TextType",
          "type": "type"
        },
        "index": {
          "description": "subtype for text content currently just string",
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "TextType",
          "package": "mime",
          "partial": "Text Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#t:TextType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "Type",
          "package": "mime",
          "source": "src/Codec-MIME-Type.html#Type",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "Type",
          "package": "mime",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "Alternative",
          "package": "mime",
          "signature": "Alternative",
          "source": "src/Codec-MIME-Type.html#Multipart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "Alternative",
          "package": "mime",
          "partial": "Alternative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:Alternative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "Application",
          "package": "mime",
          "signature": "Application SubType",
          "source": "src/Codec-MIME-Type.html#MIMEType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "Application",
          "package": "mime",
          "partial": "Application",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:Application"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "Audio",
          "package": "mime",
          "signature": "Audio SubType",
          "source": "src/Codec-MIME-Type.html#MIMEType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "Audio",
          "package": "mime",
          "partial": "Audio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:Audio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "Byteranges",
          "package": "mime",
          "signature": "Byteranges",
          "source": "src/Codec-MIME-Type.html#Multipart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "Byteranges",
          "package": "mime",
          "partial": "Byteranges",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:Byteranges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "CreationDate",
          "package": "mime",
          "signature": "CreationDate Text",
          "source": "src/Codec-MIME-Type.html#DispParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "CreationDate",
          "package": "mime",
          "partial": "Creation Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:CreationDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "Digest",
          "package": "mime",
          "signature": "Digest",
          "source": "src/Codec-MIME-Type.html#Multipart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "Digest",
          "package": "mime",
          "partial": "Digest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:Digest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "DispAttachment",
          "package": "mime",
          "signature": "DispAttachment",
          "source": "src/Codec-MIME-Type.html#DispType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "DispAttachment",
          "package": "mime",
          "partial": "Disp Attachment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:DispAttachment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "DispFormData",
          "package": "mime",
          "signature": "DispFormData",
          "source": "src/Codec-MIME-Type.html#DispType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "DispFormData",
          "package": "mime",
          "partial": "Disp Form Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:DispFormData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "DispInline",
          "package": "mime",
          "signature": "DispInline",
          "source": "src/Codec-MIME-Type.html#DispType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "DispInline",
          "package": "mime",
          "partial": "Disp Inline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:DispInline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "DispOther",
          "package": "mime",
          "signature": "DispOther Text",
          "source": "src/Codec-MIME-Type.html#DispType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "DispOther",
          "package": "mime",
          "partial": "Disp Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:DispOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "Disposition",
          "package": "mime",
          "signature": "Disposition",
          "source": "src/Codec-MIME-Type.html#Disposition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "Disposition",
          "package": "mime",
          "partial": "Disposition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:Disposition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "Encrypted",
          "package": "mime",
          "signature": "Encrypted",
          "source": "src/Codec-MIME-Type.html#Multipart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "Encrypted",
          "package": "mime",
          "partial": "Encrypted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:Encrypted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ee.g., 'x-foo' (i.e., includes the 'x-' bit)\n\u003c/p\u003e",
          "module": "Codec.MIME.Type",
          "name": "Extension",
          "package": "mime",
          "signature": "Extension Text",
          "source": "src/Codec-MIME-Type.html#Multipart",
          "type": "function"
        },
        "index": {
          "description": "e.g x-foo i.e includes the bit",
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "Extension",
          "package": "mime",
          "partial": "Extension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:Extension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "Filename",
          "package": "mime",
          "signature": "Filename Text",
          "source": "src/Codec-MIME-Type.html#DispParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "Filename",
          "package": "mime",
          "partial": "Filename",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:Filename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "FormData",
          "package": "mime",
          "signature": "FormData",
          "source": "src/Codec-MIME-Type.html#Multipart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "FormData",
          "package": "mime",
          "partial": "Form Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:FormData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "Image",
          "package": "mime",
          "signature": "Image SubType",
          "source": "src/Codec-MIME-Type.html#MIMEType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "Image",
          "package": "mime",
          "partial": "Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:Image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "MIMEPair",
          "package": "mime",
          "signature": "MIMEPair Text SubType",
          "source": "src/Codec-MIME-Type.html#MIMEPair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "MIMEPair",
          "package": "mime",
          "partial": "MIMEPair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:MIMEPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "MIMEParam",
          "package": "mime",
          "signature": "MIMEParam",
          "source": "src/Codec-MIME-Type.html#MIMEParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "MIMEParam",
          "package": "mime",
          "partial": "MIMEParam",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:MIMEParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "MIMEValue",
          "package": "mime",
          "signature": "MIMEValue",
          "source": "src/Codec-MIME-Type.html#MIMEValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "MIMEValue",
          "package": "mime",
          "partial": "MIMEValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:MIMEValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "Message",
          "package": "mime",
          "signature": "Message SubType",
          "source": "src/Codec-MIME-Type.html#MIMEType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "Message",
          "package": "mime",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:Message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "Mixed",
          "package": "mime",
          "signature": "Mixed",
          "source": "src/Codec-MIME-Type.html#Multipart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "Mixed",
          "package": "mime",
          "partial": "Mixed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:Mixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "ModDate",
          "package": "mime",
          "signature": "ModDate Text",
          "source": "src/Codec-MIME-Type.html#DispParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "ModDate",
          "package": "mime",
          "partial": "Mod Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:ModDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "Model",
          "package": "mime",
          "signature": "Model SubType",
          "source": "src/Codec-MIME-Type.html#MIMEType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "Model",
          "package": "mime",
          "partial": "Model",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:Model"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "Multi",
          "package": "mime",
          "signature": "Multi [MIMEValue]",
          "source": "src/Codec-MIME-Type.html#MIMEContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "Multi",
          "normalized": "Multi[MIMEValue]",
          "package": "mime",
          "partial": "Multi",
          "signature": "Multi[MIMEValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:Multi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "Multipart",
          "package": "mime",
          "signature": "Multipart Multipart",
          "source": "src/Codec-MIME-Type.html#MIMEType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "Multipart",
          "package": "mime",
          "partial": "Multipart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:Multipart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "Name",
          "package": "mime",
          "signature": "Name Text",
          "source": "src/Codec-MIME-Type.html#DispParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "Name",
          "package": "mime",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "Other",
          "package": "mime",
          "signature": "Other",
          "source": "src/Codec-MIME-Type.html#MIMEType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "Other",
          "package": "mime",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:Other"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "OtherMulti",
          "package": "mime",
          "signature": "OtherMulti Text",
          "source": "src/Codec-MIME-Type.html#Multipart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "OtherMulti",
          "package": "mime",
          "partial": "Other Multi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:OtherMulti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "OtherParam",
          "package": "mime",
          "signature": "OtherParam Text Text",
          "source": "src/Codec-MIME-Type.html#DispParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "OtherParam",
          "package": "mime",
          "partial": "Other Param",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:OtherParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "Parallel",
          "package": "mime",
          "signature": "Parallel",
          "source": "src/Codec-MIME-Type.html#Multipart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "Parallel",
          "package": "mime",
          "partial": "Parallel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:Parallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "ReadDate",
          "package": "mime",
          "signature": "ReadDate Text",
          "source": "src/Codec-MIME-Type.html#DispParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "ReadDate",
          "package": "mime",
          "partial": "Read Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:ReadDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "Related",
          "package": "mime",
          "signature": "Related",
          "source": "src/Codec-MIME-Type.html#Multipart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "Related",
          "package": "mime",
          "partial": "Related",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:Related"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "Signed",
          "package": "mime",
          "signature": "Signed",
          "source": "src/Codec-MIME-Type.html#Multipart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "Signed",
          "package": "mime",
          "partial": "Signed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:Signed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "Single",
          "package": "mime",
          "signature": "Single Content",
          "source": "src/Codec-MIME-Type.html#MIMEContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "Single",
          "package": "mime",
          "partial": "Single",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:Single"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "Size",
          "package": "mime",
          "signature": "Size Text",
          "source": "src/Codec-MIME-Type.html#DispParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "Size",
          "package": "mime",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:Size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "Text",
          "package": "mime",
          "signature": "Text TextType",
          "source": "src/Codec-MIME-Type.html#MIMEType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "Text",
          "package": "mime",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "Type",
          "package": "mime",
          "signature": "Type",
          "source": "src/Codec-MIME-Type.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "Type",
          "package": "mime",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "Video",
          "package": "mime",
          "signature": "Video SubType",
          "source": "src/Codec-MIME-Type.html#MIMEType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "Video",
          "package": "mime",
          "partial": "Video",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:Video"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "dispParams",
          "package": "mime",
          "signature": "[DispParam]",
          "source": "src/Codec-MIME-Type.html#Disposition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "dispParams",
          "normalized": "[DispParam]",
          "package": "mime",
          "partial": "Params",
          "signature": "[DispParam]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:dispParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "dispType",
          "package": "mime",
          "signature": "DispType",
          "source": "src/Codec-MIME-Type.html#Disposition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "dispType",
          "package": "mime",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:dispType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "isXmlBased",
          "package": "mime",
          "signature": "Type -\u003e Bool",
          "source": "src/Codec-MIME-Type.html#isXmlBased",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "isXmlBased",
          "normalized": "Type-\u003eBool",
          "package": "mime",
          "partial": "Xml Based",
          "signature": "Type-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:isXmlBased"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "isXmlType",
          "package": "mime",
          "signature": "Type -\u003e Bool",
          "source": "src/Codec-MIME-Type.html#isXmlType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "isXmlType",
          "normalized": "Type-\u003eBool",
          "package": "mime",
          "partial": "Xml Type",
          "signature": "Type-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:isXmlType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "majTypeString",
          "package": "mime",
          "signature": "Type -\u003e Text",
          "source": "src/Codec-MIME-Type.html#majTypeString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "majTypeString",
          "normalized": "Type-\u003eText",
          "package": "mime",
          "partial": "Type String",
          "signature": "Type-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:majTypeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "mimeParams",
          "package": "mime",
          "signature": "[MIMEParam]",
          "source": "src/Codec-MIME-Type.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "mimeParams",
          "normalized": "[MIMEParam]",
          "package": "mime",
          "partial": "Params",
          "signature": "[MIMEParam]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:mimeParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "mimeType",
          "package": "mime",
          "signature": "MIMEType",
          "source": "src/Codec-MIME-Type.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "mimeType",
          "package": "mime",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:mimeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "mime_val_content",
          "package": "mime",
          "signature": "MIMEContent",
          "source": "src/Codec-MIME-Type.html#MIMEValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "mime_val_content",
          "package": "mime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:mime_val_content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "mime_val_disp",
          "package": "mime",
          "signature": "Maybe Disposition",
          "source": "src/Codec-MIME-Type.html#MIMEValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "mime_val_disp",
          "package": "mime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:mime_val_disp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "mime_val_headers",
          "package": "mime",
          "signature": "[MIMEParam]",
          "source": "src/Codec-MIME-Type.html#MIMEValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "mime_val_headers",
          "normalized": "[MIMEParam]",
          "package": "mime",
          "signature": "[MIMEParam]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:mime_val_headers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "mime_val_inc_type",
          "package": "mime",
          "signature": "Bool",
          "source": "src/Codec-MIME-Type.html#MIMEValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "mime_val_inc_type",
          "package": "mime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:mime_val_inc_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "mime_val_type",
          "package": "mime",
          "signature": "Type",
          "source": "src/Codec-MIME-Type.html#MIMEValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "mime_val_type",
          "package": "mime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:mime_val_type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "nullMIMEValue",
          "package": "mime",
          "signature": "MIMEValue",
          "source": "src/Codec-MIME-Type.html#nullMIMEValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "nullMIMEValue",
          "package": "mime",
          "partial": "MIMEValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:nullMIMEValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003enull\u003c/code\u003e MIME record type value; currently a \u003ccode\u003etext/plain\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.MIME.Type",
          "name": "nullType",
          "package": "mime",
          "signature": "Type",
          "source": "src/Codec-MIME-Type.html#nullType",
          "type": "function"
        },
        "index": {
          "description": "The null MIME record type value currently text plain",
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "nullType",
          "package": "mime",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:nullType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "otherSubType",
          "package": "mime",
          "signature": "SubType",
          "source": "src/Codec-MIME-Type.html#MIMEType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "otherSubType",
          "package": "mime",
          "partial": "Sub Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:otherSubType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "otherType",
          "package": "mime",
          "signature": "Text",
          "source": "src/Codec-MIME-Type.html#MIMEType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "otherType",
          "package": "mime",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:otherType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "paramName",
          "package": "mime",
          "signature": "Text",
          "source": "src/Codec-MIME-Type.html#MIMEParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "paramName",
          "package": "mime",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:paramName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "paramValue",
          "package": "mime",
          "signature": "Text",
          "source": "src/Codec-MIME-Type.html#MIMEParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "paramValue",
          "package": "mime",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:paramValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "showMIMEPair",
          "package": "mime",
          "signature": "MIMEPair -\u003e Text",
          "source": "src/Codec-MIME-Type.html#showMIMEPair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "showMIMEPair",
          "normalized": "MIMEPair-\u003eText",
          "package": "mime",
          "partial": "MIMEPair",
          "signature": "MIMEPair-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:showMIMEPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "showMIMEParams",
          "package": "mime",
          "signature": "[MIMEParam] -\u003e Text",
          "source": "src/Codec-MIME-Type.html#showMIMEParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "showMIMEParams",
          "normalized": "[MIMEParam]-\u003eText",
          "package": "mime",
          "partial": "MIMEParams",
          "signature": "[MIMEParam]-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:showMIMEParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "showMIMEType",
          "package": "mime",
          "signature": "MIMEType -\u003e Text",
          "source": "src/Codec-MIME-Type.html#showMIMEType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "showMIMEType",
          "normalized": "MIMEType-\u003eText",
          "package": "mime",
          "partial": "MIMEType",
          "signature": "MIMEType-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:showMIMEType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "showMultipart",
          "package": "mime",
          "signature": "Multipart -\u003e Text",
          "source": "src/Codec-MIME-Type.html#showMultipart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "showMultipart",
          "normalized": "Multipart-\u003eText",
          "package": "mime",
          "partial": "Multipart",
          "signature": "Multipart-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:showMultipart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "showType",
          "package": "mime",
          "signature": "Type -\u003e Text",
          "source": "src/Codec-MIME-Type.html#showType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "showType",
          "normalized": "Type-\u003eText",
          "package": "mime",
          "partial": "Type",
          "signature": "Type-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:showType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.MIME.Type",
          "name": "subTypeString",
          "package": "mime",
          "signature": "Type -\u003e Text",
          "source": "src/Codec-MIME-Type.html#subTypeString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec MIME Type",
          "module": "Codec.MIME.Type",
          "name": "subTypeString",
          "normalized": "Type-\u003eText",
          "package": "mime",
          "partial": "Type String",
          "signature": "Type-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Type.html#v:subTypeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtracting content from MIME values and types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.MIME.Utils",
          "name": "Utils",
          "package": "mime",
          "source": "src/Codec-MIME-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "Extracting content from MIME values and types",
          "hierarchy": "Codec MIME Utils",
          "module": "Codec.MIME.Utils",
          "name": "Utils",
          "package": "mime",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a parameter name, locate it within a MIME value,\n returning the corresponding (sub) MIME value.\n\u003c/p\u003e",
          "module": "Codec.MIME.Utils",
          "name": "findMultipartNamed",
          "package": "mime",
          "signature": "Text -\u003e MIMEValue -\u003e Maybe MIMEValue",
          "source": "src/Codec-MIME-Utils.html#findMultipartNamed",
          "type": "function"
        },
        "index": {
          "description": "Given parameter name locate it within MIME value returning the corresponding sub MIME value",
          "hierarchy": "Codec MIME Utils",
          "module": "Codec.MIME.Utils",
          "name": "findMultipartNamed",
          "normalized": "Text-\u003eMIMEValue-\u003eMaybe MIMEValue",
          "package": "mime",
          "partial": "Multipart Named",
          "signature": "Text-\u003eMIMEValue-\u003eMaybe MIMEValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mime/docs/Codec-MIME-Utils.html#v:findMultipartNamed"
      }
    }
  ]
]