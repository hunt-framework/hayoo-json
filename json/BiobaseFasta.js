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
        "word": "BiobaseFasta"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Fasta.Import",
          "name": "Import",
          "package": "BiobaseFasta",
          "source": "src/Biobase-Fasta-Import.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Biobase Fasta Import",
          "module": "Biobase.Fasta.Import",
          "name": "Import",
          "package": "BiobaseFasta",
          "partial": "Import",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta-Import.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn event is either a FASTA header or a part of a FASTA data stream,\n chunked into user-defineable pieces. If there is no more input, we are\n \u003ccode\u003e\u003ca\u003eDone\u003c/a\u003e\u003c/code\u003e. But we are only \u003ccode\u003e\u003ca\u003eDone\u003c/a\u003e\u003c/code\u003e if there was some input in the first place!\n\u003c/p\u003e",
          "module": "Biobase.Fasta.Import",
          "name": "Event",
          "package": "BiobaseFasta",
          "source": "src/Biobase-Fasta-Import.html#Event",
          "type": "data"
        },
        "index": {
          "description": "An event is either FASTA header or part of FASTA data stream chunked into user-defineable pieces If there is no more input we are Done But we are only Done if there was some input in the first place",
          "hierarchy": "Biobase Fasta Import",
          "module": "Biobase.Fasta.Import",
          "name": "Event",
          "package": "BiobaseFasta",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta-Import.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Fasta.Import",
          "name": "Data",
          "package": "BiobaseFasta",
          "signature": "Data !ByteString",
          "source": "src/Biobase-Fasta-Import.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Fasta Import",
          "module": "Biobase.Fasta.Import",
          "name": "Data",
          "package": "BiobaseFasta",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta-Import.html#v:Data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Fasta.Import",
          "name": "Done",
          "package": "BiobaseFasta",
          "signature": "Done",
          "source": "src/Biobase-Fasta-Import.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Fasta Import",
          "module": "Biobase.Fasta.Import",
          "name": "Done",
          "package": "BiobaseFasta",
          "partial": "Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta-Import.html#v:Done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Fasta.Import",
          "name": "Header",
          "package": "BiobaseFasta",
          "signature": "Header !ByteString !ByteString",
          "source": "src/Biobase-Fasta-Import.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Fasta Import",
          "module": "Biobase.Fasta.Import",
          "name": "Header",
          "package": "BiobaseFasta",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta-Import.html#v:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Fasta.Import",
          "name": "isHeader",
          "package": "BiobaseFasta",
          "signature": "Event -\u003e Bool",
          "source": "src/Biobase-Fasta-Import.html#isHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Fasta Import",
          "module": "Biobase.Fasta.Import",
          "name": "isHeader",
          "normalized": "Event-\u003eBool",
          "package": "BiobaseFasta",
          "partial": "Header",
          "signature": "Event-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta-Import.html#v:isHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse from \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Biobase.Fasta.Import",
          "name": "parseEvents",
          "package": "BiobaseFasta",
          "signature": "Int -\u003e GInfConduit ByteString m Event",
          "source": "src/Biobase-Fasta-Import.html#parseEvents",
          "type": "function"
        },
        "index": {
          "description": "Parse from ByteString into Event",
          "hierarchy": "Biobase Fasta Import",
          "module": "Biobase.Fasta.Import",
          "name": "parseEvents",
          "normalized": "Int-\u003eGInfConduit ByteString a Event",
          "package": "BiobaseFasta",
          "partial": "Events",
          "signature": "Int-\u003eGInfConduit ByteString m Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta-Import.html#v:parseEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse from \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into \u003ccode\u003e\u003ca\u003eFastaWindow\u003c/a\u003e\u003c/code\u003es with a past.\n\u003c/p\u003e",
          "module": "Biobase.Fasta.Import",
          "name": "parseFastaWindows",
          "package": "BiobaseFasta",
          "signature": "Int -\u003e Conduit ByteString m FastaWindow",
          "source": "src/Biobase-Fasta-Import.html#parseFastaWindows",
          "type": "function"
        },
        "index": {
          "description": "Parse from ByteString into FastaWindow with past",
          "hierarchy": "Biobase Fasta Import",
          "module": "Biobase.Fasta.Import",
          "name": "parseFastaWindows",
          "normalized": "Int-\u003eConduit ByteString a FastaWindow",
          "package": "BiobaseFasta",
          "partial": "Fasta Windows",
          "signature": "Int-\u003eConduit ByteString m FastaWindow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta-Import.html#v:parseFastaWindows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Fasta.Import",
          "name": "printHeader",
          "package": "BiobaseFasta",
          "signature": "Event -\u003e ByteString",
          "source": "src/Biobase-Fasta-Import.html#printHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Fasta Import",
          "module": "Biobase.Fasta.Import",
          "name": "printHeader",
          "normalized": "Event-\u003eByteString",
          "package": "BiobaseFasta",
          "partial": "Header",
          "signature": "Event-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta-Import.html#v:printHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender from \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003es into \u003ccode\u003eByteStrings\u003c/code\u003e. \u003ccode\u003ecols\u003c/code\u003e is the number of\n characters after which a newline is introduced into the stream. Such\n newlines are introduced only into \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e events.\n\u003c/p\u003e",
          "module": "Biobase.Fasta.Import",
          "name": "renderEvents",
          "package": "BiobaseFasta",
          "signature": "Int -\u003e Conduit Event m ByteString",
          "source": "src/Biobase-Fasta-Import.html#renderEvents",
          "type": "function"
        },
        "index": {
          "description": "Render from Event into ByteStrings cols is the number of characters after which newline is introduced into the stream Such newlines are introduced only into Data events",
          "hierarchy": "Biobase Fasta Import",
          "module": "Biobase.Fasta.Import",
          "name": "renderEvents",
          "normalized": "Int-\u003eConduit Event a ByteString",
          "package": "BiobaseFasta",
          "partial": "Events",
          "signature": "Int-\u003eConduit Event m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta-Import.html#v:renderEvents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender from \u003ccode\u003e\u003ca\u003eFastaWindow\u003c/a\u003e\u003c/code\u003es into \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Biobase.Fasta.Import",
          "name": "renderFastaWindows",
          "package": "BiobaseFasta",
          "signature": "Int -\u003e Conduit FastaWindow m ByteString",
          "source": "src/Biobase-Fasta-Import.html#renderFastaWindows",
          "type": "function"
        },
        "index": {
          "description": "Render from FastaWindow into ByteString",
          "hierarchy": "Biobase Fasta Import",
          "module": "Biobase.Fasta.Import",
          "name": "renderFastaWindows",
          "normalized": "Int-\u003eConduit FastaWindow a ByteString",
          "package": "BiobaseFasta",
          "partial": "Fasta Windows",
          "signature": "Int-\u003eConduit FastaWindow m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta-Import.html#v:renderFastaWindows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Fasta.Import",
          "name": "test",
          "package": "BiobaseFasta",
          "signature": "IO ()",
          "source": "src/Biobase-Fasta-Import.html#test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Fasta Import",
          "module": "Biobase.Fasta.Import",
          "name": "test",
          "normalized": "IO()",
          "package": "BiobaseFasta",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta-Import.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is currently home to a preliminary version of indices based\n on a minimal index of \u003ccode\u003eZero\u003c/code\u003e or \u003ccode\u003eOne\u003c/code\u003e (and possibly others).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Biobase.Fasta",
          "name": "Fasta",
          "package": "BiobaseFasta",
          "source": "src/Biobase-Fasta.html",
          "type": "module"
        },
        "index": {
          "description": "This module is currently home to preliminary version of indices based on minimal index of Zero or One and possibly others",
          "hierarchy": "Biobase Fasta",
          "module": "Biobase.Fasta",
          "name": "Fasta",
          "package": "BiobaseFasta",
          "partial": "Fasta",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Fasta",
          "name": "FastaWindow",
          "package": "BiobaseFasta",
          "source": "src/Biobase-Fasta.html#FastaWindow",
          "type": "data"
        },
        "index": {
          "hierarchy": "Biobase Fasta",
          "module": "Biobase.Fasta",
          "name": "FastaWindow",
          "package": "BiobaseFasta",
          "partial": "Fasta Window",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta.html#t:FastaWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Fasta",
          "name": "FastaW",
          "package": "BiobaseFasta",
          "signature": "FastaW",
          "source": "src/Biobase-Fasta.html#FastaWindow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Fasta",
          "module": "Biobase.Fasta",
          "name": "FastaW",
          "package": "BiobaseFasta",
          "partial": "Fasta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta.html#v:FastaW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eand description, if any\n\u003c/p\u003e",
          "module": "Biobase.Fasta",
          "name": "_description",
          "package": "BiobaseFasta",
          "signature": "ByteString",
          "source": "src/Biobase-Fasta.html#FastaWindow",
          "type": "function"
        },
        "index": {
          "description": "and description if any",
          "hierarchy": "Biobase Fasta",
          "module": "Biobase.Fasta",
          "name": "_description",
          "package": "BiobaseFasta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta.html#v:_description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewindow data\n\u003c/p\u003e",
          "module": "Biobase.Fasta",
          "name": "_fasta",
          "package": "BiobaseFasta",
          "signature": "ByteString",
          "source": "src/Biobase-Fasta.html#FastaWindow",
          "type": "function"
        },
        "index": {
          "description": "window data",
          "hierarchy": "Biobase Fasta",
          "module": "Biobase.Fasta",
          "name": "_fasta",
          "package": "BiobaseFasta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta.html#v:_fasta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe current identifier\n\u003c/p\u003e",
          "module": "Biobase.Fasta",
          "name": "_identifier",
          "package": "BiobaseFasta",
          "signature": "ByteString",
          "source": "src/Biobase-Fasta.html#FastaWindow",
          "type": "function"
        },
        "index": {
          "description": "the current identifier",
          "hierarchy": "Biobase Fasta",
          "module": "Biobase.Fasta",
          "name": "_identifier",
          "package": "BiobaseFasta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta.html#v:_identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZero-based offset into the current stream\n\u003c/p\u003e",
          "module": "Biobase.Fasta",
          "name": "_offset",
          "package": "BiobaseFasta",
          "signature": "Offset",
          "source": "src/Biobase-Fasta.html#FastaWindow",
          "type": "function"
        },
        "index": {
          "description": "Zero-based offset into the current stream",
          "hierarchy": "Biobase Fasta",
          "module": "Biobase.Fasta",
          "name": "_offset",
          "package": "BiobaseFasta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta.html#v:_offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.Fasta",
          "name": "_past",
          "package": "BiobaseFasta",
          "signature": "ByteString",
          "source": "src/Biobase-Fasta.html#FastaWindow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase Fasta",
          "module": "Biobase.Fasta",
          "name": "_past",
          "package": "BiobaseFasta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta.html#v:_past"
      }
    }
  ]
]