[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRead and write the SFF file format used by\n   Roche/454 sequencing to store flowgram data.\n\u003c/p\u003e\u003cp\u003eA flowgram is a series of values (intensities) representing homopolymer runs of\n   A,G,C, and T in a fixed cycle, and usually displayed as a histogram.\n\u003c/p\u003e\u003cp\u003eThis file is based on information in the Roche FLX manual.  Among other sources for information about\n   the format, are The Staden Package, which contains an io_lib with a C routine for parsing this format.\n   According to comments in the sources, the io_lib implementation is based on a file\n   called getsff.c, which I've been unable to track down.  Other software parsing SFFs \n   are QIIME, sff_extract, and Celera's sffToCa.\n\u003c/p\u003e\u003cp\u003eIt is believed that all values are stored big endian.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "module",
        "fct-source": "src/Bio-Sequence-SFF.html",
        "fct-type": "module",
        "title": "SFF"
      },
      "index": {
        "description": "Read and write the SFF file format used by Roche sequencing to store flowgram data flowgram is series of values intensities representing homopolymer runs of and in fixed cycle and usually displayed as histogram This file is based on information in the Roche FLX manual Among other sources for information about the format are The Staden Package which contains an io lib with routine for parsing this format According to comments in the sources the io lib implementation is based on file called getsff.c which ve been unable to track down Other software parsing SFFs are QIIME sff extract and Celera sffToCa It is believed that all values are stored big endian",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "SFF",
        "normalized": "",
        "package": "biosff",
        "partial": "SFF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#t:CommonHeader",
      "description": {
        "fct-descr": "\u003cp\u003eSFF has a 31-byte common header\n\u003c/p\u003e\u003cp\u003eThe format is open to having the index anywhere between reads,\n   we should really keep count and check for each read.  In practice, it\n   seems to be places after the reads.\n\u003c/p\u003e\u003cp\u003eThe following two fields are considered part of the header, but as\n   they are static, they are not part of the data structure\n\u003c/p\u003e\u003cpre\u003e        \n     magic   :: Word32   -- 0x2e736666, i.e. the string \".sff\"\n     version :: Word32   -- 0x00000001\n\u003c/pre\u003e",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "data",
        "fct-source": "src/Bio-Sequence-SFF.html#CommonHeader",
        "fct-type": "data",
        "title": "CommonHeader"
      },
      "index": {
        "description": "SFF has byte common header The format is open to having the index anywhere between reads we should really keep count and check for each read In practice it seems to be places after the reads The following two fields are considered part of the header but as they are static they are not part of the data structure magic Word32 x2e736666 i.e the string sff version Word32 x00000001",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "CommonHeader",
        "normalized": "",
        "package": "biosff",
        "partial": "Common Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#t:Flow",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of flowgram value\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "type",
        "fct-source": "src/Bio-Sequence-SFF.html#Flow",
        "fct-type": "type",
        "title": "Flow"
      },
      "index": {
        "description": "The type of flowgram value",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "Flow",
        "normalized": "",
        "package": "biosff",
        "partial": "Flow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#t:Index",
      "description": {
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "type",
        "fct-source": "src/Bio-Sequence-SFF.html#Index",
        "fct-type": "type",
        "title": "Index"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "Index",
        "normalized": "",
        "package": "biosff",
        "partial": "Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#t:Qual",
      "description": {
        "fct-descr": "\u003cp\u003eA quality value is in the range 0..255.\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Qual"
      },
      "index": {
        "description": "quality value is in the range",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "Qual",
        "normalized": "",
        "package": "biosff",
        "partial": "Qual",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#t:QualData",
      "description": {
        "fct-descr": "\u003cp\u003eQuality data are lazy bytestrings of \u003ccode\u003e\u003ca\u003eQual\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "QualData"
      },
      "index": {
        "description": "Quality data are lazy bytestrings of Qual",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "QualData",
        "normalized": "",
        "package": "biosff",
        "partial": "Qual Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#t:ReadBlock",
      "description": {
        "fct-descr": "\u003cp\u003eThis contains the actual flowgram for a single read.\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "data",
        "fct-source": "src/Bio-Sequence-SFF.html#ReadBlock",
        "fct-type": "data",
        "title": "ReadBlock"
      },
      "index": {
        "description": "This contains the actual flowgram for single read",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "ReadBlock",
        "normalized": "",
        "package": "biosff",
        "partial": "Read Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#t:ReadHeader",
      "description": {
        "fct-descr": "\u003cp\u003eEach Read has a fixed read header, containing various information.\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "data",
        "fct-source": "src/Bio-Sequence-SFF.html#ReadHeader",
        "fct-type": "data",
        "title": "ReadHeader"
      },
      "index": {
        "description": "Each Read has fixed read header containing various information",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "ReadHeader",
        "normalized": "",
        "package": "biosff",
        "partial": "Read Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#t:ReadName",
      "description": {
        "fct-descr": "\u003cp\u003eRead names encode various information, as per this struct.\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "data",
        "fct-source": "src/Bio-Sequence-SFF_name.html#ReadName",
        "fct-type": "data",
        "title": "ReadName"
      },
      "index": {
        "description": "Read names encode various information as per this struct",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "ReadName",
        "normalized": "",
        "package": "biosff",
        "partial": "Read Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#t:SFF",
      "description": {
        "fct-descr": "\u003cp\u003eThe data structure storing the contents of an SFF file (modulo the index)\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "data",
        "fct-source": "src/Bio-Sequence-SFF.html#SFF",
        "fct-type": "data",
        "title": "SFF"
      },
      "index": {
        "description": "The data structure storing the contents of an SFF file modulo the index",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "SFF",
        "normalized": "",
        "package": "biosff",
        "partial": "SFF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#t:SeqData",
      "description": {
        "fct-descr": "\u003cp\u003eSequence data are lazy bytestrings of ASCII characters.\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "SeqData"
      },
      "index": {
        "description": "Sequence data are lazy bytestrings of ASCII characters",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "SeqData",
        "normalized": "",
        "package": "biosff",
        "partial": "Seq Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:CommonHeader",
      "description": {
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "CommonHeader",
        "fct-source": "src/Bio-Sequence-SFF.html#CommonHeader",
        "fct-type": "function",
        "title": "CommonHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "CommonHeader",
        "normalized": "",
        "package": "biosff",
        "partial": "Common Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:ReadBlock",
      "description": {
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "ReadBlock",
        "fct-source": "src/Bio-Sequence-SFF.html#ReadBlock",
        "fct-type": "function",
        "title": "ReadBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "ReadBlock",
        "normalized": "",
        "package": "biosff",
        "partial": "Read Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:ReadHeader",
      "description": {
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "ReadHeader",
        "fct-source": "src/Bio-Sequence-SFF.html#ReadHeader",
        "fct-type": "function",
        "title": "ReadHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "ReadHeader",
        "normalized": "",
        "package": "biosff",
        "partial": "Read Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:ReadName",
      "description": {
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "ReadName",
        "fct-source": "src/Bio-Sequence-SFF_name.html#ReadName",
        "fct-type": "function",
        "title": "ReadName"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "ReadName",
        "normalized": "",
        "package": "biosff",
        "partial": "Read Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:SFF",
      "description": {
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "SFF !CommonHeader [ReadBlock]",
        "fct-source": "src/Bio-Sequence-SFF.html#SFF",
        "fct-type": "function",
        "title": "SFF"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "SFF",
        "normalized": "SFF CommonHeader[ReadBlock]",
        "package": "biosff",
        "partial": "SFF",
        "signature": "SFF CommonHeader[ReadBlock]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:baseToFlowPos",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a sequence position to the corresponding flow position\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "ReadBlock -\u003e i -\u003e Int",
        "fct-source": "src/Bio-Sequence-SFF.html#baseToFlowPos",
        "fct-type": "function",
        "title": "baseToFlowPos"
      },
      "index": {
        "description": "Convert sequence position to the corresponding flow position",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "baseToFlowPos",
        "normalized": "ReadBlock-\u003ea-\u003eInt",
        "package": "biosff",
        "partial": "To Flow Pos",
        "signature": "ReadBlock-\u003ei-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:bases",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "!SeqData",
        "fct-source": "src/Bio-Sequence-SFF.html#ReadBlock",
        "fct-type": "function",
        "title": "bases"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "bases",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:clip_adapter_left",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "Int16",
        "fct-source": "src/Bio-Sequence-SFF.html#ReadHeader",
        "fct-type": "function",
        "title": "clip_adapter_left"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "clip_adapter_left",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:clip_adapter_right",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "Int16",
        "fct-source": "src/Bio-Sequence-SFF.html#ReadHeader",
        "fct-type": "function",
        "title": "clip_adapter_right"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "clip_adapter_right",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:clip_qual_left",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "Int16",
        "fct-source": "src/Bio-Sequence-SFF.html#ReadHeader",
        "fct-type": "function",
        "title": "clip_qual_left"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "clip_qual_left",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:clip_qual_right",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "Int16",
        "fct-source": "src/Bio-Sequence-SFF.html#ReadHeader",
        "fct-type": "function",
        "title": "clip_qual_right"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "clip_qual_right",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:convert",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a file by decoding it and re-encoding it\n   This will lose the index (which isn't really necessary)\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/Bio-Sequence-SFF.html#convert",
        "fct-type": "function",
        "title": "convert"
      },
      "index": {
        "description": "Convert file by decoding it and re-encoding it This will lose the index which isn really necessary",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "convert",
        "normalized": "FilePath-\u003eIO()",
        "package": "biosff",
        "partial": "",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:cumulative_index",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the index as absolute coordinates, not relative.\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "ReadBlock -\u003e [Int]",
        "fct-source": "src/Bio-Sequence-SFF.html#cumulative_index",
        "fct-type": "function",
        "title": "cumulative_index"
      },
      "index": {
        "description": "Extract the index as absolute coordinates not relative",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "cumulative_index",
        "normalized": "ReadBlock-\u003e[Int]",
        "package": "biosff",
        "partial": "",
        "signature": "ReadBlock-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:date",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "(Int, Int, Int)",
        "fct-source": "src/Bio-Sequence-SFF_name.html#ReadName",
        "fct-type": "function",
        "title": "date"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "date",
        "normalized": "(Int,Int,Int)",
        "package": "biosff",
        "partial": "",
        "signature": "(Int,Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:decodeReadName",
      "description": {
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "ByteString -\u003e Maybe ReadName",
        "fct-source": "src/Bio-Sequence-SFF_name.html#decodeReadName",
        "fct-type": "function",
        "title": "decodeReadName"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "decodeReadName",
        "normalized": "ByteString-\u003eMaybe ReadName",
        "package": "biosff",
        "partial": "Read Name",
        "signature": "ByteString-\u003eMaybe ReadName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:encodeReadName",
      "description": {
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "ReadName -\u003e ByteString",
        "fct-source": "src/Bio-Sequence-SFF_name.html#encodeReadName",
        "fct-type": "function",
        "title": "encodeReadName"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "encodeReadName",
        "normalized": "ReadName-\u003eByteString",
        "package": "biosff",
        "partial": "Read Name",
        "signature": "ReadName-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:flow",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "ByteString",
        "fct-source": "src/Bio-Sequence-SFF.html#CommonHeader",
        "fct-type": "function",
        "title": "flow"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "flow",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:flowToBasePos",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a flow position to the corresponding sequence position\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "ReadBlock -\u003e i -\u003e Int",
        "fct-source": "src/Bio-Sequence-SFF.html#flowToBasePos",
        "fct-type": "function",
        "title": "flowToBasePos"
      },
      "index": {
        "description": "Convert flow position to the corresponding sequence position",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "flowToBasePos",
        "normalized": "ReadBlock-\u003ea-\u003eInt",
        "package": "biosff",
        "partial": "To Base Pos",
        "signature": "ReadBlock-\u003ei-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:flow_data",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "!ByteString",
        "fct-source": "src/Bio-Sequence-SFF.html#ReadBlock",
        "fct-type": "function",
        "title": "flow_data"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "flow_data",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:flow_index",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "!ByteString",
        "fct-source": "src/Bio-Sequence-SFF.html#ReadBlock",
        "fct-type": "function",
        "title": "flow_index"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "flow_index",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:flow_length",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "Int16",
        "fct-source": "src/Bio-Sequence-SFF.html#CommonHeader",
        "fct-type": "function",
        "title": "flow_length"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "flow_length",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:flowgram",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function to access the flowgram\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "ReadBlock -\u003e [Flow]",
        "fct-source": "src/Bio-Sequence-SFF.html#flowgram",
        "fct-type": "function",
        "title": "flowgram"
      },
      "index": {
        "description": "Helper function to access the flowgram",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "flowgram",
        "normalized": "ReadBlock-\u003e[Flow]",
        "package": "biosff",
        "partial": "",
        "signature": "ReadBlock-\u003e[Flow]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:flowgram_fmt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "Word8",
        "fct-source": "src/Bio-Sequence-SFF.html#CommonHeader",
        "fct-type": "function",
        "title": "flowgram_fmt"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "flowgram_fmt",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:getRB",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function for decoding a \u003ccode\u003e\u003ca\u003eReadBlock\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "Int -\u003e ReadHeader -\u003e Get ReadBlock",
        "fct-source": "src/Bio-Sequence-SFF.html#getRB",
        "fct-type": "function",
        "title": "getRB"
      },
      "index": {
        "description": "Helper function for decoding ReadBlock",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "getRB",
        "normalized": "Int-\u003eReadHeader-\u003eGet ReadBlock",
        "package": "biosff",
        "partial": "RB",
        "signature": "Int-\u003eReadHeader-\u003eGet ReadBlock"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:index_length",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "Int32",
        "fct-source": "src/Bio-Sequence-SFF.html#CommonHeader",
        "fct-type": "function",
        "title": "index_length"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "index_length",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:index_offset",
      "description": {
        "fct-descr": "\u003cp\u003ePoints to a text(?) section\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "Int64",
        "fct-source": "src/Bio-Sequence-SFF.html#CommonHeader",
        "fct-type": "function",
        "title": "index_offset"
      },
      "index": {
        "description": "Points to text section",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "index_offset",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:key",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "ByteString",
        "fct-source": "src/Bio-Sequence-SFF.html#CommonHeader",
        "fct-type": "function",
        "title": "key"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "key",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:key_length",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "Int16",
        "fct-source": "src/Bio-Sequence-SFF.html#CommonHeader",
        "fct-type": "function",
        "title": "key_length"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "key_length",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:masked_bases",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the sequence with masked bases in lower case\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "ReadBlock -\u003e SeqData",
        "fct-source": "src/Bio-Sequence-SFF.html#masked_bases",
        "fct-type": "function",
        "title": "masked_bases"
      },
      "index": {
        "description": "Extract the sequence with masked bases in lower case",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "masked_bases",
        "normalized": "ReadBlock-\u003eSeqData",
        "package": "biosff",
        "partial": "",
        "signature": "ReadBlock-\u003eSeqData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:name_length",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "Int16",
        "fct-source": "src/Bio-Sequence-SFF.html#ReadHeader",
        "fct-type": "function",
        "title": "name_length"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "name_length",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:num_bases",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "Int32",
        "fct-source": "src/Bio-Sequence-SFF.html#ReadHeader",
        "fct-type": "function",
        "title": "num_bases"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "num_bases",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:num_reads",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "Int32",
        "fct-source": "src/Bio-Sequence-SFF.html#CommonHeader",
        "fct-type": "function",
        "title": "num_reads"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "num_reads",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:packFlows",
      "description": {
        "fct-descr": "\u003cp\u003ePack a list of flows into the corresponding binary structure (the flow_data field)\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "[Flow] -\u003e ByteString",
        "fct-source": "src/Bio-Sequence-SFF.html#packFlows",
        "fct-type": "function",
        "title": "packFlows"
      },
      "index": {
        "description": "Pack list of flows into the corresponding binary structure the flow data field",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "packFlows",
        "normalized": "[Flow]-\u003eByteString",
        "package": "biosff",
        "partial": "Flows",
        "signature": "[Flow]-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:putRB",
      "description": {
        "fct-descr": "\u003cp\u003eA ReadBlock can't be an instance of Binary directly, since it depends on\n   information from the CommonHeader.\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "Int -\u003e ReadBlock -\u003e Put",
        "fct-source": "src/Bio-Sequence-SFF.html#putRB",
        "fct-type": "function",
        "title": "putRB"
      },
      "index": {
        "description": "ReadBlock can be an instance of Binary directly since it depends on information from the CommonHeader",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "putRB",
        "normalized": "Int-\u003eReadBlock-\u003ePut",
        "package": "biosff",
        "partial": "RB",
        "signature": "Int-\u003eReadBlock-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:quality",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "!QualData",
        "fct-source": "src/Bio-Sequence-SFF.html#ReadBlock",
        "fct-type": "function",
        "title": "quality"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "quality",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:readSFF",
      "description": {
        "fct-descr": "\u003cp\u003eRead an SFF file.\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "FilePath -\u003e IO SFF",
        "fct-source": "src/Bio-Sequence-SFF.html#readSFF",
        "fct-type": "function",
        "title": "readSFF"
      },
      "index": {
        "description": "Read an SFF file",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "readSFF",
        "normalized": "FilePath-\u003eIO SFF",
        "package": "biosff",
        "partial": "SFF",
        "signature": "FilePath-\u003eIO SFF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:read_header",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "!ReadHeader",
        "fct-source": "src/Bio-Sequence-SFF.html#ReadBlock",
        "fct-type": "function",
        "title": "read_header"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "read_header",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:read_name",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "ByteString",
        "fct-source": "src/Bio-Sequence-SFF.html#ReadHeader",
        "fct-type": "function",
        "title": "read_name"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "read_name",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:recoverSFF",
      "description": {
        "fct-descr": "\u003cp\u003eRead an SFF file, but be resilient against errors.\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "FilePath -\u003e IO SFF",
        "fct-source": "src/Bio-Sequence-SFF.html#recoverSFF",
        "fct-type": "function",
        "title": "recoverSFF"
      },
      "index": {
        "description": "Read an SFF file but be resilient against errors",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "recoverSFF",
        "normalized": "FilePath-\u003eIO SFF",
        "package": "biosff",
        "partial": "SFF",
        "signature": "FilePath-\u003eIO SFF"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:region",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "Int",
        "fct-source": "src/Bio-Sequence-SFF_name.html#ReadName",
        "fct-type": "function",
        "title": "region"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "region",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:test",
      "description": {
        "fct-descr": "\u003cp\u003etest serialization by output'ing the header and first two reads \n   in an SFF, and the same after a decode + encode cycle.\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "FilePath -\u003e IO ()",
        "fct-source": "src/Bio-Sequence-SFF.html#test",
        "fct-type": "function",
        "title": "test"
      },
      "index": {
        "description": "test serialization by output ing the header and first two reads in an SFF and the same after decode encode cycle",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "test",
        "normalized": "FilePath-\u003eIO()",
        "package": "biosff",
        "partial": "",
        "signature": "FilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:time",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "(Int, Int, Int)",
        "fct-source": "src/Bio-Sequence-SFF_name.html#ReadName",
        "fct-type": "function",
        "title": "time"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "time",
        "normalized": "(Int,Int,Int)",
        "package": "biosff",
        "partial": "",
        "signature": "(Int,Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:trim",
      "description": {
        "fct-descr": "\u003cp\u003eTrim a read according to clipping information\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "ReadBlock -\u003e ReadBlock",
        "fct-source": "src/Bio-Sequence-SFF.html#trim",
        "fct-type": "function",
        "title": "trim"
      },
      "index": {
        "description": "Trim read according to clipping information",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "trim",
        "normalized": "ReadBlock-\u003eReadBlock",
        "package": "biosff",
        "partial": "",
        "signature": "ReadBlock-\u003eReadBlock"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:trimAdapter",
      "description": {
        "fct-descr": "\u003cp\u003eTrim adapters from a read\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "ReadBlock -\u003e ReadBlock",
        "fct-source": "src/Bio-Sequence-SFF.html#trimAdapter",
        "fct-type": "function",
        "title": "trimAdapter"
      },
      "index": {
        "description": "Trim adapters from read",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "trimAdapter",
        "normalized": "ReadBlock-\u003eReadBlock",
        "package": "biosff",
        "partial": "Adapter",
        "signature": "ReadBlock-\u003eReadBlock"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:trimFlows",
      "description": {
        "fct-descr": "\u003cp\u003eTrim a \u003ccode\u003e\u003ca\u003eReadBlock\u003c/a\u003e\u003c/code\u003e limiting the number of flows.  If writing to\n   an SFF file, make sure you update the \u003ccode\u003e\u003ca\u003eCommonHeader\u003c/a\u003e\u003c/code\u003e accordingly.\n   See \u003ccode\u003eexamples/Flx.hs\u003c/code\u003e for how to use this.  \n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "i -\u003e ReadBlock -\u003e ReadBlock",
        "fct-source": "src/Bio-Sequence-SFF.html#trimFlows",
        "fct-type": "function",
        "title": "trimFlows"
      },
      "index": {
        "description": "Trim ReadBlock limiting the number of flows If writing to an SFF file make sure you update the CommonHeader accordingly See examples Flx.hs for how to use this",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "trimFlows",
        "normalized": "a-\u003eReadBlock-\u003eReadBlock",
        "package": "biosff",
        "partial": "Flows",
        "signature": "i-\u003eReadBlock-\u003eReadBlock"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:trimFromTo",
      "description": {
        "fct-descr": "\u003cp\u003eTrim a read to specific sequence position, inclusive bounds.\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "i -\u003e i -\u003e ReadBlock -\u003e ReadBlock",
        "fct-source": "src/Bio-Sequence-SFF.html#trimFromTo",
        "fct-type": "function",
        "title": "trimFromTo"
      },
      "index": {
        "description": "Trim read to specific sequence position inclusive bounds",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "trimFromTo",
        "normalized": "a-\u003ea-\u003eReadBlock-\u003eReadBlock",
        "package": "biosff",
        "partial": "From To",
        "signature": "i-\u003ei-\u003eReadBlock-\u003eReadBlock"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:trimKey",
      "description": {
        "fct-descr": "\u003cp\u003eTrim the key (i.e. first four bases)\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "ReadBlock -\u003e ReadBlock",
        "fct-source": "src/Bio-Sequence-SFF.html#trimKey",
        "fct-type": "function",
        "title": "trimKey"
      },
      "index": {
        "description": "Trim the key i.e first four bases",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "trimKey",
        "normalized": "ReadBlock-\u003eReadBlock",
        "package": "biosff",
        "partial": "Key",
        "signature": "ReadBlock-\u003eReadBlock"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:unpackFlows",
      "description": {
        "fct-descr": "\u003cp\u003eUnpack the flow_data field into a list of flow values\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "ByteString -\u003e [Flow]",
        "fct-source": "src/Bio-Sequence-SFF.html#unpackFlows",
        "fct-type": "function",
        "title": "unpackFlows"
      },
      "index": {
        "description": "Unpack the flow data field into list of flow values",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "unpackFlows",
        "normalized": "ByteString-\u003e[Flow]",
        "package": "biosff",
        "partial": "Flows",
        "signature": "ByteString-\u003e[Flow]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:writeSFF",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an \u003ccode\u003e\u003ca\u003eSFF\u003c/a\u003e\u003c/code\u003e to the specified file name\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "FilePath -\u003e SFF -\u003e IO ()",
        "fct-source": "src/Bio-Sequence-SFF.html#writeSFF",
        "fct-type": "function",
        "title": "writeSFF"
      },
      "index": {
        "description": "Write an SFF to the specified file name",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "writeSFF",
        "normalized": "FilePath-\u003eSFF-\u003eIO()",
        "package": "biosff",
        "partial": "SFF",
        "signature": "FilePath-\u003eSFF-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:writeSFF-39-",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an \u003ccode\u003e\u003ca\u003eSFF\u003c/a\u003e\u003c/code\u003e to the specified file name, but go back and\n   update the read count.  Useful if you want to output a lazy\n   stream of \u003ccode\u003e\u003ca\u003eReadBlock\u003c/a\u003e\u003c/code\u003es.  Returns the number of reads written.\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "FilePath -\u003e SFF -\u003e IO Int",
        "fct-source": "src/Bio-Sequence-SFF.html#writeSFF%27",
        "fct-type": "function",
        "title": "writeSFF'"
      },
      "index": {
        "description": "Write an SFF to the specified file name but go back and update the read count Useful if you want to output lazy stream of ReadBlock Returns the number of reads written",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "writeSFF'",
        "normalized": "FilePath-\u003eSFF-\u003eIO Int",
        "package": "biosff",
        "partial": "SFF'",
        "signature": "FilePath-\u003eSFF-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:x_loc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "Int",
        "fct-source": "src/Bio-Sequence-SFF_name.html#ReadName",
        "fct-type": "function",
        "title": "x_loc"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "x_loc",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:y_loc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.Sequence.SFF",
        "fct-package": "biosff",
        "fct-signature": "Int",
        "fct-source": "src/Bio-Sequence-SFF_name.html#ReadName",
        "fct-type": "function",
        "title": "y_loc"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF",
        "module": "Bio.Sequence.SFF",
        "name": "y_loc",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis implements a number of filters used in the Titanium pipeline, \n   based on published documentation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Bio.Sequence.SFF_filters",
        "fct-package": "biosff",
        "fct-signature": "module",
        "fct-source": "src/Bio-Sequence-SFF_filters.html",
        "fct-type": "module",
        "title": "SFF_filters"
      },
      "index": {
        "description": "This implements number of filters used in the Titanium pipeline based on published documentation",
        "hierarchy": "Bio Sequence SFF_filters",
        "module": "Bio.Sequence.SFF_filters",
        "name": "SFF_filters",
        "normalized": "",
        "package": "biosff",
        "partial": "SFF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#t:DiscardFilter",
      "description": {
        "fct-descr": "\u003cp\u003eDiscardFilters determine whether a read is to be retained or discarded\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF_filters",
        "fct-package": "biosff",
        "fct-signature": "type",
        "fct-source": "src/Bio-Sequence-SFF_filters.html#DiscardFilter",
        "fct-type": "type",
        "title": "DiscardFilter"
      },
      "index": {
        "description": "DiscardFilters determine whether read is to be retained or discarded",
        "hierarchy": "Bio Sequence SFF_filters",
        "module": "Bio.Sequence.SFF_filters",
        "name": "DiscardFilter",
        "normalized": "",
        "package": "biosff",
        "partial": "Discard Filter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#t:TrimFilter",
      "description": {
        "fct-descr": "\u003cp\u003eTrimFilters modify the read, typically trimming it for quality\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF_filters",
        "fct-package": "biosff",
        "fct-signature": "type",
        "fct-source": "src/Bio-Sequence-SFF_filters.html#TrimFilter",
        "fct-type": "type",
        "title": "TrimFilter"
      },
      "index": {
        "description": "TrimFilters modify the read typically trimming it for quality",
        "hierarchy": "Bio Sequence SFF_filters",
        "module": "Bio.Sequence.SFF_filters",
        "name": "TrimFilter",
        "normalized": "",
        "package": "biosff",
        "partial": "Trim Filter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:avg",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate average of a list\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF_filters",
        "fct-package": "biosff",
        "fct-signature": "[a] -\u003e Double",
        "fct-source": "src/Bio-Sequence-SFF_filters.html#avg",
        "fct-type": "function",
        "title": "avg"
      },
      "index": {
        "description": "Calculate average of list",
        "hierarchy": "Bio Sequence SFF_filters",
        "module": "Bio.Sequence.SFF_filters",
        "name": "avg",
        "normalized": "[a]-\u003eDouble",
        "package": "biosff",
        "partial": "",
        "signature": "[a]-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:clipFlows",
      "description": {
        "fct-descr": "\u003cp\u003eTranslate a number of flows to position in sequence, and update clipping data accordingly\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF_filters",
        "fct-package": "biosff",
        "fct-signature": "ReadBlock -\u003e Int -\u003e ReadBlock",
        "fct-source": "src/Bio-Sequence-SFF_filters.html#clipFlows",
        "fct-type": "function",
        "title": "clipFlows"
      },
      "index": {
        "description": "Translate number of flows to position in sequence and update clipping data accordingly",
        "hierarchy": "Bio Sequence SFF_filters",
        "module": "Bio.Sequence.SFF_filters",
        "name": "clipFlows",
        "normalized": "ReadBlock-\u003eInt-\u003eReadBlock",
        "package": "biosff",
        "partial": "Flows",
        "signature": "ReadBlock-\u003eInt-\u003eReadBlock"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:clipSeq",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate clip_qual_right if more severe than previous value\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF_filters",
        "fct-package": "biosff",
        "fct-signature": "ReadBlock -\u003e Int -\u003e ReadBlock",
        "fct-source": "src/Bio-Sequence-SFF_filters.html#clipSeq",
        "fct-type": "function",
        "title": "clipSeq"
      },
      "index": {
        "description": "Update clip qual right if more severe than previous value",
        "hierarchy": "Bio Sequence SFF_filters",
        "module": "Bio.Sequence.SFF_filters",
        "name": "clipSeq",
        "normalized": "ReadBlock-\u003eInt-\u003eReadBlock",
        "package": "biosff",
        "partial": "Seq",
        "signature": "ReadBlock-\u003eInt-\u003eReadBlock"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:discard_dots",
      "description": {
        "fct-descr": "\u003col\u003e\u003cli\u003e2.2.1.2 The \u003ca\u003edots\u003c/a\u003e filter discards sequences where the last positive flow is \n   before flow 84, and flows with \u003e5% dots (i.e. three successive noise values) \n   before the last postitive flow.  The percentage can be given as a parameter.\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Bio.Sequence.SFF_filters",
        "fct-package": "biosff",
        "fct-signature": "Double -\u003e DiscardFilter",
        "fct-source": "src/Bio-Sequence-SFF_filters.html#discard_dots",
        "fct-type": "function",
        "title": "discard_dots"
      },
      "index": {
        "description": "The dots filter discards sequences where the last positive flow is before flow and flows with dots i.e three successive noise values before the last postitive flow The percentage can be given as parameter",
        "hierarchy": "Bio Sequence SFF_filters",
        "module": "Bio.Sequence.SFF_filters",
        "name": "discard_dots",
        "normalized": "Double-\u003eDiscardFilter",
        "package": "biosff",
        "partial": "",
        "signature": "Double-\u003eDiscardFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:discard_empty",
      "description": {
        "fct-descr": "\u003cp\u003eThis filter discards empty sequences.\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF_filters",
        "fct-package": "biosff",
        "fct-signature": "DiscardFilter",
        "fct-source": "src/Bio-Sequence-SFF_filters.html#discard_empty",
        "fct-type": "function",
        "title": "discard_empty"
      },
      "index": {
        "description": "This filter discards empty sequences",
        "hierarchy": "Bio Sequence SFF_filters",
        "module": "Bio.Sequence.SFF_filters",
        "name": "discard_empty",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:discard_key",
      "description": {
        "fct-descr": "\u003cp\u003eDiscard sequences that don't have the given key tag (typically TCAG) at the start\n   of the read.\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF_filters",
        "fct-package": "biosff",
        "fct-signature": "String -\u003e DiscardFilter",
        "fct-source": "src/Bio-Sequence-SFF_filters.html#discard_key",
        "fct-type": "function",
        "title": "discard_key"
      },
      "index": {
        "description": "Discard sequences that don have the given key tag typically TCAG at the start of the read",
        "hierarchy": "Bio Sequence SFF_filters",
        "module": "Bio.Sequence.SFF_filters",
        "name": "discard_key",
        "normalized": "String-\u003eDiscardFilter",
        "package": "biosff",
        "partial": "",
        "signature": "String-\u003eDiscardFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:discard_length",
      "description": {
        "fct-descr": "\u003cp\u003eDiscard a read if the number of untrimmed flows is less than n (n=186 for Titanium)\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF_filters",
        "fct-package": "biosff",
        "fct-signature": "Int -\u003e DiscardFilter",
        "fct-source": "src/Bio-Sequence-SFF_filters.html#discard_length",
        "fct-type": "function",
        "title": "discard_length"
      },
      "index": {
        "description": "Discard read if the number of untrimmed flows is less than for Titanium",
        "hierarchy": "Bio Sequence SFF_filters",
        "module": "Bio.Sequence.SFF_filters",
        "name": "discard_length",
        "normalized": "Int-\u003eDiscardFilter",
        "package": "biosff",
        "partial": "",
        "signature": "Int-\u003eDiscardFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:discard_mixed",
      "description": {
        "fct-descr": "\u003col\u003e\u003cli\u003e2.2.1.3 The \u003ca\u003emixed\u003c/a\u003e filter discards sequences with more than 70% positive flows.  \n   Also, discard with \u003ca\u003enoise,\u003c/a\u003e20% middle (0.45..0.75) or \u003c30% positive.\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Bio.Sequence.SFF_filters",
        "fct-package": "biosff",
        "fct-signature": "DiscardFilter",
        "fct-source": "src/Bio-Sequence-SFF_filters.html#discard_mixed",
        "fct-type": "function",
        "title": "discard_mixed"
      },
      "index": {
        "description": "The mixed filter discards sequences with more than positive flows Also discard with noise middle or positive",
        "hierarchy": "Bio Sequence SFF_filters",
        "module": "Bio.Sequence.SFF_filters",
        "name": "discard_mixed",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:dlength",
      "description": {
        "fct-descr": "\u003cp\u003eList length as a double (eliminates many instances of fromIntegral)\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.SFF_filters",
        "fct-package": "biosff",
        "fct-signature": "[a] -\u003e Double",
        "fct-source": "src/Bio-Sequence-SFF_filters.html#dlength",
        "fct-type": "function",
        "title": "dlength"
      },
      "index": {
        "description": "List length as double eliminates many instances of fromIntegral",
        "hierarchy": "Bio Sequence SFF_filters",
        "module": "Bio.Sequence.SFF_filters",
        "name": "dlength",
        "normalized": "[a]-\u003eDouble",
        "package": "biosff",
        "partial": "",
        "signature": "[a]-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:find_primer",
      "description": {
        "fct-module": "Bio.Sequence.SFF_filters",
        "fct-package": "biosff",
        "fct-signature": "String -\u003e ReadBlock -\u003e Int",
        "fct-source": "src/Bio-Sequence-SFF_filters.html#find_primer",
        "fct-type": "function",
        "title": "find_primer"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF_filters",
        "module": "Bio.Sequence.SFF_filters",
        "name": "find_primer",
        "normalized": "String-\u003eReadBlock-\u003eInt",
        "package": "biosff",
        "partial": "",
        "signature": "String-\u003eReadBlock-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:flx_linker",
      "description": {
        "fct-module": "Bio.Sequence.SFF_filters",
        "fct-package": "biosff",
        "fct-signature": "String",
        "fct-source": "src/Bio-Sequence-SFF_filters.html#flx_linker",
        "fct-type": "function",
        "title": "flx_linker"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF_filters",
        "module": "Bio.Sequence.SFF_filters",
        "name": "flx_linker",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:qual20",
      "description": {
        "fct-module": "Bio.Sequence.SFF_filters",
        "fct-package": "biosff",
        "fct-signature": "Int -\u003e ReadBlock -\u003e Int",
        "fct-source": "src/Bio-Sequence-SFF_filters.html#qual20",
        "fct-type": "function",
        "title": "qual20"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF_filters",
        "module": "Bio.Sequence.SFF_filters",
        "name": "qual20",
        "normalized": "Int-\u003eReadBlock-\u003eInt",
        "package": "biosff",
        "partial": "",
        "signature": "Int-\u003eReadBlock-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:rapid_adapter",
      "description": {
        "fct-module": "Bio.Sequence.SFF_filters",
        "fct-package": "biosff",
        "fct-signature": "String",
        "fct-source": "src/Bio-Sequence-SFF_filters.html#rapid_adapter",
        "fct-type": "function",
        "title": "rapid_adapter"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF_filters",
        "module": "Bio.Sequence.SFF_filters",
        "name": "rapid_adapter",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:rna_adapter",
      "description": {
        "fct-module": "Bio.Sequence.SFF_filters",
        "fct-package": "biosff",
        "fct-signature": "String",
        "fct-source": "src/Bio-Sequence-SFF_filters.html#rna_adapter",
        "fct-type": "function",
        "title": "rna_adapter"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF_filters",
        "module": "Bio.Sequence.SFF_filters",
        "name": "rna_adapter",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:rna_adapter2",
      "description": {
        "fct-module": "Bio.Sequence.SFF_filters",
        "fct-package": "biosff",
        "fct-signature": "String",
        "fct-source": "src/Bio-Sequence-SFF_filters.html#rna_adapter2",
        "fct-type": "function",
        "title": "rna_adapter2"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF_filters",
        "module": "Bio.Sequence.SFF_filters",
        "name": "rna_adapter2",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:rna_adapter3",
      "description": {
        "fct-module": "Bio.Sequence.SFF_filters",
        "fct-package": "biosff",
        "fct-signature": "String",
        "fct-source": "src/Bio-Sequence-SFF_filters.html#rna_adapter3",
        "fct-type": "function",
        "title": "rna_adapter3"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF_filters",
        "module": "Bio.Sequence.SFF_filters",
        "name": "rna_adapter3",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:sigint",
      "description": {
        "fct-module": "Bio.Sequence.SFF_filters",
        "fct-package": "biosff",
        "fct-signature": "ReadBlock -\u003e Int",
        "fct-source": "src/Bio-Sequence-SFF_filters.html#sigint",
        "fct-type": "function",
        "title": "sigint"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF_filters",
        "module": "Bio.Sequence.SFF_filters",
        "name": "sigint",
        "normalized": "ReadBlock-\u003eInt",
        "package": "biosff",
        "partial": "",
        "signature": "ReadBlock-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:ti_adapter_b",
      "description": {
        "fct-module": "Bio.Sequence.SFF_filters",
        "fct-package": "biosff",
        "fct-signature": "String",
        "fct-source": "src/Bio-Sequence-SFF_filters.html#ti_adapter_b",
        "fct-type": "function",
        "title": "ti_adapter_b"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF_filters",
        "module": "Bio.Sequence.SFF_filters",
        "name": "ti_adapter_b",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:ti_linker",
      "description": {
        "fct-module": "Bio.Sequence.SFF_filters",
        "fct-package": "biosff",
        "fct-signature": "String",
        "fct-source": "src/Bio-Sequence-SFF_filters.html#ti_linker",
        "fct-type": "function",
        "title": "ti_linker"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence SFF_filters",
        "module": "Bio.Sequence.SFF_filters",
        "name": "ti_linker",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:trim_primer",
      "description": {
        "fct-descr": "\u003col\u003e\u003cli\u003e2.2.1.5 Primer filter \n This looks for the B-adaptor at the end of the read.  The 454 implementation isn't very\n effective at finding mutated adaptors.\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Bio.Sequence.SFF_filters",
        "fct-package": "biosff",
        "fct-signature": "String -\u003e TrimFilter",
        "fct-source": "src/Bio-Sequence-SFF_filters.html#trim_primer",
        "fct-type": "function",
        "title": "trim_primer"
      },
      "index": {
        "description": "Primer filter This looks for the B-adaptor at the end of the read The implementation isn very effective at finding mutated adaptors",
        "hierarchy": "Bio Sequence SFF_filters",
        "module": "Bio.Sequence.SFF_filters",
        "name": "trim_primer",
        "normalized": "String-\u003eTrimFilter",
        "package": "biosff",
        "partial": "",
        "signature": "String-\u003eTrimFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:trim_qual20",
      "description": {
        "fct-descr": "\u003col\u003e\u003cli\u003e2.2.1.7 Quality score trimming trims using a 10-base window until a Q20 average is found.\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Bio.Sequence.SFF_filters",
        "fct-package": "biosff",
        "fct-signature": "Int -\u003e TrimFilter",
        "fct-source": "src/Bio-Sequence-SFF_filters.html#trim_qual20",
        "fct-type": "function",
        "title": "trim_qual20"
      },
      "index": {
        "description": "Quality score trimming trims using base window until Q20 average is found",
        "hierarchy": "Bio Sequence SFF_filters",
        "module": "Bio.Sequence.SFF_filters",
        "name": "trim_qual20",
        "normalized": "Int-\u003eTrimFilter",
        "package": "biosff",
        "partial": "",
        "signature": "Int-\u003eTrimFilter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:trim_sigint",
      "description": {
        "fct-descr": "\u003col\u003e\u003cli\u003e2.2.1.4 Signal intensity trim - trim back until \u003c3% borderline flows (0.5..0.7).\n   Then trim borderline values or dots from the end (use a window).\n\u003c/li\u003e\u003c/ol\u003e",
        "fct-module": "Bio.Sequence.SFF_filters",
        "fct-package": "biosff",
        "fct-signature": "TrimFilter",
        "fct-source": "src/Bio-Sequence-SFF_filters.html#trim_sigint",
        "fct-type": "function",
        "title": "trim_sigint"
      },
      "index": {
        "description": "Signal intensity trim trim back until borderline flows Then trim borderline values or dots from the end use window",
        "hierarchy": "Bio Sequence SFF_filters",
        "module": "Bio.Sequence.SFF_filters",
        "name": "trim_sigint",
        "normalized": "",
        "package": "biosff",
        "partial": "",
        "signature": ""
      }
    }
  }
]