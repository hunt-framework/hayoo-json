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
        "word": "json-b"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Escape",
          "name": "Escape",
          "package": "json-b",
          "source": "src/Text-JSON-Escape.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text JSON Escape",
          "module": "Text.JSON.Escape",
          "name": "Escape",
          "package": "json-b",
          "partial": "Escape",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSON-Escape.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of JSON escapable text. The solidus (\u003ccode\u003e/\u003c/code\u003e) is always escaped, as are\n    all ASCII control characters. Non-ASCII control characters and Unicode\n    printable characters above ASCII are left as is.\n\u003c/p\u003e",
          "module": "Text.JSON.Escape",
          "name": "Escape",
          "package": "json-b",
          "source": "src/Text-JSON-Escape.html#Escape",
          "type": "class"
        },
        "index": {
          "description": "Class of JSON escapable text The solidus is always escaped as are all ASCII control characters Non-ASCII control characters and Unicode printable characters above ASCII are left as is",
          "hierarchy": "Text JSON Escape",
          "module": "Text.JSON.Escape",
          "name": "Escape",
          "package": "json-b",
          "partial": "Escape",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSON-Escape.html#t:Escape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscapes an individual character for embedding in a JSON string.\n\u003c/p\u003e",
          "module": "Text.JSON.Escape",
          "name": "esc",
          "package": "json-b",
          "signature": "Char -\u003e String",
          "source": "src/Text-JSON-Escape.html#esc",
          "type": "function"
        },
        "index": {
          "description": "Escapes an individual character for embedding in JSON string",
          "hierarchy": "Text JSON Escape",
          "module": "Text.JSON.Escape",
          "name": "esc",
          "normalized": "Char-\u003eString",
          "package": "json-b",
          "signature": "Char-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSON-Escape.html#v:esc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSON.Escape",
          "name": "escape",
          "package": "json-b",
          "signature": "t -\u003e t",
          "source": "src/Text-JSON-Escape.html#escape",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text JSON Escape",
          "module": "Text.JSON.Escape",
          "name": "escape",
          "normalized": "a-\u003ea",
          "package": "json-b",
          "signature": "t-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSON-Escape.html#v:escape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParse UTF-8 JSON into native Haskell types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.JSONb.Decode",
          "name": "Decode",
          "package": "json-b",
          "source": "src/Text-JSONb-Decode.html",
          "type": "module"
        },
        "index": {
          "description": "Parse UTF-8 JSON into native Haskell types",
          "hierarchy": "Text JSONb Decode",
          "module": "Text.JSONb.Decode",
          "name": "Decode",
          "package": "json-b",
          "partial": "Decode",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Decode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a JSON array.\n\u003c/p\u003e",
          "module": "Text.JSONb.Decode",
          "name": "array",
          "package": "json-b",
          "signature": "Parser JSON",
          "source": "src/Text-JSONb-Decode.html#array",
          "type": "function"
        },
        "index": {
          "description": "Parse JSON array",
          "hierarchy": "Text JSONb Decode",
          "module": "Text.JSONb.Decode",
          "name": "array",
          "package": "json-b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Decode.html#v:array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a JSON Boolean literal.\n\u003c/p\u003e",
          "module": "Text.JSONb.Decode",
          "name": "boolean",
          "package": "json-b",
          "signature": "Parser JSON",
          "source": "src/Text-JSONb-Decode.html#boolean",
          "type": "function"
        },
        "index": {
          "description": "Parse JSON Boolean literal",
          "hierarchy": "Text JSONb Decode",
          "module": "Text.JSONb.Decode",
          "name": "boolean",
          "package": "json-b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Decode.html#v:boolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit out the first parseable JSON literal from the input, returning\n    the result of the attempt along with the remainder of the input or the\n    whole input if not parseable item was discovered.\n\u003c/p\u003e",
          "module": "[\"Text.JSONb.Decode\",\"Text.JSONb\"]",
          "name": "break",
          "package": "json-b",
          "signature": "ByteString -\u003e (Either ParseError JSON, ByteString)",
          "source": "src/Text-JSONb-Decode.html#break",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Decode.html#v:break\",\"http://hackage.haskell.org/package/json-b/docs/Text-JSONb.html#v:break\"]"
        },
        "index": {
          "description": "Split out the first parseable JSON literal from the input returning the result of the attempt along with the remainder of the input or the whole input if not parseable item was discovered",
          "hierarchy": "Text JSONb Decode",
          "module": "Text.JSONb.Decode",
          "name": "break",
          "normalized": "ByteString-\u003e(Either ParseError JSON,ByteString)",
          "package": "json-b",
          "signature": "ByteString-\u003e(Either ParseError JSON,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Decode.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterpret a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e as any JSON literal.\n\u003c/p\u003e",
          "module": "[\"Text.JSONb.Decode\",\"Text.JSONb\"]",
          "name": "decode",
          "package": "json-b",
          "signature": "ByteString -\u003e Either (ParseError, ByteString) JSON",
          "source": "src/Text-JSONb-Decode.html#decode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Decode.html#v:decode\",\"http://hackage.haskell.org/package/json-b/docs/Text-JSONb.html#v:decode\"]"
        },
        "index": {
          "description": "Interpret ByteString as any JSON literal",
          "hierarchy": "Text JSONb Decode",
          "module": "Text.JSONb.Decode",
          "name": "decode",
          "normalized": "ByteString-\u003eEither(ParseError,ByteString)JSON",
          "package": "json-b",
          "signature": "ByteString-\u003eEither(ParseError,ByteString)JSON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Decode.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to parse any JSON literal.\n\u003c/p\u003e",
          "module": "Text.JSONb.Decode",
          "name": "json",
          "package": "json-b",
          "signature": "Parser JSON",
          "source": "src/Text-JSONb-Decode.html#json",
          "type": "function"
        },
        "index": {
          "description": "Tries to parse any JSON literal",
          "hierarchy": "Text JSONb Decode",
          "module": "Text.JSONb.Decode",
          "name": "json",
          "package": "json-b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Decode.html#v:json"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a JSON null literal.\n\u003c/p\u003e",
          "module": "Text.JSONb.Decode",
          "name": "null",
          "package": "json-b",
          "signature": "Parser JSON",
          "source": "src/Text-JSONb-Decode.html#null",
          "type": "function"
        },
        "index": {
          "description": "Parse JSON null literal",
          "hierarchy": "Text JSONb Decode",
          "module": "Text.JSONb.Decode",
          "name": "null",
          "package": "json-b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Decode.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a numeric literal to a \u003ccode\u003eRational\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.JSONb.Decode",
          "name": "number",
          "package": "json-b",
          "signature": "Parser JSON",
          "source": "src/Text-JSONb-Decode.html#number",
          "type": "function"
        },
        "index": {
          "description": "Parses numeric literal to Rational",
          "hierarchy": "Text JSONb Decode",
          "module": "Text.JSONb.Decode",
          "name": "number",
          "package": "json-b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Decode.html#v:number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a JSON object (dictionary).\n\u003c/p\u003e",
          "module": "Text.JSONb.Decode",
          "name": "object",
          "package": "json-b",
          "signature": "Parser JSON",
          "source": "src/Text-JSONb-Decode.html#object",
          "type": "function"
        },
        "index": {
          "description": "Parse JSON object dictionary",
          "hierarchy": "Text JSONb Decode",
          "module": "Text.JSONb.Decode",
          "name": "object",
          "package": "json-b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Decode.html#v:object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e in to a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.JSONb.Decode",
          "name": "strictify",
          "package": "json-b",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Text-JSONb-Decode.html#strictify",
          "type": "function"
        },
        "index": {
          "description": "Turn lazy ByteString in to strict ByteString",
          "hierarchy": "Text JSONb Decode",
          "module": "Text.JSONb.Decode",
          "name": "strictify",
          "normalized": "ByteString-\u003eByteString",
          "package": "json-b",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Decode.html#v:strictify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a string literal, unescaping as it goes.\n\u003c/p\u003e",
          "module": "Text.JSONb.Decode",
          "name": "string",
          "package": "json-b",
          "signature": "Parser JSON",
          "source": "src/Text-JSONb-Decode.html#string",
          "type": "function"
        },
        "index": {
          "description": "Parses string literal unescaping as it goes",
          "hierarchy": "Text JSONb Decode",
          "module": "Text.JSONb.Decode",
          "name": "string",
          "package": "json-b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Decode.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a JSON string literal and unescape it but don't wrap it in a string\n    constructor (we might wrap it as a dict key instead).\n\u003c/p\u003e",
          "module": "Text.JSONb.Decode",
          "name": "string_literal",
          "package": "json-b",
          "signature": "Parser ByteString",
          "source": "src/Text-JSONb-Decode.html#string_literal",
          "type": "function"
        },
        "index": {
          "description": "Parse JSON string literal and unescape it but don wrap it in string constructor we might wrap it as dict key instead",
          "hierarchy": "Text JSONb Decode",
          "module": "Text.JSONb.Decode",
          "name": "string_literal",
          "package": "json-b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Decode.html#v:string_literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePer RFC 4627, section 2 \u003ca\u003eJSON Grammar\u003c/a\u003e, only a limited set of whitespace\n    characters actually count as insignificant whitespace. \n\u003c/p\u003e",
          "module": "Text.JSONb.Decode",
          "name": "whitespace",
          "package": "json-b",
          "signature": "Parser ()",
          "source": "src/Text-JSONb-Decode.html#whitespace",
          "type": "function"
        },
        "index": {
          "description": "Per RFC section JSON Grammar only limited set of whitespace characters actually count as insignificant whitespace",
          "hierarchy": "Text JSONb Decode",
          "module": "Text.JSONb.Decode",
          "name": "whitespace",
          "normalized": "Parser()",
          "package": "json-b",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Decode.html#v:whitespace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSONb.Encode",
          "name": "Encode",
          "package": "json-b",
          "source": "src/Text-JSONb-Encode.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text JSONb Encode",
          "module": "Text.JSONb.Encode",
          "name": "Encode",
          "package": "json-b",
          "partial": "Encode",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Encode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStyle of serialization. Compact is the only one that is implemented at\n    present.\n\u003c/p\u003e",
          "module": "Text.JSONb.Encode",
          "name": "Style",
          "package": "json-b",
          "source": "src/Text-JSONb-Encode.html#Style",
          "type": "data"
        },
        "index": {
          "description": "Style of serialization Compact is the only one that is implemented at present",
          "hierarchy": "Text JSONb Encode",
          "module": "Text.JSONb.Encode",
          "name": "Style",
          "package": "json-b",
          "partial": "Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Encode.html#t:Style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.JSONb.Encode\",\"Text.JSONb\"]",
          "name": "Compact",
          "package": "json-b",
          "signature": "Compact",
          "source": "src/Text-JSONb-Encode.html#Style",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Encode.html#v:Compact\",\"http://hackage.haskell.org/package/json-b/docs/Text-JSONb.html#v:Compact\"]"
        },
        "index": {
          "hierarchy": "Text JSONb Encode",
          "module": "Text.JSONb.Encode",
          "name": "Compact",
          "package": "json-b",
          "partial": "Compact",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Encode.html#v:Compact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode \u003ccode\u003e\u003ca\u003eJSON\u003c/a\u003e\u003c/code\u003e as a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. All strings are treated as\n    UTF-8; ASCII control characters are escaped and UTF-8 multi-char sequences\n    are simply passed through.\n\u003c/p\u003e",
          "module": "[\"Text.JSONb.Encode\",\"Text.JSONb\"]",
          "name": "encode",
          "package": "json-b",
          "signature": "Style -\u003e JSON -\u003e ByteString",
          "source": "src/Text-JSONb-Encode.html#encode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Encode.html#v:encode\",\"http://hackage.haskell.org/package/json-b/docs/Text-JSONb.html#v:encode\"]"
        },
        "index": {
          "description": "Encode JSON as lazy ByteString All strings are treated as UTF-8 ASCII control characters are escaped and UTF-8 multi-char sequences are simply passed through",
          "hierarchy": "Text JSONb Encode",
          "module": "Text.JSONb.Encode",
          "name": "encode",
          "normalized": "Style-\u003eJSON-\u003eByteString",
          "package": "json-b",
          "signature": "Style-\u003eJSON-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Encode.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode \u003ccode\u003e\u003ca\u003eJSON\u003c/a\u003e\u003c/code\u003e as a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. All strings are treated as UTF-8;\n    ASCII control characters are escaped and UTF-8 multi-char sequences are\n    simply passed through.\n\u003c/p\u003e",
          "module": "Text.JSONb.Encode",
          "name": "encode'",
          "package": "json-b",
          "signature": "Style -\u003e JSON -\u003e ByteString",
          "source": "src/Text-JSONb-Encode.html#encode%27",
          "type": "function"
        },
        "index": {
          "description": "Encode JSON as strict ByteString All strings are treated as UTF-8 ASCII control characters are escaped and UTF-8 multi-char sequences are simply passed through",
          "hierarchy": "Text JSONb Encode",
          "module": "Text.JSONb.Encode",
          "name": "encode'",
          "normalized": "Style-\u003eJSON-\u003eByteString",
          "package": "json-b",
          "signature": "Style-\u003eJSON-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Encode.html#v:encode-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscape a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e representing a JSON string and wrap it in quote\n    marks.\n\u003c/p\u003e",
          "module": "Text.JSONb.Encode",
          "name": "stringify",
          "package": "json-b",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Text-JSONb-Encode.html#stringify",
          "type": "function"
        },
        "index": {
          "description": "Escape ByteString representing JSON string and wrap it in quote marks",
          "hierarchy": "Text JSONb Encode",
          "module": "Text.JSONb.Encode",
          "name": "stringify",
          "normalized": "ByteString-\u003eByteString",
          "package": "json-b",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Encode.html#v:stringify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSONb.Schema.Display",
          "name": "Display",
          "package": "json-b",
          "source": "src/Text-JSONb-Schema-Display.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text JSONb Schema Display",
          "module": "Text.JSONb.Schema.Display",
          "name": "Display",
          "package": "json-b",
          "partial": "Display",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Schema-Display.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSONb.Schema.Display",
          "name": "Display",
          "package": "json-b",
          "source": "src/Text-JSONb-Schema-Display.html#Display",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text JSONb Schema Display",
          "module": "Text.JSONb.Schema.Display",
          "name": "Display",
          "package": "json-b",
          "partial": "Display",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Schema-Display.html#t:Display"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvide a formatted \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e for the displayable.\n\u003c/p\u003e",
          "module": "Text.JSONb.Schema.Display",
          "name": "bytes",
          "package": "json-b",
          "signature": "t -\u003e ByteString",
          "source": "src/Text-JSONb-Schema-Display.html#bytes",
          "type": "method"
        },
        "index": {
          "description": "Provide formatted ByteString for the displayable",
          "hierarchy": "Text JSONb Schema Display",
          "module": "Text.JSONb.Schema.Display",
          "name": "bytes",
          "normalized": "a-\u003eByteString",
          "package": "json-b",
          "signature": "t-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Schema-Display.html#v:bytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSONb.Schema",
          "name": "Schema",
          "package": "json-b",
          "source": "src/Text-JSONb-Schema.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text JSONb Schema",
          "module": "Text.JSONb.Schema",
          "name": "Schema",
          "package": "json-b",
          "partial": "Schema",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Schema.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA well-ordered semigroup has a minimal element and an associative\n    operation. These are used to provide measures for schema. At present, we\n    allow three measures: whether there is one or more of a schema (measured\n    with '()'), whether there is one or more than one of an item (measured with\n    \u003ccode\u003e\u003ca\u003eOneMany\u003c/a\u003e\u003c/code\u003e) and positive counts of items (measured with \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Text.JSONb.Schema",
          "name": "Counter",
          "package": "json-b",
          "source": "src/Text-JSONb-Schema.html#Counter",
          "type": "class"
        },
        "index": {
          "description": "well-ordered semigroup has minimal element and an associative operation These are used to provide measures for schema At present we allow three measures whether there is one or more of schema measured with whether there is one or more than one of an item measured with OneMany and positive counts of items measured with Word",
          "hierarchy": "Text JSONb Schema",
          "module": "Text.JSONb.Schema",
          "name": "Counter",
          "package": "json-b",
          "partial": "Counter",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Schema.html#t:Counter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSONb.Schema",
          "name": "Elements",
          "package": "json-b",
          "source": "src/Text-JSONb-Schema.html#Elements",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text JSONb Schema",
          "module": "Text.JSONb.Schema",
          "name": "Elements",
          "package": "json-b",
          "partial": "Elements",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Schema.html#t:Elements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSONb.Schema",
          "name": "OneMany",
          "package": "json-b",
          "source": "src/Text-JSONb-Schema.html#OneMany",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text JSONb Schema",
          "module": "Text.JSONb.Schema",
          "name": "OneMany",
          "package": "json-b",
          "partial": "One Many",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Schema.html#t:OneMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSONb.Schema",
          "name": "Props",
          "package": "json-b",
          "source": "src/Text-JSONb-Schema.html#Props",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text JSONb Schema",
          "module": "Text.JSONb.Schema",
          "name": "Props",
          "package": "json-b",
          "partial": "Props",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Schema.html#t:Props"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of JSON schemas. We treat the atomic types simply whereas objects\n    and arrays are treated specially.\n\u003c/p\u003e\u003cp\u003eObjects are treated as maps of keys to sets of schema types. Say a certain\n    type of object sometimes has a string at a certain key and sometimes has a\n    null at that key; we should merge them and say the schema of that key is a\n    union of string and null.\n\u003c/p\u003e\u003cp\u003eArrays admit measure in the sense of how many elements there are of a\n    certain kind. We support three measures at present: any, one or more and\n    individual counts. We expect the \u003ca\u003eany\u003c/a\u003e measure to prevail practice. Arrays\n    are also ordered; so one can distinguish an array that interleaves strings\n    and ints from one that is all strings and then all ints.\n\u003c/p\u003e",
          "module": "Text.JSONb.Schema",
          "name": "Schema",
          "package": "json-b",
          "source": "src/Text-JSONb-Schema.html#Schema",
          "type": "data"
        },
        "index": {
          "description": "The type of JSON schemas We treat the atomic types simply whereas objects and arrays are treated specially Objects are treated as maps of keys to sets of schema types Say certain type of object sometimes has string at certain key and sometimes has null at that key we should merge them and say the schema of that key is union of string and null Arrays admit measure in the sense of how many elements there are of certain kind We support three measures at present any one or more and individual counts We expect the any measure to prevail practice Arrays are also ordered so one can distinguish an array that interleaves strings and ints from one that is all strings and then all ints",
          "hierarchy": "Text JSONb Schema",
          "module": "Text.JSONb.Schema",
          "name": "Schema",
          "package": "json-b",
          "partial": "Schema",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Schema.html#t:Schema"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSONb.Schema",
          "name": "Arr",
          "package": "json-b",
          "signature": "Arr (Elements counter)",
          "source": "src/Text-JSONb-Schema.html#Schema",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSONb Schema",
          "module": "Text.JSONb.Schema",
          "name": "Arr",
          "package": "json-b",
          "partial": "Arr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Schema.html#v:Arr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSONb.Schema",
          "name": "Bool",
          "package": "json-b",
          "signature": "Bool",
          "source": "src/Text-JSONb-Schema.html#Schema",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSONb Schema",
          "module": "Text.JSONb.Schema",
          "name": "Bool",
          "package": "json-b",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Schema.html#v:Bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSONb.Schema",
          "name": "Elements",
          "package": "json-b",
          "signature": "Elements [(counter, Schema counter)]",
          "source": "src/Text-JSONb-Schema.html#Elements",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSONb Schema",
          "module": "Text.JSONb.Schema",
          "name": "Elements",
          "normalized": "Elements[(a,Schema a)]",
          "package": "json-b",
          "partial": "Elements",
          "signature": "Elements[(counter,Schema counter)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Schema.html#v:Elements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.JSONb.Schema\",\"Text.JSONb\"]",
          "name": "Many",
          "package": "json-b",
          "signature": "Many",
          "source": "src/Text-JSONb-Schema.html#OneMany",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Schema.html#v:Many\",\"http://hackage.haskell.org/package/json-b/docs/Text-JSONb.html#v:Many\"]"
        },
        "index": {
          "hierarchy": "Text JSONb Schema",
          "module": "Text.JSONb.Schema",
          "name": "Many",
          "package": "json-b",
          "partial": "Many",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Schema.html#v:Many"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSONb.Schema",
          "name": "Null",
          "package": "json-b",
          "signature": "Null",
          "source": "src/Text-JSONb-Schema.html#Schema",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSONb Schema",
          "module": "Text.JSONb.Schema",
          "name": "Null",
          "package": "json-b",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Schema.html#v:Null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSONb.Schema",
          "name": "Num",
          "package": "json-b",
          "signature": "Num",
          "source": "src/Text-JSONb-Schema.html#Schema",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSONb Schema",
          "module": "Text.JSONb.Schema",
          "name": "Num",
          "package": "json-b",
          "partial": "Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Schema.html#v:Num"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSONb.Schema",
          "name": "Obj",
          "package": "json-b",
          "signature": "Obj (Props counter)",
          "source": "src/Text-JSONb-Schema.html#Schema",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSONb Schema",
          "module": "Text.JSONb.Schema",
          "name": "Obj",
          "package": "json-b",
          "partial": "Obj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Schema.html#v:Obj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.JSONb.Schema\",\"Text.JSONb\"]",
          "name": "One",
          "package": "json-b",
          "signature": "One",
          "source": "src/Text-JSONb-Schema.html#OneMany",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Schema.html#v:One\",\"http://hackage.haskell.org/package/json-b/docs/Text-JSONb.html#v:One\"]"
        },
        "index": {
          "hierarchy": "Text JSONb Schema",
          "module": "Text.JSONb.Schema",
          "name": "One",
          "package": "json-b",
          "partial": "One",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Schema.html#v:One"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSONb.Schema",
          "name": "Props",
          "package": "json-b",
          "signature": "Props (Trie (Set (Schema counter)))",
          "source": "src/Text-JSONb-Schema.html#Props",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSONb Schema",
          "module": "Text.JSONb.Schema",
          "name": "Props",
          "package": "json-b",
          "partial": "Props",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Schema.html#v:Props"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSONb.Schema",
          "name": "Str",
          "package": "json-b",
          "signature": "Str",
          "source": "src/Text-JSONb-Schema.html#Schema",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSONb Schema",
          "module": "Text.JSONb.Schema",
          "name": "Str",
          "package": "json-b",
          "partial": "Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Schema.html#v:Str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSONb.Schema",
          "name": "bottom",
          "package": "json-b",
          "signature": "t",
          "source": "src/Text-JSONb-Schema.html#bottom",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text JSONb Schema",
          "module": "Text.JSONb.Schema",
          "name": "bottom",
          "package": "json-b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Schema.html#v:bottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollate a list of counted schemas. Alike counted schemas that are adjacent\n    are replaced by a counted schema with an incremented counter. This\n    operation is mutually recursive with \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e, in order to merge comaptible\n    object definitions before collating.\n\u003c/p\u003e",
          "module": "Text.JSONb.Schema",
          "name": "collate",
          "package": "json-b",
          "signature": "(counter, Schema counter') -\u003e [(counter, Schema counter')] -\u003e [(counter, Schema counter')]",
          "source": "src/Text-JSONb-Schema.html#collate",
          "type": "function"
        },
        "index": {
          "description": "Collate list of counted schemas Alike counted schemas that are adjacent are replaced by counted schema with an incremented counter This operation is mutually recursive with merge in order to merge comaptible object definitions before collating",
          "hierarchy": "Text JSONb Schema",
          "module": "Text.JSONb.Schema",
          "name": "collate",
          "normalized": "(a,Schema b)-\u003e[(a,Schema b)]-\u003e[(a,Schema b)]",
          "package": "json-b",
          "signature": "(counter,Schema counter')-\u003e[(counter,Schema counter')]-\u003e[(counter,Schema counter')]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Schema.html#v:collate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSONb.Schema",
          "name": "match",
          "package": "json-b",
          "signature": "Props counter -\u003e Props counter -\u003e Bool",
          "source": "src/Text-JSONb-Schema.html#match",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSONb Schema",
          "module": "Text.JSONb.Schema",
          "name": "match",
          "normalized": "Props a-\u003eProps a-\u003eBool",
          "package": "json-b",
          "signature": "Props counter-\u003eProps counter-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Schema.html#v:match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two property sets. This operation is mutually recursive with our\n    \u003ccode\u003e\u003ca\u003ecollate\u003c/a\u003e\u003c/code\u003e and relies on polymorphic recusion in \u003ccode\u003e\u003ca\u003ecollate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.JSONb.Schema",
          "name": "merge",
          "package": "json-b",
          "signature": "Props counter -\u003e Props counter -\u003e Props counter",
          "source": "src/Text-JSONb-Schema.html#merge",
          "type": "function"
        },
        "index": {
          "description": "Merge two property sets This operation is mutually recursive with our collate and relies on polymorphic recusion in collate",
          "hierarchy": "Text JSONb Schema",
          "module": "Text.JSONb.Schema",
          "name": "merge",
          "normalized": "Props a-\u003eProps a-\u003eProps a",
          "package": "json-b",
          "signature": "Props counter-\u003eProps counter-\u003eProps counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Schema.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSONb.Schema",
          "name": "plus",
          "package": "json-b",
          "signature": "t -\u003e t -\u003e t",
          "source": "src/Text-JSONb-Schema.html#plus",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text JSONb Schema",
          "module": "Text.JSONb.Schema",
          "name": "plus",
          "normalized": "a-\u003ea-\u003ea",
          "package": "json-b",
          "signature": "t-\u003et-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Schema.html#v:plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSONb.Schema",
          "name": "props",
          "package": "json-b",
          "signature": "Trie JSON -\u003e Props counter",
          "source": "src/Text-JSONb-Schema.html#props",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSONb Schema",
          "module": "Text.JSONb.Schema",
          "name": "props",
          "normalized": "Trie JSON-\u003eProps a",
          "package": "json-b",
          "signature": "Trie JSON-\u003eProps counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Schema.html#v:props"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine a schema for one JSON data item.\n\u003c/p\u003e",
          "module": "[\"Text.JSONb.Schema\",\"Text.JSONb\"]",
          "name": "schema",
          "package": "json-b",
          "signature": "JSON -\u003e Schema counter",
          "source": "src/Text-JSONb-Schema.html#schema",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Schema.html#v:schema\",\"http://hackage.haskell.org/package/json-b/docs/Text-JSONb.html#v:schema\"]"
        },
        "index": {
          "description": "Determine schema for one JSON data item",
          "hierarchy": "Text JSONb Schema",
          "module": "Text.JSONb.Schema",
          "name": "schema",
          "normalized": "JSON-\u003eSchema a",
          "package": "json-b",
          "signature": "JSON-\u003eSchema counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Schema.html#v:schema"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDevelop a schema for a list of JSON data, collating schemas according to\n    the measure, a well-ordered semigroup. \n\u003c/p\u003e",
          "module": "[\"Text.JSONb.Schema\",\"Text.JSONb\"]",
          "name": "schemas",
          "package": "json-b",
          "signature": "[JSON] -\u003e [(counter, Schema counter)]",
          "source": "src/Text-JSONb-Schema.html#schemas",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Schema.html#v:schemas\",\"http://hackage.haskell.org/package/json-b/docs/Text-JSONb.html#v:schemas\"]"
        },
        "index": {
          "description": "Develop schema for list of JSON data collating schemas according to the measure well-ordered semigroup",
          "hierarchy": "Text JSONb Schema",
          "module": "Text.JSONb.Schema",
          "name": "schemas",
          "normalized": "[JSON]-\u003e[(a,Schema a)]",
          "package": "json-b",
          "signature": "[JSON]-\u003e[(counter,Schema counter)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Schema.html#v:schemas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eJSON datatype definition.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.JSONb.Simple",
          "name": "Simple",
          "package": "json-b",
          "source": "src/Text-JSONb-Simple.html",
          "type": "module"
        },
        "index": {
          "description": "JSON datatype definition",
          "hierarchy": "Text JSONb Simple",
          "module": "Text.JSONb.Simple",
          "name": "Simple",
          "package": "json-b",
          "partial": "Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Simple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monomorphic JSON datatype, backed with \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e, strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n    and \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrie\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.JSONb.Simple",
          "name": "JSON",
          "package": "json-b",
          "source": "src/Text-JSONb-Simple.html#JSON",
          "type": "data"
        },
        "index": {
          "description": "monomorphic JSON datatype backed with Rational strict ByteString and ByteString Trie",
          "hierarchy": "Text JSONb Simple",
          "module": "Text.JSONb.Simple",
          "name": "JSON",
          "package": "json-b",
          "partial": "JSON",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Simple.html#t:JSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.JSONb.Simple\",\"Text.JSONb\"]",
          "name": "Array",
          "package": "json-b",
          "signature": "Array [JSON]",
          "source": "src/Text-JSONb-Simple.html#JSON",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Simple.html#v:Array\",\"http://hackage.haskell.org/package/json-b/docs/Text-JSONb.html#v:Array\"]"
        },
        "index": {
          "hierarchy": "Text JSONb Simple",
          "module": "Text.JSONb.Simple",
          "name": "Array",
          "normalized": "Array[JSON]",
          "package": "json-b",
          "partial": "Array",
          "signature": "Array[JSON]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Simple.html#v:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.JSONb.Simple\",\"Text.JSONb\"]",
          "name": "Boolean",
          "package": "json-b",
          "signature": "Boolean Bool",
          "source": "src/Text-JSONb-Simple.html#JSON",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Simple.html#v:Boolean\",\"http://hackage.haskell.org/package/json-b/docs/Text-JSONb.html#v:Boolean\"]"
        },
        "index": {
          "hierarchy": "Text JSONb Simple",
          "module": "Text.JSONb.Simple",
          "name": "Boolean",
          "package": "json-b",
          "partial": "Boolean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Simple.html#v:Boolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.JSONb.Simple\",\"Text.JSONb\"]",
          "name": "Null",
          "package": "json-b",
          "signature": "Null",
          "source": "src/Text-JSONb-Simple.html#JSON",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Simple.html#v:Null\",\"http://hackage.haskell.org/package/json-b/docs/Text-JSONb.html#v:Null\"]"
        },
        "index": {
          "hierarchy": "Text JSONb Simple",
          "module": "Text.JSONb.Simple",
          "name": "Null",
          "package": "json-b",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Simple.html#v:Null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.JSONb.Simple\",\"Text.JSONb\"]",
          "name": "Number",
          "package": "json-b",
          "signature": "Number Rational",
          "source": "src/Text-JSONb-Simple.html#JSON",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Simple.html#v:Number\",\"http://hackage.haskell.org/package/json-b/docs/Text-JSONb.html#v:Number\"]"
        },
        "index": {
          "hierarchy": "Text JSONb Simple",
          "module": "Text.JSONb.Simple",
          "name": "Number",
          "package": "json-b",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Simple.html#v:Number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.JSONb.Simple\",\"Text.JSONb\"]",
          "name": "Object",
          "package": "json-b",
          "signature": "Object (Trie JSON)",
          "source": "src/Text-JSONb-Simple.html#JSON",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Simple.html#v:Object\",\"http://hackage.haskell.org/package/json-b/docs/Text-JSONb.html#v:Object\"]"
        },
        "index": {
          "hierarchy": "Text JSONb Simple",
          "module": "Text.JSONb.Simple",
          "name": "Object",
          "package": "json-b",
          "partial": "Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Simple.html#v:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.JSONb.Simple\",\"Text.JSONb\"]",
          "name": "String",
          "package": "json-b",
          "signature": "String ByteString",
          "source": "src/Text-JSONb-Simple.html#JSON",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Simple.html#v:String\",\"http://hackage.haskell.org/package/json-b/docs/Text-JSONb.html#v:String\"]"
        },
        "index": {
          "hierarchy": "Text JSONb Simple",
          "module": "Text.JSONb.Simple",
          "name": "String",
          "package": "json-b",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb-Simple.html#v:String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eByteString parser for a simple, monomorphic JSON datatype.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.JSONb",
          "name": "JSONb",
          "package": "json-b",
          "source": "src/Text-JSONb.html",
          "type": "module"
        },
        "index": {
          "description": "ByteString parser for simple monomorphic JSON datatype",
          "hierarchy": "Text JSONb",
          "module": "Text.JSONb",
          "name": "JSONb",
          "package": "json-b",
          "partial": "JSONb",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSONb",
          "name": "Display",
          "package": "json-b",
          "source": "src/Text-JSONb-Schema-Display.html#Display",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text JSONb",
          "module": "Text.JSONb",
          "name": "Display",
          "package": "json-b",
          "partial": "Display",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb.html#t:Display"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of JSON escapable text. The solidus (\u003ccode\u003e/\u003c/code\u003e) is always escaped, as are\n    all ASCII control characters. Non-ASCII control characters and Unicode\n    printable characters above ASCII are left as is.\n\u003c/p\u003e",
          "module": "Text.JSONb",
          "name": "Escape",
          "package": "json-b",
          "source": "src/Text-JSON-Escape.html#Escape",
          "type": "class"
        },
        "index": {
          "description": "Class of JSON escapable text The solidus is always escaped as are all ASCII control characters Non-ASCII control characters and Unicode printable characters above ASCII are left as is",
          "hierarchy": "Text JSONb",
          "module": "Text.JSONb",
          "name": "Escape",
          "package": "json-b",
          "partial": "Escape",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb.html#t:Escape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monomorphic JSON datatype, backed with \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e, strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\n    and \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTrie\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.JSONb",
          "name": "JSON",
          "package": "json-b",
          "source": "src/Text-JSONb-Simple.html#JSON",
          "type": "data"
        },
        "index": {
          "description": "monomorphic JSON datatype backed with Rational strict ByteString and ByteString Trie",
          "hierarchy": "Text JSONb",
          "module": "Text.JSONb",
          "name": "JSON",
          "package": "json-b",
          "partial": "JSON",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb.html#t:JSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSONb",
          "name": "OneMany",
          "package": "json-b",
          "source": "src/Text-JSONb-Schema.html#OneMany",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text JSONb",
          "module": "Text.JSONb",
          "name": "OneMany",
          "package": "json-b",
          "partial": "One Many",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb.html#t:OneMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of JSON schemas. We treat the atomic types simply whereas objects\n    and arrays are treated specially.\n\u003c/p\u003e\u003cp\u003eObjects are treated as maps of keys to sets of schema types. Say a certain\n    type of object sometimes has a string at a certain key and sometimes has a\n    null at that key; we should merge them and say the schema of that key is a\n    union of string and null.\n\u003c/p\u003e\u003cp\u003eArrays admit measure in the sense of how many elements there are of a\n    certain kind. We support three measures at present: any, one or more and\n    individual counts. We expect the \u003ca\u003eany\u003c/a\u003e measure to prevail practice. Arrays\n    are also ordered; so one can distinguish an array that interleaves strings\n    and ints from one that is all strings and then all ints.\n\u003c/p\u003e",
          "module": "Text.JSONb",
          "name": "Schema",
          "package": "json-b",
          "source": "src/Text-JSONb-Schema.html#Schema",
          "type": "data"
        },
        "index": {
          "description": "The type of JSON schemas We treat the atomic types simply whereas objects and arrays are treated specially Objects are treated as maps of keys to sets of schema types Say certain type of object sometimes has string at certain key and sometimes has null at that key we should merge them and say the schema of that key is union of string and null Arrays admit measure in the sense of how many elements there are of certain kind We support three measures at present any one or more and individual counts We expect the any measure to prevail practice Arrays are also ordered so one can distinguish an array that interleaves strings and ints from one that is all strings and then all ints",
          "hierarchy": "Text JSONb",
          "module": "Text.JSONb",
          "name": "Schema",
          "package": "json-b",
          "partial": "Schema",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb.html#t:Schema"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStyle of serialization. Compact is the only one that is implemented at\n    present.\n\u003c/p\u003e",
          "module": "Text.JSONb",
          "name": "Style",
          "package": "json-b",
          "source": "src/Text-JSONb-Encode.html#Style",
          "type": "data"
        },
        "index": {
          "description": "Style of serialization Compact is the only one that is implemented at present",
          "hierarchy": "Text JSONb",
          "module": "Text.JSONb",
          "name": "Style",
          "package": "json-b",
          "partial": "Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb.html#t:Style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvide a formatted \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e for the displayable.\n\u003c/p\u003e",
          "module": "Text.JSONb",
          "name": "bytes",
          "package": "json-b",
          "signature": "t -\u003e ByteString",
          "source": "src/Text-JSONb-Schema-Display.html#bytes",
          "type": "method"
        },
        "index": {
          "description": "Provide formatted ByteString for the displayable",
          "hierarchy": "Text JSONb",
          "module": "Text.JSONb",
          "name": "bytes",
          "normalized": "a-\u003eByteString",
          "package": "json-b",
          "signature": "t-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb.html#v:bytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSONb",
          "name": "escape",
          "package": "json-b",
          "signature": "t -\u003e t",
          "source": "src/Text-JSON-Escape.html#escape",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text JSONb",
          "module": "Text.JSONb",
          "name": "escape",
          "normalized": "a-\u003ea",
          "package": "json-b",
          "signature": "t-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb.html#v:escape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.JSONb",
          "name": "escaped",
          "package": "json-b",
          "signature": "Char -\u003e Bool",
          "source": "src/Text-JSON-Escape.html#escaped",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text JSONb",
          "module": "Text.JSONb",
          "name": "escaped",
          "normalized": "Char-\u003eBool",
          "package": "json-b",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/json-b/docs/Text-JSONb.html#v:escaped"
      }
    }
  ]
]