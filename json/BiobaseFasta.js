[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta-Import.html#",
      "description": {
        "fct-module": "Biobase.Fasta.Import",
        "fct-package": "BiobaseFasta",
        "fct-signature": "module",
        "fct-source": "src/Biobase-Fasta-Import.html",
        "fct-type": "module",
        "title": "Import"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Fasta Import",
        "module": "Biobase.Fasta.Import",
        "name": "Import",
        "normalized": "",
        "package": "BiobaseFasta",
        "partial": "Import",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta-Import.html#t:Event",
      "description": {
        "fct-descr": "\u003cp\u003eAn event is either a FASTA header or a part of a FASTA data stream,\n chunked into user-defineable pieces. If there is no more input, we are\n \u003ccode\u003e\u003ca\u003eDone\u003c/a\u003e\u003c/code\u003e. But we are only \u003ccode\u003e\u003ca\u003eDone\u003c/a\u003e\u003c/code\u003e if there was some input in the first place!\n\u003c/p\u003e",
        "fct-module": "Biobase.Fasta.Import",
        "fct-package": "BiobaseFasta",
        "fct-signature": "data",
        "fct-source": "src/Biobase-Fasta-Import.html#Event",
        "fct-type": "data",
        "title": "Event"
      },
      "index": {
        "description": "An event is either FASTA header or part of FASTA data stream chunked into user-defineable pieces If there is no more input we are Done But we are only Done if there was some input in the first place",
        "hierarchy": "Biobase Fasta Import",
        "module": "Biobase.Fasta.Import",
        "name": "Event",
        "normalized": "",
        "package": "BiobaseFasta",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta-Import.html#v:Data",
      "description": {
        "fct-module": "Biobase.Fasta.Import",
        "fct-package": "BiobaseFasta",
        "fct-signature": "Data !ByteString",
        "fct-source": "src/Biobase-Fasta-Import.html#Event",
        "fct-type": "function",
        "title": "Data"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Fasta Import",
        "module": "Biobase.Fasta.Import",
        "name": "Data",
        "normalized": "",
        "package": "BiobaseFasta",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta-Import.html#v:Done",
      "description": {
        "fct-module": "Biobase.Fasta.Import",
        "fct-package": "BiobaseFasta",
        "fct-signature": "Done",
        "fct-source": "src/Biobase-Fasta-Import.html#Event",
        "fct-type": "function",
        "title": "Done"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Fasta Import",
        "module": "Biobase.Fasta.Import",
        "name": "Done",
        "normalized": "",
        "package": "BiobaseFasta",
        "partial": "Done",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta-Import.html#v:Header",
      "description": {
        "fct-module": "Biobase.Fasta.Import",
        "fct-package": "BiobaseFasta",
        "fct-signature": "Header !ByteString !ByteString",
        "fct-source": "src/Biobase-Fasta-Import.html#Event",
        "fct-type": "function",
        "title": "Header"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Fasta Import",
        "module": "Biobase.Fasta.Import",
        "name": "Header",
        "normalized": "",
        "package": "BiobaseFasta",
        "partial": "Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta-Import.html#v:isHeader",
      "description": {
        "fct-module": "Biobase.Fasta.Import",
        "fct-package": "BiobaseFasta",
        "fct-signature": "Event -\u003e Bool",
        "fct-source": "src/Biobase-Fasta-Import.html#isHeader",
        "fct-type": "function",
        "title": "isHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Fasta Import",
        "module": "Biobase.Fasta.Import",
        "name": "isHeader",
        "normalized": "Event-\u003eBool",
        "package": "BiobaseFasta",
        "partial": "Header",
        "signature": "Event-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta-Import.html#v:parseEvents",
      "description": {
        "fct-descr": "\u003cp\u003eParse from \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Biobase.Fasta.Import",
        "fct-package": "BiobaseFasta",
        "fct-signature": "Int -\u003e GInfConduit ByteString m Event",
        "fct-source": "src/Biobase-Fasta-Import.html#parseEvents",
        "fct-type": "function",
        "title": "parseEvents"
      },
      "index": {
        "description": "Parse from ByteString into Event",
        "hierarchy": "Biobase Fasta Import",
        "module": "Biobase.Fasta.Import",
        "name": "parseEvents",
        "normalized": "Int-\u003eGInfConduit ByteString a Event",
        "package": "BiobaseFasta",
        "partial": "Events",
        "signature": "Int-\u003eGInfConduit ByteString m Event"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta-Import.html#v:parseFastaWindows",
      "description": {
        "fct-descr": "\u003cp\u003eParse from \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into \u003ccode\u003e\u003ca\u003eFastaWindow\u003c/a\u003e\u003c/code\u003es with a past.\n\u003c/p\u003e",
        "fct-module": "Biobase.Fasta.Import",
        "fct-package": "BiobaseFasta",
        "fct-signature": "Int -\u003e Conduit ByteString m FastaWindow",
        "fct-source": "src/Biobase-Fasta-Import.html#parseFastaWindows",
        "fct-type": "function",
        "title": "parseFastaWindows"
      },
      "index": {
        "description": "Parse from ByteString into FastaWindow with past",
        "hierarchy": "Biobase Fasta Import",
        "module": "Biobase.Fasta.Import",
        "name": "parseFastaWindows",
        "normalized": "Int-\u003eConduit ByteString a FastaWindow",
        "package": "BiobaseFasta",
        "partial": "Fasta Windows",
        "signature": "Int-\u003eConduit ByteString m FastaWindow"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta-Import.html#v:printHeader",
      "description": {
        "fct-module": "Biobase.Fasta.Import",
        "fct-package": "BiobaseFasta",
        "fct-signature": "Event -\u003e ByteString",
        "fct-source": "src/Biobase-Fasta-Import.html#printHeader",
        "fct-type": "function",
        "title": "printHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Fasta Import",
        "module": "Biobase.Fasta.Import",
        "name": "printHeader",
        "normalized": "Event-\u003eByteString",
        "package": "BiobaseFasta",
        "partial": "Header",
        "signature": "Event-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta-Import.html#v:renderEvents",
      "description": {
        "fct-descr": "\u003cp\u003eRender from \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003es into \u003ccode\u003eByteStrings\u003c/code\u003e. \u003ccode\u003ecols\u003c/code\u003e is the number of\n characters after which a newline is introduced into the stream. Such\n newlines are introduced only into \u003ccode\u003e\u003ca\u003eData\u003c/a\u003e\u003c/code\u003e events.\n\u003c/p\u003e",
        "fct-module": "Biobase.Fasta.Import",
        "fct-package": "BiobaseFasta",
        "fct-signature": "Int -\u003e Conduit Event m ByteString",
        "fct-source": "src/Biobase-Fasta-Import.html#renderEvents",
        "fct-type": "function",
        "title": "renderEvents"
      },
      "index": {
        "description": "Render from Event into ByteStrings cols is the number of characters after which newline is introduced into the stream Such newlines are introduced only into Data events",
        "hierarchy": "Biobase Fasta Import",
        "module": "Biobase.Fasta.Import",
        "name": "renderEvents",
        "normalized": "Int-\u003eConduit Event a ByteString",
        "package": "BiobaseFasta",
        "partial": "Events",
        "signature": "Int-\u003eConduit Event m ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta-Import.html#v:renderFastaWindows",
      "description": {
        "fct-descr": "\u003cp\u003eRender from \u003ccode\u003e\u003ca\u003eFastaWindow\u003c/a\u003e\u003c/code\u003es into \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Biobase.Fasta.Import",
        "fct-package": "BiobaseFasta",
        "fct-signature": "Int -\u003e Conduit FastaWindow m ByteString",
        "fct-source": "src/Biobase-Fasta-Import.html#renderFastaWindows",
        "fct-type": "function",
        "title": "renderFastaWindows"
      },
      "index": {
        "description": "Render from FastaWindow into ByteString",
        "hierarchy": "Biobase Fasta Import",
        "module": "Biobase.Fasta.Import",
        "name": "renderFastaWindows",
        "normalized": "Int-\u003eConduit FastaWindow a ByteString",
        "package": "BiobaseFasta",
        "partial": "Fasta Windows",
        "signature": "Int-\u003eConduit FastaWindow m ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta-Import.html#v:test",
      "description": {
        "fct-module": "Biobase.Fasta.Import",
        "fct-package": "BiobaseFasta",
        "fct-signature": "IO ()",
        "fct-source": "src/Biobase-Fasta-Import.html#test",
        "fct-type": "function",
        "title": "test"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Fasta Import",
        "module": "Biobase.Fasta.Import",
        "name": "test",
        "normalized": "IO()",
        "package": "BiobaseFasta",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is currently home to a preliminary version of indices based\n on a minimal index of \u003ccode\u003eZero\u003c/code\u003e or \u003ccode\u003eOne\u003c/code\u003e (and possibly others).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Biobase.Fasta",
        "fct-package": "BiobaseFasta",
        "fct-signature": "module",
        "fct-source": "src/Biobase-Fasta.html",
        "fct-type": "module",
        "title": "Fasta"
      },
      "index": {
        "description": "This module is currently home to preliminary version of indices based on minimal index of Zero or One and possibly others",
        "hierarchy": "Biobase Fasta",
        "module": "Biobase.Fasta",
        "name": "Fasta",
        "normalized": "",
        "package": "BiobaseFasta",
        "partial": "Fasta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta.html#t:FastaWindow",
      "description": {
        "fct-module": "Biobase.Fasta",
        "fct-package": "BiobaseFasta",
        "fct-signature": "data",
        "fct-source": "src/Biobase-Fasta.html#FastaWindow",
        "fct-type": "data",
        "title": "FastaWindow"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Fasta",
        "module": "Biobase.Fasta",
        "name": "FastaWindow",
        "normalized": "",
        "package": "BiobaseFasta",
        "partial": "Fasta Window",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta.html#v:FastaW",
      "description": {
        "fct-module": "Biobase.Fasta",
        "fct-package": "BiobaseFasta",
        "fct-signature": "FastaW",
        "fct-source": "src/Biobase-Fasta.html#FastaWindow",
        "fct-type": "function",
        "title": "FastaW"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Fasta",
        "module": "Biobase.Fasta",
        "name": "FastaW",
        "normalized": "",
        "package": "BiobaseFasta",
        "partial": "Fasta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta.html#v:_description",
      "description": {
        "fct-descr": "\u003cp\u003eand description, if any\n\u003c/p\u003e",
        "fct-module": "Biobase.Fasta",
        "fct-package": "BiobaseFasta",
        "fct-signature": "!ByteString",
        "fct-source": "src/Biobase-Fasta.html#FastaWindow",
        "fct-type": "function",
        "title": "_description"
      },
      "index": {
        "description": "and description if any",
        "hierarchy": "Biobase Fasta",
        "module": "Biobase.Fasta",
        "name": "_description",
        "normalized": "",
        "package": "BiobaseFasta",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta.html#v:_fasta",
      "description": {
        "fct-descr": "\u003cp\u003ewindow data\n\u003c/p\u003e",
        "fct-module": "Biobase.Fasta",
        "fct-package": "BiobaseFasta",
        "fct-signature": "!ByteString",
        "fct-source": "src/Biobase-Fasta.html#FastaWindow",
        "fct-type": "function",
        "title": "_fasta"
      },
      "index": {
        "description": "window data",
        "hierarchy": "Biobase Fasta",
        "module": "Biobase.Fasta",
        "name": "_fasta",
        "normalized": "",
        "package": "BiobaseFasta",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta.html#v:_identifier",
      "description": {
        "fct-descr": "\u003cp\u003ethe current identifier\n\u003c/p\u003e",
        "fct-module": "Biobase.Fasta",
        "fct-package": "BiobaseFasta",
        "fct-signature": "!ByteString",
        "fct-source": "src/Biobase-Fasta.html#FastaWindow",
        "fct-type": "function",
        "title": "_identifier"
      },
      "index": {
        "description": "the current identifier",
        "hierarchy": "Biobase Fasta",
        "module": "Biobase.Fasta",
        "name": "_identifier",
        "normalized": "",
        "package": "BiobaseFasta",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta.html#v:_offset",
      "description": {
        "fct-descr": "\u003cp\u003eZero-based offset into the current stream\n\u003c/p\u003e",
        "fct-module": "Biobase.Fasta",
        "fct-package": "BiobaseFasta",
        "fct-signature": "!Offset",
        "fct-source": "src/Biobase-Fasta.html#FastaWindow",
        "fct-type": "function",
        "title": "_offset"
      },
      "index": {
        "description": "Zero-based offset into the current stream",
        "hierarchy": "Biobase Fasta",
        "module": "Biobase.Fasta",
        "name": "_offset",
        "normalized": "",
        "package": "BiobaseFasta",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFasta/docs/Biobase-Fasta.html#v:_past",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.Fasta",
        "fct-package": "BiobaseFasta",
        "fct-signature": "!ByteString",
        "fct-source": "src/Biobase-Fasta.html#FastaWindow",
        "fct-type": "function",
        "title": "_past"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase Fasta",
        "module": "Biobase.Fasta",
        "name": "_past",
        "normalized": "",
        "package": "BiobaseFasta",
        "partial": "",
        "signature": ""
      }
    }
  }
]