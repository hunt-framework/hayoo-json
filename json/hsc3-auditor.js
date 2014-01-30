[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-PF.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eBosendorfer\u003c/em\u003e piano sample library based auditioner.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.SC3.Auditor.PF",
        "fct-package": "hsc3-auditor",
        "fct-signature": "module",
        "fct-source": "src/Sound-SC3-Auditor-PF.html",
        "fct-type": "module",
        "title": "PF"
      },
      "index": {
        "description": "Bosendorfer piano sample library based auditioner",
        "hierarchy": "Sound SC3 Auditor PF",
        "module": "Sound.SC3.Auditor.PF",
        "name": "PF",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "PF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-PF.html#v:au_load_bosendorfer_set",
      "description": {
        "fct-descr": "\u003cp\u003eSend \u003ccode\u003e\u003ca\u003eOSC\u003c/a\u003e\u003c/code\u003e set given by \u003ccode\u003e\u003ca\u003ebosendorfer_set_osc\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003escsynth\u003c/code\u003e at\n \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.PF",
        "fct-package": "hsc3-auditor",
        "fct-signature": "FilePath -\u003e m ()",
        "fct-source": "src/Sound-SC3-Auditor-PF.html#au_load_bosendorfer_set",
        "fct-type": "function",
        "title": "au_load_bosendorfer_set"
      },
      "index": {
        "description": "Send OSC set given by bosendorfer set osc to scsynth at Transport",
        "hierarchy": "Sound SC3 Auditor PF",
        "module": "Sound.SC3.Auditor.PF",
        "name": "au_load_bosendorfer_set",
        "normalized": "FilePath-\u003ea()",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "FilePath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-PF.html#v:bosendorfer_octpc_to_index",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eDerive_Index\u003c/code\u003e function for \u003cem\u003eBosendorfer\u003c/em\u003e sample set.  The offset\n from buffer number to midi note number, adjusted for by this\n function, is \u003ccode\u003e24\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.PF",
        "fct-package": "hsc3-auditor",
        "fct-signature": "OctPC -\u003e Index",
        "fct-source": "src/Sound-SC3-Auditor-PF.html#bosendorfer_octpc_to_index",
        "fct-type": "function",
        "title": "bosendorfer_octpc_to_index"
      },
      "index": {
        "description": "Derive Index function for Bosendorfer sample set The offset from buffer number to midi note number adjusted for by this function is",
        "hierarchy": "Sound SC3 Auditor PF",
        "module": "Sound.SC3.Auditor.PF",
        "name": "bosendorfer_octpc_to_index",
        "normalized": "OctPC-\u003eIndex",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "OctPC-\u003eIndex"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-PF.html#v:bosendorfer_osc",
      "description": {
        "fct-module": "Sound.SC3.Auditor.PF",
        "fct-package": "hsc3-auditor",
        "fct-signature": "FilePath -\u003e (String, Int) -\u003e Message",
        "fct-source": "src/Sound-SC3-Auditor-PF.html#bosendorfer_osc",
        "fct-type": "function",
        "title": "bosendorfer_osc"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Auditor PF",
        "module": "Sound.SC3.Auditor.PF",
        "name": "bosendorfer_osc",
        "normalized": "FilePath-\u003e(String,Int)-\u003eMessage",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "FilePath-\u003e(String,Int)-\u003eMessage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-PF.html#v:bosendorfer_set_osc",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate set of \u003ccode\u003e\u003ca\u003eOSC\u003c/a\u003e\u003c/code\u003e messages to load \u003cem\u003eBosendorfer\u003c/em\u003e sample\n library.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.PF",
        "fct-package": "hsc3-auditor",
        "fct-signature": "FilePath -\u003e [Message]",
        "fct-source": "src/Sound-SC3-Auditor-PF.html#bosendorfer_set_osc",
        "fct-type": "function",
        "title": "bosendorfer_set_osc"
      },
      "index": {
        "description": "Generate set of OSC messages to load Bosendorfer sample library",
        "hierarchy": "Sound SC3 Auditor PF",
        "module": "Sound.SC3.Auditor.PF",
        "name": "bosendorfer_set_osc",
        "normalized": "FilePath-\u003e[Message]",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "FilePath-\u003e[Message]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-PF.html#v:bosendorfer_subset_osc",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003ebosendorfer_set_osc\u003c/a\u003e\u003c/code\u003e to load required subset of library.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.PF",
        "fct-package": "hsc3-auditor",
        "fct-signature": "FilePath -\u003e Sample_Loader",
        "fct-source": "src/Sound-SC3-Auditor-PF.html#bosendorfer_subset_osc",
        "fct-type": "function",
        "title": "bosendorfer_subset_osc"
      },
      "index": {
        "description": "Variant of bosendorfer set osc to load required subset of library",
        "hierarchy": "Sound SC3 Auditor PF",
        "module": "Sound.SC3.Auditor.PF",
        "name": "bosendorfer_subset_osc",
        "normalized": "FilePath-\u003eSample_Loader",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "FilePath-\u003eSample_Loader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-PF.html#v:file_names",
      "description": {
        "fct-module": "Sound.SC3.Auditor.PF",
        "fct-package": "hsc3-auditor",
        "fct-signature": "[String]",
        "fct-source": "src/Sound-SC3-Auditor-PF.html#file_names",
        "fct-type": "function",
        "title": "file_names"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Auditor PF",
        "module": "Sound.SC3.Auditor.PF",
        "name": "file_names",
        "normalized": "[String]",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-PF.html#v:for_pf",
      "description": {
        "fct-descr": "\u003cp\u003eConvert set of \u003ccode\u003e\u003ca\u003eOctPC\u003c/a\u003e\u003c/code\u003e based \u003ccode\u003e\u003ca\u003eP\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003ePP\u003c/a\u003e\u003c/code\u003e with appropriate\n \u003ccode\u003eDerive_Index\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.PF",
        "fct-package": "hsc3-auditor",
        "fct-signature": "[(Start_Time, [(OctPC, Amplitude)])] -\u003e PP",
        "fct-source": "src/Sound-SC3-Auditor-PF.html#for_pf",
        "fct-type": "function",
        "title": "for_pf"
      },
      "index": {
        "description": "Convert set of OctPC based to PP with appropriate Derive Index function",
        "hierarchy": "Sound SC3 Auditor PF",
        "module": "Sound.SC3.Auditor.PF",
        "name": "for_pf",
        "normalized": "[(Start_Time,[(OctPC,Amplitude)])]-\u003ePP",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "[(Start_Time,[(OctPC,Amplitude)])]-\u003ePP"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-PF.html#v:note_names",
      "description": {
        "fct-module": "Sound.SC3.Auditor.PF",
        "fct-package": "hsc3-auditor",
        "fct-signature": "[String]",
        "fct-source": "src/Sound-SC3-Auditor-PF.html#note_names",
        "fct-type": "function",
        "title": "note_names"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Auditor PF",
        "module": "Sound.SC3.Auditor.PF",
        "name": "note_names",
        "normalized": "[String]",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eTR808\u003c/em\u003e sample library based auditioner.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "module",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html",
        "fct-type": "module",
        "title": "TR808"
      },
      "index": {
        "description": "TR808 sample library based auditioner",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "TR808",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "TR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#t:Parameters",
      "description": {
        "fct-descr": "\u003cp\u003eSet of relevant \u003ccode\u003e\u003ca\u003ePosition\u003c/a\u003e\u003c/code\u003e data.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "type",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#Parameters",
        "fct-type": "type",
        "title": "Parameters"
      },
      "index": {
        "description": "Set of relevant Position data",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "Parameters",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "Parameters",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#t:Position",
      "description": {
        "fct-descr": "\u003cp\u003eController positions to index sample library.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "data",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#Position",
        "fct-type": "data",
        "title": "Position"
      },
      "index": {
        "description": "Controller positions to index sample library",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "Position",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#t:TR808",
      "description": {
        "fct-descr": "\u003cp\u003eEnumeration of TR808 instruments.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "data",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#TR808",
        "fct-type": "data",
        "title": "TR808"
      },
      "index": {
        "description": "Enumeration of TR808 instruments",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "TR808",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "TR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:BD",
      "description": {
        "fct-descr": "\u003cp\u003eBass Drum\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "BD",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#TR808",
        "fct-type": "function",
        "title": "BD"
      },
      "index": {
        "description": "Bass Drum",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "BD",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "BD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:CB",
      "description": {
        "fct-descr": "\u003cp\u003eCow Bell\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "CB",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#TR808",
        "fct-type": "function",
        "title": "CB"
      },
      "index": {
        "description": "Cow Bell",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "CB",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "CB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:CH",
      "description": {
        "fct-descr": "\u003cp\u003eClosed Hi-Hat\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "CH",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#TR808",
        "fct-type": "function",
        "title": "CH"
      },
      "index": {
        "description": "Closed Hi-Hat",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "CH",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "CH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:CL",
      "description": {
        "fct-descr": "\u003cp\u003eClaves\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "CL",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#TR808",
        "fct-type": "function",
        "title": "CL"
      },
      "index": {
        "description": "Claves",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "CL",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "CL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:CP",
      "description": {
        "fct-descr": "\u003cp\u003eHand Clap\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "CP",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#TR808",
        "fct-type": "function",
        "title": "CP"
      },
      "index": {
        "description": "Hand Clap",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "CP",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "CP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:CY",
      "description": {
        "fct-descr": "\u003cp\u003eCymbal\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "CY",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#TR808",
        "fct-type": "function",
        "title": "CY"
      },
      "index": {
        "description": "Cymbal",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "CY",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "CY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:HC",
      "description": {
        "fct-descr": "\u003cp\u003eHigh Conga\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "HC",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#TR808",
        "fct-type": "function",
        "title": "HC"
      },
      "index": {
        "description": "High Conga",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "HC",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "HC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:HT",
      "description": {
        "fct-descr": "\u003cp\u003eHigh Tom\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "HT",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#TR808",
        "fct-type": "function",
        "title": "HT"
      },
      "index": {
        "description": "High Tom",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "HT",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "HT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:LC",
      "description": {
        "fct-descr": "\u003cp\u003eLow Conga\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "LC",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#TR808",
        "fct-type": "function",
        "title": "LC"
      },
      "index": {
        "description": "Low Conga",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "LC",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "LC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:LT-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLow Tom\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "LT'",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#TR808",
        "fct-type": "function",
        "title": "LT'"
      },
      "index": {
        "description": "Low Tom",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "LT'",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "LT'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:MA",
      "description": {
        "fct-descr": "\u003cp\u003eMaracas\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "MA",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#TR808",
        "fct-type": "function",
        "title": "MA"
      },
      "index": {
        "description": "Maracas",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "MA",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "MA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:MC",
      "description": {
        "fct-descr": "\u003cp\u003eMid Conga\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "MC",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#TR808",
        "fct-type": "function",
        "title": "MC"
      },
      "index": {
        "description": "Mid Conga",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "MC",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "MC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:MT",
      "description": {
        "fct-descr": "\u003cp\u003eMid Tom\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "MT",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#TR808",
        "fct-type": "function",
        "title": "MT"
      },
      "index": {
        "description": "Mid Tom",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "MT",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "MT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:OH",
      "description": {
        "fct-descr": "\u003cp\u003eOpen Hi-Hat\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "OH",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#TR808",
        "fct-type": "function",
        "title": "OH"
      },
      "index": {
        "description": "Open Hi-Hat",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "OH",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "OH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:P0",
      "description": {
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "P0",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#Position",
        "fct-type": "function",
        "title": "P0"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "P0",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:P1",
      "description": {
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "P1",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#Position",
        "fct-type": "function",
        "title": "P1"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "P1",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:P2",
      "description": {
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "P2",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#Position",
        "fct-type": "function",
        "title": "P2"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "P2",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:P3",
      "description": {
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "P3",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#Position",
        "fct-type": "function",
        "title": "P3"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "P3",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:P4",
      "description": {
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "P4",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#Position",
        "fct-type": "function",
        "title": "P4"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "P4",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:RS",
      "description": {
        "fct-descr": "\u003cp\u003eRim Shot\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "RS",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#TR808",
        "fct-type": "function",
        "title": "RS"
      },
      "index": {
        "description": "Rim Shot",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "RS",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "RS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:SD",
      "description": {
        "fct-descr": "\u003cp\u003eSnare Drum\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "SD",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#TR808",
        "fct-type": "function",
        "title": "SD"
      },
      "index": {
        "description": "Snare Drum",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "SD",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "SD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:au_load_tr808_set",
      "description": {
        "fct-descr": "\u003cp\u003eSend \u003ccode\u003e\u003ca\u003eOSC\u003c/a\u003e\u003c/code\u003e set given by \u003ccode\u003e\u003ca\u003etr808_alloc_all_osc\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003escsynth\u003c/code\u003e at\n \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "FilePath -\u003e m ()",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#au_load_tr808_set",
        "fct-type": "function",
        "title": "au_load_tr808_set"
      },
      "index": {
        "description": "Send OSC set given by tr808 alloc all osc to scsynth at Transport",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "au_load_tr808_set",
        "normalized": "FilePath-\u003ea()",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "FilePath-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:position_text",
      "description": {
        "fct-descr": "\u003cp\u003eTranslate \u003ccode\u003e\u003ca\u003ePosition\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e encoding in file names.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "Position -\u003e String",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#position_text",
        "fct-type": "function",
        "title": "position_text"
      },
      "index": {
        "description": "Translate Position to String encoding in file names",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "position_text",
        "normalized": "Position-\u003eString",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "Position-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:tr808_abbrev",
      "description": {
        "fct-descr": "\u003cp\u003ePrettty printer variant of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003eTR808\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "TR808 -\u003e String",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#tr808_abbrev",
        "fct-type": "function",
        "title": "tr808_abbrev"
      },
      "index": {
        "description": "Prettty printer variant of Show instance for TR808",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "tr808_abbrev",
        "normalized": "TR-\u003eString",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "TR-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:tr808_alloc_all_osc",
      "description": {
        "fct-descr": "\u003cp\u003eComplete set of \u003ccode\u003e\u003ca\u003etr808_alloc_osc\u003c/a\u003e\u003c/code\u003e messages for \u003ccode\u003e\u003ca\u003eTR808\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "FilePath -\u003e [Message]",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#tr808_alloc_all_osc",
        "fct-type": "function",
        "title": "tr808_alloc_all_osc"
      },
      "index": {
        "description": "Complete set of tr808 alloc osc messages for TR808",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "tr808_alloc_all_osc",
        "normalized": "FilePath-\u003e[Message]",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "FilePath-\u003e[Message]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:tr808_alloc_osc",
      "description": {
        "fct-descr": "\u003cp\u003eBuffer \u003cem\u003eallocate and read\u003c/em\u003e message for \u003ccode\u003escsynth\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "FilePath -\u003e (FilePath, Int) -\u003e Message",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#tr808_alloc_osc",
        "fct-type": "function",
        "title": "tr808_alloc_osc"
      },
      "index": {
        "description": "Buffer allocate and read message for scsynth",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "tr808_alloc_osc",
        "normalized": "FilePath-\u003e(FilePath,Int)-\u003eMessage",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "FilePath-\u003e(FilePath,Int)-\u003eMessage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:tr808_alloc_subset_osc",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003etr808_alloc_all_osc\u003c/a\u003e\u003c/code\u003e to load required subset of library.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "FilePath -\u003e Sample_Loader",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#tr808_alloc_subset_osc",
        "fct-type": "function",
        "title": "tr808_alloc_subset_osc"
      },
      "index": {
        "description": "Variant of tr808 alloc all osc to load required subset of library",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "tr808_alloc_subset_osc",
        "normalized": "FilePath-\u003eSample_Loader",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "FilePath-\u003eSample_Loader"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:tr808_file_map",
      "description": {
        "fct-descr": "\u003cp\u003eThe complete set of \u003ccode\u003e\u003ca\u003eTR808\u003c/a\u003e\u003c/code\u003e sample \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "[FilePath]",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#tr808_file_map",
        "fct-type": "function",
        "title": "tr808_file_map"
      },
      "index": {
        "description": "The complete set of TR808 sample FilePath",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "tr808_file_map",
        "normalized": "[FilePath]",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:tr808_file_name",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eTR808\u003c/a\u003e\u003c/code\u003e instrument with indicated \u003ccode\u003e\u003ca\u003eParameters\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "TR808 -\u003e Parameters -\u003e FilePath",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#tr808_file_name",
        "fct-type": "function",
        "title": "tr808_file_name"
      },
      "index": {
        "description": "Generate FilePath for TR808 instrument with indicated Parameters",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "tr808_file_name",
        "normalized": "TR-\u003eParameters-\u003eFilePath",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "TR-\u003eParameters-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:tr808_file_names",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate full set of \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e for all \u003ccode\u003e\u003ca\u003ePosition\u003c/a\u003e\u003c/code\u003es of \u003ccode\u003e\u003ca\u003eTR808\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "TR808 -\u003e [FilePath]",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#tr808_file_names",
        "fct-type": "function",
        "title": "tr808_file_names"
      },
      "index": {
        "description": "Generate full set of FilePath for all Position of TR808",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "tr808_file_names",
        "normalized": "TR-\u003e[FilePath]",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "TR-\u003e[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:tr808_index",
      "description": {
        "fct-descr": "\u003cp\u003eLookup \u003ccode\u003e\u003ca\u003eIndex\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eTR808\u003c/a\u003e\u003c/code\u003e at indicated \u003ccode\u003e\u003ca\u003eParameters\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "TR808 -\u003e Parameters -\u003e Index",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#tr808_index",
        "fct-type": "function",
        "title": "tr808_index"
      },
      "index": {
        "description": "Lookup Index for TR808 at indicated Parameters",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "tr808_index",
        "normalized": "TR-\u003eParameters-\u003eIndex",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "TR-\u003eParameters-\u003eIndex"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:tr808_n_param",
      "description": {
        "fct-descr": "\u003cp\u003eFunction to give number of parameters for each \u003ccode\u003e\u003ca\u003eTR808\u003c/a\u003e\u003c/code\u003e instrument.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "TR808 -\u003e Int",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#tr808_n_param",
        "fct-type": "function",
        "title": "tr808_n_param"
      },
      "index": {
        "description": "Function to give number of parameters for each TR808 instrument",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "tr808_n_param",
        "normalized": "TR-\u003eInt",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "TR-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:tr808_name",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTR808\u003c/a\u003e\u003c/code\u003e instrument names.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "TR808 -\u003e String",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#tr808_name",
        "fct-type": "function",
        "title": "tr808_name"
      },
      "index": {
        "description": "TR808 instrument names",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "tr808_name",
        "normalized": "TR-\u003eString",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "TR-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:tr808_set",
      "description": {
        "fct-descr": "\u003cp\u003eThe set of all \u003ccode\u003e\u003ca\u003eParameters\u003c/a\u003e\u003c/code\u003e for a \u003ccode\u003e\u003ca\u003eTR808\u003c/a\u003e\u003c/code\u003e instrument.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "[(TR808, [Parameters])]",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#tr808_set",
        "fct-type": "function",
        "title": "tr808_set"
      },
      "index": {
        "description": "The set of all Parameters for TR808 instrument",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "tr808_set",
        "normalized": "[(TR,[Parameters])]",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "[(TR,[Parameters])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:tr808_u",
      "description": {
        "fct-descr": "\u003cp\u003eThe set of all \u003ccode\u003e\u003ca\u003eTR808\u003c/a\u003e\u003c/code\u003e data.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "[(TR808, Parameters)]",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#tr808_u",
        "fct-type": "function",
        "title": "tr808_u"
      },
      "index": {
        "description": "The set of all TR808 data",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "tr808_u",
        "normalized": "[(TR,Parameters)]",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "[(TR,Parameters)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor-TR808.html#v:tr808_variant",
      "description": {
        "fct-descr": "\u003cp\u003eLookup \u003ccode\u003e\u003ca\u003etr808_set\u003c/a\u003e\u003c/code\u003e for the \u003cem\u003en\u003c/em\u003eth variant of \u003ccode\u003e\u003ca\u003eTR808\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor.TR808",
        "fct-package": "hsc3-auditor",
        "fct-signature": "TR808 -\u003e Int -\u003e Maybe Parameters",
        "fct-source": "src/Sound-SC3-Auditor-TR808.html#tr808_variant",
        "fct-type": "function",
        "title": "tr808_variant"
      },
      "index": {
        "description": "Lookup tr808 set for the th variant of TR808",
        "hierarchy": "Sound SC3 Auditor TR808",
        "module": "Sound.SC3.Auditor.TR808",
        "name": "tr808_variant",
        "normalized": "TR-\u003eInt-\u003eMaybe Parameters",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "TR-\u003eInt-\u003eMaybe Parameters"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAuditor functions common to all sample libraries.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Sound.SC3.Auditor",
        "fct-package": "hsc3-auditor",
        "fct-signature": "module",
        "fct-source": "src/Sound-SC3-Auditor.html",
        "fct-type": "module",
        "title": "Auditor"
      },
      "index": {
        "description": "Auditor functions common to all sample libraries",
        "hierarchy": "Sound SC3 Auditor",
        "module": "Sound.SC3.Auditor",
        "name": "Auditor",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "Auditor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#t:Amplitude",
      "description": {
        "fct-descr": "\u003cp\u003eAmplitude\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor",
        "fct-package": "hsc3-auditor",
        "fct-signature": "type",
        "fct-source": "src/Sound-SC3-Auditor.html#Amplitude",
        "fct-type": "type",
        "title": "Amplitude"
      },
      "index": {
        "description": "Amplitude",
        "hierarchy": "Sound SC3 Auditor",
        "module": "Sound.SC3.Auditor",
        "name": "Amplitude",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "Amplitude",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#t:Chord",
      "description": {
        "fct-descr": "\u003cp\u003eChord\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor",
        "fct-package": "hsc3-auditor",
        "fct-signature": "type",
        "fct-source": "src/Sound-SC3-Auditor.html#Chord",
        "fct-type": "type",
        "title": "Chord"
      },
      "index": {
        "description": "Chord",
        "hierarchy": "Sound SC3 Auditor",
        "module": "Sound.SC3.Auditor",
        "name": "Chord",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "Chord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#t:Duration",
      "description": {
        "fct-descr": "\u003cp\u003eDuration\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor",
        "fct-package": "hsc3-auditor",
        "fct-signature": "type",
        "fct-source": "src/Sound-SC3-Auditor.html#Duration",
        "fct-type": "type",
        "title": "Duration"
      },
      "index": {
        "description": "Duration",
        "hierarchy": "Sound SC3 Auditor",
        "module": "Sound.SC3.Auditor",
        "name": "Duration",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "Duration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#t:Index",
      "description": {
        "fct-descr": "\u003cp\u003eIndex\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor",
        "fct-package": "hsc3-auditor",
        "fct-signature": "type",
        "fct-source": "src/Sound-SC3-Auditor.html#Index",
        "fct-type": "type",
        "title": "Index"
      },
      "index": {
        "description": "Index",
        "hierarchy": "Sound SC3 Auditor",
        "module": "Sound.SC3.Auditor",
        "name": "Index",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#t:NC",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of channels\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor",
        "fct-package": "hsc3-auditor",
        "fct-signature": "type",
        "fct-source": "src/Sound-SC3-Auditor.html#NC",
        "fct-type": "type",
        "title": "NC"
      },
      "index": {
        "description": "Number of channels",
        "hierarchy": "Sound SC3 Auditor",
        "module": "Sound.SC3.Auditor",
        "name": "NC",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "NC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#t:Note",
      "description": {
        "fct-module": "Sound.SC3.Auditor",
        "fct-package": "hsc3-auditor",
        "fct-signature": "type",
        "fct-source": "src/Sound-SC3-Auditor.html#Note",
        "fct-type": "type",
        "title": "Note"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Auditor",
        "module": "Sound.SC3.Auditor",
        "name": "Note",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "Note",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#t:P",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eStart_Time\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eChord\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor",
        "fct-package": "hsc3-auditor",
        "fct-signature": "type",
        "fct-source": "src/Sound-SC3-Auditor.html#P",
        "fct-type": "type",
        "title": "P"
      },
      "index": {
        "description": "Start Time and Chord",
        "hierarchy": "Sound SC3 Auditor",
        "module": "Sound.SC3.Auditor",
        "name": "P",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#t:PP",
      "description": {
        "fct-descr": "\u003cp\u003eSet of \u003ccode\u003e\u003ca\u003eP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor",
        "fct-package": "hsc3-auditor",
        "fct-signature": "type",
        "fct-source": "src/Sound-SC3-Auditor.html#PP",
        "fct-type": "type",
        "title": "PP"
      },
      "index": {
        "description": "Set of",
        "hierarchy": "Sound SC3 Auditor",
        "module": "Sound.SC3.Auditor",
        "name": "PP",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "PP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#t:Sample_Loader",
      "description": {
        "fct-descr": "\u003cp\u003eFunction to generate the set of \u003ccode\u003e\u003ca\u003eOSC\u003c/a\u003e\u003c/code\u003e commands required to load\n the set of \u003ccode\u003e\u003ca\u003eIndex\u003c/a\u003e\u003c/code\u003eed files.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor",
        "fct-package": "hsc3-auditor",
        "fct-signature": "type",
        "fct-source": "src/Sound-SC3-Auditor.html#Sample_Loader",
        "fct-type": "type",
        "title": "Sample_Loader"
      },
      "index": {
        "description": "Function to generate the set of OSC commands required to load the set of Index ed files",
        "hierarchy": "Sound SC3 Auditor",
        "module": "Sound.SC3.Auditor",
        "name": "Sample_Loader",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "Sample Loader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#t:Start_Time",
      "description": {
        "fct-descr": "\u003cp\u003eStart time\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor",
        "fct-package": "hsc3-auditor",
        "fct-signature": "type",
        "fct-source": "src/Sound-SC3-Auditor.html#Start_Time",
        "fct-type": "type",
        "title": "Start_Time"
      },
      "index": {
        "description": "Start time",
        "hierarchy": "Sound SC3 Auditor",
        "module": "Sound.SC3.Auditor",
        "name": "Start_Time",
        "normalized": "",
        "package": "hsc3-auditor",
        "partial": "Start Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:au_chd",
      "description": {
        "fct-module": "Sound.SC3.Auditor",
        "fct-package": "hsc3-auditor",
        "fct-signature": "(Chord, Duration) -\u003e m ()",
        "fct-source": "src/Sound-SC3-Auditor.html#au_chd",
        "fct-type": "function",
        "title": "au_chd"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Auditor",
        "module": "Sound.SC3.Auditor",
        "name": "au_chd",
        "normalized": "(Chord,Duration)-\u003ea()",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "(Chord,Duration)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:au_load_instr",
      "description": {
        "fct-descr": "\u003cp\u003eLoad sample playback instrument to \u003ccode\u003escsynth\u003c/code\u003e at \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor",
        "fct-package": "hsc3-auditor",
        "fct-signature": "NC -\u003e m ()",
        "fct-source": "src/Sound-SC3-Auditor.html#au_load_instr",
        "fct-type": "function",
        "title": "au_load_instr"
      },
      "index": {
        "description": "Load sample playback instrument to scsynth at Transport",
        "hierarchy": "Sound SC3 Auditor",
        "module": "Sound.SC3.Auditor",
        "name": "au_load_instr",
        "normalized": "NC-\u003ea()",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "NC-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:chd_osc",
      "description": {
        "fct-module": "Sound.SC3.Auditor",
        "fct-package": "hsc3-auditor",
        "fct-signature": "Chord -\u003e [Message]",
        "fct-source": "src/Sound-SC3-Auditor.html#chd_osc",
        "fct-type": "function",
        "title": "chd_osc"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Auditor",
        "module": "Sound.SC3.Auditor",
        "name": "chd_osc",
        "normalized": "Chord-\u003e[Message]",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "Chord-\u003e[Message]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:chord_indices",
      "description": {
        "fct-module": "Sound.SC3.Auditor",
        "fct-package": "hsc3-auditor",
        "fct-signature": "Chord -\u003e [Index]",
        "fct-source": "src/Sound-SC3-Auditor.html#chord_indices",
        "fct-type": "function",
        "title": "chord_indices"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Auditor",
        "module": "Sound.SC3.Auditor",
        "name": "chord_indices",
        "normalized": "Chord-\u003e[Index]",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "Chord-\u003e[Index]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:instr_osc",
      "description": {
        "fct-module": "Sound.SC3.Auditor",
        "fct-package": "hsc3-auditor",
        "fct-signature": "NC -\u003e Message",
        "fct-source": "src/Sound-SC3-Auditor.html#instr_osc",
        "fct-type": "function",
        "title": "instr_osc"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Auditor",
        "module": "Sound.SC3.Auditor",
        "name": "instr_osc",
        "normalized": "NC-\u003eMessage",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "NC-\u003eMessage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:note_amplitude",
      "description": {
        "fct-module": "Sound.SC3.Auditor",
        "fct-package": "hsc3-auditor",
        "fct-signature": "Note -\u003e Amplitude",
        "fct-source": "src/Sound-SC3-Auditor.html#note_amplitude",
        "fct-type": "function",
        "title": "note_amplitude"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Auditor",
        "module": "Sound.SC3.Auditor",
        "name": "note_amplitude",
        "normalized": "Note-\u003eAmplitude",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "Note-\u003eAmplitude"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:note_index",
      "description": {
        "fct-module": "Sound.SC3.Auditor",
        "fct-package": "hsc3-auditor",
        "fct-signature": "Note -\u003e Index",
        "fct-source": "src/Sound-SC3-Auditor.html#note_index",
        "fct-type": "function",
        "title": "note_index"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Auditor",
        "module": "Sound.SC3.Auditor",
        "name": "note_index",
        "normalized": "Note-\u003eIndex",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "Note-\u003eIndex"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:p_chord",
      "description": {
        "fct-module": "Sound.SC3.Auditor",
        "fct-package": "hsc3-auditor",
        "fct-signature": "P -\u003e Chord",
        "fct-source": "src/Sound-SC3-Auditor.html#p_chord",
        "fct-type": "function",
        "title": "p_chord"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Auditor",
        "module": "Sound.SC3.Auditor",
        "name": "p_chord",
        "normalized": "P-\u003eChord",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "P-\u003eChord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:p_osc",
      "description": {
        "fct-module": "Sound.SC3.Auditor",
        "fct-package": "hsc3-auditor",
        "fct-signature": "P -\u003e Bundle",
        "fct-source": "src/Sound-SC3-Auditor.html#p_osc",
        "fct-type": "function",
        "title": "p_osc"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Auditor",
        "module": "Sound.SC3.Auditor",
        "name": "p_osc",
        "normalized": "P-\u003eBundle",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "P-\u003eBundle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:p_start_time",
      "description": {
        "fct-module": "Sound.SC3.Auditor",
        "fct-package": "hsc3-auditor",
        "fct-signature": "P -\u003e Start_Time",
        "fct-source": "src/Sound-SC3-Auditor.html#p_start_time",
        "fct-type": "function",
        "title": "p_start_time"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Auditor",
        "module": "Sound.SC3.Auditor",
        "name": "p_start_time",
        "normalized": "P-\u003eStart_Time",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "P-\u003eStart_Time"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:pp_audition",
      "description": {
        "fct-descr": "\u003cp\u003eAudition \u003ccode\u003e\u003ca\u003ePP\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003escsynth\u003c/code\u003e instance at \u003ccode\u003e\u003ca\u003eTransport\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor",
        "fct-package": "hsc3-auditor",
        "fct-signature": "PP -\u003e m ()",
        "fct-source": "src/Sound-SC3-Auditor.html#pp_audition",
        "fct-type": "function",
        "title": "pp_audition"
      },
      "index": {
        "description": "Audition PP at scsynth instance at Transport",
        "hierarchy": "Sound SC3 Auditor",
        "module": "Sound.SC3.Auditor",
        "name": "pp_audition",
        "normalized": "PP-\u003ea()",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "PP-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:pp_chords",
      "description": {
        "fct-module": "Sound.SC3.Auditor",
        "fct-package": "hsc3-auditor",
        "fct-signature": "PP -\u003e [Chord]",
        "fct-source": "src/Sound-SC3-Auditor.html#pp_chords",
        "fct-type": "function",
        "title": "pp_chords"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Auditor",
        "module": "Sound.SC3.Auditor",
        "name": "pp_chords",
        "normalized": "PP-\u003e[Chord]",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "PP-\u003e[Chord]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:pp_duration",
      "description": {
        "fct-descr": "\u003cp\u003eStart time of last \u003ccode\u003e\u003ca\u003eP\u003c/a\u003e\u003c/code\u003e at \u003ccode\u003e\u003ca\u003ePP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor",
        "fct-package": "hsc3-auditor",
        "fct-signature": "PP -\u003e Duration",
        "fct-source": "src/Sound-SC3-Auditor.html#pp_duration",
        "fct-type": "function",
        "title": "pp_duration"
      },
      "index": {
        "description": "Start time of last at PP",
        "hierarchy": "Sound SC3 Auditor",
        "module": "Sound.SC3.Auditor",
        "name": "pp_duration",
        "normalized": "PP-\u003eDuration",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "PP-\u003eDuration"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:pp_indices",
      "description": {
        "fct-descr": "\u003cp\u003eThe set of \u003ccode\u003e\u003ca\u003eIndex\u003c/a\u003e\u003c/code\u003e referenced to by \u003ccode\u003e\u003ca\u003ePP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor",
        "fct-package": "hsc3-auditor",
        "fct-signature": "PP -\u003e [Index]",
        "fct-source": "src/Sound-SC3-Auditor.html#pp_indices",
        "fct-type": "function",
        "title": "pp_indices"
      },
      "index": {
        "description": "The set of Index referenced to by PP",
        "hierarchy": "Sound SC3 Auditor",
        "module": "Sound.SC3.Auditor",
        "name": "pp_indices",
        "normalized": "PP-\u003e[Index]",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "PP-\u003e[Index]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:pp_nrt",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate set of \u003ccode\u003e\u003ca\u003eOSC\u003c/a\u003e\u003c/code\u003e given \u003ccode\u003e\u003ca\u003eNC\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eSample_Loader\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor",
        "fct-package": "hsc3-auditor",
        "fct-signature": "NC -\u003e Sample_Loader -\u003e PP -\u003e NRT",
        "fct-source": "src/Sound-SC3-Auditor.html#pp_nrt",
        "fct-type": "function",
        "title": "pp_nrt"
      },
      "index": {
        "description": "Generate set of OSC given NC Sample Loader and PP",
        "hierarchy": "Sound SC3 Auditor",
        "module": "Sound.SC3.Auditor",
        "name": "pp_nrt",
        "normalized": "NC-\u003eSample_Loader-\u003ePP-\u003eNRT",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "NC-\u003eSample_Loader-\u003ePP-\u003eNRT"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:pp_nrt_write",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003epp_osc\u003c/code\u003e that writes \u003ccode\u003eNRT\u003c/code\u003e score to named file using\n \u003ccode\u003e\u003ca\u003ewriteNRT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Sound.SC3.Auditor",
        "fct-package": "hsc3-auditor",
        "fct-signature": "FilePath -\u003e NC -\u003e Sample_Loader -\u003e PP -\u003e IO ()",
        "fct-source": "src/Sound-SC3-Auditor.html#pp_nrt_write",
        "fct-type": "function",
        "title": "pp_nrt_write"
      },
      "index": {
        "description": "Variant of pp osc that writes NRT score to named file using writeNRT",
        "hierarchy": "Sound SC3 Auditor",
        "module": "Sound.SC3.Auditor",
        "name": "pp_nrt_write",
        "normalized": "FilePath-\u003eNC-\u003eSample_Loader-\u003ePP-\u003eIO()",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "FilePath-\u003eNC-\u003eSample_Loader-\u003ePP-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:pp_st_to_dur",
      "description": {
        "fct-module": "Sound.SC3.Auditor",
        "fct-package": "hsc3-auditor",
        "fct-signature": "PP -\u003e [(Chord, Duration)]",
        "fct-source": "src/Sound-SC3-Auditor.html#pp_st_to_dur",
        "fct-type": "function",
        "title": "pp_st_to_dur"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Auditor",
        "module": "Sound.SC3.Auditor",
        "name": "pp_st_to_dur",
        "normalized": "PP-\u003e[(Chord,Duration)]",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "PP-\u003e[(Chord,Duration)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:pp_start_times",
      "description": {
        "fct-module": "Sound.SC3.Auditor",
        "fct-package": "hsc3-auditor",
        "fct-signature": "PP -\u003e [Start_Time]",
        "fct-source": "src/Sound-SC3-Auditor.html#pp_start_times",
        "fct-type": "function",
        "title": "pp_start_times"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Auditor",
        "module": "Sound.SC3.Auditor",
        "name": "pp_start_times",
        "normalized": "PP-\u003e[Start_Time]",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "PP-\u003e[Start_Time]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:smplr",
      "description": {
        "fct-module": "Sound.SC3.Auditor",
        "fct-package": "hsc3-auditor",
        "fct-signature": "NC -\u003e UGen",
        "fct-source": "src/Sound-SC3-Auditor.html#smplr",
        "fct-type": "function",
        "title": "smplr"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Auditor",
        "module": "Sound.SC3.Auditor",
        "name": "smplr",
        "normalized": "NC-\u003eUGen",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "NC-\u003eUGen"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hsc3-auditor/docs/Sound-SC3-Auditor.html#v:to_p",
      "description": {
        "fct-module": "Sound.SC3.Auditor",
        "fct-package": "hsc3-auditor",
        "fct-signature": "(a -\u003e Index, a -\u003e Amplitude) -\u003e (Start_Time, [a]) -\u003e P",
        "fct-source": "src/Sound-SC3-Auditor.html#to_p",
        "fct-type": "function",
        "title": "to_p"
      },
      "index": {
        "description": "",
        "hierarchy": "Sound SC3 Auditor",
        "module": "Sound.SC3.Auditor",
        "name": "to_p",
        "normalized": "(a-\u003eIndex,a-\u003eAmplitude)-\u003e(Start_Time,[a])-\u003eP",
        "package": "hsc3-auditor",
        "partial": "",
        "signature": "(a-\u003eIndex,a-\u003eAmplitude)-\u003e(Start_Time,[a])-\u003eP"
      }
    }
  }
]