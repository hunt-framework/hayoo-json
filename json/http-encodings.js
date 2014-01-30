[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Character.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDetection and of character encodings of HTTP message bodies\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.HTTP.Encoding.Character",
        "fct-package": "http-encodings",
        "fct-signature": "module",
        "fct-source": "src/Network-HTTP-Encoding-Character.html",
        "fct-type": "module",
        "title": "Character"
      },
      "index": {
        "description": "Detection and of character encodings of HTTP message bodies",
        "hierarchy": "Network HTTP Encoding Character",
        "module": "Network.HTTP.Encoding.Character",
        "name": "Character",
        "normalized": "",
        "package": "http-encodings",
        "partial": "Character",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Character.html#v:getContentTypeAndCharacterEncoding",
      "description": {
        "fct-descr": "\u003cp\u003eLooks for and parses the ContentType header. Returns the\n (optional) content-type and (optional) the character encoding name.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Encoding.Character",
        "fct-package": "http-encodings",
        "fct-signature": "[Header] -\u003e (Maybe Type, Maybe EncodingName)",
        "fct-source": "src/Network-HTTP-Encoding-Character.html#getContentTypeAndCharacterEncoding",
        "fct-type": "function",
        "title": "getContentTypeAndCharacterEncoding"
      },
      "index": {
        "description": "Looks for and parses the ContentType header Returns the optional content-type and optional the character encoding name",
        "hierarchy": "Network HTTP Encoding Character",
        "module": "Network.HTTP.Encoding.Character",
        "name": "getContentTypeAndCharacterEncoding",
        "normalized": "[Header]-\u003e(Maybe Type,Maybe EncodingName)",
        "package": "http-encodings",
        "partial": "Content Type And Character Encoding",
        "signature": "[Header]-\u003e(Maybe Type,Maybe EncodingName)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Character.html#v:setCharacterEncoding",
      "description": {
        "fct-descr": "\u003cp\u003eSets the given character encoding name in the given header. If\n there is no content type header in the header list, it defaults to\n the text/plain content type\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Encoding.Character",
        "fct-package": "http-encodings",
        "fct-signature": "EncodingName -\u003e [Header] -\u003e [Header]",
        "fct-source": "src/Network-HTTP-Encoding-Character.html#setCharacterEncoding",
        "fct-type": "function",
        "title": "setCharacterEncoding"
      },
      "index": {
        "description": "Sets the given character encoding name in the given header If there is no content type header in the header list it defaults to the text plain content type",
        "hierarchy": "Network HTTP Encoding Character",
        "module": "Network.HTTP.Encoding.Character",
        "name": "setCharacterEncoding",
        "normalized": "EncodingName-\u003e[Header]-\u003e[Header]",
        "package": "http-encodings",
        "partial": "Character Encoding",
        "signature": "EncodingName-\u003e[Header]-\u003e[Header]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Character.html#v:tryAsUTF8",
      "description": {
        "fct-descr": "\u003cp\u003eTries to decode a bytestring as UTF-8. Returns nothing if any\n illegal characters are encountered\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Encoding.Character",
        "fct-package": "http-encodings",
        "fct-signature": "ByteString -\u003e Maybe String",
        "fct-source": "src/Network-HTTP-Encoding-Character.html#tryAsUTF8",
        "fct-type": "function",
        "title": "tryAsUTF8"
      },
      "index": {
        "description": "Tries to decode bytestring as UTF-8 Returns nothing if any illegal characters are encountered",
        "hierarchy": "Network HTTP Encoding Character",
        "module": "Network.HTTP.Encoding.Character",
        "name": "tryAsUTF8",
        "normalized": "ByteString-\u003eMaybe String",
        "package": "http-encodings",
        "partial": "As UTF",
        "signature": "ByteString-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Content.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDeals with content encoding (compression) of message bodies:\n detection, update and compression/decompression\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.HTTP.Encoding.Content",
        "fct-package": "http-encodings",
        "fct-signature": "module",
        "fct-source": "src/Network-HTTP-Encoding-Content.html",
        "fct-type": "module",
        "title": "Content"
      },
      "index": {
        "description": "Deals with content encoding compression of message bodies detection update and compression decompression",
        "hierarchy": "Network HTTP Encoding Content",
        "module": "Network.HTTP.Encoding.Content",
        "name": "Content",
        "normalized": "",
        "package": "http-encodings",
        "partial": "Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Content.html#t:ContentEncoding",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents the content encoding, per the HTTP/1.1 standard.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Encoding.Content",
        "fct-package": "http-encodings",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Encoding-Content.html#ContentEncoding",
        "fct-type": "data",
        "title": "ContentEncoding"
      },
      "index": {
        "description": "Represents the content encoding per the HTTP standard",
        "hierarchy": "Network HTTP Encoding Content",
        "module": "Network.HTTP.Encoding.Content",
        "name": "ContentEncoding",
        "normalized": "",
        "package": "http-encodings",
        "partial": "Content Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Content.html#v:Compress",
      "description": {
        "fct-module": "Network.HTTP.Encoding.Content",
        "fct-package": "http-encodings",
        "fct-signature": "Compress",
        "fct-source": "src/Network-HTTP-Encoding-Content.html#ContentEncoding",
        "fct-type": "function",
        "title": "Compress"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Encoding Content",
        "module": "Network.HTTP.Encoding.Content",
        "name": "Compress",
        "normalized": "",
        "package": "http-encodings",
        "partial": "Compress",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Content.html#v:Deflate",
      "description": {
        "fct-module": "Network.HTTP.Encoding.Content",
        "fct-package": "http-encodings",
        "fct-signature": "Deflate",
        "fct-source": "src/Network-HTTP-Encoding-Content.html#ContentEncoding",
        "fct-type": "function",
        "title": "Deflate"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Encoding Content",
        "module": "Network.HTTP.Encoding.Content",
        "name": "Deflate",
        "normalized": "",
        "package": "http-encodings",
        "partial": "Deflate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Content.html#v:GZip",
      "description": {
        "fct-module": "Network.HTTP.Encoding.Content",
        "fct-package": "http-encodings",
        "fct-signature": "GZip",
        "fct-source": "src/Network-HTTP-Encoding-Content.html#ContentEncoding",
        "fct-type": "function",
        "title": "GZip"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Encoding Content",
        "module": "Network.HTTP.Encoding.Content",
        "name": "GZip",
        "normalized": "",
        "package": "http-encodings",
        "partial": "GZip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Content.html#v:IdentityCompression",
      "description": {
        "fct-module": "Network.HTTP.Encoding.Content",
        "fct-package": "http-encodings",
        "fct-signature": "IdentityCompression",
        "fct-source": "src/Network-HTTP-Encoding-Content.html#ContentEncoding",
        "fct-type": "function",
        "title": "IdentityCompression"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Encoding Content",
        "module": "Network.HTTP.Encoding.Content",
        "name": "IdentityCompression",
        "normalized": "",
        "package": "http-encodings",
        "partial": "Identity Compression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Content.html#v:compress",
      "description": {
        "fct-descr": "\u003cp\u003eCompresses a \u003ccode\u003eBytestring\u003c/code\u003e assuming a given content encoding. The\n Compress encoding (LZW algorithm) is not supported at this time.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Encoding.Content",
        "fct-package": "http-encodings",
        "fct-signature": "ContentEncoding -\u003e ByteString -\u003e Either EncodingError ByteString",
        "fct-source": "src/Network-HTTP-Encoding-Content.html#compress",
        "fct-type": "function",
        "title": "compress"
      },
      "index": {
        "description": "Compresses Bytestring assuming given content encoding The Compress encoding LZW algorithm is not supported at this time",
        "hierarchy": "Network HTTP Encoding Content",
        "module": "Network.HTTP.Encoding.Content",
        "name": "compress",
        "normalized": "ContentEncoding-\u003eByteString-\u003eEither EncodingError ByteString",
        "package": "http-encodings",
        "partial": "",
        "signature": "ContentEncoding-\u003eByteString-\u003eEither EncodingError ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Content.html#v:decompress",
      "description": {
        "fct-descr": "\u003cp\u003eDecompresses a \u003ccode\u003eBytestring\u003c/code\u003e assuming a given content encoding. The\n Compress encoding (LZW algorithm) is not supported at this time.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Encoding.Content",
        "fct-package": "http-encodings",
        "fct-signature": "ContentEncoding -\u003e ByteString -\u003e Either EncodingError ByteString",
        "fct-source": "src/Network-HTTP-Encoding-Content.html#decompress",
        "fct-type": "function",
        "title": "decompress"
      },
      "index": {
        "description": "Decompresses Bytestring assuming given content encoding The Compress encoding LZW algorithm is not supported at this time",
        "hierarchy": "Network HTTP Encoding Content",
        "module": "Network.HTTP.Encoding.Content",
        "name": "decompress",
        "normalized": "ContentEncoding-\u003eByteString-\u003eEither EncodingError ByteString",
        "package": "http-encodings",
        "partial": "",
        "signature": "ContentEncoding-\u003eByteString-\u003eEither EncodingError ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Content.html#v:getContentEncoding",
      "description": {
        "fct-descr": "\u003cp\u003eDetermines the content encoding from a list of headers. Defaults\n to \u003ccode\u003e\u003ca\u003eIdentityCompression\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Encoding.Content",
        "fct-package": "http-encodings",
        "fct-signature": "[Header] -\u003e ContentEncoding",
        "fct-source": "src/Network-HTTP-Encoding-Content.html#getContentEncoding",
        "fct-type": "function",
        "title": "getContentEncoding"
      },
      "index": {
        "description": "Determines the content encoding from list of headers Defaults to IdentityCompression",
        "hierarchy": "Network HTTP Encoding Content",
        "module": "Network.HTTP.Encoding.Content",
        "name": "getContentEncoding",
        "normalized": "[Header]-\u003eContentEncoding",
        "package": "http-encodings",
        "partial": "Content Encoding",
        "signature": "[Header]-\u003eContentEncoding"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Content.html#v:updateContentEncoding",
      "description": {
        "fct-descr": "\u003cp\u003eGiven the list of headers, updates content encoding to the\n specified.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Encoding.Content",
        "fct-package": "http-encodings",
        "fct-signature": "ContentEncoding -\u003e [Header] -\u003e [Header]",
        "fct-source": "src/Network-HTTP-Encoding-Content.html#updateContentEncoding",
        "fct-type": "function",
        "title": "updateContentEncoding"
      },
      "index": {
        "description": "Given the list of headers updates content encoding to the specified",
        "hierarchy": "Network HTTP Encoding Content",
        "module": "Network.HTTP.Encoding.Content",
        "name": "updateContentEncoding",
        "normalized": "ContentEncoding-\u003e[Header]-\u003e[Header]",
        "package": "http-encodings",
        "partial": "Content Encoding",
        "signature": "ContentEncoding-\u003e[Header]-\u003e[Header]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Error.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eErrors that may occur during decoding/encoding of HTTP message bodies\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.HTTP.Encoding.Error",
        "fct-package": "http-encodings",
        "fct-signature": "module",
        "fct-source": "src/Network-HTTP-Encoding-Error.html",
        "fct-type": "module",
        "title": "Error"
      },
      "index": {
        "description": "Errors that may occur during decoding encoding of HTTP message bodies",
        "hierarchy": "Network HTTP Encoding Error",
        "module": "Network.HTTP.Encoding.Error",
        "name": "Error",
        "normalized": "",
        "package": "http-encodings",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Error.html#t:ConversionError",
      "description": {
        "fct-module": "Network.HTTP.Encoding.Error",
        "fct-package": "http-encodings",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ConversionError"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Encoding Error",
        "module": "Network.HTTP.Encoding.Error",
        "name": "ConversionError",
        "normalized": "",
        "package": "http-encodings",
        "partial": "Conversion Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Error.html#t:EncodingError",
      "description": {
        "fct-descr": "\u003cp\u003eEncoding/Decoding error message\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Encoding.Error",
        "fct-package": "http-encodings",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Encoding-Error.html#EncodingError",
        "fct-type": "data",
        "title": "EncodingError"
      },
      "index": {
        "description": "Encoding Decoding error message",
        "hierarchy": "Network HTTP Encoding Error",
        "module": "Network.HTTP.Encoding.Error",
        "name": "EncodingError",
        "normalized": "",
        "package": "http-encodings",
        "partial": "Encoding Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Error.html#v:CannotDetermineCharacterEncoding",
      "description": {
        "fct-descr": "\u003cp\u003eCharacter decoding is not specified and\n cannot be guessed\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Encoding.Error",
        "fct-package": "http-encodings",
        "fct-signature": "CannotDetermineCharacterEncoding",
        "fct-source": "src/Network-HTTP-Encoding-Error.html#EncodingError",
        "fct-type": "function",
        "title": "CannotDetermineCharacterEncoding"
      },
      "index": {
        "description": "Character decoding is not specified and cannot be guessed",
        "hierarchy": "Network HTTP Encoding Error",
        "module": "Network.HTTP.Encoding.Error",
        "name": "CannotDetermineCharacterEncoding",
        "normalized": "",
        "package": "http-encodings",
        "partial": "Cannot Determine Character Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Error.html#v:GenericError",
      "description": {
        "fct-descr": "\u003cp\u003eOther error\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Encoding.Error",
        "fct-package": "http-encodings",
        "fct-signature": "GenericError String",
        "fct-source": "src/Network-HTTP-Encoding-Error.html#EncodingError",
        "fct-type": "function",
        "title": "GenericError"
      },
      "index": {
        "description": "Other error",
        "hierarchy": "Network HTTP Encoding Error",
        "module": "Network.HTTP.Encoding.Error",
        "name": "GenericError",
        "normalized": "",
        "package": "http-encodings",
        "partial": "Generic Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Error.html#v:IConvError",
      "description": {
        "fct-descr": "\u003cp\u003eIConv conversion error\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Encoding.Error",
        "fct-package": "http-encodings",
        "fct-signature": "IConvError ConversionError",
        "fct-source": "src/Network-HTTP-Encoding-Error.html#EncodingError",
        "fct-type": "function",
        "title": "IConvError"
      },
      "index": {
        "description": "IConv conversion error",
        "hierarchy": "Network HTTP Encoding Error",
        "module": "Network.HTTP.Encoding.Error",
        "name": "IConvError",
        "normalized": "",
        "package": "http-encodings",
        "partial": "IConv Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding-Error.html#v:UnsupportedCompressionAlgorithm",
      "description": {
        "fct-descr": "\u003cp\u003eA compression algorithm is not supported (LZW)\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Encoding.Error",
        "fct-package": "http-encodings",
        "fct-signature": "UnsupportedCompressionAlgorithm",
        "fct-source": "src/Network-HTTP-Encoding-Error.html#EncodingError",
        "fct-type": "function",
        "title": "UnsupportedCompressionAlgorithm"
      },
      "index": {
        "description": "compression algorithm is not supported LZW",
        "hierarchy": "Network HTTP Encoding Error",
        "module": "Network.HTTP.Encoding.Error",
        "name": "UnsupportedCompressionAlgorithm",
        "normalized": "",
        "package": "http-encodings",
        "partial": "Unsupported Compression Algorithm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEncoding and decoding of bodies and complete HTTP messages. See\n package \u003ccode\u003ejespresso\u003c/code\u003e for an example of usage.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.HTTP.Encoding",
        "fct-package": "http-encodings",
        "fct-signature": "module",
        "fct-source": "src/Network-HTTP-Encoding.html",
        "fct-type": "module",
        "title": "Encoding"
      },
      "index": {
        "description": "Encoding and decoding of bodies and complete HTTP messages See package jespresso for an example of usage",
        "hierarchy": "Network HTTP Encoding",
        "module": "Network.HTTP.Encoding",
        "name": "Encoding",
        "normalized": "",
        "package": "http-encodings",
        "partial": "Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding.html#t:DecodingResult",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of decoding a message body\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Encoding",
        "fct-package": "http-encodings",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Encoding.html#DecodingResult",
        "fct-type": "data",
        "title": "DecodingResult"
      },
      "index": {
        "description": "The result of decoding message body",
        "hierarchy": "Network HTTP Encoding",
        "module": "Network.HTTP.Encoding",
        "name": "DecodingResult",
        "normalized": "",
        "package": "http-encodings",
        "partial": "Decoding Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding.html#t:EncodingError",
      "description": {
        "fct-descr": "\u003cp\u003eEncoding/Decoding error message\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Encoding",
        "fct-package": "http-encodings",
        "fct-signature": "data",
        "fct-source": "src/Network-HTTP-Encoding-Error.html#EncodingError",
        "fct-type": "data",
        "title": "EncodingError"
      },
      "index": {
        "description": "Encoding Decoding error message",
        "hierarchy": "Network HTTP Encoding",
        "module": "Network.HTTP.Encoding",
        "name": "EncodingError",
        "normalized": "",
        "package": "http-encodings",
        "partial": "Encoding Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding.html#t:HasBody",
      "description": {
        "fct-module": "Network.HTTP.Encoding",
        "fct-package": "http-encodings",
        "fct-signature": "class",
        "fct-source": "src/Network-HTTP-Encoding.html#HasBody",
        "fct-type": "class",
        "title": "HasBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Encoding",
        "module": "Network.HTTP.Encoding",
        "name": "HasBody",
        "normalized": "",
        "package": "http-encodings",
        "partial": "Has Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding.html#v:DecodingResult",
      "description": {
        "fct-module": "Network.HTTP.Encoding",
        "fct-package": "http-encodings",
        "fct-signature": "DecodingResult",
        "fct-source": "src/Network-HTTP-Encoding.html#DecodingResult",
        "fct-type": "function",
        "title": "DecodingResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Encoding",
        "module": "Network.HTTP.Encoding",
        "name": "DecodingResult",
        "normalized": "",
        "package": "http-encodings",
        "partial": "Decoding Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eDecode the body of an HTTP message and return the original\n encoding name and the same message with decoded body (as\n UTF8-encoded string) and updated character and content encoding\n headers.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Encoding",
        "fct-package": "http-encodings",
        "fct-signature": "m ByteString -\u003e Either EncodingError (String, m String)",
        "fct-source": "src/Network-HTTP-Encoding.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Decode the body of an HTTP message and return the original encoding name and the same message with decoded body as UTF8-encoded string and updated character and content encoding headers",
        "hierarchy": "Network HTTP Encoding",
        "module": "Network.HTTP.Encoding",
        "name": "decode",
        "normalized": "a ByteString-\u003eEither EncodingError(String,a String)",
        "package": "http-encodings",
        "partial": "",
        "signature": "m ByteString-\u003eEither EncodingError(String,m String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding.html#v:decodeBody",
      "description": {
        "fct-descr": "\u003cp\u003eDecodes and decompresses the response or request body using the\n information in the headers and content and possibly returns the\n body in UTF8\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Encoding",
        "fct-package": "http-encodings",
        "fct-signature": "r ByteString -\u003e Either EncodingError DecodingResult",
        "fct-source": "src/Network-HTTP-Encoding.html#decodeBody",
        "fct-type": "function",
        "title": "decodeBody"
      },
      "index": {
        "description": "Decodes and decompresses the response or request body using the information in the headers and content and possibly returns the body in UTF8",
        "hierarchy": "Network HTTP Encoding",
        "module": "Network.HTTP.Encoding",
        "name": "decodeBody",
        "normalized": "a ByteString-\u003eEither EncodingError DecodingResult",
        "package": "http-encodings",
        "partial": "Body",
        "signature": "r ByteString-\u003eEither EncodingError DecodingResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding.html#v:decodedBody",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Encoding",
        "fct-package": "http-encodings",
        "fct-signature": "String",
        "fct-source": "src/Network-HTTP-Encoding.html#DecodingResult",
        "fct-type": "function",
        "title": "decodedBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Encoding",
        "module": "Network.HTTP.Encoding",
        "name": "decodedBody",
        "normalized": "",
        "package": "http-encodings",
        "partial": "Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eEncode the UTF8-encoded body of an HTTP message with the provided\n encoding.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Encoding",
        "fct-package": "http-encodings",
        "fct-signature": "EncodingName -\u003e m String -\u003e Either EncodingError (m ByteString)",
        "fct-source": "src/Network-HTTP-Encoding.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Encode the UTF8-encoded body of an HTTP message with the provided encoding",
        "hierarchy": "Network HTTP Encoding",
        "module": "Network.HTTP.Encoding",
        "name": "encode",
        "normalized": "EncodingName-\u003ea String-\u003eEither EncodingError(a ByteString)",
        "package": "http-encodings",
        "partial": "",
        "signature": "EncodingName-\u003em String-\u003eEither EncodingError(m ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding.html#v:encodeBody",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a haskell UTF8-encoded string and produces a stream, encoded\n and compressed\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Encoding",
        "fct-package": "http-encodings",
        "fct-signature": "EncodingName -\u003e ContentEncoding -\u003e String -\u003e Either EncodingError ByteString",
        "fct-source": "src/Network-HTTP-Encoding.html#encodeBody",
        "fct-type": "function",
        "title": "encodeBody"
      },
      "index": {
        "description": "Takes haskell UTF8-encoded string and produces stream encoded and compressed",
        "hierarchy": "Network HTTP Encoding",
        "module": "Network.HTTP.Encoding",
        "name": "encodeBody",
        "normalized": "EncodingName-\u003eContentEncoding-\u003eString-\u003eEither EncodingError ByteString",
        "package": "http-encodings",
        "partial": "Body",
        "signature": "EncodingName-\u003eContentEncoding-\u003eString-\u003eEither EncodingError ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding.html#v:getBody",
      "description": {
        "fct-module": "Network.HTTP.Encoding",
        "fct-package": "http-encodings",
        "fct-signature": "a b -\u003e b",
        "fct-source": "src/Network-HTTP-Encoding.html#getBody",
        "fct-type": "method",
        "title": "getBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Encoding",
        "module": "Network.HTTP.Encoding",
        "name": "getBody",
        "normalized": "a b-\u003eb",
        "package": "http-encodings",
        "partial": "Body",
        "signature": "a b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding.html#v:originalEncoding",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.HTTP.Encoding",
        "fct-package": "http-encodings",
        "fct-signature": "EncodingName",
        "fct-source": "src/Network-HTTP-Encoding.html#DecodingResult",
        "fct-type": "function",
        "title": "originalEncoding"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Encoding",
        "module": "Network.HTTP.Encoding",
        "name": "originalEncoding",
        "normalized": "",
        "package": "http-encodings",
        "partial": "Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding.html#v:setBody",
      "description": {
        "fct-module": "Network.HTTP.Encoding",
        "fct-package": "http-encodings",
        "fct-signature": "c -\u003e a b -\u003e a c",
        "fct-source": "src/Network-HTTP-Encoding.html#setBody",
        "fct-type": "method",
        "title": "setBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Network HTTP Encoding",
        "module": "Network.HTTP.Encoding",
        "name": "setBody",
        "normalized": "a-\u003eb c-\u003eb a",
        "package": "http-encodings",
        "partial": "Body",
        "signature": "c-\u003ea b-\u003ea c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding.html#v:withDecodedBody",
      "description": {
        "fct-descr": "\u003cp\u003eAllows to lift a transformation function operating on decoded\n (UTF-8) bodies to bodies of requests with encoded (and compressed)\n bodies.\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Encoding",
        "fct-package": "http-encodings",
        "fct-signature": "(String -\u003e String) -\u003e r ByteString -\u003e Either EncodingError (r ByteString)",
        "fct-source": "src/Network-HTTP-Encoding.html#withDecodedBody",
        "fct-type": "function",
        "title": "withDecodedBody"
      },
      "index": {
        "description": "Allows to lift transformation function operating on decoded UTF-8 bodies to bodies of requests with encoded and compressed bodies",
        "hierarchy": "Network HTTP Encoding",
        "module": "Network.HTTP.Encoding",
        "name": "withDecodedBody",
        "normalized": "(String-\u003eString)-\u003ea ByteString-\u003eEither EncodingError(a ByteString)",
        "package": "http-encodings",
        "partial": "Decoded Body",
        "signature": "(String-\u003eString)-\u003er ByteString-\u003eEither EncodingError(r ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/http-encodings/docs/Network-HTTP-Encoding.html#v:withDecodedBodyM",
      "description": {
        "fct-descr": "\u003cp\u003eA monadic version of \u003ccode\u003ewithDecodeBody\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.HTTP.Encoding",
        "fct-package": "http-encodings",
        "fct-signature": "(String -\u003e m String) -\u003e r ByteString -\u003e m (Either EncodingError (r ByteString))",
        "fct-source": "src/Network-HTTP-Encoding.html#withDecodedBodyM",
        "fct-type": "function",
        "title": "withDecodedBodyM"
      },
      "index": {
        "description": "monadic version of withDecodeBody",
        "hierarchy": "Network HTTP Encoding",
        "module": "Network.HTTP.Encoding",
        "name": "withDecodedBodyM",
        "normalized": "(String-\u003ea String)-\u003eb ByteString-\u003ea(Either EncodingError(b ByteString))",
        "package": "http-encodings",
        "partial": "Decoded Body",
        "signature": "(String-\u003em String)-\u003er ByteString-\u003em(Either EncodingError(r ByteString))"
      }
    }
  }
]