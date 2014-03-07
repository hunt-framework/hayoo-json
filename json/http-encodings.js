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
        "word": "http-encodings"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDetection and of character encodings of HTTP message bodies\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.HTTP.Encoding.Character",
          "name": "Character",
          "package": "http-encodings",
          "source": "src/Network-HTTP-Encoding-Character.html",
          "type": "module"
        },
        "index": {
          "description": "Detection and of character encodings of HTTP message bodies",
          "hierarchy": "Network HTTP Encoding Character",
          "module": "Network.HTTP.Encoding.Character",
          "name": "Character",
          "package": "http-encodings",
          "partial": "Character",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Character.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLooks for and parses the ContentType header. Returns the\n (optional) content-type and (optional) the character encoding name.\n\u003c/p\u003e",
          "module": "Network.HTTP.Encoding.Character",
          "name": "getContentTypeAndCharacterEncoding",
          "package": "http-encodings",
          "signature": "[Header] -\u003e (Maybe Type, Maybe EncodingName)",
          "source": "src/Network-HTTP-Encoding-Character.html#getContentTypeAndCharacterEncoding",
          "type": "function"
        },
        "index": {
          "description": "Looks for and parses the ContentType header Returns the optional content-type and optional the character encoding name",
          "hierarchy": "Network HTTP Encoding Character",
          "module": "Network.HTTP.Encoding.Character",
          "name": "getContentTypeAndCharacterEncoding",
          "normalized": "[Header]-\u003e(Maybe Type,Maybe EncodingName)",
          "package": "http-encodings",
          "partial": "Content Type And Character Encoding",
          "signature": "[Header]-\u003e(Maybe Type,Maybe EncodingName)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Character.html#v:getContentTypeAndCharacterEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the given character encoding name in the given header. If\n there is no content type header in the header list, it defaults to\n the text/plain content type\n\u003c/p\u003e",
          "module": "Network.HTTP.Encoding.Character",
          "name": "setCharacterEncoding",
          "package": "http-encodings",
          "signature": "EncodingName -\u003e [Header] -\u003e [Header]",
          "source": "src/Network-HTTP-Encoding-Character.html#setCharacterEncoding",
          "type": "function"
        },
        "index": {
          "description": "Sets the given character encoding name in the given header If there is no content type header in the header list it defaults to the text plain content type",
          "hierarchy": "Network HTTP Encoding Character",
          "module": "Network.HTTP.Encoding.Character",
          "name": "setCharacterEncoding",
          "normalized": "EncodingName-\u003e[Header]-\u003e[Header]",
          "package": "http-encodings",
          "partial": "Character Encoding",
          "signature": "EncodingName-\u003e[Header]-\u003e[Header]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Character.html#v:setCharacterEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to decode a bytestring as UTF-8. Returns nothing if any\n illegal characters are encountered\n\u003c/p\u003e",
          "module": "Network.HTTP.Encoding.Character",
          "name": "tryAsUTF8",
          "package": "http-encodings",
          "signature": "ByteString -\u003e Maybe String",
          "source": "src/Network-HTTP-Encoding-Character.html#tryAsUTF8",
          "type": "function"
        },
        "index": {
          "description": "Tries to decode bytestring as UTF-8 Returns nothing if any illegal characters are encountered",
          "hierarchy": "Network HTTP Encoding Character",
          "module": "Network.HTTP.Encoding.Character",
          "name": "tryAsUTF8",
          "normalized": "ByteString-\u003eMaybe String",
          "package": "http-encodings",
          "partial": "As UTF",
          "signature": "ByteString-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Character.html#v:tryAsUTF8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDeals with content encoding (compression) of message bodies:\n detection, update and compression/decompression\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.HTTP.Encoding.Content",
          "name": "Content",
          "package": "http-encodings",
          "source": "src/Network-HTTP-Encoding-Content.html",
          "type": "module"
        },
        "index": {
          "description": "Deals with content encoding compression of message bodies detection update and compression decompression",
          "hierarchy": "Network HTTP Encoding Content",
          "module": "Network.HTTP.Encoding.Content",
          "name": "Content",
          "package": "http-encodings",
          "partial": "Content",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Content.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the content encoding, per the HTTP/1.1 standard.\n\u003c/p\u003e",
          "module": "Network.HTTP.Encoding.Content",
          "name": "ContentEncoding",
          "package": "http-encodings",
          "source": "src/Network-HTTP-Encoding-Content.html#ContentEncoding",
          "type": "data"
        },
        "index": {
          "description": "Represents the content encoding per the HTTP standard",
          "hierarchy": "Network HTTP Encoding Content",
          "module": "Network.HTTP.Encoding.Content",
          "name": "ContentEncoding",
          "package": "http-encodings",
          "partial": "Content Encoding",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Content.html#t:ContentEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Encoding.Content",
          "name": "Compress",
          "package": "http-encodings",
          "signature": "Compress",
          "source": "src/Network-HTTP-Encoding-Content.html#ContentEncoding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Encoding Content",
          "module": "Network.HTTP.Encoding.Content",
          "name": "Compress",
          "package": "http-encodings",
          "partial": "Compress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Content.html#v:Compress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Encoding.Content",
          "name": "Deflate",
          "package": "http-encodings",
          "signature": "Deflate",
          "source": "src/Network-HTTP-Encoding-Content.html#ContentEncoding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Encoding Content",
          "module": "Network.HTTP.Encoding.Content",
          "name": "Deflate",
          "package": "http-encodings",
          "partial": "Deflate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Content.html#v:Deflate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Encoding.Content",
          "name": "GZip",
          "package": "http-encodings",
          "signature": "GZip",
          "source": "src/Network-HTTP-Encoding-Content.html#ContentEncoding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Encoding Content",
          "module": "Network.HTTP.Encoding.Content",
          "name": "GZip",
          "package": "http-encodings",
          "partial": "GZip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Content.html#v:GZip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Encoding.Content",
          "name": "IdentityCompression",
          "package": "http-encodings",
          "signature": "IdentityCompression",
          "source": "src/Network-HTTP-Encoding-Content.html#ContentEncoding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Encoding Content",
          "module": "Network.HTTP.Encoding.Content",
          "name": "IdentityCompression",
          "package": "http-encodings",
          "partial": "Identity Compression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Content.html#v:IdentityCompression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompresses a \u003ccode\u003eBytestring\u003c/code\u003e assuming a given content encoding. The\n Compress encoding (LZW algorithm) is not supported at this time.\n\u003c/p\u003e",
          "module": "Network.HTTP.Encoding.Content",
          "name": "compress",
          "package": "http-encodings",
          "signature": "ContentEncoding -\u003e ByteString -\u003e Either EncodingError ByteString",
          "source": "src/Network-HTTP-Encoding-Content.html#compress",
          "type": "function"
        },
        "index": {
          "description": "Compresses Bytestring assuming given content encoding The Compress encoding LZW algorithm is not supported at this time",
          "hierarchy": "Network HTTP Encoding Content",
          "module": "Network.HTTP.Encoding.Content",
          "name": "compress",
          "normalized": "ContentEncoding-\u003eByteString-\u003eEither EncodingError ByteString",
          "package": "http-encodings",
          "signature": "ContentEncoding-\u003eByteString-\u003eEither EncodingError ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Content.html#v:compress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecompresses a \u003ccode\u003eBytestring\u003c/code\u003e assuming a given content encoding. The\n Compress encoding (LZW algorithm) is not supported at this time.\n\u003c/p\u003e",
          "module": "Network.HTTP.Encoding.Content",
          "name": "decompress",
          "package": "http-encodings",
          "signature": "ContentEncoding -\u003e ByteString -\u003e Either EncodingError ByteString",
          "source": "src/Network-HTTP-Encoding-Content.html#decompress",
          "type": "function"
        },
        "index": {
          "description": "Decompresses Bytestring assuming given content encoding The Compress encoding LZW algorithm is not supported at this time",
          "hierarchy": "Network HTTP Encoding Content",
          "module": "Network.HTTP.Encoding.Content",
          "name": "decompress",
          "normalized": "ContentEncoding-\u003eByteString-\u003eEither EncodingError ByteString",
          "package": "http-encodings",
          "signature": "ContentEncoding-\u003eByteString-\u003eEither EncodingError ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Content.html#v:decompress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines the content encoding from a list of headers. Defaults\n to \u003ccode\u003e\u003ca\u003eIdentityCompression\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.HTTP.Encoding.Content",
          "name": "getContentEncoding",
          "package": "http-encodings",
          "signature": "[Header] -\u003e ContentEncoding",
          "source": "src/Network-HTTP-Encoding-Content.html#getContentEncoding",
          "type": "function"
        },
        "index": {
          "description": "Determines the content encoding from list of headers Defaults to IdentityCompression",
          "hierarchy": "Network HTTP Encoding Content",
          "module": "Network.HTTP.Encoding.Content",
          "name": "getContentEncoding",
          "normalized": "[Header]-\u003eContentEncoding",
          "package": "http-encodings",
          "partial": "Content Encoding",
          "signature": "[Header]-\u003eContentEncoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Content.html#v:getContentEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the list of headers, updates content encoding to the\n specified.\n\u003c/p\u003e",
          "module": "Network.HTTP.Encoding.Content",
          "name": "updateContentEncoding",
          "package": "http-encodings",
          "signature": "ContentEncoding -\u003e [Header] -\u003e [Header]",
          "source": "src/Network-HTTP-Encoding-Content.html#updateContentEncoding",
          "type": "function"
        },
        "index": {
          "description": "Given the list of headers updates content encoding to the specified",
          "hierarchy": "Network HTTP Encoding Content",
          "module": "Network.HTTP.Encoding.Content",
          "name": "updateContentEncoding",
          "normalized": "ContentEncoding-\u003e[Header]-\u003e[Header]",
          "package": "http-encodings",
          "partial": "Content Encoding",
          "signature": "ContentEncoding-\u003e[Header]-\u003e[Header]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Content.html#v:updateContentEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eErrors that may occur during decoding/encoding of HTTP message bodies\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.HTTP.Encoding.Error",
          "name": "Error",
          "package": "http-encodings",
          "source": "src/Network-HTTP-Encoding-Error.html",
          "type": "module"
        },
        "index": {
          "description": "Errors that may occur during decoding encoding of HTTP message bodies",
          "hierarchy": "Network HTTP Encoding Error",
          "module": "Network.HTTP.Encoding.Error",
          "name": "Error",
          "package": "http-encodings",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Encoding.Error",
          "name": "ConversionError",
          "package": "http-encodings",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network HTTP Encoding Error",
          "module": "Network.HTTP.Encoding.Error",
          "name": "ConversionError",
          "package": "http-encodings",
          "partial": "Conversion Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Error.html#t:ConversionError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding/Decoding error message\n\u003c/p\u003e",
          "module": "Network.HTTP.Encoding.Error",
          "name": "EncodingError",
          "package": "http-encodings",
          "source": "src/Network-HTTP-Encoding-Error.html#EncodingError",
          "type": "data"
        },
        "index": {
          "description": "Encoding Decoding error message",
          "hierarchy": "Network HTTP Encoding Error",
          "module": "Network.HTTP.Encoding.Error",
          "name": "EncodingError",
          "package": "http-encodings",
          "partial": "Encoding Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Error.html#t:EncodingError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacter decoding is not specified and\n cannot be guessed\n\u003c/p\u003e",
          "module": "Network.HTTP.Encoding.Error",
          "name": "CannotDetermineCharacterEncoding",
          "package": "http-encodings",
          "signature": "CannotDetermineCharacterEncoding",
          "source": "src/Network-HTTP-Encoding-Error.html#EncodingError",
          "type": "function"
        },
        "index": {
          "description": "Character decoding is not specified and cannot be guessed",
          "hierarchy": "Network HTTP Encoding Error",
          "module": "Network.HTTP.Encoding.Error",
          "name": "CannotDetermineCharacterEncoding",
          "package": "http-encodings",
          "partial": "Cannot Determine Character Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Error.html#v:CannotDetermineCharacterEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOther error\n\u003c/p\u003e",
          "module": "Network.HTTP.Encoding.Error",
          "name": "GenericError",
          "package": "http-encodings",
          "signature": "GenericError String",
          "source": "src/Network-HTTP-Encoding-Error.html#EncodingError",
          "type": "function"
        },
        "index": {
          "description": "Other error",
          "hierarchy": "Network HTTP Encoding Error",
          "module": "Network.HTTP.Encoding.Error",
          "name": "GenericError",
          "package": "http-encodings",
          "partial": "Generic Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Error.html#v:GenericError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIConv conversion error\n\u003c/p\u003e",
          "module": "Network.HTTP.Encoding.Error",
          "name": "IConvError",
          "package": "http-encodings",
          "signature": "IConvError ConversionError",
          "source": "src/Network-HTTP-Encoding-Error.html#EncodingError",
          "type": "function"
        },
        "index": {
          "description": "IConv conversion error",
          "hierarchy": "Network HTTP Encoding Error",
          "module": "Network.HTTP.Encoding.Error",
          "name": "IConvError",
          "package": "http-encodings",
          "partial": "IConv Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Error.html#v:IConvError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA compression algorithm is not supported (LZW)\n\u003c/p\u003e",
          "module": "Network.HTTP.Encoding.Error",
          "name": "UnsupportedCompressionAlgorithm",
          "package": "http-encodings",
          "signature": "UnsupportedCompressionAlgorithm",
          "source": "src/Network-HTTP-Encoding-Error.html#EncodingError",
          "type": "function"
        },
        "index": {
          "description": "compression algorithm is not supported LZW",
          "hierarchy": "Network HTTP Encoding Error",
          "module": "Network.HTTP.Encoding.Error",
          "name": "UnsupportedCompressionAlgorithm",
          "package": "http-encodings",
          "partial": "Unsupported Compression Algorithm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Error.html#v:UnsupportedCompressionAlgorithm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEncoding and decoding of bodies and complete HTTP messages. See\n package \u003ccode\u003ejespresso\u003c/code\u003e for an example of usage.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.HTTP.Encoding",
          "name": "Encoding",
          "package": "http-encodings",
          "source": "src/Network-HTTP-Encoding.html",
          "type": "module"
        },
        "index": {
          "description": "Encoding and decoding of bodies and complete HTTP messages See package jespresso for an example of usage",
          "hierarchy": "Network HTTP Encoding",
          "module": "Network.HTTP.Encoding",
          "name": "Encoding",
          "package": "http-encodings",
          "partial": "Encoding",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of decoding a message body\n\u003c/p\u003e",
          "module": "Network.HTTP.Encoding",
          "name": "DecodingResult",
          "package": "http-encodings",
          "source": "src/Network-HTTP-Encoding.html#DecodingResult",
          "type": "data"
        },
        "index": {
          "description": "The result of decoding message body",
          "hierarchy": "Network HTTP Encoding",
          "module": "Network.HTTP.Encoding",
          "name": "DecodingResult",
          "package": "http-encodings",
          "partial": "Decoding Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding.html#t:DecodingResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncoding/Decoding error message\n\u003c/p\u003e",
          "module": "Network.HTTP.Encoding",
          "name": "EncodingError",
          "package": "http-encodings",
          "source": "src/Network-HTTP-Encoding-Error.html#EncodingError",
          "type": "data"
        },
        "index": {
          "description": "Encoding Decoding error message",
          "hierarchy": "Network HTTP Encoding",
          "module": "Network.HTTP.Encoding",
          "name": "EncodingError",
          "package": "http-encodings",
          "partial": "Encoding Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding.html#t:EncodingError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Encoding",
          "name": "HasBody",
          "package": "http-encodings",
          "source": "src/Network-HTTP-Encoding.html#HasBody",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network HTTP Encoding",
          "module": "Network.HTTP.Encoding",
          "name": "HasBody",
          "package": "http-encodings",
          "partial": "Has Body",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding.html#t:HasBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Encoding",
          "name": "DecodingResult",
          "package": "http-encodings",
          "signature": "DecodingResult",
          "source": "src/Network-HTTP-Encoding.html#DecodingResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Encoding",
          "module": "Network.HTTP.Encoding",
          "name": "DecodingResult",
          "package": "http-encodings",
          "partial": "Decoding Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding.html#v:DecodingResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode the body of an HTTP message and return the original\n encoding name and the same message with decoded body (as\n UTF8-encoded string) and updated character and content encoding\n headers.\n\u003c/p\u003e",
          "module": "Network.HTTP.Encoding",
          "name": "decode",
          "package": "http-encodings",
          "signature": "m ByteString -\u003e Either EncodingError (String, m String)",
          "source": "src/Network-HTTP-Encoding.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Decode the body of an HTTP message and return the original encoding name and the same message with decoded body as UTF8-encoded string and updated character and content encoding headers",
          "hierarchy": "Network HTTP Encoding",
          "module": "Network.HTTP.Encoding",
          "name": "decode",
          "normalized": "a ByteString-\u003eEither EncodingError(String,a String)",
          "package": "http-encodings",
          "signature": "m ByteString-\u003eEither EncodingError(String,m String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecodes and decompresses the response or request body using the\n information in the headers and content and possibly returns the\n body in UTF8\n\u003c/p\u003e",
          "module": "Network.HTTP.Encoding",
          "name": "decodeBody",
          "package": "http-encodings",
          "signature": "r ByteString -\u003e Either EncodingError DecodingResult",
          "source": "src/Network-HTTP-Encoding.html#decodeBody",
          "type": "function"
        },
        "index": {
          "description": "Decodes and decompresses the response or request body using the information in the headers and content and possibly returns the body in UTF8",
          "hierarchy": "Network HTTP Encoding",
          "module": "Network.HTTP.Encoding",
          "name": "decodeBody",
          "normalized": "a ByteString-\u003eEither EncodingError DecodingResult",
          "package": "http-encodings",
          "partial": "Body",
          "signature": "r ByteString-\u003eEither EncodingError DecodingResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding.html#v:decodeBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Encoding",
          "name": "decodedBody",
          "package": "http-encodings",
          "signature": "String",
          "source": "src/Network-HTTP-Encoding.html#DecodingResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Encoding",
          "module": "Network.HTTP.Encoding",
          "name": "decodedBody",
          "package": "http-encodings",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding.html#v:decodedBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the UTF8-encoded body of an HTTP message with the provided\n encoding.\n\u003c/p\u003e",
          "module": "Network.HTTP.Encoding",
          "name": "encode",
          "package": "http-encodings",
          "signature": "EncodingName -\u003e m String -\u003e Either EncodingError (m ByteString)",
          "source": "src/Network-HTTP-Encoding.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Encode the UTF8-encoded body of an HTTP message with the provided encoding",
          "hierarchy": "Network HTTP Encoding",
          "module": "Network.HTTP.Encoding",
          "name": "encode",
          "normalized": "EncodingName-\u003ea String-\u003eEither EncodingError(a ByteString)",
          "package": "http-encodings",
          "signature": "EncodingName-\u003em String-\u003eEither EncodingError(m ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a haskell UTF8-encoded string and produces a stream, encoded\n and compressed\n\u003c/p\u003e",
          "module": "Network.HTTP.Encoding",
          "name": "encodeBody",
          "package": "http-encodings",
          "signature": "EncodingName -\u003e ContentEncoding -\u003e String -\u003e Either EncodingError ByteString",
          "source": "src/Network-HTTP-Encoding.html#encodeBody",
          "type": "function"
        },
        "index": {
          "description": "Takes haskell UTF8-encoded string and produces stream encoded and compressed",
          "hierarchy": "Network HTTP Encoding",
          "module": "Network.HTTP.Encoding",
          "name": "encodeBody",
          "normalized": "EncodingName-\u003eContentEncoding-\u003eString-\u003eEither EncodingError ByteString",
          "package": "http-encodings",
          "partial": "Body",
          "signature": "EncodingName-\u003eContentEncoding-\u003eString-\u003eEither EncodingError ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding.html#v:encodeBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Encoding",
          "name": "getBody",
          "package": "http-encodings",
          "signature": "a b -\u003e b",
          "source": "src/Network-HTTP-Encoding.html#getBody",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network HTTP Encoding",
          "module": "Network.HTTP.Encoding",
          "name": "getBody",
          "normalized": "a b-\u003eb",
          "package": "http-encodings",
          "partial": "Body",
          "signature": "a b-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding.html#v:getBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Encoding",
          "name": "originalEncoding",
          "package": "http-encodings",
          "signature": "EncodingName",
          "source": "src/Network-HTTP-Encoding.html#DecodingResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP Encoding",
          "module": "Network.HTTP.Encoding",
          "name": "originalEncoding",
          "package": "http-encodings",
          "partial": "Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding.html#v:originalEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.Encoding",
          "name": "setBody",
          "package": "http-encodings",
          "signature": "c -\u003e a b -\u003e a c",
          "source": "src/Network-HTTP-Encoding.html#setBody",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network HTTP Encoding",
          "module": "Network.HTTP.Encoding",
          "name": "setBody",
          "normalized": "a-\u003eb c-\u003eb a",
          "package": "http-encodings",
          "partial": "Body",
          "signature": "c-\u003ea b-\u003ea c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding.html#v:setBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows to lift a transformation function operating on decoded\n (UTF-8) bodies to bodies of requests with encoded (and compressed)\n bodies.\n\u003c/p\u003e",
          "module": "Network.HTTP.Encoding",
          "name": "withDecodedBody",
          "package": "http-encodings",
          "signature": "(String -\u003e String) -\u003e r ByteString -\u003e Either EncodingError (r ByteString)",
          "source": "src/Network-HTTP-Encoding.html#withDecodedBody",
          "type": "function"
        },
        "index": {
          "description": "Allows to lift transformation function operating on decoded UTF-8 bodies to bodies of requests with encoded and compressed bodies",
          "hierarchy": "Network HTTP Encoding",
          "module": "Network.HTTP.Encoding",
          "name": "withDecodedBody",
          "normalized": "(String-\u003eString)-\u003ea ByteString-\u003eEither EncodingError(a ByteString)",
          "package": "http-encodings",
          "partial": "Decoded Body",
          "signature": "(String-\u003eString)-\u003er ByteString-\u003eEither EncodingError(r ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding.html#v:withDecodedBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monadic version of \u003ccode\u003ewithDecodeBody\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.HTTP.Encoding",
          "name": "withDecodedBodyM",
          "package": "http-encodings",
          "signature": "(String -\u003e m String) -\u003e r ByteString -\u003e m (Either EncodingError (r ByteString))",
          "source": "src/Network-HTTP-Encoding.html#withDecodedBodyM",
          "type": "function"
        },
        "index": {
          "description": "monadic version of withDecodeBody",
          "hierarchy": "Network HTTP Encoding",
          "module": "Network.HTTP.Encoding",
          "name": "withDecodedBodyM",
          "normalized": "(String-\u003ea String)-\u003eb ByteString-\u003ea(Either EncodingError(b ByteString))",
          "package": "http-encodings",
          "partial": "Decoded Body",
          "signature": "(String-\u003em String)-\u003er ByteString-\u003em(Either EncodingError(r ByteString))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding.html#v:withDecodedBodyM"
      }
    }
  ]
]