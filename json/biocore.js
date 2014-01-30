[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines common data structures for biosequences,\n    i.e. data that represents nucleotide or protein sequences.\n\u003c/p\u003e\u003cp\u003eBasically, anything resembling or wrapping a sequence should\n    implement the \u003ccode\u003e\u003ca\u003eBioSeq\u003c/a\u003e\u003c/code\u003e class (and \u003ccode\u003e\u003ca\u003eBioSeqQual\u003c/a\u003e\u003c/code\u003e if quality information\n    is available).\n\u003c/p\u003e\u003cp\u003eThe data types are mostly wrappers from lazy bytestrings from\n    \u003ccode\u003e\u003ca\u003eLazy\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eChar8\u003c/a\u003e\u003c/code\u003e, but most users\n    of this module should not need to access the underlying data types directly.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Bio.Core.Sequence",
        "fct-package": "biocore",
        "fct-signature": "module",
        "fct-source": "src/Bio-Core-Sequence.html",
        "fct-type": "module",
        "title": "Sequence"
      },
      "index": {
        "description": "This module defines common data structures for biosequences i.e data that represents nucleotide or protein sequences Basically anything resembling or wrapping sequence should implement the BioSeq class and BioSeqQual if quality information is available The data types are mostly wrappers from lazy bytestrings from Lazy and Char8 but most users of this module should not need to access the underlying data types directly",
        "hierarchy": "Bio Core Sequence",
        "module": "Bio.Core.Sequence",
        "name": "Sequence",
        "normalized": "",
        "package": "biocore",
        "partial": "Sequence",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#t:BioSeq",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBioSeq\u003c/a\u003e\u003c/code\u003e class models sequence data, and any data object that\n   represents a biological sequence should implement it.\n\u003c/p\u003e",
        "fct-module": "Bio.Core.Sequence",
        "fct-package": "biocore",
        "fct-signature": "class",
        "fct-source": "src/Bio-Core-Sequence.html#BioSeq",
        "fct-type": "class",
        "title": "BioSeq"
      },
      "index": {
        "description": "The BioSeq class models sequence data and any data object that represents biological sequence should implement it",
        "hierarchy": "Bio Core Sequence",
        "module": "Bio.Core.Sequence",
        "name": "BioSeq",
        "normalized": "",
        "package": "biocore",
        "partial": "Bio Seq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#t:BioSeqQual",
      "description": {
        "fct-descr": "\u003cp\u003eThe BioSeqQual class extends \u003ccode\u003e\u003ca\u003eBioSeq\u003c/a\u003e\u003c/code\u003e with quality data.  Any correspondig data object\n   should be an instance, this will allow Fasta formatted quality data \u003ccode\u003e\u003ca\u003etoFastaQual\u003c/a\u003e\u003c/code\u003e, as\n   well as the combined FastQ format (via \u003ccode\u003e\u003ca\u003etoFastQ\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Bio.Core.Sequence",
        "fct-package": "biocore",
        "fct-signature": "class",
        "fct-source": "src/Bio-Core-Sequence.html#BioSeqQual",
        "fct-type": "class",
        "title": "BioSeqQual"
      },
      "index": {
        "description": "The BioSeqQual class extends BioSeq with quality data Any correspondig data object should be an instance this will allow Fasta formatted quality data toFastaQual as well as the combined FastQ format via toFastQ",
        "hierarchy": "Bio Core Sequence",
        "module": "Bio.Core.Sequence",
        "name": "BioSeqQual",
        "normalized": "",
        "package": "biocore",
        "partial": "Bio Seq Qual",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#t:Offset",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eOffset\u003c/a\u003e\u003c/code\u003e is a zero-based index into a sequence\n\u003c/p\u003e",
        "fct-module": "Bio.Core.Sequence",
        "fct-package": "biocore",
        "fct-signature": "newtype",
        "fct-source": "src/Bio-Core-Sequence.html#Offset",
        "fct-type": "newtype",
        "title": "Offset"
      },
      "index": {
        "description": "An Offset is zero-based index into sequence",
        "hierarchy": "Bio Core Sequence",
        "module": "Bio.Core.Sequence",
        "name": "Offset",
        "normalized": "",
        "package": "biocore",
        "partial": "Offset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#t:Qual",
      "description": {
        "fct-descr": "\u003cp\u003eA quality value is in the range 0..255.\n\u003c/p\u003e",
        "fct-module": "Bio.Core.Sequence",
        "fct-package": "biocore",
        "fct-signature": "newtype",
        "fct-source": "src/Bio-Core-Sequence.html#Qual",
        "fct-type": "newtype",
        "title": "Qual"
      },
      "index": {
        "description": "quality value is in the range",
        "hierarchy": "Bio Core Sequence",
        "module": "Bio.Core.Sequence",
        "name": "Qual",
        "normalized": "",
        "package": "biocore",
        "partial": "Qual",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#t:QualData",
      "description": {
        "fct-descr": "\u003cp\u003eQuality data are lazy bytestrings of \u003ccode\u003e\u003ca\u003eQual\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Bio.Core.Sequence",
        "fct-package": "biocore",
        "fct-signature": "newtype",
        "fct-source": "src/Bio-Core-Sequence.html#QualData",
        "fct-type": "newtype",
        "title": "QualData"
      },
      "index": {
        "description": "Quality data are lazy bytestrings of Qual",
        "hierarchy": "Bio Core Sequence",
        "module": "Bio.Core.Sequence",
        "name": "QualData",
        "normalized": "",
        "package": "biocore",
        "partial": "Qual Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#t:SeqData",
      "description": {
        "fct-descr": "\u003cp\u003eSequence data are lazy bytestrings of ASCII characters.\n\u003c/p\u003e",
        "fct-module": "Bio.Core.Sequence",
        "fct-package": "biocore",
        "fct-signature": "newtype",
        "fct-source": "src/Bio-Core-Sequence.html#SeqData",
        "fct-type": "newtype",
        "title": "SeqData"
      },
      "index": {
        "description": "Sequence data are lazy bytestrings of ASCII characters",
        "hierarchy": "Bio Core Sequence",
        "module": "Bio.Core.Sequence",
        "name": "SeqData",
        "normalized": "",
        "package": "biocore",
        "partial": "Seq Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#t:SeqLabel",
      "description": {
        "fct-descr": "\u003cp\u003eSequence data are lazy bytestrings of ASCII characters.\n\u003c/p\u003e",
        "fct-module": "Bio.Core.Sequence",
        "fct-package": "biocore",
        "fct-signature": "newtype",
        "fct-source": "src/Bio-Core-Sequence.html#SeqLabel",
        "fct-type": "newtype",
        "title": "SeqLabel"
      },
      "index": {
        "description": "Sequence data are lazy bytestrings of ASCII characters",
        "hierarchy": "Bio Core Sequence",
        "module": "Bio.Core.Sequence",
        "name": "SeqLabel",
        "normalized": "",
        "package": "biocore",
        "partial": "Seq Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:Offset",
      "description": {
        "fct-module": "Bio.Core.Sequence",
        "fct-package": "biocore",
        "fct-signature": "Offset",
        "fct-source": "src/Bio-Core-Sequence.html#Offset",
        "fct-type": "function",
        "title": "Offset"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Core Sequence",
        "module": "Bio.Core.Sequence",
        "name": "Offset",
        "normalized": "",
        "package": "biocore",
        "partial": "Offset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:Qual",
      "description": {
        "fct-module": "Bio.Core.Sequence",
        "fct-package": "biocore",
        "fct-signature": "Qual",
        "fct-source": "src/Bio-Core-Sequence.html#Qual",
        "fct-type": "function",
        "title": "Qual"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Core Sequence",
        "module": "Bio.Core.Sequence",
        "name": "Qual",
        "normalized": "",
        "package": "biocore",
        "partial": "Qual",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:QualData",
      "description": {
        "fct-module": "Bio.Core.Sequence",
        "fct-package": "biocore",
        "fct-signature": "QualData",
        "fct-source": "src/Bio-Core-Sequence.html#QualData",
        "fct-type": "function",
        "title": "QualData"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Core Sequence",
        "module": "Bio.Core.Sequence",
        "name": "QualData",
        "normalized": "",
        "package": "biocore",
        "partial": "Qual Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:SeqData",
      "description": {
        "fct-module": "Bio.Core.Sequence",
        "fct-package": "biocore",
        "fct-signature": "SeqData",
        "fct-source": "src/Bio-Core-Sequence.html#SeqData",
        "fct-type": "function",
        "title": "SeqData"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Core Sequence",
        "module": "Bio.Core.Sequence",
        "name": "SeqData",
        "normalized": "",
        "package": "biocore",
        "partial": "Seq Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:SeqLabel",
      "description": {
        "fct-module": "Bio.Core.Sequence",
        "fct-package": "biocore",
        "fct-signature": "SeqLabel",
        "fct-source": "src/Bio-Core-Sequence.html#SeqLabel",
        "fct-type": "function",
        "title": "SeqLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Core Sequence",
        "module": "Bio.Core.Sequence",
        "name": "SeqLabel",
        "normalized": "",
        "package": "biocore",
        "partial": "Seq Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:seqdata",
      "description": {
        "fct-module": "Bio.Core.Sequence",
        "fct-package": "biocore",
        "fct-signature": "seqdata",
        "fct-source": "src/Bio-Core-Sequence.html#seqdata",
        "fct-type": "method",
        "title": "seqdata"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Core Sequence",
        "module": "Bio.Core.Sequence",
        "name": "seqdata",
        "normalized": "",
        "package": "biocore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:seqheader",
      "description": {
        "fct-module": "Bio.Core.Sequence",
        "fct-package": "biocore",
        "fct-signature": "seqheader",
        "fct-source": "src/Bio-Core-Sequence.html#seqheader",
        "fct-type": "method",
        "title": "seqheader"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Core Sequence",
        "module": "Bio.Core.Sequence",
        "name": "seqheader",
        "normalized": "",
        "package": "biocore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:seqid",
      "description": {
        "fct-module": "Bio.Core.Sequence",
        "fct-package": "biocore",
        "fct-signature": "seqid",
        "fct-source": "src/Bio-Core-Sequence.html#seqid",
        "fct-type": "method",
        "title": "seqid"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Core Sequence",
        "module": "Bio.Core.Sequence",
        "name": "seqid",
        "normalized": "",
        "package": "biocore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:seqlabel",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Warning: 'seqlabel' is deprecated, use 'seqid' or 'seqheader' instead.\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Bio.Core.Sequence",
        "fct-package": "biocore",
        "fct-signature": "seqlabel",
        "fct-source": "src/Bio-Core-Sequence.html#seqlabel",
        "fct-type": "method",
        "title": "seqlabel"
      },
      "index": {
        "description": "Deprecated Warning seqlabel is deprecated use seqid or seqheader instead",
        "hierarchy": "Bio Core Sequence",
        "module": "Bio.Core.Sequence",
        "name": "seqlabel",
        "normalized": "",
        "package": "biocore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:seqlength",
      "description": {
        "fct-module": "Bio.Core.Sequence",
        "fct-package": "biocore",
        "fct-signature": "seqlength",
        "fct-source": "src/Bio-Core-Sequence.html#seqlength",
        "fct-type": "method",
        "title": "seqlength"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Core Sequence",
        "module": "Bio.Core.Sequence",
        "name": "seqlength",
        "normalized": "",
        "package": "biocore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:seqqual",
      "description": {
        "fct-module": "Bio.Core.Sequence",
        "fct-package": "biocore",
        "fct-signature": "sq -\u003e QualData",
        "fct-source": "src/Bio-Core-Sequence.html#seqqual",
        "fct-type": "method",
        "title": "seqqual"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Core Sequence",
        "module": "Bio.Core.Sequence",
        "name": "seqqual",
        "normalized": "a-\u003eQualData",
        "package": "biocore",
        "partial": "",
        "signature": "sq-\u003eQualData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:toFastQ",
      "description": {
        "fct-descr": "\u003cp\u003eOutput FastQ-formatted data.  For simplicity, only the Sanger quality format is supported,\n   and only four lines per sequence (i.e. no line breaks in sequence or quality data).\n\u003c/p\u003e",
        "fct-module": "Bio.Core.Sequence",
        "fct-package": "biocore",
        "fct-signature": "s -\u003e ByteString",
        "fct-source": "src/Bio-Core-Sequence.html#toFastQ",
        "fct-type": "function",
        "title": "toFastQ"
      },
      "index": {
        "description": "Output FastQ-formatted data For simplicity only the Sanger quality format is supported and only four lines per sequence i.e no line breaks in sequence or quality data",
        "hierarchy": "Bio Core Sequence",
        "module": "Bio.Core.Sequence",
        "name": "toFastQ",
        "normalized": "a-\u003eByteString",
        "package": "biocore",
        "partial": "Fast",
        "signature": "s-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:toFasta",
      "description": {
        "fct-descr": "\u003cp\u003eAny \u003ccode\u003e\u003ca\u003eBioSeq\u003c/a\u003e\u003c/code\u003e can be formatted as Fasta, 60-char lines.\n\u003c/p\u003e",
        "fct-module": "Bio.Core.Sequence",
        "fct-package": "biocore",
        "fct-signature": "s -\u003e ByteString",
        "fct-source": "src/Bio-Core-Sequence.html#toFasta",
        "fct-type": "function",
        "title": "toFasta"
      },
      "index": {
        "description": "Any BioSeq can be formatted as Fasta char lines",
        "hierarchy": "Bio Core Sequence",
        "module": "Bio.Core.Sequence",
        "name": "toFasta",
        "normalized": "a-\u003eByteString",
        "package": "biocore",
        "partial": "Fasta",
        "signature": "s-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:toFastaQual",
      "description": {
        "fct-descr": "\u003cp\u003eOutput Fasta-formatted quality data (.qual files), where quality values are output as\n   whitespace-separated integers.\n\u003c/p\u003e",
        "fct-module": "Bio.Core.Sequence",
        "fct-package": "biocore",
        "fct-signature": "s -\u003e ByteString",
        "fct-source": "src/Bio-Core-Sequence.html#toFastaQual",
        "fct-type": "function",
        "title": "toFastaQual"
      },
      "index": {
        "description": "Output Fasta-formatted quality data qual files where quality values are output as whitespace-separated integers",
        "hierarchy": "Bio Core Sequence",
        "module": "Bio.Core.Sequence",
        "name": "toFastaQual",
        "normalized": "a-\u003eByteString",
        "package": "biocore",
        "partial": "Fasta Qual",
        "signature": "s-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:unOff",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.Core.Sequence",
        "fct-package": "biocore",
        "fct-signature": "Int64",
        "fct-source": "src/Bio-Core-Sequence.html#Offset",
        "fct-type": "function",
        "title": "unOff"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Core Sequence",
        "module": "Bio.Core.Sequence",
        "name": "unOff",
        "normalized": "",
        "package": "biocore",
        "partial": "Off",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:unQD",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.Core.Sequence",
        "fct-package": "biocore",
        "fct-signature": "ByteString",
        "fct-source": "src/Bio-Core-Sequence.html#QualData",
        "fct-type": "function",
        "title": "unQD"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Core Sequence",
        "module": "Bio.Core.Sequence",
        "name": "unQD",
        "normalized": "",
        "package": "biocore",
        "partial": "QD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:unQual",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.Core.Sequence",
        "fct-package": "biocore",
        "fct-signature": "Word8",
        "fct-source": "src/Bio-Core-Sequence.html#Qual",
        "fct-type": "function",
        "title": "unQual"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Core Sequence",
        "module": "Bio.Core.Sequence",
        "name": "unQual",
        "normalized": "",
        "package": "biocore",
        "partial": "Qual",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:unSD",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.Core.Sequence",
        "fct-package": "biocore",
        "fct-signature": "ByteString",
        "fct-source": "src/Bio-Core-Sequence.html#SeqData",
        "fct-type": "function",
        "title": "unSD"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Core Sequence",
        "module": "Bio.Core.Sequence",
        "name": "unSD",
        "normalized": "",
        "package": "biocore",
        "partial": "SD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Sequence.html#v:unSL",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.Core.Sequence",
        "fct-package": "biocore",
        "fct-signature": "ByteString",
        "fct-source": "src/Bio-Core-Sequence.html#SeqLabel",
        "fct-type": "function",
        "title": "unSL"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Core Sequence",
        "module": "Bio.Core.Sequence",
        "name": "unSL",
        "normalized": "",
        "package": "biocore",
        "partial": "SL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Strand.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefine common data types for features of sequences \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Bio.Core.Strand",
        "fct-package": "biocore",
        "fct-signature": "module",
        "fct-source": "src/Bio-Core-Strand.html",
        "fct-type": "module",
        "title": "Strand"
      },
      "index": {
        "description": "Define common data types for features of sequences",
        "hierarchy": "Bio Core Strand",
        "module": "Bio.Core.Strand",
        "name": "Strand",
        "normalized": "",
        "package": "biocore",
        "partial": "Strand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Strand.html#t:Strand",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eStrand\u003c/a\u003e\u003c/code\u003e is either plus (forward) or minus (reverse or reverse-complement)\n\u003c/p\u003e",
        "fct-module": "Bio.Core.Strand",
        "fct-package": "biocore",
        "fct-signature": "data",
        "fct-source": "src/Bio-Core-Strand.html#Strand",
        "fct-type": "data",
        "title": "Strand"
      },
      "index": {
        "description": "Strand is either plus forward or minus reverse or reverse-complement",
        "hierarchy": "Bio Core Strand",
        "module": "Bio.Core.Strand",
        "name": "Strand",
        "normalized": "",
        "package": "biocore",
        "partial": "Strand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Strand.html#v:Minus",
      "description": {
        "fct-module": "Bio.Core.Strand",
        "fct-package": "biocore",
        "fct-signature": "Minus",
        "fct-source": "src/Bio-Core-Strand.html#Strand",
        "fct-type": "function",
        "title": "Minus"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Core Strand",
        "module": "Bio.Core.Strand",
        "name": "Minus",
        "normalized": "",
        "package": "biocore",
        "partial": "Minus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core-Strand.html#v:Plus",
      "description": {
        "fct-module": "Bio.Core.Strand",
        "fct-package": "biocore",
        "fct-signature": "Plus",
        "fct-source": "src/Bio-Core-Strand.html#Strand",
        "fct-type": "function",
        "title": "Plus"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Core Strand",
        "module": "Bio.Core.Strand",
        "name": "Plus",
        "normalized": "",
        "package": "biocore",
        "partial": "Plus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biocore/docs/Bio-Core.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRe-exporting everything from sub-modules for simplicity \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Bio.Core",
        "fct-package": "biocore",
        "fct-signature": "module",
        "fct-source": "src/Bio-Core.html",
        "fct-type": "module",
        "title": "Core"
      },
      "index": {
        "description": "Re-exporting everything from sub-modules for simplicity",
        "hierarchy": "Bio Core",
        "module": "Bio.Core",
        "name": "Core",
        "normalized": "",
        "package": "biocore",
        "partial": "Core",
        "signature": ""
      }
    }
  }
]