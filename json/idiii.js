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
        "word": "idiii"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides parsers for Extended Header\n\u003c/p\u003e\u003cp\u003e(\u003ca\u003ehttp://www.id3.org/id3v2.4.0-structure\u003c/a\u003e)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ID3.Parser.ExtHeader",
          "name": "ExtHeader",
          "package": "idiii",
          "source": "src/ID3-Parser-ExtHeader.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides parsers for Extended Header http www.id3.org id3v2.4.0-structure",
          "hierarchy": "ID3 Parser ExtHeader",
          "module": "ID3.Parser.ExtHeader",
          "name": "ExtHeader",
          "package": "idiii",
          "partial": "Ext Header",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-ExtHeader.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses Extended Header as \u003ccode\u003e\u003ca\u003eID3ExtHeader\u003c/a\u003e\u003c/code\u003e structure\n\u003c/p\u003e",
          "module": "ID3.Parser.ExtHeader",
          "name": "parseExtHeader",
          "package": "idiii",
          "signature": "TagParser ID3ExtHeader",
          "source": "src/ID3-Parser-ExtHeader.html#parseExtHeader",
          "type": "function"
        },
        "index": {
          "description": "Parses Extended Header as ID3ExtHeader structure",
          "hierarchy": "ID3 Parser ExtHeader",
          "module": "ID3.Parser.ExtHeader",
          "name": "parseExtHeader",
          "package": "idiii",
          "partial": "Ext Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-ExtHeader.html#v:parseExtHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis Module provides parsers for frames.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ID3.Parser.Frame",
          "name": "Frame",
          "package": "idiii",
          "source": "src/ID3-Parser-Frame.html",
          "type": "module"
        },
        "index": {
          "description": "This Module provides parsers for frames",
          "hierarchy": "ID3 Parser Frame",
          "module": "ID3.Parser.Frame",
          "name": "Frame",
          "package": "idiii",
          "partial": "Frame",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-Frame.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses any Frame\n\u003c/p\u003e",
          "module": "ID3.Parser.Frame",
          "name": "anyFrame",
          "package": "idiii",
          "signature": "TagParser (Either String ID3Frame)",
          "source": "src/ID3-Parser-Frame.html#anyFrame",
          "type": "function"
        },
        "index": {
          "description": "Parses any Frame",
          "hierarchy": "ID3 Parser Frame",
          "module": "ID3.Parser.Frame",
          "name": "anyFrame",
          "package": "idiii",
          "partial": "Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-Frame.html#v:anyFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses any Frame Header\n\u003c/p\u003e",
          "module": "ID3.Parser.Frame",
          "name": "anyFrameHeader",
          "package": "idiii",
          "signature": "TagParser (Either String FrameHeader)",
          "source": "src/ID3-Parser-Frame.html#anyFrameHeader",
          "type": "function"
        },
        "index": {
          "description": "Parses any Frame Header",
          "hierarchy": "ID3 Parser Frame",
          "module": "ID3.Parser.Frame",
          "name": "anyFrameHeader",
          "package": "idiii",
          "partial": "Frame Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-Frame.html#v:anyFrameHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Parser.Frame",
          "name": "frameFlags",
          "package": "idiii",
          "signature": "TagParser FrameFlags",
          "source": "src/ID3-Parser-Frame.html#frameFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Parser Frame",
          "module": "ID3.Parser.Frame",
          "name": "frameFlags",
          "package": "idiii",
          "partial": "Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-Frame.html#v:frameFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Parser.Frame",
          "name": "frameFormatFlags",
          "package": "idiii",
          "signature": "Parser St Token FormatFlags",
          "source": "src/ID3-Parser-Frame.html#frameFormatFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Parser Frame",
          "module": "ID3.Parser.Frame",
          "name": "frameFormatFlags",
          "package": "idiii",
          "partial": "Format Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-Frame.html#v:frameFormatFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Parser.Frame",
          "name": "frameID",
          "package": "idiii",
          "signature": "TagParser FrameID",
          "source": "src/ID3-Parser-Frame.html#frameID",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Parser Frame",
          "module": "ID3.Parser.Frame",
          "name": "frameID",
          "package": "idiii",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-Frame.html#v:frameID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Parser.Frame",
          "name": "frameSize",
          "package": "idiii",
          "signature": "TagParser FrameSize",
          "source": "src/ID3-Parser-Frame.html#frameSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Parser Frame",
          "module": "ID3.Parser.Frame",
          "name": "frameSize",
          "package": "idiii",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-Frame.html#v:frameSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Parser.Frame",
          "name": "frameStatusFlags",
          "package": "idiii",
          "signature": "Parser St Token StatusFlags",
          "source": "src/ID3-Parser-Frame.html#frameStatusFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Parser Frame",
          "module": "ID3.Parser.Frame",
          "name": "frameStatusFlags",
          "package": "idiii",
          "partial": "Status Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-Frame.html#v:frameStatusFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Parser.Frame",
          "name": "parseFrames",
          "package": "idiii",
          "signature": "TagParser ([FrameID], Map FrameID ID3Frame)",
          "source": "src/ID3-Parser-Frame.html#parseFrames",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Parser Frame",
          "module": "ID3.Parser.Frame",
          "name": "parseFrames",
          "normalized": "TagParser([FrameID],Map FrameID ID Frame)",
          "package": "idiii",
          "partial": "Frames",
          "signature": "TagParser([FrameID],Map FrameID ID Frame)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-Frame.html#v:parseFrames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contain different general parsers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ID3.Parser.General",
          "name": "General",
          "package": "idiii",
          "source": "src/ID3-Parser-General.html",
          "type": "module"
        },
        "index": {
          "description": "This module contain different general parsers",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "General",
          "package": "idiii",
          "partial": "General",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Parser.General",
          "name": "CharEncoding",
          "package": "idiii",
          "source": "src/ID3-Parser-General.html#CharEncoding",
          "type": "type"
        },
        "index": {
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "CharEncoding",
          "package": "idiii",
          "partial": "Char Encoding",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#t:CharEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Parser.General",
          "name": "Size",
          "package": "idiii",
          "source": "src/ID3-Parser-General.html#Size",
          "type": "type"
        },
        "index": {
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "Size",
          "package": "idiii",
          "partial": "Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#t:Size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsers state\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "St",
          "package": "idiii",
          "source": "src/ID3-Parser-General.html#St",
          "type": "data"
        },
        "index": {
          "description": "Parsers state",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "St",
          "package": "idiii",
          "partial": "St",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#t:St"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Parser.General",
          "name": "TagParser",
          "package": "idiii",
          "source": "src/ID3-Parser-General.html#TagParser",
          "type": "type"
        },
        "index": {
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "TagParser",
          "package": "idiii",
          "partial": "Tag Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#t:TagParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust a synonim for one item of input stream\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "Token",
          "package": "idiii",
          "source": "src/ID3-Parser-General.html#Token",
          "type": "type"
        },
        "index": {
          "description": "Just synonim for one item of input stream",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "Token",
          "package": "idiii",
          "partial": "Token",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#t:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Parser.General",
          "name": "State",
          "package": "idiii",
          "signature": "State",
          "source": "src/ID3-Parser-General.html#St",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "State",
          "package": "idiii",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses any \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "anyWord8",
          "package": "idiii",
          "signature": "TagParser Token",
          "source": "src/ID3-Parser-General.html#anyWord8",
          "type": "function"
        },
        "index": {
          "description": "Parses any Token",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "anyWord8",
          "package": "idiii",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:anyWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses given \u003ccode\u003eByteString\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "byteString",
          "package": "idiii",
          "signature": "ByteString -\u003e TagParser ByteString",
          "source": "src/ID3-Parser-General.html#byteString",
          "type": "function"
        },
        "index": {
          "description": "Parses given ByteString",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "byteString",
          "normalized": "ByteString-\u003eTagParser ByteString",
          "package": "idiii",
          "partial": "String",
          "signature": "ByteString-\u003eTagParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:byteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'count n p' parses a precise number of items, n, using the parser p, in sequence.\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "count",
          "package": "idiii",
          "signature": "n -\u003e TagParser a -\u003e TagParser [a]",
          "source": "src/ID3-Parser-General.html#count",
          "type": "function"
        },
        "index": {
          "description": "count parses precise number of items using the parser in sequence",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "count",
          "normalized": "a-\u003eTagParser b-\u003eTagParser[b]",
          "package": "idiii",
          "signature": "n-\u003eTagParser a-\u003eTagParser[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecount\u003c/a\u003e\u003c/code\u003e n p' parses a precise number of items, n, using the parser p, in sequence.\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "count'",
          "package": "idiii",
          "signature": "n -\u003e TagParser a -\u003e TagParser [a]",
          "source": "src/ID3-Parser-General.html#count%27",
          "type": "function"
        },
        "index": {
          "description": "count parses precise number of items using the parser in sequence",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "count'",
          "normalized": "a-\u003eTagParser b-\u003eTagParser[b]",
          "package": "idiii",
          "signature": "n-\u003eTagParser a-\u003eTagParser[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:count-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHybrid of \u003ccode\u003e\u003ca\u003ecount\u003c/a\u003e\u003c/code\u003e and 'sepBy\\''\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "countSepBy'",
          "package": "idiii",
          "signature": "n -\u003e TagParser a -\u003e TagParser sep -\u003e TagParser [a]",
          "source": "src/ID3-Parser-General.html#countSepBy%27",
          "type": "function"
        },
        "index": {
          "description": "Hybrid of count and sepBy",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "countSepBy'",
          "normalized": "a-\u003eTagParser b-\u003eTagParser c-\u003eTagParser[b]",
          "package": "idiii",
          "partial": "Sep By'",
          "signature": "n-\u003eTagParser a-\u003eTagParser sep-\u003eTagParser[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:countSepBy-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecurrent frame size\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "curSize",
          "package": "idiii",
          "signature": "Integer",
          "source": "src/ID3-Parser-General.html#St",
          "type": "function"
        },
        "index": {
          "description": "current frame size",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "curSize",
          "package": "idiii",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:curSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses digit-symbol (as \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "digit",
          "package": "idiii",
          "signature": "TagParser Token",
          "source": "src/ID3-Parser-General.html#digit",
          "type": "function"
        },
        "index": {
          "description": "Parses digit-symbol as Token",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "digit",
          "package": "idiii",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:digit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Parser.General",
          "name": "encPack",
          "package": "idiii",
          "signature": "CharEncoding -\u003e [Token] -\u003e String",
          "source": "src/ID3-Parser-General.html#encPack",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "encPack",
          "normalized": "CharEncoding-\u003e[Token]-\u003eString",
          "package": "idiii",
          "partial": "Pack",
          "signature": "CharEncoding-\u003e[Token]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:encPack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Parser.General",
          "name": "err",
          "package": "idiii",
          "signature": "TagParser t -\u003e String -\u003e TagParser t",
          "source": "src/ID3-Parser-General.html#err",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "err",
          "normalized": "TagParser a-\u003eString-\u003eTagParser a",
          "package": "idiii",
          "signature": "TagParser t-\u003eString-\u003eTagParser t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Parser.General",
          "name": "flagsGet",
          "package": "idiii",
          "signature": "TagParser TagFlags",
          "source": "src/ID3-Parser-General.html#flagsGet",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "flagsGet",
          "package": "idiii",
          "partial": "Get",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:flagsGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Parser.General",
          "name": "flagsSet",
          "package": "idiii",
          "signature": "TagFlags -\u003e TagParser ()",
          "source": "src/ID3-Parser-General.html#flagsSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "flagsSet",
          "normalized": "TagFlags-\u003eTagParser()",
          "package": "idiii",
          "partial": "Set",
          "signature": "TagFlags-\u003eTagParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:flagsSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eflags from tag's header\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "headerFlags",
          "package": "idiii",
          "signature": "TagFlags",
          "source": "src/ID3-Parser-General.html#St",
          "type": "function"
        },
        "index": {
          "description": "flags from tag header",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "headerFlags",
          "package": "idiii",
          "partial": "Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:headerFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Parser.General",
          "name": "id3TagVersion",
          "package": "idiii",
          "signature": "TagVersion",
          "source": "src/ID3-Parser-General.html#St",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "id3TagVersion",
          "package": "idiii",
          "partial": "Tag Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:id3TagVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for \u003cem\u003ereiterative\u003c/em\u003e parsers.\n   Mnemonic: \u003ccode\u003eif \u003ccode\u003e\u003ca\u003ecurSize\u003c/a\u003e\u003c/code\u003e \u003e 0 then\u003c/code\u003e continue \u003ccode\u003eelse\u003c/code\u003e stop\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "ifSize",
          "package": "idiii",
          "signature": "TagParser [a] -\u003e TagParser [a]",
          "source": "src/ID3-Parser-General.html#ifSize",
          "type": "function"
        },
        "index": {
          "description": "Wrapper for reiterative parsers Mnemonic if curSize then continue else stop",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "ifSize",
          "normalized": "TagParser[a]-\u003eTagParser[a]",
          "package": "idiii",
          "partial": "Size",
          "signature": "TagParser[a]-\u003eTagParser[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:ifSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Parser.General",
          "name": "initState",
          "package": "idiii",
          "signature": "St",
          "source": "src/ID3-Parser-General.html#initState",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "initState",
          "package": "idiii",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:initState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emany'\u003c/a\u003e\u003c/code\u003e p\u003c/code\u003e parses a list of elements with individual parser \u003ccode\u003ep\u003c/code\u003e.\n   Cannot fail, since an empty list is a valid return value.\n   Unlike default \u003ccode\u003emany\u003c/code\u003e, stops if \u003ccode\u003e\u003ca\u003ecurSize\u003c/a\u003e\u003c/code\u003e became 0.\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "many'",
          "package": "idiii",
          "signature": "TagParser a -\u003e TagParser [a]",
          "source": "src/ID3-Parser-General.html#many%27",
          "type": "function"
        },
        "index": {
          "description": "many parses list of elements with individual parser Cannot fail since an empty list is valid return value Unlike default many stops if curSize became",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "many'",
          "normalized": "TagParser a-\u003eTagParser[a]",
          "package": "idiii",
          "signature": "TagParser a-\u003eTagParser[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:many-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a non-empty list of items.\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "many1'",
          "package": "idiii",
          "signature": "TagParser a -\u003e TagParser [a]",
          "source": "src/ID3-Parser-General.html#many1%27",
          "type": "function"
        },
        "index": {
          "description": "Parse non-empty list of items",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "many1'",
          "normalized": "TagParser a-\u003eTagParser[a]",
          "package": "idiii",
          "signature": "TagParser a-\u003eTagParser[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:many1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emanyTill'\u003c/a\u003e\u003c/code\u003e p end\u003c/code\u003e parses a possibly-empty sequence of \u003ccode\u003ep\u003c/code\u003e's, terminated by a \u003ccode\u003eend\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "manyTill'",
          "package": "idiii",
          "signature": "TagParser a -\u003e TagParser z -\u003e TagParser [a]",
          "source": "src/ID3-Parser-General.html#manyTill%27",
          "type": "function"
        },
        "index": {
          "description": "manyTill end parses possibly-empty sequence of terminated by end",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "manyTill'",
          "normalized": "TagParser a-\u003eTagParser b-\u003eTagParser[a]",
          "package": "idiii",
          "partial": "Till'",
          "signature": "TagParser a-\u003eTagParser z-\u003eTagParser[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:manyTill-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'manyTill1\\' p end' parses a non-empty sequence of p's, terminated by a end.\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "manyTill1'",
          "package": "idiii",
          "signature": "TagParser a -\u003e TagParser z -\u003e TagParser [a]",
          "source": "src/ID3-Parser-General.html#manyTill1%27",
          "type": "function"
        },
        "index": {
          "description": "manyTill1 end parses non-empty sequence of terminated by end",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "manyTill1'",
          "normalized": "TagParser a-\u003eTagParser b-\u003eTagParser[a]",
          "package": "idiii",
          "partial": "Till",
          "signature": "TagParser a-\u003eTagParser z-\u003eTagParser[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:manyTill1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Parser.General",
          "name": "nonNull",
          "package": "idiii",
          "signature": "Parser St Token Token",
          "source": "src/ID3-Parser-General.html#nonNull",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "nonNull",
          "package": "idiii",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:nonNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a character-encoding \u003ca\u003ecode\u003c/a\u003e, a one-byte value that should be 0, 1, 2, or 3\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "parseEncoding",
          "package": "idiii",
          "signature": "TagParser CharEncoding",
          "source": "src/ID3-Parser-General.html#parseEncoding",
          "type": "function"
        },
        "index": {
          "description": "Parses character-encoding code one-byte value that should be or",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "parseEncoding",
          "package": "idiii",
          "partial": "Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:parseEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses 3 bytes of language value (as a String) and returns a pair (\u003ca\u003eLanguage\u003c/a\u003e, value)\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "parseLanguage",
          "package": "idiii",
          "signature": "TagParser String",
          "source": "src/ID3-Parser-General.html#parseLanguage",
          "type": "function"
        },
        "index": {
          "description": "Parses bytes of language value as String and returns pair Language value",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "parseLanguage",
          "package": "idiii",
          "partial": "Language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:parseLanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses one value and returns it as a \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "parseNumber",
          "package": "idiii",
          "signature": "TagParser Integer",
          "source": "src/ID3-Parser-General.html#parseNumber",
          "type": "function"
        },
        "index": {
          "description": "Parses one value and returns it as Integer",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "parseNumber",
          "package": "idiii",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:parseNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'parseSize n unsynchDecode' parses n bytes, doing decoding of \u003ca\u003eunsynchronized\u003c/a\u003e data when unsynchDecode is True, and returns the represented \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "parseSize",
          "package": "idiii",
          "signature": "Integer -\u003e Bool -\u003e TagParser Size",
          "source": "src/ID3-Parser-General.html#parseSize",
          "type": "function"
        },
        "index": {
          "description": "parseSize unsynchDecode parses bytes doing decoding of unsynchronized data when unsynchDecode is True and returns the represented Integer value",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "parseSize",
          "normalized": "Integer-\u003eBool-\u003eTagParser Size",
          "package": "idiii",
          "partial": "Size",
          "signature": "Integer-\u003eBool-\u003eTagParser Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:parseSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses one value and returns it as a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "parseString",
          "package": "idiii",
          "signature": "CharEncoding -\u003e TagParser String",
          "source": "src/ID3-Parser-General.html#parseString",
          "type": "function"
        },
        "index": {
          "description": "Parses one value and returns it as String",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "parseString",
          "normalized": "CharEncoding-\u003eTagParser String",
          "package": "idiii",
          "partial": "String",
          "signature": "CharEncoding-\u003eTagParser String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:parseString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Parser.General",
          "name": "parseUntilWord16Null",
          "package": "idiii",
          "signature": "TagParser [Token]",
          "source": "src/ID3-Parser-General.html#parseUntilWord16Null",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "parseUntilWord16Null",
          "normalized": "TagParser[Token]",
          "package": "idiii",
          "partial": "Until Word Null",
          "signature": "TagParser[Token]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:parseUntilWord16Null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses one value (as [Token]) till termination symbol\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "parseUntilWord8Null",
          "package": "idiii",
          "signature": "TagParser [Token]",
          "source": "src/ID3-Parser-General.html#parseUntilWord8Null",
          "type": "function"
        },
        "index": {
          "description": "Parses one value as Token till termination symbol",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "parseUntilWord8Null",
          "normalized": "TagParser[Token]",
          "package": "idiii",
          "partial": "Until Word Null",
          "signature": "TagParser[Token]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:parseUntilWord8Null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a list of \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003es and applies them by turns.\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "parsers",
          "package": "idiii",
          "signature": "[TagParser a] -\u003e TagParser [a]",
          "source": "src/ID3-Parser-General.html#parsers",
          "type": "function"
        },
        "index": {
          "description": "Takes list of Parser and applies them by turns",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "parsers",
          "normalized": "[TagParser a]-\u003eTagParser[a]",
          "package": "idiii",
          "signature": "[TagParser a]-\u003eTagParser[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:parsers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrements \u003ccode\u003e\u003ca\u003etagPos\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "posDec",
          "package": "idiii",
          "signature": "TagParser ()",
          "source": "src/ID3-Parser-General.html#posDec",
          "type": "function"
        },
        "index": {
          "description": "Decrements tagPos",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "posDec",
          "normalized": "TagParser()",
          "package": "idiii",
          "partial": "Dec",
          "signature": "TagParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:posDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003etagPos\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eSt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "posGet",
          "package": "idiii",
          "signature": "TagParser Integer",
          "source": "src/ID3-Parser-General.html#posGet",
          "type": "function"
        },
        "index": {
          "description": "Returns tagPos from St",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "posGet",
          "package": "idiii",
          "partial": "Get",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:posGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncremets \u003ccode\u003e\u003ca\u003etagPos\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "posInc",
          "package": "idiii",
          "signature": "TagParser ()",
          "source": "src/ID3-Parser-General.html#posInc",
          "type": "function"
        },
        "index": {
          "description": "Incremets tagPos",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "posInc",
          "normalized": "TagParser()",
          "package": "idiii",
          "partial": "Inc",
          "signature": "TagParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:posInc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets \u003ccode\u003e\u003ca\u003etagPos\u003c/a\u003e\u003c/code\u003e with given value.\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "posSet",
          "package": "idiii",
          "signature": "Integer -\u003e TagParser ()",
          "source": "src/ID3-Parser-General.html#posSet",
          "type": "function"
        },
        "index": {
          "description": "Sets tagPos with given value",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "posSet",
          "normalized": "Integer-\u003eTagParser()",
          "package": "idiii",
          "partial": "Set",
          "signature": "Integer-\u003eTagParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:posSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdates \u003ccode\u003e\u003ca\u003etagPos\u003c/a\u003e\u003c/code\u003e with given function.\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "posUpdate",
          "package": "idiii",
          "signature": "(Integer -\u003e Integer) -\u003e TagParser ()",
          "source": "src/ID3-Parser-General.html#posUpdate",
          "type": "function"
        },
        "index": {
          "description": "Updates tagPos with given function",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "posUpdate",
          "normalized": "(Integer-\u003eInteger)-\u003eTagParser()",
          "package": "idiii",
          "partial": "Update",
          "signature": "(Integer-\u003eInteger)-\u003eTagParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:posUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Parser.General",
          "name": "run",
          "package": "idiii",
          "signature": "TagParser a -\u003e [Word8] -\u003e (Either String a, [Token])",
          "source": "src/ID3-Parser-General.html#run",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "run",
          "normalized": "TagParser a-\u003e[Word]-\u003e(Either String a,[Token])",
          "package": "idiii",
          "signature": "TagParser a-\u003e[Word]-\u003e(Either String a,[Token])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a list of items separated by discarded junk.\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "sepBy'",
          "package": "idiii",
          "signature": "TagParser a -\u003e TagParser sep -\u003e TagParser [a]",
          "source": "src/ID3-Parser-General.html#sepBy%27",
          "type": "function"
        },
        "index": {
          "description": "Parse list of items separated by discarded junk",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "sepBy'",
          "normalized": "TagParser a-\u003eTagParser b-\u003eTagParser[a]",
          "package": "idiii",
          "partial": "By'",
          "signature": "TagParser a-\u003eTagParser sep-\u003eTagParser[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:sepBy-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a non-empty list of items separated by discarded junk.\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "sepBy1'",
          "package": "idiii",
          "signature": "TagParser a -\u003e TagParser sep -\u003e TagParser [a]",
          "source": "src/ID3-Parser-General.html#sepBy1%27",
          "type": "function"
        },
        "index": {
          "description": "Parse non-empty list of items separated by discarded junk",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "sepBy1'",
          "normalized": "TagParser a-\u003eTagParser b-\u003eTagParser[a]",
          "package": "idiii",
          "partial": "By",
          "signature": "TagParser a-\u003eTagParser sep-\u003eTagParser[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:sepBy1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrements \u003ccode\u003e\u003ca\u003ecurSize\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "sizeDec",
          "package": "idiii",
          "signature": "TagParser ()",
          "source": "src/ID3-Parser-General.html#sizeDec",
          "type": "function"
        },
        "index": {
          "description": "Decrements curSize",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "sizeDec",
          "normalized": "TagParser()",
          "package": "idiii",
          "partial": "Dec",
          "signature": "TagParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:sizeDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003ecurSize\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eSt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "sizeGet",
          "package": "idiii",
          "signature": "TagParser Integer",
          "source": "src/ID3-Parser-General.html#sizeGet",
          "type": "function"
        },
        "index": {
          "description": "Returns curSize from St",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "sizeGet",
          "package": "idiii",
          "partial": "Get",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:sizeGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncremets \u003ccode\u003e\u003ca\u003ecurSize\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "sizeInc",
          "package": "idiii",
          "signature": "TagParser ()",
          "source": "src/ID3-Parser-General.html#sizeInc",
          "type": "function"
        },
        "index": {
          "description": "Incremets curSize",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "sizeInc",
          "normalized": "TagParser()",
          "package": "idiii",
          "partial": "Inc",
          "signature": "TagParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:sizeInc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets \u003ccode\u003e\u003ca\u003ecurSize\u003c/a\u003e\u003c/code\u003e with given value.\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "sizeSet",
          "package": "idiii",
          "signature": "Integer -\u003e TagParser ()",
          "source": "src/ID3-Parser-General.html#sizeSet",
          "type": "function"
        },
        "index": {
          "description": "Sets curSize with given value",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "sizeSet",
          "normalized": "Integer-\u003eTagParser()",
          "package": "idiii",
          "partial": "Set",
          "signature": "Integer-\u003eTagParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:sizeSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdates \u003ccode\u003e\u003ca\u003ecurSize\u003c/a\u003e\u003c/code\u003e with given function.\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "sizeUpdate",
          "package": "idiii",
          "signature": "(Integer -\u003e Integer) -\u003e TagParser ()",
          "source": "src/ID3-Parser-General.html#sizeUpdate",
          "type": "function"
        },
        "index": {
          "description": "Updates curSize with given function",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "sizeUpdate",
          "normalized": "(Integer-\u003eInteger)-\u003eTagParser()",
          "package": "idiii",
          "partial": "Update",
          "signature": "(Integer-\u003eInteger)-\u003eTagParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:sizeUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ebyteString\u003c/a\u003e\u003c/code\u003e but argument is simple \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "string",
          "package": "idiii",
          "signature": "String -\u003e TagParser ByteString",
          "source": "src/ID3-Parser-General.html#string",
          "type": "function"
        },
        "index": {
          "description": "Same as byteString but argument is simple String",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "string",
          "normalized": "String-\u003eTagParser ByteString",
          "package": "idiii",
          "signature": "String-\u003eTagParser ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecurrent position in tag\n              , frFlags        :: [Bool]}  -- ^ current frame flags\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "tagPos",
          "package": "idiii",
          "signature": "Integer",
          "source": "src/ID3-Parser-General.html#St",
          "type": "function"
        },
        "index": {
          "description": "current position in tag frFlags Bool current frame flags",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "tagPos",
          "package": "idiii",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:tagPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Parser.General",
          "name": "tagVersionGet",
          "package": "idiii",
          "signature": "TagParser TagVersion",
          "source": "src/ID3-Parser-General.html#tagVersionGet",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "tagVersionGet",
          "package": "idiii",
          "partial": "Version Get",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:tagVersionGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Parser.General",
          "name": "tagVersionSet",
          "package": "idiii",
          "signature": "TagVersion -\u003e TagParser ()",
          "source": "src/ID3-Parser-General.html#tagVersionSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "tagVersionSet",
          "normalized": "TagVersion-\u003eTagParser()",
          "package": "idiii",
          "partial": "Version Set",
          "signature": "TagVersion-\u003eTagParser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:tagVersionSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses upper-case letters (as \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "upper",
          "package": "idiii",
          "signature": "TagParser Token",
          "source": "src/ID3-Parser-General.html#upper",
          "type": "function"
        },
        "index": {
          "description": "Parses upper-case letters as Token",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "upper",
          "package": "idiii",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:upper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for atomic parsers.\n   Increases \u003ccode\u003e\u003ca\u003etagPos\u003c/a\u003e\u003c/code\u003e and decreases \u003ccode\u003e\u003ca\u003ecurSize\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "withSize",
          "package": "idiii",
          "signature": "TagParser b -\u003e TagParser b",
          "source": "src/ID3-Parser-General.html#withSize",
          "type": "function"
        },
        "index": {
          "description": "Wrapper for atomic parsers Increases tagPos and decreases curSize",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "withSize",
          "normalized": "TagParser a-\u003eTagParser a",
          "package": "idiii",
          "partial": "Size",
          "signature": "TagParser b-\u003eTagParser b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:withSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses given \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "word8",
          "package": "idiii",
          "signature": "Token -\u003e TagParser Token",
          "source": "src/ID3-Parser-General.html#word8",
          "type": "function"
        },
        "index": {
          "description": "Parses given Token",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "word8",
          "normalized": "Token-\u003eTagParser Token",
          "package": "idiii",
          "signature": "Token-\u003eTagParser Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:word8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses given list of \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "ID3.Parser.General",
          "name": "word8s",
          "package": "idiii",
          "signature": "[Token] -\u003e TagParser [Token]",
          "source": "src/ID3-Parser-General.html#word8s",
          "type": "function"
        },
        "index": {
          "description": "Parses given list of Token",
          "hierarchy": "ID3 Parser General",
          "module": "ID3.Parser.General",
          "name": "word8s",
          "normalized": "[Token]-\u003eTagParser[Token]",
          "package": "idiii",
          "signature": "[Token]-\u003eTagParser[Token]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-General.html#v:word8s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Parser.Header",
          "name": "Header",
          "package": "idiii",
          "source": "src/ID3-Parser-Header.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "ID3 Parser Header",
          "module": "ID3.Parser.Header",
          "name": "Header",
          "package": "idiii",
          "partial": "Header",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-Header.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eID3v2 FOOTER\u003c/em\u003e (optional)\n\u003c/p\u003e\u003cp\u003eTo speed up the process of locating an ID3v2 tag when searching from\n   the end of a file, a footer can be added to the tag. It is REQUIRED\n   to add a footer to an appended tag, i.e. a tag located after all\n   audio data. The footer is a copy of the header, but with a different\n   identifier.\n\u003c/p\u003e\u003cpre\u003e\n     ID3v2 identifier           \"3DI\"\n     ID3v2 version              $04 00\n     ID3v2 flags                %abcd0000\n     ID3v2 size             4 * %0xxxxxxx\n\u003c/pre\u003e",
          "module": "ID3.Parser.Header",
          "name": "parseFooter",
          "package": "idiii",
          "signature": "TagParser ID3Header",
          "source": "src/ID3-Parser-Header.html#parseFooter",
          "type": "function"
        },
        "index": {
          "description": "ID3v2 FOOTER optional To speed up the process of locating an ID3v2 tag when searching from the end of file footer can be added to the tag It is REQUIRED to add footer to an appended tag i.e tag located after all audio data The footer is copy of the header but with different identifier ID3v2 identifier DI ID3v2 version ID3v2 flags abcd0000 ID3v2 size xxxxxxx",
          "hierarchy": "ID3 Parser Header",
          "module": "ID3.Parser.Header",
          "name": "parseFooter",
          "package": "idiii",
          "partial": "Footer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-Header.html#v:parseFooter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses id3v2 \u003ccode\u003eHeader\u003c/code\u003e\n\u003c/p\u003e",
          "module": "ID3.Parser.Header",
          "name": "parseHeader",
          "package": "idiii",
          "signature": "TagParser ID3Header",
          "source": "src/ID3-Parser-Header.html#parseHeader",
          "type": "function"
        },
        "index": {
          "description": "Parses id3v2 Header",
          "hierarchy": "ID3 Parser Header",
          "module": "ID3.Parser.Header",
          "name": "parseHeader",
          "package": "idiii",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-Header.html#v:parseHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Parser.NativeFrames",
          "name": "NativeFrames",
          "package": "idiii",
          "source": "src/ID3-Parser-NativeFrames.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "ID3 Parser NativeFrames",
          "module": "ID3.Parser.NativeFrames",
          "name": "NativeFrames",
          "package": "idiii",
          "partial": "Native Frames",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-NativeFrames.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Parser.NativeFrames",
          "name": "frameInfo",
          "package": "idiii",
          "signature": "String -\u003e Parser St Token FrameInfo",
          "source": "src/ID3-Parser-NativeFrames.html#frameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Parser NativeFrames",
          "module": "ID3.Parser.NativeFrames",
          "name": "frameInfo",
          "normalized": "String-\u003eParser St Token FrameInfo",
          "package": "idiii",
          "partial": "Info",
          "signature": "String-\u003eParser St Token FrameInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-NativeFrames.html#v:frameInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Parser.NativeFrames",
          "name": "textInfo",
          "package": "idiii",
          "signature": "String -\u003e TagParser FrameInfo",
          "source": "src/ID3-Parser-NativeFrames.html#textInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Parser NativeFrames",
          "module": "ID3.Parser.NativeFrames",
          "name": "textInfo",
          "normalized": "String-\u003eTagParser FrameInfo",
          "package": "idiii",
          "partial": "Info",
          "signature": "String-\u003eTagParser FrameInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-NativeFrames.html#v:textInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Parser.NativeFrames",
          "name": "urlInfo",
          "package": "idiii",
          "signature": "String -\u003e Parser St Token FrameInfo",
          "source": "src/ID3-Parser-NativeFrames.html#urlInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Parser NativeFrames",
          "module": "ID3.Parser.NativeFrames",
          "name": "urlInfo",
          "normalized": "String-\u003eParser St Token FrameInfo",
          "package": "idiii",
          "partial": "Info",
          "signature": "String-\u003eParser St Token FrameInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-NativeFrames.html#v:urlInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Parser.Tag",
          "name": "Tag",
          "package": "idiii",
          "source": "src/ID3-Parser-Tag.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "ID3 Parser Tag",
          "module": "ID3.Parser.Tag",
          "name": "Tag",
          "package": "idiii",
          "partial": "Tag",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-Tag.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Parser.Tag",
          "name": "parseTag",
          "package": "idiii",
          "signature": "TagParser ID3Tag",
          "source": "src/ID3-Parser-Tag.html#parseTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Parser Tag",
          "module": "ID3.Parser.Tag",
          "name": "parseTag",
          "package": "idiii",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-Tag.html#v:parseTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Parser.Tag",
          "name": "parseTag_",
          "package": "idiii",
          "signature": "ID3Header -\u003e TagParser ID3Tag",
          "source": "src/ID3-Parser-Tag.html#parseTag_",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Parser Tag",
          "module": "ID3.Parser.Tag",
          "name": "parseTag_",
          "normalized": "ID Header-\u003eTagParser ID Tag",
          "package": "idiii",
          "partial": "Tag",
          "signature": "ID Header-\u003eTagParser ID Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-Tag.html#v:parseTag_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUNSYNCHRONISATION\n\u003c/p\u003e\u003cp\u003eThis module contents a couple of functions to convert readed bytes (as [\u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e]) of synchronized values to unsynchronised \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eUNSYNCRONISATION\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThe only purpose of unsynchronisation is to make the ID3v2 tag as\n   compatible as possible with existing software and hardware. There is\n   no use in \u003ccode\u003eunsynchronising\u003c/code\u003e tags if the file is only to be processed\n   only by ID3v2 aware software and hardware. Unsynchronisation is only\n   useful with tags in MPEG 1/2 layer I, II and III, MPEG 2.5 and AAC\n   files.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e \u003cem\u003eThe unsynchronisation scheme\u003c/em\u003e\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eWhenever a false synchronisation is found within the tag, one zeroed\n   byte is inserted after the first false synchronisation byte. The\n   format of synchronisations that should be altered by ID3 syncIntegerrs is\n   as follows:\n\u003c/p\u003e\u003cpre\u003e\n         %11111111 111xxxxx\n\u003c/pre\u003e\u003cp\u003eand should be replaced with:\n\u003c/p\u003e\u003cpre\u003e\n         %11111111 00000000 111xxxxx\n\u003c/pre\u003e\u003cp\u003eThis has the side effect that all $FF 00 combinations have to be\n   altered, so they will not be affected by the decoding process.\n   Therefore all the $FF 00 combinations have to be replaced with the\n   $FF 00 00 combination during the unsynchronisation.\n\u003c/p\u003e\u003cp\u003eTo indicate usage of the unsynchronisation, the unsynchronisation\n   flag in the frame header should be set. This bit MUST be set if the\n   frame was altered by the unsynchronisation and SHOULD NOT be set if\n   unaltered. If all frames in the tag are unsynchronised the\n   unsynchronisation flag in the tag header SHOULD be set. It MUST NOT\n   be set if the tag has a frame which is not unsynchronised.\n\u003c/p\u003e\u003cp\u003eAssume the first byte of the audio to be $FF. The special case when\n   the last byte of the last frame is $FF and no padding nor footer is\n   used will then introduce a false synchronisation. This can be solved\n   by adding a footer, adding padding or unsynchronising the frame and\n   add $00 to the end of the frame data, thus adding more byte to the\n   frame size than a normal unsynchronisation would. Although not\n   preferred, it is allowed to apply the last method on all frames\n   ending with $FF.\n\u003c/p\u003e\u003cp\u003eIt is preferred that the tag is either completely unsynchronised or\n   not unsynchronised at all. A completely unsynchronised tag has no\n   false synchonisations in it, as defined above, and does not end with\n   $FF. A completely non-unsynchronised tag contains no unsynchronised\n   frames, and thus the unsynchronisation flag in the header is cleared.\n\u003c/p\u003e\u003cp\u003eDo bear in mind, that if compression or encryption is used, the\n   unsynchronisation scheme MUST be applied afterwards. When decoding an\n   unsynchronised frame, the unsynchronisation scheme MUST be reversed\n   first, encryption and decompression afterwards.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e \u003cem\u003eSynchsafe integers\u003c/em\u003e\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eIn some parts of the tag it is inconvenient to use the\n   unsychronisation scheme because the size of unsynchronised data is\n   not known in advance, which is particularly problematic with size\n   descriptors. The solution in ID3v2 is to use synchsafe integers, in\n   which there can never be any false synchs. Synchsafe integers are\n   integers that keep its highest bit (bit 7) zeroed, making seven bits\n   out of eight available. Thus a 32 bit synchsafe integer can store 28\n   bits of information.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n     255 (%11111111) syncIntegerd as a 16 bit synchsafe integer is 383\n     (%00000001 01111111).\n\u003c/pre\u003e\u003cp\u003e(\u003ca\u003ehttp://www.id3.org/id3v2.4.0-structure\u003c/a\u003e)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ID3.Parser.UnSync",
          "name": "UnSync",
          "package": "idiii",
          "source": "src/ID3-Parser-UnSync.html",
          "type": "module"
        },
        "index": {
          "description": "UNSYNCHRONISATION This module contents couple of functions to convert readed bytes as Word8 of synchronized values to unsynchronised Integer UNSYNCRONISATION The only purpose of unsynchronisation is to make the ID3v2 tag as compatible as possible with existing software and hardware There is no use in unsynchronising tags if the file is only to be processed only by ID3v2 aware software and hardware Unsynchronisation is only useful with tags in MPEG layer II and III MPEG and AAC files The unsynchronisation scheme Whenever false synchronisation is found within the tag one zeroed byte is inserted after the first false synchronisation byte The format of synchronisations that should be altered by ID3 syncIntegerrs is as follows xxxxx and should be replaced with xxxxx This has the side effect that all FF combinations have to be altered so they will not be affected by the decoding process Therefore all the FF combinations have to be replaced with the FF combination during the unsynchronisation To indicate usage of the unsynchronisation the unsynchronisation flag in the frame header should be set This bit MUST be set if the frame was altered by the unsynchronisation and SHOULD NOT be set if unaltered If all frames in the tag are unsynchronised the unsynchronisation flag in the tag header SHOULD be set It MUST NOT be set if the tag has frame which is not unsynchronised Assume the first byte of the audio to be FF The special case when the last byte of the last frame is FF and no padding nor footer is used will then introduce false synchronisation This can be solved by adding footer adding padding or unsynchronising the frame and add to the end of the frame data thus adding more byte to the frame size than normal unsynchronisation would Although not preferred it is allowed to apply the last method on all frames ending with FF It is preferred that the tag is either completely unsynchronised or not unsynchronised at all completely unsynchronised tag has no false synchonisations in it as defined above and does not end with FF completely non-unsynchronised tag contains no unsynchronised frames and thus the unsynchronisation flag in the header is cleared Do bear in mind that if compression or encryption is used the unsynchronisation scheme MUST be applied afterwards When decoding an unsynchronised frame the unsynchronisation scheme MUST be reversed first encryption and decompression afterwards Synchsafe integers In some parts of the tag it is inconvenient to use the unsychronisation scheme because the size of unsynchronised data is not known in advance which is particularly problematic with size descriptors The solution in ID3v2 is to use synchsafe integers in which there can never be any false synchs Synchsafe integers are integers that keep its highest bit bit zeroed making seven bits out of eight available Thus bit synchsafe integer can store bits of information Example syncIntegerd as bit synchsafe integer is http www.id3.org id3v2.4.0-structure",
          "hierarchy": "ID3 Parser UnSync",
          "module": "ID3.Parser.UnSync",
          "name": "UnSync",
          "package": "idiii",
          "partial": "Un Sync",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-UnSync.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econverting \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e value to list of bytes\n\u003c/p\u003e",
          "module": "ID3.Parser.UnSync",
          "name": "integerToWords",
          "package": "idiii",
          "signature": "Int -\u003e Integer -\u003e [Word8]",
          "source": "src/ID3-Parser-UnSync.html#integerToWords",
          "type": "function"
        },
        "index": {
          "description": "converting Integer value to list of bytes",
          "hierarchy": "ID3 Parser UnSync",
          "module": "ID3.Parser.UnSync",
          "name": "integerToWords",
          "normalized": "Int-\u003eInteger-\u003e[Word]",
          "package": "idiii",
          "partial": "To Words",
          "signature": "Int-\u003eInteger-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-UnSync.html#v:integerToWords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esynchronisation between \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "ID3.Parser.UnSync",
          "name": "syncInteger",
          "package": "idiii",
          "signature": "Integer -\u003e Integer",
          "source": "src/ID3-Parser-UnSync.html#syncInteger",
          "type": "function"
        },
        "index": {
          "description": "synchronisation between Integer",
          "hierarchy": "ID3 Parser UnSync",
          "module": "ID3.Parser.UnSync",
          "name": "syncInteger",
          "normalized": "Integer-\u003eInteger",
          "package": "idiii",
          "partial": "Integer",
          "signature": "Integer-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-UnSync.html#v:syncInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esychronisation (just \u003ccode\u003eintegerToWords 4 . syncInteger\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "ID3.Parser.UnSync",
          "name": "synchronise",
          "package": "idiii",
          "signature": "Integer -\u003e [Word8]",
          "source": "src/ID3-Parser-UnSync.html#synchronise",
          "type": "function"
        },
        "index": {
          "description": "sychronisation just integerToWords syncInteger",
          "hierarchy": "ID3 Parser UnSync",
          "module": "ID3.Parser.UnSync",
          "name": "synchronise",
          "normalized": "Integer-\u003e[Word]",
          "package": "idiii",
          "signature": "Integer-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-UnSync.html#v:synchronise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunsynchronisation between \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "ID3.Parser.UnSync",
          "name": "unSyncInteger",
          "package": "idiii",
          "signature": "Integer -\u003e Integer",
          "source": "src/ID3-Parser-UnSync.html#unSyncInteger",
          "type": "function"
        },
        "index": {
          "description": "unsynchronisation between Integer",
          "hierarchy": "ID3 Parser UnSync",
          "module": "ID3.Parser.UnSync",
          "name": "unSyncInteger",
          "normalized": "Integer-\u003eInteger",
          "package": "idiii",
          "partial": "Sync Integer",
          "signature": "Integer-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-UnSync.html#v:unSyncInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunsychronisation (just \u003ccode\u003eunSyncInteger . wordsToInteger\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "ID3.Parser.UnSync",
          "name": "unSynchronise",
          "package": "idiii",
          "signature": "[Word8] -\u003e Integer",
          "source": "src/ID3-Parser-UnSync.html#unSynchronise",
          "type": "function"
        },
        "index": {
          "description": "unsychronisation just unSyncInteger wordsToInteger",
          "hierarchy": "ID3 Parser UnSync",
          "module": "ID3.Parser.UnSync",
          "name": "unSynchronise",
          "normalized": "[Word]-\u003eInteger",
          "package": "idiii",
          "partial": "Synchronise",
          "signature": "[Word]-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-UnSync.html#v:unSynchronise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econverting list of bytes to \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e value\n\u003c/p\u003e",
          "module": "ID3.Parser.UnSync",
          "name": "wordsToInteger",
          "package": "idiii",
          "signature": "[Word8] -\u003e Integer",
          "source": "src/ID3-Parser-UnSync.html#wordsToInteger",
          "type": "function"
        },
        "index": {
          "description": "converting list of bytes to Integer value",
          "hierarchy": "ID3 Parser UnSync",
          "module": "ID3.Parser.UnSync",
          "name": "wordsToInteger",
          "normalized": "[Word]-\u003eInteger",
          "package": "idiii",
          "partial": "To Integer",
          "signature": "[Word]-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser-UnSync.html#v:wordsToInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Parser",
          "name": "Parser",
          "package": "idiii",
          "source": "src/ID3-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "ID3 Parser",
          "module": "ID3.Parser",
          "name": "Parser",
          "package": "idiii",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.ReadTag",
          "name": "ReadTag",
          "package": "idiii",
          "source": "src/ID3-ReadTag.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "ID3 ReadTag",
          "module": "ID3.ReadTag",
          "name": "ReadTag",
          "package": "idiii",
          "partial": "Read Tag",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-ReadTag.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.ReadTag",
          "name": "hReadTag",
          "package": "idiii",
          "signature": "Handle -\u003e IO (Maybe ID3Tag)",
          "source": "src/ID3-ReadTag.html#hReadTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 ReadTag",
          "module": "ID3.ReadTag",
          "name": "hReadTag",
          "normalized": "Handle-\u003eIO(Maybe ID Tag)",
          "package": "idiii",
          "partial": "Read Tag",
          "signature": "Handle-\u003eIO(Maybe ID Tag)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-ReadTag.html#v:hReadTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"ID3.ReadTag\",\"ID3.Simple\"]",
          "name": "readTag",
          "package": "idiii",
          "signature": "FilePath -\u003e IO (Maybe ID3Tag)",
          "source": "src/ID3-ReadTag.html#readTag",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/idiii/docs/ID3-ReadTag.html#v:readTag\",\"http://hackage.haskell.org/package/idiii/docs/ID3-Simple.html#v:readTag\"]"
        },
        "index": {
          "hierarchy": "ID3 ReadTag",
          "module": "ID3.ReadTag",
          "name": "readTag",
          "normalized": "FilePath-\u003eIO(Maybe ID Tag)",
          "package": "idiii",
          "partial": "Tag",
          "signature": "FilePath-\u003eIO(Maybe ID Tag)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-ReadTag.html#v:readTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Simple",
          "name": "Simple",
          "package": "idiii",
          "source": "src/ID3-Simple.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "ID3 Simple",
          "module": "ID3.Simple",
          "name": "Simple",
          "package": "idiii",
          "partial": "Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Simple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Simple",
          "name": "Tag",
          "package": "idiii",
          "source": "src/ID3-Simple.html#Tag",
          "type": "type"
        },
        "index": {
          "hierarchy": "ID3 Simple",
          "module": "ID3.Simple",
          "name": "Tag",
          "package": "idiii",
          "partial": "Tag",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Simple.html#t:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Simple",
          "name": "getAlbum",
          "package": "idiii",
          "signature": "Tag -\u003e Maybe String",
          "source": "src/ID3-Simple.html#getAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Simple",
          "module": "ID3.Simple",
          "name": "getAlbum",
          "normalized": "Tag-\u003eMaybe String",
          "package": "idiii",
          "partial": "Album",
          "signature": "Tag-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Simple.html#v:getAlbum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Simple",
          "name": "getArtist",
          "package": "idiii",
          "signature": "Tag -\u003e Maybe String",
          "source": "src/ID3-Simple.html#getArtist",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Simple",
          "module": "ID3.Simple",
          "name": "getArtist",
          "normalized": "Tag-\u003eMaybe String",
          "package": "idiii",
          "partial": "Artist",
          "signature": "Tag-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Simple.html#v:getArtist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Simple",
          "name": "getTitle",
          "package": "idiii",
          "signature": "Tag -\u003e Maybe String",
          "source": "src/ID3-Simple.html#getTitle",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Simple",
          "module": "ID3.Simple",
          "name": "getTitle",
          "normalized": "Tag-\u003eMaybe String",
          "package": "idiii",
          "partial": "Title",
          "signature": "Tag-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Simple.html#v:getTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Simple",
          "name": "getTrack",
          "package": "idiii",
          "signature": "Tag -\u003e Maybe String",
          "source": "src/ID3-Simple.html#getTrack",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Simple",
          "module": "ID3.Simple",
          "name": "getTrack",
          "normalized": "Tag-\u003eMaybe String",
          "package": "idiii",
          "partial": "Track",
          "signature": "Tag-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Simple.html#v:getTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Simple",
          "name": "getYear",
          "package": "idiii",
          "signature": "Tag -\u003e Maybe String",
          "source": "src/ID3-Simple.html#getYear",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Simple",
          "module": "ID3.Simple",
          "name": "getYear",
          "normalized": "Tag-\u003eMaybe String",
          "package": "idiii",
          "partial": "Year",
          "signature": "Tag-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Simple.html#v:getYear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Simple",
          "name": "setAlbum",
          "package": "idiii",
          "signature": "String -\u003e Tag -\u003e Tag",
          "source": "src/ID3-Simple.html#setAlbum",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Simple",
          "module": "ID3.Simple",
          "name": "setAlbum",
          "normalized": "String-\u003eTag-\u003eTag",
          "package": "idiii",
          "partial": "Album",
          "signature": "String-\u003eTag-\u003eTag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Simple.html#v:setAlbum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Simple",
          "name": "setArtist",
          "package": "idiii",
          "signature": "String -\u003e Tag -\u003e Tag",
          "source": "src/ID3-Simple.html#setArtist",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Simple",
          "module": "ID3.Simple",
          "name": "setArtist",
          "normalized": "String-\u003eTag-\u003eTag",
          "package": "idiii",
          "partial": "Artist",
          "signature": "String-\u003eTag-\u003eTag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Simple.html#v:setArtist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Simple",
          "name": "setTitle",
          "package": "idiii",
          "signature": "String -\u003e Tag -\u003e Tag",
          "source": "src/ID3-Simple.html#setTitle",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Simple",
          "module": "ID3.Simple",
          "name": "setTitle",
          "normalized": "String-\u003eTag-\u003eTag",
          "package": "idiii",
          "partial": "Title",
          "signature": "String-\u003eTag-\u003eTag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Simple.html#v:setTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Simple",
          "name": "setTrack",
          "package": "idiii",
          "signature": "String -\u003e Tag -\u003e Tag",
          "source": "src/ID3-Simple.html#setTrack",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Simple",
          "module": "ID3.Simple",
          "name": "setTrack",
          "normalized": "String-\u003eTag-\u003eTag",
          "package": "idiii",
          "partial": "Track",
          "signature": "String-\u003eTag-\u003eTag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Simple.html#v:setTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Simple",
          "name": "setYear",
          "package": "idiii",
          "signature": "String -\u003e Tag -\u003e Tag",
          "source": "src/ID3-Simple.html#setYear",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Simple",
          "module": "ID3.Simple",
          "name": "setYear",
          "normalized": "String-\u003eTag-\u003eTag",
          "package": "idiii",
          "partial": "Year",
          "signature": "String-\u003eTag-\u003eTag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Simple.html#v:setYear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"ID3.Simple\",\"ID3.WriteTag\"]",
          "name": "writeTag",
          "package": "idiii",
          "signature": "FilePath -\u003e ID3Tag -\u003e IO ()",
          "source": "src/ID3-WriteTag.html#writeTag",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/idiii/docs/ID3-Simple.html#v:writeTag\",\"http://hackage.haskell.org/package/idiii/docs/ID3-WriteTag.html#v:writeTag\"]"
        },
        "index": {
          "hierarchy": "ID3 Simple",
          "module": "ID3.Simple",
          "name": "writeTag",
          "normalized": "FilePath-\u003eID Tag-\u003eIO()",
          "package": "idiii",
          "partial": "Tag",
          "signature": "FilePath-\u003eID Tag-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Simple.html#v:writeTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.ExtHeader",
          "name": "ExtHeader",
          "package": "idiii",
          "source": "src/ID3-Type-ExtHeader.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "ID3 Type ExtHeader",
          "module": "ID3.Type.ExtHeader",
          "name": "ExtHeader",
          "package": "idiii",
          "partial": "Ext Header",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-ExtHeader.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eEXTENDED HEADER OVERVIEW\u003c/em\u003e (optional)\n\u003c/p\u003e\u003cp\u003eThe extended header contains information that can provide further\n   insight in the structure of the tag, but is not vital to the correct\n   parsing of the tag information; hence the extended header is\n   optional.\n\u003c/p\u003e\u003cpre\u003e\n     Extended header size   4 * %0xxxxxxx\n     Number of flag bytes       $01\n     Extended Flags             $xx\n\u003c/pre\u003e\u003cp\u003eWhere the 'Extended header size' is the size of the whole extended\n   header, stored as a 32 bit synchsafe integer. An extended header can\n   thus never have a size of fewer than six bytes.\n\u003c/p\u003e",
          "module": "ID3.Type.ExtHeader",
          "name": "ID3ExtHeader",
          "package": "idiii",
          "source": "src/ID3-Type-ExtHeader.html#ID3ExtHeader",
          "type": "data"
        },
        "index": {
          "description": "EXTENDED HEADER OVERVIEW optional The extended header contains information that can provide further insight in the structure of the tag but is not vital to the correct parsing of the tag information hence the extended header is optional Extended header size xxxxxxx Number of flag bytes Extended Flags xx Where the Extended header size is the size of the whole extended header stored as bit synchsafe integer An extended header can thus never have size of fewer than six bytes",
          "hierarchy": "ID3 Type ExtHeader",
          "module": "ID3.Type.ExtHeader",
          "name": "ID3ExtHeader",
          "package": "idiii",
          "partial": "ID Ext Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-ExtHeader.html#t:ID3ExtHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.ExtHeader",
          "name": "crcData",
          "package": "idiii",
          "signature": "Accessor ID3ExtHeader (Maybe [Word8])",
          "source": "src/ID3-Type-ExtHeader.html#crcData",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type ExtHeader",
          "module": "ID3.Type.ExtHeader",
          "name": "crcData",
          "normalized": "Accessor ID ExtHeader(Maybe[Word])",
          "package": "idiii",
          "partial": "Data",
          "signature": "Accessor ID ExtHeader(Maybe[Word])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-ExtHeader.html#v:crcData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.ExtHeader",
          "name": "extSize",
          "package": "idiii",
          "signature": "Accessor ID3ExtHeader Integer",
          "source": "src/ID3-Type-ExtHeader.html#extSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type ExtHeader",
          "module": "ID3.Type.ExtHeader",
          "name": "extSize",
          "package": "idiii",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-ExtHeader.html#v:extSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.ExtHeader",
          "name": "initID3ExtHeader",
          "package": "idiii",
          "signature": "[ID3ExtHeader -\u003e ID3ExtHeader] -\u003e ID3ExtHeader",
          "source": "src/ID3-Type-ExtHeader.html#initID3ExtHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type ExtHeader",
          "module": "ID3.Type.ExtHeader",
          "name": "initID3ExtHeader",
          "normalized": "[ID ExtHeader-\u003eID ExtHeader]-\u003eID ExtHeader",
          "package": "idiii",
          "partial": "ID Ext Header",
          "signature": "[ID ExtHeader-\u003eID ExtHeader]-\u003eID ExtHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-ExtHeader.html#v:initID3ExtHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.ExtHeader",
          "name": "isUpdate",
          "package": "idiii",
          "signature": "Accessor ID3ExtHeader Bool",
          "source": "src/ID3-Type-ExtHeader.html#isUpdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type ExtHeader",
          "module": "ID3.Type.ExtHeader",
          "name": "isUpdate",
          "package": "idiii",
          "partial": "Update",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-ExtHeader.html#v:isUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.ExtHeader",
          "name": "restrictionsPresent",
          "package": "idiii",
          "signature": "Accessor ID3ExtHeader Bool",
          "source": "src/ID3-Type-ExtHeader.html#restrictionsPresent",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type ExtHeader",
          "module": "ID3.Type.ExtHeader",
          "name": "restrictionsPresent",
          "package": "idiii",
          "partial": "Present",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-ExtHeader.html#v:restrictionsPresent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Flags",
          "name": "Flags",
          "package": "idiii",
          "source": "src/ID3-Type-Flags.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "ID3 Type Flags",
          "module": "ID3.Type.Flags",
          "name": "Flags",
          "package": "idiii",
          "partial": "Flags",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Flags.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Flags",
          "name": "flagsToWord8",
          "package": "idiii",
          "signature": "(Bool, Bool, Bool, Bool, Bool, Bool, Bool, Bool) -\u003e Word8",
          "source": "src/ID3-Type-Flags.html#flagsToWord8",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Flags",
          "module": "ID3.Type.Flags",
          "name": "flagsToWord8",
          "normalized": "(Bool,Bool,Bool,Bool,Bool,Bool,Bool,Bool)-\u003eWord",
          "package": "idiii",
          "partial": "To Word",
          "signature": "(Bool,Bool,Bool,Bool,Bool,Bool,Bool,Bool)-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Flags.html#v:flagsToWord8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "Frame",
          "package": "idiii",
          "source": "src/ID3-Type-Frame.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "Frame",
          "package": "idiii",
          "partial": "Frame",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "FormatFlags",
          "package": "idiii",
          "source": "src/ID3-Type-Frame.html#FormatFlags",
          "type": "data"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "FormatFlags",
          "package": "idiii",
          "partial": "Format Flags",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#t:FormatFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "FrameFlags",
          "package": "idiii",
          "source": "src/ID3-Type-Frame.html#FrameFlags",
          "type": "data"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "FrameFlags",
          "package": "idiii",
          "partial": "Frame Flags",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#t:FrameFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrame Header\n\u003c/p\u003e",
          "module": "ID3.Type.Frame",
          "name": "FrameHeader",
          "package": "idiii",
          "source": "src/ID3-Type-Frame.html#FrameHeader",
          "type": "data"
        },
        "index": {
          "description": "Frame Header",
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "FrameHeader",
          "package": "idiii",
          "partial": "Frame Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#t:FrameHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "FrameID",
          "package": "idiii",
          "source": "src/ID3-Type-Frame.html#FrameID",
          "type": "type"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "FrameID",
          "package": "idiii",
          "partial": "Frame ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#t:FrameID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "FrameName",
          "package": "idiii",
          "source": "src/ID3-Type-Frame.html#FrameName",
          "type": "type"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "FrameName",
          "package": "idiii",
          "partial": "Frame Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#t:FrameName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "FrameSize",
          "package": "idiii",
          "source": "src/ID3-Type-Frame.html#FrameSize",
          "type": "type"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "FrameSize",
          "package": "idiii",
          "partial": "Frame Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#t:FrameSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "ID3Frame",
          "package": "idiii",
          "source": "src/ID3-Type-Frame.html#ID3Frame",
          "type": "data"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "ID3Frame",
          "package": "idiii",
          "partial": "ID Frame",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#t:ID3Frame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "StatusFlags",
          "package": "idiii",
          "source": "src/ID3-Type-Frame.html#StatusFlags",
          "type": "data"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "StatusFlags",
          "package": "idiii",
          "partial": "Status Flags",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#t:StatusFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "FormatFlags",
          "package": "idiii",
          "signature": "FormatFlags Word8 (Bool, Bool, Bool, Bool, Bool)",
          "source": "src/ID3-Type-Frame.html#FormatFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "FormatFlags",
          "normalized": "FormatFlags Word(Bool,Bool,Bool,Bool,Bool)",
          "package": "idiii",
          "partial": "Format Flags",
          "signature": "FormatFlags Word(Bool,Bool,Bool,Bool,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:FormatFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "FrameFlags",
          "package": "idiii",
          "signature": "FrameFlags",
          "source": "src/ID3-Type-Frame.html#FrameFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "FrameFlags",
          "package": "idiii",
          "partial": "Frame Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:FrameFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "FrameHeader",
          "package": "idiii",
          "signature": "FrameHeader",
          "source": "src/ID3-Type-Frame.html#FrameHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "FrameHeader",
          "package": "idiii",
          "partial": "Frame Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:FrameHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "ID3Frame",
          "package": "idiii",
          "signature": "ID3Frame",
          "source": "src/ID3-Type-Frame.html#ID3Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "ID3Frame",
          "package": "idiii",
          "partial": "ID Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:ID3Frame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "StatusFlags",
          "package": "idiii",
          "signature": "StatusFlags Word8 (Bool, Bool, Bool)",
          "source": "src/ID3-Type-Frame.html#StatusFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "StatusFlags",
          "normalized": "StatusFlags Word(Bool,Bool,Bool)",
          "package": "idiii",
          "partial": "Status Flags",
          "signature": "StatusFlags Word(Bool,Bool,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:StatusFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "anyFormatFlagsOn",
          "package": "idiii",
          "signature": "FormatFlags -\u003e Bool",
          "source": "src/ID3-Type-Frame.html#anyFormatFlagsOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "anyFormatFlagsOn",
          "normalized": "FormatFlags-\u003eBool",
          "package": "idiii",
          "partial": "Format Flags On",
          "signature": "FormatFlags-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:anyFormatFlagsOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "anyStatusFlagsOn",
          "package": "idiii",
          "signature": "StatusFlags -\u003e Bool",
          "source": "src/ID3-Type-Frame.html#anyStatusFlagsOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "anyStatusFlagsOn",
          "normalized": "StatusFlags-\u003eBool",
          "package": "idiii",
          "partial": "Status Flags On",
          "signature": "StatusFlags-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:anyStatusFlagsOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "compressedFlag",
          "package": "idiii",
          "signature": "FormatFlags -\u003e Bool",
          "source": "src/ID3-Type-Frame.html#compressedFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "compressedFlag",
          "normalized": "FormatFlags-\u003eBool",
          "package": "idiii",
          "partial": "Flag",
          "signature": "FormatFlags-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:compressedFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "dataLengthIdFlag",
          "package": "idiii",
          "signature": "FormatFlags -\u003e Bool",
          "source": "src/ID3-Type-Frame.html#dataLengthIdFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "dataLengthIdFlag",
          "normalized": "FormatFlags-\u003eBool",
          "package": "idiii",
          "partial": "Length Id Flag",
          "signature": "FormatFlags-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:dataLengthIdFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "emptyFrameFlags",
          "package": "idiii",
          "signature": "FrameFlags",
          "source": "src/ID3-Type-Frame.html#emptyFrameFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "emptyFrameFlags",
          "package": "idiii",
          "partial": "Frame Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:emptyFrameFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "emptyFrameHeader",
          "package": "idiii",
          "signature": "FrameHeader",
          "source": "src/ID3-Type-Frame.html#emptyFrameHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "emptyFrameHeader",
          "package": "idiii",
          "partial": "Frame Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:emptyFrameHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "emptyID3Frame",
          "package": "idiii",
          "signature": "ID3Frame",
          "source": "src/ID3-Type-Frame.html#emptyID3Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "emptyID3Frame",
          "package": "idiii",
          "partial": "ID Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:emptyID3Frame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "encryptedFlag",
          "package": "idiii",
          "signature": "FormatFlags -\u003e Bool",
          "source": "src/ID3-Type-Frame.html#encryptedFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "encryptedFlag",
          "normalized": "FormatFlags-\u003eBool",
          "package": "idiii",
          "partial": "Flag",
          "signature": "FormatFlags-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:encryptedFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "fileDiscardFlag",
          "package": "idiii",
          "signature": "StatusFlags -\u003e Bool",
          "source": "src/ID3-Type-Frame.html#fileDiscardFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "fileDiscardFlag",
          "normalized": "StatusFlags-\u003eBool",
          "package": "idiii",
          "partial": "Discard Flag",
          "signature": "StatusFlags-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:fileDiscardFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "formatFlags",
          "package": "idiii",
          "signature": "Accessor FrameFlags FormatFlags",
          "source": "src/ID3-Type-Frame.html#formatFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "formatFlags",
          "package": "idiii",
          "partial": "Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:formatFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrame format flags\n\u003c/p\u003e",
          "module": "ID3.Type.Frame",
          "name": "formatFlags_",
          "package": "idiii",
          "signature": "FormatFlags",
          "source": "src/ID3-Type-Frame.html#FrameFlags",
          "type": "function"
        },
        "index": {
          "description": "Frame format flags",
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "formatFlags_",
          "package": "idiii",
          "partial": "Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:formatFlags_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "frFlags",
          "package": "idiii",
          "signature": "Accessor FrameHeader FrameFlags",
          "source": "src/ID3-Type-Frame.html#frFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "frFlags",
          "package": "idiii",
          "partial": "Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:frFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eframe Flags\n\u003c/p\u003e",
          "module": "ID3.Type.Frame",
          "name": "frFlags_",
          "package": "idiii",
          "signature": "FrameFlags",
          "source": "src/ID3-Type-Frame.html#FrameHeader",
          "type": "function"
        },
        "index": {
          "description": "frame Flags",
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "frFlags_",
          "package": "idiii",
          "partial": "Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:frFlags_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "frHeader",
          "package": "idiii",
          "signature": "Accessor ID3Frame FrameHeader",
          "source": "src/ID3-Type-Frame.html#frHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "frHeader",
          "package": "idiii",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:frHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eframe Header\n\u003c/p\u003e",
          "module": "ID3.Type.Frame",
          "name": "frHeader_",
          "package": "idiii",
          "signature": "FrameHeader",
          "source": "src/ID3-Type-Frame.html#ID3Frame",
          "type": "function"
        },
        "index": {
          "description": "frame Header",
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "frHeader_",
          "package": "idiii",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:frHeader_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "frID",
          "package": "idiii",
          "signature": "Accessor FrameHeader FrameID",
          "source": "src/ID3-Type-Frame.html#frID",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "frID",
          "package": "idiii",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:frID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eframe ID\n\u003c/p\u003e",
          "module": "ID3.Type.Frame",
          "name": "frID_",
          "package": "idiii",
          "signature": "FrameID",
          "source": "src/ID3-Type-Frame.html#FrameHeader",
          "type": "function"
        },
        "index": {
          "description": "frame ID",
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "frID_",
          "package": "idiii",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:frID_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "frInfo",
          "package": "idiii",
          "signature": "Accessor ID3Frame FrameInfo",
          "source": "src/ID3-Type-Frame.html#frInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "frInfo",
          "package": "idiii",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:frInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eframe Information Value\n\u003c/p\u003e",
          "module": "ID3.Type.Frame",
          "name": "frInfo_",
          "package": "idiii",
          "signature": "FrameInfo",
          "source": "src/ID3-Type-Frame.html#ID3Frame",
          "type": "function"
        },
        "index": {
          "description": "frame Information Value",
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "frInfo_",
          "package": "idiii",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:frInfo_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "frSize",
          "package": "idiii",
          "signature": "Accessor FrameHeader FrameSize",
          "source": "src/ID3-Type-Frame.html#frSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "frSize",
          "package": "idiii",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:frSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eframe Size\n\u003c/p\u003e",
          "module": "ID3.Type.Frame",
          "name": "frSize_",
          "package": "idiii",
          "signature": "FrameSize",
          "source": "src/ID3-Type-Frame.html#FrameHeader",
          "type": "function"
        },
        "index": {
          "description": "frame Size",
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "frSize_",
          "package": "idiii",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:frSize_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "frameDiscardFlag",
          "package": "idiii",
          "signature": "StatusFlags -\u003e Bool",
          "source": "src/ID3-Type-Frame.html#frameDiscardFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "frameDiscardFlag",
          "normalized": "StatusFlags-\u003eBool",
          "package": "idiii",
          "partial": "Discard Flag",
          "signature": "StatusFlags-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:frameDiscardFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "groupPartFlag",
          "package": "idiii",
          "signature": "FormatFlags -\u003e Bool",
          "source": "src/ID3-Type-Frame.html#groupPartFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "groupPartFlag",
          "normalized": "FormatFlags-\u003eBool",
          "package": "idiii",
          "partial": "Part Flag",
          "signature": "FormatFlags-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:groupPartFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "initFrame",
          "package": "idiii",
          "signature": "FrameID -\u003e ID3Frame",
          "source": "src/ID3-Type-Frame.html#initFrame",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "initFrame",
          "normalized": "FrameID-\u003eID Frame",
          "package": "idiii",
          "partial": "Frame",
          "signature": "FrameID-\u003eID Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:initFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "initFrameFlags",
          "package": "idiii",
          "signature": "[FrameFlags -\u003e FrameFlags] -\u003e FrameFlags",
          "source": "src/ID3-Type-Frame.html#initFrameFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "initFrameFlags",
          "normalized": "[FrameFlags-\u003eFrameFlags]-\u003eFrameFlags",
          "package": "idiii",
          "partial": "Frame Flags",
          "signature": "[FrameFlags-\u003eFrameFlags]-\u003eFrameFlags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:initFrameFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "initFrameHeader",
          "package": "idiii",
          "signature": "[FrameHeader -\u003e FrameHeader] -\u003e FrameHeader",
          "source": "src/ID3-Type-Frame.html#initFrameHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "initFrameHeader",
          "normalized": "[FrameHeader-\u003eFrameHeader]-\u003eFrameHeader",
          "package": "idiii",
          "partial": "Frame Header",
          "signature": "[FrameHeader-\u003eFrameHeader]-\u003eFrameHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:initFrameHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "initID3Frame",
          "package": "idiii",
          "signature": "[ID3Frame -\u003e ID3Frame] -\u003e ID3Frame",
          "source": "src/ID3-Type-Frame.html#initID3Frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "initID3Frame",
          "normalized": "[ID Frame-\u003eID Frame]-\u003eID Frame",
          "package": "idiii",
          "partial": "ID Frame",
          "signature": "[ID Frame-\u003eID Frame]-\u003eID Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:initID3Frame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "readOnlyFlag",
          "package": "idiii",
          "signature": "StatusFlags -\u003e Bool",
          "source": "src/ID3-Type-Frame.html#readOnlyFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "readOnlyFlag",
          "normalized": "StatusFlags-\u003eBool",
          "package": "idiii",
          "partial": "Only Flag",
          "signature": "StatusFlags-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:readOnlyFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "showBinary",
          "package": "idiii",
          "signature": "[Word8] -\u003e String",
          "source": "src/ID3-Type-Frame.html#showBinary",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "showBinary",
          "normalized": "[Word]-\u003eString",
          "package": "idiii",
          "partial": "Binary",
          "signature": "[Word]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:showBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "showFormatFlags",
          "package": "idiii",
          "signature": "FormatFlags -\u003e String",
          "source": "src/ID3-Type-Frame.html#showFormatFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "showFormatFlags",
          "normalized": "FormatFlags-\u003eString",
          "package": "idiii",
          "partial": "Format Flags",
          "signature": "FormatFlags-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:showFormatFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "showStatusFlags",
          "package": "idiii",
          "signature": "StatusFlags -\u003e String",
          "source": "src/ID3-Type-Frame.html#showStatusFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "showStatusFlags",
          "normalized": "StatusFlags-\u003eString",
          "package": "idiii",
          "partial": "Status Flags",
          "signature": "StatusFlags-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:showStatusFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "statusFlags",
          "package": "idiii",
          "signature": "Accessor FrameFlags StatusFlags",
          "source": "src/ID3-Type-Frame.html#statusFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "statusFlags",
          "package": "idiii",
          "partial": "Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:statusFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrame status flags\n\u003c/p\u003e",
          "module": "ID3.Type.Frame",
          "name": "statusFlags_",
          "package": "idiii",
          "signature": "StatusFlags",
          "source": "src/ID3-Type-Frame.html#FrameFlags",
          "type": "function"
        },
        "index": {
          "description": "Frame status flags",
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "statusFlags_",
          "package": "idiii",
          "partial": "Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:statusFlags_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "textContent",
          "package": "idiii",
          "signature": "Accessor ID3Frame String",
          "source": "src/ID3-Type-Frame.html#textContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "textContent",
          "package": "idiii",
          "partial": "Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:textContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Frame",
          "name": "unsychronisedFlag",
          "package": "idiii",
          "signature": "FormatFlags -\u003e Bool",
          "source": "src/ID3-Type-Frame.html#unsychronisedFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Frame",
          "module": "ID3.Type.Frame",
          "name": "unsychronisedFlag",
          "normalized": "FormatFlags-\u003eBool",
          "package": "idiii",
          "partial": "Flag",
          "signature": "FormatFlags-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Frame.html#v:unsychronisedFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "FrameInfo",
          "package": "idiii",
          "source": "src/ID3-Type-FrameInfo.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "FrameInfo",
          "package": "idiii",
          "partial": "Frame Info",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "FrameInfo",
          "package": "idiii",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "FrameInfo",
          "package": "idiii",
          "partial": "Frame Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#t:FrameInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "AENC",
          "package": "idiii",
          "signature": "AENC",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "AENC",
          "package": "idiii",
          "partial": "AENC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:AENC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "APIC",
          "package": "idiii",
          "signature": "APIC",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "APIC",
          "package": "idiii",
          "partial": "APIC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:APIC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "ASPI",
          "package": "idiii",
          "signature": "ASPI",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "ASPI",
          "package": "idiii",
          "partial": "ASPI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:ASPI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "COMM",
          "package": "idiii",
          "signature": "COMM",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "COMM",
          "package": "idiii",
          "partial": "COMM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:COMM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "COMR",
          "package": "idiii",
          "signature": "COMR",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "COMR",
          "package": "idiii",
          "partial": "COMR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:COMR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "ENCR",
          "package": "idiii",
          "signature": "ENCR",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "ENCR",
          "package": "idiii",
          "partial": "ENCR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:ENCR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "EQU2",
          "package": "idiii",
          "signature": "EQU2",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "EQU2",
          "package": "idiii",
          "partial": "EQU",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:EQU2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "ETCO",
          "package": "idiii",
          "signature": "ETCO",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "ETCO",
          "package": "idiii",
          "partial": "ETCO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:ETCO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "GEOB",
          "package": "idiii",
          "signature": "GEOB",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "GEOB",
          "package": "idiii",
          "partial": "GEOB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:GEOB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "GRID",
          "package": "idiii",
          "signature": "GRID",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "GRID",
          "package": "idiii",
          "partial": "GRID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:GRID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "LINK",
          "package": "idiii",
          "signature": "LINK",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "LINK",
          "package": "idiii",
          "partial": "LINK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:LINK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "MCDI",
          "package": "idiii",
          "signature": "MCDI",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "MCDI",
          "package": "idiii",
          "partial": "MCDI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:MCDI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "MLLT",
          "package": "idiii",
          "signature": "MLLT",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "MLLT",
          "package": "idiii",
          "partial": "MLLT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:MLLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "OWNE",
          "package": "idiii",
          "signature": "OWNE",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "OWNE",
          "package": "idiii",
          "partial": "OWNE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:OWNE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "PCNT",
          "package": "idiii",
          "signature": "PCNT",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "PCNT",
          "package": "idiii",
          "partial": "PCNT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:PCNT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "POPM",
          "package": "idiii",
          "signature": "POPM",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "POPM",
          "package": "idiii",
          "partial": "POPM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:POPM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "POSS",
          "package": "idiii",
          "signature": "POSS",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "POSS",
          "package": "idiii",
          "partial": "POSS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:POSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "PRIV",
          "package": "idiii",
          "signature": "PRIV",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "PRIV",
          "package": "idiii",
          "partial": "PRIV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:PRIV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "RBUF",
          "package": "idiii",
          "signature": "RBUF",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "RBUF",
          "package": "idiii",
          "partial": "RBUF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:RBUF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "RVA2",
          "package": "idiii",
          "signature": "RVA2",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "RVA2",
          "package": "idiii",
          "partial": "RVA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:RVA2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "RVRB",
          "package": "idiii",
          "signature": "RVRB",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "RVRB",
          "package": "idiii",
          "partial": "RVRB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:RVRB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "SIGN",
          "package": "idiii",
          "signature": "SIGN",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "SIGN",
          "package": "idiii",
          "partial": "SIGN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:SIGN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "SYLT",
          "package": "idiii",
          "signature": "SYLT",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "SYLT",
          "package": "idiii",
          "partial": "SYLT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:SYLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "SYTC",
          "package": "idiii",
          "signature": "SYTC",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "SYTC",
          "package": "idiii",
          "partial": "SYTC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:SYTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "TCMP",
          "package": "idiii",
          "signature": "TCMP",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "TCMP",
          "package": "idiii",
          "partial": "TCMP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:TCMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "TXXX",
          "package": "idiii",
          "signature": "TXXX",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "TXXX",
          "package": "idiii",
          "partial": "TXXX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:TXXX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "Text",
          "package": "idiii",
          "signature": "Text",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "Text",
          "package": "idiii",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "UFID",
          "package": "idiii",
          "signature": "UFID",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "UFID",
          "package": "idiii",
          "partial": "UFID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:UFID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "URL",
          "package": "idiii",
          "signature": "URL",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "URL",
          "package": "idiii",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:URL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "USER",
          "package": "idiii",
          "signature": "USER",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "USER",
          "package": "idiii",
          "partial": "USER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:USER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "USLT",
          "package": "idiii",
          "signature": "USLT",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "USLT",
          "package": "idiii",
          "partial": "USLT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:USLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "Unknown",
          "package": "idiii",
          "signature": "Unknown",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "Unknown",
          "package": "idiii",
          "partial": "Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "WXXX",
          "package": "idiii",
          "signature": "WXXX",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "WXXX",
          "package": "idiii",
          "partial": "WXXX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:WXXX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "content",
          "package": "idiii",
          "signature": "Integer",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "content",
          "package": "idiii",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "counter",
          "package": "idiii",
          "signature": "Integer",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "counter",
          "package": "idiii",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:counter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "descr",
          "package": "idiii",
          "signature": "String",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "descr",
          "package": "idiii",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:descr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "email",
          "package": "idiii",
          "signature": "String",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "email",
          "package": "idiii",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:email"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "enc",
          "package": "idiii",
          "signature": "Integer",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "enc",
          "package": "idiii",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:enc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "encodeAll",
          "package": "idiii",
          "signature": "[String] -\u003e [Word8]",
          "source": "src/ID3-Type-FrameInfo.html#encodeAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "encodeAll",
          "normalized": "[String]-\u003e[Word]",
          "package": "idiii",
          "partial": "All",
          "signature": "[String]-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:encodeAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "frameData",
          "package": "idiii",
          "signature": "[Word8]",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "frameData",
          "normalized": "[Word]",
          "package": "idiii",
          "partial": "Data",
          "signature": "[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:frameData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "id",
          "package": "idiii",
          "signature": "[Word8]",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "id",
          "normalized": "[Word]",
          "package": "idiii",
          "signature": "[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "infoTextContent",
          "package": "idiii",
          "signature": "Accessor FrameInfo String",
          "source": "src/ID3-Type-FrameInfo.html#infoTextContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "infoTextContent",
          "package": "idiii",
          "partial": "Text Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:infoTextContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "isPart",
          "package": "idiii",
          "signature": "Bool",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "isPart",
          "package": "idiii",
          "partial": "Part",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:isPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "lang",
          "package": "idiii",
          "signature": "String",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "lang",
          "package": "idiii",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:lang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "mime",
          "package": "idiii",
          "signature": "String",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "mime",
          "package": "idiii",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:mime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "owner",
          "package": "idiii",
          "signature": "String",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "owner",
          "package": "idiii",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:owner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "ownerId",
          "package": "idiii",
          "signature": "String",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "ownerId",
          "package": "idiii",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:ownerId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "picData",
          "package": "idiii",
          "signature": "[Word8]",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "picData",
          "normalized": "[Word]",
          "package": "idiii",
          "partial": "Data",
          "signature": "[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:picData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "picType",
          "package": "idiii",
          "signature": "Word8",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "picType",
          "package": "idiii",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:picType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "privateData",
          "package": "idiii",
          "signature": "[Word8]",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "privateData",
          "normalized": "[Word]",
          "package": "idiii",
          "partial": "Data",
          "signature": "[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:privateData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "rating",
          "package": "idiii",
          "signature": "Integer",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "rating",
          "package": "idiii",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:rating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "text",
          "package": "idiii",
          "signature": "String",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "text",
          "package": "idiii",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "timeFormat",
          "package": "idiii",
          "signature": "Integer",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "timeFormat",
          "package": "idiii",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:timeFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "tocData",
          "package": "idiii",
          "signature": "[Word8]",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "tocData",
          "normalized": "[Word]",
          "package": "idiii",
          "partial": "Data",
          "signature": "[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:tocData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.FrameInfo",
          "name": "url",
          "package": "idiii",
          "signature": "String",
          "source": "src/ID3-Type-FrameInfo.html#FrameInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type FrameInfo",
          "module": "ID3.Type.FrameInfo",
          "name": "url",
          "package": "idiii",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-FrameInfo.html#v:url"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Header",
          "name": "Header",
          "package": "idiii",
          "source": "src/ID3-Type-Header.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "ID3 Type Header",
          "module": "ID3.Type.Header",
          "name": "Header",
          "package": "idiii",
          "partial": "Header",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Header.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eID3v2 HEADER OVERVIEW\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThe first part of the ID3v2 tag is the 10 byte tag header, laid out\n   as follows:\n\u003c/p\u003e\u003cpre\u003e\n     ID3v2/file identifier      \"ID3\"\n     ID3v2 version              $04 00\n     ID3v2 flags                %abcd0000\n     ID3v2 size             4 * %0xxxxxxx\n\u003c/pre\u003e\u003cp\u003eThe first three bytes of the tag are always \"ID3\", to indicate that\n   this is an ID3v2 tag, directly followed by the two version bytes. The\n   first byte of ID3v2 version is its major version, while the second\n   byte is its revision number. In this case this is ID3v2.4.0. All\n   revisions are backwards compatible while major versions are not. If\n   software with ID3v2.4.0 and below support should encounter version\n   five or higher it should simply ignore the whole tag.\n\u003c/p\u003e",
          "module": "ID3.Type.Header",
          "name": "ID3Header",
          "package": "idiii",
          "source": "src/ID3-Type-Header.html#ID3Header",
          "type": "data"
        },
        "index": {
          "description": "ID3v2 HEADER OVERVIEW The first part of the ID3v2 tag is the byte tag header laid out as follows ID3v2 file identifier ID3 ID3v2 version ID3v2 flags abcd0000 ID3v2 size xxxxxxx The first three bytes of the tag are always ID3 to indicate that this is an ID3v2 tag directly followed by the two version bytes The first byte of ID3v2 version is its major version while the second byte is its revision number In this case this is ID3v2.4.0 All revisions are backwards compatible while major versions are not If software with ID3v2.4.0 and below support should encounter version five or higher it should simply ignore the whole tag",
          "hierarchy": "ID3 Type Header",
          "module": "ID3.Type.Header",
          "name": "ID3Header",
          "package": "idiii",
          "partial": "ID Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Header.html#t:ID3Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eMEANING OF FLAGS\u003c/em\u003e\n\u003c/p\u003e\u003cpre\u003e\n    ID3v2 flags                %abcd0000\n\u003c/pre\u003e\u003cp\u003eThe version is followed by the ID3v2 flags field, of which currently\n    four flags are used:\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ea\u003c/code\u003e - \u003cem\u003eUnsynchronisation\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eBit 7 in the 'ID3v2 flags' indicates whether or not\n     unsynchronisation is applied on all frames (see section 6.1 for\n     details); a set bit indicates usage.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eb\u003c/code\u003e - \u003cem\u003eExtended header\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThe second bit (bit 6) indicates whether or not the header is\n     followed by an extended header. The extended header is described in\n     section 3.2. A set bit indicates the presence of an extended\n     header.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ec\u003c/code\u003e - \u003cem\u003eExperimental indicator\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThe third bit (bit 5) is used as an 'experimental indicator'. This\n     flag SHALL always be set when the tag is in an experimental stage.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ed\u003c/code\u003e - \u003cem\u003eFooter present\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eBit 4 indicates that a footer (section 3.4) is present at the very\n     end of the tag. A set bit indicates the presence of a footer.\n\u003c/p\u003e\u003cp\u003eAll the other flags MUST be cleared. If one of these undefined flags\n   are set, the tag might not be readable for a parser that does not\n   know the flags function.\n\u003c/p\u003e",
          "module": "ID3.Type.Header",
          "name": "TagFlags",
          "package": "idiii",
          "source": "src/ID3-Type-Header.html#TagFlags",
          "type": "data"
        },
        "index": {
          "description": "MEANING OF FLAGS ID3v2 flags abcd0000 The version is followed by the ID3v2 flags field of which currently four flags are used Unsynchronisation Bit in the ID3v2 flags indicates whether or not unsynchronisation is applied on all frames see section for details set bit indicates usage Extended header The second bit bit indicates whether or not the header is followed by an extended header The extended header is described in section set bit indicates the presence of an extended header Experimental indicator The third bit bit is used as an experimental indicator This flag SHALL always be set when the tag is in an experimental stage Footer present Bit indicates that footer section is present at the very end of the tag set bit indicates the presence of footer All the other flags MUST be cleared If one of these undefined flags are set the tag might not be readable for parser that does not know the flags function",
          "hierarchy": "ID3 Type Header",
          "module": "ID3.Type.Header",
          "name": "TagFlags",
          "package": "idiii",
          "partial": "Tag Flags",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Header.html#t:TagFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eSIZE BYTES\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThe ID3v2 tag size is stored as a 32 bit synchsafe integer (section\n   6.2), making a total of 28 effective bits (representing up to 256MB).\n\u003c/p\u003e\u003cp\u003eThe ID3v2 tag size is the sum of the byte length of the extended\n   header, the padding and the frames after unsynchronisation. If a\n   footer is present this equals to ('total size' - 20) bytes, otherwise\n   ('total size' - 10) bytes.\n\u003c/p\u003e",
          "module": "ID3.Type.Header",
          "name": "TagSize",
          "package": "idiii",
          "source": "src/ID3-Type-Header.html#TagSize",
          "type": "type"
        },
        "index": {
          "description": "SIZE BYTES The ID3v2 tag size is stored as bit synchsafe integer section making total of effective bits representing up to MB The ID3v2 tag size is the sum of the byte length of the extended header the padding and the frames after unsynchronisation If footer is present this equals to total size bytes otherwise total size bytes",
          "hierarchy": "ID3 Type Header",
          "module": "ID3.Type.Header",
          "name": "TagSize",
          "package": "idiii",
          "partial": "Tag Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Header.html#t:TagSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eid3v2 version\n    \u003ccode\u003emajor version . revision number\u003c/code\u003e\n\u003c/p\u003e",
          "module": "ID3.Type.Header",
          "name": "TagVersion",
          "package": "idiii",
          "source": "src/ID3-Type-Header.html#TagVersion",
          "type": "type"
        },
        "index": {
          "description": "id3v2 version major version revision number",
          "hierarchy": "ID3 Type Header",
          "module": "ID3.Type.Header",
          "name": "TagVersion",
          "package": "idiii",
          "partial": "Tag Version",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Header.html#t:TagVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Header",
          "name": "ID3Header",
          "package": "idiii",
          "signature": "ID3Header",
          "source": "src/ID3-Type-Header.html#ID3Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Header",
          "module": "ID3.Type.Header",
          "name": "ID3Header",
          "package": "idiii",
          "partial": "ID Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Header.html#v:ID3Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Header",
          "name": "TagFlags",
          "package": "idiii",
          "signature": "TagFlags (Bool, Bool, Bool, Bool)",
          "source": "src/ID3-Type-Header.html#TagFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Header",
          "module": "ID3.Type.Header",
          "name": "TagFlags",
          "normalized": "TagFlags(Bool,Bool,Bool,Bool)",
          "package": "idiii",
          "partial": "Tag Flags",
          "signature": "TagFlags(Bool,Bool,Bool,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Header.html#v:TagFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Header",
          "name": "anyFlagsOn",
          "package": "idiii",
          "signature": "TagFlags -\u003e Bool",
          "source": "src/ID3-Type-Header.html#anyFlagsOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Header",
          "module": "ID3.Type.Header",
          "name": "anyFlagsOn",
          "normalized": "TagFlags-\u003eBool",
          "package": "idiii",
          "partial": "Flags On",
          "signature": "TagFlags-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Header.html#v:anyFlagsOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Header",
          "name": "emptyID3Header",
          "package": "idiii",
          "signature": "ID3Header",
          "source": "src/ID3-Type-Header.html#emptyID3Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Header",
          "module": "ID3.Type.Header",
          "name": "emptyID3Header",
          "package": "idiii",
          "partial": "ID Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Header.html#v:emptyID3Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Header",
          "name": "experimentalFlag",
          "package": "idiii",
          "signature": "TagFlags -\u003e Bool",
          "source": "src/ID3-Type-Header.html#experimentalFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Header",
          "module": "ID3.Type.Header",
          "name": "experimentalFlag",
          "normalized": "TagFlags-\u003eBool",
          "package": "idiii",
          "partial": "Flag",
          "signature": "TagFlags-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Header.html#v:experimentalFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Header",
          "name": "extendedHeaderFlag",
          "package": "idiii",
          "signature": "TagFlags -\u003e Bool",
          "source": "src/ID3-Type-Header.html#extendedHeaderFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Header",
          "module": "ID3.Type.Header",
          "name": "extendedHeaderFlag",
          "normalized": "TagFlags-\u003eBool",
          "package": "idiii",
          "partial": "Header Flag",
          "signature": "TagFlags-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Header.html#v:extendedHeaderFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Header",
          "name": "footerFlag",
          "package": "idiii",
          "signature": "TagFlags -\u003e Bool",
          "source": "src/ID3-Type-Header.html#footerFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Header",
          "module": "ID3.Type.Header",
          "name": "footerFlag",
          "normalized": "TagFlags-\u003eBool",
          "package": "idiii",
          "partial": "Flag",
          "signature": "TagFlags-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Header.html#v:footerFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Header",
          "name": "initID3Header",
          "package": "idiii",
          "signature": "[ID3Header -\u003e ID3Header] -\u003e ID3Header",
          "source": "src/ID3-Type-Header.html#initID3Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Header",
          "module": "ID3.Type.Header",
          "name": "initID3Header",
          "normalized": "[ID Header-\u003eID Header]-\u003eID Header",
          "package": "idiii",
          "partial": "ID Header",
          "signature": "[ID Header-\u003eID Header]-\u003eID Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Header.html#v:initID3Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Header",
          "name": "showTagFlags",
          "package": "idiii",
          "signature": "TagFlags -\u003e String",
          "source": "src/ID3-Type-Header.html#showTagFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Header",
          "module": "ID3.Type.Header",
          "name": "showTagFlags",
          "normalized": "TagFlags-\u003eString",
          "package": "idiii",
          "partial": "Tag Flags",
          "signature": "TagFlags-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Header.html#v:showTagFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Header",
          "name": "tagFlags",
          "package": "idiii",
          "signature": "Accessor ID3Header TagFlags",
          "source": "src/ID3-Type-Header.html#tagFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Header",
          "module": "ID3.Type.Header",
          "name": "tagFlags",
          "package": "idiii",
          "partial": "Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Header.html#v:tagFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eheader flags as Bool values\n\u003c/p\u003e",
          "module": "ID3.Type.Header",
          "name": "tagFlags_",
          "package": "idiii",
          "signature": "TagFlags",
          "source": "src/ID3-Type-Header.html#ID3Header",
          "type": "function"
        },
        "index": {
          "description": "header flags as Bool values",
          "hierarchy": "ID3 Type Header",
          "module": "ID3.Type.Header",
          "name": "tagFlags_",
          "package": "idiii",
          "partial": "Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Header.html#v:tagFlags_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Header",
          "name": "tagSize",
          "package": "idiii",
          "signature": "Accessor ID3Header TagSize",
          "source": "src/ID3-Type-Header.html#tagSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Header",
          "module": "ID3.Type.Header",
          "name": "tagSize",
          "package": "idiii",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Header.html#v:tagSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efull size of tag\n\u003c/p\u003e",
          "module": "ID3.Type.Header",
          "name": "tagSize_",
          "package": "idiii",
          "signature": "TagSize",
          "source": "src/ID3-Type-Header.html#ID3Header",
          "type": "function"
        },
        "index": {
          "description": "full size of tag",
          "hierarchy": "ID3 Type Header",
          "module": "ID3.Type.Header",
          "name": "tagSize_",
          "package": "idiii",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Header.html#v:tagSize_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Header",
          "name": "tagVersion",
          "package": "idiii",
          "signature": "Accessor ID3Header TagVersion",
          "source": "src/ID3-Type-Header.html#tagVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Header",
          "module": "ID3.Type.Header",
          "name": "tagVersion",
          "package": "idiii",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Header.html#v:tagVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eid3v2 version: \u003ccode\u003e[major version, revision number]\u003c/code\u003e\n\u003c/p\u003e",
          "module": "ID3.Type.Header",
          "name": "tagVersion_",
          "package": "idiii",
          "signature": "TagVersion",
          "source": "src/ID3-Type-Header.html#ID3Header",
          "type": "function"
        },
        "index": {
          "description": "id3v2 version major version revision number",
          "hierarchy": "ID3 Type Header",
          "module": "ID3.Type.Header",
          "name": "tagVersion_",
          "package": "idiii",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Header.html#v:tagVersion_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Header",
          "name": "unsynchFlag",
          "package": "idiii",
          "signature": "TagFlags -\u003e Bool",
          "source": "src/ID3-Type-Header.html#unsynchFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Header",
          "module": "ID3.Type.Header",
          "name": "unsynchFlag",
          "normalized": "TagFlags-\u003eBool",
          "package": "idiii",
          "partial": "Flag",
          "signature": "TagFlags-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Header.html#v:unsynchFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Tag",
          "name": "Tag",
          "package": "idiii",
          "source": "src/ID3-Type-Tag.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "ID3 Type Tag",
          "module": "ID3.Type.Tag",
          "name": "Tag",
          "package": "idiii",
          "partial": "Tag",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Tag.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Tag",
          "name": "ID3Tag",
          "package": "idiii",
          "source": "src/ID3-Type-Tag.html#ID3Tag",
          "type": "data"
        },
        "index": {
          "hierarchy": "ID3 Type Tag",
          "module": "ID3.Type.Tag",
          "name": "ID3Tag",
          "package": "idiii",
          "partial": "ID Tag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Tag.html#t:ID3Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Tag",
          "name": "ID3Tag",
          "package": "idiii",
          "signature": "ID3Tag",
          "source": "src/ID3-Type-Tag.html#ID3Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Tag",
          "module": "ID3.Type.Tag",
          "name": "ID3Tag",
          "package": "idiii",
          "partial": "ID Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Tag.html#v:ID3Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Tag",
          "name": "emptyID3Tag",
          "package": "idiii",
          "signature": "ID3Tag",
          "source": "src/ID3-Type-Tag.html#emptyID3Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Tag",
          "module": "ID3.Type.Tag",
          "name": "emptyID3Tag",
          "package": "idiii",
          "partial": "ID Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Tag.html#v:emptyID3Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Tag",
          "name": "extHSize",
          "package": "idiii",
          "signature": "ID3Tag -\u003e Integer",
          "source": "src/ID3-Type-Tag.html#extHSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Tag",
          "module": "ID3.Type.Tag",
          "name": "extHSize",
          "normalized": "ID Tag-\u003eInteger",
          "package": "idiii",
          "partial": "HSize",
          "signature": "ID Tag-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Tag.html#v:extHSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Tag",
          "name": "extHeader",
          "package": "idiii",
          "signature": "Accessor ID3Tag (Maybe ID3ExtHeader)",
          "source": "src/ID3-Type-Tag.html#extHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Tag",
          "module": "ID3.Type.Tag",
          "name": "extHeader",
          "package": "idiii",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Tag.html#v:extHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Tag",
          "name": "flags",
          "package": "idiii",
          "signature": "Accessor ID3Tag TagFlags",
          "source": "src/ID3-Type-Tag.html#flags",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Tag",
          "module": "ID3.Type.Tag",
          "name": "flags",
          "package": "idiii",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Tag.html#v:flags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Tag",
          "name": "footerSize",
          "package": "idiii",
          "signature": "ID3Tag -\u003e Integer",
          "source": "src/ID3-Type-Tag.html#footerSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Tag",
          "module": "ID3.Type.Tag",
          "name": "footerSize",
          "normalized": "ID Tag-\u003eInteger",
          "package": "idiii",
          "partial": "Size",
          "signature": "ID Tag-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Tag.html#v:footerSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Tag",
          "name": "frame",
          "package": "idiii",
          "signature": "FrameID -\u003e Accessor ID3Tag (Maybe ID3Frame)",
          "source": "src/ID3-Type-Tag.html#frame",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Tag",
          "module": "ID3.Type.Tag",
          "name": "frame",
          "normalized": "FrameID-\u003eAccessor ID Tag(Maybe ID Frame)",
          "package": "idiii",
          "signature": "FrameID-\u003eAccessor ID Tag(Maybe ID Frame)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Tag.html#v:frame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Tag",
          "name": "frames",
          "package": "idiii",
          "signature": "Accessor ID3Tag (Map FrameID ID3Frame)",
          "source": "src/ID3-Type-Tag.html#frames",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Tag",
          "module": "ID3.Type.Tag",
          "name": "frames",
          "package": "idiii",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Tag.html#v:frames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Tag",
          "name": "framesOrder",
          "package": "idiii",
          "signature": "Accessor ID3Tag [FrameID]",
          "source": "src/ID3-Type-Tag.html#framesOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Tag",
          "module": "ID3.Type.Tag",
          "name": "framesOrder",
          "normalized": "Accessor ID Tag[FrameID]",
          "package": "idiii",
          "partial": "Order",
          "signature": "Accessor ID Tag[FrameID]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Tag.html#v:framesOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Tag",
          "name": "framesSize",
          "package": "idiii",
          "signature": "Map FrameID ID3Frame -\u003e FrameSize",
          "source": "src/ID3-Type-Tag.html#framesSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Tag",
          "module": "ID3.Type.Tag",
          "name": "framesSize",
          "normalized": "Map FrameID ID Frame-\u003eFrameSize",
          "package": "idiii",
          "partial": "Size",
          "signature": "Map FrameID ID Frame-\u003eFrameSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Tag.html#v:framesSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Tag",
          "name": "getActualSize",
          "package": "idiii",
          "signature": "ID3Tag -\u003e FrameSize",
          "source": "src/ID3-Type-Tag.html#getActualSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Tag",
          "module": "ID3.Type.Tag",
          "name": "getActualSize",
          "normalized": "ID Tag-\u003eFrameSize",
          "package": "idiii",
          "partial": "Actual Size",
          "signature": "ID Tag-\u003eFrameSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Tag.html#v:getActualSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Tag",
          "name": "getFrame",
          "package": "idiii",
          "signature": "ID3Tag -\u003e FrameID -\u003e Maybe ID3Frame",
          "source": "src/ID3-Type-Tag.html#getFrame",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Tag",
          "module": "ID3.Type.Tag",
          "name": "getFrame",
          "normalized": "ID Tag-\u003eFrameID-\u003eMaybe ID Frame",
          "package": "idiii",
          "partial": "Frame",
          "signature": "ID Tag-\u003eFrameID-\u003eMaybe ID Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Tag.html#v:getFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Tag",
          "name": "getFullSize",
          "package": "idiii",
          "signature": "ID3Tag -\u003e FrameSize",
          "source": "src/ID3-Type-Tag.html#getFullSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Tag",
          "module": "ID3.Type.Tag",
          "name": "getFullSize",
          "normalized": "ID Tag-\u003eFrameSize",
          "package": "idiii",
          "partial": "Full Size",
          "signature": "ID Tag-\u003eFrameSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Tag.html#v:getFullSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Tag",
          "name": "header",
          "package": "idiii",
          "signature": "Accessor ID3Tag ID3Header",
          "source": "src/ID3-Type-Tag.html#header",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Tag",
          "module": "ID3.Type.Tag",
          "name": "header",
          "package": "idiii",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Tag.html#v:header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Tag",
          "name": "initID3Tag",
          "package": "idiii",
          "signature": "[ID3Tag -\u003e ID3Tag] -\u003e ID3Tag",
          "source": "src/ID3-Type-Tag.html#initID3Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Tag",
          "module": "ID3.Type.Tag",
          "name": "initID3Tag",
          "normalized": "[ID Tag-\u003eID Tag]-\u003eID Tag",
          "package": "idiii",
          "partial": "ID Tag",
          "signature": "[ID Tag-\u003eID Tag]-\u003eID Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Tag.html#v:initID3Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Tag",
          "name": "padding",
          "package": "idiii",
          "signature": "Accessor ID3Tag Integer",
          "source": "src/ID3-Type-Tag.html#padding",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Tag",
          "module": "ID3.Type.Tag",
          "name": "padding",
          "package": "idiii",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Tag.html#v:padding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Tag",
          "name": "setFrame",
          "package": "idiii",
          "signature": "ID3Tag -\u003e FrameID -\u003e Maybe ID3Frame -\u003e ID3Tag",
          "source": "src/ID3-Type-Tag.html#setFrame",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Tag",
          "module": "ID3.Type.Tag",
          "name": "setFrame",
          "normalized": "ID Tag-\u003eFrameID-\u003eMaybe ID Frame-\u003eID Tag",
          "package": "idiii",
          "partial": "Frame",
          "signature": "ID Tag-\u003eFrameID-\u003eMaybe ID Frame-\u003eID Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Tag.html#v:setFrame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Tag",
          "name": "setSize",
          "package": "idiii",
          "signature": "TagSize -\u003e ID3Tag -\u003e ID3Tag",
          "source": "src/ID3-Type-Tag.html#setSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Tag",
          "module": "ID3.Type.Tag",
          "name": "setSize",
          "normalized": "TagSize-\u003eID Tag-\u003eID Tag",
          "package": "idiii",
          "partial": "Size",
          "signature": "TagSize-\u003eID Tag-\u003eID Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Tag.html#v:setSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Tag",
          "name": "sortFrames",
          "package": "idiii",
          "signature": "Map FrameID ID3Frame -\u003e [FrameID] -\u003e [ID3Frame]",
          "source": "src/ID3-Type-Tag.html#sortFrames",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Tag",
          "module": "ID3.Type.Tag",
          "name": "sortFrames",
          "normalized": "Map FrameID ID Frame-\u003e[FrameID]-\u003e[ID Frame]",
          "package": "idiii",
          "partial": "Frames",
          "signature": "Map FrameID ID Frame-\u003e[FrameID]-\u003e[ID Frame]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Tag.html#v:sortFrames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Tag",
          "name": "tagExtHeader",
          "package": "idiii",
          "signature": "Maybe ID3ExtHeader",
          "source": "src/ID3-Type-Tag.html#ID3Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Tag",
          "module": "ID3.Type.Tag",
          "name": "tagExtHeader",
          "package": "idiii",
          "partial": "Ext Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Tag.html#v:tagExtHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Tag",
          "name": "tagFrames",
          "package": "idiii",
          "signature": "Map FrameID ID3Frame",
          "source": "src/ID3-Type-Tag.html#ID3Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Tag",
          "module": "ID3.Type.Tag",
          "name": "tagFrames",
          "package": "idiii",
          "partial": "Frames",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Tag.html#v:tagFrames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Tag",
          "name": "tagFramesOrder",
          "package": "idiii",
          "signature": "[FrameID]",
          "source": "src/ID3-Type-Tag.html#ID3Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Tag",
          "module": "ID3.Type.Tag",
          "name": "tagFramesOrder",
          "normalized": "[FrameID]",
          "package": "idiii",
          "partial": "Frames Order",
          "signature": "[FrameID]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Tag.html#v:tagFramesOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Tag",
          "name": "tagHeader",
          "package": "idiii",
          "signature": "ID3Header",
          "source": "src/ID3-Type-Tag.html#ID3Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Tag",
          "module": "ID3.Type.Tag",
          "name": "tagHeader",
          "package": "idiii",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Tag.html#v:tagHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Tag",
          "name": "tagPadding",
          "package": "idiii",
          "signature": "Integer",
          "source": "src/ID3-Type-Tag.html#ID3Tag",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Tag",
          "module": "ID3.Type.Tag",
          "name": "tagPadding",
          "package": "idiii",
          "partial": "Padding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Tag.html#v:tagPadding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Tag",
          "name": "version",
          "package": "idiii",
          "signature": "Accessor ID3Tag TagVersion",
          "source": "src/ID3-Type-Tag.html#version",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Tag",
          "module": "ID3.Type.Tag",
          "name": "version",
          "package": "idiii",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Tag.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Unparse",
          "name": "Unparse",
          "package": "idiii",
          "source": "src/ID3-Type-Unparse.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "ID3 Type Unparse",
          "module": "ID3.Type.Unparse",
          "name": "Unparse",
          "package": "idiii",
          "partial": "Unparse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Unparse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Unparse",
          "name": "HasSize",
          "package": "idiii",
          "source": "src/ID3-Type-Unparse.html#HasSize",
          "type": "class"
        },
        "index": {
          "hierarchy": "ID3 Type Unparse",
          "module": "ID3.Type.Unparse",
          "name": "HasSize",
          "package": "idiii",
          "partial": "Has Size",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Unparse.html#t:HasSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Unparse",
          "name": "Inf",
          "package": "idiii",
          "source": "src/ID3-Type-Unparse.html#Inf",
          "type": "data"
        },
        "index": {
          "hierarchy": "ID3 Type Unparse",
          "module": "ID3.Type.Unparse",
          "name": "Inf",
          "package": "idiii",
          "partial": "Inf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Unparse.html#t:Inf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Unparse",
          "name": "Parsed",
          "package": "idiii",
          "source": "src/ID3-Type-Unparse.html#Parsed",
          "type": "class"
        },
        "index": {
          "hierarchy": "ID3 Type Unparse",
          "module": "ID3.Type.Unparse",
          "name": "Parsed",
          "package": "idiii",
          "partial": "Parsed",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Unparse.html#t:Parsed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Unparse",
          "name": "Str",
          "package": "idiii",
          "source": "src/ID3-Type-Unparse.html#Str",
          "type": "data"
        },
        "index": {
          "hierarchy": "ID3 Type Unparse",
          "module": "ID3.Type.Unparse",
          "name": "Str",
          "package": "idiii",
          "partial": "Str",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Unparse.html#t:Str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Unparse",
          "name": "Inf",
          "package": "idiii",
          "signature": "Inf [(String, String)]",
          "source": "src/ID3-Type-Unparse.html#Inf",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Unparse",
          "module": "ID3.Type.Unparse",
          "name": "Inf",
          "normalized": "Inf[(String,String)]",
          "package": "idiii",
          "partial": "Inf",
          "signature": "Inf[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Unparse.html#v:Inf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Unparse",
          "name": "Str",
          "package": "idiii",
          "signature": "Str String",
          "source": "src/ID3-Type-Unparse.html#Str",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 Type Unparse",
          "module": "ID3.Type.Unparse",
          "name": "Str",
          "package": "idiii",
          "partial": "Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Unparse.html#v:Str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Unparse",
          "name": "size",
          "package": "idiii",
          "signature": "Accessor a Integer",
          "source": "src/ID3-Type-Unparse.html#size",
          "type": "method"
        },
        "index": {
          "hierarchy": "ID3 Type Unparse",
          "module": "ID3.Type.Unparse",
          "name": "size",
          "package": "idiii",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Unparse.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Unparse",
          "name": "unparse",
          "package": "idiii",
          "signature": "a -\u003e [Word8]",
          "source": "src/ID3-Type-Unparse.html#unparse",
          "type": "method"
        },
        "index": {
          "hierarchy": "ID3 Type Unparse",
          "module": "ID3.Type.Unparse",
          "name": "unparse",
          "normalized": "a-\u003e[Word]",
          "package": "idiii",
          "signature": "a-\u003e[Word]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Unparse.html#v:unparse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type.Unparse",
          "name": "updateSize",
          "package": "idiii",
          "signature": "a -\u003e a",
          "source": "src/ID3-Type-Unparse.html#updateSize",
          "type": "method"
        },
        "index": {
          "hierarchy": "ID3 Type Unparse",
          "module": "ID3.Type.Unparse",
          "name": "updateSize",
          "normalized": "a-\u003ea",
          "package": "idiii",
          "partial": "Size",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type-Unparse.html#v:updateSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.Type",
          "name": "Type",
          "package": "idiii",
          "source": "src/ID3-Type.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "ID3 Type",
          "module": "ID3.Type",
          "name": "Type",
          "package": "idiii",
          "partial": "Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-Type.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.WriteTag",
          "name": "WriteTag",
          "package": "idiii",
          "source": "src/ID3-WriteTag.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "ID3 WriteTag",
          "module": "ID3.WriteTag",
          "name": "WriteTag",
          "package": "idiii",
          "partial": "Write Tag",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-WriteTag.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3.WriteTag",
          "name": "hWriteTag",
          "package": "idiii",
          "signature": "ID3Tag -\u003e Handle -\u003e IO ()",
          "source": "src/ID3-WriteTag.html#hWriteTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "ID3 WriteTag",
          "module": "ID3.WriteTag",
          "name": "hWriteTag",
          "normalized": "ID Tag-\u003eHandle-\u003eIO()",
          "package": "idiii",
          "partial": "Write Tag",
          "signature": "ID Tag-\u003eHandle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3-WriteTag.html#v:hWriteTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ID3",
          "name": "ID3",
          "package": "idiii",
          "source": "src/ID3.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "ID3",
          "module": "ID3",
          "name": "ID3",
          "package": "idiii",
          "partial": "ID",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/idiii/docs/ID3.html#"
      }
    }
  ]
]