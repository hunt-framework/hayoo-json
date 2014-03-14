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
        "word": "hsc3-auditor"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eBosendorfer\u003c/em\u003e piano sample library based auditioner.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.SC3.Auditor.PF",
          "name": "PF",
          "package": "hsc3-auditor",
          "source": "src/Sound-SC3-Auditor-PF.html",
          "type": "module"
        },
        "index": {
          "description": "Bosendorfer piano sample library based auditioner",
          "hierarchy": "Sound SC3 Auditor PF",
          "module": "Sound.SC3.Auditor.PF",
          "name": "PF",
          "package": "hsc3-auditor",
          "partial": "PF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-PF.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend \u003ccode\u003e\u003ca\u003eOSC\u003c/a\u003e\u003c/code\u003e set given by \u003ccode\u003e\u003ca\u003ebosendorfer_set_osc\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003escsynth\u003c/code\u003e at\n \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.PF",
          "name": "au_load_bosendorfer_set",
          "package": "hsc3-auditor",
          "signature": "FilePath -\u003e m ()",
          "source": "src/Sound-SC3-Auditor-PF.html#au_load_bosendorfer_set",
          "type": "function"
        },
        "index": {
          "description": "Send OSC set given by bosendorfer set osc to scsynth at Transport",
          "hierarchy": "Sound SC3 Auditor PF",
          "module": "Sound.SC3.Auditor.PF",
          "name": "au_load_bosendorfer_set",
          "normalized": "FilePath-\u003ea()",
          "package": "hsc3-auditor",
          "signature": "FilePath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-PF.html#v:au_load_bosendorfer_set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eDerive_Index\u003c/code\u003e function for \u003cem\u003eBosendorfer\u003c/em\u003e sample set.  The offset\n from buffer number to midi note number, adjusted for by this\n function, is \u003ccode\u003e24\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.PF",
          "name": "bosendorfer_octpc_to_index",
          "package": "hsc3-auditor",
          "signature": "OctPC -\u003e Index",
          "source": "src/Sound-SC3-Auditor-PF.html#bosendorfer_octpc_to_index",
          "type": "function"
        },
        "index": {
          "description": "Derive Index function for Bosendorfer sample set The offset from buffer number to midi note number adjusted for by this function is",
          "hierarchy": "Sound SC3 Auditor PF",
          "module": "Sound.SC3.Auditor.PF",
          "name": "bosendorfer_octpc_to_index",
          "normalized": "OctPC-\u003eIndex",
          "package": "hsc3-auditor",
          "signature": "OctPC-\u003eIndex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-PF.html#v:bosendorfer_octpc_to_index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Auditor.PF",
          "name": "bosendorfer_osc",
          "package": "hsc3-auditor",
          "signature": "FilePath -\u003e (String, Int) -\u003e Message",
          "source": "src/Sound-SC3-Auditor-PF.html#bosendorfer_osc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Auditor PF",
          "module": "Sound.SC3.Auditor.PF",
          "name": "bosendorfer_osc",
          "normalized": "FilePath-\u003e(String,Int)-\u003eMessage",
          "package": "hsc3-auditor",
          "signature": "FilePath-\u003e(String,Int)-\u003eMessage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-PF.html#v:bosendorfer_osc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate set of \u003ccode\u003e\u003ca\u003eOSC\u003c/a\u003e\u003c/code\u003e messages to load \u003cem\u003eBosendorfer\u003c/em\u003e sample\n library.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.PF",
          "name": "bosendorfer_set_osc",
          "package": "hsc3-auditor",
          "signature": "FilePath -\u003e [Message]",
          "source": "src/Sound-SC3-Auditor-PF.html#bosendorfer_set_osc",
          "type": "function"
        },
        "index": {
          "description": "Generate set of OSC messages to load Bosendorfer sample library",
          "hierarchy": "Sound SC3 Auditor PF",
          "module": "Sound.SC3.Auditor.PF",
          "name": "bosendorfer_set_osc",
          "normalized": "FilePath-\u003e[Message]",
          "package": "hsc3-auditor",
          "signature": "FilePath-\u003e[Message]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-PF.html#v:bosendorfer_set_osc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003ebosendorfer_set_osc\u003c/a\u003e\u003c/code\u003e to load required subset of library.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.PF",
          "name": "bosendorfer_subset_osc",
          "package": "hsc3-auditor",
          "signature": "FilePath -\u003e Sample_Loader",
          "source": "src/Sound-SC3-Auditor-PF.html#bosendorfer_subset_osc",
          "type": "function"
        },
        "index": {
          "description": "Variant of bosendorfer set osc to load required subset of library",
          "hierarchy": "Sound SC3 Auditor PF",
          "module": "Sound.SC3.Auditor.PF",
          "name": "bosendorfer_subset_osc",
          "normalized": "FilePath-\u003eSample_Loader",
          "package": "hsc3-auditor",
          "signature": "FilePath-\u003eSample_Loader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-PF.html#v:bosendorfer_subset_osc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Auditor.PF",
          "name": "file_names",
          "package": "hsc3-auditor",
          "signature": "[String]",
          "source": "src/Sound-SC3-Auditor-PF.html#file_names",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Auditor PF",
          "module": "Sound.SC3.Auditor.PF",
          "name": "file_names",
          "normalized": "[String]",
          "package": "hsc3-auditor",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-PF.html#v:file_names"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert set of \u003ccode\u003e\u003ca\u003eOctPC\u003c/a\u003e\u003c/code\u003e based \u003ccode\u003e\u003ca\u003eP\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003ePP\u003c/a\u003e\u003c/code\u003e with appropriate\n \u003ccode\u003eDerive_Index\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.PF",
          "name": "for_pf",
          "package": "hsc3-auditor",
          "signature": "[(Start_Time, [(OctPC, Amplitude)])] -\u003e PP",
          "source": "src/Sound-SC3-Auditor-PF.html#for_pf",
          "type": "function"
        },
        "index": {
          "description": "Convert set of OctPC based to PP with appropriate Derive Index function",
          "hierarchy": "Sound SC3 Auditor PF",
          "module": "Sound.SC3.Auditor.PF",
          "name": "for_pf",
          "normalized": "[(Start_Time,[(OctPC,Amplitude)])]-\u003ePP",
          "package": "hsc3-auditor",
          "signature": "[(Start_Time,[(OctPC,Amplitude)])]-\u003ePP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-PF.html#v:for_pf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Auditor.PF",
          "name": "note_names",
          "package": "hsc3-auditor",
          "signature": "[String]",
          "source": "src/Sound-SC3-Auditor-PF.html#note_names",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Auditor PF",
          "module": "Sound.SC3.Auditor.PF",
          "name": "note_names",
          "normalized": "[String]",
          "package": "hsc3-auditor",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-PF.html#v:note_names"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eTR808\u003c/em\u003e sample library based auditioner.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "TR808",
          "package": "hsc3-auditor",
          "source": "src/Sound-SC3-Auditor-TR808.html",
          "type": "module"
        },
        "index": {
          "description": "TR808 sample library based auditioner",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "TR808",
          "package": "hsc3-auditor",
          "partial": "TR",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet of relevant \u003ccode\u003e\u003ca\u003ePosition\u003c/a\u003e\u003c/code\u003e data.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "Parameters",
          "package": "hsc3-auditor",
          "source": "src/Sound-SC3-Auditor-TR808.html#Parameters",
          "type": "type"
        },
        "index": {
          "description": "Set of relevant Position data",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "Parameters",
          "package": "hsc3-auditor",
          "partial": "Parameters",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#t:Parameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eController positions to index sample library.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "Position",
          "package": "hsc3-auditor",
          "source": "src/Sound-SC3-Auditor-TR808.html#Position",
          "type": "data"
        },
        "index": {
          "description": "Controller positions to index sample library",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "Position",
          "package": "hsc3-auditor",
          "partial": "Position",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#t:Position"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumeration of TR808 instruments.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "TR808",
          "package": "hsc3-auditor",
          "source": "src/Sound-SC3-Auditor-TR808.html#TR808",
          "type": "data"
        },
        "index": {
          "description": "Enumeration of TR808 instruments",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "TR808",
          "package": "hsc3-auditor",
          "partial": "TR",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#t:TR808"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBass Drum\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "BD",
          "package": "hsc3-auditor",
          "signature": "BD",
          "source": "src/Sound-SC3-Auditor-TR808.html#TR808",
          "type": "function"
        },
        "index": {
          "description": "Bass Drum",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "BD",
          "package": "hsc3-auditor",
          "partial": "BD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:BD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCow Bell\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "CB",
          "package": "hsc3-auditor",
          "signature": "CB",
          "source": "src/Sound-SC3-Auditor-TR808.html#TR808",
          "type": "function"
        },
        "index": {
          "description": "Cow Bell",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "CB",
          "package": "hsc3-auditor",
          "partial": "CB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:CB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClosed Hi-Hat\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "CH",
          "package": "hsc3-auditor",
          "signature": "CH",
          "source": "src/Sound-SC3-Auditor-TR808.html#TR808",
          "type": "function"
        },
        "index": {
          "description": "Closed Hi-Hat",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "CH",
          "package": "hsc3-auditor",
          "partial": "CH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:CH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClaves\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "CL",
          "package": "hsc3-auditor",
          "signature": "CL",
          "source": "src/Sound-SC3-Auditor-TR808.html#TR808",
          "type": "function"
        },
        "index": {
          "description": "Claves",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "CL",
          "package": "hsc3-auditor",
          "partial": "CL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:CL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHand Clap\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "CP",
          "package": "hsc3-auditor",
          "signature": "CP",
          "source": "src/Sound-SC3-Auditor-TR808.html#TR808",
          "type": "function"
        },
        "index": {
          "description": "Hand Clap",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "CP",
          "package": "hsc3-auditor",
          "partial": "CP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:CP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCymbal\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "CY",
          "package": "hsc3-auditor",
          "signature": "CY",
          "source": "src/Sound-SC3-Auditor-TR808.html#TR808",
          "type": "function"
        },
        "index": {
          "description": "Cymbal",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "CY",
          "package": "hsc3-auditor",
          "partial": "CY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:CY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHigh Conga\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "HC",
          "package": "hsc3-auditor",
          "signature": "HC",
          "source": "src/Sound-SC3-Auditor-TR808.html#TR808",
          "type": "function"
        },
        "index": {
          "description": "High Conga",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "HC",
          "package": "hsc3-auditor",
          "partial": "HC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:HC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHigh Tom\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "HT",
          "package": "hsc3-auditor",
          "signature": "HT",
          "source": "src/Sound-SC3-Auditor-TR808.html#TR808",
          "type": "function"
        },
        "index": {
          "description": "High Tom",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "HT",
          "package": "hsc3-auditor",
          "partial": "HT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:HT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLow Conga\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "LC",
          "package": "hsc3-auditor",
          "signature": "LC",
          "source": "src/Sound-SC3-Auditor-TR808.html#TR808",
          "type": "function"
        },
        "index": {
          "description": "Low Conga",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "LC",
          "package": "hsc3-auditor",
          "partial": "LC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:LC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLow Tom\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "LT'",
          "package": "hsc3-auditor",
          "signature": "LT'",
          "source": "src/Sound-SC3-Auditor-TR808.html#TR808",
          "type": "function"
        },
        "index": {
          "description": "Low Tom",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "LT'",
          "package": "hsc3-auditor",
          "partial": "LT'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:LT-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaracas\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "MA",
          "package": "hsc3-auditor",
          "signature": "MA",
          "source": "src/Sound-SC3-Auditor-TR808.html#TR808",
          "type": "function"
        },
        "index": {
          "description": "Maracas",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "MA",
          "package": "hsc3-auditor",
          "partial": "MA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:MA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMid Conga\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "MC",
          "package": "hsc3-auditor",
          "signature": "MC",
          "source": "src/Sound-SC3-Auditor-TR808.html#TR808",
          "type": "function"
        },
        "index": {
          "description": "Mid Conga",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "MC",
          "package": "hsc3-auditor",
          "partial": "MC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:MC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMid Tom\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "MT",
          "package": "hsc3-auditor",
          "signature": "MT",
          "source": "src/Sound-SC3-Auditor-TR808.html#TR808",
          "type": "function"
        },
        "index": {
          "description": "Mid Tom",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "MT",
          "package": "hsc3-auditor",
          "partial": "MT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:MT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen Hi-Hat\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "OH",
          "package": "hsc3-auditor",
          "signature": "OH",
          "source": "src/Sound-SC3-Auditor-TR808.html#TR808",
          "type": "function"
        },
        "index": {
          "description": "Open Hi-Hat",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "OH",
          "package": "hsc3-auditor",
          "partial": "OH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:OH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Auditor.TR808",
          "name": "P0",
          "package": "hsc3-auditor",
          "signature": "P0",
          "source": "src/Sound-SC3-Auditor-TR808.html#Position",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "P0",
          "package": "hsc3-auditor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:P0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Auditor.TR808",
          "name": "P1",
          "package": "hsc3-auditor",
          "signature": "P1",
          "source": "src/Sound-SC3-Auditor-TR808.html#Position",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "P1",
          "package": "hsc3-auditor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:P1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Auditor.TR808",
          "name": "P2",
          "package": "hsc3-auditor",
          "signature": "P2",
          "source": "src/Sound-SC3-Auditor-TR808.html#Position",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "P2",
          "package": "hsc3-auditor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:P2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Auditor.TR808",
          "name": "P3",
          "package": "hsc3-auditor",
          "signature": "P3",
          "source": "src/Sound-SC3-Auditor-TR808.html#Position",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "P3",
          "package": "hsc3-auditor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:P3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Auditor.TR808",
          "name": "P4",
          "package": "hsc3-auditor",
          "signature": "P4",
          "source": "src/Sound-SC3-Auditor-TR808.html#Position",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "P4",
          "package": "hsc3-auditor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:P4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRim Shot\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "RS",
          "package": "hsc3-auditor",
          "signature": "RS",
          "source": "src/Sound-SC3-Auditor-TR808.html#TR808",
          "type": "function"
        },
        "index": {
          "description": "Rim Shot",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "RS",
          "package": "hsc3-auditor",
          "partial": "RS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:RS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSnare Drum\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "SD",
          "package": "hsc3-auditor",
          "signature": "SD",
          "source": "src/Sound-SC3-Auditor-TR808.html#TR808",
          "type": "function"
        },
        "index": {
          "description": "Snare Drum",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "SD",
          "package": "hsc3-auditor",
          "partial": "SD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:SD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend \u003ccode\u003e\u003ca\u003eOSC\u003c/a\u003e\u003c/code\u003e set given by \u003ccode\u003e\u003ca\u003etr808_alloc_all_osc\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003escsynth\u003c/code\u003e at\n \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "au_load_tr808_set",
          "package": "hsc3-auditor",
          "signature": "FilePath -\u003e m ()",
          "source": "src/Sound-SC3-Auditor-TR808.html#au_load_tr808_set",
          "type": "function"
        },
        "index": {
          "description": "Send OSC set given by tr808 alloc all osc to scsynth at Transport",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "au_load_tr808_set",
          "normalized": "FilePath-\u003ea()",
          "package": "hsc3-auditor",
          "signature": "FilePath-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:au_load_tr808_set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate \u003ccode\u003e\u003ca\u003ePosition\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e encoding in file names.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "position_text",
          "package": "hsc3-auditor",
          "signature": "Position -\u003e String",
          "source": "src/Sound-SC3-Auditor-TR808.html#position_text",
          "type": "function"
        },
        "index": {
          "description": "Translate Position to String encoding in file names",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "position_text",
          "normalized": "Position-\u003eString",
          "package": "hsc3-auditor",
          "signature": "Position-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:position_text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrettty printer variant of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003eTR808\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "tr808_abbrev",
          "package": "hsc3-auditor",
          "signature": "TR808 -\u003e String",
          "source": "src/Sound-SC3-Auditor-TR808.html#tr808_abbrev",
          "type": "function"
        },
        "index": {
          "description": "Prettty printer variant of Show instance for TR808",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "tr808_abbrev",
          "normalized": "TR-\u003eString",
          "package": "hsc3-auditor",
          "signature": "TR-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:tr808_abbrev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplete set of \u003ccode\u003e\u003ca\u003etr808_alloc_osc\u003c/a\u003e\u003c/code\u003e messages for \u003ccode\u003e\u003ca\u003eTR808\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "tr808_alloc_all_osc",
          "package": "hsc3-auditor",
          "signature": "FilePath -\u003e [Message]",
          "source": "src/Sound-SC3-Auditor-TR808.html#tr808_alloc_all_osc",
          "type": "function"
        },
        "index": {
          "description": "Complete set of tr808 alloc osc messages for TR808",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "tr808_alloc_all_osc",
          "normalized": "FilePath-\u003e[Message]",
          "package": "hsc3-auditor",
          "signature": "FilePath-\u003e[Message]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:tr808_alloc_all_osc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuffer \u003cem\u003eallocate and read\u003c/em\u003e message for \u003ccode\u003escsynth\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "tr808_alloc_osc",
          "package": "hsc3-auditor",
          "signature": "FilePath -\u003e (FilePath, Int) -\u003e Message",
          "source": "src/Sound-SC3-Auditor-TR808.html#tr808_alloc_osc",
          "type": "function"
        },
        "index": {
          "description": "Buffer allocate and read message for scsynth",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "tr808_alloc_osc",
          "normalized": "FilePath-\u003e(FilePath,Int)-\u003eMessage",
          "package": "hsc3-auditor",
          "signature": "FilePath-\u003e(FilePath,Int)-\u003eMessage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:tr808_alloc_osc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003etr808_alloc_all_osc\u003c/a\u003e\u003c/code\u003e to load required subset of library.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "tr808_alloc_subset_osc",
          "package": "hsc3-auditor",
          "signature": "FilePath -\u003e Sample_Loader",
          "source": "src/Sound-SC3-Auditor-TR808.html#tr808_alloc_subset_osc",
          "type": "function"
        },
        "index": {
          "description": "Variant of tr808 alloc all osc to load required subset of library",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "tr808_alloc_subset_osc",
          "normalized": "FilePath-\u003eSample_Loader",
          "package": "hsc3-auditor",
          "signature": "FilePath-\u003eSample_Loader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:tr808_alloc_subset_osc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe complete set of \u003ccode\u003e\u003ca\u003eTR808\u003c/a\u003e\u003c/code\u003e sample \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "tr808_file_map",
          "package": "hsc3-auditor",
          "signature": "[FilePath]",
          "source": "src/Sound-SC3-Auditor-TR808.html#tr808_file_map",
          "type": "function"
        },
        "index": {
          "description": "The complete set of TR808 sample FilePath",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "tr808_file_map",
          "normalized": "[FilePath]",
          "package": "hsc3-auditor",
          "signature": "[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:tr808_file_map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eTR808\u003c/a\u003e\u003c/code\u003e instrument with indicated \u003ccode\u003e\u003ca\u003eParameters\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "tr808_file_name",
          "package": "hsc3-auditor",
          "signature": "TR808 -\u003e Parameters -\u003e FilePath",
          "source": "src/Sound-SC3-Auditor-TR808.html#tr808_file_name",
          "type": "function"
        },
        "index": {
          "description": "Generate FilePath for TR808 instrument with indicated Parameters",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "tr808_file_name",
          "normalized": "TR-\u003eParameters-\u003eFilePath",
          "package": "hsc3-auditor",
          "signature": "TR-\u003eParameters-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:tr808_file_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate full set of \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e for all \u003ccode\u003e\u003ca\u003ePosition\u003c/a\u003e\u003c/code\u003es of \u003ccode\u003e\u003ca\u003eTR808\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "tr808_file_names",
          "package": "hsc3-auditor",
          "signature": "TR808 -\u003e [FilePath]",
          "source": "src/Sound-SC3-Auditor-TR808.html#tr808_file_names",
          "type": "function"
        },
        "index": {
          "description": "Generate full set of FilePath for all Position of TR808",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "tr808_file_names",
          "normalized": "TR-\u003e[FilePath]",
          "package": "hsc3-auditor",
          "signature": "TR-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:tr808_file_names"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup \u003ccode\u003e\u003ca\u003eIndex\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eTR808\u003c/a\u003e\u003c/code\u003e at indicated \u003ccode\u003e\u003ca\u003eParameters\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "tr808_index",
          "package": "hsc3-auditor",
          "signature": "TR808 -\u003e Parameters -\u003e Index",
          "source": "src/Sound-SC3-Auditor-TR808.html#tr808_index",
          "type": "function"
        },
        "index": {
          "description": "Lookup Index for TR808 at indicated Parameters",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "tr808_index",
          "normalized": "TR-\u003eParameters-\u003eIndex",
          "package": "hsc3-auditor",
          "signature": "TR-\u003eParameters-\u003eIndex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:tr808_index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to give number of parameters for each \u003ccode\u003e\u003ca\u003eTR808\u003c/a\u003e\u003c/code\u003e instrument.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "tr808_n_param",
          "package": "hsc3-auditor",
          "signature": "TR808 -\u003e Int",
          "source": "src/Sound-SC3-Auditor-TR808.html#tr808_n_param",
          "type": "function"
        },
        "index": {
          "description": "Function to give number of parameters for each TR808 instrument",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "tr808_n_param",
          "normalized": "TR-\u003eInt",
          "package": "hsc3-auditor",
          "signature": "TR-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:tr808_n_param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTR808\u003c/a\u003e\u003c/code\u003e instrument names.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "tr808_name",
          "package": "hsc3-auditor",
          "signature": "TR808 -\u003e String",
          "source": "src/Sound-SC3-Auditor-TR808.html#tr808_name",
          "type": "function"
        },
        "index": {
          "description": "TR808 instrument names",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "tr808_name",
          "normalized": "TR-\u003eString",
          "package": "hsc3-auditor",
          "signature": "TR-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:tr808_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe set of all \u003ccode\u003e\u003ca\u003eParameters\u003c/a\u003e\u003c/code\u003e for a \u003ccode\u003e\u003ca\u003eTR808\u003c/a\u003e\u003c/code\u003e instrument.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "tr808_set",
          "package": "hsc3-auditor",
          "signature": "[(TR808, [Parameters])]",
          "source": "src/Sound-SC3-Auditor-TR808.html#tr808_set",
          "type": "function"
        },
        "index": {
          "description": "The set of all Parameters for TR808 instrument",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "tr808_set",
          "normalized": "[(TR,[Parameters])]",
          "package": "hsc3-auditor",
          "signature": "[(TR,[Parameters])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:tr808_set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe set of all \u003ccode\u003e\u003ca\u003eTR808\u003c/a\u003e\u003c/code\u003e data.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "tr808_u",
          "package": "hsc3-auditor",
          "signature": "[(TR808, Parameters)]",
          "source": "src/Sound-SC3-Auditor-TR808.html#tr808_u",
          "type": "function"
        },
        "index": {
          "description": "The set of all TR808 data",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "tr808_u",
          "normalized": "[(TR,Parameters)]",
          "package": "hsc3-auditor",
          "signature": "[(TR,Parameters)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:tr808_u"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup \u003ccode\u003e\u003ca\u003etr808_set\u003c/a\u003e\u003c/code\u003e for the \u003cem\u003en\u003c/em\u003eth variant of \u003ccode\u003e\u003ca\u003eTR808\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "tr808_variant",
          "package": "hsc3-auditor",
          "signature": "TR808 -\u003e Int -\u003e Maybe Parameters",
          "source": "src/Sound-SC3-Auditor-TR808.html#tr808_variant",
          "type": "function"
        },
        "index": {
          "description": "Lookup tr808 set for the th variant of TR808",
          "hierarchy": "Sound SC3 Auditor TR808",
          "module": "Sound.SC3.Auditor.TR808",
          "name": "tr808_variant",
          "normalized": "TR-\u003eInt-\u003eMaybe Parameters",
          "package": "hsc3-auditor",
          "signature": "TR-\u003eInt-\u003eMaybe Parameters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:tr808_variant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAuditor functions common to all sample libraries.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.SC3.Auditor",
          "name": "Auditor",
          "package": "hsc3-auditor",
          "source": "src/Sound-SC3-Auditor.html",
          "type": "module"
        },
        "index": {
          "description": "Auditor functions common to all sample libraries",
          "hierarchy": "Sound SC3 Auditor",
          "module": "Sound.SC3.Auditor",
          "name": "Auditor",
          "package": "hsc3-auditor",
          "partial": "Auditor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAmplitude\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor",
          "name": "Amplitude",
          "package": "hsc3-auditor",
          "source": "src/Sound-SC3-Auditor.html#Amplitude",
          "type": "type"
        },
        "index": {
          "description": "Amplitude",
          "hierarchy": "Sound SC3 Auditor",
          "module": "Sound.SC3.Auditor",
          "name": "Amplitude",
          "package": "hsc3-auditor",
          "partial": "Amplitude",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#t:Amplitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChord\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor",
          "name": "Chord",
          "package": "hsc3-auditor",
          "source": "src/Sound-SC3-Auditor.html#Chord",
          "type": "type"
        },
        "index": {
          "description": "Chord",
          "hierarchy": "Sound SC3 Auditor",
          "module": "Sound.SC3.Auditor",
          "name": "Chord",
          "package": "hsc3-auditor",
          "partial": "Chord",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#t:Chord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDuration\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor",
          "name": "Duration",
          "package": "hsc3-auditor",
          "source": "src/Sound-SC3-Auditor.html#Duration",
          "type": "type"
        },
        "index": {
          "description": "Duration",
          "hierarchy": "Sound SC3 Auditor",
          "module": "Sound.SC3.Auditor",
          "name": "Duration",
          "package": "hsc3-auditor",
          "partial": "Duration",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#t:Duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndex\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor",
          "name": "Index",
          "package": "hsc3-auditor",
          "source": "src/Sound-SC3-Auditor.html#Index",
          "type": "type"
        },
        "index": {
          "description": "Index",
          "hierarchy": "Sound SC3 Auditor",
          "module": "Sound.SC3.Auditor",
          "name": "Index",
          "package": "hsc3-auditor",
          "partial": "Index",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#t:Index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of channels\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor",
          "name": "NC",
          "package": "hsc3-auditor",
          "source": "src/Sound-SC3-Auditor.html#NC",
          "type": "type"
        },
        "index": {
          "description": "Number of channels",
          "hierarchy": "Sound SC3 Auditor",
          "module": "Sound.SC3.Auditor",
          "name": "NC",
          "package": "hsc3-auditor",
          "partial": "NC",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#t:NC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Auditor",
          "name": "Note",
          "package": "hsc3-auditor",
          "source": "src/Sound-SC3-Auditor.html#Note",
          "type": "type"
        },
        "index": {
          "hierarchy": "Sound SC3 Auditor",
          "module": "Sound.SC3.Auditor",
          "name": "Note",
          "package": "hsc3-auditor",
          "partial": "Note",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#t:Note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eStart_Time\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor",
          "name": "P",
          "package": "hsc3-auditor",
          "source": "src/Sound-SC3-Auditor.html#P",
          "type": "type"
        },
        "index": {
          "description": "Start Time and Chord",
          "hierarchy": "Sound SC3 Auditor",
          "module": "Sound.SC3.Auditor",
          "name": "P",
          "package": "hsc3-auditor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#t:P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet of \u003ccode\u003e\u003ca\u003eP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor",
          "name": "PP",
          "package": "hsc3-auditor",
          "source": "src/Sound-SC3-Auditor.html#PP",
          "type": "type"
        },
        "index": {
          "description": "Set of",
          "hierarchy": "Sound SC3 Auditor",
          "module": "Sound.SC3.Auditor",
          "name": "PP",
          "package": "hsc3-auditor",
          "partial": "PP",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#t:PP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to generate the set of \u003ccode\u003e\u003ca\u003eOSC\u003c/a\u003e\u003c/code\u003e commands required to load\n the set of \u003ccode\u003e\u003ca\u003eIndex\u003c/a\u003e\u003c/code\u003eed files.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor",
          "name": "Sample_Loader",
          "package": "hsc3-auditor",
          "source": "src/Sound-SC3-Auditor.html#Sample_Loader",
          "type": "type"
        },
        "index": {
          "description": "Function to generate the set of OSC commands required to load the set of Index ed files",
          "hierarchy": "Sound SC3 Auditor",
          "module": "Sound.SC3.Auditor",
          "name": "Sample_Loader",
          "package": "hsc3-auditor",
          "partial": "Sample Loader",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#t:Sample_Loader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart time\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor",
          "name": "Start_Time",
          "package": "hsc3-auditor",
          "source": "src/Sound-SC3-Auditor.html#Start_Time",
          "type": "type"
        },
        "index": {
          "description": "Start time",
          "hierarchy": "Sound SC3 Auditor",
          "module": "Sound.SC3.Auditor",
          "name": "Start_Time",
          "package": "hsc3-auditor",
          "partial": "Start Time",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#t:Start_Time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Auditor",
          "name": "au_chd",
          "package": "hsc3-auditor",
          "signature": "(Chord, Duration) -\u003e m ()",
          "source": "src/Sound-SC3-Auditor.html#au_chd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Auditor",
          "module": "Sound.SC3.Auditor",
          "name": "au_chd",
          "normalized": "(Chord,Duration)-\u003ea()",
          "package": "hsc3-auditor",
          "signature": "(Chord,Duration)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:au_chd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad sample playback instrument to \u003ccode\u003escsynth\u003c/code\u003e at \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor",
          "name": "au_load_instr",
          "package": "hsc3-auditor",
          "signature": "NC -\u003e m ()",
          "source": "src/Sound-SC3-Auditor.html#au_load_instr",
          "type": "function"
        },
        "index": {
          "description": "Load sample playback instrument to scsynth at Transport",
          "hierarchy": "Sound SC3 Auditor",
          "module": "Sound.SC3.Auditor",
          "name": "au_load_instr",
          "normalized": "NC-\u003ea()",
          "package": "hsc3-auditor",
          "signature": "NC-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:au_load_instr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Auditor",
          "name": "chd_osc",
          "package": "hsc3-auditor",
          "signature": "Chord -\u003e [Message]",
          "source": "src/Sound-SC3-Auditor.html#chd_osc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Auditor",
          "module": "Sound.SC3.Auditor",
          "name": "chd_osc",
          "normalized": "Chord-\u003e[Message]",
          "package": "hsc3-auditor",
          "signature": "Chord-\u003e[Message]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:chd_osc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Auditor",
          "name": "chord_indices",
          "package": "hsc3-auditor",
          "signature": "Chord -\u003e [Index]",
          "source": "src/Sound-SC3-Auditor.html#chord_indices",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Auditor",
          "module": "Sound.SC3.Auditor",
          "name": "chord_indices",
          "normalized": "Chord-\u003e[Index]",
          "package": "hsc3-auditor",
          "signature": "Chord-\u003e[Index]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:chord_indices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Auditor",
          "name": "instr_osc",
          "package": "hsc3-auditor",
          "signature": "NC -\u003e Message",
          "source": "src/Sound-SC3-Auditor.html#instr_osc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Auditor",
          "module": "Sound.SC3.Auditor",
          "name": "instr_osc",
          "normalized": "NC-\u003eMessage",
          "package": "hsc3-auditor",
          "signature": "NC-\u003eMessage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:instr_osc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Auditor",
          "name": "note_amplitude",
          "package": "hsc3-auditor",
          "signature": "Note -\u003e Amplitude",
          "source": "src/Sound-SC3-Auditor.html#note_amplitude",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Auditor",
          "module": "Sound.SC3.Auditor",
          "name": "note_amplitude",
          "normalized": "Note-\u003eAmplitude",
          "package": "hsc3-auditor",
          "signature": "Note-\u003eAmplitude",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:note_amplitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Auditor",
          "name": "note_index",
          "package": "hsc3-auditor",
          "signature": "Note -\u003e Index",
          "source": "src/Sound-SC3-Auditor.html#note_index",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Auditor",
          "module": "Sound.SC3.Auditor",
          "name": "note_index",
          "normalized": "Note-\u003eIndex",
          "package": "hsc3-auditor",
          "signature": "Note-\u003eIndex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:note_index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Auditor",
          "name": "p_chord",
          "package": "hsc3-auditor",
          "signature": "P -\u003e Chord",
          "source": "src/Sound-SC3-Auditor.html#p_chord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Auditor",
          "module": "Sound.SC3.Auditor",
          "name": "p_chord",
          "normalized": "P-\u003eChord",
          "package": "hsc3-auditor",
          "signature": "P-\u003eChord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:p_chord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Auditor",
          "name": "p_osc",
          "package": "hsc3-auditor",
          "signature": "P -\u003e Bundle",
          "source": "src/Sound-SC3-Auditor.html#p_osc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Auditor",
          "module": "Sound.SC3.Auditor",
          "name": "p_osc",
          "normalized": "P-\u003eBundle",
          "package": "hsc3-auditor",
          "signature": "P-\u003eBundle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:p_osc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Auditor",
          "name": "p_start_time",
          "package": "hsc3-auditor",
          "signature": "P -\u003e Start_Time",
          "source": "src/Sound-SC3-Auditor.html#p_start_time",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Auditor",
          "module": "Sound.SC3.Auditor",
          "name": "p_start_time",
          "normalized": "P-\u003eStart_Time",
          "package": "hsc3-auditor",
          "signature": "P-\u003eStart_Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:p_start_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAudition \u003ccode\u003e\u003ca\u003ePP\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003escsynth\u003c/code\u003e instance at \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor",
          "name": "pp_audition",
          "package": "hsc3-auditor",
          "signature": "PP -\u003e m ()",
          "source": "src/Sound-SC3-Auditor.html#pp_audition",
          "type": "function"
        },
        "index": {
          "description": "Audition PP at scsynth instance at Transport",
          "hierarchy": "Sound SC3 Auditor",
          "module": "Sound.SC3.Auditor",
          "name": "pp_audition",
          "normalized": "PP-\u003ea()",
          "package": "hsc3-auditor",
          "signature": "PP-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:pp_audition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Auditor",
          "name": "pp_chords",
          "package": "hsc3-auditor",
          "signature": "PP -\u003e [Chord]",
          "source": "src/Sound-SC3-Auditor.html#pp_chords",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Auditor",
          "module": "Sound.SC3.Auditor",
          "name": "pp_chords",
          "normalized": "PP-\u003e[Chord]",
          "package": "hsc3-auditor",
          "signature": "PP-\u003e[Chord]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:pp_chords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart time of last \u003ccode\u003e\u003ca\u003eP\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003ePP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor",
          "name": "pp_duration",
          "package": "hsc3-auditor",
          "signature": "PP -\u003e Duration",
          "source": "src/Sound-SC3-Auditor.html#pp_duration",
          "type": "function"
        },
        "index": {
          "description": "Start time of last at PP",
          "hierarchy": "Sound SC3 Auditor",
          "module": "Sound.SC3.Auditor",
          "name": "pp_duration",
          "normalized": "PP-\u003eDuration",
          "package": "hsc3-auditor",
          "signature": "PP-\u003eDuration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:pp_duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe set of \u003ccode\u003e\u003ca\u003eIndex\u003c/a\u003e\u003c/code\u003e referenced to by \u003ccode\u003e\u003ca\u003ePP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor",
          "name": "pp_indices",
          "package": "hsc3-auditor",
          "signature": "PP -\u003e [Index]",
          "source": "src/Sound-SC3-Auditor.html#pp_indices",
          "type": "function"
        },
        "index": {
          "description": "The set of Index referenced to by PP",
          "hierarchy": "Sound SC3 Auditor",
          "module": "Sound.SC3.Auditor",
          "name": "pp_indices",
          "normalized": "PP-\u003e[Index]",
          "package": "hsc3-auditor",
          "signature": "PP-\u003e[Index]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:pp_indices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate set of \u003ccode\u003e\u003ca\u003eOSC\u003c/a\u003e\u003c/code\u003e given \u003ccode\u003e\u003ca\u003eNC\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eSample_Loader\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor",
          "name": "pp_nrt",
          "package": "hsc3-auditor",
          "signature": "NC -\u003e Sample_Loader -\u003e PP -\u003e NRT",
          "source": "src/Sound-SC3-Auditor.html#pp_nrt",
          "type": "function"
        },
        "index": {
          "description": "Generate set of OSC given NC Sample Loader and PP",
          "hierarchy": "Sound SC3 Auditor",
          "module": "Sound.SC3.Auditor",
          "name": "pp_nrt",
          "normalized": "NC-\u003eSample_Loader-\u003ePP-\u003eNRT",
          "package": "hsc3-auditor",
          "signature": "NC-\u003eSample_Loader-\u003ePP-\u003eNRT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:pp_nrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003epp_osc\u003c/code\u003e that writes \u003ccode\u003eNRT\u003c/code\u003e score to named file using\n \u003ccode\u003e\u003ca\u003ewriteNRT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Sound.SC3.Auditor",
          "name": "pp_nrt_write",
          "package": "hsc3-auditor",
          "signature": "FilePath -\u003e NC -\u003e Sample_Loader -\u003e PP -\u003e IO ()",
          "source": "src/Sound-SC3-Auditor.html#pp_nrt_write",
          "type": "function"
        },
        "index": {
          "description": "Variant of pp osc that writes NRT score to named file using writeNRT",
          "hierarchy": "Sound SC3 Auditor",
          "module": "Sound.SC3.Auditor",
          "name": "pp_nrt_write",
          "normalized": "FilePath-\u003eNC-\u003eSample_Loader-\u003ePP-\u003eIO()",
          "package": "hsc3-auditor",
          "signature": "FilePath-\u003eNC-\u003eSample_Loader-\u003ePP-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:pp_nrt_write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Auditor",
          "name": "pp_st_to_dur",
          "package": "hsc3-auditor",
          "signature": "PP -\u003e [(Chord, Duration)]",
          "source": "src/Sound-SC3-Auditor.html#pp_st_to_dur",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Auditor",
          "module": "Sound.SC3.Auditor",
          "name": "pp_st_to_dur",
          "normalized": "PP-\u003e[(Chord,Duration)]",
          "package": "hsc3-auditor",
          "signature": "PP-\u003e[(Chord,Duration)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:pp_st_to_dur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Auditor",
          "name": "pp_start_times",
          "package": "hsc3-auditor",
          "signature": "PP -\u003e [Start_Time]",
          "source": "src/Sound-SC3-Auditor.html#pp_start_times",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Auditor",
          "module": "Sound.SC3.Auditor",
          "name": "pp_start_times",
          "normalized": "PP-\u003e[Start_Time]",
          "package": "hsc3-auditor",
          "signature": "PP-\u003e[Start_Time]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:pp_start_times"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Auditor",
          "name": "smplr",
          "package": "hsc3-auditor",
          "signature": "NC -\u003e UGen",
          "source": "src/Sound-SC3-Auditor.html#smplr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Auditor",
          "module": "Sound.SC3.Auditor",
          "name": "smplr",
          "normalized": "NC-\u003eUGen",
          "package": "hsc3-auditor",
          "signature": "NC-\u003eUGen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:smplr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.SC3.Auditor",
          "name": "to_p",
          "package": "hsc3-auditor",
          "signature": "(a -\u003e Index, a -\u003e Amplitude) -\u003e (Start_Time, [a]) -\u003e P",
          "source": "src/Sound-SC3-Auditor.html#to_p",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound SC3 Auditor",
          "module": "Sound.SC3.Auditor",
          "name": "to_p",
          "normalized": "(a-\u003eIndex,a-\u003eAmplitude)-\u003e(Start_Time,[a])-\u003eP",
          "package": "hsc3-auditor",
          "signature": "(a-\u003eIndex,a-\u003eAmplitude)-\u003e(Start_Time,[a])-\u003eP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:to_p"
      }
    }
  ]
]