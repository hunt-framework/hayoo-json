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
        "word": "biosff"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRead and write the SFF file format used by\n   Roche/454 sequencing to store flowgram data.\n\u003c/p\u003e\u003cp\u003eA flowgram is a series of values (intensities) representing homopolymer runs of\n   A,G,C, and T in a fixed cycle, and usually displayed as a histogram.\n\u003c/p\u003e\u003cp\u003eThis file is based on information in the Roche FLX manual.  Among other sources for information about\n   the format, are The Staden Package, which contains an io_lib with a C routine for parsing this format.\n   According to comments in the sources, the io_lib implementation is based on a file\n   called getsff.c, which I've been unable to track down.  Other software parsing SFFs \n   are QIIME, sff_extract, and Celera's sffToCa.\n\u003c/p\u003e\u003cp\u003eIt is believed that all values are stored big endian.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "SFF",
          "package": "biosff",
          "source": "src/Bio-Sequence-SFF.html",
          "type": "module"
        },
        "index": {
          "description": "Read and write the SFF file format used by Roche sequencing to store flowgram data flowgram is series of values intensities representing homopolymer runs of and in fixed cycle and usually displayed as histogram This file is based on information in the Roche FLX manual Among other sources for information about the format are The Staden Package which contains an io lib with routine for parsing this format According to comments in the sources the io lib implementation is based on file called getsff.c which ve been unable to track down Other software parsing SFFs are QIIME sff extract and Celera sffToCa It is believed that all values are stored big endian",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "SFF",
          "package": "biosff",
          "partial": "SFF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSFF has a 31-byte common header\n\u003c/p\u003e\u003cp\u003eThe format is open to having the index anywhere between reads,\n   we should really keep count and check for each read.  In practice, it\n   seems to be places after the reads.\n\u003c/p\u003e\u003cp\u003eThe following two fields are considered part of the header, but as\n   they are static, they are not part of the data structure\n\u003c/p\u003e\u003cpre\u003e        \n     magic   :: Word32   -- 0x2e736666, i.e. the string \".sff\"\n     version :: Word32   -- 0x00000001\n\u003c/pre\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "CommonHeader",
          "package": "biosff",
          "source": "src/Bio-Sequence-SFF.html#CommonHeader",
          "type": "data"
        },
        "index": {
          "description": "SFF has byte common header The format is open to having the index anywhere between reads we should really keep count and check for each read In practice it seems to be places after the reads The following two fields are considered part of the header but as they are static they are not part of the data structure magic Word32 x2e736666 i.e the string sff version Word32 x00000001",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "CommonHeader",
          "package": "biosff",
          "partial": "Common Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#t:CommonHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of flowgram value\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "Flow",
          "package": "biosff",
          "source": "src/Bio-Sequence-SFF.html#Flow",
          "type": "type"
        },
        "index": {
          "description": "The type of flowgram value",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "Flow",
          "package": "biosff",
          "partial": "Flow",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#t:Flow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "Index",
          "package": "biosff",
          "source": "src/Bio-Sequence-SFF.html#Index",
          "type": "type"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "Index",
          "package": "biosff",
          "partial": "Index",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#t:Index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA quality value is in the range 0..255.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "Qual",
          "package": "biosff",
          "type": "data"
        },
        "index": {
          "description": "quality value is in the range",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "Qual",
          "package": "biosff",
          "partial": "Qual",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#t:Qual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuality data are lazy bytestrings of \u003ccode\u003e\u003ca\u003eQual\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "QualData",
          "package": "biosff",
          "type": "data"
        },
        "index": {
          "description": "Quality data are lazy bytestrings of Qual",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "QualData",
          "package": "biosff",
          "partial": "Qual Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#t:QualData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis contains the actual flowgram for a single read.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "ReadBlock",
          "package": "biosff",
          "source": "src/Bio-Sequence-SFF.html#ReadBlock",
          "type": "data"
        },
        "index": {
          "description": "This contains the actual flowgram for single read",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "ReadBlock",
          "package": "biosff",
          "partial": "Read Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#t:ReadBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach Read has a fixed read header, containing various information.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "ReadHeader",
          "package": "biosff",
          "source": "src/Bio-Sequence-SFF.html#ReadHeader",
          "type": "data"
        },
        "index": {
          "description": "Each Read has fixed read header containing various information",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "ReadHeader",
          "package": "biosff",
          "partial": "Read Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#t:ReadHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead names encode various information, as per this struct.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "ReadName",
          "package": "biosff",
          "source": "src/Bio-Sequence-SFF_name.html#ReadName",
          "type": "data"
        },
        "index": {
          "description": "Read names encode various information as per this struct",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "ReadName",
          "package": "biosff",
          "partial": "Read Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#t:ReadName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data structure storing the contents of an SFF file (modulo the index)\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "SFF",
          "package": "biosff",
          "source": "src/Bio-Sequence-SFF.html#SFF",
          "type": "data"
        },
        "index": {
          "description": "The data structure storing the contents of an SFF file modulo the index",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "SFF",
          "package": "biosff",
          "partial": "SFF",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#t:SFF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence data are lazy bytestrings of ASCII characters.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "SeqData",
          "package": "biosff",
          "type": "data"
        },
        "index": {
          "description": "Sequence data are lazy bytestrings of ASCII characters",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "SeqData",
          "package": "biosff",
          "partial": "Seq Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#t:SeqData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "CommonHeader",
          "package": "biosff",
          "signature": "CommonHeader",
          "source": "src/Bio-Sequence-SFF.html#CommonHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "CommonHeader",
          "package": "biosff",
          "partial": "Common Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:CommonHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "ReadBlock",
          "package": "biosff",
          "signature": "ReadBlock",
          "source": "src/Bio-Sequence-SFF.html#ReadBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "ReadBlock",
          "package": "biosff",
          "partial": "Read Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:ReadBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "ReadHeader",
          "package": "biosff",
          "signature": "ReadHeader",
          "source": "src/Bio-Sequence-SFF.html#ReadHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "ReadHeader",
          "package": "biosff",
          "partial": "Read Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:ReadHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "ReadName",
          "package": "biosff",
          "signature": "ReadName",
          "source": "src/Bio-Sequence-SFF_name.html#ReadName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "ReadName",
          "package": "biosff",
          "partial": "Read Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:ReadName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "SFF",
          "package": "biosff",
          "signature": "SFF !CommonHeader [ReadBlock]",
          "source": "src/Bio-Sequence-SFF.html#SFF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "SFF",
          "normalized": "SFF CommonHeader[ReadBlock]",
          "package": "biosff",
          "partial": "SFF",
          "signature": "SFF CommonHeader[ReadBlock]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:SFF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a sequence position to the corresponding flow position\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "baseToFlowPos",
          "package": "biosff",
          "signature": "ReadBlock -\u003e i -\u003e Int",
          "source": "src/Bio-Sequence-SFF.html#baseToFlowPos",
          "type": "function"
        },
        "index": {
          "description": "Convert sequence position to the corresponding flow position",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "baseToFlowPos",
          "normalized": "ReadBlock-\u003ea-\u003eInt",
          "package": "biosff",
          "partial": "To Flow Pos",
          "signature": "ReadBlock-\u003ei-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:baseToFlowPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "bases",
          "package": "biosff",
          "signature": "SeqData",
          "source": "src/Bio-Sequence-SFF.html#ReadBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "bases",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:bases"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "clip_adapter_left",
          "package": "biosff",
          "signature": "Int16",
          "source": "src/Bio-Sequence-SFF.html#ReadHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "clip_adapter_left",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:clip_adapter_left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "clip_adapter_right",
          "package": "biosff",
          "signature": "Int16",
          "source": "src/Bio-Sequence-SFF.html#ReadHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "clip_adapter_right",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:clip_adapter_right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "clip_qual_left",
          "package": "biosff",
          "signature": "Int16",
          "source": "src/Bio-Sequence-SFF.html#ReadHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "clip_qual_left",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:clip_qual_left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "clip_qual_right",
          "package": "biosff",
          "signature": "Int16",
          "source": "src/Bio-Sequence-SFF.html#ReadHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "clip_qual_right",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:clip_qual_right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a file by decoding it and re-encoding it\n   This will lose the index (which isn't really necessary)\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "convert",
          "package": "biosff",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/Bio-Sequence-SFF.html#convert",
          "type": "function"
        },
        "index": {
          "description": "Convert file by decoding it and re-encoding it This will lose the index which isn really necessary",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "convert",
          "normalized": "FilePath-\u003eIO()",
          "package": "biosff",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:convert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the index as absolute coordinates, not relative.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "cumulative_index",
          "package": "biosff",
          "signature": "ReadBlock -\u003e [Int]",
          "source": "src/Bio-Sequence-SFF.html#cumulative_index",
          "type": "function"
        },
        "index": {
          "description": "Extract the index as absolute coordinates not relative",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "cumulative_index",
          "normalized": "ReadBlock-\u003e[Int]",
          "package": "biosff",
          "signature": "ReadBlock-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:cumulative_index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "date",
          "package": "biosff",
          "signature": "(Int, Int, Int)",
          "source": "src/Bio-Sequence-SFF_name.html#ReadName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "date",
          "normalized": "(Int,Int,Int)",
          "package": "biosff",
          "signature": "(Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "decodeReadName",
          "package": "biosff",
          "signature": "ByteString -\u003e Maybe ReadName",
          "source": "src/Bio-Sequence-SFF_name.html#decodeReadName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "decodeReadName",
          "normalized": "ByteString-\u003eMaybe ReadName",
          "package": "biosff",
          "partial": "Read Name",
          "signature": "ByteString-\u003eMaybe ReadName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:decodeReadName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "encodeReadName",
          "package": "biosff",
          "signature": "ReadName -\u003e ByteString",
          "source": "src/Bio-Sequence-SFF_name.html#encodeReadName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "encodeReadName",
          "normalized": "ReadName-\u003eByteString",
          "package": "biosff",
          "partial": "Read Name",
          "signature": "ReadName-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:encodeReadName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "flow",
          "package": "biosff",
          "signature": "ByteString",
          "source": "src/Bio-Sequence-SFF.html#CommonHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "flow",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:flow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a flow position to the corresponding sequence position\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "flowToBasePos",
          "package": "biosff",
          "signature": "ReadBlock -\u003e i -\u003e Int",
          "source": "src/Bio-Sequence-SFF.html#flowToBasePos",
          "type": "function"
        },
        "index": {
          "description": "Convert flow position to the corresponding sequence position",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "flowToBasePos",
          "normalized": "ReadBlock-\u003ea-\u003eInt",
          "package": "biosff",
          "partial": "To Base Pos",
          "signature": "ReadBlock-\u003ei-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:flowToBasePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "flow_data",
          "package": "biosff",
          "signature": "ByteString",
          "source": "src/Bio-Sequence-SFF.html#ReadBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "flow_data",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:flow_data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "flow_index",
          "package": "biosff",
          "signature": "ByteString",
          "source": "src/Bio-Sequence-SFF.html#ReadBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "flow_index",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:flow_index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "flow_length",
          "package": "biosff",
          "signature": "Int16",
          "source": "src/Bio-Sequence-SFF.html#CommonHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "flow_length",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:flow_length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to access the flowgram\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "flowgram",
          "package": "biosff",
          "signature": "ReadBlock -\u003e [Flow]",
          "source": "src/Bio-Sequence-SFF.html#flowgram",
          "type": "function"
        },
        "index": {
          "description": "Helper function to access the flowgram",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "flowgram",
          "normalized": "ReadBlock-\u003e[Flow]",
          "package": "biosff",
          "signature": "ReadBlock-\u003e[Flow]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:flowgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "flowgram_fmt",
          "package": "biosff",
          "signature": "Word8",
          "source": "src/Bio-Sequence-SFF.html#CommonHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "flowgram_fmt",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:flowgram_fmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function for decoding a \u003ccode\u003e\u003ca\u003eReadBlock\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "getRB",
          "package": "biosff",
          "signature": "Int -\u003e ReadHeader -\u003e Get ReadBlock",
          "source": "src/Bio-Sequence-SFF.html#getRB",
          "type": "function"
        },
        "index": {
          "description": "Helper function for decoding ReadBlock",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "getRB",
          "normalized": "Int-\u003eReadHeader-\u003eGet ReadBlock",
          "package": "biosff",
          "partial": "RB",
          "signature": "Int-\u003eReadHeader-\u003eGet ReadBlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:getRB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "index_length",
          "package": "biosff",
          "signature": "Int32",
          "source": "src/Bio-Sequence-SFF.html#CommonHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "index_length",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:index_length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePoints to a text(?) section\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "index_offset",
          "package": "biosff",
          "signature": "Int64",
          "source": "src/Bio-Sequence-SFF.html#CommonHeader",
          "type": "function"
        },
        "index": {
          "description": "Points to text section",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "index_offset",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:index_offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "key",
          "package": "biosff",
          "signature": "ByteString",
          "source": "src/Bio-Sequence-SFF.html#CommonHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "key",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "key_length",
          "package": "biosff",
          "signature": "Int16",
          "source": "src/Bio-Sequence-SFF.html#CommonHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "key_length",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:key_length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the sequence with masked bases in lower case\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "masked_bases",
          "package": "biosff",
          "signature": "ReadBlock -\u003e SeqData",
          "source": "src/Bio-Sequence-SFF.html#masked_bases",
          "type": "function"
        },
        "index": {
          "description": "Extract the sequence with masked bases in lower case",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "masked_bases",
          "normalized": "ReadBlock-\u003eSeqData",
          "package": "biosff",
          "signature": "ReadBlock-\u003eSeqData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:masked_bases"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "name_length",
          "package": "biosff",
          "signature": "Int16",
          "source": "src/Bio-Sequence-SFF.html#ReadHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "name_length",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:name_length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "num_bases",
          "package": "biosff",
          "signature": "Int32",
          "source": "src/Bio-Sequence-SFF.html#ReadHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "num_bases",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:num_bases"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "num_reads",
          "package": "biosff",
          "signature": "Int32",
          "source": "src/Bio-Sequence-SFF.html#CommonHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "num_reads",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:num_reads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePack a list of flows into the corresponding binary structure (the flow_data field)\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "packFlows",
          "package": "biosff",
          "signature": "[Flow] -\u003e ByteString",
          "source": "src/Bio-Sequence-SFF.html#packFlows",
          "type": "function"
        },
        "index": {
          "description": "Pack list of flows into the corresponding binary structure the flow data field",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "packFlows",
          "normalized": "[Flow]-\u003eByteString",
          "package": "biosff",
          "partial": "Flows",
          "signature": "[Flow]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:packFlows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA ReadBlock can't be an instance of Binary directly, since it depends on\n   information from the CommonHeader.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "putRB",
          "package": "biosff",
          "signature": "Int -\u003e ReadBlock -\u003e Put",
          "source": "src/Bio-Sequence-SFF.html#putRB",
          "type": "function"
        },
        "index": {
          "description": "ReadBlock can be an instance of Binary directly since it depends on information from the CommonHeader",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "putRB",
          "normalized": "Int-\u003eReadBlock-\u003ePut",
          "package": "biosff",
          "partial": "RB",
          "signature": "Int-\u003eReadBlock-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:putRB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "quality",
          "package": "biosff",
          "signature": "QualData",
          "source": "src/Bio-Sequence-SFF.html#ReadBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "quality",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:quality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an SFF file.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "readSFF",
          "package": "biosff",
          "signature": "FilePath -\u003e IO SFF",
          "source": "src/Bio-Sequence-SFF.html#readSFF",
          "type": "function"
        },
        "index": {
          "description": "Read an SFF file",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "readSFF",
          "normalized": "FilePath-\u003eIO SFF",
          "package": "biosff",
          "partial": "SFF",
          "signature": "FilePath-\u003eIO SFF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:readSFF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "read_header",
          "package": "biosff",
          "signature": "ReadHeader",
          "source": "src/Bio-Sequence-SFF.html#ReadBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "read_header",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:read_header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "read_name",
          "package": "biosff",
          "signature": "ByteString",
          "source": "src/Bio-Sequence-SFF.html#ReadHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "read_name",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:read_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an SFF file, but be resilient against errors.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "recoverSFF",
          "package": "biosff",
          "signature": "FilePath -\u003e IO SFF",
          "source": "src/Bio-Sequence-SFF.html#recoverSFF",
          "type": "function"
        },
        "index": {
          "description": "Read an SFF file but be resilient against errors",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "recoverSFF",
          "normalized": "FilePath-\u003eIO SFF",
          "package": "biosff",
          "partial": "SFF",
          "signature": "FilePath-\u003eIO SFF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:recoverSFF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "region",
          "package": "biosff",
          "signature": "Int",
          "source": "src/Bio-Sequence-SFF_name.html#ReadName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "region",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:region"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest serialization by output'ing the header and first two reads \n   in an SFF, and the same after a decode + encode cycle.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "test",
          "package": "biosff",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/Bio-Sequence-SFF.html#test",
          "type": "function"
        },
        "index": {
          "description": "test serialization by output ing the header and first two reads in an SFF and the same after decode encode cycle",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "test",
          "normalized": "FilePath-\u003eIO()",
          "package": "biosff",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "time",
          "package": "biosff",
          "signature": "(Int, Int, Int)",
          "source": "src/Bio-Sequence-SFF_name.html#ReadName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "time",
          "normalized": "(Int,Int,Int)",
          "package": "biosff",
          "signature": "(Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrim a read according to clipping information\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "trim",
          "package": "biosff",
          "signature": "ReadBlock -\u003e ReadBlock",
          "source": "src/Bio-Sequence-SFF.html#trim",
          "type": "function"
        },
        "index": {
          "description": "Trim read according to clipping information",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "trim",
          "normalized": "ReadBlock-\u003eReadBlock",
          "package": "biosff",
          "signature": "ReadBlock-\u003eReadBlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:trim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrim adapters from a read\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "trimAdapter",
          "package": "biosff",
          "signature": "ReadBlock -\u003e ReadBlock",
          "source": "src/Bio-Sequence-SFF.html#trimAdapter",
          "type": "function"
        },
        "index": {
          "description": "Trim adapters from read",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "trimAdapter",
          "normalized": "ReadBlock-\u003eReadBlock",
          "package": "biosff",
          "partial": "Adapter",
          "signature": "ReadBlock-\u003eReadBlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:trimAdapter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrim a \u003ccode\u003e\u003ca\u003eReadBlock\u003c/a\u003e\u003c/code\u003e limiting the number of flows.  If writing to\n   an SFF file, make sure you update the \u003ccode\u003e\u003ca\u003eCommonHeader\u003c/a\u003e\u003c/code\u003e accordingly.\n   See \u003ccode\u003eexamples/Flx.hs\u003c/code\u003e for how to use this.  \n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "trimFlows",
          "package": "biosff",
          "signature": "i -\u003e ReadBlock -\u003e ReadBlock",
          "source": "src/Bio-Sequence-SFF.html#trimFlows",
          "type": "function"
        },
        "index": {
          "description": "Trim ReadBlock limiting the number of flows If writing to an SFF file make sure you update the CommonHeader accordingly See examples Flx.hs for how to use this",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "trimFlows",
          "normalized": "a-\u003eReadBlock-\u003eReadBlock",
          "package": "biosff",
          "partial": "Flows",
          "signature": "i-\u003eReadBlock-\u003eReadBlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:trimFlows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrim a read to specific sequence position, inclusive bounds.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "trimFromTo",
          "package": "biosff",
          "signature": "i -\u003e i -\u003e ReadBlock -\u003e ReadBlock",
          "source": "src/Bio-Sequence-SFF.html#trimFromTo",
          "type": "function"
        },
        "index": {
          "description": "Trim read to specific sequence position inclusive bounds",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "trimFromTo",
          "normalized": "a-\u003ea-\u003eReadBlock-\u003eReadBlock",
          "package": "biosff",
          "partial": "From To",
          "signature": "i-\u003ei-\u003eReadBlock-\u003eReadBlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:trimFromTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrim the key (i.e. first four bases)\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "trimKey",
          "package": "biosff",
          "signature": "ReadBlock -\u003e ReadBlock",
          "source": "src/Bio-Sequence-SFF.html#trimKey",
          "type": "function"
        },
        "index": {
          "description": "Trim the key i.e first four bases",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "trimKey",
          "normalized": "ReadBlock-\u003eReadBlock",
          "package": "biosff",
          "partial": "Key",
          "signature": "ReadBlock-\u003eReadBlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:trimKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnpack the flow_data field into a list of flow values\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "unpackFlows",
          "package": "biosff",
          "signature": "ByteString -\u003e [Flow]",
          "source": "src/Bio-Sequence-SFF.html#unpackFlows",
          "type": "function"
        },
        "index": {
          "description": "Unpack the flow data field into list of flow values",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "unpackFlows",
          "normalized": "ByteString-\u003e[Flow]",
          "package": "biosff",
          "partial": "Flows",
          "signature": "ByteString-\u003e[Flow]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:unpackFlows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an \u003ccode\u003e\u003ca\u003eSFF\u003c/a\u003e\u003c/code\u003e to the specified file name\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "writeSFF",
          "package": "biosff",
          "signature": "FilePath -\u003e SFF -\u003e IO ()",
          "source": "src/Bio-Sequence-SFF.html#writeSFF",
          "type": "function"
        },
        "index": {
          "description": "Write an SFF to the specified file name",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "writeSFF",
          "normalized": "FilePath-\u003eSFF-\u003eIO()",
          "package": "biosff",
          "partial": "SFF",
          "signature": "FilePath-\u003eSFF-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:writeSFF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an \u003ccode\u003e\u003ca\u003eSFF\u003c/a\u003e\u003c/code\u003e to the specified file name, but go back and\n   update the read count.  Useful if you want to output a lazy\n   stream of \u003ccode\u003e\u003ca\u003eReadBlock\u003c/a\u003e\u003c/code\u003es.  Returns the number of reads written.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "writeSFF'",
          "package": "biosff",
          "signature": "FilePath -\u003e SFF -\u003e IO Int",
          "source": "src/Bio-Sequence-SFF.html#writeSFF%27",
          "type": "function"
        },
        "index": {
          "description": "Write an SFF to the specified file name but go back and update the read count Useful if you want to output lazy stream of ReadBlock Returns the number of reads written",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "writeSFF'",
          "normalized": "FilePath-\u003eSFF-\u003eIO Int",
          "package": "biosff",
          "partial": "SFF'",
          "signature": "FilePath-\u003eSFF-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:writeSFF-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "x_loc",
          "package": "biosff",
          "signature": "Int",
          "source": "src/Bio-Sequence-SFF_name.html#ReadName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "x_loc",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:x_loc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "y_loc",
          "package": "biosff",
          "signature": "Int",
          "source": "src/Bio-Sequence-SFF_name.html#ReadName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "y_loc",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF.html#v:y_loc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis implements a number of filters used in the Titanium pipeline, \n   based on published documentation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Sequence.SFF_filters",
          "name": "SFF_filters",
          "package": "biosff",
          "source": "src/Bio-Sequence-SFF_filters.html",
          "type": "module"
        },
        "index": {
          "description": "This implements number of filters used in the Titanium pipeline based on published documentation",
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "SFF_filters",
          "package": "biosff",
          "partial": "SFF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiscardFilters determine whether a read is to be retained or discarded\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF_filters",
          "name": "DiscardFilter",
          "package": "biosff",
          "source": "src/Bio-Sequence-SFF_filters.html#DiscardFilter",
          "type": "type"
        },
        "index": {
          "description": "DiscardFilters determine whether read is to be retained or discarded",
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "DiscardFilter",
          "package": "biosff",
          "partial": "Discard Filter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#t:DiscardFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrimFilters modify the read, typically trimming it for quality\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF_filters",
          "name": "TrimFilter",
          "package": "biosff",
          "source": "src/Bio-Sequence-SFF_filters.html#TrimFilter",
          "type": "type"
        },
        "index": {
          "description": "TrimFilters modify the read typically trimming it for quality",
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "TrimFilter",
          "package": "biosff",
          "partial": "Trim Filter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#t:TrimFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate average of a list\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF_filters",
          "name": "avg",
          "package": "biosff",
          "signature": "[a] -\u003e Double",
          "source": "src/Bio-Sequence-SFF_filters.html#avg",
          "type": "function"
        },
        "index": {
          "description": "Calculate average of list",
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "avg",
          "normalized": "[a]-\u003eDouble",
          "package": "biosff",
          "signature": "[a]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:avg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate a number of flows to position in sequence, and update clipping data accordingly\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF_filters",
          "name": "clipFlows",
          "package": "biosff",
          "signature": "ReadBlock -\u003e Int -\u003e ReadBlock",
          "source": "src/Bio-Sequence-SFF_filters.html#clipFlows",
          "type": "function"
        },
        "index": {
          "description": "Translate number of flows to position in sequence and update clipping data accordingly",
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "clipFlows",
          "normalized": "ReadBlock-\u003eInt-\u003eReadBlock",
          "package": "biosff",
          "partial": "Flows",
          "signature": "ReadBlock-\u003eInt-\u003eReadBlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:clipFlows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate clip_qual_right if more severe than previous value\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF_filters",
          "name": "clipSeq",
          "package": "biosff",
          "signature": "ReadBlock -\u003e Int -\u003e ReadBlock",
          "source": "src/Bio-Sequence-SFF_filters.html#clipSeq",
          "type": "function"
        },
        "index": {
          "description": "Update clip qual right if more severe than previous value",
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "clipSeq",
          "normalized": "ReadBlock-\u003eInt-\u003eReadBlock",
          "package": "biosff",
          "partial": "Seq",
          "signature": "ReadBlock-\u003eInt-\u003eReadBlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:clipSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003col\u003e\u003cli\u003e2.2.1.2 The \u003ca\u003edots\u003c/a\u003e filter discards sequences where the last positive flow is \n   before flow 84, and flows with \u003e5% dots (i.e. three successive noise values) \n   before the last postitive flow.  The percentage can be given as a parameter.\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Bio.Sequence.SFF_filters",
          "name": "discard_dots",
          "package": "biosff",
          "signature": "Double -\u003e DiscardFilter",
          "source": "src/Bio-Sequence-SFF_filters.html#discard_dots",
          "type": "function"
        },
        "index": {
          "description": "The dots filter discards sequences where the last positive flow is before flow and flows with dots i.e three successive noise values before the last postitive flow The percentage can be given as parameter",
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "discard_dots",
          "normalized": "Double-\u003eDiscardFilter",
          "package": "biosff",
          "signature": "Double-\u003eDiscardFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:discard_dots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis filter discards empty sequences.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF_filters",
          "name": "discard_empty",
          "package": "biosff",
          "signature": "DiscardFilter",
          "source": "src/Bio-Sequence-SFF_filters.html#discard_empty",
          "type": "function"
        },
        "index": {
          "description": "This filter discards empty sequences",
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "discard_empty",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:discard_empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiscard sequences that don't have the given key tag (typically TCAG) at the start\n   of the read.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF_filters",
          "name": "discard_key",
          "package": "biosff",
          "signature": "String -\u003e DiscardFilter",
          "source": "src/Bio-Sequence-SFF_filters.html#discard_key",
          "type": "function"
        },
        "index": {
          "description": "Discard sequences that don have the given key tag typically TCAG at the start of the read",
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "discard_key",
          "normalized": "String-\u003eDiscardFilter",
          "package": "biosff",
          "signature": "String-\u003eDiscardFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:discard_key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiscard a read if the number of untrimmed flows is less than n (n=186 for Titanium)\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF_filters",
          "name": "discard_length",
          "package": "biosff",
          "signature": "Int -\u003e DiscardFilter",
          "source": "src/Bio-Sequence-SFF_filters.html#discard_length",
          "type": "function"
        },
        "index": {
          "description": "Discard read if the number of untrimmed flows is less than for Titanium",
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "discard_length",
          "normalized": "Int-\u003eDiscardFilter",
          "package": "biosff",
          "signature": "Int-\u003eDiscardFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:discard_length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003col\u003e\u003cli\u003e2.2.1.3 The \u003ca\u003emixed\u003c/a\u003e filter discards sequences with more than 70% positive flows.  \n   Also, discard with \u003ca\u003enoise,\u003c/a\u003e20% middle (0.45..0.75) or \u003c30% positive.\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Bio.Sequence.SFF_filters",
          "name": "discard_mixed",
          "package": "biosff",
          "signature": "DiscardFilter",
          "source": "src/Bio-Sequence-SFF_filters.html#discard_mixed",
          "type": "function"
        },
        "index": {
          "description": "The mixed filter discards sequences with more than positive flows Also discard with noise middle or positive",
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "discard_mixed",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:discard_mixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList length as a double (eliminates many instances of fromIntegral)\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF_filters",
          "name": "dlength",
          "package": "biosff",
          "signature": "[a] -\u003e Double",
          "source": "src/Bio-Sequence-SFF_filters.html#dlength",
          "type": "function"
        },
        "index": {
          "description": "List length as double eliminates many instances of fromIntegral",
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "dlength",
          "normalized": "[a]-\u003eDouble",
          "package": "biosff",
          "signature": "[a]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:dlength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF_filters",
          "name": "find_primer",
          "package": "biosff",
          "signature": "String -\u003e ReadBlock -\u003e Int",
          "source": "src/Bio-Sequence-SFF_filters.html#find_primer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "find_primer",
          "normalized": "String-\u003eReadBlock-\u003eInt",
          "package": "biosff",
          "signature": "String-\u003eReadBlock-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:find_primer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF_filters",
          "name": "flx_linker",
          "package": "biosff",
          "signature": "String",
          "source": "src/Bio-Sequence-SFF_filters.html#flx_linker",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "flx_linker",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:flx_linker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF_filters",
          "name": "qual20",
          "package": "biosff",
          "signature": "Int -\u003e ReadBlock -\u003e Int",
          "source": "src/Bio-Sequence-SFF_filters.html#qual20",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "qual20",
          "normalized": "Int-\u003eReadBlock-\u003eInt",
          "package": "biosff",
          "signature": "Int-\u003eReadBlock-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:qual20"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF_filters",
          "name": "rapid_adapter",
          "package": "biosff",
          "signature": "String",
          "source": "src/Bio-Sequence-SFF_filters.html#rapid_adapter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "rapid_adapter",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:rapid_adapter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF_filters",
          "name": "rna_adapter",
          "package": "biosff",
          "signature": "String",
          "source": "src/Bio-Sequence-SFF_filters.html#rna_adapter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "rna_adapter",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:rna_adapter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF_filters",
          "name": "rna_adapter2",
          "package": "biosff",
          "signature": "String",
          "source": "src/Bio-Sequence-SFF_filters.html#rna_adapter2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "rna_adapter2",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:rna_adapter2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF_filters",
          "name": "rna_adapter3",
          "package": "biosff",
          "signature": "String",
          "source": "src/Bio-Sequence-SFF_filters.html#rna_adapter3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "rna_adapter3",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:rna_adapter3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF_filters",
          "name": "sigint",
          "package": "biosff",
          "signature": "ReadBlock -\u003e Int",
          "source": "src/Bio-Sequence-SFF_filters.html#sigint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "sigint",
          "normalized": "ReadBlock-\u003eInt",
          "package": "biosff",
          "signature": "ReadBlock-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:sigint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF_filters",
          "name": "ti_adapter_b",
          "package": "biosff",
          "signature": "String",
          "source": "src/Bio-Sequence-SFF_filters.html#ti_adapter_b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "ti_adapter_b",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:ti_adapter_b"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF_filters",
          "name": "ti_linker",
          "package": "biosff",
          "signature": "String",
          "source": "src/Bio-Sequence-SFF_filters.html#ti_linker",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "ti_linker",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:ti_linker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003col\u003e\u003cli\u003e2.2.1.5 Primer filter \n This looks for the B-adaptor at the end of the read.  The 454 implementation isn't very\n effective at finding mutated adaptors.\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Bio.Sequence.SFF_filters",
          "name": "trim_primer",
          "package": "biosff",
          "signature": "String -\u003e TrimFilter",
          "source": "src/Bio-Sequence-SFF_filters.html#trim_primer",
          "type": "function"
        },
        "index": {
          "description": "Primer filter This looks for the B-adaptor at the end of the read The implementation isn very effective at finding mutated adaptors",
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "trim_primer",
          "normalized": "String-\u003eTrimFilter",
          "package": "biosff",
          "signature": "String-\u003eTrimFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:trim_primer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003col\u003e\u003cli\u003e2.2.1.7 Quality score trimming trims using a 10-base window until a Q20 average is found.\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Bio.Sequence.SFF_filters",
          "name": "trim_qual20",
          "package": "biosff",
          "signature": "Int -\u003e TrimFilter",
          "source": "src/Bio-Sequence-SFF_filters.html#trim_qual20",
          "type": "function"
        },
        "index": {
          "description": "Quality score trimming trims using base window until Q20 average is found",
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "trim_qual20",
          "normalized": "Int-\u003eTrimFilter",
          "package": "biosff",
          "signature": "Int-\u003eTrimFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:trim_qual20"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003col\u003e\u003cli\u003e2.2.1.4 Signal intensity trim - trim back until \u003c3% borderline flows (0.5..0.7).\n   Then trim borderline values or dots from the end (use a window).\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Bio.Sequence.SFF_filters",
          "name": "trim_sigint",
          "package": "biosff",
          "signature": "TrimFilter",
          "source": "src/Bio-Sequence-SFF_filters.html#trim_sigint",
          "type": "function"
        },
        "index": {
          "description": "Signal intensity trim trim back until borderline flows Then trim borderline values or dots from the end use window",
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "trim_sigint",
          "package": "biosff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biosff/docs/Bio-Sequence-SFF_filters.html#v:trim_sigint"
      }
    }
  ]
]